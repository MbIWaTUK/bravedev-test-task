import { makeStyles } from "@material-ui/core/styles"
import { TextField, FormControl, Button, Snackbar, Grid, Box, Link } from "@material-ui/core"
import MaskedInput from 'react-text-mask'
import { useState } from "react"
import PropTypes from 'prop-types'
import NumberFormat from 'react-number-format'
import MuiAlert from '@material-ui/lab/Alert'
import { useRouter } from "next/router"
import { useMutation, gql } from "@apollo/client"

const PAY = gql`
  mutation Pay($input: Values) {
    pay(input: $input)
  }
`

const useStyles = makeStyles({

})

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function TextMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]}
      // placeholderChar={'\u2000'}
      showMask
    />
  );
}

TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
};

function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            value: values.value,
          },
        });
      }}
      isNumericString
    // suffix="₽"
    />
  );
}

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default function OperatorPage({ rout }) {
  const classes = useStyles()
  const router = useRouter()
  const [operator, setOperator] = useState(rout)
  const [phone, setPhone] = useState("")
  const [total, setTotal] = useState("")
  const [msg, setMsg] = useState(null)
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  }

  const [error, setError] = useState({})
  const [pay] = useMutation(PAY)

  const handleChangePhone = (e) => {
    setPhone(e.target.value)
  }

  const handleChangeTotal = (e) => {
    setTotal(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errors = {}

    if (phone.length === 0) {
      errors.phone = 'Введите номер телефона'
    }

    if (
      phone && !('(', /[1 - 9] /, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/.test(phone) && !phone.includes("_"))
    ) {
      errors.phone = 'Телефон введен не верно'
    }

    if (total.length === 0) {
      errors.total = 'Введите сумму от 1 до 1000'
    }

    if (total &&
      (parseFloat(total) < 1 || parseFloat(total) > 1000)
    ) {
      errors.total = 'Сумма должна быть от 1 до 1000'
    }

    await setError(errors)
    const err = await Object.keys(errors).length

    if (err === 0) {

      const { data } = await pay({
        variables: {
          input: {
            phone,
            operator,
            total
          },
        },
      })


      if (data && data.pay === false) {
        await handleClick()
        setMsg("Ошибка в запросе")
      } else if (data && data.pay === true) {
        await handleClick()
        setMsg("Оплата полшла успешно")
        setTimeout(() => {
          router.push("/")
        }, 1500)
      }

    }

  }


  return (
    <Box mt={3}>

      {msg && <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={`${msg === "Ошибка в запросе" ? "error" : "success"}`}>
          {msg}
        </Alert>
      </Snackbar>}

      <form onSubmit={handleSubmit}>

        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={3}

        >
          <Grid item xs>
            <TextField id="standard-basic" label="Оператор" disabled={true} value={operator} />
          </Grid>

          <Grid item xs>
            <FormControl error>

              <TextField
                error={error && error.phone ? true : false}
                label="Номер телефона"
                value={phone}
                onChange={handleChangePhone}
                name="phone"
                id="formatted-text-mask-input"
                InputProps={{
                  inputComponent: TextMaskCustom
                }}
                helperText={error && error.phone ? error.phone : false}

              />

            </FormControl>
          </Grid>

          <Grid item xs>
            <FormControl error>
              <TextField
                error={error && error.total ? true : false}
                label="Сумма"
                value={total}
                onChange={handleChangeTotal}
                name="total"
                id="formatted-numberformat-input"
                InputProps={{
                  inputComponent: NumberFormatCustom,
                }}
                helperText={error && error.total ? error.total : ""}

              />

            </FormControl>
          </Grid>
          <Grid item xs>
            <Button variant="contained" type="submit" color="primary" >Пополнить счет</Button>
          </Grid>

          <Grid item xs>
            <Link href="/">Назад</Link>
          </Grid>
        </Grid>

      </form>

    </Box>
  )
}

OperatorPage.getInitialProps = (ctx) => {
  const router = ctx.query.slug

  return {
    rout: router ? router : "оператор",
  }
}
