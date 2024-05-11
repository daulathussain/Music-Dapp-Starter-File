(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1410], {
        20243: function(n, e, a) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/user/[publicAddress]", function() {
                return a(31148)
            }])
        },
        71204: function(n, e, a) {
            "use strict";
            a.d(e, {
                h: function() {
                    return LoadingPage
                }
            });
            var i = a(16356);
            a(97352);
            var r = a(98910);
            let LoadingPage = () => (0, i.jsx)("div", {
                className: "flex h-full justify-center",
                children: (0, i.jsx)("div", {
                    className: "absolute top-1/2 -translate-y-1/2",
                    children: (0, i.jsx)(r.j, {
                        height: 80
                    })
                })
            })
        },
        98910: function(n, e, a) {
            "use strict";
            a.d(e, {
                j: function() {
                    return LoadingBars
                }
            });
            var i = a(16356);
            a(97352);
            var r = a(44361);
            let LoadingBar = n => {
                    let {
                        index: e,
                        className: a
                    } = n;
                    return (0, i.jsx)("div", {
                        className: (0, r.m)("h-1/2 w-[10%] rounded-[6px] bg-black", a, 0 === e && "animate-[loadingBar1_1.25s_infinite_linear_alternate]", (1 === e || 3 === e) && "animate-[loadingBar24_1.25s_infinite_linear_alternate]", 2 === e && "animate-[loadingBar3_1.25s_infinite_linear_alternate]", 4 === e && "animate-[loadingBar5_1.25s_infinite_linear_alternate]")
                    })
                },
                LoadingBars = n => {
                    let {
                        height: e,
                        className: a,
                        barClassName: t
                    } = n;
                    return (0, i.jsx)("div", {
                        style: e ? {
                            height: e
                        } : void 0,
                        className: (0, r.m)("flex aspect-square h-[50px] items-center justify-between", a),
                        children: Array.from({
                            length: 5
                        }).map((n, e) => (0, i.jsx)(LoadingBar, {
                            index: e,
                            className: null != t ? t : ""
                        }, e))
                    })
                }
        },
        31148: function(n, e, a) {
            "use strict";
            a.r(e), a.d(e, {
                __N_SSG: function() {
                    return t
                },
                default: function() {
                    return PublicUserProfile
                }
            });
            var i = a(16356);
            a(97352);
            var r = a(71204);
            a(3928);
            var t = !0;

            function PublicUserProfile() {
                return (0, i.jsx)(r.h, {})
            }
        }
    },
    function(n) {
        n.O(0, [4361, 9774, 2888, 179], function() {
            return n(n.s = 20243)
        }), _N_E = n.O()
    }
]);