import { useState } from "react";
import { IconButton, styled } from "@mui/material";
import { Icons } from "../../assets";
import { Input } from "../../components/UI/input/Input";
import { Button } from "../../components/UI/Button";

export const AddAColumn = ({ onClose, onAddColumn }) => {
  const [columnName, setColumnName] = useState("");

  const handleChange = (event) => {
    setColumnName(event.target.value);
  };

  const handleCreate = () => {
    onAddColumn(columnName);
    setColumnName("");
  };

  return (
    <StyledForm>
      <StyledContainer>
        <p>Name of the column</p>
        <IconButton onClick={onClose}>
          <Icons.Cancel />
        </IconButton>
      </StyledContainer>
      <StyledInput
        placeholder="Name"
        value={columnName}
        onChange={handleChange}
      />
      <ButtonContainer>
        <SaveBtn onClick={handleCreate} type="submit">
          Create
        </SaveBtn>
      </ButtonContainer>
    </StyledForm>
  );
};

const StyledContainer = styled("div")(() => ({
  display: "flex",
  padding: "8px 16px",
  color: "#919191",
  justifyContent: "space-between",
  alignItems: "center",
  fontSize: "14px",
}));

const StyledInput = styled(Input)(() => ({
  width: "248px",
  marginLeft: "16px",
  backgroundColor: "#FFFFFF",
}));

const ButtonContainer = styled("div")(() => ({
  display: "flex",
  justifyContent: "flex-end",
  marginRight: "16px",
}));

const SaveBtn = styled(Button)(() => ({
  width: "77px",
  height: "30px",
  backgroundColor: "#0079BF",
  fontSize: "14px",
  fontWeight: "400",
  marginTop: "10px",
  color: "#FFFFFF",
  "&:hover": {
    color: "#FFFFFF",
  },
}));

const StyledForm = styled("form")(() => ({
  width: "280px",
  height: "126px",
  borderRadius: "8px",
  backgroundColor: "#9191911C",
}));
