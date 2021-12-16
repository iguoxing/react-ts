import React from 'react';

interface WelcomeProps {
    name: string;
}

class Welcome extends React.Component<WelcomeProps> {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}
export default Welcome;