interface SelectProps {
    label: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  }
  
  const Select: React.FC<SelectProps> = ({ label, value, onChange }) => {
    return (
      <div className="">
        <label className="">{label}</label>
        <select className="" value={value} onChange={onChange}>
          <option>Female</option>
          <option>Male</option>
        </select>
      </div>
    );
  };
export default Select;  