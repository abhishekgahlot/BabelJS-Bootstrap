(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Polygon = (function () {
    function Polygon(width, height) {
        _classCallCheck(this, Polygon);

        this.name = "Polygon";
        this.width = width;
        this.height = height;
    }

    _createClass(Polygon, [{
        key: "sayName",
        value: function sayName() {
            console.log("Hi, my name is " + this.name);
        }
    }]);

    return Polygon;
})();

module.exports = Polygon;

},{}],2:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Polygon = require('./Polygon');

var Square = (function (_Polygon) {
    _inherits(Square, _Polygon);

    function Square() {
        var length = arguments.length <= 0 || arguments[0] === undefined ? 10 : arguments[0];

        _classCallCheck(this, Square);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Square).call(this, length, length));

        _this.name = 'Square';
        return _this;
    }

    _createClass(Square, [{
        key: 'area',
        get: function get() {
            return this.height * this.width;
        }
    }]);

    return Square;
})(Polygon);

module.exports = Square;

},{"./Polygon":1}],3:[function(require,module,exports){
'use strict';

var utils = require('./utils');
var iso = require('../../portable');
var Square = require('./Square');

console.log("Client side code started");
//console.log(iso.validateId("353"));

var s1 = new Square(5);
var s2 = new Square(10);

console.log(s1.area, s2.area);
console.log(s1.sayName());

//utils.count();

},{"../../portable":5,"./Square":2,"./utils":4}],4:[function(require,module,exports){
'use strict';

module.exports = {
  count: count
};

function count() {
  var count = 0;
  setInterval(function () {
    return console.log(count++);
  }, 400);
}

},{}],5:[function(require,module,exports){
'use strict';

module.exports = {
  validateId: validateId
};

var ID_PREFIX = "USER_";
function validateId(id) {
  return typeof id == "string" && id.indexOf(ID_PREFIX) === 0;
}

},{}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjbGllbnQvYXBwL1BvbHlnb24uanMiLCJjbGllbnQvYXBwL1NxdWFyZS5qcyIsImNsaWVudC9hcHAvbWFpbi5qcyIsImNsaWVudC9hcHAvdXRpbHMvaW5kZXguanMiLCJwb3J0YWJsZS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLFlBQVksQ0FBQzs7Ozs7O0lBRVAsT0FBTztBQUVULGFBRkUsT0FBTyxDQUVHLEtBQUssRUFBRSxNQUFNLEVBQUM7OEJBRnhCLE9BQU87O0FBR0wsWUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7QUFDdEIsWUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7QUFDbkIsWUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7S0FDeEI7O2lCQU5DLE9BQU87O2tDQVFDO0FBQ04sbUJBQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzlDOzs7V0FWQyxPQUFPOzs7QUFjYixNQUFNLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQzs7O0FDaEJ6QixZQUFZLENBQUM7Ozs7Ozs7Ozs7QUFFYixJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7O0lBRTdCLE1BQU07Y0FBTixNQUFNOztBQUVSLGFBRkUsTUFBTSxHQUVlO1lBQVgsTUFBTSx5REFBQyxFQUFFOzs4QkFGbkIsTUFBTTs7MkVBQU4sTUFBTSxhQUdFLE1BQU0sRUFBRSxNQUFNOztBQUNwQixjQUFLLElBQUksR0FBRyxRQUFRLENBQUM7O0tBQ3hCOztpQkFMQyxNQUFNOzs0QkFPRztBQUNQLG1CQUFPLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUNuQzs7O1dBVEMsTUFBTTtHQUFTLE9BQU87O0FBWTVCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDOzs7QUNoQnhCLFlBQVksQ0FBQzs7QUFFYixJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDL0IsSUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDcEMsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDOztBQUVqQyxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDOzs7QUFBQyxBQUd4QyxJQUFJLEVBQUUsR0FBRyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN2QixJQUFJLEVBQUUsR0FBRyxJQUFJLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQzs7QUFFeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQzs7O0FBQUM7O0FDYjFCLFlBQVksQ0FBQzs7QUFFYixNQUFNLENBQUMsT0FBTyxHQUFHO0FBQ2YsT0FBSyxFQUFMLEtBQUs7Q0FDTixDQUFDOztBQUVGLFNBQVMsS0FBSyxHQUFJO0FBQ2hCLE1BQUksS0FBSyxHQUFHLENBQUMsQ0FBQztBQUNkLGFBQVcsQ0FBQztXQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUM7R0FBQSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0NBQzlDOzs7QUNURCxZQUFZLENBQUM7O0FBRWIsTUFBTSxDQUFDLE9BQU8sR0FBRztBQUNmLFlBQVUsRUFBVixVQUFVO0NBQ1gsQ0FBQzs7QUFFRixJQUFNLFNBQVMsR0FBRyxPQUFPLENBQUM7QUFDMUIsU0FBUyxVQUFVLENBQUMsRUFBRSxFQUFFO0FBQ3RCLFNBQU8sT0FBTyxFQUFFLElBQUksUUFBUSxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0NBQzdEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgUG9seWdvbiB7XG5cbiAgICBjb25zdHJ1Y3Rvcih3aWR0aCwgaGVpZ2h0KXtcbiAgICAgICAgdGhpcy5uYW1lID0gXCJQb2x5Z29uXCI7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgfVxuXG4gICAgc2F5TmFtZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJIaSwgbXkgbmFtZSBpcyBcIiArIHRoaXMubmFtZSk7XG4gICAgfVxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gUG9seWdvbjsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBQb2x5Z29uID0gcmVxdWlyZSgnLi9Qb2x5Z29uJyk7XG5cbmNsYXNzIFNxdWFyZSBleHRlbmRzIFBvbHlnb24ge1xuXG4gICAgY29uc3RydWN0b3IobGVuZ3RoPTEwKSB7XG4gICAgICAgIHN1cGVyKGxlbmd0aCwgbGVuZ3RoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gJ1NxdWFyZSc7XG4gICAgfVxuXG4gICAgZ2V0IGFyZWEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhlaWdodCAqIHRoaXMud2lkdGg7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNxdWFyZTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBpc28gPSByZXF1aXJlKCcuLi8uLi9wb3J0YWJsZScpO1xudmFyIFNxdWFyZSA9IHJlcXVpcmUoJy4vU3F1YXJlJyk7XG5cbmNvbnNvbGUubG9nKFwiQ2xpZW50IHNpZGUgY29kZSBzdGFydGVkXCIpO1xuLy9jb25zb2xlLmxvZyhpc28udmFsaWRhdGVJZChcIjM1M1wiKSk7XG5cbnZhciBzMSA9IG5ldyBTcXVhcmUoNSk7XG52YXIgczIgPSBuZXcgU3F1YXJlKDEwKTtcblxuY29uc29sZS5sb2coczEuYXJlYSwgczIuYXJlYSk7XG5jb25zb2xlLmxvZyhzMS5zYXlOYW1lKCkpO1xuXG4vL3V0aWxzLmNvdW50KCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY291bnRcbn07XG5cbmZ1bmN0aW9uIGNvdW50ICgpIHtcbiAgdmFyIGNvdW50ID0gMDtcbiAgc2V0SW50ZXJ2YWwoKCkgPT4gY29uc29sZS5sb2coY291bnQrKyksIDQwMCk7XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgdmFsaWRhdGVJZFxufTtcblxuY29uc3QgSURfUFJFRklYID0gXCJVU0VSX1wiO1xuZnVuY3Rpb24gdmFsaWRhdGVJZChpZCkge1xuICByZXR1cm4gdHlwZW9mIGlkID09IFwic3RyaW5nXCIgJiYgaWQuaW5kZXhPZihJRF9QUkVGSVgpID09PSAwO1xufSJdfQ==
