const pool = require("../db/connection");

// simple email format check
function isValidEmail(email) {
   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

exports.registerEmployee = async (req, res, next) => {

   try {

      const { name, email, department } = req.body;

      // check missing OR empty fields
      if (!name || !email || !department) {
      return res.status(400).json({
        error: "All fields are required"
      });
    }

      // email format validation
      if (!isValidEmail(email)) {
         return res.status(400).json({ error: "Invalid email format" });
      }

      // insert into DB
      await pool.query(
         "INSERT INTO employees (name,email,department) VALUES (?,?,?)",
         [name, email, department]
      );

      res.status(201).json({ message: "Employee registered successfully" });

   } catch (error) {

      // duplicate email error
      if (error.code === "ER_DUP_ENTRY") {
         return res.status(400).json({ error: "Email already exists" });
      }

      next(error); // send other errors to error middleware
   }
};
