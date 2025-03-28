import ReactSlider, { ReactSliderProps } from "react-slider";

export const Slider = (props: ReactSliderProps) => {
  return (
    <ReactSlider
      {...props}
      className="slider grow"
      trackClassName="slider__track"
      thumbClassName="slider__thumb"
    />
  );
};
