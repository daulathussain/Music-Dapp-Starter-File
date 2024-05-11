"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3924, 925], {
        31511: function(e, t, n) {
            n.d(t, {
                VN: function() {
                    return getFields
                },
                V_: function() {
                    return useChannelSettingsPath
                },
                mZ: function() {
                    return r
                },
                og: function() {
                    return useChannelsEnabled
                }
            });
            var i = n(78608),
                l = n(3928),
                a = n(85846);
            let r = `1. Only posts relevant to the channel${a.A_}2. No self-promotion${a.A_}3. No spamming${a.A_}4. Be kind and civil — no hate speech`;

            function getFields(e) {
                var t, n, i;
                let {
                    channel: a,
                    channelCurators: o
                } = e;
                return {
                    name: a.name,
                    slug: a.nameSlug,
                    description: a.description,
                    rules: (null === (t = a.rules) || void 0 === t ? void 0 : t.trim()) || r,
                    coverImage: (null === (n = a.coverImage) || void 0 === n ? void 0 : n.id) ? {
                        cdnUrl: a.coverImage.url,
                        mediaType: l.DDH.ChannelCoverImage,
                        uploadKey: a.coverImage.key
                    } : null,
                    profileImage: (null === (i = a.profileImage) || void 0 === i ? void 0 : i.id) ? {
                        cdnUrl: a.profileImage.url,
                        mediaType: l.DDH.ChannelProfileImage,
                        uploadKey: a.profileImage.key
                    } : null,
                    moderators: o.filter(e => "MODERATOR" === e.role).flatMap(e => {
                        var t;
                        let {
                            user: n,
                            role: i
                        } = e;
                        return {
                            id: n.id,
                            role: i,
                            avatarUri: null === (t = n.avatar) || void 0 === t ? void 0 : t.url,
                            publicAddress: n.publicAddress,
                            webappUri: n.artist ? n.artist.webappUri : n.webappUri,
                            displayName: n.artist ? n.artist.name : n.displayName,
                            isArtist: !!n.artist
                        }
                    }),
                    telegramUrl: a.telegramUrl,
                    tiktokUrl: a.tiktokUrl,
                    twitterUrl: a.twitterUrl,
                    websiteUrl: a.websiteUrl,
                    discordUrl: a.discordUrl
                }
            }

            function useChannelSettingsPath(e) {
                return `/c/${e}/settings`
            }

            function useChannelsEnabled() {
                let {
                    value: e,
                    isLoading: t
                } = (0, i.useGate)(a.ln.CHANNELS);
                return {
                    enabled: e,
                    isLoading: t
                }
            }
        },
        54315: function(e, t, n) {
            n.d(t, {
                Cz: function() {
                    return r
                },
                NJ: function() {
                    return s
                },
                St: function() {
                    return d
                },
                cY: function() {
                    return a
                },
                gf: function() {
                    return o
                },
                kW: function() {
                    return isAtLeastOneHourInFuture
                },
                qQ: function() {
                    return u
                }
            });
            var i = n(80834),
                l = n(32263);
            let a = i.G0([i.Z_(), i.Rx()]).transform(e => {
                    let t = e.toString();
                    return t ? parseInt(t, 10) : null
                }).nullish(),
                r = i.Rx().nullish().or(i.Z_()),
                o = i.Rx().nullable(),
                s = i.Rx().optional(),
                u = i.hT().nullable(),
                c = l.vd.pipe(i.hT());

            function isAtLeastOneHourInFuture(e, t) {
                let n = e.getTime() - t.getTime();
                return n >= 36e5
            }
            c.nullable();
            let d = /spotify:album:[a-zA-Z0-9]+/
        },
        64343: function(e, t, n) {
            n.d(t, {
                Kg: function() {
                    return l
                },
                MC: function() {
                    return initialAuctionConfigurationFields
                },
                ax: function() {
                    return auctionConfigInitialState
                },
                f: function() {
                    return initialAuctionConfigurationErrors
                }
            });
            var i = n(4131);

            function initialAuctionConfigurationErrors() {
                return {
                    spotifyAlbumUri: null,
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
                    publicCutoffTime: null,
                    presaleAllowList: {
                        addresses: null,
                        description: null
                    }
                }
            }

            function initialAuctionConfigurationFields() {
                return {
                    auctionType: i.cR.OPEN_EDITION,
                    spotifyAlbumUri: null,
                    maxMintable: null,
                    maxQuantity: null,
                    minQuantity: null,
                    presaleMaxMintsPerWallet: null,
                    presaleMaxSupply: null,
                    presalePricePerMint: null,
                    presaleStartTime: null,
                    presaleEndTime: null,
                    publicEndTime: null,
                    publicCutoffTime: null,
                    publicMaxMintsPerWallet: null,
                    publicPricePerMint: null,
                    publicStartTime: null,
                    presaleAllowList: {
                        addresses: [],
                        description: null,
                        collectorsOfReleases: {
                            selectedReleaseIds: [],
                            allArtistCollaborations: !1
                        },
                        collectorsOfArtists: {
                            allArtistCollectors: !0,
                            selectedArtistIds: [],
                            allCollaboratingArtists: !1
                        }
                    }
                }
            }
            let l = {
                spotifyAlbumUri: !0,
                auctionType: !0,
                maxMintable: !0,
                maxQuantity: !0,
                minQuantity: !0,
                presaleMaxMintsPerWallet: !0,
                presaleMaxSupply: !0,
                presalePricePerMint: !0,
                presaleStartTime: !0,
                presaleEndTime: !0,
                publicEndTime: !0,
                publicCutoffTime: !0,
                publicMaxMintsPerWallet: !0,
                publicPricePerMint: !0,
                publicStartTime: !0,
                presaleAllowList: {
                    description: !0,
                    addresses: !0,
                    collectorsOfReleases: !0,
                    collectorsOfArtists: !0
                }
            };

            function auctionConfigInitialState() {
                return {
                    errors: initialAuctionConfigurationErrors(),
                    fields: initialAuctionConfigurationFields(),
                    mintQuantityLimit: {
                        minQuantity: void 0,
                        maxQuantity: void 0,
                        minPublicSaleMaxMintsPerWallet: void 0,
                        maxPublicSaleMaxMintsPerWallet: void 0,
                        minPresaleMaxMintsPerWallet: void 0,
                        maxPresaleMaxMintsPerWallet: void 0
                    },
                    priceLimit: {
                        presaleMaxPrice: void 0,
                        presaleMinPrice: void 0,
                        publicMaxPrice: void 0,
                        publicMinPrice: void 0
                    },
                    touched: {
                        spotifyAlbumUri: !1,
                        auctionType: !1,
                        maxMintable: !1,
                        maxQuantity: !1,
                        minQuantity: !1,
                        presaleMaxMintsPerWallet: !1,
                        presaleMaxSupply: !1,
                        presalePricePerMint: !1,
                        presaleStartTime: !1,
                        presaleEndTime: !1,
                        publicEndTime: !1,
                        publicCutoffTime: !1,
                        publicMaxMintsPerWallet: !1,
                        publicPricePerMint: !1,
                        publicStartTime: !1,
                        presaleAllowList: {
                            description: !1,
                            addresses: !1,
                            collectorsOfReleases: !1,
                            collectorsOfArtists: !1
                        }
                    },
                    hasPresaleMint: !1,
                    hasGAEdition: !0,
                    hasSpotifyPresave: !1,
                    isValid: !1
                }
            }
        },
        79225: function(e, t, n) {
            n.d(t, {
                CQ: function() {
                    return b
                },
                H$: function() {
                    return f
                },
                SL: function() {
                    return u
                },
                _p: function() {
                    return d
                },
                hg: function() {
                    return c
                },
                vQ: function() {
                    return s
                }
            });
            var i = n(80834),
                l = n(14906),
                a = n(4131),
                r = n(64306),
                o = n(54315);
            let s = i.z.object({
                    address: i.z.string(),
                    source: i.z.nativeEnum(l.y2)
                }),
                u = i.z.object({
                    allArtistCollaborations: i.z.boolean(),
                    selectedReleaseIds: i.z.array(i.z.string())
                }),
                c = i.z.object({
                    allArtistCollectors: i.z.boolean(),
                    allCollaboratingArtists: i.z.boolean(),
                    selectedArtistIds: i.z.array(i.z.string())
                }),
                d = i.z.object({
                    description: i.z.string().nullable(),
                    addresses: i.z.array(s),
                    collectorsOfReleases: u,
                    collectorsOfArtists: c
                }),
                f = i.z.object({
                    auctionType: i.z.nativeEnum(a.cR).default(a.cR.OPEN_EDITION),
                    spotifyAlbumUri: i.z.string().nullish(),
                    maxMintable: o.Cz,
                    maxQuantity: o.cY,
                    minQuantity: o.cY,
                    presaleMaxMintsPerWallet: o.Cz,
                    presaleMaxSupply: o.Cz,
                    presalePricePerMint: o.Cz,
                    presaleStartTime: i.z.date().nullable(),
                    presaleEndTime: i.z.date().nullable(),
                    publicEndTime: i.z.date().nullable(),
                    publicCutoffTime: i.z.date().nullable(),
                    publicMaxMintsPerWallet: o.Cz,
                    publicPricePerMint: o.Cz,
                    publicStartTime: i.z.date().nullable(),
                    presaleAllowList: d
                }),
                p = i.z.object({
                    publicMinPrice: i.z.number().optional(),
                    publicMaxPrice: i.z.number().optional(),
                    presaleMinPrice: i.z.number().optional(),
                    presaleMaxPrice: i.z.number().optional()
                }),
                h = i.z.object({
                    minQuantity: i.z.number().optional(),
                    maxQuantity: i.z.number().optional(),
                    minPublicSaleMaxMintsPerWallet: i.z.number().optional(),
                    maxPublicSaleMaxMintsPerWallet: i.z.number().optional(),
                    minPresaleMaxMintsPerWallet: i.z.number().optional(),
                    maxPresaleMaxMintsPerWallet: i.z.number().optional()
                }),
                m = i.z.object({
                    auctionType: i.z.boolean(),
                    spotifyAlbumUri: i.z.boolean(),
                    maxMintable: i.z.boolean(),
                    maxQuantity: i.z.boolean(),
                    minQuantity: i.z.boolean(),
                    presaleMaxMintsPerWallet: i.z.boolean(),
                    presaleMaxSupply: i.z.boolean(),
                    presalePricePerMint: i.z.boolean(),
                    presaleStartTime: i.z.boolean(),
                    presaleEndTime: i.z.boolean(),
                    publicEndTime: i.z.boolean(),
                    publicCutoffTime: i.z.boolean(),
                    publicMaxMintsPerWallet: i.z.boolean(),
                    publicPricePerMint: i.z.boolean(),
                    publicStartTime: i.z.boolean(),
                    presaleAllowList: i.z.object({
                        description: i.z.boolean(),
                        addresses: i.z.boolean(),
                        collectorsOfReleases: i.z.boolean(),
                        collectorsOfArtists: i.z.boolean()
                    })
                }),
                b = i.z.object({
                    fields: f,
                    touched: m,
                    errors: r.E,
                    hasPresaleMint: i.z.boolean(),
                    hasGAEdition: i.z.boolean(),
                    hasSpotifyPresave: i.z.boolean().nullish().transform(Boolean),
                    isValid: i.z.boolean(),
                    priceLimit: p,
                    mintQuantityLimit: h
                })
        },
        13686: function(e, t, n) {
            n.d(t, {
                X: function() {
                    return r
                },
                f: function() {
                    return a
                }
            });
            var i = n(80834),
                l = n(68865);
            let a = i.z.object({
                title: i.z.string().nullish(),
                tokenSymbol: i.z.string().nullish(),
                track: i.z.string().nullish(),
                coverImage: i.z.string().nullish(),
                genre: i.z.string().nullish(),
                behindTheMusic: i.z.string().nullish(),
                staticCoverImage: i.z.string().nullish(),
                beatsPerMinute: i.z.string().nullish(),
                key: i.z.string().nullish(),
                lyrics: i.z.string().nullish(),
                license: i.z.string().nullish(),
                location: i.z.string().nullish(),
                canCollectorsDownloadAudio: i.z.string().nullish(),
                curatorRewardsEnabled: i.z.string().nullish(),
                rewards: i.z.object({
                    title: i.z.string().nullish(),
                    description: i.z.string().max(l.l.rewardDescription).nullish()
                }).array(),
                editionCoverGa: i.z.string().nullish(),
                editionCoverGoldenEgg: i.z.string().nullish()
            });
            a.keyof().options;
            let r = {
                title: {
                    required_error: "Title is required",
                    pattern_error: "Title must contain at least one letter or number"
                },
                tokenSymbol: {
                    required_error: "Token symbol is required"
                },
                track: {
                    required_error: "Song file is required"
                },
                coverImage: {
                    required_error: "Song artwork is required"
                },
                genre: {
                    required_error: "Genre is required"
                },
                behindTheMusic: {
                    required_error: "Behind the music is required"
                },
                staticCoverImage: {
                    required_error: "Static artwork is required"
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
                rewards: {
                    missing_reward_field_title: "Title is required",
                    missing_reward_field_description: "Description is required",
                    reward_field_description_too_long: `Description must be fewer than ${l.l.rewardDescription} characters`,
                    reward_field_title_too_long: `Title must be fewer than ${l.l.rewardTitle} characters`
                },
                editionCoverGa: {
                    required_error: "Free Edition artwork is required"
                },
                editionCoverGoldenEgg: {
                    required_error: "Golden Egg is required"
                }
            }
        },
        26375: function(e, t, n) {
            function releaseInfoInitialState() {
                return {
                    errors: initialReleaseInfoErrors(),
                    fields: {
                        title: null,
                        tokenSymbol: null,
                        track: null,
                        coverImage: null,
                        canCollectorsDownloadAudio: !0,
                        curatorRewardsEnabled: !0,
                        rewards: [],
                        genre: null,
                        behindTheMusic: null,
                        staticCoverImage: null,
                        beatsPerMinute: null,
                        key: null,
                        lyrics: null,
                        license: null,
                        location: null,
                        editionCoverGa: null,
                        editionCoverGoldenEgg: null
                    },
                    touched: initialReleaseInfoTouchedFields(),
                    accordion: initialReleaseInfoAccordionState(),
                    isValid: !1
                }
            }

            function initialReleaseInfoAccordionState() {
                return {
                    value: null
                }
            }

            function initialReleaseInfoTouchedFields() {
                return {
                    title: !1,
                    tokenSymbol: !1,
                    track: !1,
                    coverImage: !1,
                    genre: !1,
                    behindTheMusic: !1,
                    staticCoverImage: !1,
                    beatsPerMinute: !1,
                    key: !1,
                    lyrics: !1,
                    license: !1,
                    location: !1,
                    canCollectorsDownloadAudio: !1,
                    curatorRewardsEnabled: !1,
                    rewards: [],
                    editionCoverGa: !1,
                    editionCoverGoldenEgg: !1
                }
            }
            n.d(t, {
                $I: function() {
                    return initialReleaseInfoErrors
                },
                SV: function() {
                    return initialReleaseInfoTouchedFields
                },
                lS: function() {
                    return initialReleaseInfoAccordionState
                },
                m1: function() {
                    return i
                },
                up: function() {
                    return releaseInfoInitialState
                }
            });
            let i = {
                title: !0,
                tokenSymbol: !0,
                track: !0,
                coverImage: !0,
                genre: !0,
                behindTheMusic: !0,
                staticCoverImage: !0,
                beatsPerMinute: !0,
                key: !0,
                lyrics: !0,
                license: !0,
                location: !0,
                canCollectorsDownloadAudio: !0,
                curatorRewardsEnabled: !0,
                rewards: [],
                editionCoverGa: !0,
                editionCoverGoldenEgg: !0
            };

            function initialReleaseInfoErrors() {
                return {
                    title: null,
                    tokenSymbol: null,
                    track: null,
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
                    rewards: [],
                    editionCoverGa: null,
                    editionCoverGoldenEgg: null
                }
            }
        },
        99660: function(e, t, n) {
            n.d(t, {
                PK: function() {
                    return s
                },
                UQ: function() {
                    return p
                },
                Vl: function() {
                    return u
                },
                dn: function() {
                    return d
                },
                eS: function() {
                    return c
                }
            });
            var i = n(80834),
                l = n(19716),
                a = n(68865),
                r = n(3928),
                o = n(13686);
            let s = i.z.object({
                    coverImage: l.a1.nullish().default(null),
                    duration: i.z.number(),
                    fileDetail: l.a1,
                    normalizedPeaks: i.z.array(i.z.number()).optional().default([]),
                    title: i.z.string()
                }),
                u = i.z.object({
                    mediaType: i.z.nativeEnum(r.DDH),
                    uploadKey: i.z.string(),
                    cdnUrl: i.z.string()
                }),
                c = i.z.object({
                    title: i.z.string().nullable(),
                    tokenSymbol: i.z.string().nullable(),
                    track: s.nullable(),
                    coverImage: u.nullable(),
                    staticCoverImage: u.nullable(),
                    editionCoverGa: u.nullable(),
                    editionCoverGoldenEgg: u.nullable(),
                    genre: i.z.string().nullable(),
                    behindTheMusic: i.z.string().nullable(),
                    beatsPerMinute: l.R7.nullish().default(null),
                    key: i.z.nativeEnum(r.Ybw).nullish().default(null),
                    lyrics: i.z.string().trim().nullish().default(null),
                    license: i.z.nativeEnum(r.oji).nullish().default(null),
                    location: i.z.string().nullish().default(null),
                    canCollectorsDownloadAudio: i.z.boolean().nullish(),
                    curatorRewardsEnabled: i.z.boolean().nullish(),
                    rewards: i.z.array(i.z.object({
                        title: i.z.string().trim(),
                        description: i.z.string().max(a.l.rewardDescription).trim()
                    })).nullish()
                }),
                d = i.z.object({
                    title: i.z.boolean(),
                    tokenSymbol: i.z.boolean(),
                    track: i.z.boolean(),
                    coverImage: i.z.boolean(),
                    staticCoverImage: i.z.boolean(),
                    editionCoverGa: i.z.boolean(),
                    editionCoverGoldenEgg: i.z.boolean(),
                    genre: i.z.boolean(),
                    behindTheMusic: i.z.boolean(),
                    beatsPerMinute: i.z.boolean(),
                    key: i.z.boolean(),
                    lyrics: i.z.boolean(),
                    license: i.z.boolean(),
                    location: i.z.boolean(),
                    canCollectorsDownloadAudio: i.z.boolean(),
                    curatorRewardsEnabled: i.z.boolean(),
                    rewards: i.z.object({
                        title: i.z.boolean(),
                        description: i.z.boolean()
                    }).array()
                }),
                f = i.z.object({
                    value: i.z.string().nullable()
                }),
                p = i.z.object({
                    fields: c,
                    touched: d,
                    accordion: f,
                    errors: o.f,
                    isValid: i.z.boolean()
                })
        },
        28553: function(e, t, n) {
            n.d(t, {
                N: function() {
                    return l
                }
            });
            var i = n(80834);
            let l = i.z.object({
                splits: i.z.string().nullish()
            })
        },
        59809: function(e, t, n) {
            function initialSplitsErrors() {
                return {
                    splits: null
                }
            }

            function initialSplitsTouchedFields() {
                return {
                    splits: !1
                }
            }

            function initialSplitsFields() {
                return {
                    splitContractAddress: null,
                    splits: []
                }
            }

            function splitsInitialState() {
                return {
                    errors: initialSplitsErrors(),
                    fields: initialSplitsFields(),
                    touched: initialSplitsTouchedFields(),
                    isValid: !1
                }
            }
            n.d(t, {
                JP: function() {
                    return splitsInitialState
                },
                Ry: function() {
                    return initialSplitsTouchedFields
                },
                TD: function() {
                    return initialSplitsFields
                },
                hy: function() {
                    return initialSplitsErrors
                }
            })
        },
        81368: function(e, t, n) {
            n.d(t, {
                Ie: function() {
                    return c
                },
                Ld: function() {
                    return u
                },
                P: function() {
                    return s
                },
                h6: function() {
                    return o
                },
                i5: function() {
                    return d
                }
            });
            var i = n(80834),
                l = n(9026),
                a = n(32263),
                r = n(28553);
            let o = i.IX(i.Ry({
                    label: i.Z_(),
                    value: i.Z_()
                })),
                s = i.Ry({
                    ownerAddress: i.Z_(),
                    percent: i.G0([i.Z_(), i.Rx()]),
                    roles: i.IX(i.jb(l.H))
                });
            s.keyof().options;
            let u = i.Ry({
                    splitContractAddress: a.WV.nullable(),
                    splits: i.IX(s)
                }),
                c = i.Ry({
                    splits: i.O7()
                }),
                d = i.Ry({
                    fields: u,
                    touched: c,
                    errors: r.N,
                    isValid: i.O7()
                })
        },
        44201: function(e, t, n) {
            n.d(t, {
                M: function() {
                    return uploadToolInitialPersistState
                },
                u: function() {
                    return uploadToolInitialState
                }
            });
            var i = n(64343),
                l = n(26375),
                a = n(59809);

            function uploadToolInitialState() {
                return {
                    id: "",
                    artistId: "",
                    currentStep: null,
                    isFirstStep: !1,
                    isLastStep: !1,
                    isProcessing: !1,
                    isSaving: !1,
                    lastCompletedStep: 1,
                    releaseInfo: (0, l.up)(),
                    splits: (0, a.JP)(),
                    auctionConfig: (0, i.ax)(),
                    transaction: null,
                    releaseId: null,
                    expectedContractAddress: null,
                    gelatoTaskId: null
                }
            }

            function uploadToolInitialPersistState() {
                return {
                    id: "",
                    artistId: "",
                    currentStep: null,
                    isFirstStep: !1,
                    isLastStep: !1,
                    isProcessing: !1,
                    isSaving: !1,
                    lastCompletedStep: 1,
                    releaseInfo: {
                        fields: (0, l.up)().fields
                    },
                    splits: {
                        fields: (0, a.JP)().fields
                    },
                    auctionConfig: {
                        fields: (0, i.ax)().fields,
                        hasPresaleMint: !1,
                        hasGAEdition: !0
                    },
                    transaction: null,
                    releaseId: null,
                    expectedContractAddress: null,
                    gelatoTaskId: null
                }
            }
        },
        41021: function(e, t, n) {
            n.d(t, {
                Jy: function() {
                    return d
                },
                L1: function() {
                    return UploadToolSchemaKey
                },
                Nk: function() {
                    return c
                },
                fE: function() {
                    return u
                }
            });
            var i = n(20886),
                l = n(52994),
                a = n(80834),
                r = n(79225),
                o = n(99660),
                s = n(81368);
            let u = a.Ry({
                    id: a.Z_(),
                    expectedContractAddress: a.Z_().refine(i.U).nullish(),
                    releaseId: a.Z_().nullable(),
                    transaction: a.Ry({
                        hash: a.Z_().refine(l.l, {
                            message: "Unexpected invalid transaction hash"
                        }),
                        chain: a.Rx()
                    }).nullable(),
                    gelatoTaskId: a.Z_().nullish(),
                    artistId: a.Z_(),
                    isSaving: a.O7(),
                    isProcessing: a.O7(),
                    currentStep: a.Rx().nullable(),
                    isLastStep: a.O7(),
                    isFirstStep: a.O7(),
                    lastCompletedStep: a.Rx(),
                    releaseInfo: o.UQ,
                    splits: s.i5,
                    auctionConfig: r.CQ
                }),
                c = u.extend({
                    releaseInfo: o.UQ.pick({
                        fields: !0
                    }),
                    splits: s.i5.pick({
                        fields: !0
                    }),
                    auctionConfig: r.CQ.pick({
                        fields: !0,
                        hasPresaleMint: !0,
                        hasGAEdition: !0,
                        hasSpotifyPresave: !0
                    })
                }),
                d = "upload-tool-draft-3.0";

            function UploadToolSchemaKey(e) {
                return `${d}-${e}`
            }
        },
        53514: function(e, t, n) {
            n.d(t, {
                $6: function() {
                    return useUploadTool
                },
                S3: function() {
                    return b
                },
                ic: function() {
                    return getUploadToolPersistence
                }
            });
            var i = n(97352),
                l = n(93077),
                a = n(71992),
                r = n.n(a),
                o = n(31265),
                s = n(52253),
                u = n(58658),
                c = n(30173),
                d = n(64398),
                f = n(58102),
                p = n(85846),
                h = n(44201),
                m = n(41021);
            let b = (0, o.sj)((0, h.u)());

            function getUploadToolPersistence(e) {
                let {
                    id: t
                } = e;
                return (0, f.U)({
                    schema: m.Nk,
                    key: (0, m.L1)(t),
                    eager: !0
                })
            }

            function useUploadTool(e) {
                let {
                    id: t
                } = e, {
                    authArtist: n
                } = (0, c.E)(), [a, o] = (0, i.useState)(!0), f = (0, d.S)();
                return (0, i.useEffect)(() => {
                    t && (0, s.xu)(t) && (null == n ? void 0 : n.id) && getPersisted();
                    async function getPersisted() {
                        if (t && (null == n ? void 0 : n.id)) try {
                            o(!0);
                            let e = await getUploadToolPersistence({
                                id: t
                            }).get();
                            if (!e) {
                                let e = `Draft with id ${t} does not exist.`;
                                f({
                                    action: u.A.RELEASE_UPLOAD_CREATE_DRAFT_FAILED,
                                    error: e,
                                    errorType: u.QS.LOCAL_STORAGE,
                                    message: e,
                                    level: "warning",
                                    isArtistOnlyPage: !0,
                                    pillar: u.Lj.UPLOAD_RELEASE
                                }), r().push(p.qy.Releases);
                                return
                            }
                            if (e.artistId !== n.id) {
                                let e = "Draft does not match artist.";
                                f({
                                    action: u.A.RELEASE_UPLOAD_CREATE_DRAFT_FAILED,
                                    error: e,
                                    errorType: u.QS.LOCAL_STORAGE,
                                    message: e,
                                    level: "warning",
                                    isArtistOnlyPage: !0,
                                    pillar: u.Lj.UPLOAD_RELEASE
                                }), r().replace(p.qy.Releases);
                                return
                            }
                            Object.assign(b, (0, l.Z)(b, e)), o(!1)
                        } catch (e) {
                            f({
                                action: u.A.RELEASE_UPLOAD_CREATE_DRAFT_FAILED,
                                error: e,
                                errorType: u.QS.LOCAL_STORAGE,
                                message: "Couldn't get/populate draft from local storage",
                                level: "fatal",
                                isArtistOnlyPage: !0,
                                pillar: u.Lj.UPLOAD_RELEASE
                            })
                        }
                    }
                }, [t, f, n]), {
                    loading: a,
                    state: b
                }
            }
        },
        14418: function(e, t, n) {
            n.d(t, {
                Au: function() {
                    return isArtistsBackedSort
                },
                Gr: function() {
                    return clearSortParams
                },
                an: function() {
                    return p
                },
                aw: function() {
                    return resetFilters
                },
                lJ: function() {
                    return isVolumeSort
                },
                oJ: function() {
                    return resetParams
                },
                pD: function() {
                    return useCurrentSearchTabsAndFilters
                },
                zL: function() {
                    return getSearchPageResults
                }
            });
            var i = n(71992),
                l = n.n(i),
                a = n(63558),
                r = n(14906),
                o = n(46702),
                s = n(49061),
                u = n(87243),
                c = n(60265),
                d = n(3928),
                f = n(51697);

            function getSearchPageResults(e) {
                let {
                    inputText: t,
                    useRouter: n = !1
                } = e, i = "" === t ? o.lP.SOUNDS : o.lP.ALL;
                if (n) {
                    let e = new URL("/search", window.location.href);
                    e.searchParams.set("q", t), l().push(e).then(() => {
                        c.M8.tab = i, c.M8.q = t, (0, s.r7)({
                            activeTab: i
                        }), (0, u.B)({
                            text: t
                        }), (0, s.c7)({
                            type: null
                        }), (0, s.ar)({
                            type: i
                        })
                    })
                } else c.M8.tab = i, c.M8.q = t, (0, s.r7)({
                    activeTab: i
                }), (0, u.B)({
                    text: t
                }), (0, s.c7)({
                    type: null
                }), (0, s.ar)({
                    type: i
                })
            }

            function useCurrentSearchTabsAndFilters() {
                let {
                    activeTab: e,
                    exploreType: t
                } = (0, a.R)(f.l), n = e === o.lP.ARTISTS, i = e === o.lP.SOUNDS, l = e === o.lP.PLAYLISTS, r = e === o.lP.COLLECTORS;
                return {
                    isArtistTab: n,
                    isSoundsTab: i,
                    isPlaylistsTab: l,
                    isCollectorsTab: r,
                    showAvailabilityFilter: t ? "sounds" === t : i,
                    showLocationFilter: t ? "sounds" === t || "artists" === t || "collectors" === t : i || n || r,
                    showGenreFilter: t ? "sounds" === t || "artists" === t || "playlists" === t : i || n || l
                }
            }
            let resetFilters = () => {
                    c.M8.search_location_label = null, c.M8.search_location_place_id = null, c.M8.genre = null, c.M8.search_availability = null
                },
                resetParams = () => {
                    c.M8.q = null, c.M8.tab = null
                },
                p = (0, r.ZN)(d.dEt),
                isVolumeSort = e => {
                    let {
                        sortType: t
                    } = e;
                    return "Volume (High to Low)" === t || "Volume" === t
                },
                isArtistsBackedSort = e => {
                    let {
                        sortType: t
                    } = e;
                    return "Artists Backed (High to Low)" === t || "Artists Backed" === t
                },
                clearSortParams = () => {
                    c.M8.total_minted = null, c.M8.created_at = null, c.M8.mint_start_time = null, c.M8.num_referral_purchases = null, c.M8.total_volume = null, c.M8.artists_backed = null, c.M8.nfts_count = null, c.M8.first_nft_collected_date = null
                }
        },
        46702: function(e, t, n) {
            n.d(t, {
                AL: function() {
                    return r
                },
                lP: function() {
                    return a
                },
                wV: function() {
                    return o
                }
            });
            var i = n(80834),
                l = n(14906);
            let a = {
                    ALL: "all",
                    SOUNDS: "sounds",
                    ARTISTS: "artists",
                    PLAYLISTS: "playlists",
                    COLLECTORS: "collectors"
                },
                r = {
                    SOUNDS: "sounds",
                    ARTISTS: "artists",
                    PLAYLISTS: "playlists",
                    COLLECTORS: "collectors",
                    UPCOMING_DROPS: "upcomingDrops",
                    RECENT_DROPS: "recentDrops"
                };
            i.z.object({
                activeTab: i.z.nativeEnum(a),
                exploreType: i.z.nativeEnum(r).nullable()
            });
            let o = (0, l.ZN)(a)
        },
        51697: function(e, t, n) {
            n.d(t, {
                l: function() {
                    return r
                }
            });
            var i = n(31265),
                l = n(60265),
                a = n(46702);
            let r = (0, i.sj)({
                activeTab: a.lP.SOUNDS,
                exploreType: l.M8.explore_type
            })
        },
        49061: function(e, t, n) {
            n.d(t, {
                Zd: function() {
                    return useSearchPageStore
                },
                ar: function() {
                    return setDefaultSort
                },
                c7: function() {
                    return setExploreType
                },
                r7: function() {
                    return setActiveTab
                }
            });
            var i = n(63558),
                l = n(82956),
                a = n(60265),
                r = n(3928),
                o = n(14418),
                s = n(46702),
                u = n(51697);

            function setActiveTab(e) {
                let {
                    activeTab: t
                } = e;
                u.l.activeTab = t
            }

            function setExploreType(e) {
                let {
                    type: t
                } = e;
                a.M8.explore_type = t, u.l.exploreType = t
            }

            function setDefaultSort(e) {
                let {
                    type: t
                } = e;
                (0, o.Gr)(), t === s.AL.PLAYLISTS ? a.M8.num_referral_purchases = r.Asd.Desc : a.M8.total_volume = r.Asd.Desc
            }(0, l.VW)(u.l, "activeTab", () => {
                null == u.l.activeTab && (a.M8.tab = s.lP.ALL, u.l.activeTab = s.lP.ALL)
            });
            let useSearchPageStore = () => {
                let e = (0, i.R)(u.l);
                return e
            }
        },
        72771: function(e, t, n) {
            n.d(t, {
                Q: function() {
                    return ChannelsSection
                }
            });
            var i = n(16356),
                l = n(97352),
                a = n(21597),
                r = n(55344),
                o = n(96301),
                s = n(3928),
                u = n(73950),
                c = n(76292),
                d = n(97946),
                f = n(85846),
                p = n(64571),
                h = n(95390);

            function ChannelSkeleton() {
                return (0, i.jsxs)("div", {
                    className: "mt-2 flex w-full items-center gap-2",
                    children: [(0, i.jsx)("div", {
                        className: "h-7 w-7 flex-shrink-0 flex-grow-0 animate-pulse rounded-md bg-neutral200"
                    }), (0, i.jsxs)("div", {
                        className: "flex w-full flex-col gap-[2px]",
                        children: [(0, i.jsx)("div", {
                            className: "h-3 w-2/3 animate-pulse rounded-md bg-neutral200"
                        }), (0, i.jsx)("div", {
                            className: "h-3 w-1/2 animate-pulse rounded-md bg-neutral200"
                        })]
                    })]
                })
            }

            function ChannelsSection() {
                let {
                    channels: e,
                    isEmpty: t,
                    isLoading: n
                } = function() {
                    var e;
                    let {
                        authUser: t
                    } = (0, o.aC)(), {
                        data: n,
                        isLoading: i,
                        error: a
                    } = (0, s.aM2)(s.jkh, {
                        staleTime: (0, r.Z)("5 minutes"),
                        filterQueryKey: {
                            authUserId: null == t ? void 0 : t.id
                        }
                    }), u = null !== (e = null == n ? void 0 : n.data.recommendedChannels) && void 0 !== e ? e : [], c = (0, l.useMemo)(() => 0 === u.length && !i && !a, [u.length, a, i]);
                    return {
                        channels: u,
                        isLoading: i,
                        isEmpty: c
                    }
                }();
                return t ? null : (0, i.jsxs)("div", {
                    className: "w-full",
                    children: [(0, i.jsx)("div", {
                        className: "mb-4 flex items-center justify-between",
                        children: (0, i.jsx)("span", {
                            className: "overflow-hidden text-ellipsis whitespace-nowrap font-base text-[12px] uppercase leading-[14px] text-base500",
                            children: "Channels"
                        })
                    }), n && (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(ChannelSkeleton, {}), (0, i.jsx)(ChannelSkeleton, {}), (0, i.jsx)(ChannelSkeleton, {})]
                    }), (0, i.jsx)("div", {
                        className: "mt-3 flex flex-col gap-4",
                        children: e.map(e => {
                            var t, n, l, r;
                            let {
                                channel: o,
                                memberCount: s,
                                hasNewContent: m
                            } = e, b = null !== (r = null !== (l = null === (t = o.staticProfileImage) || void 0 === t ? void 0 : t.url) && void 0 !== l ? l : null === (n = o.profileImage) || void 0 === n ? void 0 : n.url) && void 0 !== r ? r : "/images/sound_letter_s.svg", x = (0, h.OU)(o.webappUri);
                            return (0, i.jsx)(d.s, {
                                className: "w-full !pl-0",
                                pathnameUri: x,
                                children: (0, i.jsxs)("div", {
                                    className: "flex w-full items-center gap-2 transition-colors duration-500 hover:brightness-[80%]",
                                    children: [(0, i.jsxs)("div", {
                                        className: "relative h-7 w-7 flex-shrink-0 flex-grow-0 rounded-md",
                                        children: [(0, i.jsx)(u.G, {
                                            alt: "Channel Profile Image",
                                            src: b,
                                            width: 29,
                                            height: 29,
                                            placeholder: "blur",
                                            blurDataURL: (0, c.Z)(29, 29),
                                            className: "rounded-md object-cover"
                                        }), m && (0, i.jsx)("div", {
                                            className: "absolute -right-[4px] -top-[4px] inline-block h-[10px] w-[10px] rounded-full border-[2px] border-solid border-white bg-fuchsia500 align-super"
                                        })]
                                    }), (0, i.jsxs)("div", {
                                        className: "flex w-full flex-col gap-[2px]",
                                        children: [(0, i.jsx)("span", {
                                            className: "line-clamp-1 font-base text-base-s font-semibold text-base600",
                                            children: o.name
                                        }), (0, i.jsxs)("span", {
                                            className: "line-clamp-1 font-base text-[11px] leading-[100%] text-base400",
                                            children: [(0, a.ZP)(s), f.L_, (0, p.Lo)({
                                                count: s,
                                                word: "member"
                                            })]
                                        })]
                                    })]
                                })
                            }, o.id)
                        })
                    })]
                })
            }
        },
        5315: function(e, t, n) {
            n.r(t), n.d(t, {
                LEFT_NAV_WIDTH_COLLAPSED: function() {
                    return et
                },
                LEFT_NAV_WIDTH_FULL: function() {
                    return en
                },
                LeftNav: function() {
                    return LeftNav
                }
            });
            var i = n(16356),
                l = n(97352),
                a = n(24924),
                r = n.n(a),
                o = n(8205),
                s = n(84385),
                u = n(58430),
                c = n(64571),
                d = n(72102),
                f = n(49542),
                p = n(7816),
                h = n(31622),
                m = n(36981),
                b = n(31855),
                x = n(30957),
                g = n(83070),
                v = n(87355),
                C = n(60814),
                S = n(79162),
                y = n(51951),
                A = n(61499),
                w = n(31511),
                I = n(14418),
                M = n(49061),
                T = n(94050),
                E = n(43416);
            let SoundLogoV2 = e => (0, i.jsxs)("svg", {
                width: "48",
                height: "48",
                viewBox: "0 0 48 48",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ...e,
                children: [(0, i.jsxs)("g", {
                    clipPath: "url(#clip0_1966_83540)",
                    children: [(0, i.jsx)("rect", {
                        width: "48",
                        height: "48",
                        fill: "#0E1213"
                    }), (0, i.jsx)("rect", {
                        width: "49.1651",
                        height: "49.1651",
                        fill: "#0E1213"
                    }), (0, i.jsx)("g", {
                        clipPath: "url(#clip1_1966_83540)",
                        children: (0, i.jsx)("path", {
                            d: "M35.52 21.942C35.784 21.942 36 21.726 36 21.462V15.942C36 15.678 35.784 15.462 35.52 15.462H33.6C33.336 15.462 33.12 15.246 33.12 14.982V13.062C33.12 12.798 32.904 12.582 32.64 12.582H15.36C15.096 12.582 14.88 12.798 14.88 13.062V14.982C14.88 15.246 14.664 15.462 14.4 15.462H12.48C12.216 15.462 12 15.678 12 15.942V23.862C12 24.126 12.216 24.342 12.48 24.342H18.72C18.984 24.342 19.2 24.558 19.2 24.822V26.262C19.2 26.526 19.416 26.742 19.68 26.742H28.32C28.584 26.742 28.8 26.958 28.8 27.222V32.262C28.8 32.526 28.584 32.742 28.32 32.742H23.28C23.016 32.742 22.8 32.526 22.8 32.262V30.102C22.8 29.838 22.584 29.622 22.32 29.622H17.28C17.016 29.622 16.8 29.406 16.8 29.142V27.702C16.8 27.438 16.584 27.222 16.32 27.222H12.48C12.216 27.222 12 27.438 12 27.702V33.222C12 33.486 12.216 33.702 12.48 33.702H14.4C14.664 33.702 14.88 33.918 14.88 34.182V36.102C14.88 36.366 15.096 36.582 15.36 36.582H32.64C32.904 36.582 33.12 36.366 33.12 36.102V34.182C33.12 33.918 33.336 33.702 33.6 33.702H35.52C35.784 33.702 36 33.486 36 33.222V25.302C36 25.038 35.784 24.822 35.52 24.822H29.28C29.016 24.822 28.8 24.606 28.8 24.342V22.902C28.8 22.638 28.584 22.422 28.32 22.422H19.68C19.416 22.422 19.2 22.206 19.2 21.942V16.902C19.2 16.638 19.416 16.422 19.68 16.422H24.72C24.984 16.422 25.2 16.638 25.2 16.902V19.062C25.2 19.326 25.416 19.542 25.68 19.542H30.72C30.984 19.542 31.2 19.758 31.2 20.022V21.462C31.2 21.726 31.416 21.942 31.68 21.942H35.52Z",
                            fill: "white"
                        })
                    })]
                }), (0, i.jsxs)("defs", {
                    children: [(0, i.jsx)("clipPath", {
                        id: "clip0_1966_83540",
                        children: (0, i.jsx)("rect", {
                            width: "48",
                            height: "48",
                            rx: "24",
                            fill: "white"
                        })
                    }), (0, i.jsx)("clipPath", {
                        id: "clip1_1966_83540",
                        children: (0, i.jsx)("rect", {
                            width: "24",
                            height: "24",
                            fill: "white",
                            transform: "translate(12 12.583)"
                        })
                    })]
                })]
            });
            var L = n(85906),
                P = n(97946),
                z = n(96301),
                N = n(66676),
                R = n(85846),
                U = n(95390),
                j = n(72771),
                _ = n(71992),
                D = n.n(_),
                k = n(48610),
                O = n(59630),
                H = n(28968),
                F = n(56482),
                V = n(8094),
                q = n(43607),
                G = n(69598),
                $ = n(21922),
                W = n(21956),
                B = n(78608),
                Z = n(66361),
                Q = n(52931),
                Y = n(22181);
            let useCreatePost = e => {
                let {
                    onCreate: t
                } = e, {
                    isAuthenticatedWithAPI: n
                } = (0, z.aC)(), {
                    value: a
                } = (0, B.useGate)(R.ln.SPOTIFY_LINKS), {
                    openModal: r
                } = (0, Y.useModal)(), {
                    pathname: o
                } = (0, _.useRouter)(), s = o === R.qy.Home, u = s ? 0 : 1e3, c = (0, l.useCallback)(async () => {
                    if (n) D().push(R.qy.Home), setTimeout(() => {
                        r(Y.ModalType.FEED_POST, {
                            body: a ? (0, i.jsx)(Q.s, {
                                sourceLocation: "Feed Post Input",
                                selectedResource: null,
                                channelId: null,
                                channelSelectorDisabled: !1
                            }) : (0, i.jsx)(Z.t, {
                                sourceLocation: "Feed Post Input",
                                preselectedResource: null,
                                channelId: null
                            }, "post-input")
                        })
                    }, u), null == t || t();
                    else {
                        (0, W.SR)();
                        return
                    }
                }, [n, t, r, a, u]);
                return {
                    onCreatePostClick: c
                }
            };
            var K = n(42529),
                J = n(50925);
            let CreateItem = e => {
                    let {
                        icon: t,
                        label: n,
                        onClick: l,
                        loading: a
                    } = e;
                    return (0, i.jsxs)("div", {
                        className: "flex h-[38px] cursor-pointer items-center gap-1 rounded-full px-2 py-1 transition-colors duration-300 hover:bg-base100",
                        onClick: l,
                        children: [(0, i.jsx)("div", {
                            className: "flex h-7 w-7 flex-shrink-0 items-center justify-center [&_svg]:h-[20px]",
                            children: a ? (0, i.jsx)(q.$, {}) : (0, i.jsx)(d.G, {
                                icon: t,
                                className: "text-base800"
                            })
                        }), (0, i.jsx)("span", {
                            className: "font-title text-title-xs font-medium text-base800",
                            children: n
                        })]
                    })
                },
                CreateButton = e => {
                    let {
                        onlyIcon: t,
                        navRef: n
                    } = e, [a, r] = l.useState(!1), {
                        createDraft: o,
                        loading: s
                    } = (0, J.D)(), {
                        authUser: u,
                        isAuthenticatedWithAPI: c
                    } = (0, z.aC)(), p = !!(null == u ? void 0 : u.artist), closeDropdown = () => {
                        var e;
                        null == n || null === (e = n.current) || void 0 === e || e.classList.remove("create-open"), r(!1)
                    }, {
                        onCreatePostClick: h
                    } = useCreatePost({
                        onCreate: closeDropdown
                    }), m = (0, K.R)(() => {
                        if (c) D().push(R.qy.CreatePlaylist);
                        else {
                            (0, W.SR)();
                            return
                        }
                        closeDropdown()
                    }), onUploadClick = async () => {
                        p ? await o() : D().push(R.qy.ArtistApplication), closeDropdown()
                    };
                    return (0, i.jsxs)(V.h_, {
                        onOpenChange: e => {
                            var t, i;
                            e ? null == n || null === (t = n.current) || void 0 === t || t.classList.add("create-open") : null == n || null === (i = n.current) || void 0 === i || i.classList.remove("create-open"), r(e)
                        },
                        open: a,
                        children: [(0, i.jsx)(V.$F, {
                            className: "outline-0",
                            asChild: !0,
                            children: (0, i.jsxs)("div", {
                                children: [(0, i.jsx)("div", {
                                    className: (0, f.default)(t ? "hidden" : "flex", "pt-3"),
                                    children: (0, i.jsx)(G.z, {
                                        variant: "primary",
                                        label: "Create",
                                        leadingIcon: (0, i.jsx)(d.G, {
                                            icon: F.r8,
                                            className: (0, f.default)(a && "rotate-45 transform", !a && "rotate-0 transform", "transition-all duration-300")
                                        }),
                                        fullWidth: !0,
                                        className: "rounded-full"
                                    })
                                }), (0, i.jsx)("div", {
                                    className: (0, f.default)(t ? "flex" : "hidden", "pt-3"),
                                    children: (0, i.jsx)($.h, {
                                        icon: (0, i.jsx)("div", {
                                            className: "flex h-7 w-7 flex-shrink-0 items-center justify-center [&_svg]:h-[16px]",
                                            children: (0, i.jsx)(d.G, {
                                                icon: F.r8,
                                                className: (0, f.default)(a && "rotate-45 transform", !a && "rotate-0 transform", "text-white transition-all duration-300")
                                            })
                                        }),
                                        className: "rounded-full bg-base800"
                                    })
                                })]
                            })
                        }), (0, i.jsx)(V.AW, {
                            className: "z-feedPostFloatingButton w-52 rounded-xl border-0 p-4",
                            align: "center",
                            onFocusOutside: closeDropdown,
                            children: (0, i.jsxs)("div", {
                                className: "relative flex flex-col gap-2 rounded-xl bg-white",
                                children: [(0, i.jsx)(CreateItem, {
                                    label: "Create post",
                                    icon: H.Y,
                                    onClick: h
                                }), (0, i.jsx)(CreateItem, {
                                    label: "Create playlist",
                                    icon: O.zR,
                                    onClick: m
                                }), (0, i.jsx)(CreateItem, {
                                    label: "Upload sound",
                                    icon: k.PQ,
                                    onClick: onUploadClick,
                                    loading: s
                                })]
                            })
                        })]
                    })
                };
            var X = n(17178),
                ee = n(10270);
            let Header = e => {
                    var t;
                    let n, {
                            navRef: l
                        } = e,
                        {
                            hasUnreadNotifications: a
                        } = (0, E.I)(),
                        {
                            enabled: r
                        } = (0, w.og)(),
                        {
                            authUser: o,
                            isAuthenticatedWithAPI: s
                        } = (0, z.aC)(),
                        {
                            previousPath: u
                        } = (0, ee.n)(),
                        c = (0, X.q2)(),
                        {
                            onNotificationsClick: d,
                            onProfileClick: p,
                            isExploreActive: T,
                            isHomepageActive: _,
                            isNotificationActive: D,
                            isProfileActive: k,
                            isSearchActive: O,
                            isViralChartsActive: H
                        } = (0, N.H)(),
                        F = (0, U.OU)(null !== (t = null == o ? void 0 : o.webappUri) && void 0 !== t ? t : "");
                    switch (c) {
                        case X.Rd.DEFAULT:
                            n = (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsxs)("div", {
                                    className: "expanded-header hidden w-full flex-col gap-3 lt:flex",
                                    children: [(0, i.jsx)(LabelLink, {
                                        label: "Home",
                                        path: R.qy.Home,
                                        isActive: _,
                                        icon: _ ? y.J9 : x.J9
                                    }), (0, i.jsx)(LabelLink, {
                                        label: "Viral Sounds",
                                        path: R.qy.ViralChartsSounds,
                                        isActive: H,
                                        icon: H ? C.Wp : m.Wp
                                    }), (0, i.jsx)(LabelLink, {
                                        label: "Explore",
                                        path: R.qy.Explore,
                                        isActive: T,
                                        onClick: () => {
                                            (0, I.oJ)(), (0, I.aw)(), (0, M.c7)({
                                                type: null
                                            })
                                        },
                                        icon: T ? S.g4 : b.g4
                                    }), (0, i.jsx)(LabelLink, {
                                        label: "Notifications",
                                        path: R.qy.NotificationPage,
                                        isActive: D,
                                        icon: D ? v.qm : h.qm,
                                        showIndicator: a,
                                        onClick: d
                                    }), (0, i.jsx)(LabelLink, {
                                        label: "Profile",
                                        path: o ? (0, U.OU)(null == o ? void 0 : o.webappUri) : "",
                                        isActive: k,
                                        icon: k ? A.IL : g.IL,
                                        onClick: p
                                    }), s && (0, i.jsx)(CreateButton, {
                                        navRef: l
                                    }), r && (0, i.jsxs)(i.Fragment, {
                                        children: [(0, i.jsx)(L.i, {
                                            className: "!mb-3 mt-4"
                                        }), (0, i.jsx)(j.Q, {})]
                                    })]
                                }), (0, i.jsxs)("div", {
                                    className: "collapsed-header flex flex-col gap-3 lt:hidden",
                                    children: [(0, i.jsx)(IconLink, {
                                        path: R.qy.Home,
                                        icon: _ ? y.J9 : x.J9,
                                        isActive: _
                                    }), (0, i.jsx)(IconLink, {
                                        path: R.qy.ViralChartsSounds,
                                        icon: H ? C.Wp : m.Wp,
                                        isActive: H
                                    }), (0, i.jsx)(IconLink, {
                                        path: R.qy.Explore,
                                        icon: O ? S.g4 : b.g4,
                                        isActive: O
                                    }), (0, i.jsx)(IconLink, {
                                        path: R.qy.NotificationPage,
                                        icon: D ? v.qm : h.qm,
                                        showIndicator: a,
                                        onClick: d,
                                        isActive: D
                                    }), (0, i.jsx)(IconLink, {
                                        path: F,
                                        icon: k ? A.IL : g.IL,
                                        onClick: p,
                                        isActive: k
                                    }), s && (0, i.jsx)(CreateButton, {
                                        onlyIcon: !0
                                    })]
                                })]
                            });
                            break;
                        case X.Rd.DASHBOARD:
                            n = (0, i.jsx)(LabelWithArrowLink, {
                                pathnameUri: (0, U.OU)(u)
                            });
                            break;
                        case X.Rd.UPLOAD:
                        case X.Rd.EDIT_UPLOAD:
                            n = (0, i.jsx)(LabelWithArrowLink, {
                                pathnameUri: R.qy.Releases
                            });
                            break;
                        default:
                            return null
                    }
                    return (0, i.jsxs)("div", {
                        className: (0, f.default)("flex cursor-pointer flex-col gap-6 px-3 py-4 lt:px-4", c === X.Rd.UPLOAD && "lt:pb-1"),
                        children: [(0, i.jsx)(P.s, {
                            pathnameUri: "/",
                            className: "flex items-center gap-2",
                            children: (0, i.jsx)(SoundLogoV2, {
                                color: "black"
                            })
                        }), (0, i.jsx)("div", {
                            className: "flex flex-col items-center gap-1.5 lt:items-start",
                            children: n
                        })]
                    })
                },
                LabelLink = e => {
                    let {
                        label: t,
                        icon: n,
                        path: l,
                        onClick: a,
                        isActive: r,
                        showIndicator: o
                    } = e;
                    return (0, i.jsx)(P.s, {
                        pathnameUri: (0, U.OU)(l),
                        onClick: a,
                        className: "h-[46px] !pl-0",
                        children: (0, i.jsxs)("div", {
                            className: "-mx-2 flex items-center gap-4 rounded-full p-2 pl-4 transition-colors duration-300 hover:bg-base100",
                            children: [n && (0, i.jsxs)("div", {
                                className: "relative flex w-7 justify-center",
                                children: [o && (0, i.jsx)(T.z$, {
                                    className: "right-[1px] top-[-3px] h-2 w-2"
                                }), (0, i.jsx)("div", {
                                    className: "flex h-7 w-7 flex-shrink-0 items-center justify-center [&_svg]:h-[22px]",
                                    children: (0, i.jsx)(d.G, {
                                        icon: n,
                                        className: (0, f.default)(r ? "text-base900" : "text-base600")
                                    })
                                })]
                            }), (0, i.jsx)("span", {
                                className: (0, f.default)("flex items-center py-1 font-title text-title-m", r ? "font-semibold tracking-wide text-base900" : "font-medium text-base600"),
                                children: t
                            })]
                        })
                    })
                },
                LabelWithArrowLink = e => {
                    let {
                        pathnameUri: t
                    } = e;
                    return (0, i.jsxs)(P.s, {
                        pathnameUri: t,
                        className: (0, f.default)("label-with-arrow flex h-8 items-center gap-2 rounded-full text-base800 transition-colors duration-300 ease-in-out", "w-[calc(100%-8px)] justify-center !pl-0 hover:bg-base200 lt:w-[calc(100%-24px)] lt:justify-start"),
                        children: [(0, i.jsx)("div", {
                            className: "flex h-8 w-8 items-center justify-center",
                            children: (0, i.jsx)(d.G, {
                                icon: p.ac,
                                className: "text-[20px] lt:text-[16px]"
                            })
                        }), (0, i.jsx)("span", {
                            className: "hidden font-title text-title-m font-medium text-base800 lt:inline",
                            children: "Back"
                        })]
                    })
                },
                IconLink = e => {
                    let {
                        icon: t,
                        path: n,
                        showIndicator: l,
                        isActive: a,
                        onClick: r
                    } = e;
                    return (0, i.jsxs)(P.s, {
                        pathnameUri: (0, U.OU)(n),
                        onClick: r,
                        className: "relative flex h-[46px] items-center justify-center py-2",
                        children: [l && (0, i.jsx)(T.z$, {
                            className: "right-1 top-[5px] h-2 w-2"
                        }), (0, i.jsx)(d.G, {
                            size: "xl",
                            icon: t,
                            className: (0, f.default)(a ? "text-base900" : "text-base600")
                        })]
                    })
                },
                et = 52,
                en = 240,
                ei = r()(() => n.e(5217).then(n.bind(n, 55217)).then(e => e.DashboardSections), {
                    loadableGenerated: {
                        webpack: () => [55217]
                    }
                }),
                el = r()(() => Promise.all([n.e(9996), n.e(494), n.e(9259), n.e(3299), n.e(680), n.e(4231), n.e(1573), n.e(5865), n.e(7554), n.e(6090), n.e(3925), n.e(3292), n.e(8763), n.e(5642), n.e(2440), n.e(8749)]).then(n.bind(n, 18749)).then(e => e.EditUploadSection), {
                    loadableGenerated: {
                        webpack: () => [18749]
                    }
                }),
                ea = r()(() => Promise.all([n.e(9996), n.e(494), n.e(9259), n.e(3299), n.e(680), n.e(4231), n.e(1573), n.e(5865), n.e(7554), n.e(6090), n.e(3925), n.e(3292), n.e(8763), n.e(5642), n.e(2440), n.e(8004)]).then(n.bind(n, 58004)).then(e => e.UploadSection), {
                    loadableGenerated: {
                        webpack: () => [58004]
                    }
                }),
                LeftNav = () => {
                    let e = (0, X.q2)(),
                        t = l.useRef(null),
                        n = (0, l.useMemo)(() => {
                            switch (e) {
                                case "DASHBOARD":
                                    return (0, i.jsx)(ei, {});
                                case "UPLOAD":
                                    return (0, i.jsx)(ea, {});
                                case "EDIT_UPLOAD":
                                    return (0, i.jsx)(el, {});
                                case "HIDDEN":
                                case "DEFAULT":
                                    return null;
                                default:
                                    return (0, c.y0)(e), null
                            }
                        }, [e]);
                    return (0, i.jsxs)(er, {
                        ref: t,
                        children: [(0, i.jsx)(Header, {
                            navRef: t
                        }), n]
                    })
                },
                er = (0, o.zo)("div", {
                    backgroundColor: "$white",
                    lift: "secondary",
                    zIndex: "$leftNav",
                    position: "fixed",
                    left: 0,
                    top: 0,
                    width: et,
                    height: "100vh",
                    display: "none",
                    transition: "all 0.1s ease-in-out",
                    overflowY: "auto",
                    paddingBottom: `calc(${u.U}px + ${s.MINIMIZED_PLAYER_HEIGHT}px + env(safe-area-inset-bottom))`,
                    ".indicator": {
                        right: 5,
                        top: 6,
                        border: "0.75px solid $white"
                    },
                    "&.create-open": {
                        width: en,
                        ".expanded-header": {
                            display: "flex",
                            a: {
                                paddingLeft: 16,
                                justifyContent: "unset"
                            }
                        },
                        ".collapsed-header": {
                            display: "none"
                        }
                    },
                    "&:hover, &:active": {
                        width: en,
                        h3: {
                            visibility: "visible",
                            overflow: "visible",
                            width: "unset"
                        },
                        ".logo-container": {
                            alignSelf: "flex-start"
                        },
                        ".logo-with-label": {
                            display: "inline",
                            marginLeft: 20
                        },
                        ".logo": {
                            display: "none"
                        },
                        ".expanded-header": {
                            display: "flex",
                            a: {
                                paddingLeft: 16,
                                justifyContent: "unset"
                            }
                        },
                        ".collapsed-header": {
                            display: "none"
                        },
                        ".upcoming-header": {
                            visibility: "visible",
                            width: "100%",
                            overflow: "visible"
                        },
                        ".expanded-upcoming-row": {
                            visibility: "visible",
                            width: "100%",
                            overflow: "visible",
                            marginRight: 8
                        },
                        ".upcoming-row": {
                            img: {
                                marginRight: 8,
                                marginLeft: 8
                            }
                        },
                        ".upcoming-section-container": {
                            paddingX: 12
                        },
                        ".library-link, .library-button": {
                            justifyContent: "flex-start",
                            paddingLeft: 8
                        },
                        ".indicator": {
                            right: 8,
                            top: "unset",
                            border: "none"
                        },
                        ".playlist-section": {
                            visibility: "visible"
                        },
                        ".playlist-divider": {
                            visibility: "visible"
                        },
                        ".library-label": {
                            display: "inline"
                        },
                        ".label-with-arrow": {
                            justifyContent: "unset",
                            paddingLeft: 8,
                            span: {
                                display: "inline"
                            }
                        },
                        ".progress-bar": {
                            display: "flex"
                        },
                        ".stepName": {
                            display: "block"
                        },
                        ".upload-section": {
                            justifyContent: "flex-start",
                            paddingLeft: 20
                        },
                        ".edit-upload-container": {
                            display: "flex"
                        },
                        ".help-icon-button": {
                            display: "none"
                        },
                        ".help-button": {
                            display: "flex"
                        }
                    },
                    "@tablet": {
                        display: "flex",
                        flexDirection: "column"
                    },
                    "@laptop": {
                        width: en,
                        ".indicator": {
                            right: 8,
                            top: "unset",
                            border: "none"
                        }
                    }
                })
        },
        43416: function(e, t, n) {
            n.d(t, {
                I: function() {
                    return useUserNotificationStatus
                }
            });
            var i = n(97352),
                l = n(71992);
            n(96960);
            var a = n(96301),
                r = n(36750),
                o = n(3928),
                s = n(42529),
                u = n(85846),
                c = n(31265),
                d = n(63558),
                f = n(80834),
                p = n(82443),
                h = n(58102);
            let m = f.z.object({
                    lastReadTimestamp: f.z.number().optional()
                }),
                b = (0, c.sj)({
                    notificationStatus: {},
                    loading: !1
                }),
                useNotificationState = () => (0, d.R)(b),
                setNotificationStatusPersistence = e => {
                    let {
                        lastReadTimestamp: t
                    } = e;
                    b.notificationStatus.lastReadTimestamp = t
                },
                x = (0, h.U)({
                    schema: m,
                    key: `@soundxyz/notification-lastReadTimestamp-${"production"===p.Gv?"":"-"+p.Gv}-1.0`
                });
            x.initialValue.then(e => {
                if (b.loading = !0, !e) {
                    b.loading = !1;
                    return
                }
                Object.assign(b.notificationStatus, e), b.loading = !0
            }).catch(console.error);
            var g = n(19173);
            (0, r.c)({
                trigger: [o.$39, o.riO, o.AO8],
                refetch: [o.GwS]
            });
            let useUserNotificationStatus = () => {
                let {
                    isAuthenticatedWithAPI: e
                } = (0, a.aC)(), [t, n] = i.useState(!1), {
                    data: r,
                    isLoading: c,
                    refetch: d
                } = (0, o.aM2)(o.GwS, {
                    enabled: e,
                    onSuccess: e => {
                        let {
                            data: t
                        } = e;
                        n(t.userNotificationsStatus.hasUnreadNotifications)
                    },
                    ...u.gq
                }), {
                    asPath: f
                } = (0, l.useRouter)(), {
                    notificationStatus: p
                } = useNotificationState(), {
                    mutate: h,
                    isLoading: m
                } = (0, o.Dbo)(o.$39, {
                    onSuccess: e => {
                        let {
                            data: t
                        } = e, n = f.includes("/notifications");
                        t.markAllUserNotificationsRead.lastReadTimestamp && n && x.set({
                            lastReadTimestamp: t.markAllUserNotificationsRead.lastReadTimestamp
                        })
                    }
                }), b = null == r ? void 0 : r.data.userNotificationsStatus, v = i.useMemo(() => (null == b ? void 0 : b.lastReadTimestamp) ? b.lastReadTimestamp : null, [null == b ? void 0 : b.lastReadTimestamp]), C = i.useMemo(() => {
                    var e;
                    return null !== (e = p.lastReadTimestamp) && void 0 !== e ? e : v ? v - 10 : null
                }, [v, p.lastReadTimestamp]), S = (0, s.R)(() => {
                    h({}), d(), v && v !== C && setNotificationStatusPersistence({
                        lastReadTimestamp: v
                    })
                });
                return (0, g.S)({
                    onNewGlobalUserNotificationSubscribeData: () => {
                        d()
                    },
                    onNewUserNotificationSubscribeData: () => {
                        d()
                    }
                }), {
                    isLoading: c,
                    hasUnreadNotifications: t,
                    lastReadTimestamp: v,
                    previousTimestamp: C,
                    mutateNotificationStatus: h,
                    markNotificationsAsRead: S,
                    isMarkingNotificationsAsRead: m
                }
            }
        },
        19173: function(e, t, n) {
            n.d(t, {
                A: function() {
                    return useUserNotifications
                },
                S: function() {
                    return useUserNotificationSubscriptions
                }
            }), n(96960);
            var i = n(18873),
                l = n(96301),
                a = n(44397),
                r = n(3928),
                o = n(85846);

            function useUserNotifications() {
                let {
                    authUser: e
                } = (0, l.aC)(), t = null == e ? void 0 : e.id, {
                    orderedList: n,
                    isLoading: a,
                    isFetchingNextPage: s,
                    loadMoreNextPage: u,
                    hasNextPage: c = !1,
                    isInitialLoading: d,
                    refetch: f
                } = (0, r.NSZ)(r.hMK, {
                    getNextPageParam(e) {
                        let {
                            data: {
                                userNotifications: t
                            }
                        } = e;
                        return (null == t ? void 0 : t.pageInfo.hasNextPage) && {
                            after: t.pageInfo.endCursor
                        }
                    },
                    list(t) {
                        let {
                            userNotifications: n
                        } = t;
                        return null == n ? void 0 : n.edges.filter(t => {
                            let {
                                node: n
                            } = t;
                            if ("ViralPresave" === n.__typename) {
                                var l;
                                let {
                                    presaveRelease: t
                                } = (0, r.S3c)(r.RgD, n), a = !!t.mintStartTime && i.E.getUnixTime(new Date) >= t.mintStartTime, o = (null == e ? void 0 : null === (l = e.artist) || void 0 === l ? void 0 : l.id) === t.artist.id;
                                if (a || !t.spotifyPresaveCampaign || o) return !1
                            }
                            if ("PresaveDropStarted" === n.__typename) {
                                let {
                                    presaveRelease: e
                                } = (0, r.S3c)(r.T7w, n), t = !!e.mintStartTime && i.E.getUnixTime(new Date) >= e.mintStartTime;
                                if (t || !e.spotifyPresaveCampaign) return !1
                            }
                            if ("ReleasePresaved" === n.__typename) {
                                let {
                                    featuredUsers: e,
                                    numUsers: t
                                } = (0, r.S3c)(r.Tmg, n);
                                if (0 === t || e.length <= 0) return !1
                            }
                            return !0
                        }).map(e => {
                            let {
                                node: t
                            } = e;
                            return t
                        })
                    },
                    uniq(e) {
                        let {
                            id: t
                        } = e;
                        return t
                    },
                    filterQueryKey: {
                        authUserId: t
                    },
                    enabled: !!t,
                    variables(e) {
                        let {
                            pageParam: t
                        } = e, n = (null == t ? void 0 : t.after) || null;
                        return {
                            pagination: {
                                first: null == n ? 20 : 15,
                                after: n
                            }
                        }
                    },
                    refetchOnReconnect: !1,
                    refetchOnWindowFocus: !1,
                    ...o.gq
                });
                return {
                    data: n,
                    isLoading: a,
                    isInitialLoading: d,
                    isFetchingNextPage: s,
                    loadMore: u,
                    hasNextPage: c,
                    refetch: f
                }
            }

            function useUserNotificationSubscriptions(e) {
                let {
                    onNewGlobalUserNotificationSubscribeData: t,
                    onNewUserNotificationSubscribeData: n
                } = e, {
                    isAuthenticatedWithAPI: i
                } = (0, l.aC)();
                (0, a.mU)({
                    query: r.riO,
                    enabled: !!i,
                    onData: n
                }), (0, a.mU)({
                    query: r.AO8,
                    enabled: !!i,
                    onData: t
                })
            }
        },
        87243: function(e, t, n) {
            n.d(t, {
                B: function() {
                    return setSearchPageText
                },
                o: function() {
                    return useGlobalSearchBarInput
                }
            });
            var i, l, a, r = n(97352),
                o = n(22248),
                s = n(31265),
                u = n(63558),
                c = n(82956),
                d = n(27460),
                f = n(46702),
                p = n(49061),
                h = n(60265),
                m = n(42529);
            let b = (0, s.sj)({
                barRawInputText: null !== (i = h.M8.q) && void 0 !== i ? i : "",
                debouncedSearchText: null !== (l = h.M8.q) && void 0 !== l ? l : "",
                searchPageText: null !== (a = h.M8.q) && void 0 !== a ? a : "",
                hasHadFocus: !1,
                focus: !1
            });

            function setSearchPageText(e) {
                let {
                    text: t
                } = e;
                h.M8.q = t, b.searchPageText = t
            }

            function useGlobalSearchBarInput() {
                var e;
                let {
                    searchPageText: t,
                    barRawInputText: n,
                    focus: i,
                    debouncedSearchText: l,
                    hasHadFocus: a
                } = (0, u.R)(b, {
                    sync: !0
                }), s = (0, r.useMemo)(() => (0, o.Z)(e => {
                    let t = (0, d.P)(e);
                    t ? b.debouncedSearchText = t : b.debouncedSearchText = ""
                }, 300, {
                    trailing: !0,
                    leading: !1
                }), []), c = (0, m.R)(e => {
                    b.barRawInputText = e.target.value, s(e.target.value)
                }), x = !(null === (e = b.searchPageText) || void 0 === e ? void 0 : e.length), g = (0, m.R)(() => {
                    b.barRawInputText = "", b.debouncedSearchText = "", b.searchPageText = "", h.M8.q = null, (h.M8.tab === f.lP.ALL || null === h.M8.tab) && (h.M8.tab = f.lP.SOUNDS, (0, p.r7)({
                        activeTab: f.lP.SOUNDS
                    }))
                }), v = (0, m.R)(() => {
                    b.hasHadFocus = !0, b.focus = !0
                }), C = (0, m.R)(() => {
                    b.focus = !1
                });
                return {
                    isEmptyInputText: x,
                    barRawInputText: n,
                    searchPageText: t,
                    clearText: g,
                    handleInputChange: c,
                    focus: i,
                    focusOn: v,
                    focusOff: C,
                    debouncedSearchText: l,
                    hasHadFocus: a
                }
            }(0, c.VW)(h.M8, "q", () => {
                !h.M8.q && (b.barRawInputText = "", b.searchPageText = "", h.M8.tab && (h.M8.tab = f.lP.SOUNDS, (0, p.r7)({
                    activeTab: f.lP.SOUNDS
                })))
            }), (0, c.VW)(b, "searchPageText", () => {
                b.searchPageText ? (0, p.r7)({
                    activeTab: f.lP.ALL
                }) : (0, p.r7)({
                    activeTab: f.lP.SOUNDS
                })
            })
        },
        32678: function(e, t, n) {
            n.d(t, {
                M: function() {
                    return Center
                }
            });
            var i = n(16356);
            n(97352);
            var l = n(8205);

            function Center(e) {
                let {
                    children: t,
                    css: n,
                    isFullScreen: l = !1
                } = e;
                return (0, i.jsx)(a, {
                    css: n,
                    isFullScreen: l,
                    children: t
                })
            }
            let a = (0, l.zo)("div", {
                variants: {
                    isFullScreen: {
                        true: {
                            height: "100vh",
                            width: "100vw",
                            position: "fixed",
                            top: 0,
                            left: 0
                        }
                    }
                },
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            })
        },
        17820: function(e, t, n) {
            n.d(t, {
                S: function() {
                    return FullScreenLoading
                }
            });
            var i = n(16356);
            n(97352);
            var l = n(32678),
                a = n(43607);

            function FullScreenLoading() {
                return (0, i.jsx)(l.M, {
                    isFullScreen: !0,
                    children: (0, i.jsx)(a.$, {
                        type: "fullScreenLoading",
                        size: "xl"
                    })
                })
            }
        },
        58691: function(e, t, n) {
            n.r(t), n.d(t, {
                HIDDEN_FEATURE_BANNER_ROUTES: function() {
                    return k
                },
                HIDDEN_LAYOUT_ROUTES: function() {
                    return O
                },
                HIDDEN_MOBILE_BOTTOM_NAV_ROUTES: function() {
                    return D
                },
                Layout: function() {
                    return Layout
                }
            });
            var i = n(16356),
                l = n(97352),
                a = n(73534),
                r = n(24924),
                o = n.n(r),
                s = n(71992),
                u = n(66753),
                c = n(58658),
                d = n(8205),
                f = n(5315),
                p = n(17820),
                h = n(96301),
                m = n(26191),
                b = n(97946),
                x = n(21956),
                g = n(43158),
                v = n(77566),
                C = n(81688),
                S = n(267),
                y = n(8776),
                A = n(72777);
            let w = [{
                    key: " ",
                    callback: S.ID
                }, {
                    key: "r",
                    callback: y.fX
                }, {
                    key: "s",
                    callback: A.Ag
                }, {
                    key: "m",
                    callback: S.$t
                }, {
                    key: "ArrowRight",
                    option: !0,
                    callback: C.mP
                }, {
                    key: "ArrowLeft",
                    option: !0,
                    callback: C.be
                }, {
                    key: "ArrowUp",
                    option: !0,
                    callback: () => (0, S.Ep)(.1)
                }, {
                    key: "ArrowDown",
                    option: !0,
                    callback: () => (0, S.Ep)(-.1)
                }, {
                    key: "ArrowLeft",
                    option: !0,
                    shift: !0,
                    callback: () => (0, S.YU)(-5)
                }, {
                    key: "ArrowRight",
                    option: !0,
                    shift: !0,
                    callback: () => (0, S.YU)(5)
                }],
                I = ["INPUT", "TEXTAREA"],
                handleKey = e => {
                    let t = e.target;
                    if (!(I.includes(t.tagName) || t.attributes.getNamedItem("contenteditable"))) {
                        for (let {
                                key: t,
                                command: n,
                                control: i,
                                option: l,
                                shift: a,
                                callback: r
                            } of w)
                            if (e.key === t && !!n === e.metaKey && !!i === e.ctrlKey && !!l === e.altKey && !!a === e.shiftKey) {
                                e.stopPropagation(), r();
                                return
                            }
                    }
                },
                useKeyboardShortcuts = () => {
                    (0, l.useEffect)(() => (document.addEventListener("keydown", handleKey, !0), () => document.removeEventListener("keydown", handleKey, !0)))
                };
            var M = n(64398),
                T = n(22181),
                E = n(60265),
                L = n(42529),
                P = n(85846);
            let z = o()(() => n.e(3999).then(n.bind(n, 83999)).then(e => e.Footer), {
                    loadableGenerated: {
                        webpack: () => [83999]
                    }
                }),
                N = o()(() => Promise.resolve().then(n.bind(n, 5315)).then(e => e.LeftNav), {
                    loadableGenerated: {
                        webpack: () => [5315]
                    }
                }),
                R = o()(() => n.e(1069).then(n.bind(n, 91069)).then(e => e.MobileNav), {
                    loadableGenerated: {
                        webpack: () => [91069]
                    }
                }),
                U = o()(() => Promise.all([n.e(1226), n.e(2138)]).then(n.bind(n, 12138)).then(e => e.Header), {
                    loadableGenerated: {
                        webpack: () => [12138]
                    }
                }),
                j = o()(() => Promise.resolve().then(n.bind(n, 29823)).then(e => e.AudioPlayer), {
                    loadableGenerated: {
                        webpack: () => [29823]
                    },
                    ssr: !1
                }),
                _ = [{
                    path: "/playlist/[id]"
                }, {
                    path: "/playlist/new"
                }, {
                    path: "/playlist/[id]/edit"
                }, {
                    path: "/user/[publicAddress]/featured/edit"
                }, {
                    path: "/dashboard"
                }, {
                    path: "/dashboard/earnings"
                }, {
                    path: "/[soundHandle]/[releaseSlug]"
                }, {
                    path: "/signin"
                }, {
                    path: "/search"
                }, {
                    path: "/explore"
                }, {
                    path: "/c/[channelSlug]/settings"
                }, {
                    path: "/channels"
                }],
                D = [{
                    path: "/playlist/new"
                }, {
                    path: "/playlist/[id]/edit"
                }, {
                    path: "/user/[publicAddress]/featured/edit"
                }, {
                    path: "/dashboard"
                }, {
                    path: "/dashboard/earnings"
                }],
                k = [{
                    path: "/feed"
                }, {
                    path: "/dashboard"
                }, {
                    path: "/artist-application"
                }],
                O = new Set(["/spotify-callback"]),
                H = [{
                    path: "/[soundHandle]/post/[uuid]"
                }],
                Layout = e => {
                    let {
                        children: t,
                        ...n
                    } = e, {
                        isLoggingOut: a
                    } = (0, x.F_)(), r = (0, v.I)(), {
                        pathname: o
                    } = (0, s.useRouter)(), {
                        tablet: d
                    } = g.MediaQuery.useContainer();
                    useKeyboardShortcuts();
                    let f = (0, M.S)();
                    ! function() {
                        let {
                            pathname: e
                        } = (0, s.useRouter)(), {
                            isAuthenticatedWithAPI: t
                        } = (0, h.aC)();
                        (0, l.useEffect)(() => {
                            if (e) switch (e) {
                                case "/":
                                    m.F.title = t ? "For You" : "Home";
                                    break;
                                case "/feed":
                                    m.F.title = "Feed";
                                    break;
                                case "/explore":
                                case "/search":
                                    m.F.title = "Search";
                                    break;
                                case "/notifications":
                                    m.F.title = "Notifications";
                                    break;
                                case "/charts/viral/sounds":
                                    m.F.title = "Viral Sounds";
                                    break;
                                default:
                                    m.F.title = "Sound.xyz"
                            }
                        }, [t, e])
                    }(),
                    function() {
                        let {
                            openModal: e
                        } = (0, T.useModal)(), {
                            modal: t,
                            postCommentId: n,
                            parentPostCommentId: i
                        } = (0, E.UO)();
                        l.useEffect(() => {}, [t, e, i, n])
                    }();
                    let {
                        hideBottomMobileNav: b,
                        hideFooter: C,
                        hideTopMobileNav: S,
                        isReleasePreview: y,
                        mobileOverflowXInitial: A,
                        overflowXInitial: w,
                        hideLayout: I
                    } = (0, l.useMemo)(() => {
                        let e = O.has(o);
                        if (e) return {
                            hideLayout: e
                        };
                        let t = o.includes("/[soundHandle]/[releaseSlug]") || o.includes("/dashboard/earnings") || o.includes("/playlist/[id]") || o.includes("/notifications") || o.includes("/[soundHandle]/post/[uuid]") || o.includes("/feed") || o.includes("/"),
                            n = o.includes("/[soundHandle]/[releaseSlug]"),
                            i = o.includes("/step/[stepId]/preview") || o.includes("/step/[stepId]/edit/preview"),
                            l = [..._, {
                                path: "/"
                            }].some(e => o.includes(e.path)),
                            a = D.some(e => o.includes(e.path)),
                            r = H.some(e => o.includes(e.path));
                        return {
                            overflowXInitial: t,
                            mobileOverflowXInitial: n,
                            isReleasePreview: i,
                            hideFooter: l,
                            hideBottomMobileNav: a,
                            hideTopMobileNav: r,
                            hideLayout: e
                        }
                    }, [o]), P = (0, L.R)((e, t) => {
                        let {
                            componentStack: n
                        } = t;
                        f({
                            action: c.UN.GLOBAL_PAGE_CRASH,
                            error: e,
                            errorType: c.QS.UNKNOWN,
                            pillar: c.Lj.GLOBAL,
                            isArtistOnlyPage: !1,
                            message: "An error crashed the page",
                            level: "fatal",
                            indexedTags: {
                                pathname: o
                            },
                            unindexedExtra: {
                                componentStack: n
                            }
                        })
                    }), k = (0, i.jsx)(F, {
                        as: "main",
                        children: t
                    });
                    return I ? k : (0, i.jsxs)(i.Fragment, {
                        children: [(d || r) && (0, i.jsx)(N, {}), !b && (0, i.jsx)(R, {}), (0, i.jsx)(F, {
                            id: "layout",
                            withLeftNav: !y,
                            transition: {
                                duration: .5,
                                ease: "easeInOut"
                            },
                            css: {
                                overflowX: A ? "initial" : "hidden",
                                "@tablet": {
                                    overflowX: w ? "initial" : "hidden"
                                }
                            },
                            children: (0, i.jsxs)(u.SV, {
                                fallback: (0, i.jsx)(FallbackUI, {}),
                                onError: P,
                                children: [(0, i.jsx)(U, {
                                    hideMobileNav: S,
                                    showNewFeatureBanner: !1
                                }), a ? (0, i.jsx)(p.S, {}) : (0, i.jsxs)(i.Fragment, {
                                    children: [k, !C && (0, i.jsx)(z, { ...n
                                    })]
                                })]
                            })
                        }), (0, i.jsx)(j, {})]
                    })
                },
                F = (0, d.zo)(a.E.div, {
                    variants: {
                        withLeftNav: {
                            true: {
                                "@tablet": {
                                    marginLeft: f.LEFT_NAV_WIDTH_COLLAPSED
                                },
                                "@laptop": {
                                    marginLeft: f.LEFT_NAV_WIDTH_FULL
                                }
                            }
                        }
                    }
                }),
                FallbackUI = () => (0, i.jsx)("div", {
                    className: "flex min-h-screen w-full items-center justify-center bg-base200 px-4 pb-12 md:px-6 md:pb-16 2xl:max-w-content",
                    children: (0, i.jsxs)("div", {
                        className: "flex flex-col items-center justify-center gap-3 text-center md:gap-4",
                        children: [(0, i.jsx)("span", {
                            className: "text-title-xxl",
                            children: "\uD83E\uDEE4"
                        }), (0, i.jsx)("h1", {
                            className: "text-title-l font-semibold md:text-title-xl ",
                            children: "Something went wrong"
                        }), (0, i.jsxs)("div", {
                            className: "flex max-w-lg flex-col gap-y-4 font-base text-base-m text-base400 md:gap-y-5 md:text-base-l",
                            children: [(0, i.jsxs)("p", {
                                children: ["Oops! It seems we've hit a snag. ", (0, i.jsx)("br", {}), "Our team is already taking an action to untangle this."]
                            }), (0, i.jsxs)("p", {
                                children: ["While we're on it, why not try giving your browser a quick refresh? If the hiccup persists, we're just a\xa0", (0, i.jsx)(b.s, {
                                    absoluteUri: P.Bj.RequestHelp,
                                    className: "underline",
                                    type: "external",
                                    children: "click away for support."
                                })]
                            })]
                        })]
                    })
                })
        },
        30173: function(e, t, n) {
            n.d(t, {
                E: function() {
                    return useAuthArtist
                }
            });
            var i = n(97352);
            n(96960);
            var l = n(96301),
                a = n(3928),
                r = n(14531);

            function useAuthArtist() {
                var e, t;
                let {
                    authUser: n
                } = (0, l.aC)(), {
                    data: o,
                    isLoading: s,
                    refetch: u
                } = (0, a.aM2)(a.QhD, {
                    staleTime: 0
                }), c = (0, r.S)(), d = null == n ? void 0 : n.id, f = (null == o ? void 0 : null === (e = o.data.authUser) || void 0 === e ? void 0 : e.id) !== d;
                (0, i.useEffect)(() => {
                    d && f && !s && u().catch(e => {
                        c({
                            error: e
                        })
                    })
                }, [d, f, s, u, c]);
                let p = f ? null : (null == o ? void 0 : null === (t = o.data.authUser) || void 0 === t ? void 0 : t.artist) || null,
                    h = f ? null : null == o ? void 0 : o.data.authUser;
                return {
                    loading: s,
                    authUser: n,
                    authArtist: p,
                    authArtistLoading: s,
                    authUserArtist: h
                }
            }
        },
        66676: function(e, t, n) {
            n.d(t, {
                H: function() {
                    return useNavActions
                }
            });
            var i = n(71992),
                l = n.n(i),
                a = n(96301),
                r = n(21956),
                o = n(85846),
                s = n(95390);
            let useNavActions = () => {
                var e;
                let {
                    pathname: t,
                    asPath: n
                } = (0, i.useRouter)(), {
                    isAuthenticatedWithAPI: u,
                    authUser: c
                } = (0, a.aC)(), d = (0, s.OU)(null !== (e = null == c ? void 0 : c.webappUri) && void 0 !== e ? e : ""), f = t === o.qy.ViralChartsSounds, p = t === o.qy.Home, h = t.includes(o.qy.Explore), m = t.includes(o.qy.Explore), b = t.includes(o.qy.NotificationPage), x = t.includes("/[soundHandle]") && n === (0, s.OU)((null == c ? void 0 : c.webappUri) || "") || t.includes("/user/[publicAddress]") && n.split("?")[0] === (0, s.OU)((null == c ? void 0 : c.webappUri) || ""), g = t === o.qy.SignIn, onNotificationsClick = async e => {
                    if (e.preventDefault(), e.stopPropagation(), !u) {
                        (0, r.jf)({
                            postLoginRedirect: {
                                page: "notifications"
                            }
                        });
                        return
                    }
                    l().push(o.qy.NotificationPage)
                }, onProfileClick = async e => {
                    if (e.preventDefault(), e.stopPropagation(), !u) {
                        (0, r.jf)({
                            postLoginRedirect: {
                                page: "profile"
                            }
                        });
                        return
                    }
                    l().push(d)
                };
                return {
                    onNotificationsClick,
                    onProfileClick,
                    isHomepageActive: p,
                    isSearchActive: h,
                    isExploreActive: m,
                    isNotificationActive: b,
                    isProfileActive: x,
                    isSignInActive: g,
                    isViralChartsActive: f
                }
            }
        },
        50925: function(e, t, n) {
            n.d(t, {
                D: function() {
                    return useTieredUpload
                }
            });
            var i = n(97352),
                l = n(71992),
                a = n.n(l),
                r = n(4290),
                o = n(9026),
                s = n(58658),
                u = n(44201),
                c = n(53514),
                d = n(42529),
                f = n(85846),
                p = n(64571),
                h = n(30173),
                m = n(64398);

            function useTieredUpload() {
                let {
                    authArtist: e,
                    authUser: t
                } = (0, h.E)(), n = (0, m.S)(), [l, b] = (0, i.useState)(!1), x = (0, d.R)(async () => {
                    if ((null == e ? void 0 : e.id) && (null == t ? void 0 : t.publicAddress)) try {
                        b(!0);
                        let n = (0, r.k$)();
                        await (0, c.ic)({
                            id: n
                        }).set({ ...(0, u.M)(),
                            id: n,
                            artistId: e.id,
                            splits: {
                                fields: {
                                    splitContractAddress: null,
                                    splits: [{
                                        ownerAddress: t.publicAddress,
                                        roles: [o.H.ARTIST],
                                        percent: "100"
                                    }]
                                }
                            }
                        }), c.S3.transaction = null, c.S3.releaseId = null, c.S3.expectedContractAddress = null, a().replace((0, p.eM)({
                            draftId: n,
                            stepId: f.Qp
                        })).finally(() => b(!1))
                    } catch (e) {
                        n({
                            action: s.A.RELEASE_UPLOAD_CREATE_DRAFT_FAILED,
                            error: e,
                            errorType: s.QS.LOCAL_STORAGE,
                            message: "Couldn't create draft to local storage",
                            level: "fatal",
                            isArtistOnlyPage: !0,
                            pillar: s.Lj.UPLOAD_RELEASE
                        }), b(!1)
                    }
                });
                return {
                    loading: l,
                    createDraft: x
                }
            }
        },
        26191: function(e, t, n) {
            n.d(t, {
                F: function() {
                    return s
                },
                k: function() {
                    return useHeaderStore
                }
            });
            var i = n(97352),
                l = n(31265),
                a = n(63558),
                r = n(22181),
                o = n(89412);
            let s = (0, l.sj)({
                opened: null,
                title: "Sound.xyz"
            });

            function useHeaderStore() {
                let {
                    opened: e,
                    title: t
                } = (0, a.R)(s), n = (0, i.useCallback)(() => {
                    s.opened = null
                }, []), l = (0, i.useCallback)(e => {
                    s.opened = e
                }, []), {
                    activeModal: u
                } = (0, r.useModal)(), {
                    activeModal: c
                } = (0, o.useSecondaryModal)();
                return (0, i.useEffect)(() => {
                    e && (u || c) && n()
                }, [u, c, e, n]), {
                    close: n,
                    open: l,
                    isSearchOpen: "search" === e,
                    isHamburgerMenuOpen: "hamburger" === e,
                    areUserOptionsOpen: "user" === e,
                    isLeftNavOpen: "left-nav" === e,
                    title: t
                }
            }
        },
        36981: function(e, t) {
            t.DF = {
                prefix: "far",
                iconName: "chart-simple",
                icon: [448, 512, [], "e473", "M240 32C266.5 32 288 53.49 288 80V432C288 458.5 266.5 480 240 480H208C181.5 480 160 458.5 160 432V80C160 53.49 181.5 32 208 32H240zM240 80H208V432H240V80zM80 224C106.5 224 128 245.5 128 272V432C128 458.5 106.5 480 80 480H48C21.49 480 0 458.5 0 432V272C0 245.5 21.49 224 48 224H80zM80 272H48V432H80V272zM320 144C320 117.5 341.5 96 368 96H400C426.5 96 448 117.5 448 144V432C448 458.5 426.5 480 400 480H368C341.5 480 320 458.5 320 432V144zM368 432H400V144H368V432z"]
            }, t.Wp = t.DF
        },
        48610: function(e, t) {
            t.DF = {
                prefix: "far",
                iconName: "file-arrow-up",
                icon: [384, 512, ["file-upload"], "f574", "M175 223l-80 80c-9.375 9.375-9.375 24.56 0 33.94s24.56 9.375 33.94 0L168 297.9V400c0 13.25 10.75 24 24 24s24-10.75 24-24V297.9l39.03 39.03C259.7 341.7 265.8 344 272 344s12.28-2.344 16.97-7.031c9.375-9.375 9.375-24.56 0-33.94l-80-80C199.6 213.7 184.4 213.7 175 223zM365.3 93.38l-74.63-74.64C278.6 6.742 262.3 0 245.4 0H64C28.65 0 0 28.65 0 64l.0065 384c0 35.34 28.65 64 64 64H320c35.2 0 64-28.8 64-64V138.6C384 121.7 377.3 105.4 365.3 93.38zM336 448c0 8.836-7.164 16-16 16H64.02c-8.838 0-16-7.164-16-16L48 64.13c0-8.836 7.164-16 16-16h160L224 128c0 17.67 14.33 32 32 32h79.1V448z"]
            }, t.PQ = t.DF
        },
        31855: function(e, t) {
            t.DF = {
                prefix: "far",
                iconName: "globe",
                icon: [512, 512, [127760], "f0ac", "M256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0zM256 464C263.4 464 282.1 456.8 303.6 415.6C312.4 397.9 319.1 376.4 325.6 352H186.4C192 376.4 199.6 397.9 208.4 415.6C229 456.8 248.6 464 256 464zM178.5 304H333.5C335.1 288.7 336 272.6 336 256C336 239.4 335.1 223.3 333.5 208H178.5C176.9 223.3 176 239.4 176 256C176 272.6 176.9 288.7 178.5 304V304zM325.6 160C319.1 135.6 312.4 114.1 303.6 96.45C282.1 55.22 263.4 48 256 48C248.6 48 229 55.22 208.4 96.45C199.6 114.1 192 135.6 186.4 160H325.6zM381.8 208C383.2 223.5 384 239.6 384 256C384 272.4 383.2 288.5 381.8 304H458.4C462.1 288.6 464 272.5 464 256C464 239.5 462.1 223.4 458.4 208H381.8zM342.1 66.61C356.2 92.26 367.4 124.1 374.7 160H440.6C419.2 118.9 384.4 85.88 342.1 66.61zM169.9 66.61C127.6 85.88 92.84 118.9 71.43 160H137.3C144.6 124.1 155.8 92.26 169.9 66.61V66.61zM48 256C48 272.5 49.93 288.6 53.57 304H130.2C128.8 288.5 128 272.4 128 256C128 239.6 128.8 223.5 130.2 208H53.57C49.93 223.4 48 239.5 48 256zM440.6 352H374.7C367.4 387.9 356.2 419.7 342.1 445.4C384.4 426.1 419.2 393.1 440.6 352zM137.3 352H71.43C92.84 393.1 127.6 426.1 169.9 445.4C155.8 419.7 144.6 387.9 137.3 352V352z"]
            }, t.g4 = t.DF
        },
        30957: function(e, t, n) {
            var i = n(29433);
            t.DF = {
                prefix: i.prefix,
                iconName: i.iconName,
                icon: [i.width, i.height, i.aliases, i.unicode, i.svgPathData]
            }, t.J9 = t.DF, i.prefix, i.iconName, i.width, i.height, i.aliases, i.unicode, i.svgPathData, i.aliases
        },
        29433: function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = "house",
                i = [127968, 63498, 63500, "home", "home-alt", "home-lg-alt"],
                l = "f015",
                a = "M567.5 229.7C577.6 238.3 578.9 253.4 570.3 263.5C561.7 273.6 546.6 274.9 536.5 266.3L512 245.5V432C512 476.2 476.2 512 432 512H144C99.82 512 64 476.2 64 432V245.5L39.53 266.3C29.42 274.9 14.28 273.6 5.7 263.5C-2.875 253.4-1.634 238.3 8.473 229.7L272.5 5.7C281.4-1.9 294.6-1.9 303.5 5.7L567.5 229.7zM144 464H192V312C192 289.9 209.9 272 232 272H344C366.1 272 384 289.9 384 312V464H432C449.7 464 464 449.7 464 432V204.8L288 55.47L112 204.8V432C112 449.7 126.3 464 144 464V464zM240 464H336V320H240V464z";
            t.definition = {
                prefix: "far",
                iconName: n,
                icon: [576, 512, i, l, a]
            }, t.faHouse = t.definition, t.prefix = "far", t.iconName = n, t.width = 576, t.height = 512, t.ligatures = i, t.unicode = l, t.svgPathData = a, t.aliases = i
        },
        28968: function(e, t) {
            t.DF = {
                prefix: "far",
                iconName: "pen-to-square",
                icon: [512, 512, ["edit"], "f044", "M373.1 24.97C401.2-3.147 446.8-3.147 474.9 24.97L487 37.09C515.1 65.21 515.1 110.8 487 138.9L289.8 336.2C281.1 344.8 270.4 351.1 258.6 354.5L158.6 383.1C150.2 385.5 141.2 383.1 135 376.1C128.9 370.8 126.5 361.8 128.9 353.4L157.5 253.4C160.9 241.6 167.2 230.9 175.8 222.2L373.1 24.97zM440.1 58.91C431.6 49.54 416.4 49.54 407 58.91L377.9 88L424 134.1L453.1 104.1C462.5 95.6 462.5 80.4 453.1 71.03L440.1 58.91zM203.7 266.6L186.9 325.1L245.4 308.3C249.4 307.2 252.9 305.1 255.8 302.2L390.1 168L344 121.9L209.8 256.2C206.9 259.1 204.8 262.6 203.7 266.6zM200 64C213.3 64 224 74.75 224 88C224 101.3 213.3 112 200 112H88C65.91 112 48 129.9 48 152V424C48 446.1 65.91 464 88 464H360C382.1 464 400 446.1 400 424V312C400 298.7 410.7 288 424 288C437.3 288 448 298.7 448 312V424C448 472.6 408.6 512 360 512H88C39.4 512 0 472.6 0 424V152C0 103.4 39.4 64 88 64H200z"]
            }, t.Y = t.DF
        },
        83070: function(e, t) {
            t.DF = {
                prefix: "far",
                iconName: "user",
                icon: [448, 512, [128100, 62144], "f007", "M272 304h-96C78.8 304 0 382.8 0 480c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32C448 382.8 369.2 304 272 304zM48.99 464C56.89 400.9 110.8 352 176 352h96c65.16 0 119.1 48.95 127 112H48.99zM224 256c70.69 0 128-57.31 128-128c0-70.69-57.31-128-128-128S96 57.31 96 128C96 198.7 153.3 256 224 256zM224 48c44.11 0 80 35.89 80 80c0 44.11-35.89 80-80 80S144 172.1 144 128C144 83.89 179.9 48 224 48z"]
            }, t.IL = t.DF
        },
        60814: function(e, t) {
            t.DF = {
                prefix: "fas",
                iconName: "chart-simple",
                icon: [448, 512, [], "e473", "M160 80c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V80zM0 272c0-26.5 21.5-48 48-48H80c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V272zM368 96h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H368c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48z"]
            }, t.Wp = t.DF
        },
        79162: function(e, t) {
            t.DF = {
                prefix: "fas",
                iconName: "globe",
                icon: [512, 512, [127760], "f0ac", "M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 21 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"]
            }, t.g4 = t.DF
        },
        51951: function(e, t, n) {
            var i = n(12810);
            t.DF = {
                prefix: i.prefix,
                iconName: i.iconName,
                icon: [i.width, i.height, i.aliases, i.unicode, i.svgPathData]
            }, t.J9 = t.DF, i.prefix, i.iconName, i.width, i.height, i.aliases, i.unicode, i.svgPathData, i.aliases
        },
        12810: function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = "house",
                i = [127968, 63498, 63500, "home", "home-alt", "home-lg-alt"],
                l = "f015",
                a = "M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z";
            t.definition = {
                prefix: "fas",
                iconName: n,
                icon: [576, 512, i, l, a]
            }, t.faHouse = t.definition, t.prefix = "fas", t.iconName = n, t.width = 576, t.height = 512, t.ligatures = i, t.unicode = l, t.svgPathData = a, t.aliases = i
        },
        61499: function(e, t) {
            t.DF = {
                prefix: "fas",
                iconName: "user",
                icon: [448, 512, [128100, 62144], "f007", "M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"]
            }, t.IL = t.DF
        },
        17816: function(e, t, n) {
            n.r(t), n.d(t, {
                default: function() {
                    return addMinutes
                }
            });
            var i = n(24180),
                l = n(91760),
                a = n(37901);

            function addMinutes(e, t) {
                (0, a.Z)(2, arguments);
                var n = (0, i.Z)(t);
                return (0, l.Z)(e, 6e4 * n)
            }
        },
        81721: function(e, t, n) {
            n.r(t), n.d(t, {
                default: function() {
                    return differenceInCalendarYears
                }
            });
            var i = n(68711),
                l = n(37901);

            function differenceInCalendarYears(e, t) {
                (0, l.Z)(2, arguments);
                var n = (0, i.default)(e),
                    a = (0, i.default)(t);
                return n.getFullYear() - a.getFullYear()
            }
        },
        57460: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return differenceInHours
                }
            });
            var i = n(60726),
                l = n(68711),
                a = n(37901),
                r = {
                    ceil: Math.ceil,
                    round: Math.round,
                    floor: Math.floor,
                    trunc: function(e) {
                        return e < 0 ? Math.ceil(e) : Math.floor(e)
                    }
                };

            function differenceInHours(e, t, n) {
                (0, a.Z)(2, arguments);
                var o, s = function(e, t) {
                    return (0, a.Z)(2, arguments), (0, l.default)(e).getTime() - (0, l.default)(t).getTime()
                }(e, t) / i.vh;
                return ((o = null == n ? void 0 : n.roundingMethod) ? r[o] : r.trunc)(s)
            }
        },
        82548: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return differenceInYears
                }
            });
            var i = n(68711),
                l = n(81721),
                a = n(95590),
                r = n(37901);

            function differenceInYears(e, t) {
                (0, r.Z)(2, arguments);
                var n = (0, i.default)(e),
                    o = (0, i.default)(t),
                    s = (0, a.Z)(n, o),
                    u = Math.abs((0, l.default)(n, o));
                n.setFullYear(1584), o.setFullYear(1584);
                var c = (0, a.Z)(n, o) === -s,
                    d = s * (u - Number(c));
                return 0 === d ? 0 : d
            }
        },
        73278: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return fromUnixTime
                }
            });
            var i = n(68711),
                l = n(24180),
                a = n(37901);

            function fromUnixTime(e) {
                (0, a.Z)(1, arguments);
                var t = (0, l.Z)(e);
                return (0, i.default)(1e3 * t)
            }
        },
        66753: function(e, t, n) {
            n.d(t, {
                SV: function() {
                    return $44d7e150ebc754d2$export$e926676385687eaf
                },
                cO: function() {
                    return $7c3c25b3f398a9d6$export$c052f6604b7d51fe
                }
            });
            var i = n(97352);

            function $parcel$export(e, t, n, i) {
                Object.defineProperty(e, t, {
                    get: n,
                    set: i,
                    enumerable: !0,
                    configurable: !0
                })
            }
            $parcel$export({}, "ErrorBoundary", () => $44d7e150ebc754d2$export$e926676385687eaf), $parcel$export({}, "ErrorBoundaryContext", () => l);
            let l = (0, i.createContext)(null),
                a = {
                    didCatch: !1,
                    error: null
                };
            let $44d7e150ebc754d2$export$e926676385687eaf = class $44d7e150ebc754d2$export$e926676385687eaf extends i.Component {
                state = a;
                static getDerivedStateFromError(e) {
                    return {
                        didCatch: !0,
                        error: e
                    }
                }
                resetErrorBoundary = (...e) => {
                    let {
                        error: t
                    } = this.state;
                    null !== t && (this.props.onReset ? .({
                        args: e,
                        reason: "imperative-api"
                    }), this.setState(a))
                };
                componentDidCatch(e, t) {
                    this.props.onError ? .(e, t)
                }
                componentDidUpdate(e, t) {
                    let {
                        didCatch: n
                    } = this.state, {
                        resetKeys: i
                    } = this.props;
                    n && null !== t.error && function(e = [], t = []) {
                        return e.length !== t.length || e.some((e, n) => !Object.is(e, t[n]))
                    }(e.resetKeys, i) && (this.props.onReset ? .({
                        next: i,
                        prev: e.resetKeys,
                        reason: "keys"
                    }), this.setState(a))
                }
                render() {
                    let {
                        children: e,
                        fallbackRender: t,
                        FallbackComponent: n,
                        fallback: a
                    } = this.props, {
                        didCatch: r,
                        error: o
                    } = this.state, s = e;
                    if (r) {
                        let e = {
                            error: o,
                            resetErrorBoundary: this.resetErrorBoundary
                        };
                        if ((0, i.isValidElement)(a)) s = a;
                        else if ("function" == typeof t) s = t(e);
                        else if (n) s = (0, i.createElement)(n, e);
                        else throw Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop")
                    }
                    return (0, i.createElement)(l.Provider, {
                        value: {
                            didCatch: r,
                            error: o,
                            resetErrorBoundary: this.resetErrorBoundary
                        }
                    }, s)
                }
            };

            function $7c3c25b3f398a9d6$export$c052f6604b7d51fe() {
                let e = (0, i.useContext)(l);
                ! function(e) {
                    if (null == e || "boolean" != typeof e.didCatch || "function" != typeof e.resetErrorBoundary) throw Error("ErrorBoundaryContext not found")
                }(e);
                let [t, n] = (0, i.useState)({
                    error: null,
                    hasError: !1
                }), a = (0, i.useMemo)(() => ({
                    resetBoundary: () => {
                        e ? .resetErrorBoundary(), n({
                            error: null,
                            hasError: !1
                        })
                    },
                    showBoundary: e => n({
                        error: e,
                        hasError: !0
                    })
                }), [e ? .resetErrorBoundary]);
                if (t.hasError) throw t.error;
                return a
            }

            function $62ff477d53f02a5b$export$f0c7a449e0cfaec7(e, t) {
                let n = (0, i.forwardRef)((n, l) => (0, i.createElement)($44d7e150ebc754d2$export$e926676385687eaf, t, (0, i.createElement)(e, { ...n,
                        ref: l
                    }))),
                    l = e.displayName || e.name || "Unknown";
                return n.displayName = `withErrorBoundary(${l})`, n
            }
            $parcel$export({}, "useErrorBoundary", () => $7c3c25b3f398a9d6$export$c052f6604b7d51fe), $parcel$export({}, "withErrorBoundary", () => $62ff477d53f02a5b$export$f0c7a449e0cfaec7)
        },
        73958: function(e, t, n) {
            n.d(t, {
                G: function() {
                    return editionContractInfo
                }
            });
            var i = n(34606);

            function editionContractInfo(e, {
                editionAddress: t
            }) {
                return e.readContract({
                    abi: i.G,
                    address: t,
                    functionName: "editionInfo"
                })
            }
        },
        32263: function(e, t, n) {
            n.d(t, {
                WV: function() {
                    return s
                },
                vd: function() {
                    return o
                },
                Oc: function() {
                    return u
                }
            });
            var i = n(80834),
                l = n(62865),
                a = n(15429),
                r = n(52253);
            i.Z_().nonempty().pipe(i.oQ.date());
            let o = i.G0([i.Z_().nonempty().pipe(i.oQ.date().transform(e => e.toISOString())), i.hT().transform(e => e.toISOString())]);
            i.G0([i.Rx(), i.Kv().transform(function(e) {
                return Math.min(Number(e), Number.MAX_SAFE_INTEGER)
            })]);
            let s = i.Z_().refine(l.UJ, {
                    message: "Value has to be a valid hex address"
                }).transform(a.wX),
                u = i.Z_().refine(r.xu, {
                    message: "Value has to be a valid uuid v4"
                });
            i.Z_().length(43, {
                message: "Unexpected length for arweave hash, it should always be 43 characters"
            }), i.Z_().refine(e => (0, r.vq)(e, {
                strict: !0
            }), {
                message: "Value has to be a valid hex value"
            })
        },
        82438: function(e, t, n) {
            n.d(t, {
                BH: function() {
                    return o
                },
                Cz: function() {
                    return s
                },
                _q: function() {
                    return a
                },
                d2: function() {
                    return d
                },
                uk: function() {
                    return c
                },
                wm: function() {
                    return u
                },
                xR: function() {
                    return r
                }
            });
            var i = n(14906);
            let l = {
                    RELEASE_INFO: "Release Info",
                    ALBUM_INFO: "Album Info",
                    METADATA: "Metadata",
                    REWARDS: "Rewards",
                    AUCTION_CONFIGURATION: "Auction Configuration",
                    SPLITS: "Splits",
                    REVIEW_AND_DEPLOY: "Review and Deploy"
                },
                a = 1,
                r = 100,
                o = [a, 3, 5, 10, 25, 50, r],
                s = 1,
                u = 100,
                c = [s, 3, 5, 10, 25, 50, u],
                d = [1e4],
                f = {
                    ReleaseInfoUploadStepInfo: "ReleaseInfoUploadStepInfo",
                    MetadataUploadStepInfo: "MetadataUploadStepInfo",
                    RewardsUploadStepInfo: "RewardsUploadStepInfo",
                    AuctionConfigurationUploadStepInfo: "AuctionConfigurationUploadStepInfo",
                    SplitsUploadStepInfo: "SplitsUploadStepInfo",
                    ReviewAndDeployUploadStepInfo: "ReviewAndDeployUploadStepInfo"
                },
                p = {
                    Single: {
                        [f.ReleaseInfoUploadStepInfo]: 1,
                        [f.MetadataUploadStepInfo]: 2,
                        [f.RewardsUploadStepInfo]: 3,
                        [f.AuctionConfigurationUploadStepInfo]: 4,
                        [f.SplitsUploadStepInfo]: 5,
                        [f.ReviewAndDeployUploadStepInfo]: 6
                    },
                    Album: {
                        [f.ReleaseInfoUploadStepInfo]: 1,
                        [f.RewardsUploadStepInfo]: 2,
                        [f.AuctionConfigurationUploadStepInfo]: 3,
                        [f.SplitsUploadStepInfo]: 4,
                        [f.ReviewAndDeployUploadStepInfo]: 5
                    }
                };
            l.RELEASE_INFO, p.Single.ReleaseInfoUploadStepInfo, l.METADATA, p.Single.MetadataUploadStepInfo, l.REWARDS, p.Single.RewardsUploadStepInfo, l.AUCTION_CONFIGURATION, p.Single.AuctionConfigurationUploadStepInfo, l.SPLITS, p.Single.SplitsUploadStepInfo, l.REVIEW_AND_DEPLOY, p.Single.ReviewAndDeployUploadStepInfo, l.ALBUM_INFO, p.Album.ReleaseInfoUploadStepInfo, l.REWARDS, p.Album.RewardsUploadStepInfo, l.AUCTION_CONFIGURATION, p.Album.AuctionConfigurationUploadStepInfo, l.SPLITS, p.Album.SplitsUploadStepInfo, l.REVIEW_AND_DEPLOY, p.Album.ReviewAndDeployUploadStepInfo, i.Uh.SINGLE, i.Uh.ALBUM, i.Uh.ALBUM_TRACK
        },
        18873: function(e, t, n) {
            n.d(t, {
                E: function() {
                    return l
                }
            });
            let i = class {
                    static fromUnixTime(e) {
                        return new Date(1e3 * e)
                    }
                    static getUnixTime(e) {
                        let t = "number" == typeof e ? e : e.getTime();
                        return Math.floor(t / 1e3)
                    }
                    static startOfDay(e) {
                        let t = new Date(e);
                        return t.setHours(0, 0, 0, 0), t
                    }
                    static subMinutes(e, t) {
                        let n = new Date(e);
                        return n.setMinutes(n.getMinutes() - t), n
                    }
                },
                l = i;
            l.SECOND = 1e3, l.MINUTE = 60 * i.SECOND, l.HOUR = 60 * i.MINUTE, l.DAY = 24 * i.HOUR, l.WEEK = 7 * i.DAY, l.MONTH = 30 * i.DAY, l.YEAR = 365 * i.DAY
        },
        84669: function(e, t, n) {
            n.d(t, {
                F: function() {
                    return typedEntries
                }
            });

            function typedEntries(e) {
                return Object.entries(e)
            }
        },
        27460: function(e, t, n) {
            n.d(t, {
                P: function() {
                    return cleanTextSearchInput
                }
            });
            let i = /\s{2,}/g;

            function cleanTextSearchInput(e) {
                return e.replace(i, " ").trim().toLowerCase()
            }
        },
        11908: function(e, t, n) {
            var i = n(56074),
                l = n(15492);
            t.Z = function(e) {
                return "number" == typeof e || (0, l.Z)(e) && "[object Number]" == (0, i.Z)(e)
            }
        },
        52994: function(e, t, n) {
            n.d(t, {
                l: function() {
                    return isHash
                }
            });
            var i = n(63424),
                l = n(86920);

            function isHash(e) {
                return (0, i.v)(e) && 32 === (0, l.d)(e)
            }
        }
    }
]);