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
    <Card
      minHeight={showPlayerNumber && "30rem"}
      flexDirection="column"
      width={width}
      justifyContent={"flex-start"}
    >
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
        <h2
          style={{
            color: correctAnswerGiven ? COLORS.CORRECT : COLORS.RED,
            marginTop: "1rem",
          }}
        >
          # {playerNumber}
        </h2>
      )}
    </Card>
  );
};
export default PlayerCard;
