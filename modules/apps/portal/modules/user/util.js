var isUserLoggedIn = function () {
    var user = Caramel.getUser();
    if (!user) {
        response.sendRedirect(Caramel.getAbsoluteUrl("/login.jag"));
        return false;
    }
    return true;
}