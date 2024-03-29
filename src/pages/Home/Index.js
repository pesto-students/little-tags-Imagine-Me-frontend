import Slider from 'react-slick'
import CategoryCarouselCard from '../../components/Cards/CategoryCarouselCard'
import MainCarouselCard from '../../components/Cards/MainCarouselCard';
import { ArrowPrev, ArrowNext } from '../../components/Slider/Arrows'

import SearchBar from '../../components/Header/SearchBar'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import categoryData from '../../data/category.json'
import mainCarouselData from '../../data/main-carousel.json'

export default function Home() {
    const settingsForCategorySlider = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        variableWidth: true,
        swipeToSlide: true,
        nextArrow: <ArrowNext />,
        prevArrow: <ArrowPrev />
    };
    const settingsForMainSlider = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        swipeToSlide: true,
        slidesToScroll: 1,
        adaptiveHeight: true,
        nextArrow: <ArrowNext />,
        prevArrow: <ArrowPrev />
    }
    return <>
        <SearchBar className="md:hidden w-11/12 m-auto my-3" />
        <div className="HomePage flex flex-col mx-3 h-5/6 sm:mx-10 md:mx-24 sm:flex-col-reverse">

            <Slider {...settingsForCategorySlider}>
                {categoryData.map((category, index) => <CategoryCarouselCard
                    key={`categoryCarouselId${index}`}
                    title={category.name}
                    image={category.image} />
                )}
            </Slider>
            <Slider {...settingsForMainSlider} className="h-full">
                {mainCarouselData.map((carousel, index) => <MainCarouselCard
                    key={`mainCarouselId${index}`}
                    title={carousel.title}
                    description={carousel.description}
                    image={carousel.image}
                />
                )}
            </Slider>
        </div>
    </>
}