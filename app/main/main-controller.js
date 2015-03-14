(function (app) {
  'use strict';

  app
  .controller('MainController', [
    /* add dependencies here */
    function MainController() {
      this.when = new Date('March, 22 2015, 10:00 AM');
      this.where = {
        place: 'Clube da Bosch, Churrasqueira #4',
        address: 'Av. Robert Bosch, 168-480, Parque Via Norte, Campinas - São Paulo, Brasil'
      };
      this.howMuch = 'R$ 35,00 + Bebida (pagar até terça, 17/03)';
    }
  ]);
}(window.app));
