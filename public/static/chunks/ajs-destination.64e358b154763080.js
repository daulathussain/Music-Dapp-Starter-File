"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9464], {
        58340: function(t, n, e) {
            e.d(n, {
                PO: function() {
                    return isPlainObject
                }
            });

            function isPlainObject(t) {
                return "object" === Object.prototype.toString.call(t).slice(8, -1).toLowerCase()
            }
        },
        92606: function(t, n, e) {
            e.d(n, {
                n: function() {
                    return isPlanEventEnabled
                }
            });

            function isPlanEventEnabled(t, n) {
                var e, i;
                return "boolean" == typeof(null == n ? void 0 : n.enabled) ? n.enabled : null === (i = null === (e = null == t ? void 0 : t.__default) || void 0 === e ? void 0 : e.enabled) || void 0 === i || i
            }
        },
        45061: function(t, n, e) {
            e.r(n), e.d(n, {
                LegacyDestination: function() {
                    return m
                },
                ajsDestinations: function() {
                    return ajsDestinations
                }
            });
            var i = e(43112),
                r = e(12013),
                a = e(11677),
                o = e(49963),
                s = e(80835),
                u = e(91269),
                c = e(58971),
                l = e(92606),
                d = e(41855),
                h = e(82786),
                f = e(37502),
                v = e(52096),
                g = e(37139),
                _ = e(89225),
                p = e(77711);

            function normalizeName(t) {
                return t.toLowerCase().replace(".", "").replace(/\s+/g, "-")
            }

            function obfuscatePathName(t, n) {
                return void 0 === n && (n = !1), n ? btoa(t).replace(/=/g, "") : void 0
            }
            var y = e(58340),
                isInstallableIntegration = function(t, n) {
                    var e, i = n.type,
                        r = n.bundlingStatus,
                        a = n.versionSettings,
                        o = "unbundled" !== r && ("browser" === i || (null === (e = null == a ? void 0 : a.componentTypes) || void 0 === e ? void 0 : e.includes("browser")));
                    return !t.startsWith("Segment") && "Iterable" !== t && o
                },
                isDisabledIntegration = function(t, n) {
                    var e = !1 === n.All && void 0 === n[t];
                    return !1 === n[t] || e
                },
                m = function() {
                    function LegacyDestination(t, n, e, r, a) {
                        void 0 === e && (e = {}), this.options = {}, this.type = "destination", this.middleware = [], this._ready = !1, this._initialized = !1, this.flushing = !1, this.name = t, this.version = n, this.settings = (0, i.__assign)({}, e), this.disableAutoISOConversion = r.disableAutoISOConversion || !1, this.integrationSource = a, this.settings.type && "browser" === this.settings.type && delete this.settings.type, this.options = r, this.buffer = r.disableClientPersistence ? new f.Z(4, []) : new v.$(4, "dest-".concat(t)), this.scheduleFlush()
                    }
                    return LegacyDestination.prototype.isLoaded = function() {
                        return this._ready
                    }, LegacyDestination.prototype.ready = function() {
                        var t;
                        return null !== (t = this.onReady) && void 0 !== t ? t : Promise.resolve()
                    }, LegacyDestination.prototype.load = function(t, n) {
                        var e;
                        return (0, i.__awaiter)(this, void 0, void 0, function() {
                            var r, a, o = this;
                            return (0, i.__generator)(this, function(s) {
                                switch (s.label) {
                                    case 0:
                                        if (this._ready || void 0 !== this.onReady) return [2];
                                        if (!(null !== (e = this.integrationSource) && void 0 !== e)) return [3, 1];
                                        return a = e, [3, 3];
                                    case 1:
                                        return [4, function(t, n, e, r) {
                                            return (0, i.__awaiter)(this, void 0, void 0, function() {
                                                var a, o, s, u, c;
                                                return (0, i.__generator)(this, function(l) {
                                                    switch (l.label) {
                                                        case 0:
                                                            o = obfuscatePathName(a = normalizeName(n), r), s = (0, _.Kg)(), u = "".concat(s, "/integrations/").concat(null != o ? o : a, "/").concat(e, "/").concat(null != o ? o : a, ".dynamic.js.gz"), l.label = 1;
                                                        case 1:
                                                            return l.trys.push([1, 3, , 4]), [4, (0, p.v)(u)];
                                                        case 2:
                                                            return l.sent(),
                                                                function(t, n, e) {
                                                                    var r, a;
                                                                    try {
                                                                        var o = (null !== (a = null === (r = null == window ? void 0 : window.performance) || void 0 === r ? void 0 : r.getEntriesByName(t, "resource")) && void 0 !== a ? a : [])[0];
                                                                        o && n.stats.gauge("legacy_destination_time", Math.round(o.duration), (0, i.__spreadArray)([e], o.duration < 100 ? ["cached"] : [], !0))
                                                                    } catch (t) {}
                                                                }(u, t, n), [3, 4];
                                                        case 3:
                                                            throw c = l.sent(), t.stats.gauge("legacy_destination_time", -1, ["plugin:".concat(n), "failed"]), c;
                                                        case 4:
                                                            return [4, Promise.all(window["".concat(a, "Deps")].map(function(t) {
                                                                return (0, p.v)(s + t + ".gz")
                                                            }))];
                                                        case 5:
                                                            return l.sent(), window["".concat(a, "Loader")](), [2, window["".concat(a, "Integration")]]
                                                    }
                                                })
                                            })
                                        }(t, this.name, this.version, this.options.obfuscate)];
                                    case 2:
                                        a = s.sent(), s.label = 3;
                                    case 3:
                                        r = a, this.integration = function(t, n, e) {
                                            if ("Integration" in t) {
                                                var i;
                                                t({
                                                    user: function() {
                                                        return e.user()
                                                    },
                                                    addIntegration: function() {}
                                                }), i = t.Integration
                                            } else i = t;
                                            var r = new i(n);
                                            return r.analytics = e, r
                                        }(r, this.settings, n), this.onReady = new Promise(function(t) {
                                            o.integration.once("ready", function() {
                                                o._ready = !0, t(!0)
                                            })
                                        }), this.onInitialize = new Promise(function(t) {
                                            o.integration.on("initialize", function() {
                                                o._initialized = !0, t(!0)
                                            })
                                        });
                                        try {
                                            t.stats.increment("analytics_js.integration.invoke", 1, ["method:initialize", "integration_name:".concat(this.name)]), this.integration.initialize()
                                        } catch (n) {
                                            throw t.stats.increment("analytics_js.integration.invoke.error", 1, ["method:initialize", "integration_name:".concat(this.name)]), n
                                        }
                                        return [2]
                                }
                            })
                        })
                    }, LegacyDestination.prototype.unload = function(t, n) {
                        return function(t, n, e) {
                            return (0, i.__awaiter)(this, void 0, void 0, function() {
                                var r, a, o, s;
                                return (0, i.__generator)(this, function(i) {
                                    return r = (0, _.Kg)(), a = normalizeName(t), o = obfuscatePathName(t, e), s = "".concat(r, "/integrations/").concat(null != o ? o : a, "/").concat(n, "/").concat(null != o ? o : a, ".dynamic.js.gz"), [2, (0, p.t)(s)]
                                })
                            })
                        }(this.name, this.version, this.options.obfuscate)
                    }, LegacyDestination.prototype.addMiddleware = function() {
                        for (var t, n = [], e = 0; e < arguments.length; e++) n[e] = arguments[e];
                        this.middleware = (t = this.middleware).concat.apply(t, n)
                    }, LegacyDestination.prototype.shouldBuffer = function(t) {
                        return "page" !== t.event.type && ((0, a.s)() || !1 === this._ready || !1 === this._initialized)
                    }, LegacyDestination.prototype.send = function(t, n, e) {
                        var r, a;
                        return (0, i.__awaiter)(this, void 0, void 0, function() {
                            var o, u, c, d, h, f;
                            return (0, i.__generator)(this, function(v) {
                                switch (v.label) {
                                    case 0:
                                        if (this.shouldBuffer(t)) return this.buffer.push(t), this.scheduleFlush(), [2, t];
                                        if (o = null === (a = null === (r = this.options) || void 0 === r ? void 0 : r.plan) || void 0 === a ? void 0 : a.track, u = t.event.event, o && u && "Segment.io" !== this.name) {
                                            if (c = o[u], !(0, l.n)(o, c)) return t.updateEvent("integrations", (0, i.__assign)((0, i.__assign)({}, t.event.integrations), {
                                                All: !1,
                                                "Segment.io": !0
                                            })), t.cancel(new s.Y({
                                                retry: !1,
                                                reason: "Event ".concat(u, " disabled for integration ").concat(this.name, " in tracking plan"),
                                                type: "Dropped by plan"
                                            })), [2, t];
                                            if (t.updateEvent("integrations", (0, i.__assign)((0, i.__assign)({}, t.event.integrations), null == c ? void 0 : c.integrations)), (null == c ? void 0 : c.enabled) && (null == c ? void 0 : c.integrations[this.name]) === !1) return t.cancel(new s.Y({
                                                retry: !1,
                                                reason: "Event ".concat(u, " disabled for integration ").concat(this.name, " in tracking plan"),
                                                type: "Dropped by plan"
                                            })), [2, t]
                                        }
                                        return [4, (0, g.applyDestinationMiddleware)(this.name, t.event, this.middleware)];
                                    case 1:
                                        if (null === (d = v.sent())) return [2, t];
                                        h = new n(d, {
                                            traverse: !this.disableAutoISOConversion
                                        }), t.stats.increment("analytics_js.integration.invoke", 1, ["method:".concat(e), "integration_name:".concat(this.name)]), v.label = 2;
                                    case 2:
                                        if (v.trys.push([2, 5, , 6]), !this.integration) return [3, 4];
                                        return [4, this.integration.invoke.call(this.integration, e, h)];
                                    case 3:
                                        v.sent(), v.label = 4;
                                    case 4:
                                        return [3, 6];
                                    case 5:
                                        throw f = v.sent(), t.stats.increment("analytics_js.integration.invoke.error", 1, ["method:".concat(e), "integration_name:".concat(this.name)]), f;
                                    case 6:
                                        return [2, t]
                                }
                            })
                        })
                    }, LegacyDestination.prototype.track = function(t) {
                        return (0, i.__awaiter)(this, void 0, void 0, function() {
                            return (0, i.__generator)(this, function(n) {
                                return [2, this.send(t, r.Track, "track")]
                            })
                        })
                    }, LegacyDestination.prototype.page = function(t) {
                        var n;
                        return (0, i.__awaiter)(this, void 0, void 0, function() {
                            var e = this;
                            return (0, i.__generator)(this, function(i) {
                                return (null === (n = this.integration) || void 0 === n ? void 0 : n._assumesPageview) && !this._initialized && this.integration.initialize(), [2, this.onInitialize.then(function() {
                                    return e.send(t, r.Page, "page")
                                })]
                            })
                        })
                    }, LegacyDestination.prototype.identify = function(t) {
                        return (0, i.__awaiter)(this, void 0, void 0, function() {
                            return (0, i.__generator)(this, function(n) {
                                return [2, this.send(t, r.Identify, "identify")]
                            })
                        })
                    }, LegacyDestination.prototype.alias = function(t) {
                        return (0, i.__awaiter)(this, void 0, void 0, function() {
                            return (0, i.__generator)(this, function(n) {
                                return [2, this.send(t, r.Alias, "alias")]
                            })
                        })
                    }, LegacyDestination.prototype.group = function(t) {
                        return (0, i.__awaiter)(this, void 0, void 0, function() {
                            return (0, i.__generator)(this, function(n) {
                                return [2, this.send(t, r.Group, "group")]
                            })
                        })
                    }, LegacyDestination.prototype.scheduleFlush = function() {
                        var t = this;
                        this.flushing || setTimeout(function() {
                            return (0, i.__awaiter)(t, void 0, void 0, function() {
                                var t;
                                return (0, i.__generator)(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return this.flushing = !0, t = this, [4, function(t, n) {
                                                return (0, i.__awaiter)(this, void 0, void 0, function() {
                                                    var e, r = this;
                                                    return (0, i.__generator)(this, function(s) {
                                                        switch (s.label) {
                                                            case 0:
                                                                if (e = [], (0, a.s)()) return [2, n];
                                                                return [4, (0, h.x)(function() {
                                                                    return n.length > 0 && (0, a.G)()
                                                                }, function() {
                                                                    return (0, i.__awaiter)(r, void 0, void 0, function() {
                                                                        var r;
                                                                        return (0, i.__generator)(this, function(i) {
                                                                            switch (i.label) {
                                                                                case 0:
                                                                                    if (!(r = n.pop())) return [2];
                                                                                    return [4, (0, c.a)(r, t)];
                                                                                case 1:
                                                                                    return i.sent() instanceof o._ || e.push(r), [2]
                                                                            }
                                                                        })
                                                                    })
                                                                })];
                                                            case 1:
                                                                return s.sent(), e.map(function(t) {
                                                                    return n.pushWithBackoff(t)
                                                                }), [2, n]
                                                        }
                                                    })
                                                })
                                            }(this, this.buffer)];
                                        case 1:
                                            return t.buffer = n.sent(), this.flushing = !1, this.buffer.todo > 0 && this.scheduleFlush(), [2]
                                    }
                                })
                            })
                        }, 5e3 * Math.random())
                    }, LegacyDestination
                }();

            function ajsDestinations(t, n, e, r, a) {
                if (void 0 === n && (n = {}), void 0 === e && (e = {}), (0, u.s)()) return [];
                t.plan && ((e = null != e ? e : {}).plan = t.plan);
                var o, s, c = null !== (s = null === (o = t.middlewareSettings) || void 0 === o ? void 0 : o.routingRules) && void 0 !== s ? s : [],
                    l = t.integrations,
                    h = e.integrations,
                    f = (0, d.o)(t, null != e ? e : {}),
                    v = null == a ? void 0 : a.reduce(function(t, n) {
                        var e;
                        return (0, i.__assign)((0, i.__assign)({}, t), ((e = {})[("Integration" in n ? n.Integration : n).prototype.name] = n, e))
                    }, {});
                return Array.from(new Set((0, i.__spreadArray)((0, i.__spreadArray)([], Object.keys(l).filter(function(t) {
                    return isInstallableIntegration(t, l[t])
                }), !0), Object.keys(v || {}).filter(function(t) {
                    return (0, y.PO)(l[t]) || (0, y.PO)(null == h ? void 0 : h[t])
                }), !0))).filter(function(t) {
                    return !isDisabledIntegration(t, n)
                }).map(function(t) {
                    var n, i, a, o, s, u = null !== (s = null !== (a = null === (i = null == (n = l[t]) ? void 0 : n.versionSettings) || void 0 === i ? void 0 : i.override) && void 0 !== a ? a : null === (o = null == n ? void 0 : n.versionSettings) || void 0 === o ? void 0 : o.version) && void 0 !== s ? s : "latest",
                        d = new m(t, u, f[t], e, null == v ? void 0 : v[t]);
                    return c.filter(function(n) {
                        return n.destinationName === t
                    }).length > 0 && r && d.addMiddleware(r), d
                })
            }
        }
    }
]);