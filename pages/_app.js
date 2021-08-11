export default function App({ Component, pageProps }) {
    return(<>
            <Component {...pageProps} />
            <style jsx global>{`
                *{
                    margin: 0;
                    padding: 0;

                } 
                body , #__next{
                    height: 100vh;
                }
            `}</style>
        </>)
        
  }