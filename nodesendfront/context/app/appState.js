import React, { useReducer } from 'react';
import appReducer from './appReducer';
import appContext from './appContext';
import { MOSTRAR_ALERTA, OCULTAR_ALERTA,SUBIR_ARCHIVO_ERROR,SUBIR_ARCHIVO_EXITO,CREAR_ENLACE_ERROR, CREAR_ENLACE_EXITO} from '../../types';


const AppState = ({ children }) => {

    const initialState = {
        mensaje_archivo: null
    }

    // Crear el dispatch y state
    const [state, dispatch] = useReducer(appReducer, initialState);

    // Muestra una alerta
    const mostrarAlerta = msg => {
        dispatch({
            type: MOSTRAR_ALERTA,
            payload: msg
        });
        setTimeout(() => {
            dispatch({
                type: OCULTAR_ALERTA
            })
        }, 3000);
    }

    return (
        <appContext.Provider
            value={{
                mensaje_archivo: state.mensaje_archivo,
                mostrarAlerta
            }}
        >
            {children}
        </appContext.Provider>    
    )
}

export default AppState;