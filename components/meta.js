import Link from 'next/link'
import Head from 'next/head'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
export default ({ title = 'Test NextJs Website' }) => (
    <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <style jsx global>{bootstrap}</style>
        <link href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' rel='stylesheet' integrity='sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN' crossorigin='anonymous'></link>
     </Head>
)