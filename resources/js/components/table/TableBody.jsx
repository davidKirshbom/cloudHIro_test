import { flexRender } from "@tanstack/react-table";

function TableBody(props) {
    const { table } = props;
    return (
        <tbody>
            {table.getRowModel().rows.map((row) => (
                <tr key={row.id} className="border-b-[1px] border-b-black">
                    {row.getVisibleCells().map((cell) => (
                        <td key={cell.id} className="px-2 py-4">
                            {flexRender(
                                cell.column.columnDef.cell,
                                cell.getContext()
                            )}
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
    );
}
export default TableBody;
