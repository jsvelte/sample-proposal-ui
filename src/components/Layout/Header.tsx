import { IoIosMenu } from 'react-icons/io'
import React, { FC, Fragment } from 'react'
import { BiSliderAlt } from 'react-icons/bi'
import { Bell, Search } from 'react-feather'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDown, Settings, LogOut } from 'react-feather'

import { classNames } from '~/helpers/classNames'

type Props = {
  handleToggle: () => void
}

const Header: FC<Props> = ({ handleToggle }): JSX.Element => {
  return (
    <header className="w-full bg-dark-purple border-b border-purple-border flex items-center">
      <div className="w-[280px] border-r border-purple-border flex-shrink-0">
        <div className="flex items-center">
          <button
             type="button"
             onClick={handleToggle}
             className="hover:bg-[#533154] px-3 py-3 cursor-pointer"
          >
            <IoIosMenu className="text-[#d4ced4] w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="flex-1 px-2 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className={classNames(
            'relative bg-[#5d3d5e] overflow-hidden rounded-md',
            'transition-all ease-in-out duration-150 flex items-center'
          )}>
            <input 
              type="text" 
              className={classNames(
                'bg-[#5d3d5e] outline-none text-white p-1 text-sm pl-2',
                'rounded-md placeholder-gray-300 min-w-[700px] pr-14',
                'hover:bg-[#644565] transition ease-in-out duration-150'
              )}
              placeholder="Search Slackana Member"
            />
            <div className="absolute right-2 flex space-x-2">
              <BiSliderAlt className="w-4 h-4 text-white" />
              <Search className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2 px-2">
          <UserNotification />
          <UserDropDown />
        </div>
      </div>
    </header>
  )
}

const UserDropDown = (): JSX.Element => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src="https://ca.slack-edge.com/E028JVBUY4F-U03N1UNTGAY-5ef1b06f109b-512" 
          alt="" 
          className="w-6 h-6 rounded"
        />
        <div className="absolute w-2 h-2 rounded-full bg-[#2bac76] right-0 top-5 flex-shrink-0"></div>
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className={classNames(
          'absolute right-0 mt-2 w-40 origin-top-right divide-y divide-gray-100',
          'rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
        )}>
          <div className="px-1 py-1 ">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-[#8a1e8c] text-white' : 'text-gray-600'
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm font-medium`}
                >
                  <Settings
                    className="mr-2 h-4 w-4"
                    aria-hidden="true"
                  />
                  Settings
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-[#8a1e8c] text-white' : 'text-gray-600'
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm font-medium`}
                >
                  <LogOut
                    className="mr-2 h-4 w-4"
                    aria-hidden="true"
                  />
                  Logout
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

const UserNotification = (): JSX.Element => {
  return (
    <button className="hover:bg-[#644565] rounded-full p-1 cursor-pointer">
      <Bell className="text-white w-5 h-5" />
    </button>
  )
}

export default Header
