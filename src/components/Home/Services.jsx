import React from 'react';
import '../css/Services.css';
import { services } from '../../constant';

const Services = () => {

    return (
        <section>
            <div className='service'>
                <div className="main-div container">
                    <h2>Our Services</h2>
                    <p className='main-div-p'>
                        In addition to Blockchain technology development, we provide a wide range of services to meet your
                        business needs effectively. Our expertise
                        extends to custom Web3 services, Artificial Intelligence, Staff Augmentation, UI/UX Design, and
                        Digital Marketing. By leveraging these services,
                        we can help your business generate leads and drive sales.</p>

                    <div className='row upper'>

                        {services.map((service) => {
                            return (
                                < div className='col-md-4 upper-one mt-2' >
                                    <img src={service?.image} width={'70px'} height={'auto'} />
                                    <h2> {service?.title}</h2>
                                    <p>{service?.description}</p>
                                    <div className='text-center read'> Read More <i class="fa-solid fa-arrow-right"></i></div>
                                </div>
                            )
                        })}


                    </div>

                </div>

            </div>
        </section >

    )
}

export default Services






