"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8609], {
        88609: function(e, s, r) {
            r.r(s), r.d(s, {
                SetupProfileBehindAuth: function() {
                    return SetupProfileBehindAuth
                }
            });
            var t = r(16356);
            r(97352);
            var a = r(24924),
                n = r.n(a),
                i = r(96301),
                d = r(36916);
            let o = n()(() => Promise.all([r.e(4361), r.e(9721), r.e(2145), r.e(5265), r.e(2889), r.e(5441), r.e(8943), r.e(8776)]).then(r.bind(r, 63119)).then(e => e.SetupProfile), {
                loadableGenerated: {
                    webpack: () => [63119]
                },
                ssr: !1
            });

            function SetupProfileBehindAuth() {
                let {
                    isAuthenticatedWithAPI: e,
                    authUser: s
                } = (0, i.aC)(), {
                    hasDismissedSetupProfile: r
                } = (0, d.d)();
                return !e || (null == s ? void 0 : s.artist) || "not-dismissed" !== r.type || (null == s ? void 0 : s.displayName) && s.verifiedNotificationEmail ? null : (0, t.jsx)(o, {})
            }
        },
        60303: function(e, s, r) {
            r.d(s, {
                GE: function() {
                    return o
                },
                mU: function() {
                    return i
                }
            });
            var t = r(85306),
                a = r(97189),
                n = r(10612);
            let {
                useSubscription: i,
                subscriptionStores: d,
                Effects: o
            } = (0, t.l)({
                graphqlWsOptions: {
                    url: n.Fl.href,
                    connectionParams: () => ({ ...a.L
                    })
                }
            })
        },
        44397: function(e, s, r) {
            r.d(s, {
                GE: function() {
                    return t.GE
                },
                mU: function() {
                    return t.mU
                }
            });
            var t = r(60303)
        },
        36750: function(e, s, r) {
            r.d(s, {
                c: function() {
                    return RefetchOnComplete
                }
            });
            var t = r(85740),
                a = r(55344),
                n = r(44397),
                i = r(3928);

            function RefetchOnComplete(e) {
                let {
                    trigger: s,
                    refetch: r,
                    throttled: d,
                    filter: o,
                    ...u
                } = e, l = Array.isArray(s) ? s : [s], f = "function" == typeof r ? r : Array.isArray(r) ? r : [r];

                function invalidate() {
                    if ("function" == typeof f) {
                        f();
                        return
                    }(0, i.EEr)({
                        operations: f,
                        ...u
                    })
                }
                let c = d ? (0, t.Z)(invalidate, (0, a.Z)(d), {
                        leading: !0,
                        trailing: !0
                    }) : invalidate,
                    handleEffect = function(e) {
                        if (!o || o(e)) return c()
                    },
                    E = new Set;
                for (let e of l) E.add(i.Lfh.onCompleted(e, handleEffect)), E.add(n.GE.onCompleted(e, handleEffect));
                return function() {
                    for (let e of E) e();
                    E.clear()
                }
            }
        },
        36916: function(e, s, r) {
            r.d(s, {
                d: function() {
                    return useBackendUserPersistedData
                }
            });
            var t = r(97352);
            r(96960);
            var a = r(20162),
                n = r(58658),
                i = r(28384),
                d = r(96301),
                o = r(36750),
                u = r(3928),
                l = r(42529),
                f = r(64398);
            (0, o.c)({
                trigger: [u.sPW],
                refetch: [u.lJx]
            });
            let c = n.Lj.GLOBAL;

            function useBackendUserPersistedData() {
                let {
                    isAuthenticatedWithAPI: e,
                    authUser: s
                } = (0, d.aC)(), {
                    data: r,
                    isLoading: o,
                    error: E,
                    setQueryData: m
                } = (0, u.aM2)(u.lJx, {
                    staleTime: 0,
                    filterQueryKey: {
                        authUserId: null == s ? void 0 : s.id
                    },
                    enabled: e
                }), h = (0, f.S)(), D = !!r, R = t.useMemo(() => {
                    if (!r) return i.N;
                    let e = i.L.safeParse(r.data.getUserPersistedData);
                    return e.success ? e.data : (h({
                        action: n.pe.USER_BACKEND_PERSISTED_DATA_FETCH_ERROR,
                        error: Error(e.error.message),
                        errorType: n.QS.PARSE_ERROR,
                        message: e.error.message,
                        level: "error",
                        isArtistOnlyPage: !1,
                        pillar: c
                    }), i.N)
                }, [r, h]), {
                    mutate: p
                } = (0, u.Dbo)(u.sPW, {
                    onError: e => {
                        h({
                            action: n.pe.USER_BACKEND_PERSISTED_DATA_UPDATE_ERROR,
                            error: Error(e.message),
                            errorType: n.QS.USER_BACKEND_PERSISTED_DATA_UPDATE_ERROR,
                            message: e.message,
                            toast: "There was an error updating your settings. Please try again.",
                            level: "warning",
                            isArtistOnlyPage: !1,
                            pillar: c
                        })
                    },
                    onSuccess(e) {
                        let {
                            data: s
                        } = e;
                        "MutationSetUserPersistedDataSuccess" !== s.setUserPersistedData.__typename && h({
                            action: n.pe.USER_BACKEND_PERSISTED_DATA_UPDATE_ERROR,
                            error: Error(s.setUserPersistedData.message),
                            errorType: n.QS.USER_BACKEND_PERSISTED_DATA_UPDATE_ERROR,
                            message: s.setUserPersistedData.message,
                            level: "warning",
                            isArtistOnlyPage: !1,
                            pillar: c
                        })
                    },
                    retry: 3
                }), A = (0, l.R)(e => {
                    let s = (0, a.Z)(i.L, { ...R,
                        ...e,
                        version: i.N.version
                    });
                    m({
                        data: {
                            getUserPersistedData: s
                        }
                    }), p({
                        data: s
                    })
                }), P = (0, l.R)(e => {
                    A({
                        hasDismissedNewRewardsFeatureBanner: e
                    })
                }), _ = (0, l.R)(e => {
                    A({
                        hasDismissedSetupProfile: e
                    })
                }), S = (0, l.R)(e => {
                    A({
                        hasDismissedNewChannelsFeatureBanner: e
                    })
                }), y = t.useMemo(() => o || !D ? {
                    type: "loading"
                } : R.hasDismissedSetupProfile ? {
                    type: "dismissed"
                } : {
                    type: "not-dismissed"
                }, [D, o, R.hasDismissedSetupProfile]), g = t.useMemo(() => o || !D ? {
                    type: "loading"
                } : R.hasDismissedNewRewardsFeatureBanner ? {
                    type: "dismissed"
                } : {
                    type: "not-dismissed"
                }, [D, o, R.hasDismissedNewRewardsFeatureBanner]), N = t.useMemo(() => o || !D ? {
                    type: "loading"
                } : R.hasDismissedNewChannelsFeatureBanner ? {
                    type: "dismissed"
                } : {
                    type: "not-dismissed"
                }, [D, o, R.hasDismissedNewChannelsFeatureBanner]);
                return {
                    setHasDismissedSetupProfile: _,
                    setHasDismissedNewRewardsFeatureBanner: P,
                    setHasDismissedNewChannelsFeatureBanner: S,
                    hasDismissedSetupProfile: y,
                    hasDismissedNewRewardsFeatureBanner: g,
                    hasDismissedNewChannelsFeatureBanner: N,
                    loading: o,
                    error: E
                }
            }
        },
        28384: function(e, s, r) {
            r.d(s, {
                L: function() {
                    return a
                },
                N: function() {
                    return n
                }
            });
            var t = r(80834);
            let a = (0, t.IM)((0, t.Z_)(), (0, t.O7)().or((0, t.Rx)())).and((0, t.Ry)({
                    hasFeedAccess: (0, t.O7)().default(!1),
                    hasLeaderboardAccess: (0, t.O7)().default(!1),
                    hasDismissedNewRewardsFeatureBanner: (0, t.O7)().default(!1),
                    hasDismissedNewLeaderboardFeatureBanner: (0, t.O7)().default(!1),
                    hasDismissedSetupProfile: (0, t.O7)().default(!1),
                    hasDismissedNewChannelsFeatureBanner: (0, t.O7)().default(!1),
                    version: (0, t.Rx)().int().min(1)
                })),
                n = {
                    hasFeedAccess: !1,
                    hasLeaderboardAccess: !1,
                    hasDismissedNewRewardsFeatureBanner: !1,
                    hasDismissedNewLeaderboardFeatureBanner: !1,
                    hasDismissedSetupProfile: !1,
                    hasDismissedNewChannelsFeatureBanner: !1,
                    version: 5
                }
        }
    }
]);