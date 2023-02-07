import s from './style.module.css';

export default function FormButton({ children, color}) {
  return (
    <button className={[s.btn, s[color]].join(' ')}>
        { children }
    </button>
  )
}
