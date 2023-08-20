import React from 'react';
import '../css/Choose.css';
import { choose } from '../../constant';

const Choose = () => {
    return (
        <section>
        <div className=" container">
            <div className="row choose">
                <div className="col-md-6 choose-left">
                {choose.map((choose) => {
                        return (
                            <div>
                                <img src={choose?.image} className={choose.class} />
                            </div>
                        )
                    })}
                   
                </div>

                <div className=' col-md-6 mt-4 choose-right'>

                    <h4>Why Choose OptimusFox?</h4>
                    <p>As a blockchain development company, we make use of top-notch
                        solutions to digitally transform your business and take it to new
                        heights.<br /><br />


                        Transforming your Web3 ideas into tangible reality is our expertise.
                        We are committed to delivering quality solutions at every stage of
                        the process.<br />
                        With a deep understanding of blockchain-based software<br />
                        development, we are dedicated to providing innovative solutions
                        tailored to your specific business requirements.</p>
                </div>
            </div>
        </div>
    </section>

    )
}

export default Choose