import React from 'react';

import ItemLink from './ItemLink.js';

const CreateLinks = ({ text }) => {

    const replacer = (word) => {
        const type = word.match(/title&year|name&year|name|year/) ? word.match(/title&year|name&year|name|year/)[0] : null;
        const id = word.match(/(nm|tt)\d{7,8}/) ? word.match(/(nm|tt)\d{7,8}/)[0] : type;
        return type === "name"
            ? <ItemLink baseUrl="/names/" type="nm" id={id} year={false} key={id} />
            : type === "name&year"
                ? <ItemLink baseUrl="/names/" type="nm" id={id} year={true} key={id} />
                : type === "title" ?
                    <ItemLink baseUrl="/titles/" type="tt" id={id} year={false} key={id} />
                    : <ItemLink baseUrl="/titles/" type="tt" id={id} year={true} key={id} />
    };

    const parts = text.split(/\[\[|\]\]/g)

    const element =
        parts.map(word =>
            word.match(/(name|name&year|title|title&year):(\w*\d*)/g) ? replacer(word) : <span key={word}>{word}</span>)

    return element
};

export default CreateLinks;