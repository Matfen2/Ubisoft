import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';

import Games from "../assets/picts/ubisoftGames.jpg";
import Studio from "../assets/picts/ubisoftStudio.jpeg";
import Missions from "../assets/picts/ubisoftMissions.jpeg";

// JEUX
import beyond from "../assets/picts/beyondGoodAndEvilJaquette.jpg";
import prince from "../assets/picts/princeOfPersiaJaquette.jpeg";
import skull from "../assets/picts/skullAndBonesJaquette.jpg";

// STUDIOS
import montréal from "../assets/picts/ubisoftMontréal.jpg";
import québec from "../assets/picts/ubisoftQuébec.jpg";
import toronto from "../assets/picts/ubisoftToronto.jpg";
import montpelier from "../assets/picts/ubisoftMontpellier.jpeg";

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
          ><i className="fa-solid fa-xmark"></i></button>
        </div>
        <div className="offcanvas-body">
          <div className='row'>
            <div className='col-lg-4'>
              <div className="tab">
                <button className={`tablinks ${activeTab === 'Jeux' ? 'active' : ''}`} onMouseOver={(e) => openTabs(e, 'Jeux')}>Jeux</button>
                <button className={`tablinks ${activeTab === 'Studios' ? 'active' : ''}`} onMouseOver={(e) => openTabs(e, 'Studios')}>Studios</button>
                <button className={`tablinks ${activeTab === 'Missions' ? 'active' : ''}`} onMouseOver={(e) => openTabs(e, 'Missions')}>Missions</button>
                <button className={`tablinks ${activeTab === 'Contact' ? 'active' : ''}`} onMouseOver={(e) => openTabs(e, 'Contact')}>Contact</button>
              </div>
            </div>
            <div className='col-lg-8'>
              {/* JEUX */}
              <div id="Jeux" className="tabcontent" style={{ display: activeTab === 'Jeux' ? 'block' : 'none' }}>
                <h3>Jeux du moment :</h3>
                <div className='row'>
                  <div className='col-lg-4'>
                    <a href=''><img src={beyond} className='img-fluid w-100' /></a>
                    <div className='listPlateform'>
                      <i className="fa-brands fa-playstation"></i>
                      <i className="fa-brands fa-xbox"></i>
                      <i className="fa-brands fa-windows"></i>
                    </div>
                  </div> 
                  <div className='col-lg-4'>
                    <a href=''><img src={prince} className='img-fluid w-100' /></a>
                    <div className='listPlateform'>
                      <i className="fa-brands fa-playstation"></i>
                      <i className="fa-brands fa-xbox"></i>
                      <i className="fa-brands fa-windows"></i>
                    </div>
                  </div>
                  <div className='col-lg-4'>
                    <a href=''><img src={skull} className='img-fluid w-100' /></a>
                    <div className='listPlateform'>
                      <i className="fa-brands fa-playstation"></i>
                      <i className="fa-brands fa-xbox"></i>
                      <i className="fa-brands fa-windows"></i>
                    </div>
                  </div>
                </div>
              <button type='button' id='btnOtherGames'>AUTRES JEUX</button>
            </div>

              <div id="Studios" className="tabcontent" style={{ display: activeTab === 'Studios' ? 'block' : 'none' }}>
                <h3>Studios</h3>
                <div className='row'>
                  <div className='col-lg-6 position-relative'>
                    <a href=''><img src={montréal} className='img-fluid w-100' /></a>
                    <div className='city position-absolute top-50 start-50 translate-middle'>
                      <p>Montréal</p>
                    </div>
                  </div>
                  <div className='col-lg-6 position-relative'>
                    <a href=''><img src={québec} className='img-fluid w-100' /></a>
                    <div className='city position-absolute top-50 start-50 translate-middle'>
                      <p>Québec</p>
                    </div>
                  </div>
                  <div className='col-lg-6 position-relative'>
                    <a href=''><img src={toronto} className='img-fluid w-100' /></a>
                    <div className='city position-absolute top-50 start-50 translate-middle'>
                      <p>Toronto</p>
                    </div>
                  </div>
                  <div className='col-lg-6 position-relative'>
                    <a href=''><img src={montpelier} className='img-fluid w-100' /></a>
                    <div className='city position-absolute top-50 start-50 translate-middle'>
                      <p>Montpelier</p>
                    </div>
                  </div>
                </div>
              <button type='button' id='btnOtherStudios'>AUTRES STUDIOS</button>
              </div>

          <div id="Missions" className="tabcontent" style={{ display: activeTab === 'Missions' ? 'block' : 'none' }}>
            <h3>Missions</h3>
            <p>Objectifs</p>
              </div>
          
          <div id="Contact" className="tabcontent" style={{ display: activeTab === 'Contact' ? 'block' : 'none' }}>
            <h3>Contact</h3>
            <p>Objectifs</p>
          </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

