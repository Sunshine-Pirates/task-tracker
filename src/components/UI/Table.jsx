import { useTable } from "react-table";
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
import { userTable } from "../../utils/constants/userTable";

export const Table = () => {
  return (
    <StyledMainContainer>
      <TableContainer component={Paper}>
        Workspaces
        <MuiTable>
          <TableHead>
            <TableRow>
              <TableCell>№</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Lead</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userTable.map((row, index) => (
              <TableRow
                key={row.id}
                style={{
                  backgroundColor: index % 2 === 0 ? "#FFFFFF" : "#F3F3F3",
                }}
              >
                <TableCell>{row.number}</TableCell>
                <TableCell>{row.workspaceTitle}</TableCell>
                <TableCell>{row.lead}</TableCell>
                <TableCell>
                  <img
                    src={row.userIcon}
                    alt=""
                    style={{
                      width: "40px",
                      height: "40px",
                      objectFit: "cover",
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </MuiTable>
      </TableContainer>
    </StyledMainContainer>
  );
};

const StyledMainContainer = styled("div")(() => ({
  width: "100%",
  height: "100%",
  padding: "16px 40px 10px 40px",
}));
