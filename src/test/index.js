import test from 'ava'
import reducers from '../reducers'
import {INITIAL_DATA} from '../actions'
import {ADD_NEW_TASK, REMOVE_TASK, TOGGLE_STATUS} from "../actions/index";

test('Reducers - Initial data order with already ordered', t => {

    let initialState = {
        tasks: [{
            id: 0,
            value: "Test",
            prevId: null,
            status: false
        },
            {
                id: 1,
                value: "Test 2",
                prevId: 0,
                status: false
            },
            {
                id: 2,
                value: "Test 3",
                prevId: 1,
                status: true
            }]
    }


    let returnedState = reducers(null, {
        type: INITIAL_DATA,
        INITIAL_DATA: initialState
    })
    t.deepEqual(returnedState, initialState)
})

test('Reducers - Initial data order with mixed order', t => {

    let initialState = {
        tasks: [
            {
                id: 1,
                value: "Test 2",
                prevId: 2,
                status: false
            },
            {
                id: 0,
                value: "Test",
                prevId: null,
                status: false
            },
            {
                id: 2,
                value: "Test 3",
                prevId: 0,
                status: true
            }]
    }

    let expectedState = {
        tasks: [{
            id: 0,
            value: "Test",
            prevId: null,
            status: false
        },
            {
                id: 2,
                value: "Test 3",
                prevId: 0,
                status: true
            },
            {
                id: 1,
                value: "Test 2",
                prevId: 2,
                status: false
            }]
    }


    let returnedState = reducers(null, {
        type: INITIAL_DATA,
        INITIAL_DATA: initialState
    })

    t.deepEqual(returnedState, expectedState)
})


test('Reducers - Add new task should not deep equal', t => {

    let initialState = {
        tasks: [
            {
                id: 1,
                value: "Test 2",
                prevId: 2,
                status: false
            },
            {
                id: 0,
                value: "Test",
                prevId: null,
                status: false
            }]
    }

    let expectedState = {
        tasks: [{
            id: 0,
            value: "Test",
            prevId: null,
            status: false
        },
            {
                id: 2,
                value: "Test 3",
                prevId: 0,
                status: true
            },
            {
                id: 1,
                value: "Test 2",
                prevId: 2,
                status: false
            }]
    }


    let returnedState = reducers(initialState, {
        type: ADD_NEW_TASK,
        task: {
            id: 2,
            value: "Test 3",
            prevId: 0,
            status: true
        }
    })

    t.notDeepEqual(returnedState, expectedState)
})

test('Reducers - Add new task should equal', t => {

    let initialState = {
        tasks: [
            {
                id: 1,
                value: "Test 2",
                prevId: 2,
                status: false
            },
            {
                id: 0,
                value: "Test",
                prevId: null,
                status: false
            }]
    }

    let expectedState = {
        tasks: [{
            id: 1,
            value: "Test 2",
            prevId: 2,
            status: false
        }, {
            id: 0,
            value: "Test",
            prevId: null,
            status: false
        },

            {
                id: 2,
                value: "Test 3",
                prevId: 0,
                status: true
            }]
    }


    let returnedState = reducers(initialState, {
        type: ADD_NEW_TASK,
        task: {
            id: 2,
            value: "Test 3",
            prevId: 0,
            status: true
        }
    })

    t.deepEqual(returnedState, expectedState)
})

test('Reducers - Remove task should equal', t => {

    let initialState = {
        tasks: [
            {
                id: 1,
                value: "Test 2",
                prevId: 2,
                status: false
            },
            {
                id: 0,
                value: "Test",
                prevId: null,
                status: false
            }]
    }

    let expectedState = {
        tasks: [{
            id: 1,
            value: "Test 2",
            prevId: 2,
            status: false
        }]
    }


    let returnedState = reducers(initialState, {
        type: REMOVE_TASK,
        task: {
            id: 0,
            value: "Test",
            prevId: null,
            status: false
        }
    })

    t.deepEqual(returnedState, expectedState)
})


test('Reducers - Toggle task status should equal', t => {

    let initialState = {
        tasks: [
            {
                id: 1,
                value: "Test 2",
                prevId: 2,
                status: false
            },
            {
                id: 0,
                value: "Test",
                prevId: null,
                status: false
            }]
    }

    let expectedState = {
        tasks: [{
            id: 1,
            value: "Test 2",
            prevId: 2,
            status: false
        },
            {
                id: 0,
                value: "Test",
                prevId: null,
                status: true
            }]
    }

    let returnedState = reducers(initialState, {
        type: TOGGLE_STATUS,
        task: {
            id: 0
        }
    })

    t.deepEqual(returnedState, expectedState)
})
