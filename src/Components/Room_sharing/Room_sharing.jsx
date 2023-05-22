import React from 'react'
import './Room_sharing.css'
import { FaBeer } from 'react-icons/fa';
import PersonIcon from '@mui/icons-material/Person';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import PeopleIcon from '@mui/icons-material/People';
import GroupsIcon from '@mui/icons-material/Groups';
function Room_sharing() {
  return (
    <div className='room_sharing container mt-5 '>
      <div>
      <table class="table  text-center bg-info text-white overFlow">
  
    <tr className='room_sharing_tr text-center'>
    <th scope="col" className='room_sharing_tr text-center'><span><PersonIcon /></span> <br/> Single Room</th>
      <th scope="col" className='room_sharing_tr text-center'> <span><PersonIcon/><PersonIcon/></span> <br/>Twin Sharing</th>
      <th scope="col" className='room_sharing_tr text-center'><span><PersonIcon/><PersonIcon/><PersonIcon/></span> <br/>Triple Sharing</th>
      <th scope="col" className='room_sharing_tr text-center'> <span><PersonIcon/> <PersonIcon/><PersonIcon/><PersonIcon/> </span> <br/>Quad Sharing</th>
      <th scope="col" className='room_sharing_tr text-center'><span><PersonIcon/> <PersonIcon/><PersonIcon/><PersonIcon/><PersonIcon/> </span><br/>Quint Sharing</th>
      <th scope="col" className='room_sharing_tr  text-center'><span><PersonIcon/> <PersonIcon/><PersonIcon/><PersonIcon/><PersonIcon/><PersonIcon/> </span><br/>Hexa Sharing</th>
     <th scope="col" className='room_sharing_tr text-center'> <span><AccessibilityNewIcon/></span><br/> Child With Bed</th>
      <th scope="col" className='room_sharing_tr text-center'> <span><AccessibilityNewIcon/></span> <br/>Child With Bed</th>
    </tr>
  
  <tbody>
    <tr className='room_sharing_tr text-dark m-auto'>
      
      <td className='room_sharing_tr '>RS 5,000/-</td>
      <td className='room_sharing_tr'>RS 5,000/-</td>
      <td className='room_sharing_tr'>RS 5,000/-</td>
      <td className='room_sharing_tr'>RS 5,000/-</td>
      <td className='room_sharing_tr'>RS 5,000/-</td>
      <td className='room_sharing_tr m-auto'>RS 5,000/-</td>
      <td className='room_sharing_tr'>RS 5,000/-</td>
      <td className='room_sharing_tr'>RS 5,000/-</td>
      
    </tr>
    
  </tbody>
</table>
      </div>
    </div>
  )
}

export default Room_sharing
