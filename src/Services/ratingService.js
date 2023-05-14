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
async function updateRating(body) {
  return new Promise((resolve, reject) => {
    fetch("http://localhost:5000/api/update_rating", {
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
async function getRatingByRevieweeEmailAndReviewerId(body) {
  return new Promise((resolve, reject) => {
    fetch(
      "http://localhost:5000/api/get_rating_by_reviewee_email_and_reviewer_id",
      {
        method: "POST",
        body: body,
        headers: {
          "Content-Type": "application/json",
          connection: "keep-alive",
          "Accept-Encoding": "gzip, deflate, br",
          Accept: "*/*",
        },
      }
    )
      .then(async (res) => {
        if (res.status === 200) {
          const serverResponse = await res.json();
          if (serverResponse.status === false) {
            reject(serverResponse.responseMessage);
          } else {
            resolve(serverResponse);
          }
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
  updateRating,
  getRatingByRevieweeEmailAndReviewerId,
};
