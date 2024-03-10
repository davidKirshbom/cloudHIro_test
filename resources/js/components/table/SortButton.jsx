function SortButton({ header, sortHandler }) {
    return (
        <span
            onClick={header.column.getToggleSortingHandler()}
            className="hover:cursor-pointer"
        >
            {header.column.getIsSorted() ? (
                header.column.getIsSorted() === "asc" ? (
                    <i className="bi bi-arrow-up ml-1"></i>
                ) : (
                    <i className="bi bi-arrow-down ml-1"></i>
                )
            ) : (
                <i className="bi bi-arrow-down-up ml-1"></i>
            )}
        </span>
    );
}
export default SortButton;
