import { useState } from 'react'
import { Box, Button, ButtonGroup, Container, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material'

import { insertCus } from '../../../api/cusAPI'

const NewPub = ({ setRoute }) => {

    const [formData, setFormData] = useState({
        type: '',
        name: '',
        position: '',
        content: '',
        profilePicture: null,
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

    const handleSubmit = () => {
        let formdata = new FormData()
        formdata.append('type', formData.type)
        formdata.append('name', formData.name)
        formdata.append('position', formData.position)
        formdata.append('image', formData.profilePicture.name)
        formdata.append('file', formData.profilePicture)
        formdata.append('content', formData.content)
        insertCus(formdata).then((data) => {
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
                <Typography variant="h4" align="center">Input Customer Data here</Typography>
                <form onSubmit={handleSubmit}>
                    <FormControl component="fieldset" sx={{ my: 1 }}>
                        <FormLabel component="legend">Type</FormLabel>
                        <RadioGroup
                            name="type" row
                            value={formData.type} onChange={handleChange}
                        >
                            <FormControlLabel value="video" control={<Radio />} label="Video" required />
                            <FormControlLabel value="text" control={<Radio />} label="Text" required />
                        </RadioGroup>
                    </FormControl>
                    <TextField
                        fullWidth label="Name" name="name" variant="outlined" size='small' sx={{ my: 1 }}
                        value={formData.name} onChange={handleChange} required
                    />
                    <TextField
                        fullWidth label="Position" name="position" variant="outlined" size='small' sx={{ my: 1 }}
                        value={formData.position} onChange={handleChange} required
                    />

                    <>
                        <Button variant="outlined" component="label" fullWidth>
                            <input type="file" name="profilePicture" hidden onChange={handleFileChange} />
                            Upload File
                        </Button>
                        {
                            formData.profilePicture && <Typography>Selected File: {formData.profilePicture.name}</Typography>
                        }
                    </>

                    <TextField
                        fullWidth label="Content" multiline rows={4} name="content" variant="outlined" size='small' sx={{ my: 1 }}
                        value={formData.content} onChange={handleChange} required
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

export default NewPub