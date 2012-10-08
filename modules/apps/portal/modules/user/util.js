var checkForAuthSession = function () {
    var user = Caramel.getUser();
    if (!user) {
        response.sendRedirect(Caramel.getAbsoluteUrl("/login.jag"));
        return;
    }
    return;
}