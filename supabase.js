const { createClient } = require('@supabase/supabase-js');
require("dotenv").config();

console.log(process.env.API_URL);

const supabase = createClient(
  process.env.API_URL,
  process.env.API_KEY
)

console.info("Connected to the database");

module.exports = supabase;
