import logo from "./assets/pixelskull.png";
import About from "./application/content/About";
import Campaigns from "./application/content/Campaigns";
import CampaignLogos from "./assets/campaigns/Expanse-Emblem.png";
import youTubeLogo from "./assets/YouTube.png";
import shirt from "./assets/shirt.png";
const ExeArray = [
  {
    name: "About",
    image: logo,
    isOpen: true,
    Content: About,
  },
  {
    name: "Campaigns",
    image: CampaignLogos,
    isOpen: true,
    Content: Campaigns,
  },

  {
    name: "Channel",
    image: youTubeLogo,
    link: "https://www.youtube.com/@GrimstoneGamingGroup",
  },
  {
    name: "Merch",
    image: shirt,
    link: "https://ttrpgswag.com/pages/grimstonegaming",
  },
];

export default ExeArray;
