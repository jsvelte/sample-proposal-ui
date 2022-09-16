import React from 'react'
import { useRouter } from 'next/router'

import Layout from '~/layouts/Layout'
import Header from '~/components/Header'

const Board: React.FC = (): JSX.Element => {
  const router = useRouter()

  const { id } = router.query

  const headerLinks = [
    {
      id: 1,
      name: 'Overview',
      href: `/team/${id}/overview`
    },
    {
      id: 1,
      name: 'List',
      href: `/team/${id}/list`
    }
  ]

  return (
    <Layout metaHead={`${id}`}>
      <Header />
      <div className="min-h-[2000px] flex-1 p-8">This is the Board {id}</div>
    </Layout>
  )
}

export default Board
