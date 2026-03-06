import { HelmetProvider } from 'react-helmet-async'
import ToastProvider from './toast/ToastProvider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { CssBaseline, StyledEngineProvider, ThemeProvider } from '@mui/material'
import { theme } from '~/themes'
import AuthProvider from './AuthProvider'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1
    }
  }
})

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <ToastProvider>
            <StyledEngineProvider injectFirst>
              <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
              </ThemeProvider>
            </StyledEngineProvider>
          </ToastProvider>
        </AuthProvider>
      </QueryClientProvider>
    </HelmetProvider>
  )
}

export default Providers
