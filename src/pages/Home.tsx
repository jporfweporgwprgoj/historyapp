import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{t('home.title')}</h2>
      <Link to="/experience">
        <button>{t('home.start_button')}</button>
      </Link>
    </div>
  );
};

export default Home;
