import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Image from 'next/image';
// import MailchimpSubscribe from 'react-mailchimp-subscribe';

GetStickerCTA.propTypes = {
  data: PropTypes.object,
};

export default function GetStickerCTA({ data }) {
  const router = useRouter();

  const url =
    'https://ecotowari.us14.list-manage.com/subscribe/post?u=fb888509b6f45d3e61ff06e47&amp;id=5ec65eaa39';

  return (
    <div id="sticker" className="row">
      <span className="text-center preTitle">Get a sticker</span>
      <h2 className="text-center pb-0 mb-0">{data.title[router.locale]}</h2>
      <div className="offset-md-2 col-md-8">
        <div className="my-5">
          <Image
            src="/stickerv1.png"
            width="500"
            height="100"
            layout="responsive"
            objectFit="contain"
            alt="Sticker Preview"
            quality={30}
            priority
          />
        </div>
        <pre>{data.content[router.locale]}</pre>
        <div className="text-center mailingList">
          {/* <MailchimpSubscribe url={url} /> */}
        </div>
      </div>
      <div className="bg-overlay"></div>
    </div>
  );
}
