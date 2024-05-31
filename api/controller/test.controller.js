import jwt from "jsonwebtoken";


export const shouldBeloggedin = async (req, res) => {
   console.log("payload",req.userId);
        res.status(200).json({ message: "You are Authenticated" });
};

export const shouldBeAdmin = async(req,res)=>{
    const token = req.cookies.token;
    console.log(token);
    if (!token) return res.status(401).json({ message: "Not Authenticated" });

    jwt.verify(token, process.env.JWT_SECRET_TOKEN, async (err, payload) => {
        if (err) return res.status(403).json({ message: "Token is not valid" });

        if(!payload.isadmin){
            return res.status(403).json({ message: "Not Authorized"})
        }
    });
    res.status(200).json({ message: "You are Authenticated" });
}
