// # Colors
// ## Colors
interface Colors {
  primary: string;
  grayscales: Grayscales;
}
interface DarkColors extends Colors {
  primaryDark: string;
}
interface LightColors extends Colors {
  primaryLight: string;
}
// ## Grayscales
interface Grayscales {
  dark: string[];
  light: string[];
}
// ## Alert
interface Alert {
  sucess: string;
  error: string;
  warning: string;
  info: string;
  danger: string;
}

interface styleSystem {
  color: Colors;
}

export interface darkStyleSystem extends styleSystem {
  color: DarkColors;
}
export interface lightStyleSystem extends styleSystem {
  color: LightColors;
}

export default styleSystem;
