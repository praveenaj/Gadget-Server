Caramel.initializer("user/login", {
    preInitialize:function (data) {
        Caramel.addHeaderJS("user/login", "authjs", "templates/user/login/js/auth.js");
    }
});