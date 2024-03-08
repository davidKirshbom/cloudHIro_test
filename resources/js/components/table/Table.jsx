import TableHead from "./TableHead";
import TableBody from "./TableBody";
import Pagination from "./Pagination";
import { useState } from "react";
import {
    getCoreRowModel,
    getSortedRowModel,
    getPaginationRowModel,
    getFilteredRowModel,
    useReactTable,
} from "@tanstack/react-table";

function Table(props) {
    const { columns, data } = props;
    const [pagination, setPagination] = useState({
        pageIndex: 0,
        pageSize: 10,
    });
    const table = useReactTable({
        columns,
        data,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onPaginationChange: setPagination,
        state: {
            pagination,
        },
    });

    return (
        <div className="container">
            <table
                className="table-auto border-black"
                striped
                bordered={true}
                hover
            >
                <TableHead table={table} />
                <TableBody table={table} />
            </table>

            <Pagination table={table} />
        </div>
    );
}

export default Table;
