Caramel.initializer("user/register", {
    preInitialize:function (data) {
        Caramel.addHeaderJS("user/register", "regjs", "templates/user/register/js/register.js");
    }
});