package org.wso2.carbon.hostobjects.user.auth;


import org.apache.axis2.client.Options;
import org.apache.axis2.client.ServiceClient;
import org.apache.axis2.context.ServiceContext;
import org.apache.axis2.transport.http.HTTPConstants;
import org.wso2.carbon.authenticator.stub.AuthenticationAdminStub;
import org.wso2.carbon.hostobjects.user.UserOperationsException;

import java.net.URL;

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
public class CarbonAuthImpl {

    public String login(String username, String password, String serverUrl) throws UserOperationsException {

        try {
            AuthenticationAdminStub authAdminStub;

            authAdminStub = new AuthenticationAdminStub(null, serverUrl + "AuthenticationAdmin");
            ServiceClient client = authAdminStub._getServiceClient();
            Options options = client.getOptions();
            options.setManageSession(true);

            String host = new URL(serverUrl).getHost();
            if (!authAdminStub.login(username, password, host)) {
                throw new UserOperationsException("Authentication failed. Invalid username or password.");
            }
            ServiceContext serviceContext = authAdminStub.
                    _getServiceClient().getLastOperationContext().getServiceContext();

            String sessionCookie = (String) serviceContext.getProperty(HTTPConstants.COOKIE_STRING);

            return sessionCookie;

        } catch (Exception e) {
            throw new UserOperationsException(e);
        }
    }
}
