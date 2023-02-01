import React, { useState } from "react";
import { Button } from "../../widgets/button";
import Input from "../../widgets/input";
import Select from "../../widgets/select";

interface FormProps {
  onFormSubmit: (age: string, gender: string, chestPain: string, bloodPressure: string) => void;
}

const Form: React.FC<FormProps> = ({ onFormSubmit }) => {
  const [age, setAge] = useState("0");
  const [gender, setGender] = useState("male");
  const [chestPain, setChestPain] = useState("");
  const [bloodPressure, setBloodPressure] = useState("");

  return (
    <form>
    <Input
      label="Age"
      type="number"
      value={age}
      onChange={(e) => setAge(e.target.value)}
    />
    <Select
      label="Gender"
      value={gender}
      onChange={(e) => setGender(e.target.value)}
    />
    <Input
      label="Chest Pain"
      type="text"
      value={chestPain}
      onChange={(e) => setChestPain(e.target.value)}
    />
    <Input
      label="Resting Blood Pressure"
      type="number"
      value={bloodPressure}
      onChange={(e) => setBloodPressure(e.target.value)}
    />
    <Button variant="primary" type="button">
      Predict
    </Button>
  </form>
  );
};
export default Form;
