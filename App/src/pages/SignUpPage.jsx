import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock, FaChild, FaUserFriends, FaArrowLeft } from 'react-icons/fa';
import './SignUpPage.css';

const SignUpPage = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'parent' // 'parent' или 'child'
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Очищаем ошибку при изменении поля
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Пожалуйста, введите ваше имя';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Имя должно быть не менее 2 символов';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Пожалуйста, введите ваш логин (почту)';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Некорректный формат почты';
    }
    
    if (!formData.password) {
      newErrors.password = 'Пожалуйста, введите пароль';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Пароль должен быть не менее 6 символов';
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Пароли не совпадают';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      // Здесь будет ваш код для отправки данных на сервер
      console.log('Регистрация:', formData);
      
      // Имитация задержки
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Успешная регистрация
      navigate('/login', { 
        state: { 
          message: 'Регистрация успешна! Теперь вы можете войти.', 
          type: 'success' 
        } 
      });
      
    } catch (error) {
      console.error('Ошибка регистрации:', error);
      setErrors({ submit: 'Произошла ошибка при регистрации. Попробуйте позже.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="signup-container">
      {/* Анимированный фон */}
      <div className="signup-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>

      <div className="signup-card">
        {/* Кнопка назад */}
        <button className="back-btn" onClick={() => navigate(-1)}>
          <FaArrowLeft /> Назад
        </button>

        {/* Логотип/Заголовок */}
        <div className="signup-header">
          <div className="logo-icon">
            <FaUserFriends />
          </div>
          <h1 className="signup-title">Создать аккаунт</h1>
          <p className="signup-subtitle">Присоединяйтесь к семейному планировщику</p>
        </div>

        {/* Форма регистрации */}
        <form className="signup-form" onSubmit={handleSubmit}>
          {/* Имя */}
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              <FaUser className="label-icon" />
              Имя
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={`form-input ${errors.name ? 'error' : ''}`}
              placeholder="Введите ваше имя"
              value={formData.name}
              onChange={handleChange}
              autoComplete="name"
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>

          {/* Логин (почта) */}
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              <FaEnvelope className="label-icon" />
              Логин (почта)
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`form-input ${errors.email ? 'error' : ''}`}
              placeholder="example@email.com"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          {/* Пароль */}
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              <FaLock className="label-icon" />
              Пароль
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className={`form-input ${errors.password ? 'error' : ''}`}
              placeholder="Минимум 6 символов"
              value={formData.password}
              onChange={handleChange}
              autoComplete="new-password"
            />
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>

          {/* Подтверждение пароля */}
          <div className="form-group">
            <label htmlFor="confirmPassword" className="form-label">
              <FaLock className="label-icon" />
              Подтвердите пароль
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className={`form-input ${errors.confirmPassword ? 'error' : ''}`}
              placeholder="Повторите пароль"
              value={formData.confirmPassword}
              onChange={handleChange}
              autoComplete="new-password"
            />
            {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
          </div>

          {/* Роль */}
          <div className="form-group">
            <label className="form-label">
              <FaChild className="label-icon" />
              Роль в семье
            </label>
            <div className="role-selector">
              <label className={`role-option ${formData.role === 'parent' ? 'active' : ''}`}>
                <input
                  type="radio"
                  name="role"
                  value="parent"
                  checked={formData.role === 'parent'}
                  onChange={handleChange}
                />
                <div className="role-content">
                  <FaUserFriends className="role-icon" />
                  <div>
                    <strong>Родитель</strong>
                    <p>Создаю и управляю событиями</p>
                  </div>
                </div>
              </label>

              <label className={`role-option ${formData.role === 'child' ? 'active' : ''}`}>
                <input
                  type="radio"
                  name="role"
                  value="child"
                  checked={formData.role === 'child'}
                  onChange={handleChange}
                />
                <div className="role-content">
                  <FaChild className="role-icon" />
                  <div>
                    <strong>Ребёнок</strong>
                    <p>Участвую в семейных делах</p>
                  </div>
                </div>
              </label>
            </div>
          </div>

          {/* Общая ошибка */}
          {errors.submit && <div className="error-box">{errors.submit}</div>}

          {/* Кнопка регистрации */}
          <button 
            type="submit" 
            className="signup-btn"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span className="spinner"></span>
                Регистрация...
              </>
            ) : (
              'Зарегистрироваться'
            )}
          </button>
        </form>

        {/* Ссылка на вход */}
        <div className="signup-footer">
          <p>
            Уже есть аккаунт?{' '}
            <Link to="/login" className="login-link">
              Войти
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;