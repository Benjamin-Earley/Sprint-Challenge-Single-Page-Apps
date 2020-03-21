import React from "react"
import { Button } from "semantic-ui-react"
import { NavLink, Route } from "react-router-dom"

import WelcomePage from "./WelcomePage"
import CharacterList from "./CharacterList"


export default function Tabs() {
    return (
        <div className="navbar grid-view">
            <Button.Group widths="4" className="navbar">
                <Button as={NavLink} exact to="/" activeClassName="activeNavButton">
                    Home
                </Button>
                <Button as={NavLink} to="/characters" activeClassName="activeNavButton">
                    Characters
                </Button>
            </Button.Group>

            <Route exact path="/" component={WelcomePage} />
            <Route path="/characters" component={CharacterList} />
        </div>
    )
}