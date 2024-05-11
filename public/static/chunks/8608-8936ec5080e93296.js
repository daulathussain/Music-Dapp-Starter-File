(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8608], {
        66017: function(t, e, i) {
            var n, r = i(9389);
            ! function() {
                "use strict";
                var e = "input is invalid type",
                    o = "object" == typeof window,
                    a = o ? window : {};
                a.JS_SHA256_NO_WINDOW && (o = !1);
                var s = !o && "object" == typeof self,
                    u = !a.JS_SHA256_NO_NODE_JS && "object" == typeof r && r.versions && r.versions.node;
                u ? a = i.g : s && (a = self);
                var l = !a.JS_SHA256_NO_COMMON_JS && t.exports,
                    c = i.amdO,
                    d = !a.JS_SHA256_NO_ARRAY_BUFFER && "undefined" != typeof ArrayBuffer,
                    f = "0123456789abcdef".split(""),
                    g = [-2147483648, 8388608, 32768, 128],
                    h = [24, 16, 8, 0],
                    p = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
                    v = ["hex", "array", "digest", "arrayBuffer"],
                    y = [];
                (a.JS_SHA256_NO_NODE_JS || !Array.isArray) && (Array.isArray = function(t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                }), d && (a.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) && (ArrayBuffer.isView = function(t) {
                    return "object" == typeof t && t.buffer && t.buffer.constructor === ArrayBuffer
                });
                var createOutputMethod = function(t, e) {
                        return function(i) {
                            return new Sha256(e, !0).update(i)[t]()
                        }
                    },
                    createMethod = function(t) {
                        var e = createOutputMethod("hex", t);
                        u && (e = nodeWrap(e, t)), e.create = function() {
                            return new Sha256(t)
                        }, e.update = function(t) {
                            return e.create().update(t)
                        };
                        for (var i = 0; i < v.length; ++i) {
                            var n = v[i];
                            e[n] = createOutputMethod(n, t)
                        }
                        return e
                    },
                    nodeWrap = function(t, n) {
                        var r, o = i(85884),
                            s = i(17589).Buffer,
                            u = n ? "sha224" : "sha256";
                        return r = s.from && !a.JS_SHA256_NO_BUFFER_FROM ? s.from : function(t) {
                                return new s(t)
                            },
                            function(i) {
                                if ("string" == typeof i) return o.createHash(u).update(i, "utf8").digest("hex");
                                if (null == i) throw Error(e);
                                return i.constructor === ArrayBuffer && (i = new Uint8Array(i)), Array.isArray(i) || ArrayBuffer.isView(i) || i.constructor === s ? o.createHash(u).update(r(i)).digest("hex") : t(i)
                            }
                    },
                    createHmacOutputMethod = function(t, e) {
                        return function(i, n) {
                            return new HmacSha256(i, e, !0).update(n)[t]()
                        }
                    },
                    createHmacMethod = function(t) {
                        var e = createHmacOutputMethod("hex", t);
                        e.create = function(e) {
                            return new HmacSha256(e, t)
                        }, e.update = function(t, i) {
                            return e.create(t).update(i)
                        };
                        for (var i = 0; i < v.length; ++i) {
                            var n = v[i];
                            e[n] = createHmacOutputMethod(n, t)
                        }
                        return e
                    };

                function Sha256(t, e) {
                    e ? (y[0] = y[16] = y[1] = y[2] = y[3] = y[4] = y[5] = y[6] = y[7] = y[8] = y[9] = y[10] = y[11] = y[12] = y[13] = y[14] = y[15] = 0, this.blocks = y) : this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], t ? (this.h0 = 3238371032, this.h1 = 914150663, this.h2 = 812702999, this.h3 = 4144912697, this.h4 = 4290775857, this.h5 = 1750603025, this.h6 = 1694076839, this.h7 = 3204075428) : (this.h0 = 1779033703, this.h1 = 3144134277, this.h2 = 1013904242, this.h3 = 2773480762, this.h4 = 1359893119, this.h5 = 2600822924, this.h6 = 528734635, this.h7 = 1541459225), this.block = this.start = this.bytes = this.hBytes = 0, this.finalized = this.hashed = !1, this.first = !0, this.is224 = t
                }

                function HmacSha256(t, i, n) {
                    var r, o = typeof t;
                    if ("string" === o) {
                        var a, s = [],
                            u = t.length,
                            l = 0;
                        for (r = 0; r < u; ++r)(a = t.charCodeAt(r)) < 128 ? s[l++] = a : (a < 2048 ? s[l++] = 192 | a >> 6 : (a < 55296 || a >= 57344 ? s[l++] = 224 | a >> 12 : (a = 65536 + ((1023 & a) << 10 | 1023 & t.charCodeAt(++r)), s[l++] = 240 | a >> 18, s[l++] = 128 | a >> 12 & 63), s[l++] = 128 | a >> 6 & 63), s[l++] = 128 | 63 & a);
                        t = s
                    } else if ("object" === o) {
                        if (null === t) throw Error(e);
                        if (d && t.constructor === ArrayBuffer) t = new Uint8Array(t);
                        else if (!Array.isArray(t) && (!d || !ArrayBuffer.isView(t))) throw Error(e)
                    } else throw Error(e);
                    t.length > 64 && (t = new Sha256(i, !0).update(t).array());
                    var c = [],
                        f = [];
                    for (r = 0; r < 64; ++r) {
                        var g = t[r] || 0;
                        c[r] = 92 ^ g, f[r] = 54 ^ g
                    }
                    Sha256.call(this, i, n), this.update(f), this.oKeyPad = c, this.inner = !0, this.sharedMemory = n
                }
                Sha256.prototype.update = function(t) {
                    if (!this.finalized) {
                        var i, n = typeof t;
                        if ("string" !== n) {
                            if ("object" === n) {
                                if (null === t) throw Error(e);
                                if (d && t.constructor === ArrayBuffer) t = new Uint8Array(t);
                                else if (!Array.isArray(t) && (!d || !ArrayBuffer.isView(t))) throw Error(e)
                            } else throw Error(e);
                            i = !0
                        }
                        for (var r, o, a = 0, s = t.length, u = this.blocks; a < s;) {
                            if (this.hashed && (this.hashed = !1, u[0] = this.block, u[16] = u[1] = u[2] = u[3] = u[4] = u[5] = u[6] = u[7] = u[8] = u[9] = u[10] = u[11] = u[12] = u[13] = u[14] = u[15] = 0), i)
                                for (o = this.start; a < s && o < 64; ++a) u[o >> 2] |= t[a] << h[3 & o++];
                            else
                                for (o = this.start; a < s && o < 64; ++a)(r = t.charCodeAt(a)) < 128 ? u[o >> 2] |= r << h[3 & o++] : (r < 2048 ? u[o >> 2] |= (192 | r >> 6) << h[3 & o++] : (r < 55296 || r >= 57344 ? u[o >> 2] |= (224 | r >> 12) << h[3 & o++] : (r = 65536 + ((1023 & r) << 10 | 1023 & t.charCodeAt(++a)), u[o >> 2] |= (240 | r >> 18) << h[3 & o++], u[o >> 2] |= (128 | r >> 12 & 63) << h[3 & o++]), u[o >> 2] |= (128 | r >> 6 & 63) << h[3 & o++]), u[o >> 2] |= (128 | 63 & r) << h[3 & o++]);
                            this.lastByteIndex = o, this.bytes += o - this.start, o >= 64 ? (this.block = u[16], this.start = o - 64, this.hash(), this.hashed = !0) : this.start = o
                        }
                        return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this
                    }
                }, Sha256.prototype.finalize = function() {
                    if (!this.finalized) {
                        this.finalized = !0;
                        var t = this.blocks,
                            e = this.lastByteIndex;
                        t[16] = this.block, t[e >> 2] |= g[3 & e], this.block = t[16], e >= 56 && (this.hashed || this.hash(), t[0] = this.block, t[16] = t[1] = t[2] = t[3] = t[4] = t[5] = t[6] = t[7] = t[8] = t[9] = t[10] = t[11] = t[12] = t[13] = t[14] = t[15] = 0), t[14] = this.hBytes << 3 | this.bytes >>> 29, t[15] = this.bytes << 3, this.hash()
                    }
                }, Sha256.prototype.hash = function() {
                    var t, e, i, n, r, o, a, s, u, l, c = this.h0,
                        d = this.h1,
                        f = this.h2,
                        g = this.h3,
                        h = this.h4,
                        v = this.h5,
                        y = this.h6,
                        S = this.h7,
                        m = this.blocks;
                    for (t = 16; t < 64; ++t) e = ((r = m[t - 15]) >>> 7 | r << 25) ^ (r >>> 18 | r << 14) ^ r >>> 3, i = ((r = m[t - 2]) >>> 17 | r << 15) ^ (r >>> 19 | r << 13) ^ r >>> 10, m[t] = m[t - 16] + e + m[t - 7] + i << 0;
                    for (t = 0, l = d & f; t < 64; t += 4) this.first ? (this.is224 ? (a = 300032, S = (r = m[0] - 1413257819) - 150054599 << 0, g = r + 24177077 << 0) : (a = 704751109, S = (r = m[0] - 210244248) - 1521486534 << 0, g = r + 143694565 << 0), this.first = !1) : (e = (c >>> 2 | c << 30) ^ (c >>> 13 | c << 19) ^ (c >>> 22 | c << 10), i = (h >>> 6 | h << 26) ^ (h >>> 11 | h << 21) ^ (h >>> 25 | h << 7), n = (a = c & d) ^ c & f ^ l, r = S + i + (h & v ^ ~h & y) + p[t] + m[t], o = e + n, S = g + r << 0, g = r + o << 0), e = (g >>> 2 | g << 30) ^ (g >>> 13 | g << 19) ^ (g >>> 22 | g << 10), i = (S >>> 6 | S << 26) ^ (S >>> 11 | S << 21) ^ (S >>> 25 | S << 7), n = (s = g & c) ^ g & d ^ a, r = y + i + (S & h ^ ~S & v) + p[t + 1] + m[t + 1], o = e + n, y = f + r << 0, e = ((f = r + o << 0) >>> 2 | f << 30) ^ (f >>> 13 | f << 19) ^ (f >>> 22 | f << 10), i = (y >>> 6 | y << 26) ^ (y >>> 11 | y << 21) ^ (y >>> 25 | y << 7), n = (u = f & g) ^ f & c ^ s, r = v + i + (y & S ^ ~y & h) + p[t + 2] + m[t + 2], o = e + n, v = d + r << 0, e = ((d = r + o << 0) >>> 2 | d << 30) ^ (d >>> 13 | d << 19) ^ (d >>> 22 | d << 10), i = (v >>> 6 | v << 26) ^ (v >>> 11 | v << 21) ^ (v >>> 25 | v << 7), n = (l = d & f) ^ d & g ^ u, r = h + i + (v & y ^ ~v & S) + p[t + 3] + m[t + 3], o = e + n, h = c + r << 0, c = r + o << 0, this.chromeBugWorkAround = !0;
                    this.h0 = this.h0 + c << 0, this.h1 = this.h1 + d << 0, this.h2 = this.h2 + f << 0, this.h3 = this.h3 + g << 0, this.h4 = this.h4 + h << 0, this.h5 = this.h5 + v << 0, this.h6 = this.h6 + y << 0, this.h7 = this.h7 + S << 0
                }, Sha256.prototype.hex = function() {
                    this.finalize();
                    var t = this.h0,
                        e = this.h1,
                        i = this.h2,
                        n = this.h3,
                        r = this.h4,
                        o = this.h5,
                        a = this.h6,
                        s = this.h7,
                        u = f[t >> 28 & 15] + f[t >> 24 & 15] + f[t >> 20 & 15] + f[t >> 16 & 15] + f[t >> 12 & 15] + f[t >> 8 & 15] + f[t >> 4 & 15] + f[15 & t] + f[e >> 28 & 15] + f[e >> 24 & 15] + f[e >> 20 & 15] + f[e >> 16 & 15] + f[e >> 12 & 15] + f[e >> 8 & 15] + f[e >> 4 & 15] + f[15 & e] + f[i >> 28 & 15] + f[i >> 24 & 15] + f[i >> 20 & 15] + f[i >> 16 & 15] + f[i >> 12 & 15] + f[i >> 8 & 15] + f[i >> 4 & 15] + f[15 & i] + f[n >> 28 & 15] + f[n >> 24 & 15] + f[n >> 20 & 15] + f[n >> 16 & 15] + f[n >> 12 & 15] + f[n >> 8 & 15] + f[n >> 4 & 15] + f[15 & n] + f[r >> 28 & 15] + f[r >> 24 & 15] + f[r >> 20 & 15] + f[r >> 16 & 15] + f[r >> 12 & 15] + f[r >> 8 & 15] + f[r >> 4 & 15] + f[15 & r] + f[o >> 28 & 15] + f[o >> 24 & 15] + f[o >> 20 & 15] + f[o >> 16 & 15] + f[o >> 12 & 15] + f[o >> 8 & 15] + f[o >> 4 & 15] + f[15 & o] + f[a >> 28 & 15] + f[a >> 24 & 15] + f[a >> 20 & 15] + f[a >> 16 & 15] + f[a >> 12 & 15] + f[a >> 8 & 15] + f[a >> 4 & 15] + f[15 & a];
                    return this.is224 || (u += f[s >> 28 & 15] + f[s >> 24 & 15] + f[s >> 20 & 15] + f[s >> 16 & 15] + f[s >> 12 & 15] + f[s >> 8 & 15] + f[s >> 4 & 15] + f[15 & s]), u
                }, Sha256.prototype.toString = Sha256.prototype.hex, Sha256.prototype.digest = function() {
                    this.finalize();
                    var t = this.h0,
                        e = this.h1,
                        i = this.h2,
                        n = this.h3,
                        r = this.h4,
                        o = this.h5,
                        a = this.h6,
                        s = this.h7,
                        u = [t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, i >> 24 & 255, i >> 16 & 255, i >> 8 & 255, 255 & i, n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, 255 & n, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, 255 & r, o >> 24 & 255, o >> 16 & 255, o >> 8 & 255, 255 & o, a >> 24 & 255, a >> 16 & 255, a >> 8 & 255, 255 & a];
                    return this.is224 || u.push(s >> 24 & 255, s >> 16 & 255, s >> 8 & 255, 255 & s), u
                }, Sha256.prototype.array = Sha256.prototype.digest, Sha256.prototype.arrayBuffer = function() {
                    this.finalize();
                    var t = new ArrayBuffer(this.is224 ? 28 : 32),
                        e = new DataView(t);
                    return e.setUint32(0, this.h0), e.setUint32(4, this.h1), e.setUint32(8, this.h2), e.setUint32(12, this.h3), e.setUint32(16, this.h4), e.setUint32(20, this.h5), e.setUint32(24, this.h6), this.is224 || e.setUint32(28, this.h7), t
                }, HmacSha256.prototype = new Sha256, HmacSha256.prototype.finalize = function() {
                    if (Sha256.prototype.finalize.call(this), this.inner) {
                        this.inner = !1;
                        var t = this.array();
                        Sha256.call(this, this.is224, this.sharedMemory), this.update(this.oKeyPad), this.update(t), Sha256.prototype.finalize.call(this)
                    }
                };
                var S = createMethod();
                S.sha256 = S, S.sha224 = createMethod(!0), S.sha256.hmac = createHmacMethod(), S.sha224.hmac = createHmacMethod(!0), l ? t.exports = S : (a.sha256 = S.sha256, a.sha224 = S.sha224, c && void 0 !== (n = (function() {
                    return S
                }).call(S, i, S, t)) && (t.exports = n))
            }()
        },
        43228: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = function() {
                function DynamicConfig(t, e, i, n, r, o, a, s, u, l) {
                    void 0 === r && (r = []), void 0 === o && (o = ""), void 0 === a && (a = null), void 0 === s && (s = null), void 0 === u && (u = null), void 0 === l && (l = null), this.onDefaultValueFallback = null, this.name = t, this.value = JSON.parse(JSON.stringify(null != e ? e : {})), this.ruleID = null != i ? i : "", this.secondaryExposures = r, this.allocatedExperimentName = o, this.evaluationDetails = n, this.onDefaultValueFallback = a, this.groupName = s, this.idType = u, this.isExperimentActive = l
                }
                return DynamicConfig.prototype.get = function(t, e, i) {
                    var n, r, o = this.getValue(t, e);
                    if (null == o) return e;
                    var a = Array.isArray(e) ? "array" : typeof e,
                        s = Array.isArray(o) ? "array" : typeof o;
                    return i ? i(o) ? o : (null === (n = this.onDefaultValueFallback) || void 0 === n || n.call(this, this, t, a, s), e) : null == e || a === s ? o : (null === (r = this.onDefaultValueFallback) || void 0 === r || r.call(this, this, t, a, s), e)
                }, DynamicConfig.prototype.getValue = function(t, e) {
                    return null == t ? this.value : (null == e && (e = null), null == this.value[t]) ? e : this.value[t]
                }, DynamicConfig.prototype.getRuleID = function() {
                    return this.ruleID
                }, DynamicConfig.prototype.getGroupName = function() {
                    return this.groupName
                }, DynamicConfig.prototype.getIDType = function() {
                    return this.idType
                }, DynamicConfig.prototype.getName = function() {
                    return this.name
                }, DynamicConfig.prototype.getEvaluationDetails = function() {
                    return this.evaluationDetails
                }, DynamicConfig.prototype._getSecondaryExposures = function() {
                    return this.secondaryExposures
                }, DynamicConfig.prototype._getAllocatedExperimentName = function() {
                    return this.allocatedExperimentName
                }, DynamicConfig.prototype.getIsExperimentActive = function() {
                    return this.isExperimentActive
                }, DynamicConfig
            }();
            e.default = i
        },
        76741: function(t, e, i) {
            "use strict";
            var n = this && this.__awaiter || function(t, e, i, n) {
                    return new(i || (i = Promise))(function(r, o) {
                        function fulfilled(t) {
                            try {
                                step(n.next(t))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function rejected(t) {
                            try {
                                step(n.throw(t))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function step(t) {
                            var e;
                            t.done ? r(t.value) : ((e = t.value) instanceof i ? e : new i(function(t) {
                                t(e)
                            })).then(fulfilled, rejected)
                        }
                        step((n = n.apply(t, e || [])).next())
                    })
                },
                r = this && this.__generator || function(t, e) {
                    var i, n, r, o, a = {
                        label: 0,
                        sent: function() {
                            if (1 & r[0]) throw r[1];
                            return r[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: verb(0),
                        throw: verb(1),
                        return: verb(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function verb(o) {
                        return function(s) {
                            return function(o) {
                                if (i) throw TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (i = 1, n && (r = 2 & o[0] ? n.return : o[0] ? n.throw || ((r = n.return) && r.call(n), 0) : n.next) && !(r = r.call(n, o[1])).done) return r;
                                    switch (n = 0, r && (o = [2 & o[0], r.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            r = o;
                                            break;
                                        case 4:
                                            return a.label++, {
                                                value: o[1],
                                                done: !1
                                            };
                                        case 5:
                                            a.label++, n = o[1], o = [0];
                                            continue;
                                        case 7:
                                            o = a.ops.pop(), a.trys.pop();
                                            continue;
                                        default:
                                            if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                                a.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && a.label < r[1]) {
                                                a.label = r[1], r = o;
                                                break
                                            }
                                            if (r && a.label < r[2]) {
                                                a.label = r[2], a.ops.push(o);
                                                break
                                            }
                                            r[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    o = e.call(t, a)
                                } catch (t) {
                                    o = [6, t], n = 0
                                } finally {
                                    i = r = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, s])
                        }
                    }
                },
                o = this && this.__importDefault || function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.ExceptionEndpoint = void 0;
            var a = i(39404),
                s = o(i(23582)),
                u = o(i(71701));
            e.ExceptionEndpoint = "https://statsigapi.net/v1/sdk_exception";
            var l = function() {
                function ErrorBoundary(t) {
                    this.sdkKey = t, this.seen = new Set, this.setupDiagnostics(0 === Math.floor(1e4 * Math.random()) ? 30 : 0)
                }
                return ErrorBoundary.prototype.setStatsigMetadata = function(t) {
                    this.statsigMetadata = t
                }, ErrorBoundary.prototype.swallow = function(t, e, i) {
                    void 0 === i && (i = {}), this.capture(t, e, function() {}, i)
                }, ErrorBoundary.prototype.capture = function(t, e, i, n) {
                    var r = this,
                        o = void 0 === n ? {} : n,
                        a = o.getExtraData,
                        s = o.configName,
                        u = null;
                    try {
                        u = this.beginMarker(t);
                        var l = e(),
                            c = !0;
                        if (l instanceof Promise) return l.catch(function(e) {
                            return c = !1, r.onCaught(t, e, i, a)
                        }).then(function(e) {
                            return r.endMarker(t, c, u), e
                        });
                        return this.endMarker(t, !0, u, s), l
                    } catch (e) {
                        return this.endMarker(t, !1, u, s), this.onCaught(t, e, i, a)
                    }
                }, ErrorBoundary.prototype.logError = function(t, i, o) {
                    n(this, void 0, void 0, function() {
                        var n, a, s, l, c, d, f, g;
                        return r(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    if (r.trys.push([0, 4, , 5]), "function" != typeof o) return [3, 2];
                                    return [4, o()];
                                case 1:
                                    return a = r.sent(), [3, 3];
                                case 2:
                                    a = null, r.label = 3;
                                case 3:
                                    if (n = a, l = (s = (0, u.default)(i)).name, c = s.trace, this.seen.has(l)) return [2];
                                    return this.seen.add(l), f = JSON.stringify({
                                        tag: t,
                                        exception: l,
                                        info: c,
                                        statsigMetadata: d = null !== (g = this.statsigMetadata) && void 0 !== g ? g : {},
                                        extra: null != n ? n : {}
                                    }), [2, fetch(e.ExceptionEndpoint, {
                                        method: "POST",
                                        headers: {
                                            "STATSIG-API-KEY": this.sdkKey,
                                            "STATSIG-SDK-TYPE": String(d.sdkType),
                                            "STATSIG-SDK-VERSION": String(d.sdkVersion),
                                            "Content-Type": "application/json; charset=UTF-8"
                                        },
                                        body: f
                                    })];
                                case 4:
                                    return r.sent(), [3, 5];
                                case 5:
                                    return [2]
                            }
                        })
                    }).catch(function() {})
                }, ErrorBoundary.prototype.setupDiagnostics = function(t) {
                    s.default.setMaxMarkers("api_call", t)
                }, ErrorBoundary.prototype.beginMarker = function(t) {
                    var e = s.default.mark.api_call(t);
                    if (!e) return null;
                    var i = t + "_" + s.default.getMarkerCount("api_call");
                    return e.start({
                        markerID: i
                    }, "api_call") ? i : null
                }, ErrorBoundary.prototype.endMarker = function(t, e, i, n) {
                    var r = s.default.mark.api_call(t);
                    i && r && r.end({
                        markerID: i,
                        success: e,
                        configName: n
                    }, "api_call")
                }, ErrorBoundary.prototype.onCaught = function(t, e, i, n) {
                    if (e instanceof a.StatsigUninitializedError || e instanceof a.StatsigInvalidArgumentError) throw e;
                    return console.error("[Statsig] An unexpected exception occurred.", e), this.logError(t, e, n), i()
                }, ErrorBoundary
            }();
            e.default = l
        },
        39404: function(t, e) {
            "use strict";
            var i, n = this && this.__extends || (i = function(t, e) {
                return (i = Object.setPrototypeOf || ({
                    __proto__: []
                }) instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
                })(t, e)
            }, function(t, e) {
                if ("function" != typeof e && null !== e) throw TypeError("Class extends value " + String(e) + " is not a constructor or null");

                function __() {
                    this.constructor = t
                }
                i(t, e), t.prototype = null === e ? Object.create(e) : (__.prototype = e.prototype, new __)
            });
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.StatsigInvalidArgumentError = e.StatsigUninitializedError = void 0;
            var r = function(t) {
                function StatsigUninitializedError(e) {
                    var i = t.call(this, null != e ? e : "Call and wait for initialize() to finish first.") || this;
                    return Object.setPrototypeOf(i, StatsigUninitializedError.prototype), i
                }
                return n(StatsigUninitializedError, t), StatsigUninitializedError
            }(Error);
            e.StatsigUninitializedError = r;
            var o = function(t) {
                function StatsigInvalidArgumentError(e) {
                    var i = t.call(this, e) || this;
                    return Object.setPrototypeOf(i, StatsigInvalidArgumentError.prototype), i
                }
                return n(StatsigInvalidArgumentError, t), StatsigInvalidArgumentError
            }(Error);
            e.StatsigInvalidArgumentError = o
        },
        2520: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = function() {
                function Layer(t, e, i, n, r, o, a, s, u, l) {
                    void 0 === r && (r = null), void 0 === o && (o = []), void 0 === a && (a = []), void 0 === s && (s = ""), void 0 === u && (u = []), void 0 === l && (l = null), this.logParameterFunction = r, this.name = t, this.value = JSON.parse(JSON.stringify(null != e ? e : {})), this.ruleID = null != i ? i : "", this.evaluationDetails = n, this.secondaryExposures = o, this.undelegatedSecondaryExposures = a, this.allocatedExperimentName = s, this.explicitParameters = u, this.groupName = l
                }
                return Layer._create = function(t, e, i, n, r, o, a, s, u, l) {
                    return void 0 === r && (r = null), void 0 === o && (o = []), void 0 === a && (a = []), void 0 === s && (s = ""), void 0 === u && (u = []), void 0 === l && (l = null), new Layer(t, e, i, n, r, o, a, s, u, l)
                }, Layer.prototype.get = function(t, e, i) {
                    var n = this,
                        r = this.value[t];
                    if (null == r) return e;
                    var logAndReturn = function() {
                        return n.logLayerParameterExposure(t), r
                    };
                    return i ? i(r) ? logAndReturn() : e : null == e || typeof r == typeof e && Array.isArray(e) === Array.isArray(r) ? logAndReturn() : e
                }, Layer.prototype.getValue = function(t, e) {
                    void 0 == e && (e = null);
                    var i = this.value[t];
                    return null != i && this.logLayerParameterExposure(t), null != i ? i : e
                }, Layer.prototype.getRuleID = function() {
                    return this.ruleID
                }, Layer.prototype.getGroupName = function() {
                    return this.groupName
                }, Layer.prototype.getName = function() {
                    return this.name
                }, Layer.prototype.getEvaluationDetails = function() {
                    return this.evaluationDetails
                }, Layer.prototype._getSecondaryExposures = function() {
                    return this.secondaryExposures
                }, Layer.prototype._getUndelegatedSecondaryExposures = function() {
                    return this.undelegatedSecondaryExposures
                }, Layer.prototype._getAllocatedExperimentName = function() {
                    return this.allocatedExperimentName
                }, Layer.prototype._getExplicitParameters = function() {
                    return this.explicitParameters
                }, Layer.prototype._getEvaluationDetails = function() {
                    return this.evaluationDetails
                }, Layer.prototype.logLayerParameterExposure = function(t) {
                    var e;
                    null === (e = this.logParameterFunction) || void 0 === e || e.call(this, this, t)
                }, Layer
            }();
            e.default = i
        },
        68899: function(t, e) {
            "use strict";
            var i = this && this.__assign || function() {
                return (i = Object.assign || function(t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var r in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t
                }).apply(this, arguments)
            };
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = function() {
                function LogEvent(t) {
                    this.user = null, this.value = null, this.metadata = null, this.eventName = t, this.statsigMetadata = {}, this.time = Date.now()
                }
                return LogEvent.prototype.getName = function() {
                    return this.eventName
                }, LogEvent.prototype.setValue = function(t) {
                    this.value = t
                }, LogEvent.prototype.setMetadata = function(t) {
                    this.metadata = t
                }, LogEvent.prototype.addStatsigMetadata = function(t, e) {
                    this.statsigMetadata[t] = e
                }, LogEvent.prototype.setUser = function(t) {
                    this.user = i({}, t), delete this.user.privateAttributes
                }, LogEvent.prototype.setSecondaryExposures = function(t) {
                    void 0 === t && (t = []), this.secondaryExposures = t
                }, LogEvent.prototype.toJsonObject = function() {
                    var t;
                    return {
                        eventName: this.eventName,
                        user: this.user,
                        value: this.value,
                        metadata: this.metadata,
                        time: this.time,
                        statsigMetadata: this.statsigMetadata,
                        secondaryExposures: null !== (t = this.secondaryExposures) && void 0 !== t ? t : void 0
                    }
                }, LogEvent
            }();
            e.default = n
        },
        92322: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.version = void 0, e.version = "4.40.2"
        },
        37375: function(t, e, i) {
            "use strict";
            var n = this && this.__assign || function() {
                    return (n = Object.assign || function(t) {
                        for (var e, i = 1, n = arguments.length; i < n; i++)
                            for (var r in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                        return t
                    }).apply(this, arguments)
                },
                r = this && this.__awaiter || function(t, e, i, n) {
                    return new(i || (i = Promise))(function(r, o) {
                        function fulfilled(t) {
                            try {
                                step(n.next(t))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function rejected(t) {
                            try {
                                step(n.throw(t))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function step(t) {
                            var e;
                            t.done ? r(t.value) : ((e = t.value) instanceof i ? e : new i(function(t) {
                                t(e)
                            })).then(fulfilled, rejected)
                        }
                        step((n = n.apply(t, e || [])).next())
                    })
                },
                o = this && this.__generator || function(t, e) {
                    var i, n, r, o, a = {
                        label: 0,
                        sent: function() {
                            if (1 & r[0]) throw r[1];
                            return r[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: verb(0),
                        throw: verb(1),
                        return: verb(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function verb(o) {
                        return function(s) {
                            return function(o) {
                                if (i) throw TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (i = 1, n && (r = 2 & o[0] ? n.return : o[0] ? n.throw || ((r = n.return) && r.call(n), 0) : n.next) && !(r = r.call(n, o[1])).done) return r;
                                    switch (n = 0, r && (o = [2 & o[0], r.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            r = o;
                                            break;
                                        case 4:
                                            return a.label++, {
                                                value: o[1],
                                                done: !1
                                            };
                                        case 5:
                                            a.label++, n = o[1], o = [0];
                                            continue;
                                        case 7:
                                            o = a.ops.pop(), a.trys.pop();
                                            continue;
                                        default:
                                            if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                                a.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && a.label < r[1]) {
                                                a.label = r[1], r = o;
                                                break
                                            }
                                            if (r && a.label < r[2]) {
                                                a.label = r[2], a.ops.push(o);
                                                break
                                            }
                                            r[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    o = e.call(t, a)
                                } catch (t) {
                                    o = [6, t], n = 0
                                } finally {
                                    i = r = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, s])
                        }
                    }
                },
                a = this && this.__importDefault || function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var s = a(i(43228)),
                u = a(i(76741)),
                l = i(39404),
                c = a(i(2520)),
                d = a(i(68899)),
                f = a(i(16017)),
                g = a(i(20488)),
                h = a(i(80607)),
                p = a(i(28871)),
                v = a(i(88386)),
                y = i(51354),
                S = i(60925),
                m = a(i(17472)),
                _ = a(i(42994)),
                E = a(i(23582)),
                b = a(i(47190)),
                I = i(93834),
                C = function() {
                    function StatsigClient(t, e, i) {
                        var n = this;
                        if (this.appState = null, this.currentAppState = null, this.onCacheLoadedForReact = null, this.initCalled = !1, this.pendingInitPromise = null, this.optionalLoggingSetup = !1, this.prefetchedUsersByCacheKey = {}, this.logLayerParameterExposureForLayer = function(t, e, i) {
                                void 0 === i && (i = !1);
                                var r = "",
                                    o = t._getUndelegatedSecondaryExposures(),
                                    a = t._getExplicitParameters().includes(e);
                                a && (r = t._getAllocatedExperimentName(), o = t._getSecondaryExposures()), n.logger.logLayerExposure(n.getCurrentUser(), t.getName(), t.getRuleID(), o, r, e, a, t._getEvaluationDetails(), i)
                            }, (null == i ? void 0 : i.localMode) !== !0 && ("string" != typeof t || !t.startsWith("client-"))) throw new l.StatsigInvalidArgumentError("Invalid key provided.  You must use a Client SDK Key from the Statsig console to initialize the sdk");
                        if (this.startTime = (0, I.now)(), this.options = new p.default(i), this.logger = new g.default(this), E.default.initialize({
                                options: this.options
                            }), this.errorBoundary = new u.default(t), this.ready = !1, this.sdkKey = t, this.consoleLogger = new b.default(this.options.getLogLevel()), _.default.disabled = this.options.getDisableLocalStorage(), this.identity = new f.default(this.normalizeUser(null != e ? e : null), this.options.getOverrideStableID(), StatsigClient.reactNativeUUID), this.network = new h.default(this), this.store = new v.default(this, this.options.getInitializeValues()), this.errorBoundary.setStatsigMetadata(this.getStatsigMetadata()), null != this.options.getInitializeValues()) {
                            var r = this.options.getInitCompletionCallback();
                            this.ready = !0, this.initCalled = !0, setTimeout(function() {
                                return n.delayedSetup()
                            }, 20), this.handleOptionalLogging(), r && r((0, I.now)() - this.startTime, !0, null)
                        }
                    }
                    return StatsigClient.prototype.getErrorBoundary = function() {
                        return this.errorBoundary
                    }, StatsigClient.prototype.getNetwork = function() {
                        return this.network
                    }, StatsigClient.prototype.getStore = function() {
                        return this.store
                    }, StatsigClient.prototype.getLogger = function() {
                        return this.logger
                    }, StatsigClient.prototype.getOptions = function() {
                        return this.options
                    }, StatsigClient.prototype.getSDKKey = function() {
                        var t = this;
                        return this.errorBoundary.capture("getSDKKey", function() {
                            var e;
                            return null !== (e = t.sdkKey) && void 0 !== e ? e : ""
                        }, function() {
                            return ""
                        })
                    }, StatsigClient.prototype.getCurrentUser = function() {
                        var t = this;
                        return this.errorBoundary.capture("getCurrentUser", function() {
                            return t.identity.getUser()
                        }, function() {
                            return null
                        })
                    }, StatsigClient.prototype.getCurrentUserCacheKey = function() {
                        var t = this;
                        return this.errorBoundary.capture("getCurrentUserCacheKey", function() {
                            return (0, S.getUserCacheKey)(t.getStableID(), t.getCurrentUser())
                        }, function() {
                            return {
                                v1: "",
                                v2: ""
                            }
                        })
                    }, StatsigClient.prototype.getCurrentUserUnitID = function(t) {
                        var e = this;
                        return this.errorBoundary.capture("getCurrentUserUnitID", function() {
                            return e.getUnitID(e.getCurrentUser(), t)
                        }, function() {
                            return ""
                        })
                    }, StatsigClient.prototype.getCurrentUserID = function() {
                        var t = this;
                        return this.errorBoundary.capture("getCurrentUserID", function() {
                            return t.getUnitID(t.getCurrentUser(), "userid")
                        }, function() {
                            return ""
                        })
                    }, StatsigClient.prototype.getUnitID = function(t, e) {
                        var i, n, r;
                        return t ? "userid" === e.toLowerCase() ? null !== (n = null === (i = t.userID) || void 0 === i ? void 0 : i.toString()) && void 0 !== n ? n : null : (t.customIDs && (null !== (r = t.customIDs[e]) && void 0 !== r || t.customIDs[e.toLowerCase()]), null) : null
                    }, StatsigClient.prototype.getStatsigMetadata = function() {
                        var t = this;
                        return this.errorBoundary.capture("getStatsigMetadata", function() {
                            return t.identity.getStatsigMetadata()
                        }, function() {
                            return {}
                        })
                    }, StatsigClient.prototype.getSDKType = function() {
                        var t = this;
                        return this.errorBoundary.capture("getSDKType", function() {
                            return t.identity.getSDKType()
                        }, function() {
                            return ""
                        })
                    }, StatsigClient.prototype.getSDKVersion = function() {
                        var t = this;
                        return this.errorBoundary.capture("getSDKVersion", function() {
                            return t.identity.getSDKVersion()
                        }, function() {
                            return ""
                        })
                    }, StatsigClient.prototype.getConsoleLogger = function() {
                        return this.consoleLogger
                    }, StatsigClient.prototype.delayedSetup = function() {
                        var t = this;
                        this.errorBoundary.swallow("delayedSetup", function() {
                            null != t.options.getInitializeValues() && t.fireAndForgetPrefechUsers(), t.identity.saveStableID(), t.logger.sendSavedRequests().catch(function(e) {
                                return t.errorBoundary.logError("sendSavedRequests:delayedSetup", e)
                            })
                        })
                    }, StatsigClient.prototype.setInitializeValues = function(t) {
                        var e = this;
                        this.errorBoundary.capture("setInitializeValues", function() {
                            e.store.bootstrap(t);
                            var i = null;
                            e.ready || (e.ready = !0, e.initCalled = !0, i = e.options.getInitCompletionCallback()), e.handleOptionalLogging(), e.logger.sendSavedRequests().catch(function(t) {
                                return e.errorBoundary.logError("sendSavedRequests:setInitializeValues", t)
                            }), i && i((0, I.now)() - e.startTime, !0, null)
                        }, function() {
                            e.ready = !0, e.initCalled = !0;
                            var t = e.options.getInitCompletionCallback();
                            t && t((0, I.now)() - e.startTime, !1, "Caught an exception during setInitializeValues")
                        })
                    }, StatsigClient.prototype.initializeAsync = function() {
                        return r(this, void 0, void 0, function() {
                            var t = this;
                            return o(this, function(e) {
                                return [2, this.errorBoundary.capture("initializeAsync", function() {
                                    return r(t, void 0, void 0, function() {
                                        var t, e, i = this;
                                        return o(this, function(n) {
                                            switch (n.label) {
                                                case 0:
                                                    if (null != this.pendingInitPromise) return [2, this.pendingInitPromise];
                                                    if (this.ready) return [2, Promise.resolve()];
                                                    if (E.default.mark.overall.start({}), this.initCalled = !0, !m.default.asyncStorage) return [3, 3];
                                                    return [4, this.identity.initAsync()];
                                                case 1:
                                                    return n.sent(), [4, this.store.loadAsync()];
                                                case 2:
                                                    n.sent(), n.label = 3;
                                                case 3:
                                                    if (null === (e = this.onCacheLoadedForReact) || void 0 === e || e.call(this), this.appState && this.appState.addEventListener && "function" == typeof this.appState.addEventListener && (this.currentAppState = this.appState.currentState, this.appState.addEventListener("change", this.handleAppStateChange.bind(this))), this.options.getLocalModeEnabled()) return [2, Promise.resolve()];
                                                    return t = this.identity.getUser(), this.pendingInitPromise = this.fetchAndSaveValues({
                                                        user: t,
                                                        prefetchUsers: this.options.getPrefetchUsers(),
                                                        timeout: this.options.getInitTimeoutMs()
                                                    }).then(function() {
                                                        return E.default.mark.overall.end({
                                                            success: !0,
                                                            evaluationDetails: i.store.getGlobalEvaluationDetails()
                                                        }), {
                                                            success: !0,
                                                            message: null
                                                        }
                                                    }).catch(function(t) {
                                                        var e;
                                                        return i.errorBoundary.logError("initializeAsync:fetchAndSaveValues", t), E.default.mark.overall.end({
                                                            success: !1,
                                                            error: E.default.formatError(t),
                                                            evaluationDetails: i.store.getGlobalEvaluationDetails()
                                                        }), {
                                                            success: !1,
                                                            message: null !== (e = t.message) && void 0 !== e ? e : null
                                                        }
                                                    }).then(function(t) {
                                                        var e = t.success,
                                                            n = t.message,
                                                            r = i.options.getInitCompletionCallback();
                                                        r && r((0, I.now)() - i.startTime, e, n)
                                                    }).finally(function() {
                                                        return r(i, void 0, void 0, function() {
                                                            return o(this, function(e) {
                                                                return this.pendingInitPromise = null, this.ready = !0, this.delayedSetup(), this.logger.logDiagnostics(t, "initialize"), [2]
                                                            })
                                                        })
                                                    }), this.handleOptionalLogging(), [2, this.pendingInitPromise]
                                            }
                                        })
                                    })
                                }, function() {
                                    return t.ready = !0, t.initCalled = !0, Promise.resolve()
                                })]
                            })
                        })
                    }, StatsigClient.prototype.prefetchUsers = function(t) {
                        return r(this, void 0, void 0, function() {
                            var e = this;
                            return o(this, function(i) {
                                return [2, this.errorBoundary.capture("prefetchUsers", function() {
                                    if (t && 0 != t.length) return e.fetchAndSaveValues({
                                        user: null,
                                        prefetchUsers: t,
                                        timeout: 0
                                    })
                                }, function() {
                                    return Promise.resolve()
                                })]
                            })
                        })
                    }, StatsigClient.prototype.getEvaluationDetails = function() {
                        var t = this;
                        return this.errorBoundary.capture("getEvaluationDetails", function() {
                            return t.store.getGlobalEvaluationDetails()
                        }, function() {
                            return {
                                time: Date.now(),
                                reason: y.EvaluationReason.Error
                            }
                        })
                    }, StatsigClient.prototype.checkGate = function(t, e) {
                        var i = this;
                        return void 0 === e && (e = !1), this.errorBoundary.capture("checkGate", function() {
                            var n = i.checkGateImpl(t, e);
                            i.logGateExposureImpl(t, n);
                            var r = i.options.getGateEvaluationCallback();
                            return r && r(t, n.gate.value, {
                                withExposureLoggingDisabled: !1
                            }), !0 === n.gate.value
                        }, function() {
                            return !1
                        }, {
                            configName: t
                        })
                    }, StatsigClient.prototype.checkGateWithExposureLoggingDisabled = function(t, e) {
                        var i = this;
                        return void 0 === e && (e = !1), this.errorBoundary.capture("checkGateWithExposureLoggingDisabled", function() {
                            var n = i.checkGateImpl(t, e),
                                r = i.options.getGateEvaluationCallback();
                            return r && r(t, n.gate.value, {
                                withExposureLoggingDisabled: !0
                            }), !0 === n.gate.value
                        }, function() {
                            return !1
                        })
                    }, StatsigClient.prototype.logGateExposure = function(t) {
                        var e = this;
                        this.errorBoundary.swallow("logGateExposure", function() {
                            e.logGateExposureImpl(t)
                        })
                    }, StatsigClient.prototype.getConfig = function(t, e) {
                        var i = this;
                        return void 0 === e && (e = !1), this.errorBoundary.capture("getConfig", function() {
                            var n = i.getConfigImpl(t, e);
                            return i.logConfigExposureImpl(t, n), n
                        }, function() {
                            return i.getEmptyConfig(t)
                        }, {
                            configName: t
                        })
                    }, StatsigClient.prototype.getConfigWithExposureLoggingDisabled = function(t, e) {
                        var i = this;
                        return void 0 === e && (e = !1), this.errorBoundary.capture("getConfig", function() {
                            return i.getConfigImpl(t, e)
                        }, function() {
                            return i.getEmptyConfig(t)
                        })
                    }, StatsigClient.prototype.logConfigExposure = function(t) {
                        var e = this;
                        this.errorBoundary.swallow("logConfigExposure", function() {
                            e.logConfigExposureImpl(t)
                        })
                    }, StatsigClient.prototype.getExperiment = function(t, e, i) {
                        var n = this;
                        return void 0 === e && (e = !1), void 0 === i && (i = !1), this.errorBoundary.capture("getExperiment", function() {
                            var r = n.getExperimentImpl(t, e, i);
                            return n.logExperimentExposureImpl(t, e, r), r
                        }, function() {
                            return n.getEmptyConfig(t)
                        }, {
                            configName: t
                        })
                    }, StatsigClient.prototype.getExperimentWithExposureLoggingDisabled = function(t, e, i) {
                        var n = this;
                        return void 0 === e && (e = !1), void 0 === i && (i = !1), this.errorBoundary.capture("getExperimentWithExposureLoggingDisabled", function() {
                            return n.getExperimentImpl(t, e, i)
                        }, function() {
                            return n.getEmptyConfig(t)
                        })
                    }, StatsigClient.prototype.logExperimentExposure = function(t, e) {
                        var i = this;
                        this.errorBoundary.swallow("logExperimentExposure", function() {
                            i.logExperimentExposureImpl(t, e)
                        })
                    }, StatsigClient.prototype.getLayer = function(t, e) {
                        var i = this;
                        return void 0 === e && (e = !1), this.errorBoundary.capture("getLayer", function() {
                            return i.getLayerImpl(i.logLayerParameterExposureForLayer, t, e)
                        }, function() {
                            return c.default._create(t, {}, "", i.getEvalutionDetailsForError())
                        }, {
                            configName: t
                        })
                    }, StatsigClient.prototype.getLayerWithExposureLoggingDisabled = function(t, e) {
                        var i = this;
                        return void 0 === e && (e = !1), this.errorBoundary.capture("getLayerWithExposureLoggingDisabled", function() {
                            return i.getLayerImpl(null, t, e)
                        }, function() {
                            return c.default._create(t, {}, "", i.getEvalutionDetailsForError())
                        })
                    }, StatsigClient.prototype.logLayerParameterExposure = function(t, e, i) {
                        var n = this;
                        void 0 === i && (i = !1), this.errorBoundary.swallow("logLayerParameterExposure", function() {
                            var r = n.getLayerImpl(null, t, i);
                            n.logLayerParameterExposureForLayer(r, e, !0)
                        })
                    }, StatsigClient.prototype.logEvent = function(t, e, i) {
                        var n = this;
                        void 0 === e && (e = null), void 0 === i && (i = null), this.errorBoundary.swallow("logEvent", function() {
                            if (!n.logger || !n.sdkKey) throw new l.StatsigUninitializedError("Must initialize() before logging events.");
                            if ("string" != typeof t || 0 === t.length) {
                                n.consoleLogger.error("Event not logged. No valid eventName passed.");
                                return
                            }
                            n.shouldTrimParam(t, 64) && (n.consoleLogger.info("eventName is too long, trimming to 64 characters."), t = t.substring(0, 64)), "string" == typeof e && n.shouldTrimParam(e, 64) && (n.consoleLogger.info("value is too long, trimming to 64."), e = e.substring(0, 64)), n.shouldTrimParam(i, 2048) && (n.consoleLogger.info("metadata is too big. Dropping the metadata."), i = {
                                error: "not logged due to size too large"
                            });
                            var r = new d.default(t);
                            r.setValue(e), r.setMetadata(i), r.setUser(n.getCurrentUser()), n.logger.log(r)
                        })
                    }, StatsigClient.prototype.updateUserWithValues = function(t, e) {
                        var i, n = this;
                        return this.errorBoundary.capture("updateUserWithValues", function() {
                            var r = Date.now();
                            if (!n.initializeCalled()) throw new l.StatsigUninitializedError("Call initialize() first.");
                            return i = function(t, e) {
                                var i = n.options.getUpdateUserCompletionCallback();
                                null == i || i(Date.now() - r, t, e)
                            }, n.identity.updateUser(n.normalizeUser(t)), n.store.bootstrap(e), i(!0, null), !0
                        }, function() {
                            return null == i || i(!1, "Failed to update user. An unexpected error occured."), !1
                        })
                    }, StatsigClient.prototype.updateUser = function(t) {
                        return r(this, void 0, void 0, function() {
                            var e, i = this;
                            return o(this, function(n) {
                                return [2, this.errorBoundary.capture("updateUser", function() {
                                    return r(i, void 0, void 0, function() {
                                        var i, n, r, a, s, u = this;
                                        return o(this, function(o) {
                                            switch (o.label) {
                                                case 0:
                                                    if (i = Date.now(), !this.initializeCalled()) throw new l.StatsigUninitializedError("Call initialize() first.");
                                                    if (e = function(t, e) {
                                                            var n = u.options.getUpdateUserCompletionCallback();
                                                            null == n || n(Date.now() - i, t, e)
                                                        }, this.identity.updateUser(this.normalizeUser(t)), n = this.getCurrentUserCacheKey(), r = !!this.prefetchedUsersByCacheKey[n.v2], a = this.store.updateUser(r), E.default.clearContext("api_call"), this.logger.resetDedupeKeys(), null != a && (r || this.isCacheValidForFetchMode(a))) return e(!0, null), [2, Promise.resolve(!0)];
                                                    if (!(null != this.pendingInitPromise)) return [3, 2];
                                                    return [4, this.pendingInitPromise];
                                                case 1:
                                                    o.sent(), o.label = 2;
                                                case 2:
                                                    if (this.options.getLocalModeEnabled()) return e(!0, null), [2, Promise.resolve(!0)];
                                                    return s = this.identity.getUser(), this.pendingInitPromise = this.fetchAndSaveValues({
                                                        user: s,
                                                        prefetchUsers: [],
                                                        timeout: void 0
                                                    }).finally(function() {
                                                        u.pendingInitPromise = null
                                                    }), [2, this.pendingInitPromise.then(function() {
                                                        return e(!0, null), Promise.resolve(!0)
                                                    }).catch(function(t) {
                                                        return e(!1, "Failed to update user: " + t), Promise.resolve(!1)
                                                    })]
                                            }
                                        })
                                    })
                                }, function() {
                                    return null == e || e(!1, "Failed to update user. An unexpected error occured."), Promise.resolve(!1)
                                })]
                            })
                        })
                    }, StatsigClient.prototype.shutdown = function() {
                        var t = this;
                        this.errorBoundary.swallow("shutdown", function() {
                            t.logger.shutdown(), t.appState && t.appState.removeEventListener && "function" == typeof t.appState.removeEventListener && t.appState.removeEventListener("change", t.handleAppStateChange.bind(t)), _.default.cleanup()
                        })
                    }, StatsigClient.prototype.overrideGate = function(t, e) {
                        var i = this;
                        this.errorBoundary.swallow("overrideGate", function() {
                            i.ensureStoreLoaded(), i.store.overrideGate(t, e)
                        })
                    }, StatsigClient.prototype.overrideConfig = function(t, e) {
                        var i = this;
                        this.errorBoundary.swallow("overrideConfig", function() {
                            i.ensureStoreLoaded(), i.store.overrideConfig(t, e)
                        })
                    }, StatsigClient.prototype.overrideLayer = function(t, e) {
                        var i = this;
                        this.errorBoundary.swallow("overrideLayer", function() {
                            i.ensureStoreLoaded(), i.store.overrideLayer(t, e)
                        })
                    }, StatsigClient.prototype.removeGateOverride = function(t) {
                        var e = this;
                        this.errorBoundary.swallow("removeGateOverride", function() {
                            e.ensureStoreLoaded(), e.store.removeGateOverride(t)
                        })
                    }, StatsigClient.prototype.removeConfigOverride = function(t) {
                        var e = this;
                        this.errorBoundary.swallow("removeConfigOverride", function() {
                            e.ensureStoreLoaded(), e.store.removeConfigOverride(t)
                        })
                    }, StatsigClient.prototype.removeLayerOverride = function(t) {
                        var e = this;
                        this.errorBoundary.swallow("removeLayerOverride", function() {
                            e.ensureStoreLoaded(), e.store.removeLayerOverride(t)
                        })
                    }, StatsigClient.prototype.removeOverride = function(t) {
                        var e = this;
                        this.errorBoundary.swallow("removeOverride", function() {
                            e.ensureStoreLoaded(), e.store.removeGateOverride(t)
                        })
                    }, StatsigClient.prototype.getOverrides = function() {
                        var t = this;
                        return this.errorBoundary.capture("getOverrides", function() {
                            return t.ensureStoreLoaded(), t.store.getAllOverrides().gates
                        }, function() {
                            return {}
                        })
                    }, StatsigClient.prototype.getAllOverrides = function() {
                        var t = this;
                        return this.errorBoundary.capture("getAllOverrides", function() {
                            return t.ensureStoreLoaded(), t.store.getAllOverrides()
                        }, function() {
                            return {
                                gates: {},
                                configs: {},
                                layers: {}
                            }
                        })
                    }, StatsigClient.prototype.getStableID = function() {
                        var t = this;
                        return this.errorBoundary.capture("getStableID", function() {
                            return t.identity.getStatsigMetadata().stableID
                        }, function() {
                            return ""
                        })
                    }, StatsigClient.prototype.initializeCalled = function() {
                        return this.initCalled
                    }, StatsigClient.prototype.setSDKPackageInfo = function(t) {
                        null != t && (this.identity.setSDKPackageInfo(t), this.errorBoundary.setStatsigMetadata(this.getStatsigMetadata()))
                    }, StatsigClient.setAsyncStorage = function(t) {
                        null != t && (m.default.asyncStorage = t)
                    }, StatsigClient.prototype.setOnCacheLoadedReactCallback = function(t) {
                        this.onCacheLoadedForReact = null != t ? t : null
                    }, StatsigClient.setReactNativeUUID = function(t) {
                        null != t && (StatsigClient.reactNativeUUID = t)
                    }, StatsigClient.prototype.setAppState = function(t) {
                        null != t && (this.appState = t)
                    }, StatsigClient.prototype.setNativeModules = function(t) {
                        null != t && this.identity.setNativeModules(t)
                    }, StatsigClient.prototype.setPlatform = function(t) {
                        null != t && this.identity.setPlatform(t)
                    }, StatsigClient.prototype.setRNDeviceInfo = function(t) {
                        null != t && this.identity.setRNDeviceInfo(t)
                    }, StatsigClient.prototype.setExpoConstants = function(t) {
                        null != t && this.identity.setExpoConstants(t)
                    }, StatsigClient.prototype.setExpoDevice = function(t) {
                        null != t && this.identity.setExpoDevice(t)
                    }, StatsigClient.prototype.isCacheValidForFetchMode = function(t) {
                        return "cache-or-network" === this.options.getFetchMode() && t > this.startTime
                    }, StatsigClient.prototype.handleOptionalLogging = function() {
                        var t = this,
                            e = this.options.getDisableErrorLogging(),
                            i = this.options.getDisableAutoMetricsLogging();
                        if ((!e || !i) && !this.optionalLoggingSetup && "undefined" != typeof window && window && window.addEventListener) {
                            var n = this.identity.getUser();
                            if (e || window.addEventListener("error", function(e) {
                                    var i, r = e.error;
                                    if (null != r && "object" == typeof r) try {
                                        r = JSON.stringify(r)
                                    } catch (t) {
                                        r = "Failed to stringify Error"
                                    }
                                    t.logger.logAppError(n, null !== (i = e.message) && void 0 !== i ? i : "", {
                                        filename: e.filename,
                                        lineno: e.lineno,
                                        colno: e.colno,
                                        error_obj: r
                                    })
                                }), !i) {
                                if ("undefined" == typeof document || !document || "undefined" == typeof setTimeout || !setTimeout) return;
                                var work_1 = function() {
                                    setTimeout(function() {
                                        t.logger.logAppMetrics(n)
                                    }, 1e3)
                                };
                                "complete" === document.readyState ? work_1() : window.addEventListener("load", function() {
                                    return work_1()
                                })
                            }
                            this.optionalLoggingSetup = !0
                        }
                    }, StatsigClient.prototype.handleAppStateChange = function(t) {
                        var e, i = this;
                        "active" === this.currentAppState && t.match(/inactive|background/) ? this.logger.flush(!0) : (null === (e = this.currentAppState) || void 0 === e ? void 0 : e.match(/inactive|background/)) && "active" === t && this.logger.sendSavedRequests().catch(function(t) {
                            return i.errorBoundary.logError("sendSavedRequests:handleAppStateChange", t)
                        }), this.currentAppState = t
                    }, StatsigClient.prototype.shouldTrimParam = function(t, e) {
                        return null != t && ("string" == typeof t ? t.length > e : "object" == typeof t ? JSON.stringify(t).length > e : "number" == typeof t && t.toString().length > e)
                    }, StatsigClient.prototype.normalizePrefetchUsers = function(t) {
                        var e = this;
                        return null == t ? [] : t.map(function(t) {
                            return e.normalizeUser(t)
                        })
                    }, StatsigClient.prototype.normalizeUser = function(t) {
                        var e = {};
                        try {
                            e = JSON.parse(JSON.stringify(t))
                        } catch (t) {
                            throw new l.StatsigInvalidArgumentError("User object must be convertable to JSON string.")
                        }
                        return e = this.trimUserObjIfNeeded(e), null != this.options.getEnvironment() && (e.statsigEnvironment = this.options.getEnvironment()), e
                    }, StatsigClient.prototype.trimUserObjIfNeeded = function(t) {
                        var e, i;
                        return null == t ? {} : (this.shouldTrimParam(null !== (e = t.userID) && void 0 !== e ? e : null, 64) && (this.consoleLogger.info("User ID is too large, trimming to 64characters"), t.userID = null === (i = t.userID) || void 0 === i ? void 0 : i.toString().substring(0, 64)), this.shouldTrimParam(t, 2048) && (t.custom = {}, this.shouldTrimParam(t, 2048) ? (this.consoleLogger.info("User object is too large, only keeping the user ID."), t = {
                            userID: t.userID
                        }) : this.consoleLogger.info("User object is too large, dropping the custom property.")), t)
                    }, StatsigClient.prototype.ensureStoreLoaded = function() {
                        if (!this.store.isLoaded()) throw new l.StatsigUninitializedError("Call and wait for initialize() to finish first.")
                    }, StatsigClient.prototype.getEvalutionDetailsForError = function() {
                        return {
                            time: Date.now(),
                            reason: y.EvaluationReason.Error
                        }
                    }, StatsigClient.prototype.fetchAndSaveValues = function(t) {
                        var e, i;
                        return r(this, void 0, void 0, function() {
                            var a, s, u, l, c, d, f = this;
                            return o(this, function(g) {
                                return a = t.user, s = null !== (e = t.prefetchUsers) && void 0 !== e ? e : [], u = null !== (i = t.timeout) && void 0 !== i ? i : this.options.getInitTimeoutMs(), s.length > 5 && this.consoleLogger.info("Cannot prefetch more than 5 users."), l = this.normalizePrefetchUsers(s).slice(0, 5).reduce(function(t, e) {
                                    return t[(0, S.getUserCacheKey)(f.getStableID(), e).v2] = e, t
                                }, {}), c = null, 0 === s.length && (c = this.store.getLastUpdateTime(a)), d = this.store.getPreviousDerivedFields(a), [2, this.network.fetchValues({
                                    user: a,
                                    sinceTime: c,
                                    timeout: u,
                                    useDeltas: null != c,
                                    prefetchUsers: s.length > 0 ? l : void 0,
                                    previousDerivedFields: d
                                }).eventually(function(t) {
                                    (null == t ? void 0 : t.has_updates) && f.store.saveWithoutUpdatingClientState(a, t, s.length > 0 ? l : void 0).catch(function(t) {
                                        return f.errorBoundary.logError("fetchAndSaveValues:eventually", t)
                                    })
                                }).then(function(t) {
                                    return r(f, void 0, void 0, function() {
                                        var e = this;
                                        return o(this, function(i) {
                                            return [2, this.errorBoundary.swallow("fetchAndSaveValues", function() {
                                                return r(e, void 0, void 0, function() {
                                                    return o(this, function(e) {
                                                        switch (e.label) {
                                                            case 0:
                                                                if (E.default.mark.intialize.process.start({}), !(null == t ? void 0 : t.has_updates)) return [3, 2];
                                                                return [4, this.store.save(a, t, s.length > 0 ? l : void 0)];
                                                            case 1:
                                                                return e.sent(), [3, 3];
                                                            case 2:
                                                                (null == t ? void 0 : t.is_no_content) && this.store.setEvaluationReason(y.EvaluationReason.NetworkNotModified), e.label = 3;
                                                            case 3:
                                                                return this.prefetchedUsersByCacheKey = n(n({}, this.prefetchedUsersByCacheKey), l), E.default.mark.intialize.process.end({
                                                                    success: !0
                                                                }), [2]
                                                        }
                                                    })
                                                })
                                            })]
                                        })
                                    })
                                })]
                            })
                        })
                    }, StatsigClient.prototype.checkGateImpl = function(t, e) {
                        if (this.ensureStoreLoaded(), "string" != typeof t || 0 === t.length) throw new l.StatsigInvalidArgumentError("Must pass a valid string as the gateName.");
                        return this.store.checkGate(t, e)
                    }, StatsigClient.prototype.logGateExposureImpl = function(t, e) {
                        var i = null != e ? e : this.checkGateImpl(t, !1),
                            n = i.gate;
                        this.logger.logGateExposure(this.getCurrentUser(), t, n.value, n.rule_id, n.secondary_exposures, i.evaluationDetails, !e)
                    }, StatsigClient.prototype.getConfigImpl = function(t, e) {
                        if (this.ensureStoreLoaded(), "string" != typeof t || 0 === t.length) throw new l.StatsigInvalidArgumentError("Must pass a valid string as the configName.");
                        return this.store.getConfig(t, e)
                    }, StatsigClient.prototype.logConfigExposureImpl = function(t, e) {
                        var i = null != e ? e : this.getConfigImpl(t, !1);
                        this.logger.logConfigExposure(this.getCurrentUser(), t, i.getRuleID(), i._getSecondaryExposures(), i.getEvaluationDetails(), !e)
                    }, StatsigClient.prototype.getExperimentImpl = function(t, e, i) {
                        if (this.ensureStoreLoaded(), "string" != typeof t || 0 === t.length) throw new l.StatsigInvalidArgumentError("Must pass a valid string as the experimentName.");
                        return this.store.getExperiment(t, e, i)
                    }, StatsigClient.prototype.logExperimentExposureImpl = function(t, e, i) {
                        var n = null != i ? i : this.getExperimentImpl(t, e, !1);
                        this.logger.logConfigExposure(this.getCurrentUser(), t, n.getRuleID(), n._getSecondaryExposures(), n.getEvaluationDetails(), !i)
                    }, StatsigClient.prototype.getLayerImpl = function(t, e, i) {
                        if (this.ensureStoreLoaded(), "string" != typeof e || 0 === e.length) throw new l.StatsigInvalidArgumentError("Must pass a valid string as the layerName.");
                        return this.store.getLayer(t, e, i)
                    }, StatsigClient.prototype.getEmptyConfig = function(t) {
                        return new s.default(t, {}, "", this.getEvalutionDetailsForError())
                    }, StatsigClient.prototype.fireAndForgetPrefechUsers = function() {
                        this.prefetchUsers(this.options.getPrefetchUsers()).catch(function() {})
                    }, StatsigClient
                }();
            e.default = C
        },
        16017: function(t, e, i) {
            "use strict";
            var n = this && this.__awaiter || function(t, e, i, n) {
                    return new(i || (i = Promise))(function(r, o) {
                        function fulfilled(t) {
                            try {
                                step(n.next(t))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function rejected(t) {
                            try {
                                step(n.throw(t))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function step(t) {
                            var e;
                            t.done ? r(t.value) : ((e = t.value) instanceof i ? e : new i(function(t) {
                                t(e)
                            })).then(fulfilled, rejected)
                        }
                        step((n = n.apply(t, e || [])).next())
                    })
                },
                r = this && this.__generator || function(t, e) {
                    var i, n, r, o, a = {
                        label: 0,
                        sent: function() {
                            if (1 & r[0]) throw r[1];
                            return r[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: verb(0),
                        throw: verb(1),
                        return: verb(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function verb(o) {
                        return function(s) {
                            return function(o) {
                                if (i) throw TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (i = 1, n && (r = 2 & o[0] ? n.return : o[0] ? n.throw || ((r = n.return) && r.call(n), 0) : n.next) && !(r = r.call(n, o[1])).done) return r;
                                    switch (n = 0, r && (o = [2 & o[0], r.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            r = o;
                                            break;
                                        case 4:
                                            return a.label++, {
                                                value: o[1],
                                                done: !1
                                            };
                                        case 5:
                                            a.label++, n = o[1], o = [0];
                                            continue;
                                        case 7:
                                            o = a.ops.pop(), a.trys.pop();
                                            continue;
                                        default:
                                            if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                                a.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && a.label < r[1]) {
                                                a.label = r[1], r = o;
                                                break
                                            }
                                            if (r && a.label < r[2]) {
                                                a.label = r[2], a.ops.push(o);
                                                break
                                            }
                                            r[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    o = e.call(t, a)
                                } catch (t) {
                                    o = [6, t], n = 0
                                } finally {
                                    i = r = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, s])
                        }
                    }
                },
                o = this && this.__importDefault || function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var a = i(50250),
                s = i(90977),
                u = o(i(17472)),
                l = o(i(42994)),
                c = i(92322),
                d = function() {
                    function Identity(t, e, i) {
                        this.platform = null, this.nativeModules = null, this.sdkType = "js-client", this.reactNativeUUID = i, this.user = t, this.sdkVersion = c.version, this.statsigMetadata = {
                            sdkType: this.sdkType,
                            sdkVersion: this.sdkVersion
                        };
                        var n, r = e;
                        u.default.asyncStorage || (r = null !== (n = null != r ? r : l.default.getItem(s.STATSIG_STABLE_ID_KEY)) && void 0 !== n ? n : this.getUUID()), r && (this.statsigMetadata.stableID = r)
                    }
                    return Identity.prototype.saveStableID = function() {
                        null != this.statsigMetadata.stableID && l.default.setItem(s.STATSIG_STABLE_ID_KEY, this.statsigMetadata.stableID)
                    }, Identity.prototype.initAsync = function() {
                        return n(this, void 0, void 0, function() {
                            var t;
                            return r(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        if (t = this.statsigMetadata.stableID) return [3, 2];
                                        return [4, u.default.getItemAsync(s.STATSIG_STABLE_ID_KEY)];
                                    case 1:
                                        t = null != (t = e.sent()) ? t : this.getUUID(), e.label = 2;
                                    case 2:
                                        return u.default.setItemAsync(s.STATSIG_STABLE_ID_KEY, t).catch(function() {}), this.statsigMetadata.stableID = t, [2, this]
                                }
                            })
                        })
                    }, Identity.prototype.getSDKType = function() {
                        return this.sdkType
                    }, Identity.prototype.getSDKVersion = function() {
                        return this.sdkVersion
                    }, Identity.prototype.getStatsigMetadata = function() {
                        return this.statsigMetadata.sdkType = this.sdkType, this.statsigMetadata.sdkVersion = this.sdkVersion, this.statsigMetadata
                    }, Identity.prototype.getUser = function() {
                        return this.user
                    }, Identity.prototype.updateUser = function(t) {
                        this.user = t
                    }, Identity.prototype.setSDKPackageInfo = function(t) {
                        this.sdkType = t.sdkType, this.sdkVersion = t.sdkVersion
                    }, Identity.prototype.setPlatform = function(t) {
                        this.platform = t, this.updateMetadataFromNativeModules()
                    }, Identity.prototype.setNativeModules = function(t) {
                        this.nativeModules = t, this.updateMetadataFromNativeModules()
                    }, Identity.prototype.updateMetadataFromNativeModules = function() {
                        var t, e, i, n, r, o, a;
                        null != this.platform && null != this.nativeModules && ((null === (t = this.platform.OS) || void 0 === t ? void 0 : t.toLocaleLowerCase()) === "android" ? this.statsigMetadata.locale = null === (e = this.nativeModules.I18nManager) || void 0 === e ? void 0 : e.localeIdentifier : (null === (i = this.platform.OS) || void 0 === i ? void 0 : i.toLocaleLowerCase()) === "ios" && (this.statsigMetadata.locale = (null === (r = null === (n = this.nativeModules.SettingsManager) || void 0 === n ? void 0 : n.settings) || void 0 === r ? void 0 : r.AppleLocale) || (null === (a = null === (o = this.nativeModules.SettingsManager) || void 0 === o ? void 0 : o.settings) || void 0 === a ? void 0 : a.AppleLanguages[0])))
                    }, Identity.prototype.getUUID = function() {
                        var t, e;
                        return null !== (e = null === (t = this.reactNativeUUID) || void 0 === t ? void 0 : t.v4()) && void 0 !== e ? e : (0, a.v4)()
                    }, Identity.prototype.setRNDeviceInfo = function(t) {
                        var e, i, n, r, o;
                        this.statsigMetadata.appVersion = null !== (e = t.getVersion()) && void 0 !== e ? e : "", this.statsigMetadata.systemVersion = null !== (i = t.getSystemVersion()) && void 0 !== i ? i : "", this.statsigMetadata.systemName = null !== (n = t.getSystemName()) && void 0 !== n ? n : "", this.statsigMetadata.deviceModelName = null !== (r = t.getModel()) && void 0 !== r ? r : "", this.statsigMetadata.deviceModel = null !== (o = t.getDeviceId()) && void 0 !== o ? o : ""
                    }, Identity.prototype.setExpoConstants = function(t) {
                        var e, i;
                        this.statsigMetadata.appVersion = null !== (i = null !== (e = t.nativeAppVersion) && void 0 !== e ? e : t.nativeBuildVersion) && void 0 !== i ? i : ""
                    }, Identity.prototype.setExpoDevice = function(t) {
                        var e, i, n, r;
                        this.statsigMetadata.systemVersion = null !== (e = t.osVersion) && void 0 !== e ? e : "", this.statsigMetadata.systemName = null !== (i = t.osName) && void 0 !== i ? i : "", this.statsigMetadata.deviceModelName = null !== (n = t.modelName) && void 0 !== n ? n : "", this.statsigMetadata.deviceModel = null !== (r = t.modelId) && void 0 !== r ? r : ""
                    }, Identity
                }();
            e.default = d
        },
        20488: function(t, e, i) {
            "use strict";
            var n = this && this.__awaiter || function(t, e, i, n) {
                    return new(i || (i = Promise))(function(r, o) {
                        function fulfilled(t) {
                            try {
                                step(n.next(t))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function rejected(t) {
                            try {
                                step(n.throw(t))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function step(t) {
                            var e;
                            t.done ? r(t.value) : ((e = t.value) instanceof i ? e : new i(function(t) {
                                t(e)
                            })).then(fulfilled, rejected)
                        }
                        step((n = n.apply(t, e || [])).next())
                    })
                },
                r = this && this.__generator || function(t, e) {
                    var i, n, r, o, a = {
                        label: 0,
                        sent: function() {
                            if (1 & r[0]) throw r[1];
                            return r[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: verb(0),
                        throw: verb(1),
                        return: verb(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function verb(o) {
                        return function(s) {
                            return function(o) {
                                if (i) throw TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (i = 1, n && (r = 2 & o[0] ? n.return : o[0] ? n.throw || ((r = n.return) && r.call(n), 0) : n.next) && !(r = r.call(n, o[1])).done) return r;
                                    switch (n = 0, r && (o = [2 & o[0], r.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            r = o;
                                            break;
                                        case 4:
                                            return a.label++, {
                                                value: o[1],
                                                done: !1
                                            };
                                        case 5:
                                            a.label++, n = o[1], o = [0];
                                            continue;
                                        case 7:
                                            o = a.ops.pop(), a.trys.pop();
                                            continue;
                                        default:
                                            if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                                a.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && a.label < r[1]) {
                                                a.label = r[1], r = o;
                                                break
                                            }
                                            if (r && a.label < r[2]) {
                                                a.label = r[2], a.ops.push(o);
                                                break
                                            }
                                            r[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    o = e.call(t, a)
                                } catch (t) {
                                    o = [6, t], n = 0
                                } finally {
                                    i = r = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, s])
                        }
                    }
                },
                o = this && this.__importDefault || function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var a = o(i(68899)),
                s = i(80607),
                u = i(90977),
                l = o(i(23582)),
                c = o(i(17472)),
                d = o(i(42994)),
                f = "statsig::",
                g = f + "config_exposure",
                h = f + "layer_exposure",
                p = f + "gate_exposure",
                v = f + "log_event_failed",
                y = f + "app_error",
                S = f + "app_metrics::page_load_time",
                m = f + "app_metrics::dom_interactive_time",
                _ = f + "diagnostics",
                E = f + "default_value_type_mismatch",
                b = function() {
                    function StatsigLogger(t) {
                        this.failedLogEventCount = 0, this.sdkInternal = t, this.queue = [], this.flushInterval = null, this.loggedErrors = new Set, this.failedLogEvents = [], this.exposureDedupeKeys = {}, this.failedLogEventCount = 0, this.init()
                    }
                    return StatsigLogger.prototype.init = function() {
                        var t = this;
                        "undefined" != typeof window && "function" == typeof window.addEventListener && (window.addEventListener("blur", function() {
                            return t.flush(!0)
                        }), window.addEventListener("beforeunload", function() {
                            return t.flush(!0)
                        }), window.addEventListener("load", function() {
                            setTimeout(function() {
                                return t.flush()
                            }, 100), setTimeout(function() {
                                return t.flush()
                            }, 1e3)
                        })), "undefined" != typeof document && "function" == typeof document.addEventListener && document.addEventListener("visibilitychange", function() {
                            t.flush("visible" !== document.visibilityState)
                        }), !this.sdkInternal.getOptions().getIgnoreWindowUndefined() && ("undefined" == typeof window || null == window) || this.sdkInternal.getOptions().getLocalModeEnabled() || (this.flushInterval = setInterval(function() {
                            t.flush()
                        }, this.sdkInternal.getOptions().getLoggingIntervalMillis()), setTimeout(function() {
                            return t.flush()
                        }, 100), setTimeout(function() {
                            return t.flush()
                        }, 1e3))
                    }, StatsigLogger.prototype.log = function(t) {
                        try {
                            if (!this.sdkInternal.getOptions().getDisableCurrentPageLogging() && "undefined" != typeof window && null != window && "object" == typeof window.location && "string" == typeof window.location.href) {
                                var e = window.location.href.split(/[?#]/);
                                (null == e ? void 0 : e.length) > 0 && t.addStatsigMetadata("currentPage", e[0])
                            }
                        } catch (t) {}
                        this.queue.push(t.toJsonObject()), this.queue.length >= this.sdkInternal.getOptions().getLoggingBufferMaxSize() && this.flush()
                    }, StatsigLogger.prototype.resetDedupeKeys = function() {
                        this.exposureDedupeKeys = {}
                    }, StatsigLogger.prototype.shouldLogExposure = function(t) {
                        var e = this.exposureDedupeKeys[t],
                            i = Date.now();
                        return null == e ? (this.exposureDedupeKeys[t] = i, !0) : !(e >= i - 6e5) && (this.exposureDedupeKeys[t] = i, !0)
                    }, StatsigLogger.prototype.logGateExposure = function(t, e, i, n, r, o, s) {
                        var u = e + String(i) + n + o.reason;
                        if (this.shouldLogExposure(u)) {
                            var l = {
                                gate: e,
                                gateValue: String(i),
                                ruleID: n,
                                reason: o.reason,
                                time: o.time
                            };
                            s && (l.isManualExposure = "true");
                            var c = new a.default(p);
                            c.setUser(t), c.setMetadata(l), c.setSecondaryExposures(r), this.log(c)
                        }
                    }, StatsigLogger.prototype.logConfigExposure = function(t, e, i, n, r, o) {
                        var s = e + i + r.reason;
                        if (this.shouldLogExposure(s)) {
                            var u = {
                                config: e,
                                ruleID: i,
                                reason: r.reason,
                                time: r.time
                            };
                            o && (u.isManualExposure = "true");
                            var l = new a.default(g);
                            l.setUser(t), l.setMetadata(u), l.setSecondaryExposures(n), this.log(l)
                        }
                    }, StatsigLogger.prototype.logLayerExposure = function(t, e, i, n, r, o, s, u, l) {
                        var c = [e, i, r, o, String(s), u.reason].join("|");
                        if (this.shouldLogExposure(c)) {
                            var d = {
                                config: e,
                                ruleID: i,
                                allocatedExperiment: r,
                                parameterName: o,
                                isExplicitParameter: String(s),
                                reason: u.reason,
                                time: u.time
                            };
                            l && (d.isManualExposure = "true");
                            var f = new a.default(h);
                            f.setUser(t), f.setMetadata(d), f.setSecondaryExposures(n), this.log(f)
                        }
                    }, StatsigLogger.prototype.logConfigDefaultValueFallback = function(t, e, i) {
                        var n = new a.default(E);
                        n.setUser(t), n.setValue(e), n.setMetadata(i), this.log(n), this.loggedErrors.add(e), this.sdkInternal.getConsoleLogger().error(e)
                    }, StatsigLogger.prototype.logAppError = function(t, e, i) {
                        var n = e.substring(0, 128);
                        if (!this.loggedErrors.has(n) && !(this.loggedErrors.size > 10)) {
                            var r = new a.default(y);
                            r.setUser(t), r.setValue(n), r.setMetadata(i), this.log(r), this.loggedErrors.add(n)
                        }
                    }, StatsigLogger.prototype.logDiagnostics = function(t, e) {
                        if (!l.default.disabled) {
                            var i = l.default.getMarkers(e);
                            l.default.clearContext(e);
                            var n = this.makeDiagnosticsEvent(t, {
                                markers: i,
                                context: e
                            });
                            this.log(n)
                        }
                    }, StatsigLogger.prototype.logAppMetrics = function(t) {
                        if ("function" == typeof(null === (e = null == window ? void 0 : window.performance) || void 0 === e ? void 0 : e.getEntriesByType)) {
                            var e, i = window.performance.getEntriesByType("navigation");
                            if (i && !(i.length < 1)) {
                                var n = i[0],
                                    r = {
                                        statsig_dimensions: {
                                            url: n.name
                                        }
                                    },
                                    o = new a.default(S);
                                if (o.setUser(t), o.setValue(n.duration), o.setMetadata(r), this.log(o), n instanceof PerformanceNavigationTiming) {
                                    var s = new a.default(m);
                                    s.setUser(t), s.setValue(n.domInteractive - n.startTime), s.setMetadata(r), this.log(s)
                                }
                            }
                        }
                    }, StatsigLogger.prototype.shutdown = function() {
                        this.flushInterval && (clearInterval(this.flushInterval), this.flushInterval = null), this.flush(!0)
                    }, StatsigLogger.prototype.flush = function(t) {
                        var e = this;
                        if (void 0 === t && (t = !1), this.addErrorBoundaryDiagnostics(), 0 !== this.queue.length) {
                            var i = this.queue;
                            if (this.queue = [], t && !this.sdkInternal.getNetwork().supportsKeepalive() && "undefined" != typeof navigator && (null == navigator ? void 0 : navigator.sendBeacon) != null) {
                                this.sdkInternal.getNetwork().sendLogBeacon({
                                    events: i,
                                    statsigMetadata: this.sdkInternal.getStatsigMetadata()
                                }) || (this.queue = i.concat(this.queue), this.queue.length > 0 && (this.addFailedRequest({
                                    events: this.queue,
                                    statsigMetadata: this.sdkInternal.getStatsigMetadata(),
                                    time: Date.now()
                                }), this.queue = []), this.saveFailedRequests());
                                return
                            }
                            this.sdkInternal.getNetwork().postToEndpoint(s.StatsigEndpoint.Rgstr, {
                                events: i,
                                statsigMetadata: this.sdkInternal.getStatsigMetadata()
                            }, {
                                retryOptions: {
                                    retryLimit: 3,
                                    backoff: 1e3
                                },
                                useKeepalive: t
                            }).then(function(t) {
                                if (!t.ok) throw t
                            }).catch(function(t) {
                                "function" == typeof t.text ? t.text().then(function(o) {
                                    e.sdkInternal.getErrorBoundary().logError(v, t, function() {
                                        return n(e, void 0, void 0, function() {
                                            return r(this, function(t) {
                                                return [2, {
                                                    eventCount: i.length,
                                                    error: o
                                                }]
                                            })
                                        })
                                    })
                                }) : e.sdkInternal.getErrorBoundary().logError(v, t, function() {
                                    return n(e, void 0, void 0, function() {
                                        return r(this, function(e) {
                                            return [2, {
                                                eventCount: i.length,
                                                error: t.message
                                            }]
                                        })
                                    })
                                }), e.newFailedRequest(v, i)
                            }).finally(function() {
                                return n(e, void 0, void 0, function() {
                                    return r(this, function(e) {
                                        return t && (this.queue.length > 0 && (this.addFailedRequest({
                                            events: this.queue,
                                            statsigMetadata: this.sdkInternal.getStatsigMetadata(),
                                            time: Date.now()
                                        }), this.queue = []), this.saveFailedRequests()), [2]
                                    })
                                })
                            })
                        }
                    }, StatsigLogger.prototype.saveFailedRequests = function() {
                        var t = this;
                        if (this.failedLogEvents.length > 0) {
                            var e = JSON.stringify(this.failedLogEvents);
                            if (e.length > 1024e3) {
                                this.clearLocalStorageRequests();
                                return
                            }
                            if (c.default.asyncStorage) {
                                c.default.setItemAsync(u.STATSIG_LOCAL_STORAGE_LOGGING_REQUEST_KEY, e).catch(function(e) {
                                    return t.sdkInternal.getErrorBoundary().logError("saveFailedRequests", e)
                                });
                                return
                            }
                            d.default.setItem(u.STATSIG_LOCAL_STORAGE_LOGGING_REQUEST_KEY, e)
                        }
                    }, StatsigLogger.prototype.sendSavedRequests = function() {
                        return n(this, void 0, void 0, function() {
                            var t, e, i, n, o, a, l, f, g = this;
                            return r(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        if (e = !1, !c.default.asyncStorage) return [3, 2];
                                        return [4, c.default.getItemAsync(u.STATSIG_LOCAL_STORAGE_LOGGING_REQUEST_KEY)];
                                    case 1:
                                        return t = r.sent(), [3, 3];
                                    case 2:
                                        t = d.default.getItem(u.STATSIG_LOCAL_STORAGE_LOGGING_REQUEST_KEY), r.label = 3;
                                    case 3:
                                        if (null == t) return this.clearLocalStorageRequests(), [2];
                                        t.length > 1024e3 && (e = !0), i = [];
                                        try {
                                            for (a = 0, i = JSON.parse(t), n = function(t) {
                                                    null != t && t.events && Array.isArray(t.events) && o.sdkInternal.getNetwork().postToEndpoint(s.StatsigEndpoint.Rgstr, t).then(function(t) {
                                                        if (!t.ok) throw Error(t.status + "")
                                                    }).catch(function() {
                                                        e || g.addFailedRequest(t)
                                                    })
                                                }, o = this, l = i; a < l.length; a++) f = l[a], n(f)
                                        } catch (t) {
                                            this.sdkInternal.getErrorBoundary().logError("sendSavedRequests", t)
                                        } finally {
                                            this.clearLocalStorageRequests()
                                        }
                                        return [2]
                                }
                            })
                        })
                    }, StatsigLogger.prototype.addFailedRequest = function(t) {
                        if (!(t.time < Date.now() - 432e6) && !(this.failedLogEvents.length > 100)) {
                            var e = t.events.length;
                            this.failedLogEventCount + e > 1e3 || (this.failedLogEvents.push(t), this.failedLogEventCount += e)
                        }
                    }, StatsigLogger.prototype.clearLocalStorageRequests = function() {
                        var t = this;
                        c.default.asyncStorage ? c.default.removeItemAsync(u.STATSIG_LOCAL_STORAGE_LOGGING_REQUEST_KEY).catch(function(e) {
                            return t.sdkInternal.getErrorBoundary().logError("clearLocalStorageRequests", e)
                        }) : d.default.removeItem(u.STATSIG_LOCAL_STORAGE_LOGGING_REQUEST_KEY)
                    }, StatsigLogger.prototype.newFailedRequest = function(t, e) {
                        this.loggedErrors.has(t) || (this.loggedErrors.add(t), this.failedLogEvents.push({
                            events: e,
                            statsigMetadata: this.sdkInternal.getStatsigMetadata(),
                            time: Date.now()
                        }), this.saveFailedRequests())
                    }, StatsigLogger.prototype.makeDiagnosticsEvent = function(t, e) {
                        var i = new a.default(_);
                        return i.setUser(t), i.setMetadata(e), i
                    }, StatsigLogger.prototype.addErrorBoundaryDiagnostics = function() {
                        if (0 !== l.default.getMarkerCount("api_call")) {
                            var t = this.makeDiagnosticsEvent(this.sdkInternal.getCurrentUser(), {
                                context: "api_call",
                                markers: l.default.getMarkers("api_call")
                            });
                            this.queue.push(t), l.default.clearContext("api_call")
                        }
                    }, StatsigLogger
                }();
            e.default = b
        },
        80607: function(t, e, i) {
            "use strict";
            var n, r, o = this && this.__awaiter || function(t, e, i, n) {
                    return new(i || (i = Promise))(function(r, o) {
                        function fulfilled(t) {
                            try {
                                step(n.next(t))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function rejected(t) {
                            try {
                                step(n.throw(t))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function step(t) {
                            var e;
                            t.done ? r(t.value) : ((e = t.value) instanceof i ? e : new i(function(t) {
                                t(e)
                            })).then(fulfilled, rejected)
                        }
                        step((n = n.apply(t, e || [])).next())
                    })
                },
                a = this && this.__generator || function(t, e) {
                    var i, n, r, o, a = {
                        label: 0,
                        sent: function() {
                            if (1 & r[0]) throw r[1];
                            return r[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: verb(0),
                        throw: verb(1),
                        return: verb(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function verb(o) {
                        return function(s) {
                            return function(o) {
                                if (i) throw TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (i = 1, n && (r = 2 & o[0] ? n.return : o[0] ? n.throw || ((r = n.return) && r.call(n), 0) : n.next) && !(r = r.call(n, o[1])).done) return r;
                                    switch (n = 0, r && (o = [2 & o[0], r.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            r = o;
                                            break;
                                        case 4:
                                            return a.label++, {
                                                value: o[1],
                                                done: !1
                                            };
                                        case 5:
                                            a.label++, n = o[1], o = [0];
                                            continue;
                                        case 7:
                                            o = a.ops.pop(), a.trys.pop();
                                            continue;
                                        default:
                                            if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                                a.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && a.label < r[1]) {
                                                a.label = r[1], r = o;
                                                break
                                            }
                                            if (r && a.label < r[2]) {
                                                a.label = r[2], a.ops.push(o);
                                                break
                                            }
                                            r[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    o = e.call(t, a)
                                } catch (t) {
                                    o = [6, t], n = 0
                                } finally {
                                    i = r = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, s])
                        }
                    }
                },
                s = this && this.__importDefault || function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.StatsigEndpoint = void 0;
            var u = s(i(46756)),
                l = s(i(23582));
            (n = r = e.StatsigEndpoint || (e.StatsigEndpoint = {})).Initialize = "initialize", n.Rgstr = "rgstr", n.LogEventBeacon = "log_event_beacon";
            var c = function() {
                function StatsigNetwork(t) {
                    this.retryCodes = {
                        408: !0,
                        500: !0,
                        502: !0,
                        503: !0,
                        504: !0,
                        522: !0,
                        524: !0,
                        599: !0
                    }, this.canUseKeepalive = !1, this.sdkInternal = t, this.leakyBucket = {}, this.init()
                }
                return StatsigNetwork.prototype.init = function() {
                    if (!this.sdkInternal.getOptions().getDisableNetworkKeepalive()) try {
                        this.canUseKeepalive = "keepalive" in new Request("")
                    } catch (t) {
                        this.canUseKeepalive = !1
                    }
                }, StatsigNetwork.prototype.fetchValues = function(t) {
                    var e = t.user,
                        i = t.sinceTime,
                        n = t.timeout,
                        o = t.useDeltas,
                        a = t.prefetchUsers,
                        s = t.previousDerivedFields,
                        u = t.hadBadDeltaChecksum,
                        c = t.badChecksum,
                        d = {
                            user: e,
                            prefetchUsers: a,
                            statsigMetadata: this.sdkInternal.getStatsigMetadata(),
                            sinceTime: null != i ? i : void 0,
                            canProcessDeltas: o,
                            hash: "djb2",
                            previousDerivedFields: s,
                            hadBadDeltaChecksum: u,
                            badChecksum: c
                        };
                    return this.postWithTimeout(r.Initialize, d, {
                        timeout: n,
                        retries: 3,
                        diagnostics: l.default.mark.intialize.networkRequest
                    })
                }, StatsigNetwork.prototype.postWithTimeout = function(t, e, i) {
                    var n, r = this,
                        s = null != i ? i : {},
                        u = s.timeout,
                        l = void 0 === u ? 0 : u,
                        c = s.retries,
                        d = void 0 === c ? 0 : c,
                        f = s.backoff,
                        g = void 0 === f ? 1e3 : f,
                        h = s.diagnostics,
                        p = !1,
                        v = null,
                        y = null,
                        S = [];
                    0 != l && (v = new Promise(function(t, e) {
                        setTimeout(function() {
                            p = !0, e(Error("The initialization timeout of " + l + "ms has been hit before the network request has completed."))
                        }, l)
                    }));
                    var m = this.postToEndpoint(t, e, {
                            retryOptions: {
                                retryLimit: d,
                                backoff: g
                            },
                            diagnostics: void 0 === h ? null : h
                        }).then(function(i) {
                            if (!(n = i).ok) return Promise.reject(Error("Request to " + t + " failed with status " + n.status));
                            if ("object" != typeof n.data) {
                                var s = Error("Request to " + t + " received invalid response type. Expected 'object' but got '" + typeof n.data + "'");
                                return r.sdkInternal.getErrorBoundary().logError("postWithTimeoutInvalidRes", s, function() {
                                    return o(r, void 0, void 0, function() {
                                        return a(this, function(i) {
                                            return [2, this.getErrorData(t, e, d, g, n)]
                                        })
                                    })
                                }), Promise.reject(s)
                            }
                            var u = n.data;
                            return r.sdkInternal.getErrorBoundary().capture("postWithTimeout", function() {
                                return o(r, void 0, void 0, function() {
                                    return a(this, function(t) {
                                        return y = u, p && (S.forEach(function(t) {
                                            return t(u)
                                        }), S = []), [2, Promise.resolve(u)]
                                    })
                                })
                            }, function() {
                                return Promise.resolve({})
                            }, {
                                getExtraData: function() {
                                    return o(r, void 0, void 0, function() {
                                        return a(this, function(i) {
                                            return [2, this.getErrorData(t, e, d, g, n)]
                                        })
                                    })
                                }
                            })
                        }).catch(function(t) {
                            return Promise.reject(t)
                        }),
                        _ = v ? Promise.race([m, v]) : m;
                    return _.eventually = function(t) {
                        return p && y ? t(y) : S.push(t), _
                    }, _
                }, StatsigNetwork.prototype.sendLogBeacon = function(t) {
                    if (this.sdkInternal.getOptions().getLocalModeEnabled()) return !0;
                    var e = new URL(this.sdkInternal.getOptions().getEventLoggingApi() + r.LogEventBeacon);
                    e.searchParams.append("k", this.sdkInternal.getSDKKey()), t.clientTime = Date.now() + "";
                    var i = null;
                    try {
                        i = JSON.stringify(t)
                    } catch (t) {
                        return !1
                    }
                    return navigator.sendBeacon(e.toString(), i)
                }, StatsigNetwork.prototype.postToEndpoint = function(t, e, i) {
                    var n;
                    return o(this, void 0, void 0, function() {
                        var s, l, c, d, f, g, h, p, v, y, S, m, _, E, b, I, C, w, D, L = this;
                        return a(this, function(O) {
                            if (c = void 0 !== (l = (s = null != i ? i : {}).useKeepalive) && l, f = void 0 === (d = s.diagnostics) ? null : d, p = void 0 === (h = (g = null !== (n = null == i ? void 0 : i.retryOptions) && void 0 !== n ? n : {}).retryLimit) ? 0 : h, y = void 0 === (v = g.attempt) ? 1 : v, m = void 0 === (S = g.backoff) ? 1e3 : S, this.sdkInternal.getOptions().getLocalModeEnabled()) return [2, Promise.reject("no network requests in localMode")];
                            if ("function" != typeof fetch) return [2, Promise.reject("fetch is not defined")];
                            if ("undefined" == typeof window && !this.sdkInternal.getOptions().getIgnoreWindowUndefined()) return [2, Promise.reject("window is not defined")];
                            if (_ = ([r.Initialize].includes(t) ? this.sdkInternal.getOptions().getApi() : this.sdkInternal.getOptions().getEventLoggingApi()) + t, null != (E = this.leakyBucket[_]) && E >= 30) return [2, Promise.reject(Error("Request failed because you are making the same request too frequently."))];
                            if (null == E ? this.leakyBucket[_] = 1 : this.leakyBucket[_] = E + 1, b = t === r.Initialize && u.default.encodeInitializeCall && "undefined" != typeof window && "function" == typeof(null == window ? void 0 : window.btoa), I = JSON.stringify(e), b) try {
                                I = window.btoa(I).split("").reverse().join("")
                            } catch (t) {
                                b = !1
                            }
                            return C = {
                                method: "POST",
                                body: I,
                                headers: {
                                    "Content-type": "application/json; charset=UTF-8",
                                    "STATSIG-API-KEY": this.sdkInternal.getSDKKey(),
                                    "STATSIG-CLIENT-TIME": Date.now() + "",
                                    "STATSIG-SDK-TYPE": this.sdkInternal.getSDKType(),
                                    "STATSIG-SDK-VERSION": this.sdkInternal.getSDKVersion(),
                                    "STATSIG-ENCODED": b ? "1" : "0"
                                }
                            }, this.canUseKeepalive && c && (C.keepalive = !0), null == f || f.start({
                                attempt: y
                            }), D = !0, [2, fetch(_, C).then(function(t) {
                                return o(L, void 0, void 0, function() {
                                    var e, i, n;
                                    return a(this, function(r) {
                                        switch (r.label) {
                                            case 0:
                                                if (!(w = t).ok) return [3, 4];
                                                if (e = w, 204 !== w.status) return [3, 1];
                                                return e.data = {
                                                    has_updates: !1,
                                                    is_no_content: !0
                                                }, [3, 3];
                                            case 1:
                                                return [4, w.text()];
                                            case 2:
                                                i = r.sent(), e.data = JSON.parse(i), r.label = 3;
                                            case 3:
                                                return null == f || f.end(this.getDiagnosticsData(w, y)), [2, Promise.resolve(e)];
                                            case 4:
                                                return this.retryCodes[w.status] || (D = !1), [4, w.text()];
                                            case 5:
                                                return n = r.sent(), [2, Promise.reject(Error(w.status + ": " + n))]
                                        }
                                    })
                                })
                            }).catch(function(i) {
                                return (null == f || f.end(L.getDiagnosticsData(w, y, i)), y < p && D) ? new Promise(function(i, n) {
                                    setTimeout(function() {
                                        L.leakyBucket[_] = Math.max(L.leakyBucket[_] - 1, 0), L.postToEndpoint(t, e, {
                                            retryOptions: {
                                                retryLimit: p,
                                                attempt: y + 1,
                                                backoff: 2 * m
                                            },
                                            useKeepalive: c,
                                            diagnostics: f
                                        }).then(i).catch(n)
                                    }, m)
                                }) : Promise.reject(i)
                            }).finally(function() {
                                L.leakyBucket[_] = Math.max(L.leakyBucket[_] - 1, 0)
                            })]
                        })
                    })
                }, StatsigNetwork.prototype.supportsKeepalive = function() {
                    return this.canUseKeepalive
                }, StatsigNetwork.prototype.getDiagnosticsData = function(t, e, i) {
                    var n, r;
                    return {
                        success: (null == t ? void 0 : t.ok) === !0,
                        statusCode: null == t ? void 0 : t.status,
                        sdkRegion: null === (n = null == t ? void 0 : t.headers) || void 0 === n ? void 0 : n.get("x-statsig-region"),
                        isDelta: (null === (r = null == t ? void 0 : t.data) || void 0 === r ? void 0 : r.is_delta) === !0,
                        attempt: e,
                        error: l.default.formatError(i)
                    }
                }, StatsigNetwork.prototype.getErrorData = function(t, e, i, n, r) {
                    var s;
                    return o(this, void 0, void 0, function() {
                        var o;
                        return a(this, function(a) {
                            try {
                                return o = {}, (null !== (s = r.headers) && void 0 !== s ? s : []).forEach(function(t, e) {
                                    o[e] = t
                                }), [2, {
                                    responseInfo: {
                                        headers: o,
                                        status: r.status,
                                        statusText: r.statusText,
                                        type: r.type,
                                        url: r.url,
                                        redirected: r.redirected,
                                        bodySnippet: r.data ? JSON.stringify(r.data).slice(0, 500) : null
                                    },
                                    requestInfo: {
                                        endpointName: t,
                                        bodySnippet: JSON.stringify(e).slice(0, 500),
                                        retries: i,
                                        backoff: n
                                    }
                                }]
                            } catch (t) {
                                return [2, {
                                    statusText: "statsig::failed to extract extra data"
                                }]
                            }
                            return [2]
                        })
                    })
                }, StatsigNetwork
            }();
            e.default = c
        },
        46756: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = function() {
                function StatsigRuntime() {}
                return StatsigRuntime.encodeInitializeCall = !0, StatsigRuntime
            }();
            e.default = i
        },
        28871: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.LogLevel = e.INIT_TIMEOUT_DEFAULT_MS = void 0, e.INIT_TIMEOUT_DEFAULT_MS = 3e3, (n = i = e.LogLevel || (e.LogLevel = {}))[n.NONE = 0] = "NONE", n[n.INFO = 1] = "INFO", n[n.DEBUG = 2] = "DEBUG";
            var i, n, r = function() {
                function StatsigSDKOptions(t) {
                    null == t && (t = {});
                    var n, r, o, a, s, u, l, c, d, f, g, h, p, v, y, S, m, _, E, b, I, C, w = null !== (n = t.api) && void 0 !== n ? n : "https://featuregates.org/v1/";
                    this.api = w.endsWith("/") ? w : w + "/", this.disableCurrentPageLogging = null !== (r = t.disableCurrentPageLogging) && void 0 !== r && r, this.environment = null !== (o = t.environment) && void 0 !== o ? o : null, this.loggingIntervalMillis = this.normalizeNumberInput(t.loggingIntervalMillis, {
                        default: 1e4,
                        min: 1e3,
                        max: 6e4
                    }), this.loggingBufferMaxSize = this.normalizeNumberInput(t.loggingBufferMaxSize, {
                        default: 100,
                        min: 2,
                        max: 500
                    }), this.disableNetworkKeepalive = null !== (a = t.disableNetworkKeepalive) && void 0 !== a && a, this.overrideStableID = null !== (s = t.overrideStableID) && void 0 !== s ? s : null, this.localMode = null !== (u = t.localMode) && void 0 !== u && u, this.initTimeoutMs = t.initTimeoutMs && t.initTimeoutMs >= 0 ? t.initTimeoutMs : e.INIT_TIMEOUT_DEFAULT_MS, this.disableErrorLogging = null !== (l = t.disableErrorLogging) && void 0 !== l && l, this.disableAutoMetricsLogging = null !== (c = t.disableAutoMetricsLogging) && void 0 !== c && c, this.initializeValues = null !== (d = t.initializeValues) && void 0 !== d ? d : null;
                    var D = null !== (g = null !== (f = t.eventLoggingApi) && void 0 !== f ? f : t.api) && void 0 !== g ? g : "https://events.statsigapi.net/v1/";
                    this.eventLoggingApi = D.endsWith("/") ? D : D + "/", this.prefetchUsers = null !== (h = t.prefetchUsers) && void 0 !== h ? h : [], this.disableLocalStorage = null !== (p = t.disableLocalStorage) && void 0 !== p && p, this.initCompletionCallback = null !== (v = t.initCompletionCallback) && void 0 !== v ? v : null, this.updateCompletionCallback = null !== (y = t.updateUserCompletionCallback) && void 0 !== y ? y : null, this.disableDiagnosticsLogging = null !== (S = t.disableDiagnosticsLogging) && void 0 !== S && S, this.logLevel = null !== (m = null == t ? void 0 : t.logLevel) && void 0 !== m ? m : i.NONE, this.ignoreWindowUndefined = null !== (_ = null == t ? void 0 : t.ignoreWindowUndefined) && void 0 !== _ && _, this.fetchMode = null !== (E = t.fetchMode) && void 0 !== E ? E : "network-only", this.disableLocalOverrides = null !== (b = null == t ? void 0 : t.disableLocalOverrides) && void 0 !== b && b, this.gateEvaluationCallback = null !== (I = null == t ? void 0 : t.gateEvaluationCallback) && void 0 !== I ? I : null, this.userPersistentStorage = null !== (C = null == t ? void 0 : t.userPersistentStorage) && void 0 !== C ? C : null
                }
                return StatsigSDKOptions.prototype.getApi = function() {
                    return this.api
                }, StatsigSDKOptions.prototype.getEnvironment = function() {
                    return this.environment
                }, StatsigSDKOptions.prototype.getDisableCurrentPageLogging = function() {
                    return this.disableCurrentPageLogging
                }, StatsigSDKOptions.prototype.getLoggingIntervalMillis = function() {
                    return this.loggingIntervalMillis
                }, StatsigSDKOptions.prototype.getLoggingBufferMaxSize = function() {
                    return this.loggingBufferMaxSize
                }, StatsigSDKOptions.prototype.getDisableNetworkKeepalive = function() {
                    return this.disableNetworkKeepalive
                }, StatsigSDKOptions.prototype.getOverrideStableID = function() {
                    return this.overrideStableID
                }, StatsigSDKOptions.prototype.getLocalModeEnabled = function() {
                    return this.localMode
                }, StatsigSDKOptions.prototype.getInitTimeoutMs = function() {
                    return this.initTimeoutMs
                }, StatsigSDKOptions.prototype.getDisableErrorLogging = function() {
                    return this.disableErrorLogging
                }, StatsigSDKOptions.prototype.getDisableAutoMetricsLogging = function() {
                    return this.disableAutoMetricsLogging
                }, StatsigSDKOptions.prototype.getInitializeValues = function() {
                    return this.initializeValues
                }, StatsigSDKOptions.prototype.getEventLoggingApi = function() {
                    return this.eventLoggingApi
                }, StatsigSDKOptions.prototype.getPrefetchUsers = function() {
                    return this.prefetchUsers
                }, StatsigSDKOptions.prototype.getDisableLocalStorage = function() {
                    return this.disableLocalStorage
                }, StatsigSDKOptions.prototype.getInitCompletionCallback = function() {
                    return this.initCompletionCallback
                }, StatsigSDKOptions.prototype.getUpdateUserCompletionCallback = function() {
                    return this.updateCompletionCallback
                }, StatsigSDKOptions.prototype.getDisableDiagnosticsLogging = function() {
                    return this.disableDiagnosticsLogging
                }, StatsigSDKOptions.prototype.getLogLevel = function() {
                    return this.logLevel
                }, StatsigSDKOptions.prototype.getIgnoreWindowUndefined = function() {
                    return this.ignoreWindowUndefined
                }, StatsigSDKOptions.prototype.getFetchMode = function() {
                    return this.fetchMode
                }, StatsigSDKOptions.prototype.getDisableLocalOverrides = function() {
                    return this.disableLocalOverrides
                }, StatsigSDKOptions.prototype.getGateEvaluationCallback = function() {
                    return this.gateEvaluationCallback
                }, StatsigSDKOptions.prototype.getUserPersistentStorage = function() {
                    return this.userPersistentStorage
                }, StatsigSDKOptions.prototype.normalizeNumberInput = function(t, e) {
                    return null == t ? e.default : Math.max(Math.min(t, e.max), e.min)
                }, StatsigSDKOptions
            }();
            e.default = r
        },
        88386: function(t, e, i) {
            "use strict";
            var n = this && this.__assign || function() {
                    return (n = Object.assign || function(t) {
                        for (var e, i = 1, n = arguments.length; i < n; i++)
                            for (var r in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                        return t
                    }).apply(this, arguments)
                },
                r = this && this.__awaiter || function(t, e, i, n) {
                    return new(i || (i = Promise))(function(r, o) {
                        function fulfilled(t) {
                            try {
                                step(n.next(t))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function rejected(t) {
                            try {
                                step(n.throw(t))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function step(t) {
                            var e;
                            t.done ? r(t.value) : ((e = t.value) instanceof i ? e : new i(function(t) {
                                t(e)
                            })).then(fulfilled, rejected)
                        }
                        step((n = n.apply(t, e || [])).next())
                    })
                },
                o = this && this.__generator || function(t, e) {
                    var i, n, r, o, a = {
                        label: 0,
                        sent: function() {
                            if (1 & r[0]) throw r[1];
                            return r[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: verb(0),
                        throw: verb(1),
                        return: verb(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function verb(o) {
                        return function(s) {
                            return function(o) {
                                if (i) throw TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (i = 1, n && (r = 2 & o[0] ? n.return : o[0] ? n.throw || ((r = n.return) && r.call(n), 0) : n.next) && !(r = r.call(n, o[1])).done) return r;
                                    switch (n = 0, r && (o = [2 & o[0], r.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            r = o;
                                            break;
                                        case 4:
                                            return a.label++, {
                                                value: o[1],
                                                done: !1
                                            };
                                        case 5:
                                            a.label++, n = o[1], o = [0];
                                            continue;
                                        case 7:
                                            o = a.ops.pop(), a.trys.pop();
                                            continue;
                                        default:
                                            if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                                a.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && a.label < r[1]) {
                                                a.label = r[1], r = o;
                                                break
                                            }
                                            if (r && a.label < r[2]) {
                                                a.label = r[2], a.ops.push(o);
                                                break
                                            }
                                            r[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    o = e.call(t, a)
                                } catch (t) {
                                    o = [6, t], n = 0
                                } finally {
                                    i = r = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, s])
                        }
                    }
                },
                a = this && this.__importDefault || function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var s = a(i(43228)),
                u = a(i(2520)),
                l = a(i(51410)),
                c = i(90977),
                d = i(60925),
                f = a(i(17472)),
                g = a(i(42994)),
                h = i(51354),
                p = function() {
                    function StatsigStore(t, e) {
                        this.overrides = {
                            gates: {},
                            configs: {},
                            layers: {}
                        }, this.sdkInternal = t, this.userCacheKey = this.sdkInternal.getCurrentUserCacheKey(), this.values = {}, this.userValues = {
                            feature_gates: {},
                            dynamic_configs: {},
                            sticky_experiments: {},
                            layer_configs: {},
                            has_updates: !1,
                            time: 0,
                            evaluation_time: 0,
                            derived_fields: {}
                        }, this.stickyDeviceExperiments = {}, this.loaded = !1, this.reason = h.EvaluationReason.Uninitialized, this.userPersistentStorageAdapter = this.sdkInternal.getOptions().getUserPersistentStorage(), this.userPersistentStorageData = {
                            experiments: {}
                        }, e ? this.bootstrap(e) : this.load()
                    }
                    return StatsigStore.prototype.load = function() {
                        this.loadFromLocalStorage(), this.partialLoadFromPersistentStorageAdapter()
                    }, StatsigStore.prototype.loadAsync = function() {
                        return r(this, void 0, void 0, function() {
                            return o(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, this.loadFromAsyncStorage()];
                                    case 1:
                                        return t.sent(), this.partialLoadFromPersistentStorageAdapter(), [2]
                                }
                            })
                        })
                    }, StatsigStore.prototype.updateUser = function(t) {
                        this.userCacheKey = this.sdkInternal.getCurrentUserCacheKey();
                        var e = this.setUserValueFromCache(t);
                        return this.partialLoadFromPersistentStorageAdapter(), e
                    }, StatsigStore.prototype.loadFromAsyncStorage = function() {
                        return r(this, void 0, void 0, function() {
                            var t, e;
                            return o(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return t = this.parseCachedValues, [4, f.default.getItemAsync(c.INTERNAL_STORE_KEY)];
                                    case 1:
                                        return e = [i.sent()], [4, f.default.getItemAsync(c.STICKY_DEVICE_EXPERIMENTS_KEY)];
                                    case 2:
                                        return t.apply(this, e.concat([i.sent()])), this.userCacheKey = this.sdkInternal.getCurrentUserCacheKey(), this.loaded = !0, [2]
                                }
                            })
                        })
                    }, StatsigStore.prototype.bootstrap = function(t) {
                        var e, i, n, r, o, a, s = this.sdkInternal.getCurrentUserCacheKey(),
                            u = this.sdkInternal.getCurrentUser(),
                            c = null !== (n = null !== (i = null === (e = null == u ? void 0 : u.customIDs) || void 0 === e ? void 0 : e.stableID) && void 0 !== i ? i : this.sdkInternal.getStatsigMetadata().stableID) && void 0 !== n ? n : null,
                            d = l.default.getEvaluationReasonForBootstrap(u, t, c);
                        this.loaded = !0;
                        try {
                            this.userValues.feature_gates = null !== (r = t.feature_gates) && void 0 !== r ? r : {}, this.userValues.dynamic_configs = null !== (o = t.dynamic_configs) && void 0 !== o ? o : {}, this.userValues.layer_configs = null !== (a = t.layer_configs) && void 0 !== a ? a : {}, this.userValues.evaluation_time = Date.now(), this.userValues.time = Date.now(), this.userValues.hash_used = t.hash_used, this.values[s.v2] = this.userValues, this.reason = d, this.loadOverrides()
                        } catch (t) {
                            return
                        }
                    }, StatsigStore.prototype.loadFromLocalStorage = function() {
                        f.default.asyncStorage || (this.parseCachedValues(g.default.getItem(c.INTERNAL_STORE_KEY), g.default.getItem(c.STICKY_DEVICE_EXPERIMENTS_KEY)), this.loaded = !0)
                    }, StatsigStore.prototype.partialLoadFromPersistentStorageAdapter = function() {
                        if (this.userPersistentStorageAdapter) {
                            var t = this.sdkInternal.getCurrentUserID();
                            if (t) {
                                try {
                                    this.userPersistentStorageData = JSON.parse(this.userPersistentStorageAdapter.load(t))
                                } catch (t) {
                                    console.warn("Failed to load from user persistent storage.", t)
                                }
                                this.userValues.sticky_experiments = this.userPersistentStorageData.experiments
                            }
                        }
                    }, StatsigStore.prototype.saveStickyExperimentsToPersistentStorageAdapter = function() {
                        if (this.userPersistentStorageAdapter) {
                            var t = this.sdkInternal.getCurrentUserID();
                            if (t) {
                                var e = n(n({}, this.userPersistentStorageData), {
                                    experiments: this.userValues.sticky_experiments
                                });
                                try {
                                    this.userPersistentStorageAdapter.save(t, JSON.stringify(e))
                                } catch (t) {
                                    console.warn("Failed to save user experiment values to persistent storage.", t)
                                }
                            }
                        }
                    }, StatsigStore.prototype.isLoaded = function() {
                        return this.loaded
                    }, StatsigStore.prototype.getLastUpdateTime = function(t) {
                        var e = (0, d.djb2HashForObject)(t);
                        return this.userValues.user_hash == e ? this.userValues.time : null
                    }, StatsigStore.prototype.getPreviousDerivedFields = function(t) {
                        var e = (0, d.djb2HashForObject)(t);
                        if (this.userValues.user_hash == e) return this.userValues.derived_fields
                    }, StatsigStore.prototype.parseCachedValues = function(t, e) {
                        try {
                            this.values = t ? JSON.parse(t) : this.values, this.setUserValueFromCache()
                        } catch (t) {
                            this.removeFromStorage(c.INTERNAL_STORE_KEY)
                        }
                        try {
                            var i = e ? JSON.parse(e) : null;
                            i && (this.stickyDeviceExperiments = i)
                        } catch (t) {
                            this.removeFromStorage(c.STICKY_DEVICE_EXPERIMENTS_KEY)
                        }
                        this.loadOverrides()
                    }, StatsigStore.prototype.getUserValues = function(t) {
                        var e;
                        return null !== (e = this.values[t.v2]) && void 0 !== e ? e : this.values[t.v1]
                    }, StatsigStore.prototype.setUserValueFromCache = function(t) {
                        void 0 === t && (t = !1);
                        var e, i = this.getUserValues(this.userCacheKey);
                        return null == i ? (this.resetUserValues(), this.reason = h.EvaluationReason.Uninitialized, null) : (this.userValues = i, this.reason = t ? h.EvaluationReason.Prefetch : h.EvaluationReason.Cache, null !== (e = i.evaluation_time) && void 0 !== e ? e : 0)
                    }, StatsigStore.prototype.removeFromStorage = function(t) {
                        var e = this;
                        f.default.removeItemAsync(t).catch(function(t) {
                            return e.sdkInternal.getErrorBoundary().logError("removeFromStorage", t)
                        }), g.default.removeItem(t)
                    }, StatsigStore.prototype.loadOverrides = function() {
                        if (!this.sdkInternal.getOptions().getDisableLocalOverrides()) {
                            var t = g.default.getItem(c.OVERRIDES_STORE_KEY);
                            if (null != t) try {
                                this.overrides = JSON.parse(t)
                            } catch (t) {
                                g.default.removeItem(c.OVERRIDES_STORE_KEY)
                            }
                        }
                    }, StatsigStore.prototype.setEvaluationReason = function(t) {
                        this.reason = t
                    }, StatsigStore.prototype.save = function(t, e, i) {
                        return r(this, void 0, void 0, function() {
                            var n, r, a, s;
                            return o(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        if (n = (0, d.getUserCacheKey)(this.getStableID(), t), (r = e).is_delta) return [2, this.saveInitDeltas(t, e, !0, i)];
                                        return this.mergeInitializeResponseIntoUserMap(r, this.values, n, t, function(t) {
                                            return t
                                        }, i), (a = this.getUserValues(n)) && n && n.v2 === this.userCacheKey.v2 && (this.userValues = a, this.reason = h.EvaluationReason.Network), s = this, [4, this.writeValuesToStorage(this.values)];
                                    case 1:
                                        return s.values = o.sent(), [2]
                                }
                            })
                        })
                    }, StatsigStore.prototype.saveWithoutUpdatingClientState = function(t, e, i) {
                        return r(this, void 0, void 0, function() {
                            var n, r, a;
                            return o(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        if (n = (0, d.getUserCacheKey)(this.getStableID(), t), (r = e).is_delta) return [2, this.saveInitDeltas(t, e, !1, i)];
                                        return a = JSON.parse(JSON.stringify(this.values)), this.mergeInitializeResponseIntoUserMap(r, a, n, t, function(t) {
                                            return t
                                        }, i), [4, this.writeValuesToStorage(a)];
                                    case 1:
                                        return o.sent(), [2]
                                }
                            })
                        })
                    }, StatsigStore.prototype.saveInitDeltas = function(t, e, i, n) {
                        var a, s;
                        return r(this, void 0, void 0, function() {
                            var r, u, l, c, f, g, p, v, y, S, m = this;
                            return o(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        if (r = (0, d.getUserCacheKey)(this.getStableID(), t), u = e, l = JSON.parse(JSON.stringify(this.values)), this.mergeInitializeResponseIntoUserMap(u, l, r, t, function(t, e) {
                                                var i, n = null !== (i = l[e]) && void 0 !== i ? i : m.getDefaultUserCacheValues();
                                                return m.mergeUserCacheValues(n, t)
                                            }, n), c = !1, f = void 0, g = !1, Object.keys(null !== (a = u.prefetched_user_values) && void 0 !== a ? a : {}).forEach(function(t) {
                                                var e, i = l[t],
                                                    n = null === (e = u.prefetched_user_values) || void 0 === e ? void 0 : e[t];
                                                if (i && n) {
                                                    removeDeletedKeysFromUserValues(n, i);
                                                    var r = n.checksum,
                                                        o = (0, d.djb2HashForObject)({
                                                            feature_gates: l[t].feature_gates,
                                                            dynamic_configs: l[t].dynamic_configs,
                                                            layer_configs: l[t].layer_configs
                                                        });
                                                    r && r !== o && (c = !0, f = o), p.hash_used !== u.hash_used && (g = !0)
                                                }
                                            }), removeDeletedKeysFromUserValues(u, p = null !== (s = l[r.v2]) && void 0 !== s ? s : l[r.v1]), v = u.checksum, y = (0, d.djb2HashForObject)({
                                                feature_gates: p.feature_gates,
                                                dynamic_configs: p.dynamic_configs,
                                                layer_configs: p.layer_configs
                                            }), v && v !== y && (c = !0, f = y), p.hash_used !== u.hash_used && (g = !0), c || g) return this.refetchAndSaveValues(t, n, void 0, f, c).catch(function(t) {
                                            return m.sdkInternal.getErrorBoundary().logError("refetchAndSaveValues", t)
                                        }), [2];
                                        if (!i) return [3, 2];
                                        return p && r.v2 === this.userCacheKey.v2 && (this.userValues = p, this.reason = h.EvaluationReason.Network), S = this, [4, this.writeValuesToStorage(l)];
                                    case 1:
                                        return S.values = o.sent(), [3, 4];
                                    case 2:
                                        return [4, this.writeValuesToStorage(l)];
                                    case 3:
                                        o.sent(), o.label = 4;
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, StatsigStore.prototype.refetchAndSaveValues = function(t, e, i, n, a) {
                        return void 0 === i && (i = this.sdkInternal.getOptions().getInitTimeoutMs()), r(this, void 0, void 0, function() {
                            var r, s, u = this;
                            return o(this, function(o) {
                                return r = this.getLastUpdateTime(t), s = this.getPreviousDerivedFields(t), [2, this.sdkInternal.getNetwork().fetchValues({
                                    user: t,
                                    sinceTime: r,
                                    timeout: i,
                                    useDeltas: !1,
                                    prefetchUsers: e,
                                    previousDerivedFields: s,
                                    hadBadDeltaChecksum: a,
                                    badChecksum: n
                                }).then(function(i) {
                                    (null == i ? void 0 : i.has_updates) && u.saveWithoutUpdatingClientState(t, i, e).catch(function(t) {
                                        return u.sdkInternal.getErrorBoundary().logError("refetchAndSaveValues:then", t)
                                    })
                                }).catch(function(t) {
                                    return u.sdkInternal.getErrorBoundary().logError("refetchAndSaveValues", t)
                                })]
                            })
                        })
                    }, StatsigStore.prototype.getStableID = function() {
                        return this.sdkInternal.getStableID()
                    }, StatsigStore.prototype.mergeInitializeResponseIntoUserMap = function(t, e, i, n, r, o) {
                        if (t.prefetched_user_values)
                            for (var a = Object.keys(t.prefetched_user_values), s = 0; s < a.length; s++) {
                                var u = a[s],
                                    l = t.prefetched_user_values[u],
                                    c = r(this.convertAPIDataToCacheValues(l, u), u);
                                if (t.has_updates && t.time && o) {
                                    var f = (0, d.djb2HashForObject)(o[u]);
                                    c.user_hash = f
                                }
                                e[u] = c
                            }
                        if (i) {
                            var g = this.convertAPIDataToCacheValues(t, i.v2);
                            if (t.has_updates && t.time) {
                                var f = (0, d.djb2HashForObject)(n);
                                g.user_hash = f
                            }
                            e[i.v2] = r(g, i.v2)
                        }
                    }, StatsigStore.prototype.getDefaultUserCacheValues = function() {
                        return {
                            feature_gates: {},
                            layer_configs: {},
                            dynamic_configs: {},
                            sticky_experiments: {},
                            time: 0,
                            evaluation_time: 0,
                            derived_fields: {}
                        }
                    }, StatsigStore.prototype.mergeUserCacheValues = function(t, e) {
                        return {
                            feature_gates: n(n({}, t.feature_gates), e.feature_gates),
                            layer_configs: n(n({}, t.layer_configs), e.layer_configs),
                            dynamic_configs: n(n({}, t.dynamic_configs), e.dynamic_configs),
                            sticky_experiments: t.sticky_experiments,
                            time: e.time,
                            evaluation_time: e.evaluation_time,
                            derived_fields: e.derived_fields,
                            hash_used: e.hash_used,
                            user_hash: e.user_hash
                        }
                    }, StatsigStore.prototype.writeValuesToStorage = function(t) {
                        return r(this, void 0, void 0, function() {
                            return o(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        if (t[this.userCacheKey.v2] && delete t[this.userCacheKey.v1], t = Object.fromEntries(Object.entries(t).sort(function(t, e) {
                                                var i, n, r = t[1],
                                                    o = e[1];
                                                return null == r ? 1 : null == o ? -1 : (null !== (i = null == o ? void 0 : o.evaluation_time) && void 0 !== i ? i : null == o ? void 0 : o.time) - (null !== (n = null == r ? void 0 : r.evaluation_time) && void 0 !== n ? n : null == r ? void 0 : r.time)
                                            }).slice(0, 10)), !f.default.asyncStorage) return [3, 2];
                                        return [4, f.default.setItemAsync(c.INTERNAL_STORE_KEY, JSON.stringify(t))];
                                    case 1:
                                        return e.sent(), [3, 3];
                                    case 2:
                                        g.default.setItem(c.INTERNAL_STORE_KEY, JSON.stringify(t)), e.label = 3;
                                    case 3:
                                        return [2, t]
                                }
                            })
                        })
                    }, StatsigStore.prototype.checkGate = function(t, e) {
                        void 0 === e && (e = !1);
                        var i, n, r = this.getHashedSpecName(t),
                            o = {
                                name: t,
                                value: !1,
                                rule_id: "",
                                secondary_exposures: []
                            };
                        if (e || null == this.overrides.gates[t]) {
                            var a = null === (i = this.userValues) || void 0 === i ? void 0 : i.feature_gates[r];
                            a && (o = a), n = this.getEvaluationDetails(null != a)
                        } else o = {
                            name: t,
                            value: this.overrides.gates[t],
                            rule_id: "override",
                            secondary_exposures: []
                        }, n = this.getEvaluationDetails(!1, h.EvaluationReason.LocalOverride);
                        return {
                            evaluationDetails: n,
                            gate: o
                        }
                    }, StatsigStore.prototype.getConfig = function(t, e) {
                        void 0 === e && (e = !1);
                        var i, n, r, o, a = this.getHashedSpecName(t);
                        if (e || null == this.overrides.configs[t]) {
                            if ((null === (i = this.userValues) || void 0 === i ? void 0 : i.dynamic_configs[a]) != null) {
                                var u = null === (n = this.userValues) || void 0 === n ? void 0 : n.dynamic_configs[a];
                                o = this.getEvaluationDetails(!0), r = this.createDynamicConfig(t, u, o)
                            } else o = this.getEvaluationDetails(!1), r = new s.default(t, {}, "", o)
                        } else o = this.getEvaluationDetails(!1, h.EvaluationReason.LocalOverride), r = new s.default(t, this.overrides.configs[t], "override", o, [], "", this.makeOnConfigDefaultValueFallback(this.sdkInternal.getCurrentUser()));
                        return r
                    }, StatsigStore.prototype.getExperiment = function(t, e, i) {
                        if (void 0 === e && (e = !1), void 0 === i && (i = !1), i || null == this.overrides.configs[t]) {
                            var n, r, o = this.getLatestValue(t, "dynamic_configs");
                            r = this.getEvaluationDetails(null != o);
                            var a = this.getPossiblyStickyValue(t, o, e, !1, r);
                            n = this.createDynamicConfig(t, a, r)
                        } else r = this.getEvaluationDetails(!1, h.EvaluationReason.LocalOverride), n = new s.default(t, this.overrides.configs[t], "override", r);
                        return n
                    }, StatsigStore.prototype.getLayer = function(t, e, i) {
                        if (null != this.overrides.layers[e]) {
                            var n, r, o, a, s = this.getEvaluationDetails(!1, h.EvaluationReason.LocalOverride);
                            return u.default._create(e, null !== (n = this.overrides.layers[e]) && void 0 !== n ? n : {}, "override", s, t)
                        }
                        var l = this.getLatestValue(e, "layer_configs"),
                            c = this.getEvaluationDetails(null != l),
                            d = this.getPossiblyStickyValue(e, l, i, !0, c);
                        return u.default._create(e, null !== (r = null == d ? void 0 : d.value) && void 0 !== r ? r : {}, null !== (o = null == d ? void 0 : d.rule_id) && void 0 !== o ? o : "", c, t, null == d ? void 0 : d.secondary_exposures, null == d ? void 0 : d.undelegated_secondary_exposures, null !== (a = null == d ? void 0 : d.allocated_experiment_name) && void 0 !== a ? a : "", null == d ? void 0 : d.explicit_parameters, null == d ? void 0 : d.group_name)
                    }, StatsigStore.prototype.overrideConfig = function(t, e) {
                        try {
                            JSON.stringify(e)
                        } catch (t) {
                            console.warn("Failed to stringify given config override.  Dropping", t);
                            return
                        }
                        this.overrides.configs[t] = e, this.saveOverrides()
                    }, StatsigStore.prototype.overrideLayer = function(t, e) {
                        try {
                            JSON.stringify(e)
                        } catch (t) {
                            console.warn("Failed to stringify given layer override.  Dropping", t);
                            return
                        }
                        this.overrides.layers[t] = e, this.saveOverrides()
                    }, StatsigStore.prototype.overrideGate = function(t, e) {
                        this.overrides.gates[t] = e, this.saveOverrides()
                    }, StatsigStore.prototype.removeGateOverride = function(t) {
                        null == t ? this.overrides.gates = {} : delete this.overrides.gates[t], this.saveOverrides()
                    }, StatsigStore.prototype.removeConfigOverride = function(t) {
                        null == t ? this.overrides.configs = {} : delete this.overrides.configs[t], this.saveOverrides()
                    }, StatsigStore.prototype.removeLayerOverride = function(t) {
                        null == t ? this.overrides.layers = {} : delete this.overrides.layers[t], this.saveOverrides()
                    }, StatsigStore.prototype.getAllOverrides = function() {
                        return this.overrides
                    }, StatsigStore.prototype.saveOverrides = function() {
                        try {
                            g.default.setItem(c.OVERRIDES_STORE_KEY, JSON.stringify(this.overrides))
                        } catch (t) {
                            console.warn("Failed to persist gate/config overrides")
                        }
                    }, StatsigStore.prototype.getLatestValue = function(t, e) {
                        var i, n, r, o, a, s = this.getHashedSpecName(t);
                        return null !== (r = null === (n = null === (i = this.userValues) || void 0 === i ? void 0 : i[e]) || void 0 === n ? void 0 : n[s]) && void 0 !== r ? r : null === (a = null === (o = this.userValues) || void 0 === o ? void 0 : o[e]) || void 0 === a ? void 0 : a[t]
                    }, StatsigStore.prototype.getPossiblyStickyValue = function(t, e, i, n, r) {
                        var o, a = this.getHashedSpecName(t);
                        if (!i) return this.removeStickyValue(a), e;
                        var s = this.getStickyValue(a);
                        if (!s) return this.attemptToSaveStickyValue(a, e), e;
                        var u = null;
                        return (null == (u = n ? this.getLatestValue(null !== (o = null == s ? void 0 : s.allocated_experiment_name) && void 0 !== o ? o : "", "dynamic_configs") : e) ? void 0 : u.is_experiment_active) == !0 ? (r.reason = h.EvaluationReason.Sticky, s) : ((null == e ? void 0 : e.is_experiment_active) == !0 ? this.attemptToSaveStickyValue(a, e) : this.removeStickyValue(a), e)
                    }, StatsigStore.prototype.createDynamicConfig = function(t, e, i) {
                        var n, r, o;
                        return new s.default(t, null !== (n = null == e ? void 0 : e.value) && void 0 !== n ? n : {}, null !== (r = null == e ? void 0 : e.rule_id) && void 0 !== r ? r : "", i, null == e ? void 0 : e.secondary_exposures, null !== (o = null == e ? void 0 : e.allocated_experiment_name) && void 0 !== o ? o : "", this.makeOnConfigDefaultValueFallback(this.sdkInternal.getCurrentUser()), null == e ? void 0 : e.group_name, null == e ? void 0 : e.id_type, null == e ? void 0 : e.is_experiment_active)
                    }, StatsigStore.prototype.getStickyValue = function(t) {
                        var e, i;
                        return null !== (i = null === (e = this.userValues) || void 0 === e ? void 0 : e.sticky_experiments[t]) && void 0 !== i ? i : this.stickyDeviceExperiments[t]
                    }, StatsigStore.prototype.attemptToSaveStickyValue = function(t, e) {
                        var i;
                        e && e.is_user_in_experiment && e.is_experiment_active && (!0 === e.is_device_based ? this.stickyDeviceExperiments[t] = e : (null === (i = this.userValues) || void 0 === i ? void 0 : i.sticky_experiments) && (this.userValues.sticky_experiments[t] = e), this.saveStickyValuesToStorage())
                    }, StatsigStore.prototype.removeStickyValue = function(t) {
                        var e, i, n, r;
                        (0 !== Object.keys(null !== (i = null === (e = this.userValues) || void 0 === e ? void 0 : e.sticky_experiments) && void 0 !== i ? i : {}).length || 0 !== Object.keys(null !== (n = this.stickyDeviceExperiments) && void 0 !== n ? n : {}).length) && (null === (r = this.userValues) || void 0 === r || delete r.sticky_experiments[t], delete this.stickyDeviceExperiments[t], this.saveStickyValuesToStorage())
                    }, StatsigStore.prototype.saveStickyValuesToStorage = function() {
                        this.userPersistentStorageAdapter ? this.saveStickyExperimentsToPersistentStorageAdapter() : (this.values[this.userCacheKey.v2] = this.userValues, this.setItemToStorage(c.INTERNAL_STORE_KEY, JSON.stringify(this.values)), this.setItemToStorage(c.STICKY_DEVICE_EXPERIMENTS_KEY, JSON.stringify(this.stickyDeviceExperiments)))
                    }, StatsigStore.prototype.getGlobalEvaluationDetails = function() {
                        var t, e;
                        return {
                            reason: null !== (t = this.reason) && void 0 !== t ? t : h.EvaluationReason.Uninitialized,
                            time: null !== (e = this.userValues.evaluation_time) && void 0 !== e ? e : 0
                        }
                    }, StatsigStore.prototype.getEvaluationDetails = function(t, e) {
                        var i;
                        return t ? {
                            reason: this.reason,
                            time: null !== (i = this.userValues.evaluation_time) && void 0 !== i ? i : Date.now()
                        } : {
                            reason: null != e ? e : this.reason == h.EvaluationReason.Uninitialized ? h.EvaluationReason.Uninitialized : h.EvaluationReason.Unrecognized,
                            time: Date.now()
                        }
                    }, StatsigStore.prototype.resetUserValues = function() {
                        this.userValues = {
                            feature_gates: {},
                            dynamic_configs: {},
                            sticky_experiments: {},
                            layer_configs: {},
                            time: 0,
                            evaluation_time: 0,
                            derived_fields: {}
                        }
                    }, StatsigStore.prototype.getHashedSpecName = function(t) {
                        switch (this.userValues.hash_used) {
                            case "djb2":
                                return (0, d.djb2Hash)(t);
                            case "none":
                                return t;
                            default:
                                return (0, d.sha256Hash)(t)
                        }
                    }, StatsigStore.prototype.convertAPIDataToCacheValues = function(t, e) {
                        var i, n;
                        return {
                            feature_gates: t.feature_gates,
                            layer_configs: t.layer_configs,
                            dynamic_configs: t.dynamic_configs,
                            sticky_experiments: null !== (n = null === (i = this.values[e]) || void 0 === i ? void 0 : i.sticky_experiments) && void 0 !== n ? n : {},
                            time: null == t.time || isNaN(t.time) ? 0 : t.time,
                            evaluation_time: Date.now(),
                            hash_used: t.hash_used,
                            derived_fields: t.derived_fields
                        }
                    }, StatsigStore.prototype.setItemToStorage = function(t, e) {
                        var i = this;
                        f.default.asyncStorage ? f.default.setItemAsync(t, e).catch(function(t) {
                            i.sdkInternal.getErrorBoundary().logError("setItemToStorage", t)
                        }) : g.default.setItem(t, e)
                    }, StatsigStore.prototype.makeOnConfigDefaultValueFallback = function(t) {
                        var e = this;
                        return function(i, n, r, o) {
                            e.isLoaded() && e.sdkInternal.getLogger().logConfigDefaultValueFallback(t, "Parameter " + n + " is a value of type " + o + ".\n          Returning requested defaultValue type " + r, {
                                name: i.getName(),
                                ruleID: i.getRuleID(),
                                parameter: n,
                                defaultValueType: r,
                                valueType: o
                            })
                        }
                    }, StatsigStore
                }();

            function removeDeletedKeysFromUserValues(t, e) {
                var i, n, r;
                (null !== (i = t.deleted_configs) && void 0 !== i ? i : []).forEach(function(t) {
                    delete e.dynamic_configs[t]
                }), (null !== (n = t.deleted_gates) && void 0 !== n ? n : []).forEach(function(t) {
                    delete e.feature_gates[t]
                }), (null !== (r = t.deleted_layers) && void 0 !== r ? r : []).forEach(function(t) {
                    delete e.layer_configs[t]
                })
            }
            e.default = p
        },
        8053: function(t, e, i) {
            "use strict";
            var n = this && this.__assign || function() {
                    return (n = Object.assign || function(t) {
                        for (var e, i = 1, n = arguments.length; i < n; i++)
                            for (var r in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                        return t
                    }).apply(this, arguments)
                },
                r = this && this.__rest || function(t, e) {
                    var i = {};
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && 0 > e.indexOf(n) && (i[n] = t[n]);
                    if (null != t && "function" == typeof Object.getOwnPropertySymbols)
                        for (var r = 0, n = Object.getOwnPropertySymbols(t); r < n.length; r++) 0 > e.indexOf(n[r]) && Object.prototype.propertyIsEnumerable.call(t, n[r]) && (i[n[r]] = t[n[r]]);
                    return i
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.getUserHashWithoutStableID = void 0;
            var o = i(60925);
            e.getUserHashWithoutStableID = function(t) {
                var e = t.customIDs,
                    i = r(t, ["customIDs"]),
                    a = n({}, e);
                return delete a.stableID, (0, o.djb2HashForObject)(n(n({}, i), {
                    customIDs: a
                }))
            }
        },
        1294: function(t, e, i) {
            "use strict";
            var n = this && this.__awaiter || function(t, e, i, n) {
                    return new(i || (i = Promise))(function(r, o) {
                        function fulfilled(t) {
                            try {
                                step(n.next(t))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function rejected(t) {
                            try {
                                step(n.throw(t))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function step(t) {
                            var e;
                            t.done ? r(t.value) : ((e = t.value) instanceof i ? e : new i(function(t) {
                                t(e)
                            })).then(fulfilled, rejected)
                        }
                        step((n = n.apply(t, e || [])).next())
                    })
                },
                r = this && this.__generator || function(t, e) {
                    var i, n, r, o, a = {
                        label: 0,
                        sent: function() {
                            if (1 & r[0]) throw r[1];
                            return r[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: verb(0),
                        throw: verb(1),
                        return: verb(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function verb(o) {
                        return function(s) {
                            return function(o) {
                                if (i) throw TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (i = 1, n && (r = 2 & o[0] ? n.return : o[0] ? n.throw || ((r = n.return) && r.call(n), 0) : n.next) && !(r = r.call(n, o[1])).done) return r;
                                    switch (n = 0, r && (o = [2 & o[0], r.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            r = o;
                                            break;
                                        case 4:
                                            return a.label++, {
                                                value: o[1],
                                                done: !1
                                            };
                                        case 5:
                                            a.label++, n = o[1], o = [0];
                                            continue;
                                        case 7:
                                            o = a.ops.pop(), a.trys.pop();
                                            continue;
                                        default:
                                            if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                                a.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && a.label < r[1]) {
                                                a.label = r[1], r = o;
                                                break
                                            }
                                            if (r && a.label < r[2]) {
                                                a.label = r[2], a.ops.push(o);
                                                break
                                            }
                                            r[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    o = e.call(t, a)
                                } catch (t) {
                                    o = [6, t], n = 0
                                } finally {
                                    i = r = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, s])
                        }
                    }
                },
                o = this && this.__importDefault || function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.StatsigAsyncStorage = e.EvaluationReason = e.StatsigClient = e.Layer = e.DynamicConfig = void 0;
            var a = i(39404),
                s = o(i(37375)),
                u = o(i(46756)),
                l = o(i(2631)),
                c = o(i(44531)),
                d = o(i(34529)),
                f = i(51354),
                g = i(43228);
            Object.defineProperty(e, "DynamicConfig", {
                enumerable: !0,
                get: function() {
                    return o(g).default
                }
            });
            var h = i(2520);
            Object.defineProperty(e, "Layer", {
                enumerable: !0,
                get: function() {
                    return o(h).default
                }
            });
            var p = i(37375);
            Object.defineProperty(e, "StatsigClient", {
                enumerable: !0,
                get: function() {
                    return o(p).default
                }
            });
            var v = i(51354);
            Object.defineProperty(e, "EvaluationReason", {
                enumerable: !0,
                get: function() {
                    return v.EvaluationReason
                }
            });
            var y = i(17472);
            Object.defineProperty(e, "StatsigAsyncStorage", {
                enumerable: !0,
                get: function() {
                    return o(y).default
                }
            }), (0, l.default)(), (0, c.default)(), (0, d.default)();
            var S = function() {
                function Statsig() {}
                return Object.defineProperty(Statsig, "encodeIntializeCall", {
                    get: function() {
                        return u.default.encodeInitializeCall
                    },
                    set: function(t) {
                        u.default.encodeInitializeCall = t
                    },
                    enumerable: !1,
                    configurable: !0
                }), Statsig.initialize = function(t, e, i) {
                    var o;
                    return n(this, void 0, void 0, function() {
                        var n;
                        return r(this, function(r) {
                            return n = null !== (o = Statsig.instance) && void 0 !== o ? o : new s.default(t, e, i), Statsig.instance || (Statsig.instance = n), [2, n.initializeAsync()]
                        })
                    })
                }, Statsig.prefetchUsers = function(t) {
                    return n(this, void 0, void 0, function() {
                        return r(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, Statsig.getClientX().prefetchUsers(t)];
                                case 1:
                                    return [2, e.sent()]
                            }
                        })
                    })
                }, Statsig.setInitializeValues = function(t) {
                    Statsig.getClientX().setInitializeValues(t)
                }, Statsig.checkGate = function(t, e) {
                    return void 0 === e && (e = !1), Statsig.getClientX().checkGate(t, e)
                }, Statsig.checkGateWithExposureLoggingDisabled = function(t, e) {
                    return void 0 === e && (e = !1), Statsig.getClientX().checkGateWithExposureLoggingDisabled(t, e)
                }, Statsig.manuallyLogGateExposure = function(t) {
                    Statsig.getClientX().logGateExposure(t)
                }, Statsig.getConfig = function(t, e) {
                    return void 0 === e && (e = !1), Statsig.getClientX().getConfig(t, e)
                }, Statsig.getConfigWithExposureLoggingDisabled = function(t, e) {
                    return void 0 === e && (e = !1), Statsig.getClientX().getConfigWithExposureLoggingDisabled(t, e)
                }, Statsig.manuallyLogConfigExposure = function(t) {
                    Statsig.getClientX().logConfigExposure(t)
                }, Statsig.getExperiment = function(t, e, i) {
                    return void 0 === e && (e = !1), void 0 === i && (i = !1), Statsig.getClientX().getExperiment(t, e, i)
                }, Statsig.getExperimentWithExposureLoggingDisabled = function(t, e, i) {
                    return void 0 === e && (e = !1), void 0 === i && (i = !1), Statsig.getClientX().getExperimentWithExposureLoggingDisabled(t, e, i)
                }, Statsig.manuallyLogExperimentExposure = function(t, e) {
                    void 0 === e && (e = !1), Statsig.getClientX().logExperimentExposure(t, e)
                }, Statsig.getLayer = function(t, e) {
                    return void 0 === e && (e = !1), Statsig.getClientX().getLayer(t, e)
                }, Statsig.getLayerWithExposureLoggingDisabled = function(t, e) {
                    return void 0 === e && (e = !1), Statsig.getClientX().getLayerWithExposureLoggingDisabled(t, e)
                }, Statsig.manuallyLogLayerParameterExposure = function(t, e, i) {
                    void 0 === i && (i = !1), Statsig.getClientX().logLayerParameterExposure(t, e, i)
                }, Statsig.logEvent = function(t, e, i) {
                    return void 0 === e && (e = null), void 0 === i && (i = null), Statsig.getClientX().logEvent(t, e, i)
                }, Statsig.updateUser = function(t) {
                    return Statsig.getClientX().updateUser(t)
                }, Statsig.updateUserWithValues = function(t, e) {
                    return Statsig.getClientX().updateUserWithValues(t, e)
                }, Statsig.shutdown = function() {
                    Statsig.getClientX().shutdown(), Statsig.instance = null
                }, Statsig.overrideGate = function(t, e) {
                    Statsig.getClientX().overrideGate(t, e)
                }, Statsig.overrideConfig = function(t, e) {
                    Statsig.getClientX().overrideConfig(t, e)
                }, Statsig.overrideLayer = function(t, e) {
                    Statsig.getClientX().overrideLayer(t, e)
                }, Statsig.removeGateOverride = function(t) {
                    Statsig.getClientX().removeGateOverride(t)
                }, Statsig.removeConfigOverride = function(t) {
                    Statsig.getClientX().removeConfigOverride(t)
                }, Statsig.removeLayerOverride = function(t) {
                    Statsig.getClientX().removeLayerOverride(t)
                }, Statsig.getAllOverrides = function() {
                    return Statsig.getClientX().getAllOverrides()
                }, Statsig.getStableID = function() {
                    return Statsig.getClientX().getStableID()
                }, Statsig.getEvaluationDetails = function() {
                    var t, e;
                    return null !== (e = null === (t = Statsig.instance) || void 0 === t ? void 0 : t.getEvaluationDetails()) && void 0 !== e ? e : {
                        reason: f.EvaluationReason.Uninitialized,
                        time: 0
                    }
                }, Statsig.removeOverride = function(t) {
                    Statsig.getClientX().removeOverride(t)
                }, Statsig.getOverrides = function() {
                    return Statsig.getClientX().getOverrides()
                }, Statsig.initializeCalled = function() {
                    return null != Statsig.instance && Statsig.instance.initializeCalled()
                }, Statsig.getClientX = function() {
                    if (!Statsig.instance) throw new a.StatsigUninitializedError;
                    return Statsig.instance
                }, Statsig.instance = null, Statsig
            }();
            e.default = S
        },
        11855: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Base64 = void 0, e.Base64 = {
                _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                _encodeBinary: function(t) {
                    for (var e, i, n, r, o, a, s, u = "", l = 0; l < t.length;) e = t.charCodeAt(l++), i = t.charCodeAt(l++), n = t.charCodeAt(l++), r = e >> 2, o = (3 & e) << 4 | i >> 4, a = (15 & i) << 2 | n >> 6, s = 63 & n, isNaN(i) ? a = s = 64 : isNaN(n) && (s = 64), u = u + this._keyStr.charAt(r) + this._keyStr.charAt(o) + this._keyStr.charAt(a) + this._keyStr.charAt(s);
                    return u
                },
                encodeArrayBuffer: function(t) {
                    for (var i = "", n = new Uint8Array(t), r = n.byteLength, o = 0; o < r; o++) i += String.fromCharCode(n[o]);
                    return e.Base64._encodeBinary(i)
                }
            }
        },
        51410: function(t, e, i) {
            "use strict";
            var n = this && this.__assign || function() {
                return (n = Object.assign || function(t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var r in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t
                }).apply(this, arguments)
            };
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = i(8053),
                o = i(51354),
                a = function() {
                    function BootstrapValidator() {}
                    return BootstrapValidator.getEvaluationReasonForBootstrap = function(t, e, i) {
                        var n = !0,
                            a = !1;
                        try {
                            var s = e.evaluated_keys;
                            if (s && "object" == typeof s) {
                                var u = this.copyObject(s),
                                    l = null == t ? null : this.copyObject(t);
                                n = n && BootstrapValidator.validate(u, l) && BootstrapValidator.validate(l, u);
                                var c = s.customIDs;
                                i != (null == c ? void 0 : c.stableID) && (a = !0)
                            }
                            var d = e.user_hash;
                            d && "string" == typeof d && null != t && (n = n && d === (0, r.getUserHashWithoutStableID)(t))
                        } catch (t) {}
                        return n ? a ? o.EvaluationReason.BootstrapStableIDMismatch : o.EvaluationReason.Bootstrap : o.EvaluationReason.InvalidBootstrap
                    }, BootstrapValidator.validate = function(t, e) {
                        if (null == t) return null == e;
                        if (null == e) return !1;
                        for (var i = 0, n = Object.entries(t); i < n.length; i++) {
                            var r = n[i],
                                o = r[0],
                                a = r[1];
                            if ("stableID" !== o) {
                                if (typeof a != typeof e[o]) return !1;
                                if ("string" == typeof a) {
                                    if (a !== e[o]) return !1
                                } else if ("object" == typeof a) return this.validate(a, e[o]);
                                else return !1
                            }
                        }
                        return !0
                    }, BootstrapValidator.copyObject = function(t) {
                        if (null == t) return null;
                        var e = {};
                        if ((null == t ? void 0 : t.userID) && (e.userID = null == t ? void 0 : t.userID), null == t ? void 0 : t.customIDs) {
                            var i = n({}, t.customIDs);
                            delete i.stableID, 0 !== Object.keys(i).length && (e.customIDs = i)
                        }
                        return e
                    }, BootstrapValidator
                }();
            e.default = a
        },
        47190: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = i(28871),
                r = function() {
                    function ConsoleLogger(t) {
                        this.logLevel = t
                    }
                    return ConsoleLogger.prototype.info = function(t) {
                        this.logLevel !== n.LogLevel.NONE && console.log(t)
                    }, ConsoleLogger.prototype.error = function(t) {
                        this.logLevel === n.LogLevel.DEBUG && console.error(t)
                    }, ConsoleLogger
                }();
            e.default = r
        },
        90977: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.STORAGE_PREFIX = e.LOCAL_STORAGE_KEYS = e.STATSIG_LOCAL_STORAGE_LOGGING_REQUEST_KEY = e.STATSIG_STABLE_ID_KEY = e.INTERNAL_STORE_KEY = e.STICKY_DEVICE_EXPERIMENTS_KEY = e.OVERRIDES_STORE_KEY = void 0, e.OVERRIDES_STORE_KEY = "STATSIG_LOCAL_STORAGE_INTERNAL_STORE_OVERRIDES_V3", e.STICKY_DEVICE_EXPERIMENTS_KEY = "STATSIG_LOCAL_STORAGE_STICKY_DEVICE_EXPERIMENTS", e.INTERNAL_STORE_KEY = "STATSIG_LOCAL_STORAGE_INTERNAL_STORE_V4", e.STATSIG_STABLE_ID_KEY = "STATSIG_LOCAL_STORAGE_STABLE_ID", e.STATSIG_LOCAL_STORAGE_LOGGING_REQUEST_KEY = "STATSIG_LOCAL_STORAGE_LOGGING_REQUEST", e.LOCAL_STORAGE_KEYS = {
                STATSIG_LOCAL_STORAGE_STABLE_ID: !0,
                STATSIG_LOCAL_STORAGE_INTERNAL_STORE_V4: !0,
                STATSIG_LOCAL_STORAGE_STICKY_DEVICE_EXPERIMENTS: !0,
                STATSIG_LOCAL_STORAGE_INTERNAL_STORE_OVERRIDES_V3: !0,
                STATSIG_LOCAL_STORAGE_LOGGING_REQUEST: !0
            }, e.STORAGE_PREFIX = "STATSIG_LOCAL_STORAGE"
        },
        23582: function(t, e, i) {
            "use strict";
            var n = this && this.__assign || function() {
                return (n = Object.assign || function(t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var r in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t
                }).apply(this, arguments)
            };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.DiagnosticsImpl = void 0;
            var r = i(93834),
                o = function() {
                    function DiagnosticsImpl(t) {
                        var e, i, n, r = this;
                        this.mark = {
                            overall: this.selectAction("overall"),
                            intialize: this.selectStep("initialize"),
                            bootstrap: this.selectStep("bootstrap"),
                            api_call: function(t) {
                                switch (t) {
                                    case "getConfig":
                                        return r.selectAction("get_config");
                                    case "getExperiment":
                                        return r.selectAction("get_experiment");
                                    case "checkGate":
                                        return r.selectAction("check_gate");
                                    case "getLayer":
                                        return r.selectAction("get_layer")
                                }
                                return null
                            }
                        }, this.context = "initialize", this.defaultMaxMarkers = 30, this.maxMarkers = {
                            initialize: this.defaultMaxMarkers,
                            config_sync: this.defaultMaxMarkers,
                            event_logging: this.defaultMaxMarkers,
                            api_call: this.defaultMaxMarkers
                        }, this.markers = null !== (e = t.markers) && void 0 !== e ? e : {
                            initialize: [],
                            config_sync: [],
                            event_logging: [],
                            api_call: []
                        }, this.disabled = null !== (n = null === (i = t.options) || void 0 === i ? void 0 : i.getDisableDiagnosticsLogging()) && void 0 !== n && n
                    }
                    return DiagnosticsImpl.prototype.setContext = function(t) {
                        this.context = t
                    }, DiagnosticsImpl.prototype.selectAction = function(t, e) {
                        var i = this;
                        return {
                            start: function(o, a) {
                                return i.addMarker(n({
                                    key: t,
                                    step: e,
                                    action: "start",
                                    timestamp: (0, r.now)({
                                        withPrecision: !0
                                    })
                                }, null != o ? o : {}), a)
                            },
                            end: function(o, a) {
                                return i.addMarker(n({
                                    key: t,
                                    step: e,
                                    action: "end",
                                    timestamp: (0, r.now)({
                                        withPrecision: !0
                                    })
                                }, null != o ? o : {}), a)
                            }
                        }
                    }, DiagnosticsImpl.prototype.selectStep = function(t) {
                        return {
                            process: this.selectAction(t, "process"),
                            networkRequest: this.selectAction(t, "network_request")
                        }
                    }, DiagnosticsImpl.prototype.addMarker = function(t, e) {
                        if (this.disabled) return !1;
                        var i, n = null != e ? e : this.context;
                        return (void 0 === this.maxMarkers[n] || !(this.markers[n].length >= (null !== (i = this.maxMarkers[n]) && void 0 !== i ? i : this.defaultMaxMarkers))) && (this.markers[n].push(t), !0)
                    }, DiagnosticsImpl.prototype.getMarkers = function(t) {
                        return this.markers[t]
                    }, DiagnosticsImpl.prototype.setMaxMarkers = function(t, e) {
                        this.maxMarkers[t] = e
                    }, DiagnosticsImpl.prototype.getMarkerCount = function(t) {
                        return this.markers[t].length
                    }, DiagnosticsImpl.prototype.clearContext = function(t) {
                        this.markers[t] = []
                    }, DiagnosticsImpl
                }();
            e.DiagnosticsImpl = o;
            var a = function() {
                function Diagnostics() {}
                return Diagnostics.initialize = function(t) {
                    this.instance = new o(t), this.mark = this.instance.mark, this.disabled = this.instance.disabled, this.getMarkers = this.instance.getMarkers.bind(this.instance), this.getMarkerCount = this.instance.getMarkerCount.bind(this.instance), this.setMaxMarkers = this.instance.setMaxMarkers.bind(this.instance), this.setContext = this.instance.setContext.bind(this.instance), this.clearContext = this.instance.clearContext.bind(this.instance)
                }, Diagnostics.formatError = function(t) {
                    if (t && "object" == typeof t) return {
                        code: this.safeGetField(t, "code"),
                        name: this.safeGetField(t, "name"),
                        message: this.safeGetField(t, "message")
                    }
                }, Diagnostics.safeGetField = function(t, e) {
                    if (e in t) return t[e]
                }, Diagnostics
            }();
            e.default = a
        },
        51354: function(t, e) {
            "use strict";
            var i;
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.EvaluationReason = void 0, (i = e.EvaluationReason || (e.EvaluationReason = {})).Network = "Network", i.Bootstrap = "Bootstrap", i.InvalidBootstrap = "InvalidBootstrap", i.Cache = "Cache", i.Prefetch = "Prefetch", i.Sticky = "Sticky", i.LocalOverride = "LocalOverride", i.Unrecognized = "Unrecognized", i.Uninitialized = "Uninitialized", i.Error = "Error", i.NetworkNotModified = "NetworkNotModified", i.BootstrapStableIDMismatch = "BootstrapStableIDMismatch"
        },
        60925: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.getUserCacheKey = e.getSortedObject = e.djb2HashForObject = e.sha256Hash = e.djb2Hash = e.memoizedUserCacheKeyHash = e.fasthash = void 0;
            var n = i(11855),
                r = i(66017),
                o = {};

            function fasthash(t) {
                for (var e = 0, i = 0; i < t.length; i++) e = (e << 5) - e + t.charCodeAt(i), e &= e;
                return e
            }

            function memoizedUserCacheKeyHash(t) {
                var e = o[t];
                if (e) return e;
                var i = String(fasthash(t));
                return o[t] = i, i
            }

            function djb2Hash(t) {
                return String(fasthash(t) >>> 0)
            }

            function getSortedObject(t) {
                if (null == t) return null;
                var e = Object.keys(t).sort(),
                    i = {};
                return e.forEach(function(e) {
                    var n = t[e];
                    n instanceof Object && (n = getSortedObject(n)), i[e] = n
                }), i
            }
            e.fasthash = fasthash, e.memoizedUserCacheKeyHash = memoizedUserCacheKeyHash, e.djb2Hash = djb2Hash, e.sha256Hash = function(t) {
                var e = o[t];
                if (e) return e;
                var i = r.sha256.create().update(t).arrayBuffer(),
                    a = n.Base64.encodeArrayBuffer(i);
                return o[t] = a, a
            }, e.djb2HashForObject = function(t) {
                return djb2Hash(JSON.stringify(getSortedObject(t)))
            }, e.getSortedObject = getSortedObject, e.getUserCacheKey = function(t, e) {
                var i, n = ["userID:" + String(null !== (i = null == e ? void 0 : e.userID) && void 0 !== i ? i : "")],
                    r = null == e ? void 0 : e.customIDs;
                if (null != r)
                    for (var o = 0, a = Object.entries(r); o < a.length; o++) {
                        var s = a[o],
                            u = s[0],
                            l = s[1];
                        n.push(u + ":" + l)
                    }
                var c = memoizedUserCacheKeyHash(n.join(";"));
                return n.splice(1, 0, "stableID:" + t), {
                    v1: memoizedUserCacheKeyHash(n.join(";")),
                    v2: c
                }
            }
        },
        2631: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function() {
                Object.entries || (Object.entries = function(t) {
                    for (var e = Object.keys(t), i = e.length, n = Array(i); i--;) n[i] = [e[i], t[e[i]]];
                    return n
                })
            }
        },
        44531: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function() {
                Object.fromEntries || (Object.fromEntries = function(t) {
                    for (var e = {}, i = 0; i < t.length; i++) {
                        var n = t[i];
                        if (Object(n) !== n) throw TypeError("iterable for fromEntries should yield objects");
                        Object.defineProperty(e, n[0], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            value: n[1]
                        })
                    }
                    return e
                })
            }
        },
        34529: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function() {
                Promise.prototype.finally = Promise.prototype.finally || ({
                    finally: function(t) {
                        var onFinally = function(e) {
                            return Promise.resolve(t()).then(e)
                        };
                        return this.then(function(t) {
                            return onFinally(function() {
                                return t
                            })
                        }, function(t) {
                            return onFinally(function() {
                                return Promise.reject(t)
                            })
                        })
                    }
                }).finally
            }
        },
        17472: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = function() {
                function StatsigAsyncStorage() {}
                return StatsigAsyncStorage.getItemAsync = function(t) {
                    var e;
                    return StatsigAsyncStorage.asyncStorage ? null !== (e = StatsigAsyncStorage.asyncStorage.getItem(t)) && void 0 !== e ? e : null : Promise.resolve(null)
                }, StatsigAsyncStorage.setItemAsync = function(t, e) {
                    return StatsigAsyncStorage.asyncStorage ? StatsigAsyncStorage.asyncStorage.setItem(t, e) : Promise.resolve()
                }, StatsigAsyncStorage.removeItemAsync = function(t) {
                    return StatsigAsyncStorage.asyncStorage ? StatsigAsyncStorage.asyncStorage.removeItem(t) : Promise.resolve()
                }, StatsigAsyncStorage
            }();
            e.default = i
        },
        42994: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = i(90977),
                r = function() {
                    function StatsigLocalStorage() {}
                    return StatsigLocalStorage.getItem = function(t) {
                        var e;
                        try {
                            if (this.isStorageAccessible()) return window.localStorage.getItem(t)
                        } catch (t) {}
                        return null !== (e = this.fallbackSessionCache[t]) && void 0 !== e ? e : null
                    }, StatsigLocalStorage.setItem = function(t, e) {
                        try {
                            if (this.isStorageAccessible()) {
                                window.localStorage.setItem(t, e);
                                return
                            }
                        } catch (t) {}
                        this.fallbackSessionCache[t] = e
                    }, StatsigLocalStorage.removeItem = function(t) {
                        try {
                            if (this.isStorageAccessible()) {
                                window.localStorage.removeItem(t);
                                return
                            }
                        } catch (t) {}
                        delete this.fallbackSessionCache[t]
                    }, StatsigLocalStorage.cleanup = function() {
                        try {
                            if (this.isStorageAccessible(!0))
                                for (var t in window.localStorage) "string" != typeof window.localStorage[t] || null == t || !this.disabled && t in n.LOCAL_STORAGE_KEYS || !this.disabled && t.substring(0, n.STORAGE_PREFIX.length) !== n.STORAGE_PREFIX || window.localStorage.removeItem(t)
                        } catch (t) {}
                    }, StatsigLocalStorage.isStorageAccessible = function(t) {
                        void 0 === t && (t = !1), null == this.canAccessStorageAccessible && (this.canAccessStorageAccessible = "undefined" != typeof Storage && "undefined" != typeof window && null != window && null != window.localStorage);
                        var e = this.canAccessStorageAccessible;
                        return t ? e : !this.disabled && e
                    }, StatsigLocalStorage.disabled = !1, StatsigLocalStorage.fallbackSessionCache = {}, StatsigLocalStorage.canAccessStorageAccessible = null, StatsigLocalStorage
                }();
            e.default = r
        },
        93834: function(t, e) {
            "use strict";

            function now(t) {
                return (void 0 === t && (t = {
                    withPrecision: !1
                }), "undefined" != typeof performance && performance) ? t.withPrecision ? performance.now() : 0 | performance.now() : Date.now()
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.difference = e.now = void 0, e.now = now, e.difference = function(t) {
                return now() - t
            }
        },
        71701: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(t) {
                var e = null != t ? t : Error("[Statsig] Error was empty"),
                    i = e instanceof Error;
                return {
                    name: i ? e.name : "No Name",
                    message: i ? e.message : void 0,
                    trace: i ? e.stack : function(t) {
                        try {
                            return JSON.stringify(t)
                        } catch (t) {
                            return "[Statsig] Failed to get string for error."
                        }
                    }(e)
                }
            }
        },
        9602: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.version = void 0, e.version = "1.31.0"
        },
        62742: function(t, e, i) {
            "use strict";
            var n = i(9389),
                r = this && this.__decorate || function(t, e, i, n) {
                    var r, o = arguments.length,
                        a = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, i, n);
                    else
                        for (var s = t.length - 1; s >= 0; s--)(r = t[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(e, i, a) : r(e, i)) || a);
                    return o > 3 && a && Object.defineProperty(e, i, a), a
                },
                o = this && this.__awaiter || function(t, e, i, n) {
                    return new(i || (i = Promise))(function(r, o) {
                        function fulfilled(t) {
                            try {
                                step(n.next(t))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function rejected(t) {
                            try {
                                step(n.throw(t))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function step(t) {
                            var e;
                            t.done ? r(t.value) : ((e = t.value) instanceof i ? e : new i(function(t) {
                                t(e)
                            })).then(fulfilled, rejected)
                        }
                        step((n = n.apply(t, e || [])).next())
                    })
                },
                a = this && this.__generator || function(t, e) {
                    var i, n, r, o, a = {
                        label: 0,
                        sent: function() {
                            if (1 & r[0]) throw r[1];
                            return r[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: verb(0),
                        throw: verb(1),
                        return: verb(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function verb(o) {
                        return function(s) {
                            return function(o) {
                                if (i) throw TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (i = 1, n && (r = 2 & o[0] ? n.return : o[0] ? n.throw || ((r = n.return) && r.call(n), 0) : n.next) && !(r = r.call(n, o[1])).done) return r;
                                    switch (n = 0, r && (o = [2 & o[0], r.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            r = o;
                                            break;
                                        case 4:
                                            return a.label++, {
                                                value: o[1],
                                                done: !1
                                            };
                                        case 5:
                                            a.label++, n = o[1], o = [0];
                                            continue;
                                        case 7:
                                            o = a.ops.pop(), a.trys.pop();
                                            continue;
                                        default:
                                            if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                                a.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && a.label < r[1]) {
                                                a.label = r[1], r = o;
                                                break
                                            }
                                            if (r && a.label < r[2]) {
                                                a.label = r[2], a.ops.push(o);
                                                break
                                            }
                                            r[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    o = e.call(t, a)
                                } catch (t) {
                                    o = [6, t], n = 0
                                } finally {
                                    i = r = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, s])
                        }
                    }
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var s = i(1294),
                u = i(64362),
                l = i(9602),
                c = function() {
                    var t;

                    function Statsig(e, i, n) {
                        if (null != t.instance && t.canThrow()) throw Error("Cannot create another instance of the static Statsig class");
                        t.instance = new s.StatsigClient(e, i, n)
                    }
                    return t = Statsig, Statsig.initialize = function(e, i, n) {
                        return o(this, void 0, void 0, function() {
                            return a(this, function(r) {
                                try {
                                    return t.instance || (t.instance = new s.StatsigClient(e, i, n), t.instance.setSDKPackageInfo(this.sdkPackageInfo), t.instance.setAppState(this.appState), t.instance.setNativeModules(this.nativeModules), t.instance.setPlatform(this.platform), t.instance.setRNDeviceInfo(this.deviceInfo), t.instance.setExpoConstants(this.expoConstants), t.instance.setExpoDevice(this.expoDevice), t.instance.setOnCacheLoadedReactCallback(this.onCacheLoadedCallback)), [2, t.instance.initializeAsync()]
                                } catch (e) {
                                    if (t.canThrow()) throw e
                                }
                                return [2, Promise.resolve()]
                            })
                        })
                    }, Statsig.bootstrap = function(e, i, n, r) {
                        if (null != t.instance) {
                            t.setInitializeValues(i);
                            return
                        }
                        null == r && (r = {}), r.initializeValues = i, t.instance = new s.StatsigClient(e, n, r), t.instance.setSDKPackageInfo({
                            sdkType: "react-client",
                            sdkVersion: l.version
                        })
                    }, Statsig.prefetchUsers = function(e) {
                        return o(this, void 0, void 0, function() {
                            return a(this, function(i) {
                                return this.isInitialized() ? [2, t.instance.prefetchUsers(e)] : [2]
                            })
                        })
                    }, Statsig.setInitializeValues = function(e) {
                        this.isInitialized() && t.instance.setInitializeValues(e)
                    }, Statsig.getCurrentUser = function() {
                        return this.isInitialized() ? t.instance.getCurrentUser() : null
                    }, Statsig.checkGate = function(e, i) {
                        return void 0 === i && (i = !1), !!this.isInitialized() && t.instance.checkGate(e, i)
                    }, Statsig.checkGateWithExposureLoggingDisabled = function(e, i) {
                        return !!this.isInitialized() && t.instance.checkGateWithExposureLoggingDisabled(e, null == i ? void 0 : i.ignoreOverrides)
                    }, Statsig.manuallyLogGateExposure = function(e) {
                        this.isInitialized() && t.instance.logGateExposure(e)
                    }, Statsig.getConfig = function(e, i) {
                        return (void 0 === i && (i = !1), this.isInitialized()) ? t.instance.getConfig(e, i) : new s.DynamicConfig(e, {}, "", {
                            time: Date.now(),
                            reason: s.EvaluationReason.Uninitialized
                        })
                    }, Statsig.getConfigWithExposureLoggingDisabled = function(e, i) {
                        return this.isInitialized() ? t.instance.getConfigWithExposureLoggingDisabled(e, null == i ? void 0 : i.ignoreOverrides) : new s.DynamicConfig(e, {}, "", {
                            time: Date.now(),
                            reason: s.EvaluationReason.Uninitialized
                        })
                    }, Statsig.manuallyLogConfigExposure = function(e) {
                        this.isInitialized() && t.instance.logConfigExposure(e)
                    }, Statsig.getExperiment = function(e, i, n) {
                        return (void 0 === i && (i = !1), void 0 === n && (n = !1), this.isInitialized()) ? t.instance.getExperiment(e, i, n) : new s.DynamicConfig(e, {}, "", {
                            time: Date.now(),
                            reason: s.EvaluationReason.Uninitialized
                        })
                    }, Statsig.getExperimentWithExposureLoggingDisabled = function(e, i) {
                        return this.isInitialized() ? t.instance.getExperimentWithExposureLoggingDisabled(e, null == i ? void 0 : i.keepDeviceValue, null == i ? void 0 : i.ignoreOverrides) : new s.DynamicConfig(e, {}, "", {
                            time: Date.now(),
                            reason: s.EvaluationReason.Uninitialized
                        })
                    }, Statsig.manuallyLogExperimentExposure = function(e, i) {
                        this.isInitialized() && t.instance.logExperimentExposure(e, i)
                    }, Statsig.getLayer = function(e, i) {
                        return (void 0 === i && (i = !1), this.isInitialized()) ? t.instance.getLayer(e, i) : s.Layer._create(e, {}, "", {
                            time: Date.now(),
                            reason: s.EvaluationReason.Uninitialized
                        })
                    }, Statsig.getLayerWithExposureLoggingDisabled = function(e, i) {
                        return this.isInitialized() ? t.instance.getLayerWithExposureLoggingDisabled(e, null == i ? void 0 : i.keepDeviceValue) : s.Layer._create(e, {}, "", {
                            time: Date.now(),
                            reason: s.EvaluationReason.Uninitialized
                        })
                    }, Statsig.manuallyLogLayerParameterExposure = function(e, i, n) {
                        void 0 === n && (n = !1), this.isInitialized() && t.instance.logLayerParameterExposure(e, i, n)
                    }, Statsig.logEvent = function(e, i, n) {
                        void 0 === i && (i = null), void 0 === n && (n = null), this.isInitialized() && t.instance.logEvent(e, i, n)
                    }, Statsig.updateUser = function(e) {
                        return this.isInitialized() ? t.instance.updateUser(e) : Promise.resolve(!1)
                    }, Statsig.updateUserWithValues = function(e, i) {
                        return !!this.isInitialized() && t.instance.updateUserWithValues(e, i)
                    }, Statsig.shutdown = function() {
                        this.isInitialized() && t.instance.shutdown()
                    }, Statsig.overrideGate = function(e, i) {
                        var n;
                        this.isInitialized() && (null === (n = t.getAllOverrides().gates) || void 0 === n ? void 0 : n[e]) !== i && (t.instance.overrideGate(e, i), t.updateContext())
                    }, Statsig.overrideConfig = function(e, i) {
                        var n;
                        this.isInitialized() && (null === (n = t.getAllOverrides().configs) || void 0 === n ? void 0 : n[e]) !== i && (t.instance.overrideConfig(e, i), t.updateContext())
                    }, Statsig.overrideLayer = function(e, i) {
                        var n;
                        this.isInitialized() && (null === (n = t.getAllOverrides().layers) || void 0 === n ? void 0 : n[e]) !== i && (t.instance.overrideLayer(e, i), t.updateContext())
                    }, Statsig.removeGateOverride = function(e) {
                        this.isInitialized() && (t.instance.removeGateOverride(e), t.updateContext())
                    }, Statsig.removeConfigOverride = function(e) {
                        this.isInitialized() && (t.instance.removeConfigOverride(e), t.updateContext())
                    }, Statsig.removeLayerOverride = function(e) {
                        this.isInitialized() && (t.instance.removeLayerOverride(e), t.updateContext())
                    }, Statsig.getAllOverrides = function() {
                        return this.isInitialized() ? t.instance.getAllOverrides() : {
                            gates: {},
                            configs: {},
                            layers: {}
                        }
                    }, Statsig.getEvaluationDetails = function() {
                        var e, i;
                        return null !== (i = null === (e = t.instance) || void 0 === e ? void 0 : e.getEvaluationDetails()) && void 0 !== i ? i : {
                            reason: s.EvaluationReason.Uninitialized,
                            time: 0
                        }
                    }, Statsig.getStableID = function() {
                        return this.isInitialized() ? t.instance.getStableID() : ""
                    }, Statsig.initializeCalled = function() {
                        return null != t.instance && t.instance.initializeCalled()
                    }, Statsig.setSDKPackageInfo = function(e) {
                        t.sdkPackageInfo = e
                    }, Statsig.setReactNativeUUID = function(t) {
                        null != t && s.StatsigClient.setReactNativeUUID(t)
                    }, Statsig.setAsyncStorage = function(t) {
                        null != t && (s.StatsigAsyncStorage.asyncStorage = t)
                    }, Statsig.setAppState = function(e) {
                        null != e && (t.appState = e)
                    }, Statsig.setNativeModules = function(e) {
                        null != e && (t.nativeModules = e)
                    }, Statsig.setPlatform = function(e) {
                        null != e && (t.platform = e)
                    }, Statsig.setRNDeviceInfo = function(e) {
                        null != e && (t.deviceInfo = e)
                    }, Statsig.setExpoConstants = function(e) {
                        null != e && (t.expoConstants = e)
                    }, Statsig.setExpoDevice = function(e) {
                        null != e && (t.expoDevice = e)
                    }, Statsig.setReactContextUpdater = function(e) {
                        t.reactContextUpdater = e
                    }, Statsig.setOnCacheLoadedCallback = function(e) {
                        t.onCacheLoadedCallback = e
                    }, Statsig.isInitialized = function() {
                        if (t.instance) return !0;
                        if (t.canThrow()) throw Error("Call and wait for initialize() to finish first.");
                        return !1
                    }, Statsig.updateContext = function() {
                        null != t.reactContextUpdater && t.reactContextUpdater()
                    }, Statsig.canThrow = function() {
                        var t;
                        return void 0 === n || void 0 === n.env || (null === (t = null == n ? void 0 : n.env) || void 0 === t ? void 0 : t.REACT_APP_STATSIG_SDK_MODE) !== "silent"
                    }, Statsig.reactContextUpdater = null, Statsig = t = r([(0, u.staticImplements)()], Statsig)
                }();
            e.default = c
        },
        25536: function(t, e, i) {
            "use strict";
            var n = this && this.__importDefault || function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            };
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = n(i(97352));
            e.default = r.default.createContext({
                initialized: !1,
                statsigPromise: null,
                userVersion: 0,
                initStarted: !1,
                updateUser: function() {}
            })
        },
        69592: function(t, e, i) {
            "use strict";
            var n = this && this.__importDefault || function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.useLayerImpl = e.useExperimentImpl = e.useConfigImpl = e.useGateImpl = void 0;
            var r = i(97352),
                o = i(1294),
                a = n(i(25536)),
                s = n(i(62742));
            e.useGateImpl = function(t, e, i) {
                void 0 === i && (i = !1);
                var n = (0, r.useContext)(a.default),
                    o = n.initialized,
                    u = n.userVersion,
                    l = n.initStarted,
                    c = (0, r.useMemo)(function() {
                        return !!l && (i ? s.default.checkGateWithExposureLoggingDisabled(t, e) : s.default.checkGate(t, null == e ? void 0 : e.ignoreOverrides))
                    }, [o, l, t, u, e, i]);
                return {
                    isLoading: !o,
                    value: c
                }
            }, e.useConfigImpl = function(t, e, i) {
                void 0 === i && (i = !1);
                var n = (0, r.useContext)(a.default),
                    u = n.initialized,
                    l = n.initStarted,
                    c = n.userVersion,
                    d = (0, r.useMemo)(function() {
                        return l ? i ? s.default.getConfigWithExposureLoggingDisabled(t, e) : s.default.getConfig(t, null == e ? void 0 : e.ignoreOverrides) : new o.DynamicConfig(t, {}, "", {
                            time: Date.now(),
                            reason: o.EvaluationReason.Uninitialized
                        })
                    }, [u, l, t, c, e, i]);
                return {
                    isLoading: !u,
                    config: d
                }
            }, e.useExperimentImpl = function(t, e, i) {
                void 0 === i && (i = !1);
                var n = (0, r.useContext)(a.default),
                    u = n.initialized,
                    l = n.initStarted,
                    c = n.userVersion,
                    d = (0, r.useMemo)(function() {
                        return l ? i ? s.default.getExperimentWithExposureLoggingDisabled(t, e) : s.default.getExperiment(t, null == e ? void 0 : e.keepDeviceValue, null == e ? void 0 : e.ignoreOverrides) : new o.DynamicConfig(t, {}, "", {
                            time: Date.now(),
                            reason: o.EvaluationReason.Uninitialized
                        })
                    }, [u, l, t, c, e, i]);
                return {
                    isLoading: !u,
                    config: d
                }
            }, e.useLayerImpl = function(t, e, i) {
                void 0 === i && (i = !1);
                var n = (0, r.useContext)(a.default),
                    u = n.initialized,
                    l = n.initStarted,
                    c = n.userVersion,
                    d = (0, r.useMemo)(function() {
                        return l ? i ? s.default.getLayerWithExposureLoggingDisabled(t, e) : s.default.getLayer(t, null == e ? void 0 : e.keepDeviceValue) : o.Layer._create(t, {}, "", {
                            time: Date.now(),
                            reason: o.EvaluationReason.Uninitialized
                        })
                    }, [u, l, t, c, e, i]);
                return {
                    isLoading: !u,
                    layer: d
                }
            }
        },
        13258: function(t, e, i) {
            "use strict";
            var n = this && this.__createBinding || (Object.create ? function(t, e, i, n) {
                    void 0 === n && (n = i), Object.defineProperty(t, n, {
                        enumerable: !0,
                        get: function() {
                            return e[i]
                        }
                    })
                } : function(t, e, i, n) {
                    void 0 === n && (n = i), t[n] = e[i]
                }),
                r = this && this.__setModuleDefault || (Object.create ? function(t, e) {
                    Object.defineProperty(t, "default", {
                        enumerable: !0,
                        value: e
                    })
                } : function(t, e) {
                    t.default = e
                }),
                o = this && this.__importStar || function(t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t)
                        for (var i in t) "default" !== i && Object.prototype.hasOwnProperty.call(t, i) && n(e, t, i);
                    return r(e, t), e
                },
                a = this && this.__importDefault || function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var s = o(i(97352)),
                u = a(i(25536)),
                l = a(i(1294)),
                c = a(i(62742)),
                d = i(9602);
            e.default = function(t) {
                var e, i, n, r, o = t.children,
                    a = t.sdkKey,
                    f = t.user,
                    g = t.setUser,
                    h = t.options,
                    p = t.waitForCache,
                    v = t.waitForInitialization,
                    y = t.initializingComponent,
                    S = t.mountKey,
                    m = t.shutdownOnUnmount,
                    _ = void 0 !== m && m,
                    E = t._reactNativeDependencies,
                    b = !!E,
                    I = (0, s.useState)(!1),
                    C = I[0],
                    w = I[1],
                    D = (0, s.useState)(!1),
                    L = D[0],
                    O = D[1],
                    k = (0, s.useRef)(null),
                    x = (0, s.useState)(0),
                    A = x[0],
                    M = x[1],
                    U = (0, s.useRef)(new Promise(function(t) {
                        k.current = t
                    })),
                    T = (0, s.useMemo)(function() {
                        return f
                    }, [JSON.stringify(f)]),
                    P = (n = null != S ? S : null, r = (0, s.useRef)(null), (0, s.useEffect)(function() {
                        r.current = n
                    }, [n]), r.current);
                (0, s.useEffect)(function() {
                    if (c.default.initializeCalled()) {
                        U.current = new Promise(function(t) {
                            k.current = t
                        });
                        var t = void 0 === S || P !== S;
                        t && (O(!1), w(!1)), c.default.updateUser(f).then(function() {
                            k.current && k.current(), M(function(t) {
                                return t + 1
                            }), t && (O(!0), w(!0))
                        });
                        return
                    }
                    c.default.setSDKPackageInfo({
                        sdkType: "react-client",
                        sdkVersion: d.version
                    }), b && (c.default.setSDKPackageInfo(E.SDKPackageInfo), c.default.setAppState(E.AppState), c.default.setAsyncStorage(E.AsyncStorage), c.default.setNativeModules(E.NativeModules), c.default.setPlatform(E.Platform), c.default.setRNDeviceInfo(E.RNDevice), c.default.setReactNativeUUID(E.ReactNativeUUID), c.default.setExpoConstants(E.Constants), c.default.setExpoDevice(E.ExpoDevice)), c.default.setOnCacheLoadedCallback(function() {
                        w(!0)
                    }), c.default.initialize(a, T, h).then(function() {
                        O(!0), k.current && k.current()
                    }), "undefined" != typeof window && (window.__STATSIG_SDK__ = c.default, window.__STATSIG_JS_SDK__ = l.default, window.__STATSIG_RERENDER_OVERRIDE__ = function() {
                        M(A + 1)
                    })
                }, [T]), (0, s.useEffect)(function() {
                    return c.default.setReactContextUpdater(function() {
                            return M(function(t) {
                                return t + 1
                            })
                        }),
                        function() {
                            _ && c.default.shutdown(), c.default.setReactContextUpdater(null)
                        }
                }, []);
                var R = (e = !0 === p, i = !0 === v, L || !0 !== i && !0 !== e || e && C || i && L ? o : (i || e) && null != y ? y : null),
                    N = (0, s.useMemo)(function() {
                        return {
                            initialized: L,
                            statsigPromise: U,
                            userVersion: A,
                            initStarted: c.default.initializeCalled(),
                            updateUser: null != g ? g : function() {}
                        }
                    }, [L, U, A, c.default.initializeCalled(), g]);
                return s.default.createElement(u.default.Provider, {
                    value: N
                }, R)
            }
        },
        64362: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.staticImplements = void 0, e.staticImplements = function() {
                return function(t) {}
            }
        },
        99690: function(t, e, i) {
            "use strict";
            var n = this && this.__createBinding || (Object.create ? function(t, e, i, n) {
                    void 0 === n && (n = i), Object.defineProperty(t, n, {
                        enumerable: !0,
                        get: function() {
                            return e[i]
                        }
                    })
                } : function(t, e, i, n) {
                    void 0 === n && (n = i), t[n] = e[i]
                }),
                r = this && this.__setModuleDefault || (Object.create ? function(t, e) {
                    Object.defineProperty(t, "default", {
                        enumerable: !0,
                        value: e
                    })
                } : function(t, e) {
                    t.default = e
                }),
                o = this && this.__importStar || function(t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t)
                        for (var i in t) "default" !== i && Object.prototype.hasOwnProperty.call(t, i) && n(e, t, i);
                    return r(e, t), e
                },
                a = this && this.__importDefault || function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var s = o(i(97352)),
                u = a(i(25536)),
                l = a(i(1294)),
                c = a(i(62742));
            e.default = function(t) {
                var e = t.children,
                    i = t.sdkKey,
                    n = t.user,
                    r = t.options,
                    o = t.initializeValues,
                    a = t.setUser,
                    d = t.shutdownOnUnmount,
                    f = (0, s.useState)(0),
                    g = f[0],
                    h = f[1],
                    p = (0, s.useState)(!0),
                    v = p[0],
                    y = p[1],
                    S = (0, s.useRef)(!0),
                    m = (0, s.useMemo)(function() {
                        return n
                    }, [JSON.stringify(n)]);
                (0, s.useMemo)(function() {
                    return c.default.bootstrap(i, o, m, r), o
                }, [JSON.stringify(o)]), (0, s.useEffect)(function() {
                    if (S.current) {
                        S.current = !1, "undefined" != typeof window && (window.__STATSIG_SDK__ = c.default, window.__STATSIG_JS_SDK__ = l.default, window.__STATSIG_RERENDER_OVERRIDE__ = function() {
                            h(g + 1)
                        });
                        return
                    }
                    y(!1), c.default.updateUser(n).then(function() {
                        h(g + 1), y(!0)
                    })
                }, [m]), (0, s.useEffect)(function() {
                    return c.default.setReactContextUpdater(function() {
                            return h(function(t) {
                                return t + 1
                            })
                        }),
                        function() {
                            d && c.default.shutdown(), c.default.setReactContextUpdater(null)
                        }
                }, []);
                var _ = (0, s.useMemo)(function() {
                    return {
                        initialized: v,
                        statsigPromise: null,
                        userVersion: g,
                        initStarted: c.default.initializeCalled(),
                        updateUser: null != a ? a : function() {}
                    }
                }, [v, g, c.default.initializeCalled(), a]);
                return s.default.createElement(u.default.Provider, {
                    value: _
                }, e)
            }
        },
        78608: function(t, e, i) {
            "use strict";
            var n = this && this.__importDefault || function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.StatsigSynchronousProvider = e.Layer = e.staticImplements = e.DynamicConfig = e.useUpdateUser = e.useStatsigLogEffect = e.useGateWithExposureLoggingDisabled = e.useGate = e.usePrefetchUsers = e.useLayerWithExposureLoggingDisabled = e.useLayer = e.useExperimentWithExposureLoggingDisabled = e.useExperiment = e.useConfigWithExposureLoggingDisabled = e.useConfig = e.StatsigProvider = e.StatsigContext = e.Statsig = void 0;
            var r = i(1294);
            Object.defineProperty(e, "DynamicConfig", {
                enumerable: !0,
                get: function() {
                    return r.DynamicConfig
                }
            }), Object.defineProperty(e, "Layer", {
                enumerable: !0,
                get: function() {
                    return r.Layer
                }
            });
            var o = n(i(62742));
            e.Statsig = o.default;
            var a = n(i(25536));
            e.StatsigContext = a.default;
            var s = n(i(13258));
            e.StatsigProvider = s.default;
            var u = i(64362);
            Object.defineProperty(e, "staticImplements", {
                enumerable: !0,
                get: function() {
                    return u.staticImplements
                }
            });
            var l = n(i(18632));
            e.useConfig = l.default;
            var c = n(i(62438));
            e.useExperiment = c.default;
            var d = n(i(59546));
            e.useGate = d.default;
            var f = n(i(93986));
            e.useLayer = f.default;
            var g = n(i(67994));
            e.usePrefetchUsers = g.default;
            var h = n(i(71074));
            e.useStatsigLogEffect = h.default;
            var p = n(i(99690));
            e.StatsigSynchronousProvider = p.default;
            var v = n(i(67557));
            e.useConfigWithExposureLoggingDisabled = v.default;
            var y = n(i(22116));
            e.useGateWithExposureLoggingDisabled = y.default;
            var S = n(i(12098));
            e.useExperimentWithExposureLoggingDisabled = S.default;
            var m = n(i(75198));
            e.useLayerWithExposureLoggingDisabled = m.default;
            var _ = n(i(74081));
            e.useUpdateUser = _.default
        },
        18632: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = i(69592);
            e.default = function(t, e) {
                return (0, n.useConfigImpl)(t, {
                    ignoreOverrides: e
                })
            }
        },
        67557: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = i(69592);
            e.default = function(t, e) {
                return (0, n.useConfigImpl)(t, e, !0)
            }
        },
        62438: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = i(69592);
            e.default = function(t, e, i) {
                return void 0 === e && (e = !1), (0, n.useExperimentImpl)(t, {
                    keepDeviceValue: e,
                    ignoreOverrides: i
                })
            }
        },
        12098: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = i(69592);
            e.default = function(t, e) {
                return (0, n.useExperimentImpl)(t, e, !0)
            }
        },
        59546: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = i(69592);
            e.default = function(t, e) {
                return (0, n.useGateImpl)(t, {
                    ignoreOverrides: e
                })
            }
        },
        22116: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = i(69592);
            e.default = function(t, e) {
                return (0, n.useGateImpl)(t, e, !0)
            }
        },
        93986: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = i(69592);
            e.default = function(t, e) {
                return void 0 === e && (e = !1), (0, n.useLayerImpl)(t, {
                    keepDeviceValue: e
                })
            }
        },
        75198: function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = i(69592);
            e.default = function(t, e) {
                return (0, n.useLayerImpl)(t, e, !0)
            }
        },
        67994: function(t, e, i) {
            "use strict";
            var n = this && this.__importDefault || function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            };
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = i(97352),
                o = n(i(62742)),
                a = n(i(25536));
            e.default = function(t) {
                var e = (0, r.useContext)(a.default).initStarted;
                (0, r.useEffect)(function() {
                    e && 0 != t.length && o.default.prefetchUsers(t).catch(function() {})
                }, [e, t])
            }
        },
        71074: function(t, e, i) {
            "use strict";
            var n = this && this.__importDefault || function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            };
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = i(97352),
                o = n(i(62742)),
                a = n(i(25536));
            e.default = function(t, e, i) {
                var n = (0, r.useContext)(a.default).initStarted;
                (0, r.useEffect)(function() {
                    n && o.default.logEvent(t, e, i)
                }, [n])
            }
        },
        74081: function(t, e, i) {
            "use strict";
            var n = this && this.__importDefault || function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            };
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = i(97352),
                o = n(i(25536));
            e.default = function() {
                return (0, r.useContext)(o.default).updateUser
            }
        },
        50250: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                NIL: function() {
                    return h
                },
                parse: function() {
                    return esm_browser_parse
                },
                stringify: function() {
                    return esm_browser_stringify
                },
                v1: function() {
                    return esm_browser_v1
                },
                v3: function() {
                    return f
                },
                v4: function() {
                    return esm_browser_v4
                },
                v5: function() {
                    return g
                },
                validate: function() {
                    return esm_browser_validate
                },
                version: function() {
                    return esm_browser_version
                }
            });
            var n, r, o, a = new Uint8Array(16);

            function rng() {
                if (!n && !(n = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
                return n(a)
            }
            for (var s = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i, esm_browser_validate = function(t) {
                    return "string" == typeof t && s.test(t)
                }, u = [], l = 0; l < 256; ++l) u.push((l + 256).toString(16).substr(1));
            var esm_browser_stringify = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        i = (u[t[e + 0]] + u[t[e + 1]] + u[t[e + 2]] + u[t[e + 3]] + "-" + u[t[e + 4]] + u[t[e + 5]] + "-" + u[t[e + 6]] + u[t[e + 7]] + "-" + u[t[e + 8]] + u[t[e + 9]] + "-" + u[t[e + 10]] + u[t[e + 11]] + u[t[e + 12]] + u[t[e + 13]] + u[t[e + 14]] + u[t[e + 15]]).toLowerCase();
                    if (!esm_browser_validate(i)) throw TypeError("Stringified UUID is invalid");
                    return i
                },
                c = 0,
                d = 0,
                esm_browser_v1 = function(t, e, i) {
                    var n = e && i || 0,
                        a = e || Array(16),
                        s = (t = t || {}).node || r,
                        u = void 0 !== t.clockseq ? t.clockseq : o;
                    if (null == s || null == u) {
                        var l = t.random || (t.rng || rng)();
                        null == s && (s = r = [1 | l[0], l[1], l[2], l[3], l[4], l[5]]), null == u && (u = o = (l[6] << 8 | l[7]) & 16383)
                    }
                    var f = void 0 !== t.msecs ? t.msecs : Date.now(),
                        g = void 0 !== t.nsecs ? t.nsecs : d + 1,
                        h = f - c + (g - d) / 1e4;
                    if (h < 0 && void 0 === t.clockseq && (u = u + 1 & 16383), (h < 0 || f > c) && void 0 === t.nsecs && (g = 0), g >= 1e4) throw Error("uuid.v1(): Can't create more than 10M uuids/sec");
                    c = f, d = g, o = u;
                    var p = ((268435455 & (f += 122192928e5)) * 1e4 + g) % 4294967296;
                    a[n++] = p >>> 24 & 255, a[n++] = p >>> 16 & 255, a[n++] = p >>> 8 & 255, a[n++] = 255 & p;
                    var v = f / 4294967296 * 1e4 & 268435455;
                    a[n++] = v >>> 8 & 255, a[n++] = 255 & v, a[n++] = v >>> 24 & 15 | 16, a[n++] = v >>> 16 & 255, a[n++] = u >>> 8 | 128, a[n++] = 255 & u;
                    for (var y = 0; y < 6; ++y) a[n + y] = s[y];
                    return e || esm_browser_stringify(a)
                },
                esm_browser_parse = function(t) {
                    if (!esm_browser_validate(t)) throw TypeError("Invalid UUID");
                    var e, i = new Uint8Array(16);
                    return i[0] = (e = parseInt(t.slice(0, 8), 16)) >>> 24, i[1] = e >>> 16 & 255, i[2] = e >>> 8 & 255, i[3] = 255 & e, i[4] = (e = parseInt(t.slice(9, 13), 16)) >>> 8, i[5] = 255 & e, i[6] = (e = parseInt(t.slice(14, 18), 16)) >>> 8, i[7] = 255 & e, i[8] = (e = parseInt(t.slice(19, 23), 16)) >>> 8, i[9] = 255 & e, i[10] = (e = parseInt(t.slice(24, 36), 16)) / 1099511627776 & 255, i[11] = e / 4294967296 & 255, i[12] = e >>> 24 & 255, i[13] = e >>> 16 & 255, i[14] = e >>> 8 & 255, i[15] = 255 & e, i
                };

            function v35(t, e, i) {
                function generateUUID(t, n, r, o) {
                    if ("string" == typeof t && (t = function(t) {
                            t = unescape(encodeURIComponent(t));
                            for (var e = [], i = 0; i < t.length; ++i) e.push(t.charCodeAt(i));
                            return e
                        }(t)), "string" == typeof n && (n = esm_browser_parse(n)), 16 !== n.length) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
                    var a = new Uint8Array(16 + t.length);
                    if (a.set(n), a.set(t, n.length), (a = i(a))[6] = 15 & a[6] | e, a[8] = 63 & a[8] | 128, r) {
                        o = o || 0;
                        for (var s = 0; s < 16; ++s) r[o + s] = a[s];
                        return r
                    }
                    return esm_browser_stringify(a)
                }
                try {
                    generateUUID.name = t
                } catch (t) {}
                return generateUUID.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", generateUUID.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8", generateUUID
            }

            function getOutputLength(t) {
                return (t + 64 >>> 9 << 4) + 14 + 1
            }

            function safeAdd(t, e) {
                var i = (65535 & t) + (65535 & e);
                return (t >> 16) + (e >> 16) + (i >> 16) << 16 | 65535 & i
            }

            function md5cmn(t, e, i, n, r, o) {
                var a;
                return safeAdd((a = safeAdd(safeAdd(e, t), safeAdd(n, o))) << r | a >>> 32 - r, i)
            }

            function md5ff(t, e, i, n, r, o, a) {
                return md5cmn(e & i | ~e & n, t, e, r, o, a)
            }

            function md5gg(t, e, i, n, r, o, a) {
                return md5cmn(e & n | i & ~n, t, e, r, o, a)
            }

            function md5hh(t, e, i, n, r, o, a) {
                return md5cmn(e ^ i ^ n, t, e, r, o, a)
            }

            function md5ii(t, e, i, n, r, o, a) {
                return md5cmn(i ^ (e | ~n), t, e, r, o, a)
            }
            var f = v35("v3", 48, function(t) {
                    if ("string" == typeof t) {
                        var e = unescape(encodeURIComponent(t));
                        t = new Uint8Array(e.length);
                        for (var i = 0; i < e.length; ++i) t[i] = e.charCodeAt(i)
                    }
                    return function(t) {
                        for (var e = [], i = 32 * t.length, n = "0123456789abcdef", r = 0; r < i; r += 8) {
                            var o = t[r >> 5] >>> r % 32 & 255,
                                a = parseInt(n.charAt(o >>> 4 & 15) + n.charAt(15 & o), 16);
                            e.push(a)
                        }
                        return e
                    }(function(t, e) {
                        t[e >> 5] |= 128 << e % 32, t[getOutputLength(e) - 1] = e;
                        for (var i = 1732584193, n = -271733879, r = -1732584194, o = 271733878, a = 0; a < t.length; a += 16) {
                            var s = i,
                                u = n,
                                l = r,
                                c = o;
                            i = md5ff(i, n, r, o, t[a], 7, -680876936), o = md5ff(o, i, n, r, t[a + 1], 12, -389564586), r = md5ff(r, o, i, n, t[a + 2], 17, 606105819), n = md5ff(n, r, o, i, t[a + 3], 22, -1044525330), i = md5ff(i, n, r, o, t[a + 4], 7, -176418897), o = md5ff(o, i, n, r, t[a + 5], 12, 1200080426), r = md5ff(r, o, i, n, t[a + 6], 17, -1473231341), n = md5ff(n, r, o, i, t[a + 7], 22, -45705983), i = md5ff(i, n, r, o, t[a + 8], 7, 1770035416), o = md5ff(o, i, n, r, t[a + 9], 12, -1958414417), r = md5ff(r, o, i, n, t[a + 10], 17, -42063), n = md5ff(n, r, o, i, t[a + 11], 22, -1990404162), i = md5ff(i, n, r, o, t[a + 12], 7, 1804603682), o = md5ff(o, i, n, r, t[a + 13], 12, -40341101), r = md5ff(r, o, i, n, t[a + 14], 17, -1502002290), n = md5ff(n, r, o, i, t[a + 15], 22, 1236535329), i = md5gg(i, n, r, o, t[a + 1], 5, -165796510), o = md5gg(o, i, n, r, t[a + 6], 9, -1069501632), r = md5gg(r, o, i, n, t[a + 11], 14, 643717713), n = md5gg(n, r, o, i, t[a], 20, -373897302), i = md5gg(i, n, r, o, t[a + 5], 5, -701558691), o = md5gg(o, i, n, r, t[a + 10], 9, 38016083), r = md5gg(r, o, i, n, t[a + 15], 14, -660478335), n = md5gg(n, r, o, i, t[a + 4], 20, -405537848), i = md5gg(i, n, r, o, t[a + 9], 5, 568446438), o = md5gg(o, i, n, r, t[a + 14], 9, -1019803690), r = md5gg(r, o, i, n, t[a + 3], 14, -187363961), n = md5gg(n, r, o, i, t[a + 8], 20, 1163531501), i = md5gg(i, n, r, o, t[a + 13], 5, -1444681467), o = md5gg(o, i, n, r, t[a + 2], 9, -51403784), r = md5gg(r, o, i, n, t[a + 7], 14, 1735328473), n = md5gg(n, r, o, i, t[a + 12], 20, -1926607734), i = md5hh(i, n, r, o, t[a + 5], 4, -378558), o = md5hh(o, i, n, r, t[a + 8], 11, -2022574463), r = md5hh(r, o, i, n, t[a + 11], 16, 1839030562), n = md5hh(n, r, o, i, t[a + 14], 23, -35309556), i = md5hh(i, n, r, o, t[a + 1], 4, -1530992060), o = md5hh(o, i, n, r, t[a + 4], 11, 1272893353), r = md5hh(r, o, i, n, t[a + 7], 16, -155497632), n = md5hh(n, r, o, i, t[a + 10], 23, -1094730640), i = md5hh(i, n, r, o, t[a + 13], 4, 681279174), o = md5hh(o, i, n, r, t[a], 11, -358537222), r = md5hh(r, o, i, n, t[a + 3], 16, -722521979), n = md5hh(n, r, o, i, t[a + 6], 23, 76029189), i = md5hh(i, n, r, o, t[a + 9], 4, -640364487), o = md5hh(o, i, n, r, t[a + 12], 11, -421815835), r = md5hh(r, o, i, n, t[a + 15], 16, 530742520), n = md5hh(n, r, o, i, t[a + 2], 23, -995338651), i = md5ii(i, n, r, o, t[a], 6, -198630844), o = md5ii(o, i, n, r, t[a + 7], 10, 1126891415), r = md5ii(r, o, i, n, t[a + 14], 15, -1416354905), n = md5ii(n, r, o, i, t[a + 5], 21, -57434055), i = md5ii(i, n, r, o, t[a + 12], 6, 1700485571), o = md5ii(o, i, n, r, t[a + 3], 10, -1894986606), r = md5ii(r, o, i, n, t[a + 10], 15, -1051523), n = md5ii(n, r, o, i, t[a + 1], 21, -2054922799), i = md5ii(i, n, r, o, t[a + 8], 6, 1873313359), o = md5ii(o, i, n, r, t[a + 15], 10, -30611744), r = md5ii(r, o, i, n, t[a + 6], 15, -1560198380), n = md5ii(n, r, o, i, t[a + 13], 21, 1309151649), i = md5ii(i, n, r, o, t[a + 4], 6, -145523070), o = md5ii(o, i, n, r, t[a + 11], 10, -1120210379), r = md5ii(r, o, i, n, t[a + 2], 15, 718787259), n = md5ii(n, r, o, i, t[a + 9], 21, -343485551), i = safeAdd(i, s), n = safeAdd(n, u), r = safeAdd(r, l), o = safeAdd(o, c)
                        }
                        return [i, n, r, o]
                    }(function(t) {
                        if (0 === t.length) return [];
                        for (var e = 8 * t.length, i = new Uint32Array(getOutputLength(e)), n = 0; n < e; n += 8) i[n >> 5] |= (255 & t[n / 8]) << n % 32;
                        return i
                    }(t), 8 * t.length))
                }),
                esm_browser_v4 = function(t, e, i) {
                    var n = (t = t || {}).random || (t.rng || rng)();
                    if (n[6] = 15 & n[6] | 64, n[8] = 63 & n[8] | 128, e) {
                        i = i || 0;
                        for (var r = 0; r < 16; ++r) e[i + r] = n[r];
                        return e
                    }
                    return esm_browser_stringify(n)
                };

            function ROTL(t, e) {
                return t << e | t >>> 32 - e
            }
            var g = v35("v5", 80, function(t) {
                    var e = [1518500249, 1859775393, 2400959708, 3395469782],
                        i = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
                    if ("string" == typeof t) {
                        var n = unescape(encodeURIComponent(t));
                        t = [];
                        for (var r = 0; r < n.length; ++r) t.push(n.charCodeAt(r))
                    } else Array.isArray(t) || (t = Array.prototype.slice.call(t));
                    t.push(128);
                    for (var o = Math.ceil((t.length / 4 + 2) / 16), a = Array(o), s = 0; s < o; ++s) {
                        for (var u = new Uint32Array(16), l = 0; l < 16; ++l) u[l] = t[64 * s + 4 * l] << 24 | t[64 * s + 4 * l + 1] << 16 | t[64 * s + 4 * l + 2] << 8 | t[64 * s + 4 * l + 3];
                        a[s] = u
                    }
                    a[o - 1][14] = (t.length - 1) * 8 / 4294967296, a[o - 1][14] = Math.floor(a[o - 1][14]), a[o - 1][15] = (t.length - 1) * 8 & 4294967295;
                    for (var c = 0; c < o; ++c) {
                        for (var d = new Uint32Array(80), f = 0; f < 16; ++f) d[f] = a[c][f];
                        for (var g = 16; g < 80; ++g) d[g] = ROTL(d[g - 3] ^ d[g - 8] ^ d[g - 14] ^ d[g - 16], 1);
                        for (var h = i[0], p = i[1], v = i[2], y = i[3], S = i[4], m = 0; m < 80; ++m) {
                            var _ = Math.floor(m / 20),
                                E = ROTL(h, 5) + function(t, e, i, n) {
                                    switch (t) {
                                        case 0:
                                            return e & i ^ ~e & n;
                                        case 1:
                                        case 3:
                                            return e ^ i ^ n;
                                        case 2:
                                            return e & i ^ e & n ^ i & n
                                    }
                                }(_, p, v, y) + S + e[_] + d[m] >>> 0;
                            S = y, y = v, v = ROTL(p, 30) >>> 0, p = h, h = E
                        }
                        i[0] = i[0] + h >>> 0, i[1] = i[1] + p >>> 0, i[2] = i[2] + v >>> 0, i[3] = i[3] + y >>> 0, i[4] = i[4] + S >>> 0
                    }
                    return [i[0] >> 24 & 255, i[0] >> 16 & 255, i[0] >> 8 & 255, 255 & i[0], i[1] >> 24 & 255, i[1] >> 16 & 255, i[1] >> 8 & 255, 255 & i[1], i[2] >> 24 & 255, i[2] >> 16 & 255, i[2] >> 8 & 255, 255 & i[2], i[3] >> 24 & 255, i[3] >> 16 & 255, i[3] >> 8 & 255, 255 & i[3], i[4] >> 24 & 255, i[4] >> 16 & 255, i[4] >> 8 & 255, 255 & i[4]]
                }),
                h = "00000000-0000-0000-0000-000000000000",
                esm_browser_version = function(t) {
                    if (!esm_browser_validate(t)) throw TypeError("Invalid UUID");
                    return parseInt(t.substr(14, 1), 16)
                }
        }
    }
]);