// set autoread: Automatically re-read files if unmodified inside Vim.
// set backspace=indent,eol,start: Allow backspacing over indention, line breaks and insertion start.
// set backupdir=~/.cache/vim: Directory to store backup files.
// set confirm: Display a confirmation dialog when closing an unsaved file.
// set dir=~/.cache/vim: Directory to store swap files.
// set formatoptions+=j: Delete comment characters when joining lines.
// set hidden: Hide files in the background instead of closing them.
// set history=1000: Increase the undo limit.
// set nomodeline: Ignore file’s mode lines; use vimrc configurations instead.
// set noswapfile: Disable swap files.
// set nrformats-=octal: Interpret octal as decimal when incrementing numbers.
// set shell: The shell used to execute commands.
// set spell: Enable spellchecking.
// set wildignore+=.pyc,.swp: Ignore files matching these patterns when opening files based on a glob pattern.

const miscellaneous = [
  {
    name: "autoread",
    defaultValue: "",
    description: "Automatically re-read files if unmodified inside Vim.",
  },
  {
    name: "backspace",
    defaultValue: "indent,eol,start",
    description:
      "Allow backspacing over indention, line breaks and insertion start.",
  },
  {
    name: "nobackup",
    defaultValue: "",
    description: "Disable backup files.",
  },
  // {
  //   name: "backupdir",
  //   defaultValue: "~/.cache/vim",
  //   description: "Directory to store backup files.",
  // },
  // {
  //   name: "dir",
  //   defaultValue: "~/.cache/vim",
  //   description: "Directory to store swap files.",
  // },
  {
    name: "confirm",
    defaultValue: "",
    description: "Display a confirmation dialog when closing an unsaved file.",
  },
  {
    name: "formatoptions+",
    defaultValue: "j",
    description: "Delete comment characters when joining lines.",
  },
  {
    name: "hidden",
    defaultValue: "",
    description: "Hide files in the background instead of closing them.",
  },
  {
    name: "history",
    defaultValue: "1000",
    description: "Increase the undo limit.",
  },
  {
    name: "nomodeline",
    defaultValue: "",
    description: "Ignore file’s mode lines; use vimrc configurations instead.",
  },
  {
    name: "noswapfile",
    defaultValue: "",
    description: "Disable swap files.",
  },
  {
    name: "nrformats-",
    defaultValue: "octal",
    description: "Interpret octal as decimal when incrementing numbers.",
  },
  {
    name: "shell",
    defaultValue: "",
    description: "The shell used to execute commands.",
  },
  {
    name: "spell",
    defaultValue: "",
    description: "Enable spellchecking.",
  },
  {
    name: "wildignore",
    defaultValue: ".pyc,.swp",
    description:
      "Ignore files matching these patterns when opening files based on a glob pattern.",
  },
];

export default miscellaneous;
