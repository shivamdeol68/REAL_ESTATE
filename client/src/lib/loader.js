import apirequest from "./apiRequest"

export const singlepageLoader=async({request,params})=>{
    const res=await apirequest("/post/"+params.id)
    return res.data
}

export const listpageLoader = async ({ request, params }) => {
    const query = request.url.split("?")[1]
    const res = await apirequest("/post?" + query)
    return res.data
  }