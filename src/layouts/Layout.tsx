import Head from 'next/head'
import { FiList } from 'react-icons/fi'
import React, { useState } from 'react'
import { AiFillHome, AiFillCheckCircle } from 'react-icons/ai'

import Sidebar from '~/components/Sidebar'

type Props = {
  children: React.ReactNode
  metaHead: string
}

const Layout: React.FC<Props> = ({ children, metaHead }): JSX.Element => {
  const [isOpenTeam, setIsOpenTeam] = useState<boolean>(true)
  const [isOpenDM, setIsOpenDM] = useState<boolean>(true)

  const links = [
    {
      name: 'Home',
      href: '/',
      Icon: <AiFillHome className="w-5 h-5" />
    },
    {
      name: 'My Tasks',
      href: '/my-tasks',
      Icon: <AiFillCheckCircle className="w-5- h-5" />
    },
    {
      name: 'Placeholder1',
      href: '/link1',
      Icon: <FiList className="w-5 h-5" />
    },
    {
      name: 'Placeholder2',
      href: '/link1',
      Icon: <FiList className="w-5 h-5" />
    },
    {
      name: 'Placeholder3',
      href: '/link1',
      Icon: <FiList className="w-5 h-5" />
    },
    {
      name: 'Placeholder4',
      href: '/link1',
      Icon: <FiList className="w-5 h-5" />
    }
  ]

  const toggleTeam = () => setIsOpenTeam(!isOpenTeam)
  const toggleDM = () => setIsOpenDM(!isOpenDM)


  return (
    <>
      <Head>
        <title>{`Slacka | ${metaHead}`}</title>
      </Head>
      <div className="flex bg-white w-full overflow-hidden min-h-screen">
        <Sidebar 
          links={links}
          isOpenDM={isOpenDM}
          isOpenTeam={isOpenTeam}
          actions={{ toggleTeam, toggleDM }}
        />
        <div className="flex-1 overflow-hidden">
          <div className="overflow-y-auto">
              {children}
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout