//  const base_url = "http://localhost:4000";
const base_url = "https://grocery-app-backend-1wx0.onrender.com";

export const apiAgent = {
  signup: `${base_url}/auth/client/user/signup`,
  login: `${base_url}/auth/client/user/login`,
  logOut: `${base_url}/auth/client/user/logout`,
  getUser : `${base_url}/auth/client/user/data`,
  getProducts :`${base_url}/client/product/get/all`,
  getSingleProduct :`${base_url}/client/product/get/single`,
  addToCart :`${base_url}/client/cart/add-to-cart`,
  getAddToCart :`${base_url}/client/cart/get/add-to-cart`,
  removeAddToCart :`${base_url}/client/cart/delete/add-to-cart`,
  setAddress :`${base_url}/client/cart/address/set`,
  createOrder :`${base_url}/client/order/placed`,
  fetchOrdered :`${base_url}/client/order/get`

}
 