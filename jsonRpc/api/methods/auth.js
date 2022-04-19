import jsonRpcRequest from "../http/jsonRpcRequest";

/**
 * @typedef User
 * @type {object}
 * @property {number} id
 * @property {string} uid
 * @property {string} lastname
 * @property {string} firstname
 * @property {string} middlename
 * @property {string} birthday
 * @property {string} email
 * @property {string} phone_number
 * @property {string} sex
 */

/**
 * @param {String} phone_number
 * @returns {Promise<boolean>}
 */
export const sendCodeByPhone = (phone_number) => {
  return jsonRpcRequest("auth_p1", {
    phone_number,
  });
};

/**
 * @param {String} phone_number
 * @param {String} code
 * @returns {Promise<{ clients: User[], access_token: String }>}
 */
export const login = (phone_number, code) => {
  return jsonRpcRequest("auth_p2", {
    phone_number,
    code,
  });
};
