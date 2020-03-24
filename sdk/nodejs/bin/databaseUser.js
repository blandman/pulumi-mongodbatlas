"use strict";
// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
/**
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-mongodbatlas/blob/master/website/docs/r/database_user.html.markdown.
 */
class DatabaseUser extends pulumi.CustomResource {
    constructor(name, argsOrState, opts) {
        let inputs = {};
        if (opts && opts.id) {
            const state = argsOrState;
            inputs["authDatabaseName"] = state ? state.authDatabaseName : undefined;
            inputs["databaseName"] = state ? state.databaseName : undefined;
            inputs["labels"] = state ? state.labels : undefined;
            inputs["password"] = state ? state.password : undefined;
            inputs["projectId"] = state ? state.projectId : undefined;
            inputs["roles"] = state ? state.roles : undefined;
            inputs["username"] = state ? state.username : undefined;
            inputs["x509Type"] = state ? state.x509Type : undefined;
        }
        else {
            const args = argsOrState;
            if (!args || args.projectId === undefined) {
                throw new Error("Missing required property 'projectId'");
            }
            if (!args || args.username === undefined) {
                throw new Error("Missing required property 'username'");
            }
            inputs["authDatabaseName"] = args ? args.authDatabaseName : undefined;
            inputs["databaseName"] = args ? args.databaseName : undefined;
            inputs["labels"] = args ? args.labels : undefined;
            inputs["password"] = args ? args.password : undefined;
            inputs["projectId"] = args ? args.projectId : undefined;
            inputs["roles"] = args ? args.roles : undefined;
            inputs["username"] = args ? args.username : undefined;
            inputs["x509Type"] = args ? args.x509Type : undefined;
        }
        if (!opts) {
            opts = {};
        }
        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(DatabaseUser.__pulumiType, name, inputs, opts);
    }
    /**
     * Get an existing DatabaseUser resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name, id, state, opts) {
        return new DatabaseUser(name, state, Object.assign(Object.assign({}, opts), { id: id }));
    }
    /**
     * Returns true if the given object is an instance of DatabaseUser.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj) {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DatabaseUser.__pulumiType;
    }
}
exports.DatabaseUser = DatabaseUser;
/** @internal */
DatabaseUser.__pulumiType = 'mongodbatlas:index/databaseUser:DatabaseUser';
//# sourceMappingURL=databaseUser.js.map