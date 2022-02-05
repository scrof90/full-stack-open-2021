const kelvinToCelsius = (c) => c - 273.15;

const mpsToMph = (mps) => mps * 2.24;

const degreesToDirection = (deg) => {
  let dir;
  switch (true) {
    case deg >= 360 || deg <= 21:
      dir = 'N';
      break;
    case deg >= 22 && deg <= 44:
      dir = 'NNE';
      break;
    case deg >= 45 && deg <= 66:
      dir = 'NE';
      break;
    case deg >= 67 && deg <= 89:
      dir = 'ENE';
      break;
    case deg >= 90 && deg <= 111:
      dir = 'E';
      break;
    case deg >= 112 && deg <= 134:
      dir = 'ESE';
      break;
    case deg >= 135 && deg <= 156:
      dir = 'SE';
      break;
    case deg >= 157 && deg <= 179:
      dir = 'SSE';
      break;
    case deg >= 180 && deg <= 201:
      dir = 'S';
      break;
    case deg >= 202 && deg <= 224:
      dir = 'SSW';
      break;
    case deg >= 225 && deg <= 246:
      dir = 'SW';
      break;
    case deg >= 247 && deg <= 269:
      dir = 'WSW';
      break;
    case deg >= 270 && deg <= 291:
      dir = 'W';
      break;
    case deg >= 292 && deg <= 314:
      dir = 'WNW';
      break;
    case deg >= 315 && deg <= 336:
      dir = 'NW';
      break;
    case deg >= 337 && deg <= 359:
      dir = 'NNW';
      break;
    default:
      dir = 'no data';
  }

  return dir;
};

export { kelvinToCelsius, mpsToMph, degreesToDirection };
