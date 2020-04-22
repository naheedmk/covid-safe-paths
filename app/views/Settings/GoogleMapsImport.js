import styled from '@emotion/native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { SvgXml } from 'react-native-svg';

import googleMapsIcon from '../../assets/svgs/google-maps-logo';
import { Button } from '../../components/Button';
import { Typography } from '../../components/Typography';

export const GoogleMapsImport = ({ navigation }) => {
  const { t } = useTranslation();

  const importPressed = () => {
    navigation.navigate('ImportScreen');
  };

  return (
    <>
      <TitleRow>
        <SvgXml xml={googleMapsIcon} />
        <Title use='body1'>{t('label.maps_import_title')}</Title>
      </TitleRow>

      <ParagraphContainer>
        <Typography use='body2'>{t('label.maps_import_text')}</Typography>
      </ParagraphContainer>

      <Button
        secondary
        label={t('label.maps_import_button_text')}
        onPress={importPressed}
      />

      <ParagraphContainer>
        <Typography use='body3' secondary monospace>
          {t('label.maps_import_disclaimer')}
        </Typography>
      </ParagraphContainer>
    </>
  );
};

const TitleRow = styled.View`
  flex-direction: row;
  align-items: center;
  padding-top: 18px;
`;

const Title = styled(Typography)`
  font-size: 21px;
  margin-left: 8px;
`;

const ParagraphContainer = styled.View`
  padding: 20px 0;
`;
