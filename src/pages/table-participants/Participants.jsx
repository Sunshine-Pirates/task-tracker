import { useMemo } from "react";
import { Table } from "../../components/UI/table/Table";
import { participantsData } from "../../utils/constants/participants";
import { useSelector } from "react-redux";

export const Participants = () => {
  const data = useMemo(() => participantsData, [participantsData]);
  const { userRole } = useSelector((state) => state.auth);
  const columns = useMemo(() => [
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Email",
      accessor: "email",
    },
    {
      Header: "Role",
      accessor: "role",
    },
  ]);
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
