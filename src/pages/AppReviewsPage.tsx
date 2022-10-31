import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Tables } from '@app/components/tables/Tables/Tables';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
// import httpApi from '@app/api/http.api';
import axios from 'axios';
import myHttp from '@app/api/myHttp';

const AppReviewsPage: React.FC = () => {
  const { t } = useTranslation();
  const getHealth = async () => {
    myHttp.get('job');
  };
  useEffect(() => {
    getHealth();
  }, []);

  return (
    <>
      <PageTitle>{t('common.dataTables')}</PageTitle>
      <Tables />
    </>
  );
};

export default AppReviewsPage;
