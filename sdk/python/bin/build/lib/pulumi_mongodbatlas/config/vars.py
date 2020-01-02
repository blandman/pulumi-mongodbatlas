# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

__config__ = pulumi.Config('mongodbatlas')

private_key = __config__.get('privateKey')
"""
MongoDB Atlas Programmatic Private Key
"""

public_key = __config__.get('publicKey')
"""
MongoDB Atlas Programmatic Public Key
"""

