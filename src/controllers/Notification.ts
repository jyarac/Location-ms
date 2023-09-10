import { Request, Response } from 'express';
import { handleHttp } from '../config/utils/error.handle';

const getNotifications = (req:Request, res:Response) => {
    try{
        res.send("getNotifications");
    } catch(e){
       handleHttp(res, "ERROR_GET_NOTIFICATIONS");
    }
}

const getNotification = (req:Request, res:Response) => {   
    try{

    } catch(e){
       handleHttp(res, "ERROR_GET_NOTIFICATION");
    }
}
const postNotifications = ({ body }:Request, res:Response) => {
    try{
        console.log(body);
        res.send(body);
    } catch(e){ 
         handleHttp(res, "ERROR_POST_NOTIFICATIONS");
     }
}

const putNotifications = (req:Request, res:Response) => {   
    try{

    } catch(e){
         handleHttp(res, "ERROR_PUT_NOTIFICATION");
     }
}   

const deleteNotification = (req:Request, res:Response) => {   
    try{

    } catch(e){
         handleHttp(res, "ERROR_DELETE_NOTIFICATION");
     }

}
//export all the functions
export { getNotifications, getNotification, postNotifications, putNotifications, deleteNotification};