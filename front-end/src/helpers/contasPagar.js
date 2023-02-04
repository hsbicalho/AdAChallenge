import { format } from 'date-fns';
import addDays from 'date-fns/addDays';
import addWeekDays from './addWeekDays';

function geraContasPagar(reservas) {
  const filtraDados = reservas.filter((reserva) => reserva.Portal === 'Booking.com'
  || reserva.Portal === 'Airbnb.com');
  const receber = filtraDados.map((reserva) => {
    const valor = reserva.ExtraSemImposto;
    const codigoPropriedade = reserva.NomeAlojamento;
    const dbDate = reserva.checkout.split('-');
    let vencimento = 0;
    const daysToAdd = addWeekDays(format(
      new Date(dbDate[2], dbDate[1] - 1, dbDate[0]),
      'eeee',
    ));
    vencimento = format(
      addDays(new Date(dbDate[2], dbDate[1] - 1, dbDate[0]), daysToAdd),
      'dd/MM/yyyy',
    );
    return { valor, vencimento, codigoPropriedade };
  });
  return (receber.filter((conta) => conta.vencimento !== 0));
}

export default geraContasPagar;
