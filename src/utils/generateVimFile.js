import * as fs from "fs/promises";

export const generateVimFile = async (filename, data) => {
  try {
    const path = `./dist/${filename}`;
    await fs.writeFile(path, data);
    console.log(`successfully created ${path}`);
  } catch (error) {
    console.error("there was an error:", error.message);
  }
};
