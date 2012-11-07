var errors = {
    unauthorized:function () {
        return {
            error:true,
            description:"You don't have permissions to execute the operation. Please login with a valid username/password"
        };
    },

    actionNotFound:function () {
        return {
            error:true,
            description:"Specified action cannot be found."
        };
    }
};