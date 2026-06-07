

const Tagline = ({text, icon}:{text:string, icon?:any}) => {
  return (
      <div className="inline-flex items-center gap-2 text-[#120E2E] text-xs font-semibold tracking-[0.2em] uppercase mb-6">
          {icon}
          <span>{text}</span>
      </div>
  )
}

export default Tagline
