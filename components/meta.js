import Link from 'next/link'
import Head from 'next/head'
import Header from './header'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

export default ({ title = 'This is the default title' }) => (
    <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <style dangerouslySetInnerHTML={{ __html: bootstrap }} />
     </Head>
)