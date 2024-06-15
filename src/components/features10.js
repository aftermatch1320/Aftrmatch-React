import React from 'react'

import PropTypes from 'prop-types'

import './features10.css'

const Features10 = (props) => {
  return (
    <div className="features10-layout300 thq-section-padding">
      <div className="features10-max-width thq-flex-column thq-section-max-width">
        <div className="features10-section-title thq-flex-column">
          <span className="thq-body-small features10-text">{props.slogan}</span>
          <h2 className="thq-heading-2 features10-text1">
            {props.sectionTitle}
          </h2>
          <p className="features10-text2 thq-body-large">
            {props.sectionDescription}
          </p>
        </div>
        <div className="features10-content thq-grid-auto-300">
          <div className="features10-feature1 thq-flex-column">
            <img
              alt={props.feature1ImageAlt}
              src={props.feature1ImageSrc}
              className="thq-img-ratio-4-3 features10-feature1-image"
            />
            <h3 className="features10-feature1-title thq-heading-3">
              {props.feature1Title}
            </h3>
            <span className="thq-body-small">{props.feature1Description}</span>
          </div>
          <div className="features10-feature2 thq-flex-column">
            <img
              alt={props.feature2ImageAlt}
              src={props.feature2ImageSrc}
              className="thq-img-ratio-4-3 features10-feature2-image"
            />
            <h3 className="thq-heading-3">{props.feature2Title}</h3>
            <span className="thq-body-small">{props.feature2Description}</span>
          </div>
          <div className="features10-feature3 thq-flex-column">
            <img
              alt={props.feature3ImageAlt}
              src={props.feature3ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <h3 className="thq-heading-3">{props.feature3Title}</h3>
            <span className="thq-body-small">{props.feature3Description}</span>
          </div>
        </div>
        <div className="features10-actions thq-flex-row">
          <button className="features10-button thq-button-filled">
            <span className="thq-body-small">{props.mainAction}</span>
          </button>
          <button className="features10-button1 thq-button-outline">
            <span className="thq-body-small">{props.secondaryAction}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

Features10.defaultProps = {
  feature3Title: 'Profile Verification',
  sectionTitle: 'Features',
  feature1Title: 'Advanced Matching Algorithm',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1601421160577-953240c6e37b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzc3NTYxNXw&ixlib=rb-4.0.3&q=80&w=1080',
  secondaryAction: 'Chat instantly with your matches',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1572985025310-cc8cafbbf394?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzc3NTYxNXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Description:
    'Engage in meaningful conversations with your matches through our user-friendly messaging interface.',
  feature3ImageAlt: 'Profile Verification Image',
  feature3Description:
    'Ensure authenticity and trust by verifying your profile to attract genuine connections.',
  heading: 'Modern Features',
  feature1Description:
    'Our app uses cutting-edge technology to match you with compatible partners based on your preferences.',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1530027618771-db9eb5d2f905?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzc3NTYxNXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1ImageAlt: 'Advanced Matching Algorithm Image',
  mainAction: 'Match with like-minded individuals',
  feature2Title: 'Interactive Messaging',
  feature2ImageAlt: 'Interactive Messaging Image',
  sectionDescription: 'Explore the modern features of our dating webapp',
  slogan: 'Find your perfect match with ease',
}

Features10.propTypes = {
  feature3Title: PropTypes.string,
  sectionTitle: PropTypes.string,
  feature1Title: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  secondaryAction: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  feature2Description: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature3Description: PropTypes.string,
  heading: PropTypes.string,
  feature1Description: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  mainAction: PropTypes.string,
  feature2Title: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  sectionDescription: PropTypes.string,
  slogan: PropTypes.string,
}

export default Features10
