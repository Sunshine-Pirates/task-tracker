import { Avatar, styled } from "@mui/material";
import { Icons } from "../../../assets";
import { BoardCard } from "../../../components/UI/board-card/BoardCard";
import { members } from "../../../utils/constants/members";
import { useState } from "react";
import { FilterModal } from "../../../components/UI/FilterModal";
import { Modal } from "../../../components/UI/modal/Modal";
import { InviteModal } from "./InviteModal";
import { AddAColumn } from "../AddAColumn";
import { CreateNewTitle } from "../../../components/UI/board-card/CreateNewTitle";

export const InnerPage = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const [openInvite, setOpenInvite] = useState(false);
  const [showAddColumn, setShowAddColumn] = useState(false);
  const [columns, setColumns] = useState([]);
  const [openAddCardModal, setOpenCardModal] = useState(false);

  const handleOpenCard = () => {
    setOpenCardModal(true);
  };
  const hanldeCardClose = () => {
    setOpenCardModal(false);
  };
  const handleOpenInvite = () => {
    setOpenInvite(true);
  };
  const handleOpenFilter = () => {
    setOpenFilter(true);
  };
  const handleCloseFilter = () => {
    setOpenFilter(false);
  };
  const handleToggleAddColumn = () => {
    setShowAddColumn((prev) => !prev);
  };
  const handleAddColumn = (columnName) => {
    if (columnName.trim()) {
      setColumns([...columns, columnName]);
      setShowAddColumn(false);
    }
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
            Columns: <span>{columns.length}</span>
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
      <StyledContainerColumn>
        <BoardCard />
        {columns.map((column, index) => (
          <NewAddTitle>
            <StyledWrapperr>
              <ContainerNewTitle>
                <Title>Title</Title>
                <StyledContainerIconss>
                  <Iconss />
                  <Iconss />
                  <Iconss />
                </StyledContainerIconss>
              </ContainerNewTitle>
              <StyledContainerText>
                <p key={index}>{column}</p>
              </StyledContainerText>
            </StyledWrapperr>

            <StyledText onClick={handleOpenCard}>+ Add a card</StyledText>
            <Modal isOpen={openAddCardModal} onClose={hanldeCardClose}>
              <CreateNewTitle />
            </Modal>
          </NewAddTitle>
        ))}
        {!showAddColumn ? (
          <StyledContainerr onClick={handleToggleAddColumn}>
            + Add a column
          </StyledContainerr>
        ) : (
          <AddAColumn
            onClose={handleToggleAddColumn}
            onAddColumn={handleAddColumn}
          />
        )}
      </StyledContainerColumn>
    </Container>
  );
};
const StyledWrapperr = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "11px",
}));

const StyledText = styled("p")(() => ({
  color: "#000000",
  fontWeight: "400",
  padding: "4px 0px 0px 8px",
  cursor: "pointer",
}));

const StyledContainerText = styled("div")(() => ({
  width: "264px",
  height: "fit-content",
  padding: "8px 10px",
  background: "#FFFFFF",
  borderRadius: "4px",
  marginRight: "8px",
}));
const ContainerNewTitle = styled("div")(() => ({
  width: "254px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));
const Title = styled("p")(() => ({
  fontWeight: "500",
  color: "#000000",
  paddingLeft: "8px",
}));

const NewAddTitle = styled("div")(() => ({
  width: "280px",
  height: "fit-content",
  borderRadius: "8px",
  backgroundColor: "#9191911F",
  padding: "8px 8px 16px 8px",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
}));
const StyledContainerIconss = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-around",
  width: "20px",
  cursor: "pointer",
}));
const Iconss = styled("section")(() => ({
  width: "4.5px",
  height: "4.5px",
  backgroundColor: "#111111",
  borderRadius: "50%",
}));
const StyledContainerr = styled("div")(() => ({
  width: "280px",
  height: "44px",
  borderRadius: "8px",
  backgroundColor: "#9191911C",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
}));
const StyledContainerColumn = styled("div")(() => ({
  display: "flex",
  flexWrap: "wrap",
  gap: "8px",
}));
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
