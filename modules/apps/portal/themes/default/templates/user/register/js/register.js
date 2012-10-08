var User = User || ( function () {
    var register = function () {
        $.post("/portal/apis/user/register/register.jag", {
                action:"register",
                username:$("#username").val(),
                password:$("#password").val(),
                fname:$("#fname").val(),
                lname:$("#lname").val(),
                email:$("#email").val()},
            function (result) {
                console.log(result)
            }, "json");
    };
    return {
        register:register
    };
}());