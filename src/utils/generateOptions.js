const generateOptions = (options = []) => {
  return options.map((option) => {
    const name = option.name || "";
    const defaultValue = option.defaultValue ? `=${option.defaultValue}` : "";
    const description = option.description ? ` " ${option.description}` : "";
    const line = `set ${name}${defaultValue}${description}`;
    return line.trim();
  });
};

export default generateOptions;
