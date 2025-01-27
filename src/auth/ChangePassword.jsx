import { styled } from "@mui/material";
import { Icons } from "../assets";
import ImageSignUp from "../assets/images/SigIn.png";
import { Input } from "../components/UI/input/Input";
import { Button } from "../components/UI/Button";
import { useForm } from "react-hook-form";

export const ChangePassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      password: "",
      repeatPassword: "",
    },
  });

  const formValue = watch();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <StyledContainerLogo>
        <Icons.LogoTaskTracker />
        <StyledText>Task Tracker</StyledText>
      </StyledContainerLogo>
      <StyledContainerBox>
        <StyledWrapper>
          <p>Password</p>
          <StyledContainer>
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
              <StyledContainerMessage>
                <StyledInput
                  type="password"
                  placeholder="Password"
                  {...register("password", {
                    required: "Пароль обязателен для заполнения",
                    minLength: {
                      value: 6,
                      message: "Пароль должен содержать минимум 6 символов",
                    },
                  })}
                />
                {errors.password && (
                  <ErrorMessage>{errors.password.message}</ErrorMessage>
                )}
              </StyledContainerMessage>
              <StyledContainerMessage>
                <StyledInput
                  type="password"
                  placeholder="Repeat password"
                  {...register("repeatPassword", {
                    required: "Подтверждение пароля обязательно",
                    validate: (value) =>
                      value === formValue.password || "Пароли не совпадают",
                  })}
                />
                {errors.repeatPassword && (
                  <ErrorMessage>{errors.repeatPassword.message}</ErrorMessage>
                )}
              </StyledContainerMessage>
              <StyledButton type="submit" variant="cancel">
                Log In
              </StyledButton>
            </StyledForm>
          </StyledContainer>
        </StyledWrapper>
        <StyledImage src={ImageSignUp} alt="ImageSignUp" />
      </StyledContainerBox>
    </Container>
  );
};

const ErrorMessage = styled("span")(() => ({
  color: "red",
  fontSize: "13px",
  paddingLeft: "3px",
}));
const StyledContainerMessage = styled("div")(() => ({
  height: "54px",
  display: "flex",
  flexDirection: "column",
}));
const Container = styled("div")(() => ({
  display: "flex",
  gap: "50px",
}));
const StyledContainerBox = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "161px",
}));
const StyledWrapper = styled("section")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  "& p": {
    textAlign: "center",
    fontSize: "18px",
    fontWeight: "500",
    color: "#000000",
  },
}));
const StyledContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "30px",
  alignItems: "center",
}));
const StyledContainerLogo = styled("section")(() => ({
  display: "flex",
  gap: "8px",
  paddingLeft: "40px",
  paddingTop: "20px",

  "& p": {
    color: "#0079BF",
    fontWeight: "600",
    fontSize: "20px",
  },
}));
const StyledForm = styled("form")(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));
const StyledInput = styled(Input)(() => ({
  width: "321px",
  height: "32px",
}));
const StyledImage = styled("img")(() => ({
  width: "579px",
  height: "auto",
  objectFit: "cover",
}));
const StyledButton = styled(Button)(() => ({
  width: "139px",
  height: "34px",
  backgroundColor: "#0079BF",
  color: "#FFFFFF",
  marginTop: "10px",
}));
const StyledText = styled("p")(() => ({
  fontSize: "18px",
  fontWeight: "500",
  color: "#000000",
}));
