import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";
export const getPost = async (req, res) => {
  const query=req.query;
  console.log(query);
  try {
    const post = await prisma.post.findMany({
      where:{
        city:query.city || undefined,
        type:query.type || undefined,
        property:query.property || undefined,
        bedroom:parseInt(query.bedroom) || undefined,
        price:{
          gte:parseInt(query.minPrice)||0,
          lte:parseInt(query.maxPrice)||1000000,
        }
      }
    });
 
    res.status(200).json({ message: "Post Found Successfully", post });
   
  } 
  catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to get posts" });
  }
};
export const singlePost = async (req, res) => {
  const id = req.params.id;
  try {
    const singlepost = await prisma.post.findUnique({
      where: { id },
      include:{
        Postdetail:true,
        User:{
          select:{
            name:true,
            avatar:true
          }
        }
      }
    });

    let userId;

    const token=req.cookies?.token;

    if(!token){
      userId=null;
    }else{
      jwt.verify(token,process.env.JWT_SECRET_TOKEN,async(err,payload)=>{
        if(err){
          userId=null;
        }
        else{
          userId=payload.id;
        }
      })
    }

    const saved=await prisma.savePost.findUnique({
      where:{
        userId_postId:{
          postId:id,
          userId
        }
      }
    })
    res.status(200).json({ ...singlepost,isSaved:saved?true:false });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to get post" });
  }
};
export const addPost = async (req, res) => {

  const body=req.body;
  const UserTokenId=req.userId;
  try {
    const add=await prisma.post.create({
      data:{
        ...body.postdata,
        userId:UserTokenId,
        Postdetail:{
          create:body.Postdetail
        }
      }
    })
    res.status(200).json({message:"Post Created",add})
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to add posts" });
  }
};
export const updatePost = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to update posts" });
  }
};
export const deletePost = async (req, res) => {
  const id = req.params.id;
  const userTokenId = req.userId;

  try {
    const post = await prisma.post.findUnique({
      where: { id },
    });

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    if (post.userId !== userTokenId) {
      return res.status(403).json({ message: "Not authorized" });
    }

    // Ensure any related records are deleted or cascade delete is handled
    await prisma.postdetail.deleteMany({
      where: { postId: id }
    });

    await prisma.post.delete({
      where: { id }
    });

    res.status(200).json({ message: "Post is deleted" });
  } catch (error) {
    console.error('Error deleting post:', error);
    res.status(500).json({ message: "Failed to delete post" });
  }
};



