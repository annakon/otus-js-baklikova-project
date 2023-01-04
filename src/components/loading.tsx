import React, { FC } from 'react';
import {isLoading, getError, getData} from "../store/profile/selectors";
import { useSelector} from "react-redux";
export const Loading: FC = () => {

    const Loading = useSelector(isLoading);
    const iserror = useSelector(getError);
    const isdata = useSelector(getData);

    if (Loading) {
        return <>Loading....</>;
    }
    if (iserror) {
        return <h1>{iserror.message}</h1>;
    }
    if (isdata) {
        return <pre>{JSON.stringify(isdata, null, 2)}</pre>;
    }
    return <></>
}