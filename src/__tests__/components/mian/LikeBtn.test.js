import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import LikeBtn from "../../../components/main/components/LikeBtn";

describe("<LikeBtn /> UI Component", () => {
	it("invokes onClick", () => {
		Enzyme.configure({ adapter: new Adapter() });

		const _click = jest.fn();

		Enzyme.shallow(<LikeBtn onLike={_click}/>)
			.find('button.news-like-btn')
			.simulate('click');

		expect(_click).toBeCalled();
	});
});