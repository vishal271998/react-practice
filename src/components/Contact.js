import React from 'react';

import { Switch, Route, useRouteMatch } from 'react-router-dom';
import ContactForm from "./ContactForm";

export default function Contact() {
    const { path } = useRouteMatch();

    return(
        <>
            <h2>Contact Us</h2>
            <Switch>
                <Route path={`${path}/contact-form`}>
                    <ContactForm />
                </Route>
            </Switch>
        </>
    );
}