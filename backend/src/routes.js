const express = require('express')
const routes = express.Router()

const {
    ValidationCreateSession,
    ValidationOngsindex,
    ValidationCreate, 
    ValidationProfile,
    ValidationIncidentsindex,
    ValidationCreateIncidents,
    ValidationDeleteIncident
} = require('./controllers/Validations')

const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

routes.post('/sessions', ValidationCreateSession, SessionController.create)
routes.get('/ongs', ValidationOngsindex, OngController.index)
routes.post('/ongs', ValidationCreate, OngController.create)
routes.get('/profile', ValidationProfile, ProfileController.index)
routes.get('/incidents', ValidationIncidentsindex, IncidentController.index)
routes.post('/incidents', ValidationCreateIncidents, IncidentController.create)
routes.delete('/incidents/:id', ValidationDeleteIncident, IncidentController.delete)

module.exports = routes