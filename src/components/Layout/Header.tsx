import Avatar from 'react-avatar'
import { IoIosMenu } from 'react-icons/io'
import React, { FC, Fragment } from 'react'
import { BiSliderAlt } from 'react-icons/bi'
import { Bell, Search } from 'react-feather'
import { Settings, LogOut, User } from 'react-feather'
import { Menu, Transition, Popover } from '@headlessui/react'

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
      <div className="flex-1 px-4 flex items-center justify-between">
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
        <div className="flex items-center space-x-2 flex-shrink-0">
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
      <Menu.Button className="w-7 h-7 rounded-full bg-gray-200">
        <Avatar 
          name="Joshua" 
          className="text-xs font-extrabold"
          unstyled={true}
        />
        <span className="absolute w-2 h-2 rounded-full bg-[#2bac76] right-0 top-5 flex-shrink-0"></span>
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
          'absolute right-0 mt-2.5 w-44 origin-top-right divide-y divide-gray-200 overflow-hidden',
          'rounded-b-md bg-white shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none'
        )}>
          <div className="flex items-center p-2 space-x-2">
            <div className="flex items-center justify-center w-7 h-7 rounded-full bg-gray-200 border border-gray-300">
              <Avatar 
                name="Joshua" 
                className="text-xs font-extrabold"
                unstyled={true}
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-sm text-gray-900 font-medium">Joshua Galit</h1>
              <p className="text-xs text-gray-600 font-normal">Developer</p>
            </div>
          </div>
          <div>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={classNames(
                    'group flex w-full items-center px-3 py-2 text-sm font-medium',
                    'transition ease-in-out duration-150 overflow-hidden',
                    active ? 'bg-primary text-white' : 'text-gray-600'
                  )}
                >
                  <User
                    className="mr-2 h-4 w-4"
                    aria-hidden="true"
                  />
                  Profile
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={classNames(
                    'group flex w-full items-center px-3 py-2 text-sm font-medium',
                    'transition ease-in-out duration-150 overflow-hidden',
                    active ? 'bg-primary text-white' : 'text-gray-600'
                  )}
                >
                  <Settings
                    className="mr-2 h-4 w-4"
                    aria-hidden="true"
                  />
                  Settings
                </button>
              )}
            </Menu.Item>
          </div>
          <div>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={classNames(
                    'group flex w-full items-center px-3 py-2 text-sm font-medium',
                    'transition ease-in-out duration-150 overflow-hidden',
                    active ? 'bg-primary text-white' : 'text-gray-600'
                  )}
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
  const solutions = [
    {
      name: 'Insights',
      description: 'Measure actions your users take',
      href: '##',
      icon: User,
    },
    {
      name: 'Automations',
      description: 'Create your own targeted content',
      href: '##',
      icon: User,
    },
    {
      name: 'Reports',
      description: 'Keep track of your growth',
      href: '##',
      icon: User,
    },
  ]

  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button className={classNames(
            'rounded-full p-1 cursor-pointer',
            open ? 'bg-white' : 'text-white hover:bg-[#644565]'
          )}>
            <Bell className="w-5 h-5" />
          </Popover.Button>
          <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
            <Popover.Panel className="absolute left-1/2 z-10 mt-2 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                  {solutions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 flex items-center rounded-lg transition duration-150 ease-in-out hover:bg-gray-100"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center text-primary sm:h-12 sm:w-12">
                        <item.icon aria-hidden="true" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">
                          {item.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {item.description}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}

export default Header
