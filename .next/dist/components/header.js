'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _header = require('../styles/header.scss');

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/sethjohnson/Documents/Seth Johnson Files/test/next2/components/header.js';


var _class = function (_React$Component) {
    (0, _inherits3.default)(_class, _React$Component);

    function _class(props) {
        (0, _classCallCheck3.default)(this, _class);

        var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, props));

        _this.state = {
            listSrc: [{ name: "Home", link: "/" }, { name: "Services", link: "/services" }, { name: "About Us", link: "/about-us" }, { name: "Blog", link: "/blog" }, { name: "Get a Quote", link: "/quote" }]
        };

        return _this;
    }

    (0, _createClass3.default)(_class, [{
        key: 'listItems',
        value: function listItems() {
            return this.state.listSrc.map(function (item) {
                return _react2.default.createElement('li', { key: item.name, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 26
                    }
                }, _react2.default.createElement('a', { href: item.link, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 27
                    }
                }, item.name));
            });
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement('header', { id: 'header', 'class': 'd-flex justify-content-start align-items-center', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _header2.default }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }), _react2.default.createElement('nav', { className: 'main-navigation', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, _react2.default.createElement('ul', { className: 'd-flex justify-content-between align-items-center', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, this.listItems())), _react2.default.createElement('div', { 'class': 'ml-5 search-form', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, _react2.default.createElement('input', { type: 'text', placeholder: 'What service are you looking for?', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            })));
        }
    }]);

    return _class;
}(_react2.default.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGVhZGVyLmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJSZWFjdCIsInN0eWxlc2hlZXQiLCJwcm9wcyIsInN0YXRlIiwibGlzdFNyYyIsIm5hbWUiLCJsaW5rIiwibWFwIiwiaXRlbSIsIl9faHRtbCIsImxpc3RJdGVtcyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7Ozs7b0NBSUg7O29CQUFBLEFBQVksT0FBTzs0Q0FBQTs7MElBQUEsQUFFVCxBQUVOOztjQUFBLEFBQUs7cUJBQ1EsQ0FDTCxFQUFFLE1BQUYsQUFBUSxRQUFRLE1BRFgsQUFDTCxBQUFzQixPQUN0QixFQUFFLE1BQUYsQUFBUSxZQUFZLE1BRmYsQUFFTCxBQUEwQixlQUMxQixFQUFFLE1BQUYsQUFBUSxZQUFZLE1BSGYsQUFHTCxBQUEwQixlQUMxQixFQUFFLE1BQUYsQUFBUSxRQUFRLE1BSlgsQUFJTCxBQUFzQixXQUN0QixFQUFFLE1BQUYsQUFBUSxlQUFlLE1BVmhCLEFBSWYsQUFBYSxBQUNBLEFBS0wsQUFBNkI7QUFOeEIsQUFDVDs7ZUFTUDs7Ozs7b0NBRVcsQUFDUjt3QkFBTyxBQUFLLE1BQUwsQUFBVyxRQUFYLEFBQW1CLElBQUksVUFBQSxBQUFVLE1BQU0sQUFDMUM7dUNBQ0ksY0FBQSxRQUFJLEtBQUssS0FBVCxBQUFjO2tDQUFkO29DQUFBLEFBQ0k7QUFESjtpQkFBQSxrQkFDSSxjQUFBLE9BQUcsTUFBTSxLQUFULEFBQWM7a0NBQWQ7b0NBQUEsQUFBcUI7QUFBckI7d0JBRlIsQUFDSSxBQUNJLEFBQTBCLEFBR3JDO0FBTkQsQUFBTyxBQU9WLGFBUFU7Ozs7aUNBU0YsQUFFTDs7bUNBQ0ksY0FBQSxZQUFRLElBQVIsQUFBVyxVQUFTLFNBQXBCLEFBQTBCOzhCQUExQjtnQ0FBQSxBQUNJO0FBREo7YUFBQSwyQ0FDVyx5QkFBeUIsRUFBaEMsQUFBZ0MsQUFBRSxBQUFROzhCQUExQztnQ0FESixBQUNJLEFBQ0E7QUFEQTtnQ0FDQSxjQUFBLFNBQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBLFFBQUksV0FBSixBQUFjOzhCQUFkO2dDQUFBLEFBQ0s7QUFETDtvQkFIUixBQUVJLEFBQ0ksQUFDSyxBQUFLLEFBR2QsK0JBQUEsY0FBQSxTQUFLLFNBQUwsQUFBVzs4QkFBWDtnQ0FBQSxBQUNJO0FBREo7d0RBQ1csTUFBUCxBQUFZLFFBQU8sYUFBbkIsQUFBK0I7OEJBQS9CO2dDQVRaLEFBQ0ksQUFPSSxBQUNJLEFBSWY7QUFKZTs7Ozs7O0VBdkNTLGdCQUFNLEEiLCJmaWxlIjoiaGVhZGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zZXRoam9obnNvbi9Eb2N1bWVudHMvU2V0aCBKb2huc29uIEZpbGVzL3Rlc3QvbmV4dDIifQ==