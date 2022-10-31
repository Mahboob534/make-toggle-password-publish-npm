
import './App.css';
import TogglePassword from './hooks/TogglePassword'
function App() {
  const{ iconEye, passwordVisibility, handlePasswordVisibility}=TogglePassword()
  return (
    <div className="App">
      <header className="App-header">
      <input type={passwordVisibility?"password":"text"} style={{width:"40%",height:"35%",margin:"5px"}} />
           <button onClick={handlePasswordVisibility} type="button"> مشلاهده رمز</button>
      </header>
    </div>
  );
}

export default App;
