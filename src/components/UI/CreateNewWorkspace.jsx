import { useState } from "react";
import { BaseModal } from "./BaseModal";
import { Input } from "./input/Input";
import { Button } from "./Button";
import { styled } from "@mui/material";
import { EmailInputList } from "./input/EmaiInputList";

export const CreateNewWorkspace = () => {
  const [workspaceName, setWorkspaceName] = useState("");
  const [emailList, setEmailList] = useState([]);
  const [memberEmail, setMemberEmail] = useState("");
  const [open, setOpen] = useState(false);

  const handleOpenOrCloseModal = () => {
    setOpen((prev) => !prev);
  };

  const handleCreate = () => {
    console.log("Workspace:", workspaceName);
    console.log("Emails:", emailList);
    setWorkspaceName("");
    setEmailList([]);
  };

  return (
    <>
      <button onClick={handleOpenOrCloseModal}>open workspace</button>
      <BaseModal open={open} onClose={handleOpenOrCloseModal}>
        <WrapperDiv>
          <StyledHeader>
            <p>Create a new workspace</p>
          </StyledHeader>
          <MainStyled>
            <StyledDiv>
              <label htmlFor="name">Name of the workspace*</label>
              <InputStyled
                type={"text"}
                placeholder={"Name"}
                id="name"
                value={workspaceName}
                onChange={(e) => setWorkspaceName(e.target.value)}
              />
            </StyledDiv>
            <StyledDiv>
              <label htmlFor="email">Invite a member</label>
              <EmailInputList
                id="email"
                memberEmail={memberEmail}
                setMemberEmail={setMemberEmail}
                emails={emailList}
                setEmails={setEmailList}
                onEmailsChange={setEmailList}
              />
            </StyledDiv>
          </MainStyled>
          <FooterStyled>
            <ButtonStyled variant={"cancel"} type={"button"}>
              Cancel
            </ButtonStyled>
            <ButtonStyled
              variant={"contained"}
              type={"button"}
              disabled={!workspaceName.trim() || emailList.length === 0}
              onClick={handleCreate}
            >
              Create
            </ButtonStyled>
          </FooterStyled>
        </WrapperDiv>
      </BaseModal>
    </>
  );
};

const WrapperDiv = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "14px",
}));
const StyledHeader = styled("header")(() => ({
  display: "flex",
  justifyContent: "center",
}));
const MainStyled = styled("main")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
}));
const InputStyled = styled(Input)(() => ({
  width: "329px",
  height: "32px",
}));
const StyledDiv = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  "& label": {
    color: theme.palette.secondary.main,
    fontSize: "14px",
    lineHeight: "17.6px",
  },
}));
const FooterStyled = styled("footer")(() => ({
  marginTop: "10px",
  display: "flex",
  justifyContent: "end",
  gap: "16px",
}));
const ButtonStyled = styled(Button)(() => ({
  width: "78px",
  height: "34px",
}));
