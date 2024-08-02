import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ConfirmationModal from './ConfirmationModal';

const LoanParametersForm = ({ formData, setFormData }) => {
  const history = useNavigate();//для навигации
  const [showModal, setShowModal] = React.useState(false);//показываем или не показываем модалку
  const [confirmationMessage, setConfirmationMessage] = React.useState('');//показ самого модального окна

  const handleAmountChange = (e) => {//введение данных
    setFormData({ ...formData, loanAmount: Number(e.target.value) });//сохранение введенных данных
  };

  const handleTermChange = (e) => {//введение данных
    setFormData({ ...formData, loanTerm: Number(e.target.value) });//сохранение введенных данных
  };

  const handleSubmit = async (e) => {//обработка отправки формы
    e.preventDefault();
    
    // Отправка данных на сервер
    try {
      const response = await axios.post('https://dummyjson.com/products/add', {
        title: `${formData.firstName} ${formData.lastName}`,
      });
      
      // Показ модального окна с сообщением
      setConfirmationMessage(`Поздравляем, ${formData.lastName} ${formData.firstName}. Вам одобрена ${formData.loanAmount}$ на ${formData.loanTerm} дней.`);
      setShowModal(true);
    } catch (error) {//обработка ошибки
      console.error(error);
      alert('Произошла ошибка при отправке данных.');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3>Параметры займа</h3>
        <div className="mb-3">
          <label className="form-label">Сумма займа ($)</label>
          <input type="range" min="200" max="1000" step="100" value={formData.loanAmount} onChange={handleAmountChange} />
          <span>{formData.loanAmount}$</span>
        </div>
        <div className="mb-3">
          <label className="form-label">Срок займа (дни)</label>
          <input type="range" min="10" max="30" step="1" value={formData.loanTerm} onChange={handleTermChange} />
          <span>{formData.loanTerm} дней</span>
        </div>
        <button type="button" className="btn btn-secondary" onClick={() => history('/address-and-work')}>Назад</button>
        <button type="submit" className="btn btn-primary">Подать заявку</button>
      </form>

      {/* Модальное окно */}
      {showModal && (
        <ConfirmationModal message={confirmationMessage} onClose={() => setShowModal(false)} />
      )}
    </>
  );
};

export default LoanParametersForm;