import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import i18n from 'i18next';
import { useTranslation, initReactI18next } from 'react-i18next';

import common_en from '@/../lang/en/common.json';
import homepage_en from '@/../lang/en/homepage.json';
import navigation_en from '@/../lang/en/navigation.json';
import common_pl from '@/../lang/pl/common.json';
import homepage_pl from '@/../lang/pl/homepage.json';
import navigation_pl from '@/../lang/pl/navigation.json';

import Home from './pages/Home';
import Shop from './pages/Shop';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                common: common_en,
                homepage: homepage_en,
                navigation: navigation_en
            },
            pl: {
                common: common_pl,
                homepage: homepage_pl,
                navigation: navigation_pl
            }
        },
        lng: "pl",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    });

class App extends React.Component {

    render() {
        return (
            <Router>
                <Route exact path="/" component={Home} />
                {/*<Route path="/shop" component={Shop} />*/}
            </Router>
        );
    }

}

export default App;
