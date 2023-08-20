import React from 'react'
import '../css/Consultation.css'
import { mobileImgs } from '../../constant';

const Consultation = () => {

    return (
        <div className=" container-fluid">

            <div className="row hero-section">
                <div className="col-md-6 left-consult">

                    <p>&nbsp;Optimize Your Path with Our Blockchain Services</p>

                    <h1>Spark Your Evolution with Our Comprehensive Blockchain Offerings"</h1>

                    <p className='p-two'>As an accomplished blockchain development company,
                        OptimusFox is steadfast in providing our clients with
                        top-notch WEB3 solutions of the highest quality.</p>
                    <button className='book-btn'> Book Free Consultation</button>
                </div>

                <div className="col-md-6 circle-move-imgs">

                    {mobileImgs.map((mobileImg) => {
                        return (
                            < div  >
                                <img src={mobileImg?.imgLink} className={mobileImg.className} />
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>

    )
}

export default Consultation






