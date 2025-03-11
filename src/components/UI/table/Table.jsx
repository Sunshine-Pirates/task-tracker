import {
  Paper,
  styled,
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import { useTable } from "react-table";
import { Button } from "../Button";
import { useState } from "react";
import { Icons } from "../../../assets";

export const Table = ({ variant, columns, data, subTitle }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  const [role, setRole] = useState("");
  const [toggleSvg, setToggleSvg] = useState(false);

  const title =
    variant === "workspaceadmin"
      ? "Workspaces"
      : variant === "workspaceuser"
        ? "Workspaces"
        : variant === "viewadmin"
          ? "View all issues"
          : variant === "viewuser"
            ? "View all issues"
            : "Workspaces";

  return (
    <StyledTableContainer sx={{ tableLayout: "fixed" }} component={Paper}>
      <TitleWrapper>
        {variant === "workspaceadmin" ? (
          <>
            <Title>{title}</Title>
            <Button
              variant={"contained"}
              style={{ width: "77px", height: "34px" }}
            >
              Create
            </Button>
          </>
        ) : variant === "workspaceuser" ? (
          <Title>{title}</Title>
        ) : variant === "viewadmin" ? (
          <StyledTopContainer>
            <div className="first-wrapper">
              <div className="second-wrapper">
                <Title>{title}</Title>
                <FormControlStyle
                  variant="outlined"
                  sx={{
                    m: 1,
                    minWidth: 120,
                    margin: "0",
                  }}
                  size="small"
                >
                  <InputLabel id="demo-select-small-label">Role</InputLabel>
                  <SelectStyled
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={role}
                    label="Role"
                    onChange={(e) => setRole(e.target.value)}
                    IconComponent={toggleSvg ? Icons.ArrowUp : Icons.ArrowDown}
                    onOpen={() => setToggleSvg(true)}
                    onClose={() => setToggleSvg(false)}
                  >
                    <MenuItem value={"All"}>All</MenuItem>
                    <MenuItem value={"Admin"}>Admin</MenuItem>
                    <MenuItem value={"Member"}>Member</MenuItem>
                  </SelectStyled>
                </FormControlStyle>
              </div>
              <Button
                variant={"contained"}
                style={{ width: "77px", height: "34px" }}
              >
                Create
              </Button>
            </div>

            <TotalIssues>
              Total: <TotalCount>{data.length}</TotalCount>
            </TotalIssues>
          </StyledTopContainer>
        ) : variant === "viewuser" ? (
          <>
            <Title>{title}</Title>
            <TotalIssues>
              Total: <TotalCount>{data.length}</TotalCount>
            </TotalIssues>
          </>
        ) : (
          <Title>{title}</Title>
        )}
      </TitleWrapper>

      <MuiTable stickyHeader {...getTableProps()} style={{ width: "100%" }}>
        <StyledSubTitle>{subTitle}</StyledSubTitle>

        <TableHead>
          {headerGroups.map((headerGroup) => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <HeaderStyledTableCell {...column.getHeaderProps()}>
                  {column.render("Header")}
                </HeaderStyledTableCell>
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
                    sx={{
                      verticalAlign: "top",
                      textAlign: "center",
                    }}
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
  "& table": {
    width: "100%",
  },
  "& td": {
    padding: "10px",
    textAlign: " start",
    verticalAlign: " middle",
  },
}));
const StyledTopContainer = styled("div")(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  "& .first-wrapper": {
    width: "100%",
    justifyContent: "space-between",
    display: "flex",
    alignItems: "center",
  },
  "& .second-wrapper": {
    display: "flex",
    alignItems: "center",
    gap: "30px",
  },
}));
const FormControlStyle = styled(FormControl)(() => ({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#D0D0D0",
      borderWidth: "1px",
      borderRadius: "8px",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#0079BF",
      borderWidth: "1px",
    },
  },
}));
const SelectStyled = styled(Select)(() => ({
  "& .MuiSelect-icon": {
    right: "15px",
    top: "50%",
    transform: "translateY(-50%)",
  },
}));
const StyledSubTitle = styled("p")(() => ({
  color: "#919191",
  fontWeight: "500",
  margin: "16px",
}));
const HeaderStyledTableCell = styled(TableCell)(() => ({
  "& td": {
    textAlign: "start",
  },
}));
const TitleWrapper = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "16px 20px",
}));

const Title = styled("h2")(() => ({
  fontSize: "20px",
  fontWeight: "500",
}));

const TotalIssues = styled("div")(() => ({
  fontSize: "16px",
  color: "#919191",
  display: "flex",
  alignItems: "center",
}));

const TotalCount = styled("span")(() => ({
  background: "#B2B2B2",
  borderRadius: "16px",
  padding: "0px 5px",
  marginLeft: "6px",
  fontWeight: "400",
  color: "#ffffff",
}));

const StyledTableBody = styled(TableBody)(() => ({
  "& td": {
    padding: "0px 20px",
  },
  "& tr": {
    height: "54px",
  },
}));

const StyledTableBodyCell = styled(TableCell)(() => ({
  fontSize: "16px",
  color: "#000000",
  textAlign: "start",
  "& > div": {
    width: "100%",
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
  },
}));
