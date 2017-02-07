import React from 'react';
import { expect, assert } from 'chai';
import { shallow, mount } from 'enzyme';
import TaskList from './src/components/task_list';
import TaskItem from './src/components/task_item';

const tasks = [
    {id: 0, name: 'Complete task'},
    {id: 1, name: 'Add task'},
    {id: 2, name: 'Delete task'}
];

describe('TaskList', () => {
    it('should render TaskItem', () => {
        const wrapper = shallow(<TaskList tasks={tasks} />);
        expect(wrapper.containsAllMatchingElements([
            <TaskItem />,
        ])).to.equal(true);
    });
    it('there should be 3 items in TaskList', () => {
        const wrapper = mount(<TaskList tasks={tasks} />);
        expect(wrapper.find('li').length).to.equal(3);
    });
    it('should exists', () => {
        assert.isDefined(TaskList)
    })
});
describe('TaskItem', () => {
    it('should render one item of unordered list', () => {
        const item = mount(<TaskItem task={tasks[0]}/>);
        expect(item.find('li')).to.exist;
    });
    it('should exists', () => {
        assert.isDefined(TaskList)
    })
});