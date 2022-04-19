import api from "./api"

/* Login example */
function login() {
  const phone = ''
  const code = ''

  api.auth
    .login(phone, code)
    .then((res) => {
      const token = res.access_token
      const clients = res.clients
      //TODO: create login handler
    })
}
