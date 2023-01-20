(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [462], {
        2978: function (s, n, o) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/webhooks", function () {
                return o(5212)
            }])
        },
        5212: function (s, n, o) {
            "use strict";
            o.r(n), o.d(n, {
                __N_SSG: function () {
                    return r
                }
            });
            var a = o(5893),
                e = o(1151);

            function t(s) {
                let n = Object.assign({
                        h1: "h1",
                        p: "p",
                        h2: "h2",
                        a: "a",
                        code: "code",
                        pre: "pre",
                        hr: "hr"
                    }, (0, e.ah)(), s.components),
                    {
                        Button: o,
                        Row: t,
                        Col: r,
                        Properties: p,
                        Property: l,
                        CodeGroup: c
                    } = n;
                return o || i("Button", !0), c || i("CodeGroup", !0), r || i("Col", !0), p || i("Properties", !0), l || i("Property", !0), t || i("Row", !0), (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(n.h1, {
                        children: "Webhooks"
                    }), "\n", (0, a.jsx)(n.p, {
                        children: "In this guide, we will look at how to register and consume webhooks to integrate your app with Protocol. With webhooks, your app can know when something happens in Protocol, such as someone sending a message or adding a contact.",
                        className: "lead"
                    }), "\n", (0, a.jsx)(n.h2, {
                        id: "registering-webhooks",
                        children: "Registering webhooks"
                    }), "\n", (0, a.jsxs)(n.p, {
                        children: ["To register a new webhook, you need to have a URL in your app that Protocol can call. You can configure a new webhook from the Protocol dashboard under ", (0, a.jsx)(n.a, {
                            href: "#",
                            children: "API settings"
                        }), ". Give your webhook a name, pick the ", (0, a.jsx)(n.a, {
                            href: "#event-types",
                            children: "events"
                        }), " you want to listen for, and add your URL."]
                    }), "\n", (0, a.jsx)(n.p, {
                        children: "Now, whenever something of interest happens in your app, a webhook is fired off by Protocol. In the next section, we'll look at how to consume webhooks."
                    }), "\n", (0, a.jsx)(n.h2, {
                        id: "consuming-webhooks",
                        children: "Consuming webhooks"
                    }), "\n", (0, a.jsxs)(n.p, {
                        children: ["When your app receives a webhook request from Protocol, check the ", (0, a.jsx)(n.code, {
                            children: "type"
                        }), " attribute to see what event caused it. The first part of the event type will tell you the payload type, e.g., a conversation, message, etc."]
                    }), "\n", (0, a.jsx)(n.pre, {
                        language: "json",
                        code: '{\n  "id": "a056V7R7NmNRjl70",\n  "type": "conversation.updated",\n  "payload": {\n    "id": "WAz8eIbvDR60rouK"\n    // ...\n  }\n}\n',
                        children: (0, a.jsx)(n.code, {
                            className: "language-json",
                            children: '<span><span style="color: var(--shiki-color-text)">{</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;a056V7R7NmNRjl70&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;type&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;conversation.updated&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;payload&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;WAz8eIbvDR60rouK&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-comment)">// ...</span></span>\n<span><span style="color: var(--shiki-color-text)">  }</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>'
                        }),
                        title: "Example webhook payload"
                    }), "\n", (0, a.jsxs)(n.p, {
                        children: ["In the example above, a conversation was ", (0, a.jsx)(n.code, {
                            children: "updated"
                        }), ", and the payload type is a ", (0, a.jsx)(n.code, {
                            children: "conversation"
                        }), "."]
                    }), "\n", (0, a.jsx)("div", {
                        className: "not-prose",
                        children: (0, a.jsx)(o, {
                            href: "#event-types",
                            variant: "text",
                            arrow: "right",
                            children: "See all event types"
                        })
                    }), "\n", (0, a.jsx)(n.hr, {}), "\n", (0, a.jsx)(n.h2, {
                        id: "event-types",
                        children: "Event types"
                    }), "\n", (0, a.jsxs)(t, {
                        children: [(0, a.jsx)(r, {
                            children: (0, a.jsxs)(p, {
                                children: [(0, a.jsx)(l, {
                                    name: "contact.created",
                                    children: (0, a.jsx)(n.p, {
                                        children: "A new contact was created."
                                    })
                                }), (0, a.jsx)(l, {
                                    name: "contact.updated",
                                    children: (0, a.jsx)(n.p, {
                                        children: "An existing contact was updated."
                                    })
                                }), (0, a.jsx)(l, {
                                    name: "contact.deleted",
                                    children: (0, a.jsx)(n.p, {
                                        children: "A contact was successfully deleted."
                                    })
                                }), (0, a.jsx)(l, {
                                    name: "conversation.created",
                                    children: (0, a.jsx)(n.p, {
                                        children: "A new conversation was created."
                                    })
                                }), (0, a.jsx)(l, {
                                    name: "conversation.updated",
                                    children: (0, a.jsx)(n.p, {
                                        children: "An existing conversation was updated."
                                    })
                                }), (0, a.jsx)(l, {
                                    name: "conversation.deleted",
                                    children: (0, a.jsx)(n.p, {
                                        children: "A conversation was successfully deleted."
                                    })
                                }), (0, a.jsx)(l, {
                                    name: "message.created",
                                    children: (0, a.jsx)(n.p, {
                                        children: "A new message was created."
                                    })
                                }), (0, a.jsx)(l, {
                                    name: "message.updated",
                                    children: (0, a.jsx)(n.p, {
                                        children: "An existing message was updated."
                                    })
                                }), (0, a.jsx)(l, {
                                    name: "message.deleted",
                                    children: (0, a.jsx)(n.p, {
                                        children: "A message was successfully deleted."
                                    })
                                }), (0, a.jsx)(l, {
                                    name: "group.created",
                                    children: (0, a.jsx)(n.p, {
                                        children: "A new group was created."
                                    })
                                }), (0, a.jsx)(l, {
                                    name: "group.updated",
                                    children: (0, a.jsx)(n.p, {
                                        children: "An existing group was updated."
                                    })
                                }), (0, a.jsx)(l, {
                                    name: "group.deleted",
                                    children: (0, a.jsx)(n.p, {
                                        children: "A group was successfully deleted."
                                    })
                                }), (0, a.jsx)(l, {
                                    name: "attachment.created",
                                    children: (0, a.jsx)(n.p, {
                                        children: "A new attachment was created."
                                    })
                                }), (0, a.jsx)(l, {
                                    name: "attachment.updated",
                                    children: (0, a.jsx)(n.p, {
                                        children: "An existing attachment was updated."
                                    })
                                }), (0, a.jsx)(l, {
                                    name: "attachment.deleted",
                                    children: (0, a.jsx)(n.p, {
                                        children: "An attachment was successfully deleted."
                                    })
                                })]
                            })
                        }), (0, a.jsx)(r, {
                            sticky: !0,
                            children: (0, a.jsx)(n.pre, {
                                language: "json",
                                code: '{\n  "id": "a056V7R7NmNRjl70",\n  "type": "message.updated",\n  "payload": {\n    "id": "SIuAFUNKdSYHZF2w",\n    "conversation_id": "xgQQXg3hrtjh7AvZ",\n    "contact": {\n      "id": "WAz8eIbvDR60rouK",\n      "username": "KevinMcCallister",\n      "phone_number": "1-800-759-3000",\n      "avatar_url": "https://assets.protocol.chat/avatars/kevin.jpg",\n      "last_active_at": 705103200,\n      "created_at": 692233200\n    },\n    "message": "I’m traveling with my dad. He’s at a meeting. I hate meetings.",\n    "reactions": [],\n    "attachments": [],\n    "read_at": 705103200,\n    "created_at": 692233200,\n    "updated_at": 692233200\n  }\n}\n',
                                children: (0, a.jsx)(n.code, {
                                    className: "language-json",
                                    children: '<span><span style="color: var(--shiki-color-text)">{</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;a056V7R7NmNRjl70&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;type&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;message.updated&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;payload&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;SIuAFUNKdSYHZF2w&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;conversation_id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;xgQQXg3hrtjh7AvZ&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;contact&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;WAz8eIbvDR60rouK&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;username&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;KevinMcCallister&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;phone_number&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;1-800-759-3000&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;avatar_url&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;https://assets.protocol.chat/avatars/kevin.jpg&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;last_active_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">705103200</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;created_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">692233200</span></span>\n<span><span style="color: var(--shiki-color-text)">    }</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;message&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;I’m traveling with my dad. He’s at a meeting. I hate meetings.&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;reactions&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> []</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;attachments&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> []</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;read_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">705103200</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;created_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">692233200</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;updated_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">692233200</span></span>\n<span><span style="color: var(--shiki-color-text)">  }</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>'
                                }),
                                title: "Example payload"
                            })
                        })]
                    }), "\n", (0, a.jsx)(n.hr, {}), "\n", (0, a.jsx)(n.h2, {
                        id: "security",
                        children: "Security"
                    }), "\n", (0, a.jsxs)(n.p, {
                        children: ["To know for sure that a webhook was, in fact, sent by Protocol instead of a malicious actor, you can verify the request signature. Each webhook request contains a header named ", (0, a.jsx)(n.code, {
                            children: "x-protocol-signature"
                        }), ", and you can verify this signature by using your secret webhook key. The signature is an HMAC hash of the request payload hashed using your secret key. Here is an example of how to verify the signature in your app:"]
                    }), "\n", (0, a.jsxs)(c, {
                        title: "Verifying a request",
                        children: [(0, a.jsx)(n.pre, {
                            language: "js",
                            code: "const signature = req.headers['x-protocol-signature']\nconst hash = crypto.createHmac('sha256', secret).update(payload).digest('hex')\n\nif (hash === signature) {\n  // Request is verified\n} else {\n  // Request could not be verified\n}\n",
                            children: (0, a.jsx)(n.code, {
                                className: "language-js",
                                children: '<span><span style="color: var(--shiki-token-keyword)">const</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">signature</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">req</span><span style="color: var(--shiki-color-text)">.headers[</span><span style="color: var(--shiki-token-string-expression)">&#39;x-protocol-signature&#39;</span><span style="color: var(--shiki-color-text)">]</span></span>\n<span><span style="color: var(--shiki-token-keyword)">const</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">hash</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">crypto</span><span style="color: var(--shiki-token-function)">.createHmac</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-string-expression)">&#39;sha256&#39;</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> secret)</span><span style="color: var(--shiki-token-function)">.update</span><span style="color: var(--shiki-color-text)">(payload)</span><span style="color: var(--shiki-token-function)">.digest</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-string-expression)">&#39;hex&#39;</span><span style="color: var(--shiki-color-text)">)</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-keyword)">if</span><span style="color: var(--shiki-color-text)"> (hash </span><span style="color: var(--shiki-token-keyword)">===</span><span style="color: var(--shiki-color-text)"> signature) {</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-comment)">// Request is verified</span></span>\n<span><span style="color: var(--shiki-color-text)">} </span><span style="color: var(--shiki-token-keyword)">else</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-comment)">// Request could not be verified</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>'
                            })
                        }), (0, a.jsx)(n.pre, {
                            language: "python",
                            code: 'from flask import request\nimport hashlib\nimport hmac\n\nsignature = request.headers.get("x-protocol-signature")\nhash = hmac.new(bytes(secret, "ascii"), bytes(payload, "ascii"), hashlib.sha256)\n\nif hash.hexdigest() == signature:\n    # Request is verified\nelse:\n    # Request could not be verified\n',
                            children: (0, a.jsx)(n.code, {
                                className: "language-python",
                                children: '<span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> flask </span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> request</span></span>\n<span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> hashlib</span></span>\n<span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> hmac</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">signature </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> request</span><span style="color: var(--shiki-token-punctuation)">.</span><span style="color: var(--shiki-color-text)">headers</span><span style="color: var(--shiki-token-punctuation)">.</span><span style="color: var(--shiki-token-function)">get</span><span style="color: var(--shiki-token-punctuation)">(</span><span style="color: var(--shiki-token-string-expression)">&quot;x-protocol-signature&quot;</span><span style="color: var(--shiki-token-punctuation)">)</span></span>\n<span><span style="color: var(--shiki-token-function)">hash</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> hmac</span><span style="color: var(--shiki-token-punctuation)">.</span><span style="color: var(--shiki-token-function)">new</span><span style="color: var(--shiki-token-punctuation)">(</span><span style="color: var(--shiki-token-constant)">bytes</span><span style="color: var(--shiki-token-punctuation)">(secret, </span><span style="color: var(--shiki-token-string-expression)">&quot;ascii&quot;</span><span style="color: var(--shiki-token-punctuation)">), </span><span style="color: var(--shiki-token-constant)">bytes</span><span style="color: var(--shiki-token-punctuation)">(payload, </span><span style="color: var(--shiki-token-string-expression)">&quot;ascii&quot;</span><span style="color: var(--shiki-token-punctuation)">), hashlib.sha256)</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-keyword)">if</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">hash</span><span style="color: var(--shiki-token-punctuation)">.</span><span style="color: var(--shiki-token-function)">hexdigest</span><span style="color: var(--shiki-token-punctuation)">()</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">==</span><span style="color: var(--shiki-color-text)"> signature</span><span style="color: var(--shiki-token-punctuation)">:</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-comment)"># Request is verified</span></span>\n<span><span style="color: var(--shiki-token-keyword)">else</span><span style="color: var(--shiki-token-punctuation)">:</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-comment)"># Request could not be verified</span></span>\n<span></span>'
                            })
                        }), (0, a.jsx)(n.pre, {
                            language: "php",
                            code: "$signature = $request['headers']['x-protocol-signature'];\n$hash = hash_hmac('sha256', $payload, $secret);\n\nif (hash_equals($hash, $signature)) {\n  // Request is verified\n} else {\n  // Request could not be verified\n}\n",
                            children: (0, a.jsx)(n.code, {
                                className: "language-php",
                                children: '<span><span style="color: var(--shiki-color-text)">$signature </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> $request[</span><span style="color: var(--shiki-token-string-expression)">&#39;headers&#39;</span><span style="color: var(--shiki-color-text)">][</span><span style="color: var(--shiki-token-string-expression)">&#39;x-protocol-signature&#39;</span><span style="color: var(--shiki-color-text)">];</span></span>\n<span><span style="color: var(--shiki-color-text)">$hash </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">hash_hmac</span><span style="color: var(--shiki-token-punctuation)">(</span><span style="color: var(--shiki-token-string-expression)">&#39;sha256&#39;</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-token-function)"> $payload</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-token-function)"> $secret</span><span style="color: var(--shiki-token-punctuation)">)</span><span style="color: var(--shiki-color-text)">;</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-keyword)">if</span><span style="color: var(--shiki-color-text)"> (</span><span style="color: var(--shiki-token-function)">hash_equals</span><span style="color: var(--shiki-token-punctuation)">(</span><span style="color: var(--shiki-token-function)">$hash</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-token-function)"> $signature</span><span style="color: var(--shiki-token-punctuation)">)</span><span style="color: var(--shiki-color-text)">) {</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-comment)">// Request is verified</span></span>\n<span><span style="color: var(--shiki-color-text)">} </span><span style="color: var(--shiki-token-keyword)">else</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-comment)">// Request could not be verified</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>'
                            })
                        })]
                    }), "\n", (0, a.jsxs)(n.p, {
                        children: ["If your generated signature matches the ", (0, a.jsx)(n.code, {
                            children: "x-protocol-signature"
                        }), " header, you can be sure that the request was truly coming from Protocol. It's essential to keep your secret webhook key safe — otherwise, you can no longer be sure that a given webhook was sent by Protocol. Don't commit your secret webhook key to GitHub!"]
                    })]
                })
            }
            var r = !0;

            function i(s, n) {
                throw Error("Expected " + (n ? "component" : "object") + " `" + s + "` to be defined: you likely forgot to import, pass, or provide it.")
            }
            n.default = function () {
                let s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    {
                        wrapper: n
                    } = Object.assign({}, (0, e.ah)(), s.components);
                return n ? (0, a.jsx)(n, Object.assign({}, s, {
                    children: (0, a.jsx)(t, s)
                })) : t(s)
            }
        }
    },
    function (s) {
        s.O(0, [774, 888, 179], function () {
            return s(s.s = 2978)
        }), _N_E = s.O()
    }
]);
