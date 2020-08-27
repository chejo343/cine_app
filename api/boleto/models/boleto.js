'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  lifecycles: {
    async afterCreate(result, data) {
      const funcion = await strapi.query('funcion').model
        .findById(result.reserva.funcion)
      await strapi.query('pelicula').model
        .findByIdAndUpdate(funcion.pelicula, {$inc: { taquilla: 1 }}, { new: true })
    }
  }
};
