import { Avatar, styled } from "@mui/material";
import { Icons } from "../../../assets";
import { Labels } from "../label/Labels";
import { assignee } from "../../../utils/constants/assignee";
import { Input } from "../input/Input";
import { Checkbox } from "../checkbox/Checkbox";
import { Button } from "../Button";
import { useState } from "react";
import { AddCard } from "./AddCard";

export const CreateCardModal = () => {
  const MAX_VISIBLE = 8;
  const value = 2;
  const total = 5;
  const percentage = Math.round((value / total) * 100);
  const [checkedTasks, setCheckedTasks] = useState({
    taskOne: false,
    taskTwo: false,
  });

  const handleToggle = (task) => {
    setCheckedTasks((prev) => ({ ...prev, [task]: !prev[task] }));
  };

  return (
    <StyledWrapper>
      <ContainerForm>
        <Container>
          <Icons.Editt />
          <p>Какая то задача, которую нужно выполнить</p>
        </Container>
        <Box>
          <Labels />
          <Wrapper>
            <StartAndDueDate>
              <Text>Start date</Text>
              <ContainerDate>
                <Date>Sep 9, 2022 at 12:51 PM</Date>
                <Icons.Down />
              </ContainerDate>
            </StartAndDueDate>
            <StartAndDueDate>
              <Text>Due date</Text>
              <ContainerDate>
                <Date>Sep 9, 2022 at 12:51 PM</Date>
                <Icons.Down />
              </ContainerDate>
            </StartAndDueDate>
            <StartAndDueDate>
              <Text>Members</Text>
              <Members>
                {assignee.slice(0, MAX_VISIBLE).map((item, index) => (
                  <ImageWrapper key={item.id} index={index}>
                    <StyledImage src={item.image} alt={item.fullName} />
                  </ImageWrapper>
                ))}
                {assignee.length > MAX_VISIBLE && (
                  <StyledAvatar>+{assignee.length - MAX_VISIBLE}</StyledAvatar>
                )}
              </Members>
            </StartAndDueDate>
          </Wrapper>
          <ContainerDescription>
            <Description>
              <Icons.Down />
              <Text>Description</Text>
            </Description>
            <StyledDescription placeholder="Add a description" />
            <StyledContainerBtn>
              <CancelBtn variant="">Cancel</CancelBtn>
              <SaveBtn variant="">Save</SaveBtn>
            </StyledContainerBtn>
          </ContainerDescription>
          <ContainerCheck>
            <ContainerChecklistTitle>
              <ChecklistTitle>
                <Icons.Down />
                <Icons.Editt />
                <p>Checklist Title</p>
              </ChecklistTitle>
              <Delete>
                <Icons.Delete />
                <p>Delete</p>
              </Delete>
            </ContainerChecklistTitle>
            <ContainerBox>
              <ProgressContainer>
                <ProgressText>
                  {" "}
                  {value}/{total}{" "}
                </ProgressText>
                <ProgressBar>
                  <ProgressFill style={{ width: `${percentage}%` }} />
                </ProgressBar>
                <ProgressText>{percentage}%</ProgressText>
              </ProgressContainer>
              <ContainerTask>
                <Checkbox
                  checkedIcon={<Icons.Checkbox />}
                  uncheckedIcon={<Icons.CheckboxLine />}
                />
                <section>Task one</section>
              </ContainerTask>
              <StyledContainerBtn>
                <CancelBtn variant="">Cancel</CancelBtn>
                <SaveBtn variant="">Add</SaveBtn>
              </StyledContainerBtn>
            </ContainerBox>
            <ContainerAddItem>
              <main>
                <TaskSection
                  isChecked={checkedTasks.taskOne}
                  onClick={() => handleToggle("taskOne")}
                >
                  <Checkbox
                    icon={<Icons.CheckboxLine />}
                    checkedIcon={<Icons.Checkbox />}
                    checked={checkedTasks.taskOne}
                    onChange={() => handleToggle("taskOne")}
                  />
                  <Task> Task one </Task>
                </TaskSection>
                <TaskSection
                  isChecked={checkedTasks.taskTwo}
                  onClick={() => handleToggle("taskTwo")}
                >
                  <Checkbox
                    icon={<Icons.CheckboxLine />}
                    checkedIcon={<Icons.Checkbox />}
                    checked={checkedTasks.taskTwo}
                    onChange={() => handleToggle("taskTwo")}
                  />
                  <Task> Task two </Task>
                </TaskSection>
              </main>

              <AddButtonContainer>
                <AddButton>
                  <Icons.Plus />
                  Add an item
                </AddButton>
              </AddButtonContainer>
            </ContainerAddItem>
          </ContainerCheck>
        </Box>
      </ContainerForm>
      <AddCard />
    </StyledWrapper>
  );
};
const ContainerCheck = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
}));

const ContainerAddItem = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  "& main": {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
}));

const TaskSection = styled("section")(({ isChecked }) => ({
  width: "678px",
  height: "32px",
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  borderRadius: "8px",
  background: isChecked ? "#F2F2F2" : "transparent",
  "&:hover": {
    background: "#F2F2F2",
  },
}));

const AddButtonContainer = styled("div")(() => ({
  display: "flex",
  justifyContent: "flex-end",
}));

const AddButton = styled(Button)(() => ({
  width: "130px",
  fontSize: "14px",
  fontWeight: "400",
  borderRadius: "8px",
  border: "1px solid #D0D0D0",
  height: "30px",
}));
const Task = styled("p")(() => ({
  color: "#111111",
  fontWeight: "400",
  fontSize: "14px",
}));

const StyledWrapper = styled("div")(() => ({
  width: "1087px",
  display: "flex",
  justifyContent: "space-between",
}));

const Container = styled("section")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "6px",
  fontSize: "18px",
  color: "#111111",
}));
const Text = styled("p")(() => ({
  color: "#919191",
  fontSize: "14px",
  fontWeight: "400",
}));
const StartAndDueDate = styled("section")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
}));
const Wrapper = styled("div")(() => ({
  display: "flex",
  gap: "18px",
}));

const ContainerDate = styled("div")(() => ({
  width: "200px",
  height: "34px",
  display: "flex",
  alignItems: "center",
  gap: "4px",
  border: "1px solid #D0D0D0",
  borderRadius: "8px",
  paddingLeft: "16px",
}));
const Date = styled("p")(() => ({
  fontSize: "14px",
  fontWeight: "500",
  color: "#111111",
}));
const Members = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  position: "relative",
  height: "34px",
}));

const ImageWrapper = styled("div")(({ index }) => ({
  position: "absolute",
  left: `${index * 26}px`,
}));

const StyledImage = styled("img")(() => ({
  width: "34px",
  height: "34px",
  borderRadius: "50%",
  border: "2px solid white",
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
  left: `${assignee.length * 20}px`,
  marginBottom: "6px",
}));
const ContainerDescription = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
}));

const Description = styled("section")(() => ({
  display: "flex",
  gap: "8px",
}));
const StyledDescription = styled(Input)(() => ({
  width: "670px",
  height: "83px",
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
const StyledContainerBtn = styled("div")(() => ({
  display: "flex",
  justifyContent: "end",
  gap: "16px",
}));
const ContainerForm = styled("div")(() => ({
  width: "670px",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
}));
const Box = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
}));

const ContainerChecklistTitle = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
}));

const ChecklistTitle = styled("section")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "8px",
}));
const Delete = styled("section")(() => ({
  display: "flex",
  gap: "6px",
}));
const ProgressContainer = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  width: "100%",
  gap: "8px",
  marginTop: "10px",
}));

const ProgressText = styled("span")(() => ({
  color: "#787878",
  fontWeight: "400",
}));

const ProgressBar = styled("div")(() => ({
  width: "601px",
  height: "10px",
  display: "flex",
  padding: "2px",
  backgroundColor: "#F0F0F0",
  borderRadius: "8px",
  overflow: "hidden",
  position: "relative",
}));

const ProgressFill = styled("div")(() => ({
  height: "6px",
  backgroundColor: "#0079BF",
  borderRadius: "8px",
  transition: "width 0.3s ease-in-out",
}));
const ContainerTask = styled("div")(() => ({
  display: "flex",
  gap: "4px",
  alignItems: "start",
  "& section": {
    width: "639.39px",
    height: "88px",
    border: "1px solid #D0D0D0",
    borderRadius: "8px",
    paddingTop: "8px",
    paddingLeft: "16px",
    fontWeight: "400",
    color: "#111111",
  },
}));
const ContainerBox = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
}));
