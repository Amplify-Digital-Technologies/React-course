import './App.css';
import Employee from './components/Employee';

function App() {
  const showEmployees = true;  
  return (
    <div className="App">
      {showEmployees ? (
        <>
          <Employee name="Shedrack" role="Intern"/>
          <Employee name="David"/>
          <Employee Name="Chidi"/>
        </>
      ) : (
        <p>You don't have access to employees</p>
      )}
        
    </div>
  );
}

export default App;
