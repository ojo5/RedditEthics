import React, { useState } from 'react';
import {
  Box,
  Button,
  CssBaseline,
  Divider,
  FormControl,
  FormLabel,
  Link,
  Stack,
  TextField,
  Typography,
} from '@mui/material';

export default function Login(props) {
  // State for form fields and errors
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  // Validate fields and set error messages accordingly
  const validate = () => {
    const newErrors = { email: '', password: '' };
    let valid = true;

    if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address.';
      valid = false;
    }
    if (form.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  // Handle form field changes
  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  // Handle form submit
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validate()) return;

    // Send data to backend or API here
    console.log('Login form data:', form);
  };

  return (
    <>
      <CssBaseline />
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          minHeight: '100vh',
          p: 4,
          background:
            props.disableCustomTheme
              ? 'none'
              : 'radial-gradient(at 50% 50%, hsla(210, 100%, 97%, 1), hsl(0, 0%, 100%))',
        }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            width: '100%',
            maxWidth: 450,
            bgcolor: 'background.paper',
            p: 4,
            borderRadius: 2,
            boxShadow: 3,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <Typography variant="h4" component="h1" gutterBottom>
            Login
          </Typography>

          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <TextField
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={(e) => handleChange('email', e.target.value)}
              error={Boolean(errors.email)}
              helperText={errors.email}
              required
              fullWidth
              placeholder="your@email.com"
              autoComplete="email"
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>
            <TextField
              id="password"
              name="password"
              type="password"
              value={form.password}
              onChange={(e) => handleChange('password', e.target.value)}
              error={Boolean(errors.password)}
              helperText={errors.password}
              required
              fullWidth
              placeholder="••••••"
              autoComplete="current-password"
            />
            <Link
              href="/forgot-password"
              variant="body2"
              sx={{ mt: 1, alignSelf: 'flex-end', cursor: 'pointer' }}
            >
              Forgot password?
            </Link>
          </FormControl>

          <Button type="submit" variant="contained" fullWidth>
            Login
          </Button>

          <Divider sx={{ my: 2 }}>
            <Typography color="text.secondary">or</Typography>
          </Divider>

          <Button
            variant="outlined"
            fullWidth
            onClick={() => alert('Login with Google')}
            sx={{ mb: 1 }}
          >
            Login with Google
          </Button>

          <Button
            variant="outlined"
            fullWidth
            onClick={() => alert('Login with Facebook')}
          >
            Login with Facebook
          </Button>

          <Typography sx={{ textAlign: 'center', mt: 2 }}>
            Don&apos;t have an account?{' '}
            <Link href="/signup" variant="body2">
              Sign up
            </Link>
          </Typography>
        </Box>
      </Stack>
    </>
  );
}
