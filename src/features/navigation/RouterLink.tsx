import React, { ReactElement } from 'react'
import { Link, LinkBaseProps } from '@material-ui/core';
import { Link as rLink, LinkProps } from 'react-router-dom';




export default function RouterLink(props: LinkProps & LinkBaseProps): ReactElement {
    const { to = "/", variant = "h6", color = "inherit" } = props;
    return (
        <Link to={to as Location} variant={variant} color={color} component={rLink} {...props}>
            {props.children}
        </Link>
    )
}
