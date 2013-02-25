(function (xhr2) {
    var Promise = function () {
        this.thens = [];
    };
    Promise.prototype = {
        resolve:function () {
            var fn = this.thens.shift(), n;
            fn && (n = fn.apply(null, arguments), fn instanceof Promise && (n.thens = this.thens));
        },
        then:function (n) {
            return this.thens.push(n), this;
        }
    }
   xhr2.Promise=Promise;
})(xhr2);
