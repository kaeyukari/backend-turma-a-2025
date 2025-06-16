import database from '../../db/connection.js';

export async function findByUser(user_id) {
  try {
    const query = `
      SELECT skins.*, favorites.id AS favorite_id
      FROM favorites
      JOIN skins ON skins.id = favorites.skin_id
      WHERE favorites.user_id = ?;
    `;
    const statement = database.prepare(query);
    const favorites = statement.all(user_id);
    return favorites;
  } catch (error) {
    console.error(error);
    throw new Error('Erro ao buscar favoritos: ' + error.message);
  }
}

export async function create(user_id, skin_id) {
  try {
    const query = 'INSERT INTO favorites (user_id, skin_id) VALUES (?, ?);';
    const statement = database.prepare(query);
    const result = statement.run(user_id, skin_id);
    return result;
  } catch (error) {
    console.error(error);
    throw new Error('Erro ao favoritar skin: ' + error.message);
  }
}

export async function remove(user_id, skin_id) {
  try {
    const query = 'DELETE FROM favorites WHERE user_id = ? AND skin_id = ?;';
    const statement = database.prepare(query);
    const result = statement.run(user_id, skin_id);
    return result;
  } catch (error) {
    console.error(error);
    throw new Error('Erro ao remover favorito: ' + error.message);
  }
}
