import { Request, Response } from 'express';
import { handleHttp } from '../config/utils/error.handle';
import { insertNotification, requestNotifications, requestNotification, updateNotification, delNotification } from '../services/notification';

const getNotifications = async(req:Request, res:Response) => {
    try {
        const ResponseItem = await requestNotifications();
        res.send(ResponseItem);
    } catch(e){
    handleHttp(res, "ERROR_GET_NOTIFICATIONS")}
};



const getNotification = async({ params }:Request, res:Response) => {   
    try{
        const { id } = params;
        console.log(id);
        const ResponseItem = await requestNotification(id);
        res.send(ResponseItem);
    } catch(e){
       handleHttp(res, "ERROR_GET_NOTIFICATION");
    }
}
const postNotifications = async ({ body }:Request, res:Response) => {
    try{

        const ResponseItem = await insertNotification(body);
        res.send(ResponseItem);
    } catch(e){ 
         handleHttp(res, "ERROR_POST_NOTIFICATIONS");
     }
}

const putNotifications = ({params, body}: Request, res:Response) => {   
    try{
        const { id } = params;
        const ResponseItem = updateNotification(id, body);
        res.send(ResponseItem);

    } catch(e){
         handleHttp(res, "ERROR_PUT_NOTIFICATION");
     }
}   

const deleteNotification = ({params}:Request, res:Response) => {   
    try{
        const { id } = params;
        const ResponseItem = delNotification(id);
        res.send(ResponseItem);
    } catch(e){
         handleHttp(res, "ERROR_DELETE_NOTIFICATION");
     }

}
//export all the functions
export { getNotifications, getNotification, postNotifications, putNotifications, deleteNotification};