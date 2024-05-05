export const paths = {
  home: '/',
  auth: { signIn: '/auth/sign-in', signUp: '/auth/sign-up', resetPassword: '/auth/reset-password' },
  dashboard: {
    overview: '/dashboard',
    account: '/dashboard/sample1',
    customers: '/dashboard/sample',
    integrations: '/dashboard/sample2',
    settings: '/dashboard/sample3',
  },
  errors: { notFound: '/errors/not-found' },
} as const;
