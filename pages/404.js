import Head from "next/head";
import { useRouter } from "next/router";

export default function Error(){

    const router = useRouter()

    return(<>
            <Head>
                <title>Error!</title>
            </Head>
            <div className="container">
                <h1>The page " {router.asPath} " was not found!</h1>
            </div>
        </>)
}