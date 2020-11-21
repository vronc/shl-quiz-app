import { css } from "@emotion/css";

const PlayerCard = ({ playerImg, playerName }) => {
  return (
    <div
      className={css`
        min-width: 50px;
        max-width: 350px;
        height: 450px;
        background-color: darkslategrey;
        border-radius: 10px;
        text-color: darkcyan;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        align-content: center;
      `}
    >
      <img src={playerImg} alt=""></img>
      <h1 color="white">{playerName}</h1>
    </div>
  );
};
export default PlayerCard;
