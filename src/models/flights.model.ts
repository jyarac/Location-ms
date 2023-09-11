import { model, Schema } from "mongoose";
import { IFlights } from "../domain/interfaces/flights.interfaces";

const flightsSchema = new Schema({
    plate: {
        type: String,
    },
    latitude: {
        type: Number,
    },
    longitude:{
        type: Number,
    },
    altitude:{
        type: Number,
    },
    fuel:{
        type: Number,
    },
    available:{
        type: Boolean,
    }
});
export default model<IFlights>('Flights', flightsSchema);