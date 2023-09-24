import './Statistics.scss';
import Container from '../../../components/Container/Container';
import Counter from '../../../components/Counter/Counter';

function Statistics() {
  const statisticsContent = [
    {
      value: 10,
      type: '%',
      title: 'do lucro',
      content: 'operacional por investir em cultura.',
      extra: '+',
    },
    {
      value: 92,
      type: '%',
      title: 'dos membros',
      content:
        'do Conselho revelaram que o foco em Cultura melhorou a performance financeira de suas empresas.',
      extra: '',
    },
    {
      value: 2,
      type: 'x',
      title: 'maior',
      content: 'probabilidade de traduzir sua estratégia em ações.',
      extra: '',
    },
  ];

  return (
    <Container className="main-container">
      <div className="statistics-container">
        {statisticsContent.map(
          ({ index, value, type, title, content, extra }) => (
            <div className="statistics-main" key={index}>
              <div className="value">
                {extra}
                <Counter initialValue={0} finalValue={value} />
                {type}
              </div>
              <span className="title">{title}</span>
              <p className="content">{content}</p>
            </div>
          )
        )}
      </div>
    </Container>
  );
}

export default Statistics;
