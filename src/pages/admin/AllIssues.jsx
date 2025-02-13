import { useState } from "react";
import { Icons } from "../../assets";
import { Checkbox } from "../../components/UI/checkbox/Checkbox";
import { Divider, styled } from "@mui/material";

export const AllIssues = () => {
  const [open, setOpen] = useState(false);
  const handleOpenIcon = () => {
    setOpen((prev) => !prev);
  };
  const [openAssignee, setOpenAssignee] = useState(false);
  const handleOpenIconsetOpenAssignee = () => {
    setOpenAssignee((prev) => !prev);
  };
  return (
    <Wrapper>
      <AllIssuesContainer>
        <div>
          <Text>View all issues</Text>
          <StyledTotal>
            Total: <span>24</span>
          </StyledTotal>
        </div>
        <Container>
          <StyledContainerDate>
            <p>14.09.22</p>
            <Icons.Calender />
          </StyledContainerDate>
          <Date>
            <p>До</p>
            <Icons.Calender />
          </Date>
          <StyledAllLabels onClick={handleOpenIcon}>
            <p>All labels</p>
            {open ? <Icons.Down /> : <Icons.Up />}
          </StyledAllLabels>
          <StyledAssignee onClick={handleOpenIconsetOpenAssignee}>
            <p>Assignee</p>
            {openAssignee ? <Icons.Down /> : <Icons.Up />}
          </StyledAssignee>
          <StyledChecklist>
            <Checkbox
              checkedIcon={<Icons.Checkbox />}
              uncheckedIcon={<Icons.CheckboxLine />}
            />
            <p>Checklist</p>
          </StyledChecklist>
        </Container>
      </AllIssuesContainer>
      <StyledContainerText>
        <Containerr>
          <StyledCreated>
            <p>Created</p>
            <p>Period</p>
          </StyledCreated>
          <StyledColumn>
            <p>Creator</p>
            <p>Column</p>
          </StyledColumn>
          <StyledLabels>
            <p>Assignee</p>
            <p>labels</p>
          </StyledLabels>
          <p>Checklist</p>
        </Containerr>
        <p>Description</p>
      </StyledContainerText>

      <Divider />
    </Wrapper>
  );
};
const Wrapper = styled("div")(() => ({
  width: "1146px",
  height: "fit-content",
  backgroundColor: "#F8F8F899",
  display: "flex",
  flexDirection: "column",
  gap: "22px",
  padding: "22px 16px",
}));

const AllIssuesContainer = styled("div")(() => ({
  display: "flex",
  gap: "33px",
}));
const Text = styled("p")(() => ({
  color: "#0D0D0D",
  fontWeight: "500",
  fontSize: "20px",
}));
const StyledTotal = styled("p")(() => ({
  fontWeight: "400",
  color: "#919191",

  "& span": {
    width: "26px",
    height: "18px",
    borderRadius: "16px",
    backgroundColor: "#B2B2B2",
    color: "#FFFFFF",
    fontSize: "14px",
    padding: " 2px 4px",
  },
}));
const StyledContainerDate = styled("div")(() => ({
  width: "109px",
  height: "36px",
  border: "1px solid #D0D0D0",
  borderRadius: "8px",
  fontSize: "14px",
  color: "#111111",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "8px",
}));
const Date = styled("div")(() => ({
  width: "110px",
  height: "36px",
  border: "1px solid #D0D0D0",
  color: "#AFAFAF",
  fontWeight: "400",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  borderRadius: "8px",
}));
const StyledAllLabels = styled("div")(() => ({
  width: "154px",
  height: "36px",
  borderRadius: "8px",
  border: "1px solid #D0D0D0",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  color: "#111111",
  fontWeight: "400",
  fontSize: "14px",
  cursor: "pointer",
  paddingLeft: "16px",
  paddingRight: "11px",
}));
const StyledAssignee = styled("div")(() => ({
  width: "219px",
  height: "36px",
  borderRadius: "8px",
  border: "1px solid #D0D0D0",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  color: "#111111",
  fontWeight: "400",
  fontSize: "14px",
  cursor: "pointer",
  paddingLeft: "16px",
  paddingRight: "11px",
}));
const StyledChecklist = styled("div")(() => ({
  display: "flex",
  gap: "6px",
  color: "#464646",
  fontWeight: "400",
  alignItems: "center",
}));
const Container = styled("section")(() => ({
  width: "774px",
  display: "flex",
  gap: "20px",
}));
const StyledContainerText = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  color: "#000000",
  fontSize: "14px",
  fontWeight: "500",
}));
const Containerr = styled("div")(() => ({
  display: "flex",
  gap: "88px",
}));
const StyledCreated = styled("div")(() => ({
  display: "flex",
  gap: "27px",
}));
const StyledColumn = styled("div")(() => ({
  display: "flex",
  gap: "76px",
}));
const StyledLabels = styled("div")(() => ({
  display: "flex",
  gap: "55px",
}));
