import mysql from "mysql2/promise";

// ⚙️ Configuração do Connection Pool
const pool = mysql.createPool({
  host: "localhost", // Seu host
  user: "root", // Seu usuário
  password: "", // Sua senha
  database: "tcc_nf", // Seu banco de dados
  waitForConnections: true,
  connectionLimit: 10, // Limite de conexões simultâneas
  queueLimit: 0,
});

/**
 * Executa uma query SQL usando o pool de conexões.
 * @param {string} sql - A string SQL a ser executada.
 * @param {Array} [values=[]] - Um array de valores para sanitizar a query.
 * @returns {Promise<Array>} - O resultado da query (rows).
 */
async function query(sql, values = []) {
  try {
    // Obtém uma conexão do pool (pool.execute é uma forma abreviada de pegar uma conexão e executá-la)
    const [rows, fields] = await pool.execute(sql, values);

    // Retorna apenas as linhas (os dados)
    return rows;
  } catch (error) {
    console.error("❌ ERRO NA QUERY SQL:", error);
    // Em um ambiente de produção, você pode relançar o erro ou retornar um valor seguro.
    throw new Error("Falha ao executar a operação no banco de dados.");
  }
}

// Exporta a função de query para ser usada em qualquer lugar do seu backend
export default query;

// module.exports = {
//   query,
// };
