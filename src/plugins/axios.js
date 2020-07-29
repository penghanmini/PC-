import config from '../config'
import $ajax from 'axios'

function getOptions({ method, url, data, headers }) {
  let $ajaxOptions = {}

  if("string" != typeof method){
    throw new Error("url must be string !")
  }

  if("object" != typeof data){
    data = {}
  }

  if("post" == method.toLowerCase()){
    $ajaxOptions["method"] = "POST"
    $ajaxOptions["data"] = data
  }
  else if("put" == method.toLowerCase()){
    $ajaxOptions["method"] = "PUT"
    $ajaxOptions["data"] = data
  }
  else if("delete" == method.toLowerCase()){
    $ajaxOptions["method"] = "DELETE"
    $ajaxOptions["params"] = data
  }
  else if("patch" == method.toLowerCase()){
    $ajaxOptions["method"] = "PATCH"
    $ajaxOptions["params"] = data
  }
  else{
    $ajaxOptions["method"] = "GET"
    $ajaxOptions["params"] = data
  }

  if("string" != typeof url){
    throw new Error("url must be string !")
  }

  $ajaxOptions["url"] = url
  $ajaxOptions["baseURL"] = config.apis.defaultHost
  $ajaxOptions["headers"] = headers

  return $ajaxOptions
}

// export default
export default ({ method, url, data, headers = { "Content-Type" : "application/x-www-form-urlencoded" } }) => {
  let $options = getOptions({
    method: method,
    url: url,
    data: data,
    headers: headers
  })
  try {
    return $ajax($options)
  }
  catch (ex) {
    throw new Error(`network exception ! \n ex:${ex.message} \n method:${method} \n url:${url} \n params:${JSON.stringify(params)}`)
  }
}
