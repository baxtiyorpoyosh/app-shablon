import React, { Component } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import about1 from "../assets/images/about-1-1.jpg";
<<<<<<< HEAD
import {GiGiftOfKnowledge} from 'react-icons/gi';
import {FaBookReader} from 'react-icons/fa';
=======
>>>>>>> 4b76345db575fda0d64a8494b5ff2cd29a2a0a00
export default class AboutTwo extends Component {
  constructor() {
    super();
    this.state = {
      startCounter: false
    };
  }

  onVisibilityChange = (isVisible) => {
    if (isVisible) {
      this.setState({ startCounter: true });
    }
  };

  render() {
    return (
      <section className="about-two">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="about-two__content">
                <div className="block-title text-left">
                  <h2 className="block-title__title">
                    Welcome to online <br />
                    learning center
                  </h2>
                </div>
                <p className="about-two__text">
                  There are many variations of passages of lorem ipsum available
                  but the majority have suffered alteration in some form by
                  injected humour or randomised words which don't look.
                </p>
                <div className="about-two__single-wrap">
                  <div className="about-two__single">
                    <div className="about-two__single-icon">
<<<<<<< HEAD
                      <i><FaBookReader /></i>
=======
                      <i className="kipso-icon-professor"></i>
>>>>>>> 4b76345db575fda0d64a8494b5ff2cd29a2a0a00
                    </div>
                    <div className="about-two__single-content">
                      <p className="about-two__single-text">
                        Start learning from our experts
                      </p>
                    </div>
                  </div>
                  <div className="about-two__single">
                    <div className="about-two__single-icon">
<<<<<<< HEAD
                      <i><GiGiftOfKnowledge /></i>
=======
                      <i className="kipso-icon-knowledge"></i>
>>>>>>> 4b76345db575fda0d64a8494b5ff2cd29a2a0a00
                    </div>
                    <div className="about-two__single-content">
                      <p className="about-two__single-text">
                        Enhance your skills with us now
                      </p>
                    </div>
                  </div>
                </div>
                <a href="#none" className="thm-btn">
                  Learn More
                </a>
              </div>
            </div>
            <div className="col-xl-6 d-flex justify-content-xl-end justify-content-sm-center">
              <div className="about-two__image">
                <span className="about-two__image-dots"></span>
                <img src={about1} alt="" />
                <div className="about-two__count">
                  <div className="about-two__count-text">
                    Trusted by
                    <span className="counter">
                      <VisibilitySensor
                        onChange={this.onVisibilityChange}
                        offset={{ top: 10 }}
                        delayedCall
                      >
                        <CountUp end={this.state.startCounter ? 4890 : 0} />
                      </VisibilitySensor>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
