import { format } from 'date-fns';
import addDays from 'date-fns/addDays';

function geraContasReceber(reservas) {
  const receber = reservas.map((reserva) => {
    const valor = reserva.TotalDaReservaSemImposto - reserva.ComissãoPersonalizada;
    const codigoPropriedade = reserva.NomeAlojamento;
    const dbDateCheckout = reserva.checkout.split('-');
    const dbDateCheckin = reserva.checkin.split('-');
    const DAYS = 5;
    let vencimento = 0;
    if (reserva.Portal === 'Booking.com') {
      vencimento = format(
        new Date(dbDateCheckout[2], dbDateCheckout[1] - 1, dbDateCheckout[0]),
        'dd/MM/yyyy',
      );
    }
    if (reserva.Portal === 'Airbnb.com') {
      vencimento = format(
        addDays(new Date(dbDateCheckin[2], dbDateCheckin[1] - 1, dbDateCheckin[0]), DAYS),
        'dd/MM/yyyy',
      );
    }
    return { valor, vencimento, codigoPropriedade };
  });
  return (receber.filter((conta) => conta.vencimento !== 0));
}

export default geraContasReceber;
