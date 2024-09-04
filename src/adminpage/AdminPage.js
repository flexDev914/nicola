import { Button, Container, Typography } from "@mui/material"
import NewPub from "./components/NewPub"
import Publist from "./components/Publist"
import NewCus from './components/custom/NewCus'
import NewEve from './components/event/NewEve'
import { useEffect, useState } from "react"

const AdminPage = () => {

  const [route, setRoute] = useState(0)
  useEffect(() => {
    console.log('route : ', route)
  }, [route])

  return (
    <Container>
      <div style={{ textAlign: 'center' }}>
        <Button color="success" sx={{ p: 2, my: 2 }}><Typography variant="h2" align="center">Welcome to admin page!</Typography></Button>
      </div>
      {
        route === 0 ? <Publist setRoute={setRoute} /> :
          route === 1 ? <NewPub setRoute={setRoute} /> :
            route === 2 ? <NewCus setRoute={setRoute} /> :
              <NewEve setRoute={setRoute} />
      }
    </Container>
  )
}

export default AdminPage