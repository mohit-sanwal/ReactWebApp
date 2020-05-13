import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import App from './App';

const mapDispatchToProps = dispatch => {
    return  {

    }
}

const mapStateToProps = state => {
    return {
    };
};


const AppContainer = withRouter(
    connect(
    mapStateToProps,
    mapDispatchToProps
    )(App)
);

export default AppContainer;
