import { Headline, Card, ImageCard } from "./styledComponents/Index";

const PlayerCard = ({ playerImg, playerName, playerNumber }) => {
  const showPlayerNumber = true;
  return (
    <Card flexDirection="column">
      <ImageCard src={playerImg} alt="player" />
      <Headline>
        {playerName.first} {playerName.last}
      </Headline>
      {showPlayerNumber && <Headline># {playerNumber}</Headline>}
    </Card>
  );
};
export default PlayerCard;
