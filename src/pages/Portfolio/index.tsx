/* eslint-disable jsx-a11y/anchor-is-valid */

import classNames from "classnames";
import { IonIcon } from "@ionic/react";
import { chevronDown, eyeOutline } from "ionicons/icons";
import React, { useContext } from "react";
import { NavContext, NavState } from "providers/NavProvider";

import projImg1 from 'assets/images/project-1.jpg'
import projImg2 from "assets/images/project-2.png"
import projImg3 from "assets/images/project-3.jpg"
import projImg4 from "assets/images/project-4.png"
import projImg5 from "assets/images/project-5.png"
import projImg6 from "assets/images/project-6.png"
import projImg7 from "assets/images/project-7.png"
import projImg8 from "assets/images/project-8.jpg"
import projImg9 from "assets/images/project-9.png"

const Portfolio: React.FC = () => {
  const { navState } = useContext(NavContext);

  return (
    <article className={classNames("portfolio", {
      active: navState === NavState.PORTFOLIO,
    })} data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        <ul className="filter-list">
          <li className="filter-item">
            <button className="active" data-filter-btn>
              All
            </button>
          </li>

          <li className="filter-item">
            <button data-filter-btn>Web design</button>
          </li>

          <li className="filter-item">
            <button data-filter-btn>Applications</button>
          </li>

          <li className="filter-item">
            <button data-filter-btn>Web development</button>
          </li>
        </ul>

        <div className="filter-select-box">
          <button className="filter-select" data-select>
            <div className="select-value" data-selecct-value>
              Select category
            </div>

            <div className="select-icon">
              <IonIcon icon={chevronDown} />
            </div>
          </button>

          <ul className="select-list">
            <li className="select-item">
              <button data-select-item>All</button>
            </li>

            <li className="select-item">
              <button data-select-item>Web design</button>
            </li>

            <li className="select-item">
              <button data-select-item>Applications</button>
            </li>

            <li className="select-item">
              <button data-select-item>Web development</button>
            </li>
          </ul>
        </div>

        <ul className="project-list">
          <li
            className="project-item  active"
            data-filter-item
            data-category="web development"
          >
            <a href="#">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <IonIcon icon={eyeOutline} />
                </div>

                <img
                  src={projImg1}
                  alt="finance"
                  loading="lazy"
                  width={100}
                  height={100}
                />
              </figure>

              <h3 className="project-title">Finance</h3>

              <p className="project-category">Web development</p>
            </a>
          </li>

          <li
            className="project-item  active"
            data-filter-item
            data-category="web development"
          >
            <a href="#">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <IonIcon icon={eyeOutline} />
                </div>

                <img
                  src={projImg2}
                  alt="orizon"
                  loading="lazy"
                  width={100}
                  height={100}
                />
              </figure>

              <h3 className="project-title">Orizon</h3>

              <p className="project-category">Web development</p>
            </a>
          </li>

          <li
            className="project-item  active"
            data-filter-item
            data-category="web design"
          >
            <a href="#">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <IonIcon icon={eyeOutline} />
                </div>

                <img
                  src={projImg3}
                  alt="fundo"
                  loading="lazy"
                  width={100}
                  height={100}
                />
              </figure>

              <h3 className="project-title">Fundo</h3>

              <p className="project-category">Web design</p>
            </a>
          </li>

          <li
            className="project-item  active"
            data-filter-item
            data-category="applications"
          >
            <a href="#">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <IonIcon icon={eyeOutline} />
                </div>

                <img
                  src={projImg4}
                  alt="brawlhalla"
                  loading="lazy"
                  width={100}
                  height={100}
                />
              </figure>

              <h3 className="project-title">Brawlhalla</h3>

              <p className="project-category">Applications</p>
            </a>
          </li>

          <li
            className="project-item  active"
            data-filter-item
            data-category="web design"
          >
            <a href="#">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <IonIcon icon={eyeOutline} />
                </div>

                <img
                  src={projImg5}
                  alt="dsm."
                  loading="lazy"
                  width={100}
                  height={100}
                />
              </figure>

              <h3 className="project-title">DSM.</h3>

              <p className="project-category">Web design</p>
            </a>
          </li>

          <li
            className="project-item  active"
            data-filter-item
            data-category="web design"
          >
            <a href="#">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <IonIcon icon={eyeOutline} />
                </div>

                <img
                  src={projImg6}
                  alt="metaspark"
                  loading="lazy"
                  width={100}
                  height={100}
                />
              </figure>

              <h3 className="project-title">MetaSpark</h3>

              <p className="project-category">Web design</p>
            </a>
          </li>

          <li
            className="project-item  active"
            data-filter-item
            data-category="web development"
          >
            <a href="#">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <IonIcon icon={eyeOutline} />
                </div>

                <img
                  src={projImg7}
                  alt="summary"
                  loading="lazy"
                  width={100}
                  height={100}
                />
              </figure>

              <h3 className="project-title">Summary</h3>

              <p className="project-category">Web development</p>
            </a>
          </li>

          <li
            className="project-item  active"
            data-filter-item
            data-category="applications"
          >
            <a href="#">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <IonIcon icon={eyeOutline} />
                </div>

                <img
                  src={projImg8}
                  alt="task manager"
                  loading="lazy"
                  width={100}
                  height={100}
                />
              </figure>

              <h3 className="project-title">Task Manager</h3>

              <p className="project-category">Applications</p>
            </a>
          </li>

          <li
            className="project-item  active"
            data-filter-item
            data-category="web development"
          >
            <a href="#">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <IonIcon icon={eyeOutline} />
                </div>

                <img
                  src={projImg9}
                  alt="arrival"
                  loading="lazy"
                  width={100}
                  height={100}
                />
              </figure>

              <h3 className="project-title">Arrival</h3>

              <p className="project-category">Web development</p>
            </a>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default Portfolio;
