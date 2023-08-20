import React from 'react';
import '../css/Footer.css'
import { footerList, footerList2, socialIcons } from '../../constant';



const Footer = () => {
    return (
        <div>
            <div className='container-fluid footer'>
                <div className='row '>

                    <div className='col-md-5 mt-2'>
                        <img className="logo " src='https://www.optimusfox.com/wp-content/uploads/2021/12/logo-520x94-d-bg-white@2x.png' width={'60%'} height={'auto'} />
                        <p className='footer-p'>At OptimusFox, you can digitally transform  <br />
                            your business with our top-notch solutions. <br />
                            We offer blockchain development solutions  <br />
                            to reinvent.</p>

                        <h5>FOLLOW US</h5>
                        <div className='social-icons'>

                            {socialIcons.map((icon) => {
                                return (
                                    <span className='icon'>
                                        <i className={icon.class}></i>
                                    </span>
                                )
                            })}

                        </div>

                    </div>

                    {/* col # 2 */}

                    <div className='col-md-3 column_2'>
                        <h5>OUR SERVICES </h5>

                        <ul>
                            {footerList.map((list) => {
                                return (
                                    <li>
                                        <i className="fa-solid fa-minus"></i>
                                        <a>{list.title}  </a>
                                    </li>

                                )
                            })}

                        </ul>
                    </div>


                    {/* col # 3 */}


                    <div className='col-md-2 column-3'>

                        <h5>QUICK LINKS</h5>

                        <ul>
                            {footerList2.map((list) => {
                                return (
                                    <li>
                                        <i className="fa-solid fa-minus"></i>
                                        <a>{list.title}  </a>
                                    </li>

                                )
                            })}

                        </ul>
                    </div>

                    {/* column-4 */}

                    <div className='col-md-2 column-4'>

                        <h5>CONTACT</h5>

                        <ul>
                            <li>
                                <span className='c-icons'>
                                    <i className="fa-solid fa-phone-volume"></i>
                                </span>

                                <a> +1 618-681-6441</a>
                            </li>
                            <li>
                                <span className='c-icons'>

                                    <i className="fa-regular fa-envelope"></i>
                                </span>
                                <a> info@optimusfox.com </a>
                            </li>
                            <li>
                                <span className='c-icons'>
                                    <i className="fa-solid fa-location-dot"></i>
                                </span>

                                <a > 1740 Innovation Dr. Suite

                                    #210 Carbondale, IL.
                                    62903. U.S.A. </a>
                            </li>

                        </ul>


                    </div>

                </div>

                <div className='end-p'>
                    <div className='left-end-p'>
                        <p>© 2022 OptimusFox. All Rights Reserved. </p>
                    </div>

                    <div className='right-end-p'>
                        <span> Privacy & Policy  </span>
                        <span>Terms & Conditions  </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer