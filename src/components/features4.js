import React from 'react'

import PropTypes from 'prop-types'

import './features4.css'

const Features4 = (props) => {
  return (
    <div className="features4-layout301 thq-section-padding">
      <div className="features4-max-width thq-section-max-width">
        <h2 className="features4-text thq-heading-2">{props.sectionTitle}</h2>
        <div className="features4-row thq-grid-auto-300">
          <div className="features4-feature1">
            <img
              alt={props.feature1ImageAlt}
              src={props.feature1ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <div className="features4-content thq-flex-column">
              <div className="features4-section-title thq-flex-column">
                <h3 className="features4-title1 thq-heading-3">
                  {props.feature1Title}
                </h3>
                <span className="features4-description1 thq-body-small">
                  {props.feature1Description}
                </span>
              </div>
              <div className="features4-action thq-flex-row">
                <button className="thq-button-flat features4-button">
                  <span className="thq-body-small">{props.feature1Button}</span>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M426 256l256 256-256 256-60-60 196-196-196-196z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="features4-feature2">
            <img
              alt={props.feature2ImageAlt}
              src={props.feature2ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <div className="features4-content1 thq-flex-column">
              <div className="features4-section-title1 thq-flex-column">
                <strong className="features4-title2 thq-heading-3">
                  {props.feature2Title}
                </strong>
                <span className="features4-description2 thq-body-small">
                  {props.feature2Description}
                </span>
              </div>
              <div className="features4-action1 thq-flex-row">
                <button className="thq-button-flat features4-button1">
                  <span className="thq-body-small features4-action2">
                    {props.feature2Button}
                  </span>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M426 256l256 256-256 256-60-60 196-196-196-196z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="features4-feature3">
            <img
              alt={props.feature3ImageAlt}
              src={props.feature3ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <div className="features4-content2 thq-flex-column">
              <div className="features4-section-title2 thq-flex-column">
                <strong className="features4-title3 thq-heading-3">
                  {props.feature3Title}
                </strong>
                <span className="features4-description3 thq-body-small">
                  {props.feature3Description}
                </span>
              </div>
              <div className="features4-action2 thq-flex-row">
                <button className="thq-button-flat features4-button2">
                  <span className="thq-body-small">{props.feature3Button}</span>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M426 256l256 256-256 256-60-60 196-196-196-196z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="features4-feature4">
            <img
              alt={props.feature4ImageAlt}
              src={props.feature4ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <div className="features4-content3 thq-flex-column">
              <div className="features4-section-title3 thq-flex-column">
                <strong className="features4-title4 thq-heading-3">
                  {props.feature4Title}
                </strong>
                <span className="features4-description4 thq-body-small">
                  {props.feature4Description}
                </span>
              </div>
              <div className="features4-action3 thq-flex-row">
                <button className="thq-button-flat features4-button3">
                  <span className="thq-body-small">{props.feature4Button}</span>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M426 256l256 256-256 256-60-60 196-196-196-196z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features4.defaultProps = {
  feature4Button: 'Discover More',
  feature2Button: 'Start Chatting',
  feature1Description:
    'Bring your match from any platform and explore our chat and games features on the app with them.',
  feature3Button: 'Verify Profile',
  feature3ImageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  sectionTitle: "What Set's Us Apart In Dating World",
  feature1ImageAlt: "What Set's Us Apart",
  feature2Title: 'SOS Emergency and Chat Support',
  feature1Title: 'Onboard other app users directly to AfterMatch',
  feature4Description:
    'Allows you to be seen only by those who meet your dating criteria',
  feature2ImageAlt: 'Interactive Messaging',
  feature4ImageSrc:
    'https://images.unsplash.com/photo-1516799868487-7b6cc0504a3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzg2MjgxOXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1518717283029-d622d998185a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzg2MjgxOXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3Description:
    'Play Games, Invite your connections and unlock the new way of building meaningful conversations',
  feature3ImageAlt: 'Profile Verification',
  feature4Title: 'Restricted Purpose based Swipes as per criteria',
  feature1Button: 'Learn More',
  feature4ImageAlt: 'Modern Matching Features',
  feature2Description:
    'SOS emergency and c hat support available for suspicious situations',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1644661847825-56b30afd7f92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzg2MjgxOXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3Title: 'Enjoy Mini Games with Partners',
}

Features4.propTypes = {
  feature4Button: PropTypes.string,
  feature2Button: PropTypes.string,
  feature1Description: PropTypes.string,
  feature3Button: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  sectionTitle: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature2Title: PropTypes.string,
  feature1Title: PropTypes.string,
  feature4Description: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature4ImageSrc: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  feature3Description: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature4Title: PropTypes.string,
  feature1Button: PropTypes.string,
  feature4ImageAlt: PropTypes.string,
  feature2Description: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature3Title: PropTypes.string,
}

export default Features4
