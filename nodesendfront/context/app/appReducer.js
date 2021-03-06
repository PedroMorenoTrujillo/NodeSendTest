import { MOSTRAR_ALERTA, OCULTAR_ALERTA,SUBIR_ARCHIVO_ERROR,SUBIR_ARCHIVO_EXITO,CREAR_ENLACE_ERROR, CREAR_ENLACE_EXITO } from '../../types';


export default (state, action) => {
    switch (action.type) {
        case MOSTRAR_ALERTA:
            return {
                ...state,
                mensaje_archivo: action.payload
            }
        case OCULTAR_ALERTA:
            return {
                ...state,
                mensaje_archivo: null
            }
        default:
           return state
    }
}