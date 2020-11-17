export const sections: Array<object> = [
  {
    title: "Shapes",
    rand: true,
    options: [
      {
        label: "Count",
        key: "shapes",
        type: "slider",
        range: {
          min: 1,
          max: 30,
        },
      },
      {
        label: "Hatching Mod",
        key: "hatchMod",
        type: "slider",
        range: {
          min: 0,
          max: 30,
        },
      },
      {
        label: "Width",
        key: "width",
        type: "range-slider",
        range: {
          min: 1,
          max: 500,
        },
      },
      {
        label: "Height",
        key: "height",
        type: "range-slider",
        range: {
          min: 1,
          max: 500,
        },
      },
    ],
  },
  {
    title: "Placement",
    rand: true,
    options: [
      {
        label: "X Spread",
        key: "x",
        type: "slider",
        range: {
          min: 1,
          max: 500,
        },
      },
      {
        label: "Y Spread",
        key: "y",
        type: "slider",
        range: {
          min: 1,
          max: 500,
        },
      },
      {
        label: "Columns",
        key: "xSeg",
        type: "slider",
        rand: {
          min: 1,
          max: 20,
        },
        range: {
          min: 1,
          max: 50,
        },
      },
      {
        label: "Rows",
        key: "ySeg",
        type: "slider",
        rand: {
          min: 1,
          max: 20,
        },
        range: {
          min: 1,
          max: 50,
        },
      },
    ],
  },{
    title: "Color",
    rand: true,
    options: [
      {
        label: "Root Hue",
        key: "hue",
        type: "slider",
        range: {
          min: 0,
          max: 360,
        },
      },
      {
        label: "Saturation",
        key: "saturation",
        type: "slider",
        range: {
          min: 0,
          max: 100,
        },
      },
      {
        label: "Lightness Range",
        key: "lightness",
        type: "range-slider",
        range: {
          min: 0,
          max: 100,
        },
      },
      {
        label: "Shades",
        key: "shades",
        type: "slider",
        range: {
          min: 1,
          max: 10,
        },
      },
      {
        label: "Scheme",
        key: "scheme",
        type: "slider",
        range: {
          min: 0,
          max: 7,
        },
      },
    ],
  },
  {
    title: "Mirror",
    options: [
      {
        label: "Position 1",
        key: "mirrorPos1",
        type: "slider",
        step: 25,
        range: {
          min: 0,
          max: 2400,
        },
      },
      {
        label: "Position 2",
        key: "mirrorPos2",
        type: "slider",
        step: 25,
        range: {
          min: 0,
          max: 2400,
        },
      },
      {
        label: "Position 3",
        key: "mirrorPos3",
        type: "slider",
        step: 25,
        range: {
          min: 0,
          max: 2400,
        },
      },
      {
        label: "Scale %",
        key: "scale",
        type: "slider",
        step: 100,
        range: {
          min: 100,
          max: 800,
        },
      },
    ],
  },
  {
    title: "Miscellaneous",
    options: [
      {
        label: "RNG Seed",
        key: "seed",
        type: "slider",
        range: {
          min: 0,
          max: 2 ** 53,
        },
      },
      {
        label: "Sample Animation",
        key: "animate",
        type: "switch",
      },
      {
        label: "Animation #",
        key: "animation",
        type: "slider",
        hide: "animate",
        range: {
          min: 0,
          max: 18,
        },
      },
    ],
  },
];
