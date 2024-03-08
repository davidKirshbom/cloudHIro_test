import { flexRender } from "@tanstack/react-table";
import { Filter } from "./FilterInputs";
import SortButton from "./SortButton";

function TableHead(props) {
    const { table } = props;
    return (
        <thead className="h-full">
            {table.getHeaderGroups()?.map((headerGroup) => (
                <tr key={headerGroup.id} className="h-full">
                    {headerGroup.headers.map((header) => {
                        return (
                            <th
                                key={header.id}
                                colSpan={header.colSpan}
                                className="px-2 whitespace-nowrap h-full border-b-[1px] border-b-black"
                            >
                                <div className="flex flex-col justify-between h-full min-h-[4.5em] ">
                                    <div>
                                        {flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                        <SortButton
                                            sortHandler={header.column.getToggleSortingHandler()}
                                            header={header}
                                        />
                                    </div>

                                    {header.column.getCanFilter() ? (
                                        <div>
                                            <Filter
                                                column={header.column}
                                                table={table}
                                            />
                                        </div>
                                    ) : null}
                                </div>
                            </th>
                        );
                    })}
                </tr>
            ))}
        </thead>
    );
}
export default TableHead;
