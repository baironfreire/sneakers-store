import moment from "moment-timezone";
import { TIMEZONE, RESPONSE_DATE_FORMAT } from '../constants';

export class UtilDate{

    static getResponseDate() {
        return moment((new Date().getTime())).tz(TIMEZONE).format(RESPONSE_DATE_FORMAT);
    }
   
}

