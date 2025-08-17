import { type ReactNode, useRef, useState} from 'react';
import styles from './ProductCardContainer.module.css';

type ProductCardContainerProps = {
    title: string;
    children: ReactNode;
};

function ProductCardContainer(props: ProductCardContainerProps) {
    const { title, children} = props;

     const carouselRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true); // Asumimos que puede haber scroll al principio

    const checkScrollPosition = () => {
        const container = carouselRef.current;
        if (!container) return;

        const atStart = container.scrollLeft <= 0;
        const atEnd = container.scrollLeft + container.offsetWidth >= container.scrollWidth -1;

        setCanScrollLeft(!atStart);
        setCanScrollRight(!atEnd);
    };

    const scroll = (direction: 'left' | 'right') => {
        const container = carouselRef.current;
        if (!container) return;

        const scrollAmount = 220;
        container.scrollBy({
          left: direction === 'left' ? -scrollAmount : scrollAmount,
          behavior: 'smooth',
        });
    };
     return (
        <section className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.carouselWrapper}>
                {canScrollLeft && (
                    <button className={styles.scrollButton} onClick={() => scroll('left')}>
                        ←
                    </button>
                )}
                <div className={styles.productcarousel} ref={carouselRef}  onScroll={checkScrollPosition}>
                    <div className={styles.productContainer}>{children}</div>
                </div>
                {canScrollRight && (
                    <button className={styles.scrollButton} onClick={() => scroll('right')}>
                        →
                    </button>
                )}
            </div>
        </section>
    );
}

export default ProductCardContainer