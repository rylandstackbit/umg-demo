import React from 'react';
import _ from 'lodash';

import Action from './Action';

export default function FooterNav(props) {
    const section = _.get(props, 'section');
    const title = _.get(section, 'title');
    const navLinks = _.get(section, 'nav_links');

    return (
        <section className="cell widget widget-nav text-white">
            {title && <h2 className="widget-title text-white">{title}</h2>}
            {navLinks && (
                <ul className="menu">
                    {_.map(navLinks, (action, actionIdx) => (
                        <li key={actionIdx} className="menu-item">
                            <Action action={action} />
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}
