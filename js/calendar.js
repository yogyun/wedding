(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.addToCalendar = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
    module.exports = function browserLocale () {
      var lang
    
      if (navigator.languages && navigator.languages.length) {
        // latest versions of Chrome and Firefox set this correctly
        lang = navigator.languages[0]
      } else if (navigator.userLanguage) {
        // IE only
        lang = navigator.userLanguage
      } else {
        // latest versions of Chrome, Firefox, and Safari set this correctly
        lang = navigator.language
      }
    
      return lang
    }
    
    },{}],2:[function(require,module,exports){
    (function (global){(function (){
    (function(a,b){if("function"==typeof define&&define.amd)define([],b);else if("undefined"!=typeof exports)b();else{b(),a.FileSaver={exports:{}}.exports}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(b,c,d){var e=new XMLHttpRequest;e.open("GET",b),e.responseType="blob",e.onload=function(){a(e.response,c,d)},e.onerror=function(){console.error("could not download file")},e.send()}function d(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,a=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(a,b,d,e){if(e=e||open("","_blank"),e&&(e.document.title=e.document.body.innerText="downloading..."),"string"==typeof a)return c(a,b,d);var g="application/octet-stream"===a.type,h=/constructor/i.test(f.HTMLElement)||f.safari,i=/CriOS\/[\d]+/.test(navigator.userAgent);if((i||g&&h)&&"object"==typeof FileReader){var j=new FileReader;j.onloadend=function(){var a=j.result;a=i?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),e?e.location.href=a:location=a,e=null},j.readAsDataURL(a)}else{var k=f.URL||f.webkitURL,l=k.createObjectURL(a);e?e.location=l:location.href=l,e=null,setTimeout(function(){k.revokeObjectURL(l)},4E4)}});f.saveAs=a.saveAs=a,"undefined"!=typeof module&&(module.exports=a)});
    
    
    }).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
    },{}],3:[function(require,module,exports){
    /**
     * lodash (Custom Build) <https://lodash.com/>
     * Build: `lodash modularize exports="npm" -o ./`
     * Copyright jQuery Foundation and other contributors <https://jquery.org/>
     * Released under MIT license <https://lodash.com/license>
     * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
     * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
     */
    
    /** Used as references for various `Number` constants. */
    var MAX_SAFE_INTEGER = 9007199254740991;
    
    /** `Object#toString` result references. */
    var argsTag = '[object Arguments]',
        funcTag = '[object Function]',
        genTag = '[object GeneratorFunction]';
    
    /** Used to detect unsigned integer values. */
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    
    /**
     * A faster alternative to `Function#apply`, this function invokes `func`
     * with the `this` binding of `thisArg` and the arguments of `args`.
     *
     * @private
     * @param {Function} func The function to invoke.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {Array} args The arguments to invoke `func` with.
     * @returns {*} Returns the result of `func`.
     */
    function apply(func, thisArg, args) {
      switch (args.length) {
        case 0: return func.call(thisArg);
        case 1: return func.call(thisArg, args[0]);
        case 2: return func.call(thisArg, args[0], args[1]);
        case 3: return func.call(thisArg, args[0], args[1], args[2]);
      }
      return func.apply(thisArg, args);
    }
    
    /**
     * The base implementation of `_.times` without support for iteratee shorthands
     * or max array length checks.
     *
     * @private
     * @param {number} n The number of times to invoke `iteratee`.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns the array of results.
     */
    function baseTimes(n, iteratee) {
      var index = -1,
          result = Array(n);
    
      while (++index < n) {
        result[index] = iteratee(index);
      }
      return result;
    }
    
    /**
     * Creates a unary function that invokes `func` with its argument transformed.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {Function} transform The argument transform.
     * @returns {Function} Returns the new function.
     */
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    
    /** Used for built-in method references. */
    var objectProto = Object.prototype;
    
    /** Used to check objects for own properties. */
    var hasOwnProperty = objectProto.hasOwnProperty;
    
    /**
     * Used to resolve the
     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
     * of values.
     */
    var objectToString = objectProto.toString;
    
    /** Built-in value references. */
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    
    /* Built-in method references for those with the same name as other `lodash` methods. */
    var nativeKeys = overArg(Object.keys, Object),
        nativeMax = Math.max;
    
    /** Detect if properties shadowing those on `Object.prototype` are non-enumerable. */
    var nonEnumShadows = !propertyIsEnumerable.call({ 'valueOf': 1 }, 'valueOf');
    
    /**
     * Creates an array of the enumerable property names of the array-like `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @param {boolean} inherited Specify returning inherited property names.
     * @returns {Array} Returns the array of property names.
     */
    function arrayLikeKeys(value, inherited) {
      // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
      // Safari 9 makes `arguments.length` enumerable in strict mode.
      var result = (isArray(value) || isArguments(value))
        ? baseTimes(value.length, String)
        : [];
    
      var length = result.length,
          skipIndexes = !!length;
    
      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) &&
            !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
          result.push(key);
        }
      }
      return result;
    }
    
    /**
     * Assigns `value` to `key` of `object` if the existing value is not equivalent
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
    function assignValue(object, key, value) {
      var objValue = object[key];
      if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
          (value === undefined && !(key in object))) {
        object[key] = value;
      }
    }
    
    /**
     * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key != 'constructor') {
          result.push(key);
        }
      }
      return result;
    }
    
    /**
     * The base implementation of `_.rest` which doesn't validate or coerce arguments.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     */
    function baseRest(func, start) {
      start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
      return function() {
        var args = arguments,
            index = -1,
            length = nativeMax(args.length - start, 0),
            array = Array(length);
    
        while (++index < length) {
          array[index] = args[start + index];
        }
        index = -1;
        var otherArgs = Array(start + 1);
        while (++index < start) {
          otherArgs[index] = args[index];
        }
        otherArgs[start] = array;
        return apply(func, this, otherArgs);
      };
    }
    
    /**
     * Copies properties of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy properties from.
     * @param {Array} props The property identifiers to copy.
     * @param {Object} [object={}] The object to copy properties to.
     * @param {Function} [customizer] The function to customize copied values.
     * @returns {Object} Returns `object`.
     */
    function copyObject(source, props, object, customizer) {
      object || (object = {});
    
      var index = -1,
          length = props.length;
    
      while (++index < length) {
        var key = props[index];
    
        var newValue = customizer
          ? customizer(object[key], source[key], key, object, source)
          : undefined;
    
        assignValue(object, key, newValue === undefined ? source[key] : newValue);
      }
      return object;
    }
    
    /**
     * Creates a function like `_.assign`.
     *
     * @private
     * @param {Function} assigner The function to assign values.
     * @returns {Function} Returns the new assigner function.
     */
    function createAssigner(assigner) {
      return baseRest(function(object, sources) {
        var index = -1,
            length = sources.length,
            customizer = length > 1 ? sources[length - 1] : undefined,
            guard = length > 2 ? sources[2] : undefined;
    
        customizer = (assigner.length > 3 && typeof customizer == 'function')
          ? (length--, customizer)
          : undefined;
    
        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
          customizer = length < 3 ? undefined : customizer;
          length = 1;
        }
        object = Object(object);
        while (++index < length) {
          var source = sources[index];
          if (source) {
            assigner(object, source, index, customizer);
          }
        }
        return object;
      });
    }
    
    /**
     * Checks if `value` is a valid array-like index.
     *
     * @private
     * @param {*} value The value to check.
     * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
     * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
     */
    function isIndex(value, length) {
      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length &&
        (typeof value == 'number' || reIsUint.test(value)) &&
        (value > -1 && value % 1 == 0 && value < length);
    }
    
    /**
     * Checks if the given arguments are from an iteratee call.
     *
     * @private
     * @param {*} value The potential iteratee value argument.
     * @param {*} index The potential iteratee index or key argument.
     * @param {*} object The potential iteratee object argument.
     * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
     *  else `false`.
     */
    function isIterateeCall(value, index, object) {
      if (!isObject(object)) {
        return false;
      }
      var type = typeof index;
      if (type == 'number'
            ? (isArrayLike(object) && isIndex(index, object.length))
            : (type == 'string' && index in object)
          ) {
        return eq(object[index], value);
      }
      return false;
    }
    
    /**
     * Checks if `value` is likely a prototype object.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
     */
    function isPrototype(value) {
      var Ctor = value && value.constructor,
          proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;
    
      return value === proto;
    }
    
    /**
     * Performs a
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * comparison between two values to determine if they are equivalent.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.eq(object, object);
     * // => true
     *
     * _.eq(object, other);
     * // => false
     *
     * _.eq('a', 'a');
     * // => true
     *
     * _.eq('a', Object('a'));
     * // => false
     *
     * _.eq(NaN, NaN);
     * // => true
     */
    function eq(value, other) {
      return value === other || (value !== value && other !== other);
    }
    
    /**
     * Checks if `value` is likely an `arguments` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     *  else `false`.
     * @example
     *
     * _.isArguments(function() { return arguments; }());
     * // => true
     *
     * _.isArguments([1, 2, 3]);
     * // => false
     */
    function isArguments(value) {
      // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
      return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
        (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
    }
    
    /**
     * Checks if `value` is classified as an `Array` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array, else `false`.
     * @example
     *
     * _.isArray([1, 2, 3]);
     * // => true
     *
     * _.isArray(document.body.children);
     * // => false
     *
     * _.isArray('abc');
     * // => false
     *
     * _.isArray(_.noop);
     * // => false
     */
    var isArray = Array.isArray;
    
    /**
     * Checks if `value` is array-like. A value is considered array-like if it's
     * not a function and has a `value.length` that's an integer greater than or
     * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
     * @example
     *
     * _.isArrayLike([1, 2, 3]);
     * // => true
     *
     * _.isArrayLike(document.body.children);
     * // => true
     *
     * _.isArrayLike('abc');
     * // => true
     *
     * _.isArrayLike(_.noop);
     * // => false
     */
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }
    
    /**
     * This method is like `_.isArrayLike` except that it also checks if `value`
     * is an object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array-like object,
     *  else `false`.
     * @example
     *
     * _.isArrayLikeObject([1, 2, 3]);
     * // => true
     *
     * _.isArrayLikeObject(document.body.children);
     * // => true
     *
     * _.isArrayLikeObject('abc');
     * // => false
     *
     * _.isArrayLikeObject(_.noop);
     * // => false
     */
    function isArrayLikeObject(value) {
      return isObjectLike(value) && isArrayLike(value);
    }
    
    /**
     * Checks if `value` is classified as a `Function` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a function, else `false`.
     * @example
     *
     * _.isFunction(_);
     * // => true
     *
     * _.isFunction(/abc/);
     * // => false
     */
    function isFunction(value) {
      // The use of `Object#toString` avoids issues with the `typeof` operator
      // in Safari 8-9 which returns 'object' for typed array and other constructors.
      var tag = isObject(value) ? objectToString.call(value) : '';
      return tag == funcTag || tag == genTag;
    }
    
    /**
     * Checks if `value` is a valid array-like length.
     *
     * **Note:** This method is loosely based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
     * @example
     *
     * _.isLength(3);
     * // => true
     *
     * _.isLength(Number.MIN_VALUE);
     * // => false
     *
     * _.isLength(Infinity);
     * // => false
     *
     * _.isLength('3');
     * // => false
     */
    function isLength(value) {
      return typeof value == 'number' &&
        value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    
    /**
     * Checks if `value` is the
     * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
     * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
     * @example
     *
     * _.isObject({});
     * // => true
     *
     * _.isObject([1, 2, 3]);
     * // => true
     *
     * _.isObject(_.noop);
     * // => true
     *
     * _.isObject(null);
     * // => false
     */
    function isObject(value) {
      var type = typeof value;
      return !!value && (type == 'object' || type == 'function');
    }
    
    /**
     * Checks if `value` is object-like. A value is object-like if it's not `null`
     * and has a `typeof` result of "object".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
     * @example
     *
     * _.isObjectLike({});
     * // => true
     *
     * _.isObjectLike([1, 2, 3]);
     * // => true
     *
     * _.isObjectLike(_.noop);
     * // => false
     *
     * _.isObjectLike(null);
     * // => false
     */
    function isObjectLike(value) {
      return !!value && typeof value == 'object';
    }
    
    /**
     * Assigns own enumerable string keyed properties of source objects to the
     * destination object. Source objects are applied from left to right.
     * Subsequent sources overwrite property assignments of previous sources.
     *
     * **Note:** This method mutates `object` and is loosely based on
     * [`Object.assign`](https://mdn.io/Object/assign).
     *
     * @static
     * @memberOf _
     * @since 0.10.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.assignIn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * function Bar() {
     *   this.c = 3;
     * }
     *
     * Foo.prototype.b = 2;
     * Bar.prototype.d = 4;
     *
     * _.assign({ 'a': 0 }, new Foo, new Bar);
     * // => { 'a': 1, 'c': 3 }
     */
    var assign = createAssigner(function(object, source) {
      if (nonEnumShadows || isPrototype(source) || isArrayLike(source)) {
        copyObject(source, keys(source), object);
        return;
      }
      for (var key in source) {
        if (hasOwnProperty.call(source, key)) {
          assignValue(object, key, source[key]);
        }
      }
    });
    
    /**
     * Creates an array of the own enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects. See the
     * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * for more details.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keys(new Foo);
     * // => ['a', 'b'] (iteration order is not guaranteed)
     *
     * _.keys('hi');
     * // => ['0', '1']
     */
    function keys(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }
    
    module.exports = assign;
    
    },{}],4:[function(require,module,exports){
    /**
     * lodash (Custom Build) <https://lodash.com/>
     * Build: `lodash modularize exports="npm" -o ./`
     * Copyright jQuery Foundation and other contributors <https://jquery.org/>
     * Released under MIT license <https://lodash.com/license>
     * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
     * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
     */
    
    /** Used as references for various `Number` constants. */
    var MAX_SAFE_INTEGER = 9007199254740991;
    
    /** `Object#toString` result references. */
    var argsTag = '[object Arguments]',
        funcTag = '[object Function]',
        genTag = '[object GeneratorFunction]';
    
    /** Used to detect unsigned integer values. */
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    
    /**
     * The base implementation of `_.times` without support for iteratee shorthands
     * or max array length checks.
     *
     * @private
     * @param {number} n The number of times to invoke `iteratee`.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns the array of results.
     */
    function baseTimes(n, iteratee) {
      var index = -1,
          result = Array(n);
    
      while (++index < n) {
        result[index] = iteratee(index);
      }
      return result;
    }
    
    /**
     * Creates a unary function that invokes `func` with its argument transformed.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {Function} transform The argument transform.
     * @returns {Function} Returns the new function.
     */
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    
    /** Used for built-in method references. */
    var objectProto = Object.prototype;
    
    /** Used to check objects for own properties. */
    var hasOwnProperty = objectProto.hasOwnProperty;
    
    /**
     * Used to resolve the
     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
     * of values.
     */
    var objectToString = objectProto.toString;
    
    /** Built-in value references. */
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    
    /* Built-in method references for those with the same name as other `lodash` methods. */
    var nativeKeys = overArg(Object.keys, Object);
    
    /**
     * Creates an array of the enumerable property names of the array-like `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @param {boolean} inherited Specify returning inherited property names.
     * @returns {Array} Returns the array of property names.
     */
    function arrayLikeKeys(value, inherited) {
      // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
      // Safari 9 makes `arguments.length` enumerable in strict mode.
      var result = (isArray(value) || isArguments(value))
        ? baseTimes(value.length, String)
        : [];
    
      var length = result.length,
          skipIndexes = !!length;
    
      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) &&
            !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
          result.push(key);
        }
      }
      return result;
    }
    
    /**
     * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key != 'constructor') {
          result.push(key);
        }
      }
      return result;
    }
    
    /**
     * Checks if `value` is a valid array-like index.
     *
     * @private
     * @param {*} value The value to check.
     * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
     * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
     */
    function isIndex(value, length) {
      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length &&
        (typeof value == 'number' || reIsUint.test(value)) &&
        (value > -1 && value % 1 == 0 && value < length);
    }
    
    /**
     * Checks if `value` is likely a prototype object.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
     */
    function isPrototype(value) {
      var Ctor = value && value.constructor,
          proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;
    
      return value === proto;
    }
    
    /**
     * Checks if `value` is likely an `arguments` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     *  else `false`.
     * @example
     *
     * _.isArguments(function() { return arguments; }());
     * // => true
     *
     * _.isArguments([1, 2, 3]);
     * // => false
     */
    function isArguments(value) {
      // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
      return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
        (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
    }
    
    /**
     * Checks if `value` is classified as an `Array` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array, else `false`.
     * @example
     *
     * _.isArray([1, 2, 3]);
     * // => true
     *
     * _.isArray(document.body.children);
     * // => false
     *
     * _.isArray('abc');
     * // => false
     *
     * _.isArray(_.noop);
     * // => false
     */
    var isArray = Array.isArray;
    
    /**
     * Checks if `value` is array-like. A value is considered array-like if it's
     * not a function and has a `value.length` that's an integer greater than or
     * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
     * @example
     *
     * _.isArrayLike([1, 2, 3]);
     * // => true
     *
     * _.isArrayLike(document.body.children);
     * // => true
     *
     * _.isArrayLike('abc');
     * // => true
     *
     * _.isArrayLike(_.noop);
     * // => false
     */
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }
    
    /**
     * This method is like `_.isArrayLike` except that it also checks if `value`
     * is an object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array-like object,
     *  else `false`.
     * @example
     *
     * _.isArrayLikeObject([1, 2, 3]);
     * // => true
     *
     * _.isArrayLikeObject(document.body.children);
     * // => true
     *
     * _.isArrayLikeObject('abc');
     * // => false
     *
     * _.isArrayLikeObject(_.noop);
     * // => false
     */
    function isArrayLikeObject(value) {
      return isObjectLike(value) && isArrayLike(value);
    }
    
    /**
     * Checks if `value` is classified as a `Function` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a function, else `false`.
     * @example
     *
     * _.isFunction(_);
     * // => true
     *
     * _.isFunction(/abc/);
     * // => false
     */
    function isFunction(value) {
      // The use of `Object#toString` avoids issues with the `typeof` operator
      // in Safari 8-9 which returns 'object' for typed array and other constructors.
      var tag = isObject(value) ? objectToString.call(value) : '';
      return tag == funcTag || tag == genTag;
    }
    
    /**
     * Checks if `value` is a valid array-like length.
     *
     * **Note:** This method is loosely based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
     * @example
     *
     * _.isLength(3);
     * // => true
     *
     * _.isLength(Number.MIN_VALUE);
     * // => false
     *
     * _.isLength(Infinity);
     * // => false
     *
     * _.isLength('3');
     * // => false
     */
    function isLength(value) {
      return typeof value == 'number' &&
        value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    
    /**
     * Checks if `value` is the
     * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
     * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
     * @example
     *
     * _.isObject({});
     * // => true
     *
     * _.isObject([1, 2, 3]);
     * // => true
     *
     * _.isObject(_.noop);
     * // => true
     *
     * _.isObject(null);
     * // => false
     */
    function isObject(value) {
      var type = typeof value;
      return !!value && (type == 'object' || type == 'function');
    }
    
    /**
     * Checks if `value` is object-like. A value is object-like if it's not `null`
     * and has a `typeof` result of "object".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
     * @example
     *
     * _.isObjectLike({});
     * // => true
     *
     * _.isObjectLike([1, 2, 3]);
     * // => true
     *
     * _.isObjectLike(_.noop);
     * // => false
     *
     * _.isObjectLike(null);
     * // => false
     */
    function isObjectLike(value) {
      return !!value && typeof value == 'object';
    }
    
    /**
     * Creates an array of the own enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects. See the
     * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * for more details.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keys(new Foo);
     * // => ['a', 'b'] (iteration order is not guaranteed)
     *
     * _.keys('hi');
     * // => ['0', '1']
     */
    function keys(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }
    
    module.exports = keys;
    
    },{}],5:[function(require,module,exports){
    if (window.NodeList && !NodeList.prototype.forEach) {
        NodeList.prototype.forEach = function (callback, thisArg) {
            thisArg = thisArg || window;
            for (var i = 0; i < this.length; i++) {
                callback.call(thisArg, this[i], i, this);
            }
        };
    }
    
    },{}],6:[function(require,module,exports){
    "use strict";function _typeof(obj) {"@babel/helpers - typeof";if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {_typeof = function _typeof(obj) {return typeof obj;};} else {_typeof = function _typeof(obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};}return _typeof(obj);}Object.defineProperty(exports, "__esModule", { value: true });exports.autoLoad = exports.createCalendar = void 0;var _browserLocale = _interopRequireDefault(require("browser-locale"));
    require("nodelist-foreach-polyfill");
    var FileSaver = _interopRequireWildcard(require("file-saver"));
    var _lodash = _interopRequireDefault(require("lodash.assign"));
    var _lodash2 = _interopRequireDefault(require("lodash.keys"));
    
    var _ics = _interopRequireDefault(require("./generators/ics"));
    var _google = _interopRequireDefault(require("./generators/google"));
    var _yahoo = _interopRequireDefault(require("./generators/yahoo"));
    var _utils = require("./generators/utils");
    
    var _en = _interopRequireDefault(require("./translations/en"));
    var _cn = _interopRequireDefault(require("./translations/cn"));
    var _de = _interopRequireDefault(require("./translations/de"));
    var _es = _interopRequireDefault(require("./translations/es"));
    var _fr = _interopRequireDefault(require("./translations/fr"));
    var _jp = _interopRequireDefault(require("./translations/jp"));
    var _ru = _interopRequireDefault(require("./translations/ru"));var _calendarGenerators;function _getRequireWildcardCache() {if (typeof WeakMap !== "function") return null;var cache = new WeakMap();_getRequireWildcardCache = function _getRequireWildcardCache() {return cache;};return cache;}function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;}if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {return { default: obj };}var cache = _getRequireWildcardCache();if (cache && cache.has(obj)) {return cache.get(obj);}var newObj = {};var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) {var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;if (desc && (desc.get || desc.set)) {Object.defineProperty(newObj, key, desc);} else {newObj[key] = obj[key];}}}newObj.default = obj;if (cache) {cache.set(obj, newObj);}return newObj;}function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}
    
    var languages = {
      cn: (0, _lodash.default)({}, _en.default, _cn.default),
      de: (0, _lodash.default)({}, _en.default, _de.default),
      en: _en.default,
      es: (0, _lodash.default)({}, _en.default, _es.default),
      fr: (0, _lodash.default)({}, _en.default, _fr.default),
      jp: (0, _lodash.default)({}, _en.default, _jp.default),
      ru: (0, _lodash.default)({}, _en.default, _ru.default) };
    
    
    var globalVariableName = 'atcOverrides';
    var addToCalendarClassName = 'addtocalendar';
    var defaultLanguage = 'en';
    
    var calendarTypes = {
      'iCalendar': 'iCalendar',
      'googleCalendar': 'googleCalendar',
      'outlook': 'outlook',
      'yahoo': 'yahoo' };
    
    
    var calendarGenerators = (_calendarGenerators = {}, _defineProperty(_calendarGenerators,
    calendarTypes.iCalendar, _ics.default), _defineProperty(_calendarGenerators,
    calendarTypes.googleCalendar, _google.default), _defineProperty(_calendarGenerators,
    calendarTypes.outlook, _ics.default), _defineProperty(_calendarGenerators,
    calendarTypes.yahoo, _yahoo.default), _calendarGenerators);
    
    
    var loadSettings = function loadSettings(element, settingsOverrides) {
      var settings = {
        'language': 'auto',
        'calendars': (0, _lodash2.default)(calendarTypes) };
    
    
      var translationOverrides = false;
    
      if (globalVariableName in window) {
        settings = (0, _lodash.default)({}, settings, window[globalVariableName]);
      }
    
      var atcAttributes = Array.prototype.filter.call(element.attributes,
      function (attribute) {return attribute.name.startsWith('data-atc-');});
    
      atcAttributes.forEach(function (attribute) {
        var settingName = attribute.name.replace('data-atc-', '');
    
        if (settingName === 'translations') {
          translationOverrides = JSON.parse(attribute.value);
        } else {
          settings[settingName] = attribute.value;
        }
      });
    
      if (settingsOverrides) {
        settings = (0, _lodash.default)({}, settings, settingsOverrides);
      }
    
      var browserLanguage = (0, _browserLocale.default)().substr(0, 2);
      if (settings.language === 'auto') {
        settings.language = browserLanguage;
      }
      settings.language = languages[settings.language] ? settings.language : defaultLanguage;
    
      var translations = (0, _lodash.default)({}, languages[settings.language], settings.translations || {});
      if (translationOverrides) {
        translations = (0, _lodash.default)({}, translations, translationOverrides);
      }
    
      settings.translations = translations;
    
      return settings;
    };
    
    var getCalendarParameters = function getCalendarParameters(element) {
      var events = element.querySelectorAll('var.atc_event');
    
      return Array.prototype.map.call(events, function (event) {
        var eventParams = event.querySelectorAll('var');
    
        var result = {};
        eventParams.forEach(function (param) {
          var paramName = param.className.replace('atc_', '');
          result[paramName] = param.innerHTML;
        });
    
        return result;
      });
    };
    
    var getCalendarLink = function getCalendarLink(settings, eventParams, element, calendarType) {
      var calendarLinkId = element.id === '' ? '' : "id=\"".concat(element.id, "_").concat(calendarType, "_link\"");
      var linkTitle = settings.translations[calendarType];
    
      // ics can't be downloaded in IE11 without hacks like in other browsers
      if ((0, _utils.isIE)() >= 11 && (calendarType === calendarTypes.outlook || calendarType === calendarTypes.iCalendar)) {
        return "<a ".concat(calendarLinkId, " class=\"atcb-item-link ").concat(calendarType, "\" data-event='").concat(JSON.stringify(eventParams), "'>").concat(linkTitle, "</a>");
      }
    
      var generator = calendarGenerators[calendarType];
      if (!generator) {
        console.warn("Generator for '".concat(calendarType, "' not found, will be used ics instead"));
        return '';
      }
      var event = generator(eventParams);
      return "<a ".concat(calendarLinkId, " class=\"atcb-item-link ").concat(calendarType, "\" href=\"").concat(event, "\" target=\"_blank\" rel=\"nofollow\">").concat(linkTitle, "</a>");
    };
    
    var downloadIcs = function downloadIcs(event) {
      var ext = '.ics';
      var filename = 'event';
      var blob = new Blob([event]);
      FileSaver.saveAs(blob, filename + ext);
    };
    
    var createCalendar = function createCalendar(element, settingsOverrides, eventParams) {
      var settings = loadSettings(element, settingsOverrides);
    
      var ul = document.createElement('ul');
      ul.className = 'atcb-list';
    
      var dropdownLinks = '';
      settings.calendars.forEach(function (calendarType) {
        eventParams = eventParams || getCalendarParameters(element);
        var link = getCalendarLink(settings, eventParams, element, calendarType);
        dropdownLinks += "<li class=\"atcb-item\">".concat(link, "</li>");
      });
      ul.innerHTML = dropdownLinks;
    
      var button = document.createElement('a');
      button.className = 'atcb-link';
      button.innerHTML = settings.translations.buttonText;
      button.id = element.id === '' ? '' : "".concat(element.id, "_link");
      button.tabIndex = 1;
    
      element.appendChild(button);
      element.appendChild(ul);
    };exports.createCalendar = createCalendar;
    
    var applyIcsIEHandler = function applyIcsIEHandler(link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
    
        var eventParams = JSON.parse(link.getAttribute('data-event'));
        var event = (0, _ics.default)(eventParams);
        downloadIcs(event);
      });
    };
    
    var autoLoad = function autoLoad() {
      var calendarElements = document.getElementsByClassName(addToCalendarClassName);
    
      Array.prototype.forEach.call(calendarElements, function (element) {
        createCalendar(element);
      });
    
      document.querySelectorAll('.atcb-item-link[data-event]').forEach(applyIcsIEHandler);
    };exports.autoLoad = autoLoad;
    
    autoLoad();
    
    },{"./generators/google":7,"./generators/ics":8,"./generators/utils":9,"./generators/yahoo":10,"./translations/cn":11,"./translations/de":12,"./translations/en":13,"./translations/es":14,"./translations/fr":15,"./translations/jp":16,"./translations/ru":17,"browser-locale":1,"file-saver":2,"lodash.assign":3,"lodash.keys":4,"nodelist-foreach-polyfill":5}],7:[function(require,module,exports){
    "use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _utils = require("./utils");
    
    var generator = function generator(eventsParams) {
      eventsParams = (0, _utils.convertEventParamsFromATC)(eventsParams[0]);
      var startTime = (0, _utils.formatTime)(eventsParams.start);
      var endTime = (0, _utils.calculateEndTime)(eventsParams);
      var domParser = new DOMParser();
    
      return ([
      'https://www.google.com/calendar/render',
      '?action=TEMPLATE', "&text=".concat(
      eventsParams.title ? encodeURIComponent(domParser.parseFromString(eventsParams.title, 'text/html').body.firstChild.textContent) : ''), "&dates=".concat(
      startTime || '', "/").concat(endTime || ''), "&details=".concat(
      eventsParams.description ? encodeURIComponent(domParser.parseFromString(eventsParams.description, 'text/html').body.firstChild.textContent) : ''), "&location=".concat(
      eventsParams.address ? encodeURIComponent(domParser.parseFromString(eventsParams.address, 'text/html').body.firstChild.textContent) : ''),
      '&sprop=&sprop=name:'].
      join(''));
    };var _default =
    
    generator;exports.default = _default;
    
    },{"./utils":9}],8:[function(require,module,exports){
    "use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _utils = require("./utils");
    
    var generator = function generator(eventsParams) {
      eventsParams = (0, _utils.convertEventParamsFromATC)(eventsParams[0]);
      var startTime = (0, _utils.formatTime)(eventsParams.start);
      var endTime = (0, _utils.calculateEndTime)(eventsParams);
    
      var ics = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'BEGIN:VEVENT',
      'URL:' + document.URL,
      'DTSTART:' + (startTime || ''),
      'DTEND:' + (endTime || ''),
      'SUMMARY:' + (eventsParams.title || ''),
      'DESCRIPTION:' + (eventsParams.description || ''),
      'LOCATION:' + (eventsParams.address || ''),
      'END:VEVENT',
      'END:VCALENDAR'].join('\n');
    
      if ((0, _utils.isIE)()) {
        return ics;
      }
      return encodeURI("data:text/calendar;charset=utf8,".concat(
      ics));
    };var _default =
    
    generator;exports.default = _default;
    
    },{"./utils":9}],9:[function(require,module,exports){
    "use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.isIE = exports.convertEventParamsFromATC = exports.calculateEndTime = exports.formatTime = exports.MS_IN_MINUTES = void 0;var _lodash = _interopRequireDefault(require("lodash.assign"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
    
    var MS_IN_MINUTES = 60 * 1000;exports.MS_IN_MINUTES = MS_IN_MINUTES;
    
    var formatTime = function formatTime(date) {
      return date.toISOString().replace(/-|:|\.\d+/g, '');
    };exports.formatTime = formatTime;
    
    var calculateEndTime = function calculateEndTime(eventParams) {
      return eventParams.end ?
      formatTime(eventParams.end) :
      formatTime(new Date(eventParams.start.getTime() + eventParams.duration * MS_IN_MINUTES));
    };exports.calculateEndTime = calculateEndTime;
    
    var fromStringDate = function fromStringDate(date) {
      if (date && typeof date === 'string') {
        date = new Date(date);
      }
      return date;
    };
    
    var convertEventParamsFromATC = function convertEventParamsFromATC(eventParams) {
      var start = fromStringDate(eventParams['date_start']);
      var end = fromStringDate(eventParams['date_end']);
    
      return (0, _lodash.default)({}, eventParams, {
        start: start,
        end: end });
    
    };exports.convertEventParamsFromATC = convertEventParamsFromATC;
    
    var isIE = function isIE() {
      var input = document.createElement('input');
      var ie = function () {
        if (window.ActiveXObject === undefined) return undefined;
        if (!document.addEventListener) return 8;
        if (!window.atob) return 9;
        //"!doc.body.dataset" is faster but the body is null when the DOM is not
        //ready. Anyway, an input tag needs to be created to check if IE is being
        //emulated
        if (!input.dataset) return 10;
        return 11;
      }();
      return ie;
    };exports.isIE = isIE;
    
    },{"lodash.assign":3}],10:[function(require,module,exports){
    "use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _utils = require("./utils");
    
    var generator = function generator(eventsParams) {
      eventsParams = (0, _utils.convertEventParamsFromATC)(eventsParams[0]);
      var eventDuration = eventsParams.end ?
      (eventsParams.end.getTime() - eventsParams.start.getTime()) / _utils.MS_IN_MINUTES :
      eventsParams.duration;
    
      // Yahoo dates are crazy, we need to convert the duration from minutes to hh:mm
      var yahooHourDuration = eventDuration < 600 ?
      '0' + Math.floor(eventDuration / 60) :
      Math.floor(eventDuration / 60) + '';
    
      var yahooMinuteDuration = eventDuration % 60 < 10 ?
      '0' + eventDuration % 60 :
      eventDuration % 60 + '';
    
      var yahooEventDuration = yahooHourDuration + yahooMinuteDuration;
    
      // Remove timezone from event time
      var st = (0, _utils.formatTime)(new Date(eventsParams.start - eventsParams.start.getTimezoneOffset() *
      _utils.MS_IN_MINUTES)) || '';
    
      return encodeURI([
      'https://calendar.yahoo.com/?v=60&view=d&type=20',
      '&title=' + (eventsParams.title || ''),
      '&st=' + st,
      '&dur=' + (yahooEventDuration || ''),
      '&desc=' + (eventsParams.description || ''),
      '&in_loc=' + (eventsParams.address || '')].
      join(''));
    };var _default =
    
    generator;exports.default = _default;
    
    },{"./utils":9}],11:[function(require,module,exports){
    "use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
      buttonText: 'æ·»åŠ åˆ°æ—¥åŽ†' };exports.default = _default;
    
    },{}],12:[function(require,module,exports){
    "use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
      buttonText: 'In den Kalender' };exports.default = _default;
    
    },{}],13:[function(require,module,exports){
    "use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
      buttonText: 'Add to Calendar',
      iCalendar: 'iCalendar',
      googleCalendar: 'Google Calendar',
      outlook: 'Outlook',
      yahoo: 'Yahoo! Calendar' };exports.default = _default;
    
    },{}],14:[function(require,module,exports){
    "use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
      buttonText: 'AÃ±adir al Calendario' };exports.default = _default;
    
    },{}],15:[function(require,module,exports){
    "use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
      buttonText: 'Ajouter au calendrier' };exports.default = _default;
    
    },{}],16:[function(require,module,exports){
    "use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
      buttonText: 'ã‚«ãƒ¬ãƒ³ãƒ€ãƒ¼ã«è¿½åŠ ' };exports.default = _default;
    
    },{}],17:[function(require,module,exports){
    "use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
      buttonText: 'Ð”Ð¾Ð±Ð°Ð²Ð¸Ñ‚ÑŒ Ð² ÐºÐ°Ð»ÐµÐ½Ð´Ð°Ñ€ÑŒ' };exports.default = _default;
    
    },{}]},{},[6])(6)
    });