function Pagination(props) {
    const { table } = props;
    return (
        <>
            <div className="flex items-center gap-2">
                <button
                    className="border rounded p-1 disabled:opacity-50"
                    onClick={() => table.firstPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    <i class="bi bi-chevron-double-left"></i>
                </button>
                <button
                    className="border rounded p-1  disabled:opacity-50"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    <i class="bi bi-chevron-left"></i>
                </button>
                <span className="flex items-center gap-1">
                    <input
                        type="number"
                        defaultValue={table.getState().pagination.pageIndex + 1}
                        onChange={(e) => {
                            const page = e.target.value
                                ? e.target.value - 1
                                : 0;
                            table.setPageIndex(page);
                        }}
                        className="border p-1 rounded w-12"
                    />
                </span>
                <button
                    className="border rounded p-1 disabled:opacity-50"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                >
                    <i class="bi bi-chevron-right"></i>
                </button>
                <button
                    className="border rounded p-1 disabled:opacity-50"
                    onClick={() => table.lastPage()}
                    disabled={!table.getCanNextPage()}
                >
                    <i class="bi bi-chevron-double-right "></i>
                </button>
                <span className="flex items-center gap-1">
                    <div>Page</div>
                    <strong>
                        {table.getState().pagination.pageIndex + 1} of{" "}
                        {table.getPageCount().toLocaleString()}
                    </strong>
                </span>
            </div>
            <div>
                Showing {table.getRowModel().rows.length.toLocaleString()} of{" "}
                {table.getRowCount().toLocaleString()} Rows
            </div>
        </>
    );
}

export default Pagination;
