import Link from 'next/link'
import React, { FC } from 'react'
import Avatar from 'react-avatar'
import { useRouter } from 'next/router'
import { Airplay, Hash } from 'react-feather'
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
    <aside className={classNames(
      ' w-full bg-light-purple border-r border-purple-border',
      'flex flex-col justify-between text-[#bcaebc]',
      'transition-all ease-in-out duration-300 transform',
      isOpenSidebar ? 'translate-x-0 max-w-[280px]' : '-translate-x-full max-w-0'
    )}>
      <div className="flex flex-col overflow-hidden">
        <div className="flex items-center w-full justify-between px-5 py-2.5">
          <div className="flex items-center space-x-3 text-white">
            <Airplay className="w-6 h-6" />
            <p className="font-semibold text-xl">Slackana</p>
          </div>
        </div>
        <nav className={classNames(
          'border-t border-purple-border overflow-y-hidden hover:overflow-y-auto',
          'scrollbar-thumb-[#967b96] scrollbar-thin scrollbar-track-rounded-full',
          ''
        )}>
          <ul className="flex flex-col">
            {links.map(({ name, href, Icon }: ILink, i: number) => (
              <li key={i}>
                <Link href={href}>
                  <a 
                    className={classNames(
                      'w-full py-2 px-5 block text-sm',
                      'transition ease-in-out duration-150',
                      'flex items-center space-x-3 font-medium cursor-pointer',
                      router.pathname === href 
                      ? 'bg-primary text-white' 
                      : 'hover:bg-purple-hover'
                    )}
                  >
                    <Icon className="w-4 h-4" />
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
                  'px-5 py-3 flex items-center justify-start',
                  'space-x-3 cursor-pointer select-none'
                )}
                onClick={handleOpen}
              >
                <AiOutlineCaretDown 
                  className={`${!isOpen ? '-rotate-90' : ''}`}
                />
                <p className="font-medium text-sm">Projects</p>
              
              </div>
              {isOpen && (
                <div className=" mb-6">
                  <ul>
                    {teams.map(({ id, name }, i) => (
                      <li key={i} className="inline-flex items-center space-x-3 w-full text-sm">
                        <Link href={`/team/${id}/overview`}>
                          <a className={classNames(
                            'flex items-center space-x-3 px-5 py-1.5 w-full',
                            'transition ease-in duration-150',
                            router.asPath.includes(`/team/${id}`)
                            ? 'bg-primary text-[#f3f7fa]' 
                            : 'hover:bg-purple-hover'
                          )}>
                            <Hash className="w-4 h-4" />
                            <span>{name}</span>
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          </div>
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar