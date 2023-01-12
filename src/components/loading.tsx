import React, { FC } from 'react';
import {isLoading, getError, getData} from "../store/profile/selectors";
import { useSelector} from "react-redux";
export const Loading: FC = () => {

    const Loading = useSelector(isLoading);
    const iserror = useSelector(getError);
    const isdata = useSelector(getData);

    if (Loading) {
        return <p>Loading....</p>;
    }
    if (iserror) {
        return <h1>{iserror.message}</h1>;
    }
    if (isdata) {
        const items = isdata['items'];

        if(items) {
            return <div>
                {items.map((item: any) => <div key={item.id}>
                    <p><a href={item.alternate_url}>{item.name}</a></p>
                    <p>{item.employer.name}</p>
                    <p>{item.snippet.requirement}</p>
                    <p>{item.snippet.responsibility}</p>
                    </div>
                )}
            </div>
           // return <pre>{JSON.stringify(isdata, null, 2)}</pre>;
        }
    }
    return <></>
}
