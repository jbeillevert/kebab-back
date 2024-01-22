const { Test } = require('@jest/globals');
const { createRecipe } = require('../src/controllers/recipes.controller');


test('route createRecipe succeeds with valid data', async () => {
  // Mock request and response objects
  const req = {
    body: {
      name: "test",
      type: "test",
      nbIngredient: 1,
      cookingTime: 1,
      description: "test",
      picture: "test"
    }
  };
  const res = {
    status: jest.fn().mockReturnThis(),
    send: jest.fn()
  }; // Call the function

  await createRecipe(req, res); // Assert the response

  expect(res.status).toHaveBeenCalledWith(201);
  expect(res.send).toHaveBeenCalledWith('Created'); // Add additional assertions as needed
});