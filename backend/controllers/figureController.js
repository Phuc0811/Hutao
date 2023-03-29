import Figure from "../models/Figure.js"

//create new Figure
export const createFigure =async (req,res)=>{
    
    const newFigure = new Figure(req.body);

    try{
        const savedFigure = await newFigure.save();

        res 
            .status(200)
            .json({
                success: true,
                message: "Successfully created",
                data: savedFigure,
            });
    }catch (err){
        res.status(500)
        .json({ success: false, message: "Failed to create. Try again"});
    }
};

//update Figure
export const updateFigure = async(req,res) =>{
    const id =req.params.id
    try{
        const updatedFigure = await Figure.findByIdAndUpdate(id,{
            $set: req.body
        }, {new:true })

        res 
        .status(200)
        .json({
            success: true,
            message: "Successfully updated",
            data: updatedFigure,
        });
    }catch(err){
        res 
        .status(500)
        .json({
            success: false,
            message: "Failed to updated",
        });

    }
};
//delete Figure
export const deleteFigure = async(req,res) =>{
    const id =req.params.id;
    try{
        await Figure.findByIdAndDelete(id);

        res 
        .status(200)
        .json({
            success: true,
            message: "Successfully deleted",
        });
    }catch(err){
        res 
        .status(500)
        .json({
            success: false,
            message: "Failed to deleted",
        });

    }
};
//get SingleFigure
export const getSingleFigure = async(req,res) =>{
    const id =req.params.id;

    try{
        const Figures = await Figure.findById(id).populate('reviews');

        res 
            .status(200)
            .json({
                success: true,
                message: "Successfully found",
                data: Figures,
            });
    }catch (err){
        res.status(404)
        .json({
            success: false,
            message: "not found",
        });
    }
};
//get AllFigure
export const getAllFigure = async(req,res) =>{

// for pagination
    const page = parseInt(req.query.page);

    console.log(page);

    try{
        const Figures = await Figure.find({}).populate('reviews')
        .skip(page*8)
        .limit(8);

        res 
            .status(200)
            .json({
                success: true,
                count: Figures.length,
                message: "Successful",
                data: Figures,
            });
    }catch (err){
        res.status(404)
        .json({
            success: false,
            message: "not found",
        });
    }
};


//get Figure by search
export const getFigureBySearch = async(req,res)=>{

    //here 'i' means case sensitive
    const title = new RegExp(req.query.title, 'i');
    const price = parseInt(req.query.price);
    // const maxGroupSize = parseInt(req.query.maxGroupSize);
    const city = new RegExp(req.query.city, 'i');

    try{

        //gte means greater than equal
        const Figures = await Figure.find({ 
            title, 
            price: { $gte: price},
            city,
        }).populate('reviews');

        res 
            .status(200)
            .json({
                success: true,
                message: "Successful",
                data: Figures,
            });
    }catch(err){
        res.status(404)
        .json({
            success: false,
            message: "not found",
        });
    }
};

//get Featured Figure
export const getFeaturedFigures = async(req,res) =>{

        try{
            const Figures = await Figure.find({featured:true}).populate('reviews').limit(8);

            res 
                .status(200)
                .json({
                    success: true,
                    count: Figures.length,
                    message: "Successful",
                    data: Figures,
                });
        }catch (err){
            res.status(404)
            .json({
                success: false,
                message: "not found",
            });
        }
    };


    //get Figure counts
    export const getFigureCount = async(req,res) =>{
        try{
            const FigureCount = await Figure.estimatedDocumentCount();

            res.status(200).json({ success: true, data: FigureCount });
        }catch(err){
            res.status(500).json({ success: false, message: "failed to fetch" });
        }
    };
