import {NextPage} from "next";
import Layout from "../layouts/Layout";
import useEffectClient from "../hooks/useEffectClient";
import {axiosBackend} from "../utils/axios";
import {useState} from "react";
import {Button} from "@mui/material";

// ----------------------------------------------------------------------

const HomePage: NextPage = ({}) => {
    const [res, setRes] = useState(false);

    // @ts-ignore
    useEffectClient( async () => {
        console.log(axiosBackend.defaults.headers.Authorization)
        try {
            const response = await axiosBackend.get('api/task');
            console.log(response.data);
        } catch (e) {
            console.log(e)
        }
    }, [res])

    return (
        <>
            <h1>Main Page</h1>
            <Button onClick={() => setRes(prevState => !prevState)}>res</Button>
        </>
    )
}

// ----------------------------------------------------------------------

// @ts-ignore
HomePage.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};

export default HomePage;


// export const getServerSideProps = wrapper.getServerSideProps((store) => async ({}) => {
//         console.log("getServerSideProps")
//         return {props: {}}
//     }
// );


