import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Modal from './components/common/modal'

function App() {

  const [show,setShow]=useState(false)

  const onModalClose=()=>{
    setShow(false)
  }
  const onModalConfirm=()=>{
   setShow(false)
  }
  return (
    <div>
     <Modal isShow={show}
      title='标题'
     onClose={onModalClose}
     onConfirm={onModalConfirm}
      >
   <h3>我是内容区域</h3>
     </Modal>
     <button onClick={()=>{setShow(true)}}>点这里打开</button>
    </div>
  )
}

export default App
