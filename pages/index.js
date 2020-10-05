import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from "@material-ui/core/styles"
import { FormControl, InputLabel, Select, Link, MenuItem, Grid } from '@material-ui/core'
import { gql } from "@apollo/client"
import { initializeApollo } from "../lib/apolloClient"

const OPERATORLIST = gql`
query Operators {
  operators {
    id
    name
  }
}
`

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  link: {
    color: "#000"
  },
  title: {
    "@media (max-width: 425px)": {
      fontSize: "20px"
    }
  }
}))

export default function IndexPage({ operatorList }) {
  const classes = useStyles()

  return (
    <Container >
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={3}
      >
        <Grid item xs>
          <Typography variant="h4" component="h1" className={classes.title}>
            Выберите оператора
        </Typography>
        </Grid>
        <Grid item xs>
          <FormControl className={classes.formControl}>
            <InputLabel id="operator">Опеартор</InputLabel>
            <Select
              labelId="operator"
              id="operator-select"
            >
              {operatorList &&
                operatorList.map(o => (
                  <Link href={`/operator/${o.name}`} key={o.id} underline="none" className={classes.link}>
                    <MenuItem value={10} >{o.name}</MenuItem>
                  </Link>
                ))
              }


            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Container>
  )
}

IndexPage.getInitialProps = async (ctx) => {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query({
    query: OPERATORLIST,
  })

  return {
    initialApolloState: apolloClient.cache.extract(),
    operatorList: data ? data.operators : [],
  }
}