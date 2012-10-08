var User = User || ( function () {
    var login = function () {
        $.post("/portal/apis/user/login/login.jag", {
                action:"login",
                username:$("#username").val(),
                password:$("#password").val() },
            function (result) {
                console.log(result)
            }, "json");
    };

    return {
        login:login
    };
}());
