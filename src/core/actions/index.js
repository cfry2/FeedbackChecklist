export const FEEDBACK_CHANGE = 'FEEDBACK_CHANGE';
export const FEEDBACK_ADD = 'FEEDBACK_ADD';

export function feedbackChange(index, item, value) {
    return {
        type : FEEDBACK_CHANGE,
        index : index,
        item: item,
        value : value
    }
}

export function feedbackAdd(item)
{
    return {
        type : FEEDBACK_ADD,
        item: item
    }
}