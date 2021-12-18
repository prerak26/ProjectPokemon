import * as React from "react";

const SvgRockTypeIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 255.1 255.1"
    style={{
      enableBackground: "new 0 0 255.1 255.1",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <circle
      cx={127.6}
      cy={127.6}
      r={121.6}
      style={{
        fill: props.col1,
      }}
    />
    <path
      d="M173.599 124.04a.058.058 0 0 1-.011-.046l10.762-62.756a.06.06 0 0 1 .059-.05h3.406a.06.06 0 0 1 .057.042l24.247 76.771a.062.062 0 0 1-.02.066l-17.878 13.958a.06.06 0 0 1-.085-.012l-20.537-27.973zM43.077 165.643a.06.06 0 0 0 .041.057l36.853 12.05a.059.059 0 0 0 .053-.008l82.374-56.869a.058.058 0 0 0 .025-.041l8.834-59.272a.06.06 0 0 0-.059-.069H98.235a.058.058 0 0 0-.046.022L43.091 127.98a.06.06 0 0 0-.014.039v37.624zm52.251 15.177 40.261 13.188a.061.061 0 0 0 .054-.008l47.933-34.383a.06.06 0 0 0 .015-.082l-17.969-26.739a.06.06 0 0 0-.084-.016l-70.21 48.04z"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        fill: props.col2,
      }}
    />
  </svg>
);

export default SvgRockTypeIcon;
