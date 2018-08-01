export class Utils{

    public static monthInMiliseconds() : number{
        var daysPerMonth = 30;
        var minutesPerDay = 1440;
        var milisecondsPerMinute = 60000;
        return  daysPerMonth * minutesPerDay * milisecondsPerMinute;
    }

    public static dayInMiliseconds() : number{
        var minutesPerDay = 1440;
        var milisecondsPerMinute = 60000;
        return minutesPerDay * milisecondsPerMinute;
    }

    public static restMonth(date : Date) : Date{
        return new Date(date.valueOf() - this.monthInMiliseconds());
    }

    public static aggregateMonth(date : Date) : Date{
        return new Date(date.valueOf() + this.monthInMiliseconds());
    }
}