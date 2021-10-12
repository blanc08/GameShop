import Sidebar from '../../../components/organisms/Sidebar'
import TransactionDetailContent from '../../../components/organisms/TransactionDetailContent'
import { HistoryTransactionTypes } from '../../../services/data-types'
import { getTransactionDetail } from '../../../services/member'

interface transactionDetailProps {
  TransactionDetail: HistoryTransactionTypes
}
export default function TransactionDetail(props: transactionDetailProps) {
  const { TransactionDetail } = props

  return (
    <section className="transactions-detail overflow-auto">
      <Sidebar ActiveMenu="transactions" />
      <TransactionDetailContent data={TransactionDetail} />
    </section>
  )
}

interface getServerSidePropsTypes {
  req: {
    cookies: {
      token: string
    }
  }
  params: {
    idTrs: string
  }
}

export async function getServerSideProps({
  req,
  params,
}: getServerSidePropsTypes) {
  const { idTrs } = params
  const { token } = req.cookies

  if (!token) {
    return {
      redirect: {
        destination: '/sign-in',
        permanent: false,
      },
    }
  }

  const jwtToken = Buffer.from(token, 'base64').toString('ascii')

  const response = await getTransactionDetail(idTrs, jwtToken)

  return {
    props: {
      TransactionDetail: response.data,
    },
  }
}
