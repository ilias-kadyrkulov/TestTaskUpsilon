import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
    useLazyGetSingleProductQuery,
    useUpdateProductMutation
} from '@/api/products.api'
import { TEditProduct } from '@/api/products.types'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'

const EditPage = () => {
    const { id } = useParams()

    const [getSingleProduct, { data: product }] = useLazyGetSingleProductQuery()

    const [updateProduct] = useUpdateProductMutation()

    const navigate = useNavigate()

    const FormSchema = Yup.object().shape({
        title: Yup.string().required('Required.'),
        price: Yup.number().required('Required.'),
        description: Yup.string().required('Required.'),
        isPublished: Yup.boolean()
    })

    const handleSubmit = async ({
        title,
        price,
        description
    }: TEditProduct) => {
        if (id) {
            await updateProduct({
                id: +id,
                title: title,
                price: price,
                description: description
            })
        }

        //NOTE - Можно редактировать клиентский стейт

        navigate('/products')
    }

    useEffect(() => {
        id && getSingleProduct(+id)
    }, [id])

    return (
        <div className='flex-1 bg-[#d1c4a0]'>
            {product && (
                <Formik
                    onSubmit={handleSubmit}
                    initialValues={{
                        title: product.title,
                        price: product.price,
                        description: product.description
                    }}
                    validationSchema={FormSchema}
                >
                    {({ errors, touched, isSubmitting }) => (
                        <Form className='flex flex-col gap-3 items-center max-w-[400px] px-5 mx-auto mt-10'>
                            <label>
                                <span>Title:</span>
                                <Field
                                    type='text'
                                    name='title'
                                    placeholder='Title...'
                                    className='w-full p-1 rounded-lg'
                                />
                            </label>
                            {errors.title && touched.title ? (
                                <div className='text-red-600 font-semibold'>
                                    {errors.title}
                                </div>
                            ) : null}
                            <label>
                                <span>Price:</span>
                                <Field
                                    type='text'
                                    name='price'
                                    placeholder='Price...'
                                    className='w-full p-1 rounded-lg'
                                />
                            </label>
                            {errors.price && touched.price ? (
                                <div className='text-red-600 font-semibold'>
                                    {errors.price}
                                </div>
                            ) : null}
                            <label>
                                <span>Description:</span>
                                <Field
                                    type='text'
                                    name='description'
                                    placeholder='Description...'
                                    className='w-full p-1 rounded-lg'
                                />
                            </label>
                            {errors.description && touched.description ? (
                                <div className='text-red-600 font-semibold'>
                                    {errors.description}
                                </div>
                            ) : null}
                            <button
                                type='submit'
                                disabled={isSubmitting}
                                className='p-2 font-semibold text-lg text-[#f2f1f6] bg-[#802c6e] rounded-lg transition-colors duration-300 hover:text-[#802c6e] hover:bg-black'
                            >
                                Edit the product
                            </button>
                        </Form>
                    )}
                </Formik>
            )}
        </div>
    )
}

export default EditPage
