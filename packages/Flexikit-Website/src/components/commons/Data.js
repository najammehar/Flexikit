import { SpinningCircles, PulsingDots, TripleSpin } from "flexikit";

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
        description: "Duration of the spinning animation",
      },
      { name: "size", defaultValue: "16px", description: "Size of the loader" },
      {
        name: "primaryColor",
        defaultValue: "#ff5733",
        description: "Primary color of the loader",
      },
      {
        name: "secondaryColor",
        defaultValue: "#ffc300",
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
