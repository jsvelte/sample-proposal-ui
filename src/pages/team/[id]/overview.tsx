import React from 'react'
import { useRouter } from 'next/router'

import Layout from '~/layouts/Layout'
import Header from '~/components/Header'

const Overview: React.FC = (): JSX.Element => {
  const router = useRouter()

  const { id } = router.query

  const headerLinks = [
    {
      id: 1,
      name: 'Overview',
      href: `/team/${id}/overview`,
    },
    {
      id: 1,
      name: 'List',
      href: `/team/${id}/list`,
    }
  ]

  return (
    <Layout metaHead={`${id}`}>
      <Header />
      <main className="flex-1 min-h-[2000px] p-8">
        This is the overview {id}
      </main>
    </Layout>
  )
}

export default Overview
