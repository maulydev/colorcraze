const Alert = ({ message, action }) => {
  return (
    <div className={`select-none bg-gradient-to-b from-slate-900 via-slate-900 to-transparent text-slate-100 text-center py-4 fixed inset-x-0 z-50 transition-all duration-1000 ${ !action ? '-translate-y-full' : '' }`}>{ message } copied!</div>
  )
}

export default Alert