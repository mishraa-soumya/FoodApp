export default function ApiCall(reqObj) {
    let url = reqObj.url;
    let headers = {
       "Accept" :  "application/json",
       "Content-Type" : reqObj["Content-Type"] ? reqObj["Content-Type"] : "application/json"
    }

    fetch(url, {
      method: reqObj.type,
      headers: headers,
      body: reqObj.body ? reqObj.body : ""
    })
     .then((response) => {
       if(response.ok){
         if(response.status == 500 || response.status == 400 || response.status == 404){
           return new Error(`${response.status} status code for the request`)
         }else if (response.status == 204) {
            return {"status" : 204 , "content": ""}
         }else{
           return response.json();
         }
       }else{
        throw new Error("Network response was not ok");
       }
     })
     .then((responseData) => reqObj.success(responseData))
     .catch((errorData)   => reqObj.error(`There was some error with request ${reqObj.url} and the error is ${errorData.message}`))
}
