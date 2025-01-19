import {
  Paper,
  styled,
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useTable } from "react-table";

export const Table = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  return (
    <StyledTableContainer component={Paper}>
      <caption>Workspaces</caption>
      <MuiTable stickyHeader {...getTableProps()} style={{ width: "100%" }}>
        <TableRow>
          <TopStyledTableCellGray colSpan={columns.length}>
            Guest workspace
          </TopStyledTableCellGray>
        </TableRow>
        <TableHead>
          {headerGroups.map((headerGroup) => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <TableCell
                  {...column.getHeaderProps()}
                  style={{ width: column.width, fontWeight: "500" }}
                >
                  {column.render("Header")}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <StyledTableBody {...getTableBodyProps()}>
          {rows.map((row, index) => {
            prepareRow(row);
            return (
              <TableRow
                {...row.getRowProps()}
                style={{
                  backgroundColor: index % 2 === 0 ? "#FFFFFF" : "#F3F3F3",
                  border: "none",
                }}
              >
                {row.cells.map((cell) => (
                  <StyledTableBodyCell
                    {...cell.getCellProps()}
                    isNameColumn={cell.column.Header === "Name"}
                    isLeadColumn={cell.column.Header === "Lead"}
                    isActionColumn={cell.column.Header === "Action"}
                  >
                    {cell.render("Cell")}
                  </StyledTableBodyCell>
                ))}
              </TableRow>
            );
          })}
        </StyledTableBody>
      </MuiTable>
    </StyledTableContainer>
  );
};
const StyledTableContainer = styled(TableContainer)(() => ({
  maxWidth: "calc(100% - 80px)",
  maxHeight: "calc(100vh - 10px)",
  margin: "16px 40px 10px 40px",
  overflow: "auto",
  border: "none",
  borderRadius: "8px",
  "& caption": {
    fontSize: "20px",
    fontWeight: "500",
    LineWeight: "25.14px",
    color: "#0D0D0D",
    margin: "20px",
  },
}));
const StyledTableBody = styled(TableBody)(() => ({
  "& td": {
    padding: "0px 20px 0px 20px",
  },
  "& tr": {
    height: "54px",
  },
}));
const TopStyledTableCellGray = styled(TableCell)(() => ({
  fontSize: "16px",
  fontWeight: 500,
  color: "#919191",
  border: "none",
}));
const StyledTableBodyCell = styled(TableCell)(
  ({ isNameColumn, isLeadColumn, isActionColumn }) => ({
    border: "none",
    fontSize: "16px",
    color: isNameColumn ? "#0073DE" : "#000000",
    textDecoration: isNameColumn ? "underline" : "none",
    textDecorationThickness: "1.5px",
    textUnderlineOffset: "4px",
    width: isNameColumn
      ? "60%"
      : isLeadColumn
        ? "30%"
        : isActionColumn
          ? "5%"
          : "5.5%",
  })
);
