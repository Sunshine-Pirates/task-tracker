import { Select, styled, MenuItem, Avatar } from "@mui/material";
import { useState } from "react";
import { Icons } from "../../../assets";
import { SearchInput } from "../searchInput/SearchInput";
import { assignee } from "../../../utils/constants/assignee";
import { Checkbox } from "../checkbox/Checkbox";
import { Person } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";

export const Assignee = () => {
  const [selectOpen, setSelectOpen] = useState(false);
  const [selectedIds, setSelectedIds] = useState([]);
  const [filteredOptions, setFilteredOptions] = useState(assignee);
  const [checkedState, setCheckedState] = useState(
    assignee.reduce((acc, option) => ({ ...acc, [option.id]: false }), {})
  );

  const handleClose = () => {
    console.log(selectedIds);
    setSelectOpen(false);
  };

  const handleSearch = (value) => {
    if (!value.trim()) {
      setFilteredOptions(assignee);
    } else {
      const filtered = assignee.filter((option) =>
        option.fullName.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredOptions(filtered);
    }
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
              const option = assignee.find((item) => item.id === id);
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
            Assignee
          </StyledText>
        )
      }
    >
      <StyledMenuItem>
        <section onClick={(e) => e.stopPropagation()}>
          <StyledSearchInput
            placeholder="Search"
            iconEnd={<Icons.Search />}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </section>

        <StyledItem>
          <StyledWrapper>
            <Checkbox
              checked={selectedIds.length === 0}
              onChange={handleUnassignedClick}
              checkedIcon={<Icons.Checkbox />}
              uncheckedIcon={<Icons.CheckboxLine />}
            />
            <Avatar>
              <Person />
            </Avatar>
            <div onClick={handleUnassignedClick}>
              <StyledName>Unassigned</StyledName>
            </div>
          </StyledWrapper>

          {filteredOptions.length > 0 ? (
            filteredOptions.map((option) => (
              <StyledWrapper key={option.id} value={option.id}>
                <Checkbox
                  checked={checkedState[option.id]}
                  onChange={() => handleCheckboxChange(option.id)}
                  checkedIcon={<Icons.Checkbox />}
                  uncheckedIcon={<Icons.CheckboxLine />}
                />
                <StyledImage src={option.image} alt={option.fullName} />
                <div onClick={() => handleCheckboxChange(option.id)}>
                  <StyledName>{option.fullName}</StyledName>
                  <StyledEmail>{option.email}</StyledEmail>
                </div>
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

const StyledWrapper = styled(MenuItem)(() => ({
  display: "flex",
  gap: "0.5625rem",
}));

const StyledImage = styled("img")(() => ({
  maxWidth: "2.5rem",
  height: "auto",
  objectFit: "cover",
}));

const StyledItem = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
}));

const StyledMenuItem = styled("div")(() => ({
  width: "19.625rem",
  height: "31.875rem",
  display: "flex",
  flexDirection: "column",
  paddingTop: "1rem",
  gap: "0.5rem",
  borderRadius: "1rem",
  "& section": {
    margin: "0 auto",
  },
}));

const StyledSelect = styled(Select)(() => ({
  marginTop: "1.25rem",
  width: "13.6875rem",
  height: "2.25rem",
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

const StyledSearchInput = styled(SearchInput)(() => ({
  width: "16.875rem",
  "& .css-elo8k2-MuiInputAdornment-root": {
    marginTop: "4px",
  },
}));

const Text = styled("div")(() => ({
  color: "#A0A0A0",
  textAlign: "center",
  padding: "1rem 0",
}));

const StyledName = styled("p")(() => ({
  color: "#111111",
}));

const StyledEmail = styled("p")(() => ({
  color: "#919191",
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
