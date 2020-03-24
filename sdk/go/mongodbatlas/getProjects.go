// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package mongodbatlas

import (
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// `.getProjects` describe all Projects. This represents projects that have been created.
// 
// > **NOTE:** Groups and projects are synonymous terms. You may find `groupId` in the official documentation.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-mongodbatlas/blob/master/website/docs/d/projects.html.markdown.
func LookupProjects(ctx *pulumi.Context) (*GetProjectsResult, error) {
	outputs, err := ctx.Invoke("mongodbatlas:index/getProjects:getProjects", nil)
	if err != nil {
		return nil, err
	}
	return &GetProjectsResult{
		Results: outputs["results"],
		TotalCount: outputs["totalCount"],
		Id: outputs["id"],
	}, nil
}

// A collection of values returned by getProjects.
type GetProjectsResult struct {
	Results interface{}
	TotalCount interface{}
	// id is the provider-assigned unique ID for this managed resource.
	Id interface{}
}