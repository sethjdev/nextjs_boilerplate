import Link from 'next/link'
import Head from 'next/head'
import Header from './header'
import Meta from './meta'
import foot_style from '../styles/footer.scss';

export default () => (
    <div>
        <style dangerouslySetInnerHTML={{ __html: foot_style }}></style>
        <footer>
            {'Footer'}
        </footer>
    </div>

)
