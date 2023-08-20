import React from 'react';
import '../../css/About.css'
import Clients from '../../Home/Clients'
import { company, team } from '../../../constant';

const About = () => {
  return (
    <div>
    
      <div className='container about'>

        { /*row 1 */}
        <div className='row'>


          <div className='col-lg-6'>
            <img src='https://www.optimusfox.com/wp-content/uploads/2021/10/MicrosoftTeams-image-6.png' width={'90%'} height={'auto'} />
          </div>

          <div className='col-lg-6 pic-right'>

            <h1>Why Choose OptimusFox</h1>

            <h3>We Are Technical Innovators</h3>

            <p>We digitally transform your business using state-of-the-art solutions. We use blockchain
              development solutions to reinvent your business and help you achieve your goals. We help about
              you meet your ever-growing business demands with the use of the
              latest technologies such as Blockchain and Artificial Intelligence, giving you a competitive edge. </p>

            <div className='about-list'>

              <ul>
                <li> <i class="fa-solid fa-circle-check"></i> Blockchain Development</li>
                <li><i class="fa-solid fa-circle-check"></i>
                  IT Consultancy</li>
              </ul>
              <ul>
                <li><i class="fa-solid fa-circle-check"></i>Data Analytics</li>
                <li><i class="fa-solid fa-circle-check"></i>Data Security</li>
              </ul>
            </div>
          </div>
        </div>

      </div>

      {/* container-2 */}

      <div className='container-fluid'>
        {/* row 2 */}
        <div className='row ROW-2'>

          <h2>Our Company Values</h2>
          <p>We have strong values which we abide by.</p>

          {company.map((company) => {
            return (
              <div className='col-md-4 border  company mt-4 '>

                <img src={company?.image} width={'20%'} height={'auto'} />
                <h6> <a>{company?.title}</a></h6>
                <p>{company?.description}</p>
              </div>
            )
          })}

        </div>
      </div>


      {/* container-3 */}

      {/* row-3 */}

      <div className='container'>
        <div className='row team'>

          <h3>Our Team</h3>
          <p>We have a team of enthusiastic professionals with years of experience in design,
            product development, marketing, technology and community building to set your business up for success. </p>
          {team.map((team) => {
            return (
              <div className='col-md-4 mt-1 '>

                <div className="card2  rounded-0 " >
                  <img src={team?.image} className="card-img-top  rounded-0 " alt="..." />
                  <div className="card-body2">
                    <h2 className="card-title2">{team.title}</h2>
                    <p className="card-text2">{team.description}</p>
                    <i className="fa-brands fa-linkedin"></i>
                  </div>
                </div>

              </div>
            )
          })}

        </div>
      </div>


<Clients/>



    </div>
  )
}

export default About