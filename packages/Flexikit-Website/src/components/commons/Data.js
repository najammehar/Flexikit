import {
  SpinningCircles,
  PulsingDots,
  TripleSpin,
  Dots,
  AudioWave,
  WavePulseLoader,
  SpinningSquares,
  EmergingCircles,
  Blocks,
  LoadingText,
  Clock,
  SyncRotatingDots,
  WobbleSpin,
  CircularLoader,
  CrescentLoader,
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
  {
    path: "/loaders/SpinningSquares",
    component: SpinningSquares,
    importPath: "flexikit",
    usageCode: "SpinningSquares",
    propsTable: [
      {
        name: "Duration",
        defaultValue: "4s",
        recommended: "2s to 6s",
        description:
          "Duration of the pulse animation, should be a string with unit",
      },
      {
        name: "size",
        defaultValue: "60px",
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
        name: "loading",
        defaultValue: "true",
        recommended: "true or false",
        description: "Boolean value to show or hide the loader",
      },
    ],
    secCol: false,
  },
  {
    path: "/loaders/Blocks",
    component: Blocks,
    importPath: "flexikit",
    usageCode: "Blocks",
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
        name: "secondaryColor",
        defaultValue: "#e74c3c",
        recommended: "Any color",
        description: "Hex color of the loader, should be a string",
      },
      {
        name: "duration",
        defaultValue: "2s",
        recommended: "1.5s to 3s",
        description:
          "Duration of the pulse animation, should be a string with unit",
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
    path: "/loaders/EmergingCircles",
    component: EmergingCircles,
    importPath: "flexikit",
    usageCode: "EmergingCircles",
    propsTable: [
      {
        name: "Duration",
        defaultValue: "1.5s",
        recommended: "1s to 6s",
        description:
          "Duration of the pulse animation, should be a string with unit",
      },
      {
        name: "size",
        defaultValue: "60px",
        recommended: "25px to 80px",
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
    path: "/loaders/LoadingText",
    component: LoadingText,
    importPath: "flexikit",
    usageCode: "LoadingText",
    propsTable: [
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
    path: "/loaders/Clock",
    component: Clock,
    importPath: "flexikit",
    usageCode: "Clock",
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
        name: "hourHandDuration",
        defaultValue: "30s",
        recommended: "20s to 60s",
        description: "Duration of the hour hand rotation",
      },
      {
        name: "minuteHandDuration",
        defaultValue: "1s",
        recommended: "0.5s to 2s",
        description: "Duration of the minute hand rotation",
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
    path: "/loaders/SyncRotatingDots",
    component: SyncRotatingDots,
    importPath: "flexikit",
    usageCode: "SyncRotatingDots",
    propsTable: [
      {
        name: "size",
        defaultValue: "10px",
        recommended: "10px to 20px",
        description: "Can be number or string. In both String & number, unit is assumed as px.",
      },
      {
        name: "duration",
        defaultValue: "1.5s",
        recommended: "1s to 3s",
        description: "Duration of the animation, should be a string with unit",
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
    path: "/loaders/WobbleSpin",
    component: WobbleSpin,
    importPath: "flexikit",
    usageCode: "WobbleSpin",
    propsTable: [
      {
        name: "size",
        defaultValue: "60px",
        recommended: "40px to 100px",
        description: "Can be number or string. In both String & number, unit is assumed as px.",
      },
      {
        name: "color",
        defaultValue: "red",
        recommended: "Any color",
        description: "Hex color of the loader, should be a string",
      },
      {
        name: "duration",
        defaultValue: "1.5s",
        recommended: "1s to 3s",
        description: "Duration of the animation, should be a string with unit",
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
    path: "/loaders/CircularLoader",
    component: CircularLoader,
    importPath: "flexikit",
    usageCode: "CircularLoader",
    propsTable: [
      {
        name: "size",
        defaultValue: "90px",
        recommended: "60px to 120px",
        description: "Can be number or string. In both String & number, unit is assumed as px.",
      },
      {
        name: "color",
        defaultValue: "#3498db",
        recommended: "Any color",
        description: "Hex color of the loader, should be a string",
      },
      {
        name: "duration",
        defaultValue: "3s",
        recommended: "2s to 4s",
        description: "Duration of the animation, should be a string with unit",
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
    path: "/loaders/CrescentLoader",
    component: CrescentLoader,
    importPath: "flexikit",
    usageCode: "CrescentLoader",
    propsTable: [
      {
        name: "size",
        defaultValue: "90px",
        recommended: "60px to 150px",
        description: "Can be number or string. In both String & number, unit is assumed as px.",
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
        recommended: "2s to 4s",
        description: "Duration of the animation, should be a string with unit",
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
