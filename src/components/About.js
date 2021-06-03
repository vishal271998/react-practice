import React from 'react';

import { useLocation, useParams } from 'react-router-dom';
import Contact from "./Contact";
import Footer from "./Footer";

export default function About() {
    const { search } = useLocation();

    const { parameter } = useParams();

    const match = search.match(/type=(.*)/);
    const type = match?.[1];
    return <>
        <h2>About Us</h2>
        {type === 'contact' && <Contact />}

        {parameter === 'footer' && <Footer />}
        </>;
}