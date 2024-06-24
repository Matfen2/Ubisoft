import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';

import Games from "../assets/picts/ubisoftGames.jpg";
import Studio from "../assets/picts/ubisoftStudio.jpeg";
import Missions from "../assets/picts/ubisoftMissions.jpeg";

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

import '../styles/index.scss';

import { EffectFade, Pagination } from 'swiper/modules';

const Main = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [activeTab, setActiveTab] = useState('Jeux');

  const toggleOffcanvas = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  const openTabs = (evt, studioTabs) => {
    let i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(studioTabs).style.display = "block";
    evt.currentTarget.className += " active";
    setActiveTab(studioTabs);
  };

  return (
    <div id="main">
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide-container">
            <img src={Missions} className='img-fluid w-100' />
            <div className="text-overlay">
              <h3 className='title'>Missions</h3>
              <p className='description'>Découvre les objectifs de l&apos;éditeur</p>
            </div>
            <button type='button' id='btnBar' onClick={toggleOffcanvas}>
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-container">
            <img src={Games} className='img-fluid w-100' />
            <div className="text-overlay">
              <h3 className='title'>Jeux</h3>
              <p className='description'>Jouer à de multitudes de jeux innovants et variés.</p>
            </div>
            <button type='button' id='btnBar' onClick={toggleOffcanvas}>
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-container">
            <img src={Studio} className='img-fluid w-100' />
            <div className="text-overlay">
              <h3 className='title'>Studios</h3>
              <p className='description'>Découvrez nos équipes talentueuses</p>
            </div>
            <button type='button' id='btnBar' onClick={toggleOffcanvas}>
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
      <div
        className={`offcanvas offcanvas-start offcanvas-animate ${showOffcanvas ? 'show' : ''}`}
        tabIndex="-1"
        id="showCanvas"
        aria-labelledby="offcanvasLabel"
      >
        <div className="offcanvas-header">
          <button
            type="button"
            className="btn-close"
            onClick={toggleOffcanvas}
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="tab">
            <button className={`tablinks ${activeTab === 'Jeux' ? 'active' : ''}`} onMouseOver={(e) => openTabs(e, 'Jeux')}>Jeux</button>
            <button className={`tablinks ${activeTab === 'Studios' ? 'active' : ''}`} onMouseOver={(e) => openTabs(e, 'Studios')}>Studios</button>
            <button className={`tablinks ${activeTab === 'Missions' ? 'active' : ''}`} onMouseOver={(e) => openTabs(e, 'Missions')}>Missions</button>
          </div>

          <div id="Jeux" className="tabcontent" style={{ display: activeTab === 'Jeux' ? 'block' : 'none' }}>
            <h3>Jeux</h3>
            <p>Tous les jeux du moment</p>
          </div>

          <div id="Studios" className="tabcontent" style={{ display: activeTab === 'Studios' ? 'block' : 'none' }}>
            <h3>Studios</h3>
            <p>Studios</p>
          </div>

          <div id="Missions" className="tabcontent" style={{ display: activeTab === 'Missions' ? 'block' : 'none' }}>
            <h3>Missions</h3>
            <p>Objectifs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

