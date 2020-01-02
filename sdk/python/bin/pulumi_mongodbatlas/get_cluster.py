# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from . import utilities, tables

class GetClusterResult:
    """
    A collection of values returned by getCluster.
    """
    def __init__(__self__, auto_scaling_disk_gb_enabled=None, backing_provider_name=None, backup_enabled=None, bi_connector=None, cluster_type=None, disk_size_gb=None, encryption_at_rest_provider=None, mongo_db_major_version=None, mongo_db_version=None, mongo_uri=None, mongo_uri_updated=None, mongo_uri_with_options=None, name=None, num_shards=None, paused=None, project_id=None, provider_backup_enabled=None, provider_disk_iops=None, provider_disk_type_name=None, provider_encrypt_ebs_volume=None, provider_instance_size_name=None, provider_name=None, provider_region_name=None, provider_volume_type=None, replication_factor=None, replication_specs=None, srv_address=None, state_name=None, id=None):
        if auto_scaling_disk_gb_enabled and not isinstance(auto_scaling_disk_gb_enabled, bool):
            raise TypeError("Expected argument 'auto_scaling_disk_gb_enabled' to be a bool")
        __self__.auto_scaling_disk_gb_enabled = auto_scaling_disk_gb_enabled
        """
        Indicates whether disk auto-scaling is enabled.
        """
        if backing_provider_name and not isinstance(backing_provider_name, str):
            raise TypeError("Expected argument 'backing_provider_name' to be a str")
        __self__.backing_provider_name = backing_provider_name
        """
        Indicates Cloud service provider on which the server for a multi-tenant cluster is provisioned.
        """
        if backup_enabled and not isinstance(backup_enabled, bool):
            raise TypeError("Expected argument 'backup_enabled' to be a bool")
        __self__.backup_enabled = backup_enabled
        """
        Indicates whether Atlas continuous backups are enabled for the cluster.
        """
        if bi_connector and not isinstance(bi_connector, dict):
            raise TypeError("Expected argument 'bi_connector' to be a dict")
        __self__.bi_connector = bi_connector
        """
        Indicates BI Connector for Atlas configuration on this cluster. BI Connector for Atlas is only available for M10+ clusters. See BI Connector below for more details.
        """
        if cluster_type and not isinstance(cluster_type, str):
            raise TypeError("Expected argument 'cluster_type' to be a str")
        __self__.cluster_type = cluster_type
        """
        Indicates the type of the cluster that you want to modify. You cannot convert a sharded cluster deployment to a replica set deployment.
        """
        if disk_size_gb and not isinstance(disk_size_gb, float):
            raise TypeError("Expected argument 'disk_size_gb' to be a float")
        __self__.disk_size_gb = disk_size_gb
        """
        Indicates the size in gigabytes of the server’s root volume.
        """
        if encryption_at_rest_provider and not isinstance(encryption_at_rest_provider, str):
            raise TypeError("Expected argument 'encryption_at_rest_provider' to be a str")
        __self__.encryption_at_rest_provider = encryption_at_rest_provider
        """
        Indicates whether Encryption at Rest is enabled or disabled.
        """
        if mongo_db_major_version and not isinstance(mongo_db_major_version, str):
            raise TypeError("Expected argument 'mongo_db_major_version' to be a str")
        __self__.mongo_db_major_version = mongo_db_major_version
        """
        Indicates the version of the cluster to deploy.
        """
        if mongo_db_version and not isinstance(mongo_db_version, str):
            raise TypeError("Expected argument 'mongo_db_version' to be a str")
        __self__.mongo_db_version = mongo_db_version
        """
        Version of MongoDB the cluster runs, in `major-version`.`minor-version` format.
        """
        if mongo_uri and not isinstance(mongo_uri, str):
            raise TypeError("Expected argument 'mongo_uri' to be a str")
        __self__.mongo_uri = mongo_uri
        """
        Base connection string for the cluster. Atlas only displays this field after the cluster is operational, not while it builds the cluster.
        """
        if mongo_uri_updated and not isinstance(mongo_uri_updated, str):
            raise TypeError("Expected argument 'mongo_uri_updated' to be a str")
        __self__.mongo_uri_updated = mongo_uri_updated
        """
        Lists when the connection string was last updated. The connection string changes, for example, if you change a replica set to a sharded cluster.
        """
        if mongo_uri_with_options and not isinstance(mongo_uri_with_options, str):
            raise TypeError("Expected argument 'mongo_uri_with_options' to be a str")
        __self__.mongo_uri_with_options = mongo_uri_with_options
        """
        Describes connection string for connecting to the Atlas cluster. Includes the replicaSet, ssl, and authSource query parameters in the connection string with values appropriate for the cluster.
        """
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        __self__.name = name
        """
        Name of the cluster as it appears in Atlas.
        """
        if num_shards and not isinstance(num_shards, float):
            raise TypeError("Expected argument 'num_shards' to be a float")
        __self__.num_shards = num_shards
        """
        Number of shards to deploy in the specified zone.
        """
        if paused and not isinstance(paused, bool):
            raise TypeError("Expected argument 'paused' to be a bool")
        __self__.paused = paused
        """
        Flag that indicates whether the cluster is paused or not.
        """
        if project_id and not isinstance(project_id, str):
            raise TypeError("Expected argument 'project_id' to be a str")
        __self__.project_id = project_id
        if provider_backup_enabled and not isinstance(provider_backup_enabled, bool):
            raise TypeError("Expected argument 'provider_backup_enabled' to be a bool")
        __self__.provider_backup_enabled = provider_backup_enabled
        """
        Flag indicating if the cluster uses Cloud Provider Snapshots for backups.
        """
        if provider_disk_iops and not isinstance(provider_disk_iops, float):
            raise TypeError("Expected argument 'provider_disk_iops' to be a float")
        __self__.provider_disk_iops = provider_disk_iops
        """
        Indicates the maximum input/output operations per second (IOPS) the system can perform. The possible values depend on the selected providerSettings.instanceSizeName and diskSizeGB.
        """
        if provider_disk_type_name and not isinstance(provider_disk_type_name, str):
            raise TypeError("Expected argument 'provider_disk_type_name' to be a str")
        __self__.provider_disk_type_name = provider_disk_type_name
        """
        Describes Azure disk type of the server’s root volume.
        """
        if provider_encrypt_ebs_volume and not isinstance(provider_encrypt_ebs_volume, bool):
            raise TypeError("Expected argument 'provider_encrypt_ebs_volume' to be a bool")
        __self__.provider_encrypt_ebs_volume = provider_encrypt_ebs_volume
        """
        Indicates whether the Amazon EBS encryption is enabled. This feature encrypts the server’s root volume for both data at rest within the volume and data moving between the volume and the instance.
        """
        if provider_instance_size_name and not isinstance(provider_instance_size_name, str):
            raise TypeError("Expected argument 'provider_instance_size_name' to be a str")
        __self__.provider_instance_size_name = provider_instance_size_name
        """
        Atlas provides different instance sizes, each with a default storage capacity and RAM size.
        """
        if provider_name and not isinstance(provider_name, str):
            raise TypeError("Expected argument 'provider_name' to be a str")
        __self__.provider_name = provider_name
        """
        Indicates the cloud service provider on which the servers are provisioned.
        """
        if provider_region_name and not isinstance(provider_region_name, str):
            raise TypeError("Expected argument 'provider_region_name' to be a str")
        __self__.provider_region_name = provider_region_name
        """
        Indicates Physical location of your MongoDB cluster. The region you choose can affect network latency for clients accessing your databases.  Requires the Atlas Region name, see the reference list for [AWS](https://docs.atlas.mongodb.com/reference/amazon-aws/), [GCP](https://docs.atlas.mongodb.com/reference/google-gcp/), [Azure](https://docs.atlas.mongodb.com/reference/microsoft-azure/).
        """
        if provider_volume_type and not isinstance(provider_volume_type, str):
            raise TypeError("Expected argument 'provider_volume_type' to be a str")
        __self__.provider_volume_type = provider_volume_type
        """
        Indicates the type of the volume. The possible values are: `STANDARD` and `PROVISIONED`.
        """
        if replication_factor and not isinstance(replication_factor, float):
            raise TypeError("Expected argument 'replication_factor' to be a float")
        __self__.replication_factor = replication_factor
        """
        Number of replica set members. Each member keeps a copy of your databases, providing high availability and data redundancy. The possible values are 3, 5, or 7. The default value is 3.
        """
        if replication_specs and not isinstance(replication_specs, list):
            raise TypeError("Expected argument 'replication_specs' to be a list")
        __self__.replication_specs = replication_specs
        """
        Configuration for cluster regions.  See Replication Spec below for more details.
        """
        if srv_address and not isinstance(srv_address, str):
            raise TypeError("Expected argument 'srv_address' to be a str")
        __self__.srv_address = srv_address
        """
        Connection string for connecting to the Atlas cluster. The +srv modifier forces the connection to use TLS/SSL. See the mongoURI for additional options.
        """
        if state_name and not isinstance(state_name, str):
            raise TypeError("Expected argument 'state_name' to be a str")
        __self__.state_name = state_name
        """
        Indicates the current state of the cluster. The possible states are:
        - IDLE
        - CREATING
        - UPDATING
        - DELETING
        - DELETED
        - REPAIRING
        """
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        __self__.id = id
        """
        id is the provider-assigned unique ID for this managed resource.
        """
class AwaitableGetClusterResult(GetClusterResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetClusterResult(
            auto_scaling_disk_gb_enabled=self.auto_scaling_disk_gb_enabled,
            backing_provider_name=self.backing_provider_name,
            backup_enabled=self.backup_enabled,
            bi_connector=self.bi_connector,
            cluster_type=self.cluster_type,
            disk_size_gb=self.disk_size_gb,
            encryption_at_rest_provider=self.encryption_at_rest_provider,
            mongo_db_major_version=self.mongo_db_major_version,
            mongo_db_version=self.mongo_db_version,
            mongo_uri=self.mongo_uri,
            mongo_uri_updated=self.mongo_uri_updated,
            mongo_uri_with_options=self.mongo_uri_with_options,
            name=self.name,
            num_shards=self.num_shards,
            paused=self.paused,
            project_id=self.project_id,
            provider_backup_enabled=self.provider_backup_enabled,
            provider_disk_iops=self.provider_disk_iops,
            provider_disk_type_name=self.provider_disk_type_name,
            provider_encrypt_ebs_volume=self.provider_encrypt_ebs_volume,
            provider_instance_size_name=self.provider_instance_size_name,
            provider_name=self.provider_name,
            provider_region_name=self.provider_region_name,
            provider_volume_type=self.provider_volume_type,
            replication_factor=self.replication_factor,
            replication_specs=self.replication_specs,
            srv_address=self.srv_address,
            state_name=self.state_name,
            id=self.id)

def get_cluster(name=None,project_id=None,opts=None):
    """
    `.Cluster` describes a Cluster. The. The data source requires your Project ID.
    
    > **NOTE:** Groups and projects are synonymous terms. You may find group_id in the official documentation.
    
    > **IMPORTANT:**
    <br> &#8226; Changes to cluster configurations can affect costs. Before making changes, please see [Billing](https://docs.atlas.mongodb.com/billing/).
    <br> &#8226; If your Atlas project contains a custom role that uses actions introduced in a specific MongoDB version, you cannot create a cluster with a MongoDB version less than that version unless you delete the custom role.
    
    :param str name: Name of the cluster as it appears in Atlas. Once the cluster is created, its name cannot be changed.
    :param str project_id: The unique ID for the project to create the database user.

    > This content is derived from https://github.com/terraform-providers/terraform-provider-mongodbatlas/blob/master/website/docs/d/cluster.html.markdown.
    """
    __args__ = dict()

    __args__['name'] = name
    __args__['projectId'] = project_id
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = utilities.get_version()
    __ret__ = pulumi.runtime.invoke('mongodbatlas:index/getCluster:getCluster', __args__, opts=opts).value

    return AwaitableGetClusterResult(
        auto_scaling_disk_gb_enabled=__ret__.get('autoScalingDiskGbEnabled'),
        backing_provider_name=__ret__.get('backingProviderName'),
        backup_enabled=__ret__.get('backupEnabled'),
        bi_connector=__ret__.get('biConnector'),
        cluster_type=__ret__.get('clusterType'),
        disk_size_gb=__ret__.get('diskSizeGb'),
        encryption_at_rest_provider=__ret__.get('encryptionAtRestProvider'),
        mongo_db_major_version=__ret__.get('mongoDbMajorVersion'),
        mongo_db_version=__ret__.get('mongoDbVersion'),
        mongo_uri=__ret__.get('mongoUri'),
        mongo_uri_updated=__ret__.get('mongoUriUpdated'),
        mongo_uri_with_options=__ret__.get('mongoUriWithOptions'),
        name=__ret__.get('name'),
        num_shards=__ret__.get('numShards'),
        paused=__ret__.get('paused'),
        project_id=__ret__.get('projectId'),
        provider_backup_enabled=__ret__.get('providerBackupEnabled'),
        provider_disk_iops=__ret__.get('providerDiskIops'),
        provider_disk_type_name=__ret__.get('providerDiskTypeName'),
        provider_encrypt_ebs_volume=__ret__.get('providerEncryptEbsVolume'),
        provider_instance_size_name=__ret__.get('providerInstanceSizeName'),
        provider_name=__ret__.get('providerName'),
        provider_region_name=__ret__.get('providerRegionName'),
        provider_volume_type=__ret__.get('providerVolumeType'),
        replication_factor=__ret__.get('replicationFactor'),
        replication_specs=__ret__.get('replicationSpecs'),
        srv_address=__ret__.get('srvAddress'),
        state_name=__ret__.get('stateName'),
        id=__ret__.get('id'))
