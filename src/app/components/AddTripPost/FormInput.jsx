import { useState } from 'react';
import { Money } from '@/app/icons';

const FormInput = ({ label, type, name, value, handleChange, require, placeholder, isBudget }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <label className="block">
      <span className="block text-black">{label}</span>
      <div className={`${isFocused ? 'border-animate border-3' : ''} ${isBudget ? 'hidden' : ''}`}>
        <input
          className={`peer focus:outline-none border border-black w-full p-2 rounded-xl ${
            isFocused ? 'border-animate' + ' border-3' : ''
          } ${isBudget ? 'hidden' : ''}`}
          placeholder={placeholder}
          required={require}
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          spellCheck
        />
      </div>
      {isBudget && (
        <div className={`flex border border-black p-2 rounded-xl ${isFocused ? 'border-animate border-3' : ''}`}>
          <Money />
          <input
            className={`peer focus:outline-none w-full  ${isFocused ? 'border-animate' + ' border-3' : ''}`}
            placeholder={placeholder}
            required={require}
            type={type}
            name={name}
            value={value}
            onChange={handleChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            spellCheck
          />
        </div>
      )}
      <p className="mt-2 invisible peer-invalid:visible text-black text-sm"> Please Provide a {name} </p>
    </label>
  );
};

export default FormInput;
