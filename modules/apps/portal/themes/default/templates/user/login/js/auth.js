var User = User || ( function () {
    var login = function () {
    		$(this).addClass("disabled").html("<img src=\"{{appContext}}/themes/{{theme}}/img/ajax-loader.gif\" style=\"height:19px\">");
        $.post("/portal/apis/user/login/login.jag", {
                action:"login",
                username:$("#username").val(),
                password:$("#password").val() },
            function (result) {
                console.log(result);
                $("#alert").html(result.error);
                $(this).removeClass("disabled").html("Sign in");
            }, "json");
    };

    return {
        login:login
    };
}());

