import { Headline, Card, ImageCard } from "./styledComponents/Index";
import placeholder_player_image from "../assets/placeholder_player.png";
import { COLORS, COLORS_BY_TEAM } from "../utils/Constants";

const PlayerCard = ({
  playerImg,
  playerName,
  playerNumber,
  playerPosition,
  showPlayerNumber,
  showPlayerName,
  showPlayerPosition,
  correctAnswerGiven,
  width,
  team,
}) => {
  return (
    <Card flexDirection="column" width={width} justifyContent="flex-start">
      <ImageCard
        src={playerImg || placeholder_player_image}
        alt="player"
        color={COLORS_BY_TEAM[team]}
      />
      {showPlayerName && (
        <Headline>
          {playerName.first}
          <br />
          {playerName.last}
        </Headline>
      )}
      {showPlayerNumber && (
        <h3
          style={{
            color: correctAnswerGiven ? COLORS.CORRECT : COLORS.INCORRECT,
            marginTop: "1rem",
          }}
        >
          # {playerNumber}
        </h3>
      )}
      {showPlayerPosition && (
        <h3
          style={{
            color: correctAnswerGiven ? COLORS.CORRECT : COLORS.INCORRECT,
            marginTop: "1rem",
          }}
        >
          {playerPosition}
        </h3>
      )}
    </Card>
  );
};
export default PlayerCard;
