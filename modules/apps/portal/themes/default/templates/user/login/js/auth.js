var User = User || ( function () {
    var login = function () {
    		$("#loginBtn").addClass("disabled").html("<img src=\"{{appContext}}/themes/{{theme}}/img/ajax-loader.gif\" style=\"height:19px\">");
        $.post("/portal/apis/user/login/login.jag", {
                action:"login",
                username:$("#username").val(),
                password:$("#password").val() },
            function (result) {
                console.log(result);

                $("#alert").css("display:block");
                $("#alert #alert-msg").html(result.error);
                $(this).removeClass("disabled").html("Sign in");

                if (!result.error) {
                    window.location.href = "dashboard.jag";
                }

            }, "json");
    };

    return {
        login:login
    };
}());

