const express = require("express");
const router = express.Router();

// #-----LOGIN-----#

const loginController = require("../controllers/login.controller");

router.post("/login", loginController.login);

//#----------#


//#-----RECIPES-----#

const recipesController = require("../controllers/recipes.controller");

router.get("/recipes", recipesController.getRecipes);

//#----------#

module.exports = router;