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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _layout = require('../components/layout');

var _layout2 = _interopRequireDefault(_layout);

var _reactstrap = require('reactstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/sethjohnson/Documents/Seth Johnson Files/test/next2/pages/index.js?entry';


var _class = function (_React$Component) {
    (0, _inherits3.default)(_class, _React$Component);

    function _class(props) {
        (0, _classCallCheck3.default)(this, _class);

        var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, props));

        _this.state = {};
        return _this;
    }

    (0, _createClass3.default)(_class, [{
        key: 'sayHi',
        value: function sayHi() {
            alert('Hi seth!');
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18
                }
            }, _react2.default.createElement(_reactstrap.Button, { color: 'danger', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19
                }
            }, 'Danger!'), _react2.default.createElement('h1', { onClick: this.sayHi, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20
                }
            }, 'HOME | WEBSITE'));
        }
    }]);

    return _class;
}(_react2.default.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGF5b3V0IiwiQnV0dG9uIiwiRmFkZSIsInByb3BzIiwic3RhdGUiLCJhbGVydCIsInNheUhpIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBUyxBQUFROzs7Ozs7OztvQ0FJYjs7b0JBQUEsQUFBWSxPQUFPOzRDQUFBOzswSUFBQSxBQUNULEFBQ047O2NBQUEsQUFBSyxRQUZVLEFBRWYsQUFBYTtlQUNoQjs7Ozs7Z0NBRU8sQUFDSjtrQkFBQSxBQUFNLEFBQ1Q7Ozs7aUNBRVEsQUFDTDttQ0FDSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLEFBQUMsb0NBQU8sT0FBUixBQUFjOzhCQUFkO2dDQUFBO0FBQUE7ZUFESixBQUNJLEFBQ0EsNEJBQUEsY0FBQSxRQUFJLFNBQVMsS0FBYixBQUFrQjs4QkFBbEI7Z0NBQUE7QUFBQTtlQUhSLEFBQ0ksQUFFSSxBQUdYOzs7OztFQWxCd0IsZ0JBQU0sQSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvc2V0aGpvaG5zb24vRG9jdW1lbnRzL1NldGggSm9obnNvbiBGaWxlcy90ZXN0L25leHQyIn0=