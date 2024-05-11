"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9726], {
        27213: function(e, l, t) {
            t.d(l, {
                KL: function() {
                    return initialEditAuctionConfigurationErrors
                },
                M5: function() {
                    return a
                },
                U9: function() {
                    return o
                },
                sR: function() {
                    return u
                }
            });
            var r = t(80834),
                i = t(47226),
                s = t(64571),
                n = t(44648);
            let a = `Price must be fewer than ${s.Z3+1} decimals`,
                o = r.z.object({
                    presalePricePerMint: r.z.string().nullish(),
                    publicPricePerMint: r.z.string().nullish(),
                    presaleStartTime: r.z.string().nullish(),
                    publicStartTime: r.z.string().nullish(),
                    addresses: r.z.string().nullish(),
                    manuallyAddedAllowlist: r.z.object({
                        description: r.z.string().nullable()
                    }),
                    collectorsOfReleases: r.z.string().nullable(),
                    collectorsOfArtists: r.z.string().nullable(),
                    presaleEndTime: r.z.string().nullish(),
                    publicEndTime: r.z.string().nullish(),
                    maxMintable: r.z.string().nullish(),
                    publicMaxMintsPerWallet: r.z.string().nullish(),
                    presaleMaxSupply: r.z.string().nullish(),
                    presaleMaxMintsPerWallet: r.z.string().nullish()
                });
            o.keyof().options;
            let u = {
                    publicPricePerMint: {
                        required_error: "Public price per mint is required"
                    },
                    presalePricePerMint: {
                        required_error: "Presale price per mint is required"
                    },
                    presaleStartTime: {
                        required_error: "Presale start time is required"
                    },
                    publicStartTime: {
                        required_error: "Public start time is required"
                    },
                    addresses: {
                        required_error: "Add one address or select collectors in the dropdown above to enable presale"
                    },
                    manuallyAddedAllowlist: {
                        description_too_long: `Description must be fewer than ${n.lr.manuallyAddedDescription} characters`
                    },
                    presaleEndTime: {
                        required_error: "Presale end time is required"
                    },
                    publicEndTime: {
                        required_error: "Public end time is required"
                    },
                    maxMintable: {
                        required_error: "Total mint supply is required"
                    },
                    publicMaxMintsPerWallet: {
                        required_error: "Max mints per wallet is required"
                    },
                    presaleMaxSupply: {
                        required_error: "Total mint supply is required"
                    },
                    presaleMaxMintsPerWallet: {
                        required_error: "Max mints per wallet is required"
                    },
                    collectorsOfReleases: {
                        list_too_long: `Can't add more than ${i.eg} releases to the presale allowlist`
                    },
                    collectorsOfArtists: {
                        list_too_long: `Can't add more than ${i.eg} artists to the presale allowlist`
                    }
                },
                initialEditAuctionConfigurationErrors = () => ({
                    presalePricePerMint: null,
                    publicPricePerMint: null,
                    presaleStartTime: null,
                    publicStartTime: null,
                    addresses: null,
                    manuallyAddedAllowlist: {
                        description: null
                    },
                    collectorsOfArtists: null,
                    collectorsOfReleases: null,
                    presaleEndTime: null,
                    publicEndTime: null,
                    maxMintable: null,
                    publicMaxMintsPerWallet: null,
                    presaleMaxSupply: null,
                    presaleMaxMintsPerWallet: null
                })
        },
        2818: function(e, l, t) {
            t.d(l, {
                Wu: function() {
                    return y
                },
                yW: function() {
                    return M
                },
                m5: function() {
                    return S
                }
            });
            var r = t(73278),
                i = t(31265),
                s = t(80834),
                n = t(14906),
                a = t(19716),
                o = t(58102),
                u = t(85846),
                d = t(64571),
                c = t(91345),
                m = t(27213),
                p = t(47226);
            let f = s.z.array(s.z.object({
                    id: s.z.string().nullish(),
                    name: s.z.string().nullish(),
                    artist: s.z.object({
                        id: s.z.string(),
                        name: s.z.string().nullish()
                    }),
                    coverImage: s.z.object({
                        id: s.z.string(),
                        url: s.z.string().nullish()
                    }),
                    staticCoverImage: s.z.object({
                        id: s.z.string().nullish(),
                        url: s.z.string().nullish()
                    }).nullish(),
                    title: s.z.string()
                }).nullish()),
                g = s.z.object({
                    allArtistReleases: s.z.boolean(),
                    allArtistCollaborations: s.z.boolean(),
                    selectedReleaseIds: s.z.array(s.z.string()),
                    releasesInfo: f
                }).transform(e => {
                    var l, t, r, i;
                    return {
                        allArtistReleases: null !== (l = null == e ? void 0 : e.allArtistReleases) && void 0 !== l && l,
                        allArtistCollaborations: null !== (t = null == e ? void 0 : e.allArtistCollaborations) && void 0 !== t && t,
                        selectedReleaseIds: null !== (r = null == e ? void 0 : e.selectedReleaseIds) && void 0 !== r ? r : [],
                        releasesInfo: null !== (i = null == e ? void 0 : e.releasesInfo) && void 0 !== i ? i : []
                    }
                }),
                b = s.z.array(s.z.object({
                    id: s.z.string().nullish(),
                    name: s.z.string().nullish(),
                    user: s.z.object({
                        username: s.z.string().nullish(),
                        avatar: s.z.object({
                            id: s.z.string().nullish(),
                            url: s.z.string().nullish()
                        }).nullish(),
                        publicAddress: s.z.string()
                    })
                }).nullish()),
                v = c.Kk.extend({
                    artistsInfo: b
                }).nullish().transform(e => {
                    var l, t, r, i;
                    return {
                        allArtistCollectors: null === (l = null == e ? void 0 : e.allArtistCollectors) || void 0 === l || l,
                        allCollaboratingArtists: null !== (t = null == e ? void 0 : e.allCollaboratingArtists) && void 0 !== t && t,
                        selectedArtistIds: null !== (r = null == e ? void 0 : e.selectedArtistIds) && void 0 !== r ? r : [],
                        artistsInfo: null !== (i = null == e ? void 0 : e.artistsInfo) && void 0 !== i ? i : []
                    }
                }),
                I = s.z.object({
                    userChange: s.z.boolean(),
                    collectorsOfReleases: g.nullish().transform(e => {
                        var l, t, r, i;
                        return {
                            allArtistReleases: null !== (l = null == e ? void 0 : e.allArtistCollaborations) && void 0 !== l && l,
                            allArtistCollaborations: null !== (t = null == e ? void 0 : e.allArtistCollaborations) && void 0 !== t && t,
                            selectedReleaseIds: null !== (r = null == e ? void 0 : e.selectedReleaseIds) && void 0 !== r ? r : [],
                            releasesInfo: null !== (i = null == e ? void 0 : e.releasesInfo) && void 0 !== i ? i : []
                        }
                    }),
                    collectorsOfArtists: v.nullish().transform(e => {
                        var l, t, r, i;
                        return {
                            allArtistCollectors: null === (l = null == e ? void 0 : e.allArtistCollectors) || void 0 === l || l,
                            allCollaboratingArtists: null !== (t = null == e ? void 0 : e.allCollaboratingArtists) && void 0 !== t && t,
                            selectedArtistIds: null !== (r = null == e ? void 0 : e.selectedArtistIds) && void 0 !== r ? r : [],
                            artistsInfo: null !== (i = null == e ? void 0 : e.artistsInfo) && void 0 !== i ? i : []
                        }
                    }),
                    manuallyAddedAllowlist: c.RV
                }),
                A = s.z.record(s.z.string().nonempty().refine(e => e), s.z.array(I)).superRefine((e, l) => {
                    var t, r, i, n, a, o, u, d, c, f;
                    let g = Object.values(e)[0];
                    if (!g) return;
                    let b = g[0];
                    if (!b) return e;
                    let v = (null == b ? void 0 : null === (t = b.manuallyAddedAllowlist) || void 0 === t ? void 0 : t.addresses) && (null == b ? void 0 : null === (r = b.manuallyAddedAllowlist) || void 0 === r ? void 0 : r.addresses.length) > 0,
                        I = null != b && null !== (i = b.collectorsOfReleases) && void 0 !== i && !!i.selectedReleaseIds && (null == b ? void 0 : null === (n = b.collectorsOfReleases) || void 0 === n ? void 0 : n.selectedReleaseIds.length) > 0 || (null == b ? void 0 : null === (a = b.collectorsOfReleases) || void 0 === a ? void 0 : a.allArtistCollaborations),
                        A = null != b && null !== (o = b.collectorsOfArtists) && void 0 !== o && !!o.selectedArtistIds && (null == b ? void 0 : null === (u = b.collectorsOfArtists) || void 0 === u ? void 0 : u.selectedArtistIds.length) > 0 || (null == b ? void 0 : null === (d = b.collectorsOfArtists) || void 0 === d ? void 0 : d.allArtistCollectors);
                    if (!v && !I && !A) {
                        l.addIssue({
                            code: s.z.ZodIssueCode.custom,
                            message: m.sR.addresses.required_error,
                            path: ["addresses"]
                        });
                        return
                    }
                    return (null === (c = b.collectorsOfReleases) || void 0 === c ? void 0 : c.selectedReleaseIds) && b.collectorsOfReleases.selectedReleaseIds.length > p.eg && l.addIssue({
                        code: s.z.ZodIssueCode.custom,
                        message: m.sR.collectorsOfReleases.list_too_long,
                        path: ["collectorsOfReleases"]
                    }), (null === (f = b.collectorsOfArtists) || void 0 === f ? void 0 : f.selectedArtistIds) && b.collectorsOfArtists.selectedArtistIds.length > p.eg && l.addIssue({
                        code: s.z.ZodIssueCode.custom,
                        message: m.sR.collectorsOfArtists.list_too_long,
                        path: ["collectorsOfArtists"]
                    }), e
                }),
                h = s.z.object({
                    editionAddress: s.z.string(),
                    minterAddress: s.z.string(),
                    mintId: s.z.union([s.z.number(), s.z.bigint().transform(e => Number(e))]),
                    price: s.z.string(),
                    startTimeSeconds: s.z.number(),
                    maxMintable: s.z.number(),
                    maxMintablePerAccount: s.z.number()
                }),
                T = h.extend({
                    mintType: s.z.literal("RangeEdition"),
                    cutoffTimeSeconds: s.z.number()
                }),
                E = h.extend({
                    mintType: s.z.literal("MerkleDrop"),
                    endTimeSeconds: s.z.number()
                }),
                z = s.z.union([T, E]),
                y = s.z.object({
                    editedSaleSchedules: s.z.record(s.z.string().nonempty(), s.z.array(z)).superRefine((e, l) => {
                        for (let t of Object.values(e)) {
                            let e;
                            let i = {
                                    presalePricePerMint: void 0,
                                    publicPricePerMint: void 0
                                },
                                n = {
                                    presaleStartTime: void 0,
                                    publicStartTime: void 0
                                },
                                o = {
                                    presaleEndTime: void 0,
                                    publicEndTime: void 0
                                };
                            for (let l of t) {
                                let t = l.price,
                                    s = l.startTimeSeconds,
                                    a = "RangeEdition" === l.mintType ? l.cutoffTimeSeconds : l.endTimeSeconds,
                                    u = "MerkleDrop" === l.mintType;
                                u ? (t && (i.presalePricePerMint = Number(t)), s && (n.presaleStartTime = (0, r.Z)(s)), a && (o.presaleEndTime = (0, r.Z)(a))) : (t && (i.publicPricePerMint = Number(t)), s && (n.publicStartTime = (0, r.Z)(s)), a && (o.publicEndTime = (0, r.Z)(a)), l.maxMintable && (e = l.maxMintable))
                            }
                            for (let e of t) {
                                let t = "MerkleDrop" === e.mintType,
                                    r = e.price,
                                    o = e.startTimeSeconds,
                                    u = "RangeEdition" === e.mintType ? e.cutoffTimeSeconds : e.endTimeSeconds,
                                    c = t ? "presalePricePerMint" : "publicPricePerMint",
                                    p = (0, a.rZ)({
                                        startTime: o,
                                        endTime: u,
                                        type: t ? "presale" : "public"
                                    });
                                if (!r || "" === r) return l.addIssue({
                                    code: s.z.ZodIssueCode.custom,
                                    message: t ? m.sR.presalePricePerMint.required_error : m.sR.publicPricePerMint.required_error,
                                    path: [c],
                                    fatal: !0
                                }), s.z.NEVER;
                                if (p.public && l.addIssue({
                                        code: s.z.ZodIssueCode.custom,
                                        message: p.public.error,
                                        path: [p.public.path],
                                        fatal: !0
                                    }), p.presale && t && l.addIssue({
                                        code: s.z.ZodIssueCode.custom,
                                        message: p.presale.error,
                                        path: [p.presale.path],
                                        fatal: !0
                                    }), n.presaleStartTime && n.publicStartTime && n.presaleStartTime > n.publicStartTime && l.addIssue({
                                        code: s.z.ZodIssueCode.custom,
                                        message: "Public sale must be at the same time or after presale",
                                        path: ["publicStartTime"]
                                    }), r && (0, d.e6)({
                                        value: parseFloat(r.toString()),
                                        maxDecimals: d.Z3
                                    })) return l.addIssue({
                                    code: s.z.ZodIssueCode.custom,
                                    message: m.M5,
                                    path: [c],
                                    fatal: !0
                                }), s.z.NEVER;
                                "number" == typeof i.presalePricePerMint && "number" == typeof i.publicPricePerMint && i.presalePricePerMint > i.publicPricePerMint && l.addIssue({
                                    code: s.z.ZodIssueCode.custom,
                                    message: "Must be more than presale mint price",
                                    path: ["publicPricePerMint"]
                                });
                                let f = S.priceLimit.publicMaxPrice,
                                    g = S.priceLimit.publicMinPrice,
                                    b = g === f ? `Value must be ${g}` : `Value must be between ${g} and ${f}`;
                                null != f && null != g && "number" == typeof i.publicPricePerMint && (i.publicPricePerMint < g || i.publicPricePerMint > f) && l.addIssue({
                                    code: s.z.ZodIssueCode.custom,
                                    message: b,
                                    path: ["publicPricePerMint"]
                                });
                                let v = S.priceLimit.presaleMaxPrice,
                                    I = S.priceLimit.presaleMinPrice,
                                    A = I === v ? `Value must be ${I}` : `Value must be between ${I} and ${v}`;
                                null != v && null != I && "number" == typeof i.presalePricePerMint && (i.presalePricePerMint < I || i.presalePricePerMint > v) && l.addIssue({
                                    code: s.z.ZodIssueCode.custom,
                                    message: A,
                                    path: ["presalePricePerMint"]
                                })
                            }
                            for (let r of t) {
                                let t = "MerkleDrop" === r.mintType,
                                    i = r.maxMintable;
                                if (null != i) {
                                    let r = t ? u.sz : S.mintQuantityLimit.minQuantity,
                                        n = t ? e : S.mintQuantityLimit.maxQuantity,
                                        a = r && Number(i) < r || n && Number(i) > n ? `Value must be between ${r} and ${n}` : null;
                                    if (a) return l.addIssue({
                                        code: s.z.ZodIssueCode.custom,
                                        message: a,
                                        path: [t ? "presaleMaxSupply" : "maxMintable"]
                                    }), s.z.NEVER
                                }
                                let n = r.maxMintablePerAccount;
                                if (null != n) {
                                    let e = S.mintQuantityLimit[t ? "minPresaleMaxMintsPerWallet" : "minPublicSaleMaxMintsPerWallet"],
                                        r = S.mintQuantityLimit[t ? "maxPresaleMaxMintsPerWallet" : "maxPublicSaleMaxMintsPerWallet"],
                                        i = e && Number(n) < e || r && Number(n) > r ? `Value must be between ${e} and ${r}` : null;
                                    i && l.addIssue({
                                        code: s.z.ZodIssueCode.custom,
                                        message: i,
                                        path: [t ? "presaleMaxMintsPerWallet" : "publicMaxMintsPerWallet"]
                                    })
                                }
                            }
                        }
                    }),
                    allowlists: A
                });
            s.z.object({
                fields: y,
                errors: m.U9,
                isValid: s.z.boolean(),
                priceLimit: c.uZ,
                mintQuantityLimit: c.Sw,
                hasPresaleMint: s.z.boolean(),
                auctionType: s.z.nativeEnum(n.cR).nullable()
            });
            let M = (0, o.U)({
                    schema: y,
                    key: "@soundxyz/editedAuctionConfig"
                }),
                S = (0, i.sj)({
                    fields: {
                        editedSaleSchedules: {},
                        allowlists: {}
                    },
                    errors: (0, m.KL)(),
                    isValid: !1,
                    priceLimit: (0, c.PC)(),
                    mintQuantityLimit: (0, c.te)(),
                    hasPresaleMint: !1,
                    auctionType: null
                })
        },
        81114: function(e, l, t) {
            t.d(l, {
                C2: function() {
                    return editCollectorsOfReleasesFields
                },
                fX: function() {
                    return mapPersistedAllowlistsToFormValues
                },
                gd: function() {
                    return editAllowlistFields
                },
                nZ: function() {
                    return parseMintSchedules
                },
                qe: function() {
                    return clearAuctionConfigErrors
                },
                u6: function() {
                    return editManuallyAddedAllowlistFields
                },
                w3: function() {
                    return editCollectorsOfArtistsFields
                }
            });
            var r = t(73278),
                i = t(19791),
                s = t(27213),
                n = t(2818),
                a = t(31666);

            function parseMintSchedules(e) {
                let {
                    schedules: l,
                    errors: t,
                    priceLimits: s
                } = e, {
                    presaleMaxPrice: n,
                    presaleMinPrice: a,
                    publicMaxPrice: o,
                    publicMinPrice: u
                } = s;
                if (!(null == l ? void 0 : l.length)) return null;
                let d = l.map(e => {
                        let l = "MerkleDrop" === e.mintType;
                        return l ? { ...e,
                            startTime: (0, r.Z)(e.startTimeSeconds),
                            endTime: (0, r.Z)(e.endTimeSeconds),
                            minPrice: a,
                            maxPrice: n,
                            errors: {
                                startTime: t.presaleStartTime,
                                endTime: t.presaleEndTime,
                                price: t.presalePricePerMint,
                                maxMintable: t.presaleMaxSupply,
                                maxMintablePerAccount: t.presaleMaxMintsPerWallet
                            }
                        } : { ...e,
                            startTime: (0, r.Z)(e.startTimeSeconds),
                            cutoffTime: (0, r.Z)(e.cutoffTimeSeconds),
                            minPrice: u,
                            maxPrice: o,
                            errors: {
                                startTime: t.publicStartTime,
                                endTime: t.publicEndTime,
                                price: t.publicPricePerMint,
                                maxMintable: t.maxMintable,
                                maxMintablePerAccount: t.publicMaxMintsPerWallet
                            }
                        }
                    }),
                    c = (0, i.eJ)(d, e => "RangeEdition" === e.mintType ? e : null),
                    m = (0, i.eJ)(d, e => "MerkleDrop" === e.mintType ? e : null);
                return {
                    rangeSchedules: c,
                    merkleSchedules: m
                }
            }
            let clearAuctionConfigErrors = () => {
                    n.m5.errors = (0, s.KL)()
                },
                editManuallyAddedAllowlistFields = e => {
                    let {
                        name: l,
                        value: t,
                        releaseId: r,
                        userChange: i
                    } = e, s = n.m5.fields.allowlists[r];
                    if (s || (n.m5.fields.allowlists[r] = [{
                            collectorsOfReleases: null,
                            collectorsOfArtists: null,
                            manuallyAddedAllowlist: {
                                description: null,
                                hasAddresses: !1,
                                addresses: null
                            },
                            userChange: i
                        }]), s && s[0]) {
                        var a;
                        (a = s[0]).userChange || (a.userChange = i), s[0].manuallyAddedAllowlist || (s[0].manuallyAddedAllowlist = {
                            description: null,
                            hasAddresses: null,
                            addresses: null
                        }), s[0].manuallyAddedAllowlist[l] = t
                    }
                },
                editCollectorsOfReleasesFields = e => {
                    let {
                        name: l,
                        value: t,
                        releaseId: r,
                        userChange: i
                    } = e, s = n.m5.fields.allowlists[r];
                    if (s || (n.m5.fields.allowlists[r] = [{
                            collectorsOfReleases: null,
                            collectorsOfArtists: null,
                            manuallyAddedAllowlist: {
                                description: null,
                                hasAddresses: !1,
                                addresses: null
                            },
                            userChange: i
                        }]), s && s[0]) {
                        var a;
                        (a = s[0]).userChange || (a.userChange = i), s[0].collectorsOfReleases || (s[0].collectorsOfReleases = {
                            selectedReleaseIds: [],
                            allArtistCollaborations: !1,
                            allArtistReleases: !1,
                            releasesInfo: []
                        }), s[0].collectorsOfReleases[l] = t
                    }
                },
                editCollectorsOfArtistsFields = e => {
                    let {
                        name: l,
                        value: t,
                        releaseId: r,
                        userChange: i
                    } = e, s = n.m5.fields.allowlists[r];
                    if (s || (n.m5.fields.allowlists[r] = [{
                            collectorsOfReleases: null,
                            collectorsOfArtists: null,
                            manuallyAddedAllowlist: {
                                description: null,
                                hasAddresses: !1,
                                addresses: null
                            },
                            userChange: i
                        }]), s && s[0]) {
                        var a;
                        (a = s[0]).userChange || (a.userChange = i), s[0].collectorsOfArtists || (s[0].collectorsOfArtists = {
                            allArtistCollectors: !0,
                            selectedArtistIds: [],
                            allCollaboratingArtists: !1,
                            artistsInfo: []
                        }), s[0].collectorsOfArtists[l] = t
                    }
                },
                editAllowlistFields = (e, l, t) => {
                    let r = n.m5.fields.allowlists[t];
                    r || (n.m5.fields.allowlists[t] = [{
                        collectorsOfReleases: null,
                        collectorsOfArtists: null,
                        manuallyAddedAllowlist: {
                            description: null,
                            hasAddresses: !1,
                            addresses: null
                        },
                        userChange: !1
                    }]), r && r[0] && (r[0][e] = l)
                },
                mapPersistedAllowlistsToFormValues = e => {
                    let {
                        releaseId: l,
                        persistedAllowlists: t
                    } = e;
                    n.m5.fields.allowlists && (n.m5.fields.allowlists[l] = t), (0, a.C)()
                }
        },
        35296: function(e, l, t) {
            t.d(l, {
                LK: function() {
                    return useEditedAuctionConfigForm
                },
                XQ: function() {
                    return useEditedSaleSchedulesFromPersistence
                },
                pG: function() {
                    return useEditedAllowlistsFromPersistence
                }
            });
            var r = t(63558),
                i = t(3928),
                s = t(2818),
                n = t(81114),
                a = t(31666);
            let useEditedAuctionConfigForm = () => {
                let {
                    fields: e,
                    errors: l,
                    isValid: t,
                    hasPresaleMint: i,
                    auctionType: o
                } = (0, r.R)(s.m5, {
                    sync: !0
                });
                return {
                    clearErrors: n.qe,
                    errors: l,
                    fields: e,
                    isValid: t,
                    validate: a.C,
                    hasPresaleMint: i,
                    auctionType: o
                }
            };

            function useEditedSaleSchedulesFromPersistence(e) {
                let {
                    contractAddress: l
                } = e, {
                    data: t,
                    isInitialLoading: r
                } = (0, i.Uq7)({
                    queryKey: ["edited-sale-schedules-persistence", l],
                    enabled: !!l,
                    queryFn: () => l ? s.yW.get().then(e => {
                        var t;
                        return null !== (t = null == e ? void 0 : e.editedSaleSchedules[l]) && void 0 !== t ? t : null
                    }) : null
                });
                return {
                    persistedSaleSchedules: t,
                    isInitialLoading: r
                }
            }

            function useEditedAllowlistsFromPersistence(e) {
                let {
                    releaseId: l
                } = e, {
                    data: t,
                    isInitialLoading: r
                } = (0, i.Uq7)({
                    queryKey: ["edited-sale-schedules-persistence", l],
                    enabled: !!l,
                    queryFn: () => l ? s.yW.get().then(e => {
                        var t;
                        return null !== (t = null == e ? void 0 : e.allowlists[l]) && void 0 !== t ? t : null
                    }) : null
                });
                return {
                    persistedAllowlists: t,
                    isInitialLoading: r
                }
            }
        },
        31666: function(e, l, t) {
            t.d(l, {
                C: function() {
                    return validateEditedAuctionConfigState
                }
            });
            var r = t(84669),
                i = t(2818),
                s = t(81114);
            let validateEditedAuctionConfigState = () => {
                (0, s.qe)();
                let e = i.Wu.safeParse(i.m5.fields);
                if (!e.success) {
                    (0, r.F)(e.error.format().editedSaleSchedules || {}).forEach(e => {
                        var l;
                        let [t, r] = e;
                        "_errors" !== t && (i.m5.errors[t] = null === (l = r._errors) || void 0 === l ? void 0 : l[0])
                    }), (0, r.F)(e.error.format().allowlists || {}).forEach(e => {
                        var l;
                        let [t, r] = e;
                        "_errors" !== t && (i.m5.errors[t] = null === (l = r._errors) || void 0 === l ? void 0 : l[0])
                    }), i.m5.isValid = !1;
                    return
                }
                return i.m5.isValid = !0, e.data
            }
        },
        44648: function(e, l, t) {
            t.d(l, {
                EL: function() {
                    return o
                },
                M5: function() {
                    return a
                },
                XO: function() {
                    return u
                },
                f: function() {
                    return initialAuctionConfigurationErrors
                },
                lr: function() {
                    return n
                }
            });
            var r = t(80834),
                i = t(47226),
                s = t(64571);
            let n = {
                    manuallyAddedDescription: 144
                },
                a = `Price must be fewer than ${s.Z3+1} decimals`,
                o = r.z.object({
                    maxMintable: r.z.string().nullish(),
                    maxQuantity: r.z.string().nullish(),
                    minQuantity: r.z.string().nullish(),
                    presaleMaxMintsPerWallet: r.z.string().nullish(),
                    presaleMaxSupply: r.z.string().nullish(),
                    presalePricePerMint: r.z.string().nullish(),
                    publicMaxMintsPerWallet: r.z.string().nullish(),
                    publicPricePerMint: r.z.string().nullish(),
                    presaleStartTime: r.z.string().nullish(),
                    publicStartTime: r.z.string().nullish(),
                    presaleEndTime: r.z.string().nullish(),
                    publicEndTime: r.z.string().nullish(),
                    quantityBreakdown: r.z.string().nullish(),
                    albumMintSupply: r.z.string().nullish(),
                    addresses: r.z.string().nullish(),
                    manuallyAddedAllowlist: r.z.object({
                        description: r.z.string().nullable()
                    }),
                    collectorsOfReleases: r.z.string().nullable(),
                    collectorsOfArtists: r.z.string().nullable()
                });
            o.keyof().options;
            let u = {
                    publicPricePerMint: {
                        required_error: "Public price per mint is required"
                    },
                    presalePricePerMint: {
                        required_error: "Presale price per mint is required"
                    },
                    presaleEndTime: {
                        required_error: "Presale end time is required"
                    },
                    publicEndTime: {
                        required_error: "Public end time is required"
                    },
                    publicStartTime: {
                        required_error: "Public start time is required"
                    },
                    presaleStartTime: {
                        required_error: "Presale start time is required"
                    },
                    maxMintable: {
                        required_error: "Total mint supply is required"
                    },
                    presaleMaxSupply: {
                        required_error: "Presale max supply is required"
                    },
                    publicMaxMintsPerWallet: {
                        required_error: "Max mints per wallet is required"
                    },
                    presaleMaxMintsPerWallet: {
                        required_error: "Max mints per wallet is required"
                    },
                    maxQuantity: {
                        required_error: "Max quantity is required"
                    },
                    minQuantity: {
                        required_error: "Min quantity is required"
                    },
                    quantityBreakdown: {
                        total_mismatch: "Total must equal album mint supply"
                    },
                    albumMintSupply: {
                        required_error: "Album mint supply is required"
                    },
                    addresses: {
                        required_error: "Add one address or select collectors in the dropdown above to enable presale"
                    },
                    manuallyAddedAllowlist: {
                        description_too_long: `Description must be fewer than ${n.manuallyAddedDescription} characters`
                    },
                    collectorsOfReleases: {
                        list_too_long: `Can't add more than ${i.eg} releases to the presale allowlist`
                    },
                    collectorsOfArtists: {
                        list_too_long: `Can't add more than ${i.eg} artists to the presale allowlist`
                    }
                },
                initialAuctionConfigurationErrors = () => ({
                    maxMintable: null,
                    maxQuantity: null,
                    minQuantity: null,
                    presaleMaxMintsPerWallet: null,
                    presaleMaxSupply: null,
                    presalePricePerMint: null,
                    publicMaxMintsPerWallet: null,
                    publicPricePerMint: null,
                    presaleStartTime: null,
                    publicStartTime: null,
                    presaleEndTime: null,
                    publicEndTime: null,
                    quantityBreakdown: null,
                    addresses: null,
                    manuallyAddedAllowlist: {
                        description: null
                    },
                    collectorsOfArtists: null,
                    collectorsOfReleases: null
                })
        },
        91345: function(e, l, t) {
            t.d(l, {
                Kk: function() {
                    return A
                },
                OX: function() {
                    return E
                },
                PC: function() {
                    return initialAuctionConfigurationPriceLimits
                },
                RV: function() {
                    return h
                },
                Sw: function() {
                    return M
                },
                pc: function() {
                    return w
                },
                rW: function() {
                    return R
                },
                te: function() {
                    return initialAuctionConfigurationMintQuantityLimits
                },
                uZ: function() {
                    return y
                },
                v7: function() {
                    return resetAuctionConfigurationState
                }
            });
            var r = t(57460),
                i = t(82548),
                s = t(73278),
                n = t(59810),
                a = t(31265),
                o = t(80834),
                u = t(19791),
                d = t(14906),
                c = t(47226),
                m = t(19716),
                p = t(85846),
                f = t(64571),
                g = t(27213),
                b = t(44648);
            let v = o.z.union([o.z.string(), o.z.number()]).transform(e => {
                    let l = e.toString();
                    return l ? parseInt(l, 10) : null
                }).nullish(),
                I = o.z.number().nullish().or(o.z.string());
            o.z.object({
                allArtistReleases: o.z.boolean(),
                allArtistCollaborations: o.z.boolean(),
                selectedReleaseIds: o.z.array(o.z.string())
            }).nullish().transform(e => {
                var l, t, r;
                return {
                    allArtistReleases: null !== (l = null == e ? void 0 : e.allArtistReleases) && void 0 !== l && l,
                    allArtistCollaborations: null !== (t = null == e ? void 0 : e.allArtistCollaborations) && void 0 !== t && t,
                    selectedReleaseIds: null !== (r = null == e ? void 0 : e.selectedReleaseIds) && void 0 !== r ? r : []
                }
            });
            let A = o.z.object({
                allArtistCollectors: o.z.boolean(),
                allCollaboratingArtists: o.z.boolean(),
                selectedArtistIds: o.z.array(o.z.string())
            });
            A.nullish().transform(e => {
                var l, t, r;
                return {
                    allArtistCollectors: null === (l = null == e ? void 0 : e.allArtistCollectors) || void 0 === l || l,
                    allCollaboratingArtists: null !== (t = null == e ? void 0 : e.allCollaboratingArtists) && void 0 !== t && t,
                    selectedArtistIds: null !== (r = null == e ? void 0 : e.selectedArtistIds) && void 0 !== r ? r : []
                }
            });
            let h = o.z.object({
                    description: o.z.string().nullish().superRefine((e, l) => {
                        if (e && e.length > b.lr.manuallyAddedDescription) {
                            var t;
                            l.addIssue({
                                code: o.z.ZodIssueCode.custom,
                                message: null === (t = g.sR.manuallyAddedAllowlist) || void 0 === t ? void 0 : t.description_too_long,
                                path: ["description"]
                            })
                        }
                        return e
                    }),
                    hasAddresses: o.z.boolean().nullish(),
                    addresses: o.z.array(o.z.string()).nullish()
                }),
                T = o.z.object({
                    auctionType: o.z.nativeEnum(d.cR),
                    enabledSAM: o.z.boolean().default(p.eR),
                    presaleAllowList: o.z.array(o.z.object({
                        address: o.z.string(),
                        source: o.z.nativeEnum(d.y2)
                    })).nullish().transform(e => null != e ? e : [])
                }),
                E = o.z.object({
                    maxMintable: I.transform(m.uF).superRefine((e, l) => {
                        let t = R.isAlbum;
                        if ((R.fields.auctionType === d.cR.FIXED_QUANTITY || R.isAlbum) && !e) return l.addIssue({
                            code: o.z.ZodIssueCode.custom,
                            message: t ? b.XO.albumMintSupply.required_error : b.XO.maxMintable.required_error
                        }), o.z.NEVER;
                        if (null != e && (0, m.M5)(e)) return l.addIssue({
                            code: o.z.ZodIssueCode.custom,
                            message: "Total Mint Supply cannot have a decimal"
                        }), o.z.NEVER;
                        let r = R.mintQuantityLimit.minQuantity,
                            i = R.mintQuantityLimit.maxQuantity;
                        if (null != e && null != r && null != i && (e < r || e > i)) return l.addIssue({
                            code: o.z.ZodIssueCode.custom,
                            message: `Value must be between ${r} and ${i}`
                        }), o.z.NEVER
                    }),
                    maxQuantity: v,
                    minQuantity: v,
                    presaleMaxMintsPerWallet: I.transform(m.uF).superRefine((e, l) => {
                        if (!R.hasPresaleMint) return;
                        if (!e) return l.addIssue({
                            code: o.z.ZodIssueCode.custom,
                            message: b.XO.presaleMaxMintsPerWallet.required_error
                        }), o.z.NEVER;
                        let t = R.mintQuantityLimit.minPresaleMaxMintsPerWallet,
                            r = R.mintQuantityLimit.maxPresaleMaxMintsPerWallet;
                        null != t && null != r && (e < t || e > r) && l.addIssue({
                            code: o.z.ZodIssueCode.custom,
                            message: `Value must be between ${t} and ${r}`
                        })
                    }),
                    presaleMaxSupply: I.transform(m.uF).superRefine((e, l) => {
                        if (!R.hasPresaleMint) return;
                        if (!e) return l.addIssue({
                            code: o.z.ZodIssueCode.custom,
                            message: b.XO.presaleMaxSupply.required_error
                        }), o.z.NEVER;
                        if ((0, m.M5)(e)) return l.addIssue({
                            code: o.z.ZodIssueCode.custom,
                            message: "Presale Max Supply cannot have a decimal"
                        }), o.z.NEVER;
                        let t = p.sz,
                            r = (0, m.uF)(R.fields.maxMintable);
                        if (null != r && (e < t || e > r)) return l.addIssue({
                            code: o.z.ZodIssueCode.custom,
                            message: `Value must be between ${t} and ${r}`
                        }), o.z.NEVER
                    }),
                    presalePricePerMint: I.transform(m.nG).superRefine((e, l) => {
                        if (null != e && (0, f.e6)({
                                value: e,
                                maxDecimals: f.Z3
                            })) return l.addIssue({
                            code: o.z.ZodIssueCode.custom,
                            message: b.M5
                        }), o.z.NEVER
                    }),
                    presaleStartTime: o.z.date().nullable().superRefine((e, l) => {
                        if (!(0, m.$K)(e) && R.hasPresaleMint) return l.addIssue({
                            code: o.z.ZodIssueCode.custom,
                            message: b.XO.presaleStartTime.required_error
                        }), o.z.NEVER
                    }),
                    presaleEndTime: o.z.date().nullable().superRefine((e, l) => {
                        if (!(0, m.$K)(e) && R.hasPresaleMint) return l.addIssue({
                            code: o.z.ZodIssueCode.custom,
                            message: b.XO.presaleEndTime.required_error
                        }), o.z.NEVER;
                        let t = R.fields.presaleStartTime;
                        if (e && t && 1 > (0, r.Z)(e, t)) return l.addIssue({
                            code: o.z.ZodIssueCode.custom,
                            message: "Must be at least an hour after the presale start time",
                            path: ["presaleEndTime"]
                        }), o.z.NEVER;
                        if (e && t && (0, i.Z)(e, t) >= 1) return l.addIssue({
                            code: o.z.ZodIssueCode.custom,
                            message: "Must be within one year of start time",
                            path: ["presaleEndTime"]
                        }), o.z.NEVER;
                        if (R.fields.auctionType === d.cR.OPEN_EDITION || R.fields.auctionType === d.cR.OPEN_EDITION_WITH_SAM) {
                            let t = R.fields.publicEndTime;
                            if (e && t && e > t) return l.addIssue({
                                code: o.z.ZodIssueCode.custom,
                                message: "Must be before than public sale end time",
                                path: ["presaleEndTime"]
                            }), o.z.NEVER
                        }
                    }),
                    publicEndTime: o.z.date().nullable().transform(e => {
                        let l = R.fields.publicStartTime;
                        if (l && R.fields.auctionType === d.cR.FIXED_QUANTITY) {
                            let e = (0, s.Z)((0, n.Z)(l) + 1);
                            return e
                        }
                        return e
                    }).refine(m.$K, {
                        message: b.XO.publicEndTime.required_error
                    }).superRefine((e, l) => {
                        let t = R.fields.publicStartTime;
                        return t && 1 > (0, r.Z)(e, t) && R.fields.auctionType !== d.cR.FIXED_QUANTITY ? (l.addIssue({
                            code: o.z.ZodIssueCode.custom,
                            message: "Must be at least an hour after the public start time",
                            path: ["publicEndtime"]
                        }), o.z.NEVER) : t && (0, i.Z)(e, t) >= 1 ? (l.addIssue({
                            code: o.z.ZodIssueCode.custom,
                            message: "Must be within one year of start time",
                            path: ["publicEndTime"]
                        }), o.z.NEVER) : void 0
                    }),
                    publicMaxMintsPerWallet: I.transform(m.uF).refine(m.Fo, {
                        message: b.XO.publicMaxMintsPerWallet.required_error
                    }).superRefine((e, l) => {
                        let t = R.mintQuantityLimit.minPublicSaleMaxMintsPerWallet,
                            r = R.mintQuantityLimit.maxPublicSaleMaxMintsPerWallet,
                            i = t && Number(e) < t || r && Number(e) > r ? `Value must be between ${t} and ${r}` : null;
                        i && l.addIssue({
                            code: o.z.ZodIssueCode.custom,
                            message: i
                        })
                    }),
                    publicPricePerMint: I.transform(m.nG).superRefine((e, l) => {
                        if (null != e && (0, f.e6)({
                                value: e,
                                maxDecimals: f.Z3
                            })) return l.addIssue({
                            code: o.z.ZodIssueCode.custom,
                            message: b.M5
                        }), o.z.NEVER
                    }).refine(m.$K, {
                        message: b.XO.publicPricePerMint.required_error
                    }),
                    publicStartTime: o.z.date().nullable().refine(m.$K, {
                        message: b.XO.publicStartTime.required_error
                    }),
                    quantityBreakdown: o.z.array(I.transform(e => null != e ? parseInt(e.toString()) : 0)),
                    collectorsOfReleases: o.z.object({
                        allArtistReleases: o.z.boolean(),
                        allArtistCollaborations: o.z.boolean(),
                        selectedReleaseIds: o.z.array(o.z.string())
                    }).nullish().transform(e => {
                        var l, t, r;
                        return R.hasPresaleMint ? {
                            allArtistReleases: null !== (l = null == e ? void 0 : e.allArtistReleases) && void 0 !== l && l,
                            allArtistCollaborations: null !== (t = null == e ? void 0 : e.allArtistCollaborations) && void 0 !== t && t,
                            selectedReleaseIds: null !== (r = null == e ? void 0 : e.selectedReleaseIds) && void 0 !== r ? r : []
                        } : e
                    }),
                    collectorsOfArtists: o.z.object({
                        allArtistCollectors: o.z.boolean(),
                        allCollaboratingArtists: o.z.boolean(),
                        selectedArtistIds: o.z.array(o.z.string())
                    }).nullish().transform(e => {
                        var l, t, r;
                        return R.hasPresaleMint ? {
                            allArtistCollectors: null === (l = null == e ? void 0 : e.allArtistCollectors) || void 0 === l || l,
                            allCollaboratingArtists: null !== (t = null == e ? void 0 : e.allCollaboratingArtists) && void 0 !== t && t,
                            selectedArtistIds: null !== (r = null == e ? void 0 : e.selectedArtistIds) && void 0 !== r ? r : []
                        } : e
                    }),
                    manuallyAddedAllowlist: o.z.object({
                        description: o.z.string().nullish().transform((e, l) => {
                            if (!R.hasPresaleMint) return e;
                            if (e && e.length > b.lr.manuallyAddedDescription) {
                                var t;
                                l.addIssue({
                                    code: o.z.ZodIssueCode.custom,
                                    message: null === (t = b.XO.manuallyAddedAllowlist) || void 0 === t ? void 0 : t.description_too_long,
                                    path: ["description"]
                                })
                            }
                            return e
                        }),
                        hasAddresses: o.z.boolean().nullish()
                    }).nullish()
                }).superRefine((e, l) => {
                    var t, r, i, s, n, a, u, d, p, f;
                    let g = null === (t = e.manuallyAddedAllowlist) || void 0 === t ? void 0 : t.hasAddresses,
                        v = null !== (r = e.collectorsOfReleases) && void 0 !== r && !!r.selectedReleaseIds && (null === (i = e.collectorsOfReleases) || void 0 === i ? void 0 : i.selectedReleaseIds.length) > 0 || (null === (s = e.collectorsOfReleases) || void 0 === s ? void 0 : s.allArtistCollaborations) || (null === (n = e.collectorsOfReleases) || void 0 === n ? void 0 : n.allArtistReleases),
                        I = null !== (a = e.collectorsOfArtists) && void 0 !== a && !!a.selectedArtistIds && (null === (u = e.collectorsOfArtists) || void 0 === u ? void 0 : u.selectedArtistIds.length) > 0 || (null === (d = e.collectorsOfArtists) || void 0 === d ? void 0 : d.allArtistCollectors);
                    if (R.hasPresaleMint && !g && !v && !I) {
                        l.addIssue({
                            code: o.z.ZodIssueCode.custom,
                            message: b.XO.addresses.required_error,
                            path: ["addresses"]
                        });
                        return
                    }(null === (p = e.collectorsOfReleases) || void 0 === p ? void 0 : p.selectedReleaseIds) && e.collectorsOfReleases.selectedReleaseIds.length > c.eg && l.addIssue({
                        code: o.z.ZodIssueCode.custom,
                        message: b.XO.collectorsOfReleases.list_too_long,
                        path: ["collectorsOfReleases"]
                    }), (null === (f = e.collectorsOfArtists) || void 0 === f ? void 0 : f.selectedArtistIds) && e.collectorsOfArtists.selectedArtistIds.length > c.eg && l.addIssue({
                        code: o.z.ZodIssueCode.custom,
                        message: b.XO.collectorsOfArtists.list_too_long,
                        path: ["collectorsOfArtists"]
                    });
                    let {
                        public: A
                    } = (0, m.rZ)({
                        startTime: e.publicStartTime,
                        endTime: e.publicEndTime,
                        type: "public"
                    }), {
                        presale: h
                    } = (0, m.rZ)({
                        startTime: e.presaleStartTime,
                        endTime: e.presaleEndTime,
                        type: "presale"
                    });
                    if (A && l.addIssue({
                            code: o.z.ZodIssueCode.custom,
                            message: A.error,
                            path: [A.path],
                            fatal: !0
                        }), h && R.hasPresaleMint && l.addIssue({
                            code: o.z.ZodIssueCode.custom,
                            message: h.error,
                            path: [h.path],
                            fatal: !0
                        }), e.presaleStartTime && e.publicStartTime && e.presaleStartTime > e.publicStartTime && l.addIssue({
                            code: o.z.ZodIssueCode.custom,
                            message: "Public sale must be at the same time or after presale",
                            path: ["publicStartTime"]
                        }), "number" == typeof e.presalePricePerMint && "number" == typeof e.publicPricePerMint && e.presalePricePerMint > e.publicPricePerMint && R.hasPresaleMint) return l.addIssue({
                        code: o.z.ZodIssueCode.custom,
                        message: `Must be less than or equal to your public sale price of ${e.publicPricePerMint} ETH`,
                        path: ["presalePricePerMint"]
                    }), o.z.NEVER;
                    let T = R.priceLimit.publicMaxPrice,
                        E = R.priceLimit.publicMinPrice,
                        z = E === T ? `Value must be ${E}` : `Value must be between ${E} and ${T}`;
                    if (null == e.publicPricePerMint || null != T && null != E && ("number" == typeof e.publicPricePerMint && (e.publicPricePerMint < E || e.publicPricePerMint > T) || Number.isNaN(e.publicPricePerMint))) return l.addIssue({
                        code: o.z.ZodIssueCode.custom,
                        message: z,
                        path: ["publicPricePerMint"]
                    }), o.z.NEVER;
                    let y = R.priceLimit.presaleMaxPrice,
                        M = R.priceLimit.presaleMinPrice,
                        S = M === y ? `Value must be ${M}` : `Value must be between ${M} and ${y}`;
                    if (null == e.presalePricePerMint && R.hasPresaleMint || null != y && null != M && R.hasPresaleMint && "number" == typeof e.presalePricePerMint && (e.presalePricePerMint < M || e.presalePricePerMint > y || Number.isNaN(e.presalePricePerMint))) return l.addIssue({
                        code: o.z.ZodIssueCode.custom,
                        message: S,
                        path: ["presalePricePerMint"]
                    }), o.z.NEVER;
                    let P = (0, m.L3)({
                        presaleStartTime: e.presaleStartTime,
                        publicStartTime: e.publicStartTime
                    });
                    if (P.presale) return l.addIssue({
                        code: o.z.ZodIssueCode.custom,
                        message: P.presale,
                        path: ["presaleStartTime"]
                    }), o.z.NEVER;
                    if ("number" == typeof e.maxMintable && e.quantityBreakdown && R.isAlbum) {
                        let t = e.quantityBreakdown.reduce((e, l) => e + l, 0);
                        if (t !== e.maxMintable) return l.addIssue({
                            code: o.z.ZodIssueCode.custom,
                            message: b.XO.quantityBreakdown.total_mismatch,
                            path: ["quantityBreakdown"]
                        }), o.z.NEVER
                    }
                }),
                z = E.and(T),
                y = o.z.object({
                    publicMinPrice: o.z.number().optional(),
                    publicMaxPrice: o.z.number().optional(),
                    presaleMinPrice: o.z.number().optional(),
                    presaleMaxPrice: o.z.number().optional()
                }),
                M = o.z.object({
                    minQuantity: o.z.number().optional(),
                    maxQuantity: o.z.number().optional(),
                    minPublicSaleMaxMintsPerWallet: o.z.number().optional(),
                    maxPublicSaleMaxMintsPerWallet: o.z.number().optional(),
                    minPresaleMaxMintsPerWallet: o.z.number().optional(),
                    maxPresaleMaxMintsPerWallet: o.z.number().optional()
                }),
                S = E._def.schema.keyof().options,
                P = (0, d.$S)((0, u.eJ)(S, e => "collectorsOfArtists" !== e && "collectorsOfReleases" !== e && "manuallyAddedAllowlist" !== e ? e : null)),
                w = (0, d.ZN)(P),
                initialAuctionConfigurationFields = () => ({
                    auctionType: "OPEN_EDITION",
                    enabledSAM: p.eR,
                    maxMintable: null,
                    maxQuantity: null,
                    minQuantity: null,
                    presaleAllowList: null,
                    presaleMaxMintsPerWallet: null,
                    presaleMaxSupply: null,
                    presalePricePerMint: null,
                    presaleStartTime: null,
                    presaleEndTime: null,
                    publicEndTime: null,
                    publicMaxMintsPerWallet: null,
                    publicPricePerMint: null,
                    publicStartTime: null,
                    quantityBreakdown: [],
                    collectorsOfReleases: {
                        selectedReleaseIds: [],
                        allArtistCollaborations: !1,
                        allArtistReleases: !1
                    },
                    collectorsOfArtists: {
                        allArtistCollectors: !0,
                        selectedArtistIds: [],
                        allCollaboratingArtists: !1
                    },
                    manuallyAddedAllowlist: {
                        description: null,
                        hasAddresses: null
                    }
                }),
                initialAuctionConfigurationPriceLimits = () => ({
                    presaleMaxPrice: void 0,
                    presaleMinPrice: void 0,
                    publicMaxPrice: void 0,
                    publicMinPrice: void 0
                }),
                initialAuctionConfigurationMintQuantityLimits = () => ({
                    minQuantity: void 0,
                    maxQuantity: void 0,
                    minPublicSaleMaxMintsPerWallet: void 0,
                    maxPublicSaleMaxMintsPerWallet: void 0,
                    minPresaleMaxMintsPerWallet: void 0,
                    maxPresaleMaxMintsPerWallet: void 0
                }),
                resetAuctionConfigurationState = () => {
                    R.fields = initialAuctionConfigurationFields(), R.errors = (0, b.f)(), R.hasPresaleMint = !1, R.isValid = !1, R.priceLimit = initialAuctionConfigurationPriceLimits(), R.mintQuantityLimit = initialAuctionConfigurationMintQuantityLimits(), R.isAlbum = !1, R.touched = initialAuctionConfigurationTouchedFields()
                },
                C = o.z.object({
                    maxMintable: o.z.boolean(),
                    maxQuantity: o.z.boolean(),
                    minQuantity: o.z.boolean(),
                    presaleMaxMintsPerWallet: o.z.boolean(),
                    presaleMaxSupply: o.z.boolean(),
                    presalePricePerMint: o.z.boolean(),
                    presaleStartTime: o.z.boolean(),
                    presaleEndTime: o.z.boolean(),
                    publicEndTime: o.z.boolean(),
                    publicMaxMintsPerWallet: o.z.boolean(),
                    publicPricePerMint: o.z.boolean(),
                    publicStartTime: o.z.boolean(),
                    quantityBreakdown: o.z.boolean(),
                    collectorsOfReleases: o.z.boolean(),
                    collectorsOfArtists: o.z.boolean(),
                    manuallyAddedAllowlist: o.z.object({
                        description: o.z.boolean(),
                        hasAddresses: o.z.boolean()
                    })
                }),
                initialAuctionConfigurationTouchedFields = () => ({
                    maxMintable: !1,
                    maxQuantity: !1,
                    minQuantity: !1,
                    presaleMaxMintsPerWallet: !1,
                    presaleMaxSupply: !1,
                    presalePricePerMint: !1,
                    presaleStartTime: !1,
                    presaleEndTime: !1,
                    publicEndTime: !1,
                    publicMaxMintsPerWallet: !1,
                    publicPricePerMint: !1,
                    publicStartTime: !1,
                    quantityBreakdown: !1,
                    collectorsOfReleases: !1,
                    collectorsOfArtists: !1,
                    manuallyAddedAllowlist: {
                        description: !1,
                        hasAddresses: !1
                    }
                });
            o.z.object({
                fields: z,
                touched: C,
                errors: b.EL,
                hasPresaleMint: o.z.boolean(),
                isValid: o.z.boolean(),
                priceLimit: y,
                mintQuantityLimit: M,
                isAlbum: o.z.boolean()
            });
            let R = (0, a.sj)({
                errors: (0, b.f)(),
                fields: initialAuctionConfigurationFields(),
                touched: initialAuctionConfigurationTouchedFields(),
                hasPresaleMint: !1,
                isValid: !1,
                priceLimit: initialAuctionConfigurationPriceLimits(),
                isAlbum: !1,
                mintQuantityLimit: initialAuctionConfigurationMintQuantityLimits()
            })
        },
        98345: function(e, l, t) {
            t.d(l, {
                IV: function() {
                    return mapAuctionConfigurationToFormValues
                },
                Tm: function() {
                    return setCollectorsOfArtistsFields
                },
                _1: function() {
                    return setAuctionConfigurationError
                },
                eS: function() {
                    return clearAuctionConfigurationErrors
                },
                ef: function() {
                    return setManuallyAddedAllowlistFields
                },
                pQ: function() {
                    return setAuctionConfigurationField
                },
                sf: function() {
                    return setAllAuctionConfigurationFieldsTouched
                },
                sr: function() {
                    return setCollectorsOfReleasesFields
                },
                tQ: function() {
                    return setAuctionType
                }
            });
            var r = t(73278),
                i = t(14906),
                s = t(85846),
                n = t(31666),
                a = t(44648),
                o = t(91345),
                u = t(16072);
            let clearAuctionConfigurationErrors = () => {
                    o.rW.errors = (0, a.f)()
                },
                mapAuctionConfigurationToFormValues = (e, l, t) => {
                    var a, d, c, m, p, f, g, b, v, I, A, h, T, E, z, y, M, S, P, w, C, R, _, O, x, q;
                    let D = null;
                    e.presaleMint && (D = (0, r.Z)(e.presaleMint.startTime), o.rW.hasPresaleMint = !0);
                    let N = (0, r.Z)(e.publicMint.startTime),
                        k = null == l ? void 0 : null === (d = l.presaleMint) || void 0 === d ? void 0 : null === (a = d.collectorsOfReleases) || void 0 === a ? void 0 : a.selectedReleases.map(e => e.id),
                        F = null == l ? void 0 : null === (m = l.presaleMint) || void 0 === m ? void 0 : null === (c = m.collectorsOfArtists) || void 0 === c ? void 0 : c.selectedArtists.map(e => e.id);
                    o.rW.fields = {
                        auctionType: e.auctionType,
                        enabledSAM: s.eR,
                        presaleEndTime: (null === (p = e.presaleMint) || void 0 === p ? void 0 : p.endTime) ? (0, r.Z)(e.presaleMint.endTime) : null,
                        publicEndTime: (null === (f = e.publicMint) || void 0 === f ? void 0 : f.endTime) ? (0, r.Z)(null === (g = e.publicMint) || void 0 === g ? void 0 : g.endTime) : null,
                        maxMintable: e.maxMintable,
                        minQuantity: e.auctionType === i.cR.RANGE_BOUND || e.auctionType === i.cR.OPEN_EDITION ? e.minQuantity : "",
                        maxQuantity: e.auctionType === i.cR.RANGE_BOUND || e.auctionType === i.cR.OPEN_EDITION ? e.maxMintable : "",
                        publicStartTime: N,
                        presaleStartTime: D,
                        presalePricePerMint: null === (b = e.presaleMint) || void 0 === b ? void 0 : b.price,
                        presaleMaxSupply: null === (v = e.presaleMint) || void 0 === v ? void 0 : v.quantity,
                        presaleMaxMintsPerWallet: null == e ? void 0 : null === (I = e.presaleMint) || void 0 === I ? void 0 : I.maxMintsPerWallet,
                        publicMaxMintsPerWallet: null == e ? void 0 : null === (A = e.publicMint) || void 0 === A ? void 0 : A.maxMintsPerWallet,
                        publicPricePerMint: e.publicMint.price,
                        quantityBreakdown: null !== (R = e.quantityBreakdown) && void 0 !== R ? R : [],
                        collectorsOfReleases: {
                            selectedReleaseIds: null != k ? k : [],
                            allArtistCollaborations: null !== (_ = null == l ? void 0 : null === (T = l.presaleMint) || void 0 === T ? void 0 : null === (h = T.collectorsOfReleases) || void 0 === h ? void 0 : h.allArtistCollaborations) && void 0 !== _ && _,
                            allArtistReleases: null !== (O = null == l ? void 0 : null === (z = l.presaleMint) || void 0 === z ? void 0 : null === (E = z.collectorsOfReleases) || void 0 === E ? void 0 : E.allArtistReleases) && void 0 !== O && O
                        },
                        collectorsOfArtists: {
                            allArtistCollectors: null === (x = null == l ? void 0 : null === (M = l.presaleMint) || void 0 === M ? void 0 : null === (y = M.collectorsOfArtists) || void 0 === y ? void 0 : y.allArtistCollectors) || void 0 === x || x,
                            selectedArtistIds: null != F ? F : [],
                            allCollaboratingArtists: null !== (q = null == l ? void 0 : null === (P = l.presaleMint) || void 0 === P ? void 0 : null === (S = P.collectorsOfArtists) || void 0 === S ? void 0 : S.allCollaboratingArtists) && void 0 !== q && q
                        },
                        manuallyAddedAllowlist: {
                            description: null == l ? void 0 : null === (C = l.presaleMint) || void 0 === C ? void 0 : null === (w = C.manuallyAddedAllowlist) || void 0 === w ? void 0 : w.description,
                            hasAddresses: null
                        }
                    }, o.rW.touched = {
                        maxMintable: !0,
                        maxQuantity: !0,
                        minQuantity: !0,
                        presaleMaxMintsPerWallet: !0,
                        presaleMaxSupply: !0,
                        presalePricePerMint: !0,
                        presaleStartTime: !0,
                        presaleEndTime: !0,
                        publicEndTime: !0,
                        publicMaxMintsPerWallet: !0,
                        publicPricePerMint: !0,
                        publicStartTime: !0,
                        quantityBreakdown: !0,
                        collectorsOfReleases: !0,
                        collectorsOfArtists: !0,
                        manuallyAddedAllowlist: {
                            description: !0,
                            hasAddresses: !0
                        }
                    }, (0, u.v)(), "edit" === t && (0, n.C)()
                },
                setAuctionConfigurationField = (e, l, t) => {
                    (0, o.pc)(e) && (o.rW.fields[e] = l, o.rW.touched[e] = t || !1)
                },
                setAuctionConfigurationError = (e, l) => {
                    (0, o.pc)(e) && (o.rW.errors[e] = l)
                },
                setAuctionType = e => {
                    o.rW.fields.auctionType = e
                },
                setAllAuctionConfigurationFieldsTouched = () => {
                    o.rW.touched = {
                        maxMintable: !0,
                        maxQuantity: !0,
                        minQuantity: !0,
                        presaleMaxMintsPerWallet: !0,
                        presaleMaxSupply: !0,
                        presalePricePerMint: !0,
                        presaleStartTime: !0,
                        presaleEndTime: !0,
                        publicEndTime: !0,
                        publicMaxMintsPerWallet: !0,
                        publicPricePerMint: !0,
                        publicStartTime: !0,
                        quantityBreakdown: !0,
                        collectorsOfReleases: !0,
                        collectorsOfArtists: !0,
                        manuallyAddedAllowlist: {
                            description: !0,
                            hasAddresses: !0
                        }
                    }
                },
                setManuallyAddedAllowlistFields = e => {
                    let {
                        name: l,
                        value: t,
                        touched: r
                    } = e;
                    o.rW.fields.manuallyAddedAllowlist || (o.rW.fields.manuallyAddedAllowlist = {
                        description: null,
                        hasAddresses: null
                    }), o.rW.fields.manuallyAddedAllowlist[l] = t, o.rW.touched.manuallyAddedAllowlist[l] = r || !1
                },
                setCollectorsOfReleasesFields = e => {
                    let {
                        name: l,
                        value: t,
                        touched: r
                    } = e;
                    o.rW.fields.collectorsOfReleases || (o.rW.fields.collectorsOfReleases = {
                        selectedReleaseIds: [],
                        allArtistCollaborations: !1,
                        allArtistReleases: !1
                    }), o.rW.fields.collectorsOfReleases[l] = t, o.rW.touched.collectorsOfReleases = r || !1
                },
                setCollectorsOfArtistsFields = e => {
                    let {
                        name: l,
                        value: t,
                        touched: r
                    } = e;
                    o.rW.fields.collectorsOfArtists || (o.rW.fields.collectorsOfArtists = {
                        allArtistCollectors: !0,
                        selectedArtistIds: [],
                        allCollaboratingArtists: !1
                    }), o.rW.fields.collectorsOfArtists[l] = t, o.rW.touched.collectorsOfArtists = r || !1
                }
        },
        16072: function(e, l, t) {
            t.d(l, {
                v: function() {
                    return validateAuctionConfiguration
                }
            });
            var r = t(66159),
                i = t(91345),
                s = t(98345);
            let validateAuctionConfiguration = () => {
                (0, s.eS)();
                let e = i.OX.safeParse(i.rW.fields);
                if (!e.success) {
                    e.error.issues.map(e => {
                        let {
                            path: l,
                            message: t
                        } = e;
                        (null == l ? void 0 : l[0]) === "addresses" && (i.rW.errors.addresses = t), (null == l ? void 0 : l[0]) === "manuallyAddedAllowlist" && (i.rW.errors.manuallyAddedAllowlist.description = t)
                    }), (0, r.F)(e.error.flatten().fieldErrors).forEach(e => {
                        let [l, t] = e;
                        t && t[0] && "manuallyAddedAllowlist" !== l && (i.rW.errors[l] = t[0])
                    }), i.rW.isValid = !1;
                    return
                }
                return i.rW.isValid = !0, e.data
            }
        },
        8318: function(e, l, t) {
            t.d(l, {
                $I: function() {
                    return initialReleaseInfoErrors
                },
                XO: function() {
                    return c
                },
                fR: function() {
                    return a
                },
                yV: function() {
                    return d
                }
            });
            var r = t(80834),
                i = t(19791),
                s = t(14906),
                n = t(68865);
            let a = r.z.object({
                    title: r.z.string().nullish(),
                    tokenSymbol: r.z.string().nullish(),
                    tracks: r.z.string().nullish(),
                    coverImage: r.z.string().nullish(),
                    genre: r.z.string().nullish(),
                    behindTheMusic: r.z.string().nullish(),
                    staticCoverImage: r.z.string().nullish(),
                    beatsPerMinute: r.z.string().nullish(),
                    key: r.z.string().nullish(),
                    lyrics: r.z.string().nullish(),
                    license: r.z.string().nullish(),
                    location: r.z.string().nullish(),
                    tempTrack: r.z.object({
                        tempTitle: r.z.string().nullish(),
                        tempCoverImage: r.z.string().nullish(),
                        tempAudio: r.z.string().nullish()
                    }),
                    canCollectorsDownloadAudio: r.z.string().nullish(),
                    curatorRewardsEnabled: r.z.string().nullish(),
                    goldenEggImages: r.z.string().nullish().array(),
                    rewards: r.z.object({
                        title: r.z.string().nullish(),
                        description: r.z.string().max(n.l.rewardDescription).nullish()
                    }).array()
                }),
                o = a.keyof().options,
                u = (0, s.$S)((0, i.eJ)(o, e => "rewards" !== e && "goldenEggImages" !== e && "tempTrack" !== e ? e : null)),
                d = (0, s.ZN)(u),
                c = {
                    title: {
                        required_error: "Title is required",
                        pattern_error: "Title must contain at least one letter or number"
                    },
                    tokenSymbol: {
                        required_error: "Token symbol is required"
                    },
                    tracks: {
                        required_error: "Song file is required"
                    },
                    tempTrack: {
                        missing_title: "Title is required",
                        missing_cover_image: "Cover image is required",
                        missing_audio: "Song file is required"
                    },
                    coverImage: {
                        required_error: "Cover image is required"
                    },
                    genre: {
                        required_error: "Genre is required"
                    },
                    behindTheMusic: {
                        required_error: "Behind the music is required"
                    },
                    staticCoverImage: {
                        required_error: "Static cover image is required"
                    },
                    beatsPerMinute: {},
                    key: {},
                    lyrics: {},
                    license: {},
                    location: {},
                    canCollectorsDownloadAudio: {
                        required_error: "Audio download choice is required"
                    },
                    curatorRewardsEnabled: {
                        required_error: "Audio download choice is required"
                    },
                    goldenEggImages: {
                        required_error: "Golden Egg is required"
                    },
                    rewards: {
                        missing_reward_field_title: "Title is required",
                        missing_reward_field_description: "Description is required",
                        reward_field_description_too_long: `Description must be fewer than ${n.l.rewardDescription} characters`,
                        reward_field_title_too_long: `Title must be fewer than ${n.l.rewardTitle} characters`
                    }
                },
                initialReleaseInfoErrors = () => ({
                    title: null,
                    tokenSymbol: null,
                    tracks: null,
                    tempTrack: {
                        tempTitle: null,
                        tempCoverImage: null,
                        tempAudio: null
                    },
                    coverImage: null,
                    genre: null,
                    behindTheMusic: null,
                    staticCoverImage: null,
                    beatsPerMinute: null,
                    key: null,
                    lyrics: null,
                    license: null,
                    location: null,
                    canCollectorsDownloadAudio: null,
                    curatorRewardsEnabled: null,
                    goldenEggImages: [],
                    rewards: []
                })
        },
        59787: function(e, l, t) {
            t.d(l, {
                SV: function() {
                    return initialReleaseInfoTouchedFields
                },
                Vx: function() {
                    return v
                },
                a1: function() {
                    return m
                },
                eS: function() {
                    return I
                },
                jT: function() {
                    return initialReleaseInfoFields
                },
                lu: function() {
                    return T
                },
                releaseInfoState: function() {
                    return y
                },
                rt: function() {
                    return getEditedReleaseInfoPersistence
                }
            });
            var r = t(31265),
                i = t(80834),
                s = t(19791),
                n = t(14906),
                a = t(3928),
                o = t(58102),
                u = t(68865),
                d = t(8318);
            let c = i.z.union([i.z.string(), i.z.number()]).transform(e => {
                    let l = e.toString();
                    return l ? parseInt(l, 10) : null
                }),
                m = i.z.object({
                    mediaType: i.z.nativeEnum(a.DDH),
                    uploadKey: i.z.string()
                }),
                p = i.z.object({
                    coverImage: m.nullish().default(null),
                    duration: i.z.number(),
                    fileDetail: m,
                    normalizedPeaks: i.z.array(i.z.number()).optional().default([]),
                    title: i.z.string()
                }),
                f = i.z.object({
                    tempTitle: i.z.string().nullable().optional(),
                    tempAudio: p.nullable().optional(),
                    tempCoverImage: m.nullable().optional()
                }),
                g = f.keyof().options,
                b = (0, n.$S)(g);
            (0, n.ZN)(b);
            let v = i.z.object({
                    title: i.z.string().nullable().transform((e, l) => {
                        var t, r;
                        return null == e || "" === e ? (l.addIssue({
                            code: i.z.ZodIssueCode.custom,
                            message: null === (t = d.XO.title) || void 0 === t ? void 0 : t.required_error
                        }), i.z.NEVER) : e.match(/^.*[a-zA-Z0-9&$]+.*$/) ? e : (l.addIssue({
                            code: i.z.ZodIssueCode.custom,
                            message: null === (r = d.XO.title) || void 0 === r ? void 0 : r.pattern_error
                        }), i.z.NEVER)
                    }),
                    tokenSymbol: i.z.string().nullable().transform((e, l) => null == e || "" === e ? (l.addIssue({
                        code: i.z.ZodIssueCode.custom,
                        message: d.XO.tokenSymbol.required_error
                    }), i.z.NEVER) : e.length > u.l.tokenSymbol ? (l.addIssue({
                        code: i.z.ZodIssueCode.custom,
                        message: "Token Symbol must be fewer than 8 characters"
                    }), i.z.NEVER) : e.match(/^[A-Z0-9]+$/) ? e : (l.addIssue({
                        code: i.z.ZodIssueCode.custom,
                        message: "Token Symbol must be all capital letters or numbers"
                    }), i.z.NEVER)),
                    tracks: i.z.array(p).transform((e, l) => null == e || (null == e ? void 0 : e.length) === 0 ? (l.addIssue({
                        code: i.z.ZodIssueCode.custom,
                        message: d.XO.tracks.required_error
                    }), i.z.NEVER) : e).nullable().refine(e => null !== e, {
                        message: d.XO.tracks.required_error
                    }),
                    coverImage: m.nullish().transform((e, l) => e && null != e ? e : (l.addIssue({
                        code: i.z.ZodIssueCode.custom,
                        message: d.XO.coverImage.required_error
                    }), i.z.NEVER)),
                    genre: i.z.string().nullable().transform((e, l) => null == e || "" === e ? (l.addIssue({
                        code: i.z.ZodIssueCode.custom,
                        message: d.XO.genre.required_error
                    }), i.z.NEVER) : e),
                    behindTheMusic: i.z.string().nullable().transform((e, l) => null == e || "" === e ? (l.addIssue({
                        code: i.z.ZodIssueCode.custom,
                        message: d.XO.behindTheMusic.required_error
                    }), i.z.NEVER) : e.length > u.l.behindTheMusic ? (l.addIssue({
                        code: i.z.ZodIssueCode.custom,
                        message: `Description must be fewer than ${u.l.behindTheMusic} characters`
                    }), i.z.NEVER) : e),
                    staticCoverImage: m.nullable(),
                    beatsPerMinute: c.nullish().default(null),
                    key: i.z.nativeEnum(a.Ybw).nullish().default(null),
                    lyrics: i.z.string().nullish().default(null).transform((e, l) => e && e.length > u.l.lyrics ? (l.addIssue({
                        code: i.z.ZodIssueCode.custom,
                        message: `Lyrics must be fewer than ${u.l.lyrics} characters`
                    }), i.z.NEVER) : e),
                    license: i.z.nativeEnum(a.oji).nullish().default(null),
                    location: i.z.string().nullish().default(null),
                    tempTrack: f.nullable().default({
                        tempTitle: null,
                        tempCoverImage: null,
                        tempAudio: null
                    }).transform((e, l) => {
                        var t, r, s, n, a, o;
                        if (!y.isTempTrack || !y.isAlbum) return e;
                        if (y.isTempTrack && null == e) {
                            l.addIssue({
                                code: i.z.ZodIssueCode.custom,
                                message: null === (t = d.XO.tempTrack) || void 0 === t ? void 0 : t.missing_title,
                                path: ["tempTitle"]
                            }), l.addIssue({
                                code: i.z.ZodIssueCode.custom,
                                message: null === (r = d.XO.tempTrack) || void 0 === r ? void 0 : r.missing_cover_image,
                                path: ["tempCoverImage"]
                            }), l.addIssue({
                                code: i.z.ZodIssueCode.custom,
                                message: null === (s = d.XO.tempTrack) || void 0 === s ? void 0 : s.missing_audio,
                                path: ["tempAudio"]
                            });
                            return
                        }
                        if (y.isTempTrack && null !== e) {
                            e.tempTitle && "" !== e.tempTitle || l.addIssue({
                                code: i.z.ZodIssueCode.custom,
                                message: null === (n = d.XO.tempTrack) || void 0 === n ? void 0 : n.missing_title,
                                path: ["tempTitle"]
                            }), e.tempCoverImage || l.addIssue({
                                code: i.z.ZodIssueCode.custom,
                                message: null === (a = d.XO.tempTrack) || void 0 === a ? void 0 : a.missing_cover_image,
                                path: ["tempCoverImage"]
                            }), e.tempAudio || l.addIssue({
                                code: i.z.ZodIssueCode.custom,
                                message: null === (o = d.XO.tempTrack) || void 0 === o ? void 0 : o.missing_audio,
                                path: ["tempAudio"]
                            });
                            return
                        }
                        return e
                    }),
                    canCollectorsDownloadAudio: i.z.boolean().refine(e => null !== e, {
                        message: d.XO.canCollectorsDownloadAudio.required_error
                    }).nullish(),
                    curatorRewardsEnabled: i.z.boolean().refine(e => null !== e, {
                        message: d.XO.curatorRewardsEnabled.required_error
                    }).nullish(),
                    goldenEggImages: i.z.array(i.z.object({
                        mediaType: i.z.nativeEnum(a.DDH),
                        uploadKey: i.z.string()
                    }).refine(e => null !== e, {
                        message: d.XO.goldenEggImages.required_error
                    }).nullish()).nullish(),
                    rewards: i.z.array(i.z.object({
                        title: i.z.string(),
                        description: i.z.string().max(u.l.rewardDescription)
                    })).nullish()
                }).superRefine((e, l) => {
                    var t, r;
                    null === (t = e.goldenEggImages) || void 0 === t || t.forEach((e, t) => {
                        e || l.addIssue({
                            code: i.z.ZodIssueCode.custom,
                            message: d.XO.goldenEggImages.required_error,
                            path: ["goldenEggImages", t]
                        })
                    }), null === (r = e.rewards) || void 0 === r || r.forEach((e, t) => {
                        e.title.length < 1 && l.addIssue({
                            code: i.z.ZodIssueCode.custom,
                            message: d.XO.rewards.missing_reward_field_title,
                            path: ["rewards", t, "title"]
                        }), e.title.length > u.l.rewardTitle && l.addIssue({
                            code: i.z.ZodIssueCode.custom,
                            message: d.XO.rewards.reward_field_title_too_long,
                            path: ["rewards", t, "title"]
                        }), e.description.length < 1 && l.addIssue({
                            code: i.z.ZodIssueCode.custom,
                            message: d.XO.rewards.missing_reward_field_description,
                            path: ["rewards", t, "description"]
                        }), e.description.length > u.l.rewardDescription && l.addIssue({
                            code: i.z.ZodIssueCode.custom,
                            message: d.XO.rewards.reward_field_description_too_long,
                            path: ["rewards", t, "description"]
                        })
                    })
                }),
                I = v,
                A = v._def.schema.keyof().options;
            (0, n.$S)(A);
            let h = (0, n.$S)((0, s.eJ)(A, e => "rewards" !== e && "goldenEggImages" !== e && "tempTrack" !== e ? e : null)),
                T = (0, n.ZN)(h),
                initialReleaseInfoFields = () => ({
                    title: null,
                    tokenSymbol: null,
                    tracks: null,
                    coverImage: null,
                    canCollectorsDownloadAudio: !0,
                    curatorRewardsEnabled: !0,
                    goldenEggImages: [null],
                    rewards: [],
                    genre: null,
                    behindTheMusic: null,
                    staticCoverImage: null,
                    beatsPerMinute: null,
                    key: null,
                    lyrics: null,
                    license: null,
                    location: null,
                    tempTrack: {
                        tempTitle: null,
                        tempCoverImage: null,
                        tempAudio: null
                    }
                }),
                E = i.z.object({
                    title: i.z.boolean(),
                    tokenSymbol: i.z.boolean(),
                    tracks: i.z.boolean(),
                    coverImage: i.z.boolean(),
                    genre: i.z.boolean(),
                    behindTheMusic: i.z.boolean(),
                    staticCoverImage: i.z.boolean(),
                    beatsPerMinute: i.z.boolean(),
                    key: i.z.boolean(),
                    lyrics: i.z.boolean(),
                    license: i.z.boolean(),
                    location: i.z.boolean(),
                    tempTrack: i.z.object({
                        tempTitle: i.z.boolean(),
                        tempCoverImage: i.z.boolean(),
                        tempAudio: i.z.boolean()
                    }),
                    canCollectorsDownloadAudio: i.z.boolean(),
                    curatorRewardsEnabled: i.z.boolean(),
                    goldenEggImages: i.z.boolean().array(),
                    rewards: i.z.object({
                        title: i.z.boolean(),
                        description: i.z.boolean()
                    }).array()
                }),
                z = i.z.object({
                    value: i.z.string().optional()
                }),
                initialReleaseInfoTouchedFields = () => ({
                    title: !1,
                    tokenSymbol: !1,
                    tracks: !1,
                    coverImage: !1,
                    genre: !1,
                    behindTheMusic: !1,
                    staticCoverImage: !1,
                    beatsPerMinute: !1,
                    key: !1,
                    lyrics: !1,
                    license: !1,
                    location: !1,
                    tempTrack: {
                        tempTitle: !1,
                        tempCoverImage: !1,
                        tempAudio: !1
                    },
                    canCollectorsDownloadAudio: !1,
                    curatorRewardsEnabled: !1,
                    goldenEggImages: [],
                    rewards: []
                });
            i.z.object({
                fields: I,
                touched: E,
                accordion: z,
                errors: d.fR,
                isValid: i.z.boolean(),
                isAlbum: i.z.boolean(),
                isTempTrack: i.z.boolean()
            });
            let y = (0, r.sj)({
                    errors: (0, d.$I)(),
                    fields: initialReleaseInfoFields(),
                    touched: initialReleaseInfoTouchedFields(),
                    accordion: {
                        value: void 0
                    },
                    isValid: !1,
                    isAlbum: !1,
                    isTempTrack: !1
                }),
                getEditedReleaseInfoPersistence = e => {
                    let {
                        releaseId: l
                    } = e;
                    return (0, o.U)({
                        schema: I,
                        key: `@soundxyz/editedReleaseInfo-${l}`
                    })
                }
        },
        87387: function(e, l, t) {
            t.d(l, {
                $T: function() {
                    return setGoldenEggImagesFieldAtRowIndex
                },
                $X: function() {
                    return mapDeployedReleaseInfoToFormValues
                },
                $x: function() {
                    return setReleaseInfoError
                },
                LG: function() {
                    return mapDraftReleaseInfoToFormValues
                },
                Mo: function() {
                    return getGeneratedTokenSymbol
                },
                PY: function() {
                    return setAdditionalRewardsFieldAtRowIndex
                },
                Wh: function() {
                    return isDraftDataRewardInfo
                },
                iW: function() {
                    return resetStaticCoverImage
                },
                jO: function() {
                    return clearReleaseInfoErrors
                },
                qc: function() {
                    return setAllReleaseInfoFieldsTouched
                },
                vd: function() {
                    return resetReleaseInfoState
                },
                vw: function() {
                    return setReleaseInfoField
                }
            });
            var r = t(94770),
                i = t(80834),
                s = t(14906),
                n = t(3928),
                a = t(85846),
                o = t(30100),
                u = t(8318),
                d = t(59787);
            let c = i.z.object({
                    title: i.z.string(),
                    description: i.z.string()
                }),
                m = i.z.object({
                    canCollectorsDownloadAudio: i.z.boolean(),
                    curatorRewardsEnabled: i.z.boolean(),
                    goldenEggImages: i.z.array(d.a1),
                    rewards: i.z.array(c)
                }),
                clearReleaseInfoErrors = () => {
                    d.releaseInfoState.errors = (0, u.$I)()
                },
                setReleaseInfoField = (e, l, t) => {
                    (0, d.lu)(e) && (d.releaseInfoState.fields[e] = l, d.releaseInfoState.touched[e] = t || !1)
                },
                setGoldenEggImagesFieldAtRowIndex = (e, l, t) => {
                    Array.isArray(d.releaseInfoState.fields.goldenEggImages) || (d.releaseInfoState.fields.goldenEggImages = []);
                    for (let l = 0; l <= e; l++) {
                        var r;
                        (null === (r = d.releaseInfoState.fields.goldenEggImages) || void 0 === r ? void 0 : r[l]) || (d.releaseInfoState.fields.goldenEggImages[l] = null), d.releaseInfoState.touched.goldenEggImages[l] || (d.releaseInfoState.touched.goldenEggImages[l] = !1), d.releaseInfoState.errors.goldenEggImages[l] || (d.releaseInfoState.errors.goldenEggImages[l] = null)
                    }
                    d.releaseInfoState.fields.goldenEggImages[e] = l, d.releaseInfoState.touched.goldenEggImages[e] = t || !1, (0, o.I)()
                },
                setAdditionalRewardsFieldAtRowIndex = (e, l, t) => {
                    var r, i;
                    Array.isArray(d.releaseInfoState.fields.rewards) || (d.releaseInfoState.fields.rewards = []);
                    for (let l = 0; l <= e; l++)(null === (i = d.releaseInfoState.fields.rewards) || void 0 === i ? void 0 : i[l]) || (d.releaseInfoState.fields.rewards[l] = {
                        title: "",
                        description: ""
                    }), d.releaseInfoState.touched.rewards[l] || (d.releaseInfoState.touched.rewards[l] = {
                        title: !1,
                        description: !1
                    }), d.releaseInfoState.errors.rewards[l] || (d.releaseInfoState.errors.rewards[l] = {
                        title: null,
                        description: null
                    });
                    let s = null === (r = d.releaseInfoState.fields.rewards) || void 0 === r ? void 0 : r[e],
                        n = d.releaseInfoState.touched.rewards[e];
                    s && n && (s[l] = t, n[l] = !0), (0, o.I)()
                },
                setReleaseInfoError = (e, l) => {
                    (0, u.yV)(e) && (d.releaseInfoState.errors[e] = l)
                },
                setAllReleaseInfoFieldsTouched = () => {
                    var e, l;
                    d.releaseInfoState.touched = {
                        title: !0,
                        tokenSymbol: !0,
                        tracks: !0,
                        coverImage: !0,
                        genre: !0,
                        behindTheMusic: !0,
                        staticCoverImage: !0,
                        beatsPerMinute: !0,
                        key: !0,
                        lyrics: !0,
                        license: !0,
                        location: !0,
                        tempTrack: {
                            tempTitle: !0,
                            tempCoverImage: !0,
                            tempAudio: !0
                        },
                        canCollectorsDownloadAudio: !0,
                        curatorRewardsEnabled: !0,
                        goldenEggImages: (null === (e = d.releaseInfoState.fields.goldenEggImages) || void 0 === e ? void 0 : e.map(() => !0)) || (0, d.SV)().goldenEggImages,
                        rewards: (null === (l = d.releaseInfoState.fields.rewards) || void 0 === l ? void 0 : l.map(() => ({
                            title: !0,
                            description: !0
                        }))) || (0, d.SV)().rewards
                    }
                },
                resetReleaseInfoState = () => {
                    d.releaseInfoState.fields = (0, d.jT)(), d.releaseInfoState.errors = (0, u.$I)(), d.releaseInfoState.isValid = !1, d.releaseInfoState.isTempTrack = !1, d.releaseInfoState.touched = (0, d.SV)()
                },
                resetStaticCoverImage = () => {
                    d.releaseInfoState.fields.staticCoverImage = null, d.releaseInfoState.touched.staticCoverImage = !1
                },
                mapDeployedReleaseInfoToFormValues = async e => {
                    let l, {
                        releaseData: t,
                        tokenSymbol: r
                    } = e;
                    if (!t.draftId) return;
                    let i = await (0, d.rt)({
                            releaseId: t.id
                        }).get(),
                        o = d.eS.safeParse(i);
                    if (o.success) l = o.data;
                    else {
                        var u, c, m, p, f, g, b, v, I, A, h, T;
                        if (!t || !r) return;
                        let e = {
                                title: t.title,
                                tokenSymbol: r,
                                coverImage: { ...t.coverImage,
                                    uploadKey: (null === (u = t.coverImage) || void 0 === u ? void 0 : u.key) || t.track.id,
                                    mediaType: s.L5.RELEASE_COVER_IMAGE
                                },
                                tracks: [{ ...t.track,
                                    fileDetail: { ...t.track,
                                        mediaType: (null === (c = t.track.audio.audio192k) || void 0 === c ? void 0 : c.key) ? s.L5.AUDIO_192K : s.L5.AUDIO,
                                        uploadKey: (null === (m = t.track.audio.audio192k) || void 0 === m ? void 0 : m.key) || (null === (p = t.track.audio.audioOriginal) || void 0 === p ? void 0 : p.key)
                                    }
                                }],
                                genre: t.genre.name,
                                behindTheMusic: t.behindTheMusic,
                                staticCoverImage: (null === (f = t.staticCoverImage) || void 0 === f ? void 0 : f.key) ? { ...t.staticCoverImage,
                                    uploadKey: null === (g = t.staticCoverImage) || void 0 === g ? void 0 : g.key,
                                    mediaType: s.L5.RELEASE_WEB_STATIC_IMAGE
                                } : null,
                                beatsPerMinute: (null === (b = t.metadataDetails) || void 0 === b ? void 0 : b.bpm) || null,
                                key: (null === (v = t.metadataDetails) || void 0 === v ? void 0 : v.key) || null,
                                lyrics: (null === (I = t.metadataDetails) || void 0 === I ? void 0 : I.lyrics) || null,
                                license: (null === (A = t.metadataDetails) || void 0 === A ? void 0 : A.license) || null,
                                location: (null === (h = t.metadataDetails) || void 0 === h ? void 0 : h.location) || null,
                                tempTrack: {
                                    tempTitle: null,
                                    tempAudio: null,
                                    tempCoverImage: null
                                },
                                canCollectorsDownloadAudio: t.canCollectorsDownloadAudio,
                                curatorRewardsEnabled: t.publicAffiliateFeeBPS !== a.VT,
                                goldenEggImages: [{ ...t.goldenEggImage,
                                    uploadKey: (null === (T = t.goldenEggImage) || void 0 === T ? void 0 : T.key) || t.track.id,
                                    mediaType: s.L5.RELEASE_GOLDEN_EGG_IMAGE
                                }],
                                rewards: t.rewards
                            },
                            i = d.eS.safeParse(e);
                        if (i.success) l = i.data;
                        else throw Error(`Invalid data passed to mapDeployedReleaseInfoToFormValues: ${i.error}`)
                    }
                    let E = { ...l,
                        type: n.AIB.Single
                    };
                    return d.releaseInfoState.fields = { ...l
                    }, E
                },
                mapDraftReleaseInfoToFormValues = e => {
                    var l, t, i, s, n, a, u;
                    let {
                        data: c
                    } = e, m = {
                        title: c.title,
                        tokenSymbol: c.tokenSymbol,
                        coverImage: c.coverImage,
                        tracks: c.tracks,
                        genre: c.genre,
                        behindTheMusic: c.behindTheMusic,
                        beatsPerMinute: c.beatsPerMinute ? Number(c.beatsPerMinute) : null,
                        staticCoverImage: c.staticCoverImage,
                        key: c.key,
                        lyrics: c.lyrics,
                        license: c.license,
                        location: c.location,
                        tempTrack: {
                            tempTitle: null === (l = c.tempTrack) || void 0 === l ? void 0 : l.tempTitle,
                            tempAudio: null === (t = c.tempTrack) || void 0 === t ? void 0 : t.tempAudio,
                            tempCoverImage: null === (i = c.tempTrack) || void 0 === i ? void 0 : i.tempCoverImage
                        },
                        canCollectorsDownloadAudio: "boolean" == typeof c.canCollectorsDownloadAudio ? c.canCollectorsDownloadAudio : (0, d.jT)().canCollectorsDownloadAudio,
                        curatorRewardsEnabled: "boolean" == typeof c.curatorRewardsEnabled ? c.curatorRewardsEnabled : (0, d.jT)().curatorRewardsEnabled,
                        goldenEggImages: (null === (s = c.tracks) || void 0 === s ? void 0 : s.map((e, l) => {
                            var t;
                            return (null === (t = c.goldenEggImages) || void 0 === t ? void 0 : t[l]) || null
                        })) || (0, d.jT)().goldenEggImages,
                        rewards: (null === (n = c.rewards) || void 0 === n ? void 0 : n.length) ? (0, r.Z)(c.rewards) : (0, d.jT)().rewards
                    }, p = { ...m,
                        type: "SINGLE"
                    };
                    return d.releaseInfoState.fields = { ...m
                    }, d.releaseInfoState.touched = {
                        title: !0,
                        tokenSymbol: !0,
                        coverImage: !0,
                        tracks: !0,
                        genre: !0,
                        behindTheMusic: !0,
                        beatsPerMinute: !0,
                        staticCoverImage: !0,
                        key: !0,
                        lyrics: !0,
                        license: !0,
                        location: !0,
                        tempTrack: {
                            tempTitle: !0,
                            tempCoverImage: !0,
                            tempAudio: !0
                        },
                        canCollectorsDownloadAudio: !0,
                        curatorRewardsEnabled: !0,
                        goldenEggImages: (null === (a = c.goldenEggImages) || void 0 === a ? void 0 : a.map(() => !0)) || (0, d.SV)().goldenEggImages,
                        rewards: (null === (u = c.rewards) || void 0 === u ? void 0 : u.map(() => ({
                            title: !0,
                            description: !0
                        }))) || (0, d.SV)().rewards
                    }, (0, o.I)(), p
                },
                getGeneratedTokenSymbol = e => e.split("-").join("").replace(/[aeiou]/gi, "").toUpperCase().slice(0, 8);

            function isDraftDataRewardInfo(e) {
                let l = m.safeParse(e);
                return l.success
            }
        },
        30100: function(e, l, t) {
            t.d(l, {
                I: function() {
                    return validateReleaseInfo
                }
            });
            var r = t(84669),
                i = t(8318),
                s = t(59787),
                n = t(87387);
            let validateReleaseInfo = () => {
                (0, n.jO)();
                let e = s.Vx.safeParse(s.releaseInfoState.fields);
                if (!e.success) {
                    e.error.issues.map(e => {
                        let {
                            path: l,
                            message: t
                        } = e;
                        if ((null == l ? void 0 : l[0]) === "rewards" && (null == l ? void 0 : l[1]) != null && (null == l ? void 0 : l[2]) != null) {
                            let e = String(l[2]),
                                r = Number(l[1]);
                            if (isNaN(r) || r < 0) return;
                            if (r >= s.releaseInfoState.errors.rewards.length)
                                for (let e = s.releaseInfoState.errors.rewards.length; e <= r; e++) s.releaseInfoState.errors.rewards[e] || (s.releaseInfoState.errors.rewards[e] = {});
                            let i = s.releaseInfoState.errors.rewards[r];
                            i && (i[e] = t)
                        }
                        if ((null == l ? void 0 : l[0]) === "tempTrack") {
                            let e = String(l[1]),
                                r = s.releaseInfoState.errors.tempTrack;
                            r && (r[e] = t)
                        }
                        if ((null == l ? void 0 : l[0]) === "goldenEggImages" && (null == l ? void 0 : l[1]) != null) {
                            let e = Number(l[1]);
                            if (isNaN(e) || e < 0) return;
                            if (e >= s.releaseInfoState.errors.goldenEggImages.length)
                                for (let l = s.releaseInfoState.errors.goldenEggImages.length; l <= e; l++) s.releaseInfoState.errors.goldenEggImages[l] || (s.releaseInfoState.errors.goldenEggImages[l] = null);
                            "Expected object, received null" === t ? s.releaseInfoState.errors.goldenEggImages[e] = i.XO.goldenEggImages.required_error : s.releaseInfoState.errors.goldenEggImages[e] = t
                        }
                    }), (0, r.F)(e.error.flatten().fieldErrors).forEach(e => {
                        let [l, t] = e;
                        "rewards" !== l && "goldenEggImages" !== l && "tempTrack" !== l && (s.releaseInfoState.errors[l] = null == t ? void 0 : t[0])
                    }), s.releaseInfoState.isValid = !1;
                    return
                }
                return s.releaseInfoState.isValid = !0, e.data
            }
        },
        88111: function(e, l, t) {
            t.d(l, {
                Ui: function() {
                    return useEditedSplitsFromPersistence
                },
                ac: function() {
                    return getEditedSplitsPersistence
                },
                au: function() {
                    return setPersistedSplitsForRelease
                }
            });
            var r = t(80834),
                i = t(3928),
                s = t(58102),
                n = t(68034);
            let a = r.z.object({
                    splitsInfo: n.Ld,
                    fundingRecipient: r.z.string().optional()
                }),
                getEditedSplitsPersistence = e => {
                    let {
                        releaseId: l
                    } = e;
                    return (0, s.U)({
                        schema: a,
                        key: `@soundxyz/editedSplits-${l}`
                    })
                },
                useEditedSplitsFromPersistence = e => {
                    let {
                        releaseId: l
                    } = e, {
                        data: t,
                        isInitialLoading: r
                    } = (0, i.Uq7)({
                        queryKey: ["edited-splits-persistence", l],
                        queryFn: () => l ? getEditedSplitsPersistence({
                            releaseId: l
                        }).get() : null
                    });
                    return {
                        persistedSplits: t,
                        isInitialLoading: r
                    }
                },
                setPersistedSplitsForRelease = async e => {
                    let {
                        fields: l,
                        releaseId: t
                    } = e;
                    t && await getEditedSplitsPersistence({
                        releaseId: t
                    }).set({
                        splitsInfo: l
                    })
                }
        },
        17153: function(e, l, t) {
            t.d(l, {
                N: function() {
                    return i
                },
                h: function() {
                    return initialSplitsErrors
                }
            });
            var r = t(80834);
            let i = r.z.object({
                splits: r.z.string().nullish()
            });
            i.keyof().options;
            let initialSplitsErrors = () => ({
                splits: null
            })
        },
        68034: function(e, l, t) {
            t.d(l, {
                G4: function() {
                    return c
                },
                Ld: function() {
                    return m
                },
                UT: function() {
                    return initializeSplitsFieldsWithOwnerAddress
                },
                ZD: function() {
                    return f
                },
                lh: function() {
                    return resetSplitsState
                }
            });
            var r = t(31265),
                i = t(20886),
                s = t(80834),
                n = t(9026),
                a = t(85846),
                o = t(17153);
            let u = s.z.union([s.z.string(), s.z.number()]).transform(e => {
                    let l = e.toString();
                    return l ? parseFloat(l) : null
                }),
                d = s.z.object({
                    ownerAddress: s.z.string().transform(e => e.toLowerCase()),
                    percent: u.transform(e => null != e ? e : 0),
                    roles: s.z.array(s.z.nativeEnum(n.H))
                });
            d.keyof().options;
            let addSplitsIssue = (e, l) => {
                    l.addIssue({
                        code: s.z.ZodIssueCode.custom,
                        message: e,
                        path: ["splits"]
                    })
                },
                c = s.z.object({
                    splits: s.z.array(d).transform(e => null != e ? e : [])
                }).superRefine((e, l) => {
                    let {
                        splits: t
                    } = e, r = t.map(e => e.ownerAddress), s = t.map(e => e.percent), n = t.map(e => e.roles);
                    for (let e of (t.length >= a.t1 && addSplitsIssue(`You can only define a maximum of ${a.t1} owners per split at this time`, l), r))
                        if (!e) {
                            addSplitsIssue("Please fill all address fields", l);
                            return
                        }
                    let o = new Set(r.map(e => e.toLowerCase()));
                    if (o.size !== r.length) {
                        addSplitsIssue("Please remove duplicate addresses", l);
                        return
                    }
                    for (let e of s) {
                        if (!+e) {
                            addSplitsIssue("Please provide a percentage for every owner", l);
                            return
                        }
                        if (0 > +e) {
                            addSplitsIssue("No negative percentages allowed", l);
                            return
                        }
                    }
                    let u = s.map(e => 100 * +e).reduce((e, l) => e + l, 0) / 100,
                        d = r.filter(e => !(0, i.U)(e));
                    if (d.length) {
                        addSplitsIssue(`Invalid address: ${d[0]}`, l);
                        return
                    }
                    if (100 !== u) {
                        addSplitsIssue("Total must equal 100%", l);
                        return
                    }
                    for (let e of n)
                        if (!e || 0 === e.length) {
                            addSplitsIssue("Please provide a role for each owner", l);
                            return
                        }
                }),
                m = c,
                initialSplitsFields = () => ({
                    splits: []
                }),
                initializeSplitsFieldsWithOwnerAddress = e => {
                    f.fields.splits = [{
                        ownerAddress: e,
                        roles: [n.H.ARTIST],
                        percent: "100"
                    }]
                },
                resetSplitsState = () => {
                    f.fields = initialSplitsFields(), f.errors = (0, o.h)(), f.isValid = !1, f.touched = initialSplitsTouchedFields()
                },
                p = s.z.object({
                    splits: s.z.boolean()
                }),
                initialSplitsTouchedFields = () => ({
                    splits: !1
                });
            s.z.object({
                fields: m,
                touched: p,
                errors: o.N,
                isValid: s.z.boolean()
            });
            let f = (0, r.sj)({
                errors: (0, o.h)(),
                fields: initialSplitsFields(),
                touched: initialSplitsTouchedFields(),
                isValid: !1
            })
        },
        29494: function(e, l, t) {
            t.d(l, {
                A4: function() {
                    return mapPersistedSplitsToFormValues
                },
                AK: function() {
                    return mapReleaseSplitsToFormValues
                },
                Ep: function() {
                    return clearSplitsErrors
                },
                KK: function() {
                    return setSplitsTouched
                },
                Ww: function() {
                    return setSplitsFieldAtRowIndex
                },
                XC: function() {
                    return mapDraftSplitsToFormValues
                },
                YH: function() {
                    return addSplitsRow
                },
                zl: function() {
                    return removeSplitsRow
                }
            });
            var r = t(17153),
                i = t(68034),
                s = t(6010);
            let addSplitsRow = e => {
                    i.ZD.fields.splits.push({
                        ownerAddress: e,
                        roles: [],
                        percent: ""
                    })
                },
                removeSplitsRow = e => {
                    i.ZD.fields.splits.splice(e, 1)
                },
                setSplitsFieldAtRowIndex = (e, l, t) => {
                    let r = i.ZD.fields.splits[e];
                    r && (i.ZD.fields.splits[e] = { ...r,
                        [l]: t
                    }, i.ZD.touched.splits = !0)
                },
                setSplitsTouched = () => {
                    i.ZD.touched.splits = !0
                },
                clearSplitsErrors = () => {
                    i.ZD.errors = (0, r.h)()
                },
                mapDraftSplitsToFormValues = e => {
                    i.ZD.fields.splits = e.splits, setSplitsTouched(), (0, s.P)()
                },
                mapReleaseSplitsToFormValues = (e, l) => {
                    let t = e.map(e => ({
                            ownerAddress: e.owner.publicAddress,
                            roles: e.roles,
                            percent: e.percent
                        })).sort(e => e.ownerAddress === l ? -1 : 0),
                        r = i.Ld.safeParse({
                            splits: t
                        });
                    i.ZD.fields.splits = r.success ? r.data.splits : [], setSplitsTouched(), (0, s.P)()
                },
                mapPersistedSplitsToFormValues = e => {
                    var l;
                    i.ZD.fields.splits = null === (l = e.splitsInfo) || void 0 === l ? void 0 : l.splits, setSplitsTouched(), (0, s.P)()
                }
        },
        6010: function(e, l, t) {
            t.d(l, {
                P: function() {
                    return validateSplits
                }
            });
            var r = t(84669),
                i = t(68034),
                s = t(29494);
            let validateSplits = () => {
                (0, s.Ep)();
                let e = i.Ld.safeParse(i.ZD.fields);
                if (!e.success) {
                    setTimeout(() => {
                        var l, t, s;
                        i.ZD.errors.splits = null !== (s = null === (t = (0, r.F)(e.error.flatten().fieldErrors)[0]) || void 0 === t ? void 0 : null === (l = t[1]) || void 0 === l ? void 0 : l[0]) && void 0 !== s ? s : null, i.ZD.isValid = !1
                    }, 0);
                    return
                }
                return i.ZD.isValid = !0, e.data
            }
        },
        19716: function(e, l, t) {
            t.d(l, {
                $K: function() {
                    return isDefined
                },
                $y: function() {
                    return getURIFromArweaveHash
                },
                C6: function() {
                    return J
                },
                CG: function() {
                    return getFormattedTimezone
                },
                Cb: function() {
                    return isPastDate
                },
                Fo: function() {
                    return isParseableNumeric
                },
                HZ: function() {
                    return scrollToError
                },
                IQ: function() {
                    return newCleanDate
                },
                IU: function() {
                    return getAllowlistPlaceholderText
                },
                Jf: function() {
                    return useSetFormDataFromQuery
                },
                L3: function() {
                    return getTimingErrors
                },
                LN: function() {
                    return getAuctionType
                },
                M5: function() {
                    return containsDecimal
                },
                M_: function() {
                    return roundToNearest30Minutes
                },
                R7: function() {
                    return $
                },
                Sj: function() {
                    return addZeroBeforeNumber
                },
                WU: function() {
                    return setEditAuctionConfigPresaleField
                },
                YK: function() {
                    return getDurationTooltip
                },
                YN: function() {
                    return isPriceZero
                },
                Yr: function() {
                    return getDateTimeErrorsV2
                },
                ZF: function() {
                    return getEditDropFormattedData
                },
                Zc: function() {
                    return getAllowlistSearchPlaceholderText
                },
                _1: function() {
                    return clearAllLocalData
                },
                a1: function() {
                    return G
                },
                aY: function() {
                    return Q
                },
                fo: function() {
                    return getInfoToUpsertFromFormOrThrow
                },
                ms: function() {
                    return useIsSavedStepDataReady
                },
                nG: function() {
                    return transformStringFloat
                },
                qB: function() {
                    return getMaxMintablePerAccountForSaleSchedule
                },
                r$: function() {
                    return Y
                },
                rZ: function() {
                    return getDateTimeErrors
                },
                rx: function() {
                    return setEditAuctionConfigPublicSaleField
                },
                tO: function() {
                    return useIsProcessLoading
                },
                tS: function() {
                    return isSamEnabled
                },
                uF: function() {
                    return transformStringInteger
                },
                xS: function() {
                    return parseDaysToWeeks
                }
            });
            var r = t(97352),
                i = t(17816),
                s = t(73278),
                n = t(59810),
                a = t(11908),
                o = t(31265),
                u = t(63558),
                d = t(30274),
                c = t(80834),
                m = t(14906),
                p = t(9026),
                f = t(47226),
                g = t(82438),
                b = t(19791),
                v = t(96301),
                I = t(25533),
                A = t(3928),
                h = t(96440),
                T = t(77348),
                E = t(85846),
                z = t(18191),
                y = t(64571),
                M = t(64306),
                S = t(2818),
                P = t(81114),
                w = t(35296),
                C = t(31666),
                R = t(44648),
                _ = t(91345),
                O = t(98345),
                x = t(16072),
                q = t(59787),
                D = t(87387),
                N = t(30100),
                k = t(88111),
                F = t(68034),
                L = t(29494),
                Z = t(6010),
                W = t(27836);
            let V = (0, m.$S)([A.AIB.Single, A.AIB.Album]);
            (0, m.Kn)(V);
            let j = (0, o.sj)({
                stepId: 0,
                isReady: !1
            });

            function useIsSavedStepDataReady(e) {
                let {
                    stepId: l
                } = e, t = (0, u.R)(j);
                return t.stepId === l && t.isReady
            }
            let getAuctionOptions = e => {
                    let {
                        type: l,
                        data: t
                    } = e;
                    switch (l) {
                        case "FIXED_QUANTITY":
                            return {
                                type: l,
                                data: (0, b.CC)(null == t ? void 0 : t.auction, e => e.__typename === m.pQ.FixedAuction && e)
                            };
                        case "OPEN_EDITION":
                            return {
                                type: l,
                                data: (0, b.CC)(null == t ? void 0 : t.auction, e => e.__typename === m.pQ.OpenEditionAuction && e)
                            };
                        case "OPEN_EDITION_WITH_SAM":
                            return {
                                type: l,
                                data: (0, b.CC)(null == t ? void 0 : t.auction, e => e.__typename === m.pQ.OpenEditionWithSAMAuction && e)
                            };
                        default:
                            return {}
                    }
                },
                isSamEnabled = e => {
                    var l;
                    let {
                        type: t,
                        data: r
                    } = e, i = getAuctionOptions({
                        type: t,
                        data: r
                    });
                    return (null === (l = i.data) || void 0 === l ? void 0 : l.__typename) === "OpenEditionWithSAMAuction" && i.data.inflectionCountSAM && i.data.inflectionMultipleBPS
                },
                getURIFromArweaveHash = e => {
                    let {
                        arweaveHash: l
                    } = e;
                    return `ar://${l}`
                },
                getAuctionType = e => {
                    switch (e) {
                        case "FixedAuction":
                            return "FIXED_QUANTITY";
                        case "OpenEditionAuction":
                            return "OPEN_EDITION";
                        case "OpenEditionWithSAMAuction":
                            return "OPEN_EDITION_WITH_SAM";
                        default:
                            return null
                    }
                },
                useSetFormDataFromQuery = e => {
                    var l, t, i, s, n, a, o, d, c, m, p, f;
                    let {
                        draftId: g,
                        stepId: b,
                        draftType: z
                    } = e, {
                        draft: M,
                        loading: S
                    } = (0, W.M)({
                        draftId: g,
                        disabled: "upload" !== z
                    }), {
                        data: C
                    } = (0, A.aM2)(A.vr, {
                        variables: !!(null == M ? void 0 : null === (l = M.release) || void 0 === l ? void 0 : l.id) && {
                            id: M.release.id
                        },
                        enabled: "edit" === z,
                        staleTime: 0,
                        cacheTime: 1 / 0
                    }), R = (0, h.p)({
                        auctionContractType: (null == C ? void 0 : null === (t = C.data.release) || void 0 === t ? void 0 : t.auctionContractType) || null,
                        chainId: (null == C ? void 0 : null === (i = C.data.release) || void 0 === i ? void 0 : i.chainId) || 1,
                        editionAddress: (null == C ? void 0 : null === (s = C.data.release) || void 0 === s ? void 0 : s.contractAddress) || ""
                    }, {
                        enabled: !!(null == C ? void 0 : null === (n = C.data.release) || void 0 === n ? void 0 : n.contractAddress) && !!(null == C ? void 0 : null === (a = C.data.release) || void 0 === a ? void 0 : a.chainId)
                    }), {
                        authUser: x
                    } = (0, v.aC)(), {
                        persistedSplits: q
                    } = (0, k.Ui)({
                        releaseId: null == M ? void 0 : null === (o = M.release) || void 0 === o ? void 0 : o.id
                    }), {
                        persistedAllowlists: N
                    } = (0, w.pG)({
                        releaseId: null == M ? void 0 : null === (d = M.release) || void 0 === d ? void 0 : d.id
                    }), {
                        isReady: Z
                    } = (0, u.R)(j), V = null == C ? void 0 : null === (c = C.data.release) || void 0 === c ? void 0 : c.chainId, $ = null == C ? void 0 : null === (p = C.data.release) || void 0 === p ? void 0 : null === (m = p.creditSplit) || void 0 === m ? void 0 : m.splitAddress, {
                        provider: Q
                    } = (0, I.useChainProvider)(), {
                        data: X = null,
                        isInitialLoading: U
                    } = (0, A.Uq7)({
                        queryKey: ["splits-contract-matches-chain", V, $],
                        enabled: null != V && null != $,
                        queryFn: async () => null == V || null == $ ? null : (0, T.A8)({
                            contractAddress: $,
                            provider: Q(V)
                        }),
                        retry: !0
                    });
                    return (0, r.useEffect)(() => {
                        if (j.isReady = !1, !b || !(null == x ? void 0 : x.publicAddress)) return;
                        if ("edit" === z) {
                            var e, l, t, r, i, s, n;
                            if (U || null == C) return;
                            (null == C ? void 0 : null === (e = C.data) || void 0 === e ? void 0 : e.release) && (null === (l = R.data) || void 0 === l ? void 0 : l.symbol) && ((0, D.$X)({
                                releaseData: null == C ? void 0 : C.data.release,
                                tokenSymbol: R.data.symbol
                            }), setTimeout(() => {
                                j.isReady = !0
                            }));
                            let a = null == C ? void 0 : null === (i = C.data) || void 0 === i ? void 0 : null === (r = i.release) || void 0 === r ? void 0 : null === (t = r.creditSplit) || void 0 === t ? void 0 : t.creditAllocations;
                            q ? (0, L.A4)(q) : a && X ? (0, L.AK)(a, x.publicAddress) : ((0, F.lh)(), (0, F.UT)(x.publicAddress)), N && (null == M ? void 0 : null === (s = M.release) || void 0 === s ? void 0 : s.id) && (0, P.fX)({
                                releaseId: null == M ? void 0 : null === (n = M.release) || void 0 === n ? void 0 : n.id,
                                persistedAllowlists: N
                            });
                            return
                        }
                        j.stepId = b;
                        let a = null == M ? void 0 : M.info,
                            o = (0, y.j3)(b);
                        o === E.jn.RELEASE_INFO && ((null == a ? void 0 : a.releaseInfo) ? (0, D.LG)({
                            data: { ...a.releaseInfo,
                                ...a.rewardsInfo
                            }
                        }) : (0, D.vd)()), o === E.jn.SPLITS && ((null == a ? void 0 : a.splitsInfo) ? (0, L.XC)(a.splitsInfo) : ((0, F.lh)(), (0, F.UT)(x.publicAddress))), o === E.jn.DROP_CONFIGURATION && ((null == a ? void 0 : a.auctionConfigurations) ? (0, O.IV)(a.auctionConfigurations, a.allowListInfo, z) : (0, _.v7)()), setTimeout(() => {
                            j.isReady = !0
                        })
                    }, [M, b, z, null == x ? void 0 : x.publicAddress, C, null === (f = R.data) || void 0 === f ? void 0 : f.symbol, q, N, U, X]), {
                        loading: S,
                        isReady: Z
                    }
                },
                getUploadStepNameNew = e => {
                    var l, t;
                    return null !== (t = null === (l = E.tV[e - 1]) || void 0 === l ? void 0 : l.name) && void 0 !== t ? t : ""
                },
                $ = c.z.union([c.z.string(), c.z.number()]).transform(e => {
                    let l = e.toString();
                    return l ? parseInt(l, 10) : null
                }),
                Q = c.z.union([c.z.string(), c.z.number()]).transform(e => {
                    let l = e.toString();
                    return l ? parseFloat(l) : null
                }),
                X = c.z.array(c.z.object({
                    address: c.z.string(),
                    source: c.z.nativeEnum(A.y2J)
                })).nullish().transform(e => null != e ? e : []),
                U = c.z.object({
                    presalePricePerMint: Q.nullish(),
                    publicPricePerMint: Q.nullish()
                }),
                B = c.z.object({
                    presaleStartTime: c.z.date().nullish(),
                    presaleEndTime: $.nullish(),
                    publicStartTime: c.z.date().nullish(),
                    publicEndTime: $.nullish()
                });
            c.z.object({
                auctionType: c.z.nativeEnum(m.cR).nullish(),
                maxQuantity: $.nullish(),
                minQuantity: $.nullish(),
                maxMintable: $.nullish(),
                presaleAllowList: X,
                presaleMaxSupply: $.nullish(),
                presaleMaxMintsPerWallet: $.nullish(),
                publicMaxMintsPerWallet: $.nullish(),
                quantityBreakdown: c.z.array($.transform(e => null != e ? e : 0)).nullish().default(null),
                enabledSAM: c.z.boolean()
            }).merge(U).merge(B);
            let G = c.z.object({
                mediaType: c.z.nativeEnum(A.DDH),
                uploadKey: c.z.string()
            });
            c.z.object({
                splits: c.z.array(c.z.object({
                    ownerAddress: c.z.string(),
                    percent: Q.transform(e => null != e ? e : 0),
                    roles: c.z.array(c.z.nativeEnum(p.H))
                })).nullish().transform(e => null != e ? e : [])
            });
            let H = c.z.object({
                    allArtistReleases: c.z.boolean(),
                    allArtistCollaborations: c.z.boolean(),
                    selectedReleaseIds: c.z.array(c.z.string()).nullable()
                }).nullish().transform(e => {
                    var l, t, r;
                    return {
                        allArtistReleases: null !== (l = null == e ? void 0 : e.allArtistReleases) && void 0 !== l && l,
                        allArtistCollaborations: null !== (t = null == e ? void 0 : e.allArtistCollaborations) && void 0 !== t && t,
                        selectedReleaseIds: null !== (r = null == e ? void 0 : e.selectedReleaseIds) && void 0 !== r ? r : []
                    }
                }),
                K = c.z.object({
                    allArtistCollectors: c.z.boolean(),
                    allCollaboratingArtists: c.z.boolean(),
                    selectedArtistIds: c.z.array(c.z.string()).nullable()
                }).nullish().transform(e => {
                    var l, t, r;
                    return {
                        allArtistCollectors: null === (l = null == e ? void 0 : e.allArtistCollectors) || void 0 === l || l,
                        allCollaboratingArtists: null !== (t = null == e ? void 0 : e.allCollaboratingArtists) && void 0 !== t && t,
                        selectedArtistIds: null !== (r = null == e ? void 0 : e.selectedArtistIds) && void 0 !== r ? r : []
                    }
                });
            c.z.object({
                collectorsOfReleases: H,
                collectorsOfArtists: K,
                manuallyAddedAllowlist: c.z.object({
                    description: c.z.string().nullish(),
                    hasAddresses: c.z.boolean().nullish()
                }).nullish()
            }).nullish();
            let Y = (0, o.sj)({
                loadingCount: 0
            });
            (0, o.sj)({
                loadingCount: 0
            });
            let useIsProcessLoading = () => (0, u.R)(Y).loadingCount > 0,
                getInfoToUpsertFromFormOrThrow = e => {
                    var l, t, r, i, s, a, u, d, p, g, b, v, I, A, h, T, y, M, S;
                    let {
                        stepId: P,
                        saleData: w,
                        presaleMintTotalUsers: C
                    } = e, R = getUploadStepNameNew(P);
                    switch (R) {
                        case E.jn.RELEASE_INFO:
                            (0, D.qc)();
                            let O = (0, N.I)();
                            if (!O) throw new z.mN("Input error for at least 1 field.");
                            let q = c.z.array(G).safeParse(O.goldenEggImages);
                            if (!1 === q.success) throw Error("goldenEgg was not set");
                            return {
                                releaseInfo: {
                                    title: O.title,
                                    tokenSymbol: O.tokenSymbol,
                                    coverImage: O.coverImage,
                                    tracks: O.tracks || [],
                                    genre: O.genre,
                                    behindTheMusic: O.behindTheMusic,
                                    beatsPerMinute: null !== (l = O.beatsPerMinute) && void 0 !== l ? l : null,
                                    staticCoverImage: O.staticCoverImage,
                                    key: O.key,
                                    lyrics: O.lyrics,
                                    license: O.license,
                                    location: O.location,
                                    type: "SINGLE"
                                },
                                rewardsInfo: {
                                    goldenEggImages: q.data,
                                    canCollectorsDownloadAudio: O.canCollectorsDownloadAudio,
                                    curatorRewardsEnabled: O.curatorRewardsEnabled,
                                    rewards: O.rewards
                                }
                            };
                        case E.jn.SPLITS:
                            let k = (0, Z.P)();
                            if (!k) throw new z.mN("Input error for at least 1 field.");
                            return {
                                splitsInfo: {
                                    splits: k.splits
                                }
                            };
                        case E.jn.DROP_CONFIGURATION:
                            let {
                                hasPresaleMint: F,
                                fields: L
                            } = (0, o.CO)(_.rW), W = (0, x.v)();
                            if (!W) throw new z.mN("Input error for at least 1 field.");
                            let V = L.auctionType === m.cR.OPEN_EDITION || L.auctionType === m.cR.OPEN_EDITION_WITH_SAM ? f.Yt : L.auctionType === m.cR.RANGE_BOUND ? W.maxQuantity : W.maxMintable,
                                j = L.auctionType === m.cR.RANGE_BOUND || L.auctionType === m.cR.OPEN_EDITION || L.auctionType === m.cR.OPEN_EDITION_WITH_SAM ? W.minQuantity : W.maxMintable,
                                $ = F && null != W.presalePricePerMint && W.presaleMaxSupply && W.presaleStartTime && W.presaleEndTime ? {
                                    price: W.presalePricePerMint,
                                    quantity: "number" != typeof W.presaleMaxSupply ? parseInt(W.presaleMaxSupply) : W.presaleMaxSupply,
                                    startTime: (0, n.Z)(W.presaleStartTime),
                                    endTime: (0, n.Z)(W.presaleEndTime),
                                    maxMintsPerWallet: (() => {
                                        if (!W.presaleMaxMintsPerWallet) {
                                            let e = "Max mints per wallet is required";
                                            throw _.rW.errors.presaleMaxMintsPerWallet = e, Error(e)
                                        }
                                        return Number(W.presaleMaxMintsPerWallet)
                                    })()
                                } : null,
                                Q = {
                                    price: W.publicPricePerMint,
                                    quantity: Number(V),
                                    startTime: (0, n.Z)(W.publicStartTime),
                                    endTime: (0, n.Z)(W.publicEndTime),
                                    maxMintsPerWallet: Number(W.publicMaxMintsPerWallet)
                                },
                                X = W && F ? {
                                    presaleMint: {
                                        collectorsOfReleases: {
                                            allArtistReleases: null !== (A = null === (t = W.collectorsOfReleases) || void 0 === t ? void 0 : t.allArtistReleases) && void 0 !== A && A,
                                            allArtistCollaborations: null !== (h = null === (r = W.collectorsOfReleases) || void 0 === r ? void 0 : r.allArtistCollaborations) && void 0 !== h && h,
                                            selectedReleaseIds: null !== (T = null === (i = W.collectorsOfReleases) || void 0 === i ? void 0 : i.selectedReleaseIds) && void 0 !== T ? T : []
                                        },
                                        collectorsOfArtists: {
                                            allArtistCollectors: null === (y = null == W ? void 0 : null === (s = W.collectorsOfArtists) || void 0 === s ? void 0 : s.allArtistCollectors) || void 0 === y || y,
                                            allCollaboratingArtists: null !== (M = null === (a = W.collectorsOfArtists) || void 0 === a ? void 0 : a.allCollaboratingArtists) && void 0 !== M && M,
                                            selectedArtistIds: null !== (S = null === (u = W.collectorsOfArtists) || void 0 === u ? void 0 : u.selectedArtistIds) && void 0 !== S ? S : []
                                        },
                                        manuallyAddedAllowlist: {
                                            description: null === (d = W.manuallyAddedAllowlist) || void 0 === d ? void 0 : d.description,
                                            hasAddresses: null === (p = W.manuallyAddedAllowlist) || void 0 === p ? void 0 : p.hasAddresses
                                        }
                                    }
                                } : null,
                                U = !!(null == w ? void 0 : null === (b = w.draft.info) || void 0 === b ? void 0 : null === (g = b.auctionConfigurations) || void 0 === g ? void 0 : g.presaleMint);
                            if (U && X && !validateSaleHasAllowlist({
                                    totalUsers: C,
                                    sale: X.presaleMint
                                })) throw new z.mN("Presale phase must have at least one address in the allowlist");
                            return null == X || null === (I = X.presaleMint) || void 0 === I || null === (v = I.manuallyAddedAllowlist) || void 0 === v || delete v.hasAddresses, {
                                auctionConfigurations: {
                                    auctionType: L.auctionType,
                                    maxMintable: Number(V),
                                    minQuantity: Number(j),
                                    presaleMint: $,
                                    publicMint: Q,
                                    quantityBreakdown: W.quantityBreakdown,
                                    enabledSAM: L.enabledSAM
                                },
                                allowListsInfo: X
                            };
                        default:
                            throw Error("Invalid upload step name")
                    }
                },
                getFormattedTimezone = () => {
                    var e;
                    let l = new Date,
                        t = new Intl.DateTimeFormat("en-US", {
                            timeZoneName: "long"
                        }),
                        r = t.formatToParts(l),
                        i = r.find(e => "timeZoneName" === e.type);
                    return null !== (e = null == i ? void 0 : i.value) && void 0 !== e ? e : ""
                },
                validateSaleHasAllowlist = e => {
                    let {
                        sale: l,
                        totalUsers: t
                    } = e;
                    return !!t && t > 0 || (null == l ? void 0 : l.collectorsOfArtists.allCollaboratingArtists) || (null == l ? void 0 : l.collectorsOfArtists.selectedArtistIds.length) || (null == l ? void 0 : l.collectorsOfArtists.allArtistCollectors) || (null == l ? void 0 : l.collectorsOfReleases.allArtistCollaborations) || (null == l ? void 0 : l.collectorsOfReleases.selectedReleaseIds.length)
                },
                J = 1,
                getTimingErrorMessage = e => {
                    let {
                        nextMint: l
                    } = e;
                    return `Must be before ${l} mint`
                },
                getDateTimeErrors = e => {
                    let {
                        startTime: l,
                        endTime: t,
                        type: r
                    } = e, i = "presale" === r, s = {};
                    return null == l && (i ? s.presale = {
                        error: R.XO.presaleStartTime.required_error,
                        path: "presaleStartTime"
                    } : s.public = {
                        error: R.XO.publicStartTime.required_error,
                        path: "publicStartTime"
                    }), null == t && (i ? s.presale = {
                        error: R.XO.presaleEndTime.required_error,
                        path: "presaleEndTime"
                    } : s.public = {
                        error: R.XO.publicEndTime.required_error,
                        path: "publicEndTime"
                    }), null != l && null != t && t < l && (i ? s.presale = {
                        error: "End time must be after start time",
                        path: "presaleEndTime"
                    } : s.public = {
                        error: "End time must be after start time",
                        path: "publicEndTime"
                    }), s
                },
                getDateTimeErrorsV2 = e => {
                    let {
                        startTime: l,
                        endTime: t,
                        type: r,
                        auctionType: i
                    } = e, s = "presale" === r, n = i === m.cR.OPEN_EDITION ? "publicCutoffTime" : "publicEndTime", a = {};
                    return null == l && (s ? a.presale = {
                        error: M.X.presaleStartTime.required_error,
                        path: "presaleStartTime"
                    } : a.public = {
                        error: M.X.publicStartTime.required_error,
                        path: "publicStartTime"
                    }), null == t && (s ? a.presale = {
                        error: M.X.presaleEndTime.required_error,
                        path: "presaleEndTime"
                    } : a.public = {
                        error: M.X[n].required_error,
                        path: n
                    }), null != l && null != t && t < l && (s ? a.presale = {
                        error: "End time must be after start time",
                        path: "presaleEndTime"
                    } : a.public = {
                        error: "End time must be after start time",
                        path: n
                    }), a
                },
                getTimingErrors = e => {
                    let {
                        presaleStartTime: l,
                        publicStartTime: t
                    } = e, r = {};
                    return null == l || l.setMilliseconds(0), null == t || t.setMilliseconds(0), null != t && l && l > t && (r.presale = getTimingErrorMessage({
                        nextMint: "public"
                    })), r
                },
                isPriceZero = e => "number" == typeof e && 0 === e || "string" == typeof e && 0 === Number(e),
                getEditDropFormattedData = e => {
                    let {
                        mintSchedules: l,
                        persistedSaleSchedules: t,
                        contractAddress: r
                    } = e;
                    return l.map((e, l) => {
                        let i = t ? t[l] : void 0,
                            s = i ? i.price : (0, d.d)(e.price),
                            n = i ? i.startTimeSeconds : e.startTime,
                            a = i ? i.maxMintable : "MerkleDrop" === e.mintType ? e.maxMintable : e.maxMintableUpper,
                            o = i ? i.maxMintablePerAccount : e.maxMintablePerAccount,
                            u = {
                                editionAddress: r,
                                mintId: e.mintId,
                                minterAddress: e.minterAddress,
                                price: s,
                                startTimeSeconds: n,
                                maxMintable: a,
                                maxMintablePerAccount: o
                            };
                        return "RangeEdition" === e.mintType ? { ...u,
                            cutoffTimeSeconds: i && "RangeEdition" === i.mintType ? i.cutoffTimeSeconds : e.cutoffTime,
                            mintType: "RangeEdition"
                        } : { ...u,
                            mintType: "MerkleDrop",
                            endTimeSeconds: i && "MerkleDrop" === i.mintType ? i.endTimeSeconds : e.endTime
                        }
                    })
                },
                isPastDate = e => {
                    let l = "number" == typeof e ? (0, s.Z)(e).getTime() : e.getTime();
                    return l <= Date.now()
                };

            function getMaxMintablePerAccountForSaleSchedule(e) {
                let {
                    auctionType: l,
                    updatedBasePrice: t,
                    updatedMaxMintablePerAccount: r
                } = e;
                return 0 n === t ? J : l === A.IIw.OpenEdition || l === A.IIw.OpenEditionWithSam ? g.d2[0] : r
            }

            function roundToNearest30Minutes(e) {
                let l = e.getMinutes();
                return l < 30 ? (0, i.default)(e, 30 - l) : l > 30 ? (0, i.default)(e, 60 - l) : e
            }

            function addZeroBeforeNumber(e) {
                let l = parseInt(e, 10);
                return l < 10 && 1 === e.length ? "0" + l : e
            }

            function isDefined(e) {
                return null != e
            }

            function isParseableNumeric(e) {
                return "string" == typeof e && "" !== e || "number" == typeof e
            }

            function parseDaysToWeeks(e) {
                let l = Math.floor(e / 7);
                return 0 == e % 7 ? `in ${l} ${(0,y.Lo)({count:l,word:"week"})}` : `${e} ${(0,y.Lo)({count:e,word:"day"})}`
            }
            let scrollToError = () => {
                    let e = document.querySelector(".error");
                    e && e.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    })
                },
                newCleanDate = e => {
                    let l = null != e ? e : new Date;
                    return l.setSeconds(0), l.setMilliseconds(0), l
                },
                getAllowlistPlaceholderText = e => `Collectors of selected ${e.toLowerCase()}`,
                getAllowlistSearchPlaceholderText = e => `Search ${e.toLowerCase()} on Sound`,
                clearAllLocalData = async e => {
                    let {
                        contractAddress: l,
                        releaseId: t
                    } = e;
                    (0, D.vd)(), (0, F.lh)(), S.m5.fields = {
                        editedSaleSchedules: {
                            [l]: []
                        },
                        allowlists: {
                            [t]: []
                        }
                    }, await Promise.all([(0, q.rt)({
                        releaseId: t
                    }).clear(), (0, k.ac)({
                        releaseId: t
                    }).clear(), S.yW.clear()])
                },
                getDurationTooltip = e => {
                    let l = "";
                    return e.length > 1 ? l = ` We recommend ${e[0]} or ${e[1]} days.` : 1 === e.length && "number" == typeof e[0] && (l = ` We recommend ${(0,y.Lo)({word:"day",count:e[0]})}.`), `Set the duration for your public sale, or specify an end time.${l}`
                },
                setEditAuctionConfigPublicSaleField = e => {
                    let {
                        contractAddress: l,
                        field: t,
                        value: r
                    } = e, i = (0, b.CC)(S.m5.fields.editedSaleSchedules[l], e => "RangeEdition" === e.mintType && e);
                    i && (i[t] = r, (0, C.C)())
                },
                setEditAuctionConfigPresaleField = e => {
                    let {
                        contractAddress: l,
                        field: t,
                        value: r
                    } = e, i = (0, b.CC)(S.m5.fields.editedSaleSchedules[l], e => "MerkleDrop" === e.mintType && e);
                    i && (i[t] = r, (0, C.C)())
                };

            function containsDecimal(e) {
                return "number" == typeof e && e % 1 != 0 || "string" == typeof e && e.includes(".") || "string" == typeof e && e.includes(",")
            }

            function transformStringInteger(e) {
                if (!isParseableNumeric(e)) return null;
                let l = parseInt(e.toString());
                return (0, a.Z)(l) && !isNaN(l) ? l : null
            }

            function transformStringFloat(e) {
                if (!isParseableNumeric(e)) return null;
                let l = parseFloat(e.toString());
                return (0, a.Z)(l) && !isNaN(l) ? l : null
            }
        },
        27836: function(e, l, t) {
            t.d(l, {
                M: function() {
                    return useDraftData
                }
            });
            var r = t(96301),
                i = t(3928),
                s = t(99808);

            function useDraftData(e) {
                let {
                    draftId: l,
                    disabled: t = !1
                } = e, {
                    isAuthenticatedWithAPI: n
                } = (0, r.aC)(), {
                    data: a,
                    isInitialLoading: o
                } = (0, i.aM2)(i.bUQ, {
                    variables: !!l && l !== s.Zw && {
                        draftId: l
                    },
                    enabled: n && !t,
                    cacheTime: 0,
                    staleTime: 0
                });
                return {
                    draft: null == a ? void 0 : a.data.draft,
                    loading: o
                }
            }
        },
        68865: function(e, l, t) {
            t.d(l, {
                l: function() {
                    return r
                }
            });
            let r = {
                tokenSymbol: 8,
                description: 280,
                behindTheMusic: 6e3,
                manuallyAddedDescription: 144,
                rewardTitle: 60,
                rewardDescription: 300,
                lyrics: 6e3
            }
        },
        64306: function(e, l, t) {
            t.d(l, {
                E: function() {
                    return s
                },
                X: function() {
                    return n
                }
            });
            var r = t(80834),
                i = t(4131);
            let s = r.z.object({
                spotifyAlbumUri: r.z.string().nullish(),
                maxMintable: r.z.string().nullish(),
                maxQuantity: r.z.string().nullish(),
                minQuantity: r.z.string().nullish(),
                presaleMaxMintsPerWallet: r.z.string().nullish(),
                presaleMaxSupply: r.z.string().nullish(),
                presalePricePerMint: r.z.string().nullish(),
                publicMaxMintsPerWallet: r.z.string().nullish(),
                publicPricePerMint: r.z.string().nullish(),
                presaleStartTime: r.z.string().nullish(),
                publicStartTime: r.z.string().nullish(),
                presaleEndTime: r.z.string().nullish(),
                publicEndTime: r.z.string().nullish(),
                publicCutoffTime: r.z.string().nullish(),
                presaleAllowList: r.z.object({
                    description: r.z.string().nullish(),
                    addresses: r.z.string().nullish()
                })
            });
            s.keyof().options;
            let n = {
                publicPricePerMint: {
                    required_error: "Public price per mint is required"
                },
                presalePricePerMint: {
                    required_error: "Presale price per mint is required"
                },
                presaleEndTime: {
                    required_error: "Presale end time is required"
                },
                publicEndTime: {
                    required_error: "Public end time is required"
                },
                publicCutoffTime: {
                    required_error: "Public cut-off time is required"
                },
                publicStartTime: {
                    required_error: "Public start time is required",
                    past_date: "Public start time is in the past"
                },
                presaleStartTime: {
                    required_error: "Presale start time is required",
                    past_date: "Presale start time is in the past"
                },
                maxMintable: {
                    required_error: "Total mint supply is required"
                },
                presaleMaxSupply: {
                    required_error: "Presale max supply is required"
                },
                publicMaxMintsPerWallet: {
                    required_error: "Max mints per wallet is required"
                },
                presaleMaxMintsPerWallet: {
                    required_error: "Max mints per wallet is required"
                },
                maxQuantity: {
                    required_error: "Max quantity is required"
                },
                minQuantity: {
                    required_error: "Min quantity is required"
                },
                presaleAllowList: {
                    description_too_long: `Description must be fewer than ${i.lr.presaleAllowList.description} characters`,
                    required_error: "Add one address or select collectors in the dropdown above to enable presale"
                },
                spotifyAlbumUri: {
                    required_error: "Spotify Album URI is required",
                    invalid: "This URI is invalid"
                }
            }
        },
        4131: function(e, l, t) {
            t.d(l, {
                A7: function() {
                    return g
                },
                Bs: function() {
                    return y
                },
                C0: function() {
                    return I
                },
                F0: function() {
                    return x
                },
                Fq: function() {
                    return w
                },
                IT: function() {
                    return h
                },
                J: function() {
                    return p
                },
                Lj: function() {
                    return F
                },
                P5: function() {
                    return S
                },
                PN: function() {
                    return R
                },
                WJ: function() {
                    return A
                },
                _5: function() {
                    return T
                },
                _c: function() {
                    return M
                },
                bC: function() {
                    return getSoundContractAddressesConstants
                },
                cR: function() {
                    return s
                },
                d7: function() {
                    return C
                },
                dV: function() {
                    return n
                },
                gs: function() {
                    return P
                },
                i4: function() {
                    return z
                },
                jF: function() {
                    return O
                },
                lr: function() {
                    return m
                },
                lu: function() {
                    return f
                },
                tq: function() {
                    return _
                },
                vu: function() {
                    return q
                },
                wX: function() {
                    return E
                },
                xL: function() {
                    return b
                },
                xv: function() {
                    return v
                },
                zF: function() {
                    return c
                }
            });
            var r, i, s, n, a = t(82443),
                o = t(47226),
                u = t(60381),
                d = t(64571);
            let c = "New Release",
                m = {
                    presaleAllowList: {
                        description: 144
                    }
                },
                p = `Price must be fewer than ${d.Z3+1} decimals`;
            (r = s || (s = {})).OPEN_EDITION = "OPEN_EDITION", r.FIXED_QUANTITY = "FIXED_QUANTITY";
            let f = {
                RELEASES: "RELEASES",
                ARTISTS: "ARTISTS"
            };
            (i = n || (n = {})).AUTHORED_RELEASE = "AUTHORED_RELEASE", i.COLLAB_RELEASE = "COLLAB_RELEASE", i.RELEASE = "RELEASE", i.ARTIST = "ARTIST", i.ARTIST_COLLECTORS = "ARTIST_COLLECTORS";
            let g = {
                    SINGLE: "SINGLE",
                    ALL: "ALL"
                },
                b = {
                    ARTIST_SEARCH: "ARTIST_SEARCH",
                    ARTIST_SELECTED: "ARTIST_SELECTED",
                    RELEASE_SEARCH: "RELEASE_SEARCH",
                    RELEASE_SELECTED: "RELEASE_SELECTED",
                    RELEASE_PAGINATED: "RELEASE_PAGINATED"
                },
                v = {
                    FINAL: 800,
                    REVIEW: 96,
                    SELECTOR: 158
                },
                I = "Give specific collectors early access and/or special pricing.",
                A = "Unlimited and open forever, available when Limited Edition public sale starts. Audio not included. ",
                h = "A Limited Edition gives collectors priority seating and exclusive badging. You set price and quantity/duration in the drop configuration section.",
                T = "A special 1-of-1 artwork that is randomly rewarded to a Limited Edition collector after the sale ends. The winner’s artwork is then upgraded to this Golden Egg Edition.",
                E = "Upload your song, artwork, and add your song info, which will be displayed on your release page.",
                z = "Add collaborators to distribute earnings based on splits. All collaborators can withdraw shares on Sound.xyz with their wallet.",
                y = "edition-cover-ga-to-generation",
                M = "edition-cover-golden-egg-to-generation",
                S = "Limited Edition",
                P = "Golden Egg Edition",
                w = "Free Edition",
                C = "Spotify Presaves",
                R = "Collectors can pre-save your song on Spotify to earn a Free Edition and listen to your song before it comes out.",
                _ = "You won't earn an Artist Fee on editions earned through pre-saves, as it's completely free to your fans. After the song is released, you'll earn an Artist Fee on all editions collected.",
                O = "Your start time must be the same date of your Spotify release.",
                x = "Spotify Presaves are only enabled for Base or Optimism. Disable it to continue on Ethereum.",
                q = "This cover can be edited in the Release Info step",
                D = a.L3 ? (0, u.HJ)("OPTIMISM") : (0, u.HJ)("OPTIMISM_SEPOLIA"),
                N = a.L3 ? (0, u.HJ)("MAINNET") : (0, u.HJ)("SEPOLIA"),
                k = a.L3 ? (0, u.HJ)("BASE") : (0, u.HJ)("BASE_SEPOLIA");

            function getSoundContractAddressesConstants(e) {
                switch (e) {
                    case o.Wr.SEPOLIA:
                    case o.Wr.MAINNET:
                        return N;
                    case o.Wr.OPTIMISM_SEPOLIA:
                    case o.Wr.OPTIMISM:
                        return D;
                    case o.Wr.BASE:
                    case o.Wr.BASE_SEPOLIA:
                        return k;
                    default:
                        throw Error(`Invalid chainId ${e}`)
                }
            }
            let F = a.L3 ? "0x00005fF8b061293B72E0F49C7eBc066d19e162ad" : "0xaffdb2b2087b556e55b2a913e96d834ee9363748"
        },
        96440: function(e, l, t) {
            t.d(l, {
                p: function() {
                    return useEditionInfo
                }
            });
            var r = t(18782),
                i = t(73958),
                s = t(62865),
                n = t(25533),
                a = t(70931);

            function useEditionInfo(e, l) {
                var t;
                let {
                    editionAddress: o,
                    chainId: u,
                    auctionContractType: d
                } = e, {
                    provider: c
                } = (0, n.useChainProvider)(), m = (0, r.a)({
                    queryKey: [a.w, "edition-info", o, u.toString()],
                    queryFn: () => ((0, s.HR)(o), (0, i.G)(c(u), {
                        editionAddress: o
                    })),
                    ...l,
                    enabled: (null === (t = null == l ? void 0 : l.enabled) || void 0 === t || t) && "EDITION" === d
                });
                return m
            }
        }
    }
]);