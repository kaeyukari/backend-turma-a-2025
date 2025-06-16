import database from '../../db/connection.js';

export async function findAll() {
  try {
    const query = 'SELECT * FROM skins;';
    const statement = database.prepare(query);
    const skins = statement.all();
    return skins;
  } catch (error) {
    console.error(error);
    throw new Error('Erro ao buscar skins: ' + error.message);
  }
}

export async function findById(id) {
  try {
    const query = 'SELECT * FROM skins WHERE id = ?;';
    const statement = database.prepare(query);
    const skin = statement.get(id);
    return skin;
  } catch (error) {
    console.error(error);
    throw new Error('Erro ao buscar skin: ' + error.message);
  }
}

export async function create(skinData) {
  try {
    const query = `
      INSERT INTO skins (name, description, image_url, species_class, is_official, user_id)
      VALUES (?, ?, ?, ?, ?, ?);
    `;
    const statement = database.prepare(query);
    const result = statement.run(
      skinData.name,
      skinData.description || '',
      skinData.image_url,
      skinData.species_class,
      skinData.is_official ? 1 : 0,
      skinData.user_id
    );
    return result;
  } catch (error) {
    console.error(error);
    throw new Error('Erro ao criar skin: ' + error.message);
  }
}

export async function update(id, skinData) {
  try {
    const query = `
      UPDATE skins
      SET name = ?, description = ?, image_url = ?, species_class = ?, is_official = ?
      WHERE id = ?;
    `;
    const statement = database.prepare(query);
    const result = statement.run(
      skinData.name,
      skinData.description || '',
      skinData.image_url,
      skinData.species_class,
      skinData.is_official ? 1 : 0,
      id
    );
    return result;
  } catch (error) {
    console.error(error);
    throw new Error('Erro ao atualizar skin: ' + error.message);
  }
}

export async function remove(id) {
  try {
    const query = 'DELETE FROM skins WHERE id = ?;';
    const statement = database.prepare(query);
    const result = statement.run(id);
    return result;
  } catch (error) {
    console.error(error);
    throw new Error('Erro ao deletar skin: ' + error.message);
  }
}
