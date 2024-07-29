import apirequest from "./apiRequest"
import {defer} from "react-router-dom";
export const singlepageLoader=async({request,params})=>{
    const res=await apirequest("/post/"+params.id)
    console.log("singlrpageloader",res);
    return res
}

export const listpageLoader = async ({ request, params }) => {
    const query = request.url.split("?")[1]
    const postPromise = await apirequest("/post?" + query)
    return defer({
        postResponse:postPromise
    })
  }


  export const profilepageLoader = async ({ request, params }) => {
    const query = request.url.split("?")[1]
    const postPromise = await apirequest("/post?" + query)
    return defer({
        postResponse:postPromise
    })
  }