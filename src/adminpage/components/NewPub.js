import { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.module.css'
import { insertPub } from '../../api/fetchAPI'
import { Box, Button, ButtonGroup, Container, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material'

const InputMetrics = (props) => {

  const [metrics, setMetrics] = useState({
    views: '',
    likes: '',
    comments: '',
    favourites: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setMetrics({ ...metrics, [name]: value, })
  }

  useEffect(() => {
    props.setData({ ...props.data, 'metrics': metrics })
  }, [metrics])

  return (
    <>
      <Typography variant="h6">Metrics</Typography>
      <TextField
        fullWidth label="Views" name="views" variant="outlined" size='small' sx={{ mb: 1 }}
        value={metrics.views} onChange={handleChange} required
      />
      <TextField
        fullWidth label="Likes" name="likes" variant="outlined" size='small' sx={{ mb: 1 }}
        value={metrics.likes} onChange={handleChange} required
      />
      <TextField
        fullWidth label="Comments" name="comments" variant="outlined" size='small' sx={{ mb: 1 }}
        value={metrics.comments} onChange={handleChange} required
      />
      <TextField
        fullWidth label="Favourites" name="favourites" variant="outlined" size='small' sx={{ mb: 1 }}
        value={metrics.favourites} onChange={handleChange} required
      />
    </>
  )
}

const NewPub = ({ setRoute }) => {

  const [selectedDate, setSelectedDate] = useState(null)

  const [formData, setFormData] = useState({
    title: '',
    date: '',
    description: '',
    profilePicture: null,
    platform: '',
    linktopub: '',
    metrics: {
      views: '',
      likes: '',
      comments: '',
      favourites: ''
    }
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData, [name]: value,
    })
  }

  const handleFileChange = (e) => {
    setFormData({
      ...formData, profilePicture: e.target.files[0]
    });
  }

  const handleChangeDate = (date) => {
    setSelectedDate(date)
    setFormData({ ...formData, ['date']: date.toLocaleDateString() })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let newFormData = new FormData()
    newFormData.append('title', formData.title)
    newFormData.append('date', formData.date)
    newFormData.append('description', formData.description)
    newFormData.append('image', formData.profilePicture.name)
    newFormData.append('file', formData.profilePicture)
    newFormData.append('platform', formData.platform)
    newFormData.append('linktopub', formData.linktopub)
    newFormData.append('metrics', JSON.stringify(formData.metrics))
    insertPub(newFormData).then((data) => {
      if (data && data.error) {
        console.log(data.error)
      } else {
        setRoute(0)
      }
    })
  }

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" align="center">Input Publication Data here</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth label="Title" name="title" variant="outlined" size='small' sx={{ my: 1 }}
            value={formData.title} onChange={handleChange} required
          />

          <TextField
            fullWidth label="Description" multiline rows={4} name="description" variant="outlined" size='small' sx={{ my: 1 }}
            value={formData.description} onChange={handleChange} required
          />

          <Box sx={{ my: 1, display: 'flex', alignItems: 'center' }}>
            <Typography>Date : </Typography>
            <div>
              <DatePicker name='date' className='datePicker' selected={selectedDate} onChange={handleChangeDate} dateFormat="yyyy/MM/dd" required />
            </div>
          </Box>

          <>
            <Button variant="outlined" component="label" fullWidth>
              <input type="file" name="profilePicture" hidden onChange={handleFileChange} />
              Upload Picture
            </Button>
            {
              formData.profilePicture && <Typography>Selected File: {formData.profilePicture.name}</Typography>
            }
          </>

          <FormControl component="fieldset" sx={{ my: 1 }}>
            <FormLabel component="legend">Platform</FormLabel>
            <RadioGroup
              name="platform" row
              value={formData.platform} onChange={handleChange}
            >
              <FormControlLabel value="VC" control={<Radio />} label="VC" required />
              <FormControlLabel value="Habr" control={<Radio />} label="Habr" required />
              <FormControlLabel value="YouTube" control={<Radio />} label="YouTube" required />
            </RadioGroup>
          </FormControl>

          <TextField
            fullWidth label="Link to Publication" name="linktopub" variant="outlined" size='small' sx={{ my: 1 }}
            value={formData.linktopub} onChange={handleChange} required
          />

          <InputMetrics data={formData} setData={setFormData} />

          <ButtonGroup sx={{ float: 'right' }}>
            <Button type="submit" variant="contained" color="primary">Submit</Button>
            <Button variant="contained" color="error" onClick={() => { setRoute(0) }}>Back</Button>
          </ButtonGroup>
        </form>
      </Box>
    </Container>
  )
}

export default NewPub