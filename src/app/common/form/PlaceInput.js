import React, { Component } from 'react';
import { Form, Label } from 'semantic-ui-react';
import Script from 'react-load-script';
import PlacesAutocomplete from 'react-places-autocomplete';

const styles = {
    autocompleteContainer: {
        zIndex: 1000
    }
}

class PlaceInput extends Component {
  state = {
    scriptLoaded: false
  };

  handleScriptLoaded = () => this.setState({ scriptLoaded: true });

  render() {
    const { input, width, onSelect, placeholder, options, meta: { touched, error } } = this.props;
    return (
      <Form.Field error={touched && !!error} width={width}>
        <Script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyC1Oy3Ic6JyE6RR4eEbEFw2T-ynXjjWzTc&libraries=places"
          onLoad={this.handleScriptLoaded}
        />
        {this.state.scriptLoaded &&
        <PlacesAutocomplete
            inputProps={{...input, placeholder}}
            options={options}
            onSelect={onSelect}
            styles={styles}
        />}
        {touched && error && <Label basic color='red'>{error}</Label>}
      </Form.Field>
    );
  }
}

export default PlaceInput;