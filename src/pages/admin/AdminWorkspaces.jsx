import { useMemo, useState } from "react";
import { Icons } from "../../assets";
import { Checkbox } from "../../components/UI/checkbox/Checkbox";
import { Table } from "../../components/UI/table/Table";
import { userTable } from "../../utils/constants/userTable";
import { CreateWorkspaceModal } from "../../components/UI/CreateNewWorkspace";

export const AdminWorkspaces = () => {
  const [stars, setStars] = useState(userTable.map(() => false));
  const [openWorkspaceModal, setOpenWorkspaceModal] = useState(false);
  const handleOpenNewWorkspace = () => {
    setOpenWorkspaceModal((prev) => !prev);
  };
  const handleStarChange = (index) => {
    setStars((prevStars) =>
      prevStars.map((star, i) => (i === index ? !star : star))
    );
  };
  const data = useMemo(() => userTable, []);
  const columns = useMemo(
    () => [
      {
        Header: "№",
        accessor: "number",
      },
      {
        Header: "Name",
        accessor: "workspaceTitle",
      },
      {
        Header: "Lead",
        accessor: "userIcon",

        Cell: ({ row }) => (
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <img
              src={row.original.userIcon}
              alt="User Icon"
              style={{
                width: "34px",
                height: "34px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
            <span>{row.original.lead}</span>
          </div>
        ),
      },
      {
        Header: "Action",
        accessor: "action",
        Cell: ({ row }) => {
          const index = row.index;
          return (
            <Checkbox
              checked={stars[index]}
              checkedIcon={
                <Icons.StarBlue style={{ width: "22px", height: "22px" }} />
              }
              uncheckedIcon={
                <Icons.StarLine style={{ width: "22px", height: "22px" }} />
              }
              onChange={() => handleStarChange(index)}
            />
          );
        },
      },
    ],
    [stars]
  );
  return (
    <div>
      <Table
        variant="workspaceadmin"
        data={data}
        columns={columns}
        onOpen={handleOpenNewWorkspace}
      />
      <CreateWorkspaceModal
        open={openWorkspaceModal}
        onClose={handleOpenNewWorkspace}
      />
    </div>
  );
};
