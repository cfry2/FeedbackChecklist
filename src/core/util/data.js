import id from "core/util/itemID";

export default function() {

    var data = 
    {
        jobs : [
            {
                id : 1,
                jobName : "rea16245"
            },
            {
                id : 2,
                jobName : "rea13748"
            },
            {
                id : 3,
                jobName : "rea13728"
            }
        ],
        feedback : [
            {
                id : id(),
                jobId : 1,
                feedback : "fix padding",
                assignedTo : "user-1",
                assignedBy : "user-2",
                completed : false,
                approved : false
            },
            {
                id : id(),
                jobId : 2,
                feedback : "fix button alignment",
                assignedTo : "user-1",
                assignedBy : "user-2",
                completed : false,
                approved : false
            },
            {
                id : id(),
                jobId : 3,
                feedback : "add 'hello world' to alt tag",
                assignedTo : "user-1",
                assignedBy : "user-2",
                completed : false,
                approved : false
            },
            {
                id : id(),
                jobId : 2,
                feedback : "up the font sizing to 18px",
                assignedTo : "user-1",
                assignedBy : "user-2",
                completed : false,
                approved : false
            },
        ]

    };

    return data;
}
