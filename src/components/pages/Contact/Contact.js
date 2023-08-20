import React from 'react'
import '../../css/Contact.css'
import { contact, icons, options } from '../../../constant'

const Contact = () => {

    return (
        <div>
            <div className="container">
                {/* row # 1 form*/}

                <div className='row form'>
                    <h2>  Send A Message</h2>

                    <p> Let’s work together to bring your ideas to life and launch your next successful project. Request a quote.  </p>

                    <div className='col-md-4 mt-1  '>
                        <input type='text' placeholder='Full Name*' />
                        <input type='text' placeholder='Phone*' />
                        <br />
                        <select>
                        {options.map((options) => {
                            return (
                               <option>{options?.option}</option>
                            )
                        })}  
                                               
                        </select>

                    </div>
                    <div className='col-md-4 mt-1  '>
                        <input type='email' placeholder='Email*' />
                        <input type='text' placeholder='Subject*' />
                        <input type='text' placeholder='Instant Messenger User/Handle*' />
                    </div>

                </div>
                <div className='row'>
                    <div className='col-md-8 mt-5'>
                        <textarea placeholder='Message' rows={'5'} cols={''}></textarea>
                    </div>
                </div>
                <button className='input-btn'> Submit  </button>

                {/* row # 2 banner*/}
                <div className='row unlock-bg'>
                    <div className='col-md-6  unlock-text'>

                        <h2>Unlock The Full Potential <br /> of <span>Social Media</span>. </h2>
                        <p>Follow us to get the latest updates on all things Blockchain!</p>

                        {icons.map((icons) => {
                            return (
                                <span className='icons'>
                                    <i className={icons.class}></i>
                                </span>
                            )
                        })}   
                    </div>
                    <div className='col-md-6'>
                        <img className=' unlock-img img-fluid' src=' https://www.optimusfox.com/wp-content/uploads/2021/11/image-22-1.png ' width={'100%'} />
                    </div>
                </div>

                {/* row # 3 cards */}
                <div className='row contactCard'>

                    {contact.map((contact) => {
                        return (
                            <div className="col-md-4   ">
                                <div className="card rounded-0 mt-1" style={{ width: '100%', padding: '0.5rem', height: '22rem' }} >
                                    <a className='a2'> <i class={contact.class}></i> </a>
                                    <div className="card-body">
                                        <span className="card-title3"> <a>{contact.title}</a></span>
                                        <span className='card-text3'><p> {contact.text}</p></span>
                                    </div>

                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>




        </div >
    )
}

export default Contact