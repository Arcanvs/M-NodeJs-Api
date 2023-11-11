const { persona } = require('../models');

let controller = {};

controller.createPersona = async (req, res) => {
    if (!req.body.nombre || !req.body.apellido){
        return res.status(400).json({
            msg: 'Campos Obligatorios'
        });
    }
    try {
        let newPersona = await persona.create(req.body);
        return res.status(201).json({
            msg: 'Persona Creada',
            data: newPersona
        });
    } catch (error) {
        return res.status(500).json({
            msg: error
        });
    }
};

controller.updatePersona = async (req, res) => {
    try {
        let id = req.params.id;
        let body = req.body;
        let data = await persona.update(body, { where: { id: id } });
        if(data[0] === 0){
            return res.status(200).json({
                msg: 'Persona no encontrada'
            });
        }
        return res.status(200).json({
            msg: 'Persona Actualizada',
            data: body
        });
    } catch (error) {
        res.status(500).json({
            msg: error
        });
    }
};

controller.deletePersona = async (req, res) => {
    try {
        let id = req.params.id;
        let data = await persona.destroy({ where: { id: id } });
        if(data === 1){
            return res.status(200).json({
                msg: 'Persona Eliminada'
            });
        }
        return res.status(200).json({
            msg: 'Persona no encontrada'
        });
    } catch (error) {
        res.status(500).json({
            msg: error
        });
    }
};

controller.getAllPersona = async (req, res) => {
    try {
        let data = await persona.findAll();
        return res.status(200).json({
            data: data
        });
    } catch (error) {
        res.status(500).json({
            msg: error
        });
    }
};

module.exports = controller;