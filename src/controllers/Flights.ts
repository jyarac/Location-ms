
import { Request, Response } from 'express';
import { handleHttp } from '../config/utils/error.handle';

const getFlights = (req:Request, res:Response) => {
    try{
        
    }
    catch(e){
        handleHttp(res, "ERROR_GET_FLIGHTS");
    }
}
const getFlight = (req:Request, res:Response) => {
    try{

    }
    catch(e){
        handleHttp(res, "ERROR_GET_FLIGHT");
    }

}
//export all the functions
export { getFlights, getFlight};