import { NextPage } from 'next'
import React, { useState } from 'react'

import Layout from '~/layouts/Layout'

const Index: NextPage = (): JSX.Element => {
  return (
    <Layout metaHead="Home">
      <div className="flex flex-col space-y-4 items-center justify-center min-h-screen">
        <p className="text-xl font-medium">Wednesday, September 7</p>
        <h1 className="text-4xl font-extrabold">Good afternoon, Joshua</h1>
      </div>
    </Layout>
  )
}

export default Index
