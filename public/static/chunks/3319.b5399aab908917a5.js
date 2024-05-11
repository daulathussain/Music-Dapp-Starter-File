(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3319], {
        40506: function(s, c, l) {
            "use strict";
            l.r(c), l.d(c, {
                detectEnv: function() {
                    return detectEnv
                },
                detectOS: function() {
                    return browser_detectOS
                },
                formatIOSMobile: function() {
                    return formatIOSMobile
                },
                formatMobileRegistry: function() {
                    return formatMobileRegistry
                },
                formatMobileRegistryEntry: function() {
                    return formatMobileRegistryEntry
                },
                getClientMeta: function() {
                    return getClientMeta
                },
                getCrypto: function() {
                    return ta
                },
                getCryptoOrThrow: function() {
                    return ts
                },
                getDappRegistryUrl: function() {
                    return getDappRegistryUrl
                },
                getDocument: function() {
                    return te
                },
                getDocumentOrThrow: function() {
                    return tt
                },
                getFromWindow: function() {
                    return $
                },
                getFromWindowOrThrow: function() {
                    return Z
                },
                getLocal: function() {
                    return getLocal
                },
                getLocalStorage: function() {
                    return tc
                },
                getLocalStorageOrThrow: function() {
                    return tu
                },
                getLocation: function() {
                    return ti
                },
                getLocationOrThrow: function() {
                    return to
                },
                getMobileLinkRegistry: function() {
                    return getMobileLinkRegistry
                },
                getMobileRegistryEntry: function() {
                    return getMobileRegistryEntry
                },
                getNavigator: function() {
                    return tr
                },
                getNavigatorOrThrow: function() {
                    return tn
                },
                getWalletRegistryUrl: function() {
                    return getWalletRegistryUrl
                },
                isAndroid: function() {
                    return isAndroid
                },
                isBrowser: function() {
                    return isBrowser
                },
                isIOS: function() {
                    return isIOS
                },
                isMobile: function() {
                    return isMobile
                },
                isNode: function() {
                    return isNode
                },
                mobileLinkChoiceKey: function() {
                    return tl
                },
                removeLocal: function() {
                    return removeLocal
                },
                safeJsonParse: function() {
                    return json_safeJsonParse
                },
                safeJsonStringify: function() {
                    return json_safeJsonStringify
                },
                saveMobileLinkInfo: function() {
                    return saveMobileLinkInfo
                },
                setLocal: function() {
                    return setLocal
                }
            });
            var f = l(24860),
                B = l(8288),
                R = l(9389),
                __spreadArrays = function() {
                    for (var s = 0, c = 0, l = arguments.length; c < l; c++) s += arguments[c].length;
                    for (var f = Array(s), B = 0, c = 0; c < l; c++)
                        for (var R = arguments[c], I = 0, P = R.length; I < P; I++, B++) f[B] = R[I];
                    return f
                },
                BrowserInfo = function(s, c, l) {
                    this.name = s, this.version = c, this.os = l, this.type = "browser"
                },
                NodeInfo = function(s) {
                    this.version = s, this.type = "node", this.name = "node", this.os = R.platform
                },
                SearchBotDeviceInfo = function(s, c, l, f) {
                    this.name = s, this.version = c, this.os = l, this.bot = f, this.type = "bot-device"
                },
                BotInfo = function() {
                    this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null
                },
                ReactNativeInfo = function() {
                    this.type = "react-native", this.name = "react-native", this.version = null, this.os = null
                },
                I = /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
                P = [
                    ["aol", /AOLShield\/([0-9\._]+)/],
                    ["edge", /Edge\/([0-9\._]+)/],
                    ["edge-ios", /EdgiOS\/([0-9\._]+)/],
                    ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
                    ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
                    ["samsung", /SamsungBrowser\/([0-9\.]+)/],
                    ["silk", /\bSilk\/([0-9._-]+)\b/],
                    ["miui", /MiuiBrowser\/([0-9\.]+)$/],
                    ["beaker", /BeakerBrowser\/([0-9\.]+)/],
                    ["edge-chromium", /EdgA?\/([0-9\.]+)/],
                    ["chromium-webview", /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
                    ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
                    ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
                    ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
                    ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
                    ["fxios", /FxiOS\/([0-9\.]+)/],
                    ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
                    ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
                    ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
                    ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
                    ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
                    ["ie", /MSIE\s(7\.0)/],
                    ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
                    ["android", /Android\s([0-9\.]+)/],
                    ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
                    ["safari", /Version\/([0-9\._]+).*Safari/],
                    ["facebook", /FBAV\/([0-9\.]+)/],
                    ["instagram", /Instagram\s([0-9\.]+)/],
                    ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
                    ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
                    ["searchbot", /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/]
                ],
                W = [
                    ["iOS", /iP(hone|od|ad)/],
                    ["Android OS", /Android/],
                    ["BlackBerry OS", /BlackBerry|BB10/],
                    ["Windows Mobile", /IEMobile/],
                    ["Amazon OS", /Kindle/],
                    ["Windows 3.11", /Win16/],
                    ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
                    ["Windows 98", /(Windows 98)|(Win98)/],
                    ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
                    ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
                    ["Windows Server 2003", /(Windows NT 5.2)/],
                    ["Windows Vista", /(Windows NT 6.0)/],
                    ["Windows 7", /(Windows NT 6.1)/],
                    ["Windows 8", /(Windows NT 6.2)/],
                    ["Windows 8.1", /(Windows NT 6.3)/],
                    ["Windows 10", /(Windows NT 10.0)/],
                    ["Windows ME", /Windows ME/],
                    ["Open BSD", /OpenBSD/],
                    ["Sun OS", /SunOS/],
                    ["Chrome OS", /CrOS/],
                    ["Linux", /(Linux)|(X11)/],
                    ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
                    ["QNX", /QNX/],
                    ["BeOS", /BeOS/],
                    ["OS/2", /OS\/2/]
                ];

            function parseUserAgent(s) {
                var c = "" !== s && P.reduce(function(c, l) {
                    var f = l[0],
                        B = l[1];
                    if (c) return c;
                    var R = B.exec(s);
                    return !!R && [f, R]
                }, !1);
                if (!c) return null;
                var l = c[0],
                    f = c[1];
                if ("searchbot" === l) return new BotInfo;
                var B = f[1] && f[1].split(/[._]/).slice(0, 3);
                B ? B.length < 3 && (B = __spreadArrays(B, function(s) {
                    for (var c = [], l = 0; l < s; l++) c.push("0");
                    return c
                }(3 - B.length))) : B = [];
                var R = B.join("."),
                    $ = function(s) {
                        for (var c = 0, l = W.length; c < l; c++) {
                            var f = W[c],
                                B = f[0];
                            if (f[1].exec(s)) return B
                        }
                        return null
                    }(s),
                    Z = I.exec(s);
                return Z && Z[1] ? new SearchBotDeviceInfo(l, R, $, Z[1]) : new BrowserInfo(l, R, $)
            }

            function detectEnv(s) {
                return s ? parseUserAgent(s) : "undefined" == typeof document && "undefined" != typeof navigator && "ReactNative" === navigator.product ? new ReactNativeInfo : "undefined" != typeof navigator ? parseUserAgent(navigator.userAgent) : void 0 !== R && R.version ? new NodeInfo(R.version.slice(1)) : null
            }

            function browser_detectOS() {
                let s = detectEnv();
                return s && s.os ? s.os : void 0
            }

            function isAndroid() {
                let s = browser_detectOS();
                return !!s && s.toLowerCase().includes("android")
            }

            function isIOS() {
                let s = browser_detectOS();
                return !!s && (s.toLowerCase().includes("ios") || s.toLowerCase().includes("mac") && navigator.maxTouchPoints > 1)
            }

            function isMobile() {
                let s = browser_detectOS();
                return !!s && (isAndroid() || isIOS())
            }

            function isNode() {
                let s = detectEnv(),
                    c = !!s && !!s.name && "node" === s.name.toLowerCase();
                return c
            }

            function isBrowser() {
                let s = !isNode() && !!tr();
                return s
            }
            let $ = B.sD,
                Z = B.$2,
                tt = B.uT,
                te = B.Me,
                tn = B.Gw,
                tr = B.jW,
                to = B.UO,
                ti = B.k$,
                ts = B.VQ,
                ta = B.MX,
                tu = B.xP,
                tc = B.$o;

            function getClientMeta() {
                return f.D()
            }
            let json_safeJsonParse = function(s) {
                    if ("string" != typeof s) throw Error(`Cannot safe json parse value of type ${typeof s}`);
                    try {
                        return JSON.parse(s)
                    } catch (c) {
                        return s
                    }
                },
                json_safeJsonStringify = function(s) {
                    return "string" == typeof s ? s : JSON.stringify(s)
                };

            function setLocal(s, c) {
                let l = json_safeJsonStringify(c),
                    f = tc();
                f && f.setItem(s, l)
            }

            function getLocal(s) {
                let c = null,
                    l = tc();
                return l && (c = l.getItem(s)), c ? json_safeJsonParse(c) : c
            }

            function removeLocal(s) {
                let c = tc();
                c && c.removeItem(s)
            }
            let tl = "WALLETCONNECT_DEEPLINK_CHOICE";

            function formatIOSMobile(s, c) {
                let l = encodeURIComponent(s);
                return c.universalLink ? `${c.universalLink}/wc?uri=${l}` : c.deepLink ? `${c.deepLink}${c.deepLink.endsWith(":")?"//":"/"}wc?uri=${l}` : ""
            }

            function saveMobileLinkInfo(s) {
                let c = s.href.split("?")[0];
                setLocal(tl, Object.assign(Object.assign({}, s), {
                    href: c
                }))
            }

            function getMobileRegistryEntry(s, c) {
                return s.filter(s => s.name.toLowerCase().includes(c.toLowerCase()))[0]
            }

            function getMobileLinkRegistry(s, c) {
                let l = s;
                return c && (l = c.map(c => getMobileRegistryEntry(s, c)).filter(Boolean)), l
            }
            let th = "https://registry.walletconnect.com";

            function getWalletRegistryUrl() {
                return th + "/api/v2/wallets"
            }

            function getDappRegistryUrl() {
                return th + "/api/v2/dapps"
            }

            function formatMobileRegistryEntry(s, c = "mobile") {
                var l;
                return {
                    name: s.name || "",
                    shortName: s.metadata.shortName || "",
                    color: s.metadata.colors.primary || "",
                    logo: null !== (l = s.image_url.sm) && void 0 !== l ? l : "",
                    universalLink: s[c].universal || "",
                    deepLink: s[c].native || ""
                }
            }

            function formatMobileRegistry(s, c = "mobile") {
                return Object.values(s).filter(s => !!s[c].universal || !!s[c].native).map(s => formatMobileRegistryEntry(s, c))
            }
        },
        95125: function(s, c, l) {
            "use strict";
            l.d(c, {
                Z: function() {
                    return tc
                }
            });
            var f = {};
            l.r(f), l.d(f, {
                decrypt: function() {
                    return decrypt
                },
                encrypt: function() {
                    return encrypt
                },
                generateKey: function() {
                    return generateKey
                },
                verifyHmac: function() {
                    return verifyHmac
                }
            });
            var B = l(21794),
                R = class {
                    constructor() {
                        this._eventEmitters = [], "undefined" != typeof window && void 0 !== window.addEventListener && (window.addEventListener("online", () => this.trigger("online")), window.addEventListener("offline", () => this.trigger("offline")))
                    }
                    on(s, c) {
                        this._eventEmitters.push({
                            event: s,
                            callback: c
                        })
                    }
                    trigger(s) {
                        let c = [];
                        s && (c = this._eventEmitters.filter(c => c.event === s)), c.forEach(s => {
                            s.callback()
                        })
                    }
                };
            let I = void 0 !== l.g.WebSocket ? l.g.WebSocket : l(83708);
            var P = class {
                constructor(s) {
                    if (this.opts = s, this._queue = [], this._events = [], this._subscriptions = [], this._protocol = s.protocol, this._version = s.version, this._url = "", this._netMonitor = null, this._socket = null, this._nextSocket = null, this._subscriptions = s.subscriptions || [], this._netMonitor = s.netMonitor || new R, !s.url || "string" != typeof s.url) throw Error("Missing or invalid WebSocket url");
                    this._url = s.url, this._netMonitor.on("online", () => this._socketCreate())
                }
                set readyState(s) {}
                get readyState() {
                    return this._socket ? this._socket.readyState : -1
                }
                set connecting(s) {}
                get connecting() {
                    return 0 === this.readyState
                }
                set connected(s) {}
                get connected() {
                    return 1 === this.readyState
                }
                set closing(s) {}
                get closing() {
                    return 2 === this.readyState
                }
                set closed(s) {}
                get closed() {
                    return 3 === this.readyState
                }
                open() {
                    this._socketCreate()
                }
                close() {
                    this._socketClose()
                }
                send(s, c, l) {
                    if (!c || "string" != typeof c) throw Error("Missing or invalid topic field");
                    this._socketSend({
                        topic: c,
                        type: "pub",
                        payload: s,
                        silent: !!l
                    })
                }
                subscribe(s) {
                    this._socketSend({
                        topic: s,
                        type: "sub",
                        payload: "",
                        silent: !0
                    })
                }
                on(s, c) {
                    this._events.push({
                        event: s,
                        callback: c
                    })
                }
                _socketCreate() {
                    if (this._nextSocket) return;
                    let s = function(s, c, l) {
                        var f, R;
                        let I = s.startsWith("https") ? s.replace("https", "wss") : s.startsWith("http") ? s.replace("http", "ws") : s,
                            P = I.split("?"),
                            W = (0, B.jU)() ? {
                                protocol: c,
                                version: l,
                                env: "browser",
                                host: (null === (f = (0, B.k$)()) || void 0 === f ? void 0 : f.host) || ""
                            } : {
                                protocol: c,
                                version: l,
                                env: (null === (R = (0, B.G5)()) || void 0 === R ? void 0 : R.name) || ""
                            },
                            $ = (0, B.F4)((0, B.Wz)(P[1] || ""), W);
                        return P[0] + "?" + $
                    }(this._url, this._protocol, this._version);
                    if (this._nextSocket = new I(s), !this._nextSocket) throw Error("Failed to create socket");
                    this._nextSocket.onmessage = s => this._socketReceive(s), this._nextSocket.onopen = () => this._socketOpen(), this._nextSocket.onerror = s => this._socketError(s), this._nextSocket.onclose = () => {
                        setTimeout(() => {
                            this._nextSocket = null, this._socketCreate()
                        }, 1e3)
                    }
                }
                _socketOpen() {
                    this._socketClose(), this._socket = this._nextSocket, this._nextSocket = null, this._queueSubscriptions(), this._pushQueue()
                }
                _socketClose() {
                    this._socket && (this._socket.onclose = () => {}, this._socket.close())
                }
                _socketSend(s) {
                    let c = JSON.stringify(s);
                    this._socket && 1 === this._socket.readyState ? this._socket.send(c) : (this._setToQueue(s), this._socketCreate())
                }
                async _socketReceive(s) {
                    let c;
                    try {
                        c = JSON.parse(s.data)
                    } catch (s) {
                        return
                    }
                    if (this._socketSend({
                            topic: c.topic,
                            type: "ack",
                            payload: "",
                            silent: !0
                        }), this._socket && 1 === this._socket.readyState) {
                        let s = this._events.filter(s => "message" === s.event);
                        s && s.length && s.forEach(s => s.callback(c))
                    }
                }
                _socketError(s) {
                    let c = this._events.filter(s => "error" === s.event);
                    c && c.length && c.forEach(c => c.callback(s))
                }
                _queueSubscriptions() {
                    let s = this._subscriptions;
                    s.forEach(s => this._queue.push({
                        topic: s,
                        type: "sub",
                        payload: "",
                        silent: !0
                    })), this._subscriptions = this.opts.subscriptions || []
                }
                _setToQueue(s) {
                    this._queue.push(s)
                }
                _pushQueue() {
                    let s = this._queue;
                    s.forEach(s => this._socketSend(s)), this._queue = []
                }
            };
            let W = "Session currently connected",
                $ = "Session currently disconnected",
                Z = "JSON RPC response format is invalid",
                tt = "User close QRCode Modal";
            var te = class {
                    constructor() {
                        this._eventEmitters = []
                    }
                    subscribe(s) {
                        this._eventEmitters.push(s)
                    }
                    unsubscribe(s) {
                        this._eventEmitters = this._eventEmitters.filter(c => c.event !== s)
                    }
                    trigger(s) {
                        let c, l = [];
                        (c = (0, B.DW)(s) ? s.method : (0, B.vF)(s) || (0, B.R)(s) ? `response:${s.id}` : (0, B.tf)(s) ? s.event : "") && (l = this._eventEmitters.filter(s => s.event === c)), l && l.length || (0, B.jA)(c) || (0, B.tf)(c) || (l = this._eventEmitters.filter(s => "call_request" === s.event)), l.forEach(c => {
                            if ((0, B.R)(s)) {
                                let l = Error(s.error.message);
                                c.callback(l, null)
                            } else c.callback(null, s)
                        })
                    }
                },
                tn = class {
                    constructor(s = "walletconnect") {
                        this.storageId = s
                    }
                    getSession() {
                        let s = null,
                            c = (0, B.tv)(this.storageId);
                        return c && (0, B.yr)(c) && (s = c), s
                    }
                    setSession(s) {
                        return (0, B.co)(this.storageId, s), s
                    }
                    removeSession() {
                        (0, B.uj)(this.storageId)
                    }
                };
            let tr = "abcdefghijklmnopqrstuvwxyz0123456789".split("").map(s => `https://${s}.bridge.walletconnect.org`);
            var to = class {
                    constructor(s) {
                        if (this.protocol = "wc", this.version = 1, this._bridge = "", this._key = null, this._clientId = "", this._clientMeta = null, this._peerId = "", this._peerMeta = null, this._handshakeId = 0, this._handshakeTopic = "", this._connected = !1, this._accounts = [], this._chainId = 0, this._networkId = 0, this._rpcUrl = "", this._eventManager = new te, this._clientMeta = (0, B.AS)() || s.connectorOpts.clientMeta || null, this._cryptoLib = s.cryptoLib, this._sessionStorage = s.sessionStorage || new tn(s.connectorOpts.storageId), this._qrcodeModal = s.connectorOpts.qrcodeModal, this._qrcodeModalOptions = s.connectorOpts.qrcodeModalOptions, this._signingMethods = [...B.V7, ...s.connectorOpts.signingMethods || []], !s.connectorOpts.bridge && !s.connectorOpts.uri && !s.connectorOpts.session) throw Error("Missing one of the required parameters: bridge / uri / session");
                        if (s.connectorOpts.bridge) {
                            var c, l;
                            this.bridge = "walletconnect.org" !== (0, (0, ((l = c = s.connectorOpts.bridge).indexOf("//") > -1 ? l.split("/")[2] : l.split("/")[0]).split(":")[0]).split("?")[0]).split(".").slice(-2).join(".") ? c : tr[Math.floor(Math.random() * tr.length)]
                        }
                        s.connectorOpts.uri && (this.uri = s.connectorOpts.uri);
                        let f = s.connectorOpts.session || this._getStorageSession();
                        f && (this.session = f), this.handshakeId && this._subscribeToSessionResponse(this.handshakeId, "Session request rejected"), this._transport = s.transport || new P({
                            protocol: this.protocol,
                            version: this.version,
                            url: this.bridge,
                            subscriptions: [this.clientId]
                        }), this._subscribeToInternalEvents(), this._initTransport(), s.connectorOpts.uri && this._subscribeToSessionRequest(), s.pushServerOpts && this._registerPushServer(s.pushServerOpts)
                    }
                    set bridge(s) {
                        s && (this._bridge = s)
                    }
                    get bridge() {
                        return this._bridge
                    }
                    set key(s) {
                        if (!s) return;
                        let c = (0, B.y_)(s);
                        this._key = c
                    }
                    get key() {
                        if (this._key) {
                            let s = (0, B.wb)(this._key, !0);
                            return s
                        }
                        return ""
                    }
                    set clientId(s) {
                        s && (this._clientId = s)
                    }
                    get clientId() {
                        let s = this._clientId;
                        return s || (s = this._clientId = (0, B.Vj)()), this._clientId
                    }
                    set peerId(s) {
                        s && (this._peerId = s)
                    }
                    get peerId() {
                        return this._peerId
                    }
                    set clientMeta(s) {}
                    get clientMeta() {
                        let s = this._clientMeta;
                        return s || (s = this._clientMeta = (0, B.AS)()), s
                    }
                    set peerMeta(s) {
                        this._peerMeta = s
                    }
                    get peerMeta() {
                        let s = this._peerMeta;
                        return s
                    }
                    set handshakeTopic(s) {
                        s && (this._handshakeTopic = s)
                    }
                    get handshakeTopic() {
                        return this._handshakeTopic
                    }
                    set handshakeId(s) {
                        s && (this._handshakeId = s)
                    }
                    get handshakeId() {
                        return this._handshakeId
                    }
                    get uri() {
                        let s = this._formatUri();
                        return s
                    }
                    set uri(s) {
                        if (!s) return;
                        let {
                            handshakeTopic: c,
                            bridge: l,
                            key: f
                        } = this._parseUri(s);
                        this.handshakeTopic = c, this.bridge = l, this.key = f
                    }
                    set chainId(s) {
                        this._chainId = s
                    }
                    get chainId() {
                        let s = this._chainId;
                        return s
                    }
                    set networkId(s) {
                        this._networkId = s
                    }
                    get networkId() {
                        let s = this._networkId;
                        return s
                    }
                    set accounts(s) {
                        this._accounts = s
                    }
                    get accounts() {
                        let s = this._accounts;
                        return s
                    }
                    set rpcUrl(s) {
                        this._rpcUrl = s
                    }
                    get rpcUrl() {
                        let s = this._rpcUrl;
                        return s
                    }
                    set connected(s) {}
                    get connected() {
                        return this._connected
                    }
                    set pending(s) {}
                    get pending() {
                        return !!this._handshakeTopic
                    }
                    get session() {
                        return {
                            connected: this.connected,
                            accounts: this.accounts,
                            chainId: this.chainId,
                            bridge: this.bridge,
                            key: this.key,
                            clientId: this.clientId,
                            clientMeta: this.clientMeta,
                            peerId: this.peerId,
                            peerMeta: this.peerMeta,
                            handshakeId: this.handshakeId,
                            handshakeTopic: this.handshakeTopic
                        }
                    }
                    set session(s) {
                        s && (this._connected = s.connected, this.accounts = s.accounts, this.chainId = s.chainId, this.bridge = s.bridge, this.key = s.key, this.clientId = s.clientId, this.clientMeta = s.clientMeta, this.peerId = s.peerId, this.peerMeta = s.peerMeta, this.handshakeId = s.handshakeId, this.handshakeTopic = s.handshakeTopic)
                    }
                    on(s, c) {
                        this._eventManager.subscribe({
                            event: s,
                            callback: c
                        })
                    }
                    off(s) {
                        this._eventManager.unsubscribe(s)
                    }
                    async createInstantRequest(s) {
                        this._key = await this._generateKey();
                        let c = this._formatRequest({
                            method: "wc_instantRequest",
                            params: [{
                                peerId: this.clientId,
                                peerMeta: this.clientMeta,
                                request: this._formatRequest(s)
                            }]
                        });
                        this.handshakeId = c.id, this.handshakeTopic = (0, B.Vj)(), this._eventManager.trigger({
                            event: "display_uri",
                            params: [this.uri]
                        }), this.on("modal_closed", () => {
                            throw Error(tt)
                        });
                        let endInstantRequest = () => {
                            this.killSession()
                        };
                        try {
                            let s = await this._sendCallRequest(c);
                            return s && endInstantRequest(), s
                        } catch (s) {
                            throw endInstantRequest(), s
                        }
                    }
                    async connect(s) {
                        if (!this._qrcodeModal) throw Error("QRCode Modal not provided");
                        return this.connected ? {
                            chainId: this.chainId,
                            accounts: this.accounts
                        } : (await this.createSession(s), new Promise(async (s, c) => {
                            this.on("modal_closed", () => c(Error(tt))), this.on("connect", (l, f) => {
                                if (l) return c(l);
                                s(f.params[0])
                            })
                        }))
                    }
                    async createSession(s) {
                        if (this._connected) throw Error(W);
                        if (this.pending) return;
                        this._key = await this._generateKey();
                        let c = this._formatRequest({
                            method: "wc_sessionRequest",
                            params: [{
                                peerId: this.clientId,
                                peerMeta: this.clientMeta,
                                chainId: s && s.chainId ? s.chainId : null
                            }]
                        });
                        this.handshakeId = c.id, this.handshakeTopic = (0, B.Vj)(), this._sendSessionRequest(c, "Session update rejected", {
                            topic: this.handshakeTopic
                        }), this._eventManager.trigger({
                            event: "display_uri",
                            params: [this.uri]
                        })
                    }
                    approveSession(s) {
                        if (this._connected) throw Error(W);
                        this.chainId = s.chainId, this.accounts = s.accounts, this.networkId = s.networkId || 0, this.rpcUrl = s.rpcUrl || "";
                        let c = {
                                approved: !0,
                                chainId: this.chainId,
                                networkId: this.networkId,
                                accounts: this.accounts,
                                rpcUrl: this.rpcUrl,
                                peerId: this.clientId,
                                peerMeta: this.clientMeta
                            },
                            l = {
                                id: this.handshakeId,
                                jsonrpc: "2.0",
                                result: c
                            };
                        this._sendResponse(l), this._connected = !0, this._setStorageSession(), this._eventManager.trigger({
                            event: "connect",
                            params: [{
                                peerId: this.peerId,
                                peerMeta: this.peerMeta,
                                chainId: this.chainId,
                                accounts: this.accounts
                            }]
                        })
                    }
                    rejectSession(s) {
                        if (this._connected) throw Error(W);
                        let c = s && s.message ? s.message : "Session Rejected",
                            l = this._formatResponse({
                                id: this.handshakeId,
                                error: {
                                    message: c
                                }
                            });
                        this._sendResponse(l), this._connected = !1, this._eventManager.trigger({
                            event: "disconnect",
                            params: [{
                                message: c
                            }]
                        }), this._removeStorageSession()
                    }
                    updateSession(s) {
                        if (!this._connected) throw Error($);
                        this.chainId = s.chainId, this.accounts = s.accounts, this.networkId = s.networkId || 0, this.rpcUrl = s.rpcUrl || "";
                        let c = {
                                approved: !0,
                                chainId: this.chainId,
                                networkId: this.networkId,
                                accounts: this.accounts,
                                rpcUrl: this.rpcUrl
                            },
                            l = this._formatRequest({
                                method: "wc_sessionUpdate",
                                params: [c]
                            });
                        this._sendSessionRequest(l, "Session update rejected"), this._eventManager.trigger({
                            event: "session_update",
                            params: [{
                                chainId: this.chainId,
                                accounts: this.accounts
                            }]
                        }), this._manageStorageSession()
                    }
                    async killSession(s) {
                        let c = s ? s.message : "Session Disconnected",
                            l = this._formatRequest({
                                method: "wc_sessionUpdate",
                                params: [{
                                    approved: !1,
                                    chainId: null,
                                    networkId: null,
                                    accounts: null
                                }]
                            });
                        await this._sendRequest(l), this._handleSessionDisconnect(c)
                    }
                    async sendTransaction(s) {
                        if (!this._connected) throw Error($);
                        let c = (0, B.Ky)(s),
                            l = this._formatRequest({
                                method: "eth_sendTransaction",
                                params: [c]
                            }),
                            f = await this._sendCallRequest(l);
                        return f
                    }
                    async signTransaction(s) {
                        if (!this._connected) throw Error($);
                        let c = (0, B.Ky)(s),
                            l = this._formatRequest({
                                method: "eth_signTransaction",
                                params: [c]
                            }),
                            f = await this._sendCallRequest(l);
                        return f
                    }
                    async signMessage(s) {
                        if (!this._connected) throw Error($);
                        let c = this._formatRequest({
                                method: "eth_sign",
                                params: s
                            }),
                            l = await this._sendCallRequest(c);
                        return l
                    }
                    async signPersonalMessage(s) {
                        if (!this._connected) throw Error($);
                        s = (0, B.bW)(s);
                        let c = this._formatRequest({
                                method: "personal_sign",
                                params: s
                            }),
                            l = await this._sendCallRequest(c);
                        return l
                    }
                    async signTypedData(s) {
                        if (!this._connected) throw Error($);
                        let c = this._formatRequest({
                                method: "eth_signTypedData",
                                params: s
                            }),
                            l = await this._sendCallRequest(c);
                        return l
                    }
                    async updateChain(s) {
                        if (!this._connected) throw Error("Session currently disconnected");
                        let c = this._formatRequest({
                                method: "wallet_updateChain",
                                params: [s]
                            }),
                            l = await this._sendCallRequest(c);
                        return l
                    }
                    unsafeSend(s, c) {
                        return this._sendRequest(s, c), this._eventManager.trigger({
                            event: "call_request_sent",
                            params: [{
                                request: s,
                                options: c
                            }]
                        }), new Promise((c, l) => {
                            this._subscribeToResponse(s.id, (s, f) => {
                                if (s) {
                                    l(s);
                                    return
                                }
                                if (!f) throw Error("Missing JSON RPC response");
                                c(f)
                            })
                        })
                    }
                    async sendCustomRequest(s, c) {
                        if (!this._connected) throw Error($);
                        switch (s.method) {
                            case "eth_accounts":
                                return this.accounts;
                            case "eth_chainId":
                                return (0, B.uA)(this.chainId);
                            case "eth_sendTransaction":
                            case "eth_signTransaction":
                                s.params && (s.params[0] = (0, B.Ky)(s.params[0]));
                                break;
                            case "personal_sign":
                                s.params && (s.params = (0, B.bW)(s.params))
                        }
                        let l = this._formatRequest(s),
                            f = await this._sendCallRequest(l, c);
                        return f
                    }
                    approveRequest(s) {
                        if ((0, B.vF)(s)) {
                            let c = this._formatResponse(s);
                            this._sendResponse(c)
                        } else throw Error('JSON-RPC success response must include "result" field')
                    }
                    rejectRequest(s) {
                        if ((0, B.R)(s)) {
                            let c = this._formatResponse(s);
                            this._sendResponse(c)
                        } else throw Error('JSON-RPC error response must include "error" field')
                    }
                    transportClose() {
                        this._transport.close()
                    }
                    async _sendRequest(s, c) {
                        let l = this._formatRequest(s),
                            f = await this._encrypt(l),
                            R = void 0 !== (null == c ? void 0 : c.topic) ? c.topic : this.peerId,
                            I = JSON.stringify(f),
                            P = void 0 !== (null == c ? void 0 : c.forcePushNotification) ? !c.forcePushNotification : (0, B.wM)(l);
                        this._transport.send(I, R, P)
                    }
                    async _sendResponse(s) {
                        let c = await this._encrypt(s),
                            l = this.peerId,
                            f = JSON.stringify(c);
                        this._transport.send(f, l, !0)
                    }
                    async _sendSessionRequest(s, c, l) {
                        this._sendRequest(s, l), this._subscribeToSessionResponse(s.id, c)
                    }
                    _sendCallRequest(s, c) {
                        return this._sendRequest(s, c), this._eventManager.trigger({
                            event: "call_request_sent",
                            params: [{
                                request: s,
                                options: c
                            }]
                        }), this._subscribeToCallResponse(s.id)
                    }
                    _formatRequest(s) {
                        if (void 0 === s.method) throw Error('JSON RPC request must have valid "method" value');
                        let c = {
                            id: void 0 === s.id ? (0, B.o0)() : s.id,
                            jsonrpc: "2.0",
                            method: s.method,
                            params: void 0 === s.params ? [] : s.params
                        };
                        return c
                    }
                    _formatResponse(s) {
                        if (void 0 === s.id) throw Error('JSON RPC request must have valid "id" value');
                        let c = {
                            id: s.id,
                            jsonrpc: "2.0"
                        };
                        if ((0, B.R)(s)) {
                            let l = (0, B.sH)(s.error),
                                f = Object.assign(Object.assign(Object.assign({}, c), s), {
                                    error: l
                                });
                            return f
                        }
                        if ((0, B.vF)(s)) {
                            let l = Object.assign(Object.assign({}, c), s);
                            return l
                        }
                        throw Error(Z)
                    }
                    _handleSessionDisconnect(s) {
                        this._connected || (this._qrcodeModal && this._qrcodeModal.close(), (0, B.uj)(B.FT)), this._connected && (this._connected = !1), this._handshakeId && (this._handshakeId = 0), this._handshakeTopic && (this._handshakeTopic = ""), this._peerId && (this._peerId = ""), this._eventManager.trigger({
                            event: "disconnect",
                            params: [{
                                message: s || "Session Disconnected"
                            }]
                        }), this._removeStorageSession(), this.transportClose()
                    }
                    _handleSessionResponse(s, c) {
                        c && c.approved ? (this._connected ? (c.chainId && (this.chainId = c.chainId), c.accounts && (this.accounts = c.accounts), this._eventManager.trigger({
                            event: "session_update",
                            params: [{
                                chainId: this.chainId,
                                accounts: this.accounts
                            }]
                        })) : (this._connected = !0, c.chainId && (this.chainId = c.chainId), c.accounts && (this.accounts = c.accounts), c.peerId && !this.peerId && (this.peerId = c.peerId), c.peerMeta && !this.peerMeta && (this.peerMeta = c.peerMeta), this._eventManager.trigger({
                            event: "connect",
                            params: [{
                                peerId: this.peerId,
                                peerMeta: this.peerMeta,
                                chainId: this.chainId,
                                accounts: this.accounts
                            }]
                        })), this._manageStorageSession()) : this._handleSessionDisconnect(s)
                    }
                    async _handleIncomingMessages(s) {
                        let c;
                        let l = [this.clientId, this.handshakeTopic];
                        if (!l.includes(s.topic)) return;
                        try {
                            c = JSON.parse(s.payload)
                        } catch (s) {
                            return
                        }
                        let f = await this._decrypt(c);
                        f && this._eventManager.trigger(f)
                    }
                    _subscribeToSessionRequest() {
                        this._transport.subscribe(this.handshakeTopic)
                    }
                    _subscribeToResponse(s, c) {
                        this.on(`response:${s}`, c)
                    }
                    _subscribeToSessionResponse(s, c) {
                        this._subscribeToResponse(s, (s, l) => {
                            if (s) {
                                this._handleSessionResponse(s.message);
                                return
                            }(0, B.vF)(l) ? this._handleSessionResponse(c, l.result): l.error && l.error.message ? this._handleSessionResponse(l.error.message) : this._handleSessionResponse(c)
                        })
                    }
                    _subscribeToCallResponse(s) {
                        return new Promise((c, l) => {
                            this._subscribeToResponse(s, (s, f) => {
                                if (s) {
                                    l(s);
                                    return
                                }(0, B.vF)(f) ? c(f.result): f.error && f.error.message ? l(f.error) : l(Error(Z))
                            })
                        })
                    }
                    _subscribeToInternalEvents() {
                        this.on("display_uri", () => {
                            this._qrcodeModal && this._qrcodeModal.open(this.uri, () => {
                                this._eventManager.trigger({
                                    event: "modal_closed",
                                    params: []
                                })
                            }, this._qrcodeModalOptions)
                        }), this.on("connect", () => {
                            this._qrcodeModal && this._qrcodeModal.close()
                        }), this.on("call_request_sent", (s, c) => {
                            let {
                                request: l
                            } = c.params[0];
                            if ((0, B.tq)() && this._signingMethods.includes(l.method)) {
                                let s = (0, B.tv)(B.FT);
                                s && (window.location.href = s.href)
                            }
                        }), this.on("wc_sessionRequest", (s, c) => {
                            s && this._eventManager.trigger({
                                event: "error",
                                params: [{
                                    code: "SESSION_REQUEST_ERROR",
                                    message: s.toString()
                                }]
                            }), this.handshakeId = c.id, this.peerId = c.params[0].peerId, this.peerMeta = c.params[0].peerMeta;
                            let l = Object.assign(Object.assign({}, c), {
                                method: "session_request"
                            });
                            this._eventManager.trigger(l)
                        }), this.on("wc_sessionUpdate", (s, c) => {
                            s && this._handleSessionResponse(s.message), this._handleSessionResponse("Session disconnected", c.params[0])
                        })
                    }
                    _initTransport() {
                        this._transport.on("message", s => this._handleIncomingMessages(s)), this._transport.on("open", () => this._eventManager.trigger({
                            event: "transport_open",
                            params: []
                        })), this._transport.on("close", () => this._eventManager.trigger({
                            event: "transport_close",
                            params: []
                        })), this._transport.on("error", () => this._eventManager.trigger({
                            event: "transport_error",
                            params: ["Websocket connection failed"]
                        })), this._transport.open()
                    }
                    _formatUri() {
                        let s = this.protocol,
                            c = this.handshakeTopic,
                            l = this.version,
                            f = encodeURIComponent(this.bridge),
                            B = this.key,
                            R = `${s}:${c}@${l}?bridge=${f}&key=${B}`;
                        return R
                    }
                    _parseUri(s) {
                        let c = (0, B.GZ)(s);
                        if (c.protocol === this.protocol) {
                            if (!c.handshakeTopic) throw Error("Invalid or missing handshakeTopic parameter value");
                            let s = c.handshakeTopic;
                            if (!c.bridge) throw Error("Invalid or missing bridge url parameter value");
                            let l = decodeURIComponent(c.bridge);
                            if (!c.key) throw Error("Invalid or missing key parameter value");
                            let f = c.key;
                            return {
                                handshakeTopic: s,
                                bridge: l,
                                key: f
                            }
                        }
                        throw Error("URI format is invalid")
                    }
                    async _generateKey() {
                        if (this._cryptoLib) {
                            let s = await this._cryptoLib.generateKey();
                            return s
                        }
                        return null
                    }
                    async _encrypt(s) {
                        let c = this._key;
                        if (this._cryptoLib && c) {
                            let l = await this._cryptoLib.encrypt(s, c);
                            return l
                        }
                        return null
                    }
                    async _decrypt(s) {
                        let c = this._key;
                        if (this._cryptoLib && c) {
                            let l = await this._cryptoLib.decrypt(s, c);
                            return l
                        }
                        return null
                    }
                    _getStorageSession() {
                        let s = null;
                        return this._sessionStorage && (s = this._sessionStorage.getSession()), s
                    }
                    _setStorageSession() {
                        this._sessionStorage && this._sessionStorage.setSession(this.session)
                    }
                    _removeStorageSession() {
                        this._sessionStorage && this._sessionStorage.removeSession()
                    }
                    _manageStorageSession() {
                        this._connected ? this._setStorageSession() : this._removeStorageSession()
                    }
                    _registerPushServer(s) {
                        if (!s.url || "string" != typeof s.url) throw Error("Invalid or missing pushServerOpts.url parameter value");
                        if (!s.type || "string" != typeof s.type) throw Error("Invalid or missing pushServerOpts.type parameter value");
                        if (!s.token || "string" != typeof s.token) throw Error("Invalid or missing pushServerOpts.token parameter value");
                        let c = {
                            bridge: this.bridge,
                            topic: this.clientId,
                            type: s.type,
                            token: s.token,
                            peerName: "",
                            language: s.language || ""
                        };
                        this.on("connect", async (l, f) => {
                            if (l) throw l;
                            if (s.peerMeta) {
                                let s = f.params[0].peerMeta.name;
                                c.peerName = s
                            }
                            try {
                                let l = await fetch(`${s.url}/new`, {
                                        method: "POST",
                                        headers: {
                                            Accept: "application/json",
                                            "Content-Type": "application/json"
                                        },
                                        body: JSON.stringify(c)
                                    }),
                                    f = await l.json();
                                if (!f.success) throw Error("Failed to register in Push Server")
                            } catch (s) {
                                throw Error("Failed to register in Push Server")
                            }
                        })
                    }
                },
                ti = l(35144);
            let ts = "AES-CBC",
                ta = "HMAC";
            async function browserImportKey(s, c = ts) {
                return ti.getSubtleCrypto().importKey("raw", s, c === ts ? {
                    length: 256,
                    name: ts
                } : {
                    hash: {
                        name: "SHA-256"
                    },
                    name: ta
                }, !0, c === ts ? ["encrypt", "decrypt"] : ["sign", "verify"])
            }
            async function browserAesEncrypt(s, c, l) {
                let f = ti.getSubtleCrypto(),
                    B = await browserImportKey(c, ts),
                    R = await f.encrypt({
                        iv: s,
                        name: ts
                    }, B, l);
                return new Uint8Array(R)
            }
            async function browserAesDecrypt(s, c, l) {
                let f = ti.getSubtleCrypto(),
                    B = await browserImportKey(c, ts),
                    R = await f.decrypt({
                        iv: s,
                        name: ts
                    }, B, l);
                return new Uint8Array(R)
            }
            async function browser_browserHmacSha256Sign(s, c) {
                let l = ti.getSubtleCrypto(),
                    f = await browserImportKey(s, ta),
                    B = await l.sign({
                        length: 256,
                        name: ta
                    }, f, c);
                return new Uint8Array(B)
            }
            async function hmacSha256Sign(s, c) {
                let l = await browser_browserHmacSha256Sign(s, c);
                return l
            }
            var tu = l(54852);
            async function generateKey(s) {
                let c = function(s) {
                        let c = ti.getBrowerCrypto();
                        return c.getRandomValues(new Uint8Array(s))
                    }((s || 256) / 8),
                    l = (0, B.rw)(tu.QM(c));
                return l
            }
            async function verifyHmac(s, c) {
                let l = tu.eu(s.data),
                    f = tu.eu(s.iv),
                    B = tu.eu(s.hmac),
                    R = tu.ek(B, !1),
                    I = tu.w3(l, f),
                    P = await hmacSha256Sign(c, I),
                    W = tu.ek(P, !1);
                return tu.KT(R) === tu.KT(W)
            }
            async function encrypt(s, c, l) {
                let f = tu._W((0, B.aU)(c)),
                    R = l || await generateKey(128),
                    I = tu._W((0, B.aU)(R)),
                    P = tu.ek(I, !1),
                    W = JSON.stringify(s),
                    $ = tu.ZV(W),
                    Z = await browserAesEncrypt(I, f, $),
                    tt = tu.ek(Z, !1),
                    te = tu.w3(Z, I),
                    tn = await hmacSha256Sign(f, te),
                    tr = tu.ek(tn, !1);
                return {
                    data: tt,
                    hmac: tr,
                    iv: P
                }
            }
            async function decrypt(s, c) {
                let l;
                let f = tu._W((0, B.aU)(c));
                if (!f) throw Error("Missing key: required for decryption");
                let R = await verifyHmac(s, f);
                if (!R) return null;
                let I = tu.eu(s.data),
                    P = tu.eu(s.iv),
                    W = await browserAesDecrypt(P, f, I),
                    $ = tu.oO(W);
                try {
                    l = JSON.parse($)
                } catch (s) {
                    return null
                }
                return l
            }
            var tc = class extends to {
                constructor(s, c) {
                    super({
                        cryptoLib: f,
                        connectorOpts: s,
                        pushServerOpts: c
                    })
                }
            }
        },
        54852: function(s, c, l) {
            "use strict";
            l.d(c, {
                A7: function() {
                    return isHexString
                },
                KT: function() {
                    return removeHexPrefix
                },
                L_: function() {
                    return addHexPrefix
                },
                OG: function() {
                    return utf8ToHex
                },
                QM: function() {
                    return arrayToBuffer
                },
                ZV: function() {
                    return utf8ToArray
                },
                Zr: function() {
                    return utf8ToBuffer
                },
                _W: function() {
                    return bufferToArray
                },
                ek: function() {
                    return arrayToHex
                },
                eu: function() {
                    return hexToArray
                },
                oO: function() {
                    return arrayToUtf8
                },
                w3: function() {
                    return concatArrays
                },
                wL: function() {
                    return removeHexLeadingZeros
                },
                xb: function() {
                    return sanitizeHex
                }
            }), l(85341);
            var f = l(31159),
                B = l.n(f),
                R = l(97115).Buffer;
            let I = "utf8";

            function bufferToArray(s) {
                return new Uint8Array(s)
            }

            function bufferToHex(s, c = !1) {
                let l = s.toString("hex");
                return c ? addHexPrefix(l) : l
            }

            function arrayToBuffer(s) {
                return B()(s)
            }

            function arrayToHex(s, c = !1) {
                return bufferToHex(arrayToBuffer(s), c)
            }

            function arrayToUtf8(s) {
                return arrayToBuffer(s).toString(I)
            }

            function hexToArray(s) {
                return bufferToArray(R.from(removeHexPrefix(s), "hex"))
            }

            function utf8ToBuffer(s) {
                return R.from(s, I)
            }

            function utf8ToArray(s) {
                return bufferToArray(utf8ToBuffer(s))
            }

            function utf8ToHex(s, c = !1) {
                return bufferToHex(utf8ToBuffer(s), c)
            }

            function isHexString(s, c) {
                return "string" == typeof s && !!s.match(/^0x[0-9A-Fa-f]*$/) && (!c || s.length === 2 + 2 * c)
            }

            function concatArrays(...s) {
                let c = [];
                return s.forEach(s => c = c.concat(Array.from(s))), new Uint8Array([...c])
            }

            function removeHexPrefix(s) {
                return s.replace(/^0x/, "")
            }

            function addHexPrefix(s) {
                return s.startsWith("0x") ? s : `0x${s}`
            }

            function sanitizeHex(s) {
                return (s = function(s, c = 8, l = "0") {
                    return function(s, c, l = "0") {
                        return function(s, c, l, f = "0") {
                            let B = c - s.length,
                                R = s;
                            if (B > 0) {
                                let c = f.repeat(B);
                                R = l ? c + s : s + c
                            }
                            return R
                        }(s, c, !0, l)
                    }(s, function(s, c = 8) {
                        let l = s % c;
                        return l ? (s - l) / c * c + c : s
                    }(s.length, c), l)
                }(s = removeHexPrefix(s), 2)) && (s = addHexPrefix(s)), s
            }

            function removeHexLeadingZeros(s) {
                let c = s.startsWith("0x");
                return s = (s = removeHexPrefix(s)).startsWith("0") ? s.substring(1) : s, c ? addHexPrefix(s) : s
            }
        },
        21881: function(s, c, l) {
            "use strict";

            function getBrowerCrypto() {
                return (null === l.g || void 0 === l.g ? void 0 : l.g.crypto) || (null === l.g || void 0 === l.g ? void 0 : l.g.msCrypto) || {}
            }

            function getSubtleCrypto() {
                let s = getBrowerCrypto();
                return s.subtle || s.webkitSubtle
            }
            Object.defineProperty(c, "__esModule", {
                value: !0
            }), c.isBrowserCryptoAvailable = c.getSubtleCrypto = c.getBrowerCrypto = void 0, c.getBrowerCrypto = getBrowerCrypto, c.getSubtleCrypto = getSubtleCrypto, c.isBrowserCryptoAvailable = function() {
                return !!getBrowerCrypto() && !!getSubtleCrypto()
            }
        },
        14807: function(s, c, l) {
            "use strict";
            var f = l(9389);

            function isReactNative() {
                return "undefined" == typeof document && "undefined" != typeof navigator && "ReactNative" === navigator.product
            }

            function isNode() {
                return void 0 !== f && void 0 !== f.versions && void 0 !== f.versions.node
            }
            Object.defineProperty(c, "__esModule", {
                value: !0
            }), c.isBrowser = c.isNode = c.isReactNative = void 0, c.isReactNative = isReactNative, c.isNode = isNode, c.isBrowser = function() {
                return !isReactNative() && !isNode()
            }
        },
        35144: function(s, c, l) {
            "use strict";
            Object.defineProperty(c, "__esModule", {
                value: !0
            });
            let f = l(1702);
            f.__exportStar(l(21881), c), f.__exportStar(l(14807), c)
        },
        13319: function(s, c, l) {
            "use strict";
            l.r(c), l.d(c, {
                default: function() {
                    return tn
                }
            });
            var f = l(83760),
                B = l.n(f),
                R = l(22458),
                I = l(49961),
                P = l(21794),
                W = l(95125),
                $ = l(75266),
                Z = l.n($),
                tt = l(51714),
                te = l(58256);
            let SignerConnection = class SignerConnection extends tt.XR {
                constructor(s) {
                    super(), this.events = new(B()), this.accounts = [], this.chainId = 1, this.pending = !1, this.bridge = "https://bridge.walletconnect.org", this.qrcode = !0, this.qrcodeModalOptions = void 0, this.opts = s, this.chainId = (null == s ? void 0 : s.chainId) || this.chainId, this.wc = this.register(s)
                }
                get connected() {
                    return void 0 !== this.wc && this.wc.connected
                }
                get connecting() {
                    return this.pending
                }
                get connector() {
                    return this.wc = this.register(this.opts), this.wc
                }
                on(s, c) {
                    this.events.on(s, c)
                }
                once(s, c) {
                    this.events.once(s, c)
                }
                off(s, c) {
                    this.events.off(s, c)
                }
                removeListener(s, c) {
                    this.events.removeListener(s, c)
                }
                async open(s) {
                    if (this.connected) {
                        this.onOpen();
                        return
                    }
                    return new Promise((c, l) => {
                        this.on("error", s => {
                            l(s)
                        }), this.on("open", () => {
                            c()
                        }), this.create(s)
                    })
                }
                async close() {
                    void 0 !== this.wc && (this.wc.connected && this.wc.killSession(), this.onClose())
                }
                async send(s) {
                    this.wc = this.register(this.opts), this.connected || await this.open(), this.sendPayload(s).then(s => this.events.emit("payload", s)).catch(c => this.events.emit("payload", (0, te.formatJsonRpcError)(s.id, c.message)))
                }
                register(s) {
                    if (this.wc) return this.wc;
                    this.opts = s || this.opts, this.bridge = (null == s ? void 0 : s.connector) ? s.connector.bridge : (null == s ? void 0 : s.bridge) || "https://bridge.walletconnect.org", this.qrcode = void 0 === (null == s ? void 0 : s.qrcode) || !1 !== s.qrcode, this.chainId = void 0 !== (null == s ? void 0 : s.chainId) ? s.chainId : this.chainId, this.qrcodeModalOptions = null == s ? void 0 : s.qrcodeModalOptions;
                    let c = {
                        bridge: this.bridge,
                        qrcodeModal: this.qrcode ? Z() : void 0,
                        qrcodeModalOptions: this.qrcodeModalOptions,
                        storageId: null == s ? void 0 : s.storageId,
                        signingMethods: null == s ? void 0 : s.signingMethods,
                        clientMeta: null == s ? void 0 : s.clientMeta
                    };
                    if (this.wc = void 0 !== (null == s ? void 0 : s.connector) ? s.connector : new W.Z(c), void 0 === this.wc) throw Error("Failed to register WalletConnect connector");
                    return this.wc.accounts.length && (this.accounts = this.wc.accounts), this.wc.chainId && (this.chainId = this.wc.chainId), this.registerConnectorEvents(), this.wc
                }
                onOpen(s) {
                    this.pending = !1, s && (this.wc = s), this.events.emit("open")
                }
                onClose() {
                    this.pending = !1, this.wc && (this.wc = void 0), this.events.emit("close")
                }
                onError(s, c = "Failed or Rejected Request", l = -32e3, f) {
                    let B = {
                        id: s.id,
                        jsonrpc: s.jsonrpc,
                        error: {
                            code: l,
                            message: c
                        }
                    };
                    return void 0 !== f && (B.error.data = f), this.events.emit("payload", B), B
                }
                create(s) {
                    this.wc = this.register(this.opts), this.chainId = s || this.chainId, this.connected || this.pending || (this.pending = !0, this.registerConnectorEvents(), this.wc.createSession({
                        chainId: this.chainId
                    }).then(() => this.events.emit("created")).catch(s => this.events.emit("error", s)))
                }
                registerConnectorEvents() {
                    this.wc = this.register(this.opts), this.wc.on("connect", s => {
                        var c, l;
                        if (s) {
                            this.events.emit("error", s);
                            return
                        }
                        this.accounts = (null === (c = this.wc) || void 0 === c ? void 0 : c.accounts) || [], this.chainId = (null === (l = this.wc) || void 0 === l ? void 0 : l.chainId) || this.chainId, this.onOpen()
                    }), this.wc.on("disconnect", s => {
                        if (s) {
                            this.events.emit("error", s);
                            return
                        }
                        this.onClose()
                    }), this.wc.on("modal_closed", () => {
                        this.events.emit("error", Error("User closed modal"))
                    }), this.wc.on("session_update", (s, c) => {
                        let {
                            accounts: l,
                            chainId: f
                        } = c.params[0];
                        (!this.accounts || l && this.accounts !== l) && (this.accounts = l, this.events.emit("accountsChanged", l)), (!this.chainId || f && this.chainId !== f) && (this.chainId = f, this.events.emit("chainChanged", f))
                    })
                }
                async sendPayload(s) {
                    this.wc = this.register(this.opts);
                    try {
                        let c = await this.wc.unsafeSend(s);
                        return this.sanitizeResponse(c)
                    } catch (c) {
                        return this.onError(s, c.message)
                    }
                }
                sanitizeResponse(s) {
                    return void 0 !== s.error && void 0 === s.error.code ? (0, te.formatJsonRpcError)(s.id, s.error.message, s.error.data) : s
                }
            };
            var tn = class {
                constructor(s) {
                    this.events = new(B()), this.rpc = {
                        infuraId: null == s ? void 0 : s.infuraId,
                        custom: null == s ? void 0 : s.rpc
                    }, this.signer = new R.r(new SignerConnection(s));
                    let c = this.signer.connection.chainId || (null == s ? void 0 : s.chainId) || 1;
                    this.http = this.setHttpProvider(c), this.registerEventListeners()
                }
                get connected() {
                    return this.signer.connection.connected
                }
                get connector() {
                    return this.signer.connection.connector
                }
                get accounts() {
                    return this.signer.connection.accounts
                }
                get chainId() {
                    return this.signer.connection.chainId
                }
                get rpcUrl() {
                    var s;
                    return (null === (s = this.http) || void 0 === s ? void 0 : s.connection).url || ""
                }
                async request(s) {
                    switch (s.method) {
                        case "eth_requestAccounts":
                            return await this.connect(), this.signer.connection.accounts;
                        case "eth_accounts":
                            return this.signer.connection.accounts;
                        case "eth_chainId":
                            return this.signer.connection.chainId
                    }
                    if (P.V7.includes(s.method)) return this.signer.request(s);
                    if (void 0 === this.http) throw Error(`Cannot request JSON-RPC method (${s.method}) without provided rpc url`);
                    return this.http.request(s)
                }
                sendAsync(s, c) {
                    this.request(s).then(s => c(null, s)).catch(s => c(s, void 0))
                }
                async enable() {
                    let s = await this.request({
                        method: "eth_requestAccounts"
                    });
                    return s
                }
                async connect() {
                    this.signer.connection.connected || await this.signer.connect()
                }
                async disconnect() {
                    this.signer.connection.connected && await this.signer.disconnect()
                }
                on(s, c) {
                    this.events.on(s, c)
                }
                once(s, c) {
                    this.events.once(s, c)
                }
                removeListener(s, c) {
                    this.events.removeListener(s, c)
                }
                off(s, c) {
                    this.events.off(s, c)
                }
                get isWalletConnect() {
                    return !0
                }
                registerEventListeners() {
                    this.signer.connection.on("accountsChanged", s => {
                        this.events.emit("accountsChanged", s)
                    }), this.signer.connection.on("chainChanged", s => {
                        this.http = this.setHttpProvider(s), this.events.emit("chainChanged", s)
                    }), this.signer.on("disconnect", () => {
                        this.events.emit("disconnect")
                    })
                }
                setHttpProvider(s) {
                    let c = (0, P.RM)(s, this.rpc);
                    if (void 0 === c) return;
                    let l = new R.r(new I.k(c));
                    return l
                }
            }
        },
        49961: function(s, c, l) {
            "use strict";
            l.d(c, {
                k: function() {
                    return HttpConnection
                },
                Z: function() {
                    return $
                }
            });
            var f = l(17414),
                B = l(11239),
                R = l.n(B),
                I = l(50376),
                P = l(58256);
            let W = {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                method: "POST"
            };
            let HttpConnection = class HttpConnection {
                constructor(s, c = !1) {
                    if (this.url = s, this.disableProviderPing = c, this.events = new f.EventEmitter, this.isAvailable = !1, this.registering = !1, !(0, P.isHttpUrl)(s)) throw Error(`Provided URL is not compatible with HTTP connection: ${s}`);
                    this.url = s, this.disableProviderPing = c
                }
                get connected() {
                    return this.isAvailable
                }
                get connecting() {
                    return this.registering
                }
                on(s, c) {
                    this.events.on(s, c)
                }
                once(s, c) {
                    this.events.once(s, c)
                }
                off(s, c) {
                    this.events.off(s, c)
                }
                removeListener(s, c) {
                    this.events.removeListener(s, c)
                }
                async open(s = this.url) {
                    await this.register(s)
                }
                async close() {
                    if (!this.isAvailable) throw Error("Connection already closed");
                    this.onClose()
                }
                async send(s, c) {
                    this.isAvailable || await this.register();
                    try {
                        let c = (0, I.u)(s),
                            l = await R()(this.url, Object.assign(Object.assign({}, W), {
                                body: c
                            })),
                            f = await l.json();
                        this.onPayload({
                            data: f
                        })
                    } catch (c) {
                        this.onError(s.id, c)
                    }
                }
                async register(s = this.url) {
                    if (!(0, P.isHttpUrl)(s)) throw Error(`Provided URL is not compatible with HTTP connection: ${s}`);
                    if (this.registering) {
                        let s = this.events.getMaxListeners();
                        return (this.events.listenerCount("register_error") >= s || this.events.listenerCount("open") >= s) && this.events.setMaxListeners(s + 1), new Promise((s, c) => {
                            this.events.once("register_error", s => {
                                this.resetMaxListeners(), c(s)
                            }), this.events.once("open", () => {
                                if (this.resetMaxListeners(), void 0 === this.isAvailable) return c(Error("HTTP connection is missing or invalid"));
                                s()
                            })
                        })
                    }
                    this.url = s, this.registering = !0;
                    try {
                        if (!this.disableProviderPing) {
                            let c = (0, I.u)({
                                id: 1,
                                jsonrpc: "2.0",
                                method: "test",
                                params: []
                            });
                            await R()(s, Object.assign(Object.assign({}, W), {
                                body: c
                            }))
                        }
                        this.onOpen()
                    } catch (c) {
                        let s = this.parseError(c);
                        throw this.events.emit("register_error", s), this.onClose(), s
                    }
                }
                onOpen() {
                    this.isAvailable = !0, this.registering = !1, this.events.emit("open")
                }
                onClose() {
                    this.isAvailable = !1, this.registering = !1, this.events.emit("close")
                }
                onPayload(s) {
                    if (void 0 === s.data) return;
                    let c = "string" == typeof s.data ? (0, I.D)(s.data) : s.data;
                    this.events.emit("payload", c)
                }
                onError(s, c) {
                    let l = this.parseError(c),
                        f = l.message || l.toString(),
                        B = (0, P.formatJsonRpcError)(s, f);
                    this.events.emit("payload", B)
                }
                parseError(s, c = this.url) {
                    return (0, P.parseConnectionError)(s, c, "HTTP")
                }
                resetMaxListeners() {
                    this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10)
                }
            };
            var $ = HttpConnection
        },
        22458: function(s, c, l) {
            "use strict";
            l.d(c, {
                r: function() {
                    return JsonRpcProvider
                }
            });
            var f = l(17414),
                B = l(58256);
            let JsonRpcProvider = class JsonRpcProvider extends B.IJsonRpcProvider {
                constructor(s) {
                    super(s), this.events = new f.EventEmitter, this.hasRegisteredEventListeners = !1, this.connection = this.setConnection(s), this.connection.connected && this.registerEventListeners()
                }
                async connect(s = this.connection) {
                    await this.open(s)
                }
                async disconnect() {
                    await this.close()
                }
                on(s, c) {
                    this.events.on(s, c)
                }
                once(s, c) {
                    this.events.once(s, c)
                }
                off(s, c) {
                    this.events.off(s, c)
                }
                removeListener(s, c) {
                    this.events.removeListener(s, c)
                }
                async request(s, c) {
                    return this.requestStrict((0, B.formatJsonRpcRequest)(s.method, s.params || [], s.id || (0, B.getBigIntRpcId)().toString()), c)
                }
                async requestStrict(s, c) {
                    return new Promise(async (l, f) => {
                        if (!this.connection.connected) try {
                            await this.open()
                        } catch (s) {
                            f(s)
                        }
                        this.events.on(`${s.id}`, s => {
                            (0, B.isJsonRpcError)(s) ? f(s.error): l(s.result)
                        });
                        try {
                            await this.connection.send(s, c)
                        } catch (s) {
                            f(s)
                        }
                    })
                }
                setConnection(s = this.connection) {
                    return s
                }
                onPayload(s) {
                    this.events.emit("payload", s), (0, B.isJsonRpcResponse)(s) ? this.events.emit(`${s.id}`, s) : this.events.emit("message", {
                        type: s.method,
                        data: s.params
                    })
                }
                onClose(s) {
                    s && 3e3 === s.code && this.events.emit("error", Error(`WebSocket connection closed abnormally with code: ${s.code} ${s.reason?`(${s.reason})`:""}`)), this.events.emit("disconnect")
                }
                async open(s = this.connection) {
                    this.connection === s && this.connection.connected || (this.connection.connected && this.close(), "string" == typeof s && (await this.connection.open(s), s = this.connection), this.connection = this.setConnection(s), await this.connection.open(), this.registerEventListeners(), this.events.emit("connect"))
                }
                async close() {
                    await this.connection.close()
                }
                registerEventListeners() {
                    this.hasRegisteredEventListeners || (this.connection.on("payload", s => this.onPayload(s)), this.connection.on("close", s => this.onClose(s)), this.connection.on("error", s => this.events.emit("error", s)), this.connection.on("register_error", s => this.onClose()), this.hasRegisteredEventListeners = !0)
                }
            }
        },
        51714: function(s, c, l) {
            "use strict";
            l.d(c, {
                XR: function() {
                    return IJsonRpcConnection
                },
                x0: function() {
                    return IJsonRpcProvider
                }
            });
            let IEvents = class IEvents {};
            let IJsonRpcConnection = class IJsonRpcConnection extends IEvents {
                constructor(s) {
                    super()
                }
            };
            let IBaseJsonRpcProvider = class IBaseJsonRpcProvider extends IEvents {
                constructor() {
                    super()
                }
            };
            let IJsonRpcProvider = class IJsonRpcProvider extends IBaseJsonRpcProvider {
                constructor(s) {
                    super()
                }
            }
        },
        81658: function(s, c, l) {
            "use strict";
            l.d(c, {
                CA: function() {
                    return B
                },
                JV: function() {
                    return P
                },
                O4: function() {
                    return f
                },
                dQ: function() {
                    return R
                },
                xK: function() {
                    return I
                }
            });
            let f = "INTERNAL_ERROR",
                B = "SERVER_ERROR",
                R = [-32700, -32600, -32601, -32602, -32603],
                I = {
                    PARSE_ERROR: {
                        code: -32700,
                        message: "Parse error"
                    },
                    INVALID_REQUEST: {
                        code: -32600,
                        message: "Invalid Request"
                    },
                    METHOD_NOT_FOUND: {
                        code: -32601,
                        message: "Method not found"
                    },
                    INVALID_PARAMS: {
                        code: -32602,
                        message: "Invalid params"
                    },
                    [f]: {
                        code: -32603,
                        message: "Internal error"
                    },
                    [B]: {
                        code: -32e3,
                        message: "Server error"
                    }
                },
                P = B
        },
        48254: function(s, c, l) {
            "use strict";
            var f = l(35144);
            l.o(f, "IJsonRpcProvider") && l.d(c, {
                IJsonRpcProvider: function() {
                    return f.IJsonRpcProvider
                }
            }), l.o(f, "formatJsonRpcError") && l.d(c, {
                formatJsonRpcError: function() {
                    return f.formatJsonRpcError
                }
            }), l.o(f, "formatJsonRpcRequest") && l.d(c, {
                formatJsonRpcRequest: function() {
                    return f.formatJsonRpcRequest
                }
            }), l.o(f, "formatJsonRpcResult") && l.d(c, {
                formatJsonRpcResult: function() {
                    return f.formatJsonRpcResult
                }
            }), l.o(f, "getBigIntRpcId") && l.d(c, {
                getBigIntRpcId: function() {
                    return f.getBigIntRpcId
                }
            }), l.o(f, "isHttpUrl") && l.d(c, {
                isHttpUrl: function() {
                    return f.isHttpUrl
                }
            }), l.o(f, "isJsonRpcError") && l.d(c, {
                isJsonRpcError: function() {
                    return f.isJsonRpcError
                }
            }), l.o(f, "isJsonRpcRequest") && l.d(c, {
                isJsonRpcRequest: function() {
                    return f.isJsonRpcRequest
                }
            }), l.o(f, "isJsonRpcResponse") && l.d(c, {
                isJsonRpcResponse: function() {
                    return f.isJsonRpcResponse
                }
            }), l.o(f, "isJsonRpcResult") && l.d(c, {
                isJsonRpcResult: function() {
                    return f.isJsonRpcResult
                }
            }), l.o(f, "isLocalhostUrl") && l.d(c, {
                isLocalhostUrl: function() {
                    return f.isLocalhostUrl
                }
            }), l.o(f, "isReactNative") && l.d(c, {
                isReactNative: function() {
                    return f.isReactNative
                }
            }), l.o(f, "isWsUrl") && l.d(c, {
                isWsUrl: function() {
                    return f.isWsUrl
                }
            }), l.o(f, "payloadId") && l.d(c, {
                payloadId: function() {
                    return f.payloadId
                }
            })
        },
        14452: function(s, c, l) {
            "use strict";
            l.d(c, {
                CX: function() {
                    return parseConnectionError
                },
                L2: function() {
                    return getErrorByCode
                },
                by: function() {
                    return getError
                },
                i5: function() {
                    return isReservedErrorCode
                }
            });
            var f = l(81658);

            function isReservedErrorCode(s) {
                return f.dQ.includes(s)
            }

            function getError(s) {
                return Object.keys(f.xK).includes(s) ? f.xK[s] : f.xK[f.JV]
            }

            function getErrorByCode(s) {
                let c = Object.values(f.xK).find(c => c.code === s);
                return c || f.xK[f.JV]
            }

            function parseConnectionError(s, c, l) {
                return s.message.includes("getaddrinfo ENOTFOUND") || s.message.includes("connect ECONNREFUSED") ? Error(`Unavailable ${l} RPC url at ${c}`) : s
            }
        },
        18940: function(s, c, l) {
            "use strict";
            l.d(c, {
                CS: function() {
                    return getBigIntRpcId
                },
                RI: function() {
                    return formatJsonRpcError
                },
                o0: function() {
                    return payloadId
                },
                sT: function() {
                    return formatJsonRpcRequest
                },
                tm: function() {
                    return formatJsonRpcResult
                }
            });
            var f = l(14452),
                B = l(81658);

            function payloadId(s = 3) {
                let c = Date.now() * Math.pow(10, s);
                return c + Math.floor(Math.random() * Math.pow(10, s))
            }

            function getBigIntRpcId(s = 6) {
                return BigInt(payloadId(s))
            }

            function formatJsonRpcRequest(s, c, l) {
                return {
                    id: l || payloadId(),
                    jsonrpc: "2.0",
                    method: s,
                    params: c
                }
            }

            function formatJsonRpcResult(s, c) {
                return {
                    id: s,
                    jsonrpc: "2.0",
                    result: c
                }
            }

            function formatJsonRpcError(s, c, l) {
                var R;
                return {
                    id: s,
                    jsonrpc: "2.0",
                    error: void 0 === (R = c) ? (0, f.by)(B.O4) : ("string" == typeof R && (R = Object.assign(Object.assign({}, (0, f.by)(B.CA)), {
                        message: R
                    })), void 0 !== l && (R.data = l), (0, f.i5)(R.code) && (R = (0, f.L2)(R.code)), R)
                }
            }
        },
        58256: function(s, c, l) {
            "use strict";
            l.d(c, {
                IJsonRpcProvider: function() {
                    return I.x0
                },
                formatJsonRpcError: function() {
                    return R.RI
                },
                formatJsonRpcRequest: function() {
                    return R.sT
                },
                formatJsonRpcResult: function() {
                    return R.tm
                },
                getBigIntRpcId: function() {
                    return R.CS
                },
                isHttpUrl: function() {
                    return P.jK
                },
                isJsonRpcError: function() {
                    return W.jg
                },
                isJsonRpcRequest: function() {
                    return W.DW
                },
                isJsonRpcResponse: function() {
                    return W.u
                },
                isJsonRpcResult: function() {
                    return W.k4
                },
                isLocalhostUrl: function() {
                    return P.JF
                },
                isWsUrl: function() {
                    return P.UZ
                },
                parseConnectionError: function() {
                    return f.CX
                },
                payloadId: function() {
                    return R.o0
                }
            }), l(81658);
            var f = l(14452),
                B = l(48254);
            l.o(B, "IJsonRpcProvider") && l.d(c, {
                IJsonRpcProvider: function() {
                    return B.IJsonRpcProvider
                }
            }), l.o(B, "formatJsonRpcError") && l.d(c, {
                formatJsonRpcError: function() {
                    return B.formatJsonRpcError
                }
            }), l.o(B, "formatJsonRpcRequest") && l.d(c, {
                formatJsonRpcRequest: function() {
                    return B.formatJsonRpcRequest
                }
            }), l.o(B, "formatJsonRpcResult") && l.d(c, {
                formatJsonRpcResult: function() {
                    return B.formatJsonRpcResult
                }
            }), l.o(B, "getBigIntRpcId") && l.d(c, {
                getBigIntRpcId: function() {
                    return B.getBigIntRpcId
                }
            }), l.o(B, "isHttpUrl") && l.d(c, {
                isHttpUrl: function() {
                    return B.isHttpUrl
                }
            }), l.o(B, "isJsonRpcError") && l.d(c, {
                isJsonRpcError: function() {
                    return B.isJsonRpcError
                }
            }), l.o(B, "isJsonRpcRequest") && l.d(c, {
                isJsonRpcRequest: function() {
                    return B.isJsonRpcRequest
                }
            }), l.o(B, "isJsonRpcResponse") && l.d(c, {
                isJsonRpcResponse: function() {
                    return B.isJsonRpcResponse
                }
            }), l.o(B, "isJsonRpcResult") && l.d(c, {
                isJsonRpcResult: function() {
                    return B.isJsonRpcResult
                }
            }), l.o(B, "isLocalhostUrl") && l.d(c, {
                isLocalhostUrl: function() {
                    return B.isLocalhostUrl
                }
            }), l.o(B, "isReactNative") && l.d(c, {
                isReactNative: function() {
                    return B.isReactNative
                }
            }), l.o(B, "isWsUrl") && l.d(c, {
                isWsUrl: function() {
                    return B.isWsUrl
                }
            }), l.o(B, "payloadId") && l.d(c, {
                payloadId: function() {
                    return B.payloadId
                }
            });
            var R = l(18940),
                I = l(89693),
                P = l(36545),
                W = l(72038)
        },
        89693: function(s, c, l) {
            "use strict";
            l.d(c, {
                x0: function() {
                    return f.x0
                }
            });
            var f = l(51714)
        },
        36545: function(s, c, l) {
            "use strict";

            function matchRegexProtocol(s, c) {
                let l = function(s) {
                    let c = s.match(RegExp(/^\w+:/, "gi"));
                    if (c && c.length) return c[0]
                }(s);
                return void 0 !== l && new RegExp(c).test(l)
            }

            function isHttpUrl(s) {
                return matchRegexProtocol(s, "^https?:")
            }

            function isWsUrl(s) {
                return matchRegexProtocol(s, "^wss?:")
            }

            function isLocalhostUrl(s) {
                return RegExp("wss?://localhost(:d{2,5})?").test(s)
            }
            l.d(c, {
                JF: function() {
                    return isLocalhostUrl
                },
                UZ: function() {
                    return isWsUrl
                },
                jK: function() {
                    return isHttpUrl
                }
            })
        },
        72038: function(s, c, l) {
            "use strict";

            function isJsonRpcPayload(s) {
                return "object" == typeof s && "id" in s && "jsonrpc" in s && "2.0" === s.jsonrpc
            }

            function isJsonRpcRequest(s) {
                return isJsonRpcPayload(s) && "method" in s
            }

            function isJsonRpcResponse(s) {
                return isJsonRpcPayload(s) && (isJsonRpcResult(s) || isJsonRpcError(s))
            }

            function isJsonRpcResult(s) {
                return "result" in s
            }

            function isJsonRpcError(s) {
                return "error" in s
            }
            l.d(c, {
                DW: function() {
                    return isJsonRpcRequest
                },
                jg: function() {
                    return isJsonRpcError
                },
                k4: function() {
                    return isJsonRpcResult
                },
                u: function() {
                    return isJsonRpcResponse
                }
            })
        },
        75266: function(s, c, l) {
            var f = l(9389);

            function _interopDefault(s) {
                return s && "object" == typeof s && "default" in s ? s.default : s
            }
            var B = l(40506),
                R = _interopDefault(l(66227)),
                I = _interopDefault(l(26392)),
                P = l(72067);
            "undefined" != typeof Symbol && (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))), "undefined" != typeof Symbol && (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")));
            var W = "walletconnect-wrapper",
                $ = "walletconnect-style-sheet",
                Z = "walletconnect-qrcode-modal",
                tt = "walletconnect-qrcode-text";

            function Header(s) {
                return P.createElement("div", {
                    className: "walletconnect-modal__header"
                }, P.createElement("img", {
                    src: "data:image/svg+xml,%3Csvg height='185' viewBox='0 0 300 185' width='300' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m61.4385429 36.2562612c48.9112241-47.8881663 128.2119871-47.8881663 177.1232091 0l5.886545 5.7634174c2.445561 2.3944081 2.445561 6.2765112 0 8.6709204l-20.136695 19.715503c-1.222781 1.1972051-3.2053 1.1972051-4.428081 0l-8.100584-7.9311479c-34.121692-33.4079817-89.443886-33.4079817-123.5655788 0l-8.6750562 8.4936051c-1.2227816 1.1972041-3.205301 1.1972041-4.4280806 0l-20.1366949-19.7155031c-2.4455612-2.3944092-2.4455612-6.2765122 0-8.6709204zm218.7677961 40.7737449 17.921697 17.546897c2.445549 2.3943969 2.445563 6.2764769.000031 8.6708899l-80.810171 79.121134c-2.445544 2.394426-6.410582 2.394453-8.85616.000062-.00001-.00001-.000022-.000022-.000032-.000032l-57.354143-56.154572c-.61139-.598602-1.60265-.598602-2.21404 0-.000004.000004-.000007.000008-.000011.000011l-57.3529212 56.154531c-2.4455368 2.394432-6.4105755 2.394472-8.8561612.000087-.0000143-.000014-.0000296-.000028-.0000449-.000044l-80.81241943-79.122185c-2.44556021-2.394408-2.44556021-6.2765115 0-8.6709197l17.92172963-17.5468673c2.4455602-2.3944082 6.4105989-2.3944082 8.8561602 0l57.3549775 56.155357c.6113908.598602 1.602649.598602 2.2140398 0 .0000092-.000009.0000174-.000017.0000265-.000024l57.3521031-56.155333c2.445505-2.3944633 6.410544-2.3945531 8.856161-.0002.000034.0000336.000068.0000673.000101.000101l57.354902 56.155432c.61139.598601 1.60265.598601 2.21404 0l57.353975-56.1543249c2.445561-2.3944092 6.410599-2.3944092 8.85616 0z' fill='%233b99fc'/%3E%3C/svg%3E",
                    className: "walletconnect-modal__headerLogo"
                }), P.createElement("p", null, "WalletConnect"), P.createElement("div", {
                    className: "walletconnect-modal__close__wrapper",
                    onClick: s.onClose
                }, P.createElement("div", {
                    id: "walletconnect-qrcode-close",
                    className: "walletconnect-modal__close__icon"
                }, P.createElement("div", {
                    className: "walletconnect-modal__close__line1"
                }), P.createElement("div", {
                    className: "walletconnect-modal__close__line2"
                }))))
            }

            function ConnectButton(s) {
                return P.createElement("a", {
                    className: "walletconnect-connect__button",
                    href: s.href,
                    id: "walletconnect-connect-button-" + s.name,
                    onClick: s.onClick,
                    rel: "noopener noreferrer",
                    style: {
                        backgroundColor: s.color
                    },
                    target: "_blank"
                }, s.name)
            }

            function WalletButton(s) {
                var c = s.color,
                    l = s.href,
                    f = s.name,
                    B = s.logo,
                    R = s.onClick;
                return P.createElement("a", {
                    className: "walletconnect-modal__base__row",
                    href: l,
                    onClick: R,
                    rel: "noopener noreferrer",
                    target: "_blank"
                }, P.createElement("h3", {
                    className: "walletconnect-modal__base__row__h3"
                }, f), P.createElement("div", {
                    className: "walletconnect-modal__base__row__right"
                }, P.createElement("div", {
                    className: "walletconnect-modal__base__row__right__app-icon",
                    style: {
                        background: "url('" + B + "') " + c,
                        backgroundSize: "100%"
                    }
                }), P.createElement("img", {
                    src: "data:image/svg+xml,%3Csvg fill='none' height='18' viewBox='0 0 8 18' width='8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath clip-rule='evenodd' d='m.586301.213898c-.435947.33907-.5144813.967342-.175411 1.403292l4.87831 6.27212c.28087.36111.28087.86677 0 1.22788l-4.878311 6.27211c-.33907.436-.260536 1.0642.175412 1.4033.435949.3391 1.064219.2605 1.403289-.1754l4.87832-6.2721c.84259-1.08336.84259-2.60034 0-3.68367l-4.87832-6.27212c-.33907-.4359474-.96734-.514482-1.403289-.175412z' fill='%233c4252' fill-rule='evenodd'/%3E%3C/svg%3E",
                    className: "walletconnect-modal__base__row__right__caret"
                })))
            }

            function WalletIcon(s) {
                var c = s.color,
                    l = s.href,
                    f = s.name,
                    B = s.logo,
                    R = s.onClick,
                    I = window.innerWidth < 768 ? (f.length > 8 ? 2.5 : 2.7) + "vw" : "inherit";
                return P.createElement("a", {
                    className: "walletconnect-connect__button__icon_anchor",
                    href: l,
                    onClick: R,
                    rel: "noopener noreferrer",
                    target: "_blank"
                }, P.createElement("div", {
                    className: "walletconnect-connect__button__icon",
                    style: {
                        background: "url('" + B + "') " + c,
                        backgroundSize: "100%"
                    }
                }), P.createElement("div", {
                    style: {
                        fontSize: I
                    },
                    className: "walletconnect-connect__button__text"
                }, f))
            }

            function LinkDisplay(s) {
                var c = B.isAndroid(),
                    l = P.useState(""),
                    f = l[0],
                    R = l[1],
                    I = P.useState(""),
                    W = I[0],
                    $ = I[1],
                    Z = P.useState(1),
                    te = Z[0],
                    tn = Z[1],
                    tr = W ? s.links.filter(function(s) {
                        return s.name.toLowerCase().includes(W.toLowerCase())
                    }) : s.links,
                    to = s.errorMessage,
                    ti = W || tr.length > 5,
                    ts = Math.ceil(tr.length / 12),
                    ta = [(te - 1) * 12 + 1, 12 * te],
                    tu = tr.length ? tr.filter(function(s, c) {
                        return c + 1 >= ta[0] && c + 1 <= ta[1]
                    }) : [],
                    tc = !!(!c && ts > 1),
                    tl = void 0;
                return P.createElement("div", null, P.createElement("p", {
                    id: tt,
                    className: "walletconnect-qrcode__text"
                }, c ? s.text.connect_mobile_wallet : s.text.choose_preferred_wallet), !c && P.createElement("input", {
                    className: "walletconnect-search__input",
                    placeholder: "Search",
                    value: f,
                    onChange: function(s) {
                        R(s.target.value), clearTimeout(tl), s.target.value ? tl = setTimeout(function() {
                            $(s.target.value), tn(1)
                        }, 1e3) : (R(""), $(""), tn(1))
                    }
                }), P.createElement("div", {
                    className: "walletconnect-connect__buttons__wrapper" + (c ? "__android" : ti && tr.length ? "__wrap" : "")
                }, c ? P.createElement(ConnectButton, {
                    name: s.text.connect,
                    color: "rgb(64, 153, 255)",
                    href: s.uri,
                    onClick: P.useCallback(function() {
                        B.saveMobileLinkInfo({
                            name: "Unknown",
                            href: s.uri
                        })
                    }, [])
                }) : tu.length ? tu.map(function(c) {
                    var l = c.color,
                        f = c.name,
                        R = c.shortName,
                        I = c.logo,
                        W = B.formatIOSMobile(s.uri, c),
                        $ = P.useCallback(function() {
                            B.saveMobileLinkInfo({
                                name: f,
                                href: W
                            })
                        }, [tu]);
                    return ti ? P.createElement(WalletIcon, {
                        color: l,
                        href: W,
                        name: R || f,
                        logo: I,
                        onClick: $
                    }) : P.createElement(WalletButton, {
                        color: l,
                        href: W,
                        name: f,
                        logo: I,
                        onClick: $
                    })
                }) : P.createElement(P.Fragment, null, P.createElement("p", null, to.length ? s.errorMessage : s.links.length && !tr.length ? s.text.no_wallets_found : s.text.loading))), tc && P.createElement("div", {
                    className: "walletconnect-modal__footer"
                }, Array(ts).fill(0).map(function(s, c) {
                    var l = c + 1,
                        f = te === l;
                    return P.createElement("a", {
                        style: {
                            margin: "auto 10px",
                            fontWeight: f ? "bold" : "normal"
                        },
                        onClick: function() {
                            return tn(l)
                        }
                    }, l)
                })))
            }

            function Notification(s) {
                var c = !!s.message.trim();
                return P.createElement("div", {
                    className: "walletconnect-qrcode__notification" + (c ? " notification__show" : "")
                }, s.message)
            }
            var formatQRCodeImage = function(s) {
                try {
                    var c = "";
                    return Promise.resolve(R.toString(s, {
                        margin: 0,
                        type: "svg"
                    })).then(function(s) {
                        return "string" == typeof s && (c = s.replace("<svg", '<svg class="walletconnect-qrcode__image"')), c
                    })
                } catch (s) {
                    return Promise.reject(s)
                }
            };

            function QRCodeDisplay(s) {
                var c = P.useState(""),
                    l = c[0],
                    f = c[1],
                    B = P.useState(""),
                    R = B[0],
                    W = B[1];
                return P.useEffect(function() {
                    try {
                        return Promise.resolve(formatQRCodeImage(s.uri)).then(function(s) {
                            W(s)
                        })
                    } catch (s) {
                        Promise.reject(s)
                    }
                }, []), P.createElement("div", null, P.createElement("p", {
                    id: tt,
                    className: "walletconnect-qrcode__text"
                }, s.text.scan_qrcode_with_wallet), P.createElement("div", {
                    dangerouslySetInnerHTML: {
                        __html: R
                    }
                }), P.createElement("div", {
                    className: "walletconnect-modal__footer"
                }, P.createElement("a", {
                    onClick: function() {
                        I(s.uri) ? f(s.text.copied_to_clipboard) : f("Error"), setInterval(function() {
                            return f("")
                        }, 1200)
                    }
                }, s.text.copy_to_clipboard)), P.createElement(Notification, {
                    message: l
                }))
            }

            function Modal(s) {
                var c = B.isAndroid(),
                    l = B.isMobile(),
                    f = l ? s.qrcodeModalOptions && s.qrcodeModalOptions.mobileLinks ? s.qrcodeModalOptions.mobileLinks : void 0 : s.qrcodeModalOptions && s.qrcodeModalOptions.desktopLinks ? s.qrcodeModalOptions.desktopLinks : void 0,
                    R = P.useState(!1),
                    I = R[0],
                    W = R[1],
                    $ = P.useState(!1),
                    tt = $[0],
                    te = $[1],
                    tn = P.useState(!l),
                    tr = tn[0],
                    to = tn[1],
                    ti = {
                        mobile: l,
                        text: s.text,
                        uri: s.uri,
                        qrcodeModalOptions: s.qrcodeModalOptions
                    },
                    ts = P.useState(""),
                    ta = ts[0],
                    tu = ts[1],
                    tc = P.useState(!1),
                    tl = tc[0],
                    th = tc[1],
                    tf = P.useState([]),
                    td = tf[0],
                    tp = tf[1],
                    tm = P.useState(""),
                    tg = tm[0],
                    t_ = tm[1],
                    getLinksIfNeeded = function() {
                        tt || I || f && !f.length || td.length > 0 || P.useEffect(function() {
                            ! function() {
                                try {
                                    if (c) return Promise.resolve();
                                    W(!0);
                                    var R = function(s, c) {
                                        try {
                                            var l = s()
                                        } catch (s) {
                                            return c(s)
                                        }
                                        return l && l.then ? l.then(void 0, c) : l
                                    }(function() {
                                        var c = s.qrcodeModalOptions && s.qrcodeModalOptions.registryUrl ? s.qrcodeModalOptions.registryUrl : B.getWalletRegistryUrl();
                                        return Promise.resolve(fetch(c)).then(function(c) {
                                            return Promise.resolve(c.json()).then(function(c) {
                                                var R = c.listings,
                                                    I = l ? "mobile" : "desktop",
                                                    P = B.getMobileLinkRegistry(B.formatMobileRegistry(R, I), f);
                                                W(!1), te(!0), t_(P.length ? "" : s.text.no_supported_wallets), tp(P);
                                                var $ = 1 === P.length;
                                                $ && (tu(B.formatIOSMobile(s.uri, P[0])), to(!0)), th($)
                                            })
                                        })
                                    }, function(c) {
                                        W(!1), te(!0), t_(s.text.something_went_wrong), console.error(c)
                                    });
                                    Promise.resolve(R && R.then ? R.then(function() {}) : void 0)
                                } catch (s) {
                                    return Promise.reject(s)
                                }
                            }()
                        })
                    };
                getLinksIfNeeded();
                var ty = l ? tr : !tr;
                return P.createElement("div", {
                    id: Z,
                    className: "walletconnect-qrcode__base animated fadeIn"
                }, P.createElement("div", {
                    className: "walletconnect-modal__base"
                }, P.createElement(Header, {
                    onClose: s.onClose
                }), tl && tr ? P.createElement("div", {
                    className: "walletconnect-modal__single_wallet"
                }, P.createElement("a", {
                    onClick: function() {
                        return B.saveMobileLinkInfo({
                            name: td[0].name,
                            href: ta
                        })
                    },
                    href: ta,
                    rel: "noopener noreferrer",
                    target: "_blank"
                }, s.text.connect_with + " " + (tl ? td[0].name : "") + " ›")) : c || I || !I && td.length ? P.createElement("div", {
                    className: "walletconnect-modal__mobile__toggle" + (ty ? " right__selected" : "")
                }, P.createElement("div", {
                    className: "walletconnect-modal__mobile__toggle_selector"
                }), l ? P.createElement(P.Fragment, null, P.createElement("a", {
                    onClick: function() {
                        return to(!1), getLinksIfNeeded()
                    }
                }, s.text.mobile), P.createElement("a", {
                    onClick: function() {
                        return to(!0)
                    }
                }, s.text.qrcode)) : P.createElement(P.Fragment, null, P.createElement("a", {
                    onClick: function() {
                        return to(!0)
                    }
                }, s.text.qrcode), P.createElement("a", {
                    onClick: function() {
                        return to(!1), getLinksIfNeeded()
                    }
                }, s.text.desktop))) : null, P.createElement("div", null, !tr && (c || I || td.length) ? P.createElement(LinkDisplay, Object.assign({}, ti, {
                    links: td,
                    errorMessage: tg
                })) : P.createElement(QRCodeDisplay, Object.assign({}, ti)))))
            }
            var te = {
                de: {
                    choose_preferred_wallet: "W\xe4hle bevorzugte Wallet",
                    connect_mobile_wallet: "Verbinde mit Mobile Wallet",
                    scan_qrcode_with_wallet: "Scanne den QR-code mit einer WalletConnect kompatiblen Wallet",
                    connect: "Verbinden",
                    qrcode: "QR-Code",
                    mobile: "Mobile",
                    desktop: "Desktop",
                    copy_to_clipboard: "In die Zwischenablage kopieren",
                    copied_to_clipboard: "In die Zwischenablage kopiert!",
                    connect_with: "Verbinden mit Hilfe von",
                    loading: "Laden...",
                    something_went_wrong: "Etwas ist schief gelaufen",
                    no_supported_wallets: "Es gibt noch keine unterst\xfctzten Wallet",
                    no_wallets_found: "keine Wallet gefunden"
                },
                en: {
                    choose_preferred_wallet: "Choose your preferred wallet",
                    connect_mobile_wallet: "Connect to Mobile Wallet",
                    scan_qrcode_with_wallet: "Scan QR code with a WalletConnect-compatible wallet",
                    connect: "Connect",
                    qrcode: "QR Code",
                    mobile: "Mobile",
                    desktop: "Desktop",
                    copy_to_clipboard: "Copy to clipboard",
                    copied_to_clipboard: "Copied to clipboard!",
                    connect_with: "Connect with",
                    loading: "Loading...",
                    something_went_wrong: "Something went wrong",
                    no_supported_wallets: "There are no supported wallets yet",
                    no_wallets_found: "No wallets found"
                },
                es: {
                    choose_preferred_wallet: "Elige tu billetera preferida",
                    connect_mobile_wallet: "Conectar a billetera m\xf3vil",
                    scan_qrcode_with_wallet: "Escanea el c\xf3digo QR con una billetera compatible con WalletConnect",
                    connect: "Conectar",
                    qrcode: "C\xf3digo QR",
                    mobile: "M\xf3vil",
                    desktop: "Desktop",
                    copy_to_clipboard: "Copiar",
                    copied_to_clipboard: "Copiado!",
                    connect_with: "Conectar mediante",
                    loading: "Cargando...",
                    something_went_wrong: "Algo sali\xf3 mal",
                    no_supported_wallets: "Todav\xeda no hay billeteras compatibles",
                    no_wallets_found: "No se encontraron billeteras"
                },
                fr: {
                    choose_preferred_wallet: "Choisissez votre portefeuille pr\xe9f\xe9r\xe9",
                    connect_mobile_wallet: "Se connecter au portefeuille mobile",
                    scan_qrcode_with_wallet: "Scannez le QR code avec un portefeuille compatible WalletConnect",
                    connect: "Se connecter",
                    qrcode: "QR Code",
                    mobile: "Mobile",
                    desktop: "Desktop",
                    copy_to_clipboard: "Copier",
                    copied_to_clipboard: "Copi\xe9!",
                    connect_with: "Connectez-vous \xe0 l'aide de",
                    loading: "Chargement...",
                    something_went_wrong: "Quelque chose a mal tourn\xe9",
                    no_supported_wallets: "Il n'y a pas encore de portefeuilles pris en charge",
                    no_wallets_found: "Aucun portefeuille trouv\xe9"
                },
                ko: {
                    choose_preferred_wallet: "원하는 지갑을 선택하세요",
                    connect_mobile_wallet: "모바일 지갑과 연결",
                    scan_qrcode_with_wallet: "WalletConnect 지원 지갑에서 QR코드를 스캔하세요",
                    connect: "연결",
                    qrcode: "QR 코드",
                    mobile: "모바일",
                    desktop: "데스크탑",
                    copy_to_clipboard: "클립보드에 복사",
                    copied_to_clipboard: "클립보드에 복사되었습니다!",
                    connect_with: "와 연결하다",
                    loading: "로드 중...",
                    something_went_wrong: "문제가 발생했습니다.",
                    no_supported_wallets: "아직 지원되는 지갑이 없습니다",
                    no_wallets_found: "지갑을 찾을 수 없습니다"
                },
                pt: {
                    choose_preferred_wallet: "Escolha sua carteira preferida",
                    connect_mobile_wallet: "Conectar-se \xe0 carteira m\xf3vel",
                    scan_qrcode_with_wallet: "Ler o c\xf3digo QR com uma carteira compat\xedvel com WalletConnect",
                    connect: "Conectar",
                    qrcode: "C\xf3digo QR",
                    mobile: "M\xf3vel",
                    desktop: "Desktop",
                    copy_to_clipboard: "Copiar",
                    copied_to_clipboard: "Copiado!",
                    connect_with: "Ligar por meio de",
                    loading: "Carregamento...",
                    something_went_wrong: "Algo correu mal",
                    no_supported_wallets: "Ainda n\xe3o h\xe1 carteiras suportadas",
                    no_wallets_found: "Nenhuma carteira encontrada"
                },
                zh: {
                    choose_preferred_wallet: "选择你的钱包",
                    connect_mobile_wallet: "连接至移动端钱包",
                    scan_qrcode_with_wallet: "使用兼容 WalletConnect 的钱包扫描二维码",
                    connect: "连接",
                    qrcode: "二维码",
                    mobile: "移动",
                    desktop: "桌面",
                    copy_to_clipboard: "复制到剪贴板",
                    copied_to_clipboard: "复制到剪贴板成功！",
                    connect_with: "通过以下方式连接",
                    loading: "正在加载...",
                    something_went_wrong: "出了问题",
                    no_supported_wallets: "目前还没有支持的钱包",
                    no_wallets_found: "没有找到钱包"
                },
                fa: {
                    choose_preferred_wallet: "کیف پول مورد نظر خود را انتخاب کنید",
                    connect_mobile_wallet: "به کیف پول موبایل وصل شوید",
                    scan_qrcode_with_wallet: "کد QR را با یک کیف پول سازگار با WalletConnect اسکن کنید",
                    connect: "اتصال",
                    qrcode: "کد QR",
                    mobile: "سیار",
                    desktop: "دسکتاپ",
                    copy_to_clipboard: "کپی به کلیپ بورد",
                    copied_to_clipboard: "در کلیپ بورد کپی شد!",
                    connect_with: "ارتباط با",
                    loading: "...بارگذاری",
                    something_went_wrong: "مشکلی پیش آمد",
                    no_supported_wallets: "هنوز هیچ کیف پول پشتیبانی شده ای وجود ندارد",
                    no_wallets_found: "هیچ کیف پولی پیدا نشد"
                }
            };

            function triggerCloseAnimation() {
                var s = B.getDocumentOrThrow(),
                    c = s.getElementById(Z);
                c && (c.className = c.className.replace("fadeIn", "fadeOut"), setTimeout(function() {
                    var c = s.getElementById(W);
                    c && s.body.removeChild(c)
                }, 300))
            }
            var isNode = function() {
                return void 0 !== f && void 0 !== f.versions && void 0 !== f.versions.node
            };
            s.exports = {
                open: function(s, c, l) {
                    if (console.log(s), isNode()) ! function(s) {
                        R.toString(s, {
                            type: "terminal"
                        }).then(console.log)
                    }(s);
                    else {
                        var f, I, Z, tt, tn;
                        (I = (f = B.getDocumentOrThrow()).getElementById($)) && f.head.removeChild(I), (Z = f.createElement("style")).setAttribute("id", $), Z.innerText = ':root {\n  --animation-duration: 300ms;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n.animated {\n  animation-duration: var(--animation-duration);\n  animation-fill-mode: both;\n}\n\n.fadeIn {\n  animation-name: fadeIn;\n}\n\n.fadeOut {\n  animation-name: fadeOut;\n}\n\n#walletconnect-wrapper {\n  -webkit-user-select: none;\n  align-items: center;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  left: 0;\n  pointer-events: none;\n  position: fixed;\n  top: 0;\n  user-select: none;\n  width: 100%;\n  z-index: 99999999999999;\n}\n\n.walletconnect-modal__headerLogo {\n  height: 21px;\n}\n\n.walletconnect-modal__header p {\n  color: #ffffff;\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n  align-items: flex-start;\n  display: flex;\n  flex: 1;\n  margin-left: 5px;\n}\n\n.walletconnect-modal__close__wrapper {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  z-index: 10000;\n  background: white;\n  border-radius: 26px;\n  padding: 6px;\n  box-sizing: border-box;\n  width: 26px;\n  height: 26px;\n  cursor: pointer;\n}\n\n.walletconnect-modal__close__icon {\n  position: relative;\n  top: 7px;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transform: rotate(45deg);\n}\n\n.walletconnect-modal__close__line1 {\n  position: absolute;\n  width: 100%;\n  border: 1px solid rgb(48, 52, 59);\n}\n\n.walletconnect-modal__close__line2 {\n  position: absolute;\n  width: 100%;\n  border: 1px solid rgb(48, 52, 59);\n  transform: rotate(90deg);\n}\n\n.walletconnect-qrcode__base {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  background: rgba(37, 41, 46, 0.95);\n  height: 100%;\n  left: 0;\n  pointer-events: auto;\n  position: fixed;\n  top: 0;\n  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);\n  width: 100%;\n  will-change: opacity;\n  padding: 40px;\n  box-sizing: border-box;\n}\n\n.walletconnect-qrcode__text {\n  color: rgba(60, 66, 82, 0.6);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 1.1875em;\n  margin: 10px 0 20px 0;\n  text-align: center;\n  width: 100%;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-qrcode__text {\n    font-size: 4vw;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-qrcode__text {\n    font-size: 14px;\n  }\n}\n\n.walletconnect-qrcode__image {\n  width: calc(100% - 30px);\n  box-sizing: border-box;\n  cursor: none;\n  margin: 0 auto;\n}\n\n.walletconnect-qrcode__notification {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  font-size: 16px;\n  padding: 16px 20px;\n  border-radius: 16px;\n  text-align: center;\n  transition: all 0.1s ease-in-out;\n  background: white;\n  color: black;\n  margin-bottom: -60px;\n  opacity: 0;\n}\n\n.walletconnect-qrcode__notification.notification__show {\n  opacity: 1;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-modal__header {\n    height: 130px;\n  }\n  .walletconnect-modal__base {\n    overflow: auto;\n  }\n}\n\n@media only screen and (min-device-width: 415px) and (max-width: 768px) {\n  #content {\n    max-width: 768px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (min-width: 375px) and (max-width: 415px) {\n  #content {\n    max-width: 414px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (min-width: 320px) and (max-width: 375px) {\n  #content {\n    max-width: 375px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  #content {\n    max-width: 320px;\n    box-sizing: border-box;\n  }\n}\n\n.walletconnect-modal__base {\n  -webkit-font-smoothing: antialiased;\n  background: #ffffff;\n  border-radius: 24px;\n  box-shadow: 0 10px 50px 5px rgba(0, 0, 0, 0.4);\n  font-family: ui-rounded, "SF Pro Rounded", "SF Pro Text", medium-content-sans-serif-font,\n    -apple-system, BlinkMacSystemFont, ui-sans-serif, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,\n    "Open Sans", "Helvetica Neue", sans-serif;\n  margin-top: 41px;\n  padding: 24px 24px 22px;\n  pointer-events: auto;\n  position: relative;\n  text-align: center;\n  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);\n  will-change: transform;\n  overflow: visible;\n  transform: translateY(-50%);\n  top: 50%;\n  max-width: 500px;\n  margin: auto;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-modal__base {\n    padding: 24px 12px;\n  }\n}\n\n.walletconnect-modal__base .hidden {\n  transform: translateY(150%);\n  transition: 0.125s cubic-bezier(0.4, 0, 1, 1);\n}\n\n.walletconnect-modal__header {\n  align-items: center;\n  display: flex;\n  height: 26px;\n  left: 0;\n  justify-content: space-between;\n  position: absolute;\n  top: -42px;\n  width: 100%;\n}\n\n.walletconnect-modal__base .wc-logo {\n  align-items: center;\n  display: flex;\n  height: 26px;\n  margin-top: 15px;\n  padding-bottom: 15px;\n  pointer-events: auto;\n}\n\n.walletconnect-modal__base .wc-logo div {\n  background-color: #3399ff;\n  height: 21px;\n  margin-right: 5px;\n  mask-image: url("images/wc-logo.svg") center no-repeat;\n  width: 32px;\n}\n\n.walletconnect-modal__base .wc-logo p {\n  color: #ffffff;\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n}\n\n.walletconnect-modal__base h2 {\n  color: rgba(60, 66, 82, 0.6);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 1.1875em;\n  margin: 0 0 19px 0;\n  text-align: center;\n  width: 100%;\n}\n\n.walletconnect-modal__base__row {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  align-items: center;\n  border-radius: 20px;\n  cursor: pointer;\n  display: flex;\n  height: 56px;\n  justify-content: space-between;\n  padding: 0 15px;\n  position: relative;\n  margin: 0px 0px 8px;\n  text-align: left;\n  transition: 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  will-change: transform;\n  text-decoration: none;\n}\n\n.walletconnect-modal__base__row:hover {\n  background: rgba(60, 66, 82, 0.06);\n}\n\n.walletconnect-modal__base__row:active {\n  background: rgba(60, 66, 82, 0.06);\n  transform: scale(0.975);\n  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\n\n.walletconnect-modal__base__row__h3 {\n  color: #25292e;\n  font-size: 20px;\n  font-weight: 700;\n  margin: 0;\n  padding-bottom: 3px;\n}\n\n.walletconnect-modal__base__row__right {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n\n.walletconnect-modal__base__row__right__app-icon {\n  border-radius: 8px;\n  height: 34px;\n  margin: 0 11px 2px 0;\n  width: 34px;\n  background-size: 100%;\n  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);\n}\n\n.walletconnect-modal__base__row__right__caret {\n  height: 18px;\n  opacity: 0.3;\n  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  width: 8px;\n  will-change: opacity;\n}\n\n.walletconnect-modal__base__row:hover .caret,\n.walletconnect-modal__base__row:active .caret {\n  opacity: 0.6;\n}\n\n.walletconnect-modal__mobile__toggle {\n  width: 80%;\n  display: flex;\n  margin: 0 auto;\n  position: relative;\n  overflow: hidden;\n  border-radius: 8px;\n  margin-bottom: 18px;\n  background: #d4d5d9;\n}\n\n.walletconnect-modal__single_wallet {\n  display: flex;\n  justify-content: center;\n  margin-top: 7px;\n  margin-bottom: 18px;\n}\n\n.walletconnect-modal__single_wallet a {\n  cursor: pointer;\n  color: rgb(64, 153, 255);\n  font-size: 21px;\n  font-weight: 800;\n  text-decoration: none !important;\n  margin: 0 auto;\n}\n\n.walletconnect-modal__mobile__toggle_selector {\n  width: calc(50% - 8px);\n  background: white;\n  position: absolute;\n  border-radius: 5px;\n  height: calc(100% - 8px);\n  top: 4px;\n  transition: all 0.2s ease-in-out;\n  transform: translate3d(4px, 0, 0);\n}\n\n.walletconnect-modal__mobile__toggle.right__selected .walletconnect-modal__mobile__toggle_selector {\n  transform: translate3d(calc(100% + 12px), 0, 0);\n}\n\n.walletconnect-modal__mobile__toggle a {\n  font-size: 12px;\n  width: 50%;\n  text-align: center;\n  padding: 8px;\n  margin: 0;\n  font-weight: 600;\n  z-index: 1;\n}\n\n.walletconnect-modal__footer {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-modal__footer {\n    margin-top: 5vw;\n  }\n}\n\n.walletconnect-modal__footer a {\n  cursor: pointer;\n  color: #898d97;\n  font-size: 15px;\n  margin: 0 auto;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-modal__footer a {\n    font-size: 14px;\n  }\n}\n\n.walletconnect-connect__buttons__wrapper {\n  max-height: 44vh;\n}\n\n.walletconnect-connect__buttons__wrapper__android {\n  margin: 50% 0;\n}\n\n.walletconnect-connect__buttons__wrapper__wrap {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  margin: 10px 0;\n}\n\n@media only screen and (min-width: 768px) {\n  .walletconnect-connect__buttons__wrapper__wrap {\n    margin-top: 40px;\n  }\n}\n\n.walletconnect-connect__button {\n  background-color: rgb(64, 153, 255);\n  padding: 12px;\n  border-radius: 8px;\n  text-decoration: none;\n  color: rgb(255, 255, 255);\n  font-weight: 500;\n}\n\n.walletconnect-connect__button__icon_anchor {\n  cursor: pointer;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  margin: 8px;\n  width: 42px;\n  justify-self: center;\n  flex-direction: column;\n  text-decoration: none !important;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-connect__button__icon_anchor {\n    margin: 4px;\n  }\n}\n\n.walletconnect-connect__button__icon {\n  border-radius: 10px;\n  height: 42px;\n  margin: 0;\n  width: 42px;\n  background-size: cover !important;\n  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);\n}\n\n.walletconnect-connect__button__text {\n  color: #424952;\n  font-size: 2.7vw;\n  text-decoration: none !important;\n  padding: 0;\n  margin-top: 1.8vw;\n  font-weight: 600;\n}\n\n@media only screen and (min-width: 768px) {\n  .walletconnect-connect__button__text {\n    font-size: 16px;\n    margin-top: 12px;\n  }\n}\n\n.walletconnect-search__input {\n  border: none;\n  background: #d4d5d9;\n  border-style: none;\n  padding: 8px 16px;\n  outline: none;\n  font-style: normal;\n  font-stretch: normal;\n  font-size: 16px;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: left;\n  border-radius: 8px;\n  width: calc(100% - 16px);\n  margin: 0;\n  margin-bottom: 8px;\n}\n', f.head.appendChild(Z), (tn = (tt = B.getDocumentOrThrow()).createElement("div")).setAttribute("id", W), tt.body.appendChild(tn), P.render(P.createElement(Modal, {
                            text: te[B.getNavigatorOrThrow().language.split("-")[0] || "en"] || te.en,
                            uri: s,
                            onClose: function() {
                                triggerCloseAnimation(), c && c()
                            },
                            qrcodeModalOptions: l
                        }), tn)
                    }
                },
                close: function() {
                    isNode() || triggerCloseAnimation()
                }
            }
        },
        50376: function(s, c, l) {
            "use strict";
            l.d(c, {
                D: function() {
                    return safeJsonParse
                },
                u: function() {
                    return safeJsonStringify
                }
            });
            let JSONStringify = s => JSON.stringify(s, (s, c) => "bigint" == typeof c ? c.toString() + "n" : c),
                JSONParse = s => {
                    let c = s.replace(/([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g, '$1"$2n"$3');
                    return JSON.parse(c, (s, c) => {
                        let l = "string" == typeof c && c.match(/^\d+n$/);
                        return l ? BigInt(c.substring(0, c.length - 1)) : c
                    })
                };

            function safeJsonParse(s) {
                if ("string" != typeof s) throw Error(`Cannot safe json parse value of type ${typeof s}`);
                try {
                    return JSONParse(s)
                } catch (c) {
                    return s
                }
            }

            function safeJsonStringify(s) {
                return "string" == typeof s ? s : JSONStringify(s) || ""
            }
        },
        21794: function(s, c, l) {
            "use strict";
            l.d(c, {
                F4: function() {
                    return appendToQueryString
                },
                aU: function() {
                    return convertArrayBufferToBuffer
                },
                wb: function() {
                    return convertArrayBufferToHex
                },
                rw: function() {
                    return convertBufferToArrayBuffer
                },
                y_: function() {
                    return convertHexToArrayBuffer
                },
                uA: function() {
                    return convertNumberToHex
                },
                G5: function() {
                    return f.detectEnv
                },
                sH: function() {
                    return formatRpcError
                },
                AS: function() {
                    return f.getClientMeta
                },
                tv: function() {
                    return f.getLocal
                },
                k$: function() {
                    return f.getLocation
                },
                Wz: function() {
                    return getQueryString
                },
                RM: function() {
                    return getRpcUrl
                },
                jU: function() {
                    return f.isBrowser
                },
                tf: function() {
                    return isInternalEvent
                },
                DW: function() {
                    return isJsonRpcRequest
                },
                R: function() {
                    return isJsonRpcResponseError
                },
                vF: function() {
                    return isJsonRpcResponseSuccess
                },
                tq: function() {
                    return f.isMobile
                },
                jA: function() {
                    return isReservedEvent
                },
                wM: function() {
                    return isSilentPayload
                },
                yr: function() {
                    return isWalletConnectSession
                },
                FT: function() {
                    return f.mobileLinkChoiceKey
                },
                bW: function() {
                    return parsePersonalSign
                },
                Ky: function() {
                    return parseTransactionData
                },
                GZ: function() {
                    return parseWalletConnectUri
                },
                o0: function() {
                    return te
                },
                uj: function() {
                    return f.removeLocal
                },
                co: function() {
                    return f.setLocal
                },
                V7: function() {
                    return R
                },
                Vj: function() {
                    return uuid
                }
            });
            var f = l(40506);
            let B = ["session_request", "session_update", "exchange_key", "connect", "disconnect", "display_uri", "modal_closed", "transport_open", "transport_close", "transport_error"],
                R = ["eth_sendTransaction", "eth_signTransaction", "eth_sign", "eth_signTypedData", "eth_signTypedData_v1", "eth_signTypedData_v2", "eth_signTypedData_v3", "eth_signTypedData_v4", "personal_sign", "wallet_addEthereumChain", "wallet_switchEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode"],
                I = {
                    1: "mainnet",
                    3: "ropsten",
                    4: "rinkeby",
                    5: "goerli",
                    42: "kovan"
                };
            var P = l(37051),
                W = l.n(P),
                $ = l(54852);

            function convertArrayBufferToBuffer(s) {
                return $.QM(new Uint8Array(s))
            }

            function convertArrayBufferToHex(s, c) {
                return $.ek(new Uint8Array(s), !c)
            }

            function convertBufferToArrayBuffer(s) {
                return $._W(s).buffer
            }

            function convertHexToArrayBuffer(s) {
                return $.eu(s).buffer
            }

            function convertNumberToHex(s, c) {
                let l = $.KT($.xb(new(W())(s).toString(16)));
                return c ? l : $.L_(l)
            }
            var Z = l(8793),
                tt = l(58256);
            let te = tt.payloadId;

            function uuid() {
                let s = ((s, c) => {
                    for (c = s = ""; s++ < 36; c += 51 * s & 52 ? (15 ^ s ? 8 ^ Math.random() * (20 ^ s ? 16 : 4) : 4).toString(16) : "-");
                    return c
                })();
                return s
            }

            function getRpcUrl(s, c) {
                let l;
                let f = function(s, c) {
                    let l;
                    let f = I[s];
                    return f && (l = `https://${f}.infura.io/v3/${c}`), l
                }(s, c.infuraId);
                return c.custom && c.custom[s] ? l = c.custom[s] : f && (l = f), l
            }

            function isJsonRpcRequest(s) {
                return void 0 !== s.method
            }

            function isJsonRpcResponseSuccess(s) {
                return void 0 !== s.result
            }

            function isJsonRpcResponseError(s) {
                return void 0 !== s.error
            }

            function isInternalEvent(s) {
                return void 0 !== s.event
            }

            function isReservedEvent(s) {
                return B.includes(s) || s.startsWith("wc_")
            }

            function isSilentPayload(s) {
                return !!s.method.startsWith("wc_") || !R.includes(s.method)
            }
            let isValidAddress = s => !!s && "0x" === s.toLowerCase().substring(0, 2) && !!/^(0x)?[0-9a-f]{40}$/i.test(s) && (!!(/^(0x)?[0-9a-f]{40}$/.test(s) || /^(0x)?[0-9A-F]{40}$/.test(s)) || s === function(s) {
                var c;
                s = (0, $.KT)(s.toLowerCase());
                let l = (0, $.KT)((0, Z.keccak_256)((c = s, $.Zr(c)))),
                    f = "";
                for (let c = 0; c < s.length; c++) parseInt(l[c], 16) > 7 ? f += s[c].toUpperCase() : f += s[c];
                return (0, $.L_)(f)
            }(s));

            function parsePersonalSign(s) {
                var c, l;
                return s && s.length && (c = s[0], !$.A7(c, void 0)) && (s[0] = (l = s[0], $.OG(l, !0))), s
            }

            function parseTransactionData(s) {
                var c, l, f;
                if (void 0 !== s.type && "0" !== s.type) return s;
                if (void 0 === s.from || !isValidAddress(s.from)) throw Error("Transaction object must include a valid 'from' value.");

                function parseHexValues(s) {
                    var c;
                    let l = s;
                    return "number" != typeof s && ("string" != typeof s || "" === s || "string" == typeof s && "" === s.trim()) || ($.A7(s, void 0) ? "string" == typeof s && (l = $.xb(s)) : l = convertNumberToHex(s)), "string" == typeof l && (c = l, l = $.wL($.L_(c))), l
                }
                let B = {
                        from: (c = s.from, $.xb(c)),
                        to: void 0 === s.to ? void 0 : (l = s.to, $.xb(l)),
                        gasPrice: void 0 === s.gasPrice ? "" : parseHexValues(s.gasPrice),
                        gas: void 0 === s.gas ? void 0 === s.gasLimit ? "" : parseHexValues(s.gasLimit) : parseHexValues(s.gas),
                        value: void 0 === s.value ? "" : parseHexValues(s.value),
                        nonce: void 0 === s.nonce ? "" : parseHexValues(s.nonce),
                        data: void 0 === s.data ? "" : (f = s.data, $.xb(f) || "0x")
                    },
                    R = ["gasPrice", "gas", "value", "nonce"];
                return Object.keys(B).forEach(s => {
                    (void 0 === B[s] || "string" == typeof B[s] && !B[s].trim().length) && R.includes(s) && delete B[s]
                }), B
            }

            function formatRpcError(s) {
                let c = s.message || "Failed or Rejected Request",
                    l = -32e3;
                if (s && !s.code) switch (c) {
                    case "Parse error":
                        l = -32700;
                        break;
                    case "Invalid request":
                        l = -32600;
                        break;
                    case "Method not found":
                        l = -32601;
                        break;
                    case "Invalid params":
                        l = -32602;
                        break;
                    case "Internal error":
                        l = -32603;
                        break;
                    default:
                        l = -32e3
                }
                let f = {
                    code: l,
                    message: c
                };
                return s.data && (f.data = s.data), f
            }
            var tn = l(74227);

            function getQueryString(s) {
                let c = -1 !== s.indexOf("?") ? s.indexOf("?") : void 0,
                    l = void 0 !== c ? s.substr(c) : "";
                return l
            }

            function appendToQueryString(s, c) {
                var l, f;
                let B = (l = s, tn.parse(l));
                return f = B = Object.assign(Object.assign({}, B), c), s = tn.stringify(f)
            }

            function isWalletConnectSession(s) {
                return void 0 !== s.bridge
            }

            function parseWalletConnectUri(s) {
                let c = s.indexOf(":"),
                    l = -1 !== s.indexOf("?") ? s.indexOf("?") : void 0,
                    f = s.substring(0, c),
                    B = s.substring(c + 1, l),
                    R = function(s) {
                        let c = s.split("@"),
                            l = {
                                handshakeTopic: c[0],
                                version: parseInt(c[1], 10)
                            };
                        return l
                    }(B),
                    I = void 0 !== l ? s.substr(l) : "",
                    P = function(s) {
                        let c = tn.parse(s),
                            l = {
                                key: c.key || "",
                                bridge: c.bridge || ""
                            };
                        return l
                    }(I),
                    W = Object.assign(Object.assign({
                        protocol: f
                    }, R), P);
                return W
            }
        },
        8288: function(s, c) {
            "use strict";

            function getFromWindow(s) {
                let c;
                return "undefined" != typeof window && void 0 !== window[s] && (c = window[s]), c
            }

            function getFromWindowOrThrow(s) {
                let c = getFromWindow(s);
                if (!c) throw Error(`${s} is not defined in Window`);
                return c
            }
            c.$o = c.xP = c.MX = c.VQ = c.k$ = c.UO = c.jW = c.Gw = c.Me = c.uT = c.$2 = c.sD = void 0, c.sD = getFromWindow, c.$2 = getFromWindowOrThrow, c.uT = function() {
                return getFromWindowOrThrow("document")
            }, c.Me = function() {
                return getFromWindow("document")
            }, c.Gw = function() {
                return getFromWindowOrThrow("navigator")
            }, c.jW = function() {
                return getFromWindow("navigator")
            }, c.UO = function() {
                return getFromWindowOrThrow("location")
            }, c.k$ = function() {
                return getFromWindow("location")
            }, c.VQ = function() {
                return getFromWindowOrThrow("crypto")
            }, c.MX = function() {
                return getFromWindow("crypto")
            }, c.xP = function() {
                return getFromWindowOrThrow("localStorage")
            }, c.$o = function() {
                return getFromWindow("localStorage")
            }
        },
        27324: function(s, c) {
            "use strict";

            function getFromWindow(s) {
                let c;
                return "undefined" != typeof window && void 0 !== window[s] && (c = window[s]), c
            }

            function getFromWindowOrThrow(s) {
                let c = getFromWindow(s);
                if (!c) throw Error(`${s} is not defined in Window`);
                return c
            }
            Object.defineProperty(c, "__esModule", {
                value: !0
            }), c.getLocalStorage = c.getLocalStorageOrThrow = c.getCrypto = c.getCryptoOrThrow = c.getLocation = c.getLocationOrThrow = c.getNavigator = c.getNavigatorOrThrow = c.getDocument = c.getDocumentOrThrow = c.getFromWindowOrThrow = c.getFromWindow = void 0, c.getFromWindow = getFromWindow, c.getFromWindowOrThrow = getFromWindowOrThrow, c.getDocumentOrThrow = function() {
                return getFromWindowOrThrow("document")
            }, c.getDocument = function() {
                return getFromWindow("document")
            }, c.getNavigatorOrThrow = function() {
                return getFromWindowOrThrow("navigator")
            }, c.getNavigator = function() {
                return getFromWindow("navigator")
            }, c.getLocationOrThrow = function() {
                return getFromWindowOrThrow("location")
            }, c.getLocation = function() {
                return getFromWindow("location")
            }, c.getCryptoOrThrow = function() {
                return getFromWindowOrThrow("crypto")
            }, c.getCrypto = function() {
                return getFromWindow("crypto")
            }, c.getLocalStorageOrThrow = function() {
                return getFromWindowOrThrow("localStorage")
            }, c.getLocalStorage = function() {
                return getFromWindow("localStorage")
            }
        },
        24860: function(s, c, l) {
            "use strict";
            c.D = void 0;
            let f = l(27324);
            c.D = function() {
                let s, c, l;
                try {
                    s = f.getDocumentOrThrow(), c = f.getLocationOrThrow()
                } catch (s) {
                    return null
                }

                function getWindowMetadataOfAny(...c) {
                    let l = s.getElementsByTagName("meta");
                    for (let s = 0; s < l.length; s++) {
                        let f = l[s],
                            B = ["itemprop", "property", "name"].map(s => f.getAttribute(s)).filter(s => !!s && c.includes(s));
                        if (B.length && B) {
                            let s = f.getAttribute("content");
                            if (s) return s
                        }
                    }
                    return ""
                }
                let B = ((l = getWindowMetadataOfAny("name", "og:site_name", "og:title", "twitter:title")) || (l = s.title), l),
                    R = function() {
                        let s = getWindowMetadataOfAny("description", "og:description", "twitter:description", "keywords");
                        return s
                    }(),
                    I = c.origin,
                    P = function() {
                        let l = s.getElementsByTagName("link"),
                            f = [];
                        for (let s = 0; s < l.length; s++) {
                            let B = l[s],
                                R = B.getAttribute("rel");
                            if (R && R.toLowerCase().indexOf("icon") > -1) {
                                let s = B.getAttribute("href");
                                if (s) {
                                    if (-1 === s.toLowerCase().indexOf("https:") && -1 === s.toLowerCase().indexOf("http:") && 0 !== s.indexOf("//")) {
                                        let l = c.protocol + "//" + c.host;
                                        if (0 === s.indexOf("/")) l += s;
                                        else {
                                            let f = c.pathname.split("/");
                                            f.pop();
                                            let B = f.join("/");
                                            l += B + "/" + s
                                        }
                                        f.push(l)
                                    } else if (0 === s.indexOf("//")) {
                                        let l = c.protocol + s;
                                        f.push(l)
                                    } else f.push(s)
                                }
                            }
                        }
                        return f
                    }();
                return {
                    description: R,
                    url: I,
                    icons: P,
                    name: B
                }
            }
        },
        37051: function(s, c, l) {
            ! function(s, c) {
                "use strict";

                function assert(s, c) {
                    if (!s) throw Error(c || "Assertion failed")
                }

                function inherits(s, c) {
                    s.super_ = c;
                    var TempCtor = function() {};
                    TempCtor.prototype = c.prototype, s.prototype = new TempCtor, s.prototype.constructor = s
                }

                function BN(s, c, l) {
                    if (BN.isBN(s)) return s;
                    this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== s && (("le" === c || "be" === c) && (l = c, c = 10), this._init(s || 0, c || 10, l || "be"))
                }
                "object" == typeof s ? s.exports = BN : c.BN = BN, BN.BN = BN, BN.wordSize = 26;
                try {
                    f = l(29036).Buffer
                } catch (s) {}

                function parseHex(s, c, l) {
                    for (var f = 0, B = Math.min(s.length, l), R = c; R < B; R++) {
                        var I = s.charCodeAt(R) - 48;
                        f <<= 4, I >= 49 && I <= 54 ? f |= I - 49 + 10 : I >= 17 && I <= 22 ? f |= I - 17 + 10 : f |= 15 & I
                    }
                    return f
                }

                function parseBase(s, c, l, f) {
                    for (var B = 0, R = Math.min(s.length, l), I = c; I < R; I++) {
                        var P = s.charCodeAt(I) - 48;
                        B *= f, P >= 49 ? B += P - 49 + 10 : P >= 17 ? B += P - 17 + 10 : B += P
                    }
                    return B
                }
                BN.isBN = function(s) {
                    return s instanceof BN || null !== s && "object" == typeof s && s.constructor.wordSize === BN.wordSize && Array.isArray(s.words)
                }, BN.max = function(s, c) {
                    return s.cmp(c) > 0 ? s : c
                }, BN.min = function(s, c) {
                    return 0 > s.cmp(c) ? s : c
                }, BN.prototype._init = function(s, c, l) {
                    if ("number" == typeof s) return this._initNumber(s, c, l);
                    if ("object" == typeof s) return this._initArray(s, c, l);
                    "hex" === c && (c = 16), assert(c === (0 | c) && c >= 2 && c <= 36);
                    var f = 0;
                    "-" === (s = s.toString().replace(/\s+/g, ""))[0] && f++, 16 === c ? this._parseHex(s, f) : this._parseBase(s, c, f), "-" === s[0] && (this.negative = 1), this.strip(), "le" === l && this._initArray(this.toArray(), c, l)
                }, BN.prototype._initNumber = function(s, c, l) {
                    s < 0 && (this.negative = 1, s = -s), s < 67108864 ? (this.words = [67108863 & s], this.length = 1) : s < 4503599627370496 ? (this.words = [67108863 & s, s / 67108864 & 67108863], this.length = 2) : (assert(s < 9007199254740992), this.words = [67108863 & s, s / 67108864 & 67108863, 1], this.length = 3), "le" === l && this._initArray(this.toArray(), c, l)
                }, BN.prototype._initArray = function(s, c, l) {
                    if (assert("number" == typeof s.length), s.length <= 0) return this.words = [0], this.length = 1, this;
                    this.length = Math.ceil(s.length / 3), this.words = Array(this.length);
                    for (var f, B, R = 0; R < this.length; R++) this.words[R] = 0;
                    var I = 0;
                    if ("be" === l)
                        for (R = s.length - 1, f = 0; R >= 0; R -= 3) B = s[R] | s[R - 1] << 8 | s[R - 2] << 16, this.words[f] |= B << I & 67108863, this.words[f + 1] = B >>> 26 - I & 67108863, (I += 24) >= 26 && (I -= 26, f++);
                    else if ("le" === l)
                        for (R = 0, f = 0; R < s.length; R += 3) B = s[R] | s[R + 1] << 8 | s[R + 2] << 16, this.words[f] |= B << I & 67108863, this.words[f + 1] = B >>> 26 - I & 67108863, (I += 24) >= 26 && (I -= 26, f++);
                    return this.strip()
                }, BN.prototype._parseHex = function(s, c) {
                    this.length = Math.ceil((s.length - c) / 6), this.words = Array(this.length);
                    for (var l, f, B = 0; B < this.length; B++) this.words[B] = 0;
                    var R = 0;
                    for (B = s.length - 6, l = 0; B >= c; B -= 6) f = parseHex(s, B, B + 6), this.words[l] |= f << R & 67108863, this.words[l + 1] |= f >>> 26 - R & 4194303, (R += 24) >= 26 && (R -= 26, l++);
                    B + 6 !== c && (f = parseHex(s, c, B + 6), this.words[l] |= f << R & 67108863, this.words[l + 1] |= f >>> 26 - R & 4194303), this.strip()
                }, BN.prototype._parseBase = function(s, c, l) {
                    this.words = [0], this.length = 1;
                    for (var f = 0, B = 1; B <= 67108863; B *= c) f++;
                    f--, B = B / c | 0;
                    for (var R = s.length - l, I = R % f, P = Math.min(R, R - I) + l, W = 0, $ = l; $ < P; $ += f) W = parseBase(s, $, $ + f, c), this.imuln(B), this.words[0] + W < 67108864 ? this.words[0] += W : this._iaddn(W);
                    if (0 !== I) {
                        var Z = 1;
                        for (W = parseBase(s, $, s.length, c), $ = 0; $ < I; $++) Z *= c;
                        this.imuln(Z), this.words[0] + W < 67108864 ? this.words[0] += W : this._iaddn(W)
                    }
                }, BN.prototype.copy = function(s) {
                    s.words = Array(this.length);
                    for (var c = 0; c < this.length; c++) s.words[c] = this.words[c];
                    s.length = this.length, s.negative = this.negative, s.red = this.red
                }, BN.prototype.clone = function() {
                    var s = new BN(null);
                    return this.copy(s), s
                }, BN.prototype._expand = function(s) {
                    for (; this.length < s;) this.words[this.length++] = 0;
                    return this
                }, BN.prototype.strip = function() {
                    for (; this.length > 1 && 0 === this.words[this.length - 1];) this.length--;
                    return this._normSign()
                }, BN.prototype._normSign = function() {
                    return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this
                }, BN.prototype.inspect = function() {
                    return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
                };
                var f, B = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
                    R = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                    I = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];

                function smallMulTo(s, c, l) {
                    l.negative = c.negative ^ s.negative;
                    var f = s.length + c.length | 0;
                    l.length = f, f = f - 1 | 0;
                    var B = 0 | s.words[0],
                        R = 0 | c.words[0],
                        I = B * R,
                        P = 67108863 & I,
                        W = I / 67108864 | 0;
                    l.words[0] = P;
                    for (var $ = 1; $ < f; $++) {
                        for (var Z = W >>> 26, tt = 67108863 & W, te = Math.min($, c.length - 1), tn = Math.max(0, $ - s.length + 1); tn <= te; tn++) {
                            var tr = $ - tn | 0;
                            Z += (I = (B = 0 | s.words[tr]) * (R = 0 | c.words[tn]) + tt) / 67108864 | 0, tt = 67108863 & I
                        }
                        l.words[$] = 0 | tt, W = 0 | Z
                    }
                    return 0 !== W ? l.words[$] = 0 | W : l.length--, l.strip()
                }
                BN.prototype.toString = function(s, c) {
                    if (c = 0 | c || 1, 16 === (s = s || 10) || "hex" === s) {
                        l = "";
                        for (var l, f = 0, P = 0, W = 0; W < this.length; W++) {
                            var $ = this.words[W],
                                Z = (($ << f | P) & 16777215).toString(16);
                            l = 0 != (P = $ >>> 24 - f & 16777215) || W !== this.length - 1 ? B[6 - Z.length] + Z + l : Z + l, (f += 2) >= 26 && (f -= 26, W--)
                        }
                        for (0 !== P && (l = P.toString(16) + l); l.length % c != 0;) l = "0" + l;
                        return 0 !== this.negative && (l = "-" + l), l
                    }
                    if (s === (0 | s) && s >= 2 && s <= 36) {
                        var tt = R[s],
                            te = I[s];
                        l = "";
                        var tn = this.clone();
                        for (tn.negative = 0; !tn.isZero();) {
                            var tr = tn.modn(te).toString(s);
                            l = (tn = tn.idivn(te)).isZero() ? tr + l : B[tt - tr.length] + tr + l
                        }
                        for (this.isZero() && (l = "0" + l); l.length % c != 0;) l = "0" + l;
                        return 0 !== this.negative && (l = "-" + l), l
                    }
                    assert(!1, "Base should be between 2 and 36")
                }, BN.prototype.toNumber = function() {
                    var s = this.words[0];
                    return 2 === this.length ? s += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? s += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && assert(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -s : s
                }, BN.prototype.toJSON = function() {
                    return this.toString(16)
                }, BN.prototype.toBuffer = function(s, c) {
                    return assert(void 0 !== f), this.toArrayLike(f, s, c)
                }, BN.prototype.toArray = function(s, c) {
                    return this.toArrayLike(Array, s, c)
                }, BN.prototype.toArrayLike = function(s, c, l) {
                    var f, B, R = this.byteLength(),
                        I = l || Math.max(1, R);
                    assert(R <= I, "byte array longer than desired length"), assert(I > 0, "Requested array length <= 0"), this.strip();
                    var P = new s(I),
                        W = this.clone();
                    if ("le" === c) {
                        for (B = 0; !W.isZero(); B++) f = W.andln(255), W.iushrn(8), P[B] = f;
                        for (; B < I; B++) P[B] = 0
                    } else {
                        for (B = 0; B < I - R; B++) P[B] = 0;
                        for (B = 0; !W.isZero(); B++) f = W.andln(255), W.iushrn(8), P[I - B - 1] = f
                    }
                    return P
                }, Math.clz32 ? BN.prototype._countBits = function(s) {
                    return 32 - Math.clz32(s)
                } : BN.prototype._countBits = function(s) {
                    var c = s,
                        l = 0;
                    return c >= 4096 && (l += 13, c >>>= 13), c >= 64 && (l += 7, c >>>= 7), c >= 8 && (l += 4, c >>>= 4), c >= 2 && (l += 2, c >>>= 2), l + c
                }, BN.prototype._zeroBits = function(s) {
                    if (0 === s) return 26;
                    var c = s,
                        l = 0;
                    return (8191 & c) == 0 && (l += 13, c >>>= 13), (127 & c) == 0 && (l += 7, c >>>= 7), (15 & c) == 0 && (l += 4, c >>>= 4), (3 & c) == 0 && (l += 2, c >>>= 2), (1 & c) == 0 && l++, l
                }, BN.prototype.bitLength = function() {
                    var s = this.words[this.length - 1],
                        c = this._countBits(s);
                    return (this.length - 1) * 26 + c
                }, BN.prototype.zeroBits = function() {
                    if (this.isZero()) return 0;
                    for (var s = 0, c = 0; c < this.length; c++) {
                        var l = this._zeroBits(this.words[c]);
                        if (s += l, 26 !== l) break
                    }
                    return s
                }, BN.prototype.byteLength = function() {
                    return Math.ceil(this.bitLength() / 8)
                }, BN.prototype.toTwos = function(s) {
                    return 0 !== this.negative ? this.abs().inotn(s).iaddn(1) : this.clone()
                }, BN.prototype.fromTwos = function(s) {
                    return this.testn(s - 1) ? this.notn(s).iaddn(1).ineg() : this.clone()
                }, BN.prototype.isNeg = function() {
                    return 0 !== this.negative
                }, BN.prototype.neg = function() {
                    return this.clone().ineg()
                }, BN.prototype.ineg = function() {
                    return this.isZero() || (this.negative ^= 1), this
                }, BN.prototype.iuor = function(s) {
                    for (; this.length < s.length;) this.words[this.length++] = 0;
                    for (var c = 0; c < s.length; c++) this.words[c] = this.words[c] | s.words[c];
                    return this.strip()
                }, BN.prototype.ior = function(s) {
                    return assert((this.negative | s.negative) == 0), this.iuor(s)
                }, BN.prototype.or = function(s) {
                    return this.length > s.length ? this.clone().ior(s) : s.clone().ior(this)
                }, BN.prototype.uor = function(s) {
                    return this.length > s.length ? this.clone().iuor(s) : s.clone().iuor(this)
                }, BN.prototype.iuand = function(s) {
                    var c;
                    c = this.length > s.length ? s : this;
                    for (var l = 0; l < c.length; l++) this.words[l] = this.words[l] & s.words[l];
                    return this.length = c.length, this.strip()
                }, BN.prototype.iand = function(s) {
                    return assert((this.negative | s.negative) == 0), this.iuand(s)
                }, BN.prototype.and = function(s) {
                    return this.length > s.length ? this.clone().iand(s) : s.clone().iand(this)
                }, BN.prototype.uand = function(s) {
                    return this.length > s.length ? this.clone().iuand(s) : s.clone().iuand(this)
                }, BN.prototype.iuxor = function(s) {
                    this.length > s.length ? (c = this, l = s) : (c = s, l = this);
                    for (var c, l, f = 0; f < l.length; f++) this.words[f] = c.words[f] ^ l.words[f];
                    if (this !== c)
                        for (; f < c.length; f++) this.words[f] = c.words[f];
                    return this.length = c.length, this.strip()
                }, BN.prototype.ixor = function(s) {
                    return assert((this.negative | s.negative) == 0), this.iuxor(s)
                }, BN.prototype.xor = function(s) {
                    return this.length > s.length ? this.clone().ixor(s) : s.clone().ixor(this)
                }, BN.prototype.uxor = function(s) {
                    return this.length > s.length ? this.clone().iuxor(s) : s.clone().iuxor(this)
                }, BN.prototype.inotn = function(s) {
                    assert("number" == typeof s && s >= 0);
                    var c = 0 | Math.ceil(s / 26),
                        l = s % 26;
                    this._expand(c), l > 0 && c--;
                    for (var f = 0; f < c; f++) this.words[f] = 67108863 & ~this.words[f];
                    return l > 0 && (this.words[f] = ~this.words[f] & 67108863 >> 26 - l), this.strip()
                }, BN.prototype.notn = function(s) {
                    return this.clone().inotn(s)
                }, BN.prototype.setn = function(s, c) {
                    assert("number" == typeof s && s >= 0);
                    var l = s / 26 | 0,
                        f = s % 26;
                    return this._expand(l + 1), c ? this.words[l] = this.words[l] | 1 << f : this.words[l] = this.words[l] & ~(1 << f), this.strip()
                }, BN.prototype.iadd = function(s) {
                    if (0 !== this.negative && 0 === s.negative) return this.negative = 0, c = this.isub(s), this.negative ^= 1, this._normSign();
                    if (0 === this.negative && 0 !== s.negative) return s.negative = 0, c = this.isub(s), s.negative = 1, c._normSign();
                    this.length > s.length ? (l = this, f = s) : (l = s, f = this);
                    for (var c, l, f, B = 0, R = 0; R < f.length; R++) c = (0 | l.words[R]) + (0 | f.words[R]) + B, this.words[R] = 67108863 & c, B = c >>> 26;
                    for (; 0 !== B && R < l.length; R++) c = (0 | l.words[R]) + B, this.words[R] = 67108863 & c, B = c >>> 26;
                    if (this.length = l.length, 0 !== B) this.words[this.length] = B, this.length++;
                    else if (l !== this)
                        for (; R < l.length; R++) this.words[R] = l.words[R];
                    return this
                }, BN.prototype.add = function(s) {
                    var c;
                    return 0 !== s.negative && 0 === this.negative ? (s.negative = 0, c = this.sub(s), s.negative ^= 1, c) : 0 === s.negative && 0 !== this.negative ? (this.negative = 0, c = s.sub(this), this.negative = 1, c) : this.length > s.length ? this.clone().iadd(s) : s.clone().iadd(this)
                }, BN.prototype.isub = function(s) {
                    if (0 !== s.negative) {
                        s.negative = 0;
                        var c, l, f = this.iadd(s);
                        return s.negative = 1, f._normSign()
                    }
                    if (0 !== this.negative) return this.negative = 0, this.iadd(s), this.negative = 1, this._normSign();
                    var B = this.cmp(s);
                    if (0 === B) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
                    B > 0 ? (c = this, l = s) : (c = s, l = this);
                    for (var R = 0, I = 0; I < l.length; I++) R = (f = (0 | c.words[I]) - (0 | l.words[I]) + R) >> 26, this.words[I] = 67108863 & f;
                    for (; 0 !== R && I < c.length; I++) R = (f = (0 | c.words[I]) + R) >> 26, this.words[I] = 67108863 & f;
                    if (0 === R && I < c.length && c !== this)
                        for (; I < c.length; I++) this.words[I] = c.words[I];
                    return this.length = Math.max(this.length, I), c !== this && (this.negative = 1), this.strip()
                }, BN.prototype.sub = function(s) {
                    return this.clone().isub(s)
                };
                var comb10MulTo = function(s, c, l) {
                    var f, B, R, I = s.words,
                        P = c.words,
                        W = l.words,
                        $ = 0,
                        Z = 0 | I[0],
                        tt = 8191 & Z,
                        te = Z >>> 13,
                        tn = 0 | I[1],
                        tr = 8191 & tn,
                        to = tn >>> 13,
                        ti = 0 | I[2],
                        ts = 8191 & ti,
                        ta = ti >>> 13,
                        tu = 0 | I[3],
                        tc = 8191 & tu,
                        tl = tu >>> 13,
                        th = 0 | I[4],
                        tf = 8191 & th,
                        td = th >>> 13,
                        tp = 0 | I[5],
                        tm = 8191 & tp,
                        tg = tp >>> 13,
                        t_ = 0 | I[6],
                        ty = 8191 & t_,
                        tv = t_ >>> 13,
                        tw = 0 | I[7],
                        tb = 8191 & tw,
                        tM = tw >>> 13,
                        tB = 0 | I[8],
                        tx = 8191 & tB,
                        tE = tB >>> 13,
                        tR = 0 | I[9],
                        tk = 8191 & tR,
                        tS = tR >>> 13,
                        tI = 0 | P[0],
                        tN = 8191 & tI,
                        tA = tI >>> 13,
                        tC = 0 | P[1],
                        tT = 8191 & tC,
                        tO = tC >>> 13,
                        tP = 0 | P[2],
                        tL = 8191 & tP,
                        tU = tP >>> 13,
                        tj = 0 | P[3],
                        tq = 8191 & tj,
                        tD = tj >>> 13,
                        tF = 0 | P[4],
                        tH = 8191 & tF,
                        tW = tF >>> 13,
                        tJ = 0 | P[5],
                        tz = 8191 & tJ,
                        t$ = tJ >>> 13,
                        tK = 0 | P[6],
                        tV = 8191 & tK,
                        tQ = tK >>> 13,
                        tY = 0 | P[7],
                        tZ = 8191 & tY,
                        tG = tY >>> 13,
                        tX = 0 | P[8],
                        t0 = 8191 & tX,
                        t1 = tX >>> 13,
                        t2 = 0 | P[9],
                        t6 = 8191 & t2,
                        t8 = t2 >>> 13;
                    l.negative = s.negative ^ c.negative, l.length = 19;
                    var t3 = ($ + (f = Math.imul(tt, tN)) | 0) + ((8191 & (B = (B = Math.imul(tt, tA)) + Math.imul(te, tN) | 0)) << 13) | 0;
                    $ = ((R = Math.imul(te, tA)) + (B >>> 13) | 0) + (t3 >>> 26) | 0, t3 &= 67108863, f = Math.imul(tr, tN), B = (B = Math.imul(tr, tA)) + Math.imul(to, tN) | 0, R = Math.imul(to, tA);
                    var t4 = ($ + (f = f + Math.imul(tt, tT) | 0) | 0) + ((8191 & (B = (B = B + Math.imul(tt, tO) | 0) + Math.imul(te, tT) | 0)) << 13) | 0;
                    $ = ((R = R + Math.imul(te, tO) | 0) + (B >>> 13) | 0) + (t4 >>> 26) | 0, t4 &= 67108863, f = Math.imul(ts, tN), B = (B = Math.imul(ts, tA)) + Math.imul(ta, tN) | 0, R = Math.imul(ta, tA), f = f + Math.imul(tr, tT) | 0, B = (B = B + Math.imul(tr, tO) | 0) + Math.imul(to, tT) | 0, R = R + Math.imul(to, tO) | 0;
                    var t5 = ($ + (f = f + Math.imul(tt, tL) | 0) | 0) + ((8191 & (B = (B = B + Math.imul(tt, tU) | 0) + Math.imul(te, tL) | 0)) << 13) | 0;
                    $ = ((R = R + Math.imul(te, tU) | 0) + (B >>> 13) | 0) + (t5 >>> 26) | 0, t5 &= 67108863, f = Math.imul(tc, tN), B = (B = Math.imul(tc, tA)) + Math.imul(tl, tN) | 0, R = Math.imul(tl, tA), f = f + Math.imul(ts, tT) | 0, B = (B = B + Math.imul(ts, tO) | 0) + Math.imul(ta, tT) | 0, R = R + Math.imul(ta, tO) | 0, f = f + Math.imul(tr, tL) | 0, B = (B = B + Math.imul(tr, tU) | 0) + Math.imul(to, tL) | 0, R = R + Math.imul(to, tU) | 0;
                    var t9 = ($ + (f = f + Math.imul(tt, tq) | 0) | 0) + ((8191 & (B = (B = B + Math.imul(tt, tD) | 0) + Math.imul(te, tq) | 0)) << 13) | 0;
                    $ = ((R = R + Math.imul(te, tD) | 0) + (B >>> 13) | 0) + (t9 >>> 26) | 0, t9 &= 67108863, f = Math.imul(tf, tN), B = (B = Math.imul(tf, tA)) + Math.imul(td, tN) | 0, R = Math.imul(td, tA), f = f + Math.imul(tc, tT) | 0, B = (B = B + Math.imul(tc, tO) | 0) + Math.imul(tl, tT) | 0, R = R + Math.imul(tl, tO) | 0, f = f + Math.imul(ts, tL) | 0, B = (B = B + Math.imul(ts, tU) | 0) + Math.imul(ta, tL) | 0, R = R + Math.imul(ta, tU) | 0, f = f + Math.imul(tr, tq) | 0, B = (B = B + Math.imul(tr, tD) | 0) + Math.imul(to, tq) | 0, R = R + Math.imul(to, tD) | 0;
                    var t7 = ($ + (f = f + Math.imul(tt, tH) | 0) | 0) + ((8191 & (B = (B = B + Math.imul(tt, tW) | 0) + Math.imul(te, tH) | 0)) << 13) | 0;
                    $ = ((R = R + Math.imul(te, tW) | 0) + (B >>> 13) | 0) + (t7 >>> 26) | 0, t7 &= 67108863, f = Math.imul(tm, tN), B = (B = Math.imul(tm, tA)) + Math.imul(tg, tN) | 0, R = Math.imul(tg, tA), f = f + Math.imul(tf, tT) | 0, B = (B = B + Math.imul(tf, tO) | 0) + Math.imul(td, tT) | 0, R = R + Math.imul(td, tO) | 0, f = f + Math.imul(tc, tL) | 0, B = (B = B + Math.imul(tc, tU) | 0) + Math.imul(tl, tL) | 0, R = R + Math.imul(tl, tU) | 0, f = f + Math.imul(ts, tq) | 0, B = (B = B + Math.imul(ts, tD) | 0) + Math.imul(ta, tq) | 0, R = R + Math.imul(ta, tD) | 0, f = f + Math.imul(tr, tH) | 0, B = (B = B + Math.imul(tr, tW) | 0) + Math.imul(to, tH) | 0, R = R + Math.imul(to, tW) | 0;
                    var et = ($ + (f = f + Math.imul(tt, tz) | 0) | 0) + ((8191 & (B = (B = B + Math.imul(tt, t$) | 0) + Math.imul(te, tz) | 0)) << 13) | 0;
                    $ = ((R = R + Math.imul(te, t$) | 0) + (B >>> 13) | 0) + (et >>> 26) | 0, et &= 67108863, f = Math.imul(ty, tN), B = (B = Math.imul(ty, tA)) + Math.imul(tv, tN) | 0, R = Math.imul(tv, tA), f = f + Math.imul(tm, tT) | 0, B = (B = B + Math.imul(tm, tO) | 0) + Math.imul(tg, tT) | 0, R = R + Math.imul(tg, tO) | 0, f = f + Math.imul(tf, tL) | 0, B = (B = B + Math.imul(tf, tU) | 0) + Math.imul(td, tL) | 0, R = R + Math.imul(td, tU) | 0, f = f + Math.imul(tc, tq) | 0, B = (B = B + Math.imul(tc, tD) | 0) + Math.imul(tl, tq) | 0, R = R + Math.imul(tl, tD) | 0, f = f + Math.imul(ts, tH) | 0, B = (B = B + Math.imul(ts, tW) | 0) + Math.imul(ta, tH) | 0, R = R + Math.imul(ta, tW) | 0, f = f + Math.imul(tr, tz) | 0, B = (B = B + Math.imul(tr, t$) | 0) + Math.imul(to, tz) | 0, R = R + Math.imul(to, t$) | 0;
                    var ee = ($ + (f = f + Math.imul(tt, tV) | 0) | 0) + ((8191 & (B = (B = B + Math.imul(tt, tQ) | 0) + Math.imul(te, tV) | 0)) << 13) | 0;
                    $ = ((R = R + Math.imul(te, tQ) | 0) + (B >>> 13) | 0) + (ee >>> 26) | 0, ee &= 67108863, f = Math.imul(tb, tN), B = (B = Math.imul(tb, tA)) + Math.imul(tM, tN) | 0, R = Math.imul(tM, tA), f = f + Math.imul(ty, tT) | 0, B = (B = B + Math.imul(ty, tO) | 0) + Math.imul(tv, tT) | 0, R = R + Math.imul(tv, tO) | 0, f = f + Math.imul(tm, tL) | 0, B = (B = B + Math.imul(tm, tU) | 0) + Math.imul(tg, tL) | 0, R = R + Math.imul(tg, tU) | 0, f = f + Math.imul(tf, tq) | 0, B = (B = B + Math.imul(tf, tD) | 0) + Math.imul(td, tq) | 0, R = R + Math.imul(td, tD) | 0, f = f + Math.imul(tc, tH) | 0, B = (B = B + Math.imul(tc, tW) | 0) + Math.imul(tl, tH) | 0, R = R + Math.imul(tl, tW) | 0, f = f + Math.imul(ts, tz) | 0, B = (B = B + Math.imul(ts, t$) | 0) + Math.imul(ta, tz) | 0, R = R + Math.imul(ta, t$) | 0, f = f + Math.imul(tr, tV) | 0, B = (B = B + Math.imul(tr, tQ) | 0) + Math.imul(to, tV) | 0, R = R + Math.imul(to, tQ) | 0;
                    var en = ($ + (f = f + Math.imul(tt, tZ) | 0) | 0) + ((8191 & (B = (B = B + Math.imul(tt, tG) | 0) + Math.imul(te, tZ) | 0)) << 13) | 0;
                    $ = ((R = R + Math.imul(te, tG) | 0) + (B >>> 13) | 0) + (en >>> 26) | 0, en &= 67108863, f = Math.imul(tx, tN), B = (B = Math.imul(tx, tA)) + Math.imul(tE, tN) | 0, R = Math.imul(tE, tA), f = f + Math.imul(tb, tT) | 0, B = (B = B + Math.imul(tb, tO) | 0) + Math.imul(tM, tT) | 0, R = R + Math.imul(tM, tO) | 0, f = f + Math.imul(ty, tL) | 0, B = (B = B + Math.imul(ty, tU) | 0) + Math.imul(tv, tL) | 0, R = R + Math.imul(tv, tU) | 0, f = f + Math.imul(tm, tq) | 0, B = (B = B + Math.imul(tm, tD) | 0) + Math.imul(tg, tq) | 0, R = R + Math.imul(tg, tD) | 0, f = f + Math.imul(tf, tH) | 0, B = (B = B + Math.imul(tf, tW) | 0) + Math.imul(td, tH) | 0, R = R + Math.imul(td, tW) | 0, f = f + Math.imul(tc, tz) | 0, B = (B = B + Math.imul(tc, t$) | 0) + Math.imul(tl, tz) | 0, R = R + Math.imul(tl, t$) | 0, f = f + Math.imul(ts, tV) | 0, B = (B = B + Math.imul(ts, tQ) | 0) + Math.imul(ta, tV) | 0, R = R + Math.imul(ta, tQ) | 0, f = f + Math.imul(tr, tZ) | 0, B = (B = B + Math.imul(tr, tG) | 0) + Math.imul(to, tZ) | 0, R = R + Math.imul(to, tG) | 0;
                    var er = ($ + (f = f + Math.imul(tt, t0) | 0) | 0) + ((8191 & (B = (B = B + Math.imul(tt, t1) | 0) + Math.imul(te, t0) | 0)) << 13) | 0;
                    $ = ((R = R + Math.imul(te, t1) | 0) + (B >>> 13) | 0) + (er >>> 26) | 0, er &= 67108863, f = Math.imul(tk, tN), B = (B = Math.imul(tk, tA)) + Math.imul(tS, tN) | 0, R = Math.imul(tS, tA), f = f + Math.imul(tx, tT) | 0, B = (B = B + Math.imul(tx, tO) | 0) + Math.imul(tE, tT) | 0, R = R + Math.imul(tE, tO) | 0, f = f + Math.imul(tb, tL) | 0, B = (B = B + Math.imul(tb, tU) | 0) + Math.imul(tM, tL) | 0, R = R + Math.imul(tM, tU) | 0, f = f + Math.imul(ty, tq) | 0, B = (B = B + Math.imul(ty, tD) | 0) + Math.imul(tv, tq) | 0, R = R + Math.imul(tv, tD) | 0, f = f + Math.imul(tm, tH) | 0, B = (B = B + Math.imul(tm, tW) | 0) + Math.imul(tg, tH) | 0, R = R + Math.imul(tg, tW) | 0, f = f + Math.imul(tf, tz) | 0, B = (B = B + Math.imul(tf, t$) | 0) + Math.imul(td, tz) | 0, R = R + Math.imul(td, t$) | 0, f = f + Math.imul(tc, tV) | 0, B = (B = B + Math.imul(tc, tQ) | 0) + Math.imul(tl, tV) | 0, R = R + Math.imul(tl, tQ) | 0, f = f + Math.imul(ts, tZ) | 0, B = (B = B + Math.imul(ts, tG) | 0) + Math.imul(ta, tZ) | 0, R = R + Math.imul(ta, tG) | 0, f = f + Math.imul(tr, t0) | 0, B = (B = B + Math.imul(tr, t1) | 0) + Math.imul(to, t0) | 0, R = R + Math.imul(to, t1) | 0;
                    var eo = ($ + (f = f + Math.imul(tt, t6) | 0) | 0) + ((8191 & (B = (B = B + Math.imul(tt, t8) | 0) + Math.imul(te, t6) | 0)) << 13) | 0;
                    $ = ((R = R + Math.imul(te, t8) | 0) + (B >>> 13) | 0) + (eo >>> 26) | 0, eo &= 67108863, f = Math.imul(tk, tT), B = (B = Math.imul(tk, tO)) + Math.imul(tS, tT) | 0, R = Math.imul(tS, tO), f = f + Math.imul(tx, tL) | 0, B = (B = B + Math.imul(tx, tU) | 0) + Math.imul(tE, tL) | 0, R = R + Math.imul(tE, tU) | 0, f = f + Math.imul(tb, tq) | 0, B = (B = B + Math.imul(tb, tD) | 0) + Math.imul(tM, tq) | 0, R = R + Math.imul(tM, tD) | 0, f = f + Math.imul(ty, tH) | 0, B = (B = B + Math.imul(ty, tW) | 0) + Math.imul(tv, tH) | 0, R = R + Math.imul(tv, tW) | 0, f = f + Math.imul(tm, tz) | 0, B = (B = B + Math.imul(tm, t$) | 0) + Math.imul(tg, tz) | 0, R = R + Math.imul(tg, t$) | 0, f = f + Math.imul(tf, tV) | 0, B = (B = B + Math.imul(tf, tQ) | 0) + Math.imul(td, tV) | 0, R = R + Math.imul(td, tQ) | 0, f = f + Math.imul(tc, tZ) | 0, B = (B = B + Math.imul(tc, tG) | 0) + Math.imul(tl, tZ) | 0, R = R + Math.imul(tl, tG) | 0, f = f + Math.imul(ts, t0) | 0, B = (B = B + Math.imul(ts, t1) | 0) + Math.imul(ta, t0) | 0, R = R + Math.imul(ta, t1) | 0;
                    var ei = ($ + (f = f + Math.imul(tr, t6) | 0) | 0) + ((8191 & (B = (B = B + Math.imul(tr, t8) | 0) + Math.imul(to, t6) | 0)) << 13) | 0;
                    $ = ((R = R + Math.imul(to, t8) | 0) + (B >>> 13) | 0) + (ei >>> 26) | 0, ei &= 67108863, f = Math.imul(tk, tL), B = (B = Math.imul(tk, tU)) + Math.imul(tS, tL) | 0, R = Math.imul(tS, tU), f = f + Math.imul(tx, tq) | 0, B = (B = B + Math.imul(tx, tD) | 0) + Math.imul(tE, tq) | 0, R = R + Math.imul(tE, tD) | 0, f = f + Math.imul(tb, tH) | 0, B = (B = B + Math.imul(tb, tW) | 0) + Math.imul(tM, tH) | 0, R = R + Math.imul(tM, tW) | 0, f = f + Math.imul(ty, tz) | 0, B = (B = B + Math.imul(ty, t$) | 0) + Math.imul(tv, tz) | 0, R = R + Math.imul(tv, t$) | 0, f = f + Math.imul(tm, tV) | 0, B = (B = B + Math.imul(tm, tQ) | 0) + Math.imul(tg, tV) | 0, R = R + Math.imul(tg, tQ) | 0, f = f + Math.imul(tf, tZ) | 0, B = (B = B + Math.imul(tf, tG) | 0) + Math.imul(td, tZ) | 0, R = R + Math.imul(td, tG) | 0, f = f + Math.imul(tc, t0) | 0, B = (B = B + Math.imul(tc, t1) | 0) + Math.imul(tl, t0) | 0, R = R + Math.imul(tl, t1) | 0;
                    var es = ($ + (f = f + Math.imul(ts, t6) | 0) | 0) + ((8191 & (B = (B = B + Math.imul(ts, t8) | 0) + Math.imul(ta, t6) | 0)) << 13) | 0;
                    $ = ((R = R + Math.imul(ta, t8) | 0) + (B >>> 13) | 0) + (es >>> 26) | 0, es &= 67108863, f = Math.imul(tk, tq), B = (B = Math.imul(tk, tD)) + Math.imul(tS, tq) | 0, R = Math.imul(tS, tD), f = f + Math.imul(tx, tH) | 0, B = (B = B + Math.imul(tx, tW) | 0) + Math.imul(tE, tH) | 0, R = R + Math.imul(tE, tW) | 0, f = f + Math.imul(tb, tz) | 0, B = (B = B + Math.imul(tb, t$) | 0) + Math.imul(tM, tz) | 0, R = R + Math.imul(tM, t$) | 0, f = f + Math.imul(ty, tV) | 0, B = (B = B + Math.imul(ty, tQ) | 0) + Math.imul(tv, tV) | 0, R = R + Math.imul(tv, tQ) | 0, f = f + Math.imul(tm, tZ) | 0, B = (B = B + Math.imul(tm, tG) | 0) + Math.imul(tg, tZ) | 0, R = R + Math.imul(tg, tG) | 0, f = f + Math.imul(tf, t0) | 0, B = (B = B + Math.imul(tf, t1) | 0) + Math.imul(td, t0) | 0, R = R + Math.imul(td, t1) | 0;
                    var ea = ($ + (f = f + Math.imul(tc, t6) | 0) | 0) + ((8191 & (B = (B = B + Math.imul(tc, t8) | 0) + Math.imul(tl, t6) | 0)) << 13) | 0;
                    $ = ((R = R + Math.imul(tl, t8) | 0) + (B >>> 13) | 0) + (ea >>> 26) | 0, ea &= 67108863, f = Math.imul(tk, tH), B = (B = Math.imul(tk, tW)) + Math.imul(tS, tH) | 0, R = Math.imul(tS, tW), f = f + Math.imul(tx, tz) | 0, B = (B = B + Math.imul(tx, t$) | 0) + Math.imul(tE, tz) | 0, R = R + Math.imul(tE, t$) | 0, f = f + Math.imul(tb, tV) | 0, B = (B = B + Math.imul(tb, tQ) | 0) + Math.imul(tM, tV) | 0, R = R + Math.imul(tM, tQ) | 0, f = f + Math.imul(ty, tZ) | 0, B = (B = B + Math.imul(ty, tG) | 0) + Math.imul(tv, tZ) | 0, R = R + Math.imul(tv, tG) | 0, f = f + Math.imul(tm, t0) | 0, B = (B = B + Math.imul(tm, t1) | 0) + Math.imul(tg, t0) | 0, R = R + Math.imul(tg, t1) | 0;
                    var eu = ($ + (f = f + Math.imul(tf, t6) | 0) | 0) + ((8191 & (B = (B = B + Math.imul(tf, t8) | 0) + Math.imul(td, t6) | 0)) << 13) | 0;
                    $ = ((R = R + Math.imul(td, t8) | 0) + (B >>> 13) | 0) + (eu >>> 26) | 0, eu &= 67108863, f = Math.imul(tk, tz), B = (B = Math.imul(tk, t$)) + Math.imul(tS, tz) | 0, R = Math.imul(tS, t$), f = f + Math.imul(tx, tV) | 0, B = (B = B + Math.imul(tx, tQ) | 0) + Math.imul(tE, tV) | 0, R = R + Math.imul(tE, tQ) | 0, f = f + Math.imul(tb, tZ) | 0, B = (B = B + Math.imul(tb, tG) | 0) + Math.imul(tM, tZ) | 0, R = R + Math.imul(tM, tG) | 0, f = f + Math.imul(ty, t0) | 0, B = (B = B + Math.imul(ty, t1) | 0) + Math.imul(tv, t0) | 0, R = R + Math.imul(tv, t1) | 0;
                    var ec = ($ + (f = f + Math.imul(tm, t6) | 0) | 0) + ((8191 & (B = (B = B + Math.imul(tm, t8) | 0) + Math.imul(tg, t6) | 0)) << 13) | 0;
                    $ = ((R = R + Math.imul(tg, t8) | 0) + (B >>> 13) | 0) + (ec >>> 26) | 0, ec &= 67108863, f = Math.imul(tk, tV), B = (B = Math.imul(tk, tQ)) + Math.imul(tS, tV) | 0, R = Math.imul(tS, tQ), f = f + Math.imul(tx, tZ) | 0, B = (B = B + Math.imul(tx, tG) | 0) + Math.imul(tE, tZ) | 0, R = R + Math.imul(tE, tG) | 0, f = f + Math.imul(tb, t0) | 0, B = (B = B + Math.imul(tb, t1) | 0) + Math.imul(tM, t0) | 0, R = R + Math.imul(tM, t1) | 0;
                    var el = ($ + (f = f + Math.imul(ty, t6) | 0) | 0) + ((8191 & (B = (B = B + Math.imul(ty, t8) | 0) + Math.imul(tv, t6) | 0)) << 13) | 0;
                    $ = ((R = R + Math.imul(tv, t8) | 0) + (B >>> 13) | 0) + (el >>> 26) | 0, el &= 67108863, f = Math.imul(tk, tZ), B = (B = Math.imul(tk, tG)) + Math.imul(tS, tZ) | 0, R = Math.imul(tS, tG), f = f + Math.imul(tx, t0) | 0, B = (B = B + Math.imul(tx, t1) | 0) + Math.imul(tE, t0) | 0, R = R + Math.imul(tE, t1) | 0;
                    var eh = ($ + (f = f + Math.imul(tb, t6) | 0) | 0) + ((8191 & (B = (B = B + Math.imul(tb, t8) | 0) + Math.imul(tM, t6) | 0)) << 13) | 0;
                    $ = ((R = R + Math.imul(tM, t8) | 0) + (B >>> 13) | 0) + (eh >>> 26) | 0, eh &= 67108863, f = Math.imul(tk, t0), B = (B = Math.imul(tk, t1)) + Math.imul(tS, t0) | 0, R = Math.imul(tS, t1);
                    var ef = ($ + (f = f + Math.imul(tx, t6) | 0) | 0) + ((8191 & (B = (B = B + Math.imul(tx, t8) | 0) + Math.imul(tE, t6) | 0)) << 13) | 0;
                    $ = ((R = R + Math.imul(tE, t8) | 0) + (B >>> 13) | 0) + (ef >>> 26) | 0, ef &= 67108863;
                    var ed = ($ + (f = Math.imul(tk, t6)) | 0) + ((8191 & (B = (B = Math.imul(tk, t8)) + Math.imul(tS, t6) | 0)) << 13) | 0;
                    return $ = ((R = Math.imul(tS, t8)) + (B >>> 13) | 0) + (ed >>> 26) | 0, ed &= 67108863, W[0] = t3, W[1] = t4, W[2] = t5, W[3] = t9, W[4] = t7, W[5] = et, W[6] = ee, W[7] = en, W[8] = er, W[9] = eo, W[10] = ei, W[11] = es, W[12] = ea, W[13] = eu, W[14] = ec, W[15] = el, W[16] = eh, W[17] = ef, W[18] = ed, 0 !== $ && (W[19] = $, l.length++), l
                };

                function jumboMulTo(s, c, l) {
                    return new FFTM().mulp(s, c, l)
                }

                function FFTM(s, c) {
                    this.x = s, this.y = c
                }
                Math.imul || (comb10MulTo = smallMulTo), BN.prototype.mulTo = function(s, c) {
                    var l = this.length + s.length;
                    return 10 === this.length && 10 === s.length ? comb10MulTo(this, s, c) : l < 63 ? smallMulTo(this, s, c) : l < 1024 ? function(s, c, l) {
                        l.negative = c.negative ^ s.negative, l.length = s.length + c.length;
                        for (var f = 0, B = 0, R = 0; R < l.length - 1; R++) {
                            var I = B;
                            B = 0;
                            for (var P = 67108863 & f, W = Math.min(R, c.length - 1), $ = Math.max(0, R - s.length + 1); $ <= W; $++) {
                                var Z = R - $,
                                    tt = (0 | s.words[Z]) * (0 | c.words[$]),
                                    te = 67108863 & tt;
                                I = I + (tt / 67108864 | 0) | 0, P = 67108863 & (te = te + P | 0), B += (I = I + (te >>> 26) | 0) >>> 26, I &= 67108863
                            }
                            l.words[R] = P, f = I, I = B
                        }
                        return 0 !== f ? l.words[R] = f : l.length--, l.strip()
                    }(this, s, c) : jumboMulTo(this, s, c)
                }, FFTM.prototype.makeRBT = function(s) {
                    for (var c = Array(s), l = BN.prototype._countBits(s) - 1, f = 0; f < s; f++) c[f] = this.revBin(f, l, s);
                    return c
                }, FFTM.prototype.revBin = function(s, c, l) {
                    if (0 === s || s === l - 1) return s;
                    for (var f = 0, B = 0; B < c; B++) f |= (1 & s) << c - B - 1, s >>= 1;
                    return f
                }, FFTM.prototype.permute = function(s, c, l, f, B, R) {
                    for (var I = 0; I < R; I++) f[I] = c[s[I]], B[I] = l[s[I]]
                }, FFTM.prototype.transform = function(s, c, l, f, B, R) {
                    this.permute(R, s, c, l, f, B);
                    for (var I = 1; I < B; I <<= 1)
                        for (var P = I << 1, W = Math.cos(2 * Math.PI / P), $ = Math.sin(2 * Math.PI / P), Z = 0; Z < B; Z += P)
                            for (var tt = W, te = $, tn = 0; tn < I; tn++) {
                                var tr = l[Z + tn],
                                    to = f[Z + tn],
                                    ti = l[Z + tn + I],
                                    ts = f[Z + tn + I],
                                    ta = tt * ti - te * ts;
                                ts = tt * ts + te * ti, ti = ta, l[Z + tn] = tr + ti, f[Z + tn] = to + ts, l[Z + tn + I] = tr - ti, f[Z + tn + I] = to - ts, tn !== P && (ta = W * tt - $ * te, te = W * te + $ * tt, tt = ta)
                            }
                }, FFTM.prototype.guessLen13b = function(s, c) {
                    var l = 1 | Math.max(c, s),
                        f = 1 & l,
                        B = 0;
                    for (l = l / 2 | 0; l; l >>>= 1) B++;
                    return 1 << B + 1 + f
                }, FFTM.prototype.conjugate = function(s, c, l) {
                    if (!(l <= 1))
                        for (var f = 0; f < l / 2; f++) {
                            var B = s[f];
                            s[f] = s[l - f - 1], s[l - f - 1] = B, B = c[f], c[f] = -c[l - f - 1], c[l - f - 1] = -B
                        }
                }, FFTM.prototype.normalize13b = function(s, c) {
                    for (var l = 0, f = 0; f < c / 2; f++) {
                        var B = 8192 * Math.round(s[2 * f + 1] / c) + Math.round(s[2 * f] / c) + l;
                        s[f] = 67108863 & B, l = B < 67108864 ? 0 : B / 67108864 | 0
                    }
                    return s
                }, FFTM.prototype.convert13b = function(s, c, l, f) {
                    for (var B = 0, R = 0; R < c; R++) B += 0 | s[R], l[2 * R] = 8191 & B, B >>>= 13, l[2 * R + 1] = 8191 & B, B >>>= 13;
                    for (R = 2 * c; R < f; ++R) l[R] = 0;
                    assert(0 === B), assert((-8192 & B) == 0)
                }, FFTM.prototype.stub = function(s) {
                    for (var c = Array(s), l = 0; l < s; l++) c[l] = 0;
                    return c
                }, FFTM.prototype.mulp = function(s, c, l) {
                    var f = 2 * this.guessLen13b(s.length, c.length),
                        B = this.makeRBT(f),
                        R = this.stub(f),
                        I = Array(f),
                        P = Array(f),
                        W = Array(f),
                        $ = Array(f),
                        Z = Array(f),
                        tt = Array(f),
                        te = l.words;
                    te.length = f, this.convert13b(s.words, s.length, I, f), this.convert13b(c.words, c.length, $, f), this.transform(I, R, P, W, f, B), this.transform($, R, Z, tt, f, B);
                    for (var tn = 0; tn < f; tn++) {
                        var tr = P[tn] * Z[tn] - W[tn] * tt[tn];
                        W[tn] = P[tn] * tt[tn] + W[tn] * Z[tn], P[tn] = tr
                    }
                    return this.conjugate(P, W, f), this.transform(P, W, te, R, f, B), this.conjugate(te, R, f), this.normalize13b(te, f), l.negative = s.negative ^ c.negative, l.length = s.length + c.length, l.strip()
                }, BN.prototype.mul = function(s) {
                    var c = new BN(null);
                    return c.words = Array(this.length + s.length), this.mulTo(s, c)
                }, BN.prototype.mulf = function(s) {
                    var c = new BN(null);
                    return c.words = Array(this.length + s.length), jumboMulTo(this, s, c)
                }, BN.prototype.imul = function(s) {
                    return this.clone().mulTo(s, this)
                }, BN.prototype.imuln = function(s) {
                    assert("number" == typeof s), assert(s < 67108864);
                    for (var c = 0, l = 0; l < this.length; l++) {
                        var f = (0 | this.words[l]) * s,
                            B = (67108863 & f) + (67108863 & c);
                        c >>= 26, c += (f / 67108864 | 0) + (B >>> 26), this.words[l] = 67108863 & B
                    }
                    return 0 !== c && (this.words[l] = c, this.length++), this
                }, BN.prototype.muln = function(s) {
                    return this.clone().imuln(s)
                }, BN.prototype.sqr = function() {
                    return this.mul(this)
                }, BN.prototype.isqr = function() {
                    return this.imul(this.clone())
                }, BN.prototype.pow = function(s) {
                    var c = function(s) {
                        for (var c = Array(s.bitLength()), l = 0; l < c.length; l++) {
                            var f = l / 26 | 0,
                                B = l % 26;
                            c[l] = (s.words[f] & 1 << B) >>> B
                        }
                        return c
                    }(s);
                    if (0 === c.length) return new BN(1);
                    for (var l = this, f = 0; f < c.length && 0 === c[f]; f++, l = l.sqr());
                    if (++f < c.length)
                        for (var B = l.sqr(); f < c.length; f++, B = B.sqr()) 0 !== c[f] && (l = l.mul(B));
                    return l
                }, BN.prototype.iushln = function(s) {
                    assert("number" == typeof s && s >= 0);
                    var c, l = s % 26,
                        f = (s - l) / 26,
                        B = 67108863 >>> 26 - l << 26 - l;
                    if (0 !== l) {
                        var R = 0;
                        for (c = 0; c < this.length; c++) {
                            var I = this.words[c] & B,
                                P = (0 | this.words[c]) - I << l;
                            this.words[c] = P | R, R = I >>> 26 - l
                        }
                        R && (this.words[c] = R, this.length++)
                    }
                    if (0 !== f) {
                        for (c = this.length - 1; c >= 0; c--) this.words[c + f] = this.words[c];
                        for (c = 0; c < f; c++) this.words[c] = 0;
                        this.length += f
                    }
                    return this.strip()
                }, BN.prototype.ishln = function(s) {
                    return assert(0 === this.negative), this.iushln(s)
                }, BN.prototype.iushrn = function(s, c, l) {
                    assert("number" == typeof s && s >= 0), f = c ? (c - c % 26) / 26 : 0;
                    var f, B = s % 26,
                        R = Math.min((s - B) / 26, this.length),
                        I = 67108863 ^ 67108863 >>> B << B;
                    if (f -= R, f = Math.max(0, f), l) {
                        for (var P = 0; P < R; P++) l.words[P] = this.words[P];
                        l.length = R
                    }
                    if (0 === R);
                    else if (this.length > R)
                        for (this.length -= R, P = 0; P < this.length; P++) this.words[P] = this.words[P + R];
                    else this.words[0] = 0, this.length = 1;
                    var W = 0;
                    for (P = this.length - 1; P >= 0 && (0 !== W || P >= f); P--) {
                        var $ = 0 | this.words[P];
                        this.words[P] = W << 26 - B | $ >>> B, W = $ & I
                    }
                    return l && 0 !== W && (l.words[l.length++] = W), 0 === this.length && (this.words[0] = 0, this.length = 1), this.strip()
                }, BN.prototype.ishrn = function(s, c, l) {
                    return assert(0 === this.negative), this.iushrn(s, c, l)
                }, BN.prototype.shln = function(s) {
                    return this.clone().ishln(s)
                }, BN.prototype.ushln = function(s) {
                    return this.clone().iushln(s)
                }, BN.prototype.shrn = function(s) {
                    return this.clone().ishrn(s)
                }, BN.prototype.ushrn = function(s) {
                    return this.clone().iushrn(s)
                }, BN.prototype.testn = function(s) {
                    assert("number" == typeof s && s >= 0);
                    var c = s % 26,
                        l = (s - c) / 26;
                    return !(this.length <= l) && !!(this.words[l] & 1 << c)
                }, BN.prototype.imaskn = function(s) {
                    assert("number" == typeof s && s >= 0);
                    var c = s % 26,
                        l = (s - c) / 26;
                    return (assert(0 === this.negative, "imaskn works only with positive numbers"), this.length <= l) ? this : (0 !== c && l++, this.length = Math.min(l, this.length), 0 !== c && (this.words[this.length - 1] &= 67108863 ^ 67108863 >>> c << c), this.strip())
                }, BN.prototype.maskn = function(s) {
                    return this.clone().imaskn(s)
                }, BN.prototype.iaddn = function(s) {
                    return (assert("number" == typeof s), assert(s < 67108864), s < 0) ? this.isubn(-s) : 0 !== this.negative ? (1 === this.length && (0 | this.words[0]) < s ? (this.words[0] = s - (0 | this.words[0]), this.negative = 0) : (this.negative = 0, this.isubn(s), this.negative = 1), this) : this._iaddn(s)
                }, BN.prototype._iaddn = function(s) {
                    this.words[0] += s;
                    for (var c = 0; c < this.length && this.words[c] >= 67108864; c++) this.words[c] -= 67108864, c === this.length - 1 ? this.words[c + 1] = 1 : this.words[c + 1]++;
                    return this.length = Math.max(this.length, c + 1), this
                }, BN.prototype.isubn = function(s) {
                    if (assert("number" == typeof s), assert(s < 67108864), s < 0) return this.iaddn(-s);
                    if (0 !== this.negative) return this.negative = 0, this.iaddn(s), this.negative = 1, this;
                    if (this.words[0] -= s, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
                    else
                        for (var c = 0; c < this.length && this.words[c] < 0; c++) this.words[c] += 67108864, this.words[c + 1] -= 1;
                    return this.strip()
                }, BN.prototype.addn = function(s) {
                    return this.clone().iaddn(s)
                }, BN.prototype.subn = function(s) {
                    return this.clone().isubn(s)
                }, BN.prototype.iabs = function() {
                    return this.negative = 0, this
                }, BN.prototype.abs = function() {
                    return this.clone().iabs()
                }, BN.prototype._ishlnsubmul = function(s, c, l) {
                    var f, B, R = s.length + l;
                    this._expand(R);
                    var I = 0;
                    for (f = 0; f < s.length; f++) {
                        B = (0 | this.words[f + l]) + I;
                        var P = (0 | s.words[f]) * c;
                        B -= 67108863 & P, I = (B >> 26) - (P / 67108864 | 0), this.words[f + l] = 67108863 & B
                    }
                    for (; f < this.length - l; f++) I = (B = (0 | this.words[f + l]) + I) >> 26, this.words[f + l] = 67108863 & B;
                    if (0 === I) return this.strip();
                    for (assert(-1 === I), I = 0, f = 0; f < this.length; f++) I = (B = -(0 | this.words[f]) + I) >> 26, this.words[f] = 67108863 & B;
                    return this.negative = 1, this.strip()
                }, BN.prototype._wordDiv = function(s, c) {
                    var l, f = this.length - s.length,
                        B = this.clone(),
                        R = s,
                        I = 0 | R.words[R.length - 1];
                    0 != (f = 26 - this._countBits(I)) && (R = R.ushln(f), B.iushln(f), I = 0 | R.words[R.length - 1]);
                    var P = B.length - R.length;
                    if ("mod" !== c) {
                        (l = new BN(null)).length = P + 1, l.words = Array(l.length);
                        for (var W = 0; W < l.length; W++) l.words[W] = 0
                    }
                    var $ = B.clone()._ishlnsubmul(R, 1, P);
                    0 === $.negative && (B = $, l && (l.words[P] = 1));
                    for (var Z = P - 1; Z >= 0; Z--) {
                        var tt = (0 | B.words[R.length + Z]) * 67108864 + (0 | B.words[R.length + Z - 1]);
                        for (tt = Math.min(tt / I | 0, 67108863), B._ishlnsubmul(R, tt, Z); 0 !== B.negative;) tt--, B.negative = 0, B._ishlnsubmul(R, 1, Z), B.isZero() || (B.negative ^= 1);
                        l && (l.words[Z] = tt)
                    }
                    return l && l.strip(), B.strip(), "div" !== c && 0 !== f && B.iushrn(f), {
                        div: l || null,
                        mod: B
                    }
                }, BN.prototype.divmod = function(s, c, l) {
                    var f, B, R;
                    return (assert(!s.isZero()), this.isZero()) ? {
                        div: new BN(0),
                        mod: new BN(0)
                    } : 0 !== this.negative && 0 === s.negative ? (R = this.neg().divmod(s, c), "mod" !== c && (f = R.div.neg()), "div" !== c && (B = R.mod.neg(), l && 0 !== B.negative && B.iadd(s)), {
                        div: f,
                        mod: B
                    }) : 0 === this.negative && 0 !== s.negative ? (R = this.divmod(s.neg(), c), "mod" !== c && (f = R.div.neg()), {
                        div: f,
                        mod: R.mod
                    }) : (this.negative & s.negative) != 0 ? (R = this.neg().divmod(s.neg(), c), "div" !== c && (B = R.mod.neg(), l && 0 !== B.negative && B.isub(s)), {
                        div: R.div,
                        mod: B
                    }) : s.length > this.length || 0 > this.cmp(s) ? {
                        div: new BN(0),
                        mod: this
                    } : 1 === s.length ? "div" === c ? {
                        div: this.divn(s.words[0]),
                        mod: null
                    } : "mod" === c ? {
                        div: null,
                        mod: new BN(this.modn(s.words[0]))
                    } : {
                        div: this.divn(s.words[0]),
                        mod: new BN(this.modn(s.words[0]))
                    } : this._wordDiv(s, c)
                }, BN.prototype.div = function(s) {
                    return this.divmod(s, "div", !1).div
                }, BN.prototype.mod = function(s) {
                    return this.divmod(s, "mod", !1).mod
                }, BN.prototype.umod = function(s) {
                    return this.divmod(s, "mod", !0).mod
                }, BN.prototype.divRound = function(s) {
                    var c = this.divmod(s);
                    if (c.mod.isZero()) return c.div;
                    var l = 0 !== c.div.negative ? c.mod.isub(s) : c.mod,
                        f = s.ushrn(1),
                        B = s.andln(1),
                        R = l.cmp(f);
                    return R < 0 || 1 === B && 0 === R ? c.div : 0 !== c.div.negative ? c.div.isubn(1) : c.div.iaddn(1)
                }, BN.prototype.modn = function(s) {
                    assert(s <= 67108863);
                    for (var c = 67108864 % s, l = 0, f = this.length - 1; f >= 0; f--) l = (c * l + (0 | this.words[f])) % s;
                    return l
                }, BN.prototype.idivn = function(s) {
                    assert(s <= 67108863);
                    for (var c = 0, l = this.length - 1; l >= 0; l--) {
                        var f = (0 | this.words[l]) + 67108864 * c;
                        this.words[l] = f / s | 0, c = f % s
                    }
                    return this.strip()
                }, BN.prototype.divn = function(s) {
                    return this.clone().idivn(s)
                }, BN.prototype.egcd = function(s) {
                    assert(0 === s.negative), assert(!s.isZero());
                    var c = this,
                        l = s.clone();
                    c = 0 !== c.negative ? c.umod(s) : c.clone();
                    for (var f = new BN(1), B = new BN(0), R = new BN(0), I = new BN(1), P = 0; c.isEven() && l.isEven();) c.iushrn(1), l.iushrn(1), ++P;
                    for (var W = l.clone(), $ = c.clone(); !c.isZero();) {
                        for (var Z = 0, tt = 1;
                            (c.words[0] & tt) == 0 && Z < 26; ++Z, tt <<= 1);
                        if (Z > 0)
                            for (c.iushrn(Z); Z-- > 0;)(f.isOdd() || B.isOdd()) && (f.iadd(W), B.isub($)), f.iushrn(1), B.iushrn(1);
                        for (var te = 0, tn = 1;
                            (l.words[0] & tn) == 0 && te < 26; ++te, tn <<= 1);
                        if (te > 0)
                            for (l.iushrn(te); te-- > 0;)(R.isOdd() || I.isOdd()) && (R.iadd(W), I.isub($)), R.iushrn(1), I.iushrn(1);
                        c.cmp(l) >= 0 ? (c.isub(l), f.isub(R), B.isub(I)) : (l.isub(c), R.isub(f), I.isub(B))
                    }
                    return {
                        a: R,
                        b: I,
                        gcd: l.iushln(P)
                    }
                }, BN.prototype._invmp = function(s) {
                    assert(0 === s.negative), assert(!s.isZero());
                    var c, l = this,
                        f = s.clone();
                    l = 0 !== l.negative ? l.umod(s) : l.clone();
                    for (var B = new BN(1), R = new BN(0), I = f.clone(); l.cmpn(1) > 0 && f.cmpn(1) > 0;) {
                        for (var P = 0, W = 1;
                            (l.words[0] & W) == 0 && P < 26; ++P, W <<= 1);
                        if (P > 0)
                            for (l.iushrn(P); P-- > 0;) B.isOdd() && B.iadd(I), B.iushrn(1);
                        for (var $ = 0, Z = 1;
                            (f.words[0] & Z) == 0 && $ < 26; ++$, Z <<= 1);
                        if ($ > 0)
                            for (f.iushrn($); $-- > 0;) R.isOdd() && R.iadd(I), R.iushrn(1);
                        l.cmp(f) >= 0 ? (l.isub(f), B.isub(R)) : (f.isub(l), R.isub(B))
                    }
                    return 0 > (c = 0 === l.cmpn(1) ? B : R).cmpn(0) && c.iadd(s), c
                }, BN.prototype.gcd = function(s) {
                    if (this.isZero()) return s.abs();
                    if (s.isZero()) return this.abs();
                    var c = this.clone(),
                        l = s.clone();
                    c.negative = 0, l.negative = 0;
                    for (var f = 0; c.isEven() && l.isEven(); f++) c.iushrn(1), l.iushrn(1);
                    for (;;) {
                        for (; c.isEven();) c.iushrn(1);
                        for (; l.isEven();) l.iushrn(1);
                        var B = c.cmp(l);
                        if (B < 0) {
                            var R = c;
                            c = l, l = R
                        } else if (0 === B || 0 === l.cmpn(1)) break;
                        c.isub(l)
                    }
                    return l.iushln(f)
                }, BN.prototype.invm = function(s) {
                    return this.egcd(s).a.umod(s)
                }, BN.prototype.isEven = function() {
                    return (1 & this.words[0]) == 0
                }, BN.prototype.isOdd = function() {
                    return (1 & this.words[0]) == 1
                }, BN.prototype.andln = function(s) {
                    return this.words[0] & s
                }, BN.prototype.bincn = function(s) {
                    assert("number" == typeof s);
                    var c = s % 26,
                        l = (s - c) / 26,
                        f = 1 << c;
                    if (this.length <= l) return this._expand(l + 1), this.words[l] |= f, this;
                    for (var B = f, R = l; 0 !== B && R < this.length; R++) {
                        var I = 0 | this.words[R];
                        I += B, B = I >>> 26, I &= 67108863, this.words[R] = I
                    }
                    return 0 !== B && (this.words[R] = B, this.length++), this
                }, BN.prototype.isZero = function() {
                    return 1 === this.length && 0 === this.words[0]
                }, BN.prototype.cmpn = function(s) {
                    var c, l = s < 0;
                    if (0 !== this.negative && !l) return -1;
                    if (0 === this.negative && l) return 1;
                    if (this.strip(), this.length > 1) c = 1;
                    else {
                        l && (s = -s), assert(s <= 67108863, "Number is too big");
                        var f = 0 | this.words[0];
                        c = f === s ? 0 : f < s ? -1 : 1
                    }
                    return 0 !== this.negative ? 0 | -c : c
                }, BN.prototype.cmp = function(s) {
                    if (0 !== this.negative && 0 === s.negative) return -1;
                    if (0 === this.negative && 0 !== s.negative) return 1;
                    var c = this.ucmp(s);
                    return 0 !== this.negative ? 0 | -c : c
                }, BN.prototype.ucmp = function(s) {
                    if (this.length > s.length) return 1;
                    if (this.length < s.length) return -1;
                    for (var c = 0, l = this.length - 1; l >= 0; l--) {
                        var f = 0 | this.words[l],
                            B = 0 | s.words[l];
                        if (f !== B) {
                            f < B ? c = -1 : f > B && (c = 1);
                            break
                        }
                    }
                    return c
                }, BN.prototype.gtn = function(s) {
                    return 1 === this.cmpn(s)
                }, BN.prototype.gt = function(s) {
                    return 1 === this.cmp(s)
                }, BN.prototype.gten = function(s) {
                    return this.cmpn(s) >= 0
                }, BN.prototype.gte = function(s) {
                    return this.cmp(s) >= 0
                }, BN.prototype.ltn = function(s) {
                    return -1 === this.cmpn(s)
                }, BN.prototype.lt = function(s) {
                    return -1 === this.cmp(s)
                }, BN.prototype.lten = function(s) {
                    return 0 >= this.cmpn(s)
                }, BN.prototype.lte = function(s) {
                    return 0 >= this.cmp(s)
                }, BN.prototype.eqn = function(s) {
                    return 0 === this.cmpn(s)
                }, BN.prototype.eq = function(s) {
                    return 0 === this.cmp(s)
                }, BN.red = function(s) {
                    return new Red(s)
                }, BN.prototype.toRed = function(s) {
                    return assert(!this.red, "Already a number in reduction context"), assert(0 === this.negative, "red works only with positives"), s.convertTo(this)._forceRed(s)
                }, BN.prototype.fromRed = function() {
                    return assert(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
                }, BN.prototype._forceRed = function(s) {
                    return this.red = s, this
                }, BN.prototype.forceRed = function(s) {
                    return assert(!this.red, "Already a number in reduction context"), this._forceRed(s)
                }, BN.prototype.redAdd = function(s) {
                    return assert(this.red, "redAdd works only with red numbers"), this.red.add(this, s)
                }, BN.prototype.redIAdd = function(s) {
                    return assert(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, s)
                }, BN.prototype.redSub = function(s) {
                    return assert(this.red, "redSub works only with red numbers"), this.red.sub(this, s)
                }, BN.prototype.redISub = function(s) {
                    return assert(this.red, "redISub works only with red numbers"), this.red.isub(this, s)
                }, BN.prototype.redShl = function(s) {
                    return assert(this.red, "redShl works only with red numbers"), this.red.shl(this, s)
                }, BN.prototype.redMul = function(s) {
                    return assert(this.red, "redMul works only with red numbers"), this.red._verify2(this, s), this.red.mul(this, s)
                }, BN.prototype.redIMul = function(s) {
                    return assert(this.red, "redMul works only with red numbers"), this.red._verify2(this, s), this.red.imul(this, s)
                }, BN.prototype.redSqr = function() {
                    return assert(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
                }, BN.prototype.redISqr = function() {
                    return assert(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
                }, BN.prototype.redSqrt = function() {
                    return assert(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
                }, BN.prototype.redInvm = function() {
                    return assert(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
                }, BN.prototype.redNeg = function() {
                    return assert(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
                }, BN.prototype.redPow = function(s) {
                    return assert(this.red && !s.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, s)
                };
                var P = {
                    k256: null,
                    p224: null,
                    p192: null,
                    p25519: null
                };

                function MPrime(s, c) {
                    this.name = s, this.p = new BN(c, 16), this.n = this.p.bitLength(), this.k = new BN(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
                }

                function K256() {
                    MPrime.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
                }

                function P224() {
                    MPrime.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
                }

                function P192() {
                    MPrime.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
                }

                function P25519() {
                    MPrime.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
                }

                function Red(s) {
                    if ("string" == typeof s) {
                        var c = BN._prime(s);
                        this.m = c.p, this.prime = c
                    } else assert(s.gtn(1), "modulus must be greater than 1"), this.m = s, this.prime = null
                }

                function Mont(s) {
                    Red.call(this, s), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new BN(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
                }
                MPrime.prototype._tmp = function() {
                    var s = new BN(null);
                    return s.words = Array(Math.ceil(this.n / 13)), s
                }, MPrime.prototype.ireduce = function(s) {
                    var c, l = s;
                    do this.split(l, this.tmp), c = (l = (l = this.imulK(l)).iadd(this.tmp)).bitLength(); while (c > this.n);
                    var f = c < this.n ? -1 : l.ucmp(this.p);
                    return 0 === f ? (l.words[0] = 0, l.length = 1) : f > 0 ? l.isub(this.p) : l.strip(), l
                }, MPrime.prototype.split = function(s, c) {
                    s.iushrn(this.n, 0, c)
                }, MPrime.prototype.imulK = function(s) {
                    return s.imul(this.k)
                }, inherits(K256, MPrime), K256.prototype.split = function(s, c) {
                    for (var l = Math.min(s.length, 9), f = 0; f < l; f++) c.words[f] = s.words[f];
                    if (c.length = l, s.length <= 9) {
                        s.words[0] = 0, s.length = 1;
                        return
                    }
                    var B = s.words[9];
                    for (f = 10, c.words[c.length++] = 4194303 & B; f < s.length; f++) {
                        var R = 0 | s.words[f];
                        s.words[f - 10] = (4194303 & R) << 4 | B >>> 22, B = R
                    }
                    B >>>= 22, s.words[f - 10] = B, 0 === B && s.length > 10 ? s.length -= 10 : s.length -= 9
                }, K256.prototype.imulK = function(s) {
                    s.words[s.length] = 0, s.words[s.length + 1] = 0, s.length += 2;
                    for (var c = 0, l = 0; l < s.length; l++) {
                        var f = 0 | s.words[l];
                        c += 977 * f, s.words[l] = 67108863 & c, c = 64 * f + (c / 67108864 | 0)
                    }
                    return 0 === s.words[s.length - 1] && (s.length--, 0 === s.words[s.length - 1] && s.length--), s
                }, inherits(P224, MPrime), inherits(P192, MPrime), inherits(P25519, MPrime), P25519.prototype.imulK = function(s) {
                    for (var c = 0, l = 0; l < s.length; l++) {
                        var f = (0 | s.words[l]) * 19 + c,
                            B = 67108863 & f;
                        f >>>= 26, s.words[l] = B, c = f
                    }
                    return 0 !== c && (s.words[s.length++] = c), s
                }, BN._prime = function(s) {
                    var c;
                    if (P[s]) return P[s];
                    if ("k256" === s) c = new K256;
                    else if ("p224" === s) c = new P224;
                    else if ("p192" === s) c = new P192;
                    else if ("p25519" === s) c = new P25519;
                    else throw Error("Unknown prime " + s);
                    return P[s] = c, c
                }, Red.prototype._verify1 = function(s) {
                    assert(0 === s.negative, "red works only with positives"), assert(s.red, "red works only with red numbers")
                }, Red.prototype._verify2 = function(s, c) {
                    assert((s.negative | c.negative) == 0, "red works only with positives"), assert(s.red && s.red === c.red, "red works only with red numbers")
                }, Red.prototype.imod = function(s) {
                    return this.prime ? this.prime.ireduce(s)._forceRed(this) : s.umod(this.m)._forceRed(this)
                }, Red.prototype.neg = function(s) {
                    return s.isZero() ? s.clone() : this.m.sub(s)._forceRed(this)
                }, Red.prototype.add = function(s, c) {
                    this._verify2(s, c);
                    var l = s.add(c);
                    return l.cmp(this.m) >= 0 && l.isub(this.m), l._forceRed(this)
                }, Red.prototype.iadd = function(s, c) {
                    this._verify2(s, c);
                    var l = s.iadd(c);
                    return l.cmp(this.m) >= 0 && l.isub(this.m), l
                }, Red.prototype.sub = function(s, c) {
                    this._verify2(s, c);
                    var l = s.sub(c);
                    return 0 > l.cmpn(0) && l.iadd(this.m), l._forceRed(this)
                }, Red.prototype.isub = function(s, c) {
                    this._verify2(s, c);
                    var l = s.isub(c);
                    return 0 > l.cmpn(0) && l.iadd(this.m), l
                }, Red.prototype.shl = function(s, c) {
                    return this._verify1(s), this.imod(s.ushln(c))
                }, Red.prototype.imul = function(s, c) {
                    return this._verify2(s, c), this.imod(s.imul(c))
                }, Red.prototype.mul = function(s, c) {
                    return this._verify2(s, c), this.imod(s.mul(c))
                }, Red.prototype.isqr = function(s) {
                    return this.imul(s, s.clone())
                }, Red.prototype.sqr = function(s) {
                    return this.mul(s, s)
                }, Red.prototype.sqrt = function(s) {
                    if (s.isZero()) return s.clone();
                    var c = this.m.andln(3);
                    if (assert(c % 2 == 1), 3 === c) {
                        var l = this.m.add(new BN(1)).iushrn(2);
                        return this.pow(s, l)
                    }
                    for (var f = this.m.subn(1), B = 0; !f.isZero() && 0 === f.andln(1);) B++, f.iushrn(1);
                    assert(!f.isZero());
                    var R = new BN(1).toRed(this),
                        I = R.redNeg(),
                        P = this.m.subn(1).iushrn(1),
                        W = this.m.bitLength();
                    for (W = new BN(2 * W * W).toRed(this); 0 !== this.pow(W, P).cmp(I);) W.redIAdd(I);
                    for (var $ = this.pow(W, f), Z = this.pow(s, f.addn(1).iushrn(1)), tt = this.pow(s, f), te = B; 0 !== tt.cmp(R);) {
                        for (var tn = tt, tr = 0; 0 !== tn.cmp(R); tr++) tn = tn.redSqr();
                        assert(tr < te);
                        var to = this.pow($, new BN(1).iushln(te - tr - 1));
                        Z = Z.redMul(to), $ = to.redSqr(), tt = tt.redMul($), te = tr
                    }
                    return Z
                }, Red.prototype.invm = function(s) {
                    var c = s._invmp(this.m);
                    return 0 !== c.negative ? (c.negative = 0, this.imod(c).redNeg()) : this.imod(c)
                }, Red.prototype.pow = function(s, c) {
                    if (c.isZero()) return new BN(1).toRed(this);
                    if (0 === c.cmpn(1)) return s.clone();
                    var l = Array(16);
                    l[0] = new BN(1).toRed(this), l[1] = s;
                    for (var f = 2; f < l.length; f++) l[f] = this.mul(l[f - 1], s);
                    var B = l[0],
                        R = 0,
                        I = 0,
                        P = c.bitLength() % 26;
                    for (0 === P && (P = 26), f = c.length - 1; f >= 0; f--) {
                        for (var W = c.words[f], $ = P - 1; $ >= 0; $--) {
                            var Z = W >> $ & 1;
                            if (B !== l[0] && (B = this.sqr(B)), 0 === Z && 0 === R) {
                                I = 0;
                                continue
                            }
                            R <<= 1, R |= Z, (4 == ++I || 0 === f && 0 === $) && (B = this.mul(B, l[R]), I = 0, R = 0)
                        }
                        P = 26
                    }
                    return B
                }, Red.prototype.convertTo = function(s) {
                    var c = s.umod(this.m);
                    return c === s ? c.clone() : c
                }, Red.prototype.convertFrom = function(s) {
                    var c = s.clone();
                    return c.red = null, c
                }, BN.mont = function(s) {
                    return new Mont(s)
                }, inherits(Mont, Red), Mont.prototype.convertTo = function(s) {
                    return this.imod(s.ushln(this.shift))
                }, Mont.prototype.convertFrom = function(s) {
                    var c = this.imod(s.mul(this.rinv));
                    return c.red = null, c
                }, Mont.prototype.imul = function(s, c) {
                    if (s.isZero() || c.isZero()) return s.words[0] = 0, s.length = 1, s;
                    var l = s.imul(c),
                        f = l.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                        B = l.isub(f).iushrn(this.shift),
                        R = B;
                    return B.cmp(this.m) >= 0 ? R = B.isub(this.m) : 0 > B.cmpn(0) && (R = B.iadd(this.m)), R._forceRed(this)
                }, Mont.prototype.mul = function(s, c) {
                    if (s.isZero() || c.isZero()) return new BN(0)._forceRed(this);
                    var l = s.mul(c),
                        f = l.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                        B = l.isub(f).iushrn(this.shift),
                        R = B;
                    return B.cmp(this.m) >= 0 ? R = B.isub(this.m) : 0 > B.cmpn(0) && (R = B.iadd(this.m)), R._forceRed(this)
                }, Mont.prototype.invm = function(s) {
                    return this.imod(s._invmp(this.m).mul(this.r2))._forceRed(this)
                }
            }(s = l.nmd(s), this)
        },
        39397: function(s, c, l) {
            "use strict";
            /*!
             * The buffer module from node.js, for the browser.
             *
             * @author   Feross Aboukhadijeh <https://feross.org>
             * @license  MIT
             */
            var f = l(61699),
                B = l(94402),
                R = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;

            function createBuffer(s) {
                if (s > 2147483647) throw RangeError('The value "' + s + '" is invalid for option "size"');
                var c = new Uint8Array(s);
                return Object.setPrototypeOf(c, Buffer.prototype), c
            }

            function Buffer(s, c, l) {
                if ("number" == typeof s) {
                    if ("string" == typeof c) throw TypeError('The "string" argument must be of type string. Received type number');
                    return allocUnsafe(s)
                }
                return from(s, c, l)
            }

            function from(s, c, l) {
                if ("string" == typeof s) return function(s, c) {
                    if (("string" != typeof c || "" === c) && (c = "utf8"), !Buffer.isEncoding(c)) throw TypeError("Unknown encoding: " + c);
                    var l = 0 | byteLength(s, c),
                        f = createBuffer(l),
                        B = f.write(s, c);
                    return B !== l && (f = f.slice(0, B)), f
                }(s, c);
                if (ArrayBuffer.isView(s)) return function(s) {
                    if (isInstance(s, Uint8Array)) {
                        var c = new Uint8Array(s);
                        return fromArrayBuffer(c.buffer, c.byteOffset, c.byteLength)
                    }
                    return fromArrayLike(s)
                }(s);
                if (null == s) throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof s);
                if (isInstance(s, ArrayBuffer) || s && isInstance(s.buffer, ArrayBuffer) || "undefined" != typeof SharedArrayBuffer && (isInstance(s, SharedArrayBuffer) || s && isInstance(s.buffer, SharedArrayBuffer))) return fromArrayBuffer(s, c, l);
                if ("number" == typeof s) throw TypeError('The "value" argument must not be of type number. Received type number');
                var f = s.valueOf && s.valueOf();
                if (null != f && f !== s) return Buffer.from(f, c, l);
                var B = function(s) {
                    if (Buffer.isBuffer(s)) {
                        var c, l = 0 | checked(s.length),
                            f = createBuffer(l);
                        return 0 === f.length || s.copy(f, 0, 0, l), f
                    }
                    return void 0 !== s.length ? "number" != typeof s.length || (c = s.length) != c ? createBuffer(0) : fromArrayLike(s) : "Buffer" === s.type && Array.isArray(s.data) ? fromArrayLike(s.data) : void 0
                }(s);
                if (B) return B;
                if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof s[Symbol.toPrimitive]) return Buffer.from(s[Symbol.toPrimitive]("string"), c, l);
                throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof s)
            }

            function assertSize(s) {
                if ("number" != typeof s) throw TypeError('"size" argument must be of type number');
                if (s < 0) throw RangeError('The value "' + s + '" is invalid for option "size"')
            }

            function allocUnsafe(s) {
                return assertSize(s), createBuffer(s < 0 ? 0 : 0 | checked(s))
            }

            function fromArrayLike(s) {
                for (var c = s.length < 0 ? 0 : 0 | checked(s.length), l = createBuffer(c), f = 0; f < c; f += 1) l[f] = 255 & s[f];
                return l
            }

            function fromArrayBuffer(s, c, l) {
                var f;
                if (c < 0 || s.byteLength < c) throw RangeError('"offset" is outside of buffer bounds');
                if (s.byteLength < c + (l || 0)) throw RangeError('"length" is outside of buffer bounds');
                return Object.setPrototypeOf(f = void 0 === c && void 0 === l ? new Uint8Array(s) : void 0 === l ? new Uint8Array(s, c) : new Uint8Array(s, c, l), Buffer.prototype), f
            }

            function checked(s) {
                if (s >= 2147483647) throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");
                return 0 | s
            }

            function byteLength(s, c) {
                if (Buffer.isBuffer(s)) return s.length;
                if (ArrayBuffer.isView(s) || isInstance(s, ArrayBuffer)) return s.byteLength;
                if ("string" != typeof s) throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof s);
                var l = s.length,
                    f = arguments.length > 2 && !0 === arguments[2];
                if (!f && 0 === l) return 0;
                for (var B = !1;;) switch (c) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return l;
                    case "utf8":
                    case "utf-8":
                        return utf8ToBytes(s).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return 2 * l;
                    case "hex":
                        return l >>> 1;
                    case "base64":
                        return base64ToBytes(s).length;
                    default:
                        if (B) return f ? -1 : utf8ToBytes(s).length;
                        c = ("" + c).toLowerCase(), B = !0
                }
            }

            function slowToString(s, c, l) {
                var B, R, I = !1;
                if ((void 0 === c || c < 0) && (c = 0), c > this.length || ((void 0 === l || l > this.length) && (l = this.length), l <= 0 || (l >>>= 0) <= (c >>>= 0))) return "";
                for (s || (s = "utf8");;) switch (s) {
                    case "hex":
                        return function(s, c, l) {
                            var f = s.length;
                            (!c || c < 0) && (c = 0), (!l || l < 0 || l > f) && (l = f);
                            for (var B = "", R = c; R < l; ++R) B += P[s[R]];
                            return B
                        }(this, c, l);
                    case "utf8":
                    case "utf-8":
                        return utf8Slice(this, c, l);
                    case "ascii":
                        return function(s, c, l) {
                            var f = "";
                            l = Math.min(s.length, l);
                            for (var B = c; B < l; ++B) f += String.fromCharCode(127 & s[B]);
                            return f
                        }(this, c, l);
                    case "latin1":
                    case "binary":
                        return function(s, c, l) {
                            var f = "";
                            l = Math.min(s.length, l);
                            for (var B = c; B < l; ++B) f += String.fromCharCode(s[B]);
                            return f
                        }(this, c, l);
                    case "base64":
                        return B = c, R = l, 0 === B && R === this.length ? f.fromByteArray(this) : f.fromByteArray(this.slice(B, R));
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return function(s, c, l) {
                            for (var f = s.slice(c, l), B = "", R = 0; R < f.length - 1; R += 2) B += String.fromCharCode(f[R] + 256 * f[R + 1]);
                            return B
                        }(this, c, l);
                    default:
                        if (I) throw TypeError("Unknown encoding: " + s);
                        s = (s + "").toLowerCase(), I = !0
                }
            }

            function swap(s, c, l) {
                var f = s[c];
                s[c] = s[l], s[l] = f
            }

            function bidirectionalIndexOf(s, c, l, f, B) {
                var R;
                if (0 === s.length) return -1;
                if ("string" == typeof l ? (f = l, l = 0) : l > 2147483647 ? l = 2147483647 : l < -2147483648 && (l = -2147483648), (R = l = +l) != R && (l = B ? 0 : s.length - 1), l < 0 && (l = s.length + l), l >= s.length) {
                    if (B) return -1;
                    l = s.length - 1
                } else if (l < 0) {
                    if (!B) return -1;
                    l = 0
                }
                if ("string" == typeof c && (c = Buffer.from(c, f)), Buffer.isBuffer(c)) return 0 === c.length ? -1 : arrayIndexOf(s, c, l, f, B);
                if ("number" == typeof c) return (c &= 255, "function" == typeof Uint8Array.prototype.indexOf) ? B ? Uint8Array.prototype.indexOf.call(s, c, l) : Uint8Array.prototype.lastIndexOf.call(s, c, l) : arrayIndexOf(s, [c], l, f, B);
                throw TypeError("val must be string, number or Buffer")
            }

            function arrayIndexOf(s, c, l, f, B) {
                var R, I = 1,
                    P = s.length,
                    W = c.length;
                if (void 0 !== f && ("ucs2" === (f = String(f).toLowerCase()) || "ucs-2" === f || "utf16le" === f || "utf-16le" === f)) {
                    if (s.length < 2 || c.length < 2) return -1;
                    I = 2, P /= 2, W /= 2, l /= 2
                }

                function read(s, c) {
                    return 1 === I ? s[c] : s.readUInt16BE(c * I)
                }
                if (B) {
                    var $ = -1;
                    for (R = l; R < P; R++)
                        if (read(s, R) === read(c, -1 === $ ? 0 : R - $)) {
                            if (-1 === $ && ($ = R), R - $ + 1 === W) return $ * I
                        } else -1 !== $ && (R -= R - $), $ = -1
                } else
                    for (l + W > P && (l = P - W), R = l; R >= 0; R--) {
                        for (var Z = !0, tt = 0; tt < W; tt++)
                            if (read(s, R + tt) !== read(c, tt)) {
                                Z = !1;
                                break
                            }
                        if (Z) return R
                    }
                return -1
            }

            function utf8Slice(s, c, l) {
                l = Math.min(s.length, l);
                for (var f = [], B = c; B < l;) {
                    var R, I, P, W, $ = s[B],
                        Z = null,
                        tt = $ > 239 ? 4 : $ > 223 ? 3 : $ > 191 ? 2 : 1;
                    if (B + tt <= l) switch (tt) {
                        case 1:
                            $ < 128 && (Z = $);
                            break;
                        case 2:
                            (192 & (R = s[B + 1])) == 128 && (W = (31 & $) << 6 | 63 & R) > 127 && (Z = W);
                            break;
                        case 3:
                            R = s[B + 1], I = s[B + 2], (192 & R) == 128 && (192 & I) == 128 && (W = (15 & $) << 12 | (63 & R) << 6 | 63 & I) > 2047 && (W < 55296 || W > 57343) && (Z = W);
                            break;
                        case 4:
                            R = s[B + 1], I = s[B + 2], P = s[B + 3], (192 & R) == 128 && (192 & I) == 128 && (192 & P) == 128 && (W = (15 & $) << 18 | (63 & R) << 12 | (63 & I) << 6 | 63 & P) > 65535 && W < 1114112 && (Z = W)
                    }
                    null === Z ? (Z = 65533, tt = 1) : Z > 65535 && (Z -= 65536, f.push(Z >>> 10 & 1023 | 55296), Z = 56320 | 1023 & Z), f.push(Z), B += tt
                }
                return function(s) {
                    var c = s.length;
                    if (c <= 4096) return String.fromCharCode.apply(String, s);
                    for (var l = "", f = 0; f < c;) l += String.fromCharCode.apply(String, s.slice(f, f += 4096));
                    return l
                }(f)
            }

            function checkOffset(s, c, l) {
                if (s % 1 != 0 || s < 0) throw RangeError("offset is not uint");
                if (s + c > l) throw RangeError("Trying to access beyond buffer length")
            }

            function checkInt(s, c, l, f, B, R) {
                if (!Buffer.isBuffer(s)) throw TypeError('"buffer" argument must be a Buffer instance');
                if (c > B || c < R) throw RangeError('"value" argument is out of bounds');
                if (l + f > s.length) throw RangeError("Index out of range")
            }

            function checkIEEE754(s, c, l, f, B, R) {
                if (l + f > s.length || l < 0) throw RangeError("Index out of range")
            }

            function writeFloat(s, c, l, f, R) {
                return c = +c, l >>>= 0, R || checkIEEE754(s, c, l, 4, 34028234663852886e22, -34028234663852886e22), B.write(s, c, l, f, 23, 4), l + 4
            }

            function writeDouble(s, c, l, f, R) {
                return c = +c, l >>>= 0, R || checkIEEE754(s, c, l, 8, 17976931348623157e292, -17976931348623157e292), B.write(s, c, l, f, 52, 8), l + 8
            }
            c.lW = Buffer, c.h2 = 50, Buffer.TYPED_ARRAY_SUPPORT = function() {
                try {
                    var s = new Uint8Array(1),
                        c = {
                            foo: function() {
                                return 42
                            }
                        };
                    return Object.setPrototypeOf(c, Uint8Array.prototype), Object.setPrototypeOf(s, c), 42 === s.foo()
                } catch (s) {
                    return !1
                }
            }(), Buffer.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(Buffer.prototype, "parent", {
                enumerable: !0,
                get: function() {
                    if (Buffer.isBuffer(this)) return this.buffer
                }
            }), Object.defineProperty(Buffer.prototype, "offset", {
                enumerable: !0,
                get: function() {
                    if (Buffer.isBuffer(this)) return this.byteOffset
                }
            }), Buffer.poolSize = 8192, Buffer.from = function(s, c, l) {
                return from(s, c, l)
            }, Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype), Object.setPrototypeOf(Buffer, Uint8Array), Buffer.alloc = function(s, c, l) {
                return (assertSize(s), s <= 0) ? createBuffer(s) : void 0 !== c ? "string" == typeof l ? createBuffer(s).fill(c, l) : createBuffer(s).fill(c) : createBuffer(s)
            }, Buffer.allocUnsafe = function(s) {
                return allocUnsafe(s)
            }, Buffer.allocUnsafeSlow = function(s) {
                return allocUnsafe(s)
            }, Buffer.isBuffer = function(s) {
                return null != s && !0 === s._isBuffer && s !== Buffer.prototype
            }, Buffer.compare = function(s, c) {
                if (isInstance(s, Uint8Array) && (s = Buffer.from(s, s.offset, s.byteLength)), isInstance(c, Uint8Array) && (c = Buffer.from(c, c.offset, c.byteLength)), !Buffer.isBuffer(s) || !Buffer.isBuffer(c)) throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                if (s === c) return 0;
                for (var l = s.length, f = c.length, B = 0, R = Math.min(l, f); B < R; ++B)
                    if (s[B] !== c[B]) {
                        l = s[B], f = c[B];
                        break
                    }
                return l < f ? -1 : f < l ? 1 : 0
            }, Buffer.isEncoding = function(s) {
                switch (String(s).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return !0;
                    default:
                        return !1
                }
            }, Buffer.concat = function(s, c) {
                if (!Array.isArray(s)) throw TypeError('"list" argument must be an Array of Buffers');
                if (0 === s.length) return Buffer.alloc(0);
                if (void 0 === c)
                    for (l = 0, c = 0; l < s.length; ++l) c += s[l].length;
                var l, f = Buffer.allocUnsafe(c),
                    B = 0;
                for (l = 0; l < s.length; ++l) {
                    var R = s[l];
                    if (isInstance(R, Uint8Array)) B + R.length > f.length ? Buffer.from(R).copy(f, B) : Uint8Array.prototype.set.call(f, R, B);
                    else if (Buffer.isBuffer(R)) R.copy(f, B);
                    else throw TypeError('"list" argument must be an Array of Buffers');
                    B += R.length
                }
                return f
            }, Buffer.byteLength = byteLength, Buffer.prototype._isBuffer = !0, Buffer.prototype.swap16 = function() {
                var s = this.length;
                if (s % 2 != 0) throw RangeError("Buffer size must be a multiple of 16-bits");
                for (var c = 0; c < s; c += 2) swap(this, c, c + 1);
                return this
            }, Buffer.prototype.swap32 = function() {
                var s = this.length;
                if (s % 4 != 0) throw RangeError("Buffer size must be a multiple of 32-bits");
                for (var c = 0; c < s; c += 4) swap(this, c, c + 3), swap(this, c + 1, c + 2);
                return this
            }, Buffer.prototype.swap64 = function() {
                var s = this.length;
                if (s % 8 != 0) throw RangeError("Buffer size must be a multiple of 64-bits");
                for (var c = 0; c < s; c += 8) swap(this, c, c + 7), swap(this, c + 1, c + 6), swap(this, c + 2, c + 5), swap(this, c + 3, c + 4);
                return this
            }, Buffer.prototype.toString = function() {
                var s = this.length;
                return 0 === s ? "" : 0 == arguments.length ? utf8Slice(this, 0, s) : slowToString.apply(this, arguments)
            }, Buffer.prototype.toLocaleString = Buffer.prototype.toString, Buffer.prototype.equals = function(s) {
                if (!Buffer.isBuffer(s)) throw TypeError("Argument must be a Buffer");
                return this === s || 0 === Buffer.compare(this, s)
            }, Buffer.prototype.inspect = function() {
                var s = "",
                    l = c.h2;
                return s = this.toString("hex", 0, l).replace(/(.{2})/g, "$1 ").trim(), this.length > l && (s += " ... "), "<Buffer " + s + ">"
            }, R && (Buffer.prototype[R] = Buffer.prototype.inspect), Buffer.prototype.compare = function(s, c, l, f, B) {
                if (isInstance(s, Uint8Array) && (s = Buffer.from(s, s.offset, s.byteLength)), !Buffer.isBuffer(s)) throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof s);
                if (void 0 === c && (c = 0), void 0 === l && (l = s ? s.length : 0), void 0 === f && (f = 0), void 0 === B && (B = this.length), c < 0 || l > s.length || f < 0 || B > this.length) throw RangeError("out of range index");
                if (f >= B && c >= l) return 0;
                if (f >= B) return -1;
                if (c >= l) return 1;
                if (c >>>= 0, l >>>= 0, f >>>= 0, B >>>= 0, this === s) return 0;
                for (var R = B - f, I = l - c, P = Math.min(R, I), W = this.slice(f, B), $ = s.slice(c, l), Z = 0; Z < P; ++Z)
                    if (W[Z] !== $[Z]) {
                        R = W[Z], I = $[Z];
                        break
                    }
                return R < I ? -1 : I < R ? 1 : 0
            }, Buffer.prototype.includes = function(s, c, l) {
                return -1 !== this.indexOf(s, c, l)
            }, Buffer.prototype.indexOf = function(s, c, l) {
                return bidirectionalIndexOf(this, s, c, l, !0)
            }, Buffer.prototype.lastIndexOf = function(s, c, l) {
                return bidirectionalIndexOf(this, s, c, l, !1)
            }, Buffer.prototype.write = function(s, c, l, f) {
                if (void 0 === c) f = "utf8", l = this.length, c = 0;
                else if (void 0 === l && "string" == typeof c) f = c, l = this.length, c = 0;
                else if (isFinite(c)) c >>>= 0, isFinite(l) ? (l >>>= 0, void 0 === f && (f = "utf8")) : (f = l, l = void 0);
                else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                var B, R, I, P, W, $, Z, tt, te = this.length - c;
                if ((void 0 === l || l > te) && (l = te), s.length > 0 && (l < 0 || c < 0) || c > this.length) throw RangeError("Attempt to write outside buffer bounds");
                f || (f = "utf8");
                for (var tn = !1;;) switch (f) {
                    case "hex":
                        return function(s, c, l, f) {
                            l = Number(l) || 0;
                            var B = s.length - l;
                            f ? (f = Number(f)) > B && (f = B) : f = B;
                            var R = c.length;
                            f > R / 2 && (f = R / 2);
                            for (var I = 0; I < f; ++I) {
                                var P = parseInt(c.substr(2 * I, 2), 16);
                                if (P != P) break;
                                s[l + I] = P
                            }
                            return I
                        }(this, s, c, l);
                    case "utf8":
                    case "utf-8":
                        return B = c, R = l, blitBuffer(utf8ToBytes(s, this.length - B), this, B, R);
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return I = c, P = l, blitBuffer(function(s) {
                            for (var c = [], l = 0; l < s.length; ++l) c.push(255 & s.charCodeAt(l));
                            return c
                        }(s), this, I, P);
                    case "base64":
                        return W = c, $ = l, blitBuffer(base64ToBytes(s), this, W, $);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return Z = c, tt = l, blitBuffer(function(s, c) {
                            for (var l, f, B = [], R = 0; R < s.length && !((c -= 2) < 0); ++R) f = (l = s.charCodeAt(R)) >> 8, B.push(l % 256), B.push(f);
                            return B
                        }(s, this.length - Z), this, Z, tt);
                    default:
                        if (tn) throw TypeError("Unknown encoding: " + f);
                        f = ("" + f).toLowerCase(), tn = !0
                }
            }, Buffer.prototype.toJSON = function() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                }
            }, Buffer.prototype.slice = function(s, c) {
                var l = this.length;
                s = ~~s, c = void 0 === c ? l : ~~c, s < 0 ? (s += l) < 0 && (s = 0) : s > l && (s = l), c < 0 ? (c += l) < 0 && (c = 0) : c > l && (c = l), c < s && (c = s);
                var f = this.subarray(s, c);
                return Object.setPrototypeOf(f, Buffer.prototype), f
            }, Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE = function(s, c, l) {
                s >>>= 0, c >>>= 0, l || checkOffset(s, c, this.length);
                for (var f = this[s], B = 1, R = 0; ++R < c && (B *= 256);) f += this[s + R] * B;
                return f
            }, Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE = function(s, c, l) {
                s >>>= 0, c >>>= 0, l || checkOffset(s, c, this.length);
                for (var f = this[s + --c], B = 1; c > 0 && (B *= 256);) f += this[s + --c] * B;
                return f
            }, Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 = function(s, c) {
                return s >>>= 0, c || checkOffset(s, 1, this.length), this[s]
            }, Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE = function(s, c) {
                return s >>>= 0, c || checkOffset(s, 2, this.length), this[s] | this[s + 1] << 8
            }, Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE = function(s, c) {
                return s >>>= 0, c || checkOffset(s, 2, this.length), this[s] << 8 | this[s + 1]
            }, Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE = function(s, c) {
                return s >>>= 0, c || checkOffset(s, 4, this.length), (this[s] | this[s + 1] << 8 | this[s + 2] << 16) + 16777216 * this[s + 3]
            }, Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE = function(s, c) {
                return s >>>= 0, c || checkOffset(s, 4, this.length), 16777216 * this[s] + (this[s + 1] << 16 | this[s + 2] << 8 | this[s + 3])
            }, Buffer.prototype.readIntLE = function(s, c, l) {
                s >>>= 0, c >>>= 0, l || checkOffset(s, c, this.length);
                for (var f = this[s], B = 1, R = 0; ++R < c && (B *= 256);) f += this[s + R] * B;
                return f >= (B *= 128) && (f -= Math.pow(2, 8 * c)), f
            }, Buffer.prototype.readIntBE = function(s, c, l) {
                s >>>= 0, c >>>= 0, l || checkOffset(s, c, this.length);
                for (var f = c, B = 1, R = this[s + --f]; f > 0 && (B *= 256);) R += this[s + --f] * B;
                return R >= (B *= 128) && (R -= Math.pow(2, 8 * c)), R
            }, Buffer.prototype.readInt8 = function(s, c) {
                return (s >>>= 0, c || checkOffset(s, 1, this.length), 128 & this[s]) ? -((255 - this[s] + 1) * 1) : this[s]
            }, Buffer.prototype.readInt16LE = function(s, c) {
                s >>>= 0, c || checkOffset(s, 2, this.length);
                var l = this[s] | this[s + 1] << 8;
                return 32768 & l ? 4294901760 | l : l
            }, Buffer.prototype.readInt16BE = function(s, c) {
                s >>>= 0, c || checkOffset(s, 2, this.length);
                var l = this[s + 1] | this[s] << 8;
                return 32768 & l ? 4294901760 | l : l
            }, Buffer.prototype.readInt32LE = function(s, c) {
                return s >>>= 0, c || checkOffset(s, 4, this.length), this[s] | this[s + 1] << 8 | this[s + 2] << 16 | this[s + 3] << 24
            }, Buffer.prototype.readInt32BE = function(s, c) {
                return s >>>= 0, c || checkOffset(s, 4, this.length), this[s] << 24 | this[s + 1] << 16 | this[s + 2] << 8 | this[s + 3]
            }, Buffer.prototype.readFloatLE = function(s, c) {
                return s >>>= 0, c || checkOffset(s, 4, this.length), B.read(this, s, !0, 23, 4)
            }, Buffer.prototype.readFloatBE = function(s, c) {
                return s >>>= 0, c || checkOffset(s, 4, this.length), B.read(this, s, !1, 23, 4)
            }, Buffer.prototype.readDoubleLE = function(s, c) {
                return s >>>= 0, c || checkOffset(s, 8, this.length), B.read(this, s, !0, 52, 8)
            }, Buffer.prototype.readDoubleBE = function(s, c) {
                return s >>>= 0, c || checkOffset(s, 8, this.length), B.read(this, s, !1, 52, 8)
            }, Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE = function(s, c, l, f) {
                if (s = +s, c >>>= 0, l >>>= 0, !f) {
                    var B = Math.pow(2, 8 * l) - 1;
                    checkInt(this, s, c, l, B, 0)
                }
                var R = 1,
                    I = 0;
                for (this[c] = 255 & s; ++I < l && (R *= 256);) this[c + I] = s / R & 255;
                return c + l
            }, Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE = function(s, c, l, f) {
                if (s = +s, c >>>= 0, l >>>= 0, !f) {
                    var B = Math.pow(2, 8 * l) - 1;
                    checkInt(this, s, c, l, B, 0)
                }
                var R = l - 1,
                    I = 1;
                for (this[c + R] = 255 & s; --R >= 0 && (I *= 256);) this[c + R] = s / I & 255;
                return c + l
            }, Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 = function(s, c, l) {
                return s = +s, c >>>= 0, l || checkInt(this, s, c, 1, 255, 0), this[c] = 255 & s, c + 1
            }, Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE = function(s, c, l) {
                return s = +s, c >>>= 0, l || checkInt(this, s, c, 2, 65535, 0), this[c] = 255 & s, this[c + 1] = s >>> 8, c + 2
            }, Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE = function(s, c, l) {
                return s = +s, c >>>= 0, l || checkInt(this, s, c, 2, 65535, 0), this[c] = s >>> 8, this[c + 1] = 255 & s, c + 2
            }, Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE = function(s, c, l) {
                return s = +s, c >>>= 0, l || checkInt(this, s, c, 4, 4294967295, 0), this[c + 3] = s >>> 24, this[c + 2] = s >>> 16, this[c + 1] = s >>> 8, this[c] = 255 & s, c + 4
            }, Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE = function(s, c, l) {
                return s = +s, c >>>= 0, l || checkInt(this, s, c, 4, 4294967295, 0), this[c] = s >>> 24, this[c + 1] = s >>> 16, this[c + 2] = s >>> 8, this[c + 3] = 255 & s, c + 4
            }, Buffer.prototype.writeIntLE = function(s, c, l, f) {
                if (s = +s, c >>>= 0, !f) {
                    var B = Math.pow(2, 8 * l - 1);
                    checkInt(this, s, c, l, B - 1, -B)
                }
                var R = 0,
                    I = 1,
                    P = 0;
                for (this[c] = 255 & s; ++R < l && (I *= 256);) s < 0 && 0 === P && 0 !== this[c + R - 1] && (P = 1), this[c + R] = (s / I >> 0) - P & 255;
                return c + l
            }, Buffer.prototype.writeIntBE = function(s, c, l, f) {
                if (s = +s, c >>>= 0, !f) {
                    var B = Math.pow(2, 8 * l - 1);
                    checkInt(this, s, c, l, B - 1, -B)
                }
                var R = l - 1,
                    I = 1,
                    P = 0;
                for (this[c + R] = 255 & s; --R >= 0 && (I *= 256);) s < 0 && 0 === P && 0 !== this[c + R + 1] && (P = 1), this[c + R] = (s / I >> 0) - P & 255;
                return c + l
            }, Buffer.prototype.writeInt8 = function(s, c, l) {
                return s = +s, c >>>= 0, l || checkInt(this, s, c, 1, 127, -128), s < 0 && (s = 255 + s + 1), this[c] = 255 & s, c + 1
            }, Buffer.prototype.writeInt16LE = function(s, c, l) {
                return s = +s, c >>>= 0, l || checkInt(this, s, c, 2, 32767, -32768), this[c] = 255 & s, this[c + 1] = s >>> 8, c + 2
            }, Buffer.prototype.writeInt16BE = function(s, c, l) {
                return s = +s, c >>>= 0, l || checkInt(this, s, c, 2, 32767, -32768), this[c] = s >>> 8, this[c + 1] = 255 & s, c + 2
            }, Buffer.prototype.writeInt32LE = function(s, c, l) {
                return s = +s, c >>>= 0, l || checkInt(this, s, c, 4, 2147483647, -2147483648), this[c] = 255 & s, this[c + 1] = s >>> 8, this[c + 2] = s >>> 16, this[c + 3] = s >>> 24, c + 4
            }, Buffer.prototype.writeInt32BE = function(s, c, l) {
                return s = +s, c >>>= 0, l || checkInt(this, s, c, 4, 2147483647, -2147483648), s < 0 && (s = 4294967295 + s + 1), this[c] = s >>> 24, this[c + 1] = s >>> 16, this[c + 2] = s >>> 8, this[c + 3] = 255 & s, c + 4
            }, Buffer.prototype.writeFloatLE = function(s, c, l) {
                return writeFloat(this, s, c, !0, l)
            }, Buffer.prototype.writeFloatBE = function(s, c, l) {
                return writeFloat(this, s, c, !1, l)
            }, Buffer.prototype.writeDoubleLE = function(s, c, l) {
                return writeDouble(this, s, c, !0, l)
            }, Buffer.prototype.writeDoubleBE = function(s, c, l) {
                return writeDouble(this, s, c, !1, l)
            }, Buffer.prototype.copy = function(s, c, l, f) {
                if (!Buffer.isBuffer(s)) throw TypeError("argument should be a Buffer");
                if (l || (l = 0), f || 0 === f || (f = this.length), c >= s.length && (c = s.length), c || (c = 0), f > 0 && f < l && (f = l), f === l || 0 === s.length || 0 === this.length) return 0;
                if (c < 0) throw RangeError("targetStart out of bounds");
                if (l < 0 || l >= this.length) throw RangeError("Index out of range");
                if (f < 0) throw RangeError("sourceEnd out of bounds");
                f > this.length && (f = this.length), s.length - c < f - l && (f = s.length - c + l);
                var B = f - l;
                return this === s && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(c, l, f) : Uint8Array.prototype.set.call(s, this.subarray(l, f), c), B
            }, Buffer.prototype.fill = function(s, c, l, f) {
                if ("string" == typeof s) {
                    if ("string" == typeof c ? (f = c, c = 0, l = this.length) : "string" == typeof l && (f = l, l = this.length), void 0 !== f && "string" != typeof f) throw TypeError("encoding must be a string");
                    if ("string" == typeof f && !Buffer.isEncoding(f)) throw TypeError("Unknown encoding: " + f);
                    if (1 === s.length) {
                        var B, R = s.charCodeAt(0);
                        ("utf8" === f && R < 128 || "latin1" === f) && (s = R)
                    }
                } else "number" == typeof s ? s &= 255 : "boolean" == typeof s && (s = Number(s));
                if (c < 0 || this.length < c || this.length < l) throw RangeError("Out of range index");
                if (l <= c) return this;
                if (c >>>= 0, l = void 0 === l ? this.length : l >>> 0, s || (s = 0), "number" == typeof s)
                    for (B = c; B < l; ++B) this[B] = s;
                else {
                    var I = Buffer.isBuffer(s) ? s : Buffer.from(s, f),
                        P = I.length;
                    if (0 === P) throw TypeError('The value "' + s + '" is invalid for argument "value"');
                    for (B = 0; B < l - c; ++B) this[B + c] = I[B % P]
                }
                return this
            };
            var I = /[^+/0-9A-Za-z-_]/g;

            function utf8ToBytes(s, c) {
                c = c || 1 / 0;
                for (var l, f = s.length, B = null, R = [], I = 0; I < f; ++I) {
                    if ((l = s.charCodeAt(I)) > 55295 && l < 57344) {
                        if (!B) {
                            if (l > 56319 || I + 1 === f) {
                                (c -= 3) > -1 && R.push(239, 191, 189);
                                continue
                            }
                            B = l;
                            continue
                        }
                        if (l < 56320) {
                            (c -= 3) > -1 && R.push(239, 191, 189), B = l;
                            continue
                        }
                        l = (B - 55296 << 10 | l - 56320) + 65536
                    } else B && (c -= 3) > -1 && R.push(239, 191, 189);
                    if (B = null, l < 128) {
                        if ((c -= 1) < 0) break;
                        R.push(l)
                    } else if (l < 2048) {
                        if ((c -= 2) < 0) break;
                        R.push(l >> 6 | 192, 63 & l | 128)
                    } else if (l < 65536) {
                        if ((c -= 3) < 0) break;
                        R.push(l >> 12 | 224, l >> 6 & 63 | 128, 63 & l | 128)
                    } else if (l < 1114112) {
                        if ((c -= 4) < 0) break;
                        R.push(l >> 18 | 240, l >> 12 & 63 | 128, l >> 6 & 63 | 128, 63 & l | 128)
                    } else throw Error("Invalid code point")
                }
                return R
            }

            function base64ToBytes(s) {
                return f.toByteArray(function(s) {
                    if ((s = (s = s.split("=")[0]).trim().replace(I, "")).length < 2) return "";
                    for (; s.length % 4 != 0;) s += "=";
                    return s
                }(s))
            }

            function blitBuffer(s, c, l, f) {
                for (var B = 0; B < f && !(B + l >= c.length) && !(B >= s.length); ++B) c[B + l] = s[B];
                return B
            }

            function isInstance(s, c) {
                return s instanceof c || null != s && null != s.constructor && null != s.constructor.name && s.constructor.name === c.name
            }
            var P = function() {
                for (var s = "0123456789abcdef", c = Array(256), l = 0; l < 16; ++l)
                    for (var f = 16 * l, B = 0; B < 16; ++B) c[f + B] = s[l] + s[B];
                return c
            }()
        },
        26392: function(s, c, l) {
            "use strict";
            var f = l(53921),
                B = {
                    "text/plain": "Text",
                    "text/html": "Url",
                    default: "Text"
                };
            s.exports = function(s, c) {
                var l, R, I, P, W, $, Z, tt, te = !1;
                c || (c = {}), I = c.debug || !1;
                try {
                    if (W = f(), $ = document.createRange(), Z = document.getSelection(), (tt = document.createElement("span")).textContent = s, tt.ariaHidden = "true", tt.style.all = "unset", tt.style.position = "fixed", tt.style.top = 0, tt.style.clip = "rect(0, 0, 0, 0)", tt.style.whiteSpace = "pre", tt.style.webkitUserSelect = "text", tt.style.MozUserSelect = "text", tt.style.msUserSelect = "text", tt.style.userSelect = "text", tt.addEventListener("copy", function(l) {
                            if (l.stopPropagation(), c.format) {
                                if (l.preventDefault(), void 0 === l.clipboardData) {
                                    I && console.warn("unable to use e.clipboardData"), I && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
                                    var f = B[c.format] || B.default;
                                    window.clipboardData.setData(f, s)
                                } else l.clipboardData.clearData(), l.clipboardData.setData(c.format, s)
                            }
                            c.onCopy && (l.preventDefault(), c.onCopy(l.clipboardData))
                        }), document.body.appendChild(tt), $.selectNodeContents(tt), Z.addRange($), !document.execCommand("copy")) throw Error("copy command was unsuccessful");
                    te = !0
                } catch (f) {
                    I && console.error("unable to copy using execCommand: ", f), I && console.warn("trying IE specific stuff");
                    try {
                        window.clipboardData.setData(c.format || "text", s), c.onCopy && c.onCopy(window.clipboardData), te = !0
                    } catch (f) {
                        I && console.error("unable to copy using clipboardData: ", f), I && console.error("falling back to prompt"), l = "message" in c ? c.message : "Copy to clipboard: #{key}, Enter", R = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C", P = l.replace(/#{\s*key\s*}/g, R), window.prompt(P, s)
                    }
                } finally {
                    Z && ("function" == typeof Z.removeRange ? Z.removeRange($) : Z.removeAllRanges()), tt && document.body.removeChild(tt), W()
                }
                return te
            }
        },
        11239: function(s, c) {
            var l = "undefined" != typeof self ? self : this,
                f = function() {
                    function F() {
                        this.fetch = !1, this.DOMException = l.DOMException
                    }
                    return F.prototype = l, new F
                }();
            (function(s) {
                var c = {
                    searchParams: "URLSearchParams" in f,
                    iterable: "Symbol" in f && "iterator" in Symbol,
                    blob: "FileReader" in f && "Blob" in f && function() {
                        try {
                            return new Blob, !0
                        } catch (s) {
                            return !1
                        }
                    }(),
                    formData: "FormData" in f,
                    arrayBuffer: "ArrayBuffer" in f
                };
                if (c.arrayBuffer) var l = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                    B = ArrayBuffer.isView || function(s) {
                        return s && l.indexOf(Object.prototype.toString.call(s)) > -1
                    };

                function normalizeName(s) {
                    if ("string" != typeof s && (s = String(s)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(s)) throw TypeError("Invalid character in header field name");
                    return s.toLowerCase()
                }

                function normalizeValue(s) {
                    return "string" != typeof s && (s = String(s)), s
                }

                function iteratorFor(s) {
                    var l = {
                        next: function() {
                            var c = s.shift();
                            return {
                                done: void 0 === c,
                                value: c
                            }
                        }
                    };
                    return c.iterable && (l[Symbol.iterator] = function() {
                        return l
                    }), l
                }

                function Headers(s) {
                    this.map = {}, s instanceof Headers ? s.forEach(function(s, c) {
                        this.append(c, s)
                    }, this) : Array.isArray(s) ? s.forEach(function(s) {
                        this.append(s[0], s[1])
                    }, this) : s && Object.getOwnPropertyNames(s).forEach(function(c) {
                        this.append(c, s[c])
                    }, this)
                }

                function consumed(s) {
                    if (s.bodyUsed) return Promise.reject(TypeError("Already read"));
                    s.bodyUsed = !0
                }

                function fileReaderReady(s) {
                    return new Promise(function(c, l) {
                        s.onload = function() {
                            c(s.result)
                        }, s.onerror = function() {
                            l(s.error)
                        }
                    })
                }

                function readBlobAsArrayBuffer(s) {
                    var c = new FileReader,
                        l = fileReaderReady(c);
                    return c.readAsArrayBuffer(s), l
                }

                function bufferClone(s) {
                    if (s.slice) return s.slice(0);
                    var c = new Uint8Array(s.byteLength);
                    return c.set(new Uint8Array(s)), c.buffer
                }

                function Body() {
                    return this.bodyUsed = !1, this._initBody = function(s) {
                        if (this._bodyInit = s, s) {
                            if ("string" == typeof s) this._bodyText = s;
                            else if (c.blob && Blob.prototype.isPrototypeOf(s)) this._bodyBlob = s;
                            else if (c.formData && FormData.prototype.isPrototypeOf(s)) this._bodyFormData = s;
                            else if (c.searchParams && URLSearchParams.prototype.isPrototypeOf(s)) this._bodyText = s.toString();
                            else {
                                var l;
                                c.arrayBuffer && c.blob && (l = s) && DataView.prototype.isPrototypeOf(l) ? (this._bodyArrayBuffer = bufferClone(s.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : c.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(s) || B(s)) ? this._bodyArrayBuffer = bufferClone(s) : this._bodyText = s = Object.prototype.toString.call(s)
                            }
                        } else this._bodyText = "";
                        !this.headers.get("content-type") && ("string" == typeof s ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : c.searchParams && URLSearchParams.prototype.isPrototypeOf(s) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                    }, c.blob && (this.blob = function() {
                        var s = consumed(this);
                        if (s) return s;
                        if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                        if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                        if (!this._bodyFormData) return Promise.resolve(new Blob([this._bodyText]));
                        throw Error("could not read FormData body as blob")
                    }, this.arrayBuffer = function() {
                        return this._bodyArrayBuffer ? consumed(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(readBlobAsArrayBuffer)
                    }), this.text = function() {
                        var s, c, l, f = consumed(this);
                        if (f) return f;
                        if (this._bodyBlob) return s = this._bodyBlob, l = fileReaderReady(c = new FileReader), c.readAsText(s), l;
                        if (this._bodyArrayBuffer) return Promise.resolve(function(s) {
                            for (var c = new Uint8Array(s), l = Array(c.length), f = 0; f < c.length; f++) l[f] = String.fromCharCode(c[f]);
                            return l.join("")
                        }(this._bodyArrayBuffer));
                        if (!this._bodyFormData) return Promise.resolve(this._bodyText);
                        throw Error("could not read FormData body as text")
                    }, c.formData && (this.formData = function() {
                        return this.text().then(decode)
                    }), this.json = function() {
                        return this.text().then(JSON.parse)
                    }, this
                }
                Headers.prototype.append = function(s, c) {
                    s = normalizeName(s), c = normalizeValue(c);
                    var l = this.map[s];
                    this.map[s] = l ? l + ", " + c : c
                }, Headers.prototype.delete = function(s) {
                    delete this.map[normalizeName(s)]
                }, Headers.prototype.get = function(s) {
                    return s = normalizeName(s), this.has(s) ? this.map[s] : null
                }, Headers.prototype.has = function(s) {
                    return this.map.hasOwnProperty(normalizeName(s))
                }, Headers.prototype.set = function(s, c) {
                    this.map[normalizeName(s)] = normalizeValue(c)
                }, Headers.prototype.forEach = function(s, c) {
                    for (var l in this.map) this.map.hasOwnProperty(l) && s.call(c, this.map[l], l, this)
                }, Headers.prototype.keys = function() {
                    var s = [];
                    return this.forEach(function(c, l) {
                        s.push(l)
                    }), iteratorFor(s)
                }, Headers.prototype.values = function() {
                    var s = [];
                    return this.forEach(function(c) {
                        s.push(c)
                    }), iteratorFor(s)
                }, Headers.prototype.entries = function() {
                    var s = [];
                    return this.forEach(function(c, l) {
                        s.push([l, c])
                    }), iteratorFor(s)
                }, c.iterable && (Headers.prototype[Symbol.iterator] = Headers.prototype.entries);
                var R = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

                function Request(s, c) {
                    var l, f, B = (c = c || {}).body;
                    if (s instanceof Request) {
                        if (s.bodyUsed) throw TypeError("Already read");
                        this.url = s.url, this.credentials = s.credentials, c.headers || (this.headers = new Headers(s.headers)), this.method = s.method, this.mode = s.mode, this.signal = s.signal, B || null == s._bodyInit || (B = s._bodyInit, s.bodyUsed = !0)
                    } else this.url = String(s);
                    if (this.credentials = c.credentials || this.credentials || "same-origin", (c.headers || !this.headers) && (this.headers = new Headers(c.headers)), this.method = (f = (l = c.method || this.method || "GET").toUpperCase(), R.indexOf(f) > -1 ? f : l), this.mode = c.mode || this.mode || null, this.signal = c.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && B) throw TypeError("Body not allowed for GET or HEAD requests");
                    this._initBody(B)
                }

                function decode(s) {
                    var c = new FormData;
                    return s.trim().split("&").forEach(function(s) {
                        if (s) {
                            var l = s.split("="),
                                f = l.shift().replace(/\+/g, " "),
                                B = l.join("=").replace(/\+/g, " ");
                            c.append(decodeURIComponent(f), decodeURIComponent(B))
                        }
                    }), c
                }

                function Response(s, c) {
                    c || (c = {}), this.type = "default", this.status = void 0 === c.status ? 200 : c.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in c ? c.statusText : "OK", this.headers = new Headers(c.headers), this.url = c.url || "", this._initBody(s)
                }
                Request.prototype.clone = function() {
                    return new Request(this, {
                        body: this._bodyInit
                    })
                }, Body.call(Request.prototype), Body.call(Response.prototype), Response.prototype.clone = function() {
                    return new Response(this._bodyInit, {
                        status: this.status,
                        statusText: this.statusText,
                        headers: new Headers(this.headers),
                        url: this.url
                    })
                }, Response.error = function() {
                    var s = new Response(null, {
                        status: 0,
                        statusText: ""
                    });
                    return s.type = "error", s
                };
                var I = [301, 302, 303, 307, 308];
                Response.redirect = function(s, c) {
                    if (-1 === I.indexOf(c)) throw RangeError("Invalid status code");
                    return new Response(null, {
                        status: c,
                        headers: {
                            location: s
                        }
                    })
                }, s.DOMException = f.DOMException;
                try {
                    new s.DOMException
                } catch (c) {
                    s.DOMException = function(s, c) {
                        this.message = s, this.name = c;
                        var l = Error(s);
                        this.stack = l.stack
                    }, s.DOMException.prototype = Object.create(Error.prototype), s.DOMException.prototype.constructor = s.DOMException
                }

                function fetch(l, f) {
                    return new Promise(function(B, R) {
                        var I = new Request(l, f);
                        if (I.signal && I.signal.aborted) return R(new s.DOMException("Aborted", "AbortError"));
                        var P = new XMLHttpRequest;

                        function abortXhr() {
                            P.abort()
                        }
                        P.onload = function() {
                            var s, c, l = {
                                status: P.status,
                                statusText: P.statusText,
                                headers: (s = P.getAllResponseHeaders() || "", c = new Headers, s.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach(function(s) {
                                    var l = s.split(":"),
                                        f = l.shift().trim();
                                    if (f) {
                                        var B = l.join(":").trim();
                                        c.append(f, B)
                                    }
                                }), c)
                            };
                            l.url = "responseURL" in P ? P.responseURL : l.headers.get("X-Request-URL");
                            var f = "response" in P ? P.response : P.responseText;
                            B(new Response(f, l))
                        }, P.onerror = function() {
                            R(TypeError("Network request failed"))
                        }, P.ontimeout = function() {
                            R(TypeError("Network request failed"))
                        }, P.onabort = function() {
                            R(new s.DOMException("Aborted", "AbortError"))
                        }, P.open(I.method, I.url, !0), "include" === I.credentials ? P.withCredentials = !0 : "omit" === I.credentials && (P.withCredentials = !1), "responseType" in P && c.blob && (P.responseType = "blob"), I.headers.forEach(function(s, c) {
                            P.setRequestHeader(c, s)
                        }), I.signal && (I.signal.addEventListener("abort", abortXhr), P.onreadystatechange = function() {
                            4 === P.readyState && I.signal.removeEventListener("abort", abortXhr)
                        }), P.send(void 0 === I._bodyInit ? null : I._bodyInit)
                    })
                }
                fetch.polyfill = !0, f.fetch || (f.fetch = fetch, f.Headers = Headers, f.Request = Request, f.Response = Response), s.Headers = Headers, s.Request = Request, s.Response = Response, s.fetch = fetch, Object.defineProperty(s, "__esModule", {
                    value: !0
                })
            })({}), f.fetch.ponyfill = !0, delete f.fetch.polyfill, (c = f.fetch).default = f.fetch, c.fetch = f.fetch, c.Headers = f.Headers, c.Request = f.Request, c.Response = f.Response, s.exports = c
        },
        31706: function(s) {
            "use strict";
            var c = "%[a-f0-9]{2}",
                l = RegExp("(" + c + ")|([^%]+?)", "gi"),
                f = RegExp("(" + c + ")+", "gi");
            s.exports = function(s) {
                if ("string" != typeof s) throw TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof s + "`");
                try {
                    return s = s.replace(/\+/g, " "), decodeURIComponent(s)
                } catch (c) {
                    return function(s) {
                        for (var c = {
                                "%FE%FF": "��",
                                "%FF%FE": "��"
                            }, B = f.exec(s); B;) {
                            try {
                                c[B[0]] = decodeURIComponent(B[0])
                            } catch (s) {
                                var R = function(s) {
                                    try {
                                        return decodeURIComponent(s)
                                    } catch (B) {
                                        for (var c = s.match(l) || [], f = 1; f < c.length; f++) c = (s = (function decodeComponents(s, c) {
                                            try {
                                                return [decodeURIComponent(s.join(""))]
                                            } catch (s) {}
                                            if (1 === s.length) return s;
                                            c = c || 1;
                                            var l = s.slice(0, c),
                                                f = s.slice(c);
                                            return Array.prototype.concat.call([], decodeComponents(l), decodeComponents(f))
                                        })(c, f).join("")).match(l) || [];
                                        return s
                                    }
                                }(B[0]);
                                R !== B[0] && (c[B[0]] = R)
                            }
                            B = f.exec(s)
                        }
                        c["%C2"] = "�";
                        for (var I = Object.keys(c), P = 0; P < I.length; P++) {
                            var W = I[P];
                            s = s.replace(RegExp(W, "g"), c[W])
                        }
                        return s
                    }(s)
                }
            }
        },
        85341: function(s) {
            s.exports = isTypedArray, isTypedArray.strict = isStrictTypedArray, isTypedArray.loose = isLooseTypedArray;
            var c = Object.prototype.toString,
                l = {
                    "[object Int8Array]": !0,
                    "[object Int16Array]": !0,
                    "[object Int32Array]": !0,
                    "[object Uint8Array]": !0,
                    "[object Uint8ClampedArray]": !0,
                    "[object Uint16Array]": !0,
                    "[object Uint32Array]": !0,
                    "[object Float32Array]": !0,
                    "[object Float64Array]": !0
                };

            function isTypedArray(s) {
                return isStrictTypedArray(s) || isLooseTypedArray(s)
            }

            function isStrictTypedArray(s) {
                return s instanceof Int8Array || s instanceof Int16Array || s instanceof Int32Array || s instanceof Uint8Array || s instanceof Uint8ClampedArray || s instanceof Uint16Array || s instanceof Uint32Array || s instanceof Float32Array || s instanceof Float64Array
            }

            function isLooseTypedArray(s) {
                return l[c.call(s)]
            }
        },
        35242: function(s) {
            var c = {}.toString;
            s.exports = Array.isArray || function(s) {
                return "[object Array]" == c.call(s)
            }
        },
        72067: function(s, c, l) {
            "use strict";
            l.r(c), l.d(c, {
                Children: function() {
                    return td
                },
                Component: function() {
                    return m
                },
                Fragment: function() {
                    return d
                },
                PureComponent: function() {
                    return th
                },
                Suspense: function() {
                    return U
                },
                SuspenseList: function() {
                    return O
                },
                cloneElement: function() {
                    return K
                },
                createContext: function() {
                    return M
                },
                createElement: function() {
                    return h
                },
                createFactory: function() {
                    return G
                },
                createPortal: function() {
                    return compat_module_z
                },
                createRef: function() {
                    return y
                },
                default: function() {
                    return tM
                },
                findDOMNode: function() {
                    return X
                },
                forwardRef: function() {
                    return S
                },
                hydrate: function() {
                    return V
                },
                isValidElement: function() {
                    return J
                },
                lazy: function() {
                    return compat_module_L
                },
                memo: function() {
                    return compat_module_
                },
                render: function() {
                    return compat_module_T
                },
                unmountComponentAtNode: function() {
                    return Q
                },
                unstable_batchedUpdates: function() {
                    return Y
                },
                useCallback: function() {
                    return hooks_module_T
                },
                useContext: function() {
                    return hooks_module_w
                },
                useDebugValue: function() {
                    return hooks_module_A
                },
                useEffect: function() {
                    return hooks_module_l
                },
                useErrorBoundary: function() {
                    return F
                },
                useImperativeHandle: function() {
                    return hooks_module_s
                },
                useLayoutEffect: function() {
                    return hooks_module_y
                },
                useMemo: function() {
                    return hooks_module_h
                },
                useReducer: function() {
                    return hooks_module_p
                },
                useRef: function() {
                    return hooks_module_d
                },
                useState: function() {
                    return hooks_module_m
                },
                version: function() {
                    return tb
                }
            });
            var f, B, R, I, P, W, $, Z = {},
                tt = [],
                te = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;

            function a(s, c) {
                for (var l in c) s[l] = c[l];
                return s
            }

            function v(s) {
                var c = s.parentNode;
                c && c.removeChild(s)
            }

            function h(s, c, l) {
                var f, B = arguments,
                    R = {};
                for (f in c) "key" !== f && "ref" !== f && (R[f] = c[f]);
                if (arguments.length > 3)
                    for (l = [l], f = 3; f < arguments.length; f++) l.push(B[f]);
                if (null != l && (R.children = l), "function" == typeof s && null != s.defaultProps)
                    for (f in s.defaultProps) void 0 === R[f] && (R[f] = s.defaultProps[f]);
                return p(s, R, c && c.key, c && c.ref, null)
            }

            function p(s, c, l, B, R) {
                var I = {
                    type: s,
                    props: c,
                    key: l,
                    ref: B,
                    __k: null,
                    __: null,
                    __b: 0,
                    __e: null,
                    __d: void 0,
                    __c: null,
                    constructor: void 0,
                    __v: R
                };
                return null == R && (I.__v = I), f.vnode && f.vnode(I), I
            }

            function y() {
                return {}
            }

            function d(s) {
                return s.children
            }

            function m(s, c) {
                this.props = s, this.context = c
            }

            function w(s, c) {
                if (null == c) return s.__ ? w(s.__, s.__.__k.indexOf(s) + 1) : null;
                for (var l; c < s.__k.length; c++)
                    if (null != (l = s.__k[c]) && null != l.__e) return l.__e;
                return "function" == typeof s.type ? w(s) : null
            }

            function g(s) {
                (!s.__d && (s.__d = !0) && B.push(s) && !R++ || P !== f.debounceRendering) && ((P = f.debounceRendering) || I)(_)
            }

            function _() {
                for (var s; R = B.length;) s = B.sort(function(s, c) {
                    return s.__v.__b - c.__v.__b
                }), B = [], s.some(function(s) {
                    var c, l, f, B, R, I;
                    s.__d && (R = (B = s.__v).__e, (I = s.__P) && (c = [], (l = a({}, B)).__v = l, f = A(I, B, l, s.__n, void 0 !== I.ownerSVGElement, null, c, null == R ? w(B) : R), T(c, B), f != R && function k(s) {
                        var c, l;
                        if (null != (s = s.__) && null != s.__c) {
                            for (s.__e = s.__c.base = null, c = 0; c < s.__k.length; c++)
                                if (null != (l = s.__k[c]) && null != l.__e) {
                                    s.__e = s.__c.base = l.__e;
                                    break
                                }
                            return k(s)
                        }
                    }(B)))
                })
            }

            function b(s, c, l, f, B, R, I, P, W) {
                var $, te, tn, tr, to, ti, ts, ta = l && l.__k || tt,
                    tu = ta.length;
                if (P == Z && (P = null != R ? R[0] : tu ? w(l, 0) : null), $ = 0, c.__k = x(c.__k, function(l) {
                        if (null != l) {
                            if (l.__ = c, l.__b = c.__b + 1, null === (tn = ta[$]) || tn && l.key == tn.key && l.type === tn.type) ta[$] = void 0;
                            else
                                for (te = 0; te < tu; te++) {
                                    if ((tn = ta[te]) && l.key == tn.key && l.type === tn.type) {
                                        ta[te] = void 0;
                                        break
                                    }
                                    tn = null
                                }
                            if (tr = A(s, l, tn = tn || Z, f, B, R, I, P, W), (te = l.ref) && tn.ref != te && (ts || (ts = []), tn.ref && ts.push(tn.ref, null, l), ts.push(te, l.__c || tr, l)), null != tr) {
                                var tt;
                                if (null == ti && (ti = tr), void 0 !== l.__d) tt = l.__d, l.__d = void 0;
                                else if (R == tn || tr != P || null == tr.parentNode) {
                                    t: if (null == P || P.parentNode !== s) s.appendChild(tr), tt = null;
                                        else {
                                            for (to = P, te = 0;
                                                (to = to.nextSibling) && te < tu; te += 2)
                                                if (to == tr) break t;
                                            s.insertBefore(tr, P), tt = P
                                        }
                                    "option" == c.type && (s.value = "")
                                }
                                P = void 0 !== tt ? tt : tr.nextSibling, "function" == typeof c.type && (c.__d = P)
                            } else P && tn.__e == P && P.parentNode != s && (P = w(tn))
                        }
                        return $++, l
                    }), c.__e = ti, null != R && "function" != typeof c.type)
                    for ($ = R.length; $--;) null != R[$] && v(R[$]);
                for ($ = tu; $--;) null != ta[$] && D(ta[$], ta[$]);
                if (ts)
                    for ($ = 0; $ < ts.length; $++) j(ts[$], ts[++$], ts[++$])
            }

            function x(s, c, l) {
                if (null == l && (l = []), null == s || "boolean" == typeof s) c && l.push(c(null));
                else if (Array.isArray(s))
                    for (var f = 0; f < s.length; f++) x(s[f], c, l);
                else l.push(c ? c("string" == typeof s || "number" == typeof s ? p(null, s, null, null, s) : null != s.__e || null != s.__c ? p(s.type, s.props, s.key, null, s.__v) : s) : s);
                return l
            }

            function C(s, c, l) {
                "-" === c[0] ? s.setProperty(c, l) : s[c] = "number" == typeof l && !1 === te.test(c) ? l + "px" : null == l ? "" : l
            }

            function N(s, c, l, f, B) {
                var R, I, P, W, $;
                if (B ? "className" === c && (c = "class") : "class" === c && (c = "className"), "style" === c) {
                    if (R = s.style, "string" == typeof l) R.cssText = l;
                    else {
                        if ("string" == typeof f && (R.cssText = "", f = null), f)
                            for (W in f) l && W in l || C(R, W, "");
                        if (l)
                            for ($ in l) f && l[$] === f[$] || C(R, $, l[$])
                    }
                } else "o" === c[0] && "n" === c[1] ? (I = c !== (c = c.replace(/Capture$/, "")), c = ((P = c.toLowerCase()) in s ? P : c).slice(2), l ? (f || s.addEventListener(c, z, I), (s.l || (s.l = {}))[c] = l) : s.removeEventListener(c, z, I)) : "list" !== c && "tagName" !== c && "form" !== c && "type" !== c && "size" !== c && !B && c in s ? s[c] = null == l ? "" : l : "function" != typeof l && "dangerouslySetInnerHTML" !== c && (c !== (c = c.replace(/^xlink:?/, "")) ? null == l || !1 === l ? s.removeAttributeNS("http://www.w3.org/1999/xlink", c.toLowerCase()) : s.setAttributeNS("http://www.w3.org/1999/xlink", c.toLowerCase(), l) : null != l && (!1 !== l || /^ar/.test(c)) ? s.setAttribute(c, l) : s.removeAttribute(c))
            }

            function z(s) {
                this.l[s.type](f.event ? f.event(s) : s)
            }

            function A(s, c, l, B, R, I, P, W, $) {
                var te, tn, tr, to, ti, ts, ta, tu, tc, tl, th = c.type;
                if (void 0 !== c.constructor) return null;
                (te = f.__b) && te(c);
                try {
                    t: if ("function" == typeof th) {
                        if (tu = c.props, tc = (te = th.contextType) && B[te.__c], tl = te ? tc ? tc.props.value : te.__ : B, l.__c ? ta = (tn = c.__c = l.__c).__ = tn.__E : ("prototype" in th && th.prototype.render ? c.__c = tn = new th(tu, tl) : (c.__c = tn = new m(tu, tl), tn.constructor = th, tn.render = E), tc && tc.sub(tn), tn.props = tu, tn.state || (tn.state = {}), tn.context = tl, tn.__n = B, tr = tn.__d = !0, tn.__h = []), null == tn.__s && (tn.__s = tn.state), null != th.getDerivedStateFromProps && (tn.__s == tn.state && (tn.__s = a({}, tn.__s)), a(tn.__s, th.getDerivedStateFromProps(tu, tn.__s))), to = tn.props, ti = tn.state, tr) null == th.getDerivedStateFromProps && null != tn.componentWillMount && tn.componentWillMount(), null != tn.componentDidMount && tn.__h.push(tn.componentDidMount);
                        else {
                            if (null == th.getDerivedStateFromProps && tu !== to && null != tn.componentWillReceiveProps && tn.componentWillReceiveProps(tu, tl), !tn.__e && null != tn.shouldComponentUpdate && !1 === tn.shouldComponentUpdate(tu, tn.__s, tl) || c.__v === l.__v && !tn.__) {
                                for (tn.props = tu, tn.state = tn.__s, c.__v !== l.__v && (tn.__d = !1), tn.__v = c, c.__e = l.__e, c.__k = l.__k, tn.__h.length && P.push(tn), te = 0; te < c.__k.length; te++) c.__k[te] && (c.__k[te].__ = c);
                                break t
                            }
                            null != tn.componentWillUpdate && tn.componentWillUpdate(tu, tn.__s, tl), null != tn.componentDidUpdate && tn.__h.push(function() {
                                tn.componentDidUpdate(to, ti, ts)
                            })
                        }
                        tn.context = tl, tn.props = tu, tn.state = tn.__s, (te = f.__r) && te(c), tn.__d = !1, tn.__v = c, tn.__P = s, te = tn.render(tn.props, tn.state, tn.context), c.__k = null != te && te.type == d && null == te.key ? te.props.children : Array.isArray(te) ? te : [te], null != tn.getChildContext && (B = a(a({}, B), tn.getChildContext())), tr || null == tn.getSnapshotBeforeUpdate || (ts = tn.getSnapshotBeforeUpdate(to, ti)), b(s, c, l, B, R, I, P, W, $), tn.base = c.__e, tn.__h.length && P.push(tn), ta && (tn.__E = tn.__ = null), tn.__e = !1
                    } else null == I && c.__v === l.__v ? (c.__k = l.__k, c.__e = l.__e) : c.__e = function(s, c, l, f, B, R, I, P) {
                        var W, $, te, tn, tr, to = l.props,
                            ti = c.props;
                        if (B = "svg" === c.type || B, null != R) {
                            for (W = 0; W < R.length; W++)
                                if (null != ($ = R[W]) && ((null === c.type ? 3 === $.nodeType : $.localName === c.type) || s == $)) {
                                    s = $, R[W] = null;
                                    break
                                }
                        }
                        if (null == s) {
                            if (null === c.type) return document.createTextNode(ti);
                            s = B ? document.createElementNS("http://www.w3.org/2000/svg", c.type) : document.createElement(c.type, ti.is && {
                                is: ti.is
                            }), R = null, P = !1
                        }
                        if (null === c.type) to !== ti && s.data != ti && (s.data = ti);
                        else {
                            if (null != R && (R = tt.slice.call(s.childNodes)), te = (to = l.props || Z).dangerouslySetInnerHTML, tn = ti.dangerouslySetInnerHTML, !P) {
                                if (to === Z)
                                    for (to = {}, tr = 0; tr < s.attributes.length; tr++) to[s.attributes[tr].name] = s.attributes[tr].value;
                                (tn || te) && (tn && te && tn.__html == te.__html || (s.innerHTML = tn && tn.__html || ""))
                            }(function(s, c, l, f, B) {
                                var R;
                                for (R in l) "children" === R || "key" === R || R in c || N(s, R, null, l[R], f);
                                for (R in c) B && "function" != typeof c[R] || "children" === R || "key" === R || "value" === R || "checked" === R || l[R] === c[R] || N(s, R, c[R], l[R], f)
                            })(s, ti, to, B, P), tn ? c.__k = [] : (c.__k = c.props.children, b(s, c, l, f, "foreignObject" !== c.type && B, R, I, Z, P)), P || ("value" in ti && void 0 !== (W = ti.value) && W !== s.value && N(s, "value", W, to.value, !1), "checked" in ti && void 0 !== (W = ti.checked) && W !== s.checked && N(s, "checked", W, to.checked, !1))
                        }
                        return s
                    }(l.__e, c, l, B, R, I, P, $);
                    (te = f.diffed) && te(c)
                }
                catch (s) {
                    c.__v = null, f.__e(s, c, l)
                }
                return c.__e
            }

            function T(s, c) {
                f.__c && f.__c(c, s), s.some(function(c) {
                    try {
                        s = c.__h, c.__h = [], s.some(function(s) {
                            s.call(c)
                        })
                    } catch (s) {
                        f.__e(s, c.__v)
                    }
                })
            }

            function j(s, c, l) {
                try {
                    "function" == typeof s ? s(c) : s.current = c
                } catch (s) {
                    f.__e(s, l)
                }
            }

            function D(s, c, l) {
                var B, R, I;
                if (f.unmount && f.unmount(s), (B = s.ref) && (B.current && B.current !== s.__e || j(B, null, c)), l || "function" == typeof s.type || (l = null != (R = s.__e)), s.__e = s.__d = void 0, null != (B = s.__c)) {
                    if (B.componentWillUnmount) try {
                        B.componentWillUnmount()
                    } catch (s) {
                        f.__e(s, c)
                    }
                    B.base = B.__P = null
                }
                if (B = s.__k)
                    for (I = 0; I < B.length; I++) B[I] && D(B[I], c, l);
                null != R && v(R)
            }

            function E(s, c, l) {
                return this.constructor(s, l)
            }

            function H(s, c, l) {
                var B, R, I;
                f.__ && f.__(s, c), R = (B = l === W) ? null : l && l.__k || c.__k, s = h(d, null, [s]), I = [], A(c, (B ? c : l || c).__k = s, R || Z, Z, void 0 !== c.ownerSVGElement, l && !B ? [l] : R ? null : tt.slice.call(c.childNodes), I, l || Z, B), T(I, s)
            }

            function L(s, c) {
                var l, f;
                for (f in c = a(a({}, s.props), c), arguments.length > 2 && (c.children = tt.slice.call(arguments, 2)), l = {}, c) "key" !== f && "ref" !== f && (l[f] = c[f]);
                return p(s.type, l, c.key || s.key, c.ref || s.ref, null)
            }

            function M(s) {
                var c = {},
                    l = {
                        __c: "__cC" + $++,
                        __: s,
                        Consumer: function(s, c) {
                            return s.children(c)
                        },
                        Provider: function(s) {
                            var f, B = this;
                            return this.getChildContext || (f = [], this.getChildContext = function() {
                                return c[l.__c] = B, c
                            }, this.shouldComponentUpdate = function(s) {
                                B.props.value !== s.value && f.some(function(c) {
                                    c.context = s.value, g(c)
                                })
                            }, this.sub = function(s) {
                                f.push(s);
                                var c = s.componentWillUnmount;
                                s.componentWillUnmount = function() {
                                    f.splice(f.indexOf(s), 1), c && c.call(s)
                                }
                            }), s.children
                        }
                    };
                return l.Consumer.contextType = l, l.Provider.__ = l, l
            }
            f = {
                __e: function(s, c) {
                    for (var l, f; c = c.__;)
                        if ((l = c.__c) && !l.__) try {
                            if (l.constructor && null != l.constructor.getDerivedStateFromError && (f = !0, l.setState(l.constructor.getDerivedStateFromError(s))), null != l.componentDidCatch && (f = !0, l.componentDidCatch(s)), f) return g(l.__E = l)
                        } catch (c) {
                            s = c
                        }
                    throw s
                }
            }, m.prototype.setState = function(s, c) {
                var l;
                l = this.__s !== this.state ? this.__s : this.__s = a({}, this.state), "function" == typeof s && (s = s(l, this.props)), s && a(l, s), null != s && this.__v && (c && this.__h.push(c), g(this))
            }, m.prototype.forceUpdate = function(s) {
                this.__v && (this.__e = !0, s && this.__h.push(s), g(this))
            }, m.prototype.render = d, B = [], R = 0, I = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, W = Z, $ = 0;
            var tn, tr, to, ti = 0,
                ts = [],
                ta = f.__r,
                tu = f.diffed,
                tc = f.__c,
                tl = f.unmount;

            function hooks_module_v(s, c) {
                f.__h && f.__h(tr, s, ti || c), ti = 0;
                var l = tr.__H || (tr.__H = {
                    __: [],
                    __h: []
                });
                return s >= l.__.length && l.__.push({}), l.__[s]
            }

            function hooks_module_m(s) {
                return ti = 1, hooks_module_p(hooks_module_E, s)
            }

            function hooks_module_p(s, c, l) {
                var f = hooks_module_v(tn++, 2);
                return f.__c || (f.__c = tr, f.__ = [l ? l(c) : hooks_module_E(void 0, c), function(c) {
                    var l = s(f.__[0], c);
                    f.__[0] !== l && (f.__[0] = l, f.__c.setState({}))
                }]), f.__
            }

            function hooks_module_l(s, c) {
                var l = hooks_module_v(tn++, 3);
                !f.__s && hooks_module_x(l.__H, c) && (l.__ = s, l.__H = c, tr.__H.__h.push(l))
            }

            function hooks_module_y(s, c) {
                var l = hooks_module_v(tn++, 4);
                !f.__s && hooks_module_x(l.__H, c) && (l.__ = s, l.__H = c, tr.__h.push(l))
            }

            function hooks_module_d(s) {
                return ti = 5, hooks_module_h(function() {
                    return {
                        current: s
                    }
                }, [])
            }

            function hooks_module_s(s, c, l) {
                ti = 6, hooks_module_y(function() {
                    "function" == typeof s ? s(c()) : s && (s.current = c())
                }, null == l ? l : l.concat(s))
            }

            function hooks_module_h(s, c) {
                var l = hooks_module_v(tn++, 7);
                return hooks_module_x(l.__H, c) ? (l.__H = c, l.__h = s, l.__ = s()) : l.__
            }

            function hooks_module_T(s, c) {
                return ti = 8, hooks_module_h(function() {
                    return s
                }, c)
            }

            function hooks_module_w(s) {
                var c = tr.context[s.__c],
                    l = hooks_module_v(tn++, 9);
                return l.__c = s, c ? (null == l.__ && (l.__ = !0, c.sub(tr)), c.props.value) : s.__
            }

            function hooks_module_A(s, c) {
                f.useDebugValue && f.useDebugValue(c ? c(s) : s)
            }

            function F(s) {
                var c = hooks_module_v(tn++, 10),
                    l = hooks_module_m();
                return c.__ = s, tr.componentDidCatch || (tr.componentDidCatch = function(s) {
                    c.__ && c.__(s), l[1](s)
                }), [l[0], function() {
                    l[1](void 0)
                }]
            }

            function hooks_module_() {
                ts.some(function(s) {
                    if (s.__P) try {
                        s.__H.__h.forEach(hooks_module_g), s.__H.__h.forEach(q), s.__H.__h = []
                    } catch (c) {
                        return s.__H.__h = [], f.__e(c, s.__v), !0
                    }
                }), ts = []
            }

            function hooks_module_g(s) {
                s.t && s.t()
            }

            function q(s) {
                var c = s.__();
                "function" == typeof c && (s.t = c)
            }

            function hooks_module_x(s, c) {
                return !s || c.some(function(c, l) {
                    return c !== s[l]
                })
            }

            function hooks_module_E(s, c) {
                return "function" == typeof c ? c(s) : c
            }

            function compat_module_E(s, c) {
                for (var l in c) s[l] = c[l];
                return s
            }

            function compat_module_w(s, c) {
                for (var l in s)
                    if ("__source" !== l && !(l in c)) return !0;
                for (var f in c)
                    if ("__source" !== f && s[f] !== c[f]) return !0;
                return !1
            }
            f.__r = function(s) {
                ta && ta(s), tn = 0, (tr = s.__c).__H && (tr.__H.__h.forEach(hooks_module_g), tr.__H.__h.forEach(q), tr.__H.__h = [])
            }, f.diffed = function(s) {
                tu && tu(s);
                var c = s.__c;
                if (c) {
                    var l = c.__H;
                    l && l.__h.length && (1 !== ts.push(c) && to === f.requestAnimationFrame || ((to = f.requestAnimationFrame) || function(s) {
                        var c, u = function() {
                                clearTimeout(l), cancelAnimationFrame(c), setTimeout(s)
                            },
                            l = setTimeout(u, 100);
                        "undefined" != typeof window && (c = requestAnimationFrame(u))
                    })(hooks_module_))
                }
            }, f.__c = function(s, c) {
                c.some(function(s) {
                    try {
                        s.__h.forEach(hooks_module_g), s.__h = s.__h.filter(function(s) {
                            return !s.__ || q(s)
                        })
                    } catch (l) {
                        c.some(function(s) {
                            s.__h && (s.__h = [])
                        }), c = [], f.__e(l, s.__v)
                    }
                }), tc && tc(s, c)
            }, f.unmount = function(s) {
                tl && tl(s);
                var c = s.__c;
                if (c) {
                    var l = c.__H;
                    if (l) try {
                        l.__.forEach(function(s) {
                            return s.t && s.t()
                        })
                    } catch (s) {
                        f.__e(s, c.__v)
                    }
                }
            };
            var th = function(s) {
                function r(c) {
                    var l;
                    return (l = s.call(this, c) || this).isPureReactComponent = !0, l
                }
                return r.prototype = Object.create(s.prototype), r.prototype.constructor = r, r.__proto__ = s, r.prototype.shouldComponentUpdate = function(s, c) {
                    return compat_module_w(this.props, s) || compat_module_w(this.state, c)
                }, r
            }(m);

            function compat_module_(s, c) {
                function e(s) {
                    var l = this.props.ref,
                        f = l == s.ref;
                    return !f && l && (l.call ? l(null) : l.current = null), c ? !c(this.props, s) || !f : compat_module_w(this.props, s)
                }

                function r(c) {
                    return this.shouldComponentUpdate = e, h(s, compat_module_E({}, c))
                }
                return r.prototype.isReactComponent = !0, r.displayName = "Memo(" + (s.displayName || s.name) + ")", r.t = !0, r
            }
            var tf = f.__b;

            function S(s) {
                function t(c) {
                    var l = compat_module_E({}, c);
                    return delete l.ref, s(l, c.ref)
                }
                return t.prototype.isReactComponent = t.t = !0, t.displayName = "ForwardRef(" + (s.displayName || s.name) + ")", t
            }
            f.__b = function(s) {
                s.type && s.type.t && s.ref && (s.props.ref = s.ref, s.ref = null), tf && tf(s)
            };
            var compat_module_k = function(s, c) {
                    return s ? x(s).reduce(function(s, l, f) {
                        return s.concat(c(l, f))
                    }, []) : null
                },
                td = {
                    map: compat_module_k,
                    forEach: compat_module_k,
                    count: function(s) {
                        return s ? x(s).length : 0
                    },
                    only: function(s) {
                        if (1 !== (s = x(s)).length) throw Error("Children.only() expects only one child.");
                        return s[0]
                    },
                    toArray: x
                },
                tp = f.__e;

            function U() {
                this.__u = 0, this.o = null, this.__b = null
            }

            function compat_module_M(s) {
                var c = s.__.__c;
                return c && c.u && c.u(s)
            }

            function compat_module_L(s) {
                var c, l, f;

                function o(B) {
                    if (c || (c = s()).then(function(s) {
                            l = s.default || s
                        }, function(s) {
                            f = s
                        }), f) throw f;
                    if (!l) throw c;
                    return h(l, B)
                }
                return o.displayName = "Lazy", o.t = !0, o
            }

            function O() {
                this.i = null, this.l = null
            }
            f.__e = function(s, c, l) {
                if (s.then) {
                    for (var f, B = c; B = B.__;)
                        if ((f = B.__c) && f.__c) return f.__c(s, c.__c)
                }
                tp(s, c, l)
            }, (U.prototype = new m).__c = function(s, c) {
                var l = this;
                null == l.o && (l.o = []), l.o.push(c);
                var f = compat_module_M(l.__v),
                    B = !1,
                    u = function() {
                        B || (B = !0, f ? f(i) : i())
                    };
                c.__c = c.componentWillUnmount, c.componentWillUnmount = function() {
                    u(), c.__c && c.__c()
                };
                var i = function() {
                    var s;
                    if (!--l.__u)
                        for (l.__v.__k[0] = l.state.u, l.setState({
                                u: l.__b = null
                            }); s = l.o.pop();) s.forceUpdate()
                };
                l.__u++ || l.setState({
                    u: l.__b = l.__v.__k[0]
                }), s.then(u, u)
            }, U.prototype.render = function(s, c) {
                return this.__b && (this.__v.__k[0] = function compat_module_N(s) {
                    return s && ((s = compat_module_E({}, s)).__c = null, s.__k = s.__k && s.__k.map(compat_module_N)), s
                }(this.__b), this.__b = null), [h(m, null, c.u ? null : s.children), c.u && s.fallback]
            };
            var compat_module_P = function(s, c, l) {
                if (++l[1] === l[0] && s.l.delete(c), s.props.revealOrder && ("t" !== s.props.revealOrder[0] || !s.l.size))
                    for (l = s.i; l;) {
                        for (; l.length > 3;) l.pop()();
                        if (l[1] < l[0]) break;
                        s.i = l = l[2]
                    }
            };
            (O.prototype = new m).u = function(s) {
                var c = this,
                    l = compat_module_M(c.__v),
                    f = c.l.get(s);
                return f[0]++,
                    function(B) {
                        var u = function() {
                            c.props.revealOrder ? (f.push(B), compat_module_P(c, s, f)) : B()
                        };
                        l ? l(u) : u()
                    }
            }, O.prototype.render = function(s) {
                this.i = null, this.l = new Map;
                var c = x(s.children);
                s.revealOrder && "b" === s.revealOrder[0] && c.reverse();
                for (var l = c.length; l--;) this.l.set(c[l], this.i = [1, 0, this.i]);
                return s.children
            }, O.prototype.componentDidUpdate = O.prototype.componentDidMount = function() {
                var s = this;
                s.l.forEach(function(c, l) {
                    compat_module_P(s, l, c)
                })
            };
            var tm = function() {
                function n() {}
                var s = n.prototype;
                return s.getChildContext = function() {
                    return this.props.context
                }, s.render = function(s) {
                    return s.children
                }, n
            }();

            function compat_module_j(s) {
                var c = this,
                    l = s.container,
                    f = h(tm, {
                        context: c.context
                    }, s.vnode);
                return c.s && c.s !== l && (c.v.parentNode && c.s.removeChild(c.v), D(c.h), c.p = !1), s.vnode ? c.p ? (l.__k = c.__k, H(f, l), c.__k = l.__k) : (c.v = document.createTextNode(""), H("", l, W), l.appendChild(c.v), c.p = !0, c.s = l, H(f, l, c.v), c.__k = c.v.__k) : c.p && (c.v.parentNode && c.s.removeChild(c.v), D(c.h)), c.h = f, c.componentWillUnmount = function() {
                    c.v.parentNode && c.s.removeChild(c.v), D(c.h)
                }, null
            }

            function compat_module_z(s, c) {
                return h(compat_module_j, {
                    vnode: s,
                    container: c
                })
            }
            var tg = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
            m.prototype.isReactComponent = {};
            var t_ = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;

            function compat_module_T(s, c, l) {
                if (null == c.__k)
                    for (; c.firstChild;) c.removeChild(c.firstChild);
                return H(s, c), "function" == typeof l && l(), s ? s.__c : null
            }

            function V(s, c, l) {
                return H(s, c, W), "function" == typeof l && l(), s ? s.__c : null
            }
            var ty = f.event;

            function compat_module_I(s, c) {
                s["UNSAFE_" + c] && !s[c] && Object.defineProperty(s, c, {
                    configurable: !1,
                    get: function() {
                        return this["UNSAFE_" + c]
                    },
                    set: function(s) {
                        this["UNSAFE_" + c] = s
                    }
                })
            }
            f.event = function(s) {
                ty && (s = ty(s)), s.persist = function() {};
                var c = !1,
                    l = !1,
                    f = s.stopPropagation;
                s.stopPropagation = function() {
                    f.call(s), c = !0
                };
                var B = s.preventDefault;
                return s.preventDefault = function() {
                    B.call(s), l = !0
                }, s.isPropagationStopped = function() {
                    return c
                }, s.isDefaultPrevented = function() {
                    return l
                }, s.nativeEvent = s
            };
            var tv = {
                    configurable: !0,
                    get: function() {
                        return this.class
                    }
                },
                tw = f.vnode;
            f.vnode = function(s) {
                s.$$typeof = t_;
                var c, l, f, B = s.type,
                    R = s.props;
                if (B) {
                    if (R.class != R.className && (tv.enumerable = "className" in R, null != R.className && (R.class = R.className), Object.defineProperty(R, "className", tv)), "function" != typeof B) {
                        for (f in R.defaultValue && void 0 !== R.value && (R.value || 0 === R.value || (R.value = R.defaultValue), delete R.defaultValue), Array.isArray(R.value) && R.multiple && "select" === B && (x(R.children).forEach(function(s) {
                                -1 != R.value.indexOf(s.props.value) && (s.props.selected = !0)
                            }), delete R.value), R)
                            if (c = tg.test(f)) break;
                        if (c)
                            for (f in l = s.props = {}, R) l[tg.test(f) ? f.replace(/[A-Z0-9]/, "-$&").toLowerCase() : f] = R[f]
                    }! function() {
                        var c = s.type,
                            l = s.props;
                        if (l && "string" == typeof c) {
                            var f = {};
                            for (var B in l) /^on(Ani|Tra|Tou)/.test(B) && (l[B.toLowerCase()] = l[B], delete l[B]), f[B.toLowerCase()] = B;
                            if (f.ondoubleclick && (l.ondblclick = l[f.ondoubleclick], delete l[f.ondoubleclick]), f.onbeforeinput && (l.onbeforeinput = l[f.onbeforeinput], delete l[f.onbeforeinput]), f.onchange && ("textarea" === c || "input" === c.toLowerCase() && !/^fil|che|ra/i.test(l.type))) {
                                var R = f.oninput || "oninput";
                                l[R] || (l[R] = l[f.onchange], delete l[f.onchange])
                            }
                        }
                    }(), "function" == typeof B && !B.m && B.prototype && (compat_module_I(B.prototype, "componentWillMount"), compat_module_I(B.prototype, "componentWillReceiveProps"), compat_module_I(B.prototype, "componentWillUpdate"), B.m = !0)
                }
                tw && tw(s)
            };
            var tb = "16.8.0";

            function G(s) {
                return h.bind(null, s)
            }

            function J(s) {
                return !!s && s.$$typeof === t_
            }

            function K(s) {
                return J(s) ? L.apply(null, arguments) : s
            }

            function Q(s) {
                return !!s.__k && (H(null, s), !0)
            }

            function X(s) {
                return s && (s.base || 1 === s.nodeType && s) || null
            }
            var Y = function(s, c) {
                    return s(c)
                },
                tM = {
                    useState: hooks_module_m,
                    useReducer: hooks_module_p,
                    useEffect: hooks_module_l,
                    useLayoutEffect: hooks_module_y,
                    useRef: hooks_module_d,
                    useImperativeHandle: hooks_module_s,
                    useMemo: hooks_module_h,
                    useCallback: hooks_module_T,
                    useContext: hooks_module_w,
                    useDebugValue: hooks_module_A,
                    version: "16.8.0",
                    Children: td,
                    render: compat_module_T,
                    hydrate: compat_module_T,
                    unmountComponentAtNode: Q,
                    createPortal: compat_module_z,
                    createElement: h,
                    createContext: M,
                    createFactory: G,
                    cloneElement: K,
                    createRef: y,
                    Fragment: d,
                    isValidElement: J,
                    findDOMNode: X,
                    Component: m,
                    PureComponent: th,
                    memo: compat_module_,
                    forwardRef: S,
                    unstable_batchedUpdates: Y,
                    Suspense: U,
                    SuspenseList: O,
                    lazy: compat_module_L
                }
        },
        66227: function(s, c, l) {
            var f = l(46866),
                B = l(47349),
                R = l(10825),
                I = l(89106);

            function renderCanvas(s, c, l, R, I) {
                var P = [].slice.call(arguments, 1),
                    W = P.length,
                    $ = "function" == typeof P[W - 1];
                if (!$ && !f()) throw Error("Callback required as last argument");
                if ($) {
                    if (W < 2) throw Error("Too few arguments provided");
                    2 === W ? (I = l, l = c, c = R = void 0) : 3 === W && (c.getContext && void 0 === I ? (I = R, R = void 0) : (I = R, R = l, l = c, c = void 0))
                } else {
                    if (W < 1) throw Error("Too few arguments provided");
                    return 1 === W ? (l = c, c = R = void 0) : 2 !== W || c.getContext || (R = l, l = c, c = void 0), new Promise(function(f, I) {
                        try {
                            var P = B.create(l, R);
                            f(s(P, c, R))
                        } catch (s) {
                            I(s)
                        }
                    })
                }
                try {
                    var Z = B.create(l, R);
                    I(null, s(Z, c, R))
                } catch (s) {
                    I(s)
                }
            }
            c.create = B.create, c.toCanvas = renderCanvas.bind(null, R.render), c.toDataURL = renderCanvas.bind(null, R.renderToDataURL), c.toString = renderCanvas.bind(null, function(s, c, l) {
                return I.render(s, l)
            })
        },
        46866: function(s) {
            s.exports = function() {
                return "function" == typeof Promise && Promise.prototype && Promise.prototype.then
            }
        },
        26957: function(s, c, l) {
            var f = l(50353).getSymbolSize;
            c.getRowColCoords = function(s) {
                if (1 === s) return [];
                for (var c = Math.floor(s / 7) + 2, l = f(s), B = 145 === l ? 26 : 2 * Math.ceil((l - 13) / (2 * c - 2)), R = [l - 7], I = 1; I < c - 1; I++) R[I] = R[I - 1] - B;
                return R.push(6), R.reverse()
            }, c.getPositions = function(s) {
                for (var l = [], f = c.getRowColCoords(s), B = f.length, R = 0; R < B; R++)
                    for (var I = 0; I < B; I++)(0 !== R || 0 !== I) && (0 !== R || I !== B - 1) && (R !== B - 1 || 0 !== I) && l.push([f[R], f[I]]);
                return l
            }
        },
        43765: function(s, c, l) {
            var f = l(6382),
                B = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];

            function AlphanumericData(s) {
                this.mode = f.ALPHANUMERIC, this.data = s
            }
            AlphanumericData.getBitsLength = function(s) {
                return 11 * Math.floor(s / 2) + 6 * (s % 2)
            }, AlphanumericData.prototype.getLength = function() {
                return this.data.length
            }, AlphanumericData.prototype.getBitsLength = function() {
                return AlphanumericData.getBitsLength(this.data.length)
            }, AlphanumericData.prototype.write = function(s) {
                var c;
                for (c = 0; c + 2 <= this.data.length; c += 2) {
                    var l = 45 * B.indexOf(this.data[c]);
                    l += B.indexOf(this.data[c + 1]), s.put(l, 11)
                }
                this.data.length % 2 && s.put(B.indexOf(this.data[c]), 6)
            }, s.exports = AlphanumericData
        },
        49708: function(s) {
            function BitBuffer() {
                this.buffer = [], this.length = 0
            }
            BitBuffer.prototype = {
                get: function(s) {
                    return (this.buffer[Math.floor(s / 8)] >>> 7 - s % 8 & 1) == 1
                },
                put: function(s, c) {
                    for (var l = 0; l < c; l++) this.putBit((s >>> c - l - 1 & 1) == 1)
                },
                getLengthInBits: function() {
                    return this.length
                },
                putBit: function(s) {
                    var c = Math.floor(this.length / 8);
                    this.buffer.length <= c && this.buffer.push(0), s && (this.buffer[c] |= 128 >>> this.length % 8), this.length++
                }
            }, s.exports = BitBuffer
        },
        94595: function(s, c, l) {
            var f = l(82995);

            function BitMatrix(s) {
                if (!s || s < 1) throw Error("BitMatrix size must be defined and greater than 0");
                this.size = s, this.data = f.alloc(s * s), this.reservedBit = f.alloc(s * s)
            }
            BitMatrix.prototype.set = function(s, c, l, f) {
                var B = s * this.size + c;
                this.data[B] = l, f && (this.reservedBit[B] = !0)
            }, BitMatrix.prototype.get = function(s, c) {
                return this.data[s * this.size + c]
            }, BitMatrix.prototype.xor = function(s, c, l) {
                this.data[s * this.size + c] ^= l
            }, BitMatrix.prototype.isReserved = function(s, c) {
                return this.reservedBit[s * this.size + c]
            }, s.exports = BitMatrix
        },
        74102: function(s, c, l) {
            var f = l(82995),
                B = l(6382);

            function ByteData(s) {
                this.mode = B.BYTE, this.data = f.from(s)
            }
            ByteData.getBitsLength = function(s) {
                return 8 * s
            }, ByteData.prototype.getLength = function() {
                return this.data.length
            }, ByteData.prototype.getBitsLength = function() {
                return ByteData.getBitsLength(this.data.length)
            }, ByteData.prototype.write = function(s) {
                for (var c = 0, l = this.data.length; c < l; c++) s.put(this.data[c], 8)
            }, s.exports = ByteData
        },
        32596: function(s, c, l) {
            var f = l(42189),
                B = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81],
                R = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
            c.getBlocksCount = function(s, c) {
                switch (c) {
                    case f.L:
                        return B[(s - 1) * 4 + 0];
                    case f.M:
                        return B[(s - 1) * 4 + 1];
                    case f.Q:
                        return B[(s - 1) * 4 + 2];
                    case f.H:
                        return B[(s - 1) * 4 + 3];
                    default:
                        return
                }
            }, c.getTotalCodewordsCount = function(s, c) {
                switch (c) {
                    case f.L:
                        return R[(s - 1) * 4 + 0];
                    case f.M:
                        return R[(s - 1) * 4 + 1];
                    case f.Q:
                        return R[(s - 1) * 4 + 2];
                    case f.H:
                        return R[(s - 1) * 4 + 3];
                    default:
                        return
                }
            }
        },
        42189: function(s, c) {
            c.L = {
                bit: 1
            }, c.M = {
                bit: 0
            }, c.Q = {
                bit: 3
            }, c.H = {
                bit: 2
            }, c.isValid = function(s) {
                return s && void 0 !== s.bit && s.bit >= 0 && s.bit < 4
            }, c.from = function(s, l) {
                if (c.isValid(s)) return s;
                try {
                    return function(s) {
                        if ("string" != typeof s) throw Error("Param is not a string");
                        switch (s.toLowerCase()) {
                            case "l":
                            case "low":
                                return c.L;
                            case "m":
                            case "medium":
                                return c.M;
                            case "q":
                            case "quartile":
                                return c.Q;
                            case "h":
                            case "high":
                                return c.H;
                            default:
                                throw Error("Unknown EC Level: " + s)
                        }
                    }(s)
                } catch (s) {
                    return l
                }
            }
        },
        8787: function(s, c, l) {
            var f = l(50353).getSymbolSize;
            c.getPositions = function(s) {
                var c = f(s);
                return [
                    [0, 0],
                    [c - 7, 0],
                    [0, c - 7]
                ]
            }
        },
        26136: function(s, c, l) {
            var f = l(50353),
                B = f.getBCHDigit(1335);
            c.getEncodedBits = function(s, c) {
                for (var l = s.bit << 3 | c, R = l << 10; f.getBCHDigit(R) - B >= 0;) R ^= 1335 << f.getBCHDigit(R) - B;
                return (l << 10 | R) ^ 21522
            }
        },
        62539: function(s, c, l) {
            var f = l(82995),
                B = f.alloc(512),
                R = f.alloc(256);
            ! function() {
                for (var s = 1, c = 0; c < 255; c++) B[c] = s, R[s] = c, 256 & (s <<= 1) && (s ^= 285);
                for (c = 255; c < 512; c++) B[c] = B[c - 255]
            }(), c.log = function(s) {
                if (s < 1) throw Error("log(" + s + ")");
                return R[s]
            }, c.exp = function(s) {
                return B[s]
            }, c.mul = function(s, c) {
                return 0 === s || 0 === c ? 0 : B[R[s] + R[c]]
            }
        },
        74466: function(s, c, l) {
            var f = l(6382),
                B = l(50353);

            function KanjiData(s) {
                this.mode = f.KANJI, this.data = s
            }
            KanjiData.getBitsLength = function(s) {
                return 13 * s
            }, KanjiData.prototype.getLength = function() {
                return this.data.length
            }, KanjiData.prototype.getBitsLength = function() {
                return KanjiData.getBitsLength(this.data.length)
            }, KanjiData.prototype.write = function(s) {
                var c;
                for (c = 0; c < this.data.length; c++) {
                    var l = B.toSJIS(this.data[c]);
                    if (l >= 33088 && l <= 40956) l -= 33088;
                    else if (l >= 57408 && l <= 60351) l -= 49472;
                    else throw Error("Invalid SJIS character: " + this.data[c] + "\nMake sure your charset is UTF-8");
                    l = (l >>> 8 & 255) * 192 + (255 & l), s.put(l, 13)
                }
            }, s.exports = KanjiData
        },
        21732: function(s, c) {
            c.Patterns = {
                PATTERN000: 0,
                PATTERN001: 1,
                PATTERN010: 2,
                PATTERN011: 3,
                PATTERN100: 4,
                PATTERN101: 5,
                PATTERN110: 6,
                PATTERN111: 7
            };
            var l = {
                N1: 3,
                N2: 3,
                N3: 40,
                N4: 10
            };
            c.isValid = function(s) {
                return null != s && "" !== s && !isNaN(s) && s >= 0 && s <= 7
            }, c.from = function(s) {
                return c.isValid(s) ? parseInt(s, 10) : void 0
            }, c.getPenaltyN1 = function(s) {
                for (var c = s.size, f = 0, B = 0, R = 0, I = null, P = null, W = 0; W < c; W++) {
                    B = R = 0, I = P = null;
                    for (var $ = 0; $ < c; $++) {
                        var Z = s.get(W, $);
                        Z === I ? B++ : (B >= 5 && (f += l.N1 + (B - 5)), I = Z, B = 1), (Z = s.get($, W)) === P ? R++ : (R >= 5 && (f += l.N1 + (R - 5)), P = Z, R = 1)
                    }
                    B >= 5 && (f += l.N1 + (B - 5)), R >= 5 && (f += l.N1 + (R - 5))
                }
                return f
            }, c.getPenaltyN2 = function(s) {
                for (var c = s.size, f = 0, B = 0; B < c - 1; B++)
                    for (var R = 0; R < c - 1; R++) {
                        var I = s.get(B, R) + s.get(B, R + 1) + s.get(B + 1, R) + s.get(B + 1, R + 1);
                        (4 === I || 0 === I) && f++
                    }
                return f * l.N2
            }, c.getPenaltyN3 = function(s) {
                for (var c = s.size, f = 0, B = 0, R = 0, I = 0; I < c; I++) {
                    B = R = 0;
                    for (var P = 0; P < c; P++) B = B << 1 & 2047 | s.get(I, P), P >= 10 && (1488 === B || 93 === B) && f++, R = R << 1 & 2047 | s.get(P, I), P >= 10 && (1488 === R || 93 === R) && f++
                }
                return f * l.N3
            }, c.getPenaltyN4 = function(s) {
                for (var c = 0, f = s.data.length, B = 0; B < f; B++) c += s.data[B];
                return Math.abs(Math.ceil(100 * c / f / 5) - 10) * l.N4
            }, c.applyMask = function(s, l) {
                for (var f = l.size, B = 0; B < f; B++)
                    for (var R = 0; R < f; R++) l.isReserved(R, B) || l.xor(R, B, function(s, l, f) {
                        switch (s) {
                            case c.Patterns.PATTERN000:
                                return (l + f) % 2 == 0;
                            case c.Patterns.PATTERN001:
                                return l % 2 == 0;
                            case c.Patterns.PATTERN010:
                                return f % 3 == 0;
                            case c.Patterns.PATTERN011:
                                return (l + f) % 3 == 0;
                            case c.Patterns.PATTERN100:
                                return (Math.floor(l / 2) + Math.floor(f / 3)) % 2 == 0;
                            case c.Patterns.PATTERN101:
                                return l * f % 2 + l * f % 3 == 0;
                            case c.Patterns.PATTERN110:
                                return (l * f % 2 + l * f % 3) % 2 == 0;
                            case c.Patterns.PATTERN111:
                                return (l * f % 3 + (l + f) % 2) % 2 == 0;
                            default:
                                throw Error("bad maskPattern:" + s)
                        }
                    }(s, R, B))
            }, c.getBestMask = function(s, l) {
                for (var f = Object.keys(c.Patterns).length, B = 0, R = 1 / 0, I = 0; I < f; I++) {
                    l(I), c.applyMask(I, s);
                    var P = c.getPenaltyN1(s) + c.getPenaltyN2(s) + c.getPenaltyN3(s) + c.getPenaltyN4(s);
                    c.applyMask(I, s), P < R && (R = P, B = I)
                }
                return B
            }
        },
        6382: function(s, c, l) {
            var f = l(52706),
                B = l(12123);
            c.NUMERIC = {
                id: "Numeric",
                bit: 1,
                ccBits: [10, 12, 14]
            }, c.ALPHANUMERIC = {
                id: "Alphanumeric",
                bit: 2,
                ccBits: [9, 11, 13]
            }, c.BYTE = {
                id: "Byte",
                bit: 4,
                ccBits: [8, 16, 16]
            }, c.KANJI = {
                id: "Kanji",
                bit: 8,
                ccBits: [8, 10, 12]
            }, c.MIXED = {
                bit: -1
            }, c.getCharCountIndicator = function(s, c) {
                if (!s.ccBits) throw Error("Invalid mode: " + s);
                if (!f.isValid(c)) throw Error("Invalid version: " + c);
                return c >= 1 && c < 10 ? s.ccBits[0] : c < 27 ? s.ccBits[1] : s.ccBits[2]
            }, c.getBestModeForData = function(s) {
                return B.testNumeric(s) ? c.NUMERIC : B.testAlphanumeric(s) ? c.ALPHANUMERIC : B.testKanji(s) ? c.KANJI : c.BYTE
            }, c.toString = function(s) {
                if (s && s.id) return s.id;
                throw Error("Invalid mode")
            }, c.isValid = function(s) {
                return s && s.bit && s.ccBits
            }, c.from = function(s, l) {
                if (c.isValid(s)) return s;
                try {
                    return function(s) {
                        if ("string" != typeof s) throw Error("Param is not a string");
                        switch (s.toLowerCase()) {
                            case "numeric":
                                return c.NUMERIC;
                            case "alphanumeric":
                                return c.ALPHANUMERIC;
                            case "kanji":
                                return c.KANJI;
                            case "byte":
                                return c.BYTE;
                            default:
                                throw Error("Unknown mode: " + s)
                        }
                    }(s)
                } catch (s) {
                    return l
                }
            }
        },
        87446: function(s, c, l) {
            var f = l(6382);

            function NumericData(s) {
                this.mode = f.NUMERIC, this.data = s.toString()
            }
            NumericData.getBitsLength = function(s) {
                return 10 * Math.floor(s / 3) + (s % 3 ? s % 3 * 3 + 1 : 0)
            }, NumericData.prototype.getLength = function() {
                return this.data.length
            }, NumericData.prototype.getBitsLength = function() {
                return NumericData.getBitsLength(this.data.length)
            }, NumericData.prototype.write = function(s) {
                for (c = 0; c + 3 <= this.data.length; c += 3) l = parseInt(this.data.substr(c, 3), 10), s.put(l, 10);
                var c, l, f = this.data.length - c;
                f > 0 && (l = parseInt(this.data.substr(c), 10), s.put(l, 3 * f + 1))
            }, s.exports = NumericData
        },
        28773: function(s, c, l) {
            var f = l(82995),
                B = l(62539);
            c.mul = function(s, c) {
                for (var l = f.alloc(s.length + c.length - 1), R = 0; R < s.length; R++)
                    for (var I = 0; I < c.length; I++) l[R + I] ^= B.mul(s[R], c[I]);
                return l
            }, c.mod = function(s, c) {
                for (var l = f.from(s); l.length - c.length >= 0;) {
                    for (var R = l[0], I = 0; I < c.length; I++) l[I] ^= B.mul(c[I], R);
                    for (var P = 0; P < l.length && 0 === l[P];) P++;
                    l = l.slice(P)
                }
                return l
            }, c.generateECPolynomial = function(s) {
                for (var l = f.from([1]), R = 0; R < s; R++) l = c.mul(l, [1, B.exp(R)]);
                return l
            }
        },
        47349: function(s, c, l) {
            var f = l(82995),
                B = l(50353),
                R = l(42189),
                I = l(49708),
                P = l(94595),
                W = l(26957),
                $ = l(8787),
                Z = l(21732),
                tt = l(32596),
                te = l(21220),
                tn = l(15773),
                tr = l(26136),
                to = l(6382),
                ti = l(9978),
                ts = l(35242);

            function setupFormatInfo(s, c, l) {
                var f, B, R = s.size,
                    I = tr.getEncodedBits(c, l);
                for (f = 0; f < 15; f++) B = (I >> f & 1) == 1, f < 6 ? s.set(f, 8, B, !0) : f < 8 ? s.set(f + 1, 8, B, !0) : s.set(R - 15 + f, 8, B, !0), f < 8 ? s.set(8, R - f - 1, B, !0) : f < 9 ? s.set(8, 15 - f - 1 + 1, B, !0) : s.set(8, 15 - f - 1, B, !0);
                s.set(R - 8, 8, 1, !0)
            }
            c.create = function(s, c) {
                if (void 0 === s || "" === s) throw Error("No input text");
                var l, tr, ta = R.M;
                return void 0 !== c && (ta = R.from(c.errorCorrectionLevel, R.M), l = tn.from(c.version), tr = Z.from(c.maskPattern), c.toSJISFunc && B.setToSJISFunction(c.toSJISFunc)),
                    function(s, c, l, R) {
                        if (ts(s)) tr = ti.fromArray(s);
                        else if ("string" == typeof s) {
                            var tr, ta = c;
                            if (!ta) {
                                var tu = ti.rawSplit(s);
                                ta = tn.getBestVersionForData(tu, l)
                            }
                            tr = ti.fromString(s, ta || 40)
                        } else throw Error("Invalid data");
                        var tc = tn.getBestVersionForData(tr, l);
                        if (!tc) throw Error("The amount of data is too big to be stored in a QR Code");
                        if (c) {
                            if (c < tc) throw Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + tc + ".\n")
                        } else c = tc;
                        var tl = function(s, c, l) {
                                var R = new I;
                                l.forEach(function(c) {
                                    R.put(c.mode.bit, 4), R.put(c.getLength(), to.getCharCountIndicator(c.mode, s)), c.write(R)
                                });
                                var P = (B.getSymbolTotalCodewords(s) - tt.getTotalCodewordsCount(s, c)) * 8;
                                for (R.getLengthInBits() + 4 <= P && R.put(0, 4); R.getLengthInBits() % 8 != 0;) R.putBit(0);
                                for (var W = (P - R.getLengthInBits()) / 8, $ = 0; $ < W; $++) R.put($ % 2 ? 17 : 236, 8);
                                return function(s, c, l) {
                                    for (var R, I, P = B.getSymbolTotalCodewords(c), W = P - tt.getTotalCodewordsCount(c, l), $ = tt.getBlocksCount(c, l), Z = P % $, tn = $ - Z, tr = Math.floor(P / $), to = Math.floor(W / $), ti = to + 1, ts = tr - to, ta = new te(ts), tu = 0, tc = Array($), tl = Array($), th = 0, tf = f.from(s.buffer), td = 0; td < $; td++) {
                                        var tp = td < tn ? to : ti;
                                        tc[td] = tf.slice(tu, tu + tp), tl[td] = ta.encode(tc[td]), tu += tp, th = Math.max(th, tp)
                                    }
                                    var tm = f.alloc(P),
                                        tg = 0;
                                    for (R = 0; R < th; R++)
                                        for (I = 0; I < $; I++) R < tc[I].length && (tm[tg++] = tc[I][R]);
                                    for (R = 0; R < ts; R++)
                                        for (I = 0; I < $; I++) tm[tg++] = tl[I][R];
                                    return tm
                                }(R, s, c)
                            }(c, l, tr),
                            th = B.getSymbolSize(c),
                            tf = new P(th);
                        return function(s, c) {
                                for (var l = s.size, f = $.getPositions(c), B = 0; B < f.length; B++)
                                    for (var R = f[B][0], I = f[B][1], P = -1; P <= 7; P++)
                                        if (!(R + P <= -1) && !(l <= R + P))
                                            for (var W = -1; W <= 7; W++) I + W <= -1 || l <= I + W || (P >= 0 && P <= 6 && (0 === W || 6 === W) || W >= 0 && W <= 6 && (0 === P || 6 === P) || P >= 2 && P <= 4 && W >= 2 && W <= 4 ? s.set(R + P, I + W, !0, !0) : s.set(R + P, I + W, !1, !0))
                            }(tf, c),
                            function(s) {
                                for (var c = s.size, l = 8; l < c - 8; l++) {
                                    var f = l % 2 == 0;
                                    s.set(l, 6, f, !0), s.set(6, l, f, !0)
                                }
                            }(tf),
                            function(s, c) {
                                for (var l = W.getPositions(c), f = 0; f < l.length; f++)
                                    for (var B = l[f][0], R = l[f][1], I = -2; I <= 2; I++)
                                        for (var P = -2; P <= 2; P++) - 2 === I || 2 === I || -2 === P || 2 === P || 0 === I && 0 === P ? s.set(B + I, R + P, !0, !0) : s.set(B + I, R + P, !1, !0)
                            }(tf, c), setupFormatInfo(tf, l, 0), c >= 7 && function(s, c) {
                                for (var l, f, B, R = s.size, I = tn.getEncodedBits(c), P = 0; P < 18; P++) l = Math.floor(P / 3), f = P % 3 + R - 8 - 3, B = (I >> P & 1) == 1, s.set(l, f, B, !0), s.set(f, l, B, !0)
                            }(tf, c),
                            function(s, c) {
                                for (var l = s.size, f = -1, B = l - 1, R = 7, I = 0, P = l - 1; P > 0; P -= 2)
                                    for (6 === P && P--;;) {
                                        for (var W = 0; W < 2; W++)
                                            if (!s.isReserved(B, P - W)) {
                                                var $ = !1;
                                                I < c.length && ($ = (c[I] >>> R & 1) == 1), s.set(B, P - W, $), -1 == --R && (I++, R = 7)
                                            }
                                        if ((B += f) < 0 || l <= B) {
                                            B -= f, f = -f;
                                            break
                                        }
                                    }
                            }(tf, tl), isNaN(R) && (R = Z.getBestMask(tf, setupFormatInfo.bind(null, tf, l))), Z.applyMask(R, tf), setupFormatInfo(tf, l, R), {
                                modules: tf,
                                version: c,
                                errorCorrectionLevel: l,
                                maskPattern: R,
                                segments: tr
                            }
                    }(s, l, ta, tr)
            }
        },
        21220: function(s, c, l) {
            var f = l(82995),
                B = l(28773),
                R = l(39397).lW;

            function ReedSolomonEncoder(s) {
                this.genPoly = void 0, this.degree = s, this.degree && this.initialize(this.degree)
            }
            ReedSolomonEncoder.prototype.initialize = function(s) {
                this.degree = s, this.genPoly = B.generateECPolynomial(this.degree)
            }, ReedSolomonEncoder.prototype.encode = function(s) {
                if (!this.genPoly) throw Error("Encoder not initialized");
                var c = f.alloc(this.degree),
                    l = R.concat([s, c], s.length + this.degree),
                    I = B.mod(l, this.genPoly),
                    P = this.degree - I.length;
                if (P > 0) {
                    var W = f.alloc(this.degree);
                    return I.copy(W, P), W
                }
                return I
            }, s.exports = ReedSolomonEncoder
        },
        12123: function(s, c) {
            var l = "[0-9]+",
                f = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",
                B = "(?:(?![A-Z0-9 $%*+\\-./:]|" + (f = f.replace(/u/g, "\\u")) + ")(?:.|[\r\n]))+";
            c.KANJI = RegExp(f, "g"), c.BYTE_KANJI = RegExp("[^A-Z0-9 $%*+\\-./:]+", "g"), c.BYTE = RegExp(B, "g"), c.NUMERIC = RegExp(l, "g"), c.ALPHANUMERIC = RegExp("[A-Z $%*+\\-./:]+", "g");
            var R = RegExp("^" + f + "$"),
                I = RegExp("^" + l + "$"),
                P = RegExp("^[A-Z0-9 $%*+\\-./:]+$");
            c.testKanji = function(s) {
                return R.test(s)
            }, c.testNumeric = function(s) {
                return I.test(s)
            }, c.testAlphanumeric = function(s) {
                return P.test(s)
            }
        },
        9978: function(s, c, l) {
            var f = l(6382),
                B = l(87446),
                R = l(43765),
                I = l(74102),
                P = l(74466),
                W = l(12123),
                $ = l(50353),
                Z = l(96711);

            function getStringByteLength(s) {
                return unescape(encodeURIComponent(s)).length
            }

            function getSegments(s, c, l) {
                for (var f, B = []; null !== (f = s.exec(l));) B.push({
                    data: f[0],
                    index: f.index,
                    mode: c,
                    length: f[0].length
                });
                return B
            }

            function getSegmentsFromString(s) {
                var c, l, B = getSegments(W.NUMERIC, f.NUMERIC, s),
                    R = getSegments(W.ALPHANUMERIC, f.ALPHANUMERIC, s);
                return $.isKanjiModeEnabled() ? (c = getSegments(W.BYTE, f.BYTE, s), l = getSegments(W.KANJI, f.KANJI, s)) : (c = getSegments(W.BYTE_KANJI, f.BYTE, s), l = []), B.concat(R, c, l).sort(function(s, c) {
                    return s.index - c.index
                }).map(function(s) {
                    return {
                        data: s.data,
                        mode: s.mode,
                        length: s.length
                    }
                })
            }

            function getSegmentBitsLength(s, c) {
                switch (c) {
                    case f.NUMERIC:
                        return B.getBitsLength(s);
                    case f.ALPHANUMERIC:
                        return R.getBitsLength(s);
                    case f.KANJI:
                        return P.getBitsLength(s);
                    case f.BYTE:
                        return I.getBitsLength(s)
                }
            }

            function buildSingleSegment(s, c) {
                var l, W = f.getBestModeForData(s);
                if ((l = f.from(c, W)) !== f.BYTE && l.bit < W.bit) throw Error('"' + s + '" cannot be encoded with mode ' + f.toString(l) + ".\n Suggested mode is: " + f.toString(W));
                switch (l !== f.KANJI || $.isKanjiModeEnabled() || (l = f.BYTE), l) {
                    case f.NUMERIC:
                        return new B(s);
                    case f.ALPHANUMERIC:
                        return new R(s);
                    case f.KANJI:
                        return new P(s);
                    case f.BYTE:
                        return new I(s)
                }
            }
            c.fromArray = function(s) {
                return s.reduce(function(s, c) {
                    return "string" == typeof c ? s.push(buildSingleSegment(c, null)) : c.data && s.push(buildSingleSegment(c.data, c.mode)), s
                }, [])
            }, c.fromString = function(s, l) {
                for (var B = function(s, c) {
                        for (var l = {}, B = {
                                start: {}
                            }, R = ["start"], I = 0; I < s.length; I++) {
                            for (var P = s[I], W = [], $ = 0; $ < P.length; $++) {
                                var Z = P[$],
                                    tt = "" + I + $;
                                W.push(tt), l[tt] = {
                                    node: Z,
                                    lastCount: 0
                                }, B[tt] = {};
                                for (var te = 0; te < R.length; te++) {
                                    var tn = R[te];
                                    l[tn] && l[tn].node.mode === Z.mode ? (B[tn][tt] = getSegmentBitsLength(l[tn].lastCount + Z.length, Z.mode) - getSegmentBitsLength(l[tn].lastCount, Z.mode), l[tn].lastCount += Z.length) : (l[tn] && (l[tn].lastCount = Z.length), B[tn][tt] = getSegmentBitsLength(Z.length, Z.mode) + 4 + f.getCharCountIndicator(Z.mode, c))
                                }
                            }
                            R = W
                        }
                        for (te = 0; te < R.length; te++) B[R[te]].end = 0;
                        return {
                            map: B,
                            table: l
                        }
                    }(function(s) {
                        for (var c = [], l = 0; l < s.length; l++) {
                            var B = s[l];
                            switch (B.mode) {
                                case f.NUMERIC:
                                    c.push([B, {
                                        data: B.data,
                                        mode: f.ALPHANUMERIC,
                                        length: B.length
                                    }, {
                                        data: B.data,
                                        mode: f.BYTE,
                                        length: B.length
                                    }]);
                                    break;
                                case f.ALPHANUMERIC:
                                    c.push([B, {
                                        data: B.data,
                                        mode: f.BYTE,
                                        length: B.length
                                    }]);
                                    break;
                                case f.KANJI:
                                    c.push([B, {
                                        data: B.data,
                                        mode: f.BYTE,
                                        length: getStringByteLength(B.data)
                                    }]);
                                    break;
                                case f.BYTE:
                                    c.push([{
                                        data: B.data,
                                        mode: f.BYTE,
                                        length: getStringByteLength(B.data)
                                    }])
                            }
                        }
                        return c
                    }(getSegmentsFromString(s, $.isKanjiModeEnabled())), l), R = Z.find_path(B.map, "start", "end"), I = [], P = 1; P < R.length - 1; P++) I.push(B.table[R[P]].node);
                return c.fromArray(I.reduce(function(s, c) {
                    var l = s.length - 1 >= 0 ? s[s.length - 1] : null;
                    return l && l.mode === c.mode ? s[s.length - 1].data += c.data : s.push(c), s
                }, []))
            }, c.rawSplit = function(s) {
                return c.fromArray(getSegmentsFromString(s, $.isKanjiModeEnabled()))
            }
        },
        50353: function(s, c) {
            var l, f = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
            c.getSymbolSize = function(s) {
                if (!s) throw Error('"version" cannot be null or undefined');
                if (s < 1 || s > 40) throw Error('"version" should be in range from 1 to 40');
                return 4 * s + 17
            }, c.getSymbolTotalCodewords = function(s) {
                return f[s]
            }, c.getBCHDigit = function(s) {
                for (var c = 0; 0 !== s;) c++, s >>>= 1;
                return c
            }, c.setToSJISFunction = function(s) {
                if ("function" != typeof s) throw Error('"toSJISFunc" is not a valid function.');
                l = s
            }, c.isKanjiModeEnabled = function() {
                return void 0 !== l
            }, c.toSJIS = function(s) {
                return l(s)
            }
        },
        52706: function(s, c) {
            c.isValid = function(s) {
                return !isNaN(s) && s >= 1 && s <= 40
            }
        },
        15773: function(s, c, l) {
            var f = l(50353),
                B = l(32596),
                R = l(42189),
                I = l(6382),
                P = l(52706),
                W = l(35242),
                $ = f.getBCHDigit(7973);

            function getReservedBitsCount(s, c) {
                return I.getCharCountIndicator(s, c) + 4
            }
            c.from = function(s, c) {
                return P.isValid(s) ? parseInt(s, 10) : c
            }, c.getCapacity = function(s, c, l) {
                if (!P.isValid(s)) throw Error("Invalid QR Code version");
                void 0 === l && (l = I.BYTE);
                var R = (f.getSymbolTotalCodewords(s) - B.getTotalCodewordsCount(s, c)) * 8;
                if (l === I.MIXED) return R;
                var W = R - getReservedBitsCount(l, s);
                switch (l) {
                    case I.NUMERIC:
                        return Math.floor(W / 10 * 3);
                    case I.ALPHANUMERIC:
                        return Math.floor(W / 11 * 2);
                    case I.KANJI:
                        return Math.floor(W / 13);
                    case I.BYTE:
                    default:
                        return Math.floor(W / 8)
                }
            }, c.getBestVersionForData = function(s, l) {
                var f, B = R.from(l, R.M);
                if (W(s)) {
                    if (s.length > 1) return function(s, l) {
                        for (var f = 1; f <= 40; f++)
                            if (function(s, c) {
                                    var l = 0;
                                    return s.forEach(function(s) {
                                        var f = getReservedBitsCount(s.mode, c);
                                        l += f + s.getBitsLength()
                                    }), l
                                }(s, f) <= c.getCapacity(f, l, I.MIXED)) return f
                    }(s, B);
                    if (0 === s.length) return 1;
                    f = s[0]
                } else f = s;
                return function(s, l, f) {
                    for (var B = 1; B <= 40; B++)
                        if (l <= c.getCapacity(B, f, s)) return B
                }(f.mode, f.getLength(), B)
            }, c.getEncodedBits = function(s) {
                if (!P.isValid(s) || s < 7) throw Error("Invalid QR Code version");
                for (var c = s << 12; f.getBCHDigit(c) - $ >= 0;) c ^= 7973 << f.getBCHDigit(c) - $;
                return s << 12 | c
            }
        },
        10825: function(s, c, l) {
            var f = l(76023);
            c.render = function(s, c, l) {
                var B, R = l,
                    I = c;
                void 0 !== R || c && c.getContext || (R = c, c = void 0), c || (I = function() {
                    try {
                        return document.createElement("canvas")
                    } catch (s) {
                        throw Error("You need to specify a canvas element")
                    }
                }()), R = f.getOptions(R);
                var P = f.getImageWidth(s.modules.size, R),
                    W = I.getContext("2d"),
                    $ = W.createImageData(P, P);
                return f.qrToImageData($.data, s, R), B = I, W.clearRect(0, 0, B.width, B.height), B.style || (B.style = {}), B.height = P, B.width = P, B.style.height = P + "px", B.style.width = P + "px", W.putImageData($, 0, 0), I
            }, c.renderToDataURL = function(s, l, f) {
                var B = f;
                void 0 !== B || l && l.getContext || (B = l, l = void 0), B || (B = {});
                var R = c.render(s, l, B),
                    I = B.type || "image/png",
                    P = B.rendererOpts || {};
                return R.toDataURL(I, P.quality)
            }
        },
        89106: function(s, c, l) {
            var f = l(76023);

            function getColorAttrib(s, c) {
                var l = s.a / 255,
                    f = c + '="' + s.hex + '"';
                return l < 1 ? f + " " + c + '-opacity="' + l.toFixed(2).slice(1) + '"' : f
            }

            function svgCmd(s, c, l) {
                var f = s + c;
                return void 0 !== l && (f += " " + l), f
            }
            c.render = function(s, c, l) {
                var B = f.getOptions(c),
                    R = s.modules.size,
                    I = s.modules.data,
                    P = R + 2 * B.margin,
                    W = B.color.light.a ? "<path " + getColorAttrib(B.color.light, "fill") + ' d="M0 0h' + P + "v" + P + 'H0z"/>' : "",
                    $ = "<path " + getColorAttrib(B.color.dark, "stroke") + ' d="' + function(s, c, l) {
                        for (var f = "", B = 0, R = !1, I = 0, P = 0; P < s.length; P++) {
                            var W = Math.floor(P % c),
                                $ = Math.floor(P / c);
                            W || R || (R = !0), s[P] ? (I++, P > 0 && W > 0 && s[P - 1] || (f += R ? svgCmd("M", W + l, .5 + $ + l) : svgCmd("m", B, 0), B = 0, R = !1), W + 1 < c && s[P + 1] || (f += svgCmd("h", I), I = 0)) : B++
                        }
                        return f
                    }(I, R, B.margin) + '"/>',
                    Z = '<svg xmlns="http://www.w3.org/2000/svg" ' + (B.width ? 'width="' + B.width + '" height="' + B.width + '" ' : "") + ('viewBox="0 0 ' + P) + " " + P + '" shape-rendering="crispEdges">' + W + $ + "</svg>\n";
                return "function" == typeof l && l(null, Z), Z
            }
        },
        76023: function(s, c) {
            function hex2rgba(s) {
                if ("number" == typeof s && (s = s.toString()), "string" != typeof s) throw Error("Color should be defined as hex string");
                var c = s.slice().replace("#", "").split("");
                if (c.length < 3 || 5 === c.length || c.length > 8) throw Error("Invalid hex color: " + s);
                (3 === c.length || 4 === c.length) && (c = Array.prototype.concat.apply([], c.map(function(s) {
                    return [s, s]
                }))), 6 === c.length && c.push("F", "F");
                var l = parseInt(c.join(""), 16);
                return {
                    r: l >> 24 & 255,
                    g: l >> 16 & 255,
                    b: l >> 8 & 255,
                    a: 255 & l,
                    hex: "#" + c.slice(0, 6).join("")
                }
            }
            c.getOptions = function(s) {
                s || (s = {}), s.color || (s.color = {});
                var c = void 0 === s.margin || null === s.margin || s.margin < 0 ? 4 : s.margin,
                    l = s.width && s.width >= 21 ? s.width : void 0,
                    f = s.scale || 4;
                return {
                    width: l,
                    scale: l ? 4 : f,
                    margin: c,
                    color: {
                        dark: hex2rgba(s.color.dark || "#000000ff"),
                        light: hex2rgba(s.color.light || "#ffffffff")
                    },
                    type: s.type,
                    rendererOpts: s.rendererOpts || {}
                }
            }, c.getScale = function(s, c) {
                return c.width && c.width >= s + 2 * c.margin ? c.width / (s + 2 * c.margin) : c.scale
            }, c.getImageWidth = function(s, l) {
                var f = c.getScale(s, l);
                return Math.floor((s + 2 * l.margin) * f)
            }, c.qrToImageData = function(s, l, f) {
                for (var B = l.modules.size, R = l.modules.data, I = c.getScale(B, f), P = Math.floor((B + 2 * f.margin) * I), W = f.margin * I, $ = [f.color.light, f.color.dark], Z = 0; Z < P; Z++)
                    for (var tt = 0; tt < P; tt++) {
                        var te = (Z * P + tt) * 4,
                            tn = f.color.light;
                        Z >= W && tt >= W && Z < P - W && tt < P - W && (tn = $[R[Math.floor((Z - W) / I) * B + Math.floor((tt - W) / I)] ? 1 : 0]), s[te++] = tn.r, s[te++] = tn.g, s[te++] = tn.b, s[te] = tn.a
                    }
            }
        },
        82995: function(s, c, l) {
            "use strict";
            var f = l(35242);
            Buffer.TYPED_ARRAY_SUPPORT = function() {
                try {
                    var s = new Uint8Array(1);
                    return s.__proto__ = {
                        __proto__: Uint8Array.prototype,
                        foo: function() {
                            return 42
                        }
                    }, 42 === s.foo()
                } catch (s) {
                    return !1
                }
            }();
            var B = Buffer.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;

            function Buffer(s, c, l) {
                return Buffer.TYPED_ARRAY_SUPPORT || this instanceof Buffer ? "number" == typeof s ? allocUnsafe(this, s) : function(s, c, l, f) {
                    if ("number" == typeof c) throw TypeError('"value" argument must not be a number');
                    if ("undefined" != typeof ArrayBuffer && c instanceof ArrayBuffer) return function(s, c, l, f) {
                        var B;
                        if (l < 0 || c.byteLength < l) throw RangeError("'offset' is out of bounds");
                        if (c.byteLength < l + (f || 0)) throw RangeError("'length' is out of bounds");
                        return B = void 0 === l && void 0 === f ? new Uint8Array(c) : void 0 === f ? new Uint8Array(c, l) : new Uint8Array(c, l, f), Buffer.TYPED_ARRAY_SUPPORT ? B.__proto__ = Buffer.prototype : B = fromArrayLike(s, B), B
                    }(s, c, l, f);
                    if ("string" == typeof c) {
                        var B, R, I;
                        return (I = (R = createBuffer(s, B = 0 | byteLength(c))).write(c)) !== B && (R = R.slice(0, I)), R
                    }
                    return function(s, c) {
                        if (Buffer.isBuffer(c)) {
                            var l, f = 0 | checked(c.length),
                                B = createBuffer(s, f);
                            return 0 === B.length || c.copy(B, 0, 0, f), B
                        }
                        if (c) {
                            if ("undefined" != typeof ArrayBuffer && c.buffer instanceof ArrayBuffer || "length" in c) return "number" != typeof c.length || (l = c.length) != l ? createBuffer(s, 0) : fromArrayLike(s, c);
                            if ("Buffer" === c.type && Array.isArray(c.data)) return fromArrayLike(s, c.data)
                        }
                        throw TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
                    }(s, c)
                }(this, s, c, l) : new Buffer(s, c, l)
            }

            function checked(s) {
                if (s >= B) throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + B.toString(16) + " bytes");
                return 0 | s
            }

            function createBuffer(s, c) {
                var l;
                return Buffer.TYPED_ARRAY_SUPPORT ? (l = new Uint8Array(c)).__proto__ = Buffer.prototype : (null === (l = s) && (l = new Buffer(c)), l.length = c), l
            }

            function allocUnsafe(s, c) {
                var l = createBuffer(s, c < 0 ? 0 : 0 | checked(c));
                if (!Buffer.TYPED_ARRAY_SUPPORT)
                    for (var f = 0; f < c; ++f) l[f] = 0;
                return l
            }

            function fromArrayLike(s, c) {
                for (var l = c.length < 0 ? 0 : 0 | checked(c.length), f = createBuffer(s, l), B = 0; B < l; B += 1) f[B] = 255 & c[B];
                return f
            }

            function utf8ToBytes(s, c) {
                c = c || 1 / 0;
                for (var l, f = s.length, B = null, R = [], I = 0; I < f; ++I) {
                    if ((l = s.charCodeAt(I)) > 55295 && l < 57344) {
                        if (!B) {
                            if (l > 56319 || I + 1 === f) {
                                (c -= 3) > -1 && R.push(239, 191, 189);
                                continue
                            }
                            B = l;
                            continue
                        }
                        if (l < 56320) {
                            (c -= 3) > -1 && R.push(239, 191, 189), B = l;
                            continue
                        }
                        l = (B - 55296 << 10 | l - 56320) + 65536
                    } else B && (c -= 3) > -1 && R.push(239, 191, 189);
                    if (B = null, l < 128) {
                        if ((c -= 1) < 0) break;
                        R.push(l)
                    } else if (l < 2048) {
                        if ((c -= 2) < 0) break;
                        R.push(l >> 6 | 192, 63 & l | 128)
                    } else if (l < 65536) {
                        if ((c -= 3) < 0) break;
                        R.push(l >> 12 | 224, l >> 6 & 63 | 128, 63 & l | 128)
                    } else if (l < 1114112) {
                        if ((c -= 4) < 0) break;
                        R.push(l >> 18 | 240, l >> 12 & 63 | 128, l >> 6 & 63 | 128, 63 & l | 128)
                    } else throw Error("Invalid code point")
                }
                return R
            }

            function byteLength(s) {
                return Buffer.isBuffer(s) ? s.length : "undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(s) || s instanceof ArrayBuffer) ? s.byteLength : ("string" != typeof s && (s = "" + s), 0 === s.length) ? 0 : utf8ToBytes(s).length
            }
            Buffer.TYPED_ARRAY_SUPPORT && (Buffer.prototype.__proto__ = Uint8Array.prototype, Buffer.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && Buffer[Symbol.species] === Buffer && Object.defineProperty(Buffer, Symbol.species, {
                value: null,
                configurable: !0,
                enumerable: !1,
                writable: !1
            })), Buffer.prototype.write = function(s, c, l) {
                void 0 === c ? (l = this.length, c = 0) : void 0 === l && "string" == typeof c ? (l = this.length, c = 0) : isFinite(c) && (c |= 0, isFinite(l) ? l |= 0 : l = void 0);
                var f, B, R = this.length - c;
                if ((void 0 === l || l > R) && (l = R), s.length > 0 && (l < 0 || c < 0) || c > this.length) throw RangeError("Attempt to write outside buffer bounds");
                return f = c, B = l,
                    function(s, c, l, f) {
                        for (var B = 0; B < f && !(B + l >= c.length) && !(B >= s.length); ++B) c[B + l] = s[B];
                        return B
                    }(utf8ToBytes(s, this.length - f), this, f, B)
            }, Buffer.prototype.slice = function(s, c) {
                var l, f = this.length;
                if (s = ~~s, c = void 0 === c ? f : ~~c, s < 0 ? (s += f) < 0 && (s = 0) : s > f && (s = f), c < 0 ? (c += f) < 0 && (c = 0) : c > f && (c = f), c < s && (c = s), Buffer.TYPED_ARRAY_SUPPORT)(l = this.subarray(s, c)).__proto__ = Buffer.prototype;
                else {
                    var B = c - s;
                    l = new Buffer(B, void 0);
                    for (var R = 0; R < B; ++R) l[R] = this[R + s]
                }
                return l
            }, Buffer.prototype.copy = function(s, c, l, f) {
                if (l || (l = 0), f || 0 === f || (f = this.length), c >= s.length && (c = s.length), c || (c = 0), f > 0 && f < l && (f = l), f === l || 0 === s.length || 0 === this.length) return 0;
                if (c < 0) throw RangeError("targetStart out of bounds");
                if (l < 0 || l >= this.length) throw RangeError("sourceStart out of bounds");
                if (f < 0) throw RangeError("sourceEnd out of bounds");
                f > this.length && (f = this.length), s.length - c < f - l && (f = s.length - c + l);
                var B, R = f - l;
                if (this === s && l < c && c < f)
                    for (B = R - 1; B >= 0; --B) s[B + c] = this[B + l];
                else if (R < 1e3 || !Buffer.TYPED_ARRAY_SUPPORT)
                    for (B = 0; B < R; ++B) s[B + c] = this[B + l];
                else Uint8Array.prototype.set.call(s, this.subarray(l, l + R), c);
                return R
            }, Buffer.prototype.fill = function(s, c, l) {
                if ("string" == typeof s) {
                    if ("string" == typeof c ? (c = 0, l = this.length) : "string" == typeof l && (l = this.length), 1 === s.length) {
                        var f, B = s.charCodeAt(0);
                        B < 256 && (s = B)
                    }
                } else "number" == typeof s && (s &= 255);
                if (c < 0 || this.length < c || this.length < l) throw RangeError("Out of range index");
                if (l <= c) return this;
                if (c >>>= 0, l = void 0 === l ? this.length : l >>> 0, s || (s = 0), "number" == typeof s)
                    for (f = c; f < l; ++f) this[f] = s;
                else {
                    var R = Buffer.isBuffer(s) ? s : new Buffer(s),
                        I = R.length;
                    for (f = 0; f < l - c; ++f) this[f + c] = R[f % I]
                }
                return this
            }, Buffer.concat = function(s, c) {
                if (!f(s)) throw TypeError('"list" argument must be an Array of Buffers');
                if (0 === s.length) return createBuffer(null, 0);
                if (void 0 === c)
                    for (l = 0, c = 0; l < s.length; ++l) c += s[l].length;
                var l, B = allocUnsafe(null, c),
                    R = 0;
                for (l = 0; l < s.length; ++l) {
                    var I = s[l];
                    if (!Buffer.isBuffer(I)) throw TypeError('"list" argument must be an Array of Buffers');
                    I.copy(B, R), R += I.length
                }
                return B
            }, Buffer.byteLength = byteLength, Buffer.prototype._isBuffer = !0, Buffer.isBuffer = function(s) {
                return !!(null != s && s._isBuffer)
            }, s.exports.alloc = function(s) {
                var c = new Buffer(s);
                return c.fill(0), c
            }, s.exports.from = function(s) {
                return new Buffer(s)
            }
        },
        74227: function(s, c, l) {
            "use strict";
            let f = l(67475),
                B = l(31706),
                R = l(97093),
                isNullOrUndefined = s => null == s;

            function validateArrayFormatSeparator(s) {
                if ("string" != typeof s || 1 !== s.length) throw TypeError("arrayFormatSeparator must be single character string")
            }

            function encode(s, c) {
                return c.encode ? c.strict ? f(s) : encodeURIComponent(s) : s
            }

            function decode(s, c) {
                return c.decode ? B(s) : s
            }

            function removeHash(s) {
                let c = s.indexOf("#");
                return -1 !== c && (s = s.slice(0, c)), s
            }

            function extract(s) {
                s = removeHash(s);
                let c = s.indexOf("?");
                return -1 === c ? "" : s.slice(c + 1)
            }

            function parseValue(s, c) {
                return c.parseNumbers && !Number.isNaN(Number(s)) && "string" == typeof s && "" !== s.trim() ? s = Number(s) : c.parseBooleans && null !== s && ("true" === s.toLowerCase() || "false" === s.toLowerCase()) && (s = "true" === s.toLowerCase()), s
            }

            function parse(s, c) {
                validateArrayFormatSeparator((c = Object.assign({
                    decode: !0,
                    sort: !0,
                    arrayFormat: "none",
                    arrayFormatSeparator: ",",
                    parseNumbers: !1,
                    parseBooleans: !1
                }, c)).arrayFormatSeparator);
                let l = function(s) {
                        let c;
                        switch (s.arrayFormat) {
                            case "index":
                                return (s, l, f) => {
                                    if (c = /\[(\d*)\]$/.exec(s), s = s.replace(/\[\d*\]$/, ""), !c) {
                                        f[s] = l;
                                        return
                                    }
                                    void 0 === f[s] && (f[s] = {}), f[s][c[1]] = l
                                };
                            case "bracket":
                                return (s, l, f) => {
                                    if (c = /(\[\])$/.exec(s), s = s.replace(/\[\]$/, ""), !c) {
                                        f[s] = l;
                                        return
                                    }
                                    if (void 0 === f[s]) {
                                        f[s] = [l];
                                        return
                                    }
                                    f[s] = [].concat(f[s], l)
                                };
                            case "comma":
                            case "separator":
                                return (c, l, f) => {
                                    let B = "string" == typeof l && l.split("").indexOf(s.arrayFormatSeparator) > -1,
                                        R = B ? l.split(s.arrayFormatSeparator).map(c => decode(c, s)) : null === l ? l : decode(l, s);
                                    f[c] = R
                                };
                            default:
                                return (s, c, l) => {
                                    if (void 0 === l[s]) {
                                        l[s] = c;
                                        return
                                    }
                                    l[s] = [].concat(l[s], c)
                                }
                        }
                    }(c),
                    f = Object.create(null);
                if ("string" != typeof s || !(s = s.trim().replace(/^[?#&]/, ""))) return f;
                for (let B of s.split("&")) {
                    let [s, I] = R(c.decode ? B.replace(/\+/g, " ") : B, "=");
                    I = void 0 === I ? null : ["comma", "separator"].includes(c.arrayFormat) ? I : decode(I, c), l(decode(s, c), I, f)
                }
                for (let s of Object.keys(f)) {
                    let l = f[s];
                    if ("object" == typeof l && null !== l)
                        for (let s of Object.keys(l)) l[s] = parseValue(l[s], c);
                    else f[s] = parseValue(l, c)
                }
                return !1 === c.sort ? f : (!0 === c.sort ? Object.keys(f).sort() : Object.keys(f).sort(c.sort)).reduce((s, c) => {
                    let l = f[c];
                    return l && "object" == typeof l && !Array.isArray(l) ? s[c] = function keysSorter(s) {
                        return Array.isArray(s) ? s.sort() : "object" == typeof s ? keysSorter(Object.keys(s)).sort((s, c) => Number(s) - Number(c)).map(c => s[c]) : s
                    }(l) : s[c] = l, s
                }, Object.create(null))
            }
            c.extract = extract, c.parse = parse, c.stringify = (s, c) => {
                if (!s) return "";
                validateArrayFormatSeparator((c = Object.assign({
                    encode: !0,
                    strict: !0,
                    arrayFormat: "none",
                    arrayFormatSeparator: ","
                }, c)).arrayFormatSeparator);
                let shouldFilter = l => c.skipNull && isNullOrUndefined(s[l]) || c.skipEmptyString && "" === s[l],
                    l = function(s) {
                        switch (s.arrayFormat) {
                            case "index":
                                return c => (l, f) => {
                                    let B = l.length;
                                    return void 0 === f || s.skipNull && null === f || s.skipEmptyString && "" === f ? l : null === f ? [...l, [encode(c, s), "[", B, "]"].join("")] : [...l, [encode(c, s), "[", encode(B, s), "]=", encode(f, s)].join("")]
                                };
                            case "bracket":
                                return c => (l, f) => void 0 === f || s.skipNull && null === f || s.skipEmptyString && "" === f ? l : null === f ? [...l, [encode(c, s), "[]"].join("")] : [...l, [encode(c, s), "[]=", encode(f, s)].join("")];
                            case "comma":
                            case "separator":
                                return c => (l, f) => null == f || 0 === f.length ? l : 0 === l.length ? [
                                    [encode(c, s), "=", encode(f, s)].join("")
                                ] : [
                                    [l, encode(f, s)].join(s.arrayFormatSeparator)
                                ];
                            default:
                                return c => (l, f) => void 0 === f || s.skipNull && null === f || s.skipEmptyString && "" === f ? l : null === f ? [...l, encode(c, s)] : [...l, [encode(c, s), "=", encode(f, s)].join("")]
                        }
                    }(c),
                    f = {};
                for (let c of Object.keys(s)) shouldFilter(c) || (f[c] = s[c]);
                let B = Object.keys(f);
                return !1 !== c.sort && B.sort(c.sort), B.map(f => {
                    let B = s[f];
                    return void 0 === B ? "" : null === B ? encode(f, c) : Array.isArray(B) ? B.reduce(l(f), []).join("&") : encode(f, c) + "=" + encode(B, c)
                }).filter(s => s.length > 0).join("&")
            }, c.parseUrl = (s, c) => {
                c = Object.assign({
                    decode: !0
                }, c);
                let [l, f] = R(s, "#");
                return Object.assign({
                    url: l.split("?")[0] || "",
                    query: parse(extract(s), c)
                }, c && c.parseFragmentIdentifier && f ? {
                    fragmentIdentifier: decode(f, c)
                } : {})
            }, c.stringifyUrl = (s, l) => {
                l = Object.assign({
                    encode: !0,
                    strict: !0
                }, l);
                let f = removeHash(s.url).split("?")[0] || "",
                    B = c.extract(s.url),
                    R = c.parse(B, {
                        sort: !1
                    }),
                    I = Object.assign(R, s.query),
                    P = c.stringify(I, l);
                P && (P = `?${P}`);
                let W = function(s) {
                    let c = "",
                        l = s.indexOf("#");
                    return -1 !== l && (c = s.slice(l)), c
                }(s.url);
                return s.fragmentIdentifier && (W = `#${encode(s.fragmentIdentifier,l)}`), `${f}${P}${W}`
            }
        },
        97093: function(s) {
            "use strict";
            s.exports = (s, c) => {
                if (!("string" == typeof s && "string" == typeof c)) throw TypeError("Expected the arguments to be of type `string`");
                if ("" === c) return [s];
                let l = s.indexOf(c);
                return -1 === l ? [s] : [s.slice(0, l), s.slice(l + c.length)]
            }
        },
        67475: function(s) {
            "use strict";
            s.exports = s => encodeURIComponent(s).replace(/[!'()*]/g, s => `%${s.charCodeAt(0).toString(16).toUpperCase()}`)
        },
        53921: function(s) {
            s.exports = function() {
                var s = document.getSelection();
                if (!s.rangeCount) return function() {};
                for (var c = document.activeElement, l = [], f = 0; f < s.rangeCount; f++) l.push(s.getRangeAt(f));
                switch (c.tagName.toUpperCase()) {
                    case "INPUT":
                    case "TEXTAREA":
                        c.blur();
                        break;
                    default:
                        c = null
                }
                return s.removeAllRanges(),
                    function() {
                        "Caret" === s.type && s.removeAllRanges(), s.rangeCount || l.forEach(function(c) {
                            s.addRange(c)
                        }), c && c.focus()
                    }
            }
        },
        1702: function(s, c, l) {
            "use strict";
            l.r(c), l.d(c, {
                __assign: function() {
                    return __assign
                },
                __asyncDelegator: function() {
                    return __asyncDelegator
                },
                __asyncGenerator: function() {
                    return __asyncGenerator
                },
                __asyncValues: function() {
                    return __asyncValues
                },
                __await: function() {
                    return __await
                },
                __awaiter: function() {
                    return __awaiter
                },
                __classPrivateFieldGet: function() {
                    return __classPrivateFieldGet
                },
                __classPrivateFieldSet: function() {
                    return __classPrivateFieldSet
                },
                __createBinding: function() {
                    return __createBinding
                },
                __decorate: function() {
                    return __decorate
                },
                __exportStar: function() {
                    return __exportStar
                },
                __extends: function() {
                    return __extends
                },
                __generator: function() {
                    return __generator
                },
                __importDefault: function() {
                    return __importDefault
                },
                __importStar: function() {
                    return __importStar
                },
                __makeTemplateObject: function() {
                    return __makeTemplateObject
                },
                __metadata: function() {
                    return __metadata
                },
                __param: function() {
                    return __param
                },
                __read: function() {
                    return __read
                },
                __rest: function() {
                    return __rest
                },
                __spread: function() {
                    return __spread
                },
                __spreadArrays: function() {
                    return __spreadArrays
                },
                __values: function() {
                    return __values
                }
            });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation.

            Permission to use, copy, modify, and/or distribute this software for any
            purpose with or without fee is hereby granted.

            THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
            REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
            AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
            INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
            LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
            OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
            PERFORMANCE OF THIS SOFTWARE.
            ***************************************************************************** */
            var extendStatics = function(s, c) {
                return (extendStatics = Object.setPrototypeOf || ({
                    __proto__: []
                }) instanceof Array && function(s, c) {
                    s.__proto__ = c
                } || function(s, c) {
                    for (var l in c) c.hasOwnProperty(l) && (s[l] = c[l])
                })(s, c)
            };

            function __extends(s, c) {
                function __() {
                    this.constructor = s
                }
                extendStatics(s, c), s.prototype = null === c ? Object.create(c) : (__.prototype = c.prototype, new __)
            }
            var __assign = function() {
                return (__assign = Object.assign || function(s) {
                    for (var c, l = 1, f = arguments.length; l < f; l++)
                        for (var B in c = arguments[l]) Object.prototype.hasOwnProperty.call(c, B) && (s[B] = c[B]);
                    return s
                }).apply(this, arguments)
            };

            function __rest(s, c) {
                var l = {};
                for (var f in s) Object.prototype.hasOwnProperty.call(s, f) && 0 > c.indexOf(f) && (l[f] = s[f]);
                if (null != s && "function" == typeof Object.getOwnPropertySymbols)
                    for (var B = 0, f = Object.getOwnPropertySymbols(s); B < f.length; B++) 0 > c.indexOf(f[B]) && Object.prototype.propertyIsEnumerable.call(s, f[B]) && (l[f[B]] = s[f[B]]);
                return l
            }

            function __decorate(s, c, l, f) {
                var B, R = arguments.length,
                    I = R < 3 ? c : null === f ? f = Object.getOwnPropertyDescriptor(c, l) : f;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) I = Reflect.decorate(s, c, l, f);
                else
                    for (var P = s.length - 1; P >= 0; P--)(B = s[P]) && (I = (R < 3 ? B(I) : R > 3 ? B(c, l, I) : B(c, l)) || I);
                return R > 3 && I && Object.defineProperty(c, l, I), I
            }

            function __param(s, c) {
                return function(l, f) {
                    c(l, f, s)
                }
            }

            function __metadata(s, c) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(s, c)
            }

            function __awaiter(s, c, l, f) {
                return new(l || (l = Promise))(function(B, R) {
                    function fulfilled(s) {
                        try {
                            step(f.next(s))
                        } catch (s) {
                            R(s)
                        }
                    }

                    function rejected(s) {
                        try {
                            step(f.throw(s))
                        } catch (s) {
                            R(s)
                        }
                    }

                    function step(s) {
                        var c;
                        s.done ? B(s.value) : ((c = s.value) instanceof l ? c : new l(function(s) {
                            s(c)
                        })).then(fulfilled, rejected)
                    }
                    step((f = f.apply(s, c || [])).next())
                })
            }

            function __generator(s, c) {
                var l, f, B, R, I = {
                    label: 0,
                    sent: function() {
                        if (1 & B[0]) throw B[1];
                        return B[1]
                    },
                    trys: [],
                    ops: []
                };
                return R = {
                    next: verb(0),
                    throw: verb(1),
                    return: verb(2)
                }, "function" == typeof Symbol && (R[Symbol.iterator] = function() {
                    return this
                }), R;

                function verb(R) {
                    return function(P) {
                        return function(R) {
                            if (l) throw TypeError("Generator is already executing.");
                            for (; I;) try {
                                if (l = 1, f && (B = 2 & R[0] ? f.return : R[0] ? f.throw || ((B = f.return) && B.call(f), 0) : f.next) && !(B = B.call(f, R[1])).done) return B;
                                switch (f = 0, B && (R = [2 & R[0], B.value]), R[0]) {
                                    case 0:
                                    case 1:
                                        B = R;
                                        break;
                                    case 4:
                                        return I.label++, {
                                            value: R[1],
                                            done: !1
                                        };
                                    case 5:
                                        I.label++, f = R[1], R = [0];
                                        continue;
                                    case 7:
                                        R = I.ops.pop(), I.trys.pop();
                                        continue;
                                    default:
                                        if (!(B = (B = I.trys).length > 0 && B[B.length - 1]) && (6 === R[0] || 2 === R[0])) {
                                            I = 0;
                                            continue
                                        }
                                        if (3 === R[0] && (!B || R[1] > B[0] && R[1] < B[3])) {
                                            I.label = R[1];
                                            break
                                        }
                                        if (6 === R[0] && I.label < B[1]) {
                                            I.label = B[1], B = R;
                                            break
                                        }
                                        if (B && I.label < B[2]) {
                                            I.label = B[2], I.ops.push(R);
                                            break
                                        }
                                        B[2] && I.ops.pop(), I.trys.pop();
                                        continue
                                }
                                R = c.call(s, I)
                            } catch (s) {
                                R = [6, s], f = 0
                            } finally {
                                l = B = 0
                            }
                            if (5 & R[0]) throw R[1];
                            return {
                                value: R[0] ? R[1] : void 0,
                                done: !0
                            }
                        }([R, P])
                    }
                }
            }

            function __createBinding(s, c, l, f) {
                void 0 === f && (f = l), s[f] = c[l]
            }

            function __exportStar(s, c) {
                for (var l in s) "default" === l || c.hasOwnProperty(l) || (c[l] = s[l])
            }

            function __values(s) {
                var c = "function" == typeof Symbol && Symbol.iterator,
                    l = c && s[c],
                    f = 0;
                if (l) return l.call(s);
                if (s && "number" == typeof s.length) return {
                    next: function() {
                        return s && f >= s.length && (s = void 0), {
                            value: s && s[f++],
                            done: !s
                        }
                    }
                };
                throw TypeError(c ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function __read(s, c) {
                var l = "function" == typeof Symbol && s[Symbol.iterator];
                if (!l) return s;
                var f, B, R = l.call(s),
                    I = [];
                try {
                    for (;
                        (void 0 === c || c-- > 0) && !(f = R.next()).done;) I.push(f.value)
                } catch (s) {
                    B = {
                        error: s
                    }
                } finally {
                    try {
                        f && !f.done && (l = R.return) && l.call(R)
                    } finally {
                        if (B) throw B.error
                    }
                }
                return I
            }

            function __spread() {
                for (var s = [], c = 0; c < arguments.length; c++) s = s.concat(__read(arguments[c]));
                return s
            }

            function __spreadArrays() {
                for (var s = 0, c = 0, l = arguments.length; c < l; c++) s += arguments[c].length;
                for (var f = Array(s), B = 0, c = 0; c < l; c++)
                    for (var R = arguments[c], I = 0, P = R.length; I < P; I++, B++) f[B] = R[I];
                return f
            }

            function __await(s) {
                return this instanceof __await ? (this.v = s, this) : new __await(s)
            }

            function __asyncGenerator(s, c, l) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var f, B = l.apply(s, c || []),
                    R = [];
                return f = {}, verb("next"), verb("throw"), verb("return"), f[Symbol.asyncIterator] = function() {
                    return this
                }, f;

                function verb(s) {
                    B[s] && (f[s] = function(c) {
                        return new Promise(function(l, f) {
                            R.push([s, c, l, f]) > 1 || resume(s, c)
                        })
                    })
                }

                function resume(s, c) {
                    try {
                        var l;
                        (l = B[s](c)).value instanceof __await ? Promise.resolve(l.value.v).then(fulfill, reject) : settle(R[0][2], l)
                    } catch (s) {
                        settle(R[0][3], s)
                    }
                }

                function fulfill(s) {
                    resume("next", s)
                }

                function reject(s) {
                    resume("throw", s)
                }

                function settle(s, c) {
                    s(c), R.shift(), R.length && resume(R[0][0], R[0][1])
                }
            }

            function __asyncDelegator(s) {
                var c, l;
                return c = {}, verb("next"), verb("throw", function(s) {
                    throw s
                }), verb("return"), c[Symbol.iterator] = function() {
                    return this
                }, c;

                function verb(f, B) {
                    c[f] = s[f] ? function(c) {
                        return (l = !l) ? {
                            value: __await(s[f](c)),
                            done: "return" === f
                        } : B ? B(c) : c
                    } : B
                }
            }

            function __asyncValues(s) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var c, l = s[Symbol.asyncIterator];
                return l ? l.call(s) : (s = __values(s), c = {}, verb("next"), verb("throw"), verb("return"), c[Symbol.asyncIterator] = function() {
                    return this
                }, c);

                function verb(l) {
                    c[l] = s[l] && function(c) {
                        return new Promise(function(f, B) {
                            ! function(s, c, l, f) {
                                Promise.resolve(f).then(function(c) {
                                    s({
                                        value: c,
                                        done: l
                                    })
                                }, c)
                            }(f, B, (c = s[l](c)).done, c.value)
                        })
                    }
                }
            }

            function __makeTemplateObject(s, c) {
                return Object.defineProperty ? Object.defineProperty(s, "raw", {
                    value: c
                }) : s.raw = c, s
            }

            function __importStar(s) {
                if (s && s.__esModule) return s;
                var c = {};
                if (null != s)
                    for (var l in s) Object.hasOwnProperty.call(s, l) && (c[l] = s[l]);
                return c.default = s, c
            }

            function __importDefault(s) {
                return s && s.__esModule ? s : {
                    default: s
                }
            }

            function __classPrivateFieldGet(s, c) {
                if (!c.has(s)) throw TypeError("attempted to get private field on non-instance");
                return c.get(s)
            }

            function __classPrivateFieldSet(s, c, l) {
                if (!c.has(s)) throw TypeError("attempted to set private field on non-instance");
                return c.set(s, l), l
            }
        },
        31159: function(s, c, l) {
            var f = l(97115).Buffer,
                B = l(85341).strict;
            s.exports = function(s) {
                if (!B(s)) return f.from(s);
                var c = f.from(s.buffer);
                return s.byteLength !== s.buffer.byteLength && (c = c.slice(s.byteOffset, s.byteOffset + s.byteLength)), c
            }
        },
        83708: function(s) {
            "use strict";
            s.exports = function() {
                throw Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
            }
        }
    }
]);