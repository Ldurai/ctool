import { Column, ColumnOptions } from 'typeorm';
import { parseISO, format } from 'date-fns';

export function CustomDateColumn(options?: ColumnOptions) {
  return function (target: any, propertyName: string) {
    Column({
      ...options,
      type: 'date',
      transformer: {
        to: (value: Date) => format(value, 'yyyy-MM-dd'),
        from: (value: string) => value ? parseISO(value) : null,
      },
    })(target, propertyName);
  };
}
