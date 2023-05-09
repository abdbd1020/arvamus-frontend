async function giveRating(body) {
  return new Promise((resolve, reject) => {
    fetch("http://localhost:5000/api/give_rating", {
      method: "POST",
      body: body,
      headers: {
        "Content-Type": "application/json",
        connection: "keep-alive",
        "Accept-Encoding": "gzip, deflate, br",
        Accept: "*/*",
      },
    })
      .then(async (res) => {
        if (res.status === 200) {
          resolve(await res.json());
        } else {
          reject("Bad gateway");
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
}

module.exports = {
  giveRating,
};
