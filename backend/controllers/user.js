import { db } from "../db.js"

export const getUsers = (_, res) =>{
    const q = "SELECT * FROM usuarios";

    db.query(q, (err, data) => {
        if(err) return res.json(err);

        return res.status(200).json(data);

    });
};

export const addUser = (req, res) => {
    const q = "INSERT INTO usuarios (`nome`, `email`, `fone`, `data_nascimento`) VALUES (?)";
    const values = [
      req.body.nome,
      req.body.email,
      req.body.fone,
      req.body.data_nascimento
    ];
  
    db.query(q, [values], (err, data) => {
      if (err) {
        console.error("Erro ao adicionar usuário:", err); 
        return res.status(500).json("Erro ao adicionar usuário, tente novamente.");
      }
      return res.status(200).json({
        id: data.insertId, 
        nome: req.body.nome,
        email: req.body.email,
        fone: req.body.fone,
        data_nascimento: req.body.data_nascimento
      });
    });
  };
  
  

export const updateUser = (req, res) => {
    const q = 
    "UPDATE usuarios SET `nome` = ?, `email` = ?, `fone` =?, `data_nascimento` = ? WHERE `id` = ?";

    const values = [
        req.body.nome,
        req.body.email,
        req.body.fone,
        req.body.data_nascimento,
      ];
      

    db.query(q, [...values, req.params.id], (err) => {
        if (err) return res.json(err);

        return  res.status(200).json("Usuario atualizado com sucesso.");

    });
};

export const deleteUser = (req, res) => {
    const q = "DELETE FROM usuarios WHERE `id` = ?";

    db.query(q, [req.params.id], (err) => {

    if (err) return res.json(err);
       return res.status(200).json("Usuario deletado com sucesso!");

    });   
};

