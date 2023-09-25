import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
	apiKey: "AIzaSyDMPa3VsQ3qMSBW4gzKxgQeaxEEcRFyE0s",
	authDomain: "codeforcause-2074f.firebaseapp.com",
	projectId: "codeforcause-2074f",
	storageBucket: "codeforcause-2074f.appspot.com",
	messagingSenderId: "843209715558",
	appId: "1:843209715558:web:0af2974238f1128a08e2a7",
	measurementId: "G-L4Z6NHX2WP",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const analytics = isSupported().then((yes) =>
	yes ? getAnalytics(app) : null
);
