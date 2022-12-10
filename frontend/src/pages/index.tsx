import {NextPage} from "next";
import Layout from "../layouts/Layout";

// ----------------------------------------------------------------------

const HomePage: NextPage = ({}) => {

    return (
        <>
            <h1>Main Page</h1>
        </>
    )
}

// ----------------------------------------------------------------------

// @ts-ignore
HomePage.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};

export default HomePage;

