import { useQuery } from "@tanstack/react-query";
import React, { useMemo } from "react";
import { getResources } from "../fetchers/resources";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import Table from "./table/Table";
function ResourceTable() {
    const {
        data: resourcesList,
        isFetching,
        isError: isResourceListFetchError,
        error: fetchResourceListError,
    } = useQuery({
        queryKey: ["resources"],
        queryFn: getResources,
        staleTime: Infinity,
        refetchOnWindowFocus: false,
        gcTime: Infinity,
    });

    const columns = useMemo(
        () => [
            {
                header: "Id",
                accessorKey: "id",
            },
            {
                header: "Date",
                accessorKey: "date",
            },
            {
                header: "Subscription name",
                accessorKey: "subscription_name",
            },
            {
                header: "Resource group",
                accessorKey: "resource_group",
            },
            {
                header: "Meter category",
                accessorKey: "meter_category",
            },
            {
                header: "Meter subcategory",
                accessorKey: "meter_subcategory",
            },
            {
                header: "Resource location",
                accessorKey: "resource_location",
            },
            {
                header: "Unit price",
                accessorKey: "unit_price",
            },
            {
                header: "Cost",
                accessorKey: "cost",
            },
            {
                header: "Additional info",
                accessorKey: "additional_info",
            },
            {
                header: "Vpcus",
                accessorKey: "vpcus",
            },
        ],
        []
    );

    return isFetching ? (
        <Loader />
    ) : isResourceListFetchError ? (
        <ErrorMessage message={fetchResourceListError.message} />
    ) : (
        <Table data={resourcesList} columns={columns} />
    );
}

export default ResourceTable;
