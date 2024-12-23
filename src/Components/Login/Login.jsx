import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';

export const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const predefinedCredentials = {
    username: "usuario123",
    password: "contraseña123",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.username) {
      newErrors.username = "El nombre de usuario es obligatorio.";
    }
    if (!formData.password) {
      newErrors.password = "La contraseña es obligatoria.";
    } else if (formData.password.length < 6) {
      newErrors.password = "La contraseña debe tener al menos 6 caracteres.";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      if (
        formData.username === predefinedCredentials.username &&
        formData.password === predefinedCredentials.password
      ) {
        navigate("/home");
      } else {
        setErrors({ general: "Credenciales incorrectas. Intenta nuevamente." });
      }
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Iniciar Sesión</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="username">Nombre de Usuario:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="form-input"
          />
          {errors.username && <p className="form-error">{errors.username}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="form-input"
          />
          {errors.password && <p className="form-error">{errors.password}</p>}
        </div>
        {errors.general && <p className="form-error">{errors.general}</p>}
        <button type="submit" className="form-button">
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default Login;
