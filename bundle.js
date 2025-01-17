// Web Page forked from https://disperse.app/
(function () {
  'use strict';

  function styleInject(css, ref) {
    if ( ref === void 0 ) { ref = {}; }
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css = "/*! normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\n html {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n";
  styleInject(css);

  var css$1 = "@charset \"UTF-8\";\n\n/* Import ET Book styles\n   adapted from https://github.com/edwardtufte/et-book/blob/gh-pages/et-book.css */\n\n@font-face {  font-family: \"Montserrat\";\n font-style: normal;\n font-display: swap;\n font-weight: 500;\n src: url(\"./files/montserrat-cyrillic-ext-500-normal.woff2\") format(\"woff2\"), url(\"./files/montserrat-all-500-normal.woff\") format(\"woff\");\n unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n }\n\n@font-face { font-family: \"Montserrat\";\n font-style: normal;\n font-display: swap;\n font-weight: 500;\n  src: url(\"./files/montserrat-cyrillic-ext-500-normal.woff2\") format(\"woff2\"), url(\"./files/montserrat-all-500-normal.woff\") format(\"woff\");\n unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n\n@font-face { font-family: \"Montserrat\";\n font-style: normal;\n font-display: swap;\n font-weight: 500;\n src: url(\"./files/montserrat-vietnamese-500-normal.woff2\") format(\"woff2\"), url(\"./files/montserrat-all-500-normal.woff\") format(\"woff\");\n unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n\n@font-face { font-family: \"Montserrat\";\n font-style: normal;\n font-display: swap;\n font-weight: 500;\n src: url(\"./files/montserrat-latin-ext-500-normal.woff2\") format(\"woff2\"), url(\"./files/montserrat-all-500-normal.woff\") format(\"woff\");\n unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n\n@font-face { font-family: \"Montserrat\";\n font-style: normal;\n font-display: swap;\n font-weight: 500;\n src: url(\"./files/montserrat-latin-500-normal.woff2\") format(\"woff2\"), url(\"./files/montserrat-all-500-normal.woff\") format(\"woff\");\n unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n\n/* Tufte CSS styles */\nhtml { font-size: 14px; }\n\nbody { width: 87.5%;\n       margin-left: auto;\n       margin-right: auto;\n       padding-left: 12.5%;\n       font-family: Montserrat, Palatino, \"Palatino Linotype\", \"Palatino LT STD\", \"Book Antiqua\", Georgia, serif;\n       background-color: #212529;\n       color: #6c757d;\n       max-width: 1400px;\n       counter-reset: sidenote-counter; }\n\nh1 { font-weight: 400;\n     margin-top: 4rem;\n     margin-bottom: 1.5rem;\n     font-size: 3.2rem;\n     line-height: 1; }\n\nh2 { font-style: italic;\n     font-weight: 400;\n     margin-top: 2.1rem;\n     margin-bottom: 1.4rem;\n     font-size: 2.2rem;\n     line-height: 1; }\n\nh3 { font-style: italic;\n     font-weight: 400;\n     font-size: 1.7rem;\n     margin-top: 2rem;\n     margin-bottom: 1.4rem;\n     line-height: 1; }\n\nhr { display: block;\n     height: 1px;\n     width: 55%;\n     border: 0;\n     border-top: 1px solid #ccc;\n     margin: 1em 0;\n     padding: 0; }\n\np.subtitle { font-style: italic;\n             margin-top: 1rem;\n             margin-bottom: 1rem;\n             font-size: 1.8rem;\n             display: block;\n             line-height: 1; }\n\n.numeral { font-family: et-book-roman-old-style; }\n\n.danger { color: #999395FF; }\n\narticle { position: relative;\n          padding: 5rem 0rem; }\n\nsection { padding-top: 1rem;\n          padding-bottom: 1rem; }\n\np, ol, ul { font-size: 1.4rem;\n            line-height: 2rem; }\n\np { margin-top: 1.4rem;\n    margin-bottom: 1.4rem;\n    padding-right: 0;\n    vertical-align: baseline; }\n\n/* Chapter Epigraphs */\ndiv.epigraph { margin: 5em 0; }\n\ndiv.epigraph > blockquote { margin-top: 3em;\n                            margin-bottom: 3em; }\n\ndiv.epigraph > blockquote, div.epigraph > blockquote > p { font-style: italic; }\n\ndiv.epigraph > blockquote > footer { font-style: normal; }\n\ndiv.epigraph > blockquote > footer > cite { font-style: italic; }\n/* end chapter epigraphs styles */\n\nblockquote { font-size: 1.4rem; }\n\nblockquote p { width: 55%;\n               margin-right: 40px; }\n\nblockquote footer { width: 55%;\n                    font-size: 1.1rem;\n                    text-align: right; }\n\n/* section > p, section > footer, section > table { width: 55%; } */\n\n/* 50 + 5 == 55, to be the same width as paragraph */\n/* section > ol, section > ul { width: 50%; */\n                             /* -webkit-padding-start: 5%; } */\n\nli:not(:first-child) { margin-top: 0.25rem; }\n\nfigure { padding: 0;\n         border: 0;\n         font-size: 100%;\n         font: inherit;\n         vertical-align: baseline;\n         max-width: 55%;\n         -webkit-margin-start: 0;\n         -webkit-margin-end: 0;\n         margin: 0 0 3em 0; }\n\nfigcaption { float: right;\n             clear: right;\n             margin-top: 0;\n             margin-bottom: 0;\n             font-size: 1.1rem;\n             line-height: 1.6;\n             vertical-align: baseline;\n             position: relative;\n             max-width: 40%; }\n\nfigure.fullwidth figcaption { margin-right: 24%; }\n\n/*         background: -webkit-linear-gradient(#fffff8, #fffff8), -webkit-linear-gradient(#fffff8, #fffff8), -webkit-linear-gradient(#333, #333);\n         background: linear-gradient(#fffff8, #fffff8), linear-gradient(#fffff8, #fffff8), linear-gradient(#333, #333);\n         -webkit-background-size: 0.05em 1px, 0.05em 1px, 1px 1px;\n         -moz-background-size: 0.05em 1px, 0.05em 1px, 1px 1px;\n         background-size: 0.05em 1px, 0.05em 1px, 1px 1px;\n         background-repeat: no-repeat, no-repeat, repeat-x;\n        background-position: 0% 93%, 100% 93%, 0% 93%; }\n\n@media screen and (-webkit-min-device-pixel-ratio: 0) { a:link { background-position-y: 87%, 87%, 87%; } }\n\na:link::selection { background: #6e0d0d; }\n\na:link::-moz-selection { text-shadow: 0.03em 0 #6e0d0d, -0.03em 0 #6e0d0d, 0 0.03em #6e0d0d, 0 -0.03em #6e0d0d, 0.06em 0 #6e0d0d, -0.06em 0 #6e0d0d, 0.09em 0 #6e0d0d, -0.09em 0 #6e0d0d, 0.12em 0 #6e0d0d, -0.12em 0 #6e0d0d, 0.15em 0 #6e0d0d, -0.15em 0 #6e0d0d;\n                         background: #6e0d0d; }\n\n/* Sidenotes, margin notes, figures, captions */\nimg { max-width: 100%; }\n\n.sidenote, .marginnote { float: right;\n                         clear: right;\n                         margin-right: -60%;\n                         width: 50%;\n                         margin-top: 0;\n                         margin-bottom: 0;\n                         font-size: 1.1rem;\n                         line-height: 1.3;\n                         vertical-align: baseline;\n                         position: relative; }\n\n.sidenote-number { counter-increment: sidenote-counter; }\n\n.sidenote-number:after, .sidenote:before { font-family: et-book-roman-old-style;\n                                           position: relative;\n                                           vertical-align: baseline; }\n\n.sidenote-number:after { content: counter(sidenote-counter);\n                         font-size: 1rem;\n                         top: -0.5rem;\n                         left: 0.1rem; }\n\n.sidenote:before { content: counter(sidenote-counter) \" \";\n                   font-size: 1rem;\n                   top: -0.5rem; }\n\nblockquote .sidenote, blockquote .marginnote { margin-right: -82%;\n                                               min-width: 59%;\n                                               text-align: left; }\n\ndiv.fullwidth, table.fullwidth { width: 100%; }\n\ndiv.table-wrapper { overflow-x: auto;\n                    font-family: \"Trebuchet MS\", \"Gill Sans\", \"Gill Sans MT\", sans-serif; }\n\n.sans { font-family: \"Gill Sans\", \"Gill Sans MT\", Calibri, sans-serif;\n        letter-spacing: .03em; }\n\ncode { font-family: Consolas, \"Liberation Mono\", Menlo, Courier, monospace;\n       font-size: 1.0rem;\n       line-height: 1.42; }\n\n.sans > code { font-size: 1.2rem; }\n\nh1 > code, h2 > code, h3 > code { font-size: 0.80em; }\n\n.marginnote > code, .sidenote > code { font-size: 1rem; }\n\npre.code { font-size: 0.9rem;\n           width: 52.5%;\n           margin-left: 2.5%;\n           overflow-x: auto; }\n\npre.code.fullwidth { width: 90%; }\n\n.fullwidth { max-width: 90%;\n             clear:both; }\n\nspan.newthought { font-variant: small-caps;\n                  font-size: 1.2em; }\n\ninput.margin-toggle { display: none; }\n\nlabel.sidenote-number { display: inline; }\n\nlabel.margin-toggle:not(.sidenote-number) { display: none; }\n\n.iframe-wrapper { position: relative;\n                  padding-bottom: 56.25%; /* 16:9 */\n                  padding-top: 25px;\n                  height: 0; }\n\n.iframe-wrapper iframe { position: absolute;\n                         top: 0;\n                         left: 0;\n                         width: 100%;\n                         height: 100%; }\n\n@media (max-width: 760px) { body { width: 84%;\n                                   padding-left: 8%;\n                                   padding-right: 8%; }\n                            hr, section > p, section > footer, section > table { width: 100%; }\n                            pre.code { width: 97%; }\n                            section > ol { width: 90%; }\n                            section > ul { width: 90%; }\n                            figure { max-width: 90%; }\n                            figcaption, figure.fullwidth figcaption { margin-right: 0%;\n                                                                      max-width: none; }\n                            blockquote { margin-left: 1.5em;\n                                         margin-right: 0em; }\n                            blockquote p, blockquote footer { width: 100%; }\n                            label.margin-toggle:not(.sidenote-number) { display: inline; }\n                            .sidenote, .marginnote { display: none; }\n                            .margin-toggle:checked + .sidenote,\n                            .margin-toggle:checked + .marginnote { display: block;\n                                                                   float: left;\n                                                                   left: 1rem;\n                                                                   clear: both;\n                                                                   width: 95%;\n                                                                   margin: 1rem 2.5%;\n                                                                   vertical-align: baseline;\n                                                                   position: relative; }\n                            label { cursor: pointer; }\n                            div.table-wrapper, table { width: 85%; }\n                            img { width: 100%; } }\n";
  styleInject(css$1);

  var css$2 = "body {\n  padding-left: 0 !important; }\n\narticle {\n  margin: auto;\n  max-width: 600px; }\n\n.row {\n  padding-bottom: 1em; }\n\n.inline {\n  display: inline-block; }\n\n.block {\n  display: block; }\n\n.pr {\n  padding-right: 1em; }\n\n.pb {\n  padding-bottom: 1em; }\n\n.flex {\n  display: flex;\n  /* border: 1px goldenrod solid */\n  width: 100%; }\n\n.fg {\n  flex-grow: 1; }\n\n.bar {\n  flex-grow: 1;\n  margin: auto 0.3em;\n  border-bottom: 1px black solid; }\n\n.end-bar {\n  flex-grow: 1;\n  margin: auto 0;\n  height: 1.4rem;\n  border-bottom: 1px black solid; }\n\n.eth {\n  display: inline-block;\n  position: relative;\n  margin-left: -50px;\n  bottom: 20px; }\n\ninput, label {\n  font-size: 1.4rem;\n  line-height: 2rem; }\n\nul {\n  list-style: none;\n  padding-left: 0; }\n\n.shadow {\n  width: 100%;\n  padding-right: 6px; }\n\ntextarea {\n  display: block;\n  border: none;\n  border-bottom: 2px #111111 solid;\n  background: #d2d4d6;\n  padding: .7rem;\n  font-size: 1.4rem;\n  width: 100%;\n  position: relative;\n  height: 8.4rem;\n  resize: none;\n  margin-bottom: 1.4rem; }\n\ntextarea:focus {\n  outline: none; }\n\ninput[type=\"submit\"] {\n  border: none;\n  font-style: italic;\n  padding: .7rem;\n  background: #631121;\n  box-shadow: 6px 6px #999395FF; }\n\ninput[type=\"submit\"]:focus {\n  outline: none; }\n\n.red {\n  color: #999395FF; }\n\n.info {\n  display: flex;\n  align-items: baseline; }\n\n.info > div {\n  font-size: 1.4rem;\n  margin-left: 1.4rem; }\n\n.rows > * {\n  padding-bottom: 1rem; }\n\n.error {\n  font-style: italic;\n  color: #999395FF; }\n\n.pending {\n  font-style: italic;\n  color: rgba(0, 0, 0, 0.6); }\n\n.expand {\n  flex-grow: 1; }\n";
  styleInject(css$2);

  /**
   * Shorter and fast way to select a single node in the DOM
   * @param   { String } selector - unique dom selector
   * @param   { Object } ctx - DOM node where the target of our search will is located
   * @returns { Object } dom node found
   */
  function $(selector, ctx) {
    return (ctx || document).querySelector(selector)
  }

  var
    // be aware, internal usage
    // ATTENTION: prefix the global dynamic variables with `__`
    // tags instances cache
    __TAGS_CACHE = [],
    // tags implementation cache
    __TAG_IMPL = {},
    YIELD_TAG = 'yield',

    /**
     * Const
     */
    GLOBAL_MIXIN = '__global_mixin',

    // riot specific prefixes or attributes
    ATTRS_PREFIX = 'riot-',

    // Riot Directives
    REF_DIRECTIVES = ['ref', 'data-ref'],
    IS_DIRECTIVE = 'data-is',
    CONDITIONAL_DIRECTIVE = 'if',
    LOOP_DIRECTIVE = 'each',
    LOOP_NO_REORDER_DIRECTIVE = 'no-reorder',
    SHOW_DIRECTIVE = 'show',
    HIDE_DIRECTIVE = 'hide',
    KEY_DIRECTIVE = 'key',
    RIOT_EVENTS_KEY = '__riot-events__',

    // for typeof == '' comparisons
    T_STRING = 'string',
    T_OBJECT = 'object',
    T_UNDEF  = 'undefined',
    T_FUNCTION = 'function',

    XLINK_NS = 'http://www.w3.org/1999/xlink',
    SVG_NS = 'http://www.w3.org/2000/svg',
    XLINK_REGEX = /^xlink:(\w+)/,

    WIN = typeof window === T_UNDEF ? /* istanbul ignore next */ undefined : window,

    // special native tags that cannot be treated like the others
    RE_SPECIAL_TAGS = /^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?|opt(?:ion|group))$/,
    RE_SPECIAL_TAGS_NO_OPTION = /^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?)$/,
    RE_EVENTS_PREFIX = /^on/,
    RE_HTML_ATTRS = /([-\w]+) ?= ?(?:"([^"]*)|'([^']*)|({[^}]*}))/g,
    // some DOM attributes must be normalized
    CASE_SENSITIVE_ATTRIBUTES = {
      'viewbox': 'viewBox',
      'preserveaspectratio': 'preserveAspectRatio'
    },
    /**
     * Matches boolean HTML attributes in the riot tag definition.
     * With a long list like this, a regex is faster than `[].indexOf` in most browsers.
     * @const {RegExp}
     * @see [attributes.md](https://github.com/riot/compiler/blob/dev/doc/attributes.md)
     */
    RE_BOOL_ATTRS = /^(?:disabled|checked|readonly|required|allowfullscreen|auto(?:focus|play)|compact|controls|default|formnovalidate|hidden|ismap|itemscope|loop|multiple|muted|no(?:resize|shade|validate|wrap)?|open|reversed|seamless|selected|sortable|truespeed|typemustmatch)$/,
    // version# for IE 8-11, 0 for others
    IE_VERSION = (WIN && WIN.document || /* istanbul ignore next */ {}).documentMode | 0;

  /**
   * Create a generic DOM node
   * @param   { String } name - name of the DOM node we want to create
   * @returns { Object } DOM node just created
   */
  function makeElement(name) {
    return name === 'svg' ? document.createElementNS(SVG_NS, name) : document.createElement(name)
  }

  /**
   * Set any DOM attribute
   * @param { Object } dom - DOM node we want to update
   * @param { String } name - name of the property we want to set
   * @param { String } val - value of the property we want to set
   */
  function setAttribute(dom, name, val) {
    var xlink = XLINK_REGEX.exec(name);
    if (xlink && xlink[1])
      { dom.setAttributeNS(XLINK_NS, xlink[1], val); }
    else
      { dom.setAttribute(name, val); }
  }

  var styleNode;
  // Create cache and shortcut to the correct property
  var cssTextProp;
  var byName = {};
  var needsInject = false;

  // skip the following code on the server
  if (WIN) {
    styleNode = ((function () {
      // create a new style element with the correct type
      var newNode = makeElement('style');
      // replace any user node or insert the new one into the head
      var userNode = $('style[type=riot]');

      setAttribute(newNode, 'type', 'text/css');
      /* istanbul ignore next */
      if (userNode) {
        if (userNode.id) { newNode.id = userNode.id; }
        userNode.parentNode.replaceChild(newNode, userNode);
      } else { document.head.appendChild(newNode); }

      return newNode
    }))();
    cssTextProp = styleNode.styleSheet;
  }

  /**
   * Object that will be used to inject and manage the css of every tag instance
   */
  var styleManager = {
    styleNode: styleNode,
    /**
     * Save a tag style to be later injected into DOM
     * @param { String } css - css string
     * @param { String } name - if it's passed we will map the css to a tagname
     */
    add: function add(css, name) {
      byName[name] = css;
      needsInject = true;
    },
    /**
     * Inject all previously saved tag styles into DOM
     * innerHTML seems slow: http://jsperf.com/riot-insert-style
     */
    inject: function inject() {
      if (!WIN || !needsInject) { return }
      needsInject = false;
      var style = Object.keys(byName)
        .map(function (k) { return byName[k]; })
        .join('\n');
      /* istanbul ignore next */
      if (cssTextProp) { cssTextProp.cssText = style; }
      else { styleNode.innerHTML = style; }
    },

    /**
     * Remove a tag style of injected DOM later.
     * @param {String} name a registered tagname
     */
    remove: function remove(name) {
      delete byName[name];
      needsInject = true;
    }
  };

  /**
   * The riot template engine
   * @version v3.0.8
   */

  var skipRegex = (function () { //eslint-disable-line no-unused-vars

    var beforeReChars = '[{(,;:?=|&!^~>%*/';

    var beforeReWords = [
      'case',
      'default',
      'do',
      'else',
      'in',
      'instanceof',
      'prefix',
      'return',
      'typeof',
      'void',
      'yield'
    ];

    var wordsLastChar = beforeReWords.reduce(function (s, w) {
      return s + w.slice(-1)
    }, '');

    var RE_REGEX = /^\/(?=[^*>/])[^[/\\]*(?:(?:\\.|\[(?:\\.|[^\]\\]*)*\])[^[\\/]*)*?\/[gimuy]*/;
    var RE_VN_CHAR = /[$\w]/;

    function prev (code, pos) {
      while (--pos >= 0 && /\s/.test(code[pos])){ }
      return pos
    }

    function _skipRegex (code, start) {

      var re = /.*/g;
      var pos = re.lastIndex = start++;
      var match = re.exec(code)[0].match(RE_REGEX);

      if (match) {
        var next = pos + match[0].length;

        pos = prev(code, pos);
        var c = code[pos];

        if (pos < 0 || ~beforeReChars.indexOf(c)) {
          return next
        }

        if (c === '.') {

          if (code[pos - 1] === '.') {
            start = next;
          }

        } else if (c === '+' || c === '-') {

          if (code[--pos] !== c ||
              (pos = prev(code, pos)) < 0 ||
              !RE_VN_CHAR.test(code[pos])) {
            start = next;
          }

        } else if (~wordsLastChar.indexOf(c)) {

          var end = pos + 1;

          while (--pos >= 0 && RE_VN_CHAR.test(code[pos])){ }
          if (~beforeReWords.indexOf(code.slice(pos + 1, end))) {
            start = next;
          }
        }
      }

      return start
    }

    return _skipRegex

  })();

  /**
   * riot.util.brackets
   *
   * - `brackets    ` - Returns a string or regex based on its parameter
   * - `brackets.set` - Change the current riot brackets
   *
   * @module
   */

  /* global riot */

  var brackets = (function (UNDEF) {

    var
      REGLOB = 'g',

      R_MLCOMMS = /\/\*[^*]*\*+(?:[^*\/][^*]*\*+)*\//g,

      R_STRINGS = /"[^"\\]*(?:\\[\S\s][^"\\]*)*"|'[^'\\]*(?:\\[\S\s][^'\\]*)*'|`[^`\\]*(?:\\[\S\s][^`\\]*)*`/g,

      S_QBLOCKS = R_STRINGS.source + '|' +
        /(?:\breturn\s+|(?:[$\w\)\]]|\+\+|--)\s*(\/)(?![*\/]))/.source + '|' +
        /\/(?=[^*\/])[^[\/\\]*(?:(?:\[(?:\\.|[^\]\\]*)*\]|\\.)[^[\/\\]*)*?([^<]\/)[gim]*/.source,

      UNSUPPORTED = RegExp('[\\' + 'x00-\\x1F<>a-zA-Z0-9\'",;\\\\]'),

      NEED_ESCAPE = /(?=[[\]()*+?.^$|])/g,

      S_QBLOCK2 = R_STRINGS.source + '|' + /(\/)(?![*\/])/.source,

      FINDBRACES = {
        '(': RegExp('([()])|'   + S_QBLOCK2, REGLOB),
        '[': RegExp('([[\\]])|' + S_QBLOCK2, REGLOB),
        '{': RegExp('([{}])|'   + S_QBLOCK2, REGLOB)
      },

      DEFAULT = '{ }';

    var _pairs = [
      '{', '}',
      '{', '}',
      /{[^}]*}/,
      /\\([{}])/g,
      /\\({)|{/g,
      RegExp('\\\\(})|([[({])|(})|' + S_QBLOCK2, REGLOB),
      DEFAULT,
      /^\s*{\^?\s*([$\w]+)(?:\s*,\s*(\S+))?\s+in\s+(\S.*)\s*}/,
      /(^|[^\\]){=[\S\s]*?}/
    ];

    var
      cachedBrackets = UNDEF,
      _regex,
      _cache = [],
      _settings;

    function _loopback (re) { return re }

    function _rewrite (re, bp) {
      if (!bp) { bp = _cache; }
      return new RegExp(
        re.source.replace(/{/g, bp[2]).replace(/}/g, bp[3]), re.global ? REGLOB : ''
      )
    }

    function _create (pair) {
      if (pair === DEFAULT) { return _pairs }

      var arr = pair.split(' ');

      if (arr.length !== 2 || UNSUPPORTED.test(pair)) {
        throw new Error('Unsupported brackets "' + pair + '"')
      }
      arr = arr.concat(pair.replace(NEED_ESCAPE, '\\').split(' '));

      arr[4] = _rewrite(arr[1].length > 1 ? /{[\S\s]*?}/ : _pairs[4], arr);
      arr[5] = _rewrite(pair.length > 3 ? /\\({|})/g : _pairs[5], arr);
      arr[6] = _rewrite(_pairs[6], arr);
      arr[7] = RegExp('\\\\(' + arr[3] + ')|([[({])|(' + arr[3] + ')|' + S_QBLOCK2, REGLOB);
      arr[8] = pair;
      return arr
    }

    function _brackets (reOrIdx) {
      return reOrIdx instanceof RegExp ? _regex(reOrIdx) : _cache[reOrIdx]
    }

    _brackets.split = function split (str, tmpl, _bp) {
      // istanbul ignore next: _bp is for the compiler
      if (!_bp) { _bp = _cache; }

      var
        parts = [],
        match,
        isexpr,
        start,
        pos,
        re = _bp[6];

      var qblocks = [];
      var prevStr = '';
      var mark, lastIndex;

      isexpr = start = re.lastIndex = 0;

      while ((match = re.exec(str))) {

        lastIndex = re.lastIndex;
        pos = match.index;

        if (isexpr) {

          if (match[2]) {

            var ch = match[2];
            var rech = FINDBRACES[ch];
            var ix = 1;

            rech.lastIndex = lastIndex;
            while ((match = rech.exec(str))) {
              if (match[1]) {
                if (match[1] === ch) { ++ix; }
                else if (!--ix) { break }
              } else {
                rech.lastIndex = pushQBlock(match.index, rech.lastIndex, match[2]);
              }
            }
            re.lastIndex = ix ? str.length : rech.lastIndex;
            continue
          }

          if (!match[3]) {
            re.lastIndex = pushQBlock(pos, lastIndex, match[4]);
            continue
          }
        }

        if (!match[1]) {
          unescapeStr(str.slice(start, pos));
          start = re.lastIndex;
          re = _bp[6 + (isexpr ^= 1)];
          re.lastIndex = start;
        }
      }

      if (str && start < str.length) {
        unescapeStr(str.slice(start));
      }

      parts.qblocks = qblocks;

      return parts

      function unescapeStr (s) {
        if (prevStr) {
          s = prevStr + s;
          prevStr = '';
        }
        if (tmpl || isexpr) {
          parts.push(s && s.replace(_bp[5], '$1'));
        } else {
          parts.push(s);
        }
      }

      function pushQBlock(_pos, _lastIndex, slash) { //eslint-disable-line
        if (slash) {
          _lastIndex = skipRegex(str, _pos);
        }

        if (tmpl && _lastIndex > _pos + 2) {
          mark = '\u2057' + qblocks.length + '~';
          qblocks.push(str.slice(_pos, _lastIndex));
          prevStr += str.slice(start, _pos) + mark;
          start = _lastIndex;
        }
        return _lastIndex
      }
    };

    _brackets.hasExpr = function hasExpr (str) {
      return _cache[4].test(str)
    };

    _brackets.loopKeys = function loopKeys (expr) {
      var m = expr.match(_cache[9]);

      return m
        ? { key: m[1], pos: m[2], val: _cache[0] + m[3].trim() + _cache[1] }
        : { val: expr.trim() }
    };

    _brackets.array = function array (pair) {
      return pair ? _create(pair) : _cache
    };

    function _reset (pair) {
      if ((pair || (pair = DEFAULT)) !== _cache[8]) {
        _cache = _create(pair);
        _regex = pair === DEFAULT ? _loopback : _rewrite;
        _cache[9] = _regex(_pairs[9]);
      }
      cachedBrackets = pair;
    }

    function _setSettings (o) {
      var b;

      o = o || {};
      b = o.brackets;
      Object.defineProperty(o, 'brackets', {
        set: _reset,
        get: function () { return cachedBrackets },
        enumerable: true
      });
      _settings = o;
      _reset(b);
    }

    Object.defineProperty(_brackets, 'settings', {
      set: _setSettings,
      get: function () { return _settings }
    });

    /* istanbul ignore next: in the browser riot is always in the scope */
    _brackets.settings = typeof riot !== 'undefined' && riot.settings || {};
    _brackets.set = _reset;
    _brackets.skipRegex = skipRegex;

    _brackets.R_STRINGS = R_STRINGS;
    _brackets.R_MLCOMMS = R_MLCOMMS;
    _brackets.S_QBLOCKS = S_QBLOCKS;
    _brackets.S_QBLOCK2 = S_QBLOCK2;

    return _brackets

  })();

  /**
   * @module tmpl
   *
   * tmpl          - Root function, returns the template value, render with data
   * tmpl.hasExpr  - Test the existence of a expression inside a string
   * tmpl.loopKeys - Get the keys for an 'each' loop (used by `_each`)
   */

  var tmpl = (function () {

    var _cache = {};

    function _tmpl (str, data) {
      if (!str) { return str }

      return (_cache[str] || (_cache[str] = _create(str))).call(
        data, _logErr.bind({
          data: data,
          tmpl: str
        })
      )
    }

    _tmpl.hasExpr = brackets.hasExpr;

    _tmpl.loopKeys = brackets.loopKeys;

    // istanbul ignore next
    _tmpl.clearCache = function () { _cache = {}; };

    _tmpl.errorHandler = null;

    function _logErr (err, ctx) {

      err.riotData = {
        tagName: ctx && ctx.__ && ctx.__.tagName,
        _riot_id: ctx && ctx._riot_id  //eslint-disable-line camelcase
      };

      if (_tmpl.errorHandler) { _tmpl.errorHandler(err); }
      else if (
        typeof console !== 'undefined' &&
        typeof console.error === 'function'
      ) {
        console.error(err.message);
        console.log('<%s> %s', err.riotData.tagName || 'Unknown tag', this.tmpl); // eslint-disable-line
        console.log(this.data); // eslint-disable-line
      }
    }

    function _create (str) {
      var expr = _getTmpl(str);

      if (expr.slice(0, 11) !== 'try{return ') { expr = 'return ' + expr; }

      return new Function('E', expr + ';')    // eslint-disable-line no-new-func
    }

    var RE_DQUOTE = /\u2057/g;
    var RE_QBMARK = /\u2057(\d+)~/g;

    function _getTmpl (str) {
      var parts = brackets.split(str.replace(RE_DQUOTE, '"'), 1);
      var qstr = parts.qblocks;
      var expr;

      if (parts.length > 2 || parts[0]) {
        var i, j, list = [];

        for (i = j = 0; i < parts.length; ++i) {

          expr = parts[i];

          if (expr && (expr = i & 1

              ? _parseExpr(expr, 1, qstr)

              : '"' + expr
                  .replace(/\\/g, '\\\\')
                  .replace(/\r\n?|\n/g, '\\n')
                  .replace(/"/g, '\\"') +
                '"'

            )) { list[j++] = expr; }

        }

        expr = j < 2 ? list[0]
             : '[' + list.join(',') + '].join("")';

      } else {

        expr = _parseExpr(parts[1], 0, qstr);
      }

      if (qstr.length) {
        expr = expr.replace(RE_QBMARK, function (_, pos) {
          return qstr[pos]
            .replace(/\r/g, '\\r')
            .replace(/\n/g, '\\n')
        });
      }
      return expr
    }

    var RE_CSNAME = /^(?:(-?[_A-Za-z\xA0-\xFF][-\w\xA0-\xFF]*)|\u2057(\d+)~):/;
    var
      RE_BREND = {
        '(': /[()]/g,
        '[': /[[\]]/g,
        '{': /[{}]/g
      };

    function _parseExpr (expr, asText, qstr) {

      expr = expr
        .replace(/\s+/g, ' ').trim()
        .replace(/\ ?([[\({},?\.:])\ ?/g, '$1');

      if (expr) {
        var
          list = [],
          cnt = 0,
          match;

        while (expr &&
              (match = expr.match(RE_CSNAME)) &&
              !match.index
          ) {
          var
            key,
            jsb,
            re = /,|([[{(])|$/g;

          expr = RegExp.rightContext;
          key  = match[2] ? qstr[match[2]].slice(1, -1).trim().replace(/\s+/g, ' ') : match[1];

          while (jsb = (match = re.exec(expr))[1]) { skipBraces(jsb, re); }

          jsb  = expr.slice(0, match.index);
          expr = RegExp.rightContext;

          list[cnt++] = _wrapExpr(jsb, 1, key);
        }

        expr = !cnt ? _wrapExpr(expr, asText)
             : cnt > 1 ? '[' + list.join(',') + '].join(" ").trim()' : list[0];
      }
      return expr

      function skipBraces (ch, re) {
        var
          mm,
          lv = 1,
          ir = RE_BREND[ch];

        ir.lastIndex = re.lastIndex;
        while (mm = ir.exec(expr)) {
          if (mm[0] === ch) { ++lv; }
          else if (!--lv) { break }
        }
        re.lastIndex = lv ? expr.length : ir.lastIndex;
      }
    }

    // istanbul ignore next: not both
    var // eslint-disable-next-line max-len
      JS_CONTEXT = '"in this?this:' + (typeof window !== 'object' ? 'global' : 'window') + ').',
      JS_VARNAME = /[,{][\$\w]+(?=:)|(^ *|[^$\w\.{])(?!(?:typeof|true|false|null|undefined|in|instanceof|is(?:Finite|NaN)|void|NaN|new|Date|RegExp|Math)(?![$\w]))([$_A-Za-z][$\w]*)/g,
      JS_NOPROPS = /^(?=(\.[$\w]+))\1(?:[^.[(]|$)/;

    function _wrapExpr (expr, asText, key) {
      var tb;

      expr = expr.replace(JS_VARNAME, function (match, p, mvar, pos, s) {
        if (mvar) {
          pos = tb ? 0 : pos + match.length;

          if (mvar !== 'this' && mvar !== 'global' && mvar !== 'window') {
            match = p + '("' + mvar + JS_CONTEXT + mvar;
            if (pos) { tb = (s = s[pos]) === '.' || s === '(' || s === '['; }
          } else if (pos) {
            tb = !JS_NOPROPS.test(s.slice(pos));
          }
        }
        return match
      });

      if (tb) {
        expr = 'try{return ' + expr + '}catch(e){E(e,this)}';
      }

      if (key) {

        expr = (tb
            ? 'function(){' + expr + '}.call(this)' : '(' + expr + ')'
          ) + '?"' + key + '":""';

      } else if (asText) {

        expr = 'function(v){' + (tb
            ? expr.replace('return ', 'v=') : 'v=(' + expr + ')'
          ) + ';return v||v===0?v:""}.call(this)';
      }

      return expr
    }

    _tmpl.version = brackets.version = 'v3.0.8';

    return _tmpl

  })();

  var observable = function(el) {

    /**
     * Extend the original object or create a new empty one
     * @type { Object }
     */

    el = el || {};

    /**
     * Private variables
     */
    var callbacks = {},
      slice = Array.prototype.slice;

    /**
     * Public Api
     */

    // extend the el object adding the observable methods
    Object.defineProperties(el, {
      /**
       * Listen to the given `event` ands
       * execute the `callback` each time an event is triggered.
       * @param  { String } event - event id
       * @param  { Function } fn - callback function
       * @returns { Object } el
       */
      on: {
        value: function(event, fn) {
          if (typeof fn == 'function')
            { (callbacks[event] = callbacks[event] || []).push(fn); }
          return el
        },
        enumerable: false,
        writable: false,
        configurable: false
      },

      /**
       * Removes the given `event` listeners
       * @param   { String } event - event id
       * @param   { Function } fn - callback function
       * @returns { Object } el
       */
      off: {
        value: function(event, fn) {
          if (event == '*' && !fn) { callbacks = {}; }
          else {
            if (fn) {
              var arr = callbacks[event];
              for (var i = 0, cb; cb = arr && arr[i]; ++i) {
                if (cb == fn) { arr.splice(i--, 1); }
              }
            } else { delete callbacks[event]; }
          }
          return el
        },
        enumerable: false,
        writable: false,
        configurable: false
      },

      /**
       * Listen to the given `event` and
       * execute the `callback` at most once
       * @param   { String } event - event id
       * @param   { Function } fn - callback function
       * @returns { Object } el
       */
      one: {
        value: function(event, fn) {
          function on() {
            el.off(event, on);
            fn.apply(el, arguments);
          }
          return el.on(event, on)
        },
        enumerable: false,
        writable: false,
        configurable: false
      },

      /**
       * Execute all callback functions that listen to
       * the given `event`
       * @param   { String } event - event id
       * @returns { Object } el
       */
      trigger: {
        value: function(event) {
          var arguments$1 = arguments;


          // getting the arguments
          var arglen = arguments.length - 1,
            args = new Array(arglen),
            fns,
            fn,
            i;

          for (i = 0; i < arglen; i++) {
            args[i] = arguments$1[i + 1]; // skip first argument
          }

          fns = slice.call(callbacks[event] || [], 0);

          for (i = 0; fn = fns[i]; ++i) {
            fn.apply(el, args);
          }

          if (callbacks['*'] && event != '*')
            { el.trigger.apply(el, ['*', event].concat(args)); }

          return el
        },
        enumerable: false,
        writable: false,
        configurable: false
      }
    });

    return el

  };

  /**
   * Short alias for Object.getOwnPropertyDescriptor
   */
  function getPropDescriptor (o, k) {
    return Object.getOwnPropertyDescriptor(o, k)
  }

  /**
   * Check if passed argument is undefined
   * @param   { * } value -
   * @returns { Boolean } -
   */
  function isUndefined(value) {
    return typeof value === T_UNDEF
  }

  /**
   * Check whether object's property could be overridden
   * @param   { Object }  obj - source object
   * @param   { String }  key - object property
   * @returns { Boolean } true if writable
   */
  function isWritable(obj, key) {
    var descriptor = getPropDescriptor(obj, key);
    return isUndefined(obj[key]) || descriptor && descriptor.writable
  }

  /**
   * Extend any object with other properties
   * @param   { Object } src - source object
   * @returns { Object } the resulting extended object
   *
   * var obj = { foo: 'baz' }
   * extend(obj, {bar: 'bar', foo: 'bar'})
   * console.log(obj) => {bar: 'bar', foo: 'bar'}
   *
   */
  function extend(src) {
    var obj;
    var i = 1;
    var args = arguments;
    var l = args.length;

    for (; i < l; i++) {
      if (obj = args[i]) {
        for (var key in obj) {
          // check if this property of the source object could be overridden
          if (isWritable(src, key))
            { src[key] = obj[key]; }
        }
      }
    }
    return src
  }

  /**
   * Alias for Object.create
   */
  function create(src) {
    return Object.create(src)
  }

  var settings = extend(create(brackets.settings), {
    skipAnonymousTags: true,
    // the "value" attributes will be preserved
    keepValueAttributes: false,
    // handle the auto updates on any DOM event
    autoUpdate: true
  });

  /**
   * Shorter and fast way to select multiple nodes in the DOM
   * @param   { String } selector - DOM selector
   * @param   { Object } ctx - DOM node where the targets of our search will is located
   * @returns { Object } dom nodes found
   */
  function $$(selector, ctx) {
    return [].slice.call((ctx || document).querySelectorAll(selector))
  }

  /**
   * Create a document text node
   * @returns { Object } create a text node to use as placeholder
   */
  function createDOMPlaceholder() {
    return document.createTextNode('')
  }

  /**
   * Toggle the visibility of any DOM node
   * @param   { Object }  dom - DOM node we want to hide
   * @param   { Boolean } show - do we want to show it?
   */

  function toggleVisibility(dom, show) {
    dom.style.display = show ? '' : 'none';
    dom.hidden = show ? false : true;
  }

  /**
   * Get the value of any DOM attribute on a node
   * @param   { Object } dom - DOM node we want to parse
   * @param   { String } name - name of the attribute we want to get
   * @returns { String | undefined } name of the node attribute whether it exists
   */
  function getAttribute(dom, name) {
    return dom.getAttribute(name)
  }

  /**
   * Remove any DOM attribute from a node
   * @param   { Object } dom - DOM node we want to update
   * @param   { String } name - name of the property we want to remove
   */
  function removeAttribute(dom, name) {
    dom.removeAttribute(name);
  }

  /**
   * Set the inner html of any DOM node SVGs included
   * @param { Object } container - DOM node where we'll inject new html
   * @param { String } html - html to inject
   * @param { Boolean } isSvg - svg tags should be treated a bit differently
   */
  /* istanbul ignore next */
  function setInnerHTML(container, html, isSvg) {
    // innerHTML is not supported on svg tags so we neet to treat them differently
    if (isSvg) {
      var node = container.ownerDocument.importNode(
        new DOMParser()
          .parseFromString(("<svg xmlns=\"" + SVG_NS + "\">" + html + "</svg>"), 'application/xml')
          .documentElement,
        true
      );

      container.appendChild(node);
    } else {
      container.innerHTML = html;
    }
  }

  /**
   * Minimize risk: only zero or one _space_ between attr & value
   * @param   { String }   html - html string we want to parse
   * @param   { Function } fn - callback function to apply on any attribute found
   */
  function walkAttributes(html, fn) {
    if (!html) { return }
    var m;
    while (m = RE_HTML_ATTRS.exec(html))
      { fn(m[1].toLowerCase(), m[2] || m[3] || m[4]); }
  }

  /**
   * Create a document fragment
   * @returns { Object } document fragment
   */
  function createFragment() {
    return document.createDocumentFragment()
  }

  /**
   * Insert safely a tag to fix #1962 #1649
   * @param   { HTMLElement } root - children container
   * @param   { HTMLElement } curr - node to insert
   * @param   { HTMLElement } next - node that should preceed the current node inserted
   */
  function safeInsert(root, curr, next) {
    root.insertBefore(curr, next.parentNode && next);
  }

  /**
   * Convert a style object to a string
   * @param   { Object } style - style object we need to parse
   * @returns { String } resulting css string
   * @example
   * styleObjectToString({ color: 'red', height: '10px'}) // => 'color: red; height: 10px'
   */
  function styleObjectToString(style) {
    return Object.keys(style).reduce(function (acc, prop) {
      return (acc + " " + prop + ": " + (style[prop]) + ";")
    }, '')
  }

  /**
   * Walk down recursively all the children tags starting dom node
   * @param   { Object }   dom - starting node where we will start the recursion
   * @param   { Function } fn - callback to transform the child node just found
   * @param   { Object }   context - fn can optionally return an object, which is passed to children
   */
  function walkNodes(dom, fn, context) {
    if (dom) {
      var res = fn(dom, context);
      var next;
      // stop the recursion
      if (res === false) { return }

      dom = dom.firstChild;

      while (dom) {
        next = dom.nextSibling;
        walkNodes(dom, fn, res);
        dom = next;
      }
    }
  }



  var dom = /*#__PURE__*/Object.freeze({
    $$: $$,
    $: $,
    createDOMPlaceholder: createDOMPlaceholder,
    mkEl: makeElement,
    setAttr: setAttribute,
    toggleVisibility: toggleVisibility,
    getAttr: getAttribute,
    remAttr: removeAttribute,
    setInnerHTML: setInnerHTML,
    walkAttrs: walkAttributes,
    createFrag: createFragment,
    safeInsert: safeInsert,
    styleObjectToString: styleObjectToString,
    walkNodes: walkNodes
  });

  /**
   * Check against the null and undefined values
   * @param   { * }  value -
   * @returns {Boolean} -
   */
  function isNil(value) {
    return isUndefined(value) || value === null
  }

  /**
   * Check if passed argument is empty. Different from falsy, because we dont consider 0 or false to be blank
   * @param { * } value -
   * @returns { Boolean } -
   */
  function isBlank(value) {
    return isNil(value) || value === ''
  }

  /**
   * Check if passed argument is a function
   * @param   { * } value -
   * @returns { Boolean } -
   */
  function isFunction(value) {
    return typeof value === T_FUNCTION
  }

  /**
   * Check if passed argument is an object, exclude null
   * NOTE: use isObject(x) && !isArray(x) to excludes arrays.
   * @param   { * } value -
   * @returns { Boolean } -
   */
  function isObject(value) {
    return value && typeof value === T_OBJECT // typeof null is 'object'
  }

  /**
   * Check if a DOM node is an svg tag or part of an svg
   * @param   { HTMLElement }  el - node we want to test
   * @returns {Boolean} true if it's an svg node
   */
  function isSvg(el) {
    var owner = el.ownerSVGElement;
    return !!owner || owner === null
  }

  /**
   * Check if passed argument is a kind of array
   * @param   { * } value -
   * @returns { Boolean } -
   */
  function isArray(value) {
    return Array.isArray(value) || value instanceof Array
  }

  /**
   * Check if the passed argument is a boolean attribute
   * @param   { String } value -
   * @returns { Boolean } -
   */
  function isBoolAttr(value) {
    return RE_BOOL_ATTRS.test(value)
  }

  /**
   * Check if passed argument is a string
   * @param   { * } value -
   * @returns { Boolean } -
   */
  function isString(value) {
    return typeof value === T_STRING
  }



  var check = /*#__PURE__*/Object.freeze({
    isBlank: isBlank,
    isFunction: isFunction,
    isObject: isObject,
    isSvg: isSvg,
    isWritable: isWritable,
    isArray: isArray,
    isBoolAttr: isBoolAttr,
    isNil: isNil,
    isString: isString,
    isUndefined: isUndefined
  });

  /**
   * Check whether an array contains an item
   * @param   { Array } array - target array
   * @param   { * } item - item to test
   * @returns { Boolean } -
   */
  function contains(array, item) {
    return array.indexOf(item) !== -1
  }

  /**
   * Specialized function for looping an array-like collection with `each={}`
   * @param   { Array } list - collection of items
   * @param   {Function} fn - callback function
   * @returns { Array } the array looped
   */
  function each(list, fn) {
    var len = list ? list.length : 0;
    var i = 0;
    for (; i < len; i++) { fn(list[i], i); }
    return list
  }

  /**
   * Faster String startsWith alternative
   * @param   { String } str - source string
   * @param   { String } value - test string
   * @returns { Boolean } -
   */
  function startsWith(str, value) {
    return str.slice(0, value.length) === value
  }

  /**
   * Function returning always a unique identifier
   * @returns { Number } - number from 0...n
   */
  var uid = (function uid() {
    var i = -1;
    return function () { return ++i; }
  })();

  /**
   * Helper function to set an immutable property
   * @param   { Object } el - object where the new property will be set
   * @param   { String } key - object key where the new property will be stored
   * @param   { * } value - value of the new property
   * @param   { Object } options - set the propery overriding the default options
   * @returns { Object } - the initial object
   */
  function define(el, key, value, options) {
    Object.defineProperty(el, key, extend({
      value: value,
      enumerable: false,
      writable: false,
      configurable: true
    }, options));
    return el
  }

  /**
   * Convert a string containing dashes to camel case
   * @param   { String } str - input string
   * @returns { String } my-string -> myString
   */
  function toCamel(str) {
    return str.replace(/-(\w)/g, function (_, c) { return c.toUpperCase(); })
  }

  /**
   * Warn a message via console
   * @param   {String} message - warning message
   */
  function warn(message) {
    if (console && console.warn) { console.warn(message); }
  }



  var misc = /*#__PURE__*/Object.freeze({
    contains: contains,
    each: each,
    getPropDescriptor: getPropDescriptor,
    startsWith: startsWith,
    uid: uid,
    defineProperty: define,
    objectCreate: create,
    extend: extend,
    toCamel: toCamel,
    warn: warn
  });

  /**
   * Set the property of an object for a given key. If something already
   * exists there, then it becomes an array containing both the old and new value.
   * @param { Object } obj - object on which to set the property
   * @param { String } key - property name
   * @param { Object } value - the value of the property to be set
   * @param { Boolean } ensureArray - ensure that the property remains an array
   * @param { Number } index - add the new item in a certain array position
   */
  function arrayishAdd(obj, key, value, ensureArray, index) {
    var dest = obj[key];
    var isArr = isArray(dest);
    var hasIndex = !isUndefined(index);

    if (dest && dest === value) { return }

    // if the key was never set, set it once
    if (!dest && ensureArray) { obj[key] = [value]; }
    else if (!dest) { obj[key] = value; }
    // if it was an array and not yet set
    else {
      if (isArr) {
        var oldIndex = dest.indexOf(value);
        // this item never changed its position
        if (oldIndex === index) { return }
        // remove the item from its old position
        if (oldIndex !== -1) { dest.splice(oldIndex, 1); }
        // move or add the item
        if (hasIndex) {
          dest.splice(index, 0, value);
        } else {
          dest.push(value);
        }
      } else { obj[key] = [dest, value]; }
    }
  }

  /**
   * Detect the tag implementation by a DOM node
   * @param   { Object } dom - DOM node we need to parse to get its tag implementation
   * @returns { Object } it returns an object containing the implementation of a custom tag (template and boot function)
   */
  function get(dom) {
    return dom.tagName && __TAG_IMPL[getAttribute(dom, IS_DIRECTIVE) ||
      getAttribute(dom, IS_DIRECTIVE) || dom.tagName.toLowerCase()]
  }

  /**
   * Get the tag name of any DOM node
   * @param   { Object } dom - DOM node we want to parse
   * @param   { Boolean } skipDataIs - hack to ignore the data-is attribute when attaching to parent
   * @returns { String } name to identify this dom node in riot
   */
  function getName(dom, skipDataIs) {
    var child = get(dom);
    var namedTag = !skipDataIs && getAttribute(dom, IS_DIRECTIVE);
    return namedTag && !tmpl.hasExpr(namedTag) ?
      namedTag : child ? child.name : dom.tagName.toLowerCase()
  }

  /**
   * Return a temporary context containing also the parent properties
   * @this Tag
   * @param { Tag } - temporary tag context containing all the parent properties
   */
  function inheritParentProps() {
    if (this.parent) { return extend(create(this), this.parent) }
    return this
  }

  /*
    Includes hacks needed for the Internet Explorer version 9 and below
    See: http://kangax.github.io/compat-table/es5/#ie8
         http://codeplanet.io/dropping-ie8/
  */

  var
    reHasYield  = /<yield\b/i,
    reYieldAll  = /<yield\s*(?:\/>|>([\S\s]*?)<\/yield\s*>|>)/ig,
    reYieldSrc  = /<yield\s+to=['"]([^'">]*)['"]\s*>([\S\s]*?)<\/yield\s*>/ig,
    reYieldDest = /<yield\s+from=['"]?([-\w]+)['"]?\s*(?:\/>|>([\S\s]*?)<\/yield\s*>)/ig,
    rootEls = { tr: 'tbody', th: 'tr', td: 'tr', col: 'colgroup' },
    tblTags = IE_VERSION && IE_VERSION < 10 ? RE_SPECIAL_TAGS : RE_SPECIAL_TAGS_NO_OPTION,
    GENERIC = 'div',
    SVG = 'svg';


  /*
    Creates the root element for table or select child elements:
    tr/th/td/thead/tfoot/tbody/caption/col/colgroup/option/optgroup
  */
  function specialTags(el, tmpl, tagName) {

    var
      select = tagName[0] === 'o',
      parent = select ? 'select>' : 'table>';

    // trim() is important here, this ensures we don't have artifacts,
    // so we can check if we have only one element inside the parent
    el.innerHTML = '<' + parent + tmpl.trim() + '</' + parent;
    parent = el.firstChild;

    // returns the immediate parent if tr/th/td/col is the only element, if not
    // returns the whole tree, as this can include additional elements
    /* istanbul ignore next */
    if (select) {
      parent.selectedIndex = -1;  // for IE9, compatible w/current riot behavior
    } else {
      // avoids insertion of cointainer inside container (ex: tbody inside tbody)
      var tname = rootEls[tagName];
      if (tname && parent.childElementCount === 1) { parent = $(tname, parent); }
    }
    return parent
  }

  /*
    Replace the yield tag from any tag template with the innerHTML of the
    original tag in the page
  */
  function replaceYield(tmpl, html) {
    // do nothing if no yield
    if (!reHasYield.test(tmpl)) { return tmpl }

    // be careful with #1343 - string on the source having `$1`
    var src = {};

    html = html && html.replace(reYieldSrc, function (_, ref, text) {
      src[ref] = src[ref] || text;   // preserve first definition
      return ''
    }).trim();

    return tmpl
      .replace(reYieldDest, function (_, ref, def) {  // yield with from - to attrs
        return src[ref] || def || ''
      })
      .replace(reYieldAll, function (_, def) {        // yield without any "from"
        return html || def || ''
      })
  }

  /**
   * Creates a DOM element to wrap the given content. Normally an `DIV`, but can be
   * also a `TABLE`, `SELECT`, `TBODY`, `TR`, or `COLGROUP` element.
   *
   * @param   { String } tmpl  - The template coming from the custom tag definition
   * @param   { String } html - HTML content that comes from the DOM element where you
   *           will mount the tag, mostly the original tag in the page
   * @param   { Boolean } isSvg - true if the root node is an svg
   * @returns { HTMLElement } DOM element with _tmpl_ merged through `YIELD` with the _html_.
   */
  function mkdom(tmpl, html, isSvg) {
    var match   = tmpl && tmpl.match(/^\s*<([-\w]+)/);
    var  tagName = match && match[1].toLowerCase();
    var el = makeElement(isSvg ? SVG : GENERIC);

    // replace all the yield tags with the tag inner html
    tmpl = replaceYield(tmpl, html);

    /* istanbul ignore next */
    if (tblTags.test(tagName))
      { el = specialTags(el, tmpl, tagName); }
    else
      { setInnerHTML(el, tmpl, isSvg); }

    return el
  }

  var EVENT_ATTR_RE = /^on/;

  /**
   * True if the event attribute starts with 'on'
   * @param   { String } attribute - event attribute
   * @returns { Boolean }
   */
  function isEventAttribute(attribute) {
    return EVENT_ATTR_RE.test(attribute)
  }

  /**
   * Loop backward all the parents tree to detect the first custom parent tag
   * @param   { Object } tag - a Tag instance
   * @returns { Object } the instance of the first custom parent tag found
   */
  function getImmediateCustomParent(tag) {
    var ptag = tag;
    while (ptag.__.isAnonymous) {
      if (!ptag.parent) { break }
      ptag = ptag.parent;
    }
    return ptag
  }

  /**
   * Trigger DOM events
   * @param   { HTMLElement } dom - dom element target of the event
   * @param   { Function } handler - user function
   * @param   { Object } e - event object
   */
  function handleEvent(dom, handler, e) {
    var ptag = this.__.parent;
    var item = this.__.item;

    if (!item)
      { while (ptag && !item) {
        item = ptag.__.item;
        ptag = ptag.__.parent;
      } }

    // override the event properties
    /* istanbul ignore next */
    if (isWritable(e, 'currentTarget')) { e.currentTarget = dom; }
    /* istanbul ignore next */
    if (isWritable(e, 'target')) { e.target = e.srcElement; }
    /* istanbul ignore next */
    if (isWritable(e, 'which')) { e.which = e.charCode || e.keyCode; }

    e.item = item;

    handler.call(this, e);

    // avoid auto updates
    if (!settings.autoUpdate) { return }

    if (!e.preventUpdate) {
      var p = getImmediateCustomParent(this);
      // fixes #2083
      if (p.isMounted) { p.update(); }
    }
  }

  /**
   * Attach an event to a DOM node
   * @param { String } name - event name
   * @param { Function } handler - event callback
   * @param { Object } dom - dom node
   * @param { Tag } tag - tag instance
   */
  function setEventHandler(name, handler, dom, tag) {
    var eventName;
    var cb = handleEvent.bind(tag, dom, handler);

    // avoid to bind twice the same event
    // possible fix for #2332
    dom[name] = null;

    // normalize event name
    eventName = name.replace(RE_EVENTS_PREFIX, '');

    // cache the listener into the listeners array
    if (!contains(tag.__.listeners, dom)) { tag.__.listeners.push(dom); }
    if (!dom[RIOT_EVENTS_KEY]) { dom[RIOT_EVENTS_KEY] = {}; }
    if (dom[RIOT_EVENTS_KEY][name]) { dom.removeEventListener(eventName, dom[RIOT_EVENTS_KEY][name]); }

    dom[RIOT_EVENTS_KEY][name] = cb;
    dom.addEventListener(eventName, cb, false);
  }

  /**
   * Create a new child tag including it correctly into its parent
   * @param   { Object } child - child tag implementation
   * @param   { Object } opts - tag options containing the DOM node where the tag will be mounted
   * @param   { String } innerHTML - inner html of the child node
   * @param   { Object } parent - instance of the parent tag including the child custom tag
   * @returns { Object } instance of the new child tag just created
   */
  function initChild(child, opts, innerHTML, parent) {
    var tag = createTag(child, opts, innerHTML);
    var tagName = opts.tagName || getName(opts.root, true);
    var ptag = getImmediateCustomParent(parent);
    // fix for the parent attribute in the looped elements
    define(tag, 'parent', ptag);
    // store the real parent tag
    // in some cases this could be different from the custom parent tag
    // for example in nested loops
    tag.__.parent = parent;

    // add this tag to the custom parent tag
    arrayishAdd(ptag.tags, tagName, tag);

    // and also to the real parent tag
    if (ptag !== parent)
      { arrayishAdd(parent.tags, tagName, tag); }

    return tag
  }

  /**
   * Removes an item from an object at a given key. If the key points to an array,
   * then the item is just removed from the array.
   * @param { Object } obj - object on which to remove the property
   * @param { String } key - property name
   * @param { Object } value - the value of the property to be removed
   * @param { Boolean } ensureArray - ensure that the property remains an array
  */
  function arrayishRemove(obj, key, value, ensureArray) {
    if (isArray(obj[key])) {
      var index = obj[key].indexOf(value);
      if (index !== -1) { obj[key].splice(index, 1); }
      if (!obj[key].length) { delete obj[key]; }
      else if (obj[key].length === 1 && !ensureArray) { obj[key] = obj[key][0]; }
    } else if (obj[key] === value)
      { delete obj[key]; } // otherwise just delete the key
  }

  /**
   * Adds the elements for a virtual tag
   * @this Tag
   * @param { Node } src - the node that will do the inserting or appending
   * @param { Tag } target - only if inserting, insert before this tag's first child
   */
  function makeVirtual(src, target) {
    var head = createDOMPlaceholder();
    var tail = createDOMPlaceholder();
    var frag = createFragment();
    var sib;
    var el;

    this.root.insertBefore(head, this.root.firstChild);
    this.root.appendChild(tail);

    this.__.head = el = head;
    this.__.tail = tail;

    while (el) {
      sib = el.nextSibling;
      frag.appendChild(el);
      this.__.virts.push(el); // hold for unmounting
      el = sib;
    }

    if (target)
      { src.insertBefore(frag, target.__.head); }
    else
      { src.appendChild(frag); }
  }

  /**
   * makes a tag virtual and replaces a reference in the dom
   * @this Tag
   * @param { tag } the tag to make virtual
   * @param { ref } the dom reference location
   */
  function makeReplaceVirtual(tag, ref) {
    if (!ref.parentNode) { return }
    var frag = createFragment();
    makeVirtual.call(tag, frag);
    ref.parentNode.replaceChild(frag, ref);
  }

  /**
   * Update dynamically created data-is tags with changing expressions
   * @param { Object } expr - expression tag and expression info
   * @param { Tag }    parent - parent for tag creation
   * @param { String } tagName - tag implementation we want to use
   */
  function updateDataIs(expr, parent, tagName) {
    var tag = expr.tag || expr.dom._tag;
    var ref;

    var ref$1 = tag ? tag.__ : {};
    var head = ref$1.head;
    var isVirtual = expr.dom.tagName === 'VIRTUAL';

    if (tag && expr.tagName === tagName) {
      tag.update();
      return
    }

    // sync _parent to accommodate changing tagnames
    if (tag) {
      // need placeholder before unmount
      if(isVirtual) {
        ref = createDOMPlaceholder();
        head.parentNode.insertBefore(ref, head);
      }

      tag.unmount(true);
    }

    // unable to get the tag name
    if (!isString(tagName)) { return }

    expr.impl = __TAG_IMPL[tagName];

    // unknown implementation
    if (!expr.impl) { return }

    expr.tag = tag = initChild(
      expr.impl, {
        root: expr.dom,
        parent: parent,
        tagName: tagName
      },
      expr.dom.innerHTML,
      parent
    );

    each(expr.attrs, function (a) { return setAttribute(tag.root, a.name, a.value); });
    expr.tagName = tagName;
    tag.mount();

    // root exist first time, after use placeholder
    if (isVirtual) { makeReplaceVirtual(tag, ref || tag.root); }

    // parent is the placeholder tag, not the dynamic tag so clean up
    parent.__.onUnmount = function () {
      var delName = tag.opts.dataIs;
      arrayishRemove(tag.parent.tags, delName, tag);
      arrayishRemove(tag.__.parent.tags, delName, tag);
      tag.unmount();
    };
  }

  /**
   * Nomalize any attribute removing the "riot-" prefix
   * @param   { String } attrName - original attribute name
   * @returns { String } valid html attribute name
   */
  function normalizeAttrName(attrName) {
    if (!attrName) { return null }
    attrName = attrName.replace(ATTRS_PREFIX, '');
    if (CASE_SENSITIVE_ATTRIBUTES[attrName]) { attrName = CASE_SENSITIVE_ATTRIBUTES[attrName]; }
    return attrName
  }

  /**
   * Update on single tag expression
   * @this Tag
   * @param { Object } expr - expression logic
   * @returns { undefined }
   */
  function updateExpression(expr) {
    if (this.root && getAttribute(this.root,'virtualized')) { return }

    var dom = expr.dom;
    // remove the riot- prefix
    var attrName = normalizeAttrName(expr.attr);
    var isToggle = contains([SHOW_DIRECTIVE, HIDE_DIRECTIVE], attrName);
    var isVirtual = expr.root && expr.root.tagName === 'VIRTUAL';
    var ref = this.__;
    var isAnonymous = ref.isAnonymous;
    var parent = dom && (expr.parent || dom.parentNode);
    var keepValueAttributes = settings.keepValueAttributes;
    // detect the style attributes
    var isStyleAttr = attrName === 'style';
    var isClassAttr = attrName === 'class';
    var isValueAttr = attrName === 'value';

    var value;

    // if it's a tag we could totally skip the rest
    if (expr._riot_id) {
      if (expr.__.wasCreated) {
        expr.update();
      // if it hasn't been mounted yet, do that now.
      } else {
        expr.mount();
        if (isVirtual) {
          makeReplaceVirtual(expr, expr.root);
        }
      }
      return
    }

    // if this expression has the update method it means it can handle the DOM changes by itself
    if (expr.update) { return expr.update() }

    var context = isToggle && !isAnonymous ? inheritParentProps.call(this) : this;

    // ...it seems to be a simple expression so we try to calculate its value
    value = tmpl(expr.expr, context);

    var hasValue = !isBlank(value);
    var isObj = isObject(value);

    // convert the style/class objects to strings
    if (isObj) {
      if (isClassAttr) {
        value = tmpl(JSON.stringify(value), this);
      } else if (isStyleAttr) {
        value = styleObjectToString(value);
      }
    }

    // remove original attribute
    if (expr.attr &&
        (
          // the original attribute can be removed only if we are parsing the original expression
          !expr.wasParsedOnce ||
          // or its value is false
          value === false ||
          // or if its value is currently falsy...
          // We will keep the "value" attributes if the "keepValueAttributes"
          // is enabled though
          (!hasValue && (!isValueAttr || isValueAttr && !keepValueAttributes))
        )
    ) {
      // remove either riot-* attributes or just the attribute name
      removeAttribute(dom, getAttribute(dom, expr.attr) ? expr.attr : attrName);
    }

    // for the boolean attributes we don't need the value
    // we can convert it to checked=true to checked=checked
    if (expr.bool) { value = value ? attrName : false; }
    if (expr.isRtag) { return updateDataIs(expr, this, value) }
    if (expr.wasParsedOnce && expr.value === value) { return }

    // update the expression value
    expr.value = value;
    expr.wasParsedOnce = true;

    // if the value is an object (and it's not a style or class attribute) we can not do much more with it
    if (isObj && !isClassAttr && !isStyleAttr && !isToggle) { return }
    // avoid to render undefined/null values
    if (!hasValue) { value = ''; }

    // textarea and text nodes have no attribute name
    if (!attrName) {
      // about #815 w/o replace: the browser converts the value to a string,
      // the comparison by "==" does too, but not in the server
      value += '';
      // test for parent avoids error with invalid assignment to nodeValue
      if (parent) {
        // cache the parent node because somehow it will become null on IE
        // on the next iteration
        expr.parent = parent;
        if (parent.tagName === 'TEXTAREA') {
          parent.value = value;                    // #1113
          if (!IE_VERSION) { dom.nodeValue = value; }  // #1625 IE throws here, nodeValue
        }                                         // will be available on 'updated'
        else { dom.nodeValue = value; }
      }
      return
    }

    switch (true) {
    // handle events binding
    case isFunction(value):
      if (isEventAttribute(attrName)) {
        setEventHandler(attrName, value, dom, this);
      }
      break
    // show / hide
    case isToggle:
      toggleVisibility(dom, attrName === HIDE_DIRECTIVE ? !value : value);
      break
    // handle attributes
    default:
      if (expr.bool) {
        dom[attrName] = value;
      }

      if (isValueAttr && dom.value !== value) {
        dom.value = value;
      } else if (hasValue && value !== false) {
        setAttribute(dom, attrName, value);
      }

      // make sure that in case of style changes
      // the element stays hidden
      if (isStyleAttr && dom.hidden) { toggleVisibility(dom, false); }
    }
  }

  /**
   * Update all the expressions in a Tag instance
   * @this Tag
   * @param { Array } expressions - expression that must be re evaluated
   */
  function update(expressions) {
    each(expressions, updateExpression.bind(this));
  }

  /**
   * We need to update opts for this tag. That requires updating the expressions
   * in any attributes on the tag, and then copying the result onto opts.
   * @this Tag
   * @param   {Boolean} isLoop - is it a loop tag?
   * @param   { Tag }  parent - parent tag node
   * @param   { Boolean }  isAnonymous - is it a tag without any impl? (a tag not registered)
   * @param   { Object }  opts - tag options
   * @param   { Array }  instAttrs - tag attributes array
   */
  function updateOpts(isLoop, parent, isAnonymous, opts, instAttrs) {
    // isAnonymous `each` tags treat `dom` and `root` differently. In this case
    // (and only this case) we don't need to do updateOpts, because the regular parse
    // will update those attrs. Plus, isAnonymous tags don't need opts anyway
    if (isLoop && isAnonymous) { return }
    var ctx = isLoop ? inheritParentProps.call(this) : parent || this;

    each(instAttrs, function (attr) {
      if (attr.expr) { updateExpression.call(ctx, attr.expr); }
      // normalize the attribute names
      opts[toCamel(attr.name).replace(ATTRS_PREFIX, '')] = attr.expr ? attr.expr.value : attr.value;
    });
  }

  /**
   * Update the tag expressions and options
   * @param { Tag } tag - tag object
   * @param { * } data - data we want to use to extend the tag properties
   * @param { Array } expressions - component expressions array
   * @returns { Tag } the current tag instance
   */
  function componentUpdate(tag, data, expressions) {
    var __ = tag.__;
    var nextOpts = {};
    var canTrigger = tag.isMounted && !__.skipAnonymous;

    // inherit properties from the parent tag
    if (__.isAnonymous && __.parent) { extend(tag, __.parent); }
    extend(tag, data);

    updateOpts.apply(tag, [__.isLoop, __.parent, __.isAnonymous, nextOpts, __.instAttrs]);

    if (
      canTrigger &&
      tag.isMounted &&
      isFunction(tag.shouldUpdate) && !tag.shouldUpdate(data, nextOpts)
    ) {
      return tag
    }

    extend(tag.opts, nextOpts);

    if (canTrigger) { tag.trigger('update', data); }
    update.call(tag, expressions);
    if (canTrigger) { tag.trigger('updated'); }

    return tag
  }

  /**
   * Get selectors for tags
   * @param   { Array } tags - tag names to select
   * @returns { String } selector
   */
  function query(tags) {
    // select all tags
    if (!tags) {
      var keys = Object.keys(__TAG_IMPL);
      return keys + query(keys)
    }

    return tags
      .filter(function (t) { return !/[^-\w]/.test(t); })
      .reduce(function (list, t) {
        var name = t.trim().toLowerCase();
        return list + ",[" + IS_DIRECTIVE + "=\"" + name + "\"]"
      }, '')
  }

  /**
   * Another way to create a riot tag a bit more es6 friendly
   * @param { HTMLElement } el - tag DOM selector or DOM node/s
   * @param { Object } opts - tag logic
   * @returns { Tag } new riot tag instance
   */
  function Tag(el, opts) {
    // get the tag properties from the class constructor
    var ref = this;
    var name = ref.name;
    var tmpl = ref.tmpl;
    var css = ref.css;
    var attrs = ref.attrs;
    var onCreate = ref.onCreate;
    // register a new tag and cache the class prototype
    if (!__TAG_IMPL[name]) {
      tag(name, tmpl, css, attrs, onCreate);
      // cache the class constructor
      __TAG_IMPL[name].class = this.constructor;
    }

    // mount the tag using the class instance
    mount$1(el, name, opts, this);
    // inject the component css
    if (css) { styleManager.inject(); }

    return this
  }

  /**
   * Create a new riot tag implementation
   * @param   { String }   name - name/id of the new riot tag
   * @param   { String }   tmpl - tag template
   * @param   { String }   css - custom tag css
   * @param   { String }   attrs - root tag attributes
   * @param   { Function } fn - user function
   * @returns { String } name/id of the tag just created
   */
  function tag(name, tmpl, css, attrs, fn) {
    if (isFunction(attrs)) {
      fn = attrs;

      if (/^[\w-]+\s?=/.test(css)) {
        attrs = css;
        css = '';
      } else
        { attrs = ''; }
    }

    if (css) {
      if (isFunction(css))
        { fn = css; }
      else
        { styleManager.add(css, name); }
    }

    name = name.toLowerCase();
    __TAG_IMPL[name] = { name: name, tmpl: tmpl, attrs: attrs, fn: fn };

    return name
  }

  /**
   * Create a new riot tag implementation (for use by the compiler)
   * @param   { String }   name - name/id of the new riot tag
   * @param   { String }   tmpl - tag template
   * @param   { String }   css - custom tag css
   * @param   { String }   attrs - root tag attributes
   * @param   { Function } fn - user function
   * @returns { String } name/id of the tag just created
   */
  function tag2(name, tmpl, css, attrs, fn) {
    if (css) { styleManager.add(css, name); }

    __TAG_IMPL[name] = { name: name, tmpl: tmpl, attrs: attrs, fn: fn };

    return name
  }

  /**
   * Mount a tag using a specific tag implementation
   * @param   { * } selector - tag DOM selector or DOM node/s
   * @param   { String } tagName - tag implementation name
   * @param   { Object } opts - tag logic
   * @returns { Array } new tags instances
   */
  function mount(selector, tagName, opts) {
    var tags = [];
    var elem, allTags;

    function pushTagsTo(root) {
      if (root.tagName) {
        var riotTag = getAttribute(root, IS_DIRECTIVE), tag;

        // have tagName? force riot-tag to be the same
        if (tagName && riotTag !== tagName) {
          riotTag = tagName;
          setAttribute(root, IS_DIRECTIVE, tagName);
        }

        tag = mount$1(
          root,
          riotTag || root.tagName.toLowerCase(),
          isFunction(opts) ? opts() : opts
        );

        if (tag)
          { tags.push(tag); }
      } else if (root.length)
        { each(root, pushTagsTo); } // assume nodeList
    }

    // inject styles into DOM
    styleManager.inject();

    if (isObject(tagName) || isFunction(tagName)) {
      opts = tagName;
      tagName = 0;
    }

    // crawl the DOM to find the tag
    if (isString(selector)) {
      selector = selector === '*' ?
        // select all registered tags
        // & tags found with the riot-tag attribute set
        allTags = query() :
        // or just the ones named like the selector
        selector + query(selector.split(/, */));

      // make sure to pass always a selector
      // to the querySelectorAll function
      elem = selector ? $$(selector) : [];
    }
    else
      // probably you have passed already a tag or a NodeList
      { elem = selector; }

    // select all the registered and mount them inside their root elements
    if (tagName === '*') {
      // get all custom tags
      tagName = allTags || query();
      // if the root els it's just a single tag
      if (elem.tagName)
        { elem = $$(tagName, elem); }
      else {
        // select all the children for all the different root elements
        var nodeList = [];

        each(elem, function (_el) { return nodeList.push($$(tagName, _el)); });

        elem = nodeList;
      }
      // get rid of the tagName
      tagName = 0;
    }

    pushTagsTo(elem);

    return tags
  }

  // Create a mixin that could be globally shared across all the tags
  var mixins = {};
  var globals = mixins[GLOBAL_MIXIN] = {};
  var mixins_id = 0;

  /**
   * Create/Return a mixin by its name
   * @param   { String }  name - mixin name (global mixin if object)
   * @param   { Object }  mix - mixin logic
   * @param   { Boolean } g - is global?
   * @returns { Object }  the mixin logic
   */
  function mixin(name, mix, g) {
    // Unnamed global
    if (isObject(name)) {
      mixin(("__" + (mixins_id++) + "__"), name, true);
      return
    }

    var store = g ? globals : mixins;

    // Getter
    if (!mix) {
      if (isUndefined(store[name]))
        { throw new Error(("Unregistered mixin: " + name)) }

      return store[name]
    }

    // Setter
    store[name] = isFunction(mix) ?
      extend(mix.prototype, store[name] || {}) && mix :
      extend(store[name] || {}, mix);
  }

  /**
   * Update all the tags instances created
   * @returns { Array } all the tags instances
   */
  function update$1() {
    return each(__TAGS_CACHE, function (tag) { return tag.update(); })
  }

  function unregister(name) {
    styleManager.remove(name);
    return delete __TAG_IMPL[name]
  }

  var version = 'WIP';

  var core = /*#__PURE__*/Object.freeze({
    Tag: Tag,
    tag: tag,
    tag2: tag2,
    mount: mount,
    mixin: mixin,
    update: update$1,
    unregister: unregister,
    version: version
  });

  /**
   * Add a mixin to this tag
   * @returns { Tag } the current tag instance
   */
  function componentMixin(tag$$1) {
    var mixins = [], len = arguments.length - 1;
    while ( len-- > 0 ) mixins[ len ] = arguments[ len + 1 ];

    each(mixins, function (mix) {
      var instance;
      var obj;
      var props = [];

      // properties blacklisted and will not be bound to the tag instance
      var propsBlacklist = ['init', '__proto__'];

      mix = isString(mix) ? mixin(mix) : mix;

      // check if the mixin is a function
      if (isFunction(mix)) {
        // create the new mixin instance
        instance = new mix();
      } else { instance = mix; }

      var proto = Object.getPrototypeOf(instance);

      // build multilevel prototype inheritance chain property list
      do { props = props.concat(Object.getOwnPropertyNames(obj || instance)); }
      while (obj = Object.getPrototypeOf(obj || instance))

      // loop the keys in the function prototype or the all object keys
      each(props, function (key) {
        // bind methods to tag
        // allow mixins to override other properties/parent mixins
        if (!contains(propsBlacklist, key)) {
          // check for getters/setters
          var descriptor = getPropDescriptor(instance, key) || getPropDescriptor(proto, key);
          var hasGetterSetter = descriptor && (descriptor.get || descriptor.set);

          // apply method only if it does not already exist on the instance
          if (!tag$$1.hasOwnProperty(key) && hasGetterSetter) {
            Object.defineProperty(tag$$1, key, descriptor);
          } else {
            tag$$1[key] = isFunction(instance[key]) ?
              instance[key].bind(tag$$1) :
              instance[key];
          }
        }
      });

      // init method will be called automatically
      if (instance.init)
        { instance.init.bind(tag$$1)(tag$$1.opts); }
    });

    return tag$$1
  }

  /**
   * Move the position of a custom tag in its parent tag
   * @this Tag
   * @param   { String } tagName - key where the tag was stored
   * @param   { Number } newPos - index where the new tag will be stored
   */
  function moveChild(tagName, newPos) {
    var parent = this.parent;
    var tags;
    // no parent no move
    if (!parent) { return }

    tags = parent.tags[tagName];

    if (isArray(tags))
      { tags.splice(newPos, 0, tags.splice(tags.indexOf(this), 1)[0]); }
    else { arrayishAdd(parent.tags, tagName, this); }
  }

  /**
   * Move virtual tag and all child nodes
   * @this Tag
   * @param { Node } src  - the node that will do the inserting
   * @param { Tag } target - insert before this tag's first child
   */
  function moveVirtual(src, target) {
    var el = this.__.head;
    var sib;
    var frag = createFragment();

    while (el) {
      sib = el.nextSibling;
      frag.appendChild(el);
      el = sib;
      if (el === this.__.tail) {
        frag.appendChild(el);
        src.insertBefore(frag, target.__.head);
        break
      }
    }
  }

  /**
   * Convert the item looped into an object used to extend the child tag properties
   * @param   { Object } expr - object containing the keys used to extend the children tags
   * @param   { * } key - value to assign to the new object returned
   * @param   { * } val - value containing the position of the item in the array
   * @returns { Object } - new object containing the values of the original item
   *
   * The variables 'key' and 'val' are arbitrary.
   * They depend on the collection type looped (Array, Object)
   * and on the expression used on the each tag
   *
   */
  function mkitem(expr, key, val) {
    var item = {};
    item[expr.key] = key;
    if (expr.pos) { item[expr.pos] = val; }
    return item
  }

  /**
   * Unmount the redundant tags
   * @param   { Array } items - array containing the current items to loop
   * @param   { Array } tags - array containing all the children tags
   */
  function unmountRedundant(items, tags, filteredItemsCount) {
    var i = tags.length;
    var j = items.length - filteredItemsCount;

    while (i > j) {
      i--;
      remove.apply(tags[i], [tags, i]);
    }
  }


  /**
   * Remove a child tag
   * @this Tag
   * @param   { Array } tags - tags collection
   * @param   { Number } i - index of the tag to remove
   */
  function remove(tags, i) {
    tags.splice(i, 1);
    this.unmount();
    arrayishRemove(this.parent, this, this.__.tagName, true);
  }

  /**
   * Move the nested custom tags in non custom loop tags
   * @this Tag
   * @param   { Number } i - current position of the loop tag
   */
  function moveNestedTags(i) {
    var this$1 = this;

    each(Object.keys(this.tags), function (tagName) {
      moveChild.apply(this$1.tags[tagName], [tagName, i]);
    });
  }

  /**
   * Move a child tag
   * @this Tag
   * @param   { HTMLElement } root - dom node containing all the loop children
   * @param   { Tag } nextTag - instance of the next tag preceding the one we want to move
   * @param   { Boolean } isVirtual - is it a virtual tag?
   */
  function move(root, nextTag, isVirtual) {
    if (isVirtual)
      { moveVirtual.apply(this, [root, nextTag]); }
    else
      { safeInsert(root, this.root, nextTag.root); }
  }

  /**
   * Insert and mount a child tag
   * @this Tag
   * @param   { HTMLElement } root - dom node containing all the loop children
   * @param   { Tag } nextTag - instance of the next tag preceding the one we want to insert
   * @param   { Boolean } isVirtual - is it a virtual tag?
   */
  function insert(root, nextTag, isVirtual) {
    if (isVirtual)
      { makeVirtual.apply(this, [root, nextTag]); }
    else
      { safeInsert(root, this.root, nextTag.root); }
  }

  /**
   * Append a new tag into the DOM
   * @this Tag
   * @param   { HTMLElement } root - dom node containing all the loop children
   * @param   { Boolean } isVirtual - is it a virtual tag?
   */
  function append(root, isVirtual) {
    if (isVirtual)
      { makeVirtual.call(this, root); }
    else
      { root.appendChild(this.root); }
  }

  /**
   * Return the value we want to use to lookup the postion of our items in the collection
   * @param   { String }  keyAttr         - lookup string or expression
   * @param   { * }       originalItem    - original item from the collection
   * @param   { Object }  keyedItem       - object created by riot via { item, i in collection }
   * @param   { Boolean } hasKeyAttrExpr  - flag to check whether the key is an expression
   * @returns { * } value that we will use to figure out the item position via collection.indexOf
   */
  function getItemId(keyAttr, originalItem, keyedItem, hasKeyAttrExpr) {
    if (keyAttr) {
      return hasKeyAttrExpr ?  tmpl(keyAttr, keyedItem) :  originalItem[keyAttr]
    }

    return originalItem
  }

  /**
   * Manage tags having the 'each'
   * @param   { HTMLElement } dom - DOM node we need to loop
   * @param   { Tag } parent - parent tag instance where the dom node is contained
   * @param   { String } expr - string contained in the 'each' attribute
   * @returns { Object } expression object for this each loop
   */
  function _each(dom, parent, expr) {
    var mustReorder = typeof getAttribute(dom, LOOP_NO_REORDER_DIRECTIVE) !== T_STRING || removeAttribute(dom, LOOP_NO_REORDER_DIRECTIVE);
    var keyAttr = getAttribute(dom, KEY_DIRECTIVE);
    var hasKeyAttrExpr = keyAttr ? tmpl.hasExpr(keyAttr) : false;
    var tagName = getName(dom);
    var impl = __TAG_IMPL[tagName];
    var parentNode = dom.parentNode;
    var placeholder = createDOMPlaceholder();
    var child = get(dom);
    var ifExpr = getAttribute(dom, CONDITIONAL_DIRECTIVE);
    var tags = [];
    var isLoop = true;
    var innerHTML = dom.innerHTML;
    var isAnonymous = !__TAG_IMPL[tagName];
    var isVirtual = dom.tagName === 'VIRTUAL';
    var oldItems = [];

    // remove the each property from the original tag
    removeAttribute(dom, LOOP_DIRECTIVE);
    removeAttribute(dom, KEY_DIRECTIVE);

    // parse the each expression
    expr = tmpl.loopKeys(expr);
    expr.isLoop = true;

    if (ifExpr) { removeAttribute(dom, CONDITIONAL_DIRECTIVE); }

    // insert a marked where the loop tags will be injected
    parentNode.insertBefore(placeholder, dom);
    parentNode.removeChild(dom);

    expr.update = function updateEach() {
      // get the new items collection
      expr.value = tmpl(expr.val, parent);

      var items = expr.value;
      var frag = createFragment();
      var isObject = !isArray(items) && !isString(items);
      var root = placeholder.parentNode;
      var tmpItems = [];
      var hasKeys = isObject && !!items;

      // if this DOM was removed the update here is useless
      // this condition fixes also a weird async issue on IE in our unit test
      if (!root) { return }

      // object loop. any changes cause full redraw
      if (isObject) {
        items = items ? Object.keys(items).map(function (key) { return mkitem(expr, items[key], key); }) : [];
      }

      // store the amount of filtered items
      var filteredItemsCount = 0;

      // loop all the new items
      each(items, function (_item, index) {
        var i = index - filteredItemsCount;
        var item = !hasKeys && expr.key ? mkitem(expr, _item, index) : _item;

        // skip this item because it must be filtered
        if (ifExpr && !tmpl(ifExpr, extend(create(parent), item))) {
          filteredItemsCount ++;
          return
        }

        var itemId = getItemId(keyAttr, _item, item, hasKeyAttrExpr);
        // reorder only if the items are not objects
        // or a key attribute has been provided
        var doReorder = !isObject && mustReorder && typeof _item === T_OBJECT || keyAttr;
        var oldPos = oldItems.indexOf(itemId);
        var isNew = oldPos === -1;
        var pos = !isNew && doReorder ? oldPos : i;
        // does a tag exist in this position?
        var tag = tags[pos];
        var mustAppend = i >= oldItems.length;
        var mustCreate = doReorder && isNew || !doReorder && !tag || !tags[i];

        // new tag
        if (mustCreate) {
          tag = createTag(impl, {
            parent: parent,
            isLoop: isLoop,
            isAnonymous: isAnonymous,
            tagName: tagName,
            root: dom.cloneNode(isAnonymous),
            item: item,
            index: i,
          }, innerHTML);

          // mount the tag
          tag.mount();

          if (mustAppend)
            { append.apply(tag, [frag || root, isVirtual]); }
          else
            { insert.apply(tag, [root, tags[i], isVirtual]); }

          if (!mustAppend) { oldItems.splice(i, 0, item); }
          tags.splice(i, 0, tag);
          if (child) { arrayishAdd(parent.tags, tagName, tag, true); }
        } else if (pos !== i && doReorder) {
          // move
          if (keyAttr || contains(items, oldItems[pos])) {
            move.apply(tag, [root, tags[i], isVirtual]);
            // move the old tag instance
            tags.splice(i, 0, tags.splice(pos, 1)[0]);
            // move the old item
            oldItems.splice(i, 0, oldItems.splice(pos, 1)[0]);
          }

          // update the position attribute if it exists
          if (expr.pos) { tag[expr.pos] = i; }

          // if the loop tags are not custom
          // we need to move all their custom tags into the right position
          if (!child && tag.tags) { moveNestedTags.call(tag, i); }
        }

        // cache the original item to use it in the events bound to this node
        // and its children
        extend(tag.__, {
          item: item,
          index: i,
          parent: parent
        });

        tmpItems[i] = itemId;

        if (!mustCreate) { tag.update(item); }
      });

      // remove the redundant tags
      unmountRedundant(items, tags, filteredItemsCount);

      // clone the items array
      oldItems = tmpItems.slice();

      root.insertBefore(frag, placeholder);
    };

    expr.unmount = function () {
      each(tags, function (t) { t.unmount(); });
    };

    return expr
  }

  var RefExpr = {
    init: function init(dom, parent, attrName, attrValue) {
      this.dom = dom;
      this.attr = attrName;
      this.rawValue = attrValue;
      this.parent = parent;
      this.hasExp = tmpl.hasExpr(attrValue);
      return this
    },
    update: function update() {
      var old = this.value;
      var customParent = this.parent && getImmediateCustomParent(this.parent);
      // if the referenced element is a custom tag, then we set the tag itself, rather than DOM
      var tagOrDom = this.dom.__ref || this.tag || this.dom;

      this.value = this.hasExp ? tmpl(this.rawValue, this.parent) : this.rawValue;

      // the name changed, so we need to remove it from the old key (if present)
      if (!isBlank(old) && customParent) { arrayishRemove(customParent.refs, old, tagOrDom); }
      if (!isBlank(this.value) && isString(this.value)) {
        // add it to the refs of parent tag (this behavior was changed >=3.0)
        if (customParent) { arrayishAdd(
          customParent.refs,
          this.value,
          tagOrDom,
          // use an array if it's a looped node and the ref is not an expression
          null,
          this.parent.__.index
        ); }

        if (this.value !== old) {
          setAttribute(this.dom, this.attr, this.value);
        }
      } else {
        removeAttribute(this.dom, this.attr);
      }

      // cache the ref bound to this dom node
      // to reuse it in future (see also #2329)
      if (!this.dom.__ref) { this.dom.__ref = tagOrDom; }
    },
    unmount: function unmount() {
      var tagOrDom = this.tag || this.dom;
      var customParent = this.parent && getImmediateCustomParent(this.parent);
      if (!isBlank(this.value) && customParent)
        { arrayishRemove(customParent.refs, this.value, tagOrDom); }
    }
  };

  /**
   * Create a new ref directive
   * @param   { HTMLElement } dom - dom node having the ref attribute
   * @param   { Tag } context - tag instance where the DOM node is located
   * @param   { String } attrName - either 'ref' or 'data-ref'
   * @param   { String } attrValue - value of the ref attribute
   * @returns { RefExpr } a new RefExpr object
   */
  function createRefDirective(dom, tag, attrName, attrValue) {
    return create(RefExpr).init(dom, tag, attrName, attrValue)
  }

  /**
   * Trigger the unmount method on all the expressions
   * @param   { Array } expressions - DOM expressions
   */
  function unmountAll(expressions) {
    each(expressions, function (expr) {
      if (expr.unmount) { expr.unmount(true); }
      else if (expr.tagName) { expr.tag.unmount(true); }
      else if (expr.unmount) { expr.unmount(); }
    });
  }

  var IfExpr = {
    init: function init(dom, tag, expr) {
      removeAttribute(dom, CONDITIONAL_DIRECTIVE);
      extend(this, { tag: tag, expr: expr, stub: createDOMPlaceholder(), pristine: dom });
      var p = dom.parentNode;
      p.insertBefore(this.stub, dom);
      p.removeChild(dom);

      return this
    },
    update: function update$$1() {
      this.value = tmpl(this.expr, this.tag);

      if (!this.stub.parentNode) { return }

      if (this.value && !this.current) { // insert
        this.current = this.pristine.cloneNode(true);
        this.stub.parentNode.insertBefore(this.current, this.stub);
        this.expressions = parseExpressions.apply(this.tag, [this.current, true]);
      } else if (!this.value && this.current) { // remove
        this.unmount();
        this.current = null;
        this.expressions = [];
      }

      if (this.value) { update.call(this.tag, this.expressions); }
    },
    unmount: function unmount() {
      if (this.current) {
        if (this.current._tag) {
          this.current._tag.unmount();
        } else if (this.current.parentNode) {
          this.current.parentNode.removeChild(this.current);
        }
      }

      unmountAll(this.expressions || []);
    }
  };

  /**
   * Create a new if directive
   * @param   { HTMLElement } dom - if root dom node
   * @param   { Tag } context - tag instance where the DOM node is located
   * @param   { String } attr - if expression
   * @returns { IFExpr } a new IfExpr object
   */
  function createIfDirective(dom, tag, attr) {
    return create(IfExpr).init(dom, tag, attr)
  }

  /**
   * Walk the tag DOM to detect the expressions to evaluate
   * @this Tag
   * @param   { HTMLElement } root - root tag where we will start digging the expressions
   * @param   { Boolean } mustIncludeRoot - flag to decide whether the root must be parsed as well
   * @returns { Array } all the expressions found
   */
  function parseExpressions(root, mustIncludeRoot) {
    var this$1 = this;

    var expressions = [];

    walkNodes(root, function (dom) {
      var type = dom.nodeType;
      var attr;
      var tagImpl;

      if (!mustIncludeRoot && dom === root) { return }

      // text node
      if (type === 3 && dom.parentNode.tagName !== 'STYLE' && tmpl.hasExpr(dom.nodeValue))
        { expressions.push({dom: dom, expr: dom.nodeValue}); }

      if (type !== 1) { return }

      var isVirtual = dom.tagName === 'VIRTUAL';

      // loop. each does it's own thing (for now)
      if (attr = getAttribute(dom, LOOP_DIRECTIVE)) {
        if(isVirtual) { setAttribute(dom, 'loopVirtual', true); } // ignore here, handled in _each
        expressions.push(_each(dom, this$1, attr));
        return false
      }

      // if-attrs become the new parent. Any following expressions (either on the current
      // element, or below it) become children of this expression.
      if (attr = getAttribute(dom, CONDITIONAL_DIRECTIVE)) {
        expressions.push(createIfDirective(dom, this$1, attr));
        return false
      }

      if (attr = getAttribute(dom, IS_DIRECTIVE)) {
        if (tmpl.hasExpr(attr)) {
          expressions.push({
            isRtag: true,
            expr: attr,
            dom: dom,
            attrs: [].slice.call(dom.attributes)
          });

          return false
        }
      }

      // if this is a tag, stop traversing here.
      // we ignore the root, since parseExpressions is called while we're mounting that root
      tagImpl = get(dom);

      if(isVirtual) {
        if(getAttribute(dom, 'virtualized')) {dom.parentElement.removeChild(dom); } // tag created, remove from dom
        if(!tagImpl && !getAttribute(dom, 'virtualized') && !getAttribute(dom, 'loopVirtual'))  // ok to create virtual tag
          { tagImpl = { tmpl: dom.outerHTML }; }
      }

      if (tagImpl && (dom !== root || mustIncludeRoot)) {
        var hasIsDirective = getAttribute(dom, IS_DIRECTIVE);
        if(isVirtual && !hasIsDirective) { // handled in update
          // can not remove attribute like directives
          // so flag for removal after creation to prevent maximum stack error
          setAttribute(dom, 'virtualized', true);
          var tag = createTag(
            {tmpl: dom.outerHTML},
            {root: dom, parent: this$1},
            dom.innerHTML
          );

          expressions.push(tag); // no return, anonymous tag, keep parsing
        } else {
          if (hasIsDirective && isVirtual)
            { warn(("Virtual tags shouldn't be used together with the \"" + IS_DIRECTIVE + "\" attribute - https://github.com/riot/riot/issues/2511")); }

          expressions.push(
            initChild(
              tagImpl,
              {
                root: dom,
                parent: this$1
              },
              dom.innerHTML,
              this$1
            )
          );
          return false
        }
      }

      // attribute expressions
      parseAttributes.apply(this$1, [dom, dom.attributes, function (attr, expr) {
        if (!expr) { return }
        expressions.push(expr);
      }]);
    });

    return expressions
  }

  /**
   * Calls `fn` for every attribute on an element. If that attr has an expression,
   * it is also passed to fn.
   * @this Tag
   * @param   { HTMLElement } dom - dom node to parse
   * @param   { Array } attrs - array of attributes
   * @param   { Function } fn - callback to exec on any iteration
   */
  function parseAttributes(dom, attrs, fn) {
    var this$1 = this;

    each(attrs, function (attr) {
      if (!attr) { return false }

      var name = attr.name;
      var bool = isBoolAttr(name);
      var expr;

      if (contains(REF_DIRECTIVES, name) && dom.tagName.toLowerCase() !== YIELD_TAG) {
        expr =  createRefDirective(dom, this$1, name, attr.value);
      } else if (tmpl.hasExpr(attr.value)) {
        expr = {dom: dom, expr: attr.value, attr: name, bool: bool};
      }

      fn(attr, expr);
    });
  }

  /**
   * Manage the mount state of a tag triggering also the observable events
   * @this Tag
   * @param { Boolean } value - ..of the isMounted flag
   */
  function setMountState(value) {
    var ref = this.__;
    var isAnonymous = ref.isAnonymous;
    var skipAnonymous = ref.skipAnonymous;

    define(this, 'isMounted', value);

    if (!isAnonymous || !skipAnonymous) {
      if (value) { this.trigger('mount'); }
      else {
        this.trigger('unmount');
        this.off('*');
        this.__.wasCreated = false;
      }
    }
  }

  /**
   * Mount the current tag instance
   * @returns { Tag } the current tag instance
   */
  function componentMount(tag$$1, dom, expressions, opts) {
    var __ = tag$$1.__;
    var root = __.root;
    root._tag = tag$$1; // keep a reference to the tag just created

    // Read all the attrs on this instance. This give us the info we need for updateOpts
    parseAttributes.apply(__.parent, [root, root.attributes, function (attr, expr) {
      if (!__.isAnonymous && RefExpr.isPrototypeOf(expr)) { expr.tag = tag$$1; }
      attr.expr = expr;
      __.instAttrs.push(attr);
    }]);

    // update the root adding custom attributes coming from the compiler
    walkAttributes(__.impl.attrs, function (k, v) { __.implAttrs.push({name: k, value: v}); });
    parseAttributes.apply(tag$$1, [root, __.implAttrs, function (attr, expr) {
      if (expr) { expressions.push(expr); }
      else { setAttribute(root, attr.name, attr.value); }
    }]);

    // initialiation
    updateOpts.apply(tag$$1, [__.isLoop, __.parent, __.isAnonymous, opts, __.instAttrs]);

    // add global mixins
    var globalMixin = mixin(GLOBAL_MIXIN);

    if (globalMixin && !__.skipAnonymous) {
      for (var i in globalMixin) {
        if (globalMixin.hasOwnProperty(i)) {
          tag$$1.mixin(globalMixin[i]);
        }
      }
    }

    if (__.impl.fn) { __.impl.fn.call(tag$$1, opts); }

    if (!__.skipAnonymous) { tag$$1.trigger('before-mount'); }

    // parse layout after init. fn may calculate args for nested custom tags
    each(parseExpressions.apply(tag$$1, [dom, __.isAnonymous]), function (e) { return expressions.push(e); });

    tag$$1.update(__.item);

    if (!__.isAnonymous && !__.isInline) {
      while (dom.firstChild) { root.appendChild(dom.firstChild); }
    }

    define(tag$$1, 'root', root);

    // if we need to wait that the parent "mount" or "updated" event gets triggered
    if (!__.skipAnonymous && tag$$1.parent) {
      var p = getImmediateCustomParent(tag$$1.parent);
      p.one(!p.isMounted ? 'mount' : 'updated', function () {
        setMountState.call(tag$$1, true);
      });
    } else {
      // otherwise it's not a child tag we can trigger its mount event
      setMountState.call(tag$$1, true);
    }

    tag$$1.__.wasCreated = true;

    return tag$$1
  }

  /**
   * Unmount the tag instance
   * @param { Boolean } mustKeepRoot - if it's true the root node will not be removed
   * @returns { Tag } the current tag instance
   */
  function tagUnmount(tag, mustKeepRoot, expressions) {
    var __ = tag.__;
    var root = __.root;
    var tagIndex = __TAGS_CACHE.indexOf(tag);
    var p = root.parentNode;

    if (!__.skipAnonymous) { tag.trigger('before-unmount'); }

    // clear all attributes coming from the mounted tag
    walkAttributes(__.impl.attrs, function (name) {
      if (startsWith(name, ATTRS_PREFIX))
        { name = name.slice(ATTRS_PREFIX.length); }

      removeAttribute(root, name);
    });

    // remove all the event listeners
    tag.__.listeners.forEach(function (dom) {
      Object.keys(dom[RIOT_EVENTS_KEY]).forEach(function (eventName) {
        dom.removeEventListener(eventName, dom[RIOT_EVENTS_KEY][eventName]);
      });
    });

    // remove tag instance from the global tags cache collection
    if (tagIndex !== -1) { __TAGS_CACHE.splice(tagIndex, 1); }

    // clean up the parent tags object
    if (__.parent && !__.isAnonymous) {
      var ptag = getImmediateCustomParent(__.parent);

      if (__.isVirtual) {
        Object
          .keys(tag.tags)
          .forEach(function (tagName) { return arrayishRemove(ptag.tags, tagName, tag.tags[tagName]); });
      } else {
        arrayishRemove(ptag.tags, __.tagName, tag);
      }
    }

    // unmount all the virtual directives
    if (tag.__.virts) {
      each(tag.__.virts, function (v) {
        if (v.parentNode) { v.parentNode.removeChild(v); }
      });
    }

    // allow expressions to unmount themselves
    unmountAll(expressions);
    each(__.instAttrs, function (a) { return a.expr && a.expr.unmount && a.expr.unmount(); });

    // clear the tag html if it's necessary
    if (mustKeepRoot) { setInnerHTML(root, ''); }
    // otherwise detach the root tag from the DOM
    else if (p) { p.removeChild(root); }

    // custom internal unmount function to avoid relying on the observable
    if (__.onUnmount) { __.onUnmount(); }

    // weird fix for a weird edge case #2409 and #2436
    // some users might use your software not as you've expected
    // so I need to add these dirty hacks to mitigate unexpected issues
    if (!tag.isMounted) { setMountState.call(tag, true); }

    setMountState.call(tag, false);

    delete root._tag;

    return tag
  }

  /**
   * Tag creation factory function
   * @constructor
   * @param { Object } impl - it contains the tag template, and logic
   * @param { Object } conf - tag options
   * @param { String } innerHTML - html that eventually we need to inject in the tag
   */
  function createTag(impl, conf, innerHTML) {
    if ( impl === void 0 ) impl = {};
    if ( conf === void 0 ) conf = {};

    var tag = conf.context || {};
    var opts = conf.opts || {};
    var parent = conf.parent;
    var isLoop = conf.isLoop;
    var isAnonymous = !!conf.isAnonymous;
    var skipAnonymous = settings.skipAnonymousTags && isAnonymous;
    var item = conf.item;
    // available only for the looped nodes
    var index = conf.index;
    // All attributes on the Tag when it's first parsed
    var instAttrs = [];
    // expressions on this type of Tag
    var implAttrs = [];
    var tmpl = impl.tmpl;
    var expressions = [];
    var root = conf.root;
    var tagName = conf.tagName || getName(root);
    var isVirtual = tagName === 'virtual';
    var isInline = !isVirtual && !tmpl;
    var dom;

    if (isInline || isLoop && isAnonymous) {
      dom = root;
    } else {
      if (!isVirtual) { root.innerHTML = ''; }
      dom = mkdom(tmpl, innerHTML, isSvg(root));
    }

    // make this tag observable
    if (!skipAnonymous) { observable(tag); }

    // only call unmount if we have a valid __TAG_IMPL (has name property)
    if (impl.name && root._tag) { root._tag.unmount(true); }

    define(tag, '__', {
      impl: impl,
      root: root,
      skipAnonymous: skipAnonymous,
      implAttrs: implAttrs,
      isAnonymous: isAnonymous,
      instAttrs: instAttrs,
      innerHTML: innerHTML,
      tagName: tagName,
      index: index,
      isLoop: isLoop,
      isInline: isInline,
      item: item,
      parent: parent,
      // tags having event listeners
      // it would be better to use weak maps here but we can not introduce breaking changes now
      listeners: [],
      // these vars will be needed only for the virtual tags
      virts: [],
      wasCreated: false,
      tail: null,
      head: null
    });

    // tag protected properties
    return [
      ['isMounted', false],
      // create a unique id to this tag
      // it could be handy to use it also to improve the virtual dom rendering speed
      ['_riot_id', uid()],
      ['root', root],
      ['opts', opts, { writable: true, enumerable: true }],
      ['parent', parent || null],
      // protect the "tags" and "refs" property from being overridden
      ['tags', {}],
      ['refs', {}],
      ['update', function (data) { return componentUpdate(tag, data, expressions); }],
      ['mixin', function () {
        var mixins = [], len = arguments.length;
        while ( len-- ) mixins[ len ] = arguments[ len ];

        return componentMixin.apply(void 0, [ tag ].concat( mixins ));
    }],
      ['mount', function () { return componentMount(tag, dom, expressions, opts); }],
      ['unmount', function (mustKeepRoot) { return tagUnmount(tag, mustKeepRoot, expressions); }]
    ].reduce(function (acc, ref) {
      var key = ref[0];
      var value = ref[1];
      var opts = ref[2];

      define(tag, key, value, opts);
      return acc
    }, extend(tag, item))
  }

  /**
   * Mount a tag creating new Tag instance
   * @param   { Object } root - dom node where the tag will be mounted
   * @param   { String } tagName - name of the riot tag we want to mount
   * @param   { Object } opts - options to pass to the Tag instance
   * @param   { Object } ctx - optional context that will be used to extend an existing class ( used in riot.Tag )
   * @returns { Tag } a new Tag instance
   */
  function mount$1(root, tagName, opts, ctx) {
    var impl = __TAG_IMPL[tagName];
    var implClass = __TAG_IMPL[tagName].class;
    var context = ctx || (implClass ? create(implClass.prototype) : {});
    // cache the inner HTML to fix #855
    var innerHTML = root._innerHTML = root._innerHTML || root.innerHTML;
    var conf = extend({ root: root, opts: opts, context: context }, { parent: opts ? opts.parent : null });
    var tag;

    if (impl && root) { tag = createTag(impl, conf, innerHTML); }

    if (tag && tag.mount) {
      tag.mount(true);
      // add this tag to the virtualDom variable
      if (!contains(__TAGS_CACHE, tag)) { __TAGS_CACHE.push(tag); }
    }

    return tag
  }



  var tags = /*#__PURE__*/Object.freeze({
    arrayishAdd: arrayishAdd,
    getTagName: getName,
    inheritParentProps: inheritParentProps,
    mountTo: mount$1,
    selectTags: query,
    arrayishRemove: arrayishRemove,
    getTag: get,
    initChildTag: initChild,
    moveChildTag: moveChild,
    makeReplaceVirtual: makeReplaceVirtual,
    getImmediateCustomParentTag: getImmediateCustomParent,
    makeVirtual: makeVirtual,
    moveVirtual: moveVirtual,
    unmountAll: unmountAll,
    createIfDirective: createIfDirective,
    createRefDirective: createRefDirective
  });

  /**
   * Riot public api
   */
  var settings$1 = settings;
  var util = {
    tmpl: tmpl,
    brackets: brackets,
    styleManager: styleManager,
    vdom: __TAGS_CACHE,
    styleNode: styleManager.styleNode,
    // export the riot internal utils as well
    dom: dom,
    check: check,
    misc: misc,
    tags: tags
  };

  var riot$1 = extend({}, core, {
    observable: observable,
    settings: settings$1,
    util: util,
  });

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function commonjsRequire () {
  	throw new Error('Dynamic requires are not currently supported by rollup-plugin-commonjs');
  }

  function unwrapExports (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var ethers_min = createCommonjsModule(function (module, exports) {
  !function(e){module.exports=e();}(function(){return function n(i,o,s){function a(t,e){if(!o[t]){if(!i[t]){var r="function"==typeof commonjsRequire&&commonjsRequire;if(!e&&r){ return r(t,!0); }if(u){ return u(t,!0); }throw(r=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",r}r=o[t]={exports:{}},i[t][0].call(r.exports,function(e){return a(i[t][1][e]||e)},r,r.exports,n,i,o,s);}return o[t].exports}for(var u="function"==typeof commonjsRequire&&commonjsRequire,e=0;e<s.length;e++){ a(s[e]); }return a}({1:[function(e,t,r){Object.defineProperty(r,"__esModule",{value:!0}),r.version="4.0.49";},{}],2:[function(e,t,r){Object.defineProperty(r,"__esModule",{value:!0});var n=e("./utils/properties"),e=(i.isSigner=function(e){return n.isType(e,"Signer")},i);function i(){n.setType(this,"Signer");}r.Signer=e;},{"./utils/properties":74}],3:[function(e,t,r){Object.defineProperty(r,"__esModule",{value:!0});var n=e("./utils/bignumber");r.AddressZero="0x0000000000000000000000000000000000000000";r.HashZero="0x0000000000000000000000000000000000000000000000000000000000000000";r.EtherSymbol="\u039e";e=n.bigNumberify(-1);r.NegativeOne=e;e=n.bigNumberify(0);r.Zero=e;e=n.bigNumberify(1);r.One=e;e=n.bigNumberify(2);r.Two=e;e=n.bigNumberify("1000000000000000000");r.WeiPerEther=e;n=n.bigNumberify("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");r.MaxUint256=n;},{"./utils/bignumber":63}],4:[function(e,t,r){var n,i=this&&this.__extends||(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t;}||function(e,t){for(var r in t){ t.hasOwnProperty(r)&&(e[r]=t[r]); }},function(e,t){function r(){this.constructor=e;}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r);}),o=this&&this.__importStar||function(e){if(e&&e.__esModule){ return e; }var t={};if(null!=e){ for(var r in e){ Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]); } }return t.default=e,t};Object.defineProperty(r,"__esModule",{value:!0});var s,u=e("./constants"),l=o(e("./errors")),h=e("./utils/abi-coder"),a=e("./utils/address"),f=e("./utils/bignumber"),c=e("./utils/bytes"),d=e("./utils/interface"),p=e("./utils/properties"),y=e("./providers/abstract-provider"),m=e("./abstract-signer"),g=(s=m.Signer,i(v,s),v.prototype.getAddress=function(){return Promise.resolve(this.address)},v.prototype._fail=function(e,t){return Promise.resolve().then(function(){l.throwError(e,l.UNSUPPORTED_OPERATION,{operation:t});})},v.prototype.signMessage=function(e){return this._fail("VoidSigner cannot sign messages","signMessage")},v.prototype.sendTransaction=function(e){return this._fail("VoidSigner cannot sign transactions","sendTransaction")},v.prototype.connect=function(e){return new v(this.address,e)},v);function v(e,t){var r=s.call(this)||this;return p.defineReadOnly(r,"address",e),p.defineReadOnly(r,"provider",t),r}r.VoidSigner=g;var b={chainId:!0,data:!0,from:!0,gasLimit:!0,gasPrice:!0,nonce:!0,to:!0,value:!0};function w(o,e,s){var a=o.interface.functions[e];return function(){
  var arguments$1 = arguments;
  for(var e=[],t=0;t<arguments.length;t++){ e[t]=arguments$1[t]; }var i={},r=null;if(e.length===a.inputs.length+1&&"object"==typeof e[e.length-1]){ for(var n in null!=(i=p.shallowCopy(e.pop())).blockTag&&(r=i.blockTag),delete i.blockTag,i){ if(!b[n]){ throw new Error("unknown transaction override "+n); } } }if(e.length!=a.inputs.length){ throw new Error("incorrect number of arguments"); }return ["data","to"].forEach(function(e){null!=i[e]&&l.throwError("cannot override "+e,l.UNSUPPORTED_OPERATION,{operation:e});}),i.to=o._deployed(r).then(function(){return o.addressPromise}),function n(i,o,e){if(Array.isArray(e)){var s=[];return e.forEach(function(e,t){var r=null,r=Array.isArray(o)?o[t]:o[e.name];s.push(n(i,r,e));}),Promise.all(s)}if("address"===e.type){ return i.resolveName(o); }if("tuple"===e.type){ return n(i,o,e.components); }var t=e.type.match(/(.*)(\[[0-9]*\]$)/);if(t){if(!Array.isArray(o)){ throw new Error("invalid value for array"); }var r=[],a={components:e.components,type:t[1]};return o.forEach(function(e){r.push(n(i,e,a));}),Promise.all(r)}return Promise.resolve(o)}(o.provider,e,a.inputs).then(function(n){if(i.data=a.encode(n),"call"===a.type){ return s?Promise.resolve(u.Zero):(o.provider||l.throwError("call (constant functions) require a provider or a signer with a provider",l.UNSUPPORTED_OPERATION,{operation:"call"}),["gasLimit","gasPrice","value"].forEach(function(e){if(null!=i[e]){ throw new Error("call cannot override "+e) }}),null==i.from&&o.signer&&(i.from=o.signer.getAddress()),o.provider.call(i,r).then(function(t){var e;c.hexDataLength(t)%32==4&&"0x08c379a0"===c.hexDataSlice(t,0,4)&&(e=h.defaultAbiCoder.decode(["string"],c.hexDataSlice(t,4)),l.throwError("call revert exception",l.CALL_EXCEPTION,{address:o.address,args:n,method:a.signature,errorSignature:"Error(string)",errorArgs:[e],reason:e,transaction:i}));try{var r=a.decode(t);return r=1===a.outputs.length?r[0]:r}catch(e){throw"0x"===t&&0<a.outputs.length&&l.throwError("call exception",l.CALL_EXCEPTION,{address:o.address,method:a.signature,args:n}),e}})); }if("transaction"===a.type){ return s?(o.provider||l.throwError("estimate gas require a provider or a signer with a provider",l.UNSUPPORTED_OPERATION,{operation:"estimateGas"}),null==i.from&&o.signer&&(i.from=o.signer.getAddress()),o.provider.estimateGas(i)):(null==i.gasLimit&&null!=a.gas&&(i.gasLimit=f.bigNumberify(a.gas).add(21e3)),o.signer||l.throwError("sending a transaction requires a signer",l.UNSUPPORTED_OPERATION,{operation:"sendTransaction"}),null!=i.from&&l.throwError("cannot override from in a transaction",l.UNSUPPORTED_OPERATION,{operation:"sendTransaction"}),o.signer.sendTransaction(i).then(function(e){var t=e.wait.bind(e);return e.wait=function(e){return t(e).then(function(r){return r.events=r.logs.map(function(e){var t=p.deepCopy(e),e=o.interface.parseLog(e);return e&&(t.args=e.values,t.decode=e.decode,t.event=e.name,t.eventSignature=e.signature),t.removeListener=function(){return o.provider},t.getBlock=function(){return o.provider.getBlock(r.blockHash)},t.getTransaction=function(){return o.provider.getTransaction(r.transactionHash)},t.getTransactionReceipt=function(){return Promise.resolve(r)},t}),r})},e})); }throw new Error("invalid type - "+a.type)})}}function _(e){return !e.address||null!=e.topics&&0!==e.topics.length?(e.address||"*")+"@"+(e.topics?e.topics.join(":"):""):"*"}var M=(A.prototype.deployed=function(){return this._deployed()},A.prototype._deployed=function(e){var t=this;return this._deployedPromise||(this.deployTransaction?this._deployedPromise=this.deployTransaction.wait().then(function(){return t}):this._deployedPromise=this.provider.getCode(this.address,e).then(function(e){return "0x"===e&&l.throwError("contract not deployed",l.UNSUPPORTED_OPERATION,{contractAddress:t.address,operation:"getDeployed"}),t})),this._deployedPromise},A.prototype.fallback=function(e){var t=this;this.signer||l.throwError("sending a transaction requires a signer",l.UNSUPPORTED_OPERATION,{operation:"sendTransaction(fallback)"});var r=p.shallowCopy(e||{});return ["from","to"].forEach(function(e){null!=r[e]&&l.throwError("cannot override "+e,l.UNSUPPORTED_OPERATION,{operation:e});}),r.to=this.addressPromise,this.deployed().then(function(){return t.signer.sendTransaction(r)})},A.prototype.connect=function(e){"string"==typeof e&&(e=new g(e,this.provider));e=new A(this.address,this.interface,e);return this.deployTransaction&&p.defineReadOnly(e,"deployTransaction",this.deployTransaction),e},A.prototype.attach=function(e){return new A(e,this.interface,this.signer||this.provider)},A.isIndexed=function(e){return d.Interface.isIndexed(e)},A.prototype._getEventFilter=function(e){var r=this;if("string"==typeof e){if("*"===e){ return {prepareEvent:function(e){var t=r.interface.parseLog(e);return t&&(e.args=t.values,e.decode=t.decode,e.event=t.name,e.eventSignature=t.signature),[e]},eventTag:"*",filter:{address:this.address}}; }-1!==e.indexOf("(")&&(e=h.formatSignature(h.parseSignature("event "+e)));var n=this.interface.events[e];n||l.throwError("unknown event - "+e,l.INVALID_ARGUMENT,{argumnet:"eventName",value:e});var t={address:this.address,topics:[n.topic]};return {prepareEvent:function(e){var t=n.decode(e.data,e.topics);e.args=t;t=Array.prototype.slice.call(t);return t.push(e),t},event:n,eventTag:_(t),filter:t}}var t={address:this.address},i=null;if(e.topics&&e.topics[0]){ for(var o in t.topics=e.topics,this.interface.events){ if(-1!==o.indexOf("(")){o=this.interface.events[o];if(o.topic===e.topics[0].toLowerCase()){i=o;break}} } }return {prepareEvent:function(e){if(!i){ return [e]; }var t=i.decode(e.data,e.topics);e.args=t;t=Array.prototype.slice.call(t);return t.push(e),t},event:i,eventTag:_(t),filter:t}},A.prototype._addEventListener=function(n,i,e){var o=this;this.provider||l.throwError("events require a provider or a signer with a provider",l.UNSUPPORTED_OPERATION,{operation:"once"});function t(e){var t=p.deepCopy(e),r=n.prepareEvent(t);n.event&&(t.decode=n.event.decode,t.event=n.event.name,t.eventSignature=n.event.signature),t.removeListener=function(){o.removeListener(n.filter,i);},t.getBlock=function(){return o.provider.getBlock(e.blockHash)},t.getTransaction=function(){return o.provider.getTransaction(e.transactionHash)},t.getTransactionReceipt=function(){return o.provider.getTransactionReceipt(e.transactionHash)},o.emit.apply(o,[n.filter].concat(r));}this.provider.on(n.filter,t),this._events.push({eventFilter:n,listener:i,wrappedListener:t,once:e});},A.prototype.on=function(e,t){return this._addEventListener(this._getEventFilter(e),t,!1),this},A.prototype.once=function(e,t){return this._addEventListener(this._getEventFilter(e),t,!0),this},A.prototype.addListener=function(e,t){return this.on(e,t)},A.prototype.emit=function(e){
  var arguments$1 = arguments;
  for(var t=this,r=[],n=1;n<arguments.length;n++){ r[n-1]=arguments$1[n]; }if(!this.provider){ return !1; }var i=!1,o=this._getEventFilter(e);return this._events=this._events.filter(function(e){return e.eventFilter.eventTag!==o.eventTag||(setTimeout(function(){e.listener.apply(t,r);},0),i=!0,!e.once)}),i},A.prototype.listenerCount=function(e){if(!this.provider){ return 0; }var t=this._getEventFilter(e);return this._events.filter(function(e){return e.eventFilter.eventTag===t.eventTag}).length},A.prototype.listeners=function(e){if(!this.provider){ return []; }var t=this._getEventFilter(e);return this._events.filter(function(e){return e.eventFilter.eventTag===t.eventTag}).map(function(e){return e.listener})},A.prototype.removeAllListeners=function(e){var t=this;if(!this.provider){ return this; }var r=this._getEventFilter(e);return this._events=this._events.filter(function(e){return e.eventFilter.eventTag!==r.eventTag||(t.provider.removeListener(e.eventFilter.filter,e.wrappedListener),!1)}),this},A.prototype.removeListener=function(e,t){var r=this;if(!this.provider){ return this; }var n=!1,i=this._getEventFilter(e);return this._events=this._events.filter(function(e){return e.eventFilter.eventTag!==i.eventTag||(e.listener!==t||(r.provider.removeListener(e.eventFilter.filter,e.wrappedListener),!!n||!(n=!0)))}),this},A);function A(t,e,r){var n=this;if(l.checkNew(this,A),d.Interface.isInterface(e)?p.defineReadOnly(this,"interface",e):p.defineReadOnly(this,"interface",new d.Interface(e)),m.Signer.isSigner(r)?(p.defineReadOnly(this,"provider",r.provider),p.defineReadOnly(this,"signer",r)):y.Provider.isProvider(r)?(p.defineReadOnly(this,"provider",r),p.defineReadOnly(this,"signer",null)):l.throwError("invalid signer or provider",l.INVALID_ARGUMENT,{arg:"signerOrProvider",value:r}),p.defineReadOnly(this,"estimate",{}),p.defineReadOnly(this,"functions",{}),p.defineReadOnly(this,"filters",{}),Object.keys(this.interface.events).forEach(function(e){var r=n.interface.events[e];p.defineReadOnly(n.filters,e,function(){
  var arguments$1 = arguments;
  for(var e=[],t=0;t<arguments.length;t++){ e[t]=arguments$1[t]; }return {address:n.address,topics:r.encodeTopics(e)}});}),this._events=[],p.defineReadOnly(this,"address",t),this.provider){ p.defineReadOnly(this,"addressPromise",this.provider.resolveName(t).then(function(e){if(null==e){ throw new Error("name not found"); }return e}).catch(function(e){throw e})); }else { try{p.defineReadOnly(this,"addressPromise",Promise.resolve(a.getAddress(t)));}catch(e){l.throwError("provider is required to use non-address contract address",l.INVALID_ARGUMENT,{argument:"addressOrName",value:t});} }Object.keys(this.interface.functions).forEach(function(e){var t=w(n,e,!1);null==n[e]?p.defineReadOnly(n,e,t):l.warn("WARNING: Multiple definitions for "+e),null==n.functions[e]&&(p.defineReadOnly(n.functions,e,t),p.defineReadOnly(n.estimate,e,w(n,e,!0)));});}r.Contract=M;E.prototype.getDeployTransaction=function(){
  var arguments$1 = arguments;
  for(var e=[],t=0;t<arguments.length;t++){ e[t]=arguments$1[t]; }var r={};if(e.length===this.interface.deployFunction.inputs.length+1){ for(var n in r=p.shallowCopy(e.pop())){ if(!b[n]){ throw new Error("unknown transaction override "+n); } } }return ["data","from","to"].forEach(function(e){null!=r[e]&&l.throwError("cannot override "+e,l.UNSUPPORTED_OPERATION,{operation:e});}),l.checkArgumentCount(e.length,this.interface.deployFunction.inputs.length," in Contract constructor"),r.data=this.interface.deployFunction.encode(this.bytecode,e),r},E.prototype.deploy=function(){
  var arguments$1 = arguments;
  for(var r=this,e=[],t=0;t<arguments.length;t++){ e[t]=arguments$1[t]; }var n=this.getDeployTransaction.apply(this,e);return this.signer.sendTransaction(n).then(function(e){var t=new M(a.getContractAddress(e),r.interface,r.signer);return p.defineReadOnly(t,"deployTransaction",e),t})},E.prototype.attach=function(e){return new M(e,this.interface,this.signer)},E.prototype.connect=function(e){return new E(this.interface,this.bytecode,e)},E.fromSolidity=function(e,t){null==e&&l.throwError("missing compiler output",l.MISSING_ARGUMENT,{argument:"compilerOutput"});var r=(e="string"==typeof e?JSON.parse(e):e).abi,n=null;return e.bytecode?n=e.bytecode:e.evm&&e.evm.bytecode&&(n=e.evm.bytecode),new E(r,n,t)},i=E;function E(e,t,r){var n=null;"string"==typeof t?n=t:c.isArrayish(t)?n=c.hexlify(t):"string"==typeof t.object?n=t.object:l.throwError("bytecode must be a valid hex string",l.INVALID_ARGUMENT,{arg:"bytecode",value:t}),"0x"!==n.substring(0,2)&&(n="0x"+n),c.isHexString(n)||l.throwError("bytecode must be a valid hex string",l.INVALID_ARGUMENT,{arg:"bytecode",value:t}),n.length%2!=0&&l.throwError("bytecode must be valid data (even length)",l.INVALID_ARGUMENT,{arg:"bytecode",value:t}),p.defineReadOnly(this,"bytecode",n),d.Interface.isInterface(e)?p.defineReadOnly(this,"interface",e):p.defineReadOnly(this,"interface",new d.Interface(e)),r&&!m.Signer.isSigner(r)&&l.throwError("invalid signer",l.INVALID_ARGUMENT,{arg:"signer",value:null}),p.defineReadOnly(this,"signer",r||null);}r.ContractFactory=i;},{"./abstract-signer":2,"./constants":3,"./errors":5,"./providers/abstract-provider":50,"./utils/abi-coder":59,"./utils/address":60,"./utils/bignumber":63,"./utils/bytes":64,"./utils/interface":69,"./utils/properties":74}],5:[function(e,t,s){Object.defineProperty(s,"__esModule",{value:!0});var a=e("./_version");s.UNKNOWN_ERROR="UNKNOWN_ERROR",s.NOT_IMPLEMENTED="NOT_IMPLEMENTED",s.MISSING_NEW="MISSING_NEW",s.CALL_EXCEPTION="CALL_EXCEPTION",s.INVALID_ARGUMENT="INVALID_ARGUMENT",s.MISSING_ARGUMENT="MISSING_ARGUMENT",s.UNEXPECTED_ARGUMENT="UNEXPECTED_ARGUMENT",s.NUMERIC_FAULT="NUMERIC_FAULT",s.INSUFFICIENT_FUNDS="INSUFFICIENT_FUNDS",s.NONCE_EXPIRED="NONCE_EXPIRED",s.REPLACEMENT_UNDERPRICED="REPLACEMENT_UNDERPRICED";var r=!(s.UNSUPPORTED_OPERATION="UNSUPPORTED_OPERATION"),u=!1;function n(e,t,r){if(u){ throw new Error("unknown error"); }t=t||s.UNKNOWN_ERROR,r=r||{};var n=[];Object.keys(r).forEach(function(t){try{n.push(t+"="+JSON.stringify(r[t]));}catch(e){n.push(t+"="+JSON.stringify(r[t].toString()));}}),n.push("version="+a.version);var i=e;n.length&&(e+=" ("+n.join(", ")+")");var o=new Error(e);throw o.reason=i,o.code=t,Object.keys(r).forEach(function(e){o[e]=r[e];}),o}s.throwError=n,s.checkNew=function(e,t){e instanceof t||n("missing new",s.MISSING_NEW,{name:t.name});},s.checkArgumentCount=function(e,t,r){r=r||"",e<t&&n("missing argument"+r,s.MISSING_ARGUMENT,{count:e,expectedCount:t}),t<e&&n("too many arguments"+r,s.UNEXPECTED_ARGUMENT,{count:e,expectedCount:t});},s.setCensorship=function(e,t){r&&n("error censorship permanent",s.UNSUPPORTED_OPERATION,{operation:"setCensorship"}),u=!!e,r=!!t;},s.checkNormalize=function(){try{if(["NFD","NFC","NFKD","NFKC"].forEach(function(t){try{}catch(e){throw new Error("missing "+t)}}),String.fromCharCode(233).normalize("NFD")!==String.fromCharCode(101,769)){ throw new Error("broken implementation") }}catch(e){n("platform missing String.prototype.normalize",s.UNSUPPORTED_OPERATION,{operation:"String.prototype.normalize",form:e.message});}};var i={debug:1,default:2,info:2,warn:3,error:4,off:5},o=i.default;function l(e,t){o>i[e]||console.log.apply(console,t);}function h(){
  var arguments$1 = arguments;
  for(var e=[],t=0;t<arguments.length;t++){ e[t]=arguments$1[t]; }l("warn",e);}s.setLogLevel=function(e){var t=i[e];null!=t?o=t:h("invliad log level - "+e);},s.warn=h,s.info=function(){
  var arguments$1 = arguments;
  for(var e=[],t=0;t<arguments.length;t++){ e[t]=arguments$1[t]; }l("info",e);};},{"./_version":1}],6:[function(e,t,r){var n=this&&this.__importStar||function(e){if(e&&e.__esModule){ return e; }var t={};if(null!=e){ for(var r in e){ Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]); } }return t.default=e,t};Object.defineProperty(r,"__esModule",{value:!0});var i=e("./contract");r.Contract=i.Contract,r.ContractFactory=i.ContractFactory,r.VoidSigner=i.VoidSigner;i=e("./abstract-signer");r.Signer=i.Signer;i=e("./wallet");r.Wallet=i.Wallet;i=n(e("./constants"));r.constants=i;var o=n(e("./errors"));r.errors=o;var s=n(e("./providers"));r.providers=s;var a=n(e("./utils"));r.utils=a;n=n(e("./wordlists"));r.wordlists=n;n=e("./utils/shims");r.platform=n.platform;e=e("./_version");r.version=e.version,r.getDefaultProvider=function(e){var t=a.getNetwork(e=null==e?"homestead":e);return t&&t._defaultProvider||o.throwError("unsupported getDefaultProvider network",o.UNSUPPORTED_OPERATION,{operation:"getDefaultProvider",network:e}),t._defaultProvider(s)};},{"./_version":1,"./abstract-signer":2,"./constants":3,"./contract":4,"./errors":5,"./providers":54,"./utils":68,"./utils/shims":80,"./wallet":88,"./wordlists":89}],7:[function(e,t,r){var n=this&&this.__importStar||function(e){if(e&&e.__esModule){ return e; }var t={};if(null!=e){ for(var r in e){ Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]); } }return t.default=e,t};Object.defineProperty(r,"__esModule",{value:!0});n=n(e("./ethers"));r.ethers=n,function(e){for(var t in e){ r.hasOwnProperty(t)||(r[t]=e[t]); }}(e("./ethers"));},{"./ethers":6}],8:[function(e,O,C){!function(e){function r(e){return parseInt(e)===e}function n(e){if(r(e.length)){for(var t=0;t<e.length;t++){ if(!r(e[t])||e[t]<0||255<e[t]){ return; } }return 1}}function o(e,t){if(e.buffer&&ArrayBuffer.isView(e)&&"Uint8Array"===e.name){ return e=t?e.slice?e.slice():Array.prototype.slice.call(e):e; }if(Array.isArray(e)){if(!n(e)){ throw new Error("Array contains invalid value: "+e); }return new Uint8Array(e)}if(r(e.length)&&n(e)){ return new Uint8Array(e); }throw new Error("unsupported array-like object")}function u(e){return new Uint8Array(e)}function s(e,t,r,n,i){null==n&&null==i||(e=e.slice?e.slice(n,i):Array.prototype.slice.call(e,n,i)),t.set(e,r);}var i,t={toBytes:function(e){var t=[],r=0;for(e=encodeURI(e);r<e.length;){var n=e.charCodeAt(r++);37===n?(t.push(parseInt(e.substr(r,2),16)),r+=2):t.push(n);}return o(t)},fromBytes:function(e){for(var t=[],r=0;r<e.length;){var n=e[r];n<128?(t.push(String.fromCharCode(n)),r++):191<n&&n<224?(t.push(String.fromCharCode((31&n)<<6|63&e[r+1])),r+=2):(t.push(String.fromCharCode((15&n)<<12|(63&e[r+1])<<6|63&e[r+2])),r+=3);}return t.join("")}},a=(i="0123456789abcdef",{toBytes:function(e){for(var t=[],r=0;r<e.length;r+=2){ t.push(parseInt(e.substr(r,2),16)); }return t},fromBytes:function(e){for(var t=[],r=0;r<e.length;r++){var n=e[r];t.push(i[(240&n)>>4]+i[15&n]);}return t.join("")}}),f={16:10,24:12,32:14},c=[1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],d=[99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],l=[82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125],h=[3328402341,4168907908,4000806809,4135287693,4294111757,3597364157,3731845041,2445657428,1613770832,33620227,3462883241,1445669757,3892248089,3050821474,1303096294,3967186586,2412431941,528646813,2311702848,4202528135,4026202645,2992200171,2387036105,4226871307,1101901292,3017069671,1604494077,1169141738,597466303,1403299063,3832705686,2613100635,1974974402,3791519004,1033081774,1277568618,1815492186,2118074177,4126668546,2211236943,1748251740,1369810420,3521504564,4193382664,3799085459,2883115123,1647391059,706024767,134480908,2512897874,1176707941,2646852446,806885416,932615841,168101135,798661301,235341577,605164086,461406363,3756188221,3454790438,1311188841,2142417613,3933566367,302582043,495158174,1479289972,874125870,907746093,3698224818,3025820398,1537253627,2756858614,1983593293,3084310113,2108928974,1378429307,3722699582,1580150641,327451799,2790478837,3117535592,0,3253595436,1075847264,3825007647,2041688520,3059440621,3563743934,2378943302,1740553945,1916352843,2487896798,2555137236,2958579944,2244988746,3151024235,3320835882,1336584933,3992714006,2252555205,2588757463,1714631509,293963156,2319795663,3925473552,67240454,4269768577,2689618160,2017213508,631218106,1269344483,2723238387,1571005438,2151694528,93294474,1066570413,563977660,1882732616,4059428100,1673313503,2008463041,2950355573,1109467491,537923632,3858759450,4260623118,3218264685,2177748300,403442708,638784309,3287084079,3193921505,899127202,2286175436,773265209,2479146071,1437050866,4236148354,2050833735,3362022572,3126681063,840505643,3866325909,3227541664,427917720,2655997905,2749160575,1143087718,1412049534,999329963,193497219,2353415882,3354324521,1807268051,672404540,2816401017,3160301282,369822493,2916866934,3688947771,1681011286,1949973070,336202270,2454276571,201721354,1210328172,3093060836,2680341085,3184776046,1135389935,3294782118,965841320,831886756,3554993207,4068047243,3588745010,2345191491,1849112409,3664604599,26054028,2983581028,2622377682,1235855840,3630984372,2891339514,4092916743,3488279077,3395642799,4101667470,1202630377,268961816,1874508501,4034427016,1243948399,1546530418,941366308,1470539505,1941222599,2546386513,3421038627,2715671932,3899946140,1042226977,2521517021,1639824860,227249030,260737669,3765465232,2084453954,1907733956,3429263018,2420656344,100860677,4160157185,470683154,3261161891,1781871967,2924959737,1773779408,394692241,2579611992,974986535,664706745,3655459128,3958962195,731420851,571543859,3530123707,2849626480,126783113,865375399,765172662,1008606754,361203602,3387549984,2278477385,2857719295,1344809080,2782912378,59542671,1503764984,160008576,437062935,1707065306,3622233649,2218934982,3496503480,2185314755,697932208,1512910199,504303377,2075177163,2824099068,1841019862,739644986],p=[2781242211,2230877308,2582542199,2381740923,234877682,3184946027,2984144751,1418839493,1348481072,50462977,2848876391,2102799147,434634494,1656084439,3863849899,2599188086,1167051466,2636087938,1082771913,2281340285,368048890,3954334041,3381544775,201060592,3963727277,1739838676,4250903202,3930435503,3206782108,4149453988,2531553906,1536934080,3262494647,484572669,2923271059,1783375398,1517041206,1098792767,49674231,1334037708,1550332980,4098991525,886171109,150598129,2481090929,1940642008,1398944049,1059722517,201851908,1385547719,1699095331,1587397571,674240536,2704774806,252314885,3039795866,151914247,908333586,2602270848,1038082786,651029483,1766729511,3447698098,2682942837,454166793,2652734339,1951935532,775166490,758520603,3000790638,4004797018,4217086112,4137964114,1299594043,1639438038,3464344499,2068982057,1054729187,1901997871,2534638724,4121318227,1757008337,0,750906861,1614815264,535035132,3363418545,3988151131,3201591914,1183697867,3647454910,1265776953,3734260298,3566750796,3903871064,1250283471,1807470800,717615087,3847203498,384695291,3313910595,3617213773,1432761139,2484176261,3481945413,283769337,100925954,2180939647,4037038160,1148730428,3123027871,3813386408,4087501137,4267549603,3229630528,2315620239,2906624658,3156319645,1215313976,82966005,3747855548,3245848246,1974459098,1665278241,807407632,451280895,251524083,1841287890,1283575245,337120268,891687699,801369324,3787349855,2721421207,3431482436,959321879,1469301956,4065699751,2197585534,1199193405,2898814052,3887750493,724703513,2514908019,2696962144,2551808385,3516813135,2141445340,1715741218,2119445034,2872807568,2198571144,3398190662,700968686,3547052216,1009259540,2041044702,3803995742,487983883,1991105499,1004265696,1449407026,1316239930,504629770,3683797321,168560134,1816667172,3837287516,1570751170,1857934291,4014189740,2797888098,2822345105,2754712981,936633572,2347923833,852879335,1133234376,1500395319,3084545389,2348912013,1689376213,3533459022,3762923945,3034082412,4205598294,133428468,634383082,2949277029,2398386810,3913789102,403703816,3580869306,2297460856,1867130149,1918643758,607656988,4049053350,3346248884,1368901318,600565992,2090982877,2632479860,557719327,3717614411,3697393085,2249034635,2232388234,2430627952,1115438654,3295786421,2865522278,3633334344,84280067,33027830,303828494,2747425121,1600795957,4188952407,3496589753,2434238086,1486471617,658119965,3106381470,953803233,334231800,3005978776,857870609,3151128937,1890179545,2298973838,2805175444,3056442267,574365214,2450884487,550103529,1233637070,4289353045,2018519080,2057691103,2399374476,4166623649,2148108681,387583245,3664101311,836232934,3330556482,3100665960,3280093505,2955516313,2002398509,287182607,3413881008,4238890068,3597515707,975967766],y=[1671808611,2089089148,2006576759,2072901243,4061003762,1807603307,1873927791,3310653893,810573872,16974337,1739181671,729634347,4263110654,3613570519,2883997099,1989864566,3393556426,2191335298,3376449993,2106063485,4195741690,1508618841,1204391495,4027317232,2917941677,3563566036,2734514082,2951366063,2629772188,2767672228,1922491506,3227229120,3082974647,4246528509,2477669779,644500518,911895606,1061256767,4144166391,3427763148,878471220,2784252325,3845444069,4043897329,1905517169,3631459288,827548209,356461077,67897348,3344078279,593839651,3277757891,405286936,2527147926,84871685,2595565466,118033927,305538066,2157648768,3795705826,3945188843,661212711,2999812018,1973414517,152769033,2208177539,745822252,439235610,455947803,1857215598,1525593178,2700827552,1391895634,994932283,3596728278,3016654259,695947817,3812548067,795958831,2224493444,1408607827,3513301457,0,3979133421,543178784,4229948412,2982705585,1542305371,1790891114,3410398667,3201918910,961245753,1256100938,1289001036,1491644504,3477767631,3496721360,4012557807,2867154858,4212583931,1137018435,1305975373,861234739,2241073541,1171229253,4178635257,33948674,2139225727,1357946960,1011120188,2679776671,2833468328,1374921297,2751356323,1086357568,2408187279,2460827538,2646352285,944271416,4110742005,3168756668,3066132406,3665145818,560153121,271589392,4279952895,4077846003,3530407890,3444343245,202643468,322250259,3962553324,1608629855,2543990167,1154254916,389623319,3294073796,2817676711,2122513534,1028094525,1689045092,1575467613,422261273,1939203699,1621147744,2174228865,1339137615,3699352540,577127458,712922154,2427141008,2290289544,1187679302,3995715566,3100863416,339486740,3732514782,1591917662,186455563,3681988059,3762019296,844522546,978220090,169743370,1239126601,101321734,611076132,1558493276,3260915650,3547250131,2901361580,1655096418,2443721105,2510565781,3828863972,2039214713,3878868455,3359869896,928607799,1840765549,2374762893,3580146133,1322425422,2850048425,1823791212,1459268694,4094161908,3928346602,1706019429,2056189050,2934523822,135794696,3134549946,2022240376,628050469,779246638,472135708,2800834470,3032970164,3327236038,3894660072,3715932637,1956440180,522272287,1272813131,3185336765,2340818315,2323976074,1888542832,1044544574,3049550261,1722469478,1222152264,50660867,4127324150,236067854,1638122081,895445557,1475980887,3117443513,2257655686,3243809217,489110045,2662934430,3778599393,4162055160,2561878936,288563729,1773916777,3648039385,2391345038,2493985684,2612407707,505560094,2274497927,3911240169,3460925390,1442818645,678973480,3749357023,2358182796,2717407649,2306869641,219617805,3218761151,3862026214,1120306242,1756942440,1103331905,2578459033,762796589,252780047,2966125488,1425844308,3151392187,372911126],m=[1667474886,2088535288,2004326894,2071694838,4075949567,1802223062,1869591006,3318043793,808472672,16843522,1734846926,724270422,4278065639,3621216949,2880169549,1987484396,3402253711,2189597983,3385409673,2105378810,4210693615,1499065266,1195886990,4042263547,2913856577,3570689971,2728590687,2947541573,2627518243,2762274643,1920112356,3233831835,3082273397,4261223649,2475929149,640051788,909531756,1061110142,4160160501,3435941763,875846760,2779116625,3857003729,4059105529,1903268834,3638064043,825316194,353713962,67374088,3351728789,589522246,3284360861,404236336,2526454071,84217610,2593830191,117901582,303183396,2155911963,3806477791,3958056653,656894286,2998062463,1970642922,151591698,2206440989,741110872,437923380,454765878,1852748508,1515908788,2694904667,1381168804,993742198,3604373943,3014905469,690584402,3823320797,791638366,2223281939,1398011302,3520161977,0,3991743681,538992704,4244381667,2981218425,1532751286,1785380564,3419096717,3200178535,960056178,1246420628,1280103576,1482221744,3486468741,3503319995,4025428677,2863326543,4227536621,1128514950,1296947098,859002214,2240123921,1162203018,4193849577,33687044,2139062782,1347481760,1010582648,2678045221,2829640523,1364325282,2745433693,1077985408,2408548869,2459086143,2644360225,943212656,4126475505,3166494563,3065430391,3671750063,555836226,269496352,4294908645,4092792573,3537006015,3452783745,202118168,320025894,3974901699,1600119230,2543297077,1145359496,387397934,3301201811,2812801621,2122220284,1027426170,1684319432,1566435258,421079858,1936954854,1616945344,2172753945,1330631070,3705438115,572679748,707427924,2425400123,2290647819,1179044492,4008585671,3099120491,336870440,3739122087,1583276732,185277718,3688593069,3772791771,842159716,976899700,168435220,1229577106,101059084,606366792,1549591736,3267517855,3553849021,2897014595,1650632388,2442242105,2509612081,3840161747,2038008818,3890688725,3368567691,926374254,1835907034,2374863873,3587531953,1313788572,2846482505,1819063512,1448540844,4109633523,3941213647,1701162954,2054852340,2930698567,134748176,3132806511,2021165296,623210314,774795868,471606328,2795958615,3031746419,3334885783,3907527627,3722280097,1953799400,522133822,1263263126,3183336545,2341176845,2324333839,1886425312,1044267644,3048588401,1718004428,1212733584,50529542,4143317495,235803164,1633788866,892690282,1465383342,3115962473,2256965911,3250673817,488449850,2661202215,3789633753,4177007595,2560144171,286339874,1768537042,3654906025,2391705863,2492770099,2610673197,505291324,2273808917,3924369609,3469625735,1431699370,673740880,3755965093,2358021891,2711746649,2307489801,218961690,3217021541,3873845719,1111672452,1751693520,1094828930,2576986153,757954394,252645662,2964376443,1414855848,3149649517,370555436],g=[1374988112,2118214995,437757123,975658646,1001089995,530400753,2902087851,1273168787,540080725,2910219766,2295101073,4110568485,1340463100,3307916247,641025152,3043140495,3736164937,632953703,1172967064,1576976609,3274667266,2169303058,2370213795,1809054150,59727847,361929877,3211623147,2505202138,3569255213,1484005843,1239443753,2395588676,1975683434,4102977912,2572697195,666464733,3202437046,4035489047,3374361702,2110667444,1675577880,3843699074,2538681184,1649639237,2976151520,3144396420,4269907996,4178062228,1883793496,2403728665,2497604743,1383856311,2876494627,1917518562,3810496343,1716890410,3001755655,800440835,2261089178,3543599269,807962610,599762354,33778362,3977675356,2328828971,2809771154,4077384432,1315562145,1708848333,101039829,3509871135,3299278474,875451293,2733856160,92987698,2767645557,193195065,1080094634,1584504582,3178106961,1042385657,2531067453,3711829422,1306967366,2438237621,1908694277,67556463,1615861247,429456164,3602770327,2302690252,1742315127,2968011453,126454664,3877198648,2043211483,2709260871,2084704233,4169408201,0,159417987,841739592,504459436,1817866830,4245618683,260388950,1034867998,908933415,168810852,1750902305,2606453969,607530554,202008497,2472011535,3035535058,463180190,2160117071,1641816226,1517767529,470948374,3801332234,3231722213,1008918595,303765277,235474187,4069246893,766945465,337553864,1475418501,2943682380,4003061179,2743034109,4144047775,1551037884,1147550661,1543208500,2336434550,3408119516,3069049960,3102011747,3610369226,1113818384,328671808,2227573024,2236228733,3535486456,2935566865,3341394285,496906059,3702665459,226906860,2009195472,733156972,2842737049,294930682,1206477858,2835123396,2700099354,1451044056,573804783,2269728455,3644379585,2362090238,2564033334,2801107407,2776292904,3669462566,1068351396,742039012,1350078989,1784663195,1417561698,4136440770,2430122216,775550814,2193862645,2673705150,1775276924,1876241833,3475313331,3366754619,270040487,3902563182,3678124923,3441850377,1851332852,3969562369,2203032232,3868552805,2868897406,566021896,4011190502,3135740889,1248802510,3936291284,699432150,832877231,708780849,3332740144,899835584,1951317047,4236429990,3767586992,866637845,4043610186,1106041591,2144161806,395441711,1984812685,1139781709,3433712980,3835036895,2664543715,1282050075,3240894392,1181045119,2640243204,25965917,4203181171,4211818798,3009879386,2463879762,3910161971,1842759443,2597806476,933301370,1509430414,3943906441,3467192302,3076639029,3776767469,2051518780,2631065433,1441952575,404016761,1942435775,1408749034,1610459739,3745345300,2017778566,3400528769,3110650942,941896748,3265478751,371049330,3168937228,675039627,4279080257,967311729,135050206,3635733660,1683407248,2076935265,3576870512,1215061108,3501741890],v=[1347548327,1400783205,3273267108,2520393566,3409685355,4045380933,2880240216,2471224067,1428173050,4138563181,2441661558,636813900,4233094615,3620022987,2149987652,2411029155,1239331162,1730525723,2554718734,3781033664,46346101,310463728,2743944855,3328955385,3875770207,2501218972,3955191162,3667219033,768917123,3545789473,692707433,1150208456,1786102409,2029293177,1805211710,3710368113,3065962831,401639597,1724457132,3028143674,409198410,2196052529,1620529459,1164071807,3769721975,2226875310,486441376,2499348523,1483753576,428819965,2274680428,3075636216,598438867,3799141122,1474502543,711349675,129166120,53458370,2592523643,2782082824,4063242375,2988687269,3120694122,1559041666,730517276,2460449204,4042459122,2706270690,3446004468,3573941694,533804130,2328143614,2637442643,2695033685,839224033,1973745387,957055980,2856345839,106852767,1371368976,4181598602,1033297158,2933734917,1179510461,3046200461,91341917,1862534868,4284502037,605657339,2547432937,3431546947,2003294622,3182487618,2282195339,954669403,3682191598,1201765386,3917234703,3388507166,0,2198438022,1211247597,2887651696,1315723890,4227665663,1443857720,507358933,657861945,1678381017,560487590,3516619604,975451694,2970356327,261314535,3535072918,2652609425,1333838021,2724322336,1767536459,370938394,182621114,3854606378,1128014560,487725847,185469197,2918353863,3106780840,3356761769,2237133081,1286567175,3152976349,4255350624,2683765030,3160175349,3309594171,878443390,1988838185,3704300486,1756818940,1673061617,3403100636,272786309,1075025698,545572369,2105887268,4174560061,296679730,1841768865,1260232239,4091327024,3960309330,3497509347,1814803222,2578018489,4195456072,575138148,3299409036,446754879,3629546796,4011996048,3347532110,3252238545,4270639778,915985419,3483825537,681933534,651868046,2755636671,3828103837,223377554,2607439820,1649704518,3270937875,3901806776,1580087799,4118987695,3198115200,2087309459,2842678573,3016697106,1003007129,2802849917,1860738147,2077965243,164439672,4100872472,32283319,2827177882,1709610350,2125135846,136428751,3874428392,3652904859,3460984630,3572145929,3593056380,2939266226,824852259,818324884,3224740454,930369212,2801566410,2967507152,355706840,1257309336,4148292826,243256656,790073846,2373340630,1296297904,1422699085,3756299780,3818836405,457992840,3099667487,2135319889,77422314,1560382517,1945798516,788204353,1521706781,1385356242,870912086,325965383,2358957921,2050466060,2388260884,2313884476,4006521127,901210569,3990953189,1014646705,1503449823,1062597235,2031621326,3212035895,3931371469,1533017514,350174575,2256028891,2177544179,1052338372,741876788,1606591296,1914052035,213705253,2334669897,1107234197,1899603969,3725069491,2631447780,2422494913,1635502980,1893020342,1950903388,1120974935],b=[2807058932,1699970625,2764249623,1586903591,1808481195,1173430173,1487645946,59984867,4199882800,1844882806,1989249228,1277555970,3623636965,3419915562,1149249077,2744104290,1514790577,459744698,244860394,3235995134,1963115311,4027744588,2544078150,4190530515,1608975247,2627016082,2062270317,1507497298,2200818878,567498868,1764313568,3359936201,2305455554,2037970062,1047239e3,1910319033,1337376481,2904027272,2892417312,984907214,1243112415,830661914,861968209,2135253587,2011214180,2927934315,2686254721,731183368,1750626376,4246310725,1820824798,4172763771,3542330227,48394827,2404901663,2871682645,671593195,3254988725,2073724613,145085239,2280796200,2779915199,1790575107,2187128086,472615631,3029510009,4075877127,3802222185,4107101658,3201631749,1646252340,4270507174,1402811438,1436590835,3778151818,3950355702,3963161475,4020912224,2667994737,273792366,2331590177,104699613,95345982,3175501286,2377486676,1560637892,3564045318,369057872,4213447064,3919042237,1137477952,2658625497,1119727848,2340947849,1530455833,4007360968,172466556,266959938,516552836,0,2256734592,3980931627,1890328081,1917742170,4294704398,945164165,3575528878,958871085,3647212047,2787207260,1423022939,775562294,1739656202,3876557655,2530391278,2443058075,3310321856,547512796,1265195639,437656594,3121275539,719700128,3762502690,387781147,218828297,3350065803,2830708150,2848461854,428169201,122466165,3720081049,1627235199,648017665,4122762354,1002783846,2117360635,695634755,3336358691,4234721005,4049844452,3704280881,2232435299,574624663,287343814,612205898,1039717051,840019705,2708326185,793451934,821288114,1391201670,3822090177,376187827,3113855344,1224348052,1679968233,2361698556,1058709744,752375421,2431590963,1321699145,3519142200,2734591178,188127444,2177869557,3727205754,2384911031,3215212461,2648976442,2450346104,3432737375,1180849278,331544205,3102249176,4150144569,2952102595,2159976285,2474404304,766078933,313773861,2570832044,2108100632,1668212892,3145456443,2013908262,418672217,3070356634,2594734927,1852171925,3867060991,3473416636,3907448597,2614737639,919489135,164948639,2094410160,2997825956,590424639,2486224549,1723872674,3157750862,3399941250,3501252752,3625268135,2555048196,3673637356,1343127501,4130281361,3599595085,2957853679,1297403050,81781910,3051593425,2283490410,532201772,1367295589,3926170974,895287692,1953757831,1093597963,492483431,3528626907,1446242576,1192455638,1636604631,209336225,344873464,1015671571,669961897,3375740769,3857572124,2973530695,3747192018,1933530610,3464042516,935293895,3454686199,2858115069,1863638845,3683022916,4085369519,3292445032,875313188,1080017571,3279033885,621591778,1233856572,2504130317,24197544,3017672716,3835484340,3247465558,2220981195,3060847922,1551124588,1463996600],w=[4104605777,1097159550,396673818,660510266,2875968315,2638606623,4200115116,3808662347,821712160,1986918061,3430322568,38544885,3856137295,718002117,893681702,1654886325,2975484382,3122358053,3926825029,4274053469,796197571,1290801793,1184342925,3556361835,2405426947,2459735317,1836772287,1381620373,3196267988,1948373848,3764988233,3385345166,3263785589,2390325492,1480485785,3111247143,3780097726,2293045232,548169417,3459953789,3746175075,439452389,1362321559,1400849762,1685577905,1806599355,2174754046,137073913,1214797936,1174215055,3731654548,2079897426,1943217067,1258480242,529487843,1437280870,3945269170,3049390895,3313212038,923313619,679998e3,3215307299,57326082,377642221,3474729866,2041877159,133361907,1776460110,3673476453,96392454,878845905,2801699524,777231668,4082475170,2330014213,4142626212,2213296395,1626319424,1906247262,1846563261,562755902,3708173718,1040559837,3871163981,1418573201,3294430577,114585348,1343618912,2566595609,3186202582,1078185097,3651041127,3896688048,2307622919,425408743,3371096953,2081048481,1108339068,2216610296,0,2156299017,736970802,292596766,1517440620,251657213,2235061775,2933202493,758720310,265905162,1554391400,1532285339,908999204,174567692,1474760595,4002861748,2610011675,3234156416,3693126241,2001430874,303699484,2478443234,2687165888,585122620,454499602,151849742,2345119218,3064510765,514443284,4044981591,1963412655,2581445614,2137062819,19308535,1928707164,1715193156,4219352155,1126790795,600235211,3992742070,3841024952,836553431,1669664834,2535604243,3323011204,1243905413,3141400786,4180808110,698445255,2653899549,2989552604,2253581325,3252932727,3004591147,1891211689,2487810577,3915653703,4237083816,4030667424,2100090966,865136418,1229899655,953270745,3399679628,3557504664,4118925222,2061379749,3079546586,2915017791,983426092,2022837584,1607244650,2118541908,2366882550,3635996816,972512814,3283088770,1568718495,3499326569,3576539503,621982671,2895723464,410887952,2623762152,1002142683,645401037,1494807662,2595684844,1335535747,2507040230,4293295786,3167684641,367585007,3885750714,1865862730,2668221674,2960971305,2763173681,1059270954,2777952454,2724642869,1320957812,2194319100,2429595872,2815956275,77089521,3973773121,3444575871,2448830231,1305906550,4021308739,2857194700,2516901860,3518358430,1787304780,740276417,1699839814,1592394909,2352307457,2272556026,188821243,1729977011,3687994002,274084841,3594982253,3613494426,2701949495,4162096729,322734571,2837966542,1640576439,484830689,1202797690,3537852828,4067639125,349075736,3342319475,4157467219,4255800159,1030690015,1155237496,2951971274,1757691577,607398968,2738905026,499347990,3794078908,1011452712,227885567,2818666809,213114376,3034881240,1455525988,3414450555,850817237,1817998408,3092726480],_=[0,235474187,470948374,303765277,941896748,908933415,607530554,708780849,1883793496,2118214995,1817866830,1649639237,1215061108,1181045119,1417561698,1517767529,3767586992,4003061179,4236429990,4069246893,3635733660,3602770327,3299278474,3400528769,2430122216,2664543715,2362090238,2193862645,2835123396,2801107407,3035535058,3135740889,3678124923,3576870512,3341394285,3374361702,3810496343,3977675356,4279080257,4043610186,2876494627,2776292904,3076639029,3110650942,2472011535,2640243204,2403728665,2169303058,1001089995,899835584,666464733,699432150,59727847,226906860,530400753,294930682,1273168787,1172967064,1475418501,1509430414,1942435775,2110667444,1876241833,1641816226,2910219766,2743034109,2976151520,3211623147,2505202138,2606453969,2302690252,2269728455,3711829422,3543599269,3240894392,3475313331,3843699074,3943906441,4178062228,4144047775,1306967366,1139781709,1374988112,1610459739,1975683434,2076935265,1775276924,1742315127,1034867998,866637845,566021896,800440835,92987698,193195065,429456164,395441711,1984812685,2017778566,1784663195,1683407248,1315562145,1080094634,1383856311,1551037884,101039829,135050206,437757123,337553864,1042385657,807962610,573804783,742039012,2531067453,2564033334,2328828971,2227573024,2935566865,2700099354,3001755655,3168937228,3868552805,3902563182,4203181171,4102977912,3736164937,3501741890,3265478751,3433712980,1106041591,1340463100,1576976609,1408749034,2043211483,2009195472,1708848333,1809054150,832877231,1068351396,766945465,599762354,159417987,126454664,361929877,463180190,2709260871,2943682380,3178106961,3009879386,2572697195,2538681184,2236228733,2336434550,3509871135,3745345300,3441850377,3274667266,3910161971,3877198648,4110568485,4211818798,2597806476,2497604743,2261089178,2295101073,2733856160,2902087851,3202437046,2968011453,3936291284,3835036895,4136440770,4169408201,3535486456,3702665459,3467192302,3231722213,2051518780,1951317047,1716890410,1750902305,1113818384,1282050075,1584504582,1350078989,168810852,67556463,371049330,404016761,841739592,1008918595,775550814,540080725,3969562369,3801332234,4035489047,4269907996,3569255213,3669462566,3366754619,3332740144,2631065433,2463879762,2160117071,2395588676,2767645557,2868897406,3102011747,3069049960,202008497,33778362,270040487,504459436,875451293,975658646,675039627,641025152,2084704233,1917518562,1615861247,1851332852,1147550661,1248802510,1484005843,1451044056,933301370,967311729,733156972,632953703,260388950,25965917,328671808,496906059,1206477858,1239443753,1543208500,1441952575,2144161806,1908694277,1675577880,1842759443,3610369226,3644379585,3408119516,3307916247,4011190502,3776767469,4077384432,4245618683,2809771154,2842737049,3144396420,3043140495,2673705150,2438237621,2203032232,2370213795],M=[0,185469197,370938394,487725847,741876788,657861945,975451694,824852259,1483753576,1400783205,1315723890,1164071807,1950903388,2135319889,1649704518,1767536459,2967507152,3152976349,2801566410,2918353863,2631447780,2547432937,2328143614,2177544179,3901806776,3818836405,4270639778,4118987695,3299409036,3483825537,3535072918,3652904859,2077965243,1893020342,1841768865,1724457132,1474502543,1559041666,1107234197,1257309336,598438867,681933534,901210569,1052338372,261314535,77422314,428819965,310463728,3409685355,3224740454,3710368113,3593056380,3875770207,3960309330,4045380933,4195456072,2471224067,2554718734,2237133081,2388260884,3212035895,3028143674,2842678573,2724322336,4138563181,4255350624,3769721975,3955191162,3667219033,3516619604,3431546947,3347532110,2933734917,2782082824,3099667487,3016697106,2196052529,2313884476,2499348523,2683765030,1179510461,1296297904,1347548327,1533017514,1786102409,1635502980,2087309459,2003294622,507358933,355706840,136428751,53458370,839224033,957055980,605657339,790073846,2373340630,2256028891,2607439820,2422494913,2706270690,2856345839,3075636216,3160175349,3573941694,3725069491,3273267108,3356761769,4181598602,4063242375,4011996048,3828103837,1033297158,915985419,730517276,545572369,296679730,446754879,129166120,213705253,1709610350,1860738147,1945798516,2029293177,1239331162,1120974935,1606591296,1422699085,4148292826,4233094615,3781033664,3931371469,3682191598,3497509347,3446004468,3328955385,2939266226,2755636671,3106780840,2988687269,2198438022,2282195339,2501218972,2652609425,1201765386,1286567175,1371368976,1521706781,1805211710,1620529459,2105887268,1988838185,533804130,350174575,164439672,46346101,870912086,954669403,636813900,788204353,2358957921,2274680428,2592523643,2441661558,2695033685,2880240216,3065962831,3182487618,3572145929,3756299780,3270937875,3388507166,4174560061,4091327024,4006521127,3854606378,1014646705,930369212,711349675,560487590,272786309,457992840,106852767,223377554,1678381017,1862534868,1914052035,2031621326,1211247597,1128014560,1580087799,1428173050,32283319,182621114,401639597,486441376,768917123,651868046,1003007129,818324884,1503449823,1385356242,1333838021,1150208456,1973745387,2125135846,1673061617,1756818940,2970356327,3120694122,2802849917,2887651696,2637442643,2520393566,2334669897,2149987652,3917234703,3799141122,4284502037,4100872472,3309594171,3460984630,3545789473,3629546796,2050466060,1899603969,1814803222,1730525723,1443857720,1560382517,1075025698,1260232239,575138148,692707433,878443390,1062597235,243256656,91341917,409198410,325965383,3403100636,3252238545,3704300486,3620022987,3874428392,3990953189,4042459122,4227665663,2460449204,2578018489,2226875310,2411029155,3198115200,3046200461,2827177882,2743944855],A=[0,218828297,437656594,387781147,875313188,958871085,775562294,590424639,1750626376,1699970625,1917742170,2135253587,1551124588,1367295589,1180849278,1265195639,3501252752,3720081049,3399941250,3350065803,3835484340,3919042237,4270507174,4085369519,3102249176,3051593425,2734591178,2952102595,2361698556,2177869557,2530391278,2614737639,3145456443,3060847922,2708326185,2892417312,2404901663,2187128086,2504130317,2555048196,3542330227,3727205754,3375740769,3292445032,3876557655,3926170974,4246310725,4027744588,1808481195,1723872674,1910319033,2094410160,1608975247,1391201670,1173430173,1224348052,59984867,244860394,428169201,344873464,935293895,984907214,766078933,547512796,1844882806,1627235199,2011214180,2062270317,1507497298,1423022939,1137477952,1321699145,95345982,145085239,532201772,313773861,830661914,1015671571,731183368,648017665,3175501286,2957853679,2807058932,2858115069,2305455554,2220981195,2474404304,2658625497,3575528878,3625268135,3473416636,3254988725,3778151818,3963161475,4213447064,4130281361,3599595085,3683022916,3432737375,3247465558,3802222185,4020912224,4172763771,4122762354,3201631749,3017672716,2764249623,2848461854,2331590177,2280796200,2431590963,2648976442,104699613,188127444,472615631,287343814,840019705,1058709744,671593195,621591778,1852171925,1668212892,1953757831,2037970062,1514790577,1463996600,1080017571,1297403050,3673637356,3623636965,3235995134,3454686199,4007360968,3822090177,4107101658,4190530515,2997825956,3215212461,2830708150,2779915199,2256734592,2340947849,2627016082,2443058075,172466556,122466165,273792366,492483431,1047239e3,861968209,612205898,695634755,1646252340,1863638845,2013908262,1963115311,1446242576,1530455833,1277555970,1093597963,1636604631,1820824798,2073724613,1989249228,1436590835,1487645946,1337376481,1119727848,164948639,81781910,331544205,516552836,1039717051,821288114,669961897,719700128,2973530695,3157750862,2871682645,2787207260,2232435299,2283490410,2667994737,2450346104,3647212047,3564045318,3279033885,3464042516,3980931627,3762502690,4150144569,4199882800,3070356634,3121275539,2904027272,2686254721,2200818878,2384911031,2570832044,2486224549,3747192018,3528626907,3310321856,3359936201,3950355702,3867060991,4049844452,4234721005,1739656202,1790575107,2108100632,1890328081,1402811438,1586903591,1233856572,1149249077,266959938,48394827,369057872,418672217,1002783846,919489135,567498868,752375421,209336225,24197544,376187827,459744698,945164165,895287692,574624663,793451934,1679968233,1764313568,2117360635,1933530610,1343127501,1560637892,1243112415,1192455638,3704280881,3519142200,3336358691,3419915562,3907448597,3857572124,4075877127,4294704398,3029510009,3113855344,2927934315,2744104290,2159976285,2377486676,2594734927,2544078150],E=[0,151849742,303699484,454499602,607398968,758720310,908999204,1059270954,1214797936,1097159550,1517440620,1400849762,1817998408,1699839814,2118541908,2001430874,2429595872,2581445614,2194319100,2345119218,3034881240,3186202582,2801699524,2951971274,3635996816,3518358430,3399679628,3283088770,4237083816,4118925222,4002861748,3885750714,1002142683,850817237,698445255,548169417,529487843,377642221,227885567,77089521,1943217067,2061379749,1640576439,1757691577,1474760595,1592394909,1174215055,1290801793,2875968315,2724642869,3111247143,2960971305,2405426947,2253581325,2638606623,2487810577,3808662347,3926825029,4044981591,4162096729,3342319475,3459953789,3576539503,3693126241,1986918061,2137062819,1685577905,1836772287,1381620373,1532285339,1078185097,1229899655,1040559837,923313619,740276417,621982671,439452389,322734571,137073913,19308535,3871163981,4021308739,4104605777,4255800159,3263785589,3414450555,3499326569,3651041127,2933202493,2815956275,3167684641,3049390895,2330014213,2213296395,2566595609,2448830231,1305906550,1155237496,1607244650,1455525988,1776460110,1626319424,2079897426,1928707164,96392454,213114376,396673818,514443284,562755902,679998e3,865136418,983426092,3708173718,3557504664,3474729866,3323011204,4180808110,4030667424,3945269170,3794078908,2507040230,2623762152,2272556026,2390325492,2975484382,3092726480,2738905026,2857194700,3973773121,3856137295,4274053469,4157467219,3371096953,3252932727,3673476453,3556361835,2763173681,2915017791,3064510765,3215307299,2156299017,2307622919,2459735317,2610011675,2081048481,1963412655,1846563261,1729977011,1480485785,1362321559,1243905413,1126790795,878845905,1030690015,645401037,796197571,274084841,425408743,38544885,188821243,3613494426,3731654548,3313212038,3430322568,4082475170,4200115116,3780097726,3896688048,2668221674,2516901860,2366882550,2216610296,3141400786,2989552604,2837966542,2687165888,1202797690,1320957812,1437280870,1554391400,1669664834,1787304780,1906247262,2022837584,265905162,114585348,499347990,349075736,736970802,585122620,972512814,821712160,2595684844,2478443234,2293045232,2174754046,3196267988,3079546586,2895723464,2777952454,3537852828,3687994002,3234156416,3385345166,4142626212,4293295786,3841024952,3992742070,174567692,57326082,410887952,292596766,777231668,660510266,1011452712,893681702,1108339068,1258480242,1343618912,1494807662,1715193156,1865862730,1948373848,2100090966,2701949495,2818666809,3004591147,3122358053,2235061775,2352307457,2535604243,2653899549,3915653703,3764988233,4219352155,4067639125,3444575871,3294430577,3746175075,3594982253,836553431,953270745,600235211,718002117,367585007,484830689,133361907,251657213,2041877159,1891211689,1806599355,1654886325,1568718495,1418573201,1335535747,1184342925];function S(e){for(var t=[],r=0;r<e.length;r+=4){ t.push(e[r]<<24|e[r+1]<<16|e[r+2]<<8|e[r+3]); }return t}var k=function(e){if(!(this instanceof k)){ throw Error("AES must be instanitated with `new`"); }Object.defineProperty(this,"key",{value:o(e,!0)}),this._prepare();};k.prototype._prepare=function(){var e=f[this.key.length];if(null==e){ throw new Error("invalid key size (must be 16, 24 or 32 bytes)"); }this._Ke=[],this._Kd=[];for(var t=0;t<=e;t++){ this._Ke.push([0,0,0,0]),this._Kd.push([0,0,0,0]); }for(var r,n=4*(e+1),i=this.key.length/4,o=S(this.key),t=0;t<i;t++){ this._Ke[r=t>>2][t%4]=o[t],this._Kd[e-r][t%4]=o[t]; }for(var s,a=0,u=i;u<n;){if(s=o[i-1],o[0]^=d[s>>16&255]<<24^d[s>>8&255]<<16^d[255&s]<<8^d[s>>24&255]^c[a]<<24,a+=1,8!=i){ for(t=1;t<i;t++){ o[t]^=o[t-1]; } }else{for(t=1;t<i/2;t++){ o[t]^=o[t-1]; }s=o[i/2-1],o[i/2]^=d[255&s]^d[s>>8&255]<<8^d[s>>16&255]<<16^d[s>>24&255]<<24;for(t=i/2+1;t<i;t++){ o[t]^=o[t-1]; }}for(t=0;t<i&&u<n;){ this._Ke[l=u>>2][h=u%4]=o[t],this._Kd[e-l][h]=o[t++],u++; }}for(var l=1;l<e;l++){ for(var h=0;h<4;h++){ s=this._Kd[l][h],this._Kd[l][h]=_[s>>24&255]^M[s>>16&255]^A[s>>8&255]^E[255&s]; } }},k.prototype.encrypt=function(e){if(16!=e.length){ throw new Error("invalid plaintext size (must be 16 bytes)"); }for(var t=this._Ke.length-1,r=[0,0,0,0],n=S(e),i=0;i<4;i++){ n[i]^=this._Ke[0][i]; }for(var o=1;o<t;o++){for(i=0;i<4;i++){ r[i]=h[n[i]>>24&255]^p[n[(i+1)%4]>>16&255]^y[n[(i+2)%4]>>8&255]^m[255&n[(i+3)%4]]^this._Ke[o][i]; }n=r.slice();}for(var s,a=u(16),i=0;i<4;i++){ s=this._Ke[t][i],a[4*i]=255&(d[n[i]>>24&255]^s>>24),a[4*i+1]=255&(d[n[(i+1)%4]>>16&255]^s>>16),a[4*i+2]=255&(d[n[(i+2)%4]>>8&255]^s>>8),a[4*i+3]=255&(d[255&n[(i+3)%4]]^s); }return a},k.prototype.decrypt=function(e){if(16!=e.length){ throw new Error("invalid ciphertext size (must be 16 bytes)"); }for(var t=this._Kd.length-1,r=[0,0,0,0],n=S(e),i=0;i<4;i++){ n[i]^=this._Kd[0][i]; }for(var o=1;o<t;o++){for(i=0;i<4;i++){ r[i]=g[n[i]>>24&255]^v[n[(i+3)%4]>>16&255]^b[n[(i+2)%4]>>8&255]^w[255&n[(i+1)%4]]^this._Kd[o][i]; }n=r.slice();}for(var s,a=u(16),i=0;i<4;i++){ s=this._Kd[t][i],a[4*i]=255&(l[n[i]>>24&255]^s>>24),a[4*i+1]=255&(l[n[(i+3)%4]>>16&255]^s>>16),a[4*i+2]=255&(l[n[(i+2)%4]>>8&255]^s>>8),a[4*i+3]=255&(l[255&n[(i+1)%4]]^s); }return a};var N=function(e){if(!(this instanceof N)){ throw Error("AES must be instanitated with `new`"); }this.description="Electronic Code Block",this.name="ecb",this._aes=new k(e);};N.prototype.encrypt=function(e){if((e=o(e)).length%16!=0){ throw new Error("invalid plaintext size (must be multiple of 16 bytes)"); }for(var t=u(e.length),r=u(16),n=0;n<e.length;n+=16){ s(e,r,0,n,n+16),s(r=this._aes.encrypt(r),t,n); }return t},N.prototype.decrypt=function(e){if((e=o(e)).length%16!=0){ throw new Error("invalid ciphertext size (must be multiple of 16 bytes)"); }for(var t=u(e.length),r=u(16),n=0;n<e.length;n+=16){ s(e,r,0,n,n+16),s(r=this._aes.decrypt(r),t,n); }return t};var x=function(e,t){if(!(this instanceof x)){ throw Error("AES must be instanitated with `new`"); }if(this.description="Cipher Block Chaining",this.name="cbc",t){if(16!=t.length){ throw new Error("invalid initialation vector size (must be 16 bytes)") }}else { t=u(16); }this._lastCipherblock=o(t,!0),this._aes=new k(e);};x.prototype.encrypt=function(e){if((e=o(e)).length%16!=0){ throw new Error("invalid plaintext size (must be multiple of 16 bytes)"); }for(var t=u(e.length),r=u(16),n=0;n<e.length;n+=16){s(e,r,0,n,n+16);for(var i=0;i<16;i++){ r[i]^=this._lastCipherblock[i]; }this._lastCipherblock=this._aes.encrypt(r),s(this._lastCipherblock,t,n);}return t},x.prototype.decrypt=function(e){if((e=o(e)).length%16!=0){ throw new Error("invalid ciphertext size (must be multiple of 16 bytes)"); }for(var t=u(e.length),r=u(16),n=0;n<e.length;n+=16){s(e,r,0,n,n+16);for(var r=this._aes.decrypt(r),i=0;i<16;i++){ t[n+i]=r[i]^this._lastCipherblock[i]; }s(e,this._lastCipherblock,0,n,n+16);}return t};var P=function(e,t,r){if(!(this instanceof P)){ throw Error("AES must be instanitated with `new`"); }if(this.description="Cipher Feedback",this.name="cfb",t){if(16!=t.length){ throw new Error("invalid initialation vector size (must be 16 size)") }}else { t=u(16); }this.segmentSize=r=r||1,this._shiftRegister=o(t,!0),this._aes=new k(e);};P.prototype.encrypt=function(e){if(e.length%this.segmentSize!=0){ throw new Error("invalid plaintext size (must be segmentSize bytes)"); }for(var t=o(e,!0),r=0;r<t.length;r+=this.segmentSize){for(var n=this._aes.encrypt(this._shiftRegister),i=0;i<this.segmentSize;i++){ t[r+i]^=n[i]; }s(this._shiftRegister,this._shiftRegister,0,this.segmentSize),s(t,this._shiftRegister,16-this.segmentSize,r,r+this.segmentSize);}return t},P.prototype.decrypt=function(e){if(e.length%this.segmentSize!=0){ throw new Error("invalid ciphertext size (must be segmentSize bytes)"); }for(var t=o(e,!0),r=0;r<t.length;r+=this.segmentSize){for(var n=this._aes.encrypt(this._shiftRegister),i=0;i<this.segmentSize;i++){ t[r+i]^=n[i]; }s(this._shiftRegister,this._shiftRegister,0,this.segmentSize),s(e,this._shiftRegister,16-this.segmentSize,r,r+this.segmentSize);}return t};var I=function(e,t){if(!(this instanceof I)){ throw Error("AES must be instanitated with `new`"); }if(this.description="Output Feedback",this.name="ofb",t){if(16!=t.length){ throw new Error("invalid initialation vector size (must be 16 bytes)") }}else { t=u(16); }this._lastPrecipher=o(t,!0),this._lastPrecipherIndex=16,this._aes=new k(e);};I.prototype.encrypt=function(e){for(var t=o(e,!0),r=0;r<t.length;r++){ 16===this._lastPrecipherIndex&&(this._lastPrecipher=this._aes.encrypt(this._lastPrecipher),this._lastPrecipherIndex=0),t[r]^=this._lastPrecipher[this._lastPrecipherIndex++]; }return t},I.prototype.decrypt=I.prototype.encrypt;var T=function(e){if(!(this instanceof T)){ throw Error("Counter must be instanitated with `new`"); }"number"==typeof(e=0!==e&&!e?1:e)?(this._counter=u(16),this.setValue(e)):this.setBytes(e);};T.prototype.setValue=function(e){if("number"!=typeof e||parseInt(e)!=e){ throw new Error("invalid counter value (must be an integer)"); }for(var t=15;0<=t;--t){ this._counter[t]=e%256,e>>=8; }},T.prototype.setBytes=function(e){if(16!=(e=o(e,!0)).length){ throw new Error("invalid counter bytes size (must be 16 bytes)"); }this._counter=e;},T.prototype.increment=function(){for(var e=15;0<=e;e--){if(255!==this._counter[e]){this._counter[e]++;break}this._counter[e]=0;}};var R=function(e,t){if(!(this instanceof R)){ throw Error("AES must be instanitated with `new`"); }this.description="Counter",this.name="ctr",t instanceof T||(t=new T(t)),this._counter=t,this._remainingCounter=null,this._remainingCounterIndex=16,this._aes=new k(e);};R.prototype.encrypt=function(e){for(var t=o(e,!0),r=0;r<t.length;r++){ 16===this._remainingCounterIndex&&(this._remainingCounter=this._aes.encrypt(this._counter._counter),this._remainingCounterIndex=0,this._counter.increment()),t[r]^=this._remainingCounter[this._remainingCounterIndex++]; }return t},R.prototype.decrypt=R.prototype.encrypt;t={AES:k,Counter:T,ModeOfOperation:{ecb:N,cbc:x,cfb:P,ofb:I,ctr:R},utils:{hex:a,utf8:t},padding:{pkcs7:{pad:function(e){var t=16-(e=o(e,!0)).length%16,r=u(e.length+t);s(e,r);for(var n=e.length;n<r.length;n++){ r[n]=t; }return r},strip:function(e){if((e=o(e,!0)).length<16){ throw new Error("PKCS#7 invalid length"); }var t=e[e.length-1];if(16<t){ throw new Error("PKCS#7 padding byte out of range"); }for(var r=e.length-t,n=0;n<t;n++){ if(e[r+n]!==t){ throw new Error("PKCS#7 invalid padding byte"); } }var i=u(r);return s(e,i,0,0,r),i}}},_arrayTest:{coerceArray:o,createArray:u,copyArray:s}};void 0!==C?O.exports=t:(e.aesjs&&(t._aesjs=e.aesjs),e.aesjs=t);}(this);},{}],9:[function(E,e,t){!function(e,t){function y(e,t){if(!e){ throw new Error(t||"Assertion failed") }}function r(e,t){e.super_=t;function r(){}r.prototype=t.prototype,e.prototype=new r,e.prototype.constructor=e;}function m(e,t,r){if(m.isBN(e)){ return e; }this.negative=0,this.words=null,this.length=0,(this.red=null)!==e&&("le"!==t&&"be"!==t||(r=t,t=10),this._init(e||0,t||10,r||"be"));}var n;"object"==typeof e?e.exports=m:t.BN=m,(m.BN=m).wordSize=26;try{n=("undefined"!=typeof window&&void 0!==window.Buffer?window:E("buffer")).Buffer;}catch(e){}function i(e,t){t=e.charCodeAt(t);return 65<=t&&t<=70?t-55:97<=t&&t<=102?t-87:t-48&15}function a(e,t,r){var n=i(e,r);return t<=r-1&&(n|=i(e,r-1)<<4),n}function f(e,t,r,n){for(var i=0,o=Math.min(e.length,r),s=t;s<o;s++){var a=e.charCodeAt(s)-48;i*=n,i+=49<=a?a-49+10:17<=a?a-17+10:a;}return i}m.isBN=function(e){return e instanceof m||null!==e&&"object"==typeof e&&e.constructor.wordSize===m.wordSize&&Array.isArray(e.words)},m.max=function(e,t){return 0<e.cmp(t)?e:t},m.min=function(e,t){return e.cmp(t)<0?e:t},m.prototype._init=function(e,t,r){if("number"==typeof e){ return this._initNumber(e,t,r); }if("object"==typeof e){ return this._initArray(e,t,r); }y((t="hex"===t?16:t)===(0|t)&&2<=t&&t<=36);var n=0;"-"===(e=e.toString().replace(/\s+/g,""))[0]&&(n++,this.negative=1),n<e.length&&(16===t?this._parseHex(e,n,r):(this._parseBase(e,t,n),"le"===r&&this._initArray(this.toArray(),t,r)));},m.prototype._initNumber=function(e,t,r){e<0&&(this.negative=1,e=-e),e<67108864?(this.words=[67108863&e],this.length=1):e<4503599627370496?(this.words=[67108863&e,e/67108864&67108863],this.length=2):(y(e<9007199254740992),this.words=[67108863&e,e/67108864&67108863,1],this.length=3),"le"===r&&this._initArray(this.toArray(),t,r);},m.prototype._initArray=function(e,t,r){if(y("number"==typeof e.length),e.length<=0){ return this.words=[0],this.length=1,this; }this.length=Math.ceil(e.length/3),this.words=new Array(this.length);for(var n,i,o=0;o<this.length;o++){ this.words[o]=0; }var s=0;if("be"===r){ for(o=e.length-1,n=0;0<=o;o-=3){ i=e[o]|e[o-1]<<8|e[o-2]<<16,this.words[n]|=i<<s&67108863,this.words[n+1]=i>>>26-s&67108863,26<=(s+=24)&&(s-=26,n++); } }else if("le"===r){ for(n=o=0;o<e.length;o+=3){ i=e[o]|e[o+1]<<8|e[o+2]<<16,this.words[n]|=i<<s&67108863,this.words[n+1]=i>>>26-s&67108863,26<=(s+=24)&&(s-=26,n++); } }return this.strip()},m.prototype._parseHex=function(e,t,r){this.length=Math.ceil((e.length-t)/6),this.words=new Array(this.length);for(var n=0;n<this.length;n++){ this.words[n]=0; }var i,o=0,s=0;if("be"===r){ for(n=e.length-1;t<=n;n-=2){ i=a(e,t,n)<<o,this.words[s]|=67108863&i,18<=o?(o-=18,this.words[s+=1]|=i>>>26):o+=8; } }else { for(n=(e.length-t)%2==0?t+1:t;n<e.length;n+=2){ i=a(e,t,n)<<o,this.words[s]|=67108863&i,18<=o?(o-=18,this.words[s+=1]|=i>>>26):o+=8; } }this.strip();},m.prototype._parseBase=function(e,t,r){this.words=[0];for(var n=0,i=this.length=1;i<=67108863;i*=t){ n++; }for(var i=i/t|0,o=e.length-r,s=o%--n,a=Math.min(o,o-s)+r,u=0,l=r;l<a;l+=n){ u=f(e,l,l+n,t),this.imuln(i),this.words[0]+u<67108864?this.words[0]+=u:this._iaddn(u); }if(0!=s){for(var h=1,u=f(e,l,e.length,t),l=0;l<s;l++){ h*=t; }this.imuln(h),this.words[0]+u<67108864?this.words[0]+=u:this._iaddn(u);}this.strip();},m.prototype.copy=function(e){e.words=new Array(this.length);for(var t=0;t<this.length;t++){ e.words[t]=this.words[t]; }e.length=this.length,e.negative=this.negative,e.red=this.red;},m.prototype.clone=function(){var e=new m(null);return this.copy(e),e},m.prototype._expand=function(e){for(;this.length<e;){ this.words[this.length++]=0; }return this},m.prototype.strip=function(){for(;1<this.length&&0===this.words[this.length-1];){ this.length--; }return this._normSign()},m.prototype._normSign=function(){return 1===this.length&&0===this.words[0]&&(this.negative=0),this},m.prototype.inspect=function(){return (this.red?"<BN-R: ":"<BN: ")+this.toString(16)+">"};var c=["","0","00","000","0000","00000","000000","0000000","00000000","000000000","0000000000","00000000000","000000000000","0000000000000","00000000000000","000000000000000","0000000000000000","00000000000000000","000000000000000000","0000000000000000000","00000000000000000000","000000000000000000000","0000000000000000000000","00000000000000000000000","000000000000000000000000","0000000000000000000000000"],d=[0,0,25,16,12,11,10,9,8,8,7,7,7,7,6,6,6,6,6,6,6,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],p=[0,0,33554432,43046721,16777216,48828125,60466176,40353607,16777216,43046721,1e7,19487171,35831808,62748517,7529536,11390625,16777216,24137569,34012224,47045881,64e6,4084101,5153632,6436343,7962624,9765625,11881376,14348907,17210368,20511149,243e5,28629151,33554432,39135393,45435424,52521875,60466176];function o(e,t,r){r.negative=t.negative^e.negative;var n=e.length+t.length|0,n=(r.length=n)-1|0,i=(s=(0|e.words[0])*(0|t.words[0]))/67108864|0;r.words[0]=67108863&s;for(var o=1;o<n;o++){for(var s,a=i>>>26,u=67108863&i,l=Math.min(o,t.length-1),h=Math.max(0,o-e.length+1);h<=l;h++){ a+=(s=(0|e.words[o-h|0])*(0|t.words[h])+u)/67108864|0,u=67108863&s; }r.words[o]=0|u,i=0|a;}return 0!==i?r.words[o]=0|i:r.length--,r.strip()}m.prototype.toString=function(e,t){if(t=0|t||1,16===(e=e||10)||"hex"===e){a="";for(var r=0,n=0,i=0;i<this.length;i++){var o=this.words[i],s=(16777215&(o<<r|n)).toString(16),a=0!==(n=o>>>24-r&16777215)||i!==this.length-1?c[6-s.length]+s+a:s+a;26<=(r+=2)&&(r-=26,i--);}for(0!==n&&(a=n.toString(16)+a);a.length%t!=0;){ a="0"+a; }return a=0!==this.negative?"-"+a:a}if(e===(0|e)&&2<=e&&e<=36){var u=d[e],l=p[e];for(a="",(h=this.clone()).negative=0;!h.isZero();){var h,f=h.modn(l).toString(e);a=(h=h.idivn(l)).isZero()?f+a:c[u-f.length]+f+a;}for(this.isZero()&&(a="0"+a);a.length%t!=0;){ a="0"+a; }return a=0!==this.negative?"-"+a:a}y(!1,"Base should be between 2 and 36");},m.prototype.toNumber=function(){var e=this.words[0];return 2===this.length?e+=67108864*this.words[1]:3===this.length&&1===this.words[2]?e+=4503599627370496+67108864*this.words[1]:2<this.length&&y(!1,"Number can only safely store up to 53 bits"),0!==this.negative?-e:e},m.prototype.toJSON=function(){return this.toString(16)},m.prototype.toBuffer=function(e,t){return y(void 0!==n),this.toArrayLike(n,e,t)},m.prototype.toArray=function(e,t){return this.toArrayLike(Array,e,t)},m.prototype.toArrayLike=function(e,t,r){var n=this.byteLength(),i=r||Math.max(1,n);y(n<=i,"byte array longer than desired length"),y(0<i,"Requested array length <= 0"),this.strip();var o,s,t="le"===t,a=new e(i),u=this.clone();if(t){for(s=0;!u.isZero();s++){ o=u.andln(255),u.iushrn(8),a[s]=o; }for(;s<i;s++){ a[s]=0; }}else{for(s=0;s<i-n;s++){ a[s]=0; }for(s=0;!u.isZero();s++){ o=u.andln(255),u.iushrn(8),a[i-s-1]=o; }}return a},Math.clz32?m.prototype._countBits=function(e){return 32-Math.clz32(e)}:m.prototype._countBits=function(e){var t=e,e=0;return 4096<=t&&(e+=13,t>>>=13),64<=t&&(e+=7,t>>>=7),8<=t&&(e+=4,t>>>=4),2<=t&&(e+=2,t>>>=2),e+t},m.prototype._zeroBits=function(e){if(0===e){ return 26; }var t=e,e=0;return 0==(8191&t)&&(e+=13,t>>>=13),0==(127&t)&&(e+=7,t>>>=7),0==(15&t)&&(e+=4,t>>>=4),0==(3&t)&&(e+=2,t>>>=2),0==(1&t)&&e++,e},m.prototype.bitLength=function(){var e=this.words[this.length-1],e=this._countBits(e);return 26*(this.length-1)+e},m.prototype.zeroBits=function(){if(this.isZero()){ return 0; }for(var e=0,t=0;t<this.length;t++){var r=this._zeroBits(this.words[t]);if(e+=r,26!==r){ break }}return e},m.prototype.byteLength=function(){return Math.ceil(this.bitLength()/8)},m.prototype.toTwos=function(e){return 0!==this.negative?this.abs().inotn(e).iaddn(1):this.clone()},m.prototype.fromTwos=function(e){return this.testn(e-1)?this.notn(e).iaddn(1).ineg():this.clone()},m.prototype.isNeg=function(){return 0!==this.negative},m.prototype.neg=function(){return this.clone().ineg()},m.prototype.ineg=function(){return this.isZero()||(this.negative^=1),this},m.prototype.iuor=function(e){for(;this.length<e.length;){ this.words[this.length++]=0; }for(var t=0;t<e.length;t++){ this.words[t]=this.words[t]|e.words[t]; }return this.strip()},m.prototype.ior=function(e){return y(0==(this.negative|e.negative)),this.iuor(e)},m.prototype.or=function(e){return this.length>e.length?this.clone().ior(e):e.clone().ior(this)},m.prototype.uor=function(e){return this.length>e.length?this.clone().iuor(e):e.clone().iuor(this)},m.prototype.iuand=function(e){for(var t=this.length>e.length?e:this,r=0;r<t.length;r++){ this.words[r]=this.words[r]&e.words[r]; }return this.length=t.length,this.strip()},m.prototype.iand=function(e){return y(0==(this.negative|e.negative)),this.iuand(e)},m.prototype.and=function(e){return this.length>e.length?this.clone().iand(e):e.clone().iand(this)},m.prototype.uand=function(e){return this.length>e.length?this.clone().iuand(e):e.clone().iuand(this)},m.prototype.iuxor=function(e){for(var t,r=this.length>e.length?(t=this,e):(t=e,this),n=0;n<r.length;n++){ this.words[n]=t.words[n]^r.words[n]; }if(this!==t){ for(;n<t.length;n++){ this.words[n]=t.words[n]; } }return this.length=t.length,this.strip()},m.prototype.ixor=function(e){return y(0==(this.negative|e.negative)),this.iuxor(e)},m.prototype.xor=function(e){return this.length>e.length?this.clone().ixor(e):e.clone().ixor(this)},m.prototype.uxor=function(e){return this.length>e.length?this.clone().iuxor(e):e.clone().iuxor(this)},m.prototype.inotn=function(e){y("number"==typeof e&&0<=e);var t=0|Math.ceil(e/26),e=e%26;this._expand(t),0<e&&t--;for(var r=0;r<t;r++){ this.words[r]=67108863&~this.words[r]; }return 0<e&&(this.words[r]=~this.words[r]&67108863>>26-e),this.strip()},m.prototype.notn=function(e){return this.clone().inotn(e)},m.prototype.setn=function(e,t){y("number"==typeof e&&0<=e);var r=e/26|0,e=e%26;return this._expand(1+r),this.words[r]=t?this.words[r]|1<<e:this.words[r]&~(1<<e),this.strip()},m.prototype.iadd=function(e){var t,r;if(0!==this.negative&&0===e.negative){ return this.negative=0,t=this.isub(e),this.negative^=1,this._normSign(); }if(0===this.negative&&0!==e.negative){ return e.negative=0,t=this.isub(e),e.negative=1,t._normSign(); }for(var n=this.length>e.length?(r=this,e):(r=e,this),i=0,o=0;o<n.length;o++){ t=(0|r.words[o])+(0|n.words[o])+i,this.words[o]=67108863&t,i=t>>>26; }for(;0!==i&&o<r.length;o++){ t=(0|r.words[o])+i,this.words[o]=67108863&t,i=t>>>26; }if(this.length=r.length,0!==i){ this.words[this.length]=i,this.length++; }else if(r!==this){ for(;o<r.length;o++){ this.words[o]=r.words[o]; } }return this},m.prototype.add=function(e){var t;return 0!==e.negative&&0===this.negative?(e.negative=0,t=this.sub(e),e.negative^=1,t):0===e.negative&&0!==this.negative?(this.negative=0,t=e.sub(this),this.negative=1,t):this.length>e.length?this.clone().iadd(e):e.clone().iadd(this)},m.prototype.isub=function(e){if(0!==e.negative){e.negative=0;var t=this.iadd(e);return e.negative=1,t._normSign()}if(0!==this.negative){ return this.negative=0,this.iadd(e),this.negative=1,this._normSign(); }var r,n=this.cmp(e);if(0===n){ return this.negative=0,this.length=1,this.words[0]=0,this; }for(var i=0<n?(r=this,e):(r=e,this),o=0,s=0;s<i.length;s++){ o=(t=(0|r.words[s])-(0|i.words[s])+o)>>26,this.words[s]=67108863&t; }for(;0!==o&&s<r.length;s++){ o=(t=(0|r.words[s])+o)>>26,this.words[s]=67108863&t; }if(0===o&&s<r.length&&r!==this){ for(;s<r.length;s++){ this.words[s]=r.words[s]; } }return this.length=Math.max(this.length,s),r!==this&&(this.negative=1),this.strip()},m.prototype.sub=function(e){return this.clone().isub(e)};var s=function(e,t,r){var n=e.words,i=t.words,o=r.words,s=0|n[0],a=8191&s,u=s>>>13,l=0|n[1],h=8191&l,f=l>>>13,c=0|n[2],d=8191&c,p=c>>>13,y=0|n[3],m=8191&y,g=y>>>13,v=0|n[4],b=8191&v,w=v>>>13,_=0|n[5],M=8191&_,A=_>>>13,E=0|n[6],S=8191&E,k=E>>>13,N=0|n[7],x=8191&N,P=N>>>13,I=0|n[8],T=8191&I,R=I>>>13,O=0|n[9],C=8191&O,L=O>>>13,B=0|i[0],D=8191&B,U=B>>>13,F=0|i[1],j=8191&F,G=F>>>13,H=0|i[2],z=8191&H,V=H>>>13,K=0|i[3],q=8191&K,W=K>>>13,Z=0|i[4],J=8191&Z,X=Z>>>13,$=0|i[5],Q=8191&$,Y=$>>>13,s=0|i[6],l=8191&s,c=s>>>13,y=0|i[7],v=8191&y,_=y>>>13,E=0|i[8],N=8191&E,I=E>>>13,n=0|i[9],O=8191&n,B=n>>>13;r.negative=e.negative^t.negative,r.length=19;var K=(0+Math.imul(a,D)|0)+((8191&(H=(H=Math.imul(a,U))+Math.imul(u,D)|0))<<13)|0,ee=((Z=Math.imul(u,U))+(H>>>13)|0)+(K>>>26)|0;K&=67108863,F=Math.imul(h,D),H=(H=Math.imul(h,U))+Math.imul(f,D)|0,Z=Math.imul(f,U);$=(ee+(F+Math.imul(a,j)|0)|0)+((8191&(H=(H=H+Math.imul(a,G)|0)+Math.imul(u,j)|0))<<13)|0;ee=((Z=Z+Math.imul(u,G)|0)+(H>>>13)|0)+($>>>26)|0,$&=67108863,F=Math.imul(d,D),H=(H=Math.imul(d,U))+Math.imul(p,D)|0,Z=Math.imul(p,U),F=F+Math.imul(h,j)|0,H=(H=H+Math.imul(h,G)|0)+Math.imul(f,j)|0,Z=Z+Math.imul(f,G)|0;s=(ee+(F+Math.imul(a,z)|0)|0)+((8191&(H=(H=H+Math.imul(a,V)|0)+Math.imul(u,z)|0))<<13)|0;ee=((Z=Z+Math.imul(u,V)|0)+(H>>>13)|0)+(s>>>26)|0,s&=67108863,F=Math.imul(m,D),H=(H=Math.imul(m,U))+Math.imul(g,D)|0,Z=Math.imul(g,U),F=F+Math.imul(d,j)|0,H=(H=H+Math.imul(d,G)|0)+Math.imul(p,j)|0,Z=Z+Math.imul(p,G)|0,F=F+Math.imul(h,z)|0,H=(H=H+Math.imul(h,V)|0)+Math.imul(f,z)|0,Z=Z+Math.imul(f,V)|0;y=(ee+(F+Math.imul(a,q)|0)|0)+((8191&(H=(H=H+Math.imul(a,W)|0)+Math.imul(u,q)|0))<<13)|0;ee=((Z=Z+Math.imul(u,W)|0)+(H>>>13)|0)+(y>>>26)|0,y&=67108863,F=Math.imul(b,D),H=(H=Math.imul(b,U))+Math.imul(w,D)|0,Z=Math.imul(w,U),F=F+Math.imul(m,j)|0,H=(H=H+Math.imul(m,G)|0)+Math.imul(g,j)|0,Z=Z+Math.imul(g,G)|0,F=F+Math.imul(d,z)|0,H=(H=H+Math.imul(d,V)|0)+Math.imul(p,z)|0,Z=Z+Math.imul(p,V)|0,F=F+Math.imul(h,q)|0,H=(H=H+Math.imul(h,W)|0)+Math.imul(f,q)|0,Z=Z+Math.imul(f,W)|0;E=(ee+(F+Math.imul(a,J)|0)|0)+((8191&(H=(H=H+Math.imul(a,X)|0)+Math.imul(u,J)|0))<<13)|0;ee=((Z=Z+Math.imul(u,X)|0)+(H>>>13)|0)+(E>>>26)|0,E&=67108863,F=Math.imul(M,D),H=(H=Math.imul(M,U))+Math.imul(A,D)|0,Z=Math.imul(A,U),F=F+Math.imul(b,j)|0,H=(H=H+Math.imul(b,G)|0)+Math.imul(w,j)|0,Z=Z+Math.imul(w,G)|0,F=F+Math.imul(m,z)|0,H=(H=H+Math.imul(m,V)|0)+Math.imul(g,z)|0,Z=Z+Math.imul(g,V)|0,F=F+Math.imul(d,q)|0,H=(H=H+Math.imul(d,W)|0)+Math.imul(p,q)|0,Z=Z+Math.imul(p,W)|0,F=F+Math.imul(h,J)|0,H=(H=H+Math.imul(h,X)|0)+Math.imul(f,J)|0,Z=Z+Math.imul(f,X)|0;i=(ee+(F+Math.imul(a,Q)|0)|0)+((8191&(H=(H=H+Math.imul(a,Y)|0)+Math.imul(u,Q)|0))<<13)|0;ee=((Z=Z+Math.imul(u,Y)|0)+(H>>>13)|0)+(i>>>26)|0,i&=67108863,F=Math.imul(S,D),H=(H=Math.imul(S,U))+Math.imul(k,D)|0,Z=Math.imul(k,U),F=F+Math.imul(M,j)|0,H=(H=H+Math.imul(M,G)|0)+Math.imul(A,j)|0,Z=Z+Math.imul(A,G)|0,F=F+Math.imul(b,z)|0,H=(H=H+Math.imul(b,V)|0)+Math.imul(w,z)|0,Z=Z+Math.imul(w,V)|0,F=F+Math.imul(m,q)|0,H=(H=H+Math.imul(m,W)|0)+Math.imul(g,q)|0,Z=Z+Math.imul(g,W)|0,F=F+Math.imul(d,J)|0,H=(H=H+Math.imul(d,X)|0)+Math.imul(p,J)|0,Z=Z+Math.imul(p,X)|0,F=F+Math.imul(h,Q)|0,H=(H=H+Math.imul(h,Y)|0)+Math.imul(f,Q)|0,Z=Z+Math.imul(f,Y)|0;n=(ee+(F+Math.imul(a,l)|0)|0)+((8191&(H=(H=H+Math.imul(a,c)|0)+Math.imul(u,l)|0))<<13)|0;ee=((Z=Z+Math.imul(u,c)|0)+(H>>>13)|0)+(n>>>26)|0,n&=67108863,F=Math.imul(x,D),H=(H=Math.imul(x,U))+Math.imul(P,D)|0,Z=Math.imul(P,U),F=F+Math.imul(S,j)|0,H=(H=H+Math.imul(S,G)|0)+Math.imul(k,j)|0,Z=Z+Math.imul(k,G)|0,F=F+Math.imul(M,z)|0,H=(H=H+Math.imul(M,V)|0)+Math.imul(A,z)|0,Z=Z+Math.imul(A,V)|0,F=F+Math.imul(b,q)|0,H=(H=H+Math.imul(b,W)|0)+Math.imul(w,q)|0,Z=Z+Math.imul(w,W)|0,F=F+Math.imul(m,J)|0,H=(H=H+Math.imul(m,X)|0)+Math.imul(g,J)|0,Z=Z+Math.imul(g,X)|0,F=F+Math.imul(d,Q)|0,H=(H=H+Math.imul(d,Y)|0)+Math.imul(p,Q)|0,Z=Z+Math.imul(p,Y)|0,F=F+Math.imul(h,l)|0,H=(H=H+Math.imul(h,c)|0)+Math.imul(f,l)|0,Z=Z+Math.imul(f,c)|0;e=(ee+(F+Math.imul(a,v)|0)|0)+((8191&(H=(H=H+Math.imul(a,_)|0)+Math.imul(u,v)|0))<<13)|0;ee=((Z=Z+Math.imul(u,_)|0)+(H>>>13)|0)+(e>>>26)|0,e&=67108863,F=Math.imul(T,D),H=(H=Math.imul(T,U))+Math.imul(R,D)|0,Z=Math.imul(R,U),F=F+Math.imul(x,j)|0,H=(H=H+Math.imul(x,G)|0)+Math.imul(P,j)|0,Z=Z+Math.imul(P,G)|0,F=F+Math.imul(S,z)|0,H=(H=H+Math.imul(S,V)|0)+Math.imul(k,z)|0,Z=Z+Math.imul(k,V)|0,F=F+Math.imul(M,q)|0,H=(H=H+Math.imul(M,W)|0)+Math.imul(A,q)|0,Z=Z+Math.imul(A,W)|0,F=F+Math.imul(b,J)|0,H=(H=H+Math.imul(b,X)|0)+Math.imul(w,J)|0,Z=Z+Math.imul(w,X)|0,F=F+Math.imul(m,Q)|0,H=(H=H+Math.imul(m,Y)|0)+Math.imul(g,Q)|0,Z=Z+Math.imul(g,Y)|0,F=F+Math.imul(d,l)|0,H=(H=H+Math.imul(d,c)|0)+Math.imul(p,l)|0,Z=Z+Math.imul(p,c)|0,F=F+Math.imul(h,v)|0,H=(H=H+Math.imul(h,_)|0)+Math.imul(f,v)|0,Z=Z+Math.imul(f,_)|0;t=(ee+(F+Math.imul(a,N)|0)|0)+((8191&(H=(H=H+Math.imul(a,I)|0)+Math.imul(u,N)|0))<<13)|0;ee=((Z=Z+Math.imul(u,I)|0)+(H>>>13)|0)+(t>>>26)|0,t&=67108863,F=Math.imul(C,D),H=(H=Math.imul(C,U))+Math.imul(L,D)|0,Z=Math.imul(L,U),F=F+Math.imul(T,j)|0,H=(H=H+Math.imul(T,G)|0)+Math.imul(R,j)|0,Z=Z+Math.imul(R,G)|0,F=F+Math.imul(x,z)|0,H=(H=H+Math.imul(x,V)|0)+Math.imul(P,z)|0,Z=Z+Math.imul(P,V)|0,F=F+Math.imul(S,q)|0,H=(H=H+Math.imul(S,W)|0)+Math.imul(k,q)|0,Z=Z+Math.imul(k,W)|0,F=F+Math.imul(M,J)|0,H=(H=H+Math.imul(M,X)|0)+Math.imul(A,J)|0,Z=Z+Math.imul(A,X)|0,F=F+Math.imul(b,Q)|0,H=(H=H+Math.imul(b,Y)|0)+Math.imul(w,Q)|0,Z=Z+Math.imul(w,Y)|0,F=F+Math.imul(m,l)|0,H=(H=H+Math.imul(m,c)|0)+Math.imul(g,l)|0,Z=Z+Math.imul(g,c)|0,F=F+Math.imul(d,v)|0,H=(H=H+Math.imul(d,_)|0)+Math.imul(p,v)|0,Z=Z+Math.imul(p,_)|0,F=F+Math.imul(h,N)|0,H=(H=H+Math.imul(h,I)|0)+Math.imul(f,N)|0,Z=Z+Math.imul(f,I)|0;a=(ee+(F+Math.imul(a,O)|0)|0)+((8191&(H=(H=H+Math.imul(a,B)|0)+Math.imul(u,O)|0))<<13)|0;ee=((Z=Z+Math.imul(u,B)|0)+(H>>>13)|0)+(a>>>26)|0,a&=67108863,F=Math.imul(C,j),H=(H=Math.imul(C,G))+Math.imul(L,j)|0,Z=Math.imul(L,G),F=F+Math.imul(T,z)|0,H=(H=H+Math.imul(T,V)|0)+Math.imul(R,z)|0,Z=Z+Math.imul(R,V)|0,F=F+Math.imul(x,q)|0,H=(H=H+Math.imul(x,W)|0)+Math.imul(P,q)|0,Z=Z+Math.imul(P,W)|0,F=F+Math.imul(S,J)|0,H=(H=H+Math.imul(S,X)|0)+Math.imul(k,J)|0,Z=Z+Math.imul(k,X)|0,F=F+Math.imul(M,Q)|0,H=(H=H+Math.imul(M,Y)|0)+Math.imul(A,Q)|0,Z=Z+Math.imul(A,Y)|0,F=F+Math.imul(b,l)|0,H=(H=H+Math.imul(b,c)|0)+Math.imul(w,l)|0,Z=Z+Math.imul(w,c)|0,F=F+Math.imul(m,v)|0,H=(H=H+Math.imul(m,_)|0)+Math.imul(g,v)|0,Z=Z+Math.imul(g,_)|0,F=F+Math.imul(d,N)|0,H=(H=H+Math.imul(d,I)|0)+Math.imul(p,N)|0,Z=Z+Math.imul(p,I)|0;h=(ee+(F+Math.imul(h,O)|0)|0)+((8191&(H=(H=H+Math.imul(h,B)|0)+Math.imul(f,O)|0))<<13)|0;ee=((Z=Z+Math.imul(f,B)|0)+(H>>>13)|0)+(h>>>26)|0,h&=67108863,F=Math.imul(C,z),H=(H=Math.imul(C,V))+Math.imul(L,z)|0,Z=Math.imul(L,V),F=F+Math.imul(T,q)|0,H=(H=H+Math.imul(T,W)|0)+Math.imul(R,q)|0,Z=Z+Math.imul(R,W)|0,F=F+Math.imul(x,J)|0,H=(H=H+Math.imul(x,X)|0)+Math.imul(P,J)|0,Z=Z+Math.imul(P,X)|0,F=F+Math.imul(S,Q)|0,H=(H=H+Math.imul(S,Y)|0)+Math.imul(k,Q)|0,Z=Z+Math.imul(k,Y)|0,F=F+Math.imul(M,l)|0,H=(H=H+Math.imul(M,c)|0)+Math.imul(A,l)|0,Z=Z+Math.imul(A,c)|0,F=F+Math.imul(b,v)|0,H=(H=H+Math.imul(b,_)|0)+Math.imul(w,v)|0,Z=Z+Math.imul(w,_)|0,F=F+Math.imul(m,N)|0,H=(H=H+Math.imul(m,I)|0)+Math.imul(g,N)|0,Z=Z+Math.imul(g,I)|0;d=(ee+(F+Math.imul(d,O)|0)|0)+((8191&(H=(H=H+Math.imul(d,B)|0)+Math.imul(p,O)|0))<<13)|0;ee=((Z=Z+Math.imul(p,B)|0)+(H>>>13)|0)+(d>>>26)|0,d&=67108863,F=Math.imul(C,q),H=(H=Math.imul(C,W))+Math.imul(L,q)|0,Z=Math.imul(L,W),F=F+Math.imul(T,J)|0,H=(H=H+Math.imul(T,X)|0)+Math.imul(R,J)|0,Z=Z+Math.imul(R,X)|0,F=F+Math.imul(x,Q)|0,H=(H=H+Math.imul(x,Y)|0)+Math.imul(P,Q)|0,Z=Z+Math.imul(P,Y)|0,F=F+Math.imul(S,l)|0,H=(H=H+Math.imul(S,c)|0)+Math.imul(k,l)|0,Z=Z+Math.imul(k,c)|0,F=F+Math.imul(M,v)|0,H=(H=H+Math.imul(M,_)|0)+Math.imul(A,v)|0,Z=Z+Math.imul(A,_)|0,F=F+Math.imul(b,N)|0,H=(H=H+Math.imul(b,I)|0)+Math.imul(w,N)|0,Z=Z+Math.imul(w,I)|0;m=(ee+(F+Math.imul(m,O)|0)|0)+((8191&(H=(H=H+Math.imul(m,B)|0)+Math.imul(g,O)|0))<<13)|0;ee=((Z=Z+Math.imul(g,B)|0)+(H>>>13)|0)+(m>>>26)|0,m&=67108863,F=Math.imul(C,J),H=(H=Math.imul(C,X))+Math.imul(L,J)|0,Z=Math.imul(L,X),F=F+Math.imul(T,Q)|0,H=(H=H+Math.imul(T,Y)|0)+Math.imul(R,Q)|0,Z=Z+Math.imul(R,Y)|0,F=F+Math.imul(x,l)|0,H=(H=H+Math.imul(x,c)|0)+Math.imul(P,l)|0,Z=Z+Math.imul(P,c)|0,F=F+Math.imul(S,v)|0,H=(H=H+Math.imul(S,_)|0)+Math.imul(k,v)|0,Z=Z+Math.imul(k,_)|0,F=F+Math.imul(M,N)|0,H=(H=H+Math.imul(M,I)|0)+Math.imul(A,N)|0,Z=Z+Math.imul(A,I)|0;b=(ee+(F+Math.imul(b,O)|0)|0)+((8191&(H=(H=H+Math.imul(b,B)|0)+Math.imul(w,O)|0))<<13)|0;ee=((Z=Z+Math.imul(w,B)|0)+(H>>>13)|0)+(b>>>26)|0,b&=67108863,F=Math.imul(C,Q),H=(H=Math.imul(C,Y))+Math.imul(L,Q)|0,Z=Math.imul(L,Y),F=F+Math.imul(T,l)|0,H=(H=H+Math.imul(T,c)|0)+Math.imul(R,l)|0,Z=Z+Math.imul(R,c)|0,F=F+Math.imul(x,v)|0,H=(H=H+Math.imul(x,_)|0)+Math.imul(P,v)|0,Z=Z+Math.imul(P,_)|0,F=F+Math.imul(S,N)|0,H=(H=H+Math.imul(S,I)|0)+Math.imul(k,N)|0,Z=Z+Math.imul(k,I)|0;M=(ee+(F+Math.imul(M,O)|0)|0)+((8191&(H=(H=H+Math.imul(M,B)|0)+Math.imul(A,O)|0))<<13)|0;ee=((Z=Z+Math.imul(A,B)|0)+(H>>>13)|0)+(M>>>26)|0,M&=67108863,F=Math.imul(C,l),H=(H=Math.imul(C,c))+Math.imul(L,l)|0,Z=Math.imul(L,c),F=F+Math.imul(T,v)|0,H=(H=H+Math.imul(T,_)|0)+Math.imul(R,v)|0,Z=Z+Math.imul(R,_)|0,F=F+Math.imul(x,N)|0,H=(H=H+Math.imul(x,I)|0)+Math.imul(P,N)|0,Z=Z+Math.imul(P,I)|0;S=(ee+(F+Math.imul(S,O)|0)|0)+((8191&(H=(H=H+Math.imul(S,B)|0)+Math.imul(k,O)|0))<<13)|0;ee=((Z=Z+Math.imul(k,B)|0)+(H>>>13)|0)+(S>>>26)|0,S&=67108863,F=Math.imul(C,v),H=(H=Math.imul(C,_))+Math.imul(L,v)|0,Z=Math.imul(L,_),F=F+Math.imul(T,N)|0,H=(H=H+Math.imul(T,I)|0)+Math.imul(R,N)|0,Z=Z+Math.imul(R,I)|0;x=(ee+(F+Math.imul(x,O)|0)|0)+((8191&(H=(H=H+Math.imul(x,B)|0)+Math.imul(P,O)|0))<<13)|0;ee=((Z=Z+Math.imul(P,B)|0)+(H>>>13)|0)+(x>>>26)|0,x&=67108863,F=Math.imul(C,N),H=(H=Math.imul(C,I))+Math.imul(L,N)|0,Z=Math.imul(L,I);T=(ee+(F+Math.imul(T,O)|0)|0)+((8191&(H=(H=H+Math.imul(T,B)|0)+Math.imul(R,O)|0))<<13)|0;ee=((Z=Z+Math.imul(R,B)|0)+(H>>>13)|0)+(T>>>26)|0,T&=67108863;O=(ee+Math.imul(C,O)|0)+((8191&(H=(H=Math.imul(C,B))+Math.imul(L,O)|0))<<13)|0;return ee=((Z=Math.imul(L,B))+(H>>>13)|0)+(O>>>26)|0,O&=67108863,o[0]=K,o[1]=$,o[2]=s,o[3]=y,o[4]=E,o[5]=i,o[6]=n,o[7]=e,o[8]=t,o[9]=a,o[10]=h,o[11]=d,o[12]=m,o[13]=b,o[14]=M,o[15]=S,o[16]=x,o[17]=T,o[18]=O,0!=ee&&(o[19]=ee,r.length++),r};function u(e,t,r){return (new l).mulp(e,t,r)}function l(e,t){this.x=e,this.y=t;}Math.imul||(s=o),m.prototype.mulTo=function(e,t){var r=this.length+e.length,t=(10===this.length&&10===e.length?s:r<63?o:r<1024?function(e,t,r){r.negative=t.negative^e.negative,r.length=e.length+t.length;for(var n=0,i=0,o=0;o<r.length-1;o++){for(var s=i,i=0,a=67108863&n,u=Math.min(o,t.length-1),l=Math.max(0,o-e.length+1);l<=u;l++){var h,f=(0|e.words[o-l])*(0|t.words[l]),a=67108863&(h=(h=67108863&f)+a|0);i+=(s=(s=s+(f/67108864|0)|0)+(h>>>26)|0)>>>26,s&=67108863;}r.words[o]=a,n=s,s=i;}return 0!==n?r.words[o]=n:r.length--,r.strip()}:u)(this,e,t);return t},l.prototype.makeRBT=function(e){for(var t=new Array(e),r=m.prototype._countBits(e)-1,n=0;n<e;n++){ t[n]=this.revBin(n,r,e); }return t},l.prototype.revBin=function(e,t,r){if(0===e||e===r-1){ return e; }for(var n=0,i=0;i<t;i++){ n|=(1&e)<<t-i-1,e>>=1; }return n},l.prototype.permute=function(e,t,r,n,i,o){for(var s=0;s<o;s++){ n[s]=t[e[s]],i[s]=r[e[s]]; }},l.prototype.transform=function(e,t,r,n,i,o){this.permute(o,e,t,r,n,i);for(var s=1;s<i;s<<=1){ for(var a=s<<1,u=Math.cos(2*Math.PI/a),l=Math.sin(2*Math.PI/a),h=0;h<i;h+=a){ for(var f=u,c=l,d=0;d<s;d++){var p=r[h+d],y=n[h+d],m=r[h+d+s],g=f*m-c*(v=n[h+d+s]),v=f*v+c*m;r[h+d]=p+(m=g),n[h+d]=y+v,r[h+d+s]=p-m,n[h+d+s]=y-v,d!==a&&(g=u*f-l*c,c=u*c+l*f,f=g);} } }},l.prototype.guessLen13b=function(e,t){for(var e=1&(n=1|Math.max(t,e)),r=0,n=n/2|0;n;n>>>=1){ r++; }return 1<<r+1+e},l.prototype.conjugate=function(e,t,r){if(!(r<=1)){ for(var n=0;n<r/2;n++){var i=e[n];e[n]=e[r-n-1],e[r-n-1]=i,i=t[n],t[n]=-t[r-n-1],t[r-n-1]=-i;} }},l.prototype.normalize13b=function(e,t){for(var r=0,n=0;n<t/2;n++){var i=8192*Math.round(e[2*n+1]/t)+Math.round(e[2*n]/t)+r;e[n]=67108863&i,r=i<67108864?0:i/67108864|0;}return e},l.prototype.convert13b=function(e,t,r,n){for(var i=0,o=0;o<t;o++){ i+=0|e[o],r[2*o]=8191&i,r[2*o+1]=8191&(i>>>=13),i>>>=13; }for(o=2*t;o<n;++o){ r[o]=0; }y(0===i),y(0==(-8192&i));},l.prototype.stub=function(e){for(var t=new Array(e),r=0;r<e;r++){ t[r]=0; }return t},l.prototype.mulp=function(e,t,r){var n=2*this.guessLen13b(e.length,t.length),i=this.makeRBT(n),o=this.stub(n),s=new Array(n),a=new Array(n),u=new Array(n),l=new Array(n),h=new Array(n),f=new Array(n),c=r.words;c.length=n,this.convert13b(e.words,e.length,s,n),this.convert13b(t.words,t.length,l,n),this.transform(s,o,a,u,n,i),this.transform(l,o,h,f,n,i);for(var d=0;d<n;d++){var p=a[d]*h[d]-u[d]*f[d];u[d]=a[d]*f[d]+u[d]*h[d],a[d]=p;}return this.conjugate(a,u,n),this.transform(a,u,c,o,n,i),this.conjugate(c,o,n),this.normalize13b(c,n),r.negative=e.negative^t.negative,r.length=e.length+t.length,r.strip()},m.prototype.mul=function(e){var t=new m(null);return t.words=new Array(this.length+e.length),this.mulTo(e,t)},m.prototype.mulf=function(e){var t=new m(null);return t.words=new Array(this.length+e.length),u(this,e,t)},m.prototype.imul=function(e){return this.clone().mulTo(e,this)},m.prototype.imuln=function(e){y("number"==typeof e),y(e<67108864);for(var t=0,r=0;r<this.length;r++){var n=(0|this.words[r])*e,i=(67108863&n)+(67108863&t);t>>=26,t+=n/67108864|0,t+=i>>>26,this.words[r]=67108863&i;}return 0!==t&&(this.words[r]=t,this.length++),this},m.prototype.muln=function(e){return this.clone().imuln(e)},m.prototype.sqr=function(){return this.mul(this)},m.prototype.isqr=function(){return this.imul(this.clone())},m.prototype.pow=function(e){var t=function(e){for(var t=new Array(e.bitLength()),r=0;r<t.length;r++){var n=r%26;t[r]=(e.words[r/26|0]&1<<n)>>>n;}return t}(e);if(0===t.length){ return new m(1); }for(var r=this,n=0;n<t.length&&0===t[n];n++,r=r.sqr()){ }if(++n<t.length){ for(var i=r.sqr();n<t.length;n++,i=i.sqr()){ 0!==t[n]&&(r=r.mul(i)); } }return r},m.prototype.iushln=function(e){y("number"==typeof e&&0<=e);var t=e%26,r=(e-t)/26,n=67108863>>>26-t<<26-t;if(0!=t){for(var i=0,o=0;o<this.length;o++){var s=this.words[o]&n,a=(0|this.words[o])-s<<t;this.words[o]=a|i,i=s>>>26-t;}i&&(this.words[o]=i,this.length++);}if(0!=r){for(o=this.length-1;0<=o;o--){ this.words[o+r]=this.words[o]; }for(o=0;o<r;o++){ this.words[o]=0; }this.length+=r;}return this.strip()},m.prototype.ishln=function(e){return y(0===this.negative),this.iushln(e)},m.prototype.iushrn=function(e,t,r){y("number"==typeof e&&0<=e);var n=t?(t-t%26)/26:0,i=e%26,o=Math.min((e-i)/26,this.length),s=67108863^67108863>>>i<<i,a=r;if(n-=o,n=Math.max(0,n),a){for(var u=0;u<o;u++){ a.words[u]=this.words[u]; }a.length=o;}if(0!==o){ if(this.length>o){ for(this.length-=o,u=0;u<this.length;u++){ this.words[u]=this.words[u+o]; } }else { this.words[0]=0,this.length=1; } }for(var l=0,u=this.length-1;0<=u&&(0!==l||n<=u);u--){var h=0|this.words[u];this.words[u]=l<<26-i|h>>>i,l=h&s;}return a&&0!==l&&(a.words[a.length++]=l),0===this.length&&(this.words[0]=0,this.length=1),this.strip()},m.prototype.ishrn=function(e,t,r){return y(0===this.negative),this.iushrn(e,t,r)},m.prototype.shln=function(e){return this.clone().ishln(e)},m.prototype.ushln=function(e){return this.clone().iushln(e)},m.prototype.shrn=function(e){return this.clone().ishrn(e)},m.prototype.ushrn=function(e){return this.clone().iushrn(e)},m.prototype.testn=function(e){y("number"==typeof e&&0<=e);var t=e%26,e=(e-t)/26;return !(this.length<=e)&&!!(this.words[e]&1<<t)},m.prototype.imaskn=function(e){y("number"==typeof e&&0<=e);var t=e%26,e=(e-t)/26;return y(0===this.negative,"imaskn works only with positive numbers"),this.length<=e?this:(0!=t&&e++,this.length=Math.min(e,this.length),0!=t&&(this.words[this.length-1]&=67108863^67108863>>>t<<t),this.strip())},m.prototype.maskn=function(e){return this.clone().imaskn(e)},m.prototype.iaddn=function(e){return y("number"==typeof e),y(e<67108864),e<0?this.isubn(-e):0!==this.negative?(1===this.length&&(0|this.words[0])<e?(this.words[0]=e-(0|this.words[0]),this.negative=0):(this.negative=0,this.isubn(e),this.negative=1),this):this._iaddn(e)},m.prototype._iaddn=function(e){this.words[0]+=e;for(var t=0;t<this.length&&67108864<=this.words[t];t++){ this.words[t]-=67108864,t===this.length-1?this.words[t+1]=1:this.words[t+1]++; }return this.length=Math.max(this.length,t+1),this},m.prototype.isubn=function(e){if(y("number"==typeof e),y(e<67108864),e<0){ return this.iaddn(-e); }if(0!==this.negative){ return this.negative=0,this.iaddn(e),this.negative=1,this; }if(this.words[0]-=e,1===this.length&&this.words[0]<0){ this.words[0]=-this.words[0],this.negative=1; }else { for(var t=0;t<this.length&&this.words[t]<0;t++){ this.words[t]+=67108864,--this.words[t+1]; } }return this.strip()},m.prototype.addn=function(e){return this.clone().iaddn(e)},m.prototype.subn=function(e){return this.clone().isubn(e)},m.prototype.iabs=function(){return this.negative=0,this},m.prototype.abs=function(){return this.clone().iabs()},m.prototype._ishlnsubmul=function(e,t,r){var n=e.length+r;this._expand(n);for(var i=0,o=0;o<e.length;o++){var s=(0|this.words[o+r])+i,a=(0|e.words[o])*t,i=((s-=67108863&a)>>26)-(a/67108864|0);this.words[o+r]=67108863&s;}for(;o<this.length-r;o++){ i=(s=(0|this.words[o+r])+i)>>26,this.words[o+r]=67108863&s; }if(0===i){ return this.strip(); }for(y(-1===i),o=i=0;o<this.length;o++){ i=(s=-(0|this.words[o])+i)>>26,this.words[o]=67108863&s; }return this.negative=1,this.strip()},m.prototype._wordDiv=function(e,t){var r=this.length-e.length,n=this.clone(),i=e,o=0|i.words[i.length-1];0!=(r=26-this._countBits(o))&&(i=i.ushln(r),n.iushln(r),o=0|i.words[i.length-1]);var s,a=n.length-i.length;if("mod"!==t){(s=new m(null)).length=1+a,s.words=new Array(s.length);for(var u=0;u<s.length;u++){ s.words[u]=0; }}e=n.clone()._ishlnsubmul(i,1,a);0===e.negative&&(n=e,s&&(s.words[a]=1));for(var l=a-1;0<=l;l--){var h=67108864*(0|n.words[i.length+l])+(0|n.words[i.length+l-1]),h=Math.min(h/o|0,67108863);for(n._ishlnsubmul(i,h,l);0!==n.negative;){ h--,n.negative=0,n._ishlnsubmul(i,1,l),n.isZero()||(n.negative^=1); }s&&(s.words[l]=h);}return s&&s.strip(),n.strip(),"div"!==t&&0!=r&&n.iushrn(r),{div:s||null,mod:n}},m.prototype.divmod=function(e,t,r){return y(!e.isZero()),this.isZero()?{div:new m(0),mod:new m(0)}:0!==this.negative&&0===e.negative?(o=this.neg().divmod(e,t),"mod"!==t&&(n=o.div.neg()),"div"!==t&&(i=o.mod.neg(),r&&0!==i.negative&&i.iadd(e)),{div:n,mod:i}):0===this.negative&&0!==e.negative?(o=this.divmod(e.neg(),t),{div:n="mod"!==t?o.div.neg():n,mod:o.mod}):0!=(this.negative&e.negative)?(o=this.neg().divmod(e.neg(),t),"div"!==t&&(i=o.mod.neg(),r&&0!==i.negative&&i.isub(e)),{div:o.div,mod:i}):e.length>this.length||this.cmp(e)<0?{div:new m(0),mod:this}:1===e.length?"div"===t?{div:this.divn(e.words[0]),mod:null}:"mod"===t?{div:null,mod:new m(this.modn(e.words[0]))}:{div:this.divn(e.words[0]),mod:new m(this.modn(e.words[0]))}:this._wordDiv(e,t);var n,i,o;},m.prototype.div=function(e){return this.divmod(e,"div",!1).div},m.prototype.mod=function(e){return this.divmod(e,"mod",!1).mod},m.prototype.umod=function(e){return this.divmod(e,"mod",!0).mod},m.prototype.divRound=function(e){var t=this.divmod(e);if(t.mod.isZero()){ return t.div; }var r=0!==t.div.negative?t.mod.isub(e):t.mod,n=e.ushrn(1),e=e.andln(1),n=r.cmp(n);return n<0||1===e&&0===n?t.div:0!==t.div.negative?t.div.isubn(1):t.div.iaddn(1)},m.prototype.modn=function(e){y(e<=67108863);for(var t=(1<<26)%e,r=0,n=this.length-1;0<=n;n--){ r=(t*r+(0|this.words[n]))%e; }return r},m.prototype.idivn=function(e){y(e<=67108863);for(var t=0,r=this.length-1;0<=r;r--){var n=(0|this.words[r])+67108864*t;this.words[r]=n/e|0,t=n%e;}return this.strip()},m.prototype.divn=function(e){return this.clone().idivn(e)},m.prototype.egcd=function(e){y(0===e.negative),y(!e.isZero());for(var t=this,r=e.clone(),t=0!==t.negative?t.umod(e):t.clone(),n=new m(1),i=new m(0),o=new m(0),s=new m(1),a=0;t.isEven()&&r.isEven();){ t.iushrn(1),r.iushrn(1),++a; }for(var u=r.clone(),l=t.clone();!t.isZero();){for(var h=0,f=1;0==(t.words[0]&f)&&h<26;++h,f<<=1){ }if(0<h){ for(t.iushrn(h);0<h--;){ (n.isOdd()||i.isOdd())&&(n.iadd(u),i.isub(l)),n.iushrn(1),i.iushrn(1); } }for(var c=0,d=1;0==(r.words[0]&d)&&c<26;++c,d<<=1){ }if(0<c){ for(r.iushrn(c);0<c--;){ (o.isOdd()||s.isOdd())&&(o.iadd(u),s.isub(l)),o.iushrn(1),s.iushrn(1); } }0<=t.cmp(r)?(t.isub(r),n.isub(o),i.isub(s)):(r.isub(t),o.isub(n),s.isub(i));}return {a:o,b:s,gcd:r.iushln(a)}},m.prototype._invmp=function(e){y(0===e.negative),y(!e.isZero());for(var t,r=this,n=e.clone(),r=0!==r.negative?r.umod(e):r.clone(),i=new m(1),o=new m(0),s=n.clone();0<r.cmpn(1)&&0<n.cmpn(1);){for(var a=0,u=1;0==(r.words[0]&u)&&a<26;++a,u<<=1){ }if(0<a){ for(r.iushrn(a);0<a--;){ i.isOdd()&&i.iadd(s),i.iushrn(1); } }for(var l=0,h=1;0==(n.words[0]&h)&&l<26;++l,h<<=1){ }if(0<l){ for(n.iushrn(l);0<l--;){ o.isOdd()&&o.iadd(s),o.iushrn(1); } }0<=r.cmp(n)?(r.isub(n),i.isub(o)):(n.isub(r),o.isub(i));}return (t=0===r.cmpn(1)?i:o).cmpn(0)<0&&t.iadd(e),t},m.prototype.gcd=function(e){if(this.isZero()){ return e.abs(); }if(e.isZero()){ return this.abs(); }var t=this.clone(),r=e.clone();t.negative=0;for(var n=r.negative=0;t.isEven()&&r.isEven();n++){ t.iushrn(1),r.iushrn(1); }for(;;){for(;t.isEven();){ t.iushrn(1); }for(;r.isEven();){ r.iushrn(1); }var i=t.cmp(r);if(i<0){ var o=t,t=r,r=o; }else if(0===i||0===r.cmpn(1)){ break; }t.isub(r);}return r.iushln(n)},m.prototype.invm=function(e){return this.egcd(e).a.umod(e)},m.prototype.isEven=function(){return 0==(1&this.words[0])},m.prototype.isOdd=function(){return 1==(1&this.words[0])},m.prototype.andln=function(e){return this.words[0]&e},m.prototype.bincn=function(e){y("number"==typeof e);var t=e%26,e=(e-t)/26,t=1<<t;if(this.length<=e){ return this._expand(1+e),this.words[e]|=t,this; }for(var r=t,n=e;0!==r&&n<this.length;n++){var i=0|this.words[n],r=(i+=r)>>>26;i&=67108863,this.words[n]=i;}return 0!==r&&(this.words[n]=r,this.length++),this},m.prototype.isZero=function(){return 1===this.length&&0===this.words[0]},m.prototype.cmpn=function(e){var t=e<0;return 0===this.negative||t?0===this.negative&&t?1:(this.strip(),e=1<this.length?1:(y((e=t?-e:e)<=67108863,"Number is too big"),(t=0|this.words[0])===e?0:t<e?-1:1),0!==this.negative?0|-e:e):-1},m.prototype.cmp=function(e){if(0!==this.negative&&0===e.negative){ return -1; }if(0===this.negative&&0!==e.negative){ return 1; }e=this.ucmp(e);return 0!==this.negative?0|-e:e},m.prototype.ucmp=function(e){if(this.length>e.length){ return 1; }if(this.length<e.length){ return -1; }for(var t=0,r=this.length-1;0<=r;r--){var n=0|this.words[r],i=0|e.words[r];if(n!=i){n<i?t=-1:i<n&&(t=1);break}}return t},m.prototype.gtn=function(e){return 1===this.cmpn(e)},m.prototype.gt=function(e){return 1===this.cmp(e)},m.prototype.gten=function(e){return 0<=this.cmpn(e)},m.prototype.gte=function(e){return 0<=this.cmp(e)},m.prototype.ltn=function(e){return -1===this.cmpn(e)},m.prototype.lt=function(e){return -1===this.cmp(e)},m.prototype.lten=function(e){return this.cmpn(e)<=0},m.prototype.lte=function(e){return this.cmp(e)<=0},m.prototype.eqn=function(e){return 0===this.cmpn(e)},m.prototype.eq=function(e){return 0===this.cmp(e)},m.red=function(e){return new M(e)},m.prototype.toRed=function(e){return y(!this.red,"Already a number in reduction context"),y(0===this.negative,"red works only with positives"),e.convertTo(this)._forceRed(e)},m.prototype.fromRed=function(){return y(this.red,"fromRed works only with numbers in reduction context"),this.red.convertFrom(this)},m.prototype._forceRed=function(e){return this.red=e,this},m.prototype.forceRed=function(e){return y(!this.red,"Already a number in reduction context"),this._forceRed(e)},m.prototype.redAdd=function(e){return y(this.red,"redAdd works only with red numbers"),this.red.add(this,e)},m.prototype.redIAdd=function(e){return y(this.red,"redIAdd works only with red numbers"),this.red.iadd(this,e)},m.prototype.redSub=function(e){return y(this.red,"redSub works only with red numbers"),this.red.sub(this,e)},m.prototype.redISub=function(e){return y(this.red,"redISub works only with red numbers"),this.red.isub(this,e)},m.prototype.redShl=function(e){return y(this.red,"redShl works only with red numbers"),this.red.shl(this,e)},m.prototype.redMul=function(e){return y(this.red,"redMul works only with red numbers"),this.red._verify2(this,e),this.red.mul(this,e)},m.prototype.redIMul=function(e){return y(this.red,"redMul works only with red numbers"),this.red._verify2(this,e),this.red.imul(this,e)},m.prototype.redSqr=function(){return y(this.red,"redSqr works only with red numbers"),this.red._verify1(this),this.red.sqr(this)},m.prototype.redISqr=function(){return y(this.red,"redISqr works only with red numbers"),this.red._verify1(this),this.red.isqr(this)},m.prototype.redSqrt=function(){return y(this.red,"redSqrt works only with red numbers"),this.red._verify1(this),this.red.sqrt(this)},m.prototype.redInvm=function(){return y(this.red,"redInvm works only with red numbers"),this.red._verify1(this),this.red.invm(this)},m.prototype.redNeg=function(){return y(this.red,"redNeg works only with red numbers"),this.red._verify1(this),this.red.neg(this)},m.prototype.redPow=function(e){return y(this.red&&!e.red,"redPow(normalNum)"),this.red._verify1(this),this.red.pow(this,e)};var h={k256:null,p224:null,p192:null,p25519:null};function g(e,t){this.name=e,this.p=new m(t,16),this.n=this.p.bitLength(),this.k=new m(1).iushln(this.n).isub(this.p),this.tmp=this._tmp();}function v(){g.call(this,"k256","ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f");}function b(){g.call(this,"p224","ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001");}function w(){g.call(this,"p192","ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff");}function _(){g.call(this,"25519","7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed");}function M(e){var t;"string"==typeof e?(t=m._prime(e),this.m=t.p,this.prime=t):(y(e.gtn(1),"modulus must be greater than 1"),this.m=e,this.prime=null);}function A(e){M.call(this,e),this.shift=this.m.bitLength(),this.shift%26!=0&&(this.shift+=26-this.shift%26),this.r=new m(1).iushln(this.shift),this.r2=this.imod(this.r.sqr()),this.rinv=this.r._invmp(this.m),this.minv=this.rinv.mul(this.r).isubn(1).div(this.m),this.minv=this.minv.umod(this.r),this.minv=this.r.sub(this.minv);}g.prototype._tmp=function(){var e=new m(null);return e.words=new Array(Math.ceil(this.n/13)),e},g.prototype.ireduce=function(e){for(var t,r=e;this.split(r,this.tmp),(t=(r=(r=this.imulK(r)).iadd(this.tmp)).bitLength())>this.n;){ }e=t<this.n?-1:r.ucmp(this.p);return 0===e?(r.words[0]=0,r.length=1):0<e?r.isub(this.p):void 0!==r.strip?r.strip():r._strip(),r},g.prototype.split=function(e,t){e.iushrn(this.n,0,t);},g.prototype.imulK=function(e){return e.imul(this.k)},r(v,g),v.prototype.split=function(e,t){for(var r=Math.min(e.length,9),n=0;n<r;n++){ t.words[n]=e.words[n]; }if(t.length=r,e.length<=9){ return e.words[0]=0,void(e.length=1); }var i=e.words[9];for(t.words[t.length++]=4194303&i,n=10;n<e.length;n++){var o=0|e.words[n];e.words[n-10]=(4194303&o)<<4|i>>>22,i=o;}0===(e.words[n-10]=i>>>=22)&&10<e.length?e.length-=10:e.length-=9;},v.prototype.imulK=function(e){e.words[e.length]=0,e.words[e.length+1]=0,e.length+=2;for(var t=0,r=0;r<e.length;r++){var n=0|e.words[r];t+=977*n,e.words[r]=67108863&t,t=64*n+(t/67108864|0);}return 0===e.words[e.length-1]&&(e.length--,0===e.words[e.length-1]&&e.length--),e},r(b,g),r(w,g),r(_,g),_.prototype.imulK=function(e){for(var t=0,r=0;r<e.length;r++){var n=19*(0|e.words[r])+t,i=67108863&n;n>>>=26,e.words[r]=i,t=n;}return 0!==t&&(e.words[e.length++]=t),e},m._prime=function(e){if(h[e]){ return h[e]; }var t;if("k256"===e){ t=new v; }else if("p224"===e){ t=new b; }else if("p192"===e){ t=new w; }else{if("p25519"!==e){ throw new Error("Unknown prime "+e); }t=new _;}return h[e]=t},M.prototype._verify1=function(e){y(0===e.negative,"red works only with positives"),y(e.red,"red works only with red numbers");},M.prototype._verify2=function(e,t){y(0==(e.negative|t.negative),"red works only with positives"),y(e.red&&e.red===t.red,"red works only with red numbers");},M.prototype.imod=function(e){return (this.prime?this.prime.ireduce(e):e.umod(this.m))._forceRed(this)},M.prototype.neg=function(e){return e.isZero()?e.clone():this.m.sub(e)._forceRed(this)},M.prototype.add=function(e,t){this._verify2(e,t);t=e.add(t);return 0<=t.cmp(this.m)&&t.isub(this.m),t._forceRed(this)},M.prototype.iadd=function(e,t){this._verify2(e,t);t=e.iadd(t);return 0<=t.cmp(this.m)&&t.isub(this.m),t},M.prototype.sub=function(e,t){this._verify2(e,t);t=e.sub(t);return t.cmpn(0)<0&&t.iadd(this.m),t._forceRed(this)},M.prototype.isub=function(e,t){this._verify2(e,t);t=e.isub(t);return t.cmpn(0)<0&&t.iadd(this.m),t},M.prototype.shl=function(e,t){return this._verify1(e),this.imod(e.ushln(t))},M.prototype.imul=function(e,t){return this._verify2(e,t),this.imod(e.imul(t))},M.prototype.mul=function(e,t){return this._verify2(e,t),this.imod(e.mul(t))},M.prototype.isqr=function(e){return this.imul(e,e.clone())},M.prototype.sqr=function(e){return this.mul(e,e)},M.prototype.sqrt=function(e){if(e.isZero()){ return e.clone(); }var t=this.m.andln(3);if(y(t%2==1),3===t){t=this.m.add(new m(1)).iushrn(2);return this.pow(e,t)}for(var r=this.m.subn(1),n=0;!r.isZero()&&0===r.andln(1);){ n++,r.iushrn(1); }y(!r.isZero());for(var i=new m(1).toRed(this),o=i.redNeg(),s=this.m.subn(1).iushrn(1),a=new m(2*(a=this.m.bitLength())*a).toRed(this);0!==this.pow(a,s).cmp(o);){ a.redIAdd(o); }for(var u=this.pow(a,r),l=this.pow(e,r.addn(1).iushrn(1)),h=this.pow(e,r),f=n;0!==h.cmp(i);){for(var c=h,d=0;0!==c.cmp(i);d++){ c=c.redSqr(); }y(d<f);var p=this.pow(u,new m(1).iushln(f-d-1)),l=l.redMul(p),u=p.redSqr(),h=h.redMul(u),f=d;}return l},M.prototype.invm=function(e){e=e._invmp(this.m);return 0!==e.negative?(e.negative=0,this.imod(e).redNeg()):this.imod(e)},M.prototype.pow=function(e,t){if(t.isZero()){ return new m(1).toRed(this); }if(0===t.cmpn(1)){ return e.clone(); }var r=new Array(16);r[0]=new m(1).toRed(this),r[1]=e;for(var n=2;n<r.length;n++){ r[n]=this.mul(r[n-1],e); }var i=r[0],o=0,s=0,a=t.bitLength()%26;for(0===a&&(a=26),n=t.length-1;0<=n;n--){for(var u=t.words[n],l=a-1;0<=l;l--){var h=u>>l&1;i!==r[0]&&(i=this.sqr(i)),0!=h||0!==o?(o<<=1,o|=h,(4===++s||0===n&&0===l)&&(i=this.mul(i,r[o]),o=s=0)):s=0;}a=26;}return i},M.prototype.convertTo=function(e){var t=e.umod(this.m);return t===e?t.clone():t},M.prototype.convertFrom=function(e){e=e.clone();return e.red=null,e},m.mont=function(e){return new A(e)},r(A,M),A.prototype.convertTo=function(e){return this.imod(e.ushln(this.shift))},A.prototype.convertFrom=function(e){e=this.imod(e.mul(this.rinv));return e.red=null,e},A.prototype.imul=function(e,t){if(e.isZero()||t.isZero()){ return e.words[0]=0,e.length=1,e; }e=e.imul(t),t=e.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),e=e.isub(t).iushrn(this.shift),t=e;return 0<=e.cmp(this.m)?t=e.isub(this.m):e.cmpn(0)<0&&(t=e.iadd(this.m)),t._forceRed(this)},A.prototype.mul=function(e,t){if(e.isZero()||t.isZero()){ return new m(0)._forceRed(this); }e=e.mul(t),t=e.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),e=e.isub(t).iushrn(this.shift),t=e;return 0<=e.cmp(this.m)?t=e.isub(this.m):e.cmpn(0)<0&&(t=e.iadd(this.m)),t._forceRed(this)},A.prototype.invm=function(e){return this.imod(e._invmp(this.m).mul(this.r2))._forceRed(this)};}(void 0===e||e,this);},{buffer:11}],10:[function(e,r,t){!function(t){!function(){r.exports=function(e){e=new Uint8Array(e);return (t.crypto||t.msCrypto).getRandomValues(e),e};}.call(this);}.call(this,"undefined"!=typeof commonjsGlobal?commonjsGlobal:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});},{}],11:[function(e,t,r){},{}],12:[function(e,t,r){r.version=e("../package.json").version,r.utils=e("./elliptic/utils"),r.rand=e("brorand"),r.curve=e("./elliptic/curve"),r.curves=e("./elliptic/curves"),r.ec=e("./elliptic/ec"),r.eddsa=e("./elliptic/eddsa");},{"../package.json":25,"./elliptic/curve":15,"./elliptic/curves":18,"./elliptic/ec":19,"./elliptic/eddsa":22,"./elliptic/utils":24,brorand:10}],13:[function(e,t,r){var n=e("bn.js"),i=e("../utils"),S=i.getNAF,k=i.getJSF,f=i.assert;function o(e,t){this.type=e,this.p=new n(t.p,16),this.red=t.prime?n.red(t.prime):n.mont(this.p),this.zero=new n(0).toRed(this.red),this.one=new n(1).toRed(this.red),this.two=new n(2).toRed(this.red),this.n=t.n&&new n(t.n,16),this.g=t.g&&this.pointFromJSON(t.g,t.gRed),this._wnafT1=new Array(4),this._wnafT2=new Array(4),this._wnafT3=new Array(4),this._wnafT4=new Array(4),this._bitLength=this.n?this.n.bitLength():0;t=this.n&&this.p.div(this.n);!t||0<t.cmpn(100)?this.redN=null:(this._maxwellTrick=!0,this.redN=this.n.toRed(this.red));}function s(e,t){this.curve=e,this.type=t,this.precomputed=null;}(t.exports=o).prototype.point=function(){throw new Error("Not implemented")},o.prototype.validate=function(){throw new Error("Not implemented")},o.prototype._fixedNafMul=function(e,t){f(e.precomputed);var r=e._getDoubles(),n=S(t,1,this._bitLength),t=(1<<r.step+1)-(r.step%2==0?2:1);t/=3;for(var i=[],o=0;o<n.length;o+=r.step){for(var s=0,a=o+r.step-1;o<=a;a--){ s=(s<<1)+n[a]; }i.push(s);}for(var u=this.jpoint(null,null,null),l=this.jpoint(null,null,null),h=t;0<h;h--){for(o=0;o<i.length;o++){ (s=i[o])===h?l=l.mixedAdd(r.points[o]):s===-h&&(l=l.mixedAdd(r.points[o].neg())); }u=u.add(l);}return u.toP()},o.prototype._wnafMul=function(e,t){for(var r=e._getNAFPoints(4),n=r.wnd,i=r.points,o=S(t,n,this._bitLength),s=this.jpoint(null,null,null),a=o.length-1;0<=a;a--){for(var u=0;0<=a&&0===o[a];a--){ u++; }if(0<=a&&u++,s=s.dblp(u),a<0){ break; }var l=o[a];f(0!==l),s="affine"===e.type?0<l?s.mixedAdd(i[l-1>>1]):s.mixedAdd(i[-l-1>>1].neg()):0<l?s.add(i[l-1>>1]):s.add(i[-l-1>>1].neg());}return "affine"===e.type?s.toP():s},o.prototype._wnafMulAdd=function(e,t,r,n,i){for(var o=this._wnafT1,s=this._wnafT2,a=this._wnafT3,u=0,l=0;l<n;l++){var h,f=(h=t[l])._getNAFPoints(e);o[l]=f.wnd,s[l]=f.points;}for(l=n-1;1<=l;l-=2){var c=l-1,d=l;if(1===o[c]&&1===o[d]){var p=[t[c],null,null,t[d]];0===t[c].y.cmp(t[d].y)?(p[1]=t[c].add(t[d]),p[2]=t[c].toJ().mixedAdd(t[d].neg())):0===t[c].y.cmp(t[d].y.redNeg())?(p[1]=t[c].toJ().mixedAdd(t[d]),p[2]=t[c].add(t[d].neg())):(p[1]=t[c].toJ().mixedAdd(t[d]),p[2]=t[c].toJ().mixedAdd(t[d].neg()));var y=[-3,-1,-5,-7,0,7,5,1,3],m=k(r[c],r[d]),u=Math.max(m[0].length,u);for(a[c]=new Array(u),a[d]=new Array(u),A=0;A<u;A++){var g=0|m[0][A],v=0|m[1][A];a[c][A]=y[3*(1+g)+(1+v)],a[d][A]=0,s[c]=p;}}else { a[c]=S(r[c],o[c],this._bitLength),a[d]=S(r[d],o[d],this._bitLength),u=Math.max(a[c].length,u),u=Math.max(a[d].length,u); }}var b=this.jpoint(null,null,null),w=this._wnafT4;for(l=u;0<=l;l--){for(var _=0;0<=l;){for(var M=!0,A=0;A<n;A++){ w[A]=0|a[A][l],0!==w[A]&&(M=!1); }if(!M){ break; }_++,l--;}if(0<=l&&_++,b=b.dblp(_),l<0){ break; }for(A=0;A<n;A++){var E=w[A];0!==E&&(0<E?h=s[A][E-1>>1]:E<0&&(h=s[A][-E-1>>1].neg()),b="affine"===h.type?b.mixedAdd(h):b.add(h));}}for(l=0;l<n;l++){ s[l]=null; }return i?b:b.toP()},(o.BasePoint=s).prototype.eq=function(){throw new Error("Not implemented")},s.prototype.validate=function(){return this.curve.validate(this)},o.prototype.decodePoint=function(e,t){e=i.toArray(e,t);t=this.p.byteLength();if((4===e[0]||6===e[0]||7===e[0])&&e.length-1==2*t){ return 6===e[0]?f(e[e.length-1]%2==0):7===e[0]&&f(e[e.length-1]%2==1),this.point(e.slice(1,1+t),e.slice(1+t,1+2*t)); }if((2===e[0]||3===e[0])&&e.length-1===t){ return this.pointFromX(e.slice(1,1+t),3===e[0]); }throw new Error("Unknown point format")},s.prototype.encodeCompressed=function(e){return this.encode(e,!0)},s.prototype._encode=function(e){var t=this.curve.p.byteLength(),r=this.getX().toArray("be",t);return e?[this.getY().isEven()?2:3].concat(r):[4].concat(r,this.getY().toArray("be",t))},s.prototype.encode=function(e,t){return i.encode(this._encode(t),e)},s.prototype.precompute=function(e){if(this.precomputed){ return this; }var t={doubles:null,naf:null,beta:null};return t.naf=this._getNAFPoints(8),t.doubles=this._getDoubles(4,e),t.beta=this._getBeta(),this.precomputed=t,this},s.prototype._hasDoubles=function(e){if(!this.precomputed){ return !1; }var t=this.precomputed.doubles;return !!t&&t.points.length>=Math.ceil((e.bitLength()+1)/t.step)},s.prototype._getDoubles=function(e,t){if(this.precomputed&&this.precomputed.doubles){ return this.precomputed.doubles; }for(var r=[this],n=this,i=0;i<t;i+=e){for(var o=0;o<e;o++){ n=n.dbl(); }r.push(n);}return {step:e,points:r}},s.prototype._getNAFPoints=function(e){if(this.precomputed&&this.precomputed.naf){ return this.precomputed.naf; }for(var t=[this],r=(1<<e)-1,n=1==r?null:this.dbl(),i=1;i<r;i++){ t[i]=t[i-1].add(n); }return {wnd:e,points:t}},s.prototype._getBeta=function(){return null},s.prototype.dblp=function(e){for(var t=this,r=0;r<e;r++){ t=t.dbl(); }return t};},{"../utils":24,"bn.js":9}],14:[function(e,t,r){t.exports={};},{}],15:[function(e,t,r){r.base=e("./base"),r.short=e("./short"),r.mont=e("./mont"),r.edwards=e("./edwards");},{"./base":13,"./edwards":14,"./mont":16,"./short":17}],16:[function(e,t,r){arguments[4][14][0].apply(r,arguments);},{dup:14}],17:[function(e,t,r){var n=e("../utils"),b=e("bn.js"),i=e("inherits"),o=e("./base"),s=n.assert;function a(e){o.call(this,"short",e),this.a=new b(e.a,16).toRed(this.red),this.b=new b(e.b,16).toRed(this.red),this.tinv=this.two.redInvm(),this.zeroA=0===this.a.fromRed().cmpn(0),this.threeA=0===this.a.fromRed().sub(this.p).cmpn(-3),this.endo=this._getEndomorphism(e),this._endoWnafT1=new Array(4),this._endoWnafT2=new Array(4);}function u(e,t,r,n){o.BasePoint.call(this,e,"affine"),null===t&&null===r?(this.x=null,this.y=null,this.inf=!0):(this.x=new b(t,16),this.y=new b(r,16),n&&(this.x.forceRed(this.curve.red),this.y.forceRed(this.curve.red)),this.x.red||(this.x=this.x.toRed(this.curve.red)),this.y.red||(this.y=this.y.toRed(this.curve.red)),this.inf=!1);}function l(e,t,r,n){o.BasePoint.call(this,e,"jacobian"),null===t&&null===r&&null===n?(this.x=this.curve.one,this.y=this.curve.one,this.z=new b(0)):(this.x=new b(t,16),this.y=new b(r,16),this.z=new b(n,16)),this.x.red||(this.x=this.x.toRed(this.curve.red)),this.y.red||(this.y=this.y.toRed(this.curve.red)),this.z.red||(this.z=this.z.toRed(this.curve.red)),this.zOne=this.z===this.curve.one;}i(a,o),(t.exports=a).prototype._getEndomorphism=function(e){var t,r,n;if(this.zeroA&&this.g&&this.n&&1===this.p.modn(3)){ return r=(e.beta?new b(e.beta,16):r=(n=this._getEndoRoots(this.p))[0].cmp(n[1])<0?n[0]:n[1]).toRed(this.red),e.lambda?t=new b(e.lambda,16):(n=this._getEndoRoots(this.n),0===this.g.mul(n[0]).x.cmp(this.g.x.redMul(r))?t=n[0]:(t=n[1],s(0===this.g.mul(t).x.cmp(this.g.x.redMul(r))))),{beta:r,lambda:t,basis:e.basis?e.basis.map(function(e){return {a:new b(e.a,16),b:new b(e.b,16)}}):this._getEndoBasis(t)} }},a.prototype._getEndoRoots=function(e){var t=e===this.p?this.red:b.mont(e),r=new b(2).toRed(t).redInvm(),e=r.redNeg(),r=new b(3).toRed(t).redNeg().redSqrt().redMul(r);return [e.redAdd(r).fromRed(),e.redSub(r).fromRed()]},a.prototype._getEndoBasis=function(e){for(var t,r,n,i,o,s=this.n.ushrn(Math.floor(this.n.bitLength()/2)),a=e,u=this.n.clone(),l=new b(1),h=new b(0),f=new b(0),c=new b(1),d=0;0!==a.cmpn(0);){var p=u.div(a),y=u.sub(p.mul(a)),m=f.sub(p.mul(l)),p=c.sub(p.mul(h));if(!n&&y.cmp(s)<0){ t=o.neg(),r=l,n=y.neg(),i=m; }else if(n&&2==++d){ break; }u=a,a=o=y,f=l,l=m,c=h,h=p;}var g=y.neg(),v=m,e=n.sqr().add(i.sqr());return 0<=g.sqr().add(v.sqr()).cmp(e)&&(g=t,v=r),n.negative&&(n=n.neg(),i=i.neg()),g.negative&&(g=g.neg(),v=v.neg()),[{a:n,b:i},{a:g,b:v}]},a.prototype._endoSplit=function(e){var t=this.endo.basis,r=t[0],n=t[1],i=n.b.mul(e).divRound(this.n),o=r.b.neg().mul(e).divRound(this.n),s=i.mul(r.a),t=o.mul(n.a),r=i.mul(r.b),n=o.mul(n.b);return {k1:e.sub(s).sub(t),k2:r.add(n).neg()}},a.prototype.pointFromX=function(e,t){var r=(e=!(e=new b(e,16)).red?e.toRed(this.red):e).redSqr().redMul(e).redIAdd(e.redMul(this.a)).redIAdd(this.b),n=r.redSqrt();if(0!==n.redSqr().redSub(r).cmp(this.zero)){ throw new Error("invalid point"); }r=n.fromRed().isOdd();return (t&&!r||!t&&r)&&(n=n.redNeg()),this.point(e,n)},a.prototype.validate=function(e){if(e.inf){ return !0; }var t=e.x,r=e.y,e=this.a.redMul(t),e=t.redSqr().redMul(t).redIAdd(e).redIAdd(this.b);return 0===r.redSqr().redISub(e).cmpn(0)},a.prototype._endoWnafMulAdd=function(e,t,r){for(var n=this._endoWnafT1,i=this._endoWnafT2,o=0;o<e.length;o++){var s=this._endoSplit(t[o]),a=e[o],u=a._getBeta();s.k1.negative&&(s.k1.ineg(),a=a.neg(!0)),s.k2.negative&&(s.k2.ineg(),u=u.neg(!0)),n[2*o]=a,n[2*o+1]=u,i[2*o]=s.k1,i[2*o+1]=s.k2;}for(var r=this._wnafMulAdd(1,n,i,2*o,r),l=0;l<2*o;l++){ n[l]=null,i[l]=null; }return r},i(u,o.BasePoint),a.prototype.point=function(e,t,r){return new u(this,e,t,r)},a.prototype.pointFromJSON=function(e,t){return u.fromJSON(this,e,t)},u.prototype._getBeta=function(){if(this.curve.endo){var e=this.precomputed;if(e&&e.beta){ return e.beta; }var t,r,n=this.curve.point(this.x.redMul(this.curve.endo.beta),this.y);return e&&(t=this.curve,r=function(e){return t.point(e.x.redMul(t.endo.beta),e.y)},(e.beta=n).precomputed={beta:null,naf:e.naf&&{wnd:e.naf.wnd,points:e.naf.points.map(r)},doubles:e.doubles&&{step:e.doubles.step,points:e.doubles.points.map(r)}}),n}},u.prototype.toJSON=function(){return this.precomputed?[this.x,this.y,this.precomputed&&{doubles:this.precomputed.doubles&&{step:this.precomputed.doubles.step,points:this.precomputed.doubles.points.slice(1)},naf:this.precomputed.naf&&{wnd:this.precomputed.naf.wnd,points:this.precomputed.naf.points.slice(1)}}]:[this.x,this.y]},u.fromJSON=function(t,e,r){"string"==typeof e&&(e=JSON.parse(e));var n=t.point(e[0],e[1],r);if(!e[2]){ return n; }function i(e){return t.point(e[0],e[1],r)}e=e[2];return n.precomputed={beta:null,doubles:e.doubles&&{step:e.doubles.step,points:[n].concat(e.doubles.points.map(i))},naf:e.naf&&{wnd:e.naf.wnd,points:[n].concat(e.naf.points.map(i))}},n},u.prototype.inspect=function(){return this.isInfinity()?"<EC Point Infinity>":"<EC Point x: "+this.x.fromRed().toString(16,2)+" y: "+this.y.fromRed().toString(16,2)+">"},u.prototype.isInfinity=function(){return this.inf},u.prototype.add=function(e){if(this.inf){ return e; }if(e.inf){ return this; }if(this.eq(e)){ return this.dbl(); }if(this.neg().eq(e)){ return this.curve.point(null,null); }if(0===this.x.cmp(e.x)){ return this.curve.point(null,null); }var t=this.y.redSub(e.y),e=(t=0!==t.cmpn(0)?t.redMul(this.x.redSub(e.x).redInvm()):t).redSqr().redISub(this.x).redISub(e.x),t=t.redMul(this.x.redSub(e)).redISub(this.y);return this.curve.point(e,t)},u.prototype.dbl=function(){if(this.inf){ return this; }var e=this.y.redAdd(this.y);if(0===e.cmpn(0)){ return this.curve.point(null,null); }var t=this.curve.a,r=this.x.redSqr(),e=e.redInvm(),t=r.redAdd(r).redIAdd(r).redIAdd(t).redMul(e),e=t.redSqr().redISub(this.x.redAdd(this.x)),t=t.redMul(this.x.redSub(e)).redISub(this.y);return this.curve.point(e,t)},u.prototype.getX=function(){return this.x.fromRed()},u.prototype.getY=function(){return this.y.fromRed()},u.prototype.mul=function(e){return e=new b(e,16),this.isInfinity()?this:this._hasDoubles(e)?this.curve._fixedNafMul(this,e):this.curve.endo?this.curve._endoWnafMulAdd([this],[e]):this.curve._wnafMul(this,e)},u.prototype.mulAdd=function(e,t,r){t=[this,t],r=[e,r];return this.curve.endo?this.curve._endoWnafMulAdd(t,r):this.curve._wnafMulAdd(1,t,r,2)},u.prototype.jmulAdd=function(e,t,r){t=[this,t],r=[e,r];return this.curve.endo?this.curve._endoWnafMulAdd(t,r,!0):this.curve._wnafMulAdd(1,t,r,2,!0)},u.prototype.eq=function(e){return this===e||this.inf===e.inf&&(this.inf||0===this.x.cmp(e.x)&&0===this.y.cmp(e.y))},u.prototype.neg=function(e){if(this.inf){ return this; }var t,r=this.curve.point(this.x,this.y.redNeg());return e&&this.precomputed&&(t=this.precomputed,e=function(e){return e.neg()},r.precomputed={naf:t.naf&&{wnd:t.naf.wnd,points:t.naf.points.map(e)},doubles:t.doubles&&{step:t.doubles.step,points:t.doubles.points.map(e)}}),r},u.prototype.toJ=function(){return this.inf?this.curve.jpoint(null,null,null):this.curve.jpoint(this.x,this.y,this.curve.one)},i(l,o.BasePoint),a.prototype.jpoint=function(e,t,r){return new l(this,e,t,r)},l.prototype.toP=function(){if(this.isInfinity()){ return this.curve.point(null,null); }var e=this.z.redInvm(),t=e.redSqr(),r=this.x.redMul(t),e=this.y.redMul(t).redMul(e);return this.curve.point(r,e)},l.prototype.neg=function(){return this.curve.jpoint(this.x,this.y.redNeg(),this.z)},l.prototype.add=function(e){if(this.isInfinity()){ return e; }if(e.isInfinity()){ return this; }var t=e.z.redSqr(),r=this.z.redSqr(),n=this.x.redMul(t),i=e.x.redMul(r),o=this.y.redMul(t.redMul(e.z)),s=e.y.redMul(r.redMul(this.z)),t=n.redSub(i),r=o.redSub(s);if(0===t.cmpn(0)){ return 0!==r.cmpn(0)?this.curve.jpoint(null,null,null):this.dbl(); }i=t.redSqr(),s=i.redMul(t),n=n.redMul(i),i=r.redSqr().redIAdd(s).redISub(n).redISub(n),s=r.redMul(n.redISub(i)).redISub(o.redMul(s)),t=this.z.redMul(e.z).redMul(t);return this.curve.jpoint(i,s,t)},l.prototype.mixedAdd=function(e){if(this.isInfinity()){ return e.toJ(); }if(e.isInfinity()){ return this; }var t=this.z.redSqr(),r=this.x,n=e.x.redMul(t),i=this.y,o=e.y.redMul(t).redMul(this.z),e=r.redSub(n),t=i.redSub(o);if(0===e.cmpn(0)){ return 0!==t.cmpn(0)?this.curve.jpoint(null,null,null):this.dbl(); }n=e.redSqr(),o=n.redMul(e),r=r.redMul(n),n=t.redSqr().redIAdd(o).redISub(r).redISub(r),o=t.redMul(r.redISub(n)).redISub(i.redMul(o)),e=this.z.redMul(e);return this.curve.jpoint(n,o,e)},l.prototype.dblp=function(e){if(0===e){ return this; }if(this.isInfinity()){ return this; }if(!e){ return this.dbl(); }if(this.curve.zeroA||this.curve.threeA){for(var t=this,r=0;r<e;r++){ t=t.dbl(); }return t}var n=this.curve.a,i=this.curve.tinv,o=this.x,s=this.y,a=this.z,u=a.redSqr().redSqr(),l=s.redAdd(s);for(r=0;r<e;r++){var h=o.redSqr(),f=l.redSqr(),c=f.redSqr(),d=h.redAdd(h).redIAdd(h).redIAdd(n.redMul(u)),h=o.redMul(f),f=d.redSqr().redISub(h.redAdd(h)),h=h.redISub(f),d=(d=d.redMul(h)).redIAdd(d).redISub(c),h=l.redMul(a);r+1<e&&(u=u.redMul(c)),o=f,a=h,l=d;}return this.curve.jpoint(o,l.redMul(i),a)},l.prototype.dbl=function(){return this.isInfinity()?this:this.curve.zeroA?this._zeroDbl():this.curve.threeA?this._threeDbl():this._dbl()},l.prototype._zeroDbl=function(){var e,t,r,n,i,o=this.zOne?(r=this.x.redSqr(),e=(n=this.y.redSqr()).redSqr(),i=(i=this.x.redAdd(n).redSqr().redISub(r).redISub(e)).redIAdd(i),n=(t=r.redAdd(r).redIAdd(r)).redSqr().redISub(i).redISub(i),r=(r=(r=e.redIAdd(e)).redIAdd(r)).redIAdd(r),t=t.redMul(i.redISub(e=n)).redISub(r),this.y.redAdd(this.y)):(i=this.x.redSqr(),o=(n=this.y.redSqr()).redSqr(),r=(r=this.x.redAdd(n).redSqr().redISub(i).redISub(o)).redIAdd(r),i=(n=i.redAdd(i).redIAdd(i)).redSqr(),o=(o=(o=o.redIAdd(o)).redIAdd(o)).redIAdd(o),e=i.redISub(r).redISub(r),t=n.redMul(r.redISub(e)).redISub(o),(o=this.y.redMul(this.z)).redIAdd(o));return this.curve.jpoint(e,t,o)},l.prototype._threeDbl=function(){var e,t,r,n,i,o,s,a;return this.zOne?(s=this.x.redSqr(),r=(e=this.y.redSqr()).redSqr(),o=(o=this.x.redAdd(e).redSqr().redISub(s).redISub(r)).redIAdd(o),t=n=(a=s.redAdd(s).redIAdd(s).redIAdd(this.curve.a)).redSqr().redISub(o).redISub(o),i=(i=(i=r.redIAdd(r)).redIAdd(i)).redIAdd(i),e=a.redMul(o.redISub(n)).redISub(i),s=this.y.redAdd(this.y)):(r=this.z.redSqr(),a=this.y.redSqr(),o=this.x.redMul(a),n=(n=this.x.redSub(r).redMul(this.x.redAdd(r))).redAdd(n).redIAdd(n),o=(i=(i=o.redIAdd(o)).redIAdd(i)).redAdd(i),t=n.redSqr().redISub(o),s=this.y.redAdd(this.z).redSqr().redISub(a).redISub(r),a=(a=(a=(a=a.redSqr()).redIAdd(a)).redIAdd(a)).redIAdd(a),e=n.redMul(i.redISub(t)).redISub(a)),this.curve.jpoint(t,e,s)},l.prototype._dbl=function(){var e=this.curve.a,t=this.x,r=this.y,n=this.z,i=n.redSqr().redSqr(),o=t.redSqr(),s=r.redSqr(),e=o.redAdd(o).redIAdd(o).redIAdd(e.redMul(i)),i=t.redAdd(t),t=(i=i.redIAdd(i)).redMul(s),i=e.redSqr().redISub(t.redAdd(t)),t=t.redISub(i),s=s.redSqr();s=(s=(s=s.redIAdd(s)).redIAdd(s)).redIAdd(s);s=e.redMul(t).redISub(s),n=r.redAdd(r).redMul(n);return this.curve.jpoint(i,s,n)},l.prototype.trpl=function(){if(!this.curve.zeroA){ return this.dbl().add(this); }var e=this.x.redSqr(),t=this.y.redSqr(),r=this.z.redSqr(),n=t.redSqr(),i=e.redAdd(e).redIAdd(e),o=i.redSqr(),s=this.x.redAdd(t).redSqr().redISub(e).redISub(n),e=(s=(s=(s=s.redIAdd(s)).redAdd(s).redIAdd(s)).redISub(o)).redSqr(),n=n.redIAdd(n);n=(n=(n=n.redIAdd(n)).redIAdd(n)).redIAdd(n);o=i.redIAdd(s).redSqr().redISub(o).redISub(e).redISub(n),t=t.redMul(o);t=(t=t.redIAdd(t)).redIAdd(t);t=this.x.redMul(e).redISub(t);t=(t=t.redIAdd(t)).redIAdd(t);o=this.y.redMul(o.redMul(n.redISub(o)).redISub(s.redMul(e)));o=(o=(o=o.redIAdd(o)).redIAdd(o)).redIAdd(o);e=this.z.redAdd(s).redSqr().redISub(r).redISub(e);return this.curve.jpoint(t,o,e)},l.prototype.mul=function(e,t){return e=new b(e,t),this.curve._wnafMul(this,e)},l.prototype.eq=function(e){if("affine"===e.type){ return this.eq(e.toJ()); }if(this===e){ return !0; }var t=this.z.redSqr(),r=e.z.redSqr();if(0!==this.x.redMul(r).redISub(e.x.redMul(t)).cmpn(0)){ return !1; }t=t.redMul(this.z),r=r.redMul(e.z);return 0===this.y.redMul(r).redISub(e.y.redMul(t)).cmpn(0)},l.prototype.eqXToP=function(e){var t=this.z.redSqr(),r=e.toRed(this.curve.red).redMul(t);if(0===this.x.cmp(r)){ return !0; }for(var n=e.clone(),i=this.curve.redN.redMul(t);;){if(n.iadd(this.curve.n),0<=n.cmp(this.curve.p)){ return !1; }if(r.redIAdd(i),0===this.x.cmp(r)){ return !0 }}},l.prototype.inspect=function(){return this.isInfinity()?"<EC JPoint Infinity>":"<EC JPoint x: "+this.x.toString(16,2)+" y: "+this.y.toString(16,2)+" z: "+this.z.toString(16,2)+">"},l.prototype.isInfinity=function(){return 0===this.z.cmpn(0)};},{"../utils":24,"./base":13,"bn.js":9,inherits:39}],18:[function(e,t,r){var n,i=r,r=e("hash.js"),o=e("./curve"),s=e("./utils").assert;function a(e){"short"===e.type?this.curve=new o.short(e):"edwards"===e.type?this.curve=new o.edwards(e):this.curve=new o.mont(e),this.g=this.curve.g,this.n=this.curve.n,this.hash=e.hash,s(this.g.validate(),"Invalid curve"),s(this.g.mul(this.n).isInfinity(),"Invalid curve, G*N != O");}function u(t,r){Object.defineProperty(i,t,{configurable:!0,enumerable:!0,get:function(){var e=new a(r);return Object.defineProperty(i,t,{configurable:!0,enumerable:!0,value:e}),e}});}i.PresetCurve=a,u("p192",{type:"short",prime:"p192",p:"ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",a:"ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",b:"64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",n:"ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",hash:r.sha256,gRed:!1,g:["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012","07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]}),u("p224",{type:"short",prime:"p224",p:"ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",a:"ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",b:"b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",n:"ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",hash:r.sha256,gRed:!1,g:["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21","bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]}),u("p256",{type:"short",prime:null,p:"ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",a:"ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",b:"5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",n:"ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",hash:r.sha256,gRed:!1,g:["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296","4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]}),u("p384",{type:"short",prime:null,p:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",a:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",b:"b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",n:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",hash:r.sha384,gRed:!1,g:["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7","3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"]}),u("p521",{type:"short",prime:null,p:"000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",a:"000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",b:"00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",n:"000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",hash:r.sha512,gRed:!1,g:["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66","00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"]}),u("curve25519",{type:"mont",prime:"p25519",p:"7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",a:"76d06",b:"1",n:"1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",hash:r.sha256,gRed:!1,g:["9"]}),u("ed25519",{type:"edwards",prime:"p25519",p:"7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",a:"-1",c:"1",d:"52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",n:"1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",hash:r.sha256,gRed:!1,g:["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a","6666666666666666666666666666666666666666666666666666666666666658"]});try{n=e("./precomputed/secp256k1");}catch(e){n=void 0;}u("secp256k1",{type:"short",prime:"k256",p:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",a:"0",b:"7",n:"ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",h:"1",hash:r.sha256,beta:"7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",lambda:"5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",basis:[{a:"3086d221a7d46bcde86c90e49284eb15",b:"-e4437ed6010e88286f547fa90abfe4c3"},{a:"114ca50f7a8e2f3f657c1108d9d44cfd8",b:"3086d221a7d46bcde86c90e49284eb15"}],gRed:!1,g:["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798","483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",n]});},{"./curve":15,"./precomputed/secp256k1":23,"./utils":24,"hash.js":26}],19:[function(e,t,r){var c=e("bn.js"),d=e("hmac-drbg"),n=e("../utils"),i=e("../curves"),o=e("brorand"),a=n.assert,s=e("./key"),p=e("./signature");function u(e){if(!(this instanceof u)){ return new u(e); }"string"==typeof e&&(a(Object.prototype.hasOwnProperty.call(i,e),"Unknown curve "+e),e=i[e]),e instanceof i.PresetCurve&&(e={curve:e}),this.curve=e.curve.curve,this.n=this.curve.n,this.nh=this.n.ushrn(1),this.g=this.curve.g,this.g=e.curve.g,this.g.precompute(e.curve.n.bitLength()+1),this.hash=e.hash||e.curve.hash;}(t.exports=u).prototype.keyPair=function(e){return new s(this,e)},u.prototype.keyFromPrivate=function(e,t){return s.fromPrivate(this,e,t)},u.prototype.keyFromPublic=function(e,t){return s.fromPublic(this,e,t)},u.prototype.genKeyPair=function(e){for(var t=new d({hash:this.hash,pers:(e=e||{}).pers,persEnc:e.persEnc||"utf8",entropy:e.entropy||o(this.hash.hmacStrength),entropyEnc:e.entropy&&e.entropyEnc||"utf8",nonce:this.n.toArray()}),r=this.n.byteLength(),n=this.n.sub(new c(2));;){var i=new c(t.generate(r));if(!(0<i.cmp(n))){ return i.iaddn(1),this.keyFromPrivate(i) }}},u.prototype._truncateToN=function(e,t){var r=8*e.byteLength()-this.n.bitLength();return 0<r&&(e=e.ushrn(r)),!t&&0<=e.cmp(this.n)?e.sub(this.n):e},u.prototype.sign=function(e,t,r,n){"object"==typeof r&&(n=r,r=null),n=n||{},t=this.keyFromPrivate(t,r),e=this._truncateToN(new c(e,16));for(var i=this.n.byteLength(),r=t.getPrivate().toArray("be",i),i=e.toArray("be",i),o=new d({hash:this.hash,entropy:r,nonce:i,pers:n.pers,persEnc:n.persEnc||"utf8"}),s=this.n.sub(new c(1)),a=0;;a++){var u=n.k?n.k(a):new c(o.generate(this.n.byteLength()));if(!((u=this._truncateToN(u,!0)).cmpn(1)<=0||0<=u.cmp(s))){var l=this.g.mul(u);if(!l.isInfinity()){var h=l.getX(),f=h.umod(this.n);if(0!==f.cmpn(0)){u=u.invm(this.n).mul(f.mul(t.getPrivate()).iadd(e));if(0!==(u=u.umod(this.n)).cmpn(0)){h=(l.getY().isOdd()?1:0)|(0!==h.cmp(f)?2:0);return n.canonical&&0<u.cmp(this.nh)&&(u=this.n.sub(u),h^=1),new p({r:f,s:u,recoveryParam:h})}}}}}},u.prototype.verify=function(e,t,r,n){e=this._truncateToN(new c(e,16)),r=this.keyFromPublic(r,n);n=(t=new p(t,"hex")).r,t=t.s;if(n.cmpn(1)<0||0<=n.cmp(this.n)){ return !1; }if(t.cmpn(1)<0||0<=t.cmp(this.n)){ return !1; }var i,t=t.invm(this.n),e=t.mul(e).umod(this.n),t=t.mul(n).umod(this.n);return this.curve._maxwellTrick?!(i=this.g.jmulAdd(e,r.getPublic(),t)).isInfinity()&&i.eqXToP(n):!(i=this.g.mulAdd(e,r.getPublic(),t)).isInfinity()&&0===i.getX().umod(this.n).cmp(n)},u.prototype.recoverPubKey=function(e,t,r,n){a((3&r)===r,"The recovery param is more than two bits"),t=new p(t,n);var i=this.n,o=new c(e),s=t.r,n=t.s,e=1&r,r=r>>1;if(0<=s.cmp(this.curve.p.umod(this.curve.n))&&r){ throw new Error("Unable to find sencond key candinate"); }s=r?this.curve.pointFromX(s.add(this.curve.n),e):this.curve.pointFromX(s,e),t=t.r.invm(i),o=i.sub(o).mul(t).umod(i),i=n.mul(t).umod(i);return this.g.mulAdd(o,s,i)},u.prototype.getKeyRecoveryParam=function(e,t,r,n){if(null!==(t=new p(t,n)).recoveryParam){ return t.recoveryParam; }for(var i,o=0;o<4;o++){try{i=this.recoverPubKey(e,t,o);}catch(e){continue}if(i.eq(r)){ return o }}throw new Error("Unable to find valid recovery factor")};},{"../curves":18,"../utils":24,"./key":20,"./signature":21,"bn.js":9,brorand:10,"hmac-drbg":38}],20:[function(e,t,r){var n=e("bn.js"),i=e("../utils").assert;function o(e,t){this.ec=e,this.priv=null,this.pub=null,t.priv&&this._importPrivate(t.priv,t.privEnc),t.pub&&this._importPublic(t.pub,t.pubEnc);}(t.exports=o).fromPublic=function(e,t,r){return t instanceof o?t:new o(e,{pub:t,pubEnc:r})},o.fromPrivate=function(e,t,r){return t instanceof o?t:new o(e,{priv:t,privEnc:r})},o.prototype.validate=function(){var e=this.getPublic();return e.isInfinity()?{result:!1,reason:"Invalid public key"}:e.validate()?e.mul(this.ec.curve.n).isInfinity()?{result:!0,reason:null}:{result:!1,reason:"Public key * N != O"}:{result:!1,reason:"Public key is not a point"}},o.prototype.getPublic=function(e,t){return "string"==typeof e&&(t=e,e=null),this.pub||(this.pub=this.ec.g.mul(this.priv)),t?this.pub.encode(t,e):this.pub},o.prototype.getPrivate=function(e){return "hex"===e?this.priv.toString(16,2):this.priv},o.prototype._importPrivate=function(e,t){this.priv=new n(e,t||16),this.priv=this.priv.umod(this.ec.curve.n);},o.prototype._importPublic=function(e,t){if(e.x||e.y){ return "mont"===this.ec.curve.type?i(e.x,"Need x coordinate"):"short"!==this.ec.curve.type&&"edwards"!==this.ec.curve.type||i(e.x&&e.y,"Need both x and y coordinate"),void(this.pub=this.ec.curve.point(e.x,e.y)); }this.pub=this.ec.curve.decodePoint(e,t);},o.prototype.derive=function(e){return e.validate()||i(e.validate(),"public point not validated"),e.mul(this.priv).getX()},o.prototype.sign=function(e,t,r){return this.ec.sign(e,this,t,r)},o.prototype.verify=function(e,t){return this.ec.verify(e,t,this)},o.prototype.inspect=function(){return "<Key priv: "+(this.priv&&this.priv.toString(16,2))+" pub: "+(this.pub&&this.pub.inspect())+" >"};},{"../utils":24,"bn.js":9}],21:[function(e,t,r){var i=e("bn.js"),o=e("../utils"),n=o.assert;function s(e,t){if(e instanceof s){ return e; }this._importDER(e,t)||(n(e.r&&e.s,"Signature without r or s"),this.r=new i(e.r,16),this.s=new i(e.s,16),void 0===e.recoveryParam?this.recoveryParam=null:this.recoveryParam=e.recoveryParam);}function a(){this.place=0;}function u(e,t){var r=e[t.place++];if(!(128&r)){ return r; }var n=15&r;if(0==n||4<n){ return !1; }for(var i=0,o=0,s=t.place;o<n;o++,s++){ i<<=8,i|=e[s],i>>>=0; }return !(i<=127)&&(t.place=s,i)}function l(e){for(var t=0,r=e.length-1;!e[t]&&!(128&e[t+1])&&t<r;){ t++; }return 0===t?e:e.slice(t)}function h(e,t){if(t<128){ e.push(t); }else{var r=1+(Math.log(t)/Math.LN2>>>3);for(e.push(128|r);--r;){ e.push(t>>>(r<<3)&255); }e.push(t);}}(t.exports=s).prototype._importDER=function(e,t){e=o.toArray(e,t);var r=new a;if(48!==e[r.place++]){ return !1; }var n=u(e,r);if(!1===n){ return !1; }if(n+r.place!==e.length){ return !1; }if(2!==e[r.place++]){ return !1; }t=u(e,r);if(!1===t){ return !1; }n=e.slice(r.place,t+r.place);if(r.place+=t,2!==e[r.place++]){ return !1; }t=u(e,r);if(!1===t){ return !1; }if(e.length!==t+r.place){ return !1; }r=e.slice(r.place,t+r.place);if(0===n[0]){if(!(128&n[1])){ return !1; }n=n.slice(1);}if(0===r[0]){if(!(128&r[1])){ return !1; }r=r.slice(1);}return this.r=new i(n),this.s=new i(r),!(this.recoveryParam=null)},s.prototype.toDER=function(e){var t=this.r.toArray(),r=this.s.toArray();for(128&t[0]&&(t=[0].concat(t)),128&r[0]&&(r=[0].concat(r)),t=l(t),r=l(r);!(r[0]||128&r[1]);){ r=r.slice(1); }var n=[2];h(n,t.length),(n=n.concat(t)).push(2),h(n,r.length);t=n.concat(r),n=[48];return h(n,t.length),n=n.concat(t),o.encode(n,e)};},{"../utils":24,"bn.js":9}],22:[function(e,t,r){arguments[4][14][0].apply(r,arguments);},{dup:14}],23:[function(e,t,r){t.exports=void 0;},{}],24:[function(e,t,r){var n=r,i=e("bn.js"),r=e("minimalistic-assert"),e=e("minimalistic-crypto-utils");n.assert=r,n.toArray=e.toArray,n.zero2=e.zero2,n.toHex=e.toHex,n.encode=e.encode,n.getNAF=function(e,t,r){var n=new Array(Math.max(e.bitLength(),r)+1);n.fill(0);for(var i=1<<t+1,o=e.clone(),s=0;s<n.length;s++){var a,u=o.andln(i-1);o.isOdd()?o.isubn(a=(i>>1)-1<u?(i>>1)-u:u):a=0,n[s]=a,o.iushrn(1);}return n},n.getJSF=function(e,t){var r=[[],[]];e=e.clone(),t=t.clone();for(var n,i=0,o=0;0<e.cmpn(-i)||0<t.cmpn(-o);){var s,a=e.andln(3)+i&3,u=t.andln(3)+o&3;3===u&&(u=-1),s=0==(1&(a=3===a?-1:a))?0:3!==(n=e.andln(7)+i&7)&&5!==n||2!==u?a:-a,r[0].push(s),u=0==(1&u)?0:3!==(n=t.andln(7)+o&7)&&5!==n||2!==a?u:-u,r[1].push(u),2*i===s+1&&(i=1-i),2*o===u+1&&(o=1-o),e.iushrn(1),t.iushrn(1);}return r},n.cachedProperty=function(e,t,r){var n="_"+t;e.prototype[t]=function(){return void 0!==this[n]?this[n]:this[n]=r.call(this)};},n.parseBytes=function(e){return "string"==typeof e?n.toArray(e,"hex"):e},n.intFromLE=function(e){return new i(e,"hex","le")};},{"bn.js":9,"minimalistic-assert":41,"minimalistic-crypto-utils":42}],25:[function(e,t,r){t.exports={version:"6.5.4"};},{}],26:[function(e,t,r){r.utils=e("./hash/utils"),r.common=e("./hash/common"),r.sha=e("./hash/sha"),r.ripemd=e("./hash/ripemd"),r.hmac=e("./hash/hmac"),r.sha1=r.sha.sha1,r.sha256=r.sha.sha256,r.sha224=r.sha.sha224,r.sha384=r.sha.sha384,r.sha512=r.sha.sha512,r.ripemd160=r.ripemd.ripemd160;},{"./hash/common":27,"./hash/hmac":28,"./hash/ripemd":29,"./hash/sha":30,"./hash/utils":37}],27:[function(e,t,r){var n=e("./utils"),i=e("minimalistic-assert");function o(){this.pending=null,this.pendingTotal=0,this.blockSize=this.constructor.blockSize,this.outSize=this.constructor.outSize,this.hmacStrength=this.constructor.hmacStrength,this.padLength=this.constructor.padLength/8,this.endian="big",this._delta8=this.blockSize/8,this._delta32=this.blockSize/32;}(r.BlockHash=o).prototype.update=function(e,t){if(e=n.toArray(e,t),this.pending?this.pending=this.pending.concat(e):this.pending=e,this.pendingTotal+=e.length,this.pending.length>=this._delta8){t=(e=this.pending).length%this._delta8;this.pending=e.slice(e.length-t,e.length),0===this.pending.length&&(this.pending=null),e=n.join32(e,0,e.length-t,this.endian);for(var r=0;r<e.length;r+=this._delta32){ this._update(e,r,r+this._delta32); }}return this},o.prototype.digest=function(e){return this.update(this._pad()),i(null===this.pending),this._digest(e)},o.prototype._pad=function(){var e=this.pendingTotal,t=this._delta8,r=t-(e+this.padLength)%t,n=new Array(r+this.padLength);n[0]=128;for(var i=1;i<r;i++){ n[i]=0; }if(e<<=3,"big"===this.endian){for(var o=8;o<this.padLength;o++){ n[i++]=0; }n[i++]=0,n[i++]=0,n[i++]=0,n[i++]=0,n[i++]=e>>>24&255,n[i++]=e>>>16&255,n[i++]=e>>>8&255,n[i++]=255&e;}else { for(n[i++]=255&e,n[i++]=e>>>8&255,n[i++]=e>>>16&255,n[i++]=e>>>24&255,n[i++]=0,n[i++]=0,n[i++]=0,n[i++]=0,o=8;o<this.padLength;o++){ n[i++]=0; } }return n};},{"./utils":37,"minimalistic-assert":41}],28:[function(e,t,r){var n=e("./utils"),i=e("minimalistic-assert");function o(e,t,r){if(!(this instanceof o)){ return new o(e,t,r); }this.Hash=e,this.blockSize=e.blockSize/8,this.outSize=e.outSize/8,this.inner=null,this.outer=null,this._init(n.toArray(t,r));}(t.exports=o).prototype._init=function(e){e.length>this.blockSize&&(e=(new this.Hash).update(e).digest()),i(e.length<=this.blockSize);for(var t=e.length;t<this.blockSize;t++){ e.push(0); }for(t=0;t<e.length;t++){ e[t]^=54; }for(this.inner=(new this.Hash).update(e),t=0;t<e.length;t++){ e[t]^=106; }this.outer=(new this.Hash).update(e);},o.prototype.update=function(e,t){return this.inner.update(e,t),this},o.prototype.digest=function(e){return this.outer.update(this.inner.digest()),this.outer.digest(e)};},{"./utils":37,"minimalistic-assert":41}],29:[function(e,t,r){var n=e("./utils"),e=e("./common"),y=n.rotl32,m=n.sum32,g=n.sum32_3,v=n.sum32_4,i=e.BlockHash;function o(){if(!(this instanceof o)){ return new o; }i.call(this),this.h=[1732584193,4023233417,2562383102,271733878,3285377520],this.endian="little";}function b(e,t,r,n){return e<=15?t^r^n:e<=31?t&r|~t&n:e<=47?(t|~r)^n:e<=63?t&n|r&~n:t^(r|~n)}n.inherits(o,i),(r.ripemd160=o).blockSize=512,o.outSize=160,o.hmacStrength=192,o.padLength=64,o.prototype._update=function(e,t){for(var r,n=h=this.h[0],i=p=this.h[1],o=d=this.h[2],s=c=this.h[3],a=f=this.h[4],u=0;u<80;u++){ var l=m(y(v(h,b(u,p,d,c),e[w[u]+t],(r=u)<=15?0:r<=31?1518500249:r<=47?1859775393:r<=63?2400959708:2840853838),M[u]),f),h=f,f=c,c=y(d,10),d=p,p=l,l=m(y(v(n,b(79-u,i,o,s),e[_[u]+t],(r=u)<=15?1352829926:r<=31?1548603684:r<=47?1836072691:r<=63?2053994217:0),A[u]),a),n=a,a=s,s=y(o,10),o=i,i=l; }l=g(this.h[1],d,s),this.h[1]=g(this.h[2],c,a),this.h[2]=g(this.h[3],f,n),this.h[3]=g(this.h[4],h,i),this.h[4]=g(this.h[0],p,o),this.h[0]=l;},o.prototype._digest=function(e){return "hex"===e?n.toHex32(this.h,"little"):n.split32(this.h,"little")};var w=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13],_=[5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11],M=[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6],A=[8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11];},{"./common":27,"./utils":37}],30:[function(e,t,r){r.sha1=e("./sha/1"),r.sha224=e("./sha/224"),r.sha256=e("./sha/256"),r.sha384=e("./sha/384"),r.sha512=e("./sha/512");},{"./sha/1":31,"./sha/224":32,"./sha/256":33,"./sha/384":34,"./sha/512":35}],31:[function(e,t,r){arguments[4][14][0].apply(r,arguments);},{dup:14}],32:[function(e,t,r){arguments[4][14][0].apply(r,arguments);},{dup:14}],33:[function(e,t,r){var n=e("../utils"),i=e("../common"),o=e("./common"),p=e("minimalistic-assert"),y=n.sum32,m=n.sum32_4,g=n.sum32_5,v=o.ch32,b=o.maj32,w=o.s0_256,_=o.s1_256,M=o.g0_256,A=o.g1_256,s=i.BlockHash,a=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];function u(){if(!(this instanceof u)){ return new u; }s.call(this),this.h=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],this.k=a,this.W=new Array(64);}n.inherits(u,s),(t.exports=u).blockSize=512,u.outSize=256,u.hmacStrength=192,u.padLength=64,u.prototype._update=function(e,t){for(var r=this.W,n=0;n<16;n++){ r[n]=e[t+n]; }for(;n<r.length;n++){ r[n]=m(A(r[n-2]),r[n-7],M(r[n-15]),r[n-16]); }var i=this.h[0],o=this.h[1],s=this.h[2],a=this.h[3],u=this.h[4],l=this.h[5],h=this.h[6],f=this.h[7];for(p(this.k.length===r.length),n=0;n<r.length;n++){ var c=g(f,_(u),v(u,l,h),this.k[n],r[n]),d=y(w(i),b(i,o,s)),f=h,h=l,l=u,u=y(a,c),a=s,s=o,o=i,i=y(c,d); }this.h[0]=y(this.h[0],i),this.h[1]=y(this.h[1],o),this.h[2]=y(this.h[2],s),this.h[3]=y(this.h[3],a),this.h[4]=y(this.h[4],u),this.h[5]=y(this.h[5],l),this.h[6]=y(this.h[6],h),this.h[7]=y(this.h[7],f);},u.prototype._digest=function(e){return "hex"===e?n.toHex32(this.h,"big"):n.split32(this.h,"big")};},{"../common":27,"../utils":37,"./common":36,"minimalistic-assert":41}],34:[function(e,t,r){arguments[4][14][0].apply(r,arguments);},{dup:14}],35:[function(e,t,r){var n=e("../utils"),i=e("../common"),T=e("minimalistic-assert"),R=n.rotr64_hi,O=n.rotr64_lo,c=n.shr64_hi,d=n.shr64_lo,C=n.sum64,L=n.sum64_hi,B=n.sum64_lo,p=n.sum64_4_hi,y=n.sum64_4_lo,D=n.sum64_5_hi,U=n.sum64_5_lo,o=i.BlockHash,s=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591];function a(){if(!(this instanceof a)){ return new a; }o.call(this),this.h=[1779033703,4089235720,3144134277,2227873595,1013904242,4271175723,2773480762,1595750129,1359893119,2917565137,2600822924,725511199,528734635,4215389547,1541459225,327033209],this.k=s,this.W=new Array(160);}n.inherits(a,o),(t.exports=a).blockSize=1024,a.outSize=512,a.hmacStrength=192,a.padLength=128,a.prototype._prepareBlock=function(e,t){for(var r=this.W,n=0;n<32;n++){ r[n]=e[t+n]; }for(;n<r.length;n+=2){var i=function(e,t){var r=R(e,t,19),n=R(t,e,29),t=c(e,t,6),t=r^n^t;t<0&&(t+=4294967296);return t}(r[n-4],r[n-3]),o=function(e,t){var r=O(e,t,19),n=O(t,e,29),t=d(e,t,6),t=r^n^t;t<0&&(t+=4294967296);return t}(r[n-4],r[n-3]),s=r[n-14],a=r[n-13],u=function(e,t){var r=R(e,t,1),n=R(e,t,8),t=c(e,t,7),t=r^n^t;t<0&&(t+=4294967296);return t}(r[n-30],r[n-29]),l=function(e,t){var r=O(e,t,1),n=O(e,t,8),t=d(e,t,7),t=r^n^t;t<0&&(t+=4294967296);return t}(r[n-30],r[n-29]),h=r[n-32],f=r[n-31];r[n]=p(i,o,s,a,u,l,h,f),r[n+1]=y(i,o,s,a,u,l,h,f);}},a.prototype._update=function(e,t){this._prepareBlock(e,t);var r=this.W,n=this.h[0],i=this.h[1],o=this.h[2],s=this.h[3],a=this.h[4],u=this.h[5],l=this.h[6],h=this.h[7],f=this.h[8],c=this.h[9],d=this.h[10],p=this.h[11],y=this.h[12],m=this.h[13],g=this.h[14],v=this.h[15];T(this.k.length===r.length);for(var b=0;b<r.length;b+=2){ var w=g,_=v,M=function(e,t){var r=R(e,t,14),n=R(e,t,18),e=R(t,e,9),e=r^n^e;e<0&&(e+=4294967296);return e}(f,c),A=function(e,t){var r=O(e,t,14),n=O(e,t,18),e=O(t,e,9),e=r^n^e;e<0&&(e+=4294967296);return e}(f,c),E=function(e,t,r){r=e&t^~e&r;r<0&&(r+=4294967296);return r}(f,d,y),S=function(e,t,r){r=e&t^~e&r;r<0&&(r+=4294967296);return r}(c,p,m),k=this.k[b],N=this.k[b+1],x=r[b],P=r[b+1],I=D(w,_,M,A,E,S,k,N,x,P),x=U(w,_,M,A,E,S,k,N,x,P),w=function(e,t){var r=R(e,t,28),n=R(t,e,2),e=R(t,e,7),e=r^n^e;e<0&&(e+=4294967296);return e}(n,i),_=function(e,t){var r=O(e,t,28),n=O(t,e,2),e=O(t,e,7),e=r^n^e;e<0&&(e+=4294967296);return e}(n,i),M=function(e,t,r){r=e&t^e&r^t&r;r<0&&(r+=4294967296);return r}(n,o,a),A=function(e,t,r){r=e&t^e&r^t&r;r<0&&(r+=4294967296);return r}(i,s,u),P=L(w,_,M,A),A=B(w,_,M,A),g=y,v=m,y=d,m=p,d=f,p=c,f=L(l,h,I,x),c=B(h,h,I,x),l=a,h=u,a=o,u=s,o=n,s=i,n=L(I,x,P,A),i=B(I,x,P,A); }C(this.h,0,n,i),C(this.h,2,o,s),C(this.h,4,a,u),C(this.h,6,l,h),C(this.h,8,f,c),C(this.h,10,d,p),C(this.h,12,y,m),C(this.h,14,g,v);},a.prototype._digest=function(e){return "hex"===e?n.toHex32(this.h,"big"):n.split32(this.h,"big")};},{"../common":27,"../utils":37,"minimalistic-assert":41}],36:[function(e,t,r){var n=e("../utils").rotr32;function i(e,t,r){return e&t^~e&r}function o(e,t,r){return e&t^e&r^t&r}function s(e,t,r){return e^t^r}r.ft_1=function(e,t,r,n){return 0===e?i(t,r,n):1===e||3===e?t^r^n:2===e?o(t,r,n):void 0},r.ch32=i,r.maj32=o,r.p32=s,r.s0_256=function(e){return n(e,2)^n(e,13)^n(e,22)},r.s1_256=function(e){return n(e,6)^n(e,11)^n(e,25)},r.g0_256=function(e){return n(e,7)^n(e,18)^e>>>3},r.g1_256=function(e){return n(e,17)^n(e,19)^e>>>10};},{"../utils":37}],37:[function(e,t,r){var u=e("minimalistic-assert"),e=e("inherits");function o(e){return (e>>>24|e>>>8&65280|e<<8&16711680|(255&e)<<24)>>>0}function n(e){return 1===e.length?"0"+e:e}function s(e){return 7===e.length?"0"+e:6===e.length?"00"+e:5===e.length?"000"+e:4===e.length?"0000"+e:3===e.length?"00000"+e:2===e.length?"000000"+e:1===e.length?"0000000"+e:e}r.inherits=e,r.toArray=function(e,t){if(Array.isArray(e)){ return e.slice(); }if(!e){ return []; }var r=[];if("string"==typeof e){ if(t){if("hex"===t){ for((e=e.replace(/[^a-z0-9]+/gi,"")).length%2!=0&&(e="0"+e),n=0;n<e.length;n+=2){ r.push(parseInt(e[n]+e[n+1],16)); } }}else { for(var n=0;n<e.length;n++){var i=e.charCodeAt(n),o=i>>8,i=255&i;o?r.push(o,i):r.push(i);} } }else { for(n=0;n<e.length;n++){ r[n]=0|e[n]; } }return r},r.toHex=function(e){for(var t="",r=0;r<e.length;r++){ t+=n(e[r].toString(16)); }return t},r.htonl=o,r.toHex32=function(e,t){for(var r="",n=0;n<e.length;n++){var i=e[n];r+=s((i="little"===t?o(i):i).toString(16));}return r},r.zero2=n,r.zero8=s,r.join32=function(e,t,r,n){u((r-=t)%4==0);for(var i=new Array(r/4),o=0,s=t;o<i.length;o++,s+=4){var a="big"===n?e[s]<<24|e[s+1]<<16|e[s+2]<<8|e[s+3]:e[s+3]<<24|e[s+2]<<16|e[s+1]<<8|e[s];i[o]=a>>>0;}return i},r.split32=function(e,t){for(var r=new Array(4*e.length),n=0,i=0;n<e.length;n++,i+=4){var o=e[n];"big"===t?(r[i]=o>>>24,r[i+1]=o>>>16&255,r[i+2]=o>>>8&255,r[i+3]=255&o):(r[i+3]=o>>>24,r[i+2]=o>>>16&255,r[i+1]=o>>>8&255,r[i]=255&o);}return r},r.rotr32=function(e,t){return e>>>t|e<<32-t},r.rotl32=function(e,t){return e<<t|e>>>32-t},r.sum32=function(e,t){return e+t>>>0},r.sum32_3=function(e,t,r){return e+t+r>>>0},r.sum32_4=function(e,t,r,n){return e+t+r+n>>>0},r.sum32_5=function(e,t,r,n,i){return e+t+r+n+i>>>0},r.sum64=function(e,t,r,n){var i=e[t],o=n+e[t+1]>>>0;e[t]=(o<n?1:0)+r+i>>>0,e[t+1]=o;},r.sum64_hi=function(e,t,r,n){return (t+n>>>0<t?1:0)+e+r>>>0},r.sum64_lo=function(e,t,r,n){return t+n>>>0},r.sum64_4_hi=function(e,t,r,n,i,o,s,a){var u=0,l=t;return u+=(l=t+n>>>0)<t?1:0,u+=(l=l+o>>>0)<o?1:0,e+r+i+s+(u+=(l=l+a>>>0)<a?1:0)>>>0},r.sum64_4_lo=function(e,t,r,n,i,o,s,a){return t+n+o+a>>>0},r.sum64_5_hi=function(e,t,r,n,i,o,s,a,u,l){var h=0,f=t;return h+=(f=t+n>>>0)<t?1:0,h+=(f=f+o>>>0)<o?1:0,h+=(f=f+a>>>0)<a?1:0,e+r+i+s+u+(h+=(f=f+l>>>0)<l?1:0)>>>0},r.sum64_5_lo=function(e,t,r,n,i,o,s,a,u,l){return t+n+o+a+l>>>0},r.rotr64_hi=function(e,t,r){return (t<<32-r|e>>>r)>>>0},r.rotr64_lo=function(e,t,r){return (e<<32-r|t>>>r)>>>0},r.shr64_hi=function(e,t,r){return e>>>r},r.shr64_lo=function(e,t,r){return (e<<32-r|t>>>r)>>>0};},{inherits:39,"minimalistic-assert":41}],38:[function(e,t,r){var n=e("hash.js"),o=e("minimalistic-crypto-utils"),i=e("minimalistic-assert");function s(e){if(!(this instanceof s)){ return new s(e); }this.hash=e.hash,this.predResist=!!e.predResist,this.outLen=this.hash.outSize,this.minEntropy=e.minEntropy||this.hash.hmacStrength,this._reseed=null,this.reseedInterval=null,this.K=null,this.V=null;var t=o.toArray(e.entropy,e.entropyEnc||"hex"),r=o.toArray(e.nonce,e.nonceEnc||"hex"),e=o.toArray(e.pers,e.persEnc||"hex");i(t.length>=this.minEntropy/8,"Not enough entropy. Minimum is: "+this.minEntropy+" bits"),this._init(t,r,e);}(t.exports=s).prototype._init=function(e,t,r){r=e.concat(t).concat(r);this.K=new Array(this.outLen/8),this.V=new Array(this.outLen/8);for(var n=0;n<this.V.length;n++){ this.K[n]=0,this.V[n]=1; }this._update(r),this._reseed=1,this.reseedInterval=281474976710656;},s.prototype._hmac=function(){return new n.hmac(this.hash,this.K)},s.prototype._update=function(e){var t=this._hmac().update(this.V).update([0]);e&&(t=t.update(e)),this.K=t.digest(),this.V=this._hmac().update(this.V).digest(),e&&(this.K=this._hmac().update(this.V).update([1]).update(e).digest(),this.V=this._hmac().update(this.V).digest());},s.prototype.reseed=function(e,t,r,n){"string"!=typeof t&&(n=r,r=t,t=null),e=o.toArray(e,t),r=o.toArray(r,n),i(e.length>=this.minEntropy/8,"Not enough entropy. Minimum is: "+this.minEntropy+" bits"),this._update(e.concat(r||[])),this._reseed=1;},s.prototype.generate=function(e,t,r,n){if(this._reseed>this.reseedInterval){ throw new Error("Reseed is required"); }"string"!=typeof t&&(n=r,r=t,t=null),r&&(r=o.toArray(r,n||"hex"),this._update(r));for(var i=[];i.length<e;){ this.V=this._hmac().update(this.V).digest(),i=i.concat(this.V); }n=i.slice(0,e);return this._update(r),this._reseed++,o.encode(n,t)};},{"hash.js":26,"minimalistic-assert":41,"minimalistic-crypto-utils":42}],39:[function(e,t,r){"function"==typeof Object.create?t.exports=function(e,t){t&&(e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}));}:t.exports=function(e,t){var r;t&&(e.super_=t,(r=function(){}).prototype=t.prototype,e.prototype=new r,e.prototype.constructor=e);};},{}],40:[function(e,_,t){!function(b,w){!function(){!function(){for(var e="object"==typeof window?window:{},t=!(e=!e.JS_SHA3_NO_NODE_JS&&"object"==typeof b&&b.versions&&b.versions.node?w:e).JS_SHA3_NO_COMMON_JS&&"object"==typeof _&&_.exports,u="0123456789abcdef".split(""),h=[0,8,16,24],Q=[1,0,32898,0,32906,2147483648,2147516416,2147483648,32907,0,2147483649,0,2147516545,2147483648,32777,2147483648,138,0,136,0,2147516425,0,2147483658,0,2147516555,0,139,2147483648,32905,2147483648,32771,2147483648,32770,2147483648,128,2147483648,32778,0,2147483658,2147483648,2147516545,2147483648,32896,2147483648,2147483649,0,2147516424,2147483648],r=[224,256,384,512],o=["hex","buffer","arrayBuffer","array"],s=function(t,r,n){return function(e){return new g(t,r,t).update(e)[n]()}},a=function(r,n,i){return function(e,t){return new g(r,n,t).update(e)[i]()}},n=function(e,t){var r=s(e,t,"hex");r.create=function(){return new g(e,t,e)},r.update=function(e){return r.create().update(e)};for(var n=0;n<o.length;++n){var i=o[n];r[i]=s(e,t,i);}return r},i=[{name:"keccak",padding:[1,256,65536,16777216],bits:r,createMethod:n},{name:"sha3",padding:[6,1536,393216,100663296],bits:r,createMethod:n},{name:"shake",padding:[31,7936,2031616,520093696],bits:[128,256],createMethod:function(t,r){var n=a(t,r,"hex");n.create=function(e){return new g(t,r,e)},n.update=function(e,t){return n.create(t).update(e)};for(var e=0;e<o.length;++e){var i=o[e];n[i]=a(t,r,i);}return n}}],l={},f=[],c=0;c<i.length;++c){ for(var d=i[c],p=d.bits,y=0;y<p.length;++y){var m=d.name+"_"+p[y];f.push(m),l[m]=d.createMethod(p[y],d.padding);} }function g(e,t,r){this.blocks=[],this.s=[],this.padding=t,this.outputBits=r,this.reset=!0,this.block=0,this.start=0,this.blockCount=1600-(e<<1)>>5,this.byteCount=this.blockCount<<2,this.outputBlocks=r>>5,this.extraBytes=(31&r)>>3;for(var n=0;n<50;++n){ this.s[n]=0; }}g.prototype.update=function(e){for(var t,r,n="string"!=typeof e,i=(e=n&&e.constructor===ArrayBuffer?new Uint8Array(e):e).length,o=this.blocks,s=this.byteCount,a=this.blockCount,u=0,l=this.s;u<i;){if(this.reset){ for(this.reset=!1,o[0]=this.block,t=1;t<a+1;++t){ o[t]=0; } }if(n){ for(t=this.start;u<i&&t<s;++u){ o[t>>2]|=e[u]<<h[3&t++]; } }else { for(t=this.start;u<i&&t<s;++u){ (r=e.charCodeAt(u))<128?o[t>>2]|=r<<h[3&t++]:(r<2048?o[t>>2]|=(192|r>>6)<<h[3&t++]:(r<55296||57344<=r?o[t>>2]|=(224|r>>12)<<h[3&t++]:(r=65536+((1023&r)<<10|1023&e.charCodeAt(++u)),o[t>>2]|=(240|r>>18)<<h[3&t++],o[t>>2]|=(128|r>>12&63)<<h[3&t++]),o[t>>2]|=(128|r>>6&63)<<h[3&t++]),o[t>>2]|=(128|63&r)<<h[3&t++]); } }if(s<=(this.lastByteIndex=t)){for(this.start=t-s,this.block=o[a],t=0;t<a;++t){ l[t]^=o[t]; }v(l),this.reset=!0;}else { this.start=t; }}return this},g.prototype.finalize=function(){var e=this.blocks,t=this.lastByteIndex,r=this.blockCount,n=this.s;if(e[t>>2]|=this.padding[3&t],this.lastByteIndex===this.byteCount){ for(e[0]=e[r],t=1;t<r+1;++t){ e[t]=0; } }for(e[r-1]|=2147483648,t=0;t<r;++t){ n[t]^=e[t]; }v(n);},g.prototype.toString=g.prototype.hex=function(){this.finalize();for(var e,t=this.blockCount,r=this.s,n=this.outputBlocks,i=this.extraBytes,o=0,s=0,a="";s<n;){for(o=0;o<t&&s<n;++o,++s){ e=r[o],a+=u[e>>4&15]+u[15&e]+u[e>>12&15]+u[e>>8&15]+u[e>>20&15]+u[e>>16&15]+u[e>>28&15]+u[e>>24&15]; }s%t==0&&(v(r),o=0);}return i&&(e=r[o],0<i&&(a+=u[e>>4&15]+u[15&e]),1<i&&(a+=u[e>>12&15]+u[e>>8&15]),2<i&&(a+=u[e>>20&15]+u[e>>16&15])),a},g.prototype.arrayBuffer=function(){this.finalize();for(var e=this.blockCount,t=this.s,r=this.outputBlocks,n=this.extraBytes,i=0,o=0,s=this.outputBits>>3,a=n?new ArrayBuffer(r+1<<2):new ArrayBuffer(s),u=new Uint32Array(a);o<r;){for(i=0;i<e&&o<r;++i,++o){ u[o]=t[i]; }o%e==0&&v(t);}return n&&(u[i]=t[i],a=a.slice(0,s)),a},g.prototype.buffer=g.prototype.arrayBuffer,g.prototype.digest=g.prototype.array=function(){this.finalize();for(var e,t,r=this.blockCount,n=this.s,i=this.outputBlocks,o=this.extraBytes,s=0,a=0,u=[];a<i;){for(s=0;s<r&&a<i;++s,++a){ t=n[s],u[e=a<<2]=255&t,u[e+1]=t>>8&255,u[e+2]=t>>16&255,u[e+3]=t>>24&255; }a%r==0&&v(n);}return o&&(e=a<<2,t=n[s],0<o&&(u[e]=255&t),1<o&&(u[e+1]=t>>8&255),2<o&&(u[e+2]=t>>16&255)),u};var v=function(e){for(var t,r,n,i,o,s,a,u,l,h,f,c,d,p,y,m,g,v,b,w,_,M,A,E,S,k,N,x,P,I,T,R,O,C,L,B,D,U,F,j,G,H,z,V,K,q,W,Z,J,X,$=0;$<48;$+=2){ N=e[0]^e[10]^e[20]^e[30]^e[40],x=e[1]^e[11]^e[21]^e[31]^e[41],j=e[2]^e[12]^e[22]^e[32]^e[42],F=e[3]^e[13]^e[23]^e[33]^e[43],R=e[4]^e[14]^e[24]^e[34]^e[44],T=e[5]^e[15]^e[25]^e[35]^e[45],q=e[6]^e[16]^e[26]^e[36]^e[46],K=e[7]^e[17]^e[27]^e[37]^e[47],d=e[8]^e[18]^e[28]^e[38]^e[48],h=(p=e[9]^e[19]^e[29]^e[39]^e[49])^(F<<1|j>>>31),e[0]^=l=d^(j<<1|F>>>31),e[1]^=h,e[10]^=l,e[11]^=h,e[20]^=l,e[21]^=h,e[30]^=l,e[31]^=h,e[40]^=l,e[41]^=h,h=x^(T<<1|R>>>31),e[2]^=l=N^(R<<1|T>>>31),e[3]^=h,e[12]^=l,e[13]^=h,e[22]^=l,e[23]^=h,e[32]^=l,e[33]^=h,e[42]^=l,e[43]^=h,h=F^(K<<1|q>>>31),e[4]^=l=j^(q<<1|K>>>31),e[5]^=h,e[14]^=l,e[15]^=h,e[24]^=l,e[25]^=h,e[34]^=l,e[35]^=h,e[44]^=l,e[45]^=h,h=T^(p<<1|d>>>31),e[6]^=l=R^(d<<1|p>>>31),e[7]^=h,e[16]^=l,e[17]^=h,e[26]^=l,e[27]^=h,e[36]^=l,e[37]^=h,e[46]^=l,e[47]^=h,h=K^(x<<1|N>>>31),e[8]^=l=q^(N<<1|x>>>31),e[9]^=h,e[18]^=l,e[19]^=h,e[28]^=l,e[29]^=h,e[38]^=l,e[39]^=h,e[48]^=l,e[49]^=h,t=e[0],r=e[1],O=e[11]<<4|e[10]>>>28,C=e[10]<<4|e[11]>>>28,y=e[20]<<3|e[21]>>>29,m=e[21]<<3|e[20]>>>29,W=e[31]<<9|e[30]>>>23,Z=e[30]<<9|e[31]>>>23,P=e[40]<<18|e[41]>>>14,I=e[41]<<18|e[40]>>>14,_=e[2]<<1|e[3]>>>31,M=e[3]<<1|e[2]>>>31,n=e[13]<<12|e[12]>>>20,i=e[12]<<12|e[13]>>>20,L=e[22]<<10|e[23]>>>22,B=e[23]<<10|e[22]>>>22,g=e[33]<<13|e[32]>>>19,v=e[32]<<13|e[33]>>>19,J=e[42]<<2|e[43]>>>30,X=e[43]<<2|e[42]>>>30,G=e[5]<<30|e[4]>>>2,H=e[4]<<30|e[5]>>>2,A=e[14]<<6|e[15]>>>26,E=e[15]<<6|e[14]>>>26,o=e[25]<<11|e[24]>>>21,s=e[24]<<11|e[25]>>>21,D=e[34]<<15|e[35]>>>17,U=e[35]<<15|e[34]>>>17,b=e[45]<<29|e[44]>>>3,w=e[44]<<29|e[45]>>>3,f=e[6]<<28|e[7]>>>4,c=e[7]<<28|e[6]>>>4,z=e[17]<<23|e[16]>>>9,V=e[16]<<23|e[17]>>>9,S=e[26]<<25|e[27]>>>7,k=e[27]<<25|e[26]>>>7,a=e[36]<<21|e[37]>>>11,u=e[37]<<21|e[36]>>>11,F=e[47]<<24|e[46]>>>8,j=e[46]<<24|e[47]>>>8,T=e[8]<<27|e[9]>>>5,R=e[9]<<27|e[8]>>>5,d=e[18]<<20|e[19]>>>12,p=e[19]<<20|e[18]>>>12,K=e[29]<<7|e[28]>>>25,q=e[28]<<7|e[29]>>>25,N=e[38]<<8|e[39]>>>24,x=e[39]<<8|e[38]>>>24,l=e[48]<<14|e[49]>>>18,h=e[49]<<14|e[48]>>>18,e[0]=t^~n&o,e[1]=r^~i&s,e[10]=f^~d&y,e[11]=c^~p&m,e[20]=_^~A&S,e[21]=M^~E&k,e[30]=T^~O&L,e[31]=R^~C&B,e[40]=G^~z&K,e[41]=H^~V&q,e[2]=n^~o&a,e[3]=i^~s&u,e[12]=d^~y&g,e[13]=p^~m&v,e[22]=A^~S&N,e[23]=E^~k&x,e[32]=O^~L&D,e[33]=C^~B&U,e[42]=z^~K&W,e[43]=V^~q&Z,e[4]=o^~a&l,e[5]=s^~u&h,e[14]=y^~g&b,e[15]=m^~v&w,e[24]=S^~N&P,e[25]=k^~x&I,e[34]=L^~D&F,e[35]=B^~U&j,e[44]=K^~W&J,e[45]=q^~Z&X,e[6]=a^~l&t,e[7]=u^~h&r,e[16]=g^~b&f,e[17]=v^~w&c,e[26]=N^~P&_,e[27]=x^~I&M,e[36]=D^~F&T,e[37]=U^~j&R,e[46]=W^~J&G,e[47]=Z^~X&H,e[8]=l^~t&n,e[9]=h^~r&i,e[18]=b^~f&d,e[19]=w^~c&p,e[28]=P^~_&A,e[29]=I^~M&E,e[38]=F^~T&O,e[39]=j^~R&C,e[48]=J^~G&z,e[49]=X^~H&V,e[0]^=Q[$],e[1]^=Q[$+1]; }};if(t){ _.exports=l; }else { for(c=0;c<f.length;++c){ e[f[c]]=l[f[c]]; } }}();}.call(this);}.call(this,e("_process"),"undefined"!=typeof commonjsGlobal?commonjsGlobal:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});},{_process:43}],41:[function(e,t,r){function n(e,t){if(!e){ throw new Error(t||"Assertion failed") }}(t.exports=n).equal=function(e,t,r){if(e!=t){ throw new Error(r||"Assertion failed: "+e+" != "+t) }};},{}],42:[function(e,t,r){function n(e){return 1===e.length?"0"+e:e}function i(e){for(var t="",r=0;r<e.length;r++){ t+=n(e[r].toString(16)); }return t}r.toArray=function(e,t){if(Array.isArray(e)){ return e.slice(); }if(!e){ return []; }var r=[];if("string"!=typeof e){for(var n=0;n<e.length;n++){ r[n]=0|e[n]; }return r}if("hex"===t){(e=e.replace(/[^a-z0-9]+/gi,"")).length%2!=0&&(e="0"+e);for(n=0;n<e.length;n+=2){ r.push(parseInt(e[n]+e[n+1],16)); }}else { for(n=0;n<e.length;n++){var i=e.charCodeAt(n),o=i>>8,i=255&i;o?r.push(o,i):r.push(i);} }return r},r.zero2=n,r.toHex=i,r.encode=function(e,t){return "hex"===t?i(e):e};},{}],43:[function(e,t,r){t.exports={browser:!0};},{}],44:[function(e,r,i){!function(C){!function(){function l(e){var m=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],g=1779033703,v=3144134277,b=1013904242,w=2773480762,_=1359893119,M=2600822924,A=528734635,E=1541459225,S=new Array(64);function t(e){for(var t=0,r=e.length;64<=r;){for(var n,i,o,s,a=g,u=v,l=b,h=w,f=_,c=M,d=A,p=E,y=0;y<16;y++){ S[y]=(255&e[i=t+4*y])<<24|(255&e[i+1])<<16|(255&e[i+2])<<8|255&e[i+3]; }for(y=16;y<64;y++){ o=((n=S[y-2])>>>17|n<<15)^(n>>>19|n<<13)^n>>>10,n=S[y-15],S[y]=(o+S[y-7]|0)+((s=(n>>>7|n<<25)^(n>>>18|n<<14)^n>>>3)+S[y-16]|0)|0; }for(y=0;y<64;y++){ o=(((f>>>6|f<<26)^(f>>>11|f<<21)^(f>>>25|f<<7))+(f&c^~f&d)|0)+(p+(m[y]+S[y]|0)|0)|0,s=((a>>>2|a<<30)^(a>>>13|a<<19)^(a>>>22|a<<10))+(a&u^a&l^u&l)|0,p=d,d=c,c=f,f=h+o|0,h=l,l=u,u=a,a=o+s|0; }g=g+a|0,v=v+u|0,b=b+l|0,w=w+h|0,_=_+f|0,M=M+c|0,A=A+d|0,E=E+p|0,t+=64,r-=64;}}t(e);var r,n=e.length%64,i=e.length/536870912|0,o=e.length<<3,s=n<56?56:120,a=e.slice(e.length-n,e.length);for(a.push(128),r=1+n;r<s;r++){ a.push(0); }return a.push(i>>>24&255),a.push(i>>>16&255),a.push(i>>>8&255),a.push(i>>>0&255),a.push(o>>>24&255),a.push(o>>>16&255),a.push(o>>>8&255),a.push(o>>>0&255),t(a),[g>>>24&255,g>>>16&255,g>>>8&255,g>>>0&255,v>>>24&255,v>>>16&255,v>>>8&255,v>>>0&255,b>>>24&255,b>>>16&255,b>>>8&255,b>>>0&255,w>>>24&255,w>>>16&255,w>>>8&255,w>>>0&255,_>>>24&255,_>>>16&255,_>>>8&255,_>>>0&255,M>>>24&255,M>>>16&255,M>>>8&255,M>>>0&255,A>>>24&255,A>>>16&255,A>>>8&255,A>>>0&255,E>>>24&255,E>>>16&255,E>>>8&255,E>>>0&255]}function x(e,t,r){e=e.length<=64?e:l(e);for(var n=64+t.length+4,i=new Array(n),o=new Array(64),s=[],a=0;a<64;a++){ i[a]=54; }for(a=0;a<e.length;a++){ i[a]^=e[a]; }for(a=0;a<t.length;a++){ i[64+a]=t[a]; }for(a=n-4;a<n;a++){ i[a]=0; }for(a=0;a<64;a++){ o[a]=92; }for(a=0;a<e.length;a++){ o[a]^=e[a]; }function u(){for(var e=n-1;n-4<=e;e--){if(i[e]++,i[e]<=255){ return; }i[e]=0;}}for(;32<=r;){ u(),s=s.concat(l(o.concat(l(i)))),r-=32; }return 0<r&&(u(),s=s.concat(l(o.concat(l(i))).slice(0,r))),s}function P(e,t,r,n,i){var o;for(T(e,16*(2*r-1),i,0,16),o=0;o<2*r;o++){ I(e,16*o,i,16),function(e,t){T(e,0,t,0,16);for(var r=8;0<r;r-=2){ t[4]^=s(t[0]+t[12],7),t[8]^=s(t[4]+t[0],9),t[12]^=s(t[8]+t[4],13),t[0]^=s(t[12]+t[8],18),t[9]^=s(t[5]+t[1],7),t[13]^=s(t[9]+t[5],9),t[1]^=s(t[13]+t[9],13),t[5]^=s(t[1]+t[13],18),t[14]^=s(t[10]+t[6],7),t[2]^=s(t[14]+t[10],9),t[6]^=s(t[2]+t[14],13),t[10]^=s(t[6]+t[2],18),t[3]^=s(t[15]+t[11],7),t[7]^=s(t[3]+t[15],9),t[11]^=s(t[7]+t[3],13),t[15]^=s(t[11]+t[7],18),t[1]^=s(t[0]+t[3],7),t[2]^=s(t[1]+t[0],9),t[3]^=s(t[2]+t[1],13),t[0]^=s(t[3]+t[2],18),t[6]^=s(t[5]+t[4],7),t[7]^=s(t[6]+t[5],9),t[4]^=s(t[7]+t[6],13),t[5]^=s(t[4]+t[7],18),t[11]^=s(t[10]+t[9],7),t[8]^=s(t[11]+t[10],9),t[9]^=s(t[8]+t[11],13),t[10]^=s(t[9]+t[8],18),t[12]^=s(t[15]+t[14],7),t[13]^=s(t[12]+t[15],9),t[14]^=s(t[13]+t[12],13),t[15]^=s(t[14]+t[13],18); }for(r=0;r<16;++r){ e[r]+=t[r]; }}(i,n),T(i,0,e,t+16*o,16); }for(o=0;o<r;o++){ T(e,t+2*o*16,e,16*o,16); }for(o=0;o<r;o++){ T(e,t+16*(2*o+1),e,16*(o+r),16); }}function s(e,t){return e<<t|e>>>32-t}function I(e,t,r,n){for(var i=0;i<n;i++){ r[i]^=e[t+i]; }}function T(e,t,r,n,i){for(;i--;){ r[n++]=e[t++]; }}function n(e){if(e&&"number"==typeof e.length){for(var t=0;t<e.length;t++){if("number"!=typeof e[t]){ return; }var r=parseInt(e[t]);if(r!=e[t]||r<0||256<=r){ return }}return 1}}function R(e,t){var r=parseInt(e);if(e!=r){ throw new Error("invalid "+t); }return r}function e(i,e,o,s,a,u,l){if(!l){ throw new Error("missing callback"); }if(o=R(o,"N"),s=R(s,"r"),a=R(a,"p"),u=R(u,"dkLen"),0===o||0!=(o&o-1)){ throw new Error("N must be power of 2"); }if(O/128/s<o){ throw new Error("N too large"); }if(O/128/a<s){ throw new Error("r too large"); }if(!n(i)){ throw new Error("password must be an array or buffer"); }if(i=Array.prototype.slice.call(i),!n(e)){ throw new Error("salt must be an array or buffer"); }e=Array.prototype.slice.call(e);for(var h=x(i,e,128*a*s),f=new Uint32Array(32*a*s),t=0;t<f.length;t++){var r=4*t;f[t]=(255&h[3+r])<<24|(255&h[2+r])<<16|(255&h[1+r])<<8|(255&h[0+r])<<0;}var c,d,p=new Uint32Array(64*s),y=new Uint32Array(32*s*o),m=32*s,g=new Uint32Array(16),v=new Uint32Array(16),b=a*o*2,w=0,_=null,M=!1,A=0,E=0,S=parseInt(1e3/s),k=void 0!==C?C:setTimeout,N=function(){if(M){ return l(new Error("cancelled"),w/b); }switch(A){case 0:T(f,d=32*E*s,p,0,m),A=1,c=0;case 1:S<(t=o-c)&&(t=S);for(var e=0;e<t;e++){ T(p,0,y,(c+e)*m,m),P(p,m,s,g,v); }if(c+=t,w+=t,(n=parseInt(1e3*w/b))!==_){if(M=l(null,w/b)){ break; }_=n;}if(c<o){ break; }c=0,A=2;case 2:var t;S<(t=o-c)&&(t=S);for(e=0;e<t;e++){var r=p[16*(2*s-1)]&o-1;I(y,r*m,p,m),P(p,m,s,g,v);}if(c+=t,w+=t,(n=parseInt(1e3*w/b))!==_){if(M=l(null,w/b)){ break; }_=n;}if(c<o){ break; }if(T(p,0,f,d,m),++E<a){A=0;break}h=[];for(e=0;e<f.length;e++){ h.push(f[e]>>0&255),h.push(f[e]>>8&255),h.push(f[e]>>16&255),h.push(f[e]>>24&255); }var n=x(i,h,u);return l(null,1,n)}k(N);};N();}var t,O;t=this,O=2147483647,void 0!==i?r.exports=e:t&&(t.scrypt&&(t._scrypt=t.scrypt),t.scrypt=e);}.call(this);}.call(this,e("timers").setImmediate);},{timers:46}],45:[function(e,t,r){!function(y,e,t){!function(){!function(r,n){var t,i,o,s,a,u,l,e;function h(e){return i[t]=f.apply(n,e),t++}function f(e){var t=[].slice.call(arguments,1);return function(){"function"==typeof e?e.apply(n,t):new Function(""+e)();}}function c(e){if(o){ setTimeout(f(c,e),0); }else{var t=i[e];if(t){o=!0;try{t();}finally{d(e),o=!1;}}}}function d(e){delete i[e];}function p(){function e(e){e.source===r&&"string"==typeof e.data&&0===e.data.indexOf(t)&&c(+e.data.slice(t.length));}var t="setImmediate$"+Math.random()+"$";r.addEventListener?r.addEventListener("message",e,!1):r.attachEvent("onmessage",e),a=function(){var e=h(arguments);return r.postMessage(t+e,"*"),e};}r.setImmediate||(t=1,o=!(i={}),s=r.document,e=(e=Object.getPrototypeOf&&Object.getPrototypeOf(r))&&e.setTimeout?e:r,"[object process]"==={}.toString.call(r.process)?a=function(){var e=h(arguments);return y.nextTick(f(c,e)),e}:!function(){if(r.postMessage&&!r.importScripts){var e=!0,t=r.onmessage;return r.onmessage=function(){e=!1;},r.postMessage("","*"),r.onmessage=t,e}}()?a=r.MessageChannel?((l=new MessageChannel).port1.onmessage=function(e){c(e.data);},function(){var e=h(arguments);return l.port2.postMessage(e),e}):s&&"onreadystatechange"in s.createElement("script")?(u=s.documentElement,function(){var e=h(arguments),t=s.createElement("script");return t.onreadystatechange=function(){c(e),t.onreadystatechange=null,u.removeChild(t),t=null;},u.appendChild(t),e}):function(){var e=h(arguments);return setTimeout(f(c,e),0),e}:p(),e.setImmediate=a,e.clearImmediate=d);}("undefined"==typeof self?void 0===e?this:e:self);}.call(this);}.call(this,e("_process"),"undefined"!=typeof commonjsGlobal?commonjsGlobal:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("timers").clearImmediate);},{_process:43,timers:46}],46:[function(e,t,r){!function(e){!function(){t.exports={setImmediate:e.setImmediate};}.call(this);}.call(this,"undefined"!=typeof commonjsGlobal?commonjsGlobal:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});},{}],47:[function(e,i,t){!function(n){!function(){var e,t,r;n.crypto&&crypto.getRandomValues&&(e=new Uint8Array(16),t=function(){return crypto.getRandomValues(e),e}),t||(r=new Array(16),t=function(){for(var e,t=0;t<16;t++){ 0==(3&t)&&(e=4294967296*Math.random()),r[t]=e>>>((3&t)<<3)&255; }return r}),i.exports=t;}.call(this);}.call(this,"undefined"!=typeof commonjsGlobal?commonjsGlobal:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});},{}],48:[function(e,t,r){for(var s=e("./rng"),n=[],o={},i=0;i<256;i++){ n[i]=(i+256).toString(16).substr(1),o[n[i]]=i; }function h(e,t){t=t||0;return n[e[t++]]+n[e[t++]]+n[e[t++]]+n[e[t++]]+"-"+n[e[t++]]+n[e[t++]]+"-"+n[e[t++]]+n[e[t++]]+"-"+n[e[t++]]+n[e[t++]]+"-"+n[e[t++]]+n[e[t++]]+n[e[t++]]+n[e[t++]]+n[e[t++]]+n[e[t++]]}var e=s(),f=[1|e[0],e[1],e[2],e[3],e[4],e[5]],c=16383&(e[6]<<8|e[7]),d=0,p=0;function a(e,t,r){var n=t&&r||0;"string"==typeof e&&(t="binary"==e?new Array(16):null,e=null);var i=(e=e||{}).random||(e.rng||s)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,t){ for(var o=0;o<16;o++){ t[n+o]=i[o]; } }return t||h(i)}e=a;e.v1=function(e,t,r){var n=t&&r||0,i=t||[],o=void 0!==(e=e||{}).clockseq?e.clockseq:c,s=void 0!==e.msecs?e.msecs:(new Date).getTime(),a=void 0!==e.nsecs?e.nsecs:p+1;if((r=s-d+(a-p)/1e4)<0&&void 0===e.clockseq&&(o=o+1&16383),1e4<=(a=(r<0||d<s)&&void 0===e.nsecs?0:a)){ throw new Error("uuid.v1(): Can't create more than 10M uuids/sec"); }d=s,c=o,a=(1e4*(268435455&(s+=122192928e5))+(p=a))%4294967296,i[n++]=a>>>24&255,i[n++]=a>>>16&255,i[n++]=a>>>8&255,i[n++]=255&a,s=s/4294967296*1e4&268435455,i[n++]=s>>>8&255,i[n++]=255&s,i[n++]=s>>>24&15|16,i[n++]=s>>>16&255,i[n++]=o>>>8|128,i[n++]=255&o;for(var u=e.node||f,l=0;l<6;l++){ i[n+l]=u[l]; }return t||h(i)},e.v4=a,e.parse=function(e,t,r){var n=t&&r||0,i=0;for(t=t||[],e.toLowerCase().replace(/[0-9a-f]{2}/g,function(e){i<16&&(t[n+i++]=o[e]);});i<16;){ t[n+i++]=0; }return t},e.unparse=h,t.exports=e;},{"./rng":47}],49:[function(e,t,r){Object.defineProperty(r,"__esModule",{value:!0});try{t.exports.XMLHttpRequest=XMLHttpRequest;}catch(e){console.log("Warning: XMLHttpRequest is not defined"),t.exports.XMLHttpRequest=null;}},{}],50:[function(e,t,r){Object.defineProperty(r,"__esModule",{value:!0});var n=e("../utils/properties"),e=(i.isProvider=function(e){return n.isType(e,"Provider")},i);function i(){n.setType(this,"Provider");}r.Provider=e;},{"../utils/properties":74}],51:[function(e,t,r){var n,i=this&&this.__extends||(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t;}||function(e,t){for(var r in t){ t.hasOwnProperty(r)&&(e[r]=t[r]); }},function(e,t){function r(){this.constructor=e;}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r);}),o=this&&this.__importStar||function(e){if(e&&e.__esModule){ return e; }var t={};if(null!=e){ for(var r in e){ Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]); } }return t.default=e,t};Object.defineProperty(r,"__esModule",{value:!0});var s=e("../utils/address"),a=e("../utils/bignumber"),u=e("../utils/bytes"),l=e("../constants"),h=e("../utils/hash"),f=e("../utils/networks"),c=e("../utils/properties"),d=e("../utils/rlp"),p=e("../utils/transaction"),y=e("../utils/utf8"),m=e("../utils/web"),g=o(e("../errors")),v=e("./abstract-provider");function b(e,t){var r,n={};for(r in e){ try{var i=e[r](t[r]);void 0!==i&&(n[r]=i);}catch(e){throw e.checkKey=r,e.checkValue=t[r],e} }return n}function w(t,r){return function(e){return null==e?r:t(e)}}function _(r){return function(e){if(!Array.isArray(e)){ throw new Error("not an array"); }var t=[];return e.forEach(function(e){t.push(r(e));}),t}}function M(e,t){return "string"==typeof e&&(t||"0x"===e.substring(0,2)||(e="0x"+e),32===u.hexDataLength(e))?e.toLowerCase():(g.throwError("invalid hash",g.INVALID_ARGUMENT,{arg:"hash",value:e}),null)}function A(e){return a.bigNumberify(e).toNumber()}function E(e){if(!u.isHexString(e)){ throw new Error("invalid uint256"); }for(;e.length<66;){ e="0x0"+e.substring(2); }return e}function S(e){if(null==e){ return "latest"; }if("earliest"===e){ return "0x0"; }if("latest"===e||"pending"===e){ return e; }if("number"==typeof e){ return u.hexStripZeros(u.hexlify(e)); }if(u.isHexString(e)){ return u.hexStripZeros(e); }throw new Error("invalid blockTag")}var k={hash:M,blockHash:w(M,null),blockNumber:w(A,null),transactionIndex:w(A,null),confirmations:w(A,null),from:s.getAddress,gasPrice:a.bigNumberify,gasLimit:a.bigNumberify,to:w(s.getAddress,null),value:a.bigNumberify,nonce:A,data:u.hexlify,r:w(E),s:w(E),v:w(A),creates:w(s.getAddress,null),raw:w(u.hexlify)};function N(e){null!=e.gas&&null==e.gasLimit&&(e.gasLimit=e.gas),e.to&&a.bigNumberify(e.to).isZero()&&(e.to="0x0000000000000000000000000000000000000000"),null!=e.input&&null==e.data&&(e.data=e.input),null==e.to&&null==e.creates&&(e.creates=s.getContractAddress(e)),e.raw||e.v&&e.r&&e.s&&(r=[u.stripZeros(u.hexlify(e.nonce)),u.stripZeros(u.hexlify(e.gasPrice)),u.stripZeros(u.hexlify(e.gasLimit)),e.to||"0x",u.stripZeros(u.hexlify(e.value||"0x")),u.hexlify(e.data||"0x"),u.stripZeros(u.hexlify(e.v||"0x")),u.stripZeros(u.hexlify(e.r)),u.stripZeros(u.hexlify(e.s))],e.raw=d.encode(r));var t=b(k,e),r=e.networkId;return null!=e.chainId&&null==r&&null==t.v&&(r=e.chainId),"number"!=typeof(r=u.isHexString(r)?a.bigNumberify(r).toNumber():r)&&null!=t.v&&((r=(t.v-35)/2)<0&&(r=0),r=parseInt(r)),t.networkId=r="number"!=typeof r?0:r,null==t.chainId&&null!=r&&(t.chainId=r),t.blockHash&&"x"===t.blockHash.replace(/0/g,"")&&(t.blockHash=null),t}var x={hash:M,parentHash:M,number:A,timestamp:A,nonce:w(u.hexlify),difficulty:function(e){e=a.bigNumberify(e);try{return e.toNumber()}catch(e){}return null},gasLimit:a.bigNumberify,gasUsed:a.bigNumberify,miner:s.getAddress,extraData:u.hexlify,transactions:w(_(M))},P=c.shallowCopy(x);function I(e,t){return null!=e.author&&null==e.miner&&(e.miner=e.author),b(t?P:x,e)}P.transactions=w(_(N));var T={from:w(s.getAddress),nonce:w(A),gasLimit:w(a.bigNumberify),gasPrice:w(a.bigNumberify),to:w(s.getAddress),value:w(a.bigNumberify),data:w(u.hexlify)};function R(e){return b(T,e)}var O={transactionLogIndex:w(A),transactionIndex:A,blockNumber:A,transactionHash:M,address:s.getAddress,topics:_(M),data:u.hexlify,logIndex:A,blockHash:M};var C={to:w(s.getAddress,null),from:w(s.getAddress,null),contractAddress:w(s.getAddress,null),transactionIndex:A,root:w(M),gasUsed:a.bigNumberify,logsBloom:w(u.hexlify),blockHash:M,transactionHash:M,logs:_(function(e){return b(O,e)}),blockNumber:A,confirmations:w(A,null),cumulativeGasUsed:a.bigNumberify,status:w(A)};function L(e){return Array.isArray(e)?e.forEach(function(e){L(e);}):null!=e&&M(e),e}var B={fromBlock:w(S,void 0),toBlock:w(S,void 0),address:w(s.getAddress,void 0),topics:w(L,void 0)},D={blockHash:w(M,void 0),address:w(s.getAddress,void 0),topics:w(L,void 0)};var U,F,j={blockNumber:w(A),blockHash:w(M),transactionIndex:A,removed:w(function(e){if("boolean"==typeof e){ return e; }if("string"==typeof e){if("true"===e){ return !0; }if("false"===e){ return !1 }}throw new Error("invaid boolean - "+e)}),address:s.getAddress,data:(U=u.hexlify,F="0x",function(e){return e?U(e):F}),topics:_(M),transactionHash:M,logIndex:A};function G(e){return b(j,e)}function H(e){return e.map(function(e){return "string"==typeof e?e:Array.isArray(e)?(e.forEach(function(e){null!==e&&32!==u.hexDataLength(e)&&g.throwError("invalid topic",g.INVALID_ARGUMENT,{argument:"topic",value:e});}),e.join(",")):null===e?"":g.throwError("invalid topic value",g.INVALID_ARGUMENT,{argument:"topic",value:e})}).join("&")}function z(e){if("string"==typeof e){if(20===u.hexDataLength(e)){ return "address:"+s.getAddress(e); }if(e=e.toLowerCase(),32===u.hexDataLength(e)){ return "tx:"+e; }if(-1===e.indexOf(":")){ return e }}else{if(Array.isArray(e)){ return "filter::"+H(e); }if(e&&"object"==typeof e){ return "filter:"+(e.address||"")+":"+H(e.topics||[]) }}throw new Error("invalid event - "+e)}function V(){return (new Date).getTime()}var K,i=(K=v.Provider,i(q,K),q.prototype._doPoll=function(){var u=this;this.getBlockNumber().then(function(s){if(u.polling&&(u._setFastBlockNumber(s),s!==u._lastBlockNumber)){-2===u._emitted.block&&(u._emitted.block=s-1);for(var e=u._emitted.block+1;e<=s;e++){ u.emit("block",e); }u._emitted.block!==s&&(u._emitted.block=s,Object.keys(u._emitted).forEach(function(e){var t;"block"===e||"pending"!==(t=u._emitted[e])&&12<s-t&&delete u._emitted[e];})),-2===u._lastBlockNumber&&(u._lastBlockNumber=s-1);var a={},t={};return u._events.forEach(function(e){t[e.tag]=!0;}),Object.keys(t).forEach(function(e){var t=e.split(":");switch(t[0]){case"tx":var r=t[1];u.getTransactionReceipt(r).then(function(e){return e&&null!=e.blockNumber&&(u._emitted["t:"+r]=e.blockNumber,u.emit(r,e)),null}).catch(function(e){u.emit("error",e);});break;case"address":var n=t[1];u._balances[n]&&(a[n]=u._balances[n]),u.getBalance(n,"latest").then(function(e){var t=u._balances[n];if(!t||!e.eq(t)){ return u._balances[n]=e,u.emit(n,e),null }}).catch(function(e){u.emit("error",e);});break;case"filter":var i=t[2].split(/&/g).map(function(e){var t=e.split(",");return 1===t.length?""===t[0]?null:e:t.map(function(e){return ""===e?null:e})}),o={address:t[1],fromBlock:u._lastBlockNumber+1,toBlock:s,topics:i};o.address||delete o.address,u.getLogs(o).then(function(e){if(0!==e.length){ return e.forEach(function(e){u._emitted["b:"+e.blockHash]=e.blockNumber,u._emitted["t:"+e.transactionHash]=e.blockNumber,u.emit(o,e);}),null }}).catch(function(e){u.emit("error",e);});}}),u._lastBlockNumber=s,u._balances=a,null}}).catch(function(e){}),this.doPoll();},q.prototype.resetEventsBlock=function(e){this._lastBlockNumber=e-1,this.polling&&this._doPoll();},Object.defineProperty(q.prototype,"network",{get:function(){return this._network},enumerable:!0,configurable:!0}),q.prototype.getNetwork=function(){return this.ready},Object.defineProperty(q.prototype,"blockNumber",{get:function(){return this._fastBlockNumber},enumerable:!0,configurable:!0}),Object.defineProperty(q.prototype,"polling",{get:function(){return null!=this._poller},set:function(e){var t=this;setTimeout(function(){e&&!t._poller?(t._poller=setInterval(t._doPoll.bind(t),t.pollingInterval),t._doPoll()):!e&&t._poller&&(clearInterval(t._poller),t._poller=null);},0);},enumerable:!0,configurable:!0}),Object.defineProperty(q.prototype,"pollingInterval",{get:function(){return this._pollingInterval},set:function(e){var t=this;if("number"!=typeof e||e<=0||parseInt(String(e))!=e){ throw new Error("invalid polling interval"); }this._pollingInterval=e,this._poller&&(clearInterval(this._poller),this._poller=setInterval(function(){t._doPoll();},this._pollingInterval));},enumerable:!0,configurable:!0}),q.prototype._getFastBlockNumber=function(){var t=this,e=V();return e-this._fastQueryDate>2*this._pollingInterval&&(this._fastQueryDate=e,this._fastBlockNumberPromise=this.getBlockNumber().then(function(e){return (null==t._fastBlockNumber||e>t._fastBlockNumber)&&(t._fastBlockNumber=e),t._fastBlockNumber})),this._fastBlockNumberPromise},q.prototype._setFastBlockNumber=function(e){null!=this._fastBlockNumber&&e<this._fastBlockNumber||(this._fastQueryDate=V(),(null==this._fastBlockNumber||e>this._fastBlockNumber)&&(this._fastBlockNumber=e,this._fastBlockNumberPromise=Promise.resolve(e)));},q.prototype.waitForTransaction=function(n,i){var o=this;return null==i&&(i=1),this.getTransactionReceipt(n).then(function(e){return 0===i||e&&e.confirmations>=i?e:new Promise(function(t){var r=function(e){e.confirmations<i||(o.removeListener(n,r),t(e));};o.on(n,r);})})},q.prototype.getBlockNumber=function(){var r=this;return this.ready.then(function(){return r.perform("getBlockNumber",{}).then(function(e){var t=parseInt(e);if(t!=e){ throw new Error("invalid response - getBlockNumber"); }return r._setFastBlockNumber(t),t})})},q.prototype.getGasPrice=function(){var e=this;return this.ready.then(function(){return e.perform("getGasPrice",{}).then(function(e){return a.bigNumberify(e)})})},q.prototype.getBalance=function(e,t){var n=this;return this.ready.then(function(){return c.resolveProperties({addressOrName:e,blockTag:t}).then(function(e){var t=e.addressOrName,r=e.blockTag;return n._getAddress(t).then(function(e){e={address:e,blockTag:S(r)};return n.perform("getBalance",e).then(function(e){return a.bigNumberify(e)})})})})},q.prototype.getTransactionCount=function(e,t){var n=this;return this.ready.then(function(){return c.resolveProperties({addressOrName:e,blockTag:t}).then(function(e){var t=e.addressOrName,r=e.blockTag;return n._getAddress(t).then(function(e){e={address:e,blockTag:S(r)};return n.perform("getTransactionCount",e).then(function(e){return a.bigNumberify(e).toNumber()})})})})},q.prototype.getCode=function(e,t){var n=this;return this.ready.then(function(){return c.resolveProperties({addressOrName:e,blockTag:t}).then(function(e){var t=e.addressOrName,r=e.blockTag;return n._getAddress(t).then(function(e){e={address:e,blockTag:S(r)};return n.perform("getCode",e).then(function(e){return u.hexlify(e)})})})})},q.prototype.getStorageAt=function(e,t,r){var i=this;return this.ready.then(function(){return c.resolveProperties({addressOrName:e,position:t,blockTag:r}).then(function(e){var t=e.addressOrName,r=e.position,n=e.blockTag;return i._getAddress(t).then(function(e){e={address:e,blockTag:S(n),position:u.hexStripZeros(u.hexlify(r))};return i.perform("getStorageAt",e).then(function(e){return u.hexlify(e)})})})})},q.prototype.sendTransaction=function(e){var r=this;return this.ready.then(function(){return c.resolveProperties({signedTransaction:e}).then(function(e){var t=e.signedTransaction,e={signedTransaction:u.hexlify(t)};return r.perform("sendTransaction",e).then(function(e){return r._wrapTransaction(p.parse(t),e)},function(e){throw e.transaction=p.parse(t),e.transaction.hash&&(e.transactionHash=e.transaction.hash),e})})})},q.prototype._wrapTransaction=function(r,e){var n=this;if(null!=e&&32!==u.hexDataLength(e)){ throw new Error("invalid response - sendTransaction"); }var t=r;return null!=e&&r.hash!==e&&g.throwError("Transaction hash mismatch from Provider.sendTransaction.",g.UNKNOWN_ERROR,{expectedHash:r.hash,returnedHash:e}),t.wait=function(t){return 0!==t&&(n._emitted["t:"+r.hash]="pending"),n.waitForTransaction(r.hash,t).then(function(e){return null==e&&0===t?null:(n._emitted["t:"+r.hash]=e.blockNumber,0===e.status&&g.throwError("transaction failed",g.CALL_EXCEPTION,{transactionHash:r.hash,transaction:r}),e)})},t},q.prototype.call=function(e,t){var r=this,n=c.shallowCopy(e);return this.ready.then(function(){return c.resolveProperties({blockTag:t,tx:n}).then(function(e){var t=e.blockTag,e=e.tx;return r._resolveNames(e,["to","from"]).then(function(e){e={blockTag:S(t),transaction:R(e)};return r.perform("call",e).then(function(e){return u.hexlify(e)})})})})},q.prototype.estimateGas=function(e){var t=this,r={to:e.to,from:e.from,data:e.data,gasPrice:e.gasPrice,value:e.value};return this.ready.then(function(){return c.resolveProperties(r).then(function(e){return t._resolveNames(e,["to","from"]).then(function(e){e={transaction:R(e)};return t.perform("estimateGas",e).then(function(e){return a.bigNumberify(e)})})})})},q.prototype.getBlock=function(e,i){var o=this;return this.ready.then(function(){return c.resolveProperties({blockHashOrBlockTag:e}).then(function(e){e=e.blockHashOrBlockTag;try{var t=u.hexlify(e);if(32===u.hexDataLength(t)){ return m.poll(function(){return o.perform("getBlock",{blockHash:t,includeTransactions:!!i}).then(function(e){return null==e?null==o._emitted["b:"+t]?null:void 0:I(e,i)})},{onceBlock:o}) }}catch(e){}try{var r=-128,n=S(e);return u.isHexString(n)&&(r=parseInt(n.substring(2),16)),m.poll(function(){return o.perform("getBlock",{blockTag:n,includeTransactions:!!i}).then(function(e){return null==e?r<=o._emitted.block?void 0:null:I(e,i)})},{onceBlock:o})}catch(e){}throw new Error("invalid block hash or block tag")})})},q.prototype.getTransaction=function(e){var n=this;return this.ready.then(function(){return c.resolveProperties({transactionHash:e}).then(function(e){var r=e.transactionHash,t={transactionHash:M(r,!0)};return m.poll(function(){return n.perform("getTransaction",t).then(function(e){if(null==e){ return null==n._emitted["t:"+r]?null:void 0; }var t=q.checkTransactionResponse(e);if(null==t.blockNumber){ t.confirmations=0; }else if(null==t.confirmations){ return n._getFastBlockNumber().then(function(e){e=e-t.blockNumber+1;return t.confirmations=e=e<=0?1:e,n._wrapTransaction(t)}); }return n._wrapTransaction(t)})},{onceBlock:n})})})},q.prototype.getTransactionReceipt=function(e){var i=this;return this.ready.then(function(){return c.resolveProperties({transactionHash:e}).then(function(e){var n=e.transactionHash,t={transactionHash:M(n,!0)};return m.poll(function(){return i.perform("getTransactionReceipt",t).then(function(e){if(null==e){ return null==i._emitted["t:"+n]?null:void 0; }if(null!=e.blockHash){var t,r=((e=b(C,t=e)).logs.forEach(function(e,t){null==e.transactionLogIndex&&(e.transactionLogIndex=t);}),null!=t.status&&(e.byzantium=!0),e);if(null==r.blockNumber){ r.confirmations=0; }else if(null==r.confirmations){ return i._getFastBlockNumber().then(function(e){e=e-r.blockNumber+1;return r.confirmations=e=e<=0?1:e,r}); }return r}})},{onceBlock:i})})})},q.prototype.getLogs=function(e){var t=this;return this.ready.then(function(){return c.resolveProperties(e).then(function(e){return t._resolveNames(e,["address"]).then(function(e){e={filter:(e=e)&&e.blockHash?b(D,e):b(B,e)};return t.perform("getLogs",e).then(function(e){return _(G)(e)})})})})},q.prototype.getEtherPrice=function(){var e=this;return this.ready.then(function(){return e.perform("getEtherPrice",{}).then(function(e){return e})})},q.prototype._getAddress=function(t){return this.resolveName(t).then(function(e){return null==e&&g.throwError("ENS name not configured",g.UNSUPPORTED_OPERATION,{operation:"resolveName("+JSON.stringify(t)+")"}),e})},q.prototype._resolveNames=function(e,t){var r=[],n=c.shallowCopy(e);return t.forEach(function(t){null!=n[t]&&r.push(this._getAddress(n[t]).then(function(e){n[t]=e;}));},this),Promise.all(r).then(function(){return n})},q.prototype._getResolver=function(r){var n=this;return this.getNetwork().then(function(e){e.ensAddress||g.throwError("network does not support ENS",g.UNSUPPORTED_OPERATION,{operation:"ENS",network:e.name});var t="0x0178b8bf"+h.namehash(r).substring(2),t={to:e.ensAddress,data:t};return n.call(t).then(function(e){if(32!==u.hexDataLength(e)){ return null; }e=s.getAddress(u.hexDataSlice(e,12));return e===l.AddressZero?null:e})})},q.prototype.resolveName=function(t){var r=this;if(t instanceof Promise){ return t.then(function(e){return r.resolveName(e)}); }try{return Promise.resolve(s.getAddress(t))}catch(e){if(u.isHexString(t)){ throw e }}var n=this,i=h.namehash(t);return this._getResolver(t).then(function(e){if(null==e){ return null; }var t="0x3b3b57de"+i.substring(2);return n.call({to:e,data:t})}).then(function(e){if(32!==u.hexDataLength(e)){ return null; }e=s.getAddress(u.hexDataSlice(e,12));return e===l.AddressZero?null:e})},q.prototype.lookupAddress=function(n){var t=this;if(n instanceof Promise){ return n.then(function(e){return t.lookupAddress(e)}); }var e=(n=s.getAddress(n)).substring(2)+".addr.reverse",r=h.namehash(e),i=this;return this._getResolver(e).then(function(e){if(!e){ return null; }var t="0x691f3431"+r.substring(2);return i.call({to:e,data:t})}).then(function(e){if(null==e){ return null; }if((e=e.substring(2)).length<64){ return null; }if((e=e.substring(64)).length<64){ return null; }var t=a.bigNumberify("0x"+e.substring(0,64)).toNumber();if(2*t>(e=e.substring(64)).length){ return null; }var r=y.toUtf8String("0x"+e.substring(0,2*t));return i.resolveName(r).then(function(e){return e!=n?null:r})})},q.checkTransactionResponse=N,q.prototype.doPoll=function(){},q.prototype.perform=function(e,t){return g.throwError(e+" not implemented",g.NOT_IMPLEMENTED,{operation:e}),null},q.prototype._startPending=function(){g.warn("WARNING: this provider does not support pending events");},q.prototype._stopPending=function(){},q.prototype._addEventListener=function(e,t,r){this._events.push({tag:z(e),listener:t,once:r}),"pending"===e&&this._startPending(),this.polling=!0;},q.prototype.on=function(e,t){return this._addEventListener(e,t,!1),this},q.prototype.once=function(e,t){return this._addEventListener(e,t,!0),this},q.prototype.addEventListener=function(e,t){return this.on(e,t)},q.prototype.emit=function(e){
  var arguments$1 = arguments;
  for(var t=this,r=[],n=1;n<arguments.length;n++){ r[n-1]=arguments$1[n]; }var i=!1,o=z(e);return this._events=this._events.filter(function(e){return e.tag!==o||(setTimeout(function(){e.listener.apply(t,r);},0),i=!0,!e.once)}),0===this.listenerCount()&&(this.polling=!1),i},q.prototype.listenerCount=function(e){if(!e){ return this._events.length; }var t=z(e);return this._events.filter(function(e){return e.tag===t}).length},q.prototype.listeners=function(e){var t=z(e);return this._events.filter(function(e){return e.tag===t}).map(function(e){return e.listener})},q.prototype.removeAllListeners=function(e){var t;return null==e?(this._events=[],this._stopPending()):(t=z(e),this._events=this._events.filter(function(e){return e.tag!==t}),"pending"===e&&this._stopPending()),0===this._events.length&&(this.polling=!1),this},q.prototype.removeListener=function(e,t){var r=!1,n=z(e);return this._events=this._events.filter(function(e){return e.tag!==n||e.listener!=t||(!!r||!(r=!0))}),"pending"===e&&0===this.listenerCount("pending")&&this._stopPending(),0===this.listenerCount()&&(this.polling=!1),this},q);function q(e){var t,r=K.call(this)||this;return g.checkNew(r,v.Provider),e instanceof Promise?(c.defineReadOnly(r,"ready",e.then(function(e){return c.defineReadOnly(r,"_network",e),e})),r.ready.catch(function(e){})):(t=f.getNetwork(null==e?"homestead":e))?(c.defineReadOnly(r,"_network",t),c.defineReadOnly(r,"ready",Promise.resolve(r._network))):g.throwError("invalid network",g.INVALID_ARGUMENT,{arg:"network",value:e}),r._lastBlockNumber=-2,r._balances={},r._events=[],r._pollingInterval=4e3,r._emitted={block:-2},r._fastQueryDate=0,r}r.BaseProvider=i,c.defineReadOnly(v.Provider,"inherits",c.inheritable(v.Provider));},{"../constants":3,"../errors":5,"../utils/address":60,"../utils/bignumber":63,"../utils/bytes":64,"../utils/hash":65,"../utils/networks":72,"../utils/properties":74,"../utils/rlp":76,"../utils/transaction":83,"../utils/utf8":85,"../utils/web":86,"./abstract-provider":50}],52:[function(e,t,r){var n,i=this&&this.__extends||(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t;}||function(e,t){for(var r in t){ t.hasOwnProperty(r)&&(e[r]=t[r]); }},function(e,t){function r(){this.constructor=e;}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r);}),o=this&&this.__importStar||function(e){if(e&&e.__esModule){ return e; }var t={};if(null!=e){ for(var r in e){ Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]); } }return t.default=e,t};Object.defineProperty(r,"__esModule",{value:!0});var s=e("./base-provider"),a=e("../utils/bytes"),u=e("../utils/properties"),l=e("../utils/web"),h=o(e("../errors"));function f(e){var t,r,n=[];for(t in e){ null!=e[t]&&(r=a.hexlify(e[t]),{gasLimit:!0,gasPrice:!0,nonce:!0,value:!0}[t]&&(r=a.hexStripZeros(r)),n.push(t+"="+r)); }return n.join("&")}function c(e){if(0==e.status&&("No records found"===e.message||"No transactions found"===e.message)){ return e.result; }if(1==e.status&&"OK"==e.message){ return e.result; }var t=new Error("invalid response");throw t.result=JSON.stringify(e),t}function d(e){if("2.0"!=e.jsonrpc){ throw(t=new Error("invalid response")).result=JSON.stringify(e),t; }if(e.error){var t=new Error(e.error.message||"unknown error");throw e.error.code&&(t.code=e.error.code),e.error.data&&(t.data=e.error.data),t}return e.result}function p(e){if("pending"===e){ throw new Error("pending not supported"); }return "latest"===e?e:parseInt(e.substring(2),16)}var y,m="8FG3JMZ9USS4NTA6YKEKHINU56SEPPVBJR",i=(y=s.BaseProvider,i(g,y),g.prototype.perform=function(e,t){var r=this,n=this.baseUrl,i="";this.apiKey&&(i+="&apikey="+this.apiKey);function o(t,e){return l.fetchJson(t,null,e||d).then(function(e){return r.emit("debug",{action:"perform",request:t,response:e,provider:r}),e})}var s;switch(e){case"getBlockNumber":return o(n+="/api?module=proxy&action=eth_blockNumber"+i);case"getGasPrice":return o(n+="/api?module=proxy&action=eth_gasPrice"+i);case"getBalance":return n+="/api?module=account&action=balance&address="+t.address,o(n+="&tag="+t.blockTag+i,c);case"getTransactionCount":return n+="/api?module=proxy&action=eth_getTransactionCount&address="+t.address,o(n+="&tag="+t.blockTag+i);case"getCode":return n+="/api?module=proxy&action=eth_getCode&address="+t.address,o(n+="&tag="+t.blockTag+i,d);case"getStorageAt":return n+="/api?module=proxy&action=eth_getStorageAt&address="+t.address,n+="&position="+t.position,o(n+="&tag="+t.blockTag+i,d);case"sendTransaction":return n+="/api?module=proxy&action=eth_sendRawTransaction&hex="+t.signedTransaction,o(n+=i).catch(function(e){throw e.responseText&&(0<=e.responseText.toLowerCase().indexOf("insufficient funds")&&h.throwError("insufficient funds",h.INSUFFICIENT_FUNDS,{}),0<=e.responseText.indexOf("same hash was already imported")&&h.throwError("nonce has already been used",h.NONCE_EXPIRED,{}),0<=e.responseText.indexOf("another transaction with same nonce")&&h.throwError("replacement fee too low",h.REPLACEMENT_UNDERPRICED,{})),e});case"getBlock":return t.blockTag?(n+="/api?module=proxy&action=eth_getBlockByNumber&tag="+t.blockTag,t.includeTransactions?n+="&boolean=true":n+="&boolean=false",o(n+=i)):Promise.reject(new Error("getBlock by blockHash not implemeneted"));case"getTransaction":return n+="/api?module=proxy&action=eth_getTransactionByHash&txhash="+t.transactionHash,o(n+=i);case"getTransactionReceipt":return n+="/api?module=proxy&action=eth_getTransactionReceipt&txhash="+t.transactionHash,o(n+=i);case"call":return (n+="/api?module=proxy&action=eth_call"+(s=(s=f(t.transaction))&&"&"+s),"latest"!==t.blockTag)?Promise.reject(new Error("EtherscanProvider does not support blockTag for call")):o(n+=i);case"estimateGas":return n+="/api?module=proxy&action=eth_estimateGas&"+(s=(s=f(t.transaction))&&"&"+s),o(n+=i);case"getLogs":n+="/api?module=logs&action=getLogs";try{if(t.filter.fromBlock&&(n+="&fromBlock="+p(t.filter.fromBlock)),t.filter.toBlock&&(n+="&toBlock="+p(t.filter.toBlock)),t.filter.blockHash){ try{h.throwError("Etherscan does not support blockHash filters",h.UNSUPPORTED_OPERATION,{operation:"getLogs(blockHash)"});}catch(e){return Promise.reject(e)} }if(t.filter.address&&(n+="&address="+t.filter.address),t.filter.topics&&0<t.filter.topics.length){if(1<t.filter.topics.length){ throw new Error("unsupported topic format"); }var a=t.filter.topics[0];if("string"!=typeof a||66!==a.length){ throw new Error("unsupported topic0 format"); }n+="&topic0="+a;}}catch(e){return Promise.reject(e)}var u=this;return o(n+=i,c).then(function(e){var r={},n=Promise.resolve();return e.forEach(function(t){n=n.then(function(){return null!=t.blockHash?null:(t.blockHash=r[t.transactionHash],null==t.blockHash?u.getTransaction(t.transactionHash).then(function(e){return r[t.transactionHash]=e.blockHash,t.blockHash=e.blockHash,null}):null)});}),n.then(function(){return e})});case"getEtherPrice":return "homestead"!==this.network.name?Promise.resolve(0):(n+="/api?module=stats&action=ethprice",o(n+=i,c).then(function(e){return parseFloat(e.ethusd)}))}return y.prototype.perform.call(this,e,t)},g.prototype.getHistory=function(e,t,r){var n=this,i=this.baseUrl,o="";return this.apiKey&&(o+="&apikey="+this.apiKey),null==t&&(t=0),null==r&&(r=99999999),this.resolveName(e).then(function(e){return i+="/api?module=account&action=txlist&address="+e,i+="&startblock="+t,i+="&endblock="+r,i+="&sort=asc"+o,l.fetchJson(i,null,c).then(function(e){n.emit("debug",{action:"getHistory",request:i,response:e,provider:n});var r=[];return e.forEach(function(t){["contractAddress","to"].forEach(function(e){""==t[e]&&delete t[e];}),null==t.creates&&null!=t.contractAddress&&(t.creates=t.contractAddress);var e=s.BaseProvider.checkTransactionResponse(t);t.timeStamp&&(e.timestamp=parseInt(t.timeStamp)),r.push(e);}),r})})},g);function g(e,t){var r=y.call(this,e)||this;h.checkNew(r,g);var e="invalid",n=null;switch(e=r.network?r.network.name:e){case"homestead":n="https://api.etherscan.io";break;case"ropsten":n="https://api-ropsten.etherscan.io";break;case"rinkeby":n="https://api-rinkeby.etherscan.io";break;case"kovan":n="https://api-kovan.etherscan.io";break;case"goerli":n="https://api-goerli.etherscan.io";break;default:throw new Error("unsupported network")}return u.defineReadOnly(r,"baseUrl",n),u.defineReadOnly(r,"apiKey",t||m),r}r.EtherscanProvider=i;},{"../errors":5,"../utils/bytes":64,"../utils/properties":74,"../utils/web":86,"./base-provider":51}],53:[function(e,t,r){var n,i=this&&this.__extends||(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t;}||function(e,t){for(var r in t){ t.hasOwnProperty(r)&&(e[r]=t[r]); }},function(e,t){function r(){this.constructor=e;}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r);}),o=this&&this.__importStar||function(e){if(e&&e.__esModule){ return e; }var t={};if(null!=e){ for(var r in e){ Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]); } }return t.default=e,t};Object.defineProperty(r,"__esModule",{value:!0});var s=e("./base-provider"),a=o(e("../errors"));function u(t){var r=!0,n=null;return t.forEach(function(e){null!=e?null!=n?n.name===e.name&&n.chainId===e.chainId&&(n.ensAddress===e.ensAddress||null==n.ensAddress&&null==e.ensAddress)||a.throwError("provider mismatch",a.INVALID_ARGUMENT,{arg:"networks",value:t}):n=e:r=!1;}),r}var l,i=(l=s.BaseProvider,i(h,l),Object.defineProperty(h.prototype,"providers",{get:function(){return this._providers.slice(0)},enumerable:!0,configurable:!0}),h.prototype.perform=function(i,o){var s=this.providers;return new Promise(function(r,e){var n=null;!function t(){s.length?s.shift().perform(i,o).then(function(e){return r(e)}).catch(function(e){n=n||e,setTimeout(t,0);}):e(n);}();})},h);function h(e){var t,r=this;if(0===e.length){ throw new Error("no providers"); }return r=u(e.map(function(e){return e.network}))?l.call(this,e[0].network)||this:(t=Promise.all(e.map(function(e){return e.getNetwork()})).then(function(e){return u(e)||a.throwError("getNetwork returned null",a.UNKNOWN_ERROR,{}),e[0]}),l.call(this,t)||this),a.checkNew(r,h),r._providers=e.slice(0),r}r.FallbackProvider=i;},{"../errors":5,"./base-provider":51}],54:[function(e,t,r){Object.defineProperty(r,"__esModule",{value:!0});var n=e("./abstract-provider");r.Provider=n.Provider;n=e("./base-provider");r.BaseProvider=n.BaseProvider;n=e("./etherscan-provider");r.EtherscanProvider=n.EtherscanProvider;n=e("./fallback-provider");r.FallbackProvider=n.FallbackProvider;n=e("./ipc-provider");r.IpcProvider=n.IpcProvider;n=e("./infura-provider");r.InfuraProvider=n.InfuraProvider;n=e("./json-rpc-provider");r.JsonRpcProvider=n.JsonRpcProvider,r.JsonRpcSigner=n.JsonRpcSigner;e=e("./web3-provider");r.Web3Provider=e.Web3Provider;},{"./abstract-provider":50,"./base-provider":51,"./etherscan-provider":52,"./fallback-provider":53,"./infura-provider":55,"./ipc-provider":56,"./json-rpc-provider":57,"./web3-provider":58}],55:[function(e,t,r){var n,i=this&&this.__extends||(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t;}||function(e,t){for(var r in t){ t.hasOwnProperty(r)&&(e[r]=t[r]); }},function(e,t){function r(){this.constructor=e;}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r);}),o=this&&this.__importStar||function(e){if(e&&e.__esModule){ return e; }var t={};if(null!=e){ for(var r in e){ Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]); } }return t.default=e,t};Object.defineProperty(r,"__esModule",{value:!0});var s,a=e("./json-rpc-provider"),u=e("../utils/bytes"),l=e("../utils/networks"),h=e("../utils/properties"),f=o(e("../errors")),c="7d0d81d0919f4f05b9ab6634be01ee73",i=(s=a.JsonRpcProvider,i(d,s),d.prototype._startPending=function(){f.warn("WARNING: INFURA does not support pending filters");},d.prototype.getSigner=function(e){return f.throwError("INFURA does not support signing",f.UNSUPPORTED_OPERATION,{operation:"getSigner"})},d.prototype.listAccounts=function(){return Promise.resolve([])},d);function d(e,t){var r=this,n=l.getNetwork(null==e?"homestead":e);null==t&&(t=c);var i=null;switch(n.name){case"homestead":i="mainnet.infura.io";break;case"ropsten":i="ropsten.infura.io";break;case"rinkeby":i="rinkeby.infura.io";break;case"goerli":i="goerli.infura.io";break;case"kovan":i="kovan.infura.io";break;default:f.throwError("unsupported network",f.INVALID_ARGUMENT,{argument:"network",value:e});}return u.isHexString("0x"+t,16)?(r=s.call(this,"https://"+i+"/v3/"+t,n)||this,h.defineReadOnly(r,"apiAccessToken",null),h.defineReadOnly(r,"projectId",t)):(f.warn("The legacy INFURA apiAccesToken API is deprecated; please upgrade to a Project ID instead (see INFURA dshboard; https://infura.io)"),r=s.call(this,"https://"+i+"/"+t,n)||this,h.defineReadOnly(r,"apiAccessToken",t),h.defineReadOnly(r,"projectId",null)),f.checkNew(r,d),r}r.InfuraProvider=i;},{"../errors":5,"../utils/bytes":64,"../utils/networks":72,"../utils/properties":74,"./json-rpc-provider":57}],56:[function(e,t,r){Object.defineProperty(r,"__esModule",{value:!0});},{}],57:[function(e,t,r){var n,i=this&&this.__extends||(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t;}||function(e,t){for(var r in t){ t.hasOwnProperty(r)&&(e[r]=t[r]); }},function(e,t){function r(){this.constructor=e;}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r);}),o=this&&this.__importStar||function(e){if(e&&e.__esModule){ return e; }var t={};if(null!=e){ for(var r in e){ Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]); } }return t.default=e,t};Object.defineProperty(r,"__esModule",{value:!0});var s=e("./base-provider"),a=e("../abstract-signer"),u=o(e("../errors")),l=e("../utils/address"),h=e("../utils/bytes"),f=e("../utils/networks"),c=e("../utils/properties"),d=e("../utils/utf8"),p=e("../utils/web");function y(e){if(e.error){var t=new Error(e.error.message);throw t.code=e.error.code,t.data=e.error.data,t}return e.result}function m(e){return e&&e.toLowerCase()}var g,v={},b=42,w=(g=a.Signer,i(_,g),_.prototype.getAddress=function(){var t=this;return this._address?Promise.resolve(this._address):this.provider.send("eth_accounts",[]).then(function(e){return e.length<=t._index&&u.throwError("unknown account #"+t._index,u.UNSUPPORTED_OPERATION,{operation:"getAddress"}),t._address=l.getAddress(e[t._index]),t._address})},_.prototype.getBalance=function(e){return this.provider.getBalance(this.getAddress(),e)},_.prototype.getTransactionCount=function(e){return this.provider.getTransactionCount(this.getAddress(),e)},_.prototype.sendUncheckedTransaction=function(e){var n=this;e=c.shallowCopy(e);var t,r=this.getAddress().then(function(e){return e=e&&e.toLowerCase()});return null==e.gasLimit&&((t=c.shallowCopy(e)).from=r,e.gasLimit=this.provider.estimateGas(t)),Promise.all([c.resolveProperties(e),r]).then(function(e){var t=e[0],r=E.hexlifyTransaction(t);return r.from=e[1],n.provider.send("eth_sendTransaction",[r]).then(function(e){return e},function(e){throw e.responseText&&(0<=e.responseText.indexOf("insufficient funds")&&u.throwError("insufficient funds",u.INSUFFICIENT_FUNDS,{transaction:t}),0<=e.responseText.indexOf("nonce too low")&&u.throwError("nonce has already been used",u.NONCE_EXPIRED,{transaction:t}),0<=e.responseText.indexOf("replacement transaction underpriced")&&u.throwError("replacement fee too low",u.REPLACEMENT_UNDERPRICED,{transaction:t})),e})})},_.prototype.sendTransaction=function(e){var r=this;return this.sendUncheckedTransaction(e).then(function(t){return p.poll(function(){return r.provider.getTransaction(t).then(function(e){if(null!==e){ return r.provider._wrapTransaction(e,t) }})},{fastRetry:250,onceBlock:r.provider}).catch(function(e){throw e.transactionHash=t,e})})},_.prototype.signMessage=function(e){var t=this,r="string"==typeof e?d.toUtf8Bytes(e):e;return this.getAddress().then(function(e){return t.provider.send("eth_sign",[e.toLowerCase(),h.hexlify(r)])})},_.prototype.unlock=function(t){var r=this.provider;return this.getAddress().then(function(e){return r.send("personal_unlockAccount",[e.toLowerCase(),t,null])})},_);function _(e,t,r){var n=g.call(this)||this;if(u.checkNew(n,_),e!==v){ throw new Error("do not call the JsonRpcSigner constructor directly; use provider.getSigner"); }return c.defineReadOnly(n,"provider",t),r?"string"==typeof r?c.defineReadOnly(n,"_address",l.getAddress(r)):"number"==typeof r?c.defineReadOnly(n,"_index",r):u.throwError("invalid address or index",u.INVALID_ARGUMENT,{argument:"addressOrIndex",value:r}):c.defineReadOnly(n,"_index",0),n}r.JsonRpcSigner=w;var M,A={chainId:!0,data:!0,gasLimit:!0,gasPrice:!0,nonce:!0,to:!0,value:!0},E=(M=s.BaseProvider,i(S,M),S.prototype.getSigner=function(e){return new w(v,this,e)},S.prototype.listAccounts=function(){return this.send("eth_accounts",[]).then(function(e){return e.map(function(e){return l.getAddress(e)})})},S.prototype.send=function(e,t){var r=this,n={method:e,params:t,id:b++,jsonrpc:"2.0"};return p.fetchJson(this.connection,JSON.stringify(n),y).then(function(e){return r.emit("debug",{action:"send",request:n,response:e,provider:r}),e})},S.prototype.perform=function(e,t){switch(e){case"getBlockNumber":return this.send("eth_blockNumber",[]);case"getGasPrice":return this.send("eth_gasPrice",[]);case"getBalance":return this.send("eth_getBalance",[m(t.address),t.blockTag]);case"getTransactionCount":return this.send("eth_getTransactionCount",[m(t.address),t.blockTag]);case"getCode":return this.send("eth_getCode",[m(t.address),t.blockTag]);case"getStorageAt":return this.send("eth_getStorageAt",[m(t.address),t.position,t.blockTag]);case"sendTransaction":return this.send("eth_sendRawTransaction",[t.signedTransaction]).catch(function(e){throw e.responseText&&(0<e.responseText.indexOf("insufficient funds")&&u.throwError("insufficient funds",u.INSUFFICIENT_FUNDS,{}),0<e.responseText.indexOf("nonce too low")&&u.throwError("nonce has already been used",u.NONCE_EXPIRED,{}),0<e.responseText.indexOf("replacement transaction underpriced")&&u.throwError("replacement fee too low",u.REPLACEMENT_UNDERPRICED,{})),e});case"getBlock":return t.blockTag?this.send("eth_getBlockByNumber",[t.blockTag,!!t.includeTransactions]):t.blockHash?this.send("eth_getBlockByHash",[t.blockHash,!!t.includeTransactions]):Promise.reject(new Error("invalid block tag or block hash"));case"getTransaction":return this.send("eth_getTransactionByHash",[t.transactionHash]);case"getTransactionReceipt":return this.send("eth_getTransactionReceipt",[t.transactionHash]);case"call":return this.send("eth_call",[S.hexlifyTransaction(t.transaction,{from:!0}),t.blockTag]);case"estimateGas":return this.send("eth_estimateGas",[S.hexlifyTransaction(t.transaction,{from:!0})]);case"getLogs":return t.filter&&null!=t.filter.address&&(t.filter.address=m(t.filter.address)),this.send("eth_getLogs",[t.filter])}return u.throwError(e+" not implemented",u.NOT_IMPLEMENTED,{operation:e}),null},S.prototype._startPending=function(){var r,n;null==this._pendingFilter&&(n=(r=this).send("eth_newPendingTransactionFilter",[]),(this._pendingFilter=n).then(function(t){return function e(){r.send("eth_getFilterChanges",[t]).then(function(e){if(r._pendingFilter!=n){ return null; }var t=Promise.resolve();return e.forEach(function(e){r._emitted["t:"+e.toLowerCase()]="pending",t=t.then(function(){return r.getTransaction(e).then(function(e){return r.emit("pending",e),null})});}),t.then(function(){return t=1e3,new Promise(function(e){setTimeout(function(){e();},t);});var t;})}).then(function(){return r._pendingFilter==n?(setTimeout(function(){e();},0),null):void r.send("eth_uninstallFilter",[t])}).catch(function(e){});}(),t}).catch(function(e){}));},S.prototype._stopPending=function(){this._pendingFilter=null;},S.hexlifyTransaction=function(r,e){var t=c.shallowCopy(A);if(e){ for(var n in e){ e[n]&&(t[n]=!0); } }c.checkProperties(r,t);var i={};return ["gasLimit","gasPrice","nonce","value"].forEach(function(e){var t;null!=r[e]&&(t=h.hexStripZeros(h.hexlify(r[e])),i[e="gasLimit"===e?"gas":e]=t);}),["from","to","data"].forEach(function(e){null!=r[e]&&(i[e]=h.hexlify(r[e]));}),i},S);function S(e,t){var n=this;return "string"==typeof e&&null===t&&f.getNetwork(e)&&(t=e,e=null),n=t?M.call(this,t)||this:(t=new Promise(function(t,r){setTimeout(function(){n.send("net_version",[]).then(function(e){return t(f.getNetwork(parseInt(e)))}).catch(function(e){r(e);});});}),M.call(this,t)||this),u.checkNew(n,S),n.connection="string"==typeof(e=e||"http://localhost:8545")?{url:e}:e,n}r.JsonRpcProvider=E;},{"../abstract-signer":2,"../errors":5,"../utils/address":60,"../utils/bytes":64,"../utils/networks":72,"../utils/properties":74,"../utils/utf8":85,"../utils/web":86,"./base-provider":51}],58:[function(e,t,r){var n,i=this&&this.__extends||(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t;}||function(e,t){for(var r in t){ t.hasOwnProperty(r)&&(e[r]=t[r]); }},function(e,t){function r(){this.constructor=e;}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r);}),o=this&&this.__importStar||function(e){if(e&&e.__esModule){ return e; }var t={};if(null!=e){ for(var r in e){ Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]); } }return t.default=e,t};Object.defineProperty(r,"__esModule",{value:!0});var s,a=e("./json-rpc-provider"),u=e("../utils/properties"),l=o(e("../errors")),h=42,i=(s=a.JsonRpcProvider,i(f,s),f.prototype.send=function(t,i){var o=this;return "eth_sign"==t&&this._web3Provider.isMetaMask&&(t="personal_sign",i=[i[1],i[0]]),new Promise(function(r,n){var e={method:t,params:i,id:h++,jsonrpc:"2.0"};o._sendAsync(e,function(e,t){if(e){ n(e); }else{if(t.error){e=new Error(t.error.message);return e.code=t.error.code,e.data=t.error.data,void n(e)}r(t.result);}});})},f);function f(e,t){t=s.call(this,e.host||e.path||"",t)||this;return l.checkNew(t,f),e&&(e.sendAsync?t._sendAsync=e.sendAsync.bind(e):e.send&&(t._sendAsync=e.send.bind(e))),e&&t._sendAsync||l.throwError("invalid web3Provider",l.INVALID_ARGUMENT,{arg:"web3Provider",value:e}),u.defineReadOnly(t,"_web3Provider",e),u.defineReadOnly(t,"provider",e),t}r.Web3Provider=i;},{"../errors":5,"../utils/properties":74,"./json-rpc-provider":57}],59:[function(e,t,r){var n,i=this&&this.__extends||(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t;}||function(e,t){for(var r in t){ t.hasOwnProperty(r)&&(e[r]=t[r]); }},function(e,t){function r(){this.constructor=e;}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r);}),o=this&&this.__importStar||function(e){if(e&&e.__esModule){ return e; }var t={};if(null!=e){ for(var r in e){ Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]); } }return t.default=e,t};Object.defineProperty(r,"__esModule",{value:!0});var s=e("../constants"),l=o(e("../errors")),a=e("./address"),u=e("./bignumber"),h=e("./bytes"),f=e("./utf8"),c=e("./properties"),d=new RegExp(/^bytes([0-9]*)$/),p=new RegExp(/^(u?int)([0-9]*)$/),y=new RegExp(/^(.*)\[([0-9]*)\]$/);r.defaultCoerceFunc=function(e,t){e=e.match(p);return e&&parseInt(e[2])<=48?t.toNumber():t};var m=new RegExp("^([^)(]*)\\((.*)\\)([^)(]*)$"),g=new RegExp("^[A-Za-z_][A-Za-z0-9_]*$");function v(e){return e.match(/^uint($|[^1-9])/)?e="uint256"+e.substring(4):e.match(/^int($|[^1-9])/)&&(e="int256"+e.substring(3)),e}function b(e,t){var r=e;function n(e){throw new Error('unexpected character "'+r[e]+'" at position '+e+' in "'+r+'"')}e=e.replace(/\s/g," ");for(var i={type:"",name:"",state:{allowType:!0}},o=i,s=0;s<e.length;s++){var a=e[s];switch(a){case"(":o.state.allowParams||n(s),o.state.allowType=!1,o.type=v(o.type),o.components=[{type:"",name:"",parent:o,state:{allowType:!0}}],o=o.components[0];break;case")":delete o.state,t&&"indexed"===o.name&&(o.indexed=!0,o.name=""),o.type=v(o.type);var u=o;(o=o.parent)||n(s),delete u.parent,o.state.allowParams=!1,o.state.allowName=!0,o.state.allowArray=!0;break;case",":delete o.state,t&&"indexed"===o.name&&(o.indexed=!0,o.name=""),o.type=v(o.type);u={type:"",name:"",parent:o.parent,state:{allowType:!0}};o.parent.components.push(u),delete o.parent,o=u;break;case" ":o.state.allowType&&""!==o.type&&(o.type=v(o.type),delete o.state.allowType,o.state.allowName=!0,o.state.allowParams=!0),o.state.allowName&&""!==o.name&&(t&&"indexed"===o.name?(o.indexed=!0,o.name=""):o.state.allowName=!1);break;case"[":o.state.allowArray||n(s),o.type+=a,o.state.allowArray=!1,o.state.allowName=!1,o.state.readArray=!0;break;case"]":o.state.readArray||n(s),o.type+=a,o.state.readArray=!1,o.state.allowArray=!0,o.state.allowName=!0;break;default:o.state.allowType?(o.type+=a,o.state.allowParams=!0,o.state.allowArray=!0):o.state.allowName?(o.name+=a,delete o.state.allowArray):o.state.readArray?o.type+=a:n(s);}}if(o.parent){ throw new Error("unexpected eof"); }return delete i.state,t&&"indexed"===o.name&&(o.indexed=!0,o.name=""),i.type=v(i.type),i}function w(e){return ie(r.defaultCoerceFunc,e).type}r.parseParamType=function(e){return b(e,!0)},r.formatParamType=w,r.formatSignature=function(e){return e.name+"("+e.inputs.map(w).join(",")+")"},r.parseSignature=function(e){if("string"==typeof e){ return "event "===(e=(e=(e=e.replace(/\s/g," ")).replace(/\(/g," (").replace(/\)/g,") ").replace(/\s+/g," ")).trim()).substring(0,6)?function(e){var t={anonymous:!1,inputs:[],name:"",type:"event"},r=e.match(m);if(!r){ throw new Error("invalid event: "+e); }if(t.name=r[1].trim(),re(r[2]).forEach(function(e){(e=b(e,!0)).indexed=!!e.indexed,t.inputs.push(e);}),r[3].split(" ").forEach(function(e){switch(e){case"anonymous":t.anonymous=!0;break;case"":break;default:l.info("unknown modifier: "+e);}}),t.name&&!t.name.match(g)){ throw new Error('invalid identifier: "'+t.name+'"'); }return t}(e.substring(6).trim()):function(e){var t={constant:!1,gas:null,inputs:[],name:"",outputs:[],payable:!1,stateMutability:null,type:"function"},r=e.split("@");if(1!==r.length){if(2<r.length){ throw new Error("invalid signature"); }if(!r[1].match(/^[0-9]+$/)){ throw new Error("invalid signature gas"); }t.gas=u.bigNumberify(r[1]),e=r[0];}if(!(e=(r=e.split(" returns "))[0].match(m))){ throw new Error("invalid signature"); }if(t.name=e[1].trim(),!t.name.match(g)){ throw new Error('invalid identifier: "'+e[1]+'"'); }if(re(e[2]).forEach(function(e){t.inputs.push(b(e));}),e[3].split(" ").forEach(function(e){switch(e){case"constant":t.constant=!0;break;case"payable":t.payable=!0,t.stateMutability="payable";break;case"pure":t.constant=!0,t.stateMutability="pure";break;case"view":t.constant=!0,t.stateMutability="view";break;case"external":case"public":case"":break;default:l.info("unknown modifier: "+e);}}),1<r.length){r=r[1].match(m);if(""!=r[1].trim()||""!=r[3].trim()){ throw new Error("unexpected tokens"); }re(r[2]).forEach(function(e){t.outputs.push(b(e));});}if("constructor"===t.name){if(t.type="constructor",t.outputs.length){ throw new Error("constructor may not have outputs"); }delete t.name,delete t.outputs;}return t}((e="function "===e.substring(0,9)?e.substring(9):e).trim()); }throw new Error("unknown signature")};function _(e,t,r,n,i){this.coerceFunc=e,this.name=t,this.type=r,this.localName=n,this.dynamic=i;}var M,A=(i(E,M=_),E.prototype.encode=function(e){return this.coder.encode(e)},E.prototype.decode=function(e,t){return this.coder.decode(e,t)},E);function E(e){var t=M.call(this,e.coerceFunc,e.name,e.type,void 0,e.dynamic)||this;return c.defineReadOnly(t,"coder",e),t}var S,k=(i(N,S=_),N.prototype.encode=function(e){return h.arrayify([])},N.prototype.decode=function(e,t){if(t>e.length){ throw new Error("invalid null"); }return {consumed:0,value:this.coerceFunc("null",void 0)}},N);function N(e,t){return S.call(this,e,"null","",t,!1)||this}var x,P=(i(I,x=_),I.prototype.encode=function(t){try{var e=u.bigNumberify(t);if(this.signed){var r=s.MaxUint256.maskn(8*this.size-1);if(e.gt(r)){ throw new Error("out-of-bounds"); }if(r=r.add(s.One).mul(s.NegativeOne),e.lt(r)){ throw new Error("out-of-bounds") }}else if(e.lt(s.Zero)||e.gt(s.MaxUint256.maskn(8*this.size))){ throw new Error("out-of-bounds"); }return e=e.toTwos(8*this.size).maskn(8*this.size),this.signed&&(e=e.fromTwos(8*this.size).toTwos(256)),h.padZeros(h.arrayify(e),32)}catch(e){l.throwError("invalid number value",l.INVALID_ARGUMENT,{arg:this.localName,coderType:this.name,value:t});}return null},I.prototype.decode=function(e,t){e.length<t+32&&l.throwError("insufficient data for "+this.name+" type",l.INVALID_ARGUMENT,{arg:this.localName,coderType:this.name,value:h.hexlify(e.slice(t,t+32))});var r=32-this.size,t=u.bigNumberify(e.slice(t+r,t+32)),t=this.signed?t.fromTwos(8*this.size):t.maskn(8*this.size);return {consumed:32,value:this.coerceFunc(this.name,t)}},I);function I(e,t,r,n){var i=this,o=(r?"int":"uint")+8*t;return (i=x.call(this,e,o,o,n,!1)||this).size=t,i.signed=r,i}var T,R=new P(function(e,t){return t},32,!1,"none"),O=(i(C,T=_),C.prototype.encode=function(e){return R.encode(e?1:0)},C.prototype.decode=function(e,t){try{var r=R.decode(e,t);}catch(e){throw"insufficient data for uint256 type"===e.reason&&l.throwError("insufficient data for boolean type",l.INVALID_ARGUMENT,{arg:this.localName,coderType:"boolean",value:e.value}),e}return {consumed:r.consumed,value:this.coerceFunc("bool",!r.value.isZero())}},C);function C(e,t){return T.call(this,e,"bool","bool",t,!1)||this}var L,B=(i(D,L=_),D.prototype.encode=function(t){var e=new Uint8Array(32);try{var r=h.arrayify(t);if(r.length!==this.length){ throw new Error("incorrect data length"); }e.set(r);}catch(e){l.throwError("invalid "+this.name+" value",l.INVALID_ARGUMENT,{arg:this.localName,coderType:this.name,value:e.value||t});}return e},D.prototype.decode=function(e,t){return e.length<t+32&&l.throwError("insufficient data for "+this.name+" type",l.INVALID_ARGUMENT,{arg:this.localName,coderType:this.name,value:h.hexlify(e.slice(t,t+32))}),{consumed:32,value:this.coerceFunc(this.name,h.hexlify(e.slice(t,t+this.length)))}},D);function D(e,t,r){var n=this,i="bytes"+t;return (n=L.call(this,e,i,i,r,!1)||this).length=t,n}var U,F=(i(j,U=_),j.prototype.encode=function(t){var e=new Uint8Array(32);try{e.set(h.arrayify(a.getAddress(t)),12);}catch(e){l.throwError("invalid address",l.INVALID_ARGUMENT,{arg:this.localName,coderType:"address",value:t});}return e},j.prototype.decode=function(e,t){return e.length<t+32&&l.throwError("insufficient data for address type",l.INVALID_ARGUMENT,{arg:this.localName,coderType:"address",value:h.hexlify(e.slice(t,t+32))}),{consumed:32,value:this.coerceFunc("address",a.getAddress(h.hexlify(e.slice(t+12,t+32))))}},j);function j(e,t){return U.call(this,e,"address","address",t,!1)||this}function G(e){var t=32*Math.ceil(e.length/32),t=new Uint8Array(t-e.length);return h.concat([R.encode(e.length),e,t])}function H(e,t,r){e.length<t+32&&l.throwError("insufficient data for dynamicBytes length",l.INVALID_ARGUMENT,{arg:r,coderType:"dynamicBytes",value:h.hexlify(e.slice(t,t+32))});var n=R.decode(e,t).value;try{n=n.toNumber();}catch(e){l.throwError("dynamic bytes count too large",l.INVALID_ARGUMENT,{arg:r,coderType:"dynamicBytes",value:n.toString()});}return e.length<t+32+n&&l.throwError("insufficient data for dynamicBytes type",l.INVALID_ARGUMENT,{arg:r,coderType:"dynamicBytes",value:h.hexlify(e.slice(t,t+32+n))}),{consumed:32+32*Math.ceil(n/32),value:e.slice(t+32,t+32+n)}}var z,o=(i(V,z=_),V.prototype.encode=function(e){try{return G(h.arrayify(e))}catch(e){l.throwError("invalid bytes value",l.INVALID_ARGUMENT,{arg:this.localName,coderType:"bytes",value:e.value});}return null},V.prototype.decode=function(e,t){t=H(e,t,this.localName);return t.value=this.coerceFunc("bytes",h.hexlify(t.value)),t},V);function V(e,t){return z.call(this,e,"bytes","bytes",t,!0)||this}var K,e=(i(q,K=_),q.prototype.encode=function(e){return "string"!=typeof e&&l.throwError("invalid string value",l.INVALID_ARGUMENT,{arg:this.localName,coderType:"string",value:e}),G(f.toUtf8Bytes(e))},q.prototype.decode=function(e,t){t=H(e,t,this.localName);return t.value=this.coerceFunc("string",f.toUtf8String(t.value)),t},q);function q(e,t){return K.call(this,e,"string","string",t,!0)||this}function W(e){return 32*Math.ceil(e/32)}function Z(e,r){var t;Array.isArray(r)||(r&&"object"==typeof r?(t=[],e.forEach(function(e){t.push(r[e.localName]);}),r=t):l.throwError("invalid tuple value",l.INVALID_ARGUMENT,{coderType:"tuple",value:r})),e.length!==r.length&&l.throwError("types/value length mismatch",l.INVALID_ARGUMENT,{coderType:"tuple",value:r});var n=[];e.forEach(function(e,t){n.push({dynamic:e.dynamic,value:e.encode(r[t])});});var i=0,o=0;n.forEach(function(e){e.dynamic?(i+=32,o+=W(e.value.length)):i+=W(e.value.length);});var s=0,a=i,u=new Uint8Array(i+o);return n.forEach(function(e){e.dynamic?(u.set(R.encode(a),s),s+=32,u.set(e.value,a),a+=W(e.value.length)):(u.set(e.value,s),s+=W(e.value.length));}),u}function J(e,n,i){var o=i,s=0,a=[];return e.forEach(function(e){var t,r;e.dynamic?(t=R.decode(n,i),(r=e.decode(n,o+t.value.toNumber())).consumed=t.consumed):r=e.decode(n,i),null!=r.value&&a.push(r.value),i+=r.consumed,s+=r.consumed;}),e.forEach(function(e,t){e=e.localName;e&&null==a[e="length"===e?"_length":e]&&(a[e]=a[t]);}),{value:a,consumed:s}}var X,$=(i(Q,X=_),Q.prototype.encode=function(e){Array.isArray(e)||l.throwError("expected array value",l.INVALID_ARGUMENT,{arg:this.localName,coderType:"array",value:e});var t=this.length,r=new Uint8Array(0);-1===t&&(t=e.length,r=R.encode(t)),l.checkArgumentCount(t,e.length," in coder array"+(this.localName?" "+this.localName:""));for(var n=[],i=0;i<e.length;i++){ n.push(this.coder); }return h.concat([r,Z(n,e)])},Q.prototype.decode=function(e,t){var r=0,n=this.length;if(-1===n){try{var i=R.decode(e,t);}catch(e){l.throwError("insufficient data for dynamic array length",l.INVALID_ARGUMENT,{arg:this.localName,coderType:"array",value:e.value});}try{n=i.value.toNumber();}catch(e){l.throwError("array count too large",l.INVALID_ARGUMENT,{arg:this.localName,coderType:"array",value:i.value.toString()});}r+=i.consumed,t+=i.consumed;}for(var o=[],s=0;s<n;s++){ o.push(new A(this.coder)); }t=J(o,e,t);return t.consumed+=r,t.value=this.coerceFunc(this.type,t.value),t},Q);function Q(e,t,r,n){var i=this,o=t.type+"["+(0<=r?r:"")+"]",s=-1===r||t.dynamic;return (i=X.call(this,e,"array",o,n,s)||this).coder=t,i.length=r,i}var Y,ee=(i(te,Y=_),te.prototype.encode=function(e){return Z(this.coders,e)},te.prototype.decode=function(e,t){t=J(this.coders,e,t);return t.value=this.coerceFunc(this.type,t.value),t},te);function te(e,t,r){var n=this,i=!1,o=[];t.forEach(function(e){e.dynamic&&(i=!0),o.push(e.type);});var s="tuple("+o.join(",")+")";return (n=Y.call(this,e,"tuple",s,r,i)||this).coders=t,n}function re(e){e=e.trim();for(var t=[],r="",n=0,i=0;i<e.length;i++){var o=e[i];if(","===o&&0===n){ t.push(r),r=""; }else if(r+=o,"("===o){ n++; }else if(")"===o&&-1===--n){ throw new Error("unbalanced parenthsis") }}return r&&t.push(r),t}var ne={address:F,bool:O,string:e,bytes:o};function ie(e,t){var r=ne[t.type];if(r){ return new r(e,t.name); }r=t.type.match(p);if(r){ return (0===(o=parseInt(r[2]||"256"))||256<o||o%8!=0)&&l.throwError("invalid "+r[1]+" bit length",l.INVALID_ARGUMENT,{arg:"param",value:t}),new P(e,o/8,"int"===r[1],t.name); }var n,i,r=t.type.match(d);if(r){ return (0===(o=parseInt(r[1]))||32<o)&&l.throwError("invalid bytes length",l.INVALID_ARGUMENT,{arg:"param",value:t}),new B(e,o,t.name); }if(r=t.type.match(y)){var o=parseInt(r[2]||"-1");return (t=c.shallowCopy(t)).type=r[1],t=c.deepCopy(t),new $(e,ie(e,t),o,t.name)}return "tuple"===t.type.substring(0,5)?(n=e,r=t.components,o=t.name,i=[],(r=r||[]).forEach(function(e){i.push(ie(n,e));}),new ee(n,i,o)):""===t.type?new k(e,t.name):(l.throwError("invalid type",l.INVALID_ARGUMENT,{arg:"type",value:t.type}),null)}oe.prototype.encode=function(e,t){e.length!==t.length&&l.throwError("types/values length mismatch",l.INVALID_ARGUMENT,{count:{types:e.length,values:t.length},value:{types:e,values:t}});var r=[];return e.forEach(function(e){var t=null,t="string"==typeof e?b(e):e;r.push(ie(this.coerceFunc,t));},this),h.hexlify(new ee(this.coerceFunc,r,"_").encode(t))},oe.prototype.decode=function(e,t){var r=[];return e.forEach(function(e){var t=null,t="string"==typeof e?b(e):c.deepCopy(e);r.push(ie(this.coerceFunc,t));},this),new ee(this.coerceFunc,r,"_").decode(h.arrayify(t),0).value},o=oe;function oe(e){l.checkNew(this,oe),e=e||r.defaultCoerceFunc,c.defineReadOnly(this,"coerceFunc",e);}r.AbiCoder=o,r.defaultAbiCoder=new o;},{"../constants":3,"../errors":5,"./address":60,"./bignumber":63,"./bytes":64,"./properties":74,"./utf8":85}],60:[function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});var i=n(e("bn.js")),o=e("./bytes"),s=e("./keccak256"),a=e("./rlp"),u=e("../errors");function l(e){"string"==typeof e&&e.match(/^0x[0-9A-Fa-f]{40}$/)||u.throwError("invalid address",u.INVALID_ARGUMENT,{arg:"address",value:e});for(var t=(e=e.toLowerCase()).substring(2).split(""),r=new Uint8Array(40),n=0;n<40;n++){ r[n]=t[n].charCodeAt(0); }for(var r=o.arrayify(s.keccak256(r)),i=0;i<40;i+=2){ 8<=r[i>>1]>>4&&(t[i]=t[i].toUpperCase()),8<=(15&r[i>>1])&&(t[i+1]=t[i+1].toUpperCase()); }return "0x"+t.join("")}for(var h={},f=0;f<10;f++){ h[String(f)]=String(f); }for(f=0;f<26;f++){ h[String.fromCharCode(65+f)]=String(10+f); }var c,d=Math.floor((c=9007199254740991,Math.log10?Math.log10(c):Math.log(c)/Math.LN10));function p(e){e=(e=e.toUpperCase()).substring(4)+e.substring(0,2)+"00";var t="";for(e.split("").forEach(function(e){t+=h[e];});t.length>=d;){ var r=t.substring(0,d),t=parseInt(r,10)%97+t.substring(r.length); }for(var n=String(98-parseInt(t,10)%97);n.length<2;){ n="0"+n; }return n}function y(e){var t=null;if("string"!=typeof e&&u.throwError("invalid address",u.INVALID_ARGUMENT,{arg:"address",value:e}),e.match(/^(0x)?[0-9a-fA-F]{40}$/)){ t=l(e="0x"!==e.substring(0,2)?"0x"+e:e),e.match(/([A-F].*[a-f])|([a-f].*[A-F])/)&&t!==e&&u.throwError("bad address checksum",u.INVALID_ARGUMENT,{arg:"address",value:e}); }else if(e.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)){for(e.substring(2,4)!==p(e)&&u.throwError("bad icap checksum",u.INVALID_ARGUMENT,{arg:"address",value:e}),t=new i.default.BN(e.substring(4),36).toString(16);t.length<40;){ t="0"+t; }t=l("0x"+t);}else { u.throwError("invalid address",u.INVALID_ARGUMENT,{arg:"address",value:e}); }return t}r.getAddress=y,r.getIcapAddress=function(e){for(var t=new i.default.BN(y(e).substring(2),16).toString(36).toUpperCase();t.length<30;){ t="0"+t; }return "XE"+p("XE00"+t)+t},r.getContractAddress=function(e){if(!e.from){ throw new Error("missing from address"); }var t=e.nonce;return y("0x"+s.keccak256(a.encode([y(e.from),o.stripZeros(o.hexlify(t))])).substring(26))},r.getCreate2Address=function(e){var t=e.initCodeHash;e.initCode&&(t?s.keccak256(e.initCode)!==t&&u.throwError("initCode/initCodeHash mismatch",u.INVALID_ARGUMENT,{arg:"options",value:e}):t=s.keccak256(e.initCode)),t||u.throwError("missing initCode or initCodeHash",u.INVALID_ARGUMENT,{arg:"options",value:e});var r=y(e.from),n=o.arrayify(e.salt);return 32!==n.length&&u.throwError("invalid salt",u.INVALID_ARGUMENT,{arg:"options",value:e}),y("0x"+s.keccak256(o.concat(["0xff",r,n,t])).substring(26))};},{"../errors":5,"./bytes":64,"./keccak256":71,"./rlp":76,"bn.js":9}],61:[function(e,t,r){Object.defineProperty(r,"__esModule",{value:!0});var n=e("../utils/bytes");t.exports={decode:function(e){e=atob(e);for(var t=[],r=0;r<e.length;r++){ t.push(e.charCodeAt(r)); }return n.arrayify(t)},encode:function(e){e=n.arrayify(e);for(var t="",r=0;r<e.length;r++){ t+=String.fromCharCode(e[r]); }return btoa(t)}};},{"../utils/bytes":64}],62:[function(e,t,r){Object.defineProperty(r,"__esModule",{value:!0});var l=e("./bytes"),n=e("./properties"),i=(o.prototype.encode=function(e){var t=l.arrayify(e);if(0===t.length){ return ""; }for(var r=[0],n=0;n<t.length;++n){for(var i=t[n],o=0;o<r.length;++o){ i+=r[o]<<8,r[o]=i%this.base,i=i/this.base|0; }for(;0<i;){ r.push(i%this.base),i=i/this.base|0; }}for(var s="",a=0;0===t[a]&&a<t.length-1;++a){ s+=this._leader; }for(var u=r.length-1;0<=u;--u){ s+=this.alphabet[r[u]]; }return s},o.prototype.decode=function(e){if("string"!=typeof e){ throw new TypeError("Expected String"); }var t=[];if(0===e.length){ return new Uint8Array(t); }t.push(0);for(var r=0;r<e.length;r++){var n=this._alphabetMap[e[r]];if(void 0===n){ throw new Error("Non-base"+this.base+" character"); }for(var i=n,o=0;o<t.length;++o){ i+=t[o]*this.base,t[o]=255&i,i>>=8; }for(;0<i;){ t.push(255&i),i>>=8; }}for(var s=0;e[s]===this._leader&&s<e.length-1;++s){ t.push(0); }return l.arrayify(new Uint8Array(t.reverse()))},o);function o(e){n.defineReadOnly(this,"alphabet",e),n.defineReadOnly(this,"base",e.length),n.defineReadOnly(this,"_alphabetMap",{}),n.defineReadOnly(this,"_leader",e.charAt(0));for(var t=0;t<e.length;t++){ this._alphabetMap[e.charAt(t)]=t; }}e=new(r.BaseX=i)("abcdefghijklmnopqrstuvwxyz234567");r.Base32=e;i=new i("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz");r.Base58=i;},{"./bytes":64,"./properties":74}],63:[function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},i=this&&this.__importStar||function(e){if(e&&e.__esModule){ return e; }var t={};if(null!=e){ for(var r in e){ Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]); } }return t.default=e,t};Object.defineProperty(r,"__esModule",{value:!0});var o=n(e("bn.js")),s=e("./bytes"),a=e("./properties"),u=i(e("../errors")),l=new o.default.BN(-1);function h(e){e=e.toString(16);return "-"===e[0]?e.length%2==0?"-0x0"+e.substring(1):"-0x"+e.substring(1):e.length%2==1?"0x0"+e:"0x"+e}function f(e){return d(m(e))}function c(e){return new p(h(e))}function d(e){e=e._hex;return "-"===e[0]?new o.default.BN(e.substring(3),16).mul(l):new o.default.BN(e.substring(2),16)}var p=(y.prototype.fromTwos=function(e){return c(d(this).fromTwos(e))},y.prototype.toTwos=function(e){return c(d(this).toTwos(e))},y.prototype.abs=function(){return "-"===this._hex[0]?c(d(this).mul(l)):this},y.prototype.add=function(e){return c(d(this).add(f(e)))},y.prototype.sub=function(e){return c(d(this).sub(f(e)))},y.prototype.div=function(e){return m(e).isZero()&&u.throwError("division by zero",u.NUMERIC_FAULT,{operation:"divide",fault:"division by zero"}),c(d(this).div(f(e)))},y.prototype.mul=function(e){return c(d(this).mul(f(e)))},y.prototype.mod=function(e){return c(d(this).mod(f(e)))},y.prototype.pow=function(e){return c(d(this).pow(f(e)))},y.prototype.maskn=function(e){return c(d(this).maskn(e))},y.prototype.eq=function(e){return d(this).eq(f(e))},y.prototype.lt=function(e){return d(this).lt(f(e))},y.prototype.lte=function(e){return d(this).lte(f(e))},y.prototype.gt=function(e){return d(this).gt(f(e))},y.prototype.gte=function(e){return d(this).gte(f(e))},y.prototype.isZero=function(){return d(this).isZero()},y.prototype.toNumber=function(){try{return d(this).toNumber()}catch(e){u.throwError("overflow",u.NUMERIC_FAULT,{operation:"setValue",fault:"overflow",details:e.message});}return null},y.prototype.toString=function(){return d(this).toString(10)},y.prototype.toHexString=function(){return this._hex},y.isBigNumber=function(e){return a.isType(e,"BigNumber")},y);function y(e){if(u.checkNew(this,y),a.setType(this,"BigNumber"),"string"==typeof e){ s.isHexString(e)?a.defineReadOnly(this,"_hex",e="0x"==e?"0x0":e):"-"===e[0]&&s.isHexString(e.substring(1))?a.defineReadOnly(this,"_hex",e):e.match(/^-?[0-9]*$/)?a.defineReadOnly(this,"_hex",h(new o.default.BN(e=""==e?"0":e))):u.throwError("invalid BigNumber string value",u.INVALID_ARGUMENT,{arg:"value",value:e}); }else if("number"==typeof e){parseInt(String(e))!==e&&u.throwError("underflow",u.NUMERIC_FAULT,{operation:"setValue",fault:"underflow",value:e,outputValue:parseInt(String(e))});try{a.defineReadOnly(this,"_hex",h(new o.default.BN(e)));}catch(e){u.throwError("overflow",u.NUMERIC_FAULT,{operation:"setValue",fault:"overflow",details:e.message});}}else { e instanceof y?a.defineReadOnly(this,"_hex",e._hex):e.toHexString?a.defineReadOnly(this,"_hex",h(f(e.toHexString()))):e._hex&&s.isHexString(e._hex)?a.defineReadOnly(this,"_hex",e._hex):s.isArrayish(e)?a.defineReadOnly(this,"_hex",h(new o.default.BN(s.hexlify(e).substring(2),16))):u.throwError("invalid BigNumber value",u.INVALID_ARGUMENT,{arg:"value",value:e}); }}function m(e){return p.isBigNumber(e)?e:new p(e)}r.BigNumber=p,r.bigNumberify=m;},{"../errors":5,"./bytes":64,"./properties":74,"bn.js":9}],64:[function(e,t,r){var n=this&&this.__importStar||function(e){if(e&&e.__esModule){ return e; }var t={};if(null!=e){ for(var r in e){ Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]); } }return t.default=e,t};Object.defineProperty(r,"__esModule",{value:!0});var s=n(e("../errors"));function a(e){return !!e.toHexString}function u(t){return t.slice||(t.slice=function(){var e=Array.prototype.slice.call(arguments);return u(new Uint8Array(Array.prototype.slice.apply(t,e)))}),t}function l(e){if(!e||parseInt(String(e.length))!=e.length||"string"==typeof e){ return !1; }for(var t=0;t<e.length;t++){var r=e[t];if(r<0||256<=r||parseInt(String(r))!=r){ return !1 }}return !0}function h(e){if(null==e&&s.throwError("cannot convert null value to array",s.INVALID_ARGUMENT,{arg:"value",value:e}),"string"!=typeof(e=a(e)?e.toHexString():e)){ return l(e)?u(new Uint8Array(e)):(s.throwError("invalid arrayify value",null,{arg:"value",value:e,type:typeof e}),null); }var t=e.match(/^(0x)?[0-9a-fA-F]*$/);t||s.throwError("invalid hexidecimal string",s.INVALID_ARGUMENT,{arg:"value",value:e}),"0x"!==t[1]&&s.throwError("hex string must have 0x prefix",s.INVALID_ARGUMENT,{arg:"value",value:e}),(e=e.substring(2)).length%2&&(e="0"+e);for(var r=[],n=0;n<e.length;n+=2){ r.push(parseInt(e.substr(n,2),16)); }return u(new Uint8Array(r))}function i(e){for(var t=[],r=0,n=0;n<e.length;n++){var i=h(e[n]);t.push(i),r+=i.length;}for(var o=new Uint8Array(r),s=0,n=0;n<t.length;n++){ o.set(t[n],s),s+=t[n].length; }return u(o)}function o(e,t){return !("string"!=typeof e||!e.match(/^0x[0-9A-Fa-f]*$/))&&(!t||e.length===2+2*t)}r.isHexable=a,r.isArrayish=l,r.arrayify=h,r.concat=i,r.stripZeros=function(e){var t=h(e);if(0===t.length){ return t; }for(var r=0;0===t[r];){ r++; }return t=r?t.slice(r):t},r.padZeros=function(e,t){if(t<(e=h(e)).length){ throw new Error("cannot pad"); }var r=new Uint8Array(t);return r.set(e,t-e.length),u(r)},r.isHexString=o;var f="0123456789abcdef";function c(e){if(a(e)){ return e.toHexString(); }if("number"==typeof e){e<0&&s.throwError("cannot hexlify negative value",s.INVALID_ARGUMENT,{arg:"value",value:e}),9007199254740991<=e&&s.throwError("out-of-range",s.NUMERIC_FAULT,{operartion:"hexlify",fault:"out-of-safe-range"});for(var t="";e;){ t=f[15&e]+t,e=Math.floor(e/16); }return t.length?"0x"+(t=t.length%2?"0"+t:t):"0x00"}if("string"==typeof e){var r=e.match(/^(0x)?[0-9a-fA-F]*$/);return r||s.throwError("invalid hexidecimal string",s.INVALID_ARGUMENT,{arg:"value",value:e}),"0x"!==r[1]&&s.throwError("hex string must have 0x prefix",s.INVALID_ARGUMENT,{arg:"value",value:e}),e=e.length%2?"0x0"+e.substring(2):e}if(l(e)){for(var n=[],i=0;i<e.length;i++){var o=e[i];n.push(f[(240&o)>>4]+f[15&o]);}return "0x"+n.join("")}return s.throwError("invalid hexlify value",null,{arg:"value",value:e}),"never"}function d(e,t){for(o(e)||s.throwError("invalid hex string",s.INVALID_ARGUMENT,{arg:"value",value:e});e.length<2*t+2;){ e="0x0"+e.substring(2); }return e}function p(e){var t=0,r="0x",n="0x";if((i=e)&&null!=i.r&&null!=i.s){null==e.v&&null==e.recoveryParam&&s.throwError("at least on of recoveryParam or v must be specified",s.INVALID_ARGUMENT,{argument:"signature",value:e}),r=d(e.r,32),n=d(e.s,32),"string"==typeof(t=e.v)&&(t=parseInt(t,16));var i=e.recoveryParam,t=27+(i=null==i&&null!=e.v?1-t%2:i);}else{e=h(e);if(65!==e.length){ throw new Error("invalid signature"); }r=c(e.slice(0,32)),n=c(e.slice(32,64)),27!==(t=e[64])&&28!==t&&(t=27+t%2);}return {r:r,s:n,recoveryParam:t-27,v:t}}r.hexlify=c,r.hexDataLength=function(e){return o(e)&&e.length%2==0?(e.length-2)/2:null},r.hexDataSlice=function(e,t,r){return o(e)||s.throwError("invalid hex data",s.INVALID_ARGUMENT,{arg:"value",value:e}),e.length%2!=0&&s.throwError("hex data length must be even",s.INVALID_ARGUMENT,{arg:"value",value:e}),t=2+2*t,null!=r?"0x"+e.substring(t,2+2*r):"0x"+e.substring(t)},r.hexStripZeros=function(e){for(o(e)||s.throwError("invalid hex string",s.INVALID_ARGUMENT,{arg:"value",value:e});3<e.length&&"0x0"===e.substring(0,3);){ e="0x"+e.substring(3); }return e},r.hexZeroPad=d,r.splitSignature=p,r.joinSignature=function(e){return c(i([(e=p(e)).r,e.s,e.recoveryParam?"0x1c":"0x1b"]))};},{"../errors":5}],65:[function(e,t,r){var n=this&&this.__importStar||function(e){if(e&&e.__esModule){ return e; }var t={};if(null!=e){ for(var r in e){ Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]); } }return t.default=e,t};Object.defineProperty(r,"__esModule",{value:!0});var i=n(e("../errors")),o=e("./bytes"),s=e("./utf8"),a=e("./keccak256"),u=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]),l=new RegExp("^((.*)\\.)?([^.]+)$"),h=new RegExp("^[a-z0-9.-]*$");r.namehash=function(e){"string"!=typeof e&&i.throwError("invalid address - "+String(e),i.INVALID_ARGUMENT,{argument:"name",value:e}),(e=e.toLowerCase()).match(h)||i.throwError("contains invalid UseSTD3ASCIIRules characters",i.INVALID_ARGUMENT,{argument:"name",value:e});for(var t=u;e.length;){var r=e.match(l),n=s.toUtf8Bytes(r[3]),t=a.keccak256(o.concat([t,a.keccak256(n)]));e=r[2]||"";}return o.hexlify(t)},r.id=function(e){return a.keccak256(s.toUtf8Bytes(e))},r.hashMessage=function(e){return a.keccak256(o.concat([s.toUtf8Bytes("\x19Ethereum Signed Message:\n"),s.toUtf8Bytes(String(e.length)),"string"==typeof e?s.toUtf8Bytes(e):e]))};},{"../errors":5,"./bytes":64,"./keccak256":71,"./utf8":85}],66:[function(e,t,r){var n=this&&this.__importStar||function(e){if(e&&e.__esModule){ return e; }var t={};if(null!=e){ for(var r in e){ Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]); } }return t.default=e,t};Object.defineProperty(r,"__esModule",{value:!0});var h=n(e("../errors")),f=e("../wordlists/lang-en"),a=e("./basex"),c=e("./bytes"),u=e("./bignumber"),i=e("./utf8"),o=e("./pbkdf2"),l=e("./hmac"),d=e("./properties"),p=e("./secp256k1"),y=e("./sha2"),m=u.bigNumberify("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),s=i.toUtf8Bytes("Bitcoin seed"),g=2147483648;function v(e){return (1<<e)-1<<8-e}function b(e){return c.hexZeroPad(c.hexlify(e),32)}function w(e){var t=c.hexDataSlice(y.sha256(y.sha256(e)),0,4);return a.Base58.encode(c.concat([e,t]))}var _={};r.defaultPath="m/44'/60'/0'/0/0";var M=(Object.defineProperty(A.prototype,"extendedKey",{get:function(){if(256<=this.depth){ throw new Error("Depth too large!"); }return w(c.concat([null!=this.privateKey?"0x0488ADE4":"0x0488B21E",c.hexlify(this.depth),this.parentFingerprint,c.hexZeroPad(c.hexlify(this.index),4),this.chainCode,null!=this.privateKey?c.concat(["0x00",this.privateKey]):this.publicKey]))},enumerable:!0,configurable:!0}),A.prototype.neuter=function(){return new A(_,null,this.publicKey,this.parentFingerprint,this.chainCode,this.index,this.depth,null,this.path)},A.prototype._derive=function(e){if(4294967295<e){ throw new Error("invalid index - "+String(e)); }var t=this.path;t&&(t+="/"+(e&~g));var r=new Uint8Array(37);if(e&g){if(!this.privateKey){ throw new Error("cannot derive child of neutered node"); }r.set(c.arrayify(this.privateKey),1),t&&(t+="'");}else { r.set(c.arrayify(this.publicKey)); }for(var n=24;0<=n;n-=8){ r[33+(n>>3)]=e>>24-n&255; }var i=l.computeHmac(l.SupportedAlgorithms.sha512,this.chainCode,r),o=i.slice(0,32),s=i.slice(32),a=null,i=null;return this.privateKey?a=b(u.bigNumberify(o).add(this.privateKey).mod(m)):i=new p.KeyPair(c.hexlify(o))._addPoint(this.publicKey),new A(_,a,i,this.fingerprint,b(s),e,this.depth+1,this.mnemonic,t)},A.prototype.derivePath=function(e){var t=e.split("/");if(0===t.length||"m"===t[0]&&0!==this.depth){ throw new Error("invalid path - "+e); }"m"===t[0]&&t.shift();for(var r=this,n=0;n<t.length;n++){var i=t[n];if(i.match(/^[0-9]+'$/)){var o=parseInt(i.substring(0,i.length-1));if(g<=o){ throw new Error("invalid path index - "+i); }r=r._derive(g+o);}else{if(!i.match(/^[0-9]+$/)){ throw new Error("invalid path component - "+i); }o=parseInt(i);if(g<=o){ throw new Error("invalid path index - "+i); }r=r._derive(o);}}return r},A.isHDNode=function(e){return d.isType(e,"HDNode")},A);function A(e,t,r,n,i,o,s,a,u){if(h.checkNew(this,A),e!==_){ throw new Error("HDNode constructor cannot be called directly"); }t?(t=new p.KeyPair(t),d.defineReadOnly(this,"privateKey",t.privateKey),d.defineReadOnly(this,"publicKey",t.compressedPublicKey)):(d.defineReadOnly(this,"privateKey",null),d.defineReadOnly(this,"publicKey",c.hexlify(r))),d.defineReadOnly(this,"parentFingerprint",n),d.defineReadOnly(this,"fingerprint",c.hexDataSlice(y.ripemd160(y.sha256(this.publicKey)),0,4)),d.defineReadOnly(this,"address",p.computeAddress(this.publicKey)),d.defineReadOnly(this,"chainCode",i),d.defineReadOnly(this,"index",o),d.defineReadOnly(this,"depth",s),d.defineReadOnly(this,"mnemonic",a),d.defineReadOnly(this,"path",u),d.setType(this,"HDNode");}function E(e,t){e=c.arrayify(e);if(e.length<16||64<e.length){ throw new Error("invalid seed"); }e=c.arrayify(l.computeHmac(l.SupportedAlgorithms.sha512,s,e));return new M(_,b(e.slice(0,32)),null,"0x00000000",b(e.slice(32)),0,0,t,"m")}function S(e,t){t=i.toUtf8Bytes("mnemonic"+(t=t||""),i.UnicodeNormalizationForm.NFKD);return c.hexlify(o.pbkdf2(i.toUtf8Bytes(e,i.UnicodeNormalizationForm.NFKD),t,2048,64,"sha512"))}function k(e,t){t=t||f.langEn,h.checkNormalize();var r=t.split(e);if(r.length%3!=0){ throw new Error("invalid mnemonic"); }for(var n=c.arrayify(new Uint8Array(Math.ceil(11*r.length/8))),i=0,o=0;o<r.length;o++){var s=t.getWordIndex(r[o].normalize("NFKD"));if(-1===s){ throw new Error("invalid mnemonic"); }for(var a=0;a<11;a++){ s&1<<10-a&&(n[i>>3]|=1<<7-i%8),i++; }}var u=32*r.length/3,l=v(r.length/3),e=c.arrayify(y.sha256(n.slice(0,u/8)))[0];if((e&=l)!=(n[n.length-1]&l)){ throw new Error("invalid checksum"); }return c.hexlify(n.slice(0,u/8))}function N(e,t){if((e=c.arrayify(e)).length%4!=0||e.length<16||32<e.length){ throw new Error("invalid entropy"); }for(var r=[0],n=11,i=0;i<e.length;i++){ 8<n?(r[r.length-1]<<=8,r[r.length-1]|=e[i],n-=8):(r[r.length-1]<<=n,r[r.length-1]|=e[i]>>8-n,r.push(e[i]&(1<<8-n)-1),n+=3); }var o=c.arrayify(y.sha256(e))[0],s=e.length/4;return o&=v(s),r[r.length-1]<<=s,r[r.length-1]|=o>>8-s,(t=t||f.langEn).join(r.map(function(e){return t.getWord(e)}))}r.HDNode=M,r.fromExtendedKey=function(e){var t=a.Base58.decode(e);82===t.length&&w(t.slice(0,78))===e||h.throwError("invalid extended key",h.INVALID_ARGUMENT,{argument:"extendedKey",value:"[REDACTED]"});var r=t[4],n=c.hexlify(t.slice(5,9)),i=parseInt(c.hexlify(t.slice(9,13)).substring(2),16),o=c.hexlify(t.slice(13,45)),s=t.slice(45,78);switch(c.hexlify(t.slice(0,4))){case"0x0488b21e":case"0x043587cf":return new M(_,null,c.hexlify(s),n,o,i,r,null,null);case"0x0488ade4":case"0x04358394":if(0!==s[0]){ break; }return new M(_,c.hexlify(s.slice(1)),null,n,o,i,r,null,null)}return h.throwError("invalid extended key",h.INVALID_ARGUMENT,{argument:"extendedKey",value:"[REDACTED]"})},r.fromMnemonic=function(e,t,r){return E(S(e=N(k(e,t),t),r),e)},r.fromSeed=function(e){return E(e,null)},r.mnemonicToSeed=S,r.mnemonicToEntropy=k,r.entropyToMnemonic=N,r.isValidMnemonic=function(e,t){try{return k(e,t),!0}catch(e){}return !1};},{"../errors":5,"../wordlists/lang-en":90,"./basex":62,"./bignumber":63,"./bytes":64,"./hmac":67,"./pbkdf2":73,"./properties":74,"./secp256k1":77,"./sha2":79,"./utf8":85}],67:[function(e,t,r){var n=this&&this.__importStar||function(e){if(e&&e.__esModule){ return e; }var t={};if(null!=e){ for(var r in e){ Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]); } }return t.default=e,t};Object.defineProperty(r,"__esModule",{value:!0});var i,o=n(e("hash.js")),s=e("../utils/bytes"),a=n(e("../errors"));(e=i=r.SupportedAlgorithms||(r.SupportedAlgorithms={})).sha256="sha256",e.sha512="sha512",r.computeHmac=function(e,t,r){return i[e]||a.throwError("unsupported algorithm "+e,a.UNSUPPORTED_OPERATION,{operation:"hmac",algorithm:e}),s.arrayify(o.hmac(o[e],s.arrayify(t)).update(s.arrayify(r)).digest())};},{"../errors":5,"../utils/bytes":64,"hash.js":26}],68:[function(e,t,r){var n=this&&this.__importStar||function(e){if(e&&e.__esModule){ return e; }var t={};if(null!=e){ for(var r in e){ Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]); } }return t.default=e,t};Object.defineProperty(r,"__esModule",{value:!0});var i=e("./abi-coder");r.AbiCoder=i.AbiCoder,r.defaultAbiCoder=i.defaultAbiCoder,r.formatSignature=i.formatSignature,r.formatParamType=i.formatParamType,r.parseSignature=i.parseSignature,r.parseParamType=i.parseParamType;i=e("./address");r.getAddress=i.getAddress,r.getContractAddress=i.getContractAddress,r.getCreate2Address=i.getCreate2Address,r.getIcapAddress=i.getIcapAddress;i=n(e("./base64"));r.base64=i;i=e("./bignumber");r.BigNumber=i.BigNumber,r.bigNumberify=i.bigNumberify;i=e("./bytes");r.arrayify=i.arrayify,r.concat=i.concat,r.hexDataSlice=i.hexDataSlice,r.hexDataLength=i.hexDataLength,r.hexlify=i.hexlify,r.hexStripZeros=i.hexStripZeros,r.hexZeroPad=i.hexZeroPad,r.isHexString=i.isHexString,r.joinSignature=i.joinSignature,r.padZeros=i.padZeros,r.splitSignature=i.splitSignature,r.stripZeros=i.stripZeros;i=e("./hash");r.hashMessage=i.hashMessage,r.id=i.id,r.namehash=i.namehash;i=n(e("./hdnode"));r.HDNode=i;i=e("./interface");r.Interface=i.Interface;i=e("./json-wallet");r.getJsonWalletAddress=i.getJsonWalletAddress;i=e("./keccak256");r.keccak256=i.keccak256;i=e("./sha2");r.sha256=i.sha256;i=e("./solidity");r.solidityKeccak256=i.keccak256,r.solidityPack=i.pack,r.soliditySha256=i.sha256;i=e("./random-bytes");r.randomBytes=i.randomBytes;i=e("./networks");r.getNetwork=i.getNetwork;i=e("./properties");r.checkProperties=i.checkProperties,r.deepCopy=i.deepCopy,r.defineReadOnly=i.defineReadOnly,r.resolveProperties=i.resolveProperties,r.shallowCopy=i.shallowCopy;n=n(e("./rlp"));r.RLP=n;n=e("./secp256k1");r.computeAddress=n.computeAddress,r.computePublicKey=n.computePublicKey,r.recoverAddress=n.recoverAddress,r.recoverPublicKey=n.recoverPublicKey,r.verifyMessage=n.verifyMessage;n=e("./signing-key");r.SigningKey=n.SigningKey;n=e("./transaction");r.populateTransaction=n.populateTransaction;n=e("./transaction");r.parseTransaction=n.parse,r.serializeTransaction=n.serialize;n=e("./utf8");r.formatBytes32String=n.formatBytes32String,r.parseBytes32String=n.parseBytes32String,r.toUtf8Bytes=n.toUtf8Bytes,r.toUtf8String=n.toUtf8String;n=e("./units");r.commify=n.commify,r.formatEther=n.formatEther,r.parseEther=n.parseEther,r.formatUnits=n.formatUnits,r.parseUnits=n.parseUnits;n=e("./web");r.fetchJson=n.fetchJson,r.poll=n.poll;n=e("./hmac");r.SupportedAlgorithms=n.SupportedAlgorithms;n=e("./utf8");r.UnicodeNormalizationForm=n.UnicodeNormalizationForm;e=e("./wordlist");r.Wordlist=e.Wordlist;},{"./abi-coder":59,"./address":60,"./base64":61,"./bignumber":63,"./bytes":64,"./hash":65,"./hdnode":66,"./hmac":67,"./interface":69,"./json-wallet":70,"./keccak256":71,"./networks":72,"./properties":74,"./random-bytes":75,"./rlp":76,"./secp256k1":77,"./sha2":79,"./signing-key":81,"./solidity":82,"./transaction":83,"./units":84,"./utf8":85,"./web":86,"./wordlist":87}],69:[function(e,t,r){var n,i=this&&this.__extends||(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t;}||function(e,t){for(var r in t){ t.hasOwnProperty(r)&&(e[r]=t[r]); }},function(e,t){function r(){this.constructor=e;}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r);}),o=this&&this.__importStar||function(e){if(e&&e.__esModule){ return e; }var t={};if(null!=e){ for(var r in e){ Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]); } }return t.default=e,t};Object.defineProperty(r,"__esModule",{value:!0});var s,a=e("./address"),f=e("./abi-coder"),u=e("./bignumber"),c=e("./bytes"),l=e("./hash"),h=e("./keccak256"),d=e("./properties"),p=o(e("../errors")),y=function(e){d.setType(this,"Indexed"),d.defineReadOnly(this,"hash",e);},e=function(e){for(var t in d.setType(this,"Description"),e){ d.defineReadOnly(this,t,d.deepCopy(e[t],!0)); }Object.freeze(this);},m=(i(g,s=e),g.prototype.encode=function(e,t){c.isHexString(e)||p.throwError("invalid contract bytecode",p.INVALID_ARGUMENT,{arg:"bytecode",value:e}),p.checkArgumentCount(t.length,this.inputs.length," in Interface constructor");try{return e+f.defaultAbiCoder.encode(this.inputs,t).substring(2)}catch(e){p.throwError("invalid constructor argument",p.INVALID_ARGUMENT,{arg:e.arg,reason:e.reason,value:e.value});}return null},g);function g(){return null!==s&&s.apply(this,arguments)||this}var v,b=(i(w,v=e),w.prototype.encode=function(e){p.checkArgumentCount(e.length,this.inputs.length," in interface function "+this.name);try{return this.sighash+f.defaultAbiCoder.encode(this.inputs,e).substring(2)}catch(e){p.throwError("invalid input argument",p.INVALID_ARGUMENT,{arg:e.arg,reason:e.reason,value:e.value});}return null},w.prototype.decode=function(t){try{return f.defaultAbiCoder.decode(this.outputs,c.arrayify(t))}catch(e){p.throwError("invalid data for function output",p.INVALID_ARGUMENT,{arg:"data",errorArg:e.arg,errorValue:e.value,value:t,reason:e.reason});}},w);function w(){return null!==v&&v.apply(this,arguments)||this}var _,M=(i(A,_=e),A);function A(){return null!==_&&_.apply(this,arguments)||this}var E,S=(i(k,E=e),k.prototype.encodeTopics=function(e){var n=this;e.length>this.inputs.length&&p.throwError("too many arguments for "+this.name,p.UNEXPECTED_ARGUMENT,{maxCount:e.length,expectedCount:this.inputs.length});var i=[];for(this.anonymous||i.push(this.topic),e.forEach(function(e,t){var r=n.inputs[t];r.indexed?null==e?i.push(null):"string"===r.type?i.push(l.id(e)):"bytes"===r.type?i.push(h.keccak256(e)):-1!==r.type.indexOf("[")||"tuple"===r.type.substring(0,5)?p.throwError("filtering with tuples or arrays not implemented yet; bug us on GitHub",p.NOT_IMPLEMENTED,{operation:"filter(array|tuple)"}):("address"===r.type&&a.getAddress(e),i.push(c.hexZeroPad(c.hexlify(e),32).toLowerCase())):null!=e&&p.throwError("cannot filter non-indexed parameters; must be null",p.INVALID_ARGUMENT,{argument:r.name||t,value:e});});i.length&&null===i[i.length-1];){ i.pop(); }return i},k.prototype.decode=function(e,r){null==r||this.anonymous||(r=r.slice(1));var n,i=[],o=[],s=[];this.inputs.forEach(function(e,t){e.indexed?"string"===e.type||"bytes"===e.type||0<=e.type.indexOf("[")||"tuple"===e.type.substring(0,5)?(i.push({type:"bytes32",name:e.name||""}),s.push(!0)):(i.push(e),s.push(!1)):(o.push(e),s.push(!1));}),null!=r&&(n=f.defaultAbiCoder.decode(i,c.concat(r)));var a=f.defaultAbiCoder.decode(o,c.arrayify(e)),u={},l=0,h=0;return this.inputs.forEach(function(e,t){e.indexed?null==r?u[t]=new y(null):s[t]?u[t]=new y(n[h++]):u[t]=n[h++]:u[t]=a[l++],e.name&&(u[e.name]=u[t]);}),u.length=this.inputs.length,new M(u)},k);function k(){return null!==E&&E.apply(this,arguments)||this}var N,x=(i(P,N=e),P);function P(){return null!==N&&N.apply(this,arguments)||this}var I,T=(i(R,I=e),R);function R(){return null!==I&&I.apply(this,arguments)||this}function O(e){switch(e.type){case"constructor":var t=new m({inputs:e.inputs,payable:null==e.payable||!!e.payable});this.deployFunction||(this.deployFunction=t);break;case"function":var r=f.formatSignature(e).replace(/tuple/g,""),n=l.id(r).substring(0,10),i=!1;null!=e.constant?i=e.constant:null!=e.stateMutability&&(i="view"==e.stateMutability||"pure"==e.stateMutability);t=new b({inputs:e.inputs,outputs:e.outputs,gas:e.gas,payable:null==e.payable||!!e.payable,type:i?"call":"transaction",name:e.name,signature:r,sighash:n});e.name&&(null==this.functions[e.name]?d.defineReadOnly(this.functions,e.name,t):p.warn("WARNING: Multiple definitions for "+e.name)),null==this.functions[t.signature]&&d.defineReadOnly(this.functions,t.signature,t);break;case"event":r=f.formatSignature(e).replace(/tuple/g,""),t=new S({name:e.name,signature:r,inputs:e.inputs,topic:l.id(r),anonymous:!!e.anonymous});e.name&&null==this.events[e.name]&&d.defineReadOnly(this.events,e.name,t),null==this.events[t.signature]&&d.defineReadOnly(this.events,t.signature,t);break;case"receive":case"fallback":break;default:p.warn("WARNING: unsupported ABI type - "+e.type);}}C.prototype.parseTransaction=function(e){var t,r=e.data.substring(0,10).toLowerCase();for(t in this.functions){ if(-1!==t.indexOf("(")){var n=this.functions[t];if(n.sighash===r){var i=f.defaultAbiCoder.decode(n.inputs,"0x"+e.data.substring(10));return new x({args:i,decode:n.decode,name:n.name,signature:n.signature,sighash:n.sighash,value:u.bigNumberify(e.value||"0")})}} }return null},C.prototype.parseLog=function(e){for(var t in this.events){ if(-1!==t.indexOf("(")){t=this.events[t];if(!t.anonymous&&t.topic===e.topics[0]){ return new T({decode:t.decode,name:t.name,signature:t.signature,topic:t.topic,values:t.decode(e.data,e.topics)}) }} }return null},C.isInterface=function(e){return d.isType(e,"Interface")},C.isIndexed=function(e){return d.isType(e,"Indexed")},e=C;function C(t){if(p.checkNew(this,C),"string"==typeof t){try{t=JSON.parse(t);}catch(e){p.throwError("could not parse ABI JSON",p.INVALID_ARGUMENT,{arg:"abi",errorMessage:e.message,value:t});}if(!Array.isArray(t)){ return p.throwError("invalid abi",p.INVALID_ARGUMENT,{arg:"abi",value:t}),null }}d.defineReadOnly(this,"functions",{}),d.defineReadOnly(this,"events",{});var r=[];t.forEach(function(e){"string"==typeof e&&(e=f.parseSignature(e)),r.push(e);}),d.defineReadOnly(this,"abi",d.deepCopy(r,!0)),r.forEach(O,this),this.deployFunction||O.call(this,{type:"constructor",inputs:[]}),d.setType(this,"Interface");}r.Interface=e;},{"../errors":5,"./abi-coder":59,"./address":60,"./bignumber":63,"./bytes":64,"./hash":65,"./keccak256":71,"./properties":74}],70:[function(e,t,r){Object.defineProperty(r,"__esModule",{value:!0});var n=e("./address");function i(e){try{var t=JSON.parse(e);}catch(e){return !1}return t.encseed&&t.ethaddr}function o(e){try{var t=JSON.parse(e);}catch(e){return !1}return !(!t.version||parseInt(t.version)!==t.version||3!==parseInt(t.version))}r.isCrowdsaleWallet=i,r.isSecretStorageWallet=o,r.getJsonWalletAddress=function(e){if(i(e)){ try{return n.getAddress(JSON.parse(e).ethaddr)}catch(e){return null} }if(o(e)){ try{return n.getAddress(JSON.parse(e).address)}catch(e){return null} }return null};},{"./address":60}],71:[function(e,t,r){Object.defineProperty(r,"__esModule",{value:!0});var n=e("js-sha3"),i=e("./bytes");r.keccak256=function(e){return "0x"+n.keccak_256(i.arrayify(e))};},{"./bytes":64,"js-sha3":40}],72:[function(e,t,r){var n=this&&this.__importStar||function(e){if(e&&e.__esModule){ return e; }var t={};if(null!=e){ for(var r in e){ Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]); } }return t.default=e,t};Object.defineProperty(r,"__esModule",{value:!0});var i=n(e("../errors"));function o(r){return function(e){var t=[];return e.InfuraProvider&&t.push(new e.InfuraProvider(r)),e.EtherscanProvider&&t.push(new e.EtherscanProvider(r)),0===t.length?null:e.FallbackProvider?new e.FallbackProvider(t):t[0]}}function s(t,r){return function(e){return e.JsonRpcProvider?new e.JsonRpcProvider(t,r):null}}var n={chainId:1,ensAddress:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",name:"homestead",_defaultProvider:o("homestead")},e={chainId:3,ensAddress:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",name:"ropsten",_defaultProvider:o("ropsten")},a={unspecified:{chainId:0,name:"unspecified"},homestead:n,mainnet:n,morden:{chainId:2,name:"morden"},ropsten:e,testnet:e,rinkeby:{chainId:4,ensAddress:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",name:"rinkeby",_defaultProvider:o("rinkeby")},goerli:{chainId:5,ensAddress:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",name:"goerli",_defaultProvider:o("goerli")},kovan:{chainId:42,name:"kovan",_defaultProvider:o("kovan")},classic:{chainId:61,name:"classic",_defaultProvider:s("https://web3.gastracker.io","classic")},classicTestnet:{chainId:62,name:"classicTestnet",_defaultProvider:s("https://web3.gastracker.io/morden","classicTestnet")}};r.getNetwork=function(e){if(null==e){ return null; }if("number"==typeof e){for(var t in a){t=a[t];if(t.chainId===e){ return {name:t.name,chainId:t.chainId,ensAddress:t.ensAddress||null,_defaultProvider:t._defaultProvider||null} }}return {chainId:e,name:"unknown"}}if("string"!=typeof e){ return (r=a[e.name])?(0!==e.chainId&&e.chainId!==r.chainId&&i.throwError("network chainId mismatch",i.INVALID_ARGUMENT,{arg:"network",value:e}),{name:e.name,chainId:r.chainId,ensAddress:e.ensAddress||r.ensAddress||null,_defaultProvider:e._defaultProvider||r._defaultProvider||null}):("number"!=typeof e.chainId&&i.throwError("invalid network chainId",i.INVALID_ARGUMENT,{arg:"network",value:e}),e); }var r=a[e];return null==r?null:{name:r.name,chainId:r.chainId,ensAddress:r.ensAddress,_defaultProvider:r._defaultProvider||null}};},{"../errors":5}],73:[function(e,t,r){Object.defineProperty(r,"__esModule",{value:!0});var g=e("../utils/bytes"),v=e("./hmac");r.pbkdf2=function(e,t,r,n,i){var o;e=g.arrayify(e),t=g.arrayify(t);var s,a,u=1,l=new Uint8Array(n),h=new Uint8Array(t.length+4);h.set(t);for(var f=1;f<=u;f++){h[t.length]=f>>24&255,h[t.length+1]=f>>16&255,h[t.length+2]=f>>8&255,h[t.length+3]=255&f;var c=v.computeHmac(i,e,h);o||(o=c.length,a=new Uint8Array(o),s=n-((u=Math.ceil(n/o))-1)*o),a.set(c);for(var d=1;d<r;d++){ for(var c=v.computeHmac(i,e,c),p=0;p<o;p++){ a[p]^=c[p]; } }var y=(f-1)*o,m=f===u?s:o;l.set(g.arrayify(a).slice(0,m),y);}return g.arrayify(l)};},{"../utils/bytes":64,"./hmac":67}],74:[function(e,t,r){var n=this&&this.__importStar||function(e){if(e&&e.__esModule){ return e; }var t={};if(null!=e){ for(var r in e){ Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]); } }return t.default=e,t};Object.defineProperty(r,"__esModule",{value:!0});var i=n(e("../errors"));function s(e,t,r){Object.defineProperty(e,t,{enumerable:!0,value:r,writable:!1});}function a(e,t){return e&&e._ethersType===t}r.defineReadOnly=s,r.setType=function(e,t){Object.defineProperty(e,"_ethersType",{configurable:!1,value:t,writable:!1});},r.isType=a,r.resolveProperties=function(r){var n={},i=[];return Object.keys(r).forEach(function(t){var e=r[t];e instanceof Promise?i.push(e.then(function(e){return n[t]=e,null})):n[t]=e;}),Promise.all(i).then(function(){return n})},r.checkProperties=function(t,r){t&&"object"==typeof t||i.throwError("invalid object",i.INVALID_ARGUMENT,{argument:"object",value:t}),Object.keys(t).forEach(function(e){r[e]||i.throwError("invalid object key - "+e,i.INVALID_ARGUMENT,{argument:"transaction",value:t,key:e});});},r.shallowCopy=function(e){var t,r={};for(t in e){ r[t]=e[t]; }return r};var u={boolean:!0,number:!0,string:!0};r.deepCopy=function t(e,r){if(null==e||u[typeof e]){ return e; }if(Array.isArray(e)){var n=e.map(function(e){return t(e,r)});return r&&Object.freeze(n),n}if("object"==typeof e){if(a(e,"BigNumber")){ return e; }if(a(e,"Description")){ return e; }if(a(e,"Indexed")){ return e; }var i,n={};for(i in e){var o=e[i];void 0!==o&&s(n,i,t(o,r));}return r&&Object.freeze(n),n}if("function"==typeof e){ return e; }throw new Error("Cannot deepCopy "+typeof e)},r.inheritable=function n(i){return function(e){var t,r;r=i,(t=e).super_=r,t.prototype=Object.create(r.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),s(e,"inherits",n(e));}};},{"../errors":5}],75:[function(o,e,s){!function(i){!function(){Object.defineProperty(s,"__esModule",{value:!0});var t=o("../utils/bytes"),e=o("../utils/properties"),r=i.crypto||i.msCrypto;function n(e){if(e<=0||1024<e||parseInt(String(e))!=e){ throw new Error("invalid length"); }e=new Uint8Array(e);return r.getRandomValues(e),t.arrayify(e)}r&&r.getRandomValues||(console.log("WARNING: Missing strong random number source; using weak randomBytes"),r={getRandomValues:function(e){for(var t=0;t<20;t++){ for(var r=0;r<e.length;r++){ t?e[r]^=Math.trunc(256*Math.random()):e[r]=Math.trunc(256*Math.random()); } }return e},_weakCrypto:!0}),s.randomBytes=n,!0===r._weakCrypto&&e.defineReadOnly(n,"_weakCrypto",!0);}.call(this);}.call(this,"undefined"!=typeof commonjsGlobal?commonjsGlobal:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});},{"../utils/bytes":64,"../utils/properties":74}],76:[function(e,t,r){Object.defineProperty(r,"__esModule",{value:!0});var i=e("./bytes");function o(e){for(var t=[];e;){ t.unshift(255&e),e>>=8; }return t}function s(e,t,r){for(var n=0,i=0;i<r;i++){ n=256*n+e[t+i]; }return n}function a(e,t,r,n){for(var i=[];r<t+1+n;){var o=u(e,r);if(i.push(o.result),t+1+n<(r+=o.consumed)){ throw new Error("invalid rlp") }}return {consumed:1+n,result:i}}function u(e,t){if(0===e.length){ throw new Error("invalid rlp data"); }if(248<=e[t]){if(t+1+(r=e[t]-247)>e.length){ throw new Error("too short"); }if(t+1+r+(n=s(e,t+1,r))>e.length){ throw new Error("to short"); }return a(e,t,t+1+r,r+n)}if(192<=e[t]){if(t+1+(n=e[t]-192)>e.length){ throw new Error("invalid rlp data"); }return a(e,t,t+1,n)}if(184<=e[t]){var r;if(t+1+(r=e[t]-183)>e.length){ throw new Error("invalid rlp data"); }if(t+1+r+(n=s(e,t+1,r))>e.length){ throw new Error("invalid rlp data"); }return {consumed:1+r+n,result:i.hexlify(e.slice(t+1+r,t+1+r+n))}}if(128<=e[t]){var n;if(t+1+(n=e[t]-128)>e.length){ throw new Error("invalid rlp data"); }return {consumed:1+n,result:i.hexlify(e.slice(t+1,t+1+n))}}return {consumed:1,result:i.hexlify(e[t])}}r.encode=function(e){return i.hexlify(function t(e){if(Array.isArray(e)){var r=[];return e.forEach(function(e){r=r.concat(t(e));}),r.length<=55?(r.unshift(192+r.length),r):((n=o(r.length)).unshift(247+n.length),n.concat(r))}var n,e=Array.prototype.slice.call(i.arrayify(e));return 1===e.length&&e[0]<=127?e:e.length<=55?(e.unshift(128+e.length),e):((n=o(e.length)).unshift(183+n.length),n.concat(e))}(e))},r.decode=function(e){var t=i.arrayify(e);if((e=u(t,0)).consumed!==t.length){ throw new Error("invalid rlp data"); }return e.result};},{"./bytes":64}],77:[function(e,t,r){var n=this&&this.__importStar||function(e){if(e&&e.__esModule){ return e; }var t={};if(null!=e){ for(var r in e){ Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]); } }return t.default=e,t};Object.defineProperty(r,"__esModule",{value:!0});var i=e("elliptic"),o=e("./address"),s=e("./bytes"),a=e("./hash"),u=e("./keccak256"),l=e("./properties"),h=n(e("../errors")),f=null;function c(){return f=f||new i.ec("secp256k1")}var d=(p.prototype.sign=function(e){e=c().keyFromPrivate(s.arrayify(this.privateKey)).sign(s.arrayify(e),{canonical:!0});return {recoveryParam:e.recoveryParam,r:s.hexZeroPad("0x"+e.r.toString(16),32),s:s.hexZeroPad("0x"+e.s.toString(16),32),v:27+e.recoveryParam}},p.prototype.computeSharedSecret=function(e){var t=c().keyFromPrivate(s.arrayify(this.privateKey)),e=c().keyFromPublic(s.arrayify(y(e)));return s.hexZeroPad("0x"+t.derive(e.getPublic()).toString(16),32)},p.prototype._addPoint=function(e){var t=c().keyFromPublic(s.arrayify(this.publicKey)),e=c().keyFromPublic(s.arrayify(e));return "0x"+t.pub.add(e.pub).encodeCompressed("hex")},p);function p(e){e=c().keyFromPrivate(s.arrayify(e));l.defineReadOnly(this,"privateKey",s.hexlify(e.priv.toArray("be",32))),l.defineReadOnly(this,"publicKey","0x"+e.getPublic(!1,"hex")),l.defineReadOnly(this,"compressedPublicKey","0x"+e.getPublic(!0,"hex")),l.defineReadOnly(this,"publicKeyBytes",e.getPublic().encode(null,!0));}function y(e,t){e=s.arrayify(e);if(32!==e.length){ return 33===e.length?t?s.hexlify(e):"0x"+c().keyFromPublic(e).getPublic(!1,"hex"):65===e.length?t?"0x"+c().keyFromPublic(e).getPublic(!0,"hex"):s.hexlify(e):(h.throwError("invalid public or private key",h.INVALID_ARGUMENT,{arg:"key",value:"[REDACTED]"}),null); }e=new d(e);return t?e.compressedPublicKey:e.publicKey}function m(e){e="0x"+y(e).slice(4);return o.getAddress("0x"+u.keccak256(e).substring(26))}function g(e,t){var r=s.splitSignature(t),t={r:s.arrayify(r.r),s:s.arrayify(r.s)};return "0x"+c().recoverPubKey(s.arrayify(e),t,r.recoveryParam).encode("hex",!1)}function v(e,t){return m(g(s.arrayify(e),t))}r.KeyPair=d,r.computePublicKey=y,r.computeAddress=m,r.recoverPublicKey=g,r.recoverAddress=v,r.verifyMessage=function(e,t){return v(a.hashMessage(e),t)};},{"../errors":5,"./address":60,"./bytes":64,"./hash":65,"./keccak256":71,"./properties":74,elliptic:12}],78:[function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},i=this&&this.__importStar||function(e){if(e&&e.__esModule){ return e; }var t={};if(null!=e){ for(var r in e){ Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]); } }return t.default=e,t};Object.defineProperty(r,"__esModule",{value:!0});var w=n(e("aes-js")),_=n(e("scrypt-js")),M=n(e("uuid")),A=e("./signing-key"),s=i(e("./hdnode")),a=e("./address"),E=e("./bytes"),c=e("./pbkdf2"),S=e("./keccak256"),u=e("./utf8"),k=e("./random-bytes");function d(e){return "string"==typeof e&&"0x"!==e.substring(0,2)&&(e="0x"+e),E.arrayify(e)}function N(e,t){for(e=String(e);e.length<t;){ e="0"+e; }return e}function x(e){return "string"==typeof e?u.toUtf8Bytes(e,u.UnicodeNormalizationForm.NFKC):E.arrayify(e)}function p(e,t){for(var r=e,n=t.toLowerCase().split("/"),i=0;i<n.length;i++){var o,s=null;for(o in r){ if(o.toLowerCase()===n[i]){s=r[o];break} }if(null===s){ return null; }r=s;}return r}r.decryptCrowdsale=function(e,t){var r=JSON.parse(e);t=x(t);var n=a.getAddress(p(r,"ethaddr"));if(!(e=d(p(r,"encseed")))||e.length%16!=0){ throw new Error("invalid encseed"); }for(var r=c.pbkdf2(t,t,2e3,32,"sha256").slice(0,16),t=e.slice(0,16),e=e.slice(16),t=new w.default.ModeOfOperation.cbc(r,t),i=E.arrayify(t.decrypt(e)),i=w.default.padding.pkcs7.strip(i),o="",s=0;s<i.length;s++){ o+=String.fromCharCode(i[s]); }if(e=u.toUtf8Bytes(o),(e=new A.SigningKey(S.keccak256(e))).address!==n){ throw new Error("corrupt crowdsale wallet"); }return e},r.decrypt=function(e,t,u){function l(e,t){var r=d(p(h,"crypto/ciphertext"));if(E.hexlify((o=e.slice(16,32),S.keccak256(E.concat([o,r])))).substring(2)!==p(h,"crypto/mac").toLowerCase()){ return t(new Error("invalid password")),null; }var n=function(e,t){if("aes-128-ctr"!==p(h,"crypto/cipher")){ return null; }var r=d(p(h,"crypto/cipherparams/iv")),r=new w.default.Counter(r),r=new w.default.ModeOfOperation.ctr(e,r);return E.arrayify(r.decrypt(t))}(e.slice(0,16),r),i=e.slice(32,64);if(!n){ return t(new Error("unsupported cipher")),null; }var o=new A.SigningKey(n);if(h.address&&o.address!==a.getAddress(h.address)){ return t(new Error("address mismatch")),null; }if(r=p(h,"x-ethers/locale"),"0.1"===p(h,"x-ethers/version")&&(null==r||"en"===r)){e=d(p(h,"x-ethers/mnemonicCiphertext")),r=d(p(h,"x-ethers/mnemonicCounter")),r=new w.default.Counter(r),i=new w.default.ModeOfOperation.ctr(i,r),r=p(h,"x-ethers/path")||s.defaultPath,e=E.arrayify(i.decrypt(e)),e=s.entropyToMnemonic(e),r=s.fromMnemonic(e).derivePath(r);if(r.privateKey!=E.hexlify(n)){ return t(new Error("mnemonic mismatch")),null; }o=new A.SigningKey(r);}return o}var h=JSON.parse(e),f=x(t);return new Promise(function(n,i){var e=p(h,"crypto/kdf");if(e&&"string"==typeof e){ if("scrypt"===e.toLowerCase()){var t=d(p(h,"crypto/kdfparams/salt")),r=parseInt(p(h,"crypto/kdfparams/n")),o=parseInt(p(h,"crypto/kdfparams/r")),s=parseInt(p(h,"crypto/kdfparams/p"));r&&o&&s?0==(r&r-1)?32===(a=parseInt(p(h,"crypto/kdfparams/dklen")))?(u&&u(0),_.default(f,t,r,o,s,64,function(e,t,r){if(e){ e.progress=t,i(e); }else if(r){r=E.arrayify(r);r=l(r,i);r&&(u&&u(1),n(r));}else if(u){ return u(t) }})):i(new Error("unsupported key-derivation derived-key length")):i(new Error("unsupported key-derivation function parameter value for N")):i(new Error("unsupported key-derivation function parameters"));}else if("pbkdf2"===e.toLowerCase()){t=d(p(h,"crypto/kdfparams/salt")),s=null,e=p(h,"crypto/kdfparams/prf");if("hmac-sha256"===e){ s="sha256"; }else{if("hmac-sha512"!==e){ return void i(new Error("unsupported prf")); }s="sha512";}var a,e=parseInt(p(h,"crypto/kdfparams/c"));32===(a=parseInt(p(h,"crypto/kdfparams/dklen")))?(s=c.pbkdf2(f,t,e,a,s),(s=l(s,i))&&n(s)):i(new Error("unsupported key-derivation derived-key length"));}else { i(new Error("unsupported key-derivation function")); } }else { i(new Error("unsupported key-derivation function")); }})},r.encrypt=function(e,t,u,l){"function"!=typeof u||l||(l=u,u={}),u=u||{};var h=null;if(32!==(h=A.SigningKey.isSigningKey(e)?E.arrayify(e.privateKey):E.arrayify(e)).length){ throw new Error("invalid private key"); }var r=x(t),f=null;if(u.entropy&&(f=E.arrayify(u.entropy)),u.mnemonic){ if(f){if(s.entropyToMnemonic(f)!==u.mnemonic){ throw new Error("entropy and mnemonic mismatch") }}else { f=E.arrayify(s.mnemonicToEntropy(u.mnemonic,u.wordlist)); } }var c=u.path;f&&!c&&(c=s.defaultPath);var d=(d=u.client)||"ethers.js",p=null,p=u.salt?E.arrayify(u.salt):k.randomBytes(32),y=null;if(u.iv){if(16!==(y=E.arrayify(u.iv)).length){ throw new Error("invalid iv") }}else { y=k.randomBytes(16); }var m=null;if(u.uuid){if(16!==(m=E.arrayify(u.uuid)).length){ throw new Error("invalid uuid") }}else { m=k.randomBytes(16); }var g=1<<17,v=8,b=1;return u.scrypt&&(u.scrypt.N&&(g=u.scrypt.N),u.scrypt.r&&(v=u.scrypt.r),u.scrypt.p&&(b=u.scrypt.p)),new Promise(function(s,a){l&&l(0),_.default(r,p,g,v,b,64,function(e,t,r){if(e){ e.progress=t,a(e); }else if(r){var n=(r=E.arrayify(r)).slice(0,16),i=r.slice(16,32),o=r.slice(32,64),e=new A.SigningKey(h).address,r=new w.default.Counter(y),r=new w.default.ModeOfOperation.ctr(n,r),r=E.arrayify(r.encrypt(h)),i=S.keccak256(E.concat([i,r])),e={address:e.substring(2).toLowerCase(),id:M.default.v4({random:m}),version:3,Crypto:{cipher:"aes-128-ctr",cipherparams:{iv:E.hexlify(y).substring(2)},ciphertext:E.hexlify(r).substring(2),kdf:"scrypt",kdfparams:{salt:E.hexlify(p).substring(2),n:g,dklen:32,p:b,r:v},mac:i.substring(2)}};f&&(r=k.randomBytes(16),i=new w.default.Counter(r),o=new w.default.ModeOfOperation.ctr(o,i),i=E.arrayify(o.encrypt(f)),o=(o=new Date).getUTCFullYear()+"-"+N(o.getUTCMonth()+1,2)+"-"+N(o.getUTCDate(),2)+"T"+N(o.getUTCHours(),2)+"-"+N(o.getUTCMinutes(),2)+"-"+N(o.getUTCSeconds(),2)+".0Z",e["x-ethers"]={client:d,gethFilename:"UTC--"+o+"--"+e.address,mnemonicCounter:E.hexlify(r).substring(2),mnemonicCiphertext:E.hexlify(i).substring(2),path:c,version:"0.1"},u.wordlist&&"string"==typeof u.wordlist.locale&&(e["x-ethers"].locale=u.wordlist.locale)),l&&l(1),s(JSON.stringify(e));}else if(l){ return l(t) }});})};},{"./address":60,"./bytes":64,"./hdnode":66,"./keccak256":71,"./pbkdf2":73,"./random-bytes":75,"./signing-key":81,"./utf8":85,"aes-js":8,"scrypt-js":44,uuid:48}],79:[function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});var i=n(e("hash.js")),o=e("./bytes");r.ripemd160=function(e){return "0x"+i.default.ripemd160().update(o.arrayify(e)).digest("hex")},r.sha256=function(e){return "0x"+i.default.sha256().update(o.arrayify(e)).digest("hex")},r.sha512=function(e){return "0x"+i.default.sha512().update(o.arrayify(e)).digest("hex")};},{"./bytes":64,"hash.js":26}],80:[function(e,t,r){Object.defineProperty(r,"__esModule",{value:!0}),e("setimmediate"),r.platform="browser";},{setimmediate:45}],81:[function(e,t,r){var n=this&&this.__importStar||function(e){if(e&&e.__esModule){ return e; }var t={};if(null!=e){ for(var r in e){ Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]); } }return t.default=e,t};Object.defineProperty(r,"__esModule",{value:!0});var i=e("./hdnode"),o=e("./bytes"),s=e("./properties"),a=e("./secp256k1"),u=n(e("../errors")),e=(l.prototype.signDigest=function(e){return this.keyPair.sign(e)},l.prototype.computeSharedSecret=function(e){return this.keyPair.computeSharedSecret(o.arrayify(e))},l.isSigningKey=function(e){return s.isType(e,"SigningKey")},l);function l(t){u.checkNew(this,l);var e=null,e=i.HDNode.isHDNode(t)?(s.defineReadOnly(this,"mnemonic",t.mnemonic),s.defineReadOnly(this,"path",t.path),o.arrayify(t.privateKey)):("string"==typeof t&&t.match(/^[0-9a-f]*$/i)&&64===t.length&&(t="0x"+t),o.arrayify(t));try{32!==e.length&&u.throwError("exactly 32 bytes required",u.INVALID_ARGUMENT,{arg:"privateKey",value:"[REDACTED]"});}catch(e){t={arg:"privateKey",reason:e.reason,value:"[REDACTED]"};e.value&&("number"==typeof e.value.length&&(t.length=e.value.length),t.type=typeof e.value),u.throwError("invalid private key",e.code,t);}s.defineReadOnly(this,"privateKey",o.hexlify(e)),s.defineReadOnly(this,"keyPair",new a.KeyPair(e)),s.defineReadOnly(this,"publicKey",this.keyPair.publicKey),s.defineReadOnly(this,"address",a.computeAddress(this.keyPair.publicKey)),s.setType(this,"SigningKey");}r.SigningKey=e;},{"../errors":5,"./bytes":64,"./hdnode":66,"./properties":74,"./secp256k1":77}],82:[function(e,t,r){Object.defineProperty(r,"__esModule",{value:!0});var u=e("./bignumber"),l=e("./bytes"),h=e("./utf8"),n=e("./keccak256"),i=e("./sha2"),f=new RegExp("^bytes([0-9]+)$"),c=new RegExp("^(u?int)([0-9]*)$"),d=new RegExp("^(.*)\\[([0-9]*)\\]$"),p="0000000000000000000000000000000000000000000000000000000000000000";function o(e,r){if(e.length!=r.length){ throw new Error("type/value count mismatch"); }var n=[];return e.forEach(function(e,t){n.push(function t(e,r,n){switch(e){case"address":return n?l.padZeros(r,32):l.arrayify(r);case"string":return h.toUtf8Bytes(r);case"bytes":return l.arrayify(r);case"bool":return r=r?"0x01":"0x00",n?l.padZeros(r,32):l.arrayify(r)}var i=e.match(c);if(i){if((o=parseInt(i[2]||"256"))%8!=0||0===o||256<o){ throw new Error("invalid number type - "+e); }return n&&(o=256),r=u.bigNumberify(r).toTwos(o),l.padZeros(r,o/8)}if(i=e.match(f)){var o=parseInt(i[1]);if(String(o)!=i[1]||0===o||32<o){ throw new Error("invalid number type - "+e); }if(l.arrayify(r).byteLength!==o){ throw new Error("invalid value for "+e); }return n?l.arrayify((r+p).substring(0,66)):r}if((i=e.match(d))&&Array.isArray(r)){var s=i[1];if(parseInt(i[2]||String(r.length))!=r.length){ throw new Error("invalid value for "+e); }var a=[];return r.forEach(function(e){a.push(t(s,e,!0));}),l.concat(a)}throw new Error("unknown type - "+e)}(e,r[t]));}),l.hexlify(l.concat(n))}r.pack=o,r.keccak256=function(e,t){return n.keccak256(o(e,t))},r.sha256=function(e,t){return i.sha256(o(e,t))};},{"./bignumber":63,"./bytes":64,"./keccak256":71,"./sha2":79,"./utf8":85}],83:[function(e,t,r){var n=this&&this.__importStar||function(e){if(e&&e.__esModule){ return e; }var t={};if(null!=e){ for(var r in e){ Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]); } }return t.default=e,t};Object.defineProperty(r,"__esModule",{value:!0});var i=e("../constants"),o=n(e("../errors")),s=e("./secp256k1"),a=e("./address"),u=e("./bignumber"),l=e("./bytes"),h=e("./keccak256"),f=e("./properties"),c=n(e("./rlp")),d=e("../providers/abstract-provider");function p(e){return "0x"===e?i.Zero:u.bigNumberify(e)}var y=[{name:"nonce",maxLength:32},{name:"gasPrice",maxLength:32},{name:"gasLimit",maxLength:32},{name:"to",length:20},{name:"value",maxLength:32},{name:"data"}],m={chainId:!0,data:!0,gasLimit:!0,gasPrice:!0,nonce:!0,to:!0,value:!0};r.serialize=function(r,e){f.checkProperties(r,m);var n=[];y.forEach(function(e){var t=r[e.name]||[],t=l.arrayify(l.hexlify(t));e.length&&t.length!==e.length&&0<t.length&&o.throwError("invalid length for "+e.name,o.INVALID_ARGUMENT,{arg:"transaction"+e.name,value:t}),e.maxLength&&(t=l.stripZeros(t)).length>e.maxLength&&o.throwError("invalid length for "+e.name,o.INVALID_ARGUMENT,{arg:"transaction"+e.name,value:t}),n.push(l.hexlify(t));}),null!=r.chainId&&0!==r.chainId&&(n.push(l.hexlify(r.chainId)),n.push("0x"),n.push("0x"));var t=c.encode(n);return e?(t=l.splitSignature(e),e=27+t.recoveryParam,9===n.length&&(n.pop(),n.pop(),n.pop(),e+=2*r.chainId+8),n.push(l.hexlify(e)),n.push(l.stripZeros(l.arrayify(t.r))),n.push(l.stripZeros(l.arrayify(t.s))),c.encode(n)):t},r.parse=function(e){9!==(n=c.decode(e)).length&&6!==n.length&&o.throwError("invalid raw transaction",o.INVALID_ARGUMENT,{arg:"rawTransactin",value:e});var t={nonce:p(n[0]).toNumber(),gasPrice:p(n[1]),gasLimit:p(n[2]),to:"0x"===(r=n[3])?null:a.getAddress(r),value:p(n[4]),data:n[5],chainId:0};if(6===n.length){ return t; }try{t.v=u.bigNumberify(n[6]).toNumber();}catch(e){return o.info(e),t}if(t.r=l.hexZeroPad(n[7],32),t.s=l.hexZeroPad(n[8],32),u.bigNumberify(t.r).isZero()&&u.bigNumberify(t.s).isZero()){ t.chainId=t.v,t.v=0; }else{t.chainId=Math.floor((t.v-35)/2),t.chainId<0&&(t.chainId=0);var r=t.v-27,n=n.slice(0,6);0!==t.chainId&&(n.push(l.hexlify(t.chainId)),n.push("0x"),n.push("0x"),r-=2*t.chainId+8);n=h.keccak256(c.encode(n));try{t.from=s.recoverAddress(n,{r:l.hexlify(t.r),s:l.hexlify(t.s),recoveryParam:r});}catch(e){o.info(e);}t.hash=h.keccak256(e);}return t},r.populateTransaction=function(e,t,r){d.Provider.isProvider(t)||o.throwError("missing provider",o.INVALID_ARGUMENT,{argument:"provider",value:t}),f.checkProperties(e,m);var n=f.shallowCopy(e);return null!=n.to&&(n.to=t.resolveName(n.to)),null==n.gasPrice&&(n.gasPrice=t.getGasPrice()),null==n.nonce&&(n.nonce=t.getTransactionCount(r)),null==n.gasLimit&&((e=f.shallowCopy(n)).from=r,n.gasLimit=t.estimateGas(e)),null==n.chainId&&(n.chainId=t.getNetwork().then(function(e){return e.chainId})),f.resolveProperties(n)};},{"../constants":3,"../errors":5,"../providers/abstract-provider":50,"./address":60,"./bignumber":63,"./bytes":64,"./keccak256":71,"./properties":74,"./rlp":76,"./secp256k1":77}],84:[function(e,t,r){var n=this&&this.__importStar||function(e){if(e&&e.__esModule){ return e; }var t={};if(null!=e){ for(var r in e){ Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]); } }return t.default=e,t};Object.defineProperty(r,"__esModule",{value:!0});var i,o=e("../constants"),s=n(e("../errors")),a=e("./bignumber"),u={};function l(e){return {decimals:e.length-1,tenPower:a.bigNumberify(e)}}function h(e){var t=u[String(e).toLowerCase()];if(!t&&"number"==typeof e&&parseInt(String(e))==e&&0<=e&&e<=256){for(var r="1",n=0;n<e;n++){ r+="0"; }t=l(r);}return t||s.throwError("invalid unitType",s.INVALID_ARGUMENT,{argument:"name",value:e}),t}function f(e,t){for(var r=h(t),t=(e=a.bigNumberify(e)).lt(o.Zero),n=(e=t?e.mul(o.NegativeOne):e).mod(r.tenPower).toString();n.length<r.decimals;){ n="0"+n; }n=n.match(/^([0-9]*[1-9]|0)(0*)/)[1];return e=e.div(r.tenPower).toString()+"."+n,e=t?"-"+e:e}function c(e,t){var r=h(t=null==t?18:t);if("string"==typeof e&&e.match(/^-?[0-9.,]+$/)||s.throwError("invalid decimal value",s.INVALID_ARGUMENT,{arg:"value",value:e}),0===r.decimals){ return a.bigNumberify(e); }var n="-"===e.substring(0,1);"."===(e=n?e.substring(1):e)&&s.throwError("missing value",s.INVALID_ARGUMENT,{arg:"value",value:e});t=e.split(".");2<t.length&&s.throwError("too many decimal points",s.INVALID_ARGUMENT,{arg:"value",value:e});var e=t[0],i=t[1],e=e||"0";for((i=i||"0").length>r.decimals&&s.throwError("underflow occurred",s.NUMERIC_FAULT,{operation:"division",fault:"underflow"});i.length<r.decimals;){ i+="0"; }t=a.bigNumberify(e),e=a.bigNumberify(i),e=t.mul(r.tenPower).add(e);return e=n?e.mul(o.NegativeOne):e}i="1",["wei","kwei","Mwei","Gwei","szabo","finney","ether"].forEach(function(e){var t=l(i);u[e.toLowerCase()]=t,u[String(t.decimals)]=t,i+="000";}),r.commify=function(e){var t=String(e).split(".");(2<t.length||!t[0].match(/^-?[0-9]*$/)||t[1]&&!t[1].match(/^[0-9]*$/)||"."===e||"-."===e)&&s.throwError("invalid value",s.INVALID_ARGUMENT,{argument:"value",value:e});var r=t[0],n="";for("-"===r.substring(0,1)&&(n="-",r=r.substring(1));"0"===r.substring(0,1);){ r=r.substring(1); }""===r&&(r="0"),e="",2===t.length&&(e="."+(t[1]||"0"));for(var i=[];r.length;){if(r.length<=3){i.unshift(r);break}var o=r.length-3;i.unshift(r.substring(o)),r=r.substring(0,o);}return n+i.join(",")+e},r.formatUnits=f,r.parseUnits=c,r.formatEther=function(e){return f(e,18)},r.parseEther=function(e){return c(e,18)};},{"../constants":3,"../errors":5,"./bignumber":63}],85:[function(e,t,r){Object.defineProperty(r,"__esModule",{value:!0});var s,n=e("../constants"),a=e("../errors"),h=e("./bytes");function i(e,t){(t=void 0===t?s.current:t)!=s.current&&(a.checkNormalize(),e=e.normalize(t));for(var r=[],n=0;n<e.length;n++){var i=e.charCodeAt(n);if(i<128){ r.push(i); }else if(i<2048){ r.push(i>>6|192),r.push(63&i|128); }else if(55296==(64512&i)){n++;var o=e.charCodeAt(n);if(n>=e.length||56320!=(64512&o)){ throw new Error("invalid utf-8 string"); }r.push((i=65536+((1023&i)<<10)+(1023&o))>>18|240),r.push(i>>12&63|128),r.push(i>>6&63|128),r.push(63&i|128);}else { r.push(i>>12|224),r.push(i>>6&63|128),r.push(63&i|128); }}return h.arrayify(r)}function o(e,t){e=h.arrayify(e);for(var r="",n=0;n<e.length;){var i=e[n++];if(i>>7!=0){var o=null,s=null;if(192==(224&i)){ o=1,s=127; }else if(224==(240&i)){ o=2,s=2047; }else{if(240!=(248&i)){if(t){ continue; }if(128==(192&i)){ throw new Error("invalid utf8 byte sequence; unexpected continuation byte"); }throw new Error("invalid utf8 byte sequence; invalid prefix")}o=3,s=65535;}if(n+o>e.length){if(!t){ throw new Error("invalid utf8 byte sequence; too short"); }for(;n<e.length&&e[n]>>6==2;n++){ }}else{for(var a=i&(1<<8-o-1)-1,u=0;u<o;u++){var l=e[n];if(128!=(192&l)){a=null;break}a=a<<6|63&l,n++;}if(null!==a){ if(a<=s){if(!t){ throw new Error("invalid utf8 byte sequence; overlong") }}else if(1114111<a){if(!t){ throw new Error("invalid utf8 byte sequence; out-of-range") }}else if(55296<=a&&a<=57343){if(!t){ throw new Error("invalid utf8 byte sequence; utf-16 surrogate") }}else { a<=65535?r+=String.fromCharCode(a):(a-=65536,r+=String.fromCharCode(55296+(a>>10&1023),56320+(1023&a))); } }else if(!t){ throw new Error("invalid utf8 byte sequence; invalid continuation byte") }}}else { r+=String.fromCharCode(i); }}return r}(e=s=r.UnicodeNormalizationForm||(r.UnicodeNormalizationForm={})).current="",e.NFC="NFC",e.NFD="NFD",e.NFKC="NFKC",e.NFKD="NFKD",r.toUtf8Bytes=i,r.toUtf8String=o,r.formatBytes32String=function(e){if(31<(e=i(e)).length){ throw new Error("bytes32 string must be less than 32 bytes"); }return h.hexlify(h.concat([e,n.HashZero]).slice(0,32))},r.parseBytes32String=function(e){var t=h.arrayify(e);if(32!==t.length){ throw new Error("invalid bytes32 - not 32 bytes long"); }if(0!==t[31]){ throw new Error("invalid bytes32 string - no null terminator"); }for(var r=31;0===t[r-1];){ r--; }return o(t.slice(0,r))};},{"../constants":3,"../errors":5,"./bytes":64}],86:[function(e,t,r){var n=this&&this.__importStar||function(e){if(e&&e.__esModule){ return e; }var t={};if(null!=e){ for(var r in e){ Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]); } }return t.default=e,t};Object.defineProperty(r,"__esModule",{value:!0});var f=e("xmlhttprequest"),i=e("./base64"),o=e("./properties"),s=e("./utf8"),c=n(e("../errors"));r.fetchJson=function(e,a,u){var t,r={},l=null,h=12e4;if("string"==typeof e){ l=e; }else if("object"==typeof e){if(null==e.url&&c.throwError("missing URL",c.MISSING_ARGUMENT,{arg:"url"}),l=e.url,"number"==typeof e.timeout&&0<e.timeout&&(h=e.timeout),e.headers){ for(var n in e.headers){ r[n.toLowerCase()]={key:n,value:String(e.headers[n])}; } }null!=e.user&&null!=e.password&&("https:"!==l.substring(0,6)&&!0!==e.allowInsecure&&c.throwError("basic authentication requires a secure https url",c.INVALID_ARGUMENT,{arg:"url",url:l,user:e.user,password:"[REDACTED]"}),t=e.user+":"+e.password,r.authorization={key:"Authorization",value:"Basic "+i.encode(s.toUtf8Bytes(t))});}return new Promise(function(n,i){function o(){null!=e&&(clearTimeout(e),e=null);}var s=new f.XMLHttpRequest,e=null,e=setTimeout(function(){null!=e&&(e=null,i(new Error("timeout")),setTimeout(function(){s.abort();},0));},h);a?(s.open("POST",l,!0),r["content-type"]={key:"Content-Type",value:"application/json"}):s.open("GET",l,!0),Object.keys(r).forEach(function(e){e=r[e];s.setRequestHeader(e.key,e.value);}),s.onreadystatechange=function(){if(4===s.readyState){if(200!=s.status){o();var e=new Error("invalid response - "+s.status);return e.statusCode=s.status,s.responseText&&(e.responseText=s.responseText),void i(e)}var t=null;try{t=JSON.parse(s.responseText);}catch(e){o();var r=new Error("invalid json response");return r.orginialError=e,r.responseText=s.responseText,null!=a&&(r.requestBody=a),r.url=l,void i(r)}if(u){ try{t=u(t);}catch(e){return o(),e.url=l,e.body=a,e.responseText=s.responseText,void i(e)} }o(),n(t);}},s.onerror=function(e){o(),i(e);};try{null!=a?s.send(a):s.send();}catch(e){o();var t=new Error("connection error");t.error=e,i(t);}})},r.poll=function(u,l){return l=l||{},null==(l=o.shallowCopy(l)).floor&&(l.floor=0),null==l.ceiling&&(l.ceiling=1e4),null==l.interval&&(l.interval=250),new Promise(function(r,n){var e=null,i=!1,o=function(){return !i&&(i=!0,e&&clearTimeout(e),!0)};l.timeout&&(e=setTimeout(function(){o()&&n(new Error("timeout"));},l.timeout));var s=l.fastRetry||null,a=0;!function t(){return u().then(function(e){return void 0!==e?o()&&r(e):l.onceBlock?l.onceBlock.once("block",t):i||(a++,(e=(e=l.interval*parseInt(String(Math.random()*Math.pow(2,a))))<l.floor?l.floor:e)>l.ceiling&&(e=l.ceiling),s&&(a--,e=s,s=null),setTimeout(t,e)),null},function(e){o()&&n(e);})}();})};},{"../errors":5,"./base64":61,"./properties":74,"./utf8":85,xmlhttprequest:49}],87:[function(n,e,o){!function(e){!function(){Object.defineProperty(o,"__esModule",{value:!0});var i=n("../utils/hash"),t=n("../utils/properties");o.check=function(e){for(var t=[],r=0;r<2048;r++){var n=e.getWord(r);if(r!==e.getWordIndex(n)){ return "0x"; }t.push(n);}return i.id(t.join("\n")+"\n")};var e=(r.prototype.split=function(e){return e.toLowerCase().split(/ +/g)},r.prototype.join=function(e){return e.join(" ")},r);function r(e){t.defineReadOnly(this,"locale",e);}o.Wordlist=e,o.register=function(e,t){t=t||e.locale;};}.call(this);}.call(this,"undefined"!=typeof commonjsGlobal?commonjsGlobal:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});},{"../utils/hash":65,"../utils/properties":74}],88:[function(e,t,r){var n,i=this&&this.__extends||(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t;}||function(e,t){for(var r in t){ t.hasOwnProperty(r)&&(e[r]=t[r]); }},function(e,t){function r(){this.constructor=e;}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r);}),o=this&&this.__importStar||function(e){if(e&&e.__esModule){ return e; }var t={};if(null!=e){ for(var r in e){ Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]); } }return t.default=e,t};Object.defineProperty(r,"__esModule",{value:!0});var s,a=e("./utils/bytes"),u=e("./utils/hash"),l=e("./utils/hdnode"),h=e("./utils/json-wallet"),f=e("./utils/keccak256"),c=e("./utils/properties"),d=e("./utils/random-bytes"),p=o(e("./utils/secret-storage")),y=e("./utils/signing-key"),m=e("./utils/transaction"),g=e("./abstract-signer"),v=e("./providers/abstract-provider"),b=o(e("./errors")),i=(s=g.Signer,i(w,s),Object.defineProperty(w.prototype,"address",{get:function(){return this.signingKey.address},enumerable:!0,configurable:!0}),Object.defineProperty(w.prototype,"mnemonic",{get:function(){return this.signingKey.mnemonic},enumerable:!0,configurable:!0}),Object.defineProperty(w.prototype,"path",{get:function(){return this.signingKey.path},enumerable:!0,configurable:!0}),Object.defineProperty(w.prototype,"privateKey",{get:function(){return this.signingKey.privateKey},enumerable:!0,configurable:!0}),w.prototype.connect=function(e){return v.Provider.isProvider(e)||b.throwError("invalid provider",b.INVALID_ARGUMENT,{argument:"provider",value:e}),new w(this.signingKey,e)},w.prototype.getAddress=function(){return Promise.resolve(this.address)},w.prototype.sign=function(e){var r=this;return c.resolveProperties(e).then(function(e){var t=m.serialize(e),t=r.signingKey.signDigest(f.keccak256(t));return m.serialize(e,t)})},w.prototype.signMessage=function(e){return Promise.resolve(a.joinSignature(this.signingKey.signDigest(u.hashMessage(e))))},w.prototype.getBalance=function(e){if(!this.provider){ throw new Error("missing provider"); }return this.provider.getBalance(this.address,e)},w.prototype.getTransactionCount=function(e){if(!this.provider){ throw new Error("missing provider"); }return this.provider.getTransactionCount(this.address,e)},w.prototype.sendTransaction=function(e){var t=this;if(!this.provider){ throw new Error("missing provider"); }return null==e.nonce&&((e=c.shallowCopy(e)).nonce=this.getTransactionCount("pending")),m.populateTransaction(e,this.provider,this.address).then(function(e){return t.sign(e).then(function(e){return t.provider.sendTransaction(e)})})},w.prototype.encrypt=function(e,t,r){if("function"!=typeof t||r||(r=t,t={}),r&&"function"!=typeof r){ throw new Error("invalid callback"); }return t=t||{},this.mnemonic&&((t=c.shallowCopy(t)).mnemonic=this.mnemonic,t.path=this.path),p.encrypt(this.privateKey,e,t,r)},w.createRandom=function(e){var t=d.randomBytes(16);(e=e||{}).extraEntropy&&(t=a.arrayify(f.keccak256(a.concat([t,e.extraEntropy])).substring(0,34)));t=l.entropyToMnemonic(t,e.locale);return w.fromMnemonic(t,e.path,e.locale)},w.fromEncryptedJson=function(e,t,r){if(h.isCrowdsaleWallet(e)){ try{r&&r(0);var n=p.decryptCrowdsale(e,t);return r&&r(1),Promise.resolve(new w(n))}catch(e){return Promise.reject(e)} }else if(h.isSecretStorageWallet(e)){ return p.decrypt(e,t,r).then(function(e){return new w(e)}); }return Promise.reject("invalid wallet JSON")},w.fromMnemonic=function(e,t,r){return t=t||l.defaultPath,new w(l.fromMnemonic(e,r).derivePath(t))},w);function w(e,t){var r=s.call(this)||this;return b.checkNew(r,w),y.SigningKey.isSigningKey(e)?c.defineReadOnly(r,"signingKey",e):c.defineReadOnly(r,"signingKey",new y.SigningKey(e)),c.defineReadOnly(r,"provider",t),r}r.Wallet=i;},{"./abstract-signer":2,"./errors":5,"./providers/abstract-provider":50,"./utils/bytes":64,"./utils/hash":65,"./utils/hdnode":66,"./utils/json-wallet":70,"./utils/keccak256":71,"./utils/properties":74,"./utils/random-bytes":75,"./utils/secret-storage":78,"./utils/signing-key":81,"./utils/transaction":83}],89:[function(e,t,r){Object.defineProperty(r,"__esModule",{value:!0});e=e("../wordlists/lang-en").langEn;r.en=e;},{"../wordlists/lang-en":90}],90:[function(e,t,r){var n,i=this&&this.__extends||(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t;}||function(e,t){for(var r in t){ t.hasOwnProperty(r)&&(e[r]=t[r]); }},function(e,t){function r(){this.constructor=e;}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r);});Object.defineProperty(r,"__esModule",{value:!0});var o,s=e("../utils/wordlist"),a="AbandonAbilityAbleAboutAboveAbsentAbsorbAbstractAbsurdAbuseAccessAccidentAccountAccuseAchieveAcidAcousticAcquireAcrossActActionActorActressActualAdaptAddAddictAddressAdjustAdmitAdultAdvanceAdviceAerobicAffairAffordAfraidAgainAgeAgentAgreeAheadAimAirAirportAisleAlarmAlbumAlcoholAlertAlienAllAlleyAllowAlmostAloneAlphaAlreadyAlsoAlterAlwaysAmateurAmazingAmongAmountAmusedAnalystAnchorAncientAngerAngleAngryAnimalAnkleAnnounceAnnualAnotherAnswerAntennaAntiqueAnxietyAnyApartApologyAppearAppleApproveAprilArchArcticAreaArenaArgueArmArmedArmorArmyAroundArrangeArrestArriveArrowArtArtefactArtistArtworkAskAspectAssaultAssetAssistAssumeAsthmaAthleteAtomAttackAttendAttitudeAttractAuctionAuditAugustAuntAuthorAutoAutumnAverageAvocadoAvoidAwakeAwareAwayAwesomeAwfulAwkwardAxisBabyBachelorBaconBadgeBagBalanceBalconyBallBambooBananaBannerBarBarelyBargainBarrelBaseBasicBasketBattleBeachBeanBeautyBecauseBecomeBeefBeforeBeginBehaveBehindBelieveBelowBeltBenchBenefitBestBetrayBetterBetweenBeyondBicycleBidBikeBindBiologyBirdBirthBitterBlackBladeBlameBlanketBlastBleakBlessBlindBloodBlossomBlouseBlueBlurBlushBoardBoatBodyBoilBombBoneBonusBookBoostBorderBoringBorrowBossBottomBounceBoxBoyBracketBrainBrandBrassBraveBreadBreezeBrickBridgeBriefBrightBringBriskBroccoliBrokenBronzeBroomBrotherBrownBrushBubbleBuddyBudgetBuffaloBuildBulbBulkBulletBundleBunkerBurdenBurgerBurstBusBusinessBusyButterBuyerBuzzCabbageCabinCableCactusCageCakeCallCalmCameraCampCanCanalCancelCandyCannonCanoeCanvasCanyonCapableCapitalCaptainCarCarbonCardCargoCarpetCarryCartCaseCashCasinoCastleCasualCatCatalogCatchCategoryCattleCaughtCauseCautionCaveCeilingCeleryCementCensusCenturyCerealCertainChairChalkChampionChangeChaosChapterChargeChaseChatCheapCheckCheeseChefCherryChestChickenChiefChildChimneyChoiceChooseChronicChuckleChunkChurnCigarCinnamonCircleCitizenCityCivilClaimClapClarifyClawClayCleanClerkCleverClickClientCliffClimbClinicClipClockClogCloseClothCloudClownClubClumpClusterClutchCoachCoastCoconutCodeCoffeeCoilCoinCollectColorColumnCombineComeComfortComicCommonCompanyConcertConductConfirmCongressConnectConsiderControlConvinceCookCoolCopperCopyCoralCoreCornCorrectCostCottonCouchCountryCoupleCourseCousinCoverCoyoteCrackCradleCraftCramCraneCrashCraterCrawlCrazyCreamCreditCreekCrewCricketCrimeCrispCriticCropCrossCrouchCrowdCrucialCruelCruiseCrumbleCrunchCrushCryCrystalCubeCultureCupCupboardCuriousCurrentCurtainCurveCushionCustomCuteCycleDadDamageDampDanceDangerDaringDashDaughterDawnDayDealDebateDebrisDecadeDecemberDecideDeclineDecorateDecreaseDeerDefenseDefineDefyDegreeDelayDeliverDemandDemiseDenialDentistDenyDepartDependDepositDepthDeputyDeriveDescribeDesertDesignDeskDespairDestroyDetailDetectDevelopDeviceDevoteDiagramDialDiamondDiaryDiceDieselDietDifferDigitalDignityDilemmaDinnerDinosaurDirectDirtDisagreeDiscoverDiseaseDishDismissDisorderDisplayDistanceDivertDivideDivorceDizzyDoctorDocumentDogDollDolphinDomainDonateDonkeyDonorDoorDoseDoubleDoveDraftDragonDramaDrasticDrawDreamDressDriftDrillDrinkDripDriveDropDrumDryDuckDumbDuneDuringDustDutchDutyDwarfDynamicEagerEagleEarlyEarnEarthEasilyEastEasyEchoEcologyEconomyEdgeEditEducateEffortEggEightEitherElbowElderElectricElegantElementElephantElevatorEliteElseEmbarkEmbodyEmbraceEmergeEmotionEmployEmpowerEmptyEnableEnactEndEndlessEndorseEnemyEnergyEnforceEngageEngineEnhanceEnjoyEnlistEnoughEnrichEnrollEnsureEnterEntireEntryEnvelopeEpisodeEqualEquipEraEraseErodeErosionErrorEruptEscapeEssayEssenceEstateEternalEthicsEvidenceEvilEvokeEvolveExactExampleExcessExchangeExciteExcludeExcuseExecuteExerciseExhaustExhibitExileExistExitExoticExpandExpectExpireExplainExposeExpressExtendExtraEyeEyebrowFabricFaceFacultyFadeFaintFaithFallFalseFameFamilyFamousFanFancyFantasyFarmFashionFatFatalFatherFatigueFaultFavoriteFeatureFebruaryFederalFeeFeedFeelFemaleFenceFestivalFetchFeverFewFiberFictionFieldFigureFileFilmFilterFinalFindFineFingerFinishFireFirmFirstFiscalFishFitFitnessFixFlagFlameFlashFlatFlavorFleeFlightFlipFloatFlockFloorFlowerFluidFlushFlyFoamFocusFogFoilFoldFollowFoodFootForceForestForgetForkFortuneForumForwardFossilFosterFoundFoxFragileFrameFrequentFreshFriendFringeFrogFrontFrostFrownFrozenFruitFuelFunFunnyFurnaceFuryFutureGadgetGainGalaxyGalleryGameGapGarageGarbageGardenGarlicGarmentGasGaspGateGatherGaugeGazeGeneralGeniusGenreGentleGenuineGestureGhostGiantGiftGiggleGingerGiraffeGirlGiveGladGlanceGlareGlassGlideGlimpseGlobeGloomGloryGloveGlowGlueGoatGoddessGoldGoodGooseGorillaGospelGossipGovernGownGrabGraceGrainGrantGrapeGrassGravityGreatGreenGridGriefGritGroceryGroupGrowGruntGuardGuessGuideGuiltGuitarGunGymHabitHairHalfHammerHamsterHandHappyHarborHardHarshHarvestHatHaveHawkHazardHeadHealthHeartHeavyHedgehogHeightHelloHelmetHelpHenHeroHiddenHighHillHintHipHireHistoryHobbyHockeyHoldHoleHolidayHollowHomeHoneyHoodHopeHornHorrorHorseHospitalHostHotelHourHoverHubHugeHumanHumbleHumorHundredHungryHuntHurdleHurryHurtHusbandHybridIceIconIdeaIdentifyIdleIgnoreIllIllegalIllnessImageImitateImmenseImmuneImpactImposeImproveImpulseInchIncludeIncomeIncreaseIndexIndicateIndoorIndustryInfantInflictInformInhaleInheritInitialInjectInjuryInmateInnerInnocentInputInquiryInsaneInsectInsideInspireInstallIntactInterestIntoInvestInviteInvolveIronIslandIsolateIssueItemIvoryJacketJaguarJarJazzJealousJeansJellyJewelJobJoinJokeJourneyJoyJudgeJuiceJumpJungleJuniorJunkJustKangarooKeenKeepKetchupKeyKickKidKidneyKindKingdomKissKitKitchenKiteKittenKiwiKneeKnifeKnockKnowLabLabelLaborLadderLadyLakeLampLanguageLaptopLargeLaterLatinLaughLaundryLavaLawLawnLawsuitLayerLazyLeaderLeafLearnLeaveLectureLeftLegLegalLegendLeisureLemonLendLengthLensLeopardLessonLetterLevelLiarLibertyLibraryLicenseLifeLiftLightLikeLimbLimitLinkLionLiquidListLittleLiveLizardLoadLoanLobsterLocalLockLogicLonelyLongLoopLotteryLoudLoungeLoveLoyalLuckyLuggageLumberLunarLunchLuxuryLyricsMachineMadMagicMagnetMaidMailMainMajorMakeMammalManManageMandateMangoMansionManualMapleMarbleMarchMarginMarineMarketMarriageMaskMassMasterMatchMaterialMathMatrixMatterMaximumMazeMeadowMeanMeasureMeatMechanicMedalMediaMelodyMeltMemberMemoryMentionMenuMercyMergeMeritMerryMeshMessageMetalMethodMiddleMidnightMilkMillionMimicMindMinimumMinorMinuteMiracleMirrorMiseryMissMistakeMixMixedMixtureMobileModelModifyMomMomentMonitorMonkeyMonsterMonthMoonMoralMoreMorningMosquitoMotherMotionMotorMountainMouseMoveMovieMuchMuffinMuleMultiplyMuscleMuseumMushroomMusicMustMutualMyselfMysteryMythNaiveNameNapkinNarrowNastyNationNatureNearNeckNeedNegativeNeglectNeitherNephewNerveNestNetNetworkNeutralNeverNewsNextNiceNightNobleNoiseNomineeNoodleNormalNorthNoseNotableNoteNothingNoticeNovelNowNuclearNumberNurseNutOakObeyObjectObligeObscureObserveObtainObviousOccurOceanOctoberOdorOffOfferOfficeOftenOilOkayOldOliveOlympicOmitOnceOneOnionOnlineOnlyOpenOperaOpinionOpposeOptionOrangeOrbitOrchardOrderOrdinaryOrganOrientOriginalOrphanOstrichOtherOutdoorOuterOutputOutsideOvalOvenOverOwnOwnerOxygenOysterOzonePactPaddlePagePairPalacePalmPandaPanelPanicPantherPaperParadeParentParkParrotPartyPassPatchPathPatientPatrolPatternPausePavePaymentPeacePeanutPearPeasantPelicanPenPenaltyPencilPeoplePepperPerfectPermitPersonPetPhonePhotoPhrasePhysicalPianoPicnicPicturePiecePigPigeonPillPilotPinkPioneerPipePistolPitchPizzaPlacePlanetPlasticPlatePlayPleasePledgePluckPlugPlungePoemPoetPointPolarPolePolicePondPonyPoolPopularPortionPositionPossiblePostPotatoPotteryPovertyPowderPowerPracticePraisePredictPreferPreparePresentPrettyPreventPricePridePrimaryPrintPriorityPrisonPrivatePrizeProblemProcessProduceProfitProgramProjectPromoteProofPropertyProsperProtectProudProvidePublicPuddingPullPulpPulsePumpkinPunchPupilPuppyPurchasePurityPurposePursePushPutPuzzlePyramidQualityQuantumQuarterQuestionQuickQuitQuizQuoteRabbitRaccoonRaceRackRadarRadioRailRainRaiseRallyRampRanchRandomRangeRapidRareRateRatherRavenRawRazorReadyRealReasonRebelRebuildRecallReceiveRecipeRecordRecycleReduceReflectReformRefuseRegionRegretRegularRejectRelaxReleaseReliefRelyRemainRememberRemindRemoveRenderRenewRentReopenRepairRepeatReplaceReportRequireRescueResembleResistResourceResponseResultRetireRetreatReturnReunionRevealReviewRewardRhythmRibRibbonRiceRichRideRidgeRifleRightRigidRingRiotRippleRiskRitualRivalRiverRoadRoastRobotRobustRocketRomanceRoofRookieRoomRoseRotateRoughRoundRouteRoyalRubberRudeRugRuleRunRunwayRuralSadSaddleSadnessSafeSailSaladSalmonSalonSaltSaluteSameSampleSandSatisfySatoshiSauceSausageSaveSayScaleScanScareScatterSceneSchemeSchoolScienceScissorsScorpionScoutScrapScreenScriptScrubSeaSearchSeasonSeatSecondSecretSectionSecuritySeedSeekSegmentSelectSellSeminarSeniorSenseSentenceSeriesServiceSessionSettleSetupSevenShadowShaftShallowShareShedShellSheriffShieldShiftShineShipShiverShockShoeShootShopShortShoulderShoveShrimpShrugShuffleShySiblingSickSideSiegeSightSignSilentSilkSillySilverSimilarSimpleSinceSingSirenSisterSituateSixSizeSkateSketchSkiSkillSkinSkirtSkullSlabSlamSleepSlenderSliceSlideSlightSlimSloganSlotSlowSlushSmallSmartSmileSmokeSmoothSnackSnakeSnapSniffSnowSoapSoccerSocialSockSodaSoftSolarSoldierSolidSolutionSolveSomeoneSongSoonSorrySortSoulSoundSoupSourceSouthSpaceSpareSpatialSpawnSpeakSpecialSpeedSpellSpendSphereSpiceSpiderSpikeSpinSpiritSplitSpoilSponsorSpoonSportSpotSpraySpreadSpringSpySquareSqueezeSquirrelStableStadiumStaffStageStairsStampStandStartStateStaySteakSteelStemStepStereoStickStillStingStockStomachStoneStoolStoryStoveStrategyStreetStrikeStrongStruggleStudentStuffStumbleStyleSubjectSubmitSubwaySuccessSuchSuddenSufferSugarSuggestSuitSummerSunSunnySunsetSuperSupplySupremeSureSurfaceSurgeSurpriseSurroundSurveySuspectSustainSwallowSwampSwapSwarmSwearSweetSwiftSwimSwingSwitchSwordSymbolSymptomSyrupSystemTableTackleTagTailTalentTalkTankTapeTargetTaskTasteTattooTaxiTeachTeamTellTenTenantTennisTentTermTestTextThankThatThemeThenTheoryThereTheyThingThisThoughtThreeThriveThrowThumbThunderTicketTideTigerTiltTimberTimeTinyTipTiredTissueTitleToastTobaccoTodayToddlerToeTogetherToiletTokenTomatoTomorrowToneTongueTonightToolToothTopTopicToppleTorchTornadoTortoiseTossTotalTouristTowardTowerTownToyTrackTradeTrafficTragicTrainTransferTrapTrashTravelTrayTreatTreeTrendTrialTribeTrickTriggerTrimTripTrophyTroubleTruckTrueTrulyTrumpetTrustTruthTryTubeTuitionTumbleTunaTunnelTurkeyTurnTurtleTwelveTwentyTwiceTwinTwistTwoTypeTypicalUglyUmbrellaUnableUnawareUncleUncoverUnderUndoUnfairUnfoldUnhappyUniformUniqueUnitUniverseUnknownUnlockUntilUnusualUnveilUpdateUpgradeUpholdUponUpperUpsetUrbanUrgeUsageUseUsedUsefulUselessUsualUtilityVacantVacuumVagueValidValleyValveVanVanishVaporVariousVastVaultVehicleVelvetVendorVentureVenueVerbVerifyVersionVeryVesselVeteranViableVibrantViciousVictoryVideoViewVillageVintageViolinVirtualVirusVisaVisitVisualVitalVividVocalVoiceVoidVolcanoVolumeVoteVoyageWageWagonWaitWalkWallWalnutWantWarfareWarmWarriorWashWaspWasteWaterWaveWayWealthWeaponWearWeaselWeatherWebWeddingWeekendWeirdWelcomeWestWetWhaleWhatWheatWheelWhenWhereWhipWhisperWideWidthWifeWildWillWinWindowWineWingWinkWinnerWinterWireWisdomWiseWishWitnessWolfWomanWonderWoodWoolWordWorkWorldWorryWorthWrapWreckWrestleWristWriteWrongYardYearYellowYouYoungYouthZebraZeroZoneZoo",u=null;function l(e){if(null==u&&(u=a.replace(/([A-Z])/g," $1").toLowerCase().substring(1).split(" "),"0x3c8acc1e7b08d8e76f9fda015ef48dc8c710a73cb7e0f77b2c18a9b5a7adde60"!==s.check(e))){ throw u=null,new Error("BIP39 Wordlist for en (English) FAILED") }}function h(){return o.call(this,"en")||this}i=new(o=s.Wordlist,i(h,o),h.prototype.getWord=function(e){return l(this),u[e]},h.prototype.getWordIndex=function(e){return l(this),u.indexOf(e)},h);r.langEn=i,s.register(i);},{"../utils/wordlist":87}]},{},[7])(7)});

  });

  var ethers$1 = unwrapExports(ethers_min);

  var disperse = {
    abi: [
      'function disperseEther(address[] recipients, uint256[] values)',
      'function disperseToken(address token, address[] recipients, uint256[] values)',
      'function disperseTokenSimple(address token, address[] recipients, uint256[] values)' ],
    address: {
      1: '0xD152f549545093347A162Dce210e7293f1452150',     // mainnet
      3: '0xD152f549545093347A162Dce210e7293f1452150',     // ropsten
      4: '0xD152f549545093347A162Dce210e7293f1452150',     // rinkeby
      5: '0xD152f549545093347A162Dce210e7293f1452150',     // goerli
      42: '0xD152f549545093347A162Dce210e7293f1452150',    // kovan
      56: '0xD152f549545093347A162Dce210e7293f1452150',    // bsc mainnet
      77: '0xD152f549545093347A162Dce210e7293f1452150',    // poa sokol
      99: '0xD152f549545093347A162Dce210e7293f1452150',    // poa network
      100: '0xD152f549545093347A162Dce210e7293f1452150',   // xdai chain
      137: '0xD152f549545093347A162Dce210e7293f1452150',   // matic
      163: '0xD152f549545093347A162Dce210e7293f1452150',   // lightstreams
      250: '0xD152f549545093347A162Dce210e7293f1452150',   // fantom
      5777: '0x5b1869d9a4c187f2eaa108f3062412ecf0526b24',  // ganache-cli
      42161: '0x692B5A7eCcCad243a07535E8C24B0E7433238C6a', // arbitrum one
      4689: '0xe3122e446Bf31036DA212375803f24b3dE96D0c9',  // iotex
      1285: '0xD152f549545093347A162Dce210e7293f1452150',  // moonriver
      10000: '0x2203a1a0C5eb3a42f679C853D1c2d618617396B7',  // smartbch
      42220: '0xD152f549545093347A162Dce210e7293f1452150', // celo
      1666600000: '0xD152f549545093347A162Dce210e7293f1452150', // harmony
      60: '0xD152f549545093347A162Dce210e7293f1452150',    // gochain
      128: '0xD152f549545093347A162Dce210e7293f1452150',   // huobi
      66: '0xD152f549545093347A162Dce210e7293f1452150',    // okex
      43114: '0x102282451C857506ec0818086695878919F4B88b', // avax
      1313161554: '0x0a37577d21168894ffB24cA927dA0e88D4E607D8', // aurora
      25: '0xDa37b4B5cfca049c0052B18050B6777DE0F95fC5', // aurora
      288: '0x76fD049C0528E82de32EfaCbd251edF271AF8ECe' // boba network
    },
  };

  var erc20 = {
    abi: [
      'function name() view returns (string)',
      'function symbol() view returns (string)',
      'function decimals() view returns (uint8)',
      'function balanceOf(address) view returns (uint256)',
      'function allowance(address, address) view returns (uint256)',
      'function approve(address, uint256) returns (bool)' ]
  };

  var ds_token = {
    abi: [
      'function name() view returns (bytes32)',
      'function symbol() view returns (bytes32)',
      'function decimals() view returns (uint8)',
      'function balanceOf(address) view returns (uint256)',
      'function allowance(address, address) view returns (uint256)',
      'function approve(address, uint256) returns (bool)' ]
  };

  var networks = {
    1: {
      name: "mainnet",
      symbol: "ETH",
      explorer: {
        name: 'etherscan',
        base: 'https://etherscan.io/',
        tx: function (tx) { return ("tx/" + tx); },
        addr: function (addr) { return ("address/" + addr); },
      },
    },
    3: {
      name: "ropsten",
      symbol: "ETH",
      explorer: {
        name: 'etherscan',
        base: 'https://ropsten.etherscan.io/',
        tx: function (tx) { return ("tx/" + tx); },
        addr: function (addr) { return ("address/" + addr); },
      },
    },
    42: {
      name: "kovan",
      symbol: "KETH",
      explorer: {
        name: 'etherscan',
        base: 'https://kovan.etherscan.io/',
        tx: function (tx) { return ("tx/" + tx); },
        addr: function (addr) { return ("address/" + addr); },
      },
    },
    56: {
      name: "bsc mainnet",
      symbol: "BNB",
      explorer: {
        name: 'bscscan',
        base: 'https://bscscan.com/',
        tx: function (tx) { return ("tx/" + tx); },
        addr: function (addr) { return ("address/" + addr); },
      },
    },
    4: {
      name: "rinkeby",
      symbol: "ETH",
      explorer: {
        name: 'etherscan',
        base: 'https://rinkeby.etherscan.io/',
        tx: function (tx) { return ("tx/" + tx); },
        addr: function (addr) { return ("address/" + addr); },
      },
    },
    5: {
      name: "görli",
      symbol: "ETH",
      explorer: {
        name: 'etherscan',
        base: 'https://goerli.etherscan.io/',
        tx: function (tx) { return ("tx/" + tx); },
        addr: function (addr) { return ("address/" + addr); },
      },
    },
    61: {
      name: "etc mainnet",
      symbol: "ETC",
      explorer: {
        name: 'blockscout',
        base: 'https://blockscout.com/etc/mainnet',
        tx: function (tx) { return ("tx/" + tx); },
        addr: function (addr) { return ("address/" + addr); },
      },
    },
    77: {
      name: "poa sokol",
      symbol: "SPOA",
      explorer: {
        name: 'blockscout',
        base: 'https://blockscout.com/poa/sokol/',
        tx: function (tx) { return ("tx/" + tx); },
        addr: function (addr) { return ("address/" + addr); },
      },
    },
    99: {
      name: "poa network",
      symbol: "POA",
      explorer: {
        name: 'blockscout',
        base: 'https://blockscout.com/poa/core/',
        tx: function (tx) { return ("tx/" + tx); },
        addr: function (addr) { return ("address/" + addr); },
      },
    },
    100: {
      name: "xdai chain",
      symbol: "xDAI",
      explorer: {
        name: 'blockscout',
        base: 'https://blockscout.com/poa/dai/',
        tx: function (tx) { return ("tx/" + tx); },
        addr: function (addr) { return ("address/" + addr); },
      },
    },
    137: {
      name: "matic network",
      symbol: "MATIC",
      explorer: {
        name: 'matic explorer',
        base: 'https://explorer.matic.network/',
        tx: function (tx) { return ("tx/" + tx); },
        addr: function (addr) { return ("address/" + addr); },
      },
    },
    163: {
      name: "lightstreams",
      symbol: "PHT",
      explorer: {
        name: 'explorer',
        base: 'https://explorer.lightstreams.io/',
        tx: function (tx) { return ("tx/" + tx); },
        addr: function (addr) { return ("addr/" + addr); },
      },
    },
    250: {
      name: "fantom",
      symbol: "FTM",
      explorer: {
        name: 'ftmscan',
        base: 'https://ftmscan.com/',
        tx: function (tx) { return ("tx/" + tx); },
        addr: function (addr) { return ("address/" + addr); },
      },
    },
    5777: {
      name: "ganache",
      symbol: "ETH",
    },
    42161: {
      name: "arbitrum",
      symbol: "ETH",
      explorer: {
        name: 'arbiscan',
        base: 'https://arbiscan.io/',
        tx: function (tx) { return ("tx/" + tx); },
        addr: function (addr) { return ("address/" + addr); },
      },
    },
    4689: {
      name: "iotex",
      symbol: "IOTX",
      explorer: {
        name: 'iotexscout',
        base: 'https://iotexscout.io/',
        tx: function (tx) { return ("tx/" + tx); },
        addr: function (addr) { return ("address/" + addr); },
      },
    },
    1285: {
      name: "moonriver",
      symbol: "MOVR",
      explorer: {
        name: 'blockscout',
        base: 'https://blockscout.moonriver.moonbeam.network/',
        tx: function (tx) { return ("tx/" + tx); },
        addr: function (addr) { return ("address/" + addr); },
      },
    },
    10000: {
      name: "smartbch",
      symbol: "BCH",
      explorer: {
        name: 'smartscan',
        base: 'https://smartscan.cash/',
        tx: function (tx) { return ("tx/" + tx); },
        addr: function (addr) { return ("address/" + addr); },
      },
    },
    42220: {
      name: "celo",
      symbol: "CELO",
      explorer: {
        name: 'explorer',
        base: 'https://explorer.celo.org/',
        tx: function (tx) { return ("tx/" + tx); },
        addr: function (addr) { return ("address/" + addr); },
      },
    },
    1666600000: {
      name: "harmony",
      symbol: "ONE",
      explorer: {
        name: 'explorer',
        base: 'https://explorer.harmony.one/',
        tx: function (tx) { return ("tx/" + tx); },
        addr: function (addr) { return ("address/" + addr); },
      },
    },
    60: {
      name: "gochain",
      symbol: "GO",
      explorer: {
        name: 'explorer',
        base: 'https://explorer.gochain.io/',
        tx: function (tx) { return ("tx/" + tx); },
        addr: function (addr) { return ("address/" + addr); },
      },
    },
    128: {
      name: "huobi",
      symbol: "HT",
      explorer: {
        name: 'hecoinfo',
        base: 'https://hecoinfo.com/',
        tx: function (tx) { return ("tx/" + tx); },
        addr: function (addr) { return ("address/" + addr); },
      },
    },
    66: {
      name: "okex",
      symbol: "OKT",
      explorer: {
        name: 'oklink',
        base: 'https://www.oklink.com/okexchain/',
        tx: function (tx) { return ("tx/" + tx); },
        addr: function (addr) { return ("address/" + addr); },
      },
    },
    43114: {
      name: "avax",
      symbol: "AVAX",
      explorer: {
        name: 'snowtrace',
        base: 'https://snowtrace.io/',
        tx: function (tx) { return ("tx/" + tx); },
        addr: function (addr) { return ("address/" + addr); },
      },
    },
    1313161554: {
      name: "aurora",
      symbol: "aETH",
      explorer: {
        name: 'explorer',
        base: 'https://explorer.mainnet.aurora.dev/',
        tx: function (tx) { return ("tx/" + tx); },
        addr: function (addr) { return ("address/" + addr); },
      },
    },
    25: {
      name: "CRO",
      symbol: "CRO",
      explorer: {
        name: 'explorer',
        base: 'https://cronos.crypto.org/explorer/',
        tx: function (tx) { return ("tx/" + tx); },
        addr: function (addr) { return ("address/" + addr); },
      },
    },
    288: {
      name: "Boba Network",
      symbol: "ETH",
      explorer: {
        name: 'explorer',
        base: 'https://blockexplorer.boba.network/',
        tx: function (tx) { return ("tx/" + tx); },
        addr: function (addr) { return ("address/" + addr); },
      },
    }
  };

  function explorer_tx(tx) {
    if (!tx) { return }
    var network = networks[chain_id];
    if (network && network.explorer) {
      return  ("" + (network.explorer.base) + (network.explorer.tx(tx)))
    }
  }

  function explorer_addr(addr) {
    if (!addr) { return }
    var network = networks[chain_id];
    if (network && network.explorer) {
      return  ("" + (network.explorer.base) + (network.explorer.addr(addr)))
    }
  }

  function explorer_name() {
    var network = networks[chain_id];
    if (network && network.explorer) {
      return network.explorer.name
    }
  }

  function network_name() {
    if (!chain_id) { return }
    return networks[chain_id] ? networks[chain_id].name : '🤔'
  }

  function native_symbol() {
    var network = networks[chain_id];
    return network ? network.symbol : 'ETH'
  }

  var states = Object.freeze({
      METAMASK_REQUIRED: 1,
      NETWORK_UNAVAILABLE: 2,
      UNLOCK_METAMASK: 3,
      CONNECTED_TO_WALLET: 4,
      SELECTED_CURRENCY: 5,
      ENTERED_AMOUNTS: 6,
  });

  /**
   * Returns a Promise that resolves to the value of window.ethereum if it is
   * set within the given timeout, or null.
   * The Promise will not reject, but an error will be thrown if invalid options
   * are provided.
   *
   * @param options - Options bag.
   * @param options.mustBeMetaMask - Whether to only look for MetaMask providers.
   * Default: false
   * @param options.silent - Whether to silence console errors. Does not affect
   * thrown errors. Default: false
   * @param options.timeout - Milliseconds to wait for 'ethereum#initialized' to
   * be dispatched. Default: 3000
   * @returns A Promise that resolves with the Provider if it is detected within
   * given timeout, otherwise null.
   */
  function detectEthereumProvider(ref) {
      if ( ref === void 0 ) ref = {};
      var mustBeMetaMask = ref.mustBeMetaMask; if ( mustBeMetaMask === void 0 ) mustBeMetaMask = false;
      var silent = ref.silent; if ( silent === void 0 ) silent = false;
      var timeout = ref.timeout; if ( timeout === void 0 ) timeout = 3000;

      _validateInputs();
      var handled = false;
      return new Promise(function (resolve) {
          if (window.ethereum) {
              handleEthereum();
          }
          else {
              window.addEventListener('ethereum#initialized', handleEthereum, { once: true });
              setTimeout(function () {
                  handleEthereum();
              }, timeout);
          }
          function handleEthereum() {
              if (handled) {
                  return;
              }
              handled = true;
              window.removeEventListener('ethereum#initialized', handleEthereum);
              var ethereum = window.ethereum;
              if (ethereum && (!mustBeMetaMask || ethereum.isMetaMask)) {
                  resolve(ethereum);
              }
              else {
                  var message = mustBeMetaMask && ethereum
                      ? 'Non-MetaMask window.ethereum detected.'
                      : 'Unable to detect window.ethereum.';
                  !silent && console.error('@metamask/detect-provider:', message);
                  resolve(null);
              }
          }
      });
      function _validateInputs() {
          if (typeof mustBeMetaMask !== 'boolean') {
              throw new Error("@metamask/detect-provider: Expected option 'mustBeMetaMask' to be a boolean.");
          }
          if (typeof silent !== 'boolean') {
              throw new Error("@metamask/detect-provider: Expected option 'silent' to be a boolean.");
          }
          if (typeof timeout !== 'number') {
              throw new Error("@metamask/detect-provider: Expected option 'timeout' to be a number.");
          }
      }
  }
  var dist = detectEthereumProvider;

  riot$1.tag2('disperse-app', '<section> <disperse-logo state="{state}" disperse="{disperse}"></disperse-logo> </section> <section if="{state === states.METAMASK_REQUIRED}"> <h2>metamask required</h2> <p>non-ethereum browser, consider installing metamask.</p> </section> <section if="{state === states.NETWORK_UNAVAILABLE}"> <h2>network not yet supported</h2> <p>let us know on telegram and we\'ll deploy the contract on this network.</p> <p>network id: {chain_id}</p> </section> <section if="{state &gt;= states.UNLOCK_METAMASK}"> <h2>Connect to wallet</h2> <p if="{state == states.UNLOCK_METAMASK}"> <input type="submit" value="connect wallet" onclick="{unlock_accounts}" disabled="{opts.disabled}"> </p> <p>{wallet.status}</p> </section> <section if="{state &gt;= states.CONNECTED_TO_WALLET}"> <disperse-currency on-select="{select_currency}"></disperse-currency> <p if="{sending == &quot;ether&quot;}">you have <disperse-amount amount="{wallet.balance}" symbol="{symbol()}" decimals="{decimals()}"></disperse-amount> </p> </section> <section if="{state &gt;= states.CONNECTED_TO_WALLET &amp;&amp; sending === &quot;token&quot;}"> <disperse-token-loader on-select="{select_token}" on-error="{reset_token}"></disperse-token-loader> </section> <section show="{state &gt;= states.SELECTED_CURRENCY}"> <h2>recipients and amounts</h2> <p>enter one address and amount in {symbol()} on each line. supports any format.</p> <div class="shadow"> <textarea ref="addresses" spellcheck="false" oninput="{check_amounts}"></textarea> </div> </section> <section if="{state &gt;= states.ENTERED_AMOUNTS}"> <h2>confirm</h2> <disperse-addresses addresses="{addresses}" symbol="{symbol()}" decimals="{decimals()}" balance="{balance()}" left="{left()}" total="{total()}"></disperse-addresses> <disperse-transaction show="{sending === &quot;ether&quot;}" disabled="{left() &lt; 0}" title="disperse ether" action="{disperseEther}" message="{disperse_message()}"></disperse-transaction> </section> <div if="{state &gt;= states.ENTERED_AMOUNTS &amp;&amp; sending == &quot;token&quot;}"> <h2>allowance</h2> <p show="{token.allowance.lt(total())}">allow smart contract to transfer tokens on your behalf.</p> <p show="{token.allowance.gte(total())}">disperse contract has allowance, you can send tokens now.</p> <disperse-transaction class="{secondary: token.allowance.gte(total())}" title="{token.allowance.lt(total()) ? &quot;approve&quot; : &quot;revoke&quot;}" action="{token.allowance.lt(total()) ? approve : deny}"></disperse-transaction> <disperse-transaction show="{sending === &quot;token&quot;}" disabled="{left() &lt; 0 || token.allowance.lt(total())}" title="disperse token" action="{disperseToken}" message="{disperse_message()}"></disperse-transaction> </div>', '', '', function(opts) {
      var this$1 = this;


      this.states = states;
      this.state = 0;

      this.info = {
        debug: {},
        token: {},
        approve: {},
        disperse: {},
      };
      this.network = null;
      this.network_unavailable = false;
      this.wallet = {
        address: null,
        status: null,
      };

      this.disperse = {};
      this.token = {};

      this.sending = null;

      this.on('mount', function () {
        this$1.refs.addresses.placeholder = '0x314ab97b76e39d63c78d5c86c2daf8eaa306b182 3.141592\n0x271bffabd0f79b8bd4d7a1c245b7ec5b576ea98a,2.7182\n0x141ca95b6177615fb1417cf70e930e102bf8f584=1.41421';
      });

      this.select_currency =async  function(event) {
        this.sending = event.target.value;
        if (this.sending == 'ether') {
          this.update({state: this.states.SELECTED_CURRENCY});
          this.parse_amounts();
        }
        else if (this.sending == 'token') {
          if (this.token.contract) {
            this.select_token();
          } else {
            this.reset_token();
          }
        }
      }.bind(this);

      this.reset_token =async  function() {
        this.update({state: this.states.CONNECTED_TO_WALLET, token: {}});
      }.bind(this);

      this.select_token =async  function() {
        this.update({state: this.states.SELECTED_CURRENCY});
        await this.update_balance();
        this.parse_amounts();
        console.log(("loaded token " + (this.token.address)));
      }.bind(this);

      this.check_amounts =async  function(e) {
        e.preventDefault();
        this.parse_amounts();
      }.bind(this);

      this.parse_amounts =async  function() {
        var pattern = RegExp(/(0x[0-9a-fA-F]{40}).+?([0-9\.]+)/, 'g');
        this.addresses = [];
        var result;
        while ((result = pattern.exec(this.refs.addresses.value)) !== null) {
          this.addresses.push({
            address: ethers.utils.getAddress(result[1]),
            value: ethers.utils.parseUnits(result[2], this.decimals())
          });
        }
        if (this.addresses.length) {
          this.update({state: this.states.ENTERED_AMOUNTS});
        }
      }.bind(this);

      this.approve =async  function() {

        return this.token.contract.approve(this.disperse.address, ethers.constants.MaxUint256)
      }.bind(this);

      this.deny =async  function() {
        return this.token.contract.approve(this.disperse.address, ethers.constants.Zero)
      }.bind(this);

      this.disperseEther =async  function() {
        var recipients = this.addresses.map(function (e) { return e.address; });
        var values = this.addresses.map(function (e) { return e.value; });
        console.log('disperseEther', recipients, values, this.total().toString());
        return this.disperse.contract.disperseEther(recipients, values, {value: this.total()})
      }.bind(this);

      this.disperseToken =async  function() {
        var recipients = this.addresses.map(function (e) { return e.address; });
        var values = this.addresses.map(function (e) { return e.value; });
        console.log('disperseToken', this.token.address, recipients, values, this.total().toString());
        var transaction = this.disperse.contract.disperseToken(this.token.address, recipients, values);
        return transaction
      }.bind(this);

      this.symbol = function() {
        return this.sending === 'token' ? this.token.symbol : native_symbol()
      }.bind(this);

      this.decimals = function() {
        return this.sending == 'token' ? this.token.decimals :  18
      }.bind(this);

      this.total = function() {
        return this.addresses.reduce(function (t, v) { return t.add(v.value); }, ethers.constants.Zero)
      }.bind(this);

      this.left = function() {
        switch (this.sending) {
          case 'token': return this.token.balance.sub(this.total())
          case 'ether': return this.wallet.balance.sub(this.total())
        }
      }.bind(this);

      this.balance = function() {
        switch (this.sending) {
          case 'token': return this.token.balance
          case 'ether': return this.wallet.balance
        }
      }.bind(this);

      this.disperse_message = function() {
        if (this.sending === 'token' && this.token.allowance.lt(this.total())) { return 'needs allowance' }
        if (this.left() < 0) { return 'total exceeds balance' }
      }.bind(this);

      this.update_balance =async  function() {
        this.wallet.balance = await provider.getBalance(this.wallet.address);
        if (this.token.contract) {
          this.token.balance = await this.token.contract.balanceOf(this.wallet.address);
          this.token.allowance = await this.token.contract.allowance(this.wallet.address, this.disperse.address);
        }
        this.update();
      }.bind(this);

      this.afterWeb3 =async  function() {
        window.provider = new ethers.providers.Web3Provider(window.ethereum);
        window.chain_id = parseInt(Number(window.ethereum.chainId), 10);

        console.log("chainid: " + String(window.chain_id));

        ethereum.request({ method: 'eth_accounts' }).then(this.accounts_changed);
        ethereum.on('chainChanged', this.chain_changed);
        ethereum.on('accountsChanged', this.accounts_changed);
        this.load_disperse_contract();
        if (this.state !== this.states.NETWORK_UNAVAILABLE) {
          this.update({state: this.states.UNLOCK_METAMASK});
        }
      }.bind(this);

      this.chain_changed = function(new_chain_id) {
        window.location.reload();
      }.bind(this);

      this.accounts_changed =async  function(accounts) {
        if (accounts.length === 0) {
          this.wallet.address = null;
          this.wallet.status = 'please unlock metamask';
          this.state = this.states.UNLOCK_METAMASK;
        } else if (accounts[0] != this.wallet.address) {
          this.wallet.address = accounts[0];
          this.wallet.status = "logged in as " + (this.wallet.address);
          this.state = this.states.CONNECTED_TO_WALLET;
          await this.update_balance();
        }
        this.update();
        console.log('accounts_changed', accounts);
      }.bind(this);

      this.unlock_accounts = function() {
        var this$1 = this;

        ethereum.request({ method: 'eth_requestAccounts' })
          .then(this.accounts_changed)
          .catch(function (err) {
            if (err.code === 4001) {
              this$1.wallet.status = 'connection request rejected';
              this$1.update();
            } else {
              console.error(err);
            }
        });
      }.bind(this);

      this.load_disperse_contract = function() {
        this.disperse.address = disperse.address[chain_id];
        if ('disperse' in localStorage) {
          try {
            this.disperse.address = ethers.utils.getAddress(localStorage.getItem('disperse'));
            console.log('disperse address override');
          } catch (e) {
            console.error('failed to override address');
          }
        }
        if (this.disperse.address) {
          this.disperse.contract = new ethers.Contract(
            this.disperse.address,
            disperse.abi,
            provider.getSigner()
          );
          console.log(("Disperse contract initialized at " + (this.disperse.address)));
        } else {
          this.update({state: this.states.NETWORK_UNAVAILABLE});
        }
      }.bind(this);

      this.connectWeb3 =async  function() {
          var provider = await dist();
          if (provider) {
              this.afterWeb3();
          } else {
            this.update({state: this.states.METAMASK_REQUIRED});
          }
        }.bind(this);

      window.addEventListener('load', this.connectWeb3);
  });

  riot$1.tag2('disperse-logo', '<header> <div class="eth {logo_class()}" style="position: absolute; top: 65px;left: -65px; font-size: 18px;"><svg id="svg" version="1.1" width="10em" height="10em" viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="display: block;"><g id="svgg"><circle xmlns="http://www.w3.org/2000/svg" class="st0" cx="46" cy="29.6" r="24.6"/><path id="path0" d="M 54 21.1 c -1.2 -3.1 -4.1 -3.2 -7.7 -2.6 l -1.2 -4.3 L 42.5 15 l 1.2 4.1 c -0.6 0.2 -1.4 0.5 -2.1 0.6 l -1.2 -4.3 l -2.6 0.8 l 1.2 4.3 c -0.6 0.2 -1.1 0.3 -1.7 0.5 l 0 0 l -3.5 1.2 l 0.8 2.8 c 0 0 2 -0.6 1.8 -0.6 c 1.1 -0.3 1.5 0.2 1.8 0.8 l 1.4 4.9 c 0 0 0.2 0 0.3 0 l -0.3 0.2 l 2 6.9 c 0 0.3 0 0.9 -0.8 1.2 l -1.8 0.6 l 0.3 3.2 l 3.4 -0.9 c 0.6 -0.2 1.2 -0.3 1.8 -0.5 l 1.2 4.3 l 2.6 -0.8 L 47.1 40 c 0.8 -0.2 1.4 -0.3 2.1 -0.6 l 1.2 4.3 l 2.6 -0.8 l -1.2 -4.3 c 4.3 -1.5 7.1 -3.5 6.3 -7.8 c -0.6 -3.4 -2.6 -4.5 -5.4 -4.3 C 54.3 25 54.9 23.4 54 21.1 L 54 21.1 Z M 53.1 31.6 c 0.9 3.2 -4.8 4.5 -6.6 5.1 l -1.7 -5.8 C 46.6 30.3 52 28.2 53.1 31.6 L 53.1 31.6 Z M 49.4 23.7 c 0.9 2.9 -3.8 4 -5.4 4.5 L 42.5 23 C 44 22.5 48.6 20.7 49.4 23.7 L 49.4 23.7 Z" stroke="none" fill="#cccccc" fill-rule="evenodd"></path></g></svg></div> <h1>Disperse<sup>{network_name()}</sup></h1> <div class="expand"></div> <div><a href="{explorer_addr(opts.disperse.address)}" target="_blank">{explorer_name()}</a></div> </header> <p><em></em><span style="font-style: normal"> Distribute BCH or tokens to multiple addresses</span></p>', 'disperse-logo header,[data-is="disperse-logo"] header{ display: flex; align-items: baseline; } disperse-logo sup,[data-is="disperse-logo"] sup{ font-size: 1.4rem; margin-left: .7rem; top: -1.4rem; } disperse-logo a,[data-is="disperse-logo"] a{ font-size: 1.4rem; margin-right: 1.4rem;} disperse-logo .eth svg path,[data-is="disperse-logo"] .eth svg path{ transition: fill .3s !important; } disperse-logo .active svg path,[data-is="disperse-logo"] .active svg path{ fill: #fff !important; } disperse-logo .inactive svg path,[data-is="disperse-logo"] .inactive svg path{ fill: #999395FF !important; }', '', function(opts) {

      this.network_name = network_name;
      this.explorer_name = explorer_name;
      this.explorer_addr = explorer_addr;
      this.states = states;

      this.logo_class = function() {
        return this.opts.state >= this.states.CONNECTED_TO_WALLET ? 'active' : 'inactive'
      }.bind(this);

  });

  riot$1.tag2('disperse-currency', '<div class="chooser"> <label>Send</label> <input type="radio" value="ether" name="what" id="ether" onchange="{opts.onSelect}"> <label for="ether">BCH</label> <label>or</label> <input type="radio" value="token" name="what" id="token" onchange="{opts.onSelect}"> <label for="token">token</label> </div>', 'disperse-currency .chooser,[data-is="disperse-currency"] .chooser{ font-style: italic; margin-top: 2.1rem; margin-bottom: 1.4rem; } disperse-currency label,[data-is="disperse-currency"] label{ margin-right: .25rem; font-size: 2.2rem; } disperse-currency input[type="radio"],[data-is="disperse-currency"] input[type="radio"]{ display: none; color: #111111; } disperse-currency input[type="radio"] + label,[data-is="disperse-currency"] input[type="radio"] + label{ display: inline-block; font-size: 2.2rem; color: rgba(0, 0, 0, 0.5); border-bottom: 2px rgba(0, 0, 0, 0.5) solid; } disperse-currency input[type="radio"]:checked + label,[data-is="disperse-currency"] input[type="radio"]:checked + label{ color: #111111; border-bottom: 2px #111111 solid; background: #d2d4d6; }', '', function(opts) {
  });

  riot$1.tag2('disperse-addresses', '<ul> <li class="accent"> <div class="flex"> <div>address</div> <div class="expand"></div> <div>amount</div> </div> </li> <li each="{addr in opts.addresses}"> <div class="flex"> <div>{addr.address}</div> <div class="expand bar"></div> <disperse-amount amount="{addr.value}" symbol="{opts.symbol}" decimals="{opts.decimals}"></disperse-amount> </div> </li> </ul> <ul> <li class="accent"> <div class="flex"> <div>total</div> <div class="expand"></div> <disperse-amount amount="{opts.total}" symbol="{opts.symbol}" decimals="{opts.decimals}"></disperse-amount> </div> </li> <li class="accent"> <div class="flex"> <div>your balance</div> <div class="expand"></div> <disperse-amount amount="{opts.balance}" symbol="{opts.symbol}" decimals="{opts.decimals}"></disperse-amount> </div> </li> <li class="accent"> <div class="flex fade {negative: opts.left &lt; 0}"> <div>remaining</div> <div class="expand"></div> <disperse-amount amount="{opts.left}" symbol="{opts.symbol}" decimals="{opts.decimals}"></disperse-amount> </div> </li> </ul>', 'disperse-addresses .accent,[data-is="disperse-addresses"] .accent{ font-style: italic; } disperse-addresses .bar,[data-is="disperse-addresses"] .bar{ margin: auto 0.3em; border-bottom: 1px #111111 solid; } disperse-addresses .fade,[data-is="disperse-addresses"] .fade{ transition: color .3s; } disperse-addresses .negative,[data-is="disperse-addresses"] .negative{ color: #999395FF; }', '', function(opts) {
  });

  riot$1.tag2('disperse-amount', '<span>{amount()} </span><span class="sc">{opts.symbol}</span>', 'disperse-amount .sc,[data-is="disperse-amount"] .sc{ font-variant: all-small-caps; }', '', function(opts) {
      this.amount = function() {
        return ethers.utils.formatUnits(this.opts.amount, this.opts.decimals)
      }.bind(this);

  });

  riot$1.tag2('disperse-transaction', '<input type="submit" riot-value="{opts.title}" onclick="{submit}" disabled="{opts.disabled}"> <div class="status"> <div show="{opts.message}">{opts.message}</div> <div class="{status}">{message}</div><a class="hash" target="_blank" href="{explorer_tx(hash)}">{hash}</a> </div>', 'disperse-transaction { font-size: 1.4rem; display: flex; align-items: baseline; margin-bottom: 1.4rem; } disperse-transaction .status,[data-is="disperse-transaction"] .status{ margin-left: 1.4rem; font-style: italic; } disperse-transaction .status .pending,[data-is="disperse-transaction"] .status .pending{ animation: pulse 1.5s infinite; animation-direction: alternate; animation-timing-function: ease-in-out; } disperse-transaction .status .success,[data-is="disperse-transaction"] .status .success{ color: #28bd14; } disperse-transaction .status .failed,[data-is="disperse-transaction"] .status .failed{ color: #d43939; } disperse-transaction .hash,[data-is="disperse-transaction"] .hash{ font-style: normal; font-size: 1rem; } disperse-transaction input[type="submit"]:disabled,[data-is="disperse-transaction"] input[type="submit"]:disabled{ opacity: .4; } disperse-transaction.secondary input { background: none; border: 1px #999395FF solid; } @keyframes pulse { 0% { color: rgba(0, 0, 0, 0.2); } 100% { color: rgba(0, 0, 0, 0.5); } }', '', function(opts) {

      this.explorer_tx = explorer_tx;
      this.status = null;
      this.message = null;
      this.hash = null;
      this.tx = null;

      this.submit =async  function(e) {
        this.update({message: 'sign transaction with metamask', status: 'approve', hash: null, tx: null});

        try {

          this.tx = await this.opts.action();

          this.update({message: 'transaction pending', status: 'pending', hash: this.tx.hash});
          console.log(this.tx);
        } catch(error) {

          this.update({message: 'transaction rejected', status: 'failed'});
          console.log('rejected', error);
          return
        }

        try {

          var receipt = await this.tx.wait();
          console.log(receipt);
          var status = receipt.status ? 'success' : 'failed';
          this.update({message: ("transaction " + status), status: status});
          await this.parent.update_balance();
        } catch(error) {

          this.update({message: 'transaction failed', status: 'failed'});
          console.log('reverted', error);
        }
      }.bind(this);

  });

  riot$1.tag2('disperse-token-loader', '<h2>token address</h2> <form onsubmit="{load_token}"> <div class="flex"> <input type="text" ref="token" placeholder="0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359"> <input type="submit" value="load"> </div> <p class="{status}">{message}</p> <p if="{parent.token.balance}">you have <disperse-amount amount="{parent.token.balance}" symbol="{parent.symbol()}" decimals="{parent.decimals()}"></disperse-amount><span> ({parent.token.name})</span> </p> </form>', 'disperse-token-loader input[type="text"],[data-is="disperse-token-loader"] input[type="text"]{ flex-grow: 1; border: none; border-bottom: 2px #111 solid; padding: .7rem; background: #d2d4d6; margin-right: 1.4rem; } disperse-token-loader input[type="text"]:focus,[data-is="disperse-token-loader"] input[type="text"]:focus{ outline: none; }', '', function(opts) {
      var this$1 = this;


      this.token = null;
      this.status = null;
      this.message = null;

      this.on('mount', function () {
        this$1.refs.token.value = this$1.parent.token.address ? this$1.parent.token.address : '';
      });

      this.load_token =async  function(e) {
        e.preventDefault();
        var address = this.refs.token.value;
        console.log('load token', address);
        this.update({message: 'loading token info...', status: 'pending'});
        await this.opts.onError();
        if (!address) {
          this.update({message: 'input token address', status: 'error'});
          return
        }
        try {

          address = ethers.utils.getAddress(address);
        } catch (error) {

          console.log(error);
          this.update({message: 'invalid address', status: 'error'});
          await this.opts.onError();
          return
        }
        try {

          var token = new ethers.Contract(address, erc20.abi, provider.getSigner());
          this.parent.token = {
            address: address,
            contract: token,
            balance: null,
            name: await token.name(),
            symbol: await token.symbol(),
            decimals: await token.decimals(),
          };
        } catch (error) {
          console.log('token is not erc-20 compatible, assuming ds-token...');

          try {
            var token$1 = new ethers.Contract(address, ds_token.abi, provider.getSigner());
            this.parent.token = {
              address: address,
              contract: token$1,
              balance: null,
              name: ethers.utils.parseBytes32String(await token$1.name()),
              symbol: ethers.utils.parseBytes32String(await token$1.symbol()),
              decimals: await token$1.decimals(),
            };
          } catch (error) {

            console.log(error);
            this.update({message: 'unsupported token', status: 'error'});
            await this.opts.onError();
            return
          }
        }
        await this.opts.onSelect();
        this.update({message: null, status: null});
      }.bind(this);

  });

  window.chain_id = null;
  window.ethers = ethers$1;
  riot$1.mount('*');

}());
//# sourceMappingURL=bundle.js.map
