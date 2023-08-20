import React from 'react';
import '../css/MobileApps.css';
import { upperMobile } from '../../constant';

const MobileApps = () => {

    return (


        <section>

            <div className='mob-div'>

                <div className="container">
                    <div className="row">

                        <div className='col-md-6 mob-left'>
                            <img className='web img-fluid'
                                src=' https://www.optimusfox.com/wp-content/uploads/2022/01/Mobile-App-Development.svg ' />
                        </div>


                        <div className='col-md-6 mob-right'>
                            <h3>Mobile Apps Development </h3>

                            <p>We have a team of experts developing feature-rich applications for iOS and Android.
                            </p>

                            <div className="upper-mobile ">
                                {upperMobile.map((upper) => {
                                    return (
                                        < div className={upper.class} >
                                            <img src={upper?.image} width={upper.width} />
                                            <p>{upper?.title}</p>
                                        </div>
                                    )
                                })}

                            </div>
                            <div className="lower-mobile">
                                <div className='flutter'>
                                    <img src='   https://www.optimusfox.com/wp-content/uploads/2022/02/Fultter.png'
                                        width='83px' />
                                    <p> Flutter </p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>


            </div>
        </section>












        // <section>

        //   <div classnameName='mob-div'>

        //     <div classnameName='mob-left'>
        //       <img classnameName='web'  src=' https://www.optimusfox.com/wp-content/uploads/2022/01/Mobile-App-Development.svg ' />
        //     </div>




        //     <div classnameName='mob-right'>
        //       <h3>Mobile Apps Development </h3>

        //       <p>We have a team of experts developing feature-rich applications for iOS <br/>and Android. </p>

        //       <div classnameName='swift'>
        //         <img src=' https://www.optimusfox.com/wp-content/uploads/2022/02/Swift.png ' width={'85px'} height={'auto'} />
        //         <p  >   Swift      </p>

        //       </div>
        //       <div classnameName='kotlin'>
        //         <img src=' https://www.optimusfox.com/wp-content/uploads/2022/02/Kotlin.png ' width={'82px'} height={'auto'} />
        //         <p >   Kotlin    </p>
        //       </div>
        //       <div classnameName='react'>
        //         <img src=' https://www.optimusfox.com/wp-content/uploads/2022/02/React.png ' width={'85px'} height={'auto'} />
        //         <p>  React Native     </p>
        //       </div>
        //       <div classnameName='flutter'>
        //         <img src='   https://www.optimusfox.com/wp-content/uploads/2022/02/Fultter.png' width={'83px'} height={'auto'} />
        //         <p>   Flutter   </p>
        //       </div>

        //     </div>



        //   </div>
        // </section>
    )
}

export default MobileApps