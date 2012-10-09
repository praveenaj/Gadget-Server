var User = User || ( function () {
    var login = function () {
        $.post("/portal/apis/user/login/login.jag", {
                action:"login",
                username:$("#username").val(),
                password:$("#password").val() },
            function (result) {
                console.log(result);
                if (!result.error) {
                    window.location.href = "dashboard.jag";
                }
            }, "json");
    };

    return {
        login:login
    };
}());
