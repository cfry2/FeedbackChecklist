import { routerReducer } from 'react-router-redux';

export const initialState = {
    jobs : [
        {
            id : 1,
            jobName : "rea16245"
        }
    ],
    feedback : [
        {
            id : 1,
            jobId : 1,
            feedback : "fix padding",
            assignedTo : "user-1",
            assignedBy : "user-2",
            completed : true,
            approved : false
        }
    ]

};

export default function reducer(state = initialState, action) {
    return {
        routing : routerReducer(state.routing, action),
        jobs : [
            {
                id : 1,
                jobName : "rea16245"
            }
        ],
        feedback : [
            {
                id : 1,
                jobId : 1,
                feedback : "fix padding",
                assignedTo : "user-1",
                assignedBy : "user-2",
                completed : true,
                approved : false
            }
        ]
    };
}