import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { BsCircle } from 'react-icons/bs'
import { BiInfoCircle } from 'react-icons/bi'
import { RiComputerLine } from 'react-icons/ri'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

import { classNames } from '~/helpers/classNames'

const Header: React.FC = (): JSX.Element => {
  const router = useRouter()

  const { id } = router.query

  const tabs = [
    {
      name: 'Overview',
      href: `/team/${id}/overview`,
      slug: 'overview'
    },
    {
      name: 'Board',
      href: `/team/${id}/board`,
      slug: 'board'
    },
    {
      name: 'Chat',
      href: `/team/${id}/chat`,
      slug: 'chat'
    },
    {
      name: 'Files',
      href: `/team/${id}/files`,
      slug: 'files'
    }
  ]

  return (
    <header className="sticky top-0 pt-1 z-10 bg-white border-b border-gay-300">
      <div className="flex items-center">
        <div className="py-2 px-4">
          <RiComputerLine className="w-9 h-9" />
        </div>
        <div>
          <div className="flex items-center space-x-2">
            <h1 className="text-xl font-semibold">[Joshua] Elearning Project</h1>
            <button className="p-0.5 hover:bg-gray-200 rounded-lg focus:bg-gray-200">
              <MdOutlineKeyboardArrowDown className="w-5 h-5" />
            </button>
            <button className="p-0.5 hover:bg-gray-200 rounded-lg focus:bg-gray-200">
              <BiInfoCircle className="w-5 h-5" />
            </button>
            <button className="group py0.5 px-1 hover:bg-gray-200 rounded-lg flex items-center">
              <BsCircle className="w-2 h-2" />
              <span className="ml-1 text-sm">Set Status</span>
              <MdOutlineKeyboardArrowDown className="w-5 h-5 group-hover:block hidden" />
            </button>
          </div>
          <ul className="flex items-center space-x-4">
            {tabs.map(({ name, href, slug }, i) => (
              <li key={i}>
                <Link href={href}>
                  <a className={classNames(
                    'border-b-2 font-medium',
                    router.asPath.includes(`/team/${id}/${slug}`)
                    ? 'border-purple-500' : 'border-transparent'
                  )}>{name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
