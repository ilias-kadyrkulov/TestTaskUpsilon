import { Field, Form, Formik } from 'formik'
import { useAddNewProductMutation } from '@/api/products.api'
import { TCreateProduct } from '@/api/products.types'
import { useActions } from '@/hooks/useActions'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'

const CreationPage = () => {
    const [addNewProduct] = useAddNewProductMutation()

    const { setNewProduct } = useActions()

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
        description,
        isPublished
    }: TCreateProduct) => {
        const res = await addNewProduct({
            title: title,
            price: price,
            description: description
        }).unwrap()

        setNewProduct({ ...res, isPublished: isPublished })

        navigate('/products')
    }

    return (
        <div className='flex-1 bg-[#d1c4a0]'>
            <Formik
                onSubmit={handleSubmit}
                initialValues={{
                    title: '',
                    price: null,
                    description: '',
                    isPublished: false
                }}
                validationSchema={FormSchema}
            >
                {({ errors, touched, isSubmitting }) => (
                    <Form className='flex flex-col gap-3 items-center max-w-[400px] px-5 mx-auto mt-10'>
                        <Field
                            type='text'
                            name='title'
                            placeholder='Title...'
                            className='w-full p-1 rounded-lg'
                        />
                        {errors.title && touched.title ? (
                            <div className='text-red-600 font-semibold'>
                                {errors.title}
                            </div>
                        ) : null}
                        <Field
                            type='text'
                            name='price'
                            placeholder='Price...'
                            className='w-full p-1 rounded-lg'
                        />
                        {errors.price && touched.price ? (
                            <div className='text-red-600 font-semibold'>
                                {errors.price}
                            </div>
                        ) : null}
                        <Field
                            type='text'
                            name='description'
                            placeholder='Description...'
                            className='w-full p-1 rounded-lg'
                        />
                        {errors.description && touched.description ? (
                            <div className='text-red-600 font-semibold'>
                                {errors.description}
                            </div>
                        ) : null}
                        <label className='flex gap-2 items-center'>
                            <Field
                                type='checkbox'
                                name='isPublished'
                            />
                            isPublished
                        </label>

                        {errors.isPublished && touched.isPublished ? (
                            <div className='text-red-600 font-semibold'>
                                {errors.isPublished}
                            </div>
                        ) : null}
                        <button
                            type='submit'
                            disabled={isSubmitting}
                            className='p-2 font-semibold text-lg text-[#f2f1f6] bg-[#802c6e] rounded-lg transition-colors duration-300 hover:text-[#802c6e] hover:bg-black'
                        >
                            Create the product
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default CreationPage
