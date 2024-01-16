const supabase = require("../../supabase");

// Create
const createRecipe = async (req, res) => {
    const { name, type, nbIngredient, cookingTime, description, picture } = req.body;
    await supabase
        .from("recipes")
        .insert([
            {name: name, type: type, nb_ingredient: nbIngredient, cooking_time: cookingTime, description: description, picture: picture, creation_date: new Date()}
        ])
        .select()
        .then(() => {
            res.status(201).send("Created");
        })
        .catch((err) => {
            res.status(500).send("Error creating recipe : ", err);
        })
}

// Read
const getAllRecipes = async (req, res) => {
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

const getRecipeById = async (req, res) => {
    const { id } = req.params;
    await supabase
        .from("recipes")
        .select("*")
        .eq("id", id)
        .then((recipe) => {
            res.status(200).json(recipe)
        })
        .catch((err) => {
            res.status(500).send("Error getting recipe by id : ", err);
        })
}

// Update

const updateRecipe = async (req, res) => {
    const { id } = req.params;
    const { name, type, nbIngredient, cookingTime, description, picture } = req.body;
    await supabase
        .from("recipes")
        .update({
            name: name, type: type, nb_ingredient: nbIngredient, cooking_time: cookingTime, description: description, picture: picture
        })
        .eq("id", id)
        .then(() => {
            res.status(201).send("Updated");
        })
        .catch((err) => {
            res.status(500).send("Error updating recipe : ", err);
        })
}

module.exports = {
    createRecipe,
    getAllRecipes,
    getRecipeById,
    updateRecipe
}