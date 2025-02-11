import { styled } from "@mui/material";
import { Button } from "../Button";

export const DeleteComments = ({ handleDelete, id }) => {
  return (
    <Wrapper>
      <StyledText>Delete comment?</StyledText>
      <section>
        <Text>Deleting a comment is forever. There is no undo.</Text>
        <DeleteBtn onClick={() => handleDelete(id)}>Delete</DeleteBtn>
      </section>
    </Wrapper>
  );
};
const Wrapper = styled("div")(() => ({
  width: "244px",
  display: "flex",
  flexDirection: "column",
  gap: "14px",
  "& section": {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
}));

const DeleteBtn = styled(Button)(() => ({
  width: "244px",
  height: "30px",
  backgroundColor: "#D91212",
  fontSize: "14px",
  fontWeight: "400",
  borderRadius: "24px",
  color: "#FFFFFF",
  "&:hover": {
    color: "#FFFFFF",
  },
}));
const Text = styled("p")(() => ({
  color: "#919191",
  lineHeight: "20px",
  fontWeight: "400",
}));
const StyledText = styled("p")(() => ({
  color: "#000000",
  fontWeight: "400",
  margin: "0 auto",
}));
