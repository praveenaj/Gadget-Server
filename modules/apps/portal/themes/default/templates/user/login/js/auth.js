var User = User || ( function () {
    var login = function () {
        $("#loginBtn").addClass("disabled");
        $("#signin").hide();
        $("#loading").show();
        $.post("/portal/apis/user/login/login.jag", {
                action:"login",
                username:$("#username").val(),
                password:$("#password").val() },
            function (result) {
                console.log(result);
                if (!result.error) {
                    window.location.href = "dashboard.jag";
                } else {
                    $("#alert").show();
                    $("#alert #alert-msg").text(result.message.split(":")[1]);
                    $(this).removeClass("disabled");
                    $("#signin").show();
                    $("#loading").hide();
                }

            }, "json");
    };

    return {
        login:login
    };
}());

