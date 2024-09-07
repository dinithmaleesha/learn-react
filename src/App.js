import './App.css';

function App() {
  const title = 'Welocome to new blog';
  const like = 50;
  const person = {name: 'Dinith', age: 22}; // cant out put object and bool
  const link = 'https://www.google.com';

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {like} times</p>

        {/* <p>{ person }</p> */}

        <p>{ 10 }</p>
        <p>{ 'Hello World' }</p>
        <p>{ [1, 2, 3, 4, 5] }</p>
        <p>{ Math.random() * 10 }</p>

        <a href={link}>Google</a>
      </div>
    </div>
  );
}

export default App;
