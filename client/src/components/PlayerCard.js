import { Headline, Card } from "./styledComponents/Index";

const PlayerCard = ({ playerImg, playerName, playerNumber }) => {
  return (
    <Card flexDirection="column">
      <img src={playerImg} alt="player"></img>
      <Headline>{playerName}</Headline>
      <Headline># {playerNumber}</Headline>
    </Card>
  );
};
export default PlayerCard;
