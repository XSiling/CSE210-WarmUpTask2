(() => {
    "use strict";
    var e = ["val", "p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "cur", "cust", "page", "itms", "ref", "tn", "cuid", "iframe_url"],
        i = function() {
            function i(i, t, n) {
                void 0 === n && (n = {});
                var r, a, o = this;
                this.version = "1.0.0", this.pixelParams = {}, this._fire = function() {
                    o._addParamsToPixel(), o._generatePixelElement(), o._attachPixel()
                }, this._documentReady = function(e) {
                    var i;
                    "loading" != document.readyState ? e() : document.addEventListener ? document.addEventListener("DOMContentLoaded", e) : null === (i = null === document || void 0 === document ? void 0 : document.attachEvent) || void 0 === i || i.call(document, "onreadystatechange", (function() {
                        "complete" == document.readyState && e()
                    }))
                }, this._addParamsToPixel = function() {
                    Object.entries(o.pixelParams).forEach((function(e) {
                        var i = e[0],
                            t = e[1];
                        return o.pixelUrl.searchParams.append(i, String(t))
                    }))
                }, this._generatePixelElement = function() {
                    var e, i = null !== (e = document.querySelector('iframe[title="Adelphic Universal Pixel"]')) && void 0 !== e ? e : document.createElement("iframe"),
                        t = {
                            height: "0",
                            width: "0",
                            style: "display:none;visibility: hidden;",
                            src: o.pixelUrl.toString(),
                            title: "Adelphic Universal Pixel"
                        };
                    Object.entries(t).forEach((function(e) {
                        var t = e[0],
                            n = e[1];
                        return i.setAttribute(t, n)
                    })), o.pixel = i
                }, this._attachPixel = function() {
                    document.querySelector('iframe[title="Adelphic Universal Pixel"]') || setTimeout((function() {
                        var e;
                        o.pixel && (null === (e = document.querySelector("body")) || void 0 === e || e.appendChild(o.pixel))
                    }))
                }, this.pixelUrl = new URL(t), this.pixelParams.upid = i, this.pixelParams.cache_buster = Math.floor(Date.now() / 1e3), this.pixelParams.url = this.pixelParams.hasOwnProperty("iframe_url") ? this.pixelParams.iframe_url ? null === document || void 0 === document ? void 0 : document.location.href : null === (r = window.top) || void 0 === r ? void 0 : r.location.href : null === (a = window.top) || void 0 === a ? void 0 : a.location.href;
                for (var l = 0, d = Object.entries(n); l < d.length; l++) {
                    var c = d[l],
                        u = c[0],
                        s = c[1];
                    e.includes(u) && (this.pixelParams[u] = s)
                }
                void 0 === i && console.error("upid is required. upid is currently ".concat(i))
            }
            return i.prototype.fire = function() {
                this._documentReady(this._fire)
            }, i
        }();
    window.AdelphicUniversalPixel = i
})();