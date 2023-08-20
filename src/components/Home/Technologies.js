import React from 'react';
import '../css/Technologies.css'
import { lowerTech, upperTech } from '../../constant';

const Technologies = () => {
    return (
        <div className='technologies '>

            <div className='left-tech  '>

                <h3>The Technologies We Work With</h3>
                <p>We use the latest technological solutions to offer you premium, high value services.</p>

            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-6 left-tech-img img-fluid">

                        <img src='https://www.optimusfox.com/wp-content/uploads/2022/01/Blockchain-Develeopment.svg' />
                    </div>

                    <div className="col-md-6 right-tech">
                        <h2>Blockchain Development</h2>
                        <p>We offer the most effective blockchain services and solutions to help your business grow and
                            achieve scalable results.</p>

                        <div className='upper-tech '>

                            {upperTech.map((upper) => {
                                return (
                                    < div className={upper.class} >
                                        <img src={upper?.image} width={'60px'} />
                                        <p>{upper?.title}</p>
                                    </div>
                                )
                            })}

                        </div>
                        <div className=' lower-tech '>
                            {lowerTech.map((lower) => {
                                return (
                                    < div className={lower.class} >
                                        <img src={lower?.image} width={'60px'} />
                                        <p>{lower?.title}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                </div>
            </div>

        </div>

    )
}

export default Technologies