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

    public static getDays(finishDate : string, startDate : string) : number{
        var finish = new Date(finishDate);        
        var start = new Date(startDate);
        var result = finish.valueOf() - start.valueOf();
        return ( result )/(1440*60000);
    }
}