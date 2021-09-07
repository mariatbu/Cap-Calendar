<<<<<<< HEAD
export class DateService{
    
    static getDayOfMonth(date){
=======
export class DateService {
    static getDayOfMonth(date) {
        function calendarMonth(date) {
            let calendar = [];
            getFirstDayCalendar(date);
            let i = 1;
            for (i = 0; i < 42; i++) {
                calendar.push({date:new Date(date),isToday:true,isMonth:true,isSelected:true});
                date.setDate(date.getDate() + 1);
            }
            return calendar;
        }

        function getFirstDayCalendar(date) {
            date.setDate(1);
            while (date.getDay() != 1) { date.setDate(date.getDate() - 1); }
        }
>>>>>>> Quinonerodev

    }

    static addMonth(date, diff) {
        date.setMonth(date.getMonth() + diff)
        return DateService.getDayOfMonth(date);

    }

}