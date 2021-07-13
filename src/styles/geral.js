import cores from './cores';
import fontes from './fontes';
import metricas from './metricas';

const geral = {
  container: {
    flex: 1,
    backgroundColor: cores.background,
  },
  titulo: {
    fontFamily: "Lexend-Regular",
    color: cores.gray800,
    fontWeight: '600',
    fontSize: fontes.extraLarge,
    alignSelf: 'center',
    marginBottom: metricas.doubleBaseMargin,
    letterSpacing: 2,
  },
  subTitulo: {
    fontFamily: "Lexend-Regular",
    color: cores.gray800,
    fontWeight: '600',
    fontSize: fontes.large,
    alignSelf: 'center',
    marginBottom: metricas.doubleBaseMargin,
  },
  numero: {
    fontFamily: "Lexend-Regular",
    color: cores.gray800,
    fontWeight: '700',
    fontSize: fontes.large,
    
    alignSelf: 'center',
    marginBottom: metricas.doubleBaseMargin,
  },
  texto: {
    fontFamily: "Inter-Regular",
    color: cores.gray500,
    fontSize: fontes.regular,
    alignSelf: 'center',
    marginBottom: metricas.doubleBaseMargin,
  }
};

export default geral;
