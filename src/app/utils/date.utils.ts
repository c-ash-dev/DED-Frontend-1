export class DateUtils {
     public static ConvertRustTimeToDate(rusttime: any): Date {
          let time = <Object>rusttime;
          let time_sum = time["secs_since_epoch"] * 1000;
          return new Date(time_sum);
     }

     public static CheckAndConvertRustTime(rusttime: any): Date {
          if(!rusttime) {
               return null;
          }

          if(rusttime instanceof Date) {
               return rusttime;
          }
          else {
               return this.ConvertRustTimeToDate(rusttime);
          }
     }
}