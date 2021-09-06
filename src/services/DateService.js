export class DateService {
    static getDayOfMonth(date) {
        function calendarMonth(fecha) {
            let calendar = [];
            getFirstDayCalendar(fecha);
            let i = 1;
            for (i = 0; i < 42; i++) {
                calendar.push(new Date(fecha));
                fecha.setDate(fecha.getDate() + 1);
            }
            return calendar;
        }

        function getFirstDayCalendar(fecha) {
            fecha.setDate(1);
            while (fecha.getDay() != 1) { fecha.setDate(fecha.getDate() - 1); }
        }

    }

    static addMonth(date, diff) {
        date.setMonth(date.getMonth() + diff)
        return DateService.getDayOfMonth(date);

    }

}