(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        1464: function (e, r, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function () {
                return t(2621)
            }])
        },
        2621: function (e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                __N_SSG: function () {
                    return N
                },
                default: function () {
                    return L
                }
            });
            var n = t(5893),
                s = t(1151),
                i = t(1109),
                o = t(3585);
            let a = [{
                href: "/authentication",
                name: "Authentication",
                description: "Learn how to authenticate your API requests."
            }, {
                href: "/pagination",
                name: "Pagination",
                description: "Understand how to work with paginated responses."
            }, {
                href: "/errors",
                name: "Errors",
                description: "Read about the different types of errors returned by the API."
            }, {
                href: "/webhooks",
                name: "Webhooks",
                description: "Learn how to programmatically configure webhooks for your app."
            }];

            function d() {
                return (0, n.jsxs)("div", {
                    className: "my-16 xl:max-w-none",
                    children: [(0, n.jsx)(o.X, {
                        level: 2,
                        id: "guides",
                        children: "Guides"
                    }), (0, n.jsx)("div", {
                        className: "not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:grid-cols-4",
                        children: a.map(e => (0, n.jsxs)("div", {
                            children: [(0, n.jsx)("h3", {
                                className: "text-sm font-semibold text-zinc-900 dark:text-white",
                                children: e.name
                            }), (0, n.jsx)("p", {
                                className: "mt-1 text-sm text-zinc-600 dark:text-zinc-400",
                                children: e.description
                            }), (0, n.jsx)("p", {
                                className: "mt-4",
                                children: (0, n.jsx)(i.z, {
                                    href: e.href,
                                    variant: "text",
                                    arrow: "right",
                                    children: "Read more"
                                })
                            })]
                        }, e.href))
                    })]
                })
            }
            var l = t(1664),
                c = t.n(l),
                h = t(407);

            function u(e, ...r) {
                let t = e.length;
                return (0, h.N)(r, function () {
                    let n = "";
                    for (let s = 0; s < t; s++) {
                        n += e[s];
                        let i = r[s];
                        i && (n += r[s].get())
                    }
                    return n
                })
            }
            var p = t(296),
                x = t(4960),
                m = t(7294);

            function g(e) {
                let {
                    width: r,
                    height: t,
                    x: s,
                    y: i,
                    squares: o,
                    ...a
                } = e, d = (0, m.useId)();
                return (0, n.jsxs)("svg", {
                    "aria-hidden": "true",
                    ...a,
                    children: [(0, n.jsx)("defs", {
                        children: (0, n.jsx)("pattern", {
                            id: d,
                            width: r,
                            height: t,
                            patternUnits: "userSpaceOnUse",
                            x: s,
                            y: i,
                            children: (0, n.jsx)("path", {
                                d: `M.5 ${t}V.5H${r}`,
                                fill: "none"
                            })
                        })
                    }), (0, n.jsx)("rect", {
                        width: "100%",
                        height: "100%",
                        strokeWidth: 0,
                        fill: `url(#${d})`
                    }), o && (0, n.jsx)("svg", {
                        x: s,
                        y: i,
                        className: "overflow-visible",
                        children: o.map(e => {
                            let [s, i] = e;
                            return (0, n.jsx)("rect", {
                                strokeWidth: "0",
                                width: r + 1,
                                height: t + 1,
                                x: s * r,
                                y: i * t
                            }, `${s}-${i}`)
                        })
                    })]
                })
            }
            let f = [{
                href: "/contacts",
                name: "Contacts",
                description: "Learn about the contact model and how to create, retrieve, update, delete, and list contacts.",
                icon: function (e) {
                    return (0, n.jsxs)("svg", {
                        viewBox: "0 0 20 20",
                        "aria-hidden": "true",
                        ...e,
                        children: [(0, n.jsx)("path", {
                            strokeWidth: "0",
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M10 .5a9.5 9.5 0 0 1 5.598 17.177C14.466 15.177 12.383 13.5 10 13.5s-4.466 1.677-5.598 4.177A9.5 9.5 0 0 1 10 .5ZM12.5 8a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z"
                        }), (0, n.jsx)("path", {
                            fill: "none",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M10 .5a9.5 9.5 0 0 1 5.598 17.177A9.458 9.458 0 0 1 10 19.5a9.458 9.458 0 0 1-5.598-1.823A9.5 9.5 0 0 1 10 .5Z"
                        }), (0, n.jsx)("path", {
                            fill: "none",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M4.402 17.677C5.534 15.177 7.617 13.5 10 13.5s4.466 1.677 5.598 4.177M10 5.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                        })]
                    })
                },
                pattern: {
                    y: 16,
                    squares: [
                        [0, 1],
                        [1, 3]
                    ]
                }
            }, {
                href: "/conversations",
                name: "Conversations",
                description: "Learn about the conversation model and how to create, retrieve, update, delete, and list conversations.",
                icon: function (e) {
                    return (0, n.jsxs)("svg", {
                        viewBox: "0 0 20 20",
                        "aria-hidden": "true",
                        ...e,
                        children: [(0, n.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M10 16.5c4.142 0 7.5-3.134 7.5-7s-3.358-7-7.5-7c-4.142 0-7.5 3.134-7.5 7 0 1.941.846 3.698 2.214 4.966L3.5 17.5c2.231 0 3.633-.553 4.513-1.248A8.014 8.014 0 0 0 10 16.5Z"
                        }), (0, n.jsx)("path", {
                            fill: "none",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M7.5 8.5h5M8.5 11.5h3"
                        })]
                    })
                },
                pattern: {
                    y: -6,
                    squares: [
                        [-1, 2],
                        [1, 3]
                    ]
                }
            }, {
                href: "/messages",
                name: "Messages",
                description: "Learn about the message model and how to create, retrieve, update, delete, and list messages.",
                icon: function (e) {
                    return (0, n.jsxs)("svg", {
                        viewBox: "0 0 20 20",
                        "aria-hidden": "true",
                        ...e,
                        children: [(0, n.jsx)("path", {
                            fill: "none",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M2.5 5.5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v8a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-8Z"
                        }), (0, n.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M10 10 4.526 5.256c-.7-.607-.271-1.756.655-1.756h9.638c.926 0 1.355 1.15.655 1.756L10 10Z"
                        })]
                    })
                },
                pattern: {
                    y: 32,
                    squares: [
                        [0, 2],
                        [1, 4]
                    ]
                }
            }, {
                href: "/groups",
                name: "Groups",
                description: "Learn about the group model and how to create, retrieve, update, delete, and list groups.",
                icon: function (e) {
                    return (0, n.jsxs)("svg", {
                        viewBox: "0 0 20 20",
                        "aria-hidden": "true",
                        ...e,
                        children: [(0, n.jsx)("path", {
                            fill: "none",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M10.046 16H1.955a.458.458 0 0 1-.455-.459C1.5 13.056 3.515 11 6 11h.5"
                        }), (0, n.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M7.5 15.454C7.5 12.442 9.988 10 13 10s5.5 2.442 5.5 5.454a.545.545 0 0 1-.546.546H8.045a.545.545 0 0 1-.545-.546Z"
                        }), (0, n.jsx)("path", {
                            fill: "none",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M6.5 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z"
                        }), (0, n.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M13 2a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                        })]
                    })
                },
                pattern: {
                    y: 22,
                    squares: [
                        [0, 1]
                    ]
                }
            }];

            function k(e) {
                let {
                    icon: r
                } = e;
                return (0, n.jsx)("div", {
                    className: "flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900/5 ring-1 ring-zinc-900/25 backdrop-blur-[2px] transition duration-300 group-hover:bg-white/50 group-hover:ring-zinc-900/25 dark:bg-white/7.5 dark:ring-white/15 dark:group-hover:bg-emerald-300/10 dark:group-hover:ring-emerald-400",
                    children: (0, n.jsx)(r, {
                        className: "h-5 w-5 fill-zinc-700/10 stroke-zinc-700 transition-colors duration-300 group-hover:stroke-zinc-900 dark:fill-white/10 dark:stroke-zinc-400 dark:group-hover:fill-emerald-300/10 dark:group-hover:stroke-emerald-400"
                    })
                })
            }

            function j(e) {
                let {
                    mouseX: r,
                    mouseY: t,
                    ...s
                } = e, i = u `radial-gradient(180px at ${r}px ${t}px, white, transparent)`, o = {
                    maskImage: i,
                    WebkitMaskImage: i
                };
                return (0, n.jsxs)("div", {
                    className: "pointer-events-none",
                    children: [(0, n.jsx)("div", {
                        className: "absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50",
                        children: (0, n.jsx)(g, {
                            width: 72,
                            height: 56,
                            x: "50%",
                            className: "absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/[0.02] stroke-black/5 dark:fill-white/1 dark:stroke-white/2.5",
                            ...s
                        })
                    }), (0, n.jsx)(p.E.div, {
                        className: "absolute inset-0 rounded-2xl bg-gradient-to-r from-[#D7EDEA] to-[#F4FBDF] opacity-0 transition duration-300 group-hover:opacity-100 dark:from-[#202D2E] dark:to-[#303428]",
                        style: o
                    }), (0, n.jsx)(p.E.div, {
                        className: "absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100",
                        style: o,
                        children: (0, n.jsx)(g, {
                            width: 72,
                            height: 56,
                            x: "50%",
                            className: "absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/50 stroke-black/70 dark:fill-white/2.5 dark:stroke-white/10",
                            ...s
                        })
                    })]
                })
            }

            function v(e) {
                let {
                    resource: r
                } = e, t = (0, x.c)(0), s = (0, x.c)(0);
                return (0, n.jsxs)("div", {
                    onMouseMove: function (e) {
                        let {
                            currentTarget: r,
                            clientX: n,
                            clientY: i
                        } = e, {
                            left: o,
                            top: a
                        } = r.getBoundingClientRect();
                        t.set(n - o), s.set(i - a)
                    },
                    className: "group relative flex rounded-2xl bg-zinc-50 transition-shadow hover:shadow-md hover:shadow-zinc-900/5 dark:bg-white/2.5 dark:hover:shadow-black/5",
                    children: [(0, n.jsx)(j, {
                        ...r.pattern,
                        mouseX: t,
                        mouseY: s
                    }), (0, n.jsx)("div", {
                        className: "absolute inset-0 rounded-2xl ring-1 ring-inset ring-zinc-900/7.5 group-hover:ring-zinc-900/10 dark:ring-white/10 dark:group-hover:ring-white/20"
                    }), (0, n.jsxs)("div", {
                        className: "relative rounded-2xl px-4 pt-16 pb-4",
                        children: [(0, n.jsx)(k, {
                            icon: r.icon
                        }), (0, n.jsx)("h3", {
                            className: "mt-4 text-sm font-semibold leading-7 text-zinc-900 dark:text-white",
                            children: (0, n.jsxs)(c(), {
                                href: r.href,
                                children: [(0, n.jsx)("span", {
                                    className: "absolute inset-0 rounded-2xl"
                                }), r.name]
                            })
                        }), (0, n.jsx)("p", {
                            className: "mt-1 text-sm text-zinc-600 dark:text-zinc-400",
                            children: r.description
                        })]
                    })]
                }, r.href)
            }

            function w() {
                return (0, n.jsxs)("div", {
                    className: "my-16 xl:max-w-none",
                    children: [(0, n.jsx)(o.X, {
                        level: 2,
                        id: "resources",
                        children: "Resources"
                    }), (0, n.jsx)("div", {
                        className: "not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:grid-cols-4",
                        children: f.map(e => (0, n.jsx)(v, {
                            resource: e
                        }, e.href))
                    })]
                })
            }

            function b() {
                return (0, n.jsx)("div", {
                    className: "absolute inset-0 -z-10 mx-0 max-w-none overflow-hidden",
                    children: (0, n.jsxs)("div", {
                        className: "absolute left-1/2 top-0 ml-[-38rem] h-[25rem] w-[81.25rem] dark:[mask-image:linear-gradient(white,transparent)]",
                        children: [(0, n.jsx)("div", {
                            className: "absolute inset-0 bg-gradient-to-r from-[#36b49f] to-[#DBFF75] opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-[#36b49f]/30 dark:to-[#DBFF75]/30 dark:opacity-100",
                            children: (0, n.jsx)(g, {
                                width: 72,
                                height: 56,
                                x: "-12",
                                y: "4",
                                squares: [
                                    [4, 3],
                                    [2, 1],
                                    [7, 3],
                                    [10, 6]
                                ],
                                className: "absolute inset-x-0 inset-y-[-50%] h-[200%] w-full skew-y-[-18deg] fill-black/40 stroke-black/50 mix-blend-overlay dark:fill-white/2.5 dark:stroke-white/5"
                            })
                        }), (0, n.jsx)("svg", {
                            viewBox: "0 0 1113 440",
                            "aria-hidden": "true",
                            className: "absolute top-0 left-1/2 ml-[-19rem] w-[69.5625rem] fill-white blur-[26px] dark:hidden",
                            children: (0, n.jsx)("path", {
                                d: "M.016 439.5s-9.5-300 434-300S882.516 20 882.516 20V0h230.004v439.5H.016Z"
                            })
                        })]
                    })
                })
            }

            function y(e) {
                let r = Object.assign({
                        h1: "h1",
                        p: "p",
                        h2: "h2",
                        a: "a"
                    }, (0, s.ah)(), e.components),
                    {
                        Button: t
                    } = r;
                return t || function (e, r) {
                    throw Error("Expected " + (r ? "component" : "object") + " `" + e + "` to be defined: you likely forgot to import, pass, or provide it.")
                }("Button", !0), (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(b, {}), "\n", (0, n.jsx)(r.h1, {
                        children: "Documentação da API"
                    }), "\n", (0, n.jsx)(r.p, {
                        children: "Use the Protocol API to access contacts, conversations, group messages, and more and seamlessly integrate your product into the workflows of dozens of devoted Protocol users.",
                        className: "lead"
                    }), "\n", (0, n.jsxs)("div", {
                        className: "not-prose mb-16 mt-6 flex gap-3",
                        children: [(0, n.jsx)(t, {
                            href: "/quickstart",
                            arrow: "right",
                            children: "Quickstart"
                        }), (0, n.jsx)(t, {
                            href: "/sdks",
                            variant: "outline",
                            children: "Explore SDKs"
                        })]
                    }), "\n", (0, n.jsx)(r.h2, {
                        id: "getting-started",
                        children: "Getting started",
                        anchor: !1
                    }), "\n", (0, n.jsxs)(r.p, {
                        children: ["To get started, create a new application in your ", (0, n.jsx)(r.a, {
                            href: "#",
                            children: "developer settings"
                        }), ", then read about how to make requests for the resources you need to access using our HTTP APIs or dedicated client SDKs. When your integration is ready to go live, publish it to our ", (0, n.jsx)(r.a, {
                            href: "#",
                            children: "integrations directory"
                        }), " to reach the Protocol community."],
                        className: "lead"
                    }), "\n", (0, n.jsx)("div", {
                        className: "not-prose",
                        children: (0, n.jsx)(t, {
                            href: "/sdks",
                            variant: "text",
                            arrow: "right",
                            children: "Get your API key"
                        })
                    }), "\n", (0, n.jsx)(d, {}), "\n", (0, n.jsx)(w, {})]
                })
            }
            var N = !0,
                L = function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        {
                            wrapper: r
                        } = Object.assign({}, (0, s.ah)(), e.components);
                    return r ? (0, n.jsx)(r, Object.assign({}, e, {
                        children: (0, n.jsx)(y, e)
                    })) : y(e)
                }
        }
    },
    function (e) {
        e.O(0, [774, 888, 179], function () {
            return e(e.s = 1464)
        }), _N_E = e.O()
    }
]);
