import { useMemo, useState } from "react";
import { Icons } from "../../assets";
import { Checkbox } from "../../components/UI/checkbox/Checkbox";
import { Table } from "../../components/UI/table/Table";
import { userTable } from "../../utils/constants/userTable";
import { CreateWorkspaceModal } from "../../components/UI/CreateNewWorkspace";
import { styled } from "@mui/material";

export const AdminWorkspaces = () => {
  const [currentData, setCurrentData] = useState(userTable);
  const [stars, setStars] = useState(currentData.map(() => false));
  const [openWorkspaceModal, setOpenWorkspaceModal] = useState(false);
  const handleOpenNewWorkspace = () => {
    setOpenWorkspaceModal((prev) => !prev);
  };
  const handleStarChange = (index) => {
    setStars((prevStars) =>
      prevStars.map((star, i) => (i === index ? !star : star))
    );
  };
  const handleShowNewWorkspaces = (newData) => {
    setCurrentData([...currentData, newData]);
    setStars((prevStars) => [...prevStars, false]);
  };
  const data = useMemo(() => currentData, [currentData]);

  const columns = useMemo(
    () => [
      {
        Header: () => (
          <LeftBlockStyled>
            <div>№</div>
            <div>Name</div>
          </LeftBlockStyled>
        ),
        accessor: "number",
        Cell: ({ row }) => (
          <LeftBlockStyled>
            <div>{row.original.number}</div>
            <StyledTitle>{row.original.workspaceTitle}</StyledTitle>
          </LeftBlockStyled>
        ),
      },
      {
        Header: () => (
          <RightBlockStyled>
            <div>Lead</div>
            <div>Action</div>
          </RightBlockStyled>
        ),
        accessor: "lead",
        Cell: ({ row }) => {
          const index = row.index;

          return (
            <RightBlockStyled>
              <RightBlockInner>
                <ProfileAvatar src={row.original.userIcon} alt="User Icon" />
                <span>{row.original.lead}</span>
              </RightBlockInner>
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
            </RightBlockStyled>
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
        onShow={handleShowNewWorkspaces}
        arrayNumber={currentData.length}
      />
    </div>
  );
};
const LeftBlockStyled = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "60px",
}));
const StyledTitle = styled("div")(() => ({
  textDecoration: "underline",
  color: "#0073DE",
}));
const RightBlockStyled = styled("div")(() => ({
  display: "flex !important",
  alignItems: "center !important",
  justifyContent: "space-between !important",
}));
const RightBlockInner = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "8px",
}));
const ProfileAvatar = styled("img")(() => ({
  width: "34px",
  height: "34px",
  borderRadius: "50%",
  objectFit: "cover",
}));
