(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [888], {
        1732: function (e, t, n) {
            "use strict";

            function r(e, t) {
                var n;
                return "string" == typeof e ? t ? (null !== (n = t[e]) && void 0 !== n || (t[e] = document.querySelectorAll(e)), e = t[e]) : e = document.querySelectorAll(e) : e instanceof Element && (e = [e]), Array.from(e || [])
            }
            n.d(t, {
                I: function () {
                    return r
                }
            })
        },
        6463: function (e, t, n) {
            "use strict";
            n.d(t, {
                m: function () {
                    return r
                }
            });
            let r = e => "function" == typeof e
        },
        290: function (e) {
            var t;
            t = function () {
                "use strict";

                function e(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })), n.push.apply(n, r)
                    }
                    return n
                }

                function t(t) {
                    for (var n = 1; n < arguments.length; n++) {
                        var r = null != arguments[n] ? arguments[n] : {};
                        n % 2 ? e(Object(r), !0).forEach(function (e) {
                            var n, i;
                            n = t, i = r[e], e in n ? Object.defineProperty(n, e, {
                                value: i,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : n[e] = i
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : e(Object(r)).forEach(function (e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                        })
                    }
                    return t
                }

                function n(e, t) {
                    return function (e) {
                        if (Array.isArray(e)) return e
                    }(e) || function (e, t) {
                        if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) {
                            var n = [],
                                r = !0,
                                i = !1,
                                o = void 0;
                            try {
                                for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                            } catch (l) {
                                i = !0, o = l
                            } finally {
                                try {
                                    r || null == s.return || s.return()
                                } finally {
                                    if (i) throw o
                                }
                            }
                            return n
                        }
                    }(e, t) || function () {
                        throw TypeError("Invalid attempt to destructure non-iterable instance")
                    }()
                }

                function r(e) {
                    return function (e) {
                        if (Array.isArray(e)) {
                            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                            return n
                        }
                    }(e) || function (e) {
                        if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
                    }(e) || function () {
                        throw TypeError("Invalid attempt to spread non-iterable instance")
                    }()
                }

                function i() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                            serializable: !0
                        },
                        t = {};
                    return {
                        get: function (n, r) {
                            var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                                    miss: function () {
                                        return Promise.resolve()
                                    }
                                },
                                o = JSON.stringify(n);
                            if (o in t) return Promise.resolve(e.serializable ? JSON.parse(t[o]) : t[o]);
                            var a = r(),
                                s = i && i.miss || function () {
                                    return Promise.resolve()
                                };
                            return a.then(function (e) {
                                return s(e)
                            }).then(function () {
                                return a
                            })
                        },
                        set: function (n, r) {
                            return t[JSON.stringify(n)] = e.serializable ? JSON.stringify(r) : r, Promise.resolve(r)
                        },
                        delete: function (e) {
                            return delete t[JSON.stringify(e)], Promise.resolve()
                        },
                        clear: function () {
                            return t = {}, Promise.resolve()
                        }
                    }
                }

                function o(e, t) {
                    return t && Object.keys(t).forEach(function (n) {
                        e[n] = t[n](e)
                    }), e
                }

                function a(e) {
                    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                    var i = 0;
                    return e.replace(/%s/g, function () {
                        return encodeURIComponent(n[i++])
                    })
                }
                var s = {
                    WithinQueryParameters: 0,
                    WithinHeaders: 1
                };

                function l(e, t) {
                    var n = e || {},
                        r = n.data || {};
                    return Object.keys(n).forEach(function (e) {
                        -1 === ["timeout", "headers", "queryParameters", "data", "cacheable"].indexOf(e) && (r[e] = n[e])
                    }), {
                        data: Object.entries(r).length > 0 ? r : void 0,
                        timeout: n.timeout || t,
                        headers: n.headers || {},
                        queryParameters: n.queryParameters || {},
                        cacheable: n.cacheable
                    }
                }
                var u = {
                    Read: 1,
                    Write: 2,
                    Any: 3
                };

                function c(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                    return t(t({}, e), {}, {
                        status: n,
                        lastUpdate: Date.now()
                    })
                }

                function d(e) {
                    return "string" == typeof e ? {
                        protocol: "https",
                        url: e,
                        accept: u.Any
                    } : {
                        protocol: e.protocol || "https",
                        url: e.url,
                        accept: e.accept || u.Any
                    }
                }
                var f = "POST";

                function h(e, n, i, o) {
                    var a, s, l, u = [],
                        f = function (e, n) {
                            if ("GET" !== e.method && (void 0 !== e.data || void 0 !== n.data)) return JSON.stringify(Array.isArray(e.data) ? e.data : t(t({}, e.data), n.data))
                        }(i, o),
                        h = (a = t(t({}, e.headers), o.headers), s = {}, Object.keys(a).forEach(function (e) {
                            var t = a[e];
                            s[e.toLowerCase()] = t
                        }), s),
                        g = i.method,
                        y = "GET" !== i.method ? {} : t(t({}, i.data), o.data),
                        b = t(t(t({
                            "x-algolia-agent": e.userAgent.value
                        }, e.queryParameters), y), o.queryParameters),
                        x = 0,
                        w = function t(n, r) {
                            var a, s, l, d = n.pop();
                            if (void 0 === d) throw {
                                name: "RetryError",
                                message: "Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.",
                                transporterStackTrace: m(u)
                            };
                            var y = {
                                    data: f,
                                    headers: h,
                                    method: g,
                                    url: (a = i.path, s = p(b), l = "".concat(d.protocol, "://").concat(d.url, "/").concat("/" === a.charAt(0) ? a.substr(1) : a), s.length && (l += "?".concat(s)), l),
                                    connectTimeout: r(x, e.timeouts.connect),
                                    responseTimeout: r(x, o.timeout)
                                },
                                w = function (e) {
                                    var t = {
                                        request: y,
                                        response: e,
                                        host: d,
                                        triesLeft: n.length
                                    };
                                    return u.push(t), t
                                },
                                j = {
                                    onSuccess: function (e) {
                                        return function (e) {
                                            try {
                                                return JSON.parse(e.content)
                                            } catch (t) {
                                                throw {
                                                    name: "DeserializationError",
                                                    message: t.message,
                                                    response: e
                                                }
                                            }
                                        }(e)
                                    },
                                    onRetry: function (i) {
                                        var o = w(i);
                                        return i.isTimedOut && x++, Promise.all([e.logger.info("Retryable failure", v(o)), e.hostsCache.set(d, c(d, i.isTimedOut ? 3 : 2))]).then(function () {
                                            return t(n, r)
                                        })
                                    },
                                    onFail: function (e) {
                                        throw w(e),
                                            function (e, t) {
                                                var n = e.content,
                                                    r = e.status,
                                                    i = n;
                                                try {
                                                    i = JSON.parse(n).message
                                                } catch (o) {}
                                                return {
                                                    name: "ApiError",
                                                    message: i,
                                                    status: r,
                                                    transporterStackTrace: t
                                                }
                                            }(e, m(u))
                                    }
                                };
                            return e.requester.send(y).then(function (e) {
                                var t, n, r;
                                return (t = e.status, e.isTimedOut || (n = e.isTimedOut, r = e.status, !n && 0 == ~~r) || 2 != ~~(t / 100) && 4 != ~~(t / 100)) ? j.onRetry(e) : 2 == ~~(e.status / 100) ? j.onSuccess(e) : j.onFail(e)
                            })
                        };
                    return (l = e.hostsCache, Promise.all(n.map(function (e) {
                        return l.get(e, function () {
                            return Promise.resolve(c(e))
                        })
                    })).then(function (e) {
                        var t = e.filter(function (e) {
                                return 1 === e.status || Date.now() - e.lastUpdate > 12e4
                            }),
                            i = e.filter(function (e) {
                                return 3 === e.status && Date.now() - e.lastUpdate <= 12e4
                            }),
                            o = [].concat(r(t), r(i));
                        return {
                            getTimeout: function (e, t) {
                                return (0 === i.length && 0 === e ? 1 : i.length + 3 + e) * t
                            },
                            statelessHosts: o.length > 0 ? o.map(function (e) {
                                return d(e)
                            }) : n
                        }
                    })).then(function (e) {
                        return w(r(e.statelessHosts).reverse(), e.getTimeout)
                    })
                }

                function p(e) {
                    return Object.keys(e).map(function (t) {
                        var n;
                        return a("%s=%s", t, (n = e[t], "[object Object]" === Object.prototype.toString.call(n) || "[object Array]" === Object.prototype.toString.call(n) ? JSON.stringify(e[t]) : e[t]))
                    }).join("&")
                }

                function m(e) {
                    return e.map(function (e) {
                        return v(e)
                    })
                }

                function v(e) {
                    var n = e.request.headers["x-algolia-api-key"] ? {
                        "x-algolia-api-key": "*****"
                    } : {};
                    return t(t({}, e), {}, {
                        request: t(t({}, e.request), {}, {
                            headers: t(t({}, e.request.headers), n)
                        })
                    })
                }
                var g = function (e) {
                        var r, i, a, c, f, p, m, v, g, y, b, x, w, j = e.appId,
                            O = (r = void 0 !== e.authMode ? e.authMode : s.WithinHeaders, i = {
                                "x-algolia-api-key": e.apiKey,
                                "x-algolia-application-id": j
                            }, {
                                headers: function () {
                                    return r === s.WithinHeaders ? i : {}
                                },
                                queryParameters: function () {
                                    return r === s.WithinQueryParameters ? i : {}
                                }
                            }),
                            P = (c = (a = t(t({
                                hosts: [{
                                    url: "".concat(j, "-dsn.algolia.net"),
                                    accept: u.Read
                                }, {
                                    url: "".concat(j, ".algolia.net"),
                                    accept: u.Write
                                }].concat(function (e) {
                                    for (var t = e.length - 1; t > 0; t--) {
                                        var n = Math.floor(Math.random() * (t + 1)),
                                            r = e[t];
                                        e[t] = e[n], e[n] = r
                                    }
                                    return e
                                }([{
                                    url: "".concat(j, "-1.algolianet.com")
                                }, {
                                    url: "".concat(j, "-2.algolianet.com")
                                }, {
                                    url: "".concat(j, "-3.algolianet.com")
                                }]))
                            }, e), {}, {
                                headers: t(t(t({}, O.headers()), {
                                    "content-type": "application/x-www-form-urlencoded"
                                }), e.headers),
                                queryParameters: t(t({}, O.queryParameters()), e.queryParameters)
                            })).hostsCache, f = a.logger, p = a.requester, m = a.requestsCache, v = a.responsesCache, g = a.timeouts, y = a.userAgent, b = a.hosts, x = a.queryParameters, w = {
                                hostsCache: c,
                                logger: f,
                                requester: p,
                                requestsCache: m,
                                responsesCache: v,
                                timeouts: g,
                                userAgent: y,
                                headers: a.headers,
                                queryParameters: x,
                                hosts: b.map(function (e) {
                                    return d(e)
                                }),
                                read: function (e, t) {
                                    var r = l(t, w.timeouts.read),
                                        i = function () {
                                            return h(w, w.hosts.filter(function (e) {
                                                return 0 != (e.accept & u.Read)
                                            }), e, r)
                                        };
                                    if (!0 !== (void 0 !== r.cacheable ? r.cacheable : e.cacheable)) return i();
                                    var o = {
                                        request: e,
                                        mappedRequestOptions: r,
                                        transporter: {
                                            queryParameters: w.queryParameters,
                                            headers: w.headers
                                        }
                                    };
                                    return w.responsesCache.get(o, function () {
                                        return w.requestsCache.get(o, function () {
                                            return w.requestsCache.set(o, i()).then(function (e) {
                                                return Promise.all([w.requestsCache.delete(o), e])
                                            }, function (e) {
                                                return Promise.all([w.requestsCache.delete(o), Promise.reject(e)])
                                            }).then(function (e) {
                                                var t = n(e, 2);
                                                return t[0], t[1]
                                            })
                                        })
                                    }, {
                                        miss: function (e) {
                                            return w.responsesCache.set(o, e)
                                        }
                                    })
                                },
                                write: function (e, t) {
                                    return h(w, w.hosts.filter(function (e) {
                                        return 0 != (e.accept & u.Write)
                                    }), e, l(t, w.timeouts.write))
                                }
                            });
                        return o({
                            transporter: P,
                            appId: j,
                            addAlgoliaAgent: function (e, t) {
                                P.userAgent.add({
                                    segment: e,
                                    version: t
                                })
                            },
                            clearCache: function () {
                                return Promise.all([P.requestsCache.clear(), P.responsesCache.clear()]).then(function () {})
                            }
                        }, e.methods)
                    },
                    y = function (e) {
                        return function (t, n) {
                            return "GET" === t.method ? e.transporter.read(t, n) : e.transporter.write(t, n)
                        }
                    },
                    b = function (e) {
                        return function (t) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            return o({
                                transporter: e.transporter,
                                appId: e.appId,
                                indexName: t
                            }, n.methods)
                        }
                    },
                    x = function (e) {
                        return function (n, r) {
                            var i = n.map(function (e) {
                                return t(t({}, e), {}, {
                                    params: p(e.params || {})
                                })
                            });
                            return e.transporter.read({
                                method: f,
                                path: "1/indexes/*/queries",
                                data: {
                                    requests: i
                                },
                                cacheable: !0
                            }, r)
                        }
                    },
                    w = function (e) {
                        return function (n, r) {
                            return Promise.all(n.map(function (n) {
                                var i = n.params,
                                    o = i.facetName,
                                    a = i.facetQuery,
                                    s = function (e, t) {
                                        if (null == e) return {};
                                        var n, r, i = function (e, t) {
                                            if (null == e) return {};
                                            var n, r, i = {},
                                                o = Object.keys(e);
                                            for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                                            return i
                                        }(e, t);
                                        if (Object.getOwnPropertySymbols) {
                                            var o = Object.getOwnPropertySymbols(e);
                                            for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                                        }
                                        return i
                                    }(i, ["facetName", "facetQuery"]);
                                return b(e)(n.indexName, {
                                    methods: {
                                        searchForFacetValues: P
                                    }
                                }).searchForFacetValues(o, a, t(t({}, r), s))
                            }))
                        }
                    },
                    j = function (e) {
                        return function (t, n, r) {
                            return e.transporter.read({
                                method: f,
                                path: a("1/answers/%s/prediction", e.indexName),
                                data: {
                                    query: t,
                                    queryLanguages: n
                                },
                                cacheable: !0
                            }, r)
                        }
                    },
                    O = function (e) {
                        return function (t, n) {
                            return e.transporter.read({
                                method: f,
                                path: a("1/indexes/%s/query", e.indexName),
                                data: {
                                    query: t
                                },
                                cacheable: !0
                            }, n)
                        }
                    },
                    P = function (e) {
                        return function (t, n, r) {
                            return e.transporter.read({
                                method: f,
                                path: a("1/indexes/%s/facets/%s/query", e.indexName, t),
                                data: {
                                    facetQuery: n
                                },
                                cacheable: !0
                            }, r)
                        }
                    };

                function E(e, o, a) {
                    var l, u, c, d, f, h;
                    return g(t(t(t({}, {
                        appId: e,
                        apiKey: o,
                        timeouts: {
                            connect: 1,
                            read: 2,
                            write: 30
                        },
                        requester: {
                            send: function (e) {
                                return new Promise(function (t) {
                                    var n = new XMLHttpRequest;
                                    n.open(e.method, e.url, !0), Object.keys(e.headers).forEach(function (t) {
                                        return n.setRequestHeader(t, e.headers[t])
                                    });
                                    var r, i = function (e, r) {
                                            return setTimeout(function () {
                                                n.abort(), t({
                                                    status: 0,
                                                    content: r,
                                                    isTimedOut: !0
                                                })
                                            }, 1e3 * e)
                                        },
                                        o = i(e.connectTimeout, "Connection timeout");
                                    n.onreadystatechange = function () {
                                        n.readyState > n.OPENED && void 0 === r && (clearTimeout(o), r = i(e.responseTimeout, "Socket timeout"))
                                    }, n.onerror = function () {
                                        0 === n.status && (clearTimeout(o), clearTimeout(r), t({
                                            content: n.responseText || "Network request failed",
                                            status: n.status,
                                            isTimedOut: !1
                                        }))
                                    }, n.onload = function () {
                                        clearTimeout(o), clearTimeout(r), t({
                                            content: n.responseText,
                                            status: n.status,
                                            isTimedOut: !1
                                        })
                                    }, n.send(e.data)
                                })
                            }
                        },
                        logger: {
                            debug: function (e, t) {
                                return Promise.resolve()
                            },
                            info: function (e, t) {
                                return Promise.resolve()
                            },
                            error: function (e, t) {
                                return console.error(e, t), Promise.resolve()
                            }
                        },
                        responsesCache: i(),
                        requestsCache: i({
                            serializable: !1
                        }),
                        hostsCache: function e(t) {
                            var i = r(t.caches),
                                o = i.shift();
                            return void 0 === o ? {
                                get: function (e, t) {
                                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                                        miss: function () {
                                            return Promise.resolve()
                                        }
                                    };
                                    return t().then(function (e) {
                                        return Promise.all([e, r.miss(e)])
                                    }).then(function (e) {
                                        return n(e, 1)[0]
                                    })
                                },
                                set: function (e, t) {
                                    return Promise.resolve(t)
                                },
                                delete: function (e) {
                                    return Promise.resolve()
                                },
                                clear: function () {
                                    return Promise.resolve()
                                }
                            } : {
                                get: function (t, n) {
                                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                                        miss: function () {
                                            return Promise.resolve()
                                        }
                                    };
                                    return o.get(t, n, r).catch(function () {
                                        return e({
                                            caches: i
                                        }).get(t, n, r)
                                    })
                                },
                                set: function (t, n) {
                                    return o.set(t, n).catch(function () {
                                        return e({
                                            caches: i
                                        }).set(t, n)
                                    })
                                },
                                delete: function (t) {
                                    return o.delete(t).catch(function () {
                                        return e({
                                            caches: i
                                        }).delete(t)
                                    })
                                },
                                clear: function () {
                                    return o.clear().catch(function () {
                                        return e({
                                            caches: i
                                        }).clear()
                                    })
                                }
                            }
                        }({
                            caches: [(l = {
                                key: "".concat("4.14.2", "-").concat(e)
                            }, c = "algoliasearch-client-js-".concat(l.key), d = function () {
                                return void 0 === u && (u = l.localStorage || window.localStorage), u
                            }, f = function () {
                                return JSON.parse(d().getItem(c) || "{}")
                            }, {
                                get: function (e, t) {
                                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                                        miss: function () {
                                            return Promise.resolve()
                                        }
                                    };
                                    return Promise.resolve().then(function () {
                                        var n = JSON.stringify(e),
                                            r = f()[n];
                                        return Promise.all([r || t(), void 0 !== r])
                                    }).then(function (e) {
                                        var t = n(e, 2),
                                            i = t[0];
                                        return Promise.all([i, t[1] || r.miss(i)])
                                    }).then(function (e) {
                                        return n(e, 1)[0]
                                    })
                                },
                                set: function (e, t) {
                                    return Promise.resolve().then(function () {
                                        var n = f();
                                        return n[JSON.stringify(e)] = t, d().setItem(c, JSON.stringify(n)), t
                                    })
                                },
                                delete: function (e) {
                                    return Promise.resolve().then(function () {
                                        var t = f();
                                        delete t[JSON.stringify(e)], d().setItem(c, JSON.stringify(t))
                                    })
                                },
                                clear: function () {
                                    return Promise.resolve().then(function () {
                                        d().removeItem(c)
                                    })
                                }
                            }), i()]
                        }),
                        userAgent: (h = {
                            value: "Algolia for JavaScript (".concat("4.14.2", ")"),
                            add: function (e) {
                                var t = "; ".concat(e.segment).concat(void 0 !== e.version ? " (".concat(e.version, ")") : "");
                                return -1 === h.value.indexOf(t) && (h.value = "".concat(h.value).concat(t)), h
                            }
                        }).add({
                            segment: "Browser",
                            version: "lite"
                        }),
                        authMode: s.WithinQueryParameters
                    }), a), {}, {
                        methods: {
                            search: x,
                            searchForFacetValues: w,
                            multipleQueries: x,
                            multipleSearchForFacetValues: w,
                            customRequest: y,
                            initIndex: function (e) {
                                return function (t) {
                                    return b(e)(t, {
                                        methods: {
                                            search: O,
                                            searchForFacetValues: P,
                                            findAnswers: j
                                        }
                                    })
                                }
                            }
                        }
                    }))
                }
                return E.version = "4.14.2", E
            }, e.exports = t()
        },
        6010: function (e, t, n) {
            "use strict";
            t.Z = function () {
                for (var e, t, n = 0, r = ""; n < arguments.length;)(e = arguments[n++]) && (t = function e(t) {
                    var n, r, i = "";
                    if ("string" == typeof t || "number" == typeof t) i += t;
                    else if ("object" == typeof t) {
                        if (Array.isArray(t))
                            for (n = 0; n < t.length; n++) t[n] && (r = e(t[n])) && (i && (i += " "), i += r);
                        else
                            for (n in t) t[n] && (i && (i += " "), i += n)
                    }
                    return i
                }(e)) && (r && (r += " "), r += t);
                return r
            }
        },
        5202: function () {
            ! function () {
                "use strict";

                function e(e) {
                    var t = !0,
                        n = !1,
                        r = null,
                        i = {
                            text: !0,
                            search: !0,
                            url: !0,
                            tel: !0,
                            email: !0,
                            password: !0,
                            number: !0,
                            date: !0,
                            month: !0,
                            week: !0,
                            time: !0,
                            datetime: !0,
                            "datetime-local": !0
                        };

                    function o(e) {
                        return !!e && e !== document && "HTML" !== e.nodeName && "BODY" !== e.nodeName && "classList" in e && "contains" in e.classList
                    }

                    function a(e) {
                        e.classList.contains("focus-visible") || (e.classList.add("focus-visible"), e.setAttribute("data-focus-visible-added", ""))
                    }

                    function s(e) {
                        t = !1
                    }

                    function l() {
                        document.addEventListener("mousemove", u), document.addEventListener("mousedown", u), document.addEventListener("mouseup", u), document.addEventListener("pointermove", u), document.addEventListener("pointerdown", u), document.addEventListener("pointerup", u), document.addEventListener("touchmove", u), document.addEventListener("touchstart", u), document.addEventListener("touchend", u)
                    }

                    function u(e) {
                        e.target.nodeName && "html" === e.target.nodeName.toLowerCase() || (t = !1, document.removeEventListener("mousemove", u), document.removeEventListener("mousedown", u), document.removeEventListener("mouseup", u), document.removeEventListener("pointermove", u), document.removeEventListener("pointerdown", u), document.removeEventListener("pointerup", u), document.removeEventListener("touchmove", u), document.removeEventListener("touchstart", u), document.removeEventListener("touchend", u))
                    }
                    document.addEventListener("keydown", function (n) {
                        n.metaKey || n.altKey || n.ctrlKey || (o(e.activeElement) && a(e.activeElement), t = !0)
                    }, !0), document.addEventListener("mousedown", s, !0), document.addEventListener("pointerdown", s, !0), document.addEventListener("touchstart", s, !0), document.addEventListener("visibilitychange", function (e) {
                        "hidden" === document.visibilityState && (n && (t = !0), l())
                    }, !0), l(), e.addEventListener("focus", function (e) {
                        var n, r, s;
                        o(e.target) && (t || (r = (n = e.target).type, "INPUT" === (s = n.tagName) && i[r] && !n.readOnly || "TEXTAREA" === s && !n.readOnly || n.isContentEditable)) && a(e.target)
                    }, !0), e.addEventListener("blur", function (e) {
                        if (o(e.target)) {
                            var t;
                            (e.target.classList.contains("focus-visible") || e.target.hasAttribute("data-focus-visible-added")) && (n = !0, window.clearTimeout(r), r = window.setTimeout(function () {
                                n = !1
                            }, 100), (t = e.target).hasAttribute("data-focus-visible-added") && (t.classList.remove("focus-visible"), t.removeAttribute("data-focus-visible-added")))
                        }
                    }, !0), e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && e.host ? e.host.setAttribute("data-js-focus-visible", "") : e.nodeType === Node.DOCUMENT_NODE && (document.documentElement.classList.add("js-focus-visible"), document.documentElement.setAttribute("data-js-focus-visible", ""))
                }
                if ("undefined" != typeof window && "undefined" != typeof document) {
                    var t;
                    window.applyFocusVisiblePolyfill = e;
                    try {
                        t = new CustomEvent("focus-visible-polyfill-ready")
                    } catch (n) {
                        (t = document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready", !1, !1, {})
                    }
                    window.dispatchEvent(t)
                }
                "undefined" != typeof document && e(document)
            }()
        },
        4394: function (e, t, n) {
            "use strict";
            n.d(t, {
                K: function () {
                    return r
                },
                k: function () {
                    return i
                }
            });
            var r = function () {},
                i = function () {}
        },
        3454: function (e, t, n) {
            "use strict";
            var r, i;
            e.exports = (null == (r = n.g.process) ? void 0 : r.env) && "object" == typeof (null == (i = n.g.process) ? void 0 : i.env) ? n.g.process : n(7663)
        },
        3837: function (e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function () {
                return n(8799)
            }])
        },
        227: function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getDomainLocale = function (e, t, n, r) {
                return !1
            }, ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        1551: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = n(2648).Z,
                i = n(7273).Z,
                o = r(n(7294)),
                a = n(1003),
                s = n(7795),
                l = n(4465),
                u = n(2692),
                c = n(8245),
                d = n(9246),
                f = n(227),
                h = n(3468);
            let p = new Set;

            function m(e, t, n, r) {
                if (a.isLocalURL(t)) {
                    if (!r.bypassPrefetchedCheck) {
                        let i = void 0 !== r.locale ? r.locale : "locale" in e ? e.locale : void 0,
                            o = t + "%" + n + "%" + i;
                        if (p.has(o)) return;
                        p.add(o)
                    }
                    Promise.resolve(e.prefetch(t, n, r)).catch(e => {})
                }
            }

            function v(e) {
                return "string" == typeof e ? e : s.formatUrl(e)
            }
            let g = o.default.forwardRef(function (e, t) {
                let n, r;
                let {
                    href: s,
                    as: p,
                    children: g,
                    prefetch: y,
                    passHref: b,
                    replace: x,
                    shallow: w,
                    scroll: j,
                    locale: O,
                    onClick: P,
                    onMouseEnter: E,
                    onTouchStart: S,
                    legacyBehavior: k = !0 !== Boolean(!0)
                } = e, T = i(e, ["href", "as", "children", "prefetch", "passHref", "replace", "shallow", "scroll", "locale", "onClick", "onMouseEnter", "onTouchStart", "legacyBehavior"]);
                n = g, k && ("string" == typeof n || "number" == typeof n) && (n = o.default.createElement("a", null, n));
                let A = !1 !== y,
                    C = o.default.useContext(u.RouterContext),
                    I = o.default.useContext(c.AppRouterContext),
                    R = null != C ? C : I,
                    L = !C,
                    {
                        href: N,
                        as: D
                    } = o.default.useMemo(() => {
                        if (!C) {
                            let e = v(s);
                            return {
                                href: e,
                                as: p ? v(p) : e
                            }
                        }
                        let [t, n] = a.resolveHref(C, s, !0);
                        return {
                            href: t,
                            as: p ? a.resolveHref(C, p) : n || t
                        }
                    }, [C, s, p]),
                    M = o.default.useRef(N),
                    V = o.default.useRef(D);
                k && (r = o.default.Children.only(n));
                let F = k ? r && "object" == typeof r && r.ref : t,
                    [z, B, q] = d.useIntersection({
                        rootMargin: "200px"
                    }),
                    U = o.default.useCallback(e => {
                        (V.current !== D || M.current !== N) && (q(), V.current = D, M.current = N), z(e), F && ("function" == typeof F ? F(e) : "object" == typeof F && (F.current = e))
                    }, [D, F, N, q, z]);
                o.default.useEffect(() => {
                    R && B && A && m(R, N, D, {
                        locale: O
                    })
                }, [D, N, B, O, A, null == C ? void 0 : C.locale, R]);
                let _ = {
                    ref: U,
                    onClick(e) {
                        k || "function" != typeof P || P(e), k && r.props && "function" == typeof r.props.onClick && r.props.onClick(e), R && !e.defaultPrevented && function (e, t, n, r, i, s, l, u, c, d) {
                            let {
                                nodeName: f
                            } = e.currentTarget, h = "A" === f.toUpperCase();
                            if (h && (function (e) {
                                    let {
                                        target: t
                                    } = e.currentTarget;
                                    return t && "_self" !== t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                                }(e) || !a.isLocalURL(n))) return;
                            e.preventDefault();
                            let p = () => {
                                "beforePopState" in t ? t[i ? "replace" : "push"](n, r, {
                                    shallow: s,
                                    locale: u,
                                    scroll: l
                                }) : t[i ? "replace" : "push"](r || n, {
                                    forceOptimisticNavigation: !d
                                })
                            };
                            c ? o.default.startTransition(p) : p()
                        }(e, R, N, D, x, w, j, O, L, A)
                    },
                    onMouseEnter(e) {
                        k || "function" != typeof E || E(e), k && r.props && "function" == typeof r.props.onMouseEnter && r.props.onMouseEnter(e), R && (A || !L) && m(R, N, D, {
                            locale: O,
                            priority: !0,
                            bypassPrefetchedCheck: !0
                        })
                    },
                    onTouchStart(e) {
                        k || "function" != typeof S || S(e), k && r.props && "function" == typeof r.props.onTouchStart && r.props.onTouchStart(e), R && (A || !L) && m(R, N, D, {
                            locale: O,
                            priority: !0,
                            bypassPrefetchedCheck: !0
                        })
                    }
                };
                if (!k || b || "a" === r.type && !("href" in r.props)) {
                    let $ = void 0 !== O ? O : null == C ? void 0 : C.locale,
                        H = (null == C ? void 0 : C.isLocaleDomain) && f.getDomainLocale(D, $, null == C ? void 0 : C.locales, null == C ? void 0 : C.domainLocales);
                    _.href = H || h.addBasePath(l.addLocale(D, $, null == C ? void 0 : C.defaultLocale))
                }
                return k ? o.default.cloneElement(r, _) : o.default.createElement("a", Object.assign({}, T, _), n)
            });
            t.default = g, ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        9246: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.useIntersection = function (e) {
                let {
                    rootRef: t,
                    rootMargin: n,
                    disabled: l
                } = e, u = l || !o, [c, d] = r.useState(!1), [f, h] = r.useState(null);
                r.useEffect(() => {
                    if (o) {
                        if (!u && !c && f && f.tagName) {
                            let e = function (e, t, n) {
                                let {
                                    id: r,
                                    observer: i,
                                    elements: o
                                } = function (e) {
                                    let t;
                                    let n = {
                                            root: e.root || null,
                                            margin: e.rootMargin || ""
                                        },
                                        r = s.find(e => e.root === n.root && e.margin === n.margin);
                                    if (r && (t = a.get(r))) return t;
                                    let i = new Map,
                                        o = new IntersectionObserver(e => {
                                            e.forEach(e => {
                                                let t = i.get(e.target),
                                                    n = e.isIntersecting || e.intersectionRatio > 0;
                                                t && n && t(n)
                                            })
                                        }, e);
                                    return t = {
                                        id: n,
                                        observer: o,
                                        elements: i
                                    }, s.push(n), a.set(n, t), t
                                }(n);
                                return o.set(e, t), i.observe(e),
                                    function () {
                                        if (o.delete(e), i.unobserve(e), 0 === o.size) {
                                            i.disconnect(), a.delete(r);
                                            let t = s.findIndex(e => e.root === r.root && e.margin === r.margin);
                                            t > -1 && s.splice(t, 1)
                                        }
                                    }
                            }(f, e => e && d(e), {
                                root: null == t ? void 0 : t.current,
                                rootMargin: n
                            });
                            return e
                        }
                    } else if (!c) {
                        let r = i.requestIdleCallback(() => d(!0));
                        return () => i.cancelIdleCallback(r)
                    }
                }, [f, u, n, t, c]);
                let p = r.useCallback(() => {
                    d(!1)
                }, []);
                return [h, c, p]
            };
            var r = n(7294),
                i = n(4686);
            let o = "function" == typeof IntersectionObserver,
                a = new Map,
                s = [];
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        1109: function (e, t, n) {
            "use strict";
            n.d(t, {
                z: function () {
                    return u
                }
            });
            var r = n(5893),
                i = n(1664),
                o = n.n(i),
                a = n(6010);

            function s(e) {
                return (0, r.jsx)("svg", {
                    viewBox: "0 0 20 20",
                    fill: "none",
                    "aria-hidden": "true",
                    ...e,
                    children: (0, r.jsx)("path", {
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"
                    })
                })
            }
            let l = {
                primary: "rounded-full bg-zinc-900 py-1 px-3 text-white hover:bg-zinc-700 dark:bg-emerald-400/10 dark:text-emerald-400 dark:ring-1 dark:ring-inset dark:ring-emerald-400/20 dark:hover:bg-emerald-400/10 dark:hover:text-emerald-300 dark:hover:ring-emerald-300",
                secondary: "rounded-full bg-zinc-100 py-1 px-3 text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-800/40 dark:text-zinc-400 dark:ring-1 dark:ring-inset dark:ring-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-300",
                filled: "rounded-full bg-zinc-900 py-1 px-3 text-white hover:bg-zinc-700 dark:bg-emerald-500 dark:text-white dark:hover:bg-emerald-400",
                outline: "rounded-full py-1 px-3 text-zinc-700 ring-1 ring-inset ring-zinc-900/10 hover:bg-zinc-900/2.5 hover:text-zinc-900 dark:text-zinc-400 dark:ring-white/10 dark:hover:bg-white/5 dark:hover:text-white",
                text: "text-emerald-500 hover:text-emerald-600 dark:text-emerald-400 dark:hover:text-emerald-500"
            };

            function u(e) {
                let {
                    variant: t = "primary",
                    className: n,
                    children: i,
                    arrow: u,
                    ...c
                } = e, d = c.href ? o() : "button";
                n = (0, a.Z)("inline-flex gap-0.5 justify-center overflow-hidden text-sm font-medium transition", l[t], n);
                let f = (0, r.jsx)(s, {
                    className: (0, a.Z)("mt-0.5 h-5 w-5", "text" === t && "relative top-px", "left" === u && "-ml-1 rotate-180", "right" === u && "-mr-1")
                });
                return (0, r.jsxs)(d, {
                    className: n,
                    ...c,
                    children: ["left" === u && f, i, "right" === u && f]
                })
            }
        },
        3585: function (e, t, n) {
            "use strict";
            n.d(t, {
                X: function () {
                    return v
                }
            });
            var r = n(5893),
                i = n(7294),
                o = n(1664),
                a = n.n(o),
                s = n(1732),
                l = n(6463);
            let u = {
                any: 0,
                all: 1
            };
            var c = n(9115),
                d = n(5933),
                f = n(1448);

            function h(e) {
                return (0, r.jsx)("svg", {
                    viewBox: "0 0 20 20",
                    fill: "none",
                    strokeLinecap: "round",
                    "aria-hidden": "true",
                    ...e,
                    children: (0, r.jsx)("path", {
                        d: "m6.5 11.5-.964-.964a3.535 3.535 0 1 1 5-5l.964.964m2 2 .964.964a3.536 3.536 0 0 1-5 5L8.5 13.5m0-5 3 3"
                    })
                })
            }

            function p(e) {
                let {
                    tag: t,
                    label: n
                } = e;
                return t || n ? (0, r.jsxs)("div", {
                    className: "flex items-center gap-x-3",
                    children: [t && (0, r.jsx)(d.V, {
                        children: t
                    }), t && n && (0, r.jsx)("span", {
                        className: "h-0.5 w-0.5 rounded-full bg-zinc-300 dark:bg-zinc-600"
                    }), n && (0, r.jsx)("span", {
                        className: "font-mono text-xs text-zinc-400",
                        children: n
                    })]
                }) : null
            }

            function m(e) {
                let {
                    id: t,
                    inView: n,
                    children: i
                } = e;
                return (0, r.jsxs)(a(), {
                    href: `#${t}`,
                    className: "group text-inherit no-underline hover:text-inherit",
                    children: [n && (0, r.jsx)("div", {
                        className: "absolute mt-1 ml-[calc(-1*var(--width))] hidden w-[var(--width)] opacity-0 transition [--width:calc(2.625rem+0.5px+50%-min(50%,calc(theme(maxWidth.lg)+theme(spacing.8))))] group-hover:opacity-100 group-focus:opacity-100 md:block lg:z-50 2xl:[--width:theme(spacing.10)]",
                        children: (0, r.jsx)("div", {
                            className: "group/anchor block h-5 w-5 rounded-lg bg-zinc-50 ring-1 ring-inset ring-zinc-300 transition hover:ring-zinc-500 dark:bg-zinc-800 dark:ring-zinc-700 dark:hover:bg-zinc-700 dark:hover:ring-zinc-600",
                            children: (0, r.jsx)(h, {
                                className: "h-5 w-5 stroke-zinc-500 transition dark:stroke-zinc-400 dark:group-hover/anchor:stroke-white"
                            })
                        })
                    }), i]
                })
            }

            function v(e) {
                let {
                    level: t = 2,
                    children: n,
                    id: o,
                    tag: a,
                    label: d,
                    anchor: h = !0,
                    ...v
                } = e, g = `h${t}`, y = (0, i.useRef)(), b = (0, c.S)(e => e.registerHeading), x = function (e, {
                    root: t,
                    margin: n,
                    amount: r,
                    once: o = !1
                } = {}) {
                    let [a, c] = (0, i.useState)(!1);
                    return (0, i.useEffect)(() => {
                        if (!e.current || o && a) return;
                        let i = () => (c(!0), o ? void 0 : () => c(!1)),
                            d = {
                                root: t && t.current || void 0,
                                margin: n,
                                amount: "some" === r ? "any" : r
                            };
                        return function (e, t, {
                            root: n,
                            margin: r,
                            amount: i = "any"
                        } = {}) {
                            if ("undefined" == typeof IntersectionObserver) return () => {};
                            let o = (0, s.I)(e),
                                a = new WeakMap,
                                c = e => {
                                    e.forEach(e => {
                                        let n = a.get(e.target);
                                        if (e.isIntersecting !== Boolean(n)) {
                                            if (e.isIntersecting) {
                                                let r = t(e);
                                                (0, l.m)(r) ? a.set(e.target, r): d.unobserve(e.target)
                                            } else n && (n(e), a.delete(e.target))
                                        }
                                    })
                                },
                                d = new IntersectionObserver(c, {
                                    root: n,
                                    rootMargin: r,
                                    threshold: "number" == typeof i ? i : u[i]
                                });
                            return o.forEach(e => d.observe(e)), () => d.disconnect()
                        }(e.current, i, d)
                    }, [t, e, n, o]), a
                }(y, {
                    margin: `${(0,f.c)(-3.5)}px 0px 0px 0px`,
                    amount: "all"
                });
                return (0, i.useEffect)(() => {
                    2 === t && b({
                        id: o,
                        ref: y,
                        offsetRem: a || d ? 8 : 6
                    })
                }), (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(p, {
                        tag: a,
                        label: d
                    }), (0, r.jsx)(g, {
                        ref: y,
                        id: h ? o : void 0,
                        className: a || d ? "mt-2 scroll-mt-32" : "scroll-mt-24",
                        ...v,
                        children: h ? (0, r.jsx)(m, {
                            id: o,
                            inView: x,
                            children: n
                        }) : n
                    })]
                })
            }
        },
        9115: function (e, t, n) {
            "use strict";
            n.d(t, {
                S: function () {
                    return d
                },
                s: function () {
                    return c
                }
            });
            var r = n(5893),
                i = n(7294),
                o = n(3973),
                a = n(3445),
                s = n(1448);
            let l = (0, i.createContext)(),
                u = i.useLayoutEffect;

            function c(e) {
                let t, n, {
                        sections: c,
                        children: d
                    } = e,
                    [f] = (0, i.useState)(() => (0, o.M)(e => ({
                        sections: c,
                        visibleSections: [],
                        setVisibleSections: t => e(e => e.visibleSections.join() === t.join() ? {} : {
                            visibleSections: t
                        }),
                        registerHeading(t) {
                            let {
                                id: n,
                                ref: r,
                                offsetRem: i
                            } = t;
                            return e(e => ({
                                sections: e.sections.map(e => e.id === n ? {
                                    ...e,
                                    headingRef: r,
                                    offsetRem: i
                                } : e)
                            }))
                        }
                    })));
                return t = (0, a.oR)(f, e => e.setVisibleSections), n = (0, a.oR)(f, e => e.sections), (0, i.useEffect)(() => {
                    function e() {
                        let {
                            innerHeight: e,
                            scrollY: r
                        } = window, i = [];
                        for (let o = 0; o < n.length; o++) {
                            var a, l;
                            let {
                                id: u,
                                headingRef: c,
                                offsetRem: d
                            } = n[o], f = (0, s.c)(d), h = c.current.getBoundingClientRect().top + r;
                            0 === o && h - f > r && i.push("_top");
                            let p = n[o + 1],
                                m = (null !== (a = null == p ? void 0 : p.headingRef.current.getBoundingClientRect().top) && void 0 !== a ? a : 1 / 0) + r - (0, s.c)(null !== (l = null == p ? void 0 : p.offsetRem) && void 0 !== l ? l : 0);
                            (h > r && h < r + e || m > r && m < r + e || h <= r && m >= r + e) && i.push(u)
                        }
                        t(i)
                    }
                    let r = window.requestAnimationFrame(() => e());
                    return window.addEventListener("scroll", e, {
                        passive: !0
                    }), window.addEventListener("resize", e), () => {
                        window.cancelAnimationFrame(r), window.removeEventListener("scroll", e), window.removeEventListener("resize", e)
                    }
                }, [t, n]), u(() => {
                    f.setState({
                        sections: c
                    })
                }, [f, c]), (0, r.jsx)(l.Provider, {
                    value: f,
                    children: d
                })
            }

            function d(e) {
                let t = (0, i.useContext)(l);
                return (0, a.oR)(t, e)
            }
        },
        5933: function (e, t, n) {
            "use strict";
            n.d(t, {
                V: function () {
                    return u
                }
            });
            var r, i = n(5893),
                o = n(6010);
            let a = {
                    medium: "rounded-lg px-1.5 ring-1 ring-inset"
                },
                s = {
                    emerald: {
                        small: "text-emerald-500 dark:text-emerald-400",
                        medium: "ring-emerald-300 dark:ring-emerald-400/30 bg-emerald-400/10 text-emerald-500 dark:text-emerald-400"
                    },
                    sky: {
                        small: "text-sky-500",
                        medium: "ring-sky-300 bg-sky-400/10 text-sky-500 dark:ring-sky-400/30 dark:bg-sky-400/10 dark:text-sky-400"
                    },
                    amber: {
                        small: "text-amber-500",
                        medium: "ring-amber-300 bg-amber-400/10 text-amber-500 dark:ring-amber-400/30 dark:bg-amber-400/10 dark:text-amber-400"
                    },
                    rose: {
                        small: "text-red-500 dark:text-rose-500",
                        medium: "ring-rose-200 bg-rose-50 text-red-500 dark:ring-rose-500/20 dark:bg-rose-400/10 dark:text-rose-400"
                    },
                    zinc: {
                        small: "text-zinc-400 dark:text-zinc-500",
                        medium: "ring-zinc-200 bg-zinc-50 text-zinc-500 dark:ring-zinc-500/20 dark:bg-zinc-400/10 dark:text-zinc-400"
                    }
                },
                l = {
                    get: "emerald",
                    post: "sky",
                    put: "amber",
                    delete: "rose"
                };

            function u(e) {
                let {
                    children: t,
                    variant: n = "medium",
                    color: u = null !== (r = l[t.toLowerCase()]) && void 0 !== r ? r : "emerald"
                } = e;
                return (0, i.jsx)("span", {
                    className: (0, o.Z)("font-mono text-[0.625rem] font-semibold leading-6", a[n], s[u][n]),
                    children: t
                })
            }
        },
        1448: function (e, t, n) {
            "use strict";

            function r(e) {
                let t = parseFloat(window.getComputedStyle(document.documentElement).fontSize);
                return parseFloat(e) * t
            }
            n.d(t, {
                c: function () {
                    return r
                }
            })
        },
        8799: function (e, t, n) {
            "use strict";
            let r, i;
            n.r(t), n.d(t, {
                default: function () {
                    return iA
                }
            });
            var o, a, s, l, u, c, d, f, h, p, m, v, g, y, b, x, w, j, O, P, E = {};
            n.r(E), n.d(E, {
                Button: function () {
                    return ej.z
                },
                CodeGroup: function () {
                    return ig
                },
                Col: function () {
                    return iE
                },
                Note: function () {
                    return iO
                },
                Properties: function () {
                    return iS
                },
                Property: function () {
                    return ik
                },
                Row: function () {
                    return iP
                },
                a: function () {
                    return ix
                },
                code: function () {
                    return iy
                },
                h2: function () {
                    return iw
                },
                pre: function () {
                    return ib
                }
            });
            var S = n(5893),
                k = n(9008),
                T = n.n(k),
                A = n(1163),
                C = n(1151),
                I = n(1664),
                R = n.n(I),
                L = n(296),
                N = n(7294);

            function D(e, t, ...n) {
                if (e in t) {
                    let r = t[e];
                    return "function" == typeof r ? r(...n) : r
                }
                let i = Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(e=>`"${e}"`).join(", ")}.`);
                throw Error.captureStackTrace && Error.captureStackTrace(i, D), i
            }
            var M = ((o = M || {})[o.None = 0] = "None", o[o.RenderStrategy = 1] = "RenderStrategy", o[o.Static = 2] = "Static", o),
                V = ((a = V || {})[a.Unmount = 0] = "Unmount", a[a.Hidden = 1] = "Hidden", a);

            function F({
                ourProps: e,
                theirProps: t,
                slot: n,
                defaultTag: r,
                features: i,
                visible: o = !0,
                name: a
            }) {
                let s = B(t, e);
                if (o) return z(s, n, r, a);
                let l = null != i ? i : 0;
                if (2 & l) {
                    let {
                        static: u = !1,
                        ...c
                    } = s;
                    if (u) return z(c, n, r, a)
                }
                if (1 & l) {
                    let {
                        unmount: d = !0,
                        ...f
                    } = s;
                    return D(d ? 0 : 1, {
                        0: () => null,
                        1: () => z({
                            ...f,
                            hidden: !0,
                            style: {
                                display: "none"
                            }
                        }, n, r, a)
                    })
                }
                return z(s, n, r, a)
            }

            function z(e, t = {}, n, r) {
                let {
                    as: i = n,
                    children: o,
                    refName: a = "ref",
                    ...s
                } = _(e, ["unmount", "static"]), l = void 0 !== e.ref ? {
                    [a]: e.ref
                } : {}, u = "function" == typeof o ? o(t) : o;
                s.className && "function" == typeof s.className && (s.className = s.className(t));
                let c = {};
                if (t) {
                    let d = !1,
                        f = [];
                    for (let [h, p] of Object.entries(t)) "boolean" == typeof p && (d = !0), !0 === p && f.push(h);
                    d && (c["data-headlessui-state"] = f.join(" "))
                }
                if (i === N.Fragment && Object.keys(U(s)).length > 0) {
                    if (!(0, N.isValidElement)(u) || Array.isArray(u) && u.length > 1) throw Error(['Passing props on "Fragment"!', "", `The current component <${r} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(s).map(e => `  - ${e}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map(e => `  - ${e}`).join(`
`)].join(`
`));
                    return (0, N.cloneElement)(u, Object.assign({}, B(u.props, U(_(s, ["ref"]))), c, l, function (...e) {
                        return {
                            ref: e.every(e => null == e) ? void 0 : t => {
                                for (let n of e) null != n && ("function" == typeof n ? n(t) : n.current = t)
                            }
                        }
                    }(u.ref, l.ref)))
                }
                return (0, N.createElement)(i, Object.assign({}, _(s, ["ref"]), i !== N.Fragment && l, i !== N.Fragment && c), u)
            }

            function B(...e) {
                if (0 === e.length) return {};
                if (1 === e.length) return e[0];
                let t = {},
                    n = {};
                for (let r of e)
                    for (let i in r) i.startsWith("on") && "function" == typeof r[i] ? (null != n[i] || (n[i] = []), n[i].push(r[i])) : t[i] = r[i];
                if (t.disabled || t["aria-disabled"]) return Object.assign(t, Object.fromEntries(Object.keys(n).map(e => [e, void 0])));
                for (let o in n) Object.assign(t, {
                    [o](e, ...t) {
                        let r = n[o];
                        for (let i of r) {
                            if ((e instanceof Event || (null == e ? void 0 : e.nativeEvent) instanceof Event) && e.defaultPrevented) return;
                            i(e, ...t)
                        }
                    }
                });
                return t
            }

            function q(e) {
                var t;
                return Object.assign((0, N.forwardRef)(e), {
                    displayName: null != (t = e.displayName) ? t : e.name
                })
            }

            function U(e) {
                let t = Object.assign({}, e);
                for (let n in t) void 0 === t[n] && delete t[n];
                return t
            }

            function _(e, t = []) {
                let n = Object.assign({}, e);
                for (let r of t) r in n && delete n[r];
                return n
            }
            let $ = (0, N.createContext)(null);
            $.displayName = "OpenClosedContext";
            var H = ((s = H || {})[s.Open = 0] = "Open", s[s.Closed = 1] = "Closed", s);

            function W() {
                return (0, N.useContext)($)
            }

            function Z({
                value: e,
                children: t
            }) {
                return N.createElement($.Provider, {
                    value: e
                }, t)
            }
            let Y = "undefined" == typeof window || "undefined" == typeof document,
                G = Y ? N.useEffect : N.useLayoutEffect;

            function K() {
                let e = (0, N.useRef)(!1);
                return G(() => (e.current = !0, () => {
                    e.current = !1
                }), []), e
            }

            function X(e) {
                let t = (0, N.useRef)(e);
                return G(() => {
                    t.current = e
                }, [e]), t
            }
            let J = {
                serverHandoffComplete: !1
            };

            function Q() {
                let [e, t] = (0, N.useState)(J.serverHandoffComplete);
                return (0, N.useEffect)(() => {
                    !0 !== e && t(!0)
                }, [e]), (0, N.useEffect)(() => {
                    !1 === J.serverHandoffComplete && (J.serverHandoffComplete = !0)
                }, []), e
            }
            let ee = function (e) {
                    let t = X(e);
                    return N.useCallback((...e) => t.current(...e), [t])
                },
                et = Symbol();

            function en(...e) {
                let t = (0, N.useRef)(e);
                (0, N.useEffect)(() => {
                    t.current = e
                }, [e]);
                let n = ee(e => {
                    for (let n of t.current) null != n && ("function" == typeof n ? n(e) : n.current = e)
                });
                return e.every(e => null == e || (null == e ? void 0 : e[et])) ? void 0 : n
            }

            function er(e) {
                "function" == typeof queueMicrotask ? queueMicrotask(e) : Promise.resolve().then(e).catch(e => setTimeout(() => {
                    throw e
                }))
            }

            function ei() {
                let e = [],
                    t = [],
                    n = {
                        enqueue(e) {
                            t.push(e)
                        },
                        addEventListener: (e, t, r, i) => (e.addEventListener(t, r, i), n.add(() => e.removeEventListener(t, r, i))),
                        requestAnimationFrame(...e) {
                            let t = requestAnimationFrame(...e);
                            return n.add(() => cancelAnimationFrame(t))
                        },
                        nextFrame: (...e) => n.requestAnimationFrame(() => n.requestAnimationFrame(...e)),
                        setTimeout(...e) {
                            let t = setTimeout(...e);
                            return n.add(() => clearTimeout(t))
                        },
                        microTask(...e) {
                            let t = {
                                current: !0
                            };
                            return er(() => {
                                t.current && e[0]()
                            }), n.add(() => {
                                t.current = !1
                            })
                        },
                        add: t => (e.push(t), () => {
                            let n = e.indexOf(t);
                            if (n >= 0) {
                                let [r] = e.splice(n, 1);
                                r()
                            }
                        }),
                        dispose() {
                            for (let t of e.splice(0)) t()
                        },
                        async workQueue() {
                            for (let e of t.splice(0)) await e()
                        }
                    };
                return n
            }

            function eo(e, ...t) {
                e && t.length > 0 && e.classList.add(...t)
            }

            function ea(e, ...t) {
                e && t.length > 0 && e.classList.remove(...t)
            }

            function es() {
                let [e] = (0, N.useState)(ei);
                return (0, N.useEffect)(() => () => e.dispose(), [e]), e
            }

            function el(e = "") {
                return e.split(" ").filter(e => e.trim().length > 1)
            }
            let eu = (0, N.createContext)(null);
            eu.displayName = "TransitionContext";
            var ec = ((l = ec || {}).Visible = "visible", l.Hidden = "hidden", l);
            let ed = (0, N.createContext)(null);

            function ef(e) {
                return "children" in e ? ef(e.children) : e.current.filter(({
                    el: e
                }) => null !== e.current).filter(({
                    state: e
                }) => "visible" === e).length > 0
            }

            function eh(e, t) {
                let n = X(e),
                    r = (0, N.useRef)([]),
                    i = K(),
                    o = es(),
                    a = ee((e, t = V.Hidden) => {
                        let a = r.current.findIndex(({
                            el: t
                        }) => t === e); - 1 !== a && (D(t, {
                            [V.Unmount]() {
                                r.current.splice(a, 1)
                            },
                            [V.Hidden]() {
                                r.current[a].state = "hidden"
                            }
                        }), o.microTask(() => {
                            var e;
                            !ef(r) && i.current && (null == (e = n.current) || e.call(n))
                        }))
                    }),
                    s = ee(e => {
                        let t = r.current.find(({
                            el: t
                        }) => t === e);
                        return t ? "visible" !== t.state && (t.state = "visible") : r.current.push({
                            el: e,
                            state: "visible"
                        }), () => a(e, V.Unmount)
                    }),
                    l = (0, N.useRef)([]),
                    u = (0, N.useRef)(Promise.resolve()),
                    c = (0, N.useRef)({
                        enter: [],
                        leave: [],
                        idle: []
                    }),
                    d = ee((e, n, r) => {
                        l.current.splice(0), t && (t.chains.current[n] = t.chains.current[n].filter(([t]) => t !== e)), null == t || t.chains.current[n].push([e, new Promise(e => {
                            l.current.push(e)
                        })]), null == t || t.chains.current[n].push([e, new Promise(e => {
                            Promise.all(c.current[n].map(([e, t]) => t)).then(() => e())
                        })]), "enter" === n ? u.current = u.current.then(() => null == t ? void 0 : t.wait.current).then(() => r(n)) : r(n)
                    }),
                    f = ee((e, t, n) => {
                        Promise.all(c.current[t].splice(0).map(([e, t]) => t)).then(() => {
                            var e;
                            null == (e = l.current.shift()) || e()
                        }).then(() => n(t))
                    });
                return (0, N.useMemo)(() => ({
                    children: r,
                    register: s,
                    unregister: a,
                    onStart: d,
                    onStop: f,
                    wait: u,
                    chains: c
                }), [s, a, r, d, f, c, u])
            }

            function ep() {}
            ed.displayName = "NestingContext";
            let em = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];

            function ev(e) {
                var t;
                let n = {};
                for (let r of em) n[r] = null != (t = e[r]) ? t : ep;
                return n
            }
            let eg = M.RenderStrategy,
                ey = q(function (e, t) {
                    var n;
                    let r, {
                            beforeEnter: i,
                            afterEnter: o,
                            beforeLeave: a,
                            afterLeave: s,
                            enter: l,
                            enterFrom: u,
                            enterTo: c,
                            entered: d,
                            leave: f,
                            leaveFrom: h,
                            leaveTo: p,
                            ...m
                        } = e,
                        v = (0, N.useRef)(null),
                        g = en(v, t),
                        y = m.unmount ? V.Unmount : V.Hidden,
                        {
                            show: b,
                            appear: x,
                            initial: w
                        } = function () {
                            let e = (0, N.useContext)(eu);
                            if (null === e) throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
                            return e
                        }(),
                        [j, O] = (0, N.useState)(b ? "visible" : "hidden"),
                        P = function () {
                            let e = (0, N.useContext)(ed);
                            if (null === e) throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
                            return e
                        }(),
                        {
                            register: E,
                            unregister: S
                        } = P,
                        k = (0, N.useRef)(null);
                    (0, N.useEffect)(() => E(v), [E, v]), (0, N.useEffect)(() => {
                        if (y === V.Hidden && v.current) {
                            if (b && "visible" !== j) {
                                O("visible");
                                return
                            }
                            return D(j, {
                                hidden: () => S(v),
                                visible: () => E(v)
                            })
                        }
                    }, [j, v, E, S, b, y]);
                    let T = X({
                            enter: el(l),
                            enterFrom: el(u),
                            enterTo: el(c),
                            entered: el(d),
                            leave: el(f),
                            leaveFrom: el(h),
                            leaveTo: el(p)
                        }),
                        A = (n = {
                            beforeEnter: i,
                            afterEnter: o,
                            beforeLeave: a,
                            afterLeave: s
                        }, r = (0, N.useRef)(ev(n)), (0, N.useEffect)(() => {
                            r.current = ev(n)
                        }, [n]), r),
                        C = Q();
                    (0, N.useEffect)(() => {
                        if (C && "visible" === j && null === v.current) throw Error("Did you forget to passthrough the `ref` to the actual DOM node?")
                    }, [v, j, C]);
                    let I = w && !x,
                        R = !C || I || k.current === b ? "idle" : b ? "enter" : "leave",
                        L = ee(e => D(e, {
                            enter: () => A.current.beforeEnter(),
                            leave: () => A.current.beforeLeave(),
                            idle() {}
                        })),
                        M = ee(e => D(e, {
                            enter: () => A.current.afterEnter(),
                            leave: () => A.current.afterLeave(),
                            idle() {}
                        })),
                        z = eh(() => {
                            O("hidden"), S(v)
                        }, P);
                    (function ({
                        container: e,
                        direction: t,
                        classes: n,
                        onStart: r,
                        onStop: i
                    }) {
                        let o = K(),
                            a = es(),
                            s = X(t);
                        G(() => {
                            let t = ei();
                            a.add(t.dispose);
                            let l = e.current;
                            if (l && "idle" !== s.current && o.current) {
                                var u, c, d, f;
                                let h, p, m, v, g, y, b;
                                return t.dispose(), r.current(s.current), t.add((u = l, c = n.current, d = "enter" === s.current, f = () => {
                                    t.dispose(), i.current(s.current)
                                }, p = d ? "enter" : "leave", m = ei(), v = void 0 !== f ? (h = {
                                    called: !1
                                }, (...e) => {
                                    if (!h.called) return h.called = !0, f(...e)
                                }) : () => {}, "enter" === p && (u.removeAttribute("hidden"), u.style.display = ""), g = D(p, {
                                    enter: () => c.enter,
                                    leave: () => c.leave
                                }), y = D(p, {
                                    enter: () => c.enterTo,
                                    leave: () => c.leaveTo
                                }), b = D(p, {
                                    enter: () => c.enterFrom,
                                    leave: () => c.leaveFrom
                                }), ea(u, ...c.enter, ...c.enterTo, ...c.enterFrom, ...c.leave, ...c.leaveFrom, ...c.leaveTo, ...c.entered), eo(u, ...g, ...b), m.nextFrame(() => {
                                    ea(u, ...b), eo(u, ...y),
                                        function (e, t) {
                                            let n = ei();
                                            if (!e) return n.dispose;
                                            let {
                                                transitionDuration: r,
                                                transitionDelay: i
                                            } = getComputedStyle(e), [o, a] = [r, i].map(e => {
                                                let [t = 0] = e.split(",").filter(Boolean).map(e => e.includes("ms") ? parseFloat(e) : 1e3 * parseFloat(e)).sort((e, t) => t - e);
                                                return t
                                            });
                                            if (o + a !== 0) {
                                                let s = n.addEventListener(e, "transitionend", e => {
                                                    e.target === e.currentTarget && (t(), s())
                                                })
                                            } else t();
                                            n.add(() => t()), n.dispose
                                        }(u, () => (ea(u, ...g), eo(u, ...c.entered), v()))
                                }), m.dispose)), t.dispose
                            }
                        }, [t])
                    })({
                        container: v,
                        classes: T,
                        direction: R,
                        onStart: X(e => {
                            z.onStart(v, e, L)
                        }),
                        onStop: X(e => {
                            z.onStop(v, e, M), "leave" !== e || ef(z) || (O("hidden"), S(v))
                        })
                    }), (0, N.useEffect)(() => {
                        I && (y === V.Hidden ? k.current = null : k.current = b)
                    }, [b, I, j]);
                    let B = m;
                    return x && b && ("undefined" == typeof window || "undefined" == typeof document) && (B = {
                        ...B,
                        className: function (...e) {
                            return e.filter(Boolean).join(" ")
                        }(m.className, ...T.current.enter, ...T.current.enterFrom)
                    }), N.createElement(ed.Provider, {
                        value: z
                    }, N.createElement(Z, {
                        value: D(j, {
                            visible: H.Open,
                            hidden: H.Closed
                        })
                    }, F({
                        ourProps: {
                            ref: g
                        },
                        theirProps: B,
                        defaultTag: "div",
                        features: eg,
                        visible: "visible" === j,
                        name: "Transition.Child"
                    })))
                }),
                eb = q(function (e, t) {
                    let {
                        show: n,
                        appear: r = !1,
                        unmount: i,
                        ...o
                    } = e, a = (0, N.useRef)(null), s = en(a, t);
                    Q();
                    let l = W();
                    if (void 0 === n && null !== l && (n = D(l, {
                            [H.Open]: !0,
                            [H.Closed]: !1
                        })), ![!0, !1].includes(n)) throw Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
                    let [u, c] = (0, N.useState)(n ? "visible" : "hidden"), d = eh(() => {
                        c("hidden")
                    }), [f, h] = (0, N.useState)(!0), p = (0, N.useRef)([n]);
                    G(() => {
                        !1 !== f && p.current[p.current.length - 1] !== n && (p.current.push(n), h(!1))
                    }, [p, n]);
                    let m = (0, N.useMemo)(() => ({
                        show: n,
                        appear: r,
                        initial: f
                    }), [n, r, f]);
                    (0, N.useEffect)(() => {
                        if (n) c("visible");
                        else if (ef(d)) {
                            let e = a.current;
                            if (!e) return;
                            let t = e.getBoundingClientRect();
                            0 === t.x && 0 === t.y && 0 === t.width && 0 === t.height && c("hidden")
                        } else c("hidden")
                    }, [n, d]);
                    let v = {
                        unmount: i
                    };
                    return N.createElement(ed.Provider, {
                        value: d
                    }, N.createElement(eu.Provider, {
                        value: m
                    }, F({
                        ourProps: {
                            ...v,
                            as: N.Fragment,
                            children: N.createElement(ey, {
                                ref: s,
                                ...v,
                                ...o
                            })
                        },
                        theirProps: {},
                        defaultTag: N.Fragment,
                        features: eg,
                        visible: "visible" === u,
                        name: "Transition"
                    })))
                }),
                ex = q(function (e, t) {
                    let n = null !== (0, N.useContext)(eu),
                        r = null !== W();
                    return N.createElement(N.Fragment, null, !n && r ? N.createElement(eb, {
                        ref: t,
                        ...e
                    }) : N.createElement(ey, {
                        ref: t,
                        ...e
                    }))
                }),
                ew = Object.assign(eb, {
                    Child: ex,
                    Root: eb
                });
            var ej = n(1109),
                eO = n(6010),
                eP = n(5947),
                eE = n(9304),
                eS = n(404),
                ek = n(8868);

            function eT() {
                let e = (0, N.useRef)(!1);
                return (0, ek.L)(() => (e.current = !0, () => {
                    e.current = !1
                }), []), e
            }
            var eA = n(240),
                eC = n(6681);
            class eI extends N.Component {
                getSnapshotBeforeUpdate(e) {
                    let t = this.props.childRef.current;
                    if (t && e.isPresent && !this.props.isPresent) {
                        let n = this.props.sizeRef.current;
                        n.height = t.offsetHeight || 0, n.width = t.offsetWidth || 0, n.top = t.offsetTop, n.left = t.offsetLeft
                    }
                    return null
                }
                componentDidUpdate() {}
                render() {
                    return this.props.children
                }
            }

            function eR({
                children: e,
                isPresent: t
            }) {
                let n = (0, N.useId)(),
                    r = (0, N.useRef)(null),
                    i = (0, N.useRef)({
                        width: 0,
                        height: 0,
                        top: 0,
                        left: 0
                    });
                return (0, N.useInsertionEffect)(() => {
                    let {
                        width: e,
                        height: o,
                        top: a,
                        left: s
                    } = i.current;
                    if (t || !r.current || !e || !o) return;
                    r.current.dataset.motionPopId = n;
                    let l = document.createElement("style");
                    return document.head.appendChild(l), l.sheet && l.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${o}px !important;
            top: ${a}px !important;
            left: ${s}px !important;
          }
        `), () => {
                        document.head.removeChild(l)
                    }
                }, [t]), N.createElement(eI, {
                    isPresent: t,
                    childRef: r,
                    sizeRef: i
                }, N.cloneElement(e, {
                    ref: r
                }))
            }
            let eL = ({
                children: e,
                initial: t,
                isPresent: n,
                onExitComplete: r,
                custom: i,
                presenceAffectsLayout: o,
                mode: a
            }) => {
                let s = (0, eC.h)(eN),
                    l = (0, N.useId)(),
                    u = (0, N.useMemo)(() => ({
                        id: l,
                        initial: t,
                        isPresent: n,
                        custom: i,
                        onExitComplete(e) {
                            for (let t of (s.set(e, !0), s.values()))
                                if (!t) return;
                            r && r()
                        },
                        register: e => (s.set(e, !1), () => s.delete(e))
                    }), o ? void 0 : [n]);
                return (0, N.useMemo)(() => {
                    s.forEach((e, t) => s.set(t, !1))
                }, [n]), N.useEffect(() => {
                    n || s.size || !r || r()
                }, [n]), "popLayout" === a && (e = N.createElement(eR, {
                    isPresent: n
                }, e)), N.createElement(eA.O.Provider, {
                    value: u
                }, e)
            };

            function eN() {
                return new Map
            }
            var eD = n(5364),
                eM = n(5411),
                eV = n(6034);
            let eF = e => e.key || "",
                ez = ({
                    children: e,
                    custom: t,
                    initial: n = !0,
                    onExitComplete: r,
                    exitBeforeEnter: i,
                    presenceAffectsLayout: o = !0,
                    mode: a = "sync"
                }) => {
                    i && (a = "wait", (0, eV.O)(!1, "Replace exitBeforeEnter with mode='wait'"));
                    let [s] = function () {
                        let e = eT(),
                            [t, n] = (0, N.useState)(0),
                            r = (0, N.useCallback)(() => {
                                e.current && n(t + 1)
                            }, [t]),
                            i = (0, N.useCallback)(() => eS.Z_.postRender(r), [r]);
                        return [i, t]
                    }(), l = (0, N.useContext)(eD.p).forceRender;
                    l && (s = l);
                    let u = eT(),
                        c = function (e) {
                            let t = [];
                            return N.Children.forEach(e, e => {
                                (0, N.isValidElement)(e) && t.push(e)
                            }), t
                        }(e),
                        d = c,
                        f = new Set,
                        h = (0, N.useRef)(d),
                        p = (0, N.useRef)(new Map).current,
                        m = (0, N.useRef)(!0);
                    if ((0, ek.L)(() => {
                            m.current = !1,
                                function (e, t) {
                                    e.forEach(e => {
                                        let n = eF(e);
                                        t.set(n, e)
                                    })
                                }(c, p), h.current = d
                        }), (0, eM.z)(() => {
                            m.current = !0, p.clear(), f.clear()
                        }), m.current) return N.createElement(N.Fragment, null, d.map(e => N.createElement(eL, {
                        key: eF(e),
                        isPresent: !0,
                        initial: !!n && void 0,
                        presenceAffectsLayout: o,
                        mode: a
                    }, e)));
                    d = [...d];
                    let v = h.current.map(eF),
                        g = c.map(eF),
                        y = v.length;
                    for (let b = 0; b < y; b++) {
                        let x = v[b]; - 1 === g.indexOf(x) && f.add(x)
                    }
                    return "wait" === a && f.size && (d = []), f.forEach(e => {
                        if (-1 !== g.indexOf(e)) return;
                        let n = p.get(e);
                        if (!n) return;
                        let i = v.indexOf(e),
                            l = () => {
                                p.delete(e), f.delete(e);
                                let t = h.current.findIndex(t => t.key === e);
                                if (h.current.splice(t, 1), !f.size) {
                                    if (h.current = c, !1 === u.current) return;
                                    s(), r && r()
                                }
                            };
                        d.splice(i, 0, N.createElement(eL, {
                            key: eF(n),
                            isPresent: !1,
                            onExitComplete: l,
                            custom: t,
                            presenceAffectsLayout: o,
                            mode: a
                        }, n))
                    }), d = d.map(e => {
                        let t = e.key;
                        return f.has(t) ? e : N.createElement(eL, {
                            key: eF(e),
                            isPresent: !0,
                            presenceAffectsLayout: o,
                            mode: a
                        }, e)
                    }), "production" !== eE.O && "wait" === a && d.length > 1 && console.warn('You\'re attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.'), N.createElement(N.Fragment, null, f.size ? d : d.map(e => (0, N.cloneElement)(e)))
                };
            var eB = ((u = eB || {}).Space = " ", u.Enter = "Enter", u.Escape = "Escape", u.Backspace = "Backspace", u.Delete = "Delete", u.ArrowLeft = "ArrowLeft", u.ArrowUp = "ArrowUp", u.ArrowRight = "ArrowRight", u.ArrowDown = "ArrowDown", u.Home = "Home", u.End = "End", u.PageUp = "PageUp", u.PageDown = "PageDown", u.Tab = "Tab", u);
            let eq = 0;

            function eU() {
                return ++eq
            }
            let e_ = null != (P = N.useId) ? P : function () {
                let e = Q(),
                    [t, n] = N.useState(e ? eU : null);
                return G(() => {
                    null === t && n(eU())
                }, [t]), null != t ? "" + t : void 0
            };
            var e$ = ((c = e$ || {})[c.None = 1] = "None", c[c.Focusable = 2] = "Focusable", c[c.Hidden = 4] = "Hidden", c);
            let eH = q(function (e, t) {
                let {
                    features: n = 1,
                    ...r
                } = e;
                return F({
                    ourProps: {
                        ref: t,
                        "aria-hidden": (2 & n) == 2 || void 0,
                        style: {
                            position: "fixed",
                            top: 1,
                            left: 1,
                            width: 1,
                            height: 0,
                            padding: 0,
                            margin: -1,
                            overflow: "hidden",
                            clip: "rect(0, 0, 0, 0)",
                            whiteSpace: "nowrap",
                            borderWidth: "0",
                            ...(4 & n) == 4 && (2 & n) != 2 && {
                                display: "none"
                            }
                        }
                    },
                    theirProps: r,
                    slot: {},
                    defaultTag: "div",
                    name: "Hidden"
                })
            });

            function eW(e) {
                return Y ? null : e instanceof Node ? e.ownerDocument : null != e && e.hasOwnProperty("current") && e.current instanceof Node ? e.current.ownerDocument : document
            }
            let eZ = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map(e => `${e}:not([tabindex='-1'])`).join(",");
            var eY = ((d = eY || {})[d.First = 1] = "First", d[d.Previous = 2] = "Previous", d[d.Next = 4] = "Next", d[d.Last = 8] = "Last", d[d.WrapAround = 16] = "WrapAround", d[d.NoScroll = 32] = "NoScroll", d),
                eG = ((f = eG || {})[f.Error = 0] = "Error", f[f.Overflow = 1] = "Overflow", f[f.Success = 2] = "Success", f[f.Underflow = 3] = "Underflow", f),
                eK = ((h = eK || {})[h.Previous = -1] = "Previous", h[h.Next = 1] = "Next", h),
                eX = ((p = eX || {})[p.Strict = 0] = "Strict", p[p.Loose = 1] = "Loose", p);

            function eJ(e) {
                null == e || e.focus({
                    preventScroll: !0
                })
            }

            function eQ(e, t = e => e) {
                return e.slice().sort((e, n) => {
                    let r = t(e),
                        i = t(n);
                    if (null === r || null === i) return 0;
                    let o = r.compareDocumentPosition(i);
                    return o & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : o & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0
                })
            }

            function e0(e, t, {
                sorted: n = !0,
                relativeTo: r = null,
                skipElements: i = []
            } = {}) {
                var o, a, s;
                let l = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument,
                    u = Array.isArray(e) ? n ? eQ(e) : e : function (e = document.body) {
                        return null == e ? [] : Array.from(e.querySelectorAll(eZ)).sort((e, t) => Math.sign((e.tabIndex || Number.MAX_SAFE_INTEGER) - (t.tabIndex || Number.MAX_SAFE_INTEGER)))
                    }(e);
                i.length > 0 && (u = u.filter(e => !i.includes(e))), r = null != r ? r : l.activeElement;
                let c = (() => {
                        if (5 & t) return 1;
                        if (10 & t) return -1;
                        throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
                    })(),
                    d = (() => {
                        if (1 & t) return 0;
                        if (2 & t) return Math.max(0, u.indexOf(r)) - 1;
                        if (4 & t) return Math.max(0, u.indexOf(r)) + 1;
                        if (8 & t) return u.length - 1;
                        throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
                    })(),
                    f = 32 & t ? {
                        preventScroll: !0
                    } : {},
                    h = 0,
                    p = u.length,
                    m;
                do {
                    if (h >= p || h + p <= 0) return 0;
                    let v = d + h;
                    if (16 & t) v = (v + p) % p;
                    else {
                        if (v < 0) return 3;
                        if (v >= p) return 1
                    }
                    null == (m = u[v]) || m.focus(f), h += c
                } while (m !== l.activeElement);
                return 6 & t && null != (s = null == (a = null == (o = m) ? void 0 : o.matches) ? void 0 : a.call(o, "textarea,input")) && s && m.select(), m.hasAttribute("tabindex") || m.setAttribute("tabindex", "0"), 2
            }
            var e1 = ((m = e1 || {})[m.Forwards = 0] = "Forwards", m[m.Backwards = 1] = "Backwards", m);

            function e2(...e) {
                return (0, N.useMemo)(() => eW(...e), [...e])
            }

            function e5(e, t, n, r) {
                let i = X(n);
                (0, N.useEffect)(() => {
                    function n(e) {
                        i.current(e)
                    }
                    return (e = null != e ? e : window).addEventListener(t, n, r), () => e.removeEventListener(t, n, r)
                }, [e, t, r])
            }

            function e4(e, t) {
                let n = (0, N.useRef)([]),
                    r = ee(e);
                (0, N.useEffect)(() => {
                    let e = [...n.current];
                    for (let [i, o] of t.entries())
                        if (n.current[i] !== o) {
                            let a = r(t, e);
                            return n.current = t, a
                        }
                }, [r, ...t])
            }
            var e3 = ((v = e3 || {})[v.None = 1] = "None", v[v.InitialFocus = 2] = "InitialFocus", v[v.TabLock = 4] = "TabLock", v[v.FocusLock = 8] = "FocusLock", v[v.RestoreFocus = 16] = "RestoreFocus", v[v.All = 30] = "All", v);
            let e6 = Object.assign(q(function (e, t) {
                var n;
                let r, i, o = (0, N.useRef)(null),
                    a = en(o, t),
                    {
                        initialFocus: s,
                        containers: l,
                        features: u = 30,
                        ...c
                    } = e;
                Q() || (u = 1);
                let d = e2(o);
                ! function ({
                    ownerDocument: e
                }, t) {
                    let n = (0, N.useRef)(null);
                    e5(null == e ? void 0 : e.defaultView, "focusout", e => {
                        !t || n.current || (n.current = e.target)
                    }, !0), e4(() => {
                        t || ((null == e ? void 0 : e.activeElement) === (null == e ? void 0 : e.body) && eJ(n.current), n.current = null)
                    }, [t]);
                    let r = (0, N.useRef)(!1);
                    (0, N.useEffect)(() => (r.current = !1, () => {
                        r.current = !0, er(() => {
                            r.current && (eJ(n.current), n.current = null)
                        })
                    }), [])
                }({
                    ownerDocument: d
                }, Boolean(16 & u));
                let f = function ({
                    ownerDocument: e,
                    container: t,
                    initialFocus: n
                }, r) {
                    let i = (0, N.useRef)(null),
                        o = K();
                    return e4(() => {
                        if (!r) return;
                        let a = t.current;
                        a && er(() => {
                            if (!o.current) return;
                            let t = null == e ? void 0 : e.activeElement;
                            if (null != n && n.current) {
                                if ((null == n ? void 0 : n.current) === t) {
                                    i.current = t;
                                    return
                                }
                            } else if (a.contains(t)) {
                                i.current = t;
                                return
                            }
                            null != n && n.current ? eJ(n.current) : e0(a, eY.First) === eG.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), i.current = null == e ? void 0 : e.activeElement
                        })
                    }, [r]), i
                }({
                    ownerDocument: d,
                    container: o,
                    initialFocus: s
                }, Boolean(2 & u));
                ! function ({
                    ownerDocument: e,
                    container: t,
                    containers: n,
                    previousActiveElement: r
                }, i) {
                    let o = K();
                    e5(null == e ? void 0 : e.defaultView, "focus", e => {
                        if (!i || !o.current) return;
                        let a = new Set(null == n ? void 0 : n.current);
                        a.add(t);
                        let s = r.current;
                        if (!s) return;
                        let l = e.target;
                        l && l instanceof HTMLElement ? e8(a, l) ? (r.current = l, eJ(l)) : (e.preventDefault(), e.stopPropagation(), eJ(s)) : eJ(r.current)
                    }, !0)
                }({
                    ownerDocument: d,
                    container: o,
                    containers: l,
                    previousActiveElement: f
                }, Boolean(8 & u));
                let h = (r = (0, N.useRef)(0), n = "keydown", i = X(e => {
                        "Tab" === e.key && (r.current = e.shiftKey ? 1 : 0)
                    }), (0, N.useEffect)(() => {
                        function e(e) {
                            i.current(e)
                        }
                        return window.addEventListener(n, e, !0), () => window.removeEventListener(n, e, !0)
                    }, [n, !0]), r),
                    p = ee(e => {
                        let t = o.current;
                        t && D(h.current, {
                            [e1.Forwards]: () => e0(t, eY.First, {
                                skipElements: [e.relatedTarget]
                            }),
                            [e1.Backwards]: () => e0(t, eY.Last, {
                                skipElements: [e.relatedTarget]
                            })
                        })
                    }),
                    m = es(),
                    v = (0, N.useRef)(!1);
                return N.createElement(N.Fragment, null, Boolean(4 & u) && N.createElement(eH, {
                    as: "button",
                    type: "button",
                    "data-headlessui-focus-guard": !0,
                    onFocus: p,
                    features: e$.Focusable
                }), F({
                    ourProps: {
                        ref: a,
                        onKeyDown(e) {
                            "Tab" == e.key && (v.current = !0, m.requestAnimationFrame(() => {
                                v.current = !1
                            }))
                        },
                        onBlur(e) {
                            let t = new Set(null == l ? void 0 : l.current);
                            t.add(o);
                            let n = e.relatedTarget;
                            !n || "true" !== n.dataset.headlessuiFocusGuard && (e8(t, n) || (v.current ? e0(o.current, D(h.current, {
                                [e1.Forwards]: () => eY.Next,
                                [e1.Backwards]: () => eY.Previous
                            }) | eY.WrapAround, {
                                relativeTo: e.target
                            }) : e.target instanceof HTMLElement && eJ(e.target)))
                        }
                    },
                    theirProps: c,
                    defaultTag: "div",
                    name: "FocusTrap"
                }), Boolean(4 & u) && N.createElement(eH, {
                    as: "button",
                    type: "button",
                    "data-headlessui-focus-guard": !0,
                    onFocus: p,
                    features: e$.Focusable
                }))
            }), {
                features: e3
            });

            function e8(e, t) {
                var n;
                for (let r of e)
                    if (null != (n = r.current) && n.contains(t)) return !0;
                return !1
            }
            let e9 = new Set,
                e7 = new Map;

            function te(e) {
                e.setAttribute("aria-hidden", "true"), e.inert = !0
            }

            function tt(e) {
                let t = e7.get(e);
                t && (null === t["aria-hidden"] ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", t["aria-hidden"]), e.inert = t.inert)
            }
            var tn = n(3935);
            let tr = (0, N.createContext)(!1);

            function ti(e) {
                return N.createElement(tr.Provider, {
                    value: e.force
                }, e.children)
            }
            let to = N.Fragment,
                ta = q(function (e, t) {
                    let n = (0, N.useRef)(null),
                        r = en(function (e, t = !0) {
                            return Object.assign(e, {
                                [et]: t
                            })
                        }(e => {
                            n.current = e
                        }), t),
                        i = e2(n),
                        o = function (e) {
                            let t = (0, N.useContext)(tr),
                                n = (0, N.useContext)(tl),
                                r = e2(e),
                                [i, o] = (0, N.useState)(() => {
                                    if (!t && null !== n || Y) return null;
                                    let e = null == r ? void 0 : r.getElementById("headlessui-portal-root");
                                    if (e) return e;
                                    if (null === r) return null;
                                    let i = r.createElement("div");
                                    return i.setAttribute("id", "headlessui-portal-root"), r.body.appendChild(i)
                                });
                            return (0, N.useEffect)(() => {
                                null !== i && (null != r && r.body.contains(i) || null == r || r.body.appendChild(i))
                            }, [i, r]), (0, N.useEffect)(() => {
                                t || null !== n && o(n.current)
                            }, [n, o, t]), i
                        }(n),
                        [a] = (0, N.useState)(() => {
                            var e;
                            return Y ? null : null != (e = null == i ? void 0 : i.createElement("div")) ? e : null
                        }),
                        s = Q(),
                        l = (0, N.useRef)(!1);
                    return G(() => {
                        if (l.current = !1, !(!o || !a)) return o.contains(a) || (a.setAttribute("data-headlessui-portal", ""), o.appendChild(a)), () => {
                            l.current = !0, er(() => {
                                var e;
                                l.current && o && a && (o.removeChild(a), o.childNodes.length <= 0 && (null == (e = o.parentElement) || e.removeChild(o)))
                            })
                        }
                    }, [o, a]), s && o && a ? (0, tn.createPortal)(F({
                        ourProps: {
                            ref: r
                        },
                        theirProps: e,
                        defaultTag: to,
                        name: "Portal"
                    }), a) : null
                }),
                ts = N.Fragment,
                tl = (0, N.createContext)(null),
                tu = Object.assign(ta, {
                    Group: q(function (e, t) {
                        let {
                            target: n,
                            ...r
                        } = e, i = {
                            ref: en(t)
                        };
                        return N.createElement(tl.Provider, {
                            value: n
                        }, F({
                            ourProps: i,
                            theirProps: r,
                            defaultTag: ts,
                            name: "Popover.Group"
                        }))
                    })
                }),
                tc = (0, N.createContext)(null),
                td = q(function (e, t) {
                    let n = e_(),
                        {
                            id: r = `headlessui-description-${n}`,
                            ...i
                        } = e,
                        o = function e() {
                            let t = (0, N.useContext)(tc);
                            if (null === t) {
                                let n = Error("You used a <Description /> component, but it is not inside a relevant parent.");
                                throw Error.captureStackTrace && Error.captureStackTrace(n, e), n
                            }
                            return t
                        }(),
                        a = en(t);
                    return G(() => o.register(r), [r, o.register]), F({
                        ourProps: {
                            ref: a,
                            ...o.props,
                            id: r
                        },
                        theirProps: i,
                        slot: o.slot || {},
                        defaultTag: "p",
                        name: o.name || "Description"
                    })
                }),
                tf = (0, N.createContext)(() => {});
            tf.displayName = "StackContext";
            var th = ((g = th || {})[g.Add = 0] = "Add", g[g.Remove = 1] = "Remove", g);

            function tp({
                children: e,
                onUpdate: t,
                type: n,
                element: r,
                enabled: i
            }) {
                let o = (0, N.useContext)(tf),
                    a = ee((...e) => {
                        null == t || t(...e), o(...e)
                    });
                return G(() => {
                    let e = void 0 === i || !0 === i;
                    return e && a(0, n, r), () => {
                        e && a(1, n, r)
                    }
                }, [a, n, r, i]), N.createElement(tf.Provider, {
                    value: a
                }, e)
            }

            function tm(e, t, n) {
                let r = X(t);
                (0, N.useEffect)(() => {
                    function t(e) {
                        r.current(e)
                    }
                    return document.addEventListener(e, t, n), () => document.removeEventListener(e, t, n)
                }, [e, n])
            }
            var tv = ((y = tv || {})[y.Open = 0] = "Open", y[y.Closed = 1] = "Closed", y),
                tg = ((b = tg || {})[b.SetTitleId = 0] = "SetTitleId", b);
            let ty = {
                    0: (e, t) => e.titleId === t.id ? e : {
                        ...e,
                        titleId: t.id
                    }
                },
                tb = (0, N.createContext)(null);

            function tx(e) {
                let t = (0, N.useContext)(tb);
                if (null === t) {
                    let n = Error(`<${e} /> is missing a parent <Dialog /> component.`);
                    throw Error.captureStackTrace && Error.captureStackTrace(n, tx), n
                }
                return t
            }

            function tw(e, t) {
                return D(t.type, ty, e, t)
            }
            tb.displayName = "DialogContext";
            let tj = M.RenderStrategy | M.Static,
                tO = q(function (e, t) {
                    let n = e_(),
                        {
                            id: r = `headlessui-dialog-${n}`,
                            open: i,
                            onClose: o,
                            initialFocus: a,
                            __demoMode: s = !1,
                            ...l
                        } = e,
                        [u, c] = (0, N.useState)(0),
                        d = W();
                    void 0 === i && null !== d && (i = D(d, {
                        [H.Open]: !0,
                        [H.Closed]: !1
                    }));
                    let f = (0, N.useRef)(new Set),
                        h = (0, N.useRef)(null),
                        p = en(h, t),
                        m = (0, N.useRef)(null),
                        v = e2(h),
                        g = e.hasOwnProperty("open") || null !== d,
                        y = e.hasOwnProperty("onClose");
                    if (!g && !y) throw Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
                    if (!g) throw Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
                    if (!y) throw Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
                    if ("boolean" != typeof i) throw Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${i}`);
                    if ("function" != typeof o) throw Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${o}`);
                    let b = i ? 0 : 1,
                        [x, w] = (0, N.useReducer)(tw, {
                            titleId: null,
                            descriptionId: null,
                            panelRef: (0, N.createRef)()
                        }),
                        j = ee(() => o(!1)),
                        O = ee(e => w({
                            type: 0,
                            id: e
                        })),
                        P = !!Q() && !s && 0 === b,
                        E = u > 1,
                        S = null !== (0, N.useContext)(tb);
                    ! function (e, t = !0) {
                        G(() => {
                            if (!t || !e.current) return;
                            let n = e.current,
                                r = eW(n);
                            if (r) {
                                for (let i of (e9.add(n), e7.keys())) i.contains(n) && (tt(i), e7.delete(i));
                                return r.querySelectorAll("body > *").forEach(e => {
                                    if (e instanceof HTMLElement) {
                                        for (let t of e9)
                                            if (e.contains(t)) return;
                                        1 === e9.size && (e7.set(e, {
                                            "aria-hidden": e.getAttribute("aria-hidden"),
                                            inert: e.inert
                                        }), te(e))
                                    }
                                }), () => {
                                    if (e9.delete(n), e9.size > 0) r.querySelectorAll("body > *").forEach(e => {
                                        if (e instanceof HTMLElement && !e7.has(e)) {
                                            for (let t of e9)
                                                if (e.contains(t)) return;
                                            e7.set(e, {
                                                "aria-hidden": e.getAttribute("aria-hidden"),
                                                inert: e.inert
                                            }), te(e)
                                        }
                                    });
                                    else
                                        for (let e of e7.keys()) tt(e), e7.delete(e)
                                }
                            }
                        }, [t])
                    }(h, !!E && P);
                    let k = ee(() => {
                        var e, t;
                        return [...Array.from(null != (e = null == v ? void 0 : v.querySelectorAll("body > *, [data-headlessui-portal]")) ? e : []).filter(e => !(!(e instanceof HTMLElement) || e.contains(m.current) || x.panelRef.current && e.contains(x.panelRef.current))), null != (t = x.panelRef.current) ? t : h.current]
                    });
                    (function (e, t, n = !0) {
                        let r = (0, N.useRef)(!1);

                        function i(n, i) {
                            if (!r.current || n.defaultPrevented) return;
                            let o = function e(t) {
                                    return "function" == typeof t ? e(t()) : Array.isArray(t) || t instanceof Set ? t : [t]
                                }(e),
                                a = i(n);
                            if (null !== a && a.getRootNode().contains(a)) {
                                for (let s of o) {
                                    if (null === s) continue;
                                    let l = s instanceof HTMLElement ? s : s.current;
                                    if (null != l && l.contains(a) || n.composed && n.composedPath().includes(l)) return
                                }
                                return ! function (e, t = 0) {
                                    var n;
                                    return e !== (null == (n = eW(e)) ? void 0 : n.body) && D(t, {
                                        0: () => e.matches(eZ),
                                        1() {
                                            let t = e;
                                            for (; null !== t;) {
                                                if (t.matches(eZ)) return !0;
                                                t = t.parentElement
                                            }
                                            return !1
                                        }
                                    })
                                }(a, eX.Loose) && -1 !== a.tabIndex && n.preventDefault(), t(n, a)
                            }
                        }(0, N.useEffect)(() => {
                            requestAnimationFrame(() => {
                                r.current = n
                            })
                        }, [n]);
                        let o = (0, N.useRef)(null);
                        tm("mousedown", e => {
                            var t, n;
                            r.current && (o.current = (null == (n = null == (t = e.composedPath) ? void 0 : t.call(e)) ? void 0 : n[0]) || e.target)
                        }, !0), tm("click", e => {
                            o.current && (i(e, () => o.current), o.current = null)
                        }, !0), tm("blur", e => i(e, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0)
                    })(() => k(), j, P && !E), e5(null == v ? void 0 : v.defaultView, "keydown", e => {
                            e.defaultPrevented || e.key === eB.Escape && 0 === b && (E || (e.preventDefault(), e.stopPropagation(), j()))
                        }),
                        function (e, t, n = () => [document.body]) {
                            (0, N.useEffect)(() => {
                                var r;
                                if (!t || !e) return;
                                let i = ei(),
                                    o = window.pageYOffset;

                                function a(e, t, n) {
                                    let r = e.style.getPropertyValue(t);
                                    return Object.assign(e.style, {
                                        [t]: n
                                    }), i.add(() => {
                                        Object.assign(e.style, {
                                            [t]: r
                                        })
                                    })
                                }
                                let s = e.documentElement,
                                    l = (null != (r = e.defaultView) ? r : window).innerWidth - s.clientWidth;
                                if (a(s, "overflow", "hidden"), l > 0) {
                                    let u = s.clientWidth - s.offsetWidth;
                                    a(s, "paddingRight", `${l-u}px`)
                                }
                                if (/iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0) {
                                    a(e.body, "marginTop", `-${o}px`), window.scrollTo(0, 0);
                                    let c = null;
                                    i.addEventListener(e, "click", t => {
                                        if (t.target instanceof HTMLElement) try {
                                            let r = t.target.closest("a");
                                            if (!r) return;
                                            let {
                                                hash: i
                                            } = new URL(r.href), o = e.querySelector(i);
                                            o && !n().some(e => e.contains(o)) && (c = o)
                                        } catch {}
                                    }, !0), i.addEventListener(e, "touchmove", e => {
                                        e.target instanceof HTMLElement && !n().some(t => t.contains(e.target)) && e.preventDefault()
                                    }, {
                                        passive: !1
                                    }), i.add(() => {
                                        window.scrollTo(0, window.pageYOffset + o), c && c.isConnected && (c.scrollIntoView({
                                            block: "nearest"
                                        }), c = null)
                                    })
                                }
                                return i.dispose
                            }, [e, t])
                        }(v, 0 === b && !S, k), (0, N.useEffect)(() => {
                            if (0 !== b || !h.current) return;
                            let e = new IntersectionObserver(e => {
                                for (let t of e) 0 === t.boundingClientRect.x && 0 === t.boundingClientRect.y && 0 === t.boundingClientRect.width && 0 === t.boundingClientRect.height && j()
                            });
                            return e.observe(h.current), () => e.disconnect()
                        }, [b, h, j]);
                    let [T, A] = function () {
                        let [e, t] = (0, N.useState)([]);
                        return [e.length > 0 ? e.join(" ") : void 0, (0, N.useMemo)(() => function (e) {
                            let n = ee(e => (t(t => [...t, e]), () => t(t => {
                                    let n = t.slice(),
                                        r = n.indexOf(e);
                                    return -1 !== r && n.splice(r, 1), n
                                }))),
                                r = (0, N.useMemo)(() => ({
                                    register: n,
                                    slot: e.slot,
                                    name: e.name,
                                    props: e.props
                                }), [n, e.slot, e.name, e.props]);
                            return N.createElement(tc.Provider, {
                                value: r
                            }, e.children)
                        }, [t])]
                    }(), C = (0, N.useMemo)(() => [{
                        dialogState: b,
                        close: j,
                        setTitleId: O
                    }, x], [b, x, j, O]), I = (0, N.useMemo)(() => ({
                        open: 0 === b
                    }), [b]), R = {
                        ref: p,
                        id: r,
                        role: "dialog",
                        "aria-modal": 0 === b || void 0,
                        "aria-labelledby": x.titleId,
                        "aria-describedby": T
                    };
                    return N.createElement(tp, {
                        type: "Dialog",
                        enabled: 0 === b,
                        element: h,
                        onUpdate: ee((e, t, n) => {
                            "Dialog" === t && D(e, {
                                [th.Add]() {
                                    f.current.add(n), c(e => e + 1)
                                },
                                [th.Remove]() {
                                    f.current.add(n), c(e => e - 1)
                                }
                            })
                        })
                    }, N.createElement(ti, {
                        force: !0
                    }, N.createElement(tu, null, N.createElement(tb.Provider, {
                        value: C
                    }, N.createElement(tu.Group, {
                        target: h
                    }, N.createElement(ti, {
                        force: !1
                    }, N.createElement(A, {
                        slot: I,
                        name: "Dialog.Description"
                    }, N.createElement(e6, {
                        initialFocus: a,
                        containers: f,
                        features: P ? D(E ? "parent" : "leaf", {
                            parent: e6.features.RestoreFocus,
                            leaf: e6.features.All & ~e6.features.FocusLock
                        }) : e6.features.None
                    }, F({
                        ourProps: R,
                        theirProps: l,
                        slot: I,
                        defaultTag: "div",
                        features: tj,
                        visible: 0 === b,
                        name: "Dialog"
                    })))))))), N.createElement(eH, {
                        features: e$.Hidden,
                        ref: m
                    }))
                }),
                tP = q(function (e, t) {
                    let n = e_(),
                        {
                            id: r = `headlessui-dialog-overlay-${n}`,
                            ...i
                        } = e,
                        [{
                            dialogState: o,
                            close: a
                        }] = tx("Dialog.Overlay");
                    return F({
                        ourProps: {
                            ref: en(t),
                            id: r,
                            "aria-hidden": !0,
                            onClick: ee(e => {
                                if (e.target === e.currentTarget) {
                                    if (function (e) {
                                            let t = e.parentElement,
                                                n = null;
                                            for (; t && !(t instanceof HTMLFieldSetElement);) t instanceof HTMLLegendElement && (n = t), t = t.parentElement;
                                            let r = (null == t ? void 0 : t.getAttribute("disabled")) === "";
                                            return !(r && function (e) {
                                                if (!e) return !1;
                                                let t = e.previousElementSibling;
                                                for (; null !== t;) {
                                                    if (t instanceof HTMLLegendElement) return !1;
                                                    t = t.previousElementSibling
                                                }
                                                return !0
                                            }(n)) && r
                                        }(e.currentTarget)) return e.preventDefault();
                                    e.preventDefault(), e.stopPropagation(), a()
                                }
                            })
                        },
                        theirProps: i,
                        slot: (0, N.useMemo)(() => ({
                            open: 0 === o
                        }), [o]),
                        defaultTag: "div",
                        name: "Dialog.Overlay"
                    })
                }),
                tE = Object.assign(tO, {
                    Backdrop: q(function (e, t) {
                        let n = e_(),
                            {
                                id: r = `headlessui-dialog-backdrop-${n}`,
                                ...i
                            } = e,
                            [{
                                dialogState: o
                            }, a] = tx("Dialog.Backdrop"),
                            s = en(t);
                        (0, N.useEffect)(() => {
                            if (null === a.panelRef.current) throw Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")
                        }, [a.panelRef]);
                        let l = (0, N.useMemo)(() => ({
                            open: 0 === o
                        }), [o]);
                        return N.createElement(ti, {
                            force: !0
                        }, N.createElement(tu, null, F({
                            ourProps: {
                                ref: s,
                                id: r,
                                "aria-hidden": !0
                            },
                            theirProps: i,
                            slot: l,
                            defaultTag: "div",
                            name: "Dialog.Backdrop"
                        })))
                    }),
                    Panel: q(function (e, t) {
                        let n = e_(),
                            {
                                id: r = `headlessui-dialog-panel-${n}`,
                                ...i
                            } = e,
                            [{
                                dialogState: o
                            }, a] = tx("Dialog.Panel"),
                            s = en(t, a.panelRef),
                            l = (0, N.useMemo)(() => ({
                                open: 0 === o
                            }), [o]);
                        return F({
                            ourProps: {
                                ref: s,
                                id: r,
                                onClick: ee(e => {
                                    e.stopPropagation()
                                })
                            },
                            theirProps: i,
                            slot: l,
                            defaultTag: "div",
                            name: "Dialog.Panel"
                        })
                    }),
                    Overlay: tP,
                    Title: q(function (e, t) {
                        let n = e_(),
                            {
                                id: r = `headlessui-dialog-title-${n}`,
                                ...i
                            } = e,
                            [{
                                dialogState: o,
                                setTitleId: a
                            }] = tx("Dialog.Title"),
                            s = en(t);
                        return (0, N.useEffect)(() => (a(r), () => a(null)), [r, a]), F({
                            ourProps: {
                                ref: s,
                                id: r
                            },
                            theirProps: i,
                            slot: (0, N.useMemo)(() => ({
                                open: 0 === o
                            }), [o]),
                            defaultTag: "h2",
                            name: "Dialog.Title"
                        })
                    }),
                    Description: td
                });
            var tS = n(3445),
                tk = n(1732);
            let tT = new WeakMap;

            function tA({
                target: e,
                contentRect: t,
                borderBoxSize: n
            }) {
                var r;
                null === (r = tT.get(e)) || void 0 === r || r.forEach(r => {
                    r({
                        target: e,
                        contentSize: t,
                        get size() {
                            return function (e, t) {
                                if (t) {
                                    let {
                                        inlineSize: n,
                                        blockSize: r
                                    } = t[0];
                                    return {
                                        width: n,
                                        height: r
                                    }
                                }
                                return e instanceof SVGElement && "getBBox" in e ? e.getBBox() : {
                                    width: e.offsetWidth,
                                    height: e.offsetHeight
                                }
                            }(e, n)
                        }
                    })
                })
            }

            function tC(e) {
                e.forEach(tA)
            }
            let tI = new Set;
            var tR = n(6463);
            let tL = (e, t, n) => t - e == 0 ? 1 : (n - e) / (t - e),
                tN = () => ({
                    current: 0,
                    offset: [],
                    progress: 0,
                    scrollLength: 0,
                    targetOffset: 0,
                    targetLength: 0,
                    containerLength: 0,
                    velocity: 0
                }),
                tD = () => ({
                    time: 0,
                    x: tN(),
                    y: tN()
                }),
                tM = {
                    x: {
                        length: "Width",
                        position: "Left"
                    },
                    y: {
                        length: "Height",
                        position: "Top"
                    }
                };

            function tV(e, t, n, r) {
                var i;
                let o = n[t],
                    {
                        length: a,
                        position: s
                    } = tM[t],
                    l = o.current,
                    u = n.time;
                o.current = e["scroll" + s], o.scrollLength = e["scroll" + a] - e["client" + a], o.offset.length = 0, o.offset[0] = 0, o.offset[1] = o.scrollLength, o.progress = tL(0, o.scrollLength, o.current);
                let c = r - u;
                o.velocity = c > 50 ? 0 : (i = o.current - l, c ? i * (1e3 / c) : 0)
            }
            let tF = e => e,
                tz = (e, t, n) => -n * e + n * t + e;

            function tB(e, t) {
                let n = e[e.length - 1];
                for (let r = 1; r <= t; r++) {
                    let i = tL(0, t, r);
                    e.push(tz(n, 1, i))
                }
            }

            function tq(e) {
                let t = [0];
                return tB(t, e - 1), t
            }
            let tU = e => "number" == typeof e,
                t_ = e => Array.isArray(e) && !tU(e[0]),
                t$ = (e, t, n) => {
                    let r = t - e;
                    return ((n - e) % r + r) % r + e
                },
                tH = (e, t, n) => Math.min(Math.max(n, e), t),
                tW = {
                    Enter: [
                        [0, 1],
                        [1, 1]
                    ],
                    Exit: [
                        [0, 0],
                        [1, 0]
                    ],
                    Any: [
                        [1, 0],
                        [0, 1]
                    ],
                    All: [
                        [0, 0],
                        [1, 1]
                    ]
                },
                tZ = e => "string" == typeof e,
                tY = {
                    start: 0,
                    center: .5,
                    end: 1
                };

            function tG(e, t, n = 0) {
                let r = 0;
                if (void 0 !== tY[e] && (e = tY[e]), tZ(e)) {
                    let i = parseFloat(e);
                    e.endsWith("px") ? r = i : e.endsWith("%") ? e = i / 100 : e.endsWith("vw") ? r = i / 100 * document.documentElement.clientWidth : e.endsWith("vh") ? r = i / 100 * document.documentElement.clientHeight : e = i
                }
                return tU(e) && (r = t * e), n + r
            }
            let tK = [0, 0],
                tX = {
                    x: 0,
                    y: 0
                },
                tJ = new WeakMap,
                tQ = new WeakMap,
                t0 = new WeakMap,
                t1 = e => e === document.documentElement ? window : e;
            var t2 = n(3234);
            let t5 = () => ({
                scrollX: (0, t2.B)(0),
                scrollY: (0, t2.B)(0),
                scrollXProgress: (0, t2.B)(0),
                scrollYProgress: (0, t2.B)(0)
            });
            var t4 = n(4606);
            let t3 = e => "object" == typeof e && e.mix,
                t6 = e => t3(e) ? e.mix : void 0;
            var t8 = n(407);

            function t9(e, t, n, r) {
                let i = "function" == typeof t ? t : function (...e) {
                    let t = !Array.isArray(e[0]),
                        n = t ? 0 : -1,
                        r = e[0 + n],
                        i = e[1 + n],
                        o = e[2 + n],
                        a = e[3 + n],
                        s = (0, t4.s)(i, o, {
                            mixer: t6(o[0]),
                            ...a
                        });
                    return t ? s(r) : s
                }(t, n, r);
                return Array.isArray(e) ? t7(e, i) : t7([e], ([e]) => i(e))
            }

            function t7(e, t) {
                let n = (0, eC.h)(() => []);
                return (0, t8.N)(e, () => {
                    n.length = 0;
                    let r = e.length;
                    for (let i = 0; i < r; i++) n[i] = e[i].get();
                    return t(n)
                })
            }

            function ne(e) {
                return (0, S.jsxs)("svg", {
                    viewBox: "0 0 99 24",
                    "aria-hidden": "true",
                    ...e,
                    children: [(0, S.jsx)("path", {
                        className: "fill-emerald-400",
                        d: "M16 8a5 5 0 0 0-5-5H5a5 5 0 0 0-5 5v13.927a1 1 0 0 0 1.623.782l3.684-2.93a4 4 0 0 1 2.49-.87H11a5 5 0 0 0 5-5V8Z"
                    }), (0, S.jsx)("path", {
                        className: "fill-zinc-900 dark:fill-white",
                        d: "M26.538 18h2.654v-3.999h2.576c2.672 0 4.456-1.723 4.456-4.333V9.65c0-2.61-1.784-4.333-4.456-4.333h-5.23V18Zm4.58-10.582c1.52 0 2.416.8 2.416 2.241v.018c0 1.441-.896 2.25-2.417 2.25h-1.925V7.418h1.925ZM38.051 18h2.566v-5.414c0-1.371.923-2.206 2.382-2.206.396 0 .791.061 1.178.15V8.287a3.843 3.843 0 0 0-.958-.123c-1.257 0-2.136.615-2.443 1.661h-.159V8.323h-2.566V18Zm11.55.202c2.979 0 4.772-1.88 4.772-5.036v-.018c0-3.128-1.82-5.036-4.773-5.036-2.953 0-4.772 1.916-4.772 5.036v.018c0 3.146 1.793 5.036 4.772 5.036Zm0-2.013c-1.372 0-2.145-1.116-2.145-3.023v-.018c0-1.89.782-3.023 2.144-3.023 1.354 0 2.145 1.134 2.145 3.023v.018c0 1.907-.782 3.023-2.145 3.023Zm10.52 1.846c.492 0 .967-.053 1.283-.114v-1.907a6.057 6.057 0 0 1-.755.044c-.87 0-1.24-.387-1.24-1.257v-4.544h1.995V8.323H59.41V6.012h-2.592v2.311h-1.495v1.934h1.495v5.133c0 1.88.949 2.645 3.304 2.645Zm7.287.167c2.98 0 4.772-1.88 4.772-5.036v-.018c0-3.128-1.82-5.036-4.772-5.036-2.954 0-4.773 1.916-4.773 5.036v.018c0 3.146 1.793 5.036 4.773 5.036Zm0-2.013c-1.372 0-2.145-1.116-2.145-3.023v-.018c0-1.89.782-3.023 2.145-3.023 1.353 0 2.144 1.134 2.144 3.023v.018c0 1.907-.782 3.023-2.144 3.023Zm10.767 2.013c2.522 0 4.034-1.353 4.297-3.463l.01-.053h-2.374l-.017.036c-.229.966-.853 1.467-1.908 1.467-1.37 0-2.135-1.08-2.135-3.04v-.018c0-1.934.755-3.006 2.135-3.006 1.099 0 1.74.615 1.908 1.556l.008.017h2.391v-.026c-.228-2.162-1.749-3.56-4.315-3.56-3.033 0-4.738 1.837-4.738 5.019v.017c0 3.217 1.714 5.054 4.738 5.054Zm10.257 0c2.98 0 4.772-1.88 4.772-5.036v-.018c0-3.128-1.82-5.036-4.772-5.036-2.953 0-4.773 1.916-4.773 5.036v.018c0 3.146 1.793 5.036 4.773 5.036Zm0-2.013c-1.371 0-2.145-1.116-2.145-3.023v-.018c0-1.89.782-3.023 2.145-3.023 1.353 0 2.144 1.134 2.144 3.023v.018c0 1.907-.782 3.023-2.144 3.023ZM95.025 18h2.566V4.623h-2.566V18Z"
                    })]
                })
            }

            function nt(e) {
                return (0, S.jsxs)("svg", {
                    viewBox: "0 0 20 20",
                    fill: "none",
                    "aria-hidden": "true",
                    ...e,
                    children: [(0, S.jsx)("path", {
                        d: "M12.5 10a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                    }), (0, S.jsx)("path", {
                        strokeLinecap: "round",
                        d: "M10 5.5v-1M13.182 6.818l.707-.707M14.5 10h1M13.182 13.182l.707.707M10 15.5v-1M6.11 13.889l.708-.707M4.5 10h1M6.11 6.111l.708.707"
                    })]
                })
            }

            function nn(e) {
                return (0, S.jsx)("svg", {
                    viewBox: "0 0 20 20",
                    fill: "none",
                    "aria-hidden": "true",
                    ...e,
                    children: (0, S.jsx)("path", {
                        d: "M15.224 11.724a5.5 5.5 0 0 1-6.949-6.949 5.5 5.5 0 1 0 6.949 6.949Z"
                    })
                })
            }

            function nr() {
                return (0, S.jsxs)("button", {
                    type: "button",
                    className: "flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 dark:hover:bg-white/5",
                    "aria-label": "Toggle dark mode",
                    onClick: function () {
                        document.documentElement.classList.add("[&_*]:!transition-none"), window.setTimeout(() => {
                            document.documentElement.classList.remove("[&_*]:!transition-none")
                        }, 0);
                        let e = window.matchMedia("(prefers-color-scheme: dark)").matches,
                            t = document.documentElement.classList.toggle("dark");
                        t === e ? delete window.localStorage.isDarkMode : window.localStorage.isDarkMode = t
                    },
                    children: [(0, S.jsx)(nt, {
                        className: "h-5 w-5 stroke-zinc-900 dark:hidden"
                    }), (0, S.jsx)(nn, {
                        className: "hidden h-5 w-5 stroke-white dark:block"
                    })]
                })
            }

            function ni(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function no(e) {
                return e.reduce(function (e, t) {
                    return e.concat(t)
                }, [])
            }

            function na(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function ns(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? na(Object(n), !0).forEach(function (t) {
                        var r, i;
                        r = e, i = n[t], t in r ? Object.defineProperty(r, t, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[t] = i
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : na(Object(n)).forEach(function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }

            function nl(e) {
                return 0 === e.collections.length ? 0 : e.collections.reduce(function (e, t) {
                    return e + t.items.length
                }, 0)
            }
            var nu = 0,
                nc = function () {};

            function nd(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function nf(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function nh(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function np(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? nh(Object(n), !0).forEach(function (t) {
                        var r, i;
                        r = e, i = n[t], t in r ? Object.defineProperty(r, t, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[t] = i
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : nh(Object(n)).forEach(function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }

            function nm(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function nv(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? nm(Object(n), !0).forEach(function (t) {
                        ng(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : nm(Object(n)).forEach(function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }

            function ng(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function ny(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function nb(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ny(Object(n), !0).forEach(function (t) {
                        var r, i;
                        r = e, i = n[t], t in r ? Object.defineProperty(r, t, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[t] = i
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ny(Object(n)).forEach(function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }

            function nx(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function nw(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function nj(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? nw(Object(n), !0).forEach(function (t) {
                        var r, i;
                        r = e, i = n[t], t in r ? Object.defineProperty(r, t, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[t] = i
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : nw(Object(n)).forEach(function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }

            function nO(e) {
                return Boolean(e.execute)
            }

            function nP(e) {
                return Promise.all(e.reduce(function (e, t) {
                    if (!nO(t)) return e.push(t), e;
                    var n, r = t.searchClient,
                        i = t.execute,
                        o = t.requesterId,
                        a = t.requests,
                        s = e.find(function (e) {
                            return nO(t) && nO(e) && e.searchClient === r && Boolean(o) && e.requesterId === o
                        });
                    return s ? (n = s.items).push.apply(n, function (e) {
                        if (Array.isArray(e)) return nx(e)
                    }(a) || function (e) {
                        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                    }(a) || function (e, t) {
                        if (e) {
                            if ("string" == typeof e) return nx(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return nx(e, t)
                        }
                    }(a) || function () {
                        throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()) : e.push({
                        execute: i,
                        requesterId: o,
                        items: a,
                        searchClient: r
                    }), e
                }, []).map(function (e) {
                    if (!nO(e)) return Promise.resolve(e);
                    var t = e.execute,
                        n = e.items;
                    return t({
                        searchClient: e.searchClient,
                        requests: n
                    })
                })).then(function (e) {
                    return no(e)
                })
            }

            function nE(e, t) {
                var n = t;
                return {
                    then: function (t, r) {
                        return nE(e.then(nT(t, n, e), nT(r, n, e)), n)
                    },
                    catch: function (t) {
                        return nE(e.catch(nT(t, n, e)), n)
                    },
                    finally: function (t) {
                        return t && n.onCancelList.push(t), nE(e.finally(nT(t && function () {
                            return n.onCancelList = [], t()
                        }, n, e)), n)
                    },
                    cancel: function () {
                        n.isCanceled = !0;
                        var e = n.onCancelList;
                        n.onCancelList = [], e.forEach(function (e) {
                            e()
                        })
                    },
                    isCanceled: function () {
                        return !0 === n.isCanceled
                    }
                }
            }

            function nS(e) {
                return nE(new Promise(function (t, n) {
                    return e(t, n)
                }), {
                    isCanceled: !1,
                    onCancelList: []
                })
            }

            function nk(e) {
                return nE(e, {
                    isCanceled: !1,
                    onCancelList: []
                })
            }

            function nT(e, t, n) {
                return e ? function (n) {
                    return t.isCanceled ? n : e(n)
                } : n
            }

            function nA(e) {
                var t, n = (t = e.collections.map(function (e) {
                    return e.items.length
                }).reduce(function (e, t, n) {
                    var r = e[n - 1] || 0;
                    return e.push(r + t), e
                }, []).reduce(function (t, n) {
                    return n <= e.activeItemId ? t + 1 : t
                }, 0), e.collections[t]);
                if (!n) return null;
                var r = n.items[function (e) {
                        for (var t = e.state, n = e.collection, r = !1, i = 0, o = 0; !1 === r;) {
                            var a = t.collections[i];
                            if (a === n) {
                                r = !0;
                                break
                            }
                            o += a.items.length, i++
                        }
                        return t.activeItemId - o
                    }({
                        state: e,
                        collection: n
                    })],
                    i = n.source,
                    o = i.getItemInputValue({
                        item: r,
                        state: e
                    }),
                    a = i.getItemUrl({
                        item: r,
                        state: e
                    });
                return {
                    item: r,
                    itemInputValue: o,
                    itemUrl: a,
                    source: i
                }
            }
            nS.resolve = function (e) {
                return nk(Promise.resolve(e))
            }, nS.reject = function (e) {
                return nk(Promise.reject(e))
            };
            var nC = ["event", "nextState", "props", "query", "refresh", "store"];

            function nI(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function nR(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? nI(Object(n), !0).forEach(function (t) {
                        var r, i;
                        r = e, i = n[t], t in r ? Object.defineProperty(r, t, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[t] = i
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : nI(Object(n)).forEach(function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var nL = null,
                nN = (x = -1, w = -1, j = void 0, function (e) {
                    var t = ++x;
                    return Promise.resolve(e).then(function (e) {
                        return j && t < w ? j : (w = t, j = e, e)
                    })
                });

            function nD(e) {
                var t = e.event,
                    n = e.nextState,
                    r = void 0 === n ? {} : n,
                    i = e.props,
                    o = e.query,
                    a = e.refresh,
                    s = e.store,
                    l = function (e, t) {
                        if (null == e) return {};
                        var n, r, i = function (e, t) {
                            if (null == e) return {};
                            var n, r, i = {},
                                o = Object.keys(e);
                            for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                            return i
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var o = Object.getOwnPropertySymbols(e);
                            for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                        }
                        return i
                    }(e, nC);
                nL && i.environment.clearTimeout(nL);
                var u = l.setCollections,
                    c = l.setIsOpen,
                    d = l.setQuery,
                    f = l.setActiveItemId,
                    h = l.setStatus;
                if (d(o), f(i.defaultActiveItemId), !o && !1 === i.openOnFocus) {
                    var p, m = s.getState().collections.map(function (e) {
                        return nR(nR({}, e), {}, {
                            items: []
                        })
                    });
                    h("idle"), u(m), c(null !== (p = r.isOpen) && void 0 !== p ? p : i.shouldPanelOpen({
                        state: s.getState()
                    }));
                    var v = nk(nN(m).then(function () {
                        return Promise.resolve()
                    }));
                    return s.pendingRequests.add(v)
                }
                h("loading"), nL = i.environment.setTimeout(function () {
                    h("stalled")
                }, i.stallThreshold);
                var g = nk(nN(i.getSources(nR({
                    query: o,
                    refresh: a,
                    state: s.getState()
                }, l)).then(function (e) {
                    return Promise.all(e.map(function (e) {
                        return Promise.resolve(e.getItems(nR({
                            query: o,
                            refresh: a,
                            state: s.getState()
                        }, l))).then(function (t) {
                            var n;
                            return n = e.sourceId, Boolean(null == t ? void 0 : t.execute) ? nj(nj({}, t), {}, {
                                requests: t.queries.map(function (e) {
                                    return {
                                        query: e,
                                        sourceId: n,
                                        transformResponse: t.transformResponse
                                    }
                                })
                            }) : {
                                items: t,
                                sourceId: n
                            }
                        })
                    })).then(nP).then(function (t) {
                        return e.map(function (e) {
                            var n, r = t.filter(function (t) {
                                    return t.sourceId === e.sourceId
                                }),
                                i = r.map(function (e) {
                                    return e.items
                                }),
                                o = r[0].transformResponse,
                                a = o ? o({
                                    results: n = i.map(function (e) {
                                        var t;
                                        return nb(nb({}, e), {}, {
                                            hits: null === (t = e.hits) || void 0 === t ? void 0 : t.map(function (t) {
                                                return nb(nb({}, t), {}, {
                                                    __autocomplete_indexName: e.index,
                                                    __autocomplete_queryID: e.queryID
                                                })
                                            })
                                        })
                                    }),
                                    hits: n.map(function (e) {
                                        return e.hits
                                    }).filter(Boolean),
                                    facetHits: n.map(function (e) {
                                        var t;
                                        return null === (t = e.facetHits) || void 0 === t ? void 0 : t.map(function (e) {
                                            return {
                                                label: e.value,
                                                count: e.count,
                                                _highlightResult: {
                                                    label: {
                                                        value: e.highlighted
                                                    }
                                                }
                                            }
                                        })
                                    }).filter(Boolean)
                                }) : i;
                            return Array.isArray(a), a.every(Boolean), 'The `getItems` function from source "'.concat(e.sourceId, '" must return an array of items but returned ').concat(JSON.stringify(void 0), ".\n\nDid you forget to return items?\n\nSee: https://www.algolia.com/doc/ui-libraries/autocomplete/core-concepts/sources/#param-getitems"), {
                                source: e,
                                items: a
                            }
                        })
                    }).then(function (e) {
                        var t, n, r, o, a;
                        return n = (t = {
                            collections: e,
                            props: i,
                            state: s.getState()
                        }).collections, r = t.props, o = t.state, a = n.reduce(function (e, t) {
                            return nv(nv({}, e), {}, ng({}, t.source.sourceId, nv(nv({}, t.source), {}, {
                                getItems: function () {
                                    return no(t.items)
                                }
                            })))
                        }, {}), no(r.reshape({
                            sources: Object.values(a),
                            sourcesBySourceId: a,
                            state: o
                        })).filter(Boolean).map(function (e) {
                            return {
                                source: e,
                                items: e.getItems()
                            }
                        })
                    })
                }))).then(function (e) {
                    h("idle"), u(e);
                    var n, d = i.shouldPanelOpen({
                        state: s.getState()
                    });
                    c(null !== (n = r.isOpen) && void 0 !== n ? n : i.openOnFocus && !o && d || d);
                    var f = nA(s.getState());
                    if (null !== s.getState().activeItemId && f) {
                        var p = f.item,
                            m = f.itemInputValue,
                            v = f.itemUrl,
                            g = f.source;
                        g.onActive(nR({
                            event: t,
                            item: p,
                            itemInputValue: m,
                            itemUrl: v,
                            refresh: a,
                            source: g,
                            state: s.getState()
                        }, l))
                    }
                }).finally(function () {
                    h("idle"), nL && i.environment.clearTimeout(nL)
                });
                return s.pendingRequests.add(g)
            }
            var nM = ["event", "props", "refresh", "store"];

            function nV(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function nF(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? nV(Object(n), !0).forEach(function (t) {
                        var r, i;
                        r = e, i = n[t], t in r ? Object.defineProperty(r, t, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[t] = i
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : nV(Object(n)).forEach(function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var nz = /((gt|sm)-|galaxy nexus)|samsung[- ]/i,
                nB = ["props", "refresh", "store"],
                nq = ["inputElement", "formElement", "panelElement"],
                nU = ["inputElement"],
                n_ = ["inputElement", "maxLength"],
                n$ = ["item", "source"];

            function nH(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function nW(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? nH(Object(n), !0).forEach(function (t) {
                        var r, i;
                        r = e, i = n[t], t in r ? Object.defineProperty(r, t, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[t] = i
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : nH(Object(n)).forEach(function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }

            function nZ(e, t) {
                if (null == e) return {};
                var n, r, i = function (e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                }
                return i
            }
            var nY = [{
                segment: "autocomplete-core",
                version: "1.7.3"
            }];

            function nG(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function nK(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function nX(e) {
                var t, n = e.state;
                return !1 === n.isOpen || null === n.activeItemId ? null : (null === (t = nA(n)) || void 0 === t ? void 0 : t.itemInputValue) || null
            }

            function nJ(e, t, n, r) {
                if (!n) return null;
                if (e < 0 && (null === t || null !== r && 0 === t)) return n + e;
                var i = (null === t ? -1 : t) + e;
                return i <= -1 || i >= n ? null === r ? null : 0 : i
            }

            function nQ(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function n0(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? nQ(Object(n), !0).forEach(function (t) {
                        var r, i;
                        r = e, i = n[t], t in r ? Object.defineProperty(r, t, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[t] = i
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : nQ(Object(n)).forEach(function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var n1 = function (e, t) {
                switch (t.type) {
                    case "setActiveItemId":
                    case "mousemove":
                        return n0(n0({}, e), {}, {
                            activeItemId: t.payload
                        });
                    case "setQuery":
                        return n0(n0({}, e), {}, {
                            query: t.payload,
                            completion: null
                        });
                    case "setCollections":
                        return n0(n0({}, e), {}, {
                            collections: t.payload
                        });
                    case "setIsOpen":
                        return n0(n0({}, e), {}, {
                            isOpen: t.payload
                        });
                    case "setStatus":
                        return n0(n0({}, e), {}, {
                            status: t.payload
                        });
                    case "setContext":
                        return n0(n0({}, e), {}, {
                            context: n0(n0({}, e.context), t.payload)
                        });
                    case "ArrowDown":
                        var n = n0(n0({}, e), {}, {
                            activeItemId: t.payload.hasOwnProperty("nextActiveItemId") ? t.payload.nextActiveItemId : nJ(1, e.activeItemId, nl(e), t.props.defaultActiveItemId)
                        });
                        return n0(n0({}, n), {}, {
                            completion: nX({
                                state: n
                            })
                        });
                    case "ArrowUp":
                        var r = n0(n0({}, e), {}, {
                            activeItemId: nJ(-1, e.activeItemId, nl(e), t.props.defaultActiveItemId)
                        });
                        return n0(n0({}, r), {}, {
                            completion: nX({
                                state: r
                            })
                        });
                    case "Escape":
                        if (e.isOpen) return n0(n0({}, e), {}, {
                            activeItemId: null,
                            isOpen: !1,
                            completion: null
                        });
                        return n0(n0({}, e), {}, {
                            activeItemId: null,
                            query: "",
                            status: "idle",
                            collections: []
                        });
                    case "submit":
                        return n0(n0({}, e), {}, {
                            activeItemId: null,
                            isOpen: !1,
                            status: "idle"
                        });
                    case "reset":
                        return n0(n0({}, e), {}, {
                            activeItemId: !0 === t.props.openOnFocus ? t.props.defaultActiveItemId : null,
                            status: "idle",
                            query: ""
                        });
                    case "focus":
                        return n0(n0({}, e), {}, {
                            activeItemId: t.props.defaultActiveItemId,
                            isOpen: (t.props.openOnFocus || Boolean(e.query)) && t.props.shouldPanelOpen({
                                state: e
                            })
                        });
                    case "blur":
                        if (t.props.debug) return e;
                        return n0(n0({}, e), {}, {
                            isOpen: !1,
                            activeItemId: null
                        });
                    case "mouseleave":
                        return n0(n0({}, e), {}, {
                            activeItemId: t.props.defaultActiveItemId
                        });
                    default:
                        return JSON.stringify(t.type), e
                }
            };

            function n2(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function n5(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? n2(Object(n), !0).forEach(function (t) {
                        var r, i;
                        r = e, i = n[t], t in r ? Object.defineProperty(r, t, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[t] = i
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : n2(Object(n)).forEach(function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var n4 = ["params"];

            function n3(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function n6(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? n3(Object(n), !0).forEach(function (t) {
                        var r, i;
                        r = e, i = n[t], t in r ? Object.defineProperty(r, t, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[t] = i
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : n3(Object(n)).forEach(function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }

            function n8(e) {
                return function (e) {
                    if (Array.isArray(e)) return n9(e)
                }(e) || function (e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function (e, t) {
                    if (e) {
                        if ("string" == typeof e) return n9(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return n9(e, t)
                    }
                }(e) || function () {
                    throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function n9(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function n7(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function re(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? n7(Object(n), !0).forEach(function (t) {
                        var r, i;
                        r = e, i = n[t], t in r ? Object.defineProperty(r, t, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[t] = i
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : n7(Object(n)).forEach(function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var rt = (function (e, t) {
                    function n(t) {
                        return e({
                            searchClient: t.searchClient,
                            queries: t.requests.map(function (e) {
                                return e.query
                            })
                        }).then(function (e) {
                            return e.map(function (e, n) {
                                var r = t.requests[n];
                                return {
                                    items: e,
                                    sourceId: r.sourceId,
                                    transformResponse: r.transformResponse
                                }
                            })
                        })
                    }
                    return function (e) {
                        return function (r) {
                            return re(re({
                                requesterId: t,
                                execute: n
                            }, e), r)
                        }
                    }
                })(function (e) {
                    var t = e.searchClient,
                        n = e.queries,
                        r = e.userAgents;
                    return "function" == typeof t.addAlgoliaAgent && [].concat(n8(nY), n8(void 0 === r ? [] : r)).forEach(function (e) {
                        var n = e.segment,
                            r = e.version;
                        t.addAlgoliaAgent(n, r)
                    }), t.search(n.map(function (e) {
                        var t = e.params;
                        return n6(n6({}, function (e, t) {
                            if (null == e) return {};
                            var n, r, i = function (e, t) {
                                if (null == e) return {};
                                var n, r, i = {},
                                    o = Object.keys(e);
                                for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                                return i
                            }(e, t);
                            if (Object.getOwnPropertySymbols) {
                                var o = Object.getOwnPropertySymbols(e);
                                for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                            }
                            return i
                        }(e, n4)), {}, {
                            params: n6({
                                hitsPerPage: 5,
                                highlightPreTag: "__aa-highlight__",
                                highlightPostTag: "__/aa-highlight__"
                            }, t)
                        })
                    })).then(function (e) {
                        return e.results
                    })
                }, "algolia")({
                    transformResponse: function (e) {
                        return e.hits
                    }
                }),
                rn = n(290),
                rr = n.n(rn);
            let ri = rr()("RETR9S9VHS", "326c1723a310dfe29004b47608709907");

            function ro(e) {
                return (0, S.jsx)("svg", {
                    viewBox: "0 0 20 20",
                    fill: "none",
                    "aria-hidden": "true",
                    ...e,
                    children: (0, S.jsx)("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M12.01 12a4.25 4.25 0 1 0-6.02-6 4.25 4.25 0 0 0 6.02 6Zm0 0 3.24 3.25"
                    })
                })
            }

            function ra(e) {
                return (0, S.jsx)("svg", {
                    viewBox: "0 0 20 20",
                    fill: "none",
                    "aria-hidden": "true",
                    ...e,
                    children: (0, S.jsx)("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M12.01 12a4.237 4.237 0 0 0 1.24-3c0-.62-.132-1.207-.37-1.738M12.01 12A4.237 4.237 0 0 1 9 13.25c-.635 0-1.237-.14-1.777-.388M12.01 12l3.24 3.25m-3.715-9.661a4.25 4.25 0 0 0-5.975 5.908M4.5 15.5l11-11"
                    })
                })
            }

            function rs(e) {
                let t = (0, N.useId)();
                return (0, S.jsxs)("svg", {
                    viewBox: "0 0 20 20",
                    fill: "none",
                    "aria-hidden": "true",
                    ...e,
                    children: [(0, S.jsx)("circle", {
                        cx: "10",
                        cy: "10",
                        r: "5.5",
                        strokeLinejoin: "round"
                    }), (0, S.jsx)("path", {
                        stroke: `url(#${t})`,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M15.5 10a5.5 5.5 0 1 0-5.5 5.5"
                    }), (0, S.jsx)("defs", {
                        children: (0, S.jsxs)("linearGradient", {
                            id: t,
                            x1: "13",
                            x2: "9.5",
                            y1: "9",
                            y2: "15",
                            gradientUnits: "userSpaceOnUse",
                            children: [(0, S.jsx)("stop", {
                                stopColor: "currentColor"
                            }), (0, S.jsx)("stop", {
                                offset: "1",
                                stopColor: "currentColor",
                                stopOpacity: "0"
                            })]
                        })
                    })]
                })
            }

            function rl(e) {
                let t, n, r, i, {
                        result: o,
                        resultIndex: a,
                        autocomplete: s,
                        collection: l
                    } = e,
                    u = (0, N.useId)(),
                    {
                        titleHtml: c,
                        hierarchyHtml: d
                    } = (t = Object.keys(o.hierarchy), r = (n = Object.entries(o._highlightResult.hierarchy).filter(e => {
                        let [, {
                            value: t
                        }] = e;
                        return Boolean(t)
                    })).map(e => {
                        let [t] = e;
                        return t
                    }), i = "content" === o.type ? r.pop() : r.filter(e => t.indexOf(e) <= t.indexOf(o.type)).pop(), {
                        titleHtml: o._highlightResult.hierarchy[i].value,
                        hierarchyHtml: n.slice(0, r.indexOf(i)).map(e => {
                            let [, {
                                value: t
                            }] = e;
                            return t
                        })
                    });
                return (0, S.jsxs)("li", {
                    className: (0, eO.Z)("group block cursor-default px-4 py-3 aria-selected:bg-zinc-50 dark:aria-selected:bg-zinc-800/50", a > 0 && "border-t border-zinc-100 dark:border-zinc-800"),
                    "aria-labelledby": `${u}-hierarchy ${u}-title`,
                    ...s.getItemProps({
                        item: o,
                        source: l.source
                    }),
                    children: [(0, S.jsx)("div", {
                        id: `${u}-title`,
                        "aria-hidden": "true",
                        className: "text-sm font-medium text-zinc-900 group-aria-selected:text-emerald-500 dark:text-white",
                        dangerouslySetInnerHTML: {
                            __html: c
                        }
                    }), d.length > 0 && (0, S.jsx)("div", {
                        id: `${u}-hierarchy`,
                        "aria-hidden": "true",
                        className: "mt-1 truncate whitespace-nowrap text-2xs text-zinc-500",
                        children: d.map((e, t, n) => (0, S.jsxs)(N.Fragment, {
                            children: [(0, S.jsx)("span", {
                                dangerouslySetInnerHTML: {
                                    __html: e
                                }
                            }), (0, S.jsx)("span", {
                                className: t === n.length - 1 ? "sr-only" : "mx-2 text-zinc-300 dark:text-zinc-700",
                                children: "/"
                            })]
                        }, t))
                    })]
                })
            }

            function ru(e) {
                let {
                    autocomplete: t,
                    query: n,
                    collection: r
                } = e;
                return 0 === r.items.length ? (0, S.jsxs)("div", {
                    className: "p-6 text-center",
                    children: [(0, S.jsx)(ra, {
                        className: "mx-auto h-5 w-5 stroke-zinc-900 dark:stroke-zinc-600"
                    }), (0, S.jsxs)("p", {
                        className: "mt-2 text-xs text-zinc-700 dark:text-zinc-400",
                        children: ["Nothing found for", " ", (0, S.jsxs)("strong", {
                            className: "break-words font-semibold text-zinc-900 dark:text-white",
                            children: ["‘", n, "’"]
                        }), ". Please try again."]
                    })]
                }) : (0, S.jsx)("ul", {
                    role: "list",
                    ...t.getListProps(),
                    children: r.items.map((e, n) => (0, S.jsx)(rl, {
                        result: e,
                        resultIndex: n,
                        autocomplete: t,
                        collection: r
                    }, e.objectID))
                })
            }
            let rc = (0, N.forwardRef)(function (e, t) {
                let {
                    autocomplete: n,
                    autocompleteState: r,
                    onClose: i
                } = e, o = n.getInputProps({});
                return (0, S.jsxs)("div", {
                    className: "group relative flex h-12",
                    children: [(0, S.jsx)(ro, {
                        className: "pointer-events-none absolute left-3 top-0 h-full w-5 stroke-zinc-500"
                    }), (0, S.jsx)("input", {
                        ref: t,
                        className: (0, eO.Z)("flex-auto appearance-none bg-transparent pl-10 text-zinc-900 outline-none placeholder:text-zinc-500 focus:w-full focus:flex-none dark:text-white sm:text-sm [&::-webkit-search-cancel-button]:hidden [&::-webkit-search-decoration]:hidden [&::-webkit-search-results-button]:hidden [&::-webkit-search-results-decoration]:hidden", "stalled" === r.status ? "pr-11" : "pr-4"),
                        ...o,
                        onKeyDown(e) {
                            if ("Escape" !== e.key || r.isOpen || "" !== r.query) o.onKeyDown(e);
                            else {
                                var t;
                                null === (t = document.activeElement) || void 0 === t || t.blur(), i()
                            }
                        }
                    }), "stalled" === r.status && (0, S.jsx)("div", {
                        className: "absolute inset-y-0 right-3 flex items-center",
                        children: (0, S.jsx)(rs, {
                            className: "h-5 w-5 animate-spin stroke-zinc-200 text-zinc-900 dark:stroke-zinc-800 dark:text-emerald-400"
                        })
                    })]
                })
            });

            function rd(e) {
                return (0, S.jsxs)("svg", {
                    viewBox: "0 0 71 16",
                    role: "img",
                    "aria-label": "Algolia",
                    ...e,
                    children: [(0, S.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M34.98 8.81V.19a.189.189 0 0 0-.218-.186l-1.615.254a.19.19 0 0 0-.16.187l.006 8.741c0 .414 0 2.966 3.07 3.056a.19.19 0 0 0 .195-.19v-1.304a.187.187 0 0 0-.164-.187c-1.115-.128-1.115-1.522-1.115-1.75v-.002Z",
                        clipRule: "evenodd"
                    }), (0, S.jsx)("path", {
                        d: "M61.605 3.352H59.98a.189.189 0 0 0-.189.189v8.514c0 .104.085.189.189.189h1.625a.189.189 0 0 0 .188-.19V3.542a.189.189 0 0 0-.188-.189Z"
                    }), (0, S.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M59.98 2.285h1.625a.189.189 0 0 0 .188-.189V.19a.189.189 0 0 0-.218-.187l-1.624.255a.189.189 0 0 0-.16.186v1.652c0 .104.085.189.189.189ZM57.172 8.81V.19a.189.189 0 0 0-.218-.186l-1.615.254a.19.19 0 0 0-.16.187l.006 8.741c0 .414 0 2.966 3.07 3.056a.19.19 0 0 0 .196-.19v-1.304a.187.187 0 0 0-.164-.187c-1.115-.128-1.115-1.522-1.115-1.75v-.002ZM52.946 4.568a3.628 3.628 0 0 0-1.304-.906 4.347 4.347 0 0 0-1.666-.315c-.601 0-1.157.101-1.662.315a3.822 3.822 0 0 0-1.304.906c-.367.39-.652.86-.856 1.408-.204.55-.296 1.196-.296 1.868 0 .671.103 1.18.306 1.734.204.554.484 1.027.846 1.42.361.39.795.691 1.3.91.504.218 1.283.33 1.676.335.392 0 1.177-.122 1.686-.335.51-.214.943-.52 1.305-.91.361-.393.641-.866.84-1.42.199-.555.295-1.063.295-1.734 0-.672-.107-1.318-.32-1.868a4.203 4.203 0 0 0-.846-1.408Zm-1.421 5.239c-.367.504-.882.758-1.539.758-.657 0-1.172-.25-1.539-.758-.367-.504-.55-1.088-.55-1.958 0-.86.178-1.573.545-2.076.367-.504.882-.752 1.538-.752.658 0 1.172.248 1.539.752.367.498.556 1.215.556 2.076 0 .87-.184 1.449-.55 1.958ZM29.35 3.352H27.77c-1.547 0-2.909.815-3.703 2.051a4.643 4.643 0 0 0-.736 2.519 4.611 4.611 0 0 0 1.949 3.783 2.574 2.574 0 0 0 1.542.428l.034-.002.084-.006.032-.004.088-.011.02-.003c1.052-.163 1.97-.986 2.268-2.01v1.85c0 .105.085.19.19.19h1.612a.189.189 0 0 0 .19-.19V3.541a.189.189 0 0 0-.19-.189H29.35Zm0 6.62c-.39.326-.896.448-1.435.484l-.016.002a1.68 1.68 0 0 1-.107.003c-1.352 0-2.468-1.149-2.468-2.54 0-.328.063-.64.173-.927.36-.932 1.241-1.591 2.274-1.591h1.578v4.57ZM69.009 3.352H67.43c-1.547 0-2.908.815-3.703 2.051a4.643 4.643 0 0 0-.736 2.519 4.611 4.611 0 0 0 1.949 3.783 2.575 2.575 0 0 0 1.542.428l.034-.002.084-.006.033-.004.087-.011.02-.003c1.053-.163 1.97-.986 2.269-2.01v1.85c0 .105.084.19.188.19h1.614a.189.189 0 0 0 .188-.19V3.541a.189.189 0 0 0-.188-.189h-1.802Zm0 6.62c-.39.326-.895.448-1.435.484l-.016.002a1.675 1.675 0 0 1-.107.003c-1.352 0-2.468-1.149-2.468-2.54 0-.328.063-.64.174-.927.359-.932 1.24-1.591 2.273-1.591h1.579v4.57ZM42.775 3.352h-1.578c-1.547 0-2.909.815-3.704 2.051a4.63 4.63 0 0 0-.735 2.519 4.6 4.6 0 0 0 1.65 3.555c.094.083.194.16.298.228a2.575 2.575 0 0 0 2.966-.08c.52-.37.924-.913 1.103-1.527v1.608h-.004v.354c0 .7-.182 1.225-.554 1.58-.372.354-.994.532-1.864.532-.356 0-.921-.02-1.491-.078a.19.19 0 0 0-.2.136l-.41 1.379a.19.19 0 0 0 .155.24c.688.1 1.36.15 1.748.15 1.565 0 2.725-.343 3.484-1.03.688-.621 1.061-1.564 1.127-2.832V3.54a.189.189 0 0 0-.19-.189h-1.801Zm0 2.051s.021 4.452 0 4.587c-.386.312-.867.435-1.391.47l-.016.001a1.751 1.751 0 0 1-.233 0c-1.293-.067-2.385-1.192-2.385-2.54 0-.327.063-.64.174-.927.359-.931 1.24-1.591 2.273-1.591h1.578Z",
                        clipRule: "evenodd"
                    }), (0, S.jsx)("path", {
                        d: "M8.725.001C4.356.001.795 3.523.732 7.877c-.064 4.422 3.524 8.085 7.946 8.111a7.94 7.94 0 0 0 3.849-.96.187.187 0 0 0 .034-.305l-.748-.663a.528.528 0 0 0-.555-.094 6.461 6.461 0 0 1-2.614.513c-3.574-.043-6.46-3.016-6.404-6.59a6.493 6.493 0 0 1 6.485-6.38h6.485v11.527l-3.68-3.269a.271.271 0 0 0-.397.042 3.014 3.014 0 0 1-5.416-1.583 3.02 3.02 0 0 1 3.008-3.248 3.02 3.02 0 0 1 3.005 2.75.537.537 0 0 0 .176.356l.958.85a.187.187 0 0 0 .308-.106c.07-.37.094-.755.067-1.15a4.536 4.536 0 0 0-4.23-4.2A4.53 4.53 0 0 0 4.203 7.87c-.067 2.467 1.954 4.593 4.421 4.648a4.498 4.498 0 0 0 2.756-.863l4.808 4.262a.32.32 0 0 0 .531-.239V.304a.304.304 0 0 0-.303-.303h-7.69Z"
                    })]
                })
            }

            function rf(e) {
                let {
                    open: t,
                    setOpen: n,
                    className: r
                } = e, i = (0, A.useRouter)(), o = (0, N.useRef)(), a = (0, N.useRef)(), s = (0, N.useRef)(), {
                    autocomplete: l,
                    autocompleteState: u
                } = function () {
                    let e = (0, N.useId)(),
                        t = (0, A.useRouter)(),
                        [n, r] = (0, N.useState)({}),
                        [i] = (0, N.useState)(() => (function (e) {
                            var t, n, r, i, o, a, s, l, u, c, d, f, h, p, m, v, g, y, b, x, w = [],
                                j = (n = "undefined" != typeof window ? window : {}, r = e.plugins || [], np(np({
                                    debug: !1,
                                    openOnFocus: !1,
                                    placeholder: "",
                                    autoFocus: !1,
                                    defaultActiveItemId: null,
                                    stallThreshold: 300,
                                    environment: n,
                                    shouldPanelOpen: function (e) {
                                        return nl(e.state) > 0
                                    },
                                    reshape: function (e) {
                                        return e.sources
                                    }
                                }, e), {}, {
                                    id: null !== (t = e.id) && void 0 !== t ? t : "autocomplete-".concat(nu++),
                                    plugins: r,
                                    initialState: np({
                                        activeItemId: null,
                                        query: "",
                                        completion: null,
                                        collections: [],
                                        isOpen: !1,
                                        status: "idle",
                                        context: {}
                                    }, e.initialState),
                                    onStateChange: function (t) {
                                        var n;
                                        null === (n = e.onStateChange) || void 0 === n || n.call(e, t), r.forEach(function (e) {
                                            var n;
                                            return null === (n = e.onStateChange) || void 0 === n ? void 0 : n.call(e, t)
                                        })
                                    },
                                    onSubmit: function (t) {
                                        var n;
                                        null === (n = e.onSubmit) || void 0 === n || n.call(e, t), r.forEach(function (e) {
                                            var n;
                                            return null === (n = e.onSubmit) || void 0 === n ? void 0 : n.call(e, t)
                                        })
                                    },
                                    onReset: function (t) {
                                        var n;
                                        null === (n = e.onReset) || void 0 === n || n.call(e, t), r.forEach(function (e) {
                                            var n;
                                            return null === (n = e.onReset) || void 0 === n ? void 0 : n.call(e, t)
                                        })
                                    },
                                    getSources: function (t) {
                                        var n;
                                        return Promise.all([].concat(function (e) {
                                            if (Array.isArray(e)) return nf(e)
                                        }(n = r.map(function (e) {
                                            return e.getSources
                                        })) || function (e) {
                                            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                                        }(n) || function (e, t) {
                                            if (e) {
                                                if ("string" == typeof e) return nf(e, t);
                                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
                                                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return nf(e, t)
                                            }
                                        }(n) || function () {
                                            throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                        }(), [e.getSources]).filter(Boolean).map(function (e) {
                                            var n;
                                            return n = [], Promise.resolve(e(t)).then(function (e) {
                                                return Array.isArray(e), Promise.all(e.filter(function (e) {
                                                    return Boolean(e)
                                                }).map(function (e) {
                                                    if (e.sourceId, n.includes(e.sourceId)) throw Error("[Autocomplete] The `sourceId` ".concat(JSON.stringify(e.sourceId), " is not unique."));
                                                    return n.push(e.sourceId), Promise.resolve(function (e) {
                                                        for (var t = 1; t < arguments.length; t++) {
                                                            var n = null != arguments[t] ? arguments[t] : {};
                                                            t % 2 ? nd(Object(n), !0).forEach(function (t) {
                                                                var r, i;
                                                                r = e, i = n[t], t in r ? Object.defineProperty(r, t, {
                                                                    value: i,
                                                                    enumerable: !0,
                                                                    configurable: !0,
                                                                    writable: !0
                                                                }) : r[t] = i
                                                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : nd(Object(n)).forEach(function (t) {
                                                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                                            })
                                                        }
                                                        return e
                                                    }({
                                                        getItemInputValue: function (e) {
                                                            return e.state.query
                                                        },
                                                        getItemUrl: function () {},
                                                        onSelect: function (e) {
                                                            (0, e.setIsOpen)(!1)
                                                        },
                                                        onActive: nc
                                                    }, e))
                                                }))
                                            })
                                        })).then(function (e) {
                                            return no(e)
                                        }).then(function (e) {
                                            return e.map(function (e) {
                                                return np(np({}, e), {}, {
                                                    onSelect: function (t) {
                                                        e.onSelect(t), w.forEach(function (e) {
                                                            var n;
                                                            return null === (n = e.onSelect) || void 0 === n ? void 0 : n.call(e, t)
                                                        })
                                                    },
                                                    onActive: function (t) {
                                                        e.onActive(t), w.forEach(function (e) {
                                                            var n;
                                                            return null === (n = e.onActive) || void 0 === n ? void 0 : n.call(e, t)
                                                        })
                                                    }
                                                })
                                            })
                                        })
                                    },
                                    navigator: np({
                                        navigate: function (e) {
                                            var t = e.itemUrl;
                                            n.location.assign(t)
                                        },
                                        navigateNewTab: function (e) {
                                            var t = e.itemUrl,
                                                r = n.open(t, "_blank", "noopener");
                                            null == r || r.focus()
                                        },
                                        navigateNewWindow: function (e) {
                                            var t = e.itemUrl;
                                            n.open(t, "_blank", "noopener")
                                        }
                                    }, e.navigator)
                                })),
                                O = (i = function (e) {
                                    var t = e.prevState,
                                        n = e.state;
                                    j.onStateChange(n5({
                                        prevState: t,
                                        state: n,
                                        refresh: S
                                    }, P))
                                }, o = j.initialState, {
                                    getState: function () {
                                        return o
                                    },
                                    dispatch: function (e, t) {
                                        var n = function (e) {
                                            for (var t = 1; t < arguments.length; t++) {
                                                var n = null != arguments[t] ? arguments[t] : {};
                                                t % 2 ? ni(Object(n), !0).forEach(function (t) {
                                                    var r, i;
                                                    r = e, i = n[t], t in r ? Object.defineProperty(r, t, {
                                                        value: i,
                                                        enumerable: !0,
                                                        configurable: !0,
                                                        writable: !0
                                                    }) : r[t] = i
                                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ni(Object(n)).forEach(function (t) {
                                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                                })
                                            }
                                            return e
                                        }({}, o);
                                        i({
                                            state: o = n1(o, {
                                                type: e,
                                                props: j,
                                                payload: t
                                            }),
                                            prevState: n
                                        })
                                    },
                                    pendingRequests: (a = [], {
                                        add: function (e) {
                                            return a.push(e), e.finally(function () {
                                                a = a.filter(function (t) {
                                                    return t !== e
                                                })
                                            })
                                        },
                                        cancelAll: function () {
                                            a.forEach(function (e) {
                                                return e.cancel()
                                            })
                                        },
                                        isEmpty: function () {
                                            return 0 === a.length
                                        }
                                    })
                                }),
                                P = {
                                    setActiveItemId: function (e) {
                                        O.dispatch("setActiveItemId", e)
                                    },
                                    setQuery: function (e) {
                                        O.dispatch("setQuery", e)
                                    },
                                    setCollections: function (e) {
                                        var t = 0,
                                            n = e.map(function (e) {
                                                return ns(ns({}, e), {}, {
                                                    items: no(e.items).map(function (e) {
                                                        return ns(ns({}, e), {}, {
                                                            __autocomplete_id: t++
                                                        })
                                                    })
                                                })
                                            });
                                        O.dispatch("setCollections", n)
                                    },
                                    setIsOpen: function (e) {
                                        O.dispatch("setIsOpen", e)
                                    },
                                    setStatus: function (e) {
                                        O.dispatch("setStatus", e)
                                    },
                                    setContext: function (e) {
                                        O.dispatch("setContext", e)
                                    }
                                },
                                E = (l = (s = n5({
                                    props: j,
                                    refresh: S,
                                    store: O
                                }, P)).props, u = s.refresh, c = s.store, d = nZ(s, nB), {
                                    getEnvironmentProps: function (e) {
                                        var t = e.inputElement,
                                            n = e.formElement,
                                            r = e.panelElement;

                                        function i(e) {
                                            (c.getState().isOpen || !c.pendingRequests.isEmpty()) && e.target !== t && (!1 !== [n, r].some(function (t) {
                                                var n;
                                                return t === (n = e.target) || t.contains(n)
                                            }) || (c.dispatch("blur", null), l.debug || c.pendingRequests.cancelAll()))
                                        }
                                        return nW({
                                            onTouchStart: i,
                                            onMouseDown: i,
                                            onTouchMove: function (e) {
                                                !1 !== c.getState().isOpen && t === l.environment.document.activeElement && e.target !== t && t.blur()
                                            }
                                        }, nZ(e, nq))
                                    },
                                    getRootProps: function (e) {
                                        return nW({
                                            role: "combobox",
                                            "aria-expanded": c.getState().isOpen,
                                            "aria-haspopup": "listbox",
                                            "aria-owns": c.getState().isOpen ? "".concat(l.id, "-list") : void 0,
                                            "aria-labelledby": "".concat(l.id, "-label")
                                        }, e)
                                    },
                                    getFormProps: function (e) {
                                        return e.inputElement, nW({
                                            action: "",
                                            noValidate: !0,
                                            role: "search",
                                            onSubmit: function (t) {
                                                var n;
                                                t.preventDefault(), l.onSubmit(nW({
                                                    event: t,
                                                    refresh: u,
                                                    state: c.getState()
                                                }, d)), c.dispatch("submit", null), null === (n = e.inputElement) || void 0 === n || n.blur()
                                            },
                                            onReset: function (t) {
                                                var n;
                                                t.preventDefault(), l.onReset(nW({
                                                    event: t,
                                                    refresh: u,
                                                    state: c.getState()
                                                }, d)), c.dispatch("reset", null), null === (n = e.inputElement) || void 0 === n || n.focus()
                                            }
                                        }, nZ(e, nU))
                                    },
                                    getLabelProps: function (e) {
                                        return nW({
                                            htmlFor: "".concat(l.id, "-input"),
                                            id: "".concat(l.id, "-label")
                                        }, e)
                                    },
                                    getInputProps: function (e) {
                                        function t(e) {
                                            (l.openOnFocus || Boolean(c.getState().query)) && nD(nW({
                                                event: e,
                                                props: l,
                                                query: c.getState().completion || c.getState().query,
                                                refresh: u,
                                                store: c
                                            }, d)), c.dispatch("focus", null)
                                        }
                                        var n, r, i = e || {},
                                            o = (i.inputElement, i.maxLength),
                                            a = void 0 === o ? 512 : o,
                                            s = nZ(i, n_),
                                            f = nA(c.getState()),
                                            h = Boolean((n = (null === (r = l.environment.navigator) || void 0 === r ? void 0 : r.userAgent) || "") && n.match(nz)),
                                            p = null != f && f.itemUrl && !h ? "go" : "search";
                                        return nW({
                                            "aria-autocomplete": "both",
                                            "aria-activedescendant": c.getState().isOpen && null !== c.getState().activeItemId ? "".concat(l.id, "-item-").concat(c.getState().activeItemId) : void 0,
                                            "aria-controls": c.getState().isOpen ? "".concat(l.id, "-list") : void 0,
                                            "aria-labelledby": "".concat(l.id, "-label"),
                                            value: c.getState().completion || c.getState().query,
                                            id: "".concat(l.id, "-input"),
                                            autoComplete: "off",
                                            autoCorrect: "off",
                                            autoCapitalize: "off",
                                            enterKeyHint: p,
                                            spellCheck: "false",
                                            autoFocus: l.autoFocus,
                                            placeholder: l.placeholder,
                                            maxLength: a,
                                            type: "search",
                                            onChange: function (e) {
                                                nD(nW({
                                                    event: e,
                                                    props: l,
                                                    query: e.currentTarget.value.slice(0, a),
                                                    refresh: u,
                                                    store: c
                                                }, d))
                                            },
                                            onKeyDown: function (e) {
                                                ! function (e) {
                                                    var t = e.event,
                                                        n = e.props,
                                                        r = e.refresh,
                                                        i = e.store,
                                                        o = function (e, t) {
                                                            if (null == e) return {};
                                                            var n, r, i = function (e, t) {
                                                                if (null == e) return {};
                                                                var n, r, i = {},
                                                                    o = Object.keys(e);
                                                                for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                                                                return i
                                                            }(e, t);
                                                            if (Object.getOwnPropertySymbols) {
                                                                var o = Object.getOwnPropertySymbols(e);
                                                                for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                                                            }
                                                            return i
                                                        }(e, nM);
                                                    if ("ArrowUp" === t.key || "ArrowDown" === t.key) {
                                                        var a = function () {
                                                                var e = n.environment.document.getElementById("".concat(n.id, "-item-").concat(i.getState().activeItemId));
                                                                e && (e.scrollIntoViewIfNeeded ? e.scrollIntoViewIfNeeded(!1) : e.scrollIntoView(!1))
                                                            },
                                                            s = function () {
                                                                var e = nA(i.getState());
                                                                if (null !== i.getState().activeItemId && e) {
                                                                    var n = e.item,
                                                                        a = e.itemInputValue,
                                                                        s = e.itemUrl,
                                                                        l = e.source;
                                                                    l.onActive(nF({
                                                                        event: t,
                                                                        item: n,
                                                                        itemInputValue: a,
                                                                        itemUrl: s,
                                                                        refresh: r,
                                                                        source: l,
                                                                        state: i.getState()
                                                                    }, o))
                                                                }
                                                            };
                                                        t.preventDefault(), !1 === i.getState().isOpen && (n.openOnFocus || Boolean(i.getState().query)) ? nD(nF({
                                                            event: t,
                                                            props: n,
                                                            query: i.getState().query,
                                                            refresh: r,
                                                            store: i
                                                        }, o)).then(function () {
                                                            i.dispatch(t.key, {
                                                                nextActiveItemId: n.defaultActiveItemId
                                                            }), s(), setTimeout(a, 0)
                                                        }) : (i.dispatch(t.key, {}), s(), a())
                                                    } else if ("Escape" === t.key) t.preventDefault(), i.dispatch(t.key, null), i.pendingRequests.cancelAll();
                                                    else if ("Tab" === t.key) i.dispatch("blur", null), i.pendingRequests.cancelAll();
                                                    else if ("Enter" === t.key) {
                                                        if (null === i.getState().activeItemId || i.getState().collections.every(function (e) {
                                                                return 0 === e.items.length
                                                            })) {
                                                            n.debug || i.pendingRequests.cancelAll();
                                                            return
                                                        }
                                                        t.preventDefault();
                                                        var l = nA(i.getState()),
                                                            u = l.item,
                                                            c = l.itemInputValue,
                                                            d = l.itemUrl,
                                                            f = l.source;
                                                        if (t.metaKey || t.ctrlKey) void 0 !== d && (f.onSelect(nF({
                                                            event: t,
                                                            item: u,
                                                            itemInputValue: c,
                                                            itemUrl: d,
                                                            refresh: r,
                                                            source: f,
                                                            state: i.getState()
                                                        }, o)), n.navigator.navigateNewTab({
                                                            itemUrl: d,
                                                            item: u,
                                                            state: i.getState()
                                                        }));
                                                        else if (t.shiftKey) void 0 !== d && (f.onSelect(nF({
                                                            event: t,
                                                            item: u,
                                                            itemInputValue: c,
                                                            itemUrl: d,
                                                            refresh: r,
                                                            source: f,
                                                            state: i.getState()
                                                        }, o)), n.navigator.navigateNewWindow({
                                                            itemUrl: d,
                                                            item: u,
                                                            state: i.getState()
                                                        }));
                                                        else if (t.altKey);
                                                        else {
                                                            if (void 0 !== d) {
                                                                f.onSelect(nF({
                                                                    event: t,
                                                                    item: u,
                                                                    itemInputValue: c,
                                                                    itemUrl: d,
                                                                    refresh: r,
                                                                    source: f,
                                                                    state: i.getState()
                                                                }, o)), n.navigator.navigate({
                                                                    itemUrl: d,
                                                                    item: u,
                                                                    state: i.getState()
                                                                });
                                                                return
                                                            }
                                                            nD(nF({
                                                                event: t,
                                                                nextState: {
                                                                    isOpen: !1
                                                                },
                                                                props: n,
                                                                query: c,
                                                                refresh: r,
                                                                store: i
                                                            }, o)).then(function () {
                                                                f.onSelect(nF({
                                                                    event: t,
                                                                    item: u,
                                                                    itemInputValue: c,
                                                                    itemUrl: d,
                                                                    refresh: r,
                                                                    source: f,
                                                                    state: i.getState()
                                                                }, o))
                                                            })
                                                        }
                                                    }
                                                }(nW({
                                                    event: e,
                                                    props: l,
                                                    refresh: u,
                                                    store: c
                                                }, d))
                                            },
                                            onFocus: t,
                                            onBlur: nc,
                                            onClick: function (n) {
                                                e.inputElement !== l.environment.document.activeElement || c.getState().isOpen || t(n)
                                            }
                                        }, s)
                                    },
                                    getPanelProps: function (e) {
                                        return nW({
                                            onMouseDown: function (e) {
                                                e.preventDefault()
                                            },
                                            onMouseLeave: function () {
                                                c.dispatch("mouseleave", null)
                                            }
                                        }, e)
                                    },
                                    getListProps: function (e) {
                                        return nW({
                                            role: "listbox",
                                            "aria-labelledby": "".concat(l.id, "-label"),
                                            id: "".concat(l.id, "-list")
                                        }, e)
                                    },
                                    getItemProps: function (e) {
                                        var t = e.item,
                                            n = e.source,
                                            r = nZ(e, n$);
                                        return nW({
                                            id: "".concat(l.id, "-item-").concat(t.__autocomplete_id),
                                            role: "option",
                                            "aria-selected": c.getState().activeItemId === t.__autocomplete_id,
                                            onMouseMove: function (e) {
                                                if (t.__autocomplete_id !== c.getState().activeItemId) {
                                                    c.dispatch("mousemove", t.__autocomplete_id);
                                                    var n = nA(c.getState());
                                                    if (null !== c.getState().activeItemId && n) {
                                                        var r = n.item,
                                                            i = n.itemInputValue,
                                                            o = n.itemUrl,
                                                            a = n.source;
                                                        a.onActive(nW({
                                                            event: e,
                                                            item: r,
                                                            itemInputValue: i,
                                                            itemUrl: o,
                                                            refresh: u,
                                                            source: a,
                                                            state: c.getState()
                                                        }, d))
                                                    }
                                                }
                                            },
                                            onMouseDown: function (e) {
                                                e.preventDefault()
                                            },
                                            onClick: function (e) {
                                                var r = n.getItemInputValue({
                                                        item: t,
                                                        state: c.getState()
                                                    }),
                                                    i = n.getItemUrl({
                                                        item: t,
                                                        state: c.getState()
                                                    });
                                                (i ? Promise.resolve() : nD(nW({
                                                    event: e,
                                                    nextState: {
                                                        isOpen: !1
                                                    },
                                                    props: l,
                                                    query: r,
                                                    refresh: u,
                                                    store: c
                                                }, d))).then(function () {
                                                    n.onSelect(nW({
                                                        event: e,
                                                        item: t,
                                                        itemInputValue: r,
                                                        itemUrl: i,
                                                        refresh: u,
                                                        source: n,
                                                        state: c.getState()
                                                    }, d))
                                                })
                                            }
                                        }, r)
                                    }
                                });

                            function S() {
                                return nD(n5({
                                    event: new Event("input"),
                                    nextState: {
                                        isOpen: O.getState().isOpen
                                    },
                                    props: j,
                                    query: O.getState().query,
                                    refresh: S,
                                    store: O
                                }, P))
                            }
                            return j.plugins.forEach(function (e) {
                                var t;
                                return null === (t = e.subscribe) || void 0 === t ? void 0 : t.call(e, n5(n5({}, P), {}, {
                                    refresh: S,
                                    onSelect: function (e) {
                                        w.push({
                                            onSelect: e
                                        })
                                    },
                                    onActive: function (e) {
                                        w.push({
                                            onActive: e
                                        })
                                    }
                                }))
                            }), ! function (e) {
                                var t, n, r = e.metadata,
                                    i = e.environment;
                                if (null === (t = i.navigator) || void 0 === t ? void 0 : null === (n = t.userAgent) || void 0 === n ? void 0 : n.includes("Algolia Crawler")) {
                                    var o = i.document.createElement("meta"),
                                        a = i.document.querySelector("head");
                                    o.name = "algolia:metadata", setTimeout(function () {
                                        o.content = JSON.stringify(r), a.appendChild(o)
                                    }, 0)
                                }
                            }({
                                metadata: (g = (f = {
                                    plugins: j.plugins,
                                    options: e
                                }).plugins, x = (b = null === (h = ((null === (p = (y = f.options).__autocomplete_metadata) || void 0 === p ? void 0 : p.userAgents) || [])[0]) || void 0 === h ? void 0 : h.segment) ? nK({}, b, Object.keys((null === (m = y.__autocomplete_metadata) || void 0 === m ? void 0 : m.options) || {})) : {}, {
                                    plugins: g.map(function (e) {
                                        return {
                                            name: e.name,
                                            options: Object.keys(e.__autocomplete_pluginOptions || [])
                                        }
                                    }),
                                    options: function (e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {};
                                            t % 2 ? nG(Object(n), !0).forEach(function (t) {
                                                nK(e, t, n[t])
                                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : nG(Object(n)).forEach(function (t) {
                                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                            })
                                        }
                                        return e
                                    }({
                                        "autocomplete-core": Object.keys(y)
                                    }, x),
                                    ua: nY.concat((null === (v = y.__autocomplete_metadata) || void 0 === v ? void 0 : v.userAgents) || [])
                                }),
                                environment: j.environment
                            }), n5(n5({
                                refresh: S
                            }, E), P)
                        })({
                            id: e,
                            placeholder: "Find something...",
                            defaultActiveItemId: 0,
                            onStateChange(e) {
                                let {
                                    state: t
                                } = e;
                                r(t)
                            },
                            shouldPanelOpen(e) {
                                let {
                                    state: t
                                } = e;
                                return "" !== t.query
                            },
                            navigator: {
                                navigate(e) {
                                    let {
                                        itemUrl: n
                                    } = e;
                                    i.setIsOpen(!0), t.push(n)
                                }
                            },
                            getSources: () => [{
                                sourceId: "documentation",
                                getItemInputValue(e) {
                                    let {
                                        item: t
                                    } = e;
                                    return t.query
                                },
                                getItemUrl(e) {
                                    let {
                                        item: t
                                    } = e, n = new URL(t.url);
                                    return `${n.pathname}${n.hash}`
                                },
                                onSelect(e) {
                                    let {
                                        itemUrl: n
                                    } = e;
                                    t.push(n)
                                },
                                getItems(e) {
                                    let {
                                        query: t
                                    } = e;
                                    return rt({
                                        searchClient: ri,
                                        queries: [{
                                            query: t,
                                            indexName: "tailwindui-protocol",
                                            params: {
                                                hitsPerPage: 5,
                                                highlightPreTag: '<mark class="underline bg-transparent text-emerald-500">',
                                                highlightPostTag: "</mark>"
                                            }
                                        }]
                                    })
                                }
                            }]
                        }));
                    return {
                        autocomplete: i,
                        autocompleteState: n
                    }
                }();
                return (0, N.useEffect)(() => {
                    if (t) return i.events.on("routeChangeStart", e), i.events.on("hashChangeStart", e), () => {
                        i.events.off("routeChangeStart", e), i.events.off("hashChangeStart", e)
                    };

                    function e() {
                        n(!1)
                    }
                }, [t, n, i]), (0, N.useEffect)(() => {
                    if (!t) return window.addEventListener("keydown", e), () => {
                        window.removeEventListener("keydown", e)
                    };

                    function e(e) {
                        "k" === e.key && (e.metaKey || e.ctrlKey) && (e.preventDefault(), n(!0))
                    }
                }, [t, n]), (0, S.jsx)(ew.Root, {
                    show: t,
                    as: N.Fragment,
                    afterLeave: () => l.setQuery(""),
                    children: (0, S.jsxs)(tE, {
                        onClose: n,
                        className: (0, eO.Z)("fixed inset-0 z-50", r),
                        children: [(0, S.jsx)(ew.Child, {
                            as: N.Fragment,
                            enter: "ease-out duration-300",
                            enterFrom: "opacity-0",
                            enterTo: "opacity-100",
                            leave: "ease-in duration-200",
                            leaveFrom: "opacity-100",
                            leaveTo: "opacity-0",
                            children: (0, S.jsx)("div", {
                                className: "fixed inset-0 bg-zinc-400/25 backdrop-blur-sm dark:bg-black/40"
                            })
                        }), (0, S.jsx)("div", {
                            className: "fixed inset-0 overflow-y-auto px-4 py-4 sm:py-20 sm:px-6 md:py-32 lg:px-8 lg:py-[15vh]",
                            children: (0, S.jsx)(ew.Child, {
                                as: N.Fragment,
                                enter: "ease-out duration-300",
                                enterFrom: "opacity-0 scale-95",
                                enterTo: "opacity-100 scale-100",
                                leave: "ease-in duration-200",
                                leaveFrom: "opacity-100 scale-100",
                                leaveTo: "opacity-0 scale-95",
                                children: (0, S.jsx)(tE.Panel, {
                                    className: "mx-auto overflow-hidden rounded-lg bg-zinc-50 shadow-xl ring-1 ring-zinc-900/7.5 dark:bg-zinc-900 dark:ring-zinc-800 sm:max-w-xl",
                                    children: (0, S.jsx)("div", {
                                        ...l.getRootProps({}),
                                        children: (0, S.jsxs)("form", {
                                            ref: o,
                                            ...l.getFormProps({
                                                inputElement: s.current
                                            }),
                                            children: [(0, S.jsx)(rc, {
                                                ref: s,
                                                autocomplete: l,
                                                autocompleteState: u,
                                                onClose: () => n(!1)
                                            }), (0, S.jsx)("div", {
                                                ref: a,
                                                className: "border-t border-zinc-200 bg-white empty:hidden dark:border-zinc-100/5 dark:bg-white/2.5",
                                                ...l.getPanelProps({}),
                                                children: u.isOpen && (0, S.jsxs)(S.Fragment, {
                                                    children: [(0, S.jsx)(ru, {
                                                        autocomplete: l,
                                                        query: u.query,
                                                        collection: u.collections[0]
                                                    }), (0, S.jsxs)("p", {
                                                        className: "flex items-center justify-end gap-2 border-t border-zinc-100 px-4 py-2 text-xs text-zinc-400 dark:border-zinc-800 dark:text-zinc-500",
                                                        children: ["Search by", " ", (0, S.jsx)(rd, {
                                                            className: "h-4 fill-[#003DFF] dark:fill-zinc-400"
                                                        })]
                                                    })]
                                                })
                                            })]
                                        })
                                    })
                                })
                            })
                        })]
                    })
                })
            }

            function rh() {
                let e = (0, N.useRef)(),
                    [t, n] = (0, N.useState)(!1);
                return {
                    buttonProps: {
                        ref: e,
                        onClick() {
                            n(!0)
                        }
                    },
                    dialogProps: {
                        open: t,
                        setOpen(t) {
                            let {
                                width: r,
                                height: i
                            } = e.current.getBoundingClientRect();
                            t && (0 === r || 0 === i) || n(t)
                        }
                    }
                }
            }

            function rp() {
                let [e, t] = (0, N.useState)(), {
                    buttonProps: n,
                    dialogProps: r
                } = rh();
                return (0, N.useEffect)(() => {
                    t(/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? "⌘" : "Ctrl ")
                }, []), (0, S.jsxs)("div", {
                    className: "hidden lg:block lg:max-w-md lg:flex-auto",
                    children: [(0, S.jsxs)("button", {
                        type: "button",
                        className: "hidden h-8 w-full items-center gap-2 rounded-full bg-white pl-2 pr-3 text-sm text-zinc-500 ring-1 ring-zinc-900/10 transition hover:ring-zinc-900/20 dark:bg-white/5 dark:text-zinc-400 dark:ring-inset dark:ring-white/10 dark:hover:ring-white/20 lg:flex focus:[&:not(:focus-visible)]:outline-none",
                        ...n,
                        children: [(0, S.jsx)(ro, {
                            className: "h-5 w-5 stroke-current"
                        }), "Find something...", (0, S.jsxs)("kbd", {
                            className: "ml-auto text-2xs text-zinc-400 dark:text-zinc-500",
                            children: [(0, S.jsx)("kbd", {
                                className: "font-sans",
                                children: e
                            }), (0, S.jsx)("kbd", {
                                className: "font-sans",
                                children: "K"
                            })]
                        })]
                    }), (0, S.jsx)(rf, {
                        className: "hidden lg:block",
                        ...r
                    })]
                })
            }

            function rm() {
                let {
                    buttonProps: e,
                    dialogProps: t
                } = rh();
                return (0, S.jsxs)("div", {
                    className: "contents lg:hidden",
                    children: [(0, S.jsx)("button", {
                        type: "button",
                        className: "flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 dark:hover:bg-white/5 lg:hidden focus:[&:not(:focus-visible)]:outline-none",
                        "aria-label": "Find something...",
                        ...e,
                        children: (0, S.jsx)(ro, {
                            className: "h-5 w-5 stroke-zinc-900 dark:stroke-white"
                        })
                    }), (0, S.jsx)(rf, {
                        className: "lg:hidden",
                        ...t
                    })]
                })
            }

            function rv(e) {
                let {
                    href: t,
                    children: n
                } = e;
                return (0, S.jsx)("li", {
                    children: (0, S.jsx)(R(), {
                        href: t,
                        className: "text-sm leading-5 text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white",
                        children: n
                    })
                })
            }
            let rg = (0, N.forwardRef)(function (e, t) {
                let {
                    className: n
                } = e, {
                    isOpen: o
                } = rj(), a = rw(), {
                    scrollY: s
                } = function ({
                    container: e,
                    target: t,
                    layoutEffect: n = !0,
                    ...o
                } = {}) {
                    let a = (0, eC.h)(t5),
                        s = n ? ek.L : N.useEffect;
                    return s(() => (function (e, t = {}) {
                        var {
                            container: n = document.documentElement
                        } = t, o = function (e, t) {
                            var n = {};
                            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
                            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                                for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) 0 > t.indexOf(r[i]) && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
                            return n
                        }(t, ["container"]);
                        let a = t0.get(n);
                        a || (a = new Set, t0.set(n, a));
                        let s = tD(),
                            l = function (e, t, n, r = {}) {
                                var i, o;
                                let a = r.axis || "y";
                                return {
                                    measure: () => (function (e, t = e, n) {
                                        if (n.x.targetOffset = 0, n.y.targetOffset = 0, t !== e) {
                                            let r = t;
                                            for (; r && r != e;) n.x.targetOffset += r.offsetLeft, n.y.targetOffset += r.offsetTop, r = r.offsetParent
                                        }
                                        n.x.targetLength = t === e ? t.scrollWidth : t.clientWidth, n.y.targetLength = t === e ? t.scrollHeight : t.clientHeight, n.x.containerLength = e.clientWidth, n.y.containerLength = e.clientHeight
                                    })(e, r.target, n),
                                    update(t) {
                                        var i;
                                        tV(e, "x", i = n, t), tV(e, "y", i, t), i.time = t, (r.offset || r.target) && function (e, t, n) {
                                            let {
                                                offset: r = tW.All
                                            } = n, {
                                                target: i = e,
                                                axis: o = "y"
                                            } = n, a = "y" === o ? "height" : "width", s = i !== e ? function (e, t) {
                                                let n = {
                                                        x: 0,
                                                        y: 0
                                                    },
                                                    r = e;
                                                for (; r && r !== t;)
                                                    if (r instanceof HTMLElement) n.x += r.offsetLeft, n.y += r.offsetTop, r = r.offsetParent;
                                                    else if (r instanceof SVGGraphicsElement && "getBBox" in r) {
                                                    let {
                                                        top: i,
                                                        left: o
                                                    } = r.getBBox();
                                                    for (n.x += o, n.y += i; r && "svg" !== r.tagName;) r = r.parentNode
                                                }
                                                return n
                                            }(i, e) : tX, l = i === e ? {
                                                width: e.scrollWidth,
                                                height: e.scrollHeight
                                            } : {
                                                width: i.clientWidth,
                                                height: i.clientHeight
                                            }, u = {
                                                width: e.clientWidth,
                                                height: e.clientHeight
                                            };
                                            t[o].offset.length = 0;
                                            let c = !t[o].interpolate,
                                                d = r.length;
                                            for (let f = 0; f < d; f++) {
                                                let h = function (e, t, n, r) {
                                                    let i = Array.isArray(e) ? e : tK,
                                                        o = 0;
                                                    return tU(e) ? i = [e, e] : tZ(e) && (i = (e = e.trim()).includes(" ") ? e.split(" ") : [e, tY[e] ? e : "0"]), tG(i[0], n, r) - tG(i[1], t)
                                                }(r[f], u[a], l[a], s[o]);
                                                c || h === t[o].interpolatorOffsets[f] || (c = !0), t[o].offset[f] = h
                                            }
                                            c && (t[o].interpolate = function (e, t = tq(e.length), n = tF) {
                                                let r = e.length,
                                                    i = r - t.length;
                                                return i > 0 && tB(t, i), i => {
                                                    var o;
                                                    let a = 0;
                                                    for (; a < r - 2 && !(i < t[a + 1]); a++);
                                                    let s = tH(0, 1, tL(t[a], t[a + 1], i)),
                                                        l = (o = a, t_(n) ? n[t$(0, n.length, o)] : n);
                                                    return s = l(s), tz(e[a], e[a + 1], s)
                                                }
                                            }(tq(d), t[o].offset), t[o].interpolatorOffsets = [...t[o].offset]), t[o].progress = t[o].interpolate(t[o].current)
                                        }(e, n, r)
                                    },
                                    notify: (0, tR.m)(t) ? () => t(n) : (i = t, o = n[a], i.pause(), i.forEachNative((e, {
                                        easing: t
                                    }) => {
                                        var n, r;
                                        if (e.updateDuration) t || (e.easing = tF), e.updateDuration(1);
                                        else {
                                            let i = {
                                                duration: 1e3
                                            };
                                            t || (i.easing = "linear"), null === (r = null === (n = e.effect) || void 0 === n ? void 0 : n.updateTiming) || void 0 === r || r.call(n, i)
                                        }
                                    }), () => {
                                        i.currentTime = o.progress
                                    })
                                }
                            }(n, e, s, o);
                        if (a.add(l), !tJ.has(n)) {
                            let u = () => {
                                let e = performance.now();
                                for (let t of a) t.measure();
                                for (let n of a) n.update(e);
                                for (let r of a) r.notify()
                            };
                            tJ.set(n, u);
                            let c = t1(n);
                            window.addEventListener("resize", u, {
                                passive: !0
                            }), n !== document.documentElement && tQ.set(n, (0, tR.m)(n) ? (tI.add(n), i || (i = () => {
                                let e = {
                                        width: window.innerWidth,
                                        height: window.innerHeight
                                    },
                                    t = {
                                        target: window,
                                        size: e,
                                        contentSize: e
                                    };
                                tI.forEach(e => e(t))
                            }, window.addEventListener("resize", i)), () => {
                                tI.delete(n), !tI.size && i && (i = void 0)
                            }) : function (e, t) {
                                r || "undefined" == typeof ResizeObserver || (r = new ResizeObserver(tC));
                                let n = (0, tk.I)(e);
                                return n.forEach(e => {
                                    let n = tT.get(e);
                                    n || (n = new Set, tT.set(e, n)), n.add(t), null == r || r.observe(e)
                                }), () => {
                                    n.forEach(e => {
                                        let n = tT.get(e);
                                        null == n || n.delete(t), (null == n ? void 0 : n.size) || null == r || r.unobserve(e)
                                    })
                                }
                            }(n, u)), c.addEventListener("scroll", u, {
                                passive: !0
                            })
                        }
                        let d = tJ.get(n),
                            f = requestAnimationFrame(d);
                        return () => {
                            var t;
                            "function" != typeof e && e.stop(), cancelAnimationFrame(f);
                            let r = t0.get(n);
                            if (!r || (r.delete(l), r.size)) return;
                            let i = tJ.get(n);
                            tJ.delete(n), i && (t1(n).removeEventListener("scroll", i), null === (t = tQ.get(n)) || void 0 === t || t(), window.removeEventListener("resize", i))
                        }
                    })(({
                        x: e,
                        y: t
                    }) => {
                        a.scrollX.set(e.current), a.scrollXProgress.set(e.progress), a.scrollY.set(t.current), a.scrollYProgress.set(t.progress)
                    }, {
                        ...o,
                        container: (null == e ? void 0 : e.current) || void 0,
                        target: (null == t ? void 0 : t.current) || void 0
                    }), []), a
                }(), l = t9(s, [0, 72], [.5, .9]), u = t9(s, [0, 72], [.2, .8]);
                return (0, S.jsxs)(L.E.div, {
                    ref: t,
                    className: (0, eO.Z)(n, "fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between gap-12 px-4 transition sm:px-6 lg:left-72 lg:z-30 lg:px-8 xl:left-80", !a && "backdrop-blur-sm dark:backdrop-blur lg:left-72 xl:left-80", a ? "bg-white dark:bg-zinc-900" : "bg-white/[var(--bg-opacity-light)] dark:bg-zinc-900/[var(--bg-opacity-dark)]"),
                    style: {
                        "--bg-opacity-light": l,
                        "--bg-opacity-dark": u
                    },
                    children: [(0, S.jsx)("div", {
                        className: (0, eO.Z)("absolute inset-x-0 top-full h-px transition", (a || !o) && "bg-zinc-900/7.5 dark:bg-white/7.5")
                    }), (0, S.jsx)(rp, {}), (0, S.jsxs)("div", {
                        className: "flex items-center gap-5 lg:hidden",
                        children: [(0, S.jsx)(rO, {}), (0, S.jsx)(R(), {
                            href: "/",
                            "aria-label": "Home",
                            children: (0, S.jsx)(ne, {
                                className: "h-6"
                            })
                        })]
                    }), (0, S.jsxs)("div", {
                        className: "flex items-center gap-5",
                        children: [(0, S.jsx)("nav", {
                            className: "hidden md:block",
                            children: (0, S.jsxs)("ul", {
                                role: "list",
                                className: "flex items-center gap-8",
                                children: [(0, S.jsx)(rv, {
                                    href: "/",
                                    children: "API"
                                }), (0, S.jsx)(rv, {
                                    href: "#",
                                    children: "Documentation"
                                }), (0, S.jsx)(rv, {
                                    href: "#",
                                    children: "Support"
                                })]
                            })
                        }), (0, S.jsx)("div", {
                            className: "hidden md:block md:h-5 md:w-px md:bg-zinc-900/10 md:dark:bg-white/15"
                        }), (0, S.jsxs)("div", {
                            className: "flex gap-4",
                            children: [(0, S.jsx)(rm, {}), (0, S.jsx)(nr, {})]
                        }), (0, S.jsx)("div", {
                            className: "hidden min-[416px]:contents",
                            children: (0, S.jsx)(ej.z, {
                                href: "#",
                                children: "Sign in"
                            })
                        })]
                    })]
                })
            });

            function ry(e) {
                return (0, S.jsx)("svg", {
                    viewBox: "0 0 10 9",
                    fill: "none",
                    strokeLinecap: "round",
                    "aria-hidden": "true",
                    ...e,
                    children: (0, S.jsx)("path", {
                        d: "M.5 1h9M.5 8h9M.5 4.5h9"
                    })
                })
            }

            function rb(e) {
                return (0, S.jsx)("svg", {
                    viewBox: "0 0 10 9",
                    fill: "none",
                    strokeLinecap: "round",
                    "aria-hidden": "true",
                    ...e,
                    children: (0, S.jsx)("path", {
                        d: "m1.5 1 7 7M8.5 1l-7 7"
                    })
                })
            }
            let rx = (0, N.createContext)(!1);

            function rw() {
                return (0, N.useContext)(rx)
            }
            let rj = (0, tS.Ue)(e => ({
                isOpen: !1,
                open: () => e({
                    isOpen: !0
                }),
                close: () => e({
                    isOpen: !1
                }),
                toggle: () => e(e => ({
                    isOpen: !e.isOpen
                }))
            }));

            function rO() {
                let e = rw(),
                    {
                        isOpen: t,
                        toggle: n,
                        close: r
                    } = rj();
                return (0, S.jsxs)(rx.Provider, {
                    value: !0,
                    children: [(0, S.jsx)("button", {
                        type: "button",
                        className: "flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 dark:hover:bg-white/5",
                        "aria-label": "Toggle navigation",
                        onClick: n,
                        children: (0, S.jsx)(t ? rb : ry, {
                            className: "w-2.5 stroke-zinc-900 dark:stroke-white"
                        })
                    }), !e && (0, S.jsx)(ew.Root, {
                        show: t,
                        as: N.Fragment,
                        children: (0, S.jsxs)(tE, {
                            onClose: r,
                            className: "fixed inset-0 z-50 lg:hidden",
                            children: [(0, S.jsx)(ew.Child, {
                                as: N.Fragment,
                                enter: "duration-300 ease-out",
                                enterFrom: "opacity-0",
                                enterTo: "opacity-100",
                                leave: "duration-200 ease-in",
                                leaveFrom: "opacity-100",
                                leaveTo: "opacity-0",
                                children: (0, S.jsx)("div", {
                                    className: "fixed inset-0 top-14 bg-zinc-400/20 backdrop-blur-sm dark:bg-black/40"
                                })
                            }), (0, S.jsxs)(tE.Panel, {
                                children: [(0, S.jsx)(ew.Child, {
                                    as: N.Fragment,
                                    enter: "duration-300 ease-out",
                                    enterFrom: "opacity-0",
                                    enterTo: "opacity-100",
                                    leave: "duration-200 ease-in",
                                    leaveFrom: "opacity-100",
                                    leaveTo: "opacity-0",
                                    children: (0, S.jsx)(rg, {})
                                }), (0, S.jsx)(ew.Child, {
                                    as: N.Fragment,
                                    enter: "duration-500 ease-in-out",
                                    enterFrom: "-translate-x-full",
                                    enterTo: "translate-x-0",
                                    leave: "duration-500 ease-in-out",
                                    leaveFrom: "translate-x-0",
                                    leaveTo: "-translate-x-full",
                                    children: (0, S.jsx)(L.E.div, {
                                        layoutScroll: !0,
                                        className: "fixed left-0 top-14 bottom-0 w-full overflow-y-auto bg-white px-4 pt-6 pb-4 shadow-lg shadow-zinc-900/10 ring-1 ring-zinc-900/7.5 dark:bg-zinc-900 dark:ring-zinc-800 min-[416px]:max-w-sm sm:px-6 sm:pb-10",
                                        children: (0, S.jsx)(rN, {})
                                    })
                                })]
                            })]
                        })
                    })]
                })
            }
            var rP = n(9115),
                rE = n(5933),
                rS = n(1448);

            function rk(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    n = (0, N.useRef)(e).current;
                return t ? n : e
            }

            function rT(e) {
                let {
                    href: t,
                    children: n
                } = e;
                return (0, S.jsx)("li", {
                    className: "md:hidden",
                    children: (0, S.jsx)(R(), {
                        href: t,
                        className: "block py-1 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white",
                        children: n
                    })
                })
            }

            function rA(e) {
                let {
                    href: t,
                    tag: n,
                    active: r,
                    isAnchorLink: i = !1,
                    children: o
                } = e;
                return (0, S.jsxs)(R(), {
                    href: t,
                    "aria-current": r ? "page" : void 0,
                    className: (0, eO.Z)("flex justify-between gap-2 py-1 pr-3 text-sm transition", i ? "pl-7" : "pl-4", r ? "text-zinc-900 dark:text-white" : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"),
                    children: [(0, S.jsx)("span", {
                        className: "truncate",
                        children: o
                    }), n && (0, S.jsx)(rE.V, {
                        variant: "small",
                        color: "zinc",
                        children: n
                    })]
                })
            }

            function rC(e) {
                let {
                    group: t,
                    pathname: n
                } = e, [r, i] = rk([(0, rP.S)(e => e.sections), (0, rP.S)(e => e.visibleSections)], rw()), o = (0, eP.hO)(), a = Math.max(0, [{
                    id: "_top"
                }, ...r].findIndex(e => e.id === i[0])), s = (0, rS.c)(2), l = o ? Math.max(1, i.length) * s : s, u = t.links.findIndex(e => e.href === n) * s + a * s;
                return (0, S.jsx)(L.E.div, {
                    layout: !0,
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1,
                        transition: {
                            delay: .2
                        }
                    },
                    exit: {
                        opacity: 0
                    },
                    className: "absolute inset-x-0 top-0 bg-zinc-800/2.5 will-change-transform dark:bg-white/2.5",
                    style: {
                        borderRadius: 8,
                        height: l,
                        top: u
                    }
                })
            }

            function rI(e) {
                let {
                    group: t,
                    pathname: n
                } = e, r = (0, rS.c)(2), i = (0, rS.c)(.25), o = t.links.findIndex(e => e.href === n);
                return (0, S.jsx)(L.E.div, {
                    layout: !0,
                    className: "absolute left-2 h-6 w-px bg-emerald-500",
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1,
                        transition: {
                            delay: .2
                        }
                    },
                    exit: {
                        opacity: 0
                    },
                    style: {
                        top: i + o * r
                    }
                })
            }

            function rR(e) {
                let {
                    group: t,
                    className: n
                } = e, r = rw(), [i, o] = rk([(0, A.useRouter)(), (0, rP.S)(e => e.sections)], r), a = -1 !== t.links.findIndex(e => e.href === i.pathname);
                return (0, S.jsxs)("li", {
                    className: (0, eO.Z)("relative mt-6", n),
                    children: [(0, S.jsx)(L.E.h2, {
                        layout: "position",
                        className: "text-xs font-semibold text-zinc-900 dark:text-white",
                        children: t.title
                    }), (0, S.jsxs)("div", {
                        className: "relative mt-3 pl-2",
                        children: [(0, S.jsx)(ez, {
                            initial: !r,
                            children: a && (0, S.jsx)(rC, {
                                group: t,
                                pathname: i.pathname
                            })
                        }), (0, S.jsx)(L.E.div, {
                            layout: !0,
                            className: "absolute inset-y-0 left-2 w-px bg-zinc-900/10 dark:bg-white/5"
                        }), (0, S.jsx)(ez, {
                            initial: !1,
                            children: a && (0, S.jsx)(rI, {
                                group: t,
                                pathname: i.pathname
                            })
                        }), (0, S.jsx)("ul", {
                            role: "list",
                            className: "border-l border-transparent",
                            children: t.links.map(e => (0, S.jsxs)(L.E.li, {
                                layout: "position",
                                className: "relative",
                                children: [(0, S.jsx)(rA, {
                                    href: e.href,
                                    active: e.href === i.pathname,
                                    children: e.title
                                }), (0, S.jsx)(ez, {
                                    mode: "popLayout",
                                    initial: !1,
                                    children: e.href === i.pathname && o.length > 0 && (0, S.jsx)(L.E.ul, {
                                        role: "list",
                                        initial: {
                                            opacity: 0
                                        },
                                        animate: {
                                            opacity: 1,
                                            transition: {
                                                delay: .1
                                            }
                                        },
                                        exit: {
                                            opacity: 0,
                                            transition: {
                                                duration: .15
                                            }
                                        },
                                        children: o.map(t => (0, S.jsx)("li", {
                                            children: (0, S.jsx)(rA, {
                                                href: `${e.href}#${t.id}`,
                                                tag: t.tag,
                                                isAnchorLink: !0,
                                                children: t.title
                                            })
                                        }, t.id))
                                    })
                                })]
                            }, e.href))
                        })]
                    })]
                })
            }
            let rL = [{
                title: "Guides",
                links: [{
                    title: "Introduction",
                    href: "/"
                }, {
                    title: "Quickstart",
                    href: "/quickstart"
                }, {
                    title: "SDKs",
                    href: "/sdks"
                }, {
                    title: "Authentication",
                    href: "/authentication"
                }, {
                    title: "Pagination",
                    href: "/pagination"
                }, {
                    title: "Errors",
                    href: "/errors"
                }, {
                    title: "Webhooks",
                    href: "/webhooks"
                }]
            }, {
                title: "Resources",
                links: [{
                    title: "Contacts",
                    href: "/contacts"
                }, {
                    title: "Conversations",
                    href: "/conversations"
                }, {
                    title: "Messages",
                    href: "/messages"
                }, {
                    title: "Groups",
                    href: "/groups"
                }, {
                    title: "Attachments",
                    href: "/attachments"
                }]
            }];

            function rN(e) {
                return (0, S.jsx)("nav", {
                    ...e,
                    children: (0, S.jsxs)("ul", {
                        role: "list",
                        children: [(0, S.jsx)(rT, {
                            href: "/",
                            children: "API"
                        }), (0, S.jsx)(rT, {
                            href: "#",
                            children: "Documentation"
                        }), (0, S.jsx)(rT, {
                            href: "#",
                            children: "Support"
                        }), rL.map((e, t) => (0, S.jsx)(rR, {
                            group: e,
                            className: 0 === t && "md:mt-0"
                        }, e.title)), (0, S.jsx)("li", {
                            className: "sticky bottom-0 z-10 mt-6 min-[416px]:hidden",
                            children: (0, S.jsx)(ej.z, {
                                href: "#",
                                variant: "filled",
                                className: "w-full",
                                children: "Sign in"
                            })
                        })]
                    })
                })
            }

            function rD(e) {
                return (0, S.jsxs)("svg", {
                    viewBox: "0 0 20 20",
                    "aria-hidden": "true",
                    ...e,
                    children: [(0, S.jsx)("circle", {
                        cx: "10",
                        cy: "10",
                        r: "10",
                        strokeWidth: "0"
                    }), (0, S.jsx)("path", {
                        fill: "none",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "1.5",
                        d: "m6.75 10.813 2.438 2.437c1.218-4.469 4.062-6.5 4.062-6.5"
                    })]
                })
            }

            function rM(e) {
                return (0, S.jsx)("button", {
                    type: "submit",
                    className: "px-3 text-sm font-medium text-zinc-600 transition hover:bg-zinc-900/2.5 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/5 dark:hover:text-white",
                    ...e
                })
            }
            let rV = (0, N.forwardRef)(function (e, t) {
                    let {
                        onSubmit: n
                    } = e;
                    return (0, S.jsxs)("form", {
                        ref: t,
                        onSubmit: n,
                        className: "absolute inset-0 flex items-center justify-center gap-6 md:justify-start",
                        children: [(0, S.jsx)("p", {
                            className: "text-sm text-zinc-600 dark:text-zinc-400",
                            children: "Was this page helpful?"
                        }), (0, S.jsxs)("div", {
                            className: "group grid h-8 grid-cols-[1fr,1px,1fr] overflow-hidden rounded-full border border-zinc-900/10 dark:border-white/10",
                            children: [(0, S.jsx)(rM, {
                                "data-response": "yes",
                                children: "Yes"
                            }), (0, S.jsx)("div", {
                                className: "bg-zinc-900/10 dark:bg-white/10"
                            }), (0, S.jsx)(rM, {
                                "data-response": "no",
                                children: "No"
                            })]
                        })]
                    })
                }),
                rF = (0, N.forwardRef)(function (e, t) {
                    return (0, S.jsx)("div", {
                        ref: t,
                        className: "absolute inset-0 flex justify-center md:justify-start",
                        children: (0, S.jsxs)("div", {
                            className: "flex items-center gap-3 rounded-full bg-emerald-50/50 py-1 pr-3 pl-1.5 text-sm text-emerald-900 ring-1 ring-inset ring-emerald-500/20 dark:bg-emerald-500/5 dark:text-emerald-200 dark:ring-emerald-500/30",
                            children: [(0, S.jsx)(rD, {
                                className: "h-5 w-5 flex-none fill-emerald-500 stroke-white dark:fill-emerald-200/20 dark:stroke-emerald-200"
                            }), "Thanks for your feedback!"]
                        })
                    })
                });

            function rz() {
                let [e, t] = (0, N.useState)(!1);
                return (0, S.jsxs)("div", {
                    className: "relative h-8",
                    children: [(0, S.jsx)(ew, {
                        show: !e,
                        as: N.Fragment,
                        leaveFrom: "opacity-100",
                        leaveTo: "opacity-0",
                        leave: "pointer-events-none duration-300",
                        children: (0, S.jsx)(rV, {
                            onSubmit: function (e) {
                                e.preventDefault(), t(!0)
                            }
                        })
                    }), (0, S.jsx)(ew, {
                        show: e,
                        as: N.Fragment,
                        enterFrom: "opacity-0",
                        enterTo: "opacity-100",
                        enter: "delay-150 duration-300",
                        children: (0, S.jsx)(rF, {})
                    })]
                })
            }

            function rB(e) {
                let {
                    label: t,
                    page: n,
                    previous: r = !1
                } = e;
                return (0, S.jsxs)(S.Fragment, {
                    children: [(0, S.jsx)(ej.z, {
                        href: n.href,
                        "aria-label": `${t}: ${n.title}`,
                        variant: "secondary",
                        arrow: r ? "left" : "right",
                        children: t
                    }), (0, S.jsx)(R(), {
                        href: n.href,
                        tabIndex: -1,
                        "aria-hidden": "true",
                        className: "text-base font-semibold text-zinc-900 transition hover:text-zinc-600 dark:text-white dark:hover:text-zinc-300",
                        children: n.title
                    })]
                })
            }

            function rq() {
                let e = (0, A.useRouter)(),
                    t = rL.flatMap(e => e.links),
                    n = t.findIndex(t => t.href === e.pathname);
                if (-1 === n) return null;
                let r = t[n - 1],
                    i = t[n + 1];
                return r || i ? (0, S.jsxs)("div", {
                    className: "flex",
                    children: [r && (0, S.jsx)("div", {
                        className: "flex flex-col items-start gap-3",
                        children: (0, S.jsx)(rB, {
                            label: "Previous",
                            page: r,
                            previous: !0
                        })
                    }), i && (0, S.jsx)("div", {
                        className: "ml-auto flex flex-col items-end gap-3",
                        children: (0, S.jsx)(rB, {
                            label: "Next",
                            page: i
                        })
                    })]
                }) : null
            }

            function rU(e) {
                return (0, S.jsx)("svg", {
                    viewBox: "0 0 20 20",
                    "aria-hidden": "true",
                    ...e,
                    children: (0, S.jsx)("path", {
                        d: "M16.712 6.652c.01.146.01.29.01.436 0 4.449-3.267 9.579-9.242 9.579v-.003a8.963 8.963 0 0 1-4.98-1.509 6.379 6.379 0 0 0 4.807-1.396c-1.39-.027-2.608-.966-3.035-2.337.487.097.99.077 1.467-.059-1.514-.316-2.606-1.696-2.606-3.3v-.041c.45.26.956.404 1.475.42C3.18 7.454 2.74 5.486 3.602 3.947c1.65 2.104 4.083 3.382 6.695 3.517a3.446 3.446 0 0 1 .94-3.217 3.172 3.172 0 0 1 4.596.148 6.38 6.38 0 0 0 2.063-.817 3.357 3.357 0 0 1-1.428 1.861 6.283 6.283 0 0 0 1.865-.53 6.735 6.735 0 0 1-1.62 1.744Z"
                    })
                })
            }

            function r_(e) {
                return (0, S.jsx)("svg", {
                    viewBox: "0 0 20 20",
                    "aria-hidden": "true",
                    ...e,
                    children: (0, S.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M10 1.667c-4.605 0-8.334 3.823-8.334 8.544 0 3.78 2.385 6.974 5.698 8.106.417.075.573-.182.573-.406 0-.203-.011-.875-.011-1.592-2.093.397-2.635-.522-2.802-1.002-.094-.246-.5-1.005-.854-1.207-.291-.16-.708-.556-.01-.567.656-.01 1.124.62 1.281.876.75 1.292 1.948.93 2.427.705.073-.555.291-.93.531-1.143-1.854-.213-3.791-.95-3.791-4.218 0-.929.322-1.698.854-2.296-.083-.214-.375-1.09.083-2.265 0 0 .698-.224 2.292.876a7.576 7.576 0 0 1 2.083-.288c.709 0 1.417.096 2.084.288 1.593-1.11 2.291-.875 2.291-.875.459 1.174.167 2.05.084 2.263.53.599.854 1.357.854 2.297 0 3.278-1.948 4.005-3.802 4.219.302.266.563.78.563 1.58 0 1.143-.011 2.061-.011 2.35 0 .224.156.491.573.405a8.365 8.365 0 0 0 4.11-3.116 8.707 8.707 0 0 0 1.567-4.99c0-4.721-3.73-8.545-8.334-8.545Z"
                    })
                })
            }

            function r$(e) {
                return (0, S.jsx)("svg", {
                    viewBox: "0 0 20 20",
                    "aria-hidden": "true",
                    ...e,
                    children: (0, S.jsx)("path", {
                        d: "M16.238 4.515a14.842 14.842 0 0 0-3.664-1.136.055.055 0 0 0-.059.027 10.35 10.35 0 0 0-.456.938 13.702 13.702 0 0 0-4.115 0 9.479 9.479 0 0 0-.464-.938.058.058 0 0 0-.058-.027c-1.266.218-2.497.6-3.664 1.136a.052.052 0 0 0-.024.02C1.4 8.023.76 11.424 1.074 14.782a.062.062 0 0 0 .024.042 14.923 14.923 0 0 0 4.494 2.272.058.058 0 0 0 .064-.02c.346-.473.654-.972.92-1.496a.057.057 0 0 0-.032-.08 9.83 9.83 0 0 1-1.404-.669.058.058 0 0 1-.029-.046.058.058 0 0 1 .023-.05c.094-.07.189-.144.279-.218a.056.056 0 0 1 .058-.008c2.946 1.345 6.135 1.345 9.046 0a.056.056 0 0 1 .059.007c.09.074.184.149.28.22a.058.058 0 0 1 .023.049.059.059 0 0 1-.028.046 9.224 9.224 0 0 1-1.405.669.058.058 0 0 0-.033.033.056.056 0 0 0 .002.047c.27.523.58 1.022.92 1.495a.056.056 0 0 0 .062.021 14.878 14.878 0 0 0 4.502-2.272.055.055 0 0 0 .016-.018.056.056 0 0 0 .008-.023c.375-3.883-.63-7.256-2.662-10.246a.046.046 0 0 0-.023-.021Zm-9.223 8.221c-.887 0-1.618-.814-1.618-1.814s.717-1.814 1.618-1.814c.908 0 1.632.821 1.618 1.814 0 1-.717 1.814-1.618 1.814Zm5.981 0c-.887 0-1.618-.814-1.618-1.814s.717-1.814 1.618-1.814c.908 0 1.632.821 1.618 1.814 0 1-.71 1.814-1.618 1.814Z"
                    })
                })
            }

            function rH(e) {
                let {
                    href: t,
                    icon: n,
                    children: r
                } = e;
                return (0, S.jsxs)(R(), {
                    href: t,
                    className: "group",
                    children: [(0, S.jsx)("span", {
                        className: "sr-only",
                        children: r
                    }), (0, S.jsx)(n, {
                        className: "h-5 w-5 fill-zinc-700 transition group-hover:fill-zinc-900 dark:group-hover:fill-zinc-500"
                    })]
                })
            }

            function rW() {
                return (0, S.jsxs)("div", {
                    className: "flex flex-col items-center justify-between gap-5 border-t border-zinc-900/5 pt-8 dark:border-white/5 sm:flex-row",
                    children: [(0, S.jsxs)("p", {
                        className: "text-xs text-zinc-600 dark:text-zinc-400",
                        children: ["\xa9 Copyright ", new Date().getFullYear(), ". All rights reserved."]
                    }), (0, S.jsxs)("div", {
                        className: "flex gap-4",
                        children: [(0, S.jsx)(rH, {
                            href: "#",
                            icon: rU,
                            children: "Follow us on Twitter"
                        }), (0, S.jsx)(rH, {
                            href: "#",
                            icon: r_,
                            children: "Follow us on GitHub"
                        }), (0, S.jsx)(rH, {
                            href: "#",
                            icon: r$,
                            children: "Join our Discord server"
                        })]
                    })]
                })
            }

            function rZ() {
                let e = (0, A.useRouter)();
                return (0, S.jsxs)("footer", {
                    className: "mx-auto max-w-2xl space-y-10 pb-16 lg:max-w-5xl",
                    children: [(0, S.jsx)(rz, {}, e.pathname), (0, S.jsx)(rq, {}), (0, S.jsx)(rW, {})]
                })
            }

            function rY(e) {
                let {
                    as: t = "div",
                    className: n,
                    ...r
                } = e;
                return (0, S.jsx)(t, {
                    className: (0, eO.Z)(n, "prose dark:prose-invert"),
                    ...r
                })
            }

            function rG(e) {
                let {
                    children: t,
                    sections: n = []
                } = e;
                return (0, S.jsx)(rP.s, {
                    sections: n,
                    children: (0, S.jsxs)("div", {
                        className: "lg:ml-72 xl:ml-80",
                        children: [(0, S.jsx)(L.E.header, {
                            layoutScroll: !0,
                            className: "contents lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex",
                            children: (0, S.jsxs)("div", {
                                className: "contents lg:pointer-events-auto lg:block lg:w-72 lg:overflow-y-auto lg:border-r lg:border-zinc-900/10 lg:px-6 lg:pt-4 lg:pb-8 lg:dark:border-white/10 xl:w-80",
                                children: [(0, S.jsx)("div", {
                                    className: "hidden lg:flex",
                                    children: (0, S.jsx)(R(), {
                                        href: "/",
                                        "aria-label": "Home",
                                        children: (0, S.jsx)(ne, {
                                            className: "h-6"
                                        })
                                    })
                                }), (0, S.jsx)(rg, {}), (0, S.jsx)(rN, {
                                    className: "hidden lg:mt-10 lg:block"
                                })]
                            })
                        }), (0, S.jsxs)("div", {
                            className: "relative px-4 pt-14 sm:px-6 lg:px-8",
                            children: [(0, S.jsx)("main", {
                                className: "py-16",
                                children: (0, S.jsx)(rY, {
                                    as: "article",
                                    children: t
                                })
                            }), (0, S.jsx)(rZ, {})]
                        })]
                    })
                })
            }
            var rK = n(3585);

            function rX(e) {
                var t;
                if (e.type) return e.type;
                let n = null != (t = e.as) ? t : "button";
                if ("string" == typeof n && "button" === n.toLowerCase()) return "button"
            }

            function rJ({
                onFocus: e
            }) {
                let [t, n] = (0, N.useState)(!0);
                return t ? N.createElement(eH, {
                    as: "button",
                    type: "button",
                    features: e$.Focusable,
                    onFocus(t) {
                        t.preventDefault();
                        let r, i = 50;
                        r = requestAnimationFrame(function t() {
                            if (i-- <= 0) {
                                r && cancelAnimationFrame(r);
                                return
                            }
                            if (e()) {
                                n(!1), cancelAnimationFrame(r);
                                return
                            }
                            r = requestAnimationFrame(t)
                        })
                    }
                }) : null
            }
            var rQ = ((O = rQ || {})[O.SetSelectedIndex = 0] = "SetSelectedIndex", O[O.RegisterTab = 1] = "RegisterTab", O[O.UnregisterTab = 2] = "UnregisterTab", O[O.RegisterPanel = 3] = "RegisterPanel", O[O.UnregisterPanel = 4] = "UnregisterPanel", O);
            let r0 = {
                    0(e, t) {
                        let n = e.tabs.filter(e => {
                            var t;
                            return !(null != (t = e.current) && t.hasAttribute("disabled"))
                        });
                        if (t.index < 0) return {
                            ...e,
                            selectedIndex: e.tabs.indexOf(n[0])
                        };
                        if (t.index > e.tabs.length) return {
                            ...e,
                            selectedIndex: e.tabs.indexOf(n[n.length - 1])
                        };
                        let r = e.tabs.slice(0, t.index),
                            i = [...e.tabs.slice(t.index), ...r].find(e => n.includes(e));
                        return i ? {
                            ...e,
                            selectedIndex: e.tabs.indexOf(i)
                        } : e
                    },
                    1(e, t) {
                        var n;
                        if (e.tabs.includes(t.tab)) return e;
                        let r = e.tabs[e.selectedIndex],
                            i = eQ([...e.tabs, t.tab], e => e.current),
                            o = null != (n = i.indexOf(r)) ? n : e.selectedIndex;
                        return -1 === o && (o = e.selectedIndex), {
                            ...e,
                            tabs: i,
                            selectedIndex: o
                        }
                    },
                    2: (e, t) => ({
                        ...e,
                        tabs: e.tabs.filter(e => e !== t.tab)
                    }),
                    3: (e, t) => e.panels.includes(t.panel) ? e : {
                        ...e,
                        panels: eQ([...e.panels, t.panel], e => e.current)
                    },
                    4: (e, t) => ({
                        ...e,
                        panels: e.panels.filter(e => e !== t.panel)
                    })
                },
                r1 = (0, N.createContext)(null);

            function r2(e) {
                let t = (0, N.useContext)(r1);
                if (null === t) {
                    let n = Error(`<${e} /> is missing a parent <Tab.Group /> component.`);
                    throw Error.captureStackTrace && Error.captureStackTrace(n, r2), n
                }
                return t
            }
            r1.displayName = "TabsSSRContext";
            let r5 = (0, N.createContext)(null);

            function r4(e) {
                let t = (0, N.useContext)(r5);
                if (null === t) {
                    let n = Error(`<${e} /> is missing a parent <Tab.Group /> component.`);
                    throw Error.captureStackTrace && Error.captureStackTrace(n, r4), n
                }
                return t
            }
            r5.displayName = "TabsDataContext";
            let r3 = (0, N.createContext)(null);

            function r6(e) {
                let t = (0, N.useContext)(r3);
                if (null === t) {
                    let n = Error(`<${e} /> is missing a parent <Tab.Group /> component.`);
                    throw Error.captureStackTrace && Error.captureStackTrace(n, r6), n
                }
                return t
            }

            function r8(e, t) {
                return D(t.type, r0, e, t)
            }
            r3.displayName = "TabsActionsContext";
            let r9 = N.Fragment,
                r7 = q(function (e, t) {
                    let {
                        defaultIndex: n = 0,
                        vertical: r = !1,
                        manual: i = !1,
                        onChange: o,
                        selectedIndex: a = null,
                        ...s
                    } = e, l = r ? "vertical" : "horizontal", u = i ? "manual" : "auto", c = null !== a, d = en(t), [f, h] = (0, N.useReducer)(r8, {
                        selectedIndex: null != a ? a : n,
                        tabs: [],
                        panels: []
                    }), p = (0, N.useMemo)(() => ({
                        selectedIndex: f.selectedIndex
                    }), [f.selectedIndex]), m = X(o || (() => {})), v = X(f.tabs), g = (0, N.useMemo)(() => ({
                        orientation: l,
                        activation: u,
                        ...f
                    }), [l, u, f]), y = ee(e => (h({
                        type: 1,
                        tab: e
                    }), () => h({
                        type: 2,
                        tab: e
                    }))), b = ee(e => (h({
                        type: 3,
                        panel: e
                    }), () => h({
                        type: 4,
                        panel: e
                    }))), x = ee(e => {
                        w.current !== e && m.current(e), c || h({
                            type: 0,
                            index: e
                        })
                    }), w = X(c ? e.selectedIndex : f.selectedIndex), j = (0, N.useMemo)(() => ({
                        registerTab: y,
                        registerPanel: b,
                        change: x
                    }), []);
                    G(() => {
                        h({
                            type: 0,
                            index: null != a ? a : n
                        })
                    }, [a]);
                    let O = (0, N.useRef)({
                        tabs: [],
                        panels: []
                    });
                    return N.createElement(r1.Provider, {
                        value: O
                    }, N.createElement(r3.Provider, {
                        value: j
                    }, N.createElement(r5.Provider, {
                        value: g
                    }, g.tabs.length <= 0 && N.createElement(rJ, {
                        onFocus() {
                            var e, t;
                            for (let n of v.current)
                                if ((null == (e = n.current) ? void 0 : e.tabIndex) === 0) return null == (t = n.current) || t.focus(), !0;
                            return !1
                        }
                    }), F({
                        ourProps: {
                            ref: d
                        },
                        theirProps: s,
                        slot: p,
                        defaultTag: r9,
                        name: "Tabs"
                    }))))
                }),
                ie = q(function (e, t) {
                    let {
                        orientation: n,
                        selectedIndex: r
                    } = r4("Tab.List");
                    return F({
                        ourProps: {
                            ref: en(t),
                            role: "tablist",
                            "aria-orientation": n
                        },
                        theirProps: e,
                        slot: {
                            selectedIndex: r
                        },
                        defaultTag: "div",
                        name: "Tabs.List"
                    })
                }),
                it = q(function (e, t) {
                    var n, r;
                    let i = e_(),
                        {
                            id: o = `headlessui-tabs-tab-${i}`,
                            ...a
                        } = e,
                        {
                            orientation: s,
                            activation: l,
                            selectedIndex: u,
                            tabs: c,
                            panels: d
                        } = r4("Tab"),
                        f = r6("Tab"),
                        h = r4("Tab"),
                        p = r2("Tab"),
                        m = (0, N.useRef)(null),
                        v = en(m, t);
                    G(() => f.registerTab(m), [f, m]);
                    let g = p.current.tabs.indexOf(o); - 1 === g && (g = p.current.tabs.push(o) - 1);
                    let y = c.indexOf(m); - 1 === y && (y = g);
                    let b = y === u,
                        x = ee(e => {
                            var t;
                            let n = e();
                            if (n === eG.Success && "auto" === l) {
                                let r = null == (t = eW(m)) ? void 0 : t.activeElement,
                                    i = h.tabs.findIndex(e => e.current === r); - 1 !== i && f.change(i)
                            }
                            return n
                        }),
                        w = ee(e => {
                            let t = c.map(e => e.current).filter(Boolean);
                            if (e.key === eB.Space || e.key === eB.Enter) {
                                e.preventDefault(), e.stopPropagation(), f.change(y);
                                return
                            }
                            switch (e.key) {
                                case eB.Home:
                                case eB.PageUp:
                                    return e.preventDefault(), e.stopPropagation(), x(() => e0(t, eY.First));
                                case eB.End:
                                case eB.PageDown:
                                    return e.preventDefault(), e.stopPropagation(), x(() => e0(t, eY.Last))
                            }
                            if (x(() => D(s, {
                                    vertical: () => e.key === eB.ArrowUp ? e0(t, eY.Previous | eY.WrapAround) : e.key === eB.ArrowDown ? e0(t, eY.Next | eY.WrapAround) : eG.Error,
                                    horizontal: () => e.key === eB.ArrowLeft ? e0(t, eY.Previous | eY.WrapAround) : e.key === eB.ArrowRight ? e0(t, eY.Next | eY.WrapAround) : eG.Error
                                })) === eG.Success) return e.preventDefault()
                        }),
                        j = (0, N.useRef)(!1),
                        O = ee(() => {
                            var e;
                            j.current || (j.current = !0, null == (e = m.current) || e.focus(), f.change(y), er(() => {
                                j.current = !1
                            }))
                        }),
                        P = ee(e => {
                            e.preventDefault()
                        }),
                        E = (0, N.useMemo)(() => ({
                            selected: b
                        }), [b]);
                    return F({
                        ourProps: {
                            ref: v,
                            onKeyDown: w,
                            onMouseDown: P,
                            onClick: O,
                            id: o,
                            role: "tab",
                            type: function (e, t) {
                                let [n, r] = (0, N.useState)(() => rX(e));
                                return G(() => {
                                    r(rX(e))
                                }, [e.type, e.as]), G(() => {
                                    n || !t.current || t.current instanceof HTMLButtonElement && !t.current.hasAttribute("type") && r("button")
                                }, [n, t]), n
                            }(e, m),
                            "aria-controls": null == (r = null == (n = d[y]) ? void 0 : n.current) ? void 0 : r.id,
                            "aria-selected": b,
                            tabIndex: b ? 0 : -1
                        },
                        theirProps: a,
                        slot: E,
                        defaultTag: "button",
                        name: "Tabs.Tab"
                    })
                }),
                ir = q(function (e, t) {
                    let {
                        selectedIndex: n
                    } = r4("Tab.Panels");
                    return F({
                        ourProps: {
                            ref: en(t)
                        },
                        theirProps: e,
                        slot: (0, N.useMemo)(() => ({
                            selectedIndex: n
                        }), [n]),
                        defaultTag: "div",
                        name: "Tabs.Panels"
                    })
                }),
                ii = M.RenderStrategy | M.Static,
                io = Object.assign(it, {
                    Group: r7,
                    List: ie,
                    Panels: ir,
                    Panel: q(function (e, t) {
                        var n, r, i, o;
                        let a = e_(),
                            {
                                id: s = `headlessui-tabs-panel-${a}`,
                                ...l
                            } = e,
                            {
                                selectedIndex: u,
                                tabs: c,
                                panels: d
                            } = r4("Tab.Panel"),
                            f = r6("Tab.Panel"),
                            h = r2("Tab.Panel"),
                            p = (0, N.useRef)(null),
                            m = en(p, t);
                        G(() => f.registerPanel(p), [f, p]);
                        let v = h.current.panels.indexOf(s); - 1 === v && (v = h.current.panels.push(s) - 1);
                        let g = d.indexOf(p); - 1 === g && (g = v);
                        let y = g === u,
                            b = (0, N.useMemo)(() => ({
                                selected: y
                            }), [y]),
                            x = {
                                ref: m,
                                id: s,
                                role: "tabpanel",
                                "aria-labelledby": null == (r = null == (n = c[g]) ? void 0 : n.current) ? void 0 : r.id,
                                tabIndex: y ? 0 : -1
                            };
                        return y || null != (i = l.unmount) && !i || null != (o = l.static) && o ? F({
                            ourProps: x,
                            theirProps: l,
                            slot: b,
                            defaultTag: "div",
                            features: ii,
                            visible: y,
                            name: "Tabs.Panel"
                        }) : N.createElement(eH, {
                            as: "span",
                            ...x
                        })
                    })
                }),
                ia = {
                    js: "JavaScript",
                    ts: "TypeScript",
                    javascript: "JavaScript",
                    typescript: "TypeScript",
                    php: "PHP",
                    python: "Python",
                    ruby: "Ruby",
                    go: "Go"
                };

            function is(e) {
                var t;
                let {
                    title: n,
                    language: r
                } = e;
                return null !== (t = null != n ? n : ia[r]) && void 0 !== t ? t : "Code"
            }

            function il(e) {
                return (0, S.jsxs)("svg", {
                    viewBox: "0 0 20 20",
                    "aria-hidden": "true",
                    ...e,
                    children: [(0, S.jsx)("path", {
                        strokeWidth: "0",
                        d: "M5.5 13.5v-5a2 2 0 0 1 2-2l.447-.894A2 2 0 0 1 9.737 4.5h.527a2 2 0 0 1 1.789 1.106l.447.894a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2Z"
                    }), (0, S.jsx)("path", {
                        fill: "none",
                        strokeLinejoin: "round",
                        d: "M12.5 6.5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2m5 0-.447-.894a2 2 0 0 0-1.79-1.106h-.527a2 2 0 0 0-1.789 1.106L7.5 6.5m5 0-1 1h-3l-1-1"
                    })]
                })
            }

            function iu(e) {
                let {
                    code: t
                } = e, [n, r] = (0, N.useState)(0), i = n > 0;
                return (0, N.useEffect)(() => {
                    if (n > 0) {
                        let e = setTimeout(() => r(0), 1e3);
                        return () => {
                            clearTimeout(e)
                        }
                    }
                }, [n]), (0, S.jsxs)("button", {
                    type: "button",
                    className: (0, eO.Z)("group/button absolute top-3.5 right-4 overflow-hidden rounded-full py-1 pl-2 pr-3 text-2xs font-medium opacity-0 backdrop-blur transition focus:opacity-100 group-hover:opacity-100", i ? "bg-emerald-400/10 ring-1 ring-inset ring-emerald-400/20" : "bg-white/5 hover:bg-white/7.5 dark:bg-white/2.5 dark:hover:bg-white/5"),
                    onClick() {
                        window.navigator.clipboard.writeText(t).then(() => {
                            r(e => e + 1)
                        })
                    },
                    children: [(0, S.jsxs)("span", {
                        "aria-hidden": i,
                        className: (0, eO.Z)("pointer-events-none flex items-center gap-0.5 text-zinc-400 transition duration-300", i && "-translate-y-1.5 opacity-0"),
                        children: [(0, S.jsx)(il, {
                            className: "h-5 w-5 fill-zinc-500/20 stroke-zinc-500 transition-colors group-hover/button:stroke-zinc-400"
                        }), "Copy"]
                    }), (0, S.jsx)("span", {
                        "aria-hidden": !i,
                        className: (0, eO.Z)("pointer-events-none absolute inset-0 flex items-center justify-center text-emerald-400 transition duration-300", !i && "translate-y-1.5 opacity-0"),
                        children: "Copied!"
                    })]
                })
            }

            function ic(e) {
                let {
                    tag: t,
                    label: n
                } = e;
                return t || n ? (0, S.jsxs)("div", {
                    className: "flex h-9 items-center gap-2 border-y border-t-transparent border-b-white/7.5 bg-zinc-900 bg-white/2.5 px-4 dark:border-b-white/5 dark:bg-white/1",
                    children: [t && (0, S.jsx)("div", {
                        className: "dark flex",
                        children: (0, S.jsx)(rE.V, {
                            variant: "small",
                            children: t
                        })
                    }), t && n && (0, S.jsx)("span", {
                        className: "h-0.5 w-0.5 rounded-full bg-zinc-500"
                    }), n && (0, S.jsx)("span", {
                        className: "font-mono text-xs text-zinc-400",
                        children: n
                    })]
                }) : null
            }

            function id(e) {
                var t, n, r;
                let {
                    tag: i,
                    label: o,
                    code: a,
                    children: s
                } = e, l = N.Children.only(s);
                return (0, S.jsxs)("div", {
                    className: "group dark:bg-white/2.5",
                    children: [(0, S.jsx)(ic, {
                        tag: null !== (t = l.props.tag) && void 0 !== t ? t : i,
                        label: null !== (n = l.props.label) && void 0 !== n ? n : o
                    }), (0, S.jsxs)("div", {
                        className: "relative",
                        children: [(0, S.jsx)("pre", {
                            className: "overflow-x-auto p-4 text-xs text-white",
                            children: s
                        }), (0, S.jsx)(iu, {
                            code: null !== (r = l.props.code) && void 0 !== r ? r : a
                        })]
                    })]
                })
            }

            function ih(e) {
                let {
                    title: t,
                    children: n,
                    selectedIndex: r
                } = e, i = N.Children.count(n) > 1;
                return t || i ? (0, S.jsxs)("div", {
                    className: "flex min-h-[calc(theme(spacing.12)+1px)] flex-wrap items-start gap-x-4 border-b border-zinc-700 bg-zinc-800 px-4 dark:border-zinc-800 dark:bg-transparent",
                    children: [t && (0, S.jsx)("h3", {
                        className: "mr-auto pt-3 text-xs font-semibold text-white",
                        children: t
                    }), i && (0, S.jsx)(io.List, {
                        className: "-mb-px flex gap-4 text-xs font-medium",
                        children: N.Children.map(n, (e, t) => (0, S.jsx)(io, {
                            className: (0, eO.Z)("border-b py-3 transition focus:[&:not(:focus-visible)]:outline-none", t === r ? "border-emerald-500 text-emerald-400" : "border-transparent text-zinc-400 hover:text-zinc-300"),
                            children: is(e.props)
                        }))
                    })]
                }) : null
            }

            function ip(e) {
                let {
                    children: t,
                    ...n
                } = e;
                return N.Children.count(t) > 1 ? (0, S.jsx)(io.Panels, {
                    children: N.Children.map(t, e => (0, S.jsx)(io.Panel, {
                        children: (0, S.jsx)(id, {
                            ...n,
                            children: e
                        })
                    }))
                }) : (0, S.jsx)(id, {
                    ...n,
                    children: t
                })
            }
            let im = (0, tS.Ue)(e => ({
                    preferredLanguages: [],
                    addPreferredLanguage: t => e(e => ({
                        preferredLanguages: [...e.preferredLanguages.filter(e => e !== t), t]
                    }))
                })),
                iv = (0, N.createContext)(!1);

            function ig(e) {
                let {
                    children: t,
                    title: n,
                    ...r
                } = e, i = function (e) {
                    let t, n, {
                            preferredLanguages: r,
                            addPreferredLanguage: i
                        } = im(),
                        [o, a] = (0, N.useState)(0),
                        s = [...e].sort((e, t) => r.indexOf(t) - r.indexOf(e))[0],
                        l = e.indexOf(s),
                        u = -1 === l ? o : l;
                    u !== o && a(u);
                    let {
                        positionRef: c,
                        preventLayoutShift: d
                    } = (t = (0, N.useRef)(), n = (0, N.useRef)(), (0, N.useEffect)(() => () => {
                        window.cancelAnimationFrame(n.current)
                    }, []), {
                        positionRef: t,
                        preventLayoutShift(e) {
                            let r = t.current.getBoundingClientRect().top;
                            e(), n.current = window.requestAnimationFrame(() => {
                                let e = t.current.getBoundingClientRect().top;
                                window.scrollBy(0, e - r)
                            })
                        }
                    });
                    return {
                        as: "div",
                        ref: c,
                        selectedIndex: o,
                        onChange(t) {
                            d(() => i(e[t]))
                        }
                    }
                }(N.Children.map(t, e => is(e.props))), o = N.Children.count(t) > 1, a = o ? io.Group : "div", s = o ? {
                    selectedIndex: i.selectedIndex
                } : {};
                return (0, S.jsx)(iv.Provider, {
                    value: !0,
                    children: (0, S.jsxs)(a, {
                        ...o ? i : {},
                        className: "not-prose my-6 overflow-hidden rounded-2xl bg-zinc-900 shadow-md dark:ring-1 dark:ring-white/10",
                        children: [(0, S.jsx)(ih, {
                            title: n,
                            ...s,
                            children: t
                        }), (0, S.jsx)(ip, {
                            ...r,
                            children: t
                        })]
                    })
                })
            }

            function iy(e) {
                let {
                    children: t,
                    ...n
                } = e;
                return (0, N.useContext)(iv) ? (0, S.jsx)("code", {
                    ...n,
                    dangerouslySetInnerHTML: {
                        __html: t
                    }
                }) : (0, S.jsx)("code", {
                    ...n,
                    children: t
                })
            }

            function ib(e) {
                let {
                    children: t,
                    ...n
                } = e;
                return (0, N.useContext)(iv) ? t : (0, S.jsx)(ig, {
                    ...n,
                    children: t
                })
            }
            let ix = R(),
                iw = function (e) {
                    return (0, S.jsx)(rK.X, {
                        level: 2,
                        ...e
                    })
                };

            function ij(e) {
                return (0, S.jsxs)("svg", {
                    viewBox: "0 0 16 16",
                    "aria-hidden": "true",
                    ...e,
                    children: [(0, S.jsx)("circle", {
                        cx: "8",
                        cy: "8",
                        r: "8",
                        strokeWidth: "0"
                    }), (0, S.jsx)("path", {
                        fill: "none",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "1.5",
                        d: "M6.75 7.75h1.5v3.5"
                    }), (0, S.jsx)("circle", {
                        cx: "8",
                        cy: "4",
                        r: ".5",
                        fill: "none"
                    })]
                })
            }

            function iO(e) {
                let {
                    children: t
                } = e;
                return (0, S.jsxs)("div", {
                    className: "my-6 flex gap-2.5 rounded-2xl border border-emerald-500/20 bg-emerald-50/50 p-4 leading-6 text-emerald-900 dark:border-emerald-500/30 dark:bg-emerald-500/5 dark:text-emerald-200 dark:[--tw-prose-links:theme(colors.white)] dark:[--tw-prose-links-hover:theme(colors.emerald.300)]",
                    children: [(0, S.jsx)(ij, {
                        className: "mt-1 h-4 w-4 flex-none fill-emerald-500 stroke-white dark:fill-emerald-200/20 dark:stroke-emerald-200"
                    }), (0, S.jsx)("div", {
                        className: "[&>:first-child]:mt-0 [&>:last-child]:mb-0",
                        children: t
                    })]
                })
            }

            function iP(e) {
                let {
                    children: t
                } = e;
                return (0, S.jsx)("div", {
                    className: "grid grid-cols-1 items-start gap-x-16 gap-y-10 xl:max-w-none xl:grid-cols-2",
                    children: t
                })
            }

            function iE(e) {
                let {
                    children: t,
                    sticky: n = !1
                } = e;
                return (0, S.jsx)("div", {
                    className: (0, eO.Z)("[&>:first-child]:mt-0 [&>:last-child]:mb-0", n && "xl:sticky xl:top-24"),
                    children: t
                })
            }

            function iS(e) {
                let {
                    children: t
                } = e;
                return (0, S.jsx)("div", {
                    className: "my-6",
                    children: (0, S.jsx)("ul", {
                        role: "list",
                        className: "m-0 max-w-[calc(theme(maxWidth.lg)-theme(spacing.8))] list-none divide-y divide-zinc-900/5 p-0 dark:divide-white/5",
                        children: t
                    })
                })
            }

            function ik(e) {
                let {
                    name: t,
                    type: n,
                    children: r
                } = e;
                return (0, S.jsx)("li", {
                    className: "m-0 px-0 py-4 first:pt-0 last:pb-0",
                    children: (0, S.jsxs)("dl", {
                        className: "m-0 flex flex-wrap items-center gap-x-3 gap-y-2",
                        children: [(0, S.jsx)("dt", {
                            className: "sr-only",
                            children: "Name"
                        }), (0, S.jsx)("dd", {
                            children: (0, S.jsx)("code", {
                                children: t
                            })
                        }), (0, S.jsx)("dt", {
                            className: "sr-only",
                            children: "Type"
                        }), (0, S.jsx)("dd", {
                            className: "font-mono text-xs text-zinc-400 dark:text-zinc-500",
                            children: n
                        }), (0, S.jsx)("dt", {
                            className: "sr-only",
                            children: "Description"
                        }), (0, S.jsx)("dd", {
                            className: "w-full flex-none [&>:first-child]:mt-0 [&>:last-child]:mb-0",
                            children: r
                        })]
                    })
                })
            }

            function iT() {
                rj.getState().close()
            }

            function iA(e) {
                let {
                    Component: t,
                    pageProps: n
                } = e, r = (0, A.useRouter)();
                return (0, S.jsxs)(S.Fragment, {
                    children: [(0, S.jsxs)(T(), {
                        children: ["/" === r.pathname ? (0, S.jsx)("title", {
                            children: "MoçambiqueAPI"
                        }) : (0, S.jsx)("title", {
                            children: `${n.title} - rfg`
                        }), (0, S.jsx)("meta", {
                            name: "description",
                            content: n.description
                        })]
                    }), (0, S.jsx)(C.Zo, {
                        components: E,
                        children: (0, S.jsx)(rG, {
                            ...n,
                            children: (0, S.jsx)(t, {
                                ...n
                            })
                        })
                    })]
                })
            }
            n(6728), n(5202), A.Router.events.on("hashChangeStart", iT), A.Router.events.on("routeChangeComplete", iT), A.Router.events.on("routeChangeError", iT)
        },
        6728: function () {},
        7663: function (e) {
            ! function () {
                var t = {
                        229: function (e) {
                            var t, n, r, i = e.exports = {};

                            function o() {
                                throw Error("setTimeout has not been defined")
                            }

                            function a() {
                                throw Error("clearTimeout has not been defined")
                            }

                            function s(e) {
                                if (t === setTimeout) return setTimeout(e, 0);
                                if ((t === o || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
                                try {
                                    return t(e, 0)
                                } catch (r) {
                                    try {
                                        return t.call(null, e, 0)
                                    } catch (n) {
                                        return t.call(this, e, 0)
                                    }
                                }
                            }! function () {
                                try {
                                    t = "function" == typeof setTimeout ? setTimeout : o
                                } catch (e) {
                                    t = o
                                }
                                try {
                                    n = "function" == typeof clearTimeout ? clearTimeout : a
                                } catch (r) {
                                    n = a
                                }
                            }();
                            var l = [],
                                u = !1,
                                c = -1;

                            function d() {
                                u && r && (u = !1, r.length ? l = r.concat(l) : c = -1, l.length && f())
                            }

                            function f() {
                                if (!u) {
                                    var e = s(d);
                                    u = !0;
                                    for (var t = l.length; t;) {
                                        for (r = l, l = []; ++c < t;) r && r[c].run();
                                        c = -1, t = l.length
                                    }
                                    r = null, u = !1,
                                        function (e) {
                                            if (n === clearTimeout) return clearTimeout(e);
                                            if ((n === a || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
                                            try {
                                                n(e)
                                            } catch (r) {
                                                try {
                                                    return n.call(null, e)
                                                } catch (t) {
                                                    return n.call(this, e)
                                                }
                                            }
                                        }(e)
                                }
                            }

                            function h(e, t) {
                                this.fun = e, this.array = t
                            }

                            function p() {}
                            i.nextTick = function (e) {
                                var t = Array(arguments.length - 1);
                                if (arguments.length > 1)
                                    for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                                l.push(new h(e, t)), 1 !== l.length || u || s(f)
                            }, h.prototype.run = function () {
                                this.fun.apply(null, this.array)
                            }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = p, i.addListener = p, i.once = p, i.off = p, i.removeListener = p, i.removeAllListeners = p, i.emit = p, i.prependListener = p, i.prependOnceListener = p, i.listeners = function (e) {
                                return []
                            }, i.binding = function (e) {
                                throw Error("process.binding is not supported")
                            }, i.cwd = function () {
                                return "/"
                            }, i.chdir = function (e) {
                                throw Error("process.chdir is not supported")
                            }, i.umask = function () {
                                return 0
                            }
                        }
                    },
                    n = {};

                function r(e) {
                    var i = n[e];
                    if (void 0 !== i) return i.exports;
                    var o = n[e] = {
                            exports: {}
                        },
                        a = !0;
                    try {
                        t[e](o, o.exports, r), a = !1
                    } finally {
                        a && delete n[e]
                    }
                    return o.exports
                }
                r.ab = "//";
                var i = r(229);
                e.exports = i
            }()
        },
        9008: function (e, t, n) {
            e.exports = n(3121)
        },
        1664: function (e, t, n) {
            e.exports = n(1551)
        },
        1163: function (e, t, n) {
            e.exports = n(880)
        },
        3250: function (e, t, n) {
            "use strict";
            /**
             * @license React
             * use-sync-external-store-shim.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */
            var r = n(7294),
                i = "function" == typeof Object.is ? Object.is : function (e, t) {
                    return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
                },
                o = r.useState,
                a = r.useEffect,
                s = r.useLayoutEffect,
                l = r.useDebugValue;

            function u(e) {
                var t = e.getSnapshot;
                e = e.value;
                try {
                    var n = t();
                    return !i(e, n)
                } catch (r) {
                    return !0
                }
            }
            var c = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function (e, t) {
                return t()
            } : function (e, t) {
                var n = t(),
                    r = o({
                        inst: {
                            value: n,
                            getSnapshot: t
                        }
                    }),
                    i = r[0].inst,
                    c = r[1];
                return s(function () {
                    i.value = n, i.getSnapshot = t, u(i) && c({
                        inst: i
                    })
                }, [e, n, t]), a(function () {
                    return u(i) && c({
                        inst: i
                    }), e(function () {
                        u(i) && c({
                            inst: i
                        })
                    })
                }, [e]), l(n), n
            };
            t.useSyncExternalStore = void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : c
        },
        6742: function (e, t, n) {
            "use strict";
            /**
             * @license React
             * use-sync-external-store-shim/with-selector.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */
            var r = n(7294),
                i = n(1688),
                o = "function" == typeof Object.is ? Object.is : function (e, t) {
                    return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
                },
                a = i.useSyncExternalStore,
                s = r.useRef,
                l = r.useEffect,
                u = r.useMemo,
                c = r.useDebugValue;
            t.useSyncExternalStoreWithSelector = function (e, t, n, r, i) {
                var d = s(null);
                if (null === d.current) {
                    var f = {
                        hasValue: !1,
                        value: null
                    };
                    d.current = f
                } else f = d.current;
                d = u(function () {
                    function e(e) {
                        if (!l) {
                            if (l = !0, a = e, e = r(e), void 0 !== i && f.hasValue) {
                                var t = f.value;
                                if (i(t, e)) return s = t
                            }
                            return s = e
                        }
                        if (t = s, o(a, e)) return t;
                        var n = r(e);
                        return void 0 !== i && i(t, n) ? t : (a = e, s = n)
                    }
                    var a, s, l = !1,
                        u = void 0 === n ? null : n;
                    return [function () {
                        return e(t())
                    }, null === u ? void 0 : function () {
                        return e(u())
                    }]
                }, [t, n, r, i]);
                var h = a(e, d[0], d[1]);
                return l(function () {
                    f.hasValue = !0, f.value = h
                }, [h]), c(h), h
            }
        },
        1688: function (e, t, n) {
            "use strict";
            e.exports = n(3250)
        },
        2798: function (e, t, n) {
            "use strict";
            e.exports = n(6742)
        },
        1151: function (e, t, n) {
            "use strict";
            n.d(t, {
                Zo: function () {
                    return s
                },
                ah: function () {
                    return o
                }
            });
            var r = n(7294);
            let i = r.createContext({});

            function o(e) {
                let t = r.useContext(i);
                return r.useMemo(() => "function" == typeof e ? e(t) : {
                    ...t,
                    ...e
                }, [t, e])
            }
            let a = {};

            function s({
                components: e,
                children: t,
                disableParentContext: n
            }) {
                let s = o(e);
                return n && (s = e || a), r.createElement(i.Provider, {
                    value: s
                }, t)
            }
        },
        5947: function (e, t, n) {
            "use strict";
            n.d(t, {
                hO: function () {
                    return a
                },
                oO: function () {
                    return o
                }
            });
            var r = n(7294),
                i = n(240);

            function o() {
                let e = (0, r.useContext)(i.O);
                if (null === e) return [!0, null];
                let {
                    isPresent: t,
                    onExitComplete: n,
                    register: o
                } = e, a = (0, r.useId)();
                (0, r.useEffect)(() => o(a), []);
                let s = () => n && n(a);
                return !t && n ? [!1, s] : [!0]
            }

            function a() {
                var e;
                return null === (e = (0, r.useContext)(i.O)) || e.isPresent
            }
        },
        5364: function (e, t, n) {
            "use strict";
            n.d(t, {
                p: function () {
                    return i
                }
            });
            var r = n(7294);
            let i = (0, r.createContext)({})
        },
        6014: function (e, t, n) {
            "use strict";
            n.d(t, {
                _: function () {
                    return i
                }
            });
            var r = n(7294);
            let i = (0, r.createContext)({
                transformPagePoint: e => e,
                isStatic: !1,
                reducedMotion: "never"
            })
        },
        240: function (e, t, n) {
            "use strict";
            n.d(t, {
                O: function () {
                    return i
                }
            });
            var r = n(7294);
            let i = (0, r.createContext)(null)
        },
        7367: function (e, t, n) {
            "use strict";
            n.d(t, {
                w: function () {
                    return r
                }
            });
            let r = {
                delta: 0,
                timestamp: 0
            }
        },
        404: function (e, t, n) {
            "use strict";
            n.d(t, {
                qY: function () {
                    return h
                },
                iW: function () {
                    return p
                },
                Z_: function () {
                    return f
                }
            });
            let r = 1 / 60 * 1e3,
                i = "undefined" != typeof performance ? () => performance.now() : () => Date.now(),
                o = "undefined" != typeof window ? e => window.requestAnimationFrame(e) : e => setTimeout(() => e(i()), r);
            var a = n(7367);
            let s = !0,
                l = !1,
                u = !1,
                c = ["read", "update", "preRender", "render", "postRender"],
                d = c.reduce((e, t) => (e[t] = function (e) {
                    let t = [],
                        n = [],
                        r = 0,
                        i = !1,
                        o = !1,
                        a = new WeakSet,
                        s = {
                            schedule(e, o = !1, s = !1) {
                                let l = s && i,
                                    u = l ? t : n;
                                return o && a.add(e), -1 === u.indexOf(e) && (u.push(e), l && i && (r = t.length)), e
                            },
                            cancel(e) {
                                let t = n.indexOf(e); - 1 !== t && n.splice(t, 1), a.delete(e)
                            },
                            process(l) {
                                if (i) {
                                    o = !0;
                                    return
                                }
                                if (i = !0, [t, n] = [n, t], n.length = 0, r = t.length)
                                    for (let u = 0; u < r; u++) {
                                        let c = t[u];
                                        c(l), a.has(c) && (s.schedule(c), e())
                                    }
                                i = !1, o && (o = !1, s.process(l))
                            }
                        };
                    return s
                }(() => l = !0), e), {}),
                f = c.reduce((e, t) => {
                    let n = d[t];
                    return e[t] = (e, t = !1, r = !1) => (l || g(), n.schedule(e, t, r)), e
                }, {}),
                h = c.reduce((e, t) => (e[t] = d[t].cancel, e), {}),
                p = c.reduce((e, t) => (e[t] = () => d[t].process(a.w), e), {}),
                m = e => d[e].process(a.w),
                v = e => {
                    l = !1, a.w.delta = s ? r : Math.max(Math.min(e - a.w.timestamp, 40), 1), a.w.timestamp = e, u = !0, c.forEach(m), u = !1, l && (s = !1, o(v))
                },
                g = () => {
                    l = !0, s = !0, u || o(v)
                }
        },
        296: function (e, t, n) {
            "use strict";
            n.d(t, {
                E: function () {
                    return ip
                }
            });
            var r, i, o, a, s, l = n(7294),
                u = n(6014);
            let c = (0, l.createContext)({});
            var d = n(240),
                f = n(8868);
            let h = (0, l.createContext)({
                strict: !1
            });

            function p(e) {
                return "object" == typeof e && Object.prototype.hasOwnProperty.call(e, "current")
            }

            function m(e) {
                return "string" == typeof e || Array.isArray(e)
            }

            function v(e) {
                return "object" == typeof e && "function" == typeof e.start
            }
            let g = ["initial", "animate", "exit", "whileHover", "whileDrag", "whileTap", "whileFocus", "whileInView"];

            function y(e) {
                return v(e.animate) || g.some(t => m(e[t]))
            }

            function b(e) {
                return Boolean(y(e) || e.variants)
            }

            function x(e) {
                return Array.isArray(e) ? e.join(" ") : e
            }
            let w = e => ({
                    isEnabled: t => e.some(e => !!t[e])
                }),
                j = {
                    measureLayout: w(["layout", "layoutId", "drag"]),
                    animation: w(["animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag", "whileInView"]),
                    exit: w(["exit"]),
                    drag: w(["drag", "dragControls"]),
                    focus: w(["whileFocus"]),
                    hover: w(["whileHover", "onHoverStart", "onHoverEnd"]),
                    tap: w(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
                    pan: w(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
                    inView: w(["whileInView", "onViewportEnter", "onViewportLeave"])
                };
            var O = n(1741),
                P = n(6681);
            let E = {
                    hasAnimatedSinceResize: !0,
                    hasEverUpdated: !1
                },
                S = 1;
            var k = n(5364);
            class T extends l.Component {
                getSnapshotBeforeUpdate() {
                    let {
                        visualElement: e,
                        props: t
                    } = this.props;
                    return e && e.setProps(t), null
                }
                componentDidUpdate() {}
                render() {
                    return this.props.children
                }
            }
            let A = (0, l.createContext)({}),
                C = Symbol.for("motionComponentSymbol"),
                I = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

            function R(e) {
                if ("string" != typeof e || e.includes("-"));
                else if (I.indexOf(e) > -1 || /[A-Z]/.test(e)) return !0;
                return !1
            }
            let L = {},
                N = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
                D = new Set(N);

            function M(e, {
                layout: t,
                layoutId: n
            }) {
                return D.has(e) || e.startsWith("origin") || (t || void 0 !== n) && (!!L[e] || "opacity" === e)
            }
            let V = e => !!(null == e ? void 0 : e.getVelocity),
                F = {
                    x: "translateX",
                    y: "translateY",
                    z: "translateZ",
                    transformPerspective: "perspective"
                },
                z = (e, t) => N.indexOf(e) - N.indexOf(t);

            function B(e) {
                return e.startsWith("--")
            }
            let q = (e, t) => t && "number" == typeof e ? t.transform(e) : e;
            var U = n(1649),
                _ = n(6190);
            let $ = {
                    ...U.Rx,
                    transform: Math.round
                },
                H = {
                    borderWidth: _.px,
                    borderTopWidth: _.px,
                    borderRightWidth: _.px,
                    borderBottomWidth: _.px,
                    borderLeftWidth: _.px,
                    borderRadius: _.px,
                    radius: _.px,
                    borderTopLeftRadius: _.px,
                    borderTopRightRadius: _.px,
                    borderBottomRightRadius: _.px,
                    borderBottomLeftRadius: _.px,
                    width: _.px,
                    maxWidth: _.px,
                    height: _.px,
                    maxHeight: _.px,
                    size: _.px,
                    top: _.px,
                    right: _.px,
                    bottom: _.px,
                    left: _.px,
                    padding: _.px,
                    paddingTop: _.px,
                    paddingRight: _.px,
                    paddingBottom: _.px,
                    paddingLeft: _.px,
                    margin: _.px,
                    marginTop: _.px,
                    marginRight: _.px,
                    marginBottom: _.px,
                    marginLeft: _.px,
                    rotate: _.RW,
                    rotateX: _.RW,
                    rotateY: _.RW,
                    rotateZ: _.RW,
                    scale: U.bA,
                    scaleX: U.bA,
                    scaleY: U.bA,
                    scaleZ: U.bA,
                    skew: _.RW,
                    skewX: _.RW,
                    skewY: _.RW,
                    distance: _.px,
                    translateX: _.px,
                    translateY: _.px,
                    translateZ: _.px,
                    x: _.px,
                    y: _.px,
                    z: _.px,
                    perspective: _.px,
                    transformPerspective: _.px,
                    opacity: U.Fq,
                    originX: _.$C,
                    originY: _.$C,
                    originZ: _.px,
                    zIndex: $,
                    fillOpacity: U.Fq,
                    strokeOpacity: U.Fq,
                    numOctaves: $
                };

            function W(e, t, n, r) {
                let {
                    style: i,
                    vars: o,
                    transform: a,
                    transformKeys: s,
                    transformOrigin: l
                } = e;
                s.length = 0;
                let u = !1,
                    c = !1,
                    d = !0;
                for (let f in t) {
                    let h = t[f];
                    if (B(f)) {
                        o[f] = h;
                        continue
                    }
                    let p = H[f],
                        m = q(h, p);
                    if (D.has(f)) {
                        if (u = !0, a[f] = m, s.push(f), !d) continue;
                        h !== (p.default || 0) && (d = !1)
                    } else f.startsWith("origin") ? (c = !0, l[f] = m) : i[f] = m
                }
                if (!t.transform && (u || r ? i.transform = function ({
                        transform: e,
                        transformKeys: t
                    }, {
                        enableHardwareAcceleration: n = !0,
                        allowTransformNone: r = !0
                    }, i, o) {
                        let a = "";
                        for (let s of (t.sort(z), t)) a += `${F[s]||s}(${e[s]}) `;
                        return n && !e.z && (a += "translateZ(0)"), a = a.trim(), o ? a = o(e, i ? "" : a) : r && i && (a = "none"), a
                    }(e, n, d, r) : i.transform && (i.transform = "none")), c) {
                    let {
                        originX: v = "50%",
                        originY: g = "50%",
                        originZ: y = 0
                    } = l;
                    i.transformOrigin = `${v} ${g} ${y}`
                }
            }
            let Z = () => ({
                style: {},
                transform: {},
                transformKeys: [],
                transformOrigin: {},
                vars: {}
            });

            function Y(e, t, n) {
                for (let r in t) V(t[r]) || M(r, n) || (e[r] = t[r])
            }

            function G(e, t, n) {
                let r = {},
                    i = function (e, t, n) {
                        let r = e.style || {},
                            i = {};
                        return Y(i, r, e), Object.assign(i, function ({
                            transformTemplate: e
                        }, t, n) {
                            return (0, l.useMemo)(() => {
                                let r = Z();
                                return W(r, t, {
                                    enableHardwareAcceleration: !n
                                }, e), Object.assign({}, r.vars, r.style)
                            }, [t])
                        }(e, t, n)), e.transformValues ? e.transformValues(i) : i
                    }(e, t, n);
                return e.drag && !1 !== e.dragListener && (r.draggable = !1, i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none", i.touchAction = !0 === e.drag ? "none" : `pan-${"x"===e.drag?"y":"x"}`), r.style = i, r
            }
            let K = new Set(["initial", "style", "values", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "layout", "layoutId", "layoutDependency", "onLayoutAnimationStart", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "drag", "dragControls", "dragListener", "dragConstraints", "dragDirectionLock", "dragSnapToOrigin", "_dragX", "_dragY", "dragElastic", "dragMomentum", "dragPropagation", "dragTransition", "onHoverStart", "onHoverEnd", "layoutScroll", "whileInView", "onViewportEnter", "onViewportLeave", "viewport", "whileTap", "onTap", "onTapStart", "onTapCancel", "animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag", "whileInView", "onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]);

            function X(e) {
                return K.has(e)
            }
            let J = e => !X(e);
            try {
                (r = require("@emotion/is-prop-valid").default) && (J = e => e.startsWith("on") ? !X(e) : r(e))
            } catch (Q) {}

            function ee(e, t, n) {
                return "string" == typeof e ? e : _.px.transform(t + n * e)
            }
            let et = {
                    offset: "stroke-dashoffset",
                    array: "stroke-dasharray"
                },
                en = {
                    offset: "strokeDashoffset",
                    array: "strokeDasharray"
                };

            function er(e, {
                attrX: t,
                attrY: n,
                originX: r,
                originY: i,
                pathLength: o,
                pathSpacing: a = 1,
                pathOffset: s = 0,
                ...l
            }, u, c, d) {
                if (W(e, l, u, d), c) {
                    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
                    return
                }
                e.attrs = e.style, e.style = {};
                let {
                    attrs: f,
                    style: h,
                    dimensions: p
                } = e;
                f.transform && (p && (h.transform = f.transform), delete f.transform), p && (void 0 !== r || void 0 !== i || h.transform) && (h.transformOrigin = function (e, t, n) {
                    let r = ee(t, e.x, e.width),
                        i = ee(n, e.y, e.height);
                    return `${r} ${i}`
                }(p, void 0 !== r ? r : .5, void 0 !== i ? i : .5)), void 0 !== t && (f.x = t), void 0 !== n && (f.y = n), void 0 !== o && function (e, t, n = 1, r = 0, i = !0) {
                    e.pathLength = 1;
                    let o = i ? et : en;
                    e[o.offset] = _.px.transform(-r);
                    let a = _.px.transform(t),
                        s = _.px.transform(n);
                    e[o.array] = `${a} ${s}`
                }(f, o, a, s, !1)
            }
            let ei = () => ({
                    ...Z(),
                    attrs: {}
                }),
                eo = e => "string" == typeof e && "svg" === e.toLowerCase();

            function ea(e, t, n, r) {
                let i = (0, l.useMemo)(() => {
                    let n = ei();
                    return er(n, t, {
                        enableHardwareAcceleration: !1
                    }, eo(r), e.transformTemplate), {
                        ...n.attrs,
                        style: {
                            ...n.style
                        }
                    }
                }, [t]);
                if (e.style) {
                    let o = {};
                    Y(o, e.style, e), i.style = {
                        ...o,
                        ...i.style
                    }
                }
                return i
            }
            let es = e => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

            function el(e, {
                style: t,
                vars: n
            }, r, i) {
                for (let o in Object.assign(e.style, t, i && i.getProjectionStyles(r)), n) e.style.setProperty(o, n[o])
            }
            let eu = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

            function ec(e, t, n, r) {
                for (let i in el(e, t, void 0, r), t.attrs) e.setAttribute(eu.has(i) ? i : es(i), t.attrs[i])
            }

            function ed(e) {
                let {
                    style: t
                } = e, n = {};
                for (let r in t)(V(t[r]) || M(r, e)) && (n[r] = t[r]);
                return n
            }

            function ef(e) {
                let t = ed(e);
                for (let n in e)
                    if (V(e[n])) {
                        let r = "x" === n || "y" === n ? "attr" + n.toUpperCase() : n;
                        t[r] = e[n]
                    } return t
            }

            function eh(e, t, n, r = {}, i = {}) {
                return "function" == typeof t && (t = t(void 0 !== n ? n : e.custom, r, i)), "string" == typeof t && (t = e.variants && e.variants[t]), "function" == typeof t && (t = t(void 0 !== n ? n : e.custom, r, i)), t
            }
            let ep = e => Array.isArray(e),
                em = e => Boolean(e && "object" == typeof e && e.mix && e.toValue),
                ev = e => ep(e) ? e[e.length - 1] || 0 : e;

            function eg(e) {
                let t = V(e) ? e.get() : e;
                return em(t) ? t.toValue() : t
            }
            let ey = e => (t, n) => {
                    let r = (0, l.useContext)(c),
                        i = (0, l.useContext)(d.O),
                        o = () => (function ({
                            scrapeMotionValuesFromProps: e,
                            createRenderState: t,
                            onMount: n
                        }, r, i, o) {
                            let a = {
                                latestValues: function (e, t, n, r) {
                                    let i = {},
                                        o = r(e);
                                    for (let a in o) i[a] = eg(o[a]);
                                    let {
                                        initial: s,
                                        animate: l
                                    } = e, u = y(e), c = b(e);
                                    t && c && !u && !1 !== e.inherit && (void 0 === s && (s = t.initial), void 0 === l && (l = t.animate));
                                    let d = !!n && !1 === n.initial;
                                    d = d || !1 === s;
                                    let f = d ? l : s;
                                    if (f && "boolean" != typeof f && !v(f)) {
                                        let h = Array.isArray(f) ? f : [f];
                                        h.forEach(t => {
                                            let n = eh(e, t);
                                            if (!n) return;
                                            let {
                                                transitionEnd: r,
                                                transition: o,
                                                ...a
                                            } = n;
                                            for (let s in a) {
                                                let l = a[s];
                                                if (Array.isArray(l)) {
                                                    let u = d ? l.length - 1 : 0;
                                                    l = l[u]
                                                }
                                                null !== l && (i[s] = l)
                                            }
                                            for (let c in r) i[c] = r[c]
                                        })
                                    }
                                    return i
                                }(r, i, o, e),
                                renderState: t()
                            };
                            return n && (a.mount = e => n(r, e, a)), a
                        })(e, t, r, i);
                    return n ? o() : (0, P.h)(o)
                },
                eb = {
                    useVisualState: ey({
                        scrapeMotionValuesFromProps: ef,
                        createRenderState: ei,
                        onMount(e, t, {
                            renderState: n,
                            latestValues: r
                        }) {
                            try {
                                n.dimensions = "function" == typeof t.getBBox ? t.getBBox() : t.getBoundingClientRect()
                            } catch (i) {
                                n.dimensions = {
                                    x: 0,
                                    y: 0,
                                    width: 0,
                                    height: 0
                                }
                            }
                            er(n, r, {
                                enableHardwareAcceleration: !1
                            }, eo(t.tagName), e.transformTemplate), ec(t, n)
                        }
                    })
                },
                ex = {
                    useVisualState: ey({
                        scrapeMotionValuesFromProps: ed,
                        createRenderState: Z
                    })
                };

            function ew(e, t, n, r = {
                passive: !0
            }) {
                return e.addEventListener(t, n, r), () => e.removeEventListener(t, n)
            }

            function ej(e, t, n, r) {
                (0, l.useEffect)(() => {
                    let i = e.current;
                    if (n && i) return ew(i, t, n, r)
                }, [e, t, n, r])
            }

            function eO(e) {
                return "undefined" != typeof PointerEvent && e instanceof PointerEvent ? !("mouse" !== e.pointerType) : e instanceof MouseEvent
            }

            function eP(e) {
                let t = !!e.touches;
                return t
            }(i = a || (a = {})).Animate = "animate", i.Hover = "whileHover", i.Tap = "whileTap", i.Drag = "whileDrag", i.Focus = "whileFocus", i.InView = "whileInView", i.Exit = "exit";
            let eE = {
                pageX: 0,
                pageY: 0
            };

            function eS(e, t = "page") {
                return {
                    point: eP(e) ? function (e, t = "page") {
                        let n = e.touches[0] || e.changedTouches[0],
                            r = n || eE;
                        return {
                            x: r[t + "X"],
                            y: r[t + "Y"]
                        }
                    }(e, t) : function (e, t = "page") {
                        return {
                            x: e[t + "X"],
                            y: e[t + "Y"]
                        }
                    }(e, t)
                }
            }
            let ek = (e, t = !1) => {
                    let n = t => e(t, eS(t));
                    return t ? e => {
                        let t = e instanceof MouseEvent,
                            r = !t || t && 0 === e.button;
                        r && n(e)
                    } : n
                },
                eT = () => O.j && null === window.onpointerdown,
                eA = () => O.j && null === window.ontouchstart,
                eC = () => O.j && null === window.onmousedown,
                eI = {
                    pointerdown: "mousedown",
                    pointermove: "mousemove",
                    pointerup: "mouseup",
                    pointercancel: "mousecancel",
                    pointerover: "mouseover",
                    pointerout: "mouseout",
                    pointerenter: "mouseenter",
                    pointerleave: "mouseleave"
                },
                eR = {
                    pointerdown: "touchstart",
                    pointermove: "touchmove",
                    pointerup: "touchend",
                    pointercancel: "touchcancel"
                };

            function eL(e) {
                if (eT());
                else if (eA()) return eR[e];
                else if (eC()) return eI[e];
                return e
            }

            function eN(e, t, n, r) {
                return ew(e, eL(t), ek(n, "pointerdown" === t), r)
            }

            function eD(e, t, n, r) {
                return ej(e, eL(t), n && ek(n, "pointerdown" === t), r)
            }

            function eM(e) {
                let t = null;
                return () => {
                    let n = () => {
                        t = null
                    };
                    return null === t && (t = e, n)
                }
            }
            let eV = eM("dragHorizontal"),
                eF = eM("dragVertical");

            function ez(e) {
                let t = !1;
                if ("y" === e) t = eF();
                else if ("x" === e) t = eV();
                else {
                    let n = eV(),
                        r = eF();
                    n && r ? t = () => {
                        n(), r()
                    } : (n && n(), r && r())
                }
                return t
            }

            function eB() {
                let e = ez(!0);
                return !e || (e(), !1)
            }

            function eq(e, t, n) {
                return (r, i) => {
                    !(!eO(r) || eB()) && (e.animationState && e.animationState.setActive(a.Hover, t), n && n(r, i))
                }
            }
            let eU = (e, t) => !!t && (e === t || eU(e, t.parentElement));
            var e_ = n(5411),
                e$ = n(3624),
                eH = n(9304),
                eW = n(6034);
            let eZ = new WeakMap,
                eY = new WeakMap,
                eG = e => {
                    let t = eZ.get(e.target);
                    t && t(e)
                },
                eK = e => {
                    e.forEach(eG)
                },
                eX = {
                    some: 0,
                    all: 1
                };

            function eJ(e, t, n, {
                root: r,
                margin: i,
                amount: o = "some",
                once: s
            }) {
                (0, l.useEffect)(() => {
                    if (!e || !n.current) return;
                    let l = {
                            root: null == r ? void 0 : r.current,
                            rootMargin: i,
                            threshold: "number" == typeof o ? o : eX[o]
                        },
                        u = e => {
                            let {
                                isIntersecting: r
                            } = e;
                            if (t.isInView === r || (t.isInView = r, s && !r && t.hasEnteredView)) return;
                            r && (t.hasEnteredView = !0), n.animationState && n.animationState.setActive(a.InView, r);
                            let i = n.getProps(),
                                o = r ? i.onViewportEnter : i.onViewportLeave;
                            o && o(e)
                        };
                    return function (e, t, n) {
                        let r = function ({
                            root: e,
                            ...t
                        }) {
                            let n = e || document;
                            eY.has(n) || eY.set(n, {});
                            let r = eY.get(n),
                                i = JSON.stringify(t);
                            return r[i] || (r[i] = new IntersectionObserver(eK, {
                                root: e,
                                ...t
                            })), r[i]
                        }(t);
                        return eZ.set(e, n), r.observe(e), () => {
                            eZ.delete(e), r.unobserve(e)
                        }
                    }(n.current, l, u)
                }, [e, r, i, o])
            }

            function eQ(e, t, n, {
                fallback: r = !0
            }) {
                (0, l.useEffect)(() => {
                    e && r && ("production" !== eH.O && (0, eW.O)(!1, "IntersectionObserver not available on this device. whileInView animations will trigger on mount."), requestAnimationFrame(() => {
                        t.hasEnteredView = !0;
                        let {
                            onViewportEnter: e
                        } = n.getProps();
                        e && e(null), n.animationState && n.animationState.setActive(a.InView, !0)
                    }))
                }, [e])
            }
            let e0 = e => t => (e(t), null),
                e1 = {
                    inView: e0(function ({
                        visualElement: e,
                        whileInView: t,
                        onViewportEnter: n,
                        onViewportLeave: r,
                        viewport: i = {}
                    }) {
                        let o = (0, l.useRef)({
                                hasEnteredView: !1,
                                isInView: !1
                            }),
                            a = Boolean(t || n || r);
                        i.once && o.current.hasEnteredView && (a = !1);
                        let s = "undefined" == typeof IntersectionObserver ? eQ : eJ;
                        s(a, o.current, e, i)
                    }),
                    tap: e0(function ({
                        onTap: e,
                        onTapStart: t,
                        onTapCancel: n,
                        whileTap: r,
                        visualElement: i
                    }) {
                        let o = (0, l.useRef)(!1),
                            s = (0, l.useRef)(null),
                            u = {
                                passive: !(t || e || n || p)
                            };

                        function c() {
                            s.current && s.current(), s.current = null
                        }

                        function d() {
                            return c(), o.current = !1, i.animationState && i.animationState.setActive(a.Tap, !1), !eB()
                        }

                        function f(t, r) {
                            d() && (eU(i.current, t.target) ? e && e(t, r) : n && n(t, r))
                        }

                        function h(e, t) {
                            d() && n && n(e, t)
                        }

                        function p(e, n) {
                            c(), !o.current && (o.current = !0, s.current = (0, e$.z)(eN(window, "pointerup", f, u), eN(window, "pointercancel", h, u)), i.animationState && i.animationState.setActive(a.Tap, !0), t && t(e, n))
                        }
                        eD(i, "pointerdown", e || t || n || r ? p : void 0, u), (0, e_.z)(c)
                    }),
                    focus: e0(function ({
                        whileFocus: e,
                        visualElement: t
                    }) {
                        let {
                            animationState: n
                        } = t, r = () => {
                            n && n.setActive(a.Focus, !0)
                        }, i = () => {
                            n && n.setActive(a.Focus, !1)
                        };
                        ej(t, "focus", e ? r : void 0), ej(t, "blur", e ? i : void 0)
                    }),
                    hover: e0(function ({
                        onHoverStart: e,
                        onHoverEnd: t,
                        whileHover: n,
                        visualElement: r
                    }) {
                        eD(r, "pointerenter", e || n ? eq(r, !0, e) : void 0, {
                            passive: !e
                        }), eD(r, "pointerleave", t || n ? eq(r, !1, t) : void 0, {
                            passive: !t
                        })
                    })
                };
            var e2 = n(5947);

            function e5(e, t) {
                if (!Array.isArray(t)) return !1;
                let n = t.length;
                if (n !== e.length) return !1;
                for (let r = 0; r < n; r++)
                    if (t[r] !== e[r]) return !1;
                return !0
            }
            let e4 = e => /^\-?\d*\.?\d+$/.test(e),
                e3 = e => /^0[^.\s]+$/.test(e);
            var e6 = n(3234),
                e8 = n(1550),
                e9 = n(6430);
            let e7 = new Set(["brightness", "contrast", "saturate", "opacity"]);

            function te(e) {
                let [t, n] = e.slice(0, -1).split("(");
                if ("drop-shadow" === t) return e;
                let [r] = n.match(e9.KP) || [];
                if (!r) return e;
                let i = n.replace(r, ""),
                    o = e7.has(t) ? 1 : 0;
                return r !== n && (o *= 100), t + "(" + o + i + ")"
            }
            let tt = /([a-z-]*)\(.*?\)/g,
                tn = {
                    ...e8.P,
                    getAnimatableNone(e) {
                        let t = e.match(tt);
                        return t ? t.map(te).join(" ") : e
                    }
                };
            var tr = n(5385);
            let ti = {
                    ...H,
                    color: tr.$,
                    backgroundColor: tr.$,
                    outlineColor: tr.$,
                    fill: tr.$,
                    stroke: tr.$,
                    borderColor: tr.$,
                    borderTopColor: tr.$,
                    borderRightColor: tr.$,
                    borderBottomColor: tr.$,
                    borderLeftColor: tr.$,
                    filter: tn,
                    WebkitFilter: tn
                },
                to = e => ti[e];

            function ta(e, t) {
                var n;
                let r = to(e);
                return r !== tn && (r = e8.P), null === (n = r.getAnimatableNone) || void 0 === n ? void 0 : n.call(r, t)
            }
            let ts = e => t => t.test(e),
                tl = [U.Rx, _.px, _.aQ, _.RW, _.vw, _.vh, {
                    test: e => "auto" === e,
                    parse: e => e
                }],
                tu = e => tl.find(ts(e)),
                tc = [...tl, tr.$, e8.P],
                td = e => tc.find(ts(e));

            function tf(e, t, n) {
                let r = e.getProps();
                return eh(r, t, void 0 !== n ? n : r.custom, function (e) {
                    let t = {};
                    return e.values.forEach((e, n) => t[n] = e.get()), t
                }(e), function (e) {
                    let t = {};
                    return e.values.forEach((e, n) => t[n] = e.getVelocity()), t
                }(e))
            }

            function th(e) {
                return Boolean(V(e) && e.add)
            }
            var tp = n(404);
            let tm = (e, t) => `${e}: ${t}`,
                tv = "data-" + es("framerAppearId");
            var tg = n(4394);
            let ty = e => 1e3 * e,
                tb = {
                    current: !1
                };

            function tx(e, t) {
                let n = performance.now(),
                    r = ({
                        timestamp: i
                    }) => {
                        let o = i - n;
                        o >= t && (tp.qY.read(r), e(o - t))
                    };
                return tp.Z_.read(r, !0), () => tp.qY.read(r)
            }
            let tw = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
                tj = e => t => 1 - e(1 - t),
                tO = e => e * e,
                tP = tj(tO),
                tE = tw(tO);
            var tS = n(4606);
            let tk = e => e,
                tT = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
                tA = e => 1 - Math.sin(Math.acos(e)),
                tC = tj(tA),
                tI = tw(tC),
                tR = (e = 1.525) => t => t * t * ((e + 1) * t - e),
                tL = tR(),
                tN = tj(tL),
                tD = tw(tL),
                tM = (e => {
                    let t = tR(void 0);
                    return e => (e *= 2) < 1 ? .5 * t(e) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
                })(),
                tV = {
                    linear: tk,
                    easeIn: tO,
                    easeInOut: tE,
                    easeOut: tP,
                    circIn: tA,
                    circInOut: tI,
                    circOut: tC,
                    backIn: tL,
                    backInOut: tD,
                    backOut: tN,
                    anticipate: tM
                },
                tF = e => {
                    if (Array.isArray(e)) {
                        (0, tg.k)(4 === e.length, "Cubic bezier arrays must contain four numerical values.");
                        let [t, n, r, i] = e;
                        return function (e, t, n, r) {
                            if (e === t && n === r) return tk;
                            let i = t => (function (e, t, n, r, i) {
                                let o, a;
                                let s = 0;
                                do(o = tT(a = t + (n - t) / 2, r, i) - e) > 0 ? n = a : t = a; while (Math.abs(o) > 1e-7 && ++s < 12);
                                return a
                            })(t, 0, 1, e, n);
                            return e => 0 === e || 1 === e ? e : tT(i(e), t, r)
                        }(t, n, r, i)
                    }
                    return "string" == typeof e ? ((0, tg.k)(void 0 !== tV[e], `Invalid easing type '${e}'`), tV[e]) : e
                },
                tz = e => Array.isArray(e) && "number" != typeof e[0];

            function tB({
                keyframes: e,
                ease: t = tE,
                times: n,
                duration: r = 300
            }) {
                e = [...e];
                let i = tB[0],
                    o = tz(t) ? t.map(tF) : tF(t),
                    a = {
                        done: !1,
                        value: i
                    },
                    s = (n && n.length === tB.length ? n : function (e) {
                        let t = e.length;
                        return e.map((e, n) => 0 !== n ? n / (t - 1) : 0)
                    }(e)).map(e => e * r);

                function l() {
                    var t;
                    return (0, tS.s)(s, e, {
                        ease: Array.isArray(o) ? o : (t = e).map(() => o || tE).splice(0, t.length - 1)
                    })
                }
                let u = l();
                return {
                    next: e => (a.value = u(e), a.done = e >= r, a),
                    flipTarget() {
                        e.reverse(), u = l()
                    }
                }
            }
            var tq = n(4169);

            function tU(e, t) {
                return e * Math.sqrt(1 - t * t)
            }
            var t_ = n(3038);
            let t$ = ["duration", "bounce"],
                tH = ["stiffness", "damping", "mass"];

            function tW(e, t) {
                return t.some(t => void 0 !== e[t])
            }

            function tZ({
                keyframes: e,
                restSpeed: t = 2,
                restDelta: n = .01,
                ...r
            }) {
                let i = e[0],
                    o = e[e.length - 1],
                    a = {
                        done: !1,
                        value: i
                    },
                    {
                        stiffness: s,
                        damping: l,
                        mass: u,
                        velocity: c,
                        duration: d,
                        isResolvedFromDuration: f
                    } = function (e) {
                        let t = {
                            velocity: 0,
                            stiffness: 100,
                            damping: 10,
                            mass: 1,
                            isResolvedFromDuration: !1,
                            ...e
                        };
                        if (!tW(e, tH) && tW(e, t$)) {
                            let n = function ({
                                duration: e = 800,
                                bounce: t = .25,
                                velocity: n = 0,
                                mass: r = 1
                            }) {
                                let i, o;
                                (0, tg.K)(e <= 1e4, "Spring duration must be 10 seconds or less");
                                let a = 1 - t;
                                a = (0, tq.u)(.05, 1, a), e = (0, tq.u)(.01, 10, e / 1e3), a < 1 ? (i = t => {
                                    let r = t * a,
                                        i = r * e,
                                        o = tU(t, a);
                                    return .001 - (r - n) / o * Math.exp(-i)
                                }, o = t => {
                                    let r = t * a,
                                        o = r * e,
                                        s = Math.pow(a, 2) * Math.pow(t, 2) * e,
                                        l = tU(Math.pow(t, 2), a),
                                        u = -i(t) + .001 > 0 ? -1 : 1;
                                    return u * ((o * n + n - s) * Math.exp(-o)) / l
                                }) : (i = t => {
                                    let r = Math.exp(-t * e),
                                        i = (t - n) * e + 1;
                                    return -.001 + r * i
                                }, o = t => {
                                    let r = Math.exp(-t * e),
                                        i = (n - t) * (e * e);
                                    return r * i
                                });
                                let s = 5 / e,
                                    l = function (e, t, n) {
                                        let r = n;
                                        for (let i = 1; i < 12; i++) r -= e(r) / t(r);
                                        return r
                                    }(i, o, s);
                                if (e *= 1e3, isNaN(l)) return {
                                    stiffness: 100,
                                    damping: 10,
                                    duration: e
                                }; {
                                    let u = Math.pow(l, 2) * r;
                                    return {
                                        stiffness: u,
                                        damping: 2 * a * Math.sqrt(r * u),
                                        duration: e
                                    }
                                }
                            }(e);
                            (t = {
                                ...t,
                                ...n,
                                velocity: 0,
                                mass: 1
                            }).isResolvedFromDuration = !0
                        }
                        return t
                    }(r),
                    h = tY,
                    p = c ? -(c / 1e3) : 0,
                    m = l / (2 * Math.sqrt(s * u));

                function v() {
                    let e = o - i,
                        t = Math.sqrt(s / u) / 1e3;
                    if (void 0 === n && (n = Math.min(Math.abs(o - i) / 100, .4)), m < 1) {
                        let r = tU(t, m);
                        h = n => o - Math.exp(-m * t * n) * ((p + m * t * e) / r * Math.sin(r * n) + e * Math.cos(r * n))
                    } else if (1 === m) h = n => o - Math.exp(-t * n) * (e + (p + t * e) * n);
                    else {
                        let a = t * Math.sqrt(m * m - 1);
                        h = n => {
                            let r = Math.min(a * n, 300);
                            return o - Math.exp(-m * t * n) * ((p + m * t * e) * Math.sinh(r) + a * e * Math.cosh(r)) / a
                        }
                    }
                }
                return v(), {
                    next(e) {
                        let r = h(e);
                        if (f) a.done = e >= d;
                        else {
                            let i = p;
                            if (0 !== e) {
                                if (m < 1) {
                                    let s = Math.max(0, e - 5);
                                    i = (0, t_.R)(r - h(s), e - s)
                                } else i = 0
                            }
                            let l = Math.abs(i) <= t,
                                u = Math.abs(o - r) <= n;
                            a.done = l && u
                        }
                        return a.value = a.done ? o : r, a
                    },
                    flipTarget() {
                        p = -p, [i, o] = [o, i], v()
                    }
                }
            }
            tZ.needsInterpolation = (e, t) => "string" == typeof e || "string" == typeof t;
            let tY = e => 0,
                tG = {
                    decay: function ({
                        keyframes: e = [0],
                        velocity: t = 0,
                        power: n = .8,
                        timeConstant: r = 350,
                        restDelta: i = .5,
                        modifyTarget: o
                    }) {
                        let a = e[0],
                            s = {
                                done: !1,
                                value: a
                            },
                            l = n * t,
                            u = a + l,
                            c = void 0 === o ? u : o(u);
                        return c !== u && (l = c - a), {
                            next(e) {
                                let t = -l * Math.exp(-e / r);
                                return s.done = !(t > i || t < -i), s.value = s.done ? c : c + t, s
                            },
                            flipTarget() {}
                        }
                    },
                    keyframes: tB,
                    tween: tB,
                    spring: tZ
                };

            function tK(e, t, n = 0) {
                return e - t - n
            }
            let tX = e => {
                let t = ({
                    delta: t
                }) => e(t);
                return {
                    start: () => tp.Z_.update(t, !0),
                    stop: () => tp.qY.update(t)
                }
            };

            function tJ({
                duration: e,
                driver: t = tX,
                elapsed: n = 0,
                repeat: r = 0,
                repeatType: i = "loop",
                repeatDelay: o = 0,
                keyframes: a,
                onPlay: s,
                onStop: l,
                onComplete: u,
                onRepeat: c,
                onUpdate: d,
                type: f = "keyframes",
                ...h
            }) {
                var p;
                let m, v, g;
                let y = 0,
                    b = e,
                    x = !1,
                    w = !0,
                    j = tG[a.length > 2 ? "keyframes" : f],
                    O = a[0],
                    P = a[a.length - 1];
                (null === (p = j.needsInterpolation) || void 0 === p ? void 0 : p.call(j, O, P)) && (g = (0, tS.s)([0, 100], [O, P], {
                    clamp: !1
                }), a = [0, 100]);
                let E = j({
                    ...h,
                    duration: e,
                    keyframes: a
                });
                return s && s(), (m = t(function (e) {
                    if (w || (e = -e), n += e, !x) {
                        let t = E.next(Math.max(0, n));
                        v = t.value, g && (v = g(v)), x = w ? t.done : n <= 0
                    }
                    if (d && d(v), x) {
                        if (0 === y && (b = void 0 !== b ? b : n), y < r) {
                            var a, s;
                            a = n, s = b, (w ? a >= s + o : a <= -o) && (y++, "reverse" === i ? n = function (e, t = 0, n = 0, r = !0) {
                                return r ? tK(t + -e, t, n) : t - (e - t) + n
                            }(n, b, o, w = y % 2 == 0) : (n = tK(n, b, o), "mirror" === i && E.flipTarget()), x = !1, c && c())
                        } else m.stop(), u && u()
                    }
                })).start(), {
                    stop() {
                        l && l(), m.stop()
                    }
                }
            }
            var tQ = n(7367);
            let t0 = () => ({
                    type: "spring",
                    stiffness: 500,
                    damping: 25,
                    restSpeed: 10
                }),
                t1 = e => ({
                    type: "spring",
                    stiffness: 550,
                    damping: 0 === e ? 2 * Math.sqrt(550) : 30,
                    restSpeed: 10
                }),
                t2 = () => ({
                    type: "keyframes",
                    ease: "linear",
                    duration: .3
                }),
                t5 = {
                    type: "keyframes",
                    duration: .8
                },
                t4 = {
                    x: t0,
                    y: t0,
                    z: t0,
                    rotate: t0,
                    rotateX: t0,
                    rotateY: t0,
                    rotateZ: t0,
                    scaleX: t1,
                    scaleY: t1,
                    scale: t1,
                    opacity: t2,
                    backgroundColor: t2,
                    color: t2,
                    default: t1
                },
                t3 = (e, {
                    keyframes: t
                }) => {
                    if (t.length > 2) return t5; {
                        let n = t4[e] || t4.default;
                        return n(t[1])
                    }
                },
                t6 = (e, t) => "zIndex" !== e && !!("number" == typeof t || Array.isArray(t) || "string" == typeof t && e8.P.test(t) && !t.startsWith("url("));

            function t8(e) {
                return 0 === e || "string" == typeof e && 0 === parseFloat(e) && -1 === e.indexOf(" ")
            }

            function t9(e) {
                return "number" == typeof e ? 0 : ta("", e)
            }

            function t7(e, t) {
                return e[t] || e.default || e
            }
            let ne = {
                    waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate")
                },
                nt = {},
                nn = {};
            for (let nr in ne) nn[nr] = () => (void 0 === nt[nr] && (nt[nr] = ne[nr]()), nt[nr]);
            let ni = new Set([]),
                no = (e, t, n, r = {}) => i => {
                    let o = t7(r, e) || {},
                        a = o.delay || r.delay || 0,
                        {
                            elapsed: s = 0
                        } = r;
                    s -= ty(a);
                    let l = function (e, t, n, r) {
                            let i = t6(t, n),
                                o = void 0 !== r.from ? r.from : e.get();
                            return ("none" === o && i && "string" == typeof n ? o = ta(t, n) : t8(o) && "string" == typeof n ? o = t9(n) : !Array.isArray(n) && t8(n) && "string" == typeof o && (n = t9(o)), Array.isArray(n)) ? (null === n[0] && (n[0] = o), n) : [o, n]
                        }(t, e, n, o),
                        u = l[0],
                        c = l[l.length - 1],
                        d = t6(e, u),
                        f = t6(e, c);
                    (0, tg.K)(d === f, `You are trying to animate ${e} from "${u}" to "${c}". ${u} is not an animatable value - to enable this animation set ${u} to a value animatable to ${c} via the \`style\` property.`);
                    let h = {
                        keyframes: l,
                        velocity: t.getVelocity(),
                        ...o,
                        elapsed: s,
                        onUpdate(e) {
                            t.set(e), o.onUpdate && o.onUpdate(e)
                        },
                        onComplete() {
                            i(), o.onComplete && o.onComplete()
                        }
                    };
                    if (!d || !f || tb.current || !1 === o.type) return function ({
                        keyframes: e,
                        elapsed: t,
                        onUpdate: n,
                        onComplete: r
                    }) {
                        let i = () => (n && n(e[e.length - 1]), r && r(), () => {});
                        return t ? tx(i, -t) : i()
                    }(h);
                    if ("inertia" === o.type) {
                        let p = function ({
                            keyframes: e,
                            velocity: t = 0,
                            min: n,
                            max: r,
                            power: i = .8,
                            timeConstant: o = 750,
                            bounceStiffness: a = 500,
                            bounceDamping: s = 10,
                            restDelta: l = 1,
                            modifyTarget: u,
                            driver: c,
                            onUpdate: d,
                            onComplete: f,
                            onStop: h
                        }) {
                            let p;
                            let m = e[0];

                            function v(e) {
                                return void 0 !== n && e < n || void 0 !== r && e > r
                            }

                            function g(e) {
                                return void 0 === n ? r : void 0 === r ? n : Math.abs(n - e) < Math.abs(r - e) ? n : r
                            }

                            function y(e) {
                                null == p || p.stop(), p = tJ({
                                    keyframes: [0, 1],
                                    velocity: 0,
                                    ...e,
                                    driver: c,
                                    onUpdate(t) {
                                        var n;
                                        null == d || d(t), null === (n = e.onUpdate) || void 0 === n || n.call(e, t)
                                    },
                                    onComplete: f,
                                    onStop: h
                                })
                            }

                            function b(e) {
                                y({
                                    type: "spring",
                                    stiffness: a,
                                    damping: s,
                                    restDelta: l,
                                    ...e
                                })
                            }
                            if (v(m)) b({
                                velocity: t,
                                keyframes: [m, g(m)]
                            });
                            else {
                                let x, w, j = i * t + m;
                                void 0 !== u && (j = u(j));
                                let O = g(j),
                                    P = O === n ? -1 : 1,
                                    E = e => {
                                        x = w, w = e, t = (0, t_.R)(e - x, tQ.w.delta), (1 === P && e > O || -1 === P && e < O) && b({
                                            keyframes: [e, O],
                                            velocity: t
                                        })
                                    };
                                y({
                                    type: "decay",
                                    keyframes: [m, 0],
                                    velocity: t,
                                    timeConstant: o,
                                    power: i,
                                    restDelta: l,
                                    modifyTarget: u,
                                    onUpdate: v(j) ? E : void 0
                                })
                            }
                            return {
                                stop: () => null == p ? void 0 : p.stop()
                            }
                        }(h);
                        return () => p.stop()
                    }! function ({
                        when: e,
                        delay: t,
                        delayChildren: n,
                        staggerChildren: r,
                        staggerDirection: i,
                        repeat: o,
                        repeatType: a,
                        repeatDelay: s,
                        from: l,
                        ...u
                    }) {
                        return !!Object.keys(u).length
                    }(o) && (h = {
                        ...h,
                        ...t3(e, h)
                    }), h.duration && (h.duration = ty(h.duration)), h.repeatDelay && (h.repeatDelay = ty(h.repeatDelay));
                    let m = ni.has(e) && nn.waapi() && t.owner && !t.owner.getProps().onUpdate && !h.repeat;
                    if (m) return () => {}; {
                        let v = tJ(h);
                        return () => v.stop()
                    }
                };

            function na(e, t, n = {}) {
                var r;
                let i = tf(e, t, n.custom),
                    {
                        transition: o = e.getDefaultTransition() || {}
                    } = i || {};
                n.transitionOverride && (o = n.transitionOverride);
                let a = i ? () => ns(e, i, n) : () => Promise.resolve(),
                    s = (null === (r = e.variantChildren) || void 0 === r ? void 0 : r.size) ? (r = 0) => {
                        let {
                            delayChildren: i = 0,
                            staggerChildren: a,
                            staggerDirection: s
                        } = o;
                        return function (e, t, n = 0, r = 0, i = 1, o) {
                            let a = [],
                                s = (e.variantChildren.size - 1) * r,
                                l = 1 === i ? (e = 0) => e * r : (e = 0) => s - e * r;
                            return Array.from(e.variantChildren).sort(nl).forEach((e, r) => {
                                a.push(na(e, t, {
                                    ...o,
                                    delay: n + l(r)
                                }).then(() => e.notify("AnimationComplete", t)))
                            }), Promise.all(a)
                        }(e, t, i + r, a, s, n)
                    } : () => Promise.resolve(),
                    {
                        when: l
                    } = o;
                if (!l) return Promise.all([a(), s(n.delay)]); {
                    let [u, c] = "beforeChildren" === l ? [a, s] : [s, a];
                    return u().then(c)
                }
            }

            function ns(e, t, {
                delay: n = 0,
                transitionOverride: r,
                type: i
            } = {}) {
                var o;
                let {
                    transition: a = e.getDefaultTransition(),
                    transitionEnd: s,
                    ...l
                } = e.makeTargetAnimatable(t), u = e.getValue("willChange");
                r && (a = r);
                let c = [],
                    d = i && (null === (o = e.animationState) || void 0 === o ? void 0 : o.getState()[i]);
                for (let f in l) {
                    let h = e.getValue(f),
                        p = l[f];
                    if (!h || void 0 === p || d && function ({
                            protectedKeys: e,
                            needsAnimating: t
                        }, n) {
                            let r = e.hasOwnProperty(n) && !0 !== t[n];
                            return t[n] = !1, r
                        }(d, f)) continue;
                    let m = {
                        delay: n,
                        elapsed: 0,
                        ...a
                    };
                    if (e.shouldReduceMotion && D.has(f) && (m = {
                            ...m,
                            type: !1,
                            delay: 0
                        }), !h.hasAnimated) {
                        let v = e.getProps()[tv];
                        v && (m.elapsed = function (e, t) {
                            let {
                                MotionAppearAnimations: n
                            } = window, r = tm(e, D.has(t) ? "transform" : t), i = n && n.get(r);
                            return i ? (tp.Z_.render(() => {
                                try {
                                    i.cancel(), n.delete(r)
                                } catch (e) {}
                            }), i.currentTime || 0) : 0
                        }(v, f))
                    }
                    let g = h.start(no(f, h, p, m));
                    th(u) && (u.add(f), g = g.then(() => u.remove(f))), c.push(g)
                }
                return Promise.all(c).then(() => {
                    s && function (e, t) {
                        let n = tf(e, t),
                            {
                                transitionEnd: r = {},
                                transition: i = {},
                                ...o
                            } = n ? e.makeTargetAnimatable(n, !1) : {};
                        for (let a in o = {
                                ...o,
                                ...r
                            }) {
                            var s;
                            let l = ev(o[a]);
                            s = a, e.hasValue(s) ? e.getValue(s).set(l) : e.addValue(s, (0, e6.B)(l))
                        }
                    }(e, s)
                })
            }

            function nl(e, t) {
                return e.sortNodePosition(t)
            }
            let nu = [a.Animate, a.InView, a.Focus, a.Hover, a.Tap, a.Drag, a.Exit],
                nc = [...nu].reverse(),
                nd = nu.length;

            function nf(e = !1) {
                return {
                    isActive: e,
                    protectedKeys: {},
                    needsAnimating: {},
                    prevResolvedValues: {}
                }
            }
            let nh = {
                    animation: e0(({
                        visualElement: e,
                        animate: t
                    }) => {
                        e.animationState || (e.animationState = function (e) {
                            let t = t => Promise.all(t.map(({
                                    animation: t,
                                    options: n
                                }) => (function (e, t, n = {}) {
                                    let r;
                                    if (e.notify("AnimationStart", t), Array.isArray(t)) {
                                        let i = t.map(t => na(e, t, n));
                                        r = Promise.all(i)
                                    } else if ("string" == typeof t) r = na(e, t, n);
                                    else {
                                        let o = "function" == typeof t ? tf(e, t, n.custom) : t;
                                        r = ns(e, o, n)
                                    }
                                    return r.then(() => e.notify("AnimationComplete", t))
                                })(e, t, n))),
                                n = {
                                    [a.Animate]: nf(!0),
                                    [a.InView]: nf(),
                                    [a.Hover]: nf(),
                                    [a.Tap]: nf(),
                                    [a.Drag]: nf(),
                                    [a.Focus]: nf(),
                                    [a.Exit]: nf()
                                },
                                r = !0,
                                i = (t, n) => {
                                    let r = tf(e, n);
                                    if (r) {
                                        let {
                                            transition: i,
                                            transitionEnd: o,
                                            ...a
                                        } = r;
                                        t = {
                                            ...t,
                                            ...a,
                                            ...o
                                        }
                                    }
                                    return t
                                };

                            function o(o, a) {
                                let s = e.getProps(),
                                    l = e.getVariantContext(!0) || {},
                                    u = [],
                                    c = new Set,
                                    d = {},
                                    f = 1 / 0;
                                for (let h = 0; h < nd; h++) {
                                    var p;
                                    let g = nc[h],
                                        y = n[g],
                                        b = void 0 !== s[g] ? s[g] : l[g],
                                        x = m(b),
                                        w = g === a ? y.isActive : null;
                                    !1 === w && (f = h);
                                    let j = b === l[g] && b !== s[g] && x;
                                    if (j && r && e.manuallyAnimateOnMount && (j = !1), y.protectedKeys = {
                                            ...d
                                        }, !y.isActive && null === w || !b && !y.prevProp || v(b) || "boolean" == typeof b) continue;
                                    let O = (p = y.prevProp, "string" == typeof b ? b !== p : !!Array.isArray(b) && !e5(b, p)),
                                        P = O || g === a && y.isActive && !j && x || h > f && x,
                                        E = Array.isArray(b) ? b : [b],
                                        S = E.reduce(i, {});
                                    !1 === w && (S = {});
                                    let {
                                        prevResolvedValues: k = {}
                                    } = y, T = {
                                        ...k,
                                        ...S
                                    }, A = e => {
                                        P = !0, c.delete(e), y.needsAnimating[e] = !0
                                    };
                                    for (let C in T) {
                                        let I = S[C],
                                            R = k[C];
                                        d.hasOwnProperty(C) || (I !== R ? ep(I) && ep(R) ? !e5(I, R) || O ? A(C) : y.protectedKeys[C] = !0 : void 0 !== I ? A(C) : c.add(C) : void 0 !== I && c.has(C) ? A(C) : y.protectedKeys[C] = !0)
                                    }
                                    y.prevProp = b, y.prevResolvedValues = S, y.isActive && (d = {
                                        ...d,
                                        ...S
                                    }), r && e.blockInitialAnimation && (P = !1), P && !j && u.push(...E.map(e => ({
                                        animation: e,
                                        options: {
                                            type: g,
                                            ...o
                                        }
                                    })))
                                }
                                if (c.size) {
                                    let L = {};
                                    c.forEach(t => {
                                        let n = e.getBaseTarget(t);
                                        void 0 !== n && (L[t] = n)
                                    }), u.push({
                                        animation: L
                                    })
                                }
                                let N = Boolean(u.length);
                                return r && !1 === s.initial && !e.manuallyAnimateOnMount && (N = !1), r = !1, N ? t(u) : Promise.resolve()
                            }
                            return {
                                animateChanges: o,
                                setActive: function (t, r, i) {
                                    var a;
                                    if (n[t].isActive === r) return Promise.resolve();
                                    null === (a = e.variantChildren) || void 0 === a || a.forEach(e => {
                                        var n;
                                        return null === (n = e.animationState) || void 0 === n ? void 0 : n.setActive(t, r)
                                    }), n[t].isActive = r;
                                    let s = o(i, t);
                                    for (let l in n) n[l].protectedKeys = {};
                                    return s
                                },
                                setAnimateFunction: function (n) {
                                    t = n(e)
                                },
                                getState: () => n
                            }
                        }(e)), v(t) && (0, l.useEffect)(() => t.subscribe(e), [t])
                    }),
                    exit: e0(e => {
                        let {
                            custom: t,
                            visualElement: n
                        } = e, [r, i] = (0, e2.oO)(), o = (0, l.useContext)(d.O);
                        (0, l.useEffect)(() => {
                            n.isPresent = r;
                            let e = n.animationState && n.animationState.setActive(a.Exit, !r, {
                                custom: o && o.custom || t
                            });
                            e && !r && e.then(i)
                        }, [r])
                    })
                },
                np = (e, t) => Math.abs(e - t);
            class nm {
                constructor(e, t, {
                    transformPagePoint: n
                } = {}) {
                    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
                            if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                            let e = ny(this.lastMoveEventInfo, this.history),
                                t = null !== this.startEvent,
                                n = function (e, t) {
                                    let n = np(e.x, t.x),
                                        r = np(e.y, t.y);
                                    return Math.sqrt(n ** 2 + r ** 2)
                                }(e.offset, {
                                    x: 0,
                                    y: 0
                                }) >= 3;
                            if (!t && !n) return;
                            let {
                                point: r
                            } = e, {
                                timestamp: i
                            } = tQ.w;
                            this.history.push({
                                ...r,
                                timestamp: i
                            });
                            let {
                                onStart: o,
                                onMove: a
                            } = this.handlers;
                            t || (o && o(this.lastMoveEvent, e), this.startEvent = this.lastMoveEvent), a && a(this.lastMoveEvent, e)
                        }, this.handlePointerMove = (e, t) => {
                            if (this.lastMoveEvent = e, this.lastMoveEventInfo = nv(t, this.transformPagePoint), eO(e) && 0 === e.buttons) {
                                this.handlePointerUp(e, t);
                                return
                            }
                            tp.Z_.update(this.updatePoint, !0)
                        }, this.handlePointerUp = (e, t) => {
                            this.end();
                            let {
                                onEnd: n,
                                onSessionEnd: r
                            } = this.handlers, i = ny(nv(t, this.transformPagePoint), this.history);
                            this.startEvent && n && n(e, i), r && r(e, i)
                        }, eP(e) && e.touches.length > 1) return;
                    this.handlers = t, this.transformPagePoint = n;
                    let r = eS(e),
                        i = nv(r, this.transformPagePoint),
                        {
                            point: o
                        } = i,
                        {
                            timestamp: a
                        } = tQ.w;
                    this.history = [{
                        ...o,
                        timestamp: a
                    }];
                    let {
                        onSessionStart: s
                    } = t;
                    s && s(e, ny(i, this.history)), this.removeListeners = (0, e$.z)(eN(window, "pointermove", this.handlePointerMove), eN(window, "pointerup", this.handlePointerUp), eN(window, "pointercancel", this.handlePointerUp))
                }
                updateHandlers(e) {
                    this.handlers = e
                }
                end() {
                    this.removeListeners && this.removeListeners(), tp.qY.update(this.updatePoint)
                }
            }

            function nv(e, t) {
                return t ? {
                    point: t(e.point)
                } : e
            }

            function ng(e, t) {
                return {
                    x: e.x - t.x,
                    y: e.y - t.y
                }
            }

            function ny({
                point: e
            }, t) {
                return {
                    point: e,
                    delta: ng(e, nb(t)),
                    offset: ng(e, t[0]),
                    velocity: function (e, t) {
                        if (e.length < 2) return {
                            x: 0,
                            y: 0
                        };
                        let n = e.length - 1,
                            r = null,
                            i = nb(e);
                        for (; n >= 0 && (r = e[n], !(i.timestamp - r.timestamp > ty(.1)));) n--;
                        if (!r) return {
                            x: 0,
                            y: 0
                        };
                        let o = (i.timestamp - r.timestamp) / 1e3;
                        if (0 === o) return {
                            x: 0,
                            y: 0
                        };
                        let a = {
                            x: (i.x - r.x) / o,
                            y: (i.y - r.y) / o
                        };
                        return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a
                    }(t, 0)
                }
            }

            function nb(e) {
                return e[e.length - 1]
            }
            var nx = n(3967),
                nw = n(22);

            function nj(e) {
                return e.max - e.min
            }

            function nO(e, t = 0, n = .01) {
                return Math.abs(e - t) <= n
            }

            function nP(e, t, n, r = .5) {
                e.origin = r, e.originPoint = (0, nw.C)(t.min, t.max, e.origin), e.scale = nj(n) / nj(t), (nO(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = (0, nw.C)(n.min, n.max, e.origin) - e.originPoint, (nO(e.translate) || isNaN(e.translate)) && (e.translate = 0)
            }

            function nE(e, t, n, r) {
                nP(e.x, t.x, n.x, null == r ? void 0 : r.originX), nP(e.y, t.y, n.y, null == r ? void 0 : r.originY)
            }

            function nS(e, t, n) {
                e.min = n.min + t.min, e.max = e.min + nj(t)
            }

            function nk(e, t, n) {
                e.min = t.min - n.min, e.max = e.min + nj(t)
            }

            function nT(e, t, n) {
                nk(e.x, t.x, n.x), nk(e.y, t.y, n.y)
            }

            function nA(e, t, n) {
                return {
                    min: void 0 !== t ? e.min + t : void 0,
                    max: void 0 !== n ? e.max + n - (e.max - e.min) : void 0
                }
            }

            function nC(e, t) {
                let n = t.min - e.min,
                    r = t.max - e.max;
                return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), {
                    min: n,
                    max: r
                }
            }

            function nI(e, t, n) {
                return {
                    min: nR(e, t),
                    max: nR(e, n)
                }
            }

            function nR(e, t) {
                return "number" == typeof e ? e : e[t] || 0
            }
            let nL = () => ({
                    translate: 0,
                    scale: 1,
                    origin: 0,
                    originPoint: 0
                }),
                nN = () => ({
                    x: nL(),
                    y: nL()
                }),
                nD = () => ({
                    min: 0,
                    max: 0
                }),
                nM = () => ({
                    x: nD(),
                    y: nD()
                });

            function nV(e) {
                return [e("x"), e("y")]
            }

            function nF({
                top: e,
                left: t,
                right: n,
                bottom: r
            }) {
                return {
                    x: {
                        min: t,
                        max: n
                    },
                    y: {
                        min: e,
                        max: r
                    }
                }
            }

            function nz(e) {
                return void 0 === e || 1 === e
            }

            function nB({
                scale: e,
                scaleX: t,
                scaleY: n
            }) {
                return !nz(e) || !nz(t) || !nz(n)
            }

            function nq(e) {
                return nB(e) || nU(e) || e.z || e.rotate || e.rotateX || e.rotateY
            }

            function nU(e) {
                var t, n;
                return (t = e.x) && "0%" !== t || (n = e.y) && "0%" !== n
            }

            function n_(e, t, n, r, i) {
                return void 0 !== i && (e = r + i * (e - r)), r + n * (e - r) + t
            }

            function n$(e, t = 0, n = 1, r, i) {
                e.min = n_(e.min, t, n, r, i), e.max = n_(e.max, t, n, r, i)
            }

            function nH(e, {
                x: t,
                y: n
            }) {
                n$(e.x, t.translate, t.scale, t.originPoint), n$(e.y, n.translate, n.scale, n.originPoint)
            }

            function nW(e) {
                return Number.isInteger(e) ? e : e > 1.0000000000001 || e < .999999999999 ? e : 1
            }

            function nZ(e, t) {
                e.min = e.min + t, e.max = e.max + t
            }

            function nY(e, t, [n, r, i]) {
                let o = void 0 !== t[i] ? t[i] : .5,
                    a = (0, nw.C)(e.min, e.max, o);
                n$(e, t[n], t[r], a, t.scale)
            }
            let nG = ["x", "scaleX", "originX"],
                nK = ["y", "scaleY", "originY"];

            function nX(e, t) {
                nY(e.x, t, nG), nY(e.y, t, nK)
            }

            function nJ(e, t) {
                return nF(function (e, t) {
                    if (!t) return e;
                    let n = t({
                            x: e.left,
                            y: e.top
                        }),
                        r = t({
                            x: e.right,
                            y: e.bottom
                        });
                    return {
                        top: n.y,
                        left: n.x,
                        bottom: r.y,
                        right: r.x
                    }
                }(e.getBoundingClientRect(), t))
            }
            let nQ = new WeakMap;
            class n0 {
                constructor(e) {
                    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
                        x: 0,
                        y: 0
                    }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = nM(), this.visualElement = e
                }
                start(e, {
                    snapToCursor: t = !1
                } = {}) {
                    if (!1 === this.visualElement.isPresent) return;
                    let n = e => {
                            this.stopAnimation(), t && this.snapToCursor(eS(e, "page").point)
                        },
                        r = (e, t) => {
                            var n;
                            let {
                                drag: r,
                                dragPropagation: i,
                                onDragStart: o
                            } = this.getProps();
                            (!r || i || (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = ez(r), this.openGlobalLock)) && (this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), nV(e => {
                                var t, n;
                                let r = this.getAxisMotionValue(e).get() || 0;
                                if (_.aQ.test(r)) {
                                    let i = null === (n = null === (t = this.visualElement.projection) || void 0 === t ? void 0 : t.layout) || void 0 === n ? void 0 : n.layoutBox[e];
                                    if (i) {
                                        let o = nj(i);
                                        r = o * (parseFloat(r) / 100)
                                    }
                                }
                                this.originPoint[e] = r
                            }), null == o || o(e, t), null === (n = this.visualElement.animationState) || void 0 === n || n.setActive(a.Drag, !0))
                        },
                        i = (e, t) => {
                            let {
                                dragPropagation: n,
                                dragDirectionLock: r,
                                onDirectionLock: i,
                                onDrag: o
                            } = this.getProps();
                            if (!n && !this.openGlobalLock) return;
                            let {
                                offset: a
                            } = t;
                            if (r && null === this.currentDirection) {
                                this.currentDirection = function (e, t = 10) {
                                    let n = null;
                                    return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n
                                }(a), null !== this.currentDirection && (null == i || i(this.currentDirection));
                                return
                            }
                            this.updateAxis("x", t.point, a), this.updateAxis("y", t.point, a), this.visualElement.render(), null == o || o(e, t)
                        },
                        o = (e, t) => this.stop(e, t);
                    this.panSession = new nm(e, {
                        onSessionStart: n,
                        onStart: r,
                        onMove: i,
                        onSessionEnd: o
                    }, {
                        transformPagePoint: this.visualElement.getTransformPagePoint()
                    })
                }
                stop(e, t) {
                    let n = this.isDragging;
                    if (this.cancel(), !n) return;
                    let {
                        velocity: r
                    } = t;
                    this.startAnimation(r);
                    let {
                        onDragEnd: i
                    } = this.getProps();
                    null == i || i(e, t)
                }
                cancel() {
                    var e, t;
                    this.isDragging = !1, this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !1), null === (e = this.panSession) || void 0 === e || e.end(), this.panSession = void 0;
                    let {
                        dragPropagation: n
                    } = this.getProps();
                    !n && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), null === (t = this.visualElement.animationState) || void 0 === t || t.setActive(a.Drag, !1)
                }
                updateAxis(e, t, n) {
                    let {
                        drag: r
                    } = this.getProps();
                    if (!n || !n1(e, r, this.currentDirection)) return;
                    let i = this.getAxisMotionValue(e),
                        o = this.originPoint[e] + n[e];
                    this.constraints && this.constraints[e] && (o = function (e, {
                        min: t,
                        max: n
                    }, r) {
                        return void 0 !== t && e < t ? e = r ? (0, nw.C)(t, e, r.min) : Math.max(e, t) : void 0 !== n && e > n && (e = r ? (0, nw.C)(n, e, r.max) : Math.min(e, n)), e
                    }(o, this.constraints[e], this.elastic[e])), i.set(o)
                }
                resolveConstraints() {
                    let {
                        dragConstraints: e,
                        dragElastic: t
                    } = this.getProps(), {
                        layout: n
                    } = this.visualElement.projection || {}, r = this.constraints;
                    e && p(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : e && n ? this.constraints = function (e, {
                        top: t,
                        left: n,
                        bottom: r,
                        right: i
                    }) {
                        return {
                            x: nA(e.x, n, i),
                            y: nA(e.y, t, r)
                        }
                    }(n.layoutBox, e) : this.constraints = !1, this.elastic = function (e = .35) {
                        return !1 === e ? e = 0 : !0 === e && (e = .35), {
                            x: nI(e, "left", "right"),
                            y: nI(e, "top", "bottom")
                        }
                    }(t), r !== this.constraints && n && this.constraints && !this.hasMutatedConstraints && nV(e => {
                        this.getAxisMotionValue(e) && (this.constraints[e] = function (e, t) {
                            let n = {};
                            return void 0 !== t.min && (n.min = t.min - e.min), void 0 !== t.max && (n.max = t.max - e.min), n
                        }(n.layoutBox[e], this.constraints[e]))
                    })
                }
                resolveRefConstraints() {
                    var e;
                    let {
                        dragConstraints: t,
                        onMeasureDragConstraints: n
                    } = this.getProps();
                    if (!t || !p(t)) return !1;
                    let r = t.current;
                    (0, tg.k)(null !== r, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
                    let {
                        projection: i
                    } = this.visualElement;
                    if (!i || !i.layout) return !1;
                    let o = function (e, t, n) {
                            let r = nJ(e, n),
                                {
                                    scroll: i
                                } = t;
                            return i && (nZ(r.x, i.offset.x), nZ(r.y, i.offset.y)), r
                        }(r, i.root, this.visualElement.getTransformPagePoint()),
                        a = {
                            x: nC((e = i.layout.layoutBox).x, o.x),
                            y: nC(e.y, o.y)
                        };
                    if (n) {
                        let s = n(function ({
                            x: e,
                            y: t
                        }) {
                            return {
                                top: t.min,
                                right: e.max,
                                bottom: t.max,
                                left: e.min
                            }
                        }(a));
                        this.hasMutatedConstraints = !!s, s && (a = nF(s))
                    }
                    return a
                }
                startAnimation(e) {
                    let {
                        drag: t,
                        dragMomentum: n,
                        dragElastic: r,
                        dragTransition: i,
                        dragSnapToOrigin: o,
                        onDragTransitionEnd: a
                    } = this.getProps(), s = this.constraints || {}, l = nV(a => {
                        if (!n1(a, t, this.currentDirection)) return;
                        let l = (null == s ? void 0 : s[a]) || {};
                        o && (l = {
                            min: 0,
                            max: 0
                        });
                        let u = {
                            type: "inertia",
                            velocity: n ? e[a] : 0,
                            bounceStiffness: r ? 200 : 1e6,
                            bounceDamping: r ? 40 : 1e7,
                            timeConstant: 750,
                            restDelta: 1,
                            restSpeed: 10,
                            ...i,
                            ...l
                        };
                        return this.startAxisValueAnimation(a, u)
                    });
                    return Promise.all(l).then(a)
                }
                startAxisValueAnimation(e, t) {
                    let n = this.getAxisMotionValue(e);
                    return n.start(no(e, n, 0, t))
                }
                stopAnimation() {
                    nV(e => this.getAxisMotionValue(e).stop())
                }
                getAxisMotionValue(e) {
                    var t;
                    let n = "_drag" + e.toUpperCase(),
                        r = this.visualElement.getProps()[n];
                    return r || this.visualElement.getValue(e, (null === (t = this.visualElement.getProps().initial) || void 0 === t ? void 0 : t[e]) || 0)
                }
                snapToCursor(e) {
                    nV(t => {
                        let {
                            drag: n
                        } = this.getProps();
                        if (!n1(t, n, this.currentDirection)) return;
                        let {
                            projection: r
                        } = this.visualElement, i = this.getAxisMotionValue(t);
                        if (r && r.layout) {
                            let {
                                min: o,
                                max: a
                            } = r.layout.layoutBox[t];
                            i.set(e[t] - (0, nw.C)(o, a, .5))
                        }
                    })
                }
                scalePositionWithinConstraints() {
                    var e;
                    if (!this.visualElement.current) return;
                    let {
                        drag: t,
                        dragConstraints: n
                    } = this.getProps(), {
                        projection: r
                    } = this.visualElement;
                    if (!p(n) || !r || !this.constraints) return;
                    this.stopAnimation();
                    let i = {
                        x: 0,
                        y: 0
                    };
                    nV(e => {
                        let t = this.getAxisMotionValue(e);
                        if (t) {
                            let n = t.get();
                            i[e] = function (e, t) {
                                let n = .5,
                                    r = nj(e),
                                    i = nj(t);
                                return i > r ? n = (0, nx.Y)(t.min, t.max - r, e.min) : r > i && (n = (0, nx.Y)(e.min, e.max - i, t.min)), (0, tq.u)(0, 1, n)
                            }({
                                min: n,
                                max: n
                            }, this.constraints[e])
                        }
                    });
                    let {
                        transformTemplate: o
                    } = this.visualElement.getProps();
                    this.visualElement.current.style.transform = o ? o({}, "") : "none", null === (e = r.root) || void 0 === e || e.updateScroll(), r.updateLayout(), this.resolveConstraints(), nV(e => {
                        if (!n1(e, t, null)) return;
                        let n = this.getAxisMotionValue(e),
                            {
                                min: r,
                                max: o
                            } = this.constraints[e];
                        n.set((0, nw.C)(r, o, i[e]))
                    })
                }
                addListeners() {
                    var e;
                    if (!this.visualElement.current) return;
                    nQ.set(this.visualElement, this);
                    let t = this.visualElement.current,
                        n = eN(t, "pointerdown", e => {
                            let {
                                drag: t,
                                dragListener: n = !0
                            } = this.getProps();
                            t && n && this.start(e)
                        }),
                        r = () => {
                            let {
                                dragConstraints: e
                            } = this.getProps();
                            p(e) && (this.constraints = this.resolveRefConstraints())
                        },
                        {
                            projection: i
                        } = this.visualElement,
                        o = i.addEventListener("measure", r);
                    i && !i.layout && (null === (e = i.root) || void 0 === e || e.updateScroll(), i.updateLayout()), r();
                    let a = ew(window, "resize", () => this.scalePositionWithinConstraints()),
                        s = i.addEventListener("didUpdate", ({
                            delta: e,
                            hasLayoutChanged: t
                        }) => {
                            this.isDragging && t && (nV(t => {
                                let n = this.getAxisMotionValue(t);
                                n && (this.originPoint[t] += e[t].translate, n.set(n.get() + e[t].translate))
                            }), this.visualElement.render())
                        });
                    return () => {
                        a(), n(), o(), null == s || s()
                    }
                }
                getProps() {
                    let e = this.visualElement.getProps(),
                        {
                            drag: t = !1,
                            dragDirectionLock: n = !1,
                            dragPropagation: r = !1,
                            dragConstraints: i = !1,
                            dragElastic: o = .35,
                            dragMomentum: a = !0
                        } = e;
                    return {
                        ...e,
                        drag: t,
                        dragDirectionLock: n,
                        dragPropagation: r,
                        dragConstraints: i,
                        dragElastic: o,
                        dragMomentum: a
                    }
                }
            }

            function n1(e, t, n) {
                return (!0 === t || t === e) && (null === n || n === e)
            }
            let n2 = {
                pan: e0(function ({
                    onPan: e,
                    onPanStart: t,
                    onPanEnd: n,
                    onPanSessionStart: r,
                    visualElement: i
                }) {
                    let o = (0, l.useRef)(null),
                        {
                            transformPagePoint: a
                        } = (0, l.useContext)(u._),
                        s = {
                            onSessionStart: r,
                            onStart: t,
                            onMove: e,
                            onEnd(e, t) {
                                o.current = null, n && n(e, t)
                            }
                        };
                    (0, l.useEffect)(() => {
                        null !== o.current && o.current.updateHandlers(s)
                    }), eD(i, "pointerdown", (e || t || n || r) && function (e) {
                        o.current = new nm(e, s, {
                            transformPagePoint: a
                        })
                    }), (0, e_.z)(() => o.current && o.current.end())
                }),
                drag: e0(function (e) {
                    let {
                        dragControls: t,
                        visualElement: n
                    } = e, r = (0, P.h)(() => new n0(n));
                    (0, l.useEffect)(() => t && t.subscribe(r), [r, t]), (0, l.useEffect)(() => r.addListeners(), [r])
                })
            };

            function n5(e) {
                return "string" == typeof e && e.startsWith("var(--")
            }
            let n4 = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;

            function n3(e, t, n = 1) {
                (0, tg.k)(n <= 4, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
                let [r, i] = function (e) {
                    let t = n4.exec(e);
                    if (!t) return [, ];
                    let [, n, r] = t;
                    return [n, r]
                }(e);
                if (!r) return;
                let o = window.getComputedStyle(t).getPropertyValue(r);
                return o ? o.trim() : n5(i) ? n3(i, t, n + 1) : i
            }
            let n6 = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y"]),
                n8 = e => n6.has(e),
                n9 = e => Object.keys(e).some(n8),
                n7 = (e, t) => {
                    e.set(t, !1), e.set(t)
                },
                re = e => e === U.Rx || e === _.px;
            (o = s || (s = {})).width = "width", o.height = "height", o.left = "left", o.right = "right", o.top = "top", o.bottom = "bottom";
            let rt = (e, t) => parseFloat(e.split(", ")[t]),
                rn = (e, t) => (n, {
                    transform: r
                }) => {
                    if ("none" === r || !r) return 0;
                    let i = r.match(/^matrix3d\((.+)\)$/);
                    if (i) return rt(i[1], t); {
                        let o = r.match(/^matrix\((.+)\)$/);
                        return o ? rt(o[1], e) : 0
                    }
                },
                rr = new Set(["x", "y", "z"]),
                ri = N.filter(e => !rr.has(e)),
                ro = {
                    width: ({
                        x: e
                    }, {
                        paddingLeft: t = "0",
                        paddingRight: n = "0"
                    }) => e.max - e.min - parseFloat(t) - parseFloat(n),
                    height: ({
                        y: e
                    }, {
                        paddingTop: t = "0",
                        paddingBottom: n = "0"
                    }) => e.max - e.min - parseFloat(t) - parseFloat(n),
                    top: (e, {
                        top: t
                    }) => parseFloat(t),
                    left: (e, {
                        left: t
                    }) => parseFloat(t),
                    bottom: ({
                        y: e
                    }, {
                        top: t
                    }) => parseFloat(t) + (e.max - e.min),
                    right: ({
                        x: e
                    }, {
                        left: t
                    }) => parseFloat(t) + (e.max - e.min),
                    x: rn(4, 13),
                    y: rn(5, 14)
                },
                ra = (e, t, n) => {
                    let r = t.measureViewportBox(),
                        i = t.current,
                        o = getComputedStyle(i),
                        {
                            display: a
                        } = o,
                        s = {};
                    "none" === a && t.setStaticValue("display", e.display || "block"), n.forEach(e => {
                        s[e] = ro[e](r, o)
                    }), t.render();
                    let l = t.measureViewportBox();
                    return n.forEach(n => {
                        let r = t.getValue(n);
                        n7(r, s[n]), e[n] = ro[n](l, o)
                    }), e
                },
                rs = (e, t, n = {}, r = {}) => {
                    t = {
                        ...t
                    }, r = {
                        ...r
                    };
                    let i = Object.keys(t).filter(n8),
                        o = [],
                        a = !1,
                        s = [];
                    if (i.forEach(i => {
                            let l;
                            let u = e.getValue(i);
                            if (!e.hasValue(i)) return;
                            let c = n[i],
                                d = tu(c),
                                f = t[i];
                            if (ep(f)) {
                                let h = f.length,
                                    p = null === f[0] ? 1 : 0;
                                d = tu(c = f[p]);
                                for (let m = p; m < h; m++) l ? (0, tg.k)(tu(f[m]) === l, "All keyframes must be of the same type") : (l = tu(f[m]), (0, tg.k)(l === d || re(d) && re(l), "Keyframes must be of the same dimension as the current value"))
                            } else l = tu(f);
                            if (d !== l) {
                                if (re(d) && re(l)) {
                                    let v = u.get();
                                    "string" == typeof v && u.set(parseFloat(v)), "string" == typeof f ? t[i] = parseFloat(f) : Array.isArray(f) && l === _.px && (t[i] = f.map(parseFloat))
                                } else(null == d ? void 0 : d.transform) && (null == l ? void 0 : l.transform) && (0 === c || 0 === f) ? 0 === c ? u.set(l.transform(c)) : t[i] = d.transform(f) : (a || (o = function (e) {
                                    let t = [];
                                    return ri.forEach(n => {
                                        let r = e.getValue(n);
                                        void 0 !== r && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0))
                                    }), t.length && e.render(), t
                                }(e), a = !0), s.push(i), r[i] = void 0 !== r[i] ? r[i] : t[i], n7(u, f))
                            }
                        }), !s.length) return {
                        target: t,
                        transitionEnd: r
                    }; {
                        let l = s.indexOf("height") >= 0 ? window.pageYOffset : null,
                            u = ra(t, e, s);
                        return o.length && o.forEach(([t, n]) => {
                            e.getValue(t).set(n)
                        }), e.render(), O.j && null !== l && window.scrollTo({
                            top: l
                        }), {
                            target: u,
                            transitionEnd: r
                        }
                    }
                },
                rl = (e, t, n, r) => {
                    var i, o;
                    let a = function (e, {
                        ...t
                    }, n) {
                        let r = e.current;
                        if (!(r instanceof Element)) return {
                            target: t,
                            transitionEnd: n
                        };
                        for (let i in n && (n = {
                                ...n
                            }), e.values.forEach(e => {
                                let t = e.get();
                                if (!n5(t)) return;
                                let n = n3(t, r);
                                n && e.set(n)
                            }), t) {
                            let o = t[i];
                            if (!n5(o)) continue;
                            let a = n3(o, r);
                            a && (t[i] = a, n && void 0 === n[i] && (n[i] = o))
                        }
                        return {
                            target: t,
                            transitionEnd: n
                        }
                    }(e, t, r);
                    return t = a.target, r = a.transitionEnd, i = t, o = r, n9(i) ? rs(e, i, n, o) : {
                        target: i,
                        transitionEnd: o
                    }
                },
                ru = {
                    current: null
                },
                rc = {
                    current: !1
                };
            var rd = n(1560);
            let rf = Object.keys(j),
                rh = rf.length,
                rp = ["AnimationStart", "AnimationComplete", "Update", "Unmount", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
            class rm {
                constructor({
                    parent: e,
                    props: t,
                    reducedMotionConfig: n,
                    visualState: r
                }, i = {}) {
                    this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.isPresent = !0, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
                        this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
                    }, this.scheduleRender = () => tp.Z_.render(this.render, !1, !0);
                    let {
                        latestValues: o,
                        renderState: a
                    } = r;
                    this.latestValues = o, this.baseTarget = {
                        ...o
                    }, this.initialValues = t.initial ? {
                        ...o
                    } : {}, this.renderState = a, this.parent = e, this.props = t, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = n, this.options = i, this.isControllingVariants = y(t), this.isVariantNode = b(t), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = Boolean(e && e.current);
                    let {
                        willChange: s,
                        ...l
                    } = this.scrapeMotionValuesFromProps(t);
                    for (let u in l) {
                        let c = l[u];
                        void 0 !== o[u] && V(c) && (c.set(o[u], !1), th(s) && s.add(u))
                    }
                }
                scrapeMotionValuesFromProps(e) {
                    return {}
                }
                mount(e) {
                    var t;
                    this.current = e, this.projection && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = null === (t = this.parent) || void 0 === t ? void 0 : t.addVariantChild(this)), this.values.forEach((e, t) => this.bindToMotionValue(t, e)), rc.current || function () {
                        if (rc.current = !0, O.j) {
                            if (window.matchMedia) {
                                let e = window.matchMedia("(prefers-reduced-motion)"),
                                    t = () => ru.current = e.matches;
                                e.addListener(t), t()
                            } else ru.current = !1
                        }
                    }(), this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || ru.current), this.parent && this.parent.children.add(this), this.setProps(this.props)
                }
                unmount() {
                    var e, t, n;
                    for (let r in null === (e = this.projection) || void 0 === e || e.unmount(), tp.qY.update(this.notifyUpdate), tp.qY.render(this.render), this.valueSubscriptions.forEach(e => e()), null === (t = this.removeFromVariantTree) || void 0 === t || t.call(this), null === (n = this.parent) || void 0 === n || n.children.delete(this), this.events) this.events[r].clear();
                    this.current = null
                }
                bindToMotionValue(e, t) {
                    let n = D.has(e),
                        r = t.onChange(t => {
                            this.latestValues[e] = t, this.props.onUpdate && tp.Z_.update(this.notifyUpdate, !1, !0), n && this.projection && (this.projection.isTransformDirty = !0)
                        }),
                        i = t.onRenderRequest(this.scheduleRender);
                    this.valueSubscriptions.set(e, () => {
                        r(), i()
                    })
                }
                sortNodePosition(e) {
                    return this.current && this.sortInstanceNodePosition && this.type === e.type ? this.sortInstanceNodePosition(this.current, e.current) : 0
                }
                loadFeatures(e, t, n, r, i, o) {
                    let a = [];
                    "production" !== eH.O && n && t && (0, tg.k)(!1, "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.");
                    for (let s = 0; s < rh; s++) {
                        let u = rf[s],
                            {
                                isEnabled: c,
                                Component: d
                            } = j[u];
                        c(e) && d && a.push((0, l.createElement)(d, {
                            key: u,
                            ...e,
                            visualElement: this
                        }))
                    }
                    if (!this.projection && i) {
                        this.projection = new i(r, this.latestValues, this.parent && this.parent.projection);
                        let {
                            layoutId: f,
                            layout: h,
                            drag: m,
                            dragConstraints: v,
                            layoutScroll: g
                        } = e;
                        this.projection.setOptions({
                            layoutId: f,
                            layout: h,
                            alwaysMeasureLayout: Boolean(m) || v && p(v),
                            visualElement: this,
                            scheduleRender: () => this.scheduleRender(),
                            animationType: "string" == typeof h ? h : "both",
                            initialPromotionConfig: o,
                            layoutScroll: g
                        })
                    }
                    return a
                }
                triggerBuild() {
                    this.build(this.renderState, this.latestValues, this.options, this.props)
                }
                measureViewportBox() {
                    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : nM()
                }
                getStaticValue(e) {
                    return this.latestValues[e]
                }
                setStaticValue(e, t) {
                    this.latestValues[e] = t
                }
                makeTargetAnimatable(e, t = !0) {
                    return this.makeTargetAnimatableFromInstance(e, this.props, t)
                }
                setProps(e) {
                    (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.props = e;
                    for (let t = 0; t < rp.length; t++) {
                        let n = rp[t];
                        this.propEventSubscriptions[n] && (this.propEventSubscriptions[n](), delete this.propEventSubscriptions[n]);
                        let r = e["on" + n];
                        r && (this.propEventSubscriptions[n] = this.on(n, r))
                    }
                    this.prevMotionValues = function (e, t, n) {
                        let {
                            willChange: r
                        } = t;
                        for (let i in t) {
                            let o = t[i],
                                a = n[i];
                            if (V(o)) e.addValue(i, o), th(r) && r.add(i);
                            else if (V(a)) e.addValue(i, (0, e6.B)(o)), th(r) && r.remove(i);
                            else if (a !== o) {
                                if (e.hasValue(i)) {
                                    let s = e.getValue(i);
                                    s.hasAnimated || s.set(o)
                                } else {
                                    let l = e.getStaticValue(i);
                                    e.addValue(i, (0, e6.B)(void 0 !== l ? l : o))
                                }
                            }
                        }
                        for (let u in n) void 0 === t[u] && e.removeValue(u);
                        return t
                    }(this, this.scrapeMotionValuesFromProps(e), this.prevMotionValues)
                }
                getProps() {
                    return this.props
                }
                getVariant(e) {
                    var t;
                    return null === (t = this.props.variants) || void 0 === t ? void 0 : t[e]
                }
                getDefaultTransition() {
                    return this.props.transition
                }
                getTransformPagePoint() {
                    return this.props.transformPagePoint
                }
                getClosestVariantNode() {
                    var e;
                    return this.isVariantNode ? this : null === (e = this.parent) || void 0 === e ? void 0 : e.getClosestVariantNode()
                }
                getVariantContext(e = !1) {
                    var t, n;
                    if (e) return null === (t = this.parent) || void 0 === t ? void 0 : t.getVariantContext();
                    if (!this.isControllingVariants) {
                        let r = (null === (n = this.parent) || void 0 === n ? void 0 : n.getVariantContext()) || {};
                        return void 0 !== this.props.initial && (r.initial = this.props.initial), r
                    }
                    let i = {};
                    for (let o = 0; o < rg; o++) {
                        let a = rv[o],
                            s = this.props[a];
                        (m(s) || !1 === s) && (i[a] = s)
                    }
                    return i
                }
                addVariantChild(e) {
                    var t;
                    let n = this.getClosestVariantNode();
                    if (n) return null === (t = n.variantChildren) || void 0 === t || t.add(e), () => n.variantChildren.delete(e)
                }
                addValue(e, t) {
                    this.hasValue(e) && this.removeValue(e), this.values.set(e, t), this.latestValues[e] = t.get(), this.bindToMotionValue(e, t)
                }
                removeValue(e) {
                    var t;
                    this.values.delete(e), null === (t = this.valueSubscriptions.get(e)) || void 0 === t || t(), this.valueSubscriptions.delete(e), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState)
                }
                hasValue(e) {
                    return this.values.has(e)
                }
                getValue(e, t) {
                    if (this.props.values && this.props.values[e]) return this.props.values[e];
                    let n = this.values.get(e);
                    return void 0 === n && void 0 !== t && (n = (0, e6.B)(t), this.addValue(e, n)), n
                }
                readValue(e) {
                    return void 0 === this.latestValues[e] && this.current ? this.readValueFromInstance(this.current, e, this.options) : this.latestValues[e]
                }
                setBaseTarget(e, t) {
                    this.baseTarget[e] = t
                }
                getBaseTarget(e) {
                    var t;
                    let {
                        initial: n
                    } = this.props, r = "string" == typeof n || "object" == typeof n ? null === (t = eh(this.props, n)) || void 0 === t ? void 0 : t[e] : void 0;
                    if (n && void 0 !== r) return r;
                    let i = this.getBaseTargetFromProps(this.props, e);
                    return void 0 === i || V(i) ? void 0 !== this.initialValues[e] && void 0 === r ? void 0 : this.baseTarget[e] : i
                }
                on(e, t) {
                    return this.events[e] || (this.events[e] = new rd.L), this.events[e].add(t)
                }
                notify(e, ...t) {
                    var n;
                    null === (n = this.events[e]) || void 0 === n || n.notify(...t)
                }
            }
            let rv = ["initial", ...nu],
                rg = rv.length;
            class ry extends rm {
                sortInstanceNodePosition(e, t) {
                    return 2 & e.compareDocumentPosition(t) ? 1 : -1
                }
                getBaseTargetFromProps(e, t) {
                    var n;
                    return null === (n = e.style) || void 0 === n ? void 0 : n[t]
                }
                removeValueFromRenderState(e, {
                    vars: t,
                    style: n
                }) {
                    delete t[e], delete n[e]
                }
                makeTargetAnimatableFromInstance({
                    transition: e,
                    transitionEnd: t,
                    ...n
                }, {
                    transformValues: r
                }, i) {
                    let o = function (e, t, n) {
                        var r;
                        let i = {};
                        for (let o in e) {
                            let a = function (e, t) {
                                if (!t) return;
                                let n = t[e] || t.default || t;
                                return n.from
                            }(o, t);
                            i[o] = void 0 !== a ? a : null === (r = n.getValue(o)) || void 0 === r ? void 0 : r.get()
                        }
                        return i
                    }(n, e || {}, this);
                    if (r && (t && (t = r(t)), n && (n = r(n)), o && (o = r(o))), i) {
                        ! function (e, t, n) {
                            var r, i;
                            let o = Object.keys(t).filter(t => !e.hasValue(t)),
                                a = o.length;
                            if (a)
                                for (let s = 0; s < a; s++) {
                                    let l = o[s],
                                        u = t[l],
                                        c = null;
                                    Array.isArray(u) && (c = u[0]), null === c && (c = null !== (i = null !== (r = n[l]) && void 0 !== r ? r : e.readValue(l)) && void 0 !== i ? i : t[l]), null != c && ("string" == typeof c && (e4(c) || e3(c)) ? c = parseFloat(c) : !td(c) && e8.P.test(u) && (c = ta(l, u)), e.addValue(l, (0, e6.B)(c)), void 0 === n[l] && (n[l] = c), null !== c && e.setBaseTarget(l, c))
                                }
                        }(this, n, o);
                        let a = rl(this, n, o, t);
                        t = a.transitionEnd, n = a.target
                    }
                    return {
                        transition: e,
                        transitionEnd: t,
                        ...n
                    }
                }
            }
            class rb extends ry {
                readValueFromInstance(e, t) {
                    if (D.has(t)) {
                        let n = to(t);
                        return n && n.default || 0
                    } {
                        let r = window.getComputedStyle(e),
                            i = (B(t) ? r.getPropertyValue(t) : r[t]) || 0;
                        return "string" == typeof i ? i.trim() : i
                    }
                }
                measureInstanceViewportBox(e, {
                    transformPagePoint: t
                }) {
                    return nJ(e, t)
                }
                build(e, t, n, r) {
                    W(e, t, n, r.transformTemplate)
                }
                scrapeMotionValuesFromProps(e) {
                    return ed(e)
                }
                renderInstance(e, t, n, r) {
                    el(e, t, n, r)
                }
            }
            class rx extends ry {
                constructor() {
                    super(...arguments), this.isSVGTag = !1
                }
                getBaseTargetFromProps(e, t) {
                    return e[t]
                }
                readValueFromInstance(e, t) {
                    var n;
                    return D.has(t) ? (null === (n = to(t)) || void 0 === n ? void 0 : n.default) || 0 : (t = eu.has(t) ? t : es(t), e.getAttribute(t))
                }
                measureInstanceViewportBox() {
                    return nM()
                }
                scrapeMotionValuesFromProps(e) {
                    return ef(e)
                }
                build(e, t, n, r) {
                    er(e, t, n, this.isSVGTag, r.transformTemplate)
                }
                renderInstance(e, t, n, r) {
                    ec(e, t, n, r)
                }
                mount(e) {
                    this.isSVGTag = eo(e.tagName), super.mount(e)
                }
            }
            let rw = (e, t) => R(e) ? new rx(t, {
                enableHardwareAcceleration: !1
            }) : new rb(t, {
                enableHardwareAcceleration: !0
            });

            function rj(e, t) {
                return t.max === t.min ? 0 : e / (t.max - t.min) * 100
            }
            let rO = {
                    correct(e, t) {
                        if (!t.target) return e;
                        if ("string" == typeof e) {
                            if (!_.px.test(e)) return e;
                            e = parseFloat(e)
                        }
                        let n = rj(e, t.target.x),
                            r = rj(e, t.target.y);
                        return `${n}% ${r}%`
                    }
                },
                rP = "_$css";
            class rE extends l.Component {
                componentDidMount() {
                    let {
                        visualElement: e,
                        layoutGroup: t,
                        switchLayoutGroup: n,
                        layoutId: r
                    } = this.props, {
                        projection: i
                    } = e;
                    Object.assign(L, rS), i && (t.group && t.group.add(i), n && n.register && r && n.register(i), i.root.didUpdate(), i.addEventListener("animationComplete", () => {
                        this.safeToRemove()
                    }), i.setOptions({
                        ...i.options,
                        onExitComplete: () => this.safeToRemove()
                    })), E.hasEverUpdated = !0
                }
                getSnapshotBeforeUpdate(e) {
                    let {
                        layoutDependency: t,
                        visualElement: n,
                        drag: r,
                        isPresent: i
                    } = this.props, o = n.projection;
                    return o && (o.isPresent = i, r || e.layoutDependency !== t || void 0 === t ? o.willUpdate() : this.safeToRemove(), e.isPresent === i || (i ? o.promote() : o.relegate() || tp.Z_.postRender(() => {
                        var e;
                        (null === (e = o.getStack()) || void 0 === e ? void 0 : e.members.length) || this.safeToRemove()
                    }))), null
                }
                componentDidUpdate() {
                    let {
                        projection: e
                    } = this.props.visualElement;
                    e && (e.root.didUpdate(), !e.currentAnimation && e.isLead() && this.safeToRemove())
                }
                componentWillUnmount() {
                    let {
                        visualElement: e,
                        layoutGroup: t,
                        switchLayoutGroup: n
                    } = this.props, {
                        projection: r
                    } = e;
                    r && (r.scheduleCheckAfterUnmount(), (null == t ? void 0 : t.group) && t.group.remove(r), (null == n ? void 0 : n.deregister) && n.deregister(r))
                }
                safeToRemove() {
                    let {
                        safeToRemove: e
                    } = this.props;
                    null == e || e()
                }
                render() {
                    return null
                }
            }
            let rS = {
                    borderRadius: {
                        ...rO,
                        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
                    },
                    borderTopLeftRadius: rO,
                    borderTopRightRadius: rO,
                    borderBottomLeftRadius: rO,
                    borderBottomRightRadius: rO,
                    boxShadow: {
                        correct(e, {
                            treeScale: t,
                            projectionDelta: n
                        }) {
                            let r = e,
                                i = e.includes("var("),
                                o = [];
                            i && (e = e.replace(n4, e => (o.push(e), rP)));
                            let a = e8.P.parse(e);
                            if (a.length > 5) return r;
                            let s = e8.P.createTransformer(e),
                                l = "number" != typeof a[0] ? 1 : 0,
                                u = n.x.scale * t.x,
                                c = n.y.scale * t.y;
                            a[0 + l] /= u, a[1 + l] /= c;
                            let d = (0, nw.C)(u, c, .5);
                            "number" == typeof a[2 + l] && (a[2 + l] /= d), "number" == typeof a[3 + l] && (a[3 + l] /= d);
                            let f = s(a);
                            if (i) {
                                let h = 0;
                                f = f.replace(rP, () => {
                                    let e = o[h];
                                    return h++, e
                                })
                            }
                            return f
                        }
                    }
                },
                rk = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
                rT = rk.length,
                rA = e => "string" == typeof e ? parseFloat(e) : e,
                rC = e => "number" == typeof e || _.px.test(e);

            function rI(e, t) {
                return void 0 !== e[t] ? e[t] : e.borderRadius
            }
            let rR = rN(0, .5, tC),
                rL = rN(.5, .95, tk);

            function rN(e, t, n) {
                return r => r < e ? 0 : r > t ? 1 : n((0, nx.Y)(e, t, r))
            }

            function rD(e, t) {
                e.min = t.min, e.max = t.max
            }

            function rM(e, t) {
                rD(e.x, t.x), rD(e.y, t.y)
            }

            function rV(e, t, n, r, i) {
                return e -= t, e = r + 1 / n * (e - r), void 0 !== i && (e = r + 1 / i * (e - r)), e
            }

            function rF(e, t, [n, r, i], o, a) {
                ! function (e, t = 0, n = 1, r = .5, i, o = e, a = e) {
                    if (_.aQ.test(t)) {
                        t = parseFloat(t);
                        let s = (0, nw.C)(a.min, a.max, t / 100);
                        t = s - a.min
                    }
                    if ("number" != typeof t) return;
                    let l = (0, nw.C)(o.min, o.max, r);
                    e === o && (l -= t), e.min = rV(e.min, t, n, l, i), e.max = rV(e.max, t, n, l, i)
                }(e, t[n], t[r], t[i], t.scale, o, a)
            }
            let rz = ["x", "scaleX", "originX"],
                rB = ["y", "scaleY", "originY"];

            function rq(e, t, n, r) {
                rF(e.x, t, rz, null == n ? void 0 : n.x, null == r ? void 0 : r.x), rF(e.y, t, rB, null == n ? void 0 : n.y, null == r ? void 0 : r.y)
            }

            function rU(e) {
                return 0 === e.translate && 1 === e.scale
            }

            function r_(e) {
                return rU(e.x) && rU(e.y)
            }

            function r$(e, t) {
                return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max
            }

            function rH(e) {
                return nj(e.x) / nj(e.y)
            }
            var rW = n(10);
            class rZ {
                constructor() {
                    this.members = []
                }
                add(e) {
                    (0, rW.y4)(this.members, e), e.scheduleRender()
                }
                remove(e) {
                    if ((0, rW.cl)(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
                        let t = this.members[this.members.length - 1];
                        t && this.promote(t)
                    }
                }
                relegate(e) {
                    let t;
                    let n = this.members.findIndex(t => e === t);
                    if (0 === n) return !1;
                    for (let r = n; r >= 0; r--) {
                        let i = this.members[r];
                        if (!1 !== i.isPresent) {
                            t = i;
                            break
                        }
                    }
                    return !!t && (this.promote(t), !0)
                }
                promote(e, t) {
                    var n;
                    let r = this.lead;
                    if (e !== r && (this.prevLead = r, this.lead = e, e.show(), r)) {
                        r.instance && r.scheduleRender(), e.scheduleRender(), e.resumeFrom = r, t && (e.resumeFrom.preserveOpacity = !0), r.snapshot && (e.snapshot = r.snapshot, e.snapshot.latestValues = r.animationValues || r.latestValues), (null === (n = e.root) || void 0 === n ? void 0 : n.isUpdating) && (e.isLayoutDirty = !0);
                        let {
                            crossfade: i
                        } = e.options;
                        !1 === i && r.hide()
                    }
                }
                exitAnimationComplete() {
                    this.members.forEach(e => {
                        var t, n, r, i, o;
                        null === (n = (t = e.options).onExitComplete) || void 0 === n || n.call(t), null === (o = null === (r = e.resumingFrom) || void 0 === r ? void 0 : (i = r.options).onExitComplete) || void 0 === o || o.call(i)
                    })
                }
                scheduleRender() {
                    this.members.forEach(e => {
                        e.instance && e.scheduleRender(!1)
                    })
                }
                removeLeadSnapshot() {
                    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
                }
            }

            function rY(e, t, n) {
                let r = "",
                    i = e.x.translate / t.x,
                    o = e.y.translate / t.y;
                if ((i || o) && (r = `translate3d(${i}px, ${o}px, 0) `), (1 !== t.x || 1 !== t.y) && (r += `scale(${1/t.x}, ${1/t.y}) `), n) {
                    let {
                        rotate: a,
                        rotateX: s,
                        rotateY: l
                    } = n;
                    a && (r += `rotate(${a}deg) `), s && (r += `rotateX(${s}deg) `), l && (r += `rotateY(${l}deg) `)
                }
                let u = e.x.scale * t.x,
                    c = e.y.scale * t.y;
                return (1 !== u || 1 !== c) && (r += `scale(${u}, ${c})`), r || "none"
            }
            let rG = (e, t) => e.depth - t.depth;
            class rK {
                constructor() {
                    this.children = [], this.isDirty = !1
                }
                add(e) {
                    (0, rW.y4)(this.children, e), this.isDirty = !0
                }
                remove(e) {
                    (0, rW.cl)(this.children, e), this.isDirty = !0
                }
                forEach(e) {
                    this.isDirty && this.children.sort(rG), this.isDirty = !1, this.children.forEach(e)
                }
            }
            let rX = ["", "X", "Y", "Z"],
                rJ = 0;

            function rQ({
                attachResizeListener: e,
                defaultParent: t,
                measureScroll: n,
                checkIsScrollRoot: r,
                resetTransform: i
            }) {
                return class {
                    constructor(e, n = {}, r = null == t ? void 0 : t()) {
                        this.id = rJ++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isTransformDirty = !1, this.isProjectionDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = {
                            x: 1,
                            y: 1
                        }, this.eventHandlers = new Map, this.potentialNodes = new Map, this.checkUpdateFailed = () => {
                            this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
                        }, this.updateProjection = () => {
                            this.nodes.forEach(r2), this.nodes.forEach(r8), this.nodes.forEach(r9)
                        }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.elementId = e, this.latestValues = n, this.root = r ? r.root || r : this, this.path = r ? [...r.path, r] : [], this.parent = r, this.depth = r ? r.depth + 1 : 0, e && this.root.registerPotentialNode(e, this);
                        for (let i = 0; i < this.path.length; i++) this.path[i].shouldResetTransform = !0;
                        this.root === this && (this.nodes = new rK)
                    }
                    addEventListener(e, t) {
                        return this.eventHandlers.has(e) || this.eventHandlers.set(e, new rd.L), this.eventHandlers.get(e).add(t)
                    }
                    notifyListeners(e, ...t) {
                        let n = this.eventHandlers.get(e);
                        null == n || n.notify(...t)
                    }
                    hasListeners(e) {
                        return this.eventHandlers.has(e)
                    }
                    registerPotentialNode(e, t) {
                        this.potentialNodes.set(e, t)
                    }
                    mount(t, n = !1) {
                        var r;
                        if (this.instance) return;
                        this.isSVG = t instanceof SVGElement && "svg" !== t.tagName, this.instance = t;
                        let {
                            layoutId: i,
                            layout: o,
                            visualElement: a
                        } = this.options;
                        if (a && !a.current && a.mount(t), this.root.nodes.add(this), null === (r = this.parent) || void 0 === r || r.children.add(this), this.elementId && this.root.potentialNodes.delete(this.elementId), n && (o || i) && (this.isLayoutDirty = !0), e) {
                            let s;
                            let l = () => this.root.updateBlockedByResize = !1;
                            e(t, () => {
                                this.root.updateBlockedByResize = !0, s && s(), s = tx(l, 250), E.hasAnimatedSinceResize && (E.hasAnimatedSinceResize = !1, this.nodes.forEach(r6))
                            })
                        }
                        i && this.root.registerSharedNode(i, this), !1 !== this.options.animate && a && (i || o) && this.addEventListener("didUpdate", ({
                            delta: e,
                            hasLayoutChanged: t,
                            hasRelativeTargetChanged: n,
                            layout: r
                        }) => {
                            var i, o, s, l, u;
                            if (this.isTreeAnimationBlocked()) {
                                this.target = void 0, this.relativeTarget = void 0;
                                return
                            }
                            let c = null !== (o = null !== (i = this.options.transition) && void 0 !== i ? i : a.getDefaultTransition()) && void 0 !== o ? o : io,
                                {
                                    onLayoutAnimationStart: d,
                                    onLayoutAnimationComplete: f
                                } = a.getProps(),
                                h = !this.targetLayout || !r$(this.targetLayout, r) || n,
                                p = !t && n;
                            if ((null === (s = this.resumeFrom) || void 0 === s ? void 0 : s.instance) || p || t && (h || !this.currentAnimation)) {
                                this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(e, p);
                                let m = {
                                    ...t7(c, "layout"),
                                    onPlay: d,
                                    onComplete: f
                                };
                                a.shouldReduceMotion && (m.delay = 0, m.type = !1), this.startAnimation(m)
                            } else t || 0 !== this.animationProgress || r6(this), this.isLead() && (null === (u = (l = this.options).onExitComplete) || void 0 === u || u.call(l));
                            this.targetLayout = r
                        })
                    }
                    unmount() {
                        var e, t;
                        this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this), null === (e = this.getStack()) || void 0 === e || e.remove(this), null === (t = this.parent) || void 0 === t || t.children.delete(this), this.instance = void 0, tp.qY.preRender(this.updateProjection)
                    }
                    blockUpdate() {
                        this.updateManuallyBlocked = !0
                    }
                    unblockUpdate() {
                        this.updateManuallyBlocked = !1
                    }
                    isUpdateBlocked() {
                        return this.updateManuallyBlocked || this.updateBlockedByResize
                    }
                    isTreeAnimationBlocked() {
                        var e;
                        return this.isAnimationBlocked || (null === (e = this.parent) || void 0 === e ? void 0 : e.isTreeAnimationBlocked()) || !1
                    }
                    startUpdate() {
                        var e;
                        !this.isUpdateBlocked() && (this.isUpdating = !0, null === (e = this.nodes) || void 0 === e || e.forEach(r7), this.animationId++)
                    }
                    willUpdate(e = !0) {
                        var t, n, r;
                        if (this.root.isUpdateBlocked()) {
                            null === (n = (t = this.options).onExitComplete) || void 0 === n || n.call(t);
                            return
                        }
                        if (this.root.isUpdating || this.root.startUpdate(), this.isLayoutDirty) return;
                        this.isLayoutDirty = !0;
                        for (let i = 0; i < this.path.length; i++) {
                            let o = this.path[i];
                            o.shouldResetTransform = !0, o.updateScroll("snapshot")
                        }
                        let {
                            layoutId: a,
                            layout: s
                        } = this.options;
                        if (void 0 === a && !s) return;
                        let l = null === (r = this.options.visualElement) || void 0 === r ? void 0 : r.getProps().transformTemplate;
                        this.prevTransformTemplateValue = null == l ? void 0 : l(this.latestValues, ""), this.updateSnapshot(), e && this.notifyListeners("willUpdate")
                    }
                    didUpdate() {
                        let e = this.isUpdateBlocked();
                        if (e) {
                            this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(r4);
                            return
                        }
                        this.isUpdating && (this.isUpdating = !1, this.potentialNodes.size && (this.potentialNodes.forEach(ia), this.potentialNodes.clear()), this.nodes.forEach(r3), this.nodes.forEach(r0), this.nodes.forEach(r1), this.clearAllSnapshots(), tp.iW.update(), tp.iW.preRender(), tp.iW.render())
                    }
                    clearAllSnapshots() {
                        this.nodes.forEach(r5), this.sharedNodes.forEach(ie)
                    }
                    scheduleUpdateProjection() {
                        tp.Z_.preRender(this.updateProjection, !1, !0)
                    }
                    scheduleCheckAfterUnmount() {
                        tp.Z_.postRender(() => {
                            this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
                        })
                    }
                    updateSnapshot() {
                        !this.snapshot && this.instance && (this.snapshot = this.measure())
                    }
                    updateLayout() {
                        var e;
                        if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
                        if (this.resumeFrom && !this.resumeFrom.instance)
                            for (let t = 0; t < this.path.length; t++) {
                                let n = this.path[t];
                                n.updateScroll()
                            }
                        let r = this.layout;
                        this.layout = this.measure(!1), this.layoutCorrected = nM(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox), null === (e = this.options.visualElement) || void 0 === e || e.notify("LayoutMeasure", this.layout.layoutBox, null == r ? void 0 : r.layoutBox)
                    }
                    updateScroll(e = "measure") {
                        let t = Boolean(this.options.layoutScroll && this.instance);
                        this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === e && (t = !1), t && (this.scroll = {
                            animationId: this.root.animationId,
                            phase: e,
                            isRoot: r(this.instance),
                            offset: n(this.instance)
                        })
                    }
                    resetTransform() {
                        var e;
                        if (!i) return;
                        let t = this.isLayoutDirty || this.shouldResetTransform,
                            n = this.projectionDelta && !r_(this.projectionDelta),
                            r = null === (e = this.options.visualElement) || void 0 === e ? void 0 : e.getProps().transformTemplate,
                            o = null == r ? void 0 : r(this.latestValues, ""),
                            a = o !== this.prevTransformTemplateValue;
                        t && (n || nq(this.latestValues) || a) && (i(this.instance, o), this.shouldResetTransform = !1, this.scheduleRender())
                    }
                    measure(e = !0) {
                        var t;
                        let n = this.measurePageBox(),
                            r = this.removeElementScroll(n);
                        return e && (r = this.removeTransform(r)), is((t = r).x), is(t.y), {
                            animationId: this.root.animationId,
                            measuredBox: n,
                            layoutBox: r,
                            latestValues: {},
                            source: this.id
                        }
                    }
                    measurePageBox() {
                        let {
                            visualElement: e
                        } = this.options;
                        if (!e) return nM();
                        let t = e.measureViewportBox(),
                            {
                                scroll: n
                            } = this.root;
                        return n && (nZ(t.x, n.offset.x), nZ(t.y, n.offset.y)), t
                    }
                    removeElementScroll(e) {
                        let t = nM();
                        rM(t, e);
                        for (let n = 0; n < this.path.length; n++) {
                            let r = this.path[n],
                                {
                                    scroll: i,
                                    options: o
                                } = r;
                            if (r !== this.root && i && o.layoutScroll) {
                                if (i.isRoot) {
                                    rM(t, e);
                                    let {
                                        scroll: a
                                    } = this.root;
                                    a && (nZ(t.x, -a.offset.x), nZ(t.y, -a.offset.y))
                                }
                                nZ(t.x, i.offset.x), nZ(t.y, i.offset.y)
                            }
                        }
                        return t
                    }
                    applyTransform(e, t = !1) {
                        let n = nM();
                        rM(n, e);
                        for (let r = 0; r < this.path.length; r++) {
                            let i = this.path[r];
                            !t && i.options.layoutScroll && i.scroll && i !== i.root && nX(n, {
                                x: -i.scroll.offset.x,
                                y: -i.scroll.offset.y
                            }), nq(i.latestValues) && nX(n, i.latestValues)
                        }
                        return nq(this.latestValues) && nX(n, this.latestValues), n
                    }
                    removeTransform(e) {
                        var t;
                        let n = nM();
                        rM(n, e);
                        for (let r = 0; r < this.path.length; r++) {
                            let i = this.path[r];
                            if (!i.instance || !nq(i.latestValues)) continue;
                            nB(i.latestValues) && i.updateSnapshot();
                            let o = nM(),
                                a = i.measurePageBox();
                            rM(o, a), rq(n, i.latestValues, null === (t = i.snapshot) || void 0 === t ? void 0 : t.layoutBox, o)
                        }
                        return nq(this.latestValues) && rq(n, this.latestValues), n
                    }
                    setTargetDelta(e) {
                        this.targetDelta = e, this.isProjectionDirty = !0, this.root.scheduleUpdateProjection()
                    }
                    setOptions(e) {
                        this.options = {
                            ...this.options,
                            ...e,
                            crossfade: void 0 === e.crossfade || e.crossfade
                        }
                    }
                    clearMeasurements() {
                        this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
                    }
                    resolveTargetDelta() {
                        var e, t, n, r;
                        let i = this.getLead();
                        if (this.isProjectionDirty || (this.isProjectionDirty = i.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = i.isTransformDirty), !this.isProjectionDirty && !this.attemptToResolveRelativeTarget) return;
                        let {
                            layout: o,
                            layoutId: a
                        } = this.options;
                        if (this.layout && (o || a)) {
                            if (!this.targetDelta && !this.relativeTarget) {
                                let s = this.getClosestProjectingParent();
                                s && s.layout ? (this.relativeParent = s, this.relativeTarget = nM(), this.relativeTargetOrigin = nM(), nT(this.relativeTargetOrigin, this.layout.layoutBox, s.layout.layoutBox), rM(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                            }
                            if ((this.relativeTarget || this.targetDelta) && ((this.target || (this.target = nM(), this.targetWithTransforms = nM()), this.relativeTarget && this.relativeTargetOrigin && (null === (e = this.relativeParent) || void 0 === e ? void 0 : e.target)) ? (t = this.target, n = this.relativeTarget, r = this.relativeParent.target, nS(t.x, n.x, r.x), nS(t.y, n.y, r.y)) : this.targetDelta ? (Boolean(this.resumingFrom) ? this.target = this.applyTransform(this.layout.layoutBox) : rM(this.target, this.layout.layoutBox), nH(this.target, this.targetDelta)) : rM(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
                                this.attemptToResolveRelativeTarget = !1;
                                let l = this.getClosestProjectingParent();
                                l && Boolean(l.resumingFrom) === Boolean(this.resumingFrom) && !l.options.layoutScroll && l.target ? (this.relativeParent = l, this.relativeTarget = nM(), this.relativeTargetOrigin = nM(), nT(this.relativeTargetOrigin, this.target, l.target), rM(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                            }
                        }
                    }
                    getClosestProjectingParent() {
                        if (!(!this.parent || nB(this.parent.latestValues) || nU(this.parent.latestValues))) return (this.parent.relativeTarget || this.parent.targetDelta) && this.parent.layout ? this.parent : this.parent.getClosestProjectingParent()
                    }
                    calcProjection() {
                        var e;
                        let {
                            isProjectionDirty: t,
                            isTransformDirty: n
                        } = this;
                        this.isProjectionDirty = this.isTransformDirty = !1;
                        let r = this.getLead(),
                            i = Boolean(this.resumingFrom) || this !== r,
                            o = !0;
                        if (t && (o = !1), i && n && (o = !1), o) return;
                        let {
                            layout: a,
                            layoutId: s
                        } = this.options;
                        if (this.isTreeAnimating = Boolean((null === (e = this.parent) || void 0 === e ? void 0 : e.isTreeAnimating) || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(a || s)) return;
                        rM(this.layoutCorrected, this.layout.layoutBox),
                            function (e, t, n, r = !1) {
                                var i, o;
                                let a, s;
                                let l = n.length;
                                if (l) {
                                    t.x = t.y = 1;
                                    for (let u = 0; u < l; u++) s = (a = n[u]).projectionDelta, (null === (o = null === (i = a.instance) || void 0 === i ? void 0 : i.style) || void 0 === o ? void 0 : o.display) !== "contents" && (r && a.options.layoutScroll && a.scroll && a !== a.root && nX(e, {
                                        x: -a.scroll.offset.x,
                                        y: -a.scroll.offset.y
                                    }), s && (t.x *= s.x.scale, t.y *= s.y.scale, nH(e, s)), r && nq(a.latestValues) && nX(e, a.latestValues));
                                    t.x = nW(t.x), t.y = nW(t.y)
                                }
                            }(this.layoutCorrected, this.treeScale, this.path, i);
                        let {
                            target: l
                        } = r;
                        if (!l) return;
                        this.projectionDelta || (this.projectionDelta = nN(), this.projectionDeltaWithTransform = nN());
                        let u = this.treeScale.x,
                            c = this.treeScale.y,
                            d = this.projectionTransform;
                        nE(this.projectionDelta, this.layoutCorrected, l, this.latestValues), this.projectionTransform = rY(this.projectionDelta, this.treeScale), (this.projectionTransform !== d || this.treeScale.x !== u || this.treeScale.y !== c) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", l))
                    }
                    hide() {
                        this.isVisible = !1
                    }
                    show() {
                        this.isVisible = !0
                    }
                    scheduleRender(e = !0) {
                        var t, n, r;
                        null === (n = (t = this.options).scheduleRender) || void 0 === n || n.call(t), e && (null === (r = this.getStack()) || void 0 === r || r.scheduleRender()), this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
                    }
                    setAnimationOrigin(e, t = !1) {
                        var n, r;
                        let i = this.snapshot,
                            o = (null == i ? void 0 : i.latestValues) || {},
                            a = {
                                ...this.latestValues
                            },
                            s = nN();
                        this.relativeTarget = this.relativeTargetOrigin = void 0, this.attemptToResolveRelativeTarget = !t;
                        let l = nM(),
                            u = (null == i ? void 0 : i.source) !== (null === (n = this.layout) || void 0 === n ? void 0 : n.source),
                            c = 1 >= ((null === (r = this.getStack()) || void 0 === r ? void 0 : r.members.length) || 0),
                            d = Boolean(u && !c && !0 === this.options.crossfade && !this.path.some(ii));
                        this.animationProgress = 0, this.mixTargetDelta = t => {
                            var n, r, i;
                            let f = t / 1e3;
                            it(s.x, e.x, f), it(s.y, e.y, f), this.setTargetDelta(s), this.relativeTarget && this.relativeTargetOrigin && this.layout && (null === (n = this.relativeParent) || void 0 === n ? void 0 : n.layout) && (nT(l, this.layout.layoutBox, this.relativeParent.layout.layoutBox), r = this.relativeTarget, i = this.relativeTargetOrigin, ir(r.x, i.x, l.x, f), ir(r.y, i.y, l.y, f)), u && (this.animationValues = a, function (e, t, n, r, i, o) {
                                i ? (e.opacity = (0, nw.C)(0, void 0 !== n.opacity ? n.opacity : 1, rR(r)), e.opacityExit = (0, nw.C)(void 0 !== t.opacity ? t.opacity : 1, 0, rL(r))) : o && (e.opacity = (0, nw.C)(void 0 !== t.opacity ? t.opacity : 1, void 0 !== n.opacity ? n.opacity : 1, r));
                                for (let a = 0; a < rT; a++) {
                                    let s = `border${rk[a]}Radius`,
                                        l = rI(t, s),
                                        u = rI(n, s);
                                    if (void 0 === l && void 0 === u) continue;
                                    l || (l = 0), u || (u = 0);
                                    let c = 0 === l || 0 === u || rC(l) === rC(u);
                                    c ? (e[s] = Math.max((0, nw.C)(rA(l), rA(u), r), 0), (_.aQ.test(u) || _.aQ.test(l)) && (e[s] += "%")) : e[s] = u
                                }(t.rotate || n.rotate) && (e.rotate = (0, nw.C)(t.rotate || 0, n.rotate || 0, r))
                            }(a, o, this.latestValues, f, d, c)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = f
                        }, this.mixTargetDelta(0)
                    }
                    startAnimation(e) {
                        var t, n;
                        this.notifyListeners("animationStart"), null === (t = this.currentAnimation) || void 0 === t || t.stop(), this.resumingFrom && (null === (n = this.resumingFrom.currentAnimation) || void 0 === n || n.stop()), this.pendingAnimation && (tp.qY.update(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = tp.Z_.update(() => {
                            E.hasAnimatedSinceResize = !0, this.currentAnimation = function (e, t, n = {}) {
                                let r = V(e) ? e : (0, e6.B)(e);
                                return r.start(no("", r, 1e3, n)), {
                                    stop: () => r.stop(),
                                    isAnimating: () => r.isAnimating()
                                }
                            }(0, 0, {
                                ...e,
                                onUpdate: t => {
                                    var n;
                                    this.mixTargetDelta(t), null === (n = e.onUpdate) || void 0 === n || n.call(e, t)
                                },
                                onComplete: () => {
                                    var t;
                                    null === (t = e.onComplete) || void 0 === t || t.call(e), this.completeAnimation()
                                }
                            }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
                        })
                    }
                    completeAnimation() {
                        var e;
                        this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0), null === (e = this.getStack()) || void 0 === e || e.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
                    }
                    finishAnimation() {
                        var e;
                        this.currentAnimation && (null === (e = this.mixTargetDelta) || void 0 === e || e.call(this, 1e3), this.currentAnimation.stop()), this.completeAnimation()
                    }
                    applyTransformsToTarget() {
                        let e = this.getLead(),
                            {
                                targetWithTransforms: t,
                                target: n,
                                layout: r,
                                latestValues: i
                            } = e;
                        if (t && n && r) {
                            if (this !== e && this.layout && r && il(this.options.animationType, this.layout.layoutBox, r.layoutBox)) {
                                n = this.target || nM();
                                let o = nj(this.layout.layoutBox.x);
                                n.x.min = e.target.x.min, n.x.max = n.x.min + o;
                                let a = nj(this.layout.layoutBox.y);
                                n.y.min = e.target.y.min, n.y.max = n.y.min + a
                            }
                            rM(t, n), nX(t, i), nE(this.projectionDeltaWithTransform, this.layoutCorrected, t, i)
                        }
                    }
                    registerSharedNode(e, t) {
                        var n, r, i;
                        this.sharedNodes.has(e) || this.sharedNodes.set(e, new rZ);
                        let o = this.sharedNodes.get(e);
                        o.add(t), t.promote({
                            transition: null === (n = t.options.initialPromotionConfig) || void 0 === n ? void 0 : n.transition,
                            preserveFollowOpacity: null === (i = null === (r = t.options.initialPromotionConfig) || void 0 === r ? void 0 : r.shouldPreserveFollowOpacity) || void 0 === i ? void 0 : i.call(r, t)
                        })
                    }
                    isLead() {
                        let e = this.getStack();
                        return !e || e.lead === this
                    }
                    getLead() {
                        var e;
                        let {
                            layoutId: t
                        } = this.options;
                        return t && (null === (e = this.getStack()) || void 0 === e ? void 0 : e.lead) || this
                    }
                    getPrevLead() {
                        var e;
                        let {
                            layoutId: t
                        } = this.options;
                        return t ? null === (e = this.getStack()) || void 0 === e ? void 0 : e.prevLead : void 0
                    }
                    getStack() {
                        let {
                            layoutId: e
                        } = this.options;
                        if (e) return this.root.sharedNodes.get(e)
                    }
                    promote({
                        needsReset: e,
                        transition: t,
                        preserveFollowOpacity: n
                    } = {}) {
                        let r = this.getStack();
                        r && r.promote(this, n), e && (this.projectionDelta = void 0, this.needsReset = !0), t && this.setOptions({
                            transition: t
                        })
                    }
                    relegate() {
                        let e = this.getStack();
                        return !!e && e.relegate(this)
                    }
                    resetRotation() {
                        let {
                            visualElement: e
                        } = this.options;
                        if (!e) return;
                        let t = !1,
                            {
                                latestValues: n
                            } = e;
                        if ((n.rotate || n.rotateX || n.rotateY || n.rotateZ) && (t = !0), !t) return;
                        let r = {};
                        for (let i = 0; i < rX.length; i++) {
                            let o = "rotate" + rX[i];
                            n[o] && (r[o] = n[o], e.setStaticValue(o, 0))
                        }
                        for (let a in null == e || e.render(), r) e.setStaticValue(a, r[a]);
                        e.scheduleRender()
                    }
                    getProjectionStyles(e = {}) {
                        var t, n, r;
                        let i = {};
                        if (!this.instance || this.isSVG) return i;
                        if (!this.isVisible) return {
                            visibility: "hidden"
                        };
                        i.visibility = "";
                        let o = null === (t = this.options.visualElement) || void 0 === t ? void 0 : t.getProps().transformTemplate;
                        if (this.needsReset) return this.needsReset = !1, i.opacity = "", i.pointerEvents = eg(e.pointerEvents) || "", i.transform = o ? o(this.latestValues, "") : "none", i;
                        let a = this.getLead();
                        if (!this.projectionDelta || !this.layout || !a.target) {
                            let s = {};
                            return this.options.layoutId && (s.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, s.pointerEvents = eg(e.pointerEvents) || ""), this.hasProjected && !nq(this.latestValues) && (s.transform = o ? o({}, "") : "none", this.hasProjected = !1), s
                        }
                        let l = a.animationValues || a.latestValues;
                        this.applyTransformsToTarget(), i.transform = rY(this.projectionDeltaWithTransform, this.treeScale, l), o && (i.transform = o(l, i.transform));
                        let {
                            x: u,
                            y: c
                        } = this.projectionDelta;
                        for (let d in i.transformOrigin = `${100*u.origin}% ${100*c.origin}% 0`, a.animationValues ? i.opacity = a === this ? null !== (r = null !== (n = l.opacity) && void 0 !== n ? n : this.latestValues.opacity) && void 0 !== r ? r : 1 : this.preserveOpacity ? this.latestValues.opacity : l.opacityExit : i.opacity = a === this ? void 0 !== l.opacity ? l.opacity : "" : void 0 !== l.opacityExit ? l.opacityExit : 0, L) {
                            if (void 0 === l[d]) continue;
                            let {
                                correct: f,
                                applyTo: h
                            } = L[d], p = f(l[d], a);
                            if (h) {
                                let m = h.length;
                                for (let v = 0; v < m; v++) i[h[v]] = p
                            } else i[d] = p
                        }
                        return this.options.layoutId && (i.pointerEvents = a === this ? eg(e.pointerEvents) || "" : "none"), i
                    }
                    clearSnapshot() {
                        this.resumeFrom = this.snapshot = void 0
                    }
                    resetTree() {
                        this.root.nodes.forEach(e => {
                            var t;
                            return null === (t = e.currentAnimation) || void 0 === t ? void 0 : t.stop()
                        }), this.root.nodes.forEach(r4), this.root.sharedNodes.clear()
                    }
                }
            }

            function r0(e) {
                e.updateLayout()
            }

            function r1(e) {
                var t, n, r;
                let i = (null === (t = e.resumeFrom) || void 0 === t ? void 0 : t.snapshot) || e.snapshot;
                if (e.isLead() && e.layout && i && e.hasListeners("didUpdate")) {
                    let {
                        layoutBox: o,
                        measuredBox: a
                    } = e.layout, {
                        animationType: s
                    } = e.options, l = i.source !== e.layout.source;
                    "size" === s ? nV(e => {
                        let t = l ? i.measuredBox[e] : i.layoutBox[e],
                            n = nj(t);
                        t.min = o[e].min, t.max = t.min + n
                    }) : il(s, i.layoutBox, o) && nV(e => {
                        let t = l ? i.measuredBox[e] : i.layoutBox[e],
                            n = nj(o[e]);
                        t.max = t.min + n
                    });
                    let u = nN();
                    nE(u, o, i.layoutBox);
                    let c = nN();
                    l ? nE(c, e.applyTransform(a, !0), i.measuredBox) : nE(c, o, i.layoutBox);
                    let d = !r_(u),
                        f = !1;
                    if (!e.resumeFrom) {
                        let h = e.getClosestProjectingParent();
                        if (h && !h.resumeFrom) {
                            let {
                                snapshot: p,
                                layout: m
                            } = h;
                            if (p && m) {
                                let v = nM();
                                nT(v, i.layoutBox, p.layoutBox);
                                let g = nM();
                                nT(g, o, m.layoutBox), r$(v, g) || (f = !0)
                            }
                        }
                    }
                    e.notifyListeners("didUpdate", {
                        layout: o,
                        snapshot: i,
                        delta: c,
                        layoutDelta: u,
                        hasLayoutChanged: d,
                        hasRelativeTargetChanged: f
                    })
                } else e.isLead() && (null === (r = (n = e.options).onExitComplete) || void 0 === r || r.call(n));
                e.options.transition = void 0
            }

            function r2(e) {
                e.isProjectionDirty || (e.isProjectionDirty = Boolean(e.parent && e.parent.isProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = Boolean(e.parent && e.parent.isTransformDirty))
            }

            function r5(e) {
                e.clearSnapshot()
            }

            function r4(e) {
                e.clearMeasurements()
            }

            function r3(e) {
                let {
                    visualElement: t
                } = e.options;
                (null == t ? void 0 : t.getProps().onBeforeLayoutMeasure) && t.notify("BeforeLayoutMeasure"), e.resetTransform()
            }

            function r6(e) {
                e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0
            }

            function r8(e) {
                e.resolveTargetDelta()
            }

            function r9(e) {
                e.calcProjection()
            }

            function r7(e) {
                e.resetRotation()
            }

            function ie(e) {
                e.removeLeadSnapshot()
            }

            function it(e, t, n) {
                e.translate = (0, nw.C)(t.translate, 0, n), e.scale = (0, nw.C)(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint
            }

            function ir(e, t, n, r) {
                e.min = (0, nw.C)(t.min, n.min, r), e.max = (0, nw.C)(t.max, n.max, r)
            }

            function ii(e) {
                return e.animationValues && void 0 !== e.animationValues.opacityExit
            }
            let io = {
                duration: .45,
                ease: [.4, 0, .1, 1]
            };

            function ia(e, t) {
                let n = e.root;
                for (let r = e.path.length - 1; r >= 0; r--)
                    if (Boolean(e.path[r].instance)) {
                        n = e.path[r];
                        break
                    } let i = n && n !== e.root ? n.instance : document,
                    o = i.querySelector(`[data-projection-id="${t}"]`);
                o && e.mount(o, !0)
            }

            function is(e) {
                e.min = Math.round(e.min), e.max = Math.round(e.max)
            }

            function il(e, t, n) {
                return "position" === e || "preserve-aspect" === e && !nO(rH(t), rH(n), .2)
            }
            let iu = rQ({
                    attachResizeListener: (e, t) => ew(e, "resize", t),
                    measureScroll: () => ({
                        x: document.documentElement.scrollLeft || document.body.scrollLeft,
                        y: document.documentElement.scrollTop || document.body.scrollTop
                    }),
                    checkIsScrollRoot: () => !0
                }),
                ic = {
                    current: void 0
                },
                id = rQ({
                    measureScroll: e => ({
                        x: e.scrollLeft,
                        y: e.scrollTop
                    }),
                    defaultParent() {
                        if (!ic.current) {
                            let e = new iu(0, {});
                            e.mount(window), e.setOptions({
                                layoutScroll: !0
                            }), ic.current = e
                        }
                        return ic.current
                    },
                    resetTransform(e, t) {
                        e.style.transform = void 0 !== t ? t : "none"
                    },
                    checkIsScrollRoot: e => Boolean("fixed" === window.getComputedStyle(e).position)
                }),
                ih = {
                    ...nh,
                    ...e1,
                    ...n2,
                    measureLayout: function (e) {
                        let [t, n] = (0, e2.oO)(), r = (0, l.useContext)(k.p);
                        return l.createElement(rE, {
                            ...e,
                            layoutGroup: r,
                            switchLayoutGroup: (0, l.useContext)(A),
                            isPresent: t,
                            safeToRemove: n
                        })
                    }
                },
                ip = function (e) {
                    function t(t, n = {}) {
                        return function ({
                            preloadedFeatures: e,
                            createVisualElement: t,
                            projectionNodeConstructor: n,
                            useRender: r,
                            useVisualState: i,
                            Component: o
                        }) {
                            e && function (e) {
                                for (let t in e) "projectionNodeConstructor" === t ? j.projectionNodeConstructor = e[t] : j[t].Component = e[t]
                            }(e);
                            let a = (0, l.forwardRef)(function (a, s) {
                                var v, g;
                                let b = {
                                        ...(0, l.useContext)(u._),
                                        ...a,
                                        layoutId: function ({
                                            layoutId: e
                                        }) {
                                            let t = (0, l.useContext)(k.p).id;
                                            return t && void 0 !== e ? t + "-" + e : e
                                        }(a)
                                    },
                                    {
                                        isStatic: w
                                    } = b,
                                    C = null,
                                    I = function (e) {
                                        let {
                                            initial: t,
                                            animate: n
                                        } = function (e, t) {
                                            if (y(e)) {
                                                let {
                                                    initial: n,
                                                    animate: r
                                                } = e;
                                                return {
                                                    initial: !1 === n || m(n) ? n : void 0,
                                                    animate: m(r) ? r : void 0
                                                }
                                            }
                                            return !1 !== e.inherit ? t : {}
                                        }(e, (0, l.useContext)(c));
                                        return (0, l.useMemo)(() => ({
                                            initial: t,
                                            animate: n
                                        }), [x(t), x(n)])
                                    }(a),
                                    R = w ? void 0 : (0, P.h)(() => {
                                        if (E.hasEverUpdated) return S++
                                    }),
                                    L = i(a, w);
                                if (!w && O.j) {
                                    I.visualElement = function (e, t, n, r) {
                                        let i = (0, l.useContext)(c).visualElement,
                                            o = (0, l.useContext)(h),
                                            a = (0, l.useContext)(d.O),
                                            s = (0, l.useContext)(u._).reducedMotion,
                                            p = (0, l.useRef)();
                                        r = r || o.renderer, !p.current && r && (p.current = r(e, {
                                            visualState: t,
                                            parent: i,
                                            props: n,
                                            presenceId: a ? a.id : void 0,
                                            blockInitialAnimation: !!a && !1 === a.initial,
                                            reducedMotionConfig: s
                                        }));
                                        let m = p.current;
                                        return (0, f.L)(() => {
                                            m && m.render()
                                        }), (0, l.useEffect)(() => {
                                            m && m.animationState && m.animationState.animateChanges()
                                        }), (0, f.L)(() => () => m && m.notify("Unmount"), []), m
                                    }(o, L, b, t);
                                    let N = (0, l.useContext)(h).strict,
                                        D = (0, l.useContext)(A);
                                    I.visualElement && (C = I.visualElement.loadFeatures(b, N, e, R, n || j.projectionNodeConstructor, D))
                                }
                                return l.createElement(T, {
                                    visualElement: I.visualElement,
                                    props: b
                                }, C, l.createElement(c.Provider, {
                                    value: I
                                }, r(o, a, R, (v = I.visualElement, g = s, (0, l.useCallback)(e => {
                                    e && L.mount && L.mount(e), v && (e ? v.mount(e) : v.unmount()), g && ("function" == typeof g ? g(e) : p(g) && (g.current = e))
                                }, [v])), L, w, I.visualElement)))
                            });
                            return a[C] = o, a
                        }(e(t, n))
                    }
                    if ("undefined" == typeof Proxy) return t;
                    let n = new Map;
                    return new Proxy(t, {
                        get: (e, r) => (n.has(r) || n.set(r, t(r)), n.get(r))
                    })
                }((e, t) => (function (e, {
                    forwardMotionProps: t = !1
                }, n, r, i) {
                    let o = R(e) ? eb : ex;
                    return {
                        ...o,
                        preloadedFeatures: n,
                        useRender: function (e = !1) {
                            let t = (t, n, r, i, {
                                latestValues: o
                            }, a) => {
                                let s = R(t) ? ea : G,
                                    u = s(n, o, a, t),
                                    c = function (e, t, n) {
                                        let r = {};
                                        for (let i in e)(J(i) || !0 === n && X(i) || !t && !X(i) || e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
                                        return r
                                    }(n, "string" == typeof t, e),
                                    d = {
                                        ...c,
                                        ...u,
                                        ref: i
                                    };
                                return r && (d["data-projection-id"] = r), (0, l.createElement)(t, d)
                            };
                            return t
                        }(t),
                        createVisualElement: r,
                        projectionNodeConstructor: i,
                        Component: e
                    }
                })(e, t, ih, rw, id))
        },
        10: function (e, t, n) {
            "use strict";

            function r(e, t) {
                -1 === e.indexOf(t) && e.push(t)
            }

            function i(e, t) {
                let n = e.indexOf(t);
                n > -1 && e.splice(n, 1)
            }
            n.d(t, {
                cl: function () {
                    return i
                },
                y4: function () {
                    return r
                }
            })
        },
        4169: function (e, t, n) {
            "use strict";
            n.d(t, {
                u: function () {
                    return r
                }
            });
            let r = (e, t, n) => Math.min(Math.max(n, e), t)
        },
        4606: function (e, t, n) {
            "use strict";
            n.d(t, {
                s: function () {
                    return P
                }
            });
            var r = n(4394),
                i = n(5385),
                o = n(4169),
                a = n(22);

            function s(e, t, n) {
                return (n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6) ? e + (t - e) * 6 * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
            }
            var l = n(6382),
                u = n(819),
                c = n(3184);
            let d = (e, t, n) => {
                    let r = e * e;
                    return Math.sqrt(Math.max(0, n * (t * t - r) + r))
                },
                f = [l.$, u.m, c.J],
                h = e => f.find(t => t.test(e));

            function p(e) {
                let t = h(e);
                (0, r.k)(Boolean(t), `'${e}' is not an animatable color. Use the equivalent color code instead.`);
                let n = t.parse(e);
                return t === c.J && (n = function ({
                    hue: e,
                    saturation: t,
                    lightness: n,
                    alpha: r
                }) {
                    e /= 360, n /= 100;
                    let i = 0,
                        o = 0,
                        a = 0;
                    if (t /= 100) {
                        let l = n < .5 ? n * (1 + t) : n + t - n * t,
                            u = 2 * n - l;
                        i = s(u, l, e + 1 / 3), o = s(u, l, e), a = s(u, l, e - 1 / 3)
                    } else i = o = a = n;
                    return {
                        red: Math.round(255 * i),
                        green: Math.round(255 * o),
                        blue: Math.round(255 * a),
                        alpha: r
                    }
                }(n)), n
            }
            let m = (e, t) => {
                let n = p(e),
                    r = p(t),
                    i = {
                        ...n
                    };
                return e => (i.red = d(n.red, r.red, e), i.green = d(n.green, r.green, e), i.blue = d(n.blue, r.blue, e), i.alpha = (0, a.C)(n.alpha, r.alpha, e), u.m.transform(i))
            };
            var v = n(3624),
                g = n(1550);

            function y(e, t) {
                return "number" == typeof e ? n => (0, a.C)(e, t, n) : i.$.test(e) ? m(e, t) : w(e, t)
            }
            let b = (e, t) => {
                    let n = [...e],
                        r = n.length,
                        i = e.map((e, n) => y(e, t[n]));
                    return e => {
                        for (let t = 0; t < r; t++) n[t] = i[t](e);
                        return n
                    }
                },
                x = (e, t) => {
                    let n = {
                            ...e,
                            ...t
                        },
                        r = {};
                    for (let i in n) void 0 !== e[i] && void 0 !== t[i] && (r[i] = y(e[i], t[i]));
                    return e => {
                        for (let t in r) n[t] = r[t](e);
                        return n
                    }
                },
                w = (e, t) => {
                    let n = g.P.createTransformer(t),
                        i = (0, g.V)(e),
                        o = (0, g.V)(t),
                        a = i.numColors === o.numColors && i.numNumbers >= o.numNumbers;
                    return a ? (0, v.z)(b(i.values, o.values), n) : ((0, r.K)(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), n => `${n>0?t:e}`)
                };
            var j = n(3967);
            let O = (e, t) => n => (0, a.C)(e, t, n);

            function P(e, t, {
                clamp: n = !0,
                ease: a,
                mixer: s
            } = {}) {
                let l = e.length;
                (0, r.k)(l === t.length, "Both input and output ranges must be the same length"), (0, r.k)(!a || !Array.isArray(a) || a.length === l - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."), e[0] > e[l - 1] && (e = [...e].reverse(), t = [...t].reverse());
                let u = function (e, t, n) {
                        let r = [],
                            o = n || function (e) {
                                if ("number" == typeof e);
                                else if ("string" == typeof e) return i.$.test(e) ? m : w;
                                else if (Array.isArray(e)) return b;
                                else if ("object" == typeof e) return x;
                                return O
                            }(e[0]),
                            a = e.length - 1;
                        for (let s = 0; s < a; s++) {
                            let l = o(e[s], e[s + 1]);
                            if (t) {
                                let u = Array.isArray(t) ? t[s] : t;
                                l = (0, v.z)(u, l)
                            }
                            r.push(l)
                        }
                        return r
                    }(t, a, s),
                    c = u.length,
                    d = t => {
                        let n = 0;
                        if (c > 1)
                            for (; n < e.length - 2 && !(t < e[n + 1]); n++);
                        let r = (0, j.Y)(e[n], e[n + 1], t);
                        return u[n](r)
                    };
                return n ? t => d((0, o.u)(e[0], e[l - 1], t)) : d
            }
        },
        1741: function (e, t, n) {
            "use strict";
            n.d(t, {
                j: function () {
                    return r
                }
            });
            let r = "undefined" != typeof document
        },
        22: function (e, t, n) {
            "use strict";
            n.d(t, {
                C: function () {
                    return r
                }
            });
            let r = (e, t, n) => -n * e + n * t + e
        },
        3624: function (e, t, n) {
            "use strict";
            n.d(t, {
                z: function () {
                    return i
                }
            });
            let r = (e, t) => n => t(e(n)),
                i = (...e) => e.reduce(r)
        },
        9304: function (e, t, n) {
            "use strict";
            n.d(t, {
                O: function () {
                    return i
                }
            });
            var r = n(3454);
            let i = (void 0 === r || r.env, "production")
        },
        3967: function (e, t, n) {
            "use strict";
            n.d(t, {
                Y: function () {
                    return r
                }
            });
            let r = (e, t, n) => {
                let r = t - e;
                return 0 === r ? 1 : (n - e) / r
            }
        },
        1560: function (e, t, n) {
            "use strict";
            n.d(t, {
                L: function () {
                    return i
                }
            });
            var r = n(10);
            class i {
                constructor() {
                    this.subscriptions = []
                }
                add(e) {
                    return (0, r.y4)(this.subscriptions, e), () => (0, r.cl)(this.subscriptions, e)
                }
                notify(e, t, n) {
                    let r = this.subscriptions.length;
                    if (r) {
                        if (1 === r) this.subscriptions[0](e, t, n);
                        else
                            for (let i = 0; i < r; i++) {
                                let o = this.subscriptions[i];
                                o && o(e, t, n)
                            }
                    }
                }
                getSize() {
                    return this.subscriptions.length
                }
                clear() {
                    this.subscriptions.length = 0
                }
            }
        },
        6681: function (e, t, n) {
            "use strict";
            n.d(t, {
                h: function () {
                    return i
                }
            });
            var r = n(7294);

            function i(e) {
                let t = (0, r.useRef)(null);
                return null === t.current && (t.current = e()), t.current
            }
        },
        8868: function (e, t, n) {
            "use strict";
            n.d(t, {
                L: function () {
                    return o
                }
            });
            var r = n(7294),
                i = n(1741);
            let o = i.j ? r.useLayoutEffect : r.useEffect
        },
        5411: function (e, t, n) {
            "use strict";
            n.d(t, {
                z: function () {
                    return i
                }
            });
            var r = n(7294);

            function i(e) {
                return (0, r.useEffect)(() => () => e(), [])
            }
        },
        3038: function (e, t, n) {
            "use strict";

            function r(e, t) {
                return t ? e * (1e3 / t) : 0
            }
            n.d(t, {
                R: function () {
                    return r
                }
            })
        },
        6034: function (e, t, n) {
            "use strict";
            n.d(t, {
                O: function () {
                    return i
                }
            });
            let r = new Set;

            function i(e, t, n) {
                e || r.has(t) || (console.warn(t), n && console.warn(n), r.add(t))
            }
        },
        3234: function (e, t, n) {
            "use strict";
            n.d(t, {
                B: function () {
                    return u
                }
            });
            var r = n(7367),
                i = n(404),
                o = n(1560),
                a = n(3038);
            let s = e => !isNaN(parseFloat(e));
            class l {
                constructor(e) {
                    this.version = "7.8.1", this.timeDelta = 0, this.lastUpdated = 0, this.updateSubscribers = new o.L, this.velocityUpdateSubscribers = new o.L, this.renderSubscribers = new o.L, this.canTrackVelocity = !1, this.updateAndNotify = (e, t = !0) => {
                        this.prev = this.current, this.current = e;
                        let {
                            delta: n,
                            timestamp: o
                        } = r.w;
                        this.lastUpdated !== o && (this.timeDelta = n, this.lastUpdated = o, i.Z_.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.updateSubscribers.notify(this.current), this.velocityUpdateSubscribers.getSize() && this.velocityUpdateSubscribers.notify(this.getVelocity()), t && this.renderSubscribers.notify(this.current)
                    }, this.scheduleVelocityCheck = () => i.Z_.postRender(this.velocityCheck), this.velocityCheck = ({
                        timestamp: e
                    }) => {
                        e !== this.lastUpdated && (this.prev = this.current, this.velocityUpdateSubscribers.notify(this.getVelocity()))
                    }, this.hasAnimated = !1, this.prev = this.current = e, this.canTrackVelocity = s(this.current)
                }
                onChange(e) {
                    return this.updateSubscribers.add(e)
                }
                clearListeners() {
                    this.updateSubscribers.clear()
                }
                onRenderRequest(e) {
                    return e(this.get()), this.renderSubscribers.add(e)
                }
                attach(e) {
                    this.passiveEffect = e
                }
                set(e, t = !0) {
                    t && this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e, t)
                }
                get() {
                    return this.current
                }
                getPrevious() {
                    return this.prev
                }
                getVelocity() {
                    return this.canTrackVelocity ? (0, a.R)(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
                }
                start(e) {
                    return this.stop(), new Promise(t => {
                        this.hasAnimated = !0, this.stopAnimation = e(t)
                    }).then(() => this.clearAnimation())
                }
                stop() {
                    this.stopAnimation && this.stopAnimation(), this.clearAnimation()
                }
                isAnimating() {
                    return !!this.stopAnimation
                }
                clearAnimation() {
                    this.stopAnimation = null
                }
                destroy() {
                    this.updateSubscribers.clear(), this.renderSubscribers.clear(), this.stop()
                }
            }

            function u(e) {
                return new l(e)
            }
        },
        6382: function (e, t, n) {
            "use strict";
            n.d(t, {
                $: function () {
                    return o
                }
            });
            var r = n(819),
                i = n(8834);
            let o = {
                test: (0, i.i)("#"),
                parse: function (e) {
                    let t = "",
                        n = "",
                        r = "",
                        i = "";
                    return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, r += r, i += i), {
                        red: parseInt(t, 16),
                        green: parseInt(n, 16),
                        blue: parseInt(r, 16),
                        alpha: i ? parseInt(i, 16) / 255 : 1
                    }
                },
                transform: r.m.transform
            }
        },
        3184: function (e, t, n) {
            "use strict";
            n.d(t, {
                J: function () {
                    return s
                }
            });
            var r = n(1649),
                i = n(6190),
                o = n(6430),
                a = n(8834);
            let s = {
                test: (0, a.i)("hsl", "hue"),
                parse: (0, a.d)("hue", "saturation", "lightness"),
                transform: ({
                    hue: e,
                    saturation: t,
                    lightness: n,
                    alpha: a = 1
                }) => "hsla(" + Math.round(e) + ", " + i.aQ.transform((0, o.Nw)(t)) + ", " + i.aQ.transform((0, o.Nw)(n)) + ", " + (0, o.Nw)(r.Fq.transform(a)) + ")"
            }
        },
        5385: function (e, t, n) {
            "use strict";
            n.d(t, {
                $: function () {
                    return s
                }
            });
            var r = n(6430),
                i = n(6382),
                o = n(3184),
                a = n(819);
            let s = {
                test: e => a.m.test(e) || i.$.test(e) || o.J.test(e),
                parse: e => a.m.test(e) ? a.m.parse(e) : o.J.test(e) ? o.J.parse(e) : i.$.parse(e),
                transform: e => (0, r.HD)(e) ? e : e.hasOwnProperty("red") ? a.m.transform(e) : o.J.transform(e)
            }
        },
        819: function (e, t, n) {
            "use strict";
            n.d(t, {
                m: function () {
                    return u
                }
            });
            var r = n(4169),
                i = n(1649),
                o = n(6430),
                a = n(8834);
            let s = e => (0, r.u)(0, 255, e),
                l = {
                    ...i.Rx,
                    transform: e => Math.round(s(e))
                },
                u = {
                    test: (0, a.i)("rgb", "red"),
                    parse: (0, a.d)("red", "green", "blue"),
                    transform: ({
                        red: e,
                        green: t,
                        blue: n,
                        alpha: r = 1
                    }) => "rgba(" + l.transform(e) + ", " + l.transform(t) + ", " + l.transform(n) + ", " + (0, o.Nw)(i.Fq.transform(r)) + ")"
                }
        },
        8834: function (e, t, n) {
            "use strict";
            n.d(t, {
                d: function () {
                    return o
                },
                i: function () {
                    return i
                }
            });
            var r = n(6430);
            let i = (e, t) => n => Boolean((0, r.HD)(n) && r.mj.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t)),
                o = (e, t, n) => i => {
                    if (!(0, r.HD)(i)) return i;
                    let [o, a, s, l] = i.match(r.KP);
                    return {
                        [e]: parseFloat(o),
                        [t]: parseFloat(a),
                        [n]: parseFloat(s),
                        alpha: void 0 !== l ? parseFloat(l) : 1
                    }
                }
        },
        1550: function (e, t, n) {
            "use strict";
            n.d(t, {
                P: function () {
                    return f
                },
                V: function () {
                    return l
                }
            });
            var r = n(5385),
                i = n(1649),
                o = n(6430);
            let a = "${c}",
                s = "${n}";

            function l(e) {
                "number" == typeof e && (e = `${e}`);
                let t = [],
                    n = 0,
                    l = 0,
                    u = e.match(o.dA);
                u && (n = u.length, e = e.replace(o.dA, a), t.push(...u.map(r.$.parse)));
                let c = e.match(o.KP);
                return c && (l = c.length, e = e.replace(o.KP, s), t.push(...c.map(i.Rx.parse))), {
                    values: t,
                    numColors: n,
                    numNumbers: l,
                    tokenised: e
                }
            }

            function u(e) {
                return l(e).values
            }

            function c(e) {
                let {
                    values: t,
                    numColors: n,
                    tokenised: i
                } = l(e), u = t.length;
                return e => {
                    let t = i;
                    for (let l = 0; l < u; l++) t = t.replace(l < n ? a : s, l < n ? r.$.transform(e[l]) : (0, o.Nw)(e[l]));
                    return t
                }
            }
            let d = e => "number" == typeof e ? 0 : e,
                f = {
                    test: function (e) {
                        var t, n;
                        return isNaN(e) && (0, o.HD)(e) && ((null === (t = e.match(o.KP)) || void 0 === t ? void 0 : t.length) || 0) + ((null === (n = e.match(o.dA)) || void 0 === n ? void 0 : n.length) || 0) > 0
                    },
                    parse: u,
                    createTransformer: c,
                    getAnimatableNone: function (e) {
                        let t = u(e),
                            n = c(e);
                        return n(t.map(d))
                    }
                }
        },
        1649: function (e, t, n) {
            "use strict";
            n.d(t, {
                Fq: function () {
                    return o
                },
                Rx: function () {
                    return i
                },
                bA: function () {
                    return a
                }
            });
            var r = n(4169);
            let i = {
                    test: e => "number" == typeof e,
                    parse: parseFloat,
                    transform: e => e
                },
                o = {
                    ...i,
                    transform: e => (0, r.u)(0, 1, e)
                },
                a = {
                    ...i,
                    default: 1
                }
        },
        6190: function (e, t, n) {
            "use strict";
            n.d(t, {
                $C: function () {
                    return c
                },
                RW: function () {
                    return o
                },
                aQ: function () {
                    return a
                },
                px: function () {
                    return s
                },
                vh: function () {
                    return l
                },
                vw: function () {
                    return u
                }
            });
            var r = n(6430);
            let i = e => ({
                    test: t => (0, r.HD)(t) && t.endsWith(e) && 1 === t.split(" ").length,
                    parse: parseFloat,
                    transform: t => `${t}${e}`
                }),
                o = i("deg"),
                a = i("%"),
                s = i("px"),
                l = i("vh"),
                u = i("vw"),
                c = {
                    ...a,
                    parse: e => a.parse(e) / 100,
                    transform: e => a.transform(100 * e)
                }
        },
        6430: function (e, t, n) {
            "use strict";
            n.d(t, {
                HD: function () {
                    return s
                },
                KP: function () {
                    return i
                },
                Nw: function () {
                    return r
                },
                dA: function () {
                    return o
                },
                mj: function () {
                    return a
                }
            });
            let r = e => Math.round(1e5 * e) / 1e5,
                i = /(-)?([\d]*\.?[\d])+/g,
                o = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
                a = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;

            function s(e) {
                return "string" == typeof e
            }
        },
        407: function (e, t, n) {
            "use strict";
            n.d(t, {
                N: function () {
                    return a
                }
            });
            var r = n(4960),
                i = n(8868),
                o = n(404);

            function a(e, t) {
                var n, a;
                let s = (0, r.c)(t()),
                    l = () => s.set(t());
                return l(), n = () => o.Z_.update(l, !1, !0), a = () => o.qY.update(l), (0, i.L)(() => {
                    let t = e.map(e => e.onChange(n));
                    return () => {
                        t.forEach(e => e()), a()
                    }
                }), s
            }
        },
        4960: function (e, t, n) {
            "use strict";
            n.d(t, {
                c: function () {
                    return s
                }
            });
            var r = n(7294),
                i = n(3234),
                o = n(6014),
                a = n(6681);

            function s(e) {
                let t = (0, a.h)(() => (0, i.B)(e)),
                    {
                        isStatic: n
                    } = (0, r.useContext)(o._);
                if (n) {
                    let [, s] = (0, r.useState)(e);
                    (0, r.useEffect)(() => t.onChange(s), [])
                }
                return t
            }
        },
        3445: function (e, t, n) {
            "use strict";
            n.d(t, {
                Ue: function () {
                    return u
                },
                oR: function () {
                    return s
                }
            });
            var r = n(3973),
                i = n(7294),
                o = n(2798);
            let {
                useSyncExternalStoreWithSelector: a
            } = o;

            function s(e, t = e.getState, n) {
                let r = a(e.subscribe, e.getState, e.getServerState || e.getState, t, n);
                return (0, i.useDebugValue)(r), r
            }
            let l = e => {
                    "function" != typeof e && console.warn('[DEPRECATED] Passing a vanilla store will be unsupported in the future version. Please use `import { useStore } from "zustand"` to use the vanilla store in React.');
                    let t = "function" == typeof e ? (0, r.M)(e) : e,
                        n = (e, n) => s(t, e, n);
                    return Object.assign(n, t), n
                },
                u = e => e ? l(e) : l
        },
        3973: function (e, t, n) {
            "use strict";
            n.d(t, {
                M: function () {
                    return i
                }
            });
            let r = e => {
                    let t;
                    let n = new Set,
                        r = (e, r) => {
                            let i = "function" == typeof e ? e(t) : e;
                            if (!Object.is(i, t)) {
                                let o = t;
                                t = (null != r ? r : "object" != typeof i) ? i : Object.assign({}, t, i), n.forEach(e => e(t, o))
                            }
                        },
                        i = () => t,
                        o = e => (n.add(e), () => n.delete(e)),
                        a = () => {
                            console.warn("[DEPRECATED] The destroy method will be unsupported in the future version. You should use unsubscribe function returned by subscribe. Everything will be garbage collected if store is garbage collected."), n.clear()
                        },
                        s = {
                            setState: r,
                            getState: i,
                            subscribe: o,
                            destroy: a
                        };
                    return t = e(r, i, s), s
                },
                i = e => e ? r(e) : r
        }
    },
    function (e) {
        var t = function (t) {
            return e(e.s = t)
        };
        e.O(0, [774, 179], function () {
            return t(3837), t(880)
        }), _N_E = e.O()
    }
]);
