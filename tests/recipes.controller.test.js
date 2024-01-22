const supertest = require('supertest');
const { createRecipe } = require('../src/controllers/recipes.controller');
const { getAllRecipes } = require('../src/controllers/recipes.controller');
const { getRecipeById } = require('../src/controllers/recipes.controller');

test('createRecipe succeeds with valid data', async () => {
  // Mock request and response objects
  const req = { body: { name: 'Test Recipe', type: 'Dessert', nbIngredient: 5, cookingTime: 30, description: 'A delicious recipe', picture: 'recipe.jpg' } };
  const res = {
    status: jest.fn().mockReturnThis(),
    send: jest.fn()
  };

  // Call the function
  await createRecipe(req, res);

  // Assert the response
  expect(res.status).toHaveBeenCalledWith(201);
  expect(res.send).toHaveBeenCalledWith('Created');
  // Add additional assertions as needed
});


test('getAllRecipes succeeds with valid data', async () => {
  // Mock request and response objects
  const req = {};
  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn()
  };

  // Call the function
  await getAllRecipes(req, res);

  // Assert the response
  expect(res.status).toHaveBeenCalledWith(200);
  expect(res.json).toHaveBeenCalledWith({
    count: null,
    data: [],
    error: null,
    status: 200,
    statusText: "OK"
  });
  // Add additional assertions as needed
});

test('getRecipeById succeeds with valid data', async () => {
  // Mock request and response objects
  const req = { params: { id: 1 } };
  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn()
  };

  // Call the function
  await getRecipeById(req, res);

  // Assert the response
  expect(res.status).toHaveBeenCalledWith(200);
  expect(res.json).toHaveBeenCalledWith({
    count: null,
    data: [],
    error: null,
    status: 200,
    statusText: "OK"
  });
  // Add additional assertions as needed
});

