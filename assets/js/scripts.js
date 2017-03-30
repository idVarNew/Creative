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

function myMap() {
    var mapCanvas = document.getElementById( "map" );
    var mapOptions = {
        center: new google.maps.LatLng( 51.5, -0.2 ),
        zoom: 10,
        styles: [ {
                elementType: 'geometry',
                stylers: [ {
                    color: '#ebe3cd'
                } ]
            },
            {
                elementType: 'labels.text.fill',
                stylers: [ {
                    color: '#523735'
                } ]
            },
            {
                elementType: 'labels.text.stroke',
                stylers: [ {
                    color: '#f5f1e6'
                } ]
            },
            {
                featureType: 'administrative',
                elementType: 'geometry.stroke',
                stylers: [ {
                    color: '#c9b2a6'
                } ]
            },
            {
                featureType: 'administrative.land_parcel',
                elementType: 'geometry.stroke',
                stylers: [ {
                    color: '#dcd2be'
                } ]
            },
            {
                featureType: 'administrative.land_parcel',
                elementType: 'labels.text.fill',
                stylers: [ {
                    color: '#ae9e90'
                } ]
            },
            {
                featureType: 'landscape.natural',
                elementType: 'geometry',
                stylers: [ {
                    color: '#dfd2ae'
                } ]
            },
            {
                featureType: 'poi',
                elementType: 'geometry',
                stylers: [ {
                    color: '#dfd2ae'
                } ]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [ {
                    color: '#93817c'
                } ]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry.fill',
                stylers: [ {
                    color: '#a5b076'
                } ]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [ {
                    color: '#447530'
                } ]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [ {
                    color: '#f5f1e6'
                } ]
            },
            {
                featureType: 'road.arterial',
                elementType: 'geometry',
                stylers: [ {
                    color: '#fdfcf8'
                } ]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [ {
                    color: '#f8c967'
                } ]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [ {
                    color: '#e9bc62'
                } ]
            },
            {
                featureType: 'road.highway.controlled_access',
                elementType: 'geometry',
                stylers: [ {
                    color: '#e98d58'
                } ]
            },
            {
                featureType: 'road.highway.controlled_access',
                elementType: 'geometry.stroke',
                stylers: [ {
                    color: '#db8555'
                } ]
            },
            {
                featureType: 'road.local',
                elementType: 'labels.text.fill',
                stylers: [ {
                    color: '#806b63'
                } ]
            },
            {
                featureType: 'transit.line',
                elementType: 'geometry',
                stylers: [ {
                    color: '#dfd2ae'
                } ]
            },
            {
                featureType: 'transit.line',
                elementType: 'labels.text.fill',
                stylers: [ {
                    color: '#8f7d77'
                } ]
            },
            {
                featureType: 'transit.line',
                elementType: 'labels.text.stroke',
                stylers: [ {
                    color: '#ebe3cd'
                } ]
            },
            {
                featureType: 'transit.station',
                elementType: 'geometry',
                stylers: [ {
                    color: '#dfd2ae'
                } ]
            },
            {
                featureType: 'water',
                elementType: 'geometry.fill',
                stylers: [ {
                    color: '#b9d3c2'
                } ]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [ {
                    color: '#92998d'
                } ]
            }
        ],
    };
    var map = new google.maps.Map( mapCanvas, mapOptions );
}

/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-picture-setclasses !*/
!function(e,n,s){function o(e,n){return typeof e===n}function a(){var e,n,s,a,t,f,r;for(var c in l)if(l.hasOwnProperty(c)){if(e=[],n=l[c],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(s=0;s<n.options.aliases.length;s++)e.push(n.options.aliases[s].toLowerCase());for(a=o(n.fn,"function")?n.fn():n.fn,t=0;t<e.length;t++)f=e[t],r=f.split("."),1===r.length?Modernizr[r[0]]=a:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=a),i.push((a?"":"no-")+r.join("-"))}}function t(e){var n=r.className,s=Modernizr._config.classPrefix||"";if(c&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+s+"no-js(\\s|$)");n=n.replace(o,"$1"+s+"js$2")}Modernizr._config.enableClasses&&(n+=" "+s+e.join(" "+s),c?r.className.baseVal=n:r.className=n)}var i=[],l=[],f={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var s=this;setTimeout(function(){n(s[e])},0)},addTest:function(e,n,s){l.push({name:e,fn:n,options:s})},addAsyncTest:function(e){l.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=f,Modernizr=new Modernizr,Modernizr.addTest("picture","HTMLPictureElement"in e);var r=n.documentElement,c="svg"===r.nodeName.toLowerCase();a(),t(i),delete f.addTest,delete f.addAsyncTest;for(var u=0;u<Modernizr._q.length;u++)Modernizr._q[u]();e.Modernizr=Modernizr}(window,document);