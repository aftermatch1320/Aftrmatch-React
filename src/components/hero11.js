import React from 'react'

import PropTypes from 'prop-types'

import './hero11.css'

const Hero11 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="hero11-max-width thq-section-max-width">
        <div className="thq-flex-row hero11-container">
          <div className="hero11-column">
            <div className="hero11-content">
              <h1 className="thq-heading-1 hero11-heading1">
                {props.heading1}
              </h1>
              <p className="thq-body-large hero11-content1">{props.content1}</p>
            </div>
            <div className="hero11-actions">
              <button className="thq-button-filled hero11-button">
                <span className="thq-body-small">{props.action1}</span>
              </button>
              <button className="thq-button-outline hero11-button1">
                <span className="thq-body-small">{props.action2}</span>
              </button>
            </div>
          </div>
          <div className="hero11-container1">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="hero11-image1 thq-img-ratio-4-3"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

Hero11.defaultProps = {
  image1Src:
    'https://images.unsplash.com/photo-1517816981644-e0e3de7743e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzc3NTYxNHw&ixlib=rb-4.0.3&q=80&w=1080',
  content1:
    'Join our modern dating webapp and discover meaningful connections with like-minded individuals.',
  action2: 'Sign Up Now',
  image1Alt: 'Modern Dating Webapp',
  heading1: 'Find Your Perfect Match',
  action1: 'Learn More',
}

Hero11.propTypes = {
  image1Src: PropTypes.string,
  content1: PropTypes.string,
  action2: PropTypes.string,
  image1Alt: PropTypes.string,
  heading1: PropTypes.string,
  action1: PropTypes.string,
}

export default Hero11
