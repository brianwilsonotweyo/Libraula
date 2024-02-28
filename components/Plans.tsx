import { CheckIcon } from '@heroicons/react/outline'
import { Product } from '@stripe/firestore-stripe-payments'
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import useAuth from '../hooks/useAuth'
import { loadCheckout } from '../lib/stripe'
import Loader from './Loader'
import Table from './Table'

interface Props {
  products: Product[]
}

function Plans({ products }: Props) {
  const { logout, user } = useAuth()
  const [selectedPlan, setSelectedPlan] = useState<Product | null>(products[2])
  const [isBillingLoading, setBillingLoading] = useState(false)

  const subscribeToPlan = () => {
    if (!user) return

    loadCheckout(selectedPlan?.prices[0].id!)
    setBillingLoading(true)
  }

  return (
    <div>
      <Head>
        <title>Libraula</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="border-b border-white/10 bg-[#141414]">
        <Link href="/">
          <img
            src="https://rb.gy/e2yjuv"
            alt="Libraula"
            width={150}
            height={90}
            className="cursor-pointer object-contain"
          />
        </Link>
        <button
          className="text-lg font-medium hover:underline"
          onClick={logout}
        >
          Sign Out
        </button>
      </header>

      <main className="mx-auto max-w-5xl px-5 pt-28 pb-12 transition-all md:px-10">
        <h1 className="mb-3 text-3xl font-medium">
          Choose the plan that's right for you
        </h1>
        <ul>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="h-7 w-7 text-[#14E509]" /> Read All the books you'd like.
          </li>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="h-7 w-7 text-[#14E509]" /> Free Deliveries and Pickups.
          </li>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="h-7 w-7 text-[#14E509]" /> Change or cancel
            your plan anytime.
          </li>
        </ul>

        <div className='mt-4 flex flex-col space-y-4'>
          <div className='flex w-full items-center justify-center self-end md:w-3/5'>
            <div className='planBox'>
              Basic
            </div>
            <div className='planBox'>
              Standard
            </div>
            <div className='planBox'>
              Premium
            </div>
          </div>

          <Table products={products} selectedPlan={selectedPlan} />

          <button
            disabled={!selectedPlan || isBillingLoading}
            className={`mx-auto w-11/12 rounded bg-[#14E509] py-4 text-xl shadow hover:bg-[#47f612e0] md:w-[420px] ${isBillingLoading && 'opacity-60'
              }`}
            onClick={subscribeToPlan}
          >
            {isBillingLoading ? (
              <Loader color="dark:fill-gray-300" />
            ) : (
              'Subscribe'
            )}
          </button>
        </div>
      </main>
    </div>
  )
}

export default Plans
