import api from "./api"
import { UserItem } from "./api/model"

/* Login example */
function login() {
  const LOGIN = ''
  const PASSWORD = ''

  api.authorize.authenticate(LOGIN, PASSWORD).then((res) => console.log(res.data.data.TOKEN))
}

function getUser() {
    api.session.getCurrentUser().then((res) => {
        const user = res.data.data as UserItem
        console.log(user.NAME)
    })
}
