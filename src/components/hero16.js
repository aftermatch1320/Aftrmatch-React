import React from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './hero16.css'

const Hero16 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="hero16-max-width thq-section-max-width">
        <div className="hero16-column thq-section-padding">
          <h1 className="thq-heading-1 hero16-text">AfterMatch</h1>
          <h1 className="thq-heading-1 hero16-text1">{props.heading1}</h1>
          <p className="thq-body-large hero16-text2">{props.content1}</p>
          <div className="hero16-actions">
            <button className="thq-button-filled hero16-button">
              <span className="thq-body-small">{props.action1}</span>
            </button>
            <button className="thq-button-outline hero16-button1">
              <span className="thq-body-small">{props.action2}</span>
            </button>
          </div>
        </div>
        <div className="hero16-content">
          <div className="hero16-column-container thq-mask-image-vertical thq-animated-group-container-vertical">
            <div className="thq-animated-group-vertical">
              <img
                alt={props.image1Alt}
                src={props.image1Src}
                className="hero16-placeholder-image thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image2Alt}
                src={props.image2Src}
                className="hero16-placeholder-image01 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image3Alt}
                src={props.image3Src}
                className="hero16-placeholder-image02 thq-img-scale thq-img-ratio-1-1"
              />
            </div>
            <div className="thq-animated-group-vertical">
              <img
                alt={props.image1Alt}
                src={props.image1Src}
                className="hero16-placeholder-image03 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image2Alt}
                src={props.image2Src}
                className="hero16-placeholder-image04 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image3Alt}
                src={props.image3Src}
                className="hero16-placeholder-image05 thq-img-scale thq-img-ratio-1-1"
              />
            </div>
          </div>
          <div className="hero16-column-container1 thq-mask-image-vertical thq-animated-group-container-vertical">
            <div className="thq-animated-group-vertical-reverse">
              <img
                alt={props.image4Alt}
                src={props.image4Src}
                className="hero16-placeholder-image06 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image5Alt}
                src={props.image5Src}
                className="hero16-placeholder-image07 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image6Alt}
                src={props.image6Src}
                className="hero16-placeholder-image08 thq-img-scale thq-img-ratio-1-1"
              />
            </div>
            <div className="thq-animated-group-vertical-reverse">
              <img
                alt={props.image4Alt}
                src={props.image4Src}
                className="hero16-placeholder-image09 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image5Alt}
                src={props.image5Src}
                className="hero16-placeholder-image10 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image6Alt}
                src={props.image6Src}
                className="hero16-placeholder-image11 thq-img-scale thq-img-ratio-1-1"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="hero16-container1">
          <Script
            html={`<style>
  @keyframes scroll-x {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - 16px));
    }
  }

  @keyframes scroll-y {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(calc(-100% - 16px));
    }
  }
</style>
`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

Hero16.defaultProps = {
  image6Alt: 'Hero Image',
  image1Src:
    'https://images.unsplash.com/photo-1517816981644-e0e3de7743e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzc3NTYxNHw&ixlib=rb-4.0.3&q=80&w=1080',
  image7Src:
    'https://images.unsplash.com/photo-1570218625390-ca3c081c2cfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzc3NTg2M3w&ixlib=rb-4.0.3&q=80&w=1080',
  action2: 'Sign Up Now',
  image2Alt: 'Hero Image',
  image4Src:
    'https://images.unsplash.com/photo-1658963642269-0a36c9eb5d66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzc3NTg2Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: 'Find Your Perfect Match',
  image5Src:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzc3NTg2M3w&ixlib=rb-4.0.3&q=80&w=1080',
  image3Src:
    'https://images.unsplash.com/photo-1467806757054-808649965a76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzc3NTg2Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  action1: 'Learn More',
  image3Alt: 'Hero Image',
  image2Src:
    'https://images.unsplash.com/photo-1631500007471-bbc988d170aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzc3NTg2Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  image1Alt: 'Modern Dating Webapp',
  image5Alt: 'Hero Image',
  image6Src:
    'https://images.unsplash.com/photo-1455849318743-b2233052fcff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzc3NTg2M3w&ixlib=rb-4.0.3&q=80&w=1080',
  content1:
    'Join our modern dating webapp and discover meaningful connections with like-minded individuals.',
  image4Alt: 'Hero Image',
}

Hero16.propTypes = {
  image6Alt: PropTypes.string,
  image1Src: PropTypes.string,
  image7Src: PropTypes.string,
  action2: PropTypes.string,
  image2Alt: PropTypes.string,
  image4Src: PropTypes.string,
  heading1: PropTypes.string,
  image5Src: PropTypes.string,
  image3Src: PropTypes.string,
  action1: PropTypes.string,
  image3Alt: PropTypes.string,
  image2Src: PropTypes.string,
  image1Alt: PropTypes.string,
  image5Alt: PropTypes.string,
  image6Src: PropTypes.string,
  content1: PropTypes.string,
  image4Alt: PropTypes.string,
}

export default Hero16
