import React from 'react'

const Tabs = ({tabs,activeTab,setActivetab}) => {
  return (
    <div className='w-full my-2' >
        <div className='flex flex-wrap bg-blue-100 p-1 rounded-2xl border border-blue-200'>
            {tabs.map((tab)=>{
              <button key={tab.label}
              className={`relative flex-1 sm:flex-none px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm
              fpnt-bold rounded-xl transition-all ${activeTab===tab.label ? "bg-white text-blue-700 shadow-lg"
                : 'text-slate-500 hover:text-blue-600 hover:bg-white/50'} `}
                onClick={()=>setActivetab(tab.label)}>
                  <span className='relative z-10'>
                    {tab.label}
                    {activeTab===tab.label && (
                      <div className='absolute inset-0 bg-gradient-to-r from-sky-500/10 to-blue-500/10 rounded-xl '></div>
                    )}
                  </span>
                </button>
            })}
        </div>
    </div>
  )
}

export default Tabs