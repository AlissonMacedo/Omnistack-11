const express = require("express");
const { celebrate, Segments, Joi } = require("celebrate");

const ongController = require("./controllers/ongController");
const incidentController = require("./controllers/incidentController");
const profileController = require("./controllers/ProfileController");
const sessionControlller = require("./controllers/SessionController");

const routes = express.Router();

routes.get("/ongs", ongController.index);
routes.post(
  "/ongs",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      whatsapp: Joi.string().required().min(10).max(11),
      city: Joi.string().required(),
      uf: Joi.string().required().length(2),
    }),
  }),
  ongController.create
);

routes.post(
  "/session",
  celebrate({
    [Segments.BODY]: Joi.object({
      id: Joi.string().required(),
    }).unknown(),
  }),
  sessionControlller.create
);
routes.get(
  "/profile",
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required(),
    }).unknown(),
  }),
  profileController.index
);

routes.get(
  "/incident",
  celebrate({
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number(),
    }),
  }),
  incidentController.index
);
routes.post(
  "/incident",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      title: Joi.string().required(),
      description: Joi.string().required(),
      value: Joi.string().required().min(1).max(3),
    }),
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required(),
    }).unknown(),
  }),
  incidentController.create
);
routes.delete(
  "/incidents/:id",
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required(),
    }),
  }),
  incidentController.delete
);

module.exports = routes;
