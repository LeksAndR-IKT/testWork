import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PersonalDataForm from './components/PersonalDataForm';
import AddressAndWorkForm from './components/AddressAndWorkForm';
import LoanParametersForm from './components/LoanParametersForm';

function App() {
  const [formData, setFormData] = useState({
    phone: '',
    firstName: '',
    lastName: '',
    gender: '',
    workplace: '',
    address: '',
    loanAmount: 200,
    loanTerm: 10,
  });

  return (
    <BrowserRouter>
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<PersonalDataForm formData={formData} setFormData={setFormData} />}/>
          <Route path="/address-and-work" element={<AddressAndWorkForm formData={formData} setFormData={setFormData} />}/>
          <Route path="/loan-parameters" element={<LoanParametersForm formData={formData} setFormData={setFormData} />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
