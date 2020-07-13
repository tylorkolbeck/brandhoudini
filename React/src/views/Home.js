import React from "react";
// import section header
import SectionHeader from "../components/sections/partials/SectionHeader";
// import sections
import HeroSplit from "../components/sections/HeroSplit";
import Clients from "../components/sections/Clients";
import GenericSection from "../components/sections/GenericSection";
import FeaturesTiles from "../components/sections/FeaturesTiles";
import Testimonial from "../components/sections/Testimonial";
import Cta from "../components/sections/Cta";
// import some required elements
import Image from "../components/elements/Image";
import Modal from "../components/elements/Modal";

class Home extends React.Component {
  state = {
    videoModalActive: false
  };
  openModal = e => {
    e.preventDefault();
    this.setState({ videoModalActive: true });
  };

  closeModal = e => {
    e.preventDefault();
    this.setState({ videoModalActive: false });
  };

  render() {
    // const genericSection01Header = {
    //   title: "What We Do For You",
    //   paragraph:
    //     "We know what it’s like to research how to start a new business and form an LLC because we’ve done that too. Thats why we provide all of the resources required to start any business"
    // };

    return (
      <React.Fragment>
        <HeroSplit className="illustration-section-01" />
        <FeaturesTiles topDivider className="center-content" />
        <Testimonial topDivider />
        <Cta split />
      </React.Fragment>
    );
  }
}

export default Home;
