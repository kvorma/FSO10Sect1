import { Pressable, View } from 'react-native'
import { useNavigate, Navigate } from 'react-router-native'
import Alert from '@blazejkustra/react-native-alert'
import { useFormik } from 'formik'
import * as yup from 'yup'
import Text from './Text'
import InputLine from './InputLine'
import { styles } from '../theme'
import { colorBorder } from '../utils/utils'
import useCreateReview from '../hooks/useCreateReview'

const validationSchema = yup.object().shape({
  owner: yup.string().required('Repository owner is required'),
  name: yup.string().required('Repository name is required'),
  rating: yup
    .number()
    .integer()
    .min(0)
    .max(100)
    .required('Rating is required and must be from 0 to 100'),
  review: yup.string(),
})

export const ReviewForm = ({ onSubmit }) => {
  const form = useFormik({
    initialValues: {
      owner: 'kvorma',
      name: 'patientor',
      rating: '20',
      review: 'testing from the app',
    },
    validationSchema,
    onSubmit: onSubmit,
  })
  const ownerBorderColor = colorBorder(form, 'owner')
  const nameBorderColor = colorBorder(form, 'name')
  const ratingBorderColor = colorBorder(form, 'rating')
  const reviewBorderColor = colorBorder(form, 'review', {
    textAlignVertical: 'center',
  })

  return (
    <View style={styles.mainContainer}>
      <InputLine
        form={form}
        bc={ownerBorderColor}
        ph="Reposity owner name"
        fn="owner"
      />
      <InputLine
        form={form}
        bc={nameBorderColor}
        ph="Reposity name"
        fn="name"
      />
      <InputLine
        form={form}
        bc={ratingBorderColor}
        ph="Rating between 0 and 100"
        fn="rating"
      />
      <InputLine
        form={form}
        bc={reviewBorderColor}
        ph="Review"
        fn="review"
        multiline="true"
      />

      <View style={styles.panel}>
        <Pressable onPress={form.handleSubmit}>
          <Text style={styles.submit} fontWeight="bold">
            Submit Review
          </Text>
        </Pressable>
      </View>
    </View>
  )
}

const Review = () => {
  const [addReview, result] = useCreateReview()
  const navigate = useNavigate()

  const onSubmit = async (values) => {
    try {
      const newReview = await addReview({
        ownerName: values.owner,
        repositoryName: values.name,
        rating: Number(values.rating),
        text: values.review,
      })
      navigate(`/view/${newReview}`)
    } catch (err) {
      console.error('add review:', err.message)
    }
  }
  if (result.loading) return <Text>Updating</Text>
  if (result.error) {
    Alert.alert('Adding review failed', result.error.message)
    return <Navigate to="/" />
  }
  return <ReviewForm onSubmit={onSubmit} />
}

export default Review
