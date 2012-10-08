package org.wso2.carbon.hostobjects.user.auth;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.jaggeryjs.scriptengine.exceptions.ScriptException;
import org.jaggeryjs.scriptengine.util.HostObjectUtil;
import org.mozilla.javascript.*;
import org.wso2.carbon.hostobjects.user.UserOperationsException;

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
public class CarbonAuthHostObject extends ScriptableObject {
    private static Log log = LogFactory.getLog(CarbonAuthHostObject.class);

    private static final String hostObjectName = "CarbonAuth";

    @Override
    public String getClassName() {
        return hostObjectName;
    }

    public static Scriptable jsConstructor(Context cx, Object[] args, Function ctorObj,
                                           boolean inNewExpr) throws ScriptException {
        CarbonAuthHostObject commonHO = new CarbonAuthHostObject();
        return commonHO;
    }

    public static NativeObject jsFunction_login(Context cx, Scriptable thisObj, Object[] args, Function funObj)
            throws ScriptException {
        String functionName = "login";
        int argsCount = args.length;
        if (argsCount != 3) {
            HostObjectUtil.invalidNumberOfArgs(hostObjectName, functionName, argsCount, false);
        }
        //tenant aware username i.e admin@domain.com if super, admin only
        String username;
        String password;
        String authServerEP;

        if (!(args[0] instanceof String)) {
            HostObjectUtil.invalidArgsError(hostObjectName, functionName, "1", "string", args[0], false);
        }
        username = (String) args[0];

        if (!(args[1] instanceof String)) {
            HostObjectUtil.invalidArgsError(hostObjectName, functionName, "2", "string", args[1], false);
        }
        password = (String) args[1];

        if (!(args[2] instanceof String)) {
            HostObjectUtil.invalidArgsError(hostObjectName, functionName, "3", "string", args[2], false);
        }
        authServerEP = (String) args[2];

        CarbonAuthImpl carbonAuth = new CarbonAuthImpl();

        NativeObject row = new NativeObject();

        try {
            String sessionId = carbonAuth.login(username, password, authServerEP);
            row.put("user", row, username);
            row.put("sessionId", row, sessionId);
            row.put("error", row, false);
        } catch (UserOperationsException e) {
            log.debug(e);
            row.put("error", row, true);
            row.put("detail", row, e.getMessage());
        }
        return row;
    }
}
