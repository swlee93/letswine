import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/features';
import { fontStyles, articleStyles, ulStyles, liStylesDisc } from './previewStyles';

const IndicationFragment = () => {
  const { title, subtitle, description, contents, imageUrl, warning } = useSelector((state: RootState) => ({
    title: state.indicationSlice.title,
    subtitle: state.indicationSlice.subtitle,
    description: state.indicationSlice.description,
    contents: state.indicationSlice.contents,
    imageUrl: state.indicationSlice.image_url,
    warning: state.indicationSlice.warning,
  }));

  return (
    <footer
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: '100%',
          padding: '1.25rem 1rem',
          maxWidth: '640px',
          boxSizing: 'border-box',
        }}
      >
        {imageUrl ? (
          <img
            style={{
              objectFit: 'contain',
              width: '100%',
              height: '100%',
            }}
            src={imageUrl}
            alt=''
          />
        ) : (
          <>
            <h4
              style={{
                ...fontStyles,
                fontWeight: 'bold',
                color: '#282828',
              }}
            >
              {title}
            </h4>
            <h4
              style={{
                color: '#282828',
                fontSize: '0.875rem',
                lineHeight: '1.25rem',
              }}
            >
              {subtitle}
            </h4>
            <div style={{ display: 'block', width: '1px', height: '24px' }} />
            <h6
              style={{
                ...fontStyles,
                fontWeight: 'bold',
                color: '#282828',
              }}
            >
              {description}
            </h6>
            <span style={{ width: '1px', height: '12px', display: 'block' }} />
            <dl>
              {contents.map((content) => (
                <Fragment key={content.key}>
                  <dt
                    style={{
                      ...fontStyles,
                      display: 'block',
                      float: 'left',
                      fontWeight: 'bold',
                    }}
                  >
                    {content.label}:&nbsp;
                  </dt>
                  <dd
                    style={{
                      ...fontStyles,
                    }}
                  >
                    {content.value}
                  </dd>
                </Fragment>
              ))}
            </dl>
          </>
        )}
        {warning && (
          <article style={{ ...articleStyles, padding: '8px 0' }}>
            <ul style={{ ...ulStyles }}>
              {warning?.map((value) => {
                return <li style={{ ...liStylesDisc, whiteSpace: 'pre-line' }}>{value}</li>;
              }) || []}
            </ul>
          </article>
        )}
      </div>
    </footer>
  );
};

export default IndicationFragment;
