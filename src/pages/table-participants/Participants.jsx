import { useMemo } from "react";
import { Table } from "../../components/UI/table/Table";
import { participantsData } from "../../utils/constants/participants";
import { useSelector } from "react-redux";
import { Icons } from "../../assets";
import { styled } from "@mui/material";

export const Participants = () => {
  const data = useMemo(() => participantsData, [participantsData]);
  const { userRole } = useSelector((state) => state.auth);
  const columns = useMemo(() => {
    return [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: () => (
          <DataStyled>
            <div>Email</div>
            <div>Role</div>
          </DataStyled>
        ),
        accessor: "email",
        Cell: ({ row }) => (
          <DataStyled>
            <div>{row.original.email}</div>
            {userRole === "ADMIN" ? (
              <StyledRightSide>
                <InnerRightSide>
                  {row.original.role} <Icons.ArrowDown />
                </InnerRightSide>
                <Icons.Delete />
              </StyledRightSide>
            ) : (
              <InnerRightSide>
                {row.original.role} <Icons.ArrowDown />
              </InnerRightSide>
            )}
          </DataStyled>
        ),
      },
    ];
  }, []);
  return (
    <>
      {userRole === "ADMIN" ? (
        <Table variant="viewadmin" data={data} columns={columns} />
      ) : userRole === "USER" ? (
        <Table data={data} columns={columns} variant="viewuser" />
      ) : null}
    </>
  );
};
const DataStyled = styled("div")(() => ({
  width: "100% !important",
  display: "flex !important",
  justifyContent: "space-between !important",
}));
const StyledRightSide = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "28px",
}));
const InnerRightSide = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "5px",
}));
