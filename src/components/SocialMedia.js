import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import InstagramEmbed from 'react-instagram-embed';
import { FacebookProvider, EmbeddedPost } from 'react-facebook';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import YouTube from 'react-youtube-embed';

export default function SocialMedia() {
  return (
    <div className="social-section">
    <Container>
    <Row className="col-lg-12 col-md-12 col-sm-12 social-row">

     <Col className="col-lg-4 col-md-6 col-sm-12">
     <Card className="trial"
           style={{ height: '26.7rem', width: '21.5rem' }}>
           <FacebookProvider appId="477221329905639">
              <EmbeddedPost href="https://www.facebook.com/AzziadNasenya/posts/2876109055956482" />
            </FacebookProvider>
        </Card>
     </Col>


     <Col className="col-lg-4 col-md-6 col-sm-12">
     <Card className="trial"
           style={{ height: '26.7rem', width: '21.5rem' }}>
           <InstagramEmbed
                className="instagram-media"
                url="https://www.instagram.com/p/CF7IzUhAX2b/"
                clientAccessToken="477221329905639|d62e81419a7bdd07433492b2a2a57e1f"
                maxWidth={376}
                hideCaption={false}
                containerTagName="div"
                protocol=""
                injectScript
                onLoading={() => {}}
                onSuccess={() => {}}
                onAfterRender={() => {}}
                onFailure={() => {}}
              />
      </Card>
     </Col>


     <Col className="col-lg-4 col-md-6 col-sm-12">
     <Card className="trial insta-small"
           style={{ height: '26.7rem', width: '21.5rem' }}>
           <FacebookProvider appId="477221329905639">
              <EmbeddedPost href="https://www.facebook.com/ProgasKenya/photos/a.1184367798366403/1963904557079386/" />
            </FacebookProvider>
         </Card>
     </Col>

      <Col className="col-lg-4 col-md-6 col-sm-12 mb-4">
      <Card className="trial" style={{ height: '20.2rem', width: '21.5rem' }}>
        <TwitterTweetEmbed tweetId={'1326588286165463041'} data-chrome="noborders" />
        </Card>
      </Col>
      <Col className="col-lg-4 col-md-6 col-sm-12 mb-4">
      <Card className="trial" style={{ height: '20.2rem', width: '21.5rem' }}>
      <YouTube className="youtube-social" id="hdfMBVm8BkE" />
       </Card>
      </Col>
      <Col className="col-lg-4 col-md-6 col-sm-12 mb-4">
      <Card className="trial" style={{ height: '20.2rem', width: '21.5rem' }}>
      <TwitterTweetEmbed
        className="twitter-tweet"
          tweetId={'1308327176480190465'}
        />
        </Card>
      </Col>
      </Row>
    </Container>
    </div>
  );
}
