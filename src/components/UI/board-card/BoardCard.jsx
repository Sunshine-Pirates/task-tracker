import { styled } from "@mui/material";
import { title } from "../../../utils/constants/board-card";
import { Icons } from "../../../assets";
import { useState } from "react";
import { Modal } from "../modal/Modal";
import { CreateCardModal } from "./CreateCardModal";

const colorTexts = {
  "#61BD4F": "Сделано",
  "#EB5A46": "Срочно начать с этого",
  "#F2D600": "Обратите на это внимание",
  "#0079BF": "Хорошего всем настроения, друзья",
};

export const BoardCard = () => {
  const [visibleItem, setVisibleItem] = useState(null);
  const [openAddCardModal, setOpenCardModal] = useState(false);

  const handleOpenCard = () => {
    setOpenCardModal(true);
  };
  const hanldeCardClose = () => {
    setOpenCardModal(false);
  };

  const handleVisibleText = (id) => {
    setVisibleItem((prevId) => (prevId === id ? null : id));
  };

  return (
    <List>
      <Text>Title</Text>
      {title.length > 0 ? (
        title.map((item) => (
          <StyledItem key={item.id}>
            <Container onClick={() => handleVisibleText(item.id)}>
              {visibleItem === item.id ? (
                <StyledWrapperColors>
                  {item.priority.map((color, index) => (
                    <StyledLabel key={index} style={{ backgroundColor: color }}>
                      {colorTexts[color]}
                    </StyledLabel>
                  ))}
                </StyledWrapperColors>
              ) : (
                <>
                  {item.priority.map((color, index) => (
                    <StyledColors
                      key={index}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </>
              )}
            </Container>
            <div>
              {item.text}
              <StyledChecklistContainer>
                {item.сhecklist && <StyledChecklist>Checklist</StyledChecklist>}
              </StyledChecklistContainer>
            </div>
            <StyledContainerIcons
              style={{
                justifyContent:
                  item.month || item.list || item.message ? "start" : "end",
              }}
            >
              {item.month && (
                <StyledMonth>
                  <Icons.Month />
                  <span>2 month</span>
                </StyledMonth>
              )}
              <div style={{ display: "flex", gap: "13px" }}>
                <Wrapper>
                  {item.list && <Icons.ListIcon />}
                  {item.message && <Icons.Message />}
                </Wrapper>
                <StyledWrapper>
                  <StyledSection>
                    <Icons.UiAndKeyBoard />
                    <Number>1/5</Number>
                  </StyledSection>
                  <StyledSection>
                    <Icons.Peopleicon />
                    <Number>5</Number>
                  </StyledSection>
                </StyledWrapper>
              </div>
            </StyledContainerIcons>
          </StyledItem>
        ))
      ) : (
        <EmptyItem>Title</EmptyItem>
      )}
      <StyledText onClick={handleOpenCard}>+ Add a card</StyledText>
      <Modal isOpen={openAddCardModal} onClose={hanldeCardClose}>
        <CreateCardModal />
      </Modal>
    </List>
  );
};
const StyledChecklist = styled("div")(() => ({
  width: "76px",
  fontSize: "12px",
  color: "#F8F8F8",
  fontWeight: "500",
  backgroundColor: "#111111",
  padding: "4px 12px",
  borderRadius: "32px",
  cursor: "pointer",
}));

const StyledChecklistContainer = styled("div")(() => ({
  display: "flex",
  justifyContent: "end",
  paddingRight: "20px",
}));

const StyledWrapperColors = styled("div")(() => ({
  display: "flex",
  flexWrap: "wrap",
  gap: "8px",
}));

const StyledLabel = styled("div")(() => ({
  width: "fit-content",
  color: "#FFFFFF",
  fontSize: "12px",
  fontWeight: "500",
  borderRadius: "8px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "0px 10px",
}));

const StyledText = styled("p")(() => ({
  color: "#000000",
  fontWeight: "400",
  padding: "4px 0px 0px 8px",
  cursor: "pointer",
}));

const EmptyItem = styled("div")(() => ({
  width: "100%",
  height: "40px",
  borderRadius: "8px",
  padding: "8px 10px",
  background: "#FFFFFF",
  color: "#000000",
  cursor: "pointer",
}));

const List = styled("ul")(() => ({
  width: "280px",
  height: "fit-content",
  borderRadius: "8px",
  backgroundColor: "#9191911F",
  padding: "8px 8px 16px 8px",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
}));

const StyledItem = styled("li")(() => ({
  width: "264px",
  height: "fit-content",
  borderRadius: "4px",
  background: "#FFFFFF",
  padding: "10px 8px 8px 8px",
  display: "flex",
  flexDirection: "column",
  gap: "13px",
}));

const Text = styled("p")(() => ({
  fontWeight: "500",
  color: "#000000",
  paddingLeft: "16px",
}));

const StyledColors = styled("div")(() => ({
  width: "45px",
  height: "5px",
  borderRadius: "8px",
}));

const Container = styled("div")(() => ({
  display: "flex",
  justifyContent: "start",
  gap: "6px",
  cursor: "pointer",
}));

const StyledMonth = styled("div")(() => ({
  width: "91px",
  height: "23px",
  borderRadius: "8px",
  backgroundColor: "#F9DCB4",
  color: "#C7852C",
  fontSize: "14px",
  fontWeight: "500",
  display: "flex",
  gap: "4px",
  justifyContent: "center",
  alignItems: "center",
}));

const StyledContainerIcons = styled("div")(() => ({
  display: "flex",
  gap: "12px",
}));

const Number = styled("span")(() => ({
  fontSize: "14px",
  fontWeight: "500",
  color: "#919191",
}));

const Wrapper = styled("div")(() => ({
  display: "flex",
  gap: "13px",
}));

const StyledSection = styled("section")(() => ({
  display: "flex",
  gap: "4px",
}));

const StyledWrapper = styled("div")(() => ({
  display: "flex",
  justifyContent: "end",
  gap: "13px",
}));
