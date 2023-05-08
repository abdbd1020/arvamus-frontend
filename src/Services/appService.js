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

async function getAllStaff() {
  return new Promise((resolve, reject) => {
    fetch("http://localhost:5000/api/get_all_staff", {
      method: "GET",
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
  getAllTeachers,
  getAllStaff,
};
