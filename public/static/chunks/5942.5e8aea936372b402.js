(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5942], {
        43907: function(t, i, r) {
            ! function(t, i) {
                "use strict";

                function assert(t, i) {
                    if (!t) throw Error(i || "Assertion failed")
                }

                function inherits(t, i) {
                    t.super_ = i;
                    var TempCtor = function() {};
                    TempCtor.prototype = i.prototype, t.prototype = new TempCtor, t.prototype.constructor = t
                }

                function BN(t, i, r) {
                    if (BN.isBN(t)) return t;
                    this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== t && (("le" === i || "be" === i) && (r = i, i = 10), this._init(t || 0, i || 10, r || "be"))
                }
                "object" == typeof t ? t.exports = BN : i.BN = BN, BN.BN = BN, BN.wordSize = 26;
                try {
                    e = "undefined" != typeof window && void 0 !== window.Buffer ? window.Buffer : r(39362).Buffer
                } catch (t) {}

                function parseHex4Bits(t, i) {
                    var r = t.charCodeAt(i);
                    return r >= 48 && r <= 57 ? r - 48 : r >= 65 && r <= 70 ? r - 55 : r >= 97 && r <= 102 ? r - 87 : void assert(!1, "Invalid character in " + t)
                }

                function parseHexByte(t, i, r) {
                    var e = parseHex4Bits(t, r);
                    return r - 1 >= i && (e |= parseHex4Bits(t, r - 1) << 4), e
                }

                function parseBase(t, i, r, e) {
                    for (var n = 0, h = 0, s = Math.min(t.length, r), o = i; o < s; o++) {
                        var u = t.charCodeAt(o) - 48;
                        n *= e, h = u >= 49 ? u - 49 + 10 : u >= 17 ? u - 17 + 10 : u, assert(u >= 0 && h < e, "Invalid character"), n += h
                    }
                    return n
                }

                function move(t, i) {
                    t.words = i.words, t.length = i.length, t.negative = i.negative, t.red = i.red
                }
                if (BN.isBN = function(t) {
                        return t instanceof BN || null !== t && "object" == typeof t && t.constructor.wordSize === BN.wordSize && Array.isArray(t.words)
                    }, BN.max = function(t, i) {
                        return t.cmp(i) > 0 ? t : i
                    }, BN.min = function(t, i) {
                        return 0 > t.cmp(i) ? t : i
                    }, BN.prototype._init = function(t, i, r) {
                        if ("number" == typeof t) return this._initNumber(t, i, r);
                        if ("object" == typeof t) return this._initArray(t, i, r);
                        "hex" === i && (i = 16), assert(i === (0 | i) && i >= 2 && i <= 36);
                        var e = 0;
                        "-" === (t = t.toString().replace(/\s+/g, ""))[0] && (e++, this.negative = 1), e < t.length && (16 === i ? this._parseHex(t, e, r) : (this._parseBase(t, i, e), "le" === r && this._initArray(this.toArray(), i, r)))
                    }, BN.prototype._initNumber = function(t, i, r) {
                        t < 0 && (this.negative = 1, t = -t), t < 67108864 ? (this.words = [67108863 & t], this.length = 1) : t < 4503599627370496 ? (this.words = [67108863 & t, t / 67108864 & 67108863], this.length = 2) : (assert(t < 9007199254740992), this.words = [67108863 & t, t / 67108864 & 67108863, 1], this.length = 3), "le" === r && this._initArray(this.toArray(), i, r)
                    }, BN.prototype._initArray = function(t, i, r) {
                        if (assert("number" == typeof t.length), t.length <= 0) return this.words = [0], this.length = 1, this;
                        this.length = Math.ceil(t.length / 3), this.words = Array(this.length);
                        for (var e, n, h = 0; h < this.length; h++) this.words[h] = 0;
                        var s = 0;
                        if ("be" === r)
                            for (h = t.length - 1, e = 0; h >= 0; h -= 3) n = t[h] | t[h - 1] << 8 | t[h - 2] << 16, this.words[e] |= n << s & 67108863, this.words[e + 1] = n >>> 26 - s & 67108863, (s += 24) >= 26 && (s -= 26, e++);
                        else if ("le" === r)
                            for (h = 0, e = 0; h < t.length; h += 3) n = t[h] | t[h + 1] << 8 | t[h + 2] << 16, this.words[e] |= n << s & 67108863, this.words[e + 1] = n >>> 26 - s & 67108863, (s += 24) >= 26 && (s -= 26, e++);
                        return this._strip()
                    }, BN.prototype._parseHex = function(t, i, r) {
                        this.length = Math.ceil((t.length - i) / 6), this.words = Array(this.length);
                        for (var e, n = 0; n < this.length; n++) this.words[n] = 0;
                        var h = 0,
                            s = 0;
                        if ("be" === r)
                            for (n = t.length - 1; n >= i; n -= 2) e = parseHexByte(t, i, n) << h, this.words[s] |= 67108863 & e, h >= 18 ? (h -= 18, s += 1, this.words[s] |= e >>> 26) : h += 8;
                        else
                            for (n = (t.length - i) % 2 == 0 ? i + 1 : i; n < t.length; n += 2) e = parseHexByte(t, i, n) << h, this.words[s] |= 67108863 & e, h >= 18 ? (h -= 18, s += 1, this.words[s] |= e >>> 26) : h += 8;
                        this._strip()
                    }, BN.prototype._parseBase = function(t, i, r) {
                        this.words = [0], this.length = 1;
                        for (var e = 0, n = 1; n <= 67108863; n *= i) e++;
                        e--, n = n / i | 0;
                        for (var h = t.length - r, s = h % e, o = Math.min(h, h - s) + r, u = 0, a = r; a < o; a += e) u = parseBase(t, a, a + e, i), this.imuln(n), this.words[0] + u < 67108864 ? this.words[0] += u : this._iaddn(u);
                        if (0 !== s) {
                            var l = 1;
                            for (u = parseBase(t, a, t.length, i), a = 0; a < s; a++) l *= i;
                            this.imuln(l), this.words[0] + u < 67108864 ? this.words[0] += u : this._iaddn(u)
                        }
                        this._strip()
                    }, BN.prototype.copy = function(t) {
                        t.words = Array(this.length);
                        for (var i = 0; i < this.length; i++) t.words[i] = this.words[i];
                        t.length = this.length, t.negative = this.negative, t.red = this.red
                    }, BN.prototype._move = function(t) {
                        move(t, this)
                    }, BN.prototype.clone = function() {
                        var t = new BN(null);
                        return this.copy(t), t
                    }, BN.prototype._expand = function(t) {
                        for (; this.length < t;) this.words[this.length++] = 0;
                        return this
                    }, BN.prototype._strip = function() {
                        for (; this.length > 1 && 0 === this.words[this.length - 1];) this.length--;
                        return this._normSign()
                    }, BN.prototype._normSign = function() {
                        return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this
                    }, "undefined" != typeof Symbol && "function" == typeof Symbol.for) try {
                    BN.prototype[Symbol.for("nodejs.util.inspect.custom")] = inspect
                } catch (t) {
                    BN.prototype.inspect = inspect
                } else BN.prototype.inspect = inspect;

                function inspect() {
                    return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
                }
                var e, n = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
                    h = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                    s = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];

                function smallMulTo(t, i, r) {
                    r.negative = i.negative ^ t.negative;
                    var e = t.length + i.length | 0;
                    r.length = e, e = e - 1 | 0;
                    var n = 0 | t.words[0],
                        h = 0 | i.words[0],
                        s = n * h,
                        o = 67108863 & s,
                        u = s / 67108864 | 0;
                    r.words[0] = o;
                    for (var a = 1; a < e; a++) {
                        for (var l = u >>> 26, m = 67108863 & u, d = Math.min(a, i.length - 1), p = Math.max(0, a - t.length + 1); p <= d; p++) {
                            var c = a - p | 0;
                            l += (s = (n = 0 | t.words[c]) * (h = 0 | i.words[p]) + m) / 67108864 | 0, m = 67108863 & s
                        }
                        r.words[a] = 0 | m, u = 0 | l
                    }
                    return 0 !== u ? r.words[a] = 0 | u : r.length--, r._strip()
                }
                BN.prototype.toString = function(t, i) {
                    if (i = 0 | i || 1, 16 === (t = t || 10) || "hex" === t) {
                        r = "";
                        for (var r, e = 0, o = 0, u = 0; u < this.length; u++) {
                            var a = this.words[u],
                                l = ((a << e | o) & 16777215).toString(16);
                            o = a >>> 24 - e & 16777215, (e += 2) >= 26 && (e -= 26, u--), r = 0 !== o || u !== this.length - 1 ? n[6 - l.length] + l + r : l + r
                        }
                        for (0 !== o && (r = o.toString(16) + r); r.length % i != 0;) r = "0" + r;
                        return 0 !== this.negative && (r = "-" + r), r
                    }
                    if (t === (0 | t) && t >= 2 && t <= 36) {
                        var m = h[t],
                            d = s[t];
                        r = "";
                        var p = this.clone();
                        for (p.negative = 0; !p.isZero();) {
                            var c = p.modrn(d).toString(t);
                            r = (p = p.idivn(d)).isZero() ? c + r : n[m - c.length] + c + r
                        }
                        for (this.isZero() && (r = "0" + r); r.length % i != 0;) r = "0" + r;
                        return 0 !== this.negative && (r = "-" + r), r
                    }
                    assert(!1, "Base should be between 2 and 36")
                }, BN.prototype.toNumber = function() {
                    var t = this.words[0];
                    return 2 === this.length ? t += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? t += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && assert(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -t : t
                }, BN.prototype.toJSON = function() {
                    return this.toString(16, 2)
                }, e && (BN.prototype.toBuffer = function(t, i) {
                    return this.toArrayLike(e, t, i)
                }), BN.prototype.toArray = function(t, i) {
                    return this.toArrayLike(Array, t, i)
                }, BN.prototype.toArrayLike = function(t, i, r) {
                    this._strip();
                    var e = this.byteLength(),
                        n = r || Math.max(1, e);
                    assert(e <= n, "byte array longer than desired length"), assert(n > 0, "Requested array length <= 0");
                    var h = t.allocUnsafe ? t.allocUnsafe(n) : new t(n);
                    return this["_toArrayLike" + ("le" === i ? "LE" : "BE")](h, e), h
                }, BN.prototype._toArrayLikeLE = function(t, i) {
                    for (var r = 0, e = 0, n = 0, h = 0; n < this.length; n++) {
                        var s = this.words[n] << h | e;
                        t[r++] = 255 & s, r < t.length && (t[r++] = s >> 8 & 255), r < t.length && (t[r++] = s >> 16 & 255), 6 === h ? (r < t.length && (t[r++] = s >> 24 & 255), e = 0, h = 0) : (e = s >>> 24, h += 2)
                    }
                    if (r < t.length)
                        for (t[r++] = e; r < t.length;) t[r++] = 0
                }, BN.prototype._toArrayLikeBE = function(t, i) {
                    for (var r = t.length - 1, e = 0, n = 0, h = 0; n < this.length; n++) {
                        var s = this.words[n] << h | e;
                        t[r--] = 255 & s, r >= 0 && (t[r--] = s >> 8 & 255), r >= 0 && (t[r--] = s >> 16 & 255), 6 === h ? (r >= 0 && (t[r--] = s >> 24 & 255), e = 0, h = 0) : (e = s >>> 24, h += 2)
                    }
                    if (r >= 0)
                        for (t[r--] = e; r >= 0;) t[r--] = 0
                }, Math.clz32 ? BN.prototype._countBits = function(t) {
                    return 32 - Math.clz32(t)
                } : BN.prototype._countBits = function(t) {
                    var i = t,
                        r = 0;
                    return i >= 4096 && (r += 13, i >>>= 13), i >= 64 && (r += 7, i >>>= 7), i >= 8 && (r += 4, i >>>= 4), i >= 2 && (r += 2, i >>>= 2), r + i
                }, BN.prototype._zeroBits = function(t) {
                    if (0 === t) return 26;
                    var i = t,
                        r = 0;
                    return (8191 & i) == 0 && (r += 13, i >>>= 13), (127 & i) == 0 && (r += 7, i >>>= 7), (15 & i) == 0 && (r += 4, i >>>= 4), (3 & i) == 0 && (r += 2, i >>>= 2), (1 & i) == 0 && r++, r
                }, BN.prototype.bitLength = function() {
                    var t = this.words[this.length - 1],
                        i = this._countBits(t);
                    return (this.length - 1) * 26 + i
                }, BN.prototype.zeroBits = function() {
                    if (this.isZero()) return 0;
                    for (var t = 0, i = 0; i < this.length; i++) {
                        var r = this._zeroBits(this.words[i]);
                        if (t += r, 26 !== r) break
                    }
                    return t
                }, BN.prototype.byteLength = function() {
                    return Math.ceil(this.bitLength() / 8)
                }, BN.prototype.toTwos = function(t) {
                    return 0 !== this.negative ? this.abs().inotn(t).iaddn(1) : this.clone()
                }, BN.prototype.fromTwos = function(t) {
                    return this.testn(t - 1) ? this.notn(t).iaddn(1).ineg() : this.clone()
                }, BN.prototype.isNeg = function() {
                    return 0 !== this.negative
                }, BN.prototype.neg = function() {
                    return this.clone().ineg()
                }, BN.prototype.ineg = function() {
                    return this.isZero() || (this.negative ^= 1), this
                }, BN.prototype.iuor = function(t) {
                    for (; this.length < t.length;) this.words[this.length++] = 0;
                    for (var i = 0; i < t.length; i++) this.words[i] = this.words[i] | t.words[i];
                    return this._strip()
                }, BN.prototype.ior = function(t) {
                    return assert((this.negative | t.negative) == 0), this.iuor(t)
                }, BN.prototype.or = function(t) {
                    return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this)
                }, BN.prototype.uor = function(t) {
                    return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this)
                }, BN.prototype.iuand = function(t) {
                    var i;
                    i = this.length > t.length ? t : this;
                    for (var r = 0; r < i.length; r++) this.words[r] = this.words[r] & t.words[r];
                    return this.length = i.length, this._strip()
                }, BN.prototype.iand = function(t) {
                    return assert((this.negative | t.negative) == 0), this.iuand(t)
                }, BN.prototype.and = function(t) {
                    return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this)
                }, BN.prototype.uand = function(t) {
                    return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this)
                }, BN.prototype.iuxor = function(t) {
                    this.length > t.length ? (i = this, r = t) : (i = t, r = this);
                    for (var i, r, e = 0; e < r.length; e++) this.words[e] = i.words[e] ^ r.words[e];
                    if (this !== i)
                        for (; e < i.length; e++) this.words[e] = i.words[e];
                    return this.length = i.length, this._strip()
                }, BN.prototype.ixor = function(t) {
                    return assert((this.negative | t.negative) == 0), this.iuxor(t)
                }, BN.prototype.xor = function(t) {
                    return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this)
                }, BN.prototype.uxor = function(t) {
                    return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this)
                }, BN.prototype.inotn = function(t) {
                    assert("number" == typeof t && t >= 0);
                    var i = 0 | Math.ceil(t / 26),
                        r = t % 26;
                    this._expand(i), r > 0 && i--;
                    for (var e = 0; e < i; e++) this.words[e] = 67108863 & ~this.words[e];
                    return r > 0 && (this.words[e] = ~this.words[e] & 67108863 >> 26 - r), this._strip()
                }, BN.prototype.notn = function(t) {
                    return this.clone().inotn(t)
                }, BN.prototype.setn = function(t, i) {
                    assert("number" == typeof t && t >= 0);
                    var r = t / 26 | 0,
                        e = t % 26;
                    return this._expand(r + 1), i ? this.words[r] = this.words[r] | 1 << e : this.words[r] = this.words[r] & ~(1 << e), this._strip()
                }, BN.prototype.iadd = function(t) {
                    if (0 !== this.negative && 0 === t.negative) return this.negative = 0, i = this.isub(t), this.negative ^= 1, this._normSign();
                    if (0 === this.negative && 0 !== t.negative) return t.negative = 0, i = this.isub(t), t.negative = 1, i._normSign();
                    this.length > t.length ? (r = this, e = t) : (r = t, e = this);
                    for (var i, r, e, n = 0, h = 0; h < e.length; h++) i = (0 | r.words[h]) + (0 | e.words[h]) + n, this.words[h] = 67108863 & i, n = i >>> 26;
                    for (; 0 !== n && h < r.length; h++) i = (0 | r.words[h]) + n, this.words[h] = 67108863 & i, n = i >>> 26;
                    if (this.length = r.length, 0 !== n) this.words[this.length] = n, this.length++;
                    else if (r !== this)
                        for (; h < r.length; h++) this.words[h] = r.words[h];
                    return this
                }, BN.prototype.add = function(t) {
                    var i;
                    return 0 !== t.negative && 0 === this.negative ? (t.negative = 0, i = this.sub(t), t.negative ^= 1, i) : 0 === t.negative && 0 !== this.negative ? (this.negative = 0, i = t.sub(this), this.negative = 1, i) : this.length > t.length ? this.clone().iadd(t) : t.clone().iadd(this)
                }, BN.prototype.isub = function(t) {
                    if (0 !== t.negative) {
                        t.negative = 0;
                        var i, r, e = this.iadd(t);
                        return t.negative = 1, e._normSign()
                    }
                    if (0 !== this.negative) return this.negative = 0, this.iadd(t), this.negative = 1, this._normSign();
                    var n = this.cmp(t);
                    if (0 === n) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
                    n > 0 ? (i = this, r = t) : (i = t, r = this);
                    for (var h = 0, s = 0; s < r.length; s++) h = (e = (0 | i.words[s]) - (0 | r.words[s]) + h) >> 26, this.words[s] = 67108863 & e;
                    for (; 0 !== h && s < i.length; s++) h = (e = (0 | i.words[s]) + h) >> 26, this.words[s] = 67108863 & e;
                    if (0 === h && s < i.length && i !== this)
                        for (; s < i.length; s++) this.words[s] = i.words[s];
                    return this.length = Math.max(this.length, s), i !== this && (this.negative = 1), this._strip()
                }, BN.prototype.sub = function(t) {
                    return this.clone().isub(t)
                };
                var comb10MulTo = function(t, i, r) {
                    var e, n, h, s = t.words,
                        o = i.words,
                        u = r.words,
                        a = 0,
                        l = 0 | s[0],
                        m = 8191 & l,
                        d = l >>> 13,
                        p = 0 | s[1],
                        c = 8191 & p,
                        M = p >>> 13,
                        v = 0 | s[2],
                        g = 8191 & v,
                        y = v >>> 13,
                        w = 0 | s[3],
                        B = 8191 & w,
                        N = w >>> 13,
                        b = 0 | s[4],
                        _ = 8191 & b,
                        k = b >>> 13,
                        A = 0 | s[5],
                        S = 8191 & A,
                        x = A >>> 13,
                        R = 0 | s[6],
                        K = 8191 & R,
                        O = R >>> 13,
                        T = 0 | s[7],
                        F = 8191 & T,
                        E = T >>> 13,
                        P = 0 | s[8],
                        C = 8191 & P,
                        q = P >>> 13,
                        Z = 0 | s[9],
                        z = 8191 & Z,
                        I = Z >>> 13,
                        L = 0 | o[0],
                        j = 8191 & L,
                        H = L >>> 13,
                        J = 0 | o[1],
                        U = 8191 & J,
                        D = J >>> 13,
                        V = 0 | o[2],
                        W = 8191 & V,
                        Y = V >>> 13,
                        G = 0 | o[3],
                        Q = 8191 & G,
                        X = G >>> 13,
                        $ = 0 | o[4],
                        tt = 8191 & $,
                        ti = $ >>> 13,
                        tr = 0 | o[5],
                        te = 8191 & tr,
                        tn = tr >>> 13,
                        th = 0 | o[6],
                        ts = 8191 & th,
                        to = th >>> 13,
                        tu = 0 | o[7],
                        ta = 8191 & tu,
                        tl = tu >>> 13,
                        tf = 0 | o[8],
                        tm = 8191 & tf,
                        td = tf >>> 13,
                        tp = 0 | o[9],
                        tc = 8191 & tp,
                        tM = tp >>> 13;
                    r.negative = t.negative ^ i.negative, r.length = 19;
                    var tv = (a + (e = Math.imul(m, j)) | 0) + ((8191 & (n = (n = Math.imul(m, H)) + Math.imul(d, j) | 0)) << 13) | 0;
                    a = ((h = Math.imul(d, H)) + (n >>> 13) | 0) + (tv >>> 26) | 0, tv &= 67108863, e = Math.imul(c, j), n = (n = Math.imul(c, H)) + Math.imul(M, j) | 0, h = Math.imul(M, H);
                    var tg = (a + (e = e + Math.imul(m, U) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(m, D) | 0) + Math.imul(d, U) | 0)) << 13) | 0;
                    a = ((h = h + Math.imul(d, D) | 0) + (n >>> 13) | 0) + (tg >>> 26) | 0, tg &= 67108863, e = Math.imul(g, j), n = (n = Math.imul(g, H)) + Math.imul(y, j) | 0, h = Math.imul(y, H), e = e + Math.imul(c, U) | 0, n = (n = n + Math.imul(c, D) | 0) + Math.imul(M, U) | 0, h = h + Math.imul(M, D) | 0;
                    var ty = (a + (e = e + Math.imul(m, W) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(m, Y) | 0) + Math.imul(d, W) | 0)) << 13) | 0;
                    a = ((h = h + Math.imul(d, Y) | 0) + (n >>> 13) | 0) + (ty >>> 26) | 0, ty &= 67108863, e = Math.imul(B, j), n = (n = Math.imul(B, H)) + Math.imul(N, j) | 0, h = Math.imul(N, H), e = e + Math.imul(g, U) | 0, n = (n = n + Math.imul(g, D) | 0) + Math.imul(y, U) | 0, h = h + Math.imul(y, D) | 0, e = e + Math.imul(c, W) | 0, n = (n = n + Math.imul(c, Y) | 0) + Math.imul(M, W) | 0, h = h + Math.imul(M, Y) | 0;
                    var tw = (a + (e = e + Math.imul(m, Q) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(m, X) | 0) + Math.imul(d, Q) | 0)) << 13) | 0;
                    a = ((h = h + Math.imul(d, X) | 0) + (n >>> 13) | 0) + (tw >>> 26) | 0, tw &= 67108863, e = Math.imul(_, j), n = (n = Math.imul(_, H)) + Math.imul(k, j) | 0, h = Math.imul(k, H), e = e + Math.imul(B, U) | 0, n = (n = n + Math.imul(B, D) | 0) + Math.imul(N, U) | 0, h = h + Math.imul(N, D) | 0, e = e + Math.imul(g, W) | 0, n = (n = n + Math.imul(g, Y) | 0) + Math.imul(y, W) | 0, h = h + Math.imul(y, Y) | 0, e = e + Math.imul(c, Q) | 0, n = (n = n + Math.imul(c, X) | 0) + Math.imul(M, Q) | 0, h = h + Math.imul(M, X) | 0;
                    var tB = (a + (e = e + Math.imul(m, tt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(m, ti) | 0) + Math.imul(d, tt) | 0)) << 13) | 0;
                    a = ((h = h + Math.imul(d, ti) | 0) + (n >>> 13) | 0) + (tB >>> 26) | 0, tB &= 67108863, e = Math.imul(S, j), n = (n = Math.imul(S, H)) + Math.imul(x, j) | 0, h = Math.imul(x, H), e = e + Math.imul(_, U) | 0, n = (n = n + Math.imul(_, D) | 0) + Math.imul(k, U) | 0, h = h + Math.imul(k, D) | 0, e = e + Math.imul(B, W) | 0, n = (n = n + Math.imul(B, Y) | 0) + Math.imul(N, W) | 0, h = h + Math.imul(N, Y) | 0, e = e + Math.imul(g, Q) | 0, n = (n = n + Math.imul(g, X) | 0) + Math.imul(y, Q) | 0, h = h + Math.imul(y, X) | 0, e = e + Math.imul(c, tt) | 0, n = (n = n + Math.imul(c, ti) | 0) + Math.imul(M, tt) | 0, h = h + Math.imul(M, ti) | 0;
                    var tN = (a + (e = e + Math.imul(m, te) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(m, tn) | 0) + Math.imul(d, te) | 0)) << 13) | 0;
                    a = ((h = h + Math.imul(d, tn) | 0) + (n >>> 13) | 0) + (tN >>> 26) | 0, tN &= 67108863, e = Math.imul(K, j), n = (n = Math.imul(K, H)) + Math.imul(O, j) | 0, h = Math.imul(O, H), e = e + Math.imul(S, U) | 0, n = (n = n + Math.imul(S, D) | 0) + Math.imul(x, U) | 0, h = h + Math.imul(x, D) | 0, e = e + Math.imul(_, W) | 0, n = (n = n + Math.imul(_, Y) | 0) + Math.imul(k, W) | 0, h = h + Math.imul(k, Y) | 0, e = e + Math.imul(B, Q) | 0, n = (n = n + Math.imul(B, X) | 0) + Math.imul(N, Q) | 0, h = h + Math.imul(N, X) | 0, e = e + Math.imul(g, tt) | 0, n = (n = n + Math.imul(g, ti) | 0) + Math.imul(y, tt) | 0, h = h + Math.imul(y, ti) | 0, e = e + Math.imul(c, te) | 0, n = (n = n + Math.imul(c, tn) | 0) + Math.imul(M, te) | 0, h = h + Math.imul(M, tn) | 0;
                    var tb = (a + (e = e + Math.imul(m, ts) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(m, to) | 0) + Math.imul(d, ts) | 0)) << 13) | 0;
                    a = ((h = h + Math.imul(d, to) | 0) + (n >>> 13) | 0) + (tb >>> 26) | 0, tb &= 67108863, e = Math.imul(F, j), n = (n = Math.imul(F, H)) + Math.imul(E, j) | 0, h = Math.imul(E, H), e = e + Math.imul(K, U) | 0, n = (n = n + Math.imul(K, D) | 0) + Math.imul(O, U) | 0, h = h + Math.imul(O, D) | 0, e = e + Math.imul(S, W) | 0, n = (n = n + Math.imul(S, Y) | 0) + Math.imul(x, W) | 0, h = h + Math.imul(x, Y) | 0, e = e + Math.imul(_, Q) | 0, n = (n = n + Math.imul(_, X) | 0) + Math.imul(k, Q) | 0, h = h + Math.imul(k, X) | 0, e = e + Math.imul(B, tt) | 0, n = (n = n + Math.imul(B, ti) | 0) + Math.imul(N, tt) | 0, h = h + Math.imul(N, ti) | 0, e = e + Math.imul(g, te) | 0, n = (n = n + Math.imul(g, tn) | 0) + Math.imul(y, te) | 0, h = h + Math.imul(y, tn) | 0, e = e + Math.imul(c, ts) | 0, n = (n = n + Math.imul(c, to) | 0) + Math.imul(M, ts) | 0, h = h + Math.imul(M, to) | 0;
                    var t_ = (a + (e = e + Math.imul(m, ta) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(m, tl) | 0) + Math.imul(d, ta) | 0)) << 13) | 0;
                    a = ((h = h + Math.imul(d, tl) | 0) + (n >>> 13) | 0) + (t_ >>> 26) | 0, t_ &= 67108863, e = Math.imul(C, j), n = (n = Math.imul(C, H)) + Math.imul(q, j) | 0, h = Math.imul(q, H), e = e + Math.imul(F, U) | 0, n = (n = n + Math.imul(F, D) | 0) + Math.imul(E, U) | 0, h = h + Math.imul(E, D) | 0, e = e + Math.imul(K, W) | 0, n = (n = n + Math.imul(K, Y) | 0) + Math.imul(O, W) | 0, h = h + Math.imul(O, Y) | 0, e = e + Math.imul(S, Q) | 0, n = (n = n + Math.imul(S, X) | 0) + Math.imul(x, Q) | 0, h = h + Math.imul(x, X) | 0, e = e + Math.imul(_, tt) | 0, n = (n = n + Math.imul(_, ti) | 0) + Math.imul(k, tt) | 0, h = h + Math.imul(k, ti) | 0, e = e + Math.imul(B, te) | 0, n = (n = n + Math.imul(B, tn) | 0) + Math.imul(N, te) | 0, h = h + Math.imul(N, tn) | 0, e = e + Math.imul(g, ts) | 0, n = (n = n + Math.imul(g, to) | 0) + Math.imul(y, ts) | 0, h = h + Math.imul(y, to) | 0, e = e + Math.imul(c, ta) | 0, n = (n = n + Math.imul(c, tl) | 0) + Math.imul(M, ta) | 0, h = h + Math.imul(M, tl) | 0;
                    var tk = (a + (e = e + Math.imul(m, tm) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(m, td) | 0) + Math.imul(d, tm) | 0)) << 13) | 0;
                    a = ((h = h + Math.imul(d, td) | 0) + (n >>> 13) | 0) + (tk >>> 26) | 0, tk &= 67108863, e = Math.imul(z, j), n = (n = Math.imul(z, H)) + Math.imul(I, j) | 0, h = Math.imul(I, H), e = e + Math.imul(C, U) | 0, n = (n = n + Math.imul(C, D) | 0) + Math.imul(q, U) | 0, h = h + Math.imul(q, D) | 0, e = e + Math.imul(F, W) | 0, n = (n = n + Math.imul(F, Y) | 0) + Math.imul(E, W) | 0, h = h + Math.imul(E, Y) | 0, e = e + Math.imul(K, Q) | 0, n = (n = n + Math.imul(K, X) | 0) + Math.imul(O, Q) | 0, h = h + Math.imul(O, X) | 0, e = e + Math.imul(S, tt) | 0, n = (n = n + Math.imul(S, ti) | 0) + Math.imul(x, tt) | 0, h = h + Math.imul(x, ti) | 0, e = e + Math.imul(_, te) | 0, n = (n = n + Math.imul(_, tn) | 0) + Math.imul(k, te) | 0, h = h + Math.imul(k, tn) | 0, e = e + Math.imul(B, ts) | 0, n = (n = n + Math.imul(B, to) | 0) + Math.imul(N, ts) | 0, h = h + Math.imul(N, to) | 0, e = e + Math.imul(g, ta) | 0, n = (n = n + Math.imul(g, tl) | 0) + Math.imul(y, ta) | 0, h = h + Math.imul(y, tl) | 0, e = e + Math.imul(c, tm) | 0, n = (n = n + Math.imul(c, td) | 0) + Math.imul(M, tm) | 0, h = h + Math.imul(M, td) | 0;
                    var tA = (a + (e = e + Math.imul(m, tc) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(m, tM) | 0) + Math.imul(d, tc) | 0)) << 13) | 0;
                    a = ((h = h + Math.imul(d, tM) | 0) + (n >>> 13) | 0) + (tA >>> 26) | 0, tA &= 67108863, e = Math.imul(z, U), n = (n = Math.imul(z, D)) + Math.imul(I, U) | 0, h = Math.imul(I, D), e = e + Math.imul(C, W) | 0, n = (n = n + Math.imul(C, Y) | 0) + Math.imul(q, W) | 0, h = h + Math.imul(q, Y) | 0, e = e + Math.imul(F, Q) | 0, n = (n = n + Math.imul(F, X) | 0) + Math.imul(E, Q) | 0, h = h + Math.imul(E, X) | 0, e = e + Math.imul(K, tt) | 0, n = (n = n + Math.imul(K, ti) | 0) + Math.imul(O, tt) | 0, h = h + Math.imul(O, ti) | 0, e = e + Math.imul(S, te) | 0, n = (n = n + Math.imul(S, tn) | 0) + Math.imul(x, te) | 0, h = h + Math.imul(x, tn) | 0, e = e + Math.imul(_, ts) | 0, n = (n = n + Math.imul(_, to) | 0) + Math.imul(k, ts) | 0, h = h + Math.imul(k, to) | 0, e = e + Math.imul(B, ta) | 0, n = (n = n + Math.imul(B, tl) | 0) + Math.imul(N, ta) | 0, h = h + Math.imul(N, tl) | 0, e = e + Math.imul(g, tm) | 0, n = (n = n + Math.imul(g, td) | 0) + Math.imul(y, tm) | 0, h = h + Math.imul(y, td) | 0;
                    var tS = (a + (e = e + Math.imul(c, tc) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(c, tM) | 0) + Math.imul(M, tc) | 0)) << 13) | 0;
                    a = ((h = h + Math.imul(M, tM) | 0) + (n >>> 13) | 0) + (tS >>> 26) | 0, tS &= 67108863, e = Math.imul(z, W), n = (n = Math.imul(z, Y)) + Math.imul(I, W) | 0, h = Math.imul(I, Y), e = e + Math.imul(C, Q) | 0, n = (n = n + Math.imul(C, X) | 0) + Math.imul(q, Q) | 0, h = h + Math.imul(q, X) | 0, e = e + Math.imul(F, tt) | 0, n = (n = n + Math.imul(F, ti) | 0) + Math.imul(E, tt) | 0, h = h + Math.imul(E, ti) | 0, e = e + Math.imul(K, te) | 0, n = (n = n + Math.imul(K, tn) | 0) + Math.imul(O, te) | 0, h = h + Math.imul(O, tn) | 0, e = e + Math.imul(S, ts) | 0, n = (n = n + Math.imul(S, to) | 0) + Math.imul(x, ts) | 0, h = h + Math.imul(x, to) | 0, e = e + Math.imul(_, ta) | 0, n = (n = n + Math.imul(_, tl) | 0) + Math.imul(k, ta) | 0, h = h + Math.imul(k, tl) | 0, e = e + Math.imul(B, tm) | 0, n = (n = n + Math.imul(B, td) | 0) + Math.imul(N, tm) | 0, h = h + Math.imul(N, td) | 0;
                    var tx = (a + (e = e + Math.imul(g, tc) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(g, tM) | 0) + Math.imul(y, tc) | 0)) << 13) | 0;
                    a = ((h = h + Math.imul(y, tM) | 0) + (n >>> 13) | 0) + (tx >>> 26) | 0, tx &= 67108863, e = Math.imul(z, Q), n = (n = Math.imul(z, X)) + Math.imul(I, Q) | 0, h = Math.imul(I, X), e = e + Math.imul(C, tt) | 0, n = (n = n + Math.imul(C, ti) | 0) + Math.imul(q, tt) | 0, h = h + Math.imul(q, ti) | 0, e = e + Math.imul(F, te) | 0, n = (n = n + Math.imul(F, tn) | 0) + Math.imul(E, te) | 0, h = h + Math.imul(E, tn) | 0, e = e + Math.imul(K, ts) | 0, n = (n = n + Math.imul(K, to) | 0) + Math.imul(O, ts) | 0, h = h + Math.imul(O, to) | 0, e = e + Math.imul(S, ta) | 0, n = (n = n + Math.imul(S, tl) | 0) + Math.imul(x, ta) | 0, h = h + Math.imul(x, tl) | 0, e = e + Math.imul(_, tm) | 0, n = (n = n + Math.imul(_, td) | 0) + Math.imul(k, tm) | 0, h = h + Math.imul(k, td) | 0;
                    var tR = (a + (e = e + Math.imul(B, tc) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(B, tM) | 0) + Math.imul(N, tc) | 0)) << 13) | 0;
                    a = ((h = h + Math.imul(N, tM) | 0) + (n >>> 13) | 0) + (tR >>> 26) | 0, tR &= 67108863, e = Math.imul(z, tt), n = (n = Math.imul(z, ti)) + Math.imul(I, tt) | 0, h = Math.imul(I, ti), e = e + Math.imul(C, te) | 0, n = (n = n + Math.imul(C, tn) | 0) + Math.imul(q, te) | 0, h = h + Math.imul(q, tn) | 0, e = e + Math.imul(F, ts) | 0, n = (n = n + Math.imul(F, to) | 0) + Math.imul(E, ts) | 0, h = h + Math.imul(E, to) | 0, e = e + Math.imul(K, ta) | 0, n = (n = n + Math.imul(K, tl) | 0) + Math.imul(O, ta) | 0, h = h + Math.imul(O, tl) | 0, e = e + Math.imul(S, tm) | 0, n = (n = n + Math.imul(S, td) | 0) + Math.imul(x, tm) | 0, h = h + Math.imul(x, td) | 0;
                    var tK = (a + (e = e + Math.imul(_, tc) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(_, tM) | 0) + Math.imul(k, tc) | 0)) << 13) | 0;
                    a = ((h = h + Math.imul(k, tM) | 0) + (n >>> 13) | 0) + (tK >>> 26) | 0, tK &= 67108863, e = Math.imul(z, te), n = (n = Math.imul(z, tn)) + Math.imul(I, te) | 0, h = Math.imul(I, tn), e = e + Math.imul(C, ts) | 0, n = (n = n + Math.imul(C, to) | 0) + Math.imul(q, ts) | 0, h = h + Math.imul(q, to) | 0, e = e + Math.imul(F, ta) | 0, n = (n = n + Math.imul(F, tl) | 0) + Math.imul(E, ta) | 0, h = h + Math.imul(E, tl) | 0, e = e + Math.imul(K, tm) | 0, n = (n = n + Math.imul(K, td) | 0) + Math.imul(O, tm) | 0, h = h + Math.imul(O, td) | 0;
                    var tO = (a + (e = e + Math.imul(S, tc) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(S, tM) | 0) + Math.imul(x, tc) | 0)) << 13) | 0;
                    a = ((h = h + Math.imul(x, tM) | 0) + (n >>> 13) | 0) + (tO >>> 26) | 0, tO &= 67108863, e = Math.imul(z, ts), n = (n = Math.imul(z, to)) + Math.imul(I, ts) | 0, h = Math.imul(I, to), e = e + Math.imul(C, ta) | 0, n = (n = n + Math.imul(C, tl) | 0) + Math.imul(q, ta) | 0, h = h + Math.imul(q, tl) | 0, e = e + Math.imul(F, tm) | 0, n = (n = n + Math.imul(F, td) | 0) + Math.imul(E, tm) | 0, h = h + Math.imul(E, td) | 0;
                    var tT = (a + (e = e + Math.imul(K, tc) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(K, tM) | 0) + Math.imul(O, tc) | 0)) << 13) | 0;
                    a = ((h = h + Math.imul(O, tM) | 0) + (n >>> 13) | 0) + (tT >>> 26) | 0, tT &= 67108863, e = Math.imul(z, ta), n = (n = Math.imul(z, tl)) + Math.imul(I, ta) | 0, h = Math.imul(I, tl), e = e + Math.imul(C, tm) | 0, n = (n = n + Math.imul(C, td) | 0) + Math.imul(q, tm) | 0, h = h + Math.imul(q, td) | 0;
                    var tF = (a + (e = e + Math.imul(F, tc) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(F, tM) | 0) + Math.imul(E, tc) | 0)) << 13) | 0;
                    a = ((h = h + Math.imul(E, tM) | 0) + (n >>> 13) | 0) + (tF >>> 26) | 0, tF &= 67108863, e = Math.imul(z, tm), n = (n = Math.imul(z, td)) + Math.imul(I, tm) | 0, h = Math.imul(I, td);
                    var tE = (a + (e = e + Math.imul(C, tc) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(C, tM) | 0) + Math.imul(q, tc) | 0)) << 13) | 0;
                    a = ((h = h + Math.imul(q, tM) | 0) + (n >>> 13) | 0) + (tE >>> 26) | 0, tE &= 67108863;
                    var tP = (a + (e = Math.imul(z, tc)) | 0) + ((8191 & (n = (n = Math.imul(z, tM)) + Math.imul(I, tc) | 0)) << 13) | 0;
                    return a = ((h = Math.imul(I, tM)) + (n >>> 13) | 0) + (tP >>> 26) | 0, tP &= 67108863, u[0] = tv, u[1] = tg, u[2] = ty, u[3] = tw, u[4] = tB, u[5] = tN, u[6] = tb, u[7] = t_, u[8] = tk, u[9] = tA, u[10] = tS, u[11] = tx, u[12] = tR, u[13] = tK, u[14] = tO, u[15] = tT, u[16] = tF, u[17] = tE, u[18] = tP, 0 !== a && (u[19] = a, r.length++), r
                };

                function bigMulTo(t, i, r) {
                    r.negative = i.negative ^ t.negative, r.length = t.length + i.length;
                    for (var e = 0, n = 0, h = 0; h < r.length - 1; h++) {
                        var s = n;
                        n = 0;
                        for (var o = 67108863 & e, u = Math.min(h, i.length - 1), a = Math.max(0, h - t.length + 1); a <= u; a++) {
                            var l = h - a,
                                m = (0 | t.words[l]) * (0 | i.words[a]),
                                d = 67108863 & m;
                            s = s + (m / 67108864 | 0) | 0, o = 67108863 & (d = d + o | 0), n += (s = s + (d >>> 26) | 0) >>> 26, s &= 67108863
                        }
                        r.words[h] = o, e = s, s = n
                    }
                    return 0 !== e ? r.words[h] = e : r.length--, r._strip()
                }

                function FFTM(t, i) {
                    this.x = t, this.y = i
                }
                Math.imul || (comb10MulTo = smallMulTo), BN.prototype.mulTo = function(t, i) {
                    var r, e = this.length + t.length;
                    return 10 === this.length && 10 === t.length ? comb10MulTo(this, t, i) : e < 63 ? smallMulTo(this, t, i) : bigMulTo(this, t, i)
                }, FFTM.prototype.makeRBT = function(t) {
                    for (var i = Array(t), r = BN.prototype._countBits(t) - 1, e = 0; e < t; e++) i[e] = this.revBin(e, r, t);
                    return i
                }, FFTM.prototype.revBin = function(t, i, r) {
                    if (0 === t || t === r - 1) return t;
                    for (var e = 0, n = 0; n < i; n++) e |= (1 & t) << i - n - 1, t >>= 1;
                    return e
                }, FFTM.prototype.permute = function(t, i, r, e, n, h) {
                    for (var s = 0; s < h; s++) e[s] = i[t[s]], n[s] = r[t[s]]
                }, FFTM.prototype.transform = function(t, i, r, e, n, h) {
                    this.permute(h, t, i, r, e, n);
                    for (var s = 1; s < n; s <<= 1)
                        for (var o = s << 1, u = Math.cos(2 * Math.PI / o), a = Math.sin(2 * Math.PI / o), l = 0; l < n; l += o)
                            for (var m = u, d = a, p = 0; p < s; p++) {
                                var c = r[l + p],
                                    M = e[l + p],
                                    v = r[l + p + s],
                                    g = e[l + p + s],
                                    y = m * v - d * g;
                                g = m * g + d * v, v = y, r[l + p] = c + v, e[l + p] = M + g, r[l + p + s] = c - v, e[l + p + s] = M - g, p !== o && (y = u * m - a * d, d = u * d + a * m, m = y)
                            }
                }, FFTM.prototype.guessLen13b = function(t, i) {
                    var r = 1 | Math.max(i, t),
                        e = 1 & r,
                        n = 0;
                    for (r = r / 2 | 0; r; r >>>= 1) n++;
                    return 1 << n + 1 + e
                }, FFTM.prototype.conjugate = function(t, i, r) {
                    if (!(r <= 1))
                        for (var e = 0; e < r / 2; e++) {
                            var n = t[e];
                            t[e] = t[r - e - 1], t[r - e - 1] = n, n = i[e], i[e] = -i[r - e - 1], i[r - e - 1] = -n
                        }
                }, FFTM.prototype.normalize13b = function(t, i) {
                    for (var r = 0, e = 0; e < i / 2; e++) {
                        var n = 8192 * Math.round(t[2 * e + 1] / i) + Math.round(t[2 * e] / i) + r;
                        t[e] = 67108863 & n, r = n < 67108864 ? 0 : n / 67108864 | 0
                    }
                    return t
                }, FFTM.prototype.convert13b = function(t, i, r, e) {
                    for (var n = 0, h = 0; h < i; h++) n += 0 | t[h], r[2 * h] = 8191 & n, n >>>= 13, r[2 * h + 1] = 8191 & n, n >>>= 13;
                    for (h = 2 * i; h < e; ++h) r[h] = 0;
                    assert(0 === n), assert((-8192 & n) == 0)
                }, FFTM.prototype.stub = function(t) {
                    for (var i = Array(t), r = 0; r < t; r++) i[r] = 0;
                    return i
                }, FFTM.prototype.mulp = function(t, i, r) {
                    var e = 2 * this.guessLen13b(t.length, i.length),
                        n = this.makeRBT(e),
                        h = this.stub(e),
                        s = Array(e),
                        o = Array(e),
                        u = Array(e),
                        a = Array(e),
                        l = Array(e),
                        m = Array(e),
                        d = r.words;
                    d.length = e, this.convert13b(t.words, t.length, s, e), this.convert13b(i.words, i.length, a, e), this.transform(s, h, o, u, e, n), this.transform(a, h, l, m, e, n);
                    for (var p = 0; p < e; p++) {
                        var c = o[p] * l[p] - u[p] * m[p];
                        u[p] = o[p] * m[p] + u[p] * l[p], o[p] = c
                    }
                    return this.conjugate(o, u, e), this.transform(o, u, d, h, e, n), this.conjugate(d, h, e), this.normalize13b(d, e), r.negative = t.negative ^ i.negative, r.length = t.length + i.length, r._strip()
                }, BN.prototype.mul = function(t) {
                    var i = new BN(null);
                    return i.words = Array(this.length + t.length), this.mulTo(t, i)
                }, BN.prototype.mulf = function(t) {
                    var i = new BN(null);
                    return i.words = Array(this.length + t.length), bigMulTo(this, t, i)
                }, BN.prototype.imul = function(t) {
                    return this.clone().mulTo(t, this)
                }, BN.prototype.imuln = function(t) {
                    var i = t < 0;
                    i && (t = -t), assert("number" == typeof t), assert(t < 67108864);
                    for (var r = 0, e = 0; e < this.length; e++) {
                        var n = (0 | this.words[e]) * t,
                            h = (67108863 & n) + (67108863 & r);
                        r >>= 26, r += (n / 67108864 | 0) + (h >>> 26), this.words[e] = 67108863 & h
                    }
                    return 0 !== r && (this.words[e] = r, this.length++), i ? this.ineg() : this
                }, BN.prototype.muln = function(t) {
                    return this.clone().imuln(t)
                }, BN.prototype.sqr = function() {
                    return this.mul(this)
                }, BN.prototype.isqr = function() {
                    return this.imul(this.clone())
                }, BN.prototype.pow = function(t) {
                    var i = function(t) {
                        for (var i = Array(t.bitLength()), r = 0; r < i.length; r++) {
                            var e = r / 26 | 0,
                                n = r % 26;
                            i[r] = t.words[e] >>> n & 1
                        }
                        return i
                    }(t);
                    if (0 === i.length) return new BN(1);
                    for (var r = this, e = 0; e < i.length && 0 === i[e]; e++, r = r.sqr());
                    if (++e < i.length)
                        for (var n = r.sqr(); e < i.length; e++, n = n.sqr()) 0 !== i[e] && (r = r.mul(n));
                    return r
                }, BN.prototype.iushln = function(t) {
                    assert("number" == typeof t && t >= 0);
                    var i, r = t % 26,
                        e = (t - r) / 26,
                        n = 67108863 >>> 26 - r << 26 - r;
                    if (0 !== r) {
                        var h = 0;
                        for (i = 0; i < this.length; i++) {
                            var s = this.words[i] & n,
                                o = (0 | this.words[i]) - s << r;
                            this.words[i] = o | h, h = s >>> 26 - r
                        }
                        h && (this.words[i] = h, this.length++)
                    }
                    if (0 !== e) {
                        for (i = this.length - 1; i >= 0; i--) this.words[i + e] = this.words[i];
                        for (i = 0; i < e; i++) this.words[i] = 0;
                        this.length += e
                    }
                    return this._strip()
                }, BN.prototype.ishln = function(t) {
                    return assert(0 === this.negative), this.iushln(t)
                }, BN.prototype.iushrn = function(t, i, r) {
                    assert("number" == typeof t && t >= 0), e = i ? (i - i % 26) / 26 : 0;
                    var e, n = t % 26,
                        h = Math.min((t - n) / 26, this.length),
                        s = 67108863 ^ 67108863 >>> n << n;
                    if (e -= h, e = Math.max(0, e), r) {
                        for (var o = 0; o < h; o++) r.words[o] = this.words[o];
                        r.length = h
                    }
                    if (0 === h);
                    else if (this.length > h)
                        for (this.length -= h, o = 0; o < this.length; o++) this.words[o] = this.words[o + h];
                    else this.words[0] = 0, this.length = 1;
                    var u = 0;
                    for (o = this.length - 1; o >= 0 && (0 !== u || o >= e); o--) {
                        var a = 0 | this.words[o];
                        this.words[o] = u << 26 - n | a >>> n, u = a & s
                    }
                    return r && 0 !== u && (r.words[r.length++] = u), 0 === this.length && (this.words[0] = 0, this.length = 1), this._strip()
                }, BN.prototype.ishrn = function(t, i, r) {
                    return assert(0 === this.negative), this.iushrn(t, i, r)
                }, BN.prototype.shln = function(t) {
                    return this.clone().ishln(t)
                }, BN.prototype.ushln = function(t) {
                    return this.clone().iushln(t)
                }, BN.prototype.shrn = function(t) {
                    return this.clone().ishrn(t)
                }, BN.prototype.ushrn = function(t) {
                    return this.clone().iushrn(t)
                }, BN.prototype.testn = function(t) {
                    assert("number" == typeof t && t >= 0);
                    var i = t % 26,
                        r = (t - i) / 26;
                    return !(this.length <= r) && !!(this.words[r] & 1 << i)
                }, BN.prototype.imaskn = function(t) {
                    assert("number" == typeof t && t >= 0);
                    var i = t % 26,
                        r = (t - i) / 26;
                    return (assert(0 === this.negative, "imaskn works only with positive numbers"), this.length <= r) ? this : (0 !== i && r++, this.length = Math.min(r, this.length), 0 !== i && (this.words[this.length - 1] &= 67108863 ^ 67108863 >>> i << i), this._strip())
                }, BN.prototype.maskn = function(t) {
                    return this.clone().imaskn(t)
                }, BN.prototype.iaddn = function(t) {
                    return (assert("number" == typeof t), assert(t < 67108864), t < 0) ? this.isubn(-t) : 0 !== this.negative ? (1 === this.length && (0 | this.words[0]) <= t ? (this.words[0] = t - (0 | this.words[0]), this.negative = 0) : (this.negative = 0, this.isubn(t), this.negative = 1), this) : this._iaddn(t)
                }, BN.prototype._iaddn = function(t) {
                    this.words[0] += t;
                    for (var i = 0; i < this.length && this.words[i] >= 67108864; i++) this.words[i] -= 67108864, i === this.length - 1 ? this.words[i + 1] = 1 : this.words[i + 1]++;
                    return this.length = Math.max(this.length, i + 1), this
                }, BN.prototype.isubn = function(t) {
                    if (assert("number" == typeof t), assert(t < 67108864), t < 0) return this.iaddn(-t);
                    if (0 !== this.negative) return this.negative = 0, this.iaddn(t), this.negative = 1, this;
                    if (this.words[0] -= t, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
                    else
                        for (var i = 0; i < this.length && this.words[i] < 0; i++) this.words[i] += 67108864, this.words[i + 1] -= 1;
                    return this._strip()
                }, BN.prototype.addn = function(t) {
                    return this.clone().iaddn(t)
                }, BN.prototype.subn = function(t) {
                    return this.clone().isubn(t)
                }, BN.prototype.iabs = function() {
                    return this.negative = 0, this
                }, BN.prototype.abs = function() {
                    return this.clone().iabs()
                }, BN.prototype._ishlnsubmul = function(t, i, r) {
                    var e, n, h = t.length + r;
                    this._expand(h);
                    var s = 0;
                    for (e = 0; e < t.length; e++) {
                        n = (0 | this.words[e + r]) + s;
                        var o = (0 | t.words[e]) * i;
                        n -= 67108863 & o, s = (n >> 26) - (o / 67108864 | 0), this.words[e + r] = 67108863 & n
                    }
                    for (; e < this.length - r; e++) s = (n = (0 | this.words[e + r]) + s) >> 26, this.words[e + r] = 67108863 & n;
                    if (0 === s) return this._strip();
                    for (assert(-1 === s), s = 0, e = 0; e < this.length; e++) s = (n = -(0 | this.words[e]) + s) >> 26, this.words[e] = 67108863 & n;
                    return this.negative = 1, this._strip()
                }, BN.prototype._wordDiv = function(t, i) {
                    var r, e = this.length - t.length,
                        n = this.clone(),
                        h = t,
                        s = 0 | h.words[h.length - 1];
                    0 != (e = 26 - this._countBits(s)) && (h = h.ushln(e), n.iushln(e), s = 0 | h.words[h.length - 1]);
                    var o = n.length - h.length;
                    if ("mod" !== i) {
                        (r = new BN(null)).length = o + 1, r.words = Array(r.length);
                        for (var u = 0; u < r.length; u++) r.words[u] = 0
                    }
                    var a = n.clone()._ishlnsubmul(h, 1, o);
                    0 === a.negative && (n = a, r && (r.words[o] = 1));
                    for (var l = o - 1; l >= 0; l--) {
                        var m = (0 | n.words[h.length + l]) * 67108864 + (0 | n.words[h.length + l - 1]);
                        for (m = Math.min(m / s | 0, 67108863), n._ishlnsubmul(h, m, l); 0 !== n.negative;) m--, n.negative = 0, n._ishlnsubmul(h, 1, l), n.isZero() || (n.negative ^= 1);
                        r && (r.words[l] = m)
                    }
                    return r && r._strip(), n._strip(), "div" !== i && 0 !== e && n.iushrn(e), {
                        div: r || null,
                        mod: n
                    }
                }, BN.prototype.divmod = function(t, i, r) {
                    var e, n, h;
                    return (assert(!t.isZero()), this.isZero()) ? {
                        div: new BN(0),
                        mod: new BN(0)
                    } : 0 !== this.negative && 0 === t.negative ? (h = this.neg().divmod(t, i), "mod" !== i && (e = h.div.neg()), "div" !== i && (n = h.mod.neg(), r && 0 !== n.negative && n.iadd(t)), {
                        div: e,
                        mod: n
                    }) : 0 === this.negative && 0 !== t.negative ? (h = this.divmod(t.neg(), i), "mod" !== i && (e = h.div.neg()), {
                        div: e,
                        mod: h.mod
                    }) : (this.negative & t.negative) != 0 ? (h = this.neg().divmod(t.neg(), i), "div" !== i && (n = h.mod.neg(), r && 0 !== n.negative && n.isub(t)), {
                        div: h.div,
                        mod: n
                    }) : t.length > this.length || 0 > this.cmp(t) ? {
                        div: new BN(0),
                        mod: this
                    } : 1 === t.length ? "div" === i ? {
                        div: this.divn(t.words[0]),
                        mod: null
                    } : "mod" === i ? {
                        div: null,
                        mod: new BN(this.modrn(t.words[0]))
                    } : {
                        div: this.divn(t.words[0]),
                        mod: new BN(this.modrn(t.words[0]))
                    } : this._wordDiv(t, i)
                }, BN.prototype.div = function(t) {
                    return this.divmod(t, "div", !1).div
                }, BN.prototype.mod = function(t) {
                    return this.divmod(t, "mod", !1).mod
                }, BN.prototype.umod = function(t) {
                    return this.divmod(t, "mod", !0).mod
                }, BN.prototype.divRound = function(t) {
                    var i = this.divmod(t);
                    if (i.mod.isZero()) return i.div;
                    var r = 0 !== i.div.negative ? i.mod.isub(t) : i.mod,
                        e = t.ushrn(1),
                        n = t.andln(1),
                        h = r.cmp(e);
                    return h < 0 || 1 === n && 0 === h ? i.div : 0 !== i.div.negative ? i.div.isubn(1) : i.div.iaddn(1)
                }, BN.prototype.modrn = function(t) {
                    var i = t < 0;
                    i && (t = -t), assert(t <= 67108863);
                    for (var r = 67108864 % t, e = 0, n = this.length - 1; n >= 0; n--) e = (r * e + (0 | this.words[n])) % t;
                    return i ? -e : e
                }, BN.prototype.modn = function(t) {
                    return this.modrn(t)
                }, BN.prototype.idivn = function(t) {
                    var i = t < 0;
                    i && (t = -t), assert(t <= 67108863);
                    for (var r = 0, e = this.length - 1; e >= 0; e--) {
                        var n = (0 | this.words[e]) + 67108864 * r;
                        this.words[e] = n / t | 0, r = n % t
                    }
                    return this._strip(), i ? this.ineg() : this
                }, BN.prototype.divn = function(t) {
                    return this.clone().idivn(t)
                }, BN.prototype.egcd = function(t) {
                    assert(0 === t.negative), assert(!t.isZero());
                    var i = this,
                        r = t.clone();
                    i = 0 !== i.negative ? i.umod(t) : i.clone();
                    for (var e = new BN(1), n = new BN(0), h = new BN(0), s = new BN(1), o = 0; i.isEven() && r.isEven();) i.iushrn(1), r.iushrn(1), ++o;
                    for (var u = r.clone(), a = i.clone(); !i.isZero();) {
                        for (var l = 0, m = 1;
                            (i.words[0] & m) == 0 && l < 26; ++l, m <<= 1);
                        if (l > 0)
                            for (i.iushrn(l); l-- > 0;)(e.isOdd() || n.isOdd()) && (e.iadd(u), n.isub(a)), e.iushrn(1), n.iushrn(1);
                        for (var d = 0, p = 1;
                            (r.words[0] & p) == 0 && d < 26; ++d, p <<= 1);
                        if (d > 0)
                            for (r.iushrn(d); d-- > 0;)(h.isOdd() || s.isOdd()) && (h.iadd(u), s.isub(a)), h.iushrn(1), s.iushrn(1);
                        i.cmp(r) >= 0 ? (i.isub(r), e.isub(h), n.isub(s)) : (r.isub(i), h.isub(e), s.isub(n))
                    }
                    return {
                        a: h,
                        b: s,
                        gcd: r.iushln(o)
                    }
                }, BN.prototype._invmp = function(t) {
                    assert(0 === t.negative), assert(!t.isZero());
                    var i, r = this,
                        e = t.clone();
                    r = 0 !== r.negative ? r.umod(t) : r.clone();
                    for (var n = new BN(1), h = new BN(0), s = e.clone(); r.cmpn(1) > 0 && e.cmpn(1) > 0;) {
                        for (var o = 0, u = 1;
                            (r.words[0] & u) == 0 && o < 26; ++o, u <<= 1);
                        if (o > 0)
                            for (r.iushrn(o); o-- > 0;) n.isOdd() && n.iadd(s), n.iushrn(1);
                        for (var a = 0, l = 1;
                            (e.words[0] & l) == 0 && a < 26; ++a, l <<= 1);
                        if (a > 0)
                            for (e.iushrn(a); a-- > 0;) h.isOdd() && h.iadd(s), h.iushrn(1);
                        r.cmp(e) >= 0 ? (r.isub(e), n.isub(h)) : (e.isub(r), h.isub(n))
                    }
                    return 0 > (i = 0 === r.cmpn(1) ? n : h).cmpn(0) && i.iadd(t), i
                }, BN.prototype.gcd = function(t) {
                    if (this.isZero()) return t.abs();
                    if (t.isZero()) return this.abs();
                    var i = this.clone(),
                        r = t.clone();
                    i.negative = 0, r.negative = 0;
                    for (var e = 0; i.isEven() && r.isEven(); e++) i.iushrn(1), r.iushrn(1);
                    for (;;) {
                        for (; i.isEven();) i.iushrn(1);
                        for (; r.isEven();) r.iushrn(1);
                        var n = i.cmp(r);
                        if (n < 0) {
                            var h = i;
                            i = r, r = h
                        } else if (0 === n || 0 === r.cmpn(1)) break;
                        i.isub(r)
                    }
                    return r.iushln(e)
                }, BN.prototype.invm = function(t) {
                    return this.egcd(t).a.umod(t)
                }, BN.prototype.isEven = function() {
                    return (1 & this.words[0]) == 0
                }, BN.prototype.isOdd = function() {
                    return (1 & this.words[0]) == 1
                }, BN.prototype.andln = function(t) {
                    return this.words[0] & t
                }, BN.prototype.bincn = function(t) {
                    assert("number" == typeof t);
                    var i = t % 26,
                        r = (t - i) / 26,
                        e = 1 << i;
                    if (this.length <= r) return this._expand(r + 1), this.words[r] |= e, this;
                    for (var n = e, h = r; 0 !== n && h < this.length; h++) {
                        var s = 0 | this.words[h];
                        s += n, n = s >>> 26, s &= 67108863, this.words[h] = s
                    }
                    return 0 !== n && (this.words[h] = n, this.length++), this
                }, BN.prototype.isZero = function() {
                    return 1 === this.length && 0 === this.words[0]
                }, BN.prototype.cmpn = function(t) {
                    var i, r = t < 0;
                    if (0 !== this.negative && !r) return -1;
                    if (0 === this.negative && r) return 1;
                    if (this._strip(), this.length > 1) i = 1;
                    else {
                        r && (t = -t), assert(t <= 67108863, "Number is too big");
                        var e = 0 | this.words[0];
                        i = e === t ? 0 : e < t ? -1 : 1
                    }
                    return 0 !== this.negative ? 0 | -i : i
                }, BN.prototype.cmp = function(t) {
                    if (0 !== this.negative && 0 === t.negative) return -1;
                    if (0 === this.negative && 0 !== t.negative) return 1;
                    var i = this.ucmp(t);
                    return 0 !== this.negative ? 0 | -i : i
                }, BN.prototype.ucmp = function(t) {
                    if (this.length > t.length) return 1;
                    if (this.length < t.length) return -1;
                    for (var i = 0, r = this.length - 1; r >= 0; r--) {
                        var e = 0 | this.words[r],
                            n = 0 | t.words[r];
                        if (e !== n) {
                            e < n ? i = -1 : e > n && (i = 1);
                            break
                        }
                    }
                    return i
                }, BN.prototype.gtn = function(t) {
                    return 1 === this.cmpn(t)
                }, BN.prototype.gt = function(t) {
                    return 1 === this.cmp(t)
                }, BN.prototype.gten = function(t) {
                    return this.cmpn(t) >= 0
                }, BN.prototype.gte = function(t) {
                    return this.cmp(t) >= 0
                }, BN.prototype.ltn = function(t) {
                    return -1 === this.cmpn(t)
                }, BN.prototype.lt = function(t) {
                    return -1 === this.cmp(t)
                }, BN.prototype.lten = function(t) {
                    return 0 >= this.cmpn(t)
                }, BN.prototype.lte = function(t) {
                    return 0 >= this.cmp(t)
                }, BN.prototype.eqn = function(t) {
                    return 0 === this.cmpn(t)
                }, BN.prototype.eq = function(t) {
                    return 0 === this.cmp(t)
                }, BN.red = function(t) {
                    return new Red(t)
                }, BN.prototype.toRed = function(t) {
                    return assert(!this.red, "Already a number in reduction context"), assert(0 === this.negative, "red works only with positives"), t.convertTo(this)._forceRed(t)
                }, BN.prototype.fromRed = function() {
                    return assert(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
                }, BN.prototype._forceRed = function(t) {
                    return this.red = t, this
                }, BN.prototype.forceRed = function(t) {
                    return assert(!this.red, "Already a number in reduction context"), this._forceRed(t)
                }, BN.prototype.redAdd = function(t) {
                    return assert(this.red, "redAdd works only with red numbers"), this.red.add(this, t)
                }, BN.prototype.redIAdd = function(t) {
                    return assert(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, t)
                }, BN.prototype.redSub = function(t) {
                    return assert(this.red, "redSub works only with red numbers"), this.red.sub(this, t)
                }, BN.prototype.redISub = function(t) {
                    return assert(this.red, "redISub works only with red numbers"), this.red.isub(this, t)
                }, BN.prototype.redShl = function(t) {
                    return assert(this.red, "redShl works only with red numbers"), this.red.shl(this, t)
                }, BN.prototype.redMul = function(t) {
                    return assert(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.mul(this, t)
                }, BN.prototype.redIMul = function(t) {
                    return assert(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.imul(this, t)
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
                }, BN.prototype.redPow = function(t) {
                    return assert(this.red && !t.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, t)
                };
                var o = {
                    k256: null,
                    p224: null,
                    p192: null,
                    p25519: null
                };

                function MPrime(t, i) {
                    this.name = t, this.p = new BN(i, 16), this.n = this.p.bitLength(), this.k = new BN(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
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

                function Red(t) {
                    if ("string" == typeof t) {
                        var i = BN._prime(t);
                        this.m = i.p, this.prime = i
                    } else assert(t.gtn(1), "modulus must be greater than 1"), this.m = t, this.prime = null
                }

                function Mont(t) {
                    Red.call(this, t), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new BN(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
                }
                MPrime.prototype._tmp = function() {
                    var t = new BN(null);
                    return t.words = Array(Math.ceil(this.n / 13)), t
                }, MPrime.prototype.ireduce = function(t) {
                    var i, r = t;
                    do this.split(r, this.tmp), i = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength(); while (i > this.n);
                    var e = i < this.n ? -1 : r.ucmp(this.p);
                    return 0 === e ? (r.words[0] = 0, r.length = 1) : e > 0 ? r.isub(this.p) : void 0 !== r.strip ? r.strip() : r._strip(), r
                }, MPrime.prototype.split = function(t, i) {
                    t.iushrn(this.n, 0, i)
                }, MPrime.prototype.imulK = function(t) {
                    return t.imul(this.k)
                }, inherits(K256, MPrime), K256.prototype.split = function(t, i) {
                    for (var r = Math.min(t.length, 9), e = 0; e < r; e++) i.words[e] = t.words[e];
                    if (i.length = r, t.length <= 9) {
                        t.words[0] = 0, t.length = 1;
                        return
                    }
                    var n = t.words[9];
                    for (e = 10, i.words[i.length++] = 4194303 & n; e < t.length; e++) {
                        var h = 0 | t.words[e];
                        t.words[e - 10] = (4194303 & h) << 4 | n >>> 22, n = h
                    }
                    n >>>= 22, t.words[e - 10] = n, 0 === n && t.length > 10 ? t.length -= 10 : t.length -= 9
                }, K256.prototype.imulK = function(t) {
                    t.words[t.length] = 0, t.words[t.length + 1] = 0, t.length += 2;
                    for (var i = 0, r = 0; r < t.length; r++) {
                        var e = 0 | t.words[r];
                        i += 977 * e, t.words[r] = 67108863 & i, i = 64 * e + (i / 67108864 | 0)
                    }
                    return 0 === t.words[t.length - 1] && (t.length--, 0 === t.words[t.length - 1] && t.length--), t
                }, inherits(P224, MPrime), inherits(P192, MPrime), inherits(P25519, MPrime), P25519.prototype.imulK = function(t) {
                    for (var i = 0, r = 0; r < t.length; r++) {
                        var e = (0 | t.words[r]) * 19 + i,
                            n = 67108863 & e;
                        e >>>= 26, t.words[r] = n, i = e
                    }
                    return 0 !== i && (t.words[t.length++] = i), t
                }, BN._prime = function(t) {
                    var i;
                    if (o[t]) return o[t];
                    if ("k256" === t) i = new K256;
                    else if ("p224" === t) i = new P224;
                    else if ("p192" === t) i = new P192;
                    else if ("p25519" === t) i = new P25519;
                    else throw Error("Unknown prime " + t);
                    return o[t] = i, i
                }, Red.prototype._verify1 = function(t) {
                    assert(0 === t.negative, "red works only with positives"), assert(t.red, "red works only with red numbers")
                }, Red.prototype._verify2 = function(t, i) {
                    assert((t.negative | i.negative) == 0, "red works only with positives"), assert(t.red && t.red === i.red, "red works only with red numbers")
                }, Red.prototype.imod = function(t) {
                    return this.prime ? this.prime.ireduce(t)._forceRed(this) : (move(t, t.umod(this.m)._forceRed(this)), t)
                }, Red.prototype.neg = function(t) {
                    return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this)
                }, Red.prototype.add = function(t, i) {
                    this._verify2(t, i);
                    var r = t.add(i);
                    return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this)
                }, Red.prototype.iadd = function(t, i) {
                    this._verify2(t, i);
                    var r = t.iadd(i);
                    return r.cmp(this.m) >= 0 && r.isub(this.m), r
                }, Red.prototype.sub = function(t, i) {
                    this._verify2(t, i);
                    var r = t.sub(i);
                    return 0 > r.cmpn(0) && r.iadd(this.m), r._forceRed(this)
                }, Red.prototype.isub = function(t, i) {
                    this._verify2(t, i);
                    var r = t.isub(i);
                    return 0 > r.cmpn(0) && r.iadd(this.m), r
                }, Red.prototype.shl = function(t, i) {
                    return this._verify1(t), this.imod(t.ushln(i))
                }, Red.prototype.imul = function(t, i) {
                    return this._verify2(t, i), this.imod(t.imul(i))
                }, Red.prototype.mul = function(t, i) {
                    return this._verify2(t, i), this.imod(t.mul(i))
                }, Red.prototype.isqr = function(t) {
                    return this.imul(t, t.clone())
                }, Red.prototype.sqr = function(t) {
                    return this.mul(t, t)
                }, Red.prototype.sqrt = function(t) {
                    if (t.isZero()) return t.clone();
                    var i = this.m.andln(3);
                    if (assert(i % 2 == 1), 3 === i) {
                        var r = this.m.add(new BN(1)).iushrn(2);
                        return this.pow(t, r)
                    }
                    for (var e = this.m.subn(1), n = 0; !e.isZero() && 0 === e.andln(1);) n++, e.iushrn(1);
                    assert(!e.isZero());
                    var h = new BN(1).toRed(this),
                        s = h.redNeg(),
                        o = this.m.subn(1).iushrn(1),
                        u = this.m.bitLength();
                    for (u = new BN(2 * u * u).toRed(this); 0 !== this.pow(u, o).cmp(s);) u.redIAdd(s);
                    for (var a = this.pow(u, e), l = this.pow(t, e.addn(1).iushrn(1)), m = this.pow(t, e), d = n; 0 !== m.cmp(h);) {
                        for (var p = m, c = 0; 0 !== p.cmp(h); c++) p = p.redSqr();
                        assert(c < d);
                        var M = this.pow(a, new BN(1).iushln(d - c - 1));
                        l = l.redMul(M), a = M.redSqr(), m = m.redMul(a), d = c
                    }
                    return l
                }, Red.prototype.invm = function(t) {
                    var i = t._invmp(this.m);
                    return 0 !== i.negative ? (i.negative = 0, this.imod(i).redNeg()) : this.imod(i)
                }, Red.prototype.pow = function(t, i) {
                    if (i.isZero()) return new BN(1).toRed(this);
                    if (0 === i.cmpn(1)) return t.clone();
                    var r = Array(16);
                    r[0] = new BN(1).toRed(this), r[1] = t;
                    for (var e = 2; e < r.length; e++) r[e] = this.mul(r[e - 1], t);
                    var n = r[0],
                        h = 0,
                        s = 0,
                        o = i.bitLength() % 26;
                    for (0 === o && (o = 26), e = i.length - 1; e >= 0; e--) {
                        for (var u = i.words[e], a = o - 1; a >= 0; a--) {
                            var l = u >> a & 1;
                            if (n !== r[0] && (n = this.sqr(n)), 0 === l && 0 === h) {
                                s = 0;
                                continue
                            }
                            h <<= 1, h |= l, (4 == ++s || 0 === e && 0 === a) && (n = this.mul(n, r[h]), s = 0, h = 0)
                        }
                        o = 26
                    }
                    return n
                }, Red.prototype.convertTo = function(t) {
                    var i = t.umod(this.m);
                    return i === t ? i.clone() : i
                }, Red.prototype.convertFrom = function(t) {
                    var i = t.clone();
                    return i.red = null, i
                }, BN.mont = function(t) {
                    return new Mont(t)
                }, inherits(Mont, Red), Mont.prototype.convertTo = function(t) {
                    return this.imod(t.ushln(this.shift))
                }, Mont.prototype.convertFrom = function(t) {
                    var i = this.imod(t.mul(this.rinv));
                    return i.red = null, i
                }, Mont.prototype.imul = function(t, i) {
                    if (t.isZero() || i.isZero()) return t.words[0] = 0, t.length = 1, t;
                    var r = t.imul(i),
                        e = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                        n = r.isub(e).iushrn(this.shift),
                        h = n;
                    return n.cmp(this.m) >= 0 ? h = n.isub(this.m) : 0 > n.cmpn(0) && (h = n.iadd(this.m)), h._forceRed(this)
                }, Mont.prototype.mul = function(t, i) {
                    if (t.isZero() || i.isZero()) return new BN(0)._forceRed(this);
                    var r = t.mul(i),
                        e = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                        n = r.isub(e).iushrn(this.shift),
                        h = n;
                    return n.cmp(this.m) >= 0 ? h = n.isub(this.m) : 0 > n.cmpn(0) && (h = n.iadd(this.m)), h._forceRed(this)
                }, Mont.prototype.invm = function(t) {
                    return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this)
                }
            }(t = r.nmd(t), this)
        },
        8793: function(t, i, r) {
            var e, n = r(9389);
            ! function() {
                "use strict";
                var h = "input is invalid type",
                    s = "object" == typeof window,
                    o = s ? window : {};
                o.JS_SHA3_NO_WINDOW && (s = !1);
                var u = !s && "object" == typeof self;
                !o.JS_SHA3_NO_NODE_JS && "object" == typeof n && n.versions && n.versions.node ? o = r.g : u && (o = self);
                var a = !o.JS_SHA3_NO_COMMON_JS && t.exports,
                    l = r.amdO,
                    m = !o.JS_SHA3_NO_ARRAY_BUFFER && "undefined" != typeof ArrayBuffer,
                    d = "0123456789abcdef".split(""),
                    p = [4, 1024, 262144, 67108864],
                    c = [0, 8, 16, 24],
                    M = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648],
                    v = [224, 256, 384, 512],
                    g = [128, 256],
                    y = ["hex", "buffer", "arrayBuffer", "array", "digest"],
                    w = {
                        128: 168,
                        256: 136
                    };
                (o.JS_SHA3_NO_NODE_JS || !Array.isArray) && (Array.isArray = function(t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                }), m && (o.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) && (ArrayBuffer.isView = function(t) {
                    return "object" == typeof t && t.buffer && t.buffer.constructor === ArrayBuffer
                });
                for (var createOutputMethod = function(t, i, r) {
                        return function(e) {
                            return new Keccak(t, i, t).update(e)[r]()
                        }
                    }, createShakeOutputMethod = function(t, i, r) {
                        return function(e, n) {
                            return new Keccak(t, i, n).update(e)[r]()
                        }
                    }, createCshakeOutputMethod = function(t, i, r) {
                        return function(i, e, n, h) {
                            return N["cshake" + t].update(i, e, n, h)[r]()
                        }
                    }, createKmacOutputMethod = function(t, i, r) {
                        return function(i, e, n, h) {
                            return N["kmac" + t].update(i, e, n, h)[r]()
                        }
                    }, createOutputMethods = function(t, i, r, e) {
                        for (var n = 0; n < y.length; ++n) {
                            var h = y[n];
                            t[h] = i(r, e, h)
                        }
                        return t
                    }, createMethod = function(t, i) {
                        var r = createOutputMethod(t, i, "hex");
                        return r.create = function() {
                            return new Keccak(t, i, t)
                        }, r.update = function(t) {
                            return r.create().update(t)
                        }, createOutputMethods(r, createOutputMethod, t, i)
                    }, B = [{
                        name: "keccak",
                        padding: [1, 256, 65536, 16777216],
                        bits: v,
                        createMethod: createMethod
                    }, {
                        name: "sha3",
                        padding: [6, 1536, 393216, 100663296],
                        bits: v,
                        createMethod: createMethod
                    }, {
                        name: "shake",
                        padding: [31, 7936, 2031616, 520093696],
                        bits: g,
                        createMethod: function(t, i) {
                            var r = createShakeOutputMethod(t, i, "hex");
                            return r.create = function(r) {
                                return new Keccak(t, i, r)
                            }, r.update = function(t, i) {
                                return r.create(i).update(t)
                            }, createOutputMethods(r, createShakeOutputMethod, t, i)
                        }
                    }, {
                        name: "cshake",
                        padding: p,
                        bits: g,
                        createMethod: function(t, i) {
                            var r = w[t],
                                e = createCshakeOutputMethod(t, i, "hex");
                            return e.create = function(e, n, h) {
                                return n || h ? new Keccak(t, i, e).bytepad([n, h], r) : N["shake" + t].create(e)
                            }, e.update = function(t, i, r, n) {
                                return e.create(i, r, n).update(t)
                            }, createOutputMethods(e, createCshakeOutputMethod, t, i)
                        }
                    }, {
                        name: "kmac",
                        padding: p,
                        bits: g,
                        createMethod: function(t, i) {
                            var r = w[t],
                                e = createKmacOutputMethod(t, i, "hex");
                            return e.create = function(e, n, h) {
                                return new Kmac(t, i, n).bytepad(["KMAC", h], r).bytepad([e], r)
                            }, e.update = function(t, i, r, n) {
                                return e.create(t, r, n).update(i)
                            }, createOutputMethods(e, createKmacOutputMethod, t, i)
                        }
                    }], N = {}, b = [], _ = 0; _ < B.length; ++_)
                    for (var k = B[_], A = k.bits, S = 0; S < A.length; ++S) {
                        var x = k.name + "_" + A[S];
                        if (b.push(x), N[x] = k.createMethod(A[S], k.padding), "sha3" !== k.name) {
                            var R = k.name + A[S];
                            b.push(R), N[R] = N[x]
                        }
                    }

                function Keccak(t, i, r) {
                    this.blocks = [], this.s = [], this.padding = i, this.outputBits = r, this.reset = !0, this.finalized = !1, this.block = 0, this.start = 0, this.blockCount = 1600 - (t << 1) >> 5, this.byteCount = this.blockCount << 2, this.outputBlocks = r >> 5, this.extraBytes = (31 & r) >> 3;
                    for (var e = 0; e < 50; ++e) this.s[e] = 0
                }

                function Kmac(t, i, r) {
                    Keccak.call(this, t, i, r)
                }
                Keccak.prototype.update = function(t) {
                    if (this.finalized) throw Error("finalize already called");
                    var i, r = typeof t;
                    if ("string" !== r) {
                        if ("object" === r) {
                            if (null === t) throw Error(h);
                            if (m && t.constructor === ArrayBuffer) t = new Uint8Array(t);
                            else if (!Array.isArray(t) && (!m || !ArrayBuffer.isView(t))) throw Error(h)
                        } else throw Error(h);
                        i = !0
                    }
                    for (var e, n, s = this.blocks, o = this.byteCount, u = t.length, a = this.blockCount, l = 0, d = this.s; l < u;) {
                        if (this.reset)
                            for (e = 1, this.reset = !1, s[0] = this.block; e < a + 1; ++e) s[e] = 0;
                        if (i)
                            for (e = this.start; l < u && e < o; ++l) s[e >> 2] |= t[l] << c[3 & e++];
                        else
                            for (e = this.start; l < u && e < o; ++l)(n = t.charCodeAt(l)) < 128 ? s[e >> 2] |= n << c[3 & e++] : (n < 2048 ? s[e >> 2] |= (192 | n >> 6) << c[3 & e++] : (n < 55296 || n >= 57344 ? s[e >> 2] |= (224 | n >> 12) << c[3 & e++] : (n = 65536 + ((1023 & n) << 10 | 1023 & t.charCodeAt(++l)), s[e >> 2] |= (240 | n >> 18) << c[3 & e++], s[e >> 2] |= (128 | n >> 12 & 63) << c[3 & e++]), s[e >> 2] |= (128 | n >> 6 & 63) << c[3 & e++]), s[e >> 2] |= (128 | 63 & n) << c[3 & e++]);
                        if (this.lastByteIndex = e, e >= o) {
                            for (this.start = e - o, this.block = s[a], e = 0; e < a; ++e) d[e] ^= s[e];
                            f(d), this.reset = !0
                        } else this.start = e
                    }
                    return this
                }, Keccak.prototype.encode = function(t, i) {
                    var r = 255 & t,
                        e = 1,
                        n = [r];
                    for (t >>= 8, r = 255 & t; r > 0;) n.unshift(r), t >>= 8, r = 255 & t, ++e;
                    return i ? n.push(e) : n.unshift(e), this.update(n), n.length
                }, Keccak.prototype.encodeString = function(t) {
                    var i, r = typeof t;
                    if ("string" !== r) {
                        if ("object" === r) {
                            if (null === t) throw Error(h);
                            if (m && t.constructor === ArrayBuffer) t = new Uint8Array(t);
                            else if (!Array.isArray(t) && (!m || !ArrayBuffer.isView(t))) throw Error(h)
                        } else throw Error(h);
                        i = !0
                    }
                    var e = 0,
                        n = t.length;
                    if (i) e = n;
                    else
                        for (var s = 0; s < t.length; ++s) {
                            var o = t.charCodeAt(s);
                            o < 128 ? e += 1 : o < 2048 ? e += 2 : o < 55296 || o >= 57344 ? e += 3 : (o = 65536 + ((1023 & o) << 10 | 1023 & t.charCodeAt(++s)), e += 4)
                        }
                    return e += this.encode(8 * e), this.update(t), e
                }, Keccak.prototype.bytepad = function(t, i) {
                    for (var r = this.encode(i), e = 0; e < t.length; ++e) r += this.encodeString(t[e]);
                    var n = i - r % i,
                        h = [];
                    return h.length = n, this.update(h), this
                }, Keccak.prototype.finalize = function() {
                    if (!this.finalized) {
                        this.finalized = !0;
                        var t = this.blocks,
                            i = this.lastByteIndex,
                            r = this.blockCount,
                            e = this.s;
                        if (t[i >> 2] |= this.padding[3 & i], this.lastByteIndex === this.byteCount)
                            for (i = 1, t[0] = t[r]; i < r + 1; ++i) t[i] = 0;
                        for (t[r - 1] |= 2147483648, i = 0; i < r; ++i) e[i] ^= t[i];
                        f(e)
                    }
                }, Keccak.prototype.toString = Keccak.prototype.hex = function() {
                    this.finalize();
                    for (var t, i = this.blockCount, r = this.s, e = this.outputBlocks, n = this.extraBytes, h = 0, s = 0, o = ""; s < e;) {
                        for (h = 0; h < i && s < e; ++h, ++s) o += d[(t = r[h]) >> 4 & 15] + d[15 & t] + d[t >> 12 & 15] + d[t >> 8 & 15] + d[t >> 20 & 15] + d[t >> 16 & 15] + d[t >> 28 & 15] + d[t >> 24 & 15];
                        s % i == 0 && (f(r), h = 0)
                    }
                    return n && (o += d[(t = r[h]) >> 4 & 15] + d[15 & t], n > 1 && (o += d[t >> 12 & 15] + d[t >> 8 & 15]), n > 2 && (o += d[t >> 20 & 15] + d[t >> 16 & 15])), o
                }, Keccak.prototype.arrayBuffer = function() {
                    this.finalize();
                    var t, i = this.blockCount,
                        r = this.s,
                        e = this.outputBlocks,
                        n = this.extraBytes,
                        h = 0,
                        s = 0,
                        o = this.outputBits >> 3;
                    t = new ArrayBuffer(n ? e + 1 << 2 : o);
                    for (var u = new Uint32Array(t); s < e;) {
                        for (h = 0; h < i && s < e; ++h, ++s) u[s] = r[h];
                        s % i == 0 && f(r)
                    }
                    return n && (u[h] = r[h], t = t.slice(0, o)), t
                }, Keccak.prototype.buffer = Keccak.prototype.arrayBuffer, Keccak.prototype.digest = Keccak.prototype.array = function() {
                    this.finalize();
                    for (var t, i, r = this.blockCount, e = this.s, n = this.outputBlocks, h = this.extraBytes, s = 0, o = 0, u = []; o < n;) {
                        for (s = 0; s < r && o < n; ++s, ++o) t = o << 2, i = e[s], u[t] = 255 & i, u[t + 1] = i >> 8 & 255, u[t + 2] = i >> 16 & 255, u[t + 3] = i >> 24 & 255;
                        o % r == 0 && f(e)
                    }
                    return h && (t = o << 2, i = e[s], u[t] = 255 & i, h > 1 && (u[t + 1] = i >> 8 & 255), h > 2 && (u[t + 2] = i >> 16 & 255)), u
                }, Kmac.prototype = new Keccak, Kmac.prototype.finalize = function() {
                    return this.encode(this.outputBits, !0), Keccak.prototype.finalize.call(this)
                };
                var f = function(t) {
                    var i, r, e, n, h, s, o, u, a, l, m, d, p, c, v, g, y, w, B, N, b, _, k, A, S, x, R, K, O, T, F, E, P, C, q, Z, z, I, L, j, H, J, U, D, V, W, Y, G, Q, X, $, tt, ti, tr, te, tn, th, ts, to, tu, ta, tl, tf;
                    for (e = 0; e < 48; e += 2) n = t[0] ^ t[10] ^ t[20] ^ t[30] ^ t[40], h = t[1] ^ t[11] ^ t[21] ^ t[31] ^ t[41], s = t[2] ^ t[12] ^ t[22] ^ t[32] ^ t[42], o = t[3] ^ t[13] ^ t[23] ^ t[33] ^ t[43], u = t[4] ^ t[14] ^ t[24] ^ t[34] ^ t[44], a = t[5] ^ t[15] ^ t[25] ^ t[35] ^ t[45], l = t[6] ^ t[16] ^ t[26] ^ t[36] ^ t[46], m = t[7] ^ t[17] ^ t[27] ^ t[37] ^ t[47], d = t[8] ^ t[18] ^ t[28] ^ t[38] ^ t[48], p = t[9] ^ t[19] ^ t[29] ^ t[39] ^ t[49], i = d ^ (s << 1 | o >>> 31), r = p ^ (o << 1 | s >>> 31), t[0] ^= i, t[1] ^= r, t[10] ^= i, t[11] ^= r, t[20] ^= i, t[21] ^= r, t[30] ^= i, t[31] ^= r, t[40] ^= i, t[41] ^= r, i = n ^ (u << 1 | a >>> 31), r = h ^ (a << 1 | u >>> 31), t[2] ^= i, t[3] ^= r, t[12] ^= i, t[13] ^= r, t[22] ^= i, t[23] ^= r, t[32] ^= i, t[33] ^= r, t[42] ^= i, t[43] ^= r, i = s ^ (l << 1 | m >>> 31), r = o ^ (m << 1 | l >>> 31), t[4] ^= i, t[5] ^= r, t[14] ^= i, t[15] ^= r, t[24] ^= i, t[25] ^= r, t[34] ^= i, t[35] ^= r, t[44] ^= i, t[45] ^= r, i = u ^ (d << 1 | p >>> 31), r = a ^ (p << 1 | d >>> 31), t[6] ^= i, t[7] ^= r, t[16] ^= i, t[17] ^= r, t[26] ^= i, t[27] ^= r, t[36] ^= i, t[37] ^= r, t[46] ^= i, t[47] ^= r, i = l ^ (n << 1 | h >>> 31), r = m ^ (h << 1 | n >>> 31), t[8] ^= i, t[9] ^= r, t[18] ^= i, t[19] ^= r, t[28] ^= i, t[29] ^= r, t[38] ^= i, t[39] ^= r, t[48] ^= i, t[49] ^= r, c = t[0], v = t[1], W = t[11] << 4 | t[10] >>> 28, Y = t[10] << 4 | t[11] >>> 28, K = t[20] << 3 | t[21] >>> 29, O = t[21] << 3 | t[20] >>> 29, tu = t[31] << 9 | t[30] >>> 23, ta = t[30] << 9 | t[31] >>> 23, J = t[40] << 18 | t[41] >>> 14, U = t[41] << 18 | t[40] >>> 14, C = t[2] << 1 | t[3] >>> 31, q = t[3] << 1 | t[2] >>> 31, g = t[13] << 12 | t[12] >>> 20, y = t[12] << 12 | t[13] >>> 20, G = t[22] << 10 | t[23] >>> 22, Q = t[23] << 10 | t[22] >>> 22, T = t[33] << 13 | t[32] >>> 19, F = t[32] << 13 | t[33] >>> 19, tl = t[42] << 2 | t[43] >>> 30, tf = t[43] << 2 | t[42] >>> 30, tr = t[5] << 30 | t[4] >>> 2, te = t[4] << 30 | t[5] >>> 2, Z = t[14] << 6 | t[15] >>> 26, z = t[15] << 6 | t[14] >>> 26, w = t[25] << 11 | t[24] >>> 21, B = t[24] << 11 | t[25] >>> 21, X = t[34] << 15 | t[35] >>> 17, $ = t[35] << 15 | t[34] >>> 17, E = t[45] << 29 | t[44] >>> 3, P = t[44] << 29 | t[45] >>> 3, A = t[6] << 28 | t[7] >>> 4, S = t[7] << 28 | t[6] >>> 4, tn = t[17] << 23 | t[16] >>> 9, th = t[16] << 23 | t[17] >>> 9, I = t[26] << 25 | t[27] >>> 7, L = t[27] << 25 | t[26] >>> 7, N = t[36] << 21 | t[37] >>> 11, b = t[37] << 21 | t[36] >>> 11, tt = t[47] << 24 | t[46] >>> 8, ti = t[46] << 24 | t[47] >>> 8, D = t[8] << 27 | t[9] >>> 5, V = t[9] << 27 | t[8] >>> 5, x = t[18] << 20 | t[19] >>> 12, R = t[19] << 20 | t[18] >>> 12, ts = t[29] << 7 | t[28] >>> 25, to = t[28] << 7 | t[29] >>> 25, j = t[38] << 8 | t[39] >>> 24, H = t[39] << 8 | t[38] >>> 24, _ = t[48] << 14 | t[49] >>> 18, k = t[49] << 14 | t[48] >>> 18, t[0] = c ^ ~g & w, t[1] = v ^ ~y & B, t[10] = A ^ ~x & K, t[11] = S ^ ~R & O, t[20] = C ^ ~Z & I, t[21] = q ^ ~z & L, t[30] = D ^ ~W & G, t[31] = V ^ ~Y & Q, t[40] = tr ^ ~tn & ts, t[41] = te ^ ~th & to, t[2] = g ^ ~w & N, t[3] = y ^ ~B & b, t[12] = x ^ ~K & T, t[13] = R ^ ~O & F, t[22] = Z ^ ~I & j, t[23] = z ^ ~L & H, t[32] = W ^ ~G & X, t[33] = Y ^ ~Q & $, t[42] = tn ^ ~ts & tu, t[43] = th ^ ~to & ta, t[4] = w ^ ~N & _, t[5] = B ^ ~b & k, t[14] = K ^ ~T & E, t[15] = O ^ ~F & P, t[24] = I ^ ~j & J, t[25] = L ^ ~H & U, t[34] = G ^ ~X & tt, t[35] = Q ^ ~$ & ti, t[44] = ts ^ ~tu & tl, t[45] = to ^ ~ta & tf, t[6] = N ^ ~_ & c, t[7] = b ^ ~k & v, t[16] = T ^ ~E & A, t[17] = F ^ ~P & S, t[26] = j ^ ~J & C, t[27] = H ^ ~U & q, t[36] = X ^ ~tt & D, t[37] = $ ^ ~ti & V, t[46] = tu ^ ~tl & tr, t[47] = ta ^ ~tf & te, t[8] = _ ^ ~c & g, t[9] = k ^ ~v & y, t[18] = E ^ ~A & x, t[19] = P ^ ~S & R, t[28] = J ^ ~C & Z, t[29] = U ^ ~q & z, t[38] = tt ^ ~D & W, t[39] = ti ^ ~V & Y, t[48] = tl ^ ~tr & tn, t[49] = tf ^ ~te & th, t[0] ^= M[e], t[1] ^= M[e + 1]
                };
                if (a) t.exports = N;
                else {
                    for (_ = 0; _ < b.length; ++_) o[b[_]] = N[b[_]];
                    l && void 0 !== (e = (function() {
                        return N
                    }).call(i, r, i, t)) && (t.exports = e)
                }
            }()
        }
    }
]);