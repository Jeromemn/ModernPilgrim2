const DropDown = ({ options, selected, onChange }) => {
  return (
    <select value={selected} onChange={onChange}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default DropDown;
