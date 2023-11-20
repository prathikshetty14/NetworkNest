// controllers/api/v1/users.js
const fs = require('fs/promises');
const path = require('path');

const jsonFilePath = path.join(__dirname, '../../../userData.json');

const readJsonFile = async () => {
  const jsonContent = await fs.readFile(jsonFilePath, 'utf-8');
  return JSON.parse(jsonContent);
};

const writeJsonFile = async (data) => {
  await fs.writeFile(jsonFilePath, JSON.stringify(data, null, 2), 'utf-8');
};


// Get all users with pagination
const getUsers = async (req, res) => {
  try {
    const { page = 1, limit = 1000 } = req.query;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const jsonData = await readJsonFile();
    const users = jsonData.slice(startIndex, endIndex);
    const totalCount = jsonData.length;

    const result = {
      data: users,
      totalCount,
      currentPage: parseInt(page),
      totalPages: Math.ceil(totalCount / limit),
    };

    res.json(result);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


// Get a specific user by ID
const getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const jsonData = await readJsonFile();
    const user = jsonData.find((user) => user.id === parseInt(id));

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    console.error('Error fetching user by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


// Create a new user
const createUser = async (req, res) => {
  const userData = req.body;

  try {
    const jsonData = await readJsonFile();
    const newUser = { id: jsonData.length + 1, ...userData };
    jsonData.push(newUser);
    await writeJsonFile(jsonData);

    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


// Update an existing user by ID
const updateUser = async (req, res) => {
  const { id } = req.params;
  const userData = req.body;

  try {
    let jsonData = await readJsonFile();
    const index = jsonData.findIndex((user) => user.id === parseInt(id));

    if (index === -1) {
      return res.status(404).json({ error: 'User not found' });
    }

    jsonData[index] = { ...jsonData[index], ...userData };
    await writeJsonFile(jsonData);

    res.json(jsonData[index]);
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



// Delete a user by ID
const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    let jsonData = await readJsonFile();
    const index = jsonData.findIndex((user) => user.id === parseInt(id));

    if (index === -1) {
      return res.status(404).json({ error: 'User not found' });
    }

    const deletedUser = jsonData.splice(index, 1)[0];
    await writeJsonFile(jsonData);

    res.json({ message: 'User deleted successfully', deletedUser });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
