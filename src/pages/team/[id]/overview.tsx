import React from 'react'
import { useRouter } from 'next/router'

import Layout from '~/layouts/Layout'
import Header from '~/components/Header'
import { classNames } from '~/helpers/classNames'

const Overview: React.FC = (): JSX.Element => {
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
      <div
        className={classNames(
          'h-full min-h-[94.5vh] overflow-y-auto p-8 scrollbar-thumb-[#868686]',
          'scrollbar-thin scrollbar-track-rounded-full'
        )}
      >
        This is the overview {id}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nihil quis asperiores velit
        obcaecati ipsa repellat doloribus, aspernatur repudiandae ab nostrum cumque facere omnis,
        consectetur eveniet aliquid id, totam eos. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Unde nihil quis asperiores velit obcaecati ipsa repellat doloribus,
        aspernatur repudiandae ab nostrum cumque facere omnis, consectetur eveniet aliquid id, totam
        eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nihil quis asperiores
        velit obcaecati ipsa repellat doloribus, aspernatur repudiandae ab nostrum cumque facere
        omnis, consectetur eveniet aliquid id, totam eos. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Unde nihil quis asperiores velit obcaecati ipsa repellat doloribus,
        aspernatur repudiandae ab nostrum cumque facere omnis, consectetur eveniet aliquid id, totam
        eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nihil quis asperiores
        velit obcaecati ipsa repellat doloribus, aspernatur repudiandae ab nostrum cumque facere
        omnis, consectetur eveniet aliquid id, totam eos. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Unde nihil quis asperiores velit obcaecati ipsa repellat doloribus,
        aspernatur repudiandae ab nostrum cumque facere omnis, consectetur eveniet aliquid id, totam
        eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nihil quis asperiores
        velit obcaecati ipsa repellat doloribus, aspernatur repudiandae ab nostrum cumque facere
        omnis, consectetur eveniet aliquid id, totam eos. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Unde nihil quis asperiores velit obcaecati ipsa repellat doloribus,
        aspernatur repudiandae ab nostrum cumque facere omnis, consectetur eveniet aliquid id, totam
        eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nihil quis asperiores
        velit obcaecati ipsa repellat doloribus, aspernatur repudiandae ab nostrum cumque facere
        omnis, consectetur eveniet aliquid id, totam eos. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Unde nihil quis asperiores velit obcaecati ipsa repellat doloribus,
        aspernatur repudiandae ab nostrum cumque facere omnis, consectetur eveniet aliquid id, totam
        eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nihil quis asperiores
        velit obcaecati ipsa repellat doloribus, aspernatur repudiandae ab nostrum cumque facere
        omnis, consectetur eveniet aliquid id, totam eos. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Unde nihil quis asperiores velit obcaecati ipsa repellat doloribus,
        aspernatur repudiandae ab nostrum cumque facere omnis, consectetur eveniet aliquid id, totam
        eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nihil quis asperiores
        velit obcaecati ipsa repellat doloribus, aspernatur repudiandae ab nostrum cumque facere
        omnis, consectetur eveniet aliquid id, totam eos. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Unde nihil quis asperiores velit obcaecati ipsa repellat doloribus,
        aspernatur repudiandae ab nostrum cumque facere omnis, consectetur eveniet aliquid id, totam
        eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nihil quis asperiores
        velit obcaecati ipsa repellat doloribus, aspernatur repudiandae ab nostrum cumque facere
        omnis, consectetur eveniet aliquid id, totam eos. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Unde nihil quis asperiores velit obcaecati ipsa repellat doloribus,
        aspernatur repudiandae ab nostrum cumque facere omnis, consectetur eveniet aliquid id, totam
        eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nihil quis asperiores
        velit obcaecati ipsa repellat doloribus, aspernatur repudiandae ab nostrum cumque facere
        omnis, consectetur eveniet aliquid id, totam eos. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Unde nihil quis asperiores velit obcaecati ipsa repellat doloribus,
        aspernatur repudiandae ab nostrum cumque facere omnis, consectetur eveniet aliquid id, totam
        eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nihil quis asperiores
        velit obcaecati ipsa repellat doloribus, aspernatur repudiandae ab nostrum cumque facere
        omnis, consectetur eveniet aliquid id, totam eos. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Unde nihil quis asperiores velit obcaecati ipsa repellat doloribus,
        aspernatur repudiandae ab nostrum cumque facere omnis, consectetur eveniet aliquid id, totam
        eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nihil quis asperiores
        velit obcaecati ipsa repellat doloribus, aspernatur repudiandae ab nostrum cumque facere
        omnis, consectetur eveniet aliquid id, totam eos. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Unde nihil quis asperiores velit obcaecati ipsa repellat doloribus,
        aspernatur repudiandae ab nostrum cumque facere omnis, consectetur eveniet aliquid id, totam
        eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nihil quis asperiores
        velit obcaecati ipsa repellat doloribus, aspernatur repudiandae ab nostrum cumque facere
        omnis, consectetur eveniet aliquid id, totam eos. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Unde nihil quis asperiores velit obcaecati ipsa repellat doloribus,
        aspernatur repudiandae ab nostrum cumque facere omnis, consectetur eveniet aliquid id, totam
        eos.
      </div>
    </Layout>
  )
}

export default Overview
