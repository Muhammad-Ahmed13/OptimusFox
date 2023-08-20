import React from 'react';
import '../css/WebApps.css';
import { lowerWeb, upperWeb } from '../../constant';

const WebApps = () => {
    return (

        <section>
            <div className=' WebApps'>
                <div className="container">
                    <div className='integrate row '>
                        <div className="col-md-8">
                            <h2>Integrate your business with our dynamic software solutions</h2>
                        </div>
                        <div className="col-md-3 talk-btn ">
                            <button> Talk to Our Experts</button>
                        </div>

                    </div>

                </div>

                <div className='web-div container'>

                    <div className="row ">
                        <div className=' col-md-6 web-left'>
                            <h3>Web Apps Development </h3>

                            <p>We use a variety of platforms to develop stunning web applications that convert.
                            </p>

                            <div className="upper-web ">
                                {upperWeb.map((upper) => {
                                    return (
                                        < div className={upper.class} >
                                            <img src={upper?.image} width={upper.width} />
                                            <p>{upper?.title}</p>
                                        </div>
                                    )
                                })}

                            </div>

                            <div className="lower-web ">
                                {lowerWeb.map((lower) => {
                                    return (
                                        < div className={lower.class} >
                                            <img src={lower?.image} width={lower.width} />
                                            <p>{lower?.title}</p>
                                        </div>
                                    )
                                })}
                            </div>

                        </div>

                        <div className=' col-md-6 web-right  d-flex align-items-center justify-content-end '>

                            <img className='web img-fluid'
                                src='https://www.optimusfox.com/wp-content/uploads/2022/01/Web-Development.svg' />
                        </div>


                    </div>
                </div>
            </div>
        </section>

    )
}

export default WebApps