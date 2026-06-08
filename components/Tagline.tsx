

const Tagline = ({text, icon, className}:{text:string, icon?:any, className?:string}) => {
  return (
      <div className={`inline-flex items-center gap-2 ${className || 'text-[#120E2E]'} text-xs font-semibold tracking-[0.2em] uppercase mb-6`}>
          {icon}
          <span>{text}</span>
      </div>
  )
}

export default Tagline
