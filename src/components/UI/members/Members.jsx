import { styled, MenuItem } from "@mui/material";
import { useState } from "react";
import { Icons } from "../../../assets";
import { SearchInput } from "../searchInput/SearchInput";
import { members } from "../../../utils/constants/members";

export const Members = () => {
  const [filteredOptions, setFilteredOptions] = useState(members);

  const handleSearch = (value) => {
    if (!value.trim()) {
      setFilteredOptions(members);
    } else {
      const filtered = members.filter((option) =>
        option.fullName.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredOptions(filtered);
    }
  };

  const boardMembers = filteredOptions.filter(
    (member) => member.type === "board"
  );
  const workspaceMembers = filteredOptions.filter(
    (member) => member.type === "workspace"
  );

  return (
    <StyledMenuItem>
      <StyledText>Members</StyledText>
      <section onClick={(e) => e.stopPropagation()}>
        <StyledSearchInput
          placeholder="Search"
          iconEnd={<Icons.Search />}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </section>

      <StyledItem>
        {boardMembers.length > 0 && <SectionTitle>Board members</SectionTitle>}
        {boardMembers.map((option) => (
          <StyledWrapper key={option.id}>
            <StyledImage src={option.image} alt={option.fullName} />
            <div>
              <StyledName>{option.fullName}</StyledName>
              <StyledEmail>{option.email}</StyledEmail>
            </div>
          </StyledWrapper>
        ))}

        {workspaceMembers.length > 0 && (
          <SectionTitle>Workspace members</SectionTitle>
        )}
        {workspaceMembers.map((option) => (
          <StyledWrapper key={option.id}>
            <StyledImage src={option.image} alt={option.fullName} />
            <div>
              <StyledName>{option.fullName}</StyledName>
              <StyledEmail>{option.email}</StyledEmail>
            </div>
          </StyledWrapper>
        ))}

        {boardMembers.length === 0 && workspaceMembers.length === 0 && (
          <Text>Здесь пусто</Text>
        )}
      </StyledItem>
    </StyledMenuItem>
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
  borderRadius: "50%",
}));

const StyledItem = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  overflowY: "auto",
  maxHeight: "25rem",
}));

const StyledMenuItem = styled("div")(() => ({
  height: "31.875rem",
  display: "flex",
  flexDirection: "column",
  gap: "18px",
  borderRadius: "1rem",
  backgroundColor: "#fff",
}));

const StyledText = styled("span")(() => ({
  color: "#000000",
  margin: "0 auto",
}));
const SectionTitle = styled("p")(() => ({
  color: "#919191",
  fontSize: "14px",
  fontWeight: "400",
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
}));

const StyledName = styled("p")(() => ({
  color: "#111111",
  fontWeight: "400",
}));

const StyledEmail = styled("p")(() => ({
  color: "#919191",
  fontSize: "0.875rem",
}));
