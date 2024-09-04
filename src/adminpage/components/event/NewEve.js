import { useState } from 'react'
import { Box, Button, ButtonGroup, Container, TextField, Typography } from '@mui/material'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.module.css'
import { insertEve } from '../../../api/eveAPI'


const NewEve = ({ setRoute }) => {

    const [selectedDate, setSelectedDate] = useState(null)

    const [formData, setFormData] = useState({
        title: '',
        selDate: '',
        description: '',
        location: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData, [name]: value,
        })
    }

    const handleChangeDate = (date) => {
        setSelectedDate(date)
        setFormData({ ...formData, 'selDate': date.toLocaleDateString() })
    }

    const handleSubmit = () => {
        insertEve(formData).then((data) => {
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
                <Typography variant="h4" align="center">Input Event Data here</Typography>
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

                    <TextField
                        fullWidth label="Location" name="location" variant="outlined" size='small' sx={{ my: 1 }}
                        value={formData.location} onChange={handleChange} required
                    />

                    <ButtonGroup sx={{ float: 'right' }}>
                        <Button type="submit" variant="contained" color="primary">Submit</Button>
                        <Button variant="contained" color="error" onClick={() => { setRoute(0) }}>Back</Button>
                    </ButtonGroup>
                </form>
            </Box>
        </Container>
    )
}

export default NewEve