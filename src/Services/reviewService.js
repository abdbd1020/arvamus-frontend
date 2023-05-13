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
        console.log(res);
        if (res.status === 200) {
          const serverResponse = await res.json();
          if (serverResponse.status === false) {
            return null;
          } else {
            return serverResponse;
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
};
