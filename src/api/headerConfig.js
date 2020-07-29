export default () => {
  let headerConfig = { "Content-Type": "application/json" }
  if (localStorage.accessToken) {
    headerConfig['accessToken'] = localStorage.accessToken
  }
  if (localStorage.token) {
    headerConfig['token'] = localStorage.token
  }
  return headerConfig
}
