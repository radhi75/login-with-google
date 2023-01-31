import logo from './logo.svg';
import './App.css';
import { GoogleLogin } from "@react-oauth/google";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </header>
    </div>
  );
}

export default App;
