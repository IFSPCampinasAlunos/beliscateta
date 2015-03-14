(function () {
  var translations = {
    ptBR: {
      date: ptbrDate
    }
  };

  angular
  .module('localize-filter', [])
  .filter('localize', function () {
    return function (content) {
      switch (true) {
        case (content instanceof Date):
          return translations.ptBR.date(content);

        default:
          return content;
      }
    };
  });

  ptbrDate.weekDay = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
  function ptbrDate(date) {
    return '%week, %day/%month/%year às %hours:%minutes'
    .replace('%week', ptbrDate.weekDay[date.getDay()])
    .replace('%day', date.getDate())
    .replace('%month', ('00' + (date.getMonth() + 1)).slice(-2)) // in js, january starts on 0.
    .replace('%year', date.getFullYear())
    .replace('%hours', ('00' + date.getHours()).slice(-2))
    .replace('%minutes', ('00' + date.getMinutes()).slice(-2));
  }
}());
