import {
  SpinningCircles,
  PulsingDots,
  TripleSpin,
  Dots,
  AudioWave,
  WavePulseLoader,
} from "flexikit";

export const data = [
  {
    path: "/loaders/SpinningCircles",
    component: SpinningCircles,
    importPath: "flexikit",
    usageCode: "SpinningCircles",
    propsTable: [
      {
        name: "Duration",
        defaultValue: "2s",
        recommended: "1s to 3s",
        description:
          "Duration of the pulse animation, should be a string with unit",
      },
      {
        name: "size",
        defaultValue: "30px",
        recommended: "25px to 40px",
        description:
          "Can be number or string. In both String & number, unit is assumed as px.",
      },
      {
        name: "primaryColor",
        defaultValue: "#3498db",
        recommended: "Any color",
        description: "Primary (Hex color) of the loader, should be a string",
      },
      {
        name: "secondaryColor",
        defaultValue: "#e74c3c",
        recommended: "Any color",
        description: "Secondary (Hex color) of the loader, should be a string",
      },
      {
        name: "loading",
        defaultValue: "true",
        recommended: "true or false",
        description: "Boolean value to show or hide the loader",
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
        name: "Duration",
        defaultValue: "1s",
        recommended: "1s to 3s",
        description:
          "Duration of the spinning animation. Should be a string with unit",
      },
      {
        name: "size",
        defaultValue: "30px",
        recommended: "25px to 80px",
        description:
          "Can be number or string. In both String & number, unit is assumed as px.",
      },
      {
        name: "color",
        defaultValue: "#3498db",
        recommended: "Any color",
        description: "Primary (Hex color) of the loader, should be a string",
      },
      {
        name: "secondaryColor",
        defaultValue: "#e74c3c",
        recommended: "Any color",
        description: "Secondary (Hex color) of the loader, should be a string",
      },
      {
        name: "loading",
        defaultValue: "true",
        recommended: "true or false",
        description: "Boolean value to show or hide the loader",
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
        recommended: "Any color",
        description: "Hex color of the loader, should be a string",
      },
      {
        name: "size",
        defaultValue: "100px",
        recommended: "50px to 150px",
        description:
          "Can be number or string. In both String & number, unit is assumed as px.",
      },
      {
        name: "strokeWidth",
        defaultValue: "4px",
        recommended: "2px to 6px",
        description:
          "Width of the loader stroke. Can be number or string. In both String & number, unit is assumed as px.",
      },
      {
        name: "duration",
        defaultValue: "2s",
        recommended: "1s to 3s",
        description:
          "Duration of the spinning animation. Should be a string with unit",
      },
      {
        name: "loading",
        defaultValue: "true",
        recommended: "true or false",
        description: "Boolean value to show or hide the loader",
      },
    ],
    secCol: false,
  },
  {
    path: "/loaders/Dots",
    component: Dots,
    importPath: "flexikit",
    usageCode: "Dots",
    propsTable: [
      {
        name: "size",
        defaultValue: "60px",
        recommended: "40px to 100px",
        description:
          "Can be number or string. In both String & number, unit is assumed as px.",
      },
      {
        name: "color",
        defaultValue: "#3498db",
        recommended: "Any color",
        description: "Hex color of the loader, should be a string",
      },
      {
        name: "duration",
        defaultValue: "1s",
        recommended: "0.5s to 1.5s",
        description: "Duration of the animation. Should be a string with unit",
      },
      {
        name: "loading",
        defaultValue: "true",
        recommended: "true or false",
        description: "Boolean value to show or hide the loader",
      },
    ],
    secCol: false,
  },
  {
    path: "/loaders/AudioWave",
    component: AudioWave,
    importPath: "flexikit",
    usageCode: "AudioWave",
    propsTable: [
      {
        name: "size",
        defaultValue: "90px",
        recommended: "50px to 150px",
        description:
          "Can be number or string. In both String & number, unit is assumed as px.",
      },
      {
        name: "duration",
        defaultValue: "1s",
        recommended: "0.7s to 1.5s",
        description:
          "Duration of the pulse animation, should be a string with unit",
      },
      {
        name: "color",
        defaultValue: "#3498db",
        recommended: "Any color",
        description: "Hex color of the loader, should be a string",
      },
      {
        name: "loading",
        defaultValue: "true",
        recommended: "true or false",
        description: "Boolean value to show or hide the loader",
      },
    ],
    secCol: false,
  },
  {
    path: "/loaders/WavePulseLoader",
    component: WavePulseLoader,
    importPath: "flexikit",
    usageCode: "WavePulseLoader",
    propsTable: [
      {
        name: "size",
        defaultValue: "30px",
        recommended: "40px to 100px",
        description:
          "Can be number or string. In both String & number, unit is assumed as px.",
      },
      {
        name: "duration",
        defaultValue: "1s",
        recommended: "1s to 3s",
        description:
          "Duration of the pulse animation, should be a string with unit",
      },
      {
        name: "color",
        defaultValue: "#3498db",
        recommended: "Any color",
        description: "Hex color of the loader, should be a string",
      },
      {
        name: "loading",
        defaultValue: "true",
        recommended: "true or false",
        description: "Boolean value to show or hide the loader",
      },
    ],
    secCol: false,
  },
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
