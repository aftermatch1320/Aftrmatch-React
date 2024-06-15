import React from 'react'

import PropTypes from 'prop-types'

import './features1.css'

const Features1 = (props) => {
  return (
    <div className="features1-layout251 thq-section-padding">
      <div className="features1-max-width thq-section-max-width">
        <div className="thq-flex-row features1-section-title">
          <div className="features1-column thq-flex-column">
            <span className="thq-body-small">{props.slogan}</span>
            <h2 className="thq-heading-2 features1-text1">
              {props.sectionTitle}
            </h2>
          </div>
          <span className="thq-body-small features1-text2">
            {props.sectionDescription}
          </span>
        </div>
        <div className="features1-content">
          <div className="features1-row thq-flex-row">
            <div className="features1-feature1 thq-flex-column">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="thq-img-ratio-4-3 features1-feature1-image"
              />
              <div className="features1-content1 thq-flex-column">
                <h3 className="thq-heading-3">{props.feature1Title}</h3>
                <span className="thq-body-small">
                  {props.feature1Description}
                </span>
              </div>
            </div>
            <div className="features1-feature2 thq-flex-column">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="thq-img-ratio-4-3 features1-feature2-image"
              />
              <div className="features1-content2 thq-flex-column">
                <h3 className="thq-heading-3">{props.feature2Title}</h3>
                <span className="thq-body-small">
                  {props.feature2Description}
                </span>
              </div>
            </div>
            <div className="features1-feature3 thq-flex-column">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="thq-img-ratio-4-3 features1-feature3-image"
              />
              <div className="features1-content3 thq-flex-column">
                <h3 className="thq-heading-3">{props.feature3Title}</h3>
                <span className="thq-body-small">
                  {props.feature3Description}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="features1-actions">
          <button className="thq-button-filled features1-button">
            <span className="thq-body-small features1-action1">
              {props.mainAction}
            </span>
          </button>
          <button className="thq-button-outline features1-button1">
            <span className="thq-body-small features1-action2">
              {props.secondaryAction}
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

Features1.defaultProps = {
  feature1Title: 'Advanced Matching Algorithm',
  feature1Description:
    'Our app uses cutting-edge technology to match you with compatible partners based on your preferences.',
  secondaryAction: 'Chat instantly with your matches',
  sectionDescription: 'Explore the modern features of our dating webapp',
  feature3ImageAlt: 'Profile Verification Image',
  mainAction: 'Match with like-minded individuals',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1601421160577-953240c6e37b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzc3NTYxNXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Description:
    'Engage in meaningful conversations with your matches through our user-friendly messaging interface.',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1572985025310-cc8cafbbf394?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzc3NTYxNXw&ixlib=rb-4.0.3&q=80&w=1080',
  slogan: 'Find your perfect match with ease',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1530027618771-db9eb5d2f905?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzc3NTYxNXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3Title: 'Profile Verification',
  sectionTitle: 'Features',
  feature2ImageAlt: 'Interactive Messaging Image',
  feature3Description:
    'Ensure authenticity and trust by verifying your profile to attract genuine connections.',
  feature1ImageAlt: 'Advanced Matching Algorithm Image',
  feature2Title: 'Interactive Messaging',
}

Features1.propTypes = {
  feature1Title: PropTypes.string,
  feature1Description: PropTypes.string,
  secondaryAction: PropTypes.string,
  sectionDescription: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  mainAction: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature2Description: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  slogan: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature3Title: PropTypes.string,
  sectionTitle: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature3Description: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature2Title: PropTypes.string,
}

export default Features1
