//* Text Rendering Options

const textRendering = [
  {
    name: "display+",
    defaultValue: "lastline",
    description: "Always try to show a paragraph’s last line.",
  },
  {
    name: "encoding",
    defaultValue: "utf-8",
    description: "Use an encoding that supports unicode.",
  },
  {
    name: "linebreak",
    defaultValue: "",
    description: "Avoid wrapping a line in the middle of a word.",
  },
  {
    name: "scrolloff",
    defaultValue: "1",
    description:
      "The number of screen lines to keep above and below the cursor.",
  },
  {
    name: "sidescrolloff",
    defaultValue: "5",
    description:
      "The number of screen columns to keep to the left and right of the cursor.",
  },
  {
    name: "wrap",
    defaultValue: "",
    description: "Enable line wrapping.",
  },
];

// {
//     name: "syntax",
//     defaultValue: "enable",
//     description: "Enable syntax highlighting.",
//   },

export default textRendering;
