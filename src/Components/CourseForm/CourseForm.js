import Card from "./UI/Card";
import { useState } from "react";
import styles from "./CourseForm.module.css";
import Button from "./UI/Button";
import Error from "./UI/Error";

const CourseForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();
  const userNameChange = (event) => {
    //console.log(event.target.value);
    setEnteredName(event.target.value);
  };
  const AgeChange = (event) => {
    //console.log(event.target.value);
    setEnteredAge(event.target.value);
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredName.trim().length === 0) {
      console.log("please enter name");
      setError({
        title: "Inavalid Input",
        message: "please enter the name",
      });
      return;
    } else if (enteredAge.trim().length === 0) {
      console.log("please enter age");
      setError({
        title: "Inavalid Input",
        message: "please enter the age",
      });
      return;
    } else if (+enteredAge < 1) {
      console.log("please enter valid age");
      setError({
        title: "Inavalid Input",
        message: "please enter the age (>0)",
      });
      return;
    }
    //here enteredage istreated as string but it is number then also its works in js but you can convert explicitly by adding + sign
    //or
    // if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
    //   console.log("please enter name and age");
    //   return;
    // }
    // if (enteredAge < 1) {
    //   console.log("please enter valid age");
    //   return;
    // }
    console.log(enteredName, enteredAge);
    props.onAddForm(enteredName, enteredAge);
    setEnteredName("");
    setEnteredAge("");
  };
  const errorHandler = () => {
    setError(null);
  };
  //card here is a wrapping method conatiner
  return (
    <div>
      {error && (
        <Error
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={formSubmitHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredName}
            onChange={userNameChange}
          ></input>
          <label htmlFor="age">Age(years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={AgeChange}
          ></input>

          <Button type="submit">Add Users</Button>
        </form>
      </Card>
    </div>
  );
};
export default CourseForm;
