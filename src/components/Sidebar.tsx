import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FaHamburger } from 'react-icons/fa'
import { AiOutlineCaretDown } from 'react-icons/ai'

import { classNames } from '~/helpers/classNames'

type Props = {
  links: any[]
  teams: any[]
  directMessages: any[]
  isOpenTeam: boolean
  isOpenDM: boolean
  actions: {
    toggleDM: () => void
    toggleTeam: () => void
  }
}

const Sidebar: React.FC<Props> = ({ links, teams, directMessages, actions, isOpenTeam, isOpenDM }): JSX.Element => {
  const { toggleTeam, toggleDM } = actions
  const router = useRouter()

  console.log(router.asPath)
  
  return (
    
    <div className="max-w-[280px] w-full bg-purple-700">
      <div className="flex items-center space-x-3 text-white p-6">
        <FaHamburger className="w-10 h-10" />
        <p className="font-bold text-2xl">Slackana</p>
      </div>
      <nav>
        <ul className="flex flex-col">
          {links.map(({ name, href, Icon }, i) => (
            <li key={i}>
              <Link href={href}>
                <a 
                  className={classNames(
                    'w-full py-2 px-6 block text-white text-sm',
                    'transition ease-in-out duration-150',
                    'flex items-center space-x-3 font-medium cursor-pointer',
                    router.pathname === href ? 'bg-purple-800' : 'hover:bg-purple-600'
                  )}
                >
                  {Icon}
                  <span>{name}</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-5 border-t border-gray-300">
          <div 
            className={classNames(
              'px-6 py-3 bg-purple-700 flex items-center justify-start',
              'space-x-3 cursor-pointer select-none'
            )}
            onClick={toggleTeam}
          >
            <AiOutlineCaretDown 
              className={`text-white ${isOpenTeam ? '-rotate-90' : ''}`}
            />
            <p className="text-white font-medium">Team</p>
          
          </div>
          {isOpenTeam && (
            <div className="text-white text-sm mb-6">
              <ul className="text-sm">
                {teams.map(({ id, name, Icon }, i) => (
                  <li key={i} className="inline-flex items-center space-x-3 w-full ">
                    <Link href={`/team/${id}/overview`}>
                      <a className={classNames(
                        'flex items-center space-x-3 px-6 py-2 w-full',
                        'transition ease-in duration-150',
                        router.asPath.includes(`/team/${id}`)
                        ? 'bg-purple-800' 
                        : 'hover:bg-purple-800'
                      )}>
                        {Icon} <span>{name}</span>
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="border-t border-gray-300">
          <div 
            className={classNames(
              'px-6 py-3 bg-purple-700 flex items-center space-x-3',
              'cursor-pointer select-none'
            )}
            onClick={toggleDM}
          >
            <AiOutlineCaretDown 
              className={`text-white ${isOpenDM ? '-rotate-90' : ''}`}
            />
            <p className="text-white font-medium">Direct Messages</p>
          </div>
          {isOpenDM && (
            <>
              {directMessages.map(({ id, name, Icon }, i) => (
                <li key={i} className="inline-flex items-center space-x-3 w-full text-sm">
                  <Link href={`/messages/${id}`}>
                    <a className={classNames(
                      'flex items-center space-x-3 px-6 py-2 w-full',
                      'transition ease-in duration-150 text-white',
                      router.asPath === `/messages/${id}`
                      ? 'bg-purple-800' 
                      : 'hover:bg-purple-800'
                    )}>
                      {Icon} <span>{name}</span>
                    </a>
                  </Link>
                </li>
              ))}
            </>
          )}
        </div>
      </nav>
    </div>
  )
}

export default Sidebar