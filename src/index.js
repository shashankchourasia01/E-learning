import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { SidebarProvider } from './context/sidebar_context';
import { CoursesProvider } from './context/courses_context';
import { CartProvider } from './context/cart_context';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
  domain="dev-nvknfy35gqr2isvu.us.auth0.com"
  clientId="JDMyWdrqfYSPVrdGsVbaP72FLMASvQRE"
  redirectUri={window.location.origin}>
<SidebarProvider>
    <CoursesProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </CoursesProvider>
  </SidebarProvider>
</Auth0Provider>
  
);

