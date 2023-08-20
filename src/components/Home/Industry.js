import React from 'react';
import '../css/Industry.css'
import { industry } from '../../constant';

const Industry = () => {
 
    return (
        <div className="container">
            <div className=' industry  '>

                <h2>What the Industry Talks About Us</h2>

                <div className='row '>
                    {industry.map((industry) => {
                        return (
                            < div className="col-md-2 industry-images" >
                                <img src={industry?.image} width={industry.width} />
                            </div>
                        )
                    })}
                  
                </div>

            </div>
        </div>
    )
}

export default Industry