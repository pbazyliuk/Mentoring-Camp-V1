import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import firebase from "firebase";
import * as actions from "../../actions/index";
import { auth, database, googleAuthProvider } from "../../utils/firebase";

import styles from "./Register.scss";

function validate(values) {
  console.log(values);

  const errors = {};

  if (!values.firstname) {
    errors.firstname = "Required field";
  } else if (values.firstname.length < 3) {
    errors.firstname = "At least 3 characters";
  } else if (values.firstname.length > 10) {
    errors.firstname = "Less than 10 characters";
  }

  if (!values.lastname) {
    errors.lastname = "Required field";
  } else if (values.lastname.length < 3) {
    errors.lastname = "At least 3 characters";
  } else if (values.lastname.length > 10) {
    errors.lastname = "Less than 10 characters";
  }

  if (!values.email) {
    errors.email = "Required field";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  } else if (values.email.length > 30) {
    errors.email = "Must be 30 characters or less";
  }

  if (!values.password) {
    errors.password = "Required field";
  } else if (values.password.length < 6) {
    errors.password = "Must be at least 6 characters";
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Required field";
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "Passwords must be equal";
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Required field";
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "Passwords must be equal";
  }

  if (!values.selectPosition) {
    errors.selectPosition = "Required field";
  }

  return errors;
}

var arr = [
  "",
  "junior software developer",
  "middle software developer",
  "senior software developer"
];

var options = arr.map((item, index) => {
  return (
    <option disabled={index === 0 ? "disabled" : ""} key={index} value={item}>
      {item}
    </option>
  );
});
console.log(options);

const renderSelectField = ({
  input,
  label,
  name,
  lbClassName,
  inClassName,
  meta: { touched, error, warning }
}) =>
  <div>
    <label className={lbClassName}>
      {label}
    </label>
    <div>
      <select
        name={name}
        className={inClassName}
        {...input}
        placeholder={label}
      >
        {options}
      </select>
      {touched &&
        ((error &&
          <span>
            {error}
          </span>) ||
          (warning &&
            <span>
              {warning}
            </span>))}
    </div>
  </div>;

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error },
  id,
  lbText,
  lbClassName,
  inClassName,
  contClassName,
  placeholder
}) => {
  return (
    <div className={contClassName}>
      <label className={lbClassName} htmlFor={id}>
        {lbText}
      </label>
      <div className={styles["input-container"]}>
        <input
          {...input}
          id={id}
          name={lbText}
          type={type}
          placeholder={placeholder}
          className={inClassName}
        />
        {touched &&
          error &&
          <div className={styles["error"]}>
            {error}
          </div>}
      </div>
    </div>
  );
};

class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleSubmit, valid } = this.props;
    console.error(valid);

    return (
      <div className={styles["login-form-container"]}>
        <form
          onSubmit={handleSubmit}
          className={styles["login-form"]}
          action=""
        >
          <div className={styles["login-form-name"]}>Register Form</div>

          <Field
            lbClassName={styles["login-form-label"]}
            inClassName={styles["login-form-input-narrow"]}
            contClassName={styles["input-container-narrow"]}
            lbText="Firstname"
            name="firstname"
            component={renderField}
            type="text"
            id="firstnameField"
            placeholder="Input Firstname"
          />

          <Field
            lbClassName={styles["login-form-label"]}
            inClassName={styles["login-form-input-narrow"]}
            contClassName={styles["input-container-narrow"]}
            lbText="Lastname"
            name="lastname"
            component={renderField}
            type="text"
            id="lastnameField"
            placeholder="Input Lastname"
          />
          <div className="clearfix" />
          <Field
            lbClassName={styles["login-form-label"]}
            inClassName={styles["login-form-input"]}
            lbText="Email"
            name="email"
            component={renderField}
            type="text"
            id="emailField"
            placeholder="Input Email"
          />

          <Field
            lbClassName={styles["login-form-label"]}
            inClassName={styles["login-form-input"]}
            lbText="Password"
            name="password"
            component={renderField}
            type="password"
            id="passwordField"
            placeholder="Input Password"
          />

          <Field
            lbClassName={styles["login-form-label"]}
            inClassName={styles["login-form-input"]}
            lbText="Confirm Password"
            name="confirmPassword"
            component={renderField}
            type="password"
            id="confirmPasswordField"
            placeholder="Input Confirm Password"
          />

          <Field
            component={renderSelectField}
            name="selectPosition"
            label="Select Position"
            lbClassName={styles["login-form-label"]}
            inClassName={styles["login-form-input"]}
          />

          <button
            type="submit"
            disabled={!valid}
            className={styles["login-form-button"]}
          >
            Register
          </button>
        </form>
      </div>
    );
  }
}

Register = reduxForm({
  form: "register",
  validate
})(Register);

export default connect(null, actions)(Register);
