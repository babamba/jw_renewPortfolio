type Theme = "light" | "dark";

const stylesheets = {
  light: "https://cdnjs.cloudflare.com/ajax/libs/antd/4.15.2/antd.min.css",
  dark: "https://cdnjs.cloudflare.com/ajax/libs/antd/4.15.2/antd.dark.min.css"
};

const systemTheme = () =>
  window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

const createStylesheetLink = (): HTMLLinkElement => {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.id = "antd-stylesheet";
  document.head.appendChild(link);
  return link;
};

const getStylesheetLink = (): HTMLLinkElement =>
  document.head.querySelector("#antd-stylesheet") || createStylesheetLink();

const updateBodyClassName = (useDark: boolean) => {
  const body = document.body.classList;
  console.log("body: ", body);
  if (useDark) {
    body.add("dark");
    body.remove("light");
  } else {
    body.add("light");
    body.remove("dark");
  }
};

const setColorTheme = (value: boolean) => {
  console.log("systemTheme : ", systemTheme());
  getStylesheetLink().href = stylesheets[value ? "dark" : "light"];
  updateBodyClassName(value);
};

const isEmptyStr = (str: string | undefined | null) => {
  if (str === null || str === undefined || str === "") return true;
  else return false;
};

export { setColorTheme, isEmptyStr };
