import './App.css'
import Random from './components/Random'
import Tag from './components/Tag'



function App() {

  return (
    <div className='w-full h-full flex flex-col background relative items-center'>
      <h1 className='w-11/12 rounded-lg py-2 px-10 text-2xl font-bold text-center mt-[40px] bg-white rounded-sm'>RANDOM GIFs</h1>
      <div className='flex flex-col w-full items-center gap-y-10 mt-[30px]'>
         <Random/>
         <Tag/>
      </div>
    </div>
  )
}

export default App
