//* User Interface Options

const userInterface = [
  {
    name: "laststatus",
    defaultValue: "2",
    description: "Always display the status bar.",
  },
  {
    name: "ruler",
    defaultValue: "",
    description: "Always show cursor position.",
  },
  {
    name: "wildmenu",
    defaultValue: "",
    description: "Display command line’s tab complete options as a menu.",
  },
  {
    name: "tabpagemax",
    defaultValue: "50",
    description:
      "Maximum number of tab pages that can be opened from the command line.",
  },
  {
    name: "colorscheme",
    defaultValue: "onedark",
    description: "Change color scheme.",
  },
  {
    name: "cursorline",
    defaultValue: "",
    description: "Highlight the line currently under cursor.",
  },
  {
    name: "number",
    defaultValue: "",
    description: "Show line numbers on the sidebar.",
  },
  {
    name: "relativenumber",
    defaultValue: "",
    description:
      "Show line number on the current line and relative numbers on all other lines.",
  },
  {
    name: "noerrorbells",
    defaultValue: "",
    description: "Disable beep on errors.",
  },
  {
    name: "visualbell",
    defaultValue: "",
    description: "Flash the screen instead of beeping on errors.",
  },
  {
    name: "mouse",
    defaultValue: "a",
    description: "Enable mouse for scrolling and resizing.",
  },
  {
    name: "title",
    defaultValue: "",
    description:
      "Set the window’s title, reflecting the file currently being edited.",
  },
  {
    name: "background",
    defaultValue: "dark",
    description: "Use colors that suit a dark background.",
  },
  {
    name: "showmatch",
    defaultValue: "",
    description: "Show matching brackets.",
  },
  {
    name: "termguicolors",
    defaultValue: "",
    description: "Enable color support for the terminal.",
  },
  {
    name: "clipboard",
    defaultValue: "unnamedplus",
    description: "Enable clipboard support.",
  },
  {
    name: "numberwidth",
    defaultValue: "1",
    description: "Set the width of line numbers.",
  },
];

export default userInterface;
