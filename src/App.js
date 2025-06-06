import './App.css';
import Employee from './components/Employee';
import { useState } from 'react';

function App() {
  const [role, setRole] = useState('Dev');
  const showEmployees = true;  
  return (
    <div className='App'>
      {showEmployees ? (
        <>
          <input type='text' onChange={(e) => {
            console.log(e.target.value);
            setRole(e.target.value);
          }} />
          <Employee name='Shedrack' role='Intern'/>
          <Employee name='David' role={role}/>
          <Employee Name='Chidi'/>
        </>
      ) : (
        <p>You don't have access to employees</p>
      )}
        
    </div>
  );
}

export default App;
