import os from 'os';
import path from 'path';

export const generatorRoot = path.resolve(__dirname, '../');

export const specsRepoPath = path.join(os.tmpdir(), 'schm_azspc');
export const specsRepoUri = 'https://github.com/azure/azure-rest-api-specs';
export const specsRepoCommitHash = 'origin/master';

export const autoRestVerboseOutput = false;

export const schemasBaseUri = 'https://schema.management.azure.com/schemas';
export const schemasBasePath = path.join(generatorRoot, 'schemas');
export const resourceGroupRootSchema = {
    file: path.join(schemasBasePath, 'common/autogeneratedResources.json'),
    jsonPath: 'allOf[1].oneOf'
};
export const subscriptionRootSchema = {
    file: path.join(schemasBasePath, '2018-05-01/subscriptionDeploymentTemplate.json'),
    jsonPath: 'properties.resources.items.allOf[1].oneOf'
};
export const tenantRootSchema = {
    file: path.join(schemasBasePath, '2019-08-01/tenantDeploymentTemplate.json'),
    jsonPath: 'properties.resources.items.oneOf[0].allOf[1].oneOf'
};
export const managementGroupRootSchema = {
    file: path.join(schemasBasePath, '2019-08-01/managementGroupDeploymentTemplate.json'),
    jsonPath: 'properties.resources.items.allOf[1].oneOf'
};
export const generatedSchemasTemplatePath = path.join(__dirname, 'resources/autogeneratedResources_template.json');

export const autorestCoreVersion = '3.0.6274';
export const azureresourceschemaVersion = '3.0.79';

// paths in this list won't even appear in list-basepaths
export const blacklist = [
    /* Azure Stack resource providers */
    'azsadmin/resource-manager/azurebridge',
    'azsadmin/resource-manager/backup',
    'azsadmin/resource-manager/commerce',
    'azsadmin/resource-manager/compute',
    'azsadmin/resource-manager/deployment',
    'azsadmin/resource-manager/fabric',
    'azsadmin/resource-manager/gallery',
    'azsadmin/resource-manager/infrastructureinsights',
    'azsadmin/resource-manager/keyvault',
    'azsadmin/resource-manager/network',
    'azsadmin/resource-manager/storage',
    'azsadmin/resource-manager/subscriptions',
    'azsadmin/resource-manager/update',
    'azsadmin/resource-manager/user-subscriptions',
    /* Microsoft.CustomerInsights is deprecated */
    'customer-insights/resource-manager',
    /* Temporally moving to blacklist */
    'consumption/resource-manager',
];