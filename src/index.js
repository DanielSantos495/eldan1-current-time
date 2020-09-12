const dateCurrent = new Date();
      twelveHoursNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
      twelveHoursName = ['Una','Dos','Tres','Cuatro','Cinco','Seis','Siete','Ocho','Nueve','Diez','Once','Doce'];

let hours = dateCurrent.getHours() < 10 ? `${0}${dateCurrent.getHours()}` : dateCurrent.getHours();
    minutes = dateCurrent.getMinutes() < 10 ? `${0}${dateCurrent.getMinutes()}`: dateCurrent.getMinutes();
    seconds = dateCurrent.getSeconds() < 10 ? `${0}${dateCurrent.getSeconds()}` : dateCurrent.getSeconds();

const time = (ampm) => `${hours}:${minutes}:${seconds} ${ampm}`;

const currentHour = () => {

  // Before midnight
  if (hours >= twelveHoursNumber[11]) {

    hours = hours === 12 ? hours : hours - 12;

    if ( hours === twelveHoursNumber[11] ) {
      // Tanda midday
      console.log(`Hora actual: ${time('PM')}\n${twelveHoursName[11]} del medio día.`);
    } else if ( hours >= twelveHoursNumber[0] && hours < twelveHoursNumber[6] ) {
      // Tanda afternoon
      console.log(`Hora actual: ${time('PM')}`);
      if(hours === twelveHoursNumber[0]) console.log(`${twelveHoursName[0]} de la tarde.`);
      if(hours === twelveHoursNumber[1]) console.log(`${twelveHoursName[1]} de la tarde.`);
      if(hours === twelveHoursNumber[2]) console.log(`${twelveHoursName[2]} de la tarde.`);
      if(hours === twelveHoursNumber[3]) console.log(`${twelveHoursName[3]} de la tarde.`);
      if(hours === twelveHoursNumber[4]) console.log(`${twelveHoursName[4]} de la tarde.`);
      if(hours === twelveHoursNumber[5]) console.log(`${twelveHoursName[5]} de la tarde.`);

    } else if ( hours >= twelveHoursNumber[6] && hours < twelveHoursNumber[11] ) {
      // Tanda night
      console.log(`Hora actual: ${time('PM')}`);
      if(hours === twelveHoursNumber[6]) console.log(`${twelveHoursName[6]} de la noche.`);
      if(hours === twelveHoursNumber[7]) console.log(`${twelveHoursName[7]} de la noche.`);
      if(hours === twelveHoursNumber[8]) console.log(`${twelveHoursName[8]} de la noche.`);
      if(hours === twelveHoursNumber[9]) console.log(`${twelveHoursName[9]} de la noche.`);
      if(hours === twelveHoursNumber[10]) console.log(`${twelveHoursName[10]} de la noche.`);

    }

  } else {
  // After midnight

    hours = hours === 0 ? 12 : hours;

    if ( hours === twelveHoursNumber[11] ) {
      //For requirements this hour is validate as nigth, not early morning. Tanda midnight
      console.log(`Hora actual: ${time('PM')}\n${twelveHoursName[11]} de la noche.`);
    }
    if ( hours >= twelveHoursNumber[0] && hours < twelveHoursNumber[5] ) {
      // Tanda early mornig
      console.log(`Hora actual: ${time('AM')}`);
      if(hours === twelveHoursNumber[0]) console.log(`${twelveHoursName[0]} de la madrugada.`);
      if(hours === twelveHoursNumber[1]) console.log(`${twelveHoursName[1]} de la madrugada.`);
      if(hours === twelveHoursNumber[2]) console.log(`${twelveHoursName[2]} de la madrugada.`);
      if(hours === twelveHoursNumber[3]) console.log(`${twelveHoursName[3]} de la madrugada.`);
      if(hours === twelveHoursNumber[4]) console.log(`${twelveHoursName[4]} de la madrugada.`);

    } else if ( hours >= twelveHoursNumber[5] && hours < twelveHoursNumber[11] ) {
      // Tanda morning
      console.log(`Hora actual: ${time('AM')}`);
      if(hours === twelveHoursNumber[5]) console.log(`${twelveHoursName[5]} de la mañana.`);
      if(hours === twelveHoursNumber[6]) console.log(`${twelveHoursName[6]} de la mañana.`);
      if(hours === twelveHoursNumber[7]) console.log(`${twelveHoursName[7]} de la mañana.`);
      if(hours === twelveHoursNumber[8]) console.log(`${twelveHoursName[8]} de la mañana.`);
      if(hours === twelveHoursNumber[9]) console.log(`${twelveHoursName[9]} de la mañana.`);
      if(hours === twelveHoursNumber[10]) console.log(`${twelveHoursName[10]} de la mañana.`);

    }

  }
}

module.exports = { currentHour };
