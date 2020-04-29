// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

import '~/assets/css/open-iconic-bootstrap.min.css'
import '~/assets/css/animate.css'


import '~/assets/css/magnific-popup.css'

import '~/assets/css/aos.css'

import '~/assets/css/ionicons.min.css'

import '~/assets/css/bootstrap-datepicker.css'
import '~/assets/css/jquery.timepicker.css'


import '~/assets/css/flaticon.css'
import '~/assets/css/icomoon.css'
import '~/assets/css/style.css'

import * as  jquery from '~/assets/js/jquery.min.js'
import * as  migrate from '~/assets/js/jquery-migrate-3.0.1.min.js'
import * as  popper from '~/assets/js/popper.min.js'
import * as  bootstrap from '~/assets/js/bootstrap.min.js'
import * as  easing from '~/assets/js/jquery.easing.1.3.js'
import * as  waypoints from '~/assets/js/jquery.waypoints.min.js'
import * as  stellar from '~/assets/js/jquery.stellar.min.js'
import * as  owlCarousel from '~/assets/js/owl.carousel.min.js'
import * as  magnificPopup from '~/assets/js/jquery.magnific-popup.min.js'
import * as  aos from '~/assets/js/aos.js'
import * as  animateNumber from '~/assets/js/jquery.animateNumber.min.js'
import * as  bootstrapDatepicker from '~/assets/js/bootstrap-datepicker.js'
import * as  timepicker from '~/assets/js/jquery.timepicker.min.js'
import * as  scrollax from '~/assets/js/scrollax.min.js'
import * as  googleMap from '~/assets/js/google-map.js'
import * as  main from '~/assets/js/main.js'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.use(jQuery)
  Vue.use(BootstrapVue)

}
