import React from 'react'
import { StyleSheet, View, Text, Image, Button } from 'react-native'
import { globalStyles, images } from '../styles/global'
import { Formik } from 'formik'
import { TextInput } from 'react-native-gesture-handler'

export default function ReviewForm(addReview) {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: '', body: '', rating: '' }}
        onSubmit={(values) => {
          console.log(values)
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder="Review Title"
              onChangeText={props.handleChange('title')}
              value={props.values.title}
            />
            <TextInput
              multiline
              style={globalStyles.input}
              placeholder="Review body"
              onChangeText={props.handleChange('body')}
              value={props.values.body}
            />
            <TextInput
              multiline
              style={globalStyles.input}
              placeholder="Rating(1-5)"
              onChangeText={props.handleChange('rating')}
              value={props.values.rating}
              keyboardType="numeric"
            />
            <Button
              title="submit"
              color="maroon"
              onPress={props.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  )
}
