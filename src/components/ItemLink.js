import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom/';
import titleService from '../services/titles';
import nameService from '../services/names';
import mockUp from '../mockup.js';

const ItemLink = ({ type, baseUrl, id, year }) => {
    const [item, setItem] = useState(null)

    useEffect(() => {
        mockUp.getMockup(id) ? setItem(mockUp.getMockup(id)) : type === "tt" ? titleService.getTitle(id).then(res => setItem(res)) : nameService.getName(id).then(res => setItem(res))
    }, [id])

    return item ? type === "tt" ? (
        <Link className="pageAbstract"
            to={{
                pathname: `${baseUrl}${item.tconst}`,
                state: {
                    endyear: item.endyear,
                    genres: item.genres,
                    isadult: item.isadult,
                    originaltitle: item.originaltitle,
                    primarytitle: item.primarytitle,
                    runtimeminutes: item.runtimeminutes,
                    startyear: item.startyear,
                    tconst: item.tconst,
                    titletype: item.titletype,
                },
            }}
        >
            <span className='link'>
                {item.primarytitle}
            </span>
            {year ? <span className="pageAbstract">{' '}({item.startyear})</span> : ""}

        </Link>
    ) : (<Link className="pageAbstract"
        to={{
            pathname: `${baseUrl}${item.nconst}`,
            state: {
                birthyear: item.birthyear,
                deathyear: item.deathyear,
                knownfortitles: item.knownfortitles,
                nconst: item.nconst,
                primaryname: item.primaryname,
                primaryprofession: item.primaryprofession,
                itemId: item.const,
            },
        }}
    >
        <span className='link'>
            {item.primaryname}
        </span>
        {year ? <span className="pageAbstract nounderline">{' '}({item.birthyear})</span> : ""}
    </Link>) : <span>Link broken</span>;
};

export default ItemLink;