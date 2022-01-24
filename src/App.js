import CourseForm from "./Components/CourseForm/CourseForm";
import CourseList from "./Components/CourseForm/CourseList";
import { useState } from "react";

const App = () => {
  const [userList, setuserList] = useState([]);
  //here onAddForm handler take two parameter because we have to input box to add or display on screen dynamically
  //so it take 2 argumnets uName, uAge and depend on prev state its first copy value through spread opeartor
  // and taking object {and append value there}
  const onAddFormHandler = (uName, uAge) => {
    setuserList((prevState) => {
      return [
        ...prevState,
        { id: Math.random().toString(), name: uName, age: uAge },
      ];
    });
  };
  return (
    <div>
      <CourseForm onAddForm={onAddFormHandler} />
      <CourseList users={userList} />
    </div>
  );
};

export default App;
