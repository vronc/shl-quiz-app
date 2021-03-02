import { Headline, Card, ImageCard } from "./styledComponents/Index";
import placeholder_player_image from "../assets/placeholder_player.png";
import { COLORS } from "../utils/Constants";

const PlayerCard = ({
  playerImg,
  playerName,
  playerNumber,
  showPlayerNumber,
  correctAnswerGiven,
  width,
}) => {
  return (
    <Card flexDirection="column" width={width}>
      <ImageCard src={playerImg || placeholder_player_image} alt="player" />
      <Headline>
        {playerName.first} {playerName.last}
      </Headline>
      {showPlayerNumber && (
        <Headline color={correctAnswerGiven ? COLORS.GREEN : COLORS.RED}>
          # {playerNumber}
        </Headline>
      )}
    </Card>
  );
};
export default PlayerCard;
