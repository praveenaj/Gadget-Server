Caramel.initializer("user/profile", {
    preInitialize:function (data) {
        Caramel.addHeaderJS("user/profile", "regjs", "templates/user/profile/js/register.js");
        Caramel.addHeaderJS("user/profile", "assemblyjs", "templates/user/profile/js/assembly.js");
    }
});