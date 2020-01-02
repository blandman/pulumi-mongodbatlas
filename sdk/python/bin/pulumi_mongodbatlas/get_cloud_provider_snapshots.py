# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from . import utilities, tables

class GetCloudProviderSnapshotsResult:
    """
    A collection of values returned by getCloudProviderSnapshots.
    """
    def __init__(__self__, cluster_name=None, project_id=None, results=None, total_count=None, id=None):
        if cluster_name and not isinstance(cluster_name, str):
            raise TypeError("Expected argument 'cluster_name' to be a str")
        __self__.cluster_name = cluster_name
        if project_id and not isinstance(project_id, str):
            raise TypeError("Expected argument 'project_id' to be a str")
        __self__.project_id = project_id
        if results and not isinstance(results, list):
            raise TypeError("Expected argument 'results' to be a list")
        __self__.results = results
        """
        Includes cloudProviderSnapshot object for each item detailed in the results array section.
        """
        if total_count and not isinstance(total_count, float):
            raise TypeError("Expected argument 'total_count' to be a float")
        __self__.total_count = total_count
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        __self__.id = id
        """
        id is the provider-assigned unique ID for this managed resource.
        """
class AwaitableGetCloudProviderSnapshotsResult(GetCloudProviderSnapshotsResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetCloudProviderSnapshotsResult(
            cluster_name=self.cluster_name,
            project_id=self.project_id,
            results=self.results,
            total_count=self.total_count,
            id=self.id)

def get_cloud_provider_snapshots(cluster_name=None,project_id=None,opts=None):
    """
    `.getCloudProviderSnapshots` provides an Cloud Provider Snapshot entry datasource. Atlas Cloud Provider Snapshots provide localized backup storage using the native snapshot functionality of the cluster’s cloud service provider.
    
    > **NOTE:** Groups and projects are synonymous terms. You may find `groupId` in the official documentation.
    
    :param str cluster_name: The name of the Atlas cluster that contains the snapshot you want to retrieve.

    > This content is derived from https://github.com/terraform-providers/terraform-provider-mongodbatlas/blob/master/website/docs/d/cloud_provider_snapshots.html.markdown.
    """
    __args__ = dict()

    __args__['clusterName'] = cluster_name
    __args__['projectId'] = project_id
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = utilities.get_version()
    __ret__ = pulumi.runtime.invoke('mongodbatlas:index/getCloudProviderSnapshots:getCloudProviderSnapshots', __args__, opts=opts).value

    return AwaitableGetCloudProviderSnapshotsResult(
        cluster_name=__ret__.get('clusterName'),
        project_id=__ret__.get('projectId'),
        results=__ret__.get('results'),
        total_count=__ret__.get('totalCount'),
        id=__ret__.get('id'))
