//* Indention Options
const indent = [
  {
    name: "autoindent",
    defaultValue: "",
    description: "New lines inherit the indentation of previous lines.",
  },
  {
    name: "expandtab",
    defaultValue: "",
    description: "Convert tabs to spaces.",
  },
  {
    name: "filetype indent on",
    defaultValue: "",
    description: "Enable indentation rules that are file-type specific.",
  },
  {
    name: "shiftround",
    defaultValue: "",
    description:
      "When shifting lines, round the indentation to the nearest multiple of “shiftwidth.”",
  },
  {
    name: "shiftwidth",
    defaultValue: "4",
    description: "When shifting, indent using four spaces.",
  },
  {
    name: "smarttab",
    defaultValue: "",
    description:
      "Insert “tabstop” number of spaces when the “tab” key is pressed.",
  },
  {
    name: "tabstop",
    defaultValue: "4",
    description: "Indent using four spaces.",
  },
  // {
  //   name: "smartindent",
  //   defaultValue: "",
  //   description: "reacts to the syntax/style of the code you are editing",
  // },
];

export default indent;
