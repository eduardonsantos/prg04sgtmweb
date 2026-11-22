import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Mesmo padrão de e-mail do formulário original (domínio completo, ex.: nome@dominio.com)
const padraoEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function LoginForm() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [enviou, setEnviou] = useState(false);
  const navigate = useNavigate();

  const emailValido = padraoEmail.test(email);
  const senhaValida = senha.length >= 6;

  function digitarEmail(event) {
    setEmail(event.target.value);
  }

  function digitarSenha(event) {
    setSenha(event.target.value);
  }

  function enviarFormulario(event) {
    event.preventDefault();
    setEnviou(true);
    // Só vai para o painel se os dois campos forem válidos
    if (emailValido && senhaValida) {
      navigate('/admin');
    }
  }

  function limparCampos() {
    setEmail('');
    setSenha('');
    setEnviou(false);
  }

  // Classes de validação do Bootstrap: aparecem depois de digitar ou de tentar enviar
  let classeEmail = 'form-control';
  if (email !== '' || enviou) {
    if (emailValido) {
      classeEmail = 'form-control is-valid';
    } else {
      classeEmail = 'form-control is-invalid';
    }
  }

  let classeSenha = 'form-control';
  if (senha !== '' || enviou) {
    if (senhaValida) {
      classeSenha = 'form-control is-valid';
    } else {
      classeSenha = 'form-control is-invalid';
    }
  }

  return (
    <div className="row justify-content-center">
      <section id="login" className="col-12 col-md-8 col-lg-6">
        <div className="card shadow-sm">
          <div className="card-body p-4">
            <h2 className="h4 text-center">Acesso ao Painel Administrativo</h2>
            <p className="text-center text-muted">Informe um e-mail válido e uma senha para simular o acesso à área restrita do sistema.</p>

            <form onSubmit={enviarFormulario} noValidate>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">E-mail</label>
                <div className="input-group has-validation">
                  <span className="input-group-text">@</span>
                  <input
                    type="email"
                    className={classeEmail}
                    id="email"
                    name="email"
                    inputMode="email"
                    placeholder="Digite seu e-mail"
                    required
                    value={email}
                    onChange={digitarEmail}
                  />
                  <div className="invalid-feedback">Informe um e-mail válido, por exemplo: nome@dominio.com</div>
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="senha" className="form-label">Senha</label>
                <input
                  type="password"
                  className={classeSenha}
                  id="senha"
                  name="senha"
                  placeholder="Digite sua senha"
                  required
                  value={senha}
                  onChange={digitarSenha}
                />
                <div className="invalid-feedback">A senha deve ter pelo menos 6 caracteres.</div>
              </div>

              <div className="d-grid gap-2 mt-4">
                <button type="submit" className="btn btn-primary">Entrar</button>
                <button type="button" className="btn btn-secondary" onClick={limparCampos}>Limpar</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LoginForm;
