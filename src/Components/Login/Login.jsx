import { Box, TextField, Typography, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonMolecule from "../../DS/Molecules/ButtonMolecule";

// LoginContainer no depende de "theme"
const LoginContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundColor: "#f5f5f5",
});

// LoginBox utiliza padding y propiedades estáticas
const LoginBox = styled(Paper)({
  padding: "32px",
  maxWidth: 400,
  width: "100%",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  border: "2px solid #ddd",
});

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "admin" && password === "1234") {
      navigate("/dashboard"); // Redirige al usuario al dashboard
    } else {
      setError("Credenciales incorrectas. Intenta nuevamente.");
    }
  };

  return (
    <LoginContainer>
      <LoginBox>
        <Typography variant="h4" component="h1" textAlign="center" mb={3}>
          Iniciar Sesión
        </Typography>
        <TextField
          label="Usuario"
          variant="outlined"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Contraseña"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && (
          <Typography color="error" variant="body2" mt={2}>
            {error}
          </Typography>
        )}
        <Box mt={3}>
          <ButtonMolecule onClick={handleLogin}>
            Ingresar
          </ButtonMolecule>
        </Box>
      </LoginBox>
    </LoginContainer>
  );
};
