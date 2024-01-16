const { createRecipe } = require('../src/controllers/recipes.controller');

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

