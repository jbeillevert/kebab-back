const supabase = require("../../supabase");

const getRecipes = async (req, res) => {
    await supabase
        .from("recipes")
        .select("*")
        .then((recipes) => {
            res.status(200).json(recipes)
        })
        .catch((err) => {
            res.status(500).send("Error getting recipes : ", err);
        })
};

module.exports = {
    getRecipes
}