/* eslint-disable @next/next/no-img-element */
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
    <header className="flex w-full items-center border-b border-purple-border bg-dark-purple">
      <div className="w-[280px] flex-shrink-0 border-r border-purple-border">
        <div className="flex items-center">
          <button
            type="button"
            onClick={handleToggle}
            className="cursor-pointer px-3 py-3 hover:bg-[#533154]"
          >
            <IoIosMenu className="h-5 w-5 text-[#d4ced4]" />
          </button>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-between px-4">
        <div className="hidden md:block">
          <div
            className={classNames(
              'relative overflow-hidden rounded-md bg-[#5d3d5e]',
              'flex items-center transition-all duration-150 ease-in-out'
            )}
          >
            <input
              type="text"
              className={classNames(
                'bg-[#5d3d5e] p-1 pl-2 text-sm text-white outline-none',
                'rounded-md pr-14 placeholder-gray-300',
                'transition duration-150 ease-in-out hover:bg-[#644565]',
                'md:min-w-[500] lg:min-w-[700px]'
              )}
              placeholder="Search Slackana Member"
            />
            <div className="absolute right-2 flex space-x-2">
              <BiSliderAlt className="h-4 w-4 text-white" />
              <Search className="h-4 w-4 text-white" />
            </div>
          </div>
        </div>
        <div className="flex flex-shrink-0 items-center justify-end space-x-2">
          <div className="md:hidden">
            <button
              className={classNames(
                'cursor-pointer rounded-full p-1 hover:bg-[#644565]',
                'text-white focus:outline-none'
              )}
            >
              <Search className="h-5 w-5" />
            </button>
          </div>
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
      <Menu.Button className="h-7 w-7 rounded-full bg-gray-200">
        <Avatar name="Joshua" className="text-xs font-extrabold" unstyled={true} />
        <span className="absolute right-0 top-5 h-2 w-2 flex-shrink-0 rounded-full bg-[#2bac76]"></span>
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
        <Menu.Items
          className={classNames(
            'absolute right-0 mt-2.5 w-44 origin-top-right divide-y divide-gray-200 overflow-hidden',
            'rounded-b-md bg-white shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none'
          )}
        >
          <div className="flex items-center space-x-2 p-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-300 bg-gray-200">
              <Avatar name="Joshua" className="text-xs font-extrabold" unstyled={true} />
            </div>
            <div className="flex flex-col">
              <h1 className="text-sm font-medium text-gray-900">Joshua Galit</h1>
              <p className="text-xs font-normal text-gray-600">Developer</p>
            </div>
          </div>
          <div>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={classNames(
                    'group flex w-full items-center px-3 py-2 text-sm font-medium',
                    'overflow-hidden transition duration-150 ease-in-out',
                    active ? 'bg-primary text-white' : 'text-gray-600'
                  )}
                >
                  <User className="mr-2 h-4 w-4" aria-hidden="true" />
                  Profile
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={classNames(
                    'group flex w-full items-center px-3 py-2 text-sm font-medium',
                    'overflow-hidden transition duration-150 ease-in-out',
                    active ? 'bg-primary text-white' : 'text-gray-600'
                  )}
                >
                  <Settings className="mr-2 h-4 w-4" aria-hidden="true" />
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
                    'overflow-hidden transition duration-150 ease-in-out',
                    active ? 'bg-primary text-white' : 'text-gray-600'
                  )}
                >
                  <LogOut className="mr-2 h-4 w-4" aria-hidden="true" />
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
      icon: User
    },
    {
      name: 'Automations',
      description: 'Create your own targeted content',
      href: '##',
      icon: User
    },
    {
      name: 'Reports',
      description: 'Keep track of your growth',
      href: '##',
      icon: User
    }
  ]

  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={classNames(
              'cursor-pointer rounded-full p-1 text-white focus:outline-none hover:bg-[#644565]',
              open ? 'bg-[#644565]' : ''
            )}
          >
            <Bell className="h-5 w-5" fill={open ? 'currentColor' : 'transparent'} />
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
            <Popover.Panel
              className={classNames(
                'absolute right-0 mt-2 w-64 origin-top-right divide-y divide-gray-200 overflow-hidden',
                'rounded-b-md bg-white shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none'
              )}
            >
              <div className="px-3 py-2">
                <h1 className="text-sm font-semibold">Notifications</h1>
              </div>
              <div
                className={classNames(
                  'max-h-[25vh] overflow-y-auto overflow-x-hidden overflow-y-hidden py-2',
                  'scrollbar-thin scrollbar-thumb-[#967b96] scrollbar-track-rounded-full hover:overflow-y-auto'
                )}
              >
                <a
                  href="#"
                  className="-mx-2 flex items-center border-b px-4 py-3 hover:bg-gray-100"
                >
                  <div className="flex-shrink-0">
                    <img
                      className="mx-1 h-7 w-7 rounded-full object-cover"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                      alt="avatar"
                    />
                  </div>
                  <p className="mx-2 text-xs text-gray-600">
                    <span className="font-bold">Sara Salah</span> replied on the{' '}
                    <span className="font-bold text-blue-500">Upload Image</span> artical . 2m
                  </p>
                </a>
                <a
                  href="#"
                  className="-mx-2 flex items-center border-b px-4 py-3 hover:bg-gray-100"
                >
                  <div className="flex-shrink-0">
                    <img
                      className="mx-1 h-7 w-7 rounded-full object-cover"
                      src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                      alt="avatar"
                    />
                  </div>
                  <p className="mx-2 text-xs text-gray-600">
                    <span className="font-bold">Slick Net</span> start following you . 45m
                  </p>
                </a>
                <a
                  href="#"
                  className="-mx-2 flex items-center border-b px-4 py-3 hover:bg-gray-100"
                >
                  <div className="flex-shrink-0">
                    <img
                      className="mx-1 h-7 w-7 rounded-full object-cover"
                      src="https://images.unsplash.com/photo-1450297350677-623de575f31c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                      alt="avatar"
                    />
                  </div>
                  <p className="mx-2 text-xs text-gray-600">
                    <span className="font-bold">Jane Doe</span> Like Your reply on{' '}
                    <span className="font-bold text-blue-500">Test with TDD</span> artical . 1h
                  </p>
                </a>
                <a href="#" className="-mx-2 flex items-center px-4 py-3 hover:bg-gray-100">
                  <div className="flex-shrink-0">
                    <img
                      className="mx-1 h-7 w-7 rounded-full object-cover"
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=398&q=80"
                      alt="avatar"
                    />
                  </div>
                  <p className="mx-2 text-xs text-gray-600">
                    <span className="font-bold">Abigail Bennett</span> start following you . 3h
                  </p>
                </a>
                <a
                  href="#"
                  className="-mx-2 flex items-center border-b px-4 py-3 hover:bg-gray-100"
                >
                  <div className="flex-shrink-0">
                    <img
                      className="mx-1 h-7 w-7 rounded-full object-cover"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                      alt="avatar"
                    />
                  </div>
                  <p className="mx-2 text-xs text-gray-600">
                    <span className="font-bold">Sara Salah</span> replied on the{' '}
                    <span className="font-bold text-blue-500">Upload Image</span> artical . 2m
                  </p>
                </a>
                <a
                  href="#"
                  className="-mx-2 flex items-center border-b px-4 py-3 hover:bg-gray-100"
                >
                  <div className="flex-shrink-0">
                    <img
                      className="mx-1 h-7 w-7 rounded-full object-cover"
                      src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                      alt="avatar"
                    />
                  </div>
                  <p className="mx-2 text-xs text-gray-600">
                    <span className="font-bold">Slick Net</span> start following you . 45m
                  </p>
                </a>
                <a
                  href="#"
                  className="-mx-2 flex items-center border-b px-4 py-3 hover:bg-gray-100"
                >
                  <div className="flex-shrink-0">
                    <img
                      className="mx-1 h-7 w-7 rounded-full object-cover"
                      src="https://images.unsplash.com/photo-1450297350677-623de575f31c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                      alt="avatar"
                    />
                  </div>
                  <p className="mx-2 text-xs text-gray-600">
                    <span className="font-bold">Jane Doe</span> Like Your reply on{' '}
                    <span className="font-bold text-blue-500">Test with TDD</span> artical . 1h
                  </p>
                </a>
                <a href="#" className="-mx-2 flex items-center px-4 py-3 hover:bg-gray-100">
                  <div className="flex-shrink-0">
                    <img
                      className="mx-1 h-7 w-7 rounded-full object-cover"
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=398&q=80"
                      alt="avatar"
                    />
                  </div>
                  <p className="mx-2 text-xs text-gray-600">
                    <span className="font-bold">Abigail Bennett</span> start following you . 3h
                  </p>
                </a>
              </div>
              <a
                href="#"
                className="block bg-[#7f1f82] py-2 text-center text-sm font-bold text-white"
              >
                See all notifications
              </a>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}

export default Header
