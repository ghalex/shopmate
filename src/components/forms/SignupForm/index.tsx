import * as React from "react";
import { FormControlLabel, Checkbox, Button, CircularProgress, TextField } from "@material-ui/core";
import { useForm } from "form-hooks";
import { SignupData } from "types";

interface Props {
  onSubmit: (data: SignupData) => void;
}

const SignupForm = ({ onSubmit, ...props }: Props) => {
  const { values, isSubmitting, errors, handleChange, handleSubmit } = useForm<SignupData>({
    initialValues: { name: "", email: "", password: "", retypePassword: "" },
    onSubmit: data => onSubmit(data),
    validate: data => {
      const res: { [key: string]: any } = {};

      if (data.password !== data.retypePassword) {
        res.retypePassword = "Password don't match";
      }

      return res;
    }
  });

  return (
    <form onSubmit={handleSubmit} {...props}>
      <TextField
        margin="normal"
        label="Name:"
        name="name"
        type="text"
        variant="outlined"
        value={values.name}
        onChange={handleChange}
        placeholder="ex. Master Yoda"
        fullWidth={true}
        required={true}
      />
      <TextField
        margin="normal"
        label="Email:"
        name="email"
        type="email"
        variant="outlined"
        autoComplete="email"
        value={values.email}
        onChange={handleChange}
        placeholder="ex. yoda@shopmate.ro"
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
        error={!!errors.retypePassword}
        fullWidth={true}
        required={true}
      />
      <TextField
        margin="normal"
        label="Retype password:"
        name="retypePassword"
        type="password"
        variant="outlined"
        autoComplete="current-password"
        value={values.retypePassword}
        onChange={handleChange}
        fullWidth={true}
        error={!!errors.retypePassword}
        required={true}
      />
      <Button
        type="submit"
        fullWidth={true}
        variant="contained"
        color="primary"
        disabled={isSubmitting}>
        {!isSubmitting && <span>Sign Up</span>}
        {isSubmitting && <CircularProgress size={24} />}
      </Button>
    </form>
  );
};

export default SignupForm;
