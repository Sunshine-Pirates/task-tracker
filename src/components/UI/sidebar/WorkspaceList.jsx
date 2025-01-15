import { IconButton, styled } from "@mui/material";
import { workspaces } from "../../../utils/constants/workspaces";
import Avatar from "@mui/material/Avatar";
import { Icons } from "../../../assets";
import { useState } from "react";

export const WorkspaceList = () => {
  const newValue = [
    {
      id: 1,
      icon: <Icons.Collapse />,
      text: "Boards",
      plusIcon: false,
    },
    {
      id: 2,
      icon: <Icons.Members />,
      text: "Participants",
      plusIcon: true,
    },
    {
      id: 3,
      icon: <Icons.Settings />,
      text: "Setting",
      plusIcon: false,
    },
  ];

  const [activeWorkspace, setActiveWorkspace] = useState(null);

  const handleToggle = (workspaceId) => {
    setActiveWorkspace((prev) => (prev === workspaceId ? null : workspaceId));
  };

  return (
    <StyledWrapperList>
      <ContainerList>
        <section>
          <Icons.GraphicIcon />
          <p>Workspaces</p>
        </section>
        <Icons.PlusGray />
      </ContainerList>

      {workspaces.map((workspace) => (
        <div key={workspace.id}>
          <ContainerList>
            <section>
              <Avatar sx={{ bgcolor: "#2CB107", width: 27, height: 27 }}>
                {workspace.icon}
              </Avatar>
              <p>{workspace.text}</p>
            </section>
            <div onClick={() => handleToggle(workspace.id)}>
              {activeWorkspace === workspace.id ? <Icons.Up /> : <Icons.Down />}
            </div>
          </ContainerList>

          {activeWorkspace === workspace.id && (
            <>
              {newValue.map((item) => (
                <StyledNewValueList key={item.id} disablePadding>
                  <section>
                    <IconButton>{item.icon}</IconButton>
                    <p>{item.text}</p>
                  </section>
                  <div>{item.plusIcon && <Icons.PlusGray />}</div>
                </StyledNewValueList>
              ))}
            </>
          )}
        </div>
      ))}

      <StyledShow>
        <Icons.Down />
        <p style={{ color: "#909090" }}>Show more</p>
      </StyledShow>
    </StyledWrapperList>
  );
};

const ContainerList = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  "& section": {
    display: "flex",
    gap: "8px",
  },
}));

const StyledWrapperList = styled("div")(() => ({
  width: "170px",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  margin: "0 auto",
  cursor: "pointer",
  paddingTop: "21px",
}));

const StyledShow = styled("div")(() => ({
  display: "flex",
  gap: "12px",
}));

const StyledNewValueList = styled("div")(() => ({
  width: "135px",
  display: "flex",
  alignItems: "center",
  marginLeft: "30px",
  gap: "14px",
  "& section": {
    display: "flex",
    alignItems: "center",

    "& p": {
      color: "#919191",
      fontSize: "14px",
    },
  },
}));
