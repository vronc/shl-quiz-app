import { H2, Card, ImageCard } from "./styledComponents/Index";
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
  const color =
    correctAnswerGiven === undefined
      ? COLORS.PRIMARY
      : correctAnswerGiven
      ? COLORS.CORRECT
      : COLORS.INCORRECT;

  return (
    <Card flexDirection="column" width={width} justifyContent="flex-start">
      <ImageCard
        src={playerImg || placeholder_player_image}
        alt="player"
        color={COLORS_BY_TEAM[team]}
      />
      {showPlayerName && (
        <H2 color={color}>{`${playerName.first} ${playerName.last}`}</H2>
      )}
      {showPlayerNumber && (
        <h3
          style={{
            marginTop: "1rem",
            color: color,
          }}
        >
          # {playerNumber}
        </h3>
      )}
      {showPlayerPosition && (
        <h3
          style={{
            marginTop: "1rem",
            color: color,
          }}
        >
          {playerPosition}
        </h3>
      )}
    </Card>
  );
};
export default PlayerCard;
