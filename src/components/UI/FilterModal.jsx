import { useState } from "react";
import { BaseModal } from "./BaseModal";
import ClearIcon from "@mui/icons-material/Clear";
import { IconButton } from "./IconButton";
import { styled } from "@mui/material";
import { Checkbox } from "./checkbox/Checkbox";
import Button from "./Button";
import { Icons } from "../../assets";
import { btn_data, filter_data } from "../../utils/constants/filterModalData";
export const FilterModal = () => {
  const [open, setOpen] = useState(false);
  const [checkStates, setCheckStates] = useState(
    [...filter_data, ...btn_data].map(() => false)
  );
  const handleCheckChange = (index, title, text) => {
    setCheckStates((prevCheckStates) =>
      prevCheckStates.map((check, i) => (i === index ? !check : check))
    );
    console.log(`Title: ${title}`);
    if (text) {
      console.log(`Text: ${text}`);
    }
  };
  return (
    <div>
      <button onClick={() => setOpen(!false)}>filter btn</button>

      <BaseModal open={open} onClose={() => setOpen((prev) => !prev)}>
        <StyledHeader>
          <InnerHeaderStyle>
            Filter
            <IconButton onClick={() => setOpen((prev) => !prev)}>
              <ClearIcon />
            </IconButton>
          </InnerHeaderStyle>
        </StyledHeader>
        <StyledMainTag>
          <StyledSectionTag>
            <StyledSpanTag>Due date</StyledSpanTag>
            <FirstStyledUnorderedList>
              {filter_data.map((item, index) => (
                <ListStyled key={item.id}>
                  <CheckBoxStyles
                    checked={checkStates[index]}
                    checkedIcon={<Icons.Checkbox />}
                    uncheckedIcon={<Icons.CheckboxLine />}
                    onChange={() => handleCheckChange(index, item.title)}
                  />
                  <p>{item.title}</p>
                </ListStyled>
              ))}
            </FirstStyledUnorderedList>
          </StyledSectionTag>
          <StyledSectionTag>
            <StyledSpanTag>Labels</StyledSpanTag>
            <SecondStyledUnorderedList>
              {btn_data.map((item, index) => (
                <ListStyled key={item.id}>
                  <CheckBoxStyles
                    checked={checkStates[filter_data.length + index]}
                    checkedIcon={<Icons.Checkbox />}
                    uncheckedIcon={<Icons.CheckboxLine />}
                    onChange={() =>
                      handleCheckChange(
                        filter_data.length + index,
                        item.title,
                        item.text
                      )
                    }
                  />
                  <p>{item.title}</p>
                  <StyledButton
                    style={{
                      backgroundColor: item.backgrounColor,
                    }}
                  >
                    {item.text}
                  </StyledButton>
                </ListStyled>
              ))}
            </SecondStyledUnorderedList>
          </StyledSectionTag>
        </StyledMainTag>
      </BaseModal>
    </div>
  );
};
const StyledHeader = styled("header")(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "flex-end",
  overflow: "hidden",
}));
const InnerHeaderStyle = styled("div")(() => ({
  width: "60%",
  display: "flex",
  justifyContent: "space-between",
  gap: "120px",
  alignItems: "center",
}));
const StyledMainTag = styled("main")(() => ({
  marginTop: "16px",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
}));
const StyledSectionTag = styled("section")(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  gap: "8px",
}));
const FirstStyledUnorderedList = styled("ul")(() => ({
  listStyleType: "none",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  gap: "12px",
  "&:nth-of-type(4)": {
    marginBottom: "4px",
  },
}));
const SecondStyledUnorderedList = styled("ul")(() => ({
  listStyleType: "none",
  display: "flex",
  justifyContent: "flex-start",
  flexDirection: "column",
  gap: "12px",
}));
const ListStyled = styled("li")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: "6px",
}));
const CheckBoxStyles = styled(Checkbox)(() => ({
  padding: "0",
}));
const StyledSpanTag = styled("span")(() => ({
  color: "#919191",
  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "17.6px",
}));
const StyledButton = styled(Button)(() => ({
  width: "293px",
  borderRadius: "6px",
  boxShadow: "none",
  color: "#FFFFFF",
  display: "flex",
  alignItems: "center",
  justifyContent: "start",
  //   backgroundColor:
  //     style.backgroundColor === "#61BD4F"
  //       ? "#61BD4F"
  //       : style.backgroundColor === "#EB8900"
  //         ? "#EB8900"
  //         : style.backgroundColor === "#0079BF"
  //           ? "#0079BF"
  //           : style.backgroundColor === "#EB5A46"
  //             ? "#EB5A46"
  //             : "none",
  "&:hover": {
    color: "#FFFFFF",
  },
}));
