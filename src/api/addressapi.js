import axios from "axios";

async function getCoordinatesOfAddress(address) {
  const response = await axios.get(
    "https://api.opencagedata.com/geocode/v1/json? ",
    {
      params: {
        key:"178606e287ff6c8466e0a61d9f70d58b",
        q: address,
        language: "en"
      }
    }
  );

  return response;
}

export default getCoordinatesOfAddress;