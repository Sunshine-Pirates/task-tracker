import { styled } from "@mui/material";
import { useState } from "react";
import { Button } from "../Button";

export const UpdateModal = ({ comment, comments, setComments, onClose }) => {
  const [updatedText, setUpdatedText] = useState(comment?.comment || "");

  const handleSave = () => {
    setComments(
      comments.map((item) =>
        item.id === comment.id ? { ...item, comment: updatedText } : item
      )
    );
    onClose();
  };

  return (
    <Wrapper>
      <StyledSection>
        <StyledImage src={comment?.img} alt={comment?.name} />
        <StyledName>{comment?.name}</StyledName>
      </StyledSection>
      <Container>
        <StyledTextarea
          value={updatedText}
          onChange={(e) => setUpdatedText(e.target.value)}
          placeholder="Write a comment..."
        />
        <StyledContainerBtn>
          <CancelBtn onClick={onClose}>Cancel</CancelBtn>
          <SaveBtn onClick={handleSave}>Save</SaveBtn>
        </StyledContainerBtn>
      </Container>
    </Wrapper>
  );
};

// 🎨 Стилизация
const Wrapper = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  borderRadius: "8px",
}));

const StyledSection = styled("section")(() => ({
  display: "flex",
  gap: "12px",
  alignItems: "center",
}));

const StyledImage = styled("img")(() => ({
  width: "40px",
  height: "40px",
  borderRadius: "50%",
}));

const StyledName = styled("p")(() => ({
  fontSize: "14px",
  fontWeight: "500",
  color: "#333",
}));

const Container = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
}));

const StyledTextarea = styled("textarea")(() => ({
  width: "333px",
  borderRadius: "8px",
  border: "1px solid #D1D5DB",
  padding: "8px 16px",
  fontSize: "14px",
  color: "#333",
  resize: "none",
  backgroundColor: "#FFFFFF",
  "&:focus": {
    outline: "none",
    border: "1px solid #0079BF",
  },
}));

const StyledContainerBtn = styled("div")(() => ({
  display: "flex",
  justifyContent: "end",
  gap: "10px",
}));

const CancelBtn = styled(Button)(() => ({
  width: "78px",
  height: "30px",
  backgroundColor: "#F0F0F0",
  fontSize: "14px",
  fontWeight: "400",
  color: "#919191",
  "&:hover": {
    color: "#FFFFFF",
  },
}));

const SaveBtn = styled(Button)(() => ({
  width: "64px",
  height: "30px",
  backgroundColor: "#0079BF",
  fontSize: "14px",
  fontWeight: "400",
  color: "#FFFFFF",
  "&:hover": {
    color: "#FFFFFF",
  },
}));
