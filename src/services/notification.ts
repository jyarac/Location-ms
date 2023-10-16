import notificationModel from '../models/notification.model';
import { INotification } from '../domain/interfaces/notification.interfaces';

const insertNotification = async (notification: INotification) => { 

    const responseInsert = await notificationModel.create(notification);
    return responseInsert;
};

const requestNotifications = async () => {
    const responseGet = await notificationModel.find();
    return responseGet;
};

const requestNotification = async (id: any) => {
    const threeMinutesAgo = new Date(Date.now() - 3 * 60 * 1000);
    const responseGet = await notificationModel.find(
        {plate: id, 
         createdAt: {$gte: threeMinutesAgo}},
    );
    return responseGet;
};

const updateNotification = async (id: string, data :Notification) => { 
    const responsePut = await notificationModel.findOneAndUpdate({_id: id},  data, {
        new: true,
    });
    return responsePut;
}

const delNotification = async (id: string) => {
    const responseDelete = await notificationModel.findByIdAndDelete(id);
    return responseDelete;
}



export { insertNotification , requestNotifications, requestNotification, updateNotification, delNotification };