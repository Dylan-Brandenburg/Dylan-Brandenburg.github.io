import React, { Component } from "react";
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
        <section id='about'>
          <div className='row'>
            <div className='nine columns'>
              <img
                className='profile-pic'
                src='https://s3.amazonaws.com/freelancer-userprofilebucket/d9bbc092-1c9a-4d33-b5e4-6676288ecb78__DSC3934.jpg'
                alt
              />
            </div>
            <div className='nine columns main-col'>
              <h2>About Me</h2>
              <p>
                I am a Full-Stack Developer.Full-Stack Developer from Dallas, Tx. I have a strong passion for
                creating beautiful full-stack applications. I have strong knowledge in JavaScript, React.js,
                Node.js and Express. I strive to continue learning and I love picking up new technologies to
                see what I can build.
              </p>
              <div className='row'>
                <div className='columns contact-details'>
                  <h2>Contact Details</h2>
                  <p className='address'>
                    <span>{resumeData.name}</span>
                    <br />
                    <span>{resumeData.location}</span>
                    <br />
                    {/* <span>(123)456-7890</span> */}
                    <br />
                    <span>{resumeData.myWebsite}</span>
                    <br />
                    <span>{resumeData.email}</span>
                  </p>
                </div>
                {/* <div className="columns download">
                  <p>
                    <a href="#" className="button">
                      <i className="fa fa-download" />
                      Download Resume
                    </a>
                  </p>
                </div> */}
              </div>{" "}
              {/* end row */}
            </div>{" "}
            {/* end .main-col */}
          </div>
        </section>
      </React.Fragment>
    );
  }
}
