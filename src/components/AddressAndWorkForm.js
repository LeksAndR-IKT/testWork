import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddressAndWorkForm = ({ formData, setFormData }) => {
    debugger
  const history = useNavigate();//для навигации
  const [workplaces, setWorkplaces] = useState([]);//для хранения полученных данных

  useEffect(() => {
    const fetchWorkplaces = async () => {//получение данных
      const response = await axios.get('https://dummyjson.com/products/categories');
      setWorkplaces(response.data);
      console.log(response.data)
    };
    
    fetchWorkplaces();
  }, []);

  const handleChange = (e) => {//запись введенных данных
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {//обработка кнопки перехода
    e.preventDefault();
    if (!formData.workplace || !formData.address) {
      alert('Пожалуйста, заполните все поля.');
      return;
    }
    history('/loan-parameters');//перехож
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Адрес и место работы</h3>
      <div className="mb-3">
        <label className="form-label">Место работы</label>
        <select className="form-select" name="workplace" value={formData.workplace} onChange={handleChange} required>
          <option value="">Выберите место работы</option>
          {workplaces.map((workplace) => (
            <option key={Date.now()} value={workplace.slug}>{workplace.slug}</option>
          ))}
        </select>
      </div>
      <div className="mb-3">
        <label className="form-label">Адрес проживания</label>
        <input type="text" className="form-control" name="address" value={formData.address} onChange={handleChange} required />
      </div>
      <button type="button" className="btn btn-secondary" onClick={() => history('/')}>Назад</button>
      <button type="submit" className="btn btn-primary">Далее</button>
    </form>
  );
};

export default AddressAndWorkForm;