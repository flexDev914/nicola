import { useState, useEffect } from "react"
import { deletePub, getPublist } from "../../api/fetchAPI"
import { Link } from "react-router-dom"
import endpoint from "../../config/config"
import { deleteCus, getCustoms } from "../../api/cusAPI"
import { deleteEve, getEvents } from "../../api/eveAPI"
import DataTable from "./table/Tables"
import { Box, Button, Typography } from "@mui/material"
import { deleteEmail, getEmails } from "../../api/emailAPI"

const Publist = ({ setRoute }) => {

  const [publist, setPublist] = useState([])
  const publistColumns = [
    { field: 'id', headerName: 'ID', flex: 1 },
    { field: 'title', headerName: 'Title', flex: 3 },
    { field: 'date', headerName: 'Date', flex: 2 },
    {
      field: 'image',
      headerName: 'Image',
      flex: 2,
      renderCell: (params) => (
        <img
          src={`${endpoint}/uploads/${params.value}`}
          alt="avatar"
          style={{ width: 100, height: 50 }}
        />
      ),
    },
    {
      field: 'action',
      headerName: 'Action',
      flex: 1,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="error"
          onClick={() => handleDelete(params.row._id)}
        >
          Delete
        </Button>
      ),
    },
  ]

  const [cuslist, setCuslist] = useState([])
  const cuslistColumns = [
    { field: 'id', headerName: 'ID', flex: 1 },
    { field: 'type', headerName: 'Type', flex: 1 },
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'position', headerName: 'Position', flex: 2 },
    { field: 'content', headerName: 'Content', flex: 2 },
    {
      field: 'action',
      headerName: 'Action',
      flex: 1,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="error"
          onClick={() => handleCusDelete(params.row._id)}
        >
          Delete
        </Button>
      ),
    },
  ]

  const [evelist, setEvelist] = useState([])
  const evelistColumns = [
    { field: 'id', headerName: 'ID', flex: 1 },
    { field: 'title', headerName: 'Title', flex: 2 },
    { field: 'description', headerName: 'Description', flex: 2 },
    { field: 'selDate', headerName: 'Date', flex: 1 },
    { field: 'location', headerName: 'Location', flex: 2 },
    {
      field: 'action',
      headerName: 'Action',
      flex: 1,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="error"
          onClick={() => handleEveDelete(params.row._id)}
        >
          Delete
        </Button>
      ),
    },
  ]
  const [emaillist, setEmaillist] = useState([])
  const emaillistColumns = [
    { field: 'id', headerName: 'ID', flex: 2 },
    { field: 'email', headerName: 'Email', flex: 6 },
    {
      field: 'action',
      headerName: 'Action',
      flex: 1,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="error"
          onClick={() => handleEmailDelete(params.row._id)}
        >
          Delete
        </Button>
      ),
    },
  ]


  const handleDelete = (index) => {
    deletePub(index).then((data) => {
      const temp = addId(data)
      setPublist(temp)
    })
  }

  const handleNewCreate = (id) => {
    setRoute(id)
  }


  const handleCusDelete = (index) => {
    deleteCus(index).then((data) => {
      const temp = addId(data)
      setCuslist(temp)
    })
  }

  const handleEveDelete = (index) => {
    deleteEve(index).then((data) => {
      const temp = addId(data)
      setEvelist(temp)
    })
  }
  const handleEmailDelete = (index) => {
    deleteEmail(index).then((data) => {
      const temp = addId(data)
      setEmaillist(temp)
    })
  }

  const addId = (data) => {
    let temp = []
    data.map((item, index) => {
      temp[index] = item
      temp[index].id = index + 1
    })
    return temp;
  }

  useEffect(() => {
    getPublist().then((data) => {
      const temp = addId(data)
      setPublist(temp)
    })
    getCustoms().then((data) => {
      const temp = addId(data)
      setCuslist(temp)
    })
    getEvents().then((data) => {
      const temp = addId(data)
      setEvelist(temp)
    })
    getEmails().then((data) => {
      const temp = addId(data)
      setEmaillist(temp)
    })
  }, [])

  return (
    <div >
      <Box sx={{ pt: 3, pb: 5 }}>
        <Typography variant="h4" align="center">Publication Data</Typography>
        <Button color="primary" sx={{ my: 1 }} variant="contained" onClick={() => handleNewCreate(1)}>New publication</Button>
        <DataTable columns={publistColumns} data={publist} />
      </Box>

      <Box sx={{ pt: 3, pb: 5 }}>
        <Typography variant="h4" align="center">Customer reviews data</Typography>
        <Button color="primary" sx={{ my: 1 }} variant="contained" onClick={() => handleNewCreate(2)}>New custom</Button>
        <DataTable columns={cuslistColumns} data={cuslist} />
      </Box>

      <Box sx={{ pt: 3, pb: 5 }}>
        <Typography variant="h4" align="center">Events data</Typography>
        <Button color="primary" sx={{ my: 1 }} variant="contained" onClick={() => handleNewCreate(3)}>New Event</Button>
        <DataTable columns={evelistColumns} data={evelist} />
      </Box>
      <Box sx={{ pt: 3, pb: 5 }}>
        <Typography variant="h4" align="center">Emails data</Typography>
        <DataTable columns={emaillistColumns} data={emaillist} />
      </Box>
    </div>
  )
}

export default Publist