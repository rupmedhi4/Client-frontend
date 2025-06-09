const base_url = "http://localhost:4000";

export const apiAgent = {
  signup: `${base_url}/auth/client/user/signup`,
  login: `${base_url}/auth/client/user/login`,
  logout : `${base_url}/auth/user/logout`,
  getProducts :`${base_url}/product/get`,
  getSingleProduct :`${base_url}/product/get/single`,
  addToCart :`${base_url}/client/add-to-cart`,
  getAddToCart :`${base_url}/client/get/add-to-cart`,
  removeAddToCart :`${base_url}/client/delete/add-to-cart`

};
