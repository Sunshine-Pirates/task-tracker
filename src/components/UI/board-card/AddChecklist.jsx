import { styled } from "@mui/material";
import { Button } from "../Button";
import { Input } from "../input/Input";

export const AddChecklist = () => {
  return (
    <Container>
      <StyledText>Add checklist</StyledText>
      <form>
        <StyledInput placeholder="Title" />
        <StyledButton variant="" type="submit"> Add checklist</StyledButton>
      </form>
    </Container>
  );
};
const Container = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "10px",
  "& form": {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
}));
const StyledInput = styled(Input)(() => ({
  width: "244px",
  height: "32px",
}));
const StyledButton = styled(Button)(() => ({
  width: "244px",
  borderRadius: "24px",
  backgroundColor: "#0079BF",
  color: "#FFFFFF",
  "&:hover": {
    color: "#FFFFFF",
  },
}));
const StyledText = styled("p")(() => ({
  fontWeight: "400",
  color: "#000000",
}));
