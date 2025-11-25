import database from '../../db/connection.js';

export async function findAll() {
  try {
    return await database('users')
      .select('id', 'username', 'email', 'photo');
  } catch (error) {
    throw new Error('Error fetching users: ' + error.message);
  }
}

export async function create(userData) {
  try {
    const result = await database('users')
      .insert(userData)
      .returning('id');

    return { lastInsertRowid: result[0].id };
  } catch (error) {
    throw new Error('Error creating user: ' + error.message);
  }
}

export async function remove(id) {
  try {
    const changes = await database('users')
      .where({ id })
      .del();

    return { changes };
  } catch (error) {
    throw new Error('Error removing user: ' + error.message);
  }
}

export async function update(id, userData) {
  try {
    const changes = await database('users')
      .where({ id })
      .update(userData);

    return { changes };
  } catch (error) {
    throw new Error('Error updating user: ' + error.message);
  }
}

export async function updateRole(id, role) {
  try {
    const changes = await database('users')
      .where({ id })
      .update({ role });

    return { changes };
  } catch (error) {
    throw new Error('Error updating user role: ' + error.message);
  }
}
