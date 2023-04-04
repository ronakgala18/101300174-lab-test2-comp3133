import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'orderBy' })
export class OrderByPipe implements PipeTransform {
  transform(array: any[], field: string, direction: 'asc' | 'desc' = 'asc'): any[] {
    if (!array || !field) {
      return array;
    }

    const sortOrder = direction === 'asc' ? 1 : -1;

    return array.sort((a, b) => {
      const valueA = a[field];
      const valueB = b[field];

      if (typeof valueA === 'string' && typeof valueB === 'string') {
        return valueA.localeCompare(valueB) * sortOrder;
      } else {
        return (valueA - valueB) * sortOrder;
      }
    });
  }
}
