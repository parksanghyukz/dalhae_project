import React from 'react'
import Mheader from './Mheader'
import Mfooter from './Mfooter'
import { Outlet } from 'react-router-dom'
import MmainWrap from '../../pages/mobile/MmainWrap'

export default function Mroot() {
  return (
    <div>
      <Mheader/>
      <MmainWrap>
        <Outlet/>
      </MmainWrap>
      <Mfooter/>
    </div>
  )
}
