var User = User || ( function () {
    var register = function () {
        var p1 = $("#password1").val();
        var p2 = $("#password2").val();
        if (p1 == p2) {
            $.post("/portal/apis/user/register/register.jag", {
                    action:"register",
                    username:$("#username").val(),
                    password:p1,
                    fname:$("#fname").val(),
                    lname:$("#lname").val(),
                    email:$("#email").val()},
                function (result) {
                    console.log(result);
                    if (!result.error) {
                        $("#alert").show();
                        $("#alert #alert-msg").html('Registration Successful <a href="login.jag">Sign in</a>');
                        $("#alert").removeClass("alert-error");
                        $("#alert").addClass("alert-success");
                    } else {
                        $("#alert").show();
                        $("#alert #alert-msg").text(result.message.split(":")[1]);
                    }
                }, "json");
        } else {
            console.log("password miss match");
        }
        console.log({
            action:"register",
            username:$("#username").val(),
            password:p1,
            fname:$("#fname").val(),
            lname:$("#lname").val(),
            email:$("#email").val()});
    };

    var userExists = function () {
        $.get("/portal/apis/user/register/register.jag", {
                action:"userExists",
                username:$("#username").val()},
            function (result) {
                console.log(result);
                if (!result.error) {
                    $("#alert").show();
                    $("#alert #alert-msg").html('Username Available');
                    $("#alert").removeClass("alert-error");
                    $("#alert").addClass("alert-success");
                } else {
                    $("#alert").show();
                    $("#alert #alert-msg").text(result.message);
                }
            }, "json");
    }

    return {
        register:register,
        userExists:userExists
    };

}());
