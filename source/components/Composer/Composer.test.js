//Core
import React from 'react';
import { mount } from 'enzyme';
import { Composer } from './';

const props = {
    _createPost: jest.fn(),
    avatar: 'test-string',
    currentUserFirstName: 'test-string'
};

const comment = 'Anything';

const initialState = {
    comment: '',
};

const updatedState = {
    comment,
}

const result = mount(<Composer {...props} />);

const _submitCommentSpy = jest.spyOn(result.instance(), '_submitComment');
const _handleFormSubmitSpy = jest.spyOn(result.instance(), '_handleFormSubmit');
const _submitOnEnterSpy = jest.spyOn(result.instance(), '_submitOnEnter');
const _updateCommentSpy = jest.spyOn(result.instance(), '_updateComment');

describe('Composer component', () => {
    test('Should have 1 "section" element', () => {
        expect(result.find('section')).toHaveLength(1);
    });

    test('Should have 1 "form" element', () => {
        expect(result.find('form')).toHaveLength(1);
    });

    test('Should have 1 "input" element', () => {
        expect(result.find('input')).toHaveLength(1);
    });

    test('Should have 1 "img" element', () => {
        expect(result.find('img')).toHaveLength(1);
    });

    test('Should have 1 "textarea" element', () => {
        expect(result.find('textarea')).toHaveLength(1);
    });

    test('Should have valid initial state', () => {
        expect(result.state()).toEqual(initialState);
    });

    test('Textarea value should be empty initially', () => {
        expect(result.find('textarea').text()).toBe('');
    });

    test('Should respond to state change properly', () => {
        result.setState({
            comment,
        });

        expect(result.state()).toEqual(updatedState);
        expect(result.find('textarea').text()).toBe(comment);

        result.setState({
            comment: '',
        });

        expect(result.state()).toEqual(initialState);
        expect(result.find('textarea').text()).toBe('');
    });

    test('Should handle textarea "change" event', () => {
        result.find('textarea').simulate('change', {
            target: {
                value: comment,
            },
        });

        expect(result.find('textarea').text()).toBe(comment);
        expect(result.state()).toEqual(updatedState);

        expect(_updateCommentSpy).toHaveBeenCalledTimes(1);
    });

    test('Should handle form "submit" event', () => {
        result.find('form').simulate('submit');

        expect(result.state()).toEqual(initialState);
    });

    test('_createPost prop should be invoked once after form submission', () => {
        expect(props._createPost).toHaveBeenCalledTimes(1);
    });

    test('_submitComment and _handleFormSubmit class methods should be invoked once after form is submitted', () => {
        expect(_submitCommentSpy).toHaveBeenCalledTimes(1);
        expect(_handleFormSubmitSpy).toHaveBeenCalledTimes(1);
    });

    test('Enter key should be pressed once after form is submitted', () => {
        result.find('textarea').simulate('keypress', {
            key: 'Enter',
        });

        expect(_submitOnEnterSpy).toHaveBeenCalledTimes(1);
    });
});