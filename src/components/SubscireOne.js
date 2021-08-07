import React from 'react';

const SubscribeOne = () => {
    return (
        <section className="mailchimp-one">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="mailchimp-one__content">
                            <div className="mailchimp-one__icon">
                                <i className="kipso-icon-email"></i>
                            </div>
                            <h2 className="mailchimp-one__title">Get latest courses <br />
                                updates by signing up</h2>
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex">
                        <div className="my-auto">
                            <form action="#" className="mailchimp-one__form mc-form">
<<<<<<< HEAD
                              <div className="your__email">
                              <input type="text" id="mc-email" placeholder="Enter your email" />
                              </div>
                                    <div>
                                    <button type="submit" className="thm-btn">Subscribe</button>
                                    </div>
=======
                                <input type="text" id="mc-email" placeholder="Enter your email" />
                                    <button type="submit" className="thm-btn">Subscribe</button>
>>>>>>> 4b76345db575fda0d64a8494b5ff2cd29a2a0a00
                            </form>
                            <div className="mc-form__response"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default SubscribeOne;
