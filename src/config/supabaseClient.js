import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ytwqoxqlsxdzjtwblgsr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl0d3FveHFsc3hkemp0d2JsZ3NyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMyNzcwMTYsImV4cCI6MTk5ODg1MzAxNn0.oXozSfFoBGUmZMY8V51gmQTB0Y0_0_BK2Q7JoBWNoIg";

// const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
// const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
