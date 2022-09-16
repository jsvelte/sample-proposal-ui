import Link from 'next/link'
import Avatar from 'react-avatar'
import { useRouter } from 'next/router'
import React, { FC, Fragment } from 'react'
import { AiOutlineCaretDown } from 'react-icons/ai'
import createPersistedState from 'use-persisted-state'
import { Popover, Transition } from '@headlessui/react'
import { Hash, Airplay, MoreHorizontal, ChevronDown } from 'react-feather'

import { classNames } from '~/helpers/classNames'
import { Link as ILink, Team } from '~/mock/interfaces'

type Props = {
  links: ILink[]
  teams: Team[]
  isOpenSidebar: unknown
}

const Sidebar: FC<Props> = ({ links, teams, isOpenSidebar }): JSX.Element => {
  const router = useRouter()

  const useToggleState = createPersistedState('toggle')
  const [isOpen, setIsOpen] = useToggleState(true)

  const handleOpen = (): void => setIsOpen(!isOpen)

  return (
    <aside
      className={classNames(
        'w-full border-r border-purple-border bg-light-purple',
        'flex flex-col justify-between text-[#bcaebc]',
        'flex-shrink-0 transform transition-all duration-300 ease-in-out',
        isOpenSidebar ? 'max-w-[280px] translate-x-0' : 'max-w-0 -translate-x-full'
      )}
    >
      <div className="flex flex-col overflow-hidden">
        <div className="flex w-full items-center justify-between px-5 py-2.5">
          <div className="flex items-center space-x-3 text-white">
            <Airplay className="h-6 w-6" />
            <p className="text-xl font-semibold">Slackana</p>
          </div>
        </div>
        <nav
          className={classNames(
            'overflow-y-hidden border-t border-purple-border hover:overflow-y-auto',
            'scrollbar-thin scrollbar-thumb-[#967b96] scrollbar-track-rounded-full',
            'min-h-[82.5vh]'
          )}
        >
          <ul className="flex flex-col">
            {links.map(({ name, href, Icon }: ILink, i: number) => (
              <li key={i}>
                <Link href={href}>
                  <a
                    className={classNames(
                      'block w-full py-2 px-5 text-sm',
                      'transition duration-150 ease-in-out',
                      'flex cursor-pointer items-center space-x-3 font-medium',
                      router.pathname === href ? 'bg-primary text-white' : 'hover:bg-purple-hover'
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{name}</span>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <div className="border-t border-purple-border">
            <>
              <div
                className={classNames(
                  'flex items-center justify-start px-5 py-3',
                  'cursor-pointer select-none space-x-3'
                )}
                onClick={handleOpen}
              >
                <AiOutlineCaretDown className={`${!isOpen ? '-rotate-90' : ''}`} />
                <p className="text-sm font-medium">Projects</p>
              </div>
              {isOpen && (
                <ul>
                  {teams.map(({ id, name, notif }, i) => (
                    <li key={i} className="inline-flex w-full items-center space-x-3 text-sm">
                      <Link href={`/team/${id}/overview`}>
                        <a
                          className={classNames(
                            'flex w-full items-center justify-between px-5 py-1.5',
                            'transition duration-150 ease-in',
                            router.asPath.includes(`/team/${id}`)
                              ? 'bg-primary text-[#f3f7fa]'
                              : 'hover:bg-purple-hover'
                          )}
                        >
                          <div className="flex items-center space-x-3">
                            <Hash className="h-4 w-4 flex-shrink-0" />
                            <span
                              className={classNames(
                                'line-clamp-1',
                                notif ? 'font-bold text-white' : ''
                              )}
                            >
                              {name}
                            </span>
                          </div>
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </>
          </div>
        </nav>
        <div className="flex items-center justify-between border-t border-purple-border px-5 py-2">
          <div className="flex items-center space-x-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-300 bg-gray-200">
              <Avatar name="Joshua" className="text-xs font-extrabold" unstyled={true} />
            </div>
            <div className="flex flex-col">
              <h1 className="text-xs font-bold uppercase">Joshua Galit</h1>
              <span className="text-xs font-light">Developer</span>
            </div>
          </div>
          <MenuPopOver />
        </div>
      </div>
    </aside>
  )
}

function MenuPopOver() {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={classNames(
              'active:bg-indigo-dark rounded-full hover:bg-primary',
              'transition duration-150 ease-in-out active:scale-95',
              'p-1 focus:outline-none',
              open ? 'bg-primary' : ''
            )}
          >
            <MoreHorizontal className="h-6 w-6" />
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
            <Popover.Panel className="absolute right-0 bottom-10 w-60 origin-top-right divide-y divide-gray-200 overflow-hidden">
              <div className="z-20 overflow-hidden rounded-lg bg-[#350d36] shadow-lg ring-1 ring-white ring-opacity-5">
                <div className="flex justify-between py-4">
                  <div className="flex items-center space-x-4 px-4">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-300 bg-gray-200">
                      <Avatar name="Joshua" className="text-xs font-extrabold" unstyled={true} />
                    </div>
                    <div className="flex flex-col">
                      <h1 className="text-sm font-bold uppercase">Joshua Galit</h1>
                      <span className="text-xs font-light">Developer</span>
                    </div>
                  </div>
                  <ChevronDown className="mr-4 h-6 w-6 text-primary" />
                </div>
                <button
                  type="button"
                  className={classNames(
                    'w-full border-t border-purple-border py-2 px-4 text-left text-sm',
                    'transition duration-150 ease-in-out hover:bg-primary',
                    'active:bg-darkest'
                  )}
                >
                  Profile
                </button>
                <button
                  type="button"
                  className={classNames(
                    'w-full border-t border-purple-border py-2 px-4 text-left text-sm',
                    'transition duration-150 ease-in-out hover:bg-primary',
                    'active:bg-[#18191a]'
                  )}
                >
                  Log out @angryboy_19
                </button>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}

export default Sidebar
