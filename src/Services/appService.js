const { type } = require("@testing-library/user-event/dist/type");

async function userSignUp(body) {
  try {
    const response = await fetch("http://localhost:5000/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: body,
    });
    if (response.status === 200) {
      return response;
    } else {
      const errorData = await response.json();
      console.log(errorData);
      return null;
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    return null;
  }
}

// user login
async function userLogin(body) {
  return new Promise((resolve, reject) => {
    fetch("http://localhost:5000/api/login", {
      method: "POST",
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

// update user info
async function updateUserInfo(body) {
  try {
    const response = await fetch("http://localhost:5000/api/update_info", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: body,
    });
    if (response.ok) {
      console.log("Form submitted successfully!");
      return response;
    } else {
      const errorData = await response.json();
      console.log(errorData);
      return null;
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    return null;
  }
}

// update user password
async function updateUserPassword(body) {
  try {
    const response = await fetch("http://localhost:5000/api/change_password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: body,
    });
    if (response.ok) {
      console.log("Form submitted successfully!");
      return response;
    } else {
      const errorData = await response.json();
      console.log(errorData);
      return null;
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    return null;
  }
}

// forget password
async function forgetPassword(body) {
  try {
    const response = await fetch("http://localhost:5000/api/forget_password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: body,
    });
    if (response.ok) {
      console.log("Form submitted successfully!");
      return response;
    } else {
      const errorData = await response.json();
      console.log(errorData);
      return null;
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    return null;
  }
}

module.exports = {
  userSignUp,
  userLogin,
  updateUserInfo,
  updateUserPassword,
  forgetPassword,
};