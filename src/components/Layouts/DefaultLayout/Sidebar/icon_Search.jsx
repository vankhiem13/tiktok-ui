const ClockIcon = () => (
  <svg
    className="w-[16px] h-[16px] shrink-0"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path
      fill="#161823"
      fillOpacity="0.34"
      d="M.8 8a7.2 7.2 0 1 1 14.4 0A7.2 7.2 0 0 1 .8 8m9.764 2.853c.15.106.359.069.464-.082l.612-.874a.333.333 0 0 0-.082-.464L9.01 7.65a.33.33 0 0 1-.143-.273V4.334a.333.333 0 0 0-.333-.333H7.467a.333.333 0 0 0-.333.333v3.771c0 .218.106.421.284.546z"
    />
  </svg>
);

const DeleteIcon = () => (
  <svg
    className="w-[16px] h-[16px] shrink-0 ml-auto"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path
      fill="#161823"
      fillOpacity="0.34"
      d="M7.057 8 3.431 4.374a.333.333 0 0 1 0-.472l.472-.471c.13-.13.34-.13.47 0L8 7.057l3.626-3.626c.13-.13.342-.13.472 0l.471.471c.13.13.13.342 0 .472L8.943 8l3.626 3.626c.13.13.13.341 0 .472l-.471.471a.333.333 0 0 1-.472 0L8 8.943l-3.626 3.626a.333.333 0 0 1-.471 0l-.472-.471a.333.333 0 0 1 0-.472z"
    />
  </svg>
);

const DotIcon = () => (
  <div className="w-[16px] h-[16px] flex shrink-0 justify-center items-center">
    <div className="w-[6px] h-[6px] rounded-full bg-[rgba(22,24,35,0.34)]"></div>
  </div>
);

const ArrowIcon = () => (
  <svg
    className="w-[16px] h-[16px] shrink-0"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path
      fill="#FE2C55"
      fillRule="evenodd"
      d="M8.333.507a.437.437 0 0 0-.666 0L1.105 8.209a.437.437 0 0 0 .333.721h3.529v5.86c0 .24.196.437.437.437H10.6a.437.437 0 0 0 .437-.438V8.93h3.526a.437.437 0 0 0 .333-.72z"
      clipRule="evenodd"
    />
  </svg>
);

const TrendIcon = () => (
  <svg
    className="w-[16px] h-[16px] shrink-0"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 16 14"
  >
    <path
      fill="#FE2C55"
      fillRule="evenodd"
      d="M5.461 5.026a.83.83 0 0 1 .642.098l3.61 2.221 3.879-6.57 1.148.679a.333.333 0 0 1 .118.456l-4.14 7.014a.833.833 0 0 1-1.155.286L5.961 6.993l-3.906 6.8a.333.333 0 0 1-.455.123l-.867-.498a.333.333 0 0 1-.123-.455l4.334-7.545a.83.83 0 0 1 .517-.392"
      clipRule="evenodd"
    />
    <path
      fill="#FE2C55"
      fillRule="evenodd"
      d="m10.585 1.86 3.97-1.77a.358.358 0 0 1 .49.282l.453 4.327a.258.258 0 0 1-.387.25L10.557 2.32a.256.256 0 0 1 .028-.46"
      clipRule="evenodd"
    />
  </svg>
);


export { ClockIcon, DeleteIcon, DotIcon, ArrowIcon, TrendIcon };