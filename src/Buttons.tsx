
interface buttons{
    label: string,
    onClick: () => void,
    className?: string
}

export default function Buttons({label, onClick, className}: buttons) {
  return (
    <div>
        <button onClick={onClick} className={`text-white text-center text-3xl p-6 rounded-xl shadow-xl ${className}`}>{label}</button>
    </div>
  )
}
