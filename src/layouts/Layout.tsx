import Head from 'next/head'
import { FiList } from 'react-icons/fi'
import React, { useState } from 'react'
import { FaListAlt } from 'react-icons/fa'
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
      href: '#',
      Icon: <FiList className="w-5 h-5" />
    },
    {
      name: 'Placeholder2',
      href: '#',
      Icon: <FiList className="w-5 h-5" />
    },
    {
      name: 'Placeholder3',
      href: '#',
      Icon: <FiList className="w-5 h-5" />
    },
    {
      name: 'Placeholder4',
      href: '#',
      Icon: <FiList className="w-5 h-5" />
    }
  ]
  const teams = [
    {
      id: 1,
      name: 'Team Metajob',
      Icon: <FaListAlt className="w-4 h-4" />
    },
    {
      id: 2,
      name: 'Team Lareact',
      Icon: <FaListAlt className="w-4 h-4" />
    },
    {
      id: 3,
      name: 'Edge Team',
      Icon: <FaListAlt className="w-4 h-4" />
    },
  ]

  const toggleTeam = () => setIsOpenTeam(!isOpenTeam)
  const toggleDM = () => setIsOpenDM(!isOpenDM)


  return (
    <>
      <Head>
        <title>{`Slacka | ${metaHead}`}</title>
      </Head>
      <div className="antialiased flex bg-white w-full min-h-screen h-screen overflow-hidden">
        <Sidebar 
          links={links}
          isOpenDM={isOpenDM}
          teams={teams}
          isOpenTeam={isOpenTeam}
          actions={{ toggleTeam, toggleDM }}
        />
        <div className="flex-1 overflow-y-auto">
          {children}
        </div>
      </div>
    </>
  )
}

export default Layout