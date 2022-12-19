import request from "@/utils/request";

// login
export const Login_api = () => {
  return request({
    method: "GET",
    url: "/user/login",
  });
};
