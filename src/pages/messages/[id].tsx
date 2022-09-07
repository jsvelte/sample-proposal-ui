import React from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

import Layout from '~/layouts/Layout'

const DirectMessages: NextPage = (): JSX.Element => {
  const router = useRouter()

  const { id } = router.query

  return (
    <Layout metaHead="Home">
      <div className="flex flex-col space-y-4 items-center justify-center min-h-screen">
        <p className="text-xl font-medium">This is direct messages {id}</p>
      </div>
    </Layout>
  )
}

export default DirectMessages
