import React from 'react';
import { Route } from 'react-router-dom';


import CollectionOverview from '../../components/collection-overview/CollectionOverview';
import CollectionPage from '../collection/CollectionPage';
import WithSpinner from '../../components/spinner/WithSpinner';

import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop-actions';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase-util.js';

const mapDispatchToProps = (dispatch) => ({
	updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
	// for spinner component
	state = {
		loading: true
	}

	unsubscribeFromSnapshot = null;

	componentDidMount() {
		const { updateCollections } = this.props;
		const collectionRef = firestore.collection('collections');

		this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
			const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
			updateCollections(collectionsMap);
			this.setState({ loading: false });
		});
	}

	render() {
		const { loading } = this.state; // for spinner
		const { match } = this.props;
		return(
			<div>
				<Route exact path={`${match.path}`} 
					   render = { (props) => <CollectionOverviewWithSpinner isLoading={loading} {...props} />}
				/>	
				<Route path={`${match.path}/:collectionId`} 
					   render = { (props) => <CollectionPageWithSpinner isLoading={loading} {...props} />}
				/>
			</div>
		)
	}
}

export default connect(null, mapDispatchToProps)(ShopPage);

// const ShopPage = ({ match }) => (
// 	<div>
// 		<Route exact path={`${match.path}`} component={CollectionOverview} />	
// 		<Route path={`${match.path}/:collectionId`} component={CollectionPage} />
// 	</div>
// );

