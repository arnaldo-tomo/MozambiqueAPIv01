(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [313], {
        6008: function (s, n, o) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/messages", function () {
                return o(9194)
            }])
        },
        9194: function (s, n, o) {
            "use strict";
            o.r(n), o.d(n, {
                __N_SSG: function () {
                    return r
                }
            });
            var a = o(5893),
                t = o(1151);

            function e(s) {
                let n = Object.assign({
                        h1: "h1",
                        p: "p",
                        h2: "h2",
                        h3: "h3",
                        hr: "hr",
                        pre: "pre",
                        code: "code",
                        a: "a"
                    }, (0, t.ah)(), s.components),
                    {
                        Properties: o,
                        Property: e,
                        Row: r,
                        Col: p,
                        CodeGroup: l
                    } = n;
                return l || i("CodeGroup", !0), p || i("Col", !0), o || i("Properties", !0), e || i("Property", !0), r || i("Row", !0), (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(n.h1, {

                        }), "\n", (0, a.jsx)(n.h2, {
                            id: "the-message-model",
                            children: "The message model"
                        }), {
                            children: "Properties"
                        }),
                        "\n",
                        (0, a.jsxs)(o, {
                            children: [(0, a.jsx)(e, {
                                name: "id",
                                type: "string",
                                children: (0, a.jsx)(n.p, {
                                    children: "Unique identifier for the message."
                                })
                            }), (0, a.jsx)(e, {
                                name: "conversation_id",
                                type: "string",
                                children: (0, a.jsx)(n.p, {
                                    children: "Unique identifier for the conversation the message belongs to."
                                })
                            }), (0, a.jsx)(e, {
                                name: "contact",
                                type: "object",
                                children: (0, a.jsx)(n.p, {
                                    children: "The contact object for the contact who sent the message."
                                })
                            }), (0, a.jsx)(e, {
                                name: "message",
                                type: "string",
                                children: (0, a.jsx)(n.p, {
                                    children: "The message content."
                                })
                            }), (0, a.jsx)(e, {
                                name: "reactions",
                                type: "array",
                                children: (0, a.jsx)(n.p, {
                                    children: "An array of reaction objects associated with the message."
                                })
                            }), (0, a.jsx)(e, {
                                name: "attachments",
                                type: "array",
                                children: (0, a.jsx)(n.p, {
                                    children: "An array of attachment objects associated with the message."
                                })
                            }), (0, a.jsx)(e, {
                                name: "read_at",
                                type: "timestamp",
                                children: (0, a.jsx)(n.p, {
                                    children: "Timestamp of when the message was read."
                                })
                            }), (0, a.jsx)(e, {
                                name: "created_at",
                                type: "timestamp",
                                children: (0, a.jsx)(n.p, {
                                    children: "Timestamp of when the message was created."
                                })
                            }), (0, a.jsx)(e, {
                                name: "updated_at",
                                type: "timestamp",
                                children: (0, a.jsx)(n.p, {
                                    children: "Timestamp of when the message was last updated."
                                })
                            })]
                        }),
                        "\n",
                        (0, a.jsx)(n.hr, {}),
                        "\n",
                        (0, a.jsx)(n.h2, {
                            id: "list-all-messages",
                            children: "List all messages",
                            tag: "GET",
                            label: "/v1/messages"
                        }),
                        "\n",
                        (0, a.jsxs)(r, {
                            children: [(0, a.jsxs)(p, {
                                children: [(0, a.jsx)(n.p, {
                                    children: "This endpoint allows you to retrieve a paginated list of all your messages (in a conversation if a conversation id is provided). By default, a maximum of ten messages are shown per page."
                                }), (0, a.jsx)(n.h3, {
                                    children: "Optional attributes"
                                }), (0, a.jsxs)(o, {
                                    children: [(0, a.jsx)(e, {
                                        name: "conversation_id",
                                        type: "string",
                                        children: (0, a.jsx)(n.p, {
                                            children: "Limit to messages from a given conversation."
                                        })
                                    }), (0, a.jsx)(e, {
                                        name: "limit",
                                        type: "integer",
                                        children: (0, a.jsx)(n.p, {
                                            children: "Limit the number of messages returned."
                                        })
                                    })]
                                })]
                            }), (0, a.jsxs)(p, {
                                sticky: !0,
                                children: [(0, a.jsxs)(l, {
                                    title: "Request",
                                    tag: "GET",
                                    label: "/v1/messages",
                                    children: [(0, a.jsx)(n.pre, {
                                        language: "bash",
                                        code: 'curl -G https://api.protocol.chat/v1/messages \\\n  -H "Authorization: Bearer {token}" \\\n  -d conversation_id=xgQQXg3hrtjh7AvZ \\\n  -d limit=10\n',
                                        children: (0, a.jsx)(n.code, {
                                            className: "language-bash",
                                            children: '<span><span style="color: var(--shiki-color-text)">curl -G https://api.protocol.chat/v1/messages \\</span></span>\n<span><span style="color: var(--shiki-color-text)">  -H </span><span style="color: var(--shiki-token-string-expression)">&quot;Authorization: Bearer {token}&quot;</span><span style="color: var(--shiki-color-text)"> \\</span></span>\n<span><span style="color: var(--shiki-color-text)">  -d conversation_id=xgQQXg3hrtjh7AvZ \\</span></span>\n<span><span style="color: var(--shiki-color-text)">  -d limit=10</span></span>\n<span></span>'
                                        }),
                                        title: "cURL"
                                    }), (0, a.jsx)(n.pre, {
                                        language: "js",
                                        code: "import ApiClient from '@example/protocol-api'\n\nconst client = new ApiClient(token)\n\nawait client.messages.list()\n",
                                        children: (0, a.jsx)(n.code, {
                                            className: "language-js",
                                            children: '<span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> ApiClient </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;@example/protocol-api&#39;</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-keyword)">const</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">client</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">new</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">ApiClient</span><span style="color: var(--shiki-color-text)">(token)</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-keyword)">await</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">client</span><span style="color: var(--shiki-token-function)">.</span><span style="color: var(--shiki-token-constant)">messages</span><span style="color: var(--shiki-token-function)">.list</span><span style="color: var(--shiki-color-text)">()</span></span>\n<span></span>'
                                        })
                                    }), (0, a.jsx)(n.pre, {
                                        language: "python",
                                        code: "from protocol_api import ApiClient\n\nclient = ApiClient(token)\n\nclient.messages.list()\n",
                                        children: (0, a.jsx)(n.code, {
                                            className: "language-python",
                                            children: '<span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> protocol_api </span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> ApiClient</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">client </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">ApiClient</span><span style="color: var(--shiki-token-punctuation)">(token)</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">client</span><span style="color: var(--shiki-token-punctuation)">.</span><span style="color: var(--shiki-color-text)">messages</span><span style="color: var(--shiki-token-punctuation)">.</span><span style="color: var(--shiki-token-function)">list</span><span style="color: var(--shiki-token-punctuation)">()</span></span>\n<span></span>'
                                        })
                                    }), (0, a.jsx)(n.pre, {
                                        language: "php",
                                        code: "$client = new \\Protocol\\ApiClient($token);\n\n$client->messages->list();\n",
                                        children: (0, a.jsx)(n.code, {
                                            className: "language-php",
                                            children: '<span><span style="color: var(--shiki-color-text)">$client </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">new</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-punctuation)">\\</span><span style="color: var(--shiki-token-constant)">Protocol</span><span style="color: var(--shiki-token-punctuation)">\\</span><span style="color: var(--shiki-token-constant)">ApiClient</span><span style="color: var(--shiki-color-text)">($token);</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">$client</span><span style="color: var(--shiki-token-keyword)">-&gt;</span><span style="color: var(--shiki-color-text)">messages</span><span style="color: var(--shiki-token-keyword)">-&gt;</span><span style="color: var(--shiki-token-function)">list</span><span style="color: var(--shiki-token-punctuation)">()</span><span style="color: var(--shiki-color-text)">;</span></span>\n<span></span>'
                                        })
                                    })]
                                }), (0, a.jsx)(n.pre, {
                                    language: "json",
                                    code: '{\n  "has_more": false,\n  "data": [\n    {\n      "id": "SIuAFUNKdSYHZF2w",\n      "conversation_id": "xgQQXg3hrtjh7AvZ",\n      "contact": {\n        "id": "WAz8eIbvDR60rouK",\n        "username": "KevinMcCallister",\n        "phone_number": "1-800-759-3000",\n        "avatar_url": "https://assets.protocol.chat/avatars/buzzboy.jpg",\n        "last_active_at": 705103200,\n        "created_at": 692233200\n      },\n      "message": "It’s a nice night for a neck injury.",\n      "reactions": [],\n      "attachments": [],\n      "read_at": 705103200,\n      "created_at": 692233200,\n      "updated_at": 692233200\n    },\n    {\n      "id": "hSIhXBhNe8X1d8Et",\n      // ..\n    }\n  ]\n}\n',
                                    children: (0, a.jsx)(n.code, {
                                        className: "language-json",
                                        children: '<span><span style="color: var(--shiki-color-text)">{</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;has_more&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">false</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;data&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> [</span></span>\n<span><span style="color: var(--shiki-color-text)">    {</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;SIuAFUNKdSYHZF2w&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;conversation_id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;xgQQXg3hrtjh7AvZ&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;contact&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;WAz8eIbvDR60rouK&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-keyword)">&quot;username&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;KevinMcCallister&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-keyword)">&quot;phone_number&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;1-800-759-3000&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-keyword)">&quot;avatar_url&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;https://assets.protocol.chat/avatars/buzzboy.jpg&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-keyword)">&quot;last_active_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">705103200</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-keyword)">&quot;created_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">692233200</span></span>\n<span><span style="color: var(--shiki-color-text)">      }</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;message&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;It’s a nice night for a neck injury.&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;reactions&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> []</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;attachments&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> []</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;read_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">705103200</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;created_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">692233200</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;updated_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">692233200</span></span>\n<span><span style="color: var(--shiki-color-text)">    }</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    {</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;hSIhXBhNe8X1d8Et&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-comment)">// ..</span></span>\n<span><span style="color: var(--shiki-color-text)">    }</span></span>\n<span><span style="color: var(--shiki-color-text)">  ]</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>'
                                    }),
                                    title: "Response"
                                })]
                            })]
                        }),
                        "\n",
                        (0, a.jsx)(n.hr, {}),
                        "\n",
                        (0, a.jsx)(n.h2, {
                            id: "send-a-message",
                            children: "Send a message",
                            tag: "POST",
                            label: "/v1/messages"
                        }),
                        "\n",
                        (0, a.jsxs)(r, {
                            children: [(0, a.jsxs)(p, {
                                children: [(0, a.jsx)(n.p, {
                                    children: "This endpoint allows you to send a new message to one of your conversations."
                                }), (0, a.jsx)(n.h3, {
                                    children: "Required attributes"
                                }), (0, a.jsxs)(o, {
                                    children: [(0, a.jsx)(e, {
                                        name: "conversation_id",
                                        type: "string",
                                        children: (0, a.jsx)(n.p, {
                                            children: "Unique identifier for the conversation the message belongs to."
                                        })
                                    }), (0, a.jsx)(e, {
                                        name: "message",
                                        type: "string",
                                        children: (0, a.jsx)(n.p, {
                                            children: "The message content."
                                        })
                                    })]
                                }), (0, a.jsx)(n.h3, {
                                    children: "Optional attributes"
                                }), (0, a.jsx)(o, {
                                    children: (0, a.jsx)(e, {
                                        name: "attachments",
                                        type: "array",
                                        children: (0, a.jsx)(n.p, {
                                            children: "An array of attachment objects associated with the message."
                                        })
                                    })
                                })]
                            }), (0, a.jsxs)(p, {
                                sticky: !0,
                                children: [(0, a.jsxs)(l, {
                                    title: "Request",
                                    tag: "POST",
                                    label: "/v1/messages",
                                    children: [(0, a.jsx)(n.pre, {
                                        language: "bash",
                                        code: 'curl https://api.protocol.chat/v1/messages \\\n  -H "Authorization: Bearer {token}" \\\n  -d conversation_id="xgQQXg3hrtjh7AvZ" \\\n  -d message="You’re what the French call ‘les incompetents.’"\n',
                                        children: (0, a.jsx)(n.code, {
                                            className: "language-bash",
                                            children: '<span><span style="color: var(--shiki-color-text)">curl https://api.protocol.chat/v1/messages \\</span></span>\n<span><span style="color: var(--shiki-color-text)">  -H </span><span style="color: var(--shiki-token-string-expression)">&quot;Authorization: Bearer {token}&quot;</span><span style="color: var(--shiki-color-text)"> \\</span></span>\n<span><span style="color: var(--shiki-color-text)">  -d conversation_id=</span><span style="color: var(--shiki-token-string-expression)">&quot;xgQQXg3hrtjh7AvZ&quot;</span><span style="color: var(--shiki-color-text)"> \\</span></span>\n<span><span style="color: var(--shiki-color-text)">  -d message=</span><span style="color: var(--shiki-token-string-expression)">&quot;You’re what the French call ‘les incompetents.’&quot;</span></span>\n<span></span>'
                                        }),
                                        title: "cURL"
                                    }), (0, a.jsx)(n.pre, {
                                        language: "js",
                                        code: "import ApiClient from '@example/protocol-api'\n\nconst client = new ApiClient(token)\n\nawait client.messages.send({\n  conversation_id: 'xgQQXg3hrtjh7AvZ',\n  message: 'You’re what the French call ‘les incompetents.’',\n})\n",
                                        children: (0, a.jsx)(n.code, {
                                            className: "language-js",
                                            children: '<span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> ApiClient </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;@example/protocol-api&#39;</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-keyword)">const</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">client</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">new</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">ApiClient</span><span style="color: var(--shiki-color-text)">(token)</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-keyword)">await</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">client</span><span style="color: var(--shiki-token-function)">.</span><span style="color: var(--shiki-token-constant)">messages</span><span style="color: var(--shiki-token-function)">.send</span><span style="color: var(--shiki-color-text)">({</span></span>\n<span><span style="color: var(--shiki-color-text)">  conversation_id</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;xgQQXg3hrtjh7AvZ&#39;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  message</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;You’re what the French call ‘les incompetents.’&#39;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">})</span></span>\n<span></span>'
                                        })
                                    }), (0, a.jsx)(n.pre, {
                                        language: "python",
                                        code: 'from protocol_api import ApiClient\n\nclient = ApiClient(token)\n\nclient.messages.send(\n  conversation_id="xgQQXg3hrtjh7AvZ",\n  message="You’re what the French call ‘les incompetents.’",\n)\n',
                                        children: (0, a.jsx)(n.code, {
                                            className: "language-python",
                                            children: '<span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> protocol_api </span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> ApiClient</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">client </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">ApiClient</span><span style="color: var(--shiki-token-punctuation)">(token)</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">client</span><span style="color: var(--shiki-token-punctuation)">.</span><span style="color: var(--shiki-color-text)">messages</span><span style="color: var(--shiki-token-punctuation)">.</span><span style="color: var(--shiki-token-function)">send</span><span style="color: var(--shiki-token-punctuation)">(</span></span>\n<span><span style="color: var(--shiki-token-punctuation)">  conversation_id</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;xgQQXg3hrtjh7AvZ&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-token-punctuation)">  message</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;You’re what the French call ‘les incompetents.’&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-token-punctuation)">)</span></span>\n<span></span>'
                                        })
                                    }), (0, a.jsx)(n.pre, {
                                        language: "php",
                                        code: "$client = new \\Protocol\\ApiClient($token);\n\n$client->messages->send([\n  'conversation_id' => 'xgQQXg3hrtjh7AvZ',\n  'message' => 'You’re what the French call ‘les incompetents.’',\n]);\n",
                                        children: (0, a.jsx)(n.code, {
                                            className: "language-php",
                                            children: '<span><span style="color: var(--shiki-color-text)">$client </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">new</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-punctuation)">\\</span><span style="color: var(--shiki-token-constant)">Protocol</span><span style="color: var(--shiki-token-punctuation)">\\</span><span style="color: var(--shiki-token-constant)">ApiClient</span><span style="color: var(--shiki-color-text)">($token);</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">$client</span><span style="color: var(--shiki-token-keyword)">-&gt;</span><span style="color: var(--shiki-color-text)">messages</span><span style="color: var(--shiki-token-keyword)">-&gt;</span><span style="color: var(--shiki-token-function)">send</span><span style="color: var(--shiki-token-punctuation)">(</span><span style="color: var(--shiki-color-text)">[</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-string-expression)">&#39;conversation_id&#39;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=&gt;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;xgQQXg3hrtjh7AvZ&#39;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-string-expression)">&#39;message&#39;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=&gt;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;You’re what the French call ‘les incompetents.’&#39;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">]</span><span style="color: var(--shiki-token-punctuation)">)</span><span style="color: var(--shiki-color-text)">;</span></span>\n<span></span>'
                                        })
                                    })]
                                }), (0, a.jsx)(n.pre, {
                                    language: "json",
                                    code: '{\n  "id": "gWqY86BMFRiH5o11",\n  "conversation_id": "xgQQXg3hrtjh7AvZ",\n  "contact": {\n    "id": "inEIRvzjC6YLMX3o",\n    "username": "LinnieMcCallister",\n    "phone_number": "1-800-759-3000",\n    "avatar_url": "https://assets.protocol.chat/avatars/linnie.jpg",\n    "last_active_at": 705103200,\n    "created_at": 692233200\n  },\n  "message": "You’re what the French call ‘les incompetents.’",\n  "reactions": [],\n  "attachments": [],\n  "read_at": null,\n  "created_at": 692233200,\n  "updated_at": null\n}\n',
                                    children: (0, a.jsx)(n.code, {
                                        className: "language-json",
                                        children: '<span><span style="color: var(--shiki-color-text)">{</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;gWqY86BMFRiH5o11&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;conversation_id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;xgQQXg3hrtjh7AvZ&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;contact&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;inEIRvzjC6YLMX3o&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;username&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;LinnieMcCallister&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;phone_number&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;1-800-759-3000&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;avatar_url&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;https://assets.protocol.chat/avatars/linnie.jpg&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;last_active_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">705103200</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;created_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">692233200</span></span>\n<span><span style="color: var(--shiki-color-text)">  }</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;message&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;You’re what the French call ‘les incompetents.’&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;reactions&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> []</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;attachments&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> []</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;read_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">null</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;created_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">692233200</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;updated_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">null</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>'
                                    }),
                                    title: "Response"
                                })]
                            })]
                        }),
                        "\n",
                        (0, a.jsx)(n.hr, {}),
                        "\n",
                        (0, a.jsx)(n.h2, {
                            id: "retrieve-a-message",
                            children: "Retrieve a message",
                            tag: "GET",
                            label: "/v1/messages/:id"
                        }),
                        "\n",
                        (0, a.jsxs)(r, {
                            children: [(0, a.jsx)(p, {
                                children: (0, a.jsxs)(n.p, {
                                    children: ["This endpoint allows you to retrieve a message by providing the message id. Refer to ", (0, a.jsx)(n.a, {
                                        href: "#the-message-model",
                                        children: "the list"
                                    }), " at the top of this page to see which properties are included with message objects."]
                                })
                            }), (0, a.jsxs)(p, {
                                sticky: !0,
                                children: [(0, a.jsxs)(l, {
                                    title: "Request",
                                    tag: "GET",
                                    label: "/v1/messages/SIuAFUNKdSYHZF2w",
                                    children: [(0, a.jsx)(n.pre, {
                                        language: "bash",
                                        code: 'curl https://api.protocol.chat/v1/messages/SIuAFUNKdSYHZF2w \\\n  -H "Authorization: Bearer {token}"\n',
                                        children: (0, a.jsx)(n.code, {
                                            className: "language-bash",
                                            children: '<span><span style="color: var(--shiki-color-text)">curl https://api.protocol.chat/v1/messages/SIuAFUNKdSYHZF2w \\</span></span>\n<span><span style="color: var(--shiki-color-text)">  -H </span><span style="color: var(--shiki-token-string-expression)">&quot;Authorization: Bearer {token}&quot;</span></span>\n<span></span>'
                                        }),
                                        title: "cURL"
                                    }), (0, a.jsx)(n.pre, {
                                        language: "js",
                                        code: "import ApiClient from '@example/protocol-api'\n\nconst client = new ApiClient(token)\n\nawait client.messages.get('SIuAFUNKdSYHZF2w')\n",
                                        children: (0, a.jsx)(n.code, {
                                            className: "language-js",
                                            children: '<span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> ApiClient </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;@example/protocol-api&#39;</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-keyword)">const</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">client</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">new</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">ApiClient</span><span style="color: var(--shiki-color-text)">(token)</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-keyword)">await</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">client</span><span style="color: var(--shiki-token-function)">.</span><span style="color: var(--shiki-token-constant)">messages</span><span style="color: var(--shiki-token-function)">.get</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-string-expression)">&#39;SIuAFUNKdSYHZF2w&#39;</span><span style="color: var(--shiki-color-text)">)</span></span>\n<span></span>'
                                        })
                                    }), (0, a.jsx)(n.pre, {
                                        language: "python",
                                        code: 'from protocol_api import ApiClient\n\nclient = ApiClient(token)\n\nclient.messages.get("SIuAFUNKdSYHZF2w")\n',
                                        children: (0, a.jsx)(n.code, {
                                            className: "language-python",
                                            children: '<span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> protocol_api </span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> ApiClient</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">client </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">ApiClient</span><span style="color: var(--shiki-token-punctuation)">(token)</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">client</span><span style="color: var(--shiki-token-punctuation)">.</span><span style="color: var(--shiki-color-text)">messages</span><span style="color: var(--shiki-token-punctuation)">.</span><span style="color: var(--shiki-token-function)">get</span><span style="color: var(--shiki-token-punctuation)">(</span><span style="color: var(--shiki-token-string-expression)">&quot;SIuAFUNKdSYHZF2w&quot;</span><span style="color: var(--shiki-token-punctuation)">)</span></span>\n<span></span>'
                                        })
                                    }), (0, a.jsx)(n.pre, {
                                        language: "php",
                                        code: "$client = new \\Protocol\\ApiClient($token);\n\n$client->messages->get('SIuAFUNKdSYHZF2w');\n",
                                        children: (0, a.jsx)(n.code, {
                                            className: "language-php",
                                            children: '<span><span style="color: var(--shiki-color-text)">$client </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">new</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-punctuation)">\\</span><span style="color: var(--shiki-token-constant)">Protocol</span><span style="color: var(--shiki-token-punctuation)">\\</span><span style="color: var(--shiki-token-constant)">ApiClient</span><span style="color: var(--shiki-color-text)">($token);</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">$client</span><span style="color: var(--shiki-token-keyword)">-&gt;</span><span style="color: var(--shiki-color-text)">messages</span><span style="color: var(--shiki-token-keyword)">-&gt;</span><span style="color: var(--shiki-token-function)">get</span><span style="color: var(--shiki-token-punctuation)">(</span><span style="color: var(--shiki-token-string-expression)">&#39;SIuAFUNKdSYHZF2w&#39;</span><span style="color: var(--shiki-token-punctuation)">)</span><span style="color: var(--shiki-color-text)">;</span></span>\n<span></span>'
                                        })
                                    })]
                                }), (0, a.jsx)(n.pre, {
                                    language: "json",
                                    code: '{\n  "id": "SIuAFUNKdSYHZF2w",\n  "conversation_id": "xgQQXg3hrtjh7AvZ",\n  "contact": {\n    "id": "WAz8eIbvDR60rouK",\n    "username": "KevinMcCallister",\n    "phone_number": "1-800-759-3000",\n    "avatar_url": "https://assets.protocol.chat/avatars/kevin.jpg",\n    "last_active_at": 705103200,\n    "created_at": 692233200\n  },\n  "message": "I’m traveling with my dad. He’s at a meeting. I hate meetings.",\n  "reactions": [],\n  "attachments": [],\n  "read_at": 705103200,\n  "created_at": 692233200,\n  "updated_at": 692233200\n}\n',
                                    children: (0, a.jsx)(n.code, {
                                        className: "language-json",
                                        children: '<span><span style="color: var(--shiki-color-text)">{</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;SIuAFUNKdSYHZF2w&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;conversation_id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;xgQQXg3hrtjh7AvZ&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;contact&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;WAz8eIbvDR60rouK&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;username&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;KevinMcCallister&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;phone_number&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;1-800-759-3000&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;avatar_url&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;https://assets.protocol.chat/avatars/kevin.jpg&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;last_active_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">705103200</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;created_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">692233200</span></span>\n<span><span style="color: var(--shiki-color-text)">  }</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;message&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;I’m traveling with my dad. He’s at a meeting. I hate meetings.&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;reactions&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> []</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;attachments&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> []</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;read_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">705103200</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;created_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">692233200</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;updated_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">692233200</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>'
                                    }),
                                    title: "Response"
                                })]
                            })]
                        }),
                        "\n",
                        (0, a.jsx)(n.hr, {}),
                        "\n",
                        (0, a.jsx)(n.h2, {
                            id: "update-a-message",
                            children: "Update a message",
                            tag: "PUT",
                            label: "/v1/messages/:id"
                        }),
                        "\n",
                        (0, a.jsxs)(r, {
                            children: [(0, a.jsxs)(p, {
                                children: [(0, a.jsx)(n.p, {
                                    children: "This endpoint allows you to perform an update on a message. Examples of updates are adding a reaction, editing the message, or adding an attachment."
                                }), (0, a.jsx)(n.h3, {
                                    children: "Optional attributes"
                                }), (0, a.jsxs)(o, {
                                    children: [(0, a.jsx)(e, {
                                        name: "message",
                                        type: "string",
                                        children: (0, a.jsx)(n.p, {
                                            children: "The message content."
                                        })
                                    }), (0, a.jsx)(e, {
                                        name: "reactions",
                                        type: "array",
                                        children: (0, a.jsx)(n.p, {
                                            children: "An array of reaction objects associated with the message."
                                        })
                                    }), (0, a.jsx)(e, {
                                        name: "attachments",
                                        type: "array",
                                        children: (0, a.jsx)(n.p, {
                                            children: "An array of attachment objects associated with the message."
                                        })
                                    })]
                                })]
                            }), (0, a.jsxs)(p, {
                                sticky: !0,
                                children: [(0, a.jsxs)(l, {
                                    title: "Request",
                                    tag: "PUT",
                                    label: "/v1/messages/SIuAFUNKdSYHZF2w",
                                    children: [(0, a.jsx)(n.pre, {
                                        language: "bash",
                                        code: 'curl -X PUT https://api.protocol.chat/v1/messages/SIuAFUNKdSYHZF2w \\\n  -H "Authorization: Bearer {token}" \\\n  -d reactions[red_angry_face][]="KateMcCallister"\n',
                                        children: (0, a.jsx)(n.code, {
                                            className: "language-bash",
                                            children: '<span><span style="color: var(--shiki-color-text)">curl -X PUT https://api.protocol.chat/v1/messages/SIuAFUNKdSYHZF2w \\</span></span>\n<span><span style="color: var(--shiki-color-text)">  -H </span><span style="color: var(--shiki-token-string-expression)">&quot;Authorization: Bearer {token}&quot;</span><span style="color: var(--shiki-color-text)"> \\</span></span>\n<span><span style="color: var(--shiki-color-text)">  -d reactions[red_angry_face][]=</span><span style="color: var(--shiki-token-string-expression)">&quot;KateMcCallister&quot;</span></span>\n<span></span>'
                                        }),
                                        title: "cURL"
                                    }), (0, a.jsx)(n.pre, {
                                        language: "js",
                                        code: "import ApiClient from '@example/protocol-api'\n\nconst client = new ApiClient(token)\n\nawait client.messages.update('SIuAFUNKdSYHZF2w', {\n    reactions: {\n        red_angry_face: ['KateMcCallister']\n    }\n})\n",
                                        children: (0, a.jsx)(n.code, {
                                            className: "language-js",
                                            children: '<span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> ApiClient </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;@example/protocol-api&#39;</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-keyword)">const</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">client</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">new</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">ApiClient</span><span style="color: var(--shiki-color-text)">(token)</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-keyword)">await</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">client</span><span style="color: var(--shiki-token-function)">.</span><span style="color: var(--shiki-token-constant)">messages</span><span style="color: var(--shiki-token-function)">.update</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-string-expression)">&#39;SIuAFUNKdSYHZF2w&#39;</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">    reactions</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">        red_angry_face</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> [</span><span style="color: var(--shiki-token-string-expression)">&#39;KateMcCallister&#39;</span><span style="color: var(--shiki-color-text)">]</span></span>\n<span><span style="color: var(--shiki-color-text)">    }</span></span>\n<span><span style="color: var(--shiki-color-text)">})</span></span>\n<span></span>'
                                        })
                                    }), (0, a.jsx)(n.pre, {
                                        language: "python",
                                        code: 'from protocol_api import ApiClient\n\nclient = ApiClient(token)\n\nclient.messages.update("SIuAFUNKdSYHZF2w",\n    reactions={"red_angry_face": ["KateMcCallister"]})\n',
                                        children: (0, a.jsx)(n.code, {
                                            className: "language-python",
                                            children: '<span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> protocol_api </span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> ApiClient</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">client </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">ApiClient</span><span style="color: var(--shiki-token-punctuation)">(token)</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">client</span><span style="color: var(--shiki-token-punctuation)">.</span><span style="color: var(--shiki-color-text)">messages</span><span style="color: var(--shiki-token-punctuation)">.</span><span style="color: var(--shiki-token-function)">update</span><span style="color: var(--shiki-token-punctuation)">(</span><span style="color: var(--shiki-token-string-expression)">&quot;SIuAFUNKdSYHZF2w&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-token-punctuation)">    reactions</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-punctuation)">{</span><span style="color: var(--shiki-token-string-expression)">&quot;red_angry_face&quot;</span><span style="color: var(--shiki-token-punctuation)">: [</span><span style="color: var(--shiki-token-string-expression)">&quot;KateMcCallister&quot;</span><span style="color: var(--shiki-token-punctuation)">]})</span></span>\n<span></span>'
                                        })
                                    }), (0, a.jsx)(n.pre, {
                                        language: "php",
                                        code: "$client = new \\Protocol\\ApiClient($token);\n\n$client->messages->update('SIuAFUNKdSYHZF2w', [\n  'reactions' => [\n    'red_angry_face' => ['KateMcCallister'],\n  ],\n]);\n",
                                        children: (0, a.jsx)(n.code, {
                                            className: "language-php",
                                            children: '<span><span style="color: var(--shiki-color-text)">$client </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">new</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-punctuation)">\\</span><span style="color: var(--shiki-token-constant)">Protocol</span><span style="color: var(--shiki-token-punctuation)">\\</span><span style="color: var(--shiki-token-constant)">ApiClient</span><span style="color: var(--shiki-color-text)">($token);</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">$client</span><span style="color: var(--shiki-token-keyword)">-&gt;</span><span style="color: var(--shiki-color-text)">messages</span><span style="color: var(--shiki-token-keyword)">-&gt;</span><span style="color: var(--shiki-token-function)">update</span><span style="color: var(--shiki-token-punctuation)">(</span><span style="color: var(--shiki-token-string-expression)">&#39;SIuAFUNKdSYHZF2w&#39;</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> [</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-string-expression)">&#39;reactions&#39;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=&gt;</span><span style="color: var(--shiki-color-text)"> [</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-string-expression)">&#39;red_angry_face&#39;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=&gt;</span><span style="color: var(--shiki-color-text)"> [</span><span style="color: var(--shiki-token-string-expression)">&#39;KateMcCallister&#39;</span><span style="color: var(--shiki-color-text)">]</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  ]</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">]</span><span style="color: var(--shiki-token-punctuation)">)</span><span style="color: var(--shiki-color-text)">;</span></span>\n<span></span>'
                                        })
                                    })]
                                }), (0, a.jsx)(n.pre, {
                                    language: "json",
                                    code: '{\n  "id": "SIuAFUNKdSYHZF2w",\n  "conversation_id": "xgQQXg3hrtjh7AvZ",\n  "contact": {\n    "id": "WAz8eIbvDR60rouK",\n    "username": "KevinMcCallister",\n    "phone_number": "1-800-759-3000",\n    "avatar_url": "https://assets.protocol.chat/avatars/buzzboy.jpg",\n    "last_active_at": 705103200,\n    "created_at": 692233200\n  },\n  "message": "I\'m not apologizing. I\'d rather kiss a toilet seat.",\n  "reactions": [\n    {\n      "red_angry_face": [\n        "KateMcCallister"\n      ]\n    }\n  ],\n  "attachments": [],\n  "read_at": 705103200,\n  "created_at": 692233200,\n  "updated_at": 692233200\n}\n',
                                    children: (0, a.jsx)(n.code, {
                                        className: "language-json",
                                        children: '<span><span style="color: var(--shiki-color-text)">{</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;SIuAFUNKdSYHZF2w&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;conversation_id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;xgQQXg3hrtjh7AvZ&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;contact&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;WAz8eIbvDR60rouK&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;username&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;KevinMcCallister&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;phone_number&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;1-800-759-3000&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;avatar_url&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;https://assets.protocol.chat/avatars/buzzboy.jpg&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;last_active_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">705103200</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;created_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">692233200</span></span>\n<span><span style="color: var(--shiki-color-text)">  }</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;message&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;I&#39;m not apologizing. I&#39;d rather kiss a toilet seat.&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;reactions&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> [</span></span>\n<span><span style="color: var(--shiki-color-text)">    {</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;red_angry_face&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> [</span></span>\n<span><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-string-expression)">&quot;KateMcCallister&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">      ]</span></span>\n<span><span style="color: var(--shiki-color-text)">    }</span></span>\n<span><span style="color: var(--shiki-color-text)">  ]</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;attachments&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> []</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;read_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">705103200</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;created_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">692233200</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;updated_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">692233200</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>'
                                    }),
                                    title: "Response"
                                })]
                            })]
                        }),
                        "\n",
                        (0, a.jsx)(n.hr, {}),
                        "\n",
                        (0, a.jsx)(n.h2, {
                            id: "delete-a-message",
                            children: "Delete a message",
                            tag: "DELETE",
                            label: "/v1/messages/:id"
                        }),
                        "\n",
                        (0, a.jsxs)(r, {
                            children: [(0, a.jsx)(p, {
                                children: (0, a.jsx)(n.p, {
                                    children: "This endpoint allows you to delete messages from your conversations. Note: This will permanently delete the message."
                                })
                            }), (0, a.jsx)(p, {
                                sticky: !0,
                                children: (0, a.jsxs)(l, {
                                    title: "Request",
                                    tag: "DELETE",
                                    label: "/v1/messages/SIuAFUNKdSYHZF2w",
                                    children: [(0, a.jsx)(n.pre, {
                                        language: "bash",
                                        code: 'curl -X DELETE https://api.protocol.chat/v1/messages/SIuAFUNKdSYHZF2w \\\n  -H "Authorization: Bearer {token}"\n',
                                        children: (0, a.jsx)(n.code, {
                                            className: "language-bash",
                                            children: '<span><span style="color: var(--shiki-color-text)">curl -X DELETE https://api.protocol.chat/v1/messages/SIuAFUNKdSYHZF2w \\</span></span>\n<span><span style="color: var(--shiki-color-text)">  -H </span><span style="color: var(--shiki-token-string-expression)">&quot;Authorization: Bearer {token}&quot;</span></span>\n<span></span>'
                                        }),
                                        title: "cURL"
                                    }), (0, a.jsx)(n.pre, {
                                        language: "js",
                                        code: "import ApiClient from '@example/protocol-api'\n\nconst client = new ApiClient(token)\n\nawait client.messages.delete('SIuAFUNKdSYHZF2w')\n",
                                        children: (0, a.jsx)(n.code, {
                                            className: "language-js",
                                            children: '<span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> ApiClient </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;@example/protocol-api&#39;</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-keyword)">const</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">client</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">new</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">ApiClient</span><span style="color: var(--shiki-color-text)">(token)</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-keyword)">await</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">client</span><span style="color: var(--shiki-token-function)">.</span><span style="color: var(--shiki-token-constant)">messages</span><span style="color: var(--shiki-token-function)">.delete</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-string-expression)">&#39;SIuAFUNKdSYHZF2w&#39;</span><span style="color: var(--shiki-color-text)">)</span></span>\n<span></span>'
                                        })
                                    }), (0, a.jsx)(n.pre, {
                                        language: "python",
                                        code: 'from protocol_api import ApiClient\n\nclient = ApiClient(token)\n\nclient.messages.delete("SIuAFUNKdSYHZF2w")\n',
                                        children: (0, a.jsx)(n.code, {
                                            className: "language-python",
                                            children: '<span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> protocol_api </span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> ApiClient</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">client </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">ApiClient</span><span style="color: var(--shiki-token-punctuation)">(token)</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">client</span><span style="color: var(--shiki-token-punctuation)">.</span><span style="color: var(--shiki-color-text)">messages</span><span style="color: var(--shiki-token-punctuation)">.</span><span style="color: var(--shiki-token-function)">delete</span><span style="color: var(--shiki-token-punctuation)">(</span><span style="color: var(--shiki-token-string-expression)">&quot;SIuAFUNKdSYHZF2w&quot;</span><span style="color: var(--shiki-token-punctuation)">)</span></span>\n<span></span>'
                                        })
                                    }), (0, a.jsx)(n.pre, {
                                        language: "php",
                                        code: "$client = new \\Protocol\\ApiClient($token);\n\n$client->messages->delete('SIuAFUNKdSYHZF2w');\n",
                                        children: (0, a.jsx)(n.code, {
                                            className: "language-php",
                                            children: '<span><span style="color: var(--shiki-color-text)">$client </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">new</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-punctuation)">\\</span><span style="color: var(--shiki-token-constant)">Protocol</span><span style="color: var(--shiki-token-punctuation)">\\</span><span style="color: var(--shiki-token-constant)">ApiClient</span><span style="color: var(--shiki-color-text)">($token);</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">$client</span><span style="color: var(--shiki-token-keyword)">-&gt;</span><span style="color: var(--shiki-color-text)">messages</span><span style="color: var(--shiki-token-keyword)">-&gt;</span><span style="color: var(--shiki-token-function)">delete</span><span style="color: var(--shiki-token-punctuation)">(</span><span style="color: var(--shiki-token-string-expression)">&#39;SIuAFUNKdSYHZF2w&#39;</span><span style="color: var(--shiki-token-punctuation)">)</span><span style="color: var(--shiki-color-text)">;</span></span>\n<span></span>'
                                        })
                                    })]
                                })
                            })]
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
                } = Object.assign({}, (0, t.ah)(), s.components);
            return n ? (0, a.jsx)(n, Object.assign({}, s, {
                children: (0, a.jsx)(e, s)
            })) : e(s)
        }
    }
},
function (s) {
    s.O(0, [774, 888, 179], function () {
        return s(s.s = 6008)
    }), _N_E = s.O()
}
]);
