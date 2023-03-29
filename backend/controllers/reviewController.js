import Figure from "../models/Figure.js";
import Review from "../models/Review.js"

export const createReview = async(req,res)=>{
    const figureId = req.params.figureId
    const newReview = new Review({...req.body})

    try{

        const savedReview = await newReview.save()

        //after creating a new now update the reviews array of the tour
        await Figure.findByIdAndUpdate(figureId,{
            $push: {reviews: savedReview._id}
        })

        res.status(200).json({success: true, message:"Review submited",
        data: savedReview})

    }catch(err){
        res.status(500).json({success: true, message:"failed to submit"})
    }
}