import prisma from "../lib/prisma.js";
import bcrypt from "bcrypt";


export const getUsers = async (req, res) => {
  try {
       const user= await prisma.user.findMany();
       res.status(200).json(user)
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to get users" });
  }
};


export const getUser = async (req, res) => { 
  const  id  = req.params.id;
  try {
    const user= await prisma.user.findUnique({ 
      where: { id },
    });
    res.status(200).json(user)
  } catch (error) {
    console.log(error); 
    res.status(500).json({ message: "Failed to get user" });
  }
}; 


export const UpdateUser = async (req,res) => {
  const id=req.params.id;
  const userTokenId=req.userId;
  
  if(id !== userTokenId){
    return res.status(403).json({message:"Not Authorized"})
  }
  const {password,avatar,...inputs}=req.body;
  let updatepassword=null;
  try { 
    if(password){
      updatepassword=await bcrypt.hash(password,10)
    }
    const updateuser=await prisma.user.update({
      where:{id},
      data:{
        ...inputs,
        ...(updatepassword && {password:updatepassword}),
        ...(avatar && {avatar}),
      }
    })
    res.status(200).json(updateuser)
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to Update user" });
  }
};                                                             


export const DeleteUser = async (req, res) => {
  const id=req.params.id;
  const userTokenId=req.userId;
  
  if(id !== userTokenId){
    return res.status(403).json({message:"Not Authorized"})
  }
  try {
    await prisma.user.delete({
      where:{id},
    })
    res.status(200).json({message:"Delete Successfully"}) 
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to delete users" });
  } 
};    


export const savepost = async (req, res) => {
  const postId = req.body.postId;
  const tokenUserId = req.userId;

  try {
    const savedPost = await prisma.savePost.findUnique({
      where: {
        userId_postId: {
          userId: tokenUserId,
          postId,
        },
      },
    });

    if (savedPost) {
      await prisma.savePost.delete({
        where: {
          id: savedPost.id,
        },
      });
      res.status(200).json({ message: "Post removed from saved List" });
    } else {
      await prisma.savePost.create({
        data: {
          userId: tokenUserId,
          postId,
        },
      });
      res.status(200).json({ message: "Post saved" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to delete users!" });
  }
};


export const profilePosts=async(req,res)=>{
  const tokenuserId=req.params.userId;
  try {
    const userpost=await prisma.post.findUnique({
      where:{userId:tokenuserId},
    });
    const save=await prisma.savePost.findUnique({
      where:{userId:tokenuserId},
      include:{
        post:true,
      }
    });
    const savepost = save.map(item=>item.post)
    res.status(200).json({userpost,savepost})
  } catch (error) {
    console.log(error);
    res.status(500).json({message:"Failed to fetch user profile"})
  }
}