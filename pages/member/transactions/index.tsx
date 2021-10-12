import Sidebar from '../../../components/organisms/Sidebar'
import TransactionsContent from '../../../components/organisms/TranscationsContent'

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

  return {
    props: {},
  }
}
