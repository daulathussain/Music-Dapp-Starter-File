"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7973], {
        2660: function(e, t, r) {
            let n;
            r.d(t, {
                nh: function() {
                    return PublicKey
                }
            });
            var i = r(97115),
                s = r(36838),
                o = r(43907),
                a = r.n(o),
                c = r(28592),
                u = r.n(c),
                l = r(70697),
                d = r(90323),
                h = r(16158),
                p = r(46942),
                g = r(40692);
            r(12048), r(15209), r(5576);
            var y = r(65155),
                b = r(15651);
            s.UN.utils.randomPrivateKey;
            let generateKeypair = () => {
                    let e = s.UN.utils.randomPrivateKey(),
                        t = f(e),
                        r = new Uint8Array(64);
                    return r.set(e), r.set(t, 32), {
                        publicKey: t,
                        secretKey: r
                    }
                },
                f = s.UN.getPublicKey;

            function isOnCurve(e) {
                try {
                    return s.UN.ExtendedPoint.fromHex(e), !0
                } catch {
                    return !1
                }
            }
            let sign = (e, t) => s.UN.sign(e, t.slice(0, 32)),
                m = s.UN.verify,
                toBuffer = e => i.Buffer.isBuffer(e) ? e : e instanceof Uint8Array ? i.Buffer.from(e.buffer, e.byteOffset, e.byteLength) : i.Buffer.from(e);
            let Struct = class Struct {
                constructor(e) {
                    Object.assign(this, e)
                }
                encode() {
                    return i.Buffer.from((0, d.serialize)(k, this))
                }
                static decode(e) {
                    return (0, d.deserialize)(k, this, e)
                }
                static decodeUnchecked(e) {
                    return (0, d.deserializeUnchecked)(k, this, e)
                }
            };
            let k = new Map,
                I = 1;
            n = Symbol.toStringTag;
            let PublicKey = class PublicKey extends Struct {
                constructor(e) {
                    if (super({}), this._bn = void 0, void 0 !== e._bn) this._bn = e._bn;
                    else {
                        if ("string" == typeof e) {
                            let t = u().decode(e);
                            if (32 != t.length) throw Error("Invalid public key input");
                            this._bn = new(a())(t)
                        } else this._bn = new(a())(e);
                        if (this._bn.byteLength() > 32) throw Error("Invalid public key input")
                    }
                }
                static unique() {
                    let e = new PublicKey(I);
                    return I += 1, new PublicKey(e.toBuffer())
                }
                equals(e) {
                    return this._bn.eq(e._bn)
                }
                toBase58() {
                    return u().encode(this.toBytes())
                }
                toJSON() {
                    return this.toBase58()
                }
                toBytes() {
                    let e = this.toBuffer();
                    return new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
                }
                toBuffer() {
                    let e = this._bn.toArrayLike(i.Buffer);
                    if (32 === e.length) return e;
                    let t = i.Buffer.alloc(32);
                    return e.copy(t, 32 - e.length), t
                }
                get[n]() {
                    return `PublicKey(${this.toString()})`
                }
                toString() {
                    return this.toBase58()
                }
                static async createWithSeed(e, t, r) {
                    let n = i.Buffer.concat([e.toBuffer(), i.Buffer.from(t), r.toBuffer()]),
                        s = (0, l.J)(n);
                    return new PublicKey(s)
                }
                static createProgramAddressSync(e, t) {
                    let r = i.Buffer.alloc(0);
                    e.forEach(function(e) {
                        if (e.length > 32) throw TypeError("Max seed length exceeded");
                        r = i.Buffer.concat([r, toBuffer(e)])
                    }), r = i.Buffer.concat([r, t.toBuffer(), i.Buffer.from("ProgramDerivedAddress")]);
                    let n = (0, l.J)(r);
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
                            let s = e.concat(i.Buffer.from([n]));
                            r = this.createProgramAddressSync(s, t)
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
            PublicKey.default = new PublicKey("11111111111111111111111111111111"), k.set(PublicKey, {
                kind: "struct",
                fields: [
                    ["_bn", "u256"]
                ]
            }), new PublicKey("BPFLoader1111111111111111111111111111111111"), Object.defineProperty((class extends Error {
                constructor(e) {
                    super(`Signature ${e} has expired: block height exceeded.`), this.signature = void 0, this.signature = e
                }
            }).prototype, "name", {
                value: "TransactionExpiredBlockheightExceededError"
            }), Object.defineProperty((class extends Error {
                constructor(e, t) {
                    super(`Transaction was not confirmed in ${t.toFixed(2)} seconds. It is unknown if it succeeded or failed. Check signature ${e} using the Solana Explorer or CLI tools.`), this.signature = void 0, this.signature = e
                }
            }).prototype, "name", {
                value: "TransactionExpiredTimeoutError"
            }), Object.defineProperty((class extends Error {
                constructor(e) {
                    super(`Signature ${e} has expired: the nonce is no longer valid.`), this.signature = void 0, this.signature = e
                }
            }).prototype, "name", {
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
            let publicKey = (e = "publicKey") => h.Ik(32, e),
                rustString = (e = "string") => {
                    let t = h.n_([h.Jq("length"), h.Jq("lengthPadding"), h.Ik(h.cv(h.Jq(), -8), "chars")], e),
                        r = t.decode.bind(t),
                        n = t.encode.bind(t);
                    return t.decode = (e, t) => {
                        let n = r(e, t);
                        return n.chars.toString()
                    }, t.encode = (e, t, r) => {
                        let s = {
                            chars: i.Buffer.from(e, "utf8")
                        };
                        return n(s, t, r)
                    }, t.alloc = e => h.Jq().span + h.Jq().span + i.Buffer.from(e, "utf8").length, t
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
                            t.isSigner || = e.isSigner, t.isWritable || = e.isWritable
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
                        data: u().decode(e.data)
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
                            data: u().encode(e.data)
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
                            } = e, n = Array.from(u().decode(e.data)), s = [];
                            encodeLength(s, t.length);
                            let o = [];
                            return encodeLength(o, n.length), {
                                programIdIndex: r,
                                keyIndicesCount: i.Buffer.from(s),
                                keyIndices: t,
                                dataLength: i.Buffer.from(o),
                                data: n
                            }
                        }),
                        n = [];
                    encodeLength(n, r.length);
                    let s = i.Buffer.alloc(1232);
                    i.Buffer.from(n).copy(s);
                    let o = n.length;
                    r.forEach(e => {
                        let t = h.n_([h.u8("programIdIndex"), h.Ik(e.keyIndicesCount.length, "keyIndicesCount"), h.A9(h.u8("keyIndex"), e.keyIndices.length, "keyIndices"), h.Ik(e.dataLength.length, "dataLength"), h.A9(h.u8("userdatum"), e.data.length, "data")]),
                            r = t.encode(e, s, o);
                        o += r
                    }), s = s.slice(0, o);
                    let a = h.n_([h.Ik(1, "numRequiredSignatures"), h.Ik(1, "numReadonlySignedAccounts"), h.Ik(1, "numReadonlyUnsignedAccounts"), h.Ik(t.length, "keyCount"), h.A9(publicKey("key"), e, "keys"), publicKey("recentBlockhash")]),
                        c = {
                            numRequiredSignatures: i.Buffer.from([this.header.numRequiredSignatures]),
                            numReadonlySignedAccounts: i.Buffer.from([this.header.numReadonlySignedAccounts]),
                            numReadonlyUnsignedAccounts: i.Buffer.from([this.header.numReadonlyUnsignedAccounts]),
                            keyCount: i.Buffer.from(t),
                            keys: this.accountKeys.map(e => toBuffer(e.toBytes())),
                            recentBlockhash: u().decode(this.recentBlockhash)
                        },
                        l = i.Buffer.alloc(2048),
                        d = a.encode(c, l);
                    return s.copy(l, d), l.slice(0, d + s.length)
                }
                static from(e) {
                    let t = [...e],
                        r = t.shift();
                    if (r !== (127 & r)) throw Error("Versioned messages must be deserialized with VersionedMessage.deserialize()");
                    let n = t.shift(),
                        s = t.shift(),
                        o = decodeLength(t),
                        a = [];
                    for (let e = 0; e < o; e++) {
                        let e = t.slice(0, 32);
                        t = t.slice(32), a.push(new PublicKey(i.Buffer.from(e)))
                    }
                    let c = t.slice(0, 32);
                    t = t.slice(32);
                    let l = decodeLength(t),
                        d = [];
                    for (let e = 0; e < l; e++) {
                        let e = t.shift(),
                            r = decodeLength(t),
                            n = t.slice(0, r);
                        t = t.slice(r);
                        let s = decodeLength(t),
                            o = t.slice(0, s),
                            a = u().encode(i.Buffer.from(o));
                        t = t.slice(s), d.push({
                            programIdIndex: e,
                            accounts: n,
                            data: a
                        })
                    }
                    let h = {
                        header: {
                            numRequiredSignatures: r,
                            numReadonlySignedAccounts: n,
                            numReadonlyUnsignedAccounts: s
                        },
                        recentBlockhash: u().encode(i.Buffer.from(c)),
                        accountKeys: a,
                        instructions: d
                    };
                    return new Message(h)
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
                    let s = h.n_([h.u8("prefix"), h.n_([h.u8("numRequiredSignatures"), h.u8("numReadonlySignedAccounts"), h.u8("numReadonlyUnsignedAccounts")], "header"), h.Ik(e.length, "staticAccountKeysLength"), h.A9(publicKey(), this.staticAccountKeys.length, "staticAccountKeys"), publicKey("recentBlockhash"), h.Ik(r.length, "instructionsLength"), h.Ik(t.length, "serializedInstructions"), h.Ik(i.length, "addressTableLookupsLength"), h.Ik(n.length, "serializedAddressTableLookups")]),
                        o = new Uint8Array(1232),
                        a = s.encode({
                            prefix: 128,
                            header: this.header,
                            staticAccountKeysLength: new Uint8Array(e),
                            staticAccountKeys: this.staticAccountKeys.map(e => e.toBytes()),
                            recentBlockhash: u().decode(this.recentBlockhash),
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
                        let s = h.n_([h.u8("programIdIndex"), h.Ik(n.length, "encodedAccountKeyIndexesLength"), h.A9(h.u8(), r.accountKeyIndexes.length, "accountKeyIndexes"), h.Ik(i.length, "encodedDataLength"), h.Ik(r.data.length, "data")]);
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
                        let s = h.n_([publicKey("accountKey"), h.Ik(n.length, "encodedWritableIndexesLength"), h.A9(h.u8(), r.writableIndexes.length, "writableIndexes"), h.Ik(i.length, "encodedReadonlyIndexesLength"), h.A9(h.u8(), r.readonlyIndexes.length, "readonlyIndexes")]);
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
                    let a = u().encode(t.splice(0, 32)),
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
                    let d = decodeLength(t),
                        h = [];
                    for (let e = 0; e < d; e++) {
                        let e = new PublicKey(t.splice(0, 32)),
                            r = decodeLength(t),
                            n = t.splice(0, r),
                            i = decodeLength(t),
                            s = t.splice(0, i);
                        h.push({
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
                        addressTableLookups: h
                    })
                }
            };
            let x = i.Buffer.alloc(64).fill(0);
            let TransactionInstruction = class TransactionInstruction {
                constructor(e) {
                    this.keys = void 0, this.programId = void 0, this.data = i.Buffer.alloc(0), this.programId = e.programId, this.keys = e.keys, e.data && (this.data = e.data)
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
                        return e.isSigner !== t.isSigner ? e.isSigner ? -1 : 1 : e.isWritable !== t.isWritable ? e.isWritable ? -1 : 1 : e.pubkey.toBase58().localeCompare(t.pubkey.toBase58(), "en", {
                            localeMatcher: "best fit",
                            usage: "sort",
                            sensitivity: "variant",
                            ignorePunctuation: !1,
                            numeric: !1,
                            caseFirst: "lower"
                        })
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
                        d = [],
                        h = [];
                    s.forEach(({
                        pubkey: e,
                        isSigner: t,
                        isWritable: r
                    }) => {
                        t ? (d.push(e.toString()), a += 1, r || (c += 1)) : (h.push(e.toString()), r || (l += 1))
                    });
                    let p = d.concat(h),
                        g = t.map(e => {
                            let {
                                data: t,
                                programId: r
                            } = e;
                            return {
                                programIdIndex: p.indexOf(r.toString()),
                                accounts: e.keys.map(e => p.indexOf(e.pubkey.toString())),
                                data: u().encode(t)
                            }
                        });
                    return g.forEach(e => {
                        assert(e.programIdIndex >= 0), e.accounts.forEach(e => assert(e >= 0))
                    }), new Message({
                        header: {
                            numRequiredSignatures: a,
                            numReadonlySignedAccounts: c,
                            numReadonlyUnsignedAccounts: l
                        },
                        accountKeys: p,
                        recentBlockhash: e,
                        instructions: g
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
                    this.signatures[r].signature = i.Buffer.from(t)
                }
                verifySignatures(e = !0) {
                    let t = this._getMessageSignednessErrors(this.serializeMessage(), e);
                    return !t
                }
                _getMessageSignednessErrors(e, t) {
                    let r = {};
                    for (let {
                            signature: n,
                            publicKey: i
                        } of this.signatures) null === n ? t && (r.missing || = []).push(i) : m(n, e, i.toBytes()) || (r.invalid || = []).push(i);
                    return r.invalid || r.missing ? r : void 0
                }
                serialize(e) {
                    let {
                        requireAllSignatures: t,
                        verifySignatures: r
                    } = Object.assign({
                        requireAllSignatures: !0,
                        verifySignatures: !0
                    }, e), n = this.serializeMessage();
                    if (r) {
                        let e = this._getMessageSignednessErrors(n, t);
                        if (e) {
                            let t = "Signature verification failed.";
                            throw e.invalid && (t += `
Invalid signature for public key${1===e.invalid.length?"":"(s)"} [\`${e.invalid.map(e=>e.toBase58()).join("`, `")}\`].`), e.missing && (t += `
Missing signature for public key${1===e.missing.length?"":"(s)"} [\`${e.missing.map(e=>e.toBase58()).join("`, `")}\`].`), Error(t)
                        }
                    }
                    return this._serialize(n)
                }
                _serialize(e) {
                    let {
                        signatures: t
                    } = this, r = [];
                    encodeLength(r, t.length);
                    let n = r.length + 64 * t.length + e.length,
                        s = i.Buffer.alloc(n);
                    return assert(t.length < 256), i.Buffer.from(r).copy(s, 0), t.forEach(({
                        signature: e
                    }, t) => {
                        null !== e && (assert(64 === e.length, "signature has invalid length"), i.Buffer.from(e).copy(s, r.length + 64 * t))
                    }), e.copy(s, r.length + 64 * t.length), assert(s.length <= 1232, `Transaction too large: ${s.length} > 1232`), s
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
                        t = t.slice(64), n.push(u().encode(i.Buffer.from(e)))
                    }
                    return Transaction.populate(Message.from(t), n)
                }
                static populate(e, t = []) {
                    let r = new Transaction;
                    return r.recentBlockhash = e.recentBlockhash, e.header.numRequiredSignatures > 0 && (r.feePayer = e.accountKeys[0]), t.forEach((t, n) => {
                        let i = {
                            signature: t == u().encode(x) ? null : u().decode(t),
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
                            data: u().decode(t.data)
                        }))
                    }), r._message = e, r._json = r.toJSON(), r
                }
            };
            let S = new PublicKey("SysvarC1ock11111111111111111111111111111111");
            new PublicKey("SysvarEpochSchedu1e111111111111111111111111"), new PublicKey("Sysvar1nstructions1111111111111111111111111");
            let A = new PublicKey("SysvarRecentB1ockHashes11111111111111111111"),
                R = new PublicKey("SysvarRent111111111111111111111111111111111");
            new PublicKey("SysvarRewards111111111111111111111111111111"), new PublicKey("SysvarS1otHashes111111111111111111111111111"), new PublicKey("SysvarS1otHistory11111111111111111111111111");
            let w = new PublicKey("SysvarStakeHistory1111111111111111111111111");
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
                    abortSignal: n ? .abortSignal,
                    signature: o,
                    blockhash: t.recentBlockhash,
                    lastValidBlockHeight: t.lastValidBlockHeight
                }, n && n.commitment)).value;
                else if (null != t.minNonceContextSlot && null != t.nonceInfo) {
                    let {
                        nonceInstruction: r
                    } = t.nonceInfo, s = r.keys[0].pubkey;
                    i = (await e.confirmTransaction({
                        abortSignal: n ? .abortSignal,
                        minContextSlot: t.minNonceContextSlot,
                        nonceAccountPubkey: s,
                        nonceValue: t.nonceInfo.nonce,
                        signature: o
                    }, n && n.commitment)).value
                } else n ? .abortSignal != null && console.warn("sendAndConfirmTransaction(): A transaction with a deprecated confirmation strategy was supplied along with an `abortSignal`. Only transactions having `lastValidBlockHeight` or a combination of `nonceInfo` and `minNonceContextSlot` are abortable."), i = (await e.confirmTransaction(o, n && n.commitment)).value;
                if (i.err) throw Error(`Transaction ${o} failed (${JSON.stringify(i)})`);
                return o
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
                    n = i.Buffer.alloc(r),
                    s = Object.assign({
                        instruction: e.index
                    }, t);
                return e.layout.encode(s, n), n
            }
            let K = h._O("lamportsPerSignature"),
                P = h.n_([h.Jq("version"), h.Jq("state"), publicKey("authorizedPubkey"), publicKey("nonce"), h.n_([K], "feeCalculator")]),
                B = P.span,
                encodeDecode = e => {
                    let t = e.decode.bind(e),
                        r = e.encode.bind(e);
                    return {
                        decode: t,
                        encode: r
                    }
                },
                u64 = e => {
                    let t = (0, h.Ik)(8, e),
                        {
                            encode: r,
                            decode: n
                        } = encodeDecode(t);
                    return t.decode = (e, t) => {
                        let r = n(e, t);
                        return (0, p.oU)(i.Buffer.from(r))
                    }, t.encode = (e, t, n) => {
                        let i = (0, p.k$)(e, 8);
                        return r(i, t, n)
                    }, t
                },
                _ = Object.freeze({
                    Create: {
                        index: 0,
                        layout: h.n_([h.Jq("instruction"), h.gM("lamports"), h.gM("space"), publicKey("programId")])
                    },
                    Assign: {
                        index: 1,
                        layout: h.n_([h.Jq("instruction"), publicKey("programId")])
                    },
                    Transfer: {
                        index: 2,
                        layout: h.n_([h.Jq("instruction"), u64("lamports")])
                    },
                    CreateWithSeed: {
                        index: 3,
                        layout: h.n_([h.Jq("instruction"), publicKey("base"), rustString("seed"), h.gM("lamports"), h.gM("space"), publicKey("programId")])
                    },
                    AdvanceNonceAccount: {
                        index: 4,
                        layout: h.n_([h.Jq("instruction")])
                    },
                    WithdrawNonceAccount: {
                        index: 5,
                        layout: h.n_([h.Jq("instruction"), h.gM("lamports")])
                    },
                    InitializeNonceAccount: {
                        index: 6,
                        layout: h.n_([h.Jq("instruction"), publicKey("authorized")])
                    },
                    AuthorizeNonceAccount: {
                        index: 7,
                        layout: h.n_([h.Jq("instruction"), publicKey("authorized")])
                    },
                    Allocate: {
                        index: 8,
                        layout: h.n_([h.Jq("instruction"), h.gM("space")])
                    },
                    AllocateWithSeed: {
                        index: 9,
                        layout: h.n_([h.Jq("instruction"), publicKey("base"), rustString("seed"), h.gM("space"), publicKey("programId")])
                    },
                    AssignWithSeed: {
                        index: 10,
                        layout: h.n_([h.Jq("instruction"), publicKey("base"), rustString("seed"), publicKey("programId")])
                    },
                    TransferWithSeed: {
                        index: 11,
                        layout: h.n_([h.Jq("instruction"), u64("lamports"), rustString("seed"), publicKey("programId")])
                    },
                    UpgradeNonceAccount: {
                        index: 12,
                        layout: h.n_([h.Jq("instruction")])
                    }
                });
            let SystemProgram = class SystemProgram {
                constructor() {}
                static createAccount(e) {
                    let t = _.Create,
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
                        let n = _.TransferWithSeed;
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
                        let n = _.Transfer;
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
                        let n = _.AssignWithSeed;
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
                        let n = _.Assign;
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
                    let t = _.CreateWithSeed,
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
                        space: B,
                        programId: this.programId
                    })) : t.add(SystemProgram.createAccount({
                        fromPubkey: e.fromPubkey,
                        newAccountPubkey: e.noncePubkey,
                        lamports: e.lamports,
                        space: B,
                        programId: this.programId
                    }));
                    let r = {
                        noncePubkey: e.noncePubkey,
                        authorizedPubkey: e.authorizedPubkey
                    };
                    return t.add(this.nonceInitialize(r)), t
                }
                static nonceInitialize(e) {
                    let t = _.InitializeNonceAccount,
                        r = encodeData(t, {
                            authorized: toBuffer(e.authorizedPubkey.toBuffer())
                        }),
                        n = {
                            keys: [{
                                pubkey: e.noncePubkey,
                                isSigner: !1,
                                isWritable: !0
                            }, {
                                pubkey: A,
                                isSigner: !1,
                                isWritable: !1
                            }, {
                                pubkey: R,
                                isSigner: !1,
                                isWritable: !1
                            }],
                            programId: this.programId,
                            data: r
                        };
                    return new TransactionInstruction(n)
                }
                static nonceAdvance(e) {
                    let t = _.AdvanceNonceAccount,
                        r = encodeData(t),
                        n = {
                            keys: [{
                                pubkey: e.noncePubkey,
                                isSigner: !1,
                                isWritable: !0
                            }, {
                                pubkey: A,
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
                    let t = _.WithdrawNonceAccount,
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
                            pubkey: A,
                            isSigner: !1,
                            isWritable: !1
                        }, {
                            pubkey: R,
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
                    let t = _.AuthorizeNonceAccount,
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
                        let n = _.AllocateWithSeed;
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
                        let n = _.Allocate;
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
                static async load(e, t, r, n, s) {
                    {
                        let i = await e.getMinimumBalanceForRentExemption(s.length),
                            o = await e.getAccountInfo(r.publicKey, "confirmed"),
                            a = null;
                        if (null !== o) {
                            if (o.executable) return console.error("Program load failed, account is already executable"), !1;
                            o.data.length !== s.length && (a = a || new Transaction).add(SystemProgram.allocate({
                                accountPubkey: r.publicKey,
                                space: s.length
                            })), o.owner.equals(n) || (a = a || new Transaction).add(SystemProgram.assign({
                                accountPubkey: r.publicKey,
                                programId: n
                            })), o.lamports < i && (a = a || new Transaction).add(SystemProgram.transfer({
                                fromPubkey: t.publicKey,
                                toPubkey: r.publicKey,
                                lamports: i - o.lamports
                            }))
                        } else a = new Transaction().add(SystemProgram.createAccount({
                            fromPubkey: t.publicKey,
                            newAccountPubkey: r.publicKey,
                            lamports: i > 0 ? i : 1,
                            space: s.length,
                            programId: n
                        }));
                        null !== a && await sendAndConfirmTransaction(e, a, [t, r], {
                            commitment: "confirmed"
                        })
                    }
                    let o = h.n_([h.Jq("instruction"), h.Jq("offset"), h.Jq("bytesLength"), h.Jq("bytesLengthPadding"), h.A9(h.u8("byte"), h.cv(h.Jq(), -8), "bytes")]),
                        a = Loader.chunkSize,
                        c = 0,
                        u = s,
                        l = [];
                    for (; u.length > 0;) {
                        let s = u.slice(0, a),
                            d = i.Buffer.alloc(a + 16);
                        o.encode({
                            instruction: 0,
                            offset: c,
                            bytes: s,
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
                        l.push(sendAndConfirmTransaction(e, h, [t, r], {
                            commitment: "confirmed"
                        })), e._rpcEndpoint.includes("solana.com") && await new Promise(e => setTimeout(e, 250)), c += a, u = u.slice(a)
                    }
                    await Promise.all(l); {
                        let s = h.n_([h.Jq("instruction")]),
                            o = i.Buffer.alloc(s.span);
                        s.encode({
                            instruction: 1
                        }, o);
                        let a = new Transaction().add({
                                keys: [{
                                    pubkey: r.publicKey,
                                    isSigner: !0,
                                    isWritable: !0
                                }, {
                                    pubkey: R,
                                    isSigner: !1,
                                    isWritable: !1
                                }],
                                programId: n,
                                data: o
                            }),
                            c = "processed",
                            u = await e.sendTransaction(a, [t, r], {
                                preflightCommitment: c
                            }),
                            {
                                context: l,
                                value: d
                            } = await e.confirmTransaction({
                                signature: u,
                                lastValidBlockHeight: a.lastValidBlockHeight,
                                blockhash: a.recentBlockhash
                            }, c);
                        if (d.err) throw Error(`Transaction ${u} failed (${JSON.stringify(d)})`);
                        for (;;) {
                            try {
                                let t = await e.getSlot({
                                    commitment: c
                                });
                                if (t > l.slot) break
                            } catch {}
                            await new Promise(e => setTimeout(e, Math.round(200)))
                        }
                    }
                    return !0
                }
            };
            Loader.chunkSize = 932, new PublicKey("BPFLoader2111111111111111111111111111111111"), Object.prototype.toString, h.n_([h.Jq("typeIndex"), u64("deactivationSlot"), h._O("lastExtendedSlot"), h.u8("lastExtendedStartIndex"), h.u8(), h.A9(publicKey(), h.cv(h.u8(), -1), "authority")]);
            let v = (0, g.oQ)((0, g.eE)(PublicKey), (0, g.Z_)(), e => new PublicKey(e)),
                T = (0, g.bc)([(0, g.Z_)(), (0, g.i0)("base64")]),
                W = (0, g.oQ)((0, g.eE)(i.Buffer), T, e => i.Buffer.from(e[0], "base64"));

            function createRpcResult(e) {
                return (0, g.G0)([(0, g.dt)({
                    jsonrpc: (0, g.i0)("2.0"),
                    id: (0, g.Z_)(),
                    result: e
                }), (0, g.dt)({
                    jsonrpc: (0, g.i0)("2.0"),
                    id: (0, g.Z_)(),
                    error: (0, g.dt)({
                        code: (0, g._4)(),
                        message: (0, g.Z_)(),
                        data: (0, g.jt)((0, g.Yj)())
                    })
                })])
            }
            let j = createRpcResult((0, g._4)());

            function jsonRpcResult(e) {
                return (0, g.oQ)(createRpcResult(e), j, t => "error" in t ? t : { ...t,
                    result: (0, g.Ue)(t.result, e)
                })
            }

            function jsonRpcResultAndContext(e) {
                return jsonRpcResult((0, g.dt)({
                    context: (0, g.dt)({
                        slot: (0, g.Rx)()
                    }),
                    value: e
                }))
            }

            function notificationResultAndContext(e) {
                return (0, g.dt)({
                    context: (0, g.dt)({
                        slot: (0, g.Rx)()
                    }),
                    value: e
                })
            }
            let L = (0, g.dt)({
                foundation: (0, g.Rx)(),
                foundationTerm: (0, g.Rx)(),
                initial: (0, g.Rx)(),
                taper: (0, g.Rx)(),
                terminal: (0, g.Rx)()
            });
            jsonRpcResult((0, g.IX)((0, g.AG)((0, g.dt)({
                epoch: (0, g.Rx)(),
                effectiveSlot: (0, g.Rx)(),
                amount: (0, g.Rx)(),
                postBalance: (0, g.Rx)(),
                commission: (0, g.jt)((0, g.AG)((0, g.Rx)()))
            }))));
            let z = (0, g.IX)((0, g.dt)({
                    slot: (0, g.Rx)(),
                    prioritizationFee: (0, g.Rx)()
                })),
                E = (0, g.dt)({
                    total: (0, g.Rx)(),
                    validator: (0, g.Rx)(),
                    foundation: (0, g.Rx)(),
                    epoch: (0, g.Rx)()
                }),
                q = (0, g.dt)({
                    epoch: (0, g.Rx)(),
                    slotIndex: (0, g.Rx)(),
                    slotsInEpoch: (0, g.Rx)(),
                    absoluteSlot: (0, g.Rx)(),
                    blockHeight: (0, g.jt)((0, g.Rx)()),
                    transactionCount: (0, g.jt)((0, g.Rx)())
                }),
                O = (0, g.dt)({
                    slotsPerEpoch: (0, g.Rx)(),
                    leaderScheduleSlotOffset: (0, g.Rx)(),
                    warmup: (0, g.O7)(),
                    firstNormalEpoch: (0, g.Rx)(),
                    firstNormalSlot: (0, g.Rx)()
                }),
                G = (0, g.IM)((0, g.Z_)(), (0, g.IX)((0, g.Rx)())),
                C = (0, g.AG)((0, g.G0)([(0, g.dt)({}), (0, g.Z_)()])),
                Z = (0, g.dt)({
                    err: C
                }),
                J = (0, g.i0)("receivedSignature");
            (0, g.dt)({
                "solana-core": (0, g.Z_)(),
                "feature-set": (0, g.jt)((0, g.Rx)())
            }), jsonRpcResultAndContext((0, g.dt)({
                err: (0, g.AG)((0, g.G0)([(0, g.dt)({}), (0, g.Z_)()])),
                logs: (0, g.AG)((0, g.IX)((0, g.Z_)())),
                accounts: (0, g.jt)((0, g.AG)((0, g.IX)((0, g.AG)((0, g.dt)({
                    executable: (0, g.O7)(),
                    owner: (0, g.Z_)(),
                    lamports: (0, g.Rx)(),
                    data: (0, g.IX)((0, g.Z_)()),
                    rentEpoch: (0, g.jt)((0, g.Rx)())
                }))))),
                unitsConsumed: (0, g.jt)((0, g.Rx)()),
                returnData: (0, g.jt)((0, g.AG)((0, g.dt)({
                    programId: (0, g.Z_)(),
                    data: (0, g.bc)([(0, g.Z_)(), (0, g.i0)("base64")])
                })))
            })), jsonRpcResultAndContext((0, g.dt)({
                byIdentity: (0, g.IM)((0, g.Z_)(), (0, g.IX)((0, g.Rx)())),
                range: (0, g.dt)({
                    firstSlot: (0, g.Rx)(),
                    lastSlot: (0, g.Rx)()
                })
            })), jsonRpcResult(L), jsonRpcResult(E), jsonRpcResult(z), jsonRpcResult(q), jsonRpcResult(O), jsonRpcResult(G), jsonRpcResult((0, g.Rx)()), jsonRpcResultAndContext((0, g.dt)({
                total: (0, g.Rx)(),
                circulating: (0, g.Rx)(),
                nonCirculating: (0, g.Rx)(),
                nonCirculatingAccounts: (0, g.IX)(v)
            }));
            let M = (0, g.dt)({
                amount: (0, g.Z_)(),
                uiAmount: (0, g.AG)((0, g.Rx)()),
                decimals: (0, g.Rx)(),
                uiAmountString: (0, g.jt)((0, g.Z_)())
            });
            jsonRpcResultAndContext((0, g.IX)((0, g.dt)({
                address: v,
                amount: (0, g.Z_)(),
                uiAmount: (0, g.AG)((0, g.Rx)()),
                decimals: (0, g.Rx)(),
                uiAmountString: (0, g.jt)((0, g.Z_)())
            }))), jsonRpcResultAndContext((0, g.IX)((0, g.dt)({
                pubkey: v,
                account: (0, g.dt)({
                    executable: (0, g.O7)(),
                    owner: v,
                    lamports: (0, g.Rx)(),
                    data: W,
                    rentEpoch: (0, g.Rx)()
                })
            })));
            let X = (0, g.dt)({
                program: (0, g.Z_)(),
                parsed: (0, g._4)(),
                space: (0, g.Rx)()
            });
            jsonRpcResultAndContext((0, g.IX)((0, g.dt)({
                pubkey: v,
                account: (0, g.dt)({
                    executable: (0, g.O7)(),
                    owner: v,
                    lamports: (0, g.Rx)(),
                    data: X,
                    rentEpoch: (0, g.Rx)()
                })
            }))), jsonRpcResultAndContext((0, g.IX)((0, g.dt)({
                lamports: (0, g.Rx)(),
                address: v
            })));
            let D = (0, g.dt)({
                executable: (0, g.O7)(),
                owner: v,
                lamports: (0, g.Rx)(),
                data: W,
                rentEpoch: (0, g.Rx)()
            });
            (0, g.dt)({
                pubkey: v,
                account: D
            });
            let N = (0, g.oQ)((0, g.G0)([(0, g.eE)(i.Buffer), X]), (0, g.G0)([T, X]), e => Array.isArray(e) ? (0, g.Ue)(e, W) : e),
                U = (0, g.dt)({
                    executable: (0, g.O7)(),
                    owner: v,
                    lamports: (0, g.Rx)(),
                    data: N,
                    rentEpoch: (0, g.Rx)()
                });
            (0, g.dt)({
                pubkey: v,
                account: U
            }), (0, g.dt)({
                state: (0, g.G0)([(0, g.i0)("active"), (0, g.i0)("inactive"), (0, g.i0)("activating"), (0, g.i0)("deactivating")]),
                active: (0, g.Rx)(),
                inactive: (0, g.Rx)()
            }), jsonRpcResult((0, g.IX)((0, g.dt)({
                signature: (0, g.Z_)(),
                slot: (0, g.Rx)(),
                err: C,
                memo: (0, g.AG)((0, g.Z_)()),
                blockTime: (0, g.jt)((0, g.AG)((0, g.Rx)()))
            }))), jsonRpcResult((0, g.IX)((0, g.dt)({
                signature: (0, g.Z_)(),
                slot: (0, g.Rx)(),
                err: C,
                memo: (0, g.AG)((0, g.Z_)()),
                blockTime: (0, g.jt)((0, g.AG)((0, g.Rx)()))
            }))), (0, g.dt)({
                subscription: (0, g.Rx)(),
                result: notificationResultAndContext(D)
            });
            let V = (0, g.dt)({
                pubkey: v,
                account: D
            });
            (0, g.dt)({
                subscription: (0, g.Rx)(),
                result: notificationResultAndContext(V)
            });
            let F = (0, g.dt)({
                parent: (0, g.Rx)(),
                slot: (0, g.Rx)(),
                root: (0, g.Rx)()
            });
            (0, g.dt)({
                subscription: (0, g.Rx)(),
                result: F
            });
            let $ = (0, g.G0)([(0, g.dt)({
                type: (0, g.G0)([(0, g.i0)("firstShredReceived"), (0, g.i0)("completed"), (0, g.i0)("optimisticConfirmation"), (0, g.i0)("root")]),
                slot: (0, g.Rx)(),
                timestamp: (0, g.Rx)()
            }), (0, g.dt)({
                type: (0, g.i0)("createdBank"),
                parent: (0, g.Rx)(),
                slot: (0, g.Rx)(),
                timestamp: (0, g.Rx)()
            }), (0, g.dt)({
                type: (0, g.i0)("frozen"),
                slot: (0, g.Rx)(),
                timestamp: (0, g.Rx)(),
                stats: (0, g.dt)({
                    numTransactionEntries: (0, g.Rx)(),
                    numSuccessfulTransactions: (0, g.Rx)(),
                    numFailedTransactions: (0, g.Rx)(),
                    maxTransactionsPerEntry: (0, g.Rx)()
                })
            }), (0, g.dt)({
                type: (0, g.i0)("dead"),
                slot: (0, g.Rx)(),
                timestamp: (0, g.Rx)(),
                err: (0, g.Z_)()
            })]);
            (0, g.dt)({
                subscription: (0, g.Rx)(),
                result: $
            }), (0, g.dt)({
                subscription: (0, g.Rx)(),
                result: notificationResultAndContext((0, g.G0)([Z, J]))
            }), (0, g.dt)({
                subscription: (0, g.Rx)(),
                result: (0, g.Rx)()
            }), (0, g.dt)({
                pubkey: (0, g.Z_)(),
                gossip: (0, g.AG)((0, g.Z_)()),
                tpu: (0, g.AG)((0, g.Z_)()),
                rpc: (0, g.AG)((0, g.Z_)()),
                version: (0, g.AG)((0, g.Z_)())
            });
            let H = (0, g.dt)({
                votePubkey: (0, g.Z_)(),
                nodePubkey: (0, g.Z_)(),
                activatedStake: (0, g.Rx)(),
                epochVoteAccount: (0, g.O7)(),
                epochCredits: (0, g.IX)((0, g.bc)([(0, g.Rx)(), (0, g.Rx)(), (0, g.Rx)()])),
                commission: (0, g.Rx)(),
                lastVote: (0, g.Rx)(),
                rootSlot: (0, g.AG)((0, g.Rx)())
            });
            jsonRpcResult((0, g.dt)({
                current: (0, g.IX)(H),
                delinquent: (0, g.IX)(H)
            }));
            let Q = (0, g.G0)([(0, g.i0)("processed"), (0, g.i0)("confirmed"), (0, g.i0)("finalized")]),
                Y = (0, g.dt)({
                    slot: (0, g.Rx)(),
                    confirmations: (0, g.AG)((0, g.Rx)()),
                    err: C,
                    confirmationStatus: (0, g.jt)(Q)
                });
            jsonRpcResultAndContext((0, g.IX)((0, g.AG)(Y))), jsonRpcResult((0, g.Rx)());
            let ee = (0, g.dt)({
                    accountKey: v,
                    writableIndexes: (0, g.IX)((0, g.Rx)()),
                    readonlyIndexes: (0, g.IX)((0, g.Rx)())
                }),
                et = (0, g.dt)({
                    signatures: (0, g.IX)((0, g.Z_)()),
                    message: (0, g.dt)({
                        accountKeys: (0, g.IX)((0, g.Z_)()),
                        header: (0, g.dt)({
                            numRequiredSignatures: (0, g.Rx)(),
                            numReadonlySignedAccounts: (0, g.Rx)(),
                            numReadonlyUnsignedAccounts: (0, g.Rx)()
                        }),
                        instructions: (0, g.IX)((0, g.dt)({
                            accounts: (0, g.IX)((0, g.Rx)()),
                            data: (0, g.Z_)(),
                            programIdIndex: (0, g.Rx)()
                        })),
                        recentBlockhash: (0, g.Z_)(),
                        addressTableLookups: (0, g.jt)((0, g.IX)(ee))
                    })
                }),
                er = (0, g.dt)({
                    pubkey: v,
                    signer: (0, g.O7)(),
                    writable: (0, g.O7)(),
                    source: (0, g.jt)((0, g.G0)([(0, g.i0)("transaction"), (0, g.i0)("lookupTable")]))
                }),
                en = (0, g.dt)({
                    accountKeys: (0, g.IX)(er),
                    signatures: (0, g.IX)((0, g.Z_)())
                }),
                ei = (0, g.dt)({
                    parsed: (0, g._4)(),
                    program: (0, g.Z_)(),
                    programId: v
                }),
                es = (0, g.dt)({
                    accounts: (0, g.IX)(v),
                    data: (0, g.Z_)(),
                    programId: v
                }),
                eo = (0, g.G0)([es, ei]),
                ea = (0, g.G0)([(0, g.dt)({
                    parsed: (0, g._4)(),
                    program: (0, g.Z_)(),
                    programId: (0, g.Z_)()
                }), (0, g.dt)({
                    accounts: (0, g.IX)((0, g.Z_)()),
                    data: (0, g.Z_)(),
                    programId: (0, g.Z_)()
                })]),
                ec = (0, g.oQ)(eo, ea, e => "accounts" in e ? (0, g.Ue)(e, es) : (0, g.Ue)(e, ei)),
                eu = (0, g.dt)({
                    signatures: (0, g.IX)((0, g.Z_)()),
                    message: (0, g.dt)({
                        accountKeys: (0, g.IX)(er),
                        instructions: (0, g.IX)(ec),
                        recentBlockhash: (0, g.Z_)(),
                        addressTableLookups: (0, g.jt)((0, g.AG)((0, g.IX)(ee)))
                    })
                }),
                el = (0, g.dt)({
                    accountIndex: (0, g.Rx)(),
                    mint: (0, g.Z_)(),
                    owner: (0, g.jt)((0, g.Z_)()),
                    uiTokenAmount: M
                }),
                ed = (0, g.dt)({
                    writable: (0, g.IX)(v),
                    readonly: (0, g.IX)(v)
                }),
                eh = (0, g.dt)({
                    err: C,
                    fee: (0, g.Rx)(),
                    innerInstructions: (0, g.jt)((0, g.AG)((0, g.IX)((0, g.dt)({
                        index: (0, g.Rx)(),
                        instructions: (0, g.IX)((0, g.dt)({
                            accounts: (0, g.IX)((0, g.Rx)()),
                            data: (0, g.Z_)(),
                            programIdIndex: (0, g.Rx)()
                        }))
                    })))),
                    preBalances: (0, g.IX)((0, g.Rx)()),
                    postBalances: (0, g.IX)((0, g.Rx)()),
                    logMessages: (0, g.jt)((0, g.AG)((0, g.IX)((0, g.Z_)()))),
                    preTokenBalances: (0, g.jt)((0, g.AG)((0, g.IX)(el))),
                    postTokenBalances: (0, g.jt)((0, g.AG)((0, g.IX)(el))),
                    loadedAddresses: (0, g.jt)(ed),
                    computeUnitsConsumed: (0, g.jt)((0, g.Rx)())
                }),
                ep = (0, g.dt)({
                    err: C,
                    fee: (0, g.Rx)(),
                    innerInstructions: (0, g.jt)((0, g.AG)((0, g.IX)((0, g.dt)({
                        index: (0, g.Rx)(),
                        instructions: (0, g.IX)(ec)
                    })))),
                    preBalances: (0, g.IX)((0, g.Rx)()),
                    postBalances: (0, g.IX)((0, g.Rx)()),
                    logMessages: (0, g.jt)((0, g.AG)((0, g.IX)((0, g.Z_)()))),
                    preTokenBalances: (0, g.jt)((0, g.AG)((0, g.IX)(el))),
                    postTokenBalances: (0, g.jt)((0, g.AG)((0, g.IX)(el))),
                    loadedAddresses: (0, g.jt)(ed),
                    computeUnitsConsumed: (0, g.jt)((0, g.Rx)())
                }),
                eg = (0, g.G0)([(0, g.i0)(0), (0, g.i0)("legacy")]),
                ey = (0, g.dt)({
                    pubkey: (0, g.Z_)(),
                    lamports: (0, g.Rx)(),
                    postBalance: (0, g.AG)((0, g.Rx)()),
                    rewardType: (0, g.AG)((0, g.Z_)()),
                    commission: (0, g.jt)((0, g.AG)((0, g.Rx)()))
                });
            jsonRpcResult((0, g.AG)((0, g.dt)({
                blockhash: (0, g.Z_)(),
                previousBlockhash: (0, g.Z_)(),
                parentSlot: (0, g.Rx)(),
                transactions: (0, g.IX)((0, g.dt)({
                    transaction: et,
                    meta: (0, g.AG)(eh),
                    version: (0, g.jt)(eg)
                })),
                rewards: (0, g.jt)((0, g.IX)(ey)),
                blockTime: (0, g.AG)((0, g.Rx)()),
                blockHeight: (0, g.AG)((0, g.Rx)())
            }))), jsonRpcResult((0, g.AG)((0, g.dt)({
                blockhash: (0, g.Z_)(),
                previousBlockhash: (0, g.Z_)(),
                parentSlot: (0, g.Rx)(),
                rewards: (0, g.jt)((0, g.IX)(ey)),
                blockTime: (0, g.AG)((0, g.Rx)()),
                blockHeight: (0, g.AG)((0, g.Rx)())
            }))), jsonRpcResult((0, g.AG)((0, g.dt)({
                blockhash: (0, g.Z_)(),
                previousBlockhash: (0, g.Z_)(),
                parentSlot: (0, g.Rx)(),
                transactions: (0, g.IX)((0, g.dt)({
                    transaction: en,
                    meta: (0, g.AG)(eh),
                    version: (0, g.jt)(eg)
                })),
                rewards: (0, g.jt)((0, g.IX)(ey)),
                blockTime: (0, g.AG)((0, g.Rx)()),
                blockHeight: (0, g.AG)((0, g.Rx)())
            }))), jsonRpcResult((0, g.AG)((0, g.dt)({
                blockhash: (0, g.Z_)(),
                previousBlockhash: (0, g.Z_)(),
                parentSlot: (0, g.Rx)(),
                transactions: (0, g.IX)((0, g.dt)({
                    transaction: eu,
                    meta: (0, g.AG)(ep),
                    version: (0, g.jt)(eg)
                })),
                rewards: (0, g.jt)((0, g.IX)(ey)),
                blockTime: (0, g.AG)((0, g.Rx)()),
                blockHeight: (0, g.AG)((0, g.Rx)())
            }))), jsonRpcResult((0, g.AG)((0, g.dt)({
                blockhash: (0, g.Z_)(),
                previousBlockhash: (0, g.Z_)(),
                parentSlot: (0, g.Rx)(),
                transactions: (0, g.IX)((0, g.dt)({
                    transaction: en,
                    meta: (0, g.AG)(ep),
                    version: (0, g.jt)(eg)
                })),
                rewards: (0, g.jt)((0, g.IX)(ey)),
                blockTime: (0, g.AG)((0, g.Rx)()),
                blockHeight: (0, g.AG)((0, g.Rx)())
            }))), jsonRpcResult((0, g.AG)((0, g.dt)({
                blockhash: (0, g.Z_)(),
                previousBlockhash: (0, g.Z_)(),
                parentSlot: (0, g.Rx)(),
                rewards: (0, g.jt)((0, g.IX)(ey)),
                blockTime: (0, g.AG)((0, g.Rx)()),
                blockHeight: (0, g.AG)((0, g.Rx)())
            }))), jsonRpcResult((0, g.AG)((0, g.dt)({
                blockhash: (0, g.Z_)(),
                previousBlockhash: (0, g.Z_)(),
                parentSlot: (0, g.Rx)(),
                transactions: (0, g.IX)((0, g.dt)({
                    transaction: et,
                    meta: (0, g.AG)(eh)
                })),
                rewards: (0, g.jt)((0, g.IX)(ey)),
                blockTime: (0, g.AG)((0, g.Rx)())
            }))), jsonRpcResult((0, g.AG)((0, g.dt)({
                blockhash: (0, g.Z_)(),
                previousBlockhash: (0, g.Z_)(),
                parentSlot: (0, g.Rx)(),
                signatures: (0, g.IX)((0, g.Z_)()),
                blockTime: (0, g.AG)((0, g.Rx)())
            }))), jsonRpcResult((0, g.AG)((0, g.dt)({
                slot: (0, g.Rx)(),
                meta: (0, g.AG)(eh),
                blockTime: (0, g.jt)((0, g.AG)((0, g.Rx)())),
                transaction: et,
                version: (0, g.jt)(eg)
            }))), jsonRpcResult((0, g.AG)((0, g.dt)({
                slot: (0, g.Rx)(),
                transaction: eu,
                meta: (0, g.AG)(ep),
                blockTime: (0, g.jt)((0, g.AG)((0, g.Rx)())),
                version: (0, g.jt)(eg)
            }))), jsonRpcResultAndContext((0, g.dt)({
                blockhash: (0, g.Z_)(),
                feeCalculator: (0, g.dt)({
                    lamportsPerSignature: (0, g.Rx)()
                })
            })), jsonRpcResultAndContext((0, g.dt)({
                blockhash: (0, g.Z_)(),
                lastValidBlockHeight: (0, g.Rx)()
            })), jsonRpcResultAndContext((0, g.O7)());
            let eb = (0, g.dt)({
                slot: (0, g.Rx)(),
                numTransactions: (0, g.Rx)(),
                numSlots: (0, g.Rx)(),
                samplePeriodSecs: (0, g.Rx)()
            });
            jsonRpcResult((0, g.IX)(eb)), jsonRpcResultAndContext((0, g.AG)((0, g.dt)({
                feeCalculator: (0, g.dt)({
                    lamportsPerSignature: (0, g.Rx)()
                })
            }))), jsonRpcResult((0, g.Z_)()), jsonRpcResult((0, g.Z_)());
            let ef = (0, g.dt)({
                err: C,
                logs: (0, g.IX)((0, g.Z_)()),
                signature: (0, g.Z_)()
            });
            (0, g.dt)({
                result: notificationResultAndContext(ef),
                subscription: (0, g.Rx)()
            });
            let Keypair = class Keypair {
                constructor(e) {
                    this._keypair = void 0, this._keypair = e ? ? generateKeypair()
                }
                static generate() {
                    return new Keypair(generateKeypair())
                }
                static fromSecretKey(e, t) {
                    if (64 !== e.byteLength) throw Error("bad secret key size");
                    let r = e.slice(32, 64);
                    if (!t || !t.skipValidation) {
                        let t = e.slice(0, 32),
                            n = f(t);
                        for (let e = 0; e < 32; e++)
                            if (r[e] !== n[e]) throw Error("provided secretKey is invalid")
                    }
                    return new Keypair({
                        publicKey: r,
                        secretKey: e
                    })
                }
                static fromSeed(e) {
                    let t = f(e),
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
                    layout: h.n_([h.Jq("instruction"), u64("recentSlot"), h.u8("bumpSeed")])
                },
                FreezeLookupTable: {
                    index: 1,
                    layout: h.n_([h.Jq("instruction")])
                },
                ExtendLookupTable: {
                    index: 2,
                    layout: h.n_([h.Jq("instruction"), u64(), h.A9(publicKey(), h.cv(h.Jq(), -8), "addresses")])
                },
                DeactivateLookupTable: {
                    index: 3,
                    layout: h.n_([h.Jq("instruction")])
                },
                CloseLookupTable: {
                    index: 4,
                    layout: h.n_([h.Jq("instruction")])
                }
            }), new PublicKey("AddressLookupTab1e1111111111111111111111111"), Object.freeze({
                RequestUnits: {
                    index: 0,
                    layout: h.n_([h.u8("instruction"), h.Jq("units"), h.Jq("additionalFee")])
                },
                RequestHeapFrame: {
                    index: 1,
                    layout: h.n_([h.u8("instruction"), h.Jq("bytes")])
                },
                SetComputeUnitLimit: {
                    index: 2,
                    layout: h.n_([h.u8("instruction"), h.Jq("units")])
                },
                SetComputeUnitPrice: {
                    index: 3,
                    layout: h.n_([h.u8("instruction"), u64("microLamports")])
                }
            }), new PublicKey("ComputeBudget111111111111111111111111111111");
            let em = h.n_([h.u8("numSignatures"), h.u8("padding"), h.KB("signatureOffset"), h.KB("signatureInstructionIndex"), h.KB("publicKeyOffset"), h.KB("publicKeyInstructionIndex"), h.KB("messageDataOffset"), h.KB("messageDataSize"), h.KB("messageInstructionIndex")]);
            let Ed25519Program = class Ed25519Program {
                constructor() {}
                static createInstructionWithPublicKey(e) {
                    let {
                        publicKey: t,
                        message: r,
                        signature: n,
                        instructionIndex: s
                    } = e;
                    assert(32 === t.length, `Public Key must be 32 bytes but received ${t.length} bytes`), assert(64 === n.length, `Signature must be 64 bytes but received ${n.length} bytes`);
                    let o = em.span,
                        a = o + t.length,
                        c = a + n.length,
                        u = i.Buffer.alloc(c + r.length),
                        l = null == s ? 65535 : s;
                    return em.encode({
                        numSignatures: 1,
                        padding: 0,
                        signatureOffset: a,
                        signatureInstructionIndex: l,
                        publicKeyOffset: o,
                        publicKeyInstructionIndex: l,
                        messageDataOffset: c,
                        messageDataSize: r.length,
                        messageInstructionIndex: l
                    }, u), u.fill(t, o), u.fill(n, a), u.fill(r, c), new TransactionInstruction({
                        keys: [],
                        programId: Ed25519Program.programId,
                        data: u
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
            Ed25519Program.programId = new PublicKey("Ed25519SigVerify111111111111111111111111111");
            let ecdsaSign = (e, t) => {
                let r = b.kA.sign(e, t);
                return [r.toCompactRawBytes(), r.recovery]
            };
            b.kA.utils.isValidPrivateKey;
            let ek = b.kA.getPublicKey,
                eI = h.n_([h.u8("numSignatures"), h.KB("signatureOffset"), h.u8("signatureInstructionIndex"), h.KB("ethAddressOffset"), h.u8("ethAddressInstructionIndex"), h.KB("messageDataOffset"), h.KB("messageDataSize"), h.u8("messageInstructionIndex"), h.Ik(20, "ethAddress"), h.Ik(64, "signature"), h.u8("recoveryId")]);
            let Secp256k1Program = class Secp256k1Program {
                constructor() {}
                static publicKeyToEthAddress(e) {
                    assert(64 === e.length, `Public key must be 64 bytes but received ${e.length} bytes`);
                    try {
                        return i.Buffer.from((0, y.fr)(toBuffer(e))).slice(-20)
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
                        signature: s,
                        recoveryId: o,
                        instructionIndex: a = 0
                    } = e;
                    assert(20 === (t = "string" == typeof r ? r.startsWith("0x") ? i.Buffer.from(r.substr(2), "hex") : i.Buffer.from(r, "hex") : r).length, `Address must be 20 bytes but received ${t.length} bytes`);
                    let c = 12 + t.length,
                        u = c + s.length + 1,
                        l = i.Buffer.alloc(eI.span + n.length);
                    return eI.encode({
                        numSignatures: 1,
                        signatureOffset: c,
                        signatureInstructionIndex: a,
                        ethAddressOffset: 12,
                        ethAddressInstructionIndex: a,
                        messageDataOffset: u,
                        messageDataSize: n.length,
                        messageInstructionIndex: a,
                        signature: toBuffer(s),
                        ethAddress: toBuffer(t),
                        recoveryId: o
                    }, l), l.fill(toBuffer(n), eI.span), new TransactionInstruction({
                        keys: [],
                        programId: Secp256k1Program.programId,
                        data: l
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
                            s = ek(e, !1).slice(1),
                            o = i.Buffer.from((0, y.fr)(toBuffer(r))),
                            [a, c] = ecdsaSign(o, e);
                        return this.createInstructionWithPublicKey({
                            publicKey: s,
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
            let ex = new PublicKey("StakeConfig11111111111111111111111111111111");
            let Lockup = class Lockup {
                constructor(e, t, r) {
                    this.unixTimestamp = void 0, this.epoch = void 0, this.custodian = void 0, this.unixTimestamp = e, this.epoch = t, this.custodian = r
                }
            };
            Lockup.default = new Lockup(0, 0, PublicKey.default);
            let eS = Object.freeze({
                Initialize: {
                    index: 0,
                    layout: h.n_([h.Jq("instruction"), ((e = "authorized") => h.n_([publicKey("staker"), publicKey("withdrawer")], e))(), ((e = "lockup") => h.n_([h.gM("unixTimestamp"), h.gM("epoch"), publicKey("custodian")], e))()])
                },
                Authorize: {
                    index: 1,
                    layout: h.n_([h.Jq("instruction"), publicKey("newAuthorized"), h.Jq("stakeAuthorizationType")])
                },
                Delegate: {
                    index: 2,
                    layout: h.n_([h.Jq("instruction")])
                },
                Split: {
                    index: 3,
                    layout: h.n_([h.Jq("instruction"), h.gM("lamports")])
                },
                Withdraw: {
                    index: 4,
                    layout: h.n_([h.Jq("instruction"), h.gM("lamports")])
                },
                Deactivate: {
                    index: 5,
                    layout: h.n_([h.Jq("instruction")])
                },
                Merge: {
                    index: 7,
                    layout: h.n_([h.Jq("instruction")])
                },
                AuthorizeWithSeed: {
                    index: 8,
                    layout: h.n_([h.Jq("instruction"), publicKey("newAuthorized"), h.Jq("stakeAuthorizationType"), rustString("authoritySeed"), publicKey("authorityOwner")])
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
                    } = e, i = n || Lockup.default, s = eS.Initialize, o = encodeData(s, {
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
                            pubkey: R,
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
                    } = e, i = eS.Delegate, s = encodeData(i);
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
                            pubkey: S,
                            isSigner: !1,
                            isWritable: !1
                        }, {
                            pubkey: w,
                            isSigner: !1,
                            isWritable: !1
                        }, {
                            pubkey: ex,
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
                    } = e, o = eS.Authorize, a = encodeData(o, {
                        newAuthorized: toBuffer(n.toBuffer()),
                        stakeAuthorizationType: i.index
                    }), c = [{
                        pubkey: t,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: S,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: r,
                        isSigner: !0,
                        isWritable: !1
                    }];
                    return s && c.push({
                        pubkey: s,
                        isSigner: !0,
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
                    } = e, c = eS.AuthorizeWithSeed, u = encodeData(c, {
                        newAuthorized: toBuffer(s.toBuffer()),
                        stakeAuthorizationType: o.index,
                        authoritySeed: n,
                        authorityOwner: toBuffer(i.toBuffer())
                    }), l = [{
                        pubkey: t,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: r,
                        isSigner: !0,
                        isWritable: !1
                    }, {
                        pubkey: S,
                        isSigner: !1,
                        isWritable: !1
                    }];
                    return a && l.push({
                        pubkey: a,
                        isSigner: !0,
                        isWritable: !1
                    }), new Transaction().add({
                        keys: l,
                        programId: this.programId,
                        data: u
                    })
                }
                static splitInstruction(e) {
                    let {
                        stakePubkey: t,
                        authorizedPubkey: r,
                        splitStakePubkey: n,
                        lamports: i
                    } = e, s = eS.Split, o = encodeData(s, {
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
                    } = e, i = eS.Merge, s = encodeData(i);
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
                            pubkey: S,
                            isSigner: !1,
                            isWritable: !1
                        }, {
                            pubkey: w,
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
                    } = e, o = eS.Withdraw, a = encodeData(o, {
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
                        pubkey: S,
                        isSigner: !1,
                        isWritable: !1
                    }, {
                        pubkey: w,
                        isSigner: !1,
                        isWritable: !1
                    }, {
                        pubkey: r,
                        isSigner: !0,
                        isWritable: !1
                    }];
                    return s && c.push({
                        pubkey: s,
                        isSigner: !0,
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
                    } = e, n = eS.Deactivate, i = encodeData(n);
                    return new Transaction().add({
                        keys: [{
                            pubkey: t,
                            isSigner: !1,
                            isWritable: !0
                        }, {
                            pubkey: S,
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
            let eA = Object.freeze({
                InitializeAccount: {
                    index: 0,
                    layout: h.n_([h.Jq("instruction"), ((e = "voteInit") => h.n_([publicKey("nodePubkey"), publicKey("authorizedVoter"), publicKey("authorizedWithdrawer"), h.u8("commission")], e))()])
                },
                Authorize: {
                    index: 1,
                    layout: h.n_([h.Jq("instruction"), publicKey("newAuthorized"), h.Jq("voteAuthorizationType")])
                },
                Withdraw: {
                    index: 3,
                    layout: h.n_([h.Jq("instruction"), h.gM("lamports")])
                },
                AuthorizeWithSeed: {
                    index: 10,
                    layout: h.n_([h.Jq("instruction"), ((e = "voteAuthorizeWithSeedArgs") => h.n_([h.Jq("voteAuthorizationType"), publicKey("currentAuthorityDerivedKeyOwnerPubkey"), rustString("currentAuthorityDerivedKeySeed"), publicKey("newAuthorized")], e))()])
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
                    } = e, i = eA.InitializeAccount, s = encodeData(i, {
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
                            pubkey: R,
                            isSigner: !1,
                            isWritable: !1
                        }, {
                            pubkey: S,
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
                    } = e, s = eA.Authorize, o = encodeData(s, {
                        newAuthorized: toBuffer(n.toBuffer()),
                        voteAuthorizationType: i.index
                    }), a = [{
                        pubkey: t,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: S,
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
                    } = e, a = eA.AuthorizeWithSeed, c = encodeData(a, {
                        voteAuthorizeWithSeedArgs: {
                            currentAuthorityDerivedKeyOwnerPubkey: toBuffer(r.toBuffer()),
                            currentAuthorityDerivedKeySeed: n,
                            newAuthorized: toBuffer(i.toBuffer()),
                            voteAuthorizationType: s.index
                        }
                    }), u = [{
                        pubkey: o,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: S,
                        isSigner: !1,
                        isWritable: !1
                    }, {
                        pubkey: t,
                        isSigner: !0,
                        isWritable: !1
                    }];
                    return new Transaction().add({
                        keys: u,
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
                    } = e, s = eA.Withdraw, o = encodeData(s, {
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
            VoteProgram.programId = new PublicKey("Vote111111111111111111111111111111111111111"), VoteProgram.space = 3731, new PublicKey("Va1idator1nfo111111111111111111111111111111"), (0, g.dt)({
                name: (0, g.Z_)(),
                website: (0, g.jt)((0, g.Z_)()),
                details: (0, g.jt)((0, g.Z_)()),
                keybaseUsername: (0, g.jt)((0, g.Z_)())
            }), new PublicKey("Vote111111111111111111111111111111111111111"), h.n_([publicKey("nodePubkey"), publicKey("authorizedWithdrawer"), h.u8("commission"), h._O(), h.A9(h.n_([h._O("slot"), h.Jq("confirmationCount")]), h.cv(h.Jq(), -8), "votes"), h.u8("rootSlotValid"), h._O("rootSlot"), h._O(), h.A9(h.n_([h._O("epoch"), publicKey("authorizedVoter")]), h.cv(h.Jq(), -8), "authorizedVoters"), h.n_([h.A9(h.n_([publicKey("authorizedPubkey"), h._O("epochOfLastAuthorizedSwitch"), h._O("targetEpoch")]), 32, "buf"), h._O("idx"), h.u8("isEmpty")], "priorVoters"), h._O(), h.A9(h.n_([h._O("epoch"), h._O("credits"), h._O("prevCredits")]), h.cv(h.Jq(), -8), "epochCredits"), h.n_([h._O("slot"), h._O("timestamp")], "lastTimestamp")])
        }
    }
]);