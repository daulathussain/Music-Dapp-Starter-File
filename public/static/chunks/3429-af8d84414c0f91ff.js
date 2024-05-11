(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3429], {
        46313: function(e, t, i) {
            "use strict";
            i.d(t, {
                A: function() {
                    return BellCheck
                }
            });
            var a = i(16356);
            i(97352);
            let BellCheck = () => (0, a.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                height: "1em",
                viewBox: "0 0 640 512",
                children: (0, a.jsx)("path", {
                    d: "M2.4 402.4c-4-8.3-2.9-18.2 2.9-25.4c5-6.2 9.9-12.5 14.9-18.7C48.5 322.9 64 278.8 64 233.4c0-11.1 0-22.3 0-33.4c0-75.8 55.5-138.6 128-150.1c0-6 0-11.9 0-17.9c0-17.7 14.3-32 32-32s32 14.3 32 32c0 6 0 11.9 0 17.9C328.5 61.4 384 124.2 384 200c0 10.7 0 21.5 0 32.2c-17.4 14.3-31.9 31.9-42.8 51.9c-3.5-16.6-5.2-33.6-5.2-50.7c0-11.1 0-22.3 0-33.4c0-57.4-46.6-104-104-104c-2.7 0-5.3 0-8 0s-5.3 0-8 0c-57.4 0-104 46.6-104 104c0 11.1 0 22.3 0 33.4C112 281.3 98.1 328 72.3 368c82.6 0 165.1 0 247.7 0c0 16.6 2.3 32.7 6.6 48c-100.9 0-201.7 0-302.6 0c-9.2 0-17.6-5.3-21.6-13.6zM160 448l64 0 64 0c0 17-6.7 33.3-18.7 45.3s-28.3 18.7-45.3 18.7s-33.3-6.7-45.3-18.7s-18.7-28.3-18.7-45.3zm192-80c0-79.5 64.5-144 144-144s144 64.5 144 144s-64.5 144-144 144s-144-64.5-144-144zm76.7-11.3c-6.2 6.2-6.2 16.4 0 22.6c13.3 13.3 26.7 26.7 40 40c6.2 6.2 16.4 6.2 22.6 0c24-24 48-48 72-72c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0c-20.2 20.2-40.5 40.5-60.7 60.7c-9.6-9.6-19.1-19.1-28.7-28.7c-6.2-6.2-16.4-6.2-22.6 0z"
                })
            })
        },
        32210: function(e, t, i) {
            "use strict";
            i.d(t, {
                U: function() {
                    return ResendVerificationEmail
                }
            });
            var a = i(16356);
            i(97352);
            var r = i(49542),
                s = i(75747),
                n = i(3928),
                o = i(42529),
                l = i(52537);

            function ResendVerificationEmail(e) {
                let {
                    isError: t,
                    confirmationModal: i
                } = e, {
                    closeToast: c,
                    openToast: u
                } = (0, s.useToast)(), {
                    email: d
                } = (0, l.T)(), {
                    mutateAsync: f,
                    isLoading: m
                } = (0, n.Dbo)(n.Zc3, {}), b = (0, o.R)(async () => {
                    let {
                        data: e
                    } = await f({
                        email: d
                    });
                    c(), (null == e ? void 0 : e.updateNotificationEmail.__typename) === "MutationUpdateNotificationEmailSuccess" ? ((0, n.EEr)({
                        operations: [n.WLz]
                    }), u({
                        text: "Verification email sent",
                        variant: "success"
                    })) : (null == e ? void 0 : e.updateNotificationEmail.__typename) === "NotificationEmailAlreadyClaimedError" ? u({
                        text: e.updateNotificationEmail.message,
                        variant: "error"
                    }) : u({
                        text: "Unknown error updating notification email",
                        variant: "error"
                    })
                });
                return (0, a.jsx)("button", {
                    type: "button",
                    className: (0, r.default)("font-base underline duration-75 disabled:cursor-not-allowed hover:text-black", i ? "inline-flex text-base-l font-bold text-base800 " : "text-base-s font-medium text-base600", t || i ? "lowercase" : "capitalize"),
                    onClick: e => {
                        e.preventDefault(), b()
                    },
                    disabled: m,
                    children: i ? "resend verification" : "resend verification email"
                })
            }
        },
        52537: function(e, t, i) {
            "use strict";
            i.d(t, {
                T: function() {
                    return useEmailNotifications
                },
                J: function() {
                    return useEmailNotificationsForm
                }
            });
            var a = i(16356);
            i(97352);
            var r = i(63558),
                s = i(97946),
                n = i(96281),
                o = i(96301),
                l = i(22181),
                c = i(75747),
                u = i(3928),
                d = i(14531),
                f = i(42529),
                m = i(85846),
                b = i(66159),
                x = i(39368),
                h = i(71177);
            let setField = (e, t, i) => {
                    h.$.fields[e] = t, h.$.touched[e] = i || !1
                },
                setError = (e, t) => {
                    h.$.errors[e] = t
                },
                clearEmailNotificationsErrors = () => {
                    h.$.errors = {
                        email: null
                    }
                },
                setAllFieldsTouched = () => {
                    h.$.touched = {
                        email: !0
                    }
                },
                setArtistUpdates = e => {
                    h.$.artistUpdates = e
                },
                setMentionUpdates = e => {
                    h.$.mentionUpdates = e
                },
                validateEmailNotifications = () => {
                    clearEmailNotificationsErrors();
                    let e = x.xQ.shape.fields.safeParse(h.$.fields);
                    if (!e.success) {
                        (0, b.F)(e.error.flatten().fieldErrors).forEach(e => {
                            let [t, i] = e;
                            h.$.errors[t] = null == i ? void 0 : i[0]
                        });
                        return
                    }
                    return e.data
                },
                useEmailNotificationsForm = () => {
                    let {
                        fields: e,
                        errors: t,
                        touched: i,
                        artistUpdates: a,
                        mentionUpdates: s
                    } = (0, r.R)(h.$, {
                        sync: !0
                    });
                    return {
                        errors: t,
                        fields: e,
                        touched: i,
                        validate: validateEmailNotifications,
                        clearErrors: clearEmailNotificationsErrors,
                        setField: setField,
                        setError: setError,
                        setArtistUpdates: setArtistUpdates,
                        setMentionUpdates: setMentionUpdates,
                        setAllFieldsTouched: setAllFieldsTouched,
                        artistUpdates: a,
                        mentionUpdates: s
                    }
                };

            function useEmailNotifications() {
                var e, t, i, r, b;
                let {
                    isAuthenticatedWithAPI: h
                } = (0, o.aC)(), {
                    closeCancelModal: p,
                    openModal: v
                } = (0, l.useModal)(), g = (0, d.S)(), {
                    data: y,
                    isLoading: C
                } = (0, u.aM2)(u.WLz, {
                    enabled: h,
                    ...m.gq
                }), N = null == y ? void 0 : null === (e = y.data.userNotificationPreferences) || void 0 === e ? void 0 : e.emailVerificationStatus, j = null !== (b = null == y ? void 0 : null === (t = y.data.userNotificationPreferences) || void 0 === t ? void 0 : t.email) && void 0 !== b ? b : "", w = (null == y ? void 0 : null === (i = y.data.userNotificationPreferences) || void 0 === i ? void 0 : i.receiveArtistUpdateEmails) || !1, E = (null == y ? void 0 : null === (r = y.data.userNotificationPreferences) || void 0 === r ? void 0 : r.receiveMentionUpdateEmails) || !1, {
                    mutateAsync: S,
                    isLoading: T
                } = (0, u.Dbo)(u.Zc3, {}), {
                    openToast: M,
                    closeToast: k
                } = (0, c.useToast)(), A = (0, f.R)(async e => {
                    let {
                        email: t,
                        onVerify: i,
                        onClaimedError: r
                    } = e;
                    try {
                        let {
                            data: e
                        } = await S({
                            email: t
                        });
                        k();
                        let o = null == e ? void 0 : e.updateNotificationEmail.__typename;
                        if ("MutationUpdateNotificationEmailSuccess" === o) {
                            if (!t) return !1;
                            return null == i || i(), p(), v(l.ModalType.NOTIFICATIONS_EMAIL_CONFIRMATION, {
                                body: (0, a.jsx)(n.A, {
                                    email: t
                                })
                            }), !0
                        }
                        if ("NotificationEmailAlreadyClaimedError" === o) return r ? r() : M({
                            text: x.Sg.email.non_unique,
                            variant: "error"
                        }), !1;
                        return "NotificationEmailFailedToSendError" === o && g({
                            error: Error(e.updateNotificationEmail.message),
                            toast: {
                                text: (0, a.jsxs)(a.Fragment, {
                                    children: ["We had an issue sending the verification email. Please let us know", " ", (0, a.jsx)(s.s, {
                                        className: "text-brand300 hover:text-brand600",
                                        absoluteUri: m.Wv,
                                        type: "external",
                                        children: "let us know"
                                    }), " ", "or try again"]
                                }),
                                variant: "error"
                            }
                        }), !1
                    } catch (e) {
                        return g({
                            error: e,
                            toast: "Something went wrong. Please try again."
                        }), !1
                    }
                });
                return {
                    loading: C,
                    status: N,
                    email: j,
                    receiveArtistEmails: w,
                    receiveMentionEmails: E,
                    updateEmail: A,
                    updatingEmail: T
                }
            }
        },
        39368: function(e, t, i) {
            "use strict";
            i.d(t, {
                Io: function() {
                    return s
                },
                Sg: function() {
                    return r
                },
                xQ: function() {
                    return c
                },
                x_: function() {
                    return initialEmailNotificationState
                }
            });
            var a = i(80834);
            let r = {
                    email: {
                        non_unique: "Email has already been verified by another account",
                        invalid: "Please provide a valid email address"
                    }
                },
                s = a.z.string({
                    required_error: r.email.invalid
                }).email(r.email.invalid).or(a.z.literal("")),
                n = a.z.object({
                    email: s
                }),
                o = a.z.object({
                    email: a.z.string().nullish()
                }),
                l = a.z.object({
                    email: a.z.boolean()
                }),
                c = a.z.object({
                    fields: n,
                    errors: o,
                    touched: l,
                    artistUpdates: a.z.boolean(),
                    mentionUpdates: a.z.boolean()
                }),
                initialEmailNotificationState = () => ({
                    fields: {
                        email: ""
                    },
                    errors: {
                        email: null
                    },
                    touched: {
                        email: !1
                    },
                    artistUpdates: !1,
                    mentionUpdates: !0
                })
        },
        69530: function(e, t, i) {
            "use strict";
            i.d(t, {
                _: function() {
                    return getStatusMessage
                }
            });
            var a = i(16356);
            i(97352);
            var r = i(72102),
                s = i(29767),
                n = i(3928),
                o = i(32210);
            let getStatusMessage = e => {
                let {
                    status: t,
                    requiredVerification: i
                } = e;
                return t === n.apY.NotSet && i ? (0, a.jsx)("p", {
                    className: "text-base500",
                    children: "Email verification is required."
                }) : t === n.apY.Expired ? (0, a.jsxs)(a.Fragment, {
                    children: ["Verification expired. ", (0, a.jsx)(o.U, {})]
                }) : t === n.apY.Pending ? i ? (0, a.jsxs)("p", {
                    className: "font-base text-base-s",
                    children: ["Email verification is required. Please check your email to verify or", " ", (0, a.jsx)(o.U, {
                        isError: !0
                    })]
                }) : (0, a.jsxs)(a.Fragment, {
                    children: ["Not verified. ", (0, a.jsx)(o.U, {})]
                }) : t === n.apY.Verified ? (0, a.jsxs)("div", {
                    className: "flex items-center gap-1",
                    children: [(0, a.jsx)(r.G, {
                        icon: s.fV
                    }), "Verified"]
                }) : t === n.apY.VerifiedWithOtp ? (0, a.jsxs)("div", {
                    className: "flex items-center gap-1",
                    children: [(0, a.jsx)(r.G, {
                        icon: s.fV
                    }), "Verified through email sign-in"]
                }) : ""
            }
        },
        71177: function(e, t, i) {
            "use strict";
            i.d(t, {
                $: function() {
                    return s
                }
            });
            var a = i(31265),
                r = i(39368);
            let s = (0, a.sj)((0, r.x_)())
        },
        42940: function(e, t, i) {
            "use strict";
            i.d(t, {
                w: function() {
                    return useGetNotified
                }
            });
            var a = i(16356),
                r = i(97352),
                s = i(49328),
                n = i(96281),
                o = i(6289),
                l = i(96301),
                c = i(21956),
                u = i(22181),
                d = i(75747),
                f = i(36750),
                m = i(3928),
                b = i(14531),
                x = i(42529),
                h = i(85846);
            (0, f.c)({
                trigger: [m.Mw2, m.SVu, m.c4R, m.kgV],
                refetch: [m.aPv, m.ggI, m.WLz]
            });
            let useGetNotified = e => {
                var t, i;
                let {
                    userId: f,
                    artistId: p
                } = e, {
                    openModal: v
                } = (0, u.useModal)(), {
                    openToast: g,
                    closeToast: y
                } = (0, d.useToast)(), {
                    isAuthenticatedWithAPI: C
                } = (0, l.aC)(), N = (0, b.S)(), j = "to get drop reminders in your inbox.".split(" "), {
                    mutateAsync: w
                } = (0, m.Dbo)(m.Mw2, {}), {
                    mutateAsync: E
                } = (0, m.Dbo)(m.SVu, {}), {
                    mutateAsync: S
                } = (0, m.Dbo)(m.c4R, {}), {
                    mutateAsync: T
                } = (0, m.Dbo)(m.kgV, {}), M = (0, o.BK)({
                    userId: f
                }), {
                    data: k,
                    isLoading: A
                } = (0, m.aM2)(m.WLz, {
                    enabled: C,
                    ...h.gq
                }), {
                    isSubscribedToArtist: I,
                    isSubscribedLoading: L
                } = (0, s.b)({
                    artistId: p
                }), R = null == k ? void 0 : null === (t = k.data.userNotificationPreferences) || void 0 === t ? void 0 : t.email, z = null == k ? void 0 : null === (i = k.data.userNotificationPreferences) || void 0 === i ? void 0 : i.emailVerificationStatus, _ = !0 === M, P = !!R, F = z === m.apY.NotSet || z === m.apY.Expired || z === m.apY.Pending, U = (0, r.useMemo)(() => _ && I, [_, I]), D = (0, x.R)(() => C ? (y(), !0) : ((0, c.SR)(), !1)), O = (0, x.R)(e => {
                    if (D()) {
                        if (!P) {
                            v(u.ModalType.NOTIFICATIONS_EMAIL_INPUT, {
                                body: (0, a.jsx)(n.u, {
                                    artistName: e || void 0
                                })
                            });
                            return
                        }
                        if (F) {
                            if (!R) return;
                            v(u.ModalType.NOTIFICATIONS_EMAIL_CONFIRMATION, {
                                body: (0, a.jsx)(n.A, {
                                    email: R
                                })
                            });
                            return
                        }
                    }
                }), verifyToastContent = e => (0, a.jsxs)("span", {
                    className: "inline-flex w-full flex-wrap",
                    children: [(0, a.jsx)("button", {
                        className: "relative w-fit appearance-none font-medium underline",
                        onClick: () => {
                            O(e)
                        },
                        children: "Verify your email"
                    }), h.L_, j.map((e, t) => (0, a.jsxs)("span", {
                        children: [e, h.L_]
                    }, `${e}-${t}`))]
                }), $ = (0, x.R)(async () => {
                    if (D() && p && f) {
                        if (_ && I) {
                            await E({
                                input: {
                                    artists: [p]
                                }
                            }, {
                                onSuccess: e => {
                                    let {
                                        data: t
                                    } = e;
                                    "MutationUnsubscribeArtistActivityNotificationSuccess" === t.unsubscribeArtistActivityNotification.__typename ? g({
                                        text: "You have unsubscribed and won't be notified about new drops.",
                                        variant: "success"
                                    }) : "CustomerIoAPICallError" === t.unsubscribeArtistActivityNotification.__typename && N({
                                        error: Error(t.unsubscribeArtistActivityNotification.message),
                                        toast: t.unsubscribeArtistActivityNotification.message
                                    })
                                }
                            }).catch(e => {
                                N({
                                    error: e,
                                    toast: "Error unsubscribing to artist. Please try again"
                                })
                            });
                            return
                        }
                        if (_ && !I) {
                            await w({
                                input: {
                                    artist: p
                                }
                            }, {
                                onSuccess: e => {
                                    let {
                                        data: t
                                    } = e;
                                    if ("MutationSubscribeArtistActivityNotificationSuccess" === t.subscribeArtistActivityNotification.__typename) {
                                        let e = t.subscribeArtistActivityNotification.data.artist.name;
                                        g({
                                            text: (0, a.jsxs)("div", {
                                                className: "inline-flex w-full flex-wrap break-words",
                                                children: ["You have subscribed to", h.L_, e, ".", h.L_, F ? verifyToastContent(e) : "You'll get notified about their new drops."]
                                            }),
                                            variant: "success"
                                        }), T({
                                            enable: !0
                                        })
                                    } else "CustomerIoAPICallError" === t.subscribeArtistActivityNotification.__typename && N({
                                        error: Error(t.subscribeArtistActivityNotification.message),
                                        toast: t.subscribeArtistActivityNotification.message
                                    })
                                }
                            }).catch(e => {
                                N({
                                    error: e,
                                    toast: "Error subscribing to artist. Please try again"
                                })
                            });
                            return
                        }
                        if (!_ && !I) {
                            (0, o.FQ)({
                                userId: f,
                                isFollowing: !0
                            }), await Promise.all([w({
                                input: {
                                    artist: p
                                }
                            }), S({
                                input: {
                                    user: f
                                }
                            }), T({
                                enable: !0
                            })]).then(e => {
                                let t = e[0].data.subscribeArtistActivityNotification;
                                if ("MutationSubscribeArtistActivityNotificationSuccess" === t.__typename) {
                                    let e = t.data.artist.name;
                                    g({
                                        text: (0, a.jsxs)("div", {
                                            className: "inline-flex w-full flex-wrap break-words",
                                            children: ["You have subscribed and followed", h.L_, e, ".", h.L_, F ? verifyToastContent(e) : "You'll get notified about their new drops."]
                                        }),
                                        variant: "success"
                                    })
                                } else "CustomerIoAPICallError" === t.__typename && ((0, o.FQ)({
                                    userId: f,
                                    isFollowing: !1
                                }), N({
                                    error: Error(t.message),
                                    toast: t.message
                                }))
                            }).catch(e => {
                                (0, o.FQ)({
                                    userId: f,
                                    isFollowing: !1
                                }), N({
                                    error: e,
                                    toast: "Error subscribing and following user."
                                })
                            });
                            return
                        }
                    }
                }), V = (0, x.R)(() => {
                    $()
                }), B = "loading" === M || A || L || !p || !f;
                return {
                    handleClick: V,
                    handleSubscribe: $,
                    handleEmailVerification: O,
                    loading: B,
                    showSubscribed: U,
                    isSubscribedToArtist: I,
                    isEmailSet: P,
                    needsVerification: F
                }
            }
        },
        49328: function(e, t, i) {
            "use strict";
            i.d(t, {
                T: function() {
                    return SubscribeButton
                },
                b: function() {
                    return useIsSubscribedToArtist
                }
            });
            var a = i(16356),
                r = i(97352),
                s = i(58658),
                n = i(69598),
                o = i(6289),
                l = i(96301),
                c = i(75747),
                u = i(36750),
                d = i(3928),
                f = i(64398),
                m = i(42529),
                b = i(26475);
            (0, u.c)({
                trigger: [d.Mw2, d.SVu],
                refetch: [d.ggI]
            });
            let {
                useBatchedKey: x
            } = (0, b.y)({
                chunkLimit: 50
            });

            function useIsSubscribedToArtist(e) {
                let {
                    artistId: t
                } = e, i = x({
                    key: t
                }), {
                    isAuthenticatedWithAPI: a
                } = (0, l.aC)(), {
                    data: s,
                    isLoading: n
                } = (0, d.aM2)(d.ggI, {
                    variables: !!(null == i ? void 0 : i.length) && {
                        pagination: {
                            first: i.length
                        },
                        artists: i
                    },
                    keepPreviousData: a,
                    enabled: a,
                    staleTime: 0
                }), o = (0, r.useMemo)(() => {
                    var e;
                    return null !== (e = null == s ? void 0 : s.data.artistNotificationSubscriptions.edges.some(e => e.node.artistId === t)) && void 0 !== e && e
                }, [s, t]);
                return {
                    isSubscribedToArtist: o,
                    isSubscribedLoading: n
                }
            }
            let SubscribeButton = e => {
                let {
                    artistId: t,
                    userId: i,
                    artistName: r
                } = e, {
                    openToast: l
                } = (0, c.useToast)(), {
                    isSubscribedToArtist: u,
                    isSubscribedLoading: b
                } = useIsSubscribedToArtist({
                    artistId: t
                }), {
                    mutateAsync: x
                } = (0, d.Dbo)(d.c4R, {}), {
                    mutateAsync: h
                } = (0, d.Dbo)(d.Mw2, {}), {
                    mutateAsync: p
                } = (0, d.Dbo)(d.SVu, {}), v = (0, f.S)(), g = (0, m.R)(() => {
                    u ? p({
                        input: {
                            artists: [t]
                        }
                    }).then(() => {
                        l({
                            text: `Successfully unsubscribed ${r}`,
                            variant: "success"
                        })
                    }).catch(e => {
                        v({
                            action: s.pe.SUBSCRIBE_UNSUBSCRIBE_ERROR,
                            error: e,
                            errorType: s.QS.UNKNOWN,
                            isArtistOnlyPage: !1,
                            level: "error",
                            message: "Error calling unsubscribeToArtistMutation",
                            feature: s.h6.FOLLOW_SUBSCRIBE,
                            unindexedExtra: {
                                artistIdToSubscribeUnsubscribe: t
                            },
                            toast: `Error unsubscribing ${r}.`
                        })
                    }) : Promise.all([x({
                        input: {
                            user: i
                        }
                    }), h({
                        input: {
                            artist: t
                        }
                    })]).then(() => {
                        l({
                            text: `Successfully subscribed ${r}`,
                            variant: "success"
                        })
                    }).catch(e => {
                        (0, o.FQ)({
                            userId: i,
                            isFollowing: !1
                        }), v({
                            action: s.pe.SUBSCRIBE_UNSUBSCRIBE_ERROR,
                            error: e,
                            errorType: s.QS.UNKNOWN,
                            isArtistOnlyPage: !1,
                            level: "error",
                            message: "Error calling subscribeToArtistMutation",
                            feature: s.h6.FOLLOW_SUBSCRIBE,
                            unindexedExtra: {
                                artistIdToSubscribeUnsubscribe: t
                            },
                            toast: `Error subscribing ${r}.`
                        })
                    })
                });
                return (0, a.jsx)(n.z, {
                    className: "min-w-[81px]",
                    label: u ? "Subscribed" : "Get Notified",
                    variant: u ? "secondary" : "primary",
                    onClick: g,
                    size: "XS",
                    loading: b
                })
            }
        },
        54093: function(e, t, i) {
            "use strict";
            i.d(t, {
                T: function() {
                    return useInputContext
                },
                r: function() {
                    return r
                }
            });
            var a = i(97352);
            let r = a.createContext({
                error: !1,
                disabled: !1
            });

            function useInputContext() {
                let e = a.useContext(r);
                if (!e) throw Error("Input compound components cannot be rendered outside the Input component");
                return e
            }
        },
        92747: function(e, t, i) {
            "use strict";
            i.d(t, {
                II: function() {
                    return f
                },
                SP: function() {
                    return Root
                }
            });
            var a = i(16356),
                r = i(97352),
                s = i(72102),
                n = i(49542),
                o = i(53106),
                l = i(99808),
                c = i(6442),
                u = i(72720),
                d = i(54093);
            let Root = e => {
                    let {
                        children: t,
                        className: i,
                        ...r
                    } = e;
                    return (0, a.jsx)(d.r.Provider, {
                        value: { ...r
                        },
                        children: (0, a.jsx)("div", {
                            className: (0, n.default)(i || "flex w-full min-w-0 flex-col gap-y-1"),
                            children: t
                        })
                    })
                },
                f = r.forwardRef((e, t) => {
                    let {
                        hasError: i,
                        className: r,
                        ...s
                    } = e, {
                        error: o,
                        disabled: l
                    } = (0, d.T)();
                    return (0, a.jsx)("input", {
                        className: (0, n.default)("block w-full rounded-[6px] border-0 bg-base200 px-[11px] py-3 font-base text-base-m text-base800 transition-all", "outline-none ring-1 ring-inset ring-base200 placeholder:text-base500 focus:ring-2 focus:ring-inset focus:ring-base800", (s.disabled || l) && "cursor-not-allowed !bg-base50 text-base400 !ring-base50 disabled:cursor-not-allowed disabled:text-base400 hover:!bg-base50", i || o ? "bg-destructive50 ring-destructive50 focus:ring-destructive300 hover:ring-1 hover:ring-destructive200" : "hover:border-base300 hover:bg-base50 hover:ring-1", r),
                        ref: t,
                        disabled: s.disabled || l,
                        ...s
                    })
                });
            f.displayName = "Input", Root.Error = e => {
                let {
                    errorMessage: t
                } = e, {
                    error: i
                } = (0, d.T)();
                return i ? (0, a.jsxs)("p", {
                    className: "error font-base text-base-s text-destructive700",
                    children: [(0, a.jsx)(s.G, {
                        className: "mr-1",
                        icon: o.RL,
                        fontSize: 12
                    }), t]
                }) : null
            }, Root.Description = e => {
                let {
                    description: t
                } = e, {
                    error: i,
                    disabled: r
                } = (0, d.T)();
                return i ? null : (0, a.jsx)("p", {
                    className: (0, n.default)("font-base text-base-s", r ? "text-base500" : "text-base800"),
                    children: t
                })
            }, Root.Label = e => {
                let {
                    children: t,
                    name: i,
                    isEditable: r = !0,
                    tooltipContent: s
                } = e;
                return (0, a.jsxs)("label", {
                    htmlFor: i,
                    className: "flex items-center text-base-l font-semibold text-base800",
                    children: [t, "\xa0", r && s ? (0, a.jsx)(u.b, {
                        openOnClick: !1,
                        variant: "outlined",
                        size: 16,
                        portal: !0,
                        children: (0, a.jsx)(u.b.StyledContent, {
                            children: (0, a.jsx)(l._v, {
                                children: (0, a.jsx)("p", {
                                    children: s
                                })
                            })
                        })
                    }) : !r && (0, a.jsx)(c.m, {
                        size: "sm"
                    })]
                })
            }
        },
        30676: function(e, t, i) {
            "use strict";
            i.d(t, {
                j: function() {
                    return StandardModalButton
                }
            });
            var a = i(16356);
            i(97352);
            var r = i(8205),
                s = i(69598);
            let StandardModalButton = e => (0, a.jsx)(n, { ...e,
                    fullWidthAnchor: !!e.href
                }),
                n = (0, r.zo)(s.z, {
                    height: 44,
                    width: "100%",
                    maxWidth: "unset",
                    fontSize: "14px !important",
                    "@tablet": {
                        fontSize: "16px !important"
                    },
                    variants: {
                        isNotModalSmall: {
                            true: {
                                width: "initial",
                                maxWidth: "initial"
                            }
                        }
                    }
                })
        },
        47544: function(e, t, i) {
            "use strict";
            i.d(t, {
                J: function() {
                    return x
                },
                h: function() {
                    return ListeningPartyTooltip
                }
            });
            var a = i(16356),
                r = i(97352),
                s = i(72102),
                n = i(37320),
                o = i(73534),
                l = i(44361),
                c = i(11794),
                u = i(82287),
                d = i(8205),
                f = i(34524),
                m = i(77566);
            let b = {
                    xs: 32,
                    s: 40,
                    m: 48,
                    l: 60,
                    xl: 76,
                    xxl: 120
                },
                x = r.forwardRef(function(e, t) {
                    let {
                        playing: i,
                        loading: r,
                        color: n,
                        size: d,
                        elevated: f,
                        disabled: x,
                        onClick: y,
                        pseudo: C = !1,
                        rounded: N = !1,
                        currentListeningParty: j,
                        iconClassname: w,
                        contentClassname: E,
                        ...S
                    } = e, T = "white" === n ? r ? "hsla(0%,0%,0%,0.3)" : "black" : r ? "hsla(0,0%,100%,0.3)" : "white", M = b[d], k = (0, m.I)(), A = !!x || !!j, I = r && !A, L = k || A || r, R = (0, a.jsx)(C ? p : h, {
                        "data-testid": "play-button",
                        "aria-disabled": A,
                        disabled: L,
                        onClick: e => {
                            if (L) {
                                e.preventDefault(), e.stopPropagation();
                                return
                            }
                            null == y || y(e)
                        },
                        ref: t,
                        color: n,
                        tabIndex: -1,
                        ...S,
                        children: (0, a.jsxs)(v, {
                            className: (0, l.m)("play-button-container", E),
                            whileTap: {
                                scale: L || "transparent" === n ? 1 : .8
                            },
                            whileHover: {
                                scale: L || "transparent" === n ? 1 : .95
                            },
                            transition: {
                                type: "spring",
                                damping: 45,
                                stiffness: 1200
                            },
                            disabled: A,
                            loading: r,
                            elevated: f,
                            size: d,
                            color: n,
                            rounded: N,
                            ssr: k,
                            children: [(0, a.jsx)(g, {
                                style: {
                                    marginLeft: !i && N ? "4%" : 0
                                },
                                transition: {
                                    type: "spring",
                                    damping: 100,
                                    stiffness: 2600
                                },
                                animate: {
                                    color: "black" === n ? r ? "hsla(0,0%,100%,0.3)" : "hsla(0,0%,100%,1)" : r ? "hsla(0,0%,0%,0.3)" : "hsla(0,0%,0%,1)"
                                },
                                className: w,
                                children: i ? (0, a.jsx)(s.G, {
                                    className: "pause-icon",
                                    icon: c.XQ,
                                    color: T
                                }) : (0, a.jsx)(s.G, {
                                    className: "play-icon",
                                    icon: u.zc,
                                    color: T
                                })
                            }), (0, a.jsx)("svg", {
                                className: "loading-ring",
                                width: M,
                                height: M,
                                viewBox: `0 0 ${M} ${M}`,
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: (0, a.jsx)(o.E.rect, {
                                    x: "xxl" === d ? 28 : 4,
                                    y: "xxl" === d ? 28 : 4,
                                    width: "xxl" === d ? 65 : M - 8,
                                    height: "xxl" === d ? 65 : M - 8,
                                    rx: N ? b[d] : "4",
                                    strokeWidth: "4",
                                    stroke: "#fff",
                                    strokeLinejoin: "round",
                                    animate: {
                                        pathLength: I ? .25 : 0,
                                        pathSpacing: I ? .75 : 0,
                                        pathOffset: I ? [0, 2] : 0,
                                        stroke: "white" === n ? I ? "hsla(0,0%,0%,1)" : "hsla(0,0%,0%,0)" : I ? "hsla(0,0%,100%,1)" : "hsla(0,0%,100%,0)",
                                        strokeWidth: I ? .03 * M : 1,
                                        transition: {
                                            stroke: {
                                                duration: I ? .5 : 0
                                            },
                                            pathSpacing: {
                                                duration: I ? .5 : 0
                                            },
                                            strokeWidth: {
                                                duration: I ? .5 : 0
                                            },
                                            pathLength: {
                                                duration: I ? .5 : 0
                                            },
                                            pathOffset: {
                                                duration: I ? 1.5 : 0,
                                                repeat: I ? 1 / 0 : 0
                                            }
                                        }
                                    }
                                })
                            })]
                        })
                    });
                    return j ? (0, a.jsx)(ListeningPartyTooltip, {
                        listeningParty: j,
                        children: R
                    }) : R
                });

            function ListeningPartyTooltip(e) {
                let {
                    listeningParty: {
                        remaining: {
                            days: t,
                            hours: i,
                            minutes: r,
                            seconds: s
                        }
                    },
                    children: o
                } = e;
                return (0, a.jsxs)(f.Tooltip, {
                    openOnClick: !1,
                    children: [(0, a.jsx)(f.Tooltip.Trigger, {
                        asChild: !0,
                        children: o
                    }), (0, a.jsx)(n.f, {
                        children: (0, a.jsx)(f.Tooltip.StyledContent, {
                            align: "center",
                            className: "z-[9999]",
                            children: (0, a.jsxs)("p", {
                                className: "text-center",
                                children: ["Listening starts", (0, a.jsx)("br", {}), t ? `${t}d ` : "", i ? `${i}h ` : "", r ? `${r}m ` : "", s ? `${s}s` : "", (0, a.jsx)("br", {}), "\uD83C\uDF89 \uD83C\uDFA7\uD83D\uDD7A"]
                            })
                        })
                    })]
                })
            }
            let h = (0, d.zo)(o.E.button, {
                    position: "relative",
                    borderRadius: "$sm"
                }),
                p = (0, d.zo)(o.E.div, {
                    position: "relative"
                }),
                v = (0, d.zo)(o.E.div, {
                    borderRadius: 6,
                    padding: "0px, 1px, 0px, 1px",
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.2s ease-in-out",
                    variants: {
                        disabled: {
                            true: {
                                cursor: "not-allowed"
                            }
                        },
                        ssr: {
                            true: {
                                cursor: "not-allowed"
                            }
                        },
                        loading: {
                            true: {
                                cursor: "progress"
                            },
                            false: {
                                ".loading-ring": {
                                    display: "none"
                                }
                            }
                        },
                        rounded: {
                            true: {
                                borderRadius: "100%"
                            }
                        },
                        size: {
                            xs: {
                                width: b.xs,
                                height: b.xs,
                                ".play-icon, .pause-icon": {
                                    fontSize: 14
                                }
                            },
                            s: {
                                width: b.s,
                                height: b.s,
                                ".play-icon, .pause-icon": {
                                    fontSize: 16
                                }
                            },
                            m: {
                                width: b.m,
                                height: b.m,
                                ".play-icon, .pause-icon": {
                                    fontSize: 20
                                }
                            },
                            l: {
                                width: b.l,
                                height: b.l,
                                ".play-icon, .pause-icon": {
                                    fontSize: 24
                                }
                            },
                            xl: {
                                width: b.xl,
                                height: b.xl,
                                ".play-icon, .pause-icon": {
                                    fontSize: 32
                                }
                            },
                            xxl: {
                                width: b.xxl,
                                height: b.xxl,
                                ".play-icon, .pause-icon": {
                                    fontSize: 32
                                }
                            }
                        },
                        color: {
                            white: {
                                backgroundColor: "$white",
                                opacity: .9,
                                "&:hover": {
                                    opacity: 1
                                }
                            },
                            black: {
                                backgroundColor: "$neutral800",
                                "&:hover": {
                                    backgroundColor: "$black"
                                }
                            },
                            transparent: {
                                backgroundColor: "rgba(0,0,0,0.4)",
                                "&:hover": {
                                    backgroundColor: "rgba(0,0,0,0.6)"
                                }
                            }
                        },
                        elevated: {
                            true: {
                                lift: "high"
                            }
                        }
                    },
                    compoundVariants: [{
                        loading: !0,
                        rounded: !0,
                        css: {
                            borderRadius: "9999px"
                        }
                    }, {
                        loading: !0,
                        disabled: !0,
                        css: {
                            ".loading-ring": {
                                display: "none"
                            }
                        }
                    }, {
                        color: "black",
                        disabled: !0,
                        css: {
                            opacity: .3,
                            "&:hover": {
                                backgroundColor: "$neutral800"
                            }
                        }
                    }, {
                        color: "white",
                        disabled: !0,
                        css: {
                            opacity: .3,
                            "&:hover": {
                                backgroundColor: "$white",
                                opacity: .3
                            }
                        }
                    }],
                    defaultVariants: {
                        color: "black",
                        size: "xl"
                    }
                }),
                g = (0, d.zo)(o.E.div, {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                })
        },
        72720: function(e, t, i) {
            "use strict";
            i.d(t, {
                b: function() {
                    return InfoTooltip
                }
            });
            var a = i(16356);
            i(97352);
            var r = i(72102),
                s = i(49542),
                n = i(14095),
                o = i(65970),
                l = i(21922),
                c = i(34524);

            function InfoTooltip(e) {
                let {
                    variant: t = "filled",
                    inverted: i = !1,
                    portal: u = !1,
                    initialOpen: d = !1,
                    size: f = 18,
                    children: m,
                    delayCloseMs: b,
                    ...x
                } = e;
                return (0, a.jsxs)(c.Tooltip, {
                    defaultOpen: d,
                    delayCloseMs: b,
                    ...x,
                    children: [(0, a.jsx)(c.Tooltip.Trigger, {
                        tabIndex: -1,
                        children: (0, a.jsx)(l.h, {
                            className: (0, s.default)("focus:[&_svg]:text-black active:[&_svg]:text-black "),
                            variant: i ? "inverted" : "tertiary",
                            icon: (0, a.jsx)(r.G, {
                                icon: "outlined" === t ? n.DB : o.faCircleInfo
                            }),
                            size: f,
                            iconSize: f
                        })
                    }), u ? (0, a.jsx)(c.Tooltip.Portal, {
                        children: m
                    }) : m]
                })
            }
            InfoTooltip.StyledContent = e => {
                let {
                    children: t,
                    ...i
                } = e, {
                    className: r,
                    ...n
                } = i;
                return (0, a.jsx)(c.Tooltip.StyledContent, {
                    className: (0, s.default)("max-w-[240px] px-4 py-6 md:max-w-xs", r),
                    ...n,
                    children: t
                })
            }, InfoTooltip.Content = c.Tooltip.StyledContent
        },
        96281: function(e, t, i) {
            "use strict";
            i.d(t, {
                A: function() {
                    return EmailNotificationConfirmationModal
                },
                u: function() {
                    return EmailNotificationInputModal
                }
            });
            var a = i(16356),
                r = i(97352),
                s = i(72102),
                n = i(44361),
                o = i(69349),
                l = i(66871),
                c = i(32210),
                u = i(52537),
                d = i(39368),
                f = i(69530),
                m = i(92747),
                b = i(69598);
            let NotificationsCircle = e => {
                let {
                    className: t
                } = e;
                return (0, a.jsxs)("svg", {
                    width: "150",
                    height: "151",
                    viewBox: "0 0 150 151",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    className: t,
                    children: [(0, a.jsx)("path", {
                        d: "M125.627 79.727C125.627 59.7428 113.979 42.4675 97.0731 34.265M125.627 79.727C122.999 79.727 120.867 81.8485 120.867 84.4655C120.867 87.0824 122.998 89.2039 125.626 89.2039C128.254 89.2039 130.385 87.0824 130.385 84.4655C130.385 81.8485 128.256 79.727 125.627 79.727ZM74.8641 29.184C50.6426 29.184 30.3833 46.0742 25.3189 68.6707M24.9916 89.2039C29.4468 112.588 50.0815 130.27 74.8641 130.27C92.8671 130.27 108.681 120.939 117.694 106.869M108.273 80.9538C108.273 100.145 92.6475 115.702 73.3729 115.702C54.0982 115.702 38.473 100.145 38.473 80.9538C38.473 66.2206 47.6823 53.629 60.682 48.5743M73.3729 46.2055C88.3043 46.2055 101.046 55.5416 106.03 68.6707M28.8256 74.381C28.2145 76.9262 25.6468 78.4963 23.0904 77.8879C20.5341 77.2794 18.9572 74.7228 19.5683 72.1776C20.1794 69.6324 22.7471 68.0623 25.3034 68.6707C27.8597 69.2792 29.4367 71.8358 28.8256 74.381ZM95.5818 80.9538C95.5818 93.1663 85.6385 103.066 73.3729 103.066C61.1072 103.066 51.1639 93.1663 51.1639 80.9538C51.1639 68.7414 61.1072 58.8412 73.3729 58.8412C85.6385 58.8412 95.5818 68.7414 95.5818 80.9538Z",
                        stroke: "black",
                        strokeWidth: "0.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), (0, a.jsx)("path", {
                        d: "M74.75 72.25V73.0312C77.6016 73.6172 79.75 76.1172 79.75 79.125V79.8672C79.75 81.7031 80.4141 83.5 81.625 84.8672L81.8984 85.1797C82.25 85.5703 82.3281 86.0781 82.1328 86.5469C81.9375 86.9766 81.4688 87.25 81 87.25H66C65.4922 87.25 65.0234 86.9766 64.8281 86.5469C64.6328 86.0781 64.7109 85.5703 65.0625 85.1797L65.3359 84.8672C66.5469 83.5 67.25 81.7031 67.25 79.8672V79.125C67.25 76.1172 69.3594 73.6172 72.25 73.0312V72.25C72.25 71.5859 72.7969 71 73.5 71C74.1641 71 74.75 71.5859 74.75 72.25ZM73.5 91C72.8359 91 72.1719 90.7656 71.7031 90.2969C71.2344 89.8281 71 89.1641 71 88.5H76C76 89.1641 75.7266 89.8281 75.2578 90.2969C74.7891 90.7656 74.125 91 73.5 91Z",
                        fill: "black"
                    }), (0, a.jsx)("path", {
                        d: "M86.8276 18.5C86.9515 22.7623 90.384 26.1852 94.6467 26.297L95.046 26.3075L94.6467 26.3179C90.384 26.4298 86.9515 29.8526 86.8276 34.1149C86.7037 29.8526 83.2711 26.4298 79.0085 26.3179L78.6092 26.3075L79.0085 26.297C83.2711 26.1852 86.7037 22.7623 86.8276 18.5Z",
                        fill: "#1F1F1F"
                    }), (0, a.jsx)("path", {
                        d: "M11.2184 97.3966C11.3423 101.659 14.7748 105.082 19.0375 105.194L19.4368 105.204L19.0375 105.215C14.7748 105.326 11.3423 108.749 11.2184 113.012C11.0945 108.749 7.66195 105.326 3.39929 105.215L3 105.204L3.39929 105.194C7.66195 105.082 11.0945 101.659 11.2184 97.3966Z",
                        fill: "#1F1F1F"
                    }), (0, a.jsx)("path", {
                        d: "M135.316 103.149C135.477 108.758 139.992 113.263 145.601 113.412L146 113.422L145.601 113.433C139.992 113.582 135.477 118.087 135.316 123.695C135.155 118.087 130.64 113.582 125.031 113.433L124.632 113.422L125.031 113.412C130.64 113.263 135.155 108.758 135.316 103.149Z",
                        fill: "#1F1F1F"
                    })]
                })
            };
            var x = i(54668),
                h = i(30676),
                p = i(22181),
                v = i(75747),
                g = i(36750),
                y = i(3928),
                C = i(42529),
                N = i(85846);
            (0, g.c)({
                trigger: [y.Zc3, y.kgV],
                refetch: [y.WLz]
            });
            let EmailNotificationInputModal = e => {
                    let {
                        artistName: t,
                        onVerify: i
                    } = e, {
                        openToast: c
                    } = (0, v.useToast)(), {
                        closeCancelModal: h
                    } = (0, p.useModal)(), {
                        loading: g,
                        updateEmail: N,
                        updatingEmail: j,
                        status: w,
                        email: E
                    } = (0, u.T)(), {
                        fields: S,
                        setField: T,
                        clearErrors: M,
                        touched: k,
                        validate: A,
                        errors: I,
                        setError: L,
                        setAllFieldsTouched: R
                    } = (0, u.J)(), {
                        mutateAsync: z
                    } = (0, y.Dbo)(y.kgV, {}), _ = (0, C.R)(async () => {
                        try {
                            R();
                            let e = A();
                            if (!e) return;
                            await N({
                                email: e.email,
                                onVerify: i,
                                onClaimedError: () => {
                                    L("email", d.Sg.email.non_unique)
                                }
                            }), z({
                                enable: !0
                            })
                        } catch (e) {
                            c({
                                text: e instanceof Error ? e.message : "Unknown error",
                                variant: "error"
                            })
                        }
                    }), P = (0, C.R)(async () => {
                        try {
                            M(), T("email", ""), await N({
                                email: null,
                                onVerify: i
                            })
                        } catch (e) {
                            c({
                                text: e instanceof Error ? e.message : "Unknown error",
                                variant: "error"
                            })
                        }
                    }), F = (0, C.R)(() => t ? (0, a.jsxs)(a.Fragment, {
                        children: ["We'll let you know when ", t, " drops a new song."]
                    }) : (0, a.jsxs)(a.Fragment, {
                        children: ["We'll let you know when your", (0, a.jsx)("br", {}), "favorite artists drop a new song."]
                    })), U = (0, r.useMemo)(() => w === y.apY.Expired || w === y.apY.Pending, [w]), D = (0, r.useMemo)(() => "" === S.email || !k.email || !!I.email, [S.email, k.email, I.email]), O = (0, a.jsxs)("div", {
                        className: "flex flex-col items-center justify-center",
                        children: [(0, a.jsx)(NotificationsCircle, {
                            className: "hidden md:block"
                        }), (0, a.jsxs)("div", {
                            className: "mb-8 flex flex-col items-center justify-center gap-2",
                            children: [(0, a.jsx)("h2", {
                                className: "font-title text-title-l font-medium text-base800",
                                children: "Stay updated on new drops"
                            }), (0, a.jsx)("p", {
                                className: "text-base text-center text-base-l text-base800",
                                children: F()
                            })]
                        }), (0, a.jsxs)(m.SP, {
                            className: "flex w-full flex-col gap-y-2",
                            error: k.email && !!I.email,
                            disabled: g,
                            children: [(0, a.jsxs)("div", {
                                className: "mb-1 flex w-full items-stretch gap-x-2",
                                children: [(0, a.jsx)(m.II, {
                                    type: "email",
                                    value: S.email,
                                    placeholder: "Your Email Address",
                                    disabled: g || j || y.apY.Pending === w,
                                    onChange: e => {
                                        T("email", e.target.value, !0), A()
                                    }
                                }), U ? (0, a.jsx)(b.z, {
                                    label: "",
                                    onClick: P,
                                    variant: "tertiary",
                                    className: "h-auto self-stretch",
                                    size: "squared",
                                    loading: g || j,
                                    leadingIcon: (0, a.jsx)(s.G, {
                                        icon: l.$
                                    }),
                                    iconOnly: !0
                                }) : (0, a.jsxs)(a.Fragment, {
                                    children: [(0, a.jsx)(b.z, {
                                        label: "Verify",
                                        onClick: _,
                                        variant: "primary",
                                        className: "hidden w-24 min-w-[6rem] md:block",
                                        loading: g || j,
                                        disabled: D
                                    }), (0, a.jsx)(b.z, {
                                        label: "",
                                        onClick: _,
                                        variant: "primary",
                                        className: "md:hidden",
                                        loading: g || j,
                                        disabled: D,
                                        leadingIcon: (0, a.jsx)(s.G, {
                                            icon: o._t
                                        }),
                                        size: "squared",
                                        iconOnly: !0
                                    })]
                                })]
                            }), (0, a.jsx)(m.SP.Error, {
                                errorMessage: I.email || ""
                            }), !I.email && (0, a.jsx)("div", {
                                className: (0, n.m)("-mt-1 items-center font-base !text-base-s", g || E ? "text-base500" : "text-base800"),
                                children: (0, f._)({
                                    status: w
                                })
                            })]
                        })]
                    });
                    return (0, a.jsx)(x.Z, {
                        body: O,
                        closeModal: h,
                        size: "small"
                    })
                },
                EmailNotificationConfirmationModal = e => {
                    let {
                        email: t
                    } = e, {
                        closeCancelModal: i
                    } = (0, p.useModal)(), r = (0, a.jsx)("div", {
                        className: "flex flex-col items-center justify-center",
                        children: (0, a.jsxs)("div", {
                            className: "mt-2 flex flex-col items-center justify-center gap-2",
                            children: [(0, a.jsx)("h2", {
                                className: "text-center font-title text-title-l font-medium text-base800",
                                children: "Verify your email address"
                            }), (0, a.jsxs)("p", {
                                className: "text-center font-base text-base-l text-base800",
                                children: ["An email has been sent to ", t, "."]
                            }), (0, a.jsxs)("p", {
                                className: "mt-2 text-center font-base text-base-l text-base800",
                                children: ["Didn't receive our email?", (0, a.jsx)("br", {}), "Check your Spam folder or ", (0, a.jsx)(c.U, {
                                    confirmationModal: !0
                                })]
                            })]
                        })
                    });
                    return (0, a.jsx)(x.Z, {
                        body: r,
                        closeModal: i,
                        size: "small",
                        callToAction: (0, a.jsx)(h.j, {
                            label: "Close",
                            variant: "primary",
                            onClick: i
                        }),
                        backCallToAction: (0, a.jsx)(h.j, {
                            label: "Manage Settings",
                            variant: "secondary",
                            href: N.qy.NotificationsDashboard
                        })
                    })
                }
        },
        51020: function(e, t, i) {
            "use strict";
            i.d(t, {
                R: function() {
                    return useCurrentListeningParty
                },
                a: function() {
                    return usePlayButton
                }
            });
            var a = i(97352),
                r = i(76348),
                s = i(63424);
            i(96960);
            var n = i(19791),
                o = i(64328),
                l = i(96301),
                c = i(3928),
                u = i(58061);
            let usePrefetchAudioOnDelayedHover = e => {
                let {
                    hoverRef: t,
                    duration: i,
                    trackId: r
                } = e, s = (0, a.useRef)(), [n, l] = (0, a.useState)(!1), c = (0, o.w)({
                    trackId: r,
                    shouldFetch: n
                }), {
                    trackAudioUrl: d
                } = c;
                (0, a.useEffect)(() => {
                    let handleMouseEnter = () => {
                            s.current = setTimeout(() => {
                                l(!0)
                            }, i)
                        },
                        handleMouseLeave = () => {
                            clearTimeout(s.current)
                        },
                        e = t.current;
                    return e && (e.addEventListener("mouseenter", handleMouseEnter), e.addEventListener("mouseleave", handleMouseLeave)), () => {
                        e && (e.removeEventListener("mouseenter", handleMouseEnter), e.removeEventListener("mouseleave", handleMouseLeave)), clearTimeout(s.current)
                    }
                }, [t, i]), (0, a.useEffect)(() => {
                    d && n && (0, u.Qb)({
                        url: d
                    })
                }, [d, n, r])
            };
            var d = i(42529),
                f = i(81688),
                m = i(267),
                b = i(8776),
                x = i(94431),
                h = i(79491),
                p = i(3141);

            function useCurrentListeningParty(e) {
                let {
                    listeningParty: t,
                    releaseId: i,
                    onListeningPartyStart: r
                } = e, o = function(e) {
                    let {
                        listeningParty: t,
                        releaseId: i
                    } = e, {
                        authUserAddress: r,
                        authUser: o
                    } = (0, l.aC)(), u = null == o ? void 0 : o.id, d = null != t && t > Date.now(), f = null != t && t <= Date.now(), {
                        data: m
                    } = (0, c.aM2)(c.ogj, {
                        variables: !!i && !!u && {
                            userId: u,
                            releaseId: i
                        },
                        staleTime: 0,
                        select(e) {
                            var t;
                            return !!(null === (t = e.data.user) || void 0 === t ? void 0 : t.collectedReleases.edges.length)
                        },
                        enabled: d
                    }), {
                        data: b
                    } = (0, c.aM2)(c.t72, {
                        staleTime: 0,
                        variables: !!i && {
                            releaseId: i
                        },
                        select(e) {
                            var t;
                            return (0, n.CC)(null === (t = e.data.release) || void 0 === t ? void 0 : t.saleSchedules, e => null != e.merkleTreeRoot && (0, s.v)(e.merkleTreeRoot) && {
                                merkleTreeRoot: e.merkleTreeRoot,
                                startTimeMilliseconds: new Date(e.startTime).getTime()
                            })
                        },
                        enabled: null != t && null != r && d && !m
                    }), {
                        data: h
                    } = (0, c.Uq7)({
                        queryKey: (0, x.i)({
                            merkleTreeRoot: null == b ? void 0 : b.merkleTreeRoot,
                            userAddress: r
                        }),
                        enabled: !!b && !!r && d,
                        queryFn: () => (0, x.S)({
                            merkleTreeRoot: null == b ? void 0 : b.merkleTreeRoot,
                            userAddress: r
                        }),
                        select: e => e && (null == b ? void 0 : b.startTimeMilliseconds) != null ? b.startTimeMilliseconds : null
                    });
                    return (0, a.useMemo)(() => !t || f || m ? null : h && h < t ? h : t, [t, m, h, f])
                }({
                    listeningParty: t,
                    releaseId: i
                }), {
                    isRunning: u,
                    days: d,
                    hours: f,
                    minutes: m,
                    seconds: b
                } = (0, p.J7)({
                    expiryTimestamp: o || 1,
                    onExpire: r
                }), {
                    isReleasePresaved: v = !1
                } = (0, h.L)({
                    releaseId: i,
                    enabled: !!t && !!o && u
                });
                return (0, a.useMemo)(() => !u || null == o || v ? null : {
                    listeningParty: o,
                    remaining: {
                        days: d,
                        hours: f,
                        minutes: m,
                        seconds: b
                    }
                }, [u, d, f, m, b, o, v])
            }
            let usePlayButton = e => {
                var t;
                let i, {
                        isAlbum: s,
                        trackId: n,
                        releaseId: l,
                        playbackId: c,
                        audioSrc: x,
                        playlist: h,
                        playlistId: p,
                        isSecretPreviewPage: v = !1,
                        listeningParty: g,
                        onListeningPartyStart: y
                    } = e,
                    {
                        playing: C,
                        loading: N,
                        ready: j,
                        activeTrackId: w,
                        playbackId: E
                    } = (0, f.PZ)(),
                    S = (0, a.useRef)(null);
                usePrefetchAudioOnDelayedHover({
                    hoverRef: S,
                    trackId: n,
                    duration: 200
                }), i = c ? c === E : n === w;
                let T = (0, o.w)({
                        trackId: n,
                        shouldFetch: !1
                    }),
                    M = useCurrentListeningParty({
                        listeningParty: g,
                        releaseId: null != l ? l : null === (t = T.releaseInfo) || void 0 === t ? void 0 : t.id,
                        onListeningPartyStart: y
                    }),
                    k = !!M || !x && (!n || s),
                    A = (0, d.R)(async () => {
                        k || (v && C && j ? (0, m.ID)() : !i && (n || x) ? (p && n ? (0, u.iy)(p, n) : await (0, f.Db)({
                            trackId: n,
                            audioSrc: x,
                            playlist: h,
                            addToQueue: !p
                        }).catch(r.Tb), c && (0, b.s)(c), p || (0, b.Ev)(null, [])) : j && (0, m.ID)())
                    });
                return {
                    onPlayClick: A,
                    ref: S,
                    isLoading: i && N,
                    isPlaying: v ? C : i && C,
                    isDisabled: k,
                    currentListeningParty: M,
                    isActiveTrack: i
                }
            }
        },
        17589: function() {},
        85884: function() {}
    }
]);