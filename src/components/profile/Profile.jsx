import { styled } from "@mui/material";
import ProfileBanner from "../../assets/images/profile-banner.png";
import Profilee from "../../assets/images/Ellipse 11.png";
import { Icons } from "../../assets";
import { Header } from "../../layout/Header";
import { useState } from "react";
import { ProfileForm } from "./ProfileForm";
import { ProjectsList } from "./ProjectsList";

export const Profile = () => {
  const [openProfile, setOpenProfile] = useState(false);
  const handleOpenProfile = (e) => {
    e.stopPropagation();
    setOpenProfile(true);
  };
  const handleClose = () => {
    setOpenProfile(false);
  };
  return (
    <StlyedContainer>
      <div>
        <Header />
        <StyledProfile onClick={handleClose}>
          <StyledImageProfile>
            <p>Workspaces \</p> <p>Profile</p>
          </StyledImageProfile>
          <StyledSection>
            <div>
              <img src={Profilee} alt="Profilee" />
              <StyledIcon onClick={handleOpenProfile}>
                <Icons.Edit />
              </StyledIcon>
            </div>
            <p>Riko Rikovich</p>
          </StyledSection>
          {openProfile ? (
            <StyledEdit>
              <p>Change profile photo</p>
              <p>Remove</p>
            </StyledEdit>
          ) : null}
        </StyledProfile>
      </div>
      <StyledContainerForm>
        <ProfileForm />
        <StyledItem>
          <p>Involved in projects </p>
          <StyledText>8</StyledText>
        </StyledItem>
        <ProjectsList />
      </StyledContainerForm>
    </StlyedContainer>
  );
};
const StyledItem = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "11px",
  "& p": {
    fontWeight: "500",
    color: "#111111",
  },
}));
const StyledText = styled("span")(() => ({
  width: "19px",
  height: "18px",
  borderRadius: "16px",
  backgroundColor: "#B2B2B2",
  color: "white",
  fontSize: "14px",
  padding: "0 5px",
}));
const StlyedContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "94px",
}));
const StyledContainerForm = styled("div")(() => ({
  width: "746x",
  paddingLeft: "100px",
  display: "flex",
  flexDirection: "column",
  gap: "32px",
}));
const StyledProfile = styled("div")(() => ({
  padding: "16px 40px",
  position: "relative",
}));
const StyledImageProfile = styled("div")(() => ({
  backgroundImage: `url(${ProfileBanner})`,
  width: "100%",
  height: "185px",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  borderTopRightRadius: "8px",
  borderTopLeftRadius: "8px",
  color: "#FFFFFF",
  display: "flex",
  gap: "4px",
  padding: "20px 0 0 20px",
}));
const StyledSection = styled("section")(() => ({
  position: "absolute",
  top: "131px",
  left: "100px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "& img": {
    width: "141px",
    height: "auto",
  },
  "& p": {
    color: "#0D0D0D",
    fontSize: "20px",
    fontWeight: "500",
    paddingTop: "16px",
    paddingLeft: "20px",
  },
}));
const StyledIcon = styled("section")(() => ({
  position: "relative",
  fontSize: "20px",
  cursor: "pointer",
  left: "100px",
  bottom: "44px",
}));
const StyledEdit = styled("div")(() => ({
  width: "207px",
  height: "86px",
  backgroundColor: "#ffff",
  borderRadius: "12px",
  zIndex: 100,
  position: "absolute",
  top: "14.500rem",
  left: "12rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "start",
  gap: "12px",
  padding: "16px 24px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1), 0 2px 12px rgba(0, 0, 0, 0.07)",
  cursor: "pointer",
}));
