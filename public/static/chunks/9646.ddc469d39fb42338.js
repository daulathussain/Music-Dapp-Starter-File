"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9646], {
        59646: function(t, e, r) {
            r.r(e), r.d(e, {
                SoundStatsigProvider: function() {
                    return SoundStatsigProvider
                }
            });
            var i = r(16356),
                n = r(97352),
                s = r(78608),
                o = r(82443),
                a = r(43633),
                u = r(85846),
                d = r(60265);
            let v = {
                api: "https://kokosh.sound.xyz/v1/",
                environment: {
                    tier: o.Gv
                }
            };

            function SoundStatsigProvider(t) {
                let {
                    children: e
                } = t, {
                    user: r
                } = (0, a.vG)(), {
                    feature_gates: o
                } = (0, d.UO)();
                return (0, n.useEffect)(() => {
                    if (s.Statsig.removeGateOverride(), !o || u.JC) return;
                    let t = o.split(",");
                    return t.forEach(t => {
                        let [e, r] = t.split(":");
                        e && r && s.Statsig.overrideGate(e, "1" === r)
                    }), () => s.Statsig.removeGateOverride()
                }, [o]), (0, i.jsx)(s.StatsigProvider, {
                    sdkKey: "client-WyTMblfQNdDzbRSjIOXMGvHcybDqIKwrnCEfPPawUW0",
                    waitForInitialization: !1,
                    user: r,
                    options: v,
                    children: e
                })
            }
        }
    }
]);