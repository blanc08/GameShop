import NumberFormat from 'react-number-format'

interface RowProps {
  label: string
  value: string | number
  classname?: string
}

export default function Row(props: RowProps) {
  const { label, value, classname } = props
  return (
    <p className="text-lg color-palette-1 mb-20">
      {label}{' '}
      <span className={`purchase-details ${classname}`}>
        {typeof value === 'number' ? (
          <NumberFormat
            value={value}
            prefix="Rp. "
            displayType="text"
            thousandSeparator="."
            decimalSeparator=","
          />
        ) : (
          value
        )}
      </span>
    </p>
  )
}
