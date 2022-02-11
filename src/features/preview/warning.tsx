import { FC } from 'react';
import { sectionStyles, articleStyles, fontStyles, red } from './previewStyles';

const WarningFragment: FC = () => {
  return (
    <section style={{ ...sectionStyles }}>
      <article style={{ ...articleStyles }}>
        <small style={{ ...fontStyles }}>
          <span
            style={{
              border: `solid 2px ${red}`,
              borderRadius: '50%',
              display: 'inline-block',
              textAlign: 'center',
              lineHeight: '20px',
              width: '20px',
              height: '20px',
              marginRight: '8px',
            }}
          >
            19
          </span>
          주류의 통신판매에 관한 명령 위임 고시 관계법령에 따라 미성년자는 구매할 수 없으며, 19세 이상 성인인증을 하셔야
          구매 가능한 상품입니다.
        </small>
        <small style={{ ...fontStyles }}>
          경고: 지나친 음주는 뇌졸중, 기억력 손상이나 치매를 유발합니다. 임신 중 음주는 기형아 출생 위험을 높입니다.
          <br />
          부정 불량 식품은 국번없이 1399
          <br />
          <span style={{ color: 'rgb(255, 255, 255)', backgroundColor: 'rgb(0, 0, 0)' }}>
            19세 미만 청소년에게 판매금지
          </span>
        </small>
      </article>
    </section>
  );
};

export default WarningFragment;
