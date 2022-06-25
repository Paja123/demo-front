import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'materialize-css/dist/css/materialize.min.css'
//import 'material-design-icons-iconfont/src/material-design-icons';
//import 'material-design-icons/iconfont/material-icons.css'

// /* import the fontawesome core */
// import { library } from '@fortawesome/fontawesome-svg-core'

// /* import font awesome icon component */
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// /* import specific icons */
// import { laptop} from '@fortawesome/free-solid-svg-icons'

// /* add icons to the library */
// library.add(laptop)



createApp(App)
.use(router)
//.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
