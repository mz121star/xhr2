(function (xhr2) {
    xhr2.defaults = {
        type:'GET',
        url:null,
        async:true,
        onsuccess:null, //function(){}
        onerror:null, //function(){}
        setrequestheader:{} //Object
    };
    xhr2 = function () {
        console.log("xhr2 core method runing!");
       /* var client = new XMLHttpRequest();
        client.onreadystatechange = handler;
        client.open("GET", "unicorn.xml");
        client.send();*/
    };
})(xhr2);