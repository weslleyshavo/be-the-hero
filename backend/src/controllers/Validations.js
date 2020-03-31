const { celebrate, Segments, Joi } = require('celebrate')

const ValidationCreateSession = celebrate({
    [Segments.BODY]: Joi.object().keys({
        id: Joi.string().required()
    })
})

const ValidationOngsindex = celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number().integer()
    })
})

const ValidationCreate = celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)
    })
})

const ValidationProfile = celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown()
})

const ValidationIncidentsindex = celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number().integer()
    })
})

const ValidationCreateIncidents = celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown(),
    [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
        value: Joi.number().required()
    })
})

const ValidationDeleteIncident = celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().integer().required()
    })
})

module.exports = {
    ValidationCreateSession,
    ValidationOngsindex,
    ValidationCreate, 
    ValidationProfile,
    ValidationIncidentsindex,
    ValidationCreateIncidents,
    ValidationDeleteIncident
}