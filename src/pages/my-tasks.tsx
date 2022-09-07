import React from 'react'
import { NextPage } from 'next'

import Layout from '~/layouts/Layout'

const MyTasks: NextPage = (): JSX.Element => {
  return (
    <Layout metaHead="Home">
      <div className="flex flex-col space-y-4 items-center justify-center min-h-screen">
        <p className="text-xl font-medium">tasks</p>
      </div>
    </Layout>
  )
}

export default MyTasks
