import React from 'react';
import { Divider, Grid, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import "../styles_CSS/Header.css";

const arrows = "<--->";

/*
* This header contains two buttons in the form of links that each represent a route 
* their own webpage. Project selection is the default (/) route.
* Because of how this header is rendered in App.js, this compenent is rendered on all
* pages for site navigation.
*/
const Header = () => {
  return (
    <div>
      <Segment>
        <Grid columns={2} relaxed='very'>
          <Grid.Column className="header-column">
            <Link className="project-selection-link" to="/">Project</Link>
            <Link className="plugin-link" to="/PluginApp">Plugin App</Link>
          </Grid.Column>
          <Grid.Column className="header-column">
            <Link className="generator-link" to="/GeneratorApp">Generator App</Link>
          </Grid.Column>
        </Grid>
        <Divider vertical>{arrows}</Divider>
      </Segment>
    </div>
  );
};
export default Header;