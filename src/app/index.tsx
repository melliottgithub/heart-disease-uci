
import React from "react";
import Form from "../components/form";

const App: React.FC = () => {
  //usestate
  

  return (
    <div className="flex-column m-auto max-width">
      <h1 className="flex-row justify-center">
        Predict Your Heart Disease
      </h1>
      <h3 className="flex-row justify-center">Medical Information</h3>
      <div className="flex-row justify-center">
        <Form onFormSubmit={() => {
          // handle form submit
            return console.log('form submitted');
            
        }} />
      </div>
    </div>
  );
};

export default App;
