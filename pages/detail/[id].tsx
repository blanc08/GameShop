import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'
import TopUpItem from '../../components/molecules/TopUpItem'
import Footer from '../../components/organisms/Footer'
import Navbar from '../../components/organisms/Navbar'
import TopUpForm from '../../components/organisms/TopUpForm'
import {
  DetailVoucherTypes,
  FeaturedGameCardTypes,
  NominalsTypes,
  PaymentTypes,
} from '../../services/data-types'
import { getDetailVoucher, getFeaturedGame } from '../../services/player'

interface DetailProps {
  dataItem: FeaturedGameCardTypes
  nominals: NominalsTypes[]
  payments: PaymentTypes[]
}
export default function Detail({ dataItem, nominals, payments }: DetailProps) {
  useEffect(() => {
    localStorage.setItem('data-item', JSON.stringify(dataItem))
  }, [])
  return (
    <>
      <Navbar />
      <section className="detail pt-lg-60 pb-50">
        <div className="container-xxl container-fluid">
          <div className="detail-header pb-50">
            <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10">
              Top Up
            </h2>
            <p className="text-lg color-palette-1 mb-0">
              Perkuat akun dan jadilah pemenang
            </p>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-5 pb-30 pb-md-0 pe-md-25 text-md-start">
              <TopUpItem data={dataItem} isDesktop />
            </div>
            <div className="col-xl-9 col-lg-8 col-md-7 ps-md-25">
              <TopUpItem data={dataItem} isMobile />

              <hr />
              <TopUpForm nominals={nominals} payments={payments} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export async function getStaticPaths() {
  const data = await getFeaturedGame()
  const paths = data.map((item: FeaturedGameCardTypes) => {
    return {
      params: {
        id: item._id,
      },
    }
  })

  console.log('paths', paths)

  return {
    paths,
    fallback: false,
  }
}

interface getStaticPropsTypes {
  params: {
    id: string
  }
}
export async function getStaticProps({ params }: getStaticPropsTypes) {
  const { id } = params
  const data: DetailVoucherTypes = await getDetailVoucher(id)
  console.log('data : ', data)

  return {
    props: {
      dataItem: data.detail,
      nominals: data.detail.nominals,
      payments: data.payments,
    },
  }
}
