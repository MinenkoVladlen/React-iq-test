import {useEffect, useState} from 'react';
import FetchData from "../FetchData/getFetchData";
import data from '../../dataMainPage.json';

const fetchData = new FetchData([])

const useLaunches = () => {

    const getElem = data.map(item => item)

    console.log(getElem)

    return getElem
}

export default useLaunches;