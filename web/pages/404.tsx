import Container from '../components/Container';
import HeroHeader from '../components/header/HeroHeader';

// view all blog posts
const Custom404 = () => {
  return (
    <div>
      <Container
        wrapperClass="min-h-100 d-flex align-items-center"
        className="text-center"
      >
        <HeroHeader
          title={'404'}
          subtitle={'Oops! Looks like that page does not exist or was moved.'}
        />
      </Container>
    </div>
  );
};

export default Custom404
