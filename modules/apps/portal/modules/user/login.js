var login = function (username, password) {
    var result,
        log = new Log(),
        manager = Caramel.module("manager"),
        authenticator = manager.getAuthenticator(),
        authServerUrl = manager.getAuthServerURL();

    result = authenticator.login(username, password, authServerUrl);
    if (result.error) {
        if (log.isDebugEnabled()) {
            log.debug("Error while authenticating user : " + username);
        }
        return {
            error:result.error,
            cookie:null,
            message:result.detail
        };
    }

    cookie = result.sessionId;
    cookie = cookie.split(';')[0];
    return {
        error:false,
        cookie:cookie
    };
};

var logout = function () {
    //TODO : implement logout
    /*session.put("username", null);
     session.put("cookie", null);*/
    return {
        error:false
    };
};