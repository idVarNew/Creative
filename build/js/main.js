( function( $, window, document ) {

    var $window = $( window );

    $( function() {
        toggleNav();
        addEffect( '.products-page .project', "opacityEffect" );
        addEffect( '.project', "slideDown" );

        // add effect on Scrolling
        $window.scroll( function() {
            var windowWidth = $window.innerWidth()
            // Progress Bar
            addEffect( '.bar-1', "pb-80" );
            addEffect( '.bar-2', "pb-70" );
            addEffect( '.bar-3', "pb-50" );
            addEffect( '.bar-4', "pb-80" );

            // Projects
            if ( windowWidth >= 768 ) {
                addEffect( '.products-page .project', "opacityEffect" );
                addEffect( '.project', "slideDown" );
            }
            if ( windowWidth < 768 ) {
                addEffect( '.project', "opacityEffect" );
                addEffect( '.products-page .project', "opacityEffect" );
            }
        } );
    } );

    //---------------------------------------------------------
    //  Navigation Button
    //---------------------------------------------------------
    var toggleNav = function() {
        var $navbarToggle = $( ".navbar-toggle" ),
            $navbarNav = $( ".navbar-nav" ),
            $panelTitle = $( ".panel-title" ).find( "a" ),
            $toggleIcon = $panelTitle.find( ".toggle-icon" ),
            toggleNav = "show-hide";



        $navbarToggle.on( "click", function() {
            $navbarNav.toggleClass( toggleNav )
        } )


    }

    //---------------------------------------------------------
    //  Effects
    //---------------------------------------------------------
    var addEffect = function( id, effect ) {
        var $element = $( id ),
            height = $( window ).innerHeight(),
            divideHeight = height / 3 * 2;

        $element.each( function() {
            var $this = $( this ),
                elementPosition = $this.offset().top,
                scrollPosition = $window.scrollTop();

            if ( scrollPosition > elementPosition - divideHeight ) {
                if ( !( effect === "" ) ) {
                    $this.addClass( effect );
                }
            }
        } );
    }

}( window.jQuery, window, document ) );
