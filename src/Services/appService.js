async function getAllTeachers() {
  try {
    const response = await fetch("http://localhost:5000/api/get_all_teachers", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        connection: "keep-alive",
        "Accept-Encoding": "gzip, deflate, br",
        Accept: "*/*",
      },
    });
    console.log(response);

    if (response.status === 200) {
      const data = await response.json();
      console.log(data);
      return data;
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
  getAllTeachers,
};
