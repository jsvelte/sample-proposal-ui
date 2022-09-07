import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FaListAlt } from 'react-icons/fa'
import { FaHamburger } from 'react-icons/fa'
import { HiUserCircle } from 'react-icons/hi'
import { classNames } from '~/helpers/classNames'
import { AiOutlineCaretDown } from 'react-icons/ai'

type Props = {
  links: any[]
  isOpenTeam: boolean
  isOpenDM: boolean
  actions: {
    toggleDM: () => void
    toggleTeam: () => void
  }
}

const Sidebar: React.FC<Props> = ({ links, actions, isOpenTeam, isOpenDM}): JSX.Element => {
  const { toggleTeam, toggleDM } = actions
  const router = useRouter()
  
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
                    'w-full py-2 px-4 block text-white',
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
              'px-6 py-5 bg-purple-700 flex items-center justify-start',
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
          <div className="text-white px-6 text-sm mb-6">
              <ul className="space-y-2 text-sm">
                <li className="inline-flex items-center space-x-3 w-full">
                  <FaListAlt className="w-4 h-4" /> <span>Project 1</span>
                </li>
                <li className="inline-flex items-center space-x-3 w-full">
                  <FaListAlt className="w-4 h-4" /> <span>Project 2</span>
                </li>
              </ul>
          </div>
        )}
        </div>
        <div className="border-t border-gray-300">
          <div 
            className={classNames(
              'px-6 py-5 bg-purple-700 flex items-center space-x-3',
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
          <div className="text-white px-6 text-sm mb-6">
            <ul className="space-y-2 text-sm">
              <li className="inline-flex items-center space-x-3 w-full">
                <HiUserCircle className="w-5 h-5" /> <span>AJ</span>
              </li>
              <li className="inline-flex items-center space-x-3 w-full">
                <HiUserCircle className="w-5 h-5" /> <span>Joshua</span>
              </li>
            </ul>
          </div>
        )}
        </div>
      </nav>
    </div>
  )
}

export default Sidebar