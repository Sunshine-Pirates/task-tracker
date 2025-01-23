import { styled } from "@mui/material";
import { Input } from "../UI/input/Input";
import Button from "../UI/Button";

export const ProfileForm = () => {
  return (
    <>
      <StyledForm>
        <StyledWrapperInput>
          <StyledInput placeholder="Name" />
          <StyledInput placeholder="Surname" />
          <StyledInput type="email" placeholder="example@gmail.com" />
        </StyledWrapperInput>
        <StyledWrapperInputPassword>
          <StyledInputPassword type="password" placeholder="Password" />
          <StyledInputPassword type="password" placeholder="Repeat password" />
          <StyledButtonWrapper>
            <StyledButtonSave>Save</StyledButtonSave>
          </StyledButtonWrapper>
        </StyledWrapperInputPassword>
      </StyledForm>
    </>
  );
};

const StyledForm = styled("form")(() => ({
 
  display: "flex",
  gap: "16px",
}));

const StyledWrapperInput = styled("section")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
}));

const StyledInput = styled(Input)(() => ({
  width: "395px",
  height: "32px",
}));

const StyledWrapperInputPassword = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
}));

const StyledInputPassword = styled(Input)(() => ({
  width: "321px",
  height: "32px",
}));

const StyledButtonWrapper = styled("div")(() => ({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "flex-end",
}));

const StyledButtonSave = styled(Button)(() => ({
  width: "64px",
  height: "34px",
  backgroundColor: "#0079BF",
  color: "#FFFFFF",
  fontSize: "14px",
}));
