function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _getPrototypeOf(o) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    }, _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
    return _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        return o.__proto__ = p, o;
    }, _setPrototypeOf(o, p);
}
var M1, N1, C1 = function() {
    "use strict";
    _classCallCheck(this, C1);
}, C2 = function(C) {
    "use strict";
    !function(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function");
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                writable: !0,
                configurable: !0
            }
        }), superClass && _setPrototypeOf(subClass, superClass);
    }(C2, C);
    var _super = function(Derived) {
        var hasNativeReflectConstruct = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                })), !0;
            } catch (e) {
                return !1;
            }
        }();
        return function() {
            var obj, self, call, result, Super = _getPrototypeOf(Derived);
            if (hasNativeReflectConstruct) {
                var NewTarget = _getPrototypeOf(this).constructor;
                result = Reflect.construct(Super, arguments, NewTarget);
            } else result = Super.apply(this, arguments);
            return self = this, (call = result) && ("object" == ((obj = call) && "undefined" != typeof Symbol && obj.constructor === Symbol ? "symbol" : typeof obj) || "function" == typeof call) ? call : (function(self) {
                if (void 0 === self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return self;
            })(self);
        };
    }(C2);
    function C2() {
        return _classCallCheck(this, C2), _super.apply(this, arguments);
    }
    return C2;
}(C1), D = function() {
    "use strict";
    _classCallCheck(this, D);
};
for(!function(M) {
    var A = function() {
        "use strict";
        _classCallCheck(this, A);
    };
    M.A = A, M.F2 = function(x) {
        return x.toString();
    };
}(M1 || (M1 = {
})), (function(N) {
    var A = function() {
        "use strict";
        _classCallCheck(this, A);
    };
    N.A = A, N.F2 = function(x) {
        return x.toString();
    };
})(N1 || (N1 = {
}));;);
for(;;);
do ;
while (null)
do ;
while (void 0)
do ;
while (0)
for(;;);
for(;;);
do ;
while ("")
for(;;);
for(;;);
for(;;);
for(;;);
for(;;);
for(;;);
for(;;);
for(;;);
for(;;);
for(;;);
for(;;);
for(;;);
for(new C1(); new C1(););
do ;
while (new C1())
for(new D(); new D(););
do ;
while (new D())
for(var a = !0; a;);
do ;
while (a)
do ;
while (null)
for(var c = void 0; c;);
do ;
while (c)
do ;
while (0)
for(var e = "a string"; e;);
do ;
while (e)
"";
do ;
while ("")
for(var g = /[a-z]/; g;);
do ;
while (g)
for(var h = []; h;);
do ;
while (h)
for(var i = [
    1,
    2
]; i;);
do ;
while (i)
for(var j = {
}; j;);
do ;
while (j)
for(var k = {
    x: 1,
    y: "a"
}; k;);
do ;
while (k)
function fn(x) {
    return null;
}
for(fn(); fn(););
do ;
while (fn())
for(; fn;);
do ;
while (fn)