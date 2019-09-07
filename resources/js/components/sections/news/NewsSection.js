import React from 'react';
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";

import { NewsCard } from '@/components/common/Card';
import { Pagination } from '@/components/common/Pagination';

const NewsSection = (props) => {
    const { t } = useTranslation();

    return (
        <div>
            <h2><FontAwesomeIcon icon={faNewspaper} /> {t('homepage:sectionHeaders.news')}</h2>

            {props.data.map(news => (
                <NewsCard key={news.id} data={news} />
            ))}

            <Pagination />
        </div>
    );
};

export default NewsSection;
