import { Icons } from "../../assets";
import { Checkbox } from "../../components/UI/checkbox/Checkbox";
import { Divider, styled, Avatar } from "@mui/material";
import { AllLabeles } from "../../components/UI/label/AllLabels";
import { allIssues } from "../../utils/constants/all-issues";
import { Assignee } from "../../components/UI/assignee/Assignee";
import { assignee } from "../../utils/constants/assignee";

export const AllIssues = () => {
  const MAX_VISIBLE = 2;

  return (
    <Wrapper>
      <AllIssuesContainer>
        <div>
          <Text>View all issues</Text>
          <StyledTotal>
            Total: <span>{allIssues.length}</span>
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
          <AllLabeles />
          <Assignee />
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
            <p>Labels</p>
          </StyledLabels>
          <p>Checklist</p>
        </Containerr>
        <p>Description</p>
      </StyledContainerText>

      <Divider />

      {allIssues.map((issue) => (
        <ContainerList key={issue.id}>
          <IssueRow>
            <ContainerItem>
              <StyledContainerItem>
                <p>{issue.created}</p>
                <p>{issue.period}</p>
              </StyledContainerItem>
              <StyledItemm>
                <StyledName>{issue.creator}</StyledName>
                <Column>{issue.column}</Column>
              </StyledItemm>
            </ContainerItem>
            <StyledContainerImageAndLabels>
              <AssigneeContainer>
                {issue.assignees.slice(0, MAX_VISIBLE).map((item, index) => (
                  <ImageWrapper key={item.id} index={index}>
                    <StyledImage src={item.img} alt={item.fullName} />
                  </ImageWrapper>
                ))}

                {issue.assignees.length > MAX_VISIBLE && (
                  <StyledAvatar>
                    +{issue.assignees.length - MAX_VISIBLE}
                  </StyledAvatar>
                )}
              </AssigneeContainer>
              <LabelsContainerr>
                <LabelsContainer>
                  {issue.labels.map((color, index) => (
                    <Label key={index} backgroundColor={color} />
                  ))}
                </LabelsContainer>

                <p>{issue.checklist}</p>
              </LabelsContainerr>
            </StyledContainerImageAndLabels>
          </IssueRow>
          <Description>{issue.description}</Description>
        </ContainerList>
      ))}
    </Wrapper>
  );
};
const StyledContainerImageAndLabels = styled("div")(() => ({
  display: "flex",
  gap: "50px",
}));

const LabelsContainerr = styled("div")(() => ({
  display: "flex",
  gap: "50px",
}));

const Column = styled("p")(() => ({
  width: "100px",
  height: "40px",
  fontWeight: "400",
}));

const StyledItemm = styled("div")(() => ({
  display: "flex",
  gap: "34px",
}));

const StyledName = styled("p")(() => ({
  width: "100px",
  height: "40px",
  fontWeight: "400",
}));

const ContainerItem = styled("div")(() => ({
  display: "flex",
  gap: "50px",
}));
const StyledContainerItem = styled("div")(() => ({
  display: "flex",
  gap: "20px",
}));

const Wrapper = styled("div")(() => ({
  width: "1146px",
  height: "fit-content",
  backgroundColor: "#F8F8F899",
  display: "flex",
  flexDirection: "column",
  gap: "22px",
  padding: "22px 16px",
  margin: "12px 24px 12px 20px",
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
    padding: "2px 4px",
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

const IssueRow = styled("div")(() => ({
  display: "flex",
  gap: "46px",
}));

const AssigneeContainer = styled("div")(() => ({
  width: "84px",
  height: "34px",
  display: "flex",
  position: "relative",
}));

const ImageWrapper = styled("div")(({ index }) => ({
  position: "absolute",
  left: `${index * 26}px`,
}));
const StyledImage = styled("img")(() => ({
  width: "34px",
  height: "34px",
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
  left: `${assignee.length * 5.5}px`,
  marginBottom: "6px",
  cursor: "pointer",
}));

const LabelsContainer = styled("div")(() => ({
  width: "96px",
  height: "18px",
  display: "flex",
  flexWrap: "wrap",
  gap: "4px",
}));

const Label = styled("div")(({ backgroundColor }) => ({
  width: "46px",
  height: "7px",
  borderRadius: "8px",
  backgroundColor,
}));

const Description = styled("p")(() => ({
  maxWidth: "300px",
}));
const ContainerList = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  cursor: "pointer",
  padding: "8px 16px 6px 16px",
  "&:hover": {
    backgroundColor: "#E6E6E6B2",
  },
}));
