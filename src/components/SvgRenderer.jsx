import React from "react";

const SvgRenderer = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="36"
        height="36"
        fill="none"
        xmlnsV="https://vecta.io/nano"
      >
        <circle cx="18" cy="18" r="18" fill="#e4ecff" />

        <g fill="#376af5">
          <use xlinkHref="#B" />
          <use xlinkHref="#C" />
          <use xlinkHref="#D" />
          <use xlinkHref="#E" />
        </g>
        <g stroke="#376af5">
          <use xlinkHref="#B" />
          <use xlinkHref="#C" />
          <use xlinkHref="#D" />
          <use xlinkHref="#E" />
        </g>
        <defs>
          <path
            id="B"
            d="M18 10c-4.418 0-8 3.564-8 7.961s3.582 7.961 8 7.961 8-3.564 8-7.961-3.584-7.956-8-7.961zm0 14.785c-3.787 0-6.857-3.055-6.857-6.824s3.07-6.824 6.857-6.824 6.857 3.055 6.857 6.824-3.072 6.82-6.857 6.824z"
          />
          <path
            id="C"
            d="M15.143 17.961a1.14 1.14 0 0 0 1.143-1.137 1.14 1.14 0 1 0-2.286 0 1.14 1.14 0 0 0 1.143 1.137z"
          />
          <path
            id="D"
            d="M20.857 17.961A1.14 1.14 0 0 0 22 16.824a1.14 1.14 0 1 0-2.286 0 1.14 1.14 0 0 0 1.143 1.137z"
          />
          <path
            id="E"
            d="M20.188 19.883c-.189-.252-.547-.303-.8-.116l-.032.026a2.31 2.31 0 0 1-2.713 0c-.239-.205-.6-.179-.806.058s-.18.597.059.802l.032.026c1.223.93 2.921.93 4.144 0 .253-.188.305-.544.116-.796z"
          />
        </defs>
      </svg>
    </>
  );
};

export default SvgRenderer;
