"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7493], {
        92606: function(n, e, t) {
            t.d(e, {
                n: function() {
                    return isPlanEventEnabled
                }
            });

            function isPlanEventEnabled(n, e) {
                var t, i;
                return "boolean" == typeof(null == e ? void 0 : e.enabled) ? e.enabled : null === (i = null === (t = null == n ? void 0 : n.__default) || void 0 === t ? void 0 : t.enabled) || void 0 === i || i
            }
        },
        13938: function(n, e, t) {
            t.r(e), t.d(e, {
                schemaFilter: function() {
                    return schemaFilter
                }
            });
            var i = t(43112),
                r = t(92606);

            function schemaFilter(n, e) {
                function filter(t) {
                    var a = t.event.event;
                    if (n && a) {
                        var o = n[a];
                        if ((0, r.n)(n, o)) {
                            var s = function(n, e) {
                                if (!n || !Object.keys(n)) return {};
                                var t, i, r = n.integrations ? Object.keys(n.integrations).filter(function(e) {
                                        return !1 === n.integrations[e]
                                    }) : [],
                                    a = [];
                                return (null !== (t = e.remotePlugins) && void 0 !== t ? t : []).forEach(function(n) {
                                    r.forEach(function(e) {
                                        (n.name.includes(e) || e.includes(n.name)) && a.push(n.name)
                                    })
                                }), (null !== (i = e.remotePlugins) && void 0 !== i ? i : []).reduce(function(n, e) {
                                    return e.settings.subscriptions && a.includes(e.name) && e.settings.subscriptions.forEach(function(t) {
                                        return n["".concat(e.name, " ").concat(t.partnerAction)] = !1
                                    }), n
                                }, {})
                            }(o, e);
                            t.updateEvent("integrations", (0, i.__assign)((0, i.__assign)((0, i.__assign)({}, t.event.integrations), null == o ? void 0 : o.integrations), s))
                        } else t.updateEvent("integrations", (0, i.__assign)((0, i.__assign)({}, t.event.integrations), {
                            All: !1,
                            "Segment.io": !0
                        }))
                    }
                    return t
                }
                return {
                    name: "Schema Filter",
                    version: "0.1.0",
                    isLoaded: function() {
                        return !0
                    },
                    load: function() {
                        return Promise.resolve()
                    },
                    type: "before",
                    page: filter,
                    alias: filter,
                    track: filter,
                    identify: filter,
                    group: filter
                }
            }
        }
    }
]);