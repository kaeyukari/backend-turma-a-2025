import {z} from "zod";

const paymentSchema = z.object({
    data: z.string().datetime(),
    valor: z.number().positive(),
    numero: z.number().int().positive(),
    observacao: z.string().optional() // optional with a default value
});

const PaymentController = {
    async createPayment(req, res) {
        try {
            const {data, numerorecibo, usuarioId, valor, observacao } = req.body;
            paymentSchema.parse({ data, numerorecibo, usuarioId, valor, observacao  });
            console.log({ data, numerorecibo, usuarioId, valor, observacao  });
            res.status(201).json({ message: "Payment created successfully" });
        } catch (error) {
            if (error instanceof z.ZodError){
                return res.status(400).json({ 
                    message: "Erro de validação",
                    errors: error.errors.map(
                        err => ({
                            atributo: err.path[0],
                            mensagem: err.message,
 
                        })
                    )
                 });
            }
            res.status(500).json({ message: error.message });
        }
    },

    async updatePayment(req, res) {
        try {
            const { id } = req.params;
            const {valor, numero, data, observacao } = req.body;
            paymentSchema.parse({ valor, numero, data, observacao });
            res.status(200).json({ message: "Payment updated successfully", 
                                    data: { id, valor, numero, data, observacao } });
        
        } catch (error) {
            if (error instanceof z.ZodError){
                return res.status(400).json({ message: "Validation error", 
                                            details: error.errors});
            }
            res.status(500).json({ message: error.message });
        }

    },

    async deletePayment(req, res) {
        try {
            const { id } = req.params;
            res.status(200).json({ message: "Payment deleted successfully"});
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}

export default PaymentController;