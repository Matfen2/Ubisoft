import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';

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

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

import '../styles/index.scss';

import { EffectFade, Navigation } from 'swiper/modules';

const Main = () => {
  const [currentWallpaper, setCurrentWallpaper] = useState(acWallpaper);

  const showWorld = (e, wallpaper) => {
    e.preventDefault();
    setCurrentWallpaper(wallpaper);
  };

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

  const worldsChunks = [];
  for (let i = 0; i < worlds.length; i += 4) {
    worldsChunks.push(worlds.slice(i, i + 4));
  }

  return (
    <div id="worlds" style={{ backgroundImage: `url(${currentWallpaper})` }}>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation]}
        className="mySwiper"
      >
        {worldsChunks.map((chunk, index) => (
          <SwiperSlide key={index}>
            <div className="row">
              {chunk.map((world) => (
                <div key={world.id} className="col-lg-3">
                  <img
                    src={world.pict}
                    className="img-fluid w-100"
                    onMouseEnter={(e) => showWorld(e, world.wallpaper)}
                  />
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Main;

