import axios from "axios";

const baseUrl = "http://localhost:3000";

const registerUser = async ({ firstName, lastName, email, password }) => {
  let response = {};

  try {
    response = await axios.post(`${baseUrl}/user/register`, {
      firstName,
      lastName,
      email,
      password,
    });
    console.log("API Response :: ", response);
  } catch (error) {
    console.error("There was an error making the POST request!", error);
  }

  return response;
};

const loginUser = async ({ firstName, lastName, email, password }) => {
  let response = {};

  try {
    response = await axios.post(`${baseUrl}/user/login`, {
      email,
      password,
    });
    console.log("API Response :: ", response);
  } catch (error) {
    console.error("There was an error making the POST request!", error);
  }

  return response;
};

export default { registerUser,loginUser };
