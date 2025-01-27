import { styled } from "@mui/material";
import { Button } from "../components/UI/Button";
import { Input } from "../components/UI/input/Input";
import { useForm } from "react-hook-form";

export const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      email: "",
    },
  });

  const formValue = watch();

  const handleInputChange = (name, value) => {
    setValue(name, value, { shouldValidate: true });
  };

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <FullScreenContainer>
      <Container>
        <p>Forgot password?</p>
        <StyledTitle>
          A link will be sent to your Email, follow the link sent to the mail
        </StyledTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <StyledContainerMessage>
            <StyledInput
              type="email"
              placeholder="example@gmail.com"
              value={formValue.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              {...register("email", {
                required: "Email обязателен для заполнения",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Введите корректный email",
                },
              })}
            />
            {errors.email && (
              <ErrorMessage>{errors.email.message}</ErrorMessage>
            )}
          </StyledContainerMessage>
          <StyledButton type="submit" variant="cancel">
            {" "}
            Send{" "}
          </StyledButton>
        </form>
      </Container>
    </FullScreenContainer>
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
const FullScreenContainer = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  width: "100%",
}));
const Container = styled("div")(() => ({
  width: "460px",
  height: "194px",
  padding: "20px 28px 20px 20px",
  display: "flex",
  flexDirection: "column",
  gap: "14px",
  "& p": {
    fontSize: "20px",
    fontWeight: "500",
    color: "#222222",
  },
  "& form": {
    display: "flex",
    flexDirection: "column",
    alignItems: "end",
    gap: "18px",
  },
}));
const StyledButton = styled(Button)(() => ({
  width: "139px",
  height: "34px",
  backgroundColor: "#0079BF",
  color: "#FFFFFF",
}));
const StyledInput = styled(Input)(() => ({
  width: "412px",
  height: "32px",
}));
const StyledTitle = styled("span")(() => ({
  color: "#707070",
  fontSize: "14px",
}));
