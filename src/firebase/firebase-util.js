import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyABnQIEyrP_ENR3Z2tw5ZUT_66YysmNUog",
    authDomain: "retazo-db.firebaseapp.com",
    databaseURL: "https://retazo-db.firebaseio.com",
    projectId: "retazo-db",
    storageBucket: "retazo-db.appspot.com",
    messagingSenderId: "802634734255",
    appId: "1:802634734255:web:172e6bf4a3b037bae8525a"
};

firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) {
		return
	}

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();
	if (!snapShot.exists) {
		const {displayName, email} = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			})
		} catch (error) {
				console.log('Error creating user', error.message);
		}
	}

	return userRef;
}

// to add collections to firebase

export const addCollectionAndDocs = async (collectionKey, objectsToAdd) => {
	const collectionRef = firestore.collection(collectionKey);

	const batch = firestore.batch();
	objectsToAdd.forEach(object => {
		const newDocRef = collectionRef.doc();
		batch.set(newDocRef, object);
	});

	return await batch.commit();
};

// to be used in ShopPage.js

export const convertCollectionsSnapshotToMap = collectionsSnapshot => {
	const transformedCollection = collectionsSnapshot.docs.map( docSnapshot => {
		const { title, items } = docSnapshot.data();
		return {
			routeName: encodeURI(title.toLowerCase()),
			id: docSnapshot.id,
			title,
			items
		}
	});

	return transformedCollection.reduce((acc, collection) => {
		acc[collection.title.toLowerCase()] = collection;
		return acc;
	}, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();


// Google authentication utility
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


// export const addCollectionAndDocs = async (collectionKey, objectsToAdd) => {
// 	const collectionRef = firestore.collection(collectionKey);

// 	const batch = firestore.batch();
// 	objectsToAdd.forEach(object => {
// 		const newDocRef = collectionRef.doc();
// 		batch.set(newDocRef, object);
// 	});

// 	return await batch.commit();
// }






// export const createUserProfileDoc = async (userAuth, additionalData) => {
// 	if (!userAuth) return;

// 	const userRef = firestore.doc(`users/${userAuth.uid}`);
// 	const snapShot = await userRef.get();
// 	if (snapShot && snapShot.exists) {
// 		return userRef;
// 	} else {
// 		const {displayName, email} = userAuth;
// 		const createdAt = new Date();

// 		try {
// 			await userRef.set({
// 				displayName,
// 				email,
// 				createdAt,
// 				...additionalData
// 			})
// 		} catch (error) {
// 				console.log('Error create user', error.message);
// 		}
// 	}
// }
