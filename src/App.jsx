import { useState } from 'react'
import logo from '../src/assets/logo.png'
import Alert from './components/Alert'

const App = () => {

  const colorTags= [
    'Slate', 'Gray', 'Zinc', 'Neutral', 'Stone', 
    'Red', 'Orange', 'Amber', 'Yellow', 'Lime',
    'Green', 'Emerald', 'Teal', 'Cyan', 'Sky', 
    'Blue', 'Indigo', 'Violet', 'Purple', 'Fuchsia',
    'Pink', 'Rose'
  ]

  
  const colorLists = [
    ['#f8fafc', '#f1f5f9', '#e2e8f0', '#cbd5e1', '#94a3b8', '#64748b', '#475569', '#334155', '#1e293b', '#0f172a'],
    ['#f9fafb', '#f3f4f6', '#e5e7eb', '#d1d5db', '#9ca3af', '#6b7280', '#4b5563', '#374151', '#1f2937', '#111827'],
    ['#fafafa', '#f4f4f5', '#e4e4e7', '#d4d4d8', '#a1a1aa', '#71717a', '#52525b', '#3f3f46', '#27272a', '#18181b'],
    ['#fafafa', '#f5f5f5', '#e5e5e5', '#d4d4d4', '#a3a3a3', '#737373', '#525252', '#404040', '#262626', '#171717'],
    ['#fafaf9', '#f5f5f4', '#e7e5e4', '#d6d3d1', '#a8a29e', '#78716c', '#57534e', '#44403c', '#292524', '#1c1917'],
    ['#fef2f2', '#fee2e2', '#fecaca', '#fca5a5', '#f87171', '#ef4444', '#dc2626', '#b91c1c', '#991b1b', '#7f1d1d'],
    ['#fff7ed', '#ffedd5', '#fed7aa', '#fdba74', '#fb923c', '#f97316', '#ea580c', '#c2410c', '#9a3412', '#7c2d12'],
    ['#fffbeb', '#fef3c7', '#fde68a', '#fcd34d', '#fbbf24', '#f59e0b', '#d97706', '#b45309', '#92400e', '#78350f'],
    ['#fefce8', '#fef9c3', '#fef08a', '#fde047', '#facc15', '#eab308', '#ca8a04', '#a16207', '#854d0e', '#713f12'],
    ['#f7fee7', '#ecfccb', '#d9f99d', '#bef264', '#a3e635', '#84cc16', '#65a30d', '#4d7c0f', '#3f6212', '#365314'],
    ['#f0fdf4', '#dcfce7', '#bbf7d0', '#86efac', '#4ade80', '#22c55e', '#16a34a', '#15803d', '#166534', '#14532d'],
    ['#ecfdf5', '#d1fae5', '#a7f3d0', '#6ee7b7', '#34d399', '#10b981', '#059669', '#047857', '#065f46', '#064e3b'],
    ['#f0fdfa', '#ccfbf1', '#99f6e4', '#5eead4', '#2dd4bf', '#14b8a6', '#0d9488', '#0f766e', '#115e59', '#134e4a'],
    ['#ecfeff', '#cffafe', '#a5f3fc', '#67e8f9', '#22d3ee', '#06b6d4', '#0891b2', '#0e7490', '#155e75', '#164e63'],
    ['#f0f9ff', '#e0f2fe', '#bae6fd', '#7dd3fc', '#38bdf8', '#0ea5e9', '#0284c7', '#0369a1', '#075985', '#0c4a6e'],
    ['#eff6ff', '#dbeafe', '#bfdbfe', '#93c5fd', '#60a5fa', '#3b82f6', '#2563eb', '#1d4ed8', '#1e40af', '#1e3a8a'],
    ['#eef2ff', '#e0e7ff', '#c7d2fe', '#a5b4fc', '#818cf8', '#6366f1', '#4f46e5', '#4338ca', '#3730a3', '#312e81'],
    ['#f5f3ff', '#ede9fe', '#ddd6fe', '#c4b5fd', '#a78bfa', '#8b5cf6', '#7c3aed', '#6d28d9', '#5b21b6', '#4c1d95'],
    ['#faf5ff', '#f3e8ff', '#e9d5ff', '#d8b4fe', '#c084fc', '#a855f7', '#9333ea', '#7e22ce', '#6b21a8', '#581c87'],
    ['#fdf4ff', '#fae8ff', '#f5d0fe', '#f0abfc', '#e879f9', '#d946ef', '#c026d3', '#a21caf', '#86198f', '#701a75'],
    ['#fdf2f8', '#fce7f3', '#fbcfe8', '#f9a8d4', '#f472b6', '#ec4899', '#db2777', '#be185d', '#9d174d', '#831843'],
    ['#fff1f2', '#ffe4e6', '#fecdd3', '#fda4af', '#fb7185', '#f43f5e', '#e11d48', '#be123c', '#9f1239', '#881337'],
  ]

  const [copied, setCopied] = useState(false)
  const [copiedText, setCopiedText] = useState(null)


  const copyToClipboard = (text) => {
    if(navigator.clipboard.writeText(text)){
      setCopied(() => true)
      setCopiedText(() => text)
      setTimeout(() => {
        setCopied(() => false)
      }, 1500);
    }
  }

  return (
    <div className="bg-gradient-to-b from-slate-800 to-slate-900 min-h-screen text-slate-100">
      <Alert message={copiedText} action={copied} />
      <div className='container mx-auto p-4'>
        <header className='flex items-center justify-between py-4 border-b border-slate-500 select-none'>
          <div className='flex justify-center items-center gap-2 '>
            <img src={logo} alt="ColorCraze" className='rounded-full w-10' />
            <h1 className='font-bold text-xl'>ColorCraze</h1>
          </div>
          <a href='https://github.com/maulydev' rel='noopener' target='_blank' className='bg-blue-600 px-4 py-1 rounded flex items-center gap-1 text-sm md:text-base appearance-none'>About <span className='hidden md:block'>TechCrony</span></a>
        </header>

        <main className='p-4 space-y-8'>
          {
            colorLists.map((_, index) => {
              return(
                <section key={`${index}cc`} className=''>
                  <h1 className='text-2xl font-bold'>{colorTags[index]}</h1>
                  <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-4'>
                    {
                      colorLists[index].map((list) => {
                        return(
                          <li key={list} onClick={() => copyToClipboard(list)} value={list} className='cursor-pointer'>
                            <div  
                              style={{ background: list }} 
                              className={`hover:scale-[1.02] w-full h-24 rounded-lg flex items-center justify-center shadow-lg border border-slate-700`}></div>
                            <div className='p-2'>{list}</div>
                          </li>
                        ) 
                      })
                    }
                  </ul>
                </section>
              )
            })
          }
        </main>
      </div>
      <footer className='select-none text-center w-full text-sm py-8 border-t border-slate-500 container mx-auto'>Copyright © { new Date().getFullYear() } Tech<span className='bg-white text-slate-900 px-1 rounded font-bold'>Crony</span> </footer>
    </div>
  )
}

export default App
