'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _header = require('./header');

var _header2 = _interopRequireDefault(_header);

var _bootstrapMin = require('bootstrap/dist/css/bootstrap.min.css');

var _bootstrapMin2 = _interopRequireDefault(_bootstrapMin);

var _global = require('../styles/global.scss');

var _global2 = _interopRequireDefault(_global);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/sethjohnson/Documents/Seth Johnson Files/test/next2/components/meta.js';

exports.default = function (_ref) {
    var _ref$title = _ref.title,
        title = _ref$title === undefined ? 'This is the default title' : _ref$title;
    return _react2.default.createElement(_head2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 8
        }
    }, _react2.default.createElement('title', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }, title), _react2.default.createElement('meta', { charSet: 'utf-8', __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    }), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    }), _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _bootstrapMin2.default }, __source: {
            fileName: _jsxFileName,
            lineNumber: 13
        }
    }), _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _global2.default }, __source: {
            fileName: _jsxFileName,
            lineNumber: 15
        }
    }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWV0YS5qcyJdLCJuYW1lcyI6WyJMaW5rIiwiSGVhZCIsIkhlYWRlciIsImJvb3RzdHJhcCIsImdsb2Jfc3R5bGUiLCJ0aXRsZSIsIl9faHRtbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPLEFBRVA7Ozs7Ozs7O2tCQUFlLGdCQUFBOzBCQUFBLEFBQUc7UUFBSCxBQUFHLG1DQUFILEFBQVcsOEJBQVg7MkJBQ1gsQUFBQzs7c0JBQUQ7d0JBQUEsQUFDSTtBQURKO0FBQUEsS0FBQSxrQkFDSSxjQUFBOztzQkFBQTt3QkFBQSxBQUFRO0FBQVI7QUFBQSxPQURKLEFBQ0ksQUFDQSxnREFBTSxTQUFOLEFBQWM7c0JBQWQ7d0JBRkosQUFFSSxBQUNBO0FBREE7Z0RBQ00sTUFBTixBQUFXLFlBQVcsU0FBdEIsQUFBOEI7c0JBQTlCO3dCQUhKLEFBR0ksQUFFQTtBQUZBO2lEQUVPLHlCQUF5QixFQUFoQyxBQUFnQyxBQUFFLEFBQVE7c0JBQTFDO3dCQUxKLEFBS0ksQUFFQTtBQUZBO2lEQUVPLHlCQUF5QixFQUFoQyxBQUFnQyxBQUFFLEFBQVE7c0JBQTFDO3dCQVJPLEFBQ1gsQUFPSTtBQUFBOztBQVJSIiwiZmlsZSI6Im1ldGEuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3NldGhqb2huc29uL0RvY3VtZW50cy9TZXRoIEpvaG5zb24gRmlsZXMvdGVzdC9uZXh0MiJ9