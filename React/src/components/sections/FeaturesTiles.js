import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

const propTypes = {
  ...SectionTilesProps.types
};

const defaultProps = {
  ...SectionTilesProps.defaults
};

class FeaturesTiles extends React.Component {
  render() {
    const {
      className,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      pushLeft,
      ...props
    } = this.props;

    const outerClasses = classNames(
      "features-tiles section",
      topOuterDivider && "has-top-divider",
      bottomOuterDivider && "has-bottom-divider",
      hasBgColor && "has-bg-color",
      invertColor && "invert-color",
      className
    );

    const innerClasses = classNames(
      "features-tiles-inner section-inner",
      topDivider && "has-top-divider",
      bottomDivider && "has-bottom-divider"
    );

    const tilesClasses = classNames("tiles-wrap", pushLeft && "push-left");

    const sectionHeader = {
      title: "What We Do For You",
      paragraph:
        "We know what it’s like to research how to start a new business and form an LLC because we’ve done that too. Thats why we provide all of the resources required to start any business"
    };

    return (
      <section {...props} className={outerClasses}>
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} />
            <div className={tilesClasses}>
              <div className="tiles-item reveal-from-right">
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div className="features-tiles-item-image mb-16">
                      <Image
                        src={require("./../../assets/images/feature-tile-icon-01.svg")}
                        alt="Features tile icon 01"
                        width={72}
                        height={72}
                      />
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4 className="mt-0 mb-8">Branding</h4>
                    <p className="m-0 text-sm">
                      We work together to better understand your story and then
                      incorporate your company objectives and ideas into a brand
                      that showcases your business. Learn More
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-left">
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div className="features-tiles-item-image mb-16">
                      <Image
                        src={require("./../../assets/images/feature-tile-icon-02.svg")}
                        alt="Features tile icon 02"
                        width={72}
                        height={72}
                      />
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4 className="mt-0 mb-8">Legal</h4>
                    <p className="m-0 text-sm">
                      We will manage the incorporation of your business by
                      setting you up with an LLC or corporate entity that is
                      aligned with your business needs. Learn More
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-right">
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div className="features-tiles-item-image mb-16">
                      <Image
                        src={require("./../../assets/images/feature-tile-icon-03.svg")}
                        alt="Features tile icon 03"
                        width={72}
                        height={72}
                      />
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4 className="mt-0 mb-8">Social Media</h4>
                    <p className="m-0 text-sm">
                      Recognizing the significant role social media plays in
                      company success, we will develop your social presence and
                      kick off your marketing efforts. Learn More
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-left">
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div className="features-tiles-item-image mb-16">
                      <Image
                        src={require("./../../assets/images/feature-tile-icon-04.svg")}
                        alt="Features tile icon 04"
                        width={72}
                        height={72}
                      />
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4 className="mt-0 mb-8">Web Development</h4>
                    <p className="m-0 text-sm">
                      To make it official, our talented team of web development
                      and design professionals will create an engaging website
                      for your company. Learn More
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
