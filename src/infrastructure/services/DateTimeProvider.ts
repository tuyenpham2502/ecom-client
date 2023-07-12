import moment from "moment";
import Constants from "src/core/application/common/Constants";
import { IDateTimeProvider } from "src/core/application/services/IDateTimeProvider";

export default class DateTimeProvider implements IDateTimeProvider {
    currentDateTime(format: string = Constants.Logger.DateTimeFormat) {
        return (moment(new Date())).format(format);
    }

}
