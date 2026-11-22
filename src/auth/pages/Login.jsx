import Header from '../../infrastructure/components/Header.jsx';
import LoginForm from '../components/LoginForm.jsx';

function Login() {
  return (
    <>
      <Header titulo="Login" />
      <main className="container">
        <LoginForm />
      </main>
    </>
  );
}

export default Login;
