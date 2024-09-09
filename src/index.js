import { StrictMode } from 'react'
import { BrowserRouter} from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import App from './App';
import { ClerkProvider } from '@clerk/clerk-react'
import { shadesOfPurple} from '@clerk/themes'


const PUBLISHABLE_KEY  =  'pk_test_ZmFuY3ktc2t1bmstMTEuY2xlcmsuYWNjb3VudHMuZGV2JA'




if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
<BrowserRouter>
    <ClerkProvider
     appearance={{
        baseTheme: shadesOfPurple,
      }} publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <App />
    </ClerkProvider>
    </BrowserRouter>
  </StrictMode>
)