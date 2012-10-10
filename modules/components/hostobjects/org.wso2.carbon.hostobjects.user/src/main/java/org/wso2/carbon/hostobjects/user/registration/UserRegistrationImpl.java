package org.wso2.carbon.hostobjects.user.registration;

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

import org.wso2.carbon.hostobjects.user.UserOperationsException;
import org.wso2.carbon.hostobjects.user.utils.UserUtils;
import org.wso2.carbon.identity.base.IdentityException;
import org.wso2.carbon.identity.core.util.IdentityTenantUtil;
import org.wso2.carbon.registry.api.Collection;
import org.wso2.carbon.registry.core.ActionConstants;
import org.wso2.carbon.registry.core.Registry;
import org.wso2.carbon.registry.core.RegistryConstants;
import org.wso2.carbon.user.core.Permission;
import org.wso2.carbon.user.core.UserCoreConstants;
import org.wso2.carbon.user.core.UserRealm;
import org.wso2.carbon.user.core.UserStoreManager;
import org.wso2.carbon.user.mgt.UserMgtConstants;

import java.util.HashMap;
import java.util.Map;

public class UserRegistrationImpl {

    public void addUser(User user) throws Exception {

        Map<String, String> userClaims = new HashMap<String, String>();

        //Adding only the needed claims from carbon dialect
        userClaims.put(UserCoreConstants.ClaimTypeURIs.GIVEN_NAME, user.getFirstName());
        userClaims.put(UserCoreConstants.ClaimTypeURIs.SURNAME, user.getLastName());
        userClaims.put(UserCoreConstants.ClaimTypeURIs.EMAIL_ADDRESS, user.getEmail());

        UserRealm realm = null;
        realm = IdentityTenantUtil.getRealm(null, null);
        addUser(user.getUsername(), user.getPassword(), userClaims, null, realm);

    }

    private void addUser(String userName, String password, Map<String, String> claimList,
                         String profileName, UserRealm realm) throws Exception {
        UserStoreManager admin = null;
        Permission permission = null;
        Registry registry = IdentityTenantUtil.getRegistryService().getGovernanceSystemRegistry();
        try {
            admin = realm.getUserStoreManager();
            // add user
            admin.addUser(userName, password, null, claimList, profileName);
            // if this is the first time a user signs up, needs to create role
            if (!admin.isExistingRole(userName)) {
                permission = new Permission("/permission/admin/login",
                        UserMgtConstants.EXECUTE_ACTION);
                admin.addRole(userName, new String[]{userName},
                        new Permission[]{permission});

                //Creating a registry space for the user
                UserUtils.creatRegSpaceForUser(userName, registry, realm);

            } else {
                // if role already exists, just add user to role
                throw new IdentityException("Username already exists : " + userName);
            }
        } catch (Exception e) {
            throw new Exception("Error occurred while adding user : " + userName, e);
        }
    }

    public boolean userExists(String username) throws Exception {
        UserStoreManager admin = null;
        UserRealm realm = null;
        realm = IdentityTenantUtil.getRealm(null, null);

        admin = realm.getUserStoreManager();
        if (admin.getUserId(username) < 0) {
            return false;
        }
        return true;
    }

}
