import styled from 'styled-components';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { es } from 'date-fns/locale';
import { DateUtils } from 'react-day-picker';
import dateFnsFormat from 'date-fns/format';
import dateFnsParse from 'date-fns/parse';
import 'react-day-picker/lib/style.css';
import theme from '../../theme';

const ContainerInput = styled.div`
  input {
    box-sizing: border-box;
    background: ${theme.grayStrong};
    color: ${theme.white};
    border: none;
    cursor: pointer;
    border-radius: 0.625rem; /* 10px */
    height: 5rem; /* 80px */
    width: 100%;
    padding: 0 1.25rem; /* 20px */
    font-size: 1.5rem; /* 24px */
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0.5rem;
    transition: ease 0.6s;
    &:hover {
      background: ${theme.purpleStrong};
    }
  }

  @media (max-width: 60rem) {
    & > * {
      width: 100%;
    }
  }
`;

//Parseo de la fecha
function parseDate(str, format) {
  const parsed = dateFnsParse(str, format, new Date(), { locale: es });
  if (DateUtils.isDate(parsed)) {
    return parsed;
  }
  return undefined;
}

//Formateo de la fecha
function formatDate(date, format) {
  return dateFnsFormat(date, format, { locale: es });
}

const DatePicker = ({ currentDate, setDate }) => {
  return (
    <ContainerInput>
      <DayPickerInput
        value={currentDate}
        onDayChange={(day) => setDate(day)}
        format="dd 'de' MMMM 'de' yyyy"
        formatDate={formatDate}
        parseDate={parseDate}
      />
    </ContainerInput>
  );
};

export default DatePicker;
