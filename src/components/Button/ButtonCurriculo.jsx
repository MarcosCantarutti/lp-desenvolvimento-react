import { useNavigate } from 'react-router-dom';
import './Button.scss';

function ButtonCurriculo(props) {
  const navigateTo = useNavigate();
  function handleClick() {
    navigateTo(`/enviar`, { state: { id: props.routeId } }); // Passa o ID para a rota 'enviar'
  }

  return (
    <button className={props.className} onClick={handleClick}>
      <a>{props.children}</a>
    </button>
  );
}

export default ButtonCurriculo;
