import Navigation from '../components/Navigation';

const DefaultLayout = ({ children }) => (
    <>
        <Navigation />
        <main>{ children }</main>
    </>
);

export default DefaultLayout;