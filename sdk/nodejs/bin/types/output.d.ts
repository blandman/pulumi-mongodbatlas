import * as outputs from "../types/output";
export interface CloudProviderSnapshotRestoreJobDeliveryType {
    automated?: boolean;
    download?: boolean;
    /**
     * Name of the target Atlas cluster to which the restore job restores the snapshot. Only required if deliveryType is automated.
     */
    targetClusterName?: string;
    targetProjectId?: string;
}
export interface ClusterAdvancedConfiguration {
    /**
     * When true, documents can only be updated or inserted if, for all indexed fields on the target collection, the corresponding index entries do not exceed 1024 bytes. When false, mongod writes documents that exceed the limit but does not index them.
     */
    failIndexKeyTooLong: boolean;
    /**
     * When true, the cluster allows execution of operations that perform server-side executions of JavaScript. When false, the cluster disables execution of those operations.
     */
    javascriptEnabled: boolean;
    /**
     * Sets the minimum Transport Layer Security (TLS) version the cluster accepts for incoming connections.Valid values are:
     */
    minimumEnabledTlsProtocol: string;
    /**
     * When true, the cluster disables the execution of any query that requires a collection scan to return results. When false, the cluster allows the execution of those operations.
     */
    noTableScan: boolean;
    /**
     * The custom oplog size of the cluster. Without a value that indicates that the cluster uses the default oplog size calculated by Atlas.
     */
    oplogSizeMb: number;
    /**
     * Interval in seconds at which the mongosqld process re-samples data to create its relational schema. The default value is 300. The specified value must be a positive integer. Available only for Atlas deployments in which BI Connector for Atlas is enabled.
     */
    sampleRefreshIntervalBiConnector: number;
    /**
     * Number of documents per database to sample when gathering schema information. Defaults to 100. Available only for Atlas deployments in which BI Connector for Atlas is enabled.
     */
    sampleSizeBiConnector: number;
}
export interface ClusterBiConnector {
    /**
     * Specifies whether or not BI Connector for Atlas is enabled on the cluster.
     * - Set to `true` to enable BI Connector for Atlas.
     * - Set to `false` to disable BI Connector for Atlas.
     */
    enabled: string;
    /**
     * Specifies the read preference to be used by BI Connector for Atlas on the cluster. Each BI Connector for Atlas read preference contains a distinct combination of [readPreference](https://docs.mongodb.com/manual/core/read-preference/) and [readPreferenceTags](https://docs.mongodb.com/manual/core/read-preference/#tag-sets) options. For details on BI Connector for Atlas read preferences, refer to the [BI Connector Read Preferences Table](https://docs.atlas.mongodb.com/tutorial/create-global-writes-cluster/#bic-read-preferences).
     */
    readPreference: string;
}
export interface ClusterLabel {
    /**
     * The key that you want to write.
     */
    key: string;
    /**
     * The value that you want to write.
     */
    value: string;
}
export interface ClusterReplicationSpec {
    /**
     * Unique identifer of the replication document for a zone in a Global Cluster.
     */
    id: string;
    /**
     * Number of shards to deploy in the specified zone.
     */
    numShards: number;
    /**
     * Physical location of the region. Each regionsConfig document describes the region’s priority in elections and the number and type of MongoDB nodes Atlas deploys to the region. You must order each regionsConfigs document by regionsConfig.priority, descending. See Region Config below for more details.
     */
    regionsConfigs: outputs.ClusterReplicationSpecRegionsConfig[];
    /**
     * Name for the zone in a Global Cluster.
     */
    zoneName?: string;
}
export interface ClusterReplicationSpecRegionsConfig {
    /**
     * The number of analytics nodes for Atlas to deploy to the region. Analytics nodes are useful for handling analytic data such as reporting queries from BI Connector for Atlas. Analytics nodes are read-only, and can never become the primary.
     */
    analyticsNodes?: number;
    /**
     * Number of electable nodes for Atlas to deploy to the region. Electable nodes can become the primary and can facilitate local reads.
     */
    electableNodes: number;
    /**
     * Election priority of the region. For regions with only read-only nodes, set this value to 0.
     */
    priority: number;
    /**
     * Number of read-only nodes for Atlas to deploy to the region. Read-only nodes can never become the primary, but can facilitate local-reads. Specify 0 if you do not want any read-only nodes in the region.
     */
    readOnlyNodes?: number;
    /**
     * Name for the region specified.
     */
    regionName: string;
}
export interface DatabaseUserLabel {
    /**
     * The key that you want to write.
     */
    key: string;
    /**
     * The value that you want to write.
     */
    value: string;
}
export interface DatabaseUserRole {
    /**
     * Collection for which the role applies. You can specify a collection for the `read` and `readWrite` roles. If you do not specify a collection for `read` and `readWrite`, the role applies to all collections in the database (excluding some collections in the `system`. database).
     */
    collectionName: string;
    /**
     * Database on which the user has the specified role. A role on the `admin` database can include privileges that apply to the other databases.
     */
    databaseName: string;
    roleName: string;
}
export interface EncryptionAtRestAwsKms {
    /**
     * The IAM access key ID with permissions to access the customer master key specified by customerMasterKeyID.
     */
    accessKeyId: string;
    /**
     * The AWS customer master key used to encrypt and decrypt the MongoDB master keys.
     */
    customerMasterKeyId: string;
    /**
     * Specifies whether Encryption at Rest is enabled for an Atlas project. To disable Encryption at Rest, pass only this parameter with a value of false. When you disable Encryption at Rest, Atlas also removes the configuration details.
     */
    enabled: boolean;
    /**
     * The AWS region in which the AWS customer master key exists: CA_CENTRAL_1, US_EAST_1, US_EAST_2, US_WEST_1, US_WEST_2, SA_EAST_1
     */
    region: string;
    /**
     * The IAM secret access key with permissions to access the customer master key specified by customerMasterKeyID.
     */
    secretAccessKey: string;
}
export interface EncryptionAtRestAzureKeyVault {
    /**
     * The Azure environment where the Azure account credentials reside. Valid values are the following: AZURE, AZURE_CHINA, AZURE_GERMANY
     */
    azureEnvironment: string;
    /**
     * The client ID, also known as the application ID, for an Azure application associated with the Azure AD tenant.
     */
    clientId: string;
    /**
     * Specifies whether Encryption at Rest is enabled for an Atlas project. To disable Encryption at Rest, pass only this parameter with a value of false. When you disable Encryption at Rest, Atlas also removes the configuration details.
     */
    enabled: boolean;
    /**
     * The unique identifier of a key in an Azure Key Vault.
     */
    keyIdentifier: string;
    /**
     * The name of an Azure Key Vault containing your key.
     */
    keyVaultName: string;
    /**
     * The name of the Azure Resource group that contains an Azure Key Vault.
     */
    resourceGroupName: string;
    /**
     * The secret associated with the Azure Key Vault specified by azureKeyVault.tenantID.
     */
    secret: string;
    /**
     * The unique identifier associated with an Azure subscription.
     */
    subscriptionId: string;
    /**
     * The unique identifier for an Azure AD tenant within an Azure subscription.
     */
    tenantId: string;
}
export interface EncryptionAtRestGoogleCloudKms {
    /**
     * Specifies whether Encryption at Rest is enabled for an Atlas project. To disable Encryption at Rest, pass only this parameter with a value of false. When you disable Encryption at Rest, Atlas also removes the configuration details.
     */
    enabled: boolean;
    /**
     * The Key Version Resource ID from your GCP account.
     */
    keyVersionResourceId: string;
    /**
     * String-formatted JSON object containing GCP KMS credentials from your GCP account.
     */
    serviceAccountKey: string;
}
export interface GetCloudProviderSnapshotRestoreJobsResult {
    /**
     * Indicates whether the restore job was canceled.
     */
    cancelled: boolean;
    /**
     * UTC ISO 8601 formatted point in time when Atlas created the restore job.
     */
    createdAt: string;
    /**
     * Type of restore job to create. Possible values are: automated and download.
     */
    deliveryType: string;
    /**
     * One or more URLs for the compressed snapshot files for manual download. Only visible if deliveryType is download.
     */
    deliveryUrls: string[];
    /**
     * Indicates whether the restore job expired.
     */
    expired: boolean;
    /**
     * UTC ISO 8601 formatted point in time when the restore job expires.
     */
    expiresAt: string;
    /**
     * UTC ISO 8601 formatted point in time when the restore job completed.
     */
    finishedAt: string;
    /**
     * The unique identifier of the restore job.
     */
    id: string;
    /**
     * Unique identifier of the source snapshot ID of the restore job.
     */
    snapshotId: string;
    /**
     * Name of the target Atlas cluster to which the restore job restores the snapshot. Only visible if deliveryType is automated.
     */
    targetClusterName: string;
    targetProjectId: string;
    /**
     * Timestamp in ISO 8601 date and time format in UTC when the snapshot associated to snapshotId was taken.
     */
    timestamp: string;
}
export interface GetCloudProviderSnapshotsResult {
    /**
     * UTC ISO 8601 formatted point in time when Atlas took the snapshot.
     */
    createdAt: string;
    /**
     * UDescription of the snapshot. Only present for on-demand snapshots.
     */
    description: string;
    /**
     * UTC ISO 8601 formatted point in time when Atlas will delete the snapshot.
     */
    expiresAt: string;
    /**
     * Unique identifier of the snapshot.
     */
    id: string;
    /**
     * Unique ID of the AWS KMS Customer Master Key used to encrypt the snapshot. Only visible for clusters using Encryption at Rest via Customer KMS.
     */
    masterKeyUuid: string;
    /**
     * Version of the MongoDB server.
     */
    mongodVersion: string;
    /**
     * Specified the type of snapshot. Valid values are onDemand and scheduled.
     */
    snapshotType: string;
    /**
     * Current status of the snapshot. One of the following values: queued, inProgress, completed, failed.
     */
    status: string;
    /**
     * Specifies the size of the snapshot in bytes.
     */
    storageSizeBytes: number;
    /**
     * Specifies the type of cluster: replicaSet or shardedCluster.
     */
    type: string;
}
export interface GetClusterBiConnector {
    /**
     * Indicates whether or not BI Connector for Atlas is enabled on the cluster.
     */
    enabled: string;
    /**
     * Indicates the read preference to be used by BI Connector for Atlas on the cluster. Each BI Connector for Atlas read preference contains a distinct combination of [readPreference](https://docs.mongodb.com/manual/core/read-preference/) and [readPreferenceTags](https://docs.mongodb.com/manual/core/read-preference/#tag-sets) options. For details on BI Connector for Atlas read preferences, refer to the [BI Connector Read Preferences Table](https://docs.atlas.mongodb.com/tutorial/create-global-writes-cluster/#bic-read-preferences).
     */
    readPreference: string;
}
export interface GetClusterLabel {
    /**
     * The key that was set.
     */
    key: string;
    /**
     * The value that represents the key.
     */
    value: string;
}
export interface GetClusterReplicationSpec {
    /**
     * Unique identifer of the replication document for a zone in a Global Cluster.
     */
    id: string;
    /**
     * Number of shards to deploy in the specified zone.
     */
    numShards: number;
    /**
     * Describes the physical location of the region. Each regionsConfig document describes the region’s priority in elections and the number and type of MongoDB nodes Atlas deploys to the region. You must order each regionsConfigs document by regionsConfig.priority, descending. See Region Config below for more details.
     */
    regionsConfigs: outputs.GetClusterReplicationSpecRegionsConfig[];
    /**
     * Indicates the n ame for the zone in a Global Cluster.
     */
    zoneName: string;
}
export interface GetClusterReplicationSpecRegionsConfig {
    /**
     * Indicates the number of analytics nodes for Atlas to deploy to the region. Analytics nodes are useful for handling analytic data such as reporting queries from BI Connector for Atlas. Analytics nodes are read-only, and can never become the primary.
     */
    analyticsNodes: number;
    /**
     * Number of electable nodes for Atlas to deploy to the region.
     */
    electableNodes: number;
    /**
     * Election priority of the region. For regions with only read-only nodes, set this value to 0.
     */
    priority: number;
    /**
     * Number of read-only nodes for Atlas to deploy to the region. Read-only nodes can never become the primary, but can facilitate local-reads. Specify 0 if you do not want any read-only nodes in the region.
     */
    readOnlyNodes: number;
    /**
     * Name for the region specified.
     */
    regionName: string;
}
export interface GetClustersResult {
    /**
     * Indicates whether disk auto-scaling is enabled.
     */
    autoScalingDiskGbEnabled: boolean;
    /**
     * Indicates Cloud service provider on which the server for a multi-tenant cluster is provisioned.
     */
    backingProviderName: string;
    /**
     * Indicates whether Atlas continuous backups are enabled for the cluster.
     */
    backupEnabled: boolean;
    /**
     * Indicates BI Connector for Atlas configuration on this cluster. BI Connector for Atlas is only available for M10+ clusters. See BI Connector below for more details.
     */
    biConnector: outputs.GetClustersResultBiConnector;
    /**
     * Indicates the type of the cluster that you want to modify. You cannot convert a sharded cluster deployment to a replica set deployment.
     */
    clusterType: string;
    /**
     * Indicates the size in gigabytes of the server’s root volume (AWS/GCP Only).
     */
    diskSizeGb: number;
    /**
     * Indicates whether Encryption at Rest is enabled or disabled.
     */
    encryptionAtRestProvider: string;
    labels: outputs.GetClustersResultLabel[];
    /**
     * Indicates the version of the cluster to deploy.
     */
    mongoDbMajorVersion: string;
    /**
     * Version of MongoDB the cluster runs, in `major-version`.`minor-version` format.
     */
    mongoDbVersion: string;
    /**
     * Base connection string for the cluster. Atlas only displays this field after the cluster is operational, not while it builds the cluster.
     */
    mongoUri: string;
    /**
     * Lists when the connection string was last updated. The connection string changes, for example, if you change a replica set to a sharded cluster.
     */
    mongoUriUpdated: string;
    /**
     * Describes connection string for connecting to the Atlas cluster. Includes the replicaSet, ssl, and authSource query parameters in the connection string with values appropriate for the cluster.
     */
    mongoUriWithOptions: string;
    /**
     * The name of the current plugin
     */
    name: string;
    /**
     * Number of shards to deploy in the specified zone.
     */
    numShards: number;
    /**
     * Flag that indicates whether the cluster is paused or not.
     */
    paused: boolean;
    /**
     * Flag that indicates if the cluster uses Point-in-Time backups.
     */
    pitEnabled: boolean;
    /**
     * Flag indicating if the cluster uses Cloud Provider Snapshots for backups.
     */
    providerBackupEnabled: boolean;
    /**
     * Indicates the maximum input/output operations per second (IOPS) the system can perform. The possible values depend on the selected providerSettings.instanceSizeName and diskSizeGB.
     */
    providerDiskIops: number;
    /**
     * Describes Azure disk type of the server’s root volume (Azure Only).
     */
    providerDiskTypeName: string;
    /**
     * Indicates whether the Amazon EBS encryption is enabled. This feature encrypts the server’s root volume for both data at rest within the volume and data moving between the volume and the instance.
     */
    providerEncryptEbsVolume: boolean;
    /**
     * Atlas provides different instance sizes, each with a default storage capacity and RAM size.
     */
    providerInstanceSizeName: string;
    /**
     * Indicates the cloud service provider on which the servers are provisioned.
     */
    providerName: string;
    /**
     * Indicates Physical location of your MongoDB cluster. The region you choose can affect network latency for clients accessing your databases. Requires the Atlas Region name, see the reference list for [AWS](https://docs.atlas.mongodb.com/reference/amazon-aws/), [GCP](https://docs.atlas.mongodb.com/reference/google-gcp/), [Azure](https://docs.atlas.mongodb.com/reference/microsoft-azure/).
     */
    providerRegionName: string;
    /**
     * Indicates the type of the volume. The possible values are: `STANDARD` and `PROVISIONED`.
     */
    providerVolumeType: string;
    /**
     * Number of replica set members. Each member keeps a copy of your databases, providing high availability and data redundancy. The possible values are 3, 5, or 7. The default value is 3.
     */
    replicationFactor: number;
    /**
     * Configuration for cluster regions.  See Replication Spec below for more details.
     */
    replicationSpecs: outputs.GetClustersResultReplicationSpec[];
    /**
     * Connection string for connecting to the Atlas cluster. The +srv modifier forces the connection to use TLS/SSL. See the mongoURI for additional options.
     */
    srvAddress: string;
    /**
     * Indicates the current state of the cluster. The possible states are:
     * - IDLE
     * - CREATING
     * - UPDATING
     * - DELETING
     * - DELETED
     * - REPAIRING
     */
    stateName: string;
}
export interface GetClustersResultBiConnector {
    /**
     * Indicates whether or not BI Connector for Atlas is enabled on the cluster.
     */
    enabled: string;
    /**
     * Indicates the read preference to be used by BI Connector for Atlas on the cluster. Each BI Connector for Atlas read preference contains a distinct combination of [readPreference](https://docs.mongodb.com/manual/core/read-preference/) and [readPreferenceTags](https://docs.mongodb.com/manual/core/read-preference/#tag-sets) options. For details on BI Connector for Atlas read preferences, refer to the [BI Connector Read Preferences Table](https://docs.atlas.mongodb.com/tutorial/create-global-writes-cluster/#bic-read-preferences).
     */
    readPreference: string;
}
export interface GetClustersResultLabel {
    /**
     * The key that was set.
     */
    key: string;
    /**
     * The value that represents the key.
     */
    value: string;
}
export interface GetClustersResultReplicationSpec {
    /**
     * Unique identifer of the replication document for a zone in a Global Cluster.
     */
    id: string;
    /**
     * Number of shards to deploy in the specified zone.
     */
    numShards: number;
    /**
     * Describes the physical location of the region. Each regionsConfig document describes the region’s priority in elections and the number and type of MongoDB nodes Atlas deploys to the region. You must order each regionsConfigs document by regionsConfig.priority, descending. See Region Config below for more details.
     */
    regionsConfigs: outputs.GetClustersResultReplicationSpecRegionsConfig[];
    /**
     * Indicates the n ame for the zone in a Global Cluster.
     */
    zoneName: string;
}
export interface GetClustersResultReplicationSpecRegionsConfig {
    /**
     * Indicates the number of analytics nodes for Atlas to deploy to the region. Analytics nodes are useful for handling analytic data such as reporting queries from BI Connector for Atlas. Analytics nodes are read-only, and can never become the primary.
     */
    analyticsNodes: number;
    /**
     * Number of electable nodes for Atlas to deploy to the region.
     */
    electableNodes: number;
    /**
     * Election priority of the region. For regions with only read-only nodes, set this value to 0.
     */
    priority: number;
    /**
     * Number of read-only nodes for Atlas to deploy to the region. Read-only nodes can never become the primary, but can facilitate local-reads. Specify 0 if you do not want any read-only nodes in the region.
     */
    readOnlyNodes: number;
    /**
     * Name for the region specified.
     */
    regionName: string;
}
export interface GetDatabaseUserLabel {
    /**
     * The key that you want to write.
     */
    key: string;
    /**
     * The value that you want to write.
     */
    value: string;
}
export interface GetDatabaseUserRole {
    /**
     * Collection for which the role applies. You can specify a collection for the `read` and `readWrite` roles. If you do not specify a collection for `read` and `readWrite`, the role applies to all collections in the database (excluding some collections in the `system`. database).
     */
    collectionName: string;
    /**
     * Database on which the user has the specified role. A role on the `admin` database can include privileges that apply to the other databases.
     */
    databaseName: string;
    roleName: string;
}
export interface GetDatabaseUsersResult {
    /**
     * The user’s authentication database. A user must provide both a username and authentication database to log into MongoDB. In Atlas deployments of MongoDB, the authentication database is always the admin database.
     */
    authDatabaseName: string;
    labels: outputs.GetDatabaseUsersResultLabel[];
    /**
     * The unique ID for the project to get all database users.
     */
    projectId: string;
    /**
     * List of user’s roles and the databases / collections on which the roles apply. A role allows the user to perform particular actions on the specified database. A role on the admin database can include privileges that apply to the other databases as well. See Roles below for more details.
     */
    roles: outputs.GetDatabaseUsersResultRole[];
    /**
     * Username for authenticating to MongoDB.
     */
    username: string;
    /**
     * X.509 method by which the provided username is authenticated.
     */
    x509Type: string;
}
export interface GetDatabaseUsersResultLabel {
    /**
     * The key that you want to write.
     */
    key: string;
    /**
     * The value that you want to write.
     */
    value: string;
}
export interface GetDatabaseUsersResultRole {
    /**
     * Collection for which the role applies. You can specify a collection for the `read` and `readWrite` roles. If you do not specify a collection for `read` and `readWrite`, the role applies to all collections in the database (excluding some collections in the `system`. database).
     */
    collectionName: string;
    /**
     * Database on which the user has the specified role. A role on the `admin` database can include privileges that apply to the other databases.
     */
    databaseName: string;
    roleName: string;
}
export interface GetNetworkContainersResult {
    /**
     * CIDR block that Atlas uses for your clusters. Atlas uses the specified CIDR block for all other Network Peering connections created in the project. The Atlas CIDR block must be at least a /24 and at most a /21 in one of the following [private networks](https://tools.ietf.org/html/rfc1918.html#section-3).
     */
    atlasCidrBlock: string;
    /**
     * Unique identifer of the Azure subscription in which the VNet resides.
     */
    azureSubscriptionId: string;
    /**
     * Unique identifier of the GCP project in which the Network Peering connection resides.
     */
    gcpProjectId: string;
    /**
     * The Network Peering Container ID.
     */
    id: string;
    /**
     * Name of the Network Peering connection in the Atlas project.
     */
    networkName: string;
    /**
     * Cloud provider for this Network peering container. Accepted values are AWS, GCP, and Azure.
     */
    providerName: string;
    /**
     * Indicates whether the project has Network Peering connections deployed in the container.
     */
    provisioned: boolean;
    /**
     * Azure region where the container resides.
     */
    region: string;
    /**
     * AWS region.
     */
    regionName: string;
    /**
     * The name of the Azure VNet. This value is null until you provision an Azure VNet in the container.
     */
    vnetName: string;
    /**
     * Unique identifier of the project’s VPC.
     */
    vpcId: string;
}
export interface GetNetworkPeeringsResult {
    /**
     * Specifies the region where the peer VPC resides. For complete lists of supported regions, see [Amazon Web Services](https://docs.atlas.mongodb.com/reference/amazon-aws/).
     */
    accepterRegionName: string;
    /**
     * Unique identifier for an Azure AD directory.
     */
    atlasCidrBlock: string;
    /**
     * Account ID of the owner of the peer VPC.
     */
    awsAccountId: string;
    /**
     * Unique identifier for an Azure AD directory.
     */
    azureDirectoryId: string;
    /**
     * Unique identifer of the Azure subscription in which the VNet resides.
     */
    azureSubscriptionId: string;
    /**
     * Unique identifier for the peering connection.
     */
    connectionId: string;
    containerId: string;
    /**
     * When `"status" : "FAILED"`, Atlas provides a description of the error.
     */
    errorMessage: string;
    /**
     * Description of the Atlas error when `status` is `Failed`, Otherwise, Atlas returns `null`.
     */
    errorState: string;
    /**
     * Error state, if any. The VPC peering connection error state value can be one of the following: `REJECTED`, `EXPIRED`, `INVALID_ARGUMENT`.
     */
    errorStateName: string;
    /**
     * GCP project ID of the owner of the network peer.
     */
    gcpProjectId: string;
    /**
     * Name of the network peer to which Atlas connects.
     */
    networkName: string;
    /**
     * Atlas assigned unique ID for the peering connection.
     */
    peeringId: string;
    /**
     * Cloud provider for this VPC peering connection. If omitted, Atlas sets this parameter to AWS. (Possible Values `AWS`, `AZURE`, `GCP`).
     */
    providerName: string;
    /**
     * Name of your Azure resource group.
     */
    resourceGroupName: string;
    /**
     * Peer VPC CIDR block or subnet.
     */
    routeTableCidrBlock: string;
    /**
     * Status of the Atlas network peering connection: `ADDING_PEER`, `AVAILABLE`, `FAILED`, `DELETING`, `WAITING_FOR_USER`.
     */
    status: string;
    /**
     * The VPC peering connection status value can be one of the following: `INITIATING`, `PENDING_ACCEPTANCE`, `FAILED`, `FINALIZING`, `AVAILABLE`, `TERMINATING`.
     */
    statusName: string;
    /**
     * Name of your Azure VNet.
     */
    vnetName: string;
    /**
     * Unique identifier of the peer VPC.
     */
    vpcId: string;
}
export interface GetProjectTeam {
    roleNames: string[];
    teamId: string;
}
export interface GetProjectsResult {
    clusterCount: number;
    created: string;
    /**
     * Autogenerated Unique ID for this data source.
     */
    id: string;
    /**
     * The name of the project you want to create. (Cannot be changed via this Provider after creation.)
     */
    name: string;
    /**
     * The ID of the organization you want to create the project within.
     * *`clusterCount` - The number of Atlas clusters deployed in the project.
     * *`created` - The ISO-8601-formatted timestamp of when Atlas created the project.
     * * `teams.#.team_id` - The unique identifier of the team you want to associate with the project. The team and project must share the same parent organization.
     * * `teams.#.role_names` - Each string in the array represents a project role assigned to the team. Every user associated with the team inherits these roles.
     * The following are valid roles:
     * * `GROUP_OWNER`
     * * `GROUP_READ_ONLY`
     * * `GROUP_DATA_ACCESS_ADMIN`
     * * `GROUP_DATA_ACCESS_READ_WRITE`
     * * `GROUP_DATA_ACCESS_READ_ONLY`
     * * `GROUP_CLUSTER_MANAGER`
     */
    orgId: string;
    teams: outputs.GetProjectsResultTeam[];
}
export interface GetProjectsResultTeam {
    roleNames: string[];
    teamId: string;
}
export interface ProjectTeam {
    /**
     * Each string in the array represents a project role you want to assign to the team. Every user associated with the team inherits these roles. You must specify an array even if you are only associating a single role with the team.
     * The following are valid roles:
     * * `GROUP_OWNER`
     * * `GROUP_READ_ONLY`
     * * `GROUP_DATA_ACCESS_ADMIN`
     * * `GROUP_DATA_ACCESS_READ_WRITE`
     * * `GROUP_DATA_ACCESS_READ_ONLY`
     * * `GROUP_CLUSTER_MANAGER`
     */
    roleNames: string[];
    /**
     * The unique identifier of the team you want to associate with the project. The team and project must share the same parent organization.
     */
    teamId: string;
}