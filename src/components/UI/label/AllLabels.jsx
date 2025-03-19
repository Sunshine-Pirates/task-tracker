import { Select, styled, MenuItem } from "@mui/material";
import { useState } from "react";
import { Icons } from "../../../assets";
import { assignee } from "../../../utils/constants/assignee";
import { Checkbox } from "../checkbox/Checkbox";
import CloseIcon from "@mui/icons-material/Close";
import { lables } from "../../../utils/constants/lables";

export const AllLabeles = () => {
  const [selectOpen, setSelectOpen] = useState(false);
  const [selectedIds, setSelectedIds] = useState([]);
  const [checkedState, setCheckedState] = useState(
    assignee.reduce((acc, option) => ({ ...acc, [option.id]: false }), {})
  );

  const handleClose = () => {
    console.log(selectedIds);
    setSelectOpen(false);
  };

  const handleCheckboxChange = (id) => {
    setCheckedState((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));

    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleUnassignedClick = () => {
    setCheckedState(
      assignee.reduce((acc, option) => ({ ...acc, [option.id]: false }), {})
    );
    setSelectedIds([]);
  };

  const handleRemoveSelected = (id) => {
    console.log(id);
    setSelectedIds((prev) => prev.filter((item) => item !== id));
    setCheckedState((prevState) => ({
      ...prevState,
      [id]: false,
    }));
  };

  return (
    <StyledSelect
      multiple
      open={selectOpen}
      onClose={handleClose}
      displayEmpty
      value={selectedIds}
      IconComponent={() => (
        <StyledIcons
          onClick={(e) => {
            e.stopPropagation();
            setSelectOpen((prev) => !prev);
          }}
        >
          {selectOpen ? <Icons.Up /> : <Icons.Down />}
        </StyledIcons>
      )}
      renderValue={(selected) =>
        selected.length > 0 ? (
          <StyledSelectedItems>
            {selected.map((id) => {
              const option = lables.find((item) => item.id === id);
              return (
                <StyledSelectedItem key={id}>
                  {option?.fullName}
                  <CloseIcon
                    sx={{ fontSize: "small", cursor: "pointer" }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemoveSelected(id);
                    }}
                  />
                </StyledSelectedItem>
              );
            })}
          </StyledSelectedItems>
        ) : (
          <StyledText
            onClick={(e) => {
              e.stopPropagation();
              setSelectOpen((prev) => !prev);
            }}
          >
            All labels
          </StyledText>
        )
      }
    >
      <StyledMenuItem>
        <StyledItem>
          <StyledWrapper>
            <Checkbox
              checked={selectedIds.length === 0}
              onChange={handleUnassignedClick}
              checkedIcon={<Icons.Checkbox />}
              uncheckedIcon={<Icons.CheckboxLine />}
            />
            <div onClick={handleUnassignedClick}>
              <StyledName>No labels</StyledName>
            </div>
          </StyledWrapper>

          {lables.length > 0 ? (
            lables.map((option) => (
              <StyledWrapper key={option.id} value={option.id}>
                <Checkbox
                  checked={checkedState[option.id]}
                  onChange={() => handleCheckboxChange(option.id)}
                  checkedIcon={<Icons.Checkbox />}
                  uncheckedIcon={<Icons.CheckboxLine />}
                />
                <StyledList backgroundColor={option.backgroundColor}>
                  {" "}
                </StyledList>
              </StyledWrapper>
            ))
          ) : (
            <Text>Здесь пусто</Text>
          )}
        </StyledItem>
      </StyledMenuItem>
    </StyledSelect>
  );
};
const StyledList = styled("div")(({ backgroundColor }) => ({
  width: "230px",
  height: "32px",
  borderRadius: "6px",
  backgroundColor,
}));
const StyledWrapper = styled(MenuItem)(() => ({
  display: "flex",
  gap: "0.5625rem",
}));
const StyledItem = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
}));

const StyledMenuItem = styled("div")(() => ({
  width: "304px",
  height: "224px",
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  borderRadius: "1rem",
  "& section": {
    margin: "0 auto",
  },
}));

const StyledSelect = styled(Select)(() => ({
  width: "154px",
  height: "36px",
  background: "#ffffff",
  borderRadius: "0.5rem",
  border: "1px solid #D0D0D0",
  paddingRight: "0.6875rem",

  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "&:focus": {
    outline: "none",
  },
}));

const StyledText = styled("span")(() => ({
  color: "#111111",
  fontSize: "0.875rem",
}));

const Text = styled("div")(() => ({
  color: "#A0A0A0",
  textAlign: "center",
  padding: "1rem 0",
}));

const StyledName = styled("p")(() => ({
  color: "#111111",
}));

const StyledIcons = styled("div")(() => ({
  marginTop: "5px",
}));

const StyledSelectedItems = styled("div")(() => ({
  display: "flex",
  flexWrap: "nowrap",
  gap: "10px",
  overflowX: "auto",
  padding: "0.5rem",
  maxWidth: "100%",
  whiteSpace: "nowrap",
}));

const StyledSelectedItem = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "2px",
  backgroundColor: "#F5F5F5",
  padding: "3px 8px",
  borderRadius: "4px",
  fontSize: "14px",
}));
