import Image from 'next/image'
import Link from 'next/link'
import { toast } from 'react-toastify'
import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { setSignup } from '../services/auth'
import { getGameCategory } from '../services/player'

export default function SignUpPhoto() {
  const [categories, setCategories] = useState([])
  const [favorite, setFavorite] = useState('')
  const [image, setImage] = useState<File>()
  const [imagePreview, setImagePreview] = useState('')
  const [localForm, setLocalForm] = useState({
    name: '',
    email: '',
  })

  const router = useRouter()

  const getGameCategoryAPI = useCallback(async () => {
    const response: { data: any } = await getGameCategory()

    setCategories(response.data)
    setFavorite(response.data[0]._id)
  }, [getGameCategory])

  useEffect(() => {
    getGameCategoryAPI()
  }, [])

  useEffect(() => {
    const getLocalForm = localStorage.getItem('user-form')
    setLocalForm(JSON.parse(getLocalForm!))
  }, [])

  const onSubmit = async () => {
    const getLocalForm = await localStorage.getItem('user-form')
    const form = JSON.parse(getLocalForm!)

    const data = new FormData()

    data.append('image', image!)
    data.append('email', form.email)
    data.append('name', form.name)
    data.append('password', form.password)
    data.append('username', form.name)
    data.append('phoNumber', '08123456789')
    data.append('role', 'user')
    data.append('status', 'Y')
    data.append('favorite', favorite)

    const result = await setSignup(data)
    if (result.error) {
      toast.error(result.message)
    } else {
      toast.success('Register berhasil!')
      router.push('/sign-up-success')
      localStorage.removeItem('user-form')
    }
  }

  return (
    <section className="sign-up-photo mx-auto pt-lg-227 pb-lg-227 pt-130 pb-50">
      <div className="container mx-auto">
        <form action="">
          <div className="form-input d-md-block d-flex flex-column">
            <div>
              <div className="mb-20">
                <div className="image-upload text-center">
                  <label htmlFor="avatar">
                    {imagePreview ? (
                      <img
                        src={imagePreview}
                        className="img-upload"
                        alt="upload"
                      />
                    ) : (
                      <Image
                        src="/icon/UploadPhoto.svg"
                        height={120}
                        width={120}
                        alt="upload"
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
                      setImage(img)
                    }}
                  />
                </div>
              </div>
              <h2 className="fw-bold text-xl text-center color-palette-1 m-0">
                {localForm.name}
              </h2>
              <p className="text-lg text-center color-palette-1 m-0">
                {localForm.email}
              </p>
              <div className="pt-50 pb-50">
                <label
                  htmlFor="category"
                  className="form-label text-lg fw-medium color-palette-1 mb-10"
                >
                  Favorite Game
                </label>
                <select
                  id="category"
                  name="category"
                  className="form-select d-block w-100 rounded-pill text-lg"
                  aria-label="Favorite Game"
                  value={favorite}
                  onChange={(event) => setFavorite(event.target.value)}
                >
                  {categories.map((category: { name: string; _id: string }) => (
                    <option key={category._id} value={category._id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="button-group d-flex flex-column mx-auto">
              <button
                type="button"
                className="btn btn-create fw-medium text-lg text-white rounded-pill mb-16"
                onClick={onSubmit}
              >
                Create My Account
              </button>
              <Link href="/">
                <a
                  className="btn btn-tnc text-lg color-palette-1 text-decoration-underline pt-15"
                  role="button"
                >
                  Terms & Conditions
                </a>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}
