import { Link } from "react-router-dom";

function Application() {
  return (
    <div className="App">
      <div className="App-header">
      <meta name="viewport" content="initial-scale=1, width=device-width" />

        <h1>You are now logged in!</h1>
        <nav>
            <Link to="/">Logout</Link>
        </nav>

      </div>
    </div>
  );
}

export default Application;
