import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import HomeContentBlock from '../../../components/HomeContentBlock'
import HomeContentTitle from '../../../components/HomeContentTitle'
import { HomeActiveMenu } from '../../../store/system'

const StyledP1 = styled.div`
  font-size: 17px;
  line-height: 2;
  text-align: justify;

  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`

const StyledP = styled.div`
  font-size: 17px;
  line-height: 2;
  text-align: justify;

  &::before {
    content: '•';
    margin-right: 6px;
  }

  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`

// const StyledFeature = styled.div`
//   font-size: 17px;
//   line-height: 2;
//   margin-bottom: 15px;

//   &:last-child {
//     margin-bottom: 0;
//   }

//   & > * {
//     vertical-align: middle;
//   }

//   img {
//     display: inline-block;
//     height: 24px;
//     width: 24px;
//     object-fit: contain;
//     margin-right: 12px;
//   }

//   @media screen and (max-width: 600px) {
//     font-size: 14px;

//     img {
//       height: 16px;
//       margin-right: 6px;
//     }
//   }
// `

const Datas = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 48px;

  & > div {
    flex-grow: 1;
    flex-shrink: 1;
  }

  .v {
    font-size: 24px;
    margin-bottom: 10px;

    span {
      font-size: 52px;
    }
  }

  .t {
    font-size: 18px;
  }
`

export const BankTrading: React.FC = () => {
  const { t } = useTranslation('trans')
  return (
    <HomeContentBlock activeTag={HomeActiveMenu.bankTrading}>
      <div id="bank-trading" className="single-page">
        <HomeContentTitle.T2 className="bank-trading-t2">
          {t('home.bankTrading.title')}
        </HomeContentTitle.T2>

        <StyledP1>{t('home.bankTrading.desc_1')}</StyledP1>
        <StyledP>{t('home.bankTrading.item_1')}</StyledP>
        <StyledP>{t('home.bankTrading.item_2')}</StyledP>
        <StyledP>{t('home.bankTrading.item_3')}</StyledP>
        <StyledP>{t('home.bankTrading.item_4')}</StyledP>
        <StyledP>{t('home.bankTrading.item_5')}</StyledP>

        <Datas>
          <div>
            <div className="v">
              <span>100+</span> Project
            </div>
            <div className="t">Full life cycle investment</div>
          </div>
          <div>
            <div className="v">
              <span>10+</span> Years
            </div>
            <div className="t">Full life cycle investment</div>
          </div>
          <div>
            <div className="v">
              <span>$1</span>B+
            </div>
            <div className="t">Proprietary trading scale</div>
          </div>
        </Datas>
      </div>
    </HomeContentBlock>
  )
}

export default BankTrading
