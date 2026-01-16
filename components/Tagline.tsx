

const Tagline = ({text, icon}:{text:string, icon?:any}) => {
  return (
    
        <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-purple-100 to-blue-100 rounded-full text-purple-700 text-sm font-medium mb-8 shadow-sm">
            {icon}
            <span>{text}</span>
        </div>
  )
}

export default Tagline
