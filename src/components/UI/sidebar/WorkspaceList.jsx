import { IconButton, styled } from "@mui/material";
import { workspaces } from "../../../utils/constants/workspaces";
import Avatar from "@mui/material/Avatar";
import { Icons } from "../../../assets";
import { useState } from "react";

export const WorkspaceList = ({
  isExpanded,
  handleShowToggle,
  visibleWorkspaces,
}) => {
  const [activeWorkspace, setActiveWorkspace] = useState(null);

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

  const handleToggle = (workspaceId) => {
    setActiveWorkspace((prev) => (prev === workspaceId ? null : workspaceId));
  };

  return (
    <StyledWrapperList>
      <StyledWorkspaces>
        <section>
          <Icons.GraphicIcon />
          <p>Workspaces</p>
        </section>
        <Icons.PlusGray />
      </StyledWorkspaces>

      {visibleWorkspaces.map((workspace) => (
        <div key={workspace.id}>
          <ContainerList>
            <section>
              <Avatar sx={{ bgcolor: "#2CB107", width: 27, height: 27 }}>
                {workspace.text.charAt(0).toUpperCase()}
              </Avatar>
              <p>{workspace.text}</p>
            </section>
            <article onClick={() => handleToggle(workspace.id)}>
              {activeWorkspace === workspace.id ? <Icons.Up /> : <Icons.Down />}
            </article>
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

      {workspaces.length > 6 && (
        <StyledShow onClick={handleShowToggle}>
          {isExpanded ? (
            <IconButton>
              <Icons.Up />
            </IconButton>
          ) : (
            <IconButton>
              <Icons.Down />
            </IconButton>
          )}
          <p style={{ color: "#909090" }}>
            {isExpanded ? "Show less" : "Show more"}
          </p>
        </StyledShow>
      )}
    </StyledWrapperList>
  );
};
const StyledWorkspaces = styled("div")(() => ({
  width: "178px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  "& section": {
    display: "flex",
    gap: "0.5rem",
  },
}));
const ContainerList = styled("div")(() => ({
  width: "190px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderTopRightRadius: "24px",
  borderBottomRightRadius: "24px",
  paddingRight: "12px",
  paddingTop: "3px",
  paddingBottom: "3px",

  "& section": {
    display: "flex",
    gap: "0.5rem",
    alignItems: "center",
  },
  "& article": {
    paddingTop: "4px",
  },
  "&:hover": {
    background: "#3A68831A",
    transition: "background-color 0.3s ease",
  },
}));

const StyledWrapperList = styled("div")(() => ({
  width: "180px",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  margin: "0 auto",
  cursor: "pointer",
  paddingTop: "1.3125rem",
}));

const StyledShow = styled("div")(() => ({
  width: "186px",
  display: "flex",
  gap: "0.75rem",
  justifyContent: "start",
  alignItems: "center",
  borderTopRightRadius: "24px",
  borderBottomRightRadius: "24px",
  "&:hover": {
    background: "#3A68831A",
    transition: "background-color 0.3s ease",
  },
}));

const StyledNewValueList = styled("div")(() => ({
  width: "154px",
  display: "flex",
  alignItems: "center",
  marginLeft: "1.875rem",
  gap: "14px",
  borderTopRightRadius: "24px",
  borderBottomRightRadius: "24px",
  "& section": {
    display: "flex",
    alignItems: "center",

    "& p": {
      color: "#919191",
      fontSize: "0.875rem",
    },
  },
  "& div": {
    paddingTop: "4px",
  },
  "&:hover": {
    background: "#3A68831A",
    transition: "background-color 0.3s ease",
  },
}));
