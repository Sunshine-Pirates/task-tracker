import { styled } from "@mui/material";
import { Input } from "./Input";
import { Icons } from "../../../assets";

export const EmailInputList = ({
  emails,
  setEmails,
  memberEmail,
  setMemberEmail,
  onEmailsChange,
  ...props
}) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      if (
        typeof memberEmail === "string" &&
        validateEmail(memberEmail.trim())
      ) {
        const updatedEmails = [...emails, memberEmail.trim()];
        setEmails(updatedEmails);
        setMemberEmail("");
        onEmailsChange(updatedEmails);
      }
    }
  };

  const handleRemoveEmail = (targetEmail) => {
    const updatedEmails = emails.filter((e) => e !== targetEmail);
    setEmails(updatedEmails);
    onEmailsChange(updatedEmails);
  };

  const validateEmail = (item) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(item);
  };

  return (
    <Wrapper>
      <StyledInputWrapper hasEmails={emails.length <= 0}>
        {emails?.map((item, index) => (
          <EmailTag key={index}>
            {item}
            <RemoveButton onClick={() => handleRemoveEmail(item)}>
              <Icons.Cancel />
            </RemoveButton>
          </EmailTag>
        ))}
        <StyledInput
          type="text"
          value={memberEmail}
          placeholder="example@gmail.com"
          onChange={(e) => setMemberEmail(e.target.value)}
          onKeyDown={handleKeyDown}
          {...props}
        />
      </StyledInputWrapper>
    </Wrapper>
  );
};

const Wrapper = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
}));

const StyledInputWrapper = styled("div")(({ hasEmails }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: "8px",
  border: "1px solid#D0D0D0",
  padding: hasEmails ? "0" : "8px",
  borderRadius: "8px",
  maxWidth: hasEmails ? "329px" : "329px",
  minHeight: hasEmails ? "32px" : "62px",
}));

const EmailTag = styled("div")(() => ({
  background: "#F0F0F0",
  padding: "5px 10px",
  borderRadius: "16px",
  display: "flex",
  alignItems: "center",
  fontSize: "14px",
  gap: "6px",
}));

const RemoveButton = styled("button")(() => ({
  background: "none",
  border: "none",
  cursor: "pointer",
  fontSize: "16px",
  color: "#f44336",
}));

const StyledInput = styled(Input)(({ value }) => ({
  border: "none",
  outline: "none",
  minWidth: value ? "329px" : "150px",
  flexGrow: 1,
  fontSize: "14px",
}));
