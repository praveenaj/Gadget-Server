package org.wso2.carbon.gs.deployers;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.wso2.carbon.CarbonException;
import org.wso2.carbon.registry.core.Registry;
import org.wso2.carbon.registry.core.exceptions.RegistryException;
import org.wso2.carbon.registry.core.service.RegistryService;
import org.wso2.carbon.user.core.UserStoreException;
import org.wso2.carbon.user.core.service.RealmService;

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
public class DeployerContext {
    private static Log log = LogFactory.getLog(DeployerContext.class);

    private static RegistryService registryService;
    private static RealmService realmService;

    public static void setRegistryService(RegistryService registryService) {
        DeployerContext.registryService = registryService;
    }

    public static Registry getUserRegistry(String mashupAuthor, int tenantId) throws CarbonException {
        if (registryService == null) {
            throw new CarbonException("Registry is null");
        }
        try {
            if (registryService.getUserRealm(tenantId).getUserStoreManager().isExistingUser(mashupAuthor)) {
                return registryService.getGovernanceUserRegistry(mashupAuthor, tenantId);
            } else {
                throw new CarbonException("Unable to access Registry");
            }
        } catch (UserStoreException e) {
            log.error(e.getMessage(), e);
            throw new CarbonException(e);
        } catch (RegistryException e) {
            log.error(e.getMessage(), e);
            throw new CarbonException(e);
        }
    }

    public static RegistryService getRegistryService() {
        return registryService;
    }

}

