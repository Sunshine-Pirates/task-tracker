import { useMemo } from "react";
import { Table } from "../../components/UI/table/Table";
import { participantsData } from "../../utils/constants/participants";

export const Participants = () => {
  const data = useMemo(() => participantsData, [participantsData]);
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
      <Table variant="viewadmin" data={data} columns={columns} />
    </>
  );
};
