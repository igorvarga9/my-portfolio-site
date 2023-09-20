import { IonIcon } from "@ionic/react";
import {
  calendarOutline,
  chevronDown,
  locationOutline,
  logoGithub,
  mailOutline,
  phonePortraitOutline,
} from "ionicons/icons";
import React from "react";
import myAvatar from "assets/images/mark-profile.jpg";

import data from "assets/json/personal-info.json"

const SideBar: React.FC = () => {
  return (
    <>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src={myAvatar} alt="Richard hanrick" width="80" />
        </figure>

        <div className="info-content">
          <h1 className="name">
            {data.name}
          </h1>

          <p className="title">{data.title}</p>
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

              <a href={`mailto:${data.email}`} className="contact-link">
                {data.email}
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <IonIcon icon={phonePortraitOutline} />
            </div>

            <div className="contact-info">
              <p className="contact-title">Phone</p>

              <a href={`tel:${data.phone}`} className="contact-link">
                {data.phone}
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <IonIcon icon={calendarOutline} />
            </div>

            <div className="contact-info">
              <p className="contact-title">Birthday</p>

              <time dateTime="1982-06-23">{data.dob}</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <IonIcon icon={locationOutline} />
            </div>

            <div className="contact-info">
              <p className="contact-title">Location</p>

              <address>{data.location}</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a href={data.github} className="social-link" target="blank">
              <IonIcon icon={logoGithub} />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideBar;
