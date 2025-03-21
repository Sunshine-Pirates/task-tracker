import { useMemo, useState } from "react";
import { Table } from "../../components/UI/table/Table";
import { Icons } from "../../assets";
import { Checkbox } from "../../components/UI/checkbox/Checkbox";
import fake_data from "../../utils/constants/Mock_Data.json";
export const ResultTable = () => {
  const [stars, setStars] = useState(fake_data.map(() => false));

  const handleStarChange = (index) => {
    setStars((prevStars) =>
      prevStars.map((star, i) => (i === index ? !star : star))
    );
  };
  const data = useMemo(() => fake_data, []);
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
    <>
      <Table columns={columns} data={data} />
    </>
  );
};
