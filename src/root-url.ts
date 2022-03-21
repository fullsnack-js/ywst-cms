const DEV_HOST = `http://localhost:3000`;
const PROD_HOST = `https://ywst-web.vercel.app/`;

export const ROOT_URL =
  window?.location?.hostname === "localhost" ? DEV_HOST : PROD_HOST;
