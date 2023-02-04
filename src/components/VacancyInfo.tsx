import React, {FC, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {store} from "../store/store";
import {error, loading, success} from "../store/profile/actions";
import {useDispatch, useSelector} from "react-redux";
import {getData, getError, isLoading} from "../store/profile/selectors";

export const VacancyInfo: FC = () => {

    const { id } = useParams();
    const dispatch = useDispatch();

    const Loading = useSelector(isLoading);
    const iserror = useSelector(getError);
    const isdata = useSelector(getData);

    function loadData() {
        // put your code here
        return async (dispatch: typeof  store.dispatch, getstate: typeof store.getState)=>
        {
            dispatch(loading());
            fetch(`https://api.hh.ru/vacancies/${id}`)
                .then((response) => response.json())
                .then((data: any) => dispatch(success(data)))
                .catch((err: Error) => dispatch(error(err)));
        }
    }

    useEffect(() => {
        dispatch(loadData() as never);
    }, []);

    if (Loading) {
        return <p>Loading....</p>;
    }
    if (iserror) {
        return <h1>{iserror.message}</h1>;
    }
    if (isdata) {
        return <div className="card-vacancy">
            <h1><a className="card-link" href={isdata.alternate_url}>{isdata.name}</a></h1>
            <p>{isdata.description?.replace(/<\/?[^>]+(>|$)/g, "")}</p>
        </div>

         //return <pre>{JSON.stringify(isdata, null, 2)}</pre>;
    }
    return <></>
}
