import './Container.scss';

function Container(props) {
  return <section className={props.className}>{props.children}</section>;
}

export default Container;
