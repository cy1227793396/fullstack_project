import React, { memo, useEffect, useState } from 'react'
import './index.css'
export default memo(function Modal(props) {
  const {isShow,children,title}=props
  const {onClose,onConfirm}=props
  const [visible,setVisible]=useState(false)
  useEffect(()=>{
    setVisible(isShow)
  },[isShow])
  const closeModal=()=>{
    setVisible(false)
    onClose&&onClose()
  }
  const confirm=()=>{
    setVisible(false)
    onConfirm&&onConfirm()

  }
  const maskClick=()=>{
    setVisible(false)
    maskClick&&maskClick()
  }
  return (
    visible&&
    <div className='modal-wrapper'>
      <div className="modal">
        <div className="modal_title">{title}</div>
        <div className="modal_content">{children}</div>
        <div className="modal_operator">
          <button className='modal_operator_close' onClick={closeModal}>取消</button>
          <button className='modal_operator_confirm' onClick={confirm}>确定</button>
        </div>
      </div>
      <div className="mask" onClick={maskClick}></div>
    </div>
  )
})
