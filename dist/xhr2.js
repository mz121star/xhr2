(function () {
    var root = this,xhr2=function(){};


    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = xhr2;
        }
        exports.xhr2 = xhr2;
    } else if (typeof define === 'function' && define.amd) {
        // Register as a named module with AMD.
        define('xhr2', function () {
            return xhr2;
        });
    } else {
        root['xhr2'] = xhr2;
    }
}).call(this);

(function (xhr2) {
    xhr2.defaults = {
        type:'GET',
        url:null,
        async:true,
        onsuccess:null, //function(){}
        onerror:null, //function(){}
        setrequestheader:{} //Object
    };
    xhr2 = function (obj) {
        console.log("xhr2 core method runing!");
        /* var client = new XMLHttpRequest();
         client.onreadystatechange = handler;
         client.open("GET", "unicorn.xml");
         client.send();*/
    };
})(xhr2);