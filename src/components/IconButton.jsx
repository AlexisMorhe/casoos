export default function IconButton({ Icon, checkedButton, onClick, text, buttonNumber }) {

  return (
    <button onClick={onClick} className={`${checkedButton === buttonNumber ? 'bg-sky-900 scale-105' : 'border-[3px] hover:scale-105 transition-all bg-slate-200 border-sky-900 hover:bg-slate-50'} w-32 h-32 py-4 rounded-md flex flex-col items-center justify-around transition-colors duration-300`}>
      <Icon  color={checkedButton === buttonNumber ? '#F8FAFC' : '#0C4A6E'} />
      <p className={`${checkedButton === buttonNumber ? 'text-slate-50' : 'text-sky-900'} text-base`}>{text}</p>
    </button>
  )
}