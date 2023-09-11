import { model, Schema } from 'mongoose';
import { INotification } from '../domain/interfaces/notification.interfaces';


const notificationSchema = new Schema({
    plate: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
},
{
    timestamps: true,
    versionKey: false
}
);
export default model<INotification>('Notification', notificationSchema);