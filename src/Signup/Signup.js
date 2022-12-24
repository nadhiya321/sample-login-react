import './Signup.css';

function Signup() {
    return (
      <div className="container">
        <div className="split-box">
    
          <h2 className='text-color'>Create a Account</h2>
          <form>
            <label>
              <input className="form-control" type="text" name="username" placeholder="username" />
            </label>
            <lable>
              <input className="form-control" type="email" name="email" placeholder="email" />
            </lable>
            <lable>
              <input className="form-control" type="password" name="password" placeholder="password" />
            </lable>
            <button className="signup-button" type="submit">Signup </button>
          </form>
  
        </div>
  
      </div>
    );
  }
  export default Signup;
