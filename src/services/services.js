import axios from 'axios'
import constates from '../constants'

export const login = async(user, password) => {
  try {
    const response = await axios({
      url: constates.url+'login',
      method:'post',
      data: {
        user,
        password
      }
    })
    console.log(response.data)

    return response
  } catch (error) {
    if (error.response) {
      // El servidor respondió con un código de estado diferente de 2xx
      console.error('Error de respuesta:', error.response.status, error.response.data);
      return error.response; // Devuelve la respuesta de error para que pueda ser utilizada en otros lugares si es necesario
    } else if (error.request) {
      // La solicitud se hizo pero no se recibió respuesta
      console.error('Error de solicitud, no se recibió respuesta');
    } else {
      // Algo sucedió en la configuración de la solicitud que causó un error
      console.error('Error de configuración de solicitud:', error.message);
    }

    throw error;
  }  
}