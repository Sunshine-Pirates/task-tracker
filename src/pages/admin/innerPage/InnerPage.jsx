import { Avatar, styled } from "@mui/material";
import { Icons } from "../../../assets";
import { BoardCard } from "../../../components/UI/board-card/BoardCard";
import { members } from "../../../utils/constants/members";
import { useState } from "react";
import { FilterModal } from "../../../components/UI/FilterModal";
import { Modal } from "../../../components/UI/modal/Modal";
import { InviteModal } from "./InviteModal";

export const InnerPage = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const [openInvite, setOpenInvite] = useState(false);
  const handleOpenInvite = () => {
    setOpenInvite(true);
  };
  const handleOpenFilter = () => {
    setOpenFilter(true);
  };
  const handleCloseFilter = () => {
    setOpenFilter(false);
  };
  const MAX_VISIBLE = 8;
  return (
    <Container>
      <Wrapper>
        <div>
          <StyledContainer>
            <Icons.Editt />
            <Text>Title</Text>
          </StyledContainer>
          <StyledTitle>
            Columns: <span>24</span>
          </StyledTitle>
        </div>
        <StyledHeader>
          <Members>
            {members.slice(0, MAX_VISIBLE).map((item, index) => (
              <ImageWrapper key={item.id} index={index}>
                <StyledImage src={item.image} alt={item.fullName} />
              </ImageWrapper>
            ))}
            {members.length > MAX_VISIBLE && (
              <StyledAvatar>+{members.length - MAX_VISIBLE}</StyledAvatar>
            )}
          </Members>
          <StyledIconsContainer>
            <StyledInviteContainer onClick={handleOpenInvite}>
              <StyledInvite>Invite </StyledInvite>
              <StyledIcon>
                <Icons.PlusWhite />
              </StyledIcon>
            </StyledInviteContainer>
            {openInvite && (
              <Modal isOpen={openInvite} onClose={() => setOpenInvite(false)}>
                <InviteModal />
              </Modal>
            )}
            <StyledIcons>
              <Icons.StarBluee />

              <StyledFilterContainer onClick={handleOpenFilter}>
                <Icons.Frame />
                <StyledFilter>
                  Filter <span>(2)</span>
                </StyledFilter>
              </StyledFilterContainer>
              {openFilter && (
                <FilterModal handleCloseFilter={handleCloseFilter} />
              )}
              <StyledContainerMenu>
                <Icons.BoardBlue />
                <p>Menu</p>
              </StyledContainerMenu>
            </StyledIcons>
          </StyledIconsContainer>
        </StyledHeader>
      </Wrapper>
      <BoardCard />
    </Container>
  );
};
const StyledContainerMenu = styled("div")(() => ({
  display: "flex",
  gap: "6px",
  padding: "8px 16px",
  borderRadius: "24px",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#E9E9E9",
  },
}));
const StyledFilterContainer = styled("div")(() => ({
  padding: "8px 16px",
  borderRadius: "24px",
  display: "flex",
  cursor: "pointer",
  gap: "6px",
  "&:hover": {
    backgroundColor: "#E9E9E9",
  },
}));
const StyledFilter = styled("div")(() => ({
  display: "flex",
  gap: "4px",
}));
const StyledIcons = styled("div")(() => ({
  width: "55px",
  display: "flex",
  alignItems: "center",
  gap: "8px",
  fontWeight: "500",
  color: "#438AB4",
}));
const StyledIconsContainer = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "16px",
}));

const StyledHeader = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "254px",
}));

const StyledInviteContainer = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "4px",
  cursor: "pointer",
}));
const StyledIcon = styled("div")(() => ({
  width: "24px",
  height: "24px",
  borderRadius: "50%",
  backgroundColor: "#0079BF",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
}));

const StyledInvite = styled("p")(() => ({
  color: "#0079BF",
  fontWeight: "500",
}));

const Wrapper = styled("div")(() => ({
  display: "flex",
  gap: "444px",
}));

const Members = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  position: "relative",
  height: "34px",
}));
const ImageWrapper = styled("div")(({ index }) => ({
  position: "absolute",
  left: `${index * 26}px`,
}));

const StyledImage = styled("img")(() => ({
  width: "34px",
  height: "34px",
  borderRadius: "50%",
  border: "2px solid white",
  cursor: "pointer",
}));
const StyledAvatar = styled(Avatar)(() => ({
  width: "36px",
  height: "36px",
  fontSize: "14px",
  backgroundColor: "#86A1B1",
  color: "#FFFFFF",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "2px solid white",
  position: "absolute",
  left: `${members.length * 10.5}px`,
  marginBottom: "6px",
  cursor: "pointer",
}));
const Container = styled("div")(() => ({
  width: "1000px",
  flexGrow: 1,
  height: "fit-content",
  display: "flex",
  flexDirection: "column",
  gap: "18px",
  padding: "25px 30px 30px 16px",
}));
const StyledContainer = styled("div")(() => ({
  display: "flex",
  gap: "8px",
}));

const Text = styled("p")(() => ({
  color: "#0D0D0D",
  fontWeight: "500",
  fontSize: "20px",
}));

const StyledTitle = styled("p")(() => ({
  fontWeight: "400",
  color: "#919191",
  "& span": {
    width: "26px",
    height: "18px",
    borderRadius: "16px",
    backgroundColor: "#B2B2B2",
    color: "#FFFFFF",
    fontSize: "14px",
    padding: "2px 4px",
  },
}));
