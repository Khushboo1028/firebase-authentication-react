import Firebase from './firebase';
import 'firebase/auth';
import FirebaseContext, { withFirebase } from './context';
 
export default Firebase;
 
export { FirebaseContext, withFirebase };