const Line = ({ color, width }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height="3" fill="none" style={{ width: '65%' }}>
      <path stroke={color} strokeWidth="2" d="M0 1.5h365" />
    </svg>
  );
};

export default Line;
