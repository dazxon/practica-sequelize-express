const express = require("express");
const app = express();
const db = require("./db");
const routes = require("./routes");
const models = require("./models");

//
const seed = require("./utils/seed");

app.use(express.static("build"));
app.use(express.json());
app.use("/api", routes);

// error middleware -> https://expressjs.com/es/guide/error-handling.html
app.use((err, req, res, next) => {
  console.log("ERROR");
  console.log(err);
  res.status(500).send(err.message);
});

////////////////////////////////////////////////////////////
//seeding DB
async function seedDatabase() {
  try {
    // Sync the model with the database
    await db.sync({ force: true });

    // Seed the database with the libros array
    await models.Libros.bulkCreate(seed);

    console.log("Database seeded successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    // Close the database connection
    await db.close();
  }
}

//seedDatabase(); // commenting to not seed in every reset
/////////////////////////////////////////////////////////////

// localhost:8080/api => error 404
app.use("/api", (req, res) => {
  res.sendStatus(404);
});

db.sync()
  .then(() => {
    app.listen(8080, () => {
      console.log("Server on port 8080 - http://localhost:8080/");
    });
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
