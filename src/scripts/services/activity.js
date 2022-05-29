import { baseUrl } from "../variables.js";

async function getActivity(userName) {
  const response = await fetch(`${baseUrl}/${userName}/events?`);
  return await response.json();
}

export { getActivity };
