import jwtDecode from 'jwt-decode'
import OverviewContent from '../../components/organisms/OverviewContent'
import Sidebar from '../../components/organisms/Sidebar'
import { jwtPayloadTypes, UserTypes } from '../../services/data-types'

export default function Member() {
  return (
    <section className="overview overflow-auto">
      <Sidebar ActiveMenu="overview" />
      <OverviewContent />
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
