// import { AppRoutes } from "./routes/AppRoutes";

import { useMemo, useState } from "react";
import { userTable } from "./utils/constants/userTable";
import { Icons } from "./assets";
import { Checkbox } from "./components/UI/checkbox/Checkbox";
import { Table } from "./components/UI/table/Table";

export const App = () => {
  const [stars, setStars] = useState(userTable.map(() => false));

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
        headerStyle: { textAlign: "start" },
        Cell: ({ value }) => (
          <div
            style={{ display: "flex", justifyContent: "start", width: "100%" }}
          >
            {value}
          </div>
        ),
      },
      {
        Header: "Name",
        accessor: "workspaceTitle",
        headerStyle: { textAlign: "start" },
        Cell: ({ value }) => (
          <div
            style={{ display: "flex", justifyContent: "start", width: "100%" }}
          >
            {value}
          </div>
        ),
      },
      {
        Header: () => (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <span>Lead</span>
            <span>Action</span>
          </div>
        ),
        accessor: "leadAndAction",
        headerStyle: { textAlign: "start" },
        Cell: ({ row }) => (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={row.original.userIcon}
                alt="User Icon"
                style={{
                  width: "34px",
                  height: "34px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  marginRight: "8px",
                }}
              />
              <span>{row.original.lead}</span>
            </div>
            <Checkbox
              checked={stars[row.index]}
              checkedIcon={
                <Icons.StarBlue style={{ width: "22px", height: "22px" }} />
              }
              uncheckedIcon={
                <Icons.StarLine style={{ width: "22px", height: "22px" }} />
              }
              onChange={() => handleStarChange(row.index)}
            />
          </div>
        ),
      },
    ],
    [stars]
  );

  return (
    <div>
      <Table
        variant={"viewadmin"}
        data={data}
        columns={columns}
        subTitle={"Guest workspace"}
      />
    </div>
  );
};
