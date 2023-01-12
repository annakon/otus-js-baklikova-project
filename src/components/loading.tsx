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
        const items = isdata['items'];
        let text="";
        //debugger
        if(items) {
            for (let i = 0; i < items.length; i++) {
                text = text + items[i].name;
            }
        }
       // return <pre>{text}</pre>
        //return <pre>{JSON.stringify(isdata, null, 2)}</pre>;
        if(items) {
            return <div>
                {items.map((item: any) => <p key={item.id}>{item.name}</p>)}
            </div>
        }
        return <></>
    }
    return <></>
}
