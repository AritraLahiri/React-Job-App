/* eslint-disable react/prop-types */
import ClipLoader from "react-spinners/ClipLoader";

const Loader = ({ isLoading }) => {
    const override = {
        display: "block",
        margin: "100px auto"
    }
    return (
        <ClipLoader
            color='#4338ca'
            loading={isLoading}
            cssOverride={override}
            size={150}
        />
    )
}

export default Loader