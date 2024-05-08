const FormInput = ({ label, type, name, value, handleChange, require, placeholder, isBudget, multiline }) => {
  return (
    <label className="block">
      <span className="block text-black">{label}</span>
      <input
        className={`peer focus:outline-none border-b-2 border-black bg-transparent w-80 p-1 placeholder:text-xl text-xl placeholder:text-black/70  ${multiline ? 'hidden' : ''}`}
        placeholder={placeholder}
        required={require}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        spellCheck
      />
      {multiline && (
        <textarea
          className={`peer focus:outline-none border-b-2 border-black w-full p-2 bg-transparent resize-none  placeholder:text-xl placeholder:text-black/70 text-xl h-28
           ${isBudget ? 'hidden' : ''}`}
          placeholder={placeholder}
          required={require}
          name={name}
          value={value}
          onChange={handleChange}
          spellCheck
        />
      )}
      <p className="mt-2 invisible peer-invalid:visible text-black text-sm"> Please Provide a {name} </p>
    </label>
  );
};

export default FormInput;
