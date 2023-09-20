import { IonIcon } from "@ionic/react";
import {
  calendarOutline,
  chevronDown,
  locationOutline,
  logoFacebook,
  logoGithub,
  mailOutline,
  phonePortraitOutline,
} from "ionicons/icons";
import React from "react";
import myAvatar from "assets/images/my-avatar.png";

const SideBar: React.FC = () => {
  return (
    <>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src={myAvatar} alt="Richard hanrick" width="80" />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Richard hanrick">
            Richard hanrick
          </h1>

          <p className="title">Web developer</p>
        </div>

        <button className="info_more-btn" data-sidebar-btn>
          <span>Show Contacts</span>

          <IonIcon icon={chevronDown} />
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <IonIcon icon={mailOutline} />
            </div>

            <div className="contact-info">
              <p className="contact-title">Email</p>

              <a href="mailto:richard@example.com" className="contact-link">
                richard@example.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <IonIcon icon={phonePortraitOutline} />
            </div>

            <div className="contact-info">
              <p className="contact-title">Phone</p>

              <a href="tel:+12133522795" className="contact-link">
                +1 (213) 352-2795
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              {/* <ion-icon name="calendar-outline"></ion-icon> */}
              <IonIcon icon={calendarOutline} />
            </div>

            <div className="contact-info">
              <p className="contact-title">Birthday</p>

              <time dateTime="1982-06-23">June 23, 1982</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              {/* <ion-icon name="location-outline"></ion-icon> */}
              <IonIcon icon={locationOutline} />
            </div>

            <div className="contact-info">
              <p className="contact-title">Location</p>

              <address>Sacramento, California, USA</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a href="https://facebook.com" className="social-link">
              <IonIcon icon={logoFacebook} />
            </a>
          </li>

          <li className="social-item">
            <a href="https://github.com" className="social-link">
              <IonIcon icon={logoGithub} />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideBar;
