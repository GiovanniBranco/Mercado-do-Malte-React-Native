import cores from './cores';
import fontes from './fontes';
import metricas from './metricas';

const geral = {
  container: {
    flex: 1,
    backgroundColor: cores.background,
  },
  titulo: {
    fontFamily: "Lexend-Bold",
    color: cores.gray800,
    fontWeight: '600',
    fontSize: fontes.large,
    marginBottom: metricas.doubleBaseMargin,
    textAlign: 'center'
  },
  tituloVerde:{
    fontFamily: "Lexend-ExtraBold",
    color: cores.green400,
    fontWeight: '500',
    fontSize: fontes.large,
    alignSelf: 'center',
  },
  subTitulo: {
    fontFamily: "Lexend-Regular",
    color: cores.gray800,
    fontWeight: '600',
    fontSize: fontes.large,
    alignSelf: 'center',
    marginBottom: metricas.doubleBaseMargin,
    letterSpacing: 2
  },
  numero: {
    fontFamily: "Lexend-ExtraBold",
    color: cores.greenlight,
    fontWeight: '700',
    fontSize: fontes.extraLarge,
    
    alignSelf: 'center',
    marginBottom: metricas.doubleBaseMargin,
  },
  texto: {
    fontFamily: "Inter-Regular",
    color: cores.gray500,
    fontSize: fontes.regular,
    alignSelf: 'center',
    marginBottom: metricas.doubleBaseMargin,
  },btnText: {
    color: cores.white,
    fontSize: fontes.input,
    fontFamily: "Inter-Bold",
    alignSelf: 'center',
  },
};

export default geral;
