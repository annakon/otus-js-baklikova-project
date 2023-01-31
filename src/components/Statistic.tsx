import React, { FC } from 'react';
import {Menu} from "./Menu";

export const Statistic: FC = () => {

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
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
                </tbody>
            </table>
        </div>
    </>
}
