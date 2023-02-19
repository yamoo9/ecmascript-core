// 참고: https://beta.reactjs.org/learn/add-react-to-a-website

const numbers = [100, 200, 300, 400, 500, 600, 700];

const Headline = (props) => (
  <h1>
    <span style={{ color: '#2100e3' }}>{props.children}</span>
  </h1>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="app" data-component="App">
    <Headline>헬로 리베하얀 1 😃</Headline>
    <ul>
      {numbers.map((n) => (
        <li key={n}>{n}</li>
      ))}
    </ul>
  </div>
);
