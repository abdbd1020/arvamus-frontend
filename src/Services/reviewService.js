async function getReviewByRevieweeEmailAndReviewerId(body) {
  return new Promise((resolve, reject) => {
    fetch(
      "http://localhost:5000/api/get_review_by_reviewee_email_and_reviewer_id",
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

async function giveReview(body) {
  return new Promise((resolve, reject) => {
    fetch("http://localhost:5000/api/give_review", {
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
async function updateReview(body) {
  return new Promise((resolve, reject) => {
    fetch("http://localhost:5000/api/update_review", {
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
async function getReviewAndRatingByReviewer(body) {
  return new Promise((resolve, reject) => {
    fetch("http://localhost:5000/api/get_reviews_and_ratings_by_reviewer", {
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
async function getReviewAndRatingOfReviewee(body) {
  return new Promise((resolve, reject) => {
    fetch("http://localhost:5000/api/get_reviews_and_ratings_of_reviewee", {
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
  getReviewByRevieweeEmailAndReviewerId,
  giveReview,
  updateReview,
  getReviewAndRatingByReviewer,
  getReviewAndRatingOfReviewee,
};
