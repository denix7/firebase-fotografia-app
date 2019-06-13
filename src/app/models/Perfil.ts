export interface Perfil {
    titulo?: string;
    subtitulo?: string;
    educacion?: (Institucion | string)[];
    frase?: string;
    seccion1Titulo?: string;
    seccion1Subtitulo?: string;
  }

  interface Institucion {
    año: number;
    institucion: string;
  }