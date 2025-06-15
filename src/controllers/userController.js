export const getUsers = (req, res) => {
    try {
        // buscar os usuários do banco de dados
        res.status(200).json({ menssage: "Get Users"});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error - Controller' });
        
    }
}