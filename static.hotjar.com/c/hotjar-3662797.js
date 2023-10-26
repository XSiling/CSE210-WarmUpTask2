window.hjSiteSettings = window.hjSiteSettings || {
    "site_id": 3662797,
    "rec_value": 0.08,
    "state_change_listen_mode": "automatic",
    "record": true,
    "continuous_capture_enabled": true,
    "recording_capture_keystrokes": true,
    "session_capture_console_consent": true,
    "anonymize_digits": true,
    "anonymize_emails": true,
    "suppress_all": false,
    "suppress_all_on_specific_pages": [],
    "suppress_text": false,
    "suppress_location": false,
    "user_attributes_enabled": false,
    "legal_name": null,
    "privacy_policy_url": null,
    "deferred_page_contents": [],
    "record_targeting_rules": [],
    "feedback_widgets": [],
    "heatmaps": [],
    "polls": [],
    "integrations": {
        "optimizely": {
            "tag_recordings": false
        },
        "abtasty": {
            "tag_recordings": false
        },
        "kissmetrics": {
            "send_user_id": false
        },
        "mixpanel": {
            "send_events": false
        },
        "unbounce": {
            "tag_recordings": false
        },
        "google_optimize": {
            "tag_recordings": false
        },
        "hubspot": {
            "enabled": false,
            "send_recordings": false,
            "send_surveys": false
        }
    },
    "features": ["settings.billing_v2", "survey.embeddable_widget", "feedback.embeddable_widget", "client_script.serialization.async", "client_script.compression.pc", "sessionizer_beta_enabled", "ask.separate_service", "survey.image_question", "heatmap.continuous.manual_retaker", "survey.type_button", "error_reporting", "feedback.widgetV2"],
    "tracking_code_verified": true
};

! function(e) {
    var t = {};

    function r(n) {
        if (t[n]) return t[n].exports;
        var i = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(i.exports, i, i.exports, r), i.l = !0, i.exports
    }
    r.m = e, r.c = t, r.d = function(e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, r.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, r.t = function(e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var i in e) r.d(n, i, function(t) {
                return e[t]
            }.bind(null, i));
        return n
    }, r.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return r.d(t, "a", t), t
    }, r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "", r(r.s = 256)
}({
    256: function(e, t, r) {
        "use strict";

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        r.r(t);
        var o, a = function() {
            function e(t) {
                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e3;
                n(this, e), this.send = t, this.batchSize = r, this.flushInterval = i, this.buffer = [], this.flushTimer = null
            }
            var t, r, o;
            return t = e, (r = [{
                key: "getBuffer",
                value: function() {
                    return this.buffer
                }
            }, {
                key: "add",
                value: function(e) {
                    var t = this;
                    this.buffer.push(e), this.buffer.length >= this.batchSize ? this.flush() : this.flushTimer || (this.flushTimer = setTimeout((function() {
                        t.flush()
                    }), this.flushInterval))
                }
            }, {
                key: "flush",
                value: function() {
                    this.buffer.length > 0 && (this.send(this.buffer), this.buffer = []), this.flushTimer && (clearTimeout(this.flushTimer), this.flushTimer = null)
                }
            }]) && i(t.prototype, r), o && i(t, o), e
        }();

        function s(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), r.push.apply(r, n)
            }
            return r
        }

        function u(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? s(Object(r), !0).forEach((function(t) {
                    c(e, t, r[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }))
            }
            return e
        }

        function c(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r, e
        }
        var l, f = function() {
                try {
                    return "performance" in window && "now" in window.performance
                } catch (e) {
                    return !1
                }
            },
            d = {
                version: 6,
                metricsUrl: (null === (o = window._hjSettings) || void 0 === o ? void 0 : o.metricsUrl) || "https://metrics.hotjar.io",
                sampling: {
                    metrics: .1,
                    fieldMetrics: .01,
                    debug: .5,
                    universalDebug: .05 * .1
                },
                browser: {
                    hasPerformance: !1,
                    shouldLogMetrics: !1,
                    inLab: !1
                },
                buffer: {
                    bufferSize: 40,
                    flushInterval: 3e3
                }
            },
            h = {
                isDebugEnabled: !1,
                isMetricsEnabled: !1,
                isFieldMetricsEnabled: !1,
                loggedMetrics: {},
                genericTags: {}
            },
            g = function(e, t, r) {
                h.loggedMetrics[e] = u(u({}, h.loggedMetrics[e]), {}, c({}, t, r || {}))
            },
            b = function(e) {
                if (!e) return "value";
                var t = Object.keys(e)[0];
                return t && e[t] || "value"
            },
            p = function(e) {
                var t, r = null !== (t = e.tag) && void 0 !== t ? t : void 0;
                return h.isDebugEnabled ? u(u(u({}, r), e.extraTags), h.genericTags) : r
            },
            v = function(e, t) {
                if (!l) return !1;
                var r = h.isMetricsEnabled || h.isDebugEnabled;
                return "lab" === e && (r = d.browser.inLab), "field" === e && (r = h.isFieldMetricsEnabled), t ? r && t.flush : r
            },
            m = function(e) {
                var t = !1,
                    r = "v=".concat(d.version),
                    n = h.isDebugEnabled ? "".concat(d.metricsUrl, "?").concat(r, "&debug=true") : "".concat(d.metricsUrl, "?").concat(r),
                    i = JSON.stringify(e);
                if ("sendBeacon" in navigator) try {
                    t = navigator.sendBeacon.bind(navigator)(n, i)
                } catch (e) {}
                if (!1 === t) try {
                    var o = new XMLHttpRequest;
                    o.open("POST", n), o.timeout = 1e4, o.send(i)
                } catch (e) {}
                d.browser.shouldLogMetrics && console.debug("New Metrics: ", e)
            },
            w = {
                getConfig: function(e) {
                    return d[e]
                },
                getState: function(e) {
                    return h[e]
                },
                start: function() {
                    try {
                        d.browser = {
                            hasPerformance: f(),
                            shouldLogMetrics: /hjMetrics=1/.test(location.search),
                            inLab: /hjLab=true/.test(location.search)
                        };
                        var e = w.time(),
                            t = window.hjSiteSettings || {},
                            r = t.features,
                            n = t.site_id,
                            i = new Set(r),
                            o = d.sampling;
                        return h.genericTags = {
                            site_id: n
                        }, h.isDebugEnabled = Math.random() <= o.universalDebug || i.has("client_script.metrics.debug") && Math.random() <= o.debug, h.isMetricsEnabled = Math.random() <= o.metrics, h.isFieldMetricsEnabled = h.isMetricsEnabled && Math.random() <= o.fieldMetrics, l = new a(m, d.buffer.bufferSize, d.buffer.flushInterval), e
                    } catch (e) {
                        console.debug("Error in metrics.start", {
                            error: e
                        })
                    }
                },
                reset: function() {
                    h.loggedMetrics = {}
                },
                stop: function() {
                    h.isDebugEnabled = !1, h.isMetricsEnabled = !1, h.genericTags = {}
                },
                count: function(e, t) {
                    var r = t.incr,
                        n = t.tag,
                        i = t.extraTags,
                        o = t.type;
                    try {
                        var a = b(n),
                            s = h.loggedMetrics[e],
                            f = 0;
                        if (r) f = (s && s[a] || 0) + (r.value || 1), h.loggedMetrics[e] = u(u({}, s), {}, c({}, a, (null == r ? void 0 : r.flush) ? 0 : f));
                        else f = 1;
                        if (v(o, r)) {
                            var d = {
                                name: e,
                                type: "count",
                                value: f,
                                tags: p({
                                    tag: n,
                                    extraTags: i
                                })
                            };
                            l.add(d)
                        }
                    } catch (e) {}
                },
                distr: function(e, t) {
                    var r = t.task,
                        n = t.value,
                        i = t.extraTags;
                    v() && l.add({
                        name: e,
                        type: "distribution",
                        value: n,
                        tags: p({
                            tag: {
                                task: r
                            },
                            extraTags: i
                        })
                    })
                },
                time: function() {
                    try {
                        if (!d.browser.hasPerformance) return;
                        return performance.now()
                    } catch (e) {}
                },
                timeEnd: function(e, t) {
                    var r = t.tag,
                        n = t.start,
                        i = t.total,
                        o = t.extraTags,
                        a = t.type;
                    try {
                        var s = w.time();
                        if (!i && !s) return;
                        var u = b(r),
                            c = i || (n && s ? s - n : void 0);
                        if (g(e, u, {}), c && c > 0 && v(a)) {
                            var f = {
                                name: e,
                                type: "distribution",
                                value: Math.round(c),
                                tags: p({
                                    tag: r,
                                    extraTags: o
                                })
                            };
                            l.add(f)
                        }
                        return s
                    } catch (t) {
                        console.debug("Failed to send timer metric: ", {
                            name: e,
                            tag: r,
                            error: t
                        })
                    }
                },
                timeIncr: function(e, t) {
                    var r, n, i, o, a = t.tag,
                        s = t.start,
                        u = t.flush,
                        c = t.extraTags,
                        l = t.type,
                        f = hj.metrics.time(),
                        d = s && f ? f - s : void 0,
                        p = (r = e, n = b(a), i = h.loggedMetrics[r], o = i && i[n] || {}, {
                            tagName: n,
                            start: o.start,
                            total: o.total
                        }),
                        v = d ? d + (p.total || 0) : p.total;
                    return g(e, p.tagName, {
                        total: v
                    }), u && w.timeEnd(e, {
                        tag: a,
                        total: v,
                        extraTags: c,
                        type: l
                    }), v
                },
                timeWatcher: function() {
                    var e, t = 0,
                        r = !1,
                        n = function() {
                            var r, n = w.time();
                            return t += null !== (r = e && n && n - e) && void 0 !== r ? r : 0, e = w.time(), t
                        };
                    return {
                        start: function() {
                            if (!r) return r = !0, e = w.time()
                        },
                        incr: n,
                        end: function() {
                            var r = n();
                            return t = 0, e = void 0, r
                        }
                    }
                },
                getErrorMessage: function(e) {
                    return e instanceof Error ? e.message : "string" == typeof e ? e : ""
                }
            };
        window.hj = window.hj || function() {
            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            (window.hj.q = window.hj.q || []).push(t)
        }, window.hj.metrics = w;
        var j = hj.metrics.start();
        window.hjBootstrap = window.hjBootstrap || function(e, t, r) {
            var n, i = new RegExp("bot|google|headless|baidu|bing|msn|duckduckbot|teoma|slurp|yandex|phantomjs|pingdom|ahrefsbot", "i"),
                o = (null === (n = window.navigator) || void 0 === n ? void 0 : n.userAgent) || "unknown";
            if (i.test(o)) return hj.metrics.count("session-rejection", {
                tag: {
                    reason: "bot"
                }
            }), void console.warn("Hotjar not launching due to suspicious userAgent:", o);
            var a = "http:" === window.location.protocol,
                s = Boolean(window._hjSettings.preview);
            if (a && !s) return hj.metrics.count("session-rejection", {
                tag: {
                    reason: "https"
                }
            }), void console.warn("For security reasons, Hotjar only works over HTTPS. Learn more: https://help.hotjar.com/hc/en-us/articles/115011624047");
            var u = function(e, t, r) {
                window.hjBootstrapCalled = (window.hjBootstrapCalled || []).concat(r), window.hj && window.hj._init && window.hj._init._verifyInstallation && hj._init._verifyInstallation()
            };
            u(0, 0, r);
            var c = window.document,
                l = c.head || c.getElementsByTagName("head")[0];
            hj.scriptDomain = e;
            var f = c.createElement("script");
            f.async = 1, f.src = hj.scriptDomain + t, f.charset = "utf-8", l.appendChild(f), u.revision = "5fdda65", window.hjBootstrap = u
        }, window.hjBootstrap("https://script.hotjar.com/", "modules.572edf1d8f693274cc37.js", "3662797"), hj.metrics.timeEnd("resource-blocking-time", {
            tag: {
                resource: "hotjar-js"
            },
            start: j,
            type: "lab"
        }), window.hjLazyModules = window.hjLazyModules || {
            SURVEY_V2: {
                js: "survey-v2.13acfb6cf5736d3266bd.js"
            },
            SURVEY_BOOTSTRAPPER: {
                js: "survey-bootstrapper.608d1511597165c54526.js"
            },
            SURVEY_ISOLATED: {
                js: "survey-isolated.111e5f7f178348006e89.js"
            },
            HEATMAP_RETAKER: {
                js: "heatmap-retaker.371ac1f685846a8e6844.js"
            },
            SURVEY_INVITATION: {
                js: "survey-invitation.d1acd6d9e9b26bc497b0.js"
            },
            NOTIFICATION: {
                js: "notification.73bd9fa0263993510b18.js"
            },
            INCOMING_FEEDBACK: {
                js: "incoming-feedback.ccdf69ba91fcb7f8ebfc.js"
            },
            PREACT_INCOMING_FEEDBACK: {
                js: "preact-incoming-feedback.2abaaf4a04b87c4a2489.js"
            },
            SENTRY: {
                js: "sentry.69b8207d57a501b75bf9.js"
            },
            BROWSER_PERF: {
                js: "browser-perf.4cf3e41a74c17666489f.js"
            }
        }
    }
});