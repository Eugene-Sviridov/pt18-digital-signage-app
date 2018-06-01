module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "JkW7");
/******/ })
/************************************************************************/
/******/ ({

/***/ "/QC5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribers", function() { return subscribers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentUrl", function() { return getCurrentUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "route", function() { return route; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return Router; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return Route; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);


var EMPTY$1 = {};

function assign(obj, props) {
	// eslint-disable-next-line guard-for-in
	for (var i in props) {
		obj[i] = props[i];
	}
	return obj;
}

function exec(url, route, opts) {
	var reg = /(?:\?([^#]*))?(#.*)?$/,
	    c = url.match(reg),
	    matches = {},
	    ret;
	if (c && c[1]) {
		var p = c[1].split('&');
		for (var i = 0; i < p.length; i++) {
			var r = p[i].split('=');
			matches[decodeURIComponent(r[0])] = decodeURIComponent(r.slice(1).join('='));
		}
	}
	url = segmentize(url.replace(reg, ''));
	route = segmentize(route || '');
	var max = Math.max(url.length, route.length);
	for (var i$1 = 0; i$1 < max; i$1++) {
		if (route[i$1] && route[i$1].charAt(0) === ':') {
			var param = route[i$1].replace(/(^\:|[+*?]+$)/g, ''),
			    flags = (route[i$1].match(/[+*?]+$/) || EMPTY$1)[0] || '',
			    plus = ~flags.indexOf('+'),
			    star = ~flags.indexOf('*'),
			    val = url[i$1] || '';
			if (!val && !star && (flags.indexOf('?') < 0 || plus)) {
				ret = false;
				break;
			}
			matches[param] = decodeURIComponent(val);
			if (plus || star) {
				matches[param] = url.slice(i$1).map(decodeURIComponent).join('/');
				break;
			}
		} else if (route[i$1] !== url[i$1]) {
			ret = false;
			break;
		}
	}
	if (opts.default !== true && ret === false) {
		return false;
	}
	return matches;
}

function pathRankSort(a, b) {
	return a.rank < b.rank ? 1 : a.rank > b.rank ? -1 : a.index - b.index;
}

// filter out VNodes without attributes (which are unrankeable), and add `index`/`rank` properties to be used in sorting.
function prepareVNodeForRanking(vnode, index) {
	vnode.index = index;
	vnode.rank = rankChild(vnode);
	return vnode.attributes;
}

function segmentize(url) {
	return url.replace(/(^\/+|\/+$)/g, '').split('/');
}

function rankSegment(segment) {
	return segment.charAt(0) == ':' ? 1 + '*+?'.indexOf(segment.charAt(segment.length - 1)) || 4 : 5;
}

function rank(path) {
	return segmentize(path).map(rankSegment).join('');
}

function rankChild(vnode) {
	return vnode.attributes.default ? 0 : rank(vnode.attributes.path);
}

var customHistory = null;

var ROUTERS = [];

var subscribers = [];

var EMPTY = {};

function isPreactElement(node) {
	return node.__preactattr_ != null || typeof Symbol !== 'undefined' && node[Symbol.for('preactattr')] != null;
}

function setUrl(url, type) {
	if (type === void 0) type = 'push';

	if (customHistory && customHistory[type]) {
		customHistory[type](url);
	} else if (typeof history !== 'undefined' && history[type + 'State']) {
		history[type + 'State'](null, null, url);
	}
}

function getCurrentUrl() {
	var url;
	if (customHistory && customHistory.location) {
		url = customHistory.location;
	} else if (customHistory && customHistory.getCurrentLocation) {
		url = customHistory.getCurrentLocation();
	} else {
		url = typeof location !== 'undefined' ? location : EMPTY;
	}
	return "" + (url.pathname || '') + (url.search || '');
}

function route(url, replace) {
	if (replace === void 0) replace = false;

	if (typeof url !== 'string' && url.url) {
		replace = url.replace;
		url = url.url;
	}

	// only push URL into history if we can handle it
	if (canRoute(url)) {
		setUrl(url, replace ? 'replace' : 'push');
	}

	return routeTo(url);
}

/** Check if the given URL can be handled by any router instances. */
function canRoute(url) {
	for (var i = ROUTERS.length; i--;) {
		if (ROUTERS[i].canRoute(url)) {
			return true;
		}
	}
	return false;
}

/** Tell all router instances to handle the given URL.  */
function routeTo(url) {
	var didRoute = false;
	for (var i = 0; i < ROUTERS.length; i++) {
		if (ROUTERS[i].routeTo(url) === true) {
			didRoute = true;
		}
	}
	for (var i$1 = subscribers.length; i$1--;) {
		subscribers[i$1](url);
	}
	return didRoute;
}

function routeFromLink(node) {
	// only valid elements
	if (!node || !node.getAttribute) {
		return;
	}

	var href = node.getAttribute('href'),
	    target = node.getAttribute('target');

	// ignore links with targets and non-path URLs
	if (!href || !href.match(/^\//g) || target && !target.match(/^_?self$/i)) {
		return;
	}

	// attempt to route, if no match simply cede control to browser
	return route(href);
}

function handleLinkClick(e) {
	if (e.button == 0) {
		routeFromLink(e.currentTarget || e.target || this);
		return prevent(e);
	}
}

function prevent(e) {
	if (e) {
		if (e.stopImmediatePropagation) {
			e.stopImmediatePropagation();
		}
		if (e.stopPropagation) {
			e.stopPropagation();
		}
		e.preventDefault();
	}
	return false;
}

function delegateLinkHandler(e) {
	// ignore events the browser takes care of already:
	if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.button !== 0) {
		return;
	}

	var t = e.target;
	do {
		if (String(t.nodeName).toUpperCase() === 'A' && t.getAttribute('href') && isPreactElement(t)) {
			if (t.hasAttribute('native')) {
				return;
			}
			// if link is handled by the router, prevent browser defaults
			if (routeFromLink(t)) {
				return prevent(e);
			}
		}
	} while (t = t.parentNode);
}

var eventListenersInitialized = false;

function initEventListeners() {
	if (eventListenersInitialized) {
		return;
	}

	if (typeof addEventListener === 'function') {
		if (!customHistory) {
			addEventListener('popstate', function () {
				routeTo(getCurrentUrl());
			});
		}
		addEventListener('click', delegateLinkHandler);
	}
	eventListenersInitialized = true;
}

var Router = function (Component$$1) {
	function Router(props) {
		Component$$1.call(this, props);
		if (props.history) {
			customHistory = props.history;
		}

		this.state = {
			url: props.url || getCurrentUrl()
		};

		initEventListeners();
	}

	if (Component$$1) Router.__proto__ = Component$$1;
	Router.prototype = Object.create(Component$$1 && Component$$1.prototype);
	Router.prototype.constructor = Router;

	Router.prototype.shouldComponentUpdate = function shouldComponentUpdate(props) {
		if (props.static !== true) {
			return true;
		}
		return props.url !== this.props.url || props.onChange !== this.props.onChange;
	};

	/** Check if the given URL can be matched against any children */
	Router.prototype.canRoute = function canRoute(url) {
		return this.getMatchingChildren(this.props.children, url, false).length > 0;
	};

	/** Re-render children with a new URL to match against. */
	Router.prototype.routeTo = function routeTo(url) {
		this._didRoute = false;
		this.setState({ url: url });

		// if we're in the middle of an update, don't synchronously re-route.
		if (this.updating) {
			return this.canRoute(url);
		}

		this.forceUpdate();
		return this._didRoute;
	};

	Router.prototype.componentWillMount = function componentWillMount() {
		ROUTERS.push(this);
		this.updating = true;
	};

	Router.prototype.componentDidMount = function componentDidMount() {
		var this$1 = this;

		if (customHistory) {
			this.unlisten = customHistory.listen(function (location) {
				this$1.routeTo("" + (location.pathname || '') + (location.search || ''));
			});
		}
		this.updating = false;
	};

	Router.prototype.componentWillUnmount = function componentWillUnmount() {
		if (typeof this.unlisten === 'function') {
			this.unlisten();
		}
		ROUTERS.splice(ROUTERS.indexOf(this), 1);
	};

	Router.prototype.componentWillUpdate = function componentWillUpdate() {
		this.updating = true;
	};

	Router.prototype.componentDidUpdate = function componentDidUpdate() {
		this.updating = false;
	};

	Router.prototype.getMatchingChildren = function getMatchingChildren(children, url, invoke) {
		return children.filter(prepareVNodeForRanking).sort(pathRankSort).map(function (vnode) {
			var matches = exec(url, vnode.attributes.path, vnode.attributes);
			if (matches) {
				if (invoke !== false) {
					var newProps = { url: url, matches: matches };
					assign(newProps, matches);
					delete newProps.ref;
					delete newProps.key;
					return Object(__WEBPACK_IMPORTED_MODULE_0_preact__["cloneElement"])(vnode, newProps);
				}
				return vnode;
			}
		}).filter(Boolean);
	};

	Router.prototype.render = function render(ref, ref$1) {
		var children = ref.children;
		var onChange = ref.onChange;
		var url = ref$1.url;

		var active = this.getMatchingChildren(children, url, true);

		var current = active[0] || null;
		this._didRoute = !!current;

		var previous = this.previousUrl;
		if (url !== previous) {
			this.previousUrl = url;
			if (typeof onChange === 'function') {
				onChange({
					router: this,
					url: url,
					previous: previous,
					active: active,
					current: current
				});
			}
		}

		return current;
	};

	return Router;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

var Link = function Link(props) {
	return Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('a', assign({ onClick: handleLinkClick }, props));
};

var Route = function Route(props) {
	return Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(props.component, props);
};

Router.subscribers = subscribers;
Router.getCurrentUrl = getCurrentUrl;
Router.route = route;
Router.Router = Router;
Router.Route = Route;
Router.Link = Link;

/* harmony default export */ __webpack_exports__["default"] = (Router);
//# sourceMappingURL=preact-router.es.js.map

/***/ }),

/***/ "1N9l":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"speakerInfo":"speakerInfo__1Bkim"};

/***/ }),

/***/ "2oXY":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"infoContainer":"infoContainer__4W0G8","infoHeader":"infoHeader__hLzAt","even":"even__mgbcz","odd":"odd__3laq8","infoImg":"infoImg__2hw3g","border":"border__37k6U","descriptionContainer":"descriptionContainer__pIb-2","descriptionWrapper":"descriptionWrapper__2pFtL","name":"name__2Q9Ft","title":"title__2ixCZ","smallTitle":"smallTitle__2WkU4","info":"info__yRbpd"};

/***/ }),

/***/ "7KdZ":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"contentContainer":"contentContainer__28YKM","noBackground":"noBackground__3BG-8"};

/***/ }),

/***/ "9qb7":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
})();

/***/ }),

/***/ "JkW7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./style/index.scss
var style = __webpack_require__("yY49");
var style_default = /*#__PURE__*/__webpack_require__.n(style);

// EXTERNAL MODULE: ../node_modules/preact/dist/preact.min.js
var preact_min = __webpack_require__("KM04");
var preact_min_default = /*#__PURE__*/__webpack_require__.n(preact_min);

// EXTERNAL MODULE: ../node_modules/preact-router/dist/preact-router.es.js
var preact_router_es = __webpack_require__("/QC5");

// EXTERNAL MODULE: ../node_modules/preact-router/match.js
var match = __webpack_require__("sw5u");
var match_default = /*#__PURE__*/__webpack_require__.n(match);

// EXTERNAL MODULE: ./components/Header/style.scss
var Header_style = __webpack_require__("xrtm");
var Header_style_default = /*#__PURE__*/__webpack_require__.n(Header_style);

// EXTERNAL MODULE: ./components/HeaderButton/style.scss
var HeaderButton_style = __webpack_require__("Ocae");
var HeaderButton_style_default = /*#__PURE__*/__webpack_require__.n(HeaderButton_style);

// CONCATENATED MODULE: ./components/HeaderButton/index.js


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var HeaderButton_ButtonHome = function (_Component) {
    _inherits(ButtonHome, _Component);

    function ButtonHome() {
        _classCallCheck(this, ButtonHome);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    ButtonHome.prototype.render = function render(_ref) {
        var src = _ref.src,
            onClick = _ref.onClick;

        return Object(preact_min["h"])(
            'button',
            { type: 'button', className: HeaderButton_style_default.a.btnHeader, onClick: onClick },
            Object(preact_min["h"])('img', { src: src })
        );
    };

    return ButtonHome;
}(preact_min["Component"]);


// EXTERNAL MODULE: ../node_modules/classnames/index.js
var classnames = __webpack_require__("9qb7");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// CONCATENATED MODULE: ./helpers.js
var getRoutePath = function getRoutePath(path) {
    return '/' + path;
};

var getItemById = function getItemById(url, items) {
    var id = url.split('/')[2];
    return items.filter(function (item) {
        return item.id == id;
    })[0];
};
// CONCATENATED MODULE: ./components/Header/index.js


function Header__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Header__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function Header__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var _ref2 = Object(preact_min["h"])('img', { src: 'assets/icons/logo.svg' });

var Header_Header = function (_Component) {
	Header__inherits(Header, _Component);

	function Header() {
		Header__classCallCheck(this, Header);

		return Header__possibleConstructorReturn(this, _Component.apply(this, arguments));
	}

	Header.prototype.render = function render(_ref) {
		var _classnames;

		var isButtonHidden = _ref.isButtonHidden;

		var headerClasses = classnames_default()(Header_style_default.a.header, (_classnames = {}, _classnames[Header_style_default.a.buttonHidden] = isButtonHidden, _classnames));

		var goHome = function goHome() {
			return Object(preact_router_es["route"])('/');
		};
		var goBack = function goBack(href) {
			return function () {
				Object(preact_router_es["route"])(href ? getRoutePath(href) : '/');
			};
		};

		return Object(preact_min["h"])(
			'header',
			{ className: headerClasses },
			!isButtonHidden && Object(preact_min["h"])(
				'div',
				{ 'class': Header_style_default.a.headerButtons },
				Object(preact_min["h"])(HeaderButton_ButtonHome, {
					src: 'assets/icons/pt_back_icon.svg',
					onClick: goBack(this.props.href)
				}),
				Object(preact_min["h"])(HeaderButton_ButtonHome, {
					src: 'assets/icons/pt_home_icon.svg',
					onClick: goHome
				})
			),
			Object(preact_min["h"])(
				'div',
				{ 'class': Header_style_default.a.headerLogo },
				_ref2
			),
			Object(preact_min["h"])(
				'div',
				{ className: Header_style_default.a.hashtag },
				'#JoinTheInnovation'
			)
		);
	};

	return Header;
}(preact_min["Component"]);


// EXTERNAL MODULE: ./components/Navigation/style.scss
var Navigation_style = __webpack_require__("b1hr");
var Navigation_style_default = /*#__PURE__*/__webpack_require__.n(Navigation_style);

// CONCATENATED MODULE: ./components/Navigation/NavigationItem.js


function NavigationItem__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function NavigationItem__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function NavigationItem__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var NavigationItem_NavigationItem = function (_Component) {
    NavigationItem__inherits(NavigationItem, _Component);

    function NavigationItem() {
        NavigationItem__classCallCheck(this, NavigationItem);

        return NavigationItem__possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    NavigationItem.prototype.render = function render(_ref) {
        var src = _ref.src,
            href = _ref.href,
            title = _ref.title;

        return Object(preact_min["h"])(
            match["Link"],
            { className: Navigation_style_default.a.navigationItem, href: getRoutePath(href) },
            Object(preact_min["h"])('img', { src: src })
        );
    };

    return NavigationItem;
}(preact_min["Component"]);


// CONCATENATED MODULE: ./components/Navigation/index.js


function Navigation__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Navigation__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function Navigation__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Navigation__ref = Object(preact_min["h"])(NavigationItem_NavigationItem, {
    href: 'agenda',
    title: 'agenda',
    src: 'assets/navigation/agenda_button.png'
});

var Navigation__ref2 = Object(preact_min["h"])(NavigationItem_NavigationItem, {
    href: 'speakers',
    title: 'speakers',
    src: 'assets/navigation/speakers_button.png'
});

var _ref3 = Object(preact_min["h"])(NavigationItem_NavigationItem, {
    href: 'topics',
    title: 'topics',
    src: 'assets/navigation/topics.png'
});

var _ref4 = Object(preact_min["h"])(NavigationItem_NavigationItem, {
    href: 'vendors',
    title: 'vendors',
    src: 'assets/navigation/vendors.png'
});

var Navigation_Navigation = function (_Component) {
    Navigation__inherits(Navigation, _Component);

    function Navigation() {
        Navigation__classCallCheck(this, Navigation);

        return Navigation__possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    Navigation.prototype.render = function render() {
        return Object(preact_min["h"])(
            'div',
            { 'class': Navigation_style_default.a.navigation },
            Navigation__ref,
            Navigation__ref2,
            _ref3,
            _ref4
        );
    };

    return Navigation;
}(preact_min["Component"]);


// EXTERNAL MODULE: ./components/Title/style.scss
var Title_style = __webpack_require__("KZy5");
var Title_style_default = /*#__PURE__*/__webpack_require__.n(Title_style);

// CONCATENATED MODULE: ./components/Title/index.js


function Title__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Title__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function Title__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Title_Title = function (_Component) {
    Title__inherits(Title, _Component);

    function Title() {
        Title__classCallCheck(this, Title);

        return Title__possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    Title.prototype.render = function render(_ref) {
        var _classnames;

        var text = _ref.text,
            solid = _ref.solid;

        var classNames = classnames_default()(Title_style_default.a.title, (_classnames = {}, _classnames[Title_style_default.a.solid] = solid, _classnames));
        return Object(preact_min["h"])(
            'div',
            { 'class': classNames },
            Object(preact_min["h"])(
                'span',
                { 'class': Title_style_default.a.text },
                text
            )
        );
    };

    return Title;
}(preact_min["Component"]);


// EXTERNAL MODULE: ./components/Container/style.scss
var Container_style = __webpack_require__("lfZt");
var Container_style_default = /*#__PURE__*/__webpack_require__.n(Container_style);

// CONCATENATED MODULE: ./components/Container/index.js






var Container_Container = function Container(_ref) {
    var _classnames;

    var text = _ref.text,
        noBackground = _ref.noBackground,
        children = _ref.children;

    var classNames = classnames_default()(Container_style_default.a.container, (_classnames = {}, _classnames[Container_style_default.a.noBackground] = noBackground, _classnames));

    return Object(preact_min["h"])(
        'div',
        { 'class': classNames },
        text && Object(preact_min["h"])(Title_Title, { text: text, solid: noBackground }),
        children
    );
};

/* harmony default export */ var components_Container = (Container_Container);
// CONCATENATED MODULE: ./routes/Home/index.js


function Home__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Home__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function Home__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Home__ref = Object(preact_min["h"])(
	components_Container,
	{
		noBackground: true
	},
	Object(preact_min["h"])(Navigation_Navigation, null)
);

var Home = function (_Component) {
	Home__inherits(Home, _Component);

	function Home() {
		Home__classCallCheck(this, Home);

		return Home__possibleConstructorReturn(this, _Component.apply(this, arguments));
	}

	Home.prototype.render = function render() {
		return Home__ref;
	};

	return Home;
}(preact_min["Component"]);


// EXTERNAL MODULE: ./routes/Agenda/style.scss
var Agenda_style = __webpack_require__("mm1J");
var Agenda_style_default = /*#__PURE__*/__webpack_require__.n(Agenda_style);

// EXTERNAL MODULE: ./components/EventsContainer/style.scss
var EventsContainer_style = __webpack_require__("Mp92");
var EventsContainer_style_default = /*#__PURE__*/__webpack_require__.n(EventsContainer_style);

// CONCATENATED MODULE: ./components/EventsContainer/ColumnElement.js




var ColumnElement_ColumnElement = function ColumnElement(_ref) {
  var el = _ref.el;
  return Object(preact_min["h"])(
    'span',
    null,
    el
  );
};

/* harmony default export */ var EventsContainer_ColumnElement = (ColumnElement_ColumnElement);
// CONCATENATED MODULE: ./components/EventsContainer/ColumnList.js


function ColumnList__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ColumnList__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function ColumnList__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var ColumnList_EventList = function (_Component) {
    ColumnList__inherits(EventList, _Component);

    function EventList() {
        ColumnList__classCallCheck(this, EventList);

        return ColumnList__possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    EventList.prototype.render = function render() {
        var elements = this.props.elements;

        return Object(preact_min["h"])(
            'ul',
            { className: EventsContainer_style_default.a.eventList },
            elements.map(function (el, index) {
                return Object(preact_min["h"])(
                    'li',
                    { 'class': EventsContainer_style_default.a.eventListEl, key: index },
                    Object(preact_min["h"])(EventsContainer_ColumnElement, { el: el })
                );
            })
        );
    };

    return EventList;
}(preact_min["Component"]);


// CONCATENATED MODULE: ./components/EventsContainer/EventColumn.js


function EventColumn__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function EventColumn__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function EventColumn__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var EventColumn_EventColumn = function (_Component) {
    EventColumn__inherits(EventColumn, _Component);

    function EventColumn() {
        EventColumn__classCallCheck(this, EventColumn);

        return EventColumn__possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    EventColumn.prototype.render = function render() {
        var _props = this.props,
            title = _props.title,
            elements = _props.elements;

        return Object(preact_min["h"])(
            'div',
            { className: EventsContainer_style_default.a.col },
            Object(preact_min["h"])(
                'div',
                { className: EventsContainer_style_default.a.colTitle },
                title
            ),
            Object(preact_min["h"])(ColumnList_EventList, { elements: elements })
        );
    };

    return EventColumn;
}(preact_min["Component"]);


// CONCATENATED MODULE: ./components/EventsContainer/index.js


function EventsContainer__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function EventsContainer__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function EventsContainer__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var EventsContainer_EventsContainer = function (_Component) {
    EventsContainer__inherits(EventsContainer, _Component);

    function EventsContainer() {
        EventsContainer__classCallCheck(this, EventsContainer);

        var _this = EventsContainer__possibleConstructorReturn(this, _Component.call(this));

        _this.events = [{
            time: '09:15 - 09:30',
            title: 'event opens'
        }, {
            time: '10:00 - 10:15',
            title: 'keynote'
        }, {
            time: '10:15 - 10:45',
            title: 'Jamie Bartlett'
        }, {
            time: '10:45 - 11:15',
            title: 'hands-on-tech'
        }, {
            time: '11:15 - 12:00',
            title: 'Sarah Shields, Dell EMC'
        }, {
            time: '12:00 - 13:00',
            title: 'lunch'
        }, {
            time: '13:00 - 13:30',
            title: 'Neil Sawyer, HP'
        }, {
            time: '13:30 - 14:15',
            title: 'hands-on-tech'
        }, {
            time: '14:15 - 14:45',
            title: 'David Tweedale + Liam Hopwood, Mimecast'
        }, {
            time: '14:45 - 15:15',
            title: 'Will Greenwood'
        }, {
            time: '15:15 - 15:30',
            title: 'photos'
        }, {
            time: '15:35 - 16:00',
            title: 'event close + prizes'
        }, {
            time: '19:00 - 00:30',
            title: 'after party'
        }];


        _this.times = _this.events.map(function (event) {
            return event.time;
        });
        _this.titles = _this.events.map(function (event) {
            return event.title;
        });
        return _this;
    }

    EventsContainer.prototype.render = function render() {
        return Object(preact_min["h"])(
            'div',
            { className: EventsContainer_style_default.a.eventsContainer },
            Object(preact_min["h"])(
                'div',
                { 'class': EventsContainer_style_default.a.colWrapper },
                Object(preact_min["h"])(EventColumn_EventColumn, { title: 'time.', elements: this.times }),
                Object(preact_min["h"])(EventColumn_EventColumn, { title: 'event.', elements: this.titles })
            )
        );
    };

    return EventsContainer;
}(preact_min["Component"]);


// CONCATENATED MODULE: ./routes/Agenda/index.js


function Agenda__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Agenda__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function Agenda__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Agenda__ref = Object(preact_min["h"])(
    components_Container,
    {
        text: 'agenda',
        noBackground: true
    },
    Object(preact_min["h"])(EventsContainer_EventsContainer, null)
);

var Agenda = function (_Component) {
    Agenda__inherits(Agenda, _Component);

    function Agenda() {
        Agenda__classCallCheck(this, Agenda);

        return Agenda__possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    Agenda.prototype.render = function render() {
        return Agenda__ref;
    };

    return Agenda;
}(preact_min["Component"]);


// EXTERNAL MODULE: ./routes/Topics/style.scss
var Topics_style = __webpack_require__("lCC2");
var Topics_style_default = /*#__PURE__*/__webpack_require__.n(Topics_style);

// EXTERNAL MODULE: ./components/TopicsContainer/style.scss
var TopicsContainer_style = __webpack_require__("xFSR");
var TopicsContainer_style_default = /*#__PURE__*/__webpack_require__.n(TopicsContainer_style);

// CONCATENATED MODULE: ./components/TopicsContainer/ItemTitle.js


function ItemTitle__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ItemTitle__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function ItemTitle__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var ItemTitle_ItemTitle = function (_Component) {
    ItemTitle__inherits(ItemTitle, _Component);

    function ItemTitle() {
        ItemTitle__classCallCheck(this, ItemTitle);

        return ItemTitle__possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    ItemTitle.prototype.render = function render(_ref) {
        var text = _ref.text;

        return Object(preact_min["h"])(
            'div',
            { 'class': TopicsContainer_style_default.a.itemTitle },
            Object(preact_min["h"])(
                'span',
                { 'class': TopicsContainer_style_default.a.text },
                text
            )
        );
    };

    return ItemTitle;
}(preact_min["Component"]);


// CONCATENATED MODULE: ./components/TopicsContainer/TopicItem.js


function TopicItem__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function TopicItem__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function TopicItem__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var TopicItem_TopicItem = function (_Component) {
    TopicItem__inherits(TopicItem, _Component);

    function TopicItem() {
        TopicItem__classCallCheck(this, TopicItem);

        return TopicItem__possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    TopicItem.prototype.render = function render(_ref) {
        var src = _ref.src,
            text = _ref.text,
            id = _ref.id;

        var onItemTitleClick = function onItemTitleClick() {
            Object(preact_router_es["route"])(getRoutePath('topic/' + id));
        };

        return Object(preact_min["h"])(
            'div',
            { 'class': TopicsContainer_style_default.a.itemContainer, onClick: onItemTitleClick },
            Object(preact_min["h"])('img', { src: src }),
            Object(preact_min["h"])(ItemTitle_ItemTitle, { text: text, id: id })
        );
    };

    return TopicItem;
}(preact_min["Component"]);


// CONCATENATED MODULE: ./components/TopicsContainer/index.js


function TopicsContainer__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function TopicsContainer__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function TopicsContainer__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var TopicsContainer_TopicsContainer = function (_Component) {
    TopicsContainer__inherits(TopicsContainer, _Component);

    function TopicsContainer() {
        TopicsContainer__classCallCheck(this, TopicsContainer);

        return TopicsContainer__possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    TopicsContainer.prototype.render = function render(_ref) {
        var topics = _ref.topics;

        return Object(preact_min["h"])(
            'div',
            { 'class': TopicsContainer_style_default.a.topicsContainer },
            topics.map(function (topic) {
                return Object(preact_min["h"])(TopicItem_TopicItem, { src: topic.src, text: topic.title, id: topic.id });
            })
        );
    };

    return TopicsContainer;
}(preact_min["Component"]);


// CONCATENATED MODULE: ./routes/Topics/TopicsArray.js
var topicsArray = [{
    src: '../../assets/topics/Advanced_Machine_Learning.svg',
    title: 'AI & Advanced Machine Learning.',
    id: '1'
}, {
    src: '../../assets/topics/augmented_virtual_reality.svg',
    title: 'augmented and virtual reality.',
    id: '2'
}, {
    src: '../../assets/topics/blockchain.svg',
    title: 'blockchain.',
    id: '3'
}, {
    src: '../../assets/topics/drones.svg',
    title: 'drones.',
    info: 'Until just a few years ago, drones or unmanned aerial vehicles (UAV) were restricted to military use. Today they’re a mass phenomenon. Controlled via smartphone and equipped with high-resolution cameras, they have applications for business as well as personal use. The potential is huge – and is likely to grow at a rapid pace. At pt18 you can gets hands on with the latest drone technology from the world’s leading brands.',
    id: '4'
}, {
    src: '../../assets/topics/hyperconvergence.svg',
    title: 'hyperconvergence.',
    id: '5'
}, {
    src: '../../assets/topics/things_of_interest.svg',
    title: 'things of interest.',
    id: '6'
}, {
    src: '../../assets/topics/mobility.svg',
    title: 'mobility.',
    id: '7'
}, {
    src: '../../assets/topics/security.svg',
    title: 'security.',
    id: '8'
}, {
    src: '../../assets/topics/communications.svg',
    title: 'communications.',
    id: '9'
}];

/* harmony default export */ var TopicsArray = (topicsArray);
// CONCATENATED MODULE: ./routes/Topics/index.js


function Topics__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Topics__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function Topics__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var Topics__ref = Object(preact_min["h"])(
    components_Container,
    {
        text: 'topics'
    },
    Object(preact_min["h"])(TopicsContainer_TopicsContainer, { topics: TopicsArray })
);

var Topics = function (_Component) {
    Topics__inherits(Topics, _Component);

    function Topics() {
        Topics__classCallCheck(this, Topics);

        return Topics__possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    Topics.prototype.render = function render() {
        return Topics__ref;
    };

    return Topics;
}(preact_min["Component"]);


// EXTERNAL MODULE: ./routes/Topic/style.scss
var Topic_style = __webpack_require__("XZzT");
var Topic_style_default = /*#__PURE__*/__webpack_require__.n(Topic_style);

// EXTERNAL MODULE: ./components/TopicInfo/style.scss
var TopicInfo_style = __webpack_require__("1N9l");
var TopicInfo_style_default = /*#__PURE__*/__webpack_require__.n(TopicInfo_style);

// EXTERNAL MODULE: ./components/Info/style.scss
var Info_style = __webpack_require__("2oXY");
var Info_style_default = /*#__PURE__*/__webpack_require__.n(Info_style);

// CONCATENATED MODULE: ./components/Info/InfoHeader.js


function InfoHeader__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function InfoHeader__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function InfoHeader__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var InfoHeader_InfoHeader = function (_Component) {
    InfoHeader__inherits(InfoHeader, _Component);

    function InfoHeader() {
        InfoHeader__classCallCheck(this, InfoHeader);

        return InfoHeader__possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    InfoHeader.prototype.render = function render(_ref) {
        var _classnames, _classnames2;

        var src = _ref.src,
            odd = _ref.odd,
            imgBorder = _ref.imgBorder;

        var classNames = classnames_default()(Info_style_default.a.infoHeader, (_classnames = {}, _classnames[Info_style_default.a.odd] = odd, _classnames[Info_style_default.a.even] = !odd, _classnames));
        var imgClassNames = classnames_default()(Info_style_default.a.infoImg, (_classnames2 = {}, _classnames2[Info_style_default.a.border] = imgBorder, _classnames2));
        return Object(preact_min["h"])(
            'div',
            { className: classNames },
            Object(preact_min["h"])('img', { className: imgClassNames, src: src })
        );
    };

    return InfoHeader;
}(preact_min["Component"]);


// CONCATENATED MODULE: ./components/Info/InfoDescription.js


function InfoDescription__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function InfoDescription__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function InfoDescription__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var InfoDescription_InfoDescription = function (_Component) {
    InfoDescription__inherits(InfoDescription, _Component);

    function InfoDescription() {
        InfoDescription__classCallCheck(this, InfoDescription);

        return InfoDescription__possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    InfoDescription.prototype.render = function render(_ref) {
        var _classnames;

        var name = _ref.name,
            title = _ref.title,
            smallTitle = _ref.smallTitle,
            info = _ref.info,
            odd = _ref.odd;

        var classNames = classnames_default()(Info_style_default.a.descriptionWrapper, (_classnames = {}, _classnames[Info_style_default.a.odd] = odd, _classnames[Info_style_default.a.even] = !odd, _classnames));
        return Object(preact_min["h"])(
            'div',
            { className: Info_style_default.a.descriptionContainer },
            Object(preact_min["h"])(
                'div',
                { className: classNames },
                Object(preact_min["h"])(
                    'p',
                    { className: Info_style_default.a.name },
                    name
                ),
                Object(preact_min["h"])(
                    'p',
                    { className: Info_style_default.a.title },
                    title
                ),
                Object(preact_min["h"])(
                    'p',
                    { className: Info_style_default.a.smallTitle },
                    smallTitle
                ),
                Object(preact_min["h"])(
                    'p',
                    { className: Info_style_default.a.info },
                    info
                )
            )
        );
    };

    return InfoDescription;
}(preact_min["Component"]);


// CONCATENATED MODULE: ./components/Info/index.js


function Info__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Info__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function Info__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var Info_Info = function (_Component) {
    Info__inherits(Info, _Component);

    function Info() {
        Info__classCallCheck(this, Info);

        return Info__possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    Info.prototype.render = function render(_ref) {
        var item = _ref.item,
            odd = _ref.odd,
            imgBorder = _ref.imgBorder;
        var src = item.src,
            title = item.title,
            smallTitle = item.smallTitle,
            name = item.name,
            info = item.info;

        return Object(preact_min["h"])(
            'div',
            { 'class': Info_style_default.a.infoContainer },
            Object(preact_min["h"])(InfoHeader_InfoHeader, { src: src, odd: odd, imgBorder: imgBorder }),
            Object(preact_min["h"])(InfoDescription_InfoDescription, {
                name: name,
                title: title,
                smallTitle: smallTitle,
                info: info,
                odd: odd
            })
        );
    };

    return Info;
}(preact_min["Component"]);


// CONCATENATED MODULE: ./components/TopicInfo/index.js


function TopicInfo__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function TopicInfo__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function TopicInfo__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var TopicInfo_TopicInfo = function (_Component) {
    TopicInfo__inherits(TopicInfo, _Component);

    function TopicInfo() {
        TopicInfo__classCallCheck(this, TopicInfo);

        return TopicInfo__possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    TopicInfo.prototype.render = function render(_ref) {
        var topic = _ref.topic;

        var odd = true;
        var imgBorder = true;
        return Object(preact_min["h"])(Info_Info, { item: topic, odd: odd, imgBorder: imgBorder });
    };

    return TopicInfo;
}(preact_min["Component"]);


// CONCATENATED MODULE: ./routes/Topic/index.js


function Topic__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Topic__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function Topic__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var Topic_Topic = function (_Component) {
    Topic__inherits(Topic, _Component);

    function Topic() {
        Topic__classCallCheck(this, Topic);

        return Topic__possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    Topic.prototype.render = function render(_ref) {
        var url = _ref.url;

        var currentTopic = getItemById(url, TopicsArray);
        return Object(preact_min["h"])(
            components_Container,
            null,
            Object(preact_min["h"])(TopicInfo_TopicInfo, { topic: currentTopic })
        );
    };

    return Topic;
}(preact_min["Component"]);


// EXTERNAL MODULE: ./routes/Vendors/style.scss
var Vendors_style = __webpack_require__("dT2d");
var Vendors_style_default = /*#__PURE__*/__webpack_require__.n(Vendors_style);

// EXTERNAL MODULE: ./components/VendorsList/style.scss
var VendorsList_style = __webpack_require__("TJZs");
var VendorsList_style_default = /*#__PURE__*/__webpack_require__.n(VendorsList_style);

// CONCATENATED MODULE: ./components/VendorsList/index.js


function VendorsList__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function VendorsList__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function VendorsList__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var VendorsList_VendorsList = function (_Component) {
    VendorsList__inherits(VendorsList, _Component);

    function VendorsList() {
        var _temp, _this, _ret;

        VendorsList__classCallCheck(this, VendorsList);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = VendorsList__possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.vendors = ['assets/sponsors/huawei.png', 'assets/sponsors/microsoft.png', 'assets/sponsors/citrix.png', 'assets/sponsors/ikonic.png', 'assets/sponsors/mimecast.png', 'assets/sponsors/DigitalXRAID.png', 'assets/sponsors/bitdefender.png', 'assets/sponsors/s2s.png', 'assets/sponsors/dellemc.png', 'assets/sponsors/barracuda.png', 'assets/sponsors/powervision.png', 'assets/sponsors/virtual-college.png', 'assets/sponsors/lenovo.png', 'assets/sponsors/YHRCCU.png', 'assets/sponsors/canon.png', 'assets/sponsors/hp.png', 'assets/sponsors/DJI.png', 'assets/sponsors/black-marble.png', 'assets/sponsors/vapour-partner.png', 'assets/sponsors/ubtech.png', 'assets/sponsors/jct600.png', 'assets/sponsors/f-secure.png', 'assets/sponsors/zen.png', 'assets/sponsors/tesla.png', 'assets/sponsors/toshiba.png', 'assets/sponsors/symantec.png'], _temp), VendorsList__possibleConstructorReturn(_this, _ret);
    }

    VendorsList.prototype.render = function render() {
        return Object(preact_min["h"])(
            'ul',
            { className: VendorsList_style_default.a.vendorsList },
            this.vendors.map(function (src, i) {
                return Object(preact_min["h"])(
                    'li',
                    { className: VendorsList_style_default.a.vendorEl, key: i },
                    Object(preact_min["h"])('img', { src: src })
                );
            })
        );
    };

    return VendorsList;
}(preact_min["Component"]);


// CONCATENATED MODULE: ./routes/Vendors/index.js


function Vendors__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Vendors__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function Vendors__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Vendors__ref = Object(preact_min["h"])(
    components_Container,
    {
        text: 'vendors',
        noBackground: true
    },
    Object(preact_min["h"])(VendorsList_VendorsList, null)
);

var Vendors = function (_Component) {
    Vendors__inherits(Vendors, _Component);

    function Vendors() {
        Vendors__classCallCheck(this, Vendors);

        return Vendors__possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    Vendors.prototype.render = function render() {
        return Vendors__ref;
    };

    return Vendors;
}(preact_min["Component"]);


// EXTERNAL MODULE: ./components/SpeakersList/style.scss
var SpeakersList_style = __webpack_require__("n9rb");
var SpeakersList_style_default = /*#__PURE__*/__webpack_require__.n(SpeakersList_style);

// CONCATENATED MODULE: ./components/SpeakersList/Speaker.js







var Speaker_Speaker = function Speaker(_ref) {
    var _classnames;

    var speaker = _ref.speaker,
        odd = _ref.odd;
    var id = speaker.id,
        name = speaker.name,
        title = speaker.title,
        titleImg = speaker.titleImg,
        src = speaker.src;

    var classNames = classnames_default()(SpeakersList_style_default.a.speaker, (_classnames = {}, _classnames[SpeakersList_style_default.a.odd] = odd, _classnames[SpeakersList_style_default.a.even] = !odd, _classnames));

    var onSpeakerClick = function onSpeakerClick() {
        Object(preact_router_es["route"])(getRoutePath('speaker/' + id));
    };

    return Object(preact_min["h"])(
        'div',
        { className: classNames, onClick: onSpeakerClick },
        Object(preact_min["h"])(
            'div',
            { className: SpeakersList_style_default.a.speakerInfo },
            Object(preact_min["h"])(
                'div',
                { 'class': SpeakersList_style_default.a.speakerName },
                name
            ),
            Object(preact_min["h"])(
                'div',
                { className: SpeakersList_style_default.a.speakerTitle },
                title && Object(preact_min["h"])(
                    'span',
                    null,
                    ' ',
                    title,
                    ' '
                ),
                titleImg && Object(preact_min["h"])('img', { src: titleImg })
            )
        ),
        Object(preact_min["h"])('img', { className: SpeakersList_style_default.a.speakerImg, src: src })
    );
};

/* harmony default export */ var SpeakersList_Speaker = (Speaker_Speaker);
// CONCATENATED MODULE: ./components/SpeakersList/index.js





var SpeakersList_SpeakersList = function SpeakersList(_ref) {
    var speakers = _ref.speakers;
    return Object(preact_min["h"])(
        'ul',
        { className: SpeakersList_style_default.a.speakersList },
        speakers.map(function (speaker, index) {
            return Object(preact_min["h"])(
                'li',
                { className: SpeakersList_style_default.a.speakerListEl, key: index },
                Object(preact_min["h"])(SpeakersList_Speaker, {
                    speaker: speaker,
                    odd: index % 2 !== 0
                })
            );
        })
    );
};

/* harmony default export */ var components_SpeakersList = (SpeakersList_SpeakersList);
// CONCATENATED MODULE: ./routes/Speakers/SpeakersArray.js


var SpeakersArray_speakers = [{
    id: 0,
    name: 'Jamie Bartlett.',
    title: 'Guest speaker.',
    smallTitle: 'On stage: 10:15-10:45',
    info: 'Author of the factual bestseller The Dark Net, journalist and an engaging TED Talk speaker, Jamie Bartlett lights up the hidden corners of the internet to reveal the strange subcultures and protagonists that inhabit it – from Bitcoin miners to neo-Nazis. His areas of expertise range from internet culture and ‘the dark net’, social media research ethics, cryptocurrency and the reform to RIPA 2000.',
    src: '/assets/speakers/jamie-bartlett.png'
}, {
    id: 1,
    name: 'Will Greenwood.',
    title: 'Guest speaker.',
    src: '/assets/speakers/will-greenwood.png'
}, {
    id: 2,
    name: 'David Tweedale & Liam Hopwood.',
    titleImg: '/assets/logos/mimecast.png',
    src: '/assets/speakers/david-and-liam.png'
}, {
    id: 3,
    name: 'Sarah Shields.',
    smallTitle: 'DellEMC',
    info: "Sarah Shields is one of the leading female businesswomen in the UK. Sarah has been at Dell EMC since 2008 and has traversed through the company's consumer, retail, small business and now channel organisations. A strong track record of success, growth and strong leadership, Sarah is known for her sharp thinking, sense of humour and drive for success.",
    titleImg: '/assets/logos/dellemc.png',
    src: '/assets/speakers/sarah.png'
}, {
    id: 4,
    name: 'Neil Sawyer.',
    titleImg: '/assets/logos/hp.png',
    src: '/assets/speakers/neil.png'
}];

/* harmony default export */ var SpeakersArray = (SpeakersArray_speakers);
// CONCATENATED MODULE: ./routes/Speakers/index.js


function Speakers__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Speakers__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function Speakers__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Speakers__ref = Object(preact_min["h"])(
    components_Container,
    {
        text: 'speakers'
    },
    Object(preact_min["h"])(components_SpeakersList, { speakers: SpeakersArray })
);

var Speakers = function (_Component) {
    Speakers__inherits(Speakers, _Component);

    function Speakers() {
        Speakers__classCallCheck(this, Speakers);

        return Speakers__possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    Speakers.prototype.render = function render() {
        return Speakers__ref;
    };

    return Speakers;
}(preact_min["Component"]);


// EXTERNAL MODULE: ./routes/Speaker/style.scss
var Speaker_style = __webpack_require__("PmIP");
var Speaker_style_default = /*#__PURE__*/__webpack_require__.n(Speaker_style);

// EXTERNAL MODULE: ./components/SpeakerInfo/style.scss
var SpeakerInfo_style = __webpack_require__("vDo3");
var SpeakerInfo_style_default = /*#__PURE__*/__webpack_require__.n(SpeakerInfo_style);

// CONCATENATED MODULE: ./components/SpeakerInfo/index.js


function SpeakerInfo__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function SpeakerInfo__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function SpeakerInfo__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var SpeakerInfo_SpeakerInfo = function (_Component) {
    SpeakerInfo__inherits(SpeakerInfo, _Component);

    function SpeakerInfo() {
        SpeakerInfo__classCallCheck(this, SpeakerInfo);

        return SpeakerInfo__possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    SpeakerInfo.prototype.render = function render(_ref) {
        var speaker = _ref.speaker;

        var odd = speaker.id % 2 !== 0;
        var imgBorder = false;
        return Object(preact_min["h"])(Info_Info, { item: speaker, odd: odd, imgBorder: imgBorder });
    };

    return SpeakerInfo;
}(preact_min["Component"]);


// CONCATENATED MODULE: ./routes/Speaker/index.js


function Speaker__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Speaker__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function Speaker__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var routes_Speaker_Speaker = function (_Component) {
    Speaker__inherits(Speaker, _Component);

    function Speaker() {
        Speaker__classCallCheck(this, Speaker);

        return Speaker__possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    Speaker.prototype.render = function render(_ref) {
        var url = _ref.url;

        var speaker = getItemById(url, SpeakersArray);
        return Object(preact_min["h"])(
            components_Container,
            null,
            Object(preact_min["h"])(SpeakerInfo_SpeakerInfo, { speaker: speaker })
        );
    };

    return Speaker;
}(preact_min["Component"]);


// EXTERNAL MODULE: ./components/ContentContainer/style.scss
var ContentContainer_style = __webpack_require__("7KdZ");
var ContentContainer_style_default = /*#__PURE__*/__webpack_require__.n(ContentContainer_style);

// CONCATENATED MODULE: ./components/ContentContainer/index.js





var ContentContainer_ContentContainer = function ContentContainer(_ref) {
    var _classnames;

    var noBackground = _ref.noBackground,
        children = _ref.children;

    var classNames = classnames_default()(ContentContainer_style_default.a.contentContainer, (_classnames = {}, _classnames[ContentContainer_style_default.a.noBackground] = noBackground, _classnames));
    return Object(preact_min["h"])(
        'div',
        { className: classNames },
        children
    );
};

/* harmony default export */ var components_ContentContainer = (ContentContainer_ContentContainer);
// CONCATENATED MODULE: ./components/app.js


function app__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function app__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function app__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












// import Profile from '../routes/profile';
// import Home from 'async!../routes/home';
// import Profile from 'async!../routes/profile';


if (false) {
	require('preact/debug');
}

var app__ref = Object(preact_min["h"])(Home, { path: '/' });

var app__ref2 = Object(preact_min["h"])(Agenda, { path: '/agenda' });

var app__ref3 = Object(preact_min["h"])(Topics, { path: '/topics' });

var app__ref4 = Object(preact_min["h"])(Speakers, { path: '/speakers' });

var _ref5 = Object(preact_min["h"])(Vendors, { path: '/vendors' });

var app_App = function (_Component) {
	app__inherits(App, _Component);

	function App() {
		var _temp, _this, _ret;

		app__classCallCheck(this, App);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = app__possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
			isHomePage: false
		}, _this.handleRoute = function (e) {
			_this.currentUrl = e.url;

			_this.setState({
				isHomePage: _this.isHomePage()
			});
		}, _this.isHomePage = function () {
			return _this.currentUrl === '/';
		}, _temp), app__possibleConstructorReturn(_this, _ret);
	}
	/** Gets fired when the route changes.
  *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
  *	@param {string} event.url	The newly routed URL
  */


	App.prototype.render = function render() {
		return Object(preact_min["h"])(
			'div',
			{ id: 'app' },
			Object(preact_min["h"])(Header_Header, {
				isButtonHidden: this.state.isHomePage
			}),
			Object(preact_min["h"])(
				components_ContentContainer,
				null,
				Object(preact_min["h"])(
					preact_router_es["Router"],
					{ onChange: this.handleRoute },
					app__ref,
					app__ref2,
					app__ref3,
					app__ref4,
					Object(preact_min["h"])(routes_Speaker_Speaker, { path: '/speaker/:id', url: this.currentUrl }),
					Object(preact_min["h"])(Topic_Topic, { path: '/topic/:id', url: this.currentUrl }),
					_ref5
				)
			)
		);
	};

	return App;
}(preact_min["Component"]);


// CONCATENATED MODULE: ./index.js



/* harmony default export */ var index_0 = __webpack_exports__["default"] = (app_App);

/***/ }),

/***/ "KM04":
/***/ (function(module, exports, __webpack_require__) {

!function () {
  "use strict";
  function e() {}function t(t, n) {
    var o,
        r,
        i,
        l,
        a = E;for (l = arguments.length; l-- > 2;) {
      W.push(arguments[l]);
    }n && null != n.children && (W.length || W.push(n.children), delete n.children);while (W.length) {
      if ((r = W.pop()) && void 0 !== r.pop) for (l = r.length; l--;) {
        W.push(r[l]);
      } else "boolean" == typeof r && (r = null), (i = "function" != typeof t) && (null == r ? r = "" : "number" == typeof r ? r += "" : "string" != typeof r && (i = !1)), i && o ? a[a.length - 1] += r : a === E ? a = [r] : a.push(r), o = i;
    }var u = new e();return u.nodeName = t, u.children = a, u.attributes = null == n ? void 0 : n, u.key = null == n ? void 0 : n.key, void 0 !== S.vnode && S.vnode(u), u;
  }function n(e, t) {
    for (var n in t) {
      e[n] = t[n];
    }return e;
  }function o(e, o) {
    return t(e.nodeName, n(n({}, e.attributes), o), arguments.length > 2 ? [].slice.call(arguments, 2) : e.children);
  }function r(e) {
    !e.__d && (e.__d = !0) && 1 == A.push(e) && (S.debounceRendering || P)(i);
  }function i() {
    var e,
        t = A;A = [];while (e = t.pop()) {
      e.__d && k(e);
    }
  }function l(e, t, n) {
    return "string" == typeof t || "number" == typeof t ? void 0 !== e.splitText : "string" == typeof t.nodeName ? !e._componentConstructor && a(e, t.nodeName) : n || e._componentConstructor === t.nodeName;
  }function a(e, t) {
    return e.__n === t || e.nodeName.toLowerCase() === t.toLowerCase();
  }function u(e) {
    var t = n({}, e.attributes);t.children = e.children;var o = e.nodeName.defaultProps;if (void 0 !== o) for (var r in o) {
      void 0 === t[r] && (t[r] = o[r]);
    }return t;
  }function _(e, t) {
    var n = t ? document.createElementNS("http://www.w3.org/2000/svg", e) : document.createElement(e);return n.__n = e, n;
  }function p(e) {
    var t = e.parentNode;t && t.removeChild(e);
  }function c(e, t, n, o, r) {
    if ("className" === t && (t = "class"), "key" === t) ;else if ("ref" === t) n && n(null), o && o(e);else if ("class" !== t || r) {
      if ("style" === t) {
        if (o && "string" != typeof o && "string" != typeof n || (e.style.cssText = o || ""), o && "object" == typeof o) {
          if ("string" != typeof n) for (var i in n) {
            i in o || (e.style[i] = "");
          }for (var i in o) {
            e.style[i] = "number" == typeof o[i] && !1 === V.test(i) ? o[i] + "px" : o[i];
          }
        }
      } else if ("dangerouslySetInnerHTML" === t) o && (e.innerHTML = o.__html || "");else if ("o" == t[0] && "n" == t[1]) {
        var l = t !== (t = t.replace(/Capture$/, ""));t = t.toLowerCase().substring(2), o ? n || e.addEventListener(t, f, l) : e.removeEventListener(t, f, l), (e.__l || (e.__l = {}))[t] = o;
      } else if ("list" !== t && "type" !== t && !r && t in e) s(e, t, null == o ? "" : o), null != o && !1 !== o || e.removeAttribute(t);else {
        var a = r && t !== (t = t.replace(/^xlink:?/, ""));null == o || !1 === o ? a ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.removeAttribute(t) : "function" != typeof o && (a ? e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), o) : e.setAttribute(t, o));
      }
    } else e.className = o || "";
  }function s(e, t, n) {
    try {
      e[t] = n;
    } catch (e) {}
  }function f(e) {
    return this.__l[e.type](S.event && S.event(e) || e);
  }function d() {
    var e;while (e = D.pop()) {
      S.afterMount && S.afterMount(e), e.componentDidMount && e.componentDidMount();
    }
  }function h(e, t, n, o, r, i) {
    H++ || (R = null != r && void 0 !== r.ownerSVGElement, j = null != e && !("__preactattr_" in e));var l = m(e, t, n, o, i);return r && l.parentNode !== r && r.appendChild(l), --H || (j = !1, i || d()), l;
  }function m(e, t, n, o, r) {
    var i = e,
        l = R;if (null != t && "boolean" != typeof t || (t = ""), "string" == typeof t || "number" == typeof t) return e && void 0 !== e.splitText && e.parentNode && (!e._component || r) ? e.nodeValue != t && (e.nodeValue = t) : (i = document.createTextNode(t), e && (e.parentNode && e.parentNode.replaceChild(i, e), b(e, !0))), i.__preactattr_ = !0, i;var u = t.nodeName;if ("function" == typeof u) return U(e, t, n, o);if (R = "svg" === u || "foreignObject" !== u && R, u += "", (!e || !a(e, u)) && (i = _(u, R), e)) {
      while (e.firstChild) {
        i.appendChild(e.firstChild);
      }e.parentNode && e.parentNode.replaceChild(i, e), b(e, !0);
    }var p = i.firstChild,
        c = i.__preactattr_,
        s = t.children;if (null == c) {
      c = i.__preactattr_ = {};for (var f = i.attributes, d = f.length; d--;) {
        c[f[d].name] = f[d].value;
      }
    }return !j && s && 1 === s.length && "string" == typeof s[0] && null != p && void 0 !== p.splitText && null == p.nextSibling ? p.nodeValue != s[0] && (p.nodeValue = s[0]) : (s && s.length || null != p) && v(i, s, n, o, j || null != c.dangerouslySetInnerHTML), g(i, t.attributes, c), R = l, i;
  }function v(e, t, n, o, r) {
    var i,
        a,
        u,
        _,
        c,
        s = e.childNodes,
        f = [],
        d = {},
        h = 0,
        v = 0,
        y = s.length,
        g = 0,
        w = t ? t.length : 0;if (0 !== y) for (var C = 0; C < y; C++) {
      var x = s[C],
          N = x.__preactattr_,
          k = w && N ? x._component ? x._component.__k : N.key : null;null != k ? (h++, d[k] = x) : (N || (void 0 !== x.splitText ? !r || x.nodeValue.trim() : r)) && (f[g++] = x);
    }if (0 !== w) for (var C = 0; C < w; C++) {
      _ = t[C], c = null;var k = _.key;if (null != k) h && void 0 !== d[k] && (c = d[k], d[k] = void 0, h--);else if (!c && v < g) for (i = v; i < g; i++) {
        if (void 0 !== f[i] && l(a = f[i], _, r)) {
          c = a, f[i] = void 0, i === g - 1 && g--, i === v && v++;break;
        }
      }c = m(c, _, n, o), u = s[C], c && c !== e && c !== u && (null == u ? e.appendChild(c) : c === u.nextSibling ? p(u) : e.insertBefore(c, u));
    }if (h) for (var C in d) {
      void 0 !== d[C] && b(d[C], !1);
    }while (v <= g) {
      void 0 !== (c = f[g--]) && b(c, !1);
    }
  }function b(e, t) {
    var n = e._component;n ? L(n) : (null != e.__preactattr_ && e.__preactattr_.ref && e.__preactattr_.ref(null), !1 !== t && null != e.__preactattr_ || p(e), y(e));
  }function y(e) {
    e = e.lastChild;while (e) {
      var t = e.previousSibling;b(e, !0), e = t;
    }
  }function g(e, t, n) {
    var o;for (o in n) {
      t && null != t[o] || null == n[o] || c(e, o, n[o], n[o] = void 0, R);
    }for (o in t) {
      "children" === o || "innerHTML" === o || o in n && t[o] === ("value" === o || "checked" === o ? e[o] : n[o]) || c(e, o, n[o], n[o] = t[o], R);
    }
  }function w(e) {
    var t = e.constructor.name;(I[t] || (I[t] = [])).push(e);
  }function C(e, t, n) {
    var o,
        r = I[e.name];if (e.prototype && e.prototype.render ? (o = new e(t, n), T.call(o, t, n)) : (o = new T(t, n), o.constructor = e, o.render = x), r) for (var i = r.length; i--;) {
      if (r[i].constructor === e) {
        o.__b = r[i].__b, r.splice(i, 1);break;
      }
    }return o;
  }function x(e, t, n) {
    return this.constructor(e, n);
  }function N(e, t, n, o, i) {
    e.__x || (e.__x = !0, (e.__r = t.ref) && delete t.ref, (e.__k = t.key) && delete t.key, !e.base || i ? e.componentWillMount && e.componentWillMount() : e.componentWillReceiveProps && e.componentWillReceiveProps(t, o), o && o !== e.context && (e.__c || (e.__c = e.context), e.context = o), e.__p || (e.__p = e.props), e.props = t, e.__x = !1, 0 !== n && (1 !== n && !1 === S.syncComponentUpdates && e.base ? r(e) : k(e, 1, i)), e.__r && e.__r(e));
  }function k(e, t, o, r) {
    if (!e.__x) {
      var i,
          l,
          a,
          _ = e.props,
          p = e.state,
          c = e.context,
          s = e.__p || _,
          f = e.__s || p,
          m = e.__c || c,
          v = e.base,
          y = e.__b,
          g = v || y,
          w = e._component,
          x = !1;if (v && (e.props = s, e.state = f, e.context = m, 2 !== t && e.shouldComponentUpdate && !1 === e.shouldComponentUpdate(_, p, c) ? x = !0 : e.componentWillUpdate && e.componentWillUpdate(_, p, c), e.props = _, e.state = p, e.context = c), e.__p = e.__s = e.__c = e.__b = null, e.__d = !1, !x) {
        i = e.render(_, p, c), e.getChildContext && (c = n(n({}, c), e.getChildContext()));var U,
            T,
            M = i && i.nodeName;if ("function" == typeof M) {
          var W = u(i);l = w, l && l.constructor === M && W.key == l.__k ? N(l, W, 1, c, !1) : (U = l, e._component = l = C(M, W, c), l.__b = l.__b || y, l.__u = e, N(l, W, 0, c, !1), k(l, 1, o, !0)), T = l.base;
        } else a = g, U = w, U && (a = e._component = null), (g || 1 === t) && (a && (a._component = null), T = h(a, i, c, o || !v, g && g.parentNode, !0));if (g && T !== g && l !== w) {
          var E = g.parentNode;E && T !== E && (E.replaceChild(T, g), U || (g._component = null, b(g, !1)));
        }if (U && L(U), e.base = T, T && !r) {
          var P = e,
              V = e;while (V = V.__u) {
            (P = V).base = T;
          }T._component = P, T._componentConstructor = P.constructor;
        }
      }if (!v || o ? D.unshift(e) : x || (e.componentDidUpdate && e.componentDidUpdate(s, f, m), S.afterUpdate && S.afterUpdate(e)), null != e.__h) while (e.__h.length) {
        e.__h.pop().call(e);
      }H || r || d();
    }
  }function U(e, t, n, o) {
    var r = e && e._component,
        i = r,
        l = e,
        a = r && e._componentConstructor === t.nodeName,
        _ = a,
        p = u(t);while (r && !_ && (r = r.__u)) {
      _ = r.constructor === t.nodeName;
    }return r && _ && (!o || r._component) ? (N(r, p, 3, n, o), e = r.base) : (i && !a && (L(i), e = l = null), r = C(t.nodeName, p, n), e && !r.__b && (r.__b = e, l = null), N(r, p, 1, n, o), e = r.base, l && e !== l && (l._component = null, b(l, !1))), e;
  }function L(e) {
    S.beforeUnmount && S.beforeUnmount(e);var t = e.base;e.__x = !0, e.componentWillUnmount && e.componentWillUnmount(), e.base = null;var n = e._component;n ? L(n) : t && (t.__preactattr_ && t.__preactattr_.ref && t.__preactattr_.ref(null), e.__b = t, p(t), w(e), y(t)), e.__r && e.__r(null);
  }function T(e, t) {
    this.__d = !0, this.context = t, this.props = e, this.state = this.state || {};
  }function M(e, t, n) {
    return h(n, e, {}, !1, t, !1);
  }var S = {},
      W = [],
      E = [],
      P = "function" == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout,
      V = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
      A = [],
      D = [],
      H = 0,
      R = !1,
      j = !1,
      I = {};n(T.prototype, { setState: function setState(e, t) {
      var o = this.state;this.__s || (this.__s = n({}, o)), n(o, "function" == typeof e ? e(o, this.props) : e), t && (this.__h = this.__h || []).push(t), r(this);
    }, forceUpdate: function forceUpdate(e) {
      e && (this.__h = this.__h || []).push(e), k(this, 2);
    }, render: function render() {} });var $ = { h: t, createElement: t, cloneElement: o, Component: T, render: M, rerender: i, options: S }; true ? module.exports = $ : self.preact = $;
}();
//# sourceMappingURL=preact.min.js.map

/***/ }),

/***/ "KZy5":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"title":"title__26Ou8","solid":"solid__1qMbA","text":"text__kcjcD"};

/***/ }),

/***/ "Mp92":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"eventsContainer":"eventsContainer__2wdR0","colWrapper":"colWrapper__2BJV8","col":"col__upVeS","eventListEl":"eventListEl__2gCVR","colTitle":"colTitle__3ZAnn","columnEl":"columnEl__1qX1F"};

/***/ }),

/***/ "Ocae":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"btnHeader":"btnHeader__3l8Pe"};

/***/ }),

/***/ "PmIP":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "TJZs":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"vendorsList":"vendorsList__1NO-E","vendorEl":"vendorEl__2pd_Y"};

/***/ }),

/***/ "XZzT":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "b1hr":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"navigation":"navigation__bwRhI","navigationItem":"navigationItem__2DKjP"};

/***/ }),

/***/ "dT2d":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "lCC2":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "lfZt":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"container":"container__iAle2","noBackground":"noBackground__3tA_o"};

/***/ }),

/***/ "mm1J":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "n9rb":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"infoContainer":"infoContainer__ZLhB-","infoHeader":"infoHeader__mKmMN","speaker":"speaker__21FIM","even":"even__10-RG","odd":"odd__23N0m","infoImg":"infoImg__2gtcd","speakerImg":"speakerImg__2HGfb","border":"border__2ZpJJ","descriptionContainer":"descriptionContainer__1Fyz9","descriptionWrapper":"descriptionWrapper__3wLJ3","name":"name__3tHHL","title":"title__2Tn9a","smallTitle":"smallTitle__2py1A","info":"info__2BhfX","speakerInfo":"speakerInfo__2ccP1","speakerName":"speakerName__1K0-G","speakerTitle":"speakerTitle__1GEET"};

/***/ }),

/***/ "sw5u":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Link = exports.Match = undefined;

var _extends = Object.assign || function (target) {
	for (var i = 1; i < arguments.length; i++) {
		var source = arguments[i];for (var key in source) {
			if (Object.prototype.hasOwnProperty.call(source, key)) {
				target[key] = source[key];
			}
		}
	}return target;
};

var _preact = __webpack_require__("KM04");

var _preactRouter = __webpack_require__("/QC5");

function _objectWithoutProperties(obj, keys) {
	var target = {};for (var i in obj) {
		if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	}return target;
}

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Match = exports.Match = function (_Component) {
	_inherits(Match, _Component);

	function Match() {
		var _temp, _this, _ret;

		_classCallCheck(this, Match);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.update = function (url) {
			_this.nextUrl = url;
			_this.setState({});
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	Match.prototype.componentDidMount = function componentDidMount() {
		_preactRouter.subscribers.push(this.update);
	};

	Match.prototype.componentWillUnmount = function componentWillUnmount() {
		_preactRouter.subscribers.splice(_preactRouter.subscribers.indexOf(this.update) >>> 0, 1);
	};

	Match.prototype.render = function render(props) {
		var url = this.nextUrl || (0, _preactRouter.getCurrentUrl)(),
		    path = url.replace(/\?.+$/, '');
		this.nextUrl = null;
		return props.children[0] && props.children[0]({
			url: url,
			path: path,
			matches: path === props.path
		});
	};

	return Match;
}(_preact.Component);

var Link = function Link(_ref) {
	var activeClassName = _ref.activeClassName,
	    path = _ref.path,
	    props = _objectWithoutProperties(_ref, ['activeClassName', 'path']);

	return (0, _preact.h)(Match, { path: path || props.href }, function (_ref2) {
		var matches = _ref2.matches;
		return (0, _preact.h)(_preactRouter.Link, _extends({}, props, { 'class': [props.class || props.className, matches && activeClassName].filter(Boolean).join(' ') }));
	});
};

exports.Link = Link;
exports.default = Match;

Match.Link = Link;

/***/ }),

/***/ "vDo3":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "xFSR":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"topicsContainer":"topicsContainer__3OwtV","itemContainer":"itemContainer__Jglja","itemTitle":"itemTitle__3yEss","text":"text__KV-_n"};

/***/ }),

/***/ "xrtm":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"header":"header__2uRHS","buttonHidden":"buttonHidden__hOCIL","headerLogo":"headerLogo__1PVj3","hashtag":"hashtag__2yw5k","headerButtons":"headerButtons__ScJuF"};

/***/ }),

/***/ "yY49":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });
//# sourceMappingURL=ssr-bundle.js.map