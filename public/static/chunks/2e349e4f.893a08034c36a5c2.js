"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6349], {
        20924: function(e, t, r) {
            let n, i;
            r.d(t, {
                YW: function() {
                    return Transaction
                },
                ew: function() {
                    return Connection
                },
                go: function() {
                    return sendAndConfirmRawTransaction
                },
                j5: function() {
                    return tb
                },
                nh: function() {
                    return PublicKey
                }
            });
            var s, o = r(13846),
                a = r(77074),
                c = r(52635),
                l = r(43907),
                u = r.n(l),
                d = r(28592),
                h = r.n(d),
                g = r(70697),
                p = r(90323),
                m = r(16158),
                f = r(46942),
                b = r(40692),
                y = r(13769),
                S = r(15375),
                k = r.n(S),
                w = r(65155),
                _ = r(79782),
                I = r(72169);
            c.P6.sha512Sync = (...e) => (0, a.o)(c.P6.concatBytes(...e)), c.P6.randomPrivateKey;
            let generateKeypair = () => {
                    let e = c.P6.randomPrivateKey(),
                        t = A(e),
                        r = new Uint8Array(64);
                    return r.set(e), r.set(t, 32), {
                        publicKey: t,
                        secretKey: r
                    }
                },
                A = c.Z_.getPublicKey;

            function isOnCurve(e) {
                try {
                    return c.E9.fromHex(e, !0), !0
                } catch {
                    return !1
                }
            }
            let sign = (e, t) => c.Z_.sign(e, t.slice(0, 32)),
                R = c.Z_.verify,
                toBuffer = e => o.lW.isBuffer(e) ? e : e instanceof Uint8Array ? o.lW.from(e.buffer, e.byteOffset, e.byteLength) : o.lW.from(e);
            let Struct = class Struct {
                constructor(e) {
                    Object.assign(this, e)
                }
                encode() {
                    return o.lW.from((0, p.serialize)(x, this))
                }
                static decode(e) {
                    return (0, p.deserialize)(x, this, e)
                }
                static decodeUnchecked(e) {
                    return (0, p.deserializeUnchecked)(x, this, e)
                }
            };
            let x = new Map,
                P = 1;
            n = Symbol.toStringTag;
            let PublicKey = class PublicKey extends Struct {
                constructor(e) {
                    if (super({}), this._bn = void 0, void 0 !== e._bn) this._bn = e._bn;
                    else {
                        if ("string" == typeof e) {
                            let t = h().decode(e);
                            if (32 != t.length) throw Error("Invalid public key input");
                            this._bn = new(u())(t)
                        } else this._bn = new(u())(e);
                        if (this._bn.byteLength() > 32) throw Error("Invalid public key input")
                    }
                }
                static unique() {
                    let e = new PublicKey(P);
                    return P += 1, new PublicKey(e.toBuffer())
                }
                equals(e) {
                    return this._bn.eq(e._bn)
                }
                toBase58() {
                    return h().encode(this.toBytes())
                }
                toJSON() {
                    return this.toBase58()
                }
                toBytes() {
                    return this.toBuffer()
                }
                toBuffer() {
                    let e = this._bn.toArrayLike(o.lW);
                    if (32 === e.length) return e;
                    let t = o.lW.alloc(32);
                    return e.copy(t, 32 - e.length), t
                }
                get[n]() {
                    return `PublicKey(${this.toString()})`
                }
                toString() {
                    return this.toBase58()
                }
                static async createWithSeed(e, t, r) {
                    let n = o.lW.concat([e.toBuffer(), o.lW.from(t), r.toBuffer()]),
                        i = (0, g.J)(n);
                    return new PublicKey(i)
                }
                static createProgramAddressSync(e, t) {
                    let r = o.lW.alloc(0);
                    e.forEach(function(e) {
                        if (e.length > 32) throw TypeError("Max seed length exceeded");
                        r = o.lW.concat([r, toBuffer(e)])
                    }), r = o.lW.concat([r, t.toBuffer(), o.lW.from("ProgramDerivedAddress")]);
                    let n = (0, g.J)(r);
                    if (isOnCurve(n)) throw Error("Invalid seeds, address must fall off the curve");
                    return new PublicKey(n)
                }
                static async createProgramAddress(e, t) {
                    return this.createProgramAddressSync(e, t)
                }
                static findProgramAddressSync(e, t) {
                    let r, n = 255;
                    for (; 0 != n;) {
                        try {
                            let i = e.concat(o.lW.from([n]));
                            r = this.createProgramAddressSync(i, t)
                        } catch (e) {
                            if (e instanceof TypeError) throw e;
                            n--;
                            continue
                        }
                        return [r, n]
                    }
                    throw Error("Unable to find a viable program address nonce")
                }
                static async findProgramAddress(e, t) {
                    return this.findProgramAddressSync(e, t)
                }
                static isOnCurve(e) {
                    let t = new PublicKey(e);
                    return isOnCurve(t.toBytes())
                }
            };
            PublicKey.default = new PublicKey("11111111111111111111111111111111"), x.set(PublicKey, {
                kind: "struct",
                fields: [
                    ["_bn", "u256"]
                ]
            }), new PublicKey("BPFLoader1111111111111111111111111111111111");
            let TransactionExpiredBlockheightExceededError = class TransactionExpiredBlockheightExceededError extends Error {
                constructor(e) {
                    super(`Signature ${e} has expired: block height exceeded.`), this.signature = void 0, this.signature = e
                }
            };
            Object.defineProperty(TransactionExpiredBlockheightExceededError.prototype, "name", {
                value: "TransactionExpiredBlockheightExceededError"
            });
            let TransactionExpiredTimeoutError = class TransactionExpiredTimeoutError extends Error {
                constructor(e, t) {
                    super(`Transaction was not confirmed in ${t.toFixed(2)} seconds. It is unknown if it succeeded or failed. Check signature ${e} using the Solana Explorer or CLI tools.`), this.signature = void 0, this.signature = e
                }
            };
            Object.defineProperty(TransactionExpiredTimeoutError.prototype, "name", {
                value: "TransactionExpiredTimeoutError"
            });
            let TransactionExpiredNonceInvalidError = class TransactionExpiredNonceInvalidError extends Error {
                constructor(e) {
                    super(`Signature ${e} has expired: the nonce is no longer valid.`), this.signature = void 0, this.signature = e
                }
            };
            Object.defineProperty(TransactionExpiredNonceInvalidError.prototype, "name", {
                value: "TransactionExpiredNonceInvalidError"
            });
            let MessageAccountKeys = class MessageAccountKeys {
                constructor(e, t) {
                    this.staticAccountKeys = void 0, this.accountKeysFromLookups = void 0, this.staticAccountKeys = e, this.accountKeysFromLookups = t
                }
                keySegments() {
                    let e = [this.staticAccountKeys];
                    return this.accountKeysFromLookups && (e.push(this.accountKeysFromLookups.writable), e.push(this.accountKeysFromLookups.readonly)), e
                }
                get(e) {
                    for (let t of this.keySegments()) {
                        if (e < t.length) return t[e];
                        e -= t.length
                    }
                }
                get length() {
                    return this.keySegments().flat().length
                }
                compileInstructions(e) {
                    if (this.length > 256) throw Error("Account index overflow encountered during compilation");
                    let t = new Map;
                    this.keySegments().flat().forEach((e, r) => {
                        t.set(e.toBase58(), r)
                    });
                    let findKeyIndex = e => {
                        let r = t.get(e.toBase58());
                        if (void 0 === r) throw Error("Encountered an unknown instruction account key during compilation");
                        return r
                    };
                    return e.map(e => ({
                        programIdIndex: findKeyIndex(e.programId),
                        accountKeyIndexes: e.keys.map(e => findKeyIndex(e.pubkey)),
                        data: e.data
                    }))
                }
            };
            let publicKey = (e = "publicKey") => m.Ik(32, e),
                rustString = (e = "string") => {
                    let t = m.n_([m.Jq("length"), m.Jq("lengthPadding"), m.Ik(m.cv(m.Jq(), -8), "chars")], e),
                        r = t.decode.bind(t),
                        n = t.encode.bind(t);
                    return t.decode = (e, t) => {
                        let n = r(e, t);
                        return n.chars.toString()
                    }, t.encode = (e, t, r) => {
                        let i = {
                            chars: o.lW.from(e, "utf8")
                        };
                        return n(i, t, r)
                    }, t.alloc = e => m.Jq().span + m.Jq().span + o.lW.from(e, "utf8").length, t
                };

            function decodeLength(e) {
                let t = 0,
                    r = 0;
                for (;;) {
                    let n = e.shift();
                    if (t |= (127 & n) << 7 * r, r += 1, (128 & n) == 0) break
                }
                return t
            }

            function encodeLength(e, t) {
                let r = t;
                for (;;) {
                    let t = 127 & r;
                    if (0 == (r >>= 7)) {
                        e.push(t);
                        break
                    }
                    t |= 128, e.push(t)
                }
            }

            function assert(e, t) {
                if (!e) throw Error(t || "Assertion failed")
            }
            let CompiledKeys = class CompiledKeys {
                constructor(e, t) {
                    this.payer = void 0, this.keyMetaMap = void 0, this.payer = e, this.keyMetaMap = t
                }
                static compile(e, t) {
                    let r = new Map,
                        getOrInsertDefault = e => {
                            let t = e.toBase58(),
                                n = r.get(t);
                            return void 0 === n && (n = {
                                isSigner: !1,
                                isWritable: !1,
                                isInvoked: !1
                            }, r.set(t, n)), n
                        },
                        n = getOrInsertDefault(t);
                    for (let t of (n.isSigner = !0, n.isWritable = !0, e))
                        for (let e of (getOrInsertDefault(t.programId).isInvoked = !0, t.keys)) {
                            let t = getOrInsertDefault(e.pubkey);
                            t.isSigner || (t.isSigner = e.isSigner), t.isWritable || (t.isWritable = e.isWritable)
                        }
                    return new CompiledKeys(t, r)
                }
                getMessageComponents() {
                    let e = [...this.keyMetaMap.entries()];
                    assert(e.length <= 256, "Max static account keys length exceeded");
                    let t = e.filter(([, e]) => e.isSigner && e.isWritable),
                        r = e.filter(([, e]) => e.isSigner && !e.isWritable),
                        n = e.filter(([, e]) => !e.isSigner && e.isWritable),
                        i = e.filter(([, e]) => !e.isSigner && !e.isWritable),
                        s = {
                            numRequiredSignatures: t.length + r.length,
                            numReadonlySignedAccounts: r.length,
                            numReadonlyUnsignedAccounts: i.length
                        }; {
                        assert(t.length > 0, "Expected at least one writable signer key");
                        let [e] = t[0];
                        assert(e === this.payer.toBase58(), "Expected first writable signer key to be the fee payer")
                    }
                    let o = [...t.map(([e]) => new PublicKey(e)), ...r.map(([e]) => new PublicKey(e)), ...n.map(([e]) => new PublicKey(e)), ...i.map(([e]) => new PublicKey(e))];
                    return [s, o]
                }
                extractTableLookup(e) {
                    let [t, r] = this.drainKeysFoundInLookupTable(e.state.addresses, e => !e.isSigner && !e.isInvoked && e.isWritable), [n, i] = this.drainKeysFoundInLookupTable(e.state.addresses, e => !e.isSigner && !e.isInvoked && !e.isWritable);
                    if (0 !== t.length || 0 !== n.length) return [{
                        accountKey: e.key,
                        writableIndexes: t,
                        readonlyIndexes: n
                    }, {
                        writable: r,
                        readonly: i
                    }]
                }
                drainKeysFoundInLookupTable(e, t) {
                    let r = [],
                        n = [];
                    for (let [i, s] of this.keyMetaMap.entries())
                        if (t(s)) {
                            let t = new PublicKey(i),
                                s = e.findIndex(e => e.equals(t));
                            s >= 0 && (assert(s < 256, "Max lookup table index exceeded"), r.push(s), n.push(t), this.keyMetaMap.delete(i))
                        }
                    return [r, n]
                }
            };
            let Message = class Message {
                constructor(e) {
                    this.header = void 0, this.accountKeys = void 0, this.recentBlockhash = void 0, this.instructions = void 0, this.indexToProgramIds = new Map, this.header = e.header, this.accountKeys = e.accountKeys.map(e => new PublicKey(e)), this.recentBlockhash = e.recentBlockhash, this.instructions = e.instructions, this.instructions.forEach(e => this.indexToProgramIds.set(e.programIdIndex, this.accountKeys[e.programIdIndex]))
                }
                get version() {
                    return "legacy"
                }
                get staticAccountKeys() {
                    return this.accountKeys
                }
                get compiledInstructions() {
                    return this.instructions.map(e => ({
                        programIdIndex: e.programIdIndex,
                        accountKeyIndexes: e.accounts,
                        data: h().decode(e.data)
                    }))
                }
                get addressTableLookups() {
                    return []
                }
                getAccountKeys() {
                    return new MessageAccountKeys(this.staticAccountKeys)
                }
                static compile(e) {
                    let t = CompiledKeys.compile(e.instructions, e.payerKey),
                        [r, n] = t.getMessageComponents(),
                        i = new MessageAccountKeys(n),
                        s = i.compileInstructions(e.instructions).map(e => ({
                            programIdIndex: e.programIdIndex,
                            accounts: e.accountKeyIndexes,
                            data: h().encode(e.data)
                        }));
                    return new Message({
                        header: r,
                        accountKeys: n,
                        recentBlockhash: e.recentBlockhash,
                        instructions: s
                    })
                }
                isAccountSigner(e) {
                    return e < this.header.numRequiredSignatures
                }
                isAccountWritable(e) {
                    let t = this.header.numRequiredSignatures;
                    if (e >= this.header.numRequiredSignatures) {
                        let r = this.accountKeys.length - t,
                            n = r - this.header.numReadonlyUnsignedAccounts;
                        return e - t < n
                    } {
                        let r = t - this.header.numReadonlySignedAccounts;
                        return e < r
                    }
                }
                isProgramId(e) {
                    return this.indexToProgramIds.has(e)
                }
                programIds() {
                    return [...this.indexToProgramIds.values()]
                }
                nonProgramIds() {
                    return this.accountKeys.filter((e, t) => !this.isProgramId(t))
                }
                serialize() {
                    let e = this.accountKeys.length,
                        t = [];
                    encodeLength(t, e);
                    let r = this.instructions.map(e => {
                            let {
                                accounts: t,
                                programIdIndex: r
                            } = e, n = Array.from(h().decode(e.data)), i = [];
                            encodeLength(i, t.length);
                            let s = [];
                            return encodeLength(s, n.length), {
                                programIdIndex: r,
                                keyIndicesCount: o.lW.from(i),
                                keyIndices: t,
                                dataLength: o.lW.from(s),
                                data: n
                            }
                        }),
                        n = [];
                    encodeLength(n, r.length);
                    let i = o.lW.alloc(1232);
                    o.lW.from(n).copy(i);
                    let s = n.length;
                    r.forEach(e => {
                        let t = m.n_([m.u8("programIdIndex"), m.Ik(e.keyIndicesCount.length, "keyIndicesCount"), m.A9(m.u8("keyIndex"), e.keyIndices.length, "keyIndices"), m.Ik(e.dataLength.length, "dataLength"), m.A9(m.u8("userdatum"), e.data.length, "data")]),
                            r = t.encode(e, i, s);
                        s += r
                    }), i = i.slice(0, s);
                    let a = m.n_([m.Ik(1, "numRequiredSignatures"), m.Ik(1, "numReadonlySignedAccounts"), m.Ik(1, "numReadonlyUnsignedAccounts"), m.Ik(t.length, "keyCount"), m.A9(publicKey("key"), e, "keys"), publicKey("recentBlockhash")]),
                        c = {
                            numRequiredSignatures: o.lW.from([this.header.numRequiredSignatures]),
                            numReadonlySignedAccounts: o.lW.from([this.header.numReadonlySignedAccounts]),
                            numReadonlyUnsignedAccounts: o.lW.from([this.header.numReadonlyUnsignedAccounts]),
                            keyCount: o.lW.from(t),
                            keys: this.accountKeys.map(e => toBuffer(e.toBytes())),
                            recentBlockhash: h().decode(this.recentBlockhash)
                        },
                        l = o.lW.alloc(2048),
                        u = a.encode(c, l);
                    return i.copy(l, u), l.slice(0, u + i.length)
                }
                static from(e) {
                    let t = [...e],
                        r = t.shift();
                    if (r !== (127 & r)) throw Error("Versioned messages must be deserialized with VersionedMessage.deserialize()");
                    let n = t.shift(),
                        i = t.shift(),
                        s = decodeLength(t),
                        a = [];
                    for (let e = 0; e < s; e++) {
                        let e = t.slice(0, 32);
                        t = t.slice(32), a.push(new PublicKey(o.lW.from(e)))
                    }
                    let c = t.slice(0, 32);
                    t = t.slice(32);
                    let l = decodeLength(t),
                        u = [];
                    for (let e = 0; e < l; e++) {
                        let e = t.shift(),
                            r = decodeLength(t),
                            n = t.slice(0, r);
                        t = t.slice(r);
                        let i = decodeLength(t),
                            s = t.slice(0, i),
                            a = h().encode(o.lW.from(s));
                        t = t.slice(i), u.push({
                            programIdIndex: e,
                            accounts: n,
                            data: a
                        })
                    }
                    let d = {
                        header: {
                            numRequiredSignatures: r,
                            numReadonlySignedAccounts: n,
                            numReadonlyUnsignedAccounts: i
                        },
                        recentBlockhash: h().encode(o.lW.from(c)),
                        accountKeys: a,
                        instructions: u
                    };
                    return new Message(d)
                }
            };
            let MessageV0 = class MessageV0 {
                constructor(e) {
                    this.header = void 0, this.staticAccountKeys = void 0, this.recentBlockhash = void 0, this.compiledInstructions = void 0, this.addressTableLookups = void 0, this.header = e.header, this.staticAccountKeys = e.staticAccountKeys, this.recentBlockhash = e.recentBlockhash, this.compiledInstructions = e.compiledInstructions, this.addressTableLookups = e.addressTableLookups
                }
                get version() {
                    return 0
                }
                get numAccountKeysFromLookups() {
                    let e = 0;
                    for (let t of this.addressTableLookups) e += t.readonlyIndexes.length + t.writableIndexes.length;
                    return e
                }
                getAccountKeys(e) {
                    let t;
                    if (e && "accountKeysFromLookups" in e && e.accountKeysFromLookups) {
                        if (this.numAccountKeysFromLookups != e.accountKeysFromLookups.writable.length + e.accountKeysFromLookups.readonly.length) throw Error("Failed to get account keys because of a mismatch in the number of account keys from lookups");
                        t = e.accountKeysFromLookups
                    } else if (e && "addressLookupTableAccounts" in e && e.addressLookupTableAccounts) t = this.resolveAddressTableLookups(e.addressLookupTableAccounts);
                    else if (this.addressTableLookups.length > 0) throw Error("Failed to get account keys because address table lookups were not resolved");
                    return new MessageAccountKeys(this.staticAccountKeys, t)
                }
                isAccountSigner(e) {
                    return e < this.header.numRequiredSignatures
                }
                isAccountWritable(e) {
                    let t = this.header.numRequiredSignatures,
                        r = this.staticAccountKeys.length;
                    if (e >= r) {
                        let t = this.addressTableLookups.reduce((e, t) => e + t.writableIndexes.length, 0);
                        return e - r < t
                    }
                    if (e >= this.header.numRequiredSignatures) {
                        let n = r - t - this.header.numReadonlyUnsignedAccounts;
                        return e - t < n
                    } {
                        let r = t - this.header.numReadonlySignedAccounts;
                        return e < r
                    }
                }
                resolveAddressTableLookups(e) {
                    let t = {
                        writable: [],
                        readonly: []
                    };
                    for (let r of this.addressTableLookups) {
                        let n = e.find(e => e.key.equals(r.accountKey));
                        if (!n) throw Error(`Failed to find address lookup table account for table key ${r.accountKey.toBase58()}`);
                        for (let e of r.writableIndexes)
                            if (e < n.state.addresses.length) t.writable.push(n.state.addresses[e]);
                            else throw Error(`Failed to find address for index ${e} in address lookup table ${r.accountKey.toBase58()}`);
                        for (let e of r.readonlyIndexes)
                            if (e < n.state.addresses.length) t.readonly.push(n.state.addresses[e]);
                            else throw Error(`Failed to find address for index ${e} in address lookup table ${r.accountKey.toBase58()}`)
                    }
                    return t
                }
                static compile(e) {
                    let t = CompiledKeys.compile(e.instructions, e.payerKey),
                        r = [],
                        n = {
                            writable: [],
                            readonly: []
                        },
                        i = e.addressLookupTableAccounts || [];
                    for (let e of i) {
                        let i = t.extractTableLookup(e);
                        if (void 0 !== i) {
                            let [e, {
                                writable: t,
                                readonly: s
                            }] = i;
                            r.push(e), n.writable.push(...t), n.readonly.push(...s)
                        }
                    }
                    let [s, o] = t.getMessageComponents(), a = new MessageAccountKeys(o, n), c = a.compileInstructions(e.instructions);
                    return new MessageV0({
                        header: s,
                        staticAccountKeys: o,
                        recentBlockhash: e.recentBlockhash,
                        compiledInstructions: c,
                        addressTableLookups: r
                    })
                }
                serialize() {
                    let e = [];
                    encodeLength(e, this.staticAccountKeys.length);
                    let t = this.serializeInstructions(),
                        r = [];
                    encodeLength(r, this.compiledInstructions.length);
                    let n = this.serializeAddressTableLookups(),
                        i = [];
                    encodeLength(i, this.addressTableLookups.length);
                    let s = m.n_([m.u8("prefix"), m.n_([m.u8("numRequiredSignatures"), m.u8("numReadonlySignedAccounts"), m.u8("numReadonlyUnsignedAccounts")], "header"), m.Ik(e.length, "staticAccountKeysLength"), m.A9(publicKey(), this.staticAccountKeys.length, "staticAccountKeys"), publicKey("recentBlockhash"), m.Ik(r.length, "instructionsLength"), m.Ik(t.length, "serializedInstructions"), m.Ik(i.length, "addressTableLookupsLength"), m.Ik(n.length, "serializedAddressTableLookups")]),
                        o = new Uint8Array(1232),
                        a = s.encode({
                            prefix: 128,
                            header: this.header,
                            staticAccountKeysLength: new Uint8Array(e),
                            staticAccountKeys: this.staticAccountKeys.map(e => e.toBytes()),
                            recentBlockhash: h().decode(this.recentBlockhash),
                            instructionsLength: new Uint8Array(r),
                            serializedInstructions: t,
                            addressTableLookupsLength: new Uint8Array(i),
                            serializedAddressTableLookups: n
                        }, o);
                    return o.slice(0, a)
                }
                serializeInstructions() {
                    let e = 0,
                        t = new Uint8Array(1232);
                    for (let r of this.compiledInstructions) {
                        let n = [];
                        encodeLength(n, r.accountKeyIndexes.length);
                        let i = [];
                        encodeLength(i, r.data.length);
                        let s = m.n_([m.u8("programIdIndex"), m.Ik(n.length, "encodedAccountKeyIndexesLength"), m.A9(m.u8(), r.accountKeyIndexes.length, "accountKeyIndexes"), m.Ik(i.length, "encodedDataLength"), m.Ik(r.data.length, "data")]);
                        e += s.encode({
                            programIdIndex: r.programIdIndex,
                            encodedAccountKeyIndexesLength: new Uint8Array(n),
                            accountKeyIndexes: r.accountKeyIndexes,
                            encodedDataLength: new Uint8Array(i),
                            data: r.data
                        }, t, e)
                    }
                    return t.slice(0, e)
                }
                serializeAddressTableLookups() {
                    let e = 0,
                        t = new Uint8Array(1232);
                    for (let r of this.addressTableLookups) {
                        let n = [];
                        encodeLength(n, r.writableIndexes.length);
                        let i = [];
                        encodeLength(i, r.readonlyIndexes.length);
                        let s = m.n_([publicKey("accountKey"), m.Ik(n.length, "encodedWritableIndexesLength"), m.A9(m.u8(), r.writableIndexes.length, "writableIndexes"), m.Ik(i.length, "encodedReadonlyIndexesLength"), m.A9(m.u8(), r.readonlyIndexes.length, "readonlyIndexes")]);
                        e += s.encode({
                            accountKey: r.accountKey.toBytes(),
                            encodedWritableIndexesLength: new Uint8Array(n),
                            writableIndexes: r.writableIndexes,
                            encodedReadonlyIndexesLength: new Uint8Array(i),
                            readonlyIndexes: r.readonlyIndexes
                        }, t, e)
                    }
                    return t.slice(0, e)
                }
                static deserialize(e) {
                    let t = [...e],
                        r = t.shift(),
                        n = 127 & r;
                    assert(r !== n, "Expected versioned message but received legacy message"), assert(0 === n, `Expected versioned message with version 0 but found version ${n}`);
                    let i = {
                            numRequiredSignatures: t.shift(),
                            numReadonlySignedAccounts: t.shift(),
                            numReadonlyUnsignedAccounts: t.shift()
                        },
                        s = [],
                        o = decodeLength(t);
                    for (let e = 0; e < o; e++) s.push(new PublicKey(t.splice(0, 32)));
                    let a = h().encode(t.splice(0, 32)),
                        c = decodeLength(t),
                        l = [];
                    for (let e = 0; e < c; e++) {
                        let e = t.shift(),
                            r = decodeLength(t),
                            n = t.splice(0, r),
                            i = decodeLength(t),
                            s = new Uint8Array(t.splice(0, i));
                        l.push({
                            programIdIndex: e,
                            accountKeyIndexes: n,
                            data: s
                        })
                    }
                    let u = decodeLength(t),
                        d = [];
                    for (let e = 0; e < u; e++) {
                        let e = new PublicKey(t.splice(0, 32)),
                            r = decodeLength(t),
                            n = t.splice(0, r),
                            i = decodeLength(t),
                            s = t.splice(0, i);
                        d.push({
                            accountKey: e,
                            writableIndexes: n,
                            readonlyIndexes: s
                        })
                    }
                    return new MessageV0({
                        header: i,
                        staticAccountKeys: s,
                        recentBlockhash: a,
                        compiledInstructions: l,
                        addressTableLookups: d
                    })
                }
            };
            (s = i || (i = {}))[s.BLOCKHEIGHT_EXCEEDED = 0] = "BLOCKHEIGHT_EXCEEDED", s[s.PROCESSED = 1] = "PROCESSED", s[s.TIMED_OUT = 2] = "TIMED_OUT", s[s.NONCE_INVALID = 3] = "NONCE_INVALID";
            let C = o.lW.alloc(64).fill(0);
            let TransactionInstruction = class TransactionInstruction {
                constructor(e) {
                    this.keys = void 0, this.programId = void 0, this.data = o.lW.alloc(0), this.programId = e.programId, this.keys = e.keys, e.data && (this.data = e.data)
                }
                toJSON() {
                    return {
                        keys: this.keys.map(({
                            pubkey: e,
                            isSigner: t,
                            isWritable: r
                        }) => ({
                            pubkey: e.toJSON(),
                            isSigner: t,
                            isWritable: r
                        })),
                        programId: this.programId.toJSON(),
                        data: [...this.data]
                    }
                }
            };
            let Transaction = class Transaction {
                get signature() {
                    return this.signatures.length > 0 ? this.signatures[0].signature : null
                }
                constructor(e) {
                    if (this.signatures = [], this.feePayer = void 0, this.instructions = [], this.recentBlockhash = void 0, this.lastValidBlockHeight = void 0, this.nonceInfo = void 0, this.minNonceContextSlot = void 0, this._message = void 0, this._json = void 0, !e) return;
                    if (e.feePayer && (this.feePayer = e.feePayer), e.signatures && (this.signatures = e.signatures), Object.prototype.hasOwnProperty.call(e, "nonceInfo")) {
                        let {
                            minContextSlot: t,
                            nonceInfo: r
                        } = e;
                        this.minNonceContextSlot = t, this.nonceInfo = r
                    } else if (Object.prototype.hasOwnProperty.call(e, "lastValidBlockHeight")) {
                        let {
                            blockhash: t,
                            lastValidBlockHeight: r
                        } = e;
                        this.recentBlockhash = t, this.lastValidBlockHeight = r
                    } else {
                        let {
                            recentBlockhash: t,
                            nonceInfo: r
                        } = e;
                        r && (this.nonceInfo = r), this.recentBlockhash = t
                    }
                }
                toJSON() {
                    return {
                        recentBlockhash: this.recentBlockhash || null,
                        feePayer: this.feePayer ? this.feePayer.toJSON() : null,
                        nonceInfo: this.nonceInfo ? {
                            nonce: this.nonceInfo.nonce,
                            nonceInstruction: this.nonceInfo.nonceInstruction.toJSON()
                        } : null,
                        instructions: this.instructions.map(e => e.toJSON()),
                        signers: this.signatures.map(({
                            publicKey: e
                        }) => e.toJSON())
                    }
                }
                add(...e) {
                    if (0 === e.length) throw Error("No instructions");
                    return e.forEach(e => {
                        "instructions" in e ? this.instructions = this.instructions.concat(e.instructions) : "data" in e && "programId" in e && "keys" in e ? this.instructions.push(e) : this.instructions.push(new TransactionInstruction(e))
                    }), this
                }
                compileMessage() {
                    let e, t, r;
                    if (this._message && JSON.stringify(this.toJSON()) === JSON.stringify(this._json)) return this._message;
                    if (this.nonceInfo ? (e = this.nonceInfo.nonce, t = this.instructions[0] != this.nonceInfo.nonceInstruction ? [this.nonceInfo.nonceInstruction, ...this.instructions] : this.instructions) : (e = this.recentBlockhash, t = this.instructions), !e) throw Error("Transaction recentBlockhash required");
                    if (t.length < 1 && console.warn("No instructions provided"), this.feePayer) r = this.feePayer;
                    else if (this.signatures.length > 0 && this.signatures[0].publicKey) r = this.signatures[0].publicKey;
                    else throw Error("Transaction fee payer required");
                    for (let e = 0; e < t.length; e++)
                        if (void 0 === t[e].programId) throw Error(`Transaction instruction index ${e} has undefined program id`);
                    let n = [],
                        i = [];
                    t.forEach(e => {
                        e.keys.forEach(e => {
                            i.push({ ...e
                            })
                        });
                        let t = e.programId.toString();
                        n.includes(t) || n.push(t)
                    }), n.forEach(e => {
                        i.push({
                            pubkey: new PublicKey(e),
                            isSigner: !1,
                            isWritable: !1
                        })
                    });
                    let s = [];
                    i.forEach(e => {
                        let t = e.pubkey.toString(),
                            r = s.findIndex(e => e.pubkey.toString() === t);
                        r > -1 ? (s[r].isWritable = s[r].isWritable || e.isWritable, s[r].isSigner = s[r].isSigner || e.isSigner) : s.push(e)
                    }), s.sort(function(e, t) {
                        return e.isSigner !== t.isSigner ? e.isSigner ? -1 : 1 : e.isWritable !== t.isWritable ? e.isWritable ? -1 : 1 : e.pubkey.toBase58().localeCompare(t.pubkey.toBase58())
                    });
                    let o = s.findIndex(e => e.pubkey.equals(r));
                    if (o > -1) {
                        let [e] = s.splice(o, 1);
                        e.isSigner = !0, e.isWritable = !0, s.unshift(e)
                    } else s.unshift({
                        pubkey: r,
                        isSigner: !0,
                        isWritable: !0
                    });
                    for (let e of this.signatures) {
                        let t = s.findIndex(t => t.pubkey.equals(e.publicKey));
                        if (t > -1) s[t].isSigner || (s[t].isSigner = !0, console.warn("Transaction references a signature that is unnecessary, only the fee payer and instruction signer accounts should sign a transaction. This behavior is deprecated and will throw an error in the next major version release."));
                        else throw Error(`unknown signer: ${e.publicKey.toString()}`)
                    }
                    let a = 0,
                        c = 0,
                        l = 0,
                        u = [],
                        d = [];
                    s.forEach(({
                        pubkey: e,
                        isSigner: t,
                        isWritable: r
                    }) => {
                        t ? (u.push(e.toString()), a += 1, r || (c += 1)) : (d.push(e.toString()), r || (l += 1))
                    });
                    let g = u.concat(d),
                        p = t.map(e => {
                            let {
                                data: t,
                                programId: r
                            } = e;
                            return {
                                programIdIndex: g.indexOf(r.toString()),
                                accounts: e.keys.map(e => g.indexOf(e.pubkey.toString())),
                                data: h().encode(t)
                            }
                        });
                    return p.forEach(e => {
                        assert(e.programIdIndex >= 0), e.accounts.forEach(e => assert(e >= 0))
                    }), new Message({
                        header: {
                            numRequiredSignatures: a,
                            numReadonlySignedAccounts: c,
                            numReadonlyUnsignedAccounts: l
                        },
                        accountKeys: g,
                        recentBlockhash: e,
                        instructions: p
                    })
                }
                _compile() {
                    let e = this.compileMessage(),
                        t = e.accountKeys.slice(0, e.header.numRequiredSignatures);
                    if (this.signatures.length === t.length) {
                        let r = this.signatures.every((e, r) => t[r].equals(e.publicKey));
                        if (r) return e
                    }
                    return this.signatures = t.map(e => ({
                        signature: null,
                        publicKey: e
                    })), e
                }
                serializeMessage() {
                    return this._compile().serialize()
                }
                async getEstimatedFee(e) {
                    return (await e.getFeeForMessage(this.compileMessage())).value
                }
                setSigners(...e) {
                    if (0 === e.length) throw Error("No signers");
                    let t = new Set;
                    this.signatures = e.filter(e => {
                        let r = e.toString();
                        return !t.has(r) && (t.add(r), !0)
                    }).map(e => ({
                        signature: null,
                        publicKey: e
                    }))
                }
                sign(...e) {
                    if (0 === e.length) throw Error("No signers");
                    let t = new Set,
                        r = [];
                    for (let n of e) {
                        let e = n.publicKey.toString();
                        t.has(e) || (t.add(e), r.push(n))
                    }
                    this.signatures = r.map(e => ({
                        signature: null,
                        publicKey: e.publicKey
                    }));
                    let n = this._compile();
                    this._partialSign(n, ...r)
                }
                partialSign(...e) {
                    if (0 === e.length) throw Error("No signers");
                    let t = new Set,
                        r = [];
                    for (let n of e) {
                        let e = n.publicKey.toString();
                        t.has(e) || (t.add(e), r.push(n))
                    }
                    let n = this._compile();
                    this._partialSign(n, ...r)
                }
                _partialSign(e, ...t) {
                    let r = e.serialize();
                    t.forEach(e => {
                        let t = sign(r, e.secretKey);
                        this._addSignature(e.publicKey, toBuffer(t))
                    })
                }
                addSignature(e, t) {
                    this._compile(), this._addSignature(e, t)
                }
                _addSignature(e, t) {
                    assert(64 === t.length);
                    let r = this.signatures.findIndex(t => e.equals(t.publicKey));
                    if (r < 0) throw Error(`unknown signer: ${e.toString()}`);
                    this.signatures[r].signature = o.lW.from(t)
                }
                verifySignatures() {
                    return this._verifySignatures(this.serializeMessage(), !0)
                }
                _verifySignatures(e, t) {
                    for (let {
                            signature: r,
                            publicKey: n
                        } of this.signatures)
                        if (null === r) {
                            if (t) return !1
                        } else if (!R(r, e, n.toBytes())) return !1;
                    return !0
                }
                serialize(e) {
                    let {
                        requireAllSignatures: t,
                        verifySignatures: r
                    } = Object.assign({
                        requireAllSignatures: !0,
                        verifySignatures: !0
                    }, e), n = this.serializeMessage();
                    if (r && !this._verifySignatures(n, t)) throw Error("Signature verification failed");
                    return this._serialize(n)
                }
                _serialize(e) {
                    let {
                        signatures: t
                    } = this, r = [];
                    encodeLength(r, t.length);
                    let n = r.length + 64 * t.length + e.length,
                        i = o.lW.alloc(n);
                    return assert(t.length < 256), o.lW.from(r).copy(i, 0), t.forEach(({
                        signature: e
                    }, t) => {
                        null !== e && (assert(64 === e.length, "signature has invalid length"), o.lW.from(e).copy(i, r.length + 64 * t))
                    }), e.copy(i, r.length + 64 * t.length), assert(i.length <= 1232, `Transaction too large: ${i.length} > 1232`), i
                }
                get keys() {
                    return assert(1 === this.instructions.length), this.instructions[0].keys.map(e => e.pubkey)
                }
                get programId() {
                    return assert(1 === this.instructions.length), this.instructions[0].programId
                }
                get data() {
                    return assert(1 === this.instructions.length), this.instructions[0].data
                }
                static from(e) {
                    let t = [...e],
                        r = decodeLength(t),
                        n = [];
                    for (let e = 0; e < r; e++) {
                        let e = t.slice(0, 64);
                        t = t.slice(64), n.push(h().encode(o.lW.from(e)))
                    }
                    return Transaction.populate(Message.from(t), n)
                }
                static populate(e, t = []) {
                    let r = new Transaction;
                    return r.recentBlockhash = e.recentBlockhash, e.header.numRequiredSignatures > 0 && (r.feePayer = e.accountKeys[0]), t.forEach((t, n) => {
                        let i = {
                            signature: t == h().encode(C) ? null : h().decode(t),
                            publicKey: e.accountKeys[n]
                        };
                        r.signatures.push(i)
                    }), e.instructions.forEach(t => {
                        let n = t.accounts.map(t => {
                            let n = e.accountKeys[t];
                            return {
                                pubkey: n,
                                isSigner: r.signatures.some(e => e.publicKey.toString() === n.toString()) || e.isAccountSigner(t),
                                isWritable: e.isAccountWritable(t)
                            }
                        });
                        r.instructions.push(new TransactionInstruction({
                            keys: n,
                            programId: e.accountKeys[t.programIdIndex],
                            data: h().decode(t.data)
                        }))
                    }), r._message = e, r._json = r.toJSON(), r
                }
            };
            let v = new PublicKey("SysvarC1ock11111111111111111111111111111111");
            new PublicKey("SysvarEpochSchedu1e111111111111111111111111"), new PublicKey("Sysvar1nstructions1111111111111111111111111");
            let B = new PublicKey("SysvarRecentB1ockHashes11111111111111111111"),
                E = new PublicKey("SysvarRent111111111111111111111111111111111");
            new PublicKey("SysvarRewards111111111111111111111111111111"), new PublicKey("SysvarS1otHashes111111111111111111111111111"), new PublicKey("SysvarS1otHistory11111111111111111111111111");
            let T = new PublicKey("SysvarStakeHistory1111111111111111111111111");
            async function sendAndConfirmTransaction(e, t, r, n) {
                let i;
                let s = n && {
                        skipPreflight: n.skipPreflight,
                        preflightCommitment: n.preflightCommitment || n.commitment,
                        maxRetries: n.maxRetries,
                        minContextSlot: n.minContextSlot
                    },
                    o = await e.sendTransaction(t, r, s);
                if (null != t.recentBlockhash && null != t.lastValidBlockHeight) i = (await e.confirmTransaction({
                    abortSignal: null == n ? void 0 : n.abortSignal,
                    signature: o,
                    blockhash: t.recentBlockhash,
                    lastValidBlockHeight: t.lastValidBlockHeight
                }, n && n.commitment)).value;
                else if (null != t.minNonceContextSlot && null != t.nonceInfo) {
                    let {
                        nonceInstruction: r
                    } = t.nonceInfo, s = r.keys[0].pubkey;
                    i = (await e.confirmTransaction({
                        abortSignal: null == n ? void 0 : n.abortSignal,
                        minContextSlot: t.minNonceContextSlot,
                        nonceAccountPubkey: s,
                        nonceValue: t.nonceInfo.nonce,
                        signature: o
                    }, n && n.commitment)).value
                } else(null == n ? void 0 : n.abortSignal) != null && console.warn("sendAndConfirmTransaction(): A transaction with a deprecated confirmation strategy was supplied along with an `abortSignal`. Only transactions having `lastValidBlockHeight` or a combination of `nonceInfo` and `minNonceContextSlot` are abortable."), i = (await e.confirmTransaction(o, n && n.commitment)).value;
                if (i.err) throw Error(`Transaction ${o} failed (${JSON.stringify(i)})`);
                return o
            }

            function sleep(e) {
                return new Promise(t => setTimeout(t, e))
            }

            function encodeData(e, t) {
                let r = e.layout.span >= 0 ? e.layout.span : function getAlloc(e, t) {
                        let getItemAlloc = e => {
                                if (e.span >= 0) return e.span;
                                if ("function" == typeof e.alloc) return e.alloc(t[e.property]);
                                if ("count" in e && "elementLayout" in e) {
                                    let r = t[e.property];
                                    if (Array.isArray(r)) return r.length * getItemAlloc(e.elementLayout)
                                } else if ("fields" in e) return getAlloc({
                                    layout: e
                                }, t[e.property]);
                                return 0
                            },
                            r = 0;
                        return e.layout.fields.forEach(e => {
                            r += getItemAlloc(e)
                        }), r
                    }(e, t),
                    n = o.lW.alloc(r),
                    i = Object.assign({
                        instruction: e.index
                    }, t);
                return e.layout.encode(i, n), n
            }
            let K = m._O("lamportsPerSignature"),
                W = m.n_([m.Jq("version"), m.Jq("state"), publicKey("authorizedPubkey"), publicKey("nonce"), m.n_([K], "feeCalculator")]),
                O = W.span;
            let NonceAccount = class NonceAccount {
                constructor(e) {
                    this.authorizedPubkey = void 0, this.nonce = void 0, this.feeCalculator = void 0, this.authorizedPubkey = e.authorizedPubkey, this.nonce = e.nonce, this.feeCalculator = e.feeCalculator
                }
                static fromAccountData(e) {
                    let t = W.decode(toBuffer(e), 0);
                    return new NonceAccount({
                        authorizedPubkey: new PublicKey(t.authorizedPubkey),
                        nonce: new PublicKey(t.nonce).toString(),
                        feeCalculator: t.feeCalculator
                    })
                }
            };
            let encodeDecode = e => {
                    let t = e.decode.bind(e),
                        r = e.encode.bind(e);
                    return {
                        decode: t,
                        encode: r
                    }
                },
                u64 = e => {
                    let t = (0, m.Ik)(8, e),
                        {
                            encode: r,
                            decode: n
                        } = encodeDecode(t);
                    return t.decode = (e, t) => {
                        let r = n(e, t);
                        return (0, f.oU)(o.lW.from(r))
                    }, t.encode = (e, t, n) => {
                        let i = (0, f.k$)(e, 8);
                        return r(i, t, n)
                    }, t
                },
                N = Object.freeze({
                    Create: {
                        index: 0,
                        layout: m.n_([m.Jq("instruction"), m.gM("lamports"), m.gM("space"), publicKey("programId")])
                    },
                    Assign: {
                        index: 1,
                        layout: m.n_([m.Jq("instruction"), publicKey("programId")])
                    },
                    Transfer: {
                        index: 2,
                        layout: m.n_([m.Jq("instruction"), u64("lamports")])
                    },
                    CreateWithSeed: {
                        index: 3,
                        layout: m.n_([m.Jq("instruction"), publicKey("base"), rustString("seed"), m.gM("lamports"), m.gM("space"), publicKey("programId")])
                    },
                    AdvanceNonceAccount: {
                        index: 4,
                        layout: m.n_([m.Jq("instruction")])
                    },
                    WithdrawNonceAccount: {
                        index: 5,
                        layout: m.n_([m.Jq("instruction"), m.gM("lamports")])
                    },
                    InitializeNonceAccount: {
                        index: 6,
                        layout: m.n_([m.Jq("instruction"), publicKey("authorized")])
                    },
                    AuthorizeNonceAccount: {
                        index: 7,
                        layout: m.n_([m.Jq("instruction"), publicKey("authorized")])
                    },
                    Allocate: {
                        index: 8,
                        layout: m.n_([m.Jq("instruction"), m.gM("space")])
                    },
                    AllocateWithSeed: {
                        index: 9,
                        layout: m.n_([m.Jq("instruction"), publicKey("base"), rustString("seed"), m.gM("space"), publicKey("programId")])
                    },
                    AssignWithSeed: {
                        index: 10,
                        layout: m.n_([m.Jq("instruction"), publicKey("base"), rustString("seed"), publicKey("programId")])
                    },
                    TransferWithSeed: {
                        index: 11,
                        layout: m.n_([m.Jq("instruction"), u64("lamports"), rustString("seed"), publicKey("programId")])
                    },
                    UpgradeNonceAccount: {
                        index: 12,
                        layout: m.n_([m.Jq("instruction")])
                    }
                });
            let SystemProgram = class SystemProgram {
                constructor() {}
                static createAccount(e) {
                    let t = N.Create,
                        r = encodeData(t, {
                            lamports: e.lamports,
                            space: e.space,
                            programId: toBuffer(e.programId.toBuffer())
                        });
                    return new TransactionInstruction({
                        keys: [{
                            pubkey: e.fromPubkey,
                            isSigner: !0,
                            isWritable: !0
                        }, {
                            pubkey: e.newAccountPubkey,
                            isSigner: !0,
                            isWritable: !0
                        }],
                        programId: this.programId,
                        data: r
                    })
                }
                static transfer(e) {
                    let t, r;
                    if ("basePubkey" in e) {
                        let n = N.TransferWithSeed;
                        t = encodeData(n, {
                            lamports: BigInt(e.lamports),
                            seed: e.seed,
                            programId: toBuffer(e.programId.toBuffer())
                        }), r = [{
                            pubkey: e.fromPubkey,
                            isSigner: !1,
                            isWritable: !0
                        }, {
                            pubkey: e.basePubkey,
                            isSigner: !0,
                            isWritable: !1
                        }, {
                            pubkey: e.toPubkey,
                            isSigner: !1,
                            isWritable: !0
                        }]
                    } else {
                        let n = N.Transfer;
                        t = encodeData(n, {
                            lamports: BigInt(e.lamports)
                        }), r = [{
                            pubkey: e.fromPubkey,
                            isSigner: !0,
                            isWritable: !0
                        }, {
                            pubkey: e.toPubkey,
                            isSigner: !1,
                            isWritable: !0
                        }]
                    }
                    return new TransactionInstruction({
                        keys: r,
                        programId: this.programId,
                        data: t
                    })
                }
                static assign(e) {
                    let t, r;
                    if ("basePubkey" in e) {
                        let n = N.AssignWithSeed;
                        t = encodeData(n, {
                            base: toBuffer(e.basePubkey.toBuffer()),
                            seed: e.seed,
                            programId: toBuffer(e.programId.toBuffer())
                        }), r = [{
                            pubkey: e.accountPubkey,
                            isSigner: !1,
                            isWritable: !0
                        }, {
                            pubkey: e.basePubkey,
                            isSigner: !0,
                            isWritable: !1
                        }]
                    } else {
                        let n = N.Assign;
                        t = encodeData(n, {
                            programId: toBuffer(e.programId.toBuffer())
                        }), r = [{
                            pubkey: e.accountPubkey,
                            isSigner: !0,
                            isWritable: !0
                        }]
                    }
                    return new TransactionInstruction({
                        keys: r,
                        programId: this.programId,
                        data: t
                    })
                }
                static createAccountWithSeed(e) {
                    let t = N.CreateWithSeed,
                        r = encodeData(t, {
                            base: toBuffer(e.basePubkey.toBuffer()),
                            seed: e.seed,
                            lamports: e.lamports,
                            space: e.space,
                            programId: toBuffer(e.programId.toBuffer())
                        }),
                        n = [{
                            pubkey: e.fromPubkey,
                            isSigner: !0,
                            isWritable: !0
                        }, {
                            pubkey: e.newAccountPubkey,
                            isSigner: !1,
                            isWritable: !0
                        }];
                    return e.basePubkey != e.fromPubkey && n.push({
                        pubkey: e.basePubkey,
                        isSigner: !0,
                        isWritable: !1
                    }), new TransactionInstruction({
                        keys: n,
                        programId: this.programId,
                        data: r
                    })
                }
                static createNonceAccount(e) {
                    let t = new Transaction;
                    "basePubkey" in e && "seed" in e ? t.add(SystemProgram.createAccountWithSeed({
                        fromPubkey: e.fromPubkey,
                        newAccountPubkey: e.noncePubkey,
                        basePubkey: e.basePubkey,
                        seed: e.seed,
                        lamports: e.lamports,
                        space: O,
                        programId: this.programId
                    })) : t.add(SystemProgram.createAccount({
                        fromPubkey: e.fromPubkey,
                        newAccountPubkey: e.noncePubkey,
                        lamports: e.lamports,
                        space: O,
                        programId: this.programId
                    }));
                    let r = {
                        noncePubkey: e.noncePubkey,
                        authorizedPubkey: e.authorizedPubkey
                    };
                    return t.add(this.nonceInitialize(r)), t
                }
                static nonceInitialize(e) {
                    let t = N.InitializeNonceAccount,
                        r = encodeData(t, {
                            authorized: toBuffer(e.authorizedPubkey.toBuffer())
                        }),
                        n = {
                            keys: [{
                                pubkey: e.noncePubkey,
                                isSigner: !1,
                                isWritable: !0
                            }, {
                                pubkey: B,
                                isSigner: !1,
                                isWritable: !1
                            }, {
                                pubkey: E,
                                isSigner: !1,
                                isWritable: !1
                            }],
                            programId: this.programId,
                            data: r
                        };
                    return new TransactionInstruction(n)
                }
                static nonceAdvance(e) {
                    let t = N.AdvanceNonceAccount,
                        r = encodeData(t),
                        n = {
                            keys: [{
                                pubkey: e.noncePubkey,
                                isSigner: !1,
                                isWritable: !0
                            }, {
                                pubkey: B,
                                isSigner: !1,
                                isWritable: !1
                            }, {
                                pubkey: e.authorizedPubkey,
                                isSigner: !0,
                                isWritable: !1
                            }],
                            programId: this.programId,
                            data: r
                        };
                    return new TransactionInstruction(n)
                }
                static nonceWithdraw(e) {
                    let t = N.WithdrawNonceAccount,
                        r = encodeData(t, {
                            lamports: e.lamports
                        });
                    return new TransactionInstruction({
                        keys: [{
                            pubkey: e.noncePubkey,
                            isSigner: !1,
                            isWritable: !0
                        }, {
                            pubkey: e.toPubkey,
                            isSigner: !1,
                            isWritable: !0
                        }, {
                            pubkey: B,
                            isSigner: !1,
                            isWritable: !1
                        }, {
                            pubkey: E,
                            isSigner: !1,
                            isWritable: !1
                        }, {
                            pubkey: e.authorizedPubkey,
                            isSigner: !0,
                            isWritable: !1
                        }],
                        programId: this.programId,
                        data: r
                    })
                }
                static nonceAuthorize(e) {
                    let t = N.AuthorizeNonceAccount,
                        r = encodeData(t, {
                            authorized: toBuffer(e.newAuthorizedPubkey.toBuffer())
                        });
                    return new TransactionInstruction({
                        keys: [{
                            pubkey: e.noncePubkey,
                            isSigner: !1,
                            isWritable: !0
                        }, {
                            pubkey: e.authorizedPubkey,
                            isSigner: !0,
                            isWritable: !1
                        }],
                        programId: this.programId,
                        data: r
                    })
                }
                static allocate(e) {
                    let t, r;
                    if ("basePubkey" in e) {
                        let n = N.AllocateWithSeed;
                        t = encodeData(n, {
                            base: toBuffer(e.basePubkey.toBuffer()),
                            seed: e.seed,
                            space: e.space,
                            programId: toBuffer(e.programId.toBuffer())
                        }), r = [{
                            pubkey: e.accountPubkey,
                            isSigner: !1,
                            isWritable: !0
                        }, {
                            pubkey: e.basePubkey,
                            isSigner: !0,
                            isWritable: !1
                        }]
                    } else {
                        let n = N.Allocate;
                        t = encodeData(n, {
                            space: e.space
                        }), r = [{
                            pubkey: e.accountPubkey,
                            isSigner: !0,
                            isWritable: !0
                        }]
                    }
                    return new TransactionInstruction({
                        keys: r,
                        programId: this.programId,
                        data: t
                    })
                }
            };
            SystemProgram.programId = new PublicKey("11111111111111111111111111111111");
            let Loader = class Loader {
                constructor() {}
                static getMinNumSignatures(e) {
                    return 2 * (Math.ceil(e / Loader.chunkSize) + 1 + 1)
                }
                static async load(e, t, r, n, i) {
                    {
                        let s = await e.getMinimumBalanceForRentExemption(i.length),
                            o = await e.getAccountInfo(r.publicKey, "confirmed"),
                            a = null;
                        if (null !== o) {
                            if (o.executable) return console.error("Program load failed, account is already executable"), !1;
                            o.data.length !== i.length && (a = a || new Transaction).add(SystemProgram.allocate({
                                accountPubkey: r.publicKey,
                                space: i.length
                            })), o.owner.equals(n) || (a = a || new Transaction).add(SystemProgram.assign({
                                accountPubkey: r.publicKey,
                                programId: n
                            })), o.lamports < s && (a = a || new Transaction).add(SystemProgram.transfer({
                                fromPubkey: t.publicKey,
                                toPubkey: r.publicKey,
                                lamports: s - o.lamports
                            }))
                        } else a = new Transaction().add(SystemProgram.createAccount({
                            fromPubkey: t.publicKey,
                            newAccountPubkey: r.publicKey,
                            lamports: s > 0 ? s : 1,
                            space: i.length,
                            programId: n
                        }));
                        null !== a && await sendAndConfirmTransaction(e, a, [t, r], {
                            commitment: "confirmed"
                        })
                    }
                    let s = m.n_([m.Jq("instruction"), m.Jq("offset"), m.Jq("bytesLength"), m.Jq("bytesLengthPadding"), m.A9(m.u8("byte"), m.cv(m.Jq(), -8), "bytes")]),
                        a = Loader.chunkSize,
                        c = 0,
                        l = i,
                        u = [];
                    for (; l.length > 0;) {
                        let i = l.slice(0, a),
                            d = o.lW.alloc(a + 16);
                        s.encode({
                            instruction: 0,
                            offset: c,
                            bytes: i,
                            bytesLength: 0,
                            bytesLengthPadding: 0
                        }, d);
                        let h = new Transaction().add({
                            keys: [{
                                pubkey: r.publicKey,
                                isSigner: !0,
                                isWritable: !0
                            }],
                            programId: n,
                            data: d
                        });
                        u.push(sendAndConfirmTransaction(e, h, [t, r], {
                            commitment: "confirmed"
                        })), e._rpcEndpoint.includes("solana.com") && await sleep(250), c += a, l = l.slice(a)
                    }
                    await Promise.all(u); {
                        let i = m.n_([m.Jq("instruction")]),
                            s = o.lW.alloc(i.span);
                        i.encode({
                            instruction: 1
                        }, s);
                        let a = new Transaction().add({
                            keys: [{
                                pubkey: r.publicKey,
                                isSigner: !0,
                                isWritable: !0
                            }, {
                                pubkey: E,
                                isSigner: !1,
                                isWritable: !1
                            }],
                            programId: n,
                            data: s
                        });
                        await sendAndConfirmTransaction(e, a, [t, r], {
                            commitment: "confirmed"
                        })
                    }
                    return !0
                }
            };
            Loader.chunkSize = 932, new PublicKey("BPFLoader2111111111111111111111111111111111");
            var L = Object.prototype.toString,
                q = Object.keys || function(e) {
                    var t = [];
                    for (var r in e) t.push(r);
                    return t
                },
                fastStableStringify$1 = function(e) {
                    var t = function stringify(e, t) {
                        var r, n, i, s, o, a, c;
                        if (!0 === e) return "true";
                        if (!1 === e) return "false";
                        switch (typeof e) {
                            case "object":
                                if (null === e) return null;
                                if (e.toJSON && "function" == typeof e.toJSON) return stringify(e.toJSON(), t);
                                if ("[object Array]" === (c = L.call(e))) {
                                    for (r = 0, i = "[", n = e.length - 1; r < n; r++) i += stringify(e[r], !0) + ",";
                                    return n > -1 && (i += stringify(e[r], !0)), i + "]"
                                }
                                if ("[object Object]" !== c) return JSON.stringify(e);
                                for (n = (s = q(e).sort()).length, i = "", r = 0; r < n;) void 0 !== (a = stringify(e[o = s[r]], !1)) && (i && (i += ","), i += JSON.stringify(o) + ":" + a), r++;
                                return "{" + i + "}";
                            case "function":
                            case "undefined":
                                return t ? null : void 0;
                            case "string":
                                return JSON.stringify(e);
                            default:
                                return isFinite(e) ? e : null
                        }
                    }(e, !1);
                    if (void 0 !== t) return "" + t
                };

            function trailingZeros(e) {
                let t = 0;
                for (; e > 1;) e /= 2, t++;
                return t
            }
            let EpochSchedule = class EpochSchedule {
                constructor(e, t, r, n, i) {
                    this.slotsPerEpoch = void 0, this.leaderScheduleSlotOffset = void 0, this.warmup = void 0, this.firstNormalEpoch = void 0, this.firstNormalSlot = void 0, this.slotsPerEpoch = e, this.leaderScheduleSlotOffset = t, this.warmup = r, this.firstNormalEpoch = n, this.firstNormalSlot = i
                }
                getEpoch(e) {
                    return this.getEpochAndSlotIndex(e)[0]
                }
                getEpochAndSlotIndex(e) {
                    if (e < this.firstNormalSlot) {
                        var t;
                        let r = trailingZeros(0 === (t = e + 32 + 1) ? 1 : (t--, t |= t >> 1, t |= t >> 2, t |= t >> 4, t |= t >> 8, t |= t >> 16, (t |= t >> 32) + 1)) - trailingZeros(32) - 1,
                            n = this.getSlotsInEpoch(r),
                            i = e - (n - 32);
                        return [r, i]
                    } {
                        let t = e - this.firstNormalSlot,
                            r = Math.floor(t / this.slotsPerEpoch),
                            n = this.firstNormalEpoch + r,
                            i = t % this.slotsPerEpoch;
                        return [n, i]
                    }
                }
                getFirstSlotInEpoch(e) {
                    return e <= this.firstNormalEpoch ? (Math.pow(2, e) - 1) * 32 : (e - this.firstNormalEpoch) * this.slotsPerEpoch + this.firstNormalSlot
                }
                getLastSlotInEpoch(e) {
                    return this.getFirstSlotInEpoch(e) + this.getSlotsInEpoch(e) - 1
                }
                getSlotsInEpoch(e) {
                    return e < this.firstNormalEpoch ? Math.pow(2, e + trailingZeros(32)) : this.slotsPerEpoch
                }
            };
            let SendTransactionError = class SendTransactionError extends Error {
                constructor(e, t) {
                    super(e), this.logs = void 0, this.logs = t
                }
            };
            let SolanaJSONRPCError = class SolanaJSONRPCError extends Error {
                constructor({
                    code: e,
                    message: t,
                    data: r
                }, n) {
                    super(null != n ? `${n}: ${t}` : t), this.code = void 0, this.data = void 0, this.code = e, this.data = r, this.name = "SolanaJSONRPCError"
                }
            };
            var j = globalThis.fetch;
            let AddressLookupTableAccount = class AddressLookupTableAccount {
                constructor(e) {
                    this.key = void 0, this.state = void 0, this.key = e.key, this.state = e.state
                }
                isActive() {
                    let e = BigInt("0xffffffffffffffff");
                    return this.state.deactivationSlot === e
                }
                static deserialize(e) {
                    let t = function(e, t) {
                            let r;
                            try {
                                r = e.layout.decode(t)
                            } catch (e) {
                                throw Error("invalid instruction; " + e)
                            }
                            if (r.typeIndex !== e.index) throw Error(`invalid account data; account type mismatch ${r.typeIndex} != ${e.index}`);
                            return r
                        }(z, e),
                        r = e.length - 56;
                    assert(r >= 0, "lookup table is invalid"), assert(r % 32 == 0, "lookup table is invalid");
                    let n = r / 32,
                        {
                            addresses: i
                        } = m.n_([m.A9(publicKey(), n, "addresses")]).decode(e.slice(56));
                    return {
                        deactivationSlot: t.deactivationSlot,
                        lastExtendedSlot: t.lastExtendedSlot,
                        lastExtendedSlotStartIndex: t.lastExtendedStartIndex,
                        authority: 0 !== t.authority.length ? new PublicKey(t.authority[0]) : void 0,
                        addresses: i.map(e => new PublicKey(e))
                    }
                }
            };
            let z = {
                    index: 1,
                    layout: m.n_([m.Jq("typeIndex"), u64("deactivationSlot"), m._O("lastExtendedSlot"), m.u8("lastExtendedStartIndex"), m.u8(), m.A9(publicKey(), m.cv(m.u8(), -1), "authority")])
                },
                J = /^[^:]+:\/\/([^:[]+|\[[^\]]+\])(:\d+)?(.*)/i,
                U = (0, b.oQ)((0, b.eE)(PublicKey), (0, b.Z_)(), e => new PublicKey(e)),
                G = (0, b.bc)([(0, b.Z_)(), (0, b.i0)("base64")]),
                M = (0, b.oQ)((0, b.eE)(o.lW), G, e => o.lW.from(e[0], "base64"));

            function extractCommitmentFromConfig(e) {
                let t, r;
                if ("string" == typeof e) t = e;
                else if (e) {
                    let {
                        commitment: n,
                        ...i
                    } = e;
                    t = n, r = i
                }
                return {
                    commitment: t,
                    config: r
                }
            }

            function createRpcResult(e) {
                return (0, b.G0)([(0, b.dt)({
                    jsonrpc: (0, b.i0)("2.0"),
                    id: (0, b.Z_)(),
                    result: e
                }), (0, b.dt)({
                    jsonrpc: (0, b.i0)("2.0"),
                    id: (0, b.Z_)(),
                    error: (0, b.dt)({
                        code: (0, b._4)(),
                        message: (0, b.Z_)(),
                        data: (0, b.jt)((0, b.Yj)())
                    })
                })])
            }
            let D = createRpcResult((0, b._4)());

            function jsonRpcResult(e) {
                return (0, b.oQ)(createRpcResult(e), D, t => "error" in t ? t : { ...t,
                    result: (0, b.Ue)(t.result, e)
                })
            }

            function jsonRpcResultAndContext(e) {
                return jsonRpcResult((0, b.dt)({
                    context: (0, b.dt)({
                        slot: (0, b.Rx)()
                    }),
                    value: e
                }))
            }

            function notificationResultAndContext(e) {
                return (0, b.dt)({
                    context: (0, b.dt)({
                        slot: (0, b.Rx)()
                    }),
                    value: e
                })
            }

            function versionedMessageFromResponse(e, t) {
                return 0 === e ? new MessageV0({
                    header: t.header,
                    staticAccountKeys: t.accountKeys.map(e => new PublicKey(e)),
                    recentBlockhash: t.recentBlockhash,
                    compiledInstructions: t.instructions.map(e => ({
                        programIdIndex: e.programIdIndex,
                        accountKeyIndexes: e.accounts,
                        data: h().decode(e.data)
                    })),
                    addressTableLookups: t.addressTableLookups
                }) : new Message(t)
            }
            let F = (0, b.dt)({
                    foundation: (0, b.Rx)(),
                    foundationTerm: (0, b.Rx)(),
                    initial: (0, b.Rx)(),
                    taper: (0, b.Rx)(),
                    terminal: (0, b.Rx)()
                }),
                Z = jsonRpcResult((0, b.IX)((0, b.AG)((0, b.dt)({
                    epoch: (0, b.Rx)(),
                    effectiveSlot: (0, b.Rx)(),
                    amount: (0, b.Rx)(),
                    postBalance: (0, b.Rx)()
                })))),
                X = (0, b.dt)({
                    epoch: (0, b.Rx)(),
                    slotIndex: (0, b.Rx)(),
                    slotsInEpoch: (0, b.Rx)(),
                    absoluteSlot: (0, b.Rx)(),
                    blockHeight: (0, b.jt)((0, b.Rx)()),
                    transactionCount: (0, b.jt)((0, b.Rx)())
                }),
                H = (0, b.dt)({
                    slotsPerEpoch: (0, b.Rx)(),
                    leaderScheduleSlotOffset: (0, b.Rx)(),
                    warmup: (0, b.O7)(),
                    firstNormalEpoch: (0, b.Rx)(),
                    firstNormalSlot: (0, b.Rx)()
                }),
                $ = (0, b.IM)((0, b.Z_)(), (0, b.IX)((0, b.Rx)())),
                V = (0, b.AG)((0, b.G0)([(0, b.dt)({}), (0, b.Z_)()])),
                Q = (0, b.dt)({
                    err: V
                }),
                Y = (0, b.i0)("receivedSignature"),
                ee = (0, b.dt)({
                    "solana-core": (0, b.Z_)(),
                    "feature-set": (0, b.jt)((0, b.Rx)())
                }),
                et = jsonRpcResultAndContext((0, b.dt)({
                    err: (0, b.AG)((0, b.G0)([(0, b.dt)({}), (0, b.Z_)()])),
                    logs: (0, b.AG)((0, b.IX)((0, b.Z_)())),
                    accounts: (0, b.jt)((0, b.AG)((0, b.IX)((0, b.AG)((0, b.dt)({
                        executable: (0, b.O7)(),
                        owner: (0, b.Z_)(),
                        lamports: (0, b.Rx)(),
                        data: (0, b.IX)((0, b.Z_)()),
                        rentEpoch: (0, b.jt)((0, b.Rx)())
                    }))))),
                    unitsConsumed: (0, b.jt)((0, b.Rx)()),
                    returnData: (0, b.jt)((0, b.AG)((0, b.dt)({
                        programId: (0, b.Z_)(),
                        data: (0, b.bc)([(0, b.Z_)(), (0, b.i0)("base64")])
                    })))
                })),
                er = jsonRpcResultAndContext((0, b.dt)({
                    byIdentity: (0, b.IM)((0, b.Z_)(), (0, b.IX)((0, b.Rx)())),
                    range: (0, b.dt)({
                        firstSlot: (0, b.Rx)(),
                        lastSlot: (0, b.Rx)()
                    })
                })),
                en = jsonRpcResult(F),
                ei = jsonRpcResult(X),
                es = jsonRpcResult(H),
                eo = jsonRpcResult($),
                ea = jsonRpcResult((0, b.Rx)()),
                ec = jsonRpcResultAndContext((0, b.dt)({
                    total: (0, b.Rx)(),
                    circulating: (0, b.Rx)(),
                    nonCirculating: (0, b.Rx)(),
                    nonCirculatingAccounts: (0, b.IX)(U)
                })),
                el = (0, b.dt)({
                    amount: (0, b.Z_)(),
                    uiAmount: (0, b.AG)((0, b.Rx)()),
                    decimals: (0, b.Rx)(),
                    uiAmountString: (0, b.jt)((0, b.Z_)())
                }),
                eu = jsonRpcResultAndContext((0, b.IX)((0, b.dt)({
                    address: U,
                    amount: (0, b.Z_)(),
                    uiAmount: (0, b.AG)((0, b.Rx)()),
                    decimals: (0, b.Rx)(),
                    uiAmountString: (0, b.jt)((0, b.Z_)())
                }))),
                ed = jsonRpcResultAndContext((0, b.IX)((0, b.dt)({
                    pubkey: U,
                    account: (0, b.dt)({
                        executable: (0, b.O7)(),
                        owner: U,
                        lamports: (0, b.Rx)(),
                        data: M,
                        rentEpoch: (0, b.Rx)()
                    })
                }))),
                eh = (0, b.dt)({
                    program: (0, b.Z_)(),
                    parsed: (0, b._4)(),
                    space: (0, b.Rx)()
                }),
                eg = jsonRpcResultAndContext((0, b.IX)((0, b.dt)({
                    pubkey: U,
                    account: (0, b.dt)({
                        executable: (0, b.O7)(),
                        owner: U,
                        lamports: (0, b.Rx)(),
                        data: eh,
                        rentEpoch: (0, b.Rx)()
                    })
                }))),
                ep = jsonRpcResultAndContext((0, b.IX)((0, b.dt)({
                    lamports: (0, b.Rx)(),
                    address: U
                }))),
                em = (0, b.dt)({
                    executable: (0, b.O7)(),
                    owner: U,
                    lamports: (0, b.Rx)(),
                    data: M,
                    rentEpoch: (0, b.Rx)()
                }),
                ef = (0, b.dt)({
                    pubkey: U,
                    account: em
                }),
                eb = (0, b.oQ)((0, b.G0)([(0, b.eE)(o.lW), eh]), (0, b.G0)([G, eh]), e => Array.isArray(e) ? (0, b.Ue)(e, M) : e),
                ey = (0, b.dt)({
                    executable: (0, b.O7)(),
                    owner: U,
                    lamports: (0, b.Rx)(),
                    data: eb,
                    rentEpoch: (0, b.Rx)()
                }),
                eS = (0, b.dt)({
                    pubkey: U,
                    account: ey
                }),
                ek = (0, b.dt)({
                    state: (0, b.G0)([(0, b.i0)("active"), (0, b.i0)("inactive"), (0, b.i0)("activating"), (0, b.i0)("deactivating")]),
                    active: (0, b.Rx)(),
                    inactive: (0, b.Rx)()
                }),
                ew = jsonRpcResult((0, b.IX)((0, b.dt)({
                    signature: (0, b.Z_)(),
                    slot: (0, b.Rx)(),
                    err: V,
                    memo: (0, b.AG)((0, b.Z_)()),
                    blockTime: (0, b.jt)((0, b.AG)((0, b.Rx)()))
                }))),
                e_ = jsonRpcResult((0, b.IX)((0, b.dt)({
                    signature: (0, b.Z_)(),
                    slot: (0, b.Rx)(),
                    err: V,
                    memo: (0, b.AG)((0, b.Z_)()),
                    blockTime: (0, b.jt)((0, b.AG)((0, b.Rx)()))
                }))),
                eI = (0, b.dt)({
                    subscription: (0, b.Rx)(),
                    result: notificationResultAndContext(em)
                }),
                eA = (0, b.dt)({
                    pubkey: U,
                    account: em
                }),
                eR = (0, b.dt)({
                    subscription: (0, b.Rx)(),
                    result: notificationResultAndContext(eA)
                }),
                ex = (0, b.dt)({
                    parent: (0, b.Rx)(),
                    slot: (0, b.Rx)(),
                    root: (0, b.Rx)()
                }),
                eP = (0, b.dt)({
                    subscription: (0, b.Rx)(),
                    result: ex
                }),
                eC = (0, b.G0)([(0, b.dt)({
                    type: (0, b.G0)([(0, b.i0)("firstShredReceived"), (0, b.i0)("completed"), (0, b.i0)("optimisticConfirmation"), (0, b.i0)("root")]),
                    slot: (0, b.Rx)(),
                    timestamp: (0, b.Rx)()
                }), (0, b.dt)({
                    type: (0, b.i0)("createdBank"),
                    parent: (0, b.Rx)(),
                    slot: (0, b.Rx)(),
                    timestamp: (0, b.Rx)()
                }), (0, b.dt)({
                    type: (0, b.i0)("frozen"),
                    slot: (0, b.Rx)(),
                    timestamp: (0, b.Rx)(),
                    stats: (0, b.dt)({
                        numTransactionEntries: (0, b.Rx)(),
                        numSuccessfulTransactions: (0, b.Rx)(),
                        numFailedTransactions: (0, b.Rx)(),
                        maxTransactionsPerEntry: (0, b.Rx)()
                    })
                }), (0, b.dt)({
                    type: (0, b.i0)("dead"),
                    slot: (0, b.Rx)(),
                    timestamp: (0, b.Rx)(),
                    err: (0, b.Z_)()
                })]),
                ev = (0, b.dt)({
                    subscription: (0, b.Rx)(),
                    result: eC
                }),
                eB = (0, b.dt)({
                    subscription: (0, b.Rx)(),
                    result: notificationResultAndContext((0, b.G0)([Q, Y]))
                }),
                eE = (0, b.dt)({
                    subscription: (0, b.Rx)(),
                    result: (0, b.Rx)()
                }),
                eT = (0, b.dt)({
                    pubkey: (0, b.Z_)(),
                    gossip: (0, b.AG)((0, b.Z_)()),
                    tpu: (0, b.AG)((0, b.Z_)()),
                    rpc: (0, b.AG)((0, b.Z_)()),
                    version: (0, b.AG)((0, b.Z_)())
                }),
                eK = (0, b.dt)({
                    votePubkey: (0, b.Z_)(),
                    nodePubkey: (0, b.Z_)(),
                    activatedStake: (0, b.Rx)(),
                    epochVoteAccount: (0, b.O7)(),
                    epochCredits: (0, b.IX)((0, b.bc)([(0, b.Rx)(), (0, b.Rx)(), (0, b.Rx)()])),
                    commission: (0, b.Rx)(),
                    lastVote: (0, b.Rx)(),
                    rootSlot: (0, b.AG)((0, b.Rx)())
                }),
                eW = jsonRpcResult((0, b.dt)({
                    current: (0, b.IX)(eK),
                    delinquent: (0, b.IX)(eK)
                })),
                eO = (0, b.G0)([(0, b.i0)("processed"), (0, b.i0)("confirmed"), (0, b.i0)("finalized")]),
                eN = (0, b.dt)({
                    slot: (0, b.Rx)(),
                    confirmations: (0, b.AG)((0, b.Rx)()),
                    err: V,
                    confirmationStatus: (0, b.jt)(eO)
                }),
                eL = jsonRpcResultAndContext((0, b.IX)((0, b.AG)(eN))),
                eq = jsonRpcResult((0, b.Rx)()),
                ej = (0, b.dt)({
                    accountKey: U,
                    writableIndexes: (0, b.IX)((0, b.Rx)()),
                    readonlyIndexes: (0, b.IX)((0, b.Rx)())
                }),
                ez = (0, b.dt)({
                    signatures: (0, b.IX)((0, b.Z_)()),
                    message: (0, b.dt)({
                        accountKeys: (0, b.IX)((0, b.Z_)()),
                        header: (0, b.dt)({
                            numRequiredSignatures: (0, b.Rx)(),
                            numReadonlySignedAccounts: (0, b.Rx)(),
                            numReadonlyUnsignedAccounts: (0, b.Rx)()
                        }),
                        instructions: (0, b.IX)((0, b.dt)({
                            accounts: (0, b.IX)((0, b.Rx)()),
                            data: (0, b.Z_)(),
                            programIdIndex: (0, b.Rx)()
                        })),
                        recentBlockhash: (0, b.Z_)(),
                        addressTableLookups: (0, b.jt)((0, b.IX)(ej))
                    })
                }),
                eJ = (0, b.dt)({
                    pubkey: U,
                    signer: (0, b.O7)(),
                    writable: (0, b.O7)(),
                    source: (0, b.jt)((0, b.G0)([(0, b.i0)("transaction"), (0, b.i0)("lookupTable")]))
                }),
                eU = (0, b.dt)({
                    accountKeys: (0, b.IX)(eJ),
                    signatures: (0, b.IX)((0, b.Z_)())
                }),
                eG = (0, b.dt)({
                    parsed: (0, b._4)(),
                    program: (0, b.Z_)(),
                    programId: U
                }),
                eM = (0, b.dt)({
                    accounts: (0, b.IX)(U),
                    data: (0, b.Z_)(),
                    programId: U
                }),
                eD = (0, b.G0)([eM, eG]),
                eF = (0, b.G0)([(0, b.dt)({
                    parsed: (0, b._4)(),
                    program: (0, b.Z_)(),
                    programId: (0, b.Z_)()
                }), (0, b.dt)({
                    accounts: (0, b.IX)((0, b.Z_)()),
                    data: (0, b.Z_)(),
                    programId: (0, b.Z_)()
                })]),
                eZ = (0, b.oQ)(eD, eF, e => "accounts" in e ? (0, b.Ue)(e, eM) : (0, b.Ue)(e, eG)),
                eX = (0, b.dt)({
                    signatures: (0, b.IX)((0, b.Z_)()),
                    message: (0, b.dt)({
                        accountKeys: (0, b.IX)(eJ),
                        instructions: (0, b.IX)(eZ),
                        recentBlockhash: (0, b.Z_)(),
                        addressTableLookups: (0, b.jt)((0, b.AG)((0, b.IX)(ej)))
                    })
                }),
                eH = (0, b.dt)({
                    accountIndex: (0, b.Rx)(),
                    mint: (0, b.Z_)(),
                    owner: (0, b.jt)((0, b.Z_)()),
                    uiTokenAmount: el
                }),
                e$ = (0, b.dt)({
                    writable: (0, b.IX)(U),
                    readonly: (0, b.IX)(U)
                }),
                eV = (0, b.dt)({
                    err: V,
                    fee: (0, b.Rx)(),
                    innerInstructions: (0, b.jt)((0, b.AG)((0, b.IX)((0, b.dt)({
                        index: (0, b.Rx)(),
                        instructions: (0, b.IX)((0, b.dt)({
                            accounts: (0, b.IX)((0, b.Rx)()),
                            data: (0, b.Z_)(),
                            programIdIndex: (0, b.Rx)()
                        }))
                    })))),
                    preBalances: (0, b.IX)((0, b.Rx)()),
                    postBalances: (0, b.IX)((0, b.Rx)()),
                    logMessages: (0, b.jt)((0, b.AG)((0, b.IX)((0, b.Z_)()))),
                    preTokenBalances: (0, b.jt)((0, b.AG)((0, b.IX)(eH))),
                    postTokenBalances: (0, b.jt)((0, b.AG)((0, b.IX)(eH))),
                    loadedAddresses: (0, b.jt)(e$),
                    computeUnitsConsumed: (0, b.jt)((0, b.Rx)())
                }),
                eQ = (0, b.dt)({
                    err: V,
                    fee: (0, b.Rx)(),
                    innerInstructions: (0, b.jt)((0, b.AG)((0, b.IX)((0, b.dt)({
                        index: (0, b.Rx)(),
                        instructions: (0, b.IX)(eZ)
                    })))),
                    preBalances: (0, b.IX)((0, b.Rx)()),
                    postBalances: (0, b.IX)((0, b.Rx)()),
                    logMessages: (0, b.jt)((0, b.AG)((0, b.IX)((0, b.Z_)()))),
                    preTokenBalances: (0, b.jt)((0, b.AG)((0, b.IX)(eH))),
                    postTokenBalances: (0, b.jt)((0, b.AG)((0, b.IX)(eH))),
                    loadedAddresses: (0, b.jt)(e$),
                    computeUnitsConsumed: (0, b.jt)((0, b.Rx)())
                }),
                eY = (0, b.G0)([(0, b.i0)(0), (0, b.i0)("legacy")]),
                e0 = (0, b.dt)({
                    pubkey: (0, b.Z_)(),
                    lamports: (0, b.Rx)(),
                    postBalance: (0, b.AG)((0, b.Rx)()),
                    rewardType: (0, b.AG)((0, b.Z_)())
                }),
                e1 = jsonRpcResult((0, b.AG)((0, b.dt)({
                    blockhash: (0, b.Z_)(),
                    previousBlockhash: (0, b.Z_)(),
                    parentSlot: (0, b.Rx)(),
                    transactions: (0, b.IX)((0, b.dt)({
                        transaction: ez,
                        meta: (0, b.AG)(eV),
                        version: (0, b.jt)(eY)
                    })),
                    rewards: (0, b.jt)((0, b.IX)(e0)),
                    blockTime: (0, b.AG)((0, b.Rx)()),
                    blockHeight: (0, b.AG)((0, b.Rx)())
                }))),
                e8 = jsonRpcResult((0, b.AG)((0, b.dt)({
                    blockhash: (0, b.Z_)(),
                    previousBlockhash: (0, b.Z_)(),
                    parentSlot: (0, b.Rx)(),
                    rewards: (0, b.jt)((0, b.IX)(e0)),
                    blockTime: (0, b.AG)((0, b.Rx)()),
                    blockHeight: (0, b.AG)((0, b.Rx)())
                }))),
                e2 = jsonRpcResult((0, b.AG)((0, b.dt)({
                    blockhash: (0, b.Z_)(),
                    previousBlockhash: (0, b.Z_)(),
                    parentSlot: (0, b.Rx)(),
                    transactions: (0, b.IX)((0, b.dt)({
                        transaction: eU,
                        meta: (0, b.AG)(eV),
                        version: (0, b.jt)(eY)
                    })),
                    rewards: (0, b.jt)((0, b.IX)(e0)),
                    blockTime: (0, b.AG)((0, b.Rx)()),
                    blockHeight: (0, b.AG)((0, b.Rx)())
                }))),
                e5 = jsonRpcResult((0, b.AG)((0, b.dt)({
                    blockhash: (0, b.Z_)(),
                    previousBlockhash: (0, b.Z_)(),
                    parentSlot: (0, b.Rx)(),
                    transactions: (0, b.IX)((0, b.dt)({
                        transaction: eX,
                        meta: (0, b.AG)(eQ),
                        version: (0, b.jt)(eY)
                    })),
                    rewards: (0, b.jt)((0, b.IX)(e0)),
                    blockTime: (0, b.AG)((0, b.Rx)()),
                    blockHeight: (0, b.AG)((0, b.Rx)())
                }))),
                e6 = jsonRpcResult((0, b.AG)((0, b.dt)({
                    blockhash: (0, b.Z_)(),
                    previousBlockhash: (0, b.Z_)(),
                    parentSlot: (0, b.Rx)(),
                    transactions: (0, b.IX)((0, b.dt)({
                        transaction: eU,
                        meta: (0, b.AG)(eQ),
                        version: (0, b.jt)(eY)
                    })),
                    rewards: (0, b.jt)((0, b.IX)(e0)),
                    blockTime: (0, b.AG)((0, b.Rx)()),
                    blockHeight: (0, b.AG)((0, b.Rx)())
                }))),
                e4 = jsonRpcResult((0, b.AG)((0, b.dt)({
                    blockhash: (0, b.Z_)(),
                    previousBlockhash: (0, b.Z_)(),
                    parentSlot: (0, b.Rx)(),
                    rewards: (0, b.jt)((0, b.IX)(e0)),
                    blockTime: (0, b.AG)((0, b.Rx)()),
                    blockHeight: (0, b.AG)((0, b.Rx)())
                }))),
                e3 = jsonRpcResult((0, b.AG)((0, b.dt)({
                    blockhash: (0, b.Z_)(),
                    previousBlockhash: (0, b.Z_)(),
                    parentSlot: (0, b.Rx)(),
                    transactions: (0, b.IX)((0, b.dt)({
                        transaction: ez,
                        meta: (0, b.AG)(eV)
                    })),
                    rewards: (0, b.jt)((0, b.IX)(e0)),
                    blockTime: (0, b.AG)((0, b.Rx)())
                }))),
                e9 = jsonRpcResult((0, b.AG)((0, b.dt)({
                    blockhash: (0, b.Z_)(),
                    previousBlockhash: (0, b.Z_)(),
                    parentSlot: (0, b.Rx)(),
                    signatures: (0, b.IX)((0, b.Z_)()),
                    blockTime: (0, b.AG)((0, b.Rx)())
                }))),
                e7 = jsonRpcResult((0, b.AG)((0, b.dt)({
                    slot: (0, b.Rx)(),
                    meta: eV,
                    blockTime: (0, b.jt)((0, b.AG)((0, b.Rx)())),
                    transaction: ez,
                    version: (0, b.jt)(eY)
                }))),
                te = jsonRpcResult((0, b.AG)((0, b.dt)({
                    slot: (0, b.Rx)(),
                    transaction: eX,
                    meta: (0, b.AG)(eQ),
                    blockTime: (0, b.jt)((0, b.AG)((0, b.Rx)())),
                    version: (0, b.jt)(eY)
                }))),
                tt = jsonRpcResultAndContext((0, b.dt)({
                    blockhash: (0, b.Z_)(),
                    feeCalculator: (0, b.dt)({
                        lamportsPerSignature: (0, b.Rx)()
                    })
                })),
                tr = jsonRpcResultAndContext((0, b.dt)({
                    blockhash: (0, b.Z_)(),
                    lastValidBlockHeight: (0, b.Rx)()
                })),
                tn = (0, b.dt)({
                    slot: (0, b.Rx)(),
                    numTransactions: (0, b.Rx)(),
                    numSlots: (0, b.Rx)(),
                    samplePeriodSecs: (0, b.Rx)()
                }),
                ti = jsonRpcResult((0, b.IX)(tn)),
                ts = jsonRpcResultAndContext((0, b.AG)((0, b.dt)({
                    feeCalculator: (0, b.dt)({
                        lamportsPerSignature: (0, b.Rx)()
                    })
                }))),
                to = jsonRpcResult((0, b.Z_)()),
                ta = jsonRpcResult((0, b.Z_)()),
                tc = (0, b.dt)({
                    err: V,
                    logs: (0, b.IX)((0, b.Z_)()),
                    signature: (0, b.Z_)()
                }),
                tl = (0, b.dt)({
                    result: notificationResultAndContext(tc),
                    subscription: (0, b.Rx)()
                }),
                tu = {
                    "solana-client": "js/0.0.0-development"
                };
            let Connection = class Connection {
                constructor(e, t) {
                    var r, n;
                    let i, s, o, a, c, l;
                    this._commitment = void 0, this._confirmTransactionInitialTimeout = void 0, this._rpcEndpoint = void 0, this._rpcWsEndpoint = void 0, this._rpcClient = void 0, this._rpcRequest = void 0, this._rpcBatchRequest = void 0, this._rpcWebSocket = void 0, this._rpcWebSocketConnected = !1, this._rpcWebSocketHeartbeat = null, this._rpcWebSocketIdleTimeout = null, this._rpcWebSocketGeneration = 0, this._disableBlockhashCaching = !1, this._pollingBlockhash = !1, this._blockhashInfo = {
                        latestBlockhash: null,
                        lastFetch: 0,
                        transactionSignatures: [],
                        simulatedSignatures: []
                    }, this._nextClientSubscriptionId = 0, this._subscriptionDisposeFunctionsByClientSubscriptionId = {}, this._subscriptionHashByClientSubscriptionId = {}, this._subscriptionStateChangeCallbacksByHash = {}, this._subscriptionCallbacksByServerSubscriptionId = {}, this._subscriptionsByHash = {}, this._subscriptionsAutoDisposedByRpc = new Set, t && "string" == typeof t ? this._commitment = t : t && (this._commitment = t.commitment, this._confirmTransactionInitialTimeout = t.confirmTransactionInitialTimeout, i = t.wsEndpoint, s = t.httpHeaders, o = t.fetch, a = t.fetchMiddleware, c = t.disableRetryOnRateLimit, l = t.httpAgent), this._rpcEndpoint = function(e) {
                        if (!1 === /^https?:/.test(e)) throw TypeError("Endpoint URL must start with `http:` or `https:`.");
                        return e
                    }(e), this._rpcWsEndpoint = i || function(e) {
                        let t = e.match(J);
                        if (null == t) throw TypeError(`Failed to validate endpoint URL \`${e}\``);
                        let [r, n, i, s] = t, o = e.startsWith("https:") ? "wss:" : "ws:", a = null == i ? null : parseInt(i.slice(1), 10), c = null == a ? "" : `:${a+1}`;
                        return `${o}//${n}${c}${s}`
                    }(e), this._rpcClient = function(e, t, r, n, i, s) {
                        let o;
                        let a = r || j;
                        null != s && console.warn("You have supplied an `httpAgent` when creating a `Connection` in a browser environment.It has been ignored; `httpAgent` is only used in Node environments."), n && (o = async (e, t) => {
                            let r = await new Promise((r, i) => {
                                try {
                                    n(e, t, (e, t) => r([e, t]))
                                } catch (e) {
                                    i(e)
                                }
                            });
                            return await a(...r)
                        });
                        let c = new(k())(async (r, n) => {
                            let s = {
                                method: "POST",
                                body: r,
                                agent: void 0,
                                headers: Object.assign({
                                    "Content-Type": "application/json"
                                }, t || {}, tu)
                            };
                            try {
                                let t, r = 5,
                                    c = 500;
                                for (; t = o ? await o(e, s) : await a(e, s), 429 === t.status && !0 !== i && (r -= 1, 0 !== r);) console.log(`Server responded with ${t.status} ${t.statusText}.  Retrying after ${c}ms delay...`), await sleep(c), c *= 2;
                                let l = await t.text();
                                t.ok ? n(null, l) : n(Error(`${t.status} ${t.statusText}: ${l}`))
                            } catch (e) {
                                e instanceof Error && n(e)
                            } finally {}
                        }, {});
                        return c
                    }(e, s, o, a, c, l), this._rpcRequest = (r = this._rpcClient, (e, t) => new Promise((n, i) => {
                        r.request(e, t, (e, t) => {
                            if (e) {
                                i(e);
                                return
                            }
                            n(t)
                        })
                    })), this._rpcBatchRequest = (n = this._rpcClient, e => new Promise((t, r) => {
                        0 === e.length && t([]);
                        let i = e.map(e => n.request(e.methodName, e.args));
                        n.request(i, (e, n) => {
                            if (e) {
                                r(e);
                                return
                            }
                            t(n)
                        })
                    })), this._rpcWebSocket = new y.K(this._rpcWsEndpoint, {
                        autoconnect: !1,
                        max_reconnects: 1 / 0
                    }), this._rpcWebSocket.on("open", this._wsOnOpen.bind(this)), this._rpcWebSocket.on("error", this._wsOnError.bind(this)), this._rpcWebSocket.on("close", this._wsOnClose.bind(this)), this._rpcWebSocket.on("accountNotification", this._wsOnAccountNotification.bind(this)), this._rpcWebSocket.on("programNotification", this._wsOnProgramAccountNotification.bind(this)), this._rpcWebSocket.on("slotNotification", this._wsOnSlotNotification.bind(this)), this._rpcWebSocket.on("slotsUpdatesNotification", this._wsOnSlotUpdatesNotification.bind(this)), this._rpcWebSocket.on("signatureNotification", this._wsOnSignatureNotification.bind(this)), this._rpcWebSocket.on("rootNotification", this._wsOnRootNotification.bind(this)), this._rpcWebSocket.on("logsNotification", this._wsOnLogsNotification.bind(this))
                }
                get commitment() {
                    return this._commitment
                }
                get rpcEndpoint() {
                    return this._rpcEndpoint
                }
                async getBalanceAndContext(e, t) {
                    let {
                        commitment: r,
                        config: n
                    } = extractCommitmentFromConfig(t), i = this._buildArgs([e.toBase58()], r, void 0, n), s = await this._rpcRequest("getBalance", i), o = (0, b.Ue)(s, jsonRpcResultAndContext((0, b.Rx)()));
                    if ("error" in o) throw new SolanaJSONRPCError(o.error, `failed to get balance for ${e.toBase58()}`);
                    return o.result
                }
                async getBalance(e, t) {
                    return await this.getBalanceAndContext(e, t).then(e => e.value).catch(t => {
                        throw Error("failed to get balance of account " + e.toBase58() + ": " + t)
                    })
                }
                async getBlockTime(e) {
                    let t = await this._rpcRequest("getBlockTime", [e]),
                        r = (0, b.Ue)(t, jsonRpcResult((0, b.AG)((0, b.Rx)())));
                    if ("error" in r) throw new SolanaJSONRPCError(r.error, `failed to get block time for slot ${e}`);
                    return r.result
                }
                async getMinimumLedgerSlot() {
                    let e = await this._rpcRequest("minimumLedgerSlot", []),
                        t = (0, b.Ue)(e, jsonRpcResult((0, b.Rx)()));
                    if ("error" in t) throw new SolanaJSONRPCError(t.error, "failed to get minimum ledger slot");
                    return t.result
                }
                async getFirstAvailableBlock() {
                    let e = await this._rpcRequest("getFirstAvailableBlock", []),
                        t = (0, b.Ue)(e, ea);
                    if ("error" in t) throw new SolanaJSONRPCError(t.error, "failed to get first available block");
                    return t.result
                }
                async getSupply(e) {
                    let t = {};
                    t = "string" == typeof e ? {
                        commitment: e
                    } : e ? { ...e,
                        commitment: e && e.commitment || this.commitment
                    } : {
                        commitment: this.commitment
                    };
                    let r = await this._rpcRequest("getSupply", [t]),
                        n = (0, b.Ue)(r, ec);
                    if ("error" in n) throw new SolanaJSONRPCError(n.error, "failed to get supply");
                    return n.result
                }
                async getTokenSupply(e, t) {
                    let r = this._buildArgs([e.toBase58()], t),
                        n = await this._rpcRequest("getTokenSupply", r),
                        i = (0, b.Ue)(n, jsonRpcResultAndContext(el));
                    if ("error" in i) throw new SolanaJSONRPCError(i.error, "failed to get token supply");
                    return i.result
                }
                async getTokenAccountBalance(e, t) {
                    let r = this._buildArgs([e.toBase58()], t),
                        n = await this._rpcRequest("getTokenAccountBalance", r),
                        i = (0, b.Ue)(n, jsonRpcResultAndContext(el));
                    if ("error" in i) throw new SolanaJSONRPCError(i.error, "failed to get token account balance");
                    return i.result
                }
                async getTokenAccountsByOwner(e, t, r) {
                    let {
                        commitment: n,
                        config: i
                    } = extractCommitmentFromConfig(r), s = [e.toBase58()];
                    "mint" in t ? s.push({
                        mint: t.mint.toBase58()
                    }) : s.push({
                        programId: t.programId.toBase58()
                    });
                    let o = this._buildArgs(s, n, "base64", i),
                        a = await this._rpcRequest("getTokenAccountsByOwner", o),
                        c = (0, b.Ue)(a, ed);
                    if ("error" in c) throw new SolanaJSONRPCError(c.error, `failed to get token accounts owned by account ${e.toBase58()}`);
                    return c.result
                }
                async getParsedTokenAccountsByOwner(e, t, r) {
                    let n = [e.toBase58()];
                    "mint" in t ? n.push({
                        mint: t.mint.toBase58()
                    }) : n.push({
                        programId: t.programId.toBase58()
                    });
                    let i = this._buildArgs(n, r, "jsonParsed"),
                        s = await this._rpcRequest("getTokenAccountsByOwner", i),
                        o = (0, b.Ue)(s, eg);
                    if ("error" in o) throw new SolanaJSONRPCError(o.error, `failed to get token accounts owned by account ${e.toBase58()}`);
                    return o.result
                }
                async getLargestAccounts(e) {
                    let t = { ...e,
                            commitment: e && e.commitment || this.commitment
                        },
                        r = t.filter || t.commitment ? [t] : [],
                        n = await this._rpcRequest("getLargestAccounts", r),
                        i = (0, b.Ue)(n, ep);
                    if ("error" in i) throw new SolanaJSONRPCError(i.error, "failed to get largest accounts");
                    return i.result
                }
                async getTokenLargestAccounts(e, t) {
                    let r = this._buildArgs([e.toBase58()], t),
                        n = await this._rpcRequest("getTokenLargestAccounts", r),
                        i = (0, b.Ue)(n, eu);
                    if ("error" in i) throw new SolanaJSONRPCError(i.error, "failed to get token largest accounts");
                    return i.result
                }
                async getAccountInfoAndContext(e, t) {
                    let {
                        commitment: r,
                        config: n
                    } = extractCommitmentFromConfig(t), i = this._buildArgs([e.toBase58()], r, "base64", n), s = await this._rpcRequest("getAccountInfo", i), o = (0, b.Ue)(s, jsonRpcResultAndContext((0, b.AG)(em)));
                    if ("error" in o) throw new SolanaJSONRPCError(o.error, `failed to get info about account ${e.toBase58()}`);
                    return o.result
                }
                async getParsedAccountInfo(e, t) {
                    let {
                        commitment: r,
                        config: n
                    } = extractCommitmentFromConfig(t), i = this._buildArgs([e.toBase58()], r, "jsonParsed", n), s = await this._rpcRequest("getAccountInfo", i), o = (0, b.Ue)(s, jsonRpcResultAndContext((0, b.AG)(ey)));
                    if ("error" in o) throw new SolanaJSONRPCError(o.error, `failed to get info about account ${e.toBase58()}`);
                    return o.result
                }
                async getAccountInfo(e, t) {
                    try {
                        let r = await this.getAccountInfoAndContext(e, t);
                        return r.value
                    } catch (t) {
                        throw Error("failed to get info about account " + e.toBase58() + ": " + t)
                    }
                }
                async getMultipleParsedAccounts(e, t) {
                    let {
                        commitment: r,
                        config: n
                    } = extractCommitmentFromConfig(t), i = e.map(e => e.toBase58()), s = this._buildArgs([i], r, "jsonParsed", n), o = await this._rpcRequest("getMultipleAccounts", s), a = (0, b.Ue)(o, jsonRpcResultAndContext((0, b.IX)((0, b.AG)(ey))));
                    if ("error" in a) throw new SolanaJSONRPCError(a.error, `failed to get info for accounts ${i}`);
                    return a.result
                }
                async getMultipleAccountsInfoAndContext(e, t) {
                    let {
                        commitment: r,
                        config: n
                    } = extractCommitmentFromConfig(t), i = e.map(e => e.toBase58()), s = this._buildArgs([i], r, "base64", n), o = await this._rpcRequest("getMultipleAccounts", s), a = (0, b.Ue)(o, jsonRpcResultAndContext((0, b.IX)((0, b.AG)(em))));
                    if ("error" in a) throw new SolanaJSONRPCError(a.error, `failed to get info for accounts ${i}`);
                    return a.result
                }
                async getMultipleAccountsInfo(e, t) {
                    let r = await this.getMultipleAccountsInfoAndContext(e, t);
                    return r.value
                }
                async getStakeActivation(e, t, r) {
                    let {
                        commitment: n,
                        config: i
                    } = extractCommitmentFromConfig(t), s = this._buildArgs([e.toBase58()], n, void 0, { ...i,
                        epoch: null != r ? r : null == i ? void 0 : i.epoch
                    }), o = await this._rpcRequest("getStakeActivation", s), a = (0, b.Ue)(o, jsonRpcResult(ek));
                    if ("error" in a) throw new SolanaJSONRPCError(a.error, `failed to get Stake Activation ${e.toBase58()}`);
                    return a.result
                }
                async getProgramAccounts(e, t) {
                    let {
                        commitment: r,
                        config: n
                    } = extractCommitmentFromConfig(t), {
                        encoding: i,
                        ...s
                    } = n || {}, o = this._buildArgs([e.toBase58()], r, i || "base64", s), a = await this._rpcRequest("getProgramAccounts", o), c = (0, b.Ue)(a, jsonRpcResult((0, b.IX)(ef)));
                    if ("error" in c) throw new SolanaJSONRPCError(c.error, `failed to get accounts owned by program ${e.toBase58()}`);
                    return c.result
                }
                async getParsedProgramAccounts(e, t) {
                    let {
                        commitment: r,
                        config: n
                    } = extractCommitmentFromConfig(t), i = this._buildArgs([e.toBase58()], r, "jsonParsed", n), s = await this._rpcRequest("getProgramAccounts", i), o = (0, b.Ue)(s, jsonRpcResult((0, b.IX)(eS)));
                    if ("error" in o) throw new SolanaJSONRPCError(o.error, `failed to get accounts owned by program ${e.toBase58()}`);
                    return o.result
                }
                async confirmTransaction(e, t) {
                    let r, n;
                    if ("string" == typeof e) r = e;
                    else {
                        var i;
                        if (null !== (i = e.abortSignal) && void 0 !== i && i.aborted) return Promise.reject(e.abortSignal.reason);
                        r = e.signature
                    }
                    try {
                        n = h().decode(r)
                    } catch (e) {
                        throw Error("signature must be base58 encoded: " + r)
                    }
                    return (assert(64 === n.length, "signature has invalid length"), "string" == typeof e) ? await this.confirmTransactionUsingLegacyTimeoutStrategy({
                        commitment: t || this.commitment,
                        signature: r
                    }) : "lastValidBlockHeight" in e ? await this.confirmTransactionUsingBlockHeightExceedanceStrategy({
                        commitment: t || this.commitment,
                        strategy: e
                    }) : await this.confirmTransactionUsingDurableNonceStrategy({
                        commitment: t || this.commitment,
                        strategy: e
                    })
                }
                getCancellationPromise(e) {
                    return new Promise((t, r) => {
                        null != e && (e.aborted ? r(e.reason) : e.addEventListener("abort", () => {
                            r(e.reason)
                        }))
                    })
                }
                getTransactionConfirmationPromise({
                    commitment: e,
                    signature: t
                }) {
                    let r, n;
                    let s = !1,
                        o = new Promise((o, a) => {
                            try {
                                r = this.onSignature(t, (e, t) => {
                                    r = void 0, o({
                                        __type: i.PROCESSED,
                                        response: {
                                            context: t,
                                            value: e
                                        }
                                    })
                                }, e);
                                let c = new Promise(e => {
                                    null == r ? e() : n = this._onSubscriptionStateChange(r, t => {
                                        "subscribed" === t && e()
                                    })
                                });
                                (async () => {
                                    if (await c, s) return;
                                    let r = await this.getSignatureStatus(t);
                                    if (s || null == r) return;
                                    let {
                                        context: n,
                                        value: l
                                    } = r;
                                    if (null != l) {
                                        if (null != l && l.err) a(l.err);
                                        else {
                                            switch (e) {
                                                case "confirmed":
                                                case "single":
                                                case "singleGossip":
                                                    if ("processed" === l.confirmationStatus) return;
                                                    break;
                                                case "finalized":
                                                case "max":
                                                case "root":
                                                    if ("processed" === l.confirmationStatus || "confirmed" === l.confirmationStatus) return
                                            }
                                            s = !0, o({
                                                __type: i.PROCESSED,
                                                response: {
                                                    context: n,
                                                    value: l
                                                }
                                            })
                                        }
                                    }
                                })()
                            } catch (e) {
                                a(e)
                            }
                        });
                    return {
                        abortConfirmation: () => {
                            n && (n(), n = void 0), null != r && (this.removeSignatureListener(r), r = void 0)
                        },
                        confirmationPromise: o
                    }
                }
                async confirmTransactionUsingBlockHeightExceedanceStrategy({
                    commitment: e,
                    strategy: {
                        abortSignal: t,
                        lastValidBlockHeight: r,
                        signature: n
                    }
                }) {
                    let s, o = !1,
                        a = new Promise(t => {
                            let checkBlockHeight = async () => {
                                try {
                                    let t = await this.getBlockHeight(e);
                                    return t
                                } catch (e) {
                                    return -1
                                }
                            };
                            (async () => {
                                let e = await checkBlockHeight();
                                if (!o) {
                                    for (; e <= r;)
                                        if (await sleep(1e3), o || (e = await checkBlockHeight(), o)) return;
                                    t({
                                        __type: i.BLOCKHEIGHT_EXCEEDED
                                    })
                                }
                            })()
                        }),
                        {
                            abortConfirmation: c,
                            confirmationPromise: l
                        } = this.getTransactionConfirmationPromise({
                            commitment: e,
                            signature: n
                        }),
                        u = this.getCancellationPromise(t);
                    try {
                        let e = await Promise.race([u, l, a]);
                        if (e.__type === i.PROCESSED) s = e.response;
                        else throw new TransactionExpiredBlockheightExceededError(n)
                    } finally {
                        o = !0, c()
                    }
                    return s
                }
                async confirmTransactionUsingDurableNonceStrategy({
                    commitment: e,
                    strategy: {
                        abortSignal: t,
                        minContextSlot: r,
                        nonceAccountPubkey: n,
                        nonceValue: s,
                        signature: o
                    }
                }) {
                    let a, c = !1,
                        l = new Promise(t => {
                            let o = s,
                                a = null,
                                getCurrentNonceValue = async () => {
                                    try {
                                        let {
                                            context: t,
                                            value: i
                                        } = await this.getNonceAndContext(n, {
                                            commitment: e,
                                            minContextSlot: r
                                        });
                                        return a = t.slot, null == i ? void 0 : i.nonce
                                    } catch (e) {
                                        return o
                                    }
                                };
                            (async () => {
                                if (o = await getCurrentNonceValue(), !c)
                                    for (;;) {
                                        if (s !== o) {
                                            t({
                                                __type: i.NONCE_INVALID,
                                                slotInWhichNonceDidAdvance: a
                                            });
                                            return
                                        }
                                        if (await sleep(2e3), c || (o = await getCurrentNonceValue(), c)) return
                                    }
                            })()
                        }),
                        {
                            abortConfirmation: u,
                            confirmationPromise: d
                        } = this.getTransactionConfirmationPromise({
                            commitment: e,
                            signature: o
                        }),
                        h = this.getCancellationPromise(t);
                    try {
                        let t = await Promise.race([h, d, l]);
                        if (t.__type === i.PROCESSED) a = t.response;
                        else {
                            var g, p;
                            let n;
                            for (;;) {
                                let e = await this.getSignatureStatus(o);
                                if (null == e) break;
                                if (e.context.slot < (null !== (p = t.slotInWhichNonceDidAdvance) && void 0 !== p ? p : r)) {
                                    await sleep(400);
                                    continue
                                }
                                n = e;
                                break
                            }
                            if (null !== (g = n) && void 0 !== g && g.value) {
                                let t = e || "finalized",
                                    {
                                        confirmationStatus: r
                                    } = n.value;
                                switch (t) {
                                    case "processed":
                                    case "recent":
                                        if ("processed" !== r && "confirmed" !== r && "finalized" !== r) throw new TransactionExpiredNonceInvalidError(o);
                                        break;
                                    case "confirmed":
                                    case "single":
                                    case "singleGossip":
                                        if ("confirmed" !== r && "finalized" !== r) throw new TransactionExpiredNonceInvalidError(o);
                                        break;
                                    case "finalized":
                                    case "max":
                                    case "root":
                                        if ("finalized" !== r) throw new TransactionExpiredNonceInvalidError(o)
                                }
                                a = {
                                    context: n.context,
                                    value: {
                                        err: n.value.err
                                    }
                                }
                            } else throw new TransactionExpiredNonceInvalidError(o)
                        }
                    } finally {
                        c = !0, u()
                    }
                    return a
                }
                async confirmTransactionUsingLegacyTimeoutStrategy({
                    commitment: e,
                    signature: t
                }) {
                    let r, n;
                    let s = new Promise(t => {
                            let n = this._confirmTransactionInitialTimeout || 6e4;
                            switch (e) {
                                case "processed":
                                case "recent":
                                case "single":
                                case "confirmed":
                                case "singleGossip":
                                    n = this._confirmTransactionInitialTimeout || 3e4
                            }
                            r = setTimeout(() => t({
                                __type: i.TIMED_OUT,
                                timeoutMs: n
                            }), n)
                        }),
                        {
                            abortConfirmation: o,
                            confirmationPromise: a
                        } = this.getTransactionConfirmationPromise({
                            commitment: e,
                            signature: t
                        });
                    try {
                        let e = await Promise.race([a, s]);
                        if (e.__type === i.PROCESSED) n = e.response;
                        else throw new TransactionExpiredTimeoutError(t, e.timeoutMs / 1e3)
                    } finally {
                        clearTimeout(r), o()
                    }
                    return n
                }
                async getClusterNodes() {
                    let e = await this._rpcRequest("getClusterNodes", []),
                        t = (0, b.Ue)(e, jsonRpcResult((0, b.IX)(eT)));
                    if ("error" in t) throw new SolanaJSONRPCError(t.error, "failed to get cluster nodes");
                    return t.result
                }
                async getVoteAccounts(e) {
                    let t = this._buildArgs([], e),
                        r = await this._rpcRequest("getVoteAccounts", t),
                        n = (0, b.Ue)(r, eW);
                    if ("error" in n) throw new SolanaJSONRPCError(n.error, "failed to get vote accounts");
                    return n.result
                }
                async getSlot(e) {
                    let {
                        commitment: t,
                        config: r
                    } = extractCommitmentFromConfig(e), n = this._buildArgs([], t, void 0, r), i = await this._rpcRequest("getSlot", n), s = (0, b.Ue)(i, jsonRpcResult((0, b.Rx)()));
                    if ("error" in s) throw new SolanaJSONRPCError(s.error, "failed to get slot");
                    return s.result
                }
                async getSlotLeader(e) {
                    let {
                        commitment: t,
                        config: r
                    } = extractCommitmentFromConfig(e), n = this._buildArgs([], t, void 0, r), i = await this._rpcRequest("getSlotLeader", n), s = (0, b.Ue)(i, jsonRpcResult((0, b.Z_)()));
                    if ("error" in s) throw new SolanaJSONRPCError(s.error, "failed to get slot leader");
                    return s.result
                }
                async getSlotLeaders(e, t) {
                    let r = await this._rpcRequest("getSlotLeaders", [e, t]),
                        n = (0, b.Ue)(r, jsonRpcResult((0, b.IX)(U)));
                    if ("error" in n) throw new SolanaJSONRPCError(n.error, "failed to get slot leaders");
                    return n.result
                }
                async getSignatureStatus(e, t) {
                    let {
                        context: r,
                        value: n
                    } = await this.getSignatureStatuses([e], t);
                    assert(1 === n.length);
                    let i = n[0];
                    return {
                        context: r,
                        value: i
                    }
                }
                async getSignatureStatuses(e, t) {
                    let r = [e];
                    t && r.push(t);
                    let n = await this._rpcRequest("getSignatureStatuses", r),
                        i = (0, b.Ue)(n, eL);
                    if ("error" in i) throw new SolanaJSONRPCError(i.error, "failed to get signature status");
                    return i.result
                }
                async getTransactionCount(e) {
                    let {
                        commitment: t,
                        config: r
                    } = extractCommitmentFromConfig(e), n = this._buildArgs([], t, void 0, r), i = await this._rpcRequest("getTransactionCount", n), s = (0, b.Ue)(i, jsonRpcResult((0, b.Rx)()));
                    if ("error" in s) throw new SolanaJSONRPCError(s.error, "failed to get transaction count");
                    return s.result
                }
                async getTotalSupply(e) {
                    let t = await this.getSupply({
                        commitment: e,
                        excludeNonCirculatingAccountsList: !0
                    });
                    return t.value.total
                }
                async getInflationGovernor(e) {
                    let t = this._buildArgs([], e),
                        r = await this._rpcRequest("getInflationGovernor", t),
                        n = (0, b.Ue)(r, en);
                    if ("error" in n) throw new SolanaJSONRPCError(n.error, "failed to get inflation");
                    return n.result
                }
                async getInflationReward(e, t, r) {
                    let {
                        commitment: n,
                        config: i
                    } = extractCommitmentFromConfig(r), s = this._buildArgs([e.map(e => e.toBase58())], n, void 0, { ...i,
                        epoch: null != t ? t : null == i ? void 0 : i.epoch
                    }), o = await this._rpcRequest("getInflationReward", s), a = (0, b.Ue)(o, Z);
                    if ("error" in a) throw new SolanaJSONRPCError(a.error, "failed to get inflation reward");
                    return a.result
                }
                async getEpochInfo(e) {
                    let {
                        commitment: t,
                        config: r
                    } = extractCommitmentFromConfig(e), n = this._buildArgs([], t, void 0, r), i = await this._rpcRequest("getEpochInfo", n), s = (0, b.Ue)(i, ei);
                    if ("error" in s) throw new SolanaJSONRPCError(s.error, "failed to get epoch info");
                    return s.result
                }
                async getEpochSchedule() {
                    let e = await this._rpcRequest("getEpochSchedule", []),
                        t = (0, b.Ue)(e, es);
                    if ("error" in t) throw new SolanaJSONRPCError(t.error, "failed to get epoch schedule");
                    let r = t.result;
                    return new EpochSchedule(r.slotsPerEpoch, r.leaderScheduleSlotOffset, r.warmup, r.firstNormalEpoch, r.firstNormalSlot)
                }
                async getLeaderSchedule() {
                    let e = await this._rpcRequest("getLeaderSchedule", []),
                        t = (0, b.Ue)(e, eo);
                    if ("error" in t) throw new SolanaJSONRPCError(t.error, "failed to get leader schedule");
                    return t.result
                }
                async getMinimumBalanceForRentExemption(e, t) {
                    let r = this._buildArgs([e], t),
                        n = await this._rpcRequest("getMinimumBalanceForRentExemption", r),
                        i = (0, b.Ue)(n, eq);
                    return "error" in i ? (console.warn("Unable to fetch minimum balance for rent exemption"), 0) : i.result
                }
                async getRecentBlockhashAndContext(e) {
                    let t = this._buildArgs([], e),
                        r = await this._rpcRequest("getRecentBlockhash", t),
                        n = (0, b.Ue)(r, tt);
                    if ("error" in n) throw new SolanaJSONRPCError(n.error, "failed to get recent blockhash");
                    return n.result
                }
                async getRecentPerformanceSamples(e) {
                    let t = await this._rpcRequest("getRecentPerformanceSamples", e ? [e] : []),
                        r = (0, b.Ue)(t, ti);
                    if ("error" in r) throw new SolanaJSONRPCError(r.error, "failed to get recent performance samples");
                    return r.result
                }
                async getFeeCalculatorForBlockhash(e, t) {
                    let r = this._buildArgs([e], t),
                        n = await this._rpcRequest("getFeeCalculatorForBlockhash", r),
                        i = (0, b.Ue)(n, ts);
                    if ("error" in i) throw new SolanaJSONRPCError(i.error, "failed to get fee calculator");
                    let {
                        context: s,
                        value: o
                    } = i.result;
                    return {
                        context: s,
                        value: null !== o ? o.feeCalculator : null
                    }
                }
                async getFeeForMessage(e, t) {
                    let r = toBuffer(e.serialize()).toString("base64"),
                        n = this._buildArgs([r], t),
                        i = await this._rpcRequest("getFeeForMessage", n),
                        s = (0, b.Ue)(i, jsonRpcResultAndContext((0, b.AG)((0, b.Rx)())));
                    if ("error" in s) throw new SolanaJSONRPCError(s.error, "failed to get fee for message");
                    if (null === s.result) throw Error("invalid blockhash");
                    return s.result
                }
                async getRecentBlockhash(e) {
                    try {
                        let t = await this.getRecentBlockhashAndContext(e);
                        return t.value
                    } catch (e) {
                        throw Error("failed to get recent blockhash: " + e)
                    }
                }
                async getLatestBlockhash(e) {
                    try {
                        let t = await this.getLatestBlockhashAndContext(e);
                        return t.value
                    } catch (e) {
                        throw Error("failed to get recent blockhash: " + e)
                    }
                }
                async getLatestBlockhashAndContext(e) {
                    let {
                        commitment: t,
                        config: r
                    } = extractCommitmentFromConfig(e), n = this._buildArgs([], t, void 0, r), i = await this._rpcRequest("getLatestBlockhash", n), s = (0, b.Ue)(i, tr);
                    if ("error" in s) throw new SolanaJSONRPCError(s.error, "failed to get latest blockhash");
                    return s.result
                }
                async getVersion() {
                    let e = await this._rpcRequest("getVersion", []),
                        t = (0, b.Ue)(e, jsonRpcResult(ee));
                    if ("error" in t) throw new SolanaJSONRPCError(t.error, "failed to get version");
                    return t.result
                }
                async getGenesisHash() {
                    let e = await this._rpcRequest("getGenesisHash", []),
                        t = (0, b.Ue)(e, jsonRpcResult((0, b.Z_)()));
                    if ("error" in t) throw new SolanaJSONRPCError(t.error, "failed to get genesis hash");
                    return t.result
                }
                async getBlock(e, t) {
                    let {
                        commitment: r,
                        config: n
                    } = extractCommitmentFromConfig(t), i = this._buildArgsAtLeastConfirmed([e], r, void 0, n), s = await this._rpcRequest("getBlock", i);
                    try {
                        switch (null == n ? void 0 : n.transactionDetails) {
                            case "accounts":
                                {
                                    let e = (0, b.Ue)(s, e2);
                                    if ("error" in e) throw e.error;
                                    return e.result
                                }
                            case "none":
                                {
                                    let e = (0, b.Ue)(s, e8);
                                    if ("error" in e) throw e.error;
                                    return e.result
                                }
                            default:
                                {
                                    let e = (0, b.Ue)(s, e1);
                                    if ("error" in e) throw e.error;
                                    let {
                                        result: t
                                    } = e;
                                    return t ? { ...t,
                                        transactions: t.transactions.map(({
                                            transaction: e,
                                            meta: t,
                                            version: r
                                        }) => ({
                                            meta: t,
                                            transaction: { ...e,
                                                message: versionedMessageFromResponse(r, e.message)
                                            },
                                            version: r
                                        }))
                                    } : null
                                }
                        }
                    } catch (e) {
                        throw new SolanaJSONRPCError(e, "failed to get confirmed block")
                    }
                }
                async getParsedBlock(e, t) {
                    let {
                        commitment: r,
                        config: n
                    } = extractCommitmentFromConfig(t), i = this._buildArgsAtLeastConfirmed([e], r, "jsonParsed", n), s = await this._rpcRequest("getBlock", i);
                    try {
                        switch (null == n ? void 0 : n.transactionDetails) {
                            case "accounts":
                                {
                                    let e = (0, b.Ue)(s, e6);
                                    if ("error" in e) throw e.error;
                                    return e.result
                                }
                            case "none":
                                {
                                    let e = (0, b.Ue)(s, e4);
                                    if ("error" in e) throw e.error;
                                    return e.result
                                }
                            default:
                                {
                                    let e = (0, b.Ue)(s, e5);
                                    if ("error" in e) throw e.error;
                                    return e.result
                                }
                        }
                    } catch (e) {
                        throw new SolanaJSONRPCError(e, "failed to get block")
                    }
                }
                async getBlockHeight(e) {
                    let {
                        commitment: t,
                        config: r
                    } = extractCommitmentFromConfig(e), n = this._buildArgs([], t, void 0, r), i = await this._rpcRequest("getBlockHeight", n), s = (0, b.Ue)(i, jsonRpcResult((0, b.Rx)()));
                    if ("error" in s) throw new SolanaJSONRPCError(s.error, "failed to get block height information");
                    return s.result
                }
                async getBlockProduction(e) {
                    let t, r;
                    if ("string" == typeof e) r = e;
                    else if (e) {
                        let {
                            commitment: n,
                            ...i
                        } = e;
                        r = n, t = i
                    }
                    let n = this._buildArgs([], r, "base64", t),
                        i = await this._rpcRequest("getBlockProduction", n),
                        s = (0, b.Ue)(i, er);
                    if ("error" in s) throw new SolanaJSONRPCError(s.error, "failed to get block production information");
                    return s.result
                }
                async getTransaction(e, t) {
                    let {
                        commitment: r,
                        config: n
                    } = extractCommitmentFromConfig(t), i = this._buildArgsAtLeastConfirmed([e], r, void 0, n), s = await this._rpcRequest("getTransaction", i), o = (0, b.Ue)(s, e7);
                    if ("error" in o) throw new SolanaJSONRPCError(o.error, "failed to get transaction");
                    let a = o.result;
                    return a ? { ...a,
                        transaction: { ...a.transaction,
                            message: versionedMessageFromResponse(a.version, a.transaction.message)
                        }
                    } : a
                }
                async getParsedTransaction(e, t) {
                    let {
                        commitment: r,
                        config: n
                    } = extractCommitmentFromConfig(t), i = this._buildArgsAtLeastConfirmed([e], r, "jsonParsed", n), s = await this._rpcRequest("getTransaction", i), o = (0, b.Ue)(s, te);
                    if ("error" in o) throw new SolanaJSONRPCError(o.error, "failed to get transaction");
                    return o.result
                }
                async getParsedTransactions(e, t) {
                    let {
                        commitment: r,
                        config: n
                    } = extractCommitmentFromConfig(t), i = e.map(e => {
                        let t = this._buildArgsAtLeastConfirmed([e], r, "jsonParsed", n);
                        return {
                            methodName: "getTransaction",
                            args: t
                        }
                    }), s = await this._rpcBatchRequest(i), o = s.map(e => {
                        let t = (0, b.Ue)(e, te);
                        if ("error" in t) throw new SolanaJSONRPCError(t.error, "failed to get transactions");
                        return t.result
                    });
                    return o
                }
                async getTransactions(e, t) {
                    let {
                        commitment: r,
                        config: n
                    } = extractCommitmentFromConfig(t), i = e.map(e => {
                        let t = this._buildArgsAtLeastConfirmed([e], r, void 0, n);
                        return {
                            methodName: "getTransaction",
                            args: t
                        }
                    }), s = await this._rpcBatchRequest(i), o = s.map(e => {
                        let t = (0, b.Ue)(e, e7);
                        if ("error" in t) throw new SolanaJSONRPCError(t.error, "failed to get transactions");
                        let r = t.result;
                        return r ? { ...r,
                            transaction: { ...r.transaction,
                                message: versionedMessageFromResponse(r.version, r.transaction.message)
                            }
                        } : r
                    });
                    return o
                }
                async getConfirmedBlock(e, t) {
                    let r = this._buildArgsAtLeastConfirmed([e], t),
                        n = await this._rpcRequest("getConfirmedBlock", r),
                        i = (0, b.Ue)(n, e3);
                    if ("error" in i) throw new SolanaJSONRPCError(i.error, "failed to get confirmed block");
                    let s = i.result;
                    if (!s) throw Error("Confirmed block " + e + " not found");
                    let o = { ...s,
                        transactions: s.transactions.map(({
                            transaction: e,
                            meta: t
                        }) => {
                            let r = new Message(e.message);
                            return {
                                meta: t,
                                transaction: { ...e,
                                    message: r
                                }
                            }
                        })
                    };
                    return { ...o,
                        transactions: o.transactions.map(({
                            transaction: e,
                            meta: t
                        }) => ({
                            meta: t,
                            transaction: Transaction.populate(e.message, e.signatures)
                        }))
                    }
                }
                async getBlocks(e, t, r) {
                    let n = this._buildArgsAtLeastConfirmed(void 0 !== t ? [e, t] : [e], r),
                        i = await this._rpcRequest("getBlocks", n),
                        s = (0, b.Ue)(i, jsonRpcResult((0, b.IX)((0, b.Rx)())));
                    if ("error" in s) throw new SolanaJSONRPCError(s.error, "failed to get blocks");
                    return s.result
                }
                async getBlockSignatures(e, t) {
                    let r = this._buildArgsAtLeastConfirmed([e], t, void 0, {
                            transactionDetails: "signatures",
                            rewards: !1
                        }),
                        n = await this._rpcRequest("getBlock", r),
                        i = (0, b.Ue)(n, e9);
                    if ("error" in i) throw new SolanaJSONRPCError(i.error, "failed to get block");
                    let s = i.result;
                    if (!s) throw Error("Block " + e + " not found");
                    return s
                }
                async getConfirmedBlockSignatures(e, t) {
                    let r = this._buildArgsAtLeastConfirmed([e], t, void 0, {
                            transactionDetails: "signatures",
                            rewards: !1
                        }),
                        n = await this._rpcRequest("getConfirmedBlock", r),
                        i = (0, b.Ue)(n, e9);
                    if ("error" in i) throw new SolanaJSONRPCError(i.error, "failed to get confirmed block");
                    let s = i.result;
                    if (!s) throw Error("Confirmed block " + e + " not found");
                    return s
                }
                async getConfirmedTransaction(e, t) {
                    let r = this._buildArgsAtLeastConfirmed([e], t),
                        n = await this._rpcRequest("getConfirmedTransaction", r),
                        i = (0, b.Ue)(n, e7);
                    if ("error" in i) throw new SolanaJSONRPCError(i.error, "failed to get transaction");
                    let s = i.result;
                    if (!s) return s;
                    let o = new Message(s.transaction.message),
                        a = s.transaction.signatures;
                    return { ...s,
                        transaction: Transaction.populate(o, a)
                    }
                }
                async getParsedConfirmedTransaction(e, t) {
                    let r = this._buildArgsAtLeastConfirmed([e], t, "jsonParsed"),
                        n = await this._rpcRequest("getConfirmedTransaction", r),
                        i = (0, b.Ue)(n, te);
                    if ("error" in i) throw new SolanaJSONRPCError(i.error, "failed to get confirmed transaction");
                    return i.result
                }
                async getParsedConfirmedTransactions(e, t) {
                    let r = e.map(e => {
                            let r = this._buildArgsAtLeastConfirmed([e], t, "jsonParsed");
                            return {
                                methodName: "getConfirmedTransaction",
                                args: r
                            }
                        }),
                        n = await this._rpcBatchRequest(r),
                        i = n.map(e => {
                            let t = (0, b.Ue)(e, te);
                            if ("error" in t) throw new SolanaJSONRPCError(t.error, "failed to get confirmed transactions");
                            return t.result
                        });
                    return i
                }
                async getConfirmedSignaturesForAddress(e, t, r) {
                    let n = {},
                        i = await this.getFirstAvailableBlock();
                    for (; !("until" in n) && !(--t <= 0) && !(t < i);) try {
                        let e = await this.getConfirmedBlockSignatures(t, "finalized");
                        e.signatures.length > 0 && (n.until = e.signatures[e.signatures.length - 1].toString())
                    } catch (e) {
                        if (e instanceof Error && e.message.includes("skipped")) continue;
                        throw e
                    }
                    let s = await this.getSlot("finalized");
                    for (; !("before" in n) && !(++r > s);) try {
                        let e = await this.getConfirmedBlockSignatures(r);
                        e.signatures.length > 0 && (n.before = e.signatures[e.signatures.length - 1].toString())
                    } catch (e) {
                        if (e instanceof Error && e.message.includes("skipped")) continue;
                        throw e
                    }
                    let o = await this.getConfirmedSignaturesForAddress2(e, n);
                    return o.map(e => e.signature)
                }
                async getConfirmedSignaturesForAddress2(e, t, r) {
                    let n = this._buildArgsAtLeastConfirmed([e.toBase58()], r, void 0, t),
                        i = await this._rpcRequest("getConfirmedSignaturesForAddress2", n),
                        s = (0, b.Ue)(i, ew);
                    if ("error" in s) throw new SolanaJSONRPCError(s.error, "failed to get confirmed signatures for address");
                    return s.result
                }
                async getSignaturesForAddress(e, t, r) {
                    let n = this._buildArgsAtLeastConfirmed([e.toBase58()], r, void 0, t),
                        i = await this._rpcRequest("getSignaturesForAddress", n),
                        s = (0, b.Ue)(i, e_);
                    if ("error" in s) throw new SolanaJSONRPCError(s.error, "failed to get signatures for address");
                    return s.result
                }
                async getAddressLookupTable(e, t) {
                    let {
                        context: r,
                        value: n
                    } = await this.getAccountInfoAndContext(e, t), i = null;
                    return null !== n && (i = new AddressLookupTableAccount({
                        key: e,
                        state: AddressLookupTableAccount.deserialize(n.data)
                    })), {
                        context: r,
                        value: i
                    }
                }
                async getNonceAndContext(e, t) {
                    let {
                        context: r,
                        value: n
                    } = await this.getAccountInfoAndContext(e, t), i = null;
                    return null !== n && (i = NonceAccount.fromAccountData(n.data)), {
                        context: r,
                        value: i
                    }
                }
                async getNonce(e, t) {
                    return await this.getNonceAndContext(e, t).then(e => e.value).catch(t => {
                        throw Error("failed to get nonce for account " + e.toBase58() + ": " + t)
                    })
                }
                async requestAirdrop(e, t) {
                    let r = await this._rpcRequest("requestAirdrop", [e.toBase58(), t]),
                        n = (0, b.Ue)(r, to);
                    if ("error" in n) throw new SolanaJSONRPCError(n.error, `airdrop to ${e.toBase58()} failed`);
                    return n.result
                }
                async _blockhashWithExpiryBlockHeight(e) {
                    if (!e) {
                        for (; this._pollingBlockhash;) await sleep(100);
                        let e = Date.now() - this._blockhashInfo.lastFetch;
                        if (null !== this._blockhashInfo.latestBlockhash && !(e >= 3e4)) return this._blockhashInfo.latestBlockhash
                    }
                    return await this._pollNewBlockhash()
                }
                async _pollNewBlockhash() {
                    this._pollingBlockhash = !0;
                    try {
                        let e = Date.now(),
                            t = this._blockhashInfo.latestBlockhash,
                            r = t ? t.blockhash : null;
                        for (let e = 0; e < 50; e++) {
                            let e = await this.getLatestBlockhash("finalized");
                            if (r !== e.blockhash) return this._blockhashInfo = {
                                latestBlockhash: e,
                                lastFetch: Date.now(),
                                transactionSignatures: [],
                                simulatedSignatures: []
                            }, e;
                            await sleep(200)
                        }
                        throw Error(`Unable to obtain a new blockhash after ${Date.now()-e}ms`)
                    } finally {
                        this._pollingBlockhash = !1
                    }
                }
                async getStakeMinimumDelegation(e) {
                    let {
                        commitment: t,
                        config: r
                    } = extractCommitmentFromConfig(e), n = this._buildArgs([], t, "base64", r), i = await this._rpcRequest("getStakeMinimumDelegation", n), s = (0, b.Ue)(i, jsonRpcResultAndContext((0, b.Rx)()));
                    if ("error" in s) throw new SolanaJSONRPCError(s.error, "failed to get stake minimum delegation");
                    return s.result
                }
                async simulateTransaction(e, t, r) {
                    let n;
                    if ("message" in e) {
                        let n = e.serialize(),
                            i = o.lW.from(n).toString("base64");
                        if (Array.isArray(t) || void 0 !== r) throw Error("Invalid arguments");
                        let s = t || {};
                        s.encoding = "base64", "commitment" in s || (s.commitment = this.commitment);
                        let a = [i, s],
                            c = await this._rpcRequest("simulateTransaction", a),
                            l = (0, b.Ue)(c, et);
                        if ("error" in l) throw Error("failed to simulate transaction: " + l.error.message);
                        return l.result
                    }
                    if (e instanceof Transaction ? ((n = new Transaction).feePayer = e.feePayer, n.instructions = e.instructions, n.nonceInfo = e.nonceInfo, n.signatures = e.signatures) : (n = Transaction.populate(e))._message = n._json = void 0, void 0 !== t && !Array.isArray(t)) throw Error("Invalid arguments");
                    if (n.nonceInfo && t) n.sign(...t);
                    else {
                        let e = this._disableBlockhashCaching;
                        for (;;) {
                            let r = await this._blockhashWithExpiryBlockHeight(e);
                            if (n.lastValidBlockHeight = r.lastValidBlockHeight, n.recentBlockhash = r.blockhash, !t) break;
                            if (n.sign(...t), !n.signature) throw Error("!signature");
                            let i = n.signature.toString("base64");
                            if (this._blockhashInfo.simulatedSignatures.includes(i) || this._blockhashInfo.transactionSignatures.includes(i)) e = !0;
                            else {
                                this._blockhashInfo.simulatedSignatures.push(i);
                                break
                            }
                        }
                    }
                    let i = n._compile(),
                        s = i.serialize(),
                        a = n._serialize(s),
                        c = a.toString("base64"),
                        l = {
                            encoding: "base64",
                            commitment: this.commitment
                        };
                    if (r) {
                        let e = (Array.isArray(r) ? r : i.nonProgramIds()).map(e => e.toBase58());
                        l.accounts = {
                            encoding: "base64",
                            addresses: e
                        }
                    }
                    t && (l.sigVerify = !0);
                    let u = [c, l],
                        d = await this._rpcRequest("simulateTransaction", u),
                        h = (0, b.Ue)(d, et);
                    if ("error" in h) {
                        let e;
                        if ("data" in h.error && (e = h.error.data.logs) && Array.isArray(e)) {
                            let t = "\n    ",
                                r = t + e.join(t);
                            console.error(h.error.message, r)
                        }
                        throw new SendTransactionError("failed to simulate transaction: " + h.error.message, e)
                    }
                    return h.result
                }
                async sendTransaction(e, t, r) {
                    if ("version" in e) {
                        if (t && Array.isArray(t)) throw Error("Invalid arguments");
                        let n = e.serialize();
                        return await this.sendRawTransaction(n, r)
                    }
                    if (void 0 === t || !Array.isArray(t)) throw Error("Invalid arguments");
                    if (e.nonceInfo) e.sign(...t);
                    else {
                        let r = this._disableBlockhashCaching;
                        for (;;) {
                            let n = await this._blockhashWithExpiryBlockHeight(r);
                            if (e.lastValidBlockHeight = n.lastValidBlockHeight, e.recentBlockhash = n.blockhash, e.sign(...t), !e.signature) throw Error("!signature");
                            let i = e.signature.toString("base64");
                            if (this._blockhashInfo.transactionSignatures.includes(i)) r = !0;
                            else {
                                this._blockhashInfo.transactionSignatures.push(i);
                                break
                            }
                        }
                    }
                    let n = e.serialize();
                    return await this.sendRawTransaction(n, r)
                }
                async sendRawTransaction(e, t) {
                    let r = toBuffer(e).toString("base64"),
                        n = await this.sendEncodedTransaction(r, t);
                    return n
                }
                async sendEncodedTransaction(e, t) {
                    let r = {
                            encoding: "base64"
                        },
                        n = t && t.skipPreflight,
                        i = t && t.preflightCommitment || this.commitment;
                    t && null != t.maxRetries && (r.maxRetries = t.maxRetries), t && null != t.minContextSlot && (r.minContextSlot = t.minContextSlot), n && (r.skipPreflight = n), i && (r.preflightCommitment = i);
                    let s = [e, r],
                        o = await this._rpcRequest("sendTransaction", s),
                        a = (0, b.Ue)(o, ta);
                    if ("error" in a) {
                        let e;
                        throw "data" in a.error && (e = a.error.data.logs), new SendTransactionError("failed to send transaction: " + a.error.message, e)
                    }
                    return a.result
                }
                _wsOnOpen() {
                    this._rpcWebSocketConnected = !0, this._rpcWebSocketHeartbeat = setInterval(() => {
                        this._rpcWebSocket.notify("ping").catch(() => {})
                    }, 5e3), this._updateSubscriptions()
                }
                _wsOnError(e) {
                    this._rpcWebSocketConnected = !1, console.error("ws error:", e.message)
                }
                _wsOnClose(e) {
                    if (this._rpcWebSocketConnected = !1, this._rpcWebSocketGeneration = (this._rpcWebSocketGeneration + 1) % Number.MAX_SAFE_INTEGER, this._rpcWebSocketIdleTimeout && (clearTimeout(this._rpcWebSocketIdleTimeout), this._rpcWebSocketIdleTimeout = null), this._rpcWebSocketHeartbeat && (clearInterval(this._rpcWebSocketHeartbeat), this._rpcWebSocketHeartbeat = null), 1e3 === e) {
                        this._updateSubscriptions();
                        return
                    }
                    this._subscriptionCallbacksByServerSubscriptionId = {}, Object.entries(this._subscriptionsByHash).forEach(([e, t]) => {
                        this._setSubscription(e, { ...t,
                            state: "pending"
                        })
                    })
                }
                _setSubscription(e, t) {
                    var r;
                    let n = null === (r = this._subscriptionsByHash[e]) || void 0 === r ? void 0 : r.state;
                    if (this._subscriptionsByHash[e] = t, n !== t.state) {
                        let r = this._subscriptionStateChangeCallbacksByHash[e];
                        r && r.forEach(e => {
                            try {
                                e(t.state)
                            } catch {}
                        })
                    }
                }
                _onSubscriptionStateChange(e, t) {
                    var r;
                    let n = this._subscriptionHashByClientSubscriptionId[e];
                    if (null == n) return () => {};
                    let i = (r = this._subscriptionStateChangeCallbacksByHash)[n] || (r[n] = new Set);
                    return i.add(t), () => {
                        i.delete(t), 0 === i.size && delete this._subscriptionStateChangeCallbacksByHash[n]
                    }
                }
                async _updateSubscriptions() {
                    if (0 === Object.keys(this._subscriptionsByHash).length) {
                        this._rpcWebSocketConnected && (this._rpcWebSocketConnected = !1, this._rpcWebSocketIdleTimeout = setTimeout(() => {
                            this._rpcWebSocketIdleTimeout = null;
                            try {
                                this._rpcWebSocket.close()
                            } catch (e) {
                                e instanceof Error && console.log(`Error when closing socket connection: ${e.message}`)
                            }
                        }, 500));
                        return
                    }
                    if (null !== this._rpcWebSocketIdleTimeout && (clearTimeout(this._rpcWebSocketIdleTimeout), this._rpcWebSocketIdleTimeout = null, this._rpcWebSocketConnected = !0), !this._rpcWebSocketConnected) {
                        this._rpcWebSocket.connect();
                        return
                    }
                    let e = this._rpcWebSocketGeneration,
                        isCurrentConnectionStillActive = () => e === this._rpcWebSocketGeneration;
                    await Promise.all(Object.keys(this._subscriptionsByHash).map(async e => {
                        let t = this._subscriptionsByHash[e];
                        if (void 0 !== t) switch (t.state) {
                            case "pending":
                            case "unsubscribed":
                                if (0 === t.callbacks.size) {
                                    delete this._subscriptionsByHash[e], "unsubscribed" === t.state && delete this._subscriptionCallbacksByServerSubscriptionId[t.serverSubscriptionId], await this._updateSubscriptions();
                                    return
                                }
                                await (async () => {
                                    let {
                                        args: r,
                                        method: n
                                    } = t;
                                    try {
                                        this._setSubscription(e, { ...t,
                                            state: "subscribing"
                                        });
                                        let i = await this._rpcWebSocket.call(n, r);
                                        this._setSubscription(e, { ...t,
                                            serverSubscriptionId: i,
                                            state: "subscribed"
                                        }), this._subscriptionCallbacksByServerSubscriptionId[i] = t.callbacks, await this._updateSubscriptions()
                                    } catch (i) {
                                        if (i instanceof Error && console.error(`${n} error for argument`, r, i.message), !isCurrentConnectionStillActive()) return;
                                        this._setSubscription(e, { ...t,
                                            state: "pending"
                                        }), await this._updateSubscriptions()
                                    }
                                })();
                                break;
                            case "subscribed":
                                0 === t.callbacks.size && await (async () => {
                                    let {
                                        serverSubscriptionId: r,
                                        unsubscribeMethod: n
                                    } = t;
                                    if (this._subscriptionsAutoDisposedByRpc.has(r)) this._subscriptionsAutoDisposedByRpc.delete(r);
                                    else {
                                        this._setSubscription(e, { ...t,
                                            state: "unsubscribing"
                                        }), this._setSubscription(e, { ...t,
                                            state: "unsubscribing"
                                        });
                                        try {
                                            await this._rpcWebSocket.call(n, [r])
                                        } catch (r) {
                                            if (r instanceof Error && console.error(`${n} error:`, r.message), !isCurrentConnectionStillActive()) return;
                                            this._setSubscription(e, { ...t,
                                                state: "subscribed"
                                            }), await this._updateSubscriptions();
                                            return
                                        }
                                    }
                                    this._setSubscription(e, { ...t,
                                        state: "unsubscribed"
                                    }), await this._updateSubscriptions()
                                })()
                        }
                    }))
                }
                _handleServerNotification(e, t) {
                    let r = this._subscriptionCallbacksByServerSubscriptionId[e];
                    void 0 !== r && r.forEach(e => {
                        try {
                            e(...t)
                        } catch (e) {
                            console.error(e)
                        }
                    })
                }
                _wsOnAccountNotification(e) {
                    let {
                        result: t,
                        subscription: r
                    } = (0, b.Ue)(e, eI);
                    this._handleServerNotification(r, [t.value, t.context])
                }
                _makeSubscription(e, t) {
                    let r = this._nextClientSubscriptionId++,
                        n = fastStableStringify$1([e.method, t], !0),
                        i = this._subscriptionsByHash[n];
                    return void 0 === i ? this._subscriptionsByHash[n] = { ...e,
                        args: t,
                        callbacks: new Set([e.callback]),
                        state: "pending"
                    } : i.callbacks.add(e.callback), this._subscriptionHashByClientSubscriptionId[r] = n, this._subscriptionDisposeFunctionsByClientSubscriptionId[r] = async () => {
                        delete this._subscriptionDisposeFunctionsByClientSubscriptionId[r], delete this._subscriptionHashByClientSubscriptionId[r];
                        let t = this._subscriptionsByHash[n];
                        assert(void 0 !== t, `Could not find a \`Subscription\` when tearing down client subscription #${r}`), t.callbacks.delete(e.callback), await this._updateSubscriptions()
                    }, this._updateSubscriptions(), r
                }
                onAccountChange(e, t, r) {
                    let n = this._buildArgs([e.toBase58()], r || this._commitment || "finalized", "base64");
                    return this._makeSubscription({
                        callback: t,
                        method: "accountSubscribe",
                        unsubscribeMethod: "accountUnsubscribe"
                    }, n)
                }
                async removeAccountChangeListener(e) {
                    await this._unsubscribeClientSubscription(e, "account change")
                }
                _wsOnProgramAccountNotification(e) {
                    let {
                        result: t,
                        subscription: r
                    } = (0, b.Ue)(e, eR);
                    this._handleServerNotification(r, [{
                        accountId: t.value.pubkey,
                        accountInfo: t.value.account
                    }, t.context])
                }
                onProgramAccountChange(e, t, r, n) {
                    let i = this._buildArgs([e.toBase58()], r || this._commitment || "finalized", "base64", n ? {
                        filters: n
                    } : void 0);
                    return this._makeSubscription({
                        callback: t,
                        method: "programSubscribe",
                        unsubscribeMethod: "programUnsubscribe"
                    }, i)
                }
                async removeProgramAccountChangeListener(e) {
                    await this._unsubscribeClientSubscription(e, "program account change")
                }
                onLogs(e, t, r) {
                    let n = this._buildArgs(["object" == typeof e ? {
                        mentions: [e.toString()]
                    } : e], r || this._commitment || "finalized");
                    return this._makeSubscription({
                        callback: t,
                        method: "logsSubscribe",
                        unsubscribeMethod: "logsUnsubscribe"
                    }, n)
                }
                async removeOnLogsListener(e) {
                    await this._unsubscribeClientSubscription(e, "logs")
                }
                _wsOnLogsNotification(e) {
                    let {
                        result: t,
                        subscription: r
                    } = (0, b.Ue)(e, tl);
                    this._handleServerNotification(r, [t.value, t.context])
                }
                _wsOnSlotNotification(e) {
                    let {
                        result: t,
                        subscription: r
                    } = (0, b.Ue)(e, eP);
                    this._handleServerNotification(r, [t])
                }
                onSlotChange(e) {
                    return this._makeSubscription({
                        callback: e,
                        method: "slotSubscribe",
                        unsubscribeMethod: "slotUnsubscribe"
                    }, [])
                }
                async removeSlotChangeListener(e) {
                    await this._unsubscribeClientSubscription(e, "slot change")
                }
                _wsOnSlotUpdatesNotification(e) {
                    let {
                        result: t,
                        subscription: r
                    } = (0, b.Ue)(e, ev);
                    this._handleServerNotification(r, [t])
                }
                onSlotUpdate(e) {
                    return this._makeSubscription({
                        callback: e,
                        method: "slotsUpdatesSubscribe",
                        unsubscribeMethod: "slotsUpdatesUnsubscribe"
                    }, [])
                }
                async removeSlotUpdateListener(e) {
                    await this._unsubscribeClientSubscription(e, "slot update")
                }
                async _unsubscribeClientSubscription(e, t) {
                    let r = this._subscriptionDisposeFunctionsByClientSubscriptionId[e];
                    r ? await r() : console.warn(`Ignored unsubscribe request because an active subscription with id \`${e}\` for '${t}' events could not be found.`)
                }
                _buildArgs(e, t, r, n) {
                    let i = t || this._commitment;
                    if (i || r || n) {
                        let t = {};
                        r && (t.encoding = r), i && (t.commitment = i), n && (t = Object.assign(t, n)), e.push(t)
                    }
                    return e
                }
                _buildArgsAtLeastConfirmed(e, t, r, n) {
                    let i = t || this._commitment;
                    if (i && !["confirmed", "finalized"].includes(i)) throw Error("Using Connection with default commitment: `" + this._commitment + "`, but method requires at least `confirmed`");
                    return this._buildArgs(e, t, r, n)
                }
                _wsOnSignatureNotification(e) {
                    let {
                        result: t,
                        subscription: r
                    } = (0, b.Ue)(e, eB);
                    "receivedSignature" !== t.value && this._subscriptionsAutoDisposedByRpc.add(r), this._handleServerNotification(r, "receivedSignature" === t.value ? [{
                        type: "received"
                    }, t.context] : [{
                        type: "status",
                        result: t.value
                    }, t.context])
                }
                onSignature(e, t, r) {
                    let n = this._buildArgs([e], r || this._commitment || "finalized"),
                        i = this._makeSubscription({
                            callback: (e, r) => {
                                if ("status" === e.type) {
                                    t(e.result, r);
                                    try {
                                        this.removeSignatureListener(i)
                                    } catch (e) {}
                                }
                            },
                            method: "signatureSubscribe",
                            unsubscribeMethod: "signatureUnsubscribe"
                        }, n);
                    return i
                }
                onSignatureWithOptions(e, t, r) {
                    let {
                        commitment: n,
                        ...i
                    } = { ...r,
                        commitment: r && r.commitment || this._commitment || "finalized"
                    }, s = this._buildArgs([e], n, void 0, i), o = this._makeSubscription({
                        callback: (e, r) => {
                            t(e, r);
                            try {
                                this.removeSignatureListener(o)
                            } catch (e) {}
                        },
                        method: "signatureSubscribe",
                        unsubscribeMethod: "signatureUnsubscribe"
                    }, s);
                    return o
                }
                async removeSignatureListener(e) {
                    await this._unsubscribeClientSubscription(e, "signature result")
                }
                _wsOnRootNotification(e) {
                    let {
                        result: t,
                        subscription: r
                    } = (0, b.Ue)(e, eE);
                    this._handleServerNotification(r, [t])
                }
                onRootChange(e) {
                    return this._makeSubscription({
                        callback: e,
                        method: "rootSubscribe",
                        unsubscribeMethod: "rootUnsubscribe"
                    }, [])
                }
                async removeRootChangeListener(e) {
                    await this._unsubscribeClientSubscription(e, "root change")
                }
            };
            let Keypair = class Keypair {
                constructor(e) {
                    this._keypair = void 0, this._keypair = null != e ? e : generateKeypair()
                }
                static generate() {
                    return new Keypair(generateKeypair())
                }
                static fromSecretKey(e, t) {
                    if (64 !== e.byteLength) throw Error("bad secret key size");
                    let r = e.slice(32, 64);
                    if (!t || !t.skipValidation) {
                        let t = e.slice(0, 32),
                            n = A(t);
                        for (let e = 0; e < 32; e++)
                            if (r[e] !== n[e]) throw Error("provided secretKey is invalid")
                    }
                    return new Keypair({
                        publicKey: r,
                        secretKey: e
                    })
                }
                static fromSeed(e) {
                    let t = A(e),
                        r = new Uint8Array(64);
                    return r.set(e), r.set(t, 32), new Keypair({
                        publicKey: t,
                        secretKey: r
                    })
                }
                get publicKey() {
                    return new PublicKey(this._keypair.publicKey)
                }
                get secretKey() {
                    return new Uint8Array(this._keypair.secretKey)
                }
            };
            Object.freeze({
                CreateLookupTable: {
                    index: 0,
                    layout: m.n_([m.Jq("instruction"), u64("recentSlot"), m.u8("bumpSeed")])
                },
                FreezeLookupTable: {
                    index: 1,
                    layout: m.n_([m.Jq("instruction")])
                },
                ExtendLookupTable: {
                    index: 2,
                    layout: m.n_([m.Jq("instruction"), u64(), m.A9(publicKey(), m.cv(m.Jq(), -8), "addresses")])
                },
                DeactivateLookupTable: {
                    index: 3,
                    layout: m.n_([m.Jq("instruction")])
                },
                CloseLookupTable: {
                    index: 4,
                    layout: m.n_([m.Jq("instruction")])
                }
            }), new PublicKey("AddressLookupTab1e1111111111111111111111111"), Object.freeze({
                RequestUnits: {
                    index: 0,
                    layout: m.n_([m.u8("instruction"), m.Jq("units"), m.Jq("additionalFee")])
                },
                RequestHeapFrame: {
                    index: 1,
                    layout: m.n_([m.u8("instruction"), m.Jq("bytes")])
                },
                SetComputeUnitLimit: {
                    index: 2,
                    layout: m.n_([m.u8("instruction"), m.Jq("units")])
                },
                SetComputeUnitPrice: {
                    index: 3,
                    layout: m.n_([m.u8("instruction"), u64("microLamports")])
                }
            }), new PublicKey("ComputeBudget111111111111111111111111111111");
            let td = m.n_([m.u8("numSignatures"), m.u8("padding"), m.KB("signatureOffset"), m.KB("signatureInstructionIndex"), m.KB("publicKeyOffset"), m.KB("publicKeyInstructionIndex"), m.KB("messageDataOffset"), m.KB("messageDataSize"), m.KB("messageInstructionIndex")]);
            let Ed25519Program = class Ed25519Program {
                constructor() {}
                static createInstructionWithPublicKey(e) {
                    let {
                        publicKey: t,
                        message: r,
                        signature: n,
                        instructionIndex: i
                    } = e;
                    assert(32 === t.length, `Public Key must be 32 bytes but received ${t.length} bytes`), assert(64 === n.length, `Signature must be 64 bytes but received ${n.length} bytes`);
                    let s = td.span,
                        a = s + t.length,
                        c = a + n.length,
                        l = o.lW.alloc(c + r.length),
                        u = null == i ? 65535 : i;
                    return td.encode({
                        numSignatures: 1,
                        padding: 0,
                        signatureOffset: a,
                        signatureInstructionIndex: u,
                        publicKeyOffset: s,
                        publicKeyInstructionIndex: u,
                        messageDataOffset: c,
                        messageDataSize: r.length,
                        messageInstructionIndex: u
                    }, l), l.fill(t, s), l.fill(n, a), l.fill(r, c), new TransactionInstruction({
                        keys: [],
                        programId: Ed25519Program.programId,
                        data: l
                    })
                }
                static createInstructionWithPrivateKey(e) {
                    let {
                        privateKey: t,
                        message: r,
                        instructionIndex: n
                    } = e;
                    assert(64 === t.length, `Private key must be 64 bytes but received ${t.length} bytes`);
                    try {
                        let e = Keypair.fromSecretKey(t),
                            i = e.publicKey.toBytes(),
                            s = sign(r, e.secretKey);
                        return this.createInstructionWithPublicKey({
                            publicKey: i,
                            message: r,
                            signature: s,
                            instructionIndex: n
                        })
                    } catch (e) {
                        throw Error(`Error creating instruction; ${e}`)
                    }
                }
            };
            Ed25519Program.programId = new PublicKey("Ed25519SigVerify111111111111111111111111111"), I.P6.hmacSha256Sync = (e, ...t) => {
                let r = _.b.create(g.J, e);
                return t.forEach(e => r.update(e)), r.digest()
            };
            let ecdsaSign = (e, t) => I.kS(e, t, {
                der: !1,
                recovered: !0
            });
            I.P6.isValidPrivateKey;
            let th = I.$3,
                tg = m.n_([m.u8("numSignatures"), m.KB("signatureOffset"), m.u8("signatureInstructionIndex"), m.KB("ethAddressOffset"), m.u8("ethAddressInstructionIndex"), m.KB("messageDataOffset"), m.KB("messageDataSize"), m.u8("messageInstructionIndex"), m.Ik(20, "ethAddress"), m.Ik(64, "signature"), m.u8("recoveryId")]);
            let Secp256k1Program = class Secp256k1Program {
                constructor() {}
                static publicKeyToEthAddress(e) {
                    assert(64 === e.length, `Public key must be 64 bytes but received ${e.length} bytes`);
                    try {
                        return o.lW.from((0, w.fr)(toBuffer(e))).slice(-20)
                    } catch (e) {
                        throw Error(`Error constructing Ethereum address: ${e}`)
                    }
                }
                static createInstructionWithPublicKey(e) {
                    let {
                        publicKey: t,
                        message: r,
                        signature: n,
                        recoveryId: i,
                        instructionIndex: s
                    } = e;
                    return Secp256k1Program.createInstructionWithEthAddress({
                        ethAddress: Secp256k1Program.publicKeyToEthAddress(t),
                        message: r,
                        signature: n,
                        recoveryId: i,
                        instructionIndex: s
                    })
                }
                static createInstructionWithEthAddress(e) {
                    let t;
                    let {
                        ethAddress: r,
                        message: n,
                        signature: i,
                        recoveryId: s,
                        instructionIndex: a = 0
                    } = e;
                    assert(20 === (t = "string" == typeof r ? r.startsWith("0x") ? o.lW.from(r.substr(2), "hex") : o.lW.from(r, "hex") : r).length, `Address must be 20 bytes but received ${t.length} bytes`);
                    let c = 12 + t.length,
                        l = c + i.length + 1,
                        u = o.lW.alloc(tg.span + n.length);
                    return tg.encode({
                        numSignatures: 1,
                        signatureOffset: c,
                        signatureInstructionIndex: a,
                        ethAddressOffset: 12,
                        ethAddressInstructionIndex: a,
                        messageDataOffset: l,
                        messageDataSize: n.length,
                        messageInstructionIndex: a,
                        signature: toBuffer(i),
                        ethAddress: toBuffer(t),
                        recoveryId: s
                    }, u), u.fill(toBuffer(n), tg.span), new TransactionInstruction({
                        keys: [],
                        programId: Secp256k1Program.programId,
                        data: u
                    })
                }
                static createInstructionWithPrivateKey(e) {
                    let {
                        privateKey: t,
                        message: r,
                        instructionIndex: n
                    } = e;
                    assert(32 === t.length, `Private key must be 32 bytes but received ${t.length} bytes`);
                    try {
                        let e = toBuffer(t),
                            i = th(e, !1).slice(1),
                            s = o.lW.from((0, w.fr)(toBuffer(r))),
                            [a, c] = ecdsaSign(s, e);
                        return this.createInstructionWithPublicKey({
                            publicKey: i,
                            message: r,
                            signature: a,
                            recoveryId: c,
                            instructionIndex: n
                        })
                    } catch (e) {
                        throw Error(`Error creating instruction; ${e}`)
                    }
                }
            };
            Secp256k1Program.programId = new PublicKey("KeccakSecp256k11111111111111111111111111111");
            let tp = new PublicKey("StakeConfig11111111111111111111111111111111");
            let Lockup = class Lockup {
                constructor(e, t, r) {
                    this.unixTimestamp = void 0, this.epoch = void 0, this.custodian = void 0, this.unixTimestamp = e, this.epoch = t, this.custodian = r
                }
            };
            Lockup.default = new Lockup(0, 0, PublicKey.default);
            let tm = Object.freeze({
                Initialize: {
                    index: 0,
                    layout: m.n_([m.Jq("instruction"), ((e = "authorized") => m.n_([publicKey("staker"), publicKey("withdrawer")], e))(), ((e = "lockup") => m.n_([m.gM("unixTimestamp"), m.gM("epoch"), publicKey("custodian")], e))()])
                },
                Authorize: {
                    index: 1,
                    layout: m.n_([m.Jq("instruction"), publicKey("newAuthorized"), m.Jq("stakeAuthorizationType")])
                },
                Delegate: {
                    index: 2,
                    layout: m.n_([m.Jq("instruction")])
                },
                Split: {
                    index: 3,
                    layout: m.n_([m.Jq("instruction"), m.gM("lamports")])
                },
                Withdraw: {
                    index: 4,
                    layout: m.n_([m.Jq("instruction"), m.gM("lamports")])
                },
                Deactivate: {
                    index: 5,
                    layout: m.n_([m.Jq("instruction")])
                },
                Merge: {
                    index: 7,
                    layout: m.n_([m.Jq("instruction")])
                },
                AuthorizeWithSeed: {
                    index: 8,
                    layout: m.n_([m.Jq("instruction"), publicKey("newAuthorized"), m.Jq("stakeAuthorizationType"), rustString("authoritySeed"), publicKey("authorityOwner")])
                }
            });
            Object.freeze({
                Staker: {
                    index: 0
                },
                Withdrawer: {
                    index: 1
                }
            });
            let StakeProgram = class StakeProgram {
                constructor() {}
                static initialize(e) {
                    let {
                        stakePubkey: t,
                        authorized: r,
                        lockup: n
                    } = e, i = n || Lockup.default, s = tm.Initialize, o = encodeData(s, {
                        authorized: {
                            staker: toBuffer(r.staker.toBuffer()),
                            withdrawer: toBuffer(r.withdrawer.toBuffer())
                        },
                        lockup: {
                            unixTimestamp: i.unixTimestamp,
                            epoch: i.epoch,
                            custodian: toBuffer(i.custodian.toBuffer())
                        }
                    }), a = {
                        keys: [{
                            pubkey: t,
                            isSigner: !1,
                            isWritable: !0
                        }, {
                            pubkey: E,
                            isSigner: !1,
                            isWritable: !1
                        }],
                        programId: this.programId,
                        data: o
                    };
                    return new TransactionInstruction(a)
                }
                static createAccountWithSeed(e) {
                    let t = new Transaction;
                    t.add(SystemProgram.createAccountWithSeed({
                        fromPubkey: e.fromPubkey,
                        newAccountPubkey: e.stakePubkey,
                        basePubkey: e.basePubkey,
                        seed: e.seed,
                        lamports: e.lamports,
                        space: this.space,
                        programId: this.programId
                    }));
                    let {
                        stakePubkey: r,
                        authorized: n,
                        lockup: i
                    } = e;
                    return t.add(this.initialize({
                        stakePubkey: r,
                        authorized: n,
                        lockup: i
                    }))
                }
                static createAccount(e) {
                    let t = new Transaction;
                    t.add(SystemProgram.createAccount({
                        fromPubkey: e.fromPubkey,
                        newAccountPubkey: e.stakePubkey,
                        lamports: e.lamports,
                        space: this.space,
                        programId: this.programId
                    }));
                    let {
                        stakePubkey: r,
                        authorized: n,
                        lockup: i
                    } = e;
                    return t.add(this.initialize({
                        stakePubkey: r,
                        authorized: n,
                        lockup: i
                    }))
                }
                static delegate(e) {
                    let {
                        stakePubkey: t,
                        authorizedPubkey: r,
                        votePubkey: n
                    } = e, i = tm.Delegate, s = encodeData(i);
                    return new Transaction().add({
                        keys: [{
                            pubkey: t,
                            isSigner: !1,
                            isWritable: !0
                        }, {
                            pubkey: n,
                            isSigner: !1,
                            isWritable: !1
                        }, {
                            pubkey: v,
                            isSigner: !1,
                            isWritable: !1
                        }, {
                            pubkey: T,
                            isSigner: !1,
                            isWritable: !1
                        }, {
                            pubkey: tp,
                            isSigner: !1,
                            isWritable: !1
                        }, {
                            pubkey: r,
                            isSigner: !0,
                            isWritable: !1
                        }],
                        programId: this.programId,
                        data: s
                    })
                }
                static authorize(e) {
                    let {
                        stakePubkey: t,
                        authorizedPubkey: r,
                        newAuthorizedPubkey: n,
                        stakeAuthorizationType: i,
                        custodianPubkey: s
                    } = e, o = tm.Authorize, a = encodeData(o, {
                        newAuthorized: toBuffer(n.toBuffer()),
                        stakeAuthorizationType: i.index
                    }), c = [{
                        pubkey: t,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: v,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: r,
                        isSigner: !0,
                        isWritable: !1
                    }];
                    return s && c.push({
                        pubkey: s,
                        isSigner: !1,
                        isWritable: !1
                    }), new Transaction().add({
                        keys: c,
                        programId: this.programId,
                        data: a
                    })
                }
                static authorizeWithSeed(e) {
                    let {
                        stakePubkey: t,
                        authorityBase: r,
                        authoritySeed: n,
                        authorityOwner: i,
                        newAuthorizedPubkey: s,
                        stakeAuthorizationType: o,
                        custodianPubkey: a
                    } = e, c = tm.AuthorizeWithSeed, l = encodeData(c, {
                        newAuthorized: toBuffer(s.toBuffer()),
                        stakeAuthorizationType: o.index,
                        authoritySeed: n,
                        authorityOwner: toBuffer(i.toBuffer())
                    }), u = [{
                        pubkey: t,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: r,
                        isSigner: !0,
                        isWritable: !1
                    }, {
                        pubkey: v,
                        isSigner: !1,
                        isWritable: !1
                    }];
                    return a && u.push({
                        pubkey: a,
                        isSigner: !1,
                        isWritable: !1
                    }), new Transaction().add({
                        keys: u,
                        programId: this.programId,
                        data: l
                    })
                }
                static splitInstruction(e) {
                    let {
                        stakePubkey: t,
                        authorizedPubkey: r,
                        splitStakePubkey: n,
                        lamports: i
                    } = e, s = tm.Split, o = encodeData(s, {
                        lamports: i
                    });
                    return new TransactionInstruction({
                        keys: [{
                            pubkey: t,
                            isSigner: !1,
                            isWritable: !0
                        }, {
                            pubkey: n,
                            isSigner: !1,
                            isWritable: !0
                        }, {
                            pubkey: r,
                            isSigner: !0,
                            isWritable: !1
                        }],
                        programId: this.programId,
                        data: o
                    })
                }
                static split(e) {
                    let t = new Transaction;
                    return t.add(SystemProgram.createAccount({
                        fromPubkey: e.authorizedPubkey,
                        newAccountPubkey: e.splitStakePubkey,
                        lamports: 0,
                        space: this.space,
                        programId: this.programId
                    })), t.add(this.splitInstruction(e))
                }
                static splitWithSeed(e) {
                    let {
                        stakePubkey: t,
                        authorizedPubkey: r,
                        splitStakePubkey: n,
                        basePubkey: i,
                        seed: s,
                        lamports: o
                    } = e, a = new Transaction;
                    return a.add(SystemProgram.allocate({
                        accountPubkey: n,
                        basePubkey: i,
                        seed: s,
                        space: this.space,
                        programId: this.programId
                    })), a.add(this.splitInstruction({
                        stakePubkey: t,
                        authorizedPubkey: r,
                        splitStakePubkey: n,
                        lamports: o
                    }))
                }
                static merge(e) {
                    let {
                        stakePubkey: t,
                        sourceStakePubKey: r,
                        authorizedPubkey: n
                    } = e, i = tm.Merge, s = encodeData(i);
                    return new Transaction().add({
                        keys: [{
                            pubkey: t,
                            isSigner: !1,
                            isWritable: !0
                        }, {
                            pubkey: r,
                            isSigner: !1,
                            isWritable: !0
                        }, {
                            pubkey: v,
                            isSigner: !1,
                            isWritable: !1
                        }, {
                            pubkey: T,
                            isSigner: !1,
                            isWritable: !1
                        }, {
                            pubkey: n,
                            isSigner: !0,
                            isWritable: !1
                        }],
                        programId: this.programId,
                        data: s
                    })
                }
                static withdraw(e) {
                    let {
                        stakePubkey: t,
                        authorizedPubkey: r,
                        toPubkey: n,
                        lamports: i,
                        custodianPubkey: s
                    } = e, o = tm.Withdraw, a = encodeData(o, {
                        lamports: i
                    }), c = [{
                        pubkey: t,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: n,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: v,
                        isSigner: !1,
                        isWritable: !1
                    }, {
                        pubkey: T,
                        isSigner: !1,
                        isWritable: !1
                    }, {
                        pubkey: r,
                        isSigner: !0,
                        isWritable: !1
                    }];
                    return s && c.push({
                        pubkey: s,
                        isSigner: !1,
                        isWritable: !1
                    }), new Transaction().add({
                        keys: c,
                        programId: this.programId,
                        data: a
                    })
                }
                static deactivate(e) {
                    let {
                        stakePubkey: t,
                        authorizedPubkey: r
                    } = e, n = tm.Deactivate, i = encodeData(n);
                    return new Transaction().add({
                        keys: [{
                            pubkey: t,
                            isSigner: !1,
                            isWritable: !0
                        }, {
                            pubkey: v,
                            isSigner: !1,
                            isWritable: !1
                        }, {
                            pubkey: r,
                            isSigner: !0,
                            isWritable: !1
                        }],
                        programId: this.programId,
                        data: i
                    })
                }
            };
            StakeProgram.programId = new PublicKey("Stake11111111111111111111111111111111111111"), StakeProgram.space = 200;
            let tf = Object.freeze({
                InitializeAccount: {
                    index: 0,
                    layout: m.n_([m.Jq("instruction"), ((e = "voteInit") => m.n_([publicKey("nodePubkey"), publicKey("authorizedVoter"), publicKey("authorizedWithdrawer"), m.u8("commission")], e))()])
                },
                Authorize: {
                    index: 1,
                    layout: m.n_([m.Jq("instruction"), publicKey("newAuthorized"), m.Jq("voteAuthorizationType")])
                },
                Withdraw: {
                    index: 3,
                    layout: m.n_([m.Jq("instruction"), m.gM("lamports")])
                },
                AuthorizeWithSeed: {
                    index: 10,
                    layout: m.n_([m.Jq("instruction"), ((e = "voteAuthorizeWithSeedArgs") => m.n_([m.Jq("voteAuthorizationType"), publicKey("currentAuthorityDerivedKeyOwnerPubkey"), rustString("currentAuthorityDerivedKeySeed"), publicKey("newAuthorized")], e))()])
                }
            });
            Object.freeze({
                Voter: {
                    index: 0
                },
                Withdrawer: {
                    index: 1
                }
            });
            let VoteProgram = class VoteProgram {
                constructor() {}
                static initializeAccount(e) {
                    let {
                        votePubkey: t,
                        nodePubkey: r,
                        voteInit: n
                    } = e, i = tf.InitializeAccount, s = encodeData(i, {
                        voteInit: {
                            nodePubkey: toBuffer(n.nodePubkey.toBuffer()),
                            authorizedVoter: toBuffer(n.authorizedVoter.toBuffer()),
                            authorizedWithdrawer: toBuffer(n.authorizedWithdrawer.toBuffer()),
                            commission: n.commission
                        }
                    }), o = {
                        keys: [{
                            pubkey: t,
                            isSigner: !1,
                            isWritable: !0
                        }, {
                            pubkey: E,
                            isSigner: !1,
                            isWritable: !1
                        }, {
                            pubkey: v,
                            isSigner: !1,
                            isWritable: !1
                        }, {
                            pubkey: r,
                            isSigner: !0,
                            isWritable: !1
                        }],
                        programId: this.programId,
                        data: s
                    };
                    return new TransactionInstruction(o)
                }
                static createAccount(e) {
                    let t = new Transaction;
                    return t.add(SystemProgram.createAccount({
                        fromPubkey: e.fromPubkey,
                        newAccountPubkey: e.votePubkey,
                        lamports: e.lamports,
                        space: this.space,
                        programId: this.programId
                    })), t.add(this.initializeAccount({
                        votePubkey: e.votePubkey,
                        nodePubkey: e.voteInit.nodePubkey,
                        voteInit: e.voteInit
                    }))
                }
                static authorize(e) {
                    let {
                        votePubkey: t,
                        authorizedPubkey: r,
                        newAuthorizedPubkey: n,
                        voteAuthorizationType: i
                    } = e, s = tf.Authorize, o = encodeData(s, {
                        newAuthorized: toBuffer(n.toBuffer()),
                        voteAuthorizationType: i.index
                    }), a = [{
                        pubkey: t,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: v,
                        isSigner: !1,
                        isWritable: !1
                    }, {
                        pubkey: r,
                        isSigner: !0,
                        isWritable: !1
                    }];
                    return new Transaction().add({
                        keys: a,
                        programId: this.programId,
                        data: o
                    })
                }
                static authorizeWithSeed(e) {
                    let {
                        currentAuthorityDerivedKeyBasePubkey: t,
                        currentAuthorityDerivedKeyOwnerPubkey: r,
                        currentAuthorityDerivedKeySeed: n,
                        newAuthorizedPubkey: i,
                        voteAuthorizationType: s,
                        votePubkey: o
                    } = e, a = tf.AuthorizeWithSeed, c = encodeData(a, {
                        voteAuthorizeWithSeedArgs: {
                            currentAuthorityDerivedKeyOwnerPubkey: toBuffer(r.toBuffer()),
                            currentAuthorityDerivedKeySeed: n,
                            newAuthorized: toBuffer(i.toBuffer()),
                            voteAuthorizationType: s.index
                        }
                    }), l = [{
                        pubkey: o,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: v,
                        isSigner: !1,
                        isWritable: !1
                    }, {
                        pubkey: t,
                        isSigner: !0,
                        isWritable: !1
                    }];
                    return new Transaction().add({
                        keys: l,
                        programId: this.programId,
                        data: c
                    })
                }
                static withdraw(e) {
                    let {
                        votePubkey: t,
                        authorizedWithdrawerPubkey: r,
                        lamports: n,
                        toPubkey: i
                    } = e, s = tf.Withdraw, o = encodeData(s, {
                        lamports: n
                    }), a = [{
                        pubkey: t,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: i,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: r,
                        isSigner: !0,
                        isWritable: !1
                    }];
                    return new Transaction().add({
                        keys: a,
                        programId: this.programId,
                        data: o
                    })
                }
                static safeWithdraw(e, t, r) {
                    if (e.lamports > t - r) throw Error("Withdraw will leave vote account with insuffcient funds.");
                    return VoteProgram.withdraw(e)
                }
            };
            async function sendAndConfirmRawTransaction(e, t, r, n) {
                let i, s;
                r && Object.prototype.hasOwnProperty.call(r, "lastValidBlockHeight") ? (i = r, s = n) : r && Object.prototype.hasOwnProperty.call(r, "nonceValue") ? (i = r, s = n) : s = r;
                let o = s && {
                        skipPreflight: s.skipPreflight,
                        preflightCommitment: s.preflightCommitment || s.commitment,
                        minContextSlot: s.minContextSlot
                    },
                    a = await e.sendRawTransaction(t, o),
                    c = s && s.commitment,
                    l = i ? e.confirmTransaction(i, c) : e.confirmTransaction(a, c),
                    u = (await l).value;
                if (u.err) throw Error(`Raw transaction ${a} failed (${JSON.stringify(u)})`);
                return a
            }
            VoteProgram.programId = new PublicKey("Vote111111111111111111111111111111111111111"), VoteProgram.space = 3731, new PublicKey("Va1idator1nfo111111111111111111111111111111"), (0, b.dt)({
                name: (0, b.Z_)(),
                website: (0, b.jt)((0, b.Z_)()),
                details: (0, b.jt)((0, b.Z_)()),
                keybaseUsername: (0, b.jt)((0, b.Z_)())
            }), new PublicKey("Vote111111111111111111111111111111111111111"), m.n_([publicKey("nodePubkey"), publicKey("authorizedWithdrawer"), m.u8("commission"), m._O(), m.A9(m.n_([m._O("slot"), m.Jq("confirmationCount")]), m.cv(m.Jq(), -8), "votes"), m.u8("rootSlotValid"), m._O("rootSlot"), m._O(), m.A9(m.n_([m._O("epoch"), publicKey("authorizedVoter")]), m.cv(m.Jq(), -8), "authorizedVoters"), m.n_([m.A9(m.n_([publicKey("authorizedPubkey"), m._O("epochOfLastAuthorizedSwitch"), m._O("targetEpoch")]), 32, "buf"), m._O("idx"), m.u8("isEmpty")], "priorVoters"), m._O(), m.A9(m.n_([m._O("epoch"), m._O("credits"), m._O("prevCredits")]), m.cv(m.Jq(), -8), "epochCredits"), m.n_([m._O("slot"), m._O("timestamp")], "lastTimestamp")]);
            let tb = 1e9
        }
    }
]);