import VfpassLogo from '../assets/vfpass-logo.png';
import './InfoSection.css'


export function InfoSection() {
  return (
    <>
      <aside>
        <h1>Gere senhas únicas, seguras e fortes com um clique com o VF PassGen</h1>
        <p>Personalize sua senha com caracteres especiais, números, letras maiúsculas e muito mais!</p>
        <img src={VfpassLogo} alt="VFPass Logo" style={{ maxWidth: '150px', marginBottom: '1rem' }} />
      </aside>
    </>
  )
}