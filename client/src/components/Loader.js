/** @jsxImportSource @emotion/react */
import * as React from "react";
import { keyframes, css } from "@emotion/react";

const bounce = keyframes`
  0%, 100% {transform: scale(0)}
  50% {transform: scale(1.0)}
`;

const Loader = ({ color, size }) => {
  const style = (i) => {
    return css`
      position: absolute;
      height: ${size};
      width: ${size};
      background-color: ${color};
      border-radius: 100%;
      opacity: 0.6;
      top: 0;
      left: 0;
      animation-fill-mode: both;
      animation: ${bounce} 2.1s ${i === 1 ? "1s" : "0s"} infinite ease-in-out;
    `;
  };

  const wrapper = () => {
    return css`
      position: relative;
      width: 50px;
      height: 50px;
    `;
  };

  return (
    <div css={[wrapper(), css]}>
      <div css={style(1)} />
      <div css={style(2)} />
    </div>
  );
};

export default Loader;
