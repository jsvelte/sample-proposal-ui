import React from 'react'
import Head from 'next/head'
import createPersistedState from 'use-persisted-state'

import { teams } from '~/mock/team'
import { links } from '~/mock/sidebarLinks'
import Header from '~/components/Layout/Header'
import Sidebar from '~/components/Layout/Sidebar'

type Props = {
  children: React.ReactNode
  metaHead: string
}

const Layout: React.FC<Props> = ({ children, metaHead }): JSX.Element => {
  const useToggleState = createPersistedState('toggle-sidebar')
  const [isOpenSidebar, setIsOpenSidebar] = useToggleState(true)

  const handleToggle = (): void => setIsOpenSidebar(!isOpenSidebar)

  return (
    <>
      <Head>
        <title>{`Slacka | ${metaHead}`}</title>
      </Head>
      <div className="flex flex-col h-screen min-h-screen overflow-hidden">
        <Header 
          handleToggle={handleToggle}
        />
        <div className="flex bg-white text-black h-full min-h-[94.5vh] overflow-hidden">
          <Sidebar 
            links={links}
            teams={teams}
            isOpenSidebar={isOpenSidebar}
          />
          <main className="flex-1">
            {children}
          </main>
        </div>
      </div>
    </>
  )
}

export default Layout
