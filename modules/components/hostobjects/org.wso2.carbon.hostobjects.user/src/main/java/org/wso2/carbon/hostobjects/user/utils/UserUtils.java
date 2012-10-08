package org.wso2.carbon.hostobjects.user.utils;

import org.wso2.carbon.gs.common.GadgetServerConstents;
import org.wso2.carbon.hostobjects.user.UserOperationsException;
import org.wso2.carbon.registry.api.Collection;
import org.wso2.carbon.registry.core.ActionConstants;
import org.wso2.carbon.registry.core.Registry;
import org.wso2.carbon.registry.core.RegistryConstants;
import org.wso2.carbon.user.core.UserRealm;

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
public class UserUtils {
    public static void creatRegSpaceForUser(String userName, Registry registry, UserRealm realm) throws Exception {
        if (!registry.resourceExists(GadgetServerConstents.REPOSITORY_GADGETS_LOCATION + userName)) {
            Collection userCol = registry.newCollection();
            registry.put(GadgetServerConstents.REPOSITORY_USERS_LOCATION + userName, userCol);
        } else {
            throw new UserOperationsException("failing.. Users registry space already exists");
        }

        //Removing all authorizations
        realm.getAuthorizationManager().clearResourceAuthorizations(RegistryConstants.GOVERNANCE_REGISTRY_BASE_PATH + GadgetServerConstents.REPOSITORY_USERS_LOCATION + userName);
        //Removing authorization for everyone role
        realm.getAuthorizationManager().denyRole(realm.getRealmConfiguration().getEveryOneRoleName(), RegistryConstants.GOVERNANCE_REGISTRY_BASE_PATH + GadgetServerConstents.REPOSITORY_USERS_LOCATION + userName, ActionConstants.GET);

        //Granting READ/WRITE access to the new user to his own registry space
        realm.getAuthorizationManager().authorizeRole(userName,
                RegistryConstants.GOVERNANCE_REGISTRY_BASE_PATH + GadgetServerConstents.REPOSITORY_USERS_LOCATION + userName, ActionConstants.GET);
        realm.getAuthorizationManager().authorizeRole(userName,
                RegistryConstants.GOVERNANCE_REGISTRY_BASE_PATH + GadgetServerConstents.REPOSITORY_USERS_LOCATION + userName, ActionConstants.PUT);
        realm.getAuthorizationManager().authorizeRole(userName,
                RegistryConstants.GOVERNANCE_REGISTRY_BASE_PATH + GadgetServerConstents.REPOSITORY_USERS_LOCATION + userName, ActionConstants.DELETE);

    }
}
