(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports={
    "previews": 5,
    "cheese": {
        "min": 4,
        "max": 9
    },
    "rows": 20,
    "cols": 10,
    "offsets": {
        "JLSTZ": {
            "spawn":   [[ 0, 0], [ 0, 0], [ 0, 0], [ 0, 0], [ 0, 0]],
            "right":   [[ 0, 0], [ 1, 0], [ 1,-1], [ 0, 2], [ 1, 2]],
            "reverse": [[ 0, 0], [ 0, 0], [ 0, 0], [ 0, 0], [ 0, 0]],
            "left":    [[ 0, 0], [-1, 0], [-1,-1], [ 0, 2], [-1, 2]]
        },
        "I": {
            "spawn":   [[ 0, 0], [-1, 0], [ 2, 0], [-1, 0], [ 2, 0]],
            "right":   [[-1, 0], [ 0, 0], [ 0, 0], [ 0, 1], [ 0,-2]],
            "reverse": [[-1, 1], [ 1, 1], [-2, 1], [ 1, 0], [-2, 0]],
            "left":    [[ 0, 1], [ 0, 1], [ 0, 1], [ 0,-1], [ 0, 2]]
        },
        "O": {
            "spawn":   [[ 0, 0]],
            "right":   [[ 0,-1]],
            "reverse": [[-1,-1]],
            "left":    [[-1, 0]]
        }
    },
    "shapes": {
        "J": {
            "coords": [[-1, 1], [-1, 0], [ 0, 0], [ 1, 0]],
            "spawn": [4, 19],
            "offsets": "JLSTZ"
        },
        "L": {
            "coords": [[ 1, 1], [-1, 0], [ 0, 0], [ 1, 0]],
            "spawn": [4, 19],
            "offsets": "JLSTZ"
        },
        "T": {
            "coords": [[ 0, 1], [-1, 0], [ 0, 0], [ 1, 0]],
            "spawn": [4, 19],
            "offsets": "JLSTZ"
        },
        "S": {
            "coords": [[-1, 0], [ 0, 0], [ 0, 1], [ 1, 1]],
            "spawn": [4, 19],
            "offsets": "JLSTZ"
        },
        "Z": {
            "coords": [[ 1, 0], [ 0, 0], [ 0, 1], [-1, 1]],
            "spawn": [4, 19],
            "offsets": "JLSTZ"
        },
        "I": {
            "coords": [[-1, 0], [ 0, 0], [ 1, 0], [ 2, 0]],
            "spawn": [4, 19],
            "offsets": "I"
        },
        "O": {
            "coords": [[ 0, 0], [ 1, 0], [ 0, 1], [ 1, 1]],
            "spawn": [4, 19],
            "offsets": "O"
        }
    }
}

},{}],2:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var ruleset = require('./ruleset');
var Stacker = /*#__PURE__*/function () {
  function Stacker() {
    _classCallCheck(this, Stacker);
    Object.assign(this, {
      matrix: [],
      hold: "",
      queue: "",
      piece: null,
      comboing: false,
      clear: 0
    });
  }
  _createClass(Stacker, [{
    key: "copy",
    value: function copy() {
      var matrix = this.matrix,
        hold = this.hold,
        queue = this.queue;
      var piece = this.piece ? Object.assign({}, this.piece) : null;
      return Object.assign(new Stacker(), {
        matrix: matrix,
        hold: hold,
        queue: queue,
        piece: piece
      });
    }
  }, {
    key: "spawn",
    value: function spawn() {
      var queue = this.queue;
      if (queue === "") {
        this.piece = null;
        return null;
      }
      var type = queue[0];
      this.queue = queue.substring(1);
      var _ruleset$shapes$type$ = _slicedToArray(ruleset.shapes[type].spawn, 2),
        x = _ruleset$shapes$type$[0],
        y = _ruleset$shapes$type$[1];
      var rotation = 'spawn';
      this.piece = {
        type: type,
        x: x,
        y: y,
        rotation: rotation,
        ghostY: null
      };
      this._computeGhost();
      return type;
    }
  }, {
    key: "apply",
    value: function apply(op) {
      if (this.piece === null) {
        this.spawn();
      }
      if (op === 'hold') {
        var hold = this.hold;
        this.hold = this.piece ? this.piece.type : '';
        if (hold !== '') {
          this.queue = hold + this.queue;
        }
        return this.spawn();
      }
      switch (op) {
        case 'left':
        case 'right':
          // horizontal movement
          return this._transform([{
            dx: op == 'left' ? -1 : 1,
            dy: 0,
            r: this.piece.rotation
          }]);
        case 'ccw':
        case 'cw':
          // rotation
          // https://harddrop.com/wiki/SRS#How_Guideline_SRS_Really_Works
          return this._transform(kicks(this.piece, op));
        case 'sd':
        case 'hd':
          this._sonicDrop();
          if (op === 'hd') {
            this._lock();
          }
          break;
        default:
          break;
      }
    }
  }, {
    key: "_computeGhost",
    value: function _computeGhost() {
      if (this.piece !== null) {
        var ghost = Object.assign({}, this.piece);
        while (!this._intersects(ghost)) {
          ghost.y -= 1;
        }
        this.piece.ghostY = ghost.y + 1;
      }
    }
  }, {
    key: "_transform",
    value: function _transform(tfs) {
      var _this$piece = this.piece,
        x = _this$piece.x,
        y = _this$piece.y,
        rotation = _this$piece.rotation;
      var attempt = 0;
      var _iterator = _createForOfIteratorHelper(tfs),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _step.value,
            dx = _step$value.dx,
            dy = _step$value.dy,
            r = _step$value.r;
          attempt++;
          this.piece.x = x + dx;
          this.piece.y = y + dy;
          this.piece.rotation = r;
          if (!this._intersects(this.piece)) {
            this._computeGhost();
            return attempt;
          }
        }
        // reset since all attempts failed
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      this.piece.x = x;
      this.piece.y = y;
      this.piece.rotation = rotation;
      return null;
    }
  }, {
    key: "_sonicDrop",
    value: function _sonicDrop() {
      this.piece.y = this.piece.ghostY;
    }
  }, {
    key: "_intersects",
    value: function _intersects(pc) {
      var _this = this;
      return minos(pc).some(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          dx = _ref2[0],
          dy = _ref2[1];
        return _this._getMatrix(pc.x + dx, pc.y + dy) != '_';
      });
    }
  }, {
    key: "_lock",
    value: function _lock() {
      var _this$piece2 = this.piece,
        type = _this$piece2.type,
        x = _this$piece2.x,
        y = _this$piece2.y;
      var _iterator2 = _createForOfIteratorHelper(minos(this.piece)),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _step2$value = _slicedToArray(_step2.value, 2),
            dx = _step2$value[0],
            dy = _step2$value[1];
          this._setMatrix(x + dx, y + dy, type);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      this.sift();
      this.spawn();
      this.comboing = this.clear > 0;
    }
  }, {
    key: "_getMatrix",
    value: function _getMatrix(x, y) {
      if (x < 0 || x >= ruleset.cols || y < 0) {
        return 'X';
      } else if (y >= this.matrix.length) {
        return '_';
      } else {
        return this.matrix[y][x];
      }
    }
  }, {
    key: "_setMatrix",
    value: function _setMatrix(x, y, c) {
      if (x < 0 || x >= ruleset.cols || y < 0) {
        throw new Error('_setMatrix() invalid position');
      }
      while (y >= this.matrix.length) {
        this.matrix.push(EMPTY_ROW);
      }
      var row = this.matrix[y];
      this.matrix[y] = row.substring(0, x) + c + row.substring(x + 1);
    }
  }, {
    key: "sift",
    value: function sift() {
      this.clear = 0;
      for (var y = 0; y < this.matrix.length; y++) {
        if (!this.matrix[y].includes('_')) {
          this.matrix.splice(y, 1);
          y -= 1;
          this.clear++;
        }
      }
    }
  }]);
  return Stacker;
}();
var ROTATE = {
  'spawn': {
    'no': 'spawn',
    'cw': 'right',
    'ccw': 'left'
  },
  'right': {
    'no': 'right',
    'cw': 'reverse',
    'ccw': 'spawn'
  },
  'reverse': {
    'no': 'reverse',
    'cw': 'left',
    'ccw': 'right'
  },
  'left': {
    'no': 'left',
    'cw': 'spawn',
    'ccw': 'reverse'
  }
};
function minos(_ref3) {
  var type = _ref3.type,
    rotation = _ref3.rotation;
  var rotate;
  switch (rotation) {
    case 'spawn':
      rotate = function rotate(xy) {
        return xy;
      };
      break;
    case 'right':
      rotate = function rotate(_ref4) {
        var _ref5 = _slicedToArray(_ref4, 2),
          x = _ref5[0],
          y = _ref5[1];
        return [y, -x];
      };
      break;
    case 'reverse':
      rotate = function rotate(_ref6) {
        var _ref7 = _slicedToArray(_ref6, 2),
          x = _ref7[0],
          y = _ref7[1];
        return [-x, -y];
      };
      break;
    case 'left':
      rotate = function rotate(_ref8) {
        var _ref9 = _slicedToArray(_ref8, 2),
          x = _ref9[0],
          y = _ref9[1];
        return [-y, x];
      };
      break;
  }
  return ruleset.shapes[type].coords.map(rotate);
}
function kicks(_ref10, spin) {
  var type = _ref10.type,
    rotation = _ref10.rotation;
  var r0 = rotation;
  var r1 = ROTATE[r0][spin];
  var offsets = ruleset.offsets[ruleset.shapes[type].offsets];
  var tfs = [];
  for (var i = 0; i < offsets.spawn.length; i++) {
    var _offsets$r0$i = _slicedToArray(offsets[r0][i], 2),
      x0 = _offsets$r0$i[0],
      y0 = _offsets$r0$i[1];
    var _offsets$r1$i = _slicedToArray(offsets[r1][i], 2),
      x1 = _offsets$r1$i[0],
      y1 = _offsets$r1$i[1];
    tfs.push({
      dx: x0 - x1,
      dy: y0 - y1,
      r: r1
    });
  }
  return tfs;
}
function makeEmptyRow() {
  var emptyRow = '';
  while (emptyRow.length < ruleset.cols) {
    emptyRow += '_';
  }
  return emptyRow;
}
var EMPTY_ROW = makeEmptyRow();

// TODO: make this bag generator an injected dependency
var RandomBagStacker = /*#__PURE__*/function (_Stacker) {
  _inherits(RandomBagStacker, _Stacker);
  var _super = _createSuper(RandomBagStacker);
  function RandomBagStacker() {
    var _this2;
    _classCallCheck(this, RandomBagStacker);
    _this2 = _super.call(this);
    Object.assign(_assertThisInitialized(_this2), {
      _bag: []
    });
    _this2._refill();
    return _this2;
  }
  _createClass(RandomBagStacker, [{
    key: "spawn",
    value: function spawn() {
      _get(_getPrototypeOf(RandomBagStacker.prototype), "spawn", this).call(this);
      this._refill();
    }
  }, {
    key: "_refill",
    value: function _refill() {
      while (this.queue.length < ruleset.previews) {
        if (this._bag.length === 0) {
          this._bag = Object.keys(ruleset.shapes).slice(0);
        }
        var i = Math.floor(Math.random() * this._bag.length);
        var type = this._bag.splice(i, 1)[0];
        this.queue += type;
      }
    }
  }]);
  return RandomBagStacker;
}(Stacker);
var TBPorientationMapping = {
  "north": "spawn",
  "east": "right",
  "south": "reverse",
  "west": "left"
};
var reverseOp = {
  "up": "sd",
  "l": "right",
  "r": "left",
  "cw": "ccw",
  "ccw": "cw"
};
var ops = ["up", "l", "r", "cw", "ccw"];
var VSStacker = /*#__PURE__*/function (_RandomBagStacker) {
  _inherits(VSStacker, _RandomBagStacker);
  var _super2 = _createSuper(VSStacker);
  function VSStacker() {
    var _this3;
    _classCallCheck(this, VSStacker);
    _this3 = _super2.call(this);
    Object.assign(_assertThisInitialized(_this3), {
      garbage: [],
      combos: 0,
      garbageTick: false,
      _spin: ""
    });
    return _this3;
  }
  _createClass(VSStacker, [{
    key: "setSpin",
    value: function setSpin(spin) {
      this._spin = spin;
    }
  }, {
    key: "_addGarbage",
    value: function _addGarbage(height, col) {
      if (col >= ruleset.cols || col < 0) return;
      var line = '';
      for (var i = 0; i < ruleset.cols; i++) {
        line += i === col ? '_' : 'X';
      }
      for (var _i2 = 0; _i2 < height; _i2++) {
        this.matrix.unshift(line);
      }
      this._computeGhost();
    }
  }, {
    key: "apply",
    value: function apply(op) {
      _get(_getPrototypeOf(VSStacker.prototype), "apply", this).call(this, op);
      if (op === 'hd') {
        this.garbageTick = false;
        if (this.comboing) {
          return;
        }
        while (this.garbage.length > 0) {
          this.garbageTick = true;
          var g = this.garbage.shift();
          this._addGarbage(g.height, g.col);
        }
      }
    }
  }, {
    key: "_lock",
    value: function _lock() {
      _get(_getPrototypeOf(VSStacker.prototype), "_lock", this).call(this);
      if (this.comboing) this.combos++;else this.combos = 0;
    }
  }]);
  return VSStacker;
}(RandomBagStacker);
var CheeseRaceStacker = /*#__PURE__*/function (_RandomBagStacker2) {
  _inherits(CheeseRaceStacker, _RandomBagStacker2);
  var _super3 = _createSuper(CheeseRaceStacker);
  function CheeseRaceStacker() {
    var _this4;
    _classCallCheck(this, CheeseRaceStacker);
    _this4 = _super3.call(this);
    Object.assign(_assertThisInitialized(_this4), {
      _prevGarbageCol: null
    });
    _this4._cheese();
    return _this4;
  }
  _createClass(CheeseRaceStacker, [{
    key: "apply",
    value: function apply(op) {
      _get(_getPrototypeOf(CheeseRaceStacker.prototype), "apply", this).call(this, op);
      if (op === 'hd') {
        this._cheese();
      }
    }
  }, {
    key: "_cheese",
    value: function _cheese() {
      var cheese = 0;
      var _iterator3 = _createForOfIteratorHelper(this.matrix),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var row = _step3.value;
          if (row.includes('X')) {
            cheese += 1;
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      var target = this.comboing ? ruleset.cheese.min : ruleset.cheese.max;
      while (cheese < target) {
        cheese += 1;
        this._addGarbage(1);
      }
    }
  }, {
    key: "_addGarbage",
    value: function _addGarbage(height) {
      var col;
      if (this._prevGarbageCol === null) {
        col = Math.floor(Math.random() * ruleset.cols);
      } else {
        col = Math.floor(Math.random() * (ruleset.cols - 1));
        col = (col + this._prevGarbageCol + 1) % ruleset.cols;
      }
      this._prevGarbageCol = col;
      var line = '';
      for (var i = 0; i < ruleset.cols; i++) {
        line += i === col ? '_' : 'X';
      }
      for (var _i3 = 0; _i3 < height; _i3++) {
        this.matrix.unshift(line);
      }
      this._computeGhost();
    }
  }]);
  return CheeseRaceStacker;
}(RandomBagStacker);
var TBPB2B = {
  "I": true,
  "T": true
};
var TBPStacker = /*#__PURE__*/function (_VSStacker) {
  _inherits(TBPStacker, _VSStacker);
  var _super4 = _createSuper(TBPStacker);
  function TBPStacker() {
    var _this5;
    _classCallCheck(this, TBPStacker);
    _this5 = _super4.call(this);
    Object.assign(_assertThisInitialized(_this5), {
      _targetPeice: null,
      b2b: 0
    });
    return _this5;
  }
  _createClass(TBPStacker, [{
    key: "pathFinding",
    value: function pathFinding(location, spin) {
      var orientation = location.orientation,
        type = location.type,
        initX = location.x,
        initY = location.y;
      orientation = TBPorientationMapping[orientation];
      var curPiece = {
        type: type,
        x: initX,
        y: initY,
        rotation: orientation,
        ghostY: null
      };
      this._targetPeice = curPiece;
      this.setSpin(spin);
    }
  }, {
    key: "convertBoard",
    value: function convertBoard(board) {
      var curBoard = this.matrix.map(function (row) {
        return row.split('').map(function (c) {
          if (c == "_") return null;
          if (c == "X") return "G";
          return c;
        });
      });
      curBoard.forEach(function (r, row) {
        r.forEach(function (c, col) {
          board[row][col] = c;
        });
      });
      return curBoard;
    }
  }, {
    key: "sift",
    value: function sift() {
      _get(_getPrototypeOf(TBPStacker.prototype), "sift", this).call(this);
      if (this.clearline > 0) {
        if (!TBPB2B[this.piece.type]) {
          this.b2b = 0;
        } else {
          if (this.piece.type == "I" && this.clearline < 4) {
            this.b2b = 0;
          } else if (this.piece.type == "T" && this._spin == "none") {
            this.b2b = 0;
          } else {
            this.b2b++;
          }
        }
      }
    }
  }]);
  return TBPStacker;
}(VSStacker); // Debug perpose
var InstantMoveStacker = /*#__PURE__*/function (_TBPStacker) {
  _inherits(InstantMoveStacker, _TBPStacker);
  var _super5 = _createSuper(InstantMoveStacker);
  function InstantMoveStacker() {
    _classCallCheck(this, InstantMoveStacker);
    return _super5.apply(this, arguments);
  }
  _createClass(InstantMoveStacker, [{
    key: "pathFinding",
    value: function pathFinding(location, spin) {
      _get(_getPrototypeOf(InstantMoveStacker.prototype), "pathFinding", this).call(this, location, spin);
      var targetPeice = this._targetPeice;
      var steps = [];
      if (this.piece.type != targetPeice.type) {
        steps.push("hold");
      }
      if (targetPeice.rotation == "right") {
        steps.push("cw");
      }
      if (targetPeice.rotation == "left") {
        steps.push("ccw");
      }
      if (targetPeice.rotation == "reverse") {
        steps.push("cw");
        steps.push("cw");
      }
      steps.push("im");
      steps.push("hd");
      console.log("move create");
      return steps;
    }
  }, {
    key: "apply",
    value: function apply(op) {
      _get(_getPrototypeOf(InstantMoveStacker.prototype), "apply", this).call(this, op);
      if (op == "im") {
        this.piece.x = this._targetPeice.x;
        this.piece.y = this._targetPeice.y;
        this._computeGhost();
      }
    }
  }]);
  return InstantMoveStacker;
}(TBPStacker);
var PathFindingStacker = /*#__PURE__*/function (_TBPStacker2) {
  _inherits(PathFindingStacker, _TBPStacker2);
  var _super6 = _createSuper(PathFindingStacker);
  function PathFindingStacker() {
    _classCallCheck(this, PathFindingStacker);
    return _super6.apply(this, arguments);
  }
  _createClass(PathFindingStacker, [{
    key: "_transformForPath",
    value: function _transformForPath(piece, tfs) {
      var x = piece.x,
        y = piece.y,
        rotation = piece.rotation;
      var attempt = 0;
      var _iterator4 = _createForOfIteratorHelper(tfs),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var _step4$value = _step4.value,
            dx = _step4$value.dx,
            dy = _step4$value.dy,
            r = _step4$value.r;
          attempt++;
          piece.x = x + dx;
          piece.y = y + dy;
          piece.rotation = r;
          if (!this._intersects(piece)) {
            return attempt;
          }
        }
        // reset since all attempts failed
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      piece.x = x;
      piece.y = y;
      piece.rotation = rotation;
      return null;
    }
  }, {
    key: "_pathFinding",
    value: function _pathFinding(curPiece, spawnPiece, test) {
      if (curPiece.x == spawnPiece.x && curPiece.y == spawnPiece.y && curPiece.rotation == spawnPiece.rotation) return true;
      var h = {
        "l": -1,
        "r": 1
      };
      do {
        var originPiece = Object.assign({}, curPiece);
        for (var _i4 = 0, _ops = ops; _i4 < _ops.length; _i4++) {
          var op = _ops[_i4];
          if (test.length > 0 && (op == "l" && test.slice(-1) == "r" || op == "r" && test.slice(-1) == "l")) {
            continue;
          }
          test.push(op);
          if (op == "up" && curPiece.y < spawnPiece.y) {
            curPiece.y++;
            if (!this._intersects(curPiece)) {
              if (this._pathFinding(curPiece, spawnPiece, test)) return true;
            }
            curPiece.y--;
          }
          if (op == "l" || op == "r") {
            var offset = h[op];
            curPiece.x += offset;
            if (!this._intersects(curPiece)) {
              if (this._pathFinding(curPiece, spawnPiece, test)) return true;
            }
            curPiece.x = originPiece.x;
          }
          if (op == "cw" || op == "ccw") {
            var distance = Math.abs(spawnPiece.x - curPiece.x) + Math.abs(spawnPiece.y - curPiece.y);
            if (this._transformForPath(curPiece, kicks(curPiece, op)) != null) {
              var newDistance = Math.abs(spawnPiece.x - curPiece.x) + Math.abs(spawnPiece.y - curPiece.y);
              if (distance >= newDistance && this._pathFinding(curPiece, spawnPiece, test)) return true;
            }
            curPiece = originPiece;
          }
          test.pop();
        }
      } while (test.length > 0);
      return false;
    }
  }, {
    key: "pathFinding",
    value: function pathFinding(location) {
      var orientation = location.orientation,
        type = location.type,
        initX = location.x,
        initY = location.y;
      orientation = TBPorientationMapping[orientation];
      var _ruleset$shapes$type$2 = _slicedToArray(ruleset.shapes[type].spawn, 2),
        x = _ruleset$shapes$type$2[0],
        y = _ruleset$shapes$type$2[1];
      var rotation = 'spawn';
      var spawnPiece = {
        type: type,
        x: x,
        y: y,
        rotation: rotation,
        ghostY: null
      };
      var curPiece = {
        type: type,
        x: initX,
        y: initY,
        rotation: orientation,
        ghostY: null
      };
      var test = [];
      var steps = [];
      if (this._pathFinding(curPiece, spawnPiece, test)) {
        // reverse test ops and fill inputs
        while (test.length > 0) {
          var op = reverseOp[test.pop()];
          if (op == "sd" && steps.length > 0 && steps.slice(-1) == "sd") continue;
          steps.push(op);
        }
      }
      if (steps.slice(-1) == "sd") steps.pop();
      steps.push("hd");
      console.log(steps);
      return steps;
    }
  }]);
  return PathFindingStacker;
}(TBPStacker); // attack per peice
var APPStacker = /*#__PURE__*/function (_InstantMoveStacker) {
  _inherits(APPStacker, _InstantMoveStacker);
  var _super7 = _createSuper(APPStacker);
  function APPStacker() {
    var _this6;
    _classCallCheck(this, APPStacker);
    _this6 = _super7.call(this);
    Object.assign(_assertThisInitialized(_this6), {
      _garbageListIdx: 0,
      _garbageList: [0]
    });
    return _this6;
  }
  // deep copy
  _createClass(APPStacker, [{
    key: "setGarbageList",
    value: function setGarbageList(gList) {
      if (gList.length < 1) return;
      this._garbageList = _toConsumableArray(gList);
    }
  }, {
    key: "tick",
    value: function tick() {
      var g = this._garbageList[this._garbageListIdx];
      if (g > 0) {
        this.garbage.push({
          height: g,
          col: Math.floor(Math.random() * ruleset.cols)
        });
      }
      this._garbageListIdx = (this._garbageListIdx + 1) % this._garbageList.length;
    }
  }, {
    key: "apply",
    value: function apply(op) {
      _get(_getPrototypeOf(APPStacker.prototype), "apply", this).call(this, op);
      if (op == "hd") {
        this.tick();
      }
    }
  }]);
  return APPStacker;
}(InstantMoveStacker);
module.exports = {
  Stacker: Stacker,
  RandomBagStacker: RandomBagStacker,
  VSStacker: VSStacker,
  InstantMoveStacker: InstantMoveStacker,
  APPStacker: APPStacker,
  CheeseRaceStacker: CheeseRaceStacker,
  minos: minos
};

},{"./ruleset":1}],3:[function(require,module,exports){
module.exports={
    "bg": "#000000",
    "grid": ["#101010", "#202020", "#404040"],
    "garbage": "#FF270F",
    "mino": {
        "Z": "#d70f37",
        "L": "#e35b02",
        "O": "#e39f02",
        "S": "#59b101",
        "I": "#0f9bd7",
        "J": "#2141c6",
        "T": "#af298a",
        "X": "#999999"
    }
}

},{}],4:[function(require,module,exports){
"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var stacker = require('./stacker');
var rules = require('./ruleset');
var theme = require('./theme');
var CELL = 30;
var View = /*#__PURE__*/function () {
  function View(stacker, drawing) {
    _classCallCheck(this, View);
    function context(x) {
      return {
        canvas: drawing[x],
        ctx: drawing[x].getContext('2d')
      };
    }
    Object.assign(this, {
      stacker: stacker,
      container: drawing.container,
      garbage: context('garbage'),
      matrix: context('matrix'),
      previews: context('previews'),
      hold: context('hold')
    });
  }
  _createClass(View, [{
    key: "resize",
    value: function resize() {
      this.matrix.canvas.width = CELL * rules.cols;
      this.matrix.canvas.height = CELL * rules.rows;
      this.garbage.canvas.width = CELL / 3;
      this.garbage.canvas.height = CELL * rules.rows;
      this.previews.canvas.width = CELL * 4;
      this.previews.canvas.height = CELL * 3 * 5;
      this.hold.canvas.width = CELL * 4;
      this.hold.canvas.height = CELL * 3;
    }
  }, {
    key: "_clear",
    value: function _clear(_ref) {
      var canvas = _ref.canvas,
        ctx = _ref.ctx;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      this.container.style.backgroundColor = theme.bg;
    }
  }, {
    key: "_drawGrid",
    value: function _drawGrid() {
      var ctx = this.matrix.ctx;

      // horizontal and vertical grid lines
      ctx.beginPath();
      for (var i = 1; i < rules.rows; i++) {
        ctx.moveTo(0, i * CELL + .5);
        ctx.lineTo(rules.cols * CELL, i * CELL + .5);
      }
      for (var _i = 1; _i < rules.cols; _i++) {
        ctx.moveTo(_i * CELL + .5, 0);
        ctx.lineTo(_i * CELL + .5, rules.rows * CELL);
      }
      ctx.strokeStyle = theme.grid[0];
      ctx.stroke();

      // crosses on grid intersections
      ctx.beginPath();
      var d = Math.floor(CELL * 0.3);
      for (var _i2 = 1; _i2 < rules.rows; _i2++) {
        var y = _i2 * CELL + .5;
        for (var j = 1; j < rules.cols; j++) {
          var x = j * CELL + .5;
          ctx.moveTo(x - d, y);
          ctx.lineTo(x + d, y);
          ctx.moveTo(x, y - d);
          ctx.lineTo(x, y + d);
        }
      }
      ctx.strokeStyle = theme.grid[1];
      ctx.stroke();

      // outline around the edges
      ctx.beginPath();
      ctx.moveTo(0.5, 0.5);
      ctx.lineTo(0.5, rules.rows * CELL - 0.5);
      ctx.lineTo(rules.cols * CELL - 0.5, rules.rows * CELL - 0.5);
      ctx.lineTo(rules.cols * CELL - 0.5, 0.5);
      ctx.lineTo(0.5, 0.5);
      ctx.strokeStyle = theme.grid[2];
      ctx.stroke();
    }
  }, {
    key: "_drawGarbage",
    value: function _drawGarbage() {
      var ctx = this.garbage.ctx;
      var garbage = this.stacker.garbage;
      var garbageNum = garbage.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue.height;
      }, 0);
      for (var i = 0; i < garbageNum; i++) {
        var y = (rules.rows - i - 1) * CELL;
        ctx.fillStyle = theme.garbage;
        ctx.fillRect(0, y, 10, CELL);
      }
    }
  }, {
    key: "_drawMatrixCells",
    value: function _drawMatrixCells() {
      var ctx = this.matrix.ctx;
      var matrix = this.stacker.matrix;
      for (var i = 0; i < matrix.length; i++) {
        var y = (rules.rows - i - 1) * CELL;
        for (var j = 0; j < rules.cols; j++) {
          var x = j * CELL;
          var c = matrix[i][j];
          if (c == '_') {
            continue;
          }
          ctx.fillStyle = theme.mino[c];
          ctx.fillRect(x, y, CELL, CELL);
        }
      }
    }
  }, {
    key: "_drawPiece",
    value: function _drawPiece() {
      var ctx = this.matrix.ctx;
      var piece = this.stacker.piece;
      if (piece === null) {
        return;
      }
      var coords = stacker.minos(piece).map(function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 2),
          dx = _ref3[0],
          dy = _ref3[1];
        return [piece.x + dx, piece.y + dy, piece.ghostY + dy];
      });

      // ghost
      ctx.beginPath();
      var _iterator = _createForOfIteratorHelper(coords),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _slicedToArray(_step.value, 3),
            x = _step$value[0],
            _y = _step$value[1],
            gY = _step$value[2];
          var sx = x * CELL;
          var sy = (rules.rows - gY - 1) * CELL;
          ctx.rect(sx, sy, CELL, CELL);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      ctx.globalAlpha = 0.4;
      ctx.fillStyle = theme.mino[piece.type];
      ctx.fill();

      // piece
      ctx.beginPath();
      var _iterator2 = _createForOfIteratorHelper(coords),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _step2$value = _slicedToArray(_step2.value, 3),
            _x = _step2$value[0],
            y = _step2$value[1],
            _gY = _step2$value[2];
          var _sx = _x * CELL;
          var _sy = (rules.rows - y - 1) * CELL;
          ctx.rect(_sx, _sy, CELL, CELL);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      ctx.globalAlpha = 1;
      ctx.fillStyle = theme.mino[piece.type];
      ctx.fill();
    }
  }, {
    key: "_drawQueue",
    value: function _drawQueue(ctx, queue) {
      for (var i = 0; i < queue.length; i++) {
        var type = queue[i];
        var coords = rules.shapes[type].coords;

        // apply offset to minos to draw them roughly centered
        var ox = void 0,
          oy = void 0;
        switch (type) {
          case 'I':
            ox = 1;
            oy = 0;
            break;
          case 'O':
            ox = 0.5;
            oy = 1;
            break;
          default:
            ox = 1.5;
            oy = 1;
            break;
        }

        // draw minos
        ctx.beginPath();
        var _iterator3 = _createForOfIteratorHelper(coords),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _step3$value = _slicedToArray(_step3.value, 2),
              x = _step3$value[0],
              y = _step3$value[1];
            var sx = (ox + x) * CELL;
            var sy = (i * 3 + oy - y) * CELL;
            ctx.rect(sx, sy, CELL, CELL);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        ctx.fillStyle = theme.mino[type];
        ctx.fill();
      }
    }
  }, {
    key: "_drawHold",
    value: function _drawHold() {
      this._drawQueue(this.hold.ctx, this.stacker.hold);
    }
  }, {
    key: "_drawPreviews",
    value: function _drawPreviews() {
      this._drawQueue(this.previews.ctx, this.stacker.queue);
    }
  }, {
    key: "draw",
    value: function draw() {
      this._clear(this.matrix);
      this._drawGrid();
      this._drawMatrixCells();
      this._drawPiece();
      this._clear(this.garbage);
      this._drawGarbage();
      this._clear(this.hold);
      this._drawHold();
      this._clear(this.previews);
      this._drawPreviews();
    }
  }]);
  return View;
}();
module.exports = {
  View: View
};

},{"./ruleset":1,"./stacker":2,"./theme":3}],5:[function(require,module,exports){
"use strict";

var _require = require('./stacker'),
  APPStacker = _require.APPStacker;
var _require2 = require('./view'),
  View = _require2.View;
var stacker = new APPStacker();
stacker.spawn();
stacker.setGarbageList([1, 0, 0, 0, 1, 0]);
var hold = null;
var drawing = {
  container: document.body,
  matrix: document.getElementById('matrix'),
  garbage: document.getElementById('garbage'),
  hold: document.getElementById('hold'),
  previews: document.getElementById('previews')
};
var view = new View(stacker, drawing);
view.resize();
view.draw();
var gameMsg = {
  "type": "start",
  "hold": null,
  "combo": 0,
  "back_to_back": false,
  "board": getEmptyBoard()
};
gameMsg["queue"] = (stacker.piece.type + stacker.queue).split("");
//"queue":["I","T","I","L","O","Z"]
console.log(gameMsg);
function getEmptyBoard() {
  return [[null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null]];
}
var bot = new Worker("./build.emscripten/misaImport.js");
bot.onmessage = function (m) {
  // console.log(m.data);
  switch (m.data.type) {
    case "info":
      bot.postMessage({
        "type": "rules"
      });
      break;
    case "ready":
      bot.postMessage(gameMsg);
      bot.postMessage({
        "type": "suggest"
      });
      break;
    // do pathfinding and push to inputs then animate will process steps inside
    case "suggestion":
      var move = m.data.moves[0];
      console.log(move);
      hold = stacker.hold;
      var steps = stacker.pathFinding(move.location, move.spin);
      bot.postMessage({
        "type": "play",
        "move": m.data.moves[0]
      });
      steps.push("delay");
      inputs = steps;
      break;
    default:
      break;
  }
};

// document.getElementById("next").addEventListener("click", function() {
//   console.log(this.id);
//   bot.postMessage({"type":"suggest"});
// });
var inputs = null;
function animate() {
  if (inputs === null) {
    return;
  }
  if (inputs.length === 0) {
    inputs = null;

    // normal update
    if (!stacker.garbageTick) {
      if (hold == '' && hold != stacker.hold) {
        console.log("add peice " + stacker.queue.slice(-2));
        bot.postMessage({
          "type": "new_piece",
          "piece": stacker.queue.slice(-2, -1)
        });
      }
      bot.postMessage({
        "type": "new_piece",
        "piece": stacker.queue.slice(-1)
      });
      console.log("add peice " + stacker.queue.slice(-1));
    }
    // update the whole board
    else {
      gameMsg["board"] = getEmptyBoard();
      var curBoard = stacker.convertBoard(gameMsg["board"]);
      console.log("curBoard");
      console.log(curBoard);
      gameMsg["back_to_back"] = stacker.b2b > 0;
      gameMsg["queue"] = (stacker.piece.type + stacker.queue).split("");
      gameMsg["combo"] = stacker.combos;
      gameMsg["hold"] = stacker.hold == '' ? null : stacker.hold;
      console.log("update board");
      console.log(gameMsg);
      // gameMsg["back_to_back_num"] = stacker.b2b;
      bot.postMessage(gameMsg);
      // // bot.postMessage({"type":"stop"});
    }
    // send tbp request to bot
    // count++;
    // if (count < 6)
    bot.postMessage({
      "type": "suggest"
    });
    return;
  }
  // inputs.shift();
  stacker.apply(inputs.shift());
  view.draw();
}
setInterval(animate, 100);

},{"./stacker":2,"./view":4}]},{},[5]);
