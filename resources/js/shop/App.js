import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import common_en from '@lang/en/common.json';
import news_en from '@lang/en/news.json';
import navigation_en from '@lang/en/navigation.json';
import shop_en from '@lang/en/shop.json';

import common_pl from '@lang/pl/common.json';
import news_pl from '@lang/pl/news.json';
import navigation_pl from '@lang/pl/navigation.json';
import shop_pl from '@lang/pl/shop.json';

import { BaseLayout } from "@/common/components/Layout";
import { ShopLayout } from "@/shop/components/Layout";

import News from './pages/News';
import Shop from './pages/Shop';
import Post from './pages/Post';
import Service from './pages/Service';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                common: common_en,
                news: news_en,
                navigation: navigation_en,
                shop: shop_en
            },
            pl: {
                common: common_pl,
                news: news_pl,
                navigation: navigation_pl,
                shop: shop_pl
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
                <BaseLayout title="vMCShop Standard" />
                <ShopLayout>
                    <Route exact path="/" component={News} />
                    <Route path="/shop" component={Shop} />
                    <Route path="/news/post" component={Post} />
                    <Route path="/service" component={Service} />
                </ShopLayout>
            </Router>
        );
    }

}

export default App;
