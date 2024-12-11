import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css'

export const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Datos predefinidos de nombre de usuario y contraseña (simulando un backend)
  const predefinedCredentials = {
    username: "usuario123",  // Usuario predefinido
    password: "contraseña123", // Contraseña predefinida
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
      // Validación de las credenciales
      if (
        formData.username === predefinedCredentials.username &&
        formData.password === predefinedCredentials.password
      ) {
        console.log("Inicio de sesión exitoso:", formData);
        navigate("/home"); // Redirige a /home si las credenciales son correctas
      } else {
        setErrors({ general: "Credenciales incorrectas. Intenta nuevamente." });
      }
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="username">Nombre de Usuario:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.username && <p style={styles.error}>{errors.username}</p>}
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.password && <p style={styles.error}>{errors.password}</p>}
        </div>
        {errors.general && <p style={styles.error}>{errors.general}</p>}
        <button type="submit" style={styles.button}>
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    maxWidth: "400px",
    margin: "0 auto",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  formGroup: {
    marginBottom: "15px",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
  },
  error: {
    color: "red",
    fontSize: "12px",
  },
};

export default Login;
