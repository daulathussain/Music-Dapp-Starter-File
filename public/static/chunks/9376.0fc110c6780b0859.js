(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9376], {
        57772: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CoinbaseWalletSDK = void 0;
            let i = n(78087),
                o = n(67467),
                a = n(13702),
                l = n(28255),
                c = n(96132),
                u = n(98453),
                R = n(96734),
                N = n(88355),
                H = n(10044),
                U = n(36692),
                W = n(28343);
            let CoinbaseWalletSDK = class CoinbaseWalletSDK {
                constructor(e) {
                    var t, n, i;
                    this._appName = "", this._appLogoUrl = null, this._relay = null, this._relayEventManager = null;
                    let c = e.linkAPIUrl || o.LINK_API_URL;
                    void 0 === e.overrideIsMetaMask ? this._overrideIsMetaMask = !1 : this._overrideIsMetaMask = e.overrideIsMetaMask, this._overrideIsCoinbaseWallet = null === (t = e.overrideIsCoinbaseWallet) || void 0 === t || t, this._overrideIsCoinbaseBrowser = null !== (n = e.overrideIsCoinbaseBrowser) && void 0 !== n && n, this._diagnosticLogger = e.diagnosticLogger, this._reloadOnDisconnect = null === (i = e.reloadOnDisconnect) || void 0 === i || i;
                    let J = new URL(c),
                        Q = `${J.protocol}//${J.host}`;
                    if (this._storage = new l.ScopedLocalStorage(`-walletlink:${Q}`), this._storage.setItem("version", CoinbaseWalletSDK.VERSION), this.walletExtension || this.coinbaseBrowser) return;
                    this._relayEventManager = new N.RelayEventManager;
                    let Z = (0, a.isMobileWeb)(),
                        Y = e.uiConstructor || (e => Z ? new R.MobileRelayUI(e) : new H.WalletLinkRelayUI(e)),
                        K = {
                            linkAPIUrl: c,
                            version: W.LIB_VERSION,
                            darkMode: !!e.darkMode,
                            uiConstructor: Y,
                            storage: this._storage,
                            relayEventManager: this._relayEventManager,
                            diagnosticLogger: this._diagnosticLogger,
                            reloadOnDisconnect: this._reloadOnDisconnect,
                            enableMobileWalletLink: e.enableMobileWalletLink
                        };
                    if (this._relay = Z ? new u.MobileRelay(K) : new U.WalletLinkRelay(K), this.setAppInfo(e.appName, e.appLogoUrl), e.headlessMode) return;
                    this._relay.attachUI()
                }
                makeWeb3Provider(e = "", t = 1) {
                    let n = this.walletExtension;
                    if (n) return this.isCipherProvider(n) || n.setProviderInfo(e, t), !1 === this._reloadOnDisconnect && "function" == typeof n.disableReloadOnDisconnect && n.disableReloadOnDisconnect(), n;
                    let i = this.coinbaseBrowser;
                    if (i) return i;
                    let o = this._relay;
                    if (!o || !this._relayEventManager || !this._storage) throw Error("Relay not initialized, should never happen");
                    return e || o.setConnectDisabled(!0), new c.CoinbaseWalletProvider({
                        relayProvider: () => Promise.resolve(o),
                        relayEventManager: this._relayEventManager,
                        storage: this._storage,
                        jsonRpcUrl: e,
                        chainId: t,
                        qrUrl: this.getQrUrl(),
                        diagnosticLogger: this._diagnosticLogger,
                        overrideIsMetaMask: this._overrideIsMetaMask,
                        overrideIsCoinbaseWallet: this._overrideIsCoinbaseWallet,
                        overrideIsCoinbaseBrowser: this._overrideIsCoinbaseBrowser
                    })
                }
                setAppInfo(e, t) {
                    var n;
                    this._appName = e || "DApp", this._appLogoUrl = t || (0, a.getFavicon)();
                    let i = this.walletExtension;
                    i ? this.isCipherProvider(i) || i.setAppInfo(this._appName, this._appLogoUrl) : null === (n = this._relay) || void 0 === n || n.setAppInfo(this._appName, this._appLogoUrl)
                }
                disconnect() {
                    var e;
                    let t = this === null || void 0 === this ? void 0 : this.walletExtension;
                    t ? t.close() : null === (e = this._relay) || void 0 === e || e.resetAndReload()
                }
                getQrUrl() {
                    var e, t;
                    return null !== (t = null === (e = this._relay) || void 0 === e ? void 0 : e.getQRCodeUrl()) && void 0 !== t ? t : null
                }
                getCoinbaseWalletLogo(e, t = 240) {
                    return (0, i.walletLogo)(e, t)
                }
                get walletExtension() {
                    var e;
                    return null !== (e = window.coinbaseWalletExtension) && void 0 !== e ? e : window.walletLinkExtension
                }
                get coinbaseBrowser() {
                    var e, t;
                    try {
                        let n = null !== (e = window.ethereum) && void 0 !== e ? e : null === (t = window.top) || void 0 === t ? void 0 : t.ethereum;
                        if (!n) return;
                        if ("isCoinbaseBrowser" in n && n.isCoinbaseBrowser) return n;
                        return
                    } catch (e) {
                        return
                    }
                }
                isCipherProvider(e) {
                    return "boolean" == typeof e.isCipher && e.isCipher
                }
            };
            t.CoinbaseWalletSDK = CoinbaseWalletSDK, CoinbaseWalletSDK.VERSION = W.LIB_VERSION
        },
        78087: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.walletLogo = void 0, t.walletLogo = (e, t) => {
                let n;
                switch (e) {
                    case "standard":
                    default:
                        return n = t, `data:image/svg+xml,%3Csvg width='${t}' height='${n}' viewBox='0 0 1024 1024' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Crect width='1024' height='1024' fill='%230052FF'/%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M152 512C152 710.823 313.177 872 512 872C710.823 872 872 710.823 872 512C872 313.177 710.823 152 512 152C313.177 152 152 313.177 152 512ZM420 396C406.745 396 396 406.745 396 420V604C396 617.255 406.745 628 420 628H604C617.255 628 628 617.255 628 604V420C628 406.745 617.255 396 604 396H420Z' fill='white'/%3E %3C/svg%3E `;
                    case "circle":
                        return n = t, `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${t}' height='${n}' viewBox='0 0 999.81 999.81'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052fe;%7D.cls-2%7Bfill:%23fefefe;%7D.cls-3%7Bfill:%230152fe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M655-115.9h56c.83,1.59,2.36.88,3.56,1a478,478,0,0,1,75.06,10.42C891.4-81.76,978.33-32.58,1049.19,44q116.7,126,131.94,297.61c.38,4.14-.34,8.53,1.78,12.45v59c-1.58.84-.91,2.35-1,3.56a482.05,482.05,0,0,1-10.38,74.05c-24,106.72-76.64,196.76-158.83,268.93s-178.18,112.82-287.2,122.6c-4.83.43-9.86-.25-14.51,1.77H654c-1-1.68-2.69-.91-4.06-1a496.89,496.89,0,0,1-105.9-18.59c-93.54-27.42-172.78-77.59-236.91-150.94Q199.34,590.1,184.87,426.58c-.47-5.19.25-10.56-1.77-15.59V355c1.68-1,.91-2.7,1-4.06a498.12,498.12,0,0,1,18.58-105.9c26-88.75,72.64-164.9,140.6-227.57q126-116.27,297.21-131.61C645.32-114.57,650.35-113.88,655-115.9Zm377.92,500c0-192.44-156.31-349.49-347.56-350.15-194.13-.68-350.94,155.13-352.29,347.42-1.37,194.55,155.51,352.1,348.56,352.47C876.15,734.23,1032.93,577.84,1032.93,384.11Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-2' d='M1032.93,384.11c0,193.73-156.78,350.12-351.29,349.74-193-.37-349.93-157.92-348.56-352.47C334.43,189.09,491.24,33.28,685.37,34,876.62,34.62,1032.94,191.67,1032.93,384.11ZM683,496.81q43.74,0,87.48,0c15.55,0,25.32-9.72,25.33-25.21q0-87.48,0-175c0-15.83-9.68-25.46-25.59-25.46H595.77c-15.88,0-25.57,9.64-25.58,25.46q0,87.23,0,174.45c0,16.18,9.59,25.7,25.84,25.71Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-3' d='M683,496.81H596c-16.25,0-25.84-9.53-25.84-25.71q0-87.23,0-174.45c0-15.82,9.7-25.46,25.58-25.46H770.22c15.91,0,25.59,9.63,25.59,25.46q0,87.47,0,175c0,15.49-9.78,25.2-25.33,25.21Q726.74,496.84,683,496.81Z' transform='translate(-183.1 115.9)'/%3E%3C/svg%3E`;
                    case "text":
                        return n = (.1 * t).toFixed(2), `data:image/svg+xml,%3Csvg width='${t}' height='${n}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`;
                    case "textWithLogo":
                        return n = (.25 * t).toFixed(2), `data:image/svg+xml,%3Csvg width='${t}' height='${n}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`;
                    case "textLight":
                        return n = (.1 * t).toFixed(2), `data:image/svg+xml,%3Csvg width='${t}' height='${n}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`;
                    case "textWithLogoLight":
                        return n = (.25 * t).toFixed(2), `data:image/svg+xml,%3Csvg width='${t}' height='${n}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`
                }
            }
        },
        67467: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.LINK_API_URL = void 0, t.LINK_API_URL = "https://www.walletlink.org"
        },
        73739: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.errorValues = t.standardErrorCodes = void 0, t.standardErrorCodes = {
                rpc: {
                    invalidInput: -32e3,
                    resourceNotFound: -32001,
                    resourceUnavailable: -32002,
                    transactionRejected: -32003,
                    methodNotSupported: -32004,
                    limitExceeded: -32005,
                    parse: -32700,
                    invalidRequest: -32600,
                    methodNotFound: -32601,
                    invalidParams: -32602,
                    internal: -32603
                },
                provider: {
                    userRejectedRequest: 4001,
                    unauthorized: 4100,
                    unsupportedMethod: 4200,
                    disconnected: 4900,
                    chainDisconnected: 4901,
                    unsupportedChain: 4902
                }
            }, t.errorValues = {
                "-32700": {
                    standard: "JSON RPC 2.0",
                    message: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
                },
                "-32600": {
                    standard: "JSON RPC 2.0",
                    message: "The JSON sent is not a valid Request object."
                },
                "-32601": {
                    standard: "JSON RPC 2.0",
                    message: "The method does not exist / is not available."
                },
                "-32602": {
                    standard: "JSON RPC 2.0",
                    message: "Invalid method parameter(s)."
                },
                "-32603": {
                    standard: "JSON RPC 2.0",
                    message: "Internal JSON-RPC error."
                },
                "-32000": {
                    standard: "EIP-1474",
                    message: "Invalid input."
                },
                "-32001": {
                    standard: "EIP-1474",
                    message: "Resource not found."
                },
                "-32002": {
                    standard: "EIP-1474",
                    message: "Resource unavailable."
                },
                "-32003": {
                    standard: "EIP-1474",
                    message: "Transaction rejected."
                },
                "-32004": {
                    standard: "EIP-1474",
                    message: "Method not supported."
                },
                "-32005": {
                    standard: "EIP-1474",
                    message: "Request limit exceeded."
                },
                4001: {
                    standard: "EIP-1193",
                    message: "User rejected the request."
                },
                4100: {
                    standard: "EIP-1193",
                    message: "The requested account and/or method has not been authorized by the user."
                },
                4200: {
                    standard: "EIP-1193",
                    message: "The requested method is not supported by this Ethereum provider."
                },
                4900: {
                    standard: "EIP-1193",
                    message: "The provider is disconnected from all chains."
                },
                4901: {
                    standard: "EIP-1193",
                    message: "The provider is disconnected from the specified chain."
                },
                4902: {
                    standard: "EIP-3085",
                    message: "Unrecognized chain ID."
                }
            }
        },
        51246: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.standardErrors = void 0;
            let i = n(73739),
                o = n(64745);

            function getEthJsonRpcError(e, t) {
                let [n, i] = parseOpts(t);
                return new EthereumRpcError(e, n || (0, o.getMessageFromCode)(e), i)
            }

            function getEthProviderError(e, t) {
                let [n, i] = parseOpts(t);
                return new EthereumProviderError(e, n || (0, o.getMessageFromCode)(e), i)
            }

            function parseOpts(e) {
                if (e) {
                    if ("string" == typeof e) return [e];
                    if ("object" == typeof e && !Array.isArray(e)) {
                        let {
                            message: t,
                            data: n
                        } = e;
                        if (t && "string" != typeof t) throw Error("Must specify string message.");
                        return [t || void 0, n]
                    }
                }
                return []
            }
            t.standardErrors = {
                rpc: {
                    parse: e => getEthJsonRpcError(i.standardErrorCodes.rpc.parse, e),
                    invalidRequest: e => getEthJsonRpcError(i.standardErrorCodes.rpc.invalidRequest, e),
                    invalidParams: e => getEthJsonRpcError(i.standardErrorCodes.rpc.invalidParams, e),
                    methodNotFound: e => getEthJsonRpcError(i.standardErrorCodes.rpc.methodNotFound, e),
                    internal: e => getEthJsonRpcError(i.standardErrorCodes.rpc.internal, e),
                    server: e => {
                        if (!e || "object" != typeof e || Array.isArray(e)) throw Error("Ethereum RPC Server errors must provide single object argument.");
                        let {
                            code: t
                        } = e;
                        if (!Number.isInteger(t) || t > -32005 || t < -32099) throw Error('"code" must be an integer such that: -32099 <= code <= -32005');
                        return getEthJsonRpcError(t, e)
                    },
                    invalidInput: e => getEthJsonRpcError(i.standardErrorCodes.rpc.invalidInput, e),
                    resourceNotFound: e => getEthJsonRpcError(i.standardErrorCodes.rpc.resourceNotFound, e),
                    resourceUnavailable: e => getEthJsonRpcError(i.standardErrorCodes.rpc.resourceUnavailable, e),
                    transactionRejected: e => getEthJsonRpcError(i.standardErrorCodes.rpc.transactionRejected, e),
                    methodNotSupported: e => getEthJsonRpcError(i.standardErrorCodes.rpc.methodNotSupported, e),
                    limitExceeded: e => getEthJsonRpcError(i.standardErrorCodes.rpc.limitExceeded, e)
                },
                provider: {
                    userRejectedRequest: e => getEthProviderError(i.standardErrorCodes.provider.userRejectedRequest, e),
                    unauthorized: e => getEthProviderError(i.standardErrorCodes.provider.unauthorized, e),
                    unsupportedMethod: e => getEthProviderError(i.standardErrorCodes.provider.unsupportedMethod, e),
                    disconnected: e => getEthProviderError(i.standardErrorCodes.provider.disconnected, e),
                    chainDisconnected: e => getEthProviderError(i.standardErrorCodes.provider.chainDisconnected, e),
                    unsupportedChain: e => getEthProviderError(i.standardErrorCodes.provider.unsupportedChain, e),
                    custom: e => {
                        if (!e || "object" != typeof e || Array.isArray(e)) throw Error("Ethereum Provider custom errors must provide single object argument.");
                        let {
                            code: t,
                            message: n,
                            data: i
                        } = e;
                        if (!n || "string" != typeof n) throw Error('"message" must be a nonempty string');
                        return new EthereumProviderError(t, n, i)
                    }
                }
            };
            let EthereumRpcError = class EthereumRpcError extends Error {
                constructor(e, t, n) {
                    if (!Number.isInteger(e)) throw Error('"code" must be an integer.');
                    if (!t || "string" != typeof t) throw Error('"message" must be a nonempty string.');
                    super(t), this.code = e, void 0 !== n && (this.data = n)
                }
            };
            let EthereumProviderError = class EthereumProviderError extends EthereumRpcError {
                constructor(e, t, n) {
                    if (!(Number.isInteger(e) && e >= 1e3 && e <= 4999)) throw Error('"code" must be an integer such that: 1000 <= code <= 4999');
                    super(e, t, n)
                }
            }
        },
        51561: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.standardErrors = t.standardErrorCodes = t.serializeError = t.getMessageFromCode = t.getErrorCode = void 0;
            let i = n(73739);
            Object.defineProperty(t, "standardErrorCodes", {
                enumerable: !0,
                get: function() {
                    return i.standardErrorCodes
                }
            });
            let o = n(51246);
            Object.defineProperty(t, "standardErrors", {
                enumerable: !0,
                get: function() {
                    return o.standardErrors
                }
            });
            let a = n(9816);
            Object.defineProperty(t, "serializeError", {
                enumerable: !0,
                get: function() {
                    return a.serializeError
                }
            });
            let l = n(64745);
            Object.defineProperty(t, "getErrorCode", {
                enumerable: !0,
                get: function() {
                    return l.getErrorCode
                }
            }), Object.defineProperty(t, "getMessageFromCode", {
                enumerable: !0,
                get: function() {
                    return l.getMessageFromCode
                }
            })
        },
        9816: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.serializeError = void 0;
            let i = n(17763),
                o = n(28343),
                a = n(73739),
                l = n(64745);
            t.serializeError = function(e, t) {
                let n = (0, l.serialize)("string" == typeof e ? {
                        message: e,
                        code: a.standardErrorCodes.rpc.internal
                    } : (0, i.isErrorResponse)(e) ? Object.assign(Object.assign({}, e), {
                        message: e.errorMessage,
                        code: e.errorCode,
                        data: {
                            method: e.method
                        }
                    }) : e, {
                        shouldIncludeStack: !0
                    }),
                    c = new URL("https://docs.cloud.coinbase.com/wallet-sdk/docs/errors");
                c.searchParams.set("version", o.LIB_VERSION), c.searchParams.set("code", n.code.toString());
                let u = function(e, t) {
                    let n = null == e ? void 0 : e.method;
                    if (n) return n;
                    if (void 0 === t);
                    else if ("string" == typeof t) return t;
                    else if (!Array.isArray(t)) return t.method;
                    else if (t.length > 0) return t[0].method
                }(n.data, t);
                return u && c.searchParams.set("method", u), c.searchParams.set("message", n.message), Object.assign(Object.assign({}, n), {
                    docUrl: c.href
                })
            }
        },
        64745: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.serialize = t.getErrorCode = t.isValidCode = t.getMessageFromCode = t.JSON_RPC_SERVER_ERROR_MESSAGE = void 0;
            let i = n(73739),
                o = "Unspecified error message.";

            function getMessageFromCode(e, n = o) {
                if (e && Number.isInteger(e)) {
                    let n = e.toString();
                    if (hasKey(i.errorValues, n)) return i.errorValues[n].message;
                    if (e >= -32099 && e <= -32e3) return t.JSON_RPC_SERVER_ERROR_MESSAGE
                }
                return n
            }

            function isValidCode(e) {
                if (!Number.isInteger(e)) return !1;
                let t = e.toString();
                return !!(i.errorValues[t] || e >= -32099 && e <= -32e3)
            }

            function assignOriginalError(e) {
                return e && "object" == typeof e && !Array.isArray(e) ? Object.assign({}, e) : e
            }

            function hasKey(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }

            function hasStringProperty(e, t) {
                return "object" == typeof e && null !== e && t in e && "string" == typeof e[t]
            }
            t.JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error.", t.getMessageFromCode = getMessageFromCode, t.isValidCode = isValidCode, t.getErrorCode = function(e) {
                var t;
                return "number" == typeof e ? e : "object" == typeof e && null !== e && ("number" == typeof e.code || "number" == typeof e.errorCode) ? null !== (t = e.code) && void 0 !== t ? t : e.errorCode : void 0
            }, t.serialize = function(e, {
                shouldIncludeStack: t = !1
            } = {}) {
                let n = {};
                return e && "object" == typeof e && !Array.isArray(e) && hasKey(e, "code") && isValidCode(e.code) ? (n.code = e.code, e.message && "string" == typeof e.message ? (n.message = e.message, hasKey(e, "data") && (n.data = e.data)) : (n.message = getMessageFromCode(n.code), n.data = {
                    originalError: assignOriginalError(e)
                })) : (n.code = i.standardErrorCodes.rpc.internal, n.message = hasStringProperty(e, "message") ? e.message : o, n.data = {
                    originalError: assignOriginalError(e)
                }), t && (n.stack = hasStringProperty(e, "stack") ? e.stack : void 0), n
            }
        },
        397: function(e, t) {
            "use strict";
            var n, i;

            function OpaqueType() {
                return e => e
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ProviderType = t.RegExpString = t.IntNumber = t.BigIntString = t.AddressString = t.HexString = t.OpaqueType = void 0, t.OpaqueType = OpaqueType, t.HexString = OpaqueType(), t.AddressString = OpaqueType(), t.BigIntString = OpaqueType(), t.IntNumber = function(e) {
                return Math.floor(e)
            }, t.RegExpString = OpaqueType(), (i = n || (t.ProviderType = n = {})).CoinbaseWallet = "CoinbaseWallet", i.MetaMask = "MetaMask", i.Unselected = ""
        },
        13702: function(e, t, n) {
            "use strict";
            var i = n(97115).Buffer,
                o = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isMobileWeb = t.getLocation = t.isInIFrame = t.createQrUrl = t.getFavicon = t.range = t.isBigNumber = t.ensureParsedJSONObject = t.ensureBN = t.ensureRegExpString = t.ensureIntNumber = t.ensureBuffer = t.ensureAddressString = t.ensureEvenLengthHexString = t.ensureHexString = t.isHexString = t.prepend0x = t.strip0x = t.has0xPrefix = t.hexStringFromIntNumber = t.intNumberFromHexString = t.bigIntStringFromBN = t.hexStringFromBuffer = t.hexStringToUint8Array = t.uint8ArrayToHex = t.randomBytesHex = void 0;
            let a = o(n(43907)),
                l = n(51561),
                c = n(397),
                u = /^[0-9]*$/,
                R = /^[a-f0-9]*$/;

            function uint8ArrayToHex(e) {
                return [...e].map(e => e.toString(16).padStart(2, "0")).join("")
            }

            function has0xPrefix(e) {
                return e.startsWith("0x") || e.startsWith("0X")
            }

            function strip0x(e) {
                return has0xPrefix(e) ? e.slice(2) : e
            }

            function prepend0x(e) {
                return has0xPrefix(e) ? `0x${e.slice(2)}` : `0x${e}`
            }

            function isHexString(e) {
                if ("string" != typeof e) return !1;
                let t = strip0x(e).toLowerCase();
                return R.test(t)
            }

            function ensureHexString(e, t = !1) {
                if ("string" == typeof e) {
                    let n = strip0x(e).toLowerCase();
                    if (R.test(n)) return (0, c.HexString)(t ? `0x${n}` : n)
                }
                throw l.standardErrors.rpc.invalidParams(`"${String(e)}" is not a hexadecimal string`)
            }

            function ensureEvenLengthHexString(e, t = !1) {
                let n = ensureHexString(e, !1);
                return n.length % 2 == 1 && (n = (0, c.HexString)(`0${n}`)), t ? (0, c.HexString)(`0x${n}`) : n
            }

            function ensureIntNumber(e) {
                if ("number" == typeof e && Number.isInteger(e)) return (0, c.IntNumber)(e);
                if ("string" == typeof e) {
                    if (u.test(e)) return (0, c.IntNumber)(Number(e));
                    if (isHexString(e)) return (0, c.IntNumber)(new a.default(ensureEvenLengthHexString(e, !1), 16).toNumber())
                }
                throw l.standardErrors.rpc.invalidParams(`Not an integer: ${String(e)}`)
            }

            function isBigNumber(e) {
                if (null == e || "function" != typeof e.constructor) return !1;
                let {
                    constructor: t
                } = e;
                return "function" == typeof t.config && "number" == typeof t.EUCLID
            }

            function isInIFrame() {
                try {
                    return null !== window.frameElement
                } catch (e) {
                    return !1
                }
            }
            t.randomBytesHex = function(e) {
                return uint8ArrayToHex(crypto.getRandomValues(new Uint8Array(e)))
            }, t.uint8ArrayToHex = uint8ArrayToHex, t.hexStringToUint8Array = function(e) {
                return new Uint8Array(e.match(/.{1,2}/g).map(e => parseInt(e, 16)))
            }, t.hexStringFromBuffer = function(e, t = !1) {
                let n = e.toString("hex");
                return (0, c.HexString)(t ? `0x${n}` : n)
            }, t.bigIntStringFromBN = function(e) {
                return (0, c.BigIntString)(e.toString(10))
            }, t.intNumberFromHexString = function(e) {
                return (0, c.IntNumber)(new a.default(ensureEvenLengthHexString(e, !1), 16).toNumber())
            }, t.hexStringFromIntNumber = function(e) {
                return (0, c.HexString)(`0x${new a.default(e).toString(16)}`)
            }, t.has0xPrefix = has0xPrefix, t.strip0x = strip0x, t.prepend0x = prepend0x, t.isHexString = isHexString, t.ensureHexString = ensureHexString, t.ensureEvenLengthHexString = ensureEvenLengthHexString, t.ensureAddressString = function(e) {
                if ("string" == typeof e) {
                    let t = strip0x(e).toLowerCase();
                    if (isHexString(t) && 40 === t.length) return (0, c.AddressString)(prepend0x(t))
                }
                throw l.standardErrors.rpc.invalidParams(`Invalid Ethereum address: ${String(e)}`)
            }, t.ensureBuffer = function(e) {
                if (i.isBuffer(e)) return e;
                if ("string" == typeof e) {
                    if (isHexString(e)) {
                        let t = ensureEvenLengthHexString(e, !1);
                        return i.from(t, "hex")
                    }
                    return i.from(e, "utf8")
                }
                throw l.standardErrors.rpc.invalidParams(`Not binary data: ${String(e)}`)
            }, t.ensureIntNumber = ensureIntNumber, t.ensureRegExpString = function(e) {
                if (e instanceof RegExp) return (0, c.RegExpString)(e.toString());
                throw l.standardErrors.rpc.invalidParams(`Not a RegExp: ${String(e)}`)
            }, t.ensureBN = function(e) {
                if (null !== e && (a.default.isBN(e) || isBigNumber(e))) return new a.default(e.toString(10), 10);
                if ("number" == typeof e) return new a.default(ensureIntNumber(e));
                if ("string" == typeof e) {
                    if (u.test(e)) return new a.default(e, 10);
                    if (isHexString(e)) return new a.default(ensureEvenLengthHexString(e, !1), 16)
                }
                throw l.standardErrors.rpc.invalidParams(`Not an integer: ${String(e)}`)
            }, t.ensureParsedJSONObject = function(e) {
                if ("string" == typeof e) return JSON.parse(e);
                if ("object" == typeof e) return e;
                throw l.standardErrors.rpc.invalidParams(`Not a JSON string or an object: ${String(e)}`)
            }, t.isBigNumber = isBigNumber, t.range = function(e, t) {
                return Array.from({
                    length: t - e
                }, (t, n) => e + n)
            }, t.getFavicon = function() {
                let e = document.querySelector('link[sizes="192x192"]') || document.querySelector('link[sizes="180x180"]') || document.querySelector('link[rel="icon"]') || document.querySelector('link[rel="shortcut icon"]'),
                    {
                        protocol: t,
                        host: n
                    } = document.location,
                    i = e ? e.getAttribute("href") : null;
                return !i || i.startsWith("javascript:") || i.startsWith("vbscript:") ? null : i.startsWith("http://") || i.startsWith("https://") || i.startsWith("data:") ? i : i.startsWith("//") ? t + i : `${t}//${n}${i}`
            }, t.createQrUrl = function(e, t, n, i, o, a) {
                let l = new URLSearchParams({
                        [i ? "parent-id" : "id"]: e,
                        secret: t,
                        server: n,
                        v: o,
                        chainId: a.toString()
                    }).toString(),
                    c = `${n}/#/link?${l}`;
                return c
            }, t.isInIFrame = isInIFrame, t.getLocation = function() {
                try {
                    if (isInIFrame() && window.top) return window.top.location;
                    return window.location
                } catch (e) {
                    return window.location
                }
            }, t.isMobileWeb = function() {
                var e;
                return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(null === (e = null == window ? void 0 : window.navigator) || void 0 === e ? void 0 : e.userAgent)
            }
        },
        39376: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CoinbaseWalletProvider = t.CoinbaseWalletSDK = void 0;
            let i = n(57772),
                o = n(96132);
            var a = n(57772);
            Object.defineProperty(t, "CoinbaseWalletSDK", {
                enumerable: !0,
                get: function() {
                    return a.CoinbaseWalletSDK
                }
            });
            var l = n(96132);
            Object.defineProperty(t, "CoinbaseWalletProvider", {
                enumerable: !0,
                get: function() {
                    return l.CoinbaseWalletProvider
                }
            }), t.default = i.CoinbaseWalletSDK, "undefined" != typeof window && (window.CoinbaseWalletSDK = i.CoinbaseWalletSDK, window.CoinbaseWalletProvider = o.CoinbaseWalletProvider, window.WalletLink = i.CoinbaseWalletSDK, window.WalletLinkProvider = o.CoinbaseWalletProvider)
        },
        52118: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Cipher = void 0;
            let i = n(13702);
            t.Cipher = class {
                constructor(e) {
                    this.secret = e
                }
                async encrypt(e) {
                    let t = this.secret;
                    if (64 !== t.length) throw Error("secret must be 256 bits");
                    let n = crypto.getRandomValues(new Uint8Array(12)),
                        o = await crypto.subtle.importKey("raw", (0, i.hexStringToUint8Array)(t), {
                            name: "aes-gcm"
                        }, !1, ["encrypt", "decrypt"]),
                        a = new TextEncoder,
                        l = await window.crypto.subtle.encrypt({
                            name: "AES-GCM",
                            iv: n
                        }, o, a.encode(e)),
                        c = l.slice(l.byteLength - 16),
                        u = l.slice(0, l.byteLength - 16),
                        R = new Uint8Array(c),
                        N = new Uint8Array(u),
                        H = new Uint8Array([...n, ...R, ...N]);
                    return (0, i.uint8ArrayToHex)(H)
                }
                async decrypt(e) {
                    let t = this.secret;
                    if (64 !== t.length) throw Error("secret must be 256 bits");
                    return new Promise((n, o) => {
                        !async function() {
                            let a = await crypto.subtle.importKey("raw", (0, i.hexStringToUint8Array)(t), {
                                    name: "aes-gcm"
                                }, !1, ["encrypt", "decrypt"]),
                                l = (0, i.hexStringToUint8Array)(e),
                                c = l.slice(0, 12),
                                u = l.slice(12, 28),
                                R = l.slice(28),
                                N = new Uint8Array([...R, ...u]),
                                H = {
                                    name: "AES-GCM",
                                    iv: new Uint8Array(c)
                                };
                            try {
                                let e = await window.crypto.subtle.decrypt(H, a, N),
                                    t = new TextDecoder;
                                n(t.decode(e))
                            } catch (e) {
                                o(e)
                            }
                        }()
                    })
                }
            }
        },
        28255: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ScopedLocalStorage = void 0, t.ScopedLocalStorage = class {
                constructor(e) {
                    this.scope = e
                }
                setItem(e, t) {
                    localStorage.setItem(this.scopedKey(e), t)
                }
                getItem(e) {
                    return localStorage.getItem(this.scopedKey(e))
                }
                removeItem(e) {
                    localStorage.removeItem(this.scopedKey(e))
                }
                clear() {
                    let e = this.scopedKey(""),
                        t = [];
                    for (let n = 0; n < localStorage.length; n++) {
                        let i = localStorage.key(n);
                        "string" == typeof i && i.startsWith(e) && t.push(i)
                    }
                    t.forEach(e => localStorage.removeItem(e))
                }
                scopedKey(e) {
                    return `${this.scope}:${e}`
                }
            }
        },
        73063: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = '@namespace svg "http://www.w3.org/2000/svg";.-cbwsdk-css-reset,.-cbwsdk-css-reset *{animation:none;animation-delay:0;animation-direction:normal;animation-duration:0;animation-fill-mode:none;animation-iteration-count:1;animation-name:none;animation-play-state:running;animation-timing-function:ease;backface-visibility:visible;background:0;background-attachment:scroll;background-clip:border-box;background-color:rgba(0,0,0,0);background-image:none;background-origin:padding-box;background-position:0 0;background-position-x:0;background-position-y:0;background-repeat:repeat;background-size:auto auto;border:0;border-style:none;border-width:medium;border-color:inherit;border-bottom:0;border-bottom-color:inherit;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-style:none;border-bottom-width:medium;border-collapse:separate;border-image:none;border-left:0;border-left-color:inherit;border-left-style:none;border-left-width:medium;border-radius:0;border-right:0;border-right-color:inherit;border-right-style:none;border-right-width:medium;border-spacing:0;border-top:0;border-top-color:inherit;border-top-left-radius:0;border-top-right-radius:0;border-top-style:none;border-top-width:medium;box-shadow:none;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:inherit;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-rule-color:currentColor;column-rule-style:none;column-rule-width:none;column-span:1;column-width:auto;counter-increment:none;counter-reset:none;direction:ltr;empty-cells:show;float:none;font:normal;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;height:auto;hyphens:none;letter-spacing:normal;line-height:normal;list-style:none;list-style-image:none;list-style-position:outside;list-style-type:disc;margin:0;margin-bottom:0;margin-left:0;margin-right:0;margin-top:0;opacity:1;orphans:0;outline:0;outline-color:invert;outline-style:none;outline-width:medium;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;pointer-events:auto;position:static;quotes:"\\201C" "\\201D" "\\2018" "\\2019";tab-size:8;table-layout:auto;text-align:inherit;text-align-last:auto;text-decoration:none;text-decoration-color:inherit;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-shadow:none;text-transform:none;transform:none;transform-style:flat;transition:none;transition-delay:0s;transition-duration:0s;transition-property:none;transition-timing-function:ease;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:0;word-spacing:normal;z-index:auto}.-cbwsdk-css-reset strong{font-weight:bold}.-cbwsdk-css-reset *{box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;line-height:1}.-cbwsdk-css-reset [class*=container]{margin:0;padding:0}.-cbwsdk-css-reset style{display:none}'
        },
        38419: function(e, t, n) {
            "use strict";
            var i = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.injectCssReset = void 0;
            let o = i(n(73063));
            t.injectCssReset = function() {
                let e = document.createElement("style");
                e.type = "text/css", e.appendChild(document.createTextNode(o.default)), document.documentElement.appendChild(e)
            }
        },
        96132: function(e, t, n) {
            "use strict";
            var i = n(97115).Buffer,
                o = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CoinbaseWalletProvider = void 0;
            let a = o(n(43907)),
                l = n(23517),
                c = n(51561),
                u = n(13702),
                R = n(98453),
                N = n(15701),
                H = n(87487),
                U = n(17763),
                W = o(n(80393)),
                J = n(15314),
                Q = n(15692),
                Z = n(20282),
                Y = "DefaultChainId",
                K = "DefaultJsonRpcUrl";
            let CoinbaseWalletProvider = class CoinbaseWalletProvider extends l.EventEmitter {
                constructor(e) {
                    var t, n;
                    super(), this._filterPolyfill = new Q.FilterPolyfill(this), this._subscriptionManager = new Z.SubscriptionManager(this), this._relay = null, this._addresses = [], this.hasMadeFirstChainChangedEmission = !1, this.setProviderInfo = this.setProviderInfo.bind(this), this.updateProviderInfo = this.updateProviderInfo.bind(this), this.getChainId = this.getChainId.bind(this), this.setAppInfo = this.setAppInfo.bind(this), this.enable = this.enable.bind(this), this.close = this.close.bind(this), this.send = this.send.bind(this), this.sendAsync = this.sendAsync.bind(this), this.request = this.request.bind(this), this._setAddresses = this._setAddresses.bind(this), this.scanQRCode = this.scanQRCode.bind(this), this.genericRequest = this.genericRequest.bind(this), this._chainIdFromOpts = e.chainId, this._jsonRpcUrlFromOpts = e.jsonRpcUrl, this._overrideIsMetaMask = e.overrideIsMetaMask, this._relayProvider = e.relayProvider, this._storage = e.storage, this._relayEventManager = e.relayEventManager, this.diagnostic = e.diagnosticLogger, this.reloadOnDisconnect = !0, this.isCoinbaseWallet = null === (t = e.overrideIsCoinbaseWallet) || void 0 === t || t, this.isCoinbaseBrowser = null !== (n = e.overrideIsCoinbaseBrowser) && void 0 !== n && n, this.qrUrl = e.qrUrl;
                    let i = this.getChainId(),
                        o = (0, u.prepend0x)(i.toString(16));
                    this.emit("connect", {
                        chainIdStr: o
                    });
                    let a = this._storage.getItem(N.LOCAL_STORAGE_ADDRESSES_KEY);
                    if (a) {
                        let e = a.split(" ");
                        "" !== e[0] && (this._addresses = e.map(e => (0, u.ensureAddressString)(e)), this.emit("accountsChanged", e))
                    }
                    this._subscriptionManager.events.on("notification", e => {
                        this.emit("message", {
                            type: e.method,
                            data: e.params
                        })
                    }), this._isAuthorized() && this.initializeRelay(), window.addEventListener("message", e => {
                        var t;
                        if (e.origin === location.origin && e.source === window && "walletLinkMessage" === e.data.type && "dappChainSwitched" === e.data.data.action) {
                            let n = e.data.data.chainId,
                                i = null !== (t = e.data.data.jsonRpcUrl) && void 0 !== t ? t : this.jsonRpcUrl;
                            this.updateProviderInfo(i, Number(n))
                        }
                    })
                }
                get selectedAddress() {
                    return this._addresses[0] || void 0
                }
                get networkVersion() {
                    return this.getChainId().toString(10)
                }
                get chainId() {
                    return (0, u.prepend0x)(this.getChainId().toString(16))
                }
                get isWalletLink() {
                    return !0
                }
                get isMetaMask() {
                    return this._overrideIsMetaMask
                }
                get host() {
                    return this.jsonRpcUrl
                }
                get connected() {
                    return !0
                }
                isConnected() {
                    return !0
                }
                get jsonRpcUrl() {
                    var e;
                    return null !== (e = this._storage.getItem(K)) && void 0 !== e ? e : this._jsonRpcUrlFromOpts
                }
                set jsonRpcUrl(e) {
                    this._storage.setItem(K, e)
                }
                disableReloadOnDisconnect() {
                    this.reloadOnDisconnect = !1
                }
                setProviderInfo(e, t) {
                    this.isCoinbaseBrowser || (this._chainIdFromOpts = t, this._jsonRpcUrlFromOpts = e), this.updateProviderInfo(this.jsonRpcUrl, this.getChainId())
                }
                updateProviderInfo(e, t) {
                    this.jsonRpcUrl = e;
                    let n = this.getChainId();
                    this._storage.setItem(Y, t.toString(10));
                    let i = (0, u.ensureIntNumber)(t) !== n;
                    (i || !this.hasMadeFirstChainChangedEmission) && (this.emit("chainChanged", this.getChainId()), this.hasMadeFirstChainChangedEmission = !0)
                }
                async watchAsset(e, t, n, i, o, a) {
                    let l = await this.initializeRelay(),
                        c = await l.watchAsset(e, t, n, i, o, null == a ? void 0 : a.toString()).promise;
                    return !(0, U.isErrorResponse)(c) && !!c.result
                }
                async addEthereumChain(e, t, n, i, o, a) {
                    var l, c;
                    if ((0, u.ensureIntNumber)(e) === this.getChainId()) return !1;
                    let R = await this.initializeRelay(),
                        N = R.inlineAddEthereumChain(e.toString());
                    this._isAuthorized() || N || await R.requestEthereumAccounts().promise;
                    let H = await R.addEthereumChain(e.toString(), t, o, n, i, a).promise;
                    return !(0, U.isErrorResponse)(H) && ((null === (l = H.result) || void 0 === l ? void 0 : l.isApproved) === !0 && this.updateProviderInfo(t[0], e), (null === (c = H.result) || void 0 === c ? void 0 : c.isApproved) === !0)
                }
                async switchEthereumChain(e) {
                    let t = await this.initializeRelay(),
                        n = await t.switchEthereumChain(e.toString(10), this.selectedAddress || void 0).promise;
                    if ((0, U.isErrorResponse)(n)) {
                        if (!n.errorCode) return;
                        if (n.errorCode === c.standardErrorCodes.provider.unsupportedChain) throw c.standardErrors.provider.unsupportedChain();
                        throw c.standardErrors.provider.custom({
                            message: n.errorMessage,
                            code: n.errorCode
                        })
                    }
                    let i = n.result;
                    i.isApproved && i.rpcUrl.length > 0 && this.updateProviderInfo(i.rpcUrl, e)
                }
                setAppInfo(e, t) {
                    this.initializeRelay().then(n => n.setAppInfo(e, t))
                }
                async enable() {
                    var e;
                    return (null === (e = this.diagnostic) || void 0 === e || e.log(J.EVENTS.ETH_ACCOUNTS_STATE, {
                        method: "provider::enable",
                        addresses_length: this._addresses.length,
                        sessionIdHash: this._relay ? H.Session.hash(this._relay.session.id) : void 0
                    }), this._isAuthorized()) ? [...this._addresses] : await this.send("eth_requestAccounts")
                }
                async close() {
                    let e = await this.initializeRelay();
                    e.resetAndReload()
                }
                send(e, t) {
                    try {
                        let n = this._send(e, t);
                        if (n instanceof Promise) return n.catch(t => {
                            throw (0, c.serializeError)(t, e)
                        })
                    } catch (t) {
                        throw (0, c.serializeError)(t, e)
                    }
                }
                _send(e, t) {
                    if ("string" == typeof e) {
                        let n = Array.isArray(t) ? t : void 0 !== t ? [t] : [];
                        return this._sendRequestAsync({
                            jsonrpc: "2.0",
                            id: 0,
                            method: e,
                            params: n
                        }).then(e => e.result)
                    }
                    return "function" == typeof t ? this._sendAsync(e, t) : Array.isArray(e) ? e.map(e => this._sendRequest(e)) : this._sendRequest(e)
                }
                async sendAsync(e, t) {
                    try {
                        return this._sendAsync(e, t).catch(t => {
                            throw (0, c.serializeError)(t, e)
                        })
                    } catch (t) {
                        return Promise.reject((0, c.serializeError)(t, e))
                    }
                }
                async _sendAsync(e, t) {
                    if ("function" != typeof t) throw Error("callback is required");
                    if (Array.isArray(e)) {
                        this._sendMultipleRequestsAsync(e).then(e => t(null, e)).catch(e => t(e, null));
                        return
                    }
                    return this._sendRequestAsync(e).then(e => t(null, e)).catch(e => t(e, null))
                }
                async request(e) {
                    try {
                        return this._request(e).catch(t => {
                            throw (0, c.serializeError)(t, e.method)
                        })
                    } catch (t) {
                        return Promise.reject((0, c.serializeError)(t, e.method))
                    }
                }
                async _request(e) {
                    if (!e || "object" != typeof e || Array.isArray(e)) throw c.standardErrors.rpc.invalidRequest({
                        message: "Expected a single, non-array, object argument.",
                        data: e
                    });
                    let {
                        method: t,
                        params: n
                    } = e;
                    if ("string" != typeof t || 0 === t.length) throw c.standardErrors.rpc.invalidRequest({
                        message: "'args.method' must be a non-empty string.",
                        data: e
                    });
                    if (void 0 !== n && !Array.isArray(n) && ("object" != typeof n || null === n)) throw c.standardErrors.rpc.invalidRequest({
                        message: "'args.params' must be an object or array if provided.",
                        data: e
                    });
                    let i = void 0 === n ? [] : n,
                        o = this._relayEventManager.makeRequestId(),
                        a = await this._sendRequestAsync({
                            method: t,
                            params: i,
                            jsonrpc: "2.0",
                            id: o
                        });
                    return a.result
                }
                async scanQRCode(e) {
                    let t = await this.initializeRelay(),
                        n = await t.scanQRCode((0, u.ensureRegExpString)(e)).promise;
                    if ((0, U.isErrorResponse)(n)) throw (0, c.serializeError)(n.errorMessage, "scanQRCode");
                    if ("string" != typeof n.result) throw (0, c.serializeError)("result was not a string", "scanQRCode");
                    return n.result
                }
                async genericRequest(e, t) {
                    let n = await this.initializeRelay(),
                        i = await n.genericRequest(e, t).promise;
                    if ((0, U.isErrorResponse)(i)) throw (0, c.serializeError)(i.errorMessage, "generic");
                    if ("string" != typeof i.result) throw (0, c.serializeError)("result was not a string", "generic");
                    return i.result
                }
                async connectAndSignIn(e) {
                    var t;
                    let n;
                    null === (t = this.diagnostic) || void 0 === t || t.log(J.EVENTS.ETH_ACCOUNTS_STATE, {
                        method: "provider::connectAndSignIn",
                        sessionIdHash: this._relay ? H.Session.hash(this._relay.session.id) : void 0
                    });
                    try {
                        let t = await this.initializeRelay();
                        if (!(t instanceof R.MobileRelay)) throw Error("connectAndSignIn is only supported on mobile");
                        if (n = await t.connectAndSignIn(e).promise, (0, U.isErrorResponse)(n)) throw Error(n.errorMessage)
                    } catch (e) {
                        if ("string" == typeof e.message && e.message.match(/(denied|rejected)/i)) throw c.standardErrors.provider.userRejectedRequest("User denied account authorization");
                        throw e
                    }
                    if (!n.result) throw Error("accounts received is empty");
                    let {
                        accounts: i
                    } = n.result;
                    return this._setAddresses(i), this.isCoinbaseBrowser || await this.switchEthereumChain(this.getChainId()), n.result
                }
                async selectProvider(e) {
                    let t = await this.initializeRelay(),
                        n = await t.selectProvider(e).promise;
                    if ((0, U.isErrorResponse)(n)) throw (0, c.serializeError)(n.errorMessage, "selectProvider");
                    if ("string" != typeof n.result) throw (0, c.serializeError)("result was not a string", "selectProvider");
                    return n.result
                }
                supportsSubscriptions() {
                    return !1
                }
                subscribe() {
                    throw Error("Subscriptions are not supported")
                }
                unsubscribe() {
                    throw Error("Subscriptions are not supported")
                }
                disconnect() {
                    return !0
                }
                _sendRequest(e) {
                    let t = {
                            jsonrpc: "2.0",
                            id: e.id
                        },
                        {
                            method: n
                        } = e;
                    if (t.result = this._handleSynchronousMethods(e), void 0 === t.result) throw Error(`Coinbase Wallet does not support calling ${n} synchronously without a callback. Please provide a callback parameter to call ${n} asynchronously.`);
                    return t
                }
                _setAddresses(e, t) {
                    if (!Array.isArray(e)) throw Error("addresses is not an array");
                    let n = e.map(e => (0, u.ensureAddressString)(e));
                    JSON.stringify(n) !== JSON.stringify(this._addresses) && (this._addresses = n, this.emit("accountsChanged", this._addresses), this._storage.setItem(N.LOCAL_STORAGE_ADDRESSES_KEY, n.join(" ")))
                }
                _sendRequestAsync(e) {
                    return new Promise((t, n) => {
                        try {
                            let i = this._handleSynchronousMethods(e);
                            if (void 0 !== i) return t({
                                jsonrpc: "2.0",
                                id: e.id,
                                result: i
                            });
                            let o = this._handleAsynchronousFilterMethods(e);
                            if (void 0 !== o) {
                                o.then(n => t(Object.assign(Object.assign({}, n), {
                                    id: e.id
                                }))).catch(e => n(e));
                                return
                            }
                            let a = this._handleSubscriptionMethods(e);
                            if (void 0 !== a) {
                                a.then(n => t({
                                    jsonrpc: "2.0",
                                    id: e.id,
                                    result: n.result
                                })).catch(e => n(e));
                                return
                            }
                        } catch (e) {
                            return n(e)
                        }
                        this._handleAsynchronousMethods(e).then(n => n && t(Object.assign(Object.assign({}, n), {
                            id: e.id
                        }))).catch(e => n(e))
                    })
                }
                _sendMultipleRequestsAsync(e) {
                    return Promise.all(e.map(e => this._sendRequestAsync(e)))
                }
                _handleSynchronousMethods(e) {
                    let {
                        method: t
                    } = e, n = e.params || [];
                    switch (t) {
                        case "eth_accounts":
                            return this._eth_accounts();
                        case "eth_coinbase":
                            return this._eth_coinbase();
                        case "eth_uninstallFilter":
                            return this._eth_uninstallFilter(n);
                        case "net_version":
                            return this._net_version();
                        case "eth_chainId":
                            return this._eth_chainId();
                        default:
                            return
                    }
                }
                async _handleAsynchronousMethods(e) {
                    let {
                        method: t
                    } = e, n = e.params || [];
                    switch (t) {
                        case "eth_requestAccounts":
                            return this._eth_requestAccounts();
                        case "eth_sign":
                            return this._eth_sign(n);
                        case "eth_ecRecover":
                            return this._eth_ecRecover(n);
                        case "personal_sign":
                            return this._personal_sign(n);
                        case "personal_ecRecover":
                            return this._personal_ecRecover(n);
                        case "eth_signTransaction":
                            return this._eth_signTransaction(n);
                        case "eth_sendRawTransaction":
                            return this._eth_sendRawTransaction(n);
                        case "eth_sendTransaction":
                            return this._eth_sendTransaction(n);
                        case "eth_signTypedData_v1":
                            return this._eth_signTypedData_v1(n);
                        case "eth_signTypedData_v2":
                            return this._throwUnsupportedMethodError();
                        case "eth_signTypedData_v3":
                            return this._eth_signTypedData_v3(n);
                        case "eth_signTypedData_v4":
                        case "eth_signTypedData":
                            return this._eth_signTypedData_v4(n);
                        case "cbWallet_arbitrary":
                            return this._cbwallet_arbitrary(n);
                        case "wallet_addEthereumChain":
                            return this._wallet_addEthereumChain(n);
                        case "wallet_switchEthereumChain":
                            return this._wallet_switchEthereumChain(n);
                        case "wallet_watchAsset":
                            return this._wallet_watchAsset(n)
                    }
                    let i = await this.initializeRelay();
                    return i.makeEthereumJSONRPCRequest(e, this.jsonRpcUrl).catch(t => {
                        var n;
                        throw (t.code === c.standardErrorCodes.rpc.methodNotFound || t.code === c.standardErrorCodes.rpc.methodNotSupported) && (null === (n = this.diagnostic) || void 0 === n || n.log(J.EVENTS.METHOD_NOT_IMPLEMENTED, {
                            method: e.method,
                            sessionIdHash: this._relay ? H.Session.hash(this._relay.session.id) : void 0
                        })), t
                    })
                }
                _handleAsynchronousFilterMethods(e) {
                    let {
                        method: t
                    } = e, n = e.params || [];
                    switch (t) {
                        case "eth_newFilter":
                            return this._eth_newFilter(n);
                        case "eth_newBlockFilter":
                            return this._eth_newBlockFilter();
                        case "eth_newPendingTransactionFilter":
                            return this._eth_newPendingTransactionFilter();
                        case "eth_getFilterChanges":
                            return this._eth_getFilterChanges(n);
                        case "eth_getFilterLogs":
                            return this._eth_getFilterLogs(n)
                    }
                }
                _handleSubscriptionMethods(e) {
                    switch (e.method) {
                        case "eth_subscribe":
                        case "eth_unsubscribe":
                            return this._subscriptionManager.handleRequest(e)
                    }
                }
                _isKnownAddress(e) {
                    try {
                        let t = (0, u.ensureAddressString)(e),
                            n = this._addresses.map(e => (0, u.ensureAddressString)(e));
                        return n.includes(t)
                    } catch (e) {}
                    return !1
                }
                _ensureKnownAddress(e) {
                    var t;
                    if (!this._isKnownAddress(e)) throw null === (t = this.diagnostic) || void 0 === t || t.log(J.EVENTS.UNKNOWN_ADDRESS_ENCOUNTERED), Error("Unknown Ethereum address")
                }
                _prepareTransactionParams(e) {
                    let t = e.from ? (0, u.ensureAddressString)(e.from) : this.selectedAddress;
                    if (!t) throw Error("Ethereum address is unavailable");
                    this._ensureKnownAddress(t);
                    let n = e.to ? (0, u.ensureAddressString)(e.to) : null,
                        o = null != e.value ? (0, u.ensureBN)(e.value) : new a.default(0),
                        l = e.data ? (0, u.ensureBuffer)(e.data) : i.alloc(0),
                        c = null != e.nonce ? (0, u.ensureIntNumber)(e.nonce) : null,
                        R = null != e.gasPrice ? (0, u.ensureBN)(e.gasPrice) : null,
                        N = null != e.maxFeePerGas ? (0, u.ensureBN)(e.maxFeePerGas) : null,
                        H = null != e.maxPriorityFeePerGas ? (0, u.ensureBN)(e.maxPriorityFeePerGas) : null,
                        U = null != e.gas ? (0, u.ensureBN)(e.gas) : null,
                        W = e.chainId ? (0, u.ensureIntNumber)(e.chainId) : this.getChainId();
                    return {
                        fromAddress: t,
                        toAddress: n,
                        weiValue: o,
                        data: l,
                        nonce: c,
                        gasPriceInWei: R,
                        maxFeePerGas: N,
                        maxPriorityFeePerGas: H,
                        gasLimit: U,
                        chainId: W
                    }
                }
                _isAuthorized() {
                    return this._addresses.length > 0
                }
                _requireAuthorization() {
                    if (!this._isAuthorized()) throw c.standardErrors.provider.unauthorized({})
                }
                _throwUnsupportedMethodError() {
                    throw c.standardErrors.provider.unsupportedMethod({})
                }
                async _signEthereumMessage(e, t, n, i) {
                    this._ensureKnownAddress(t);
                    try {
                        let o = await this.initializeRelay(),
                            a = await o.signEthereumMessage(e, t, n, i).promise;
                        if ((0, U.isErrorResponse)(a)) throw Error(a.errorMessage);
                        return {
                            jsonrpc: "2.0",
                            id: 0,
                            result: a.result
                        }
                    } catch (e) {
                        if ("string" == typeof e.message && e.message.match(/(denied|rejected)/i)) throw c.standardErrors.provider.userRejectedRequest("User denied message signature");
                        throw e
                    }
                }
                async _ethereumAddressFromSignedMessage(e, t, n) {
                    let i = await this.initializeRelay(),
                        o = await i.ethereumAddressFromSignedMessage(e, t, n).promise;
                    if ((0, U.isErrorResponse)(o)) throw Error(o.errorMessage);
                    return {
                        jsonrpc: "2.0",
                        id: 0,
                        result: o.result
                    }
                }
                _eth_accounts() {
                    return [...this._addresses]
                }
                _eth_coinbase() {
                    return this.selectedAddress || null
                }
                _net_version() {
                    return this.getChainId().toString(10)
                }
                _eth_chainId() {
                    return (0, u.hexStringFromIntNumber)(this.getChainId())
                }
                getChainId() {
                    let e = this._storage.getItem(Y);
                    if (!e) return (0, u.ensureIntNumber)(this._chainIdFromOpts);
                    let t = parseInt(e, 10);
                    return (0, u.ensureIntNumber)(t)
                }
                async _eth_requestAccounts() {
                    var e;
                    let t;
                    if (null === (e = this.diagnostic) || void 0 === e || e.log(J.EVENTS.ETH_ACCOUNTS_STATE, {
                            method: "provider::_eth_requestAccounts",
                            addresses_length: this._addresses.length,
                            sessionIdHash: this._relay ? H.Session.hash(this._relay.session.id) : void 0
                        }), this._isAuthorized()) return Promise.resolve({
                        jsonrpc: "2.0",
                        id: 0,
                        result: this._addresses
                    });
                    try {
                        let e = await this.initializeRelay();
                        if (t = await e.requestEthereumAccounts().promise, (0, U.isErrorResponse)(t)) throw Error(t.errorMessage)
                    } catch (e) {
                        if ("string" == typeof e.message && e.message.match(/(denied|rejected)/i)) throw c.standardErrors.provider.userRejectedRequest("User denied account authorization");
                        throw e
                    }
                    if (!t.result) throw Error("accounts received is empty");
                    return this._setAddresses(t.result), this.isCoinbaseBrowser || await this.switchEthereumChain(this.getChainId()), {
                        jsonrpc: "2.0",
                        id: 0,
                        result: this._addresses
                    }
                }
                _eth_sign(e) {
                    this._requireAuthorization();
                    let t = (0, u.ensureAddressString)(e[0]),
                        n = (0, u.ensureBuffer)(e[1]);
                    return this._signEthereumMessage(n, t, !1)
                }
                _eth_ecRecover(e) {
                    let t = (0, u.ensureBuffer)(e[0]),
                        n = (0, u.ensureBuffer)(e[1]);
                    return this._ethereumAddressFromSignedMessage(t, n, !1)
                }
                _personal_sign(e) {
                    this._requireAuthorization();
                    let t = (0, u.ensureBuffer)(e[0]),
                        n = (0, u.ensureAddressString)(e[1]);
                    return this._signEthereumMessage(t, n, !0)
                }
                _personal_ecRecover(e) {
                    let t = (0, u.ensureBuffer)(e[0]),
                        n = (0, u.ensureBuffer)(e[1]);
                    return this._ethereumAddressFromSignedMessage(t, n, !0)
                }
                async _eth_signTransaction(e) {
                    this._requireAuthorization();
                    let t = this._prepareTransactionParams(e[0] || {});
                    try {
                        let e = await this.initializeRelay(),
                            n = await e.signEthereumTransaction(t).promise;
                        if ((0, U.isErrorResponse)(n)) throw Error(n.errorMessage);
                        return {
                            jsonrpc: "2.0",
                            id: 0,
                            result: n.result
                        }
                    } catch (e) {
                        if ("string" == typeof e.message && e.message.match(/(denied|rejected)/i)) throw c.standardErrors.provider.userRejectedRequest("User denied transaction signature");
                        throw e
                    }
                }
                async _eth_sendRawTransaction(e) {
                    let t = (0, u.ensureBuffer)(e[0]),
                        n = await this.initializeRelay(),
                        i = await n.submitEthereumTransaction(t, this.getChainId()).promise;
                    if ((0, U.isErrorResponse)(i)) throw Error(i.errorMessage);
                    return {
                        jsonrpc: "2.0",
                        id: 0,
                        result: i.result
                    }
                }
                async _eth_sendTransaction(e) {
                    this._requireAuthorization();
                    let t = this._prepareTransactionParams(e[0] || {});
                    try {
                        let e = await this.initializeRelay(),
                            n = await e.signAndSubmitEthereumTransaction(t).promise;
                        if ((0, U.isErrorResponse)(n)) throw Error(n.errorMessage);
                        return {
                            jsonrpc: "2.0",
                            id: 0,
                            result: n.result
                        }
                    } catch (e) {
                        if ("string" == typeof e.message && e.message.match(/(denied|rejected)/i)) throw c.standardErrors.provider.userRejectedRequest("User denied transaction signature");
                        throw e
                    }
                }
                async _eth_signTypedData_v1(e) {
                    this._requireAuthorization();
                    let t = (0, u.ensureParsedJSONObject)(e[0]),
                        n = (0, u.ensureAddressString)(e[1]);
                    this._ensureKnownAddress(n);
                    let i = W.default.hashForSignTypedDataLegacy({
                            data: t
                        }),
                        o = JSON.stringify(t, null, 2);
                    return this._signEthereumMessage(i, n, !1, o)
                }
                async _eth_signTypedData_v3(e) {
                    this._requireAuthorization();
                    let t = (0, u.ensureAddressString)(e[0]),
                        n = (0, u.ensureParsedJSONObject)(e[1]);
                    this._ensureKnownAddress(t);
                    let i = W.default.hashForSignTypedData_v3({
                            data: n
                        }),
                        o = JSON.stringify(n, null, 2);
                    return this._signEthereumMessage(i, t, !1, o)
                }
                async _eth_signTypedData_v4(e) {
                    this._requireAuthorization();
                    let t = (0, u.ensureAddressString)(e[0]),
                        n = (0, u.ensureParsedJSONObject)(e[1]);
                    this._ensureKnownAddress(t);
                    let i = W.default.hashForSignTypedData_v4({
                            data: n
                        }),
                        o = JSON.stringify(n, null, 2);
                    return this._signEthereumMessage(i, t, !1, o)
                }
                async _cbwallet_arbitrary(e) {
                    let t = e[0],
                        n = e[1];
                    if ("string" != typeof n) throw Error("parameter must be a string");
                    if ("object" != typeof t || null === t) throw Error("parameter must be an object");
                    let i = await this.genericRequest(t, n);
                    return {
                        jsonrpc: "2.0",
                        id: 0,
                        result: i
                    }
                }
                async _wallet_addEthereumChain(e) {
                    var t, n, i, o;
                    let a = e[0];
                    if ((null === (t = a.rpcUrls) || void 0 === t ? void 0 : t.length) === 0) return {
                        jsonrpc: "2.0",
                        id: 0,
                        error: {
                            code: 2,
                            message: "please pass in at least 1 rpcUrl"
                        }
                    };
                    if (!a.chainName || "" === a.chainName.trim()) throw c.standardErrors.rpc.invalidParams("chainName is a required field");
                    if (!a.nativeCurrency) throw c.standardErrors.rpc.invalidParams("nativeCurrency is a required field");
                    let l = parseInt(a.chainId, 16),
                        u = await this.addEthereumChain(l, null !== (n = a.rpcUrls) && void 0 !== n ? n : [], null !== (i = a.blockExplorerUrls) && void 0 !== i ? i : [], a.chainName, null !== (o = a.iconUrls) && void 0 !== o ? o : [], a.nativeCurrency);
                    return u ? {
                        jsonrpc: "2.0",
                        id: 0,
                        result: null
                    } : {
                        jsonrpc: "2.0",
                        id: 0,
                        error: {
                            code: 2,
                            message: "unable to add ethereum chain"
                        }
                    }
                }
                async _wallet_switchEthereumChain(e) {
                    let t = e[0];
                    return await this.switchEthereumChain(parseInt(t.chainId, 16)), {
                        jsonrpc: "2.0",
                        id: 0,
                        result: null
                    }
                }
                async _wallet_watchAsset(e) {
                    let t = Array.isArray(e) ? e[0] : e;
                    if (!t.type) throw c.standardErrors.rpc.invalidParams("Type is required");
                    if ((null == t ? void 0 : t.type) !== "ERC20") throw c.standardErrors.rpc.invalidParams(`Asset of type '${t.type}' is not supported`);
                    if (!(null == t ? void 0 : t.options)) throw c.standardErrors.rpc.invalidParams("Options are required");
                    if (!(null == t ? void 0 : t.options.address)) throw c.standardErrors.rpc.invalidParams("Address is required");
                    let n = this.getChainId(),
                        {
                            address: i,
                            symbol: o,
                            image: a,
                            decimals: l
                        } = t.options,
                        u = await this.watchAsset(t.type, i, o, l, a, n);
                    return {
                        jsonrpc: "2.0",
                        id: 0,
                        result: u
                    }
                }
                _eth_uninstallFilter(e) {
                    let t = (0, u.ensureHexString)(e[0]);
                    return this._filterPolyfill.uninstallFilter(t)
                }
                async _eth_newFilter(e) {
                    let t = e[0],
                        n = await this._filterPolyfill.newFilter(t);
                    return {
                        jsonrpc: "2.0",
                        id: 0,
                        result: n
                    }
                }
                async _eth_newBlockFilter() {
                    let e = await this._filterPolyfill.newBlockFilter();
                    return {
                        jsonrpc: "2.0",
                        id: 0,
                        result: e
                    }
                }
                async _eth_newPendingTransactionFilter() {
                    let e = await this._filterPolyfill.newPendingTransactionFilter();
                    return {
                        jsonrpc: "2.0",
                        id: 0,
                        result: e
                    }
                }
                _eth_getFilterChanges(e) {
                    let t = (0, u.ensureHexString)(e[0]);
                    return this._filterPolyfill.getFilterChanges(t)
                }
                _eth_getFilterLogs(e) {
                    let t = (0, u.ensureHexString)(e[0]);
                    return this._filterPolyfill.getFilterLogs(t)
                }
                initializeRelay() {
                    return this._relay ? Promise.resolve(this._relay) : this._relayProvider().then(e => (e.setAccountsCallback((e, t) => this._setAddresses(e, t)), e.setChainCallback((e, t) => {
                        this.updateProviderInfo(t, parseInt(e, 10))
                    }), e.setDappDefaultChainCallback(this._chainIdFromOpts), this._relay = e, e))
                }
            };
            t.CoinbaseWalletProvider = CoinbaseWalletProvider
        },
        15314: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.EVENTS = void 0, t.EVENTS = {
                STARTED_CONNECTING: "walletlink_sdk.started.connecting",
                CONNECTED_STATE_CHANGE: "walletlink_sdk.connected",
                DISCONNECTED: "walletlink_sdk.disconnected",
                METADATA_DESTROYED: "walletlink_sdk_metadata_destroyed",
                LINKED: "walletlink_sdk.linked",
                FAILURE: "walletlink_sdk.generic_failure",
                SESSION_CONFIG_RECEIVED: "walletlink_sdk.session_config_event_received",
                ETH_ACCOUNTS_STATE: "walletlink_sdk.eth_accounts_state",
                SESSION_STATE_CHANGE: "walletlink_sdk.session_state_change",
                UNLINKED_ERROR_STATE: "walletlink_sdk.unlinked_error_state",
                SKIPPED_CLEARING_SESSION: "walletlink_sdk.skipped_clearing_session",
                GENERAL_ERROR: "walletlink_sdk.general_error",
                WEB3_REQUEST: "walletlink_sdk.web3.request",
                WEB3_REQUEST_PUBLISHED: "walletlink_sdk.web3.request_published",
                WEB3_RESPONSE: "walletlink_sdk.web3.response",
                METHOD_NOT_IMPLEMENTED: "walletlink_sdk.method_not_implemented",
                UNKNOWN_ADDRESS_ENCOUNTERED: "walletlink_sdk.unknown_address_encountered"
            }
        },
        15692: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.filterFromParam = t.FilterPolyfill = void 0;
            let i = n(397),
                o = n(13702),
                a = {
                    jsonrpc: "2.0",
                    id: 0
                };

            function filterFromParam(e) {
                return {
                    fromBlock: intBlockHeightFromHexBlockHeight(e.fromBlock),
                    toBlock: intBlockHeightFromHexBlockHeight(e.toBlock),
                    addresses: void 0 === e.address ? null : Array.isArray(e.address) ? e.address : [e.address],
                    topics: e.topics || []
                }
            }

            function paramFromFilter(e) {
                let t = {
                    fromBlock: hexBlockHeightFromIntBlockHeight(e.fromBlock),
                    toBlock: hexBlockHeightFromIntBlockHeight(e.toBlock),
                    topics: e.topics
                };
                return null !== e.addresses && (t.address = e.addresses), t
            }

            function intBlockHeightFromHexBlockHeight(e) {
                if (void 0 === e || "latest" === e || "pending" === e) return "latest";
                if ("earliest" === e) return (0, i.IntNumber)(0);
                if ((0, o.isHexString)(e)) return (0, o.intNumberFromHexString)(e);
                throw Error(`Invalid block option: ${String(e)}`)
            }

            function hexBlockHeightFromIntBlockHeight(e) {
                return "latest" === e ? e : (0, o.hexStringFromIntNumber)(e)
            }

            function filterNotFoundError() {
                return Object.assign(Object.assign({}, a), {
                    error: {
                        code: -32e3,
                        message: "filter not found"
                    }
                })
            }

            function emptyResult() {
                return Object.assign(Object.assign({}, a), {
                    result: []
                })
            }
            t.FilterPolyfill = class {
                constructor(e) {
                    this.logFilters = new Map, this.blockFilters = new Set, this.pendingTransactionFilters = new Set, this.cursors = new Map, this.timeouts = new Map, this.nextFilterId = (0, i.IntNumber)(1), this.REQUEST_THROTTLE_INTERVAL = 1e3, this.lastFetchTimestamp = new Date(0), this.resolvers = [], this.provider = e
                }
                async newFilter(e) {
                    let t = filterFromParam(e),
                        n = this.makeFilterId(),
                        i = await this.setInitialCursorPosition(n, t.fromBlock);
                    return console.info(`Installing new log filter(${n}):`, t, "initial cursor position:", i), this.logFilters.set(n, t), this.setFilterTimeout(n), (0, o.hexStringFromIntNumber)(n)
                }
                async newBlockFilter() {
                    let e = this.makeFilterId(),
                        t = await this.setInitialCursorPosition(e, "latest");
                    return console.info(`Installing new block filter (${e}) with initial cursor position:`, t), this.blockFilters.add(e), this.setFilterTimeout(e), (0, o.hexStringFromIntNumber)(e)
                }
                async newPendingTransactionFilter() {
                    let e = this.makeFilterId(),
                        t = await this.setInitialCursorPosition(e, "latest");
                    return console.info(`Installing new block filter (${e}) with initial cursor position:`, t), this.pendingTransactionFilters.add(e), this.setFilterTimeout(e), (0, o.hexStringFromIntNumber)(e)
                }
                uninstallFilter(e) {
                    let t = (0, o.intNumberFromHexString)(e);
                    return console.info(`Uninstalling filter (${t})`), this.deleteFilter(t), !0
                }
                getFilterChanges(e) {
                    let t = (0, o.intNumberFromHexString)(e);
                    return (this.timeouts.has(t) && this.setFilterTimeout(t), this.logFilters.has(t)) ? this.getLogFilterChanges(t) : this.blockFilters.has(t) ? this.getBlockFilterChanges(t) : this.pendingTransactionFilters.has(t) ? this.getPendingTransactionFilterChanges(t) : Promise.resolve(filterNotFoundError())
                }
                async getFilterLogs(e) {
                    let t = (0, o.intNumberFromHexString)(e),
                        n = this.logFilters.get(t);
                    return n ? this.sendAsyncPromise(Object.assign(Object.assign({}, a), {
                        method: "eth_getLogs",
                        params: [paramFromFilter(n)]
                    })) : filterNotFoundError()
                }
                makeFilterId() {
                    return (0, i.IntNumber)(++this.nextFilterId)
                }
                sendAsyncPromise(e) {
                    return new Promise((t, n) => {
                        this.provider.sendAsync(e, (e, i) => e ? n(e) : Array.isArray(i) || null == i ? n(Error(`unexpected response received: ${JSON.stringify(i)}`)) : void t(i))
                    })
                }
                deleteFilter(e) {
                    console.info(`Deleting filter (${e})`), this.logFilters.delete(e), this.blockFilters.delete(e), this.pendingTransactionFilters.delete(e), this.cursors.delete(e), this.timeouts.delete(e)
                }
                async getLogFilterChanges(e) {
                    let t = this.logFilters.get(e),
                        n = this.cursors.get(e);
                    if (!n || !t) return filterNotFoundError();
                    let l = await this.getCurrentBlockHeight(),
                        c = "latest" === t.toBlock ? l : t.toBlock;
                    if (n > l || n > Number(t.toBlock)) return emptyResult();
                    console.info(`Fetching logs from ${n} to ${c} for filter ${e}`);
                    let u = await this.sendAsyncPromise(Object.assign(Object.assign({}, a), {
                        method: "eth_getLogs",
                        params: [paramFromFilter(Object.assign(Object.assign({}, t), {
                            fromBlock: n,
                            toBlock: c
                        }))]
                    }));
                    if (Array.isArray(u.result)) {
                        let t = u.result.map(e => (0, o.intNumberFromHexString)(e.blockNumber || "0x0")),
                            a = Math.max(...t);
                        if (a && a > n) {
                            let t = (0, i.IntNumber)(a + 1);
                            console.info(`Moving cursor position for filter (${e}) from ${n} to ${t}`), this.cursors.set(e, t)
                        }
                    }
                    return u
                }
                async getBlockFilterChanges(e) {
                    let t = this.cursors.get(e);
                    if (!t) return filterNotFoundError();
                    let n = await this.getCurrentBlockHeight();
                    if (t > n) return emptyResult();
                    console.info(`Fetching blocks from ${t} to ${n} for filter (${e})`);
                    let l = (await Promise.all((0, o.range)(t, n + 1).map(e => this.getBlockHashByNumber((0, i.IntNumber)(e))))).filter(e => !!e),
                        c = (0, i.IntNumber)(t + l.length);
                    return console.info(`Moving cursor position for filter (${e}) from ${t} to ${c}`), this.cursors.set(e, c), Object.assign(Object.assign({}, a), {
                        result: l
                    })
                }
                async getPendingTransactionFilterChanges(e) {
                    return Promise.resolve(emptyResult())
                }
                async setInitialCursorPosition(e, t) {
                    let n = await this.getCurrentBlockHeight(),
                        i = "number" == typeof t && t > n ? t : n;
                    return this.cursors.set(e, i), i
                }
                setFilterTimeout(e) {
                    let t = this.timeouts.get(e);
                    t && window.clearTimeout(t);
                    let n = window.setTimeout(() => {
                        console.info(`Filter (${e}) timed out`), this.deleteFilter(e)
                    }, 3e5);
                    this.timeouts.set(e, n)
                }
                async getCurrentBlockHeight() {
                    let e = new Date;
                    if (e.getTime() - this.lastFetchTimestamp.getTime() > this.REQUEST_THROTTLE_INTERVAL) {
                        this.lastFetchTimestamp = e;
                        let t = await this._getCurrentBlockHeight();
                        this.currentBlockHeight = t, this.resolvers.forEach(e => e(t)), this.resolvers = []
                    }
                    return this.currentBlockHeight ? this.currentBlockHeight : new Promise(e => this.resolvers.push(e))
                }
                async _getCurrentBlockHeight() {
                    let {
                        result: e
                    } = await this.sendAsyncPromise(Object.assign(Object.assign({}, a), {
                        method: "eth_blockNumber",
                        params: []
                    }));
                    return (0, o.intNumberFromHexString)((0, o.ensureHexString)(e))
                }
                async getBlockHashByNumber(e) {
                    let t = await this.sendAsyncPromise(Object.assign(Object.assign({}, a), {
                        method: "eth_getBlockByNumber",
                        params: [(0, o.hexStringFromIntNumber)(e), !1]
                    }));
                    return t.result && "string" == typeof t.result.hash ? (0, o.ensureHexString)(t.result.hash) : null
                }
            }, t.filterFromParam = filterFromParam
        },
        20282: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SubscriptionManager = void 0;
            let i = n(97538),
                o = n(12277),
                noop = () => {};
            t.SubscriptionManager = class {
                constructor(e) {
                    let t = new i.PollingBlockTracker({
                            provider: e,
                            pollingInterval: 15e3,
                            setSkipCacheFlag: !0
                        }),
                        {
                            events: n,
                            middleware: a
                        } = o({
                            blockTracker: t,
                            provider: e
                        });
                    this.events = n, this.subscriptionMiddleware = a
                }
                async handleRequest(e) {
                    let t = {};
                    return await this.subscriptionMiddleware(e, t, noop, noop), t
                }
                destroy() {
                    this.subscriptionMiddleware.destroy()
                }
            }
        },
        15701: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.RelayAbstract = t.APP_VERSION_KEY = t.LOCAL_STORAGE_ADDRESSES_KEY = t.WALLET_USER_NAME_KEY = void 0;
            let i = n(51561);
            t.WALLET_USER_NAME_KEY = "walletUsername", t.LOCAL_STORAGE_ADDRESSES_KEY = "Addresses", t.APP_VERSION_KEY = "AppVersion", t.RelayAbstract = class {
                async makeEthereumJSONRPCRequest(e, t) {
                    if (!t) throw Error("Error: No jsonRpcUrl provided");
                    return window.fetch(t, {
                        method: "POST",
                        body: JSON.stringify(e),
                        mode: "cors",
                        headers: {
                            "Content-Type": "application/json"
                        }
                    }).then(e => e.json()).then(t => {
                        if (!t) throw i.standardErrors.rpc.parse({});
                        let {
                            error: n
                        } = t;
                        if (n) throw (0, i.serializeError)(n, e.method);
                        return t
                    })
                }
            }
        },
        88355: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.RelayEventManager = void 0;
            let i = n(13702);
            t.RelayEventManager = class {
                constructor() {
                    this._nextRequestId = 0, this.callbacks = new Map
                }
                makeRequestId() {
                    this._nextRequestId = (this._nextRequestId + 1) % 2147483647;
                    let e = this._nextRequestId,
                        t = (0, i.prepend0x)(e.toString(16)),
                        n = this.callbacks.get(t);
                    return n && this.callbacks.delete(t), e
                }
            }
        },
        87487: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Session = void 0;
            let i = n(39540),
                o = n(13702),
                a = "session:id",
                l = "session:secret",
                c = "session:linked";
            let Session = class Session {
                constructor(e, t, n, a) {
                    this._storage = e, this._id = t || (0, o.randomBytesHex)(16), this._secret = n || (0, o.randomBytesHex)(32), this._key = new i.sha256().update(`${this._id}, ${this._secret} WalletLink`).digest("hex"), this._linked = !!a
                }
                static load(e) {
                    let t = e.getItem(a),
                        n = e.getItem(c),
                        i = e.getItem(l);
                    return t && i ? new Session(e, t, i, "1" === n) : null
                }
                static hash(e) {
                    return new i.sha256().update(e).digest("hex")
                }
                get id() {
                    return this._id
                }
                get secret() {
                    return this._secret
                }
                get key() {
                    return this._key
                }
                get linked() {
                    return this._linked
                }
                set linked(e) {
                    this._linked = e, this.persistLinked()
                }
                save() {
                    return this._storage.setItem(a, this._id), this._storage.setItem(l, this._secret), this.persistLinked(), this
                }
                persistLinked() {
                    this._storage.setItem(c, this._linked ? "1" : "0")
                }
            };
            t.Session = Session
        },
        98453: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.MobileRelay = void 0;
            let i = n(13702),
                o = n(36692),
                a = n(96734);
            let MobileRelay = class MobileRelay extends o.WalletLinkRelay {
                constructor(e) {
                    var t;
                    super(e), this._enableMobileWalletLink = null !== (t = e.enableMobileWalletLink) && void 0 !== t && t
                }
                requestEthereumAccounts() {
                    return this._enableMobileWalletLink ? super.requestEthereumAccounts() : {
                        promise: new Promise(() => {
                            let e = (0, i.getLocation)();
                            e.href = `https://go.cb-w.com/dapp?cb_url=${encodeURIComponent(e.href)}`
                        }),
                        cancel: () => {}
                    }
                }
                publishWeb3RequestEvent(e, t) {
                    if (super.publishWeb3RequestEvent(e, t), !(this._enableMobileWalletLink && this.ui instanceof a.MobileRelayUI)) return;
                    let n = !1;
                    switch (t.method) {
                        case "requestEthereumAccounts":
                        case "connectAndSignIn":
                            n = !0, this.ui.openCoinbaseWalletDeeplink(this.getQRCodeUrl());
                            break;
                        case "switchEthereumChain":
                            return;
                        default:
                            n = !0, this.ui.openCoinbaseWalletDeeplink()
                    }
                    n && window.addEventListener("blur", () => {
                        window.addEventListener("focus", () => {
                            this.connection.checkUnseenEvents()
                        }, {
                            once: !0
                        })
                    }, {
                        once: !0
                    })
                }
                handleWeb3ResponseMessage(e) {
                    super.handleWeb3ResponseMessage(e)
                }
                connectAndSignIn(e) {
                    if (!this._enableMobileWalletLink) throw Error("connectAndSignIn is supported only when enableMobileWalletLink is on");
                    return this.sendRequest({
                        method: "connectAndSignIn",
                        params: {
                            appName: this.appName,
                            appLogoUrl: this.appLogoUrl,
                            domain: window.location.hostname,
                            aud: window.location.href,
                            version: "1",
                            type: "eip4361",
                            nonce: e.nonce,
                            iat: new Date().toISOString(),
                            chainId: `eip155:${this.dappDefaultChain}`,
                            statement: e.statement,
                            resources: e.resources
                        }
                    })
                }
            };
            t.MobileRelay = MobileRelay
        },
        96734: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.MobileRelayUI = void 0;
            let i = n(63107);
            t.MobileRelayUI = class {
                constructor(e) {
                    this.attached = !1, this.darkMode = !1, this.redirectDialog = new i.RedirectDialog, this.darkMode = e.darkMode
                }
                attach() {
                    if (this.attached) throw Error("Coinbase Wallet SDK UI is already attached");
                    this.redirectDialog.attach(), this.attached = !0
                }
                setConnected(e) {}
                redirectToCoinbaseWallet(e) {
                    let t = new URL("https://go.cb-w.com/walletlink");
                    t.searchParams.append("redirect_url", window.location.href), e && t.searchParams.append("wl_url", e);
                    let n = document.createElement("a");
                    n.target = "cbw-opener", n.href = t.href, n.rel = "noreferrer noopener", n.click()
                }
                openCoinbaseWalletDeeplink(e) {
                    this.redirectDialog.present({
                        title: "Redirecting to Coinbase Wallet...",
                        buttonText: "Open",
                        darkMode: this.darkMode,
                        onButtonClick: () => {
                            this.redirectToCoinbaseWallet(e)
                        }
                    }), setTimeout(() => {
                        this.redirectToCoinbaseWallet(e)
                    }, 99)
                }
                showConnecting(e) {
                    return () => {
                        this.redirectDialog.clear()
                    }
                }
                hideRequestEthereumAccounts() {
                    this.redirectDialog.clear()
                }
                requestEthereumAccounts() {}
                addEthereumChain() {}
                watchAsset() {}
                selectProvider() {}
                switchEthereumChain() {}
                signEthereumMessage() {}
                signEthereumTransaction() {}
                submitEthereumTransaction() {}
                ethereumAddressFromSignedMessage() {}
                reloadUI() {}
                setStandalone() {}
                setConnectDisabled() {}
                inlineAccountsResponse() {
                    return !1
                }
                inlineAddEthereumChain() {
                    return !1
                }
                inlineWatchAsset() {
                    return !1
                }
                inlineSwitchEthereumChain() {
                    return !1
                }
                isStandalone() {
                    return !1
                }
            }
        },
        36692: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.WalletLinkRelay = void 0;
            let i = n(51561),
                o = n(397),
                a = n(13702),
                l = n(15314),
                c = n(15701),
                u = n(87487),
                R = n(4226),
                N = n(17763),
                H = n(10044);
            let WalletLinkRelay = class WalletLinkRelay extends c.RelayAbstract {
                constructor(e) {
                    var t;
                    super(), this.accountsCallback = null, this.chainCallbackParams = {
                        chainId: "",
                        jsonRpcUrl: ""
                    }, this.chainCallback = null, this.dappDefaultChain = 1, this.appName = "", this.appLogoUrl = null, this.linkedUpdated = e => {
                        var t;
                        this.isLinked = e;
                        let n = this.storage.getItem(c.LOCAL_STORAGE_ADDRESSES_KEY);
                        if (e && (this.session.linked = e), this.isUnlinkedErrorState = !1, n) {
                            let i = n.split(" "),
                                o = "true" === this.storage.getItem("IsStandaloneSigning");
                            if ("" !== i[0] && !e && this.session.linked && !o) {
                                this.isUnlinkedErrorState = !0;
                                let e = this.getSessionIdHash();
                                null === (t = this.diagnostic) || void 0 === t || t.log(l.EVENTS.UNLINKED_ERROR_STATE, {
                                    sessionIdHash: e
                                })
                            }
                        }
                    }, this.metadataUpdated = (e, t) => {
                        this.storage.setItem(e, t)
                    }, this.chainUpdated = (e, t) => {
                        (this.chainCallbackParams.chainId !== e || this.chainCallbackParams.jsonRpcUrl !== t) && (this.chainCallbackParams = {
                            chainId: e,
                            jsonRpcUrl: t
                        }, this.chainCallback && this.chainCallback(e, t))
                    }, this.accountUpdated = e => {
                        this.accountsCallback && this.accountsCallback([e]), WalletLinkRelay.accountRequestCallbackIds.size > 0 && (Array.from(WalletLinkRelay.accountRequestCallbackIds.values()).forEach(t => {
                            this.invokeCallback(Object.assign(Object.assign({}, {
                                type: "WEB3_RESPONSE",
                                id: t,
                                response: {
                                    method: "requestEthereumAccounts",
                                    result: [e]
                                }
                            }), {
                                id: t
                            }))
                        }), WalletLinkRelay.accountRequestCallbackIds.clear())
                    }, this.connectedUpdated = e => {
                        this.ui.setConnected(e)
                    }, this.resetAndReload = this.resetAndReload.bind(this), this.linkAPIUrl = e.linkAPIUrl, this.storage = e.storage, this.options = e;
                    let {
                        session: n,
                        ui: i,
                        connection: o
                    } = this.subscribe();
                    this._session = n, this.connection = o, this.relayEventManager = e.relayEventManager, this.diagnostic = e.diagnosticLogger, this._reloadOnDisconnect = null === (t = e.reloadOnDisconnect) || void 0 === t || t, this.ui = i
                }
                subscribe() {
                    let e = u.Session.load(this.storage) || new u.Session(this.storage).save(),
                        {
                            linkAPIUrl: t,
                            diagnostic: n
                        } = this,
                        i = new R.WalletLinkConnection({
                            session: e,
                            linkAPIUrl: t,
                            diagnostic: n,
                            listener: this
                        }),
                        {
                            version: o,
                            darkMode: a
                        } = this.options,
                        l = this.options.uiConstructor({
                            linkAPIUrl: t,
                            version: o,
                            darkMode: a,
                            session: e
                        });
                    return i.connect(), {
                        session: e,
                        ui: l,
                        connection: i
                    }
                }
                attachUI() {
                    this.ui.attach()
                }
                resetAndReload() {
                    Promise.race([this.connection.setSessionMetadata("__destroyed", "1"), new Promise(e => setTimeout(() => e(null), 1e3))]).then(() => {
                        var e, t;
                        let n = this.ui.isStandalone();
                        null === (e = this.diagnostic) || void 0 === e || e.log(l.EVENTS.SESSION_STATE_CHANGE, {
                            method: "relay::resetAndReload",
                            sessionMetadataChange: "__destroyed, 1",
                            sessionIdHash: this.getSessionIdHash()
                        }), this.connection.destroy();
                        let i = u.Session.load(this.storage);
                        if ((null == i ? void 0 : i.id) === this._session.id ? this.storage.clear() : i && (null === (t = this.diagnostic) || void 0 === t || t.log(l.EVENTS.SKIPPED_CLEARING_SESSION, {
                                sessionIdHash: this.getSessionIdHash(),
                                storedSessionIdHash: u.Session.hash(i.id)
                            })), this._reloadOnDisconnect) {
                            this.ui.reloadUI();
                            return
                        }
                        this.accountsCallback && this.accountsCallback([], !0);
                        let {
                            session: o,
                            ui: a,
                            connection: c
                        } = this.subscribe();
                        this._session = o, this.connection = c, this.ui = a, n && this.ui.setStandalone && this.ui.setStandalone(!0), this.attachUI()
                    }).catch(e => {
                        var t;
                        null === (t = this.diagnostic) || void 0 === t || t.log(l.EVENTS.FAILURE, {
                            method: "relay::resetAndReload",
                            message: `failed to reset and reload with ${e}`,
                            sessionIdHash: this.getSessionIdHash()
                        })
                    })
                }
                setAppInfo(e, t) {
                    this.appName = e, this.appLogoUrl = t
                }
                getStorageItem(e) {
                    return this.storage.getItem(e)
                }
                get session() {
                    return this._session
                }
                setStorageItem(e, t) {
                    this.storage.setItem(e, t)
                }
                signEthereumMessage(e, t, n, i) {
                    return this.sendRequest({
                        method: "signEthereumMessage",
                        params: {
                            message: (0, a.hexStringFromBuffer)(e, !0),
                            address: t,
                            addPrefix: n,
                            typedDataJson: i || null
                        }
                    })
                }
                ethereumAddressFromSignedMessage(e, t, n) {
                    return this.sendRequest({
                        method: "ethereumAddressFromSignedMessage",
                        params: {
                            message: (0, a.hexStringFromBuffer)(e, !0),
                            signature: (0, a.hexStringFromBuffer)(t, !0),
                            addPrefix: n
                        }
                    })
                }
                signEthereumTransaction(e) {
                    return this.sendRequest({
                        method: "signEthereumTransaction",
                        params: {
                            fromAddress: e.fromAddress,
                            toAddress: e.toAddress,
                            weiValue: (0, a.bigIntStringFromBN)(e.weiValue),
                            data: (0, a.hexStringFromBuffer)(e.data, !0),
                            nonce: e.nonce,
                            gasPriceInWei: e.gasPriceInWei ? (0, a.bigIntStringFromBN)(e.gasPriceInWei) : null,
                            maxFeePerGas: e.gasPriceInWei ? (0, a.bigIntStringFromBN)(e.gasPriceInWei) : null,
                            maxPriorityFeePerGas: e.gasPriceInWei ? (0, a.bigIntStringFromBN)(e.gasPriceInWei) : null,
                            gasLimit: e.gasLimit ? (0, a.bigIntStringFromBN)(e.gasLimit) : null,
                            chainId: e.chainId,
                            shouldSubmit: !1
                        }
                    })
                }
                signAndSubmitEthereumTransaction(e) {
                    return this.sendRequest({
                        method: "signEthereumTransaction",
                        params: {
                            fromAddress: e.fromAddress,
                            toAddress: e.toAddress,
                            weiValue: (0, a.bigIntStringFromBN)(e.weiValue),
                            data: (0, a.hexStringFromBuffer)(e.data, !0),
                            nonce: e.nonce,
                            gasPriceInWei: e.gasPriceInWei ? (0, a.bigIntStringFromBN)(e.gasPriceInWei) : null,
                            maxFeePerGas: e.maxFeePerGas ? (0, a.bigIntStringFromBN)(e.maxFeePerGas) : null,
                            maxPriorityFeePerGas: e.maxPriorityFeePerGas ? (0, a.bigIntStringFromBN)(e.maxPriorityFeePerGas) : null,
                            gasLimit: e.gasLimit ? (0, a.bigIntStringFromBN)(e.gasLimit) : null,
                            chainId: e.chainId,
                            shouldSubmit: !0
                        }
                    })
                }
                submitEthereumTransaction(e, t) {
                    return this.sendRequest({
                        method: "submitEthereumTransaction",
                        params: {
                            signedTransaction: (0, a.hexStringFromBuffer)(e, !0),
                            chainId: t
                        }
                    })
                }
                scanQRCode(e) {
                    return this.sendRequest({
                        method: "scanQRCode",
                        params: {
                            regExp: e
                        }
                    })
                }
                getQRCodeUrl() {
                    return (0, a.createQrUrl)(this._session.id, this._session.secret, this.linkAPIUrl, !1, this.options.version, this.dappDefaultChain)
                }
                genericRequest(e, t) {
                    return this.sendRequest({
                        method: "generic",
                        params: {
                            action: t,
                            data: e
                        }
                    })
                }
                sendGenericMessage(e) {
                    return this.sendRequest(e)
                }
                sendRequest(e) {
                    let t = null,
                        n = (0, a.randomBytesHex)(8),
                        cancel = i => {
                            this.publishWeb3RequestCanceledEvent(n), this.handleErrorResponse(n, e.method, i), null == t || t()
                        },
                        i = new Promise((i, o) => {
                            this.ui.isStandalone() || (t = this.ui.showConnecting({
                                isUnlinkedErrorState: this.isUnlinkedErrorState,
                                onCancel: cancel,
                                onResetConnection: this.resetAndReload
                            })), this.relayEventManager.callbacks.set(n, e => {
                                if (null == t || t(), (0, N.isErrorResponse)(e)) return o(Error(e.errorMessage));
                                i(e)
                            }), this.ui.isStandalone() ? this.sendRequestStandalone(n, e) : this.publishWeb3RequestEvent(n, e)
                        });
                    return {
                        promise: i,
                        cancel
                    }
                }
                setConnectDisabled(e) {
                    this.ui.setConnectDisabled(e)
                }
                setAccountsCallback(e) {
                    this.accountsCallback = e
                }
                setChainCallback(e) {
                    this.chainCallback = e
                }
                setDappDefaultChainCallback(e) {
                    this.dappDefaultChain = e, this.ui instanceof H.WalletLinkRelayUI && this.ui.setChainId(e)
                }
                publishWeb3RequestEvent(e, t) {
                    var n;
                    let i = {
                            type: "WEB3_REQUEST",
                            id: e,
                            request: t
                        },
                        o = u.Session.load(this.storage);
                    null === (n = this.diagnostic) || void 0 === n || n.log(l.EVENTS.WEB3_REQUEST, {
                        eventId: i.id,
                        method: `relay::${t.method}`,
                        sessionIdHash: this.getSessionIdHash(),
                        storedSessionIdHash: o ? u.Session.hash(o.id) : "",
                        isSessionMismatched: ((null == o ? void 0 : o.id) !== this._session.id).toString()
                    }), this.publishEvent("Web3Request", i, !0).then(e => {
                        var n;
                        null === (n = this.diagnostic) || void 0 === n || n.log(l.EVENTS.WEB3_REQUEST_PUBLISHED, {
                            eventId: i.id,
                            method: `relay::${t.method}`,
                            sessionIdHash: this.getSessionIdHash(),
                            storedSessionIdHash: o ? u.Session.hash(o.id) : "",
                            isSessionMismatched: ((null == o ? void 0 : o.id) !== this._session.id).toString()
                        })
                    }).catch(e => {
                        this.handleWeb3ResponseMessage({
                            type: "WEB3_RESPONSE",
                            id: i.id,
                            response: {
                                method: t.method,
                                errorMessage: e.message
                            }
                        })
                    })
                }
                publishWeb3RequestCanceledEvent(e) {
                    this.publishEvent("Web3RequestCanceled", {
                        type: "WEB3_REQUEST_CANCELED",
                        id: e
                    }, !1).then()
                }
                publishEvent(e, t, n) {
                    return this.connection.publishEvent(e, t, n)
                }
                handleWeb3ResponseMessage(e) {
                    var t;
                    let {
                        response: n
                    } = e;
                    if (null === (t = this.diagnostic) || void 0 === t || t.log(l.EVENTS.WEB3_RESPONSE, {
                            eventId: e.id,
                            method: `relay::${n.method}`,
                            sessionIdHash: this.getSessionIdHash()
                        }), "requestEthereumAccounts" === n.method) {
                        WalletLinkRelay.accountRequestCallbackIds.forEach(t => this.invokeCallback(Object.assign(Object.assign({}, e), {
                            id: t
                        }))), WalletLinkRelay.accountRequestCallbackIds.clear();
                        return
                    }
                    this.invokeCallback(e)
                }
                handleErrorResponse(e, t, n, o) {
                    var a;
                    let l = null !== (a = null == n ? void 0 : n.message) && void 0 !== a ? a : (0, i.getMessageFromCode)(o);
                    this.handleWeb3ResponseMessage({
                        type: "WEB3_RESPONSE",
                        id: e,
                        response: {
                            method: t,
                            errorMessage: l,
                            errorCode: o
                        }
                    })
                }
                invokeCallback(e) {
                    let t = this.relayEventManager.callbacks.get(e.id);
                    t && (t(e.response), this.relayEventManager.callbacks.delete(e.id))
                }
                requestEthereumAccounts() {
                    let e = {
                            method: "requestEthereumAccounts",
                            params: {
                                appName: this.appName,
                                appLogoUrl: this.appLogoUrl || null
                            }
                        },
                        t = (0, a.randomBytesHex)(8),
                        cancel = n => {
                            this.publishWeb3RequestCanceledEvent(t), this.handleErrorResponse(t, e.method, n)
                        },
                        n = new Promise((n, o) => {
                            if (this.relayEventManager.callbacks.set(t, e => {
                                    if (this.ui.hideRequestEthereumAccounts(), (0, N.isErrorResponse)(e)) return o(Error(e.errorMessage));
                                    n(e)
                                }), this.ui.inlineAccountsResponse()) this.ui.requestEthereumAccounts({
                                onCancel: cancel,
                                onAccounts: e => {
                                    this.handleWeb3ResponseMessage({
                                        type: "WEB3_RESPONSE",
                                        id: t,
                                        response: {
                                            method: "requestEthereumAccounts",
                                            result: e
                                        }
                                    })
                                }
                            });
                            else {
                                let e = i.standardErrors.provider.userRejectedRequest("User denied account authorization");
                                this.ui.requestEthereumAccounts({
                                    onCancel: () => cancel(e)
                                })
                            }
                            WalletLinkRelay.accountRequestCallbackIds.add(t), this.ui.inlineAccountsResponse() || this.ui.isStandalone() || this.publishWeb3RequestEvent(t, e)
                        });
                    return {
                        promise: n,
                        cancel
                    }
                }
                selectProvider(e) {
                    let t = (0, a.randomBytesHex)(8),
                        n = new Promise((n, i) => {
                            this.relayEventManager.callbacks.set(t, e => {
                                if ((0, N.isErrorResponse)(e)) return i(Error(e.errorMessage));
                                n(e)
                            }), this.ui.selectProvider && this.ui.selectProvider({
                                onApprove: e => {
                                    this.handleWeb3ResponseMessage({
                                        type: "WEB3_RESPONSE",
                                        id: t,
                                        response: {
                                            method: "selectProvider",
                                            result: e
                                        }
                                    })
                                },
                                onCancel: e => {
                                    this.handleWeb3ResponseMessage({
                                        type: "WEB3_RESPONSE",
                                        id: t,
                                        response: {
                                            method: "selectProvider",
                                            result: o.ProviderType.Unselected
                                        }
                                    })
                                },
                                providerOptions: e
                            })
                        });
                    return {
                        cancel: e => {
                            this.publishWeb3RequestCanceledEvent(t), this.handleErrorResponse(t, "selectProvider", e)
                        },
                        promise: n
                    }
                }
                watchAsset(e, t, n, i, o, l) {
                    let c = {
                            method: "watchAsset",
                            params: {
                                type: e,
                                options: {
                                    address: t,
                                    symbol: n,
                                    decimals: i,
                                    image: o
                                },
                                chainId: l
                            }
                        },
                        u = null,
                        R = (0, a.randomBytesHex)(8),
                        cancel = e => {
                            this.publishWeb3RequestCanceledEvent(R), this.handleErrorResponse(R, c.method, e), null == u || u()
                        };
                    this.ui.inlineWatchAsset() || (u = this.ui.showConnecting({
                        isUnlinkedErrorState: this.isUnlinkedErrorState,
                        onCancel: cancel,
                        onResetConnection: this.resetAndReload
                    }));
                    let H = new Promise((a, H) => {
                        this.relayEventManager.callbacks.set(R, e => {
                            if (null == u || u(), (0, N.isErrorResponse)(e)) return H(Error(e.errorMessage));
                            a(e)
                        }), this.ui.inlineWatchAsset() && this.ui.watchAsset({
                            onApprove: () => {
                                this.handleWeb3ResponseMessage({
                                    type: "WEB3_RESPONSE",
                                    id: R,
                                    response: {
                                        method: "watchAsset",
                                        result: !0
                                    }
                                })
                            },
                            onCancel: e => {
                                this.handleWeb3ResponseMessage({
                                    type: "WEB3_RESPONSE",
                                    id: R,
                                    response: {
                                        method: "watchAsset",
                                        result: !1
                                    }
                                })
                            },
                            type: e,
                            address: t,
                            symbol: n,
                            decimals: i,
                            image: o,
                            chainId: l
                        }), this.ui.inlineWatchAsset() || this.ui.isStandalone() || this.publishWeb3RequestEvent(R, c)
                    });
                    return {
                        cancel,
                        promise: H
                    }
                }
                addEthereumChain(e, t, n, i, o, l) {
                    let c = {
                            method: "addEthereumChain",
                            params: {
                                chainId: e,
                                rpcUrls: t,
                                blockExplorerUrls: i,
                                chainName: o,
                                iconUrls: n,
                                nativeCurrency: l
                            }
                        },
                        u = null,
                        R = (0, a.randomBytesHex)(8),
                        cancel = e => {
                            this.publishWeb3RequestCanceledEvent(R), this.handleErrorResponse(R, c.method, e), null == u || u()
                        };
                    this.ui.inlineAddEthereumChain(e) || (u = this.ui.showConnecting({
                        isUnlinkedErrorState: this.isUnlinkedErrorState,
                        onCancel: cancel,
                        onResetConnection: this.resetAndReload
                    }));
                    let H = new Promise((t, n) => {
                        this.relayEventManager.callbacks.set(R, e => {
                            if (null == u || u(), (0, N.isErrorResponse)(e)) return n(Error(e.errorMessage));
                            t(e)
                        }), this.ui.inlineAddEthereumChain(e) && this.ui.addEthereumChain({
                            onCancel: e => {
                                this.handleWeb3ResponseMessage({
                                    type: "WEB3_RESPONSE",
                                    id: R,
                                    response: {
                                        method: "addEthereumChain",
                                        result: {
                                            isApproved: !1,
                                            rpcUrl: ""
                                        }
                                    }
                                })
                            },
                            onApprove: e => {
                                this.handleWeb3ResponseMessage({
                                    type: "WEB3_RESPONSE",
                                    id: R,
                                    response: {
                                        method: "addEthereumChain",
                                        result: {
                                            isApproved: !0,
                                            rpcUrl: e
                                        }
                                    }
                                })
                            },
                            chainId: c.params.chainId,
                            rpcUrls: c.params.rpcUrls,
                            blockExplorerUrls: c.params.blockExplorerUrls,
                            chainName: c.params.chainName,
                            iconUrls: c.params.iconUrls,
                            nativeCurrency: c.params.nativeCurrency
                        }), this.ui.inlineAddEthereumChain(e) || this.ui.isStandalone() || this.publishWeb3RequestEvent(R, c)
                    });
                    return {
                        promise: H,
                        cancel
                    }
                }
                switchEthereumChain(e, t) {
                    let n = {
                            method: "switchEthereumChain",
                            params: Object.assign({
                                chainId: e
                            }, {
                                address: t
                            })
                        },
                        o = (0, a.randomBytesHex)(8),
                        l = new Promise((t, a) => {
                            this.relayEventManager.callbacks.set(o, e => (0, N.isErrorResponse)(e) && e.errorCode ? a(i.standardErrors.provider.custom({
                                code: e.errorCode,
                                message: "Unrecognized chain ID. Try adding the chain using addEthereumChain first."
                            })) : (0, N.isErrorResponse)(e) ? a(Error(e.errorMessage)) : void t(e)), this.ui.switchEthereumChain({
                                onCancel: t => {
                                    var n;
                                    if (t) {
                                        let a = null !== (n = (0, i.getErrorCode)(t)) && void 0 !== n ? n : i.standardErrorCodes.provider.unsupportedChain;
                                        this.handleErrorResponse(o, "switchEthereumChain", t instanceof Error ? t : i.standardErrors.provider.unsupportedChain(e), a)
                                    } else this.handleWeb3ResponseMessage({
                                        type: "WEB3_RESPONSE",
                                        id: o,
                                        response: {
                                            method: "switchEthereumChain",
                                            result: {
                                                isApproved: !1,
                                                rpcUrl: ""
                                            }
                                        }
                                    })
                                },
                                onApprove: e => {
                                    this.handleWeb3ResponseMessage({
                                        type: "WEB3_RESPONSE",
                                        id: o,
                                        response: {
                                            method: "switchEthereumChain",
                                            result: {
                                                isApproved: !0,
                                                rpcUrl: e
                                            }
                                        }
                                    })
                                },
                                chainId: n.params.chainId,
                                address: n.params.address
                            }), this.ui.inlineSwitchEthereumChain() || this.ui.isStandalone() || this.publishWeb3RequestEvent(o, n)
                        });
                    return {
                        promise: l,
                        cancel: e => {
                            this.publishWeb3RequestCanceledEvent(o), this.handleErrorResponse(o, n.method, e)
                        }
                    }
                }
                inlineAddEthereumChain(e) {
                    return this.ui.inlineAddEthereumChain(e)
                }
                getSessionIdHash() {
                    return u.Session.hash(this._session.id)
                }
                sendRequestStandalone(e, t) {
                    let _cancel = n => {
                            this.handleErrorResponse(e, t.method, n)
                        },
                        onSuccess = t => {
                            this.handleWeb3ResponseMessage({
                                type: "WEB3_RESPONSE",
                                id: e,
                                response: t
                            })
                        };
                    switch (t.method) {
                        case "signEthereumMessage":
                            this.ui.signEthereumMessage({
                                request: t,
                                onSuccess,
                                onCancel: _cancel
                            });
                            break;
                        case "signEthereumTransaction":
                            this.ui.signEthereumTransaction({
                                request: t,
                                onSuccess,
                                onCancel: _cancel
                            });
                            break;
                        case "submitEthereumTransaction":
                            this.ui.submitEthereumTransaction({
                                request: t,
                                onSuccess,
                                onCancel: _cancel
                            });
                            break;
                        case "ethereumAddressFromSignedMessage":
                            this.ui.ethereumAddressFromSignedMessage({
                                request: t,
                                onSuccess
                            });
                            break;
                        default:
                            _cancel()
                    }
                }
            };
            t.WalletLinkRelay = WalletLinkRelay, WalletLinkRelay.accountRequestCallbackIds = new Set
        },
        4226: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.WalletLinkConnection = void 0;
            let i = n(397),
                o = n(52118),
                a = n(15314),
                l = n(15701),
                c = n(87487),
                u = n(68292),
                R = n(73718);
            t.WalletLinkConnection = class {
                constructor({
                    session: e,
                    linkAPIUrl: t,
                    listener: n,
                    diagnostic: N,
                    WebSocketClass: H = WebSocket
                }) {
                    this.destroyed = !1, this.lastHeartbeatResponse = 0, this.nextReqId = (0, i.IntNumber)(1), this._connected = !1, this._linked = !1, this.shouldFetchUnseenEventsOnConnect = !1, this.requestResolutions = new Map, this.handleSessionMetadataUpdated = e => {
                        if (!e) return;
                        let t = new Map([
                            ["__destroyed", this.handleDestroyed],
                            ["EthereumAddress", this.handleAccountUpdated],
                            ["WalletUsername", this.handleWalletUsernameUpdated],
                            ["AppVersion", this.handleAppVersionUpdated],
                            ["ChainId", t => e.JsonRpcUrl && this.handleChainUpdated(t, e.JsonRpcUrl)]
                        ]);
                        t.forEach((t, n) => {
                            let i = e[n];
                            void 0 !== i && t(i)
                        })
                    }, this.handleDestroyed = e => {
                        var t, n;
                        "1" === e && (null === (t = this.listener) || void 0 === t || t.resetAndReload(), null === (n = this.diagnostic) || void 0 === n || n.log(a.EVENTS.METADATA_DESTROYED, {
                            alreadyDestroyed: this.isDestroyed,
                            sessionIdHash: c.Session.hash(this.session.id)
                        }))
                    }, this.handleAccountUpdated = async e => {
                        var t, n;
                        try {
                            let n = await this.cipher.decrypt(e);
                            null === (t = this.listener) || void 0 === t || t.accountUpdated(n)
                        } catch (e) {
                            null === (n = this.diagnostic) || void 0 === n || n.log(a.EVENTS.GENERAL_ERROR, {
                                message: "Had error decrypting",
                                value: "selectedAddress"
                            })
                        }
                    }, this.handleMetadataUpdated = async (e, t) => {
                        var n, i;
                        try {
                            let i = await this.cipher.decrypt(t);
                            null === (n = this.listener) || void 0 === n || n.metadataUpdated(e, i)
                        } catch (t) {
                            null === (i = this.diagnostic) || void 0 === i || i.log(a.EVENTS.GENERAL_ERROR, {
                                message: "Had error decrypting",
                                value: e
                            })
                        }
                    }, this.handleWalletUsernameUpdated = async e => {
                        this.handleMetadataUpdated(l.WALLET_USER_NAME_KEY, e)
                    }, this.handleAppVersionUpdated = async e => {
                        this.handleMetadataUpdated(l.APP_VERSION_KEY, e)
                    }, this.handleChainUpdated = async (e, t) => {
                        var n, i;
                        try {
                            let i = await this.cipher.decrypt(e),
                                o = await this.cipher.decrypt(t);
                            null === (n = this.listener) || void 0 === n || n.chainUpdated(i, o)
                        } catch (e) {
                            null === (i = this.diagnostic) || void 0 === i || i.log(a.EVENTS.GENERAL_ERROR, {
                                message: "Had error decrypting",
                                value: "chainId|jsonRpcUrl"
                            })
                        }
                    }, this.session = e, this.cipher = new o.Cipher(e.secret), this.diagnostic = N, this.listener = n;
                    let U = new R.WalletLinkWebSocket(`${t}/rpc`, H);
                    U.setConnectionStateListener(async t => {
                        var n;
                        null === (n = this.diagnostic) || void 0 === n || n.log(a.EVENTS.CONNECTED_STATE_CHANGE, {
                            state: t,
                            sessionIdHash: c.Session.hash(e.id)
                        });
                        let i = !1;
                        switch (t) {
                            case R.ConnectionState.DISCONNECTED:
                                if (!this.destroyed) {
                                    let connect = async () => {
                                        await new Promise(e => setTimeout(e, 5e3)), this.destroyed || U.connect().catch(() => {
                                            connect()
                                        })
                                    };
                                    connect()
                                }
                                break;
                            case R.ConnectionState.CONNECTED:
                                try {
                                    await this.authenticate(), this.sendIsLinked(), this.sendGetSessionConfig(), i = !0
                                } catch (e) {}
                                this.updateLastHeartbeat(), setInterval(() => {
                                    this.heartbeat()
                                }, 1e4), this.shouldFetchUnseenEventsOnConnect && this.fetchUnseenEventsAPI();
                            case R.ConnectionState.CONNECTING:
                        }
                        this.connected !== i && (this.connected = i)
                    }), U.setIncomingDataListener(t => {
                        var n, i, o;
                        switch (t.type) {
                            case "Heartbeat":
                                this.updateLastHeartbeat();
                                return;
                            case "IsLinkedOK":
                            case "Linked":
                                {
                                    let i = "IsLinkedOK" === t.type ? t.linked : void 0;null === (n = this.diagnostic) || void 0 === n || n.log(a.EVENTS.LINKED, {
                                        sessionIdHash: c.Session.hash(e.id),
                                        linked: i,
                                        type: t.type,
                                        onlineGuests: t.onlineGuests
                                    }),
                                    this.linked = i || t.onlineGuests > 0;
                                    break
                                }
                            case "GetSessionConfigOK":
                            case "SessionConfigUpdated":
                                null === (i = this.diagnostic) || void 0 === i || i.log(a.EVENTS.SESSION_CONFIG_RECEIVED, {
                                    sessionIdHash: c.Session.hash(e.id),
                                    metadata_keys: t && t.metadata ? Object.keys(t.metadata) : void 0
                                }), this.handleSessionMetadataUpdated(t.metadata);
                                break;
                            case "Event":
                                this.handleIncomingEvent(t)
                        }
                        void 0 !== t.id && (null === (o = this.requestResolutions.get(t.id)) || void 0 === o || o(t))
                    }), this.ws = U, this.http = new u.WalletLinkHTTP(t, e.id, e.key)
                }
                connect() {
                    var e;
                    if (this.destroyed) throw Error("instance is destroyed");
                    null === (e = this.diagnostic) || void 0 === e || e.log(a.EVENTS.STARTED_CONNECTING, {
                        sessionIdHash: c.Session.hash(this.session.id)
                    }), this.ws.connect()
                }
                destroy() {
                    var e;
                    this.destroyed = !0, this.ws.disconnect(), null === (e = this.diagnostic) || void 0 === e || e.log(a.EVENTS.DISCONNECTED, {
                        sessionIdHash: c.Session.hash(this.session.id)
                    }), this.listener = void 0
                }
                get isDestroyed() {
                    return this.destroyed
                }
                get connected() {
                    return this._connected
                }
                set connected(e) {
                    var t, n;
                    this._connected = e, e && (null === (t = this.onceConnected) || void 0 === t || t.call(this)), null === (n = this.listener) || void 0 === n || n.connectedUpdated(e)
                }
                setOnceConnected(e) {
                    return new Promise(t => {
                        this.connected ? e().then(t) : this.onceConnected = () => {
                            e().then(t), this.onceConnected = void 0
                        }
                    })
                }
                get linked() {
                    return this._linked
                }
                set linked(e) {
                    var t, n;
                    this._linked = e, e && (null === (t = this.onceLinked) || void 0 === t || t.call(this)), null === (n = this.listener) || void 0 === n || n.linkedUpdated(e)
                }
                setOnceLinked(e) {
                    return new Promise(t => {
                        this.linked ? e().then(t) : this.onceLinked = () => {
                            e().then(t), this.onceLinked = void 0
                        }
                    })
                }
                async handleIncomingEvent(e) {
                    var t, n;
                    if ("Event" === e.type && "Web3Response" === e.event) try {
                        let n = await this.cipher.decrypt(e.data),
                            i = JSON.parse(n);
                        if ("WEB3_RESPONSE" !== i.type) return;
                        null === (t = this.listener) || void 0 === t || t.handleWeb3ResponseMessage(i)
                    } catch (e) {
                        null === (n = this.diagnostic) || void 0 === n || n.log(a.EVENTS.GENERAL_ERROR, {
                            message: "Had error decrypting",
                            value: "incomingEvent"
                        })
                    }
                }
                async checkUnseenEvents() {
                    if (!this.connected) {
                        this.shouldFetchUnseenEventsOnConnect = !0;
                        return
                    }
                    await new Promise(e => setTimeout(e, 250));
                    try {
                        await this.fetchUnseenEventsAPI()
                    } catch (e) {
                        console.error("Unable to check for unseen events", e)
                    }
                }
                async fetchUnseenEventsAPI() {
                    this.shouldFetchUnseenEventsOnConnect = !1;
                    let e = await this.http.fetchUnseenEvents();
                    e.forEach(e => this.handleIncomingEvent(e))
                }
                async setSessionMetadata(e, t) {
                    let n = {
                        type: "SetSessionConfig",
                        id: (0, i.IntNumber)(this.nextReqId++),
                        sessionId: this.session.id,
                        metadata: {
                            [e]: t
                        }
                    };
                    return this.setOnceConnected(async () => {
                        let e = await this.makeRequest(n);
                        if ("Fail" === e.type) throw Error(e.error || "failed to set session metadata")
                    })
                }
                async publishEvent(e, t, n = !1) {
                    let o = await this.cipher.encrypt(JSON.stringify(Object.assign(Object.assign({}, t), {
                            origin: location.origin,
                            relaySource: window.coinbaseWalletExtension ? "injected_sdk" : "sdk"
                        }))),
                        a = {
                            type: "PublishEvent",
                            id: (0, i.IntNumber)(this.nextReqId++),
                            sessionId: this.session.id,
                            event: e,
                            data: o,
                            callWebhook: n
                        };
                    return this.setOnceLinked(async () => {
                        let e = await this.makeRequest(a);
                        if ("Fail" === e.type) throw Error(e.error || "failed to publish event");
                        return e.eventId
                    })
                }
                sendData(e) {
                    this.ws.sendData(JSON.stringify(e))
                }
                updateLastHeartbeat() {
                    this.lastHeartbeatResponse = Date.now()
                }
                heartbeat() {
                    if (Date.now() - this.lastHeartbeatResponse > 2e4) {
                        this.ws.disconnect();
                        return
                    }
                    try {
                        this.ws.sendData("h")
                    } catch (e) {}
                }
                async makeRequest(e, t = 6e4) {
                    let n;
                    let i = e.id;
                    return this.sendData(e), Promise.race([new Promise((e, o) => {
                        n = window.setTimeout(() => {
                            o(Error(`request ${i} timed out`))
                        }, t)
                    }), new Promise(e => {
                        this.requestResolutions.set(i, t => {
                            clearTimeout(n), e(t), this.requestResolutions.delete(i)
                        })
                    })])
                }
                async authenticate() {
                    let e = {
                            type: "HostSession",
                            id: (0, i.IntNumber)(this.nextReqId++),
                            sessionId: this.session.id,
                            sessionKey: this.session.key
                        },
                        t = await this.makeRequest(e);
                    if ("Fail" === t.type) throw Error(t.error || "failed to authentcate")
                }
                sendIsLinked() {
                    let e = {
                        type: "IsLinked",
                        id: (0, i.IntNumber)(this.nextReqId++),
                        sessionId: this.session.id
                    };
                    this.sendData(e)
                }
                sendGetSessionConfig() {
                    let e = {
                        type: "GetSessionConfig",
                        id: (0, i.IntNumber)(this.nextReqId++),
                        sessionId: this.session.id
                    };
                    this.sendData(e)
                }
            }
        },
        68292: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.WalletLinkHTTP = void 0, t.WalletLinkHTTP = class {
                constructor(e, t, n) {
                    this.linkAPIUrl = e, this.sessionId = t;
                    let i = `${t}:${n}`;
                    this.auth = `Basic ${btoa(i)}`
                }
                async markUnseenEventsAsSeen(e) {
                    return Promise.all(e.map(e => fetch(`${this.linkAPIUrl}/events/${e.eventId}/seen`, {
                        method: "POST",
                        headers: {
                            Authorization: this.auth
                        }
                    }))).catch(e => console.error("Unabled to mark event as failed:", e))
                }
                async fetchUnseenEvents() {
                    var e;
                    let t = await fetch(`${this.linkAPIUrl}/events?unseen=true`, {
                        headers: {
                            Authorization: this.auth
                        }
                    });
                    if (t.ok) {
                        let {
                            events: n,
                            error: i
                        } = await t.json();
                        if (i) throw Error(`Check unseen events failed: ${i}`);
                        let o = null !== (e = null == n ? void 0 : n.filter(e => "Web3Response" === e.event).map(e => ({
                            type: "Event",
                            sessionId: this.sessionId,
                            eventId: e.id,
                            event: e.event,
                            data: e.data
                        }))) && void 0 !== e ? e : [];
                        return this.markUnseenEventsAsSeen(o), o
                    }
                    throw Error(`Check unseen events failed: ${t.status}`)
                }
            }
        },
        73718: function(e, t) {
            "use strict";
            var n, i;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.WalletLinkWebSocket = t.ConnectionState = void 0, (i = n || (t.ConnectionState = n = {}))[i.DISCONNECTED = 0] = "DISCONNECTED", i[i.CONNECTING = 1] = "CONNECTING", i[i.CONNECTED = 2] = "CONNECTED", t.WalletLinkWebSocket = class {
                setConnectionStateListener(e) {
                    this.connectionStateListener = e
                }
                setIncomingDataListener(e) {
                    this.incomingDataListener = e
                }
                constructor(e, t = WebSocket) {
                    this.WebSocketClass = t, this.webSocket = null, this.pendingData = [], this.url = e.replace(/^http/, "ws")
                }
                async connect() {
                    if (this.webSocket) throw Error("webSocket object is not null");
                    return new Promise((e, t) => {
                        var i;
                        let o;
                        try {
                            this.webSocket = o = new this.WebSocketClass(this.url)
                        } catch (e) {
                            t(e);
                            return
                        }
                        null === (i = this.connectionStateListener) || void 0 === i || i.call(this, n.CONNECTING), o.onclose = e => {
                            var i;
                            this.clearWebSocket(), t(Error(`websocket error ${e.code}: ${e.reason}`)), null === (i = this.connectionStateListener) || void 0 === i || i.call(this, n.DISCONNECTED)
                        }, o.onopen = t => {
                            var i;
                            if (e(), null === (i = this.connectionStateListener) || void 0 === i || i.call(this, n.CONNECTED), this.pendingData.length > 0) {
                                let e = [...this.pendingData];
                                e.forEach(e => this.sendData(e)), this.pendingData = []
                            }
                        }, o.onmessage = e => {
                            var t, n;
                            if ("h" === e.data) null === (t = this.incomingDataListener) || void 0 === t || t.call(this, {
                                type: "Heartbeat"
                            });
                            else try {
                                let t = JSON.parse(e.data);
                                null === (n = this.incomingDataListener) || void 0 === n || n.call(this, t)
                            } catch (e) {}
                        }
                    })
                }
                disconnect() {
                    var e;
                    let {
                        webSocket: t
                    } = this;
                    if (t) {
                        this.clearWebSocket(), null === (e = this.connectionStateListener) || void 0 === e || e.call(this, n.DISCONNECTED), this.connectionStateListener = void 0, this.incomingDataListener = void 0;
                        try {
                            t.close()
                        } catch (e) {}
                    }
                }
                sendData(e) {
                    let {
                        webSocket: t
                    } = this;
                    if (!t) {
                        this.pendingData.push(e), this.connect();
                        return
                    }
                    t.send(e)
                }
                clearWebSocket() {
                    let {
                        webSocket: e
                    } = this;
                    e && (this.webSocket = null, e.onclose = null, e.onerror = null, e.onmessage = null, e.onopen = null)
                }
            }
        },
        17763: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isErrorResponse = void 0, t.isErrorResponse = function(e) {
                return void 0 !== e.errorMessage
            }
        },
        10044: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.WalletLinkRelayUI = void 0;
            let i = n(38419),
                o = n(59878),
                a = n(46878);
            t.WalletLinkRelayUI = class {
                constructor(e) {
                    this.standalone = null, this.attached = !1, this.snackbar = new a.Snackbar({
                        darkMode: e.darkMode
                    }), this.linkFlow = new o.LinkFlow({
                        darkMode: e.darkMode,
                        version: e.version,
                        sessionId: e.session.id,
                        sessionSecret: e.session.secret,
                        linkAPIUrl: e.linkAPIUrl,
                        isParentConnection: !1
                    })
                }
                attach() {
                    if (this.attached) throw Error("Coinbase Wallet SDK UI is already attached");
                    let e = document.documentElement,
                        t = document.createElement("div");
                    t.className = "-cbwsdk-css-reset", e.appendChild(t), this.linkFlow.attach(t), this.snackbar.attach(t), this.attached = !0, (0, i.injectCssReset)()
                }
                setConnected(e) {
                    this.linkFlow.setConnected(e)
                }
                setChainId(e) {
                    this.linkFlow.setChainId(e)
                }
                setConnectDisabled(e) {
                    this.linkFlow.setConnectDisabled(e)
                }
                addEthereumChain() {}
                watchAsset() {}
                switchEthereumChain() {}
                requestEthereumAccounts(e) {
                    this.linkFlow.open({
                        onCancel: e.onCancel
                    })
                }
                hideRequestEthereumAccounts() {
                    this.linkFlow.close()
                }
                signEthereumMessage() {}
                signEthereumTransaction() {}
                submitEthereumTransaction() {}
                ethereumAddressFromSignedMessage() {}
                showConnecting(e) {
                    let t;
                    return t = e.isUnlinkedErrorState ? {
                        autoExpand: !0,
                        message: "Connection lost",
                        menuItems: [{
                            isRed: !1,
                            info: "Reset connection",
                            svgWidth: "10",
                            svgHeight: "11",
                            path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
                            defaultFillRule: "evenodd",
                            defaultClipRule: "evenodd",
                            onClick: e.onResetConnection
                        }]
                    } : {
                        message: "Confirm on phone",
                        menuItems: [{
                            isRed: !0,
                            info: "Cancel transaction",
                            svgWidth: "11",
                            svgHeight: "11",
                            path: "M10.3711 1.52346L9.21775 0.370117L5.37109 4.21022L1.52444 0.370117L0.371094 1.52346L4.2112 5.37012L0.371094 9.21677L1.52444 10.3701L5.37109 6.53001L9.21775 10.3701L10.3711 9.21677L6.53099 5.37012L10.3711 1.52346Z",
                            defaultFillRule: "inherit",
                            defaultClipRule: "inherit",
                            onClick: e.onCancel
                        }, {
                            isRed: !1,
                            info: "Reset connection",
                            svgWidth: "10",
                            svgHeight: "11",
                            path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
                            defaultFillRule: "evenodd",
                            defaultClipRule: "evenodd",
                            onClick: e.onResetConnection
                        }]
                    }, this.snackbar.presentItem(t)
                }
                reloadUI() {
                    document.location.reload()
                }
                inlineAccountsResponse() {
                    return !1
                }
                inlineAddEthereumChain() {
                    return !1
                }
                inlineWatchAsset() {
                    return !1
                }
                inlineSwitchEthereumChain() {
                    return !1
                }
                setStandalone(e) {
                    this.standalone = e
                }
                isStandalone() {
                    var e;
                    return null !== (e = this.standalone) && void 0 !== e && e
                }
            }
        },
        97275: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = ".-cbwsdk-css-reset .-cbwsdk-connect-content{height:430px;width:700px;border-radius:12px;padding:30px}.-cbwsdk-css-reset .-cbwsdk-connect-content.light{background:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content.dark{background:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-header{display:flex;align-items:center;justify-content:space-between;margin:0 0 30px}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading{font-style:normal;font-weight:500;font-size:28px;line-height:36px;margin:0}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-layout{display:flex;flex-direction:row}.-cbwsdk-css-reset .-cbwsdk-connect-content-column-left{margin-right:30px;display:flex;flex-direction:column;justify-content:space-between}.-cbwsdk-css-reset .-cbwsdk-connect-content-column-right{flex:25%;margin-right:34px}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-wrapper{width:220px;height:220px;border-radius:12px;display:flex;justify-content:center;align-items:center;background:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting{position:absolute;top:0;bottom:0;left:0;right:0;display:flex;flex-direction:column;align-items:center;justify-content:center}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.light{background-color:rgba(255,255,255,.95)}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.light>p{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.dark{background-color:rgba(10,11,13,.9)}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.dark>p{color:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting>p{font-size:12px;font-weight:bold;margin-top:16px}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app{border-radius:8px;font-size:14px;line-height:20px;padding:12px;width:339px}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app.light{background:#eef0f3;color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app.dark{background:#1e2025;color:#8a919e}.-cbwsdk-css-reset .-cbwsdk-cancel-button{-webkit-appearance:none;border:none;background:none;cursor:pointer;padding:0;margin:0}.-cbwsdk-css-reset .-cbwsdk-cancel-button-x{position:relative;display:block;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-wallet-steps{padding:0 0 0 16px;margin:0;width:100%;list-style:decimal}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item{list-style-type:decimal;display:list-item;font-style:normal;font-weight:400;font-size:16px;line-height:24px;margin-top:20px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item-wrapper{display:flex;align-items:center}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-pad-left{margin-left:6px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon{display:flex;border-radius:50%;height:24px;width:24px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon svg{margin:auto;display:block}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon.light{background:#0052ff}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon.dark{background:#588af5}.-cbwsdk-css-reset .-cbwsdk-connect-item{align-items:center;display:flex;flex-direction:row;padding:16px 24px;gap:12px;cursor:pointer;border-radius:100px;font-weight:600}.-cbwsdk-css-reset .-cbwsdk-connect-item.light{background:#f5f8ff;color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-connect-item.dark{background:#001033;color:#588af5}.-cbwsdk-css-reset .-cbwsdk-connect-item-copy-wrapper{margin:0 4px 0 8px}.-cbwsdk-css-reset .-cbwsdk-connect-item-title{margin:0 0 0;font-size:16px;line-height:24px;font-weight:500}.-cbwsdk-css-reset .-cbwsdk-connect-item-description{font-weight:400;font-size:14px;line-height:20px;margin:0}"
        },
        41152: function(e, t, n) {
            "use strict";
            var i = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CoinbaseWalletSteps = t.ConnectContent = void 0;
            let o = i(n(49542)),
                a = n(21593),
                l = n(13702),
                c = n(28343),
                u = n(18375),
                R = n(62468),
                N = n(50767),
                H = n(73078),
                U = n(7097),
                W = i(n(97275)),
                J = {
                    title: "Coinbase Wallet app",
                    description: "Connect with your self-custody wallet",
                    steps: CoinbaseWalletSteps
                },
                makeIconColor = e => "light" === e ? "#FFFFFF" : "#0A0B0D";

            function ConnectItem({
                title: e,
                description: t,
                theme: n
            }) {
                return (0, a.h)("div", {
                    className: (0, o.default)("-cbwsdk-connect-item", n)
                }, (0, a.h)("div", null, (0, a.h)(R.CoinbaseWalletRound, null)), (0, a.h)("div", {
                    className: "-cbwsdk-connect-item-copy-wrapper"
                }, (0, a.h)("h3", {
                    className: "-cbwsdk-connect-item-title"
                }, e), (0, a.h)("p", {
                    className: "-cbwsdk-connect-item-description"
                }, t)))
            }

            function CoinbaseWalletSteps({
                theme: e
            }) {
                return (0, a.h)("ol", {
                    className: "-cbwsdk-wallet-steps"
                }, (0, a.h)("li", {
                    className: (0, o.default)("-cbwsdk-wallet-steps-item", e)
                }, (0, a.h)("div", {
                    className: "-cbwsdk-wallet-steps-item-wrapper"
                }, "Open Coinbase Wallet app")), (0, a.h)("li", {
                    className: (0, o.default)("-cbwsdk-wallet-steps-item", e)
                }, (0, a.h)("div", {
                    className: "-cbwsdk-wallet-steps-item-wrapper"
                }, (0, a.h)("span", null, "Tap ", (0, a.h)("strong", null, "Scan"), " "), (0, a.h)("span", {
                    className: (0, o.default)("-cbwsdk-wallet-steps-pad-left", "-cbwsdk-wallet-steps-icon", e)
                }, (0, a.h)(N.QRCodeIcon, {
                    fill: makeIconColor(e)
                })))))
            }
            t.ConnectContent = function(e) {
                let {
                    theme: t
                } = e, n = (0, l.createQrUrl)(e.sessionId, e.sessionSecret, e.linkAPIUrl, e.isParentConnection, e.version, e.chainId), i = J.steps;
                return (0, a.h)("div", {
                    "data-testid": "connect-content",
                    className: (0, o.default)("-cbwsdk-connect-content", t)
                }, (0, a.h)("style", null, W.default), (0, a.h)("div", {
                    className: "-cbwsdk-connect-content-header"
                }, (0, a.h)("h2", {
                    className: (0, o.default)("-cbwsdk-connect-content-heading", t)
                }, "Scan to connect with our mobile app"), e.onCancel && (0, a.h)("button", {
                    type: "button",
                    className: "-cbwsdk-cancel-button",
                    onClick: e.onCancel
                }, (0, a.h)(u.CloseIcon, {
                    fill: "light" === t ? "#0A0B0D" : "#FFFFFF"
                }))), (0, a.h)("div", {
                    className: "-cbwsdk-connect-content-layout"
                }, (0, a.h)("div", {
                    className: "-cbwsdk-connect-content-column-left"
                }, (0, a.h)(ConnectItem, {
                    title: J.title,
                    description: J.description,
                    theme: t
                })), (0, a.h)("div", {
                    className: "-cbwsdk-connect-content-column-right"
                }, (0, a.h)("div", {
                    className: "-cbwsdk-connect-content-qr-wrapper"
                }, (0, a.h)(H.QRCode, {
                    content: n,
                    width: 200,
                    height: 200,
                    fgColor: "#000",
                    bgColor: "transparent"
                }), (0, a.h)("input", {
                    type: "hidden",
                    name: "cbw-cbwsdk-version",
                    value: c.LIB_VERSION
                }), (0, a.h)("input", {
                    type: "hidden",
                    value: n
                })), (0, a.h)(i, {
                    theme: t
                }), !e.isConnected && (0, a.h)("div", {
                    "data-testid": "connecting-spinner",
                    className: (0, o.default)("-cbwsdk-connect-content-qr-connecting", t)
                }, (0, a.h)(U.Spinner, {
                    size: 36,
                    color: "dark" === t ? "#FFF" : "#000"
                }), (0, a.h)("p", null, "Connecting...")))))
            }, t.CoinbaseWalletSteps = CoinbaseWalletSteps
        },
        27215: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = ".-cbwsdk-css-reset .-cbwsdk-connect-dialog{z-index:2147483647;position:fixed;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop{z-index:2147483647;position:fixed;top:0;left:0;right:0;bottom:0;transition:opacity .25s}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop.light{background-color:rgba(0,0,0,.5)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop.dark{background-color:rgba(50,53,61,.4)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop-hidden{opacity:0}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-box{display:flex;position:relative;flex-direction:column;transform:scale(1);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-box-hidden{opacity:0;transform:scale(0.85)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-container{display:block}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-container-hidden{display:none}"
        },
        42410: function(e, t, n) {
            "use strict";
            var i = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ConnectDialog = void 0;
            let o = i(n(49542)),
                a = n(21593),
                l = n(54129),
                c = n(41152),
                u = n(32878),
                R = i(n(27215));
            t.ConnectDialog = e => {
                let {
                    isOpen: t,
                    darkMode: n
                } = e, [i, N] = (0, l.useState)(!t), [H, U] = (0, l.useState)(!t);
                (0, l.useEffect)(() => {
                    let e = [window.setTimeout(() => {
                        U(!t)
                    }, 10)];
                    return t ? N(!1) : e.push(window.setTimeout(() => {
                        N(!0)
                    }, 360)), () => {
                        e.forEach(window.clearTimeout)
                    }
                }, [t]);
                let W = n ? "dark" : "light";
                return (0, a.h)("div", {
                    class: (0, o.default)("-cbwsdk-connect-dialog-container", i && "-cbwsdk-connect-dialog-container-hidden")
                }, (0, a.h)("style", null, R.default), (0, a.h)("div", {
                    class: (0, o.default)("-cbwsdk-connect-dialog-backdrop", W, H && "-cbwsdk-connect-dialog-backdrop-hidden")
                }), (0, a.h)("div", {
                    class: "-cbwsdk-connect-dialog"
                }, (0, a.h)("div", {
                    class: (0, o.default)("-cbwsdk-connect-dialog-box", H && "-cbwsdk-connect-dialog-box-hidden")
                }, e.connectDisabled ? null : (0, a.h)(c.ConnectContent, {
                    theme: W,
                    version: e.version,
                    sessionId: e.sessionId,
                    sessionSecret: e.sessionSecret,
                    linkAPIUrl: e.linkAPIUrl,
                    isConnected: e.isConnected,
                    isParentConnection: e.isParentConnection,
                    chainId: e.chainId,
                    onCancel: e.onCancel
                }), (0, a.h)(u.TryExtensionContent, {
                    theme: W
                }))))
            }
        },
        59878: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.LinkFlow = void 0;
            let i = n(21593),
                o = n(42410);
            t.LinkFlow = class {
                constructor(e) {
                    this.connected = !1, this.chainId = 1, this.isOpen = !1, this.onCancel = null, this.root = null, this.connectDisabled = !1, this.darkMode = e.darkMode, this.version = e.version, this.sessionId = e.sessionId, this.sessionSecret = e.sessionSecret, this.linkAPIUrl = e.linkAPIUrl, this.isParentConnection = e.isParentConnection
                }
                attach(e) {
                    this.root = document.createElement("div"), this.root.className = "-cbwsdk-link-flow-root", e.appendChild(this.root), this.render()
                }
                setConnected(e) {
                    this.connected !== e && (this.connected = e, this.render())
                }
                setChainId(e) {
                    this.chainId !== e && (this.chainId = e, this.render())
                }
                detach() {
                    var e;
                    this.root && ((0, i.render)(null, this.root), null === (e = this.root.parentElement) || void 0 === e || e.removeChild(this.root))
                }
                setConnectDisabled(e) {
                    this.connectDisabled = e
                }
                open(e) {
                    this.isOpen = !0, this.onCancel = e.onCancel, this.render()
                }
                close() {
                    this.isOpen = !1, this.onCancel = null, this.render()
                }
                render() {
                    this.root && (0, i.render)((0, i.h)(o.ConnectDialog, {
                        darkMode: this.darkMode,
                        version: this.version,
                        sessionId: this.sessionId,
                        sessionSecret: this.sessionSecret,
                        linkAPIUrl: this.linkAPIUrl,
                        isOpen: this.isOpen,
                        isConnected: this.connected,
                        isParentConnection: this.isParentConnection,
                        chainId: this.chainId,
                        onCancel: this.onCancel,
                        connectDisabled: this.connectDisabled
                    }), this.root)
                }
            }
        },
        73078: function(e, t, n) {
            "use strict";
            var i = n(97115).Buffer,
                o = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.QRCode = void 0;
            let a = n(21593),
                l = n(54129),
                c = o(n(29780));
            t.QRCode = e => {
                let [t, n] = (0, l.useState)("");
                return (0, l.useEffect)(() => {
                    var t, o;
                    let a = new c.default({
                            content: e.content,
                            background: e.bgColor || "#ffffff",
                            color: e.fgColor || "#000000",
                            container: "svg",
                            ecl: "M",
                            width: null !== (t = e.width) && void 0 !== t ? t : 256,
                            height: null !== (o = e.height) && void 0 !== o ? o : 256,
                            padding: 0,
                            image: e.image
                        }),
                        l = i.from(a.svg(), "utf8").toString("base64");
                    n(`data:image/svg+xml;base64,${l}`)
                }, [e.bgColor, e.content, e.fgColor, e.height, e.image, e.width]), t ? (0, a.h)("img", {
                    src: t,
                    alt: "QR Code"
                }) : null
            }
        },
        80027: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = ".-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop{position:fixed;top:0;left:0;right:0;bottom:0;transition:opacity .25s;background-color:rgba(10,11,13,.5)}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop-hidden{opacity:0}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box{display:block;position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);padding:20px;border-radius:8px;background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box p{display:block;font-weight:400;font-size:14px;line-height:20px;padding-bottom:12px;color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box button{appearance:none;border:none;background:none;color:#0052ff;padding:0;text-decoration:none;display:block;font-weight:600;font-size:16px;line-height:24px}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark{background-color:#0a0b0d;color:#fff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark button{color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light{background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light button{color:#0052ff}"
        },
        63107: function(e, t, n) {
            "use strict";
            var i = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.RedirectDialog = void 0;
            let o = i(n(49542)),
                a = n(21593),
                l = n(38419),
                c = n(97691),
                u = i(n(80027));
            t.RedirectDialog = class {
                constructor() {
                    this.root = null
                }
                attach() {
                    let e = document.documentElement;
                    this.root = document.createElement("div"), this.root.className = "-cbwsdk-css-reset", e.appendChild(this.root), (0, l.injectCssReset)()
                }
                present(e) {
                    this.render(e)
                }
                clear() {
                    this.render(null)
                }
                render(e) {
                    this.root && ((0, a.render)(null, this.root), e && (0, a.render)((0, a.h)(RedirectDialogContent, Object.assign({}, e, {
                        onDismiss: () => {
                            this.clear()
                        }
                    })), this.root))
                }
            };
            let RedirectDialogContent = ({
                title: e,
                buttonText: t,
                darkMode: n,
                onButtonClick: i,
                onDismiss: l
            }) => (0, a.h)(c.SnackbarContainer, {
                darkMode: n
            }, (0, a.h)("div", {
                class: "-cbwsdk-redirect-dialog"
            }, (0, a.h)("style", null, u.default), (0, a.h)("div", {
                class: "-cbwsdk-redirect-dialog-backdrop",
                onClick: l
            }), (0, a.h)("div", {
                class: (0, o.default)("-cbwsdk-redirect-dialog-box", n ? "dark" : "light")
            }, (0, a.h)("p", null, e), (0, a.h)("button", {
                onClick: i
            }, t))))
        },
        51813: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = ".-cbwsdk-css-reset .-gear-container{margin-left:16px !important;margin-right:9px !important;display:flex;align-items:center;justify-content:center;width:24px;height:24px;transition:opacity .25s}.-cbwsdk-css-reset .-gear-container *{user-select:none}.-cbwsdk-css-reset .-gear-container svg{opacity:0;position:absolute}.-cbwsdk-css-reset .-gear-icon{height:12px;width:12px;z-index:10000}.-cbwsdk-css-reset .-cbwsdk-snackbar{align-items:flex-end;display:flex;flex-direction:column;position:fixed;right:0;top:0;z-index:2147483647}.-cbwsdk-css-reset .-cbwsdk-snackbar *{user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance{display:flex;flex-direction:column;margin:8px 16px 0 16px;overflow:visible;text-align:left;transform:translateX(0);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header:hover .-gear-container svg{opacity:1}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header{display:flex;align-items:center;background:#fff;overflow:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-cblogo{margin:8px 8px 8px 8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-message{color:#000;font-size:13px;line-height:1.5;user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu{background:#fff;transition:opacity .25s ease-in-out,transform .25s linear,visibility 0s;visibility:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;opacity:0;flex-direction:column;padding-left:8px;padding-right:8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:last-child{margin-bottom:8px !important}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover{background:#f5f7f8;border-radius:6px;transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover span{color:#050f19;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover svg path{fill:#000;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item{visibility:inherit;height:35px;margin-top:8px;margin-bottom:0;display:flex;flex-direction:row;align-items:center;padding:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item *{visibility:inherit;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover{background:rgba(223,95,103,.2);transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover svg path{fill:#df5f67;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover span{color:#df5f67;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-info{color:#aaa;font-size:13px;margin:0 8px 0 32px;position:absolute}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-hidden{opacity:0;text-align:left;transform:translateX(25%);transition:opacity .5s linear}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-expanded .-cbwsdk-snackbar-instance-menu{opacity:1;display:flex;transform:translateY(8px);visibility:visible}"
        },
        46878: function(e, t, n) {
            "use strict";
            var i = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SnackbarInstance = t.SnackbarContainer = t.Snackbar = void 0;
            let o = i(n(49542)),
                a = n(21593),
                l = n(54129),
                c = i(n(51813));
            t.Snackbar = class {
                constructor(e) {
                    this.items = new Map, this.nextItemKey = 0, this.root = null, this.darkMode = e.darkMode
                }
                attach(e) {
                    this.root = document.createElement("div"), this.root.className = "-cbwsdk-snackbar-root", e.appendChild(this.root), this.render()
                }
                presentItem(e) {
                    let t = this.nextItemKey++;
                    return this.items.set(t, e), this.render(), () => {
                        this.items.delete(t), this.render()
                    }
                }
                clear() {
                    this.items.clear(), this.render()
                }
                render() {
                    this.root && (0, a.render)((0, a.h)("div", null, (0, a.h)(t.SnackbarContainer, {
                        darkMode: this.darkMode
                    }, Array.from(this.items.entries()).map(([e, n]) => (0, a.h)(t.SnackbarInstance, Object.assign({}, n, {
                        key: e
                    }))))), this.root)
                }
            }, t.SnackbarContainer = e => (0, a.h)("div", {
                class: (0, o.default)("-cbwsdk-snackbar-container")
            }, (0, a.h)("style", null, c.default), (0, a.h)("div", {
                class: "-cbwsdk-snackbar"
            }, e.children)), t.SnackbarInstance = ({
                autoExpand: e,
                message: t,
                menuItems: n
            }) => {
                let [i, c] = (0, l.useState)(!0), [u, R] = (0, l.useState)(null != e && e);
                return (0, l.useEffect)(() => {
                    let e = [window.setTimeout(() => {
                        c(!1)
                    }, 1), window.setTimeout(() => {
                        R(!0)
                    }, 1e4)];
                    return () => {
                        e.forEach(window.clearTimeout)
                    }
                }), (0, a.h)("div", {
                    class: (0, o.default)("-cbwsdk-snackbar-instance", i && "-cbwsdk-snackbar-instance-hidden", u && "-cbwsdk-snackbar-instance-expanded")
                }, (0, a.h)("div", {
                    class: "-cbwsdk-snackbar-instance-header",
                    onClick: () => {
                        R(!u)
                    }
                }, (0, a.h)("img", {
                    src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEuNDkyIDEwLjQxOWE4LjkzIDguOTMgMCAwMTguOTMtOC45M2gxMS4xNjNhOC45MyA4LjkzIDAgMDE4LjkzIDguOTN2MTEuMTYzYTguOTMgOC45MyAwIDAxLTguOTMgOC45M0gxMC40MjJhOC45MyA4LjkzIDAgMDEtOC45My04LjkzVjEwLjQxOXoiIGZpbGw9IiMxNjUyRjAiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjQxOSAwSDIxLjU4QzI3LjMzNSAwIDMyIDQuNjY1IDMyIDEwLjQxOVYyMS41OEMzMiAyNy4zMzUgMjcuMzM1IDMyIDIxLjU4MSAzMkgxMC40MkM0LjY2NSAzMiAwIDI3LjMzNSAwIDIxLjU4MVYxMC40MkMwIDQuNjY1IDQuNjY1IDAgMTAuNDE5IDB6bTAgMS40ODhhOC45MyA4LjkzIDAgMDAtOC45MyA4LjkzdjExLjE2M2E4LjkzIDguOTMgMCAwMDguOTMgOC45M0gyMS41OGE4LjkzIDguOTMgMCAwMDguOTMtOC45M1YxMC40MmE4LjkzIDguOTMgMCAwMC04LjkzLTguOTNIMTAuNDJ6IiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS45OTggMjYuMDQ5Yy01LjU0OSAwLTEwLjA0Ny00LjQ5OC0xMC4wNDctMTAuMDQ3IDAtNS41NDggNC40OTgtMTAuMDQ2IDEwLjA0Ny0xMC4wNDYgNS41NDggMCAxMC4wNDYgNC40OTggMTAuMDQ2IDEwLjA0NiAwIDUuNTQ5LTQuNDk4IDEwLjA0Ny0xMC4wNDYgMTAuMDQ3eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMi43NjIgMTQuMjU0YzAtLjgyMi42NjctMS40ODkgMS40ODktMS40ODloMy40OTdjLjgyMiAwIDEuNDg4LjY2NiAxLjQ4OCAxLjQ4OXYzLjQ5N2MwIC44MjItLjY2NiAxLjQ4OC0xLjQ4OCAxLjQ4OGgtMy40OTdhMS40ODggMS40ODggMCAwMS0xLjQ4OS0xLjQ4OHYtMy40OTh6IiBmaWxsPSIjMTY1MkYwIi8+PC9zdmc+",
                    class: "-cbwsdk-snackbar-instance-header-cblogo"
                }), " ", (0, a.h)("div", {
                    class: "-cbwsdk-snackbar-instance-header-message"
                }, t), (0, a.h)("div", {
                    class: "-gear-container"
                }, !u && (0, a.h)("svg", {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, a.h)("circle", {
                    cx: "12",
                    cy: "12",
                    r: "12",
                    fill: "#F5F7F8"
                })), (0, a.h)("img", {
                    src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDYuNzV2LTEuNWwtMS43Mi0uNTdjLS4wOC0uMjctLjE5LS41Mi0uMzItLjc3bC44MS0xLjYyLTEuMDYtMS4wNi0xLjYyLjgxYy0uMjQtLjEzLS41LS4yNC0uNzctLjMyTDYuNzUgMGgtMS41bC0uNTcgMS43MmMtLjI3LjA4LS41My4xOS0uNzcuMzJsLTEuNjItLjgxLTEuMDYgMS4wNi44MSAxLjYyYy0uMTMuMjQtLjI0LjUtLjMyLjc3TDAgNS4yNXYxLjVsMS43Mi41N2MuMDguMjcuMTkuNTMuMzIuNzdsLS44MSAxLjYyIDEuMDYgMS4wNiAxLjYyLS44MWMuMjQuMTMuNS4yMy43Ny4zMkw1LjI1IDEyaDEuNWwuNTctMS43MmMuMjctLjA4LjUyLS4xOS43Ny0uMzJsMS42Mi44MSAxLjA2LTEuMDYtLjgxLTEuNjJjLjEzLS4yNC4yMy0uNS4zMi0uNzdMMTIgNi43NXpNNiA4LjVhMi41IDIuNSAwIDAxMC01IDIuNSAyLjUgMCAwMTAgNXoiIGZpbGw9IiMwNTBGMTkiLz48L3N2Zz4=",
                    class: "-gear-icon",
                    title: "Expand"
                }))), n && n.length > 0 && (0, a.h)("div", {
                    class: "-cbwsdk-snackbar-instance-menu"
                }, n.map((e, t) => (0, a.h)("div", {
                    class: (0, o.default)("-cbwsdk-snackbar-instance-menu-item", e.isRed && "-cbwsdk-snackbar-instance-menu-item-is-red"),
                    onClick: e.onClick,
                    key: t
                }, (0, a.h)("svg", {
                    width: e.svgWidth,
                    height: e.svgHeight,
                    viewBox: "0 0 10 11",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, a.h)("path", {
                    "fill-rule": e.defaultFillRule,
                    "clip-rule": e.defaultClipRule,
                    d: e.path,
                    fill: "#AAAAAA"
                })), (0, a.h)("span", {
                    class: (0, o.default)("-cbwsdk-snackbar-instance-menu-item-info", e.isRed && "-cbwsdk-snackbar-instance-menu-item-info-is-red")
                }, e.info)))))
            }
        },
        97691: function(e, t, n) {
            "use strict";
            var i = this && this.__createBinding || (Object.create ? function(e, t, n, i) {
                    void 0 === i && (i = n);
                    var o = Object.getOwnPropertyDescriptor(t, n);
                    (!o || ("get" in o ? !t.__esModule : o.writable || o.configurable)) && (o = {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    }), Object.defineProperty(e, i, o)
                } : function(e, t, n, i) {
                    void 0 === i && (i = n), e[i] = t[n]
                }),
                o = this && this.__exportStar || function(e, t) {
                    for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || i(t, e, n)
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), o(n(46878), t)
        },
        37731: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = ".-cbwsdk-css-reset .-cbwsdk-spinner{display:inline-block}.-cbwsdk-css-reset .-cbwsdk-spinner svg{display:inline-block;animation:2s linear infinite -cbwsdk-spinner-svg}.-cbwsdk-css-reset .-cbwsdk-spinner svg circle{animation:1.9s ease-in-out infinite both -cbwsdk-spinner-circle;display:block;fill:rgba(0,0,0,0);stroke-dasharray:283;stroke-dashoffset:280;stroke-linecap:round;stroke-width:10px;transform-origin:50% 50%}@keyframes -cbwsdk-spinner-svg{0%{transform:rotateZ(0deg)}100%{transform:rotateZ(360deg)}}@keyframes -cbwsdk-spinner-circle{0%,25%{stroke-dashoffset:280;transform:rotate(0)}50%,75%{stroke-dashoffset:75;transform:rotate(45deg)}100%{stroke-dashoffset:280;transform:rotate(360deg)}}"
        },
        7097: function(e, t, n) {
            "use strict";
            var i = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Spinner = void 0;
            let o = n(21593),
                a = i(n(37731));
            t.Spinner = e => {
                var t;
                let n = null !== (t = e.size) && void 0 !== t ? t : 64,
                    i = e.color || "#000";
                return (0, o.h)("div", {
                    class: "-cbwsdk-spinner"
                }, (0, o.h)("style", null, a.default), (0, o.h)("svg", {
                    viewBox: "0 0 100 100",
                    xmlns: "http://www.w3.org/2000/svg",
                    style: {
                        width: n,
                        height: n
                    }
                }, (0, o.h)("circle", {
                    style: {
                        cx: 50,
                        cy: 50,
                        r: 45,
                        stroke: i
                    }
                })))
            }
        },
        73290: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = ".-cbwsdk-css-reset .-cbwsdk-try-extension{display:flex;margin-top:12px;height:202px;width:700px;border-radius:12px;padding:30px}.-cbwsdk-css-reset .-cbwsdk-try-extension.light{background:#fff}.-cbwsdk-css-reset .-cbwsdk-try-extension.dark{background:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-try-extension-column-half{flex:50%}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading{font-style:normal;font-weight:500;font-size:25px;line-height:32px;margin:0;max-width:204px}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta{appearance:none;border:none;background:none;color:#0052ff;cursor:pointer;padding:0;text-decoration:none;display:block;font-weight:600;font-size:16px;line-height:24px}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta.light{color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta.dark{color:#588af5}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta-wrapper{display:flex;align-items:center;margin-top:12px}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta-icon{display:block;margin-left:4px;height:14px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list{display:flex;flex-direction:column;justify-content:center;align-items:center;margin:0;padding:0;list-style:none;height:100%}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item{display:flex;align-items:center;flex-flow:nowrap;margin-top:24px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item:first-of-type{margin-top:0}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon-wrapper{display:block}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon{display:flex;height:32px;width:32px;border-radius:50%}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon svg{margin:auto;display:block}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon.light{background:#eef0f3}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon.dark{background:#1e2025}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy{display:block;font-weight:400;font-size:14px;line-height:20px;padding-left:12px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy.light{color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy.dark{color:#8a919e}"
        },
        32878: function(e, t, n) {
            "use strict";
            var i = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.TryExtensionContent = void 0;
            let o = i(n(49542)),
                a = n(21593),
                l = n(54129),
                c = n(31008),
                u = n(2313),
                R = n(78213),
                N = i(n(73290));
            t.TryExtensionContent = function({
                theme: e
            }) {
                let [t, n] = (0, l.useState)(!1), i = (0, l.useCallback)(() => {
                    window.open("https://api.wallet.coinbase.com/rpc/v2/desktop/chrome", "_blank")
                }, []), H = (0, l.useCallback)(() => {
                    t ? window.location.reload() : (i(), n(!0))
                }, [i, t]);
                return (0, a.h)("div", {
                    class: (0, o.default)("-cbwsdk-try-extension", e)
                }, (0, a.h)("style", null, N.default), (0, a.h)("div", {
                    class: "-cbwsdk-try-extension-column-half"
                }, (0, a.h)("h3", {
                    class: (0, o.default)("-cbwsdk-try-extension-heading", e)
                }, "Or try the Coinbase Wallet browser extension"), (0, a.h)("div", {
                    class: "-cbwsdk-try-extension-cta-wrapper"
                }, (0, a.h)("button", {
                    class: (0, o.default)("-cbwsdk-try-extension-cta", e),
                    onClick: H
                }, t ? "Refresh" : "Install"), (0, a.h)("div", null, !t && (0, a.h)(c.ArrowLeftIcon, {
                    class: "-cbwsdk-try-extension-cta-icon",
                    fill: "light" === e ? "#0052FF" : "#588AF5"
                })))), (0, a.h)("div", {
                    class: "-cbwsdk-try-extension-column-half"
                }, (0, a.h)("ul", {
                    class: "-cbwsdk-try-extension-list"
                }, (0, a.h)("li", {
                    class: "-cbwsdk-try-extension-list-item"
                }, (0, a.h)("div", {
                    class: "-cbwsdk-try-extension-list-item-icon-wrapper"
                }, (0, a.h)("span", {
                    class: (0, o.default)("-cbwsdk-try-extension-list-item-icon", e)
                }, (0, a.h)(u.LaptopIcon, {
                    fill: "light" === e ? "#0A0B0D" : "#FFFFFF"
                }))), (0, a.h)("div", {
                    class: (0, o.default)("-cbwsdk-try-extension-list-item-copy", e)
                }, "Connect with dapps with just one click on your desktop browser")), (0, a.h)("li", {
                    class: "-cbwsdk-try-extension-list-item"
                }, (0, a.h)("div", {
                    class: "-cbwsdk-try-extension-list-item-icon-wrapper"
                }, (0, a.h)("span", {
                    class: (0, o.default)("-cbwsdk-try-extension-list-item-icon", e)
                }, (0, a.h)(R.SafeIcon, {
                    fill: "light" === e ? "#0A0B0D" : "#FFFFFF"
                }))), (0, a.h)("div", {
                    class: (0, o.default)("-cbwsdk-try-extension-list-item-copy", e)
                }, "Add an additional layer of security by using a supported Ledger hardware wallet")))))
            }
        },
        31008: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ArrowLeftIcon = void 0;
            let i = n(21593);
            t.ArrowLeftIcon = function(e) {
                return (0, i.h)("svg", Object.assign({
                    width: "16",
                    height: "16",
                    viewBox: "0 0 16 16",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), (0, i.h)("path", {
                    d: "M8.60675 0.155884L7.37816 1.28209L12.7723 7.16662H0V8.83328H12.6548L6.82149 14.6666L8 15.8451L15.8201 8.02501L8.60675 0.155884Z"
                }))
            }
        },
        18375: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CloseIcon = void 0;
            let i = n(21593);
            t.CloseIcon = function(e) {
                return (0, i.h)("svg", Object.assign({
                    width: "40",
                    height: "40",
                    viewBox: "0 0 40 40",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), (0, i.h)("path", {
                    d: "M13.7677 13L12.3535 14.4142L18.3535 20.4142L12.3535 26.4142L13.7677 27.8284L19.7677 21.8284L25.7677 27.8284L27.1819 26.4142L21.1819 20.4142L27.1819 14.4142L25.7677 13L19.7677 19L13.7677 13Z"
                }))
            }
        },
        62468: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CoinbaseWalletRound = void 0;
            let i = n(21593);
            t.CoinbaseWalletRound = function(e) {
                return (0, i.h)("svg", Object.assign({
                    width: "28",
                    height: "28",
                    viewBox: "0 0 28 28",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), (0, i.h)("circle", {
                    cx: "14",
                    cy: "14",
                    r: "14",
                    fill: "#0052FF"
                }), (0, i.h)("path", {
                    d: "M23.8521 14.0003C23.8521 19.455 19.455 23.8521 14.0003 23.8521C8.54559 23.8521 4.14844 19.455 4.14844 14.0003C4.14844 8.54559 8.54559 4.14844 14.0003 4.14844C19.455 4.14844 23.8521 8.54559 23.8521 14.0003Z",
                    fill: "white"
                }), (0, i.h)("path", {
                    d: "M11.1855 12.5042C11.1855 12.0477 11.1855 11.7942 11.2835 11.642C11.3814 11.4899 11.4793 11.3377 11.6261 11.287C11.8219 11.1855 12.0178 11.1855 12.5073 11.1855H15.4934C15.983 11.1855 16.1788 11.1855 16.3746 11.287C16.5215 11.3884 16.6683 11.4899 16.7173 11.642C16.8152 11.8449 16.8152 12.0477 16.8152 12.5042V15.4965C16.8152 15.953 16.8152 16.2066 16.7173 16.3587C16.6194 16.5109 16.5215 16.663 16.3746 16.7137C16.1788 16.8152 15.983 16.8152 15.4934 16.8152H12.5073C12.0178 16.8152 11.8219 16.8152 11.6261 16.7137C11.4793 16.6123 11.3324 16.5109 11.2835 16.3587C11.1855 16.1558 11.1855 15.953 11.1855 15.4965V12.5042Z",
                    fill: "#0052FF"
                }))
            }
        },
        2313: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.LaptopIcon = void 0;
            let i = n(21593);
            t.LaptopIcon = function(e) {
                return (0, i.h)("svg", Object.assign({
                    width: "14",
                    height: "14",
                    viewBox: "0 0 14 14",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), (0, i.h)("path", {
                    d: "M1.8001 2.2002H12.2001V9.40019H1.8001V2.2002ZM3.4001 3.8002V7.80019H10.6001V3.8002H3.4001Z"
                }), (0, i.h)("path", {
                    d: "M13.4001 10.2002H0.600098C0.600098 11.0838 1.31644 11.8002 2.2001 11.8002H11.8001C12.6838 11.8002 13.4001 11.0838 13.4001 10.2002Z"
                }))
            }
        },
        50767: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.QRCodeIcon = void 0;
            let i = n(21593);
            t.QRCodeIcon = function(e) {
                return (0, i.h)("svg", Object.assign({
                    width: "18",
                    height: "18",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), (0, i.h)("path", {
                    d: "M3 3V8.99939L5 8.99996V5H9V3H3Z"
                }), (0, i.h)("path", {
                    d: "M15 21L21 21V15.0006L19 15V19L15 19V21Z"
                }), (0, i.h)("path", {
                    d: "M21 9H19V5H15.0006L15 3H21V9Z"
                }), (0, i.h)("path", {
                    d: "M3 15V21H8.99939L8.99996 19H5L5 15H3Z"
                }))
            }
        },
        78213: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SafeIcon = void 0;
            let i = n(21593);
            t.SafeIcon = function(e) {
                return (0, i.h)("svg", Object.assign({
                    width: "14",
                    height: "14",
                    viewBox: "0 0 14 14",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), (0, i.h)("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M0.600098 0.600098V11.8001H13.4001V0.600098H0.600098ZM7.0001 9.2001C5.3441 9.2001 4.0001 7.8561 4.0001 6.2001C4.0001 4.5441 5.3441 3.2001 7.0001 3.2001C8.6561 3.2001 10.0001 4.5441 10.0001 6.2001C10.0001 7.8561 8.6561 9.2001 7.0001 9.2001ZM0.600098 12.6001H3.8001V13.4001H0.600098V12.6001ZM10.2001 12.6001H13.4001V13.4001H10.2001V12.6001ZM8.8001 6.2001C8.8001 7.19421 7.99421 8.0001 7.0001 8.0001C6.00598 8.0001 5.2001 7.19421 5.2001 6.2001C5.2001 5.20598 6.00598 4.4001 7.0001 4.4001C7.99421 4.4001 8.8001 5.20598 8.8001 6.2001Z"
                }))
            }
        },
        66868: function(e, t, n) {
            var i = n(97115).Buffer;
            let o = n(28367),
                a = n(43907);

            function elementaryName(e) {
                if (e.startsWith("int[")) return "int256" + e.slice(3);
                if ("int" === e) return "int256";
                if (e.startsWith("uint[")) return "uint256" + e.slice(4);
                if ("uint" === e) return "uint256";
                if (e.startsWith("fixed[")) return "fixed128x128" + e.slice(5);
                if ("fixed" === e) return "fixed128x128";
                if (e.startsWith("ufixed[")) return "ufixed128x128" + e.slice(6);
                else if ("ufixed" === e) return "ufixed128x128";
                return e
            }

            function parseTypeN(e) {
                return parseInt(/^\D+(\d+)$/.exec(e)[1], 10)
            }

            function parseTypeNxM(e) {
                var t = /^\D+(\d+)x(\d+)$/.exec(e);
                return [parseInt(t[1], 10), parseInt(t[2], 10)]
            }

            function parseTypeArray(e) {
                var t = e.match(/(.*)\[(.*?)\]$/);
                return t ? "" === t[2] ? "dynamic" : parseInt(t[2], 10) : null
            }

            function parseNumber(e) {
                var t = typeof e;
                if ("string" === t) return o.isHexString(e) ? new a(o.stripHexPrefix(e), 16) : new a(e, 10);
                if ("number" === t) return new a(e);
                if (e.toArray) return e;
                throw Error("Argument is not a number")
            }

            function encodeSingle(e, t) {
                if ("address" === e) return encodeSingle("uint160", parseNumber(t));
                if ("bool" === e) return encodeSingle("uint8", t ? 1 : 0);
                if ("string" === e) return encodeSingle("bytes", new i(t, "utf8"));
                if ((R = e).lastIndexOf("]") === R.length - 1) {
                    if (void 0 === t.length) throw Error("Not an array?");
                    if ("dynamic" !== (n = parseTypeArray(e)) && 0 !== n && t.length > n) throw Error("Elements exceed array size: " + n);
                    for (u in c = [], e = e.slice(0, e.lastIndexOf("[")), "string" == typeof t && (t = JSON.parse(t)), t) c.push(encodeSingle(e, t[u]));
                    if ("dynamic" === n) {
                        var n, l, c, u, R, N = encodeSingle("uint256", t.length);
                        c.unshift(N)
                    }
                    return i.concat(c)
                }
                if ("bytes" === e) return t = new i(t), c = i.concat([encodeSingle("uint256", t.length), t]), t.length % 32 != 0 && (c = i.concat([c, o.zeros(32 - t.length % 32)])), c;
                if (e.startsWith("bytes")) {
                    if ((n = parseTypeN(e)) < 1 || n > 32) throw Error("Invalid bytes<N> width: " + n);
                    return o.setLengthRight(t, 32)
                } else if (e.startsWith("uint")) {
                    if ((n = parseTypeN(e)) % 8 || n < 8 || n > 256) throw Error("Invalid uint<N> width: " + n);
                    if ((l = parseNumber(t)).bitLength() > n) throw Error("Supplied uint exceeds width: " + n + " vs " + l.bitLength());
                    if (l < 0) throw Error("Supplied uint is negative");
                    return l.toArrayLike(i, "be", 32)
                } else if (e.startsWith("int")) {
                    if ((n = parseTypeN(e)) % 8 || n < 8 || n > 256) throw Error("Invalid int<N> width: " + n);
                    if ((l = parseNumber(t)).bitLength() > n) throw Error("Supplied int exceeds width: " + n + " vs " + l.bitLength());
                    return l.toTwos(256).toArrayLike(i, "be", 32)
                } else if (e.startsWith("ufixed")) {
                    if (n = parseTypeNxM(e), (l = parseNumber(t)) < 0) throw Error("Supplied ufixed is negative");
                    return encodeSingle("uint256", l.mul(new a(2).pow(new a(n[1]))))
                } else if (e.startsWith("fixed")) return n = parseTypeNxM(e), encodeSingle("int256", parseNumber(t).mul(new a(2).pow(new a(n[1]))));
                throw Error("Unsupported or invalid type: " + e)
            }

            function solidityPack(e, t) {
                if (e.length !== t.length) throw Error("Number of types are not matching the values");
                for (var n, a, l = [], c = 0; c < e.length; c++) {
                    var u = elementaryName(e[c]),
                        R = t[c];
                    if ("bytes" === u) l.push(R);
                    else if ("string" === u) l.push(new i(R, "utf8"));
                    else if ("bool" === u) l.push(new i(R ? "01" : "00", "hex"));
                    else if ("address" === u) l.push(o.setLength(R, 20));
                    else if (u.startsWith("bytes")) {
                        if ((n = parseTypeN(u)) < 1 || n > 32) throw Error("Invalid bytes<N> width: " + n);
                        l.push(o.setLengthRight(R, n))
                    } else if (u.startsWith("uint")) {
                        if ((n = parseTypeN(u)) % 8 || n < 8 || n > 256) throw Error("Invalid uint<N> width: " + n);
                        if ((a = parseNumber(R)).bitLength() > n) throw Error("Supplied uint exceeds width: " + n + " vs " + a.bitLength());
                        l.push(a.toArrayLike(i, "be", n / 8))
                    } else if (u.startsWith("int")) {
                        if ((n = parseTypeN(u)) % 8 || n < 8 || n > 256) throw Error("Invalid int<N> width: " + n);
                        if ((a = parseNumber(R)).bitLength() > n) throw Error("Supplied int exceeds width: " + n + " vs " + a.bitLength());
                        l.push(a.toTwos(n).toArrayLike(i, "be", n / 8))
                    } else throw Error("Unsupported or invalid type: " + u)
                }
                return i.concat(l)
            }
            e.exports = {
                rawEncode: function(e, t) {
                    var n = [],
                        o = [],
                        a = 32 * e.length;
                    for (var l in e) {
                        var c = elementaryName(e[l]),
                            u = encodeSingle(c, t[l]);
                        "string" === c || "bytes" === c || "dynamic" === parseTypeArray(c) ? (n.push(encodeSingle("uint256", a)), o.push(u), a += u.length) : n.push(u)
                    }
                    return i.concat(n.concat(o))
                },
                solidityPack,
                soliditySHA3: function(e, t) {
                    return o.keccak(solidityPack(e, t))
                }
            }
        },
        80393: function(e, t, n) {
            var i = n(97115).Buffer;
            let o = n(28367),
                a = n(66868),
                l = {
                    type: "object",
                    properties: {
                        types: {
                            type: "object",
                            additionalProperties: {
                                type: "array",
                                items: {
                                    type: "object",
                                    properties: {
                                        name: {
                                            type: "string"
                                        },
                                        type: {
                                            type: "string"
                                        }
                                    },
                                    required: ["name", "type"]
                                }
                            }
                        },
                        primaryType: {
                            type: "string"
                        },
                        domain: {
                            type: "object"
                        },
                        message: {
                            type: "object"
                        }
                    },
                    required: ["types", "primaryType", "domain", "message"]
                },
                c = {
                    encodeData(e, t, n, l = !0) {
                        let c = ["bytes32"],
                            u = [this.hashType(e, n)];
                        if (l) {
                            let encodeField = (e, t, c) => {
                                if (void 0 !== n[t]) return ["bytes32", null == c ? "0x0000000000000000000000000000000000000000000000000000000000000000" : o.keccak(this.encodeData(t, c, n, l))];
                                if (void 0 === c) throw Error(`missing value for field ${e} of type ${t}`);
                                if ("bytes" === t) return ["bytes32", o.keccak(c)];
                                if ("string" === t) return "string" == typeof c && (c = i.from(c, "utf8")), ["bytes32", o.keccak(c)];
                                if (t.lastIndexOf("]") === t.length - 1) {
                                    let n = t.slice(0, t.lastIndexOf("[")),
                                        i = c.map(t => encodeField(e, n, t));
                                    return ["bytes32", o.keccak(a.rawEncode(i.map(([e]) => e), i.map(([, e]) => e)))]
                                }
                                return [t, c]
                            };
                            for (let i of n[e]) {
                                let [e, n] = encodeField(i.name, i.type, t[i.name]);
                                c.push(e), u.push(n)
                            }
                        } else
                            for (let a of n[e]) {
                                let e = t[a.name];
                                if (void 0 !== e) {
                                    if ("bytes" === a.type) c.push("bytes32"), e = o.keccak(e), u.push(e);
                                    else if ("string" === a.type) c.push("bytes32"), "string" == typeof e && (e = i.from(e, "utf8")), e = o.keccak(e), u.push(e);
                                    else if (void 0 !== n[a.type]) c.push("bytes32"), e = o.keccak(this.encodeData(a.type, e, n, l)), u.push(e);
                                    else if (a.type.lastIndexOf("]") === a.type.length - 1) throw Error("Arrays currently unimplemented in encodeData");
                                    else c.push(a.type), u.push(e)
                                }
                            }
                        return a.rawEncode(c, u)
                    },
                    encodeType(e, t) {
                        let n = "",
                            i = this.findTypeDependencies(e, t).filter(t => t !== e);
                        for (let o of i = [e].concat(i.sort())) {
                            let e = t[o];
                            if (!e) throw Error("No type definition specified: " + o);
                            n += o + "(" + t[o].map(({
                                name: e,
                                type: t
                            }) => t + " " + e).join(",") + ")"
                        }
                        return n
                    },
                    findTypeDependencies(e, t, n = []) {
                        if (e = e.match(/^\w*/)[0], n.includes(e) || void 0 === t[e]) return n;
                        for (let i of (n.push(e), t[e]))
                            for (let e of this.findTypeDependencies(i.type, t, n)) n.includes(e) || n.push(e);
                        return n
                    },
                    hashStruct(e, t, n, i = !0) {
                        return o.keccak(this.encodeData(e, t, n, i))
                    },
                    hashType(e, t) {
                        return o.keccak(this.encodeType(e, t))
                    },
                    sanitizeData(e) {
                        let t = {};
                        for (let n in l.properties) e[n] && (t[n] = e[n]);
                        return t.types && (t.types = Object.assign({
                            EIP712Domain: []
                        }, t.types)), t
                    },
                    hash(e, t = !0) {
                        let n = this.sanitizeData(e),
                            a = [i.from("1901", "hex")];
                        return a.push(this.hashStruct("EIP712Domain", n.domain, n.types, t)), "EIP712Domain" !== n.primaryType && a.push(this.hashStruct(n.primaryType, n.message, n.types, t)), o.keccak(i.concat(a))
                    }
                };
            e.exports = {
                TYPED_MESSAGE_SCHEMA: l,
                TypedDataUtils: c,
                hashForSignTypedDataLegacy: function(e) {
                    return function(e) {
                        let t = Error("Expect argument to be non-empty array");
                        if ("object" != typeof e || !e.length) throw t;
                        let n = e.map(function(e) {
                                return "bytes" === e.type ? o.toBuffer(e.value) : e.value
                            }),
                            i = e.map(function(e) {
                                return e.type
                            }),
                            l = e.map(function(e) {
                                if (!e.name) throw t;
                                return e.type + " " + e.name
                            });
                        return a.soliditySHA3(["bytes32", "bytes32"], [a.soliditySHA3(Array(e.length).fill("string"), l), a.soliditySHA3(i, n)])
                    }(e.data)
                },
                hashForSignTypedData_v3: function(e) {
                    return c.hash(e.data, !1)
                },
                hashForSignTypedData_v4: function(e) {
                    return c.hash(e.data)
                }
            }
        },
        28367: function(e, t, n) {
            var i = n(97115).Buffer;
            let o = n(53733),
                a = n(43907);

            function zeros(e) {
                return i.allocUnsafe(e).fill(0)
            }

            function setLength(e, t, n) {
                let i = zeros(t);
                return (e = toBuffer(e), n) ? e.length < t ? (e.copy(i), i) : e.slice(0, t) : e.length < t ? (e.copy(i, t - e.length), i) : e.slice(-t)
            }

            function toBuffer(e) {
                if (!i.isBuffer(e)) {
                    if (Array.isArray(e)) e = i.from(e);
                    else if ("string" == typeof e) {
                        var t;
                        e = isHexString(e) ? i.from((t = stripHexPrefix(e)).length % 2 ? "0" + t : t, "hex") : i.from(e)
                    } else if ("number" == typeof e) e = intToBuffer(e);
                    else if (null == e) e = i.allocUnsafe(0);
                    else if (a.isBN(e)) e = e.toArrayLike(i);
                    else if (e.toArray) e = i.from(e.toArray());
                    else throw Error("invalid type")
                }
                return e
            }

            function isHexString(e) {
                return "string" == typeof e && e.match(/^0x[0-9A-Fa-f]*$/)
            }

            function stripHexPrefix(e) {
                return "string" == typeof e && e.startsWith("0x") ? e.slice(2) : e
            }
            e.exports = {
                zeros,
                setLength,
                setLengthRight: function(e, t) {
                    return setLength(e, t, !0)
                },
                isHexString,
                stripHexPrefix,
                toBuffer,
                bufferToHex: function(e) {
                    return "0x" + (e = toBuffer(e)).toString("hex")
                },
                keccak: function(e, t) {
                    return e = toBuffer(e), t || (t = 256), o("keccak" + t).update(e).digest()
                }
            }
        },
        29780: function(e) {
            function QR8bitByte(e) {
                this.mode = t.MODE_8BIT_BYTE, this.data = e, this.parsedData = [];
                for (var n = 0, i = this.data.length; n < i; n++) {
                    var o = [],
                        a = this.data.charCodeAt(n);
                    a > 65536 ? (o[0] = 240 | (1835008 & a) >>> 18, o[1] = 128 | (258048 & a) >>> 12, o[2] = 128 | (4032 & a) >>> 6, o[3] = 128 | 63 & a) : a > 2048 ? (o[0] = 224 | (61440 & a) >>> 12, o[1] = 128 | (4032 & a) >>> 6, o[2] = 128 | 63 & a) : a > 128 ? (o[0] = 192 | (1984 & a) >>> 6, o[1] = 128 | 63 & a) : o[0] = a, this.parsedData.push(o)
                }
                this.parsedData = Array.prototype.concat.apply([], this.parsedData), this.parsedData.length != this.data.length && (this.parsedData.unshift(191), this.parsedData.unshift(187), this.parsedData.unshift(239))
            }

            function QRCodeModel(e, t) {
                this.typeNumber = e, this.errorCorrectLevel = t, this.modules = null, this.moduleCount = 0, this.dataCache = null, this.dataList = []
            }
            QR8bitByte.prototype = {
                getLength: function(e) {
                    return this.parsedData.length
                },
                write: function(e) {
                    for (var t = 0, n = this.parsedData.length; t < n; t++) e.put(this.parsedData[t], 8)
                }
            }, QRCodeModel.prototype = {
                addData: function(e) {
                    var t = new QR8bitByte(e);
                    this.dataList.push(t), this.dataCache = null
                },
                isDark: function(e, t) {
                    if (e < 0 || this.moduleCount <= e || t < 0 || this.moduleCount <= t) throw Error(e + "," + t);
                    return this.modules[e][t]
                },
                getModuleCount: function() {
                    return this.moduleCount
                },
                make: function() {
                    this.makeImpl(!1, this.getBestMaskPattern())
                },
                makeImpl: function(e, t) {
                    this.moduleCount = 4 * this.typeNumber + 17, this.modules = Array(this.moduleCount);
                    for (var n = 0; n < this.moduleCount; n++) {
                        this.modules[n] = Array(this.moduleCount);
                        for (var i = 0; i < this.moduleCount; i++) this.modules[n][i] = null
                    }
                    this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(e, t), this.typeNumber >= 7 && this.setupTypeNumber(e), null == this.dataCache && (this.dataCache = QRCodeModel.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, t)
                },
                setupPositionProbePattern: function(e, t) {
                    for (var n = -1; n <= 7; n++)
                        if (!(e + n <= -1) && !(this.moduleCount <= e + n))
                            for (var i = -1; i <= 7; i++) t + i <= -1 || this.moduleCount <= t + i || (0 <= n && n <= 6 && (0 == i || 6 == i) || 0 <= i && i <= 6 && (0 == n || 6 == n) || 2 <= n && n <= 4 && 2 <= i && i <= 4 ? this.modules[e + n][t + i] = !0 : this.modules[e + n][t + i] = !1)
                },
                getBestMaskPattern: function() {
                    for (var e = 0, t = 0, n = 0; n < 8; n++) {
                        this.makeImpl(!0, n);
                        var i = o.getLostPoint(this);
                        (0 == n || e > i) && (e = i, t = n)
                    }
                    return t
                },
                createMovieClip: function(e, t, n) {
                    var i = e.createEmptyMovieClip(t, n);
                    this.make();
                    for (var o = 0; o < this.modules.length; o++)
                        for (var a = 1 * o, l = 0; l < this.modules[o].length; l++) {
                            var c = 1 * l;
                            this.modules[o][l] && (i.beginFill(0, 100), i.moveTo(c, a), i.lineTo(c + 1, a), i.lineTo(c + 1, a + 1), i.lineTo(c, a + 1), i.endFill())
                        }
                    return i
                },
                setupTimingPattern: function() {
                    for (var e = 8; e < this.moduleCount - 8; e++) null == this.modules[e][6] && (this.modules[e][6] = e % 2 == 0);
                    for (var t = 8; t < this.moduleCount - 8; t++) null == this.modules[6][t] && (this.modules[6][t] = t % 2 == 0)
                },
                setupPositionAdjustPattern: function() {
                    for (var e = o.getPatternPosition(this.typeNumber), t = 0; t < e.length; t++)
                        for (var n = 0; n < e.length; n++) {
                            var i = e[t],
                                a = e[n];
                            if (null == this.modules[i][a])
                                for (var l = -2; l <= 2; l++)
                                    for (var c = -2; c <= 2; c++) - 2 == l || 2 == l || -2 == c || 2 == c || 0 == l && 0 == c ? this.modules[i + l][a + c] = !0 : this.modules[i + l][a + c] = !1
                        }
                },
                setupTypeNumber: function(e) {
                    for (var t = o.getBCHTypeNumber(this.typeNumber), n = 0; n < 18; n++) {
                        var i = !e && (t >> n & 1) == 1;
                        this.modules[Math.floor(n / 3)][n % 3 + this.moduleCount - 8 - 3] = i
                    }
                    for (var n = 0; n < 18; n++) {
                        var i = !e && (t >> n & 1) == 1;
                        this.modules[n % 3 + this.moduleCount - 8 - 3][Math.floor(n / 3)] = i
                    }
                },
                setupTypeInfo: function(e, t) {
                    for (var n = this.errorCorrectLevel << 3 | t, i = o.getBCHTypeInfo(n), a = 0; a < 15; a++) {
                        var l = !e && (i >> a & 1) == 1;
                        a < 6 ? this.modules[a][8] = l : a < 8 ? this.modules[a + 1][8] = l : this.modules[this.moduleCount - 15 + a][8] = l
                    }
                    for (var a = 0; a < 15; a++) {
                        var l = !e && (i >> a & 1) == 1;
                        a < 8 ? this.modules[8][this.moduleCount - a - 1] = l : a < 9 ? this.modules[8][15 - a - 1 + 1] = l : this.modules[8][15 - a - 1] = l
                    }
                    this.modules[this.moduleCount - 8][8] = !e
                },
                mapData: function(e, t) {
                    for (var n = -1, i = this.moduleCount - 1, a = 7, l = 0, c = this.moduleCount - 1; c > 0; c -= 2)
                        for (6 == c && c--;;) {
                            for (var u = 0; u < 2; u++)
                                if (null == this.modules[i][c - u]) {
                                    var R = !1;
                                    l < e.length && (R = (e[l] >>> a & 1) == 1), o.getMask(t, i, c - u) && (R = !R), this.modules[i][c - u] = R, -1 == --a && (l++, a = 7)
                                }
                            if ((i += n) < 0 || this.moduleCount <= i) {
                                i -= n, n = -n;
                                break
                            }
                        }
                }
            }, QRCodeModel.PAD0 = 236, QRCodeModel.PAD1 = 17, QRCodeModel.createData = function(e, t, n) {
                for (var i = QRRSBlock.getRSBlocks(e, t), a = new QRBitBuffer, l = 0; l < n.length; l++) {
                    var c = n[l];
                    a.put(c.mode, 4), a.put(c.getLength(), o.getLengthInBits(c.mode, e)), c.write(a)
                }
                for (var u = 0, l = 0; l < i.length; l++) u += i[l].dataCount;
                if (a.getLengthInBits() > 8 * u) throw Error("code length overflow. (" + a.getLengthInBits() + ">" + 8 * u + ")");
                for (a.getLengthInBits() + 4 <= 8 * u && a.put(0, 4); a.getLengthInBits() % 8 != 0;) a.putBit(!1);
                for (; !(a.getLengthInBits() >= 8 * u) && (a.put(QRCodeModel.PAD0, 8), !(a.getLengthInBits() >= 8 * u));) a.put(QRCodeModel.PAD1, 8);
                return QRCodeModel.createBytes(a, i)
            }, QRCodeModel.createBytes = function(e, t) {
                for (var n = 0, i = 0, a = 0, l = Array(t.length), c = Array(t.length), u = 0; u < t.length; u++) {
                    var R = t[u].dataCount,
                        N = t[u].totalCount - R;
                    i = Math.max(i, R), a = Math.max(a, N), l[u] = Array(R);
                    for (var H = 0; H < l[u].length; H++) l[u][H] = 255 & e.buffer[H + n];
                    n += R;
                    var U = o.getErrorCorrectPolynomial(N),
                        W = new QRPolynomial(l[u], U.getLength() - 1).mod(U);
                    c[u] = Array(U.getLength() - 1);
                    for (var H = 0; H < c[u].length; H++) {
                        var J = H + W.getLength() - c[u].length;
                        c[u][H] = J >= 0 ? W.get(J) : 0
                    }
                }
                for (var Q = 0, H = 0; H < t.length; H++) Q += t[H].totalCount;
                for (var Z = Array(Q), Y = 0, H = 0; H < i; H++)
                    for (var u = 0; u < t.length; u++) H < l[u].length && (Z[Y++] = l[u][H]);
                for (var H = 0; H < a; H++)
                    for (var u = 0; u < t.length; u++) H < c[u].length && (Z[Y++] = c[u][H]);
                return Z
            };
            for (var t = {
                    MODE_NUMBER: 1,
                    MODE_ALPHA_NUM: 2,
                    MODE_8BIT_BYTE: 4,
                    MODE_KANJI: 8
                }, n = {
                    L: 1,
                    M: 0,
                    Q: 3,
                    H: 2
                }, i = {
                    PATTERN000: 0,
                    PATTERN001: 1,
                    PATTERN010: 2,
                    PATTERN011: 3,
                    PATTERN100: 4,
                    PATTERN101: 5,
                    PATTERN110: 6,
                    PATTERN111: 7
                }, o = {
                    PATTERN_POSITION_TABLE: [
                        [],
                        [6, 18],
                        [6, 22],
                        [6, 26],
                        [6, 30],
                        [6, 34],
                        [6, 22, 38],
                        [6, 24, 42],
                        [6, 26, 46],
                        [6, 28, 50],
                        [6, 30, 54],
                        [6, 32, 58],
                        [6, 34, 62],
                        [6, 26, 46, 66],
                        [6, 26, 48, 70],
                        [6, 26, 50, 74],
                        [6, 30, 54, 78],
                        [6, 30, 56, 82],
                        [6, 30, 58, 86],
                        [6, 34, 62, 90],
                        [6, 28, 50, 72, 94],
                        [6, 26, 50, 74, 98],
                        [6, 30, 54, 78, 102],
                        [6, 28, 54, 80, 106],
                        [6, 32, 58, 84, 110],
                        [6, 30, 58, 86, 114],
                        [6, 34, 62, 90, 118],
                        [6, 26, 50, 74, 98, 122],
                        [6, 30, 54, 78, 102, 126],
                        [6, 26, 52, 78, 104, 130],
                        [6, 30, 56, 82, 108, 134],
                        [6, 34, 60, 86, 112, 138],
                        [6, 30, 58, 86, 114, 142],
                        [6, 34, 62, 90, 118, 146],
                        [6, 30, 54, 78, 102, 126, 150],
                        [6, 24, 50, 76, 102, 128, 154],
                        [6, 28, 54, 80, 106, 132, 158],
                        [6, 32, 58, 84, 110, 136, 162],
                        [6, 26, 54, 82, 110, 138, 166],
                        [6, 30, 58, 86, 114, 142, 170]
                    ],
                    G15: 1335,
                    G18: 7973,
                    G15_MASK: 21522,
                    getBCHTypeInfo: function(e) {
                        for (var t = e << 10; o.getBCHDigit(t) - o.getBCHDigit(o.G15) >= 0;) t ^= o.G15 << o.getBCHDigit(t) - o.getBCHDigit(o.G15);
                        return (e << 10 | t) ^ o.G15_MASK
                    },
                    getBCHTypeNumber: function(e) {
                        for (var t = e << 12; o.getBCHDigit(t) - o.getBCHDigit(o.G18) >= 0;) t ^= o.G18 << o.getBCHDigit(t) - o.getBCHDigit(o.G18);
                        return e << 12 | t
                    },
                    getBCHDigit: function(e) {
                        for (var t = 0; 0 != e;) t++, e >>>= 1;
                        return t
                    },
                    getPatternPosition: function(e) {
                        return o.PATTERN_POSITION_TABLE[e - 1]
                    },
                    getMask: function(e, t, n) {
                        switch (e) {
                            case i.PATTERN000:
                                return (t + n) % 2 == 0;
                            case i.PATTERN001:
                                return t % 2 == 0;
                            case i.PATTERN010:
                                return n % 3 == 0;
                            case i.PATTERN011:
                                return (t + n) % 3 == 0;
                            case i.PATTERN100:
                                return (Math.floor(t / 2) + Math.floor(n / 3)) % 2 == 0;
                            case i.PATTERN101:
                                return t * n % 2 + t * n % 3 == 0;
                            case i.PATTERN110:
                                return (t * n % 2 + t * n % 3) % 2 == 0;
                            case i.PATTERN111:
                                return (t * n % 3 + (t + n) % 2) % 2 == 0;
                            default:
                                throw Error("bad maskPattern:" + e)
                        }
                    },
                    getErrorCorrectPolynomial: function(e) {
                        for (var t = new QRPolynomial([1], 0), n = 0; n < e; n++) t = t.multiply(new QRPolynomial([1, a.gexp(n)], 0));
                        return t
                    },
                    getLengthInBits: function(e, n) {
                        if (1 <= n && n < 10) switch (e) {
                            case t.MODE_NUMBER:
                                return 10;
                            case t.MODE_ALPHA_NUM:
                                return 9;
                            case t.MODE_8BIT_BYTE:
                            case t.MODE_KANJI:
                                return 8;
                            default:
                                throw Error("mode:" + e)
                        } else if (n < 27) switch (e) {
                            case t.MODE_NUMBER:
                                return 12;
                            case t.MODE_ALPHA_NUM:
                                return 11;
                            case t.MODE_8BIT_BYTE:
                                return 16;
                            case t.MODE_KANJI:
                                return 10;
                            default:
                                throw Error("mode:" + e)
                        } else if (n < 41) switch (e) {
                            case t.MODE_NUMBER:
                                return 14;
                            case t.MODE_ALPHA_NUM:
                                return 13;
                            case t.MODE_8BIT_BYTE:
                                return 16;
                            case t.MODE_KANJI:
                                return 12;
                            default:
                                throw Error("mode:" + e)
                        } else throw Error("type:" + n)
                    },
                    getLostPoint: function(e) {
                        for (var t = e.getModuleCount(), n = 0, i = 0; i < t; i++)
                            for (var o = 0; o < t; o++) {
                                for (var a = 0, l = e.isDark(i, o), c = -1; c <= 1; c++)
                                    if (!(i + c < 0) && !(t <= i + c))
                                        for (var u = -1; u <= 1; u++) !(o + u < 0) && !(t <= o + u) && (0 != c || 0 != u) && l == e.isDark(i + c, o + u) && a++;
                                a > 5 && (n += 3 + a - 5)
                            }
                        for (var i = 0; i < t - 1; i++)
                            for (var o = 0; o < t - 1; o++) {
                                var R = 0;
                                e.isDark(i, o) && R++, e.isDark(i + 1, o) && R++, e.isDark(i, o + 1) && R++, e.isDark(i + 1, o + 1) && R++, (0 == R || 4 == R) && (n += 3)
                            }
                        for (var i = 0; i < t; i++)
                            for (var o = 0; o < t - 6; o++) e.isDark(i, o) && !e.isDark(i, o + 1) && e.isDark(i, o + 2) && e.isDark(i, o + 3) && e.isDark(i, o + 4) && !e.isDark(i, o + 5) && e.isDark(i, o + 6) && (n += 40);
                        for (var o = 0; o < t; o++)
                            for (var i = 0; i < t - 6; i++) e.isDark(i, o) && !e.isDark(i + 1, o) && e.isDark(i + 2, o) && e.isDark(i + 3, o) && e.isDark(i + 4, o) && !e.isDark(i + 5, o) && e.isDark(i + 6, o) && (n += 40);
                        for (var N = 0, o = 0; o < t; o++)
                            for (var i = 0; i < t; i++) e.isDark(i, o) && N++;
                        return n + 10 * (Math.abs(100 * N / t / t - 50) / 5)
                    }
                }, a = {
                    glog: function(e) {
                        if (e < 1) throw Error("glog(" + e + ")");
                        return a.LOG_TABLE[e]
                    },
                    gexp: function(e) {
                        for (; e < 0;) e += 255;
                        for (; e >= 256;) e -= 255;
                        return a.EXP_TABLE[e]
                    },
                    EXP_TABLE: Array(256),
                    LOG_TABLE: Array(256)
                }, l = 0; l < 8; l++) a.EXP_TABLE[l] = 1 << l;
            for (var l = 8; l < 256; l++) a.EXP_TABLE[l] = a.EXP_TABLE[l - 4] ^ a.EXP_TABLE[l - 5] ^ a.EXP_TABLE[l - 6] ^ a.EXP_TABLE[l - 8];
            for (var l = 0; l < 255; l++) a.LOG_TABLE[a.EXP_TABLE[l]] = l;

            function QRPolynomial(e, t) {
                if (void 0 == e.length) throw Error(e.length + "/" + t);
                for (var n = 0; n < e.length && 0 == e[n];) n++;
                this.num = Array(e.length - n + t);
                for (var i = 0; i < e.length - n; i++) this.num[i] = e[i + n]
            }

            function QRRSBlock(e, t) {
                this.totalCount = e, this.dataCount = t
            }

            function QRBitBuffer() {
                this.buffer = [], this.length = 0
            }
            QRPolynomial.prototype = {
                get: function(e) {
                    return this.num[e]
                },
                getLength: function() {
                    return this.num.length
                },
                multiply: function(e) {
                    for (var t = Array(this.getLength() + e.getLength() - 1), n = 0; n < this.getLength(); n++)
                        for (var i = 0; i < e.getLength(); i++) t[n + i] ^= a.gexp(a.glog(this.get(n)) + a.glog(e.get(i)));
                    return new QRPolynomial(t, 0)
                },
                mod: function(e) {
                    if (this.getLength() - e.getLength() < 0) return this;
                    for (var t = a.glog(this.get(0)) - a.glog(e.get(0)), n = Array(this.getLength()), i = 0; i < this.getLength(); i++) n[i] = this.get(i);
                    for (var i = 0; i < e.getLength(); i++) n[i] ^= a.gexp(a.glog(e.get(i)) + t);
                    return new QRPolynomial(n, 0).mod(e)
                }
            }, QRRSBlock.RS_BLOCK_TABLE = [
                [1, 26, 19],
                [1, 26, 16],
                [1, 26, 13],
                [1, 26, 9],
                [1, 44, 34],
                [1, 44, 28],
                [1, 44, 22],
                [1, 44, 16],
                [1, 70, 55],
                [1, 70, 44],
                [2, 35, 17],
                [2, 35, 13],
                [1, 100, 80],
                [2, 50, 32],
                [2, 50, 24],
                [4, 25, 9],
                [1, 134, 108],
                [2, 67, 43],
                [2, 33, 15, 2, 34, 16],
                [2, 33, 11, 2, 34, 12],
                [2, 86, 68],
                [4, 43, 27],
                [4, 43, 19],
                [4, 43, 15],
                [2, 98, 78],
                [4, 49, 31],
                [2, 32, 14, 4, 33, 15],
                [4, 39, 13, 1, 40, 14],
                [2, 121, 97],
                [2, 60, 38, 2, 61, 39],
                [4, 40, 18, 2, 41, 19],
                [4, 40, 14, 2, 41, 15],
                [2, 146, 116],
                [3, 58, 36, 2, 59, 37],
                [4, 36, 16, 4, 37, 17],
                [4, 36, 12, 4, 37, 13],
                [2, 86, 68, 2, 87, 69],
                [4, 69, 43, 1, 70, 44],
                [6, 43, 19, 2, 44, 20],
                [6, 43, 15, 2, 44, 16],
                [4, 101, 81],
                [1, 80, 50, 4, 81, 51],
                [4, 50, 22, 4, 51, 23],
                [3, 36, 12, 8, 37, 13],
                [2, 116, 92, 2, 117, 93],
                [6, 58, 36, 2, 59, 37],
                [4, 46, 20, 6, 47, 21],
                [7, 42, 14, 4, 43, 15],
                [4, 133, 107],
                [8, 59, 37, 1, 60, 38],
                [8, 44, 20, 4, 45, 21],
                [12, 33, 11, 4, 34, 12],
                [3, 145, 115, 1, 146, 116],
                [4, 64, 40, 5, 65, 41],
                [11, 36, 16, 5, 37, 17],
                [11, 36, 12, 5, 37, 13],
                [5, 109, 87, 1, 110, 88],
                [5, 65, 41, 5, 66, 42],
                [5, 54, 24, 7, 55, 25],
                [11, 36, 12],
                [5, 122, 98, 1, 123, 99],
                [7, 73, 45, 3, 74, 46],
                [15, 43, 19, 2, 44, 20],
                [3, 45, 15, 13, 46, 16],
                [1, 135, 107, 5, 136, 108],
                [10, 74, 46, 1, 75, 47],
                [1, 50, 22, 15, 51, 23],
                [2, 42, 14, 17, 43, 15],
                [5, 150, 120, 1, 151, 121],
                [9, 69, 43, 4, 70, 44],
                [17, 50, 22, 1, 51, 23],
                [2, 42, 14, 19, 43, 15],
                [3, 141, 113, 4, 142, 114],
                [3, 70, 44, 11, 71, 45],
                [17, 47, 21, 4, 48, 22],
                [9, 39, 13, 16, 40, 14],
                [3, 135, 107, 5, 136, 108],
                [3, 67, 41, 13, 68, 42],
                [15, 54, 24, 5, 55, 25],
                [15, 43, 15, 10, 44, 16],
                [4, 144, 116, 4, 145, 117],
                [17, 68, 42],
                [17, 50, 22, 6, 51, 23],
                [19, 46, 16, 6, 47, 17],
                [2, 139, 111, 7, 140, 112],
                [17, 74, 46],
                [7, 54, 24, 16, 55, 25],
                [34, 37, 13],
                [4, 151, 121, 5, 152, 122],
                [4, 75, 47, 14, 76, 48],
                [11, 54, 24, 14, 55, 25],
                [16, 45, 15, 14, 46, 16],
                [6, 147, 117, 4, 148, 118],
                [6, 73, 45, 14, 74, 46],
                [11, 54, 24, 16, 55, 25],
                [30, 46, 16, 2, 47, 17],
                [8, 132, 106, 4, 133, 107],
                [8, 75, 47, 13, 76, 48],
                [7, 54, 24, 22, 55, 25],
                [22, 45, 15, 13, 46, 16],
                [10, 142, 114, 2, 143, 115],
                [19, 74, 46, 4, 75, 47],
                [28, 50, 22, 6, 51, 23],
                [33, 46, 16, 4, 47, 17],
                [8, 152, 122, 4, 153, 123],
                [22, 73, 45, 3, 74, 46],
                [8, 53, 23, 26, 54, 24],
                [12, 45, 15, 28, 46, 16],
                [3, 147, 117, 10, 148, 118],
                [3, 73, 45, 23, 74, 46],
                [4, 54, 24, 31, 55, 25],
                [11, 45, 15, 31, 46, 16],
                [7, 146, 116, 7, 147, 117],
                [21, 73, 45, 7, 74, 46],
                [1, 53, 23, 37, 54, 24],
                [19, 45, 15, 26, 46, 16],
                [5, 145, 115, 10, 146, 116],
                [19, 75, 47, 10, 76, 48],
                [15, 54, 24, 25, 55, 25],
                [23, 45, 15, 25, 46, 16],
                [13, 145, 115, 3, 146, 116],
                [2, 74, 46, 29, 75, 47],
                [42, 54, 24, 1, 55, 25],
                [23, 45, 15, 28, 46, 16],
                [17, 145, 115],
                [10, 74, 46, 23, 75, 47],
                [10, 54, 24, 35, 55, 25],
                [19, 45, 15, 35, 46, 16],
                [17, 145, 115, 1, 146, 116],
                [14, 74, 46, 21, 75, 47],
                [29, 54, 24, 19, 55, 25],
                [11, 45, 15, 46, 46, 16],
                [13, 145, 115, 6, 146, 116],
                [14, 74, 46, 23, 75, 47],
                [44, 54, 24, 7, 55, 25],
                [59, 46, 16, 1, 47, 17],
                [12, 151, 121, 7, 152, 122],
                [12, 75, 47, 26, 76, 48],
                [39, 54, 24, 14, 55, 25],
                [22, 45, 15, 41, 46, 16],
                [6, 151, 121, 14, 152, 122],
                [6, 75, 47, 34, 76, 48],
                [46, 54, 24, 10, 55, 25],
                [2, 45, 15, 64, 46, 16],
                [17, 152, 122, 4, 153, 123],
                [29, 74, 46, 14, 75, 47],
                [49, 54, 24, 10, 55, 25],
                [24, 45, 15, 46, 46, 16],
                [4, 152, 122, 18, 153, 123],
                [13, 74, 46, 32, 75, 47],
                [48, 54, 24, 14, 55, 25],
                [42, 45, 15, 32, 46, 16],
                [20, 147, 117, 4, 148, 118],
                [40, 75, 47, 7, 76, 48],
                [43, 54, 24, 22, 55, 25],
                [10, 45, 15, 67, 46, 16],
                [19, 148, 118, 6, 149, 119],
                [18, 75, 47, 31, 76, 48],
                [34, 54, 24, 34, 55, 25],
                [20, 45, 15, 61, 46, 16]
            ], QRRSBlock.getRSBlocks = function(e, t) {
                var n = QRRSBlock.getRsBlockTable(e, t);
                if (void 0 == n) throw Error("bad rs block @ typeNumber:" + e + "/errorCorrectLevel:" + t);
                for (var i = n.length / 3, o = [], a = 0; a < i; a++)
                    for (var l = n[3 * a + 0], c = n[3 * a + 1], u = n[3 * a + 2], R = 0; R < l; R++) o.push(new QRRSBlock(c, u));
                return o
            }, QRRSBlock.getRsBlockTable = function(e, t) {
                switch (t) {
                    case n.L:
                        return QRRSBlock.RS_BLOCK_TABLE[(e - 1) * 4 + 0];
                    case n.M:
                        return QRRSBlock.RS_BLOCK_TABLE[(e - 1) * 4 + 1];
                    case n.Q:
                        return QRRSBlock.RS_BLOCK_TABLE[(e - 1) * 4 + 2];
                    case n.H:
                        return QRRSBlock.RS_BLOCK_TABLE[(e - 1) * 4 + 3];
                    default:
                        return
                }
            }, QRBitBuffer.prototype = {
                get: function(e) {
                    var t = Math.floor(e / 8);
                    return (this.buffer[t] >>> 7 - e % 8 & 1) == 1
                },
                put: function(e, t) {
                    for (var n = 0; n < t; n++) this.putBit((e >>> t - n - 1 & 1) == 1)
                },
                getLengthInBits: function() {
                    return this.length
                },
                putBit: function(e) {
                    var t = Math.floor(this.length / 8);
                    this.buffer.length <= t && this.buffer.push(0), e && (this.buffer[t] |= 128 >>> this.length % 8), this.length++
                }
            };
            var c = [
                [17, 14, 11, 7],
                [32, 26, 20, 14],
                [53, 42, 32, 24],
                [78, 62, 46, 34],
                [106, 84, 60, 44],
                [134, 106, 74, 58],
                [154, 122, 86, 64],
                [192, 152, 108, 84],
                [230, 180, 130, 98],
                [271, 213, 151, 119],
                [321, 251, 177, 137],
                [367, 287, 203, 155],
                [425, 331, 241, 177],
                [458, 362, 258, 194],
                [520, 412, 292, 220],
                [586, 450, 322, 250],
                [644, 504, 364, 280],
                [718, 560, 394, 310],
                [792, 624, 442, 338],
                [858, 666, 482, 382],
                [929, 711, 509, 403],
                [1003, 779, 565, 439],
                [1091, 857, 611, 461],
                [1171, 911, 661, 511],
                [1273, 997, 715, 535],
                [1367, 1059, 751, 593],
                [1465, 1125, 805, 625],
                [1528, 1190, 868, 658],
                [1628, 1264, 908, 698],
                [1732, 1370, 982, 742],
                [1840, 1452, 1030, 790],
                [1952, 1538, 1112, 842],
                [2068, 1628, 1168, 898],
                [2188, 1722, 1228, 958],
                [2303, 1809, 1283, 983],
                [2431, 1911, 1351, 1051],
                [2563, 1989, 1423, 1093],
                [2699, 2099, 1499, 1139],
                [2809, 2213, 1579, 1219],
                [2953, 2331, 1663, 1273]
            ];

            function QRCode(e) {
                if (this.options = {
                        padding: 4,
                        width: 256,
                        height: 256,
                        typeNumber: 4,
                        color: "#000000",
                        background: "#ffffff",
                        ecl: "M",
                        image: {
                            svg: "",
                            width: 0,
                            height: 0
                        }
                    }, "string" == typeof e && (e = {
                        content: e
                    }), e)
                    for (var t in e) this.options[t] = e[t];
                if ("string" != typeof this.options.content) throw Error("Expected 'content' as string!");
                if (0 === this.options.content.length) throw Error("Expected 'content' to be non-empty!");
                if (!(this.options.padding >= 0)) throw Error("Expected 'padding' value to be non-negative!");
                if (!(this.options.width > 0) || !(this.options.height > 0)) throw Error("Expected 'width' or 'height' value to be higher than zero!");
                var i = this.options.content,
                    o = function(e, t) {
                        for (var n, i = (n = encodeURI(e).toString().replace(/\%[0-9a-fA-F]{2}/g, "a")).length + (n.length != e ? 3 : 0), o = 1, a = 0, l = 0, u = c.length; l <= u; l++) {
                            var R = c[l];
                            if (!R) throw Error("Content too long: expected " + a + " but got " + i);
                            switch (t) {
                                case "L":
                                    a = R[0];
                                    break;
                                case "M":
                                    a = R[1];
                                    break;
                                case "Q":
                                    a = R[2];
                                    break;
                                case "H":
                                    a = R[3];
                                    break;
                                default:
                                    throw Error("Unknwon error correction level: " + t)
                            }
                            if (i <= a) break;
                            o++
                        }
                        if (o > c.length) throw Error("Content too long");
                        return o
                    }(i, this.options.ecl),
                    a = function(e) {
                        switch (e) {
                            case "L":
                                return n.L;
                            case "M":
                                return n.M;
                            case "Q":
                                return n.Q;
                            case "H":
                                return n.H;
                            default:
                                throw Error("Unknwon error correction level: " + e)
                        }
                    }(this.options.ecl);
                this.qrcode = new QRCodeModel(o, a), this.qrcode.addData(i), this.qrcode.make()
            }
            QRCode.prototype.svg = function(e) {
                var t = this.options || {},
                    n = this.qrcode.modules;
                void 0 === e && (e = {
                    container: t.container || "svg"
                });
                for (var i = void 0 === t.pretty || !!t.pretty, o = i ? "  " : "", a = i ? "\r\n" : "", l = t.width, c = t.height, u = n.length, R = l / (u + 2 * t.padding), N = c / (u + 2 * t.padding), H = void 0 !== t.join && !!t.join, U = void 0 !== t.swap && !!t.swap, W = void 0 === t.xmlDeclaration || !!t.xmlDeclaration, J = void 0 !== t.predefined && !!t.predefined, Q = J ? o + '<defs><path id="qrmodule" d="M0 0 h' + N + " v" + R + ' H0 z" style="fill:' + t.color + ';shape-rendering:crispEdges;" /></defs>' + a : "", Z = o + '<rect x="0" y="0" width="' + l + '" height="' + c + '" style="fill:' + t.background + ';shape-rendering:crispEdges;"/>' + a, Y = "", K = "", X = 0; X < u; X++)
                    for (var ee = 0; ee < u; ee++)
                        if (n[ee][X]) {
                            var et = ee * R + t.padding * R,
                                er = X * N + t.padding * N;
                            if (U) {
                                var en = et;
                                et = er, er = en
                            }
                            if (H) {
                                var es = R + et,
                                    ei = N + er;
                                et = Number.isInteger(et) ? Number(et) : et.toFixed(2), er = Number.isInteger(er) ? Number(er) : er.toFixed(2), es = Number.isInteger(es) ? Number(es) : es.toFixed(2), K += "M" + et + "," + er + " V" + (ei = Number.isInteger(ei) ? Number(ei) : ei.toFixed(2)) + " H" + es + " V" + er + " H" + et + " Z "
                            } else J ? Y += o + '<use x="' + et.toString() + '" y="' + er.toString() + '" href="#qrmodule" />' + a : Y += o + '<rect x="' + et.toString() + '" y="' + er.toString() + '" width="' + R + '" height="' + N + '" style="fill:' + t.color + ';shape-rendering:crispEdges;"/>' + a
                        }
                H && (Y = o + '<path x="0" y="0" style="fill:' + t.color + ';shape-rendering:crispEdges;" d="' + K + '" />');
                let eo = "";
                if (void 0 !== this.options.image && this.options.image.svg) {
                    let e = l * this.options.image.width / 100,
                        t = c * this.options.image.height / 100;
                    eo += `<svg x="${l/2-e/2}" y="${c/2-t/2}" width="${e}" height="${t}" viewBox="0 0 100 100" preserveAspectRatio="xMinYMin meet">` + (this.options.image.svg + a) + "</svg>"
                }
                var ea = "";
                switch (e.container) {
                    case "svg":
                        W && (ea += '<?xml version="1.0" standalone="yes"?>' + a), ea += '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="' + l + '" height="' + c + '">' + a + (Q + Z + Y) + eo + "</svg>";
                        break;
                    case "svg-viewbox":
                        W && (ea += '<?xml version="1.0" standalone="yes"?>' + a), ea += '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 ' + l + " " + c + '">' + a + (Q + Z + Y) + eo + "</svg>";
                        break;
                    case "g":
                        ea += '<g width="' + l + '" height="' + c + '">' + a + (Q + Z + Y) + eo + "</g>";
                        break;
                    default:
                        ea += (Q + Z + Y + eo).replace(/^\s+/, "")
                }
                return ea
            }, e.exports = QRCode
        },
        28343: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.LIB_VERSION = void 0, t.LIB_VERSION = "3.9.2"
        },
        69490: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let i = n(17414);

            function safeApply(e, t, n) {
                try {
                    Reflect.apply(e, t, n)
                } catch (e) {
                    setTimeout(() => {
                        throw e
                    })
                }
            }
            let SafeEventEmitter = class SafeEventEmitter extends i.EventEmitter {
                emit(e, ...t) {
                    let n = "error" === e,
                        i = this._events;
                    if (void 0 !== i) n = n && void 0 === i.error;
                    else if (!n) return !1;
                    if (n) {
                        let e;
                        if (t.length > 0 && ([e] = t), e instanceof Error) throw e;
                        let n = Error(`Unhandled error.${e?` (${e.message})`:""}`);
                        throw n.context = e, n
                    }
                    let o = i[e];
                    if (void 0 === o) return !1;
                    if ("function" == typeof o) safeApply(o, this, t);
                    else {
                        let e = o.length,
                            n = function(e) {
                                let t = e.length,
                                    n = Array(t);
                                for (let i = 0; i < t; i += 1) n[i] = e[i];
                                return n
                            }(o);
                        for (let i = 0; i < e; i += 1) safeApply(n[i], this, t)
                    }
                    return !0
                }
            };
            t.default = SafeEventEmitter
        },
        85670: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let i = n(17414);

            function safeApply(e, t, n) {
                try {
                    Reflect.apply(e, t, n)
                } catch (e) {
                    setTimeout(() => {
                        throw e
                    })
                }
            }
            let SafeEventEmitter = class SafeEventEmitter extends i.EventEmitter {
                emit(e, ...t) {
                    let n = "error" === e,
                        i = this._events;
                    if (void 0 !== i) n = n && void 0 === i.error;
                    else if (!n) return !1;
                    if (n) {
                        let e;
                        if (t.length > 0 && ([e] = t), e instanceof Error) throw e;
                        let n = Error(`Unhandled error.${e?` (${e.message})`:""}`);
                        throw n.context = e, n
                    }
                    let o = i[e];
                    if (void 0 === o) return !1;
                    if ("function" == typeof o) safeApply(o, this, t);
                    else {
                        let e = o.length,
                            n = function(e) {
                                let t = e.length,
                                    n = Array(t);
                                for (let i = 0; i < t; i += 1) n[i] = e[i];
                                return n
                            }(o);
                        for (let i = 0; i < e; i += 1) safeApply(n[i], this, t)
                    }
                    return !0
                }
            };
            t.default = SafeEventEmitter
        },
        48001: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.assertExhaustive = t.assertStruct = t.assert = t.AssertionError = void 0;
            let i = n(78341);

            function getError(e, t) {
                var n, i;
                return "string" == typeof(null === (i = null === (n = null == e ? void 0 : e.prototype) || void 0 === n ? void 0 : n.constructor) || void 0 === i ? void 0 : i.name) ? new e({
                    message: t
                }) : e({
                    message: t
                })
            }
            let AssertionError = class AssertionError extends Error {
                constructor(e) {
                    super(e.message), this.code = "ERR_ASSERTION"
                }
            };
            t.AssertionError = AssertionError, t.assert = function(e, t = "Assertion failed.", n = AssertionError) {
                if (!e) {
                    if (t instanceof Error) throw t;
                    throw getError(n, t)
                }
            }, t.assertStruct = function(e, t, n = "Assertion failed", o = AssertionError) {
                try {
                    (0, i.assert)(e, t)
                } catch (e) {
                    throw getError(o, `${n}: ${function(e){let t="object"==typeof e&&null!==e&&"message"in e?e.message:String(e);return t.endsWith(".")?t.slice(0,-1):t}(e)}.`)
                }
            }, t.assertExhaustive = function(e) {
                throw Error("Invalid branch reached. Should be detected during compilation.")
            }
        },
        43994: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.base64 = void 0;
            let i = n(78341),
                o = n(48001);
            t.base64 = (e, t = {}) => {
                var n, a;
                let l, c;
                let u = null !== (n = t.paddingRequired) && void 0 !== n && n,
                    R = null !== (a = t.characterSet) && void 0 !== a ? a : "base64";
                return "base64" === R ? l = String.raw `[A-Za-z0-9+\/]` : ((0, o.assert)("base64url" === R), l = String.raw `[-_A-Za-z0-9]`), c = u ? RegExp(`^(?:${l}{4})*(?:${l}{3}=|${l}{2}==)?$`, "u") : RegExp(`^(?:${l}{4})*(?:${l}{2,3}|${l}{3}=|${l}{2}==)?$`, "u"), (0, i.pattern)(e, c)
            }
        },
        17822: function(e, t, n) {
            "use strict";
            var i = n(97115).Buffer;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createDataView = t.concatBytes = t.valueToBytes = t.stringToBytes = t.numberToBytes = t.signedBigIntToBytes = t.bigIntToBytes = t.hexToBytes = t.bytesToString = t.bytesToNumber = t.bytesToSignedBigInt = t.bytesToBigInt = t.bytesToHex = t.assertIsBytes = t.isBytes = void 0;
            let o = n(48001),
                a = n(52938),
                l = function() {
                    let e = [];
                    return () => {
                        if (0 === e.length)
                            for (let t = 0; t < 256; t++) e.push(t.toString(16).padStart(2, "0"));
                        return e
                    }
                }();

            function isBytes(e) {
                return e instanceof Uint8Array
            }

            function assertIsBytes(e) {
                (0, o.assert)(isBytes(e), "Value must be a Uint8Array.")
            }

            function bytesToHex(e) {
                if (assertIsBytes(e), 0 === e.length) return "0x";
                let t = l(),
                    n = Array(e.length);
                for (let i = 0; i < e.length; i++) n[i] = t[e[i]];
                return (0, a.add0x)(n.join(""))
            }

            function bytesToBigInt(e) {
                assertIsBytes(e);
                let t = bytesToHex(e);
                return BigInt(t)
            }

            function hexToBytes(e) {
                var t;
                if ((null === (t = null == e ? void 0 : e.toLowerCase) || void 0 === t ? void 0 : t.call(e)) === "0x") return new Uint8Array;
                (0, a.assertIsHexString)(e);
                let n = (0, a.remove0x)(e).toLowerCase(),
                    i = n.length % 2 == 0 ? n : `0${n}`,
                    o = new Uint8Array(i.length / 2);
                for (let e = 0; e < o.length; e++) {
                    let t = i.charCodeAt(2 * e),
                        n = i.charCodeAt(2 * e + 1),
                        a = t - (t < 58 ? 48 : 87),
                        l = n - (n < 58 ? 48 : 87);
                    o[e] = 16 * a + l
                }
                return o
            }

            function bigIntToBytes(e) {
                (0, o.assert)("bigint" == typeof e, "Value must be a bigint."), (0, o.assert)(e >= BigInt(0), "Value must be a non-negative bigint.");
                let t = e.toString(16);
                return hexToBytes(t)
            }

            function numberToBytes(e) {
                (0, o.assert)("number" == typeof e, "Value must be a number."), (0, o.assert)(e >= 0, "Value must be a non-negative number."), (0, o.assert)(Number.isSafeInteger(e), "Value is not a safe integer. Use `bigIntToBytes` instead.");
                let t = e.toString(16);
                return hexToBytes(t)
            }

            function stringToBytes(e) {
                return (0, o.assert)("string" == typeof e, "Value must be a string."), new TextEncoder().encode(e)
            }

            function valueToBytes(e) {
                if ("bigint" == typeof e) return bigIntToBytes(e);
                if ("number" == typeof e) return numberToBytes(e);
                if ("string" == typeof e) return e.startsWith("0x") ? hexToBytes(e) : stringToBytes(e);
                if (isBytes(e)) return e;
                throw TypeError(`Unsupported value type: "${typeof e}".`)
            }
            t.isBytes = isBytes, t.assertIsBytes = assertIsBytes, t.bytesToHex = bytesToHex, t.bytesToBigInt = bytesToBigInt, t.bytesToSignedBigInt = function(e) {
                assertIsBytes(e);
                let t = BigInt(0);
                for (let n of e) t = (t << BigInt(8)) + BigInt(n);
                return BigInt.asIntN(8 * e.length, t)
            }, t.bytesToNumber = function(e) {
                assertIsBytes(e);
                let t = bytesToBigInt(e);
                return (0, o.assert)(t <= BigInt(Number.MAX_SAFE_INTEGER), "Number is not a safe integer. Use `bytesToBigInt` instead."), Number(t)
            }, t.bytesToString = function(e) {
                return assertIsBytes(e), new TextDecoder().decode(e)
            }, t.hexToBytes = hexToBytes, t.bigIntToBytes = bigIntToBytes, t.signedBigIntToBytes = function(e, t) {
                (0, o.assert)("bigint" == typeof e, "Value must be a bigint."), (0, o.assert)("number" == typeof t, "Byte length must be a number."), (0, o.assert)(t > 0, "Byte length must be greater than 0."), (0, o.assert)(function(e, t) {
                    (0, o.assert)(t > 0);
                    let n = e >> BigInt(31);
                    return !((~e & n) + (e & ~n) >> BigInt(8 * t + -1))
                }(e, t), "Byte length is too small to represent the given value.");
                let n = e,
                    i = new Uint8Array(t);
                for (let e = 0; e < i.length; e++) i[e] = Number(BigInt.asUintN(8, n)), n >>= BigInt(8);
                return i.reverse()
            }, t.numberToBytes = numberToBytes, t.stringToBytes = stringToBytes, t.valueToBytes = valueToBytes, t.concatBytes = function(e) {
                let t = Array(e.length),
                    n = 0;
                for (let i = 0; i < e.length; i++) {
                    let o = valueToBytes(e[i]);
                    t[i] = o, n += o.length
                }
                let i = new Uint8Array(n);
                for (let e = 0, n = 0; e < t.length; e++) i.set(t[e], n), n += t[e].length;
                return i
            }, t.createDataView = function(e) {
                if (void 0 !== i && e instanceof i) {
                    let t = e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength);
                    return new DataView(t)
                }
                return new DataView(e.buffer, e.byteOffset, e.byteLength)
            }
        },
        59275: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ChecksumStruct = void 0;
            let i = n(78341),
                o = n(43994);
            t.ChecksumStruct = (0, i.size)((0, o.base64)((0, i.string)(), {
                paddingRequired: !0
            }), 44, 44)
        },
        67921: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createHex = t.createBytes = t.createBigInt = t.createNumber = void 0;
            let i = n(78341),
                o = n(48001),
                a = n(17822),
                l = n(52938),
                c = (0, i.union)([(0, i.number)(), (0, i.bigint)(), (0, i.string)(), l.StrictHexStruct]),
                u = (0, i.coerce)((0, i.number)(), c, Number),
                R = (0, i.coerce)((0, i.bigint)(), c, BigInt);
            (0, i.union)([l.StrictHexStruct, (0, i.instance)(Uint8Array)]);
            let N = (0, i.coerce)((0, i.instance)(Uint8Array), (0, i.union)([l.StrictHexStruct]), a.hexToBytes),
                H = (0, i.coerce)(l.StrictHexStruct, (0, i.instance)(Uint8Array), a.bytesToHex);
            t.createNumber = function(e) {
                try {
                    let t = (0, i.create)(e, u);
                    return (0, o.assert)(Number.isFinite(t), `Expected a number-like value, got "${e}".`), t
                } catch (t) {
                    if (t instanceof i.StructError) throw Error(`Expected a number-like value, got "${e}".`);
                    throw t
                }
            }, t.createBigInt = function(e) {
                try {
                    return (0, i.create)(e, R)
                } catch (e) {
                    if (e instanceof i.StructError) throw Error(`Expected a number-like value, got "${String(e.value)}".`);
                    throw e
                }
            }, t.createBytes = function(e) {
                if ("string" == typeof e && "0x" === e.toLowerCase()) return new Uint8Array;
                try {
                    return (0, i.create)(e, N)
                } catch (e) {
                    if (e instanceof i.StructError) throw Error(`Expected a bytes-like value, got "${String(e.value)}".`);
                    throw e
                }
            }, t.createHex = function(e) {
                if (e instanceof Uint8Array && 0 === e.length || "string" == typeof e && "0x" === e.toLowerCase()) return "0x";
                try {
                    return (0, i.create)(e, H)
                } catch (e) {
                    if (e instanceof i.StructError) throw Error(`Expected a bytes-like value, got "${String(e.value)}".`);
                    throw e
                }
            }
        },
        44844: function(e, t) {
            "use strict";
            var n, i, o = this && this.__classPrivateFieldSet || function(e, t, n, i, o) {
                    if ("m" === i) throw TypeError("Private method is not writable");
                    if ("a" === i && !o) throw TypeError("Private accessor was defined without a setter");
                    if ("function" == typeof t ? e !== t || !o : !t.has(e)) throw TypeError("Cannot write private member to an object whose class did not declare it");
                    return "a" === i ? o.call(e, n) : o ? o.value = n : t.set(e, n), n
                },
                a = this && this.__classPrivateFieldGet || function(e, t, n, i) {
                    if ("a" === n && !i) throw TypeError("Private accessor was defined without a getter");
                    if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw TypeError("Cannot read private member from an object whose class did not declare it");
                    return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.FrozenSet = t.FrozenMap = void 0;
            let FrozenMap = class FrozenMap {
                constructor(e) {
                    n.set(this, void 0), o(this, n, new Map(e), "f"), Object.freeze(this)
                }
                get size() {
                    return a(this, n, "f").size
                }[(n = new WeakMap, Symbol.iterator)]() {
                    return a(this, n, "f")[Symbol.iterator]()
                }
                entries() {
                    return a(this, n, "f").entries()
                }
                forEach(e, t) {
                    return a(this, n, "f").forEach((n, i, o) => e.call(t, n, i, this))
                }
                get(e) {
                    return a(this, n, "f").get(e)
                }
                has(e) {
                    return a(this, n, "f").has(e)
                }
                keys() {
                    return a(this, n, "f").keys()
                }
                values() {
                    return a(this, n, "f").values()
                }
                toString() {
                    return `FrozenMap(${this.size}) {${this.size>0?` ${[...this.entries()].map(([e,t])=>`${String(e)} => ${String(t)}`).join(", ")} `:""}}`
                }
            };
            t.FrozenMap = FrozenMap;
            let FrozenSet = class FrozenSet {
                constructor(e) {
                    i.set(this, void 0), o(this, i, new Set(e), "f"), Object.freeze(this)
                }
                get size() {
                    return a(this, i, "f").size
                }[(i = new WeakMap, Symbol.iterator)]() {
                    return a(this, i, "f")[Symbol.iterator]()
                }
                entries() {
                    return a(this, i, "f").entries()
                }
                forEach(e, t) {
                    return a(this, i, "f").forEach((n, i, o) => e.call(t, n, i, this))
                }
                has(e) {
                    return a(this, i, "f").has(e)
                }
                keys() {
                    return a(this, i, "f").keys()
                }
                values() {
                    return a(this, i, "f").values()
                }
                toString() {
                    return `FrozenSet(${this.size}) {${this.size>0?` ${[...this.values()].map(e=>String(e)).join(", ")} `:""}}`
                }
            };
            t.FrozenSet = FrozenSet, Object.freeze(FrozenMap), Object.freeze(FrozenMap.prototype), Object.freeze(FrozenSet), Object.freeze(FrozenSet.prototype)
        },
        17662: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        52938: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.remove0x = t.add0x = t.assertIsStrictHexString = t.assertIsHexString = t.isStrictHexString = t.isHexString = t.StrictHexStruct = t.HexStruct = void 0;
            let i = n(78341),
                o = n(48001);

            function isHexString(e) {
                return (0, i.is)(e, t.HexStruct)
            }

            function isStrictHexString(e) {
                return (0, i.is)(e, t.StrictHexStruct)
            }
            t.HexStruct = (0, i.pattern)((0, i.string)(), /^(?:0x)?[0-9a-f]+$/iu), t.StrictHexStruct = (0, i.pattern)((0, i.string)(), /^0x[0-9a-f]+$/iu), t.isHexString = isHexString, t.isStrictHexString = isStrictHexString, t.assertIsHexString = function(e) {
                (0, o.assert)(isHexString(e), "Value must be a hexadecimal string.")
            }, t.assertIsStrictHexString = function(e) {
                (0, o.assert)(isStrictHexString(e), 'Value must be a hexadecimal string, starting with "0x".')
            }, t.add0x = function(e) {
                return e.startsWith("0x") ? e : e.startsWith("0X") ? `0x${e.substring(2)}` : `0x${e}`
            }, t.remove0x = function(e) {
                return e.startsWith("0x") || e.startsWith("0X") ? e.substring(2) : e
            }
        },
        42372: function(e, t, n) {
            "use strict";
            var i = this && this.__createBinding || (Object.create ? function(e, t, n, i) {
                    void 0 === i && (i = n);
                    var o = Object.getOwnPropertyDescriptor(t, n);
                    (!o || ("get" in o ? !t.__esModule : o.writable || o.configurable)) && (o = {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    }), Object.defineProperty(e, i, o)
                } : function(e, t, n, i) {
                    void 0 === i && (i = n), e[i] = t[n]
                }),
                o = this && this.__exportStar || function(e, t) {
                    for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || i(t, e, n)
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), o(n(48001), t), o(n(43994), t), o(n(17822), t), o(n(59275), t), o(n(67921), t), o(n(44844), t), o(n(17662), t), o(n(52938), t), o(n(85930), t), o(n(80242), t), o(n(87764), t), o(n(8812), t), o(n(88290), t), o(n(86472), t), o(n(41593), t), o(n(14760), t), o(n(62816), t)
        },
        85930: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getJsonRpcIdValidator = t.assertIsJsonRpcError = t.isJsonRpcError = t.assertIsJsonRpcFailure = t.isJsonRpcFailure = t.assertIsJsonRpcSuccess = t.isJsonRpcSuccess = t.assertIsJsonRpcResponse = t.isJsonRpcResponse = t.assertIsPendingJsonRpcResponse = t.isPendingJsonRpcResponse = t.JsonRpcResponseStruct = t.JsonRpcFailureStruct = t.JsonRpcSuccessStruct = t.PendingJsonRpcResponseStruct = t.assertIsJsonRpcRequest = t.isJsonRpcRequest = t.assertIsJsonRpcNotification = t.isJsonRpcNotification = t.JsonRpcNotificationStruct = t.JsonRpcRequestStruct = t.JsonRpcParamsStruct = t.JsonRpcErrorStruct = t.JsonRpcIdStruct = t.JsonRpcVersionStruct = t.jsonrpc2 = t.getJsonSize = t.isValidJson = t.JsonStruct = t.UnsafeJsonStruct = void 0;
            let i = n(78341),
                o = n(48001);
            t.UnsafeJsonStruct = (0, i.union)([(0, i.literal)(null), (0, i.boolean)(), (0, i.define)("finite number", e => (0, i.is)(e, (0, i.number)()) && Number.isFinite(e)), (0, i.string)(), (0, i.array)((0, i.lazy)(() => t.UnsafeJsonStruct)), (0, i.record)((0, i.string)(), (0, i.lazy)(() => t.UnsafeJsonStruct))]), t.JsonStruct = (0, i.define)("Json", (e, n) => {
                function checkStruct(e, t) {
                    let i = t.validator(e, n),
                        o = [...i];
                    return !(o.length > 0) || o
                }
                try {
                    let n = checkStruct(e, t.UnsafeJsonStruct);
                    if (!0 !== n) return n;
                    return checkStruct(JSON.parse(JSON.stringify(e)), t.UnsafeJsonStruct)
                } catch (e) {
                    if (e instanceof RangeError) return "Circular reference detected";
                    return !1
                }
            }), t.isValidJson = function(e) {
                return (0, i.is)(e, t.JsonStruct)
            }, t.getJsonSize = function(e) {
                (0, o.assertStruct)(e, t.JsonStruct, "Invalid JSON value");
                let n = JSON.stringify(e);
                return new TextEncoder().encode(n).byteLength
            }, t.jsonrpc2 = "2.0", t.JsonRpcVersionStruct = (0, i.literal)(t.jsonrpc2), t.JsonRpcIdStruct = (0, i.nullable)((0, i.union)([(0, i.number)(), (0, i.string)()])), t.JsonRpcErrorStruct = (0, i.object)({
                code: (0, i.integer)(),
                message: (0, i.string)(),
                data: (0, i.optional)(t.JsonStruct),
                stack: (0, i.optional)((0, i.string)())
            }), t.JsonRpcParamsStruct = (0, i.optional)((0, i.union)([(0, i.record)((0, i.string)(), t.JsonStruct), (0, i.array)(t.JsonStruct)])), t.JsonRpcRequestStruct = (0, i.object)({
                id: t.JsonRpcIdStruct,
                jsonrpc: t.JsonRpcVersionStruct,
                method: (0, i.string)(),
                params: t.JsonRpcParamsStruct
            }), t.JsonRpcNotificationStruct = (0, i.omit)(t.JsonRpcRequestStruct, ["id"]), t.isJsonRpcNotification = function(e) {
                return (0, i.is)(e, t.JsonRpcNotificationStruct)
            }, t.assertIsJsonRpcNotification = function(e, n) {
                (0, o.assertStruct)(e, t.JsonRpcNotificationStruct, "Invalid JSON-RPC notification", n)
            }, t.isJsonRpcRequest = function(e) {
                return (0, i.is)(e, t.JsonRpcRequestStruct)
            }, t.assertIsJsonRpcRequest = function(e, n) {
                (0, o.assertStruct)(e, t.JsonRpcRequestStruct, "Invalid JSON-RPC request", n)
            }, t.PendingJsonRpcResponseStruct = (0, i.object)({
                id: t.JsonRpcIdStruct,
                jsonrpc: t.JsonRpcVersionStruct,
                result: (0, i.optional)((0, i.unknown)()),
                error: (0, i.optional)(t.JsonRpcErrorStruct)
            }), t.JsonRpcSuccessStruct = (0, i.object)({
                id: t.JsonRpcIdStruct,
                jsonrpc: t.JsonRpcVersionStruct,
                result: t.JsonStruct
            }), t.JsonRpcFailureStruct = (0, i.object)({
                id: t.JsonRpcIdStruct,
                jsonrpc: t.JsonRpcVersionStruct,
                error: t.JsonRpcErrorStruct
            }), t.JsonRpcResponseStruct = (0, i.union)([t.JsonRpcSuccessStruct, t.JsonRpcFailureStruct]), t.isPendingJsonRpcResponse = function(e) {
                return (0, i.is)(e, t.PendingJsonRpcResponseStruct)
            }, t.assertIsPendingJsonRpcResponse = function(e, n) {
                (0, o.assertStruct)(e, t.PendingJsonRpcResponseStruct, "Invalid pending JSON-RPC response", n)
            }, t.isJsonRpcResponse = function(e) {
                return (0, i.is)(e, t.JsonRpcResponseStruct)
            }, t.assertIsJsonRpcResponse = function(e, n) {
                (0, o.assertStruct)(e, t.JsonRpcResponseStruct, "Invalid JSON-RPC response", n)
            }, t.isJsonRpcSuccess = function(e) {
                return (0, i.is)(e, t.JsonRpcSuccessStruct)
            }, t.assertIsJsonRpcSuccess = function(e, n) {
                (0, o.assertStruct)(e, t.JsonRpcSuccessStruct, "Invalid JSON-RPC success response", n)
            }, t.isJsonRpcFailure = function(e) {
                return (0, i.is)(e, t.JsonRpcFailureStruct)
            }, t.assertIsJsonRpcFailure = function(e, n) {
                (0, o.assertStruct)(e, t.JsonRpcFailureStruct, "Invalid JSON-RPC failure response", n)
            }, t.isJsonRpcError = function(e) {
                return (0, i.is)(e, t.JsonRpcErrorStruct)
            }, t.assertIsJsonRpcError = function(e, n) {
                (0, o.assertStruct)(e, t.JsonRpcErrorStruct, "Invalid JSON-RPC error", n)
            }, t.getJsonRpcIdValidator = function(e) {
                let {
                    permitEmptyString: t,
                    permitFractions: n,
                    permitNull: i
                } = Object.assign({
                    permitEmptyString: !0,
                    permitFractions: !1,
                    permitNull: !0
                }, e);
                return e => !!("number" == typeof e && (n || Number.isInteger(e)) || "string" == typeof e && (t || e.length > 0) || i && null === e)
            }
        },
        80242: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        87764: function(e, t, n) {
            "use strict";
            var i = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createModuleLogger = t.createProjectLogger = void 0;
            let o = i(n(51625)),
                a = (0, o.default)("metamask");
            t.createProjectLogger = function(e) {
                return a.extend(e)
            }, t.createModuleLogger = function(e, t) {
                return e.extend(t)
            }
        },
        8812: function(e, t) {
            "use strict";
            var n;

            function isASCII(e) {
                return 127 >= e.charCodeAt(0)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.calculateNumberSize = t.calculateStringSize = t.isASCII = t.isPlainObject = t.ESCAPE_CHARACTERS_REGEXP = t.JsonSize = t.hasProperty = t.isObject = t.isNullOrUndefined = t.isNonEmptyArray = void 0, t.isNonEmptyArray = function(e) {
                return Array.isArray(e) && e.length > 0
            }, t.isNullOrUndefined = function(e) {
                return null == e
            }, t.isObject = function(e) {
                return !!e && "object" == typeof e && !Array.isArray(e)
            }, t.hasProperty = (e, t) => Object.hasOwnProperty.call(e, t), (n = t.JsonSize || (t.JsonSize = {}))[n.Null = 4] = "Null", n[n.Comma = 1] = "Comma", n[n.Wrapper = 1] = "Wrapper", n[n.True = 4] = "True", n[n.False = 5] = "False", n[n.Quote = 1] = "Quote", n[n.Colon = 1] = "Colon", n[n.Date = 24] = "Date", t.ESCAPE_CHARACTERS_REGEXP = /"|\\|\n|\r|\t/gu, t.isPlainObject = function(e) {
                if ("object" != typeof e || null === e) return !1;
                try {
                    let t = e;
                    for (; null !== Object.getPrototypeOf(t);) t = Object.getPrototypeOf(t);
                    return Object.getPrototypeOf(e) === t
                } catch (e) {
                    return !1
                }
            }, t.isASCII = isASCII, t.calculateStringSize = function(e) {
                var n;
                let i = e.split("").reduce((e, t) => isASCII(t) ? e + 1 : e + 2, 0);
                return i + (null !== (n = e.match(t.ESCAPE_CHARACTERS_REGEXP)) && void 0 !== n ? n : []).length
            }, t.calculateNumberSize = function(e) {
                return e.toString().length
            }
        },
        88290: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.hexToBigInt = t.hexToNumber = t.bigIntToHex = t.numberToHex = void 0;
            let i = n(48001),
                o = n(52938);
            t.numberToHex = e => ((0, i.assert)("number" == typeof e, "Value must be a number."), (0, i.assert)(e >= 0, "Value must be a non-negative number."), (0, i.assert)(Number.isSafeInteger(e), "Value is not a safe integer. Use `bigIntToHex` instead."), (0, o.add0x)(e.toString(16))), t.bigIntToHex = e => ((0, i.assert)("bigint" == typeof e, "Value must be a bigint."), (0, i.assert)(e >= 0, "Value must be a non-negative bigint."), (0, o.add0x)(e.toString(16))), t.hexToNumber = e => {
                (0, o.assertIsHexString)(e);
                let t = parseInt(e, 16);
                return (0, i.assert)(Number.isSafeInteger(t), "Value is not a safe integer. Use `hexToBigInt` instead."), t
            }, t.hexToBigInt = e => ((0, o.assertIsHexString)(e), BigInt((0, o.add0x)(e)))
        },
        86472: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        41593: function(e, t) {
            "use strict";
            var n;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.timeSince = t.inMilliseconds = t.Duration = void 0, (n = t.Duration || (t.Duration = {}))[n.Millisecond = 1] = "Millisecond", n[n.Second = 1e3] = "Second", n[n.Minute = 6e4] = "Minute", n[n.Hour = 36e5] = "Hour", n[n.Day = 864e5] = "Day", n[n.Week = 6048e5] = "Week", n[n.Year = 31536e6] = "Year";
            let isNonNegativeInteger = e => Number.isInteger(e) && e >= 0,
                assertIsNonNegativeInteger = (e, t) => {
                    if (!isNonNegativeInteger(e)) throw Error(`"${t}" must be a non-negative integer. Received: "${e}".`)
                };
            t.inMilliseconds = function(e, t) {
                return assertIsNonNegativeInteger(e, "count"), e * t
            }, t.timeSince = function(e) {
                return assertIsNonNegativeInteger(e, "timestamp"), Date.now() - e
            }
        },
        14760: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        62816: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.satisfiesVersionRange = t.gtRange = t.gtVersion = t.assertIsSemVerRange = t.assertIsSemVerVersion = t.isValidSemVerRange = t.isValidSemVerVersion = t.VersionRangeStruct = t.VersionStruct = void 0;
            let i = n(53786),
                o = n(78341),
                a = n(48001);
            t.VersionStruct = (0, o.refine)((0, o.string)(), "Version", e => null !== (0, i.valid)(e) || `Expected SemVer version, got "${e}"`), t.VersionRangeStruct = (0, o.refine)((0, o.string)(), "Version range", e => null !== (0, i.validRange)(e) || `Expected SemVer range, got "${e}"`), t.isValidSemVerVersion = function(e) {
                return (0, o.is)(e, t.VersionStruct)
            }, t.isValidSemVerRange = function(e) {
                return (0, o.is)(e, t.VersionRangeStruct)
            }, t.assertIsSemVerVersion = function(e) {
                (0, a.assertStruct)(e, t.VersionStruct)
            }, t.assertIsSemVerRange = function(e) {
                (0, a.assertStruct)(e, t.VersionRangeStruct)
            }, t.gtVersion = function(e, t) {
                return (0, i.gt)(e, t)
            }, t.gtRange = function(e, t) {
                return (0, i.gtr)(e, t)
            }, t.satisfiesVersionRange = function(e, t) {
                return (0, i.satisfies)(e, t, {
                    includePrerelease: !0
                })
            }
        },
        30897: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = n(43112),
                o = n(87891),
                a = function() {
                    function Mutex() {
                        this._semaphore = new o.default(1)
                    }
                    return Mutex.prototype.acquire = function() {
                        return i.__awaiter(this, void 0, void 0, function() {
                            return i.__generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, this._semaphore.acquire()];
                                    case 1:
                                        return [2, e.sent()[1]]
                                }
                            })
                        })
                    }, Mutex.prototype.runExclusive = function(e) {
                        return this._semaphore.runExclusive(function() {
                            return e()
                        })
                    }, Mutex.prototype.isLocked = function() {
                        return this._semaphore.isLocked()
                    }, Mutex.prototype.release = function() {
                        this._semaphore.release()
                    }, Mutex
                }();
            t.default = a
        },
        87891: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = n(43112),
                o = function() {
                    function Semaphore(e) {
                        if (this._maxConcurrency = e, this._queue = [], e <= 0) throw Error("semaphore must be initialized to a positive value");
                        this._value = e
                    }
                    return Semaphore.prototype.acquire = function() {
                        var e = this,
                            t = this.isLocked(),
                            n = new Promise(function(t) {
                                return e._queue.push(t)
                            });
                        return t || this._dispatch(), n
                    }, Semaphore.prototype.runExclusive = function(e) {
                        return i.__awaiter(this, void 0, void 0, function() {
                            var t, n, o;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, this.acquire()];
                                    case 1:
                                        n = (t = i.sent())[0], o = t[1], i.label = 2;
                                    case 2:
                                        return i.trys.push([2, , 4, 5]), [4, e(n)];
                                    case 3:
                                        return [2, i.sent()];
                                    case 4:
                                        return o(), [7];
                                    case 5:
                                        return [2]
                                }
                            })
                        })
                    }, Semaphore.prototype.isLocked = function() {
                        return this._value <= 0
                    }, Semaphore.prototype.release = function() {
                        if (this._maxConcurrency > 1) throw Error("this method is unavailabel on semaphores with concurrency > 1; use the scoped release returned by acquire instead");
                        if (this._currentReleaser) {
                            var e = this._currentReleaser;
                            this._currentReleaser = void 0, e()
                        }
                    }, Semaphore.prototype._dispatch = function() {
                        var e = this,
                            t = this._queue.shift();
                        if (t) {
                            var n = !1;
                            this._currentReleaser = function() {
                                n || (n = !0, e._value++, e._dispatch())
                            }, t([this._value--, this._currentReleaser])
                        }
                    }, Semaphore
                }();
            t.default = o
        },
        88926: function(e, t, n) {
            "use strict";
            t.WU = void 0;
            var i = n(30897);
            Object.defineProperty(t, "WU", {
                enumerable: !0,
                get: function() {
                    return i.default
                }
            }), n(87891), n(51407)
        },
        51407: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.withTimeout = void 0;
            var i = n(43112);
            t.withTimeout = function(e, t, n) {
                var o = this;
                return void 0 === n && (n = Error("timeout")), {
                    acquire: function() {
                        return new Promise(function(a, l) {
                            return i.__awaiter(o, void 0, void 0, function() {
                                var o, c;
                                return i.__generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            return o = !1, setTimeout(function() {
                                                o = !0, l(n)
                                            }, t), [4, e.acquire()];
                                        case 1:
                                            return c = i.sent(), o ? (Array.isArray(c) ? c[1] : c)() : a(c), [2]
                                    }
                                })
                            })
                        })
                    },
                    runExclusive: function(e) {
                        return i.__awaiter(this, void 0, void 0, function() {
                            var t, n;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        t = function() {}, i.label = 1;
                                    case 1:
                                        return i.trys.push([1, , 7, 8]), [4, this.acquire()];
                                    case 2:
                                        if (!Array.isArray(n = i.sent())) return [3, 4];
                                        return t = n[1], [4, e(n[0])];
                                    case 3:
                                    case 5:
                                        return [2, i.sent()];
                                    case 4:
                                        return t = n, [4, e()];
                                    case 6:
                                        return [3, 8];
                                    case 7:
                                        return t(), [7];
                                    case 8:
                                        return [2]
                                }
                            })
                        })
                    },
                    release: function() {
                        e.release()
                    },
                    isLocked: function() {
                        return e.isLocked()
                    }
                }
            }
        },
        51625: function(e, t, n) {
            let i;
            var o = n(9389);
            t.formatArgs = function(t) {
                if (t[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + t[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), !this.useColors) return;
                let n = "color: " + this.color;
                t.splice(1, 0, n, "color: inherit");
                let i = 0,
                    o = 0;
                t[0].replace(/%[a-zA-Z%]/g, e => {
                    "%%" !== e && (i++, "%c" === e && (o = i))
                }), t.splice(o, 0, n)
            }, t.save = function(e) {
                try {
                    e ? t.storage.setItem("debug", e) : t.storage.removeItem("debug")
                } catch (e) {}
            }, t.load = function() {
                let e;
                try {
                    e = t.storage.getItem("debug")
                } catch (e) {}
                return !e && void 0 !== o && "env" in o && (e = o.env.DEBUG), e
            }, t.useColors = function() {
                return "undefined" != typeof window && !!window.process && ("renderer" === window.process.type || !!window.process.__nwjs) || !("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
            }, t.storage = function() {
                try {
                    return localStorage
                } catch (e) {}
            }(), t.destroy = (i = !1, () => {
                i || (i = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))
            }), t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], t.log = console.debug || console.log || (() => {}), e.exports = n(13994)(t);
            let {
                formatters: a
            } = e.exports;
            a.j = function(e) {
                try {
                    return JSON.stringify(e)
                } catch (e) {
                    return "[UnexpectedJSONParseError]: " + e.message
                }
            }
        },
        13994: function(e, t, n) {
            e.exports = function(e) {
                function createDebug(e) {
                    let t, n, i;
                    let o = null;

                    function debug(...e) {
                        if (!debug.enabled) return;
                        let n = Number(new Date),
                            i = n - (t || n);
                        debug.diff = i, debug.prev = t, debug.curr = n, t = n, e[0] = createDebug.coerce(e[0]), "string" != typeof e[0] && e.unshift("%O");
                        let o = 0;
                        e[0] = e[0].replace(/%([a-zA-Z%])/g, (t, n) => {
                            if ("%%" === t) return "%";
                            o++;
                            let i = createDebug.formatters[n];
                            if ("function" == typeof i) {
                                let n = e[o];
                                t = i.call(debug, n), e.splice(o, 1), o--
                            }
                            return t
                        }), createDebug.formatArgs.call(debug, e);
                        let a = debug.log || createDebug.log;
                        a.apply(debug, e)
                    }
                    return debug.namespace = e, debug.useColors = createDebug.useColors(), debug.color = createDebug.selectColor(e), debug.extend = extend, debug.destroy = createDebug.destroy, Object.defineProperty(debug, "enabled", {
                        enumerable: !0,
                        configurable: !1,
                        get: () => null !== o ? o : (n !== createDebug.namespaces && (n = createDebug.namespaces, i = createDebug.enabled(e)), i),
                        set: e => {
                            o = e
                        }
                    }), "function" == typeof createDebug.init && createDebug.init(debug), debug
                }

                function extend(e, t) {
                    let n = createDebug(this.namespace + (void 0 === t ? ":" : t) + e);
                    return n.log = this.log, n
                }

                function toNamespace(e) {
                    return e.toString().substring(2, e.toString().length - 2).replace(/\.\*\?$/, "*")
                }
                return createDebug.debug = createDebug, createDebug.default = createDebug, createDebug.coerce = function(e) {
                    return e instanceof Error ? e.stack || e.message : e
                }, createDebug.disable = function() {
                    let e = [...createDebug.names.map(toNamespace), ...createDebug.skips.map(toNamespace).map(e => "-" + e)].join(",");
                    return createDebug.enable(""), e
                }, createDebug.enable = function(e) {
                    let t;
                    createDebug.save(e), createDebug.namespaces = e, createDebug.names = [], createDebug.skips = [];
                    let n = ("string" == typeof e ? e : "").split(/[\s,]+/),
                        i = n.length;
                    for (t = 0; t < i; t++) n[t] && ("-" === (e = n[t].replace(/\*/g, ".*?"))[0] ? createDebug.skips.push(RegExp("^" + e.slice(1) + "$")) : createDebug.names.push(RegExp("^" + e + "$")))
                }, createDebug.enabled = function(e) {
                    let t, n;
                    if ("*" === e[e.length - 1]) return !0;
                    for (t = 0, n = createDebug.skips.length; t < n; t++)
                        if (createDebug.skips[t].test(e)) return !1;
                    for (t = 0, n = createDebug.names.length; t < n; t++)
                        if (createDebug.names[t].test(e)) return !0;
                    return !1
                }, createDebug.humanize = n(1747), createDebug.destroy = function() {
                    console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")
                }, Object.keys(e).forEach(t => {
                    createDebug[t] = e[t]
                }), createDebug.names = [], createDebug.skips = [], createDebug.formatters = {}, createDebug.selectColor = function(e) {
                    let t = 0;
                    for (let n = 0; n < e.length; n++) t = (t << 5) - t + e.charCodeAt(n) | 0;
                    return createDebug.colors[Math.abs(t) % createDebug.colors.length]
                }, createDebug.enable(createDebug.load()), createDebug
            }
        },
        77628: function(e, t, n) {
            "use strict";
            var i = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.BaseBlockTracker = void 0;
            let o = i(n(85670)),
                calculateSum = (e, t) => e + t,
                a = ["sync", "latest"];
            let BaseBlockTracker = class BaseBlockTracker extends o.default {
                constructor(e) {
                    super(), this._blockResetDuration = e.blockResetDuration || 2e4, this._usePastBlocks = e.usePastBlocks || !1, this._currentBlock = null, this._isRunning = !1, this._onNewListener = this._onNewListener.bind(this), this._onRemoveListener = this._onRemoveListener.bind(this), this._resetCurrentBlock = this._resetCurrentBlock.bind(this), this._setupInternalEvents()
                }
                async destroy() {
                    this._cancelBlockResetTimeout(), await this._maybeEnd(), super.removeAllListeners()
                }
                isRunning() {
                    return this._isRunning
                }
                getCurrentBlock() {
                    return this._currentBlock
                }
                async getLatestBlock() {
                    if (this._currentBlock) return this._currentBlock;
                    let e = await new Promise(e => this.once("latest", e));
                    return e
                }
                removeAllListeners(e) {
                    return e ? super.removeAllListeners(e) : super.removeAllListeners(), this._setupInternalEvents(), this._onRemoveListener(), this
                }
                _setupInternalEvents() {
                    this.removeListener("newListener", this._onNewListener), this.removeListener("removeListener", this._onRemoveListener), this.on("newListener", this._onNewListener), this.on("removeListener", this._onRemoveListener)
                }
                _onNewListener(e) {
                    a.includes(e) && this._maybeStart()
                }
                _onRemoveListener() {
                    this._getBlockTrackerEventCount() > 0 || this._maybeEnd()
                }
                async _maybeStart() {
                    this._isRunning || (this._isRunning = !0, this._cancelBlockResetTimeout(), await this._start(), this.emit("_started"))
                }
                async _maybeEnd() {
                    this._isRunning && (this._isRunning = !1, this._setupBlockResetTimeout(), await this._end(), this.emit("_ended"))
                }
                _getBlockTrackerEventCount() {
                    return a.map(e => this.listenerCount(e)).reduce(calculateSum)
                }
                _shouldUseNewBlock(e) {
                    let t = this._currentBlock;
                    if (!t) return !0;
                    let n = hexToInt(e),
                        i = hexToInt(t);
                    return this._usePastBlocks && n < i || n > i
                }
                _newPotentialLatest(e) {
                    this._shouldUseNewBlock(e) && this._setCurrentBlock(e)
                }
                _setCurrentBlock(e) {
                    let t = this._currentBlock;
                    this._currentBlock = e, this.emit("latest", e), this.emit("sync", {
                        oldBlock: t,
                        newBlock: e
                    })
                }
                _setupBlockResetTimeout() {
                    this._cancelBlockResetTimeout(), this._blockResetTimeout = setTimeout(this._resetCurrentBlock, this._blockResetDuration), this._blockResetTimeout.unref && this._blockResetTimeout.unref()
                }
                _cancelBlockResetTimeout() {
                    this._blockResetTimeout && clearTimeout(this._blockResetTimeout)
                }
                _resetCurrentBlock() {
                    this._currentBlock = null
                }
            };

            function hexToInt(e) {
                return Number.parseInt(e, 16)
            }
            t.BaseBlockTracker = BaseBlockTracker
        },
        66638: function(e, t, n) {
            "use strict";
            var i = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.PollingBlockTracker = void 0;
            let o = i(n(59927)),
                a = i(n(30800)),
                l = n(77628),
                c = n(74964),
                u = (0, c.createModuleLogger)(c.projectLogger, "polling-block-tracker"),
                R = (0, o.default)();
            let PollingBlockTracker = class PollingBlockTracker extends l.BaseBlockTracker {
                constructor(e = {}) {
                    var t;
                    if (!e.provider) throw Error("PollingBlockTracker - no provider specified.");
                    super(Object.assign(Object.assign({}, e), {
                        blockResetDuration: null !== (t = e.blockResetDuration) && void 0 !== t ? t : e.pollingInterval
                    })), this._provider = e.provider, this._pollingInterval = e.pollingInterval || 2e4, this._retryTimeout = e.retryTimeout || this._pollingInterval / 10, this._keepEventLoopActive = void 0 === e.keepEventLoopActive || e.keepEventLoopActive, this._setSkipCacheFlag = e.setSkipCacheFlag || !1
                }
                async checkForLatestBlock() {
                    return await this._updateLatestBlock(), await this.getLatestBlock()
                }
                async _start() {
                    this._synchronize()
                }
                async _end() {}
                async _synchronize() {
                    for (var e; this._isRunning;) try {
                        await this._updateLatestBlock();
                        let e = timeout(this._pollingInterval, !this._keepEventLoopActive);
                        this.emit("_waitingForNextIteration"), await e
                    } catch (i) {
                        let t = Error(`PollingBlockTracker - encountered an error while attempting to update latest block:
${null!==(e=i.stack)&&void 0!==e?e:i}`);
                        try {
                            this.emit("error", t)
                        } catch (e) {
                            console.error(t)
                        }
                        let n = timeout(this._retryTimeout, !this._keepEventLoopActive);
                        this.emit("_waitingForNextIteration"), await n
                    }
                }
                async _updateLatestBlock() {
                    let e = await this._fetchLatestBlock();
                    this._newPotentialLatest(e)
                }
                async _fetchLatestBlock() {
                    let e = {
                        jsonrpc: "2.0",
                        id: R(),
                        method: "eth_blockNumber",
                        params: []
                    };
                    this._setSkipCacheFlag && (e.skipCache = !0), u("Making request", e);
                    let t = await (0, a.default)(t => this._provider.sendAsync(e, t))();
                    if (u("Got response", t), t.error) throw Error(`PollingBlockTracker - encountered error fetching block:
${t.error.message}`);
                    return t.result
                }
            };

            function timeout(e, t) {
                return new Promise(n => {
                    let i = setTimeout(n, e);
                    i.unref && t && i.unref()
                })
            }
            t.PollingBlockTracker = PollingBlockTracker
        },
        51736: function(e, t, n) {
            "use strict";
            var i = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SubscribeBlockTracker = void 0;
            let o = i(n(59927)),
                a = n(77628),
                l = (0, o.default)();
            let SubscribeBlockTracker = class SubscribeBlockTracker extends a.BaseBlockTracker {
                constructor(e = {}) {
                    if (!e.provider) throw Error("SubscribeBlockTracker - no provider specified.");
                    super(e), this._provider = e.provider, this._subscriptionId = null
                }
                async checkForLatestBlock() {
                    return await this.getLatestBlock()
                }
                async _start() {
                    if (void 0 === this._subscriptionId || null === this._subscriptionId) try {
                        let e = await this._call("eth_blockNumber");
                        this._subscriptionId = await this._call("eth_subscribe", "newHeads"), this._provider.on("data", this._handleSubData.bind(this)), this._newPotentialLatest(e)
                    } catch (e) {
                        this.emit("error", e)
                    }
                }
                async _end() {
                    if (null !== this._subscriptionId && void 0 !== this._subscriptionId) try {
                        await this._call("eth_unsubscribe", this._subscriptionId), this._subscriptionId = null
                    } catch (e) {
                        this.emit("error", e)
                    }
                }
                _call(e, ...t) {
                    return new Promise((n, i) => {
                        this._provider.sendAsync({
                            id: l(),
                            method: e,
                            params: t,
                            jsonrpc: "2.0"
                        }, (e, t) => {
                            e ? i(e) : n(t.result)
                        })
                    })
                }
                _handleSubData(e, t) {
                    var n;
                    "eth_subscription" === t.method && (null === (n = t.params) || void 0 === n ? void 0 : n.subscription) === this._subscriptionId && this._newPotentialLatest(t.params.result.number)
                }
            };
            t.SubscribeBlockTracker = SubscribeBlockTracker
        },
        97538: function(e, t, n) {
            "use strict";
            var i = this && this.__createBinding || (Object.create ? function(e, t, n, i) {
                    void 0 === i && (i = n), Object.defineProperty(e, i, {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                } : function(e, t, n, i) {
                    void 0 === i && (i = n), e[i] = t[n]
                }),
                o = this && this.__exportStar || function(e, t) {
                    for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || i(t, e, n)
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), o(n(66638), t), o(n(51736), t)
        },
        74964: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createModuleLogger = t.projectLogger = void 0;
            let i = n(42372);
            Object.defineProperty(t, "createModuleLogger", {
                enumerable: !0,
                get: function() {
                    return i.createModuleLogger
                }
            }), t.projectLogger = (0, i.createProjectLogger)("eth-block-tracker")
        },
        57998: function(e, t, n) {
            let i = n(28105);
            e.exports = class extends i {
                constructor() {
                    super(), this.allResults = []
                }
                async update() {
                    throw Error("BaseFilterWithHistory - no update method specified")
                }
                addResults(e) {
                    this.allResults = this.allResults.concat(e), super.addResults(e)
                }
                addInitialResults(e) {
                    this.allResults = this.allResults.concat(e), super.addInitialResults(e)
                }
                getAllResults() {
                    return this.allResults
                }
            }
        },
        28105: function(e, t, n) {
            let i = n(85670).default;
            e.exports = class extends i {
                constructor() {
                    super(), this.updates = []
                }
                async initialize() {}
                async update() {
                    throw Error("BaseFilter - no update method specified")
                }
                addResults(e) {
                    this.updates = this.updates.concat(e), e.forEach(e => this.emit("update", e))
                }
                addInitialResults(e) {}
                getChangesAndClear() {
                    let e = this.updates;
                    return this.updates = [], e
                }
            }
        },
        2646: function(e, t, n) {
            let i = n(28105),
                o = n(62442),
                {
                    incrementHexInt: a
                } = n(33983);
            e.exports = class extends i {
                constructor({
                    provider: e,
                    params: t
                }) {
                    super(), this.type = "block", this.provider = e
                }
                async update({
                    oldBlock: e,
                    newBlock: t
                }) {
                    let n = a(e),
                        i = await o({
                            provider: this.provider,
                            fromBlock: n,
                            toBlock: t
                        }),
                        l = i.map(e => e.hash);
                    this.addResults(l)
                }
            }
        },
        62442: function(e) {
            async function getBlocksForRange({
                provider: e,
                fromBlock: t,
                toBlock: n
            }) {
                t || (t = n);
                let i = hexToInt(t),
                    o = hexToInt(n),
                    a = o - i + 1,
                    l = Array(a).fill().map((e, t) => i + t).map(intToHex);
                return (await Promise.all(l.map(t => query(e, "eth_getBlockByNumber", [t, !1])))).filter(e => null !== e)
            }

            function hexToInt(e) {
                return null == e ? e : Number.parseInt(e, 16)
            }

            function intToHex(e) {
                if (null == e) return e;
                let t = e.toString(16);
                return "0x" + t
            }
            async function query(e, t, n) {
                for (let i = 0; i < 3; i++) try {
                    return await
                    function(e, t) {
                        return new Promise((n, i) => {
                            e.sendAsync(t, (e, t) => {
                                e ? i(e) : t.error ? i(t.error) : t.result ? n(t.result) : i(Error("Result was empty"))
                            })
                        })
                    }(e, {
                        id: 1,
                        jsonrpc: "2.0",
                        method: t,
                        params: n
                    })
                } catch (e) {
                    console.error(`provider.sendAsync failed: ${e.stack||e.message||e}`)
                }
                return null
            }
            e.exports = getBlocksForRange
        },
        33983: function(e) {
            function sortBlockRefs(e) {
                return e.sort((e, t) => "latest" === e || "earliest" === t ? 1 : "latest" === t || "earliest" === e ? -1 : hexToInt(e) - hexToInt(t))
            }

            function hexToInt(e) {
                return null == e ? e : Number.parseInt(e, 16)
            }

            function intToHex(e) {
                if (null == e) return e;
                let t = e.toString(16),
                    n = t.length % 2;
                return n && (t = "0" + t), "0x" + t
            }

            function unsafeRandomNibble() {
                return Math.floor(16 * Math.random()).toString(16)
            }
            e.exports = {
                minBlockRef: function(...e) {
                    let t = sortBlockRefs(e);
                    return t[0]
                },
                maxBlockRef: function(...e) {
                    let t = sortBlockRefs(e);
                    return t[t.length - 1]
                },
                sortBlockRefs,
                bnToHex: function(e) {
                    return "0x" + e.toString(16)
                },
                blockRefIsNumber: function(e) {
                    return e && !["earliest", "latest", "pending"].includes(e)
                },
                hexToInt,
                incrementHexInt: function(e) {
                    if (null == e) return e;
                    let t = hexToInt(e);
                    return intToHex(t + 1)
                },
                intToHex,
                unsafeRandomBytes: function(e) {
                    let t = "0x";
                    for (let n = 0; n < e; n++) t += unsafeRandomNibble() + unsafeRandomNibble();
                    return t
                }
            }
        },
        56118: function(e, t, n) {
            let i = n(88926).WU,
                {
                    createAsyncMiddleware: o,
                    createScaffoldMiddleware: a
                } = n(63619),
                l = n(14895),
                c = n(2646),
                u = n(11019),
                {
                    intToHex: R,
                    hexToInt: N
                } = n(33983);

            function toFilterCreationMiddleware(e) {
                return toAsyncRpcMiddleware(async (...t) => {
                    let n = await e(...t),
                        i = R(n.id);
                    return i
                })
            }

            function toAsyncRpcMiddleware(e) {
                return o(async (t, n) => {
                    let i = await e.apply(null, t.params);
                    n.result = i
                })
            }

            function objValues(e, t) {
                let n = [];
                for (let t in e) n.push(e[t]);
                return n
            }
            e.exports = function({
                blockTracker: e,
                provider: t
            }) {
                let n = 0,
                    o = {},
                    H = new i,
                    U = function({
                        mutex: e
                    }) {
                        return t => async (n, i, o, a) => {
                            let l = await e.acquire();
                            l(), t(n, i, o, a)
                        }
                    }({
                        mutex: H
                    }),
                    W = a({
                        eth_newFilter: U(toFilterCreationMiddleware(newLogFilter)),
                        eth_newBlockFilter: U(toFilterCreationMiddleware(newBlockFilter)),
                        eth_newPendingTransactionFilter: U(toFilterCreationMiddleware(newPendingTransactionFilter)),
                        eth_uninstallFilter: U(toAsyncRpcMiddleware(uninstallFilterHandler)),
                        eth_getFilterChanges: U(toAsyncRpcMiddleware(getFilterChanges)),
                        eth_getFilterLogs: U(toAsyncRpcMiddleware(getFilterLogs))
                    }),
                    filterUpdater = async ({
                        oldBlock: e,
                        newBlock: t
                    }) => {
                        if (0 === o.length) return;
                        let n = await H.acquire();
                        try {
                            await Promise.all(objValues(o).map(async n => {
                                try {
                                    await n.update({
                                        oldBlock: e,
                                        newBlock: t
                                    })
                                } catch (e) {
                                    console.error(e)
                                }
                            }))
                        } catch (e) {
                            console.error(e)
                        }
                        n()
                    };
                return W.newLogFilter = newLogFilter, W.newBlockFilter = newBlockFilter, W.newPendingTransactionFilter = newPendingTransactionFilter, W.uninstallFilter = uninstallFilterHandler, W.getFilterChanges = getFilterChanges, W.getFilterLogs = getFilterLogs, W.destroy = () => {
                    uninstallAllFilters()
                }, W;
                async function newLogFilter(e) {
                    let n = new l({
                        provider: t,
                        params: e
                    });
                    return await installFilter(n), n
                }
                async function newBlockFilter() {
                    let e = new c({
                        provider: t
                    });
                    return await installFilter(e), e
                }
                async function newPendingTransactionFilter() {
                    let e = new u({
                        provider: t
                    });
                    return await installFilter(e), e
                }
                async function getFilterChanges(e) {
                    let t = N(e),
                        n = o[t];
                    if (!n) throw Error(`No filter for index "${t}"`);
                    let i = n.getChangesAndClear();
                    return i
                }
                async function getFilterLogs(e) {
                    let t = N(e),
                        n = o[t];
                    if (!n) throw Error(`No filter for index "${t}"`);
                    let i = [];
                    return "log" === n.type && (i = n.getAllResults()), i
                }
                async function uninstallFilterHandler(e) {
                    let t = N(e),
                        n = o[t],
                        i = !!n;
                    return i && await uninstallFilter(t), i
                }
                async function installFilter(t) {
                    let i = objValues(o).length,
                        a = await e.getLatestBlock();
                    await t.initialize({
                        currentBlock: a
                    }), o[++n] = t, t.id = n, t.idHex = R(n);
                    let l = objValues(o).length;
                    return updateBlockTrackerSubs({
                        prevFilterCount: i,
                        newFilterCount: l
                    }), n
                }
                async function uninstallFilter(e) {
                    let t = objValues(o).length;
                    delete o[e];
                    let n = objValues(o).length;
                    updateBlockTrackerSubs({
                        prevFilterCount: t,
                        newFilterCount: n
                    })
                }
                async function uninstallAllFilters() {
                    let e = objValues(o).length;
                    o = {}, updateBlockTrackerSubs({
                        prevFilterCount: e,
                        newFilterCount: 0
                    })
                }

                function updateBlockTrackerSubs({
                    prevFilterCount: t,
                    newFilterCount: n
                }) {
                    if (0 === t && n > 0) {
                        e.on("sync", filterUpdater);
                        return
                    }
                    if (t > 0 && 0 === n) {
                        e.removeListener("sync", filterUpdater);
                        return
                    }
                }
            }
        },
        14895: function(e, t, n) {
            let i = n(80673),
                o = n(16625),
                a = n(57998),
                {
                    bnToHex: l,
                    hexToInt: c,
                    incrementHexInt: u,
                    minBlockRef: R,
                    blockRefIsNumber: N
                } = n(33983);
            e.exports = class extends a {
                constructor({
                    provider: e,
                    params: t
                }) {
                    super(), this.type = "log", this.ethQuery = new i(e), this.params = Object.assign({
                        fromBlock: "latest",
                        toBlock: "latest",
                        address: void 0,
                        topics: []
                    }, t), this.params.address && (Array.isArray(this.params.address) || (this.params.address = [this.params.address]), this.params.address = this.params.address.map(e => e.toLowerCase()))
                }
                async initialize({
                    currentBlock: e
                }) {
                    let t = this.params.fromBlock;
                    ["latest", "pending"].includes(t) && (t = e), "earliest" === t && (t = "0x0"), this.params.fromBlock = t;
                    let n = R(this.params.toBlock, e),
                        i = Object.assign({}, this.params, {
                            toBlock: n
                        }),
                        o = await this._fetchLogs(i);
                    this.addInitialResults(o)
                }
                async update({
                    oldBlock: e,
                    newBlock: t
                }) {
                    let n;
                    n = e ? u(e) : t;
                    let i = Object.assign({}, this.params, {
                            fromBlock: n,
                            toBlock: t
                        }),
                        o = await this._fetchLogs(i),
                        a = o.filter(e => this.matchLog(e));
                    this.addResults(a)
                }
                async _fetchLogs(e) {
                    let t = await o(t => this.ethQuery.getLogs(e, t))();
                    return t
                }
                matchLog(e) {
                    if (c(this.params.fromBlock) >= c(e.blockNumber) || N(this.params.toBlock) && c(this.params.toBlock) <= c(e.blockNumber)) return !1;
                    let t = e.address && e.address.toLowerCase();
                    if (this.params.address && t && !this.params.address.includes(t)) return !1;
                    let n = this.params.topics.every((t, n) => {
                        let i = e.topics[n];
                        if (!i) return !1;
                        i = i.toLowerCase();
                        let o = Array.isArray(t) ? t : [t],
                            a = o.includes(null);
                        if (a) return !0;
                        o = o.map(e => e.toLowerCase());
                        let l = o.includes(i);
                        return l
                    });
                    return n
                }
            }
        },
        12277: function(e, t, n) {
            let i = n(85670).default,
                {
                    createAsyncMiddleware: o,
                    createScaffoldMiddleware: a
                } = n(63619),
                l = n(56118),
                {
                    unsafeRandomBytes: c,
                    incrementHexInt: u
                } = n(33983),
                R = n(62442);

            function normalizeBlock(e) {
                return null == e ? null : {
                    hash: e.hash,
                    parentHash: e.parentHash,
                    sha3Uncles: e.sha3Uncles,
                    miner: e.miner,
                    stateRoot: e.stateRoot,
                    transactionsRoot: e.transactionsRoot,
                    receiptsRoot: e.receiptsRoot,
                    logsBloom: e.logsBloom,
                    difficulty: e.difficulty,
                    number: e.number,
                    gasLimit: e.gasLimit,
                    gasUsed: e.gasUsed,
                    nonce: e.nonce,
                    mixHash: e.mixHash,
                    timestamp: e.timestamp,
                    extraData: e.extraData
                }
            }
            e.exports = function({
                blockTracker: e,
                provider: t
            }) {
                let n = {},
                    N = l({
                        blockTracker: e,
                        provider: t
                    }),
                    H = !1,
                    U = new i,
                    W = a({
                        eth_subscribe: o(subscribe),
                        eth_unsubscribe: o(unsubscribe)
                    });
                return W.destroy = function() {
                    for (let e in U.removeAllListeners(), n) n[e].destroy(), delete n[e];
                    H = !0
                }, {
                    events: U,
                    middleware: W
                };
                async function subscribe(i, o) {
                    let a;
                    if (H) throw Error("SubscriptionManager - attempting to use after destroying");
                    let l = i.params[0],
                        U = c(16);
                    switch (l) {
                        case "newHeads":
                            a = function({
                                subId: n
                            }) {
                                let i = {
                                    type: l,
                                    destroy: async () => {
                                        e.removeListener("sync", i.update)
                                    },
                                    update: async ({
                                        oldBlock: e,
                                        newBlock: i
                                    }) => {
                                        let o = u(e),
                                            a = await R({
                                                provider: t,
                                                fromBlock: o,
                                                toBlock: i
                                            }),
                                            l = a.map(normalizeBlock).filter(e => null !== e);
                                        l.forEach(e => {
                                            _emitSubscriptionResult(n, e)
                                        })
                                    }
                                };
                                return e.on("sync", i.update), i
                            }({
                                subId: U
                            });
                            break;
                        case "logs":
                            let W = i.params[1],
                                J = await N.newLogFilter(W);
                            a = function({
                                subId: e,
                                filter: t
                            }) {
                                return t.on("update", t => _emitSubscriptionResult(e, t)), {
                                    type: l,
                                    destroy: async () => await N.uninstallFilter(t.idHex)
                                }
                            }({
                                subId: U,
                                filter: J
                            });
                            break;
                        default:
                            throw Error(`SubscriptionManager - unsupported subscription type "${l}"`)
                    }
                    n[U] = a, o.result = U
                }
                async function unsubscribe(e, t) {
                    if (H) throw Error("SubscriptionManager - attempting to use after destroying");
                    let i = e.params[0],
                        o = n[i];
                    if (!o) {
                        t.result = !1;
                        return
                    }
                    delete n[i], await o.destroy(), t.result = !0
                }

                function _emitSubscriptionResult(e, t) {
                    U.emit("notification", {
                        jsonrpc: "2.0",
                        method: "eth_subscription",
                        params: {
                            subscription: e,
                            result: t
                        }
                    })
                }
            }
        },
        11019: function(e, t, n) {
            let i = n(28105),
                o = n(62442),
                {
                    incrementHexInt: a
                } = n(33983);
            e.exports = class extends i {
                constructor({
                    provider: e
                }) {
                    super(), this.type = "tx", this.provider = e
                }
                async update({
                    oldBlock: e
                }) {
                    let t = a(e),
                        n = await o({
                            provider: this.provider,
                            fromBlock: t,
                            toBlock: e
                        }),
                        i = [];
                    for (let e of n) i.push(...e.transactions);
                    this.addResults(i)
                }
            }
        },
        80673: function(e, t, n) {
            let i = n(37984),
                o = n(59927)();

            function EthQuery(e) {
                this.currentProvider = e
            }

            function generateFnFor(e) {
                return function() {
                    var t = [].slice.call(arguments),
                        n = t.pop();
                    this.sendAsync({
                        method: e,
                        params: t
                    }, n)
                }
            }

            function generateFnWithDefaultBlockFor(e, t) {
                return function() {
                    var n = [].slice.call(arguments),
                        i = n.pop();
                    n.length < e && n.push("latest"), this.sendAsync({
                        method: t,
                        params: n
                    }, i)
                }
            }
            e.exports = EthQuery, EthQuery.prototype.getBalance = generateFnWithDefaultBlockFor(2, "eth_getBalance"), EthQuery.prototype.getCode = generateFnWithDefaultBlockFor(2, "eth_getCode"), EthQuery.prototype.getTransactionCount = generateFnWithDefaultBlockFor(2, "eth_getTransactionCount"), EthQuery.prototype.getStorageAt = generateFnWithDefaultBlockFor(3, "eth_getStorageAt"), EthQuery.prototype.call = generateFnWithDefaultBlockFor(2, "eth_call"), EthQuery.prototype.protocolVersion = generateFnFor("eth_protocolVersion"), EthQuery.prototype.syncing = generateFnFor("eth_syncing"), EthQuery.prototype.coinbase = generateFnFor("eth_coinbase"), EthQuery.prototype.mining = generateFnFor("eth_mining"), EthQuery.prototype.hashrate = generateFnFor("eth_hashrate"), EthQuery.prototype.gasPrice = generateFnFor("eth_gasPrice"), EthQuery.prototype.accounts = generateFnFor("eth_accounts"), EthQuery.prototype.blockNumber = generateFnFor("eth_blockNumber"), EthQuery.prototype.getBlockTransactionCountByHash = generateFnFor("eth_getBlockTransactionCountByHash"), EthQuery.prototype.getBlockTransactionCountByNumber = generateFnFor("eth_getBlockTransactionCountByNumber"), EthQuery.prototype.getUncleCountByBlockHash = generateFnFor("eth_getUncleCountByBlockHash"), EthQuery.prototype.getUncleCountByBlockNumber = generateFnFor("eth_getUncleCountByBlockNumber"), EthQuery.prototype.sign = generateFnFor("eth_sign"), EthQuery.prototype.sendTransaction = generateFnFor("eth_sendTransaction"), EthQuery.prototype.sendRawTransaction = generateFnFor("eth_sendRawTransaction"), EthQuery.prototype.estimateGas = generateFnFor("eth_estimateGas"), EthQuery.prototype.getBlockByHash = generateFnFor("eth_getBlockByHash"), EthQuery.prototype.getBlockByNumber = generateFnFor("eth_getBlockByNumber"), EthQuery.prototype.getTransactionByHash = generateFnFor("eth_getTransactionByHash"), EthQuery.prototype.getTransactionByBlockHashAndIndex = generateFnFor("eth_getTransactionByBlockHashAndIndex"), EthQuery.prototype.getTransactionByBlockNumberAndIndex = generateFnFor("eth_getTransactionByBlockNumberAndIndex"), EthQuery.prototype.getTransactionReceipt = generateFnFor("eth_getTransactionReceipt"), EthQuery.prototype.getUncleByBlockHashAndIndex = generateFnFor("eth_getUncleByBlockHashAndIndex"), EthQuery.prototype.getUncleByBlockNumberAndIndex = generateFnFor("eth_getUncleByBlockNumberAndIndex"), EthQuery.prototype.getCompilers = generateFnFor("eth_getCompilers"), EthQuery.prototype.compileLLL = generateFnFor("eth_compileLLL"), EthQuery.prototype.compileSolidity = generateFnFor("eth_compileSolidity"), EthQuery.prototype.compileSerpent = generateFnFor("eth_compileSerpent"), EthQuery.prototype.newFilter = generateFnFor("eth_newFilter"), EthQuery.prototype.newBlockFilter = generateFnFor("eth_newBlockFilter"), EthQuery.prototype.newPendingTransactionFilter = generateFnFor("eth_newPendingTransactionFilter"), EthQuery.prototype.uninstallFilter = generateFnFor("eth_uninstallFilter"), EthQuery.prototype.getFilterChanges = generateFnFor("eth_getFilterChanges"), EthQuery.prototype.getFilterLogs = generateFnFor("eth_getFilterLogs"), EthQuery.prototype.getLogs = generateFnFor("eth_getLogs"), EthQuery.prototype.getWork = generateFnFor("eth_getWork"), EthQuery.prototype.submitWork = generateFnFor("eth_submitWork"), EthQuery.prototype.submitHashrate = generateFnFor("eth_submitHashrate"), EthQuery.prototype.sendAsync = function(e, t) {
                this.currentProvider.sendAsync(i({
                    id: o(),
                    jsonrpc: "2.0",
                    params: []
                }, e), function(e, n) {
                    if (!e && n.error && (e = Error("EthQuery - RPC Error - " + n.error.message)), e) return t(e);
                    t(null, n.result)
                })
            }
        },
        89852: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.EthereumProviderError = t.EthereumRpcError = void 0;
            let i = n(73593);
            let EthereumRpcError = class EthereumRpcError extends Error {
                constructor(e, t, n) {
                    if (!Number.isInteger(e)) throw Error('"code" must be an integer.');
                    if (!t || "string" != typeof t) throw Error('"message" must be a nonempty string.');
                    super(t), this.code = e, void 0 !== n && (this.data = n)
                }
                serialize() {
                    let e = {
                        code: this.code,
                        message: this.message
                    };
                    return void 0 !== this.data && (e.data = this.data), this.stack && (e.stack = this.stack), e
                }
                toString() {
                    return i.default(this.serialize(), stringifyReplacer, 2)
                }
            };

            function stringifyReplacer(e, t) {
                if ("[Circular]" !== t) return t
            }
            t.EthereumRpcError = EthereumRpcError, t.EthereumProviderError = class extends EthereumRpcError {
                constructor(e, t, n) {
                    if (!(Number.isInteger(e) && e >= 1e3 && e <= 4999)) throw Error('"code" must be an integer such that: 1000 <= code <= 4999');
                    super(e, t, n)
                }
            }
        },
        4597: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.errorValues = t.errorCodes = void 0, t.errorCodes = {
                rpc: {
                    invalidInput: -32e3,
                    resourceNotFound: -32001,
                    resourceUnavailable: -32002,
                    transactionRejected: -32003,
                    methodNotSupported: -32004,
                    limitExceeded: -32005,
                    parse: -32700,
                    invalidRequest: -32600,
                    methodNotFound: -32601,
                    invalidParams: -32602,
                    internal: -32603
                },
                provider: {
                    userRejectedRequest: 4001,
                    unauthorized: 4100,
                    unsupportedMethod: 4200,
                    disconnected: 4900,
                    chainDisconnected: 4901
                }
            }, t.errorValues = {
                "-32700": {
                    standard: "JSON RPC 2.0",
                    message: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
                },
                "-32600": {
                    standard: "JSON RPC 2.0",
                    message: "The JSON sent is not a valid Request object."
                },
                "-32601": {
                    standard: "JSON RPC 2.0",
                    message: "The method does not exist / is not available."
                },
                "-32602": {
                    standard: "JSON RPC 2.0",
                    message: "Invalid method parameter(s)."
                },
                "-32603": {
                    standard: "JSON RPC 2.0",
                    message: "Internal JSON-RPC error."
                },
                "-32000": {
                    standard: "EIP-1474",
                    message: "Invalid input."
                },
                "-32001": {
                    standard: "EIP-1474",
                    message: "Resource not found."
                },
                "-32002": {
                    standard: "EIP-1474",
                    message: "Resource unavailable."
                },
                "-32003": {
                    standard: "EIP-1474",
                    message: "Transaction rejected."
                },
                "-32004": {
                    standard: "EIP-1474",
                    message: "Method not supported."
                },
                "-32005": {
                    standard: "EIP-1474",
                    message: "Request limit exceeded."
                },
                4001: {
                    standard: "EIP-1193",
                    message: "User rejected the request."
                },
                4100: {
                    standard: "EIP-1193",
                    message: "The requested account and/or method has not been authorized by the user."
                },
                4200: {
                    standard: "EIP-1193",
                    message: "The requested method is not supported by this Ethereum provider."
                },
                4900: {
                    standard: "EIP-1193",
                    message: "The provider is disconnected from all chains."
                },
                4901: {
                    standard: "EIP-1193",
                    message: "The provider is disconnected from the specified chain."
                }
            }
        },
        14384: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ethErrors = void 0;
            let i = n(89852),
                o = n(1416),
                a = n(4597);

            function getEthJsonRpcError(e, t) {
                let [n, a] = parseOpts(t);
                return new i.EthereumRpcError(e, n || o.getMessageFromCode(e), a)
            }

            function getEthProviderError(e, t) {
                let [n, a] = parseOpts(t);
                return new i.EthereumProviderError(e, n || o.getMessageFromCode(e), a)
            }

            function parseOpts(e) {
                if (e) {
                    if ("string" == typeof e) return [e];
                    if ("object" == typeof e && !Array.isArray(e)) {
                        let {
                            message: t,
                            data: n
                        } = e;
                        if (t && "string" != typeof t) throw Error("Must specify string message.");
                        return [t || void 0, n]
                    }
                }
                return []
            }
            t.ethErrors = {
                rpc: {
                    parse: e => getEthJsonRpcError(a.errorCodes.rpc.parse, e),
                    invalidRequest: e => getEthJsonRpcError(a.errorCodes.rpc.invalidRequest, e),
                    invalidParams: e => getEthJsonRpcError(a.errorCodes.rpc.invalidParams, e),
                    methodNotFound: e => getEthJsonRpcError(a.errorCodes.rpc.methodNotFound, e),
                    internal: e => getEthJsonRpcError(a.errorCodes.rpc.internal, e),
                    server: e => {
                        if (!e || "object" != typeof e || Array.isArray(e)) throw Error("Ethereum RPC Server errors must provide single object argument.");
                        let {
                            code: t
                        } = e;
                        if (!Number.isInteger(t) || t > -32005 || t < -32099) throw Error('"code" must be an integer such that: -32099 <= code <= -32005');
                        return getEthJsonRpcError(t, e)
                    },
                    invalidInput: e => getEthJsonRpcError(a.errorCodes.rpc.invalidInput, e),
                    resourceNotFound: e => getEthJsonRpcError(a.errorCodes.rpc.resourceNotFound, e),
                    resourceUnavailable: e => getEthJsonRpcError(a.errorCodes.rpc.resourceUnavailable, e),
                    transactionRejected: e => getEthJsonRpcError(a.errorCodes.rpc.transactionRejected, e),
                    methodNotSupported: e => getEthJsonRpcError(a.errorCodes.rpc.methodNotSupported, e),
                    limitExceeded: e => getEthJsonRpcError(a.errorCodes.rpc.limitExceeded, e)
                },
                provider: {
                    userRejectedRequest: e => getEthProviderError(a.errorCodes.provider.userRejectedRequest, e),
                    unauthorized: e => getEthProviderError(a.errorCodes.provider.unauthorized, e),
                    unsupportedMethod: e => getEthProviderError(a.errorCodes.provider.unsupportedMethod, e),
                    disconnected: e => getEthProviderError(a.errorCodes.provider.disconnected, e),
                    chainDisconnected: e => getEthProviderError(a.errorCodes.provider.chainDisconnected, e),
                    custom: e => {
                        if (!e || "object" != typeof e || Array.isArray(e)) throw Error("Ethereum Provider custom errors must provide single object argument.");
                        let {
                            code: t,
                            message: n,
                            data: o
                        } = e;
                        if (!n || "string" != typeof n) throw Error('"message" must be a nonempty string');
                        return new i.EthereumProviderError(t, n, o)
                    }
                }
            }
        },
        70357: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getMessageFromCode = t.serializeError = t.EthereumProviderError = t.EthereumRpcError = t.ethErrors = t.errorCodes = void 0;
            let i = n(89852);
            Object.defineProperty(t, "EthereumRpcError", {
                enumerable: !0,
                get: function() {
                    return i.EthereumRpcError
                }
            }), Object.defineProperty(t, "EthereumProviderError", {
                enumerable: !0,
                get: function() {
                    return i.EthereumProviderError
                }
            });
            let o = n(1416);
            Object.defineProperty(t, "serializeError", {
                enumerable: !0,
                get: function() {
                    return o.serializeError
                }
            }), Object.defineProperty(t, "getMessageFromCode", {
                enumerable: !0,
                get: function() {
                    return o.getMessageFromCode
                }
            });
            let a = n(14384);
            Object.defineProperty(t, "ethErrors", {
                enumerable: !0,
                get: function() {
                    return a.ethErrors
                }
            });
            let l = n(4597);
            Object.defineProperty(t, "errorCodes", {
                enumerable: !0,
                get: function() {
                    return l.errorCodes
                }
            })
        },
        1416: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.serializeError = t.isValidCode = t.getMessageFromCode = t.JSON_RPC_SERVER_ERROR_MESSAGE = void 0;
            let i = n(4597),
                o = n(89852),
                a = i.errorCodes.rpc.internal,
                l = {
                    code: a,
                    message: getMessageFromCode(a)
                };

            function getMessageFromCode(e, n = "Unspecified error message. This is a bug, please report it.") {
                if (Number.isInteger(e)) {
                    let n = e.toString();
                    if (hasKey(i.errorValues, n)) return i.errorValues[n].message;
                    if (e >= -32099 && e <= -32e3) return t.JSON_RPC_SERVER_ERROR_MESSAGE
                }
                return n
            }

            function isValidCode(e) {
                if (!Number.isInteger(e)) return !1;
                let t = e.toString();
                return !!(i.errorValues[t] || e >= -32099 && e <= -32e3)
            }

            function assignOriginalError(e) {
                return e && "object" == typeof e && !Array.isArray(e) ? Object.assign({}, e) : e
            }

            function hasKey(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
            t.JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error.", t.getMessageFromCode = getMessageFromCode, t.isValidCode = isValidCode, t.serializeError = function(e, {
                fallbackError: t = l,
                shouldIncludeStack: n = !1
            } = {}) {
                if (!t || !Number.isInteger(t.code) || "string" != typeof t.message) throw Error("Must provide fallback error with integer number code and string message.");
                if (e instanceof o.EthereumRpcError) return e.serialize();
                let i = {};
                if (e && "object" == typeof e && !Array.isArray(e) && hasKey(e, "code") && isValidCode(e.code)) i.code = e.code, e.message && "string" == typeof e.message ? (i.message = e.message, hasKey(e, "data") && (i.data = e.data)) : (i.message = getMessageFromCode(i.code), i.data = {
                    originalError: assignOriginalError(e)
                });
                else {
                    i.code = t.code;
                    let n = null == e ? void 0 : e.message;
                    i.message = n && "string" == typeof n ? n : t.message, i.data = {
                        originalError: assignOriginalError(e)
                    }
                }
                let a = null == e ? void 0 : e.stack;
                return n && e && a && "string" == typeof a && (i.stack = a), i
            }
        },
        17414: function(e) {
            "use strict";
            var t, n = "object" == typeof Reflect ? Reflect : null,
                i = n && "function" == typeof n.apply ? n.apply : function(e, t, n) {
                    return Function.prototype.apply.call(e, t, n)
                };
            t = n && "function" == typeof n.ownKeys ? n.ownKeys : Object.getOwnPropertySymbols ? function(e) {
                return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
            } : function(e) {
                return Object.getOwnPropertyNames(e)
            };
            var o = Number.isNaN || function(e) {
                return e != e
            };

            function EventEmitter() {
                EventEmitter.init.call(this)
            }
            e.exports = EventEmitter, e.exports.once = function(e, t) {
                return new Promise(function(n, i) {
                    function errorListener(n) {
                        e.removeListener(t, resolver), i(n)
                    }

                    function resolver() {
                        "function" == typeof e.removeListener && e.removeListener("error", errorListener), n([].slice.call(arguments))
                    }
                    eventTargetAgnosticAddListener(e, t, resolver, {
                        once: !0
                    }), "error" !== t && "function" == typeof e.on && eventTargetAgnosticAddListener(e, "error", errorListener, {
                        once: !0
                    })
                })
            }, EventEmitter.EventEmitter = EventEmitter, EventEmitter.prototype._events = void 0, EventEmitter.prototype._eventsCount = 0, EventEmitter.prototype._maxListeners = void 0;
            var a = 10;

            function checkListener(e) {
                if ("function" != typeof e) throw TypeError('The "listener" argument must be of type Function. Received type ' + typeof e)
            }

            function _getMaxListeners(e) {
                return void 0 === e._maxListeners ? EventEmitter.defaultMaxListeners : e._maxListeners
            }

            function _addListener(e, t, n, i) {
                if (checkListener(n), void 0 === (a = e._events) ? (a = e._events = Object.create(null), e._eventsCount = 0) : (void 0 !== a.newListener && (e.emit("newListener", t, n.listener ? n.listener : n), a = e._events), l = a[t]), void 0 === l) l = a[t] = n, ++e._eventsCount;
                else if ("function" == typeof l ? l = a[t] = i ? [n, l] : [l, n] : i ? l.unshift(n) : l.push(n), (o = _getMaxListeners(e)) > 0 && l.length > o && !l.warned) {
                    l.warned = !0;
                    var o, a, l, c = Error("Possible EventEmitter memory leak detected. " + l.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                    c.name = "MaxListenersExceededWarning", c.emitter = e, c.type = t, c.count = l.length, console && console.warn && console.warn(c)
                }
                return e
            }

            function onceWrapper() {
                if (!this.fired) return (this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 == arguments.length) ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
            }

            function _onceWrap(e, t, n) {
                var i = {
                        fired: !1,
                        wrapFn: void 0,
                        target: e,
                        type: t,
                        listener: n
                    },
                    o = onceWrapper.bind(i);
                return o.listener = n, i.wrapFn = o, o
            }

            function _listeners(e, t, n) {
                var i = e._events;
                if (void 0 === i) return [];
                var o = i[t];
                return void 0 === o ? [] : "function" == typeof o ? n ? [o.listener || o] : [o] : n ? function(e) {
                    for (var t = Array(e.length), n = 0; n < t.length; ++n) t[n] = e[n].listener || e[n];
                    return t
                }(o) : arrayClone(o, o.length)
            }

            function listenerCount(e) {
                var t = this._events;
                if (void 0 !== t) {
                    var n = t[e];
                    if ("function" == typeof n) return 1;
                    if (void 0 !== n) return n.length
                }
                return 0
            }

            function arrayClone(e, t) {
                for (var n = Array(t), i = 0; i < t; ++i) n[i] = e[i];
                return n
            }

            function eventTargetAgnosticAddListener(e, t, n, i) {
                if ("function" == typeof e.on) i.once ? e.once(t, n) : e.on(t, n);
                else if ("function" == typeof e.addEventListener) e.addEventListener(t, function wrapListener(o) {
                    i.once && e.removeEventListener(t, wrapListener), n(o)
                });
                else throw TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e)
            }
            Object.defineProperty(EventEmitter, "defaultMaxListeners", {
                enumerable: !0,
                get: function() {
                    return a
                },
                set: function(e) {
                    if ("number" != typeof e || e < 0 || o(e)) throw RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
                    a = e
                }
            }), EventEmitter.init = function() {
                (void 0 === this._events || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
            }, EventEmitter.prototype.setMaxListeners = function(e) {
                if ("number" != typeof e || e < 0 || o(e)) throw RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
                return this._maxListeners = e, this
            }, EventEmitter.prototype.getMaxListeners = function() {
                return _getMaxListeners(this)
            }, EventEmitter.prototype.emit = function(e) {
                for (var t = [], n = 1; n < arguments.length; n++) t.push(arguments[n]);
                var o = "error" === e,
                    a = this._events;
                if (void 0 !== a) o = o && void 0 === a.error;
                else if (!o) return !1;
                if (o) {
                    if (t.length > 0 && (l = t[0]), l instanceof Error) throw l;
                    var l, c = Error("Unhandled error." + (l ? " (" + l.message + ")" : ""));
                    throw c.context = l, c
                }
                var u = a[e];
                if (void 0 === u) return !1;
                if ("function" == typeof u) i(u, this, t);
                else
                    for (var R = u.length, N = arrayClone(u, R), n = 0; n < R; ++n) i(N[n], this, t);
                return !0
            }, EventEmitter.prototype.addListener = function(e, t) {
                return _addListener(this, e, t, !1)
            }, EventEmitter.prototype.on = EventEmitter.prototype.addListener, EventEmitter.prototype.prependListener = function(e, t) {
                return _addListener(this, e, t, !0)
            }, EventEmitter.prototype.once = function(e, t) {
                return checkListener(t), this.on(e, _onceWrap(this, e, t)), this
            }, EventEmitter.prototype.prependOnceListener = function(e, t) {
                return checkListener(t), this.prependListener(e, _onceWrap(this, e, t)), this
            }, EventEmitter.prototype.removeListener = function(e, t) {
                var n, i, o, a, l;
                if (checkListener(t), void 0 === (i = this._events) || void 0 === (n = i[e])) return this;
                if (n === t || n.listener === t) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete i[e], i.removeListener && this.emit("removeListener", e, n.listener || t));
                else if ("function" != typeof n) {
                    for (o = -1, a = n.length - 1; a >= 0; a--)
                        if (n[a] === t || n[a].listener === t) {
                            l = n[a].listener, o = a;
                            break
                        }
                    if (o < 0) return this;
                    0 === o ? n.shift() : function(e, t) {
                        for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                        e.pop()
                    }(n, o), 1 === n.length && (i[e] = n[0]), void 0 !== i.removeListener && this.emit("removeListener", e, l || t)
                }
                return this
            }, EventEmitter.prototype.off = EventEmitter.prototype.removeListener, EventEmitter.prototype.removeAllListeners = function(e) {
                var t, n, i;
                if (void 0 === (n = this._events)) return this;
                if (void 0 === n.removeListener) return 0 == arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== n[e] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete n[e]), this;
                if (0 == arguments.length) {
                    var o, a = Object.keys(n);
                    for (i = 0; i < a.length; ++i) "removeListener" !== (o = a[i]) && this.removeAllListeners(o);
                    return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
                }
                if ("function" == typeof(t = n[e])) this.removeListener(e, t);
                else if (void 0 !== t)
                    for (i = t.length - 1; i >= 0; i--) this.removeListener(e, t[i]);
                return this
            }, EventEmitter.prototype.listeners = function(e) {
                return _listeners(this, e, !0)
            }, EventEmitter.prototype.rawListeners = function(e) {
                return _listeners(this, e, !1)
            }, EventEmitter.listenerCount = function(e, t) {
                return "function" == typeof e.listenerCount ? e.listenerCount(t) : listenerCount.call(e, t)
            }, EventEmitter.prototype.listenerCount = listenerCount, EventEmitter.prototype.eventNames = function() {
                return this._eventsCount > 0 ? t(this._events) : []
            }
        },
        73593: function(e) {
            e.exports = stringify, stringify.default = stringify, stringify.stable = deterministicStringify, stringify.stableStringify = deterministicStringify;
            var t = "[...]",
                n = "[Circular]",
                i = [],
                o = [];

            function defaultOptions() {
                return {
                    depthLimit: Number.MAX_SAFE_INTEGER,
                    edgesLimit: Number.MAX_SAFE_INTEGER
                }
            }

            function stringify(e, a, l, c) {
                void 0 === c && (c = defaultOptions()),
                    function decirc(e, i, o, a, l, c, u) {
                        if (c += 1, "object" == typeof e && null !== e) {
                            for (R = 0; R < a.length; R++)
                                if (a[R] === e) {
                                    setReplace(n, e, i, l);
                                    return
                                }
                            if (void 0 !== u.depthLimit && c > u.depthLimit || void 0 !== u.edgesLimit && o + 1 > u.edgesLimit) {
                                setReplace(t, e, i, l);
                                return
                            }
                            if (a.push(e), Array.isArray(e))
                                for (R = 0; R < e.length; R++) decirc(e[R], R, R, a, e, c, u);
                            else {
                                var R, N = Object.keys(e);
                                for (R = 0; R < N.length; R++) {
                                    var H = N[R];
                                    decirc(e[H], H, R, a, e, c, u)
                                }
                            }
                            a.pop()
                        }
                    }(e, "", 0, [], void 0, 0, c);
                try {
                    u = 0 === o.length ? JSON.stringify(e, a, l) : JSON.stringify(e, replaceGetterValues(a), l)
                } catch (e) {
                    return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")
                } finally {
                    for (; 0 !== i.length;) {
                        var u, R = i.pop();
                        4 === R.length ? Object.defineProperty(R[0], R[1], R[3]) : R[0][R[1]] = R[2]
                    }
                }
                return u
            }

            function setReplace(e, t, n, a) {
                var l = Object.getOwnPropertyDescriptor(a, n);
                void 0 !== l.get ? l.configurable ? (Object.defineProperty(a, n, {
                    value: e
                }), i.push([a, n, t, l])) : o.push([t, n, e]) : (a[n] = e, i.push([a, n, t]))
            }

            function compareFunction(e, t) {
                return e < t ? -1 : e > t ? 1 : 0
            }

            function deterministicStringify(e, a, l, c) {
                void 0 === c && (c = defaultOptions());
                var u, R = function deterministicDecirc(e, o, a, l, c, u, R) {
                    if (u += 1, "object" == typeof e && null !== e) {
                        for (N = 0; N < l.length; N++)
                            if (l[N] === e) {
                                setReplace(n, e, o, c);
                                return
                            }
                        try {
                            if ("function" == typeof e.toJSON) return
                        } catch (e) {
                            return
                        }
                        if (void 0 !== R.depthLimit && u > R.depthLimit || void 0 !== R.edgesLimit && a + 1 > R.edgesLimit) {
                            setReplace(t, e, o, c);
                            return
                        }
                        if (l.push(e), Array.isArray(e))
                            for (N = 0; N < e.length; N++) deterministicDecirc(e[N], N, N, l, e, u, R);
                        else {
                            var N, H = {},
                                U = Object.keys(e).sort(compareFunction);
                            for (N = 0; N < U.length; N++) {
                                var W = U[N];
                                deterministicDecirc(e[W], W, N, l, e, u, R), H[W] = e[W]
                            }
                            if (void 0 === c) return H;
                            i.push([c, o, e]), c[o] = H
                        }
                        l.pop()
                    }
                }(e, "", 0, [], void 0, 0, c) || e;
                try {
                    u = 0 === o.length ? JSON.stringify(R, a, l) : JSON.stringify(R, replaceGetterValues(a), l)
                } catch (e) {
                    return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")
                } finally {
                    for (; 0 !== i.length;) {
                        var N = i.pop();
                        4 === N.length ? Object.defineProperty(N[0], N[1], N[3]) : N[0][N[1]] = N[2]
                    }
                }
                return u
            }

            function replaceGetterValues(e) {
                return e = void 0 !== e ? e : function(e, t) {
                        return t
                    },
                    function(t, n) {
                        if (o.length > 0)
                            for (var i = 0; i < o.length; i++) {
                                var a = o[i];
                                if (a[1] === t && a[0] === n) {
                                    n = a[2], o.splice(i, 1);
                                    break
                                }
                            }
                        return e.call(this, t, n)
                    }
            }
        },
        82625: function(e, t, n) {
            "use strict";
            var i = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.JsonRpcEngine = void 0;
            let o = i(n(69490)),
                a = n(70357);
            let JsonRpcEngine = class JsonRpcEngine extends o.default {
                constructor() {
                    super(), this._middleware = []
                }
                push(e) {
                    this._middleware.push(e)
                }
                handle(e, t) {
                    if (t && "function" != typeof t) throw Error('"callback" must be a function if provided.');
                    return Array.isArray(e) ? t ? this._handleBatch(e, t) : this._handleBatch(e) : t ? this._handle(e, t) : this._promiseHandle(e)
                }
                asMiddleware() {
                    return async (e, t, n, i) => {
                        try {
                            let [o, a, l] = await JsonRpcEngine._runAllMiddleware(e, t, this._middleware);
                            if (a) return await JsonRpcEngine._runReturnHandlers(l), i(o);
                            return n(async e => {
                                try {
                                    await JsonRpcEngine._runReturnHandlers(l)
                                } catch (t) {
                                    return e(t)
                                }
                                return e()
                            })
                        } catch (e) {
                            return i(e)
                        }
                    }
                }
                async _handleBatch(e, t) {
                    try {
                        let n = await Promise.all(e.map(this._promiseHandle.bind(this)));
                        if (t) return t(null, n);
                        return n
                    } catch (e) {
                        if (t) return t(e);
                        throw e
                    }
                }
                _promiseHandle(e) {
                    return new Promise(t => {
                        this._handle(e, (e, n) => {
                            t(n)
                        })
                    })
                }
                async _handle(e, t) {
                    if (!e || Array.isArray(e) || "object" != typeof e) {
                        let n = new a.EthereumRpcError(a.errorCodes.rpc.invalidRequest, `Requests must be plain objects. Received: ${typeof e}`, {
                            request: e
                        });
                        return t(n, {
                            id: void 0,
                            jsonrpc: "2.0",
                            error: n
                        })
                    }
                    if ("string" != typeof e.method) {
                        let n = new a.EthereumRpcError(a.errorCodes.rpc.invalidRequest, `Must specify a string method. Received: ${typeof e.method}`, {
                            request: e
                        });
                        return t(n, {
                            id: e.id,
                            jsonrpc: "2.0",
                            error: n
                        })
                    }
                    let n = Object.assign({}, e),
                        i = {
                            id: n.id,
                            jsonrpc: n.jsonrpc
                        },
                        o = null;
                    try {
                        await this._processRequest(n, i)
                    } catch (e) {
                        o = e
                    }
                    return o && (delete i.result, i.error || (i.error = a.serializeError(o))), t(o, i)
                }
                async _processRequest(e, t) {
                    let [n, i, o] = await JsonRpcEngine._runAllMiddleware(e, t, this._middleware);
                    if (JsonRpcEngine._checkForCompletion(e, t, i), await JsonRpcEngine._runReturnHandlers(o), n) throw n
                }
                static async _runAllMiddleware(e, t, n) {
                    let i = [],
                        o = null,
                        a = !1;
                    for (let l of n)
                        if ([o, a] = await JsonRpcEngine._runMiddleware(e, t, l, i), a) break;
                    return [o, a, i.reverse()]
                }
                static _runMiddleware(e, t, n, i) {
                    return new Promise(o => {
                        let end = e => {
                            let n = e || t.error;
                            n && (t.error = a.serializeError(n)), o([n, !0])
                        };
                        try {
                            n(e, t, n => {
                                t.error ? end(t.error) : (n && ("function" != typeof n && end(new a.EthereumRpcError(a.errorCodes.rpc.internal, `JsonRpcEngine: "next" return handlers must be functions. Received "${typeof n}" for request:
${jsonify(e)}`, {
                                    request: e
                                })), i.push(n)), o([null, !1]))
                            }, end)
                        } catch (e) {
                            end(e)
                        }
                    })
                }
                static async _runReturnHandlers(e) {
                    for (let t of e) await new Promise((e, n) => {
                        t(t => t ? n(t) : e())
                    })
                }
                static _checkForCompletion(e, t, n) {
                    if (!("result" in t) && !("error" in t)) throw new a.EthereumRpcError(a.errorCodes.rpc.internal, `JsonRpcEngine: Response has no error or result for request:
${jsonify(e)}`, {
                        request: e
                    });
                    if (!n) throw new a.EthereumRpcError(a.errorCodes.rpc.internal, `JsonRpcEngine: Nothing ended request:
${jsonify(e)}`, {
                        request: e
                    })
                }
            };

            function jsonify(e) {
                return JSON.stringify(e, null, 2)
            }
            t.JsonRpcEngine = JsonRpcEngine
        },
        60029: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createAsyncMiddleware = void 0, t.createAsyncMiddleware = function(e) {
                return async (t, n, i, o) => {
                    let a;
                    let l = new Promise(e => {
                            a = e
                        }),
                        c = null,
                        u = !1,
                        asyncNext = async () => {
                            u = !0, i(e => {
                                c = e, a()
                            }), await l
                        };
                    try {
                        await e(t, n, asyncNext), u ? (await l, c(null)) : o(null)
                    } catch (e) {
                        c ? c(e) : o(e)
                    }
                }
            }
        },
        61266: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createScaffoldMiddleware = void 0, t.createScaffoldMiddleware = function(e) {
                return (t, n, i, o) => {
                    let a = e[t.method];
                    return void 0 === a ? i() : "function" == typeof a ? a(t, n, i, o) : (n.result = a, o())
                }
            }
        },
        94914: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getUniqueId = void 0;
            let n = Math.floor(4294967295 * Math.random());
            t.getUniqueId = function() {
                return n = (n + 1) % 4294967295
            }
        },
        4292: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createIdRemapMiddleware = void 0;
            let i = n(94914);
            t.createIdRemapMiddleware = function() {
                return (e, t, n, o) => {
                    let a = e.id,
                        l = i.getUniqueId();
                    e.id = l, t.id = l, n(n => {
                        e.id = a, t.id = a, n()
                    })
                }
            }
        },
        63619: function(e, t, n) {
            "use strict";
            var i = this && this.__createBinding || (Object.create ? function(e, t, n, i) {
                    void 0 === i && (i = n), Object.defineProperty(e, i, {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                } : function(e, t, n, i) {
                    void 0 === i && (i = n), e[i] = t[n]
                }),
                o = this && this.__exportStar || function(e, t) {
                    for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || i(t, e, n)
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), o(n(4292), t), o(n(60029), t), o(n(61266), t), o(n(94914), t), o(n(82625), t), o(n(73820), t)
        },
        73820: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.mergeMiddleware = void 0;
            let i = n(82625);
            t.mergeMiddleware = function(e) {
                let t = new i.JsonRpcEngine;
                return e.forEach(e => t.push(e)), t.asMiddleware()
            }
        },
        59927: function(e) {
            e.exports = function(e) {
                var t = (e = e || {}).max || Number.MAX_SAFE_INTEGER,
                    n = void 0 !== e.start ? e.start : Math.floor(Math.random() * t);
                return function() {
                    return n %= t, n++
                }
            }
        },
        53733: function(e, t, n) {
            e.exports = n(48779)(n(43691))
        },
        48779: function(e, t, n) {
            let i = n(2224),
                o = n(56368);
            e.exports = function(e) {
                let t = i(e),
                    n = o(e);
                return function(e, i) {
                    let o = "string" == typeof e ? e.toLowerCase() : e;
                    switch (o) {
                        case "keccak224":
                            return new t(1152, 448, null, 224, i);
                        case "keccak256":
                            return new t(1088, 512, null, 256, i);
                        case "keccak384":
                            return new t(832, 768, null, 384, i);
                        case "keccak512":
                            return new t(576, 1024, null, 512, i);
                        case "sha3-224":
                            return new t(1152, 448, 6, 224, i);
                        case "sha3-256":
                            return new t(1088, 512, 6, 256, i);
                        case "sha3-384":
                            return new t(832, 768, 6, 384, i);
                        case "sha3-512":
                            return new t(576, 1024, 6, 512, i);
                        case "shake128":
                            return new n(1344, 256, 31, i);
                        case "shake256":
                            return new n(1088, 512, 31, i);
                        default:
                            throw Error("Invald algorithm: " + e)
                    }
                }
            }
        },
        2224: function(e, t, n) {
            var i = n(97115).Buffer;
            let {
                Transform: o
            } = n(69996);
            e.exports = e => class Keccak extends o {
                constructor(t, n, i, o, a) {
                    super(a), this._rate = t, this._capacity = n, this._delimitedSuffix = i, this._hashBitLength = o, this._options = a, this._state = new e, this._state.initialize(t, n), this._finalized = !1
                }
                _transform(e, t, n) {
                    let i = null;
                    try {
                        this.update(e, t)
                    } catch (e) {
                        i = e
                    }
                    n(i)
                }
                _flush(e) {
                    let t = null;
                    try {
                        this.push(this.digest())
                    } catch (e) {
                        t = e
                    }
                    e(t)
                }
                update(e, t) {
                    if (!i.isBuffer(e) && "string" != typeof e) throw TypeError("Data must be a string or a buffer");
                    if (this._finalized) throw Error("Digest already called");
                    return i.isBuffer(e) || (e = i.from(e, t)), this._state.absorb(e), this
                }
                digest(e) {
                    if (this._finalized) throw Error("Digest already called");
                    this._finalized = !0, this._delimitedSuffix && this._state.absorbLastFewBits(this._delimitedSuffix);
                    let t = this._state.squeeze(this._hashBitLength / 8);
                    return void 0 !== e && (t = t.toString(e)), this._resetState(), t
                }
                _resetState() {
                    return this._state.initialize(this._rate, this._capacity), this
                }
                _clone() {
                    let e = new Keccak(this._rate, this._capacity, this._delimitedSuffix, this._hashBitLength, this._options);
                    return this._state.copy(e._state), e._finalized = this._finalized, e
                }
            }
        },
        56368: function(e, t, n) {
            var i = n(97115).Buffer;
            let {
                Transform: o
            } = n(69996);
            e.exports = e => class Shake extends o {
                constructor(t, n, i, o) {
                    super(o), this._rate = t, this._capacity = n, this._delimitedSuffix = i, this._options = o, this._state = new e, this._state.initialize(t, n), this._finalized = !1
                }
                _transform(e, t, n) {
                    let i = null;
                    try {
                        this.update(e, t)
                    } catch (e) {
                        i = e
                    }
                    n(i)
                }
                _flush() {}
                _read(e) {
                    this.push(this.squeeze(e))
                }
                update(e, t) {
                    if (!i.isBuffer(e) && "string" != typeof e) throw TypeError("Data must be a string or a buffer");
                    if (this._finalized) throw Error("Squeeze already called");
                    return i.isBuffer(e) || (e = i.from(e, t)), this._state.absorb(e), this
                }
                squeeze(e, t) {
                    this._finalized || (this._finalized = !0, this._state.absorbLastFewBits(this._delimitedSuffix));
                    let n = this._state.squeeze(e);
                    return void 0 !== t && (n = n.toString(t)), n
                }
                _resetState() {
                    return this._state.initialize(this._rate, this._capacity), this
                }
                _clone() {
                    let e = new Shake(this._rate, this._capacity, this._delimitedSuffix, this._options);
                    return this._state.copy(e._state), e._finalized = this._finalized, e
                }
            }
        },
        58994: function(e, t) {
            let n = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648];
            t.p1600 = function(e) {
                for (let t = 0; t < 24; ++t) {
                    let i = e[0] ^ e[10] ^ e[20] ^ e[30] ^ e[40],
                        o = e[1] ^ e[11] ^ e[21] ^ e[31] ^ e[41],
                        a = e[2] ^ e[12] ^ e[22] ^ e[32] ^ e[42],
                        l = e[3] ^ e[13] ^ e[23] ^ e[33] ^ e[43],
                        c = e[4] ^ e[14] ^ e[24] ^ e[34] ^ e[44],
                        u = e[5] ^ e[15] ^ e[25] ^ e[35] ^ e[45],
                        R = e[6] ^ e[16] ^ e[26] ^ e[36] ^ e[46],
                        N = e[7] ^ e[17] ^ e[27] ^ e[37] ^ e[47],
                        H = e[8] ^ e[18] ^ e[28] ^ e[38] ^ e[48],
                        U = e[9] ^ e[19] ^ e[29] ^ e[39] ^ e[49],
                        W = H ^ (a << 1 | l >>> 31),
                        J = U ^ (l << 1 | a >>> 31),
                        Q = e[0] ^ W,
                        Z = e[1] ^ J,
                        Y = e[10] ^ W,
                        K = e[11] ^ J,
                        X = e[20] ^ W,
                        ee = e[21] ^ J,
                        et = e[30] ^ W,
                        er = e[31] ^ J,
                        en = e[40] ^ W,
                        es = e[41] ^ J;
                    W = i ^ (c << 1 | u >>> 31), J = o ^ (u << 1 | c >>> 31);
                    let ei = e[2] ^ W,
                        eo = e[3] ^ J,
                        ea = e[12] ^ W,
                        el = e[13] ^ J,
                        ec = e[22] ^ W,
                        eu = e[23] ^ J,
                        eh = e[32] ^ W,
                        ed = e[33] ^ J,
                        ep = e[42] ^ W,
                        ef = e[43] ^ J;
                    W = a ^ (R << 1 | N >>> 31), J = l ^ (N << 1 | R >>> 31);
                    let eg = e[4] ^ W,
                        em = e[5] ^ J,
                        ey = e[14] ^ W,
                        e_ = e[15] ^ J,
                        eb = e[24] ^ W,
                        ev = e[25] ^ J,
                        eE = e[34] ^ W,
                        ew = e[35] ^ J,
                        ek = e[44] ^ W,
                        eS = e[45] ^ J;
                    W = c ^ (H << 1 | U >>> 31), J = u ^ (U << 1 | H >>> 31);
                    let eC = e[6] ^ W,
                        eR = e[7] ^ J,
                        eI = e[16] ^ W,
                        ex = e[17] ^ J,
                        eA = e[26] ^ W,
                        eN = e[27] ^ J,
                        eL = e[36] ^ W,
                        eM = e[37] ^ J,
                        eT = e[46] ^ W,
                        eP = e[47] ^ J;
                    W = R ^ (i << 1 | o >>> 31), J = N ^ (o << 1 | i >>> 31);
                    let eO = e[8] ^ W,
                        eF = e[9] ^ J,
                        eB = e[18] ^ W,
                        ej = e[19] ^ J,
                        eD = e[28] ^ W,
                        e$ = e[29] ^ J,
                        eH = e[38] ^ W,
                        eU = e[39] ^ J,
                        eV = e[48] ^ W,
                        ez = e[49] ^ J,
                        eW = K << 4 | Y >>> 28,
                        eq = Y << 4 | K >>> 28,
                        eJ = X << 3 | ee >>> 29,
                        eG = ee << 3 | X >>> 29,
                        eQ = er << 9 | et >>> 23,
                        eZ = et << 9 | er >>> 23,
                        eY = en << 18 | es >>> 14,
                        eK = es << 18 | en >>> 14,
                        eX = ei << 1 | eo >>> 31,
                        e0 = eo << 1 | ei >>> 31,
                        e1 = el << 12 | ea >>> 20,
                        e2 = ea << 12 | el >>> 20,
                        e3 = ec << 10 | eu >>> 22,
                        e4 = eu << 10 | ec >>> 22,
                        e5 = ed << 13 | eh >>> 19,
                        e8 = eh << 13 | ed >>> 19,
                        e6 = ep << 2 | ef >>> 30,
                        e7 = ef << 2 | ep >>> 30,
                        e9 = em << 30 | eg >>> 2,
                        te = eg << 30 | em >>> 2,
                        tt = ey << 6 | e_ >>> 26,
                        tr = e_ << 6 | ey >>> 26,
                        tn = ev << 11 | eb >>> 21,
                        ts = eb << 11 | ev >>> 21,
                        ti = eE << 15 | ew >>> 17,
                        to = ew << 15 | eE >>> 17,
                        ta = eS << 29 | ek >>> 3,
                        tl = ek << 29 | eS >>> 3,
                        tc = eC << 28 | eR >>> 4,
                        tu = eR << 28 | eC >>> 4,
                        th = ex << 23 | eI >>> 9,
                        td = eI << 23 | ex >>> 9,
                        tp = eA << 25 | eN >>> 7,
                        tf = eN << 25 | eA >>> 7,
                        tg = eL << 21 | eM >>> 11,
                        tm = eM << 21 | eL >>> 11,
                        ty = eP << 24 | eT >>> 8,
                        t_ = eT << 24 | eP >>> 8,
                        tb = eO << 27 | eF >>> 5,
                        tv = eF << 27 | eO >>> 5,
                        tE = eB << 20 | ej >>> 12,
                        tw = ej << 20 | eB >>> 12,
                        tk = e$ << 7 | eD >>> 25,
                        tS = eD << 7 | e$ >>> 25,
                        tC = eH << 8 | eU >>> 24,
                        tR = eU << 8 | eH >>> 24,
                        tI = eV << 14 | ez >>> 18,
                        tx = ez << 14 | eV >>> 18;
                    e[0] = Q ^ ~e1 & tn, e[1] = Z ^ ~e2 & ts, e[10] = tc ^ ~tE & eJ, e[11] = tu ^ ~tw & eG, e[20] = eX ^ ~tt & tp, e[21] = e0 ^ ~tr & tf, e[30] = tb ^ ~eW & e3, e[31] = tv ^ ~eq & e4, e[40] = e9 ^ ~th & tk, e[41] = te ^ ~td & tS, e[2] = e1 ^ ~tn & tg, e[3] = e2 ^ ~ts & tm, e[12] = tE ^ ~eJ & e5, e[13] = tw ^ ~eG & e8, e[22] = tt ^ ~tp & tC, e[23] = tr ^ ~tf & tR, e[32] = eW ^ ~e3 & ti, e[33] = eq ^ ~e4 & to, e[42] = th ^ ~tk & eQ, e[43] = td ^ ~tS & eZ, e[4] = tn ^ ~tg & tI, e[5] = ts ^ ~tm & tx, e[14] = eJ ^ ~e5 & ta, e[15] = eG ^ ~e8 & tl, e[24] = tp ^ ~tC & eY, e[25] = tf ^ ~tR & eK, e[34] = e3 ^ ~ti & ty, e[35] = e4 ^ ~to & t_, e[44] = tk ^ ~eQ & e6, e[45] = tS ^ ~eZ & e7, e[6] = tg ^ ~tI & Q, e[7] = tm ^ ~tx & Z, e[16] = e5 ^ ~ta & tc, e[17] = e8 ^ ~tl & tu, e[26] = tC ^ ~eY & eX, e[27] = tR ^ ~eK & e0, e[36] = ti ^ ~ty & tb, e[37] = to ^ ~t_ & tv, e[46] = eQ ^ ~e6 & e9, e[47] = eZ ^ ~e7 & te, e[8] = tI ^ ~Q & e1, e[9] = tx ^ ~Z & e2, e[18] = ta ^ ~tc & tE, e[19] = tl ^ ~tu & tw, e[28] = eY ^ ~eX & tt, e[29] = eK ^ ~e0 & tr, e[38] = ty ^ ~tb & eW, e[39] = t_ ^ ~tv & eq, e[48] = e6 ^ ~e9 & th, e[49] = e7 ^ ~te & td, e[0] ^= n[2 * t], e[1] ^= n[2 * t + 1]
                }
            }
        },
        43691: function(e, t, n) {
            var i = n(97115).Buffer;
            let o = n(58994);

            function Keccak() {
                this.state = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], this.blockSize = null, this.count = 0, this.squeezing = !1
            }
            Keccak.prototype.initialize = function(e, t) {
                for (let e = 0; e < 50; ++e) this.state[e] = 0;
                this.blockSize = e / 8, this.count = 0, this.squeezing = !1
            }, Keccak.prototype.absorb = function(e) {
                for (let t = 0; t < e.length; ++t) this.state[~~(this.count / 4)] ^= e[t] << 8 * (this.count % 4), this.count += 1, this.count === this.blockSize && (o.p1600(this.state), this.count = 0)
            }, Keccak.prototype.absorbLastFewBits = function(e) {
                this.state[~~(this.count / 4)] ^= e << 8 * (this.count % 4), (128 & e) != 0 && this.count === this.blockSize - 1 && o.p1600(this.state), this.state[~~((this.blockSize - 1) / 4)] ^= 128 << 8 * ((this.blockSize - 1) % 4), o.p1600(this.state), this.count = 0, this.squeezing = !0
            }, Keccak.prototype.squeeze = function(e) {
                this.squeezing || this.absorbLastFewBits(1);
                let t = i.alloc(e);
                for (let n = 0; n < e; ++n) t[n] = this.state[~~(this.count / 4)] >>> 8 * (this.count % 4) & 255, this.count += 1, this.count === this.blockSize && (o.p1600(this.state), this.count = 0);
                return t
            }, Keccak.prototype.copy = function(e) {
                for (let t = 0; t < 50; ++t) e.state[t] = this.state[t];
                e.blockSize = this.blockSize, e.count = this.count, e.squeezing = this.squeezing
            }, e.exports = Keccak
        },
        75566: function(e, t, n) {
            "use strict";
            let i = n(37992),
                o = Symbol("max"),
                a = Symbol("length"),
                l = Symbol("lengthCalculator"),
                c = Symbol("allowStale"),
                u = Symbol("maxAge"),
                R = Symbol("dispose"),
                N = Symbol("noDisposeOnSet"),
                H = Symbol("lruList"),
                U = Symbol("cache"),
                W = Symbol("updateAgeOnGet"),
                naiveLength = () => 1,
                get = (e, t, n) => {
                    let i = e[U].get(t);
                    if (i) {
                        let t = i.value;
                        if (isStale(e, t)) {
                            if (del(e, i), !e[c]) return
                        } else n && (e[W] && (i.value.now = Date.now()), e[H].unshiftNode(i));
                        return t.value
                    }
                },
                isStale = (e, t) => {
                    if (!t || !t.maxAge && !e[u]) return !1;
                    let n = Date.now() - t.now;
                    return t.maxAge ? n > t.maxAge : e[u] && n > e[u]
                },
                trim = e => {
                    if (e[a] > e[o])
                        for (let t = e[H].tail; e[a] > e[o] && null !== t;) {
                            let n = t.prev;
                            del(e, t), t = n
                        }
                },
                del = (e, t) => {
                    if (t) {
                        let n = t.value;
                        e[R] && e[R](n.key, n.value), e[a] -= n.length, e[U].delete(n.key), e[H].removeNode(t)
                    }
                };
            let Entry = class Entry {
                constructor(e, t, n, i, o) {
                    this.key = e, this.value = t, this.length = n, this.now = i, this.maxAge = o || 0
                }
            };
            let forEachStep = (e, t, n, i) => {
                let o = n.value;
                isStale(e, o) && (del(e, n), e[c] || (o = void 0)), o && t.call(i, o.value, o.key, e)
            };
            e.exports = class {
                constructor(e) {
                    if ("number" == typeof e && (e = {
                            max: e
                        }), e || (e = {}), e.max && ("number" != typeof e.max || e.max < 0)) throw TypeError("max must be a non-negative number");
                    this[o] = e.max || 1 / 0;
                    let t = e.length || naiveLength;
                    if (this[l] = "function" != typeof t ? naiveLength : t, this[c] = e.stale || !1, e.maxAge && "number" != typeof e.maxAge) throw TypeError("maxAge must be a number");
                    this[u] = e.maxAge || 0, this[R] = e.dispose, this[N] = e.noDisposeOnSet || !1, this[W] = e.updateAgeOnGet || !1, this.reset()
                }
                set max(e) {
                    if ("number" != typeof e || e < 0) throw TypeError("max must be a non-negative number");
                    this[o] = e || 1 / 0, trim(this)
                }
                get max() {
                    return this[o]
                }
                set allowStale(e) {
                    this[c] = !!e
                }
                get allowStale() {
                    return this[c]
                }
                set maxAge(e) {
                    if ("number" != typeof e) throw TypeError("maxAge must be a non-negative number");
                    this[u] = e, trim(this)
                }
                get maxAge() {
                    return this[u]
                }
                set lengthCalculator(e) {
                    "function" != typeof e && (e = naiveLength), e !== this[l] && (this[l] = e, this[a] = 0, this[H].forEach(e => {
                        e.length = this[l](e.value, e.key), this[a] += e.length
                    })), trim(this)
                }
                get lengthCalculator() {
                    return this[l]
                }
                get length() {
                    return this[a]
                }
                get itemCount() {
                    return this[H].length
                }
                rforEach(e, t) {
                    t = t || this;
                    for (let n = this[H].tail; null !== n;) {
                        let i = n.prev;
                        forEachStep(this, e, n, t), n = i
                    }
                }
                forEach(e, t) {
                    t = t || this;
                    for (let n = this[H].head; null !== n;) {
                        let i = n.next;
                        forEachStep(this, e, n, t), n = i
                    }
                }
                keys() {
                    return this[H].toArray().map(e => e.key)
                }
                values() {
                    return this[H].toArray().map(e => e.value)
                }
                reset() {
                    this[R] && this[H] && this[H].length && this[H].forEach(e => this[R](e.key, e.value)), this[U] = new Map, this[H] = new i, this[a] = 0
                }
                dump() {
                    return this[H].map(e => !isStale(this, e) && {
                        k: e.key,
                        v: e.value,
                        e: e.now + (e.maxAge || 0)
                    }).toArray().filter(e => e)
                }
                dumpLru() {
                    return this[H]
                }
                set(e, t, n) {
                    if ((n = n || this[u]) && "number" != typeof n) throw TypeError("maxAge must be a number");
                    let i = n ? Date.now() : 0,
                        c = this[l](t, e);
                    if (this[U].has(e)) {
                        if (c > this[o]) return del(this, this[U].get(e)), !1;
                        let l = this[U].get(e),
                            u = l.value;
                        return this[R] && !this[N] && this[R](e, u.value), u.now = i, u.maxAge = n, u.value = t, this[a] += c - u.length, u.length = c, this.get(e), trim(this), !0
                    }
                    let W = new Entry(e, t, c, i, n);
                    return W.length > this[o] ? (this[R] && this[R](e, t), !1) : (this[a] += W.length, this[H].unshift(W), this[U].set(e, this[H].head), trim(this), !0)
                }
                has(e) {
                    if (!this[U].has(e)) return !1;
                    let t = this[U].get(e).value;
                    return !isStale(this, t)
                }
                get(e) {
                    return get(this, e, !0)
                }
                peek(e) {
                    return get(this, e, !1)
                }
                pop() {
                    let e = this[H].tail;
                    return e ? (del(this, e), e.value) : null
                }
                del(e) {
                    del(this, this[U].get(e))
                }
                load(e) {
                    this.reset();
                    let t = Date.now();
                    for (let n = e.length - 1; n >= 0; n--) {
                        let i = e[n],
                            o = i.e || 0;
                        if (0 === o) this.set(i.k, i.v);
                        else {
                            let e = o - t;
                            e > 0 && this.set(i.k, i.v, e)
                        }
                    }
                }
                prune() {
                    this[U].forEach((e, t) => get(this, t, !1))
                }
            }
        },
        1747: function(e) {
            function plural(e, t, n, i) {
                return Math.round(e / n) + " " + i + (t >= 1.5 * n ? "s" : "")
            }
            e.exports = function(e, t) {
                t = t || {};
                var n, i, o = typeof e;
                if ("string" === o && e.length > 0) return function(e) {
                    if (!((e = String(e)).length > 100)) {
                        var t = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);
                        if (t) {
                            var n = parseFloat(t[1]);
                            switch ((t[2] || "ms").toLowerCase()) {
                                case "years":
                                case "year":
                                case "yrs":
                                case "yr":
                                case "y":
                                    return 315576e5 * n;
                                case "weeks":
                                case "week":
                                case "w":
                                    return 6048e5 * n;
                                case "days":
                                case "day":
                                case "d":
                                    return 864e5 * n;
                                case "hours":
                                case "hour":
                                case "hrs":
                                case "hr":
                                case "h":
                                    return 36e5 * n;
                                case "minutes":
                                case "minute":
                                case "mins":
                                case "min":
                                case "m":
                                    return 6e4 * n;
                                case "seconds":
                                case "second":
                                case "secs":
                                case "sec":
                                case "s":
                                    return 1e3 * n;
                                case "milliseconds":
                                case "millisecond":
                                case "msecs":
                                case "msec":
                                case "ms":
                                    return n;
                                default:
                                    return
                            }
                        }
                    }
                }(e);
                if ("number" === o && isFinite(e)) return t.long ? (n = Math.abs(e)) >= 864e5 ? plural(e, n, 864e5, "day") : n >= 36e5 ? plural(e, n, 36e5, "hour") : n >= 6e4 ? plural(e, n, 6e4, "minute") : n >= 1e3 ? plural(e, n, 1e3, "second") : e + " ms" : (i = Math.abs(e)) >= 864e5 ? Math.round(e / 864e5) + "d" : i >= 36e5 ? Math.round(e / 36e5) + "h" : i >= 6e4 ? Math.round(e / 6e4) + "m" : i >= 1e3 ? Math.round(e / 1e3) + "s" : e + "ms";
                throw Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
            }
        },
        30800: function(e) {
            "use strict";
            let processFn = (e, t) => function() {
                let n = t.promiseModule,
                    i = Array(arguments.length);
                for (let e = 0; e < arguments.length; e++) i[e] = arguments[e];
                return new n((n, o) => {
                    t.errorFirst ? i.push(function(e, i) {
                        if (t.multiArgs) {
                            let t = Array(arguments.length - 1);
                            for (let e = 1; e < arguments.length; e++) t[e - 1] = arguments[e];
                            e ? (t.unshift(e), o(t)) : n(t)
                        } else e ? o(e) : n(i)
                    }) : i.push(function(e) {
                        if (t.multiArgs) {
                            let e = Array(arguments.length - 1);
                            for (let t = 0; t < arguments.length; t++) e[t] = arguments[t];
                            n(e)
                        } else n(e)
                    }), e.apply(this, i)
                })
            };
            e.exports = (e, t) => {
                let n;
                t = Object.assign({
                    exclude: [/.+(Sync|Stream)$/],
                    errorFirst: !0,
                    promiseModule: Promise
                }, t);
                let filter = e => {
                    let match = t => "string" == typeof t ? e === t : t.test(e);
                    return t.include ? t.include.some(match) : !t.exclude.some(match)
                };
                for (let i in n = "function" == typeof e ? function() {
                        return t.excludeMain ? e.apply(this, arguments) : processFn(e, t).apply(this, arguments)
                    } : Object.create(Object.getPrototypeOf(e)), e) {
                    let o = e[i];
                    n[i] = "function" == typeof o && filter(i) ? processFn(o, t) : o
                }
                return n
            }
        },
        16625: function(e) {
            "use strict";
            let processFn = (e, t, n, i) => function(...o) {
                    let a = t.promiseModule;
                    return new a((a, l) => {
                        t.multiArgs ? o.push((...e) => {
                            t.errorFirst ? e[0] ? l(e) : (e.shift(), a(e)) : a(e)
                        }) : t.errorFirst ? o.push((e, t) => {
                            e ? l(e) : a(t)
                        }) : o.push(a);
                        let c = this === n ? i : this;
                        Reflect.apply(e, c, o)
                    })
                },
                t = new WeakMap;
            e.exports = (e, n) => {
                n = {
                    exclude: [/.+(?:Sync|Stream)$/],
                    errorFirst: !0,
                    promiseModule: Promise,
                    ...n
                };
                let i = typeof e;
                if (!(null !== e && ("object" === i || "function" === i))) throw TypeError(`Expected \`input\` to be a \`Function\` or \`Object\`, got \`${null===e?"null":i}\``);
                let filter = (e, i) => {
                        let o = t.get(e);
                        if (o || (o = {}, t.set(e, o)), i in o) return o[i];
                        let match = e => "string" == typeof e || "symbol" == typeof i ? i === e : e.test(i),
                            a = Reflect.getOwnPropertyDescriptor(e, i),
                            l = void 0 === a || a.writable || a.configurable,
                            c = n.include ? n.include.some(match) : !n.exclude.some(match),
                            u = c && l;
                        return o[i] = u, u
                    },
                    o = new WeakMap,
                    a = new Proxy(e, {
                        apply(e, t, i) {
                            let l = o.get(e);
                            if (l) return Reflect.apply(l, t, i);
                            let c = n.excludeMain ? e : processFn(e, n, a, e);
                            return o.set(e, c), Reflect.apply(c, t, i)
                        },
                        get(e, t) {
                            let i = e[t];
                            if (!filter(e, t) || i === Function.prototype[t]) return i;
                            let l = o.get(i);
                            if (l) return l;
                            if ("function" == typeof i) {
                                let t = processFn(i, n, a, e);
                                return o.set(i, t), t
                            }
                            return i
                        }
                    });
                return a
            }
        },
        21593: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Component: function() {
                    return b
                },
                Fragment: function() {
                    return k
                },
                cloneElement: function() {
                    return F
                },
                createContext: function() {
                    return G
                },
                createElement: function() {
                    return y
                },
                createRef: function() {
                    return _
                },
                h: function() {
                    return y
                },
                hydrate: function() {
                    return E
                },
                isValidElement: function() {
                    return l
                },
                options: function() {
                    return o
                },
                render: function() {
                    return D
                },
                toChildArray: function() {
                    return function S(e, t) {
                        return t = t || [], null == e || "boolean" == typeof e || (Q(e) ? e.some(function(e) {
                            S(e, t)
                        }) : t.push(e)), t
                    }
                }
            });
            var i, o, a, l, c, u, R, N, H, U = {},
                W = [],
                J = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
                Q = Array.isArray;

            function v(e, t) {
                for (var n in t) e[n] = t[n];
                return e
            }

            function p(e) {
                var t = e.parentNode;
                t && t.removeChild(e)
            }

            function y(e, t, n) {
                var o, a, l, c = {};
                for (l in t) "key" == l ? o = t[l] : "ref" == l ? a = t[l] : c[l] = t[l];
                if (arguments.length > 2 && (c.children = arguments.length > 3 ? i.call(arguments, 2) : n), "function" == typeof e && null != e.defaultProps)
                    for (l in e.defaultProps) void 0 === c[l] && (c[l] = e.defaultProps[l]);
                return d(e, c, o, a, null)
            }

            function d(e, t, n, i, l) {
                var c = {
                    type: e,
                    props: t,
                    key: n,
                    ref: i,
                    __k: null,
                    __: null,
                    __b: 0,
                    __e: null,
                    __d: void 0,
                    __c: null,
                    __h: null,
                    constructor: void 0,
                    __v: null == l ? ++a : l
                };
                return null == l && null != o.vnode && o.vnode(c), c
            }

            function _() {
                return {
                    current: null
                }
            }

            function k(e) {
                return e.children
            }

            function b(e, t) {
                this.props = e, this.context = t
            }

            function g(e, t) {
                if (null == t) return e.__ ? g(e.__, e.__.__k.indexOf(e) + 1) : null;
                for (var n; t < e.__k.length; t++)
                    if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
                return "function" == typeof e.type ? g(e) : null
            }

            function w(e) {
                (!e.__d && (e.__d = !0) && c.push(e) && !x.__r++ || u !== o.debounceRendering) && ((u = o.debounceRendering) || R)(x)
            }

            function x() {
                var e, t, n, i, o, a, l, u, R;
                for (c.sort(N); e = c.shift();) e.__d && (t = c.length, i = void 0, o = void 0, a = void 0, u = (l = (n = e).__v).__e, (R = n.__P) && (i = [], o = [], (a = v({}, l)).__v = l.__v + 1, L(R, l, a, n.__n, void 0 !== R.ownerSVGElement, null != l.__h ? [u] : null, i, null == u ? g(l) : u, l.__h, o), M(i, l, o), l.__e != u && function m(e) {
                    var t, n;
                    if (null != (e = e.__) && null != e.__c) {
                        for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
                            if (null != (n = e.__k[t]) && null != n.__e) {
                                e.__e = e.__c.base = n.__e;
                                break
                            }
                        return m(e)
                    }
                }(l)), c.length > t && c.sort(N));
                x.__r = 0
            }

            function P(e, t, n, i, o, a, l, c, u, R, N) {
                var H, J, Z, Y, K, X, ee, et, er, en = 0,
                    es = i && i.__k || W,
                    ei = es.length,
                    eo = ei,
                    ea = t.length;
                for (n.__k = [], H = 0; H < ea; H++) null != (Y = n.__k[H] = null == (Y = t[H]) || "boolean" == typeof Y || "function" == typeof Y ? null : "string" == typeof Y || "number" == typeof Y || "bigint" == typeof Y ? d(null, Y, null, null, Y) : Q(Y) ? d(k, {
                    children: Y
                }, null, null, null) : Y.__b > 0 ? d(Y.type, Y.props, Y.key, Y.ref ? Y.ref : null, Y.__v) : Y) ? (Y.__ = n, Y.__b = n.__b + 1, -1 === (et = function(e, t, n, i) {
                    var o = e.key,
                        a = e.type,
                        l = n - 1,
                        c = n + 1,
                        u = t[n];
                    if (null === u || u && o == u.key && a === u.type) return n;
                    if (i > (null != u ? 1 : 0))
                        for (; l >= 0 || c < t.length;) {
                            if (l >= 0) {
                                if ((u = t[l]) && o == u.key && a === u.type) return l;
                                l--
                            }
                            if (c < t.length) {
                                if ((u = t[c]) && o == u.key && a === u.type) return c;
                                c++
                            }
                        }
                    return -1
                }(Y, es, ee = H + en, eo)) ? Z = U : (Z = es[et] || U, es[et] = void 0, eo--), L(e, Y, Z, o, a, l, c, u, R, N), K = Y.__e, (J = Y.ref) && Z.ref != J && (Z.ref && O(Z.ref, null, Y), N.push(J, Y.__c || K, Y)), null != K && (null == X && (X = K), (er = Z === U || null === Z.__v) ? -1 == et && en-- : et !== ee && (et === ee + 1 ? en++ : et > ee ? eo > ea - ee ? en += et - ee : en-- : en = et < ee && et == ee - 1 ? et - ee : 0), ee = H + en, "function" != typeof Y.type || et === ee && Z.__k !== Y.__k ? "function" != typeof Y.type && (et !== ee || er) ? u = $(e, K, u) : void 0 !== Y.__d ? (u = Y.__d, Y.__d = void 0) : u = K.nextSibling : u = function C(e, t, n) {
                    for (var i, o = e.__k, a = 0; o && a < o.length; a++)(i = o[a]) && (i.__ = e, t = "function" == typeof i.type ? C(i, t, n) : $(n, i.__e, t));
                    return t
                }(Y, u, e), "function" == typeof n.type && (n.__d = u))) : (Z = es[H]) && null == Z.key && Z.__e && (Z.__e == u && (u = g(Z)), q(Z, Z, !1));
                for (n.__e = X, H = ei; H--;) null != es[H] && ("function" == typeof n.type && null != es[H].__e && es[H].__e == n.__d && (n.__d = es[H].__e.nextSibling), q(es[H], es[H]))
            }

            function $(e, t, n) {
                return null == n || n.parentNode !== e ? e.insertBefore(t, null) : t == n && null != t.parentNode || e.insertBefore(t, n), t.nextSibling
            }

            function I(e, t, n) {
                "-" === t[0] ? e.setProperty(t, null == n ? "" : n) : e[t] = null == n ? "" : "number" != typeof n || J.test(t) ? n : n + "px"
            }

            function T(e, t, n, i, o) {
                var a;
                e: if ("style" === t) {
                    if ("string" == typeof n) e.style.cssText = n;
                    else {
                        if ("string" == typeof i && (e.style.cssText = i = ""), i)
                            for (t in i) n && t in n || I(e.style, t, "");
                        if (n)
                            for (t in n) i && n[t] === i[t] || I(e.style, t, n[t])
                    }
                } else
                if ("o" === t[0] && "n" === t[1]) a = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + a] = n, n ? i || e.addEventListener(t, a ? z : j, a) : e.removeEventListener(t, a ? z : j, a);
                else if ("dangerouslySetInnerHTML" !== t) {
                    if (o) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
                    else if ("width" !== t && "height" !== t && "href" !== t && "list" !== t && "form" !== t && "tabIndex" !== t && "download" !== t && "rowSpan" !== t && "colSpan" !== t && t in e) try {
                        e[t] = null == n ? "" : n;
                        break e
                    } catch (e) {}
                    "function" == typeof n || (null == n || !1 === n && "-" !== t[4] ? e.removeAttribute(t) : e.setAttribute(t, n))
                }
            }

            function j(e) {
                return this.l[e.type + !1](o.event ? o.event(e) : e)
            }

            function z(e) {
                return this.l[e.type + !0](o.event ? o.event(e) : e)
            }

            function L(e, t, n, a, l, c, u, R, N, H) {
                var W, J, Z, Y, K, X, ee, et, er, en, es, ei, eo, ea, el, ec = t.type;
                if (void 0 !== t.constructor) return null;
                null != n.__h && (N = n.__h, R = t.__e = n.__e, t.__h = null, c = [R]), (W = o.__b) && W(t);
                e: if ("function" == typeof ec) try {
                    if (et = t.props, er = (W = ec.contextType) && a[W.__c], en = W ? er ? er.props.value : W.__ : a, n.__c ? ee = (J = t.__c = n.__c).__ = J.__E : ("prototype" in ec && ec.prototype.render ? t.__c = J = new ec(et, en) : (t.__c = J = new b(et, en), J.constructor = ec, J.render = B), er && er.sub(J), J.props = et, J.state || (J.state = {}), J.context = en, J.__n = a, Z = J.__d = !0, J.__h = [], J._sb = []), null == J.__s && (J.__s = J.state), null != ec.getDerivedStateFromProps && (J.__s == J.state && (J.__s = v({}, J.__s)), v(J.__s, ec.getDerivedStateFromProps(et, J.__s))), Y = J.props, K = J.state, J.__v = t, Z) null == ec.getDerivedStateFromProps && null != J.componentWillMount && J.componentWillMount(), null != J.componentDidMount && J.__h.push(J.componentDidMount);
                    else {
                        if (null == ec.getDerivedStateFromProps && et !== Y && null != J.componentWillReceiveProps && J.componentWillReceiveProps(et, en), !J.__e && (null != J.shouldComponentUpdate && !1 === J.shouldComponentUpdate(et, J.__s, en) || t.__v === n.__v)) {
                            for (t.__v !== n.__v && (J.props = et, J.state = J.__s, J.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(e) {
                                    e && (e.__ = t)
                                }), es = 0; es < J._sb.length; es++) J.__h.push(J._sb[es]);
                            J._sb = [], J.__h.length && u.push(J);
                            break e
                        }
                        null != J.componentWillUpdate && J.componentWillUpdate(et, J.__s, en), null != J.componentDidUpdate && J.__h.push(function() {
                            J.componentDidUpdate(Y, K, X)
                        })
                    }
                    if (J.context = en, J.props = et, J.__P = e, J.__e = !1, ei = o.__r, eo = 0, "prototype" in ec && ec.prototype.render) {
                        for (J.state = J.__s, J.__d = !1, ei && ei(t), W = J.render(J.props, J.state, J.context), ea = 0; ea < J._sb.length; ea++) J.__h.push(J._sb[ea]);
                        J._sb = []
                    } else
                        do J.__d = !1, ei && ei(t), W = J.render(J.props, J.state, J.context), J.state = J.__s; while (J.__d && ++eo < 25);
                    J.state = J.__s, null != J.getChildContext && (a = v(v({}, a), J.getChildContext())), Z || null == J.getSnapshotBeforeUpdate || (X = J.getSnapshotBeforeUpdate(Y, K)), P(e, Q(el = null != W && W.type === k && null == W.key ? W.props.children : W) ? el : [el], t, n, a, l, c, u, R, N, H), J.base = t.__e, t.__h = null, J.__h.length && u.push(J), ee && (J.__E = J.__ = null)
                } catch (e) {
                    t.__v = null, (N || null != c) && (t.__e = R, t.__h = !!N, c[c.indexOf(R)] = null), o.__e(e, t, n)
                } else null == c && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = function(e, t, n, o, a, l, c, u, R) {
                    var N, H, W, J = n.props,
                        Z = t.props,
                        Y = t.type,
                        K = 0;
                    if ("svg" === Y && (a = !0), null != l) {
                        for (; K < l.length; K++)
                            if ((N = l[K]) && "setAttribute" in N == !!Y && (Y ? N.localName === Y : 3 === N.nodeType)) {
                                e = N, l[K] = null;
                                break
                            }
                    }
                    if (null == e) {
                        if (null === Y) return document.createTextNode(Z);
                        e = a ? document.createElementNS("http://www.w3.org/2000/svg", Y) : document.createElement(Y, Z.is && Z), l = null, u = !1
                    }
                    if (null === Y) J === Z || u && e.data === Z || (e.data = Z);
                    else {
                        if (l = l && i.call(e.childNodes), H = (J = n.props || U).dangerouslySetInnerHTML, W = Z.dangerouslySetInnerHTML, !u) {
                            if (null != l)
                                for (J = {}, K = 0; K < e.attributes.length; K++) J[e.attributes[K].name] = e.attributes[K].value;
                            (W || H) && (W && (H && W.__html == H.__html || W.__html === e.innerHTML) || (e.innerHTML = W && W.__html || ""))
                        }
                        if (function(e, t, n, i, o) {
                                var a;
                                for (a in n) "children" === a || "key" === a || a in t || T(e, a, null, n[a], i);
                                for (a in t) o && "function" != typeof t[a] || "children" === a || "key" === a || "value" === a || "checked" === a || n[a] === t[a] || T(e, a, t[a], n[a], i)
                            }(e, Z, J, a, u), W) t.__k = [];
                        else if (P(e, Q(K = t.props.children) ? K : [K], t, n, o, a && "foreignObject" !== Y, l, c, l ? l[0] : n.__k && g(n, 0), u, R), null != l)
                            for (K = l.length; K--;) null != l[K] && p(l[K]);
                        u || ("value" in Z && void 0 !== (K = Z.value) && (K !== e.value || "progress" === Y && !K || "option" === Y && K !== J.value) && T(e, "value", K, J.value, !1), "checked" in Z && void 0 !== (K = Z.checked) && K !== e.checked && T(e, "checked", K, J.checked, !1))
                    }
                    return e
                }(n.__e, t, n, a, l, c, u, N, H);
                (W = o.diffed) && W(t)
            }

            function M(e, t, n) {
                for (var i = 0; i < n.length; i++) O(n[i], n[++i], n[++i]);
                o.__c && o.__c(t, e), e.some(function(t) {
                    try {
                        e = t.__h, t.__h = [], e.some(function(e) {
                            e.call(t)
                        })
                    } catch (e) {
                        o.__e(e, t.__v)
                    }
                })
            }

            function O(e, t, n) {
                try {
                    "function" == typeof e ? e(t) : e.current = t
                } catch (e) {
                    o.__e(e, n)
                }
            }

            function q(e, t, n) {
                var i, a;
                if (o.unmount && o.unmount(e), (i = e.ref) && (i.current && i.current !== e.__e || O(i, null, t)), null != (i = e.__c)) {
                    if (i.componentWillUnmount) try {
                        i.componentWillUnmount()
                    } catch (e) {
                        o.__e(e, t)
                    }
                    i.base = i.__P = null, e.__c = void 0
                }
                if (i = e.__k)
                    for (a = 0; a < i.length; a++) i[a] && q(i[a], t, n || "function" != typeof e.type);
                n || null == e.__e || p(e.__e), e.__ = e.__e = e.__d = void 0
            }

            function B(e, t, n) {
                return this.constructor(e, n)
            }

            function D(e, t, n) {
                var a, l, c, u;
                o.__ && o.__(e, t), l = (a = "function" == typeof n) ? null : n && n.__k || t.__k, c = [], u = [], L(t, e = (!a && n || t).__k = y(k, null, [e]), l || U, U, void 0 !== t.ownerSVGElement, !a && n ? [n] : l ? null : t.firstChild ? i.call(t.childNodes) : null, c, !a && n ? n : l ? l.__e : t.firstChild, a, u), M(c, e, u)
            }

            function E(e, t) {
                D(e, t, E)
            }

            function F(e, t, n) {
                var o, a, l, c, u = v({}, e.props);
                for (l in e.type && e.type.defaultProps && (c = e.type.defaultProps), t) "key" == l ? o = t[l] : "ref" == l ? a = t[l] : u[l] = void 0 === t[l] && void 0 !== c ? c[l] : t[l];
                return arguments.length > 2 && (u.children = arguments.length > 3 ? i.call(arguments, 2) : n), d(e.type, u, o || e.key, a || e.ref, null)
            }

            function G(e, t) {
                var n = {
                    __c: t = "__cC" + H++,
                    __: e,
                    Consumer: function(e, t) {
                        return e.children(t)
                    },
                    Provider: function(e) {
                        var n, i;
                        return this.getChildContext || (n = [], (i = {})[t] = this, this.getChildContext = function() {
                            return i
                        }, this.shouldComponentUpdate = function(e) {
                            this.props.value !== e.value && n.some(function(e) {
                                e.__e = !0, w(e)
                            })
                        }, this.sub = function(e) {
                            n.push(e);
                            var t = e.componentWillUnmount;
                            e.componentWillUnmount = function() {
                                n.splice(n.indexOf(e), 1), t && t.call(e)
                            }
                        }), e.children
                    }
                };
                return n.Provider.__ = n.Consumer.contextType = n
            }
            i = W.slice, o = {
                __e: function(e, t, n, i) {
                    for (var o, a, l; t = t.__;)
                        if ((o = t.__c) && !o.__) try {
                            if ((a = o.constructor) && null != a.getDerivedStateFromError && (o.setState(a.getDerivedStateFromError(e)), l = o.__d), null != o.componentDidCatch && (o.componentDidCatch(e, i || {}), l = o.__d), l) return o.__E = o
                        } catch (t) {
                            e = t
                        }
                    throw e
                }
            }, a = 0, l = function(e) {
                return null != e && void 0 === e.constructor
            }, b.prototype.setState = function(e, t) {
                var n;
                n = null != this.__s && this.__s !== this.state ? this.__s : this.__s = v({}, this.state), "function" == typeof e && (e = e(v({}, n), this.props)), e && v(n, e), null != e && this.__v && (t && this._sb.push(t), w(this))
            }, b.prototype.forceUpdate = function(e) {
                this.__v && (this.__e = !0, e && this.__h.push(e), w(this))
            }, b.prototype.render = k, c = [], R = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, N = function(e, t) {
                return e.__v.__b - t.__v.__b
            }, x.__r = 0, H = 0
        },
        54129: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useCallback: function() {
                    return T
                },
                useContext: function() {
                    return q
                },
                useDebugValue: function() {
                    return x
                },
                useEffect: function() {
                    return p
                },
                useErrorBoundary: function() {
                    return P
                },
                useId: function() {
                    return V
                },
                useImperativeHandle: function() {
                    return A
                },
                useLayoutEffect: function() {
                    return y
                },
                useMemo: function() {
                    return F
                },
                useReducer: function() {
                    return s
                },
                useRef: function() {
                    return _
                },
                useState: function() {
                    return h
                }
            });
            var i, o, a, l, c = n(21593),
                u = 0,
                R = [],
                N = [],
                H = c.options.__b,
                U = c.options.__r,
                W = c.options.diffed,
                J = c.options.__c,
                Q = c.options.unmount;

            function d(e, t) {
                c.options.__h && c.options.__h(o, e, u || t), u = 0;
                var n = o.__H || (o.__H = {
                    __: [],
                    __h: []
                });
                return e >= n.__.length && n.__.push({
                    __V: N
                }), n.__[e]
            }

            function h(e) {
                return u = 1, s(B, e)
            }

            function s(e, t, n) {
                var a = d(i++, 2);
                if (a.t = e, !a.__c && (a.__ = [n ? n(t) : B(void 0, t), function(e) {
                        var t = a.__N ? a.__N[0] : a.__[0],
                            n = a.t(t, e);
                        t !== n && (a.__N = [n, a.__[1]], a.__c.setState({}))
                    }], a.__c = o, !o.u)) {
                    var f = function(e, t, n) {
                        if (!a.__c.__H) return !0;
                        var i = a.__c.__H.__.filter(function(e) {
                            return e.__c
                        });
                        if (i.every(function(e) {
                                return !e.__N
                            })) return !l || l.call(this, e, t, n);
                        var o = !1;
                        return i.forEach(function(e) {
                            if (e.__N) {
                                var t = e.__[0];
                                e.__ = e.__N, e.__N = void 0, t !== e.__[0] && (o = !0)
                            }
                        }), !(!o && a.__c.props === e) && (!l || l.call(this, e, t, n))
                    };
                    o.u = !0;
                    var l = o.shouldComponentUpdate,
                        c = o.componentWillUpdate;
                    o.componentWillUpdate = function(e, t, n) {
                        if (this.__e) {
                            var i = l;
                            l = void 0, f(e, t, n), l = i
                        }
                        c && c.call(this, e, t, n)
                    }, o.shouldComponentUpdate = f
                }
                return a.__N || a.__
            }

            function p(e, t) {
                var n = d(i++, 3);
                !c.options.__s && z(n.__H, t) && (n.__ = e, n.i = t, o.__H.__h.push(n))
            }

            function y(e, t) {
                var n = d(i++, 4);
                !c.options.__s && z(n.__H, t) && (n.__ = e, n.i = t, o.__h.push(n))
            }

            function _(e) {
                return u = 5, F(function() {
                    return {
                        current: e
                    }
                }, [])
            }

            function A(e, t, n) {
                u = 6, y(function() {
                    return "function" == typeof e ? (e(t()), function() {
                        return e(null)
                    }) : e ? (e.current = t(), function() {
                        return e.current = null
                    }) : void 0
                }, null == n ? n : n.concat(e))
            }

            function F(e, t) {
                var n = d(i++, 7);
                return z(n.__H, t) ? (n.__V = e(), n.i = t, n.__h = e, n.__V) : n.__
            }

            function T(e, t) {
                return u = 8, F(function() {
                    return e
                }, t)
            }

            function q(e) {
                var t = o.context[e.__c],
                    n = d(i++, 9);
                return n.c = e, t ? (null == n.__ && (n.__ = !0, t.sub(o)), t.props.value) : e.__
            }

            function x(e, t) {
                c.options.useDebugValue && c.options.useDebugValue(t ? t(e) : e)
            }

            function P(e) {
                var t = d(i++, 10),
                    n = h();
                return t.__ = e, o.componentDidCatch || (o.componentDidCatch = function(e, i) {
                    t.__ && t.__(e, i), n[1](e)
                }), [n[0], function() {
                    n[1](void 0)
                }]
            }

            function V() {
                var e = d(i++, 11);
                if (!e.__) {
                    for (var t = o.__v; null !== t && !t.__m && null !== t.__;) t = t.__;
                    var n = t.__m || (t.__m = [0, 0]);
                    e.__ = "P" + n[0] + "-" + n[1]++
                }
                return e.__
            }

            function b() {
                for (var e; e = R.shift();)
                    if (e.__P && e.__H) try {
                        e.__H.__h.forEach(k), e.__H.__h.forEach(w), e.__H.__h = []
                    } catch (t) {
                        e.__H.__h = [], c.options.__e(t, e.__v)
                    }
            }
            c.options.__b = function(e) {
                o = null, H && H(e)
            }, c.options.__r = function(e) {
                U && U(e), i = 0;
                var t = (o = e.__c).__H;
                t && (a === o ? (t.__h = [], o.__h = [], t.__.forEach(function(e) {
                    e.__N && (e.__ = e.__N), e.__V = N, e.__N = e.i = void 0
                })) : (t.__h.forEach(k), t.__h.forEach(w), t.__h = [], i = 0)), a = o
            }, c.options.diffed = function(e) {
                W && W(e);
                var t = e.__c;
                t && t.__H && (t.__H.__h.length && (1 !== R.push(t) && l === c.options.requestAnimationFrame || ((l = c.options.requestAnimationFrame) || function(e) {
                    var t, r = function() {
                            clearTimeout(n), Z && cancelAnimationFrame(t), setTimeout(e)
                        },
                        n = setTimeout(r, 100);
                    Z && (t = requestAnimationFrame(r))
                })(b)), t.__H.__.forEach(function(e) {
                    e.i && (e.__H = e.i), e.__V !== N && (e.__ = e.__V), e.i = void 0, e.__V = N
                })), a = o = null
            }, c.options.__c = function(e, t) {
                t.some(function(e) {
                    try {
                        e.__h.forEach(k), e.__h = e.__h.filter(function(e) {
                            return !e.__ || w(e)
                        })
                    } catch (n) {
                        t.some(function(e) {
                            e.__h && (e.__h = [])
                        }), t = [], c.options.__e(n, e.__v)
                    }
                }), J && J(e, t)
            }, c.options.unmount = function(e) {
                Q && Q(e);
                var t, n = e.__c;
                n && n.__H && (n.__H.__.forEach(function(e) {
                    try {
                        k(e)
                    } catch (e) {
                        t = e
                    }
                }), n.__H = void 0, t && c.options.__e(t, n.__v))
            };
            var Z = "function" == typeof requestAnimationFrame;

            function k(e) {
                var t = o,
                    n = e.__c;
                "function" == typeof n && (e.__c = void 0, n()), o = t
            }

            function w(e) {
                var t = o;
                e.__c = e.__(), o = t
            }

            function z(e, t) {
                return !e || e.length !== t.length || t.some(function(t, n) {
                    return t !== e[n]
                })
            }

            function B(e, t) {
                return "function" == typeof t ? t(e) : t
            }
        },
        61573: function(e, t, n) {
            let i = Symbol("SemVer ANY");
            let Comparator = class Comparator {
                static get ANY() {
                    return i
                }
                constructor(e, t) {
                    if (t = o(t), e instanceof Comparator) {
                        if (!!t.loose === e.loose) return e;
                        e = e.value
                    }
                    u("comparator", e = e.trim().split(/\s+/).join(" "), t), this.options = t, this.loose = !!t.loose, this.parse(e), this.semver === i ? this.value = "" : this.value = this.operator + this.semver.version, u("comp", this)
                }
                parse(e) {
                    let t = this.options.loose ? a[l.COMPARATORLOOSE] : a[l.COMPARATOR],
                        n = e.match(t);
                    if (!n) throw TypeError(`Invalid comparator: ${e}`);
                    this.operator = void 0 !== n[1] ? n[1] : "", "=" === this.operator && (this.operator = ""), n[2] ? this.semver = new R(n[2], this.options.loose) : this.semver = i
                }
                toString() {
                    return this.value
                }
                test(e) {
                    if (u("Comparator.test", e, this.options.loose), this.semver === i || e === i) return !0;
                    if ("string" == typeof e) try {
                        e = new R(e, this.options)
                    } catch (e) {
                        return !1
                    }
                    return c(e, this.operator, this.semver, this.options)
                }
                intersects(e, t) {
                    if (!(e instanceof Comparator)) throw TypeError("a Comparator is required");
                    return "" === this.operator ? "" === this.value || new N(e.value, t).test(this.value) : "" === e.operator ? "" === e.value || new N(this.value, t).test(e.semver) : !((t = o(t)).includePrerelease && ("<0.0.0-0" === this.value || "<0.0.0-0" === e.value) || !t.includePrerelease && (this.value.startsWith("<0.0.0") || e.value.startsWith("<0.0.0"))) && !!(this.operator.startsWith(">") && e.operator.startsWith(">") || this.operator.startsWith("<") && e.operator.startsWith("<") || this.semver.version === e.semver.version && this.operator.includes("=") && e.operator.includes("=") || c(this.semver, "<", e.semver, t) && this.operator.startsWith(">") && e.operator.startsWith("<") || c(this.semver, ">", e.semver, t) && this.operator.startsWith("<") && e.operator.startsWith(">"))
                }
            };
            e.exports = Comparator;
            let o = n(13961),
                {
                    safeRe: a,
                    t: l
                } = n(67881),
                c = n(9358),
                u = n(41608),
                R = n(83282),
                N = n(34076)
        },
        34076: function(e, t, n) {
            let Range = class Range {
                constructor(e, t) {
                    if (t = a(t), e instanceof Range) {
                        if (!!t.loose === e.loose && !!t.includePrerelease === e.includePrerelease) return e;
                        return new Range(e.raw, t)
                    }
                    if (e instanceof l) return this.raw = e.value, this.set = [
                        [e]
                    ], this.format(), this;
                    if (this.options = t, this.loose = !!t.loose, this.includePrerelease = !!t.includePrerelease, this.raw = e.trim().split(/\s+/).join(" "), this.set = this.raw.split("||").map(e => this.parseRange(e.trim())).filter(e => e.length), !this.set.length) throw TypeError(`Invalid SemVer Range: ${this.raw}`);
                    if (this.set.length > 1) {
                        let e = this.set[0];
                        if (this.set = this.set.filter(e => !isNullSet(e[0])), 0 === this.set.length) this.set = [e];
                        else if (this.set.length > 1) {
                            for (let e of this.set)
                                if (1 === e.length && isAny(e[0])) {
                                    this.set = [e];
                                    break
                                }
                        }
                    }
                    this.format()
                }
                format() {
                    return this.range = this.set.map(e => e.join(" ").trim()).join("||").trim(), this.range
                }
                toString() {
                    return this.range
                }
                parseRange(e) {
                    let t = (this.options.includePrerelease && J) | (this.options.loose && Q),
                        n = t + ":" + e,
                        i = o.get(n);
                    if (i) return i;
                    let a = this.options.loose,
                        u = a ? R[N.HYPHENRANGELOOSE] : R[N.HYPHENRANGE];
                    c("hyphen replace", e = e.replace(u, hyphenReplace(this.options.includePrerelease))), c("comparator trim", e = e.replace(R[N.COMPARATORTRIM], H)), c("tilde trim", e = e.replace(R[N.TILDETRIM], U)), c("caret trim", e = e.replace(R[N.CARETTRIM], W));
                    let Z = e.split(" ").map(e => parseComparator(e, this.options)).join(" ").split(/\s+/).map(e => replaceGTE0(e, this.options));
                    a && (Z = Z.filter(e => (c("loose invalid filter", e, this.options), !!e.match(R[N.COMPARATORLOOSE])))), c("range list", Z);
                    let Y = new Map,
                        K = Z.map(e => new l(e, this.options));
                    for (let e of K) {
                        if (isNullSet(e)) return [e];
                        Y.set(e.value, e)
                    }
                    Y.size > 1 && Y.has("") && Y.delete("");
                    let X = [...Y.values()];
                    return o.set(n, X), X
                }
                intersects(e, t) {
                    if (!(e instanceof Range)) throw TypeError("a Range is required");
                    return this.set.some(n => isSatisfiable(n, t) && e.set.some(e => isSatisfiable(e, t) && n.every(n => e.every(e => n.intersects(e, t)))))
                }
                test(e) {
                    if (!e) return !1;
                    if ("string" == typeof e) try {
                        e = new u(e, this.options)
                    } catch (e) {
                        return !1
                    }
                    for (let t = 0; t < this.set.length; t++)
                        if (testSet(this.set[t], e, this.options)) return !0;
                    return !1
                }
            };
            e.exports = Range;
            let i = n(75566),
                o = new i({
                    max: 1e3
                }),
                a = n(13961),
                l = n(61573),
                c = n(41608),
                u = n(83282),
                {
                    safeRe: R,
                    t: N,
                    comparatorTrimReplace: H,
                    tildeTrimReplace: U,
                    caretTrimReplace: W
                } = n(67881),
                {
                    FLAG_INCLUDE_PRERELEASE: J,
                    FLAG_LOOSE: Q
                } = n(46010),
                isNullSet = e => "<0.0.0-0" === e.value,
                isAny = e => "" === e.value,
                isSatisfiable = (e, t) => {
                    let n = !0,
                        i = e.slice(),
                        o = i.pop();
                    for (; n && i.length;) n = i.every(e => o.intersects(e, t)), o = i.pop();
                    return n
                },
                parseComparator = (e, t) => (c("comp", e, t), c("caret", e = replaceCarets(e, t)), c("tildes", e = replaceTildes(e, t)), c("xrange", e = replaceXRanges(e, t)), c("stars", e = replaceStars(e, t)), e),
                isX = e => !e || "x" === e.toLowerCase() || "*" === e,
                replaceTildes = (e, t) => e.trim().split(/\s+/).map(e => replaceTilde(e, t)).join(" "),
                replaceTilde = (e, t) => {
                    let n = t.loose ? R[N.TILDELOOSE] : R[N.TILDE];
                    return e.replace(n, (t, n, i, o, a) => {
                        let l;
                        return c("tilde", e, t, n, i, o, a), isX(n) ? l = "" : isX(i) ? l = `>=${n}.0.0 <${+n+1}.0.0-0` : isX(o) ? l = `>=${n}.${i}.0 <${n}.${+i+1}.0-0` : a ? (c("replaceTilde pr", a), l = `>=${n}.${i}.${o}-${a} <${n}.${+i+1}.0-0`) : l = `>=${n}.${i}.${o} <${n}.${+i+1}.0-0`, c("tilde return", l), l
                    })
                },
                replaceCarets = (e, t) => e.trim().split(/\s+/).map(e => replaceCaret(e, t)).join(" "),
                replaceCaret = (e, t) => {
                    c("caret", e, t);
                    let n = t.loose ? R[N.CARETLOOSE] : R[N.CARET],
                        i = t.includePrerelease ? "-0" : "";
                    return e.replace(n, (t, n, o, a, l) => {
                        let u;
                        return c("caret", e, t, n, o, a, l), isX(n) ? u = "" : isX(o) ? u = `>=${n}.0.0${i} <${+n+1}.0.0-0` : isX(a) ? u = "0" === n ? `>=${n}.${o}.0${i} <${n}.${+o+1}.0-0` : `>=${n}.${o}.0${i} <${+n+1}.0.0-0` : l ? (c("replaceCaret pr", l), u = "0" === n ? "0" === o ? `>=${n}.${o}.${a}-${l} <${n}.${o}.${+a+1}-0` : `>=${n}.${o}.${a}-${l} <${n}.${+o+1}.0-0` : `>=${n}.${o}.${a}-${l} <${+n+1}.0.0-0`) : (c("no pr"), u = "0" === n ? "0" === o ? `>=${n}.${o}.${a}${i} <${n}.${o}.${+a+1}-0` : `>=${n}.${o}.${a}${i} <${n}.${+o+1}.0-0` : `>=${n}.${o}.${a} <${+n+1}.0.0-0`), c("caret return", u), u
                    })
                },
                replaceXRanges = (e, t) => (c("replaceXRanges", e, t), e.split(/\s+/).map(e => replaceXRange(e, t)).join(" ")),
                replaceXRange = (e, t) => {
                    e = e.trim();
                    let n = t.loose ? R[N.XRANGELOOSE] : R[N.XRANGE];
                    return e.replace(n, (n, i, o, a, l, u) => {
                        c("xRange", e, n, i, o, a, l, u);
                        let R = isX(o),
                            N = R || isX(a),
                            H = N || isX(l);
                        return "=" === i && H && (i = ""), u = t.includePrerelease ? "-0" : "", R ? n = ">" === i || "<" === i ? "<0.0.0-0" : "*" : i && H ? (N && (a = 0), l = 0, ">" === i ? (i = ">=", N ? (o = +o + 1, a = 0) : a = +a + 1, l = 0) : "<=" === i && (i = "<", N ? o = +o + 1 : a = +a + 1), "<" === i && (u = "-0"), n = `${i+o}.${a}.${l}${u}`) : N ? n = `>=${o}.0.0${u} <${+o+1}.0.0-0` : H && (n = `>=${o}.${a}.0${u} <${o}.${+a+1}.0-0`), c("xRange return", n), n
                    })
                },
                replaceStars = (e, t) => (c("replaceStars", e, t), e.trim().replace(R[N.STAR], "")),
                replaceGTE0 = (e, t) => (c("replaceGTE0", e, t), e.trim().replace(R[t.includePrerelease ? N.GTE0PRE : N.GTE0], "")),
                hyphenReplace = e => (t, n, i, o, a, l, c, u, R, N, H, U, W) => (n = isX(i) ? "" : isX(o) ? `>=${i}.0.0${e?"-0":""}` : isX(a) ? `>=${i}.${o}.0${e?"-0":""}` : l ? `>=${n}` : `>=${n}${e?"-0":""}`, u = isX(R) ? "" : isX(N) ? `<${+R+1}.0.0-0` : isX(H) ? `<${R}.${+N+1}.0-0` : U ? `<=${R}.${N}.${H}-${U}` : e ? `<${R}.${N}.${+H+1}-0` : `<=${u}`, `${n} ${u}`.trim()),
                testSet = (e, t, n) => {
                    for (let n = 0; n < e.length; n++)
                        if (!e[n].test(t)) return !1;
                    if (t.prerelease.length && !n.includePrerelease) {
                        for (let n = 0; n < e.length; n++)
                            if (c(e[n].semver), e[n].semver !== l.ANY && e[n].semver.prerelease.length > 0) {
                                let i = e[n].semver;
                                if (i.major === t.major && i.minor === t.minor && i.patch === t.patch) return !0
                            }
                        return !1
                    }
                    return !0
                }
        },
        83282: function(e, t, n) {
            let i = n(41608),
                {
                    MAX_LENGTH: o,
                    MAX_SAFE_INTEGER: a
                } = n(46010),
                {
                    safeRe: l,
                    t: c
                } = n(67881),
                u = n(13961),
                {
                    compareIdentifiers: R
                } = n(29995);
            let SemVer = class SemVer {
                constructor(e, t) {
                    if (t = u(t), e instanceof SemVer) {
                        if (!!t.loose === e.loose && !!t.includePrerelease === e.includePrerelease) return e;
                        e = e.version
                    } else if ("string" != typeof e) throw TypeError(`Invalid version. Must be a string. Got type "${typeof e}".`);
                    if (e.length > o) throw TypeError(`version is longer than ${o} characters`);
                    i("SemVer", e, t), this.options = t, this.loose = !!t.loose, this.includePrerelease = !!t.includePrerelease;
                    let n = e.trim().match(t.loose ? l[c.LOOSE] : l[c.FULL]);
                    if (!n) throw TypeError(`Invalid Version: ${e}`);
                    if (this.raw = e, this.major = +n[1], this.minor = +n[2], this.patch = +n[3], this.major > a || this.major < 0) throw TypeError("Invalid major version");
                    if (this.minor > a || this.minor < 0) throw TypeError("Invalid minor version");
                    if (this.patch > a || this.patch < 0) throw TypeError("Invalid patch version");
                    n[4] ? this.prerelease = n[4].split(".").map(e => {
                        if (/^[0-9]+$/.test(e)) {
                            let t = +e;
                            if (t >= 0 && t < a) return t
                        }
                        return e
                    }) : this.prerelease = [], this.build = n[5] ? n[5].split(".") : [], this.format()
                }
                format() {
                    return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), this.version
                }
                toString() {
                    return this.version
                }
                compare(e) {
                    if (i("SemVer.compare", this.version, this.options, e), !(e instanceof SemVer)) {
                        if ("string" == typeof e && e === this.version) return 0;
                        e = new SemVer(e, this.options)
                    }
                    return e.version === this.version ? 0 : this.compareMain(e) || this.comparePre(e)
                }
                compareMain(e) {
                    return e instanceof SemVer || (e = new SemVer(e, this.options)), R(this.major, e.major) || R(this.minor, e.minor) || R(this.patch, e.patch)
                }
                comparePre(e) {
                    if (e instanceof SemVer || (e = new SemVer(e, this.options)), this.prerelease.length && !e.prerelease.length) return -1;
                    if (!this.prerelease.length && e.prerelease.length) return 1;
                    if (!this.prerelease.length && !e.prerelease.length) return 0;
                    let t = 0;
                    do {
                        let n = this.prerelease[t],
                            o = e.prerelease[t];
                        if (i("prerelease compare", t, n, o), void 0 === n && void 0 === o) return 0;
                        if (void 0 === o) return 1;
                        if (void 0 === n) return -1;
                        if (n === o) continue;
                        else return R(n, o)
                    } while (++t)
                }
                compareBuild(e) {
                    e instanceof SemVer || (e = new SemVer(e, this.options));
                    let t = 0;
                    do {
                        let n = this.build[t],
                            o = e.build[t];
                        if (i("prerelease compare", t, n, o), void 0 === n && void 0 === o) return 0;
                        if (void 0 === o) return 1;
                        if (void 0 === n) return -1;
                        if (n === o) continue;
                        else return R(n, o)
                    } while (++t)
                }
                inc(e, t, n) {
                    switch (e) {
                        case "premajor":
                            this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", t, n);
                            break;
                        case "preminor":
                            this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", t, n);
                            break;
                        case "prepatch":
                            this.prerelease.length = 0, this.inc("patch", t, n), this.inc("pre", t, n);
                            break;
                        case "prerelease":
                            0 === this.prerelease.length && this.inc("patch", t, n), this.inc("pre", t, n);
                            break;
                        case "major":
                            (0 !== this.minor || 0 !== this.patch || 0 === this.prerelease.length) && this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
                            break;
                        case "minor":
                            (0 !== this.patch || 0 === this.prerelease.length) && this.minor++, this.patch = 0, this.prerelease = [];
                            break;
                        case "patch":
                            0 === this.prerelease.length && this.patch++, this.prerelease = [];
                            break;
                        case "pre":
                            {
                                let e = Number(n) ? 1 : 0;
                                if (!t && !1 === n) throw Error("invalid increment argument: identifier is empty");
                                if (0 === this.prerelease.length) this.prerelease = [e];
                                else {
                                    let i = this.prerelease.length;
                                    for (; --i >= 0;) "number" == typeof this.prerelease[i] && (this.prerelease[i]++, i = -2);
                                    if (-1 === i) {
                                        if (t === this.prerelease.join(".") && !1 === n) throw Error("invalid increment argument: identifier already exists");
                                        this.prerelease.push(e)
                                    }
                                }
                                if (t) {
                                    let i = [t, e];
                                    !1 === n && (i = [t]), 0 === R(this.prerelease[0], t) ? isNaN(this.prerelease[1]) && (this.prerelease = i) : this.prerelease = i
                                }
                                break
                            }
                        default:
                            throw Error(`invalid increment argument: ${e}`)
                    }
                    return this.raw = this.format(), this.build.length && (this.raw += `+${this.build.join(".")}`), this
                }
            };
            e.exports = SemVer
        },
        47795: function(e, t, n) {
            let i = n(68524);
            e.exports = (e, t) => {
                let n = i(e.trim().replace(/^[=v]+/, ""), t);
                return n ? n.version : null
            }
        },
        9358: function(e, t, n) {
            let i = n(50623),
                o = n(10495),
                a = n(39302),
                l = n(14395),
                c = n(26002),
                u = n(9512);
            e.exports = (e, t, n, R) => {
                switch (t) {
                    case "===":
                        return "object" == typeof e && (e = e.version), "object" == typeof n && (n = n.version), e === n;
                    case "!==":
                        return "object" == typeof e && (e = e.version), "object" == typeof n && (n = n.version), e !== n;
                    case "":
                    case "=":
                    case "==":
                        return i(e, n, R);
                    case "!=":
                        return o(e, n, R);
                    case ">":
                        return a(e, n, R);
                    case ">=":
                        return l(e, n, R);
                    case "<":
                        return c(e, n, R);
                    case "<=":
                        return u(e, n, R);
                    default:
                        throw TypeError(`Invalid operator: ${t}`)
                }
            }
        },
        71024: function(e, t, n) {
            let i = n(83282),
                o = n(68524),
                {
                    safeRe: a,
                    t: l
                } = n(67881);
            e.exports = (e, t) => {
                if (e instanceof i) return e;
                if ("number" == typeof e && (e = String(e)), "string" != typeof e) return null;
                let n = null;
                if ((t = t || {}).rtl) {
                    let i;
                    let o = t.includePrerelease ? a[l.COERCERTLFULL] : a[l.COERCERTL];
                    for (;
                        (i = o.exec(e)) && (!n || n.index + n[0].length !== e.length);) n && i.index + i[0].length === n.index + n[0].length || (n = i), o.lastIndex = i.index + i[1].length + i[2].length;
                    o.lastIndex = -1
                } else n = e.match(t.includePrerelease ? a[l.COERCEFULL] : a[l.COERCE]);
                if (null === n) return null;
                let c = n[2],
                    u = n[3] || "0",
                    R = n[4] || "0",
                    N = t.includePrerelease && n[5] ? `-${n[5]}` : "",
                    H = t.includePrerelease && n[6] ? `+${n[6]}` : "";
                return o(`${c}.${u}.${R}${N}${H}`, t)
            }
        },
        30972: function(e, t, n) {
            let i = n(83282);
            e.exports = (e, t, n) => {
                let o = new i(e, n),
                    a = new i(t, n);
                return o.compare(a) || o.compareBuild(a)
            }
        },
        52857: function(e, t, n) {
            let i = n(85343);
            e.exports = (e, t) => i(e, t, !0)
        },
        85343: function(e, t, n) {
            let i = n(83282);
            e.exports = (e, t, n) => new i(e, n).compare(new i(t, n))
        },
        66834: function(e, t, n) {
            let i = n(68524);
            e.exports = (e, t) => {
                let n = i(e, null, !0),
                    o = i(t, null, !0),
                    a = n.compare(o);
                if (0 === a) return null;
                let l = a > 0,
                    c = l ? n : o,
                    u = l ? o : n,
                    R = !!c.prerelease.length,
                    N = !!u.prerelease.length;
                if (N && !R) return u.patch || u.minor ? c.patch ? "patch" : c.minor ? "minor" : "major" : "major";
                let H = R ? "pre" : "";
                return n.major !== o.major ? H + "major" : n.minor !== o.minor ? H + "minor" : n.patch !== o.patch ? H + "patch" : "prerelease"
            }
        },
        50623: function(e, t, n) {
            let i = n(85343);
            e.exports = (e, t, n) => 0 === i(e, t, n)
        },
        39302: function(e, t, n) {
            let i = n(85343);
            e.exports = (e, t, n) => i(e, t, n) > 0
        },
        14395: function(e, t, n) {
            let i = n(85343);
            e.exports = (e, t, n) => i(e, t, n) >= 0
        },
        15630: function(e, t, n) {
            let i = n(83282);
            e.exports = (e, t, n, o, a) => {
                "string" == typeof n && (a = o, o = n, n = void 0);
                try {
                    return new i(e instanceof i ? e.version : e, n).inc(t, o, a).version
                } catch (e) {
                    return null
                }
            }
        },
        26002: function(e, t, n) {
            let i = n(85343);
            e.exports = (e, t, n) => 0 > i(e, t, n)
        },
        9512: function(e, t, n) {
            let i = n(85343);
            e.exports = (e, t, n) => 0 >= i(e, t, n)
        },
        705: function(e, t, n) {
            let i = n(83282);
            e.exports = (e, t) => new i(e, t).major
        },
        51538: function(e, t, n) {
            let i = n(83282);
            e.exports = (e, t) => new i(e, t).minor
        },
        10495: function(e, t, n) {
            let i = n(85343);
            e.exports = (e, t, n) => 0 !== i(e, t, n)
        },
        68524: function(e, t, n) {
            let i = n(83282);
            e.exports = (e, t, n = !1) => {
                if (e instanceof i) return e;
                try {
                    return new i(e, t)
                } catch (e) {
                    if (!n) return null;
                    throw e
                }
            }
        },
        31210: function(e, t, n) {
            let i = n(83282);
            e.exports = (e, t) => new i(e, t).patch
        },
        29255: function(e, t, n) {
            let i = n(68524);
            e.exports = (e, t) => {
                let n = i(e, t);
                return n && n.prerelease.length ? n.prerelease : null
            }
        },
        38607: function(e, t, n) {
            let i = n(85343);
            e.exports = (e, t, n) => i(t, e, n)
        },
        2803: function(e, t, n) {
            let i = n(30972);
            e.exports = (e, t) => e.sort((e, n) => i(n, e, t))
        },
        27465: function(e, t, n) {
            let i = n(34076);
            e.exports = (e, t, n) => {
                try {
                    t = new i(t, n)
                } catch (e) {
                    return !1
                }
                return t.test(e)
            }
        },
        18204: function(e, t, n) {
            let i = n(30972);
            e.exports = (e, t) => e.sort((e, n) => i(e, n, t))
        },
        8107: function(e, t, n) {
            let i = n(68524);
            e.exports = (e, t) => {
                let n = i(e, t);
                return n ? n.version : null
            }
        },
        53786: function(e, t, n) {
            let i = n(67881),
                o = n(46010),
                a = n(83282),
                l = n(29995),
                c = n(68524),
                u = n(8107),
                R = n(47795),
                N = n(15630),
                H = n(66834),
                U = n(705),
                W = n(51538),
                J = n(31210),
                Q = n(29255),
                Z = n(85343),
                Y = n(38607),
                K = n(52857),
                X = n(30972),
                ee = n(18204),
                et = n(2803),
                er = n(39302),
                en = n(26002),
                es = n(50623),
                ei = n(10495),
                eo = n(14395),
                ea = n(9512),
                el = n(9358),
                ec = n(71024),
                eu = n(61573),
                eh = n(34076),
                ed = n(27465),
                ep = n(10611),
                ef = n(79648),
                eg = n(81697),
                em = n(17049),
                ey = n(77248),
                e_ = n(38567),
                eb = n(20595),
                ev = n(45100),
                eE = n(15458),
                ew = n(91471),
                ek = n(18394);
            e.exports = {
                parse: c,
                valid: u,
                clean: R,
                inc: N,
                diff: H,
                major: U,
                minor: W,
                patch: J,
                prerelease: Q,
                compare: Z,
                rcompare: Y,
                compareLoose: K,
                compareBuild: X,
                sort: ee,
                rsort: et,
                gt: er,
                lt: en,
                eq: es,
                neq: ei,
                gte: eo,
                lte: ea,
                cmp: el,
                coerce: ec,
                Comparator: eu,
                Range: eh,
                satisfies: ed,
                toComparators: ep,
                maxSatisfying: ef,
                minSatisfying: eg,
                minVersion: em,
                validRange: ey,
                outside: e_,
                gtr: eb,
                ltr: ev,
                intersects: eE,
                simplifyRange: ew,
                subset: ek,
                SemVer: a,
                re: i.re,
                src: i.src,
                tokens: i.t,
                SEMVER_SPEC_VERSION: o.SEMVER_SPEC_VERSION,
                RELEASE_TYPES: o.RELEASE_TYPES,
                compareIdentifiers: l.compareIdentifiers,
                rcompareIdentifiers: l.rcompareIdentifiers
            }
        },
        46010: function(e) {
            let t = Number.MAX_SAFE_INTEGER || 9007199254740991;
            e.exports = {
                MAX_LENGTH: 256,
                MAX_SAFE_COMPONENT_LENGTH: 16,
                MAX_SAFE_BUILD_LENGTH: 250,
                MAX_SAFE_INTEGER: t,
                RELEASE_TYPES: ["major", "premajor", "minor", "preminor", "patch", "prepatch", "prerelease"],
                SEMVER_SPEC_VERSION: "2.0.0",
                FLAG_INCLUDE_PRERELEASE: 1,
                FLAG_LOOSE: 2
            }
        },
        41608: function(e, t, n) {
            var i = n(9389);
            let o = "object" == typeof i && i.env && i.env.NODE_DEBUG && /\bsemver\b/i.test(i.env.NODE_DEBUG) ? (...e) => console.error("SEMVER", ...e) : () => {};
            e.exports = o
        },
        29995: function(e) {
            let t = /^[0-9]+$/,
                compareIdentifiers = (e, n) => {
                    let i = t.test(e),
                        o = t.test(n);
                    return i && o && (e = +e, n = +n), e === n ? 0 : i && !o ? -1 : o && !i ? 1 : e < n ? -1 : 1
                };
            e.exports = {
                compareIdentifiers,
                rcompareIdentifiers: (e, t) => compareIdentifiers(t, e)
            }
        },
        13961: function(e) {
            let t = Object.freeze({
                    loose: !0
                }),
                n = Object.freeze({});
            e.exports = e => e ? "object" != typeof e ? t : e : n
        },
        67881: function(e, t, n) {
            let {
                MAX_SAFE_COMPONENT_LENGTH: i,
                MAX_SAFE_BUILD_LENGTH: o,
                MAX_LENGTH: a
            } = n(46010), l = n(41608);
            t = e.exports = {};
            let c = t.re = [],
                u = t.safeRe = [],
                R = t.src = [],
                N = t.t = {},
                H = 0,
                U = "[a-zA-Z0-9-]",
                W = [
                    ["\\s", 1],
                    ["\\d", a],
                    [U, o]
                ],
                makeSafeRegex = e => {
                    for (let [t, n] of W) e = e.split(`${t}*`).join(`${t}{0,${n}}`).split(`${t}+`).join(`${t}{1,${n}}`);
                    return e
                },
                createToken = (e, t, n) => {
                    let i = makeSafeRegex(t),
                        o = H++;
                    l(e, o, t), N[e] = o, R[o] = t, c[o] = new RegExp(t, n ? "g" : void 0), u[o] = new RegExp(i, n ? "g" : void 0)
                };
            createToken("NUMERICIDENTIFIER", "0|[1-9]\\d*"), createToken("NUMERICIDENTIFIERLOOSE", "\\d+"), createToken("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${U}*`), createToken("MAINVERSION", `(${R[N.NUMERICIDENTIFIER]})\\.(${R[N.NUMERICIDENTIFIER]})\\.(${R[N.NUMERICIDENTIFIER]})`), createToken("MAINVERSIONLOOSE", `(${R[N.NUMERICIDENTIFIERLOOSE]})\\.(${R[N.NUMERICIDENTIFIERLOOSE]})\\.(${R[N.NUMERICIDENTIFIERLOOSE]})`), createToken("PRERELEASEIDENTIFIER", `(?:${R[N.NUMERICIDENTIFIER]}|${R[N.NONNUMERICIDENTIFIER]})`), createToken("PRERELEASEIDENTIFIERLOOSE", `(?:${R[N.NUMERICIDENTIFIERLOOSE]}|${R[N.NONNUMERICIDENTIFIER]})`), createToken("PRERELEASE", `(?:-(${R[N.PRERELEASEIDENTIFIER]}(?:\\.${R[N.PRERELEASEIDENTIFIER]})*))`), createToken("PRERELEASELOOSE", `(?:-?(${R[N.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${R[N.PRERELEASEIDENTIFIERLOOSE]})*))`), createToken("BUILDIDENTIFIER", `${U}+`), createToken("BUILD", `(?:\\+(${R[N.BUILDIDENTIFIER]}(?:\\.${R[N.BUILDIDENTIFIER]})*))`), createToken("FULLPLAIN", `v?${R[N.MAINVERSION]}${R[N.PRERELEASE]}?${R[N.BUILD]}?`), createToken("FULL", `^${R[N.FULLPLAIN]}$`), createToken("LOOSEPLAIN", `[v=\\s]*${R[N.MAINVERSIONLOOSE]}${R[N.PRERELEASELOOSE]}?${R[N.BUILD]}?`), createToken("LOOSE", `^${R[N.LOOSEPLAIN]}$`), createToken("GTLT", "((?:<|>)?=?)"), createToken("XRANGEIDENTIFIERLOOSE", `${R[N.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), createToken("XRANGEIDENTIFIER", `${R[N.NUMERICIDENTIFIER]}|x|X|\\*`), createToken("XRANGEPLAIN", `[v=\\s]*(${R[N.XRANGEIDENTIFIER]})(?:\\.(${R[N.XRANGEIDENTIFIER]})(?:\\.(${R[N.XRANGEIDENTIFIER]})(?:${R[N.PRERELEASE]})?${R[N.BUILD]}?)?)?`), createToken("XRANGEPLAINLOOSE", `[v=\\s]*(${R[N.XRANGEIDENTIFIERLOOSE]})(?:\\.(${R[N.XRANGEIDENTIFIERLOOSE]})(?:\\.(${R[N.XRANGEIDENTIFIERLOOSE]})(?:${R[N.PRERELEASELOOSE]})?${R[N.BUILD]}?)?)?`), createToken("XRANGE", `^${R[N.GTLT]}\\s*${R[N.XRANGEPLAIN]}$`), createToken("XRANGELOOSE", `^${R[N.GTLT]}\\s*${R[N.XRANGEPLAINLOOSE]}$`), createToken("COERCEPLAIN", `(^|[^\\d])(\\d{1,${i}})(?:\\.(\\d{1,${i}}))?(?:\\.(\\d{1,${i}}))?`), createToken("COERCE", `${R[N.COERCEPLAIN]}(?:$|[^\\d])`), createToken("COERCEFULL", R[N.COERCEPLAIN] + `(?:${R[N.PRERELEASE]})?` + `(?:${R[N.BUILD]})?` + "(?:$|[^\\d])"), createToken("COERCERTL", R[N.COERCE], !0), createToken("COERCERTLFULL", R[N.COERCEFULL], !0), createToken("LONETILDE", "(?:~>?)"), createToken("TILDETRIM", `(\\s*)${R[N.LONETILDE]}\\s+`, !0), t.tildeTrimReplace = "$1~", createToken("TILDE", `^${R[N.LONETILDE]}${R[N.XRANGEPLAIN]}$`), createToken("TILDELOOSE", `^${R[N.LONETILDE]}${R[N.XRANGEPLAINLOOSE]}$`), createToken("LONECARET", "(?:\\^)"), createToken("CARETTRIM", `(\\s*)${R[N.LONECARET]}\\s+`, !0), t.caretTrimReplace = "$1^", createToken("CARET", `^${R[N.LONECARET]}${R[N.XRANGEPLAIN]}$`), createToken("CARETLOOSE", `^${R[N.LONECARET]}${R[N.XRANGEPLAINLOOSE]}$`), createToken("COMPARATORLOOSE", `^${R[N.GTLT]}\\s*(${R[N.LOOSEPLAIN]})$|^$`), createToken("COMPARATOR", `^${R[N.GTLT]}\\s*(${R[N.FULLPLAIN]})$|^$`), createToken("COMPARATORTRIM", `(\\s*)${R[N.GTLT]}\\s*(${R[N.LOOSEPLAIN]}|${R[N.XRANGEPLAIN]})`, !0), t.comparatorTrimReplace = "$1$2$3", createToken("HYPHENRANGE", `^\\s*(${R[N.XRANGEPLAIN]})\\s+-\\s+(${R[N.XRANGEPLAIN]})\\s*$`), createToken("HYPHENRANGELOOSE", `^\\s*(${R[N.XRANGEPLAINLOOSE]})\\s+-\\s+(${R[N.XRANGEPLAINLOOSE]})\\s*$`), createToken("STAR", "(<|>)?=?\\s*\\*"), createToken("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), createToken("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$")
        },
        20595: function(e, t, n) {
            let i = n(38567);
            e.exports = (e, t, n) => i(e, t, ">", n)
        },
        15458: function(e, t, n) {
            let i = n(34076);
            e.exports = (e, t, n) => (e = new i(e, n), t = new i(t, n), e.intersects(t, n))
        },
        45100: function(e, t, n) {
            let i = n(38567);
            e.exports = (e, t, n) => i(e, t, "<", n)
        },
        79648: function(e, t, n) {
            let i = n(83282),
                o = n(34076);
            e.exports = (e, t, n) => {
                let a = null,
                    l = null,
                    c = null;
                try {
                    c = new o(t, n)
                } catch (e) {
                    return null
                }
                return e.forEach(e => {
                    c.test(e) && (!a || -1 === l.compare(e)) && (a = e, l = new i(a, n))
                }), a
            }
        },
        81697: function(e, t, n) {
            let i = n(83282),
                o = n(34076);
            e.exports = (e, t, n) => {
                let a = null,
                    l = null,
                    c = null;
                try {
                    c = new o(t, n)
                } catch (e) {
                    return null
                }
                return e.forEach(e => {
                    c.test(e) && (!a || 1 === l.compare(e)) && (a = e, l = new i(a, n))
                }), a
            }
        },
        17049: function(e, t, n) {
            let i = n(83282),
                o = n(34076),
                a = n(39302);
            e.exports = (e, t) => {
                e = new o(e, t);
                let n = new i("0.0.0");
                if (e.test(n) || (n = new i("0.0.0-0"), e.test(n))) return n;
                n = null;
                for (let t = 0; t < e.set.length; ++t) {
                    let o = e.set[t],
                        l = null;
                    o.forEach(e => {
                        let t = new i(e.semver.version);
                        switch (e.operator) {
                            case ">":
                                0 === t.prerelease.length ? t.patch++ : t.prerelease.push(0), t.raw = t.format();
                            case "":
                            case ">=":
                                (!l || a(t, l)) && (l = t);
                                break;
                            case "<":
                            case "<=":
                                break;
                            default:
                                throw Error(`Unexpected operation: ${e.operator}`)
                        }
                    }), l && (!n || a(n, l)) && (n = l)
                }
                return n && e.test(n) ? n : null
            }
        },
        38567: function(e, t, n) {
            let i = n(83282),
                o = n(61573),
                {
                    ANY: a
                } = o,
                l = n(34076),
                c = n(27465),
                u = n(39302),
                R = n(26002),
                N = n(9512),
                H = n(14395);
            e.exports = (e, t, n, U) => {
                let W, J, Q, Z, Y;
                switch (e = new i(e, U), t = new l(t, U), n) {
                    case ">":
                        W = u, J = N, Q = R, Z = ">", Y = ">=";
                        break;
                    case "<":
                        W = R, J = H, Q = u, Z = "<", Y = "<=";
                        break;
                    default:
                        throw TypeError('Must provide a hilo val of "<" or ">"')
                }
                if (c(e, t, U)) return !1;
                for (let n = 0; n < t.set.length; ++n) {
                    let i = t.set[n],
                        l = null,
                        c = null;
                    if (i.forEach(e => {
                            e.semver === a && (e = new o(">=0.0.0")), l = l || e, c = c || e, W(e.semver, l.semver, U) ? l = e : Q(e.semver, c.semver, U) && (c = e)
                        }), l.operator === Z || l.operator === Y || (!c.operator || c.operator === Z) && J(e, c.semver) || c.operator === Y && Q(e, c.semver)) return !1
                }
                return !0
            }
        },
        91471: function(e, t, n) {
            let i = n(27465),
                o = n(85343);
            e.exports = (e, t, n) => {
                let a = [],
                    l = null,
                    c = null,
                    u = e.sort((e, t) => o(e, t, n));
                for (let e of u) {
                    let o = i(e, t, n);
                    o ? (c = e, l || (l = e)) : (c && a.push([l, c]), c = null, l = null)
                }
                l && a.push([l, null]);
                let R = [];
                for (let [e, t] of a) e === t ? R.push(e) : t || e !== u[0] ? t ? e === u[0] ? R.push(`<=${t}`) : R.push(`${e} - ${t}`) : R.push(`>=${e}`) : R.push("*");
                let N = R.join(" || "),
                    H = "string" == typeof t.raw ? t.raw : String(t);
                return N.length < H.length ? N : t
            }
        },
        18394: function(e, t, n) {
            let i = n(34076),
                o = n(61573),
                {
                    ANY: a
                } = o,
                l = n(27465),
                c = n(85343),
                u = [new o(">=0.0.0-0")],
                R = [new o(">=0.0.0")],
                simpleSubset = (e, t, n) => {
                    let i, o, N, H, U, W, J;
                    if (e === t) return !0;
                    if (1 === e.length && e[0].semver === a) {
                        if (1 === t.length && t[0].semver === a) return !0;
                        e = n.includePrerelease ? u : R
                    }
                    if (1 === t.length && t[0].semver === a) {
                        if (n.includePrerelease) return !0;
                        t = R
                    }
                    let Q = new Set;
                    for (let t of e) ">" === t.operator || ">=" === t.operator ? i = higherGT(i, t, n) : "<" === t.operator || "<=" === t.operator ? o = lowerLT(o, t, n) : Q.add(t.semver);
                    if (Q.size > 1 || i && o && ((N = c(i.semver, o.semver, n)) > 0 || 0 === N && (">=" !== i.operator || "<=" !== o.operator))) return null;
                    for (let e of Q) {
                        if (i && !l(e, String(i), n) || o && !l(e, String(o), n)) return null;
                        for (let i of t)
                            if (!l(e, String(i), n)) return !1;
                        return !0
                    }
                    let Z = !!o && !n.includePrerelease && !!o.semver.prerelease.length && o.semver,
                        Y = !!i && !n.includePrerelease && !!i.semver.prerelease.length && i.semver;
                    for (let e of (Z && 1 === Z.prerelease.length && "<" === o.operator && 0 === Z.prerelease[0] && (Z = !1), t)) {
                        if (J = J || ">" === e.operator || ">=" === e.operator, W = W || "<" === e.operator || "<=" === e.operator, i) {
                            if (Y && e.semver.prerelease && e.semver.prerelease.length && e.semver.major === Y.major && e.semver.minor === Y.minor && e.semver.patch === Y.patch && (Y = !1), ">" === e.operator || ">=" === e.operator) {
                                if ((H = higherGT(i, e, n)) === e && H !== i) return !1
                            } else if (">=" === i.operator && !l(i.semver, String(e), n)) return !1
                        }
                        if (o) {
                            if (Z && e.semver.prerelease && e.semver.prerelease.length && e.semver.major === Z.major && e.semver.minor === Z.minor && e.semver.patch === Z.patch && (Z = !1), "<" === e.operator || "<=" === e.operator) {
                                if ((U = lowerLT(o, e, n)) === e && U !== o) return !1
                            } else if ("<=" === o.operator && !l(o.semver, String(e), n)) return !1
                        }
                        if (!e.operator && (o || i) && 0 !== N) return !1
                    }
                    return (!i || !W || !!o || 0 === N) && (!o || !J || !!i || 0 === N) && !Y && !Z
                },
                higherGT = (e, t, n) => {
                    if (!e) return t;
                    let i = c(e.semver, t.semver, n);
                    return i > 0 ? e : i < 0 ? t : ">" === t.operator && ">=" === e.operator ? t : e
                },
                lowerLT = (e, t, n) => {
                    if (!e) return t;
                    let i = c(e.semver, t.semver, n);
                    return i < 0 ? e : i > 0 ? t : "<" === t.operator && "<=" === e.operator ? t : e
                };
            e.exports = (e, t, n = {}) => {
                if (e === t) return !0;
                e = new i(e, n), t = new i(t, n);
                let o = !1;
                t: for (let i of e.set) {
                    for (let e of t.set) {
                        let t = simpleSubset(i, e, n);
                        if (o = o || null !== t, t) continue t
                    }
                    if (o) return !1
                }
                return !0
            }
        },
        10611: function(e, t, n) {
            let i = n(34076);
            e.exports = (e, t) => new i(e, t).set.map(e => e.map(e => e.value).join(" ").trim().split(" "))
        },
        77248: function(e, t, n) {
            let i = n(34076);
            e.exports = (e, t) => {
                try {
                    return new i(e, t).range || "*"
                } catch (e) {
                    return null
                }
            }
        },
        40341: function(e, t, n) {
            var i = n(80053).Buffer;

            function Hash(e, t) {
                this._block = i.alloc(e), this._finalSize = t, this._blockSize = e, this._len = 0
            }
            Hash.prototype.update = function(e, t) {
                "string" == typeof e && (t = t || "utf8", e = i.from(e, t));
                for (var n = this._block, o = this._blockSize, a = e.length, l = this._len, c = 0; c < a;) {
                    for (var u = l % o, R = Math.min(a - c, o - u), N = 0; N < R; N++) n[u + N] = e[c + N];
                    l += R, c += R, l % o == 0 && this._update(n)
                }
                return this._len += a, this
            }, Hash.prototype.digest = function(e) {
                var t = this._len % this._blockSize;
                this._block[t] = 128, this._block.fill(0, t + 1), t >= this._finalSize && (this._update(this._block), this._block.fill(0));
                var n = 8 * this._len;
                if (n <= 4294967295) this._block.writeUInt32BE(n, this._blockSize - 4);
                else {
                    var i = (4294967295 & n) >>> 0,
                        o = (n - i) / 4294967296;
                    this._block.writeUInt32BE(o, this._blockSize - 8), this._block.writeUInt32BE(i, this._blockSize - 4)
                }
                this._update(this._block);
                var a = this._hash();
                return e ? a.toString(e) : a
            }, Hash.prototype._update = function() {
                throw Error("_update must be implemented by subclass")
            }, e.exports = Hash
        },
        39540: function(e, t, n) {
            var i = e.exports = function(e) {
                var t = i[e = e.toLowerCase()];
                if (!t) throw Error(e + " is not supported (we accept pull requests)");
                return new t
            };
            i.sha = n(9976), i.sha1 = n(98850), i.sha224 = n(84033), i.sha256 = n(55126), i.sha384 = n(25891), i.sha512 = n(18714)
        },
        9976: function(e, t, n) {
            var i = n(38633),
                o = n(40341),
                a = n(80053).Buffer,
                l = [1518500249, 1859775393, -1894007588, -899497514],
                c = Array(80);

            function Sha() {
                this.init(), this._w = c, o.call(this, 64, 56)
            }
            i(Sha, o), Sha.prototype.init = function() {
                return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this
            }, Sha.prototype._update = function(e) {
                for (var t = this._w, n = 0 | this._a, i = 0 | this._b, o = 0 | this._c, a = 0 | this._d, c = 0 | this._e, u = 0; u < 16; ++u) t[u] = e.readInt32BE(4 * u);
                for (; u < 80; ++u) t[u] = t[u - 3] ^ t[u - 8] ^ t[u - 14] ^ t[u - 16];
                for (var R = 0; R < 80; ++R) {
                    var N, H, U, W, J, Q = ~~(R / 20),
                        Z = ((N = n) << 5 | N >>> 27) + (H = i, U = o, W = a, 0 === Q ? H & U | ~H & W : 2 === Q ? H & U | H & W | U & W : H ^ U ^ W) + c + t[R] + l[Q] | 0;
                    c = a, a = o, o = (J = i) << 30 | J >>> 2, i = n, n = Z
                }
                this._a = n + this._a | 0, this._b = i + this._b | 0, this._c = o + this._c | 0, this._d = a + this._d | 0, this._e = c + this._e | 0
            }, Sha.prototype._hash = function() {
                var e = a.allocUnsafe(20);
                return e.writeInt32BE(0 | this._a, 0), e.writeInt32BE(0 | this._b, 4), e.writeInt32BE(0 | this._c, 8), e.writeInt32BE(0 | this._d, 12), e.writeInt32BE(0 | this._e, 16), e
            }, e.exports = Sha
        },
        98850: function(e, t, n) {
            var i = n(38633),
                o = n(40341),
                a = n(80053).Buffer,
                l = [1518500249, 1859775393, -1894007588, -899497514],
                c = Array(80);

            function Sha1() {
                this.init(), this._w = c, o.call(this, 64, 56)
            }
            i(Sha1, o), Sha1.prototype.init = function() {
                return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this
            }, Sha1.prototype._update = function(e) {
                for (var t = this._w, n = 0 | this._a, i = 0 | this._b, o = 0 | this._c, a = 0 | this._d, c = 0 | this._e, u = 0; u < 16; ++u) t[u] = e.readInt32BE(4 * u);
                for (; u < 80; ++u) t[u] = (N = t[u - 3] ^ t[u - 8] ^ t[u - 14] ^ t[u - 16]) << 1 | N >>> 31;
                for (var R = 0; R < 80; ++R) {
                    var N, H, U, W, J, Q, Z = ~~(R / 20),
                        Y = ((H = n) << 5 | H >>> 27) + (U = i, W = o, J = a, 0 === Z ? U & W | ~U & J : 2 === Z ? U & W | U & J | W & J : U ^ W ^ J) + c + t[R] + l[Z] | 0;
                    c = a, a = o, o = (Q = i) << 30 | Q >>> 2, i = n, n = Y
                }
                this._a = n + this._a | 0, this._b = i + this._b | 0, this._c = o + this._c | 0, this._d = a + this._d | 0, this._e = c + this._e | 0
            }, Sha1.prototype._hash = function() {
                var e = a.allocUnsafe(20);
                return e.writeInt32BE(0 | this._a, 0), e.writeInt32BE(0 | this._b, 4), e.writeInt32BE(0 | this._c, 8), e.writeInt32BE(0 | this._d, 12), e.writeInt32BE(0 | this._e, 16), e
            }, e.exports = Sha1
        },
        84033: function(e, t, n) {
            var i = n(38633),
                o = n(55126),
                a = n(40341),
                l = n(80053).Buffer,
                c = Array(64);

            function Sha224() {
                this.init(), this._w = c, a.call(this, 64, 56)
            }
            i(Sha224, o), Sha224.prototype.init = function() {
                return this._a = 3238371032, this._b = 914150663, this._c = 812702999, this._d = 4144912697, this._e = 4290775857, this._f = 1750603025, this._g = 1694076839, this._h = 3204075428, this
            }, Sha224.prototype._hash = function() {
                var e = l.allocUnsafe(28);
                return e.writeInt32BE(this._a, 0), e.writeInt32BE(this._b, 4), e.writeInt32BE(this._c, 8), e.writeInt32BE(this._d, 12), e.writeInt32BE(this._e, 16), e.writeInt32BE(this._f, 20), e.writeInt32BE(this._g, 24), e
            }, e.exports = Sha224
        },
        55126: function(e, t, n) {
            var i = n(38633),
                o = n(40341),
                a = n(80053).Buffer,
                l = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
                c = Array(64);

            function Sha256() {
                this.init(), this._w = c, o.call(this, 64, 56)
            }
            i(Sha256, o), Sha256.prototype.init = function() {
                return this._a = 1779033703, this._b = 3144134277, this._c = 1013904242, this._d = 2773480762, this._e = 1359893119, this._f = 2600822924, this._g = 528734635, this._h = 1541459225, this
            }, Sha256.prototype._update = function(e) {
                for (var t = this._w, n = 0 | this._a, i = 0 | this._b, o = 0 | this._c, a = 0 | this._d, c = 0 | this._e, u = 0 | this._f, R = 0 | this._g, N = 0 | this._h, H = 0; H < 16; ++H) t[H] = e.readInt32BE(4 * H);
                for (; H < 64; ++H) t[H] = (((W = t[H - 2]) >>> 17 | W << 15) ^ (W >>> 19 | W << 13) ^ W >>> 10) + t[H - 7] + (((J = t[H - 15]) >>> 7 | J << 25) ^ (J >>> 18 | J << 14) ^ J >>> 3) + t[H - 16] | 0;
                for (var U = 0; U < 64; ++U) {
                    var W, J, Q, Z, Y, K, X, ee, et, er = N + (((Q = c) >>> 6 | Q << 26) ^ (Q >>> 11 | Q << 21) ^ (Q >>> 25 | Q << 7)) + (Z = c, Y = u, (K = R) ^ Z & (Y ^ K)) + l[U] + t[U] | 0,
                        en = (((X = n) >>> 2 | X << 30) ^ (X >>> 13 | X << 19) ^ (X >>> 22 | X << 10)) + ((ee = n) & (et = i) | o & (ee | et)) | 0;
                    N = R, R = u, u = c, c = a + er | 0, a = o, o = i, i = n, n = er + en | 0
                }
                this._a = n + this._a | 0, this._b = i + this._b | 0, this._c = o + this._c | 0, this._d = a + this._d | 0, this._e = c + this._e | 0, this._f = u + this._f | 0, this._g = R + this._g | 0, this._h = N + this._h | 0
            }, Sha256.prototype._hash = function() {
                var e = a.allocUnsafe(32);
                return e.writeInt32BE(this._a, 0), e.writeInt32BE(this._b, 4), e.writeInt32BE(this._c, 8), e.writeInt32BE(this._d, 12), e.writeInt32BE(this._e, 16), e.writeInt32BE(this._f, 20), e.writeInt32BE(this._g, 24), e.writeInt32BE(this._h, 28), e
            }, e.exports = Sha256
        },
        25891: function(e, t, n) {
            var i = n(38633),
                o = n(18714),
                a = n(40341),
                l = n(80053).Buffer,
                c = Array(160);

            function Sha384() {
                this.init(), this._w = c, a.call(this, 128, 112)
            }
            i(Sha384, o), Sha384.prototype.init = function() {
                return this._ah = 3418070365, this._bh = 1654270250, this._ch = 2438529370, this._dh = 355462360, this._eh = 1731405415, this._fh = 2394180231, this._gh = 3675008525, this._hh = 1203062813, this._al = 3238371032, this._bl = 914150663, this._cl = 812702999, this._dl = 4144912697, this._el = 4290775857, this._fl = 1750603025, this._gl = 1694076839, this._hl = 3204075428, this
            }, Sha384.prototype._hash = function() {
                var e = l.allocUnsafe(48);

                function writeInt64BE(t, n, i) {
                    e.writeInt32BE(t, i), e.writeInt32BE(n, i + 4)
                }
                return writeInt64BE(this._ah, this._al, 0), writeInt64BE(this._bh, this._bl, 8), writeInt64BE(this._ch, this._cl, 16), writeInt64BE(this._dh, this._dl, 24), writeInt64BE(this._eh, this._el, 32), writeInt64BE(this._fh, this._fl, 40), e
            }, e.exports = Sha384
        },
        18714: function(e, t, n) {
            var i = n(38633),
                o = n(40341),
                a = n(80053).Buffer,
                l = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591],
                c = Array(160);

            function Sha512() {
                this.init(), this._w = c, o.call(this, 128, 112)
            }

            function sigma0(e, t) {
                return (e >>> 28 | t << 4) ^ (t >>> 2 | e << 30) ^ (t >>> 7 | e << 25)
            }

            function sigma1(e, t) {
                return (e >>> 14 | t << 18) ^ (e >>> 18 | t << 14) ^ (t >>> 9 | e << 23)
            }

            function getCarry(e, t) {
                return e >>> 0 < t >>> 0 ? 1 : 0
            }
            i(Sha512, o), Sha512.prototype.init = function() {
                return this._ah = 1779033703, this._bh = 3144134277, this._ch = 1013904242, this._dh = 2773480762, this._eh = 1359893119, this._fh = 2600822924, this._gh = 528734635, this._hh = 1541459225, this._al = 4089235720, this._bl = 2227873595, this._cl = 4271175723, this._dl = 1595750129, this._el = 2917565137, this._fl = 725511199, this._gl = 4215389547, this._hl = 327033209, this
            }, Sha512.prototype._update = function(e) {
                for (var t = this._w, n = 0 | this._ah, i = 0 | this._bh, o = 0 | this._ch, a = 0 | this._dh, c = 0 | this._eh, u = 0 | this._fh, R = 0 | this._gh, N = 0 | this._hh, H = 0 | this._al, U = 0 | this._bl, W = 0 | this._cl, J = 0 | this._dl, Q = 0 | this._el, Z = 0 | this._fl, Y = 0 | this._gl, K = 0 | this._hl, X = 0; X < 32; X += 2) t[X] = e.readInt32BE(4 * X), t[X + 1] = e.readInt32BE(4 * X + 4);
                for (; X < 160; X += 2) {
                    var ee, et, er, en, es, ei, eo, ea, el = t[X - 30],
                        ec = t[X - 30 + 1],
                        eu = ((ee = el) >>> 1 | (et = ec) << 31) ^ (ee >>> 8 | et << 24) ^ ee >>> 7,
                        eh = ((er = ec) >>> 1 | (en = el) << 31) ^ (er >>> 8 | en << 24) ^ (er >>> 7 | en << 25);
                    el = t[X - 4], ec = t[X - 4 + 1];
                    var ed = ((es = el) >>> 19 | (ei = ec) << 13) ^ (ei >>> 29 | es << 3) ^ es >>> 6,
                        ep = ((eo = ec) >>> 19 | (ea = el) << 13) ^ (ea >>> 29 | eo << 3) ^ (eo >>> 6 | ea << 26),
                        ef = t[X - 14],
                        eg = t[X - 14 + 1],
                        em = t[X - 32],
                        ey = t[X - 32 + 1],
                        e_ = eh + eg | 0,
                        eb = eu + ef + getCarry(e_, eh) | 0;
                    eb = (eb = eb + ed + getCarry(e_ = e_ + ep | 0, ep) | 0) + em + getCarry(e_ = e_ + ey | 0, ey) | 0, t[X] = eb, t[X + 1] = e_
                }
                for (var ev = 0; ev < 160; ev += 2) {
                    eb = t[ev], e_ = t[ev + 1];
                    var eE, ew, ek, eS, eC, eR, eI, ex, eA, eN, eL = (eE = n) & (ew = i) | o & (eE | ew),
                        eM = (ek = H) & (eS = U) | W & (ek | eS),
                        eT = sigma0(n, H),
                        eP = sigma0(H, n),
                        eO = sigma1(c, Q),
                        eF = sigma1(Q, c),
                        eB = l[ev],
                        ej = l[ev + 1],
                        eD = (eC = c, eR = u, (eI = R) ^ eC & (eR ^ eI)),
                        e$ = (ex = Q, eA = Z, (eN = Y) ^ ex & (eA ^ eN)),
                        eH = K + eF | 0,
                        eU = N + eO + getCarry(eH, K) | 0;
                    eU = (eU = (eU = eU + eD + getCarry(eH = eH + e$ | 0, e$) | 0) + eB + getCarry(eH = eH + ej | 0, ej) | 0) + eb + getCarry(eH = eH + e_ | 0, e_) | 0;
                    var eV = eP + eM | 0,
                        ez = eT + eL + getCarry(eV, eP) | 0;
                    N = R, K = Y, R = u, Y = Z, u = c, Z = Q, c = a + eU + getCarry(Q = J + eH | 0, J) | 0, a = o, J = W, o = i, W = U, i = n, U = H, n = eU + ez + getCarry(H = eH + eV | 0, eH) | 0
                }
                this._al = this._al + H | 0, this._bl = this._bl + U | 0, this._cl = this._cl + W | 0, this._dl = this._dl + J | 0, this._el = this._el + Q | 0, this._fl = this._fl + Z | 0, this._gl = this._gl + Y | 0, this._hl = this._hl + K | 0, this._ah = this._ah + n + getCarry(this._al, H) | 0, this._bh = this._bh + i + getCarry(this._bl, U) | 0, this._ch = this._ch + o + getCarry(this._cl, W) | 0, this._dh = this._dh + a + getCarry(this._dl, J) | 0, this._eh = this._eh + c + getCarry(this._el, Q) | 0, this._fh = this._fh + u + getCarry(this._fl, Z) | 0, this._gh = this._gh + R + getCarry(this._gl, Y) | 0, this._hh = this._hh + N + getCarry(this._hl, K) | 0
            }, Sha512.prototype._hash = function() {
                var e = a.allocUnsafe(64);

                function writeInt64BE(t, n, i) {
                    e.writeInt32BE(t, i), e.writeInt32BE(n, i + 4)
                }
                return writeInt64BE(this._ah, this._al, 0), writeInt64BE(this._bh, this._bl, 8), writeInt64BE(this._ch, this._cl, 16), writeInt64BE(this._dh, this._dl, 24), writeInt64BE(this._eh, this._el, 32), writeInt64BE(this._fh, this._fl, 40), writeInt64BE(this._gh, this._gl, 48), writeInt64BE(this._hh, this._hl, 56), e
            }, e.exports = Sha512
        },
        37984: function(e) {
            e.exports = function() {
                for (var e = {}, n = 0; n < arguments.length; n++) {
                    var i = arguments[n];
                    for (var o in i) t.call(i, o) && (e[o] = i[o])
                }
                return e
            };
            var t = Object.prototype.hasOwnProperty
        },
        29942: function(e) {
            "use strict";
            e.exports = function(e) {
                e.prototype[Symbol.iterator] = function*() {
                    for (let e = this.head; e; e = e.next) yield e.value
                }
            }
        },
        37992: function(e, t, n) {
            "use strict";

            function Yallist(e) {
                var t = this;
                if (t instanceof Yallist || (t = new Yallist), t.tail = null, t.head = null, t.length = 0, e && "function" == typeof e.forEach) e.forEach(function(e) {
                    t.push(e)
                });
                else if (arguments.length > 0)
                    for (var n = 0, i = arguments.length; n < i; n++) t.push(arguments[n]);
                return t
            }

            function Node(e, t, n, i) {
                if (!(this instanceof Node)) return new Node(e, t, n, i);
                this.list = i, this.value = e, t ? (t.next = this, this.prev = t) : this.prev = null, n ? (n.prev = this, this.next = n) : this.next = null
            }
            e.exports = Yallist, Yallist.Node = Node, Yallist.create = Yallist, Yallist.prototype.removeNode = function(e) {
                if (e.list !== this) throw Error("removing node which does not belong to this list");
                var t = e.next,
                    n = e.prev;
                return t && (t.prev = n), n && (n.next = t), e === this.head && (this.head = t), e === this.tail && (this.tail = n), e.list.length--, e.next = null, e.prev = null, e.list = null, t
            }, Yallist.prototype.unshiftNode = function(e) {
                if (e !== this.head) {
                    e.list && e.list.removeNode(e);
                    var t = this.head;
                    e.list = this, e.next = t, t && (t.prev = e), this.head = e, this.tail || (this.tail = e), this.length++
                }
            }, Yallist.prototype.pushNode = function(e) {
                if (e !== this.tail) {
                    e.list && e.list.removeNode(e);
                    var t = this.tail;
                    e.list = this, e.prev = t, t && (t.next = e), this.tail = e, this.head || (this.head = e), this.length++
                }
            }, Yallist.prototype.push = function() {
                for (var e, t = 0, n = arguments.length; t < n; t++) e = arguments[t], this.tail = new Node(e, this.tail, null, this), this.head || (this.head = this.tail), this.length++;
                return this.length
            }, Yallist.prototype.unshift = function() {
                for (var e, t = 0, n = arguments.length; t < n; t++) e = arguments[t], this.head = new Node(e, null, this.head, this), this.tail || (this.tail = this.head), this.length++;
                return this.length
            }, Yallist.prototype.pop = function() {
                if (this.tail) {
                    var e = this.tail.value;
                    return this.tail = this.tail.prev, this.tail ? this.tail.next = null : this.head = null, this.length--, e
                }
            }, Yallist.prototype.shift = function() {
                if (this.head) {
                    var e = this.head.value;
                    return this.head = this.head.next, this.head ? this.head.prev = null : this.tail = null, this.length--, e
                }
            }, Yallist.prototype.forEach = function(e, t) {
                t = t || this;
                for (var n = this.head, i = 0; null !== n; i++) e.call(t, n.value, i, this), n = n.next
            }, Yallist.prototype.forEachReverse = function(e, t) {
                t = t || this;
                for (var n = this.tail, i = this.length - 1; null !== n; i--) e.call(t, n.value, i, this), n = n.prev
            }, Yallist.prototype.get = function(e) {
                for (var t = 0, n = this.head; null !== n && t < e; t++) n = n.next;
                if (t === e && null !== n) return n.value
            }, Yallist.prototype.getReverse = function(e) {
                for (var t = 0, n = this.tail; null !== n && t < e; t++) n = n.prev;
                if (t === e && null !== n) return n.value
            }, Yallist.prototype.map = function(e, t) {
                t = t || this;
                for (var n = new Yallist, i = this.head; null !== i;) n.push(e.call(t, i.value, this)), i = i.next;
                return n
            }, Yallist.prototype.mapReverse = function(e, t) {
                t = t || this;
                for (var n = new Yallist, i = this.tail; null !== i;) n.push(e.call(t, i.value, this)), i = i.prev;
                return n
            }, Yallist.prototype.reduce = function(e, t) {
                var n, i = this.head;
                if (arguments.length > 1) n = t;
                else if (this.head) i = this.head.next, n = this.head.value;
                else throw TypeError("Reduce of empty list with no initial value");
                for (var o = 0; null !== i; o++) n = e(n, i.value, o), i = i.next;
                return n
            }, Yallist.prototype.reduceReverse = function(e, t) {
                var n, i = this.tail;
                if (arguments.length > 1) n = t;
                else if (this.tail) i = this.tail.prev, n = this.tail.value;
                else throw TypeError("Reduce of empty list with no initial value");
                for (var o = this.length - 1; null !== i; o--) n = e(n, i.value, o), i = i.prev;
                return n
            }, Yallist.prototype.toArray = function() {
                for (var e = Array(this.length), t = 0, n = this.head; null !== n; t++) e[t] = n.value, n = n.next;
                return e
            }, Yallist.prototype.toArrayReverse = function() {
                for (var e = Array(this.length), t = 0, n = this.tail; null !== n; t++) e[t] = n.value, n = n.prev;
                return e
            }, Yallist.prototype.slice = function(e, t) {
                (t = t || this.length) < 0 && (t += this.length), (e = e || 0) < 0 && (e += this.length);
                var n = new Yallist;
                if (t < e || t < 0) return n;
                e < 0 && (e = 0), t > this.length && (t = this.length);
                for (var i = 0, o = this.head; null !== o && i < e; i++) o = o.next;
                for (; null !== o && i < t; i++, o = o.next) n.push(o.value);
                return n
            }, Yallist.prototype.sliceReverse = function(e, t) {
                (t = t || this.length) < 0 && (t += this.length), (e = e || 0) < 0 && (e += this.length);
                var n = new Yallist;
                if (t < e || t < 0) return n;
                e < 0 && (e = 0), t > this.length && (t = this.length);
                for (var i = this.length, o = this.tail; null !== o && i > t; i--) o = o.prev;
                for (; null !== o && i > e; i--, o = o.prev) n.push(o.value);
                return n
            }, Yallist.prototype.splice = function(e, t, ...n) {
                e > this.length && (e = this.length - 1), e < 0 && (e = this.length + e);
                for (var i = 0, o = this.head; null !== o && i < e; i++) o = o.next;
                for (var a = [], i = 0; o && i < t; i++) a.push(o.value), o = this.removeNode(o);
                null === o && (o = this.tail), o !== this.head && o !== this.tail && (o = o.prev);
                for (var i = 0; i < n.length; i++) o = function(e, t, n) {
                    var i = t === e.head ? new Node(n, null, t, e) : new Node(n, t, t.next, e);
                    return null === i.next && (e.tail = i), null === i.prev && (e.head = i), e.length++, i
                }(this, o, n[i]);
                return a
            }, Yallist.prototype.reverse = function() {
                for (var e = this.head, t = this.tail, n = e; null !== n; n = n.prev) {
                    var i = n.prev;
                    n.prev = n.next, n.next = i
                }
                return this.head = t, this.tail = e, this
            };
            try {
                n(29942)(Yallist)
            } catch (e) {}
        },
        78341: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Struct: function() {
                    return Struct
                },
                StructError: function() {
                    return StructError
                },
                any: function() {
                    return any
                },
                array: function() {
                    return array
                },
                assert: function() {
                    return assert
                },
                assign: function() {
                    return assign
                },
                bigint: function() {
                    return bigint
                },
                boolean: function() {
                    return boolean
                },
                coerce: function() {
                    return coerce
                },
                create: function() {
                    return create
                },
                date: function() {
                    return date
                },
                defaulted: function() {
                    return defaulted
                },
                define: function() {
                    return define
                },
                deprecated: function() {
                    return deprecated
                },
                dynamic: function() {
                    return dynamic
                },
                empty: function() {
                    return empty
                },
                enums: function() {
                    return enums
                },
                func: function() {
                    return func
                },
                instance: function() {
                    return instance
                },
                integer: function() {
                    return integer
                },
                intersection: function() {
                    return intersection
                },
                is: function() {
                    return is
                },
                lazy: function() {
                    return lazy
                },
                literal: function() {
                    return literal
                },
                map: function() {
                    return map
                },
                mask: function() {
                    return mask
                },
                max: function() {
                    return max
                },
                min: function() {
                    return min
                },
                never: function() {
                    return never
                },
                nonempty: function() {
                    return nonempty
                },
                nullable: function() {
                    return nullable
                },
                number: function() {
                    return number
                },
                object: function() {
                    return object
                },
                omit: function() {
                    return omit
                },
                optional: function() {
                    return optional
                },
                partial: function() {
                    return partial
                },
                pattern: function() {
                    return pattern
                },
                pick: function() {
                    return pick
                },
                record: function() {
                    return record
                },
                refine: function() {
                    return refine
                },
                regexp: function() {
                    return regexp
                },
                set: function() {
                    return set
                },
                size: function() {
                    return size
                },
                string: function() {
                    return string
                },
                struct: function() {
                    return struct
                },
                trimmed: function() {
                    return trimmed
                },
                tuple: function() {
                    return tuple
                },
                type: function() {
                    return type
                },
                union: function() {
                    return union
                },
                unknown: function() {
                    return unknown
                },
                validate: function() {
                    return validate
                }
            });
            let StructError = class StructError extends TypeError {
                constructor(e, t) {
                    let n;
                    let {
                        message: i,
                        explanation: o,
                        ...a
                    } = e, {
                        path: l
                    } = e, c = 0 === l.length ? i : `At path: ${l.join(".")} -- ${i}`;
                    super(o ? ? c), null != o && (this.cause = c), Object.assign(this, a), this.name = this.constructor.name, this.failures = () => n ? ? (n = [e, ...t()])
                }
            };

            function isObject(e) {
                return "object" == typeof e && null != e
            }

            function isPlainObject(e) {
                if ("[object Object]" !== Object.prototype.toString.call(e)) return !1;
                let t = Object.getPrototypeOf(e);
                return null === t || t === Object.prototype
            }

            function print(e) {
                return "symbol" == typeof e ? e.toString() : "string" == typeof e ? JSON.stringify(e) : `${e}`
            }

            function* toFailures(e, t, n, i) {
                var o;
                for (let a of (isObject(o = e) && "function" == typeof o[Symbol.iterator] || (e = [e]), e)) {
                    let e = function(e, t, n, i) {
                        if (!0 === e) return;
                        !1 === e ? e = {} : "string" == typeof e && (e = {
                            message: e
                        });
                        let {
                            path: o,
                            branch: a
                        } = t, {
                            type: l
                        } = n, {
                            refinement: c,
                            message: u = `Expected a value of type \`${l}\`${c?` with refinement \`${c}\``:""}, but received: \`${print(i)}\``
                        } = e;
                        return {
                            value: i,
                            type: l,
                            refinement: c,
                            key: o[o.length - 1],
                            path: o,
                            branch: a,
                            ...e,
                            message: u
                        }
                    }(a, t, n, i);
                    e && (yield e)
                }
            }

            function* run(e, t, n = {}) {
                let {
                    path: i = [],
                    branch: o = [e],
                    coerce: a = !1,
                    mask: l = !1
                } = n, c = {
                    path: i,
                    branch: o
                };
                if (a && (e = t.coercer(e, c), l && "type" !== t.type && isObject(t.schema) && isObject(e) && !Array.isArray(e)))
                    for (let n in e) void 0 === t.schema[n] && delete e[n];
                let u = "valid";
                for (let i of t.validator(e, c)) i.explanation = n.message, u = "not_valid", yield [i, void 0];
                for (let [R, N, H] of t.entries(e, c)) {
                    let t = run(N, H, {
                        path: void 0 === R ? i : [...i, R],
                        branch: void 0 === R ? o : [...o, N],
                        coerce: a,
                        mask: l,
                        message: n.message
                    });
                    for (let n of t) n[0] ? (u = null != n[0].refinement ? "not_refined" : "not_valid", yield [n[0], void 0]) : a && (N = n[1], void 0 === R ? e = N : e instanceof Map ? e.set(R, N) : e instanceof Set ? e.add(N) : isObject(e) && (void 0 !== N || R in e) && (e[R] = N))
                }
                if ("not_valid" !== u)
                    for (let i of t.refiner(e, c)) i.explanation = n.message, u = "not_refined", yield [i, void 0];
                "valid" === u && (yield [void 0, e])
            }
            let Struct = class Struct {
                constructor(e) {
                    let {
                        type: t,
                        schema: n,
                        validator: i,
                        refiner: o,
                        coercer: a = e => e,
                        entries: l = function*() {}
                    } = e;
                    this.type = t, this.schema = n, this.entries = l, this.coercer = a, i ? this.validator = (e, t) => {
                        let n = i(e, t);
                        return toFailures(n, t, this, e)
                    } : this.validator = () => [], o ? this.refiner = (e, t) => {
                        let n = o(e, t);
                        return toFailures(n, t, this, e)
                    } : this.refiner = () => []
                }
                assert(e, t) {
                    return assert(e, this, t)
                }
                create(e, t) {
                    return create(e, this, t)
                }
                is(e) {
                    return is(e, this)
                }
                mask(e, t) {
                    return mask(e, this, t)
                }
                validate(e, t = {}) {
                    return validate(e, this, t)
                }
            };

            function assert(e, t, n) {
                let i = validate(e, t, {
                    message: n
                });
                if (i[0]) throw i[0]
            }

            function create(e, t, n) {
                let i = validate(e, t, {
                    coerce: !0,
                    message: n
                });
                if (!i[0]) return i[1];
                throw i[0]
            }

            function mask(e, t, n) {
                let i = validate(e, t, {
                    coerce: !0,
                    mask: !0,
                    message: n
                });
                if (!i[0]) return i[1];
                throw i[0]
            }

            function is(e, t) {
                let n = validate(e, t);
                return !n[0]
            }

            function validate(e, t, n = {}) {
                let i = run(e, t, n),
                    o = function(e) {
                        let {
                            done: t,
                            value: n
                        } = e.next();
                        return t ? void 0 : n
                    }(i);
                if (o[0]) {
                    let e = new StructError(o[0], function*() {
                        for (let e of i) e[0] && (yield e[0])
                    });
                    return [e, void 0]
                } {
                    let e = o[1];
                    return [void 0, e]
                }
            }

            function assign(...e) {
                let t = "type" === e[0].type,
                    n = e.map(e => e.schema),
                    i = Object.assign({}, ...n);
                return t ? type(i) : object(i)
            }

            function define(e, t) {
                return new Struct({
                    type: e,
                    schema: null,
                    validator: t
                })
            }

            function deprecated(e, t) {
                return new Struct({ ...e,
                    refiner: (t, n) => void 0 === t || e.refiner(t, n),
                    validator: (n, i) => void 0 === n || (t(n, i), e.validator(n, i))
                })
            }

            function dynamic(e) {
                return new Struct({
                    type: "dynamic",
                    schema: null,
                    * entries(t, n) {
                        let i = e(t, n);
                        yield* i.entries(t, n)
                    },
                    validator(t, n) {
                        let i = e(t, n);
                        return i.validator(t, n)
                    },
                    coercer(t, n) {
                        let i = e(t, n);
                        return i.coercer(t, n)
                    },
                    refiner(t, n) {
                        let i = e(t, n);
                        return i.refiner(t, n)
                    }
                })
            }

            function lazy(e) {
                let t;
                return new Struct({
                    type: "lazy",
                    schema: null,
                    * entries(n, i) {
                        t ? ? (t = e()), yield* t.entries(n, i)
                    },
                    validator: (n, i) => (t ? ? (t = e()), t.validator(n, i)),
                    coercer: (n, i) => (t ? ? (t = e()), t.coercer(n, i)),
                    refiner: (n, i) => (t ? ? (t = e()), t.refiner(n, i))
                })
            }

            function omit(e, t) {
                let {
                    schema: n
                } = e, i = { ...n
                };
                for (let e of t) delete i[e];
                return "type" === e.type ? type(i) : object(i)
            }

            function partial(e) {
                let t = e instanceof Struct ? { ...e.schema
                } : { ...e
                };
                for (let e in t) t[e] = optional(t[e]);
                return object(t)
            }

            function pick(e, t) {
                let {
                    schema: n
                } = e, i = {};
                for (let e of t) i[e] = n[e];
                return object(i)
            }

            function struct(e, t) {
                return console.warn("superstruct@0.11 - The `struct` helper has been renamed to `define`."), define(e, t)
            }

            function any() {
                return define("any", () => !0)
            }

            function array(e) {
                return new Struct({
                    type: "array",
                    schema: e,
                    * entries(t) {
                        if (e && Array.isArray(t))
                            for (let [n, i] of t.entries()) yield [n, i, e]
                    },
                    coercer: e => Array.isArray(e) ? e.slice() : e,
                    validator: e => Array.isArray(e) || `Expected an array value, but received: ${print(e)}`
                })
            }

            function bigint() {
                return define("bigint", e => "bigint" == typeof e)
            }

            function boolean() {
                return define("boolean", e => "boolean" == typeof e)
            }

            function date() {
                return define("date", e => e instanceof Date && !isNaN(e.getTime()) || `Expected a valid \`Date\` object, but received: ${print(e)}`)
            }

            function enums(e) {
                let t = {},
                    n = e.map(e => print(e)).join();
                for (let n of e) t[n] = n;
                return new Struct({
                    type: "enums",
                    schema: t,
                    validator: t => e.includes(t) || `Expected one of \`${n}\`, but received: ${print(t)}`
                })
            }

            function func() {
                return define("func", e => "function" == typeof e || `Expected a function, but received: ${print(e)}`)
            }

            function instance(e) {
                return define("instance", t => t instanceof e || `Expected a \`${e.name}\` instance, but received: ${print(t)}`)
            }

            function integer() {
                return define("integer", e => "number" == typeof e && !isNaN(e) && Number.isInteger(e) || `Expected an integer, but received: ${print(e)}`)
            }

            function intersection(e) {
                return new Struct({
                    type: "intersection",
                    schema: null,
                    * entries(t, n) {
                        for (let i of e) yield* i.entries(t, n)
                    },
                    * validator(t, n) {
                        for (let i of e) yield* i.validator(t, n)
                    },
                    * refiner(t, n) {
                        for (let i of e) yield* i.refiner(t, n)
                    }
                })
            }

            function literal(e) {
                let t = print(e),
                    n = typeof e;
                return new Struct({
                    type: "literal",
                    schema: "string" === n || "number" === n || "boolean" === n ? e : null,
                    validator: n => n === e || `Expected the literal \`${t}\`, but received: ${print(n)}`
                })
            }

            function map(e, t) {
                return new Struct({
                    type: "map",
                    schema: null,
                    * entries(n) {
                        if (e && t && n instanceof Map)
                            for (let [i, o] of n.entries()) yield [i, i, e], yield [i, o, t]
                    },
                    coercer: e => e instanceof Map ? new Map(e) : e,
                    validator: e => e instanceof Map || `Expected a \`Map\` object, but received: ${print(e)}`
                })
            }

            function never() {
                return define("never", () => !1)
            }

            function nullable(e) {
                return new Struct({ ...e,
                    validator: (t, n) => null === t || e.validator(t, n),
                    refiner: (t, n) => null === t || e.refiner(t, n)
                })
            }

            function number() {
                return define("number", e => "number" == typeof e && !isNaN(e) || `Expected a number, but received: ${print(e)}`)
            }

            function object(e) {
                let t = e ? Object.keys(e) : [],
                    n = never();
                return new Struct({
                    type: "object",
                    schema: e || null,
                    * entries(i) {
                        if (e && isObject(i)) {
                            let o = new Set(Object.keys(i));
                            for (let n of t) o.delete(n), yield [n, i[n], e[n]];
                            for (let e of o) yield [e, i[e], n]
                        }
                    },
                    validator: e => isObject(e) || `Expected an object, but received: ${print(e)}`,
                    coercer: e => isObject(e) ? { ...e
                    } : e
                })
            }

            function optional(e) {
                return new Struct({ ...e,
                    validator: (t, n) => void 0 === t || e.validator(t, n),
                    refiner: (t, n) => void 0 === t || e.refiner(t, n)
                })
            }

            function record(e, t) {
                return new Struct({
                    type: "record",
                    schema: null,
                    * entries(n) {
                        if (isObject(n))
                            for (let i in n) {
                                let o = n[i];
                                yield [i, i, e], yield [i, o, t]
                            }
                    },
                    validator: e => isObject(e) || `Expected an object, but received: ${print(e)}`
                })
            }

            function regexp() {
                return define("regexp", e => e instanceof RegExp)
            }

            function set(e) {
                return new Struct({
                    type: "set",
                    schema: null,
                    * entries(t) {
                        if (e && t instanceof Set)
                            for (let n of t) yield [n, n, e]
                    },
                    coercer: e => e instanceof Set ? new Set(e) : e,
                    validator: e => e instanceof Set || `Expected a \`Set\` object, but received: ${print(e)}`
                })
            }

            function string() {
                return define("string", e => "string" == typeof e || `Expected a string, but received: ${print(e)}`)
            }

            function tuple(e) {
                let t = never();
                return new Struct({
                    type: "tuple",
                    schema: null,
                    * entries(n) {
                        if (Array.isArray(n)) {
                            let i = Math.max(e.length, n.length);
                            for (let o = 0; o < i; o++) yield [o, n[o], e[o] || t]
                        }
                    },
                    validator: e => Array.isArray(e) || `Expected an array, but received: ${print(e)}`
                })
            }

            function type(e) {
                let t = Object.keys(e);
                return new Struct({
                    type: "type",
                    schema: e,
                    * entries(n) {
                        if (isObject(n))
                            for (let i of t) yield [i, n[i], e[i]]
                    },
                    validator: e => isObject(e) || `Expected an object, but received: ${print(e)}`,
                    coercer: e => isObject(e) ? { ...e
                    } : e
                })
            }

            function union(e) {
                let t = e.map(e => e.type).join(" | ");
                return new Struct({
                    type: "union",
                    schema: null,
                    coercer(t) {
                        for (let n of e) {
                            let [e, i] = n.validate(t, {
                                coerce: !0
                            });
                            if (!e) return i
                        }
                        return t
                    },
                    validator(n, i) {
                        let o = [];
                        for (let t of e) {
                            let [...e] = run(n, t, i), [a] = e;
                            if (!a[0]) return [];
                            for (let [t] of e) t && o.push(t)
                        }
                        return [`Expected the value to satisfy a union of \`${t}\`, but received: ${print(n)}`, ...o]
                    }
                })
            }

            function unknown() {
                return define("unknown", () => !0)
            }

            function coerce(e, t, n) {
                return new Struct({ ...e,
                    coercer: (i, o) => is(i, t) ? e.coercer(n(i, o), o) : e.coercer(i, o)
                })
            }

            function defaulted(e, t, n = {}) {
                return coerce(e, unknown(), e => {
                    let i = "function" == typeof t ? t() : t;
                    if (void 0 === e) return i;
                    if (!n.strict && isPlainObject(e) && isPlainObject(i)) {
                        let t = { ...e
                            },
                            n = !1;
                        for (let e in i) void 0 === t[e] && (t[e] = i[e], n = !0);
                        if (n) return t
                    }
                    return e
                })
            }

            function trimmed(e) {
                return coerce(e, string(), e => e.trim())
            }

            function empty(e) {
                return refine(e, "empty", t => {
                    let n = getSize(t);
                    return 0 === n || `Expected an empty ${e.type} but received one with a size of \`${n}\``
                })
            }

            function getSize(e) {
                return e instanceof Map || e instanceof Set ? e.size : e.length
            }

            function max(e, t, n = {}) {
                let {
                    exclusive: i
                } = n;
                return refine(e, "max", n => i ? n < t : n <= t || `Expected a ${e.type} less than ${i?"":"or equal to "}${t} but received \`${n}\``)
            }

            function min(e, t, n = {}) {
                let {
                    exclusive: i
                } = n;
                return refine(e, "min", n => i ? n > t : n >= t || `Expected a ${e.type} greater than ${i?"":"or equal to "}${t} but received \`${n}\``)
            }

            function nonempty(e) {
                return refine(e, "nonempty", t => {
                    let n = getSize(t);
                    return n > 0 || `Expected a nonempty ${e.type} but received an empty one`
                })
            }

            function pattern(e, t) {
                return refine(e, "pattern", n => t.test(n) || `Expected a ${e.type} matching \`/${t.source}/\` but received "${n}"`)
            }

            function size(e, t, n = t) {
                let i = `Expected a ${e.type}`,
                    o = t === n ? `of \`${t}\`` : `between \`${t}\` and \`${n}\``;
                return refine(e, "size", e => {
                    if ("number" == typeof e || e instanceof Date) return t <= e && e <= n || `${i} ${o} but received \`${e}\``;
                    if (e instanceof Map || e instanceof Set) {
                        let {
                            size: a
                        } = e;
                        return t <= a && a <= n || `${i} with a size ${o} but received one with a size of \`${a}\``
                    } {
                        let {
                            length: a
                        } = e;
                        return t <= a && a <= n || `${i} with a length ${o} but received one with a length of \`${a}\``
                    }
                })
            }

            function refine(e, t, n) {
                return new Struct({ ...e,
                    * refiner(i, o) {
                        yield* e.refiner(i, o);
                        let a = n(i, o),
                            l = toFailures(a, o, e, i);
                        for (let e of l) yield { ...e,
                            refinement: t
                        }
                    }
                })
            }
        }
    }
]);