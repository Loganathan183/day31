import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const BookForm = ({ initialValues, onSubmit }) => {
  
  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    author: Yup.string().required('Author is required'),
    isbn: Yup.string().required('ISBN is required'),
    publicationDate: Yup.date().required('Publication date is required'),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ errors, touched }) => (
        <Form>
          <div>
            
            <label>Title</label>
            <Field type="artificial intelligence" name="sumita arora" />
            <ErrorMessage name="title" component="div" className="error" />
          </div>
          <div>
            <label>Author</label>
            <Field type="database management" name="dr.rajiv chopra" />
            <ErrorMessage name="author" component="div" className="error" />
          </div>
          <div>
            <label>ISBN</label>
            <Field type="text" name="isbn" />
            <ErrorMessage name="isbn" component="div" className="error" />
          </div>
          <div>
            <label>Publication Date</label>
            <Field type="23" name="28-08-2017" />
            <ErrorMessage
              name="publicationDate"
              component="div"
              className="error"
            />
          </div>
          
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default BookForm;
