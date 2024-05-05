import React, { useEffect, useState } from "react";
import "../styles/remixicon.css";
import "react-tabs/style/react-tabs.css";
import "swiper/css";
import "swiper/css/bundle";
import "../styles/chat.css";
import "../styles/globals.css";
import "../styles/rtl.css";
import "../styles/dark.css";
import theme from "../styles/theme";

import { ThemeProvider, CssBaseline, CircularProgress } from "@mui/material";
import Layout from "@/components/_App/Layout";
import SignIn from "./authentication/sign-in";

function MyApp({ Component, pageProps }) {
  const tk =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;
  const [token, setToken] = useState(tk);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      setToken(token);
      const timeoutId = setTimeout(() => setHydrated(true), 100);
      return () => clearTimeout(timeoutId);
    }
  }, []);


  if (!hydrated) {
    return <div style={{width: '100vw',height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <CircularProgress />
    </div>;
  }

  if (token == null) {
    return <SignIn />;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
