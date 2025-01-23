import { styled } from "@mui/material";
import { Input } from "../UI/input/Input";
import Button from "../UI/Button";
import { useForm } from "react-hook-form";

export const ProfileForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      name: "",
      fullName: "",
      email: "",
      password: "",
      repeatPassword: "",
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
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledWrapperInput>
          <StyledContainerMessage>
            <StyledInput
              placeholder="Name"
              value={formValue.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              {...register("name", {
                required: "Имя обязательно для заполнения",
                minLength: {
                  value: 2,
                  message: "Имя должно быть не менее 2 символов",
                },
              })}
            />
            {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
          </StyledContainerMessage>
          <StyledContainerMessage>
            <StyledInput
              placeholder="Surname"
              value={formValue.fullName}
              onChange={(e) => handleInputChange("fullName", e.target.value)}
              {...register("fullName", {
                required: "Фамилия обязательна для заполнения",
                minLength: {
                  value: 2,
                  message: "Фамилия должна быть не менее 2 символов",
                },
              })}
            />
            {errors.fullName && (
              <ErrorMessage>{errors.fullName.message}</ErrorMessage>
            )}
          </StyledContainerMessage>
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
        </StyledWrapperInput>
        <StyledWrapperInputPassword>
          <StyledContainerMessage>
            <StyledInputPassword
              type="password"
              placeholder="Password"
              value={formValue.password}
              onChange={(e) => handleInputChange("password", e.target.value)}
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
            <StyledInputPassword
              type="password"
              placeholder="Repeat password"
              value={formValue.repeatPassword}
              onChange={(e) =>
                handleInputChange("repeatPassword", e.target.value)
              }
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

          <StyledButtonWrapper>
            <StyledButtonSave type="submit">Save</StyledButtonSave>
          </StyledButtonWrapper>
        </StyledWrapperInputPassword>
      </StyledForm>
    </>
  );
};
const StyledContainerMessage = styled("div")(() => ({
  height: "40px",
  display: "flex",
  flexDirection: "column",
  gap: "2px",
}));
const StyledForm = styled("form")(() => ({
  display: "flex",
  gap: "30px",
}));

const StyledWrapperInput = styled("section")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
}));

const StyledInput = styled(Input)(() => ({
  width: "395px",
  height: "32px",
}));

const StyledWrapperInputPassword = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
}));

const StyledInputPassword = styled(Input)(() => ({
  width: "321px",
  height: "32px",
}));

const StyledButtonWrapper = styled("div")(() => ({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "flex-end",
}));

const StyledButtonSave = styled(Button)(() => ({
  width: "64px",
  height: "34px",
  backgroundColor: "#0079BF",
  color: "#FFFFFF",
  fontSize: "14px",
}));

const ErrorMessage = styled("span")(() => ({
  color: "red",
  fontSize: "13px",
  paddingLeft: "3px",
}));
