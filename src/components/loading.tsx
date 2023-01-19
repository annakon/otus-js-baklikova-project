import React, { FC } from 'react';
import {isLoading, getError, getData} from "../store/profile/selectors";
import { useSelector} from "react-redux";
import {Link} from "react-router-dom";
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
                {items.map((item: any) => <div className="card" key={item.id}>
                    <div className="cardBody">
                        <h5 className="card-title"><Link className="card-link" to={`/vacancies/${item.id}`}>{item.name}</Link></h5>
                      <h6 className="card-subtitle mb-2 text-muted">{item.employer.name}</h6>
                      <p className="card-text">{item.snippet.requirement?.replace(/<\/?[^>]+(>|$)/g, "")}</p>
                      <p className="card-text">{item.snippet.responsibility?.replace(/<\/?[^>]+(>|$)/g, "")}</p>
                      </div>
                    </div>
                )}
            </div>
           // return <pre>{JSON.stringify(isdata, null, 2)}</pre>;
        }
    }
    return <></>
}
