const Category = require("../models/category");

const addcategory = async (req, res) => {


    const { category } = req.body;
    const Newcategory = new Category({
        category: category
    });


    try {

        
            
        const existingUser = await Category.findOne({category : category});
        if(existingUser){
            return res.status(400).json({message: "This category Already Exists"});    
        }
        else
            {
                await Newcategory.save();
                res.status(201).json({Newcategory});
                

            }
        }
          catch (error) {
        // console.log(error)
        res.status(500).json({ message: "category note created" });

    }

}

module.exports = { addcategory };