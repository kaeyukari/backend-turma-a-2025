import database from '../../db/connection.js';

export async function findAll() {
  try {
    return await database('skins').select('*');
  } catch (error) {
    throw new Error('Erro ao buscar skins: ' + error.message);
  }
}

export async function findById(id) {
  try {
    const skin = await database('skins')
      .where({ id })
      .first();

    return skin;
  } catch (error) {
    throw new Error('Erro ao buscar skin: ' + error.message);
  }
}

export async function create(skinData) {
  try {
    const result = await database('skins')
      .insert(skinData)
      .returning('id');

    return { lastInsertRowid: result[0].id };
  } catch (error) {
    throw new Error('Erro ao criar skin: ' + error.message);
  }
}

export async function update(id, skinData) {
  try {
    const changes = await database('skins')
      .where({ id })
      .update(skinData);

    return { changes };
  } catch (error) {
    throw new Error('Erro ao atualizar skin: ' + error.message);
  }
}

export async function remove(id) {
  try {
    const changes = await database('skins')
      .where({ id })
      .del();

    return { changes };
  } catch (error) {
    throw new Error('Erro ao deletar skin: ' + error.message);
  }
}
