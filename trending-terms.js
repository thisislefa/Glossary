document.addEventListener('DOMContentLoaded', function() {
        const wrapper = document.getElementById('trendingTermsWrapper');
        const scrollLeftBtn = document.getElementById('scrollLeft');
        const scrollRightBtn = document.getElementById('scrollRight');

        const cardWidth = 280;

        scrollRightBtn.addEventListener('click', function() {
            wrapper.scrollLeft += cardWidth * 3;
        });

        scrollLeftBtn.addEventListener('click', function() {
            wrapper.scrollLeft -= cardWidth * 3;
        });

        function checkScrollability() {
            const isScrollable = wrapper.scrollWidth > wrapper.clientWidth;
            scrollLeftBtn.style.display = isScrollable ? 'flex' : 'none';
            scrollRightBtn.style.display = isScrollable ? 'flex' : 'none';
        }
        
        checkScrollability();
        window.addEventListener('resize', checkScrollability);
    });