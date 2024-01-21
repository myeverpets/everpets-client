import { ChangeEvent, FC } from 'react';

interface InputProps {
  type: 'text' | 'number' | 'email' | 'password';
  label: string;
  value: string | number;
  name: string;
  placeholder: string;
  error: boolean;
  disabled?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  positionLeft?: string;
  positionTop?: string;
}

const Input: FC<InputProps> = ({
  type,
  label,
  value,
  name,
  placeholder,
  error,
  disabled,
  onChange,
  positionLeft,
  positionTop,
}) => {
  const wrapperStyle = {
    left: positionLeft,
    top: positionTop,
  };

  return (
    <div className="input-wrapper" style={wrapperStyle}>
      <label htmlFor={name} className="text-base font-bold font-raleway">
        {label}
      </label>
      <input
        type={type}
        id={name}
        value={value.toString()}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        className="h-10 w-[350px] pl-[11px] pr-[11px] py-[11px] bg-white rounded-[5px] border-2 border-red-400 justify-start items-center inline-flex text-base font-bold font-raleway"
      />
      {error && (
        <p className="error text-base font-bold font-raleway">
          Input field can't be empty!
        </p>
      )}
    </div>
  );
};

export default Input;
