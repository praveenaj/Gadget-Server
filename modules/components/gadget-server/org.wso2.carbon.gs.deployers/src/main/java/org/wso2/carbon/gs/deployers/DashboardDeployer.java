package org.wso2.carbon.gs.deployers;

import org.apache.axis2.context.ConfigurationContext;
import org.apache.axis2.deployment.AbstractDeployer;
import org.apache.axis2.deployment.DeploymentException;
import org.apache.axis2.deployment.repository.util.DeploymentFileData;
import org.wso2.carbon.gs.common.GadgetServerConstents;
import org.wso2.carbon.registry.core.Registry;
import org.wso2.carbon.registry.core.Resource;

import java.io.File;
import java.io.FileFilter;
import java.io.FileInputStream;
import java.io.InputStream;

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
public class DashboardDeployer extends AbstractDeployer {
    @Override
    public void init(ConfigurationContext configurationContext) {
        //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public void setDirectory(String s) {
        //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public void setExtension(String s) {
        //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public void deploy(DeploymentFileData deploymentFileData) throws DeploymentException {
        try {
            processDashboardFile(deploymentFileData);
        } catch (Exception e) {
            throw new DeploymentException(e);
        }
    }

    @Override
    public void undeploy(String fileName) throws DeploymentException {
        if (!new File(fileName).exists()) {
            super.undeploy(fileName);
        }
    }

    private void processDashboardFile(DeploymentFileData deploymentFileData) throws Exception {
        Registry registry = DeployerContext.getRegistryService().getGovernanceSystemRegistry();
        if (deploymentFileData.getFile().isDirectory()) {
            File[] listOfFiles = deploymentFileData.getFile().listFiles(new DashboardFileFilter());
            if (listOfFiles.length == 1) {
                InputStream in = new FileInputStream(listOfFiles[0]);
                Resource resource = registry.newResource();
                resource.setMediaType("application/json");
                resource.setContentStream(in);
                registry.put(GadgetServerConstents.REPOSITORY_DASHBOARDS_LOCATION + deploymentFileData.getFile().getName(), resource);
            }
        }

    }

    private class DashboardFileFilter implements FileFilter {
        @Override
        public boolean accept(File file) {
            if (file.getName().equals(GadgetServerConstents.DASHBOARD_CONF_FILE_NAME)) {
                return true;
            }
            return false;
        }
    }
}
