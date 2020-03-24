# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from . import utilities, tables

class ProjectIpWhitelist(pulumi.CustomResource):
    aws_security_group: pulumi.Output[str]
    """
    ID of the whitelisted AWS security group. Mutually exclusive with `cidr_block` and `ip_address`.
    """
    cidr_block: pulumi.Output[str]
    """
    Whitelist entry in Classless Inter-Domain Routing (CIDR) notation. Mutually exclusive with `aws_security_group` and `ip_address`.
    """
    comment: pulumi.Output[str]
    """
    Comment to add to the whitelist entry.
    """
    ip_address: pulumi.Output[str]
    """
    Whitelisted IP address. Mutually exclusive with `aws_security_group` and `cidr_block`.
    """
    project_id: pulumi.Output[str]
    """
    The ID of the project in which to add the whitelist entry.
    """
    def __init__(__self__, resource_name, opts=None, aws_security_group=None, cidr_block=None, comment=None, ip_address=None, project_id=None, __props__=None, __name__=None, __opts__=None):
        """
        `.ProjectIpWhitelist` provides an IP Whitelist entry resource. The whitelist grants access from IPs, CIDRs or AWS Security Groups (if VPC Peering is enabled) to clusters within the Project.
        
        > **NOTE:** Groups and projects are synonymous terms. You may find `groupId` in the official documentation.
        
        > **IMPORTANT:**
        When you remove an entry from the whitelist, existing connections from the removed address(es) may remain open for a variable amount of time. How much time passes before Atlas closes the connection depends on several factors, including how the connection was established, the particular behavior of the application or driver using the address, and the connection protocol (e.g., TCP or UDP). This is particularly important to consider when changing an existing IP address or CIDR block as they cannot be updated via the Provider (comments can however), hence a change will force the destruction and recreation of entries.   
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] aws_security_group: ID of the whitelisted AWS security group. Mutually exclusive with `cidr_block` and `ip_address`.
        :param pulumi.Input[str] cidr_block: Whitelist entry in Classless Inter-Domain Routing (CIDR) notation. Mutually exclusive with `aws_security_group` and `ip_address`.
        :param pulumi.Input[str] comment: Comment to add to the whitelist entry.
        :param pulumi.Input[str] ip_address: Whitelisted IP address. Mutually exclusive with `aws_security_group` and `cidr_block`.
        :param pulumi.Input[str] project_id: The ID of the project in which to add the whitelist entry.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-mongodbatlas/blob/master/website/docs/r/project_ip_whitelist.html.markdown.
        """
        if __name__ is not None:
            warnings.warn("explicit use of __name__ is deprecated", DeprecationWarning)
            resource_name = __name__
        if __opts__ is not None:
            warnings.warn("explicit use of __opts__ is deprecated, use 'opts' instead", DeprecationWarning)
            opts = __opts__
        if opts is None:
            opts = pulumi.ResourceOptions()
        if not isinstance(opts, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')
        if opts.version is None:
            opts.version = utilities.get_version()
        if opts.id is None:
            if __props__ is not None:
                raise TypeError('__props__ is only valid when passed in combination with a valid opts.id to get an existing resource')
            __props__ = dict()

            __props__['aws_security_group'] = aws_security_group
            __props__['cidr_block'] = cidr_block
            __props__['comment'] = comment
            __props__['ip_address'] = ip_address
            if project_id is None:
                raise TypeError("Missing required property 'project_id'")
            __props__['project_id'] = project_id
        super(ProjectIpWhitelist, __self__).__init__(
            'mongodbatlas:index/projectIpWhitelist:ProjectIpWhitelist',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, aws_security_group=None, cidr_block=None, comment=None, ip_address=None, project_id=None):
        """
        Get an existing ProjectIpWhitelist resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.
        
        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] aws_security_group: ID of the whitelisted AWS security group. Mutually exclusive with `cidr_block` and `ip_address`.
        :param pulumi.Input[str] cidr_block: Whitelist entry in Classless Inter-Domain Routing (CIDR) notation. Mutually exclusive with `aws_security_group` and `ip_address`.
        :param pulumi.Input[str] comment: Comment to add to the whitelist entry.
        :param pulumi.Input[str] ip_address: Whitelisted IP address. Mutually exclusive with `aws_security_group` and `cidr_block`.
        :param pulumi.Input[str] project_id: The ID of the project in which to add the whitelist entry.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-mongodbatlas/blob/master/website/docs/r/project_ip_whitelist.html.markdown.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()
        __props__["aws_security_group"] = aws_security_group
        __props__["cidr_block"] = cidr_block
        __props__["comment"] = comment
        __props__["ip_address"] = ip_address
        __props__["project_id"] = project_id
        return ProjectIpWhitelist(resource_name, opts=opts, __props__=__props__)
    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop
