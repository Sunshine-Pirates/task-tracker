import { styled } from "@mui/material";
import { Icons } from "../../../assets";
import { Input } from "../../../components/UI/input/Input";
import { Radio } from "../../../components/UI/radio/Radio";
import { Button } from "../../../components/UI/Button";

export const InviteModal = () => {
  return (
    <Wrapper>
      <Text>Invite a new participant</Text>
      <StyledWrapper>
        <Input placeholder="example@gmail.com" />
        <Container>
          <StyledMember>
            <Radio icon={<Icons.Radio />} checkedIcon={<Icons.RadioLine />} />
            <p>Member</p>
          </StyledMember>
          <StyledAdmin>
            <Radio icon={<Icons.Radio />} checkedIcon={<Icons.RadioLine />} />
            <p>Admin</p>
          </StyledAdmin>
        </Container>
      </StyledWrapper>
      <StyledContainerBtn>
        <CancelBtn variant="">Delete</CancelBtn>
        <SaveBtn variant="">Create</SaveBtn>
      </StyledContainerBtn>
    </Wrapper>
  );
};
const StyledContainerBtn = styled("div")(() => ({
  display: "flex",
  justifyContent: "end",
  gap: "16px",
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
const StyledWrapper = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
}));

const Wrapper = styled("div")(() => ({
  width: "425px",
  display: "flex",
  flexDirection: "column",
  gap: "18px",
}));
const Text = styled("p")(() => ({
  color: "#000000",
  textAlign: "center",
}));

const Container = styled("div")(() => ({
  display: "flex",
  gap: "24px",
}));
const StyledMember = styled("section")(() => ({
  display: "flex",
  alignItems: "center",
}));
const StyledAdmin = styled("section")(() => ({
  display: "flex",
  alignItems: "center",
}));
