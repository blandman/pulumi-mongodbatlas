"use strict";
// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
/**
 * `mongodbatlas..NetworkPeering` provides a Network Peering Connection resource. The resource lets you create, edit and delete network peering connections. The resource requires your Project ID.  Ensure you have first created a Network Container.  See the networkContainer resource and examples below.
 *
 * > **GCP AND AZURE ONLY:** You must enable Connect via Peering Only mode to use network peering.
 *
 * > **AZURE ONLY:** To create the peering request with an Azure VNET, you must grant Atlas the following permissions on the virtual network.
 *     Microsoft.Network/virtualNetworks/virtualNetworkPeerings/read
 *     Microsoft.Network/virtualNetworks/virtualNetworkPeerings/write
 *     Microsoft.Network/virtualNetworks/virtualNetworkPeerings/delete
 *     Microsoft.Network/virtualNetworks/peer/action
 * For more information see https://docs.atlas.mongodb.com/security-vpc-peering/
 *
 * > **Create a Whitelist:** Ensure you whitelist the private IP ranges of the subnets in which your application is hosted in order to connect to your Atlas cluster.  See the projectIpWhitelist resource.
 *
 * > **NOTE:** Groups and projects are synonymous terms. You may find **group_id** in the official documentation.
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-mongodbatlas/blob/master/website/docs/r/network_peering.html.markdown.
 */
class NetworkPeering extends pulumi.CustomResource {
    constructor(name, argsOrState, opts) {
        let inputs = {};
        if (opts && opts.id) {
            const state = argsOrState;
            inputs["accepterRegionName"] = state ? state.accepterRegionName : undefined;
            inputs["atlasCidrBlock"] = state ? state.atlasCidrBlock : undefined;
            inputs["atlasGcpProjectId"] = state ? state.atlasGcpProjectId : undefined;
            inputs["atlasId"] = state ? state.atlasId : undefined;
            inputs["atlasVpcName"] = state ? state.atlasVpcName : undefined;
            inputs["awsAccountId"] = state ? state.awsAccountId : undefined;
            inputs["azureDirectoryId"] = state ? state.azureDirectoryId : undefined;
            inputs["azureSubscriptionId"] = state ? state.azureSubscriptionId : undefined;
            inputs["connectionId"] = state ? state.connectionId : undefined;
            inputs["containerId"] = state ? state.containerId : undefined;
            inputs["errorMessage"] = state ? state.errorMessage : undefined;
            inputs["errorState"] = state ? state.errorState : undefined;
            inputs["errorStateName"] = state ? state.errorStateName : undefined;
            inputs["gcpProjectId"] = state ? state.gcpProjectId : undefined;
            inputs["networkName"] = state ? state.networkName : undefined;
            inputs["peerId"] = state ? state.peerId : undefined;
            inputs["projectId"] = state ? state.projectId : undefined;
            inputs["providerName"] = state ? state.providerName : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["routeTableCidrBlock"] = state ? state.routeTableCidrBlock : undefined;
            inputs["status"] = state ? state.status : undefined;
            inputs["statusName"] = state ? state.statusName : undefined;
            inputs["vnetName"] = state ? state.vnetName : undefined;
            inputs["vpcId"] = state ? state.vpcId : undefined;
        }
        else {
            const args = argsOrState;
            if (!args || args.containerId === undefined) {
                throw new Error("Missing required property 'containerId'");
            }
            if (!args || args.projectId === undefined) {
                throw new Error("Missing required property 'projectId'");
            }
            if (!args || args.providerName === undefined) {
                throw new Error("Missing required property 'providerName'");
            }
            inputs["accepterRegionName"] = args ? args.accepterRegionName : undefined;
            inputs["atlasCidrBlock"] = args ? args.atlasCidrBlock : undefined;
            inputs["atlasGcpProjectId"] = args ? args.atlasGcpProjectId : undefined;
            inputs["atlasVpcName"] = args ? args.atlasVpcName : undefined;
            inputs["awsAccountId"] = args ? args.awsAccountId : undefined;
            inputs["azureDirectoryId"] = args ? args.azureDirectoryId : undefined;
            inputs["azureSubscriptionId"] = args ? args.azureSubscriptionId : undefined;
            inputs["containerId"] = args ? args.containerId : undefined;
            inputs["gcpProjectId"] = args ? args.gcpProjectId : undefined;
            inputs["networkName"] = args ? args.networkName : undefined;
            inputs["projectId"] = args ? args.projectId : undefined;
            inputs["providerName"] = args ? args.providerName : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["routeTableCidrBlock"] = args ? args.routeTableCidrBlock : undefined;
            inputs["vnetName"] = args ? args.vnetName : undefined;
            inputs["vpcId"] = args ? args.vpcId : undefined;
            inputs["atlasId"] = undefined /*out*/;
            inputs["connectionId"] = undefined /*out*/;
            inputs["errorMessage"] = undefined /*out*/;
            inputs["errorState"] = undefined /*out*/;
            inputs["errorStateName"] = undefined /*out*/;
            inputs["peerId"] = undefined /*out*/;
            inputs["status"] = undefined /*out*/;
            inputs["statusName"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {};
        }
        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(NetworkPeering.__pulumiType, name, inputs, opts);
    }
    /**
     * Get an existing NetworkPeering resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name, id, state, opts) {
        return new NetworkPeering(name, state, Object.assign(Object.assign({}, opts), { id: id }));
    }
    /**
     * Returns true if the given object is an instance of NetworkPeering.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj) {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NetworkPeering.__pulumiType;
    }
}
exports.NetworkPeering = NetworkPeering;
/** @internal */
NetworkPeering.__pulumiType = 'mongodbatlas:index/networkPeering:NetworkPeering';
//# sourceMappingURL=networkPeering.js.map