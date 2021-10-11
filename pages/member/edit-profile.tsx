import Sidebar from '../../components/organisms/Sidebar'
import Image from 'next/image'
import Input from '../../components/atoms/Inputs'
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { jwtPayloadTypes, UserTypes } from '../../services/data-types'
import jwtDecode from 'jwt-decode'
import { updateProfile } from '../../services/member'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'

export default function EditProfile() {
  const [user, setUser] = useState({
    id: '',
    avatar: '',
    name: '',
    email: '',
    phoneNumber: '',
  })
  const [imagePreview, setImagePreview] = useState('')
  const router = useRouter()

  useEffect(() => {
    const token = Cookies.get('token')
    if (token) {
      const jwtToken = atob(token)
      const payload: jwtPayloadTypes = jwtDecode(jwtToken)
      const userFromPayload: UserTypes = payload.player
      setUser(userFromPayload)
    }
  }, [])

  const onSubmit = async () => {
    const data = new FormData()

    data.append('image', user.avatar)
    data.append('name', user.name)
    data.append('phoneNumber', user.phoneNumber)

    console.log('data : ', user)
    const response = await updateProfile(data)

    if (response.error) {
      toast.error(response.message)
    } else {
      console.log('data : ', data)

      toast.success('Update berhasil!')
      Cookies.remove('token')
      router.push('/sign-in')
    }
  }

  return (
    <section className="edit-profile overflow-auto">
      <Sidebar ActiveMenu="settings" />
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">Settings</h2>
          <div className="bg-card pt-30 ps-30 pe-30 pb-30">
            <form action="">
              <div className="photo d-flex">
                <div className="image-upload">
                  <label htmlFor="avatar">
                    {imagePreview ? (
                      <img src={imagePreview} width={90} height={90} />
                    ) : (
                      <Image
                        src="/icon/UploadPhoto.svg"
                        width={90}
                        height={90}
                      />
                    )}
                  </label>
                  <input
                    id="avatar"
                    type="file"
                    name="avatar"
                    accept="image/png, image/jpeg"
                    onChange={(event) => {
                      const img = event.target.files![0]
                      setImagePreview(URL.createObjectURL(img))
                      setUser({
                        ...user,
                        avatar: img,
                      })
                    }}
                  />
                </div>
              </div>
              <div className="pt-30">
                <Input label="Email address" value={user.email} disabled />
              </div>
              <div className="pt-30">
                <Input
                  label="Full Name"
                  onChange={(event) =>
                    setUser({ ...user, name: event.target.value })
                  }
                  value={user.name}
                />
              </div>
              <div className="pt-30">
                <Input
                  label="Phone Number"
                  onChange={(event) =>
                    setUser({ ...user, phoneNumber: event.target.value })
                  }
                  value={user.phoneNumber}
                />
              </div>
              <div className="button-group d-flex flex-column pt-50">
                <button
                  type="button"
                  className="btn btn-save fw-medium text-lg text-white rounded-pill"
                  onClick={onSubmit}
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </section>
  )
}
