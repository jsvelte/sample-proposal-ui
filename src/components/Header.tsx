import Link from 'next/link'
import React, { FC } from 'react'
import { useRouter } from 'next/router'
import { BsCircle } from 'react-icons/bs'
import { BiInfoCircle } from 'react-icons/bi'
import { RiComputerLine } from 'react-icons/ri'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

import { classNames } from '~/helpers/classNames'

const Header: FC = (): JSX.Element => {
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
    }
  ]

  return (
    <header className="border-gray-border z-10 border-b bg-white">
      <div className="flex items-center">
        <div className="px-4">
          <RiComputerLine className="h-8 w-8" />
        </div>
        <div>
          <div className="flex items-center space-x-2">
            <h1 className="text-base font-semibold">[Joshua] Elearning Project</h1>
            <button className="rounded-lg p-0.5 focus:bg-gray-200">
              <MdOutlineKeyboardArrowDown className="h-5 w-5" />
            </button>
            <button className="rounded-lg p-0.5 focus:bg-gray-200">
              <BiInfoCircle className="h-5 w-5" />
            </button>
            <button className="group flex items-center rounded-lg py-0.5 px-1">
              <BsCircle className="h-2 w-2" />
              <span className="ml-1 text-sm">Set Status</span>
              <MdOutlineKeyboardArrowDown className="hidden h-5 w-5 group-hover:block" />
            </button>
          </div>
          <ul className="flex items-center space-x-4">
            {tabs.map(({ name, href, slug }, i) => (
              <li key={i}>
                <Link href={href}>
                  <a
                    className={classNames(
                      'border-b-4 text-sm font-normal',
                      router.asPath.includes(`/team/${id}/${slug}`)
                        ? 'border-primary'
                        : 'border-transparent'
                    )}
                  >
                    {name}
                  </a>
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
