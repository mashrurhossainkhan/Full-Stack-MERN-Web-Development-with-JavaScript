import React, { useEffect } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import MenuItem from '../components/MenuItem';
import { connect } from 'react-redux';
import { getDishes } from '../redux/actionCreators';

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getDishes: () => dispatch(getDishes()),
    }
}

const MenuScreen = (props) => {
    useEffect(() => {
        props.getDishes();
    }, []);

    return (
        <View>
            <FlatList
                data={props.dishes}
                renderItem={
                    ({ item }) => (<MenuItem item={item} />)
                }
                keyExtractor={item => item.id.toString()}
            />
        </View>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuScreen);