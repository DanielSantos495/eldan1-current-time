const dateCurrent = new Date();
      twelveHoursNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
      twelveHoursName = ['Una','Dos','Tres','Cuatro','Cinco','Seis','Siete','Ocho','Nueve','Diez','Once','Doce'];

let hours = dateCurrent.getHours();
    minutes = dateCurrent.getMinutes() < 10 ? `${0}${dateCurrent.getMinutes()}`: dateCurrent.getMinutes();
    seconds = dateCurrent.getSeconds() < 10 ? `${0}${dateCurrent.getSeconds()}` : dateCurrent.getSeconds();

const time = (hour, ampm) => {

  let hourFixed = hour < 10 ? `${0}${hour}` : hour;
  return `${hourFixed}:${minutes}:${seconds} ${ampm}`;

};

const validateHourName = (hourName, tanda) => {
  console.log(`Hora actual: ${hourName} de la ${tanda}.`);
}

const validateHourTandaSixItems = (indexUno, indexDos, indexTres, indexCuatro, indexCinco, indexSeis, tanda) => {
  console.log(`Hora actual: ${time(hours,'PM')}`);
  switch (hours) {
    case twelveHoursNumber[indexUno]:
      validateHourName(twelveHoursName[indexUno], tanda);
      break;
    case twelveHoursNumber[indexDos]:
      validateHourName(twelveHoursName[indexDos], tanda);
      break;
    case twelveHoursNumber[indexTres]:
      validateHourName(twelveHoursName[indexTres], tanda);
      break;
    case twelveHoursNumber[indexCuatro]:
      validateHourName(twelveHoursName[indexCuatro], tanda);
      break;
    case twelveHoursNumber[indexCinco]:
      validateHourName(twelveHoursName[indexCinco], tanda);
      break;
    case twelveHoursNumber[indexSeis]:
      validateHourName(twelveHoursName[indexSeis], tanda);
      break;
  }
}
const validateHourTandaFiveItems = (indexUno, indexDos, indexTres, indexCuatro, indexCinco, tanda) => {
  console.log(`Hora actual: ${time(hours,'PM')}`);
  switch (hours) {
    case twelveHoursNumber[indexUno]:
      validateHourName(twelveHoursName[indexUno], tanda);
      break;
    case twelveHoursNumber[indexDos]:
      validateHourName(twelveHoursName[indexDos], tanda);
      break;
    case twelveHoursNumber[indexTres]:
      validateHourName(twelveHoursName[indexTres], tanda);
      break;
    case twelveHoursNumber[indexCuatro]:
      validateHourName(twelveHoursName[indexCuatro], tanda);
      break;
    case twelveHoursNumber[indexCinco]:
      validateHourName(twelveHoursName[indexCinco], tanda);
      break;
  }
}
const currentHour = () => {
  // Before midnight
  if (hours >= twelveHoursNumber[11]) {

    hours = hours === 12 ? hours : hours - 12;

    if ( hours === twelveHoursNumber[11] ) {
      // Tanda midday
      console.log(`Hora actual: ${time(hours, 'PM')}\n${twelveHoursName[11]} del medio día.`);

    } else if ( hours >= twelveHoursNumber[0] && hours < twelveHoursNumber[6] ) {
      // Tanda afternoon
      validateHourTandaSixItems(0, 1, 2, 3, 4, 5, 'tarde');

    } else if ( hours >= twelveHoursNumber[6] && hours < twelveHoursNumber[11] ) {
      // Tanda night
      validateHourTandaFiveItems(6, 7, 8, 9, 10, 'noche');

    }

  } else {
  // After midnight

    hours = hours === 0 ? 12 : hours;

    if ( hours === twelveHoursNumber[11] ) {
      //For requirements this hour is validate as nigth, not early morning. Tanda midnight
      console.log(`Hora actual: ${time(hours,'PM')}\n${twelveHoursName[11]} de la noche.`);
    }
    if ( hours >= twelveHoursNumber[0] && hours < twelveHoursNumber[5] ) {
      // Tanda early mornig
      validateHourTandaFiveItems(0, 1, 2, 3, 4, 'madrugada');

    } else if ( hours >= twelveHoursNumber[5] && hours < twelveHoursNumber[11] ) {
      // Tanda morning
      validateHourTandaSixItems(5, 6, 7, 8, 9, 10, 'mañana');

    }

  }
}

module.exports = { currentHour }
