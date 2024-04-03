
import { IConfig, ConfigEnv, ModesTypes, MODES } from './types';
export const MODE: ModesTypes = MODES.develop;
export const typeHttp = "https://";

//Configuration by envirotments
const MAIN_CONFIG: ConfigEnv = {
    develop: {
        base: 'http://localhost:3000', //For redirection
        backend: typeHttp + process.env.REACT_APP_BACKEND_QA, //For API BACKEND
        credential: {
            clientSecret: process.env.REACT_APP_CLIENT_SECRET_QA,
            clientId: process.env.REACT_APP_CLIENT_ID_QA,
        }
    },
    qa: {
        base: '',
        backend: typeHttp + process.env.REACT_APP_BACKEND_QA, //For API BACKEND
        credential: {
            clientSecret: process.env.REACT_APP_CLIENT_SECRET_QA,
            clientId:  process.env.REACT_APP_CLIENT_ID_QA,
        }
    },
    production: {
        base: '',
        backend: typeHttp + process.env.REACT_APP_BACKEND,
        credential: {
            clientSecret: process.env.REACT_APP_CLIENT_SECRET,
            clientId: process.env.REACT_APP_CLIENT_ID,
        }
    }

}

const BASE_CONFIG: IConfig = MAIN_CONFIG[MODE];
export default BASE_CONFIG;




