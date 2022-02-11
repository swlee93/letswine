import { FC } from 'react';
import { articleStyles, fontStyles, fontStylesBold, red, sectionStyles, UlStyles } from './previewStyles';

const SmartOrderFragment: FC = () => {
  return (
    <section style={{ ...sectionStyles }}>
      <article style={{ ...articleStyles }}>
        <div style={{ width: '100%' }}>
          <h2 style={{ ...fontStylesBold }}>픽업상품 (스마트오더) 공지사항</h2>
          <div style={{}}>
            <p style={{ ...fontStyles }}>1. 미성년자 구매 불가</p>
            <ul style={{ ...UlStyles }}>
              <li>19세 이상 성인 이상일 경우, 본인인증 이후 구매 가능합니다.</li>
              <li>사업자 회원, 19세 미만 청소년은 구매할 수 없습니다.</li>
            </ul>
            <p style={{ ...fontStyles }}>2. 픽업상품(스마트오더)에 대한 고지</p>
            <ul style={{ ...UlStyles }}>
              <li>
                2020년 4월 3일부터 스마트오더방식 주류 주문이 허용 되었습니다. 이는 소비자가 매장을 방문하여 수령하는
                것(픽업)을 전제로 합니다.
              </li>
              <li>
                본인인증 확인을 위해 <span style={{ color: red }}>반드시 신분증을 지참</span>해주시기 바랍니다.
                (주민등록증, 운전면허증, 여권만 허용)
              </li>
            </ul>
            <p style={{ ...fontStyles }}>3. 대리수령 시 서비스 이용 제한</p>
            <ul style={{ ...UlStyles }}>
              <li>
                픽업상품은 주문자 본인 수령을 원칙으로 하며, 주문자 확인불가 및 대리 수령 시 서비스 이용이 제한될 수
                있습니다.
              </li>
            </ul>
          </div>
        </div>
      </article>
    </section>
  );
};

export default SmartOrderFragment;
