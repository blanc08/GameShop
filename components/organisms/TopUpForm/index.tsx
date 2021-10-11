import { useRouter } from 'next/router'
import { useState } from 'react'
import { toast } from 'react-toastify'
import {
  BanksTypes,
  NominalsTypes,
  PaymentTypes,
} from '../../../services/data-types'
import NominalItem from './NominalItem'
import PaymentItem from './PaymentItem'

interface TopUpFormTypes {
  nominals: NominalsTypes[]
  payments: PaymentTypes[]
}
export default function TopUpForm(props: TopUpFormTypes) {
  const [verifyID, setVerifyID] = useState('')
  const [bankAccountName, setBankAccountName] = useState('')
  const [nominalItem, setNominalItem] = useState({})
  const [paymentItem, setPaymentIten] = useState({})
  const { nominals, payments } = props

  const router = useRouter()

  const onNominalItemChange = (data: NominalsTypes) => {
    setNominalItem(data)
  }

  const onPaymentItemChange = (payment: NominalsTypes, bank: BanksTypes) => {
    const data = {
      payment,
      bank,
    }
    setPaymentIten(data)
  }

  const onSubmit = () => {
    if (
      verifyID === '' ||
      bankAccountName === '' ||
      nominalItem === {} ||
      paymentItem === {}
    ) {
      toast.error('Silahkan isi data dengan benar')
    } else {
      const data = {
        verifyID,
        bankAccountName,
        nominalItem,
        paymentItem,
      }
      localStorage.setItem('data-topup', JSON.stringify(data))
      router.push('/checkout')
    }
    // localStorage.setItem('payment-item', JSON.stringify(data))
  }

  return (
    <form action="./checkout.html" method="POST">
      <div className="pt-md-50 pt-30">
        <div className="">
          <label
            htmlFor="ID"
            className="form-label text-lg fw-medium color-palette-1 mb-10"
          >
            Verify ID
          </label>
          <input
            type="text"
            className="form-control rounded-pill text-lg"
            id="ID"
            name="ID"
            aria-describedby="verifyID"
            placeholder="Enter your ID"
            value={verifyID}
            onChange={(event) => setVerifyID(event.target.value)}
          />
        </div>
      </div>
      <div className="pt-md-50 pb-md-50 pt-30 pb-20">
        <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">
          Nominal Top Up
        </p>
        <div className="row justify-content-between">
          {nominals.map((nominal) => (
            <NominalItem
              key={nominal._id}
              _id={nominal._id}
              coinName={nominal.coinName}
              coinQuantity={nominal.coinQuantity}
              price={nominal.price}
              onChange={() => onNominalItemChange(nominal)}
            />
          ))}
          <div className="col-lg-4 col-sm-6" />
        </div>
      </div>
      <div className="pb-md-50 pb-20">
        <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">
          Payment Method
        </p>
        <fieldset id="paymentMethod">
          <div className="row justify-content-between">
            {payments.map(
              (payment) =>
                // eslint-disable-next-line implicit-arrow-linebreak
                payment.banks.map((bank) => (
                  <PaymentItem
                    bankID={bank._id}
                    name={bank.bankName}
                    type={payment.type}
                    key={bank._id}
                    onChange={() => onPaymentItemChange(payment, bank)}
                  />
                  // eslint-disable-next-line comma-dangle
                ))
              // eslint-disable-next-line function-paren-newline
            )}
            <div className="col-lg-4 col-sm-6" />
          </div>
        </fieldset>
      </div>
      <div className="pb-50">
        <label
          htmlFor="bankAccount"
          className="form-label text-lg fw-medium color-palette-1 mb-10"
        >
          Bank Account Name
        </label>
        <input
          type="text"
          className="form-control rounded-pill text-lg"
          id="bankAccount"
          name="bankAccount"
          aria-describedby="bankAccount"
          placeholder="Enter your Bank Account Name"
          value={bankAccountName}
          onChange={(event) => setBankAccountName(event.target.value)}
        />
      </div>
      <div className="d-sm-block d-flex flex-column w-100">
        <button
          onClick={onSubmit}
          type="button"
          className="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg"
        >
          Continue
        </button>
      </div>
    </form>
  )
}
