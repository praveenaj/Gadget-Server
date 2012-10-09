Caramel.initializer("user/login", {
    preInitialize:function (data) {
        Caramel.addHeaderJS("user/login", "authjs", "templates/user/login/js/auth.js");
        Caramel.addHeaderJS("user/login", "assembly", "templates/user/login/js/assembly.js")
    }
});