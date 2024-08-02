import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const PersonalDataForm = ({ formData, setFormData }) => {
    const {
        handleSubmit,
    } = useForm();

  const history = useNavigate();//для навигации между страницами

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value }); // сохранение введенных данных
  };

  const onSubmit = (e) => {
    if (!formData.phone || !formData.firstName || !formData.lastName || !formData.gender) {
      alert('Пожалуйста, заполните все поля.');
      return;
    }
    history('/address-and-work');//переход на следующую страницу
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>Личные данные</h3>
      <div className="mb-3">
        <label className="form-label">Телефон</label>
        <input type="tel" className="form-control" name="phone" value={formData.phone} onChange={handleChange} required pattern="[0-9]{11}"/>
      </div>
      <div className="mb-3">
        <label className="form-label">Имя</label>
        <input type="text" className="form-control" name="firstName" value={formData.firstName} onChange={handleChange} required  />
      </div>
      <div className="mb-3">
        <label className="form-label">Фамилия</label>
        <input type="text" className="form-control" name="lastName" value={formData.lastName} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label className="form-label">Пол</label>
        <select className="form-select" name="gender" value={formData.gender} onChange={handleChange} required>
          <option value="">Выберите пол</option>
          <option value="male">Мужской</option>
          <option value="female">Женский</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">Далее</button>
    </form>
  );
};

export default PersonalDataForm;