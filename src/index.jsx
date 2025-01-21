import React, { useEffect } from 'react';
import { Row, Col, Button } from 'antd';

const origin = 'https://assets.fanthon.com.br';

const FanthonReact = ({ url, token, options, onSubmit }) => {
  if (!token) return <div></div>;

  const { base, ...fields } = options || {};
  const jsonString = JSON.stringify(fields);
  const encodedData = encodeURIComponent(jsonString);
  const primary_color = encodeURIComponent(base?.primary_color);
  
  const onClick = () => {
    const iframe = document.getElementById('fanthon_card');
    iframe.contentWindow.postMessage('click', origin);
  }

  useEffect(() => {
    const onMessaging = (event) => {
      if (!onSubmit) return
      if (event.origin !== origin) return
      onSubmit(event.data)
    }
    window.addEventListener('message', onMessaging)
    return () => {
      window.removeEventListener('message', onMessaging)
    }
  }, [onSubmit])

  return (
    <div>
      <iframe 
        title="fanthon_card"
        id="fanthon_card"
        src={`https://assets.fanthon.com.br/?access_token=${token}&primary_color=${primary_color}&fields=${encodedData}${url ? `&access_url=${url}`: ''}`} 
        bordered="false"
        width="100%" 
        height="350" 
        allowtransparency="true"
        seamless
        style={{ 
          border: 'none', 
          background: 'transparent',
          backgroundColor: 'transparent',
          overflow: 'hidden',
        }}
      >
      </iframe>
      
      <Row gutter={16}>
        <Col span={24}>
          <Button 
            size="large"
            type="primary"
            htmlType="submit"
            onClick={onClick}
            style={{ 
              padding: '20px 60px 40px 60px', 
              background: base?.primary_color,
              border: base?.primary_color,
            }}
            block
          >
            Pagar
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default FanthonReact;