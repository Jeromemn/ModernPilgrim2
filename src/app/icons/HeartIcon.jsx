const HeartIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none">
      <g filter="url(#a)">
        <path
          fill="#000"
          fillOpacity=".2"
          d="M4.82404 17.7261C1.50296 13.298 2.60999 6.65583 8.14513 4.44177c5.53517-2.21405 8.85627 2.21406 9.96327 4.42812 1.107-2.21406 5.5351-6.64217 11.0703-4.42812 5.5351 2.21406 5.5351 8.85623 2.214 13.28433-3.321 4.4281-13.2843 13.2844-13.2843 13.2844S8.14513 22.1542 4.82404 17.7261Z"
        />
        <path
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.21406"
          d="M4.82404 17.7261C1.50296 13.298 2.60999 6.65583 8.14513 4.44177c5.53517-2.21405 8.85627 2.21406 9.96327 4.42812 1.107-2.21406 5.5351-6.64217 11.0703-4.42812 5.5351 2.21406 5.5351 8.85623 2.214 13.28433-3.321 4.4281-13.2843 13.2844-13.2843 13.2844S8.14513 22.1542 4.82404 17.7261Z"
        />
      </g>
      <defs>
        <filter
          id="a"
          width="35.1265"
          height="31.6006"
          x=".746914"
          y="1.62393"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation=".553515" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_3214" />
          <feBlend in="SourceGraphic" in2="effect1_backgroundBlur_1_3214" result="shape" />
        </filter>
      </defs>
    </svg>
  );
};

export default HeartIcon;
