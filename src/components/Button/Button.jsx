import './Button.scss';

function Button(props) {
  return (
    <button className={props.className}>
      <a href="https://wa.me/5534999457198" target="_blank">
        {props.children}
      </a>
    </button>
  );
}

export default Button;
