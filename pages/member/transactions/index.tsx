import jwtDecode from 'jwt-decode'
import Sidebar from '../../../components/organisms/Sidebar'
import TransactionsContent from '../../../components/organisms/TranscationsContent'
import { jwtPayloadTypes, UserTypes } from '../../../services/data-types'

export default function Transactions() {
  return (
    <section className="transactions overflow-auto">
      <Sidebar ActiveMenu="transactions" />
      <TransactionsContent />
    </section>
  )
}

interface getServerSidePropsTypes {
  req: {
    cookies: {
      token: string
    }
  }
}

export async function getServerSideProps({ req }: getServerSidePropsTypes) {
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
  const payload: jwtPayloadTypes = jwtDecode(jwtToken)
  const userFromPayload: UserTypes = payload.player
  const IMG = process.env.NEXT_PUBLIC_IMAGES
  userFromPayload.avatar = `${IMG}/${userFromPayload.avatar}`

  return {
    props: {
      user: userFromPayload,
    },
  }
}
