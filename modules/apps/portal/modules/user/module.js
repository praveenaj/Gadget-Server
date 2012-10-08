Caramel.module("user", {

    login:function () {
        return Caramel.require(Caramel.getModulesDir() + "user/login.js").login.apply(this, arguments);
    },

    logout:function () {
        return Caramel.require(Caramel.getModulesDir() + "user/login.js").logout.apply(this, arguments);
    },

    checkForAuthSession:function () {
        return Caramel.require(Caramel.getModulesDir() + "user/util.js").checkForAuthSession.apply(this, arguments);
    },

    register:function () {
        return Caramel.require(Caramel.getModulesDir() + "user/register.js").register.apply(this, arguments);
    }
});