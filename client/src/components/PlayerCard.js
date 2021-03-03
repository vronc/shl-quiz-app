import { Headline, Card, ImageCard } from "./styledComponents/Index";
import placeholder_player_image from "../assets/placeholder_player.png";
import { COLORS, COLORS_BY_TEAM } from "../utils/Constants";

const PlayerCard = ({
  playerImg,
  playerName,
  playerNumber,
  showPlayerNumber,
  correctAnswerGiven,
  width,
  team,
}) => {
  return (
    <Card flexDirection="column" width={width}>
      <ImageCard
        src={playerImg || placeholder_player_image}
        alt="player"
        color={COLORS_BY_TEAM[team]}
      />
      <Headline>
        {playerName.first}
        <br />
        {playerName.last}
      </Headline>
      {showPlayerNumber && (
        <Headline color={correctAnswerGiven ? COLORS.CORRECT : COLORS.RED}>
          # {playerNumber}
        </Headline>
      )}
    </Card>
  );
};
export default PlayerCard;
