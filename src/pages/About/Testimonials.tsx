import { IonIcon } from "@ionic/react";
import { summary, testimonials } from "data/about";
import { closeOutline } from "ionicons/icons";
import React from "react";

export const Testimonials: React.FC = () => {
  return (
    <>
      <section className="testimonials">
        <h3 className="h3 testimonials-title">Testimonials</h3>

        <ul className="testimonials-list has-scrollbar">
          {testimonials.map((testimonial) => (
            <li className="testimonials-item">
              <div className="content-card" data-testimonials-item>
                <figure className="testimonials-avatar-box">
                  <img
                    src={testimonial.photo}
                    alt="Daniel lewis"
                    width="60"
                    data-testimonials-avatar
                  />
                </figure>

                <h4
                  className="h4 testimonials-item-title"
                  data-testimonials-title
                >
                  {testimonial.name}{" "}
                  <span className="h5">{testimonial.company}</span>
                </h4>

                <div className="testimonials-text" data-testimonials-text>
                  <p>{testimonial.feedback}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* <div className="modal-container" data-modal-container>
        <div className="overlay" data-overlay></div>

        <section className="testimonials-modal">
          <button className="modal-close-btn" data-modal-close-btn>
            <IonIcon icon={closeOutline} />
          </button>

          <div className="modal-img-wrapper">
            <figure className="modal-avatar-box">
              <img
                src={''}
                alt="Daniel lewis"
                width="80"
                data-modal-img
              />
            </figure>

            <img src="./assets/images/icon-quote.svg" alt="quote icon" />
          </div>

          <div className="modal-content">
            <h4 className="h3 modal-title" data-modal-title>
              Daniel lewis
            </h4>

            <time dateTime="2021-06-14">14 June, 2021</time>

            <div data-modal-text>
              <p>
                Richard was hired to create a corporate identity. We were very
                pleased with the work done. She has a lot of experience and is
                very concerned about the needs of client. Lorem ipsum dolor sit
                amet, ullamcous cididt consectetur adipiscing elit, seds do et
                eiusmod tempor incididunt ut laborels dolore magnarels alia.
              </p>
            </div>
          </div>
        </section>
      </div> */}
    </>
  );
};
