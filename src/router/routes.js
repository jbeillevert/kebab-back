const express = require("express");
const router = express.Router();

// #-----LOGIN-----#

const loginController = require("../controllers/login.controller");

router.post("/login", loginController.login);

//#----------#


//#-----RECIPES-----#

const recipesController = require("../controllers/recipes.controller");

router.post("/recipes", recipesController.createRecipe);
router.get("/recipes", recipesController.getAllRecipes);
router.get("/recipes/:id", recipesController.getRecipeById);

//#----------#

module.exports = router;