import {z} from "zod";

const paymentSchema = z.object({
    data: z.string().datetime(),
    numerorecibo: z.number().min(1,{message:"numero do recibo é obrigatório"}),
    usuarioId: z.number().min(1,{message:"usuarioId é obrigatório"}),
    valor: z.number().min(1,{message:"valor é obrigatório"}),
    observacao: z.string().max(100, {message:"observacao não pode ter mais de 200 caracteres"}),  // optional with a default value
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

    
}

export default PaymentController;