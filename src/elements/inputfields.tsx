import { ChangeEvent, FC } from 'react';

interface InputProps {
  type: 'text' | 'number' | 'email' | 'password';
  label: string;
  name: string;
  placeholder: string;
  error: boolean;
  disabled?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({
  type,
  label,
  name,
  placeholder,
  error,
  disabled,
  onChange,
}) => {
  return (
    <div className="input-wrapper">
      <label htmlFor={name} className="text-base font-bold font-['Raleway']">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        className="w-[350px] h-[40px] bg-white rounded-[5px] border-2 border-red-400 pl-[11px] pr-[11px] text-base font-bold font-['Raleway']"
      />
      {error && (
        <p className="error text-base font-bold font-['Raleway']">
          Input field can't be empty!
        </p>
      )}
    </div>
  );
};

export default Input;
