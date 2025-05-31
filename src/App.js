import './App.css';
import Employee from './components/Employee';

function App() {
  console.log("I am learning React again after a long while");
  const showEmployees = false;  
  return (
    <div className="App">
      {console.log("Inside the return loop")}
      {showEmployees ? (
        <>
          <Employee />
          <Employee />
          <Employee />
          <Employee />
        </>
      ) : (
        <p>You don't have access to employees</p>
      )}
        
    </div>
  );
}

export default App;
