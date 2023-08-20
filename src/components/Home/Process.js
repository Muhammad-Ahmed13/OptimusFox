import React from 'react';
import '../css/Process.css';
import { process } from '../../constant';

const Process = () => {
  return (
    <section>

      <div className='process' >
        <h2>Our Process</h2>
        <p>The stages we go through when we take on a project.</p>

        <div className='process-1 '>

          <img src='https://www.optimusfox.com/wp-content/uploads/2021/10/Group-4220@2x.png' width={'210px'} height={'160px'} />
          <h3>01</h3>
          <h6> Planning</h6>

        </div>
        {process.map((process) => {
          return (
            < div className={process.className} >
              <img src={process?.imageOne} className={process.classOne}/>
              <img src={process?.imageTwo} className={process.classTwo} width={'210px'} height={'160px'} />

              <h3> {process?.num}</h3>
              <h6> {process?.title}</h6>
            </div>
          )
        })}

      </div>
    </section>
  )
}

export default Process