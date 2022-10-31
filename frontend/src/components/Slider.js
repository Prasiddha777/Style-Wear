import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = () => (
  <AutoplaySlider
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={1000}
    style={{ "--slider-height-percentage": "35%" }}
  >
    <div data-src="/images/banner1.jpg" />
    <div data-src="/images/banner2.jpg" />
    <div data-src="/images/banner4.jpg" />
  </AutoplaySlider>
);
export default Slider;
