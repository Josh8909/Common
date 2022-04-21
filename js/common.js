//格式化指定的对象<Number or String>
//@param origin 数据
//       len    数据长度
//       prefix 补全字符
function toFixed(origin, len, prefix) {
    origin = origin.toString();
    if (origin.length > len)
        return origin.substr(origin.length - len);
    else if (origin.length == len)
        return origin;
    else {
        var result = '';
        for (var i = 0, max = len - origin.length; i < max; i++) {
            result += prefix;
        }
        result += origin;
        return result;
    }
}

function random() {
}

//Define the inheir method for function
function extend(base, __proto__) {
    if (typeof base === 'object') {
        __proto__ = base;
        base = null;
    }

    function F(initializing) {
        if (initializing && typeof initializing === 'boolean') {
            //Do Nothing
        } else {
            this.base && this.base.prototype.constructor.apply(this, arguments);
            this.constructor.apply(this, arguments);
        }
        return this;
    }
    
    if (base) {
        F.prototype = new base(true);
        F.prototype.base = base;
    }

    for (var item in __proto__) {
        if (__proto__.hasOwnProperty(item))
            F.prototype[item] = __proto__[item];
    }

    return F;
}
