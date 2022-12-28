import React from 'react'
import { useSession } from 'next-auth/react';
import { ChevronDownIcon , ShoppingBagIcon , UserGroupIcon } from '@heroicons/react/outline'
import { CalendarIcon , ClockIcon , DesktopComputerIcon , UsersIcon} from '@heroicons/react/solid'
import SidebarRow from './SidebarRow';

export default function Sidebar() {
    const { data: session } = useSession();
    
  return (
    <div className='p-2 m-t-5 max-w-[600px] xl:min-w-[300px]  '>
      <SidebarRow src={session.user.image.toString()} title={session.user.name} ></SidebarRow>
      <SidebarRow Icon={UsersIcon} title="Friends" ></SidebarRow>
      <SidebarRow Icon={UserGroupIcon} title="Groups" ></SidebarRow>
      <SidebarRow Icon={ShoppingBagIcon} title="Marketplace" ></SidebarRow>
      <SidebarRow Icon={DesktopComputerIcon} title="Watch" ></SidebarRow>
      <SidebarRow Icon={CalendarIcon} title="Events" ></SidebarRow>
      <SidebarRow Icon={ClockIcon} title="Memories" ></SidebarRow>
      <SidebarRow Icon={ChevronDownIcon} title="See More" ></SidebarRow>
      {/* <SidebarRow Icon={UsersIcon} titlle="Friends" ></SidebarRow> */}
    </div>
  )
}
