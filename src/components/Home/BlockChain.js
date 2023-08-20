import React from 'react';
import '../css/BlockChain.css';
import { blockChain } from '../../constant';

const BlockChain = () => {
    return (
        <section>
            <div className="container-fluid">
                <div className="row class ">
                    <div className=' col-md-7 '>
                        <h2>Blockchain Software Development Outsourcing</h2>

                        {  blockChain.map((  blockChain) => {
                            return (
                                < div className={blockChain.class} >
                                    <img src={  blockChain?.image} width={'92px'} height={'100px'} />
                                    <div  className="content">
                                    <h5> {  blockChain?.heading}</h5>
                                    <p>{  blockChain?.paragraph}</p>
                                    </div>
                                </div>
                            )
                        })}
                        <div className='block_btn'>
                            <button> Contact us</button>
                        </div>

                    </div>

                    <div className="col-md-5">
                        <div className='container-box'>
                            <img src="https://www.optimusfox.com/wp-content/uploads/2021/11/1-box.svg"
                                className='small-box vert-move-box img-fluid' />
                            <img src='https://www.optimusfox.com/wp-content/uploads/2021/11/Multiple-boxes.svg'
                                className='back-box img-fluid' width="95%" />
                        </div>
                    </div>

                </div>
            </div>
        </section>

    )
}

export default BlockChain