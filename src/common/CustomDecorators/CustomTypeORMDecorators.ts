import { Column, ColumnOptions } from 'typeorm';
import { parseISO, format } from 'date-fns';

export function CustomDateColumn(options?: ColumnOptions) {
  return function (target: any, propertyName: string) {
    Column({
      ...options,
      type: 'date',
      transformer: {
        to: (value: Date) => {
          console.log ('value original', value);

          const testdate = format(new Date("01-01-2024"),'MM-dd-yyyy');
          console.log ('testdate', testdate);

          const formattedValue = format(value, 'yyyy-MM-dd');
          console.log(`Converting to database format: ${propertyName} - ${formattedValue}`, value);
          return formattedValue;
        },
        from: (value: string) => {
          console.log(`Retrieving from database: ${propertyName} - ${value}`, value);
          return value ? parseISO(value) : null;
        },
      },
    })(target, propertyName);
  };
}
