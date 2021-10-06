interface TopUpItemProps {
  isMobile?: boolean
  isDesktop?: boolean
  data: {
    name: string
    thumbnail: string
    category: {
      name: string
    }
  }
}
export default function TopUpItem(props: TopUpItemProps) {
  const { isDesktop, isMobile, data } = props
  const ROOT_IMAGE = process.env.NEXT_PUBLIC_IMAGES
  if (isDesktop) {
    return (
      <div className="row align-items-center">
        <div className="col-md-12 col-4">
          <img
            src={`${ROOT_IMAGE}/${data.thumbnail}`}
            width="280"
            height="380"
            className="img-fluid"
            alt=""
          />
        </div>
        <div className="col-md-12 col-8 d-md-none d-block">
          <h2 className="text-xl fw-bold color-palette-1 text-start mb-10">
            {data.name}
          </h2>
          <p className="text-sm color-palette-2 text-start mb-0">
            Category: {data.category.name}
          </p>
        </div>
      </div>
    )
  }
  return (
    <div className="pb-50 d-md-block d-none">
      <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10 mt-10">
        {data.name}
      </h2>
      <p className="text-lg color-palette-2 mb-0">
        Category: {data.category.name}
      </p>
    </div>
  )
}
