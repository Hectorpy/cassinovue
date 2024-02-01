import {Amplify} from 'aws-amplify'
import {Auth} from 'aws-amplify'
import config from './aws-exports'
Amplify.configure(config)
Auth.configure(config);
// https://github.com/wolfeidau/cognito-vue-bootstrap