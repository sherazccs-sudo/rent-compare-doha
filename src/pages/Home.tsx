import Hero from '../components/Hero';
import FeaturedProperties from '../components/FeaturedProperties';
import ComparisonTable from '../components/ComparisonTable';
import Alerts from '../components/Alerts';

const Home = () => {
    return (
        <div className="flex-1">
            <Hero />
            <FeaturedProperties />
            <ComparisonTable />
            <Alerts />
        </div>
    );
};

export default Home;
