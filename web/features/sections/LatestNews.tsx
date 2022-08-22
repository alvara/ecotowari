import PropTypes from 'prop-types';
import InfoCard from '../../components/card/InfoCard';
import Link from 'next/link';

export default function LatestNews({ posts }) {
  return (
    <div className="text-center">
      <span className="preTitle">Blog</span>
      <h2>Latest Articles</h2>
      <div className="row">
        {posts.length > 0 &&
          posts.map(
            ({
              _id,
              title = '',
              slug,
              publishedAt = '',
              mainImage,
              categories = [],
            }) => (
              <div className="col-lg-4" key={_id}>
                <InfoCard
                  className="postCard"
                  mainImage={mainImage}
                  href={'/blog/[slug]'}
                  as={`/blog/${slug.current}`}
                  title={title}
                  subtitle={new Date(publishedAt).toDateString()}
                  tags={categories}
                  height={140}
                />
              </div>
            )
          )}
      </div>
      <Link href={'/blog'} passHref>
        <button className="btn">Read More Articles</button>
      </Link>
    </div>
  );
}

LatestNews.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
};
