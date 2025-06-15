export const getPayments = (req, res) => {
    try {
        // buscar os pagamentos do banco de dados
        res.status(200).json({ menssage: "Get  Payments"});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error - Controller' });
        
    }
}