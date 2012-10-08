var register = function (user) {
    var result,
        log = new Log(),
        manager = Caramel.module("manager"),
        regAgent = manager.getRegistrationAgent();

    result = regAgent.register(user);

    if (result.error) {
        if (log.isDebugEnabled()) {
            log.debug("Error while registering new user : " + username);
        }
        return {
            error:result.error,
            message:result.detail
        };
    }

    return {
        error:false,
        user:result.user
    };

};