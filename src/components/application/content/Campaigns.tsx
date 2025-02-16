import pixelSkullLogo from "../../../components/assets/pixelskull.png";
import Expanse from "../../../components/assets/campaigns/Expanse-Emblem.png";
import Miniseries from "../../../components/assets/campaigns/Miniseries-Emblem.png";
import LevelUp from "../../../components/assets/campaigns/LevelUp-Emblem.png";
import TabletopTurntable from "../../../components/assets/campaigns/TabletopTurntable-Emblem.png";

const Campaigns = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
        maxWidth: "350px",
        maxHeight: "80px",
        minHeight: "80px",
        gap: "10px",
      }}
    >
      <img src={Expanse} alt="Expanse Emblem" width={50} height={50} />
      <img src={Miniseries} alt="Miniseries Emblem" width={50} height={50} />
      <img src={LevelUp} alt="Level Up Emblem" width={50} height={50} />
      <img
        src={TabletopTurntable}
        alt="Tabletop Turntable Emblem"
        width={50}
        height={50}
      />
    </div>
  );
};

export default Campaigns;
