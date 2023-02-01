interface InputProps {
  label: string;
  type: string;
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ label, type, value, onChange }) => {
  return (
    <div className="">
      <label className="">{label}</label>
      <input type={type} className="" value={value} onChange={onChange} />
    </div>
  );
};
export default Input;
