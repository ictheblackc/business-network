import {NextPage} from "next";

// ----------------------------------------------------------------------

interface IndexProps {
}

// ----------------------------------------------------------------------

const IndexPage: NextPage<IndexProps> = ({}) => {
    return (
        <>
            <h1>Main Page</h1>
        </>
    )
}

export default IndexPage;


// export const getServerSideProps = wrapper.getServerSideProps(
//     (store) =>
//         async ({ params }) => {
//
//             await store.dispatch(increaseCounter(1));
//
//
//             return {
//                 props: {
//                     state: 70,
//                 },
//             };
//         }
// );