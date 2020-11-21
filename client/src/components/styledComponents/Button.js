import { css } from "@emotion/css";

const Button = ({ text }) => {
  const color = "white";

  return (
    <div
      className={css`
        align-content: center;
        min-width: 100px;
        max-width: 250px;
        padding: 32px;
        background-color: hotpink;
        font-size: 24px;
        border-radius: 4px;
        &:hover {
          color: ${color};
        }
      `}
    >
      {text}
    </div>
  );
};
export default Button;
