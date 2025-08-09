import React from 'react';
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Stack,
  TextField,
  Typography,
  Link,
} from '@mui/material';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: 'auto',
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  [theme.breakpoints.up('sm')]: {
    width: '450px',
  },
  ...theme.applyStyles('dark', {
    boxShadow:
      'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  }),
}));

type Props = {
  form: {
    name: string;
    email: string;
    password: string;
    allowExtraEmails: boolean;
  };
  errors: {
    name: string;
    email: string;
    password: string;
  };
  onChange: (field: string, value: string | boolean) => void;
  onSubmit: (event: React.FormEvent) => void;
};

export default function SignUpCard({ form, errors, onChange, onSubmit }: Props) {
  return (
    <Card variant="outlined">
      <SitemarkIcon />
      <Typography
        component="h1"
        variant="h4"
        sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
      >
        Sign up
      </Typography>

      <Box
        component="form"
        onSubmit={onSubmit}
        sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
      >
        <FormControl>
          <FormLabel htmlFor="name">Full name</FormLabel>
          <TextField
            autoComplete="name"
            name="name"
            required
            fullWidth
            id="name"
            placeholder="Jon Snow"
            error={Boolean(errors.name)}
            helperText={errors.name}
            color={errors.name ? 'error' : 'primary'}
            value={form.name}
            onChange={(e) => onChange('name', e.target.value)}
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="email">Email</FormLabel>
          <TextField
            required
            fullWidth
            id="email"
            placeholder="your@email.com"
            name="email"
            autoComplete="email"
            variant="outlined"
            error={Boolean(errors.email)}
            helperText={errors.email}
            color={errors.email ? 'error' : 'primary'}
            value={form.email}
            onChange={(e) => onChange('email', e.target.value)}
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="password">Password</FormLabel>
          <TextField
            required
            fullWidth
            name="password"
            placeholder="••••••"
            type="password"
            id="password"
            autoComplete="new-password"
            variant="outlined"
            error={Boolean(errors.password)}
            helperText={errors.password}
            color={errors.password ? 'error' : 'primary'}
            value={form.password}
            onChange={(e) => onChange('password', e.target.value)}
          />
        </FormControl>

        <FormControlLabel
          control={
            <Checkbox
              checked={form.allowExtraEmails}
              onChange={(e) => onChange('allowExtraEmails', e.target.checked)}
              color="primary"
            />
          }
          label="I want to receive updates via email."
        />

        <Button type="submit" fullWidth variant="contained">
          Sign up
        </Button>
      </Box>

      <Divider>
        <Typography sx={{ color: 'text.secondary' }}>or</Typography>
      </Divider>

      <Stack spacing={2}>
        <Button
          fullWidth
          variant="outlined"
          onClick={() => alert('Sign up with Google')}
          startIcon={<GoogleIcon />}
        >
          Sign up with Google
        </Button>
        <Button
          fullWidth
          variant="outlined"
          onClick={() => alert('Sign up with Facebook')}
          startIcon={<FacebookIcon />}
        >
          Sign up with Facebook
        </Button>
        <Typography sx={{ textAlign: 'center' }}>
          Already have an account?{' '}
          <Link
            href="/material-ui/getting-started/templates/sign-in/"
            variant="body2"
            sx={{ alignSelf: 'center' }}
          >
            Sign in
          </Link>
        </Typography>
      </Stack>
    </Card>
  );
}
