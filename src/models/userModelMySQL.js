import connectionMySQL from "../../db/connectionMySQL.js";

export async function findAll() {
  try {
    const usuarios = await connectionMySQL("SELECT * FROM usuario LIMIT 5");
    return usuarios;
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching users: " + error.message);
  }
}

async function buscarUsuarioPorID(id) {
  console.log(`\nBuscando usuário com ID = ${id}...`);

  // 💡 Exemplo 2: Query com Sanitização de Variáveis
  // Use '?' no SQL e passe um array de valores para evitar SQL Injection
  const sql = "SELECT * FROM usuarios WHERE id = ?";

  try {
    const [usuario] = await db.query(sql, [id]); // Note o uso de `[id]`

    if (usuario) {
      console.log("✅ Usuário encontrado (Exemplo 2):", usuario);
    } else {
      console.log("Usuário não encontrado.");
    }
  } catch (error) {
    console.log(error.message);
  }
}

// Executa as funções de teste
// buscarUsuarios();

// buscarUsuarioPorID(1); // Descomente e ajuste o ID para testar a busca por ID

// import database from '../../db/connection.js';

// export async function findAll(){
//     try {
//         const query = 'SELECT id, username, email, photo FROM users;';
//         const statement = database.prepare(query);
//         const users = statement.all();
//         //statement.finalize();
//         return users;
//     } catch (error) {
//         console.log(error);
//         throw new Error('Error fetching users: '+ error.message);
//     }
// };

// export async function create(userData) {
//     try {
//         const query = 'INSERT INTO users (username, email) VALUES (?, ?);';
//         const statement = database.prepare(query);
//         const result = statement.run(userData.username, userData.email);
//         return result;
//     } catch (error) {
//         console.log(error);
//         throw new Error('Error creating user: ' + error.message);
//     }

// };

// export async function remove(id) {
//     try {
//         const query = 'DELETE FROM users WHERE id = ?;';
//         const statement = database.prepare(query);
//         const result = statement.run(id);
//         return result;
//     } catch (error) {
//         console.log(error);
//         throw new Error('Error removing user: ' + error.message);
//     }
// }

// export async function update(id, userData) {
//     try {
//         const query = 'UPDATE users SET username = ?, email = ? WHERE id = ?;';
//         const statement = database.prepare(query);
//         const result = statement.run(userData.username, userData.email, id);
//         return result;
//     } catch (error) {
//         console.log(error);
//         throw new Error('Error updating user: ' + error.message);
//     }

// }

// export async function updateRole(id, role) {
//     try {
//         const query = 'UPDATE users SET role = ? WHERE id = ?;';
//         const statement = database.prepare(query);
//         const result = statement.run(role, id);
//         return result;
//     } catch (error) {
//         console.log(error);
//         throw new Error('Error updating user: ' + error.message);
//     }

// }
