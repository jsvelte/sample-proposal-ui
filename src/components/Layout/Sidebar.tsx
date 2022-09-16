import Link from 'next/link'
import React, { FC } from 'react'
import { useRouter } from 'next/router'
import { Airplay, Trello } from 'react-feather'
import { AiOutlineCaretDown } from 'react-icons/ai'
import createPersistedState from 'use-persisted-state'

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
        'transform transition-all duration-300 ease-in-out',
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
                            <Trello className="h-4 w-4 flex-shrink-0" />
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
        <div className="flex w-full items-center justify-between border-t border-purple-border px-5 py-2.5">
          <div className="flex items-center space-x-3 text-white">
            <Airplay className="h-6 w-6" />
            <p className="text-xl font-semibold">Slackana</p>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
