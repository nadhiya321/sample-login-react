
import './App.css';

function App() {
  const handleSignup = () => {
    window.alert('hi')
  }
  return (
    <div className="box">
      <div className="small-box">
        <img src={"./img/a.png"} className="App-logo" alt="logo" />
        <h2>Login Page</h2>
        <form>
          <label>
            <input className="input-control" type="text" name="username" placeholder="username" />
          </label>
          <lable>
            <input className="input-control" type="password" name="password" placeholder="password" />
          </lable>
          <button onClick={handleSignup} className="input-button" type="submit">Login </button>
          <p class="text">Forgot Password? or Sign Up
          </p>
        </form>

      </div>

    </div>
  );
}

export default App;
