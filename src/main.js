const axios = require("../utils/axios");
// const BASE_URL = "http://localhost:5000";


function updateIfExists(id, body) {
  const url = `http://localhost:5000/constellations/${id}`;
  return axios
  .get(url)
  .then(({data}) => {
    if (!{data}) throw 'Constellation does not exist' 
      return axios.put(url, body);
  })
  .then(({ data }) => {
    return data
  })
  .catch((error) => {
    return error.message
  });
}

const body = {
  "id": "UEUrlfX",
  "name": "Columba",
  "meaning": "Dove",
  "starsWithPlanets": 3,
  "quadrant": "SQ1"
}
updateIfExists("UEUrlfX", body);

module.exports = {
  updateIfExists,
};
