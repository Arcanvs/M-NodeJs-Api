const persona = require('../controller/persona.controller');
const router = require('express').Router();

router.post('/', persona.createPersona);
router.get('/', persona.getAllPersona);
router.put('/:id', persona.updatePersona);
router.delete('/:id', persona.deletePersona);

module.exports = router;