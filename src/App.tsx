import { useState, useEffect } from 'react'
import {
  Container,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Typography,
  Box,
  Paper
} from '@mui/material'

const currencies = [
  { code: 'USD', name: 'US Dollar' },
  { code: 'EUR', name: 'Euro' },
  { code: 'GBP', name: 'British Pound' },
  { code: 'JPY', name: 'Japanese Yen' },
  { code: 'AUD', name: 'Australian Dollar' },
  { code: 'CAD', name: 'Canadian Dollar' },
  { code: 'CHF', name: 'Swiss Franc' },
  { code: 'CNY', name: 'Chinese Yuan' },
  { code: 'RUB', name: 'Russian Ruble' },
  { code: 'BYN', name: 'Belarusian Ruble' },
  { code: 'INR', name: 'Indian Rupee' },
  { code: 'BRL', name: 'Brazilian Real' }
]

function App() {
  const [hours, setHours] = useState<string>('')
  const [minutes, setMinutes] = useState<string>('')
  const [rate, setRate] = useState<string>('')
  const [currency, setCurrency] = useState<string>('USD')
  const [total, setTotal] = useState<number>(0)

  useEffect(() => {
    const calculateTotal = () => {
      const hoursNum = parseFloat(hours) || 0
      const minutesNum = parseFloat(minutes) || 0
      const rateNum = parseFloat(rate) || 0

      const totalHours = hoursNum + (minutesNum / 60)
      const result = totalHours * rateNum
      setTotal(result)
    }

    calculateTotal()
  }, [hours, minutes, rate])

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <Paper elevation={3} sx={{ p: 3 }}>
          <Typography variant="h4" component="h1" gutterBottom align="center">
            Калькулятор времени
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
            <TextField
              label="Часы"
              type="number"
              value={hours}
              onChange={(e) => setHours(e.target.value)}
              fullWidth
            />
            <TextField
              label="Минуты"
              type="number"
              value={minutes}
              onChange={(e) => setMinutes(e.target.value)}
              fullWidth
            />
          </Box>

          <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
            <TextField
              label="Часовая ставка"
              type="number"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              fullWidth
            />
            <FormControl fullWidth>
              <InputLabel>Валюта</InputLabel>
              <Select
                value={currency}
                label="Валюта"
                onChange={(e) => setCurrency(e.target.value)}
              >
                {currencies.map((curr) => (
                  <MenuItem key={curr.code} value={curr.code}>
                    {curr.code} - {curr.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          <Paper elevation={2} sx={{ p: 2, mt: 2, bgcolor: 'primary.light' }}>
            <Typography variant="h6" align="center">
              Итого: {total.toFixed(2)} {currency}
            </Typography>
          </Paper>
        </Paper>
      </Box>
    </Container>
  )
}

export default App 