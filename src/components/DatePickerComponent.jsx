import { useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/ru";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Icons } from "../assets";
import { MenuItem, Select } from "@mui/material";
import { Button } from "./UI/Button";

dayjs.locale("ru");

export const DatePickerComponent = () => {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
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
  };

  return (
    <DatePickerContainer>
      <Header>
        <div>Estimation</div>
        <div>
          <MonthTypography variant="h6">
            <Icons.Left
              onClick={() => setCurrentDate(currentDate.subtract(1, "month"))}
            />
            {currentDate.format("MMMM YYYY")}
            <Icons.Right
              onClick={() => setCurrentDate(currentDate.add(1, "month"))}
            />
          </MonthTypography>
        </div>
      </Header>
      <DaysRow>
        {weekDays.map((dayName, index) => (
          <Day key={index}>{dayName}</Day>
        ))}
      </DaysRow>
      <Cells>
        {daysInCalendar.map((day) => {
          const isCurrentMonth = day.isSame(currentDate, "month");
          const isSelected = selectedDate && day.isSame(selectedDate, "day");
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
      <Footer>
        <InputContainer>
          <Typography variant="body2">Start date</Typography>
          <InputTextField
            value={selectedDate ? selectedDate.format("DD/MM/YY") : ""}
            onClick={() => setActiveField("start")}
          />
        </InputContainer>
        <ContainerForTwoInput>
          <InputContainer>
            <Typography variant="body2">Due date</Typography>
            <InputTextField
              value={selectedEndDate ? selectedEndDate.format("DD/MM/YY") : ""}
              onClick={() => setActiveField("end")}
            />
          </InputContainer>
          <InputContainer>
            <Typography variant="body2">Due time</Typography>
            <InputTextField
              label=""
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
            value={selectedReminder}
            onChange={(e) => setSelectedReminder(e.target.value)}
            displayEmpty
            renderValue={(selected) => (selected ? selected : "None")}
          >
            <MenuItem value="5min">5 minutes before</MenuItem>
            <MenuItem value="30min">15 minutes before</MenuItem>
            <MenuItem value="10min">10 minutes before</MenuItem>
            <MenuItem value="30min">30 minutes before</MenuItem>
            <MenuItem value="30min">1 hours before</MenuItem>
          </InputSelect>
        </InputContainer>
        <Button variant="contained" color="secondary" onClick={handleReset}>
          Сбросить
        </Button>
      </Footer>
    </DatePickerContainer>
  );
};

const DatePickerContainer = styled(Box)({
  width: "320px",
  margin: "0 auto",
  padding: "16px",
  border: "1px solid #ccc",
  borderRadius: "8px",
  backgroundColor: "#fff",
});

const Header = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const MonthTypography = styled(Typography)(() => ({
  display: "flex",
  gap: "50px",
  padding: "20px",
  alignItems: "center",
  fontWeight: "500",
  fontSize: "20px",
  fontFamily: "roboto",
  textTransform: "capitalize",
  color: "#636363",
}));

const DaysRow = styled(Box)({
  display: "grid",
  gridTemplateColumns: "repeat(7, 1fr)",
  marginBottom: "10px",
  textAlign: "center",
  color: "grey",
});

const Day = styled(Box)({
  fontWeight: "400",
  textTransform: "capitalize",
  fontSize: "12px",
});

const Cells = styled(Box)({
  display: "grid",
  gridTemplateColumns: "repeat(7, 1fr)",
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
  color: isCurrentMonth ? "#000" : "#fff",
  backgroundColor: isSelected ? "#007bff" : "transparent",
  "&:hover": {
    backgroundColor: isSelected ? "#0056b3" : "#0056b3",
    color: "#ffffff",
  },
}));

const Footer = styled(Box)({
  marginTop: "10px",
  display: "flex",
  flexDirection: "column",
  gap: "30px",
});
const InputContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  color: "grey",
  fontSize: "14px",
  fontWeight: "400",
  gap: "5px",
});
const ContainerForTwoInput = styled("div")(() => ({
  display: "flex",
  gap: "30px",
}));

const InputTextField = styled(TextField)({
  width: "100px",
  "& .MuiInputBase-root": {
    height: "34px",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
    fontSize: "14px",
    fontWeight: "500",
  },
});

const InputSelect = styled(Select)({
  width: "250px",
  height: "34px",
  borderRadius: "8px",
});
