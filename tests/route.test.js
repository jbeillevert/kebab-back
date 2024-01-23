const { Test } = require('@jest/globals');
const { createRecipe } = require('../src/controllers/recipes.controller');
const { getAllRecipes } = require('../src/controllers/recipes.controller');
const { getRecipeById } = require('../src/controllers/recipes.controller');
const { updateRecipe } = require('../src/controllers/recipes.controller');
const { deleteRecipe } = require('../src/controllers/recipes.controller');


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

test('route getAllRecipes succeeds with valid data', async () => {
  // Mock request and response objects
  const req = {};
  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn()
  }; // Call the function

  await getAllRecipes(req, res); // Assert the response

  expect(res.status).toHaveBeenCalledWith(200);
  expect(res.json).toHaveBeenCalledWith({
    count: null,
    data: [],
    error: null,
    status: 200,
    statusText: "OK"
  }); // Add additional assertions as needed
});

test('route getRecipeById succeeds with valid data', async () => {
    // Mock request and response objects
    const req = {
        params: {
        id: 1
        }
    };
    const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
    }; // Call the function
    
    await getRecipeById(req, res); // Assert the response
    
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
        count: null,
        data: [],
        error: null,
        status: 200,
        statusText: "OK"
    }); // Add additional assertions as needed
    });

test('route updateRecipe succeeds with valid data', async () => {
    // Mock request and response objects
    const req = {
        params: {
        id: 1
        },
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
    
    await updateRecipe(req, res); // Assert the response
    
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.send).toHaveBeenCalledWith('Updated'); // Add additional assertions as needed
    });

test('route deleteRecipe succeeds with valid data', async () => {
    // Mock request and response objects
    const req = {
        params: {
        id: 1
        }
    };
    const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn()
    }; // Call the function
    
    await deleteRecipe(req, res); // Assert the response
    
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.send).toHaveBeenCalledWith('Deleted'); // Add additional assertions as needed
    });