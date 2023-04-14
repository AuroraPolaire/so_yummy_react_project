import React from 'react';
// import { Field, ErrorMessage } from 'formik';
import { FormControl, InputLabel, MenuItem, Select, TextField, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCategoryList } from 'redux/recipes/recipesOperations';
import { selectCategoryList } from 'redux/recipes/recipesSelectors';

const TIME_MAX = 120;
// const ITEM_HEIGHT = 36;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 6 + ITEM_PADDING_TOP,
//       width: 132,
//     },
//   },
// };

export default function RecipeDescriptionFields({ formik }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoryList());
  }, [dispatch]);

  const categories = useSelector(selectCategoryList);
    
    const createTimeOptions = (maxTime) => {
        const options = [];
        for (let i = 5; i <= maxTime; i += 5) {
            options.push(i);
        }

        return options;
    }
    
    return (
      <Box sx={{
            display: 'flex',
            }}>
        <Box
      sx={{
        width: 357,
        height: 344,
        marginRight: "50px",
        backgroundColor: '#8BAA36',
        '&:hover': {
          backgroundColor: '#45551b',
        },
      }}
        >
          <input id="fullImage" type="file" name='fullImage' onChange={(event) => {
            formik.setFieldValue("fullImage", event.currentTarget.files[0]);
          }}/>
    </Box>
        <Box sx={{
          width: 393,
          display: 'flex',
          flexDirection: 'column',
          marginBottom: '100px',
      }}>
        <TextField
            sx={{
                height: 43,
                marginBottom: "40px",
            }}
            id="title"
            name='title'
            label="Enter item title"
            variant="standard"
            value={formik.values.title}
            onChange={formik.handleChange}
            error={formik.touched.title && Boolean(formik.errors.title)}
              // helperText={formik.touched.title && formik.errors.title}
          />
          <TextField
            sx={{
                height: 43,
                marginBottom: "40px",
            }}
            id="description"
            name='description'
            label="Enter about recipe"
            variant="standard"
            value={formik.values.description}
            onChange={formik.handleChange}
            error={formik.touched.description && Boolean(formik.errors.description)}
              // helperText={formik.touched.description && formik.errors.description}
          />

      {/* <label htmlFor="description">Enter about recipe</label>
       <Field
         name="description"
         type="text"
          />
          <ErrorMessage name="description" /> */}
        <FormControl variant="standard" sx={{ minWidth: 132 }}>
            <InputLabel id="category">Category</InputLabel>
            <Select 
                sx={{
                height: 43,
                marginBottom: "40px",
                }}
                name="category"
                // labelId="category"
                id="category"
                value={formik.values.category}
                label="Category"
                onChange={formik.handleChange}
                error={formik.touched.category && Boolean(formik.errors.category)}
                // helperText={formik.touched.category && formik.errors.category}
                // MenuProps={MenuProps}
            >
                {categories.map(cat => <MenuItem key={cat._id} value={cat._id}>{ cat.title }</MenuItem>)}
            </Select>
        </FormControl>
      {/* <label htmlFor="category">Category</label>
       <Field
         name="category"
         as='select'
         type="text"
          >
            <option value="breakfast">Breakfast</option>
            <option value="drink">Drink</option>
            <option value="dinner">Dinner</option>
        </Field>
          <ErrorMessage name="category" /> */}
        <FormControl variant="standard" sx={{ minWidth: 132 }}>
            <InputLabel id="time">Time</InputLabel>
            <Select
                sx={{
                height: 43,
                marginBottom: "40px",
                }}  
                name="time"
                // labelId="time"
                id="time"
                value={formik.values.time}
                label="time"
                onChange={formik.handleChange}
                error={formik.touched.time && Boolean(formik.errors.time)}
                // helperText={formik.touched.time && formik.errors.time}
                // MenuProps={MenuProps}
              >
                {createTimeOptions(TIME_MAX).map(opt => <MenuItem key={opt} value={opt}>{ opt } min</MenuItem>)}
            </Select>
        </FormControl>
      {/* <label htmlFor="time">Cooking time</label>
       <Field
            name="time"
            as='select'
            type="time"
          >
              {createTimeOptions(TIME_MAX).map(opt => <option key={opt} value={opt}>{ opt }</option>)}
        </Field>
          <ErrorMessage name="time" /> */}
    </Box>
</Box>
  )
}