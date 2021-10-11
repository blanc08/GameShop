import Image from 'next/image'
import cx from 'classnames'
import Link from 'next/link'

interface MenuItemProps {
  title: string
  icon: string
  active?: boolean
  link?: string
  onClick?: () => void
}
export default function MenuItem(props: MenuItemProps) {
  const { title, icon, active, link, onClick } = props
  const classItem = cx({
    item: true,
    'mb-30': true,
    active,
  })
  return (
    <div className={classItem} onClick={onClick}>
      <div className="me-3">
        <Image
          className="icon"
          src={`/icon/${icon}.svg`}
          height={25}
          width={25}
        />
      </div>
      <p className="item-title m-0">
        {onClick ? (
          <a className="text-lg text-decoration-none">{title}</a>
        ) : (
          <Link href={`/${link}`}>
            <a className="text-lg text-decoration-none">{title}</a>
          </Link>
        )}
      </p>
    </div>
  )
}
