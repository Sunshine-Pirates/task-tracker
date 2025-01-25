import { styled } from "@mui/material";
import ProfileBanner from "../../assets/images/profile-banner.png";
import { useState } from "react";
import { ProfileForm } from "./ProfileForm";
import { ProjectsList } from "./ProjectsList";
import { Icons } from "../../assets";
import Profilee from "../../assets/images/Ellipse 11.png";

export const Profile = () => {
  const [openProfile, setOpenProfile] = useState(false);
  const [profileImage, setProfileImage] = useState(Profilee);

  const handleOpenProfile = (e) => {
    e.stopPropagation();
    setOpenProfile(true);
  };

  const handleClose = () => {
    setOpenProfile(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setProfileImage(imageURL);
    }
  };
  const handleRemoveImage = () => {
    setProfileImage(Profilee);
    setOpenProfile(false);
  };

  return (
    <StlyedContainer>
      <div>
        <StyledProfile onClick={handleClose}>
          <StyledImageProfile>
            <p>Workspaces \</p> <p>Profile</p>
          </StyledImageProfile>
          <StyledSection>
            <div>
              <img src={profileImage} alt="Profile" />
              <StyledIcon onClick={handleOpenProfile}>
                <Icons.Edit />
              </StyledIcon>
            </div>
            <p>Riko Rikovich</p>
          </StyledSection>
          {openProfile ? (
            <StyledEdit>
              <label>
                <input
                  type="file"
                  id="upload-photo"
                  accept="image/*"
                  onChange={handleImageChange}
                  style={{ display: "none" }}
                />
                <p style={{ cursor: "pointer" }}>Change profile photo</p>
              </label>
              <p onClick={handleRemoveImage}>Remove</p>
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

const StlyedContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "94px",
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
    borderRadius: "50%",
    objectFit: "cover",
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
const StyledContainerForm = styled("div")(() => ({
  paddingLeft: "100px",
  display: "flex",
  flexDirection: "column",
  gap: "32px",
}));
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
