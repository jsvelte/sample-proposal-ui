import React from 'react'
import { NextPage } from 'next'

import Layout from '~/layouts/Layout'

const MyTasks: NextPage = (): JSX.Element => {
  return (
    <Layout metaHead="My Task">
      <div className="flex min-h-screen flex-col items-center justify-center space-y-4">
        <p className="text-xl font-medium">tasks</p>
      </div>
    </Layout>
  )
}

export default MyTasks
