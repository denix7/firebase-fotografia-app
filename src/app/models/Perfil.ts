export interface Perfil {
    titulo?: string;
    titulo1?: string;
    titulo11?: string;
    titulo2?: string;
    titulo22?: string;
    subtitulo?: string;
    subtitulo1?: string;
    subtitulo2?: string;
    educacion?: (Institucion | string)[];
    frase?: string;
    nombre?: string;
    seccion1Titulo?: string;
    seccion1Subtitulo?: string;
  }

  interface Institucion {
    año: number;
    institucion: string;
  }