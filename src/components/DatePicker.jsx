import { useState } from "react";
import "dayjs/locale/ru";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Icons } from "../assets";
import { Menu, MenuItem, Select } from "@mui/material";
import { Button } from "./UI/Button";
import dayjs from "dayjs";

dayjs.locale("ru");

export const DatePicker = ({ open, onClose }) => {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [selectedEndDate, setSelectedEndDate] = useState(dayjs());
  const [selectedTime, setSelectedTime] = useState(dayjs().format("HH:mm"));
  const [activeField, setActiveField] = useState("start");
  const [selectedReminder, setSelectedReminder] = useState("");

  const weekDays = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];

  const generateDays = () => {
    const startDate = currentDate.startOf("month").startOf("week");
    const endDate = currentDate.endOf("month").endOf("week");
    const days = [];
    let day = startDate;
    while (day.isBefore(endDate) || day.isSame(endDate, "day")) {
      days.push(day);
      day = day.add(1, "day");
    }
    return days;
  };

  const daysInCalendar = generateDays();

  const handleDateClick = (day) => {
    if (activeField === "start") {
      setSelectedDate(day);
    } else {
      setSelectedEndDate(day);
    }
  };

  const handleReset = () => {
    setSelectedDate(null);
    setSelectedEndDate(null);
    setSelectedTime("");
    setActiveField("start");
    setSelectedReminder(null);
  };

  return (
    <DatePickerContainerMenu
      open={open}
      onClose={onClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <StyledInnerContainer>
        <Header>
          Estimation <Icons.Cancel onClick={onClose} />
        </Header>

        <StyledMain>
          <div>
            <MonthTypography variant="h6">
              <Icons.Left
                onClick={() => setCurrentDate(currentDate.subtract(1, "month"))}
              />
              <p>{currentDate.format("MMMM YYYY")}</p>
              <Icons.Right
                onClick={() => setCurrentDate(currentDate.add(1, "month"))}
              />
            </MonthTypography>
          </div>
          <div>
            <DaysRow>
              {weekDays.map((dayName, index) => (
                <Day key={index}>{dayName}</Day>
              ))}
            </DaysRow>
            <Cells>
              {daysInCalendar.map((day) => {
                const isCurrentMonth = day.isSame(currentDate, "month");
                const isSelected =
                  selectedDate && day.isSame(selectedDate, "day");
                const isEndDate =
                  selectedEndDate && day.isSame(selectedEndDate, "day");
                return (
                  <Cell
                    key={day.format("DD-MM-YYYY")}
                    isCurrentMonth={isCurrentMonth}
                    isSelected={isSelected || isEndDate}
                    onClick={() => handleDateClick(day)}
                  >
                    <span>{day.format("D")}</span>
                  </Cell>
                );
              })}
            </Cells>
          </div>
        </StyledMain>

        <Footer>
          <InputContainer>
            <Typography variant="body2">Start date</Typography>
            <InputTextField
              placeholder="Date"
              value={selectedDate ? selectedDate.format("DD/MM/YY") : ""}
              onClick={() => setActiveField("start")}
            />
          </InputContainer>
          <ContainerForTwoInput>
            <InputContainer>
              <Typography variant="body2">Due date</Typography>
              <InputTextField
                placeholder="Date"
                value={
                  selectedEndDate ? selectedEndDate.format("DD/MM/YY") : ""
                }
                onClick={() => setActiveField("end")}
              />
            </InputContainer>
            <InputContainer>
              <Typography
                variant="body2"
                style={{
                  visibility: "hidden",
                }}
              >
                Due time
              </Typography>
              <InputTextField
                label=""
                placeholder="time"
                type="text"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
              />
            </InputContainer>
          </ContainerForTwoInput>
          <InputContainer>
            <Typography variant="body2">Set due date reminder</Typography>
            <InputSelect
              IconComponent={Icons.Down}
              value={selectedReminder || ""}
              onChange={(e) => setSelectedReminder(e.target.value)}
              displayEmpty
              renderValue={(selected) => (selected ? selected : "None")}
              MenuProps={{
                PaperProps: {
                  sx: menuStyles,
                },
              }}
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value="5min">5 minutes before</MenuItem>
              <MenuItem value="30min">15 minutes before</MenuItem>
              <MenuItem value="10min">10 minutes before</MenuItem>
              <MenuItem value="30min">30 minutes before</MenuItem>
              <MenuItem value="30min">1 hours before</MenuItem>
            </InputSelect>
          </InputContainer>
          <StyledButton variant="contained" onClick={handleReset}>
            Create a new template
          </StyledButton>
        </Footer>
      </StyledInnerContainer>
    </DatePickerContainerMenu>
  );
};

const DatePickerContainerMenu = styled(Menu)({
  "& .css-1tktgsa-MuiPaper-root-MuiPopover-paper-MuiMenu-paper": {
    width: "284px",
    height: "606px",
    padding: "10px 20px 16px 17px",
    borderRadius: "10px",
  },
});
const StyledInnerContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "18px",
}));
const Header = styled(Box)({
  width: "100%",
  justifyContent: "end",
  display: "flex",
  alignItems: "center",
  gap: "65px",
});
const StyledMain = styled("main")(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "12px",
  "& :first-child": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const MonthTypography = styled(Typography)(() => ({
  display: "flex",
  gap: "42px",
  alignItems: "center",
  fontWeight: "500",
  fontSize: "14px",
  textTransform: "capitalize",
  color: "#636363",
  "& p": {
    width: "102px",
    height: "fit-content",
  },
}));

const DaysRow = styled(Box)({
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  color: "rgba(0, 0, 0, 0.6)",
});

const Day = styled("div")({
  width: "32px",
  height: "32px",
  fontWeight: "400",
  textTransform: "capitalize",
  fontSize: "12px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const Cells = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  gap: "2px",
  "& div": {
    width: "32px",
    height: "32px",
    fontSize: "14px",
  },
});

const Cell = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== "isCurrentMonth" && prop !== "isSelected",
})(({ isCurrentMonth, isSelected }) => ({
  height: "40px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  borderRadius: "50px",
  color: isSelected ? "#ffffff" : isCurrentMonth ? "#000" : "#fff",
  backgroundColor: isSelected ? "#1F6ED4" : "transparent",
  "&:hover": {
    backgroundColor: isSelected ? "#0056b3" : "#0056b3",
    color: "#ffffff",
  },
}));

const Footer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
});
const InputContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  color: "#919191",
  fontSize: "14px",
  fontWeight: "400",
  gap: "5px",
});
const ContainerForTwoInput = styled("div")(() => ({
  display: "flex",
  gap: "16px",
}));

const InputTextField = styled(TextField)({
  width: "100px",
  "& .MuiInputBase-root": {
    height: "34px",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
    fontSize: "14px",
    fontWeight: "500",
    textAlign: "center",
  },
  "& .MuiInputBase-input": {
    textAlign: "center",
  },
});

const InputSelect = styled(Select)({
  width: "250px",
  height: "34px",
  borderRadius: "8px",
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#D0D0D0 !important",
  },
});
const menuStyles = {
  maxHeight: "200px",
  overflowY: "auto",
  "&::-webkit-scrollbar": {
    width: "6px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "grey",
    borderRadius: "4px",
  },
};
const StyledButton = styled(Button)(() => ({
  width: "244px",
  height: "30px",
  marginTop: "8px",
}));
