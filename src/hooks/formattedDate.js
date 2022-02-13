import { format, fromUnixTime } from 'date-fns';
import { es } from 'date-fns/locale';

const formattedDate = (date) => {
  return format(fromUnixTime(date), "dd 'de' MMMM 'de' yyyy", { locale: es });
};

const sameDates = (expenses, index, date) => {
  if (index !== 0) {
    const currentDate = formattedDate(date);
    const previousDate = formattedDate(expenses[index - 1].date);
    return currentDate === previousDate;
  }
};

export { formattedDate, sameDates };
