import acLogo from "../assets/picts/assassinsCreed.jpeg";
import acWallpaper from "../assets/picts/assassinsCreedWallpaper.png";
import farCryLogo from "../assets/picts/farCry.jpeg";
import farCryWallpaper from "../assets/picts/farCryWallpaper.jpg";
import princeOfPersiaLogo from "../assets/picts/princeOfPersia.jpeg";
import princeOfPersiaWallpaper from "../assets/picts/princeOfPersiaWallpaper.jpg";
import watchDogsLogo from "../assets/picts/watchDogs.jpeg";
import watchDogsWallpaper from "../assets/picts/watchDogsWallpaper.jpg";
import annoLogo from "../assets/picts/anno.jpeg";
import annoWallpaper from "../assets/picts/annoWallpaper.jpg";
import theCrewLogo from "../assets/picts/theCrew.jpeg";
import theCrewWallpaper from "../assets/picts/theCrewWallpaper.jpg";
import theDivisionLogo from "../assets/picts/theDivision.jpeg";
import theDivisionWallpaper from "../assets/picts/theDivisionWallpaper.jpg";
import ghostReconLogo from "../assets/picts/ghostRecon.jpeg";
import ghostReconWallpaper from "../assets/picts/ghostReconWallpaper.jpeg";

const Worlds = () => {
  const worlds = [
    {
      id: 1,
      pict: acLogo,
      wallpaper: acWallpaper,
    },
    {
      id: 2,
      pict: farCryLogo,
      wallpaper: farCryWallpaper,
    },
    {
      id: 3,
      pict: princeOfPersiaLogo,
      wallpaper: princeOfPersiaWallpaper,
    },
    {
      id: 4,
      pict: watchDogsLogo,
      wallpaper: watchDogsWallpaper,
    },
    {
      id: 5,
      pict: annoLogo,
      wallpaper: annoWallpaper,
    },
    {
      id: 6,
      pict: theCrewLogo,
      wallpaper: theCrewWallpaper,
    },
    {
      id: 7,
      pict: theDivisionLogo,
      wallpaper: theDivisionWallpaper,
    },
    {
      id: 8,
      pict: ghostReconLogo,
      wallpaper: ghostReconWallpaper,
    },
  ];

  const listWorlds = worlds.map((world, index) => (
    <div key={index} className="col-lg-3">
      <div className="card">
        <div className="card-body">
          <img
            src={world.pict}
            className="img-fluid w-100"
          />
        </div>
      </div>
    </div>
  ));

  return (
    <div id="worlds">
      <div className="row">{listWorlds}</div>
    </div>
  );
};

export default Worlds;

