"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8631], {
        38233: function(i, l, o) {
            let s;
            o.d(l, {
                kg: function() {
                    return MentionNode_$createBeautifulMentionNode
                },
                tr: function() {
                    return BeautifulMentionsPlugin
                },
                dP: function() {
                    return ZeroWidthNode
                },
                Jk: function() {
                    return ZeroWidthPlugin
                },
                bH: function() {
                    return createBeautifulMentionNode
                }
            });
            var _ = o(16356),
                p = o(71849),
                N = o(53017),
                T = o(83915),
                S = o(97352),
                b = o(64353);
            let R = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement,
                $ = R && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
                A = R && window.matchMedia("(pointer: coarse)").matches;

            function ZeroWidthPlugin() {
                let [i] = (0, p.useLexicalComposerContext)();
                return S.useEffect(() => (0, N.mergeRegister)(i.registerUpdateListener(() => {
                    i.update(() => {
                        let i = (0, T.$getRoot)(),
                            l = i.getLastDescendant();
                        (0, T.$isDecoratorNode)(l) && ((0, T.$nodesOfType)(ZeroWidthNode).forEach(i => i.remove()), l.insertAfter($createZeroWidthNode())), (0, T.$nodesOfType)(T.LineBreakNode).forEach(i => {
                            let l = i.getPreviousSibling();
                            (0, T.$isDecoratorNode)(l) && i.insertBefore($createZeroWidthNode())
                        })
                    }, {
                        tag: "history-merge"
                    })
                }), i.registerCommand(T.KEY_DOWN_COMMAND, i => {
                    if (i.ctrlKey || i.metaKey || i.altKey) return !1;
                    let l = (0, T.$getSelection)();
                    if ((0, T.$isRangeSelection)(l)) {
                        let i = l.anchor.getNode();
                        $isZeroWidthNode(i) && i.remove()
                    }
                    return !1
                }, T.COMMAND_PRIORITY_HIGH), i.registerCommand(T.SELECTION_CHANGE_COMMAND, () => {
                    let i = (0, T.$getSelection)();
                    if ((0, T.$isRangeSelection)(i)) {
                        let l = i.anchor.getNode();
                        $isZeroWidthNode(l) && l.selectPrevious()
                    }
                    return !1
                }, T.COMMAND_PRIORITY_HIGH)), [i]), null
            }
            let ZeroWidthNode = class ZeroWidthNode extends T.TextNode {
                static getType() {
                    return "zeroWidth"
                }
                static clone(i) {
                    return new ZeroWidthNode(i.__key)
                }
                static importJSON(i) {
                    return $createZeroWidthNode()
                }
                constructor(i) {
                    super("​", i)
                }
                exportJSON() {
                    return Object.assign(Object.assign({}, super.exportJSON()), {
                        type: "zeroWidth"
                    })
                }
                updateDOM() {
                    return !1
                }
                static importDOM() {
                    return null
                }
                isTextEntity() {
                    return !0
                }
                getTextContent() {
                    return "​"
                }
            };

            function $createZeroWidthNode() {
                let i = new ZeroWidthNode;
                return i.setMode("segmented"), (0, T.$applyNodeReplacement)(i)
            }

            function $isZeroWidthNode(i) {
                return i instanceof ZeroWidthNode
            }
            let mention_utils_TRIGGERS = i => "(?:" + i.join("|") + ")",
                mention_utils_VALID_CHARS = (i, l) => "(?!" + i.join("|") + ")[^\\s" + l + "]";

            function isWordChar(i, l, o) {
                return new RegExp(mention_utils_VALID_CHARS(l, o)).test(i)
            }

            function $getSelectionInfo(i, l) {
                let o = (0, T.$getSelection)();
                if (!o || !(0, T.$isRangeSelection)(o)) return;
                let s = o.anchor,
                    _ = o.focus,
                    p = o.getNodes();
                if (s.key !== _.key || s.offset !== _.offset || 0 === p.length) return;
                let [N] = p, S = (0, T.$isTextNode)(N) && N.isSimpleText(), b = "text" === s.type ? s.offset : 0, R = getTextContent(N), $ = 0 === b, A = R.length === b, L = R.charAt(b - 1), W = R.charAt(b), Y = isWordChar(L, i, l), V = isWordChar(W, i, l), U = /\s/.test(L), j = /\s/.test(W), Z = getPreviousSibling(N), X = getNextSibling(N);
                return {
                    node: N,
                    offset: b,
                    isTextNode: S,
                    textContent: R,
                    selection: o,
                    prevNode: Z,
                    nextNode: X,
                    cursorAtStartOfNode: $,
                    cursorAtEndOfNode: A,
                    wordCharBeforeCursor: Y,
                    wordCharAfterCursor: V,
                    spaceBeforeCursor: U,
                    spaceAfterCursor: j
                }
            }

            function getNextSibling(i) {
                let l = i.getNextSibling();
                for (; null !== l && $isZeroWidthNode(l);) l = l.getNextSibling();
                return l
            }

            function getPreviousSibling(i) {
                let l = i.getPreviousSibling();
                for (; null !== l && $isZeroWidthNode(l);) l = l.getPreviousSibling();
                return l
            }

            function getTextContent(i) {
                return $isZeroWidthNode(i) ? "" : i.getTextContent()
            }

            function $selectEnd() {
                let i = (0, T.$getRoot)(),
                    l = function(i) {
                        let l = i.getLastDescendant();
                        return (0, T.$isElementNode)(l) || (0, T.$isTextNode)(l) ? l : (0, T.$isDecoratorNode)(l) ? l.getParent() : i
                    }(i),
                    o = l && l.getKey(),
                    s = (0, T.$isElementNode)(l) ? l.getChildrenSize() : (0, T.$isTextNode)(l) ? getTextContent(l).length : 0,
                    _ = (0, T.$isElementNode)(l) ? "element" : "text";
                if (o) {
                    let i = (0, T.$createRangeSelection)();
                    i.anchor.set(o, s, _), i.focus.set(o, s, _), (0, T.$setSelection)(i)
                }
            }
            let L = R ? S.useLayoutEffect : S.useEffect;
            let MenuOption = class MenuOption {
                constructor(i, l, o) {
                    this.value = i, this.displayValue = l, this.data = o, this.key = o ? JSON.stringify(Object.assign(Object.assign({}, o), {
                        value: i
                    })) : i, this.displayValue = null != l ? l : i, this.ref = {
                        current: null
                    }, this.setRefElement = this.setRefElement.bind(this)
                }
                setRefElement(i) {
                    this.ref = {
                        current: i
                    }
                }
            };
            let scrollIntoViewIfNeeded = i => {
                let l = document.getElementById("typeahead-menu");
                if (!l) return;
                let o = l.getBoundingClientRect();
                o.top + o.height > window.innerHeight && l.scrollIntoView({
                    block: "center"
                }), o.top < 0 && l.scrollIntoView({
                    block: "center"
                }), i.scrollIntoView({
                    block: "nearest"
                })
            };

            function $splitNodeContainingQuery(i) {
                let l;
                let o = (0, T.$getSelection)();
                if (!(0, T.$isRangeSelection)(o) || !o.isCollapsed()) return null;
                let s = o.anchor;
                if ("text" !== s.type) return null;
                let _ = s.getNode();
                if (!_.isSimpleText()) return null;
                let p = s.offset,
                    N = getTextContent(_).slice(0, p),
                    S = i.replaceableString.length,
                    b = function(i, l, o) {
                        let s = o;
                        for (let o = s; o <= l.length; o++) i.substring(-o) === l.substring(0, o) && (s = o);
                        return s
                    }(N, i.matchingString, S),
                    R = p - b;
                return R < 0 ? null : (0 === R ? [l] = _.splitText(p) : [, l] = _.splitText(R, p), l)
            }

            function isTriggerVisibleInNearestScrollContainer(i, l) {
                let o = i.getBoundingClientRect(),
                    s = l.getBoundingClientRect();
                return o.top > s.top && o.top < s.bottom
            }

            function Menu({
                close: i,
                editor: l,
                anchorElementRef: o,
                resolution: s,
                options: _,
                menuRenderFn: p,
                onSelectOption: b,
                onSelectionChange: R,
                shouldSplitNodeWithQuery: $ = !1,
                onMenuVisibilityChange: W
            }) {
                let [Y, V] = (0, S.useState)(null), [U, j] = (0, S.useState)(!1), Z = s.match && s.match.matchingString, X = (0, S.useCallback)(i => {
                    V(i), null == R || R(i)
                }, [R]);
                (0, S.useEffect)(() => {
                    A ? X(null) : X(0)
                }, [Z]);
                let Q = (0, S.useCallback)(o => {
                        l.update(() => {
                            let l = null != s.match && $ ? $splitNodeContainingQuery(s.match) : null;
                            b(o, l, i, s.match ? s.match.matchingString : "")
                        })
                    }, [l, $, s.match, b, i]),
                    et = (0, S.useCallback)(i => {
                        let o = l.getRootElement();
                        null !== o && (o.setAttribute("aria-activedescendant", "typeahead-item-" + i), X(i))
                    }, [l]);
                (0, S.useEffect)(() => () => {
                    let i = l.getRootElement();
                    null !== i && i.removeAttribute("aria-activedescendant")
                }, [l]), L(() => {
                    null === _ ? X(null) : null !== Y || A || et(0)
                }, [_, Y, et]), (0, S.useEffect)(() => (0, N.mergeRegister)(l.registerCommand(T.KEY_ARROW_DOWN_COMMAND, i => {
                    if (null !== _ && _.length) {
                        let l = null != Y ? Y : -1,
                            o = l !== _.length - 1 ? l + 1 : 0;
                        et(o);
                        let s = _[o];
                        null != s.ref && s.ref.current && scrollIntoViewIfNeeded(s.ref.current), i.preventDefault(), i.stopImmediatePropagation()
                    }
                    return !0
                }, T.COMMAND_PRIORITY_LOW), l.registerCommand(T.KEY_ARROW_UP_COMMAND, i => {
                    if (null !== _ && _.length) {
                        let l = null != Y ? Y : _.length,
                            o = 0 !== l ? l - 1 : _.length - 1;
                        et(o);
                        let s = _[o];
                        null != s.ref && s.ref.current && scrollIntoViewIfNeeded(s.ref.current), i.preventDefault(), i.stopImmediatePropagation()
                    }
                    return !0
                }, T.COMMAND_PRIORITY_LOW), l.registerCommand(T.KEY_ESCAPE_COMMAND, l => (l.preventDefault(), l.stopImmediatePropagation(), i(), !0), T.COMMAND_PRIORITY_LOW), l.registerCommand(T.BLUR_COMMAND, l => (l.preventDefault(), l.stopImmediatePropagation(), i(), !1), T.COMMAND_PRIORITY_LOW), l.registerCommand(T.KEY_TAB_COMMAND, i => null !== _ && null !== Y && null != _[Y] && (i.preventDefault(), i.stopImmediatePropagation(), Q(_[Y]), !0), T.COMMAND_PRIORITY_LOW), l.registerCommand(T.KEY_ENTER_COMMAND, i => null !== _ && null !== Y && null != _[Y] && (null !== i && (i.preventDefault(), i.stopImmediatePropagation()), Q(_[Y]), !0), T.COMMAND_PRIORITY_LOW)), [Q, i, l, _, Y, et]);
                let en = (0, S.useMemo)(() => ({
                        options: _,
                        selectOptionAndCleanUp: Q,
                        selectedIndex: Y,
                        setHighlightedIndex: X
                    }), [Q, Y, _]),
                    er = p(o, en, s.match ? s.match.matchingString : "");
                return L(() => {
                    W && null !== er && !U ? (W(!0), j(!0)) : W && null === er && U && (W(!1), j(!1))
                }, [er, U, W]), er
            }
            var W = o(48249);

            function BeautifulMentionComponent(i) {
                let {
                    value: l,
                    trigger: o,
                    data: s,
                    className: b,
                    classNameFocused: R,
                    themeValues: A,
                    nodeKey: L,
                    component: Y
                } = i, [V] = (0, p.useLexicalComposerContext)(), [U, j, Z] = (0, W.useLexicalNodeSelection)(L), [X, Q] = (0, S.useState)(null), et = (0, T.$isNodeSelection)(X) && U, en = S.useRef(null), er = o + l, ei = (0, S.useMemo)(() => {
                    if (b) {
                        let i = [b];
                        return et && R && i.push(R), i.join(" ").trim() || void 0
                    }
                    return ""
                }, [et, b, R]), el = (0, S.useCallback)(i => {
                    if (U && (0, T.$isNodeSelection)((0, T.$getSelection)())) {
                        i.preventDefault();
                        let l = (0, T.$getNodeByKey)(L);
                        $isBeautifulMentionNode(l) && l.remove()
                    }
                    return !1
                }, [U, L]), eo = (0, S.useCallback)(i => {
                    let l = (0, T.$getNodeByKey)(L);
                    if (!l || !l.isSelected()) return !1;
                    let o = !1,
                        s = getPreviousSibling(l);
                    return (0, T.$isElementNode)(s) && (s.selectEnd(), o = !0), (0, T.$isTextNode)(s) && (s.select(), o = !0), (0, T.$isDecoratorNode)(s) && (s.selectNext(), o = !0), null === s && (l.selectPrevious(), o = !0), o && i.preventDefault(), o
                }, [L]), es = (0, S.useCallback)(i => {
                    let l = (0, T.$getNodeByKey)(L);
                    if (!l || !l.isSelected()) return !1;
                    let o = !1,
                        s = getNextSibling(l);
                    return (0, T.$isElementNode)(s) && (s.selectStart(), o = !0), (0, T.$isTextNode)(s) && (s.select(0, 0), o = !0), (0, T.$isDecoratorNode)(s) && (s.selectPrevious(), o = !0), null === s && (l.selectNext(), o = !0), o && i.preventDefault(), o
                }, [L]), ea = (0, S.useCallback)(i => {
                    var l;
                    return !!(i.target === en.current || (null === (l = en.current) || void 0 === l ? void 0 : l.contains(i.target))) && (i.shiftKey || Z(), j(!U), !0)
                }, [U, Z, j]), eu = (0, S.useCallback)(() => !!et && ((0, T.$setSelection)(null), !0), [et]), ed = (0, S.useCallback)(() => !!$ && !!U && (j(!1), !0), [U, j]);
                return (S.useEffect(() => {
                    let i = !0,
                        l = (0, N.mergeRegister)(V.registerUpdateListener(({
                            editorState: l
                        }) => {
                            i && Q(l.read(() => (0, T.$getSelection)()))
                        }), V.registerCommand(T.CLICK_COMMAND, ea, T.COMMAND_PRIORITY_LOW), V.registerCommand(T.KEY_DELETE_COMMAND, el, T.COMMAND_PRIORITY_LOW), V.registerCommand(T.KEY_BACKSPACE_COMMAND, el, T.COMMAND_PRIORITY_LOW), V.registerCommand(T.KEY_ARROW_LEFT_COMMAND, eo, T.COMMAND_PRIORITY_LOW), V.registerCommand(T.KEY_ARROW_RIGHT_COMMAND, es, T.COMMAND_PRIORITY_LOW), V.registerCommand(T.BLUR_COMMAND, eu, T.COMMAND_PRIORITY_LOW), V.registerCommand(T.SELECTION_CHANGE_COMMAND, ed, T.COMMAND_PRIORITY_LOW));
                    return () => {
                        i = !1, l()
                    }
                }, [V, eo, es, ea, eu, el, ed]), Y) ? (0, _.jsx)(Y, {
                    ref: en,
                    trigger: o,
                    value: l,
                    data: s,
                    className: ei,
                    "data-beautiful-mention": er,
                    children: er
                }) : A ? (0, _.jsxs)("span", {
                    ref: en,
                    className: et && A.containerFocused ? A.containerFocused : A.container,
                    "data-beautiful-mention": er,
                    children: [(0, _.jsx)("span", {
                        className: A.trigger,
                        children: o
                    }), (0, _.jsx)("span", {
                        className: A.value,
                        children: l
                    })]
                }) : (0, _.jsx)("span", {
                    ref: en,
                    className: ei,
                    "data-beautiful-mention": er,
                    children: er
                })
            }

            function convertElement(i) {
                let l;
                let o = i.getAttribute("data-lexical-beautiful-mention-trigger"),
                    s = i.getAttribute("data-lexical-beautiful-mention-value"),
                    _ = i.getAttribute("data-lexical-beautiful-mention-data");
                if (_) try {
                    l = JSON.parse(_)
                } catch (i) {
                    console.warn("Failed to parse data attribute of beautiful mention node", i)
                }
                if (null != o && null !== s) {
                    let i = MentionNode_$createBeautifulMentionNode(o, s, l);
                    return {
                        node: i
                    }
                }
                return null
            }
            let MentionNode_BeautifulMentionNode = class MentionNode_BeautifulMentionNode extends T.DecoratorNode {
                static getType() {
                    return "beautifulMention"
                }
                static clone(i) {
                    return new MentionNode_BeautifulMentionNode(i.__trigger, i.__value, i.__data, i.__key)
                }
                static importJSON(i) {
                    return MentionNode_$createBeautifulMentionNode(i.trigger, i.value, i.data)
                }
                exportDOM() {
                    let i = document.createElement("span");
                    return i.setAttribute("data-lexical-beautiful-mention", "true"), i.setAttribute("data-lexical-beautiful-mention-trigger", this.__trigger), i.setAttribute("data-lexical-beautiful-mention-value", this.__value), this.__data && i.setAttribute("data-lexical-beautiful-mention-data", JSON.stringify(this.__data)), i.textContent = this.getTextContent(), {
                        element: i
                    }
                }
                static importDOM() {
                    return {
                        span: i => i.hasAttribute("data-lexical-beautiful-mention") ? {
                            conversion: convertElement,
                            priority: 0
                        } : null
                    }
                }
                constructor(i, l, o, s) {
                    super(s), this.__trigger = i, this.__value = l, this.__data = o
                }
                exportJSON() {
                    let i = this.__data;
                    return Object.assign(Object.assign({
                        trigger: this.__trigger,
                        value: this.__value
                    }, i ? {
                        data: i
                    } : {}), {
                        type: "beautifulMention",
                        version: 1
                    })
                }
                createDOM() {
                    return document.createElement("span")
                }
                getTextContent() {
                    return this.__trigger + this.__value
                }
                updateDOM() {
                    return !1
                }
                getTrigger() {
                    let i = this.getLatest();
                    return i.__trigger
                }
                getValue() {
                    let i = this.getLatest();
                    return i.__value
                }
                setValue(i) {
                    let l = this.getWritable();
                    l.__value = i
                }
                getData() {
                    let i = this.getLatest();
                    return i.__data
                }
                setData(i) {
                    let l = this.getWritable();
                    l.__data = i
                }
                component() {
                    return null
                }
                decorate(i, l) {
                    let o = l.theme.beautifulMentions || {},
                        s = Object.entries(o).find(([i]) => new RegExp(i).test(this.__trigger)),
                        p = s && s[0],
                        N = s && s[1],
                        T = "string" == typeof N ? N : void 0,
                        S = T && "string" == typeof o[p + "Focused"] ? o[p + "Focused"] : void 0;
                    return (0, _.jsx)(BeautifulMentionComponent, {
                        nodeKey: this.getKey(),
                        trigger: this.getTrigger(),
                        value: this.getValue(),
                        data: this.getData(),
                        className: T,
                        classNameFocused: S,
                        themeValues: s && "string" != typeof N ? N : void 0,
                        component: this.component()
                    })
                }
            };

            function MentionNode_$createBeautifulMentionNode(i, l, o) {
                let s = new MentionNode_BeautifulMentionNode(i, l, o);
                return (0, T.$applyNodeReplacement)(s)
            }

            function $isBeautifulMentionNode(i) {
                return i instanceof MentionNode_BeautifulMentionNode
            }
            let Y = (0, T.createCommand)("INSERT_MENTION_COMMAND"),
                V = (0, T.createCommand)("REMOVE_MENTIONS_COMMAND"),
                U = (0, T.createCommand)("RENAME_MENTIONS_COMMAND"),
                j = (0, T.createCommand)("OPEN_MENTION_MENU_COMMAND");

            function $insertMentionOrTrigger(i, l, o, s) {
                let _ = $getSelectionInfo(i, l);
                if (!_) return !1;
                let {
                    node: p,
                    offset: N,
                    selection: S,
                    wordCharBeforeCursor: b,
                    wordCharAfterCursor: R,
                    cursorAtStartOfNode: $,
                    cursorAtEndOfNode: A,
                    prevNode: L,
                    nextNode: W
                } = _, Y = s ? MentionNode_$createBeautifulMentionNode(o, s) : (0, T.$createTextNode)(o);
                if (!((0, T.$isParagraphNode)(p) && 0 === N) && !(0, T.$isTextNode)(p)) return S.insertNodes([(0, T.$createTextNode)(" "), Y]), !0;
                let V = null,
                    U = [];
                return (b || $ && null !== L && !(0, T.$isTextNode)(L)) && U.push((0, T.$createTextNode)(" ")), U.push(Y), (R || A && null !== W && !(0, T.$isTextNode)(W)) && (V = (0, T.$createTextNode)(" "), U.push(V)), S.insertNodes(U), U.length > 1 && ((0, T.$isTextNode)(Y) ? Y.select() : V && V.selectPrevious()), !0
            }

            function focusEditor(i, l) {
                l && (0, T.$isTextNode)(l) ? l.select(0, 0) : i && (0, T.$isTextNode)(i) ? i.select() : $selectEnd()
            }
            let Z = R ? S.useLayoutEffect : S.useEffect,
                useIsFocused = () => {
                    let [i] = (0, p.useLexicalComposerContext)(), [l, o] = (0, S.useState)(() => !!R && i.getRootElement() === document.activeElement);
                    return Z(() => (0, N.mergeRegister)(i.registerCommand(T.FOCUS_COMMAND, () => (o(!0), !1), T.COMMAND_PRIORITY_NORMAL), i.registerCommand(T.BLUR_COMMAND, () => (o(!1), !1), T.COMMAND_PRIORITY_NORMAL)), [i]), l
                };
            let ComboboxOption = class ComboboxOption extends MenuOption {
                constructor(i, l, o, s = {}) {
                    super(l, o, s), this.itemType = i, this.comboboxItem = {
                        itemType: i,
                        value: l,
                        displayValue: o,
                        data: s
                    }, this.menuOption = new MenuOption(l, o, s)
                }
            };

            function getQueryTextForSearch(i) {
                let l = null;
                return i.getEditorState().read(() => {
                    let i = (0, T.$getSelection)();
                    (0, T.$isRangeSelection)(i) && (l = function(i) {
                        let l = i.anchor;
                        if ("text" !== l.type) return null;
                        let o = l.getNode();
                        if (!o.isSimpleText()) return null;
                        let s = l.offset;
                        return getTextContent(o).slice(0, s)
                    }(i))
                }), l
            }

            function ComboboxPlugin(i) {
                let {
                    onSelectOption: l,
                    triggers: o,
                    punctuation: s,
                    loading: $,
                    triggerFn: L,
                    onQueryChange: W,
                    onReset: Y,
                    comboboxAnchor: V,
                    comboboxAnchorClassName: U,
                    comboboxComponent: j = "div",
                    comboboxItemComponent: Z = "div",
                    onComboboxOpen: X,
                    onComboboxClose: Q,
                    onComboboxFocusChange: et,
                    comboboxAdditionalItems: en = [],
                    onComboboxItemSelect: er
                } = i, ei = useIsFocused(), [el] = (0, p.useLexicalComposerContext)(), [eo, es] = (0, S.useState)(null), [ea, eu] = (0, S.useState)(null), [ed, eg] = (0, S.useState)(null), [eh, e_] = (0, S.useState)(null), ep = 0 === i.options.length ? "trigger" : "value", em = (0, S.useMemo)(() => {
                    let l = en.map(i => new ComboboxOption("additional", i.value, i.displayValue, i.data));
                    if ("trigger" === ep) {
                        let i = o.map(i => new ComboboxOption("trigger", i, i));
                        return !eh || i.every(i => !i.value.startsWith(eh)) ? [...i, ...l] : [...i.filter(i => i.value.startsWith(eh)), ...l]
                    }
                    return [...i.options.map(i => new ComboboxOption("value", i.value, i.displayValue, i.data)), ...l]
                }, [en, ep, i.options, o, eh]), [ey, eC] = (0, S.useState)(i.comboboxOpen || !1), eN = function(i, l, o) {
                    let [s] = (0, p.useLexicalComposerContext)(), [_, N] = (0, S.useState)(l || null), [T, b] = (0, S.useState)(null);
                    return (0, S.useEffect)(() => {
                        if (l) {
                            N(l);
                            return
                        }
                        return s.registerRootListener(i => {
                            i && N(i.parentElement)
                        })
                    }, [s, l]), (0, S.useEffect)(() => {
                        if (!_) return;
                        if (!i) {
                            T && (T.remove(), b(null));
                            return
                        }
                        let {
                            height: l
                        } = _.getBoundingClientRect(), s = T || document.createElement("div");
                        s.style.position = "absolute", s.style.left = "0", s.style.right = "0", s.style.paddingTop = `${l}px`, _.prepend(s), T || b(s);
                        let p = new ResizeObserver(([i]) => {
                            s.style.paddingTop = `${i.contentRect.height}px`
                        });
                        return p.observe(_), setTimeout(() => {
                            s.className = o || ""
                        }), () => {
                            p.disconnect(), _.removeChild(s)
                        }
                    }, [_, i, T, o]), T
                }(ey, V, U), ex = (0, S.useCallback)(i => {
                    A || es(i)
                }, []), ev = (0, S.useCallback)(i => {
                    var l;
                    let o = em[i],
                        s = null === (l = o.ref) || void 0 === l ? void 0 : l.current;
                    s && s.scrollIntoView({
                        block: "nearest"
                    })
                }, [em]), eT = (0, S.useCallback)((i, l) => {
                    let o;
                    return !!ei && (ex(o = "up" === l ? null === eo ? em.length - 1 : 0 === eo ? null : eo - 1 : null === eo ? 0 : eo === em.length - 1 ? null : eo + 1), o && ev(o), i.preventDefault(), i.stopImmediatePropagation(), !0)
                }, [ei, eo, em.length, ev, ex]), eE = (0, S.useCallback)(i => {
                    ex(i), ev(i)
                }, [ev, ex]), eS = (0, S.useCallback)(() => {
                    ex(null)
                }, [ex]), eb = (0, S.useCallback)(i => {
                    let o = em[i];
                    null == er || er(o.comboboxItem), "additional" !== o.itemType && (el.update(() => {
                        let i = ed ? $splitNodeContainingQuery(ed) : null;
                        l(o.menuOption, i)
                    }), eg(null), W(null), e_(null), ex(null))
                }, [em, el, W, ex, er, ed, l]), eO = (0, S.useCallback)(i => {
                    let l = em[i];
                    null == er || er(l.comboboxItem), "additional" !== l.itemType && (el.update(() => {
                        let i = ea ? $splitNodeContainingQuery(ea) : null;
                        if (i) {
                            let o = (0, T.$createTextNode)(l.value);
                            i.replace(o), o.select()
                        } else $insertMentionOrTrigger(o, s, l.value)
                    }), eu(null), e_(null), ex(0))
                }, [em, el, ex, er, ea, o, s]), eD = (0, S.useCallback)(i => {
                    "trigger" === ep && eO(i), "value" === ep && eb(i)
                }, [ep, eO, eb]), eM = (0, S.useCallback)(i => {
                    if (!ei || null === eo) return !1;
                    let l = !1;
                    return "trigger" === ep && (l = !0, eO(eo)), "value" === ep && (l = !0, eb(eo)), l && (i.preventDefault(), i.stopImmediatePropagation()), l
                }, [ei, eb, eO, ep, eo]), eR = (0, S.useCallback)(() => {
                    let i = getQueryTextForSearch(el),
                        l = i ? i.substring(0, i.length - 1) : void 0;
                    return l && l.trim() || ex(null), !1
                }, [el, ex]), ew = (0, S.useCallback)(i => {
                    if (eC(!0), !(1 === i.key.length && !i.ctrlKey && !i.altKey && !i.metaKey && !i.repeat)) return !1;
                    let l = getQueryTextForSearch(el),
                        o = null === l ? i.key : l + i.key,
                        s = o.trim();
                    return em.some(i => i.displayValue.startsWith(s) && s.length <= i.displayValue.length) ? ex(0) : "trigger" === ep && ex(null), !1
                }, [el, em, ep, ex]), e$ = (0, S.useCallback)(() => (eC(!0), !1), []), eA = (0, S.useCallback)(() => (eC(!1), eh || (e_(null), eu(null), eg(null)), !1), [eh]);
                return ((0, S.useEffect)(() => (0, N.mergeRegister)(el.registerCommand(T.KEY_ARROW_DOWN_COMMAND, i => eT(i, "down"), T.COMMAND_PRIORITY_LOW), el.registerCommand(T.KEY_ARROW_UP_COMMAND, i => eT(i, "up"), T.COMMAND_PRIORITY_LOW), el.registerCommand(T.KEY_ENTER_COMMAND, eM, T.COMMAND_PRIORITY_LOW), el.registerCommand(T.KEY_TAB_COMMAND, eM, T.COMMAND_PRIORITY_LOW), el.registerCommand(T.KEY_BACKSPACE_COMMAND, eR, T.COMMAND_PRIORITY_LOW), el.registerCommand(T.KEY_DOWN_COMMAND, ew, T.COMMAND_PRIORITY_LOW), el.registerCommand(T.FOCUS_COMMAND, e$, T.COMMAND_PRIORITY_NORMAL), el.registerCommand(T.CLICK_COMMAND, () => (ey || eC(!0), !1), T.COMMAND_PRIORITY_LOW), el.registerCommand(T.KEY_ESCAPE_COMMAND, () => (eC(!1), !1), T.COMMAND_PRIORITY_LOW)), [el, ey, eT, eM, eR, ew, e$]), (0, S.useEffect)(() => el.registerUpdateListener(() => {
                    el.getEditorState().read(() => {
                        let i = getQueryTextForSearch(el);
                        if (null === i) {
                            Y(), eu(null), eg(null), W(null), e_(null);
                            return
                        }
                        let l = function(i, l) {
                            let o = i.split(/\s/).pop() || i,
                                s = i !== o ? i.lastIndexOf(o) : 0,
                                _ = l.some(i => i.startsWith(o) && i !== o);
                            return _ ? {
                                leadOffset: s,
                                matchingString: o,
                                replaceableString: o
                            } : null
                        }(i, o);
                        if (eu(l), l) {
                            e_(l.matchingString), eg(null);
                            return
                        }
                        let s = L(i, el);
                        if (eg(s), W(s ? s.matchingString : null), s && s.matchingString) {
                            e_(s.matchingString);
                            return
                        }
                        e_(null)
                    })
                }), [el, L, W, Y, o]), (0, S.useEffect)(() => {
                    eC(i.comboboxOpen || !1)
                }, [i.comboboxOpen]), (0, S.useEffect)(() => {
                    ey ? null == X || X() : (es(null), null == Q || Q())
                }, [X, Q, ey]), (0, S.useEffect)(() => {
                    null !== eo && em[eo] ? null == et || et(em[eo].comboboxItem) : null == et || et(null)
                }, [eo, em, et]), (0, S.useEffect)(() => {
                    if (!R) return;
                    let i = el.getRootElement(),
                        handleMousedown = l => {
                            eN && !eN.contains(l.target) && i && !i.contains(l.target) && eA()
                        };
                    return document.addEventListener("mousedown", handleMousedown), () => {
                        document.removeEventListener("mousedown", handleMousedown)
                    }
                }, [eN, el, eA]), ey && eN) ? b.createPortal((0, _.jsx)(j, {
                    loading: $,
                    itemType: ep,
                    role: "menu",
                    "aria-activedescendant": null !== eo && em[eo] ? em[eo].displayValue : "",
                    "aria-label": "Choose trigger and value",
                    "aria-hidden": !ey,
                    children: em.map((i, l) => (0, _.jsx)(Z, {
                        selected: l === eo,
                        role: "menuitem",
                        "aria-selected": eo === l,
                        "aria-label": `Choose ${i.value}`,
                        item: i.comboboxItem,
                        ref: i.setRefElement,
                        onClick: () => eD(l),
                        onMouseEnter: () => eE(l),
                        onMouseLeave: eS,
                        onMouseDown: i => i.preventDefault(),
                        children: i.displayValue
                    }, i.key))
                }), eN) : null
            }

            function TypeaheadMenuPlugin({
                options: i,
                onQueryChange: l,
                onSelectionChange: o,
                onSelectOption: s,
                onOpen: N,
                onClose: b,
                menuRenderFn: R,
                triggerFn: $,
                anchorClassName: A
            }) {
                let [L] = (0, p.useLexicalComposerContext)(), [W, Y] = (0, S.useState)(null), [V, U] = (0, S.useState)(!1), j = function(i) {
                    let {
                        resolution: l,
                        setResolution: o,
                        className: s,
                        menuVisible: _
                    } = i, [N] = (0, p.useLexicalComposerContext)(), T = (0, S.useRef)(document.createElement("div")), b = (0, S.useCallback)(() => {
                        let i = N.getRootElement(),
                            o = T.current,
                            _ = o.firstChild;
                        if (null !== i && null !== l) {
                            let {
                                left: p,
                                top: N,
                                height: S
                            } = l.getRect();
                            if (o.style.top = `${Math.max(N+window.pageYOffset,0)}px`, o.style.left = `${Math.max(p+window.pageXOffset,0)}px`, o.style.height = `${S}px`, null !== _) {
                                let l = _.getBoundingClientRect(),
                                    s = l.width,
                                    N = i.parentElement,
                                    T = N.getBoundingClientRect();
                                p + s > T.right && (o.style.left = `${T.right-s+window.pageXOffset}px`)
                            }
                            o.isConnected || (s && (o.className = s), o.setAttribute("aria-label", "Typeahead menu"), o.setAttribute("id", "typeahead-menu"), o.setAttribute("role", "listbox"), o.style.display = "block", o.style.position = "absolute", document.body.append(o)), T.current = o, i.setAttribute("aria-controls", "typeahead-menu")
                        }
                    }, [N, l, s]);
                    (0, S.useEffect)(() => {
                        let i = N.getRootElement(),
                            removeMenu = () => {
                                let i = T.current;
                                null !== i && i.isConnected && i.remove()
                            };
                        if (null !== l && _) return b(), () => {
                            null !== i && i.removeAttribute("aria-controls"), removeMenu()
                        };
                        _ || removeMenu()
                    }, [N, b, l, _]);
                    let R = (0, S.useCallback)(i => {}, [l, o]);
                    return ! function(i, l, o, s, _) {
                        let [N] = (0, p.useLexicalComposerContext)();
                        (0, S.useEffect)(() => {
                            if (null != l && null != i && _) {
                                let i = N.getRootElement(),
                                    _ = null != i ? function(i, l) {
                                        let o = getComputedStyle(i),
                                            s = "absolute" === o.position,
                                            _ = l ? /(auto|scroll|hidden)/ : /(auto|scroll)/;
                                        if ("fixed" === o.position) return document.body;
                                        for (let l = i; l = l.parentElement;)
                                            if (o = getComputedStyle(l), (!s || "static" !== o.position) && _.test(o.overflow + o.overflowY + o.overflowX)) return l;
                                        return document.body
                                    }(i, !1) : document.body,
                                    p = !1,
                                    T = isTriggerVisibleInNearestScrollContainer(l, _),
                                    handleScroll = function() {
                                        p || (window.requestAnimationFrame(function() {
                                            o(), p = !1
                                        }), p = !0);
                                        let i = isTriggerVisibleInNearestScrollContainer(l, _);
                                        i !== T && (T = i, null != s && s(i))
                                    },
                                    S = new ResizeObserver(o);
                                return window.addEventListener("resize", o), document.addEventListener("scroll", handleScroll, {
                                    capture: !0,
                                    passive: !0
                                }), S.observe(l), () => {
                                    S.unobserve(l), window.removeEventListener("resize", o), document.removeEventListener("scroll", handleScroll)
                                }
                            }
                        }, [l, N, s, o, i, _])
                    }(l, T.current, b, R, _), T
                }({
                    resolution: W,
                    setResolution: Y,
                    className: A,
                    menuVisible: V
                }), Z = (0, S.useCallback)(() => {
                    Y(null), null != b && null !== W && b()
                }, [b, W]), X = (0, S.useCallback)(i => {
                    Y(i), null != N && null === W && N(i)
                }, [N, W]);
                return (0, S.useEffect)(() => {
                    null === W && V && U(!1);
                    let i = L.registerUpdateListener(() => {
                        L.getEditorState().read(() => {
                            var i;
                            let o;
                            let s = document.createRange(),
                                _ = (0, T.$getSelection)(),
                                p = (o = null, L.getEditorState().read(() => {
                                    let i = (0, T.$getSelection)();
                                    (0, T.$isRangeSelection)(i) && (o = function(i) {
                                        let l = i.anchor;
                                        if ("text" !== l.type) return null;
                                        let o = l.getNode();
                                        if (!o.isSimpleText()) return null;
                                        let s = l.offset;
                                        return getTextContent(o).slice(0, s)
                                    }(i))
                                }), o);
                            if (!(0, T.$isRangeSelection)(_) || !_.isCollapsed() || null === p || null === s) {
                                Z();
                                return
                            }
                            let N = $(p, L);
                            if (l(N ? N.matchingString : null), null !== N && !(0 === N.leadOffset && L.getEditorState().read(() => {
                                    let i = (0, T.$getSelection)();
                                    if ((0, T.$isRangeSelection)(i)) {
                                        let l = i.anchor,
                                            o = l.getNode(),
                                            s = o.getPreviousSibling();
                                        return (0, T.$isTextNode)(s) && s.isTextEntity()
                                    }
                                    return !1
                                }))) {
                                let l = function(i, l) {
                                    let o = window.getSelection();
                                    if (null === o || !o.isCollapsed) return !1;
                                    let s = o.anchorNode,
                                        _ = o.anchorOffset;
                                    if (null == s || null == _) return !1;
                                    try {
                                        l.setStart(s, i), l.setEnd(s, _)
                                    } catch (i) {
                                        return !1
                                    }
                                    return !0
                                }(N.leadOffset, s);
                                if (null !== l) {
                                    i = () => X({
                                        getRect: () => s.getBoundingClientRect(),
                                        match: N
                                    }), S.startTransition ? S.startTransition(i) : i();
                                    return
                                }
                            }
                            Z()
                        })
                    });
                    return () => {
                        i()
                    }
                }, [L, $, l, W, Z, X, V, U]), null === W || null === L ? null : (0, _.jsx)(Menu, {
                    close: Z,
                    resolution: W,
                    editor: L,
                    anchorElementRef: j,
                    options: i,
                    menuRenderFn: R,
                    onSelectOption: s,
                    onSelectionChange: o,
                    onMenuVisibilityChange: U,
                    shouldSplitNodeWithQuery: !0
                })
            }
            var __rest = function(i, l) {
                var o = {};
                for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && 0 > l.indexOf(s) && (o[s] = i[s]);
                if (null != i && "function" == typeof Object.getOwnPropertySymbols)
                    for (var _ = 0, s = Object.getOwnPropertySymbols(i); _ < s.length; _++) 0 > l.indexOf(s[_]) && Object.prototype.propertyIsEnumerable.call(i, s[_]) && (o[s[_]] = i[s[_]]);
                return o
            };
            let MentionOption = class MentionOption extends MenuOption {
                constructor(i, l, o, s) {
                    super(l, o, s), this.trigger = i, this.menuItem = {
                        trigger: i,
                        value: l,
                        displayValue: o,
                        data: s
                    }
                }
            };
            let VALID_JOINS = i => "(?:\\.[ |$]|\\s|[" + i + "]|)";

            function checkForMentions(i, l, o, s) {
                let _ = RegExp("(^|\\s|\\()(" + mention_utils_TRIGGERS(l) + "((?:" + mention_utils_VALID_CHARS(l, o) + (s ? VALID_JOINS(o) : "") + "){0,75}))$").exec(i);
                if (null !== _) {
                    let i = _[1],
                        l = _[2],
                        o = _[3];
                    if (l.length >= 1) return {
                        leadOffset: _.index + i.length,
                        matchingString: o,
                        replaceableString: l
                    }
                }
                return null
            }

            function BeautifulMentionsPlugin(i) {
                var l, o;
                let {
                    items: s,
                    onSearch: $,
                    searchDelay: L = i.onSearch ? 250 : 0,
                    allowSpaces: W = !0,
                    insertOnBlur: Z = !0,
                    menuComponent: X = "ul",
                    menuItemComponent: Q = "li",
                    menuAnchorClassName: et,
                    showMentionsOnDelete: en,
                    showCurrentMentionsAsSuggestions: er = !0,
                    mentionEnclosure: ei,
                    onMenuOpen: el,
                    onMenuClose: eo,
                    onMenuItemSelect: es,
                    punctuation: ea = "\\.,\\*\\?\\$\\|#{}\\(\\)\\^\\[\\]\\\\/!%'\"~=<>_:;"
                } = i, eu = (0, S.useRef)(!1), ed = useIsFocused(), eg = (0, S.useMemo)(() => i.triggers || Object.keys(s || {}), [i.triggers, s]), [eh] = (0, p.useLexicalComposerContext)(), [e_, ep] = (0, S.useState)(null), [em, ey] = (0, S.useState)(null), {
                    results: eC,
                    loading: eN,
                    query: ex
                } = function(i) {
                    let {
                        queryString: l,
                        trigger: o,
                        searchDelay: s,
                        items: _,
                        onSearch: p,
                        justSelectedAnOption: N
                    } = i, T = function(i, l) {
                        let [o, s] = (0, S.useState)(i);
                        return (0, S.useEffect)(() => {
                            let o = setTimeout(() => {
                                s(i)
                            }, l);
                            return () => clearTimeout(o)
                        }, [i, l]), o
                    }(l, s), [b, R] = (0, S.useState)(!1), [$, A] = (0, S.useState)([]), [L, W] = (0, S.useState)(null);
                    return (0, S.useEffect)(() => {
                        if (null === o || null === T) {
                            A([]), W(null);
                            return
                        }
                        if (_) {
                            let i = _ && Object.entries(_).find(([i]) => new RegExp(i).test(o));
                            if (!i) return;
                            let l = T ? i[1].filter(i => {
                                let l = "string" == typeof i ? i : i.value;
                                return l.toLowerCase().includes(T.toLowerCase())
                            }) : [...i[1]];
                            A(l), W(T);
                            return
                        }
                        if (p) {
                            R(!0), W(T), p(o, (null == N ? void 0 : N.current) ? "" : T).then(A).finally(() => R(!1)), (null == N ? void 0 : N.current) && (N.current = !1);
                            return
                        }
                    }, [T, _, p, o, N]), (0, S.useMemo)(() => ({
                        loading: b,
                        results: $,
                        query: L
                    }), [b, $, L])
                }({
                    queryString: e_,
                    searchDelay: L,
                    trigger: em,
                    items: s,
                    onSearch: $,
                    justSelectedAnOption: eu
                }), [ev, eT] = (0, S.useState)(null), [eE, eS] = (0, S.useState)(null), eb = "string" == typeof(l = i.creatable) || "boolean" == typeof l ? l : null !== em && "object" == typeof l && l[em], eO = "number" == typeof(o = i.menuItemLimit) || !1 === o ? o : void 0 === o ? 5 : null !== em && ("object" == typeof o ? o[em] : 5), eD = (0, S.useMemo)(() => {
                    if (!em) return [];
                    let i = eC.map(i => {
                        if ("string" == typeof i) return new MentionOption(em, i, i); {
                            let {
                                value: l
                            } = i, o = __rest(i, ["value"]);
                            return new MentionOption(em, l, l, o)
                        }
                    });
                    !1 !== eO && eO > 0 && (i = i.slice(0, eO));
                    let l = !$ || !eN && null !== ex;
                    if (l && er && eh.getEditorState().read(() => {
                            let l = (0, T.$nodesOfType)(MentionNode_BeautifulMentionNode);
                            for (let o of l) {
                                let l = o.getValue(),
                                    s = o.getData();
                                o.getTrigger() === em && (null === ex || o.getValue().startsWith(ex)) && i.every(i => i.value !== l) && i.push(new MentionOption(em, l, l, s))
                            }
                        }), ex && i.every(i => i.displayValue !== ex)) {
                        let l = "string" == typeof eb ? eb.replace("{{name}}", ex) : void 0 === eb || eb ? `Add "${ex}"` : void 0;
                        l && i.push(new MentionOption(em, ex, l))
                    }
                    return i
                }, [eC, $, eN, ex, eh, em, eb, eO, er]), eM = ed && (!!eD.length || eN), eR = (0, S.useCallback)(() => {
                    ey(null)
                }, []), ew = (0, S.useCallback)((i, l, o) => {
                    eh.update(() => {
                        if (!em) return;
                        let s = !!eb && i.value !== i.displayValue,
                            _ = s && ei && /\s/.test(i.value) ? ei + i.value + ei : i.value,
                            p = MentionNode_$createBeautifulMentionNode(em, _, i.data);
                        l && l.replace(p), null == o || o(), eu.current = !0
                    })
                }, [eh, em, eb, ei]), e$ = (0, S.useCallback)((i, l, o) => {
                    em && (null == es || es({
                        trigger: em,
                        value: i.value,
                        displayValue: i.displayValue,
                        data: i.data
                    }), ew(i, l, o))
                }, [ew, es, em]), eA = (0, S.useCallback)(i => {
                    let l = $getSelectionInfo(eg, ea);
                    if ((null == l ? void 0 : l.isTextNode) && l.wordCharAfterCursor) return null;
                    let o = checkForMentions(i, eg, ea, W);
                    if (o) {
                        let {
                            replaceableString: i,
                            matchingString: l
                        } = o, s = i.lastIndexOf(l), _ = -1 === s ? i : i.substring(0, s) + i.substring(s + l.length);
                        if (ey(_ || null), o.replaceableString) return o
                    } else ey(null);
                    return null
                }, [W, ea, eg]), ek = (0, S.useCallback)(() => {
                    let i = null !== ev ? eD[ev] : void 0,
                        l = eD.find(i => i.value !== i.displayValue);
                    if (l && (A || null === i) && (i = l), !i) return !1;
                    let o = $getSelectionInfo(eg, ea);
                    if (!em || !o || !o.isTextNode) return !1;
                    let s = o.node,
                        _ = getTextContent(s),
                        p = checkForMentions(_, eg, ea, !1);
                    if (null === p) return !1;
                    let N = _.search(RegExp(`${p.replaceableString}\\s?$`));
                    if (-1 === N) return !1;
                    let T = MentionNode_$createBeautifulMentionNode(em, i.value, i.data);
                    return s.setTextContent(_.substring(0, N)), s.insertAfter(T), T.selectNext(), !0
                }, [eD, ea, ev, em, eg]), eP = (0, S.useCallback)(() => {
                    let i = (0, T.$getSelection)();
                    !i && eE ? (0, T.$setSelection)(eE) : i || $selectEnd(), eE && eS(null)
                }, [eE]), eI = (0, S.useCallback)(() => {
                    let i = (0, T.$getSelection)();
                    i && (eS(i), (0, T.$setSelection)(null))
                }, []), eL = (0, S.useCallback)(i => {
                    if (!en) return !1;
                    let l = $getSelectionInfo(eg, ea);
                    if (l) {
                        let {
                            node: o,
                            prevNode: s,
                            offset: _
                        } = l, p = $isBeautifulMentionNode(o) ? o : $isBeautifulMentionNode(s) && 0 === _ ? s : null;
                        if (p) {
                            let l = p.getTrigger();
                            return p.replace((0, T.$createTextNode)(l)), i.preventDefault(), !0
                        }
                    }
                    return !1
                }, [en, eg, ea]), eB = (0, S.useCallback)(i => {
                    let {
                        key: l,
                        metaKey: o,
                        ctrlKey: s
                    } = i, _ = 1 === l.length, p = eg.some(i => l === i), N = isWordChar(l, eg, ea), S = $getSelectionInfo(eg, ea);
                    if (!_ || !N && !p || !S || o || s) return !1;
                    let {
                        node: b,
                        offset: R,
                        isTextNode: $,
                        textContent: A,
                        prevNode: L,
                        nextNode: W,
                        wordCharAfterCursor: Y,
                        cursorAtStartOfNode: V,
                        cursorAtEndOfNode: U
                    } = S;
                    if ($ && V && $isBeautifulMentionNode(L) && b.insertBefore((0, T.$createTextNode)(" ")), $ && U && $isBeautifulMentionNode(W) && b.insertAfter((0, T.$createTextNode)(" ")), $ && p && Y) {
                        let i = A.substring(0, R) + " " + A.substring(R);
                        b.setTextContent(i)
                    }
                    return $isBeautifulMentionNode(b) && null === W && b.insertAfter((0, T.$createTextNode)(" ")), !1
                }, [ea, eg]);
                return (S.useEffect(() => (0, N.mergeRegister)(eh.registerCommand(T.KEY_DOWN_COMMAND, eB, T.COMMAND_PRIORITY_LOW), eh.registerCommand(T.KEY_BACKSPACE_COMMAND, eL, T.COMMAND_PRIORITY_LOW), eh.registerCommand(T.BLUR_COMMAND, () => !!Z && ek(), T.COMMAND_PRIORITY_LOW), eh.registerCommand(T.KEY_SPACE_COMMAND, () => !W && !!eb && ek(), T.COMMAND_PRIORITY_LOW), eh.registerCommand(Y, ({
                    trigger: i,
                    value: l,
                    focus: o = !0
                }) => {
                    eP();
                    let s = $insertMentionOrTrigger(eg, ea, i, l);
                    return o || eI(), s
                }, T.COMMAND_PRIORITY_LOW), eh.registerCommand(V, ({
                    trigger: i,
                    value: l,
                    focus: o
                }) => {
                    let s = function(i, l, o = !0) {
                        let s = !1,
                            _ = null,
                            p = null,
                            N = (0, T.$nodesOfType)(MentionNode_BeautifulMentionNode);
                        for (let o of N) {
                            let N = o.getTrigger() === i,
                                S = o.getValue() === l;
                            N && (S || !l) && (_ = getPreviousSibling(o), p = getNextSibling(o), o.remove(), s = !0, _ && getTextContent(_).endsWith(" ") && p && getTextContent(p).startsWith(" ") && _.setTextContent(getTextContent(_).slice(0, -1)), null === p && (0, T.$isTextNode)(_) && getTextContent(_).endsWith(" ") && _.setTextContent(getTextContent(_).trimEnd()))
                        }
                        return s && o && focusEditor(_, p), s
                    }(i, l, o);
                    return s && !o && eI(), s
                }, T.COMMAND_PRIORITY_LOW), eh.registerCommand(U, ({
                    trigger: i,
                    newValue: l,
                    value: o,
                    focus: s
                }) => {
                    let _ = function(i, l, o, s = !0) {
                        let _ = (0, T.$nodesOfType)(MentionNode_BeautifulMentionNode),
                            p = null;
                        for (let s of _) {
                            let _ = s.getTrigger() === i,
                                N = s.getValue() === o;
                            _ && (N || !o) && (p = s, s.setValue(l))
                        }
                        if (p && s) {
                            let i = getPreviousSibling(p),
                                l = getNextSibling(p);
                            focusEditor(i, l), l && (0, T.$isTextNode)(l) ? l.select(0, 0) : $selectEnd()
                        }
                        return null !== p
                    }(i, l, o, s);
                    return _ && !s && eI(), _
                }, T.COMMAND_PRIORITY_LOW), eh.registerCommand(j, ({
                    trigger: i
                }) => (eP(), $insertMentionOrTrigger(eg, ea, i)), T.COMMAND_PRIORITY_LOW)), [eh, eg, ea, W, Z, eb, ed, ek, eP, eI, eB, eL]), (0, S.useEffect)(() => {
                    eM ? null == el || el() : null == eo || eo()
                }, [el, eo, eM]), R) ? i.combobox ? (0, _.jsx)(ComboboxPlugin, {
                    options: eD,
                    loading: eN,
                    onQueryChange: ep,
                    onSelectOption: ew,
                    onReset: () => ey(null),
                    triggerFn: eA,
                    triggers: eg,
                    punctuation: ea,
                    creatable: eb,
                    comboboxOpen: i.comboboxOpen,
                    comboboxAnchor: i.comboboxAnchor,
                    comboboxAnchorClassName: i.comboboxAnchorClassName,
                    comboboxComponent: i.comboboxComponent,
                    comboboxItemComponent: i.comboboxItemComponent,
                    comboboxAdditionalItems: i.comboboxAdditionalItems,
                    onComboboxOpen: i.onComboboxOpen,
                    onComboboxClose: i.onComboboxClose,
                    onComboboxFocusChange: i.onComboboxFocusChange,
                    onComboboxItemSelect: i.onComboboxItemSelect
                }) : (0, _.jsx)(TypeaheadMenuPlugin, {
                    onQueryChange: ep,
                    onSelectOption: e$,
                    onSelectionChange: eT,
                    triggerFn: eA,
                    options: eD,
                    anchorClassName: et,
                    onClose: eR,
                    menuRenderFn: (i, {
                        selectedIndex: l,
                        selectOptionAndCleanUp: o,
                        setHighlightedIndex: s
                    }) => i.current && (eD.length > 0 || eN) ? b.createPortal((0, _.jsx)(X, {
                        loading: eN,
                        role: "menu",
                        "aria-label": "Choose a mention",
                        "aria-hidden": !eM,
                        "aria-activedescendant": null !== l && eD[l] ? eD[l].displayValue : "",
                        children: eD.map((i, p) => (0, _.jsx)(Q, Object.assign({
                            tabIndex: -1,
                            selected: l === p,
                            ref: i.setRefElement,
                            role: "menuitem",
                            "aria-selected": l === p,
                            "aria-label": `Choose ${i.value}`,
                            item: i.menuItem,
                            itemValue: i.value,
                            label: i.displayValue
                        }, i.data, {
                            onClick: () => {
                                s(p), o(i)
                            },
                            onMouseDown: i => {
                                i.preventDefault()
                            },
                            onMouseEnter: () => {
                                s(p)
                            },
                            children: i.displayValue
                        }), i.key))
                    }), i.current) : null
                }) : null
            }

            function createBeautifulMentionNode(i) {
                return [s = s || class CustomBeautifulMentionNode extends MentionNode_BeautifulMentionNode {
                    static getType() {
                        return "custom-beautifulMention"
                    }
                    static clone(i) {
                        return new CustomBeautifulMentionNode(i.__trigger, i.__value, i.__data, i.__key)
                    }
                    static importJSON(i) {
                        return new CustomBeautifulMentionNode(i.trigger, i.value, i.data)
                    }
                    exportJSON() {
                        let i = this.__data;
                        return Object.assign(Object.assign({
                            trigger: this.__trigger,
                            value: this.__value
                        }, i ? {
                            data: i
                        } : {}), {
                            type: "custom-beautifulMention",
                            version: 1
                        })
                    }
                    component() {
                        return i
                    }
                    decorate(i, l) {
                        return super.decorate(i, l)
                    }
                }, {
                    replace: MentionNode_BeautifulMentionNode,
                    with: i => new s(i.getTrigger(), i.getValue(), i.getData())
                }]
            }
        },
        77808: function(i, l, o) {
            let s = o(4313);
            i.exports = s
        },
        4313: function(i, l, o) {
            var s = o(34027),
                _ = o(85841),
                p = o(28252),
                N = o(83915);

            function z(i) {
                let l = new URLSearchParams;
                l.append("code", i);
                for (let i = 1; i < arguments.length; i++) l.append("v", arguments[i]);
                throw Error(`Minified Lexical error #${i}; visit https://lexical.dev/docs/error?${l} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`)
            }
            let T = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement;

            function B(i) {
                let l = N.$getSelection();
                if (null == l) throw Error("Expected valid LexicalSelection");
                return N.$isRangeSelection(l) && l.isCollapsed() || 0 === l.getNodes().length ? "" : s.$generateHtmlFromNodes(i, l)
            }

            function C(i) {
                let l = N.$getSelection();
                if (null == l) throw Error("Expected valid LexicalSelection");
                return N.$isRangeSelection(l) && l.isCollapsed() || 0 === l.getNodes().length ? null : JSON.stringify(D(i, l))
            }

            function E(i, l, o) {
                (N.DEPRECATED_$isGridSelection(o) || null !== p.$findMatchingParent(o.anchor.getNode(), i => N.DEPRECATED_$isGridCellNode(i)) && null !== p.$findMatchingParent(o.focus.getNode(), i => N.DEPRECATED_$isGridCellNode(i))) && 1 === l.length && N.DEPRECATED_$isGridNode(l[0]) ? function(i, l, o, s) {
                    let _, T;
                    1 === i.length && N.DEPRECATED_$isGridNode(i[0]) || z(42);
                    var S = i[0];
                    i = S.getChildren(), o = S.getFirstChildOrThrow().getChildrenSize();
                    var b = S.getChildrenSize(),
                        R = p.$findMatchingParent(l.anchor.getNode(), i => N.DEPRECATED_$isGridCellNode(i));
                    l = (S = R && p.$findMatchingParent(R, i => N.DEPRECATED_$isGridRowNode(i))) && p.$findMatchingParent(S, i => N.DEPRECATED_$isGridNode(i)), N.DEPRECATED_$isGridCellNode(R) && N.DEPRECATED_$isGridRowNode(S) && N.DEPRECATED_$isGridNode(l) || z(43);
                    var $ = S.getIndexWithinParent(),
                        A = Math.min(l.getChildrenSize() - 1, $ + b - 1);
                    b = R.getIndexWithinParent(), R = Math.min(S.getChildrenSize() - 1, b + o - 1), o = Math.min(b, R), S = Math.min($, A), b = Math.max(b, R), $ = Math.max($, A), A = l.getChildren(), R = 0;
                    for (let l = S; l <= $; l++) {
                        var L = A[l];
                        N.DEPRECATED_$isGridRowNode(L) || z(24);
                        var W = i[R];
                        N.DEPRECATED_$isGridRowNode(W) || z(24), L = L.getChildren(), W = W.getChildren();
                        let s = 0;
                        for (let i = o; i <= b; i++) {
                            let p = L[i];
                            N.DEPRECATED_$isGridCellNode(p) || z(25);
                            let R = W[s];
                            N.DEPRECATED_$isGridCellNode(R) || z(25), l === S && i === o ? _ = p.getKey() : l === $ && i === b && (T = p.getKey());
                            let A = p.getChildren();
                            R.getChildren().forEach(i => {
                                N.$isTextNode(i) && N.$createParagraphNode().append(i), p.append(i)
                            }), A.forEach(i => i.remove()), s++
                        }
                        R++
                    }
                    _ && T && ((i = N.DEPRECATED_$createGridSelection()).set(l.getKey(), _, T), N.$setSelection(i), s.dispatchCommand(N.SELECTION_CHANGE_COMMAND, void 0))
                }(l, o, !1, i) : function(i, l) {
                    let o = [],
                        s = null;
                    for (let l = 0; l < i.length; l++) {
                        let _ = i[l],
                            p = N.$isLineBreakNode(_);
                        if (p || N.$isDecoratorNode(_) && _.isInline() || N.$isElementNode(_) && _.isInline() || N.$isTextNode(_) || _.isParentRequired()) {
                            if (null === s && (s = _.createParentElementNode(), o.push(s), p)) continue;
                            null !== s && s.append(_)
                        } else o.push(_), s = null
                    }
                    N.$isRangeSelection(l) ? l.insertNodes(o) : N.DEPRECATED_$isGridSelection(l) && (i = l.anchor.getNode(), N.DEPRECATED_$isGridCellNode(i) || z(41), i.append(...o))
                }(l, o)
            }

            function D(i, l) {
                let o = [],
                    s = N.$getRoot().getChildren();
                for (let p = 0; p < s.length; p++) ! function J(i, l, o, s = []) {
                    let p = null == l || o.isSelected(l),
                        T = N.$isElementNode(o) && o.excludeFromCopy("html");
                    var S = o;
                    if (null !== l) {
                        var b = _.$cloneWithProperties(o);
                        S = b = N.$isTextNode(b) && null != l ? _.$sliceSelectedTextNodeContent(l, b) : b
                    }
                    let R = N.$isElementNode(S) ? S.getChildren() : [];
                    var $ = S;
                    b = $.exportJSON();
                    var A = $.constructor;
                    b.type !== A.getType() && z(58, A.name);
                    let L = b.children;
                    for (N.$isElementNode($) && (Array.isArray(L) || z(59, A.name)), N.$isTextNode(S) && (0 < (S = S.__text).length ? b.text = S : p = !1), S = 0; S < R.length; S++) A = J(i, l, $ = R[S], b.children), !p && N.$isElementNode(o) && A && o.extractWithChild($, l, "clone") && (p = !0);
                    if (p && !T) s.push(b);
                    else if (Array.isArray(b.children))
                        for (i = 0; i < b.children.length; i++) s.push(b.children[i]);
                    return p
                }(i, l, s[p], o);
                return {
                    namespace: i._config.namespace,
                    nodes: o
                }
            }

            function K(i) {
                let l = [];
                for (let o = 0; o < i.length; o++) {
                    let s = N.$parseSerializedNode(i[o]);
                    N.$isTextNode(s) && _.$addNodeStyle(s), l.push(s)
                }
                return l
            }
            let S = null;

            function M(i, l) {
                var o = T ? (i._window || window).getSelection() : null;
                if (!o) return !1;
                var s = o.anchorNode;
                if (o = o.focusNode, null !== s && null !== o && !N.isSelectionWithinEditor(i, s, o) || (l.preventDefault(), l = l.clipboardData, s = N.$getSelection(), null === l || null === s)) return !1;
                o = B(i), i = C(i);
                let _ = "";
                return null !== s && (_ = s.getTextContent()), null !== o && l.setData("text/html", o), null !== i && l.setData("application/x-lexical-editor", i), l.setData("text/plain", _), !0
            }
            l.$generateJSONFromSelectedNodes = D, l.$generateNodesFromSerializedNodes = K, l.$getHtmlContent = B, l.$getLexicalContent = C, l.$insertDataTransferForPlainText = function(i, l) {
                null != (i = i.getData("text/plain") || i.getData("text/uri-list")) && l.insertRawText(i)
            }, l.$insertDataTransferForRichText = function(i, l, o) {
                var _ = i.getData("application/x-lexical-editor");
                if (_) try {
                    let i = JSON.parse(_);
                    if (i.namespace === o._config.namespace && Array.isArray(i.nodes)) {
                        let s = K(i.nodes);
                        return E(o, s, l)
                    }
                } catch {}
                if (_ = i.getData("text/html")) try {
                    var p = (new DOMParser).parseFromString(_, "text/html"),
                        T = s.$generateNodesFromDOM(o, p);
                    return E(o, T, l)
                } catch {}
                if (null != (i = i.getData("text/plain") || i.getData("text/uri-list"))) {
                    if (N.$isRangeSelection(l))
                        for (o = (i = i.split(/(\r?\n|\t)/)).length, p = 0; p < o; p++) "\n" === (T = i[p]) || "\r\n" === T ? l.insertParagraph() : "	" === T ? l.insertNodes([N.$createTabNode()]) : l.insertText(T);
                    else l.insertRawText(i)
                }
            }, l.$insertGeneratedNodes = E, l.copyToClipboard = async function(i, l) {
                if (null !== S) return !1;
                if (null !== l) return new Promise(o => {
                    i.update(() => {
                        o(M(i, l))
                    })
                });
                var o = i.getRootElement();
                let s = null == i._window ? window.document : i._window.document,
                    _ = T ? (i._window || window).getSelection() : null;
                if (null === o || null === _) return !1;
                let b = s.createElement("span");
                return b.style.cssText = "position: fixed; top: -1000px;", b.append(s.createTextNode("#")), o.append(b), (o = new Range).setStart(b, 0), o.setEnd(b, 1), _.removeAllRanges(), _.addRange(o), new Promise(l => {
                    let o = i.registerCommand(N.COPY_COMMAND, s => (p.objectKlassEquals(s, ClipboardEvent) && (o(), null !== S && (window.clearTimeout(S), S = null), l(M(i, s))), !0), N.COMMAND_PRIORITY_CRITICAL);
                    S = window.setTimeout(() => {
                        o(), S = null, l(!1)
                    }, 50), s.execCommand("copy"), b.remove()
                })
            }
        },
        31372: function(i, l, o) {
            let s = o(68748);
            i.exports = s
        },
        68748: function(i, l, o) {
            var s = o(83915);
            l.registerDragonSupport = function(i) {
                let l = window.location.origin,
                    r = o => {
                        if (o.origin === l) {
                            var _ = i.getRootElement();
                            if (document.activeElement === _ && "string" == typeof(_ = o.data)) {
                                try {
                                    var p = JSON.parse(_)
                                } catch (i) {
                                    return
                                }
                                if (p && "nuanria_messaging" === p.protocol && "request" === p.type && (p = p.payload) && "makeChanges" === p.functionId && (p = p.args)) {
                                    let [l, _, N, T, S] = p;
                                    i.update(() => {
                                        let i = s.$getSelection();
                                        if (s.$isRangeSelection(i)) {
                                            var p = i.anchor;
                                            let b = p.getNode(),
                                                R = 0,
                                                $ = 0;
                                            s.$isTextNode(b) && 0 <= l && 0 <= _ && (R = l, $ = l + _, i.setTextNodeRange(b, R, b, $)), (R !== $ || "" !== N) && (i.insertRawText(N), b = p.getNode()), s.$isTextNode(b) && (R = T, $ = T + S, R = R > (p = b.getTextContentSize()) ? p : R, $ = $ > p ? p : $, i.setTextNodeRange(b, R, b, $)), o.stopImmediatePropagation()
                                        }
                                    })
                                }
                            }
                        }
                    };
                return window.addEventListener("message", r, !0), () => {
                    window.removeEventListener("message", r, !0)
                }
            }
        },
        5508: function(i, l, o) {
            let s = o(85817);
            i.exports = s
        },
        85817: function(i, l, o) {
            var s = o(28252),
                _ = o(83915);
            l.createEmptyHistoryState = function() {
                return {
                    current: null,
                    redoStack: [],
                    undoStack: []
                }
            }, l.registerHistory = function(i, l, o) {
                var p;
                let N, T;
                let S = (p = o, N = Date.now(), T = 0, (l, o, s, S, b, R) => {
                    let $ = Date.now();
                    if (R.has("historic")) return T = 0, N = $, 2;
                    let A = function(i, l, o, s, p) {
                            if (null === i || 0 === o.size && 0 === s.size && !p) return 0;
                            var N = l._selection,
                                T = i._selection;
                            if (p) return 1;
                            if (!(_.$isRangeSelection(N) && _.$isRangeSelection(T) && T.isCollapsed() && N.isCollapsed())) return 0;
                            p = l._nodeMap;
                            let S = [];
                            for (let i of o) void 0 !== (o = p.get(i)) && S.push(o);
                            for (let [i, l] of s) l && (void 0 === (s = p.get(i)) || _.$isRootNode(s) || S.push(s));
                            return 0 === S.length ? 0 : 1 < S.length ? (l = (s = l._nodeMap).get(N.anchor.key), T = s.get(T.anchor.key), l && T && !i._nodeMap.has(l.__key) && _.$isTextNode(l) && 1 === l.__text.length && 1 === N.anchor.offset ? 2 : 0) : (l = S[0], i = i._nodeMap.get(l.__key), _.$isTextNode(i) && _.$isTextNode(l) && i.__mode === l.__mode) ? (i = i.__text) === (l = l.__text) ? 0 : (N = N.anchor, T = T.anchor, N.key !== T.key || "text" !== N.type) ? 0 : (N = N.offset, T = T.offset, 1 == (i = l.length - i.length) && T === N - 1 ? 2 : -1 === i && T === N + 1 ? 3 : -1 === i && T === N ? 4 : 0) : 0
                        }(l, o, S, b, i.isComposing()),
                        L = (() => {
                            var L = null === s || s.editor === i,
                                W = R.has("history-push");
                            if (!W && L && R.has("history-merge")) return 0;
                            if (null === l) return 1;
                            var Y = o._selection;
                            if (!(0 < S.size || 0 < b.size)) return null !== Y ? 0 : 2;
                            if (!1 === W && 0 !== A && A === T && $ < N + p && L) return 0;
                            if (1 === S.size) {
                                {
                                    W = Array.from(S)[0], L = l._nodeMap.get(W), W = o._nodeMap.get(W), Y = l._selection;
                                    let i = o._selection,
                                        s = !1;
                                    _.$isRangeSelection(Y) && _.$isRangeSelection(i) && (s = "element" === Y.anchor.type && "element" === Y.focus.type && "text" === i.anchor.type && "text" === i.focus.type), L = !!(!s && _.$isTextNode(L) && _.$isTextNode(W)) && L.__type === W.__type && L.__text === W.__text && L.__mode === W.__mode && L.__detail === W.__detail && L.__style === W.__style && L.__format === W.__format && L.__parent === W.__parent
                                }
                                if (L) return 0
                            }
                            return 1
                        })();
                    return N = $, T = A, L
                });
                o = ({
                    editorState: o,
                    prevEditorState: s,
                    dirtyLeaves: p,
                    dirtyElements: N,
                    tags: T
                }) => {
                    let b = l.current,
                        R = l.redoStack,
                        $ = l.undoStack,
                        A = null === b ? null : b.editorState;
                    if (null === b || o !== A) {
                        if (1 === (s = S(s, o, b, p, N, T))) 0 !== R.length && (l.redoStack = [], i.dispatchCommand(_.CAN_REDO_COMMAND, !1)), null !== b && ($.push({ ...b
                        }), i.dispatchCommand(_.CAN_UNDO_COMMAND, !0));
                        else if (2 === s) return;
                        l.current = {
                            editor: i,
                            editorState: o
                        }
                    }
                };
                let b = s.mergeRegister(i.registerCommand(_.UNDO_COMMAND, () => {
                        let o = l.redoStack,
                            s = l.undoStack;
                        if (0 !== s.length) {
                            let p = l.current,
                                N = s.pop();
                            null !== p && (o.push(p), i.dispatchCommand(_.CAN_REDO_COMMAND, !0)), 0 === s.length && i.dispatchCommand(_.CAN_UNDO_COMMAND, !1), l.current = N || null, N && N.editor.setEditorState(N.editorState, {
                                tag: "historic"
                            })
                        }
                        return !0
                    }, _.COMMAND_PRIORITY_EDITOR), i.registerCommand(_.REDO_COMMAND, () => {
                        let o = l.redoStack;
                        var s = l.undoStack;
                        if (0 !== o.length) {
                            let p = l.current;
                            null !== p && (s.push(p), i.dispatchCommand(_.CAN_UNDO_COMMAND, !0)), s = o.pop(), 0 === o.length && i.dispatchCommand(_.CAN_REDO_COMMAND, !1), l.current = s || null, s && s.editor.setEditorState(s.editorState, {
                                tag: "historic"
                            })
                        }
                        return !0
                    }, _.COMMAND_PRIORITY_EDITOR), i.registerCommand(_.CLEAR_EDITOR_COMMAND, () => (l.undoStack = [], l.redoStack = [], l.current = null, !1), _.COMMAND_PRIORITY_EDITOR), i.registerCommand(_.CLEAR_HISTORY_COMMAND, () => (l.undoStack = [], l.redoStack = [], l.current = null, i.dispatchCommand(_.CAN_REDO_COMMAND, !1), i.dispatchCommand(_.CAN_UNDO_COMMAND, !1), !0), _.COMMAND_PRIORITY_EDITOR), i.registerUpdateListener(o)),
                    R = i.registerUpdateListener(o);
                return () => {
                    b(), R()
                }
            }
        },
        34027: function(i, l, o) {
            let s = o(70023);
            i.exports = s
        },
        70023: function(i, l, o) {
            var s = o(85841),
                _ = o(28252),
                p = o(83915);
            let N = new Set(["STYLE", "SCRIPT"]);
            l.$generateHtmlFromNodes = function(i, l) {
                if ("undefined" == typeof document || "undefined" == typeof window) throw Error("To use $generateHtmlFromNodes in headless mode please initialize a headless browser implementation such as JSDom before calling this function.");
                let o = document.createElement("div"),
                    N = p.$getRoot().getChildren();
                for (let T = 0; T < N.length; T++) ! function u(i, l, o, N = null) {
                    let T = null == N || l.isSelected(N),
                        S = p.$isElementNode(l) && l.excludeFromCopy("html");
                    var b = l;
                    null !== N && (b = s.$cloneWithProperties(l), b = p.$isTextNode(b) && null != N ? s.$sliceSelectedTextNodeContent(N, b) : b);
                    let R = p.$isElementNode(b) ? b.getChildren() : [],
                        {
                            element: $,
                            after: A
                        } = b.exportDOM(i);
                    if (!$) return !1;
                    let L = document.createDocumentFragment();
                    for (let o = 0; o < R.length; o++) {
                        let s = R[o],
                            _ = u(i, s, L, N);
                        !T && p.$isElementNode(l) && _ && l.extractWithChild(s, N, "html") && (T = !0)
                    }
                    return T && !S ? (_.isHTMLElement($) && $.append(L), o.append($), A && (i = A.call(b, $)) && $.replaceWith(i)) : o.append(L), T
                }(i, N[T], o, l);
                return o.innerHTML
            }, l.$generateNodesFromDOM = function(i, l) {
                l = l.body ? l.body.childNodes : [];
                let o = [];
                for (let _ = 0; _ < l.length; _++) {
                    var s = l[_];
                    N.has(s.nodeName) || null !== (s = function w(i, l, o = new Map, s) {
                        let _ = [];
                        if (N.has(i.nodeName)) return _;
                        let T = null;
                        var S, {
                                nodeName: b
                            } = i,
                            R = l._htmlConversions.get(b.toLowerCase());
                        if (b = null, void 0 !== R)
                            for (S of R) null !== (R = S(i)) && (null === b || b.priority < R.priority) && (b = R);
                        if (b = (S = null !== b ? b.conversion : null) ? S(i) : null, S = null, null !== b) {
                            if (S = b.after, null !== (T = Array.isArray(R = b.node) ? R[R.length - 1] : R)) {
                                for (var [, $] of o)
                                    if (!(T = $(T, s))) break;
                                T && _.push(...Array.isArray(R) ? R : [T])
                            }
                            null != b.forChild && o.set(i.nodeName, b.forChild)
                        }
                        for ($ = 0, i = i.childNodes, s = []; $ < i.length; $++) s.push(...w(i[$], l, new Map(o), T));
                        return null != S && (s = S(s)), null == T ? _ = _.concat(s) : p.$isElementNode(T) && T.append(...s), _
                    }(s, i)) && (o = o.concat(s))
                }
                return o
            }
        },
        7348: function(i, l, o) {
            let s = o(51647);
            i.exports = s
        },
        51647: function(i, l, o) {
            var s = o(28252),
                _ = o(83915);
            let p = new Set(["http:", "https:", "mailto:", "sms:", "tel:"]);
            let q = class q extends _.ElementNode {
                static getType() {
                    return "link"
                }
                static clone(i) {
                    return new q(i.__url, {
                        rel: i.__rel,
                        target: i.__target,
                        title: i.__title
                    }, i.__key)
                }
                constructor(i, l = {}, o) {
                    super(o);
                    let {
                        target: s = null,
                        rel: _ = null,
                        title: p = null
                    } = l;
                    this.__url = i, this.__target = s, this.__rel = _, this.__title = p
                }
                createDOM(i) {
                    let l = document.createElement("a");
                    return l.href = this.sanitizeUrl(this.__url), null !== this.__target && (l.target = this.__target), null !== this.__rel && (l.rel = this.__rel), null !== this.__title && (l.title = this.__title), s.addClassNamesToElement(l, i.theme.link), l
                }
                updateDOM(i, l) {
                    let o = this.__url,
                        s = this.__target,
                        _ = this.__rel,
                        p = this.__title;
                    return o !== i.__url && (l.href = o), s !== i.__target && (s ? l.target = s : l.removeAttribute("target")), _ !== i.__rel && (_ ? l.rel = _ : l.removeAttribute("rel")), p !== i.__title && (p ? l.title = p : l.removeAttribute("title")), !1
                }
                static importDOM() {
                    return {
                        a: () => ({
                            conversion: r,
                            priority: 1
                        })
                    }
                }
                static importJSON(i) {
                    let l = t(i.url, {
                        rel: i.rel,
                        target: i.target,
                        title: i.title
                    });
                    return l.setFormat(i.format), l.setIndent(i.indent), l.setDirection(i.direction), l
                }
                sanitizeUrl(i) {
                    try {
                        let l = new URL(i);
                        if (!p.has(l.protocol)) return "about:blank"
                    } catch {}
                    return i
                }
                exportJSON() {
                    return { ...super.exportJSON(),
                        rel: this.getRel(),
                        target: this.getTarget(),
                        title: this.getTitle(),
                        type: "link",
                        url: this.getURL(),
                        version: 1
                    }
                }
                getURL() {
                    return this.getLatest().__url
                }
                setURL(i) {
                    this.getWritable().__url = i
                }
                getTarget() {
                    return this.getLatest().__target
                }
                setTarget(i) {
                    this.getWritable().__target = i
                }
                getRel() {
                    return this.getLatest().__rel
                }
                setRel(i) {
                    this.getWritable().__rel = i
                }
                getTitle() {
                    return this.getLatest().__title
                }
                setTitle(i) {
                    this.getWritable().__title = i
                }
                insertNewAfter(i, l = !0) {
                    return i = this.getParentOrThrow().insertNewAfter(i, l), _.$isElementNode(i) ? (l = t(this.__url, {
                        rel: this.__rel,
                        target: this.__target,
                        title: this.__title
                    }), i.append(l), l) : null
                }
                canInsertTextBefore() {
                    return !1
                }
                canInsertTextAfter() {
                    return !1
                }
                canBeEmpty() {
                    return !1
                }
                isInline() {
                    return !0
                }
                extractWithChild(i, l) {
                    if (!_.$isRangeSelection(l)) return !1;
                    i = l.anchor.getNode();
                    let o = l.focus.getNode();
                    return this.isParentOf(i) && this.isParentOf(o) && 0 < l.getTextContent().length
                }
            };

            function r(i) {
                let l = null;
                if (s.isHTMLAnchorElement(i)) {
                    let o = i.textContent;
                    null !== o && "" !== o && (l = t(i.getAttribute("href") || "", {
                        rel: i.getAttribute("rel"),
                        target: i.getAttribute("target"),
                        title: i.getAttribute("title")
                    }))
                }
                return {
                    node: l
                }
            }

            function t(i, l) {
                return _.$applyNodeReplacement(new q(i, l))
            }

            function v(i) {
                return i instanceof q
            }
            let w = class w extends q {
                static getType() {
                    return "autolink"
                }
                static clone(i) {
                    return new w(i.__url, {
                        rel: i.__rel,
                        target: i.__target,
                        title: i.__title
                    }, i.__key)
                }
                static importJSON(i) {
                    let l = x(i.url, {
                        rel: i.rel,
                        target: i.target,
                        title: i.title
                    });
                    return l.setFormat(i.format), l.setIndent(i.indent), l.setDirection(i.direction), l
                }
                static importDOM() {
                    return null
                }
                exportJSON() {
                    return { ...super.exportJSON(),
                        type: "autolink",
                        version: 1
                    }
                }
                insertNewAfter(i, l = !0) {
                    return i = this.getParentOrThrow().insertNewAfter(i, l), _.$isElementNode(i) ? (l = x(this.__url, {
                        rel: this._rel,
                        target: this.__target,
                        title: this.__title
                    }), i.append(l), l) : null
                }
            };

            function x(i, l) {
                return _.$applyNodeReplacement(new w(i, l))
            }
            let N = _.createCommand("TOGGLE_LINK_COMMAND");
            l.$createAutoLinkNode = x, l.$createLinkNode = t, l.$isAutoLinkNode = function(i) {
                return i instanceof w
            }, l.$isLinkNode = v, l.AutoLinkNode = w, l.LinkNode = q, l.TOGGLE_LINK_COMMAND = N, l.toggleLink = function(i, l = {}) {
                let {
                    target: o,
                    title: s
                } = l, p = void 0 === l.rel ? "noreferrer" : l.rel;
                if (l = _.$getSelection(), _.$isRangeSelection(l)) {
                    if (l = l.extract(), null === i) l.forEach(i => {
                        if (v(i = i.getParent())) {
                            let l = i.getChildren();
                            for (let o = 0; o < l.length; o++) i.insertBefore(l[o]);
                            i.remove()
                        }
                    });
                    else {
                        if (1 === l.length) {
                            var N = l[0];
                            if (null !== (N = v(N) ? N : function(i, l) {
                                    for (; null !== i && null !== (i = i.getParent()) && !l(i););
                                    return i
                                }(N, v))) {
                                N.setURL(i), void 0 !== o && N.setTarget(o), null !== p && N.setRel(p), void 0 !== s && N.setTitle(s);
                                return
                            }
                        }
                        let T = null,
                            S = null;
                        l.forEach(l => {
                            var N = l.getParent();
                            if (N !== S && null !== N && (!_.$isElementNode(l) || l.isInline())) {
                                if (v(N)) S = N, N.setURL(i), void 0 !== o && N.setTarget(o), null !== p && S.setRel(p), void 0 !== s && S.setTitle(s);
                                else if (N.is(T) || (T = N, S = t(i, {
                                        rel: p,
                                        target: o
                                    }), v(N) ? null === l.getPreviousSibling() ? N.insertBefore(S) : N.insertAfter(S) : l.insertBefore(S)), v(l)) {
                                    if (!l.is(S)) {
                                        if (null !== S) {
                                            N = l.getChildren();
                                            for (let i = 0; i < N.length; i++) S.append(N[i])
                                        }
                                        l.remove()
                                    }
                                } else null !== S && S.append(l)
                            }
                        })
                    }
                }
            }
        },
        6089: function(i, l, o) {
            let s = o(88302);
            i.exports = s
        },
        88302: function(i, l, o) {
            var s = o(77808),
                _ = o(85841),
                p = o(28252),
                N = o(83915);
            let T = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement,
                S = T && "documentMode" in document ? document.documentMode : null;
            T && /Mac|iPod|iPhone|iPad/.test(navigator.platform), T && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent);
            let b = !!(T && "InputEvent" in window) && !S && "getTargetRanges" in new window.InputEvent("input"),
                R = T && /Version\/[\d.]+.*Safari/.test(navigator.userAgent),
                $ = T && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
                A = T && /^(?=.*Chrome).*/i.test(navigator.userAgent),
                L = T && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && !A;

            function u(i, l) {
                l.update(() => {
                    if (null !== i) {
                        let o = i instanceof KeyboardEvent ? null : i.clipboardData,
                            _ = N.$getSelection();
                        if (null !== _ && null != o) {
                            i.preventDefault();
                            let p = s.$getHtmlContent(l);
                            null !== p && o.setData("text/html", p), o.setData("text/plain", _.getTextContent())
                        }
                    }
                })
            }
            l.registerPlainText = function(i) {
                return p.mergeRegister(i.registerCommand(N.DELETE_CHARACTER_COMMAND, i => {
                    let l = N.$getSelection();
                    return !!N.$isRangeSelection(l) && (l.deleteCharacter(i), !0)
                }, N.COMMAND_PRIORITY_EDITOR), i.registerCommand(N.DELETE_WORD_COMMAND, i => {
                    let l = N.$getSelection();
                    return !!N.$isRangeSelection(l) && (l.deleteWord(i), !0)
                }, N.COMMAND_PRIORITY_EDITOR), i.registerCommand(N.DELETE_LINE_COMMAND, i => {
                    let l = N.$getSelection();
                    return !!N.$isRangeSelection(l) && (l.deleteLine(i), !0)
                }, N.COMMAND_PRIORITY_EDITOR), i.registerCommand(N.CONTROLLED_TEXT_INSERTION_COMMAND, i => {
                    let l = N.$getSelection();
                    if (!N.$isRangeSelection(l)) return !1;
                    if ("string" == typeof i) l.insertText(i);
                    else {
                        let o = i.dataTransfer;
                        null != o ? s.$insertDataTransferForPlainText(o, l) : (i = i.data) && l.insertText(i)
                    }
                    return !0
                }, N.COMMAND_PRIORITY_EDITOR), i.registerCommand(N.REMOVE_TEXT_COMMAND, () => {
                    let i = N.$getSelection();
                    return !!N.$isRangeSelection(i) && (i.removeText(), !0)
                }, N.COMMAND_PRIORITY_EDITOR), i.registerCommand(N.INSERT_LINE_BREAK_COMMAND, i => {
                    let l = N.$getSelection();
                    return !!N.$isRangeSelection(l) && (l.insertLineBreak(i), !0)
                }, N.COMMAND_PRIORITY_EDITOR), i.registerCommand(N.INSERT_PARAGRAPH_COMMAND, () => {
                    let i = N.$getSelection();
                    return !!N.$isRangeSelection(i) && (i.insertLineBreak(), !0)
                }, N.COMMAND_PRIORITY_EDITOR), i.registerCommand(N.KEY_ARROW_LEFT_COMMAND, i => {
                    let l = N.$getSelection();
                    if (!N.$isRangeSelection(l)) return !1;
                    let o = i.shiftKey;
                    return !!_.$shouldOverrideDefaultCharacterSelection(l, !0) && (i.preventDefault(), _.$moveCharacter(l, o, !0), !0)
                }, N.COMMAND_PRIORITY_EDITOR), i.registerCommand(N.KEY_ARROW_RIGHT_COMMAND, i => {
                    let l = N.$getSelection();
                    if (!N.$isRangeSelection(l)) return !1;
                    let o = i.shiftKey;
                    return !!_.$shouldOverrideDefaultCharacterSelection(l, !1) && (i.preventDefault(), _.$moveCharacter(l, o, !1), !0)
                }, N.COMMAND_PRIORITY_EDITOR), i.registerCommand(N.KEY_BACKSPACE_COMMAND, l => {
                    let o = N.$getSelection();
                    return !!N.$isRangeSelection(o) && (l.preventDefault(), i.dispatchCommand(N.DELETE_CHARACTER_COMMAND, !0))
                }, N.COMMAND_PRIORITY_EDITOR), i.registerCommand(N.KEY_DELETE_COMMAND, l => {
                    let o = N.$getSelection();
                    return !!N.$isRangeSelection(o) && (l.preventDefault(), i.dispatchCommand(N.DELETE_CHARACTER_COMMAND, !1))
                }, N.COMMAND_PRIORITY_EDITOR), i.registerCommand(N.KEY_ENTER_COMMAND, l => {
                    let o = N.$getSelection();
                    if (!N.$isRangeSelection(o)) return !1;
                    if (null !== l) {
                        if (($ || R || L) && b) return !1;
                        l.preventDefault()
                    }
                    return i.dispatchCommand(N.INSERT_LINE_BREAK_COMMAND, !1)
                }, N.COMMAND_PRIORITY_EDITOR), i.registerCommand(N.SELECT_ALL_COMMAND, () => (N.$selectAll(), !0), N.COMMAND_PRIORITY_EDITOR), i.registerCommand(N.COPY_COMMAND, l => {
                    let o = N.$getSelection();
                    return !!N.$isRangeSelection(o) && (u(l, i), !0)
                }, N.COMMAND_PRIORITY_EDITOR), i.registerCommand(N.CUT_COMMAND, l => {
                    let o = N.$getSelection();
                    return !!N.$isRangeSelection(o) && (u(l, i), i.update(() => {
                        let i = N.$getSelection();
                        N.$isRangeSelection(i) && i.removeText()
                    }), !0)
                }, N.COMMAND_PRIORITY_EDITOR), i.registerCommand(N.PASTE_COMMAND, l => {
                    let o = N.$getSelection();
                    return !!N.$isRangeSelection(o) && (l.preventDefault(), i.update(() => {
                        let i = N.$getSelection(),
                            {
                                clipboardData: o
                            } = l;
                        null != o && N.$isRangeSelection(i) && s.$insertDataTransferForPlainText(o, i)
                    }, {
                        tag: "paste"
                    }), !0)
                }, N.COMMAND_PRIORITY_EDITOR), i.registerCommand(N.DROP_COMMAND, i => {
                    let l = N.$getSelection();
                    return !!N.$isRangeSelection(l) && (i.preventDefault(), !0)
                }, N.COMMAND_PRIORITY_EDITOR), i.registerCommand(N.DRAGSTART_COMMAND, i => {
                    let l = N.$getSelection();
                    return !!N.$isRangeSelection(l) && (i.preventDefault(), !0)
                }, N.COMMAND_PRIORITY_EDITOR))
            }
        },
        87650: function(i, l, o) {
            let s = o(28478);
            i.exports = s
        },
        28478: function(i, l, o) {
            var s = o(71849),
                _ = o(97352);
            l.AutoFocusPlugin = function({
                defaultSelection: i
            }) {
                let [l] = s.useLexicalComposerContext();
                return _.useEffect(() => {
                    l.focus(() => {
                        let i = document.activeElement,
                            o = l.getRootElement();
                        null === o || null !== i && o.contains(i) || o.focus({
                            preventScroll: !0
                        })
                    }, {
                        defaultSelection: i
                    })
                }, [i, l]), null
            }
        },
        86772: function(i, l, o) {
            let s = o(35238);
            i.exports = s
        },
        35238: function(i, l, o) {
            var s = o(7348),
                _ = o(71849),
                p = o(28252),
                N = o(83915),
                T = o(97352);

            function B(i, l) {
                for (let o = 0; o < l.length; o++) {
                    let s = l[o](i);
                    if (s) return s
                }
                return null
            }
            let S = /[.,;\s]/;

            function E(i) {
                var l;
                return i = i.getPreviousSibling(), N.$isElementNode(i) && (i = i.getLastDescendant()), !(l = null === i || N.$isLineBreakNode(i)) && (l = N.$isTextNode(i)) && (i = i.getTextContent(), l = S.test(i[i.length - 1])), l
            }

            function F(i) {
                return i = i.getNextSibling(), N.$isElementNode(i) && (i = i.getFirstDescendant()), null === i || N.$isLineBreakNode(i) || N.$isTextNode(i) && S.test(i.getTextContent()[0])
            }

            function G(i, l, o) {
                var s = i.getChildren();
                let _ = s.length;
                for (let l = 0; l < _; l++) {
                    let _ = s[l];
                    if (!N.$isTextNode(_) || !_.isSimpleText()) {
                        H(i), o(null, i.getURL());
                        return
                    }
                }
                null === (l = B(s = i.getTextContent(), l)) || l.text !== s ? (H(i), o(null, i.getURL())) : E(i) && F(i) ? ((s = i.getURL()) !== l.url && (i.setURL(l.url), o(l.url, s)), l.attributes && ((s = i.getRel()) !== l.attributes.rel && (i.setRel(l.attributes.rel || null), o(l.attributes.rel || null, s)), (s = i.getTarget()) !== l.attributes.target && (i.setTarget(l.attributes.target || null), o(l.attributes.target || null, s)))) : (H(i), o(null, i.getURL()))
            }

            function H(i) {
                let l = i.getChildren();
                var o = l.length;
                for (--o; 0 <= o; o--) i.insertAfter(l[o]);
                return i.remove(), l.map(i => i.getLatest())
            }
            l.AutoLinkPlugin = function({
                matchers: i,
                onChange: l
            }) {
                let [o] = _.useLexicalComposerContext();
                return T.useEffect(() => {
                    o.hasNodes([s.AutoLinkNode]) || function(i) {
                        let l = new URLSearchParams;
                        l.append("code", i);
                        for (let i = 1; i < arguments.length; i++) l.append("v", arguments[i]);
                        throw Error(`Minified Lexical error #${i}; visit https://lexical.dev/docs/error?${l} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`)
                    }(77);
                    let d = (i, o) => {
                        l && l(i, o)
                    };
                    return p.mergeRegister(o.registerNodeTransform(N.TextNode, o => {
                        var _, p = o.getParentOrThrow(),
                            T = o.getPreviousSibling();
                        if (s.$isAutoLinkNode(p)) G(p, i, d);
                        else if (!s.$isLinkNode(p)) {
                            if (o.isSimpleText() && (S.test(o.getTextContent()[0]) || !s.$isAutoLinkNode(T))) {
                                T = p = o.getTextContent();
                                let W = 0,
                                    Y = o;
                                for (;
                                    (_ = B(T, i)) && null !== _;) {
                                    let i = _.index,
                                        V = _.length,
                                        U = i + V;
                                    var b = W + i,
                                        R = W + U,
                                        $ = p,
                                        A = o;
                                    if ((0 < b ? S.test($[b - 1]) : E(A)) && (R < $.length ? S.test($[R]) : F(A))) {
                                        var L = void 0;
                                        0 === W + i ? [L, Y] = Y.splitText(W + V) : [, L, Y] = Y.splitText(W + i, W + i + V), b = s.$createAutoLinkNode(_.url, _.attributes), (R = N.$createTextNode(_.text)).setFormat(L.getFormat()), R.setDetail(L.getDetail()), b.append(R), L.replace(b), l && l(_.url, null), W = 0
                                    } else W += U;
                                    T = T.substring(U)
                                }
                            }
                            p = o.getPreviousSibling(), _ = o.getNextSibling(), L = o.getTextContent(), s.$isAutoLinkNode(p) && !S.test(L[0]) && (p.append(o), G(p, i, d), o = p.getURL(), l && l(null, o)), s.$isAutoLinkNode(_) && !S.test(L[L.length - 1]) && (H(_), G(_, i, d), o = _.getURL(), l && l(null, o))
                        }
                    }))
                }, [o, i, l]), null
            }, l.createLinkMatcherWithRegExp = function(i, l = i => i) {
                return o => {
                    let s = i.exec(o);
                    return null === s ? null : {
                        index: s.index,
                        length: s[0].length,
                        text: s[0],
                        url: l(o)
                    }
                }
            }
        },
        76886: function(i, l, o) {
            let s = o(6949);
            i.exports = s
        },
        6949: function(i, l, o) {
            var s = o(71849),
                _ = o(83915),
                p = o(97352),
                N = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement ? p.useLayoutEffect : p.useEffect;
            l.ClearEditorPlugin = function({
                onClear: i
            }) {
                let [l] = s.useLexicalComposerContext();
                return N(() => l.registerCommand(_.CLEAR_EDITOR_COMMAND, () => (l.update(() => {
                    if (null == i) {
                        let i = _.$getRoot(),
                            l = _.$getSelection(),
                            o = _.$createParagraphNode();
                        i.clear(), i.append(o), null !== l && o.select()
                    } else i()
                }), !0), _.COMMAND_PRIORITY_EDITOR), [l, i]), null
            }
        },
        12386: function(i, l, o) {
            let s = o(7979);
            i.exports = s
        },
        7979: function(i, l, o) {
            var s = o(71849),
                _ = o(83915),
                p = o(97352);
            let N = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement;
            var T = N ? p.useLayoutEffect : p.useEffect;
            let S = {
                tag: "history-merge"
            };
            l.LexicalComposer = function({
                initialConfig: i,
                children: l
            }) {
                let o = p.useMemo(() => {
                    let {
                        theme: l,
                        namespace: o,
                        editor__DEPRECATED: p,
                        nodes: T,
                        onError: b,
                        editorState: R
                    } = i, $ = s.createLexicalComposerContext(null, l), A = p || null;
                    if (null === A) {
                        let s = _.createEditor({
                            editable: i.editable,
                            namespace: o,
                            nodes: T,
                            onError: i => b(i, s),
                            theme: l
                        });
                        ! function(i, l) {
                            if (null !== l) {
                                if (void 0 === l) i.update(() => {
                                    var l = _.$getRoot();
                                    if (l.isEmpty()) {
                                        let o = _.$createParagraphNode();
                                        l.append(o), l = N ? document.activeElement : null, (null !== _.$getSelection() || null !== l && l === i.getRootElement()) && o.select()
                                    }
                                }, S);
                                else if (null !== l) switch (typeof l) {
                                    case "string":
                                        let o = i.parseEditorState(l);
                                        i.setEditorState(o, S);
                                        break;
                                    case "object":
                                        i.setEditorState(l, S);
                                        break;
                                    case "function":
                                        i.update(() => {
                                            _.$getRoot().isEmpty() && l(i)
                                        }, S)
                                }
                            }
                        }(s, R), A = s
                    }
                    return [A, $]
                }, []);
                return T(() => {
                    let l = i.editable,
                        [s] = o;
                    s.setEditable(void 0 === l || l)
                }, []), p.createElement(s.LexicalComposerContext.Provider, {
                    value: o
                }, l)
            }
        },
        71849: function(i, l, o) {
            let s = o(30133);
            i.exports = s
        },
        30133: function(i, l, o) {
            var s = o(97352);
            let _ = s.createContext(null);
            l.LexicalComposerContext = _, l.createLexicalComposerContext = function(i, l) {
                let o = null;
                return null != i && (o = i[1]), {
                    getTheme: function() {
                        return null != l ? l : null != o ? o.getTheme() : null
                    }
                }
            }, l.useLexicalComposerContext = function() {
                let i = s.useContext(_);
                return null == i && function(i) {
                    let l = new URLSearchParams;
                    l.append("code", i);
                    for (let i = 1; i < arguments.length; i++) l.append("v", arguments[i]);
                    throw Error(`Minified Lexical error #${i}; visit https://lexical.dev/docs/error?${l} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`)
                }(8), i
            }
        },
        84780: function(i, l, o) {
            let s = o(51840);
            i.exports = s
        },
        51840: function(i, l, o) {
            var s = o(71849),
                _ = o(97352);

            function n() {
                return (n = Object.assign ? Object.assign.bind() : function(i) {
                    for (var l = 1; l < arguments.length; l++) {
                        var o, s = arguments[l];
                        for (o in s) Object.prototype.hasOwnProperty.call(s, o) && (i[o] = s[o])
                    }
                    return i
                }).apply(this, arguments)
            }
            var p = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement ? _.useLayoutEffect : _.useEffect;
            l.ContentEditable = function({
                ariaActiveDescendant: i,
                ariaAutoComplete: l,
                ariaControls: o,
                ariaDescribedBy: N,
                ariaExpanded: T,
                ariaLabel: S,
                ariaLabelledBy: b,
                ariaMultiline: R,
                ariaOwns: $,
                ariaRequired: A,
                autoCapitalize: L,
                className: W,
                id: Y,
                role: V = "textbox",
                spellCheck: U = !0,
                style: j,
                tabIndex: Z,
                "data-testid": X,
                ...Q
            }) {
                let [et] = s.useLexicalComposerContext(), [en, er] = _.useState(!1), ei = _.useCallback(i => {
                    et.setRootElement(i)
                }, [et]);
                return p(() => (er(et.isEditable()), et.registerEditableListener(i => {
                    er(i)
                })), [et]), _.createElement("div", n({}, Q, {
                    "aria-activedescendant": en ? i : void 0,
                    "aria-autocomplete": en ? l : "none",
                    "aria-controls": en ? o : void 0,
                    "aria-describedby": N,
                    "aria-expanded": en && "combobox" === V ? !!T : void 0,
                    "aria-label": S,
                    "aria-labelledby": b,
                    "aria-multiline": R,
                    "aria-owns": en ? $ : void 0,
                    "aria-readonly": !en || void 0,
                    "aria-required": A,
                    autoCapitalize: L,
                    className: W,
                    contentEditable: en,
                    "data-testid": X,
                    id: Y,
                    ref: ei,
                    role: V,
                    spellCheck: U,
                    style: j,
                    tabIndex: Z
                }))
            }
        },
        25190: function(i, l, o) {
            let s = o(76231);
            i.exports = s
        },
        76231: function(i, l, o) {
            var s = o(97352);

            function m(i, l) {
                return (m = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(i, l) {
                    return i.__proto__ = l, i
                })(i, l)
            }
            var _ = {
                    error: null
                },
                p = function(i) {
                    function c() {
                        for (var l, o = arguments.length, s = Array(o), p = 0; p < o; p++) s[p] = arguments[p];
                        return (l = i.call.apply(i, [this].concat(s)) || this).state = _, l.resetErrorBoundary = function() {
                            for (var i, o = arguments.length, s = Array(o), _ = 0; _ < o; _++) s[_] = arguments[_];
                            null == l.props.onReset || (i = l.props).onReset.apply(i, s), l.reset()
                        }, l
                    }
                    c.prototype = Object.create(i.prototype), c.prototype.constructor = c, m(c, i), c.getDerivedStateFromError = function(i) {
                        return {
                            error: i
                        }
                    };
                    var l = c.prototype;
                    return l.reset = function() {
                        this.setState(_)
                    }, l.componentDidCatch = function(i, l) {
                        var o, s;
                        null == (o = (s = this.props).onError) || o.call(s, i, l)
                    }, l.componentDidUpdate = function(i, l) {
                        var o, s, _, p, N = this.props.resetKeys;
                        null !== this.state.error && null !== l.error && (void 0 === (o = i.resetKeys) && (o = []), void 0 === (s = N) && (s = []), o.length !== s.length || o.some(function(i, l) {
                            return !Object.is(i, s[l])
                        })) && (null == (_ = (p = this.props).onResetKeysChange) || _.call(p, i.resetKeys, N), this.reset())
                    }, l.render = function() {
                        var i = this.state.error,
                            l = this.props,
                            o = l.fallbackRender,
                            _ = l.FallbackComponent;
                        if (l = l.fallback, null !== i) {
                            if (i = {
                                    error: i,
                                    resetErrorBoundary: this.resetErrorBoundary
                                }, s.isValidElement(l)) return l;
                            if ("function" == typeof o) return o(i);
                            if (_) return s.createElement(_, i);
                            throw Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop")
                        }
                        return this.props.children
                    }, c
                }(s.Component);
            i.exports = function({
                children: i,
                onError: l
            }) {
                return s.createElement(p, {
                    fallback: s.createElement("div", {
                        style: {
                            border: "1px solid #f00",
                            color: "#f00",
                            padding: "8px"
                        }
                    }, "An error was thrown."),
                    onError: l
                }, i)
            }
        },
        45456: function(i, l, o) {
            let s = o(31946);
            i.exports = s
        },
        31946: function(i, l, o) {
            var s = o(71849),
                _ = o(5508),
                p = o(97352);
            l.createEmptyHistoryState = _.createEmptyHistoryState, l.HistoryPlugin = function({
                externalHistoryState: i
            }) {
                let [l] = s.useLexicalComposerContext();
                return function(i, l, o = 1e3) {
                    let s = p.useMemo(() => l || _.createEmptyHistoryState(), [l]);
                    p.useEffect(() => _.registerHistory(i, s, o), [o, i, s])
                }(l, i), null
            }
        },
        80948: function(i, l, o) {
            let s = o(13983);
            i.exports = s
        },
        13983: function(i, l, o) {
            var s = o(71849),
                _ = o(97352),
                p = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement ? _.useLayoutEffect : _.useEffect;
            l.OnChangePlugin = function({
                ignoreHistoryMergeTagChange: i = !0,
                ignoreSelectionChange: l = !1,
                onChange: o
            }) {
                let [_] = s.useLexicalComposerContext();
                return p(() => {
                    if (o) return _.registerUpdateListener(({
                        editorState: s,
                        dirtyElements: p,
                        dirtyLeaves: N,
                        prevEditorState: T,
                        tags: S
                    }) => {
                        l && 0 === p.size && 0 === N.size || i && S.has("history-merge") || T.isEmpty() || o(s, _, S)
                    })
                }, [_, i, l, o]), null
            }
        },
        13741: function(i, l, o) {
            let s = o(63728);
            i.exports = s
        },
        63728: function(i, l, o) {
            var s = o(71849),
                _ = o(27502),
                p = o(97352),
                N = o(77553),
                T = o(28252),
                S = o(64353),
                b = o(31372),
                R = o(6089),
                $ = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement ? p.useLayoutEffect : p.useEffect;

            function w(i) {
                return i.getEditorState().read(N.$canShowPlaceholderCurry(i.isComposing()))
            }

            function C({
                content: i
            }) {
                var [l] = s.useLexicalComposerContext();
                l = function(i) {
                    let [l, o] = p.useState(() => w(i));
                    return $(() => {
                        function e() {
                            o(w(i))
                        }
                        return e(), T.mergeRegister(i.registerUpdateListener(() => {
                            e()
                        }), i.registerEditableListener(() => {
                            e()
                        }))
                    }, [i]), l
                }(l);
                let o = _();
                return l ? "function" == typeof i ? i(o) : i : null
            }
            l.PlainTextPlugin = function({
                contentEditable: i,
                placeholder: l,
                ErrorBoundary: o
            }) {
                var _;
                let [N] = s.useLexicalComposerContext();
                return o = function(i, l) {
                    let [o, s] = p.useState(() => i.getDecorators());
                    return $(() => i.registerDecoratorListener(i => {
                        S.flushSync(() => {
                            s(i)
                        })
                    }), [i]), p.useEffect(() => {
                        s(i.getDecorators())
                    }, [i]), p.useMemo(() => {
                        let s = [],
                            _ = Object.keys(o);
                        for (let N = 0; N < _.length; N++) {
                            let T = _[N],
                                b = p.createElement(l, {
                                    onError: l => i._onError(l)
                                }, p.createElement(p.Suspense, {
                                    fallback: null
                                }, o[T])),
                                R = i.getElementByKey(T);
                            null !== R && s.push(S.createPortal(b, R, T))
                        }
                        return s
                    }, [l, o, i])
                }(N, o), $(() => T.mergeRegister(R.registerPlainText(_), b.registerDragonSupport(_)), [_ = N]), p.createElement(p.Fragment, null, i, p.createElement(C, {
                    content: l
                }), o)
            }
        },
        27502: function(i, l, o) {
            let s = o(3598);
            i.exports = s
        },
        3598: function(i, l, o) {
            var s = o(71849),
                _ = o(97352),
                p = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement ? _.useLayoutEffect : _.useEffect;

            function r(i) {
                return {
                    initialValueFn: () => i.isEditable(),
                    subscribe: l => i.registerEditableListener(l)
                }
            }
            i.exports = function() {
                return function(i) {
                    let [l] = s.useLexicalComposerContext(), o = _.useMemo(() => i(l), [l, i]), N = _.useRef(o.initialValueFn()), [T, S] = _.useState(N.current);
                    return p(() => {
                        let {
                            initialValueFn: i,
                            subscribe: l
                        } = o, s = i();
                        return N.current !== s && (N.current = s, S(s)), l(i => {
                            N.current = i, S(i)
                        })
                    }, [o, i]), T
                }(r)
            }
        },
        48249: function(i, l, o) {
            let s = o(4225);
            i.exports = s
        },
        4225: function(i, l, o) {
            var s = o(71849),
                _ = o(83915),
                p = o(97352);

            function k(i, l) {
                return i.getEditorState().read(() => {
                    let i = _.$getNodeByKey(l);
                    return null !== i && i.isSelected()
                })
            }
            l.useLexicalNodeSelection = function(i) {
                let [l] = s.useLexicalComposerContext(), [o, N] = p.useState(() => k(l, i));
                return p.useEffect(() => {
                    let o = !0,
                        s = l.registerUpdateListener(() => {
                            o && N(k(l, i))
                        });
                    return () => {
                        o = !1, s()
                    }
                }, [l, i]), [o, p.useCallback(o => {
                    l.update(() => {
                        let l = _.$getSelection();
                        _.$isNodeSelection(l) || (l = _.$createNodeSelection(), _.$setSelection(l)), o ? l.add(i) : l.delete(i)
                    })
                }, [l, i]), p.useCallback(() => {
                    l.update(() => {
                        let i = _.$getSelection();
                        _.$isNodeSelection(i) && i.clear()
                    })
                }, [l])]
            }
        },
        85841: function(i, l, o) {
            let s = o(72630);
            i.exports = s
        },
        72630: function(i, l, o) {
            var s = o(83915);
            let _ = new Map;

            function v(i) {
                for (; null != i;) {
                    if (i.nodeType === Node.TEXT_NODE) return i;
                    i = i.firstChild
                }
                return null
            }

            function w(i) {
                let l = i.parentNode;
                if (null == l) throw Error("Should never happen");
                return [l, Array.from(l.childNodes).indexOf(i)]
            }

            function y(i) {
                let l = {};
                for (let o of i = i.split(";"))
                    if ("" !== o) {
                        let [i, s] = o.split(/:([^]+)/);
                        l[i.trim()] = s.trim()
                    }
                return l
            }

            function z(i) {
                let l = _.get(i);
                return void 0 === l && (l = y(i), _.set(i, l)), l
            }

            function B(i, l) {
                var o = z("getStyle" in i ? i.getStyle() : i.style);
                o = function(i) {
                    let l = "";
                    for (let o in i) o && (l += `${o}: ${i[o]};`);
                    return l
                }(l = Object.entries(l).reduce((i, [l, o]) => (null === o ? delete i[l] : i[l] = o, i), { ...o
                })), i.setStyle(o), _.set(o, l)
            }

            function E(i, l, o, _, p = null) {
                if (0 !== l.length) {
                    var N = l[0],
                        T = new Map,
                        S = [];
                    (N = s.$isElementNode(N) ? N : N.getParentOrThrow()).isInline() && (N = N.getParentOrThrow());
                    for (var b = !1; null !== N;) {
                        var R = N.getPreviousSibling();
                        if (null !== R) {
                            N = R, b = !0;
                            break
                        }
                        if (N = N.getParentOrThrow(), s.$isRootOrShadowRoot(N)) break
                    }
                    R = new Set;
                    for (var $ = 0; $ < o; $++) {
                        var A = l[$];
                        s.$isElementNode(A) && 0 === A.getChildrenSize() && R.add(A.getKey())
                    }
                    var L = new Set;
                    for ($ = 0; $ < o; $++) {
                        var W = (A = l[$]).getParent();
                        if (null !== W && W.isInline() && (W = W.getParent()), null !== W && s.$isLeafNode(A) && !L.has(A.getKey())) {
                            if (A = W.getKey(), void 0 === T.get(A)) {
                                let i = _();
                                i.setFormat(W.getFormatType()), i.setIndent(W.getIndent()), S.push(i), T.set(A, i), W.getChildren().forEach(l => {
                                        i.append(l), L.add(l.getKey()), s.$isElementNode(l) && l.getChildrenKeys().forEach(i => L.add(i))
                                    }),
                                    function(i) {
                                        for (; null !== i && !s.$isRootOrShadowRoot(i);) {
                                            let l = i.getLatest(),
                                                o = i.getParent();
                                            0 === l.getChildrenSize() && i.remove(!0), i = o
                                        }
                                    }(W)
                            }
                        } else R.has(A.getKey()) && ((W = _()).setFormat(A.getFormatType()), W.setIndent(A.getIndent()), S.push(W), A.remove(!0))
                    }
                    if (null !== p)
                        for (l = 0; l < S.length; l++) p.append(S[l]);
                    if (l = null, s.$isRootOrShadowRoot(N)) {
                        if (b) {
                            if (null !== p) N.insertAfter(p);
                            else
                                for (p = S.length - 1; 0 <= p; p--) N.insertAfter(S[p])
                        } else if (b = N.getFirstChild(), s.$isElementNode(b) && (N = b), null === b) {
                            if (p) N.append(p);
                            else
                                for (p = 0; p < S.length; p++) b = S[p], N.append(b), l = b
                        } else if (null !== p) b.insertBefore(p);
                        else
                            for (N = 0; N < S.length; N++) p = S[N], b.insertBefore(p), l = p
                    } else if (p) N.insertAfter(p);
                    else
                        for (p = S.length - 1; 0 <= p; p--) b = S[p], N.insertAfter(b), l = b;
                    S = s.$getPreviousSelection(), s.$isRangeSelection(S) && S.anchor.getNode().isAttached() && S.focus.getNode().isAttached() ? s.$setSelection(S.clone()) : null !== l ? l.selectEnd() : i.dirty = !0
                }
            }

            function F(i, l, o, s) {
                i.modify(l ? "extend" : "move", o, s)
            }

            function G(i) {
                return i = i.anchor.getNode(), "rtl" === (s.$isRootNode(i) ? i : i.getParentOrThrow()).getDirection()
            }
            l.$addNodeStyle = function(i) {
                let l = y(i = i.getStyle());
                _.set(i, l)
            }, l.$cloneWithProperties = function(i) {
                let l = i.constructor.clone(i);
                return (l.__parent = i.__parent, l.__next = i.__next, l.__prev = i.__prev, s.$isElementNode(i) && s.$isElementNode(l)) ? (l.__first = i.__first, l.__last = i.__last, l.__size = i.__size, l.__format = i.__format, l.__indent = i.__indent, l.__dir = i.__dir) : s.$isTextNode(i) && s.$isTextNode(l) && (l.__format = i.__format, l.__style = i.__style, l.__mode = i.__mode, l.__detail = i.__detail), l
            }, l.$getSelectionStyleValueForProperty = function(i, l, o = "") {
                let _ = null,
                    p = i.getNodes();
                var N = i.anchor,
                    T = i.focus,
                    S = i.isBackward();
                let b = S ? T.offset : N.offset;
                if (N = S ? T.getNode() : N.getNode(), "" !== i.style && null !== (i = z(i.style)) && l in i) return i[l];
                for (i = 0; i < p.length; i++) {
                    var R = p[i];
                    if ((0 === i || 0 !== b || !R.is(N)) && s.$isTextNode(R)) {
                        if (T = l, S = o, T = null !== (R = z(R = R.getStyle())) && R[T] || S, null === _) _ = T;
                        else if (_ !== T) {
                            _ = "";
                            break
                        }
                    }
                }
                return null === _ ? o : _
            }, l.$isAtNodeEnd = function(i) {
                return "text" === i.type ? i.offset === i.getNode().getTextContentSize() : i.offset === i.getNode().getChildrenSize()
            }, l.$isParentElementRTL = G, l.$moveCaretSelection = F, l.$moveCharacter = function(i, l, o) {
                let s = G(i);
                F(i, l, o ? !s : s, "character")
            }, l.$patchStyleText = function C(i, l) {
                var o = i.getNodes(),
                    _ = o.length;
                if (s.DEPRECATED_$isGridSelection(i)) {
                    for (var p = s.$createRangeSelection(), N = p.anchor, T = p.focus, S = 0; S < _; S++) {
                        var b = o[S];
                        s.DEPRECATED_$isGridCellNode(b) && (N.set(b.getKey(), 0, "element"), T.set(b.getKey(), b.getChildrenSize(), "element"), C(s.$normalizeSelection__EXPERIMENTAL(p), l))
                    }
                    s.$setSelection(i)
                } else if (--_, p = o[0], N = o[_], i.isCollapsed()) B(i, l);
                else {
                    var R = i.anchor,
                        $ = i.focus;
                    S = p.getTextContent().length, b = $.offset;
                    var A = R.offset,
                        L = R.isBefore($);
                    T = L ? A : b, i = L ? b : A;
                    var W = L ? R.type : $.type,
                        Y = L ? $.type : R.type;
                    if (R = L ? $.key : R.key, s.$isTextNode(p) && T === S && ($ = p.getNextSibling(), s.$isTextNode($) && (T = A = 0, p = $)), 1 === o.length) s.$isTextNode(p) && (T = "element" === W ? 0 : A > b ? b : A) !== (i = "element" === Y ? S : A > b ? A : b) && (0 === T && i === S ? (B(p, l), p.select(T, i)) : (o = p.splitText(T, i), B(o = 0 === T ? o[0] : o[1], l), o.select(0, i - T)));
                    else
                        for (s.$isTextNode(p) && T < p.getTextContentSize() && (0 !== T && (p = p.splitText(T)[1]), B(p, l)), s.$isTextNode(N) && (T = N.getTextContent().length, N.__key !== R && 0 !== i && (i = T), i !== T && ([N] = N.splitText(i)), 0 !== i && B(N, l)), i = 1; i < _; i++) S = (T = o[i]).getKey(), s.$isTextNode(T) && S !== p.getKey() && S !== N.getKey() && !T.isToken() && B(T, l)
                }
            }, l.$selectAll = function(i) {
                let l = i.anchor;
                i = i.focus;
                var o = l.getNode().getTopLevelElementOrThrow().getParentOrThrow();
                let _ = o.getFirstDescendant();
                o = o.getLastDescendant();
                let p = "element",
                    N = "element",
                    T = 0;
                s.$isTextNode(_) ? p = "text" : s.$isElementNode(_) || null === _ || (_ = _.getParentOrThrow()), s.$isTextNode(o) ? (N = "text", T = o.getTextContentSize()) : s.$isElementNode(o) || null === o || (o = o.getParentOrThrow()), _ && o && (l.set(_.getKey(), 0, p), i.set(o.getKey(), T, N))
            }, l.$setBlocksType = function(i, l) {
                if ("root" === i.anchor.key) {
                    l = l();
                    var o = s.$getRoot();
                    (i = o.getFirstChild()) ? i.replace(l, !0): o.append(l)
                } else
                    for (o = i.getNodes(), i = i.anchor.getNode().getParentOrThrow(), -1 === o.indexOf(i) && o.push(i), i.isInline() && (i = i.getParentOrThrow(), -1 === o.indexOf(i) && o.push(i)), i = 0; i < o.length; i++) {
                        let N = o[i];
                        var _ = N;
                        if (!s.$isElementNode(_) || s.$isRootOrShadowRoot(_)) _ = !1;
                        else {
                            var p = _.getFirstChild();
                            p = null === p || s.$isLineBreakNode(p) || s.$isTextNode(p) || p.isInline(), _ = !_.isInline() && !1 !== _.canBeEmpty() && p
                        }
                        _ && ((_ = l()).setFormat(N.getFormatType()), _.setIndent(N.getIndent()), N.replace(_, !0))
                    }
            }, l.$shouldOverrideDefaultCharacterSelection = function(i, l) {
                return i = s.$getAdjacentNode(i.focus, l), s.$isDecoratorNode(i) && !i.isIsolated() || s.$isElementNode(i) && !i.isInline() && !i.canBeEmpty()
            }, l.$sliceSelectedTextNodeContent = function(i, l) {
                if (l.isSelected() && !l.isSegmented() && !l.isToken() && (s.$isRangeSelection(i) || s.DEPRECATED_$isGridSelection(i))) {
                    var o = i.anchor.getNode(),
                        _ = i.focus.getNode(),
                        p = l.is(o),
                        N = l.is(_);
                    if (p || N) {
                        let s;
                        p = i.isBackward();
                        let [T, S] = i.getCharacterOffsets();
                        i = o.is(_), N = l.is(p ? _ : o), _ = l.is(p ? o : _), o = 0, i ? (o = T > S ? S : T, s = T > S ? T : S) : N ? (o = p ? S : T, s = void 0) : _ && (o = 0, s = p = p ? T : S), l.__text = l.__text.slice(o, s)
                    }
                }
                return l
            }, l.$wrapNodes = function(i, l, o = null) {
                var _ = i.getNodes();
                let p = _.length;
                var N = i.anchor;
                if (0 === p || 1 === p && "element" === N.type && 0 === N.getNode().getChildrenSize()) {
                    _ = (i = "text" === N.type ? N.getNode().getParentOrThrow() : N.getNode()).getChildren();
                    let s = l();
                    s.setFormat(i.getFormatType()), s.setIndent(i.getIndent()), _.forEach(i => s.append(i)), o && (s = o.append(s)), i.replace(s)
                } else {
                    N = null;
                    var T = [];
                    for (let S = 0; S < p; S++) {
                        let p = _[S];
                        s.$isRootOrShadowRoot(p) ? (E(i, T, T.length, l, o), T = [], N = p) : null === N || null !== N && s.$hasAncestor(p, N) ? T.push(p) : (E(i, T, T.length, l, o), T = [p])
                    }
                    E(i, T, T.length, l, o)
                }
            }, l.createDOMRange = function(i, l, o, _, p) {
                let N = l.getKey(),
                    T = _.getKey(),
                    S = document.createRange(),
                    b = i.getElementByKey(N);
                if (i = i.getElementByKey(T), s.$isTextNode(l) && (b = v(b)), s.$isTextNode(_) && (i = v(i)), void 0 === l || void 0 === _ || null === b || null === i) return null;
                "BR" === b.nodeName && ([b, o] = w(b)), "BR" === i.nodeName && ([i, p] = w(i)), l = b.firstChild, b === i && null != l && "BR" === l.nodeName && 0 === o && 0 === p && (p = 1);
                try {
                    S.setStart(b, o), S.setEnd(i, p)
                } catch (i) {
                    return null
                }
                return S.collapsed && (o !== p || N !== T) && (S.setStart(i, p), S.setEnd(b, o)), S
            }, l.createRectsFromDOMRange = function(i, l) {
                let o;
                var s = i.getRootElement();
                if (null === s) return [];
                i = s.getBoundingClientRect(), s = parseFloat((s = getComputedStyle(s)).paddingLeft) + parseFloat(s.paddingRight);
                let _ = (l = Array.from(l.getClientRects())).length;
                l.sort((i, l) => {
                    let o = i.top - l.top;
                    return 3 >= Math.abs(o) ? i.left - l.left : o
                });
                for (let p = 0; p < _; p++) {
                    let N = l[p],
                        T = N.width + s === i.width;
                    o && o.top <= N.top && o.top + o.height > N.top && o.left + o.width > N.left || T ? (l.splice(p--, 1), _--) : o = N
                }
                return l
            }, l.getStyleObjectFromCSS = z, l.trimTextContentFromAnchor = function(i, l, o) {
                let _ = l.getNode();
                if (s.$isElementNode(_)) {
                    var p = _.getDescendantByIndex(l.offset);
                    null !== p && (_ = p)
                }
                for (; 0 < o && null !== _;) {
                    var N = _.getPreviousSibling(),
                        T = 0;
                    if (null === N) {
                        p = _.getParentOrThrow();
                        for (var S = p.getPreviousSibling(); null === S;) {
                            if (null === (p = p.getParent())) {
                                N = null;
                                break
                            }
                            S = p.getPreviousSibling()
                        }
                        null !== p && (T = p.isInline() ? 0 : 2, N = s.$isElementNode(S) ? S.getLastDescendant() : S)
                    }
                    if ("" === (S = _.getTextContent()) && s.$isElementNode(_) && !_.isInline() && (S = "\n\n"), p = S.length, !s.$isTextNode(_) || o >= p) S = _.getParent(), _.remove(), null == S || 0 !== S.getChildrenSize() || s.$isRootNode(S) || S.remove(), o -= p + T, _ = N;
                    else {
                        let b = _.getKey();
                        T = i.getEditorState().read(() => {
                            let i = s.$getNodeByKey(b);
                            return s.$isTextNode(i) && i.isSimpleText() ? i.getTextContent() : null
                        }), N = p - o;
                        let R = S.slice(0, N);
                        null !== T && T !== S ? (o = s.$getPreviousSelection(), p = _, _.isSimpleText() ? _.setTextContent(T) : (p = s.$createTextNode(T), _.replace(p)), s.$isRangeSelection(o) && o.isCollapsed() && (o = o.anchor.offset, p.select(o, o))) : _.isSimpleText() ? (T = l.key === b, (S = l.offset) < o && (S = p), o = T ? S - o : 0, p = T ? S : N, T && 0 === o ? [o] = _.splitText(o, p) : [, o] = _.splitText(o, p), o.remove()) : (o = s.$createTextNode(R), _.replace(o)), o = 0
                    }
                }
            }
        },
        92541: function(i, l, o) {
            let s = o(50813);
            i.exports = s
        },
        50813: function(i, l, o) {
            var s = o(83915);
            let _ = new Map;

            function w(i) {
                for (; null != i;) {
                    if (i.nodeType === Node.TEXT_NODE) return i;
                    i = i.firstChild
                }
                return null
            }

            function x(i) {
                let l = i.parentNode;
                if (null == l) throw Error("Should never happen");
                return [l, Array.from(l.childNodes).indexOf(i)]
            }

            function y(i) {
                let l = {};
                for (let o of i = i.split(";"))
                    if ("" !== o) {
                        let [i, s] = o.split(/:([^]+)/);
                        i && s && (l[i.trim()] = s.trim())
                    }
                return l
            }

            function z(i) {
                let l = _.get(i);
                return void 0 === l && (l = y(i), _.set(i, l)), l
            }

            function B(i, l) {
                let o = z("getStyle" in i ? i.getStyle() : i.style),
                    s = function(i) {
                        let l = "";
                        for (let o in i) o && (l += `${o}: ${i[o]};`);
                        return l
                    }(l = Object.entries(l).reduce((i, [l, s]) => (s instanceof Function ? i[l] = s(o[l]) : null === s ? delete i[l] : i[l] = s, i), { ...o
                    }));
                i.setStyle(s), _.set(s, l)
            }

            function D(i, l, o, _, p = null) {
                if (0 !== l.length) {
                    var N = l[0],
                        T = new Map,
                        S = [];
                    (N = s.$isElementNode(N) ? N : N.getParentOrThrow()).isInline() && (N = N.getParentOrThrow());
                    for (var b = !1; null !== N;) {
                        var R = N.getPreviousSibling();
                        if (null !== R) {
                            N = R, b = !0;
                            break
                        }
                        if (N = N.getParentOrThrow(), s.$isRootOrShadowRoot(N)) break
                    }
                    R = new Set;
                    for (var $ = 0; $ < o; $++) {
                        var A = l[$];
                        s.$isElementNode(A) && 0 === A.getChildrenSize() && R.add(A.getKey())
                    }
                    var L = new Set;
                    for ($ = 0; $ < o; $++) {
                        var W = (A = l[$]).getParent();
                        if (null !== W && W.isInline() && (W = W.getParent()), null !== W && s.$isLeafNode(A) && !L.has(A.getKey())) {
                            if (A = W.getKey(), void 0 === T.get(A)) {
                                let i = _();
                                i.setFormat(W.getFormatType()), i.setIndent(W.getIndent()), S.push(i), T.set(A, i), W.getChildren().forEach(l => {
                                        i.append(l), L.add(l.getKey()), s.$isElementNode(l) && l.getChildrenKeys().forEach(i => L.add(i))
                                    }),
                                    function(i) {
                                        for (; null !== i && !s.$isRootOrShadowRoot(i);) {
                                            let l = i.getLatest(),
                                                o = i.getParent();
                                            0 === l.getChildrenSize() && i.remove(!0), i = o
                                        }
                                    }(W)
                            }
                        } else if (R.has(A.getKey())) {
                            if (!s.$isElementNode(A)) throw Error("Expected node in emptyElements to be an ElementNode");
                            (W = _()).setFormat(A.getFormatType()), W.setIndent(A.getIndent()), S.push(W), A.remove(!0)
                        }
                    }
                    if (null !== p)
                        for (l = 0; l < S.length; l++) p.append(S[l]);
                    if (l = null, s.$isRootOrShadowRoot(N)) {
                        if (b) {
                            if (null !== p) N.insertAfter(p);
                            else
                                for (p = S.length - 1; 0 <= p; p--) N.insertAfter(S[p])
                        } else if (b = N.getFirstChild(), s.$isElementNode(b) && (N = b), null === b) {
                            if (p) N.append(p);
                            else
                                for (p = 0; p < S.length; p++) b = S[p], N.append(b), l = b
                        } else if (null !== p) b.insertBefore(p);
                        else
                            for (N = 0; N < S.length; N++) p = S[N], b.insertBefore(p), l = p
                    } else if (p) N.insertAfter(p);
                    else
                        for (p = S.length - 1; 0 <= p; p--) b = S[p], N.insertAfter(b), l = b;
                    S = s.$getPreviousSelection(), s.$isRangeSelection(S) && S.anchor.getNode().isAttached() && S.focus.getNode().isAttached() ? s.$setSelection(S.clone()) : null !== l ? l.selectEnd() : i.dirty = !0
                }
            }

            function E(i, l, o, s) {
                i.modify(l ? "extend" : "move", o, s)
            }

            function F(i) {
                return i = i.anchor.getNode(), "rtl" === (s.$isRootNode(i) ? i : i.getParentOrThrow()).getDirection()
            }

            function G(i) {
                if (s.$isDecoratorNode(i) || !s.$isElementNode(i) || s.$isRootOrShadowRoot(i)) return !1;
                var l = i.getFirstChild();
                return l = null === l || s.$isLineBreakNode(l) || s.$isTextNode(l) || l.isInline(), !i.isInline() && !1 !== i.canBeEmpty() && l
            }
            l.$addNodeStyle = function(i) {
                let l = y(i = i.getStyle());
                _.set(i, l)
            }, l.$cloneWithProperties = function(i) {
                let l = i.constructor.clone(i);
                return (l.__parent = i.__parent, l.__next = i.__next, l.__prev = i.__prev, s.$isElementNode(i) && s.$isElementNode(l)) ? (l.__first = i.__first, l.__last = i.__last, l.__size = i.__size, l.__format = i.__format, l.__indent = i.__indent, l.__dir = i.__dir) : s.$isTextNode(i) && s.$isTextNode(l) && (l.__format = i.__format, l.__style = i.__style, l.__mode = i.__mode, l.__detail = i.__detail), l
            }, l.$getSelectionStyleValueForProperty = function(i, l, o = "") {
                let _ = null,
                    p = i.getNodes();
                var N = i.anchor,
                    T = i.focus,
                    S = i.isBackward();
                let b = S ? T.offset : N.offset;
                if (N = S ? T.getNode() : N.getNode(), i.isCollapsed() && "" !== i.style && null !== (i = z(i.style)) && l in i) return i[l];
                for (i = 0; i < p.length; i++) {
                    var R = p[i];
                    if ((0 === i || 0 !== b || !R.is(N)) && s.$isTextNode(R)) {
                        if (T = l, S = o, T = null !== (R = z(R = R.getStyle())) && R[T] || S, null === _) _ = T;
                        else if (_ !== T) {
                            _ = "";
                            break
                        }
                    }
                }
                return null === _ ? o : _
            }, l.$isAtNodeEnd = function(i) {
                if ("text" === i.type) return i.offset === i.getNode().getTextContentSize();
                let l = i.getNode();
                if (!s.$isElementNode(l)) throw Error("isAtNodeEnd: node must be a TextNode or ElementNode");
                return i.offset === l.getChildrenSize()
            }, l.$isParentElementRTL = F, l.$moveCaretSelection = E, l.$moveCharacter = function(i, l, o) {
                let s = F(i);
                E(i, l, o ? !s : s, "character")
            }, l.$patchStyleText = function(i, l) {
                var o = i.getNodes(),
                    _ = o.length,
                    p = i.getStartEndPoints();
                if (null !== p) {
                    var [N, T] = p;
                    --_, p = o[0];
                    var S = o[_];
                    if (i.isCollapsed() && s.$isRangeSelection(i)) B(i, l);
                    else {
                        var b = p.getTextContent().length,
                            R = T.offset,
                            $ = N.offset,
                            A = N.isBefore(T),
                            L = A ? $ : R;
                        i = A ? R : $;
                        var W = A ? N.type : T.type,
                            Y = A ? T.type : N.type;
                        if (A = A ? T.key : N.key, s.$isTextNode(p) && L === b) {
                            let i = p.getNextSibling();
                            s.$isTextNode(i) && (L = $ = 0, p = i)
                        }
                        if (1 === o.length) s.$isTextNode(p) && p.canHaveFormat() && (L = "element" === W ? 0 : $ > R ? R : $) !== (i = "element" === Y ? b : $ > R ? $ : R) && (0 === L && i === b ? (B(p, l), p.select(L, i)) : (o = p.splitText(L, i), B(o = 0 === L ? o[0] : o[1], l), o.select(0, i - L)));
                        else
                            for (s.$isTextNode(p) && L < p.getTextContentSize() && p.canHaveFormat() && (0 !== L && (p = p.splitText(L)[1], L = 0, N.set(p.getKey(), L, "text")), B(p, l)), s.$isTextNode(S) && S.canHaveFormat() && (L = S.getTextContent().length, S.__key !== A && 0 !== i && (i = L), i !== L && ([S] = S.splitText(i)), 0 === i && "element" !== Y || B(S, l)), i = 1; i < _; i++) Y = (L = o[i]).getKey(), s.$isTextNode(L) && L.canHaveFormat() && Y !== p.getKey() && Y !== S.getKey() && !L.isToken() && B(L, l)
                    }
                }
            }, l.$selectAll = function(i) {
                let l = i.anchor;
                i = i.focus;
                var o = l.getNode().getTopLevelElementOrThrow().getParentOrThrow();
                let _ = o.getFirstDescendant();
                o = o.getLastDescendant();
                let p = "element",
                    N = "element",
                    T = 0;
                s.$isTextNode(_) ? p = "text" : s.$isElementNode(_) || null === _ || (_ = _.getParentOrThrow()), s.$isTextNode(o) ? (N = "text", T = o.getTextContentSize()) : s.$isElementNode(o) || null === o || (o = o.getParentOrThrow()), _ && o && (l.set(_.getKey(), 0, p), i.set(o.getKey(), T, N))
            }, l.$setBlocksType = function(i, l) {
                if (null !== i) {
                    var o = i.getStartEndPoints();
                    if (null !== (o = o ? o[0] : null) && "root" === o.key) l = l(), (o = (i = s.$getRoot()).getFirstChild()) ? o.replace(l, !0) : i.append(l);
                    else {
                        if (i = i.getNodes(), null !== o) {
                            for (o = o.getNode(); null !== o && null !== o.getParent() && !G(o);) o = o.getParentOrThrow();
                            o = G(o) ? o : null
                        } else o = !1;
                        for (o && -1 === i.indexOf(o) && i.push(o), o = 0; o < i.length; o++) {
                            let _ = i[o];
                            if (!G(_)) continue;
                            if (!s.$isElementNode(_)) throw Error("Expected block node to be an ElementNode");
                            let p = l();
                            p.setFormat(_.getFormatType()), p.setIndent(_.getIndent()), _.replace(p, !0)
                        }
                    }
                }
            }, l.$shouldOverrideDefaultCharacterSelection = function(i, l) {
                return i = s.$getAdjacentNode(i.focus, l), s.$isDecoratorNode(i) && !i.isIsolated() || s.$isElementNode(i) && !i.isInline() && !i.canBeEmpty()
            }, l.$sliceSelectedTextNodeContent = function(i, l) {
                var o = i.getStartEndPoints();
                if (l.isSelected(i) && !l.isSegmented() && !l.isToken() && null !== o) {
                    let [S, b] = o;
                    o = i.isBackward();
                    var _ = S.getNode(),
                        p = b.getNode(),
                        N = l.is(_),
                        T = l.is(p);
                    if (N || T) {
                        let [S, b] = s.$getCharacterOffsets(i);
                        i = _.is(p), N = l.is(o ? p : _), p = l.is(o ? _ : p), _ = 0, T = void 0, i ? (_ = S > b ? b : S, T = S > b ? S : b) : N ? (_ = o ? b : S, T = void 0) : p && (_ = 0, T = o = o ? S : b), l.__text = l.__text.slice(_, T)
                    }
                }
                return l
            }, l.$wrapNodes = function(i, l, o = null) {
                var _ = i.getStartEndPoints(),
                    p = _ ? _[0] : null;
                let N = (_ = i.getNodes()).length;
                if (null !== p && (0 === N || 1 === N && "element" === p.type && 0 === p.getNode().getChildrenSize())) {
                    _ = (i = "text" === p.type ? p.getNode().getParentOrThrow() : p.getNode()).getChildren();
                    let s = l();
                    s.setFormat(i.getFormatType()), s.setIndent(i.getIndent()), _.forEach(i => s.append(i)), o && (s = o.append(s)), i.replace(s)
                } else {
                    p = null;
                    var T = [];
                    for (let S = 0; S < N; S++) {
                        let N = _[S];
                        s.$isRootOrShadowRoot(N) ? (D(i, T, T.length, l, o), T = [], p = N) : null === p || null !== p && s.$hasAncestor(N, p) ? T.push(N) : (D(i, T, T.length, l, o), T = [N])
                    }
                    D(i, T, T.length, l, o)
                }
            }, l.createDOMRange = function(i, l, o, _, p) {
                let N = l.getKey(),
                    T = _.getKey(),
                    S = document.createRange(),
                    b = i.getElementByKey(N);
                if (i = i.getElementByKey(T), s.$isTextNode(l) && (b = w(b)), s.$isTextNode(_) && (i = w(i)), void 0 === l || void 0 === _ || null === b || null === i) return null;
                "BR" === b.nodeName && ([b, o] = x(b)), "BR" === i.nodeName && ([i, p] = x(i)), l = b.firstChild, b === i && null != l && "BR" === l.nodeName && 0 === o && 0 === p && (p = 1);
                try {
                    S.setStart(b, o), S.setEnd(i, p)
                } catch (i) {
                    return null
                }
                return S.collapsed && (o !== p || N !== T) && (S.setStart(i, p), S.setEnd(b, o)), S
            }, l.createRectsFromDOMRange = function(i, l) {
                let o;
                var s = i.getRootElement();
                if (null === s) return [];
                i = s.getBoundingClientRect(), s = parseFloat((s = getComputedStyle(s)).paddingLeft) + parseFloat(s.paddingRight);
                let _ = (l = Array.from(l.getClientRects())).length;
                l.sort((i, l) => {
                    let o = i.top - l.top;
                    return 3 >= Math.abs(o) ? i.left - l.left : o
                });
                for (let p = 0; p < _; p++) {
                    let N = l[p],
                        T = N.width + s === i.width;
                    o && o.top <= N.top && o.top + o.height > N.top && o.left + o.width > N.left || T ? (l.splice(p--, 1), _--) : o = N
                }
                return l
            }, l.getStyleObjectFromCSS = z, l.trimTextContentFromAnchor = function(i, l, o) {
                let _ = l.getNode();
                if (s.$isElementNode(_)) {
                    var p = _.getDescendantByIndex(l.offset);
                    null !== p && (_ = p)
                }
                for (; 0 < o && null !== _;) {
                    s.$isElementNode(_) && null !== (p = _.getLastDescendant()) && (_ = p);
                    var N = _.getPreviousSibling(),
                        T = 0;
                    if (null === N) {
                        p = _.getParentOrThrow();
                        for (var S = p.getPreviousSibling(); null === S;) {
                            if (null === (p = p.getParent())) {
                                N = null;
                                break
                            }
                            S = p.getPreviousSibling()
                        }
                        null !== p && (T = p.isInline() ? 0 : 2, N = S)
                    }
                    if ("" === (S = _.getTextContent()) && s.$isElementNode(_) && !_.isInline() && (S = "\n\n"), p = S.length, !s.$isTextNode(_) || o >= p) S = _.getParent(), _.remove(), null == S || 0 !== S.getChildrenSize() || s.$isRootNode(S) || S.remove(), o -= p + T, _ = N;
                    else {
                        let b = _.getKey();
                        T = i.getEditorState().read(() => {
                            let i = s.$getNodeByKey(b);
                            return s.$isTextNode(i) && i.isSimpleText() ? i.getTextContent() : null
                        }), N = p - o;
                        let R = S.slice(0, N);
                        null !== T && T !== S ? (o = s.$getPreviousSelection(), p = _, _.isSimpleText() ? _.setTextContent(T) : (p = s.$createTextNode(T), _.replace(p)), s.$isRangeSelection(o) && o.isCollapsed() && (o = o.anchor.offset, p.select(o, o))) : _.isSimpleText() ? (T = l.key === b, (S = l.offset) < o && (S = p), o = T ? S - o : 0, p = T ? S : N, T && 0 === o ? [o] = _.splitText(o, p) : [, o] = _.splitText(o, p), o.remove()) : (o = s.$createTextNode(R), _.replace(o)), o = 0
                    }
                }
            }
        },
        77553: function(i, l, o) {
            let s = o(27166);
            i.exports = s
        },
        27166: function(i, l, o) {
            var s = o(83915);

            function r(i, l = !0) {
                return !i && (i = t(), l && (i = i.trim()), "" === i)
            }

            function t() {
                return s.$getRoot().getTextContent()
            }

            function u(i) {
                if (!r(i, !1)) return !1;
                let l = (i = s.$getRoot().getChildren()).length;
                if (1 < l) return !1;
                for (let _ = 0; _ < l; _++) {
                    var o = i[_];
                    if (s.$isDecoratorNode(o)) return !1;
                    if (s.$isElementNode(o)) {
                        if (!s.$isParagraphNode(o) || 0 !== o.__indent) return !1;
                        let i = (o = o.getChildren()).length;
                        for (let l = 0; l < i; l++)
                            if (!s.$isTextNode(o[_])) return !1
                    }
                }
                return !0
            }
            l.$canShowPlaceholder = u, l.$canShowPlaceholderCurry = function(i) {
                return () => u(i)
            }, l.$findTextIntersectionFromCharacters = function(i, l) {
                var o = i.getFirstChild();
                i = 0;
                e: for (; null !== o;) {
                    if (s.$isElementNode(o)) {
                        var _ = o.getFirstChild();
                        if (null !== _) {
                            o = _;
                            continue
                        }
                    } else if (s.$isTextNode(o)) {
                        if (i + (_ = o.getTextContentSize()) > l) return {
                            node: o,
                            offset: l - i
                        };
                        i += _
                    }
                    if (null !== (_ = o.getNextSibling())) o = _;
                    else {
                        for (o = o.getParent(); null !== o;) {
                            if (null !== (_ = o.getNextSibling())) {
                                o = _;
                                continue e
                            }
                            o = o.getParent()
                        }
                        break
                    }
                }
                return null
            }, l.$isRootTextContentEmpty = r, l.$isRootTextContentEmptyCurry = function(i, l) {
                return () => r(i, l)
            }, l.$rootTextContent = t, l.registerLexicalTextEntity = function(i, l, o, _) {
                let n = i => {
                    let l = s.$createTextNode(i.getTextContent());
                    l.setFormat(i.getFormat()), i.replace(l)
                };
                return [i.registerNodeTransform(s.TextNode, i => {
                    if (i.isSimpleText()) {
                        var p = i.getPreviousSibling(),
                            N = i.getTextContent(),
                            T = i;
                        if (s.$isTextNode(p)) {
                            var S = p.getTextContent(),
                                b = l(S + N);
                            if (p instanceof o) {
                                if (null === b || 0 !== p.getLatest().__mode) {
                                    n(p);
                                    return
                                }
                                if (0 < (b = b.end - S.length)) {
                                    T = S + (T = N.slice(0, b)), p.select(), p.setTextContent(T), b === N.length ? i.remove() : (p = N.slice(b), i.setTextContent(p));
                                    return
                                }
                            } else if (null === b || b.start < S.length) return
                        }
                        for (;;) {
                            let R;
                            if (N = b = null === (i = l(N)) ? "" : N.slice(i.end), "" === b) {
                                if (S = T.getNextSibling(), s.$isTextNode(S)) {
                                    if (null === (b = l(b = T.getTextContent() + S.getTextContent()))) {
                                        S instanceof o ? n(S) : S.markDirty();
                                        break
                                    }
                                    if (0 !== b.start) break
                                }
                            } else if (null !== (S = l(b)) && 0 === S.start) break;
                            if (null === i || !(0 === i.start && s.$isTextNode(p) && p.isTextEntity()) && (0 === i.start ? [R, T] = T.splitText(i.end) : [, R, T] = T.splitText(i.start, i.end), (i = _(R)).setFormat(R.getFormat()), R.replace(i), null == T)) break
                        }
                    }
                }), i = i.registerNodeTransform(o, i => {
                    var _ = i.getTextContent();
                    let p = l(_);
                    null === p || 0 !== p.start ? n(i) : _.length > p.end ? i.splitText(p.end) : (_ = i.getPreviousSibling(), s.$isTextNode(_) && _.isTextEntity() && (n(_), n(i)), _ = i.getNextSibling(), s.$isTextNode(_) && _.isTextEntity() && (n(_), i instanceof o && n(i)))
                })]
            }
        },
        28252: function(i, l, o) {
            let s = o(88596);
            i.exports = s
        },
        88596: function(i, l, o) {
            var s = o(85841),
                _ = o(83915);

            function r(i, l) {
                for (let o of l)
                    if (i.type.startsWith(o)) return !0;
                return !1
            }

            function t(i, l) {
                for (; i !== _.$getRoot() && null != i;) {
                    if (l(i)) return i;
                    i = i.getParent()
                }
                return null
            }
            l.$splitNode = _.$splitNode, l.isHTMLAnchorElement = _.isHTMLAnchorElement, l.isHTMLElement = _.isHTMLElement, l.$dfs = function(i, l) {
                let o = [];
                i = (i || _.$getRoot()).getLatest(), l = l || (_.$isElementNode(i) ? i.getLastDescendant() : i);
                for (var s = i, p = 0; null !== (s = s.getParent());) p++;
                for (s = p; null !== i && !i.is(l);)
                    if (o.push({
                            depth: s,
                            node: i
                        }), _.$isElementNode(i) && 0 < i.getChildrenSize()) i = i.getFirstChild(), s++;
                    else
                        for (p = null; null === p && null !== i;) null === (p = i.getNextSibling()) ? (i = i.getParent(), s--) : i = p;
                return null !== i && i.is(l) && o.push({
                    depth: s,
                    node: i
                }), o
            }, l.$filter = function(i, l) {
                let o = [];
                for (let s = 0; s < i.length; s++) {
                    let _ = l(i[s]);
                    null !== _ && o.push(_)
                }
                return o
            }, l.$findMatchingParent = t, l.$getNearestBlockElementAncestorOrThrow = function(i) {
                let l = t(i, i => _.$isElementNode(i) && !i.isInline());
                return _.$isElementNode(l) || function(i) {
                    let l = new URLSearchParams;
                    l.append("code", i);
                    for (let i = 1; i < arguments.length; i++) l.append("v", arguments[i]);
                    throw Error(`Minified Lexical error #${i}; visit https://lexical.dev/docs/error?${l} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`)
                }(4, i.__key), l
            }, l.$getNearestNodeOfType = function(i, l) {
                for (; null != i;) {
                    if (i instanceof l) return i;
                    i = i.getParent()
                }
                return null
            }, l.$insertFirst = function(i, l) {
                let o = i.getFirstChild();
                null !== o ? o.insertBefore(l) : i.append(l)
            }, l.$insertNodeToNearestRoot = function(i) {
                var l = _.$getSelection() || _.$getPreviousSelection();
                if (_.$isRangeSelection(l)) {
                    var {
                        focus: o
                    } = l;
                    if (l = o.getNode(), o = o.offset, _.$isRootOrShadowRoot(l)) null == (o = l.getChildAtIndex(o)) ? l.append(i) : o.insertBefore(i), i.selectNext();
                    else {
                        let s, p;
                        _.$isTextNode(l) ? (s = l.getParentOrThrow(), p = l.getIndexWithinParent(), 0 < o && (p += 1, l.splitText(o))) : (s = l, p = o), [, l] = _.$splitNode(s, p), l.insertBefore(i), l.selectStart()
                    }
                } else _.$isNodeSelection(l) || _.DEPRECATED_$isGridSelection(l) ? (l = l.getNodes())[l.length - 1].getTopLevelElementOrThrow().insertAfter(i) : _.$getRoot().append(i), l = _.$createParagraphNode(), i.insertAfter(l), l.select();
                return i.getLatest()
            }, l.$restoreEditorState = function(i, l) {
                let o = new Map,
                    p = i._pendingEditorState;
                for (let [i, p] of l._nodeMap) {
                    let l = s.$cloneWithProperties(p);
                    _.$isTextNode(l) && (l.__text = p.__text), o.set(i, l)
                }
                p && (p._nodeMap = o), i._dirtyType = 2, i = l._selection, _.$setSelection(null === i ? null : i.clone())
            }, l.$wrapNodeInElement = function(i, l) {
                return l = l(), i.replace(l), l.append(i), l
            }, l.addClassNamesToElement = function(i, ...l) {
                l.forEach(l => {
                    "string" == typeof l && (l = l.split(" ").filter(i => "" !== i), i.classList.add(...l))
                })
            }, l.isMimeType = r, l.mediaFileReader = function(i, l) {
                let o = i[Symbol.iterator]();
                return new Promise((i, s) => {
                    let _ = [],
                        h = () => {
                            let {
                                done: p,
                                value: N
                            } = o.next();
                            if (p) return i(_);
                            let T = new FileReader;
                            T.addEventListener("error", s), T.addEventListener("load", () => {
                                let i = T.result;
                                "string" == typeof i && _.push({
                                    file: N,
                                    result: i
                                }), h()
                            }), r(N, l) ? T.readAsDataURL(N) : h()
                        };
                    h()
                })
            }, l.mergeRegister = function(...i) {
                return () => {
                    i.forEach(i => i())
                }
            }, l.objectKlassEquals = function(i, l) {
                return null !== i && Object.getPrototypeOf(i).constructor.name === l.name
            }, l.registerNestedElementResolver = function(i, l, o, s) {
                return i.registerNodeTransform(l, i => {
                    e: {
                        for (var _ = i.getChildren(), p = 0; p < _.length; p++)
                            if (_[p] instanceof l) {
                                _ = null;
                                break e
                            }
                        for (_ = i; null !== _;)
                            if (p = _, (_ = _.getParent()) instanceof l) {
                                _ = {
                                    child: p,
                                    parent: _
                                };
                                break e
                            }
                        _ = null
                    }
                    if (null !== _) {
                        let {
                            child: l,
                            parent: N
                        } = _;
                        if (l.is(i)) {
                            if (s(N, i), _ = (i = l.getNextSiblings()).length, N.insertAfter(l), 0 !== _) {
                                p = o(N), l.insertAfter(p);
                                for (let l = 0; l < _; l++) p.append(i[l])
                            }
                            N.canBeEmpty() || 0 !== N.getChildrenSize() || N.remove()
                        }
                    }
                })
            }, l.removeClassNamesFromElement = function(i, ...l) {
                l.forEach(l => {
                    "string" == typeof l && i.classList.remove(...l.split(" "))
                })
            }
        },
        53017: function(i, l, o) {
            let s = o(78635);
            i.exports = s
        },
        78635: function(i, l, o) {
            var s = o(92541),
                _ = o(83915);

            function D(...i) {
                return () => {
                    i.forEach(i => i())
                }
            }
            let p = {
                attributes: !0,
                characterData: !0,
                childList: !0,
                subtree: !0
            };

            function F(i, l, o) {
                function e() {
                    if (null === _) throw Error("Unexpected null rootDOMNode");
                    if (null === N) throw Error("Unexpected null parentDOMNode");
                    let {
                        left: p,
                        top: T
                    } = _.getBoundingClientRect();
                    var R = N;
                    let $ = s.createRectsFromDOMRange(i, l);
                    b.isConnected || R.append(b), R = !1;
                    for (let i = 0; i < $.length; i++) {
                        var A = $[i];
                        let l = S[i] || document.createElement("div"),
                            o = l.style;
                        "absolute" !== o.position && (o.position = "absolute", R = !0);
                        var L = `${A.left-p}px`;
                        o.left !== L && (o.left = L, R = !0), L = `${A.top-T}px`, o.top !== L && (l.style.top = L, R = !0), L = `${A.width}px`, o.width !== L && (l.style.width = L, R = !0), A = `${A.height}px`, o.height !== A && (l.style.height = A, R = !0), l.parentNode !== b && (b.append(l), R = !0), S[i] = l
                    }
                    for (; S.length > $.length;) S.pop();
                    R && o(S)
                }

                function d() {
                    for (let i of (_ = N = null, null !== T && T.disconnect(), T = null, b.remove(), S)) i.remove();
                    S = []
                }
                let _ = null,
                    N = null,
                    T = null,
                    S = [],
                    b = document.createElement("div"),
                    R = i.registerRootListener(function f() {
                        let l = i.getRootElement();
                        if (null === l) return d();
                        let o = l.parentElement;
                        if (!(o instanceof HTMLElement)) return d();
                        d(), _ = l, N = o, (T = new MutationObserver(l => {
                            let o = i.getRootElement(),
                                s = o && o.parentElement;
                            if (o !== _ || s !== N) return f();
                            for (let i of l)
                                if (!b.contains(i.target)) return e()
                        })).observe(o, p), e()
                    });
                return () => {
                    R(), d()
                }
            }

            function G(i, l) {
                for (let o of l)
                    if (i.type.startsWith(o)) return !0;
                return !1
            }
            let H = (i, l) => {
                for (; i !== _.$getRoot() && null != i;) {
                    if (l(i)) return i;
                    i = i.getParent()
                }
                return null
            };
            l.$splitNode = _.$splitNode, l.isHTMLAnchorElement = _.isHTMLAnchorElement, l.isHTMLElement = _.isHTMLElement, l.$dfs = function(i, l) {
                let o = [];
                i = (i || _.$getRoot()).getLatest(), l = l || (_.$isElementNode(i) ? i.getLastDescendant() : i);
                for (var s = i, p = 0; null !== (s = s.getParent());) p++;
                for (s = p; null !== i && !i.is(l);)
                    if (o.push({
                            depth: s,
                            node: i
                        }), _.$isElementNode(i) && 0 < i.getChildrenSize()) i = i.getFirstChild(), s++;
                    else
                        for (p = null; null === p && null !== i;) null === (p = i.getNextSibling()) ? (i = i.getParent(), s--) : i = p;
                return null !== i && i.is(l) && o.push({
                    depth: s,
                    node: i
                }), o
            }, l.$filter = function(i, l) {
                let o = [];
                for (let s = 0; s < i.length; s++) {
                    let _ = l(i[s]);
                    null !== _ && o.push(_)
                }
                return o
            }, l.$findMatchingParent = H, l.$getNearestBlockElementAncestorOrThrow = function(i) {
                let l = H(i, i => _.$isElementNode(i) && !i.isInline());
                return _.$isElementNode(l) || function(i) {
                    let l = new URLSearchParams;
                    l.append("code", i);
                    for (let i = 1; i < arguments.length; i++) l.append("v", arguments[i]);
                    throw Error(`Minified Lexical error #${i}; visit https://lexical.dev/docs/error?${l} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`)
                }(4, i.__key), l
            }, l.$getNearestNodeOfType = function(i, l) {
                for (; null != i;) {
                    if (i instanceof l) return i;
                    i = i.getParent()
                }
                return null
            }, l.$insertFirst = function(i, l) {
                let o = i.getFirstChild();
                null !== o ? o.insertBefore(l) : i.append(l)
            }, l.$insertNodeToNearestRoot = function(i) {
                var l = _.$getSelection() || _.$getPreviousSelection();
                if (_.$isRangeSelection(l)) {
                    var {
                        focus: o
                    } = l;
                    if (l = o.getNode(), o = o.offset, _.$isRootOrShadowRoot(l)) null == (o = l.getChildAtIndex(o)) ? l.append(i) : o.insertBefore(i), i.selectNext();
                    else {
                        let s, p;
                        _.$isTextNode(l) ? (s = l.getParentOrThrow(), p = l.getIndexWithinParent(), 0 < o && (p += 1, l.splitText(o))) : (s = l, p = o), [, l] = _.$splitNode(s, p), l.insertBefore(i), l.selectStart()
                    }
                } else null != l ? (l = l.getNodes())[l.length - 1].getTopLevelElementOrThrow().insertAfter(i) : _.$getRoot().append(i), l = _.$createParagraphNode(), i.insertAfter(l), l.select();
                return i.getLatest()
            }, l.$restoreEditorState = function(i, l) {
                let o = new Map,
                    p = i._pendingEditorState;
                for (let [i, p] of l._nodeMap) {
                    let l = s.$cloneWithProperties(p);
                    if (_.$isTextNode(l)) {
                        if (!_.$isTextNode(p)) throw Error("Expected node be a TextNode");
                        l.__text = p.__text
                    }
                    o.set(i, l)
                }
                p && (p._nodeMap = o), i._dirtyType = 2, i = l._selection, _.$setSelection(null === i ? null : i.clone())
            }, l.$wrapNodeInElement = function(i, l) {
                return l = l(), i.replace(l), l.append(i), l
            }, l.addClassNamesToElement = function(i, ...l) {
                l.forEach(l => {
                    "string" == typeof l && (l = l.split(" ").filter(i => "" !== i), i.classList.add(...l))
                })
            }, l.isMimeType = G, l.markSelection = function(i, l) {
                function c(T) {
                    T.read(() => {
                        var T = _.$getSelection();
                        if (_.$isRangeSelection(T)) {
                            var {
                                anchor: S,
                                focus: b
                            } = T, R = (T = S.getNode()).getKey(), $ = S.offset, A = b.getNode(), L = A.getKey(), W = b.offset, Y = i.getElementByKey(R), V = i.getElementByKey(L);
                            if (R = null === o || null === Y || $ !== s || R !== o.getKey() || T !== o && (!(o instanceof _.TextNode) || T.updateDOM(o, Y, i._config)), L = null === p || null === V || W !== N || L !== p.getKey() || A !== p && (!(p instanceof _.TextNode) || A.updateDOM(p, V, i._config)), R || L) {
                                Y = i.getElementByKey(S.getNode().getKey());
                                var U = i.getElementByKey(b.getNode().getKey());
                                if (null !== Y && null !== U && "SPAN" === Y.tagName && "SPAN" === U.tagName) {
                                    if (L = document.createRange(), b.isBefore(S) ? (R = U, V = b.offset, U = Y, Y = S.offset) : (R = Y, V = S.offset, Y = b.offset), null === (R = R.firstChild) || null === (U = U.firstChild)) throw Error("Expected text node to be first child of span");
                                    L.setStart(R, V), L.setEnd(U, Y), n(), n = F(i, L, i => {
                                        for (let l of i) {
                                            let i = l.style;
                                            "Highlight" !== i.background && (i.background = "Highlight"), "HighlightText" !== i.color && (i.color = "HighlightText"), "-1" !== i.zIndex && (i.zIndex = "-1"), "none" !== i.pointerEvents && (i.pointerEvents = "none"), "-1.5px" !== i.marginTop && (i.marginTop = "-1.5px"), "4px" !== i.paddingTop && (i.paddingTop = "4px"), "0px" !== i.paddingBottom && (i.paddingBottom = "0px")
                                        }
                                        void 0 !== l && l(i)
                                    })
                                }
                            }
                            o = T, s = $, p = A, N = W
                        } else N = p = s = o = null, n(), n = () => {}
                    })
                }
                let o = null,
                    s = null,
                    p = null,
                    N = null,
                    n = () => {};
                return c(i.getEditorState()), D(i.registerUpdateListener(({
                    editorState: i
                }) => c(i)), n, () => {
                    n()
                })
            }, l.mediaFileReader = function(i, l) {
                let o = i[Symbol.iterator]();
                return new Promise((i, s) => {
                    let _ = [],
                        g = () => {
                            let {
                                done: p,
                                value: N
                            } = o.next();
                            if (p) return i(_);
                            let T = new FileReader;
                            T.addEventListener("error", s), T.addEventListener("load", () => {
                                let i = T.result;
                                "string" == typeof i && _.push({
                                    file: N,
                                    result: i
                                }), g()
                            }), G(N, l) ? T.readAsDataURL(N) : g()
                        };
                    g()
                })
            }, l.mergeRegister = D, l.objectKlassEquals = function(i, l) {
                return null !== i && Object.getPrototypeOf(i).constructor.name === l.name
            }, l.positionNodeOnRange = F, l.registerNestedElementResolver = function(i, l, o, s) {
                return i.registerNodeTransform(l, i => {
                    e: {
                        for (var _ = i.getChildren(), p = 0; p < _.length; p++)
                            if (_[p] instanceof l) {
                                _ = null;
                                break e
                            }
                        for (_ = i; null !== _;)
                            if (p = _, (_ = _.getParent()) instanceof l) {
                                _ = {
                                    child: p,
                                    parent: _
                                };
                                break e
                            }
                        _ = null
                    }
                    if (null !== _) {
                        let {
                            child: l,
                            parent: N
                        } = _;
                        if (l.is(i)) {
                            if (s(N, i), _ = (i = l.getNextSiblings()).length, N.insertAfter(l), 0 !== _) {
                                p = o(N), l.insertAfter(p);
                                for (let l = 0; l < _; l++) p.append(i[l])
                            }
                            N.canBeEmpty() || 0 !== N.getChildrenSize() || N.remove()
                        }
                    }
                })
            }, l.removeClassNamesFromElement = function(i, ...l) {
                l.forEach(l => {
                    "string" == typeof l && i.classList.remove(...l.split(" "))
                })
            }
        },
        97700: function(i, l) {
            l.DF = {
                prefix: "far",
                iconName: "arrow-turn-up",
                icon: [384, 512, ["level-up"], "f148", "M336.1 168.1c-9.375 9.375-24.56 9.375-33.94 0L216 81.94V488c0 13.25-10.75 24-24 24H24C10.75 512 0 501.3 0 488s10.75-24 24-24h144V81.94L80.97 168.1c-9.375 9.375-24.56 9.375-33.94 0s-9.375-24.56 0-33.94l128-128C179.7 2.344 185.8 0 192 0s12.28 2.344 16.97 7.031l128 128C346.3 144.4 346.3 159.6 336.1 168.1z"]
            }, l.pQ = l.DF
        },
        83915: function(i, l, o) {
            let s = o(87879);
            i.exports = s
        },
        87879: function(i, l) {
            let o = {},
                s = {},
                _ = {},
                p = {},
                N = {},
                T = {},
                S = {},
                b = {},
                R = {},
                $ = {},
                A = {},
                L = {},
                W = {},
                Y = {},
                V = {},
                U = {},
                j = {},
                Z = {},
                X = {},
                Q = {},
                et = {},
                en = {},
                er = {},
                ei = {},
                el = {},
                eo = {},
                es = {},
                ea = {},
                eu = {},
                ed = {},
                eg = {},
                eh = {},
                e_ = {},
                ep = {},
                em = {},
                ey = {};

            function r(i) {
                let l = new URLSearchParams;
                l.append("code", i);
                for (let i = 1; i < arguments.length; i++) l.append("v", arguments[i]);
                throw Error(`Minified Lexical error #${i}; visit https://lexical.dev/docs/error?${l} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`)
            }
            let eC = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement,
                eN = eC && "documentMode" in document ? document.documentMode : null,
                ex = eC && /Mac|iPod|iPhone|iPad/.test(navigator.platform),
                ev = eC && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent),
                eT = !!(eC && "InputEvent" in window) && !eN && "getTargetRanges" in new window.InputEvent("input"),
                eE = eC && /Version\/[\d.]+.*Safari/.test(navigator.userAgent),
                eS = eC && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
                eb = eC && /^(?=.*Chrome).*/i.test(navigator.userAgent),
                eO = eC && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && !eb,
                eD = eE || eS || eO ? "\xa0" : "​",
                eM = ev ? "\xa0" : eD,
                eR = /^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u07ff\ufb1d-\ufdfd\ufe70-\ufefc]/,
                ew = /^[^\u0591-\u07ff\ufb1d-\ufdfd\ufe70-\ufefc]*[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]/,
                e$ = {
                    bold: 1,
                    code: 16,
                    highlight: 128,
                    italic: 2,
                    strikethrough: 4,
                    subscript: 32,
                    superscript: 64,
                    underline: 8
                },
                eA = {
                    directionless: 1,
                    unmergeable: 2
                },
                ek = {
                    center: 2,
                    end: 6,
                    justify: 4,
                    left: 1,
                    right: 3,
                    start: 5
                },
                eP = {
                    2: "center",
                    6: "end",
                    4: "justify",
                    1: "left",
                    3: "right",
                    5: "start"
                },
                eI = {
                    normal: 0,
                    segmented: 2,
                    token: 1
                },
                eL = {
                    0: "normal",
                    2: "segmented",
                    1: "token"
                },
                eB = !1,
                eF = 0;

            function qb(i) {
                eF = i.timeStamp
            }

            function rb(i, l, o) {
                return l.__lexicalLineBreak === i || void 0 !== i[`__lexicalKey_${o._key}`]
            }

            function tb(i, l, o) {
                eB = !0;
                let s = 100 < performance.now() - eF;
                try {
                    w(i, () => {
                        let _ = v() || i.getEditorState().read(() => {
                            let i = v();
                            return null !== i ? i.clone() : null
                        });
                        var p = new Map,
                            N = i.getRootElement(),
                            T = i._editorState,
                            S = i._blockCursorElement;
                        let b = !1,
                            R = "";
                        for (var $ = 0; $ < l.length; $++) {
                            var A = l[$],
                                L = A.type,
                                W = A.target,
                                Y = ub(W, T);
                            if (!(null === Y && W !== N || z(Y))) {
                                if ("characterData" === L) {
                                    if (A = s && B(Y)) e: {
                                        A = _,
                                        L = W;
                                        var V = Y;
                                        if (C(A)) {
                                            var U = A.anchor.getNode();
                                            if (U.is(V) && A.format !== U.getFormat()) {
                                                A = !1;
                                                break e
                                            }
                                        }
                                        A = 3 === L.nodeType && V.isAttached()
                                    }
                                    A && (V = vb(i._window), L = A = null, null !== V && V.anchorNode === W && (A = V.anchorOffset, L = V.focusOffset), W = W.nodeValue, null !== W && wb(Y, W, A, L, !1))
                                } else if ("childList" === L) {
                                    for (V = 0, b = !0, L = A.addedNodes; V < L.length; V++) {
                                        U = L[V];
                                        var j = xb(U),
                                            Z = U.parentNode;
                                        null == Z || U === S || null !== j || "BR" === U.nodeName && rb(U, Z, i) || (ev && (j = U.innerText || U.nodeValue) && (R += j), Z.removeChild(U))
                                    }
                                    if (L = (A = A.removedNodes).length, 0 < L) {
                                        for (U = 0, V = 0; U < L; U++) Z = A[U], ("BR" === Z.nodeName && rb(Z, W, i) || S === Z) && (W.appendChild(Z), V++);
                                        L !== V && (W === N && (Y = T._nodeMap.get("root")), p.set(W, Y))
                                    }
                                }
                            }
                        }
                        if (0 < p.size)
                            for (let [l, o] of p)
                                if (D(o))
                                    for (p = o.getChildrenKeys(), N = l.firstChild, T = 0; T < p.length; T++) S = i.getElementByKey(p[T]), null !== S && (null == N ? (l.appendChild(S), N = S) : N !== S && l.replaceChild(S, N), N = N.nextSibling);
                                else B(o) && o.markDirty();
                        if (p = o.takeRecords(), 0 < p.length) {
                            for (N = 0; N < p.length; N++)
                                for (T = (S = p[N]).addedNodes, S = S.target, $ = 0; $ < T.length; $++) W = (Y = T[$]).parentNode, null == W || "BR" !== Y.nodeName || rb(Y, S, i) || W.removeChild(Y);
                            o.takeRecords()
                        }
                        null !== _ && (b && (_.dirty = !0, yb(_)), ev && zb(i) && _.insertRawText(R))
                    })
                } finally {
                    eB = !1
                }
            }

            function Ab(i) {
                let l = i._observer;
                null !== l && tb(i, l.takeRecords(), l)
            }

            function Bb(i) {
                0 === eF && Cb(i).addEventListener("textInput", qb, !0), i._observer = new MutationObserver((l, o) => {
                    tb(i, l, o)
                })
            }

            function Db(i, l) {
                let o = i.__mode,
                    s = i.__format;
                i = i.__style;
                let _ = l.__mode,
                    p = l.__format;
                return l = l.__style, (null === o || o === _) && (null === s || s === p) && (null === i || i === l)
            }

            function Eb(i, l) {
                let o = i.mergeWithSibling(l),
                    s = F()._normalizedNodes;
                return s.add(i.__key), s.add(l.__key), o
            }

            function Fb(i) {
                if ("" === i.__text && i.isSimpleText() && !i.isUnmergeable()) i.remove();
                else {
                    for (var l, o; null !== (l = i.getPreviousSibling()) && B(l) && l.isSimpleText() && !l.isUnmergeable();)
                        if ("" === l.__text) l.remove();
                        else {
                            Db(l, i) && (i = Eb(l, i));
                            break
                        }
                    for (; null !== (o = i.getNextSibling()) && B(o) && o.isSimpleText() && !o.isUnmergeable();)
                        if ("" === o.__text) o.remove();
                        else {
                            Db(i, o) && Eb(i, o);
                            break
                        }
                }
            }

            function Gb(i) {
                return Hb(i.anchor), Hb(i.focus), i
            }

            function Hb(i) {
                for (;
                    "element" === i.type;) {
                    var l = i.getNode(),
                        o = i.offset;
                    if (o === l.getChildrenSize() ? (l = l.getChildAtIndex(o - 1), o = !0) : (l = l.getChildAtIndex(o), o = !1), B(l)) {
                        i.set(l.__key, o ? l.getTextContentSize() : 0, "text");
                        break
                    }
                    if (!D(l)) break;
                    i.set(l.__key, o ? l.getChildrenSize() : 0, "element")
                }
            }
            let ez = 1,
                eW = "function" == typeof queueMicrotask ? queueMicrotask : i => {
                    Promise.resolve().then(i)
                };

            function Kb(i) {
                let l = document.activeElement;
                if (null === l) return !1;
                let o = l.nodeName;
                return z(ub(i)) && ("INPUT" === o || "TEXTAREA" === o || "true" === l.contentEditable && null == l.__lexicalEditor)
            }

            function Lb(i, l, o) {
                let s = i.getRootElement();
                try {
                    return null !== s && s.contains(l) && s.contains(o) && null !== l && !Kb(l) && Mb(l) === i
                } catch (i) {
                    return !1
                }
            }

            function Mb(i) {
                for (; null != i;) {
                    let l = i.__lexicalEditor;
                    if (null != l) return l;
                    i = Nb(i)
                }
                return null
            }

            function Ob(i) {
                return i.isToken() || i.isSegmented()
            }

            function Vb(i) {
                for (; null != i;) {
                    if (3 === i.nodeType) return i;
                    i = i.firstChild
                }
                return null
            }

            function Wb(i, l, o) {
                return i & (l = e$[l]) && (null === o || 0 == (o & l)) ? i ^ l : null === o || o & l ? i | l : i
            }

            function Xb(i) {
                return B(i) || Yb(i) || z(i)
            }

            function Zb(i, l) {
                if (null != l) i.__key = l;
                else {
                    G(), 99 < tm && r(14), l = F();
                    var o = ac(),
                        s = "" + ez++;
                    o._nodeMap.set(s, i), D(i) ? l._dirtyElements.set(s, !0) : l._dirtyLeaves.add(s), l._cloneNotNeeded.add(s), l._dirtyType = 1, i.__key = s
                }
            }

            function bc(i) {
                var l = i.getParent();
                if (null !== l) {
                    let _ = i.getWritable();
                    l = l.getWritable();
                    var o = i.getPreviousSibling();
                    if (i = i.getNextSibling(), null === o) {
                        if (null !== i) {
                            var s = i.getWritable();
                            l.__first = i.__key, s.__prev = null
                        } else l.__first = null
                    } else {
                        if (s = o.getWritable(), null !== i) {
                            let l = i.getWritable();
                            l.__prev = s.__key, s.__next = l.__key
                        } else s.__next = null;
                        _.__prev = null
                    }
                    null === i ? null !== o ? (i = o.getWritable(), l.__last = o.__key, i.__next = null) : l.__last = null : (i = i.getWritable(), null !== o ? ((o = o.getWritable()).__next = i.__key, i.__prev = o.__key) : i.__prev = null, _.__next = null), l.__size--, _.__parent = null
                }
            }

            function cc(i) {
                99 < tm && r(14);
                var l = i.getLatest(),
                    o = l.__parent,
                    s = ac();
                let _ = F(),
                    p = s._nodeMap;
                if (s = _._dirtyElements, null !== o)
                    for (; null !== o && !s.has(o);) {
                        let i = p.get(o);
                        if (void 0 === i) break;
                        s.set(o, !1), o = i.__parent
                    }
                l = l.__key, _._dirtyType = 1, D(i) ? s.set(l, !0) : _._dirtyLeaves.add(l)
            }

            function H(i) {
                G();
                var l = F();
                let o = l._compositionKey;
                i !== o && (l._compositionKey = i, null !== o && null !== (l = I(o)) && l.getWritable(), null !== i && null !== (i = I(i)) && i.getWritable())
            }

            function dc() {
                return ec() ? null : F()._compositionKey
            }

            function I(i, l) {
                return void 0 === (i = (l || ac())._nodeMap.get(i)) ? null : i
            }

            function xb(i, l) {
                let o = F();
                return void 0 !== (i = i[`__lexicalKey_${o._key}`]) ? I(i, l) : null
            }

            function ub(i, l) {
                for (; null != i;) {
                    let o = xb(i, l);
                    if (null !== o) return o;
                    i = Nb(i)
                }
                return null
            }

            function fc(i) {
                let l = Object.assign({}, i._decorators);
                return i._pendingDecorators = l
            }

            function gc(i) {
                return i.read(() => hc().getTextContent())
            }

            function hc() {
                return ac()._nodeMap.get("root")
            }

            function yb(i) {
                G();
                let l = ac();
                null !== i && (i.dirty = !0, i._cachedNodes = null), l._selection = i
            }

            function jc(i) {
                var l, o = F();
                e: {
                    for (l = i; null != l;) {
                        let i = l[`__lexicalKey_${o._key}`];
                        if (void 0 !== i) {
                            l = i;
                            break e
                        }
                        l = Nb(l)
                    }
                    l = null
                }
                return null === l ? i === (o = o.getRootElement()) ? I("root") : null : I(l)
            }

            function kc(i) {
                return /[\uD800-\uDBFF][\uDC00-\uDFFF]/g.test(i)
            }

            function lc(i) {
                let l = [];
                for (; null !== i;) l.push(i), i = i._parentEditor;
                return l
            }

            function mc() {
                return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 5)
            }

            function nc(i, l, o) {
                if (null !== (l = vb(l._window))) {
                    var s = l.anchorNode,
                        {
                            anchorOffset: _,
                            focusOffset: p
                        } = l;
                    if (null !== s && (l = 3 === s.nodeType ? s.nodeValue : null, s = ub(s), null !== l && B(s))) {
                        if (l === eD && o) {
                            let i = o.length;
                            l = o, p = _ = i
                        }
                        null !== l && wb(s, l, _, p, i)
                    }
                }
            }

            function wb(i, l, o, s, _) {
                let p = i;
                if (p.isAttached() && (_ || !p.isDirty())) {
                    let b = p.isComposing(),
                        R = l;
                    if ((b || _) && l[l.length - 1] === eD && (R = l.slice(0, -1)), l = p.getTextContent(), _ || R !== l) {
                        if ("" === R) {
                            if (H(null), eE || eS || eO) p.remove();
                            else {
                                let i = F();
                                setTimeout(() => {
                                    i.update(() => {
                                        p.isAttached() && p.remove()
                                    })
                                }, 20)
                            }
                        } else {
                            _ = p.getParent(), l = oc();
                            var N = p.getTextContentSize(),
                                T = dc(),
                                S = p.getKey();
                            p.isToken() || null !== T && S === T && !b || C(l) && (null !== _ && !_.canInsertTextBefore() && 0 === l.anchor.offset || l.anchor.key === i.__key && 0 === l.anchor.offset && !p.canInsertTextBefore() || l.focus.key === i.__key && l.focus.offset === N && !p.canInsertTextAfter()) ? p.markDirty() : (C(i = v()) && null !== o && null !== s && (i.setTextNodeRange(p, o, p, s), p.isSegmented() && (o = J(o = p.getTextContent()), p.replace(o), p = o)), p.setTextContent(R))
                        }
                    }
                }
            }

            function qc(i, l) {
                void 0 === i.__lexicalClassNameCache && (i.__lexicalClassNameCache = {});
                let o = i.__lexicalClassNameCache,
                    s = o[l];
                return void 0 !== s ? s : "string" == typeof(i = i[l]) ? (i = i.split(" "), o[l] = i) : i
            }

            function rc(i, l, o, s, _) {
                0 !== o.size && (o = s.__type, s = s.__key, void 0 === (l = l.get(o)) && r(33, o), o = l.klass, void 0 === (l = i.get(o)) && (l = new Map, i.set(o, l)), o = "destroyed" === (i = l.get(s)) && "created" === _, (void 0 === i || o) && l.set(s, o ? "updated" : _))
            }

            function sc(i, l, o) {
                let s = i.getParent(),
                    _ = o;
                return null !== s && (l && 0 === o ? (_ = i.getIndexWithinParent(), i = s) : l || o !== i.getChildrenSize() || (_ = i.getIndexWithinParent() + 1, i = s)), i.getChildAtIndex(l ? _ - 1 : _)
            }

            function tc(i, l) {
                var o = i.offset;
                return "element" === i.type ? sc(i = i.getNode(), l, o) : (i = i.getNode(), l && 0 === o || !l && o === i.getTextContentSize() ? null === (o = l ? i.getPreviousSibling() : i.getNextSibling()) ? sc(i.getParentOrThrow(), l, i.getIndexWithinParent() + (l ? 0 : 1)) : o : null)
            }

            function zb(i) {
                return "insertFromPaste" === (i = (i = Cb(i).event) && i.inputType) || "insertFromPasteAsQuotation" === i
            }

            function uc(i) {
                return !K(i) && !i.isLastChild() && !i.isInline()
            }

            function vc(i, l) {
                return void 0 === (i = i._keyToDOMMap.get(l)) && r(75, l), i
            }

            function Nb(i) {
                return null !== (i = i.assignedSlot || i.parentElement) && 11 === i.nodeType ? i.host : i
            }

            function wc(i, l) {
                for (i = i.getParent(); null !== i;) {
                    if (i.is(l)) return !0;
                    i = i.getParent()
                }
                return !1
            }

            function Cb(i) {
                return null === (i = i._window) && r(78), i
            }

            function xc(i) {
                for (i = i.getParentOrThrow(); null !== i && !yc(i);) i = i.getParentOrThrow();
                return i
            }

            function yc(i) {
                return K(i) || D(i) && i.isShadowRoot()
            }

            function zc(i) {
                return Zb(i = i.constructor.clone(i), null), i
            }

            function Ac(i) {
                var l = F();
                let o = i.constructor.getType();
                return void 0 === (l = l._nodes.get(o)) && r(97), null !== (l = l.replace) ? ((l = l(i)) instanceof i.constructor || r(98), l) : i
            }

            function Bc(i, l) {
                !K(i = i.getParent()) || D(l) || z(l) || r(99)
            }

            function Cc(i) {
                return (z(i) || D(i) && !i.canBeEmpty()) && !i.isInline()
            }

            function Dc(i, l, o) {
                o.style.removeProperty("caret-color"), l._blockCursorElement = null, null !== (l = i.parentElement) && l.removeChild(i)
            }

            function vb(i) {
                return eC ? (i || window).getSelection() : null
            }

            function Ec(i, l) {
                let o = i.getChildAtIndex(l);
                null == o && (o = i), yc(i) && r(102);
                let d = i => {
                        let l = i.getParentOrThrow(),
                            s = yc(l),
                            _ = i !== o || s ? zc(i) : i;
                        if (s) return i.insertAfter(_), [i, _, _];
                        let [p, N, T] = d(l);
                        return i = i.getNextSiblings(), T.append(_, ...i), [p, N, _]
                    },
                    [s, _] = d(o);
                return [s, _]
            }

            function Fc(i, l) {
                for (; i !== hc() && null != i;) {
                    if (l(i)) return i;
                    i = i.getParent()
                }
                return null
            }

            function Hc(i) {
                return 1 === i.nodeType
            }
            let eK = "",
                eY = "",
                eH = "",
                eG, eV, eU, ej = !1,
                eJ = !1,
                eq, eZ = null,
                eX, eQ, e0, e1, e2, e3;

            function fd(i, l) {
                let o = e0.get(i);
                if (null !== l) {
                    let o = gd(i);
                    o.parentNode === l && l.removeChild(o)
                }
                e1.has(i) || eV._keyToDOMMap.delete(i), D(o) && id(i = hd(o, e0), 0, i.length - 1, null), void 0 !== o && rc(e3, eU, eq, o, "destroyed")
            }

            function id(i, l, o, s) {
                for (; l <= o; ++l) {
                    let o = i[l];
                    void 0 !== o && fd(o, s)
                }
            }

            function jd(i, l) {
                i.setProperty("text-align", l)
            }

            function kd(i, l) {
                var o = eG.theme.indent;
                if ("string" == typeof o) {
                    let s = i.classList.contains(o);
                    0 < l && !s ? i.classList.add(o) : 1 > l && s && i.classList.remove(o)
                }
                o = getComputedStyle(i).getPropertyValue("--lexical-indent-base-value") || "40px", i.style.setProperty("padding-inline-start", 0 === l ? "" : `calc(${l} * ${o})`)
            }

            function ld(i, l) {
                i = i.style, 0 === l ? jd(i, "") : 1 === l ? jd(i, "left") : 2 === l ? jd(i, "center") : 3 === l ? jd(i, "right") : 4 === l ? jd(i, "justify") : 5 === l ? jd(i, "start") : 6 === l && jd(i, "end")
            }

            function md(i, l, o) {
                let s = e1.get(i);
                void 0 === s && r(60);
                let _ = s.createDOM(eG, eV);
                var p = eV._keyToDOMMap;
                if (_["__lexicalKey_" + eV._key] = i, p.set(i, _), B(s) ? _.setAttribute("data-lexical-text", "true") : z(s) && _.setAttribute("data-lexical-decorator", "true"), D(s)) {
                    if (i = s.__indent, p = s.__size, 0 !== i && kd(_, i), 0 !== p) {
                        --p, i = hd(s, e1);
                        var N = eY;
                        eY = "", nd(i, s, 0, p, _, null), od(s, _), eY = N
                    }
                    0 !== (i = s.__format) && ld(_, i), s.isInline() || pd(null, s, _), uc(s) && (eK += "\n\n", eH += "\n\n")
                } else p = s.getTextContent(), z(s) ? (null !== (N = s.decorate(eV, eG)) && qd(i, N), _.contentEditable = "false") : B(s) && (s.isDirectionless() || (eY += p)), eK += p, eH += p;
                return null !== l && (null != o ? l.insertBefore(_, o) : null != (o = l.__lexicalLineBreak) ? l.insertBefore(_, o) : l.appendChild(_)), rc(e3, eU, eq, s, "created"), _
            }

            function nd(i, l, o, s, _, p) {
                let N = eK;
                for (eK = ""; o <= s; ++o) md(i[o], _, p);
                uc(l) && (eK += "\n\n"), _.__lexicalTextContent = eK, eK = N + eK
            }

            function rd(i, l) {
                return Yb(i = l.get(i)) || z(i) && i.isInline()
            }

            function pd(i, l, o) {
                i = null !== i && (0 === i.__size || rd(i.__last, e0)), l = 0 === l.__size || rd(l.__last, e1), i ? l || (null != (l = o.__lexicalLineBreak) && o.removeChild(l), o.__lexicalLineBreak = null) : l && (l = document.createElement("br"), o.__lexicalLineBreak = l, o.appendChild(l))
            }

            function od(i, l) {
                var o = l.__lexicalDir;
                if (l.__lexicalDirTextContent !== eY || o !== eZ) {
                    let p = "" === eY;
                    if (p) var s = eZ;
                    else s = eY, s = eR.test(s) ? "rtl" : ew.test(s) ? "ltr" : null;
                    if (s !== o) {
                        let N = l.classList,
                            T = eG.theme;
                        var _ = null !== o ? T[o] : void 0;
                        let S = null !== s ? T[s] : void 0;
                        void 0 !== _ && ("string" == typeof _ && (_ = _.split(" "), _ = T[o] = _), N.remove(..._)), null === s || p && "ltr" === s ? l.removeAttribute("dir") : (void 0 !== S && ("string" == typeof S && (o = S.split(" "), S = T[s] = o), void 0 !== S && N.add(...S)), l.dir = s), eJ || (i.getWritable().__dir = s)
                    }
                    eZ = s, l.__lexicalDirTextContent = eY, l.__lexicalDir = s
                }
            }

            function hd(i, l) {
                let o = [];
                for (i = i.__first; null !== i;) {
                    let s = l.get(i);
                    void 0 === s && r(101), o.push(i), i = s.__next
                }
                return o
            }

            function qd(i, l) {
                let o = eV._pendingDecorators,
                    s = eV._decorators;
                if (null === o) {
                    if (s[i] === l) return;
                    o = fc(eV)
                }
                o[i] = l
            }

            function td(i) {
                return null !== (i = i.nextSibling) && i === eV._blockCursorElement && (i = i.nextSibling), i
            }

            function gd(i) {
                let l = e2.get(i);
                return void 0 === l && r(75, i), l
            }
            let e8 = Object.freeze({}),
                e5 = [
                    ["keydown", function(i, l) {
                        if (e7 = i.timeStamp, e4 = i.keyCode, !l.isComposing()) {
                            var {
                                keyCode: o,
                                shiftKey: s,
                                ctrlKey: N,
                                metaKey: T,
                                altKey: S
                            } = i;
                            if (!O(l, Y, i)) {
                                if (39 !== o || N || T || S) {
                                    if (39 !== o || S || s || !N && !T) {
                                        if (37 !== o || N || T || S) {
                                            if (37 !== o || S || s || !N && !T) {
                                                if (38 !== o || N || T) {
                                                    if (40 !== o || N || T) {
                                                        if (13 === o && s) tr = !0, O(l, et, i);
                                                        else if (32 === o) O(l, en, i);
                                                        else if (ex && N && 79 === o) i.preventDefault(), tr = !0, O(l, p, !0);
                                                        else if (13 !== o || s) {
                                                            var b = ex ? !S && !T && (8 === o || 72 === o && N) : !N && !S && !T && 8 === o;
                                                            b ? 8 === o ? O(l, er, i) : (i.preventDefault(), O(l, _, !0)) : 27 === o ? O(l, ei, i) : (b = ex ? !s && !S && !T && (46 === o || 68 === o && N) : !N && !S && !T && 46 === o) ? 46 === o ? O(l, el, i) : (i.preventDefault(), O(l, _, !1)) : 8 === o && (ex ? S : N) ? (i.preventDefault(), O(l, R, !0)) : 46 === o && (ex ? S : N) ? (i.preventDefault(), O(l, R, !1)) : ex && T && 8 === o ? (i.preventDefault(), O(l, $, !0)) : ex && T && 46 === o ? (i.preventDefault(), O(l, $, !1)) : 66 === o && !S && (ex ? T : N) ? (i.preventDefault(), O(l, A, "bold")) : 85 === o && !S && (ex ? T : N) ? (i.preventDefault(), O(l, A, "underline")) : 73 === o && !S && (ex ? T : N) ? (i.preventDefault(), O(l, A, "italic")) : 9 !== o || S || N || T ? 90 === o && !s && (ex ? T : N) ? (i.preventDefault(), O(l, L, void 0)) : (b = ex ? 90 === o && T && s : 89 === o && N || 90 === o && N && s) ? (i.preventDefault(), O(l, W, void 0)) : Ud(l._editorState._selection) ? (b = !s && 67 === o && (ex ? T : N)) ? (i.preventDefault(), O(l, eg, i)) : (b = !s && 88 === o && (ex ? T : N)) ? (i.preventDefault(), O(l, eh, i)) : 65 === o && (ex ? T : N) && (i.preventDefault(), O(l, e_, i)) : !ev && 65 === o && (ex ? T : N) && (i.preventDefault(), O(l, e_, i)) : O(l, eo, i)
                                                        } else tr = !1, O(l, et, i)
                                                    } else O(l, Q, i)
                                                } else O(l, X, i)
                                            } else O(l, Z, i)
                                        } else O(l, j, i)
                                    } else O(l, U, i)
                                } else O(l, V, i);
                                (N || s || S || T) && O(l, ey, i)
                            }
                        }
                    }],
                    ["pointerdown", function(i, l) {
                        let o = i.target;
                        i = i.pointerType, o instanceof Node && "touch" !== i && w(l, () => {
                            z(ub(o)) || (tn = !0)
                        })
                    }],
                    ["compositionstart", function(i, l) {
                        w(l, () => {
                            let o = v();
                            if (C(o) && !l.isComposing()) {
                                let s = o.anchor,
                                    _ = o.anchor.getNode();
                                H(s.key), (i.timeStamp < e7 + 30 || "element" === s.type || !o.isCollapsed() || _.getFormat() !== o.format || _.getStyle() !== o.style) && O(l, T, eM)
                            }
                        })
                    }],
                    ["compositionend", function(i, l) {
                        ev ? ti = !0 : w(l, () => {
                            Td(l, i.data)
                        })
                    }],
                    ["input", function(i, l) {
                        i.stopPropagation(), w(l, () => {
                            var o = v(),
                                s = i.data,
                                _ = Rd(i);
                            if (null != s && C(o) && Nd(o, _, s, i.timeStamp, !1)) {
                                ti && (Td(l, s), ti = !1);
                                var p = o.anchor,
                                    N = p.getNode();
                                if (null === (_ = vb(l._window))) return;
                                let S = p.offset;
                                (p = eT && !o.isCollapsed() && B(N) && null !== _.anchorNode) && (p = (N = N.getTextContent().slice(0, S) + s + N.getTextContent().slice(S + o.focus.offset)) === (3 === (_ = _.anchorNode).nodeType ? _.nodeValue : null)), p || O(l, T, s), s = s.length, ev && 1 < s && "insertCompositionText" === i.inputType && !l.isComposing() && (o.anchor.offset -= s), eE || eS || eO || !l.isComposing() || (e7 = 0, H(null))
                            } else nc(!1, l, null !== s ? s : void 0), ti && (Td(l, s || void 0), ti = !1);
                            G(), Ab(o = F())
                        }), e6 = null
                    }],
                    ["click", function(i, l) {
                        w(l, () => {
                            let o = v();
                            var _ = vb(l._window);
                            let p = oc();
                            if (_) {
                                if (C(o)) {
                                    let l = o.anchor;
                                    var N = l.getNode();
                                    "element" === l.type && 0 === l.offset && o.isCollapsed() && !K(N) && 1 === hc().getChildrenSize() && N.getTopLevelElementOrThrow().isEmpty() && null !== p && o.is(p) ? (_.removeAllRanges(), o.dirty = !0) : 3 !== i.detail || o.isCollapsed() || N !== (_ = o.focus.getNode()) && (D(N) ? N.select(0) : N.getParentOrThrow().select(0))
                                } else "touch" === i.pointerType && null !== (N = _.anchorNode) && (1 === (N = N.nodeType) || 3 === N) && yb(_ = Qd(p, _, l))
                            }
                            O(l, s, i)
                        })
                    }],
                    ["cut", e8],
                    ["copy", e8],
                    ["dragstart", e8],
                    ["dragover", e8],
                    ["dragend", e8],
                    ["paste", e8],
                    ["focus", e8],
                    ["blur", e8],
                    ["drop", e8]
                ];
            eT && e5.push(["beforeinput", (i, l) => {
                let o, s;
                return o = i.inputType, s = Rd(i), void("deleteCompositionText" === o || ev && zb(l) || "insertCompositionText" !== o && w(l, () => {
                    let Y = v();
                    if ("deleteContentBackward" === o) {
                        if (null === Y) {
                            var V = oc();
                            if (!C(V)) return;
                            yb(V.clone())
                        }
                        if (C(Y)) {
                            229 === e4 && i.timeStamp < e7 + 30 && l.isComposing() && Y.anchor.key === Y.focus.key ? (H(null), e7 = 0, setTimeout(() => {
                                w(l, () => {
                                    H(null)
                                })
                            }, 30), C(Y) && ((V = Y.anchor.getNode()).markDirty(), Y.format = V.getFormat(), Y.style = V.getStyle())) : (i.preventDefault(), O(l, _, !0));
                            return
                        }
                    }
                    if (C(Y)) {
                        V = i.data, null !== e6 && nc(!1, l, e6), Y.dirty && null === e6 || !Y.isCollapsed() || K(Y.anchor.getNode()) || null === s || Y.applyDOMRange(s), e6 = null;
                        var U, j = Y.focus,
                            Z = Y.anchor.getNode();
                        if (j = j.getNode(), "insertText" === o || "insertTranspose" === o) "\n" === V ? (i.preventDefault(), O(l, p, !1)) : "\n\n" === V ? (i.preventDefault(), O(l, N, void 0)) : null == V && i.dataTransfer ? (V = i.dataTransfer.getData("text/plain"), i.preventDefault(), Y.insertRawText(V)) : null != V && Nd(Y, s, V, i.timeStamp, !0) ? (i.preventDefault(), O(l, T, V)) : e6 = V, e9 = i.timeStamp;
                        else switch (i.preventDefault(), o) {
                            case "insertFromYank":
                            case "insertFromDrop":
                            case "insertReplacementText":
                                O(l, T, i);
                                break;
                            case "insertFromComposition":
                                H(null), O(l, T, i);
                                break;
                            case "insertLineBreak":
                                H(null), O(l, p, !1);
                                break;
                            case "insertParagraph":
                                H(null), tr && !eS ? (tr = !1, O(l, p, !1)) : O(l, N, void 0);
                                break;
                            case "insertFromPaste":
                            case "insertFromPasteAsQuotation":
                                O(l, S, i);
                                break;
                            case "deleteByComposition":
                                (Z !== (U = j) || D(Z) || D(U) || !Z.isToken() || !U.isToken()) && O(l, b, i);
                                break;
                            case "deleteByDrag":
                            case "deleteByCut":
                                O(l, b, i);
                                break;
                            case "deleteContent":
                                O(l, _, !1);
                                break;
                            case "deleteWordBackward":
                                O(l, R, !0);
                                break;
                            case "deleteWordForward":
                                O(l, R, !1);
                                break;
                            case "deleteHardLineBackward":
                            case "deleteSoftLineBackward":
                                O(l, $, !0);
                                break;
                            case "deleteContentForward":
                            case "deleteHardLineForward":
                            case "deleteSoftLineForward":
                                O(l, $, !1);
                                break;
                            case "formatStrikeThrough":
                                O(l, A, "strikethrough");
                                break;
                            case "formatBold":
                                O(l, A, "bold");
                                break;
                            case "formatItalic":
                                O(l, A, "italic");
                                break;
                            case "formatUnderline":
                                O(l, A, "underline");
                                break;
                            case "historyUndo":
                                O(l, L, void 0);
                                break;
                            case "historyRedo":
                                O(l, W, void 0)
                        }
                    }
                }))
            }]);
            let e7 = 0,
                e4 = 0,
                e9 = 0,
                e6 = null,
                te = 0,
                tt = !1,
                tn = !1,
                tr = !1,
                ti = !1,
                tl = [0, "", 0, "root", 0];

            function Nd(i, l, o, s, _) {
                let p = i.anchor,
                    N = i.focus,
                    T = p.getNode();
                var S = F();
                let b = vb(S._window),
                    R = null !== b ? b.anchorNode : null,
                    $ = p.key;
                S = S.getElementByKey($);
                let A = o.length;
                return $ !== N.key || !B(T) || (!_ && (!eT || e9 < s + 50) || T.isDirty() && 2 > A || kc(o)) && p.offset !== N.offset && !T.isComposing() || Ob(T) || T.isDirty() && 1 < A || (_ || !eT) && null !== S && !T.isComposing() && R !== Vb(S) || null !== b && null !== l && (!l.collapsed || l.startContainer !== b.anchorNode || l.startOffset !== b.anchorOffset) || T.getFormat() !== i.format || T.getStyle() !== i.style || function(i, l) {
                    if (l.isSegmented()) return !0;
                    if (!i.isCollapsed()) return !1;
                    i = i.anchor.offset;
                    let o = l.getParentOrThrow(),
                        s = l.isToken();
                    return 0 === i ? ((i = !l.canInsertTextBefore() || !o.canInsertTextBefore() || s) || (i = (B(l = l.getPreviousSibling()) || D(l) && l.isInline()) && !l.canInsertTextAfter()), i) : i === l.getTextContentSize() && (!l.canInsertTextAfter() || !o.canInsertTextAfter() || s)
                }(i, T)
            }

            function Od(i, l) {
                return null !== i && null !== i.nodeValue && 3 === i.nodeType && 0 !== l && l !== i.nodeValue.length
            }

            function Pd(i, l, s) {
                let {
                    anchorNode: _,
                    anchorOffset: p,
                    focusNode: N,
                    focusOffset: T
                } = i;
                tt && (tt = !1, Od(_, p) && Od(N, T)) || w(l, () => {
                    if (s) {
                        if (Lb(l, _, N)) {
                            var p = v();
                            if (C(p)) {
                                var T = p.anchor,
                                    S = T.getNode();
                                if (p.isCollapsed()) {
                                    "Range" === i.type && i.anchorNode === i.focusNode && (p.dirty = !0);
                                    var b = Cb(l).event;
                                    b = b ? b.timeStamp : performance.now();
                                    let [o, s, _, N, R] = tl;
                                    b < R + 200 && T.offset === _ && T.key === N ? (p.format = o, p.style = s) : "text" === T.type ? (p.format = S.getFormat(), p.style = S.getStyle()) : "element" === T.type && (p.format = 0, p.style = "")
                                } else {
                                    T = 255, S = !1;
                                    let i = (b = p.getNodes()).length;
                                    for (let l = 0; l < i; l++) {
                                        let i = b[l];
                                        if (B(i) && (S = !0, 0 == (T &= i.getFormat()))) break
                                    }
                                    p.format = S ? T : 0
                                }
                            }
                            O(l, o, void 0)
                        }
                    } else yb(null)
                })
            }

            function Rd(i) {
                return i.getTargetRanges ? 0 === (i = i.getTargetRanges()).length ? null : i[0] : null
            }

            function Td(i, l) {
                var o = i._compositionKey;
                if (H(null), null !== o && null != l) {
                    if ("" === l) {
                        l = I(o), null !== (i = Vb(i.getElementByKey(o))) && null !== i.nodeValue && B(l) && wb(l, i.nodeValue, null, null, !0);
                        return
                    }
                    if ("\n" === l[l.length - 1] && C(o = v())) {
                        l = o.focus, o.anchor.set(l.key, l.offset, l.type), O(i, et, null);
                        return
                    }
                }
                nc(!0, i, l)
            }

            function Vd(i) {
                let l = i.__lexicalEventHandles;
                return void 0 === l && (l = [], i.__lexicalEventHandles = l), l
            }
            let to = new Map;

            function Xd(i) {
                let l = vb(null == (i = i.target) ? null : 9 === i.nodeType ? i.defaultView : i.ownerDocument.defaultView);
                if (null !== l) {
                    var o = Mb(l.anchorNode);
                    if (null !== o) {
                        tn && (tn = !1, w(o, () => {
                            var i = oc(),
                                s = l.anchorNode;
                            null !== s && (1 === (s = s.nodeType) || 3 === s) && yb(i = Qd(i, l, o))
                        }));
                        var s = (i = (i = lc(o))[i.length - 1])._key,
                            _ = to.get(s),
                            p = _ || i;
                        p !== o && Pd(l, p, !1), Pd(l, o, !0), o !== i ? to.set(s, o) : _ && to.delete(s)
                    }
                }
            }

            function Zd(i, l, o) {
                G();
                var s = i.__key;
                let _ = i.getParent();
                if (null !== _) {
                    var p = v();
                    if (C(p) && D(i)) {
                        var {
                            anchor: N,
                            focus: T
                        } = p, S = N.getNode(), b = T.getNode();
                        wc(S, i) && N.set(i.__key, 0, "element"), wc(b, i) && T.set(i.__key, 0, "element")
                    }
                    if (b = !1, C(S = p) && l) {
                        p = S.anchor;
                        let l = S.focus;
                        p.key === s && ($d(p, i, _, i.getPreviousSibling(), i.getNextSibling()), b = !0), l.key === s && ($d(l, i, _, i.getPreviousSibling(), i.getNextSibling()), b = !0)
                    } else Ud(S) && l && i.isSelected() && i.selectPrevious();
                    C(S) && l && !b ? (s = i.getIndexWithinParent(), bc(i), ae(S, _, s, -1)) : bc(i), o || yc(_) || _.canBeEmpty() || !_.isEmpty() || Zd(_, l), l && K(_) && _.isEmpty() && _.selectEnd()
                }
            }
            let be = class be {
                static getType() {
                    r(64, this.name)
                }
                static clone() {
                    r(65, this.name)
                }
                constructor(i) {
                    this.__type = this.constructor.getType(), this.__next = this.__prev = this.__parent = null, Zb(this, i)
                }
                getType() {
                    return this.__type
                }
                isAttached() {
                    for (var i = this.__key; null !== i;) {
                        if ("root" === i) return !0;
                        if (null === (i = I(i))) break;
                        i = i.__parent
                    }
                    return !1
                }
                isSelected(i) {
                    if (null == (i = i || v())) return !1;
                    let l = i.getNodes().some(i => i.__key === this.__key);
                    return B(this) ? l : (!C(i) || "element" !== i.anchor.type || "element" !== i.focus.type || i.anchor.key !== i.focus.key || i.anchor.offset !== i.focus.offset) && l
                }
                getKey() {
                    return this.__key
                }
                getIndexWithinParent() {
                    var i = this.getParent();
                    if (null === i) return -1;
                    i = i.getFirstChild();
                    let l = 0;
                    for (; null !== i;) {
                        if (this.is(i)) return l;
                        l++, i = i.getNextSibling()
                    }
                    return -1
                }
                getParent() {
                    let i = this.getLatest().__parent;
                    return null === i ? null : I(i)
                }
                getParentOrThrow() {
                    let i = this.getParent();
                    return null === i && r(66, this.__key), i
                }
                getTopLevelElement() {
                    let i = this;
                    for (; null !== i;) {
                        let l = i.getParent();
                        if (yc(l)) return i;
                        i = l
                    }
                    return null
                }
                getTopLevelElementOrThrow() {
                    let i = this.getTopLevelElement();
                    return null === i && r(67, this.__key), i
                }
                getParents() {
                    let i = [],
                        l = this.getParent();
                    for (; null !== l;) i.push(l), l = l.getParent();
                    return i
                }
                getParentKeys() {
                    let i = [],
                        l = this.getParent();
                    for (; null !== l;) i.push(l.__key), l = l.getParent();
                    return i
                }
                getPreviousSibling() {
                    let i = this.getLatest().__prev;
                    return null === i ? null : I(i)
                }
                getPreviousSiblings() {
                    let i = [];
                    var l = this.getParent();
                    if (null === l) return i;
                    for (l = l.getFirstChild(); null !== l && !l.is(this);) i.push(l), l = l.getNextSibling();
                    return i
                }
                getNextSibling() {
                    let i = this.getLatest().__next;
                    return null === i ? null : I(i)
                }
                getNextSiblings() {
                    let i = [],
                        l = this.getNextSibling();
                    for (; null !== l;) i.push(l), l = l.getNextSibling();
                    return i
                }
                getCommonAncestor(i) {
                    let l = this.getParents();
                    var o = i.getParents();
                    D(this) && l.unshift(this), D(i) && o.unshift(i), i = l.length;
                    var s = o.length;
                    if (0 === i || 0 === s || l[i - 1] !== o[s - 1]) return null;
                    for (s = 0, o = new Set(o); s < i; s++) {
                        let i = l[s];
                        if (o.has(i)) return i
                    }
                    return null
                }
                is(i) {
                    return null != i && this.__key === i.__key
                }
                isBefore(i) {
                    if (this === i) return !1;
                    if (i.isParentOf(this)) return !0;
                    if (this.isParentOf(i)) return !1;
                    var l = this.getCommonAncestor(i);
                    let o = this;
                    for (;;) {
                        var s = o.getParentOrThrow();
                        if (s === l) {
                            s = o.getIndexWithinParent();
                            break
                        }
                        o = s
                    }
                    for (o = i;;) {
                        if ((i = o.getParentOrThrow()) === l) {
                            l = o.getIndexWithinParent();
                            break
                        }
                        o = i
                    }
                    return s < l
                }
                isParentOf(i) {
                    let l = this.__key;
                    if (l === i.__key) return !1;
                    for (; null !== i;) {
                        if (i.__key === l) return !0;
                        i = i.getParent()
                    }
                    return !1
                }
                getNodesBetween(i) {
                    let l = this.isBefore(i),
                        o = [],
                        s = new Set;
                    for (var _ = this;;) {
                        var p = _.__key;
                        if (s.has(p) || (s.add(p), o.push(_)), _ === i) break;
                        if (null !== (p = D(_) ? l ? _.getFirstChild() : _.getLastChild() : null)) _ = p;
                        else if (null !== (p = l ? _.getNextSibling() : _.getPreviousSibling())) _ = p;
                        else {
                            if (_ = _.getParentOrThrow(), s.has(_.__key) || o.push(_), _ === i) break;
                            p = _;
                            do null === p && r(68), _ = l ? p.getNextSibling() : p.getPreviousSibling(), null !== (p = p.getParent()) && (null !== _ || s.has(p.__key) || o.push(p)); while (null === _)
                        }
                    }
                    return l || o.reverse(), o
                }
                isDirty() {
                    let i = F()._dirtyLeaves;
                    return null !== i && i.has(this.__key)
                }
                getLatest() {
                    let i = I(this.__key);
                    return null === i && r(113), i
                }
                getWritable() {
                    G();
                    var i = ac(),
                        l = F();
                    i = i._nodeMap;
                    let o = this.__key,
                        s = this.getLatest(),
                        _ = s.__parent;
                    l = l._cloneNotNeeded;
                    var p = v();
                    return (null !== p && (p._cachedNodes = null), l.has(o)) ? (cc(s), s) : ((p = s.constructor.clone(s)).__parent = _, p.__next = s.__next, p.__prev = s.__prev, D(s) && D(p) ? (p.__first = s.__first, p.__last = s.__last, p.__size = s.__size, p.__indent = s.__indent, p.__format = s.__format, p.__dir = s.__dir) : B(s) && B(p) && (p.__format = s.__format, p.__style = s.__style, p.__mode = s.__mode, p.__detail = s.__detail), l.add(o), p.__key = o, cc(p), i.set(o, p), p)
                }
                getTextContent() {
                    return ""
                }
                getTextContentSize() {
                    return this.getTextContent().length
                }
                createDOM() {
                    r(70)
                }
                updateDOM() {
                    r(71)
                }
                exportDOM(i) {
                    return {
                        element: this.createDOM(i._config, i)
                    }
                }
                exportJSON() {
                    r(72)
                }
                static importJSON() {
                    r(18, this.name)
                }
                static transform() {
                    return null
                }
                remove(i) {
                    Zd(this, !0, i)
                }
                replace(i, l) {
                    G();
                    var o = v();
                    null !== o && (o = o.clone()), Bc(this, i);
                    let s = this.getLatest(),
                        _ = this.__key,
                        p = i.__key,
                        N = i.getWritable(),
                        T = (i = this.getParentOrThrow().getWritable()).__size;
                    bc(N);
                    let S = s.getPreviousSibling(),
                        b = s.getNextSibling(),
                        R = s.__prev,
                        $ = s.__next,
                        A = s.__parent;
                    return Zd(s, !1, !0), null === S ? i.__first = p : S.getWritable().__next = p, N.__prev = R, null === b ? i.__last = p : b.getWritable().__prev = p, N.__next = $, N.__parent = A, i.__size = T, l && this.getChildren().forEach(i => {
                        N.append(i)
                    }), C(o) && (yb(o), l = o.anchor, o = o.focus, l.key === _ && ce(l, N), o.key === _ && ce(o, N)), dc() === _ && H(p), N
                }
                insertAfter(i, l = !0) {
                    G(), Bc(this, i);
                    var o = this.getWritable();
                    let s = i.getWritable();
                    var _ = s.getParent();
                    let p = v();
                    var N = !1,
                        T = !1;
                    if (null !== _) {
                        var S = i.getIndexWithinParent();
                        bc(s), C(p) && (T = _.__key, N = p.anchor, _ = p.focus, N = "element" === N.type && N.key === T && N.offset === S + 1, T = "element" === _.type && _.key === T && _.offset === S + 1)
                    }
                    _ = this.getNextSibling(), S = this.getParentOrThrow().getWritable();
                    let b = s.__key,
                        R = o.__next;
                    return null === _ ? S.__last = b : _.getWritable().__prev = b, S.__size++, o.__next = b, s.__next = R, s.__prev = o.__key, s.__parent = o.__parent, l && C(p) && (ae(p, S, (l = this.getIndexWithinParent()) + 1), o = S.__key, N && p.anchor.set(o, l + 2, "element"), T && p.focus.set(o, l + 2, "element")), i
                }
                insertBefore(i, l = !0) {
                    G(), Bc(this, i);
                    var o = this.getWritable();
                    let s = i.getWritable(),
                        _ = s.__key;
                    bc(s);
                    let p = this.getPreviousSibling(),
                        N = this.getParentOrThrow().getWritable(),
                        T = o.__prev,
                        S = this.getIndexWithinParent();
                    return null === p ? N.__first = _ : p.getWritable().__next = _, N.__size++, o.__prev = _, s.__prev = T, s.__next = o.__key, s.__parent = o.__parent, o = v(), l && C(o) && ae(o, l = this.getParentOrThrow(), S), i
                }
                isParentRequired() {
                    return !1
                }
                createParentElementNode() {
                    return de()
                }
                selectPrevious(i, l) {
                    G();
                    let o = this.getPreviousSibling(),
                        s = this.getParentOrThrow();
                    return null === o ? s.select(0, 0) : D(o) ? o.select() : B(o) ? o.select(i, l) : (i = o.getIndexWithinParent() + 1, s.select(i, i))
                }
                selectNext(i, l) {
                    G();
                    let o = this.getNextSibling(),
                        s = this.getParentOrThrow();
                    return null === o ? s.select() : D(o) ? o.select(0, 0) : B(o) ? o.select(i, l) : (i = o.getIndexWithinParent(), s.select(i, i))
                }
                markDirty() {
                    this.getWritable()
                }
            };
            let ee = class ee extends be {
                static getType() {
                    return "linebreak"
                }
                static clone(i) {
                    return new ee(i.__key)
                }
                constructor(i) {
                    super(i)
                }
                getTextContent() {
                    return "\n"
                }
                createDOM() {
                    return document.createElement("br")
                }
                updateDOM() {
                    return !1
                }
                static importDOM() {
                    return {
                        br: i => {
                            let l = i.parentElement,
                                o, s;
                            return null !== l && ((o = l.firstChild) === i || o.nextSibling === i && 3 === o.nodeType && null !== (o.textContent || "").match(/^( |\t|\r?\n)+$/)) && ((s = l.lastChild) === i || s.previousSibling === i && 3 === s.nodeType && null !== (s.textContent || "").match(/^( |\t|\r?\n)+$/)) ? null : {
                                conversion: fe,
                                priority: 0
                            }
                        }
                    }
                }
                static importJSON() {
                    return ge()
                }
                exportJSON() {
                    return {
                        type: "linebreak",
                        version: 1
                    }
                }
            };

            function fe() {
                return {
                    node: ge()
                }
            }

            function ge() {
                return Ac(new ee)
            }

            function Yb(i) {
                return i instanceof ee
            }

            function he(i, l) {
                return 16 & l ? "code" : 128 & l ? "mark" : 32 & l ? "sub" : 64 & l ? "sup" : null
            }

            function ie(i, l) {
                return 1 & l ? "strong" : 2 & l ? "em" : "span"
            }

            function je(i, l, o, s, _) {
                i = s.classList, void 0 !== (s = qc(_, "base")) && i.add(...s);
                let p = !1,
                    N = 8 & l && 4 & l;
                var T = 8 & o && 4 & o;
                for (let S in void 0 !== (s = qc(_, "underlineStrikethrough")) && (T ? (p = !0, N || i.add(...s)) : N && i.remove(...s)), e$) T = e$[S], void 0 !== (s = qc(_, S)) && (o & T ? p && ("underline" === S || "strikethrough" === S) ? l & T && i.remove(...s) : (0 == (l & T) || N && "underline" === S || "strikethrough" === S) && i.add(...s) : l & T && i.remove(...s))
            }

            function ke(i, l, o) {
                let s = l.firstChild;
                if (i += (o = o.isComposing()) ? eD : "", null == s) l.textContent = i;
                else if ((l = s.nodeValue) !== i) {
                    if (o || ev) {
                        o = l.length;
                        let _ = i.length,
                            p = 0,
                            N = 0;
                        for (; p < o && p < _ && l[p] === i[p];) p++;
                        for (; N + p < o && N + p < _ && l[o - N - 1] === i[_ - N - 1];) N++;
                        let [T, S, b] = i = [p, o - p - N, i.slice(p, _ - N)];
                        0 !== S && s.deleteData(T, S), s.insertData(T, b)
                    } else s.nodeValue = i
                }
            }

            function le(i, l) {
                return (l = document.createElement(l)).appendChild(i), l
            }
            let me = class me extends be {
                static getType() {
                    return "text"
                }
                static clone(i) {
                    return new me(i.__text, i.__key)
                }
                constructor(i, l) {
                    super(l), this.__text = i, this.__format = 0, this.__style = "", this.__detail = this.__mode = 0
                }
                getFormat() {
                    return this.getLatest().__format
                }
                getDetail() {
                    return this.getLatest().__detail
                }
                getMode() {
                    return eL[this.getLatest().__mode]
                }
                getStyle() {
                    return this.getLatest().__style
                }
                isToken() {
                    return 1 === this.getLatest().__mode
                }
                isComposing() {
                    return this.__key === dc()
                }
                isSegmented() {
                    return 2 === this.getLatest().__mode
                }
                isDirectionless() {
                    return 0 != (1 & this.getLatest().__detail)
                }
                isUnmergeable() {
                    return 0 != (2 & this.getLatest().__detail)
                }
                hasFormat(i) {
                    return i = e$[i], 0 != (this.getFormat() & i)
                }
                isSimpleText() {
                    return "text" === this.__type && 0 === this.__mode
                }
                getTextContent() {
                    return this.getLatest().__text
                }
                getFormatFlags(i, l) {
                    return Wb(this.getLatest().__format, i, l)
                }
                createDOM(i) {
                    var l = this.__format,
                        o = he(this, l);
                    let s = ie(this, l),
                        _ = document.createElement(null === o ? s : o),
                        p = _;
                    return this.hasFormat("code") && _.setAttribute("spellcheck", "false"), null !== o && (p = document.createElement(s), _.appendChild(p)), o = p, ke(this.__text, o, this), void 0 !== (i = i.theme.text) && je(s, 0, l, o, i), "" !== (l = this.__style) && (_.style.cssText = l), _
                }
                updateDOM(i, l, o) {
                    let s = this.__text;
                    var _ = i.__format,
                        p = this.__format,
                        N = he(this, _);
                    let T = he(this, p);
                    var S = ie(this, _);
                    let b = ie(this, p);
                    return (null === N ? S : N) !== (null === T ? b : T) || (N === T && S !== b ? (null == (_ = l.firstChild) && r(48), ke(s, i = N = document.createElement(b), this), void 0 !== (o = o.theme.text) && je(b, 0, p, i, o), l.replaceChild(N, _)) : (S = l, null !== T && null !== N && null == (S = l.firstChild) && r(49), ke(s, S, this), void 0 !== (o = o.theme.text) && _ !== p && je(b, _, p, S, o), p = this.__style, i.__style !== p && (l.style.cssText = p)), !1)
                }
                static importDOM() {
                    return {
                        "#text": () => ({
                            conversion: ne,
                            priority: 0
                        }),
                        b: () => ({
                            conversion: oe,
                            priority: 0
                        }),
                        code: () => ({
                            conversion: pe,
                            priority: 0
                        }),
                        em: () => ({
                            conversion: pe,
                            priority: 0
                        }),
                        i: () => ({
                            conversion: pe,
                            priority: 0
                        }),
                        s: () => ({
                            conversion: pe,
                            priority: 0
                        }),
                        span: () => ({
                            conversion: qe,
                            priority: 0
                        }),
                        strong: () => ({
                            conversion: pe,
                            priority: 0
                        }),
                        sub: () => ({
                            conversion: pe,
                            priority: 0
                        }),
                        sup: () => ({
                            conversion: pe,
                            priority: 0
                        }),
                        u: () => ({
                            conversion: pe,
                            priority: 0
                        })
                    }
                }
                static importJSON(i) {
                    let l = J(i.text);
                    return l.setFormat(i.format), l.setDetail(i.detail), l.setMode(i.mode), l.setStyle(i.style), l
                }
                exportDOM(i) {
                    return {
                        element: i
                    } = super.exportDOM(i), null !== i && Hc(i) || r(132), i.style.whiteSpace = "pre-wrap", this.hasFormat("bold") && (i = le(i, "b")), this.hasFormat("italic") && (i = le(i, "i")), this.hasFormat("strikethrough") && (i = le(i, "s")), this.hasFormat("underline") && (i = le(i, "u")), {
                        element: i
                    }
                }
                exportJSON() {
                    return {
                        detail: this.getDetail(),
                        format: this.getFormat(),
                        mode: this.getMode(),
                        style: this.getStyle(),
                        text: this.getTextContent(),
                        type: "text",
                        version: 1
                    }
                }
                selectionTransform() {}
                setFormat(i) {
                    let l = this.getWritable();
                    return l.__format = "string" == typeof i ? e$[i] : i, l
                }
                setDetail(i) {
                    let l = this.getWritable();
                    return l.__detail = "string" == typeof i ? eA[i] : i, l
                }
                setStyle(i) {
                    let l = this.getWritable();
                    return l.__style = i, l
                }
                toggleFormat(i) {
                    return i = e$[i], this.setFormat(this.getFormat() ^ i)
                }
                toggleDirectionless() {
                    let i = this.getWritable();
                    return i.__detail ^= 1, i
                }
                toggleUnmergeable() {
                    let i = this.getWritable();
                    return i.__detail ^= 2, i
                }
                setMode(i) {
                    if (i = eI[i], this.__mode === i) return this;
                    let l = this.getWritable();
                    return l.__mode = i, l
                }
                setTextContent(i) {
                    if (this.__text === i) return this;
                    let l = this.getWritable();
                    return l.__text = i, l
                }
                select(i, l) {
                    G();
                    let o = v();
                    var s = this.getTextContent();
                    let _ = this.__key;
                    return ("string" == typeof s ? (s = s.length, void 0 === i && (i = s), void 0 === l && (l = s)) : l = i = 0, C(o)) ? ((s = dc()) !== o.anchor.key && s !== o.focus.key || H(_), o.setTextNodeRange(this, i, this, l), o) : re(_, i, _, l, "text", "text")
                }
                spliceText(i, l, o, s) {
                    let _ = this.getWritable(),
                        p = _.__text,
                        N = o.length,
                        T = i;
                    0 > T && 0 > (T = N + T) && (T = 0);
                    let S = v();
                    return s && C(S) && (i += N, S.setTextNodeRange(_, i, _, i)), l = p.slice(0, T) + o + p.slice(T + l), _.__text = l, _
                }
                canInsertTextBefore() {
                    return !0
                }
                canInsertTextAfter() {
                    return !0
                }
                splitText(...i) {
                    G();
                    var l = this.getLatest(),
                        o = l.getTextContent(),
                        s = l.__key,
                        _ = dc(),
                        p = new Set(i);
                    i = [];
                    for (var N = o.length, T = "", S = 0; S < N; S++) "" !== T && p.has(S) && (i.push(T), T = ""), T += o[S];
                    if ("" !== T && i.push(T), 0 === (p = i.length)) return [];
                    if (i[0] === o) return [l];
                    var b = i[0];
                    o = l.getParentOrThrow(), S = l.getFormat();
                    let R = l.getStyle(),
                        $ = l.__detail;
                    N = !1, l.isSegmented() ? ((T = J(b)).__format = S, T.__style = R, T.__detail = $, N = !0) : (T = l.getWritable()).__text = b, l = v(), T = [T], b = b.length;
                    for (let o = 1; o < p; o++) {
                        var A = i[o],
                            L = A.length;
                        (A = J(A).getWritable()).__format = S, A.__style = R, A.__detail = $;
                        let p = A.__key;
                        if (L = b + L, C(l)) {
                            let i = l.anchor,
                                o = l.focus;
                            i.key === s && "text" === i.type && i.offset > b && i.offset <= L && (i.key = p, i.offset -= b, l.dirty = !0), o.key === s && "text" === o.type && o.offset > b && o.offset <= L && (o.key = p, o.offset -= b, l.dirty = !0)
                        }
                        _ === s && H(p), b = L, T.push(A)
                    }
                    return s = this.getPreviousSibling(), _ = this.getNextSibling(), null !== s && cc(s), null !== _ && cc(_), s = o.getWritable(), _ = this.getIndexWithinParent(), N ? (s.splice(_, 0, T), this.remove()) : s.splice(_, 1, T), C(l) && ae(l, o, _, p - 1), T
                }
                mergeWithSibling(i) {
                    var l = i === this.getPreviousSibling();
                    l || i === this.getNextSibling() || r(50);
                    var o = this.__key;
                    let s = i.__key,
                        _ = this.__text,
                        p = _.length;
                    dc() === s && H(o);
                    let N = v();
                    if (C(N)) {
                        let _ = N.anchor,
                            T = N.focus;
                        null !== _ && _.key === s && (se(_, l, o, i, p), N.dirty = !0), null !== T && T.key === s && (se(T, l, o, i, p), N.dirty = !0)
                    }
                    return o = i.__text, this.setTextContent(l ? o + _ : _ + o), l = this.getWritable(), i.remove(), l
                }
                isTextEntity() {
                    return !1
                }
            };

            function qe(i) {
                let l = "700" === i.style.fontWeight,
                    o = "line-through" === i.style.textDecoration,
                    s = "italic" === i.style.fontStyle,
                    _ = "underline" === i.style.textDecoration,
                    p = i.style.verticalAlign;
                return {
                    forChild: i => (B(i) && (l && i.toggleFormat("bold"), o && i.toggleFormat("strikethrough"), s && i.toggleFormat("italic"), _ && i.toggleFormat("underline"), "sub" === p && i.toggleFormat("subscript"), "super" === p && i.toggleFormat("superscript")), i),
                    node: null
                }
            }

            function oe(i) {
                let l = "normal" === i.style.fontWeight;
                return {
                    forChild: i => (B(i) && !l && i.toggleFormat("bold"), i),
                    node: null
                }
            }
            let ts = new WeakMap;

            function ne(i) {
                null === i.parentElement && r(129);
                for (var l, o = i.textContent || "", s = i.parentNode, _ = [i]; null !== s && void 0 === (l = ts.get(s)) && !("PRE" === s.nodeName || 1 === s.nodeType && s.style.whiteSpace.startsWith("pre"));) _.push(s), s = s.parentNode;
                for (l = void 0 === l ? s : l, s = 0; s < _.length; s++) ts.set(_[s], l);
                if (null !== l) {
                    for (l = 0, o = o.split(/(\r?\n|\t)/), i = [], _ = o.length; l < _; l++) "\n" === (s = o[l]) || "\r\n" === s ? i.push(ge()) : "	" === s ? i.push(ue()) : "" !== s && i.push(J(s));
                    return {
                        node: i
                    }
                }
                if ("" === (o = o.replace(/\r/g, "").replace(/[ \t\n]+/g, " "))) return {
                    node: null
                };
                if (" " === o[0]) {
                    for (_ = i, l = !0; null !== _ && null !== (_ = ve(_, !1));)
                        if (0 < (s = _.textContent || "").length) {
                            /[ \t\n]$/.test(s) && (o = o.slice(1)), l = !1;
                            break
                        }
                    l && (o = o.slice(1))
                }
                if (" " === o[o.length - 1]) {
                    for (_ = !0; null !== i && null !== (i = ve(i, !0));)
                        if (0 < (i.textContent || "").replace(/^( |\t|\r?\n)+/, "").length) {
                            _ = !1;
                            break
                        }
                    _ && (o = o.slice(0, o.length - 1))
                }
                return "" === o ? {
                    node: null
                } : {
                    node: J(o)
                }
            }
            let ta = RegExp(/^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/, "i");

            function ve(i, l) {
                for (;;) {
                    for (var o = void 0; null === (o = l ? i.nextSibling : i.previousSibling);)
                        if (null === (i = i.parentElement)) return null;
                    if (1 === (i = o).nodeType && ("" === (o = i.style.display) && null === i.nodeName.match(ta) || "" !== o && !o.startsWith("inline"))) return null;
                    for (; null !== (o = l ? i.firstChild : i.lastChild);) i = o;
                    if (3 === i.nodeType) return i;
                    if ("BR" === i.nodeName) return null
                }
            }
            let tu = {
                code: "code",
                em: "italic",
                i: "italic",
                s: "strikethrough",
                strong: "bold",
                sub: "subscript",
                sup: "superscript",
                u: "underline"
            };

            function pe(i) {
                let l = tu[i.nodeName.toLowerCase()];
                return void 0 === l ? {
                    node: null
                } : {
                    forChild: i => (B(i) && !i.hasFormat(l) && i.toggleFormat(l), i),
                    node: null
                }
            }

            function J(i = "") {
                return Ac(new me(i))
            }

            function B(i) {
                return i instanceof me
            }
            let ye = class ye extends me {
                static getType() {
                    return "tab"
                }
                static clone(i) {
                    let l = new ye(i.__key);
                    return l.__text = i.__text, l.__format = i.__format, l.__style = i.__style, l
                }
                constructor(i) {
                    super("	", i), this.__detail = 2
                }
                static importDOM() {
                    return null
                }
                static importJSON(i) {
                    let l = ue();
                    return l.setFormat(i.format), l.setStyle(i.style), l
                }
                exportJSON() {
                    return { ...super.exportJSON(),
                        type: "tab",
                        version: 1
                    }
                }
                setTextContent() {
                    r(126)
                }
                setDetail() {
                    r(127)
                }
                setMode() {
                    r(128)
                }
                canInsertTextBefore() {
                    return !1
                }
                canInsertTextAfter() {
                    return !1
                }
            };

            function ue() {
                return Ac(new ye)
            }
            let ze = class ze {
                constructor(i, l, o) {
                    this._selection = null, this.key = i, this.offset = l, this.type = o
                }
                is(i) {
                    return this.key === i.key && this.offset === i.offset && this.type === i.type
                }
                isBefore(i) {
                    let l = this.getNode(),
                        o = i.getNode(),
                        s = this.offset;
                    if (i = i.offset, D(l)) {
                        var _ = l.getDescendantByIndex(s);
                        l = null != _ ? _ : l
                    }
                    return D(o) && (o = null != (_ = o.getDescendantByIndex(i)) ? _ : o), l === o ? s < i : l.isBefore(o)
                }
                getNode() {
                    let i = I(this.key);
                    return null === i && r(20), i
                }
                set(i, l, o) {
                    let s = this._selection,
                        _ = this.key;
                    this.key = i, this.offset = l, this.type = o, ec() || (dc() === _ && H(i), null !== s && (s._cachedNodes = null, s.dirty = !0))
                }
            };

            function Ae(i, l) {
                let o = l.__key,
                    s = i.offset,
                    _ = "element";
                if (B(l)) _ = "text", s > (l = l.getTextContentSize()) && (s = l);
                else if (!D(l)) {
                    var p = l.getNextSibling();
                    B(p) ? (o = p.__key, s = 0, _ = "text") : (p = l.getParent()) && (o = p.__key, s = l.getIndexWithinParent() + 1)
                }
                i.set(o, s, _)
            }

            function ce(i, l) {
                if (D(l)) {
                    let o = l.getLastDescendant();
                    D(o) || B(o) ? Ae(i, o) : Ae(i, l)
                } else Ae(i, l)
            }

            function Be(i, l, o, s) {
                let _ = i.getNode(),
                    p = _.getChildAtIndex(i.offset),
                    N = J(),
                    T = K(_) ? de().append(N) : N;
                N.setFormat(o), N.setStyle(s), null === p ? _.append(T) : (p.insertBefore(T), "element" === l.type && l.key === i.key && l.offset !== i.offset && l.set(l.key, l.offset + 1, "element")), i.is(l) && l.set(N.__key, 0, "text"), i.set(N.__key, 0, "text")
            }

            function Ce(i, l, o, s) {
                i.key = l, i.offset = o, i.type = s
            }
            let De = class De {
                constructor(i) {
                    this.dirty = !1, this._nodes = i, this._cachedNodes = null
                }
                is(i) {
                    if (!Ud(i)) return !1;
                    let l = this._nodes,
                        o = i._nodes;
                    return l.size === o.size && Array.from(l).every(i => o.has(i))
                }
                add(i) {
                    this.dirty = !0, this._nodes.add(i), this._cachedNodes = null
                }
                delete(i) {
                    this.dirty = !0, this._nodes.delete(i), this._cachedNodes = null
                }
                clear() {
                    this.dirty = !0, this._nodes.clear(), this._cachedNodes = null
                }
                has(i) {
                    return this._nodes.has(i)
                }
                clone() {
                    return new De(new Set(this._nodes))
                }
                extract() {
                    return this.getNodes()
                }
                insertRawText() {}
                insertText() {}
                insertNodes(i, l) {
                    let o = this.getNodes(),
                        s = o.length;
                    var _ = o[s - 1];
                    if (B(_)) _ = _.select();
                    else {
                        let i = _.getIndexWithinParent() + 1;
                        _ = _.getParentOrThrow().select(i, i)
                    }
                    for (_.insertNodes(i, l), i = 0; i < s; i++) o[i].remove();
                    return !0
                }
                getNodes() {
                    var i = this._cachedNodes;
                    if (null !== i) return i;
                    var l = this._nodes;
                    for (let o of (i = [], l)) null !== (l = I(o)) && i.push(l);
                    return ec() || (this._cachedNodes = i), i
                }
                getTextContent() {
                    let i = this.getNodes(),
                        l = "";
                    for (let o = 0; o < i.length; o++) l += i[o].getTextContent();
                    return l
                }
            };

            function C(i) {
                return i instanceof Ne
            }

            function Oe(i) {
                let [l, , o] = Pe(i), s = (i = o.getChildren()).length;
                var _ = i[0].getChildren().length;
                let p = Array(s);
                for (var N = 0; N < s; N++) p[N] = Array(_);
                for (_ = 0; _ < s; _++) {
                    N = i[_].getChildren();
                    let o = 0;
                    for (let i = 0; i < N.length; i++) {
                        for (; p[_][o];) o++;
                        let s = N[i],
                            T = s.__rowSpan || 1,
                            S = s.__colSpan || 1;
                        for (let i = 0; i < T; i++)
                            for (let l = 0; l < S; l++) p[_ + i][o + l] = s;
                        if (l === s) return {
                            colSpan: S,
                            columnIndex: o,
                            rowIndex: _,
                            rowSpan: T
                        };
                        o += S
                    }
                }
                return null
            }
            let Qe = class Qe {
                constructor(i, l, o) {
                    this.gridKey = i, this.anchor = l, this.focus = o, this.dirty = !1, this._cachedNodes = null, l._selection = this, o._selection = this
                }
                is(i) {
                    return !!Re(i) && this.gridKey === i.gridKey && this.anchor.is(i.anchor) && this.focus.is(i.focus)
                }
                set(i, l, o) {
                    this.dirty = !0, this.gridKey = i, this.anchor.key = l, this.focus.key = o, this._cachedNodes = null
                }
                clone() {
                    return new Qe(this.gridKey, this.anchor, this.focus)
                }
                isCollapsed() {
                    return !1
                }
                isBackward() {
                    return this.focus.isBefore(this.anchor)
                }
                getCharacterOffsets() {
                    return Se(this)
                }
                extract() {
                    return this.getNodes()
                }
                insertRawText() {}
                insertText() {}
                insertNodes(i, l) {
                    let o = this.focus.getNode();
                    return Gb(o.select(0, o.getChildrenSize())).insertNodes(i, l)
                }
                getShape() {
                    var i = I(this.anchor.key);
                    if (P(i) || r(103), null === (i = Oe(i))) throw Error("getCellRect: expected to find AnchorNode");
                    var l = I(this.focus.key);
                    P(l) || r(104);
                    let o = Oe(l);
                    if (null === o) throw Error("getCellRect: expected to find focusCellNode");
                    l = Math.min(i.columnIndex, o.columnIndex);
                    let s = Math.max(i.columnIndex, o.columnIndex),
                        _ = Math.min(i.rowIndex, o.rowIndex);
                    return {
                        fromX: Math.min(l, s),
                        fromY: Math.min(_, i = Math.max(i.rowIndex, o.rowIndex)),
                        toX: Math.max(l, s),
                        toY: Math.max(_, i)
                    }
                }
                getNodes() {
                    function a(i) {
                        let {
                            cell: l,
                            startColumn: o,
                            startRow: s
                        } = i;
                        N = Math.min(N, o), T = Math.min(T, s), S = Math.max(S, o + l.__colSpan - 1), b = Math.max(b, s + l.__rowSpan - 1)
                    }
                    var i = this._cachedNodes;
                    if (null !== i) return i;
                    var l = this.anchor.getNode();
                    i = this.focus.getNode(), l = Fc(l, P);
                    var o = Fc(i, P);
                    P(l) || r(103), P(o) || r(104), Te(i = l.getParent()) || r(105), Ue(i = i.getParent()) || r(106);
                    let [s, _, p] = Ve(i, l, o), N = Math.min(_.startColumn, p.startColumn), T = Math.min(_.startRow, p.startRow), S = Math.max(_.startColumn + _.cell.__colSpan - 1, p.startColumn + p.cell.__colSpan - 1), b = Math.max(_.startRow + _.cell.__rowSpan - 1, p.startRow + p.cell.__rowSpan - 1);
                    l = N, o = T;
                    for (var R = N, $ = T; N < l || T < o || S > R || b > $;) {
                        if (N < l) {
                            var A = $ - o;
                            --l;
                            for (var L = 0; L <= A; L++) a(s[o + L][l])
                        }
                        if (T < o)
                            for (A = R - l, --o, L = 0; L <= A; L++) a(s[o][l + L]);
                        if (S > R)
                            for (A = $ - o, R += 1, L = 0; L <= A; L++) a(s[o + L][R]);
                        if (b > $)
                            for (A = R - l, $ += 1, L = 0; L <= A; L++) a(s[$][l + L])
                    }
                    for (i = [i], l = null, o = T; o <= b; o++)
                        for (R = N; R <= S; R++)({
                            cell: $
                        } = s[o][R]), Te(A = $.getParent()) || r(107), A !== l && i.push(A), i.push($, ... function(i) {
                            let l = [],
                                o = [i];
                            for (; 0 < o.length;) {
                                let s = o.pop();
                                void 0 === s && r(112), D(s) && o.unshift(...s.getChildren()), s !== i && l.push(s)
                            }
                            return l
                        }($)), l = A;
                    return ec() || (this._cachedNodes = i), i
                }
                getTextContent() {
                    let i = this.getNodes(),
                        l = "";
                    for (let o = 0; o < i.length; o++) l += i[o].getTextContent();
                    return l
                }
            };

            function Re(i) {
                return i instanceof Qe
            }
            let Ne = class Ne {
                constructor(i, l, o, s) {
                    this.anchor = i, this.focus = l, this.dirty = !1, this.format = o, this.style = s, this._cachedNodes = null, i._selection = this, l._selection = this
                }
                is(i) {
                    return !!C(i) && this.anchor.is(i.anchor) && this.focus.is(i.focus) && this.format === i.format && this.style === i.style
                }
                isBackward() {
                    return this.focus.isBefore(this.anchor)
                }
                isCollapsed() {
                    return this.anchor.is(this.focus)
                }
                getNodes() {
                    var i = this._cachedNodes;
                    if (null !== i) return i;
                    i = this.anchor;
                    var l = this.focus,
                        o = i.isBefore(l),
                        s = o ? i : l;
                    o = o ? l : i, i = s.getNode(), l = o.getNode();
                    let _ = s.offset;
                    return s = o.offset, D(i) && (i = null != (o = i.getDescendantByIndex(_)) ? o : i), D(l) && (null !== (o = l.getDescendantByIndex(s)) && o !== i && l.getChildAtIndex(s) === o && (o = o.getPreviousSibling()), l = null != o ? o : l), i = i.is(l) ? D(i) && 0 < i.getChildrenSize() ? [] : [i] : i.getNodesBetween(l), ec() || (this._cachedNodes = i), i
                }
                setTextNodeRange(i, l, o, s) {
                    Ce(this.anchor, i.__key, l, "text"), Ce(this.focus, o.__key, s, "text"), this._cachedNodes = null, this.dirty = !0
                }
                getTextContent() {
                    let i = this.getNodes();
                    if (0 === i.length) return "";
                    let l = i[0],
                        o = i[i.length - 1],
                        s = this.anchor,
                        _ = this.focus,
                        p = s.isBefore(_),
                        [N, T] = Se(this),
                        S = "",
                        b = !0;
                    for (let R = 0; R < i.length; R++) {
                        let $ = i[R];
                        if (D($) && !$.isInline()) b || (S += "\n"), b = !$.isEmpty();
                        else if (b = !1, B($)) {
                            let i = $.getTextContent();
                            $ === l ? $ === o ? ("element" !== s.type || "element" !== _.type || _.offset === s.offset) && (i = N < T ? i.slice(N, T) : i.slice(T, N)) : i = p ? i.slice(N) : i.slice(T) : $ === o && (i = p ? i.slice(0, T) : i.slice(0, N)), S += i
                        } else !z($) && !Yb($) || $ === o && this.isCollapsed() || (S += $.getTextContent())
                    }
                    return S
                }
                applyDOMRange(i) {
                    let l = F(),
                        o = l.getEditorState()._selection;
                    if (null !== (i = We(i.startContainer, i.startOffset, i.endContainer, i.endOffset, l, o))) {
                        var [s, _] = i;
                        Ce(this.anchor, s.key, s.offset, s.type), Ce(this.focus, _.key, _.offset, _.type), this._cachedNodes = null
                    }
                }
                clone() {
                    let i = this.anchor,
                        l = this.focus;
                    return new Ne(new ze(i.key, i.offset, i.type), new ze(l.key, l.offset, l.type), this.format, this.style)
                }
                toggleFormat(i) {
                    this.format = Wb(this.format, i, null), this.dirty = !0
                }
                setStyle(i) {
                    this.style = i, this.dirty = !0
                }
                hasFormat(i) {
                    return 0 != (this.format & e$[i])
                }
                insertRawText(i) {
                    i = i.split(/(\r?\n|\t)/);
                    let l = [],
                        o = i.length;
                    for (let s = 0; s < o; s++) {
                        let o = i[s];
                        "\n" === o || "\r\n" === o ? l.push(ge()) : "	" === o ? l.push(ue()) : l.push(J(o))
                    }
                    this.insertNodes(l)
                }
                insertText(i) {
                    var l = this.anchor,
                        o = this.focus,
                        s = this.isCollapsed() || l.isBefore(o),
                        _ = this.format,
                        p = this.style;
                    s && "element" === l.type ? Be(l, o, _, p) : s || "element" !== o.type || Be(o, l, _, p);
                    var N = this.getNodes(),
                        T = N.length,
                        S = s ? o : l;
                    o = (s ? l : o).offset;
                    var b = S.offset;
                    B(l = N[0]) || r(26), s = l.getTextContent().length;
                    var R = l.getParentOrThrow(),
                        $ = N[T - 1];
                    if (this.isCollapsed() && o === s && (l.isSegmented() || l.isToken() || !l.canInsertTextAfter() || !R.canInsertTextAfter() && null === l.getNextSibling())) {
                        var A = l.getNextSibling();
                        if (B(A) && A.canInsertTextBefore() && !Ob(A) || ((A = J()).setFormat(_), R.canInsertTextAfter() ? l.insertAfter(A) : R.insertAfter(A)), A.select(0, 0), l = A, "" !== i) {
                            this.insertText(i);
                            return
                        }
                    } else if (this.isCollapsed() && 0 === o && (l.isSegmented() || l.isToken() || !l.canInsertTextBefore() || !R.canInsertTextBefore() && null === l.getPreviousSibling())) {
                        if ((!B(A = l.getPreviousSibling()) || Ob(A)) && ((A = J()).setFormat(_), R.canInsertTextBefore() ? l.insertBefore(A) : R.insertBefore(A)), A.select(), l = A, "" !== i) {
                            this.insertText(i);
                            return
                        }
                    } else if (l.isSegmented() && o !== s)(R = J(l.getTextContent())).setFormat(_), l.replace(R), l = R;
                    else if (!(this.isCollapsed() || "" === i || (A = $.getParent(), R.canInsertTextBefore() && R.canInsertTextAfter() && (!D(A) || A.canInsertTextBefore() && A.canInsertTextAfter())))) {
                        this.insertText(""), Xe(this.anchor, this.focus, null), this.insertText(i);
                        return
                    }
                    if (1 === T) {
                        if (l.isToken())(i = J(i)).select(), l.replace(i);
                        else {
                            if (N = l.getFormat(), T = l.getStyle(), o === b && (N !== _ || T !== p)) {
                                if ("" === l.getTextContent()) l.setFormat(_), l.setStyle(p);
                                else {
                                    (N = J(i)).setFormat(_), N.setStyle(p), N.select(), 0 === o ? l.insertBefore(N, !1) : ([T] = l.splitText(o), T.insertAfter(N, !1)), N.isComposing() && "text" === this.anchor.type && (this.anchor.offset -= i.length);
                                    return
                                }
                            }
                            "" === (l = l.spliceText(o, b - o, i, !0)).getTextContent() ? l.remove() : "text" === this.anchor.type && (l.isComposing() ? this.anchor.offset -= i.length : (this.format = N, this.style = T))
                        }
                    } else {
                        if (_ = new Set([...l.getParentKeys(), ...$.getParentKeys()]), A = D(l) ? l : l.getParentOrThrow(), p = D($) ? $ : $.getParentOrThrow(), R = $, !A.is(p) && p.isInline())
                            do R = p, p = p.getParentOrThrow(); while (p.isInline());
                        if ("text" === S.type && (0 !== b || "" === $.getTextContent()) || "element" === S.type && $.getIndexWithinParent() < b) {
                            if (B($) && !$.isToken() && b !== $.getTextContentSize()) {
                                if ($.isSegmented()) {
                                    var L = J($.getTextContent());
                                    $.replace(L), $ = L
                                }
                                K(S.getNode()) || ($ = $.spliceText(0, b, "")), _.add($.__key)
                            } else(S = $.getParentOrThrow()).canBeEmpty() || 1 !== S.getChildrenSize() ? $.remove() : S.remove()
                        } else _.add($.__key);
                        for (S = p.getChildren(), b = new Set(N), $ = A.is(p), A = A.isInline() && null === l.getNextSibling() ? A : l, L = S.length - 1; 0 <= L; L--) {
                            let i = S[L];
                            if (i.is(l) || D(i) && i.isParentOf(l)) break;
                            i.isAttached() && (!b.has(i) || i.is(R) ? $ || A.insertAfter(i, !1) : i.remove())
                        }
                        if (!$)
                            for (S = p, b = null; null !== S;)(0 === ($ = (p = S.getChildren()).length) || p[$ - 1].is(b)) && (_.delete(S.__key), b = S), S = S.getParent();
                        for (l.isToken() ? o === s ? l.select() : ((i = J(i)).select(), l.replace(i)) : "" === (l = l.spliceText(o, s - o, i, !0)).getTextContent() ? l.remove() : l.isComposing() && "text" === this.anchor.type && (this.anchor.offset -= i.length), i = 1; i < T; i++) l = N[i], _.has(l.__key) || l.remove()
                    }
                }
                removeText() {
                    this.insertText("")
                }
                formatText(i) {
                    if (this.isCollapsed()) this.toggleFormat(i), H(null);
                    else {
                        var l = this.getNodes(),
                            o = [];
                        for (var s of l) B(s) && o.push(s);
                        var _ = o.length;
                        if (0 === _) this.toggleFormat(i), H(null);
                        else {
                            s = this.anchor;
                            var p = this.focus,
                                N = this.isBackward();
                            l = N ? p : s, s = N ? s : p;
                            var T = 0,
                                S = o[0];
                            if (p = "element" === l.type ? 0 : l.offset, "text" === l.type && p === S.getTextContentSize() && (T = 1, S = o[1], p = 0), null != S) {
                                N = S.getFormatFlags(i, null);
                                var b = _ - 1,
                                    R = o[b];
                                if (_ = "text" === s.type ? s.offset : R.getTextContentSize(), S.is(R)) p !== _ && (0 === p && _ === S.getTextContentSize() ? S.setFormat(N) : (i = S.splitText(p, _), (i = 0 === p ? i[0] : i[1]).setFormat(N), "text" === l.type && l.set(i.__key, 0, "text"), "text" === s.type && s.set(i.__key, _ - p, "text")), this.format = N);
                                else {
                                    0 !== p && ([, S] = S.splitText(p), p = 0), S.setFormat(N);
                                    var $ = R.getFormatFlags(i, N);
                                    for (0 < _ && (_ !== R.getTextContentSize() && ([R] = R.splitText(_)), R.setFormat($)), T += 1; T < b; T++) {
                                        let l = o[T];
                                        if (!l.isToken()) {
                                            let o = l.getFormatFlags(i, $);
                                            l.setFormat(o)
                                        }
                                    }
                                    "text" === l.type && l.set(S.__key, p, "text"), "text" === s.type && s.set(R.__key, _, "text"), this.format = N | $
                                }
                            }
                        }
                    }
                }
                insertNodes(i, l) {
                    if (!this.isCollapsed()) {
                        var o = this.isBackward() ? this.anchor : this.focus,
                            s = o.getNode().getNextSibling();
                        if (s = s ? s.getKey() : null, o = (o = o.getNode().getPreviousSibling()) ? o.getKey() : null, this.removeText(), this.isCollapsed() && "element" === this.focus.type) {
                            if (this.focus.key === s && 0 === this.focus.offset) {
                                var _ = J();
                                this.focus.getNode().insertBefore(_)
                            } else this.focus.key === o && this.focus.offset === this.focus.getNode().getChildrenSize() && (_ = J(), this.focus.getNode().insertAfter(_));
                            _ && (this.focus.set(_.__key, 0, "text"), this.anchor.set(_.__key, 0, "text"))
                        }
                    }
                    o = (_ = this.anchor).offset;
                    var p = _.getNode();
                    s = p, "element" === _.type && (s = null === (s = (_ = _.getNode()).getChildAtIndex(o - 1)) ? _ : s), _ = [];
                    var N = p.getNextSiblings(),
                        T = yc(p) ? null : p.getTopLevelElementOrThrow();
                    if (B(p)) {
                        if (s = p.getTextContent().length, 0 === o && 0 !== s) s = null !== (s = p.getPreviousSibling()) ? s : p.getParentOrThrow(), _.push(p);
                        else if (o === s) s = p;
                        else {
                            if (p.isToken()) return !1;
                            [s, p] = p.splitText(o), _.push(p)
                        }
                    }
                    p = s, _.push(...N), N = i[0];
                    var S = !1,
                        b = null;
                    for (let l = 0; l < i.length; l++) {
                        var R = i[l];
                        if (yc(s) || z(s) || !D(R) || R.isInline()) S && !D(R) && !z(R) && yc(s.getParent()) && r(28);
                        else {
                            if (R.is(N)) {
                                if (D(s) && s.isEmpty() && s.canReplaceWith(R)) {
                                    s.replace(R), s = R, S = !0;
                                    continue
                                }
                                if (Xb(S = R.getFirstDescendant())) {
                                    for (var $ = S.getParentOrThrow(); $.isInline();) $ = $.getParentOrThrow();
                                    if (S = (b = $.getChildren()).length, D(s)) {
                                        var A = s.getFirstChild();
                                        for (let i = 0; i < S; i++) {
                                            let l = b[i];
                                            null === A ? s.append(l) : A.insertAfter(l), A = l
                                        }
                                    } else {
                                        for (A = S - 1; 0 <= A; A--) s.insertAfter(b[A]);
                                        s = s.getParentOrThrow()
                                    }
                                    if (b = b[S - 1], $.remove(), S = !0, $.is(R)) continue
                                }
                            }
                            B(s) && (null === T && r(27), s = T)
                        }
                        S = !1, D(s) && !s.isInline() ? (b = R, z(R) && !R.isInline()) ? s = 1 === i.length && s.canBeEmpty() && s.isEmpty() ? s.insertBefore(R, !1) : s.insertAfter(R, !1) : D(R) ? (R.canBeEmpty() || !R.isEmpty()) && (K(s) ? (null !== ($ = s.getChildAtIndex(o)) ? $.insertBefore(R) : s.append(R), s = R) : R.isInline() ? (s.append(R), s = R) : s = s.insertAfter(R, !1)) : (null !== ($ = s.getFirstChild()) ? $.insertBefore(R) : s.append(R), s = R) : !D(R) || D(R) && R.isInline() || z(s) && !s.isInline() ? (b = R, C(this) && z(R) && (D(s) || B(s)) && !R.isInline() ? (B(s) ? ($ = s.getParentOrThrow(), [s] = s.splitText(o), s = s.getIndexWithinParent() + 1) : ($ = s, s = o), [, s] = Ec($, s), s = s.insertBefore(R)) : s = s.insertAfter(R, !1)) : (R = s.getParentOrThrow(), Yb(s) && s.remove(), s = R, l--)
                    }
                    if (l && (B(p) ? p.select() : B(i = s.getPreviousSibling()) ? i.select() : (i = s.getIndexWithinParent(), s.getParentOrThrow().select(i, i))), D(s)) {
                        if (i = B(b) ? b : D(b) && b.isInline() ? b.getLastDescendant() : s.getLastDescendant(), l || (null === i ? s.select() : B(i) ? "" === i.getTextContent() ? i.selectPrevious() : i.select() : i.selectNext()), 0 !== _.length)
                            for (l = s, i = _.length - 1; 0 <= i; i--) T = (o = _[i]).getParentOrThrow(), !D(s) || Ye(o) || z(o) && (!o.isInline() || o.isIsolated()) ? D(s) || Ye(o) ? D(o) && !o.canInsertAfter(s) ? (D(p = T.constructor.clone(T)) || r(29), p.append(o), s.insertAfter(p)) : s.insertAfter(o) : (s.insertBefore(o), s = o) : (l === s ? s.append(o) : s.insertBefore(o), s = o), T.isEmpty() && !T.canBeEmpty() && T.remove()
                    } else l || (B(s) ? s.select() : (l = s.getParentOrThrow(), i = s.getIndexWithinParent() + 1, l.select(i, i)));
                    return !0
                }
                insertParagraph() {
                    this.isCollapsed() || this.removeText();
                    var i = this.anchor,
                        l = i.offset,
                        o = [];
                    if ("text" === i.type) {
                        var s = i.getNode(),
                            _ = s.getNextSiblings().reverse(),
                            p = s.getParentOrThrow(),
                            N = p.isInline(),
                            T = N ? p.getTextContentSize() : s.getTextContentSize();
                        0 === l ? _.push(s) : (N && (o = p.getNextSiblings()), l === T || N && l === s.getTextContentSize() || ([, s] = s.splitText(l), _.push(s)))
                    } else {
                        if (yc(p = i.getNode())) {
                            _ = de(), o = p.getChildAtIndex(l), _.select(), null !== o ? o.insertBefore(_, !1) : p.append(_);
                            return
                        }
                        _ = p.getChildren().slice(l).reverse()
                    }
                    if (s = _.length, 0 === l && 0 < s && p.isInline()) {
                        if (D(_ = (o = p.getParentOrThrow()).insertNewAfter(this, !1)))
                            for (o = o.getChildren(), p = 0; p < o.length; p++) _.append(o[p])
                    } else if (null === (N = p.insertNewAfter(this, !1))) this.insertLineBreak();
                    else if (D(N)) {
                        if (T = p.getFirstChild(), 0 === l && (p.is(i.getNode()) || T && T.is(i.getNode())) && 0 < s) p.insertBefore(N);
                        else {
                            if (p = null, l = o.length, i = N.getParentOrThrow(), 0 < l)
                                for (T = 0; T < l; T++) i.append(o[T]);
                            if (0 !== s)
                                for (o = 0; o < s; o++) l = _[o], null === p ? N.append(l) : p.insertBefore(l), p = l;
                            N.canBeEmpty() || 0 !== N.getChildrenSize() ? N.selectStart() : (N.selectPrevious(), N.remove())
                        }
                    }
                }
                insertLineBreak(i) {
                    let l = ge();
                    var o = this.anchor;
                    "element" === o.type && K(o = o.getNode()) && this.insertParagraph(), i ? this.insertNodes([l], !0) : this.insertNodes([l]) && l.selectNext(0, 0)
                }
                getCharacterOffsets() {
                    return Se(this)
                }
                extract() {
                    var i = this.getNodes(),
                        l = i.length,
                        o = l - 1,
                        s = this.anchor;
                    let _ = this.focus;
                    var p = i[0];
                    let N = i[o],
                        [T, S] = Se(this);
                    return 0 === l ? [] : 1 === l ? B(p) && !this.isCollapsed() ? (i = T > S ? S : T, o = p.splitText(i, T > S ? T : S), null != (i = 0 === i ? o[0] : o[1]) ? [i] : []) : [p] : (l = s.isBefore(_), B(p) && ((s = l ? T : S) === p.getTextContentSize() ? i.shift() : 0 !== s && ([, p] = p.splitText(s), i[0] = p)), B(N) && (p = N.getTextContent().length, 0 === (l = l ? S : T) ? i.pop() : l !== p && ([N] = N.splitText(l), i[o] = N)), i)
                }
                modify(i, l, o) {
                    var s = this.focus,
                        _ = this.anchor,
                        p = "move" === i,
                        N = tc(s, l);
                    if (z(N) && !N.isIsolated()) p && N.isKeyboardSelectable() ? ((l = Ze()).add(N.__key), yb(l)) : B(i = l ? N.getPreviousSibling() : N.getNextSibling()) ? (N = i.__key, l = l ? i.getTextContent().length : 0, s.set(N, l, "text"), p && _.set(N, l, "text")) : (o = N.getParentOrThrow(), D(i) ? (o = i.__key, N = l ? i.getChildrenSize() : 0) : (N = N.getIndexWithinParent(), o = o.__key, l || N++), s.set(o, N, "element"), p && _.set(o, N, "element"));
                    else if (s = vb((_ = F())._window)) {
                        var T = _._blockCursorElement,
                            S = _._rootElement;
                        if (null === S || null === T || !D(N) || N.isInline() || N.canBeEmpty() || Dc(T, _, S), s.modify(i, l ? "backward" : "forward", o), 0 < s.rangeCount && (N = s.getRangeAt(0), _ = K(_ = this.anchor.getNode()) ? _ : xc(_), this.applyDOMRange(N), this.dirty = !0, !p)) {
                            for (T = 0, p = this.getNodes(), i = [], o = !1; T < p.length; T++) wc(S = p[T], _) ? i.push(S) : o = !0;
                            o && 0 < i.length && (l ? D(l = i[0]) ? l.selectStart() : l.getParentOrThrow().selectStart() : D(l = i[i.length - 1]) ? l.selectEnd() : l.getParentOrThrow().selectEnd()), (s.anchorNode !== N.startContainer || s.anchorOffset !== N.startOffset) && (l = this.focus, s = (p = this.anchor).key, N = p.offset, _ = p.type, Ce(p, l.key, l.offset, l.type), Ce(l, s, N, _), this._cachedNodes = null)
                        }
                    }
                }
                deleteCharacter(i) {
                    let l = this.isCollapsed();
                    if (this.isCollapsed()) {
                        var s = this.anchor,
                            _ = this.focus,
                            p = s.getNode();
                        if (!i && ("element" === s.type && D(p) && s.offset === p.getChildrenSize() || "text" === s.type && s.offset === p.getTextContentSize())) {
                            var N = p.getParent();
                            if (D(N = p.getNextSibling() || (null === N ? null : N.getNextSibling())) && N.isShadowRoot()) return
                        }
                        if (z(N = tc(_, i)) && !N.isIsolated()) {
                            N.isKeyboardSelectable() && D(p) && 0 === p.getChildrenSize() ? (p.remove(), (i = Ze()).add(N.__key), yb(i)) : (N.remove(), F().dispatchCommand(o, void 0));
                            return
                        }
                        if (!i && D(N) && D(p) && p.isEmpty()) {
                            p.remove(), N.selectStart();
                            return
                        }
                        if (this.modify("extend", i, "character"), this.isCollapsed()) {
                            if (i && 0 === s.offset && ("element" === s.type ? s.getNode() : s.getNode().getParentOrThrow()).collapseAtStart(this)) return
                        } else {
                            if (N = "text" === _.type ? _.getNode() : null, p = "text" === s.type ? s.getNode() : null, null !== N && N.isSegmented()) {
                                if (s = _.offset, _ = N.getTextContentSize(), N.is(p) || i && s !== _ || !i && 0 !== s) {
                                    $e(N, i, s);
                                    return
                                }
                            } else if (null !== p && p.isSegmented() && (s = s.offset, _ = p.getTextContentSize(), p.is(N) || i && 0 !== s || !i && s !== _)) {
                                $e(p, i, s);
                                return
                            }
                            if (p = this.anchor, N = this.focus, (s = p.getNode()) === (_ = N.getNode()) && "text" === p.type && "text" === N.type) {
                                var T = p.offset,
                                    S = N.offset;
                                let l = T < S;
                                (_ = l ? T : S) !== (T = (S = l ? S : T) - 1) && (kc(s = s.getTextContent().slice(_, S)) || (i ? N.offset = T : p.offset = T))
                            }
                        }
                    }
                    this.removeText(), i && !l && this.isCollapsed() && "element" === this.anchor.type && 0 === this.anchor.offset && (i = this.anchor.getNode()).isEmpty() && K(i.getParent()) && 0 === i.getIndexWithinParent() && i.collapseAtStart(this)
                }
                deleteLine(i) {
                    this.isCollapsed() && ("text" === this.anchor.type && this.modify("extend", i, "lineboundary"), 0 === (i ? this.focus : this.anchor).offset && this.modify("extend", i, "character")), this.removeText()
                }
                deleteWord(i) {
                    this.isCollapsed() && this.modify("extend", i, "word"), this.removeText()
                }
            };

            function Ud(i) {
                return i instanceof De
            }

            function af(i) {
                let l = i.offset;
                return "text" === i.type ? l : l === (i = i.getNode()).getChildrenSize() ? i.getTextContent().length : 0
            }

            function Se(i) {
                let l = i.anchor;
                return i = i.focus, "element" === l.type && "element" === i.type && l.key === i.key && l.offset === i.offset ? [0, 0] : [af(l), af(i)]
            }

            function $e(i, l, o) {
                let s = i.getTextContent().split(/(?=\s)/g),
                    _ = s.length,
                    p = 0,
                    N = 0;
                for (let i = 0; i < _; i++) {
                    let T = s[i],
                        S = i === _ - 1;
                    if (N = p, p += T.length, l && p === o || p > o || S) {
                        s.splice(i, 1), S && (N = void 0);
                        break
                    }
                }
                "" === (l = s.join("").trim()) ? i.remove(): (i.setTextContent(l), i.select(N, N))
            }

            function bf(i, l, o, s) {
                var _ = l;
                if (1 === i.nodeType) {
                    let T = !1;
                    var p = i.childNodes,
                        N = p.length;
                    _ === N && (T = !0, _ = N - 1);
                    let S = p[_];
                    if (N = !1, S === s._blockCursorElement ? (S = p[_ + 1], N = !0) : null !== s._blockCursorElement && _--, B(s = jc(S))) _ = T ? s.getTextContentSize() : 0;
                    else {
                        if (null === (p = jc(i))) return null;
                        if (D(p) ? ((l = D(i = p.getChildAtIndex(_))) && (l = i.getParent(), l = null === o || null === l || !l.canBeEmpty() || l !== o.getNode()), l && (null === (o = T ? i.getLastDescendant() : i.getFirstDescendant()) ? (p = i, _ = 0) : p = D(i = o) ? i : i.getParentOrThrow()), B(i) ? (s = i, p = null, _ = T ? i.getTextContentSize() : 0) : i !== p && T && !N && _++) : (_ = p.getIndexWithinParent(), _ = 0 === l && z(p) && jc(i) === p ? _ : _ + 1, p = p.getParentOrThrow()), D(p)) return new ze(p.__key, _, "element")
                    }
                } else s = jc(i);
                return B(s) ? new ze(s.__key, _, "text") : null
            }

            function cf(i, l, o) {
                var s = i.offset,
                    _ = i.getNode();
                0 === s ? (s = _.getPreviousSibling(), _ = _.getParent(), l) ? (o || !l) && null === s && D(_) && _.isInline() && B(l = _.getPreviousSibling()) && (i.key = l.__key, i.offset = l.getTextContent().length) : D(s) && !o && s.isInline() ? (i.key = s.__key, i.offset = s.getChildrenSize(), i.type = "element") : B(s) && (i.key = s.__key, i.offset = s.getTextContent().length) : s === _.getTextContent().length && (s = _.getNextSibling(), _ = _.getParent(), l && D(s) && s.isInline() ? (i.key = s.__key, i.offset = 0, i.type = "element") : (o || l) && null === s && D(_) && _.isInline() && !_.canInsertTextAfter() && B(l = _.getNextSibling()) && (i.key = l.__key, i.offset = 0))
            }

            function Xe(i, l, o) {
                if ("text" === i.type && "text" === l.type) {
                    var s = i.isBefore(l);
                    let _ = i.is(l);
                    cf(i, s, _), cf(l, !s, _), _ && (l.key = i.key, l.offset = i.offset, l.type = i.type), (s = F()).isComposing() && s._compositionKey !== i.key && C(o) && (s = o.anchor, o = o.focus, Ce(i, s.key, s.offset, s.type), Ce(l, o.key, o.offset, o.type))
                }
            }

            function We(i, l, o, s, _, p) {
                return null === i || null === o || !Lb(_, i, o) || null === (l = bf(i, l, C(p) ? p.anchor : null, _)) || null === (s = bf(o, s, C(p) ? p.focus : null, _)) || "element" === l.type && "element" === s.type && (i = jc(i), o = jc(o), z(i) && z(o)) ? null : (Xe(l, s, p), [l, s])
            }

            function Ye(i) {
                return D(i) && !i.isInline()
            }

            function re(i, l, o, s, _, p) {
                let N = ac();
                return (i = new Ne(new ze(i, l, _), new ze(o, s, p), 0, "")).dirty = !0, N._selection = i
            }

            function Ze() {
                return new De(new Set)
            }

            function Qd(i, l, o) {
                let s;
                var _ = o._window;
                if (null === _) return null;
                var p = _.event,
                    N = p ? p.type : void 0;
                if (_ = "selectionchange" === N, p = !eB && (_ || "beforeinput" === N || "compositionstart" === N || "compositionend" === N || "click" === N && p && 3 === p.detail || "drop" === N || void 0 === N), C(i) && !p) return i.clone();
                if (null === l) return null;
                if (p = l.anchorNode, N = l.focusNode, s = l.anchorOffset, l = l.focusOffset, _ && C(i) && !Lb(o, p, N)) return i.clone();
                if (null === (o = We(p, s, N, l, o, i))) return null;
                let [T, S] = o;
                return new Ne(T, S, C(i) ? i.format : 0, C(i) ? i.style : "")
            }

            function v() {
                return ac()._selection
            }

            function oc() {
                return F()._editorState._selection
            }

            function ae(i, l, o, s = 1) {
                var _ = i.anchor,
                    p = i.focus,
                    N = _.getNode(),
                    T = p.getNode();
                if (l.is(N) || l.is(T)) {
                    if (N = l.__key, i.isCollapsed())(o <= (l = _.offset) && 0 < s || o < l && 0 > s) && (o = Math.max(0, l + s), _.set(N, o, "element"), p.set(N, o, "element"), ef(i));
                    else {
                        let b = i.isBackward();
                        var S = (T = b ? p : _).getNode();
                        p = (_ = b ? _ : p).getNode(), l.is(S) && (o <= (S = T.offset) && 0 < s || o < S && 0 > s) && T.set(N, Math.max(0, S + s), "element"), l.is(p) && (o <= (l = _.offset) && 0 < s || o < l && 0 > s) && _.set(N, Math.max(0, l + s), "element")
                    }
                    ef(i)
                }
            }

            function ef(i) {
                var l = i.anchor,
                    o = l.offset;
                let s = i.focus;
                var _ = s.offset,
                    p = l.getNode(),
                    N = s.getNode();
                if (i.isCollapsed()) D(p) && B(N = (_ = o >= (N = p.getChildrenSize())) ? p.getChildAtIndex(N - 1) : p.getChildAtIndex(o)) && (o = 0, _ && (o = N.getTextContentSize()), l.set(N.__key, o, "text"), s.set(N.__key, o, "text"));
                else {
                    if (D(p)) {
                        let s = p.getChildrenSize();
                        B(o = (i = o >= s) ? p.getChildAtIndex(s - 1) : p.getChildAtIndex(o)) && (p = 0, i && (p = o.getTextContentSize()), l.set(o.__key, p, "text"))
                    }
                    D(N) && B(_ = (l = _ >= (o = N.getChildrenSize())) ? N.getChildAtIndex(o - 1) : N.getChildAtIndex(_)) && (N = 0, l && (N = _.getTextContentSize()), s.set(_.__key, N, "text"))
                }
            }

            function $d(i, l, o, s, _) {
                let p = null,
                    N = 0,
                    T = null;
                null !== s ? (p = s.__key, B(s) ? (N = s.getTextContentSize(), T = "text") : D(s) && (N = s.getChildrenSize(), T = "element")) : null !== _ && (p = _.__key, B(_) ? T = "text" : D(_) && (T = "element")), null !== p && null !== T ? i.set(p, N, T) : (-1 === (N = l.getIndexWithinParent()) && (N = o.getChildrenSize()), i.set(o.__key, N, "element"))
            }

            function se(i, l, o, s, _) {
                "text" === i.type ? (i.key = o, l || (i.offset += _)) : i.offset > s.getIndexWithinParent() && --i.offset
            }

            function Ve(i, l, o) {
                let s = [],
                    _ = null,
                    p = null;
                i = i.getChildren();
                for (let b = 0; b < i.length; b++) {
                    var N = i[b];
                    Te(N) || r(108);
                    var T = N.getChildren();
                    for (let i of (N = 0, T)) {
                        for (P(i) || r(109); void 0 !== s[b] && void 0 !== s[b][N];) N++;
                        var S = N;
                        let R = {
                                cell: i,
                                startColumn: S,
                                startRow: T = b
                            },
                            $ = i.__rowSpan,
                            A = i.__colSpan;
                        for (let i = 0; i < $; i++) {
                            void 0 === s[T + i] && (s[T + i] = []);
                            for (let l = 0; l < A; l++) s[T + i][S + l] = R
                        }
                        l.is(i) && (_ = R), o.is(i) && (p = R), N += i.__colSpan
                    }
                }
                return null === _ && r(110), null === p && r(111), [s, _, p]
            }

            function Pe(i) {
                i instanceof gf || (i = i instanceof be ? Fc(i, P) : Fc(i.getNode(), P), P(i) || r(114));
                let l = i.getParent();
                Te(l) || r(115);
                let o = l.getParent();
                return Ue(o) || r(116), [i, l, o]
            }
            let tg = null,
                th = null,
                t_ = !1,
                tp = !1,
                tm = 0,
                ty = {
                    characterData: !0,
                    childList: !0,
                    subtree: !0
                };

            function ec() {
                return t_ || null !== tg && tg._readOnly
            }

            function G() {
                t_ && r(13)
            }

            function ac() {
                return null === tg && r(15), tg
            }

            function F() {
                return null === th && r(16), th
            }

            function kf(i, l, o) {
                var s = l.__type;
                let _ = i._nodes.get(s);
                for (void 0 === _ && r(30, s), void 0 === (i = o.get(s)) && (i = Array.from(_.transforms), o.set(s, i)), o = i.length, s = 0; s < o && (i[s](l), l.isAttached()); s++);
            }

            function nf(i, l) {
                var o = i.type,
                    s = l.get(o);
                if (void 0 === s && r(17, o), o = s.klass, i.type !== o.getType() && r(18, o.name), o = o.importJSON(i), i = i.children, D(o) && Array.isArray(i))
                    for (s = 0; s < i.length; s++) {
                        let _ = nf(i[s], l);
                        o.append(_)
                    }
                return o
            }

            function of (i, l) {
                let o = tg,
                    s = t_,
                    _ = th;
                tg = i, t_ = !0, th = null;
                try {
                    return l()
                } finally {
                    tg = o, t_ = s, th = _
                }
            }

            function pf(i, l) {
                let s = i._pendingEditorState,
                    _ = i._rootElement,
                    p = i._headless || null === _;
                if (null !== s) {
                    var N = i._editorState,
                        T = N._selection,
                        S = s._selection,
                        b = 0 !== i._dirtyType,
                        R = tg,
                        $ = t_,
                        A = th,
                        L = i._updating,
                        W = i._observer,
                        Y = null;
                    if (i._pendingEditorState = null, i._editorState = s, !p && b && null !== W) {
                        th = i, tg = s, t_ = !1, i._updating = !0;
                        try {
                            let l = i._dirtyType,
                                o = i._dirtyElements,
                                _ = i._dirtyLeaves;
                            W.disconnect(), eY = eH = eK = "", ej = 2 === l, eZ = null, eV = i, eG = i._config, eU = i._nodes, eq = eV._listeners.mutation, eX = o, eQ = _, e0 = N._nodeMap, e1 = s._nodeMap, eJ = s._readOnly, e2 = new Map(i._keyToDOMMap);
                            let p = new Map;
                            e3 = p,
                                function sd(i, l) {
                                    var o = e0.get(i),
                                        s = e1.get(i);
                                    void 0 !== o && void 0 !== s || r(61);
                                    var _ = ej || eQ.has(i) || eX.has(i);
                                    let p = vc(eV, i);
                                    if (o === s && !_) return D(o) ? (void 0 !== (s = p.__lexicalTextContent) && (eK += s, eH += s), void 0 !== (s = p.__lexicalDirTextContent) && (eY += s)) : (s = o.getTextContent(), B(o) && !o.isDirectionless() && (eY += s), eH += s, eK += s), p;
                                    if (o !== s && _ && rc(e3, eU, eq, s, "updated"), s.updateDOM(o, p, eG)) return s = md(i, null, null), null === l && r(62), l.replaceChild(s, p), fd(i, null), s;
                                    if (D(o) && D(s)) {
                                        if ((i = s.__indent) !== o.__indent && kd(p, i), (i = s.__format) !== o.__format && ld(p, i), _) {
                                            i = s, _ = eY, eY = "", l = eK;
                                            var N = o.__size,
                                                T = i.__size;
                                            if (eK = "", 1 === N && 1 === T) {
                                                var S = o.__first,
                                                    b = i.__first;
                                                if (S === b) sd(S, p);
                                                else {
                                                    var R = gd(S);
                                                    b = md(b, null, null), p.replaceChild(b, R), fd(S, null)
                                                }
                                            } else {
                                                b = hd(o, e0);
                                                var $ = hd(i, e1);
                                                if (0 === N) 0 !== T && nd($, i, 0, T - 1, p, null);
                                                else if (0 === T) 0 !== N && (id(b, 0, N - 1, (S = null == p.__lexicalLineBreak) ? null : p), S && (p.textContent = ""));
                                                else {
                                                    var A = b;
                                                    b = $, $ = N - 1, N = T - 1;
                                                    let l = p.firstChild,
                                                        o = 0;
                                                    for (T = 0; o <= $ && T <= N;) {
                                                        var L = A[o];
                                                        let i = b[T];
                                                        if (L === i) l = td(sd(i, p)), o++, T++;
                                                        else {
                                                            void 0 === S && (S = new Set(A)), void 0 === R && (R = new Set(b));
                                                            let s = R.has(L),
                                                                _ = S.has(i);
                                                            s ? (_ ? ((L = vc(eV, i)) === l ? l = td(sd(i, p)) : (null != l ? p.insertBefore(L, l) : p.appendChild(L), sd(i, p)), o++) : md(i, p, l), T++) : (l = td(gd(L)), fd(L, p), o++)
                                                        }
                                                    }
                                                    S = o > $, R = T > N, S && !R ? (S = void 0 === (S = b[N + 1]) ? null : eV.getElementByKey(S), nd(b, i, T, N, p, S)) : R && !S && id(A, o, $, p)
                                                }
                                            }
                                            uc(i) && (eK += "\n\n"), p.__lexicalTextContent = eK, eK = l + eK, od(i, p), eY = _, K(s) || s.isInline() || pd(o, s, p)
                                        }
                                        uc(s) && (eK += "\n\n", eH += "\n\n")
                                    } else o = s.getTextContent(), z(s) ? null !== (_ = s.decorate(eV, eG)) && qd(i, _) : B(s) && !s.isDirectionless() && (eY += o), eK += o, eH += o;
                                    return !eJ && K(s) && s.__cachedText !== eH && ((s = s.getWritable()).__cachedText = eH), p
                                }("root", null), e3 = e2 = eG = e1 = e0 = eQ = eX = eU = eV = void 0, Y = p
                        } catch (l) {
                            if (l instanceof Error && i._onError(l), tp) throw l;
                            qf(i, null, _, s), Bb(i), i._dirtyType = 2, tp = !0, pf(i, N), tp = !1;
                            return
                        } finally {
                            W.observe(_, ty), i._updating = L, tg = R, t_ = $, th = A
                        }
                    }
                    s._readOnly || (s._readOnly = !0);
                    var V = i._dirtyLeaves,
                        U = i._dirtyElements,
                        j = i._normalizedNodes,
                        Z = i._updateTags,
                        X = i._deferred;
                    b && (i._dirtyType = 0, i._cloneNotNeeded.clear(), i._dirtyLeaves = new Set, i._dirtyElements = new Map, i._normalizedNodes = new Set, i._updateTags = new Set);
                    var Q, et = i._decorators,
                        en = i._pendingDecorators || et,
                        er = s._nodeMap;
                    for (Q in en) er.has(Q) || (en === et && (en = fc(i)), delete en[Q]);
                    var ei = p ? null : vb(i._window);
                    if (i._editable && null !== ei && (b || null === S || S.dirty)) {
                        th = i, tg = s;
                        try {
                            if (null !== W && W.disconnect(), b || null === S || S.dirty) {
                                let l = i._blockCursorElement;
                                null !== l && Dc(l, i, _);
                                e: {
                                    let l = ei.anchorNode,
                                        o = ei.focusNode,
                                        s = ei.anchorOffset,
                                        p = ei.focusOffset,
                                        N = document.activeElement;
                                    if (!(Z.has("collaboration") && N !== _ || null !== N && Kb(N))) {
                                        if (C(S)) {
                                            var el = S.anchor,
                                                eo = S.focus,
                                                es = el.key,
                                                ea = eo.key,
                                                eu = vc(i, es),
                                                ed = vc(i, ea),
                                                eg = el.offset,
                                                eh = eo.offset,
                                                e_ = S.format,
                                                ep = S.style,
                                                em = S.isCollapsed(),
                                                ey = eu,
                                                eC = ed,
                                                eN = !1;
                                            if ("text" === el.type) {
                                                ey = Vb(eu);
                                                let i = el.getNode();
                                                eN = i.getFormat() !== e_ || i.getStyle() !== ep
                                            } else C(T) && "text" === T.anchor.type && (eN = !0);
                                            if ("text" === eo.type && (eC = Vb(ed)), null !== ey && null !== eC) {
                                                if (em && (null === T || eN || C(T) && (T.format !== e_ || T.style !== ep))) {
                                                    var ex = performance.now();
                                                    tl = [e_, ep, eg, es, ex]
                                                }
                                                if (s === eg && p === eh && l === ey && o === eC && ("Range" !== ei.type || !em) && (null !== N && _.contains(N) || _.focus({
                                                        preventScroll: !0
                                                    }), "element" !== el.type)) break e;
                                                try {
                                                    ei.setBaseAndExtent(ey, eg, eC, eh)
                                                } catch (i) {}
                                                if (!Z.has("skip-scroll-into-view") && S.isCollapsed() && null !== _ && _ === document.activeElement) {
                                                    let l = S instanceof Ne && "element" === S.anchor.type ? ey.childNodes[eg] || null : 0 < ei.rangeCount ? ei.getRangeAt(0) : null;
                                                    if (null !== l) {
                                                        let o;
                                                        if (l instanceof Text) {
                                                            let i = document.createRange();
                                                            i.selectNode(l), o = i.getBoundingClientRect()
                                                        } else o = l.getBoundingClientRect();
                                                        let s = _.ownerDocument,
                                                            p = s.defaultView;
                                                        if (null !== p)
                                                            for (var ev, eT, {
                                                                    top: eE,
                                                                    bottom: eS
                                                                } = o, eb = _; null !== eb;) {
                                                                let l = eb === s.body;
                                                                if (l) ev = 0, eT = Cb(i).innerHeight;
                                                                else {
                                                                    let i = eb.getBoundingClientRect();
                                                                    ev = i.top, eT = i.bottom
                                                                }
                                                                let o = 0;
                                                                if (eE < ev ? o = -(ev - eE) : eS > eT && (o = eS - eT), 0 !== o) {
                                                                    if (l) p.scrollBy(0, o);
                                                                    else {
                                                                        let i = eb.scrollTop;
                                                                        eb.scrollTop += o;
                                                                        let l = eb.scrollTop - i;
                                                                        eE -= l, eS -= l
                                                                    }
                                                                }
                                                                if (l) break;
                                                                eb = Nb(eb)
                                                            }
                                                    }
                                                }
                                                tt = !0
                                            }
                                        } else null !== T && Lb(i, l, o) && ei.removeAllRanges()
                                    }
                                }
                            }
                            e: {
                                let l = i._blockCursorElement;
                                if (C(S) && S.isCollapsed() && "element" === S.anchor.type && _.contains(document.activeElement)) {
                                    let o = S.anchor,
                                        s = o.getNode(),
                                        p = o.offset,
                                        N = s.getChildrenSize(),
                                        T = !1,
                                        b = null;
                                    if (p === N) {
                                        let i = s.getChildAtIndex(p - 1);
                                        Cc(i) && (T = !0)
                                    } else {
                                        let l = s.getChildAtIndex(p);
                                        if (Cc(l)) {
                                            let o = l.getPreviousSibling();
                                            (null === o || Cc(o)) && (T = !0, b = i.getElementByKey(l.__key))
                                        }
                                    }
                                    if (T) {
                                        let o = i.getElementByKey(s.__key);
                                        if (null === l) {
                                            let o = i._config.theme,
                                                s = document.createElement("div");
                                            s.contentEditable = "false", s.setAttribute("data-lexical-cursor", "true");
                                            let _ = o.blockCursor;
                                            if (void 0 !== _) {
                                                if ("string" == typeof _) {
                                                    let i = _.split(" ");
                                                    _ = o.blockCursor = i
                                                }
                                                void 0 !== _ && s.classList.add(..._)
                                            }
                                            i._blockCursorElement = l = s
                                        }
                                        _.style.caretColor = "transparent", null === b ? o.appendChild(l) : o.insertBefore(l, b);
                                        break e
                                    }
                                }
                                null !== l && Dc(l, i, _)
                            }
                            null !== W && W.observe(_, ty)
                        } finally {
                            th = A, tg = R
                        }
                    }
                    if (null !== Y) {
                        var eO = Y;
                        let l = Array.from(i._listeners.mutation),
                            o = l.length;
                        for (let i = 0; i < o; i++) {
                            let [o, s] = l[i], _ = eO.get(s);
                            void 0 !== _ && o(_, {
                                dirtyLeaves: V,
                                prevEditorState: N,
                                updateTags: Z
                            })
                        }
                    }
                    C(S) || null === S || null !== T && T.is(S) || i.dispatchCommand(o, void 0);
                    var eD = i._pendingDecorators;
                    null !== eD && (i._decorators = eD, i._pendingDecorators = null, rf("decorator", i, !0, eD));
                    var eM = gc(l || N),
                        eR = gc(s);
                    if (eM !== eR && rf("textcontent", i, !0, eR), rf("update", i, !0, {
                            dirtyElements: U,
                            dirtyLeaves: V,
                            editorState: s,
                            normalizedNodes: j,
                            prevEditorState: l || N,
                            tags: Z
                        }), i._deferred = [], 0 !== X.length) {
                        let l = i._updating;
                        i._updating = !0;
                        try {
                            for (let i = 0; i < X.length; i++) X[i]()
                        } finally {
                            i._updating = l
                        }
                    }
                    var ew = i._updates;
                    if (0 !== ew.length) {
                        let l = ew.shift();
                        if (l) {
                            let [o, s] = l;
                            sf(i, o, s)
                        }
                    }
                }
            }

            function rf(i, l, o, ...s) {
                let _ = l._updating;
                l._updating = o;
                try {
                    let o = Array.from(l._listeners[i]);
                    for (i = 0; i < o.length; i++) o[i].apply(null, s)
                } finally {
                    l._updating = _
                }
            }

            function O(i, l, o) {
                if (!1 === i._updating || th !== i) {
                    let s = !1;
                    return i.update(() => {
                        s = O(i, l, o)
                    }), s
                }
                let s = lc(i);
                for (let p = 4; 0 <= p; p--)
                    for (let N = 0; N < s.length; N++) {
                        var _ = s[N]._commands.get(l);
                        if (void 0 !== _ && void 0 !== (_ = _[p])) {
                            let l = (_ = Array.from(_)).length;
                            for (let s = 0; s < l; s++)
                                if (!0 === _[s](o, i)) return !0
                        }
                    }
                return !1
            }

            function tf(i, l) {
                let o = i._updates;
                for (l = l || !1; 0 !== o.length;) {
                    var s = o.shift();
                    if (s) {
                        let [o, _] = s, p;
                        void 0 !== _ && (s = _.onUpdate, p = _.tag, _.skipTransforms && (l = !0), s && i._deferred.push(s), p && i._updateTags.add(p)), o()
                    }
                }
                return l
            }

            function sf(i, l, o) {
                let s = i._updateTags;
                var _, p = _ = !1;
                if (void 0 !== o) {
                    var N = o.onUpdate;
                    null != (_ = o.tag) && s.add(_), _ = o.skipTransforms || !1, p = o.discrete || !1
                }
                N && i._deferred.push(N), o = i._editorState;
                let T = !1;
                (null === (N = i._pendingEditorState) || N._readOnly) && (N = i._pendingEditorState = new uf(new Map((N || o)._nodeMap)), T = !0), N._flushSync = p, p = tg;
                let S = t_,
                    b = th,
                    R = i._updating;
                tg = N, t_ = !1, i._updating = !0, th = i;
                try {
                    let s, p;
                    T && (i._headless ? null != o._selection && (N._selection = o._selection.clone()) : N._selection = (s = i.getEditorState()._selection, p = vb(i._window), Ud(s) || Re(s) ? s.clone() : Qd(s, p, i)));
                    let S = i._compositionKey;
                    l(), _ = tf(i, _),
                        function(i, l) {
                            if (l = l.getEditorState()._selection, C(i = i._selection)) {
                                var o = i.anchor;
                                let s = i.focus,
                                    _;
                                "text" === o.type && (_ = o.getNode()).selectionTransform(l, i), "text" === s.type && _ !== (o = s.getNode()) && o.selectionTransform(l, i)
                            }
                        }(N, i), 0 !== i._dirtyType && (_ ? function(i, l) {
                            for (let o of (l = l._dirtyLeaves, i = i._nodeMap, l)) B(l = i.get(o)) && l.isAttached() && l.isSimpleText() && !l.isUnmergeable() && Fb(l)
                        }(N, i) : function(i, l) {
                            let o = l._dirtyLeaves,
                                s = l._dirtyElements;
                            i = i._nodeMap;
                            let _ = dc(),
                                p = new Map;
                            var N = o;
                            let T = N.size;
                            for (var S = s, b = S.size; 0 < T || 0 < b;) {
                                if (0 < T) {
                                    for (let s of (l._dirtyLeaves = new Set, N)) B(N = i.get(s)) && N.isAttached() && N.isSimpleText() && !N.isUnmergeable() && Fb(N), void 0 !== N && void 0 !== N && N.__key !== _ && N.isAttached() && kf(l, N, p), o.add(s);
                                    if (0 < (T = (N = l._dirtyLeaves).size)) {
                                        tm++;
                                        continue
                                    }
                                }
                                for (let o of (l._dirtyLeaves = new Set, l._dirtyElements = new Map, S)) S = o[0], b = o[1], ("root" === S || b) && (void 0 !== (N = i.get(S)) && void 0 !== N && N.__key !== _ && N.isAttached() && kf(l, N, p), s.set(S, b));
                                T = (N = l._dirtyLeaves).size, b = (S = l._dirtyElements).size, tm++
                            }
                            l._dirtyLeaves = o, l._dirtyElements = s
                        }(N, i), tf(i), function(i, l, o, s) {
                            i = i._nodeMap, l = l._nodeMap;
                            let _ = [];
                            for (let [o] of s) {
                                let p = l.get(o);
                                void 0 === p || p.isAttached() || (D(p) && function Ic(i, l, o, s, _, p) {
                                    for (i = i.getFirstChild(); null !== i;) {
                                        let N = i.__key;
                                        i.__parent === l && (D(i) && Ic(i, N, o, s, _, p), o.has(N) || p.delete(N), _.push(N)), i = i.getNextSibling()
                                    }
                                }(p, o, i, l, _, s), i.has(o) || s.delete(o), _.push(o))
                            }
                            for (let i of _) l.delete(i);
                            for (let _ of o) void 0 === (s = l.get(_)) || s.isAttached() || (i.has(_) || o.delete(_), l.delete(_))
                        }(o, N, i._dirtyLeaves, i._dirtyElements)), S !== i._compositionKey && (N._flushSync = !0);
                    let b = N._selection;
                    if (C(b)) {
                        let i = N._nodeMap,
                            l = b.focus.key;
                        void 0 !== i.get(b.anchor.key) && void 0 !== i.get(l) || r(19)
                    } else Ud(b) && 0 === b._nodes.size && (N._selection = null)
                } catch (l) {
                    l instanceof Error && i._onError(l), i._pendingEditorState = o, i._dirtyType = 2, i._cloneNotNeeded.clear(), i._dirtyLeaves = new Set, i._dirtyElements.clear(), pf(i);
                    return
                } finally {
                    tg = p, t_ = S, th = b, i._updating = R, tm = 0
                }
                0 !== i._dirtyType || function(i, l) {
                    if (l = l.getEditorState()._selection, null !== (i = i._selection)) {
                        if (i.dirty || !i.is(l)) return !0
                    } else if (null !== l) return !0;
                    return !1
                }(N, i) ? N._flushSync ? (N._flushSync = !1, pf(i)) : T && eW(() => {
                    pf(i)
                }) : (N._flushSync = !1, T && (s.clear(), i._deferred = [], i._pendingEditorState = null))
            }

            function w(i, l, o) {
                i._updating ? i._updates.push([l, o]) : sf(i, l, o)
            }
            let wf = class wf extends be {
                constructor(i) {
                    super(i)
                }
                decorate() {
                    r(47)
                }
                isIsolated() {
                    return !1
                }
                isInline() {
                    return !0
                }
                isKeyboardSelectable() {
                    return !0
                }
            };

            function z(i) {
                return i instanceof wf
            }
            let xf = class xf extends be {
                constructor(i) {
                    super(i), this.__last = this.__first = null, this.__indent = this.__format = this.__size = 0, this.__dir = null
                }
                getFormat() {
                    return this.getLatest().__format
                }
                getFormatType() {
                    return eP[this.getFormat()] || ""
                }
                getIndent() {
                    return this.getLatest().__indent
                }
                getChildren() {
                    let i = [],
                        l = this.getFirstChild();
                    for (; null !== l;) i.push(l), l = l.getNextSibling();
                    return i
                }
                getChildrenKeys() {
                    let i = [],
                        l = this.getFirstChild();
                    for (; null !== l;) i.push(l.__key), l = l.getNextSibling();
                    return i
                }
                getChildrenSize() {
                    return this.getLatest().__size
                }
                isEmpty() {
                    return 0 === this.getChildrenSize()
                }
                isDirty() {
                    let i = F()._dirtyElements;
                    return null !== i && i.has(this.__key)
                }
                isLastChild() {
                    let i = this.getLatest(),
                        l = this.getParentOrThrow().getLastChild();
                    return null !== l && l.is(i)
                }
                getAllTextNodes() {
                    let i = [],
                        l = this.getFirstChild();
                    for (; null !== l;) {
                        if (B(l) && i.push(l), D(l)) {
                            let o = l.getAllTextNodes();
                            i.push(...o)
                        }
                        l = l.getNextSibling()
                    }
                    return i
                }
                getFirstDescendant() {
                    let i = this.getFirstChild();
                    for (; null !== i;) {
                        if (D(i)) {
                            let l = i.getFirstChild();
                            if (null !== l) {
                                i = l;
                                continue
                            }
                        }
                        break
                    }
                    return i
                }
                getLastDescendant() {
                    let i = this.getLastChild();
                    for (; null !== i;) {
                        if (D(i)) {
                            let l = i.getLastChild();
                            if (null !== l) {
                                i = l;
                                continue
                            }
                        }
                        break
                    }
                    return i
                }
                getDescendantByIndex(i) {
                    let l = this.getChildren(),
                        o = l.length;
                    return i >= o ? D(i = l[o - 1]) && i.getLastDescendant() || i || null : D(i = l[i]) && i.getFirstDescendant() || i || null
                }
                getFirstChild() {
                    let i = this.getLatest().__first;
                    return null === i ? null : I(i)
                }
                getFirstChildOrThrow() {
                    let i = this.getFirstChild();
                    return null === i && r(45, this.__key), i
                }
                getLastChild() {
                    let i = this.getLatest().__last;
                    return null === i ? null : I(i)
                }
                getLastChildOrThrow() {
                    let i = this.getLastChild();
                    return null === i && r(96, this.__key), i
                }
                getChildAtIndex(i) {
                    let l;
                    var o = this.getChildrenSize();
                    if (i < o / 2) {
                        for (o = 0, l = this.getFirstChild(); null !== l && o <= i;) {
                            if (o === i) return l;
                            l = l.getNextSibling(), o++
                        }
                        return null
                    }
                    for (l = this.getLastChild(), --o; null !== l && o >= i;) {
                        if (o === i) return l;
                        l = l.getPreviousSibling(), o--
                    }
                    return null
                }
                getTextContent() {
                    let i = "",
                        l = this.getChildren(),
                        o = l.length;
                    for (let s = 0; s < o; s++) {
                        let _ = l[s];
                        i += _.getTextContent(), D(_) && s !== o - 1 && !_.isInline() && (i += "\n\n")
                    }
                    return i
                }
                getTextContentSize() {
                    let i = 0,
                        l = this.getChildren(),
                        o = l.length;
                    for (let s = 0; s < o; s++) {
                        let _ = l[s];
                        i += _.getTextContentSize(), D(_) && s !== o - 1 && !_.isInline() && (i += 2)
                    }
                    return i
                }
                getDirection() {
                    return this.getLatest().__dir
                }
                hasFormat(i) {
                    return "" !== i && (i = ek[i], 0 != (this.getFormat() & i))
                }
                select(i, l) {
                    G();
                    let o = v(),
                        s = i,
                        _ = l;
                    var p = this.getChildrenSize();
                    if (!this.canBeEmpty()) {
                        if (0 === i && 0 === l) {
                            if (B(i = this.getFirstChild()) || D(i)) return i.select(0, 0)
                        } else if (!(void 0 !== i && i !== p || void 0 !== l && l !== p) && (B(i = this.getLastChild()) || D(i))) return i.select()
                    }
                    return (void 0 === s && (s = p), void 0 === _ && (_ = p), p = this.__key, C(o)) ? (o.anchor.set(p, s, "element"), o.focus.set(p, _, "element"), o.dirty = !0, o) : re(p, s, p, _, "element", "element")
                }
                selectStart() {
                    let i = this.getFirstDescendant();
                    return D(i) || B(i) ? i.select(0, 0) : null !== i ? i.selectPrevious() : this.select(0, 0)
                }
                selectEnd() {
                    let i = this.getLastDescendant();
                    return D(i) || B(i) ? i.select() : null !== i ? i.selectNext() : this.select()
                }
                clear() {
                    let i = this.getWritable();
                    return this.getChildren().forEach(i => i.remove()), i
                }
                append(...i) {
                    return this.splice(this.getChildrenSize(), 0, i)
                }
                setDirection(i) {
                    let l = this.getWritable();
                    return l.__dir = i, l
                }
                setFormat(i) {
                    return this.getWritable().__format = "" !== i ? ek[i] : 0, this
                }
                setIndent(i) {
                    return this.getWritable().__indent = i, this
                }
                splice(i, l, o) {
                    let s = o.length,
                        _ = this.getChildrenSize(),
                        p = this.getWritable(),
                        N = p.__key;
                    var T = [],
                        S = [];
                    let b = this.getChildAtIndex(i + l),
                        R = null,
                        $ = _ - l + s;
                    if (0 !== i) {
                        if (i === _) R = this.getLastChild();
                        else {
                            var A = this.getChildAtIndex(i);
                            null !== A && (R = A.getPreviousSibling())
                        }
                    }
                    if (0 < l) {
                        var L = null === R ? this.getFirstChild() : R.getNextSibling();
                        for (A = 0; A < l; A++) {
                            null === L && r(100);
                            var W = L.getNextSibling(),
                                Y = L.__key;
                            bc(L = L.getWritable()), S.push(Y), L = W
                        }
                    }
                    for (W = 0, A = R; W < s; W++) {
                        Y = o[W], null !== A && Y.is(A) && (R = A = A.getPreviousSibling()), (L = Y.getWritable()).__parent === N && $--, bc(L);
                        let i = Y.__key;
                        null === A ? (p.__first = i, L.__prev = null) : ((A = A.getWritable()).__next = i, L.__prev = A.__key), Y.__key === N && r(76), L.__parent = N, T.push(i), A = Y
                    }
                    if (i + l === _ ? null !== A && (A.getWritable().__next = null, p.__last = A.__key) : null !== b && (i = b.getWritable(), null !== A ? (l = A.getWritable(), i.__prev = A.__key, l.__next = b.__key) : i.__prev = null), p.__size = $, S.length && C(i = v())) {
                        S = new Set(S), T = new Set(T);
                        let {
                            anchor: l,
                            focus: o
                        } = i;
                        yf(l, S, T) && $d(l, l.getNode(), this, R, b), yf(o, S, T) && $d(o, o.getNode(), this, R, b), 0 !== $ || this.canBeEmpty() || yc(this) || this.remove()
                    }
                    return p
                }
                exportJSON() {
                    return {
                        children: [],
                        direction: this.getDirection(),
                        format: this.getFormatType(),
                        indent: this.getIndent(),
                        type: "element",
                        version: 1
                    }
                }
                insertNewAfter() {
                    return null
                }
                canIndent() {
                    return !0
                }
                collapseAtStart() {
                    return !1
                }
                excludeFromCopy() {
                    return !1
                }
                canExtractContents() {
                    return !0
                }
                canReplaceWith() {
                    return !0
                }
                canInsertAfter() {
                    return !0
                }
                canBeEmpty() {
                    return !0
                }
                canInsertTextBefore() {
                    return !0
                }
                canInsertTextAfter() {
                    return !0
                }
                isInline() {
                    return !1
                }
                isShadowRoot() {
                    return !1
                }
                canMergeWith() {
                    return !1
                }
                extractWithChild() {
                    return !1
                }
            };

            function D(i) {
                return i instanceof xf
            }

            function yf(i, l, o) {
                for (i = i.getNode(); i;) {
                    let s = i.__key;
                    if (l.has(s) && !o.has(s)) return !0;
                    i = i.getParent()
                }
                return !1
            }
            let zf = class zf extends xf {
                static getType() {
                    return "root"
                }
                static clone() {
                    return new zf
                }
                constructor() {
                    super("root"), this.__cachedText = null
                }
                getTopLevelElementOrThrow() {
                    r(51)
                }
                getTextContent() {
                    let i = this.__cachedText;
                    return (ec() || 0 === F()._dirtyType) && null !== i ? i : super.getTextContent()
                }
                remove() {
                    r(52)
                }
                replace() {
                    r(53)
                }
                insertBefore() {
                    r(54)
                }
                insertAfter() {
                    r(55)
                }
                updateDOM() {
                    return !1
                }
                append(...i) {
                    for (let l = 0; l < i.length; l++) {
                        let o = i[l];
                        D(o) || z(o) || r(56)
                    }
                    return super.append(...i)
                }
                static importJSON(i) {
                    let l = hc();
                    return l.setFormat(i.format), l.setIndent(i.indent), l.setDirection(i.direction), l
                }
                exportJSON() {
                    return {
                        children: [],
                        direction: this.getDirection(),
                        format: this.getFormatType(),
                        indent: this.getIndent(),
                        type: "root",
                        version: 1
                    }
                }
                collapseAtStart() {
                    return !0
                }
            };

            function K(i) {
                return i instanceof zf
            }

            function Af() {
                return new uf(new Map([
                    ["root", new zf]
                ]))
            }
            let uf = class uf {
                constructor(i, l) {
                    this._nodeMap = i, this._selection = l || null, this._readOnly = this._flushSync = !1
                }
                isEmpty() {
                    return 1 === this._nodeMap.size && null === this._selection
                }
                read(i) {
                    return of(this, i)
                }
                clone(i) {
                    return (i = new uf(this._nodeMap, void 0 === i ? this._selection : i))._readOnly = !0, i
                }
                toJSON() {
                    return of(this, () => ({
                        root: function Bf(i) {
                            let l = i.exportJSON();
                            var o = i.constructor;
                            l.type !== o.getType() && r(130, o.name);
                            let s = l.children;
                            if (D(i))
                                for (Array.isArray(s) || r(59, o.name), i = i.getChildren(), o = 0; o < i.length; o++) {
                                    let l = Bf(i[o]);
                                    s.push(l)
                                }
                            return l
                        }(hc())
                    }))
                }
            };
            let Cf = class Cf extends xf {
                static getType() {
                    return "paragraph"
                }
                static clone(i) {
                    return new Cf(i.__key)
                }
                createDOM(i) {
                    let l = document.createElement("p");
                    return void 0 !== (i = qc(i.theme, "paragraph")) && l.classList.add(...i), l
                }
                updateDOM() {
                    return !1
                }
                static importDOM() {
                    return {
                        p: () => ({
                            conversion: Df,
                            priority: 0
                        })
                    }
                }
                exportDOM(i) {
                    if ({
                            element: i
                        } = super.exportDOM(i), i && Hc(i)) {
                        this.isEmpty() && i.append(document.createElement("br"));
                        var l = this.getFormatType();
                        i.style.textAlign = l, (l = this.getDirection()) && (i.dir = l), 0 < (l = this.getIndent()) && (i.style.textIndent = `${20*l}px`)
                    }
                    return {
                        element: i
                    }
                }
                static importJSON(i) {
                    let l = de();
                    return l.setFormat(i.format), l.setIndent(i.indent), l.setDirection(i.direction), l
                }
                exportJSON() {
                    return { ...super.exportJSON(),
                        type: "paragraph",
                        version: 1
                    }
                }
                insertNewAfter(i, l) {
                    i = de();
                    let o = this.getDirection();
                    return i.setDirection(o), this.insertAfter(i, l), i
                }
                collapseAtStart() {
                    let i = this.getChildren();
                    if (0 === i.length || B(i[0]) && "" === i[0].getTextContent().trim()) {
                        if (null !== this.getNextSibling()) return this.selectNext(), this.remove(), !0;
                        if (null !== this.getPreviousSibling()) return this.selectPrevious(), this.remove(), !0
                    }
                    return !1
                }
            };

            function Df(i) {
                let l = de();
                return i.style && (l.setFormat(i.style.textAlign), 0 < (i = parseInt(i.style.textIndent, 10) / 20) && l.setIndent(i)), {
                    node: l
                }
            }

            function de() {
                return Ac(new Cf)
            }

            function qf(i, l, o, s) {
                let _ = i._keyToDOMMap;
                _.clear(), i._editorState = Af(), i._pendingEditorState = s, i._compositionKey = null, i._dirtyType = 0, i._cloneNotNeeded.clear(), i._dirtyLeaves = new Set, i._dirtyElements.clear(), i._normalizedNodes = new Set, i._updateTags = new Set, i._updates = [], i._blockCursorElement = null, null !== (s = i._observer) && (s.disconnect(), i._observer = null), null !== l && (l.textContent = ""), null !== o && (o.textContent = "", _.set("root", o))
            }
            let Kf = class Kf {
                constructor(i, l, o, s, _, p, N) {
                    this._parentEditor = l, this._rootElement = null, this._editorState = i, this._compositionKey = this._pendingEditorState = null, this._deferred = [], this._keyToDOMMap = new Map, this._updates = [], this._updating = !1, this._listeners = {
                        decorator: new Set,
                        editable: new Set,
                        mutation: new Map,
                        root: new Set,
                        textcontent: new Set,
                        update: new Set
                    }, this._commands = new Map, this._config = s, this._nodes = o, this._decorators = {}, this._pendingDecorators = null, this._dirtyType = 0, this._cloneNotNeeded = new Set, this._dirtyLeaves = new Set, this._dirtyElements = new Map, this._normalizedNodes = new Set, this._updateTags = new Set, this._observer = null, this._key = mc(), this._onError = _, this._htmlConversions = p, this._editable = N, this._headless = null !== l && l._headless, this._blockCursorElement = this._window = null
                }
                isComposing() {
                    return null != this._compositionKey
                }
                registerUpdateListener(i) {
                    let l = this._listeners.update;
                    return l.add(i), () => {
                        l.delete(i)
                    }
                }
                registerEditableListener(i) {
                    let l = this._listeners.editable;
                    return l.add(i), () => {
                        l.delete(i)
                    }
                }
                registerDecoratorListener(i) {
                    let l = this._listeners.decorator;
                    return l.add(i), () => {
                        l.delete(i)
                    }
                }
                registerTextContentListener(i) {
                    let l = this._listeners.textcontent;
                    return l.add(i), () => {
                        l.delete(i)
                    }
                }
                registerRootListener(i) {
                    let l = this._listeners.root;
                    return i(this._rootElement, null), l.add(i), () => {
                        i(null, this._rootElement), l.delete(i)
                    }
                }
                registerCommand(i, l, o) {
                    void 0 === o && r(35);
                    let s = this._commands;
                    s.has(i) || s.set(i, [new Set, new Set, new Set, new Set, new Set]);
                    let _ = s.get(i);
                    void 0 === _ && r(36, String(i));
                    let p = _[o];
                    return p.add(l), () => {
                        p.delete(l), _.every(i => 0 === i.size) && s.delete(i)
                    }
                }
                registerMutationListener(i, l) {
                    void 0 === this._nodes.get(i.getType()) && r(37, i.name);
                    let o = this._listeners.mutation;
                    return o.set(l, i), () => {
                        o.delete(l)
                    }
                }
                registerNodeTransformToKlass(i, l) {
                    var o = i.getType();
                    return void 0 === (o = this._nodes.get(o)) && r(37, i.name), o.transforms.add(l), o
                }
                registerNodeTransform(i, l) {
                    var o, s = this.registerNodeTransformToKlass(i, l);
                    let _ = [s];
                    return null != (s = s.replaceWithKlass) && (s = this.registerNodeTransformToKlass(s, l), _.push(s)), o = i.getType(), w(this, () => {
                        var i = ac();
                        if (!i.isEmpty()) {
                            if ("root" === o) hc().markDirty();
                            else
                                for (let [, l] of i = i._nodeMap) l.markDirty()
                        }
                    }, null === this._pendingEditorState ? {
                        tag: "history-merge"
                    } : void 0), () => {
                        _.forEach(i => i.transforms.delete(l))
                    }
                }
                hasNode(i) {
                    return this._nodes.has(i.getType())
                }
                hasNodes(i) {
                    return i.every(this.hasNode.bind(this))
                }
                dispatchCommand(i, l) {
                    return O(this, i, l)
                }
                getDecorators() {
                    return this._decorators
                }
                getRootElement() {
                    return this._rootElement
                }
                getKey() {
                    return this._key
                }
                setRootElement(i) {
                    let l = this._rootElement;
                    if (i !== l) {
                        let p = qc(this._config.theme, "root");
                        var o = this._pendingEditorState || this._editorState;
                        if (this._rootElement = i, qf(this, l, i, o), null !== l) {
                            if (!this._config.disableEvents) {
                                0 !== te && 0 == --te && l.ownerDocument.removeEventListener("selectionchange", Xd);
                                var s = l.__lexicalEditor;
                                if (null != s) {
                                    if (null !== s._parentEditor) {
                                        var _ = lc(s);
                                        _ = _[_.length - 1]._key, to.get(_) === s && to.delete(_)
                                    } else to.delete(s._key);
                                    l.__lexicalEditor = null
                                }
                                for (_ = 0, s = Vd(l); _ < s.length; _++) s[_]();
                                l.__lexicalEventHandles = []
                            }
                            null != p && l.classList.remove(...p)
                        }
                        null !== i ? (o = (o = i.ownerDocument) && o.defaultView || null, (s = i.style).userSelect = "text", s.whiteSpace = "pre-wrap", s.wordBreak = "break-word", i.setAttribute("data-lexical-editor", "true"), this._window = o, this._dirtyType = 2, Bb(this), this._updateTags.add("history-merge"), pf(this), this._config.disableEvents || function(i, l) {
                            0 === te && i.ownerDocument.addEventListener("selectionchange", Xd), te++, i.__lexicalEditor = l;
                            let o = Vd(i);
                            for (let s = 0; s < e5.length; s++) {
                                let [_, p] = e5[s], N = "function" == typeof p ? i => {
                                    !0 !== i._lexicalHandled && (i._lexicalHandled = !0, l.isEditable() && p(i, l))
                                } : i => {
                                    if (!0 !== i._lexicalHandled && (i._lexicalHandled = !0, l.isEditable())) switch (_) {
                                        case "cut":
                                            return O(l, eh, i);
                                        case "copy":
                                            return O(l, eg, i);
                                        case "paste":
                                            return O(l, S, i);
                                        case "dragstart":
                                            return O(l, ea, i);
                                        case "dragover":
                                            return O(l, eu, i);
                                        case "dragend":
                                            return O(l, ed, i);
                                        case "focus":
                                            return O(l, ep, i);
                                        case "blur":
                                            return O(l, em, i);
                                        case "drop":
                                            return O(l, es, i)
                                    }
                                };
                                i.addEventListener(_, N), o.push(() => {
                                    i.removeEventListener(_, N)
                                })
                            }
                        }(i, this), null != p && i.classList.add(...p)) : (this._editorState = o, this._window = this._pendingEditorState = null), rf("root", this, !1, i, l)
                    }
                }
                getElementByKey(i) {
                    return this._keyToDOMMap.get(i) || null
                }
                getEditorState() {
                    return this._editorState
                }
                setEditorState(i, l) {
                    i.isEmpty() && r(38), Ab(this);
                    let o = this._pendingEditorState,
                        s = this._updateTags;
                    l = void 0 !== l ? l.tag : null, null === o || o.isEmpty() || (null != l && s.add(l), pf(this)), this._pendingEditorState = i, this._dirtyType = 2, this._dirtyElements.set("root", !1), this._compositionKey = null, null != l && s.add(l), pf(this)
                }
                parseEditorState(i, l) {
                    i = "string" == typeof i ? JSON.parse(i) : i;
                    let o = Af(),
                        s = tg,
                        _ = t_,
                        p = th,
                        N = this._dirtyElements,
                        T = this._dirtyLeaves,
                        S = this._cloneNotNeeded,
                        b = this._dirtyType;
                    this._dirtyElements = new Map, this._dirtyLeaves = new Set, this._cloneNotNeeded = new Set, this._dirtyType = 0, tg = o, t_ = !1, th = this;
                    try {
                        nf(i.root, this._nodes), l && l(), o._readOnly = !0
                    } catch (i) {
                        i instanceof Error && this._onError(i)
                    } finally {
                        this._dirtyElements = N, this._dirtyLeaves = T, this._cloneNotNeeded = S, this._dirtyType = b, tg = s, t_ = _, th = p
                    }
                    return o
                }
                update(i, l) {
                    w(this, i, l)
                }
                focus(i, l = {}) {
                    let o = this._rootElement;
                    null !== o && (o.setAttribute("autocapitalize", "off"), w(this, () => {
                        let i = v(),
                            o = hc();
                        null !== i ? i.dirty = !0 : 0 !== o.getChildrenSize() && ("rootStart" === l.defaultSelection ? o.selectStart() : o.selectEnd())
                    }, {
                        onUpdate: () => {
                            o.removeAttribute("autocapitalize"), i && i()
                        },
                        tag: "focus"
                    }), null === this._pendingEditorState && o.removeAttribute("autocapitalize"))
                }
                blur() {
                    var i = this._rootElement;
                    null !== i && i.blur(), null !== (i = vb(this._window)) && i.removeAllRanges()
                }
                isEditable() {
                    return this._editable
                }
                setEditable(i) {
                    this._editable !== i && (this._editable = i, rf("editable", this, !0, i))
                }
                toJSON() {
                    return {
                        editorState: this._editorState.toJSON()
                    }
                }
            };
            let gf = class gf extends xf {
                constructor(i, l) {
                    super(l), this.__colSpan = i, this.__rowSpan = 1
                }
                exportJSON() {
                    return { ...super.exportJSON(),
                        colSpan: this.__colSpan,
                        rowSpan: this.__rowSpan
                    }
                }
                getColSpan() {
                    return this.__colSpan
                }
                setColSpan(i) {
                    return this.getWritable().__colSpan = i, this
                }
                getRowSpan() {
                    return this.__rowSpan
                }
                setRowSpan(i) {
                    return this.getWritable().__rowSpan = i, this
                }
            };

            function P(i) {
                return i instanceof gf
            }
            let Lf = class Lf extends xf {};

            function Ue(i) {
                return i instanceof Lf
            }
            let Mf = class Mf extends xf {};

            function Te(i) {
                return i instanceof Mf
            }
            l.$addUpdateTag = function(i) {
                G(), F()._updateTags.add(i)
            }, l.$applyNodeReplacement = Ac, l.$copyNode = zc, l.$createLineBreakNode = ge, l.$createNodeSelection = Ze, l.$createParagraphNode = de, l.$createRangeSelection = function() {
                let i = new ze("root", 0, "element"),
                    l = new ze("root", 0, "element");
                return new Ne(i, l, 0, "")
            }, l.$createTabNode = ue, l.$createTextNode = J, l.$getAdjacentNode = tc, l.$getNearestNodeFromDOMNode = ub, l.$getNearestRootOrShadowRoot = xc, l.$getNodeByKey = I, l.$getPreviousSelection = oc, l.$getRoot = hc, l.$getSelection = v, l.$getTextContent = function() {
                let i = v();
                return null === i ? "" : i.getTextContent()
            }, l.$hasAncestor = wc, l.$hasUpdateTag = function(i) {
                return F()._updateTags.has(i)
            }, l.$insertNodes = function(i, l) {
                let o = v() || oc();
                return null === o && (o = hc().selectEnd()), o.insertNodes(i, l)
            }, l.$isBlockElementNode = Ye, l.$isDecoratorNode = z, l.$isElementNode = D, l.$isInlineElementOrDecoratorNode = function(i) {
                return D(i) && i.isInline() || z(i) && i.isInline()
            }, l.$isLeafNode = Xb, l.$isLineBreakNode = Yb, l.$isNodeSelection = Ud, l.$isParagraphNode = function(i) {
                return i instanceof Cf
            }, l.$isRangeSelection = C, l.$isRootNode = K, l.$isRootOrShadowRoot = yc, l.$isTabNode = function(i) {
                return i instanceof ye
            }, l.$isTextNode = B, l.$nodesOfType = function(i) {
                var l = ac();
                let o = l._readOnly,
                    s = i.getType();
                l = l._nodeMap;
                let _ = [];
                for (let [, p] of l) p instanceof i && p.__type === s && (o || p.isAttached()) && _.push(p);
                return _
            }, l.$normalizeSelection__EXPERIMENTAL = Gb, l.$parseSerializedNode = function(i) {
                return nf(i, F()._nodes)
            }, l.$selectAll = function() {
                var i = hc();
                yb(Gb(i = i.select(0, i.getChildrenSize())))
            }, l.$setCompositionKey = H, l.$setSelection = yb, l.$splitNode = Ec, l.BLUR_COMMAND = em, l.CAN_REDO_COMMAND = {}, l.CAN_UNDO_COMMAND = {}, l.CLEAR_EDITOR_COMMAND = {}, l.CLEAR_HISTORY_COMMAND = {}, l.CLICK_COMMAND = s, l.COMMAND_PRIORITY_CRITICAL = 4, l.COMMAND_PRIORITY_EDITOR = 0, l.COMMAND_PRIORITY_HIGH = 3, l.COMMAND_PRIORITY_LOW = 1, l.COMMAND_PRIORITY_NORMAL = 2, l.CONTROLLED_TEXT_INSERTION_COMMAND = T, l.COPY_COMMAND = eg, l.CUT_COMMAND = eh, l.DELETE_CHARACTER_COMMAND = _, l.DELETE_LINE_COMMAND = $, l.DELETE_WORD_COMMAND = R, l.DEPRECATED_$computeGridMap = Ve, l.DEPRECATED_$createGridSelection = function() {
                let i = new ze("root", 0, "element"),
                    l = new ze("root", 0, "element");
                return new Qe("root", i, l)
            }, l.DEPRECATED_$getGridCellNodeRect = Oe, l.DEPRECATED_$getNodeTriplet = Pe, l.DEPRECATED_$isGridCellNode = P, l.DEPRECATED_$isGridNode = Ue, l.DEPRECATED_$isGridRowNode = Te, l.DEPRECATED_$isGridSelection = Re, l.DEPRECATED_GridCellNode = gf, l.DEPRECATED_GridNode = Lf, l.DEPRECATED_GridRowNode = Mf, l.DRAGEND_COMMAND = ed, l.DRAGOVER_COMMAND = eu, l.DRAGSTART_COMMAND = ea, l.DROP_COMMAND = es, l.DecoratorNode = wf, l.ElementNode = xf, l.FOCUS_COMMAND = ep, l.FORMAT_ELEMENT_COMMAND = {}, l.FORMAT_TEXT_COMMAND = A, l.INDENT_CONTENT_COMMAND = {}, l.INSERT_LINE_BREAK_COMMAND = p, l.INSERT_PARAGRAPH_COMMAND = N, l.INSERT_TAB_COMMAND = {}, l.KEY_ARROW_DOWN_COMMAND = Q, l.KEY_ARROW_LEFT_COMMAND = j, l.KEY_ARROW_RIGHT_COMMAND = V, l.KEY_ARROW_UP_COMMAND = X, l.KEY_BACKSPACE_COMMAND = er, l.KEY_DELETE_COMMAND = el, l.KEY_DOWN_COMMAND = Y, l.KEY_ENTER_COMMAND = et, l.KEY_ESCAPE_COMMAND = ei, l.KEY_MODIFIER_COMMAND = ey, l.KEY_SPACE_COMMAND = en, l.KEY_TAB_COMMAND = eo, l.LineBreakNode = ee, l.MOVE_TO_END = U, l.MOVE_TO_START = Z, l.OUTDENT_CONTENT_COMMAND = {}, l.PASTE_COMMAND = S, l.ParagraphNode = Cf, l.REDO_COMMAND = W, l.REMOVE_TEXT_COMMAND = b, l.RootNode = zf, l.SELECTION_CHANGE_COMMAND = o, l.SELECT_ALL_COMMAND = e_, l.TabNode = ye, l.TextNode = me, l.UNDO_COMMAND = L, l.createCommand = function() {
                return {}
            }, l.createEditor = function(i) {
                let l, o;
                var s, _ = i || {},
                    p = th,
                    N = _.theme || {};
                let T = void 0 === i ? p : _.parentEditor || null,
                    S = _.disableEvents || !1,
                    b = Af(),
                    R = _.namespace || (null !== T ? T._config.namespace : mc()),
                    $ = _.editorState,
                    A = [zf, me, ee, ye, Cf, ..._.nodes || []],
                    L = _.onError;
                if (_ = void 0 === _.editable || _.editable, void 0 === i && null !== p) i = p._nodes;
                else
                    for (i = new Map, p = 0; p < A.length; p++) {
                        let l = A[p],
                            o = null;
                        var W = null;
                        "function" != typeof l && (l = (W = l).replace, o = W.with, W = W.withKlass ? W.withKlass : null);
                        let s = l.getType(),
                            _ = l.transform(),
                            N = new Set;
                        null !== _ && N.add(_), i.set(s, {
                            klass: l,
                            replace: o,
                            replaceWithKlass: W,
                            transforms: N
                        })
                    }
                return N = new Kf(b, T, i, {
                    disableEvents: S,
                    namespace: R,
                    theme: N
                }, L || console.error, (s = i, l = new Map, o = new Set, s.forEach(i => {
                    if (null != (i = null != i.klass.importDOM ? i.klass.importDOM.bind(i.klass) : null) && !o.has(i)) {
                        o.add(i);
                        var s = i();
                        null !== s && Object.keys(s).forEach(i => {
                            let o = l.get(i);
                            void 0 === o && (o = [], l.set(i, o)), o.push(s[i])
                        })
                    }
                }), l), _), void 0 !== $ && (N._pendingEditorState = $, N._dirtyType = 2), N
            }, l.getNearestEditorFromDOMNode = Mb, l.isHTMLAnchorElement = function(i) {
                return Hc(i) && "A" === i.tagName
            }, l.isHTMLElement = Hc, l.isSelectionCapturedInDecoratorInput = Kb, l.isSelectionWithinEditor = Lb
        }
    }
]);