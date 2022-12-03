import {Button} from "@mui/material";
import {useState} from "react";
import {NextPage} from "next";


interface IndexProps {
    // state: number,
}

const IndexPage: NextPage<IndexProps> = ({}) => {
    const [value, setValue] = useState(0);


    return (
        <>
            <Button
                variant="contained"
                onClick={() => setValue(prevState => ++prevState)}
            >
                {value}
            </Button>
        </>
    )
}

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

export default IndexPage;
