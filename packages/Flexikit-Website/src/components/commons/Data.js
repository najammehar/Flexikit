import { SpinningCircles, PulsingDots, TripleSpin , Dots} from "flexikit";

export const data = [
  {
    path: "/loaders/SpinningCircles",
    component: SpinningCircles,
    importPath: "flexikit",
    usageCode: "SpinningCircles",
    propsTable: [
      {
        name: "spinDuration",
        defaultValue: "2s",
        recommended: "1s to 3s",
        description: "Duration of the spinning animation",
      },
      { name: "size", defaultValue: "30px", recommended: "25px to 40px", description: "Size of the loader" },
      {
        name: "primaryColor",
        defaultValue: "#ff5733",
        recommended: "Any color",
        description: "Primary color of the loader",
      },
      {
        name: "secondaryColor",
        defaultValue: "#ffc300",
        recommended: "Any color",
        description: "Secondary color of the loader",
      },
    ],
    secCol: true,
  },
  {
    path: "/loaders/PulsingDots",
    component: PulsingDots,
    importPath: "flexikit",
    usageCode: "PulsingDots",
    propsTable: [
      {
        name: "pulseDuration",
        defaultValue: "1s",
        description: "Duration of the pulse animation",
      },
      { name: "size", defaultValue: "16px", description: "Size of the loader" },
      {
        name: "color",
        defaultValue: "#3498db",
        description: "Primary color of the loader",
      },
      {
        name: "secondaryColor",
        defaultValue: "#e74c3c",
        description: "Secondary color of the loader",
      },
    ],
    secCol: true,
  },
  {
    path: "/loaders/TripleSpin",
    component: TripleSpin,
    importPath: "flexikit",
    usageCode: "TripleSpin",
    propsTable: [
      {
        name: "color",
        defaultValue: "#3498db",
        description: "Primary color of the loader",
      },
      { name: "size", defaultValue: "100px", description: "Size of the loader" },
      {
        name: "strokeWidth",
        defaultValue: "2",
        description: "Width of the loader stroke",
      },
      {
        name: "duration",
        defaultValue: "2000",
        description: "Duration of the spinning animation",
      },
    ],
    secCol: false,
  }
  ,
  {
    path: "/loaders/Dots",  
    component: Dots,
    importPath: "flexikit",
    usageCode: "Dots",
    propsTable: [
      {
        name: "count",
        defaultValue: "8",
        description: "Number of dots",
      },
      { name: "size", defaultValue: "80px", description: "Size of the loader" },
      {
        name: "dotSize",
        defaultValue: "10",
        description: "Size of the dots",
      },
      {
        name: "color",
        defaultValue: "#123456",
        description: "Color of the dots",
      },
      {
        name: "duration",
        defaultValue: "1",
        description: "Duration of the pulse animation",
      },
      {
        name: "delay",
        defaultValue: "0.125",
        description: "Delay between each dot",
      },
    ],
    secCol: false,
    }
];

// export const buttonData = [
//   {
//     path: "/buttons/Button1",
//     component: Button1,
//     importPath: "flexikit",
//     usageCode: "Button1",
//     propsTable: [
//       { name: "color", defaultValue: "blue", description: "Button color" },
//       { name: "size", defaultValue: "medium", description: "Button size" },
//     ],
//     secCol: false,
//   },
// ];
