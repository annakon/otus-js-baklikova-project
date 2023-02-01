import React, {FC, useEffect} from 'react';
import {Menu} from "./Menu";
import {useDispatch, useSelector} from "react-redux";
import {getCountA, getCountR, getCountV, getData, getError, isLoading} from "../store/profile/selectors";
import {store} from "../store/store";
import {cangecountA, cangecountR, cangecountV, error, loading} from "../store/profile/actions";

export const Statistic: FC = () => {
    const dispatch = useDispatch();

    const Loading = useSelector(isLoading);
    const iserror = useSelector(getError);
    const isdata = useSelector(getData);
    const countR=useSelector(getCountR);
    const countA=useSelector(getCountA);
    const countV=useSelector(getCountV);

    function loadData() {
        // put your code here

        function oneLoad(par:string){
            fetch(`https://api.hh.ru/vacancies?text="${par} AND junior"&area=1`)
                .then((response) => response.json())
                .then((data: any) => {
                    switch (par) {
                        case "React":
                            dispatch(cangecountR(data.items?.length));
                            break;
                        case "Angular":
                            dispatch(cangecountA(data.items?.length));
                            break;
                        case "Vue":
                            dispatch(cangecountV(data.items?.length));
                            break;
                    }
                })
                .catch((err: Error) => dispatch(error(err)));
        }

        return async (dispatch: typeof  store.dispatch, getstate: typeof store.getState)=> {
            dispatch(loading());
            oneLoad("React");
            oneLoad("Angular");
            oneLoad("Vue");
        }
    }

    useEffect(() => {
        dispatch(loadData() as never);
    }, []);

    if (Loading) {
        return <><Menu></Menu><p>Loading....</p></>;
    }
    if (iserror) {
        return <h1>{iserror.message}</h1>;
    }
    if (isdata) {
    return <>
        <Menu></Menu>
        <div className="TableSize">
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th scope="col">React</th>
                    <th scope="col">Angular</th>
                    <th scope="col">Vue</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{countR}</td>
                    <td>{countA}</td>
                    <td>{countV}</td>
                </tr>
                </tbody>
            </table>
        </div>
    </>
    }
    return <></>
}
