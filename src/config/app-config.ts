import packageJson from "../../package.json";

const currentYear = new Date().getFullYear();

export const APP_CONFIG = {
  name: "Local Lock TT",
  version: packageJson.version,
  copyright: `© ${currentYear}, Local Lock TT.`,
  meta: {
    title: "Local Lock TT",
    description: "A web app for property management and tenant tracking. For Trinidad and Tobago.",
  },
};
