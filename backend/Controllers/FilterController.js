const ProductModal = require('../Models/AddProduct');


exports.PriceFilter = async = (req, res) => {

    // const FindProductsBycat = await ProductModal.find({product_Category:req.params.CategorySlug});

    const ApplyPriceFilter = await ProductModal.find({product_Price:req.params.Price, product_Category:req.params.CategorySlug});
    
    res.json(ApplyPriceFilter);
}

exports.RatingFilter = async = (req, res) => {
    const ApplyRatingFilter = await ProductModal.find({product_Rating:req.params.Rating, product_Category:req.params.CategorySlug});

    res.json(ApplyRatingFilter);
}

