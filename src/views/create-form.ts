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
        key: "hatching",
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
          max: 255,
        },
      },
      {
        label: "Height",
        key: "height",
        type: "range-slider",
        range: {
          min: 1,
          max: 255,
        },
      },
    ],
  },
  {
    title: "Placement",
    rand: true,
    options: [
      {
        label: "Spread",
        key: "spread",
        type: "slider",
        range: {
          min: 0,
          max: 100,
        },
      },
      {
        label: "Columns",
        key: "cols",
        type: "slider",
        rand: {
          min: 1,
          max: 8,
        },
        range: {
          min: 1,
          max: 15,
        },
      },
      {
        label: "Rows",
        key: "rows",
        type: "slider",
        rand: {
          min: 1,
          max: 8,
        },
        range: {
          min: 1,
          max: 15,
        },
      },
    ],
  },{
    title: "Color",
    rand: true,
    options: [
      {
        label: "Hue",
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
          min: 10,
          max: 100,
        },
      },
      {
        label: "Lightness",
        key: "lightness",
        type: "slider",
        rand: {
          min: 30,
          max: 100,
        },
        range: {
          min: 10,
          max: 100,
        },
      },
      {
        label: "Contrast",
        key: "contrast",
        type: "slider",
        range: {
          min: 0,
          max: 90,
        },
        rand: {
          min: 0,
          max: 70,
        }
      },
    ],
  },
];
