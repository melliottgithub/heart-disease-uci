import React, { useState } from 'react';
import Button from '../../widgets/button';
import Card from '../../widgets/card';
import Flex from '../../widgets/flex';
import Select, { SelectListOption } from '../../widgets/select';



interface FormData {
  model: string;
  age: number;
  sex: number;
  cp: number;
  chol: number;
  fbs: number;
  restecg: number;
  thalach: number;
  exang: number;
  thal: number;
}

const initialFormData: FormData = {
  model: '',
  age: 67,
  sex: 1,
  cp: 4,
  chol: 229,
  fbs: 0,
  restecg: 2,
  thalach: 129,
  exang: 1,
  thal: 7
};

const ageOptions: SelectListOption[] = [
  { label: '30', value: '30' },
  { label: '40', value: '40' },
  { label: '50', value: '50' },
  { label: '60', value: '60' },
  { label: '70', value: '70' },
  { label: '80', value: '80' }
];


const sexOptions: SelectListOption[] = [
  { label: 'Male', value: '1' },
  { label: 'Female', value: '0' }
];

const cpOptions: SelectListOption[] = [
  { label: 'Typical Angina', value: '1' },
  { label: 'Atypical Angina', value: '2' },
  { label: 'Non-Anginal Pain', value: '3' },
  { label: 'Asymptomatic', value: '4' }
];

const cholOptions: SelectListOption[] = [
  { label: '100', value: '100' },
  { label: '200', value: '200' },
  { label: '300', value: '300' },
  { label: '400', value: '400' },
  { label: '500', value: '500' },
  { label: '600', value: '600' },

]

const fbsOptions: SelectListOption[] = [
  { label: 'True', value: '1' },
  { label: 'False', value: '0' }
];

const restecgOptions: SelectListOption[] = [
  { label: 'Normal', value: '0' },
  { label: 'ST-T Wave Abnormality', value: '1' },
  { label: 'Left Ventricular Hypertrophy', value: '2' }
];

const thalachOptions: SelectListOption[] = [
  { label: '100', value: '100' },
  { label: '200', value: '200' },
];

const exangOptions: SelectListOption[] = [
  { label: 'Yes', value: '1' },
  { label: 'No', value: '0' }
];

const thalOptions: SelectListOption[] = [
  { label: 'Normal', value: '3' },
  { label: 'Fixed Defect', value: '6' },
  { label: 'Reversable Defect', value: '7' }
];
type FormProps = {
  onFormSubmit: () => void;
};
const Form: React.FC<FormProps> = (onFormSubmit ) => {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    fetch('https://b7slwkrm25wuxx2lbgr6cuzise0zypvd.lambda-url.us-west-2.on.aws/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        ...formData
      })
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  };

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <Flex flexDirection='column' rowGap='8px'>
          <Select
            options={ageOptions}
            name="age"
            value={formData.age}
            onItemSelect={e=>console.log(e)}
            placeholder="Age"
          />
          <Select
            options={sexOptions}
            name="sex"
            value={formData.sex}
            onChange={handleSelect}
            placeholder="Sex"
          />
          <Select
            options={cpOptions}
            name="cp"
            value={formData.cp}
            onChange={handleSelect}
            placeholder="Chest Pain Type"
          />
          <Select
            options={cholOptions}
            name="chol"
            value={formData.chol}
            onChange={handleSelect}
            placeholder="Serum Cholestoral"
          />
          <Select
            options={fbsOptions}
            name="fbs"
            value={formData.fbs}
            onChange={handleSelect}
            placeholder="Fasting Blood Sugar"
          />
          <Select
            options={restecgOptions}
            name="restecg"
            value={formData.restecg}
            onChange={handleSelect}
            placeholder="Resting Electrocardiographic Results"
          />
          <Select
            options={thalachOptions}
            name="thalach"
            value={formData.thalach}
            onChange={handleSelect}
            placeholder="Maximum Heart Rate Achieved"
          />
          <Select
            options={exangOptions}
            name="exang"
            value={formData.exang}
            onChange={handleSelect}
            placeholder="Exercise Induced Angina"
          />
          <Select
            options={thalOptions}
            name="thal"
            value={formData.thal}
            onChange={handleSelect}
            placeholder="Thal"
          />
          <Button onClick={e => e.target} variant={'primary'}>Submit</Button>
        </Flex>
      </Card>
    </form>
  );
}
export default Form;
