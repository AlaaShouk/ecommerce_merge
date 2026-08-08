// import axios from "axios";
import Swal from "sweetalert2";

// export async function callApiPost(url, bodyObj, GetErrorMsg) {
//   try {
//     const res = await axios.post(
//       `https://ecommerce.monzeryshop.shop/api/${url}`,
//       bodyObj,
//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     return res.data.data;
//   } catch (error) {
//     const data = error.response?.data;
//     const status = error.response?.status || "Network Error";

//     Swal.fire({
//       icon: "error",
//       title: "خطأ",
//       text: `${GetErrorMsg(data)} http ${status}`,
//       confirmButtonText: "إغلاق",
//     });

//     return null;
//   }
// }

export async function callApiPost(url,bodyObj,GetErrorMsg) {
  
    const res = await fetch(
      "https://ecommerce.monzeryshop.shop/api/"+url,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyObj),
      }
    ); 

    const reponseBody = await res.json();

    if (!res.ok) {        
         Swal.fire({
                    icon: "error",
                    title: "خطأ",
                    text: GetErrorMsg(reponseBody) +"  http " + res.status,
                    confirmButtonText: "إغلاق",
                  });    
        return
    }
    return reponseBody ;
  }

  export async function callApiGet(url, GetErrorMsg) {
  try {
    const res = await fetch(
      "https://ecommerce.monzeryshop.shop/api/" + url,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const responseBody = await res.json();

    if (!res.ok) {
      console.log("Status:", res.status);
      console.log("Response:", responseBody);

      throw new Error(
        GetErrorMsg
          ? GetErrorMsg(responseBody)
          : responseBody.message || "حدث خطأ"
      );
    }

    return responseBody;
  } catch (err) {
    console.error(err);
    return null;
  }
}