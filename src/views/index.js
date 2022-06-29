import React from 'react'

import DemoNavbar from '../components/Navbars/DemoNavbar'
import CardsFooter from '../components/Footers/CardsFooter'

class Index extends React.Component {
    componentDidMount() {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        this.refs.main.scrollTop = 0;
    }
    render() {
        return (
            <>
                <DemoNavbar />
                <main ref="main">
                </main>
                <CardsFooter />
            </>
        );
    }
}

export default Index;