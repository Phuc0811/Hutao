import Booking from "../models/Booking.js";

export const createBooking = async(req, res) =>{
    const newBooking = new Booking(req.body)
    try{
        const savedBooking = await newBooking.save()

        res.status(200).json({success:true, message:"Bạn đã booking",
    data: savedBooking});

    }catch (err){
        res.status(500).json({success:true, message:"Bạn chưa booking thành công"});
    }
};


//get single booking
export const getBooking = async(req,res)=>{
    const id =req.params.id;
    try {
        const book = await Booking.findById(id);
            res.status(200).json({success:true, message:"Thành công",
            data: book,});
    } catch (err) {
            res.status(404).json({success:true, message:"Không tìm thấy"});
    }
}

//get all booking
export const getAllBooking = async(req,res)=>{
    try {
        const books = await Booking.find();
            res.status(200).json({success:true, message:"Thành công",
            data: books,});
    } catch (err) {
            res.status(500).json({success:true, message:"Không tìm thấy booking"});
    }
}