package org.wso2.carbon.hostobjects.user.registration;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.jaggeryjs.scriptengine.exceptions.ScriptException;
import org.jaggeryjs.scriptengine.util.HostObjectUtil;
import org.mozilla.javascript.*;
import org.wso2.carbon.hostobjects.user.UserConstents;

/**
 * Copyright (c) 2005-2010, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 * <p/>
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 * <p/>
 * http://www.apache.org/licenses/LICENSE-2.0
 * <p/>
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
public class UserRegistrationHostObject extends ScriptableObject {

    private static Log log = LogFactory.getLog(UserRegistrationHostObject.class);

    private static final String hostObjectName = "UserReg";

    @Override
    public String getClassName() {
        return hostObjectName;
    }

    public static Scriptable jsConstructor(Context cx, Object[] args, Function ctorObj,
                                           boolean inNewExpr) throws ScriptException {
        UserRegistrationHostObject regHO = new UserRegistrationHostObject();
        return regHO;
    }

    public static NativeObject jsFunction_register(Context cx, Scriptable thisObj, Object[] args, Function funObj)
            throws ScriptException {

        String functionName = "register";
        int argsCount = args.length;
        if (argsCount != 1) {
            HostObjectUtil.invalidNumberOfArgs(hostObjectName, functionName, argsCount, false);
        }
        if (!(args[0] instanceof NativeObject)) {
            HostObjectUtil.invalidArgsError(hostObjectName, functionName, "1", "JSON", args[0], false);
        }

        User user = new User();

        NativeObject userObj = (NativeObject) args[0];

        user.setUsername((String) userObj.get(UserConstents.USERNAME, userObj));
        user.setPassword((String) userObj.get(UserConstents.PASSWORD, userObj));
        user.setFirstName((String) userObj.get(UserConstents.FIRSTNAME, userObj));
        user.setLastName((String) userObj.get(UserConstents.LASTNAME, userObj));
        user.setEmail((String) userObj.get(UserConstents.EMAIL, userObj));

        NativeObject row = new NativeObject();

        if (user.getUsername() == null || user.getPassword() == null || user.getEmail() == null || user.getFirstName() == null) {
            String msg = "One or more required properties not provided";
            log.error(msg);
            row.put("error", row, true);
            row.put("detail", row, msg);
        }

        UserRegistrationImpl userRegistration = new UserRegistrationImpl();
        try {
            userRegistration.addUser(user);
            row.put("user", row, user.getUsername());
            row.put("error", row, false);
        } catch (Exception e) {
            log.error(e);
            row.put("error", row, true);
            row.put("detail", row, e.getMessage());
        }

        return row;

    }
}
