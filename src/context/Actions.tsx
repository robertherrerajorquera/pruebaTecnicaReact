export const agregar = (
  favorito: string
  ): {
    type: "AGREGAR_FAVORITO";
    payload: {
      favorito: string;
    };
  } => ({
    type: "AGREGAR_FAVORITO",
    payload: {
        favorito
    }
  });
  
  export type Action =
    | ReturnType<typeof agregar>;