import './App.css'
import Content from './components/Content'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <>
    <Header />
    <div className='flex justify-center items-start'>
      <div className='w-[5%]'><Sidebar /></div>
      <div className='w-[95%]'><Content /></div>
    </div>
    </>
  )
}

export default App
