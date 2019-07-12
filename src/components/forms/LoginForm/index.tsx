import * as React from "react";
import { FormControlLabel, Checkbox, Button, CircularProgress, TextField } from "@material-ui/core";
import { useForm } from "form-hooks";
import { LoginData } from "types";

interface Props {
  onSubmit: (data: LoginData) => void;
}

const LoginForm = ({ onSubmit, ...props }: Props) => {
  const { values, isSubmitting, handleChange, handleSubmit } = useForm<LoginData>({
    initialValues: { email: "", password: "" },
    onSubmit: data => onSubmit(data),
    validate: data => ({})
  });

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        margin="normal"
        label="Email:"
        name="email"
        type="email"
        variant="outlined"
        autoComplete="email"
        value={values.email}
        onChange={handleChange}
        fullWidth={true}
        required={true}
      />
      <TextField
        margin="normal"
        label="Password:"
        name="password"
        type="password"
        variant="outlined"
        autoComplete="current-password"
        value={values.password}
        onChange={handleChange}
        fullWidth={true}
        required={true}
      />
      <Button
        type="submit"
        fullWidth={true}
        variant="contained"
        color="primary"
        disabled={isSubmitting}>
        {!isSubmitting && <span>Sign In</span>}
        {isSubmitting && <CircularProgress size={24} />}
      </Button>
    </form>
  );
};

export default LoginForm;
