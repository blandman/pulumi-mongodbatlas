"use strict";
// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
const pulumi = require("@pulumi/pulumi");
let __config = new pulumi.Config("mongodbatlas");
/**
 * MongoDB Atlas Programmatic Private Key
 */
exports.privateKey = __config.get("privateKey");
/**
 * MongoDB Atlas Programmatic Public Key
 */
exports.publicKey = __config.get("publicKey");
//# sourceMappingURL=vars.js.map