'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  validateBoletos: async (ctx) => {
    const funcionID = ctx.request.body.funcion
    const boletos = ctx.request.body.boletos
    const reservas = await strapi.query('reserva').model
      .find({ funcion: funcionID }).populate('boletos')
    for (const reserva of reservas) {
      for (const boleto of reserva.boletos) {
        if (boletos.some(i => i.px === boleto.px && i.py === boleto.py)) {
          ctx.response.status = 409
          return ctx.body = { available: false }
        }
      }
    }
    ctx.send({ available: true })
  }
};
