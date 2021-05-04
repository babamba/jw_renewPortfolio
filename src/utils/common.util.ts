// const stylesheets = {
//   light: "https://cdnjs.cloudflare.com/ajax/libs/antd/4.15.4/antd.min.css",
//   dark: "https://cdnjs.cloudflare.com/ajax/libs/antd/4.15.4/antd.dark.min.css"
// };

// const getStylesheetLink = (): HTMLLinkElement =>
//   document.head.querySelector("#antd-stylesheet") || createStylesheetLink();
// const createStylesheetLink = (): HTMLLinkElement => {
//   const link = document.createElement("link");
//   link.rel = "stylesheet";
//   link.id = "antd-stylesheet";
//   document.head.appendChild(link);
//   return link;
// };

///

type Theme = "light" | "dark";

const stylesheets = {
  light: "https://cdnjs.cloudflare.com/ajax/libs/antd/4.15.4/antd.min.css",
  dark: "https://cdnjs.cloudflare.com/ajax/libs/antd/4.15.4/antd.dark.min.css"
};

const systemTheme = () =>
  window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

const setTheme = (t: Theme) => {
  console.log("t : ", t);
  console.log("theme : ", t);
  localStorage.setItem("theme", t);
};

const createStylesheetLink = (): HTMLLinkElement => {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.id = "antd-stylesheet";
  document.head.appendChild(link);
  return link;
};

const getStylesheetLink = (): HTMLLinkElement =>
  document.head.querySelector("#antd-stylesheet") || createStylesheetLink();

const updateBodyClassName = (isDark: boolean) => {
  const body = document.body.classList;
  console.log("body: ", body);
  if (isDark) {
    body.add("dark");
    body.remove("light");
  } else {
    body.add("light");
    body.remove("dark");
  }
};

const setColorTheme = (value: boolean) => {
  setTheme(getTheme());
  getStylesheetLink().href = stylesheets[value ? "dark" : "light"];
  updateBodyClassName(value);
};

const getTheme = () => (localStorage.getItem("theme") as Theme) || systemTheme();

const isEmptyStr = (str: string | undefined | null) => {
  if (str === null || str === undefined || str === "") return true;
  else return false;
};

export { setColorTheme, isEmptyStr, setTheme, getTheme };
