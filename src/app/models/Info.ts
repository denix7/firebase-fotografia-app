export interface Info {
  educacion?: (Educacion | string)[];
  email?: string;
  facebook?: string;
  github?: string;
  instagram?: string;
  nickName?: string;
  nombre?: string;
  servicio1?: string;
  servicio2?: string;
  servicio3?: string;
  subtituloPresentacion?: string;
  telefono?: string;
  titulo?: string;
  tituloPresentacion?: string;
  trabajo1?: string;
  trabajo2?: string;
  trabajo3?: string;
  trabajo4?: string;
  twitter?: string;
}

interface Educacion {
  'año': number;
  institucion: string;
}