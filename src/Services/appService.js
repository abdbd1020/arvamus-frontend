async function getAllTeachers() {
  return new Promise((resolve, reject) => {
    fetch("http://localhost:5000/api/get_all_teachers", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        connection: "keep-alive",
        "Accept-Encoding": "gzip, deflate, br",
        Accept: "*/*",
      },
      body: body,
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

async function getAllStuff() {
  return new Promise((resolve, reject) => {
    fetch("http://localhost:5000/api/get_all_stuff", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        connection: "keep-alive",
        "Accept-Encoding": "gzip, deflate, br",
        Accept: "*/*",
      },
      body: body,
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
  getAllTeachers,
  getAllStuff,
};
