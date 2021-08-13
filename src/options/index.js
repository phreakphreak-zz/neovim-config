import generateOptions from "../utils/generateOptions.js";
import { generateVimFile } from "../utils/generateVimFile.js";
import codeFoldingValues from "./codeFolding.js";
import indentValues from "./indent.js";
import miscellaneous from "./miscellaneous.js";
import performanceValues from "./performance.js";
import searchValues from "./search.js";
import textRenderingValues from "./textRendering.js";
import userInteractionValues from "./userInterface.js";

const options = [
  {
    name: "codeFolding",
    values: codeFoldingValues,
  },
  {
    name: "indent",
    values: indentValues,
  },
  {
    name: "performance",
    values: performanceValues,
  },
  {
    name: "textRendering",
    values: textRenderingValues,
  },
  {
    name: "search",
    values: searchValues,
  },
  {
    name: "userInterface",
    values: userInteractionValues,
  },
  {
    name: "miscellaneous",
    values: miscellaneous,
  },
];

const data = options
  .map(({ name, values }) => {
    const formattedValues = generateOptions(values);
    formattedValues.unshift(`" ${name}`);
    return formattedValues.join("\n");
  })
  .join("\n\n");

generateVimFile("options.vim", data);

//TODO: add colorcolumn=120
//TODO: add syntax on or syntax enable
