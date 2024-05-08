const CalendarIcon = ({ size, color }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" width={size} height={size}>
      <g
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.21406"
        clipPath="url(#a)"
        opacity="1"
      >
        <path d="M17.2099 4.17651H6.13962c-2.03798 0-3.6901 1.65212-3.6901 3.6901v9.22529c0 2.0379 1.65212 3.69 3.6901 3.69H17.2099c2.038 0 3.6901-1.6521 3.6901-3.69V7.86661c0-2.03798-1.6521-3.6901-3.6901-3.6901ZM2.44952 9.71161H20.9M7.98467 2.33142v3.6901-3.6901Zm7.38023 0v3.6901-3.6901Z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M.604431.486389h22.1406v22.1406H.604431z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CalendarIcon;
