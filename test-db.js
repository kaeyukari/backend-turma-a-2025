import db from "./src/db/connection.js";

db.raw("SELECT 1")
  .then(() => {
    console.log("🔵 Conectou ao banco!");
  })
  .catch((err) => {
    console.error("❌ Erro ao conectar:");
    console.error(err);
  })
  .finally(() => {
    db.destroy();
  });
