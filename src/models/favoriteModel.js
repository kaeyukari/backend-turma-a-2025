import database from '../../db/connection.js';

export async function findByUser(user_id) {
  try {
    return await database('favorites')
      .join('skins', 'skins.id', 'favorites.skin_id')
      .select('skins.*', 'favorites.id as favorite_id')
      .where('favorites.user_id', user_id);
  } catch (error) {
    throw new Error('Erro ao buscar favoritos: ' + error.message);
  }
}

export async function create(user_id, skin_id) {
  try {
    const result = await database('favorites')
      .insert({ user_id, skin_id })
      .returning('id');

    return { lastInsertRowid: result[0].id };
  } catch (error) {
    throw new Error('Erro ao favoritar skin: ' + error.message);
  }
}

export async function remove(user_id, skin_id) {
  try {
    const result = await database('favorites')
      .where({ user_id, skin_id })
      .del();

    return { changes: result };
  } catch (error) {
    throw new Error('Erro ao remover favorito: ' + error.message);
  }
}
